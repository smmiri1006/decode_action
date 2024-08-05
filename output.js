//Mon Aug 05 2024 07:53:45 GMT+0000 (Coordinated Universal Time)
//Base:https://github.com/echo094/decode-js
//Modify:https://github.com/smallfawn/decode_action
const $ = new Env("大潮");
const notify = $.isNode() ? require("../sendNotify") : "";
(() => {
  function b(a0) {
    b = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (a2) {
      return typeof a2;
    } : function (a2) {
      return a2 && "function" == typeof Symbol && a2.constructor === Symbol && a2 !== Symbol.prototype ? "symbol" : typeof a2;
    };
    return b(a0);
  }
  function c(a0, a1) {
    var a3 = "undefined" != typeof Symbol && a0[Symbol.iterator] || a0["@@iterator"];
    if (!a3) {
      if (Array.isArray(a0) || (a3 = d(a0)) || a1 && a0 && "number" == typeof a0.length) {
        a3 && (a0 = a3);
        var a4 = 0,
          a5 = function () {};
        return {
          s: a5,
          n: function () {
            var aa = {
              done: !0
            };
            return a4 >= a0.length ? aa : {
              done: !1,
              value: a0[a4++]
            };
          },
          e: function (aa) {
            throw aa;
          },
          f: a5
        };
      }
      throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }
    var a6,
      a7 = !0,
      a8 = !1;
    return {
      s: function () {
        a3 = a3.call(a0);
      },
      n: function () {
        var ab = a3.next();
        a7 = ab.done;
        return ab;
      },
      e: function (ab) {
        a8 = !0;
        a6 = ab;
      },
      f: function () {
        try {
          a7 || null == a3.return || a3.return();
        } finally {
          if (a8) {
            throw a6;
          }
        }
      }
    };
  }
  function d(a0, a1) {
    if (a0) {
      if ("string" == typeof a0) {
        return f(a0, a1);
      }
      var a3 = {}.toString.call(a0).slice(8, -1);
      "Object" === a3 && a0.constructor && (a3 = a0.constructor.name);
      return "Map" === a3 || "Set" === a3 ? Array.from(a0) : "Arguments" === a3 || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a3) ? f(a0, a1) : void 0;
    }
  }
  function f(a0, a1) {
    (null == a1 || a1 > a0.length) && (a1 = a0.length);
    for (var a3 = 0, a4 = Array(a1); a3 < a1; a3++) {
      a4[a3] = a0[a3];
    }
    return a4;
  }
  function g() {
    'use strict';

    g = function () {
      return a2;
    };
    var a1,
      a2 = {},
      a3 = Object.prototype,
      a4 = a3.hasOwnProperty,
      a5 = Object.defineProperty || function (ax, ay, az) {
        ax[ay] = az.value;
      },
      a6 = "function" == typeof Symbol ? Symbol : {},
      a7 = a6.iterator || "@@iterator",
      a8 = a6.asyncIterator || "@@asyncIterator",
      a9 = a6.toStringTag || "@@toStringTag";
    function aa(ax, ay, az) {
      var aB = {
        value: az,
        enumerable: !0,
        configurable: !0,
        writable: !0
      };
      Object.defineProperty(ax, ay, aB);
      return ax[ay];
    }
    try {
      aa({}, "");
    } catch (ay) {
      aa = function (aA, aB, aC) {
        return aA[aB] = aC;
      };
    }
    function ab(aA, aB, aC, aD) {
      var aF = aB && aB.prototype instanceof ai ? aB : ai,
        aG = Object.create(aF.prototype),
        aH = new av(aD || []);
      a5(aG, "_invoke", {
        value: ar(aA, aC, aH)
      });
      return aG;
    }
    function ac(aA, aB, aC) {
      try {
        return {
          type: "normal",
          arg: aA.call(aB, aC)
        };
      } catch (aH) {
        var aE = {};
        aE.type = "throw";
        aE.arg = aH;
        return aE;
      }
    }
    a2.wrap = ab;
    var ad = "suspendedStart",
      ae = "suspendedYield",
      af = "executing",
      ag = "completed",
      ah = {};
    function ai() {}
    function aj() {}
    function ak() {}
    var al = {};
    aa(al, a7, function () {
      return this;
    });
    var am = Object.getPrototypeOf,
      an = am && am(am(aw([])));
    an && an !== a3 && a4.call(an, a7) && (al = an);
    ak.prototype = ai.prototype = Object.create(al);
    var ao = ak.prototype;
    function ap(aA) {
      ["next", "throw", "return"].forEach(function (aD) {
        aa(aA, aD, function (aF) {
          return this._invoke(aD, aF);
        });
      });
    }
    function aq(aA, aB) {
      function aE(aF, aG, aH, aI) {
        var aK = ac(aA[aF], aA, aG);
        if ("throw" !== aK.type) {
          var aL = aK.arg,
            aM = aL.value;
          return aM && "object" == b(aM) && a4.call(aM, "__await") ? aB.resolve(aM.__await).then(function (aO) {
            aE("next", aO, aH, aI);
          }, function (aO) {
            aE("throw", aO, aH, aI);
          }) : aB.resolve(aM).then(function (aO) {
            aL.value = aO;
            aH(aL);
          }, function (aO) {
            return aE("throw", aO, aH, aI);
          });
        }
        aI(aK.arg);
      }
      var aD;
      a5(this, "_invoke", {
        value: function (aF, aG) {
          function aI() {
            return new aB(function (aL, aM) {
              aE(aF, aG, aL, aM);
            });
          }
          return aD = aD ? aD.then(aI, aI) : aI();
        }
      });
    }
    function ar(aA, aB, aC) {
      var aE = ad;
      return function (aG, aH) {
        if (aE === af) {
          throw Error("Generator is already running");
        }
        if (aE === ag) {
          if ("throw" === aG) {
            throw aH;
          }
          var aJ = {
            value: a1,
            done: !0
          };
          return aJ;
        }
        for (aC.method = aG, aC.arg = aH;;) {
          var aK = aC.delegate;
          if (aK) {
            var aL = as(aK, aC);
            if (aL) {
              if (aL === ah) {
                continue;
              }
              return aL;
            }
          }
          if ("next" === aC.method) {
            aC.sent = aC._sent = aC.arg;
          } else {
            if ("throw" === aC.method) {
              if (aE === ad) {
                throw aE = ag, aC.arg;
              }
              aC.dispatchException(aC.arg);
            } else {
              "return" === aC.method && aC.abrupt("return", aC.arg);
            }
          }
          aE = af;
          var aM = ac(aA, aB, aC);
          if ("normal" === aM.type) {
            if (aE = aC.done ? ag : ae, aM.arg === ah) {
              continue;
            }
            var aN = {};
            aN.value = aM.arg;
            aN.done = aC.done;
            return aN;
          }
          "throw" === aM.type && (aE = ag, aC.method = "throw", aC.arg = aM.arg);
        }
      };
    }
    function as(aA, aB) {
      var aF = aB.method,
        aG = aA.iterator[aF];
      if (aG === a1) {
        aB.delegate = null;
        "throw" === aF && aA.iterator.return && (aB.method = "return", aB.arg = a1, as(aA, aB), "throw" === aB.method) || "return" !== aF && (aB.method = "throw", aB.arg = new TypeError("The iterator does not provide a '" + aF + "' method"));
        return ah;
      }
      var aE = ac(aG, aA.iterator, aB.arg);
      if ("throw" === aE.type) {
        aB.method = "throw";
        aB.arg = aE.arg;
        aB.delegate = null;
        return ah;
      }
      var aH = aE.arg;
      return aH ? aH.done ? (aB[aA.resultName] = aH.value, aB.next = aA.nextLoc, "return" !== aB.method && (aB.method = "next", aB.arg = a1), aB.delegate = null, ah) : aH : (aB.method = "throw", aB.arg = new TypeError("iterator result is not an object"), aB.delegate = null, ah);
    }
    function at(aA) {
      var aB = {
        tryLoc: aA[0]
      };
      var aC = aB;
      1 in aA && (aC.catchLoc = aA[1]);
      2 in aA && (aC.finallyLoc = aA[2], aC.afterLoc = aA[3]);
      this.tryEntries.push(aC);
    }
    function au(aA) {
      var aC = aA.completion || {};
      aC.type = "normal";
      delete aC.arg;
      aA.completion = aC;
    }
    function av(aA) {
      var aC = {
        tryLoc: "root"
      };
      this.tryEntries = [aC];
      aA.forEach(at, this);
      this.reset(!0);
    }
    function aw(aA) {
      if (aA || "" === aA) {
        var aC = aA[a7];
        if (aC) {
          return aC.call(aA);
        }
        if ("function" == typeof aA.next) {
          return aA;
        }
        if (!isNaN(aA.length)) {
          var aD = -1,
            aE = function aH() {
              for (; ++aD < aA.length;) {
                if (a4.call(aA, aD)) {
                  aH.value = aA[aD];
                  aH.done = !1;
                  return aH;
                }
              }
              aH.value = a1;
              aH.done = !0;
              return aH;
            };
          return aE.next = aE;
        }
      }
      throw new TypeError(b(aA) + " is not iterable");
    }
    aj.prototype = ak;
    a5(ao, "constructor", {
      value: ak,
      configurable: !0
    });
    a5(ak, "constructor", {
      value: aj,
      configurable: !0
    });
    aj.displayName = aa(ak, a9, "GeneratorFunction");
    a2.isGeneratorFunction = function (aA) {
      var aB = "function" == typeof aA && aA.constructor;
      return !!aB && (aB === aj || "GeneratorFunction" === (aB.displayName || aB.name));
    };
    a2.mark = function (aA) {
      Object.setPrototypeOf ? Object.setPrototypeOf(aA, ak) : (aA.__proto__ = ak, aa(aA, a9, "GeneratorFunction"));
      aA.prototype = Object.create(ao);
      return aA;
    };
    a2.awrap = function (aA) {
      var aB = {
        __await: aA
      };
      return aB;
    };
    ap(aq.prototype);
    aa(aq.prototype, a8, function () {
      return this;
    });
    a2.AsyncIterator = aq;
    a2.async = function (aA, aB, aC, aD, aE) {
      void 0 === aE && (aE = Promise);
      var aG = new aq(ab(aA, aB, aC, aD), aE);
      return a2.isGeneratorFunction(aB) ? aG : aG.next().then(function (aI) {
        return aI.done ? aI.value : aG.next();
      });
    };
    ap(ao);
    aa(ao, a9, "Generator");
    aa(ao, a7, function () {
      return this;
    });
    aa(ao, "toString", function () {
      return "[object Generator]";
    });
    a2.keys = function (aA) {
      var aC = Object(aA),
        aD = [];
      for (var aE in aC) aD.push(aE);
      aD.reverse();
      return function aF() {
        for (; aD.length;) {
          var aH = aD.pop();
          if (aH in aC) {
            aF.value = aH;
            aF.done = !1;
            return aF;
          }
        }
        aF.done = !0;
        return aF;
      };
    };
    a2.values = aw;
    av.prototype = {
      constructor: av,
      reset: function (aA) {
        if (this.prev = 0, this.next = 0, this.sent = this._sent = a1, this.done = !1, this.delegate = null, this.method = "next", this.arg = a1, this.tryEntries.forEach(au), !aA) {
          for (var aB in this) "t" === aB.charAt(0) && a4.call(this, aB) && !isNaN(+aB.slice(1)) && (this[aB] = a1);
        }
      },
      stop: function () {
        this.done = !0;
        var aA = this.tryEntries[0].completion;
        if ("throw" === aA.type) {
          throw aA.arg;
        }
        return this.rval;
      },
      dispatchException: function (aA) {
        if (this.done) {
          throw aA;
        }
        var aC = this;
        function aI(aJ, aK) {
          aF.type = "throw";
          aF.arg = aA;
          aC.next = aJ;
          aK && (aC.method = "next", aC.arg = a1);
          return !!aK;
        }
        for (var aD = this.tryEntries.length - 1; aD >= 0; --aD) {
          var aE = this.tryEntries[aD],
            aF = aE.completion;
          if ("root" === aE.tryLoc) {
            return aI("end");
          }
          if (aE.tryLoc <= this.prev) {
            var aG = a4.call(aE, "catchLoc"),
              aH = a4.call(aE, "finallyLoc");
            if (aG && aH) {
              if (this.prev < aE.catchLoc) {
                return aI(aE.catchLoc, !0);
              }
              if (this.prev < aE.finallyLoc) {
                return aI(aE.finallyLoc);
              }
            } else {
              if (aG) {
                if (this.prev < aE.catchLoc) {
                  return aI(aE.catchLoc, !0);
                }
              } else {
                if (!aH) {
                  throw Error("try statement without catch or finally");
                }
                if (this.prev < aE.finallyLoc) {
                  return aI(aE.finallyLoc);
                }
              }
            }
          }
        }
      },
      abrupt: function (aA, aB) {
        for (var aD = this.tryEntries.length - 1; aD >= 0; --aD) {
          var aE = this.tryEntries[aD];
          if (aE.tryLoc <= this.prev && a4.call(aE, "finallyLoc") && this.prev < aE.finallyLoc) {
            var aF = aE;
            break;
          }
        }
        aF && ("break" === aA || "continue" === aA) && aF.tryLoc <= aB && aB <= aF.finallyLoc && (aF = null);
        var aG = aF ? aF.completion : {};
        aG.type = aA;
        aG.arg = aB;
        return aF ? (this.method = "next", this.next = aF.finallyLoc, ah) : this.complete(aG);
      },
      complete: function (aA, aB) {
        if ("throw" === aA.type) {
          throw aA.arg;
        }
        "break" === aA.type || "continue" === aA.type ? this.next = aA.arg : "return" === aA.type ? (this.rval = this.arg = aA.arg, this.method = "return", this.next = "end") : "normal" === aA.type && aB && (this.next = aB);
        return ah;
      },
      finish: function (aA) {
        for (var aB = this.tryEntries.length - 1; aB >= 0; --aB) {
          var aC = this.tryEntries[aB];
          if (aC.finallyLoc === aA) {
            this.complete(aC.completion, aC.afterLoc);
            au(aC);
            return ah;
          }
        }
      },
      catch: function (aA) {
        for (var aC = this.tryEntries.length - 1; aC >= 0; --aC) {
          var aD = this.tryEntries[aC];
          if (aD.tryLoc === aA) {
            var aE = aD.completion;
            if ("throw" === aE.type) {
              var aF = aE.arg;
              au(aD);
            }
            return aF;
          }
        }
        throw Error("illegal catch attempt");
      },
      delegateYield: function (aA, aB, aC) {
        this.delegate = {
          iterator: aw(aA),
          resultName: aB,
          nextLoc: aC
        };
        "next" === this.method && (this.arg = a1);
        return ah;
      }
    };
    return a2;
  }
  function h(a0, a1, a2, a3, a4, a5, a6) {
    try {
      var a8 = a0[a5](a6),
        a9 = a8.value;
    } catch (ab) {
      return void a2(ab);
    }
    a8.done ? a1(a9) : Promise.resolve(a9).then(a3, a4);
  }
  function i(a0) {
    return function () {
      var a3 = this,
        a4 = arguments;
      return new Promise(function (a5, a6) {
        var a7 = a0.apply(a3, a4);
        function a8(aa) {
          h(a7, a5, a6, a8, a9, "next", aa);
        }
        function a9(aa) {
          h(a7, a5, a6, a8, a9, "throw", aa);
        }
        a8(void 0);
      });
    };
  }
  var j = ($.isNode() ? process.env.DaChao : $.getdata("DaChao")) || "",
    k = ($.isNode() ? process.env.OCR_SERVER : $.getdata("OCR_SERVER")) || "https://ddddocr.xzxxn7.live",
    l = void 0;
  window = {};
  var m = "",
    n = "",
    o = "",
    p = "",
    q = "94",
    r = "",
    s = "10048",
    t = "",
    u = "",
    v = "",
    w = "",
    x = "",
    y = "",
    z = "",
    A = "";
  function B() {
    return C.apply(this, arguments);
  }
  function C() {
    C = i(g().mark(function a2() {
      var a4, a5, a6, a7, a8, a9, aa, ab, ac, ad, ae, af, ag, ah, ai, aj, ak, al, am, an, ao, ap, aq, ar, as, at, au, av, aw, ax, ay, az, aA, aB, aC, aD, aE, aF, aG, aH, aI, aJ, aK, aL, aM, aN, aO;
      return g().wrap(function (aP) {
        for (;;) {
          switch (aP.prev = aP.next) {
            case 0:
              if (console.log("作者：@xzxxn777\n频道：https://t.me/xzxxn777\n群组：https://t.me/xzxxn7777\n自用机场推荐：https://xn--diqv0fut7b.com\n"), j) {
                aP.next = 6;
                break;
              }
              console.log("先去boxjs填写账号密码");
              aP.next = 5;
              return Y("先去boxjs填写账号密码");
            case 5:
              return aP.abrupt("return");
            case 6:
              aP.next = 8;
              return W();
            case 8:
              l = aP.sent;
              a4 = j.split(" ");
              a5 = c(a4);
              aP.prev = 11;
              a5.s();
            case 13:
              if ((a6 = a5.n()).done) {
                aP.next = 153;
                break;
              }
              a8 = a6.value;
              console.log("随机生成UA");
              a9 = V();
              v = a9.ua;
              w = a9.commonUa;
              x = a9.uuid;
              console.log(v);
              console.log(w);
              t = a8.split("&")[0];
              u = a8.split("&")[1];
              console.log("用户：".concat(t, "开始任务"));
              console.log("获取sessionId");
              aP.next = 28;
              return J("/api/account/init");
            case 28:
              aa = aP.sent;
              p = aa.data.session.id;
              console.log(p);
              console.log("获取signature_key");
              aP.next = 34;
              return D("/web/init?client_id=".concat(s));
            case 34:
              ab = aP.sent;
              m = ab.data.client.signature_key;
              console.log(m);
              console.log("获取code");
              aP.next = 40;
              return F("/web/oauth/credential_auth");
            case 40:
              if (ac = aP.sent, ac.data) {
                aP.next = 44;
                break;
              }
              console.log(ac.message);
              return aP.abrupt("continue", 151);
            case 44:
              ad = ac.data.authorization_code.code;
              console.log(ad);
              console.log("登录");
              aP.next = 49;
              return J("/api/zbtxz/login", "check_token=&code=".concat(ad, "&token=&type=-1&union_id="));
            case 49:
              ae = aP.sent;
              console.log("登录成功");
              r = ae.data.session.account_id;
              p = ae.data.session.id;
              console.log("————————————");
              console.log("获取id");
              aP.next = 57;
              return H("/api/buoy/list");
            case 57:
              if (af = aP.sent, null == af || null === (a7 = af.data) || void 0 === a7 || null === (a7 = a7.new_down) || void 0 === a7 || !a7.icon_list[0].turn_to.url) {
                aP.next = 145;
                break;
              }
              for (ag = decodeURIComponent(af.data.new_down.icon_list[0].turn_to.url), ah = ag.split("?")[1], ai = {}, aj = ah.split("&"), ak = 0, al = aj.length; ak < al; ak++) {
                am = aj[ak].split("=");
                ai[am[0]] = am[1];
              }
              A = ai.tid;
              console.log(A);
              aP.next = 68;
              return H("/api/user_mumber/account_detail");
            case 68:
              an = aP.sent;
              ao = Math.round(new Date().getTime() / 1000).toString();
              aP.next = 72;
              return N("/memberhy/tm/signature", {
                accountId: r,
                signature: CryptoJS.SHA256(" &id&mobile&nick_name&&".concat(ao, "&&KO>N<O5&3^L1%23YH0H1#G91*2H")).toString(),
                mobile: "1",
                sessionId: p,
                login: "1",
                user: {
                  realName: "",
                  image_url: an.data.rst.image_url,
                  nick_name: an.data.rst.nick_name,
                  is_face_verify: 0,
                  idcard: "",
                  id: r
                },
                timestamp: ao,
                sign: "xsb_hn"
              });
            case 72:
              ap = aP.sent;
              y = JSON.stringify({
                id: ap.id,
                black: 0,
                btoken: ap.btoken,
                expire: ap.expire,
                token: ap.token,
                source: "xsb_hn",
                mobile: ap.mobile,
                mark: ap.mark,
                mtoken: ap.mtoken,
                stoken: ap.stoken,
                nick_name: encodeURI(ap.nick_name),
                avatar: ap.avatar
              });
              console.log("滑块验证");
              aP.next = 77;
              return L("/newshy/api/client/news/getTnCode?t=".concat(Math.random()));
            case 77:
              aq = aP.sent;
              aP.next = 80;
              return P("".concat(k, "/crop"), {
                image: aq.img,
                y_coordinate: 150
              });
            case 80:
              if (ar = aP.sent, ar) {
                aP.next = 86;
                break;
              }
              console.log("ddddocr服务异常");
              aP.next = 85;
              return Y("ddddocr服务异常");
            case 85:
              return aP.abrupt("continue", 151);
            case 86:
              var aR = {};
              aR.slidingImage = ar.slidingImage;
              aR.backImage = ar.backImage;
              aP.next = 88;
              return P("".concat(k, "/slideComparison"), aR);
            case 88:
              if (as = aP.sent, as) {
                aP.next = 94;
                break;
              }
              console.log("ddddocr服务异常");
              aP.next = 93;
              return Y("ddddocr服务异常");
            case 93:
              return aP.abrupt("continue", 151);
            case 94:
              console.log(as);
              at = aq.request_id;
              au = as.result;
              aP.next = 99;
              return L("/newshy/api/client/news/list/".concat(A));
            case 99:
              av = aP.sent;
              aw = c(av.data[0].information_content_data[0].data);
              aP.prev = 101;
              aw.s();
            case 103:
              if ((ax = aw.n()).done) {
                aP.next = 119;
                break;
              }
              for (ay = ax.value, console.log("文章：".concat(ay.title)), az = ay.link.split("?")[1], aA = {}, aB = az.split("&"), aC = 0, aD = aB.length; aC < aD; aC++) {
                aE = aB[aC].split("=");
                aA[aE[0]] = aE[1];
              }
              aF = new (l.loadJSEncrypt())();
              aF.setPublicKey("-----BEGIN PUBLIC KEY-----MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEA0G25Cq2HxQQ+gX9H2dzb6sbRtHzD8JbHRmOrAFzaWI2kdzbPuga4ZlqxOAyoAm8ucIAeKD4joUn+dN1wYC03qCgloNU21KUJUls/Htp2RwxpmoncSIAOZvSQQ6Kl3vLPYlG6GetwYYN83sG85K+3w4D89hBGHuYqKQyQsUvntxi5UVoNfo674QsCvqxHxZAuEXKoEagzUoSu8gWrDTuhRK4aQcDpnCslwKycaO63UBvfTlBG0Jc7sqzXxapTArbqaA58XCM8dRIZdp7DR/V7qucn/PwIOGJrOu09/cjndwIpeki8HXa9rvgWwiwZCy289vgRoxzIcLrQJ2oC1MK2RwIDAQAB-----END PUBLIC KEY-----");
              aG = aF.encrypt(JSON.stringify({
                news_id: A,
                item_id: ay.item_id,
                request_id: at,
                timestamp: Math.round(new Date().getTime() / 1000).toString(),
                tn_x: au
              }));
              aP.next = 115;
              return N("/newshy/api/client/news/readArticle", {
                params: aG
              });
            case 115:
              aH = aP.sent;
              console.log("阅读：".concat(null == aH ? void 0 : aH.success));
            case 117:
              aP.next = 103;
              break;
            case 119:
              aP.next = 124;
              break;
            case 121:
              aP.prev = 121;
              aP.t0 = aP.catch(101);
              aw.e(aP.t0);
            case 124:
              aP.prev = 124;
              aw.f();
              return aP.finish(124);
            case 127:
              z = av.data[0].draw.activity_id;
              console.log("抽奖id：".concat(z));
              aP.next = 131;
              return L("/lotteryhy/designh5/client/activity/".concat(z));
            case 131:
              aI = aP.sent;
              console.log("拥有".concat(aI.response.remain_counts, "次抽奖"));
              aJ = 0;
            case 134:
              if (!(aJ < aI.response.remain_counts)) {
                aP.next = 143;
                break;
              }
              aP.next = 137;
              return N("/lotteryhy/api/client/cj/awd/drw/".concat(z), {});
            case 137:
              aK = aP.sent;
              console.log("抽奖获得：".concat(aK.award_name));
              n += "用户：".concat(t, " 抽奖获得：").concat(aK.award_name, "\n");
            case 140:
              aJ++;
              aP.next = 134;
              break;
            case 143:
              aP.next = 146;
              break;
            case 145:
              console.log("没有抽奖活动");
            case 146:
              aP.next = 148;
              return L("/lotteryhy/api/client/cj/my/prize/info/".concat(z, "?page=1&count=100"));
            case 148:
              aL = aP.sent;
              aM = c(aL.data);
              try {
                for (aM.s(); !(aN = aM.n()).done;) {
                  aO = aN.value;
                  3 == aO.prize_type && 2 != aO.status && (console.log("奖品：".concat(aO.prize_content, " code：").concat(aO.prize_info.code)), o += "用户：".concat(t, " 微信领取链接：https://m.aihoge.com/lottery/rotor/drawRedPacket?CHECK_CODE=").concat(aO.prize_info.code, "\n"));
                }
              } catch (b1) {
                aM.e(b1);
              } finally {
                aM.f();
              }
            case 151:
              aP.next = 13;
              break;
            case 153:
              aP.next = 158;
              break;
            case 155:
              aP.prev = 155;
              aP.t1 = aP.catch(11);
              a5.e(aP.t1);
            case 158:
              aP.prev = 158;
              a5.f();
              return aP.finish(158);
            case 161:
              if (!n) {
                aP.next = 164;
                break;
              }
              aP.next = 164;
              return Y(n);
            case 164:
              if (!o) {
                aP.next = 167;
                break;
              }
              aP.next = 167;
              return Y(o);
            case 167:
            case "end":
              return aP.stop();
          }
        }
      }, a2, null, [[11, 155, 158, 161], [101, 121, 124, 127]]);
    }));
    return C.apply(this, arguments);
  }
  function D(a0) {
    return E.apply(this, arguments);
  }
  function E() {
    E = i(g().mark(function a1(a2) {
      return g().wrap(function (a5) {
        for (;;) {
          switch (a5.prev = a5.next) {
            case 0:
              return a5.abrupt("return", new Promise(function (a8) {
                var aa = {
                  url: "https://passport.tmuyun.com".concat(a2),
                  headers: {
                    Connection: "Keep-Alive",
                    "Cache-Control": "no-cache",
                    "X-REQUEST-ID": T(),
                    "Accept-Encoding": "gzip",
                    "user-agent": v
                  }
                };
                $.get(aa, function () {
                  var ae = i(g().mark(function ag(ah, ai, aj) {
                    return g().wrap(function (al) {
                      for (;;) {
                        switch (al.prev = al.next) {
                          case 0:
                            try {
                              ah ? (console.log("".concat(JSON.stringify(ah))), console.log("".concat($.name, " API请求失败，请检查网路重试"))) : a8(JSON.parse(aj));
                            } catch (aq) {
                              $.logErr(aq, ai);
                            } finally {
                              a8();
                            }
                          case 1:
                          case "end":
                            return al.stop();
                        }
                      }
                    }, ag);
                  }));
                  return function (ah, ai, aj) {
                    return ae.apply(this, arguments);
                  };
                }());
              }));
            case 1:
            case "end":
              return a5.stop();
          }
        }
      }, a1);
    }));
    return E.apply(this, arguments);
  }
  function F(a0) {
    return G.apply(this, arguments);
  }
  function G() {
    G = i(g().mark(function a0(a1) {
      var a3;
      return g().wrap(function (a4) {
        for (;;) {
          switch (a4.prev = a4.next) {
            case 0:
              a3 = R();
              return a4.abrupt("return", new Promise(function (a6) {
                var a8 = {
                  Connection: "Keep-Alive",
                  "X-REQUEST-ID": a3.uuid,
                  "X-SIGNATURE": a3.signature,
                  "Cache-Control": "no-cache",
                  "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
                  "Accept-Encoding": "gzip",
                  "user-agent": v
                };
                var a9 = {
                  url: "https://passport.tmuyun.com".concat(a1),
                  headers: a8,
                  body: a3.body
                };
                $.post(a9, function () {
                  var aa = i(g().mark(function ab(ac, ad, ae) {
                    return g().wrap(function (ag) {
                      for (;;) {
                        switch (ag.prev = ag.next) {
                          case 0:
                            try {
                              ac ? (console.log("".concat(JSON.stringify(ac))), console.log("".concat($.name, " API请求失败，请检查网路重试"))) : a6(JSON.parse(ae));
                            } catch (ah) {
                              $.logErr(ah, ad);
                            } finally {
                              a6();
                            }
                          case 1:
                          case "end":
                            return ag.stop();
                        }
                      }
                    }, ab);
                  }));
                  return function (ac, ad, ae) {
                    return aa.apply(this, arguments);
                  };
                }());
              }));
            case 2:
            case "end":
              return a4.stop();
          }
        }
      }, a0);
    }));
    return G.apply(this, arguments);
  }
  function H(a0) {
    return I.apply(this, arguments);
  }
  function I() {
    I = i(g().mark(function a1(a2) {
      var a3;
      return g().wrap(function (a4) {
        for (;;) {
          switch (a4.prev = a4.next) {
            case 0:
              a3 = S(a2);
              return a4.abrupt("return", new Promise(function (a6) {
                var a8 = {
                  url: "https://vapp.tmuyun.com".concat(a2),
                  headers: {
                    Connection: "Keep-Alive",
                    "X-TIMESTAMP": a3.time,
                    "X-SESSION-ID": p,
                    "X-REQUEST-ID": a3.uuid,
                    "X-SIGNATURE": a3.signature,
                    "X-TENANT-ID": q,
                    "X-ACCOUNT-ID": r,
                    "Cache-Control": "no-cache",
                    "Accept-Encoding": "gzip",
                    "user-agent": w
                  }
                };
                $.get(a8, function () {
                  var aa = i(g().mark(function ab(ac, ad, ae) {
                    return g().wrap(function (af) {
                      for (;;) {
                        switch (af.prev = af.next) {
                          case 0:
                            if (af.prev = 0, !ac) {
                              af.next = 6;
                              break;
                            }
                            console.log("".concat(JSON.stringify(ac)));
                            console.log("".concat($.name, " API请求失败，请检查网路重试"));
                            af.next = 9;
                            break;
                          case 6:
                            af.next = 8;
                            return $.wait(2000);
                          case 8:
                            a6(JSON.parse(ae));
                          case 9:
                            af.next = 14;
                            break;
                          case 11:
                            af.prev = 11;
                            af.t0 = af.catch(0);
                            $.logErr(af.t0, ad);
                          case 14:
                            af.prev = 14;
                            a6();
                            return af.finish(14);
                          case 17:
                          case "end":
                            return af.stop();
                        }
                      }
                    }, ab, null, [[0, 11, 14, 17]]);
                  }));
                  return function (ac, ad, ae) {
                    return aa.apply(this, arguments);
                  };
                }());
              }));
            case 2:
            case "end":
              return a4.stop();
          }
        }
      }, a1);
    }));
    return I.apply(this, arguments);
  }
  function J(a0, a1) {
    return K.apply(this, arguments);
  }
  function K() {
    K = i(g().mark(function a1(a2, a3) {
      var a5;
      return g().wrap(function (a6) {
        for (;;) {
          switch (a6.prev = a6.next) {
            case 0:
              a5 = S(a2);
              return a6.abrupt("return", new Promise(function (a7) {
                var a9 = {
                  url: "https://vapp.tmuyun.com".concat(a2),
                  headers: {
                    Connection: "Keep-Alive",
                    "X-TIMESTAMP": a5.time,
                    "X-SESSION-ID": p,
                    "X-REQUEST-ID": a5.uuid,
                    "X-SIGNATURE": a5.signature,
                    "X-TENANT-ID": q,
                    "X-ACCOUNT-ID": r,
                    "Cache-Control": "no-cache",
                    "Accept-Encoding": "gzip",
                    "user-agent": w
                  },
                  body: a3
                };
                $.post(a9, function () {
                  var ab = i(g().mark(function ac(ad, ae, af) {
                    return g().wrap(function (ag) {
                      for (;;) {
                        switch (ag.prev = ag.next) {
                          case 0:
                            if (ag.prev = 0, !ad) {
                              ag.next = 6;
                              break;
                            }
                            console.log("".concat(JSON.stringify(ad)));
                            console.log("".concat($.name, " API请求失败，请检查网路重试"));
                            ag.next = 9;
                            break;
                          case 6:
                            ag.next = 8;
                            return $.wait(2000);
                          case 8:
                            a7(JSON.parse(af));
                          case 9:
                            ag.next = 14;
                            break;
                          case 11:
                            ag.prev = 11;
                            ag.t0 = ag.catch(0);
                            $.logErr(ag.t0, ae);
                          case 14:
                            ag.prev = 14;
                            a7();
                            return ag.finish(14);
                          case 17:
                          case "end":
                            return ag.stop();
                        }
                      }
                    }, ac, null, [[0, 11, 14, 17]]);
                  }));
                  return function (ad, ae, af) {
                    return ab.apply(this, arguments);
                  };
                }());
              }));
            case 2:
            case "end":
              return a6.stop();
          }
        }
      }, a1);
    }));
    return K.apply(this, arguments);
  }
  function L(a0) {
    return M.apply(this, arguments);
  }
  function M() {
    M = i(g().mark(function a1(a2) {
      return g().wrap(function (a3) {
        for (;;) {
          switch (a3.prev = a3.next) {
            case 0:
              return a3.abrupt("return", new Promise(function (a5) {
                var a7 = {
                  url: "https://m.aihoge.com/api".concat(a2),
                  headers: {
                    Connection: "keep-alive",
                    "X-DEVICE-SIGN": "xsb_hn",
                    "X-CLIENT-VERSION": "1314",
                    accept: "application/json, text/plain, */*",
                    "user-agent": "Mozilla/5.0 (Linux; Android 11; 21091116AC Build/RP1A.200720.011; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/94.0.4606.85 Mobile Safari/537.36;xsb_hn;xsb_hn;14.1.6;native_app;6.11.0",
                    "HTTP-X-H5-VERSION": "1",
                    member: y,
                    Limit: A,
                    sessionId: p,
                    "X-DEVICE-ID": "000",
                    accountId: r,
                    "x-requested-with": "com.hoge.android.app.dachao",
                    "sec-fetch-site": "same-origin",
                    "sec-fetch-mode": "cors",
                    "sec-fetch-dest": "empty",
                    Referer: "https://m.aihoge.com/h5?mark=news-read@designh5&tid=".concat(A, "&path=index&isNeedLogin=true"),
                    "accept-encoding": "gzip, deflate",
                    "accept-language": "zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7"
                  }
                };
                $.get(a7, function () {
                  var a9 = i(g().mark(function aa(ab, ac, ad) {
                    return g().wrap(function (ae) {
                      for (;;) {
                        switch (ae.prev = ae.next) {
                          case 0:
                            if (ae.prev = 0, !ab) {
                              ae.next = 6;
                              break;
                            }
                            console.log("".concat(JSON.stringify(ab)));
                            console.log("".concat($.name, " API请求失败，请检查网路重试"));
                            ae.next = 9;
                            break;
                          case 6:
                            ae.next = 8;
                            return $.wait(2000);
                          case 8:
                            a5(JSON.parse(ad));
                          case 9:
                            ae.next = 14;
                            break;
                          case 11:
                            ae.prev = 11;
                            ae.t0 = ae.catch(0);
                            $.logErr(ae.t0, ac);
                          case 14:
                            ae.prev = 14;
                            a5();
                            return ae.finish(14);
                          case 17:
                          case "end":
                            return ae.stop();
                        }
                      }
                    }, aa, null, [[0, 11, 14, 17]]);
                  }));
                  return function (ab, ac, ad) {
                    return a9.apply(this, arguments);
                  };
                }());
              }));
            case 1:
            case "end":
              return a3.stop();
          }
        }
      }, a1);
    }));
    return M.apply(this, arguments);
  }
  function N(a0, a1) {
    return O.apply(this, arguments);
  }
  function O() {
    O = i(g().mark(function a1(a2, a3) {
      return g().wrap(function (a5) {
        for (;;) {
          switch (a5.prev = a5.next) {
            case 0:
              return a5.abrupt("return", new Promise(function (a7) {
                var a9 = {
                  url: "https://m.aihoge.com/api".concat(a2),
                  headers: {
                    Connection: "keep-alive",
                    "X-DEVICE-SIGN": "xsb_hn",
                    "X-CLIENT-VERSION": "1314",
                    "Content-Type": "application/json;charset=UTF-8",
                    accept: "application/json, text/plain, */*",
                    "user-agent": "Mozilla/5.0 (Linux; Android 11; 21091116AC Build/RP1A.200720.011; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/94.0.4606.85 Mobile Safari/537.36;xsb_hn;xsb_hn;14.1.6;native_app;6.11.0",
                    "HTTP-X-H5-VERSION": "1",
                    member: y,
                    Limit: A,
                    sessionId: p,
                    "X-DEVICE-ID": "000",
                    accountId: r,
                    "x-requested-with": "com.hoge.android.app.dachao",
                    "sec-fetch-site": "same-origin",
                    "sec-fetch-mode": "cors",
                    "sec-fetch-dest": "empty",
                    Referer: "https://m.aihoge.com/h5?mark=news-read@designh5&tid=".concat(A, "&path=index&isNeedLogin=true"),
                    "accept-encoding": "gzip, deflate",
                    "accept-language": "zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7"
                  },
                  body: JSON.stringify(a3)
                };
                $.post(a9, function () {
                  var ab = i(g().mark(function ac(ad, ae, af) {
                    return g().wrap(function (ag) {
                      for (;;) {
                        switch (ag.prev = ag.next) {
                          case 0:
                            if (ag.prev = 0, !ad) {
                              ag.next = 6;
                              break;
                            }
                            console.log("".concat(JSON.stringify(ad)));
                            console.log("".concat($.name, " API请求失败，请检查网路重试"));
                            ag.next = 9;
                            break;
                          case 6:
                            ag.next = 8;
                            return $.wait(2000);
                          case 8:
                            a7(JSON.parse(af));
                          case 9:
                            ag.next = 14;
                            break;
                          case 11:
                            ag.prev = 11;
                            ag.t0 = ag.catch(0);
                            $.logErr(ag.t0, ae);
                          case 14:
                            ag.prev = 14;
                            a7();
                            return ag.finish(14);
                          case 17:
                          case "end":
                            return ag.stop();
                        }
                      }
                    }, ac, null, [[0, 11, 14, 17]]);
                  }));
                  return function (ad, ae, af) {
                    return ab.apply(this, arguments);
                  };
                }());
              }));
            case 1:
            case "end":
              return a5.stop();
          }
        }
      }, a1);
    }));
    return O.apply(this, arguments);
  }
  function P(a0, a1) {
    return Q.apply(this, arguments);
  }
  function Q() {
    Q = i(g().mark(function a0(a1, a2) {
      return g().wrap(function (a5) {
        for (;;) {
          switch (a5.prev = a5.next) {
            case 0:
              return a5.abrupt("return", new Promise(function (a8) {
                var ab = {
                  "Content-Type": "application/json"
                };
                var ac = {
                  url: a1,
                  headers: ab,
                  body: JSON.stringify(a2)
                };
                $.post(ac, function (ad, ae, af) {
                  try {
                    ad ? (console.log("".concat(JSON.stringify(ad))), console.log("".concat($.name, " API请求失败，请检查网路重试"))) : a8(JSON.parse(af));
                  } catch (ag) {
                    $.logErr(ag, ae);
                  } finally {
                    a8();
                  }
                });
              }));
            case 1:
            case "end":
              return a5.stop();
          }
        }
      }, a0);
    }));
    return Q.apply(this, arguments);
  }
  function R() {
    var a8 = new (l.loadJSEncrypt())();
    a8.setPublicKey("MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQD6XO7e9YeAOs+cFqwa7ETJ+WXizPqQeXv68i5vqw9pFREsrqiBTRcg7wB0RIp3rJkDpaeVJLsZqYm5TW7FWx/iOiXFc+zCPvaKZric2dXCw27EvlH5rq+zwIPDAJHGAfnn1nmQH7wR3PCatEIb8pz5GFlTHMlluw4ZYmnOwg+thwIDAQAB");
    u = a8.encrypt(u);
    var a5 = T(),
      a6 = "client_id=".concat(s, "&password=").concat(u, "&phone_number=").concat(t),
      a7 = "post%%/web/oauth/credential_auth?".concat(a6, "%%").concat(a5, "%%");
    a6 = "client_id=".concat(s, "&password=").concat(encodeURIComponent(u), "&phone_number=").concat(t);
    CryptoJS = l.createCryptoJS();
    var a3 = CryptoJS.HmacSHA256(a7, m),
      a4 = CryptoJS.enc.Hex.stringify(a3);
    var a2 = {};
    a2.uuid = a5;
    a2.signature = a4;
    a2.body = a6;
    return a2;
  }
  function S(a0) {
    var a1 = T(),
      a2 = Date.now();
    a0.indexOf("?") > 0 && (a0 = a0.substring(0, a0.indexOf("?")));
    CryptoJS = l.createCryptoJS();
    var a3 = CryptoJS.SHA256("".concat(a0, "&&").concat(p, "&&").concat(a1, "&&").concat(a2, "&&FR*r!isE5W&&").concat(q)).toString(),
      a4 = {
        uuid: a1,
        time: a2,
        signature: a3
      };
    return a4;
  }
  function T() {
    return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (a0) {
      var a1 = 16 * Math.random() | 0,
        a2 = "x" === a0 ? a1 : 3 & a1 | 8;
      return a2.toString(16);
    });
  }
  function U(a0) {
    return a0[Math.floor(Math.random() * a0.length)];
  }
  function V() {
    var a0 = "14.1.6",
      a1 = T(),
      a2 = U(["M1903F2A", "M2001J2E", "M2001J2C", "M2001J1E", "M2001J1C", "M2002J9E", "M2011K2C", "M2102K1C", "M2101K9C", "2107119DC", "2201123C", "2112123AC", "2201122C", "2211133C", "2210132C", "2304FPN6DC", "23127PN0CC", "24031PN0DC", "23090RA98C", "2312DRA50C", "2312CRAD3C", "2312DRAABC", "22101316UCP", "22101316C"]),
      a3 = "Xiaomi " + a2,
      a4 = "Android",
      a5 = "".concat(a4.toUpperCase(), ";").concat("11", ";").concat(s, ";").concat(a0, ";1.0;null;").concat(a2),
      a6 = "".concat(a0, ";").concat(a1, ";").concat(a3, ";").concat(a4, ";").concat("11", ";").concat("6.11.0"),
      a7 = {
        ua: a5,
        commonUa: a6,
        uuid: a1
      };
    return a7;
  }
  function W() {
    return X.apply(this, arguments);
  }
  function X() {
    X = i(g().mark(function a0() {
      var a2;
      return g().wrap(function a3(a4) {
        for (;;) {
          switch (a4.prev = a4.next) {
            case 0:
              if (a2 = $.getdata("Utils_Code") || "", !a2 || !Object.keys(a2).length) {
                a4.next = 5;
                break;
              }
              console.log("✅ ".concat($.name, ": 缓存中存在Utils代码, 跳过下载"));
              eval(a2);
              return a4.abrupt("return", creatUtils());
            case 5:
              console.log("🚀 ".concat($.name, ": 开始下载Utils代码"));
              return a4.abrupt("return", new Promise(function () {
                var a8 = i(g().mark(function a9(aa) {
                  return g().wrap(function ac(ad) {
                    for (;;) {
                      switch (ad.prev = ad.next) {
                        case 0:
                          $.getScript("https://mirror.ghproxy.com/https://raw.githubusercontent.com/xzxxn777/Surge/main/Utils/Utils.js").then(function (ae) {
                            $.setdata(ae, "Utils_Code");
                            eval(ae);
                            console.log("✅ Utils加载成功, 请继续");
                            aa(creatUtils());
                          });
                        case 1:
                        case "end":
                          return ad.stop();
                      }
                    }
                  }, a9);
                }));
                return function (aa) {
                  return a8.apply(this, arguments);
                };
              }()));
            case 7:
            case "end":
              return a4.stop();
          }
        }
      }, a0);
    }));
    return X.apply(this, arguments);
  }
  function Y(a0) {
    return Z.apply(this, arguments);
  }
  function Z() {
    Z = i(g().mark(function a2(a3) {
      return g().wrap(function (a4) {
        for (;;) {
          switch (a4.prev = a4.next) {
            case 0:
              if (!$.isNode()) {
                a4.next = 5;
                break;
              }
              a4.next = 3;
              return notify.sendNotify($.name, a3);
            case 3:
              a4.next = 6;
              break;
            case 5:
              $.msg($.name, "", a3);
            case 6:
            case "end":
              return a4.stop();
          }
        }
      }, a2);
    }));
    return Z.apply(this, arguments);
  }
  i(g().mark(function a0() {
    return g().wrap(function (a1) {
      for (;;) {
        switch (a1.prev = a1.next) {
          case 0:
            a1.next = 2;
            return B();
          case 2:
          case "end":
            return a1.stop();
        }
      }
    }, a0);
  }))().catch(function (a1) {
    $.log(a1);
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