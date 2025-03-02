//Sun Mar 02 2025 10:37:44 GMT+0000 (Coordinated Universal Time)
//Base:https://github.com/echo094/decode-js
//Modify:https://github.com/smallfawn/decode_action
const $ = new Env("大潮");
const notify = $.isNode() ? require("../sendNotify") : "";
(() => {
  function b(ae) {
    {
      b = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (ah) {
        {
          return typeof ah;
        }
      } : function (ah) {
        return ah && "function" == typeof Symbol && ah.constructor === Symbol && ah !== Symbol.prototype ? "symbol" : typeof ah;
      };
      return b(ae);
    }
  }
  function c(ae, af) {
    {
      var ah = "undefined" != typeof Symbol && ae[Symbol.iterator] || ae["@@iterator"];
      if (!ah) {
        {
          if (Array.isArray(ae) || (ah = d(ae)) || af && ae && "number" == typeof ae.length) {
            {
              ah && (ae = ah);
              var ai = 0;
              var aj = function () {};
              return {
                s: aj,
                n: function () {
                  {
                    var ap = {
                      done: true
                    };
                    return ai >= ae.length ? ap : {
                      done: false,
                      value: ae[ai++]
                    };
                  }
                },
                e: function (ao) {
                  {
                    throw ao;
                  }
                },
                f: aj
              };
            }
          }
          throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
        }
      }
      var ak;
      var al = true;
      var am = false;
      return {
        s: function () {
          {
            ah = ah.call(ae);
          }
        },
        n: function () {
          {
            var ap = ah.next();
            al = ap.done;
            return ap;
          }
        },
        e: function (ap) {
          {
            am = true;
            ak = ap;
          }
        },
        f: function () {
          {
            try {
              {
                al || null == ah.return || ah.return();
              }
            } finally {
              {
                if (am) {
                  throw ak;
                }
              }
            }
          }
        }
      };
    }
  }
  function d(ae, af) {
    {
      if (ae) {
        {
          if ("string" == typeof ae) {
            return f(ae, af);
          }
          var ag = {}.toString.call(ae).slice(8, -1);
          "Object" === ag && ae.constructor && (ag = ae.constructor.name);
          return "Map" === ag || "Set" === ag ? Array.from(ae) : "Arguments" === ag || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(ag) ? f(ae, af) : undefined;
        }
      }
    }
  }
  function f(ae, af) {
    {
      (null == af || af > ae.length) && (af = ae.length);
      for (var ag = 0, ah = Array(af); ag < af; ag++) {
        ah[ag] = ae[ag];
      }
      return ah;
    }
  }
  function g() {
    "use strict";

    var ae = {
      DIKmN: "gZkhC",
      QOWnh: "sdGxT",
      iyuWQ: function (aL, aM, aN, aO, aP, aQ, aR, aS) {
        return aL(aM, aN, aO, aP, aQ, aR, aS);
      },
      oidLe: "throw",
      AUpOK: function (aL, aM) {
        return aL !== aM;
      },
      Jkknf: "rIuSX",
      XLJsM: "HklGB",
      wsVLC: function (aL, aM) {
        return aL === aM;
      },
      LmVhu: "FZjqZ",
      JkPvo: "zbMzJ",
      dtTIC: "eFnci",
      bMepu: function (aL, aM) {
        return aL instanceof aM;
      },
      tBWNR: "_invoke",
      UhyMj: function (aL, aM, aN, aO) {
        return aL(aM, aN, aO);
      },
      kwrFI: function (aL, aM) {
        return aL < aM;
      },
      fXVGg: function (aL, aM, aN) {
        return aL(aM, aN);
      },
      hNcBJ: function (aL, aM, aN, aO, aP, aQ, aR, aS) {
        return aL(aM, aN, aO, aP, aQ, aR, aS);
      },
      cERkm: "next",
      NYdpj: "end",
      KlVmY: function (aL, aM) {
        return aL !== aM;
      },
      YqVGz: "hrXqq",
      eLAVJ: function (aL, aM) {
        return aL === aM;
      },
      wxqPQ: "uLGRg",
      wqSPl: "normal",
      YoBBo: "GeneratorFunction",
      DHeiF: "KLiot",
      SLzbX: function (aL, aM) {
        return aL in aM;
      },
      JhvpJ: function (aL, aM) {
        return aL >= aM;
      },
      CUBvE: "sDsTV",
      rRtLq: function (aL, aM) {
        return aL === aM;
      },
      zkeyq: "pznZo",
      QPORU: "jWHFi",
      AiAAE: "return",
      psVdD: function (aL, aM, aN, aO, aP) {
        return aL(aM, aN, aO, aP);
      },
      SPrfq: function (aL, aM) {
        return aL(aM);
      },
      PgdmY: "try statement without catch or finally",
      MVkom: function (aL, aM) {
        return aL < aM;
      },
      ycUKU: function (aL, aM) {
        return aL === aM;
      },
      lLhNq: "bHzCt",
      dNUKj: "ZuOlN",
      wUnsX: "Wawyg",
      UPVjf: "KACMq",
      UgicJ: "WRrkJ",
      TPUDJ: function (aL, aM) {
        return aL !== aM;
      },
      jcFcq: "PLYFN",
      zpqPC: "RVOpJ",
      XbHEc: "DOpve",
      UFxKV: function (aL, aM) {
        return aL === aM;
      },
      svPtR: "FkVLf",
      AWQhX: function (aL, aM) {
        return aL !== aM;
      },
      eUKEm: "VUnLH",
      QzSBa: "gkYuR",
      uGdes: "5|3|4|2|0|1",
      XcLPv: function (aL, aM) {
        return aL === aM;
      },
      iaBrF: function (aL, aM) {
        return aL + aM;
      },
      RHumF: "The iterator does not provide a '",
      jeBbN: "' method",
      SBFJl: function (aL) {
        return aL();
      },
      dXuNg: function (aL, aM) {
        return aL == aM;
      },
      cORGC: function (aL, aM) {
        return aL === aM;
      },
      uWEDR: "DOSKU",
      AWpFG: "PPGPZ",
      fpduZ: "root",
      wLNBu: "function",
      RSkRi: function (aL, aM) {
        return aL === aM;
      },
      YQIYn: function (aL, aM) {
        return aL === aM;
      },
      erpxs: "vdVVu",
      LfvhK: function (aL, aM) {
        return aL == aM;
      },
      uGIZK: function (aL, aM) {
        return aL !== aM;
      },
      hYKNQ: "Sikfa",
      gnKEJ: "wvVHV",
      maVZI: function (aL, aM) {
        return aL === aM;
      },
      XVOvJ: "ROFPc",
      XHytX: "urpDO",
      rRWNx: function (aL, aM) {
        return aL !== aM;
      },
      alqmn: "AwXJH",
      OTKjK: "RKcmp",
      Sqrjp: function (aL, aM, aN, aO) {
        return aL(aM, aN, aO);
      },
      FgCqS: function (aL, aM) {
        return aL > aM;
      },
      rRaYR: "&&FR*r!isE5W&&",
      mHpPW: function (aL, aM) {
        return aL === aM;
      },
      sGZtV: "TMNhp",
      pwPOW: "gEVpn",
      HMEzp: "[object Generator]",
      pnOdb: "mXzIQ",
      bxdeM: "CjAxV",
      cGibd: "string",
      ynMyz: function (aL, aM, aN) {
        return aL(aM, aN);
      },
      eMCDm: "Object",
      HShLY: "Map",
      AnuQu: function (aL, aM) {
        return aL === aM;
      },
      sHtaA: "Set",
      reNJT: "Arguments",
      nABfa: function (aL, aM) {
        return aL === aM;
      },
      nYxdl: "prSND",
      oRGvp: "Pxueo",
      DFRcB: function (aL, aM) {
        return aL !== aM;
      },
      yROoj: "LuZlU",
      ChSSQ: function (aL, aM) {
        return aL === aM;
      },
      DhSqc: function (aL, aM) {
        return aL(aM);
      },
      tOHdf: function (aL, aM, aN) {
        return aL(aM, aN);
      },
      WsBao: "zcZOe",
      FGdet: function (aL, aM) {
        return aL - aM;
      },
      JRWgG: "QFSRI",
      lkjHk: function (aL, aM) {
        return aL <= aM;
      },
      gbyBN: "finallyLoc",
      eKikR: "uroPO",
      CMmzy: "DCyIc",
      MrNnf: function (aL, aM) {
        return aL === aM;
      },
      LvuNb: function (aL, aM) {
        return aL === aM;
      },
      gFzIf: "continue",
      qLkTY: function (aL, aM) {
        return aL <= aM;
      },
      LKrWP: function (aL, aM) {
        return aL !== aM;
      },
      sjRRn: "CFnEB",
      BljTN: function (aL, aM) {
        return aL === aM;
      },
      pdLaa: function (aL, aM) {
        return aL === aM;
      },
      yxrox: "/https://raw.githubusercontent.com/xzxxn777/Surge/main/Utils/Utils.js",
      hujon: function (aL, aM) {
        return aL == aM;
      },
      eujpY: "✅ Utils加载成功, 请继续",
      INrhP: function (aL) {
        return aL();
      },
      UnENT: "zjMMm",
      ikboK: "zKkVC",
      vMWYN: function (aL, aM) {
        return aL(aM);
      },
      PUujl: "XgyDS",
      dFeXu: function (aL, aM) {
        return aL !== aM;
      },
      gViPG: "hzEPj",
      AMxMp: function (aL, aM) {
        return aL === aM;
      },
      hvwxK: function (aL, aM) {
        return aL !== aM;
      },
      SYRSj: "YIVkq",
      wjhQT: "omcak",
      NGDxC: "BYTgf",
      qqYuF: "illegal catch attempt"
    };
    g = function () {
      return ag;
    };
    var af;
    var ag = {
      wrap: ap
    };
    var ah = Object.prototype;
    var ai = ah.hasOwnProperty;
    var aj = Object.defineProperty || function (aL, aM, aN) {
      aL[aM] = aN.value;
    };
    var ak = "function" == typeof Symbol ? Symbol : {};
    var al = ak.iterator || "@@iterator";
    var am = ak.asyncIterator || "@@asyncIterator";
    var an = ak.toStringTag || "@@toStringTag";
    function ao(aL, aM, aN) {
      {
        var aO = {
          value: aN,
          enumerable: true,
          configurable: true,
          writable: true
        };
        Object.defineProperty(aL, aM, aO);
        return aL[aM];
      }
    }
    try {
      ao({}, "");
    } catch (aM) {
      {
        ao = function (aN, aO, aP) {
          {
            return aN[aO] = aP;
          }
        };
      }
    }
    function ap(aO, aP, aQ, aR) {
      {
        var aU = aP && aP.prototype instanceof aw ? aP : aw;
        var aV = Object.create(aU.prototype);
        var aW = new aJ(aR || []);
        aj(aV, "_invoke", {
          value: aF(aO, aQ, aW)
        });
        return aV;
      }
    }
    function aq(aO, aP, aQ) {
      {
        try {
          return {
            type: "normal",
            arg: aO.call(aP, aQ)
          };
        } catch (aV) {
          {
            var aS = {
              type: "throw",
              arg: aV
            };
            return aS;
          }
        }
      }
    }
    var ar = "suspendedStart";
    var as = "suspendedYield";
    var at = "executing";
    var au = "completed";
    var av = {};
    function aw() {}
    function ax() {}
    function ay() {}
    var az = {};
    ao(az, al, function () {
      return this;
    });
    var aA = Object.getPrototypeOf;
    var aB = aA && aA(aA(aK([])));
    aB && aB !== ah && ai.call(aB, al) && (az = aB);
    ay.prototype = aw.prototype = Object.create(az);
    var aC = ay.prototype;
    function aD(aO) {
      {
        ["next", "throw", "return"].forEach(function (aR) {
          {
            ao(aO, aR, function (aU) {
              {
                return this._invoke(aR, aU);
              }
            });
          }
        });
      }
    }
    function aE(aO, aP) {
      {
        function aT(aU, aV, aW, aX) {
          {
            var aZ = aq(aO[aU], aO, aV);
            if ("throw" !== aZ.type) {
              {
                var b0 = aZ.arg;
                var b1 = b0.value;
                return b1 && "object" == b(b1) && ai.call(b1, "__await") ? aP.resolve(b1.__await).then(function (b4) {
                  {
                    aT("next", b4, aW, aX);
                  }
                }, function (b4) {
                  {
                    aT("throw", b4, aW, aX);
                  }
                }) : aP.resolve(b1).then(function (b4) {
                  b0.value = b4;
                  aW(b0);
                }, function (b4) {
                  {
                    return aT("throw", b4, aW, aX);
                  }
                });
              }
            }
            aX(aZ.arg);
          }
        }
        var aR;
        aj(this, "_invoke", {
          value: function (aU, aV) {
            {
              function aX() {
                {
                  return new aP(function (aZ, b0) {
                    {
                      aT(aU, aV, aZ, b0);
                    }
                  });
                }
              }
              return aR = aR ? aR.then(aX, aX) : aX();
            }
          }
        });
      }
    }
    function aF(aO, aP, aQ) {
      {
        var aS = ar;
        return function (aT, aU) {
          {
            if (aS === at) {
              throw Error("Generator is already running");
            }
            if (aS === au) {
              {
                if ("throw" === aT) {
                  throw aU;
                }
                var aW = {
                  value: af,
                  done: true
                };
                return aW;
              }
            }
            for (aQ.method = aT, aQ.arg = aU;;) {
              {
                var aX = aQ.delegate;
                if (aX) {
                  {
                    var aY = aG(aX, aQ);
                    if (aY) {
                      {
                        if (aY === av) {
                          continue;
                        }
                        return aY;
                      }
                    }
                  }
                }
                if ("next" === aQ.method) {
                  aQ.sent = aQ._sent = aQ.arg;
                } else {
                  if ("throw" === aQ.method) {
                    {
                      if (aS === ar) {
                        throw aS = au, aQ.arg;
                      }
                      aQ.dispatchException(aQ.arg);
                    }
                  } else {
                    "return" === aQ.method && aQ.abrupt("return", aQ.arg);
                  }
                }
                aS = at;
                var aZ = aq(aO, aP, aQ);
                if ("normal" === aZ.type) {
                  {
                    if (aS = aQ.done ? au : as, aZ.arg === av) {
                      continue;
                    }
                    var b0 = {
                      value: aZ.arg,
                      done: aQ.done
                    };
                    return b0;
                  }
                }
                "throw" === aZ.type && (aS = au, aQ.method = "throw", aQ.arg = aZ.arg);
              }
            }
          }
        };
      }
    }
    function aG(aO, aP) {
      {
        var aU = aP.method;
        var aV = aO.iterator[aU];
        if (aV === af) {
          aP.delegate = null;
          "throw" === aU && aO.iterator.return && (aP.method = "return", aP.arg = af, aG(aO, aP), "throw" === aP.method) || "return" !== aU && (aP.method = "throw", aP.arg = new TypeError("The iterator does not provide a '" + aU + "' method"));
          return av;
        }
        var aT = aq(aV, aO.iterator, aP.arg);
        if ("throw" === aT.type) {
          aP.method = "throw";
          aP.arg = aT.arg;
          aP.delegate = null;
          return av;
        }
        var aS = aT.arg;
        return aS ? aS.done ? (aP[aO.resultName] = aS.value, aP.next = aO.nextLoc, "return" !== aP.method && (aP.method = "next", aP.arg = af), aP.delegate = null, av) : aS : (aP.method = "throw", aP.arg = new TypeError("iterator result is not an object"), aP.delegate = null, av);
      }
    }
    function aH(aO) {
      {
        var aR = {
          tryLoc: aO[0]
        };
        1 in aO && (aR.catchLoc = aO[1]);
        2 in aO && (aR.finallyLoc = aO[2], aR.afterLoc = aO[3]);
        this.tryEntries.push(aR);
      }
    }
    function aI(aO) {
      {
        var aQ = aO.completion || {};
        aQ.type = "normal";
        delete aQ.arg;
        aO.completion = aQ;
      }
    }
    function aJ(aO) {
      {
        var aP = {
          tryLoc: "root"
        };
        this.tryEntries = [aP];
        aO.forEach(aH, this);
        this.reset(true);
      }
    }
    function aK(aO) {
      {
        if (aO || "" === aO) {
          {
            var aQ = aO[al];
            if (aQ) {
              return aQ.call(aO);
            }
            if ("function" == typeof aO.next) {
              return aO;
            }
            if (!isNaN(aO.length)) {
              {
                var aR = -1;
                var aS = function aU() {
                  {
                    for (; ++aR < aO.length;) {
                      if (ai.call(aO, aR)) {
                        aU.value = aO[aR];
                        aU.done = false;
                        return aU;
                      }
                    }
                    aU.value = af;
                    aU.done = true;
                    return aU;
                  }
                };
                return aS.next = aS;
              }
            }
          }
        }
        throw new TypeError(b(aO) + " is not iterable");
      }
    }
    ax.prototype = ay;
    aj(aC, "constructor", {
      value: ay,
      configurable: true
    });
    aj(ay, "constructor", {
      value: ax,
      configurable: true
    });
    ax.displayName = ao(ay, an, "GeneratorFunction");
    ag.isGeneratorFunction = function (aO) {
      {
        var aQ = "function" == typeof aO && aO.constructor;
        return !!aQ && (aQ === ax || "GeneratorFunction" === (aQ.displayName || aQ.name));
      }
    };
    ag.mark = function (aO) {
      {
        Object.setPrototypeOf ? Object.setPrototypeOf(aO, ay) : (aO.__proto__ = ay, ao(aO, an, "GeneratorFunction"));
        aO.prototype = Object.create(aC);
        return aO;
      }
    };
    ag.awrap = function (aO) {
      {
        var aP = {
          __await: aO
        };
        return aP;
      }
    };
    aD(aE.prototype);
    ao(aE.prototype, am, function () {
      {
        return this;
      }
    });
    ag.AsyncIterator = aE;
    ag.async = function (aO, aP, aQ, aR, aS) {
      {
        undefined === aS && (aS = Promise);
        var aU = new aE(ap(aO, aP, aQ, aR), aS);
        return ag.isGeneratorFunction(aP) ? aU : aU.next().then(function (aW) {
          {
            return aW.done ? aW.value : aU.next();
          }
        });
      }
    };
    aD(aC);
    ao(aC, an, "Generator");
    ao(aC, al, function () {
      {
        return this;
      }
    });
    ao(aC, "toString", function () {
      {
        return "[object Generator]";
      }
    });
    ag.keys = function (aO) {
      {
        var aQ = Object(aO);
        var aR = [];
        for (var aS in aQ) aR.push(aS);
        aR.reverse();
        return function aU() {
          {
            for (; aR.length;) {
              {
                var aV = aR.pop();
                if (aV in aQ) {
                  aU.value = aV;
                  aU.done = false;
                  return aU;
                }
              }
            }
            aU.done = true;
            return aU;
          }
        };
      }
    };
    ag.values = aK;
    aJ.prototype = {
      constructor: aJ,
      reset: function (aO) {
        {
          if (this.prev = 0, this.next = 0, this.sent = this._sent = af, this.done = false, this.delegate = null, this.method = "next", this.arg = af, this.tryEntries.forEach(aI), !aO) {
            for (var aQ in this) "t" === aQ.charAt(0) && ai.call(this, aQ) && !isNaN(+aQ.slice(1)) && (this[aQ] = af);
          }
        }
      },
      stop: function () {
        {
          this.done = true;
          var aO = this.tryEntries[0].completion;
          if ("throw" === aO.type) {
            throw aO.arg;
          }
          return this.rval;
        }
      },
      dispatchException: function (aO) {
        {
          if (this.done) {
            throw aO;
          }
          var aQ = this;
          function aW(aX, aY) {
            {
              aT.type = "throw";
              aT.arg = aO;
              aQ.next = aX;
              aY && (aQ.method = "next", aQ.arg = af);
              return !!aY;
            }
          }
          for (var aR = this.tryEntries.length - 1; aR >= 0; --aR) {
            {
              var aS = this.tryEntries[aR];
              var aT = aS.completion;
              if ("root" === aS.tryLoc) {
                return aW("end");
              }
              if (aS.tryLoc <= this.prev) {
                {
                  var aU = ai.call(aS, "catchLoc");
                  var aV = ai.call(aS, "finallyLoc");
                  if (aU && aV) {
                    {
                      if (this.prev < aS.catchLoc) {
                        return aW(aS.catchLoc, true);
                      }
                      if (this.prev < aS.finallyLoc) {
                        return aW(aS.finallyLoc);
                      }
                    }
                  } else {
                    if (aU) {
                      {
                        if (this.prev < aS.catchLoc) {
                          return aW(aS.catchLoc, true);
                        }
                      }
                    } else {
                      {
                        if (!aV) {
                          throw Error("try statement without catch or finally");
                        }
                        if (this.prev < aS.finallyLoc) {
                          return aW(aS.finallyLoc);
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      },
      abrupt: function (aO, aP) {
        {
          for (var aQ = this.tryEntries.length - 1; aQ >= 0; --aQ) {
            {
              var aR = this.tryEntries[aQ];
              if (aR.tryLoc <= this.prev && ai.call(aR, "finallyLoc") && this.prev < aR.finallyLoc) {
                {
                  var aS = aR;
                  break;
                }
              }
            }
          }
          aS && ("break" === aO || "continue" === aO) && aS.tryLoc <= aP && aP <= aS.finallyLoc && (aS = null);
          var aT = aS ? aS.completion : {};
          aT.type = aO;
          aT.arg = aP;
          return aS ? (this.method = "next", this.next = aS.finallyLoc, av) : this.complete(aT);
        }
      },
      complete: function (aO, aP) {
        {
          if ("throw" === aO.type) {
            throw aO.arg;
          }
          "break" === aO.type || "continue" === aO.type ? this.next = aO.arg : "return" === aO.type ? (this.rval = this.arg = aO.arg, this.method = "return", this.next = "end") : "normal" === aO.type && aP && (this.next = aP);
          return av;
        }
      },
      finish: function (aO) {
        {
          for (var aQ = this.tryEntries.length - 1; aQ >= 0; --aQ) {
            {
              var aR = this.tryEntries[aQ];
              if (aR.finallyLoc === aO) {
                this.complete(aR.completion, aR.afterLoc);
                aI(aR);
                return av;
              }
            }
          }
        }
      },
      catch: function (aO) {
        {
          for (var aP = this.tryEntries.length - 1; aP >= 0; --aP) {
            {
              var aQ = this.tryEntries[aP];
              if (aQ.tryLoc === aO) {
                {
                  var aR = aQ.completion;
                  if ("throw" === aR.type) {
                    {
                      var aS = aR.arg;
                      aI(aQ);
                    }
                  }
                  return aS;
                }
              }
            }
          }
          throw Error("illegal catch attempt");
        }
      },
      delegateYield: function (aO, aP, aQ) {
        this.delegate = {
          iterator: aK(aO),
          resultName: aP,
          nextLoc: aQ
        };
        "next" === this.method && (this.arg = af);
        return av;
      }
    };
    return ag;
  }
  function h(ae, af, ag, ah, ai, aj, ak) {
    {
      try {
        {
          var am = ae[aj](ak);
          var an = am.value;
        }
      } catch (aq) {
        return void ag(aq);
      }
      am.done ? af(an) : Promise.resolve(an).then(ah, ai);
    }
  }
  function i(ae) {
    return function () {
      var ah = this;
      var ai = arguments;
      return new Promise(function (aj, ak) {
        var al = ae.apply(ah, ai);
        function am(ao) {
          {
            h(al, aj, ak, am, an, "next", ao);
          }
        }
        function an(ao) {
          h(al, aj, ak, am, an, "throw", ao);
        }
        am(undefined);
      });
    };
  }
  var j = ($.isNode() ? process.env.DaChao : $.getdata("DaChao")) || "";
  var k = ($.isNode() ? process.env.OCR_SERVER : $.getdata("OCR_SERVER")) || "https://ddddocr.xzxxn7.live";
  var l = ($.isNode() ? process.env.GHPROXYURL : $.getdata("GHPROXYURL")) || "https://ghfast.top";
  var m = undefined;
  window = {};
  var n = "";
  var o = "";
  var p = "";
  var q = "";
  var r = "94";
  var s = "";
  var t = "10048";
  var u = "";
  var v = "";
  var w = "";
  var x = "";
  var y = "";
  var z = "";
  var A = "";
  var B = "";
  var C = "";
  var D = "";
  var E = "";
  function F() {
    {
      return G.apply(this, arguments);
    }
  }
  function G() {
    {
      G = i(g().mark(function ag() {
        {
          var ai;
          var aj;
          var ak;
          var al;
          var am;
          var an;
          var ao;
          var ap;
          var aq;
          var ar;
          var as;
          var at;
          var au;
          var av;
          var aw;
          var ax;
          var ay;
          var az;
          var aA;
          var aB;
          var aC;
          var aD;
          var aE;
          var aF;
          var aG;
          var aH;
          var aI;
          var aJ;
          var aK;
          var aL;
          var aM;
          var aN;
          var aO;
          var aP;
          var aQ;
          var aR;
          var aS;
          var aT;
          var aU;
          var aV;
          var aW;
          var aX;
          var aY;
          var aZ;
          var b0;
          var b1;
          var b2;
          var b3;
          var b4;
          var b5;
          var b6;
          var b7;
          var b8;
          var b9;
          var ba;
          var bb;
          var bc;
          var bd;
          var be;
          var bf;
          var bg;
          var bh;
          return g().wrap(function (bj) {
            {
              for (;;) {
                switch (bj.prev = bj.next) {
                  case 0:
                    if (j) {
                      {
                        bj.next = 5;
                        break;
                      }
                    }
                    console.log("先去boxjs填写账号密码");
                    bj.next = 4;
                    return ac("先去boxjs填写账号密码");
                  case 4:
                    return bj.abrupt("return");
                  case 5:
                    bj.next = 7;
                    return a8();
                  case 7:
                    m = bj.sent;
                    ai = j.split(" ");
                    aj = c(ai);
                    bj.prev = 10;
                    aj.s();
                  case 12:
                    if ((ak = aj.n()).done) {
                      {
                        bj.next = 272;
                        break;
                      }
                    }
                    al = ak.value;
                    console.log("随机生成UA");
                    am = a7();
                    x = am.ua;
                    y = am.commonUa;
                    z = am.uuid;
                    console.log(x);
                    console.log(y);
                    u = al.split("&")[0];
                    v = al.split("&")[1];
                    w = al.split("&")[2];
                    console.log("用户：".concat(u, "开始任务"));
                    console.log("获取sessionId");
                    bj.next = 28;
                    return N("/api/account/init");
                  case 28:
                    an = bj.sent;
                    q = an.data.session.id;
                    console.log(q);
                    console.log("获取signature_key");
                    bj.next = 34;
                    return H("/web/init?client_id=".concat(t));
                  case 34:
                    ao = bj.sent;
                    n = ao.data.client.signature_key;
                    console.log(n);
                    console.log("获取code");
                    bj.next = 40;
                    return J("/web/oauth/credential_auth");
                  case 40:
                    if (ap = bj.sent, ap.data) {
                      {
                        bj.next = 44;
                        break;
                      }
                    }
                    console.log(ap.message);
                    return bj.abrupt("continue", 270);
                  case 44:
                    aq = ap.data.authorization_code.code;
                    console.log(aq);
                    console.log("登录");
                    bj.next = 49;
                    return N("/api/zbtxz/login", "check_token=&code=".concat(aq, "&token=&type=-1&union_id="));
                  case 49:
                    ar = bj.sent;
                    console.log("登录成功");
                    s = ar.data.session.account_id;
                    q = ar.data.session.id;
                    console.log("————————————");
                    console.log("有缘对对碰");
                    bj.next = 57;
                    return X("/open/xxdtest/dailyMatchForFans/controller.php", "appid=".concat(q, "&openid=").concat(s, "&type=101"));
                  case 57:
                    bj.next = 59;
                    return bj.sent;
                  case 59:
                    as = bj.sent;
                    console.log(as);
                    at = 0;
                  case 62:
                    if (!(at < 5)) {
                      {
                        bj.next = 72;
                        break;
                      }
                    }
                    bj.next = 65;
                    return X("/open/xxdtest/dailyMatchForFans/controller.php", "type=105&score=100");
                  case 65:
                    if (au = bj.sent, console.log(au), 1 == au.status) {
                      {
                        bj.next = 69;
                        break;
                      }
                    }
                    return bj.abrupt("break", 72);
                  case 69:
                    at++;
                    bj.next = 62;
                    break;
                  case 72:
                    if (B) {
                      {
                        bj.next = 80;
                        break;
                      }
                    }
                    console.log("获取对对碰抽奖id");
                    bj.next = 76;
                    return V("/open/xxdtest/dailyMatchForFans/bookflip.php");
                  case 76:
                    av = bj.sent;
                    aw = /\/h5\?mark=raffle@designh5&tid=([a-zA-Z0-9]+)/;
                    ax = av.match(aw);
                    ax && (B = ax[1], console.log("对对碰抽奖id：".concat(B)));
                  case 80:
                    bj.next = 82;
                    return L("/api/user_mumber/account_detail");
                  case 82:
                    if (ay = bj.sent, !B) {
                      {
                        bj.next = 104;
                        break;
                      }
                    }
                    az = Math.round(new Date().getTime() / 1000).toString();
                    bj.next = 87;
                    return R("/memberhy/tm/signature", {
                      accountId: s,
                      signature: CryptoJS.SHA256(" &id&mobile&nick_name&&".concat(az, "&&KO>N<O5&3^L1%23YH0H1#G91*2H")).toString(),
                      mobile: "1",
                      sessionId: q,
                      login: "1",
                      user: {
                        realName: "",
                        image_url: ay.data.rst.image_url,
                        nick_name: ay.data.rst.nick_name,
                        is_face_verify: 0,
                        idcard: "",
                        id: s
                      },
                      timestamp: az,
                      sign: "xsb_hn"
                    });
                  case 87:
                    aA = bj.sent;
                    A = JSON.stringify({
                      id: aA.id,
                      black: 0,
                      btoken: aA.btoken,
                      expire: aA.expire,
                      token: aA.token,
                      source: "xsb_hn",
                      mobile: aA.mobile,
                      mark: aA.mark,
                      mtoken: aA.mtoken,
                      stoken: aA.stoken,
                      nick_name: encodeURI(aA.nick_name),
                      avatar: aA.avatar
                    });
                    bj.next = 91;
                    return P("/lotteryhy/designh5/client/activity/".concat(B));
                  case 91:
                    aB = bj.sent;
                    console.log("拥有".concat(aB.response.remain_counts, "次抽奖"));
                    aC = 0;
                  case 94:
                    if (!(aC < aB.response.remain_counts)) {
                      {
                        bj.next = 102;
                        break;
                      }
                    }
                    bj.next = 97;
                    return R("/lotteryhy/api/client/cj/awd/drw/".concat(B), {});
                  case 97:
                    aD = bj.sent;
                    aD.award_name ? (console.log("抽奖获得：".concat(aD.award_name)), o += "用户：".concat(u, " 抽奖获得：").concat(aD.award_name, "\n")) : (console.log(JSON.stringify(aD)), o += "用户：".concat(u, " 抽奖获得：").concat(aD.error_message, "\n"));
                  case 99:
                    aC++;
                    bj.next = 94;
                    break;
                  case 102:
                    bj.next = 105;
                    break;
                  case 104:
                    console.log("获取对对碰抽奖id失败");
                  case 105:
                    if (console.log("————————————"), console.log("获取id"), E && D) {
                      {
                        bj.next = 117;
                        break;
                      }
                    }
                    bj.next = 110;
                    return L("/api/myPage/list");
                  case 110:
                    aE = bj.sent;
                    aF = /\/h5\?mark=sign@designh5&tid=([a-zA-Z0-9]+)/;
                    aG = JSON.stringify(aE).match(aF);
                    aG && (E = aG[1]);
                    aF = /\/h5\?mark=news-read@designh5&tid=([a-zA-Z0-9]+)/;
                    aG = JSON.stringify(aE).match(aF);
                    aG && (D = aG[1]);
                  case 117:
                    if (!E) {
                      {
                        bj.next = 163;
                        break;
                      }
                    }
                    console.log("签到id：".concat(E));
                    timestamp = Math.round(new Date().getTime() / 1000).toString();
                    bj.next = 122;
                    return R("/memberhy/tm/signature", {
                      accountId: s,
                      signature: CryptoJS.SHA256(" &id&mobile&nick_name&&".concat(timestamp, "&&KO>N<O5&3^L1%23YH0H1#G91*2H")).toString(),
                      mobile: "1",
                      sessionId: q,
                      login: "1",
                      user: {
                        realName: "",
                        image_url: ay.data.rst.image_url,
                        nick_name: ay.data.rst.nick_name,
                        is_face_verify: 0,
                        idcard: "",
                        id: s
                      },
                      timestamp: timestamp,
                      sign: "xsb_hn"
                    });
                  case 122:
                    signature = bj.sent;
                    A = JSON.stringify({
                      id: signature.id,
                      black: 0,
                      btoken: signature.btoken,
                      expire: signature.expire,
                      token: signature.token,
                      source: "xsb_hn",
                      mobile: signature.mobile,
                      mark: signature.mark,
                      mtoken: signature.mtoken,
                      stoken: signature.stoken,
                      nick_name: encodeURI(signature.nick_name),
                      avatar: signature.avatar
                    });
                    console.log("开始签到");
                    aH = new (m.loadJSEncrypt())();
                    aH.setPublicKey("-----BEGIN PUBLIC KEY-----MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEA0G25Cq2HxQQ+gX9H2dzb6sbRtHzD8JbHRmOrAFzaWI2kdzbPuga4ZlqxOAyoAm8ucIAeKD4joUn+dN1wYC03qCgloNU21KUJUls/Htp2RwxpmoncSIAOZvSQQ6Kl3vLPYlG6GetwYYN83sG85K+3w4D89hBGHuYqKQyQsUvntxi5UVoNfo674QsCvqxHxZAuEXKoEagzUoSu8gWrDTuhRK4aQcDpnCslwKycaO63UBvfTlBG0Jc7sqzXxapTArbqaA58XCM8dRIZdp7DR/V7qucn/PwIOGJrOu09/cjndwIpeki8HXa9rvgWwiwZCy289vgRoxzIcLrQJ2oC1MK2RwIDAQAB-----END PUBLIC KEY-----");
                    aI = aH.encrypt(JSON.stringify({
                      activity_id: E,
                      timestamp: Math.round(new Date().getTime() / 1000).toString()
                    }));
                    bj.next = 130;
                    return R("/signhy/client/actSign/actSign", {
                      params: aI
                    });
                  case 130:
                    aJ = bj.sent;
                    0 == aJ.error_code ? console.log("签到成功") : console.log(aJ.error_message);
                    bj.next = 134;
                    return P("/signhy/client/actSign/getRelationCjList?activity_id=".concat(E));
                  case 134:
                    aK = bj.sent;
                    aL = c(aK.response);
                    bj.prev = 136;
                    aL.s();
                  case 138:
                    if ((aM = aL.n()).done) {
                      {
                        bj.next = 153;
                        break;
                      }
                    }
                    aN = aM.value;
                    console.log("活动：".concat(aN.title));
                    console.log("拥有".concat(aN.draw_num, "次抽奖"));
                    aO = 0;
                  case 143:
                    if (!(aO < aN.draw_num)) {
                      {
                        bj.next = 151;
                        break;
                      }
                    }
                    bj.next = 146;
                    return R("/lotteryhy/api/client/cj/awd/drw/".concat(aN.hashid), {});
                  case 146:
                    aP = bj.sent;
                    aP.award_name ? (console.log("抽奖获得：".concat(aP.award_name)), o += "用户：".concat(u, " 抽奖获得：").concat(aP.award_name, "\n")) : (console.log(JSON.stringify(aP)), o += "用户：".concat(u, " 抽奖获得：").concat(aP.error_message, "\n"));
                  case 148:
                    aO++;
                    bj.next = 143;
                    break;
                  case 151:
                    bj.next = 138;
                    break;
                  case 153:
                    bj.next = 158;
                    break;
                  case 155:
                    bj.prev = 155;
                    bj.t0 = bj.catch(136);
                    aL.e(bj.t0);
                  case 158:
                    bj.prev = 158;
                    aL.f();
                    return bj.finish(158);
                  case 161:
                    bj.next = 164;
                    break;
                  case 163:
                    console.log("获取签到id失败");
                  case 164:
                    if (!D) {
                      {
                        bj.next = 238;
                        break;
                      }
                    }
                    console.log("————————————");
                    console.log("阅读抽奖");
                    console.log("阅读id：".concat(D));
                    console.log("滑块验证");
                    bj.next = 171;
                    return P("/newshy/api/client/news/getTnCode?t=".concat(Math.random()));
                  case 171:
                    aQ = bj.sent;
                    bj.next = 174;
                    return a1("".concat(k, "/crop"), {
                      image: aQ.img,
                      y_coordinate: 150
                    });
                  case 174:
                    if (aR = bj.sent, aR) {
                      {
                        bj.next = 180;
                        break;
                      }
                    }
                    console.log("ddddocr服务异常");
                    bj.next = 179;
                    return ac("ddddocr服务异常");
                  case 179:
                    return bj.abrupt("continue", 270);
                  case 180:
                    var bl = {
                      slidingImage: aR.slidingImage,
                      backImage: aR.backImage
                    };
                    bj.next = 182;
                    return a1("".concat(k, "/slideComparison"), bl);
                  case 182:
                    if (aS = bj.sent, aS) {
                      bj.next = 188;
                      break;
                    }
                    console.log("ddddocr服务异常");
                    bj.next = 187;
                    return ac("ddddocr服务异常");
                  case 187:
                    return bj.abrupt("continue", 270);
                  case 188:
                    console.log(aS);
                    aT = aQ.request_id;
                    aU = aS.result;
                    bj.next = 193;
                    return P("/newshy/api/client/news/list/".concat(D));
                  case 193:
                    aV = bj.sent;
                    aW = c(aV.data[0].information_content_data[0].data);
                    bj.prev = 195;
                    aW.s();
                  case 197:
                    if ((aX = aW.n()).done) {
                      {
                        bj.next = 213;
                        break;
                      }
                    }
                    for (aY = aX.value, console.log("文章：".concat(aY.title)), aZ = aY.link.split("?")[1], b0 = {}, b1 = aZ.split("&"), b2 = 0, b3 = b1.length; b2 < b3; b2++) {
                      b4 = b1[b2].split("=");
                      b0[b4[0]] = b4[1];
                    }
                    b5 = new (m.loadJSEncrypt())();
                    b5.setPublicKey("-----BEGIN PUBLIC KEY-----MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEA0G25Cq2HxQQ+gX9H2dzb6sbRtHzD8JbHRmOrAFzaWI2kdzbPuga4ZlqxOAyoAm8ucIAeKD4joUn+dN1wYC03qCgloNU21KUJUls/Htp2RwxpmoncSIAOZvSQQ6Kl3vLPYlG6GetwYYN83sG85K+3w4D89hBGHuYqKQyQsUvntxi5UVoNfo674QsCvqxHxZAuEXKoEagzUoSu8gWrDTuhRK4aQcDpnCslwKycaO63UBvfTlBG0Jc7sqzXxapTArbqaA58XCM8dRIZdp7DR/V7qucn/PwIOGJrOu09/cjndwIpeki8HXa9rvgWwiwZCy289vgRoxzIcLrQJ2oC1MK2RwIDAQAB-----END PUBLIC KEY-----");
                    b6 = b5.encrypt(JSON.stringify({
                      news_id: D,
                      item_id: aY.item_id,
                      request_id: aT,
                      timestamp: Math.round(new Date().getTime() / 1000).toString(),
                      tn_x: aU
                    }));
                    bj.next = 209;
                    return R("/newshy/api/client/news/readArticle", {
                      params: b6
                    });
                  case 209:
                    b7 = bj.sent;
                    console.log("阅读：".concat(null == b7 ? undefined : b7.success));
                  case 211:
                    bj.next = 197;
                    break;
                  case 213:
                    bj.next = 218;
                    break;
                  case 215:
                    bj.prev = 215;
                    bj.t1 = bj.catch(195);
                    aW.e(bj.t1);
                  case 218:
                    bj.prev = 218;
                    aW.f();
                    return bj.finish(218);
                  case 221:
                    C = aV.data[0].draw.activity_id;
                    console.log("抽奖id：".concat(C));
                    bj.next = 225;
                    return P("/lotteryhy/designh5/client/activity/".concat(C));
                  case 225:
                    b8 = bj.sent;
                    console.log("拥有".concat(b8.response.remain_counts, "次抽奖"));
                    b9 = 0;
                  case 228:
                    if (!(b9 < b8.response.remain_counts)) {
                      {
                        bj.next = 236;
                        break;
                      }
                    }
                    bj.next = 231;
                    return R("/lotteryhy/api/client/cj/awd/drw/".concat(C), {});
                  case 231:
                    ba = bj.sent;
                    ba.award_name ? (console.log("抽奖获得：".concat(ba.award_name)), o += "用户：".concat(u, " 抽奖获得：").concat(ba.award_name, "\n")) : (console.log(JSON.stringify(ba)), o += "用户：".concat(u, " 抽奖获得：").concat(ba.error_message, "\n"));
                  case 233:
                    b9++;
                    bj.next = 228;
                    break;
                  case 236:
                    bj.next = 239;
                    break;
                  case 238:
                    console.log("获取id失败");
                  case 239:
                    bj.next = 241;
                    return Z("/lotteryhy/api/client/cj/member/prize/info?prize_type=3&page=1&count=20");
                  case 241:
                    bb = bj.sent;
                    bc = c(bb.data);
                    bj.prev = 243;
                    bc.s();
                  case 245:
                    if ((bd = bc.n()).done) {
                      {
                        bj.next = 262;
                        break;
                      }
                    }
                    if (be = bd.value, 2 == be.status) {
                      {
                        bj.next = 260;
                        break;
                      }
                    }
                    if (bf = JSON.parse(be.prize_info).code, console.log("奖品：".concat(be.prize_content, " code：").concat(bf)), !w) {
                      {
                        bj.next = 259;
                        break;
                      }
                    }
                    var bm = {
                      code: bf
                    };
                    bg = "";
                    bj.next = 254;
                    return T("/lotteryhy/api/client/cj/send/pak", bm);
                  case 254:
                    bh = bj.sent;
                    bh.success ? (console.log("领取成功"), bg = "领取成功") : (console.log(bh.error_message), bg = bh.error_message);
                    p += "用户：".concat(u, " 奖品：").concat(be.prize_content, " 领取结果：").concat(bg, "\n");
                    bj.next = 260;
                    break;
                  case 259:
                    p += "用户：".concat(u, " 微信领取链接：https://m.aihoge.com/lottery/rotor/drawRedPacket?CHECK_CODE=").concat(bf, "\n");
                  case 260:
                    bj.next = 245;
                    break;
                  case 262:
                    bj.next = 267;
                    break;
                  case 264:
                    bj.prev = 264;
                    bj.t2 = bj.catch(243);
                    bc.e(bj.t2);
                  case 267:
                    bj.prev = 267;
                    bc.f();
                    return bj.finish(267);
                  case 270:
                    bj.next = 12;
                    break;
                  case 272:
                    bj.next = 277;
                    break;
                  case 274:
                    bj.prev = 274;
                    bj.t3 = bj.catch(10);
                    aj.e(bj.t3);
                  case 277:
                    bj.prev = 277;
                    aj.f();
                    return bj.finish(277);
                  case 280:
                    if (!o) {
                      {
                        bj.next = 283;
                        break;
                      }
                    }
                    bj.next = 283;
                    return ac(o);
                  case 283:
                    if (!p) {
                      {
                        bj.next = 286;
                        break;
                      }
                    }
                    bj.next = 286;
                    return ac(p);
                  case 286:
                  case "end":
                    return bj.stop();
                }
              }
            }
          }, ag, null, [[10, 274, 277, 280], [136, 155, 158, 161], [195, 215, 218, 221], [243, 264, 267, 270]]);
        }
      }));
      return G.apply(this, arguments);
    }
  }
  function H(ae) {
    {
      return I.apply(this, arguments);
    }
  }
  function I() {
    {
      I = i(g().mark(function ag(ah) {
        return g().wrap(function (aj) {
          {
            for (;;) {
              switch (aj.prev = aj.next) {
                case 0:
                  return aj.abrupt("return", new Promise(function (ak) {
                    {
                      var am = {
                        url: "https://passport.tmuyun.com".concat(ah),
                        headers: {
                          Connection: "Keep-Alive",
                          "Cache-Control": "no-cache",
                          "X-REQUEST-ID": a5(),
                          "Accept-Encoding": "gzip",
                          "user-agent": x
                        }
                      };
                      $.get(am, function () {
                        {
                          var ao = i(g().mark(function ap(aq, ar, as) {
                            return g().wrap(function (au) {
                              {
                                for (;;) {
                                  switch (au.prev = au.next) {
                                    case 0:
                                      try {
                                        {
                                          aq ? (console.log("".concat(JSON.stringify(aq))), console.log("".concat($.name, " API请求失败，请检查网路重试"))) : ak(JSON.parse(as));
                                        }
                                      } catch (ax) {
                                        {
                                          $.logErr(ax, ar);
                                        }
                                      } finally {
                                        {
                                          ak();
                                        }
                                      }
                                    case 1:
                                    case "end":
                                      return au.stop();
                                  }
                                }
                              }
                            }, ap);
                          }));
                          return function (aq, ar, as) {
                            return ao.apply(this, arguments);
                          };
                        }
                      }());
                    }
                  }));
                case 1:
                case "end":
                  return aj.stop();
              }
            }
          }
        }, ag);
      }));
      return I.apply(this, arguments);
    }
  }
  function J(ae) {
    return K.apply(this, arguments);
  }
  function K() {
    K = i(g().mark(function af(ag) {
      var ai;
      return g().wrap(function (aj) {
        for (;;) {
          switch (aj.prev = aj.next) {
            case 0:
              ai = a3();
              return aj.abrupt("return", new Promise(function (al) {
                var an = {
                  url: "https://passport.tmuyun.com".concat(ag),
                  headers: {
                    Connection: "Keep-Alive",
                    "X-REQUEST-ID": ai.uuid,
                    "X-SIGNATURE": ai.signature,
                    "Cache-Control": "no-cache",
                    "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
                    "Accept-Encoding": "gzip",
                    "user-agent": x
                  },
                  body: ai.body
                };
                $.post(an, function () {
                  var ap = i(g().mark(function aq(ar, as, at) {
                    return g().wrap(function (au) {
                      for (;;) {
                        switch (au.prev = au.next) {
                          case 0:
                            try {
                              ar ? (console.log("".concat(JSON.stringify(ar))), console.log("".concat($.name, " API请求失败，请检查网路重试"))) : al(JSON.parse(at));
                            } catch (aw) {
                              $.logErr(aw, as);
                            } finally {
                              al();
                            }
                          case 1:
                          case "end":
                            return au.stop();
                        }
                      }
                    }, aq);
                  }));
                  return function (ar, as, at) {
                    return ap.apply(this, arguments);
                  };
                }());
              }));
            case 2:
            case "end":
              return aj.stop();
          }
        }
      }, af);
    }));
    return K.apply(this, arguments);
  }
  function L(ae) {
    return M.apply(this, arguments);
  }
  function M() {
    M = i(g().mark(function ae(af) {
      var ah;
      return g().wrap(function (ai) {
        for (;;) {
          switch (ai.prev = ai.next) {
            case 0:
              ah = a4(af);
              return ai.abrupt("return", new Promise(function (ak) {
                var am = {
                  Connection: "Keep-Alive",
                  "X-TIMESTAMP": ah.time,
                  "X-SESSION-ID": q,
                  "X-REQUEST-ID": ah.uuid,
                  "X-SIGNATURE": ah.signature,
                  "X-TENANT-ID": r,
                  "X-ACCOUNT-ID": s,
                  "Cache-Control": "no-cache",
                  "Accept-Encoding": "gzip",
                  "user-agent": y
                };
                var an = {
                  url: "https://vapp.tmuyun.com".concat(af),
                  headers: am
                };
                $.get(an, function () {
                  var ap = i(g().mark(function aq(ar, as, at) {
                    return g().wrap(function (au) {
                      for (;;) {
                        switch (au.prev = au.next) {
                          case 0:
                            if (au.prev = 0, !ar) {
                              au.next = 6;
                              break;
                            }
                            console.log("".concat(JSON.stringify(ar)));
                            console.log("".concat($.name, " API请求失败，请检查网路重试"));
                            au.next = 9;
                            break;
                          case 6:
                            au.next = 8;
                            return $.wait(2000);
                          case 8:
                            ak(JSON.parse(at));
                          case 9:
                            au.next = 14;
                            break;
                          case 11:
                            au.prev = 11;
                            au.t0 = au.catch(0);
                            $.logErr(au.t0, as);
                          case 14:
                            au.prev = 14;
                            ak();
                            return au.finish(14);
                          case 17:
                          case "end":
                            return au.stop();
                        }
                      }
                    }, aq, null, [[0, 11, 14, 17]]);
                  }));
                  return function (ar, as, at) {
                    return ap.apply(this, arguments);
                  };
                }());
              }));
            case 2:
            case "end":
              return ai.stop();
          }
        }
      }, ae);
    }));
    return M.apply(this, arguments);
  }
  function N(ae, af) {
    return O.apply(this, arguments);
  }
  function O() {
    O = i(g().mark(function ag(ah, ai) {
      var ak;
      return g().wrap(function (al) {
        for (;;) {
          switch (al.prev = al.next) {
            case 0:
              ak = a4(ah);
              return al.abrupt("return", new Promise(function (am) {
                var ao = {
                  url: "https://vapp.tmuyun.com".concat(ah),
                  headers: {
                    Connection: "Keep-Alive",
                    "X-TIMESTAMP": ak.time,
                    "X-SESSION-ID": q,
                    "X-REQUEST-ID": ak.uuid,
                    "X-SIGNATURE": ak.signature,
                    "X-TENANT-ID": r,
                    "X-ACCOUNT-ID": s,
                    "Cache-Control": "no-cache",
                    "Accept-Encoding": "gzip",
                    "user-agent": y
                  },
                  body: ai
                };
                $.post(ao, function () {
                  var aq = i(g().mark(function ar(as, at, au) {
                    return g().wrap(function (av) {
                      for (;;) {
                        switch (av.prev = av.next) {
                          case 0:
                            if (av.prev = 0, !as) {
                              av.next = 6;
                              break;
                            }
                            console.log("".concat(JSON.stringify(as)));
                            console.log("".concat($.name, " API请求失败，请检查网路重试"));
                            av.next = 9;
                            break;
                          case 6:
                            av.next = 8;
                            return $.wait(2000);
                          case 8:
                            am(JSON.parse(au));
                          case 9:
                            av.next = 14;
                            break;
                          case 11:
                            av.prev = 11;
                            av.t0 = av.catch(0);
                            $.logErr(av.t0, at);
                          case 14:
                            av.prev = 14;
                            am();
                            return av.finish(14);
                          case 17:
                          case "end":
                            return av.stop();
                        }
                      }
                    }, ar, null, [[0, 11, 14, 17]]);
                  }));
                  return function (as, at, au) {
                    return aq.apply(this, arguments);
                  };
                }());
              }));
            case 2:
            case "end":
              return al.stop();
          }
        }
      }, ag);
    }));
    return O.apply(this, arguments);
  }
  function P(ae) {
    return Q.apply(this, arguments);
  }
  function Q() {
    Q = i(g().mark(function ae(af) {
      return g().wrap(function (ah) {
        for (;;) {
          switch (ah.prev = ah.next) {
            case 0:
              return ah.abrupt("return", new Promise(function (aj) {
                var ak = {
                  url: "https://m.aihoge.com/api".concat(af),
                  headers: {
                    Connection: "keep-alive",
                    "X-DEVICE-SIGN": "xsb_hn",
                    "X-CLIENT-VERSION": "1314",
                    accept: "application/json, text/plain, */*",
                    "user-agent": "Mozilla/5.0 (Linux; Android 11; 21091116AC Build/RP1A.200720.011; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/94.0.4606.85 Mobile Safari/537.36;xsb_hn;xsb_hn;14.1.6;native_app;6.11.0",
                    "HTTP-X-H5-VERSION": "1",
                    member: A,
                    Limit: D,
                    sessionId: q,
                    "X-DEVICE-ID": "000",
                    accountId: s,
                    "x-requested-with": "com.hoge.android.app.dachao",
                    "sec-fetch-site": "same-origin",
                    "sec-fetch-mode": "cors",
                    "sec-fetch-dest": "empty",
                    Referer: "https://m.aihoge.com/h5?mark=news-read@designh5&tid=".concat(D, "&path=index&isNeedLogin=true"),
                    "accept-encoding": "gzip, deflate",
                    "accept-language": "zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7"
                  }
                };
                $.get(ak, function () {
                  var am = i(g().mark(function an(ao, ap, aq) {
                    return g().wrap(function (ar) {
                      for (;;) {
                        switch (ar.prev = ar.next) {
                          case 0:
                            if (ar.prev = 0, !ao) {
                              ar.next = 6;
                              break;
                            }
                            console.log("".concat(JSON.stringify(ao)));
                            console.log("".concat($.name, " API请求失败，请检查网路重试"));
                            ar.next = 9;
                            break;
                          case 6:
                            ar.next = 8;
                            return $.wait(2000);
                          case 8:
                            aj(JSON.parse(aq));
                          case 9:
                            ar.next = 14;
                            break;
                          case 11:
                            ar.prev = 11;
                            ar.t0 = ar.catch(0);
                            $.logErr(ar.t0, ap);
                          case 14:
                            ar.prev = 14;
                            aj();
                            return ar.finish(14);
                          case 17:
                          case "end":
                            return ar.stop();
                        }
                      }
                    }, an, null, [[0, 11, 14, 17]]);
                  }));
                  return function (ao, ap, aq) {
                    return am.apply(this, arguments);
                  };
                }());
              }));
            case 1:
            case "end":
              return ah.stop();
          }
        }
      }, ae);
    }));
    return Q.apply(this, arguments);
  }
  function R(ae, af) {
    return S.apply(this, arguments);
  }
  function S() {
    S = i(g().mark(function af(ag, ah) {
      return g().wrap(function (ai) {
        for (;;) {
          switch (ai.prev = ai.next) {
            case 0:
              return ai.abrupt("return", new Promise(function (ak) {
                var am = {
                  url: "https://m.aihoge.com/api".concat(ag),
                  headers: {
                    Connection: "keep-alive",
                    "X-DEVICE-SIGN": "xsb_hn",
                    "X-CLIENT-VERSION": "1314",
                    "Content-Type": "application/json;charset=UTF-8",
                    accept: "application/json, text/plain, */*",
                    "user-agent": "Mozilla/5.0 (Linux; Android 11; 21091116AC Build/RP1A.200720.011; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/94.0.4606.85 Mobile Safari/537.36;xsb_hn;xsb_hn;14.1.6;native_app;6.11.0",
                    "HTTP-X-H5-VERSION": "1",
                    member: A,
                    Limit: D,
                    sessionId: q,
                    "X-DEVICE-ID": "000",
                    accountId: s,
                    "x-requested-with": "com.hoge.android.app.dachao",
                    "sec-fetch-site": "same-origin",
                    "sec-fetch-mode": "cors",
                    "sec-fetch-dest": "empty",
                    Referer: "https://m.aihoge.com/h5?mark=news-read@designh5&tid=".concat(D, "&path=index&isNeedLogin=true"),
                    "accept-encoding": "gzip, deflate",
                    "accept-language": "zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7"
                  },
                  body: JSON.stringify(ah)
                };
                $.post(am, function () {
                  var ao = i(g().mark(function ap(aq, ar, as) {
                    return g().wrap(function (at) {
                      for (;;) {
                        switch (at.prev = at.next) {
                          case 0:
                            if (at.prev = 0, !aq) {
                              at.next = 6;
                              break;
                            }
                            console.log("".concat(JSON.stringify(aq)));
                            console.log("".concat($.name, " API请求失败，请检查网路重试"));
                            at.next = 9;
                            break;
                          case 6:
                            at.next = 8;
                            return $.wait(2000);
                          case 8:
                            ak(JSON.parse(as));
                          case 9:
                            at.next = 14;
                            break;
                          case 11:
                            at.prev = 11;
                            at.t0 = at.catch(0);
                            $.logErr(at.t0, ar);
                          case 14:
                            at.prev = 14;
                            ak();
                            return at.finish(14);
                          case 17:
                          case "end":
                            return at.stop();
                        }
                      }
                    }, ap, null, [[0, 11, 14, 17]]);
                  }));
                  return function (aq, ar, as) {
                    return ao.apply(this, arguments);
                  };
                }());
              }));
            case 1:
            case "end":
              return ai.stop();
          }
        }
      }, af);
    }));
    return S.apply(this, arguments);
  }
  function T(ae, af) {
    return U.apply(this, arguments);
  }
  function U() {
    U = i(g().mark(function af(ag, ah) {
      return g().wrap(function (ai) {
        for (;;) {
          switch (ai.prev = ai.next) {
            case 0:
              return ai.abrupt("return", new Promise(function (ak) {
                var am = {
                  url: "https://m.aihoge.com/api".concat(ag),
                  headers: {
                    Connection: "keep-alive",
                    "X-DEVICE-SIGN": "wechat",
                    "X-CLIENT-VERSION": "1314",
                    "Content-Type": "application/json;charset=UTF-8",
                    accept: "application/json, text/plain, */*",
                    "user-agent": "Mozilla/5.0 (Linux; Android 11; 21091116AC Build/RP1A.200720.011; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/94.0.4606.85 Mobile Safari/537.36;xsb_hn;xsb_hn;14.1.6;native_app;6.11.0",
                    "HTTP-X-H5-VERSION": "1",
                    member: w,
                    Limit: "default",
                    "X-DEVICE-ID": "000",
                    "sec-fetch-site": "same-origin",
                    "sec-fetch-mode": "cors",
                    "sec-fetch-dest": "empty",
                    "accept-encoding": "gzip, deflate",
                    "accept-language": "zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7"
                  },
                  body: JSON.stringify(ah)
                };
                $.post(am, function () {
                  var ao = i(g().mark(function ap(aq, ar, as) {
                    return g().wrap(function (at) {
                      for (;;) {
                        switch (at.prev = at.next) {
                          case 0:
                            if (at.prev = 0, !aq) {
                              at.next = 6;
                              break;
                            }
                            console.log("".concat(JSON.stringify(aq)));
                            console.log("".concat($.name, " API请求失败，请检查网路重试"));
                            at.next = 9;
                            break;
                          case 6:
                            at.next = 8;
                            return $.wait(2000);
                          case 8:
                            ak(JSON.parse(as));
                          case 9:
                            at.next = 14;
                            break;
                          case 11:
                            at.prev = 11;
                            at.t0 = at.catch(0);
                            $.logErr(at.t0, ar);
                          case 14:
                            at.prev = 14;
                            ak();
                            return at.finish(14);
                          case 17:
                          case "end":
                            return at.stop();
                        }
                      }
                    }, ap, null, [[0, 11, 14, 17]]);
                  }));
                  return function (aq, ar, as) {
                    return ao.apply(this, arguments);
                  };
                }());
              }));
            case 1:
            case "end":
              return ai.stop();
          }
        }
      }, af);
    }));
    return U.apply(this, arguments);
  }
  function V(ae) {
    return W.apply(this, arguments);
  }
  function W() {
    W = i(g().mark(function af(ag) {
      return g().wrap(function (ai) {
        for (;;) {
          switch (ai.prev = ai.next) {
            case 0:
              return ai.abrupt("return", new Promise(function (ak) {
                var am = {
                  url: "https://active.hndachao.cn".concat(ag),
                  headers: {
                    "content-type": "application/x-www-form-urlencoded; charset=UTF-8",
                    accept: "application/json, text/javascript, */*; q=0.01",
                    "x-requested-with": "XMLHttpRequest",
                    "user-agent": "Mozilla/5.0 (Linux; Android 11; 21091116AC Build/RP1A.200720.011; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/94.0.4606.85 Mobile Safari/537.36;xsb_hn;xsb_hn;14.1.6;native_app;6.11.0",
                    origin: "https://active.hndachao.cn",
                    "sec-fetch-site": "same-origin",
                    "sec-fetch-mode": "cors",
                    "sec-fetch-dest": "empty",
                    referer: "https://active.hndachao.cn/open/xxdtest/dailyMatchForFans/bookflip.php",
                    "accept-encoding": "gzip, deflate",
                    "accept-language": "zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7",
                    cookie: "dachaogo={\"openid\":\"".concat(s, "\",\"platform\":3}")
                  }
                };
                $.get(am, function () {
                  var ao = i(g().mark(function ap(aq, ar, as) {
                    return g().wrap(function (at) {
                      for (;;) {
                        switch (at.prev = at.next) {
                          case 0:
                            if (at.prev = 0, !aq) {
                              at.next = 6;
                              break;
                            }
                            console.log("".concat(JSON.stringify(aq)));
                            console.log("".concat($.name, " API请求失败，请检查网路重试"));
                            at.next = 9;
                            break;
                          case 6:
                            at.next = 8;
                            return $.wait(2000);
                          case 8:
                            ak(as);
                          case 9:
                            at.next = 14;
                            break;
                          case 11:
                            at.prev = 11;
                            at.t0 = at.catch(0);
                            $.logErr(at.t0, ar);
                          case 14:
                            at.prev = 14;
                            ak();
                            return at.finish(14);
                          case 17:
                          case "end":
                            return at.stop();
                        }
                      }
                    }, ap, null, [[0, 11, 14, 17]]);
                  }));
                  return function (aq, ar, as) {
                    return ao.apply(this, arguments);
                  };
                }());
              }));
            case 1:
            case "end":
              return ai.stop();
          }
        }
      }, af);
    }));
    return W.apply(this, arguments);
  }
  function X(ae, af) {
    return Y.apply(this, arguments);
  }
  function Y() {
    Y = i(g().mark(function af(ag, ah) {
      return g().wrap(function (ai) {
        for (;;) {
          switch (ai.prev = ai.next) {
            case 0:
              return ai.abrupt("return", new Promise(function (ak) {
                var al = {
                  url: "https://active.hndachao.cn".concat(ag),
                  headers: {
                    "content-type": "application/x-www-form-urlencoded; charset=UTF-8",
                    accept: "application/json, text/javascript, */*; q=0.01",
                    "x-requested-with": "XMLHttpRequest",
                    "user-agent": "Mozilla/5.0 (Linux; Android 11; 21091116AC Build/RP1A.200720.011; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/94.0.4606.85 Mobile Safari/537.36;xsb_hn;xsb_hn;14.1.6;native_app;6.11.0",
                    origin: "https://active.hndachao.cn",
                    "sec-fetch-site": "same-origin",
                    "sec-fetch-mode": "cors",
                    "sec-fetch-dest": "empty",
                    referer: "https://active.hndachao.cn/open/xxdtest/dailyMatchForFans/bookflip.php",
                    "accept-encoding": "gzip, deflate",
                    "accept-language": "zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7",
                    cookie: "dachaogo={\"openid\":\"".concat(s, "\",\"platform\":3}")
                  },
                  body: ah
                };
                $.post(al, function () {
                  var an = i(g().mark(function ao(ap, aq, ar) {
                    return g().wrap(function (as) {
                      for (;;) {
                        switch (as.prev = as.next) {
                          case 0:
                            if (as.prev = 0, !ap) {
                              as.next = 6;
                              break;
                            }
                            console.log("".concat(JSON.stringify(ap)));
                            console.log("".concat($.name, " API请求失败，请检查网路重试"));
                            as.next = 9;
                            break;
                          case 6:
                            as.next = 8;
                            return $.wait(2000);
                          case 8:
                            ak(JSON.parse(ar));
                          case 9:
                            as.next = 14;
                            break;
                          case 11:
                            as.prev = 11;
                            as.t0 = as.catch(0);
                            $.logErr(as.t0, aq);
                          case 14:
                            as.prev = 14;
                            ak();
                            return as.finish(14);
                          case 17:
                          case "end":
                            return as.stop();
                        }
                      }
                    }, ao, null, [[0, 11, 14, 17]]);
                  }));
                  return function (ap, aq, ar) {
                    return an.apply(this, arguments);
                  };
                }());
              }));
            case 1:
            case "end":
              return ai.stop();
          }
        }
      }, af);
    }));
    return Y.apply(this, arguments);
  }
  function Z(ae) {
    return a0.apply(this, arguments);
  }
  function a0() {
    a0 = i(g().mark(function af(ag) {
      return g().wrap(function (ai) {
        for (;;) {
          switch (ai.prev = ai.next) {
            case 0:
              return ai.abrupt("return", new Promise(function (ak) {
                var am = {
                  url: "https://axh5.aihoge.com/api".concat(ag),
                  headers: {
                    Connection: "keep-alive",
                    "X-DEVICE-SIGN": "xsb_hn",
                    "X-CLIENT-VERSION": "1314",
                    accept: "application/json, text/plain, */*",
                    "user-agent": "Mozilla/5.0 (Linux; Android 11; 21091116AC Build/RP1A.200720.011; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/94.0.4606.85 Mobile Safari/537.36;xsb_hn;xsb_hn;14.1.6;native_app;6.11.0",
                    "HTTP-X-H5-VERSION": "1",
                    member: A,
                    Limit: "default",
                    sessionId: q,
                    "X-DEVICE-ID": "000",
                    accountId: s,
                    "x-requested-with": "com.hoge.android.app.dachao",
                    "sec-fetch-site": "same-origin",
                    "sec-fetch-mode": "cors",
                    "sec-fetch-dest": "empty",
                    Referer: "https://axh5.aihoge.com/winningList?refresh_times=1641284795642",
                    "accept-encoding": "gzip, deflate",
                    "accept-language": "zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7"
                  }
                };
                $.get(am, function () {
                  var ao = i(g().mark(function ap(aq, ar, as) {
                    return g().wrap(function (at) {
                      for (;;) {
                        switch (at.prev = at.next) {
                          case 0:
                            if (at.prev = 0, !aq) {
                              at.next = 6;
                              break;
                            }
                            console.log("".concat(JSON.stringify(aq)));
                            console.log("".concat($.name, " API请求失败，请检查网路重试"));
                            at.next = 9;
                            break;
                          case 6:
                            at.next = 8;
                            return $.wait(2000);
                          case 8:
                            ak(JSON.parse(as));
                          case 9:
                            at.next = 14;
                            break;
                          case 11:
                            at.prev = 11;
                            at.t0 = at.catch(0);
                            $.logErr(at.t0, ar);
                          case 14:
                            at.prev = 14;
                            ak();
                            return at.finish(14);
                          case 17:
                          case "end":
                            return at.stop();
                        }
                      }
                    }, ap, null, [[0, 11, 14, 17]]);
                  }));
                  return function (aq, ar, as) {
                    return ao.apply(this, arguments);
                  };
                }());
              }));
            case 1:
            case "end":
              return ai.stop();
          }
        }
      }, af);
    }));
    return a0.apply(this, arguments);
  }
  function a1(ae, af) {
    return a2.apply(this, arguments);
  }
  function a2() {
    a2 = i(g().mark(function af(ag, ah) {
      return g().wrap(function (ai) {
        for (;;) {
          switch (ai.prev = ai.next) {
            case 0:
              return ai.abrupt("return", new Promise(function (ak) {
                var al = {
                  "Content-Type": "application/json"
                };
                var am = {
                  url: ag,
                  headers: al,
                  body: JSON.stringify(ah)
                };
                $.post(am, function (an, ao, ap) {
                  try {
                    an ? (console.log("".concat(JSON.stringify(an))), console.log("".concat($.name, " API请求失败，请检查网路重试"))) : ak(JSON.parse(ap));
                  } catch (aq) {
                    $.logErr(aq, ao);
                  } finally {
                    ak();
                  }
                });
              }));
            case 1:
            case "end":
              return ai.stop();
          }
        }
      }, af);
    }));
    return a2.apply(this, arguments);
  }
  function a3() {
    var am = new (m.loadJSEncrypt())();
    am.setPublicKey("MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQD6XO7e9YeAOs+cFqwa7ETJ+WXizPqQeXv68i5vqw9pFREsrqiBTRcg7wB0RIp3rJkDpaeVJLsZqYm5TW7FWx/iOiXFc+zCPvaKZric2dXCw27EvlH5rq+zwIPDAJHGAfnn1nmQH7wR3PCatEIb8pz5GFlTHMlluw4ZYmnOwg+thwIDAQAB");
    v = am.encrypt(v);
    var ah = a5();
    var ai = "client_id=".concat(t, "&password=").concat(v, "&phone_number=").concat(u);
    var aj = "post%%/web/oauth/credential_auth?".concat(ai, "%%").concat(ah, "%%");
    ai = "client_id=".concat(t, "&password=").concat(encodeURIComponent(v), "&phone_number=").concat(u);
    CryptoJS = m.createCryptoJS();
    var ak = CryptoJS.HmacSHA256(aj, n);
    var al = CryptoJS.enc.Hex.stringify(ak);
    var ag = {
      uuid: ah,
      signature: al,
      body: ai
    };
    return ag;
  }
  function a4(ae) {
    var af = a5();
    var ag = Date.now();
    ae.indexOf("?") > 0 && (ae = ae.substring(0, ae.indexOf("?")));
    CryptoJS = m.createCryptoJS();
    var ah = CryptoJS.SHA256("".concat(ae, "&&").concat(q, "&&").concat(af, "&&").concat(ag, "&&FR*r!isE5W&&").concat(r)).toString();
    var ai = {
      uuid: af,
      time: ag,
      signature: ah
    };
    return ai;
  }
  function a5() {
    return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (ae) {
      var af = 16 * Math.random() | 0;
      var ag = "x" === ae ? af : 3 & af | 8;
      return ag.toString(16);
    });
  }
  function a6(ae) {
    return ae[Math.floor(Math.random() * ae.length)];
  }
  function a7() {
    var ae = "14.1.6";
    var af = a5();
    var ag = a6(["M1903F2A", "M2001J2E", "M2001J2C", "M2001J1E", "M2001J1C", "M2002J9E", "M2011K2C", "M2102K1C", "M2101K9C", "2107119DC", "2201123C", "2112123AC", "2201122C", "2211133C", "2210132C", "2304FPN6DC", "23127PN0CC", "24031PN0DC", "23090RA98C", "2312DRA50C", "2312CRAD3C", "2312DRAABC", "22101316UCP", "22101316C"]);
    var ah = "Xiaomi " + ag;
    var ai = "Android";
    var aj = "".concat(ai.toUpperCase(), ";").concat("11", ";").concat(t, ";").concat(ae, ";1.0;null;").concat(ag);
    var ak = "".concat(ae, ";").concat(af, ";").concat(ah, ";").concat(ai, ";").concat("11", ";").concat("6.11.0");
    var al = {
      ua: aj,
      commonUa: ak,
      uuid: af
    };
    return al;
  }
  function a8() {
    return a9.apply(this, arguments);
  }
  function a9() {
    a9 = i(g().mark(function af() {
      var ah;
      return g().wrap(function ai(aj) {
        for (;;) {
          switch (aj.prev = aj.next) {
            case 0:
              if (ah = $.getdata("Utils_Code") || "", !ah || !Object.keys(ah).length) {
                aj.next = 5;
                break;
              }
              console.log("✅ ".concat($.name, ": 缓存中存在Utils代码, 跳过下载"));
              eval(ah);
              return aj.abrupt("return", creatUtils());
            case 5:
              console.log("🚀 ".concat($.name, ": 开始下载Utils代码"));
              return aj.abrupt("return", new Promise(function () {
                var al = i(g().mark(function am(an) {
                  return g().wrap(function ap(aq) {
                    for (;;) {
                      switch (aq.prev = aq.next) {
                        case 0:
                          $.getScript("".concat(l, "/https://raw.githubusercontent.com/xzxxn777/Surge/main/Utils/Utils.js")).then(function (ar) {
                            $.setdata(ar, "Utils_Code");
                            eval(ar);
                            console.log("✅ Utils加载成功, 请继续");
                            an(creatUtils());
                          });
                        case 1:
                        case "end":
                          return aq.stop();
                      }
                    }
                  }, am);
                }));
                return function (an) {
                  return al.apply(this, arguments);
                };
              }()));
            case 7:
            case "end":
              return aj.stop();
          }
        }
      }, af);
    }));
    return a9.apply(this, arguments);
  }
  function aa() {
    return ab.apply(this, arguments);
  }
  function ab() {
    ab = i(g().mark(function af() {
      return g().wrap(function (ah) {
        for (;;) {
          switch (ah.prev = ah.next) {
            case 0:
              return ah.abrupt("return", new Promise(function (aj) {
                var al = {
                  url: "https://fastly.jsdelivr.net/gh/xzxxn777/Surge@main/Utils/Notice.json"
                };
                $.get(al, function () {
                  var an = i(g().mark(function ao(ap, aq, ar) {
                    return g().wrap(function (at) {
                      for (;;) {
                        switch (at.prev = at.next) {
                          case 0:
                            try {
                              ap ? (console.log("".concat(JSON.stringify(ap))), console.log("".concat($.name, " API请求失败，请检查网路重试"))) : console.log(JSON.parse(ar).notice);
                            } catch (au) {
                              $.logErr(au, aq);
                            } finally {
                              aj();
                            }
                          case 1:
                          case "end":
                            return at.stop();
                        }
                      }
                    }, ao);
                  }));
                  return function (ap, aq, ar) {
                    return an.apply(this, arguments);
                  };
                }());
              }));
            case 1:
            case "end":
              return ah.stop();
          }
        }
      }, af);
    }));
    return ab.apply(this, arguments);
  }
  function ac(ae) {
    return ad.apply(this, arguments);
  }
  function ad() {
    ad = i(g().mark(function af(ag) {
      return g().wrap(function (ah) {
        for (;;) {
          switch (ah.prev = ah.next) {
            case 0:
              if (!$.isNode()) {
                ah.next = 5;
                break;
              }
              ah.next = 3;
              return notify.sendNotify($.name, ag);
            case 3:
              ah.next = 6;
              break;
            case 5:
              $.msg($.name, "", ag);
            case 6:
            case "end":
              return ah.stop();
          }
        }
      }, af);
    }));
    return ad.apply(this, arguments);
  }
  i(g().mark(function ae() {
    return g().wrap(function (ag) {
      for (;;) {
        switch (ag.prev = ag.next) {
          case 0:
            ag.next = 2;
            return aa();
          case 2:
            ag.next = 4;
            return F();
          case 4:
          case "end":
            return ag.stop();
        }
      }
    }, ae);
  }))().catch(function (af) {
    $.log(af);
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
      this.isMute = false;
      this.isNeedRewrite = false;
      this.logSeparator = "\n";
      this.encoding = "utf-8";
      this.startTime = new Date().getTime();
      Object.assign(this, e);
      this.log("", `🔔${this.name}, 开始!`);
    }
    getEnv() {
      return "undefined" != typeof $environment && $environment["surge-version"] ? "Surge" : "undefined" != typeof $environment && $environment["stash-version"] ? "Stash" : "undefined" != typeof module && module.exports ? "Node.js" : "undefined" != typeof $task ? "Quantumult X" : "undefined" != typeof $loon ? "Loon" : "undefined" != typeof $rocket ? "Shadowrocket" : undefined;
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
        return false;
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
        const [r, a] = i.split("@");
        const n = {
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
        const t = this.path.resolve(this.dataFile);
        const e = this.path.resolve(process.cwd(), this.dataFile);
        const s = this.fs.existsSync(t);
        const i = !s && this.fs.existsSync(e);
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
        const t = this.path.resolve(this.dataFile);
        const e = this.path.resolve(process.cwd(), this.dataFile);
        const s = this.fs.existsSync(t);
        const i = !s && this.fs.existsSync(e);
        const o = JSON.stringify(this.data);
        s ? this.fs.writeFileSync(t, o) : i ? this.fs.writeFileSync(e, o) : this.fs.writeFileSync(t, o);
      }
    }
    lodash_get(t, e, s) {
      const i = e.replace(/\[(\d+)\]/g, ".$1").split(".");
      let o = t;
      for (const t of i) if (o = Object(o)[t], undefined === o) {
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
        const [, s, i] = /^@(.*?)\.(.*?)$/.exec(t);
        const o = s ? this.getval(s) : "";
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
      let s = false;
      if (/^@/.test(e)) {
        const [, i, o] = /^@(.*?)\.(.*?)$/.exec(e);
        const r = this.getval(i);
        const a = i ? "null" === r ? null : r || "{}" : "{}";
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
          return true;
        default:
          return this.data && this.data[e] || null;
      }
    }
    initGotEnv(t) {
      this.got = this.got ? this.got : require("got");
      this.cktough = this.cktough ? this.cktough : require("tough-cookie");
      this.ckjar = this.ckjar ? this.ckjar : new this.cktough.CookieJar();
      t && (t.headers = t.headers ? t.headers : {}, t && (t.headers = t.headers ? t.headers : {}, undefined === t.headers.cookie && undefined === t.headers.Cookie && undefined === t.cookieJar && (t.cookieJar = this.ckjar)));
    }
    get(t, e = () => {}) {
      switch (t.headers && (delete t.headers["Content-Type"], delete t.headers["Content-Length"], delete t.headers["content-type"], delete t.headers["content-length"]), t.params && (t.url += "?" + this.queryStr(t.params)), undefined === t.followRedirect || t.followRedirect || ((this.isSurge() || this.isLoon()) && (t["auto-redirect"] = false), this.isQuanX() && (t.opts ? t.opts.redirection = false : t.opts = {
        redirection: false
      })), this.getEnv()) {
        case "Surge":
        case "Loon":
        case "Stash":
        case "Shadowrocket":
        default:
          this.isSurge() && this.isNeedRewrite && (t.headers = t.headers || {}, Object.assign(t.headers, {
            "X-Surge-Skip-Scripting": false
          }));
          $httpClient.get(t, (t, s, i) => {
            !t && s && (s.body = i, s.statusCode = s.status ? s.status : s.statusCode, s.status = s.statusCode);
            e(t, s, i);
          });
          break;
        case "Quantumult X":
          this.isNeedRewrite && (t.opts = t.opts || {}, Object.assign(t.opts, {
            hints: false
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
            } = t;
            const n = s.decode(a, this.encoding);
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
      switch (t.body && t.headers && !t.headers["Content-Type"] && !t.headers["content-type"] && (t.headers["content-type"] = "application/x-www-form-urlencoded"), t.headers && (delete t.headers["Content-Length"], delete t.headers["content-length"]), undefined === t.followRedirect || t.followRedirect || ((this.isSurge() || this.isLoon()) && (t["auto-redirect"] = false), this.isQuanX() && (t.opts ? t.opts.redirection = false : t.opts = {
        redirection: false
      })), this.getEnv()) {
        case "Surge":
        case "Loon":
        case "Stash":
        case "Shadowrocket":
        default:
          this.isSurge() && this.isNeedRewrite && (t.headers = t.headers || {}, Object.assign(t.headers, {
            "X-Surge-Skip-Scripting": false
          }));
          $httpClient[s](t, (t, s, i) => {
            !t && s && (s.body = i, s.statusCode = s.status ? s.status : s.statusCode, s.status = s.statusCode);
            e(t, s, i);
          });
          break;
        case "Quantumult X":
          t.method = s;
          this.isNeedRewrite && (t.opts = t.opts || {}, Object.assign(t.opts, {
            hints: false
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
            } = t;
            const n = i.decode(a, this.encoding);
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
          case undefined:
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
                    let t;
                    let e;
                    let s;
                    if (i.startsWith("http")) {
                      t = i;
                    } else {
                      if (i.startsWith("data:")) {
                        const [t] = i.split(";");
                        const [, o] = i.split(",");
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
          this.log("", `❗️${this.name}, 错误!`, e, undefined !== t.message ? t.message : t, t.stack);
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