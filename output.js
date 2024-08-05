//Mon Aug 05 2024 11:44:24 GMT+0000 (Coordinated Universal Time)
//Base:https://github.com/echo094/decode-js
//Modify:https://github.com/smallfawn/decode_action
const $ = new Env("融磐安");
const notify = $.isNode() ? require("../sendNotify") : "";
(() => {
  function b(a6) {
    b = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (a9) {
      return typeof a9;
    } : function (a9) {
      return a9 && "function" == typeof Symbol && a9.constructor === Symbol && a9 !== Symbol.prototype ? "symbol" : typeof a9;
    };
    return b(a6);
  }
  function c(a6, a7) {
    var a9 = "undefined" != typeof Symbol && a6[Symbol.iterator] || a6["@@iterator"];
    if (!a9) {
      if (Array.isArray(a6) || (a9 = g(a6)) || a7 && a6 && "number" == typeof a6.length) {
        a9 && (a6 = a9);
        var aa = 0,
          ab = function () {};
        return {
          s: ab,
          n: function () {
            var ai = {
              done: !0
            };
            return aa >= a6.length ? ai : {
              done: !1,
              value: a6[aa++]
            };
          },
          e: function (ai) {
            throw ai;
          },
          f: ab
        };
      }
      throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }
    var ac,
      ad = !0,
      ae = !1;
    return {
      s: function () {
        a9 = a9.call(a6);
      },
      n: function () {
        var ak = a9.next();
        ad = ak.done;
        return ak;
      },
      e: function (ai) {
        ae = !0;
        ac = ai;
      },
      f: function () {
        try {
          ad || null == a9.return || a9.return();
        } finally {
          if (ae) {
            throw ac;
          }
        }
      }
    };
  }
  function d(a6, a7) {
    return j(a6) || i(a6, a7) || g(a6, a7) || f();
  }
  function f() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }
  function g(a6, a7) {
    if (a6) {
      if ("string" == typeof a6) {
        return h(a6, a7);
      }
      var a9 = {}.toString.call(a6).slice(8, -1);
      "Object" === a9 && a6.constructor && (a9 = a6.constructor.name);
      return "Map" === a9 || "Set" === a9 ? Array.from(a6) : "Arguments" === a9 || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a9) ? h(a6, a7) : void 0;
    }
  }
  function h(a6, a7) {
    (null == a7 || a7 > a6.length) && (a7 = a6.length);
    for (var a8 = 0, a9 = Array(a7); a8 < a7; a8++) {
      a9[a8] = a6[a8];
    }
    return a9;
  }
  function i(a6, a7) {
    var a9 = null == a6 ? null : "undefined" != typeof Symbol && a6[Symbol.iterator] || a6["@@iterator"];
    if (null != a9) {
      var aa,
        ab,
        ac,
        ad,
        ae = [],
        af = !0,
        ag = !1;
      try {
        if (ac = (a9 = a9.call(a6)).next, 0 === a7) {
          if (Object(a9) !== a9) {
            return;
          }
          af = !1;
        } else {
          for (; !(af = (aa = ac.call(a9)).done) && (ae.push(aa.value), ae.length !== a7); af = !0) {}
        }
      } catch (ak) {
        ag = !0;
        ab = ak;
      } finally {
        try {
          if (!af && null != a9.return && (ad = a9.return(), Object(ad) !== ad)) {
            return;
          }
        } finally {
          if (ag) {
            throw ab;
          }
        }
      }
      return ae;
    }
  }
  function j(a6) {
    if (Array.isArray(a6)) {
      return a6;
    }
  }
  function k() {
    'use strict';

    k = function () {
      return a8;
    };
    var a7,
      a8 = {},
      a9 = Object.prototype,
      aa = a9.hasOwnProperty,
      ab = Object.defineProperty || function (aD, aE, aF) {
        aD[aE] = aF.value;
      },
      ac = "function" == typeof Symbol ? Symbol : {},
      ad = ac.iterator || "@@iterator",
      ae = ac.asyncIterator || "@@asyncIterator",
      af = ac.toStringTag || "@@toStringTag";
    function ag(aD, aE, aF) {
      var aG = {
        value: aF,
        enumerable: !0,
        configurable: !0,
        writable: !0
      };
      Object.defineProperty(aD, aE, aG);
      return aD[aE];
    }
    try {
      ag({}, "");
    } catch (aE) {
      ag = function (aG, aH, aI) {
        return aG[aH] = aI;
      };
    }
    function ah(aG, aH, aI, aJ) {
      var aK = aH && aH.prototype instanceof ao ? aH : ao,
        aL = Object.create(aK.prototype),
        aM = new aB(aJ || []);
      ab(aL, "_invoke", {
        value: ax(aG, aI, aM)
      });
      return aL;
    }
    function ai(aG, aH, aI) {
      try {
        return {
          type: "normal",
          arg: aG.call(aH, aI)
        };
      } catch (aN) {
        var aK = {};
        aK.type = "throw";
        aK.arg = aN;
        return aK;
      }
    }
    a8.wrap = ah;
    var aj = "suspendedStart",
      ak = "suspendedYield",
      al = "executing",
      am = "completed",
      an = {};
    function ao() {}
    function ap() {}
    function aq() {}
    var ar = {};
    ag(ar, ad, function () {
      return this;
    });
    var as = Object.getPrototypeOf,
      at = as && as(as(aC([])));
    at && at !== a9 && aa.call(at, ad) && (ar = at);
    aq.prototype = ao.prototype = Object.create(ar);
    var au = aq.prototype;
    function av(aG) {
      ["next", "throw", "return"].forEach(function (aI) {
        ag(aG, aI, function (aL) {
          return this._invoke(aI, aL);
        });
      });
    }
    function aw(aG, aH) {
      function aL(aM, aN, aO, aP) {
        var aR = ai(aG[aM], aG, aN);
        if ("throw" !== aR.type) {
          var aS = aR.arg,
            aT = aS.value;
          return aT && "object" == b(aT) && aa.call(aT, "__await") ? aH.resolve(aT.__await).then(function (aV) {
            aL("next", aV, aO, aP);
          }, function (aV) {
            aL("throw", aV, aO, aP);
          }) : aH.resolve(aT).then(function (aV) {
            aS.value = aV;
            aO(aS);
          }, function (aV) {
            return aL("throw", aV, aO, aP);
          });
        }
        aP(aR.arg);
      }
      var aJ;
      ab(this, "_invoke", {
        value: function (aM, aN) {
          function aP() {
            return new aH(function (aR, aS) {
              aL(aM, aN, aR, aS);
            });
          }
          return aJ = aJ ? aJ.then(aP, aP) : aP();
        }
      });
    }
    function ax(aG, aH, aI) {
      var aK = aj;
      return function (aL, aM) {
        if (aK === al) {
          throw Error("Generator is already running");
        }
        if (aK === am) {
          if ("throw" === aL) {
            throw aM;
          }
          var aO = {
            value: a7,
            done: !0
          };
          return aO;
        }
        for (aI.method = aL, aI.arg = aM;;) {
          var aP = aI.delegate;
          if (aP) {
            var aQ = ay(aP, aI);
            if (aQ) {
              if (aQ === an) {
                continue;
              }
              return aQ;
            }
          }
          if ("next" === aI.method) {
            aI.sent = aI._sent = aI.arg;
          } else {
            if ("throw" === aI.method) {
              if (aK === aj) {
                throw aK = am, aI.arg;
              }
              aI.dispatchException(aI.arg);
            } else {
              "return" === aI.method && aI.abrupt("return", aI.arg);
            }
          }
          aK = al;
          var aR = ai(aG, aH, aI);
          if ("normal" === aR.type) {
            if (aK = aI.done ? am : ak, aR.arg === an) {
              continue;
            }
            var aS = {};
            aS.value = aR.arg;
            aS.done = aI.done;
            return aS;
          }
          "throw" === aR.type && (aK = am, aI.method = "throw", aI.arg = aR.arg);
        }
      };
    }
    function ay(aG, aH) {
      var aI = aH.method,
        aJ = aG.iterator[aI];
      if (aJ === a7) {
        aH.delegate = null;
        "throw" === aI && aG.iterator.return && (aH.method = "return", aH.arg = a7, ay(aG, aH), "throw" === aH.method) || "return" !== aI && (aH.method = "throw", aH.arg = new TypeError("The iterator does not provide a '" + aI + "' method"));
        return an;
      }
      var aK = ai(aJ, aG.iterator, aH.arg);
      if ("throw" === aK.type) {
        aH.method = "throw";
        aH.arg = aK.arg;
        aH.delegate = null;
        return an;
      }
      var aL = aK.arg;
      return aL ? aL.done ? (aH[aG.resultName] = aL.value, aH.next = aG.nextLoc, "return" !== aH.method && (aH.method = "next", aH.arg = a7), aH.delegate = null, an) : aL : (aH.method = "throw", aH.arg = new TypeError("iterator result is not an object"), aH.delegate = null, an);
    }
    function az(aG) {
      var aH = {
        tryLoc: aG[0]
      };
      var aI = aH;
      1 in aG && (aI.catchLoc = aG[1]);
      2 in aG && (aI.finallyLoc = aG[2], aI.afterLoc = aG[3]);
      this.tryEntries.push(aI);
    }
    function aA(aG) {
      var aH = aG.completion || {};
      aH.type = "normal";
      delete aH.arg;
      aG.completion = aH;
    }
    function aB(aG) {
      var aH = {
        tryLoc: "root"
      };
      this.tryEntries = [aH];
      aG.forEach(az, this);
      this.reset(!0);
    }
    function aC(aG) {
      if (aG || "" === aG) {
        var aH = aG[ad];
        if (aH) {
          return aH.call(aG);
        }
        if ("function" == typeof aG.next) {
          return aG;
        }
        if (!isNaN(aG.length)) {
          var aI = -1,
            aJ = function aM() {
              for (; ++aI < aG.length;) {
                if (aa.call(aG, aI)) {
                  aM.value = aG[aI];
                  aM.done = !1;
                  return aM;
                }
              }
              aM.value = a7;
              aM.done = !0;
              return aM;
            };
          return aJ.next = aJ;
        }
      }
      throw new TypeError(b(aG) + " is not iterable");
    }
    ap.prototype = aq;
    ab(au, "constructor", {
      value: aq,
      configurable: !0
    });
    ab(aq, "constructor", {
      value: ap,
      configurable: !0
    });
    ap.displayName = ag(aq, af, "GeneratorFunction");
    a8.isGeneratorFunction = function (aG) {
      var aI = "function" == typeof aG && aG.constructor;
      return !!aI && (aI === ap || "GeneratorFunction" === (aI.displayName || aI.name));
    };
    a8.mark = function (aG) {
      Object.setPrototypeOf ? Object.setPrototypeOf(aG, aq) : (aG.__proto__ = aq, ag(aG, af, "GeneratorFunction"));
      aG.prototype = Object.create(au);
      return aG;
    };
    a8.awrap = function (aG) {
      var aH = {
        __await: aG
      };
      return aH;
    };
    av(aw.prototype);
    ag(aw.prototype, ae, function () {
      return this;
    });
    a8.AsyncIterator = aw;
    a8.async = function (aG, aH, aI, aJ, aK) {
      void 0 === aK && (aK = Promise);
      var aM = new aw(ah(aG, aH, aI, aJ), aK);
      return a8.isGeneratorFunction(aH) ? aM : aM.next().then(function (aN) {
        return aN.done ? aN.value : aM.next();
      });
    };
    av(au);
    ag(au, af, "Generator");
    ag(au, ad, function () {
      return this;
    });
    ag(au, "toString", function () {
      return "[object Generator]";
    });
    a8.keys = function (aG) {
      var aI = Object(aG),
        aJ = [];
      for (var aK in aI) aJ.push(aK);
      aJ.reverse();
      return function aM() {
        for (; aJ.length;) {
          var aN = aJ.pop();
          if (aN in aI) {
            aM.value = aN;
            aM.done = !1;
            return aM;
          }
        }
        aM.done = !0;
        return aM;
      };
    };
    a8.values = aC;
    aB.prototype = {
      constructor: aB,
      reset: function (aG) {
        if (this.prev = 0, this.next = 0, this.sent = this._sent = a7, this.done = !1, this.delegate = null, this.method = "next", this.arg = a7, this.tryEntries.forEach(aA), !aG) {
          for (var aH in this) "t" === aH.charAt(0) && aa.call(this, aH) && !isNaN(+aH.slice(1)) && (this[aH] = a7);
        }
      },
      stop: function () {
        this.done = !0;
        var aH = this.tryEntries[0].completion;
        if ("throw" === aH.type) {
          throw aH.arg;
        }
        return this.rval;
      },
      dispatchException: function (aG) {
        if (this.done) {
          throw aG;
        }
        var aI = this;
        function aO(aP, aQ) {
          aL.type = "throw";
          aL.arg = aG;
          aI.next = aP;
          aQ && (aI.method = "next", aI.arg = a7);
          return !!aQ;
        }
        for (var aJ = this.tryEntries.length - 1; aJ >= 0; --aJ) {
          var aK = this.tryEntries[aJ],
            aL = aK.completion;
          if ("root" === aK.tryLoc) {
            return aO("end");
          }
          if (aK.tryLoc <= this.prev) {
            var aM = aa.call(aK, "catchLoc"),
              aN = aa.call(aK, "finallyLoc");
            if (aM && aN) {
              if (this.prev < aK.catchLoc) {
                return aO(aK.catchLoc, !0);
              }
              if (this.prev < aK.finallyLoc) {
                return aO(aK.finallyLoc);
              }
            } else {
              if (aM) {
                if (this.prev < aK.catchLoc) {
                  return aO(aK.catchLoc, !0);
                }
              } else {
                if (!aN) {
                  throw Error("try statement without catch or finally");
                }
                if (this.prev < aK.finallyLoc) {
                  return aO(aK.finallyLoc);
                }
              }
            }
          }
        }
      },
      abrupt: function (aG, aH) {
        for (var aJ = this.tryEntries.length - 1; aJ >= 0; --aJ) {
          var aK = this.tryEntries[aJ];
          if (aK.tryLoc <= this.prev && aa.call(aK, "finallyLoc") && this.prev < aK.finallyLoc) {
            var aL = aK;
            break;
          }
        }
        aL && ("break" === aG || "continue" === aG) && aL.tryLoc <= aH && aH <= aL.finallyLoc && (aL = null);
        var aM = aL ? aL.completion : {};
        aM.type = aG;
        aM.arg = aH;
        return aL ? (this.method = "next", this.next = aL.finallyLoc, an) : this.complete(aM);
      },
      complete: function (aG, aH) {
        if ("throw" === aG.type) {
          throw aG.arg;
        }
        "break" === aG.type || "continue" === aG.type ? this.next = aG.arg : "return" === aG.type ? (this.rval = this.arg = aG.arg, this.method = "return", this.next = "end") : "normal" === aG.type && aH && (this.next = aH);
        return an;
      },
      finish: function (aG) {
        for (var aH = this.tryEntries.length - 1; aH >= 0; --aH) {
          var aI = this.tryEntries[aH];
          if (aI.finallyLoc === aG) {
            this.complete(aI.completion, aI.afterLoc);
            aA(aI);
            return an;
          }
        }
      },
      catch: function (aG) {
        for (var aI = this.tryEntries.length - 1; aI >= 0; --aI) {
          var aJ = this.tryEntries[aI];
          if (aJ.tryLoc === aG) {
            var aK = aJ.completion;
            if ("throw" === aK.type) {
              var aL = aK.arg;
              aA(aJ);
            }
            return aL;
          }
        }
        throw Error("illegal catch attempt");
      },
      delegateYield: function (aG, aH, aI) {
        this.delegate = {
          iterator: aC(aG),
          resultName: aH,
          nextLoc: aI
        };
        "next" === this.method && (this.arg = a7);
        return an;
      }
    };
    return a8;
  }
  function l(a6, a7, a8, a9, aa, ab, ac) {
    try {
      var af = a6[ab](ac),
        ag = af.value;
    } catch (aj) {
      return void a8(aj);
    }
    af.done ? a7(ag) : Promise.resolve(ag).then(a9, aa);
  }
  function m(a6) {
    return function () {
      var a8 = this,
        a9 = arguments;
      return new Promise(function (aa, ab) {
        var ad = a6.apply(a8, a9);
        function ae(ag) {
          l(ad, aa, ab, ae, af, "next", ag);
        }
        function af(ag) {
          l(ad, aa, ab, ae, af, "throw", ag);
        }
        ae(void 0);
      });
    };
  }
  var n = ($.isNode() ? process.env.RongPanAn : $.getdata("RongPanAn")) || "",
    o = ($.isNode() ? process.env.OCR_SERVER : $.getdata("OCR_SERVER")) || "https://ddddocr.xzxxn7.live",
    p = void 0,
    q = "",
    r = "",
    s = "",
    t = "30",
    u = "",
    v = "45",
    w = "",
    x = "",
    y = "",
    z = "",
    A = "",
    B = "",
    C = "8gW3lUcknhBvjpENMTZJ",
    D = "35c782a2",
    E = "FR*r!isE5W";
  function F() {
    return G.apply(this, arguments);
  }
  function G() {
    G = m(k().mark(function a7() {
      var a9, aa, ab, ac, ad, ae, af, ag, ah, ai, aj, ak, al, am, an, ao, ap, aq, ar, as, at, au, av, aw, ax, ay, az, aA, aB, aC, aD, aE, aF, aG, aH, aI, aJ, aK, aL, aM, aN, aO, aP, aQ, aR, aS, aT, aU, aV, aW, aX, aY, aZ, b0, b1;
      return k().wrap(function (b3) {
        for (;;) {
          switch (b3.prev = b3.next) {
            case 0:
              if (console.log("作者：@xzxxn777\n频道：https://t.me/xzxxn777\n群组：https://t.me/xzxxn7777\n自用机场推荐：https://xn--diqv0fut7b.com\n"), n) {
                b3.next = 6;
                break;
              }
              console.log("先去boxjs填写账号密码");
              b3.next = 5;
              return a4("先去boxjs填写账号密码");
            case 5:
              return b3.abrupt("return");
            case 6:
              b3.next = 8;
              return a2();
            case 8:
              p = b3.sent;
              a9 = n.split(" ");
              aa = c(a9);
              b3.prev = 11;
              aa.s();
            case 13:
              if ((ab = aa.n()).done) {
                b3.next = 207;
                break;
              }
              ac = ab.value;
              console.log("随机生成UA");
              ad = a1();
              y = ad.ua;
              z = ad.commonUa;
              A = ad.uuid;
              console.log(y);
              console.log(z);
              w = ac.split("&")[0];
              x = ac.split("&")[1];
              console.log("用户：".concat(w, "开始任务"));
              console.log("获取sessionId");
              b3.next = 28;
              return N("/api/account/init");
            case 28:
              ae = b3.sent;
              s = ae.data.session.id;
              console.log(s);
              console.log("获取signature_key");
              b3.next = 34;
              return H("/web/init?client_id=".concat(v));
            case 34:
              af = b3.sent;
              q = af.data.client.signature_key;
              console.log(q);
              console.log("获取code");
              b3.next = 40;
              return J("/web/oauth/credential_auth");
            case 40:
              if (ag = b3.sent, ag.data) {
                b3.next = 44;
                break;
              }
              console.log(ag.message);
              return b3.abrupt("continue", 205);
            case 44:
              ah = ag.data.authorization_code.code;
              console.log(ah);
              console.log("登录");
              b3.next = 49;
              return N("/api/zbtxz/login", "check_token=&code=".concat(ah, "&token=&type=-1&union_id="));
            case 49:
              ai = b3.sent;
              console.log("登录成功");
              u = ai.data.session.account_id;
              s = ai.data.session.id;
              console.log("————————————");
              console.log("阅读抽奖");
              console.log("获取id");
              b3.next = 58;
              return L("/api/bullet_frame/detail");
            case 58:
              for (aj = b3.sent, ak = aj.data.detail.jump_url, al = ak.split("?")[1], am = {}, an = al.split("&"), ao = 0, ap = an.length; ao < ap; ao++) {
                aq = an[ao].split("=");
                am[aq[0]] = aq[1];
              }
              var b5 = {};
              b5.debug = 0;
              b5.userId = "";
              ar = am.id;
              console.log(ar);
              console.log("获取key和token");
              b3.next = 69;
              return P("/api/member/login", b5);
            case 69:
              as = b3.sent;
              D = as.data.key;
              B = "Bearer " + as.data.token;
              console.log(D);
              console.log(B);
              console.log("获取抽奖id");
              b3.next = 77;
              return R("/api/study/detail?id=".concat(ar), {
                id: ar
              });
            case 77:
              at = b3.sent;
              au = at.data.lottery.lottery_id;
              console.log(au);
              console.log("开始阅读");
              av = c(at.data.levels);
              b3.prev = 82;
              av.s();
            case 84:
              if ((aw = av.n()).done) {
                b3.next = 127;
                break;
              }
              ax = aw.value;
              b3.next = 88;
              return R("/api/study/level?id=".concat(ax.id), {
                id: ax.id
              });
            case 88:
              if (ay = b3.sent, console.log(ay.data.level.name), ay.data.level.task_num != ay.data.completedTasks.length) {
                b3.next = 93;
                break;
              }
              console.log("已完成");
              return b3.abrupt("continue", 125);
            case 93:
              az = c(ay.data.tasks);
              b3.prev = 94;
              az.s();
            case 96:
              if ((aA = az.n()).done) {
                b3.next = 117;
                break;
              }
              for (aB = aA.value, aC = aB.link, aD = aC.split("?")[1], aE = {}, aF = aD.split("&"), aG = 0, aH = aF.length; aG < aH; aG++) {
                aI = aF[aG].split("=");
                aE[aI[0]] = aI[1];
              }
              b3.next = 105;
              return L("/api/article/detail?id=".concat(aE.id));
            case 105:
              aJ = b3.sent;
              console.log("文章：".concat(aJ.data.article.list_title));
              b3.next = 109;
              return L("/api/article/read_time?channel_article_id=".concat(aE.id, "&read_time=5938"));
            case 109:
              var b6 = {};
              b6.id = aB.id;
              aK = b3.sent;
              console.log("阅读：".concat(aK.message));
              b3.next = 113;
              return P("/api/study/task/complete", b6);
            case 113:
              aL = b3.sent;
              console.log("完成任务：".concat(aL.message));
            case 115:
              b3.next = 96;
              break;
            case 117:
              b3.next = 122;
              break;
            case 119:
              b3.prev = 119;
              b3.t0 = b3.catch(94);
              az.e(b3.t0);
            case 122:
              b3.prev = 122;
              az.f();
              return b3.finish(122);
            case 125:
              b3.next = 84;
              break;
            case 127:
              b3.next = 132;
              break;
            case 129:
              b3.prev = 129;
              b3.t1 = b3.catch(82);
              av.e(b3.t1);
            case 132:
              b3.prev = 132;
              av.f();
              return b3.finish(132);
            case 135:
              b3.next = 137;
              return P("/api/lotterybigwheel/_ac_lottery_count", {
                id: au,
                module: "study"
              });
            case 137:
              aM = b3.sent;
              console.log("拥有".concat(aM.data.count, "次抽奖"));
              aN = 0;
            case 140:
              if (!(aN < aM.data.count)) {
                b3.next = 181;
                break;
              }
              var b7 = {};
              b7.id = au;
              b7.app_id = C;
              b7.module = "study";
              b7.optionHash = "";
              b3.next = 143;
              return P("/api/lotterybigwheel/_ac_lottery", b7);
            case 143:
              if (aO = b3.sent, 10000 != aO.code) {
                b3.next = 177;
                break;
              }
              console.log(aO.message);
              b3.next = 148;
              return P("/api/captcha/get", {
                activity_id: au,
                module: "bigWheel"
              });
            case 148:
              aP = b3.sent;
              aQ = aP.data.jigsawImageUrl;
              aR = aP.data.originalImageUrl;
              console.log("滑块：".concat(aQ));
              console.log("背景：".concat(aR));
              aS = aP.data.token;
              aT = aP.data.secretKey;
              console.log("秘钥：".concat(aT));
              b3.next = 158;
              return T({
                slidingImage: aQ,
                backImage: aR
              });
            case 158:
              if (aU = b3.sent, aU) {
                b3.next = 164;
                break;
              }
              console.log("ddddocr服务异常");
              b3.next = 163;
              return a4("ddddocr服务异常");
            case 163:
              return b3.abrupt("continue", 178);
            case 164:
              console.log(aU);
              aV = V(JSON.stringify({
                x: aU.result,
                y: 5
              }), aT);
              b3.next = 168;
              return P("/api/captcha/check", {
                activity_id: au,
                module: "bigWheel",
                cap_token: aS,
                point: aV
              });
            case 168:
              if (aW = b3.sent, console.log("验证滑块：" + aW.message), "操作成功" != aW.message) {
                b3.next = 175;
                break;
              }
              b3.next = 173;
              return P("/api/lotterybigwheel/_ac_lottery", {
                id: au,
                app_id: C,
                module: "study",
                optionHash: ""
              });
            case 173:
              aO = b3.sent;
              aO.data.code ? console.log("抽奖获得：".concat(aO.data.title)) : console.log("抽奖获得：".concat(aO.data.tip_title));
            case 175:
              b3.next = 178;
              break;
            case 177:
              aO.data.code ? console.log("抽奖获得：".concat(aO.data.title)) : console.log("抽奖获得：".concat(aO.data.tip_title));
            case 178:
              aN++;
              b3.next = 140;
              break;
            case 181:
              b3.next = 183;
              return P("/api/lotterybigwheel/_ac_lottery_records", {
                id: au,
                module: "study"
              });
            case 183:
              aX = b3.sent;
              aY = c(aX.data.list);
              b3.prev = 185;
              aY.s();
            case 187:
              if ((aZ = aY.n()).done) {
                b3.next = 197;
                break;
              }
              if (b0 = aZ.value, 3 != b0.type || 5 != b0.state) {
                b3.next = 195;
                break;
              }
              console.log("奖品：".concat(b0.title));
              b3.next = 193;
              return P("/api/lotterybigwheel/_ac_url_scheme", {
                platform: "app",
                record_id: b0.id
              });
            case 193:
              b1 = b3.sent;
              b1.data.data ? (console.log("领取链接：".concat(b1.data.data)), r += "用户：".concat(w, " 奖品：").concat(b0.title, " 微信领取链接：").concat(b1.data.data, "\n")) : console.log(b1.data.msg);
            case 195:
              b3.next = 187;
              break;
            case 197:
              b3.next = 202;
              break;
            case 199:
              b3.prev = 199;
              b3.t2 = b3.catch(185);
              aY.e(b3.t2);
            case 202:
              b3.prev = 202;
              aY.f();
              return b3.finish(202);
            case 205:
              b3.next = 13;
              break;
            case 207:
              b3.next = 212;
              break;
            case 209:
              b3.prev = 209;
              b3.t3 = b3.catch(11);
              aa.e(b3.t3);
            case 212:
              b3.prev = 212;
              aa.f();
              return b3.finish(212);
            case 215:
              if (!r) {
                b3.next = 218;
                break;
              }
              b3.next = 218;
              return a4(r);
            case 218:
            case "end":
              return b3.stop();
          }
        }
      }, a7, null, [[11, 209, 212, 215], [82, 129, 132, 135], [94, 119, 122, 125], [185, 199, 202, 205]]);
    }));
    return G.apply(this, arguments);
  }
  function H(a6) {
    return I.apply(this, arguments);
  }
  function I() {
    I = m(k().mark(function a7(a8) {
      return k().wrap(function (aa) {
        for (;;) {
          switch (aa.prev = aa.next) {
            case 0:
              return aa.abrupt("return", new Promise(function (ac) {
                var ae = {
                  url: "https://passport.tmuyun.com".concat(a8),
                  headers: {
                    Connection: "Keep-Alive",
                    "Cache-Control": "no-cache",
                    "X-REQUEST-ID": Z(),
                    "Accept-Encoding": "gzip",
                    "user-agent": y
                  }
                };
                $.get(ae, function () {
                  var ag = m(k().mark(function ai(aj, ak, al) {
                    return k().wrap(function (an) {
                      for (;;) {
                        switch (an.prev = an.next) {
                          case 0:
                            try {
                              aj ? (console.log("".concat(JSON.stringify(aj))), console.log("".concat($.name, " API请求失败，请检查网路重试"))) : ac(JSON.parse(al));
                            } catch (aq) {
                              $.logErr(aq, ak);
                            } finally {
                              ac();
                            }
                          case 1:
                          case "end":
                            return an.stop();
                        }
                      }
                    }, ai);
                  }));
                  return function (aj, ak, al) {
                    return ag.apply(this, arguments);
                  };
                }());
              }));
            case 1:
            case "end":
              return aa.stop();
          }
        }
      }, a7);
    }));
    return I.apply(this, arguments);
  }
  function J(a6) {
    return K.apply(this, arguments);
  }
  function K() {
    K = m(k().mark(function a7(a8) {
      var aa;
      return k().wrap(function (ab) {
        for (;;) {
          switch (ab.prev = ab.next) {
            case 0:
              aa = W();
              return ab.abrupt("return", new Promise(function (ad) {
                var ae = {
                  Connection: "Keep-Alive",
                  "X-REQUEST-ID": aa.uuid,
                  "X-SIGNATURE": aa.signature,
                  "Cache-Control": "no-cache",
                  "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
                  "Accept-Encoding": "gzip",
                  "user-agent": y
                };
                var af = {
                  url: "https://passport.tmuyun.com".concat(a8),
                  headers: ae,
                  body: aa.body
                };
                $.post(af, function () {
                  var ah = m(k().mark(function ai(aj, ak, al) {
                    return k().wrap(function (an) {
                      for (;;) {
                        switch (an.prev = an.next) {
                          case 0:
                            try {
                              aj ? (console.log("".concat(JSON.stringify(aj))), console.log("".concat($.name, " API请求失败，请检查网路重试"))) : ad(JSON.parse(al));
                            } catch (ao) {
                              $.logErr(ao, ak);
                            } finally {
                              ad();
                            }
                          case 1:
                          case "end":
                            return an.stop();
                        }
                      }
                    }, ai);
                  }));
                  return function (aj, ak, al) {
                    return ah.apply(this, arguments);
                  };
                }());
              }));
            case 2:
            case "end":
              return ab.stop();
          }
        }
      }, a7);
    }));
    return K.apply(this, arguments);
  }
  function L(a6) {
    return M.apply(this, arguments);
  }
  function M() {
    M = m(k().mark(function a6(a7) {
      var a9;
      return k().wrap(function (aa) {
        for (;;) {
          switch (aa.prev = aa.next) {
            case 0:
              a9 = Y(a7);
              return aa.abrupt("return", new Promise(function (ac) {
                var ae = {
                  url: "https://vapp.tmuyun.com".concat(a7),
                  headers: {
                    Connection: "Keep-Alive",
                    "X-TIMESTAMP": a9.time,
                    "X-SESSION-ID": s,
                    "X-REQUEST-ID": a9.uuid,
                    "X-SIGNATURE": a9.signature,
                    "X-TENANT-ID": t,
                    "X-ACCOUNT-ID": u,
                    "Cache-Control": "no-cache",
                    "Accept-Encoding": "gzip",
                    "user-agent": z
                  }
                };
                $.get(ae, function () {
                  var af = m(k().mark(function ag(ah, ai, aj) {
                    return k().wrap(function (al) {
                      for (;;) {
                        switch (al.prev = al.next) {
                          case 0:
                            if (al.prev = 0, !ah) {
                              al.next = 6;
                              break;
                            }
                            console.log("".concat(JSON.stringify(ah)));
                            console.log("".concat($.name, " API请求失败，请检查网路重试"));
                            al.next = 9;
                            break;
                          case 6:
                            al.next = 8;
                            return $.wait(2000);
                          case 8:
                            ac(JSON.parse(aj));
                          case 9:
                            al.next = 14;
                            break;
                          case 11:
                            al.prev = 11;
                            al.t0 = al.catch(0);
                            $.logErr(al.t0, ai);
                          case 14:
                            al.prev = 14;
                            ac();
                            return al.finish(14);
                          case 17:
                          case "end":
                            return al.stop();
                        }
                      }
                    }, ag, null, [[0, 11, 14, 17]]);
                  }));
                  return function (ah, ai, aj) {
                    return af.apply(this, arguments);
                  };
                }());
              }));
            case 2:
            case "end":
              return aa.stop();
          }
        }
      }, a6);
    }));
    return M.apply(this, arguments);
  }
  function N(a6, a7) {
    return O.apply(this, arguments);
  }
  function O() {
    O = m(k().mark(function a7(a8, a9) {
      var ab;
      return k().wrap(function (ac) {
        for (;;) {
          switch (ac.prev = ac.next) {
            case 0:
              ab = Y(a8);
              return ac.abrupt("return", new Promise(function (ae) {
                var ag = {
                  url: "https://vapp.tmuyun.com".concat(a8),
                  headers: {
                    Connection: "Keep-Alive",
                    "X-TIMESTAMP": ab.time,
                    "X-SESSION-ID": s,
                    "X-REQUEST-ID": ab.uuid,
                    "X-SIGNATURE": ab.signature,
                    "X-TENANT-ID": t,
                    "X-ACCOUNT-ID": u,
                    "Cache-Control": "no-cache",
                    "Accept-Encoding": "gzip",
                    "user-agent": z
                  },
                  body: a9
                };
                $.post(ag, function () {
                  var ai = m(k().mark(function aj(ak, al, am) {
                    return k().wrap(function (an) {
                      for (;;) {
                        switch (an.prev = an.next) {
                          case 0:
                            if (an.prev = 0, !ak) {
                              an.next = 6;
                              break;
                            }
                            console.log("".concat(JSON.stringify(ak)));
                            console.log("".concat($.name, " API请求失败，请检查网路重试"));
                            an.next = 9;
                            break;
                          case 6:
                            an.next = 8;
                            return $.wait(2000);
                          case 8:
                            ae(JSON.parse(am));
                          case 9:
                            an.next = 14;
                            break;
                          case 11:
                            an.prev = 11;
                            an.t0 = an.catch(0);
                            $.logErr(an.t0, al);
                          case 14:
                            an.prev = 14;
                            ae();
                            return an.finish(14);
                          case 17:
                          case "end":
                            return an.stop();
                        }
                      }
                    }, aj, null, [[0, 11, 14, 17]]);
                  }));
                  return function (ak, al, am) {
                    return ai.apply(this, arguments);
                  };
                }());
              }));
            case 2:
            case "end":
              return ac.stop();
          }
        }
      }, a7);
    }));
    return O.apply(this, arguments);
  }
  function P(a6, a7) {
    return Q.apply(this, arguments);
  }
  function Q() {
    Q = m(k().mark(function a6(a7, a8) {
      var aa;
      return k().wrap(function (ab) {
        for (;;) {
          switch (ab.prev = ab.next) {
            case 0:
              aa = X(a8);
              return ab.abrupt("return", new Promise(function (ad) {
                var ae = {
                  "access-type": "app",
                  "access-module": "study",
                  "access-device-id": A,
                  "access-auth-id": u,
                  "access-api-signature": aa.signature,
                  "access-nonce-str": aa.uuid,
                  authorization: B,
                  "access-app-id": C,
                  "access-timestamp": aa.time,
                  "access-api-token": s,
                  accept: "application/json, text/plain, */*",
                  "user-agent": "Mozilla/5.0 (Linux; Android 11; 21091116AC Build/RP1A.200720.011; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/94.0.4606.85 Mobile Safari/537.36;xsb_panan;xsb_panan;1.1.9;native_app;6.11.0",
                  "content-type": "application/json; charset=UTF-8",
                  origin: "https://op-h5.cloud.jinhua.com.cn",
                  "x-requested-with": "com.zjonline.zhuji",
                  "sec-fetch-site": "same-site",
                  "sec-fetch-mode": "cors",
                  "sec-fetch-dest": "empty",
                  referer: "https://op-h5.cloud.jinhua.com.cn/",
                  "accept-encoding": "gzip, deflate",
                  "accept-language": "zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7"
                };
                var af = {
                  url: "https://op-api.cloud.jinhua.com.cn".concat(a7),
                  headers: ae,
                  body: JSON.stringify(a8)
                };
                $.post(af, function () {
                  var ah = m(k().mark(function ai(aj, ak, al) {
                    return k().wrap(function (am) {
                      for (;;) {
                        switch (am.prev = am.next) {
                          case 0:
                            if (am.prev = 0, !aj) {
                              am.next = 6;
                              break;
                            }
                            console.log("".concat(JSON.stringify(aj)));
                            console.log("".concat($.name, " API请求失败，请检查网路重试"));
                            am.next = 9;
                            break;
                          case 6:
                            am.next = 8;
                            return $.wait(2000);
                          case 8:
                            ad(JSON.parse(al));
                          case 9:
                            am.next = 14;
                            break;
                          case 11:
                            am.prev = 11;
                            am.t0 = am.catch(0);
                            $.logErr(am.t0, ak);
                          case 14:
                            am.prev = 14;
                            ad();
                            return am.finish(14);
                          case 17:
                          case "end":
                            return am.stop();
                        }
                      }
                    }, ai, null, [[0, 11, 14, 17]]);
                  }));
                  return function (aj, ak, al) {
                    return ah.apply(this, arguments);
                  };
                }());
              }));
            case 2:
            case "end":
              return ab.stop();
          }
        }
      }, a6);
    }));
    return Q.apply(this, arguments);
  }
  function R(a6, a7) {
    return S.apply(this, arguments);
  }
  function S() {
    S = m(k().mark(function a7(a8, a9) {
      var ab;
      return k().wrap(function (ac) {
        for (;;) {
          switch (ac.prev = ac.next) {
            case 0:
              ab = X(a9);
              return ac.abrupt("return", new Promise(function (ad) {
                var af = {
                  url: "https://op-api.cloud.jinhua.com.cn".concat(a8),
                  headers: {
                    "access-type": "app",
                    "access-module": "study",
                    "access-device-id": A,
                    "access-auth-id": u,
                    "access-api-signature": ab.signature,
                    "access-nonce-str": ab.uuid,
                    authorization: B,
                    "access-app-id": C,
                    "access-timestamp": ab.time,
                    "access-api-token": s,
                    accept: "application/json, text/plain, */*",
                    "user-agent": "Mozilla/5.0 (Linux; Android 11; 21091116AC Build/RP1A.200720.011; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/94.0.4606.85 Mobile Safari/537.36;xsb_panan;xsb_panan;1.1.9;native_app;6.11.0",
                    origin: "https://op-h5.cloud.jinhua.com.cn",
                    "x-requested-with": "com.zjonline.zhuji",
                    "sec-fetch-site": "same-site",
                    "sec-fetch-mode": "cors",
                    "sec-fetch-dest": "empty",
                    referer: "https://op-h5.cloud.jinhua.com.cn/",
                    "accept-encoding": "gzip, deflate",
                    "accept-language": "zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7"
                  }
                };
                $.get(af, function () {
                  var ah = m(k().mark(function ai(aj, ak, al) {
                    return k().wrap(function (am) {
                      for (;;) {
                        switch (am.prev = am.next) {
                          case 0:
                            if (am.prev = 0, !aj) {
                              am.next = 6;
                              break;
                            }
                            console.log("".concat(JSON.stringify(aj)));
                            console.log("".concat($.name, " API请求失败，请检查网路重试"));
                            am.next = 9;
                            break;
                          case 6:
                            am.next = 8;
                            return $.wait(2000);
                          case 8:
                            ad(JSON.parse(al));
                          case 9:
                            am.next = 14;
                            break;
                          case 11:
                            am.prev = 11;
                            am.t0 = am.catch(0);
                            $.logErr(am.t0, ak);
                          case 14:
                            am.prev = 14;
                            ad();
                            return am.finish(14);
                          case 17:
                          case "end":
                            return am.stop();
                        }
                      }
                    }, ai, null, [[0, 11, 14, 17]]);
                  }));
                  return function (aj, ak, al) {
                    return ah.apply(this, arguments);
                  };
                }());
              }));
            case 2:
            case "end":
              return ac.stop();
          }
        }
      }, a7);
    }));
    return S.apply(this, arguments);
  }
  function T(a6) {
    return U.apply(this, arguments);
  }
  function U() {
    U = m(k().mark(function a6(a7) {
      return k().wrap(function (a9) {
        for (;;) {
          switch (a9.prev = a9.next) {
            case 0:
              return a9.abrupt("return", new Promise(function (ab) {
                var ac = {
                  url: "".concat(o, "/capcode"),
                  headers: {
                    "Content-Type": "application/json"
                  },
                  body: JSON.stringify(a7)
                };
                $.post(ac, function (ad, ae, af) {
                  try {
                    ad ? (console.log("".concat(JSON.stringify(ad))), console.log("".concat($.name, " API请求失败，请检查网路重试"))) : ab(JSON.parse(af));
                  } catch (ag) {
                    $.logErr(ag, ae);
                  } finally {
                    ab();
                  }
                });
              }));
            case 1:
            case "end":
              return a9.stop();
          }
        }
      }, a6);
    }));
    return U.apply(this, arguments);
  }
  function V(a6, a7) {
    CryptoJS = p.createCryptoJS();
    var a8 = CryptoJS.enc.Utf8.parse(a7),
      a9 = CryptoJS.enc.Utf8.parse(a6),
      aa = CryptoJS.AES.encrypt(a9, a8, {
        mode: CryptoJS.mode.ECB,
        padding: CryptoJS.pad.Pkcs7
      });
    return aa.toString();
  }
  function W() {
    var a8 = new (p.loadJSEncrypt())();
    a8.setPublicKey("MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQD6XO7e9YeAOs+cFqwa7ETJ+WXizPqQeXv68i5vqw9pFREsrqiBTRcg7wB0RIp3rJkDpaeVJLsZqYm5TW7FWx/iOiXFc+zCPvaKZric2dXCw27EvlH5rq+zwIPDAJHGAfnn1nmQH7wR3PCatEIb8pz5GFlTHMlluw4ZYmnOwg+thwIDAQAB");
    x = a8.encrypt(x);
    var ab = Z(),
      ac = "client_id=".concat(v, "&password=").concat(x, "&phone_number=").concat(w),
      ad = "post%%/web/oauth/credential_auth?".concat(ac, "%%").concat(ab, "%%");
    ac = "client_id=".concat(v, "&password=").concat(encodeURIComponent(x), "&phone_number=").concat(w);
    CryptoJS = p.createCryptoJS();
    var a9 = CryptoJS.HmacSHA256(ad, q),
      aa = CryptoJS.enc.Hex.stringify(a9);
    var ae = {};
    ae.uuid = ab;
    ae.signature = aa;
    ae.body = ac;
    return ae;
  }
  function X(a6) {
    var ac = Z(),
      ad = Date.now(),
      ae = {
        app_id: C,
        device_id: A,
        nonce_str: ac,
        source_type: "app",
        timestamp: ad,
        auth_id: u,
        token: s
      };
    Object.entries(a6).forEach(function (ah) {
      var ai = d(ah, 2),
        aj = ai[0],
        ak = ai[1];
      ae[aj] = ak;
    });
    var aa = Object.keys(ae).sort(),
      ab = aa.map(function (ah) {
        return "".concat(ah, "=").concat(ae[ah]);
      }).join("&&");
    ab = ab + "&&" + D;
    CryptoJS = p.createCryptoJS();
    var ag = CryptoJS.SHA256(ab).toString();
    var af = {};
    af.uuid = ac;
    af.time = ad;
    af.signature = ag;
    return af;
  }
  function Y(a6) {
    var a7 = Z(),
      a8 = Date.now();
    a6.indexOf("?") > 0 && (a6 = a6.substring(0, a6.indexOf("?")));
    CryptoJS = p.createCryptoJS();
    var a9 = CryptoJS.SHA256("".concat(a6, "&&").concat(s, "&&").concat(a7, "&&").concat(a8, "&&").concat(E, "&&").concat(t)).toString(),
      aa = {
        uuid: a7,
        time: a8,
        signature: a9
      };
    return aa;
  }
  function Z() {
    return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (a6) {
      var a7 = 16 * Math.random() | 0,
        a8 = "x" === a6 ? a7 : 3 & a7 | 8;
      return a8.toString(16);
    });
  }
  function a0(a6) {
    return a6[Math.floor(Math.random() * a6.length)];
  }
  function a1() {
    var a6 = "1.1.9",
      a7 = Z(),
      a8 = a0(["M1903F2A", "M2001J2E", "M2001J2C", "M2001J1E", "M2001J1C", "M2002J9E", "M2011K2C", "M2102K1C", "M2101K9C", "2107119DC", "2201123C", "2112123AC", "2201122C", "2211133C", "2210132C", "2304FPN6DC", "23127PN0CC", "24031PN0DC", "23090RA98C", "2312DRA50C", "2312CRAD3C", "2312DRAABC", "22101316UCP", "22101316C"]),
      a9 = "Xiaomi " + a8,
      aa = "Android",
      ab = "".concat(aa.toUpperCase(), ";").concat("11", ";").concat(v, ";").concat(a6, ";1.0;null;").concat(a8),
      ac = "".concat(a6, ";").concat(a7, ";").concat(a9, ";").concat(aa, ";").concat("11", ";").concat("Release", ";").concat("6.11.0"),
      ad = {
        ua: ab,
        commonUa: ac,
        uuid: a7
      };
    return ad;
  }
  function a2() {
    return a3.apply(this, arguments);
  }
  function a3() {
    a3 = m(k().mark(function a7() {
      var a9;
      return k().wrap(function aa(ab) {
        for (;;) {
          switch (ab.prev = ab.next) {
            case 0:
              if (a9 = $.getdata("Utils_Code") || "", !a9 || !Object.keys(a9).length) {
                ab.next = 5;
                break;
              }
              console.log("✅ ".concat($.name, ": 缓存中存在Utils代码, 跳过下载"));
              eval(a9);
              return ab.abrupt("return", creatUtils());
            case 5:
              console.log("🚀 ".concat($.name, ": 开始下载Utils代码"));
              return ab.abrupt("return", new Promise(function () {
                var ad = m(k().mark(function ae(af) {
                  return k().wrap(function ah(ai) {
                    for (;;) {
                      switch (ai.prev = ai.next) {
                        case 0:
                          $.getScript("https://mirror.ghproxy.com/https://raw.githubusercontent.com/xzxxn777/Surge/main/Utils/Utils.js").then(function (ak) {
                            $.setdata(ak, "Utils_Code");
                            eval(ak);
                            console.log("✅ Utils加载成功, 请继续");
                            af(creatUtils());
                          });
                        case 1:
                        case "end":
                          return ai.stop();
                      }
                    }
                  }, ae);
                }));
                return function (af) {
                  return ad.apply(this, arguments);
                };
              }()));
            case 7:
            case "end":
              return ab.stop();
          }
        }
      }, a7);
    }));
    return a3.apply(this, arguments);
  }
  function a4(a6) {
    return a5.apply(this, arguments);
  }
  function a5() {
    a5 = m(k().mark(function a7(a8) {
      return k().wrap(function (ab) {
        for (;;) {
          switch (ab.prev = ab.next) {
            case 0:
              if (!$.isNode()) {
                ab.next = 5;
                break;
              }
              ab.next = 3;
              return notify.sendNotify($.name, a8);
            case 3:
              ab.next = 6;
              break;
            case 5:
              $.msg($.name, "", a8);
            case 6:
            case "end":
              return ab.stop();
          }
        }
      }, a7);
    }));
    return a5.apply(this, arguments);
  }
  m(k().mark(function a6() {
    return k().wrap(function (a7) {
      for (;;) {
        switch (a7.prev = a7.next) {
          case 0:
            a7.next = 2;
            return F();
          case 2:
          case "end":
            return a7.stop();
        }
      }
    }, a6);
  }))().catch(function (a7) {
    $.log(a7);
  }).finally(function () {
    $.done({});
  });
})();
function Env(t, e) {
  class s {
    constructor(t) {
      this.env = t;
    }
    send(t, e = "GET") {
      t = "string" == typeof t ? {
        url: t
      } : t;
      let s = this.get;
      "POST" === e && (s = this.post);
      return new Promise((e, i) => {
        s.call(this, t, (t, s, o) => {
          t ? i(t) : e(s);
        });
      });
    }
    get(t) {
      return this.send.call(this.env, t);
    }
    post(t) {
      return this.send.call(this.env, t, "POST");
    }
  }
  return new class {
    constructor(t, e) {
      this.logLevels = {
        debug: 0,
        info: 1,
        warn: 2,
        error: 3
      };
      this.logLevelPrefixs = {
        debug: "[DEBUG] ",
        info: "[INFO] ",
        warn: "[WARN] ",
        error: "[ERROR] "
      };
      this.logLevel = "info";
      this.name = t;
      this.http = new s(this);
      this.data = null;
      this.dataFile = "box.dat";
      this.logs = [];
      this.isMute = !1;
      this.isNeedRewrite = !1;
      this.logSeparator = "\n";
      this.encoding = "utf-8";
      this.startTime = new Date().getTime();
      Object.assign(this, e);
      this.log("", `🔔${this.name}, 开始!`);
    }
    getEnv() {
      return "undefined" != typeof $environment && $environment["surge-version"] ? "Surge" : "undefined" != typeof $environment && $environment["stash-version"] ? "Stash" : "undefined" != typeof module && module.exports ? "Node.js" : "undefined" != typeof $task ? "Quantumult X" : "undefined" != typeof $loon ? "Loon" : "undefined" != typeof $rocket ? "Shadowrocket" : void 0;
    }
    isNode() {
      return "Node.js" === this.getEnv();
    }
    isQuanX() {
      return "Quantumult X" === this.getEnv();
    }
    isSurge() {
      return "Surge" === this.getEnv();
    }
    isLoon() {
      return "Loon" === this.getEnv();
    }
    isShadowrocket() {
      return "Shadowrocket" === this.getEnv();
    }
    isStash() {
      return "Stash" === this.getEnv();
    }
    toObj(t, e = null) {
      try {
        return JSON.parse(t);
      } catch {
        return e;
      }
    }
    toStr(t, e = null, ...s) {
      try {
        return JSON.stringify(t, ...s);
      } catch {
        return e;
      }
    }
    getjson(t, e) {
      let s = e;
      if (this.getdata(t)) {
        try {
          s = JSON.parse(this.getdata(t));
        } catch {}
      }
      return s;
    }
    setjson(t, e) {
      try {
        return this.setdata(JSON.stringify(t), e);
      } catch {
        return !1;
      }
    }
    getScript(t) {
      return new Promise(e => {
        this.get({
          url: t
        }, (t, s, i) => e(i));
      });
    }
    runScript(t, e) {
      return new Promise(s => {
        let i = this.getdata("@chavy_boxjs_userCfgs.httpapi");
        i = i ? i.replace(/\n/g, "").trim() : i;
        let o = this.getdata("@chavy_boxjs_userCfgs.httpapi_timeout");
        o = o ? 1 * o : 20;
        o = e && e.timeout ? e.timeout : o;
        const [r, a] = i.split("@"),
          n = {
            url: `http://${a}/v1/scripting/evaluate`,
            body: {
              script_text: t,
              mock_type: "cron",
              timeout: o
            },
            headers: {
              "X-Key": r,
              Accept: "*/*"
            },
            timeout: o
          };
        this.post(n, (t, e, i) => s(i));
      }).catch(t => this.logErr(t));
    }
    loaddata() {
      if (!this.isNode()) {
        return {};
      }
      {
        this.fs = this.fs ? this.fs : require("fs");
        this.path = this.path ? this.path : require("path");
        const t = this.path.resolve(this.dataFile),
          e = this.path.resolve(process.cwd(), this.dataFile),
          s = this.fs.existsSync(t),
          i = !s && this.fs.existsSync(e);
        if (!s && !i) {
          return {};
        }
        {
          const i = s ? t : e;
          try {
            return JSON.parse(this.fs.readFileSync(i));
          } catch (t) {
            return {};
          }
        }
      }
    }
    writedata() {
      if (this.isNode()) {
        this.fs = this.fs ? this.fs : require("fs");
        this.path = this.path ? this.path : require("path");
        const t = this.path.resolve(this.dataFile),
          e = this.path.resolve(process.cwd(), this.dataFile),
          s = this.fs.existsSync(t),
          i = !s && this.fs.existsSync(e),
          o = JSON.stringify(this.data);
        s ? this.fs.writeFileSync(t, o) : i ? this.fs.writeFileSync(e, o) : this.fs.writeFileSync(t, o);
      }
    }
    lodash_get(t, e, s) {
      const i = e.replace(/\[(\d+)\]/g, ".$1").split(".");
      let o = t;
      for (const t of i) if (o = Object(o)[t], void 0 === o) {
        return s;
      }
      return o;
    }
    lodash_set(t, e, s) {
      Object(t) !== t || (Array.isArray(e) || (e = e.toString().match(/[^.[\]]+/g) || []), e.slice(0, -1).reduce((t, s, i) => Object(t[s]) === t[s] ? t[s] : t[s] = Math.abs(e[i + 1]) >> 0 == +e[i + 1] ? [] : {}, t)[e[e.length - 1]] = s);
      return t;
    }
    getdata(t) {
      let e = this.getval(t);
      if (/^@/.test(t)) {
        const [, s, i] = /^@(.*?)\.(.*?)$/.exec(t),
          o = s ? this.getval(s) : "";
        if (o) {
          try {
            const t = JSON.parse(o);
            e = t ? this.lodash_get(t, i, "") : e;
          } catch (t) {
            e = "";
          }
        }
      }
      return e;
    }
    setdata(t, e) {
      let s = !1;
      if (/^@/.test(e)) {
        const [, i, o] = /^@(.*?)\.(.*?)$/.exec(e),
          r = this.getval(i),
          a = i ? "null" === r ? null : r || "{}" : "{}";
        try {
          const e = JSON.parse(a);
          this.lodash_set(e, o, t);
          s = this.setval(JSON.stringify(e), i);
        } catch (e) {
          const r = {};
          this.lodash_set(r, o, t);
          s = this.setval(JSON.stringify(r), i);
        }
      } else {
        s = this.setval(t, e);
      }
      return s;
    }
    getval(t) {
      switch (this.getEnv()) {
        case "Surge":
        case "Loon":
        case "Stash":
        case "Shadowrocket":
          return $persistentStore.read(t);
        case "Quantumult X":
          return $prefs.valueForKey(t);
        case "Node.js":
          this.data = this.loaddata();
          return this.data[t];
        default:
          return this.data && this.data[t] || null;
      }
    }
    setval(t, e) {
      switch (this.getEnv()) {
        case "Surge":
        case "Loon":
        case "Stash":
        case "Shadowrocket":
          return $persistentStore.write(t, e);
        case "Quantumult X":
          return $prefs.setValueForKey(t, e);
        case "Node.js":
          this.data = this.loaddata();
          this.data[e] = t;
          this.writedata();
          return !0;
        default:
          return this.data && this.data[e] || null;
      }
    }
    initGotEnv(t) {
      this.got = this.got ? this.got : require("got");
      this.cktough = this.cktough ? this.cktough : require("tough-cookie");
      this.ckjar = this.ckjar ? this.ckjar : new this.cktough.CookieJar();
      t && (t.headers = t.headers ? t.headers : {}, t && (t.headers = t.headers ? t.headers : {}, void 0 === t.headers.cookie && void 0 === t.headers.Cookie && void 0 === t.cookieJar && (t.cookieJar = this.ckjar)));
    }
    get(t, e = () => {}) {
      switch (t.headers && (delete t.headers["Content-Type"], delete t.headers["Content-Length"], delete t.headers["content-type"], delete t.headers["content-length"]), t.params && (t.url += "?" + this.queryStr(t.params)), void 0 === t.followRedirect || t.followRedirect || ((this.isSurge() || this.isLoon()) && (t["auto-redirect"] = !1), this.isQuanX() && (t.opts ? t.opts.redirection = !1 : t.opts = {
        redirection: !1
      })), this.getEnv()) {
        case "Surge":
        case "Loon":
        case "Stash":
        case "Shadowrocket":
        default:
          this.isSurge() && this.isNeedRewrite && (t.headers = t.headers || {}, Object.assign(t.headers, {
            "X-Surge-Skip-Scripting": !1
          }));
          $httpClient.get(t, (t, s, i) => {
            !t && s && (s.body = i, s.statusCode = s.status ? s.status : s.statusCode, s.status = s.statusCode);
            e(t, s, i);
          });
          break;
        case "Quantumult X":
          this.isNeedRewrite && (t.opts = t.opts || {}, Object.assign(t.opts, {
            hints: !1
          }));
          $task.fetch(t).then(t => {
            const {
              statusCode: s,
              statusCode: i,
              headers: o,
              body: r,
              bodyBytes: a
            } = t;
            e(null, {
              status: s,
              statusCode: i,
              headers: o,
              body: r,
              bodyBytes: a
            }, r, a);
          }, t => e(t && t.error || "UndefinedError"));
          break;
        case "Node.js":
          let s = require("iconv-lite");
          this.initGotEnv(t);
          this.got(t).on("redirect", (t, e) => {
            try {
              if (t.headers["set-cookie"]) {
                const s = t.headers["set-cookie"].map(this.cktough.Cookie.parse).toString();
                s && this.ckjar.setCookieSync(s, null);
                e.cookieJar = this.ckjar;
              }
            } catch (t) {
              this.logErr(t);
            }
          }).then(t => {
            const {
                statusCode: i,
                statusCode: o,
                headers: r,
                rawBody: a
              } = t,
              n = s.decode(a, this.encoding);
            e(null, {
              status: i,
              statusCode: o,
              headers: r,
              rawBody: a,
              body: n
            }, n);
          }, t => {
            const {
              message: i,
              response: o
            } = t;
            e(i, o, o && s.decode(o.rawBody, this.encoding));
          });
          break;
      }
    }
    post(t, e = () => {}) {
      const s = t.method ? t.method.toLocaleLowerCase() : "post";
      switch (t.body && t.headers && !t.headers["Content-Type"] && !t.headers["content-type"] && (t.headers["content-type"] = "application/x-www-form-urlencoded"), t.headers && (delete t.headers["Content-Length"], delete t.headers["content-length"]), void 0 === t.followRedirect || t.followRedirect || ((this.isSurge() || this.isLoon()) && (t["auto-redirect"] = !1), this.isQuanX() && (t.opts ? t.opts.redirection = !1 : t.opts = {
        redirection: !1
      })), this.getEnv()) {
        case "Surge":
        case "Loon":
        case "Stash":
        case "Shadowrocket":
        default:
          this.isSurge() && this.isNeedRewrite && (t.headers = t.headers || {}, Object.assign(t.headers, {
            "X-Surge-Skip-Scripting": !1
          }));
          $httpClient[s](t, (t, s, i) => {
            !t && s && (s.body = i, s.statusCode = s.status ? s.status : s.statusCode, s.status = s.statusCode);
            e(t, s, i);
          });
          break;
        case "Quantumult X":
          t.method = s;
          this.isNeedRewrite && (t.opts = t.opts || {}, Object.assign(t.opts, {
            hints: !1
          }));
          $task.fetch(t).then(t => {
            const {
              statusCode: s,
              statusCode: i,
              headers: o,
              body: r,
              bodyBytes: a
            } = t;
            e(null, {
              status: s,
              statusCode: i,
              headers: o,
              body: r,
              bodyBytes: a
            }, r, a);
          }, t => e(t && t.error || "UndefinedError"));
          break;
        case "Node.js":
          let i = require("iconv-lite");
          this.initGotEnv(t);
          const {
            url: o,
            ...r
          } = t;
          this.got[s](o, r).then(t => {
            const {
                statusCode: s,
                statusCode: o,
                headers: r,
                rawBody: a
              } = t,
              n = i.decode(a, this.encoding);
            e(null, {
              status: s,
              statusCode: o,
              headers: r,
              rawBody: a,
              body: n
            }, n);
          }, t => {
            const {
              message: s,
              response: o
            } = t;
            e(s, o, o && i.decode(o.rawBody, this.encoding));
          });
          break;
      }
    }
    time(t, e = null) {
      const s = e ? new Date(e) : new Date();
      let i = {
        "M+": s.getMonth() + 1,
        "d+": s.getDate(),
        "H+": s.getHours(),
        "m+": s.getMinutes(),
        "s+": s.getSeconds(),
        "q+": Math.floor((s.getMonth() + 3) / 3),
        S: s.getMilliseconds()
      };
      /(y+)/.test(t) && (t = t.replace(RegExp.$1, (s.getFullYear() + "").substr(4 - RegExp.$1.length)));
      for (let e in i) new RegExp("(" + e + ")").test(t) && (t = t.replace(RegExp.$1, 1 == RegExp.$1.length ? i[e] : ("00" + i[e]).substr(("" + i[e]).length)));
      return t;
    }
    queryStr(t) {
      let e = "";
      for (const s in t) {
        let i = t[s];
        null != i && "" !== i && ("object" == typeof i && (i = JSON.stringify(i)), e += `${s}=${i}&`);
      }
      e = e.substring(0, e.length - 1);
      return e;
    }
    msg(e = t, s = "", i = "", o = {}) {
      const r = t => {
        const {
          $open: e,
          $copy: s,
          $media: i,
          $mediaMime: o
        } = t;
        switch (typeof t) {
          case void 0:
            return t;
          case "string":
            switch (this.getEnv()) {
              case "Surge":
              case "Stash":
              default:
                return {
                  url: t
                };
              case "Loon":
              case "Shadowrocket":
                return t;
              case "Quantumult X":
                return {
                  "open-url": t
                };
              case "Node.js":
                return;
            }
          case "object":
            switch (this.getEnv()) {
              case "Surge":
              case "Stash":
              case "Shadowrocket":
              default:
                {
                  const r = {};
                  let a = t.openUrl || t.url || t["open-url"] || e;
                  a && Object.assign(r, {
                    action: "open-url",
                    url: a
                  });
                  let n = t["update-pasteboard"] || t.updatePasteboard || s;
                  if (n && Object.assign(r, {
                    action: "clipboard",
                    text: n
                  }), i) {
                    let t, e, s;
                    if (i.startsWith("http")) {
                      t = i;
                    } else {
                      if (i.startsWith("data:")) {
                        const [t] = i.split(";"),
                          [, o] = i.split(",");
                        e = o;
                        s = t.replace("data:", "");
                      } else {
                        e = i;
                        s = (t => {
                          const e = {
                            JVBERi0: "application/pdf",
                            R0lGODdh: "image/gif",
                            R0lGODlh: "image/gif",
                            iVBORw0KGgo: "image/png",
                            "/9j/": "image/jpg"
                          };
                          for (var s in e) if (0 === t.indexOf(s)) {
                            return e[s];
                          }
                          return null;
                        })(i);
                      }
                    }
                    Object.assign(r, {
                      "media-url": t,
                      "media-base64": e,
                      "media-base64-mime": o ?? s
                    });
                  }
                  Object.assign(r, {
                    "auto-dismiss": t["auto-dismiss"],
                    sound: t.sound
                  });
                  return r;
                }
              case "Loon":
                {
                  const s = {};
                  let o = t.openUrl || t.url || t["open-url"] || e;
                  o && Object.assign(s, {
                    openUrl: o
                  });
                  let r = t.mediaUrl || t["media-url"];
                  i?.startsWith("http") && (r = i);
                  r && Object.assign(s, {
                    mediaUrl: r
                  });
                  console.log(JSON.stringify(s));
                  return s;
                }
              case "Quantumult X":
                {
                  const o = {};
                  let r = t["open-url"] || t.url || t.openUrl || e;
                  r && Object.assign(o, {
                    "open-url": r
                  });
                  let a = t["media-url"] || t.mediaUrl;
                  i?.startsWith("http") && (a = i);
                  a && Object.assign(o, {
                    "media-url": a
                  });
                  let n = t["update-pasteboard"] || t.updatePasteboard || s;
                  n && Object.assign(o, {
                    "update-pasteboard": n
                  });
                  console.log(JSON.stringify(o));
                  return o;
                }
              case "Node.js":
                return;
            }
          default:
            return;
        }
      };
      if (!this.isMute) {
        switch (this.getEnv()) {
          case "Surge":
          case "Loon":
          case "Stash":
          case "Shadowrocket":
          default:
            $notification.post(e, s, i, r(o));
            break;
          case "Quantumult X":
            $notify(e, s, i, r(o));
            break;
          case "Node.js":
            break;
        }
      }
      if (!this.isMuteLog) {
        let t = ["", "==============📣系统通知📣=============="];
        t.push(e);
        s && t.push(s);
        i && t.push(i);
        console.log(t.join("\n"));
        this.logs = this.logs.concat(t);
      }
    }
    debug(...t) {
      this.logLevels[this.logLevel] <= this.logLevels.debug && (t.length > 0 && (this.logs = [...this.logs, ...t]), console.log(`${this.logLevelPrefixs.debug}${t.map(t => t ?? String(t)).join(this.logSeparator)}`));
    }
    info(...t) {
      this.logLevels[this.logLevel] <= this.logLevels.info && (t.length > 0 && (this.logs = [...this.logs, ...t]), console.log(`${this.logLevelPrefixs.info}${t.map(t => t ?? String(t)).join(this.logSeparator)}`));
    }
    warn(...t) {
      this.logLevels[this.logLevel] <= this.logLevels.warn && (t.length > 0 && (this.logs = [...this.logs, ...t]), console.log(`${this.logLevelPrefixs.warn}${t.map(t => t ?? String(t)).join(this.logSeparator)}`));
    }
    error(...t) {
      this.logLevels[this.logLevel] <= this.logLevels.error && (t.length > 0 && (this.logs = [...this.logs, ...t]), console.log(`${this.logLevelPrefixs.error}${t.map(t => t ?? String(t)).join(this.logSeparator)}`));
    }
    log(...t) {
      t.length > 0 && (this.logs = [...this.logs, ...t]);
      console.log(t.map(t => t ?? String(t)).join(this.logSeparator));
    }
    logErr(t, e) {
      switch (this.getEnv()) {
        case "Surge":
        case "Loon":
        case "Stash":
        case "Shadowrocket":
        case "Quantumult X":
        default:
          this.log("", `❗️${this.name}, 错误!`, e, t);
          break;
        case "Node.js":
          this.log("", `❗️${this.name}, 错误!`, e, void 0 !== t.message ? t.message : t, t.stack);
          break;
      }
    }
    wait(t) {
      return new Promise(e => setTimeout(e, t));
    }
    done(t = {}) {
      const e = (new Date().getTime() - this.startTime) / 1000;
      switch (this.log("", `🔔${this.name}, 结束! 🕛 ${e} 秒`), this.log(), this.getEnv()) {
        case "Surge":
        case "Loon":
        case "Stash":
        case "Shadowrocket":
        case "Quantumult X":
        default:
          $done(t);
          break;
        case "Node.js":
          process.exit(1);
      }
    }
  }(t, e);
}