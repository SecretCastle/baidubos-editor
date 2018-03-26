// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

// eslint-disable-next-line no-global-assign
require = (function (modules, cache, entry) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof require === "function" && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof require === "function" && require;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  // Override the current require with this new one
  return newRequire;
})({6:[function(require,module,exports) {

var indexOf = [].indexOf;

module.exports = function(arr, obj){
  if (indexOf) return arr.indexOf(obj);
  for (var i = 0; i < arr.length; ++i) {
    if (arr[i] === obj) return i;
  }
  return -1;
};
},{}],3:[function(require,module,exports) {
var global = (1,eval)("this");
var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

!function (e) {
  if ("object" == (typeof exports === "undefined" ? "undefined" : _typeof(exports)) && "undefined" != typeof module) module.exports = e();else if ("function" == typeof define && define.amd) define([], e);else {
    var t;t = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : this, (t.baidubce || (t.baidubce = {})).sdk = e();
  }
}(function () {
  var define, module, exports;return function e(t, n, r) {
    function i(a, s) {
      if (!n[a]) {
        if (!t[a]) {
          var c = "function" == typeof require && require;if (!s && c) return c(a, !0);if (o) return o(a, !0);var f = new Error("Cannot find module '" + a + "'");throw f.code = "MODULE_NOT_FOUND", f;
        }var u = n[a] = { exports: {} };t[a][0].call(u.exports, function (e) {
          var n = t[a][1][e];return i(n ? n : e);
        }, u, u.exports, e, t, n, r);
      }return n[a].exports;
    }for (var o = "function" == typeof require && require, a = 0; a < r.length; a++) {
      i(r[a]);
    }return i;
  }({ 1: [function (e, t, n) {
      n.Q = e("q"), n.Auth = e("./src/auth"), n.BosClient = e("./src/bos_client"), n.BcsClient = e("./src/bcs_client"), n.BccClient = e("./src/bcc_client"), n.SesClient = e("./src/ses_client"), n.QnsClient = e("./src/qns_client"), n.LssClient = e("./src/lss_client"), n.MctClient = e("./src/mct_client"), n.FaceClient = e("./src/face_client"), n.OCRClient = e("./src/ocr_client"), n.MediaClient = e("./src/media_client"), n.HttpClient = e("./src/http_client"), n.MimeType = e("./src/mime.types"), n.STS = e("./src/sts"), n.VodClient = e("./src/vod_client"), n.DocClient = e("./src/doc_client");
    }, { "./src/auth": 189, "./src/bcc_client": 190, "./src/bcs_client": 192, "./src/bos_client": 193, "./src/doc_client": 196, "./src/face_client": 197, "./src/http_client": 200, "./src/lss_client": 201, "./src/mct_client": 202, "./src/media_client": 203, "./src/mime.types": 204, "./src/ocr_client": 206, "./src/qns_client": 207, "./src/ses_client": 208, "./src/sts": 210, "./src/vod_client": 217, q: 186 }], 2: [function (e, t, n) {
      (function (e, n) {
        !function () {
          function r() {}function i(e) {
            return e;
          }function o(e) {
            return !!e;
          }function a(e) {
            return !e;
          }function s(e) {
            return function () {
              if (null === e) throw new Error("Callback was already called.");e.apply(this, arguments), e = null;
            };
          }function c(e) {
            return function () {
              null !== e && (e.apply(this, arguments), e = null);
            };
          }function f(e) {
            return z(e) || "number" == typeof e.length && e.length >= 0 && e.length % 1 === 0;
          }function u(e, t) {
            for (var n = -1, r = e.length; ++n < r;) {
              t(e[n], n, e);
            }
          }function d(e, t) {
            for (var n = -1, r = e.length, i = Array(r); ++n < r;) {
              i[n] = t(e[n], n, e);
            }return i;
          }function p(e) {
            return d(Array(e), function (e, t) {
              return t;
            });
          }function h(e, t, n) {
            return u(e, function (e, r, i) {
              n = t(n, e, r, i);
            }), n;
          }function l(e, t) {
            u(D(e), function (n) {
              t(e[n], n);
            });
          }function b(e, t) {
            for (var n = 0; n < e.length; n++) {
              if (e[n] === t) return n;
            }return -1;
          }function m(e) {
            var t,
                n,
                r = -1;return f(e) ? (t = e.length, function () {
              return r++, t > r ? r : null;
            }) : (n = D(e), t = n.length, function () {
              return r++, t > r ? n[r] : null;
            });
          }function v(e, t) {
            return t = null == t ? e.length - 1 : +t, function () {
              for (var n = Math.max(arguments.length - t, 0), r = Array(n), i = 0; n > i; i++) {
                r[i] = arguments[i + t];
              }switch (t) {case 0:
                  return e.call(this, r);case 1:
                  return e.call(this, arguments[0], r);}
            };
          }function g(e) {
            return function (t, n, r) {
              return e(t, r);
            };
          }function y(e) {
            return function (t, n, i) {
              i = c(i || r), t = t || [];var o = m(t);if (0 >= e) return i(null);var a = !1,
                  f = 0,
                  u = !1;!function d() {
                if (a && 0 >= f) return i(null);for (; e > f && !u;) {
                  var r = o();if (null === r) return a = !0, void (0 >= f && i(null));f += 1, n(t[r], r, s(function (e) {
                    f -= 1, e ? (i(e), u = !0) : d();
                  }));
                }
              }();
            };
          }function w(e) {
            return function (t, n, r) {
              return e(P.eachOf, t, n, r);
            };
          }function _(e) {
            return function (t, n, r, i) {
              return e(y(n), t, r, i);
            };
          }function x(e) {
            return function (t, n, r) {
              return e(P.eachOfSeries, t, n, r);
            };
          }function E(e, t, n, i) {
            i = c(i || r), t = t || [];var o = f(t) ? [] : {};e(t, function (e, t, r) {
              n(e, function (e, n) {
                o[t] = n, r(e);
              });
            }, function (e) {
              i(e, o);
            });
          }function S(e, t, n, r) {
            var i = [];e(t, function (e, t, r) {
              n(e, function (n) {
                n && i.push({ index: t, value: e }), r();
              });
            }, function () {
              r(d(i.sort(function (e, t) {
                return e.index - t.index;
              }), function (e) {
                return e.value;
              }));
            });
          }function k(e, t, n, r) {
            S(e, t, function (e, t) {
              n(e, function (e) {
                t(!e);
              });
            }, r);
          }function T(e, t, n) {
            return function (r, i, o, a) {
              function s() {
                a && a(n(!1, void 0));
              }function c(e, r, i) {
                return a ? void o(e, function (r) {
                  a && t(r) && (a(n(!0, e)), a = o = !1), i();
                }) : i();
              }arguments.length > 3 ? e(r, i, c, s) : (a = o, o = i, e(r, c, s));
            };
          }function j(e, t) {
            return t;
          }function A(e, t, n) {
            n = n || r;var i = f(t) ? [] : {};e(t, function (e, t, n) {
              e(v(function (e, r) {
                r.length <= 1 && (r = r[0]), i[t] = r, n(e);
              }));
            }, function (e) {
              n(e, i);
            });
          }function I(e, t, n, r) {
            var i = [];e(t, function (e, t, r) {
              n(e, function (e, t) {
                i = i.concat(t || []), r(e);
              });
            }, function (e) {
              r(e, i);
            });
          }function R(e, t, n) {
            function i(e, t, n, i) {
              if (null != i && "function" != typeof i) throw new Error("task callback must be a function");return e.started = !0, z(t) || (t = [t]), 0 === t.length && e.idle() ? P.setImmediate(function () {
                e.drain();
              }) : (u(t, function (t) {
                var o = { data: t, callback: i || r };n ? e.tasks.unshift(o) : e.tasks.push(o), e.tasks.length === e.concurrency && e.saturated();
              }), void P.setImmediate(e.process));
            }function o(e, t) {
              return function () {
                a -= 1;var n = !1,
                    r = arguments;u(t, function (e) {
                  u(c, function (t, r) {
                    t !== e || n || (c.splice(r, 1), n = !0);
                  }), e.callback.apply(e, r);
                }), e.tasks.length + a === 0 && e.drain(), e.process();
              };
            }if (null == t) t = 1;else if (0 === t) throw new Error("Concurrency must not be zero");var a = 0,
                c = [],
                f = { tasks: [], concurrency: t, payload: n, saturated: r, empty: r, drain: r, started: !1, paused: !1, push: function push(e, t) {
                i(f, e, !1, t);
              }, kill: function kill() {
                f.drain = r, f.tasks = [];
              }, unshift: function unshift(e, t) {
                i(f, e, !0, t);
              }, process: function process() {
                for (; !f.paused && a < f.concurrency && f.tasks.length;) {
                  var t = f.payload ? f.tasks.splice(0, f.payload) : f.tasks.splice(0, f.tasks.length),
                      n = d(t, function (e) {
                    return e.data;
                  });0 === f.tasks.length && f.empty(), a += 1, c.push(t[0]);var r = s(o(f, t));e(n, r);
                }
              }, length: function length() {
                return f.tasks.length;
              }, running: function running() {
                return a;
              }, workersList: function workersList() {
                return c;
              }, idle: function idle() {
                return f.tasks.length + a === 0;
              }, pause: function pause() {
                f.paused = !0;
              }, resume: function resume() {
                if (f.paused !== !1) {
                  f.paused = !1;for (var e = Math.min(f.concurrency, f.tasks.length), t = 1; e >= t; t++) {
                    P.setImmediate(f.process);
                  }
                }
              } };return f;
          }function O(e) {
            return v(function (t, n) {
              t.apply(null, n.concat([v(function (t, n) {
                "object" == (typeof console === "undefined" ? "undefined" : _typeof(console)) && (t ? console.error && console.error(t) : console[e] && u(n, function (t) {
                  console[e](t);
                }));
              })]));
            });
          }function N(e) {
            return function (t, n, r) {
              e(p(t), n, r);
            };
          }function B(e) {
            return v(function (t, n) {
              var r = v(function (n) {
                var r = this,
                    i = n.pop();return e(t, function (e, t, i) {
                  e.apply(r, n.concat([i]));
                }, i);
              });return n.length ? r.apply(this, n) : r;
            });
          }function C(e) {
            return v(function (t) {
              var n = t.pop();t.push(function () {
                var e = arguments;r ? P.setImmediate(function () {
                  n.apply(null, e);
                }) : n.apply(null, e);
              });var r = !0;e.apply(this, t), r = !1;
            });
          }var q,
              P = {},
              M = "object" == (typeof self === "undefined" ? "undefined" : _typeof(self)) && self.self === self && self || "object" == (typeof n === "undefined" ? "undefined" : _typeof(n)) && n.global === n && n || this;null != M && (q = M.async), P.noConflict = function () {
            return M.async = q, P;
          };var U = Object.prototype.toString,
              z = Array.isArray || function (e) {
            return "[object Array]" === U.call(e);
          },
              L = function L(e) {
            var t = typeof e === "undefined" ? "undefined" : _typeof(e);return "function" === t || "object" === t && !!e;
          },
              D = Object.keys || function (e) {
            var t = [];for (var n in e) {
              e.hasOwnProperty(n) && t.push(n);
            }return t;
          },
              F = "function" == typeof setImmediate && setImmediate,
              H = F ? function (e) {
            F(e);
          } : function (e) {
            setTimeout(e, 0);
          };"object" == (typeof e === "undefined" ? "undefined" : _typeof(e)) && "function" == typeof e.nextTick ? P.nextTick = e.nextTick : P.nextTick = H, P.setImmediate = F ? H : P.nextTick, P.forEach = P.each = function (e, t, n) {
            return P.eachOf(e, g(t), n);
          }, P.forEachSeries = P.eachSeries = function (e, t, n) {
            return P.eachOfSeries(e, g(t), n);
          }, P.forEachLimit = P.eachLimit = function (e, t, n, r) {
            return y(t)(e, g(n), r);
          }, P.forEachOf = P.eachOf = function (e, t, n) {
            function i(e) {
              f--, e ? n(e) : null === o && 0 >= f && n(null);
            }n = c(n || r), e = e || [];for (var o, a = m(e), f = 0; null != (o = a());) {
              f += 1, t(e[o], o, s(i));
            }0 === f && n(null);
          }, P.forEachOfSeries = P.eachOfSeries = function (e, t, n) {
            function i() {
              var r = !0;return null === a ? n(null) : (t(e[a], a, s(function (e) {
                if (e) n(e);else {
                  if (a = o(), null === a) return n(null);r ? P.setImmediate(i) : i();
                }
              })), void (r = !1));
            }n = c(n || r), e = e || [];var o = m(e),
                a = o();i();
          }, P.forEachOfLimit = P.eachOfLimit = function (e, t, n, r) {
            y(t)(e, n, r);
          }, P.map = w(E), P.mapSeries = x(E), P.mapLimit = _(E), P.inject = P.foldl = P.reduce = function (e, t, n, r) {
            P.eachOfSeries(e, function (e, r, i) {
              n(t, e, function (e, n) {
                t = n, i(e);
              });
            }, function (e) {
              r(e, t);
            });
          }, P.foldr = P.reduceRight = function (e, t, n, r) {
            var o = d(e, i).reverse();P.reduce(o, t, n, r);
          }, P.transform = function (e, t, n, r) {
            3 === arguments.length && (r = n, n = t, t = z(e) ? [] : {}), P.eachOf(e, function (e, r, i) {
              n(t, e, r, i);
            }, function (e) {
              r(e, t);
            });
          }, P.select = P.filter = w(S), P.selectLimit = P.filterLimit = _(S), P.selectSeries = P.filterSeries = x(S), P.reject = w(k), P.rejectLimit = _(k), P.rejectSeries = x(k), P.any = P.some = T(P.eachOf, o, i), P.someLimit = T(P.eachOfLimit, o, i), P.all = P.every = T(P.eachOf, a, a), P.everyLimit = T(P.eachOfLimit, a, a), P.detect = T(P.eachOf, i, j), P.detectSeries = T(P.eachOfSeries, i, j), P.detectLimit = T(P.eachOfLimit, i, j), P.sortBy = function (e, t, n) {
            function r(e, t) {
              var n = e.criteria,
                  r = t.criteria;return r > n ? -1 : n > r ? 1 : 0;
            }P.map(e, function (e, n) {
              t(e, function (t, r) {
                t ? n(t) : n(null, { value: e, criteria: r });
              });
            }, function (e, t) {
              return e ? n(e) : void n(null, d(t.sort(r), function (e) {
                return e.value;
              }));
            });
          }, P.auto = function (e, t, n) {
            function i(e) {
              g.unshift(e);
            }function o(e) {
              var t = b(g, e);t >= 0 && g.splice(t, 1);
            }function a() {
              f--, u(g.slice(0), function (e) {
                e();
              });
            }"function" == typeof arguments[1] && (n = t, t = null), n = c(n || r);var s = D(e),
                f = s.length;if (!f) return n(null);t || (t = f);var d = {},
                p = 0,
                m = !1,
                g = [];i(function () {
              f || n(null, d);
            }), u(s, function (r) {
              function s() {
                return t > p && h(y, function (e, t) {
                  return e && d.hasOwnProperty(t);
                }, !0) && !d.hasOwnProperty(r);
              }function c() {
                s() && (p++, o(c), u[u.length - 1](g, d));
              }if (!m) {
                for (var f, u = z(e[r]) ? e[r] : [e[r]], g = v(function (e, t) {
                  if (p--, t.length <= 1 && (t = t[0]), e) {
                    var i = {};l(d, function (e, t) {
                      i[t] = e;
                    }), i[r] = t, m = !0, n(e, i);
                  } else d[r] = t, P.setImmediate(a);
                }), y = u.slice(0, u.length - 1), w = y.length; w--;) {
                  if (!(f = e[y[w]])) throw new Error("Has nonexistent dependency in " + y.join(", "));if (z(f) && b(f, r) >= 0) throw new Error("Has cyclic dependencies");
                }s() ? (p++, u[u.length - 1](g, d)) : i(c);
              }
            });
          }, P.retry = function (e, t, n) {
            function r(e, t) {
              if ("number" == typeof t) e.times = parseInt(t, 10) || o;else {
                if ("object" != (typeof t === "undefined" ? "undefined" : _typeof(t))) throw new Error("Unsupported argument type for 'times': " + (typeof t === "undefined" ? "undefined" : _typeof(t)));e.times = parseInt(t.times, 10) || o, e.interval = parseInt(t.interval, 10) || a;
              }
            }function i(e, t) {
              function n(e, n) {
                return function (r) {
                  e(function (e, t) {
                    r(!e || n, { err: e, result: t });
                  }, t);
                };
              }function r(e) {
                return function (t) {
                  setTimeout(function () {
                    t(null);
                  }, e);
                };
              }for (; c.times;) {
                var i = !(c.times -= 1);s.push(n(c.task, i)), !i && c.interval > 0 && s.push(r(c.interval));
              }P.series(s, function (t, n) {
                n = n[n.length - 1], (e || c.callback)(n.err, n.result);
              });
            }var o = 5,
                a = 0,
                s = [],
                c = { times: o, interval: a },
                f = arguments.length;if (1 > f || f > 3) throw new Error("Invalid arguments - must be either (task), (task, callback), (times, task) or (times, task, callback)");return 2 >= f && "function" == typeof e && (n = t, t = e), "function" != typeof e && r(c, e), c.callback = n, c.task = t, c.callback ? i() : i;
          }, P.waterfall = function (e, t) {
            function n(e) {
              return v(function (r, i) {
                if (r) t.apply(null, [r].concat(i));else {
                  var o = e.next();o ? i.push(n(o)) : i.push(t), C(e).apply(null, i);
                }
              });
            }if (t = c(t || r), !z(e)) {
              var i = new Error("First argument to waterfall must be an array of functions");return t(i);
            }return e.length ? void n(P.iterator(e))() : t();
          }, P.parallel = function (e, t) {
            A(P.eachOf, e, t);
          }, P.parallelLimit = function (e, t, n) {
            A(y(t), e, n);
          }, P.series = function (e, t) {
            A(P.eachOfSeries, e, t);
          }, P.iterator = function (e) {
            function t(n) {
              function r() {
                return e.length && e[n].apply(null, arguments), r.next();
              }return r.next = function () {
                return n < e.length - 1 ? t(n + 1) : null;
              }, r;
            }return t(0);
          }, P.apply = v(function (e, t) {
            return v(function (n) {
              return e.apply(null, t.concat(n));
            });
          }), P.concat = w(I), P.concatSeries = x(I), P.whilst = function (e, t, n) {
            if (n = n || r, e()) {
              var i = v(function (r, o) {
                r ? n(r) : e.apply(this, o) ? t(i) : n.apply(null, [null].concat(o));
              });t(i);
            } else n(null);
          }, P.doWhilst = function (e, t, n) {
            var r = 0;return P.whilst(function () {
              return ++r <= 1 || t.apply(this, arguments);
            }, e, n);
          }, P.until = function (e, t, n) {
            return P.whilst(function () {
              return !e.apply(this, arguments);
            }, t, n);
          }, P.doUntil = function (e, t, n) {
            return P.doWhilst(e, function () {
              return !t.apply(this, arguments);
            }, n);
          }, P.during = function (e, t, n) {
            n = n || r;var i = v(function (t, r) {
              t ? n(t) : (r.push(o), e.apply(this, r));
            }),
                o = function o(e, r) {
              e ? n(e) : r ? t(i) : n(null);
            };e(o);
          }, P.doDuring = function (e, t, n) {
            var r = 0;P.during(function (e) {
              r++ < 1 ? e(null, !0) : t.apply(this, arguments);
            }, e, n);
          }, P.queue = function (e, t) {
            var n = R(function (t, n) {
              e(t[0], n);
            }, t, 1);return n;
          }, P.priorityQueue = function (e, t) {
            function n(e, t) {
              return e.priority - t.priority;
            }function i(e, t, n) {
              for (var r = -1, i = e.length - 1; i > r;) {
                var o = r + (i - r + 1 >>> 1);n(t, e[o]) >= 0 ? r = o : i = o - 1;
              }return r;
            }function o(e, t, o, a) {
              if (null != a && "function" != typeof a) throw new Error("task callback must be a function");return e.started = !0, z(t) || (t = [t]), 0 === t.length ? P.setImmediate(function () {
                e.drain();
              }) : void u(t, function (t) {
                var s = { data: t, priority: o, callback: "function" == typeof a ? a : r };e.tasks.splice(i(e.tasks, s, n) + 1, 0, s), e.tasks.length === e.concurrency && e.saturated(), P.setImmediate(e.process);
              });
            }var a = P.queue(e, t);return a.push = function (e, t, n) {
              o(a, e, t, n);
            }, delete a.unshift, a;
          }, P.cargo = function (e, t) {
            return R(e, 1, t);
          }, P.log = O("log"), P.dir = O("dir"), P.memoize = function (e, t) {
            var n = {},
                r = {},
                o = Object.prototype.hasOwnProperty;t = t || i;var a = v(function (i) {
              var a = i.pop(),
                  s = t.apply(null, i);o.call(n, s) ? P.setImmediate(function () {
                a.apply(null, n[s]);
              }) : o.call(r, s) ? r[s].push(a) : (r[s] = [a], e.apply(null, i.concat([v(function (e) {
                n[s] = e;var t = r[s];delete r[s];for (var i = 0, o = t.length; o > i; i++) {
                  t[i].apply(null, e);
                }
              })])));
            });return a.memo = n, a.unmemoized = e, a;
          }, P.unmemoize = function (e) {
            return function () {
              return (e.unmemoized || e).apply(null, arguments);
            };
          }, P.times = N(P.map), P.timesSeries = N(P.mapSeries), P.timesLimit = function (e, t, n, r) {
            return P.mapLimit(p(e), t, n, r);
          }, P.seq = function () {
            var e = arguments;return v(function (t) {
              var n = this,
                  i = t[t.length - 1];"function" == typeof i ? t.pop() : i = r, P.reduce(e, t, function (e, t, r) {
                t.apply(n, e.concat([v(function (e, t) {
                  r(e, t);
                })]));
              }, function (e, t) {
                i.apply(n, [e].concat(t));
              });
            });
          }, P.compose = function () {
            return P.seq.apply(null, Array.prototype.reverse.call(arguments));
          }, P.applyEach = B(P.eachOf), P.applyEachSeries = B(P.eachOfSeries), P.forever = function (e, t) {
            function n(e) {
              return e ? i(e) : void o(n);
            }var i = s(t || r),
                o = C(e);n();
          }, P.ensureAsync = C, P.constant = v(function (e) {
            var t = [null].concat(e);return function (e) {
              return e.apply(this, t);
            };
          }), P.wrapSync = P.asyncify = function (e) {
            return v(function (t) {
              var n,
                  r = t.pop();try {
                n = e.apply(this, t);
              } catch (i) {
                return r(i);
              }L(n) && "function" == typeof n.then ? n.then(function (e) {
                r(null, e);
              })["catch"](function (e) {
                r(e.message ? e : new Error(e));
              }) : r(null, n);
            });
          }, "object" == (typeof t === "undefined" ? "undefined" : _typeof(t)) && t.exports ? t.exports = P : "function" == typeof define && define.amd ? define([], function () {
            return P;
          }) : M.async = P;
        }();
      }).call(this, e("_process"), "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {});
    }, { _process: 156 }], 3: [function (e, t, n) {}, {}], 4: [function (e, t, n) {
      arguments[4][3][0].apply(n, arguments);
    }, { dup: 3 }], 5: [function (e, t, n) {
      "use strict";
      n.randomBytes = n.rng = n.pseudoRandomBytes = n.prng = e("randombytes"), n.createHash = n.Hash = e("create-hash"), n.createHmac = n.Hmac = e("create-hmac");var r = ["sha1", "sha224", "sha256", "sha384", "sha512", "md5", "rmd160"].concat(Object.keys(e("browserify-sign/algos")));n.getHashes = function () {
        return r;
      };var i = e("pbkdf2");n.pbkdf2 = i.pbkdf2, n.pbkdf2Sync = i.pbkdf2Sync;var o = e("browserify-aes");["Cipher", "createCipher", "Cipheriv", "createCipheriv", "Decipher", "createDecipher", "Decipheriv", "createDecipheriv", "getCiphers", "listCiphers"].forEach(function (e) {
        n[e] = o[e];
      });var a = e("diffie-hellman");["DiffieHellmanGroup", "createDiffieHellmanGroup", "getDiffieHellman", "createDiffieHellman", "DiffieHellman"].forEach(function (e) {
        n[e] = a[e];
      });var s = e("browserify-sign");["createSign", "Sign", "createVerify", "Verify"].forEach(function (e) {
        n[e] = s[e];
      }), n.createECDH = e("create-ecdh");var c = e("public-encrypt");["publicEncrypt", "privateEncrypt", "publicDecrypt", "privateDecrypt"].forEach(function (e) {
        n[e] = c[e];
      }), ["createCredentials"].forEach(function (e) {
        n[e] = function () {
          throw new Error(["sorry, " + e + " is not implemented yet", "we accept pull requests", "https://github.com/crypto-browserify/crypto-browserify"].join("\n"));
        };
      });
    }, { "browserify-aes": 9, "browserify-sign": 25, "browserify-sign/algos": 24, "create-ecdh": 73, "create-hash": 96, "create-hmac": 108, "diffie-hellman": 109, pbkdf2: 116, "public-encrypt": 117, randombytes: 145 }], 6: [function (e, t, n) {
      (function (n) {
        function r(e, t, r) {
          n.isBuffer(e) || (e = new n(e, "binary")), t /= 8, r = r || 0;for (var o, a, s = 0, c = 0, f = new n(t), u = new n(r), d = 0, p = [];;) {
            if (d++ > 0 && p.push(o), p.push(e), o = i(n.concat(p)), p = [], a = 0, t > 0) for (;;) {
              if (0 === t) break;if (a === o.length) break;f[s++] = o[a], t--, a++;
            }if (r > 0 && a !== o.length) for (;;) {
              if (0 === r) break;if (a === o.length) break;u[c++] = o[a], r--, a++;
            }if (0 === t && 0 === r) break;
          }for (a = 0; a < o.length; a++) {
            o[a] = 0;
          }return { key: f, iv: u };
        }var i = e("create-hash/md5");t.exports = r;
      }).call(this, e("buffer").Buffer);
    }, { buffer: 179, "create-hash/md5": 98 }], 7: [function (e, t, n) {
      (function (e) {
        function t(e) {
          var t, n;return t = e > s || 0 > e ? (n = Math.abs(e) % s, 0 > e ? s - n : n) : e;
        }function r(e) {
          for (var t = 0; t < e.length; e++) {
            e[t] = 0;
          }return !1;
        }function i() {
          this.SBOX = [], this.INV_SBOX = [], this.SUB_MIX = [[], [], [], []], this.INV_SUB_MIX = [[], [], [], []], this.init(), this.RCON = [0, 1, 2, 4, 8, 16, 32, 64, 128, 27, 54];
        }function o(e) {
          for (var t = e.length / 4, n = new Array(t), r = -1; ++r < t;) {
            n[r] = e.readUInt32BE(4 * r);
          }return n;
        }function a(e) {
          this._key = o(e), this._doReset();
        }var s = Math.pow(2, 32);i.prototype.init = function () {
          var e, t, n, r, i, o, a, s, c, f;for (e = function () {
            var e, n;for (n = [], t = e = 0; 256 > e; t = ++e) {
              128 > t ? n.push(t << 1) : n.push(t << 1 ^ 283);
            }return n;
          }(), i = 0, c = 0, t = f = 0; 256 > f; t = ++f) {
            n = c ^ c << 1 ^ c << 2 ^ c << 3 ^ c << 4, n = n >>> 8 ^ 255 & n ^ 99, this.SBOX[i] = n, this.INV_SBOX[n] = i, o = e[i], a = e[o], s = e[a], r = 257 * e[n] ^ 16843008 * n, this.SUB_MIX[0][i] = r << 24 | r >>> 8, this.SUB_MIX[1][i] = r << 16 | r >>> 16, this.SUB_MIX[2][i] = r << 8 | r >>> 24, this.SUB_MIX[3][i] = r, r = 16843009 * s ^ 65537 * a ^ 257 * o ^ 16843008 * i, this.INV_SUB_MIX[0][n] = r << 24 | r >>> 8, this.INV_SUB_MIX[1][n] = r << 16 | r >>> 16, this.INV_SUB_MIX[2][n] = r << 8 | r >>> 24, this.INV_SUB_MIX[3][n] = r, 0 === i ? i = c = 1 : (i = o ^ e[e[e[s ^ o]]], c ^= e[e[c]]);
          }return !0;
        };var c = new i();a.blockSize = 16, a.prototype.blockSize = a.blockSize, a.keySize = 32, a.prototype.keySize = a.keySize, a.prototype._doReset = function () {
          var e, t, n, r, i, o;for (n = this._key, t = n.length, this._nRounds = t + 6, i = 4 * (this._nRounds + 1), this._keySchedule = [], r = 0; i > r; r++) {
            this._keySchedule[r] = t > r ? n[r] : (o = this._keySchedule[r - 1], r % t === 0 ? (o = o << 8 | o >>> 24, o = c.SBOX[o >>> 24] << 24 | c.SBOX[o >>> 16 & 255] << 16 | c.SBOX[o >>> 8 & 255] << 8 | c.SBOX[255 & o], o ^= c.RCON[r / t | 0] << 24) : t > 6 && r % t === 4 ? o = c.SBOX[o >>> 24] << 24 | c.SBOX[o >>> 16 & 255] << 16 | c.SBOX[o >>> 8 & 255] << 8 | c.SBOX[255 & o] : void 0, this._keySchedule[r - t] ^ o);
          }for (this._invKeySchedule = [], e = 0; i > e; e++) {
            r = i - e, o = this._keySchedule[r - (e % 4 ? 0 : 4)], this._invKeySchedule[e] = 4 > e || 4 >= r ? o : c.INV_SUB_MIX[0][c.SBOX[o >>> 24]] ^ c.INV_SUB_MIX[1][c.SBOX[o >>> 16 & 255]] ^ c.INV_SUB_MIX[2][c.SBOX[o >>> 8 & 255]] ^ c.INV_SUB_MIX[3][c.SBOX[255 & o]];
          }return !0;
        }, a.prototype.encryptBlock = function (t) {
          t = o(new e(t));var n = this._doCryptBlock(t, this._keySchedule, c.SUB_MIX, c.SBOX),
              r = new e(16);return r.writeUInt32BE(n[0], 0), r.writeUInt32BE(n[1], 4), r.writeUInt32BE(n[2], 8), r.writeUInt32BE(n[3], 12), r;
        }, a.prototype.decryptBlock = function (t) {
          t = o(new e(t));var n = [t[3], t[1]];t[1] = n[0], t[3] = n[1];var r = this._doCryptBlock(t, this._invKeySchedule, c.INV_SUB_MIX, c.INV_SBOX),
              i = new e(16);return i.writeUInt32BE(r[0], 0), i.writeUInt32BE(r[3], 4), i.writeUInt32BE(r[2], 8), i.writeUInt32BE(r[1], 12), i;
        }, a.prototype.scrub = function () {
          r(this._keySchedule), r(this._invKeySchedule), r(this._key);
        }, a.prototype._doCryptBlock = function (e, n, r, i) {
          var o, a, s, c, f, u, d, p, h;a = e[0] ^ n[0], s = e[1] ^ n[1], c = e[2] ^ n[2], f = e[3] ^ n[3], o = 4;for (var l = 1; l < this._nRounds; l++) {
            u = r[0][a >>> 24] ^ r[1][s >>> 16 & 255] ^ r[2][c >>> 8 & 255] ^ r[3][255 & f] ^ n[o++], d = r[0][s >>> 24] ^ r[1][c >>> 16 & 255] ^ r[2][f >>> 8 & 255] ^ r[3][255 & a] ^ n[o++], p = r[0][c >>> 24] ^ r[1][f >>> 16 & 255] ^ r[2][a >>> 8 & 255] ^ r[3][255 & s] ^ n[o++], h = r[0][f >>> 24] ^ r[1][a >>> 16 & 255] ^ r[2][s >>> 8 & 255] ^ r[3][255 & c] ^ n[o++], a = u, s = d, c = p, f = h;
          }return u = (i[a >>> 24] << 24 | i[s >>> 16 & 255] << 16 | i[c >>> 8 & 255] << 8 | i[255 & f]) ^ n[o++], d = (i[s >>> 24] << 24 | i[c >>> 16 & 255] << 16 | i[f >>> 8 & 255] << 8 | i[255 & a]) ^ n[o++], p = (i[c >>> 24] << 24 | i[f >>> 16 & 255] << 16 | i[a >>> 8 & 255] << 8 | i[255 & s]) ^ n[o++], h = (i[f >>> 24] << 24 | i[a >>> 16 & 255] << 16 | i[s >>> 8 & 255] << 8 | i[255 & c]) ^ n[o++], [t(u), t(d), t(p), t(h)];
        }, n.AES = a;
      }).call(this, e("buffer").Buffer);
    }, { buffer: 179 }], 8: [function (e, t, n) {
      (function (n) {
        function r(e, t, i, s) {
          if (!(this instanceof r)) return new r(e, t, i);a.call(this), this._finID = n.concat([i, new n([0, 0, 0, 1])]), i = n.concat([i, new n([0, 0, 0, 2])]), this._cipher = new o.AES(t), this._prev = new n(i.length), this._cache = new n(""), this._secCache = new n(""), this._decrypt = s, this._alen = 0, this._len = 0, i.copy(this._prev), this._mode = e;var f = new n(4);f.fill(0), this._ghash = new c(this._cipher.encryptBlock(f)), this._authTag = null, this._called = !1;
        }function i(e, t) {
          var n = 0;e.length !== t.length && n++;for (var r = Math.min(e.length, t.length), i = -1; ++i < r;) {
            n += e[i] ^ t[i];
          }return n;
        }var o = e("./aes"),
            a = e("./cipherBase"),
            s = e("inherits"),
            c = e("./ghash"),
            f = e("buffer-xor");s(r, a), t.exports = r, r.prototype._update = function (e) {
          if (!this._called && this._alen) {
            var t = 16 - this._alen % 16;16 > t && (t = new n(t), t.fill(0), this._ghash.update(t));
          }this._called = !0;var r = this._mode.encrypt(this, e);return this._decrypt ? this._ghash.update(e) : this._ghash.update(r), this._len += e.length, r;
        }, r.prototype._final = function () {
          if (this._decrypt && !this._authTag) throw new Error("Unsupported state or unable to authenticate data");var e = f(this._ghash["final"](8 * this._alen, 8 * this._len), this._cipher.encryptBlock(this._finID));if (this._decrypt) {
            if (i(e, this._authTag)) throw new Error("Unsupported state or unable to authenticate data");
          } else this._authTag = e;this._cipher.scrub();
        }, r.prototype.getAuthTag = function () {
          if (!this._decrypt && n.isBuffer(this._authTag)) return this._authTag;throw new Error("Attempting to get auth tag in unsupported state");
        }, r.prototype.setAuthTag = function (e) {
          if (!this._decrypt) throw new Error("Attempting to set auth tag in unsupported state");this._authTag = e;
        }, r.prototype.setAAD = function (e) {
          if (this._called) throw new Error("Attempting to set AAD in unsupported state");this._ghash.update(e), this._alen += e.length;
        };
      }).call(this, e("buffer").Buffer);
    }, { "./aes": 7, "./cipherBase": 10, "./ghash": 13, buffer: 179, "buffer-xor": 22, inherits: 152 }], 9: [function (e, t, n) {
      function r() {
        return Object.keys(a);
      }var i = e("./encrypter");n.createCipher = n.Cipher = i.createCipher, n.createCipheriv = n.Cipheriv = i.createCipheriv;var o = e("./decrypter");n.createDecipher = n.Decipher = o.createDecipher, n.createDecipheriv = n.Decipheriv = o.createDecipheriv;var a = e("./modes");n.listCiphers = n.getCiphers = r;
    }, { "./decrypter": 11, "./encrypter": 12, "./modes": 14 }], 10: [function (e, t, n) {
      (function (n) {
        function r() {
          i.call(this), this._base64Cache = new n("");
        }var i = e("stream").Transform,
            o = e("inherits");t.exports = r, o(r, i), r.prototype.update = function (e, t, r) {
          "string" == typeof e && (e = new n(e, t));var i = this._update(e);return r && (i = this._toString(i, r)), i;
        }, r.prototype._transform = function (e, t, n) {
          this.push(this._update(e)), n();
        }, r.prototype._flush = function (e) {
          try {
            this.push(this._final());
          } catch (t) {
            return e(t);
          }e();
        }, r.prototype["final"] = function (e) {
          var t = this._final() || new n("");return e && (t = this._toString(t, e, !0)), t;
        }, r.prototype._toString = function (e, t, r) {
          if ("base64" !== t) return e.toString(t);this._base64Cache = n.concat([this._base64Cache, e]);var i;if (r) return i = this._base64Cache, this._base64Cache = null, i.toString("base64");var o = this._base64Cache.length,
              a = o % 3;if (!a) return i = this._base64Cache, this._base64Cache = new n(""), i.toString("base64");var s = o - a;return s ? (i = this._base64Cache.slice(0, s), this._base64Cache = this._base64Cache.slice(-a), i.toString("base64")) : "";
        };
      }).call(this, e("buffer").Buffer);
    }, { buffer: 179, inherits: 152, stream: 172 }], 11: [function (e, t, n) {
      (function (t) {
        function r(e, n, o) {
          return this instanceof r ? (f.call(this), this._cache = new i(), this._last = void 0, this._cipher = new c.AES(n), this._prev = new t(o.length), o.copy(this._prev), this._mode = e, void (this._autopadding = !0)) : new r(e, n, o);
        }function i() {
          return this instanceof i ? void (this.cache = new t("")) : new i();
        }function o(e) {
          for (var t = e[15], n = -1; ++n < t;) {
            if (e[n + (16 - t)] !== t) throw new Error("unable to decrypt data");
          }return 16 !== t ? e.slice(0, 16 - t) : void 0;
        }function a(e, n, i) {
          var o = d[e.toLowerCase()];if (!o) throw new TypeError("invalid suite type");if ("string" == typeof i && (i = new t(i)), "string" == typeof n && (n = new t(n)), n.length !== o.key / 8) throw new TypeError("invalid key length " + n.length);if (i.length !== o.iv) throw new TypeError("invalid iv length " + i.length);return "stream" === o.type ? new p(b[o.mode], n, i, !0) : "auth" === o.type ? new h(b[o.mode], n, i, !0) : new r(b[o.mode], n, i);
        }function s(e, t) {
          var n = d[e.toLowerCase()];if (!n) throw new TypeError("invalid suite type");var r = l(t, n.key, n.iv);return a(e, r.key, r.iv);
        }var c = e("./aes"),
            f = e("./cipherBase"),
            u = e("inherits"),
            d = e("./modes"),
            p = e("./streamCipher"),
            h = e("./authCipher"),
            l = e("./EVP_BytesToKey");u(r, f), r.prototype._update = function (e) {
          this._cache.add(e);for (var n, r, i = []; n = this._cache.get(this._autopadding);) {
            r = this._mode.decrypt(this, n), i.push(r);
          }return t.concat(i);
        }, r.prototype._final = function () {
          var e = this._cache.flush();if (this._autopadding) return o(this._mode.decrypt(this, e));if (e) throw new Error("data not multiple of block length");
        }, r.prototype.setAutoPadding = function (e) {
          this._autopadding = !!e;
        }, i.prototype.add = function (e) {
          this.cache = t.concat([this.cache, e]);
        }, i.prototype.get = function (e) {
          var t;if (e) {
            if (this.cache.length > 16) return t = this.cache.slice(0, 16), this.cache = this.cache.slice(16), t;
          } else if (this.cache.length >= 16) return t = this.cache.slice(0, 16), this.cache = this.cache.slice(16), t;return null;
        }, i.prototype.flush = function () {
          return this.cache.length ? this.cache : void 0;
        };var b = { ECB: e("./modes/ecb"), CBC: e("./modes/cbc"), CFB: e("./modes/cfb"), CFB8: e("./modes/cfb8"), CFB1: e("./modes/cfb1"), OFB: e("./modes/ofb"), CTR: e("./modes/ctr"), GCM: e("./modes/ctr") };n.createDecipher = s, n.createDecipheriv = a;
      }).call(this, e("buffer").Buffer);
    }, { "./EVP_BytesToKey": 6, "./aes": 7, "./authCipher": 8, "./cipherBase": 10, "./modes": 14, "./modes/cbc": 15, "./modes/cfb": 16, "./modes/cfb1": 17, "./modes/cfb8": 18, "./modes/ctr": 19, "./modes/ecb": 20, "./modes/ofb": 21, "./streamCipher": 23, buffer: 179, inherits: 152 }], 12: [function (e, t, n) {
      (function (t) {
        function r(e, n, o) {
          return this instanceof r ? (c.call(this), this._cache = new i(), this._cipher = new s.AES(n), this._prev = new t(o.length), o.copy(this._prev), this._mode = e, void (this._autopadding = !0)) : new r(e, n, o);
        }function i() {
          return this instanceof i ? void (this.cache = new t("")) : new i();
        }function o(e, n, i) {
          var o = u[e.toLowerCase()];if (!o) throw new TypeError("invalid suite type");if ("string" == typeof i && (i = new t(i)), "string" == typeof n && (n = new t(n)), n.length !== o.key / 8) throw new TypeError("invalid key length " + n.length);if (i.length !== o.iv) throw new TypeError("invalid iv length " + i.length);return "stream" === o.type ? new p(l[o.mode], n, i) : "auth" === o.type ? new h(l[o.mode], n, i) : new r(l[o.mode], n, i);
        }function a(e, t) {
          var n = u[e.toLowerCase()];if (!n) throw new TypeError("invalid suite type");var r = d(t, n.key, n.iv);return o(e, r.key, r.iv);
        }var s = e("./aes"),
            c = e("./cipherBase"),
            f = e("inherits"),
            u = e("./modes"),
            d = e("./EVP_BytesToKey"),
            p = e("./streamCipher"),
            h = e("./authCipher");f(r, c), r.prototype._update = function (e) {
          this._cache.add(e);for (var n, r, i = []; n = this._cache.get();) {
            r = this._mode.encrypt(this, n), i.push(r);
          }return t.concat(i);
        }, r.prototype._final = function () {
          var e = this._cache.flush();if (this._autopadding) return e = this._mode.encrypt(this, e), this._cipher.scrub(), e;if ("10101010101010101010101010101010" !== e.toString("hex")) throw this._cipher.scrub(), new Error("data not multiple of block length");
        }, r.prototype.setAutoPadding = function (e) {
          this._autopadding = !!e;
        }, i.prototype.add = function (e) {
          this.cache = t.concat([this.cache, e]);
        }, i.prototype.get = function () {
          if (this.cache.length > 15) {
            var e = this.cache.slice(0, 16);return this.cache = this.cache.slice(16), e;
          }return null;
        }, i.prototype.flush = function () {
          for (var e = 16 - this.cache.length, n = new t(e), r = -1; ++r < e;) {
            n.writeUInt8(e, r);
          }var i = t.concat([this.cache, n]);return i;
        };var l = { ECB: e("./modes/ecb"), CBC: e("./modes/cbc"), CFB: e("./modes/cfb"), CFB8: e("./modes/cfb8"), CFB1: e("./modes/cfb1"), OFB: e("./modes/ofb"), CTR: e("./modes/ctr"), GCM: e("./modes/ctr") };n.createCipheriv = o, n.createCipher = a;
      }).call(this, e("buffer").Buffer);
    }, { "./EVP_BytesToKey": 6, "./aes": 7, "./authCipher": 8, "./cipherBase": 10, "./modes": 14, "./modes/cbc": 15, "./modes/cfb": 16, "./modes/cfb1": 17, "./modes/cfb8": 18, "./modes/ctr": 19, "./modes/ecb": 20, "./modes/ofb": 21, "./streamCipher": 23, buffer: 179, inherits: 152 }], 13: [function (e, t, n) {
      (function (e) {
        function n(t) {
          this.h = t, this.state = new e(16), this.state.fill(0), this.cache = new e("");
        }function r(e) {
          return [e.readUInt32BE(0), e.readUInt32BE(4), e.readUInt32BE(8), e.readUInt32BE(12)];
        }function i(t) {
          t = t.map(o);var n = new e(16);return n.writeUInt32BE(t[0], 0), n.writeUInt32BE(t[1], 4), n.writeUInt32BE(t[2], 8), n.writeUInt32BE(t[3], 12), n;
        }function o(e) {
          var t, n;return t = e > c || 0 > e ? (n = Math.abs(e) % c, 0 > e ? c - n : n) : e;
        }function a(e, t) {
          return [e[0] ^ t[0], e[1] ^ t[1], e[2] ^ t[2], e[3] ^ t[3]];
        }var s = new e(16);s.fill(0), t.exports = n, n.prototype.ghash = function (e) {
          for (var t = -1; ++t < e.length;) {
            this.state[t] ^= e[t];
          }this._multiply();
        }, n.prototype._multiply = function () {
          for (var e, t, n, o = r(this.h), s = [0, 0, 0, 0], c = -1; ++c < 128;) {
            for (t = 0 !== (this.state[~~(c / 8)] & 1 << 7 - c % 8), t && (s = a(s, o)), n = 0 !== (1 & o[3]), e = 3; e > 0; e--) {
              o[e] = o[e] >>> 1 | (1 & o[e - 1]) << 31;
            }o[0] = o[0] >>> 1, n && (o[0] = o[0] ^ 225 << 24);
          }this.state = i(s);
        }, n.prototype.update = function (t) {
          this.cache = e.concat([this.cache, t]);for (var n; this.cache.length >= 16;) {
            n = this.cache.slice(0, 16), this.cache = this.cache.slice(16), this.ghash(n);
          }
        }, n.prototype["final"] = function (t, n) {
          return this.cache.length && this.ghash(e.concat([this.cache, s], 16)), this.ghash(i([0, t, 0, n])), this.state;
        };var c = Math.pow(2, 32);
      }).call(this, e("buffer").Buffer);
    }, { buffer: 179 }], 14: [function (e, t, n) {
      n["aes-128-ecb"] = { cipher: "AES", key: 128, iv: 0, mode: "ECB", type: "block" }, n["aes-192-ecb"] = { cipher: "AES", key: 192, iv: 0, mode: "ECB", type: "block" }, n["aes-256-ecb"] = { cipher: "AES", key: 256, iv: 0, mode: "ECB", type: "block" }, n["aes-128-cbc"] = { cipher: "AES", key: 128, iv: 16, mode: "CBC", type: "block" }, n["aes-192-cbc"] = { cipher: "AES", key: 192, iv: 16, mode: "CBC", type: "block" }, n["aes-256-cbc"] = { cipher: "AES", key: 256, iv: 16, mode: "CBC", type: "block" }, n.aes128 = n["aes-128-cbc"], n.aes192 = n["aes-192-cbc"], n.aes256 = n["aes-256-cbc"], n["aes-128-cfb"] = { cipher: "AES", key: 128, iv: 16, mode: "CFB", type: "stream" }, n["aes-192-cfb"] = { cipher: "AES", key: 192, iv: 16, mode: "CFB", type: "stream" }, n["aes-256-cfb"] = { cipher: "AES", key: 256, iv: 16, mode: "CFB", type: "stream" }, n["aes-128-cfb8"] = { cipher: "AES", key: 128, iv: 16, mode: "CFB8", type: "stream" }, n["aes-192-cfb8"] = { cipher: "AES", key: 192, iv: 16, mode: "CFB8", type: "stream" }, n["aes-256-cfb8"] = { cipher: "AES", key: 256, iv: 16, mode: "CFB8", type: "stream" }, n["aes-128-cfb1"] = { cipher: "AES", key: 128, iv: 16, mode: "CFB1", type: "stream" }, n["aes-192-cfb1"] = { cipher: "AES", key: 192, iv: 16, mode: "CFB1", type: "stream" }, n["aes-256-cfb1"] = { cipher: "AES", key: 256, iv: 16, mode: "CFB1", type: "stream" }, n["aes-128-ofb"] = { cipher: "AES", key: 128, iv: 16, mode: "OFB", type: "stream" }, n["aes-192-ofb"] = { cipher: "AES", key: 192, iv: 16, mode: "OFB", type: "stream" }, n["aes-256-ofb"] = { cipher: "AES", key: 256, iv: 16, mode: "OFB", type: "stream" }, n["aes-128-ctr"] = { cipher: "AES", key: 128, iv: 16, mode: "CTR", type: "stream" }, n["aes-192-ctr"] = { cipher: "AES", key: 192, iv: 16, mode: "CTR", type: "stream" }, n["aes-256-ctr"] = { cipher: "AES", key: 256, iv: 16, mode: "CTR", type: "stream" }, n["aes-128-gcm"] = { cipher: "AES", key: 128, iv: 12, mode: "GCM", type: "auth" }, n["aes-192-gcm"] = { cipher: "AES", key: 192, iv: 12, mode: "GCM", type: "auth" }, n["aes-256-gcm"] = { cipher: "AES", key: 256, iv: 12, mode: "GCM", type: "auth" };
    }, {}], 15: [function (e, t, n) {
      var r = e("buffer-xor");n.encrypt = function (e, t) {
        var n = r(t, e._prev);return e._prev = e._cipher.encryptBlock(n), e._prev;
      }, n.decrypt = function (e, t) {
        var n = e._prev;e._prev = t;var i = e._cipher.decryptBlock(t);return r(i, n);
      };
    }, { "buffer-xor": 22 }], 16: [function (e, t, n) {
      (function (t) {
        function r(e, n, r) {
          var o = n.length,
              a = i(n, e._cache);return e._cache = e._cache.slice(o), e._prev = t.concat([e._prev, r ? n : a]), a;
        }var i = e("buffer-xor");n.encrypt = function (e, n, i) {
          for (var o, a = new t(""); n.length;) {
            if (0 === e._cache.length && (e._cache = e._cipher.encryptBlock(e._prev), e._prev = new t("")), !(e._cache.length <= n.length)) {
              a = t.concat([a, r(e, n, i)]);break;
            }o = e._cache.length, a = t.concat([a, r(e, n.slice(0, o), i)]), n = n.slice(o);
          }return a;
        };
      }).call(this, e("buffer").Buffer);
    }, { buffer: 179, "buffer-xor": 22 }], 17: [function (e, t, n) {
      (function (e) {
        function t(e, t, n) {
          for (var i, o, a, s = -1, c = 8, f = 0; ++s < c;) {
            i = e._cipher.encryptBlock(e._prev), o = t & 1 << 7 - s ? 128 : 0, a = i[0] ^ o, f += (128 & a) >> s % 8, e._prev = r(e._prev, n ? o : a);
          }return f;
        }function r(t, n) {
          var r = t.length,
              i = -1,
              o = new e(t.length);for (t = e.concat([t, new e([n])]); ++i < r;) {
            o[i] = t[i] << 1 | t[i + 1] >> 7;
          }return o;
        }n.encrypt = function (n, r, i) {
          for (var o = r.length, a = new e(o), s = -1; ++s < o;) {
            a[s] = t(n, r[s], i);
          }return a;
        };
      }).call(this, e("buffer").Buffer);
    }, { buffer: 179
    }], 18: [function (e, t, n) {
      (function (e) {
        function t(t, n, r) {
          var i = t._cipher.encryptBlock(t._prev),
              o = i[0] ^ n;return t._prev = e.concat([t._prev.slice(1), new e([r ? n : o])]), o;
        }n.encrypt = function (n, r, i) {
          for (var o = r.length, a = new e(o), s = -1; ++s < o;) {
            a[s] = t(n, r[s], i);
          }return a;
        };
      }).call(this, e("buffer").Buffer);
    }, { buffer: 179 }], 19: [function (e, t, n) {
      (function (t) {
        function r(e) {
          for (var t, n = e.length; n--;) {
            if (t = e.readUInt8(n), 255 !== t) {
              t++, e.writeUInt8(t, n);break;
            }e.writeUInt8(0, n);
          }
        }function i(e) {
          var t = e._cipher.encryptBlock(e._prev);return r(e._prev), t;
        }var o = e("buffer-xor");n.encrypt = function (e, n) {
          for (; e._cache.length < n.length;) {
            e._cache = t.concat([e._cache, i(e)]);
          }var r = e._cache.slice(0, n.length);return e._cache = e._cache.slice(n.length), o(n, r);
        };
      }).call(this, e("buffer").Buffer);
    }, { buffer: 179, "buffer-xor": 22 }], 20: [function (e, t, n) {
      n.encrypt = function (e, t) {
        return e._cipher.encryptBlock(t);
      }, n.decrypt = function (e, t) {
        return e._cipher.decryptBlock(t);
      };
    }, {}], 21: [function (e, t, n) {
      (function (t) {
        function r(e) {
          return e._prev = e._cipher.encryptBlock(e._prev), e._prev;
        }var i = e("buffer-xor");n.encrypt = function (e, n) {
          for (; e._cache.length < n.length;) {
            e._cache = t.concat([e._cache, r(e)]);
          }var o = e._cache.slice(0, n.length);return e._cache = e._cache.slice(n.length), i(n, o);
        };
      }).call(this, e("buffer").Buffer);
    }, { buffer: 179, "buffer-xor": 22 }], 22: [function (e, t, n) {
      (function (e) {
        t.exports = function (t, n) {
          for (var r = Math.min(t.length, n.length), i = new e(r), o = 0; r > o; ++o) {
            i[o] = t[o] ^ n[o];
          }return i;
        };
      }).call(this, e("buffer").Buffer);
    }, { buffer: 179 }], 23: [function (e, t, n) {
      (function (n) {
        function r(e, t, a, s) {
          return this instanceof r ? (o.call(this), this._cipher = new i.AES(t), this._prev = new n(a.length), this._cache = new n(""), this._secCache = new n(""), this._decrypt = s, a.copy(this._prev), void (this._mode = e)) : new r(e, t, a);
        }var i = e("./aes"),
            o = e("./cipherBase"),
            a = e("inherits");a(r, o), t.exports = r, r.prototype._update = function (e) {
          return this._mode.encrypt(this, e, this._decrypt);
        }, r.prototype._final = function () {
          this._cipher.scrub();
        };
      }).call(this, e("buffer").Buffer);
    }, { "./aes": 7, "./cipherBase": 10, buffer: 179, inherits: 152 }], 24: [function (e, t, n) {
      (function (e) {
        "use strict";
        n["RSA-SHA224"] = n.sha224WithRSAEncryption = { sign: "rsa", hash: "sha224", id: new e("302d300d06096086480165030402040500041c", "hex") }, n["RSA-SHA256"] = n.sha256WithRSAEncryption = { sign: "rsa", hash: "sha256", id: new e("3031300d060960864801650304020105000420", "hex") }, n["RSA-SHA384"] = n.sha384WithRSAEncryption = { sign: "rsa", hash: "sha384", id: new e("3041300d060960864801650304020205000430", "hex") }, n["RSA-SHA512"] = n.sha512WithRSAEncryption = { sign: "rsa", hash: "sha512", id: new e("3051300d060960864801650304020305000440", "hex") }, n["RSA-SHA1"] = { sign: "rsa", hash: "sha1", id: new e("3021300906052b0e03021a05000414", "hex") }, n["ecdsa-with-SHA1"] = { sign: "ecdsa", hash: "sha1", id: new e("", "hex") }, n.DSA = n["DSA-SHA1"] = n["DSA-SHA"] = { sign: "dsa", hash: "sha1", id: new e("", "hex") }, n["DSA-SHA224"] = n["DSA-WITH-SHA224"] = { sign: "dsa", hash: "sha224", id: new e("", "hex") }, n["DSA-SHA256"] = n["DSA-WITH-SHA256"] = { sign: "dsa", hash: "sha256", id: new e("", "hex") }, n["DSA-SHA384"] = n["DSA-WITH-SHA384"] = { sign: "dsa", hash: "sha384", id: new e("", "hex") }, n["DSA-SHA512"] = n["DSA-WITH-SHA512"] = { sign: "dsa", hash: "sha512", id: new e("", "hex") }, n["DSA-RIPEMD160"] = { sign: "dsa", hash: "rmd160", id: new e("", "hex") }, n["RSA-RIPEMD160"] = n.ripemd160WithRSA = { sign: "rsa", hash: "rmd160", id: new e("3021300906052b2403020105000414", "hex") }, n["RSA-MD5"] = n.md5WithRSAEncryption = { sign: "rsa", hash: "md5", id: new e("3020300c06082a864886f70d020505000410", "hex") };
      }).call(this, e("buffer").Buffer);
    }, { buffer: 179 }], 25: [function (e, t, n) {
      (function (n) {
        function r(e) {
          d.Writable.call(this);var t = h[e];if (!t) throw new Error("Unknown message digest");this._hashType = t.hash, this._hash = c(t.hash), this._tag = t.id, this._signType = t.sign;
        }function i(e) {
          d.Writable.call(this);var t = h[e];if (!t) throw new Error("Unknown message digest");this._hash = c(t.hash), this._tag = t.id, this._signType = t.sign;
        }function o(e) {
          return new r(e);
        }function a(e) {
          return new i(e);
        }var s = e("./algos"),
            c = e("create-hash"),
            f = e("inherits"),
            u = e("./sign"),
            d = e("stream"),
            p = e("./verify"),
            h = {};Object.keys(s).forEach(function (e) {
          h[e] = h[e.toLowerCase()] = s[e];
        }), f(r, d.Writable), r.prototype._write = function (e, t, n) {
          this._hash.update(e), n();
        }, r.prototype.update = function (e, t) {
          return "string" == typeof e && (e = new n(e, t)), this._hash.update(e), this;
        }, r.prototype.sign = function (e, t) {
          this.end();var r = this._hash.digest(),
              i = u(n.concat([this._tag, r]), e, this._hashType, this._signType);return t ? i.toString(t) : i;
        }, f(i, d.Writable), i.prototype._write = function (e, t, n) {
          this._hash.update(e), n();
        }, i.prototype.update = function (e, t) {
          return "string" == typeof e && (e = new n(e, t)), this._hash.update(e), this;
        }, i.prototype.verify = function (e, t, r) {
          "string" == typeof t && (t = new n(t, r)), this.end();var i = this._hash.digest();return p(t, n.concat([this._tag, i]), e, this._signType);
        }, t.exports = { Sign: o, Verify: a, createSign: o, createVerify: a };
      }).call(this, e("buffer").Buffer);
    }, { "./algos": 24, "./sign": 70, "./verify": 71, buffer: 179, "create-hash": 96, inherits: 152, stream: 172 }], 26: [function (e, t, n) {
      "use strict";
      n["1.3.132.0.10"] = "secp256k1", n["1.3.132.0.33"] = "p224", n["1.2.840.10045.3.1.1"] = "p192", n["1.2.840.10045.3.1.7"] = "p256";
    }, {}], 27: [function (e, t, n) {
      !function (e, t) {
        "use strict";
        function n(e, t) {
          if (!e) throw new Error(t || "Assertion failed");
        }function r(e, t) {
          e.super_ = t;var n = function n() {};n.prototype = t.prototype, e.prototype = new n(), e.prototype.constructor = e;
        }function i(e, t, n) {
          return null !== e && "object" == (typeof e === "undefined" ? "undefined" : _typeof(e)) && Array.isArray(e.words) ? e : (this.sign = !1, this.words = null, this.length = 0, this.red = null, "le" !== t && "be" !== t || (n = t, t = 10), void (null !== e && this._init(e || 0, t || 10, n || "be")));
        }function o(e, t, n) {
          for (var r = 0, i = Math.min(e.length, n), o = t; i > o; o++) {
            var a = e.charCodeAt(o) - 48;r <<= 4, r |= a >= 49 && 54 >= a ? a - 49 + 10 : a >= 17 && 22 >= a ? a - 17 + 10 : 15 & a;
          }return r;
        }function a(e, t, n, r) {
          for (var i = 0, o = Math.min(e.length, n), a = t; o > a; a++) {
            var s = e.charCodeAt(a) - 48;i *= r, i += s >= 49 ? s - 49 + 10 : s >= 17 ? s - 17 + 10 : s;
          }return i;
        }function s(e, t) {
          this.name = e, this.p = new i(t, 16), this.n = this.p.bitLength(), this.k = new i(1).ishln(this.n).isub(this.p), this.tmp = this._tmp();
        }function c() {
          s.call(this, "k256", "ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffe fffffc2f");
        }function f() {
          s.call(this, "p224", "ffffffff ffffffff ffffffff ffffffff 00000000 00000000 00000001");
        }function u() {
          s.call(this, "p192", "ffffffff ffffffff ffffffff fffffffe ffffffff ffffffff");
        }function d() {
          s.call(this, "25519", "7fffffffffffffff ffffffffffffffff ffffffffffffffff ffffffffffffffed");
        }function p(e) {
          if ("string" == typeof e) {
            var t = i._prime(e);this.m = t.p, this.prime = t;
          } else this.m = e, this.prime = null;
        }function h(e) {
          p.call(this, e), this.shift = this.m.bitLength(), this.shift % 26 !== 0 && (this.shift += 26 - this.shift % 26), this.r = new i(1).ishln(this.shift), this.r2 = this.imod(this.r.sqr()), this.rinv = this.r._invmp(this.m), this.minv = this.rinv.mul(this.r).isubn(1).div(this.m), this.minv.sign = !0, this.minv = this.minv.mod(this.r);
        }"object" == (typeof e === "undefined" ? "undefined" : _typeof(e)) ? e.exports = i : t.BN = i, i.BN = i, i.wordSize = 26, i.prototype._init = function (e, t, r) {
          if ("number" == typeof e) return this._initNumber(e, t, r);if ("object" == (typeof e === "undefined" ? "undefined" : _typeof(e))) return this._initArray(e, t, r);"hex" === t && (t = 16), n(t === (0 | t) && t >= 2 && 36 >= t), e = e.toString().replace(/\s+/g, "");var i = 0;"-" === e[0] && i++, 16 === t ? this._parseHex(e, i) : this._parseBase(e, t, i), "-" === e[0] && (this.sign = !0), this.strip(), "le" === r && this._initArray(this.toArray(), t, r);
        }, i.prototype._initNumber = function (e, t, r) {
          0 > e && (this.sign = !0, e = -e), 67108864 > e ? (this.words = [67108863 & e], this.length = 1) : 4503599627370496 > e ? (this.words = [67108863 & e, e / 67108864 & 67108863], this.length = 2) : (n(9007199254740992 > e), this.words = [67108863 & e, e / 67108864 & 67108863, 1], this.length = 3), "le" === r && this._initArray(this.toArray(), t, r);
        }, i.prototype._initArray = function (e, t, r) {
          if (n("number" == typeof e.length), e.length <= 0) return this.words = [0], this.length = 1, this;this.length = Math.ceil(e.length / 3), this.words = new Array(this.length);for (var i = 0; i < this.length; i++) {
            this.words[i] = 0;
          }var o = 0;if ("be" === r) for (var i = e.length - 1, a = 0; i >= 0; i -= 3) {
            var s = e[i] | e[i - 1] << 8 | e[i - 2] << 16;this.words[a] |= s << o & 67108863, this.words[a + 1] = s >>> 26 - o & 67108863, o += 24, o >= 26 && (o -= 26, a++);
          } else if ("le" === r) for (var i = 0, a = 0; i < e.length; i += 3) {
            var s = e[i] | e[i + 1] << 8 | e[i + 2] << 16;this.words[a] |= s << o & 67108863, this.words[a + 1] = s >>> 26 - o & 67108863, o += 24, o >= 26 && (o -= 26, a++);
          }return this.strip();
        }, i.prototype._parseHex = function (e, t) {
          this.length = Math.ceil((e.length - t) / 6), this.words = new Array(this.length);for (var n = 0; n < this.length; n++) {
            this.words[n] = 0;
          }for (var r = 0, n = e.length - 6, i = 0; n >= t; n -= 6) {
            var a = o(e, n, n + 6);this.words[i] |= a << r & 67108863, this.words[i + 1] |= a >>> 26 - r & 4194303, r += 24, r >= 26 && (r -= 26, i++);
          }if (n + 6 !== t) {
            var a = o(e, t, n + 6);this.words[i] |= a << r & 67108863, this.words[i + 1] |= a >>> 26 - r & 4194303;
          }this.strip();
        }, i.prototype._parseBase = function (e, t, n) {
          this.words = [0], this.length = 1;for (var r = 0, i = 1; 67108863 >= i; i *= t) {
            r++;
          }r--, i = i / t | 0;for (var o = e.length - n, s = o % r, c = Math.min(o, o - s) + n, f = 0, u = n; c > u; u += r) {
            f = a(e, u, u + r, t), this.imuln(i), this.words[0] + f < 67108864 ? this.words[0] += f : this._iaddn(f);
          }if (0 !== s) {
            for (var d = 1, f = a(e, u, e.length, t), u = 0; s > u; u++) {
              d *= t;
            }this.imuln(d), this.words[0] + f < 67108864 ? this.words[0] += f : this._iaddn(f);
          }
        }, i.prototype.copy = function (e) {
          e.words = new Array(this.length);for (var t = 0; t < this.length; t++) {
            e.words[t] = this.words[t];
          }e.length = this.length, e.sign = this.sign, e.red = this.red;
        }, i.prototype.clone = function () {
          var e = new i(null);return this.copy(e), e;
        }, i.prototype.strip = function () {
          for (; this.length > 1 && 0 === this.words[this.length - 1];) {
            this.length--;
          }return this._normSign();
        }, i.prototype._normSign = function () {
          return 1 === this.length && 0 === this.words[0] && (this.sign = !1), this;
        }, i.prototype.inspect = function () {
          return (this.red ? "<BN-R: " : "<BN: ") + this.toString(16) + ">";
        };var l = ["", "0", "00", "000", "0000", "00000", "000000", "0000000", "00000000", "000000000", "0000000000", "00000000000", "000000000000", "0000000000000", "00000000000000", "000000000000000", "0000000000000000", "00000000000000000", "000000000000000000", "0000000000000000000", "00000000000000000000", "000000000000000000000", "0000000000000000000000", "00000000000000000000000", "000000000000000000000000", "0000000000000000000000000"],
            b = [0, 0, 25, 16, 12, 11, 10, 9, 8, 8, 7, 7, 7, 7, 6, 6, 6, 6, 6, 6, 6, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5],
            m = [0, 0, 33554432, 43046721, 16777216, 48828125, 60466176, 40353607, 16777216, 43046721, 1e7, 19487171, 35831808, 62748517, 7529536, 11390625, 16777216, 24137569, 34012224, 47045881, 64e6, 4084101, 5153632, 6436343, 7962624, 9765625, 11881376, 14348907, 17210368, 20511149, 243e5, 28629151, 33554432, 39135393, 45435424, 52521875, 60466176];i.prototype.toString = function (e, t) {
          if (e = e || 10, 16 === e || "hex" === e) {
            for (var r = "", i = 0, t = 0 | t || 1, o = 0, a = 0; a < this.length; a++) {
              var s = this.words[a],
                  c = (16777215 & (s << i | o)).toString(16);o = s >>> 24 - i & 16777215, r = 0 !== o || a !== this.length - 1 ? l[6 - c.length] + c + r : c + r, i += 2, i >= 26 && (i -= 26, a--);
            }for (0 !== o && (r = o.toString(16) + r); r.length % t !== 0;) {
              r = "0" + r;
            }return this.sign && (r = "-" + r), r;
          }if (e === (0 | e) && e >= 2 && 36 >= e) {
            var f = b[e],
                u = m[e],
                r = "",
                d = this.clone();for (d.sign = !1; 0 !== d.cmpn(0);) {
              var p = d.modn(u).toString(e);d = d.idivn(u), r = 0 !== d.cmpn(0) ? l[f - p.length] + p + r : p + r;
            }return 0 === this.cmpn(0) && (r = "0" + r), this.sign && (r = "-" + r), r;
          }n(!1, "Base should be between 2 and 36");
        }, i.prototype.toJSON = function () {
          return this.toString(16);
        }, i.prototype.toArray = function (e) {
          this.strip();var t = new Array(this.byteLength());t[0] = 0;var n = this.clone();if ("le" !== e) for (var r = 0; 0 !== n.cmpn(0); r++) {
            var i = n.andln(255);n.ishrn(8), t[t.length - r - 1] = i;
          } else for (var r = 0; 0 !== n.cmpn(0); r++) {
            var i = n.andln(255);n.ishrn(8), t[r] = i;
          }return t;
        }, Math.clz32 ? i.prototype._countBits = function (e) {
          return 32 - Math.clz32(e);
        } : i.prototype._countBits = function (e) {
          var t = e,
              n = 0;return t >= 4096 && (n += 13, t >>>= 13), t >= 64 && (n += 7, t >>>= 7), t >= 8 && (n += 4, t >>>= 4), t >= 2 && (n += 2, t >>>= 2), n + t;
        }, i.prototype._zeroBits = function (e) {
          if (0 === e) return 26;var t = e,
              n = 0;return 0 === (8191 & t) && (n += 13, t >>>= 13), 0 === (127 & t) && (n += 7, t >>>= 7), 0 === (15 & t) && (n += 4, t >>>= 4), 0 === (3 & t) && (n += 2, t >>>= 2), 0 === (1 & t) && n++, n;
        }, i.prototype.bitLength = function () {
          var e = 0,
              t = this.words[this.length - 1],
              e = this._countBits(t);return 26 * (this.length - 1) + e;
        }, i.prototype.zeroBits = function () {
          if (0 === this.cmpn(0)) return 0;for (var e = 0, t = 0; t < this.length; t++) {
            var n = this._zeroBits(this.words[t]);if (e += n, 26 !== n) break;
          }return e;
        }, i.prototype.byteLength = function () {
          return Math.ceil(this.bitLength() / 8);
        }, i.prototype.neg = function () {
          if (0 === this.cmpn(0)) return this.clone();var e = this.clone();return e.sign = !this.sign, e;
        }, i.prototype.ior = function (e) {
          for (this.sign = this.sign || e.sign; this.length < e.length;) {
            this.words[this.length++] = 0;
          }for (var t = 0; t < e.length; t++) {
            this.words[t] = this.words[t] | e.words[t];
          }return this.strip();
        }, i.prototype.or = function (e) {
          return this.length > e.length ? this.clone().ior(e) : e.clone().ior(this);
        }, i.prototype.iand = function (e) {
          this.sign = this.sign && e.sign;var t;t = this.length > e.length ? e : this;for (var n = 0; n < t.length; n++) {
            this.words[n] = this.words[n] & e.words[n];
          }return this.length = t.length, this.strip();
        }, i.prototype.and = function (e) {
          return this.length > e.length ? this.clone().iand(e) : e.clone().iand(this);
        }, i.prototype.ixor = function (e) {
          this.sign = this.sign || e.sign;var t, n;this.length > e.length ? (t = this, n = e) : (t = e, n = this);for (var r = 0; r < n.length; r++) {
            this.words[r] = t.words[r] ^ n.words[r];
          }if (this !== t) for (; r < t.length; r++) {
            this.words[r] = t.words[r];
          }return this.length = t.length, this.strip();
        }, i.prototype.xor = function (e) {
          return this.length > e.length ? this.clone().ixor(e) : e.clone().ixor(this);
        }, i.prototype.setn = function (e, t) {
          n("number" == typeof e && e >= 0);for (var r = e / 26 | 0, i = e % 26; this.length <= r;) {
            this.words[this.length++] = 0;
          }return t ? this.words[r] = this.words[r] | 1 << i : this.words[r] = this.words[r] & ~(1 << i), this.strip();
        }, i.prototype.iadd = function (e) {
          if (this.sign && !e.sign) {
            this.sign = !1;var t = this.isub(e);return this.sign = !this.sign, this._normSign();
          }if (!this.sign && e.sign) {
            e.sign = !1;var t = this.isub(e);return e.sign = !0, t._normSign();
          }var n, r;this.length > e.length ? (n = this, r = e) : (n = e, r = this);for (var i = 0, o = 0; o < r.length; o++) {
            var t = n.words[o] + r.words[o] + i;this.words[o] = 67108863 & t, i = t >>> 26;
          }for (; 0 !== i && o < n.length; o++) {
            var t = n.words[o] + i;this.words[o] = 67108863 & t, i = t >>> 26;
          }if (this.length = n.length, 0 !== i) this.words[this.length] = i, this.length++;else if (n !== this) for (; o < n.length; o++) {
            this.words[o] = n.words[o];
          }return this;
        }, i.prototype.add = function (e) {
          if (e.sign && !this.sign) {
            e.sign = !1;var t = this.sub(e);return e.sign = !0, t;
          }if (!e.sign && this.sign) {
            this.sign = !1;var t = e.sub(this);return this.sign = !0, t;
          }return this.length > e.length ? this.clone().iadd(e) : e.clone().iadd(this);
        }, i.prototype.isub = function (e) {
          if (e.sign) {
            e.sign = !1;var t = this.iadd(e);return e.sign = !0, t._normSign();
          }if (this.sign) return this.sign = !1, this.iadd(e), this.sign = !0, this._normSign();var n = this.cmp(e);if (0 === n) return this.sign = !1, this.length = 1, this.words[0] = 0, this;var r, i;n > 0 ? (r = this, i = e) : (r = e, i = this);for (var o = 0, a = 0; a < i.length; a++) {
            var t = r.words[a] - i.words[a] + o;o = t >> 26, this.words[a] = 67108863 & t;
          }for (; 0 !== o && a < r.length; a++) {
            var t = r.words[a] + o;o = t >> 26, this.words[a] = 67108863 & t;
          }if (0 === o && a < r.length && r !== this) for (; a < r.length; a++) {
            this.words[a] = r.words[a];
          }return this.length = Math.max(this.length, a), r !== this && (this.sign = !0), this.strip();
        }, i.prototype.sub = function (e) {
          return this.clone().isub(e);
        }, i.prototype._smallMulTo = function (e, t) {
          t.sign = e.sign !== this.sign, t.length = this.length + e.length;for (var n = 0, r = 0; r < t.length - 1; r++) {
            for (var i = n >>> 26, o = 67108863 & n, a = Math.min(r, e.length - 1), s = Math.max(0, r - this.length + 1); a >= s; s++) {
              var c = r - s,
                  f = 0 | this.words[c],
                  u = 0 | e.words[s],
                  d = f * u,
                  p = 67108863 & d;i = i + (d / 67108864 | 0) | 0, p = p + o | 0, o = 67108863 & p, i = i + (p >>> 26) | 0;
            }t.words[r] = o, n = i;
          }return 0 !== n ? t.words[r] = n : t.length--, t.strip();
        }, i.prototype._bigMulTo = function (e, t) {
          t.sign = e.sign !== this.sign, t.length = this.length + e.length;for (var n = 0, r = 0, i = 0; i < t.length - 1; i++) {
            var o = r;r = 0;for (var a = 67108863 & n, s = Math.min(i, e.length - 1), c = Math.max(0, i - this.length + 1); s >= c; c++) {
              var f = i - c,
                  u = 0 | this.words[f],
                  d = 0 | e.words[c],
                  p = u * d,
                  h = 67108863 & p;o = o + (p / 67108864 | 0) | 0, h = h + a | 0, a = 67108863 & h, o = o + (h >>> 26) | 0, r += o >>> 26, o &= 67108863;
            }t.words[i] = a, n = o, o = r;
          }return 0 !== n ? t.words[i] = n : t.length--, t.strip();
        }, i.prototype.mulTo = function (e, t) {
          var n;return n = this.length + e.length < 63 ? this._smallMulTo(e, t) : this._bigMulTo(e, t);
        }, i.prototype.mul = function (e) {
          var t = new i(null);return t.words = new Array(this.length + e.length), this.mulTo(e, t);
        }, i.prototype.imul = function (e) {
          if (0 === this.cmpn(0) || 0 === e.cmpn(0)) return this.words[0] = 0, this.length = 1, this;var t = this.length,
              n = e.length;this.sign = e.sign !== this.sign, this.length = this.length + e.length, this.words[this.length - 1] = 0;for (var r = this.length - 2; r >= 0; r--) {
            for (var i = 0, o = 0, a = Math.min(r, n - 1), s = Math.max(0, r - t + 1); a >= s; s++) {
              var c = r - s,
                  f = this.words[c],
                  u = e.words[s],
                  d = f * u,
                  p = 67108863 & d;i += d / 67108864 | 0, p += o, o = 67108863 & p, i += p >>> 26;
            }this.words[r] = o, this.words[r + 1] += i, i = 0;
          }for (var i = 0, c = 1; c < this.length; c++) {
            var h = this.words[c] + i;this.words[c] = 67108863 & h, i = h >>> 26;
          }return this.strip();
        }, i.prototype.imuln = function (e) {
          n("number" == typeof e);for (var t = 0, r = 0; r < this.length; r++) {
            var i = this.words[r] * e,
                o = (67108863 & i) + (67108863 & t);t >>= 26, t += i / 67108864 | 0, t += o >>> 26, this.words[r] = 67108863 & o;
          }return 0 !== t && (this.words[r] = t, this.length++), this;
        }, i.prototype.muln = function (e) {
          return this.clone().imuln(e);
        }, i.prototype.sqr = function () {
          return this.mul(this);
        }, i.prototype.isqr = function () {
          return this.mul(this);
        }, i.prototype.ishln = function (e) {
          n("number" == typeof e && e >= 0);var t = e % 26,
              r = (e - t) / 26,
              i = 67108863 >>> 26 - t << 26 - t;if (0 !== t) {
            for (var o = 0, a = 0; a < this.length; a++) {
              var s = this.words[a] & i,
                  c = this.words[a] - s << t;this.words[a] = c | o, o = s >>> 26 - t;
            }o && (this.words[a] = o, this.length++);
          }if (0 !== r) {
            for (var a = this.length - 1; a >= 0; a--) {
              this.words[a + r] = this.words[a];
            }for (var a = 0; r > a; a++) {
              this.words[a] = 0;
            }this.length += r;
          }return this.strip();
        }, i.prototype.ishrn = function (e, t, r) {
          n("number" == typeof e && e >= 0);var i;i = t ? (t - t % 26) / 26 : 0;var o = e % 26,
              a = Math.min((e - o) / 26, this.length),
              s = 67108863 ^ 67108863 >>> o << o,
              c = r;if (i -= a, i = Math.max(0, i), c) {
            for (var f = 0; a > f; f++) {
              c.words[f] = this.words[f];
            }c.length = a;
          }if (0 === a) ;else if (this.length > a) {
            this.length -= a;for (var f = 0; f < this.length; f++) {
              this.words[f] = this.words[f + a];
            }
          } else this.words[0] = 0, this.length = 1;for (var u = 0, f = this.length - 1; f >= 0 && (0 !== u || f >= i); f--) {
            var d = this.words[f];this.words[f] = u << 26 - o | d >>> o, u = d & s;
          }return c && 0 !== u && (c.words[c.length++] = u), 0 === this.length && (this.words[0] = 0, this.length = 1), this.strip(), this;
        }, i.prototype.shln = function (e) {
          return this.clone().ishln(e);
        }, i.prototype.shrn = function (e) {
          return this.clone().ishrn(e);
        }, i.prototype.testn = function (e) {
          n("number" == typeof e && e >= 0);var t = e % 26,
              r = (e - t) / 26,
              i = 1 << t;if (this.length <= r) return !1;var o = this.words[r];return !!(o & i);
        }, i.prototype.imaskn = function (e) {
          n("number" == typeof e && e >= 0);var t = e % 26,
              r = (e - t) / 26;if (n(!this.sign, "imaskn works only with positive numbers"), 0 !== t && r++, this.length = Math.min(r, this.length), 0 !== t) {
            var i = 67108863 ^ 67108863 >>> t << t;this.words[this.length - 1] &= i;
          }return this.strip();
        }, i.prototype.maskn = function (e) {
          return this.clone().imaskn(e);
        }, i.prototype.iaddn = function (e) {
          return n("number" == typeof e), 0 > e ? this.isubn(-e) : this.sign ? 1 === this.length && this.words[0] < e ? (this.words[0] = e - this.words[0], this.sign = !1, this) : (this.sign = !1, this.isubn(e), this.sign = !0, this) : this._iaddn(e);
        }, i.prototype._iaddn = function (e) {
          this.words[0] += e;for (var t = 0; t < this.length && this.words[t] >= 67108864; t++) {
            this.words[t] -= 67108864, t === this.length - 1 ? this.words[t + 1] = 1 : this.words[t + 1]++;
          }return this.length = Math.max(this.length, t + 1), this;
        }, i.prototype.isubn = function (e) {
          if (n("number" == typeof e), 0 > e) return this.iaddn(-e);if (this.sign) return this.sign = !1, this.iaddn(e), this.sign = !0, this;this.words[0] -= e;for (var t = 0; t < this.length && this.words[t] < 0; t++) {
            this.words[t] += 67108864, this.words[t + 1] -= 1;
          }return this.strip();
        }, i.prototype.addn = function (e) {
          return this.clone().iaddn(e);
        }, i.prototype.subn = function (e) {
          return this.clone().isubn(e);
        }, i.prototype.iabs = function () {
          return this.sign = !1, this;
        }, i.prototype.abs = function () {
          return this.clone().iabs();
        }, i.prototype._ishlnsubmul = function (e, t, r) {
          var i,
              o = e.length + r;if (this.words.length < o) {
            for (var a = new Array(o), i = 0; i < this.length; i++) {
              a[i] = this.words[i];
            }this.words = a;
          } else i = this.length;for (this.length = Math.max(this.length, o); i < this.length; i++) {
            this.words[i] = 0;
          }for (var s = 0, i = 0; i < e.length; i++) {
            var c = this.words[i + r] + s,
                f = e.words[i] * t;c -= 67108863 & f, s = (c >> 26) - (f / 67108864 | 0), this.words[i + r] = 67108863 & c;
          }for (; i < this.length - r; i++) {
            var c = this.words[i + r] + s;s = c >> 26, this.words[i + r] = 67108863 & c;
          }if (0 === s) return this.strip();n(-1 === s), s = 0;for (var i = 0; i < this.length; i++) {
            var c = -this.words[i] + s;s = c >> 26, this.words[i] = 67108863 & c;
          }return this.sign = !0, this.strip();
        }, i.prototype._wordDiv = function (e, t) {
          var n = this.length - e.length,
              r = this.clone(),
              o = e,
              a = o.words[o.length - 1],
              s = this._countBits(a);n = 26 - s, 0 !== n && (o = o.shln(n), r.ishln(n), a = o.words[o.length - 1]);var c,
              f = r.length - o.length;if ("mod" !== t) {
            c = new i(null), c.length = f + 1, c.words = new Array(c.length);for (var u = 0; u < c.length; u++) {
              c.words[u] = 0;
            }
          }var d = r.clone()._ishlnsubmul(o, 1, f);d.sign || (r = d, c && (c.words[f] = 1));for (var p = f - 1; p >= 0; p--) {
            var h = 67108864 * r.words[o.length + p] + r.words[o.length + p - 1];for (h = Math.min(h / a | 0, 67108863), r._ishlnsubmul(o, h, p); r.sign;) {
              h--, r.sign = !1, r._ishlnsubmul(o, 1, p), 0 !== r.cmpn(0) && (r.sign = !r.sign);
            }c && (c.words[p] = h);
          }return c && c.strip(), r.strip(), "div" !== t && 0 !== n && r.ishrn(n), { div: c ? c : null, mod: r };
        }, i.prototype.divmod = function (e, t) {
          if (n(0 !== e.cmpn(0)), this.sign && !e.sign) {
            var r,
                o,
                a = this.neg().divmod(e, t);return "mod" !== t && (r = a.div.neg()), "div" !== t && (o = 0 === a.mod.cmpn(0) ? a.mod : e.sub(a.mod)), { div: r, mod: o };
          }if (!this.sign && e.sign) {
            var r,
                a = this.divmod(e.neg(), t);return "mod" !== t && (r = a.div.neg()), { div: r, mod: a.mod };
          }return this.sign && e.sign ? this.neg().divmod(e.neg(), t) : e.length > this.length || this.cmp(e) < 0 ? { div: new i(0), mod: this } : 1 === e.length ? "div" === t ? { div: this.divn(e.words[0]), mod: null } : "mod" === t ? { div: null, mod: new i(this.modn(e.words[0])) } : { div: this.divn(e.words[0]), mod: new i(this.modn(e.words[0])) } : this._wordDiv(e, t);
        }, i.prototype.div = function (e) {
          return this.divmod(e, "div").div;
        }, i.prototype.mod = function (e) {
          return this.divmod(e, "mod").mod;
        }, i.prototype.divRound = function (e) {
          var t = this.divmod(e);if (0 === t.mod.cmpn(0)) return t.div;var n = t.div.sign ? t.mod.isub(e) : t.mod,
              r = e.shrn(1),
              i = e.andln(1),
              o = n.cmp(r);return 0 > o || 1 === i && 0 === o ? t.div : t.div.sign ? t.div.isubn(1) : t.div.iaddn(1);
        }, i.prototype.modn = function (e) {
          n(67108863 >= e);for (var t = (1 << 26) % e, r = 0, i = this.length - 1; i >= 0; i--) {
            r = (t * r + this.words[i]) % e;
          }return r;
        }, i.prototype.idivn = function (e) {
          n(67108863 >= e);for (var t = 0, r = this.length - 1; r >= 0; r--) {
            var i = this.words[r] + 67108864 * t;this.words[r] = i / e | 0, t = i % e;
          }return this.strip();
        }, i.prototype.divn = function (e) {
          return this.clone().idivn(e);
        }, i.prototype.egcd = function (e) {
          n(!e.sign), n(0 !== e.cmpn(0));var t = this,
              r = e.clone();t = t.sign ? t.mod(e) : t.clone();for (var o = new i(1), a = new i(0), s = new i(0), c = new i(1), f = 0; t.isEven() && r.isEven();) {
            t.ishrn(1), r.ishrn(1), ++f;
          }for (var u = r.clone(), d = t.clone(); 0 !== t.cmpn(0);) {
            for (; t.isEven();) {
              t.ishrn(1), o.isEven() && a.isEven() ? (o.ishrn(1), a.ishrn(1)) : (o.iadd(u).ishrn(1), a.isub(d).ishrn(1));
            }for (; r.isEven();) {
              r.ishrn(1), s.isEven() && c.isEven() ? (s.ishrn(1), c.ishrn(1)) : (s.iadd(u).ishrn(1), c.isub(d).ishrn(1));
            }t.cmp(r) >= 0 ? (t.isub(r), o.isub(s), a.isub(c)) : (r.isub(t), s.isub(o), c.isub(a));
          }return { a: s, b: c, gcd: r.ishln(f) };
        }, i.prototype._invmp = function (e) {
          n(!e.sign), n(0 !== e.cmpn(0));var t = this,
              r = e.clone();t = t.sign ? t.mod(e) : t.clone();for (var o = new i(1), a = new i(0), s = r.clone(); t.cmpn(1) > 0 && r.cmpn(1) > 0;) {
            for (; t.isEven();) {
              t.ishrn(1), o.isEven() ? o.ishrn(1) : o.iadd(s).ishrn(1);
            }for (; r.isEven();) {
              r.ishrn(1), a.isEven() ? a.ishrn(1) : a.iadd(s).ishrn(1);
            }t.cmp(r) >= 0 ? (t.isub(r), o.isub(a)) : (r.isub(t), a.isub(o));
          }return 0 === t.cmpn(1) ? o : a;
        }, i.prototype.gcd = function (e) {
          if (0 === this.cmpn(0)) return e.clone();if (0 === e.cmpn(0)) return this.clone();var t = this.clone(),
              n = e.clone();t.sign = !1, n.sign = !1;for (var r = 0; t.isEven() && n.isEven(); r++) {
            t.ishrn(1), n.ishrn(1);
          }for (;;) {
            for (; t.isEven();) {
              t.ishrn(1);
            }for (; n.isEven();) {
              n.ishrn(1);
            }var i = t.cmp(n);if (0 > i) {
              var o = t;t = n, n = o;
            } else if (0 === i || 0 === n.cmpn(1)) break;t.isub(n);
          }return n.ishln(r);
        }, i.prototype.invm = function (e) {
          return this.egcd(e).a.mod(e);
        }, i.prototype.isEven = function () {
          return 0 === (1 & this.words[0]);
        }, i.prototype.isOdd = function () {
          return 1 === (1 & this.words[0]);
        }, i.prototype.andln = function (e) {
          return this.words[0] & e;
        }, i.prototype.bincn = function (e) {
          n("number" == typeof e);var t = e % 26,
              r = (e - t) / 26,
              i = 1 << t;if (this.length <= r) {
            for (var o = this.length; r + 1 > o; o++) {
              this.words[o] = 0;
            }return this.words[r] |= i, this.length = r + 1, this;
          }for (var a = i, o = r; 0 !== a && o < this.length; o++) {
            var s = this.words[o];s += a, a = s >>> 26, s &= 67108863, this.words[o] = s;
          }return 0 !== a && (this.words[o] = a, this.length++), this;
        }, i.prototype.cmpn = function (e) {
          var t = 0 > e;if (t && (e = -e), this.sign && !t) return -1;if (!this.sign && t) return 1;e &= 67108863, this.strip();var n;if (this.length > 1) n = 1;else {
            var r = this.words[0];n = r === e ? 0 : e > r ? -1 : 1;
          }return this.sign && (n = -n), n;
        }, i.prototype.cmp = function (e) {
          if (this.sign && !e.sign) return -1;if (!this.sign && e.sign) return 1;var t = this.ucmp(e);return this.sign ? -t : t;
        }, i.prototype.ucmp = function (e) {
          if (this.length > e.length) return 1;if (this.length < e.length) return -1;for (var t = 0, n = this.length - 1; n >= 0; n--) {
            var r = this.words[n],
                i = e.words[n];if (r !== i) {
              i > r ? t = -1 : r > i && (t = 1);break;
            }
          }return t;
        }, i.red = function (e) {
          return new p(e);
        }, i.prototype.toRed = function (e) {
          return n(!this.red, "Already a number in reduction context"), n(!this.sign, "red works only with positives"), e.convertTo(this)._forceRed(e);
        }, i.prototype.fromRed = function () {
          return n(this.red, "fromRed works only with numbers in reduction context"), this.red.convertFrom(this);
        }, i.prototype._forceRed = function (e) {
          return this.red = e, this;
        }, i.prototype.forceRed = function (e) {
          return n(!this.red, "Already a number in reduction context"), this._forceRed(e);
        }, i.prototype.redAdd = function (e) {
          return n(this.red, "redAdd works only with red numbers"), this.red.add(this, e);
        }, i.prototype.redIAdd = function (e) {
          return n(this.red, "redIAdd works only with red numbers"), this.red.iadd(this, e);
        }, i.prototype.redSub = function (e) {
          return n(this.red, "redSub works only with red numbers"), this.red.sub(this, e);
        }, i.prototype.redISub = function (e) {
          return n(this.red, "redISub works only with red numbers"), this.red.isub(this, e);
        }, i.prototype.redShl = function (e) {
          return n(this.red, "redShl works only with red numbers"), this.red.shl(this, e);
        }, i.prototype.redMul = function (e) {
          return n(this.red, "redMul works only with red numbers"), this.red._verify2(this, e), this.red.mul(this, e);
        }, i.prototype.redIMul = function (e) {
          return n(this.red, "redMul works only with red numbers"), this.red._verify2(this, e), this.red.imul(this, e);
        }, i.prototype.redSqr = function () {
          return n(this.red, "redSqr works only with red numbers"), this.red._verify1(this), this.red.sqr(this);
        }, i.prototype.redISqr = function () {
          return n(this.red, "redISqr works only with red numbers"), this.red._verify1(this), this.red.isqr(this);
        }, i.prototype.redSqrt = function () {
          return n(this.red, "redSqrt works only with red numbers"), this.red._verify1(this), this.red.sqrt(this);
        }, i.prototype.redInvm = function () {
          return n(this.red, "redInvm works only with red numbers"), this.red._verify1(this), this.red.invm(this);
        }, i.prototype.redNeg = function () {
          return n(this.red, "redNeg works only with red numbers"), this.red._verify1(this), this.red.neg(this);
        }, i.prototype.redPow = function (e) {
          return n(this.red && !e.red, "redPow(normalNum)"), this.red._verify1(this), this.red.pow(this, e);
        };var v = { k256: null, p224: null, p192: null, p25519: null };s.prototype._tmp = function () {
          var e = new i(null);return e.words = new Array(Math.ceil(this.n / 13)), e;
        }, s.prototype.ireduce = function (e) {
          var t,
              n = e;do {
            this.split(n, this.tmp), n = this.imulK(n), n = n.iadd(this.tmp), t = n.bitLength();
          } while (t > this.n);var r = t < this.n ? -1 : n.ucmp(this.p);return 0 === r ? (n.words[0] = 0, n.length = 1) : r > 0 ? n.isub(this.p) : n.strip(), n;
        }, s.prototype.split = function (e, t) {
          e.ishrn(this.n, 0, t);
        }, s.prototype.imulK = function (e) {
          return e.imul(this.k);
        }, r(c, s), c.prototype.split = function (e, t) {
          for (var n = 4194303, r = Math.min(e.length, 9), i = 0; r > i; i++) {
            t.words[i] = e.words[i];
          }if (t.length = r, e.length <= 9) return e.words[0] = 0, void (e.length = 1);var o = e.words[9];t.words[t.length++] = o & n;for (var i = 10; i < e.length; i++) {
            var a = e.words[i];e.words[i - 10] = (a & n) << 4 | o >>> 22, o = a;
          }e.words[i - 10] = o >>> 22, e.length -= 9;
        }, c.prototype.imulK = function (e) {
          e.words[e.length] = 0, e.words[e.length + 1] = 0, e.length += 2;for (var t, n = 0, r = 0; r < e.length; r++) {
            var i = e.words[r];t = 64 * i, n += 977 * i, t += n / 67108864 | 0, n &= 67108863, e.words[r] = n, n = t;
          }return 0 === e.words[e.length - 1] && (e.length--, 0 === e.words[e.length - 1] && e.length--), e;
        }, r(f, s), r(u, s), r(d, s), d.prototype.imulK = function (e) {
          for (var t = 0, n = 0; n < e.length; n++) {
            var r = 19 * e.words[n] + t,
                i = 67108863 & r;r >>>= 26, e.words[n] = i, t = r;
          }return 0 !== t && (e.words[e.length++] = t), e;
        }, i._prime = function g(e) {
          if (v[e]) return v[e];var g;if ("k256" === e) g = new c();else if ("p224" === e) g = new f();else if ("p192" === e) g = new u();else {
            if ("p25519" !== e) throw new Error("Unknown prime " + e);g = new d();
          }return v[e] = g, g;
        }, p.prototype._verify1 = function (e) {
          n(!e.sign, "red works only with positives"), n(e.red, "red works only with red numbers");
        }, p.prototype._verify2 = function (e, t) {
          n(!e.sign && !t.sign, "red works only with positives"), n(e.red && e.red === t.red, "red works only with red numbers");
        }, p.prototype.imod = function (e) {
          return this.prime ? this.prime.ireduce(e)._forceRed(this) : e.mod(this.m)._forceRed(this);
        }, p.prototype.neg = function (e) {
          var t = e.clone();return t.sign = !t.sign, t.iadd(this.m)._forceRed(this);
        }, p.prototype.add = function (e, t) {
          this._verify2(e, t);var n = e.add(t);return n.cmp(this.m) >= 0 && n.isub(this.m), n._forceRed(this);
        }, p.prototype.iadd = function (e, t) {
          this._verify2(e, t);var n = e.iadd(t);return n.cmp(this.m) >= 0 && n.isub(this.m), n;
        }, p.prototype.sub = function (e, t) {
          this._verify2(e, t);var n = e.sub(t);return n.cmpn(0) < 0 && n.iadd(this.m), n._forceRed(this);
        }, p.prototype.isub = function (e, t) {
          this._verify2(e, t);var n = e.isub(t);return n.cmpn(0) < 0 && n.iadd(this.m), n;
        }, p.prototype.shl = function (e, t) {
          return this._verify1(e), this.imod(e.shln(t));
        }, p.prototype.imul = function (e, t) {
          return this._verify2(e, t), this.imod(e.imul(t));
        }, p.prototype.mul = function (e, t) {
          return this._verify2(e, t), this.imod(e.mul(t));
        }, p.prototype.isqr = function (e) {
          return this.imul(e, e);
        }, p.prototype.sqr = function (e) {
          return this.mul(e, e);
        }, p.prototype.sqrt = function (e) {
          if (0 === e.cmpn(0)) return e.clone();var t = this.m.andln(3);if (n(t % 2 === 1), 3 === t) {
            var r = this.m.add(new i(1)).ishrn(2),
                o = this.pow(e, r);return o;
          }for (var a = this.m.subn(1), s = 0; 0 !== a.cmpn(0) && 0 === a.andln(1);) {
            s++, a.ishrn(1);
          }n(0 !== a.cmpn(0));var c = new i(1).toRed(this),
              f = c.redNeg(),
              u = this.m.subn(1).ishrn(1),
              d = this.m.bitLength();for (d = new i(2 * d * d).toRed(this); 0 !== this.pow(d, u).cmp(f);) {
            d.redIAdd(f);
          }for (var p = this.pow(d, a), o = this.pow(e, a.addn(1).ishrn(1)), h = this.pow(e, a), l = s; 0 !== h.cmp(c);) {
            for (var b = h, m = 0; 0 !== b.cmp(c); m++) {
              b = b.redSqr();
            }n(l > m);var v = this.pow(p, new i(1).ishln(l - m - 1));o = o.redMul(v), p = v.redSqr(), h = h.redMul(p), l = m;
          }return o;
        }, p.prototype.invm = function (e) {
          var t = e._invmp(this.m);return t.sign ? (t.sign = !1, this.imod(t).redNeg()) : this.imod(t);
        }, p.prototype.pow = function (e, t) {
          var n = [];if (0 === t.cmpn(0)) return new i(1);for (var r = t.clone(); 0 !== r.cmpn(0);) {
            n.push(r.andln(1)), r.ishrn(1);
          }for (var o = e, a = 0; a < n.length && 0 === n[a]; a++, o = this.sqr(o)) {}if (++a < n.length) for (var r = this.sqr(o); a < n.length; a++, r = this.sqr(r)) {
            0 !== n[a] && (o = this.mul(o, r));
          }return o;
        }, p.prototype.convertTo = function (e) {
          var t = e.mod(this.m);return t === e ? t.clone() : t;
        }, p.prototype.convertFrom = function (e) {
          var t = e.clone();return t.red = null, t;
        }, i.mont = function (e) {
          return new h(e);
        }, r(h, p), h.prototype.convertTo = function (e) {
          return this.imod(e.shln(this.shift));
        }, h.prototype.convertFrom = function (e) {
          var t = this.imod(e.mul(this.rinv));return t.red = null, t;
        }, h.prototype.imul = function (e, t) {
          if (0 === e.cmpn(0) || 0 === t.cmpn(0)) return e.words[0] = 0, e.length = 1, e;var n = e.imul(t),
              r = n.maskn(this.shift).mul(this.minv).imaskn(this.shift).mul(this.m),
              i = n.isub(r).ishrn(this.shift),
              o = i;return i.cmp(this.m) >= 0 ? o = i.isub(this.m) : i.cmpn(0) < 0 && (o = i.iadd(this.m)), o._forceRed(this);
        }, h.prototype.mul = function (e, t) {
          if (0 === e.cmpn(0) || 0 === t.cmpn(0)) return new i(0)._forceRed(this);var n = e.mul(t),
              r = n.maskn(this.shift).mul(this.minv).imaskn(this.shift).mul(this.m),
              o = n.isub(r).ishrn(this.shift),
              a = o;return o.cmp(this.m) >= 0 ? a = o.isub(this.m) : o.cmpn(0) < 0 && (a = o.iadd(this.m)), a._forceRed(this);
        }, h.prototype.invm = function (e) {
          var t = this.imod(e._invmp(this.m).mul(this.r2));return t._forceRed(this);
        };
      }("undefined" == typeof t || t, this);
    }, {}], 28: [function (e, t, n) {
      (function (n) {
        function r(e) {
          var t = o(e),
              n = t.toRed(a.mont(e.modulus)).redPow(new a(e.publicExponent)).fromRed();return { blinder: n, unblinder: t.invm(e.modulus) };
        }function i(e, t) {
          var i = r(t),
              o = t.modulus.byteLength(),
              s = (a.mont(t.modulus), new a(e).mul(i.blinder).mod(t.modulus)),
              c = s.toRed(a.mont(t.prime1)),
              f = s.toRed(a.mont(t.prime2)),
              u = t.coefficient,
              d = t.prime1,
              p = t.prime2,
              h = c.redPow(t.exponent1),
              l = f.redPow(t.exponent2);
          h = h.fromRed(), l = l.fromRed();var b = h.isub(l).imul(u).mod(d);b.imul(p), l.iadd(b);var m = new n(l.imul(i.unblinder).mod(t.modulus).toArray());if (m.length < o) {
            var v = new n(o - m.length);v.fill(0), m = n.concat([v, m], o);
          }return m;
        }function o(e) {
          for (var t = e.modulus.byteLength(), n = new a(s(t)); n.cmp(e.modulus) >= 0 || !n.mod(e.prime1) || !n.mod(e.prime2);) {
            n = new a(s(t));
          }return n;
        }var a = e("bn.js"),
            s = e("randombytes");t.exports = i, i.getr = o;
      }).call(this, e("buffer").Buffer);
    }, { "bn.js": 27, buffer: 179, randombytes: 145 }], 29: [function (e, t, n) {
      "use strict";
      var r = n;r.version = e("../package.json").version, r.utils = e("./elliptic/utils"), r.rand = e("brorand"), r.hmacDRBG = e("./elliptic/hmac-drbg"), r.curve = e("./elliptic/curve"), r.curves = e("./elliptic/curves"), r.ec = e("./elliptic/ec");
    }, { "../package.json": 49, "./elliptic/curve": 32, "./elliptic/curves": 35, "./elliptic/ec": 36, "./elliptic/hmac-drbg": 39, "./elliptic/utils": 41, brorand: 42 }], 30: [function (e, t, n) {
      "use strict";
      function r(e, t) {
        this.type = e, this.p = new o(t.p, 16), this.red = t.prime ? o.red(t.prime) : o.mont(this.p), this.zero = new o(0).toRed(this.red), this.one = new o(1).toRed(this.red), this.two = new o(2).toRed(this.red), this.n = t.n && new o(t.n, 16), this.g = t.g && this.pointFromJSON(t.g, t.gRed), this._wnafT1 = new Array(4), this._wnafT2 = new Array(4), this._wnafT3 = new Array(4), this._wnafT4 = new Array(4);
      }function i(e, t) {
        this.curve = e, this.type = t, this.precomputed = null;
      }var o = e("bn.js"),
          a = e("../../elliptic"),
          s = a.utils.getNAF,
          c = a.utils.getJSF,
          f = a.utils.assert;t.exports = r, r.prototype.point = function () {
        throw new Error("Not implemented");
      }, r.prototype.validate = function () {
        throw new Error("Not implemented");
      }, r.prototype._fixedNafMul = function (e, t) {
        f(e.precomputed);var n = e._getDoubles(),
            r = s(t, 1),
            i = (1 << n.step + 1) - (n.step % 2 === 0 ? 2 : 1);i /= 3;for (var o = [], a = 0; a < r.length; a += n.step) {
          for (var c = 0, t = a + n.step - 1; t >= a; t--) {
            c = (c << 1) + r[t];
          }o.push(c);
        }for (var u = this.jpoint(null, null, null), d = this.jpoint(null, null, null), p = i; p > 0; p--) {
          for (var a = 0; a < o.length; a++) {
            var c = o[a];c === p ? d = d.mixedAdd(n.points[a]) : c === -p && (d = d.mixedAdd(n.points[a].neg()));
          }u = u.add(d);
        }return u.toP();
      }, r.prototype._wnafMul = function (e, t) {
        var n = 4,
            r = e._getNAFPoints(n);n = r.wnd;for (var i = r.points, o = s(t, n), a = this.jpoint(null, null, null), c = o.length - 1; c >= 0; c--) {
          for (var t = 0; c >= 0 && 0 === o[c]; c--) {
            t++;
          }if (c >= 0 && t++, a = a.dblp(t), 0 > c) break;var u = o[c];f(0 !== u), a = "affine" === e.type ? u > 0 ? a.mixedAdd(i[u - 1 >> 1]) : a.mixedAdd(i[-u - 1 >> 1].neg()) : u > 0 ? a.add(i[u - 1 >> 1]) : a.add(i[-u - 1 >> 1].neg());
        }return "affine" === e.type ? a.toP() : a;
      }, r.prototype._wnafMulAdd = function (e, t, n, r) {
        for (var i = this._wnafT1, o = this._wnafT2, a = this._wnafT3, f = 0, u = 0; r > u; u++) {
          var d = t[u],
              p = d._getNAFPoints(e);i[u] = p.wnd, o[u] = p.points;
        }for (var u = r - 1; u >= 1; u -= 2) {
          var h = u - 1,
              l = u;if (1 === i[h] && 1 === i[l]) {
            var b = [t[h], null, null, t[l]];0 === t[h].y.cmp(t[l].y) ? (b[1] = t[h].add(t[l]), b[2] = t[h].toJ().mixedAdd(t[l].neg())) : 0 === t[h].y.cmp(t[l].y.redNeg()) ? (b[1] = t[h].toJ().mixedAdd(t[l]), b[2] = t[h].add(t[l].neg())) : (b[1] = t[h].toJ().mixedAdd(t[l]), b[2] = t[h].toJ().mixedAdd(t[l].neg()));var m = [-3, -1, -5, -7, 0, 7, 5, 1, 3],
                v = c(n[h], n[l]);f = Math.max(v[0].length, f), a[h] = new Array(f), a[l] = new Array(f);for (var g = 0; f > g; g++) {
              var y = 0 | v[0][g],
                  w = 0 | v[1][g];a[h][g] = m[3 * (y + 1) + (w + 1)], a[l][g] = 0, o[h] = b;
            }
          } else a[h] = s(n[h], i[h]), a[l] = s(n[l], i[l]), f = Math.max(a[h].length, f), f = Math.max(a[l].length, f);
        }for (var _ = this.jpoint(null, null, null), x = this._wnafT4, u = f; u >= 0; u--) {
          for (var E = 0; u >= 0;) {
            for (var S = !0, g = 0; r > g; g++) {
              x[g] = 0 | a[g][u], 0 !== x[g] && (S = !1);
            }if (!S) break;E++, u--;
          }if (u >= 0 && E++, _ = _.dblp(E), 0 > u) break;for (var g = 0; r > g; g++) {
            var d,
                k = x[g];0 !== k && (k > 0 ? d = o[g][k - 1 >> 1] : 0 > k && (d = o[g][-k - 1 >> 1].neg()), _ = "affine" === d.type ? _.mixedAdd(d) : _.add(d));
          }
        }for (var u = 0; r > u; u++) {
          o[u] = null;
        }return _.toP();
      }, r.BasePoint = i, i.prototype.validate = function () {
        return this.curve.validate(this);
      }, i.prototype.precompute = function (e) {
        if (this.precomputed) return this;var t = { doubles: null, naf: null, beta: null };return t.naf = this._getNAFPoints(8), t.doubles = this._getDoubles(4, e), t.beta = this._getBeta(), this.precomputed = t, this;
      }, i.prototype._hasDoubles = function (e) {
        if (!this.precomputed) return !1;var t = this.precomputed.doubles;return t ? t.points.length >= Math.ceil((e.bitLength() + 1) / t.step) : !1;
      }, i.prototype._getDoubles = function (e, t) {
        if (this.precomputed && this.precomputed.doubles) return this.precomputed.doubles;for (var n = [this], r = this, i = 0; t > i; i += e) {
          for (var o = 0; e > o; o++) {
            r = r.dbl();
          }n.push(r);
        }return { step: e, points: n };
      }, i.prototype._getNAFPoints = function (e) {
        if (this.precomputed && this.precomputed.naf) return this.precomputed.naf;for (var t = [this], n = (1 << e) - 1, r = 1 === n ? null : this.dbl(), i = 1; n > i; i++) {
          t[i] = t[i - 1].add(r);
        }return { wnd: e, points: t };
      }, i.prototype._getBeta = function () {
        return null;
      }, i.prototype.dblp = function (e) {
        for (var t = this, n = 0; e > n; n++) {
          t = t.dbl();
        }return t;
      };
    }, { "../../elliptic": 29, "bn.js": 27 }], 31: [function (e, t, n) {
      "use strict";
      function r(e) {
        this.twisted = 1 !== (0 | e.a), this.mOneA = this.twisted && -1 === (0 | e.a), this.extended = this.mOneA, f.call(this, "edwards", e), this.a = new s(e.a, 16).mod(this.red.m).toRed(this.red), this.c = new s(e.c, 16).toRed(this.red), this.c2 = this.c.redSqr(), this.d = new s(e.d, 16).toRed(this.red), this.dd = this.d.redAdd(this.d), u(!this.twisted || 0 === this.c.fromRed().cmpn(1)), this.oneC = 1 === (0 | e.c);
      }function i(e, t, n, r, i) {
        f.BasePoint.call(this, e, "projective"), null === t && null === n && null === r ? (this.x = this.curve.zero, this.y = this.curve.one, this.z = this.curve.one, this.t = this.curve.zero, this.zOne = !0) : (this.x = new s(t, 16), this.y = new s(n, 16), this.z = r ? new s(r, 16) : this.curve.one, this.t = i && new s(i, 16), this.x.red || (this.x = this.x.toRed(this.curve.red)), this.y.red || (this.y = this.y.toRed(this.curve.red)), this.z.red || (this.z = this.z.toRed(this.curve.red)), this.t && !this.t.red && (this.t = this.t.toRed(this.curve.red)), this.zOne = this.z === this.curve.one, this.curve.extended && !this.t && (this.t = this.x.redMul(this.y), this.zOne || (this.t = this.t.redMul(this.z.redInvm()))));
      }var o = e("../curve"),
          a = e("../../elliptic"),
          s = e("bn.js"),
          c = e("inherits"),
          f = o.base,
          u = a.utils.assert;c(r, f), t.exports = r, r.prototype._mulA = function (e) {
        return this.mOneA ? e.redNeg() : this.a.redMul(e);
      }, r.prototype._mulC = function (e) {
        return this.oneC ? e : this.c.redMul(e);
      }, r.prototype.jpoint = function (e, t, n, r) {
        return this.point(e, t, n, r);
      }, r.prototype.pointFromX = function (e, t) {
        t = new s(t, 16), t.red || (t = t.toRed(this.red));var n = t.redSqr(),
            r = this.c2.redSub(this.a.redMul(n)),
            i = this.one.redSub(this.c2.redMul(this.d).redMul(n)),
            a = r.redMul(i.redInvm()).redSqrt(),
            c = a.fromRed().isOdd();return (e && !c || !e && c) && (a = a.redNeg()), this.point(t, a, o.one);
      }, r.prototype.validate = function (e) {
        if (e.isInfinity()) return !0;e.normalize();var t = e.x.redSqr(),
            n = e.y.redSqr(),
            r = t.redMul(this.a).redAdd(n),
            i = this.c2.redMul(this.one.redAdd(this.d.redMul(t).redMul(n)));return 0 === r.cmp(i);
      }, c(i, f.BasePoint), r.prototype.pointFromJSON = function (e) {
        return i.fromJSON(this, e);
      }, r.prototype.point = function (e, t, n, r) {
        return new i(this, e, t, n, r);
      }, i.fromJSON = function (e, t) {
        return new i(e, t[0], t[1], t[2]);
      }, i.prototype.inspect = function () {
        return this.isInfinity() ? "<EC Point Infinity>" : "<EC Point x: " + this.x.fromRed().toString(16, 2) + " y: " + this.y.fromRed().toString(16, 2) + " z: " + this.z.fromRed().toString(16, 2) + ">";
      }, i.prototype.isInfinity = function () {
        return 0 === this.x.cmpn(0) && 0 === this.y.cmp(this.z);
      }, i.prototype._extDbl = function () {
        var e = this.x.redSqr(),
            t = this.y.redSqr(),
            n = this.z.redSqr();n = n.redIAdd(n);var r = this.curve._mulA(e),
            i = this.x.redAdd(this.y).redSqr().redISub(e).redISub(t),
            o = r.redAdd(t),
            a = o.redSub(n),
            s = r.redSub(t),
            c = i.redMul(a),
            f = o.redMul(s),
            u = i.redMul(s),
            d = a.redMul(o);return this.curve.point(c, f, d, u);
      }, i.prototype._projDbl = function () {
        var e,
            t,
            n,
            r = this.x.redAdd(this.y).redSqr(),
            i = this.x.redSqr(),
            o = this.y.redSqr();if (this.curve.twisted) {
          var a = this.curve._mulA(i),
              s = a.redAdd(o);if (this.zOne) e = r.redSub(i).redSub(o).redMul(s.redSub(this.curve.two)), t = s.redMul(a.redSub(o)), n = s.redSqr().redSub(s).redSub(s);else {
            var c = this.z.redSqr(),
                f = s.redSub(c).redISub(c);e = r.redSub(i).redISub(o).redMul(f), t = s.redMul(a.redSub(o)), n = s.redMul(f);
          }
        } else {
          var a = i.redAdd(o),
              c = this.curve._mulC(this.c.redMul(this.z)).redSqr(),
              f = a.redSub(c).redSub(c);e = this.curve._mulC(r.redISub(a)).redMul(f), t = this.curve._mulC(a).redMul(i.redISub(o)), n = a.redMul(f);
        }return this.curve.point(e, t, n);
      }, i.prototype.dbl = function () {
        return this.isInfinity() ? this : this.curve.extended ? this._extDbl() : this._projDbl();
      }, i.prototype._extAdd = function (e) {
        var t = this.y.redSub(this.x).redMul(e.y.redSub(e.x)),
            n = this.y.redAdd(this.x).redMul(e.y.redAdd(e.x)),
            r = this.t.redMul(this.curve.dd).redMul(e.t),
            i = this.z.redMul(e.z.redAdd(e.z)),
            o = n.redSub(t),
            a = i.redSub(r),
            s = i.redAdd(r),
            c = n.redAdd(t),
            f = o.redMul(a),
            u = s.redMul(c),
            d = o.redMul(c),
            p = a.redMul(s);return this.curve.point(f, u, p, d);
      }, i.prototype._projAdd = function (e) {
        var t,
            n,
            r = this.z.redMul(e.z),
            i = r.redSqr(),
            o = this.x.redMul(e.x),
            a = this.y.redMul(e.y),
            s = this.curve.d.redMul(o).redMul(a),
            c = i.redSub(s),
            f = i.redAdd(s),
            u = this.x.redAdd(this.y).redMul(e.x.redAdd(e.y)).redISub(o).redISub(a),
            d = r.redMul(c).redMul(u);return this.curve.twisted ? (t = r.redMul(f).redMul(a.redSub(this.curve._mulA(o))), n = c.redMul(f)) : (t = r.redMul(f).redMul(a.redSub(o)), n = this.curve._mulC(c).redMul(f)), this.curve.point(d, t, n);
      }, i.prototype.add = function (e) {
        return this.isInfinity() ? e : e.isInfinity() ? this : this.curve.extended ? this._extAdd(e) : this._projAdd(e);
      }, i.prototype.mul = function (e) {
        return this._hasDoubles(e) ? this.curve._fixedNafMul(this, e) : this.curve._wnafMul(this, e);
      }, i.prototype.mulAdd = function (e, t, n) {
        return this.curve._wnafMulAdd(1, [this, t], [e, n], 2);
      }, i.prototype.normalize = function () {
        if (this.zOne) return this;var e = this.z.redInvm();return this.x = this.x.redMul(e), this.y = this.y.redMul(e), this.t && (this.t = this.t.redMul(e)), this.z = this.curve.one, this.zOne = !0, this;
      }, i.prototype.neg = function () {
        return this.curve.point(this.x.redNeg(), this.y, this.z, this.t && this.t.redNeg());
      }, i.prototype.getX = function () {
        return this.normalize(), this.x.fromRed();
      }, i.prototype.getY = function () {
        return this.normalize(), this.y.fromRed();
      }, i.prototype.toP = i.prototype.normalize, i.prototype.mixedAdd = i.prototype.add;
    }, { "../../elliptic": 29, "../curve": 32, "bn.js": 27, inherits: 152 }], 32: [function (e, t, n) {
      "use strict";
      var r = n;r.base = e("./base"), r["short"] = e("./short"), r.mont = e("./mont"), r.edwards = e("./edwards");
    }, { "./base": 30, "./edwards": 31, "./mont": 33, "./short": 34 }], 33: [function (e, t, n) {
      "use strict";
      function r(e) {
        c.call(this, "mont", e), this.a = new a(e.a, 16).toRed(this.red), this.b = new a(e.b, 16).toRed(this.red), this.i4 = new a(4).toRed(this.red).redInvm(), this.two = new a(2).toRed(this.red), this.a24 = this.i4.redMul(this.a.redAdd(this.two));
      }function i(e, t, n) {
        c.BasePoint.call(this, e, "projective"), null === t && null === n ? (this.x = this.curve.one, this.z = this.curve.zero) : (this.x = new a(t, 16), this.z = new a(n, 16), this.x.red || (this.x = this.x.toRed(this.curve.red)), this.z.red || (this.z = this.z.toRed(this.curve.red)));
      }var o = e("../curve"),
          a = e("bn.js"),
          s = e("inherits"),
          c = o.base;s(r, c), t.exports = r, r.prototype.validate = function (e) {
        var t = e.normalize().x,
            n = t.redSqr(),
            r = n.redMul(t).redAdd(n.redMul(this.a)).redAdd(t),
            i = r.redSqrt();return 0 === i.redSqr().cmp(r);
      }, s(i, c.BasePoint), r.prototype.point = function (e, t) {
        return new i(this, e, t);
      }, r.prototype.pointFromJSON = function (e) {
        return i.fromJSON(this, e);
      }, i.prototype.precompute = function () {}, i.fromJSON = function (e, t) {
        return new i(e, t[0], t[1] || e.one);
      }, i.prototype.inspect = function () {
        return this.isInfinity() ? "<EC Point Infinity>" : "<EC Point x: " + this.x.fromRed().toString(16, 2) + " z: " + this.z.fromRed().toString(16, 2) + ">";
      }, i.prototype.isInfinity = function () {
        return 0 === this.z.cmpn(0);
      }, i.prototype.dbl = function () {
        var e = this.x.redAdd(this.z),
            t = e.redSqr(),
            n = this.x.redSub(this.z),
            r = n.redSqr(),
            i = t.redSub(r),
            o = t.redMul(r),
            a = i.redMul(r.redAdd(this.curve.a24.redMul(i)));return this.curve.point(o, a);
      }, i.prototype.add = function () {
        throw new Error("Not supported on Montgomery curve");
      }, i.prototype.diffAdd = function (e, t) {
        var n = this.x.redAdd(this.z),
            r = this.x.redSub(this.z),
            i = e.x.redAdd(e.z),
            o = e.x.redSub(e.z),
            a = o.redMul(n),
            s = i.redMul(r),
            c = t.z.redMul(a.redAdd(s).redSqr()),
            f = t.x.redMul(a.redISub(s).redSqr());return this.curve.point(c, f);
      }, i.prototype.mul = function (e) {
        for (var t = e.clone(), n = this, r = this.curve.point(null, null), i = this, o = []; 0 !== t.cmpn(0); t.ishrn(1)) {
          o.push(t.andln(1));
        }for (var a = o.length - 1; a >= 0; a--) {
          0 === o[a] ? (n = n.diffAdd(r, i), r = r.dbl()) : (r = n.diffAdd(r, i), n = n.dbl());
        }return r;
      }, i.prototype.mulAdd = function () {
        throw new Error("Not supported on Montgomery curve");
      }, i.prototype.normalize = function () {
        return this.x = this.x.redMul(this.z.redInvm()), this.z = this.curve.one, this;
      }, i.prototype.getX = function () {
        return this.normalize(), this.x.fromRed();
      };
    }, { "../curve": 32, "bn.js": 27, inherits: 152 }], 34: [function (e, t, n) {
      "use strict";
      function r(e) {
        u.call(this, "short", e), this.a = new c(e.a, 16).toRed(this.red), this.b = new c(e.b, 16).toRed(this.red), this.tinv = this.two.redInvm(), this.zeroA = 0 === this.a.fromRed().cmpn(0), this.threeA = 0 === this.a.fromRed().sub(this.p).cmpn(-3), this.endo = this._getEndomorphism(e), this._endoWnafT1 = new Array(4), this._endoWnafT2 = new Array(4);
      }function i(e, t, n, r) {
        u.BasePoint.call(this, e, "affine"), null === t && null === n ? (this.x = null, this.y = null, this.inf = !0) : (this.x = new c(t, 16), this.y = new c(n, 16), r && (this.x.forceRed(this.curve.red), this.y.forceRed(this.curve.red)), this.x.red || (this.x = this.x.toRed(this.curve.red)), this.y.red || (this.y = this.y.toRed(this.curve.red)), this.inf = !1);
      }function o(e, t, n, r) {
        u.BasePoint.call(this, e, "jacobian"), null === t && null === n && null === r ? (this.x = this.curve.one, this.y = this.curve.one, this.z = new c(0)) : (this.x = new c(t, 16), this.y = new c(n, 16), this.z = new c(r, 16)), this.x.red || (this.x = this.x.toRed(this.curve.red)), this.y.red || (this.y = this.y.toRed(this.curve.red)), this.z.red || (this.z = this.z.toRed(this.curve.red)), this.zOne = this.z === this.curve.one;
      }var a = e("../curve"),
          s = e("../../elliptic"),
          c = e("bn.js"),
          f = e("inherits"),
          u = a.base,
          d = s.utils.assert;f(r, u), t.exports = r, r.prototype._getEndomorphism = function (e) {
        if (this.zeroA && this.g && this.n && 1 === this.p.modn(3)) {
          var t, n;if (e.beta) t = new c(e.beta, 16).toRed(this.red);else {
            var r = this._getEndoRoots(this.p);t = r[0].cmp(r[1]) < 0 ? r[0] : r[1], t = t.toRed(this.red);
          }if (e.lambda) n = new c(e.lambda, 16);else {
            var i = this._getEndoRoots(this.n);0 === this.g.mul(i[0]).x.cmp(this.g.x.redMul(t)) ? n = i[0] : (n = i[1], d(0 === this.g.mul(n).x.cmp(this.g.x.redMul(t))));
          }var o;return o = e.basis ? e.basis.map(function (e) {
            return { a: new c(e.a, 16), b: new c(e.b, 16) };
          }) : this._getEndoBasis(n), { beta: t, lambda: n, basis: o };
        }
      }, r.prototype._getEndoRoots = function (e) {
        var t = e === this.p ? this.red : c.mont(e),
            n = new c(2).toRed(t).redInvm(),
            r = n.redNeg(),
            i = new c(3).toRed(t).redNeg().redSqrt().redMul(n),
            o = r.redAdd(i).fromRed(),
            a = r.redSub(i).fromRed();return [o, a];
      }, r.prototype._getEndoBasis = function (e) {
        for (var t, n, r, i, o, a, s, f, u, d = this.n.shrn(Math.floor(this.n.bitLength() / 2)), p = e, h = this.n.clone(), l = new c(1), b = new c(0), m = new c(0), v = new c(1), g = 0; 0 !== p.cmpn(0);) {
          var y = h.div(p);f = h.sub(y.mul(p)), u = m.sub(y.mul(l));var w = v.sub(y.mul(b));if (!r && f.cmp(d) < 0) t = s.neg(), n = l, r = f.neg(), i = u;else if (r && 2 === ++g) break;s = f, h = p, p = f, m = l, l = u, v = b, b = w;
        }o = f.neg(), a = u;var _ = r.sqr().add(i.sqr()),
            x = o.sqr().add(a.sqr());return x.cmp(_) >= 0 && (o = t, a = n), r.sign && (r = r.neg(), i = i.neg()), o.sign && (o = o.neg(), a = a.neg()), [{ a: r, b: i }, { a: o, b: a }];
      }, r.prototype._endoSplit = function (e) {
        var t = this.endo.basis,
            n = t[0],
            r = t[1],
            i = r.b.mul(e).divRound(this.n),
            o = n.b.neg().mul(e).divRound(this.n),
            a = i.mul(n.a),
            s = o.mul(r.a),
            c = i.mul(n.b),
            f = o.mul(r.b),
            u = e.sub(a).sub(s),
            d = c.add(f).neg();return { k1: u, k2: d };
      }, r.prototype.pointFromX = function (e, t) {
        t = new c(t, 16), t.red || (t = t.toRed(this.red));var n = t.redSqr().redMul(t).redIAdd(t.redMul(this.a)).redIAdd(this.b),
            r = n.redSqrt(),
            i = r.fromRed().isOdd();return (e && !i || !e && i) && (r = r.redNeg()), this.point(t, r);
      }, r.prototype.validate = function (e) {
        if (e.inf) return !0;var t = e.x,
            n = e.y,
            r = this.a.redMul(t),
            i = t.redSqr().redMul(t).redIAdd(r).redIAdd(this.b);return 0 === n.redSqr().redISub(i).cmpn(0);
      }, r.prototype._endoWnafMulAdd = function (e, t) {
        for (var n = this._endoWnafT1, r = this._endoWnafT2, i = 0; i < e.length; i++) {
          var o = this._endoSplit(t[i]),
              a = e[i],
              s = a._getBeta();o.k1.sign && (o.k1.sign = !o.k1.sign, a = a.neg(!0)), o.k2.sign && (o.k2.sign = !o.k2.sign, s = s.neg(!0)), n[2 * i] = a, n[2 * i + 1] = s, r[2 * i] = o.k1, r[2 * i + 1] = o.k2;
        }for (var c = this._wnafMulAdd(1, n, r, 2 * i), f = 0; 2 * i > f; f++) {
          n[f] = null, r[f] = null;
        }return c;
      }, f(i, u.BasePoint), r.prototype.point = function (e, t, n) {
        return new i(this, e, t, n);
      }, r.prototype.pointFromJSON = function (e, t) {
        return i.fromJSON(this, e, t);
      }, i.prototype._getBeta = function () {
        if (this.curve.endo) {
          var e = this.precomputed;if (e && e.beta) return e.beta;var t = this.curve.point(this.x.redMul(this.curve.endo.beta), this.y);if (e) {
            var n = this.curve,
                r = function r(e) {
              return n.point(e.x.redMul(n.endo.beta), e.y);
            };e.beta = t, t.precomputed = { beta: null, naf: e.naf && { wnd: e.naf.wnd, points: e.naf.points.map(r) }, doubles: e.doubles && { step: e.doubles.step, points: e.doubles.points.map(r) } };
          }return t;
        }
      }, i.prototype.toJSON = function () {
        return this.precomputed ? [this.x, this.y, this.precomputed && { doubles: this.precomputed.doubles && { step: this.precomputed.doubles.step, points: this.precomputed.doubles.points.slice(1) }, naf: this.precomputed.naf && { wnd: this.precomputed.naf.wnd, points: this.precomputed.naf.points.slice(1) } }] : [this.x, this.y];
      }, i.fromJSON = function (e, t, n) {
        function r(t) {
          return e.point(t[0], t[1], n);
        }"string" == typeof t && (t = JSON.parse(t));var i = e.point(t[0], t[1], n);if (!t[2]) return i;var o = t[2];return i.precomputed = { beta: null, doubles: o.doubles && { step: o.doubles.step, points: [i].concat(o.doubles.points.map(r)) }, naf: o.naf && { wnd: o.naf.wnd, points: [i].concat(o.naf.points.map(r)) } }, i;
      }, i.prototype.inspect = function () {
        return this.isInfinity() ? "<EC Point Infinity>" : "<EC Point x: " + this.x.fromRed().toString(16, 2) + " y: " + this.y.fromRed().toString(16, 2) + ">";
      }, i.prototype.isInfinity = function () {
        return this.inf;
      }, i.prototype.add = function (e) {
        if (this.inf) return e;if (e.inf) return this;if (this.eq(e)) return this.dbl();if (this.neg().eq(e)) return this.curve.point(null, null);if (0 === this.x.cmp(e.x)) return this.curve.point(null, null);var t = this.y.redSub(e.y);0 !== t.cmpn(0) && (t = t.redMul(this.x.redSub(e.x).redInvm()));var n = t.redSqr().redISub(this.x).redISub(e.x),
            r = t.redMul(this.x.redSub(n)).redISub(this.y);return this.curve.point(n, r);
      }, i.prototype.dbl = function () {
        if (this.inf) return this;var e = this.y.redAdd(this.y);if (0 === e.cmpn(0)) return this.curve.point(null, null);var t = this.curve.a,
            n = this.x.redSqr(),
            r = e.redInvm(),
            i = n.redAdd(n).redIAdd(n).redIAdd(t).redMul(r),
            o = i.redSqr().redISub(this.x.redAdd(this.x)),
            a = i.redMul(this.x.redSub(o)).redISub(this.y);return this.curve.point(o, a);
      }, i.prototype.getX = function () {
        return this.x.fromRed();
      }, i.prototype.getY = function () {
        return this.y.fromRed();
      }, i.prototype.mul = function (e) {
        return e = new c(e, 16), this._hasDoubles(e) ? this.curve._fixedNafMul(this, e) : this.curve.endo ? this.curve._endoWnafMulAdd([this], [e]) : this.curve._wnafMul(this, e);
      }, i.prototype.mulAdd = function (e, t, n) {
        var r = [this, t],
            i = [e, n];return this.curve.endo ? this.curve._endoWnafMulAdd(r, i) : this.curve._wnafMulAdd(1, r, i, 2);
      }, i.prototype.eq = function (e) {
        return this === e || this.inf === e.inf && (this.inf || 0 === this.x.cmp(e.x) && 0 === this.y.cmp(e.y));
      }, i.prototype.neg = function (e) {
        if (this.inf) return this;var t = this.curve.point(this.x, this.y.redNeg());if (e && this.precomputed) {
          var n = this.precomputed,
              r = function r(e) {
            return e.neg();
          };t.precomputed = { naf: n.naf && { wnd: n.naf.wnd, points: n.naf.points.map(r) }, doubles: n.doubles && { step: n.doubles.step, points: n.doubles.points.map(r) } };
        }return t;
      }, i.prototype.toJ = function () {
        if (this.inf) return this.curve.jpoint(null, null, null);var e = this.curve.jpoint(this.x, this.y, this.curve.one);return e;
      }, f(o, u.BasePoint), r.prototype.jpoint = function (e, t, n) {
        return new o(this, e, t, n);
      }, o.prototype.toP = function () {
        if (this.isInfinity()) return this.curve.point(null, null);var e = this.z.redInvm(),
            t = e.redSqr(),
            n = this.x.redMul(t),
            r = this.y.redMul(t).redMul(e);return this.curve.point(n, r);
      }, o.prototype.neg = function () {
        return this.curve.jpoint(this.x, this.y.redNeg(), this.z);
      }, o.prototype.add = function (e) {
        if (this.isInfinity()) return e;if (e.isInfinity()) return this;var t = e.z.redSqr(),
            n = this.z.redSqr(),
            r = this.x.redMul(t),
            i = e.x.redMul(n),
            o = this.y.redMul(t.redMul(e.z)),
            a = e.y.redMul(n.redMul(this.z)),
            s = r.redSub(i),
            c = o.redSub(a);if (0 === s.cmpn(0)) return 0 !== c.cmpn(0) ? this.curve.jpoint(null, null, null) : this.dbl();var f = s.redSqr(),
            u = f.redMul(s),
            d = r.redMul(f),
            p = c.redSqr().redIAdd(u).redISub(d).redISub(d),
            h = c.redMul(d.redISub(p)).redISub(o.redMul(u)),
            l = this.z.redMul(e.z).redMul(s);return this.curve.jpoint(p, h, l);
      }, o.prototype.mixedAdd = function (e) {
        if (this.isInfinity()) return e.toJ();if (e.isInfinity()) return this;var t = this.z.redSqr(),
            n = this.x,
            r = e.x.redMul(t),
            i = this.y,
            o = e.y.redMul(t).redMul(this.z),
            a = n.redSub(r),
            s = i.redSub(o);if (0 === a.cmpn(0)) return 0 !== s.cmpn(0) ? this.curve.jpoint(null, null, null) : this.dbl();var c = a.redSqr(),
            f = c.redMul(a),
            u = n.redMul(c),
            d = s.redSqr().redIAdd(f).redISub(u).redISub(u),
            p = s.redMul(u.redISub(d)).redISub(i.redMul(f)),
            h = this.z.redMul(a);return this.curve.jpoint(d, p, h);
      }, o.prototype.dblp = function (e) {
        if (0 === e) return this;if (this.isInfinity()) return this;if (!e) return this.dbl();if (this.curve.zeroA || this.curve.threeA) {
          for (var t = this, n = 0; e > n; n++) {
            t = t.dbl();
          }return t;
        }for (var r = this.curve.a, i = this.curve.tinv, o = this.x, a = this.y, s = this.z, c = s.redSqr().redSqr(), f = a.redAdd(a), n = 0; e > n; n++) {
          var u = o.redSqr(),
              d = f.redSqr(),
              p = d.redSqr(),
              h = u.redAdd(u).redIAdd(u).redIAdd(r.redMul(c)),
              l = o.redMul(d),
              b = h.redSqr().redISub(l.redAdd(l)),
              m = l.redISub(b),
              v = h.redMul(m);v = v.redIAdd(v).redISub(p);var g = f.redMul(s);e > n + 1 && (c = c.redMul(p)), o = b, s = g, f = v;
        }return this.curve.jpoint(o, f.redMul(i), s);
      }, o.prototype.dbl = function () {
        return this.isInfinity() ? this : this.curve.zeroA ? this._zeroDbl() : this.curve.threeA ? this._threeDbl() : this._dbl();
      }, o.prototype._zeroDbl = function () {
        var e, t, n;if (this.zOne) {
          var r = this.x.redSqr(),
              i = this.y.redSqr(),
              o = i.redSqr(),
              a = this.x.redAdd(i).redSqr().redISub(r).redISub(o);a = a.redIAdd(a);var s = r.redAdd(r).redIAdd(r),
              c = s.redSqr().redISub(a).redISub(a),
              f = o.redIAdd(o);f = f.redIAdd(f), f = f.redIAdd(f), e = c, t = s.redMul(a.redISub(c)).redISub(f), n = this.y.redAdd(this.y);
        } else {
          var u = this.x.redSqr(),
              d = this.y.redSqr(),
              p = d.redSqr(),
              h = this.x.redAdd(d).redSqr().redISub(u).redISub(p);h = h.redIAdd(h);var l = u.redAdd(u).redIAdd(u),
              b = l.redSqr(),
              m = p.redIAdd(p);m = m.redIAdd(m), m = m.redIAdd(m), e = b.redISub(h).redISub(h), t = l.redMul(h.redISub(e)).redISub(m), n = this.y.redMul(this.z), n = n.redIAdd(n);
        }return this.curve.jpoint(e, t, n);
      }, o.prototype._threeDbl = function () {
        var e, t, n;if (this.zOne) {
          var r = this.x.redSqr(),
              i = this.y.redSqr(),
              o = i.redSqr(),
              a = this.x.redAdd(i).redSqr().redISub(r).redISub(o);a = a.redIAdd(a);var s = r.redAdd(r).redIAdd(r).redIAdd(this.curve.a),
              c = s.redSqr().redISub(a).redISub(a);e = c;var f = o.redIAdd(o);f = f.redIAdd(f), f = f.redIAdd(f), t = s.redMul(a.redISub(c)).redISub(f), n = this.y.redAdd(this.y);
        } else {
          var u = this.z.redSqr(),
              d = this.y.redSqr(),
              p = this.x.redMul(d),
              h = this.x.redSub(u).redMul(this.x.redAdd(u));h = h.redAdd(h).redIAdd(h);var l = p.redIAdd(p);l = l.redIAdd(l);var b = l.redAdd(l);e = h.redSqr().redISub(b), n = this.y.redAdd(this.z).redSqr().redISub(d).redISub(u);var m = d.redSqr();m = m.redIAdd(m), m = m.redIAdd(m), m = m.redIAdd(m), t = h.redMul(l.redISub(e)).redISub(m);
        }return this.curve.jpoint(e, t, n);
      }, o.prototype._dbl = function () {
        var e = this.curve.a,
            t = this.x,
            n = this.y,
            r = this.z,
            i = r.redSqr().redSqr(),
            o = t.redSqr(),
            a = n.redSqr(),
            s = o.redAdd(o).redIAdd(o).redIAdd(e.redMul(i)),
            c = t.redAdd(t);c = c.redIAdd(c);var f = c.redMul(a),
            u = s.redSqr().redISub(f.redAdd(f)),
            d = f.redISub(u),
            p = a.redSqr();p = p.redIAdd(p), p = p.redIAdd(p), p = p.redIAdd(p);var h = s.redMul(d).redISub(p),
            l = n.redAdd(n).redMul(r);return this.curve.jpoint(u, h, l);
      }, o.prototype.trpl = function () {
        if (!this.curve.zeroA) return this.dbl().add(this);var e = this.x.redSqr(),
            t = this.y.redSqr(),
            n = this.z.redSqr(),
            r = t.redSqr(),
            i = e.redAdd(e).redIAdd(e),
            o = i.redSqr(),
            a = this.x.redAdd(t).redSqr().redISub(e).redISub(r);a = a.redIAdd(a), a = a.redAdd(a).redIAdd(a), a = a.redISub(o);var s = a.redSqr(),
            c = r.redIAdd(r);c = c.redIAdd(c), c = c.redIAdd(c), c = c.redIAdd(c);var f = i.redIAdd(a).redSqr().redISub(o).redISub(s).redISub(c),
            u = t.redMul(f);u = u.redIAdd(u), u = u.redIAdd(u);var d = this.x.redMul(s).redISub(u);d = d.redIAdd(d), d = d.redIAdd(d);var p = this.y.redMul(f.redMul(c.redISub(f)).redISub(a.redMul(s)));p = p.redIAdd(p), p = p.redIAdd(p), p = p.redIAdd(p);var h = this.z.redAdd(a).redSqr().redISub(n).redISub(s);return this.curve.jpoint(d, p, h);
      }, o.prototype.mul = function (e, t) {
        return e = new c(e, t), this.curve._wnafMul(this, e);
      }, o.prototype.eq = function (e) {
        if ("affine" === e.type) return this.eq(e.toJ());if (this === e) return !0;var t = this.z.redSqr(),
            n = e.z.redSqr();if (0 !== this.x.redMul(n).redISub(e.x.redMul(t)).cmpn(0)) return !1;var r = t.redMul(this.z),
            i = n.redMul(e.z);return 0 === this.y.redMul(i).redISub(e.y.redMul(r)).cmpn(0);
      }, o.prototype.inspect = function () {
        return this.isInfinity() ? "<EC JPoint Infinity>" : "<EC JPoint x: " + this.x.toString(16, 2) + " y: " + this.y.toString(16, 2) + " z: " + this.z.toString(16, 2) + ">";
      }, o.prototype.isInfinity = function () {
        return 0 === this.z.cmpn(0);
      };
    }, { "../../elliptic": 29, "../curve": 32, "bn.js": 27, inherits: 152 }], 35: [function (e, t, n) {
      "use strict";
      function r(e) {
        "short" === e.type ? this.curve = new s.curve["short"](e) : "edwards" === e.type ? this.curve = new s.curve.edwards(e) : this.curve = new s.curve.mont(e), this.g = this.curve.g, this.n = this.curve.n, this.hash = e.hash, c(this.g.validate(), "Invalid curve"), c(this.g.mul(this.n).isInfinity(), "Invalid curve, G*N != O");
      }function i(e, t) {
        Object.defineProperty(o, e, { configurable: !0, enumerable: !0, get: function get() {
            var n = new r(t);return Object.defineProperty(o, e, { configurable: !0, enumerable: !0, value: n }), n;
          } });
      }var o = n,
          a = e("hash.js"),
          s = e("../elliptic"),
          c = s.utils.assert;o.PresetCurve = r, i("p192", { type: "short", prime: "p192", p: "ffffffff ffffffff ffffffff fffffffe ffffffff ffffffff", a: "ffffffff ffffffff ffffffff fffffffe ffffffff fffffffc", b: "64210519 e59c80e7 0fa7e9ab 72243049 feb8deec c146b9b1", n: "ffffffff ffffffff ffffffff 99def836 146bc9b1 b4d22831", hash: a.sha256, gRed: !1, g: ["188da80e b03090f6 7cbf20eb 43a18800 f4ff0afd 82ff1012", "07192b95 ffc8da78 631011ed 6b24cdd5 73f977a1 1e794811"] }), i("p224", { type: "short", prime: "p224", p: "ffffffff ffffffff ffffffff ffffffff 00000000 00000000 00000001", a: "ffffffff ffffffff ffffffff fffffffe ffffffff ffffffff fffffffe", b: "b4050a85 0c04b3ab f5413256 5044b0b7 d7bfd8ba 270b3943 2355ffb4", n: "ffffffff ffffffff ffffffff ffff16a2 e0b8f03e 13dd2945 5c5c2a3d", hash: a.sha256, gRed: !1, g: ["b70e0cbd 6bb4bf7f 321390b9 4a03c1d3 56c21122 343280d6 115c1d21", "bd376388 b5f723fb 4c22dfe6 cd4375a0 5a074764 44d58199 85007e34"] }), i("p256", { type: "short", prime: null, p: "ffffffff 00000001 00000000 00000000 00000000 ffffffff ffffffff ffffffff", a: "ffffffff 00000001 00000000 00000000 00000000 ffffffff ffffffff fffffffc", b: "5ac635d8 aa3a93e7 b3ebbd55 769886bc 651d06b0 cc53b0f6 3bce3c3e 27d2604b", n: "ffffffff 00000000 ffffffff ffffffff bce6faad a7179e84 f3b9cac2 fc632551", hash: a.sha256, gRed: !1, g: ["6b17d1f2 e12c4247 f8bce6e5 63a440f2 77037d81 2deb33a0 f4a13945 d898c296", "4fe342e2 fe1a7f9b 8ee7eb4a 7c0f9e16 2bce3357 6b315ece cbb64068 37bf51f5"] }), i("curve25519", { type: "mont", prime: "p25519", p: "7fffffffffffffff ffffffffffffffff ffffffffffffffff ffffffffffffffed", a: "76d06", b: "0", n: "1000000000000000 0000000000000000 14def9dea2f79cd6 5812631a5cf5d3ed", hash: a.sha256, gRed: !1, g: ["9"] }), i("ed25519", { type: "edwards", prime: "p25519", p: "7fffffffffffffff ffffffffffffffff ffffffffffffffff ffffffffffffffed", a: "-1", c: "1", d: "52036cee2b6ffe73 8cc740797779e898 00700a4d4141d8ab 75eb4dca135978a3", n: "1000000000000000 0000000000000000 14def9dea2f79cd6 5812631a5cf5d3ed", hash: a.sha256, gRed: !1, g: ["216936d3cd6e53fec0a4e231fdd6dc5c692cc7609525a7b2c9562d608f25d51a", "6666666666666666666666666666666666666666666666666666666666666658"] });var f;try {
        f = e("./precomputed/secp256k1");
      } catch (u) {
        f = void 0;
      }i("secp256k1", { type: "short", prime: "k256", p: "ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffe fffffc2f", a: "0", b: "7", n: "ffffffff ffffffff ffffffff fffffffe baaedce6 af48a03b bfd25e8c d0364141", h: "1", hash: a.sha256, beta: "7ae96a2b657c07106e64479eac3434e99cf0497512f58995c1396c28719501ee", lambda: "5363ad4cc05c30e0a5261c028812645a122e22ea20816678df02967c1b23bd72", basis: [{ a: "3086d221a7d46bcde86c90e49284eb15", b: "-e4437ed6010e88286f547fa90abfe4c3" }, { a: "114ca50f7a8e2f3f657c1108d9d44cfd8", b: "3086d221a7d46bcde86c90e49284eb15" }], gRed: !1, g: ["79be667ef9dcbbac55a06295ce870b07029bfcdb2dce28d959f2815b16f81798", "483ada7726a3c4655da4fbfc0e1108a8fd17b448a68554199c47d08ffb10d4b8", f] });
    }, { "../elliptic": 29, "./precomputed/secp256k1": 40, "hash.js": 43 }], 36: [function (e, t, n) {
      "use strict";
      function r(e) {
        return this instanceof r ? ("string" == typeof e && (s(o.curves.hasOwnProperty(e), "Unknown curve " + e), e = o.curves[e]), e instanceof o.curves.PresetCurve && (e = { curve: e }), this.curve = e.curve.curve, this.n = this.curve.n, this.nh = this.n.shrn(1), this.g = this.curve.g, this.g = e.curve.g, this.g.precompute(e.curve.n.bitLength() + 1), void (this.hash = e.hash || e.curve.hash)) : new r(e);
      }var i = e("bn.js"),
          o = e("../../elliptic"),
          a = o.utils,
          s = a.assert,
          c = e("./key"),
          f = e("./signature");t.exports = r, r.prototype.keyPair = function (e) {
        return new c(this, e);
      }, r.prototype.keyFromPrivate = function (e, t) {
        return c.fromPrivate(this, e, t);
      }, r.prototype.keyFromPublic = function (e, t) {
        return c.fromPublic(this, e, t);
      }, r.prototype.genKeyPair = function (e) {
        e || (e = {});for (var t = new o.hmacDRBG({ hash: this.hash, pers: e.pers, entropy: e.entropy || o.rand(this.hash.hmacStrength), nonce: this.n.toArray() }), n = this.n.byteLength(), r = this.n.sub(new i(2));;) {
          var a = new i(t.generate(n));if (!(a.cmp(r) > 0)) return a.iaddn(1), this.keyFromPrivate(a);
        }
      }, r.prototype._truncateToN = function (e, t) {
        var n = 8 * e.byteLength() - this.n.bitLength();return n > 0 && (e = e.shrn(n)), !t && e.cmp(this.n) >= 0 ? e.sub(this.n) : e;
      }, r.prototype.sign = function (e, t, n, r) {
        "object" == (typeof n === "undefined" ? "undefined" : _typeof(n)) && (r = n, n = null), r || (r = {}), t = this.keyFromPrivate(t, n), e = this._truncateToN(new i(e, 16));for (var a = this.n.byteLength(), s = t.getPrivate().toArray(), c = s.length; 21 > c; c++) {
          s.unshift(0);
        }for (var u = e.toArray(), c = u.length; a > c; c++) {
          u.unshift(0);
        }for (var d = new o.hmacDRBG({ hash: this.hash, entropy: s, nonce: u }), p = this.n.sub(new i(1));;) {
          var h = new i(d.generate(this.n.byteLength()));if (h = this._truncateToN(h, !0), !(h.cmpn(1) <= 0 || h.cmp(p) >= 0)) {
            var l = this.g.mul(h);if (!l.isInfinity()) {
              var b = l.getX(),
                  m = b.mod(this.n);if (0 !== m.cmpn(0)) {
                var v = h.invm(this.n).mul(m.mul(t.getPrivate()).iadd(e)).mod(this.n);if (0 !== v.cmpn(0)) {
                  r.canonical && v.cmp(this.nh) > 0 && (v = this.n.sub(v));var g = (l.getY().isOdd() ? 1 : 0) | (0 !== b.cmp(m) ? 2 : 0);return new f({ r: m, s: v, recoveryParam: g });
                }
              }
            }
          }
        }
      }, r.prototype.verify = function (e, t, n, r) {
        e = this._truncateToN(new i(e, 16)), n = this.keyFromPublic(n, r), t = new f(t, "hex");var o = t.r,
            a = t.s;if (o.cmpn(1) < 0 || o.cmp(this.n) >= 0) return !1;if (a.cmpn(1) < 0 || a.cmp(this.n) >= 0) return !1;var s = a.invm(this.n),
            c = s.mul(e).mod(this.n),
            u = s.mul(o).mod(this.n),
            d = this.g.mulAdd(c, n.getPublic(), u);return d.isInfinity() ? !1 : 0 === d.getX().mod(this.n).cmp(o);
      }, r.prototype.recoverPubKey = function (e, t, n, r) {
        s((3 & n) === n, "The recovery param is more than two bits"), t = new f(t, r);var o = this.n,
            a = new i(e),
            c = t.r,
            u = t.s,
            d = 1 & n,
            p = n >> 1;if (c.cmp(this.curve.p.mod(this.curve.n)) >= 0 && p) throw new Error("Unable to find sencond key candinate");c = this.curve.pointFromX(d, c);var h = a.neg().mod(o),
            l = t.r.invm(o);return c.mul(u).add(this.g.mul(h)).mul(l);
      }, r.prototype.getKeyRecoveryParam = function (e, t, n, r) {
        if (t = new f(t, r), null !== t.recoveryParam) return t.recoveryParam;for (var i = 0; 4 > i; i++) {
          var o = this.recoverPubKey(e, t, i);if (o.eq(n)) return i;
        }throw new Error("Unable to find valid recovery factor");
      };
    }, { "../../elliptic": 29, "./key": 37, "./signature": 38, "bn.js": 27 }], 37: [function (e, t, n) {
      "use strict";
      function r(e, t) {
        this.ec = e, this.priv = null, this.pub = null, t.priv && this._importPrivate(t.priv, t.privEnc), t.pub && this._importPublic(t.pub, t.pubEnc);
      }var i = e("bn.js"),
          o = e("../../elliptic"),
          a = o.utils;t.exports = r, r.fromPublic = function (e, t, n) {
        return t instanceof r ? t : new r(e, { pub: t, pubEnc: n });
      }, r.fromPrivate = function (e, t, n) {
        return t instanceof r ? t : new r(e, { priv: t, privEnc: n });
      }, r.prototype.validate = function () {
        var e = this.getPublic();return e.isInfinity() ? { result: !1, reason: "Invalid public key" } : e.validate() ? e.mul(this.ec.curve.n).isInfinity() ? { result: !0, reason: null } : { result: !1, reason: "Public key * N != O" } : { result: !1, reason: "Public key is not a point" };
      }, r.prototype.getPublic = function (e, t) {
        if (this.pub || (this.pub = this.ec.g.mul(this.priv)), "string" == typeof e && (t = e, e = null), !t) return this.pub;for (var n = this.ec.curve.p.byteLength(), r = this.pub.getX().toArray(), i = r.length; n > i; i++) {
          r.unshift(0);
        }var o;if ("mont" !== this.ec.curve.type) {
          if (e) o = [this.pub.getY().isEven() ? 2 : 3].concat(r);else {
            for (var s = this.pub.getY().toArray(), i = s.length; n > i; i++) {
              s.unshift(0);
            }var o = [4].concat(r, s);
          }
        } else o = r;return a.encode(o, t);
      }, r.prototype.getPrivate = function (e) {
        return "hex" === e ? this.priv.toString(16, 2) : this.priv;
      }, r.prototype._importPrivate = function (e, t) {
        this.priv = new i(e, t || 16), this.priv = this.priv.mod(this.ec.curve.n);
      }, r.prototype._importPublic = function (e, t) {
        return e.x || e.y ? void (this.pub = this.ec.curve.point(e.x, e.y)) : (e = a.toArray(e, t), "mont" !== this.ec.curve.type ? this._importPublicShort(e) : this._importPublicMont(e));
      }, r.prototype._importPublicShort = function (e) {
        var t = this.ec.curve.p.byteLength();4 === e[0] && e.length - 1 === 2 * t ? this.pub = this.ec.curve.point(e.slice(1, 1 + t), e.slice(1 + t, 1 + 2 * t)) : 2 !== e[0] && 3 !== e[0] || e.length - 1 !== t || (this.pub = this.ec.curve.pointFromX(3 === e[0], e.slice(1, 1 + t)));
      }, r.prototype._importPublicMont = function (e) {
        this.pub = this.ec.curve.point(e, 1);
      }, r.prototype.derive = function (e) {
        return e.mul(this.priv).getX();
      }, r.prototype.sign = function (e) {
        return this.ec.sign(e, this);
      }, r.prototype.verify = function (e, t) {
        return this.ec.verify(e, t, this);
      }, r.prototype.inspect = function () {
        return "<Key priv: " + (this.priv && this.priv.toString(16, 2)) + " pub: " + (this.pub && this.pub.inspect()) + " >";
      };
    }, { "../../elliptic": 29, "bn.js": 27 }], 38: [function (e, t, n) {
      "use strict";
      function r(e, t) {
        return e instanceof r ? e : void (this._importDER(e, t) || (s(e.r && e.s, "Signature without r or s"), this.r = new i(e.r, 16), this.s = new i(e.s, 16), null !== e.recoveryParam ? this.recoveryParam = e.recoveryParam : this.recoveryParam = null));
      }var i = e("bn.js"),
          o = e("../../elliptic"),
          a = o.utils,
          s = a.assert;t.exports = r, r.prototype._importDER = function (e, t) {
        if (e = a.toArray(e, t), e.length < 6 || 48 !== e[0] || 2 !== e[2]) return !1;var n = e[1];if (1 + n > e.length) return !1;var r = e[3];if (r >= 128) return !1;if (4 + r + 2 >= e.length) return !1;if (2 !== e[4 + r]) return !1;var o = e[5 + r];return o >= 128 ? !1 : 4 + r + 2 + o > e.length ? !1 : (this.r = new i(e.slice(4, 4 + r)), this.s = new i(e.slice(4 + r + 2, 4 + r + 2 + o)), this.recoveryParam = null, !0);
      }, r.prototype.toDER = function (e) {
        var t = this.r.toArray(),
            n = this.s.toArray();128 & t[0] && (t = [0].concat(t)), 128 & n[0] && (n = [0].concat(n));var r = t.length + n.length + 4,
            i = [48, r, 2, t.length];return i = i.concat(t, [2, n.length], n), a.encode(i, e);
      };
    }, { "../../elliptic": 29, "bn.js": 27 }], 39: [function (e, t, n) {
      "use strict";
      function r(e) {
        if (!(this instanceof r)) return new r(e);this.hash = e.hash, this.predResist = !!e.predResist, this.outLen = this.hash.outSize, this.minEntropy = e.minEntropy || this.hash.hmacStrength, this.reseed = null, this.reseedInterval = null, this.K = null, this.V = null;var t = a.toArray(e.entropy, e.entropyEnc),
            n = a.toArray(e.nonce, e.nonceEnc),
            i = a.toArray(e.pers, e.persEnc);s(t.length >= this.minEntropy / 8, "Not enough entropy. Minimum is: " + this.minEntropy + " bits"), this._init(t, n, i);
      }var i = e("hash.js"),
          o = e("../elliptic"),
          a = o.utils,
          s = a.assert;t.exports = r, r.prototype._init = function (e, t, n) {
        var r = e.concat(t).concat(n);this.K = new Array(this.outLen / 8), this.V = new Array(this.outLen / 8);for (var i = 0; i < this.V.length; i++) {
          this.K[i] = 0, this.V[i] = 1;
        }this._update(r), this.reseed = 1, this.reseedInterval = 281474976710656;
      }, r.prototype._hmac = function () {
        return new i.hmac(this.hash, this.K);
      }, r.prototype._update = function (e) {
        var t = this._hmac().update(this.V).update([0]);e && (t = t.update(e)), this.K = t.digest(), this.V = this._hmac().update(this.V).digest(), e && (this.K = this._hmac().update(this.V).update([1]).update(e).digest(), this.V = this._hmac().update(this.V).digest());
      }, r.prototype.reseed = function (e, t, n, r) {
        "string" != typeof t && (r = n, n = t, t = null), e = a.toBuffer(e, t), n = a.toBuffer(n, r), s(e.length >= this.minEntropy / 8, "Not enough entropy. Minimum is: " + this.minEntropy + " bits"), this._update(e.concat(n || [])), this.reseed = 1;
      }, r.prototype.generate = function (e, t, n, r) {
        if (this.reseed > this.reseedInterval) throw new Error("Reseed is required");"string" != typeof t && (r = n, n = t, t = null), n && (n = a.toArray(n, r), this._update(n));for (var i = []; i.length < e;) {
          this.V = this._hmac().update(this.V).digest(), i = i.concat(this.V);
        }var o = i.slice(0, e);return this._update(n), this.reseed++, a.encode(o, t);
      };
    }, { "../elliptic": 29, "hash.js": 43 }], 40: [function (e, t, n) {
      t.exports = { doubles: { step: 4, points: [["e60fce93b59e9ec53011aabc21c23e97b2a31369b87a5ae9c44ee89e2a6dec0a", "f7e3507399e595929db99f34f57937101296891e44d23f0be1f32cce69616821"], ["8282263212c609d9ea2a6e3e172de238d8c39cabd5ac1ca10646e23fd5f51508", "11f8a8098557dfe45e8256e830b60ace62d613ac2f7b17bed31b6eaff6e26caf"], ["175e159f728b865a72f99cc6c6fc846de0b93833fd2222ed73fce5b551e5b739", "d3506e0d9e3c79eba4ef97a51ff71f5eacb5955add24345c6efa6ffee9fed695"], ["363d90d447b00c9c99ceac05b6262ee053441c7e55552ffe526bad8f83ff4640", "4e273adfc732221953b445397f3363145b9a89008199ecb62003c7f3bee9de9"], ["8b4b5f165df3c2be8c6244b5b745638843e4a781a15bcd1b69f79a55dffdf80c", "4aad0a6f68d308b4b3fbd7813ab0da04f9e336546162ee56b3eff0c65fd4fd36"], ["723cbaa6e5db996d6bf771c00bd548c7b700dbffa6c0e77bcb6115925232fcda", "96e867b5595cc498a921137488824d6e2660a0653779494801dc069d9eb39f5f"], ["eebfa4d493bebf98ba5feec812c2d3b50947961237a919839a533eca0e7dd7fa", "5d9a8ca3970ef0f269ee7edaf178089d9ae4cdc3a711f712ddfd4fdae1de8999"], ["100f44da696e71672791d0a09b7bde459f1215a29b3c03bfefd7835b39a48db0", "cdd9e13192a00b772ec8f3300c090666b7ff4a18ff5195ac0fbd5cd62bc65a09"], ["e1031be262c7ed1b1dc9227a4a04c017a77f8d4464f3b3852c8acde6e534fd2d", "9d7061928940405e6bb6a4176597535af292dd419e1ced79a44f18f29456a00d"], ["feea6cae46d55b530ac2839f143bd7ec5cf8b266a41d6af52d5e688d9094696d", "e57c6b6c97dce1bab06e4e12bf3ecd5c981c8957cc41442d3155debf18090088"], ["da67a91d91049cdcb367be4be6ffca3cfeed657d808583de33fa978bc1ec6cb1", "9bacaa35481642bc41f463f7ec9780e5dec7adc508f740a17e9ea8e27a68be1d"], ["53904faa0b334cdda6e000935ef22151ec08d0f7bb11069f57545ccc1a37b7c0", "5bc087d0bc80106d88c9eccac20d3c1c13999981e14434699dcb096b022771c8"], ["8e7bcd0bd35983a7719cca7764ca906779b53a043a9b8bcaeff959f43ad86047", "10b7770b2a3da4b3940310420ca9514579e88e2e47fd68b3ea10047e8460372a"], ["385eed34c1cdff21e6d0818689b81bde71a7f4f18397e6690a841e1599c43862", "283bebc3e8ea23f56701de19e9ebf4576b304eec2086dc8cc0458fe5542e5453"], ["6f9d9b803ecf191637c73a4413dfa180fddf84a5947fbc9c606ed86c3fac3a7", "7c80c68e603059ba69b8e2a30e45c4d47ea4dd2f5c281002d86890603a842160"], ["3322d401243c4e2582a2147c104d6ecbf774d163db0f5e5313b7e0e742d0e6bd", "56e70797e9664ef5bfb019bc4ddaf9b72805f63ea2873af624f3a2e96c28b2a0"], ["85672c7d2de0b7da2bd1770d89665868741b3f9af7643397721d74d28134ab83", "7c481b9b5b43b2eb6374049bfa62c2e5e77f17fcc5298f44c8e3094f790313a6"], ["948bf809b1988a46b06c9f1919413b10f9226c60f668832ffd959af60c82a0a", "53a562856dcb6646dc6b74c5d1c3418c6d4dff08c97cd2bed4cb7f88d8c8e589"], ["6260ce7f461801c34f067ce0f02873a8f1b0e44dfc69752accecd819f38fd8e8", "bc2da82b6fa5b571a7f09049776a1ef7ecd292238051c198c1a84e95b2b4ae17"], ["e5037de0afc1d8d43d8348414bbf4103043ec8f575bfdc432953cc8d2037fa2d", "4571534baa94d3b5f9f98d09fb990bddbd5f5b03ec481f10e0e5dc841d755bda"], ["e06372b0f4a207adf5ea905e8f1771b4e7e8dbd1c6a6c5b725866a0ae4fce725", "7a908974bce18cfe12a27bb2ad5a488cd7484a7787104870b27034f94eee31dd"], ["213c7a715cd5d45358d0bbf9dc0ce02204b10bdde2a3f58540ad6908d0559754", "4b6dad0b5ae462507013ad06245ba190bb4850f5f36a7eeddff2c27534b458f2"], ["4e7c272a7af4b34e8dbb9352a5419a87e2838c70adc62cddf0cc3a3b08fbd53c", "17749c766c9d0b18e16fd09f6def681b530b9614bff7dd33e0b3941817dcaae6"], ["fea74e3dbe778b1b10f238ad61686aa5c76e3db2be43057632427e2840fb27b6", "6e0568db9b0b13297cf674deccb6af93126b596b973f7b77701d3db7f23cb96f"], ["76e64113f677cf0e10a2570d599968d31544e179b760432952c02a4417bdde39", "c90ddf8dee4e95cf577066d70681f0d35e2a33d2b56d2032b4b1752d1901ac01"], ["c738c56b03b2abe1e8281baa743f8f9a8f7cc643df26cbee3ab150242bcbb891", "893fb578951ad2537f718f2eacbfbbbb82314eef7880cfe917e735d9699a84c3"], ["d895626548b65b81e264c7637c972877d1d72e5f3a925014372e9f6588f6c14b", "febfaa38f2bc7eae728ec60818c340eb03428d632bb067e179363ed75d7d991f"], ["b8da94032a957518eb0f6433571e8761ceffc73693e84edd49150a564f676e03", "2804dfa44805a1e4d7c99cc9762808b092cc584d95ff3b511488e4e74efdf6e7"], ["e80fea14441fb33a7d8adab9475d7fab2019effb5156a792f1a11778e3c0df5d", "eed1de7f638e00771e89768ca3ca94472d155e80af322ea9fcb4291b6ac9ec78"], ["a301697bdfcd704313ba48e51d567543f2a182031efd6915ddc07bbcc4e16070", "7370f91cfb67e4f5081809fa25d40f9b1735dbf7c0a11a130c0d1a041e177ea1"], ["90ad85b389d6b936463f9d0512678de208cc330b11307fffab7ac63e3fb04ed4", "e507a3620a38261affdcbd9427222b839aefabe1582894d991d4d48cb6ef150"], ["8f68b9d2f63b5f339239c1ad981f162ee88c5678723ea3351b7b444c9ec4c0da", "662a9f2dba063986de1d90c2b6be215dbbea2cfe95510bfdf23cbf79501fff82"], ["e4f3fb0176af85d65ff99ff9198c36091f48e86503681e3e6686fd5053231e11", "1e63633ad0ef4f1c1661a6d0ea02b7286cc7e74ec951d1c9822c38576feb73bc"], ["8c00fa9b18ebf331eb961537a45a4266c7034f2f0d4e1d0716fb6eae20eae29e", "efa47267fea521a1a9dc343a3736c974c2fadafa81e36c54e7d2a4c66702414b"], ["e7a26ce69dd4829f3e10cec0a9e98ed3143d084f308b92c0997fddfc60cb3e41", "2a758e300fa7984b471b006a1aafbb18d0a6b2c0420e83e20e8a9421cf2cfd51"], ["b6459e0ee3662ec8d23540c223bcbdc571cbcb967d79424f3cf29eb3de6b80ef", "67c876d06f3e06de1dadf16e5661db3c4b3ae6d48e35b2ff30bf0b61a71ba45"], ["d68a80c8280bb840793234aa118f06231d6f1fc67e73c5a5deda0f5b496943e8", "db8ba9fff4b586d00c4b1f9177b0e28b5b0e7b8f7845295a294c84266b133120"], ["324aed7df65c804252dc0270907a30b09612aeb973449cea4095980fc28d3d5d", "648a365774b61f2ff130c0c35aec1f4f19213b0c7e332843967224af96ab7c84"], ["4df9c14919cde61f6d51dfdbe5fee5dceec4143ba8d1ca888e8bd373fd054c96", "35ec51092d8728050974c23a1d85d4b5d506cdc288490192ebac06cad10d5d"], ["9c3919a84a474870faed8a9c1cc66021523489054d7f0308cbfc99c8ac1f98cd", "ddb84f0f4a4ddd57584f044bf260e641905326f76c64c8e6be7e5e03d4fc599d"], ["6057170b1dd12fdf8de05f281d8e06bb91e1493a8b91d4cc5a21382120a959e5", "9a1af0b26a6a4807add9a2daf71df262465152bc3ee24c65e899be932385a2a8"], ["a576df8e23a08411421439a4518da31880cef0fba7d4df12b1a6973eecb94266", "40a6bf20e76640b2c92b97afe58cd82c432e10a7f514d9f3ee8be11ae1b28ec8"], ["7778a78c28dec3e30a05fe9629de8c38bb30d1f5cf9a3a208f763889be58ad71", "34626d9ab5a5b22ff7098e12f2ff580087b38411ff24ac563b513fc1fd9f43ac"], ["928955ee637a84463729fd30e7afd2ed5f96274e5ad7e5cb09eda9c06d903ac", "c25621003d3f42a827b78a13093a95eeac3d26efa8a8d83fc5180e935bcd091f"], ["85d0fef3ec6db109399064f3a0e3b2855645b4a907ad354527aae75163d82751", "1f03648413a38c0be29d496e582cf5663e8751e96877331582c237a24eb1f962"], ["ff2b0dce97eece97c1c9b6041798b85dfdfb6d8882da20308f5404824526087e", "493d13fef524ba188af4c4dc54d07936c7b7ed6fb90e2ceb2c951e01f0c29907"], ["827fbbe4b1e880ea9ed2b2e6301b212b57f1ee148cd6dd28780e5e2cf856e241", "c60f9c923c727b0b71bef2c67d1d12687ff7a63186903166d605b68baec293ec"], ["eaa649f21f51bdbae7be4ae34ce6e5217a58fdce7f47f9aa7f3b58fa2120e2b3", "be3279ed5bbbb03ac69a80f89879aa5a01a6b965f13f7e59d47a5305ba5ad93d"], ["e4a42d43c5cf169d9391df6decf42ee541b6d8f0c9a137401e23632dda34d24f", "4d9f92e716d1c73526fc99ccfb8ad34ce886eedfa8d8e4f13a7f7131deba9414"], ["1ec80fef360cbdd954160fadab352b6b92b53576a88fea4947173b9d4300bf19", "aeefe93756b5340d2f3a4958a7abbf5e0146e77f6295a07b671cdc1cc107cefd"], ["146a778c04670c2f91b00af4680dfa8bce3490717d58ba889ddb5928366642be", "b318e0ec3354028add669827f9d4b2870aaa971d2f7e5ed1d0b297483d83efd0"], ["fa50c0f61d22e5f07e3acebb1aa07b128d0012209a28b9776d76a8793180eef9", "6b84c6922397eba9b72cd2872281a68a5e683293a57a213b38cd8d7d3f4f2811"], ["da1d61d0ca721a11b1a5bf6b7d88e8421a288ab5d5bba5220e53d32b5f067ec2", "8157f55a7c99306c79c0766161c91e2966a73899d279b48a655fba0f1ad836f1"], ["a8e282ff0c9706907215ff98e8fd416615311de0446f1e062a73b0610d064e13", "7f97355b8db81c09abfb7f3c5b2515888b679a3e50dd6bd6cef7c73111f4cc0c"], ["174a53b9c9a285872d39e56e6913cab15d59b1fa512508c022f382de8319497c", "ccc9dc37abfc9c1657b4155f2c47f9e6646b3a1d8cb9854383da13ac079afa73"], ["959396981943785c3d3e57edf5018cdbe039e730e4918b3d884fdff09475b7ba", "2e7e552888c331dd8ba0386a4b9cd6849c653f64c8709385e9b8abf87524f2fd"], ["d2a63a50ae401e56d645a1153b109a8fcca0a43d561fba2dbb51340c9d82b151", "e82d86fb6443fcb7565aee58b2948220a70f750af484ca52d4142174dcf89405"], ["64587e2335471eb890ee7896d7cfdc866bacbdbd3839317b3436f9b45617e073", "d99fcdd5bf6902e2ae96dd6447c299a185b90a39133aeab358299e5e9faf6589"], ["8481bde0e4e4d885b3a546d3e549de042f0aa6cea250e7fd358d6c86dd45e458", "38ee7b8cba5404dd84a25bf39cecb2ca900a79c42b262e556d64b1b59779057e"], ["13464a57a78102aa62b6979ae817f4637ffcfed3c4b1ce30bcd6303f6caf666b", "69be159004614580ef7e433453ccb0ca48f300a81d0942e13f495a907f6ecc27"], ["bc4a9df5b713fe2e9aef430bcc1dc97a0cd9ccede2f28588cada3a0d2d83f366", "d3a81ca6e785c06383937adf4b798caa6e8a9fbfa547b16d758d666581f33c1"], ["8c28a97bf8298bc0d23d8c749452a32e694b65e30a9472a3954ab30fe5324caa", "40a30463a3305193378fedf31f7cc0eb7ae784f0451cb9459e71dc73cbef9482"], ["8ea9666139527a8c1dd94ce4f071fd23c8b350c5a4bb33748c4ba111faccae0", "620efabbc8ee2782e24e7c0cfb95c5d735b783be9cf0f8e955af34a30e62b945"], ["dd3625faef5ba06074669716bbd3788d89bdde815959968092f76cc4eb9a9787", "7a188fa3520e30d461da2501045731ca941461982883395937f68d00c644a573"], ["f710d79d9eb962297e4f6232b40e8f7feb2bc63814614d692c12de752408221e", "ea98e67232d3b3295d3b535532115ccac8612c721851617526ae47a9c77bfc82"]] }, naf: { wnd: 7, points: [["f9308a019258c31049344f85f89d5229b531c845836f99b08601f113bce036f9", "388f7b0f632de8140fe337e62a37f3566500a99934c2231b6cb9fd7584b8e672"], ["2f8bde4d1a07209355b4a7250a5c5128e88b84bddc619ab7cba8d569b240efe4", "d8ac222636e5e3d6d4dba9dda6c9c426f788271bab0d6840dca87d3aa6ac62d6"], ["5cbdf0646e5db4eaa398f365f2ea7a0e3d419b7e0330e39ce92bddedcac4f9bc", "6aebca40ba255960a3178d6d861a54dba813d0b813fde7b5a5082628087264da"], ["acd484e2f0c7f65309ad178a9f559abde09796974c57e714c35f110dfc27ccbe", "cc338921b0a7d9fd64380971763b61e9add888a4375f8e0f05cc262ac64f9c37"], ["774ae7f858a9411e5ef4246b70c65aac5649980be5c17891bbec17895da008cb", "d984a032eb6b5e190243dd56d7b7b365372db1e2dff9d6a8301d74c9c953c61b"], ["f28773c2d975288bc7d1d205c3748651b075fbc6610e58cddeeddf8f19405aa8", "ab0902e8d880a89758212eb65cdaf473a1a06da521fa91f29b5cb52db03ed81"], ["d7924d4f7d43ea965a465ae3095ff41131e5946f3c85f79e44adbcf8e27e080e", "581e2872a86c72a683842ec228cc6defea40af2bd896d3a5c504dc9ff6a26b58"], ["defdea4cdb677750a420fee807eacf21eb9898ae79b9768766e4faa04a2d4a34", "4211ab0694635168e997b0ead2a93daeced1f4a04a95c0f6cfb199f69e56eb77"], ["2b4ea0a797a443d293ef5cff444f4979f06acfebd7e86d277475656138385b6c", "85e89bc037945d93b343083b5a1c86131a01f60c50269763b570c854e5c09b7a"], ["352bbf4a4cdd12564f93fa332ce333301d9ad40271f8107181340aef25be59d5", "321eb4075348f534d59c18259dda3e1f4a1b3b2e71b1039c67bd3d8bcf81998c"], ["2fa2104d6b38d11b0230010559879124e42ab8dfeff5ff29dc9cdadd4ecacc3f", "2de1068295dd865b64569335bd5dd80181d70ecfc882648423ba76b532b7d67"], ["9248279b09b4d68dab21a9b066edda83263c3d84e09572e269ca0cd7f5453714", "73016f7bf234aade5d1aa71bdea2b1ff3fc0de2a887912ffe54a32ce97cb3402"], ["daed4f2be3a8bf278e70132fb0beb7522f570e144bf615c07e996d443dee8729", "a69dce4a7d6c98e8d4a1aca87ef8d7003f83c230f3afa726ab40e52290be1c55"], ["c44d12c7065d812e8acf28d7cbb19f9011ecd9e9fdf281b0e6a3b5e87d22e7db", "2119a460ce326cdc76c45926c982fdac0e106e861edf61c5a039063f0e0e6482"], ["6a245bf6dc698504c89a20cfded60853152b695336c28063b61c65cbd269e6b4", "e022cf42c2bd4a708b3f5126f16a24ad8b33ba48d0423b6efd5e6348100d8a82"], ["1697ffa6fd9de627c077e3d2fe541084ce13300b0bec1146f95ae57f0d0bd6a5", "b9c398f186806f5d27561506e4557433a2cf15009e498ae7adee9d63d01b2396"], ["605bdb019981718b986d0f07e834cb0d9deb8360ffb7f61df982345ef27a7479", "2972d2de4f8d20681a78d93ec96fe23c26bfae84fb14db43b01e1e9056b8c49"], ["62d14dab4150bf497402fdc45a215e10dcb01c354959b10cfe31c7e9d87ff33d", "80fc06bd8cc5b01098088a1950eed0db01aa132967ab472235f5642483b25eaf"], ["80c60ad0040f27dade5b4b06c408e56b2c50e9f56b9b8b425e555c2f86308b6f", "1c38303f1cc5c30f26e66bad7fe72f70a65eed4cbe7024eb1aa01f56430bd57a"], ["7a9375ad6167ad54aa74c6348cc54d344cc5dc9487d847049d5eabb0fa03c8fb", "d0e3fa9eca8726909559e0d79269046bdc59ea10c70ce2b02d499ec224dc7f7"], ["d528ecd9b696b54c907a9ed045447a79bb408ec39b68df504bb51f459bc3ffc9", "eecf41253136e5f99966f21881fd656ebc4345405c520dbc063465b521409933"], ["49370a4b5f43412ea25f514e8ecdad05266115e4a7ecb1387231808f8b45963", "758f3f41afd6ed428b3081b0512fd62a54c3f3afbb5b6764b653052a12949c9a"], ["77f230936ee88cbbd73df930d64702ef881d811e0e1498e2f1c13eb1fc345d74", "958ef42a7886b6400a08266e9ba1b37896c95330d97077cbbe8eb3c7671c60d6"], ["f2dac991cc4ce4b9ea44887e5c7c0bce58c80074ab9d4dbaeb28531b7739f530", "e0dedc9b3b2f8dad4da1f32dec2531df9eb5fbeb0598e4fd1a117dba703a3c37"], ["463b3d9f662621fb1b4be8fbbe2520125a216cdfc9dae3debcba4850c690d45b", "5ed430d78c296c3543114306dd8622d7c622e27c970a1de31cb377b01af7307e"], ["f16f804244e46e2a09232d4aff3b59976b98fac14328a2d1a32496b49998f247", "cedabd9b82203f7e13d206fcdf4e33d92a6c53c26e5cce26d6579962c4e31df6"], ["caf754272dc84563b0352b7a14311af55d245315ace27c65369e15f7151d41d1", "cb474660ef35f5f2a41b643fa5e460575f4fa9b7962232a5c32f908318a04476"], ["2600ca4b282cb986f85d0f1709979d8b44a09c07cb86d7c124497bc86f082120", "4119b88753c15bd6a693b03fcddbb45d5ac6be74ab5f0ef44b0be9475a7e4b40"], ["7635ca72d7e8432c338ec53cd12220bc01c48685e24f7dc8c602a7746998e435", "91b649609489d613d1d5e590f78e6d74ecfc061d57048bad9e76f302c5b9c61"], ["754e3239f325570cdbbf4a87deee8a66b7f2b33479d468fbc1a50743bf56cc18", "673fb86e5bda30fb3cd0ed304ea49a023ee33d0197a695d0c5d98093c536683"], ["e3e6bd1071a1e96aff57859c82d570f0330800661d1c952f9fe2694691d9b9e8", "59c9e0bba394e76f40c0aa58379a3cb6a5a2283993e90c4167002af4920e37f5"], ["186b483d056a033826ae73d88f732985c4ccb1f32ba35f4b4cc47fdcf04aa6eb", "3b952d32c67cf77e2e17446e204180ab21fb8090895138b4a4a797f86e80888b"], ["df9d70a6b9876ce544c98561f4be4f725442e6d2b737d9c91a8321724ce0963f", "55eb2dafd84d6ccd5f862b785dc39d4ab157222720ef9da217b8c45cf2ba2417"], ["5edd5cc23c51e87a497ca815d5dce0f8ab52554f849ed8995de64c5f34ce7143", "efae9c8dbc14130661e8cec030c89ad0c13c66c0d17a2905cdc706ab7399a868"], ["290798c2b6476830da12fe02287e9e777aa3fba1c355b17a722d362f84614fba", "e38da76dcd440621988d00bcf79af25d5b29c094db2a23146d003afd41943e7a"], ["af3c423a95d9f5b3054754efa150ac39cd29552fe360257362dfdecef4053b45", "f98a3fd831eb2b749a93b0e6f35cfb40c8cd5aa667a15581bc2feded498fd9c6"], ["766dbb24d134e745cccaa28c99bf274906bb66b26dcf98df8d2fed50d884249a", "744b1152eacbe5e38dcc887980da38b897584a65fa06cedd2c924f97cbac5996"], ["59dbf46f8c94759ba21277c33784f41645f7b44f6c596a58ce92e666191abe3e", "c534ad44175fbc300f4ea6ce648309a042ce739a7919798cd85e216c4a307f6e"], ["f13ada95103c4537305e691e74e9a4a8dd647e711a95e73cb62dc6018cfd87b8", "e13817b44ee14de663bf4bc808341f326949e21a6a75c2570778419bdaf5733d"], ["7754b4fa0e8aced06d4167a2c59cca4cda1869c06ebadfb6488550015a88522c", "30e93e864e669d82224b967c3020b8fa8d1e4e350b6cbcc537a48b57841163a2"], ["948dcadf5990e048aa3874d46abef9d701858f95de8041d2a6828c99e2262519", "e491a42537f6e597d5d28a3224b1bc25df9154efbd2ef1d2cbba2cae5347d57e"], ["7962414450c76c1689c7b48f8202ec37fb224cf5ac0bfa1570328a8a3d7c77ab", "100b610ec4ffb4760d5c1fc133ef6f6b12507a051f04ac5760afa5b29db83437"], ["3514087834964b54b15b160644d915485a16977225b8847bb0dd085137ec47ca", "ef0afbb2056205448e1652c48e8127fc6039e77c15c2378b7e7d15a0de293311"], ["d3cc30ad6b483e4bc79ce2c9dd8bc54993e947eb8df787b442943d3f7b527eaf", "8b378a22d827278d89c5e9be8f9508ae3c2ad46290358630afb34db04eede0a4"], ["1624d84780732860ce1c78fcbfefe08b2b29823db913f6493975ba0ff4847610", "68651cf9b6da903e0914448c6cd9d4ca896878f5282be4c8cc06e2a404078575"], ["733ce80da955a8a26902c95633e62a985192474b5af207da6df7b4fd5fc61cd4", "f5435a2bd2badf7d485a4d8b8db9fcce3e1ef8e0201e4578c54673bc1dc5ea1d"], ["15d9441254945064cf1a1c33bbd3b49f8966c5092171e699ef258dfab81c045c", "d56eb30b69463e7234f5137b73b84177434800bacebfc685fc37bbe9efe4070d"], ["a1d0fcf2ec9de675b612136e5ce70d271c21417c9d2b8aaaac138599d0717940", "edd77f50bcb5a3cab2e90737309667f2641462a54070f3d519212d39c197a629"], ["e22fbe15c0af8ccc5780c0735f84dbe9a790badee8245c06c7ca37331cb36980", "a855babad5cd60c88b430a69f53a1a7a38289154964799be43d06d77d31da06"], ["311091dd9860e8e20ee13473c1155f5f69635e394704eaa74009452246cfa9b3", "66db656f87d1f04fffd1f04788c06830871ec5a64feee685bd80f0b1286d8374"], ["34c1fd04d301be89b31c0442d3e6ac24883928b45a9340781867d4232ec2dbdf", "9414685e97b1b5954bd46f730174136d57f1ceeb487443dc5321857ba73abee"], ["f219ea5d6b54701c1c14de5b557eb42a8d13f3abbcd08affcc2a5e6b049b8d63", "4cb95957e83d40b0f73af4544cccf6b1f4b08d3c07b27fb8d8c2962a400766d1"], ["d7b8740f74a8fbaab1f683db8f45de26543a5490bca627087236912469a0b448", "fa77968128d9c92ee1010f337ad4717eff15db5ed3c049b3411e0315eaa4593b"], ["32d31c222f8f6f0ef86f7c98d3a3335ead5bcd32abdd94289fe4d3091aa824bf", "5f3032f5892156e39ccd3d7915b9e1da2e6dac9e6f26e961118d14b8462e1661"], ["7461f371914ab32671045a155d9831ea8793d77cd59592c4340f86cbc18347b5", "8ec0ba238b96bec0cbdddcae0aa442542eee1ff50c986ea6b39847b3cc092ff6"], ["ee079adb1df1860074356a25aa38206a6d716b2c3e67453d287698bad7b2b2d6", "8dc2412aafe3be5c4c5f37e0ecc5f9f6a446989af04c4e25ebaac479ec1c8c1e"], ["16ec93e447ec83f0467b18302ee620f7e65de331874c9dc72bfd8616ba9da6b5", "5e4631150e62fb40d0e8c2a7ca5804a39d58186a50e497139626778e25b0674d"], ["eaa5f980c245f6f038978290afa70b6bd8855897f98b6aa485b96065d537bd99", "f65f5d3e292c2e0819a528391c994624d784869d7e6ea67fb18041024edc07dc"], ["78c9407544ac132692ee1910a02439958ae04877151342ea96c4b6b35a49f51", "f3e0319169eb9b85d5404795539a5e68fa1fbd583c064d2462b675f194a3ddb4"], ["494f4be219a1a77016dcd838431aea0001cdc8ae7a6fc688726578d9702857a5", "42242a969283a5f339ba7f075e36ba2af925ce30d767ed6e55f4b031880d562c"], ["a598a8030da6d86c6bc7f2f5144ea549d28211ea58faa70ebf4c1e665c1fe9b5", "204b5d6f84822c307e4b4a7140737aec23fc63b65b35f86a10026dbd2d864e6b"], ["c41916365abb2b5d09192f5f2dbeafec208f020f12570a184dbadc3e58595997", "4f14351d0087efa49d245b328984989d5caf9450f34bfc0ed16e96b58fa9913"], ["841d6063a586fa475a724604da03bc5b92a2e0d2e0a36acfe4c73a5514742881", "73867f59c0659e81904f9a1c7543698e62562d6744c169ce7a36de01a8d6154"], ["5e95bb399a6971d376026947f89bde2f282b33810928be4ded112ac4d70e20d5", "39f23f366809085beebfc71181313775a99c9aed7d8ba38b161384c746012865"], ["36e4641a53948fd476c39f8a99fd974e5ec07564b5315d8bf99471bca0ef2f66", "d2424b1b1abe4eb8164227b085c9aa9456ea13493fd563e06fd51cf5694c78fc"], ["336581ea7bfbbb290c191a2f507a41cf5643842170e914faeab27c2c579f726", "ead12168595fe1be99252129b6e56b3391f7ab1410cd1e0ef3dcdcabd2fda224"], ["8ab89816dadfd6b6a1f2634fcf00ec8403781025ed6890c4849742706bd43ede", "6fdcef09f2f6d0a044e654aef624136f503d459c3e89845858a47a9129cdd24e"], ["1e33f1a746c9c5778133344d9299fcaa20b0938e8acff2544bb40284b8c5fb94", "60660257dd11b3aa9c8ed618d24edff2306d320f1d03010e33a7d2057f3b3b6"], ["85b7c1dcb3cec1b7ee7f30ded79dd20a0ed1f4cc18cbcfcfa410361fd8f08f31", "3d98a9cdd026dd43f39048f25a8847f4fcafad1895d7a633c6fed3c35e999511"], ["29df9fbd8d9e46509275f4b125d6d45d7fbe9a3b878a7af872a2800661ac5f51", "b4c4fe99c775a606e2d8862179139ffda61dc861c019e55cd2876eb2a27d84b"], ["a0b1cae06b0a847a3fea6e671aaf8adfdfe58ca2f768105c8082b2e449fce252", "ae434102edde0958ec4b19d917a6a28e6b72da1834aff0e650f049503a296cf2"], ["4e8ceafb9b3e9a136dc7ff67e840295b499dfb3b2133e4ba113f2e4c0e121e5", "cf2174118c8b6d7a4b48f6d534ce5c79422c086a63460502b827ce62a326683c"], ["d24a44e047e19b6f5afb81c7ca2f69080a5076689a010919f42725c2b789a33b", "6fb8d5591b466f8fc63db50f1c0f1c69013f996887b8244d2cdec417afea8fa3"], ["ea01606a7a6c9cdd249fdfcfacb99584001edd28abbab77b5104e98e8e3b35d4", "322af4908c7312b0cfbfe369f7a7b3cdb7d4494bc2823700cfd652188a3ea98d"], ["af8addbf2b661c8a6c6328655eb96651252007d8c5ea31be4ad196de8ce2131f", "6749e67c029b85f52a034eafd096836b2520818680e26ac8f3dfbcdb71749700"], ["e3ae1974566ca06cc516d47e0fb165a674a3dabcfca15e722f0e3450f45889", "2aeabe7e4531510116217f07bf4d07300de97e4874f81f533420a72eeb0bd6a4"], ["591ee355313d99721cf6993ffed1e3e301993ff3ed258802075ea8ced397e246", "b0ea558a113c30bea60fc4775460c7901ff0b053d25ca2bdeee98f1a4be5d196"], ["11396d55fda54c49f19aa97318d8da61fa8584e47b084945077cf03255b52984", "998c74a8cd45ac01289d5833a7beb4744ff536b01b257be4c5767bea93ea57a4"], ["3c5d2a1ba39c5a1790000738c9e0c40b8dcdfd5468754b6405540157e017aa7a", "b2284279995a34e2f9d4de7396fc18b80f9b8b9fdd270f6661f79ca4c81bd257"], ["cc8704b8a60a0defa3a99a7299f2e9c3fbc395afb04ac078425ef8a1793cc030", "bdd46039feed17881d1e0862db347f8cf395b74fc4bcdc4e940b74e3ac1f1b13"], ["c533e4f7ea8555aacd9777ac5cad29b97dd4defccc53ee7ea204119b2889b197", "6f0a256bc5efdf429a2fb6242f1a43a2d9b925bb4a4b3a26bb8e0f45eb596096"], ["c14f8f2ccb27d6f109f6d08d03cc96a69ba8c34eec07bbcf566d48e33da6593", "c359d6923bb398f7fd4473e16fe1c28475b740dd098075e6c0e8649113dc3a38"], ["a6cbc3046bc6a450bac24789fa17115a4c9739ed75f8f21ce441f72e0b90e6ef", "21ae7f4680e889bb130619e2c0f95a360ceb573c70603139862afd617fa9b9f"], ["347d6d9a02c48927ebfb86c1359b1caf130a3c0267d11ce6344b39f99d43cc38", "60ea7f61a353524d1c987f6ecec92f086d565ab687870cb12689ff1e31c74448"], ["da6545d2181db8d983f7dcb375ef5866d47c67b1bf31c8cf855ef7437b72656a", "49b96715ab6878a79e78f07ce5680c5d6673051b4935bd897fea824b77dc208a"], ["c40747cc9d012cb1a13b8148309c6de7ec25d6945d657146b9d5994b8feb1111", "5ca560753be2a12fc6de6caf2cb489565db936156b9514e1bb5e83037e0fa2d4"], ["4e42c8ec82c99798ccf3a610be870e78338c7f713348bd34c8203ef4037f3502", "7571d74ee5e0fb92a7a8b33a07783341a5492144cc54bcc40a94473693606437"], ["3775ab7089bc6af823aba2e1af70b236d251cadb0c86743287522a1b3b0dedea", "be52d107bcfa09d8bcb9736a828cfa7fac8db17bf7a76a2c42ad961409018cf7"], ["cee31cbf7e34ec379d94fb814d3d775ad954595d1314ba8846959e3e82f74e26", "8fd64a14c06b589c26b947ae2bcf6bfa0149ef0be14ed4d80f448a01c43b1c6d"], ["b4f9eaea09b6917619f6ea6a4eb5464efddb58fd45b1ebefcdc1a01d08b47986", "39e5c9925b5a54b07433a4f18c61726f8bb131c012ca542eb24a8ac07200682a"], ["d4263dfc3d2df923a0179a48966d30ce84e2515afc3dccc1b77907792ebcc60e", "62dfaf07a0f78feb30e30d6295853ce189e127760ad6cf7fae164e122a208d54"], ["48457524820fa65a4f8d35eb6930857c0032acc0a4a2de422233eeda897612c4", "25a748ab367979d98733c38a1fa1c2e7dc6cc07db2d60a9ae7a76aaa49bd0f77"], ["dfeeef1881101f2cb11644f3a2afdfc2045e19919152923f367a1767c11cceda", "ecfb7056cf1de042f9420bab396793c0c390bde74b4bbdff16a83ae09a9a7517"], ["6d7ef6b17543f8373c573f44e1f389835d89bcbc6062ced36c82df83b8fae859", "cd450ec335438986dfefa10c57fea9bcc521a0959b2d80bbf74b190dca712d10"], ["e75605d59102a5a2684500d3b991f2e3f3c88b93225547035af25af66e04541f", "f5c54754a8f71ee540b9b48728473e314f729ac5308b06938360990e2bfad125"], ["eb98660f4c4dfaa06a2be453d5020bc99a0c2e60abe388457dd43fefb1ed620c", "6cb9a8876d9cb8520609af3add26cd20a0a7cd8a9411131ce85f44100099223e"], ["13e87b027d8514d35939f2e6892b19922154596941888336dc3563e3b8dba942", "fef5a3c68059a6dec5d624114bf1e91aac2b9da568d6abeb2570d55646b8adf1"], ["ee163026e9fd6fe017c38f06a5be6fc125424b371ce2708e7bf4491691e5764a", "1acb250f255dd61c43d94ccc670d0f58f49ae3fa15b96623e5430da0ad6c62b2"], ["b268f5ef9ad51e4d78de3a750c2dc89b1e626d43505867999932e5db33af3d80", "5f310d4b3c99b9ebb19f77d41c1dee018cf0d34fd4191614003e945a1216e423"], ["ff07f3118a9df035e9fad85eb6c7bfe42b02f01ca99ceea3bf7ffdba93c4750d", "438136d603e858a3a5c440c38eccbaddc1d2942114e2eddd4740d098ced1f0d8"], ["8d8b9855c7c052a34146fd20ffb658bea4b9f69e0d825ebec16e8c3ce2b526a1", "cdb559eedc2d79f926baf44fb84ea4d44bcf50fee51d7ceb30e2e7f463036758"], ["52db0b5384dfbf05bfa9d472d7ae26dfe4b851ceca91b1eba54263180da32b63", "c3b997d050ee5d423ebaf66a6db9f57b3180c902875679de924b69d84a7b375"], ["e62f9490d3d51da6395efd24e80919cc7d0f29c3f3fa48c6fff543becbd43352", "6d89ad7ba4876b0b22c2ca280c682862f342c8591f1daf5170e07bfd9ccafa7d"], ["7f30ea2476b399b4957509c88f77d0191afa2ff5cb7b14fd6d8e7d65aaab1193", "ca5ef7d4b231c94c3b15389a5f6311e9daff7bb67b103e9880ef4bff637acaec"], ["5098ff1e1d9f14fb46a210fada6c903fef0fb7b4a1dd1d9ac60a0361800b7a00", "9731141d81fc8f8084d37c6e7542006b3ee1b40d60dfe5362a5b132fd17ddc0"], ["32b78c7de9ee512a72895be6b9cbefa6e2f3c4ccce445c96b9f2c81e2778ad58", "ee1849f513df71e32efc3896ee28260c73bb80547ae2275ba497237794c8753c"], ["e2cb74fddc8e9fbcd076eef2a7c72b0ce37d50f08269dfc074b581550547a4f7", "d3aa2ed71c9dd2247a62df062736eb0baddea9e36122d2be8641abcb005cc4a4"], ["8438447566d4d7bedadc299496ab357426009a35f235cb141be0d99cd10ae3a8", "c4e1020916980a4da5d01ac5e6ad330734ef0d7906631c4f2390426b2edd791f"], ["4162d488b89402039b584c6fc6c308870587d9c46f660b878ab65c82c711d67e", "67163e903236289f776f22c25fb8a3afc1732f2b84b4e95dbda47ae5a0852649"], ["3fad3fa84caf0f34f0f89bfd2dcf54fc175d767aec3e50684f3ba4a4bf5f683d", "cd1bc7cb6cc407bb2f0ca647c718a730cf71872e7d0d2a53fa20efcdfe61826"], ["674f2600a3007a00568c1a7ce05d0816c1fb84bf1370798f1c69532faeb1a86b", "299d21f9413f33b3edf43b257004580b70db57da0b182259e09eecc69e0d38a5"], ["d32f4da54ade74abb81b815ad1fb3b263d82d6c692714bcff87d29bd5ee9f08f", "f9429e738b8e53b968e99016c059707782e14f4535359d582fc416910b3eea87"], ["30e4e670435385556e593657135845d36fbb6931f72b08cb1ed954f1e3ce3ff6", "462f9bce619898638499350113bbc9b10a878d35da70740dc695a559eb88db7b"], ["be2062003c51cc3004682904330e4dee7f3dcd10b01e580bf1971b04d4cad297", "62188bc49d61e5428573d48a74e1c655b1c61090905682a0d5558ed72dccb9bc"], ["93144423ace3451ed29e0fb9ac2af211cb6e84a601df5993c419859fff5df04a", "7c10dfb164c3425f5c71a3f9d7992038f1065224f72bb9d1d902a6d13037b47c"], ["b015f8044f5fcbdcf21ca26d6c34fb8197829205c7b7d2a7cb66418c157b112c", "ab8c1e086d04e813744a655b2df8d5f83b3cdc6faa3088c1d3aea1454e3a1d5f"], ["d5e9e1da649d97d89e4868117a465a3a4f8a18de57a140d36b3f2af341a21b52", "4cb04437f391ed73111a13cc1d4dd0db1693465c2240480d8955e8592f27447a"], ["d3ae41047dd7ca065dbf8ed77b992439983005cd72e16d6f996a5316d36966bb", "bd1aeb21ad22ebb22a10f0303417c6d964f8cdd7df0aca614b10dc14d125ac46"], ["463e2763d885f958fc66cdd22800f0a487197d0a82e377b49f80af87c897b065", "bfefacdb0e5d0fd7df3a311a94de062b26b80c61fbc97508b79992671ef7ca7f"], ["7985fdfd127c0567c6f53ec1bb63ec3158e597c40bfe747c83cddfc910641917", "603c12daf3d9862ef2b25fe1de289aed24ed291e0ec6708703a5bd567f32ed03"], ["74a1ad6b5f76e39db2dd249410eac7f99e74c59cb83d2d0ed5ff1543da7703e9", "cc6157ef18c9c63cd6193d83631bbea0093e0968942e8c33d5737fd790e0db08"], ["30682a50703375f602d416664ba19b7fc9bab42c72747463a71d0896b22f6da3", "553e04f6b018b4fa6c8f39e7f311d3176290d0e0f19ca73f17714d9977a22ff8"], ["9e2158f0d7c0d5f26c3791efefa79597654e7a2b2464f52b1ee6c1347769ef57", "712fcdd1b9053f09003a3481fa7762e9ffd7c8ef35a38509e2fbf2629008373"], ["176e26989a43c9cfeba4029c202538c28172e566e3c4fce7322857f3be327d66", "ed8cc9d04b29eb877d270b4878dc43c19aefd31f4eee09ee7b47834c1fa4b1c3"], ["75d46efea3771e6e68abb89a13ad747ecf1892393dfc4f1b7004788c50374da8", "9852390a99507679fd0b86fd2b39a868d7efc22151346e1a3ca4726586a6bed8"], ["809a20c67d64900ffb698c4c825f6d5f2310fb0451c869345b7319f645605721", "9e994980d9917e22b76b061927fa04143d096ccc54963e6a5ebfa5f3f8e286c1"], ["1b38903a43f7f114ed4500b4eac7083fdefece1cf29c63528d563446f972c180", "4036edc931a60ae889353f77fd53de4a2708b26b6f5da72ad3394119daf408f9"]] } };
    }, {}], 41: [function (e, t, n) {
      "use strict";
      function r(e, t) {
        if (Array.isArray(e)) return e.slice();if (!e) return [];var n = [];if ("string" != typeof e) {
          for (var r = 0; r < e.length; r++) {
            n[r] = 0 | e[r];
          }return n;
        }if (t) {
          if ("hex" === t) {
            e = e.replace(/[^a-z0-9]+/gi, ""), e.length % 2 !== 0 && (e = "0" + e);for (var r = 0; r < e.length; r += 2) {
              n.push(parseInt(e[r] + e[r + 1], 16));
            }
          }
        } else for (var r = 0; r < e.length; r++) {
          var i = e.charCodeAt(r),
              o = i >> 8,
              a = 255 & i;o ? n.push(o, a) : n.push(a);
        }return n;
      }function i(e) {
        return 1 === e.length ? "0" + e : e;
      }function o(e) {
        for (var t = "", n = 0; n < e.length; n++) {
          t += i(e[n].toString(16));
        }return t;
      }function a(e, t) {
        for (var n = [], r = 1 << t + 1, i = e.clone(); i.cmpn(1) >= 0;) {
          var o;if (i.isOdd()) {
            var a = i.andln(r - 1);o = a > (r >> 1) - 1 ? (r >> 1) - a : a, i.isubn(o);
          } else o = 0;n.push(o);for (var s = 0 !== i.cmpn(0) && 0 === i.andln(r - 1) ? t + 1 : 1, c = 1; s > c; c++) {
            n.push(0);
          }i.ishrn(s);
        }return n;
      }function s(e, t) {
        var n = [[], []];e = e.clone(), t = t.clone();for (var r = 0, i = 0; e.cmpn(-r) > 0 || t.cmpn(-i) > 0;) {
          var o = e.andln(3) + r & 3,
              a = t.andln(3) + i & 3;3 === o && (o = -1), 3 === a && (a = -1);var s;if (0 === (1 & o)) s = 0;else {
            var c = e.andln(7) + r & 7;s = 3 !== c && 5 !== c || 2 !== a ? o : -o;
          }n[0].push(s);var f;if (0 === (1 & a)) f = 0;else {
            var c = t.andln(7) + i & 7;f = 3 !== c && 5 !== c || 2 !== o ? a : -a;
          }n[1].push(f), 2 * r === s + 1 && (r = 1 - r), 2 * i === f + 1 && (i = 1 - i), e.ishrn(1), t.ishrn(1);
        }return n;
      }var c = n;c.assert = function (e, t) {
        if (!e) throw new Error(t || "Assertion failed");
      }, c.toArray = r, c.zero2 = i, c.toHex = o, c.encode = function (e, t) {
        return "hex" === t ? o(e) : e;
      }, c.getNAF = a, c.getJSF = s;
    }, {}], 42: [function (e, t, n) {
      function r(e) {
        this.rand = e;
      }var i;if (t.exports = function (e) {
        return i || (i = new r(null)), i.generate(e);
      }, t.exports.Rand = r, r.prototype.generate = function (e) {
        return this._rand(e);
      }, "object" == (typeof window === "undefined" ? "undefined" : _typeof(window))) window.crypto && window.crypto.getRandomValues ? r.prototype._rand = function (e) {
        var t = new Uint8Array(e);return window.crypto.getRandomValues(t), t;
      } : window.msCrypto && window.msCrypto.getRandomValues ? r.prototype._rand = function (e) {
        var t = new Uint8Array(e);return window.msCrypto.getRandomValues(t), t;
      } : r.prototype._rand = function () {
        throw new Error("Not implemented yet");
      };else try {
        var o = e("crypto");r.prototype._rand = function (e) {
          return o.randomBytes(e);
        };
      } catch (a) {
        r.prototype._rand = function (e) {
          for (var t = new Uint8Array(e), n = 0; n < t.length; n++) {
            t[n] = this.rand.getByte();
          }return t;
        };
      }
    }, {}], 43: [function (e, t, n) {
      var r = n;r.utils = e("./hash/utils"), r.common = e("./hash/common"), r.sha = e("./hash/sha"), r.ripemd = e("./hash/ripemd"), r.hmac = e("./hash/hmac"), r.sha1 = r.sha.sha1, r.sha256 = r.sha.sha256, r.sha224 = r.sha.sha224, r.sha384 = r.sha.sha384, r.sha512 = r.sha.sha512, r.ripemd160 = r.ripemd.ripemd160;
    }, { "./hash/common": 44, "./hash/hmac": 45, "./hash/ripemd": 46, "./hash/sha": 47, "./hash/utils": 48 }], 44: [function (e, t, n) {
      function r() {
        this.pending = null, this.pendingTotal = 0, this.blockSize = this.constructor.blockSize, this.outSize = this.constructor.outSize, this.hmacStrength = this.constructor.hmacStrength, this.padLength = this.constructor.padLength / 8, this.endian = "big", this._delta8 = this.blockSize / 8, this._delta32 = this.blockSize / 32;
      }var i = e("../hash"),
          o = i.utils,
          a = o.assert;n.BlockHash = r, r.prototype.update = function (e, t) {
        if (e = o.toArray(e, t), this.pending ? this.pending = this.pending.concat(e) : this.pending = e, this.pendingTotal += e.length, this.pending.length >= this._delta8) {
          e = this.pending;var n = e.length % this._delta8;this.pending = e.slice(e.length - n, e.length), 0 === this.pending.length && (this.pending = null), e = o.join32(e, 0, e.length - n, this.endian);for (var r = 0; r < e.length; r += this._delta32) {
            this._update(e, r, r + this._delta32);
          }
        }return this;
      }, r.prototype.digest = function (e) {
        return this.update(this._pad()), a(null === this.pending), this._digest(e);
      }, r.prototype._pad = function () {
        var e = this.pendingTotal,
            t = this._delta8,
            n = t - (e + this.padLength) % t,
            r = new Array(n + this.padLength);r[0] = 128;for (var i = 1; n > i; i++) {
          r[i] = 0;
        }if (e <<= 3, "big" === this.endian) {
          for (var o = 8; o < this.padLength; o++) {
            r[i++] = 0;
          }r[i++] = 0, r[i++] = 0, r[i++] = 0, r[i++] = 0, r[i++] = e >>> 24 & 255, r[i++] = e >>> 16 & 255, r[i++] = e >>> 8 & 255, r[i++] = 255 & e;
        } else {
          r[i++] = 255 & e, r[i++] = e >>> 8 & 255, r[i++] = e >>> 16 & 255, r[i++] = e >>> 24 & 255, r[i++] = 0, r[i++] = 0, r[i++] = 0, r[i++] = 0;for (var o = 8; o < this.padLength; o++) {
            r[i++] = 0;
          }
        }return r;
      };
    }, { "../hash": 43 }], 45: [function (e, t, n) {
      function r(e, t, n) {
        return this instanceof r ? (this.Hash = e, this.blockSize = e.blockSize / 8, this.outSize = e.outSize / 8, this.inner = null, this.outer = null, void this._init(o.toArray(t, n))) : new r(e, t, n);
      }var i = e("../hash"),
          o = i.utils,
          a = o.assert;t.exports = r, r.prototype._init = function (e) {
        e.length > this.blockSize && (e = new this.Hash().update(e).digest()), a(e.length <= this.blockSize);for (var t = e.length; t < this.blockSize; t++) {
          e.push(0);
        }for (var t = 0; t < e.length; t++) {
          e[t] ^= 54;
        }this.inner = new this.Hash().update(e);for (var t = 0; t < e.length; t++) {
          e[t] ^= 106;
        }this.outer = new this.Hash().update(e);
      }, r.prototype.update = function (e, t) {
        return this.inner.update(e, t), this;
      }, r.prototype.digest = function (e) {
        return this.outer.update(this.inner.digest()), this.outer.digest(e);
      };
    }, { "../hash": 43 }], 46: [function (e, t, n) {
      function r() {
        return this instanceof r ? (h.call(this), this.h = [1732584193, 4023233417, 2562383102, 271733878, 3285377520], void (this.endian = "little")) : new r();
      }function i(e, t, n, r) {
        return 15 >= e ? t ^ n ^ r : 31 >= e ? t & n | ~t & r : 47 >= e ? (t | ~n) ^ r : 63 >= e ? t & r | n & ~r : t ^ (n | ~r);
      }function o(e) {
        return 15 >= e ? 0 : 31 >= e ? 1518500249 : 47 >= e ? 1859775393 : 63 >= e ? 2400959708 : 2840853838;
      }function a(e) {
        return 15 >= e ? 1352829926 : 31 >= e ? 1548603684 : 47 >= e ? 1836072691 : 63 >= e ? 2053994217 : 0;
      }var s = e("../hash"),
          c = s.utils,
          f = c.rotl32,
          u = c.sum32,
          d = c.sum32_3,
          p = c.sum32_4,
          h = s.common.BlockHash;c.inherits(r, h), n.ripemd160 = r, r.blockSize = 512, r.outSize = 160, r.hmacStrength = 192, r.padLength = 64, r.prototype._update = function (e, t) {
        for (var n = this.h[0], r = this.h[1], s = this.h[2], c = this.h[3], h = this.h[4], g = n, y = r, w = s, _ = c, x = h, E = 0; 80 > E; E++) {
          var S = u(f(p(n, i(E, r, s, c), e[l[E] + t], o(E)), m[E]), h);n = h, h = c, c = f(s, 10), s = r, r = S, S = u(f(p(g, i(79 - E, y, w, _), e[b[E] + t], a(E)), v[E]), x), g = x, x = _, _ = f(w, 10), w = y, y = S;
        }S = d(this.h[1], s, _), this.h[1] = d(this.h[2], c, x), this.h[2] = d(this.h[3], h, g), this.h[3] = d(this.h[4], n, y), this.h[4] = d(this.h[0], r, w), this.h[0] = S;
      }, r.prototype._digest = function (e) {
        return "hex" === e ? c.toHex32(this.h, "little") : c.split32(this.h, "little");
      };var l = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 7, 4, 13, 1, 10, 6, 15, 3, 12, 0, 9, 5, 2, 14, 11, 8, 3, 10, 14, 4, 9, 15, 8, 1, 2, 7, 0, 6, 13, 11, 5, 12, 1, 9, 11, 10, 0, 8, 12, 4, 13, 3, 7, 15, 14, 5, 6, 2, 4, 0, 5, 9, 7, 12, 2, 10, 14, 1, 3, 8, 11, 6, 15, 13],
          b = [5, 14, 7, 0, 9, 2, 11, 4, 13, 6, 15, 8, 1, 10, 3, 12, 6, 11, 3, 7, 0, 13, 5, 10, 14, 15, 8, 12, 4, 9, 1, 2, 15, 5, 1, 3, 7, 14, 6, 9, 11, 8, 12, 2, 10, 0, 4, 13, 8, 6, 4, 1, 3, 11, 15, 0, 5, 12, 2, 13, 9, 7, 10, 14, 12, 15, 10, 4, 1, 5, 8, 7, 6, 2, 13, 14, 0, 3, 9, 11],
          m = [11, 14, 15, 12, 5, 8, 7, 9, 11, 13, 14, 15, 6, 7, 9, 8, 7, 6, 8, 13, 11, 9, 7, 15, 7, 12, 15, 9, 11, 7, 13, 12, 11, 13, 6, 7, 14, 9, 13, 15, 14, 8, 13, 6, 5, 12, 7, 5, 11, 12, 14, 15, 14, 15, 9, 8, 9, 14, 5, 6, 8, 6, 5, 12, 9, 15, 5, 11, 6, 8, 13, 12, 5, 12, 13, 14, 11, 8, 5, 6],
          v = [8, 9, 9, 11, 13, 15, 15, 5, 7, 7, 8, 11, 14, 14, 12, 6, 9, 13, 15, 7, 12, 8, 9, 11, 7, 7, 12, 7, 6, 15, 13, 11, 9, 7, 15, 11, 8, 6, 6, 14, 12, 13, 5, 14, 13, 13, 7, 5, 15, 5, 8, 11, 14, 14, 6, 14, 6, 9, 12, 9, 12, 5, 15, 8, 8, 5, 12, 9, 12, 5, 14, 6, 8, 13, 6, 5, 15, 13, 11, 11];
    }, { "../hash": 43 }], 47: [function (e, t, n) {
      function r() {
        return this instanceof r ? (Y.call(this), this.h = [1779033703, 3144134277, 1013904242, 2773480762, 1359893119, 2600822924, 528734635, 1541459225], this.k = X, void (this.W = new Array(64))) : new r();
      }function i() {
        return this instanceof i ? (r.call(this), void (this.h = [3238371032, 914150663, 812702999, 4144912697, 4290775857, 1750603025, 1694076839, 3204075428])) : new i();
      }function o() {
        return this instanceof o ? (Y.call(this), this.h = [1779033703, 4089235720, 3144134277, 2227873595, 1013904242, 4271175723, 2773480762, 1595750129, 1359893119, 2917565137, 2600822924, 725511199, 528734635, 4215389547, 1541459225, 327033209], this.k = V, void (this.W = new Array(160))) : new o();
      }function a() {
        return this instanceof a ? (o.call(this), void (this.h = [3418070365, 3238371032, 1654270250, 914150663, 2438529370, 812702999, 355462360, 4144912697, 1731405415, 4290775857, 2394180231, 1750603025, 3675008525, 1694076839, 1203062813, 3204075428])) : new a();
      }function s() {
        return this instanceof s ? (Y.call(this), this.h = [1732584193, 4023233417, 2562383102, 271733878, 3285377520], void (this.W = new Array(80))) : new s();
      }function c(e, t, n) {
        return e & t ^ ~e & n;
      }function f(e, t, n) {
        return e & t ^ e & n ^ t & n;
      }function u(e, t, n) {
        return e ^ t ^ n;
      }function d(e) {
        return O(e, 2) ^ O(e, 13) ^ O(e, 22);
      }function p(e) {
        return O(e, 6) ^ O(e, 11) ^ O(e, 25);
      }function h(e) {
        return O(e, 7) ^ O(e, 18) ^ e >>> 3;
      }function l(e) {
        return O(e, 17) ^ O(e, 19) ^ e >>> 10;
      }function b(e, t, n, r) {
        return 0 === e ? c(t, n, r) : 1 === e || 3 === e ? u(t, n, r) : 2 === e ? f(t, n, r) : void 0;
      }function m(e, t, n, r, i, o) {
        var a = e & n ^ ~e & i;return 0 > a && (a += 4294967296), a;
      }function v(e, t, n, r, i, o) {
        var a = t & r ^ ~t & o;return 0 > a && (a += 4294967296), a;
      }function g(e, t, n, r, i, o) {
        var a = e & n ^ e & i ^ n & i;return 0 > a && (a += 4294967296), a;
      }function y(e, t, n, r, i, o) {
        var a = t & r ^ t & o ^ r & o;return 0 > a && (a += 4294967296), a;
      }function w(e, t) {
        var n = P(e, t, 28),
            r = P(t, e, 2),
            i = P(t, e, 7),
            o = n ^ r ^ i;return 0 > o && (o += 4294967296), o;
      }function _(e, t) {
        var n = M(e, t, 28),
            r = M(t, e, 2),
            i = M(t, e, 7),
            o = n ^ r ^ i;return 0 > o && (o += 4294967296), o;
      }function x(e, t) {
        var n = P(e, t, 14),
            r = P(e, t, 18),
            i = P(t, e, 9),
            o = n ^ r ^ i;return 0 > o && (o += 4294967296), o;
      }function E(e, t) {
        var n = M(e, t, 14),
            r = M(e, t, 18),
            i = M(t, e, 9),
            o = n ^ r ^ i;return 0 > o && (o += 4294967296), o;
      }function S(e, t) {
        var n = P(e, t, 1),
            r = P(e, t, 8),
            i = U(e, t, 7),
            o = n ^ r ^ i;return 0 > o && (o += 4294967296), o;
      }function k(e, t) {
        var n = M(e, t, 1),
            r = M(e, t, 8),
            i = z(e, t, 7),
            o = n ^ r ^ i;return 0 > o && (o += 4294967296), o;
      }function T(e, t) {
        var n = P(e, t, 19),
            r = P(t, e, 29),
            i = U(e, t, 6),
            o = n ^ r ^ i;return 0 > o && (o += 4294967296), o;
      }function j(e, t) {
        var n = M(e, t, 19),
            r = M(t, e, 29),
            i = z(e, t, 6),
            o = n ^ r ^ i;return 0 > o && (o += 4294967296), o;
      }var A = e("../hash"),
          I = A.utils,
          R = I.assert,
          O = I.rotr32,
          N = I.rotl32,
          B = I.sum32,
          C = I.sum32_4,
          q = I.sum32_5,
          P = I.rotr64_hi,
          M = I.rotr64_lo,
          U = I.shr64_hi,
          z = I.shr64_lo,
          L = I.sum64,
          D = I.sum64_hi,
          F = I.sum64_lo,
          H = I.sum64_4_hi,
          G = I.sum64_4_lo,
          K = I.sum64_5_hi,
          J = I.sum64_5_lo,
          Y = A.common.BlockHash,
          X = [1116352408, 1899447441, 3049323471, 3921009573, 961987163, 1508970993, 2453635748, 2870763221, 3624381080, 310598401, 607225278, 1426881987, 1925078388, 2162078206, 2614888103, 3248222580, 3835390401, 4022224774, 264347078, 604807628, 770255983, 1249150122, 1555081692, 1996064986, 2554220882, 2821834349, 2952996808, 3210313671, 3336571891, 3584528711, 113926993, 338241895, 666307205, 773529912, 1294757372, 1396182291, 1695183700, 1986661051, 2177026350, 2456956037, 2730485921, 2820302411, 3259730800, 3345764771, 3516065817, 3600352804, 4094571909, 275423344, 430227734, 506948616, 659060556, 883997877, 958139571, 1322822218, 1537002063, 1747873779, 1955562222, 2024104815, 2227730452, 2361852424, 2428436474, 2756734187, 3204031479, 3329325298],
          V = [1116352408, 3609767458, 1899447441, 602891725, 3049323471, 3964484399, 3921009573, 2173295548, 961987163, 4081628472, 1508970993, 3053834265, 2453635748, 2937671579, 2870763221, 3664609560, 3624381080, 2734883394, 310598401, 1164996542, 607225278, 1323610764, 1426881987, 3590304994, 1925078388, 4068182383, 2162078206, 991336113, 2614888103, 633803317, 3248222580, 3479774868, 3835390401, 2666613458, 4022224774, 944711139, 264347078, 2341262773, 604807628, 2007800933, 770255983, 1495990901, 1249150122, 1856431235, 1555081692, 3175218132, 1996064986, 2198950837, 2554220882, 3999719339, 2821834349, 766784016, 2952996808, 2566594879, 3210313671, 3203337956, 3336571891, 1034457026, 3584528711, 2466948901, 113926993, 3758326383, 338241895, 168717936, 666307205, 1188179964, 773529912, 1546045734, 1294757372, 1522805485, 1396182291, 2643833823, 1695183700, 2343527390, 1986661051, 1014477480, 2177026350, 1206759142, 2456956037, 344077627, 2730485921, 1290863460, 2820302411, 3158454273, 3259730800, 3505952657, 3345764771, 106217008, 3516065817, 3606008344, 3600352804, 1432725776, 4094571909, 1467031594, 275423344, 851169720, 430227734, 3100823752, 506948616, 1363258195, 659060556, 3750685593, 883997877, 3785050280, 958139571, 3318307427, 1322822218, 3812723403, 1537002063, 2003034995, 1747873779, 3602036899, 1955562222, 1575990012, 2024104815, 1125592928, 2227730452, 2716904306, 2361852424, 442776044, 2428436474, 593698344, 2756734187, 3733110249, 3204031479, 2999351573, 3329325298, 3815920427, 3391569614, 3928383900, 3515267271, 566280711, 3940187606, 3454069534, 4118630271, 4000239992, 116418474, 1914138554, 174292421, 2731055270, 289380356, 3203993006, 460393269, 320620315, 685471733, 587496836, 852142971, 1086792851, 1017036298, 365543100, 1126000580, 2618297676, 1288033470, 3409855158, 1501505948, 4234509866, 1607167915, 987167468, 1816402316, 1246189591],
          W = [1518500249, 1859775393, 2400959708, 3395469782];I.inherits(r, Y), n.sha256 = r, r.blockSize = 512, r.outSize = 256, r.hmacStrength = 192, r.padLength = 64, r.prototype._update = function (e, t) {
        for (var n = this.W, r = 0; 16 > r; r++) {
          n[r] = e[t + r];
        }for (; r < n.length; r++) {
          n[r] = C(l(n[r - 2]), n[r - 7], h(n[r - 15]), n[r - 16]);
        }var i = this.h[0],
            o = this.h[1],
            a = this.h[2],
            s = this.h[3],
            u = this.h[4],
            b = this.h[5],
            m = this.h[6],
            v = this.h[7];R(this.k.length === n.length);for (var r = 0; r < n.length; r++) {
          var g = q(v, p(u), c(u, b, m), this.k[r], n[r]),
              y = B(d(i), f(i, o, a));v = m, m = b, b = u, u = B(s, g), s = a, a = o, o = i, i = B(g, y);
        }this.h[0] = B(this.h[0], i), this.h[1] = B(this.h[1], o), this.h[2] = B(this.h[2], a), this.h[3] = B(this.h[3], s), this.h[4] = B(this.h[4], u), this.h[5] = B(this.h[5], b), this.h[6] = B(this.h[6], m), this.h[7] = B(this.h[7], v);
      }, r.prototype._digest = function (e) {
        return "hex" === e ? I.toHex32(this.h, "big") : I.split32(this.h, "big");
      }, I.inherits(i, r), n.sha224 = i, i.blockSize = 512, i.outSize = 224, i.hmacStrength = 192, i.padLength = 64, i.prototype._digest = function (e) {
        return "hex" === e ? I.toHex32(this.h.slice(0, 7), "big") : I.split32(this.h.slice(0, 7), "big");
      }, I.inherits(o, Y), n.sha512 = o, o.blockSize = 1024, o.outSize = 512, o.hmacStrength = 192, o.padLength = 128, o.prototype._prepareBlock = function (e, t) {
        for (var n = this.W, r = 0; 32 > r; r++) {
          n[r] = e[t + r];
        }for (; r < n.length; r += 2) {
          var i = T(n[r - 4], n[r - 3]),
              o = j(n[r - 4], n[r - 3]),
              a = n[r - 14],
              s = n[r - 13],
              c = S(n[r - 30], n[r - 29]),
              f = k(n[r - 30], n[r - 29]),
              u = n[r - 32],
              d = n[r - 31];n[r] = H(i, o, a, s, c, f, u, d), n[r + 1] = G(i, o, a, s, c, f, u, d);
        }
      }, o.prototype._update = function (e, t) {
        this._prepareBlock(e, t);var n = this.W,
            r = this.h[0],
            i = this.h[1],
            o = this.h[2],
            a = this.h[3],
            s = this.h[4],
            c = this.h[5],
            f = this.h[6],
            u = this.h[7],
            d = this.h[8],
            p = this.h[9],
            h = this.h[10],
            l = this.h[11],
            b = this.h[12],
            S = this.h[13],
            k = this.h[14],
            T = this.h[15];R(this.k.length === n.length);for (var j = 0; j < n.length; j += 2) {
          var A = k,
              I = T,
              O = x(d, p),
              N = E(d, p),
              B = m(d, p, h, l, b, S),
              C = v(d, p, h, l, b, S),
              q = this.k[j],
              P = this.k[j + 1],
              M = n[j],
              U = n[j + 1],
              z = K(A, I, O, N, B, C, q, P, M, U),
              H = J(A, I, O, N, B, C, q, P, M, U),
              A = w(r, i),
              I = _(r, i),
              O = g(r, i, o, a, s, c),
              N = y(r, i, o, a, s, c),
              G = D(A, I, O, N),
              Y = F(A, I, O, N);k = b, T = S, b = h, S = l, h = d, l = p, d = D(f, u, z, H), p = F(u, u, z, H), f = s, u = c, s = o, c = a, o = r, a = i, r = D(z, H, G, Y), i = F(z, H, G, Y);
        }L(this.h, 0, r, i), L(this.h, 2, o, a), L(this.h, 4, s, c), L(this.h, 6, f, u), L(this.h, 8, d, p), L(this.h, 10, h, l), L(this.h, 12, b, S), L(this.h, 14, k, T);
      }, o.prototype._digest = function (e) {
        return "hex" === e ? I.toHex32(this.h, "big") : I.split32(this.h, "big");
      }, I.inherits(a, o), n.sha384 = a, a.blockSize = 1024, a.outSize = 384, a.hmacStrength = 192, a.padLength = 128, a.prototype._digest = function (e) {
        return "hex" === e ? I.toHex32(this.h.slice(0, 12), "big") : I.split32(this.h.slice(0, 12), "big");
      }, I.inherits(s, Y), n.sha1 = s, s.blockSize = 512, s.outSize = 160, s.hmacStrength = 80, s.padLength = 64, s.prototype._update = function (e, t) {
        for (var n = this.W, r = 0; 16 > r; r++) {
          n[r] = e[t + r];
        }for (; r < n.length; r++) {
          n[r] = N(n[r - 3] ^ n[r - 8] ^ n[r - 14] ^ n[r - 16], 1);
        }for (var i = this.h[0], o = this.h[1], a = this.h[2], s = this.h[3], c = this.h[4], r = 0; r < n.length; r++) {
          var f = ~~(r / 20),
              u = q(N(i, 5), b(f, o, a, s), c, n[r], W[f]);c = s, s = a, a = N(o, 30), o = i, i = u;
        }this.h[0] = B(this.h[0], i), this.h[1] = B(this.h[1], o), this.h[2] = B(this.h[2], a), this.h[3] = B(this.h[3], s), this.h[4] = B(this.h[4], c);
      }, s.prototype._digest = function (e) {
        return "hex" === e ? I.toHex32(this.h, "big") : I.split32(this.h, "big");
      };
    }, { "../hash": 43 }], 48: [function (e, t, n) {
      function r(e, t) {
        if (Array.isArray(e)) return e.slice();if (!e) return [];var n = [];if ("string" == typeof e) {
          if (t) {
            if ("hex" === t) {
              e = e.replace(/[^a-z0-9]+/gi, ""), e.length % 2 !== 0 && (e = "0" + e);for (var r = 0; r < e.length; r += 2) {
                n.push(parseInt(e[r] + e[r + 1], 16));
              }
            }
          } else for (var r = 0; r < e.length; r++) {
            var i = e.charCodeAt(r),
                o = i >> 8,
                a = 255 & i;o ? n.push(o, a) : n.push(a);
          }
        } else for (var r = 0; r < e.length; r++) {
          n[r] = 0 | e[r];
        }return n;
      }function i(e) {
        for (var t = "", n = 0; n < e.length; n++) {
          t += s(e[n].toString(16));
        }return t;
      }function o(e) {
        var t = e >>> 24 | e >>> 8 & 65280 | e << 8 & 16711680 | (255 & e) << 24;return t >>> 0;
      }function a(e, t) {
        for (var n = "", r = 0; r < e.length; r++) {
          var i = e[r];"little" === t && (i = o(i)), n += c(i.toString(16));
        }return n;
      }function s(e) {
        return 1 === e.length ? "0" + e : e;
      }function c(e) {
        return 7 === e.length ? "0" + e : 6 === e.length ? "00" + e : 5 === e.length ? "000" + e : 4 === e.length ? "0000" + e : 3 === e.length ? "00000" + e : 2 === e.length ? "000000" + e : 1 === e.length ? "0000000" + e : e;
      }function f(e, t, n, r) {
        var i = n - t;v(i % 4 === 0);for (var o = new Array(i / 4), a = 0, s = t; a < o.length; a++, s += 4) {
          var c;c = "big" === r ? e[s] << 24 | e[s + 1] << 16 | e[s + 2] << 8 | e[s + 3] : e[s + 3] << 24 | e[s + 2] << 16 | e[s + 1] << 8 | e[s], o[a] = c >>> 0;
        }return o;
      }function u(e, t) {
        for (var n = new Array(4 * e.length), r = 0, i = 0; r < e.length; r++, i += 4) {
          var o = e[r];"big" === t ? (n[i] = o >>> 24, n[i + 1] = o >>> 16 & 255, n[i + 2] = o >>> 8 & 255, n[i + 3] = 255 & o) : (n[i + 3] = o >>> 24, n[i + 2] = o >>> 16 & 255, n[i + 1] = o >>> 8 & 255, n[i] = 255 & o);
        }return n;
      }function d(e, t) {
        return e >>> t | e << 32 - t;
      }function p(e, t) {
        return e << t | e >>> 32 - t;
      }function h(e, t) {
        return e + t >>> 0;
      }function l(e, t, n) {
        return e + t + n >>> 0;
      }function b(e, t, n, r) {
        return e + t + n + r >>> 0;
      }function m(e, t, n, r, i) {
        return e + t + n + r + i >>> 0;
      }function v(e, t) {
        if (!e) throw new Error(t || "Assertion failed");
      }function g(e, t, n, r) {
        var i = e[t],
            o = e[t + 1],
            a = r + o >>> 0,
            s = (r > a ? 1 : 0) + n + i;e[t] = s >>> 0, e[t + 1] = a;
      }function y(e, t, n, r) {
        var i = t + r >>> 0,
            o = (t > i ? 1 : 0) + e + n;return o >>> 0;
      }function w(e, t, n, r) {
        var i = t + r;return i >>> 0;
      }function _(e, t, n, r, i, o, a, s) {
        var c = 0,
            f = t;f = f + r >>> 0, c += t > f ? 1 : 0, f = f + o >>> 0, c += o > f ? 1 : 0, f = f + s >>> 0, c += s > f ? 1 : 0;var u = e + n + i + a + c;return u >>> 0;
      }function x(e, t, n, r, i, o, a, s) {
        var c = t + r + o + s;return c >>> 0;
      }function E(e, t, n, r, i, o, a, s, c, f) {
        var u = 0,
            d = t;d = d + r >>> 0, u += t > d ? 1 : 0, d = d + o >>> 0, u += o > d ? 1 : 0, d = d + s >>> 0, u += s > d ? 1 : 0, d = d + f >>> 0, u += f > d ? 1 : 0;var p = e + n + i + a + c + u;return p >>> 0;
      }function S(e, t, n, r, i, o, a, s, c, f) {
        var u = t + r + o + s + f;return u >>> 0;
      }function k(e, t, n) {
        var r = t << 32 - n | e >>> n;return r >>> 0;
      }function T(e, t, n) {
        var r = e << 32 - n | t >>> n;return r >>> 0;
      }function j(e, t, n) {
        return e >>> n;
      }function A(e, t, n) {
        var r = e << 32 - n | t >>> n;return r >>> 0;
      }var I = n,
          R = e("inherits");I.toArray = r, I.toHex = i, I.htonl = o, I.toHex32 = a, I.zero2 = s, I.zero8 = c, I.join32 = f, I.split32 = u, I.rotr32 = d, I.rotl32 = p, I.sum32 = h, I.sum32_3 = l, I.sum32_4 = b, I.sum32_5 = m, I.assert = v, I.inherits = R, n.sum64 = g, n.sum64_hi = y, n.sum64_lo = w, n.sum64_4_hi = _, n.sum64_4_lo = x, n.sum64_5_hi = E, n.sum64_5_lo = S, n.rotr64_hi = k, n.rotr64_lo = T, n.shr64_hi = j, n.shr64_lo = A;
    }, { inherits: 152 }], 49: [function (e, t, n) {
      t.exports = { name: "elliptic", version: "3.1.0", description: "EC cryptography", main: "lib/elliptic.js", scripts: { test: "make lint && mocha --reporter=spec test/*-test.js" }, repository: { type: "git", url: "git+ssh://git@github.com/indutny/elliptic.git" }, keywords: ["EC", "Elliptic", "curve", "Cryptography"], author: { name: "Fedor Indutny", email: "fedor@indutny.com" }, license: "MIT", bugs: { url: "https://github.com/indutny/elliptic/issues" }, homepage: "https://github.com/indutny/elliptic", devDependencies: { browserify: "^3.44.2", jscs: "^1.11.3", jshint: "^2.6.0", mocha: "^2.1.0", "uglify-js": "^2.4.13" }, dependencies: { "bn.js": "^2.0.3", brorand: "^1.0.1", "hash.js": "^1.0.0", inherits: "^2.0.1" }, readme: "# Elliptic [![Build Status](https://secure.travis-ci.org/indutny/elliptic.png)](http://travis-ci.org/indutny/elliptic)\n\nFast elliptic-curve cryptography in a plain javascript implementation.\n\nNOTE: Please take a look at http://safecurves.cr.yp.to/ before choosing a curve\nfor your cryptography operations.\n\n## Incentive\n\nECC is much slower than regular RSA cryptography, the JS implementations are\neven more slower.\n\n## Benchmarks\n\n```bash\n$ node benchmarks/index.js\nBenchmarking: sign\nelliptic#sign x 262 ops/sec ±0.51% (177 runs sampled)\neccjs#sign x 55.91 ops/sec ±0.90% (144 runs sampled)\n------------------------\nFastest is elliptic#sign\n========================\nBenchmarking: verify\nelliptic#verify x 113 ops/sec ±0.50% (166 runs sampled)\neccjs#verify x 48.56 ops/sec ±0.36% (125 runs sampled)\n------------------------\nFastest is elliptic#verify\n========================\nBenchmarking: gen\nelliptic#gen x 294 ops/sec ±0.43% (176 runs sampled)\neccjs#gen x 62.25 ops/sec ±0.63% (129 runs sampled)\n------------------------\nFastest is elliptic#gen\n========================\nBenchmarking: ecdh\nelliptic#ecdh x 136 ops/sec ±0.85% (156 runs sampled)\n------------------------\nFastest is elliptic#ecdh\n========================\n```\n\n## API\n\n### ECDSA\n\n```javascript\nvar EC = require('elliptic').ec;\n\n// Create and initialize EC context\n// (better do it once and reuse it)\nvar ec = new EC('secp256k1');\n\n// Generate keys\nvar key = ec.genKeyPair();\n\n// Sign message (must be an array, or it'll be treated as a hex sequence)\nvar msg = [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ];\nvar signature = key.sign(msg);\n\n// Export DER encoded signature in Array\nvar derSign = signature.toDER();\n\n// Verify signature\nconsole.log(key.verify(msg, derSign));\n```\n\n### ECDH\n\n```javascript\n// Generate keys\nvar key1 = ec.genKeyPair();\nvar key2 = ec.genKeyPair();\n\nvar shared1 = key1.derive(key2.getPublic());\nvar shared2 = key2.derive(key1.getPublic());\n\nconsole.log('Both shared secrets are BN instances');\nconsole.log(shared1.toString(16));\nconsole.log(shared2.toString(16));\n```\n\nNOTE: `.derive()` returns a [BN][1] instance.\n\n## Supported curves\n\nElliptic.js support following curve types:\n\n* Short Weierstrass\n* Montgomery\n* Edwards\n* Twisted Edwards\n\nFollowing curve 'presets' are embedded into the library:\n\n* `secp256k1`\n* `p192`\n* `p224`\n* `p256`\n* `curve25519`\n* `ed25519`\n\nNOTE: That `curve25519` could not be used for ECDSA, use `ed25519` instead.\n\n### Implementation details\n\nECDSA is using deterministic `k` value generation as per [RFC6979][0]. Most of\nthe curve operations are performed on non-affine coordinates (either projective\nor extended), various windowing techniques are used for different cases.\n\nAll operations are performed in reduction context using [bn.js][1], hashing is\nprovided by [hash.js][2]\n\n### Related projects\n\n* [eccrypto][3]: isomorphic implementation of ECDSA, ECDH and ECIES for both\n  browserify and node (uses `elliptic` for browser and [secp256k1-node][4] for\n  node)\n\n#### LICENSE\n\nThis software is licensed under the MIT License.\n\nCopyright Fedor Indutny, 2014.\n\nPermission is hereby granted, free of charge, to any person obtaining a\ncopy of this software and associated documentation files (the\n\"Software\"), to deal in the Software without restriction, including\nwithout limitation the rights to use, copy, modify, merge, publish,\ndistribute, sublicense, and/or sell copies of the Software, and to permit\npersons to whom the Software is furnished to do so, subject to the\nfollowing conditions:\n\nThe above copyright notice and this permission notice shall be included\nin all copies or substantial portions of the Software.\n\nTHE SOFTWARE IS PROVIDED \"AS IS\", WITHOUT WARRANTY OF ANY KIND, EXPRESS\nOR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF\nMERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN\nNO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,\nDAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR\nOTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE\nUSE OR OTHER DEALINGS IN THE SOFTWARE.\n\n[0]: http://tools.ietf.org/html/rfc6979\n[1]: https://github.com/indutny/bn.js\n[2]: https://github.com/indutny/hash.js\n[3]: https://github.com/bitchan/eccrypto\n[4]: https://github.com/wanderer/secp256k1-node\n", readmeFilename: "README.md", _id: "elliptic@3.1.0", _shasum: "c21682ef762769b56a74201609105da11d5f60cc", _resolved: "https://registry.npmjs.org/elliptic/-/elliptic-3.1.0.tgz", _from: "elliptic@>=3.0.0 <4.0.0" };
    }, {}], 50: [function (e, t, n) {
      (function (n) {
        var r = e("create-hash");t.exports = function (e, t, i) {
          i /= 8;for (var o, a, s, c = 0, f = new n(i), u = 0;;) {
            if (o = r("md5"), u++ > 0 && o.update(a), o.update(e), o.update(t), a = o.digest(), s = 0, i > 0) for (;;) {
              if (0 === i) break;if (s === a.length) break;f[c++] = a[s++], i--;
            }if (0 === i) break;
          }for (s = 0; s < a.length; s++) {
            a[s] = 0;
          }return f;
        };
      }).call(this, e("buffer").Buffer);
    }, { buffer: 179, "create-hash": 96 }], 51: [function (e, t, n) {
      t.exports = { "2.16.840.1.101.3.4.1.1": "aes-128-ecb", "2.16.840.1.101.3.4.1.2": "aes-128-cbc", "2.16.840.1.101.3.4.1.3": "aes-128-ofb", "2.16.840.1.101.3.4.1.4": "aes-128-cfb", "2.16.840.1.101.3.4.1.21": "aes-192-ecb", "2.16.840.1.101.3.4.1.22": "aes-192-cbc", "2.16.840.1.101.3.4.1.23": "aes-192-ofb", "2.16.840.1.101.3.4.1.24": "aes-192-cfb", "2.16.840.1.101.3.4.1.41": "aes-256-ecb", "2.16.840.1.101.3.4.1.42": "aes-256-cbc", "2.16.840.1.101.3.4.1.43": "aes-256-ofb", "2.16.840.1.101.3.4.1.44": "aes-256-cfb" };
    }, {}], 52: [function (e, t, n) {
      var r = e("asn1.js"),
          i = r.define("RSAPrivateKey", function () {
        this.seq().obj(this.key("version")["int"](), this.key("modulus")["int"](), this.key("publicExponent")["int"](), this.key("privateExponent")["int"](), this.key("prime1")["int"](), this.key("prime2")["int"](), this.key("exponent1")["int"](), this.key("exponent2")["int"](), this.key("coefficient")["int"]());
      });n.RSAPrivateKey = i;var o = r.define("RSAPublicKey", function () {
        this.seq().obj(this.key("modulus")["int"](), this.key("publicExponent")["int"]());
      });n.RSAPublicKey = o;var a = r.define("SubjectPublicKeyInfo", function () {
        this.seq().obj(this.key("algorithm").use(s), this.key("subjectPublicKey").bitstr());
      });n.PublicKey = a;var s = r.define("AlgorithmIdentifier", function () {
        this.seq().obj(this.key("algorithm").objid(), this.key("none").null_().optional(), this.key("curve").objid().optional(), this.key("params").seq().obj(this.key("p")["int"](), this.key("q")["int"](), this.key("g")["int"]()).optional());
      }),
          c = r.define("PrivateKeyInfo", function () {
        this.seq().obj(this.key("version")["int"](), this.key("algorithm").use(s), this.key("subjectPrivateKey").octstr());
      });n.PrivateKey = c;var f = r.define("EncryptedPrivateKeyInfo", function () {
        this.seq().obj(this.key("algorithm").seq().obj(this.key("id").objid(), this.key("decrypt").seq().obj(this.key("kde").seq().obj(this.key("id").objid(), this.key("kdeparams").seq().obj(this.key("salt").octstr(), this.key("iters")["int"]())), this.key("cipher").seq().obj(this.key("algo").objid(), this.key("iv").octstr()))), this.key("subjectPrivateKey").octstr());
      });n.EncryptedPrivateKey = f;var u = r.define("DSAPrivateKey", function () {
        this.seq().obj(this.key("version")["int"](), this.key("p")["int"](), this.key("q")["int"](), this.key("g")["int"](), this.key("pub_key")["int"](), this.key("priv_key")["int"]());
      });n.DSAPrivateKey = u, n.DSAparam = r.define("DSAparam", function () {
        this["int"]();
      });var d = r.define("ECPrivateKey", function () {
        this.seq().obj(this.key("version")["int"](), this.key("privateKey").octstr(), this.key("parameters").optional().explicit(0).use(p), this.key("publicKey").optional().explicit(1).bitstr());
      });n.ECPrivateKey = d;var p = r.define("ECParameters", function () {
        this.choice({ namedCurve: this.objid() });
      });n.signature = r.define("signature", function () {
        this.seq().obj(this.key("r")["int"](), this.key("s")["int"]());
      });
    }, { "asn1.js": 55 }], 53: [function (e, t, n) {
      (function (n) {
        var r = /Proc-Type: 4,ENCRYPTED\r?\nDEK-Info: AES-((?:128)|(?:192)|(?:256))-CBC,([0-9A-H]+)\r?\n\r?\n([0-9A-z\n\r\+\/\=]+)\r?\n/m,
            i = /^-----BEGIN (.*) KEY-----\r?\n/m,
            o = /^-----BEGIN (.*) KEY-----\r?\n([0-9A-z\n\r\+\/\=]+)\r?\n-----END \1 KEY-----$/m,
            a = e("./EVP_BytesToKey"),
            s = e("browserify-aes");t.exports = function (e, t) {
          var c,
              f = e.toString(),
              u = f.match(r);if (u) {
            var d = "aes" + u[1],
                p = new n(u[2], "hex"),
                h = new n(u[3].replace(/\r?\n/g, ""), "base64"),
                l = a(t, p.slice(0, 8), parseInt(u[1])),
                b = [],
                m = s.createDecipheriv(d, l, p);b.push(m.update(h)), b.push(m["final"]()), c = n.concat(b);
          } else {
            var v = f.match(o);c = new n(v[2].replace(/\r?\n/g, ""), "base64");
          }var g = f.match(i)[1] + " KEY";return { tag: g, data: c };
        };
      }).call(this, e("buffer").Buffer);
    }, { "./EVP_BytesToKey": 50, "browserify-aes": 9, buffer: 179 }], 54: [function (e, t, n) {
      (function (n) {
        function r(e) {
          var t;"object" != (typeof e === "undefined" ? "undefined" : _typeof(e)) || n.isBuffer(e) || (t = e.passphrase, e = e.key), "string" == typeof e && (e = new n(e));var r,
              a,
              c = s(e, t),
              f = c.tag,
              u = c.data;switch (f) {case "PUBLIC KEY":
              switch (a = o.PublicKey.decode(u, "der"), r = a.algorithm.algorithm.join(".")) {case "1.2.840.113549.1.1.1":
                  return o.RSAPublicKey.decode(a.subjectPublicKey.data, "der");case "1.2.840.10045.2.1":
                  return a.subjectPrivateKey = a.subjectPublicKey, { type: "ec", data: a };case "1.2.840.10040.4.1":
                  return a.algorithm.params.pub_key = o.DSAparam.decode(a.subjectPublicKey.data, "der"), { type: "dsa", data: a.algorithm.params };default:
                  throw new Error("unknown key id " + r);}throw new Error("unknown key type " + f);case "ENCRYPTED PRIVATE KEY":
              u = o.EncryptedPrivateKey.decode(u, "der"), u = i(u, t);case "PRIVATE KEY":
              switch (a = o.PrivateKey.decode(u, "der"), r = a.algorithm.algorithm.join(".")) {case "1.2.840.113549.1.1.1":
                  return o.RSAPrivateKey.decode(a.subjectPrivateKey, "der");case "1.2.840.10045.2.1":
                  return { curve: a.algorithm.curve, privateKey: o.ECPrivateKey.decode(a.subjectPrivateKey, "der").privateKey };case "1.2.840.10040.4.1":
                  return a.algorithm.params.priv_key = o.DSAparam.decode(a.subjectPrivateKey, "der"), { type: "dsa", params: a.algorithm.params };default:
                  throw new Error("unknown key id " + r);}throw new Error("unknown key type " + f);case "RSA PUBLIC KEY":
              return o.RSAPublicKey.decode(u, "der");case "RSA PRIVATE KEY":
              return o.RSAPrivateKey.decode(u, "der");case "DSA PRIVATE KEY":
              return { type: "dsa", params: o.DSAPrivateKey.decode(u, "der") };case "EC PRIVATE KEY":
              return u = o.ECPrivateKey.decode(u, "der"), { curve: u.parameters.value, privateKey: u.privateKey };default:
              throw new Error("unknown key type " + f);}
        }function i(e, t) {
          var r = e.algorithm.decrypt.kde.kdeparams.salt,
              i = parseInt(e.algorithm.decrypt.kde.kdeparams.iters.toString(), 10),
              o = a[e.algorithm.decrypt.cipher.algo.join(".")],
              s = e.algorithm.decrypt.cipher.iv,
              u = e.subjectPrivateKey,
              d = parseInt(o.split("-")[1], 10) / 8,
              p = f.pbkdf2Sync(t, r, i, d),
              h = c.createDecipheriv(o, p, s),
              l = [];return l.push(h.update(u)), l.push(h["final"]()), n.concat(l);
        }var o = e("./asn1"),
            a = e("./aesid.json"),
            s = e("./fixProc"),
            c = e("browserify-aes"),
            f = e("pbkdf2");t.exports = r, r.signature = o.signature;
      }).call(this, e("buffer").Buffer);
    }, { "./aesid.json": 51, "./asn1": 52, "./fixProc": 53, "browserify-aes": 9, buffer: 179, pbkdf2: 116 }], 55: [function (e, t, n) {
      var r = n;r.bignum = e("bn.js"), r.define = e("./asn1/api").define, r.base = e("./asn1/base"), r.constants = e("./asn1/constants"), r.decoders = e("./asn1/decoders"), r.encoders = e("./asn1/encoders");
    }, { "./asn1/api": 56, "./asn1/base": 58, "./asn1/constants": 62, "./asn1/decoders": 64, "./asn1/encoders": 67, "bn.js": 27 }], 56: [function (e, t, n) {
      function r(e, t) {
        this.name = e, this.body = t, this.decoders = {}, this.encoders = {};
      }var i = e("../asn1"),
          o = e("inherits"),
          a = n;a.define = function (e, t) {
        return new r(e, t);
      }, r.prototype._createNamed = function (t) {
        var n;try {
          n = e("vm").runInThisContext("(function " + this.name + "(entity) {\n  this._initNamed(entity);\n})");
        } catch (r) {
          n = function n(e) {
            this._initNamed(e);
          };
        }return o(n, t), n.prototype._initNamed = function (e) {
          t.call(this, e);
        }, new n(this);
      }, r.prototype._getDecoder = function (e) {
        return this.decoders.hasOwnProperty(e) || (this.decoders[e] = this._createNamed(i.decoders[e])), this.decoders[e];
      }, r.prototype.decode = function (e, t, n) {
        return this._getDecoder(t).decode(e, n);
      }, r.prototype._getEncoder = function (e) {
        return this.encoders.hasOwnProperty(e) || (this.encoders[e] = this._createNamed(i.encoders[e])), this.encoders[e];
      }, r.prototype.encode = function (e, t, n) {
        return this._getEncoder(t).encode(e, n);
      };
    }, { "../asn1": 55, inherits: 152, vm: 177 }], 57: [function (e, t, n) {
      function r(e, t) {
        return a.call(this, t), s.isBuffer(e) ? (this.base = e, this.offset = 0, void (this.length = e.length)) : void this.error("Input not Buffer");
      }function i(e, t) {
        if (Array.isArray(e)) this.length = 0, this.value = e.map(function (e) {
          return e instanceof i || (e = new i(e, t)), this.length += e.length, e;
        }, this);else if ("number" == typeof e) {
          if (!(e >= 0 && 255 >= e)) return t.error("non-byte EncoderBuffer value");this.value = e, this.length = 1;
        } else if ("string" == typeof e) this.value = e, this.length = s.byteLength(e);else {
          if (!s.isBuffer(e)) return t.error("Unsupported type: " + (typeof e === "undefined" ? "undefined" : _typeof(e)));this.value = e, this.length = e.length;
        }
      }var o = e("inherits"),
          a = e("../base").Reporter,
          s = e("buffer").Buffer;o(r, a), n.DecoderBuffer = r, r.prototype.save = function () {
        return { offset: this.offset, reporter: a.prototype.save.call(this) };
      }, r.prototype.restore = function (e) {
        var t = new r(this.base);return t.offset = e.offset, t.length = this.offset, this.offset = e.offset, a.prototype.restore.call(this, e.reporter), t;
      }, r.prototype.isEmpty = function () {
        return this.offset === this.length;
      }, r.prototype.readUInt8 = function (e) {
        return this.offset + 1 <= this.length ? this.base.readUInt8(this.offset++, !0) : this.error(e || "DecoderBuffer overrun");
      }, r.prototype.skip = function (e, t) {
        if (!(this.offset + e <= this.length)) return this.error(t || "DecoderBuffer overrun");var n = new r(this.base);return n._reporterState = this._reporterState, n.offset = this.offset, n.length = this.offset + e, this.offset += e, n;
      }, r.prototype.raw = function (e) {
        return this.base.slice(e ? e.offset : this.offset, this.length);
      }, n.EncoderBuffer = i, i.prototype.join = function (e, t) {
        return e || (e = new s(this.length)), t || (t = 0), 0 === this.length ? e : (Array.isArray(this.value) ? this.value.forEach(function (n) {
          n.join(e, t), t += n.length;
        }) : ("number" == typeof this.value ? e[t] = this.value : "string" == typeof this.value ? e.write(this.value, t) : s.isBuffer(this.value) && this.value.copy(e, t), t += this.length), e);
      };
    }, { "../base": 58, buffer: 179, inherits: 152 }], 58: [function (e, t, n) {
      var r = n;r.Reporter = e("./reporter").Reporter, r.DecoderBuffer = e("./buffer").DecoderBuffer, r.EncoderBuffer = e("./buffer").EncoderBuffer, r.Node = e("./node");
    }, { "./buffer": 57, "./node": 59, "./reporter": 60 }], 59: [function (e, t, n) {
      function r(e, t) {
        var n = {};this._baseState = n, n.enc = e, n.parent = t || null, n.children = null, n.tag = null, n.args = null, n.reverseArgs = null, n.choice = null, n.optional = !1, n.any = !1, n.obj = !1, n.use = null, n.useDecoder = null, n.key = null, n["default"] = null, n.explicit = null, n.implicit = null, n.parent || (n.children = [], this._wrap());
      }var i = e("../base").Reporter,
          o = e("../base").EncoderBuffer,
          a = e("minimalistic-assert"),
          s = ["seq", "seqof", "set", "setof", "octstr", "bitstr", "objid", "bool", "gentime", "utctime", "null_", "enum", "int", "ia5str", "utf8str"],
          c = ["key", "obj", "use", "optional", "explicit", "implicit", "def", "choice", "any"].concat(s),
          f = ["_peekTag", "_decodeTag", "_use", "_decodeStr", "_decodeObjid", "_decodeTime", "_decodeNull", "_decodeInt", "_decodeBool", "_decodeList", "_encodeComposite", "_encodeStr", "_encodeObjid", "_encodeTime", "_encodeNull", "_encodeInt", "_encodeBool"];t.exports = r;var u = ["enc", "parent", "children", "tag", "args", "reverseArgs", "choice", "optional", "any", "obj", "use", "alteredUse", "key", "default", "explicit", "implicit"];r.prototype.clone = function () {
        var e = this._baseState,
            t = {};u.forEach(function (n) {
          t[n] = e[n];
        });var n = new this.constructor(t.parent);return n._baseState = t, n;
      }, r.prototype._wrap = function () {
        var e = this._baseState;c.forEach(function (t) {
          this[t] = function () {
            var n = new this.constructor(this);return e.children.push(n), n[t].apply(n, arguments);
          };
        }, this);
      }, r.prototype._init = function (e) {
        var t = this._baseState;a(null === t.parent), e.call(this), t.children = t.children.filter(function (e) {
          return e._baseState.parent === this;
        }, this), a.equal(t.children.length, 1, "Root node can have only one child");
      }, r.prototype._useArgs = function (e) {
        var t = this._baseState,
            n = e.filter(function (e) {
          return e instanceof this.constructor;
        }, this);e = e.filter(function (e) {
          return !(e instanceof this.constructor);
        }, this), 0 !== n.length && (a(null === t.children), t.children = n, n.forEach(function (e) {
          e._baseState.parent = this;
        }, this)), 0 !== e.length && (a(null === t.args), t.args = e, t.reverseArgs = e.map(function (e) {
          if ("object" != (typeof e === "undefined" ? "undefined" : _typeof(e)) || e.constructor !== Object) return e;var t = {};return Object.keys(e).forEach(function (n) {
            n == (0 | n) && (n |= 0);var r = e[n];t[r] = n;
          }), t;
        }));
      }, f.forEach(function (e) {
        r.prototype[e] = function () {
          var t = this._baseState;throw new Error(e + " not implemented for encoding: " + t.enc);
        };
      }), s.forEach(function (e) {
        r.prototype[e] = function () {
          var t = this._baseState,
              n = Array.prototype.slice.call(arguments);return a(null === t.tag), t.tag = e, this._useArgs(n), this;
        };
      }), r.prototype.use = function (e) {
        var t = this._baseState;return a(null === t.use), t.use = e, this;
      }, r.prototype.optional = function () {
        var e = this._baseState;return e.optional = !0, this;
      }, r.prototype.def = function (e) {
        var t = this._baseState;return a(null === t["default"]), t["default"] = e, t.optional = !0, this;
      }, r.prototype.explicit = function (e) {
        var t = this._baseState;return a(null === t.explicit && null === t.implicit), t.explicit = e, this;
      }, r.prototype.implicit = function (e) {
        var t = this._baseState;return a(null === t.explicit && null === t.implicit), t.implicit = e, this;
      }, r.prototype.obj = function () {
        var e = this._baseState,
            t = Array.prototype.slice.call(arguments);return e.obj = !0, 0 !== t.length && this._useArgs(t), this;
      }, r.prototype.key = function (e) {
        var t = this._baseState;return a(null === t.key), t.key = e, this;
      }, r.prototype.any = function () {
        var e = this._baseState;return e.any = !0, this;
      }, r.prototype.choice = function (e) {
        var t = this._baseState;return a(null === t.choice), t.choice = e, this._useArgs(Object.keys(e).map(function (t) {
          return e[t];
        })), this;
      }, r.prototype._decode = function (e) {
        var t = this._baseState;if (null === t.parent) return e.wrapResult(t.children[0]._decode(e));var n,
            r = t["default"],
            i = !0;if (null !== t.key && (n = e.enterKey(t.key)), t.optional) {
          var o = null;if (null !== t.explicit ? o = t.explicit : null !== t.implicit ? o = t.implicit : null !== t.tag && (o = t.tag), null !== o || t.any) {
            if (i = this._peekTag(e, o, t.any), e.isError(i)) return i;
          } else {
            var a = e.save();try {
              null === t.choice ? this._decodeGeneric(t.tag, e) : this._decodeChoice(e), i = !0;
            } catch (s) {
              i = !1;
            }e.restore(a);
          }
        }var c;if (t.obj && i && (c = e.enterObject()), i) {
          if (null !== t.explicit) {
            var f = this._decodeTag(e, t.explicit);if (e.isError(f)) return f;e = f;
          }if (null === t.use && null === t.choice) {
            if (t.any) var a = e.save();var u = this._decodeTag(e, null !== t.implicit ? t.implicit : t.tag, t.any);if (e.isError(u)) return u;t.any ? r = e.raw(a) : e = u;
          }if (r = t.any ? r : null === t.choice ? this._decodeGeneric(t.tag, e) : this._decodeChoice(e), e.isError(r)) return r;if (!t.any && null === t.choice && null !== t.children) {
            var d = t.children.some(function (t) {
              t._decode(e);
            });if (d) return err;
          }
        }return t.obj && i && (r = e.leaveObject(c)), null === t.key || null === r && i !== !0 || e.leaveKey(n, t.key, r), r;
      }, r.prototype._decodeGeneric = function (e, t) {
        var n = this._baseState;return "seq" === e || "set" === e ? null : "seqof" === e || "setof" === e ? this._decodeList(t, e, n.args[0]) : "octstr" === e || "bitstr" === e ? this._decodeStr(t, e) : "ia5str" === e || "utf8str" === e ? this._decodeStr(t, e) : "objid" === e && n.args ? this._decodeObjid(t, n.args[0], n.args[1]) : "objid" === e ? this._decodeObjid(t, null, null) : "gentime" === e || "utctime" === e ? this._decodeTime(t, e) : "null_" === e ? this._decodeNull(t) : "bool" === e ? this._decodeBool(t) : "int" === e || "enum" === e ? this._decodeInt(t, n.args && n.args[0]) : null !== n.use ? this._getUse(n.use, t._reporterState.obj)._decode(t) : t.error("unknown tag: " + e);
      }, r.prototype._getUse = function (e, t) {
        var n = this._baseState;return n.useDecoder = this._use(e, t), a(null === n.useDecoder._baseState.parent), n.useDecoder = n.useDecoder._baseState.children[0], n.implicit !== n.useDecoder._baseState.implicit && (n.useDecoder = n.useDecoder.clone(), n.useDecoder._baseState.implicit = n.implicit), n.useDecoder;
      }, r.prototype._decodeChoice = function (e) {
        var t = this._baseState,
            n = null,
            r = !1;return Object.keys(t.choice).some(function (i) {
          var o = e.save(),
              a = t.choice[i];try {
            var s = a._decode(e);if (e.isError(s)) return !1;n = { type: i, value: s }, r = !0;
          } catch (c) {
            return e.restore(o), !1;
          }return !0;
        }, this), r ? n : e.error("Choice not matched");
      }, r.prototype._createEncoderBuffer = function (e) {
        return new o(e, this.reporter);
      }, r.prototype._encode = function (e, t, n) {
        var r = this._baseState;if (null === r["default"] || r["default"] !== e) {
          var i = this._encodeValue(e, t, n);if (void 0 !== i && !this._skipDefault(i, t, n)) return i;
        }
      }, r.prototype._encodeValue = function (e, t, n) {
        var r = this._baseState;if (null === r.parent) return r.children[0]._encode(e, t || new i());var o = null;if (this.reporter = t, r.optional && void 0 === e) {
          if (null === r["default"]) return;e = r["default"];
        }var a = null,
            s = !1;if (r.any) o = this._createEncoderBuffer(e);else if (r.choice) o = this._encodeChoice(e, t);else if (r.children) a = r.children.map(function (n) {
          if ("null_" === n._baseState.tag) return n._encode(null, t, e);if (null === n._baseState.key) return t.error("Child should have a key");var r = t.enterKey(n._baseState.key);if ("object" != (typeof e === "undefined" ? "undefined" : _typeof(e))) return t.error("Child expected, but input is not object");var i = n._encode(e[n._baseState.key], t, e);return t.leaveKey(r), i;
        }, this).filter(function (e) {
          return e;
        }), a = this._createEncoderBuffer(a);else if ("seqof" === r.tag || "setof" === r.tag) {
          if (!r.args || 1 !== r.args.length) return t.error("Too many args for : " + r.tag);if (!Array.isArray(e)) return t.error("seqof/setof, but data is not Array");var c = this.clone();c._baseState.implicit = null, a = this._createEncoderBuffer(e.map(function (n) {
            var r = this._baseState;return this._getUse(r.args[0], e)._encode(n, t);
          }, c));
        } else null !== r.use ? o = this._getUse(r.use, n)._encode(e, t) : (a = this._encodePrimitive(r.tag, e), s = !0);var o;if (!r.any && null === r.choice) {
          var f = null !== r.implicit ? r.implicit : r.tag,
              u = null === r.implicit ? "universal" : "context";null === f ? null === r.use && t.error("Tag could be ommited only for .use()") : null === r.use && (o = this._encodeComposite(f, s, u, a));
        }return null !== r.explicit && (o = this._encodeComposite(r.explicit, !1, "context", o)), o;
      }, r.prototype._encodeChoice = function (e, t) {
        var n = this._baseState,
            r = n.choice[e.type];return r || a(!1, e.type + " not found in " + JSON.stringify(Object.keys(n.choice))), r._encode(e.value, t);
      }, r.prototype._encodePrimitive = function (e, t) {
        var n = this._baseState;if ("octstr" === e || "bitstr" === e || "ia5str" === e) return this._encodeStr(t, e);if ("utf8str" === e) return this._encodeStr(t, e);if ("objid" === e && n.args) return this._encodeObjid(t, n.reverseArgs[0], n.args[1]);if ("objid" === e) return this._encodeObjid(t, null, null);if ("gentime" === e || "utctime" === e) return this._encodeTime(t, e);if ("null_" === e) return this._encodeNull();if ("int" === e || "enum" === e) return this._encodeInt(t, n.args && n.reverseArgs[0]);if ("bool" === e) return this._encodeBool(t);throw new Error("Unsupported tag: " + e);
      };
    }, { "../base": 58, "minimalistic-assert": 69 }], 60: [function (e, t, n) {
      function r(e) {
        this._reporterState = { obj: null, path: [], options: e || {}, errors: [] };
      }function i(e, t) {
        this.path = e, this.rethrow(t);
      }var o = e("inherits");n.Reporter = r, r.prototype.isError = function (e) {
        return e instanceof i;
      }, r.prototype.save = function () {
        var e = this._reporterState;return { obj: e.obj, pathLen: e.path.length };
      }, r.prototype.restore = function (e) {
        var t = this._reporterState;t.obj = e.obj, t.path = t.path.slice(0, e.pathLen);
      }, r.prototype.enterKey = function (e) {
        return this._reporterState.path.push(e);
      }, r.prototype.leaveKey = function (e, t, n) {
        var r = this._reporterState;r.path = r.path.slice(0, e - 1), null !== r.obj && (r.obj[t] = n);
      }, r.prototype.enterObject = function () {
        var e = this._reporterState,
            t = e.obj;return e.obj = {}, t;
      }, r.prototype.leaveObject = function (e) {
        var t = this._reporterState,
            n = t.obj;return t.obj = e, n;
      }, r.prototype.error = function (e) {
        var t,
            n = this._reporterState,
            r = e instanceof i;if (t = r ? e : new i(n.path.map(function (e) {
          return "[" + JSON.stringify(e) + "]";
        }).join(""), e.message || e, e.stack), !n.options.partial) throw t;return r || n.errors.push(t), t;
      }, r.prototype.wrapResult = function (e) {
        var t = this._reporterState;return t.options.partial ? { result: this.isError(e) ? null : e, errors: t.errors } : e;
      }, o(i, Error), i.prototype.rethrow = function (e) {
        return this.message = e + " at: " + (this.path || "(shallow)"), Error.captureStackTrace(this, i), this;
      };
    }, { inherits: 152 }], 61: [function (e, t, n) {
      var r = e("../constants");n.tagClass = { 0: "universal", 1: "application", 2: "context", 3: "private" }, n.tagClassByName = r._reverse(n.tagClass), n.tag = { 0: "end", 1: "bool", 2: "int", 3: "bitstr", 4: "octstr", 5: "null_", 6: "objid", 7: "objDesc", 8: "external", 9: "real", 10: "enum", 11: "embed", 12: "utf8str", 13: "relativeOid", 16: "seq", 17: "set", 18: "numstr", 19: "printstr", 20: "t61str", 21: "videostr", 22: "ia5str", 23: "utctime", 24: "gentime", 25: "graphstr", 26: "iso646str", 27: "genstr", 28: "unistr", 29: "charstr", 30: "bmpstr" }, n.tagByName = r._reverse(n.tag);
    }, { "../constants": 62 }], 62: [function (e, t, n) {
      var r = n;r._reverse = function (e) {
        var t = {};return Object.keys(e).forEach(function (n) {
          (0 | n) == n && (n = 0 | n);var r = e[n];t[r] = n;
        }), t;
      }, r.der = e("./der");
    }, { "./der": 61 }], 63: [function (e, t, n) {
      function r(e) {
        this.enc = "der", this.name = e.name, this.entity = e, this.tree = new i(), this.tree._init(e.body);
      }function i(e) {
        f.Node.call(this, "der", e);
      }function o(e, t) {
        var n = e.readUInt8(t);if (e.isError(n)) return n;var r = d.tagClass[n >> 6],
            i = 0 === (32 & n);if (31 === (31 & n)) {
          var o = n;for (n = 0; 128 === (128 & o);) {
            if (o = e.readUInt8(t), e.isError(o)) return o;n <<= 7, n |= 127 & o;
          }
        } else n &= 31;var a = d.tag[n];return { cls: r, primitive: i, tag: n, tagStr: a };
      }function a(e, t, n) {
        var r = e.readUInt8(n);if (e.isError(r)) return r;if (!t && 128 === r) return null;if (0 === (128 & r)) return r;var i = 127 & r;if (i >= 4) return e.error("length octect is too long");r = 0;for (var o = 0; i > o; o++) {
          r <<= 8;var a = e.readUInt8(n);if (e.isError(a)) return a;r |= a;
        }return r;
      }var s = e("inherits"),
          c = e("../../asn1"),
          f = c.base,
          u = c.bignum,
          d = c.constants.der;t.exports = r, r.prototype.decode = function (e, t) {
        return e instanceof f.DecoderBuffer || (e = new f.DecoderBuffer(e, t)), this.tree._decode(e, t);
      }, s(i, f.Node), i.prototype._peekTag = function (e, t, n) {
        if (e.isEmpty()) return !1;var r = e.save(),
            i = o(e, 'Failed to peek tag: "' + t + '"');return e.isError(i) ? i : (e.restore(r), i.tag === t || i.tagStr === t || n);
      }, i.prototype._decodeTag = function (e, t, n) {
        var r = o(e, 'Failed to decode tag of "' + t + '"');if (e.isError(r)) return r;var i = a(e, r.primitive, 'Failed to get length of "' + t + '"');if (e.isError(i)) return i;if (!n && r.tag !== t && r.tagStr !== t && r.tagStr + "of" !== t) return e.error('Failed to match tag: "' + t + '"');if (r.primitive || null !== i) return e.skip(i, 'Failed to match body of: "' + t + '"');var s = e.save(),
            c = this._skipUntilEnd(e, 'Failed to skip indefinite length body: "' + this.tag + '"');return e.isError(c) ? c : (i = e.offset - s.offset, e.restore(s), e.skip(i, 'Failed to match body of: "' + t + '"'));
      }, i.prototype._skipUntilEnd = function (e, t) {
        for (;;) {
          var n = o(e, t);if (e.isError(n)) return n;var r = a(e, n.primitive, t);if (e.isError(r)) return r;var i;if (i = n.primitive || null !== r ? e.skip(r) : this._skipUntilEnd(e, t), e.isError(i)) return i;if ("end" === n.tagStr) break;
        }
      }, i.prototype._decodeList = function (e, t, n) {
        for (var r = []; !e.isEmpty();) {
          var i = this._peekTag(e, "end");if (e.isError(i)) return i;var o = n.decode(e, "der");if (e.isError(o) && i) break;r.push(o);
        }return r;
      }, i.prototype._decodeStr = function (e, t) {
        if ("octstr" === t) return e.raw();if ("bitstr" === t) {
          var n = e.readUInt8();return e.isError(n) ? n : { unused: n, data: e.raw() };
        }return "ia5str" === t || "utf8str" === t ? e.raw().toString() : this.error("Decoding of string type: " + t + " unsupported");
      }, i.prototype._decodeObjid = function (e, t, n) {
        for (var r = [], i = 0; !e.isEmpty();) {
          var o = e.readUInt8();i <<= 7, i |= 127 & o, 0 === (128 & o) && (r.push(i), i = 0);
        }128 & o && r.push(i);var a = r[0] / 40 | 0,
            s = r[0] % 40;return n ? result = r : result = [a, s].concat(r.slice(1)), t && (result = t[result.join(" ")]), result;
      }, i.prototype._decodeTime = function (e, t) {
        var n = e.raw().toString();if ("gentime" === t) var r = 0 | n.slice(0, 4),
            i = 0 | n.slice(4, 6),
            o = 0 | n.slice(6, 8),
            a = 0 | n.slice(8, 10),
            s = 0 | n.slice(10, 12),
            c = 0 | n.slice(12, 14);else {
          if ("utctime" !== t) return this.error("Decoding " + t + " time is not supported yet");var r = 0 | n.slice(0, 2),
              i = 0 | n.slice(2, 4),
              o = 0 | n.slice(4, 6),
              a = 0 | n.slice(6, 8),
              s = 0 | n.slice(8, 10),
              c = 0 | n.slice(10, 12);r = 70 > r ? 2e3 + r : 1900 + r;
        }return Date.UTC(r, i - 1, o, a, s, c, 0);
      }, i.prototype._decodeNull = function (e) {
        return null;
      }, i.prototype._decodeBool = function (e) {
        var t = e.readUInt8();return e.isError(t) ? t : 0 !== t;
      }, i.prototype._decodeInt = function (e, t) {
        var n = e.raw(),
            r = new u(n);return t && (r = t[r.toString(10)] || r), r;
      }, i.prototype._use = function (e, t) {
        return "function" == typeof e && (e = e(t)), e._getDecoder("der").tree;
      };
    }, { "../../asn1": 55, inherits: 152 }], 64: [function (e, t, n) {
      var r = n;r.der = e("./der"), r.pem = e("./pem");
    }, { "./der": 63, "./pem": 65 }], 65: [function (e, t, n) {
      function r(e) {
        a.call(this, e), this.enc = "pem";
      }var i = e("inherits"),
          o = e("buffer").Buffer,
          a = (e("../../asn1"), e("./der"));i(r, a), t.exports = r, r.prototype.decode = function (e, t) {
        for (var n = e.toString().split(/[\r\n]+/g), r = t.label.toUpperCase(), i = /^-----(BEGIN|END) ([^-]+)-----$/, s = -1, c = -1, f = 0; f < n.length; f++) {
          var u = n[f].match(i);if (null !== u && u[2] === r) {
            if (-1 !== s) {
              if ("END" !== u[1]) break;c = f;break;
            }if ("BEGIN" !== u[1]) break;s = f;
          }
        }if (-1 === s || -1 === c) throw new Error("PEM section not found for: " + r);var d = n.slice(s + 1, c).join("");d.replace(/[^a-z0-9\+\/=]+/gi, "");var p = new o(d, "base64");return a.prototype.decode.call(this, p, t);
      };
    }, { "../../asn1": 55, "./der": 63, buffer: 179, inherits: 152 }], 66: [function (e, t, n) {
      function r(e) {
        this.enc = "der", this.name = e.name, this.entity = e, this.tree = new i(), this.tree._init(e.body);
      }function i(e) {
        u.Node.call(this, "der", e);
      }function o(e) {
        return 10 > e ? "0" + e : e;
      }function a(e, t, n, r) {
        var i;if ("seqof" === e ? e = "seq" : "setof" === e && (e = "set"), d.tagByName.hasOwnProperty(e)) i = d.tagByName[e];else {
          if ("number" != typeof e || (0 | e) !== e) return r.error("Unknown tag: " + e);i = e;
        }return i >= 31 ? r.error("Multi-octet tag encoding unsupported") : (t || (i |= 32), i |= d.tagClassByName[n || "universal"] << 6);
      }var s = e("inherits"),
          c = e("buffer").Buffer,
          f = e("../../asn1"),
          u = f.base,
          d = (f.bignum, f.constants.der);t.exports = r, r.prototype.encode = function (e, t) {
        return this.tree._encode(e, t).join();
      }, s(i, u.Node), i.prototype._encodeComposite = function (e, t, n, r) {
        var i = a(e, t, n, this.reporter);if (r.length < 128) {
          var o = new c(2);return o[0] = i, o[1] = r.length, this._createEncoderBuffer([o, r]);
        }for (var s = 1, f = r.length; f >= 256; f >>= 8) {
          s++;
        }var o = new c(2 + s);o[0] = i, o[1] = 128 | s;for (var f = 1 + s, u = r.length; u > 0; f--, u >>= 8) {
          o[f] = 255 & u;
        }return this._createEncoderBuffer([o, r]);
      }, i.prototype._encodeStr = function (e, t) {
        return "octstr" === t ? this._createEncoderBuffer(e) : "bitstr" === t ? this._createEncoderBuffer([0 | e.unused, e.data]) : "ia5str" === t || "utf8str" === t ? this._createEncoderBuffer(e) : this.reporter.error("Encoding of string type: " + t + " unsupported");
      }, i.prototype._encodeObjid = function (e, t, n) {
        if ("string" == typeof e) {
          if (!t) return this.reporter.error("string objid given, but no values map found");if (!t.hasOwnProperty(e)) return this.reporter.error("objid not found in values map");e = t[e].split(/[\s\.]+/g);for (var r = 0; r < e.length; r++) {
            e[r] |= 0;
          }
        } else if (Array.isArray(e)) {
          e = e.slice();for (var r = 0; r < e.length; r++) {
            e[r] |= 0;
          }
        }if (!Array.isArray(e)) return this.reporter.error("objid() should be either array or string, got: " + JSON.stringify(e));if (!n) {
          if (e[1] >= 40) return this.reporter.error("Second objid identifier OOB");e.splice(0, 2, 40 * e[0] + e[1]);
        }for (var i = 0, r = 0; r < e.length; r++) {
          var o = e[r];for (i++; o >= 128; o >>= 7) {
            i++;
          }
        }for (var a = new c(i), s = a.length - 1, r = e.length - 1; r >= 0; r--) {
          var o = e[r];for (a[s--] = 127 & o; (o >>= 7) > 0;) {
            a[s--] = 128 | 127 & o;
          }
        }return this._createEncoderBuffer(a);
      }, i.prototype._encodeTime = function (e, t) {
        var n,
            r = new Date(e);return "gentime" === t ? n = [o(r.getFullYear()), o(r.getUTCMonth() + 1), o(r.getUTCDate()), o(r.getUTCHours()), o(r.getUTCMinutes()), o(r.getUTCSeconds()), "Z"].join("") : "utctime" === t ? n = [o(r.getFullYear() % 100), o(r.getUTCMonth() + 1), o(r.getUTCDate()), o(r.getUTCHours()), o(r.getUTCMinutes()), o(r.getUTCSeconds()), "Z"].join("") : this.reporter.error("Encoding " + t + " time is not supported yet"), this._encodeStr(n, "octstr");
      }, i.prototype._encodeNull = function () {
        return this._createEncoderBuffer("");
      }, i.prototype._encodeInt = function (e, t) {
        if ("string" == typeof e) {
          if (!t) return this.reporter.error("String int or enum given, but no values map");if (!t.hasOwnProperty(e)) return this.reporter.error("Values map doesn't contain: " + JSON.stringify(e));e = t[e];
        }if ("number" != typeof e && !c.isBuffer(e)) {
          var n = e.toArray();e.sign === !1 && 128 & n[0] && n.unshift(0), e = new c(n);
        }if (c.isBuffer(e)) {
          var r = e.length;0 === e.length && r++;var i = new c(r);return e.copy(i), 0 === e.length && (i[0] = 0), this._createEncoderBuffer(i);
        }if (128 > e) return this._createEncoderBuffer(e);if (256 > e) return this._createEncoderBuffer([0, e]);for (var r = 1, o = e; o >= 256; o >>= 8) {
          r++;
        }for (var i = new Array(r), o = i.length - 1; o >= 0; o--) {
          i[o] = 255 & e, e >>= 8;
        }return 128 & i[0] && i.unshift(0), this._createEncoderBuffer(new c(i));
      }, i.prototype._encodeBool = function (e) {
        return this._createEncoderBuffer(e ? 255 : 0);
      }, i.prototype._use = function (e, t) {
        return "function" == typeof e && (e = e(t)), e._getEncoder("der").tree;
      }, i.prototype._skipDefault = function (e, t, n) {
        var r,
            i = this._baseState;if (null === i["default"]) return !1;var o = e.join();if (void 0 === i.defaultBuffer && (i.defaultBuffer = this._encodeValue(i["default"], t, n).join()), o.length !== i.defaultBuffer.length) return !1;for (r = 0; r < o.length; r++) {
          if (o[r] !== i.defaultBuffer[r]) return !1;
        }return !0;
      };
    }, { "../../asn1": 55, buffer: 179, inherits: 152 }], 67: [function (e, t, n) {
      var r = n;r.der = e("./der"), r.pem = e("./pem");
    }, { "./der": 66, "./pem": 68 }], 68: [function (e, t, n) {
      function r(e) {
        o.call(this, e), this.enc = "pem";
      }var i = e("inherits"),
          o = (e("buffer").Buffer, e("../../asn1"), e("./der"));i(r, o), t.exports = r, r.prototype.encode = function (e, t) {
        for (var n = o.prototype.encode.call(this, e), r = n.toString("base64"), i = ["-----BEGIN " + t.label + "-----"], a = 0; a < r.length; a += 64) {
          i.push(r.slice(a, a + 64));
        }return i.push("-----END " + t.label + "-----"), i.join("\n");
      };
    }, { "../../asn1": 55, "./der": 66, buffer: 179, inherits: 152 }], 69: [function (e, t, n) {
      function r(e, t) {
        if (!e) throw new Error(t || "Assertion failed");
      }t.exports = r, r.equal = function (e, t, n) {
        if (e != t) throw new Error(n || "Assertion failed: " + e + " != " + t);
      };
    }, {}], 70: [function (e, t, n) {
      (function (n) {
        function r(e, t, n, r) {
          var a = m(t);if (a.curve) {
            if ("ecdsa" !== r) throw new Error("wrong private key type");return i(e, a);
          }if ("dsa" === a.type) {
            if ("dsa" !== r) throw new Error("wrong private key type");return o(e, a, n);
          }if ("rsa" !== r) throw new Error("wrong private key type");for (var s = a.modulus.byteLength(), c = [0, 1]; e.length + c.length + 1 < s;) {
            c.push(255);
          }c.push(0);for (var f = -1; ++f < e.length;) {
            c.push(e[f]);
          }var u = h(c, a);return u;
        }function i(e, t) {
          var r = l[t.curve.join(".")];if (!r) throw new Error("unknown curve " + t.curve.join("."));var i = new g(r),
              o = i.genKeyPair();o._importPrivate(t.privateKey);var a = o.sign(e);return new n(a.toDER());
        }function o(e, t, n) {
          for (var r, i = t.params.priv_key, o = t.params.p, f = t.params.q, p = t.params.g, h = new v(0), l = c(e, f).mod(f), b = !1, m = s(i, f, e, n); b === !1;) {
            r = u(f, m, n), h = d(p, r, o, f), b = r.invm(f).imul(l.add(i.mul(h))).mod(f), b.cmpn(0) || (b = !1, h = new v(0));
          }return a(h, b);
        }function a(e, t) {
          e = e.toArray(), t = t.toArray(), 128 & e[0] && (e = [0].concat(e)), 128 & t[0] && (t = [0].concat(t));var r = e.length + t.length + 4,
              i = [48, r, 2, e.length];return i = i.concat(e, [2, t.length], t), new n(i);
        }function s(e, t, r, i) {
          if (e = new n(e.toArray()), e.length < t.byteLength()) {
            var o = new n(t.byteLength() - e.length);o.fill(0), e = n.concat([o, e]);
          }var a = r.length,
              s = f(r, t),
              c = new n(a);c.fill(1);var u = new n(a);return u.fill(0), u = p(i, u).update(c).update(new n([0])).update(e).update(s).digest(), c = p(i, u).update(c).digest(), u = p(i, u).update(c).update(new n([1])).update(e).update(s).digest(), c = p(i, u).update(c).digest(), { k: u, v: c };
        }function c(e, t) {
          var n = new v(e),
              r = (e.length << 3) - t.bitLength();return r > 0 && n.ishrn(r), n;
        }function f(e, t) {
          e = c(e, t), e = e.mod(t);var r = new n(e.toArray());if (r.length < t.byteLength()) {
            var i = new n(t.byteLength() - r.length);i.fill(0), r = n.concat([i, r]);
          }return r;
        }function u(e, t, r) {
          var i, o;do {
            for (i = new n(""); 8 * i.length < e.bitLength();) {
              t.v = p(r, t.k).update(t.v).digest(), i = n.concat([i, t.v]);
            }o = c(i, e), t.k = p(r, t.k).update(t.v).update(new n([0])).digest(), t.v = p(r, t.k).update(t.v).digest();
          } while (-1 !== o.cmp(e));return o;
        }function d(e, t, n, r) {
          return e.toRed(v.mont(n)).redPow(t).fromRed().mod(r);
        }var p = e("create-hmac"),
            h = e("browserify-rsa"),
            l = e("./curves"),
            b = e("elliptic"),
            m = e("parse-asn1"),
            v = e("bn.js"),
            g = b.ec;t.exports = r, t.exports.getKey = s, t.exports.makeKey = u;
      }).call(this, e("buffer").Buffer);
    }, { "./curves": 26, "bn.js": 27, "browserify-rsa": 28, buffer: 179, "create-hmac": 108, elliptic: 29, "parse-asn1": 54 }], 71: [function (e, t, n) {
      (function (n) {
        function r(e, t, r, a) {
          var s = f(r);if ("ec" === s.type) {
            if ("ecdsa" !== a) throw new Error("wrong public key type");return i(e, t, s);
          }if ("dsa" === s.type) {
            if ("dsa" !== a) throw new Error("wrong public key type");return o(e, t, s);
          }if ("rsa" !== a) throw new Error("wrong public key type");for (var c = s.modulus.byteLength(), d = [1], p = 0; t.length + d.length + 2 < c;) {
            d.push(255), p++;
          }d.push(0);for (var h = -1; ++h < t.length;) {
            d.push(t[h]);
          }d = new n(d);var l = u.mont(s.modulus);e = new u(e).toRed(l), e = e.redPow(new u(s.publicExponent)), e = new n(e.fromRed().toArray());var b = 0;for (8 > p && (b = 1), c = Math.min(e.length, d.length), e.length !== d.length && (b = 1), h = -1; ++h < c;) {
            b |= e[h] ^ d[h];
          }return 0 === b;
        }function i(e, t, n) {
          var r = s[n.data.algorithm.curve.join(".")];if (!r) throw new Error("unknown curve " + n.data.algorithm.curve.join("."));var i = new d(r),
              o = n.data.subjectPrivateKey.data;return i.verify(t, e, o);
        }function o(e, t, n) {
          var r = n.data.p,
              i = n.data.q,
              o = n.data.g,
              s = n.data.pub_key,
              c = f.signature.decode(e, "der"),
              d = c.s,
              p = c.r;a(d, i), a(p, i);var h = u.mont(r),
              l = d.invm(i),
              b = o.toRed(h).redPow(new u(t).mul(l).mod(i)).fromRed().mul(s.toRed(h).redPow(p.mul(l).mod(i)).fromRed()).mod(r).mod(i);return !b.cmp(p);
        }function a(e, t) {
          if (e.cmpn(0) <= 0) throw new Error("invalid sig");if (e.cmp(t) >= t) throw new Error("invalid sig");
        }var s = e("./curves"),
            c = e("elliptic"),
            f = e("parse-asn1"),
            u = e("bn.js"),
            d = c.ec;t.exports = r;
      }).call(this, e("buffer").Buffer);
    }, { "./curves": 26, "bn.js": 27, buffer: 179, elliptic: 29, "parse-asn1": 54 }], 72: [function (e, t, n) {
      (function (n) {
        function r(e) {
          this.curveType = s[e], this.curveType || (this.curveType = { name: e }), this.curve = new o.ec(this.curveType.name), this.keys = void 0;
        }function i(e, t, r) {
          Array.isArray(e) || (e = e.toArray());var i = new n(e);if (r && i.length < r) {
            var o = new n(r - i.length);o.fill(0), i = n.concat([o, i]);
          }return t ? i.toString(t) : i;
        }var o = e("elliptic"),
            a = e("bn.js");t.exports = function (e) {
          return new r(e);
        };var s = { secp256k1: { name: "secp256k1", byteLength: 32 }, secp224r1: { name: "p224", byteLength: 28 }, prime256v1: { name: "p256", byteLength: 32 }, prime192v1: { name: "p192", byteLength: 24 }, ed25519: { name: "ed25519", byteLength: 32 } };s.p224 = s.secp224r1, s.p256 = s.secp256r1 = s.prime256v1, s.p192 = s.secp192r1 = s.prime192v1, r.prototype.generateKeys = function (e, t) {
          return this.keys = this.curve.genKeyPair(), this.getPublicKey(e, t);
        }, r.prototype.computeSecret = function (e, t, r) {
          t = t || "utf8", n.isBuffer(e) || (e = new n(e, t));var o = this.curve.keyFromPublic(e).getPublic(),
              a = o.mul(this.keys.getPrivate()).getX();return i(a, r, this.curveType.byteLength);
        }, r.prototype.getPublicKey = function (e, t) {
          var n = this.keys.getPublic("compressed" === t, !0);return "hybrid" === t && (n[n.length - 1] % 2 ? n[0] = 7 : n[0] = 6), i(n, e);
        }, r.prototype.getPrivateKey = function (e) {
          return i(this.keys.getPrivate(), e);
        }, r.prototype.setPublicKey = function (e, t) {
          return t = t || "utf8", n.isBuffer(e) || (e = new n(e, t)), this.keys._importPublic(e), this;
        }, r.prototype.setPrivateKey = function (e, t) {
          t = t || "utf8", n.isBuffer(e) || (e = new n(e, t));var r = new a(e);return r = r.toString(16), this.keys._importPrivate(r), this;
        };
      }).call(this, e("buffer").Buffer);
    }, { "bn.js": 74, buffer: 179, elliptic: 75 }], 73: [function (e, t, n) {
      var r = e("crypto").createECDH;t.exports = r || e("./browser");
    }, { "./browser": 72, crypto: 5 }], 74: [function (e, t, n) {
      arguments[4][27][0].apply(n, arguments);
    }, { dup: 27 }], 75: [function (e, t, n) {
      arguments[4][29][0].apply(n, arguments);
    }, { "../package.json": 95, "./elliptic/curve": 78, "./elliptic/curves": 81, "./elliptic/ec": 82, "./elliptic/hmac-drbg": 85, "./elliptic/utils": 87, brorand: 88, dup: 29 }], 76: [function (e, t, n) {
      arguments[4][30][0].apply(n, arguments);
    }, { "../../elliptic": 75, "bn.js": 74, dup: 30 }], 77: [function (e, t, n) {
      arguments[4][31][0].apply(n, arguments);
    }, { "../../elliptic": 75, "../curve": 78, "bn.js": 74, dup: 31, inherits: 152 }], 78: [function (e, t, n) {
      arguments[4][32][0].apply(n, arguments);
    }, { "./base": 76, "./edwards": 77, "./mont": 79, "./short": 80, dup: 32 }], 79: [function (e, t, n) {
      arguments[4][33][0].apply(n, arguments);
    }, { "../curve": 78, "bn.js": 74, dup: 33, inherits: 152 }], 80: [function (e, t, n) {
      arguments[4][34][0].apply(n, arguments);
    }, { "../../elliptic": 75, "../curve": 78, "bn.js": 74, dup: 34, inherits: 152 }], 81: [function (e, t, n) {
      arguments[4][35][0].apply(n, arguments);
    }, { "../elliptic": 75, "./precomputed/secp256k1": 86, dup: 35, "hash.js": 89 }], 82: [function (e, t, n) {
      arguments[4][36][0].apply(n, arguments);
    }, { "../../elliptic": 75, "./key": 83, "./signature": 84, "bn.js": 74, dup: 36 }], 83: [function (e, t, n) {
      arguments[4][37][0].apply(n, arguments);
    }, { "../../elliptic": 75, "bn.js": 74, dup: 37 }], 84: [function (e, t, n) {
      arguments[4][38][0].apply(n, arguments);
    }, { "../../elliptic": 75, "bn.js": 74, dup: 38 }], 85: [function (e, t, n) {
      arguments[4][39][0].apply(n, arguments);
    }, { "../elliptic": 75, dup: 39, "hash.js": 89 }], 86: [function (e, t, n) {
      arguments[4][40][0].apply(n, arguments);
    }, { dup: 40 }], 87: [function (e, t, n) {
      arguments[4][41][0].apply(n, arguments);
    }, { dup: 41 }], 88: [function (e, t, n) {
      arguments[4][42][0].apply(n, arguments);
    }, { dup: 42 }], 89: [function (e, t, n) {
      arguments[4][43][0].apply(n, arguments);
    }, { "./hash/common": 90, "./hash/hmac": 91, "./hash/ripemd": 92, "./hash/sha": 93, "./hash/utils": 94, dup: 43 }], 90: [function (e, t, n) {
      arguments[4][44][0].apply(n, arguments);
    }, { "../hash": 89, dup: 44 }], 91: [function (e, t, n) {
      arguments[4][45][0].apply(n, arguments);
    }, { "../hash": 89, dup: 45 }], 92: [function (e, t, n) {
      arguments[4][46][0].apply(n, arguments);
    }, { "../hash": 89, dup: 46 }], 93: [function (e, t, n) {
      arguments[4][47][0].apply(n, arguments);
    }, { "../hash": 89, dup: 47 }], 94: [function (e, t, n) {
      arguments[4][48][0].apply(n, arguments);
    }, { dup: 48, inherits: 152 }], 95: [function (e, t, n) {
      arguments[4][49][0].apply(n, arguments);
    }, { dup: 49 }], 96: [function (e, t, n) {
      (function (n) {
        "use strict";
        function r(e) {
          f.call(this), this._hash = e, this.buffers = [];
        }function i(e) {
          f.call(this), this._hash = e;
        }var o = e("inherits"),
            a = e("./md5"),
            s = e("ripemd160"),
            c = e("sha.js"),
            f = e("stream").Transform;o(r, f), r.prototype._transform = function (e, t, n) {
          this.buffers.push(e), n();
        }, r.prototype._flush = function (e) {
          this.push(this.digest()), e();
        }, r.prototype.update = function (e, t) {
          return "string" == typeof e && (e = new n(e, t)), this.buffers.push(e), this;
        }, r.prototype.digest = function (e) {
          var t = n.concat(this.buffers),
              r = this._hash(t);return this.buffers = null, e ? r.toString(e) : r;
        }, o(i, f), i.prototype._transform = function (e, t, r) {
          t && (e = new n(e, t)), this._hash.update(e), r();
        }, i.prototype._flush = function (e) {
          this.push(this._hash.digest()), this._hash = null, e();
        }, i.prototype.update = function (e, t) {
          return "string" == typeof e && (e = new n(e, t)), this._hash.update(e), this;
        }, i.prototype.digest = function (e) {
          var t = this._hash.digest();return e ? t.toString(e) : t;
        }, t.exports = function (e) {
          return "md5" === e ? new r(a) : "rmd160" === e ? new r(s) : new i(c(e));
        };
      }).call(this, e("buffer").Buffer);
    }, { "./md5": 98, buffer: 179, inherits: 152, ripemd160: 99, "sha.js": 101, stream: 172 }], 97: [function (e, t, n) {
      (function (e) {
        "use strict";
        function t(t, n) {
          if (t.length % o !== 0) {
            var r = t.length + (o - t.length % o);t = e.concat([t, a], r);
          }for (var i = [], s = n ? t.readInt32BE : t.readInt32LE, c = 0; c < t.length; c += o) {
            i.push(s.call(t, c));
          }return i;
        }function r(t, n, r) {
          for (var i = new e(n), o = r ? i.writeInt32BE : i.writeInt32LE, a = 0; a < t.length; a++) {
            o.call(i, t[a], 4 * a, !0);
          }return i;
        }function i(n, i, o, a) {
          e.isBuffer(n) || (n = new e(n));var c = i(t(n, a), n.length * s);return r(c, o, a);
        }var o = 4,
            a = new e(o);a.fill(0);var s = 8;n.hash = i;
      }).call(this, e("buffer").Buffer);
    }, { buffer: 179 }], 98: [function (e, t, n) {
      "use strict";
      function r(e, t) {
        e[t >> 5] |= 128 << t % 32, e[(t + 64 >>> 9 << 4) + 14] = t;for (var n = 1732584193, r = -271733879, i = -1732584194, u = 271733878, d = 0; d < e.length; d += 16) {
          var p = n,
              h = r,
              l = i,
              b = u;n = o(n, r, i, u, e[d + 0], 7, -680876936), u = o(u, n, r, i, e[d + 1], 12, -389564586), i = o(i, u, n, r, e[d + 2], 17, 606105819), r = o(r, i, u, n, e[d + 3], 22, -1044525330), n = o(n, r, i, u, e[d + 4], 7, -176418897), u = o(u, n, r, i, e[d + 5], 12, 1200080426), i = o(i, u, n, r, e[d + 6], 17, -1473231341), r = o(r, i, u, n, e[d + 7], 22, -45705983), n = o(n, r, i, u, e[d + 8], 7, 1770035416), u = o(u, n, r, i, e[d + 9], 12, -1958414417), i = o(i, u, n, r, e[d + 10], 17, -42063), r = o(r, i, u, n, e[d + 11], 22, -1990404162), n = o(n, r, i, u, e[d + 12], 7, 1804603682), u = o(u, n, r, i, e[d + 13], 12, -40341101), i = o(i, u, n, r, e[d + 14], 17, -1502002290), r = o(r, i, u, n, e[d + 15], 22, 1236535329), n = a(n, r, i, u, e[d + 1], 5, -165796510), u = a(u, n, r, i, e[d + 6], 9, -1069501632), i = a(i, u, n, r, e[d + 11], 14, 643717713), r = a(r, i, u, n, e[d + 0], 20, -373897302), n = a(n, r, i, u, e[d + 5], 5, -701558691), u = a(u, n, r, i, e[d + 10], 9, 38016083), i = a(i, u, n, r, e[d + 15], 14, -660478335), r = a(r, i, u, n, e[d + 4], 20, -405537848), n = a(n, r, i, u, e[d + 9], 5, 568446438), u = a(u, n, r, i, e[d + 14], 9, -1019803690), i = a(i, u, n, r, e[d + 3], 14, -187363961), r = a(r, i, u, n, e[d + 8], 20, 1163531501), n = a(n, r, i, u, e[d + 13], 5, -1444681467), u = a(u, n, r, i, e[d + 2], 9, -51403784), i = a(i, u, n, r, e[d + 7], 14, 1735328473), r = a(r, i, u, n, e[d + 12], 20, -1926607734), n = s(n, r, i, u, e[d + 5], 4, -378558), u = s(u, n, r, i, e[d + 8], 11, -2022574463), i = s(i, u, n, r, e[d + 11], 16, 1839030562), r = s(r, i, u, n, e[d + 14], 23, -35309556), n = s(n, r, i, u, e[d + 1], 4, -1530992060), u = s(u, n, r, i, e[d + 4], 11, 1272893353), i = s(i, u, n, r, e[d + 7], 16, -155497632), r = s(r, i, u, n, e[d + 10], 23, -1094730640), n = s(n, r, i, u, e[d + 13], 4, 681279174), u = s(u, n, r, i, e[d + 0], 11, -358537222), i = s(i, u, n, r, e[d + 3], 16, -722521979), r = s(r, i, u, n, e[d + 6], 23, 76029189), n = s(n, r, i, u, e[d + 9], 4, -640364487), u = s(u, n, r, i, e[d + 12], 11, -421815835), i = s(i, u, n, r, e[d + 15], 16, 530742520), r = s(r, i, u, n, e[d + 2], 23, -995338651), n = c(n, r, i, u, e[d + 0], 6, -198630844), u = c(u, n, r, i, e[d + 7], 10, 1126891415), i = c(i, u, n, r, e[d + 14], 15, -1416354905), r = c(r, i, u, n, e[d + 5], 21, -57434055), n = c(n, r, i, u, e[d + 12], 6, 1700485571), u = c(u, n, r, i, e[d + 3], 10, -1894986606), i = c(i, u, n, r, e[d + 10], 15, -1051523), r = c(r, i, u, n, e[d + 1], 21, -2054922799), n = c(n, r, i, u, e[d + 8], 6, 1873313359), u = c(u, n, r, i, e[d + 15], 10, -30611744), i = c(i, u, n, r, e[d + 6], 15, -1560198380), r = c(r, i, u, n, e[d + 13], 21, 1309151649), n = c(n, r, i, u, e[d + 4], 6, -145523070), u = c(u, n, r, i, e[d + 11], 10, -1120210379), i = c(i, u, n, r, e[d + 2], 15, 718787259), r = c(r, i, u, n, e[d + 9], 21, -343485551), n = f(n, p), r = f(r, h), i = f(i, l), u = f(u, b);
        }return Array(n, r, i, u);
      }function i(e, t, n, r, i, o) {
        return f(u(f(f(t, e), f(r, o)), i), n);
      }function o(e, t, n, r, o, a, s) {
        return i(t & n | ~t & r, e, t, o, a, s);
      }function a(e, t, n, r, o, a, s) {
        return i(t & r | n & ~r, e, t, o, a, s);
      }function s(e, t, n, r, o, a, s) {
        return i(t ^ n ^ r, e, t, o, a, s);
      }function c(e, t, n, r, o, a, s) {
        return i(n ^ (t | ~r), e, t, o, a, s);
      }function f(e, t) {
        var n = (65535 & e) + (65535 & t),
            r = (e >> 16) + (t >> 16) + (n >> 16);return r << 16 | 65535 & n;
      }function u(e, t) {
        return e << t | e >>> 32 - t;
      }var d = e("./helpers");t.exports = function (e) {
        return d.hash(e, r, 16);
      };
    }, { "./helpers": 97 }], 99: [function (e, t, n) {
      (function (e) {
        function n(e) {
          for (var t = [], n = 0, r = 0; n < e.length; n++, r += 8) {
            t[r >>> 5] |= e[n] << 24 - r % 32;
          }return t;
        }function r(e) {
          for (var t = [], n = 0; n < 32 * e.length; n += 8) {
            t.push(e[n >>> 5] >>> 24 - n % 32 & 255);
          }return t;
        }function i(e, t, n) {
          for (var r = 0; 16 > r; r++) {
            var i = n + r,
                d = t[i];t[i] = 16711935 & (d << 8 | d >>> 24) | 4278255360 & (d << 24 | d >>> 8);
          }var g, y, w, _, x, E, S, k, T, j;E = g = e[0], S = y = e[1], k = w = e[2], T = _ = e[3], j = x = e[4];var A;for (r = 0; 80 > r; r += 1) {
            A = g + t[n + p[r]] | 0, A += 16 > r ? o(y, w, _) + m[0] : 32 > r ? a(y, w, _) + m[1] : 48 > r ? s(y, w, _) + m[2] : 64 > r ? c(y, w, _) + m[3] : f(y, w, _) + m[4], A = 0 | A, A = u(A, l[r]), A = A + x | 0, g = x, x = _, _ = u(w, 10), w = y, y = A, A = E + t[n + h[r]] | 0, A += 16 > r ? f(S, k, T) + v[0] : 32 > r ? c(S, k, T) + v[1] : 48 > r ? s(S, k, T) + v[2] : 64 > r ? a(S, k, T) + v[3] : o(S, k, T) + v[4], A = 0 | A, A = u(A, b[r]), A = A + j | 0, E = j, j = T, T = u(k, 10), k = S, S = A;
          }A = e[1] + w + T | 0, e[1] = e[2] + _ + j | 0, e[2] = e[3] + x + E | 0, e[3] = e[4] + g + S | 0, e[4] = e[0] + y + k | 0, e[0] = A;
        }function o(e, t, n) {
          return e ^ t ^ n;
        }function a(e, t, n) {
          return e & t | ~e & n;
        }function s(e, t, n) {
          return (e | ~t) ^ n;
        }function c(e, t, n) {
          return e & n | t & ~n;
        }function f(e, t, n) {
          return e ^ (t | ~n);
        }function u(e, t) {
          return e << t | e >>> 32 - t;
        }function d(t) {
          var o = [1732584193, 4023233417, 2562383102, 271733878, 3285377520];"string" == typeof t && (t = new e(t, "utf8"));var a = n(t),
              s = 8 * t.length,
              c = 8 * t.length;a[s >>> 5] |= 128 << 24 - s % 32, a[(s + 64 >>> 9 << 4) + 14] = 16711935 & (c << 8 | c >>> 24) | 4278255360 & (c << 24 | c >>> 8);for (var f = 0; f < a.length; f += 16) {
            i(o, a, f);
          }for (f = 0; 5 > f; f++) {
            var u = o[f];o[f] = 16711935 & (u << 8 | u >>> 24) | 4278255360 & (u << 24 | u >>> 8);
          }var d = r(o);return new e(d);
        }var p = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 7, 4, 13, 1, 10, 6, 15, 3, 12, 0, 9, 5, 2, 14, 11, 8, 3, 10, 14, 4, 9, 15, 8, 1, 2, 7, 0, 6, 13, 11, 5, 12, 1, 9, 11, 10, 0, 8, 12, 4, 13, 3, 7, 15, 14, 5, 6, 2, 4, 0, 5, 9, 7, 12, 2, 10, 14, 1, 3, 8, 11, 6, 15, 13],
            h = [5, 14, 7, 0, 9, 2, 11, 4, 13, 6, 15, 8, 1, 10, 3, 12, 6, 11, 3, 7, 0, 13, 5, 10, 14, 15, 8, 12, 4, 9, 1, 2, 15, 5, 1, 3, 7, 14, 6, 9, 11, 8, 12, 2, 10, 0, 4, 13, 8, 6, 4, 1, 3, 11, 15, 0, 5, 12, 2, 13, 9, 7, 10, 14, 12, 15, 10, 4, 1, 5, 8, 7, 6, 2, 13, 14, 0, 3, 9, 11],
            l = [11, 14, 15, 12, 5, 8, 7, 9, 11, 13, 14, 15, 6, 7, 9, 8, 7, 6, 8, 13, 11, 9, 7, 15, 7, 12, 15, 9, 11, 7, 13, 12, 11, 13, 6, 7, 14, 9, 13, 15, 14, 8, 13, 6, 5, 12, 7, 5, 11, 12, 14, 15, 14, 15, 9, 8, 9, 14, 5, 6, 8, 6, 5, 12, 9, 15, 5, 11, 6, 8, 13, 12, 5, 12, 13, 14, 11, 8, 5, 6],
            b = [8, 9, 9, 11, 13, 15, 15, 5, 7, 7, 8, 11, 14, 14, 12, 6, 9, 13, 15, 7, 12, 8, 9, 11, 7, 7, 12, 7, 6, 15, 13, 11, 9, 7, 15, 11, 8, 6, 6, 14, 12, 13, 5, 14, 13, 13, 7, 5, 15, 5, 8, 11, 14, 14, 6, 14, 6, 9, 12, 9, 12, 5, 15, 8, 8, 5, 12, 9, 12, 5, 14, 6, 8, 13, 6, 5, 15, 13, 11, 11],
            m = [0, 1518500249, 1859775393, 2400959708, 2840853838],
            v = [1352829926, 1548603684, 1836072691, 2053994217, 0];
        t.exports = d;
      }).call(this, e("buffer").Buffer);
    }, { buffer: 179 }], 100: [function (e, t, n) {
      (function (e) {
        function n(t, n) {
          this._block = new e(t), this._finalSize = n, this._blockSize = t, this._len = 0, this._s = 0;
        }n.prototype.update = function (t, n) {
          "string" == typeof t && (n = n || "utf8", t = new e(t, n));for (var r = this._len += t.length, i = this._s || 0, o = 0, a = this._block; r > i;) {
            for (var s = Math.min(t.length, o + this._blockSize - i % this._blockSize), c = s - o, f = 0; c > f; f++) {
              a[i % this._blockSize + f] = t[f + o];
            }i += c, o += c, i % this._blockSize === 0 && this._update(a);
          }return this._s = i, this;
        }, n.prototype.digest = function (e) {
          var t = 8 * this._len;this._block[this._len % this._blockSize] = 128, this._block.fill(0, this._len % this._blockSize + 1), t % (8 * this._blockSize) >= 8 * this._finalSize && (this._update(this._block), this._block.fill(0)), this._block.writeInt32BE(t, this._blockSize - 4);var n = this._update(this._block) || this._hash();return e ? n.toString(e) : n;
        }, n.prototype._update = function () {
          throw new Error("_update must be implemented by subclass");
        }, t.exports = n;
      }).call(this, e("buffer").Buffer);
    }, { buffer: 179 }], 101: [function (e, t, n) {
      var n = t.exports = function (e) {
        e = e.toLowerCase();var t = n[e];if (!t) throw new Error(e + " is not supported (we accept pull requests)");return new t();
      };n.sha = e("./sha"), n.sha1 = e("./sha1"), n.sha224 = e("./sha224"), n.sha256 = e("./sha256"), n.sha384 = e("./sha384"), n.sha512 = e("./sha512");
    }, { "./sha": 102, "./sha1": 103, "./sha224": 104, "./sha256": 105, "./sha384": 106, "./sha512": 107 }], 102: [function (e, t, n) {
      (function (n) {
        function r() {
          this.init(), this._w = s, a.call(this, 64, 56);
        }function i(e, t) {
          return e << t | e >>> 32 - t;
        }var o = e("inherits"),
            a = e("./hash"),
            s = new Array(80);o(r, a), r.prototype.init = function () {
          return this._a = 1732584193, this._b = -271733879, this._c = -1732584194, this._d = 271733878, this._e = -1009589776, this;
        }, r.prototype._update = function (e) {
          function t() {
            return o[d - 3] ^ o[d - 8] ^ o[d - 14] ^ o[d - 16];
          }function n(e, t) {
            o[d] = e;var n = i(a, 5) + t + u + e + r;u = f, f = c, c = i(s, 30), s = a, a = n, d++;
          }var r,
              o = this._w,
              a = this._a,
              s = this._b,
              c = this._c,
              f = this._d,
              u = this._e,
              d = 0;for (r = 1518500249; 16 > d;) {
            n(e.readInt32BE(4 * d), s & c | ~s & f);
          }for (; 20 > d;) {
            n(t(), s & c | ~s & f);
          }for (r = 1859775393; 40 > d;) {
            n(t(), s ^ c ^ f);
          }for (r = -1894007588; 60 > d;) {
            n(t(), s & c | s & f | c & f);
          }for (r = -899497514; 80 > d;) {
            n(t(), s ^ c ^ f);
          }this._a = a + this._a | 0, this._b = s + this._b | 0, this._c = c + this._c | 0, this._d = f + this._d | 0, this._e = u + this._e | 0;
        }, r.prototype._hash = function () {
          var e = new n(20);return e.writeInt32BE(0 | this._a, 0), e.writeInt32BE(0 | this._b, 4), e.writeInt32BE(0 | this._c, 8), e.writeInt32BE(0 | this._d, 12), e.writeInt32BE(0 | this._e, 16), e;
        }, t.exports = r;
      }).call(this, e("buffer").Buffer);
    }, { "./hash": 100, buffer: 179, inherits: 152 }], 103: [function (e, t, n) {
      (function (n) {
        function r() {
          this.init(), this._w = s, a.call(this, 64, 56);
        }function i(e, t) {
          return e << t | e >>> 32 - t;
        }var o = e("inherits"),
            a = e("./hash"),
            s = new Array(80);o(r, a), r.prototype.init = function () {
          return this._a = 1732584193, this._b = -271733879, this._c = -1732584194, this._d = 271733878, this._e = -1009589776, this;
        }, r.prototype._update = function (e) {
          function t() {
            return i(o[d - 3] ^ o[d - 8] ^ o[d - 14] ^ o[d - 16], 1);
          }function n(e, t) {
            o[d] = e;var n = i(a, 5) + t + u + e + r;u = f, f = c, c = i(s, 30), s = a, a = n, d++;
          }var r,
              o = this._w,
              a = this._a,
              s = this._b,
              c = this._c,
              f = this._d,
              u = this._e,
              d = 0;for (r = 1518500249; 16 > d;) {
            n(e.readInt32BE(4 * d), s & c | ~s & f);
          }for (; 20 > d;) {
            n(t(), s & c | ~s & f);
          }for (r = 1859775393; 40 > d;) {
            n(t(), s ^ c ^ f);
          }for (r = -1894007588; 60 > d;) {
            n(t(), s & c | s & f | c & f);
          }for (r = -899497514; 80 > d;) {
            n(t(), s ^ c ^ f);
          }this._a = a + this._a | 0, this._b = s + this._b | 0, this._c = c + this._c | 0, this._d = f + this._d | 0, this._e = u + this._e | 0;
        }, r.prototype._hash = function () {
          var e = new n(20);return e.writeInt32BE(0 | this._a, 0), e.writeInt32BE(0 | this._b, 4), e.writeInt32BE(0 | this._c, 8), e.writeInt32BE(0 | this._d, 12), e.writeInt32BE(0 | this._e, 16), e;
        }, t.exports = r;
      }).call(this, e("buffer").Buffer);
    }, { "./hash": 100, buffer: 179, inherits: 152 }], 104: [function (e, t, n) {
      (function (n) {
        function r() {
          this.init(), this._w = s, a.call(this, 64, 56);
        }var i = e("inherits"),
            o = e("./sha256"),
            a = e("./hash"),
            s = new Array(64);i(r, o), r.prototype.init = function () {
          return this._a = -1056596264, this._b = 914150663, this._c = 812702999, this._d = -150054599, this._e = -4191439, this._f = 1750603025, this._g = 1694076839, this._h = -1090891868, this;
        }, r.prototype._hash = function () {
          var e = new n(28);return e.writeInt32BE(this._a, 0), e.writeInt32BE(this._b, 4), e.writeInt32BE(this._c, 8), e.writeInt32BE(this._d, 12), e.writeInt32BE(this._e, 16), e.writeInt32BE(this._f, 20), e.writeInt32BE(this._g, 24), e;
        }, t.exports = r;
      }).call(this, e("buffer").Buffer);
    }, { "./hash": 100, "./sha256": 105, buffer: 179, inherits: 152 }], 105: [function (e, t, n) {
      (function (n) {
        function r() {
          this.init(), this._w = h, d.call(this, 64, 56);
        }function i(e, t, n) {
          return n ^ e & (t ^ n);
        }function o(e, t, n) {
          return e & t | n & (e | t);
        }function a(e) {
          return (e >>> 2 | e << 30) ^ (e >>> 13 | e << 19) ^ (e >>> 22 | e << 10);
        }function s(e) {
          return (e >>> 6 | e << 26) ^ (e >>> 11 | e << 21) ^ (e >>> 25 | e << 7);
        }function c(e) {
          return (e >>> 7 | e << 25) ^ (e >>> 18 | e << 14) ^ e >>> 3;
        }function f(e) {
          return (e >>> 17 | e << 15) ^ (e >>> 19 | e << 13) ^ e >>> 10;
        }var u = e("inherits"),
            d = e("./hash"),
            p = [1116352408, 1899447441, 3049323471, 3921009573, 961987163, 1508970993, 2453635748, 2870763221, 3624381080, 310598401, 607225278, 1426881987, 1925078388, 2162078206, 2614888103, 3248222580, 3835390401, 4022224774, 264347078, 604807628, 770255983, 1249150122, 1555081692, 1996064986, 2554220882, 2821834349, 2952996808, 3210313671, 3336571891, 3584528711, 113926993, 338241895, 666307205, 773529912, 1294757372, 1396182291, 1695183700, 1986661051, 2177026350, 2456956037, 2730485921, 2820302411, 3259730800, 3345764771, 3516065817, 3600352804, 4094571909, 275423344, 430227734, 506948616, 659060556, 883997877, 958139571, 1322822218, 1537002063, 1747873779, 1955562222, 2024104815, 2227730452, 2361852424, 2428436474, 2756734187, 3204031479, 3329325298],
            h = new Array(64);u(r, d), r.prototype.init = function () {
          return this._a = 1779033703, this._b = -1150833019, this._c = 1013904242, this._d = -1521486534, this._e = 1359893119, this._f = -1694144372, this._g = 528734635, this._h = 1541459225, this;
        }, r.prototype._update = function (e) {
          function t() {
            return f(r[y - 2]) + r[y - 7] + c(r[y - 15]) + r[y - 16];
          }function n(e) {
            r[y] = e;var t = g + s(b) + i(b, m, v) + p[y] + e,
                n = a(u) + o(u, d, h);g = v, v = m, m = b, b = l + t, l = h, h = d, d = u, u = t + n, y++;
          }for (var r = this._w, u = 0 | this._a, d = 0 | this._b, h = 0 | this._c, l = 0 | this._d, b = 0 | this._e, m = 0 | this._f, v = 0 | this._g, g = 0 | this._h, y = 0; 16 > y;) {
            n(e.readInt32BE(4 * y));
          }for (; 64 > y;) {
            n(t());
          }this._a = u + this._a | 0, this._b = d + this._b | 0, this._c = h + this._c | 0, this._d = l + this._d | 0, this._e = b + this._e | 0, this._f = m + this._f | 0, this._g = v + this._g | 0, this._h = g + this._h | 0;
        }, r.prototype._hash = function () {
          var e = new n(32);return e.writeInt32BE(this._a, 0), e.writeInt32BE(this._b, 4), e.writeInt32BE(this._c, 8), e.writeInt32BE(this._d, 12), e.writeInt32BE(this._e, 16), e.writeInt32BE(this._f, 20), e.writeInt32BE(this._g, 24), e.writeInt32BE(this._h, 28), e;
        }, t.exports = r;
      }).call(this, e("buffer").Buffer);
    }, { "./hash": 100, buffer: 179, inherits: 152 }], 106: [function (e, t, n) {
      (function (n) {
        function r() {
          this.init(), this._w = s, a.call(this, 128, 112);
        }var i = e("inherits"),
            o = e("./sha512"),
            a = e("./hash"),
            s = new Array(160);i(r, o), r.prototype.init = function () {
          return this._a = -876896931, this._b = 1654270250, this._c = -1856437926, this._d = 355462360, this._e = 1731405415, this._f = -1900787065, this._g = -619958771, this._h = 1203062813, this._al = -1056596264, this._bl = 914150663, this._cl = 812702999, this._dl = -150054599, this._el = -4191439, this._fl = 1750603025, this._gl = 1694076839, this._hl = -1090891868, this;
        }, r.prototype._hash = function () {
          function e(e, n, r) {
            t.writeInt32BE(e, r), t.writeInt32BE(n, r + 4);
          }var t = new n(48);return e(this._a, this._al, 0), e(this._b, this._bl, 8), e(this._c, this._cl, 16), e(this._d, this._dl, 24), e(this._e, this._el, 32), e(this._f, this._fl, 40), t;
        }, t.exports = r;
      }).call(this, e("buffer").Buffer);
    }, { "./hash": 100, "./sha512": 107, buffer: 179, inherits: 152 }], 107: [function (e, t, n) {
      (function (n) {
        function r() {
          this.init(), this._w = b, h.call(this, 128, 112);
        }function i(e, t, n) {
          return n ^ e & (t ^ n);
        }function o(e, t, n) {
          return e & t | n & (e | t);
        }function a(e, t) {
          return (e >>> 28 | t << 4) ^ (t >>> 2 | e << 30) ^ (t >>> 7 | e << 25);
        }function s(e, t) {
          return (e >>> 14 | t << 18) ^ (e >>> 18 | t << 14) ^ (t >>> 9 | e << 23);
        }function c(e, t) {
          return (e >>> 1 | t << 31) ^ (e >>> 8 | t << 24) ^ e >>> 7;
        }function f(e, t) {
          return (e >>> 1 | t << 31) ^ (e >>> 8 | t << 24) ^ (e >>> 7 | t << 25);
        }function u(e, t) {
          return (e >>> 19 | t << 13) ^ (t >>> 29 | e << 3) ^ e >>> 6;
        }function d(e, t) {
          return (e >>> 19 | t << 13) ^ (t >>> 29 | e << 3) ^ (e >>> 6 | t << 26);
        }var p = e("inherits"),
            h = e("./hash"),
            l = [1116352408, 3609767458, 1899447441, 602891725, 3049323471, 3964484399, 3921009573, 2173295548, 961987163, 4081628472, 1508970993, 3053834265, 2453635748, 2937671579, 2870763221, 3664609560, 3624381080, 2734883394, 310598401, 1164996542, 607225278, 1323610764, 1426881987, 3590304994, 1925078388, 4068182383, 2162078206, 991336113, 2614888103, 633803317, 3248222580, 3479774868, 3835390401, 2666613458, 4022224774, 944711139, 264347078, 2341262773, 604807628, 2007800933, 770255983, 1495990901, 1249150122, 1856431235, 1555081692, 3175218132, 1996064986, 2198950837, 2554220882, 3999719339, 2821834349, 766784016, 2952996808, 2566594879, 3210313671, 3203337956, 3336571891, 1034457026, 3584528711, 2466948901, 113926993, 3758326383, 338241895, 168717936, 666307205, 1188179964, 773529912, 1546045734, 1294757372, 1522805485, 1396182291, 2643833823, 1695183700, 2343527390, 1986661051, 1014477480, 2177026350, 1206759142, 2456956037, 344077627, 2730485921, 1290863460, 2820302411, 3158454273, 3259730800, 3505952657, 3345764771, 106217008, 3516065817, 3606008344, 3600352804, 1432725776, 4094571909, 1467031594, 275423344, 851169720, 430227734, 3100823752, 506948616, 1363258195, 659060556, 3750685593, 883997877, 3785050280, 958139571, 3318307427, 1322822218, 3812723403, 1537002063, 2003034995, 1747873779, 3602036899, 1955562222, 1575990012, 2024104815, 1125592928, 2227730452, 2716904306, 2361852424, 442776044, 2428436474, 593698344, 2756734187, 3733110249, 3204031479, 2999351573, 3329325298, 3815920427, 3391569614, 3928383900, 3515267271, 566280711, 3940187606, 3454069534, 4118630271, 4000239992, 116418474, 1914138554, 174292421, 2731055270, 289380356, 3203993006, 460393269, 320620315, 685471733, 587496836, 852142971, 1086792851, 1017036298, 365543100, 1126000580, 2618297676, 1288033470, 3409855158, 1501505948, 4234509866, 1607167915, 987167468, 1816402316, 1246189591],
            b = new Array(160);p(r, h), r.prototype.init = function () {
          return this._a = 1779033703, this._b = -1150833019, this._c = 1013904242, this._d = -1521486534, this._e = 1359893119, this._f = -1694144372, this._g = 528734635, this._h = 1541459225, this._al = -205731576, this._bl = -2067093701, this._cl = -23791573, this._dl = 1595750129, this._el = -1377402159, this._fl = 725511199, this._gl = -79577749, this._hl = 327033209, this;
        }, r.prototype._update = function (e) {
          function t() {
            var e = h[N - 30],
                t = h[N - 30 + 1],
                n = c(e, t),
                i = f(t, e);e = h[N - 4], t = h[N - 4 + 1];var o = u(e, t),
                a = d(t, e),
                s = h[N - 14],
                l = h[N - 14 + 1],
                b = h[N - 32],
                m = h[N - 32 + 1];p = i + l, r = n + s + (i >>> 0 > p >>> 0 ? 1 : 0), p += a, r = r + o + (a >>> 0 > p >>> 0 ? 1 : 0), p += m, r = r + b + (m >>> 0 > p >>> 0 ? 1 : 0);
          }function n() {
            h[N] = r, h[N + 1] = p;var e = o(b, m, v),
                t = o(E, S, k),
                n = a(b, E),
                c = a(E, b),
                f = s(y, j),
                u = s(j, y),
                d = l[N],
                B = l[N + 1],
                C = i(y, w, _),
                q = i(j, A, I),
                P = R + u,
                M = x + f + (R >>> 0 > P >>> 0 ? 1 : 0);P += q, M = M + C + (q >>> 0 > P >>> 0 ? 1 : 0), P += B, M = M + d + (B >>> 0 > P >>> 0 ? 1 : 0), P += p, M = M + r + (p >>> 0 > P >>> 0 ? 1 : 0);var U = c + t,
                z = n + e + (c >>> 0 > U >>> 0 ? 1 : 0);x = _, R = I, _ = w, I = A, w = y, A = j, j = T + P | 0, y = g + M + (T >>> 0 > j >>> 0 ? 1 : 0) | 0, g = v, T = k, v = m, k = S, m = b, S = E, E = P + U | 0, b = M + z + (P >>> 0 > E >>> 0 ? 1 : 0) | 0, O++, N += 2;
          }for (var r, p, h = this._w, b = 0 | this._a, m = 0 | this._b, v = 0 | this._c, g = 0 | this._d, y = 0 | this._e, w = 0 | this._f, _ = 0 | this._g, x = 0 | this._h, E = 0 | this._al, S = 0 | this._bl, k = 0 | this._cl, T = 0 | this._dl, j = 0 | this._el, A = 0 | this._fl, I = 0 | this._gl, R = 0 | this._hl, O = 0, N = 0; 16 > O;) {
            r = e.readInt32BE(4 * N), p = e.readInt32BE(4 * N + 4), n();
          }for (; 80 > O;) {
            t(), n();
          }this._al = this._al + E | 0, this._bl = this._bl + S | 0, this._cl = this._cl + k | 0, this._dl = this._dl + T | 0, this._el = this._el + j | 0, this._fl = this._fl + A | 0, this._gl = this._gl + I | 0, this._hl = this._hl + R | 0, this._a = this._a + b + (this._al >>> 0 < E >>> 0 ? 1 : 0) | 0, this._b = this._b + m + (this._bl >>> 0 < S >>> 0 ? 1 : 0) | 0, this._c = this._c + v + (this._cl >>> 0 < k >>> 0 ? 1 : 0) | 0, this._d = this._d + g + (this._dl >>> 0 < T >>> 0 ? 1 : 0) | 0, this._e = this._e + y + (this._el >>> 0 < j >>> 0 ? 1 : 0) | 0, this._f = this._f + w + (this._fl >>> 0 < A >>> 0 ? 1 : 0) | 0, this._g = this._g + _ + (this._gl >>> 0 < I >>> 0 ? 1 : 0) | 0, this._h = this._h + x + (this._hl >>> 0 < R >>> 0 ? 1 : 0) | 0;
        }, r.prototype._hash = function () {
          function e(e, n, r) {
            t.writeInt32BE(e, r), t.writeInt32BE(n, r + 4);
          }var t = new n(64);return e(this._a, this._al, 0), e(this._b, this._bl, 8), e(this._c, this._cl, 16), e(this._d, this._dl, 24), e(this._e, this._el, 32), e(this._f, this._fl, 40), e(this._g, this._gl, 48), e(this._h, this._hl, 56), t;
        }, t.exports = r;
      }).call(this, e("buffer").Buffer);
    }, { "./hash": 100, buffer: 179, inherits: 152 }], 108: [function (e, t, n) {
      (function (n) {
        "use strict";
        function r(e, t) {
          a.call(this), "string" == typeof t && (t = new n(t));var r = "sha512" === e || "sha384" === e ? 128 : 64;this._alg = e, this._key = t, t.length > r ? t = i(e).update(t).digest() : t.length < r && (t = n.concat([t, s], r));for (var o = this._ipad = new n(r), c = this._opad = new n(r), f = 0; r > f; f++) {
            o[f] = 54 ^ t[f], c[f] = 92 ^ t[f];
          }this._hash = i(e).update(o);
        }var i = e("create-hash/browser"),
            o = e("inherits"),
            a = e("stream").Transform,
            s = new n(128);s.fill(0), o(r, a), r.prototype.update = function (e, t) {
          return this._hash.update(e, t), this;
        }, r.prototype._transform = function (e, t, n) {
          this._hash.update(e), n();
        }, r.prototype._flush = function (e) {
          this.push(this.digest()), e();
        }, r.prototype.digest = function (e) {
          var t = this._hash.digest();return i(this._alg).update(this._opad).update(t).digest(e);
        }, t.exports = function (e, t) {
          return new r(e, t);
        };
      }).call(this, e("buffer").Buffer);
    }, { buffer: 179, "create-hash/browser": 96, inherits: 152, stream: 172 }], 109: [function (e, t, n) {
      (function (t) {
        function r(e) {
          var n = new t(a[e].prime, "hex"),
              r = new t(a[e].gen, "hex");return new s(n, r);
        }function i(e, n, r, i) {
          return (t.isBuffer(n) || "string" == typeof n && -1 === ["hex", "binary", "base64"].indexOf(n)) && (i = r, r = n, n = void 0), n = n || "binary", i = i || "binary", r = r || new t([2]), t.isBuffer(r) || (r = new t(r, i)), "number" == typeof e ? new s(o(e, r), r, !0) : (t.isBuffer(e) || (e = new t(e, n)), new s(e, r, !0));
        }var o = e("./lib/generatePrime"),
            a = e("./lib/primes"),
            s = e("./lib/dh");n.DiffieHellmanGroup = n.createDiffieHellmanGroup = n.getDiffieHellman = r, n.createDiffieHellman = n.DiffieHellman = i;
      }).call(this, e("buffer").Buffer);
    }, { "./lib/dh": 110, "./lib/generatePrime": 111, "./lib/primes": 112, buffer: 179 }], 110: [function (e, t, n) {
      (function (n) {
        function r(e, t) {
          return t = t || "utf8", n.isBuffer(e) || (e = new n(e, t)), this._pub = new f(e), this;
        }function i(e, t) {
          return t = t || "utf8", n.isBuffer(e) || (e = new n(e, t)), this._priv = new f(e), this;
        }function o(e, t) {
          var n = t.toString("hex"),
              r = [n, e.toString(16)].join("_");if (r in y) return y[r];var i = 0;if (e.isEven() || !v.simpleSieve || !v.fermatTest(e) || !d.test(e)) return i += 1, i += "02" === n || "05" === n ? 8 : 4, y[r] = i, i;d.test(e.shrn(1)) || (i += 2);var o;switch (n) {case "02":
              e.mod(p).cmp(h) && (i += 8);break;case "05":
              o = e.mod(l), o.cmp(b) && o.cmp(m) && (i += 8);break;default:
              i += 4;}return y[r] = i, i;
        }function a(e, t) {
          try {
            Object.defineProperty(e, "verifyError", { enumerable: !0, value: t, writable: !1 });
          } catch (n) {
            e.verifyError = t;
          }
        }function s(e, t, n) {
          this.setGenerator(t), this.__prime = new f(e), this._prime = f.mont(this.__prime), this._primeLen = e.length, this._pub = void 0, this._priv = void 0, n ? (this.setPublicKey = r, this.setPrivateKey = i, a(this, o(this.__prime, t))) : a(this, 8);
        }function c(e, t) {
          var r = new n(e.toArray());return t ? r.toString(t) : r;
        }var f = e("bn.js"),
            u = e("miller-rabin"),
            d = new u(),
            p = new f(24),
            h = new f(11),
            l = new f(10),
            b = new f(3),
            m = new f(7),
            v = e("./generatePrime"),
            g = e("randombytes");t.exports = s;var y = {};s.prototype.generateKeys = function () {
          return this._priv || (this._priv = new f(g(this._primeLen))), this._pub = this._gen.toRed(this._prime).redPow(this._priv).fromRed(), this.getPublicKey();
        }, s.prototype.computeSecret = function (e) {
          e = new f(e), e = e.toRed(this._prime);var t = e.redPow(this._priv).fromRed(),
              r = new n(t.toArray()),
              i = this.getPrime();if (r.length < i.length) {
            var o = new n(i.length - r.length);o.fill(0), r = n.concat([o, r]);
          }return r;
        }, s.prototype.getPublicKey = function (e) {
          return c(this._pub, e);
        }, s.prototype.getPrivateKey = function (e) {
          return c(this._priv, e);
        }, s.prototype.getPrime = function (e) {
          return c(this.__prime, e);
        }, s.prototype.getGenerator = function (e) {
          return c(this._gen, e);
        }, s.prototype.setGenerator = function (e, t) {
          return t = t || "utf8", n.isBuffer(e) || (e = new n(e, t)), this._gen = new f(e), this;
        };
      }).call(this, e("buffer").Buffer);
    }, { "./generatePrime": 111, "bn.js": 113, buffer: 179, "miller-rabin": 114, randombytes: 145 }], 111: [function (e, t, n) {
      function r() {
        if (null !== x) return x;var e = 1048576,
            t = [];t[0] = 2;for (var n = 1, r = 3; e > r; r += 2) {
          for (var i = Math.ceil(Math.sqrt(r)), o = 0; n > o && t[o] <= i && r % t[o] !== 0; o++) {}n !== o && t[o] <= i || (t[n++] = r);
        }return x = t, t;
      }function i(e) {
        for (var t = r(), n = 0; n < t.length; n++) {
          if (0 === e.modn(t[n])) return 0 === e.cmpn(t[n]);
        }return !0;
      }function o(e) {
        var t = c.mont(e);return 0 === h.toRed(t).redPow(e.subn(1)).fromRed().cmpn(1);
      }function a(e, t) {
        function n(e) {
          r = -1;for (var n = new c(s(Math.ceil(e / 8))); n.bitLength() > e;) {
            n.ishrn(1);
          }if (n.isEven() && n.iadd(p), n.testn(1) || n.iadd(h), t.cmp(h)) {
            if (t.cmp(l)) a = { major: [w], minor: [h] };else {
              for (rem = n.mod(v); rem.cmp(g);) {
                n.iadd(w), rem = n.mod(v);
              }a = { major: [w, b], minor: [h, m] };
            }
          } else {
            for (; n.mod(f).cmp(y);) {
              n.iadd(w);
            }a = { major: [f], minor: [_] };
          }return n;
        }if (16 > e) return new c(2 === t || 5 === t ? [140, 123] : [140, 39]);t = new c(t);for (var r, a, u = n(e), x = u.shrn(1);;) {
          for (; u.bitLength() > e;) {
            u = n(e), x = u.shrn(1);
          }if (r++, i(x) && i(u) && o(x) && o(u) && d.test(x) && d.test(u)) return u;u.iadd(a.major[r % a.major.length]), x.iadd(a.minor[r % a.minor.length]);
        }
      }var s = e("randombytes");t.exports = a, a.simpleSieve = i, a.fermatTest = o;var c = e("bn.js"),
          f = new c(24),
          u = e("miller-rabin"),
          d = new u(),
          p = new c(1),
          h = new c(2),
          l = new c(5),
          b = new c(16),
          m = new c(8),
          v = new c(10),
          g = new c(3),
          y = (new c(7), new c(11)),
          w = new c(4),
          _ = new c(12),
          x = null;
    }, { "bn.js": 113, "miller-rabin": 114, randombytes: 145 }], 112: [function (e, t, n) {
      t.exports = { modp1: { gen: "02", prime: "ffffffffffffffffc90fdaa22168c234c4c6628b80dc1cd129024e088a67cc74020bbea63b139b22514a08798e3404ddef9519b3cd3a431b302b0a6df25f14374fe1356d6d51c245e485b576625e7ec6f44c42e9a63a3620ffffffffffffffff" }, modp2: { gen: "02", prime: "ffffffffffffffffc90fdaa22168c234c4c6628b80dc1cd129024e088a67cc74020bbea63b139b22514a08798e3404ddef9519b3cd3a431b302b0a6df25f14374fe1356d6d51c245e485b576625e7ec6f44c42e9a637ed6b0bff5cb6f406b7edee386bfb5a899fa5ae9f24117c4b1fe649286651ece65381ffffffffffffffff" }, modp5: { gen: "02", prime: "ffffffffffffffffc90fdaa22168c234c4c6628b80dc1cd129024e088a67cc74020bbea63b139b22514a08798e3404ddef9519b3cd3a431b302b0a6df25f14374fe1356d6d51c245e485b576625e7ec6f44c42e9a637ed6b0bff5cb6f406b7edee386bfb5a899fa5ae9f24117c4b1fe649286651ece45b3dc2007cb8a163bf0598da48361c55d39a69163fa8fd24cf5f83655d23dca3ad961c62f356208552bb9ed529077096966d670c354e4abc9804f1746c08ca237327ffffffffffffffff" }, modp14: { gen: "02", prime: "ffffffffffffffffc90fdaa22168c234c4c6628b80dc1cd129024e088a67cc74020bbea63b139b22514a08798e3404ddef9519b3cd3a431b302b0a6df25f14374fe1356d6d51c245e485b576625e7ec6f44c42e9a637ed6b0bff5cb6f406b7edee386bfb5a899fa5ae9f24117c4b1fe649286651ece45b3dc2007cb8a163bf0598da48361c55d39a69163fa8fd24cf5f83655d23dca3ad961c62f356208552bb9ed529077096966d670c354e4abc9804f1746c08ca18217c32905e462e36ce3be39e772c180e86039b2783a2ec07a28fb5c55df06f4c52c9de2bcbf6955817183995497cea956ae515d2261898fa051015728e5a8aacaa68ffffffffffffffff" }, modp15: { gen: "02", prime: "ffffffffffffffffc90fdaa22168c234c4c6628b80dc1cd129024e088a67cc74020bbea63b139b22514a08798e3404ddef9519b3cd3a431b302b0a6df25f14374fe1356d6d51c245e485b576625e7ec6f44c42e9a637ed6b0bff5cb6f406b7edee386bfb5a899fa5ae9f24117c4b1fe649286651ece45b3dc2007cb8a163bf0598da48361c55d39a69163fa8fd24cf5f83655d23dca3ad961c62f356208552bb9ed529077096966d670c354e4abc9804f1746c08ca18217c32905e462e36ce3be39e772c180e86039b2783a2ec07a28fb5c55df06f4c52c9de2bcbf6955817183995497cea956ae515d2261898fa051015728e5a8aaac42dad33170d04507a33a85521abdf1cba64ecfb850458dbef0a8aea71575d060c7db3970f85a6e1e4c7abf5ae8cdb0933d71e8c94e04a25619dcee3d2261ad2ee6bf12ffa06d98a0864d87602733ec86a64521f2b18177b200cbbe117577a615d6c770988c0bad946e208e24fa074e5ab3143db5bfce0fd108e4b82d120a93ad2caffffffffffffffff" }, modp16: { gen: "02", prime: "ffffffffffffffffc90fdaa22168c234c4c6628b80dc1cd129024e088a67cc74020bbea63b139b22514a08798e3404ddef9519b3cd3a431b302b0a6df25f14374fe1356d6d51c245e485b576625e7ec6f44c42e9a637ed6b0bff5cb6f406b7edee386bfb5a899fa5ae9f24117c4b1fe649286651ece45b3dc2007cb8a163bf0598da48361c55d39a69163fa8fd24cf5f83655d23dca3ad961c62f356208552bb9ed529077096966d670c354e4abc9804f1746c08ca18217c32905e462e36ce3be39e772c180e86039b2783a2ec07a28fb5c55df06f4c52c9de2bcbf6955817183995497cea956ae515d2261898fa051015728e5a8aaac42dad33170d04507a33a85521abdf1cba64ecfb850458dbef0a8aea71575d060c7db3970f85a6e1e4c7abf5ae8cdb0933d71e8c94e04a25619dcee3d2261ad2ee6bf12ffa06d98a0864d87602733ec86a64521f2b18177b200cbbe117577a615d6c770988c0bad946e208e24fa074e5ab3143db5bfce0fd108e4b82d120a92108011a723c12a787e6d788719a10bdba5b2699c327186af4e23c1a946834b6150bda2583e9ca2ad44ce8dbbbc2db04de8ef92e8efc141fbecaa6287c59474e6bc05d99b2964fa090c3a2233ba186515be7ed1f612970cee2d7afb81bdd762170481cd0069127d5b05aa993b4ea988d8fddc186ffb7dc90a6c08f4df435c934063199ffffffffffffffff" }, modp17: { gen: "02", prime: "ffffffffffffffffc90fdaa22168c234c4c6628b80dc1cd129024e088a67cc74020bbea63b139b22514a08798e3404ddef9519b3cd3a431b302b0a6df25f14374fe1356d6d51c245e485b576625e7ec6f44c42e9a637ed6b0bff5cb6f406b7edee386bfb5a899fa5ae9f24117c4b1fe649286651ece45b3dc2007cb8a163bf0598da48361c55d39a69163fa8fd24cf5f83655d23dca3ad961c62f356208552bb9ed529077096966d670c354e4abc9804f1746c08ca18217c32905e462e36ce3be39e772c180e86039b2783a2ec07a28fb5c55df06f4c52c9de2bcbf6955817183995497cea956ae515d2261898fa051015728e5a8aaac42dad33170d04507a33a85521abdf1cba64ecfb850458dbef0a8aea71575d060c7db3970f85a6e1e4c7abf5ae8cdb0933d71e8c94e04a25619dcee3d2261ad2ee6bf12ffa06d98a0864d87602733ec86a64521f2b18177b200cbbe117577a615d6c770988c0bad946e208e24fa074e5ab3143db5bfce0fd108e4b82d120a92108011a723c12a787e6d788719a10bdba5b2699c327186af4e23c1a946834b6150bda2583e9ca2ad44ce8dbbbc2db04de8ef92e8efc141fbecaa6287c59474e6bc05d99b2964fa090c3a2233ba186515be7ed1f612970cee2d7afb81bdd762170481cd0069127d5b05aa993b4ea988d8fddc186ffb7dc90a6c08f4df435c93402849236c3fab4d27c7026c1d4dcb2602646dec9751e763dba37bdf8ff9406ad9e530ee5db382f413001aeb06a53ed9027d831179727b0865a8918da3edbebcf9b14ed44ce6cbaced4bb1bdb7f1447e6cc254b332051512bd7af426fb8f401378cd2bf5983ca01c64b92ecf032ea15d1721d03f482d7ce6e74fef6d55e702f46980c82b5a84031900b1c9e59e7c97fbec7e8f323a97a7e36cc88be0f1d45b7ff585ac54bd407b22b4154aacc8f6d7ebf48e1d814cc5ed20f8037e0a79715eef29be32806a1d58bb7c5da76f550aa3d8a1fbff0eb19ccb1a313d55cda56c9ec2ef29632387fe8d76e3c0468043e8f663f4860ee12bf2d5b0b7474d6e694f91e6dcc4024ffffffffffffffff" }, modp18: { gen: "02", prime: "ffffffffffffffffc90fdaa22168c234c4c6628b80dc1cd129024e088a67cc74020bbea63b139b22514a08798e3404ddef9519b3cd3a431b302b0a6df25f14374fe1356d6d51c245e485b576625e7ec6f44c42e9a637ed6b0bff5cb6f406b7edee386bfb5a899fa5ae9f24117c4b1fe649286651ece45b3dc2007cb8a163bf0598da48361c55d39a69163fa8fd24cf5f83655d23dca3ad961c62f356208552bb9ed529077096966d670c354e4abc9804f1746c08ca18217c32905e462e36ce3be39e772c180e86039b2783a2ec07a28fb5c55df06f4c52c9de2bcbf6955817183995497cea956ae515d2261898fa051015728e5a8aaac42dad33170d04507a33a85521abdf1cba64ecfb850458dbef0a8aea71575d060c7db3970f85a6e1e4c7abf5ae8cdb0933d71e8c94e04a25619dcee3d2261ad2ee6bf12ffa06d98a0864d87602733ec86a64521f2b18177b200cbbe117577a615d6c770988c0bad946e208e24fa074e5ab3143db5bfce0fd108e4b82d120a92108011a723c12a787e6d788719a10bdba5b2699c327186af4e23c1a946834b6150bda2583e9ca2ad44ce8dbbbc2db04de8ef92e8efc141fbecaa6287c59474e6bc05d99b2964fa090c3a2233ba186515be7ed1f612970cee2d7afb81bdd762170481cd0069127d5b05aa993b4ea988d8fddc186ffb7dc90a6c08f4df435c93402849236c3fab4d27c7026c1d4dcb2602646dec9751e763dba37bdf8ff9406ad9e530ee5db382f413001aeb06a53ed9027d831179727b0865a8918da3edbebcf9b14ed44ce6cbaced4bb1bdb7f1447e6cc254b332051512bd7af426fb8f401378cd2bf5983ca01c64b92ecf032ea15d1721d03f482d7ce6e74fef6d55e702f46980c82b5a84031900b1c9e59e7c97fbec7e8f323a97a7e36cc88be0f1d45b7ff585ac54bd407b22b4154aacc8f6d7ebf48e1d814cc5ed20f8037e0a79715eef29be32806a1d58bb7c5da76f550aa3d8a1fbff0eb19ccb1a313d55cda56c9ec2ef29632387fe8d76e3c0468043e8f663f4860ee12bf2d5b0b7474d6e694f91e6dbe115974a3926f12fee5e438777cb6a932df8cd8bec4d073b931ba3bc832b68d9dd300741fa7bf8afc47ed2576f6936ba424663aab639c5ae4f5683423b4742bf1c978238f16cbe39d652de3fdb8befc848ad922222e04a4037c0713eb57a81a23f0c73473fc646cea306b4bcbc8862f8385ddfa9d4b7fa2c087e879683303ed5bdd3a062b3cf5b3a278a66d2a13f83f44f82ddf310ee074ab6a364597e899a0255dc164f31cc50846851df9ab48195ded7ea1b1d510bd7ee74d73faf36bc31ecfa268359046f4eb879f924009438b481c6cd7889a002ed5ee382bc9190da6fc026e479558e4475677e9aa9e3050e2765694dfc81f56e880b96e7160c980dd98edd3dfffffffffffffffff" } };
    }, {}], 113: [function (e, t, n) {
      arguments[4][27][0].apply(n, arguments);
    }, { dup: 27 }], 114: [function (e, t, n) {
      function r(e) {
        this.rand = e || new o.Rand();
      }var i = e("bn.js"),
          o = e("brorand");t.exports = r, r.create = function (e) {
        return new r(e);
      }, r.prototype._rand = function (e) {
        var t = e.bitLength(),
            n = this.rand.generate(Math.ceil(t / 8));n[0] |= 3;var r = 7 & t;return 0 !== r && (n[n.length - 1] >>= 7 - r), new i(n);
      }, r.prototype.test = function (e, t, n) {
        var r = e.bitLength(),
            o = i.mont(e),
            a = new i(1).toRed(o);t || (t = Math.max(1, r / 48 | 0));for (var s = e.subn(1), c = s.subn(1), f = 0; !s.testn(f); f++) {}for (var u = e.shrn(f), d = s.toRed(o), p = !0; t > 0; t--) {
          var h = this._rand(c);n && n(h);var l = h.toRed(o).redPow(u);if (0 !== l.cmp(a) && 0 !== l.cmp(d)) {
            for (var b = 1; f > b; b++) {
              if (l = l.redSqr(), 0 === l.cmp(a)) return !1;if (0 === l.cmp(d)) break;
            }if (b === f) return !1;
          }
        }return p;
      }, r.prototype.getDivisor = function (e, t) {
        var n = e.bitLength(),
            r = i.mont(e),
            o = new i(1).toRed(r);t || (t = Math.max(1, n / 48 | 0));for (var a = e.subn(1), s = a.subn(1), c = 0; !a.testn(c); c++) {}for (var f = e.shrn(c), u = a.toRed(r); t > 0; t--) {
          var d = this._rand(s),
              p = e.gcd(d);if (0 !== p.cmpn(1)) return p;var h = d.toRed(r).redPow(f);if (0 !== h.cmp(o) && 0 !== h.cmp(u)) {
            for (var l = 1; c > l; l++) {
              if (h = h.redSqr(), 0 === h.cmp(o)) return h.fromRed().subn(1).gcd(e);if (0 === h.cmp(u)) break;
            }if (l === c) return h = h.redSqr(), h.fromRed().subn(1).gcd(e);
          }
        }return !1;
      };
    }, { "bn.js": 113, brorand: 115 }], 115: [function (e, t, n) {
      arguments[4][42][0].apply(n, arguments);
    }, { dup: 42 }], 116: [function (e, t, n) {
      (function (t) {
        function r(e, t, n, r, o, a) {
          if ("function" == typeof o && (a = o, o = void 0), "function" != typeof a) throw new Error("No callback provided to pbkdf2");var s = i(e, t, n, r, o);setTimeout(function () {
            a(void 0, s);
          });
        }function i(e, n, r, i, s) {
          if ("number" != typeof r) throw new TypeError("Iterations not a number");if (0 > r) throw new TypeError("Bad iterations");if ("number" != typeof i) throw new TypeError("Key length not a number");if (0 > i || i > a) throw new TypeError("Bad key length");s = s || "sha1", t.isBuffer(e) || (e = new t(e, "binary")), t.isBuffer(n) || (n = new t(n, "binary"));var c,
              f = 1,
              u = new t(i),
              d = new t(n.length + 4);n.copy(d, 0, 0, n.length);for (var p, h, l = 1; f >= l; l++) {
            d.writeUInt32BE(l, n.length);var b = o(s, e).update(d).digest();c || (c = b.length, h = new t(c), f = Math.ceil(i / c), p = i - (f - 1) * c), b.copy(h, 0, 0, c);for (var m = 1; r > m; m++) {
              b = o(s, e).update(b).digest();for (var v = 0; c > v; v++) {
                h[v] ^= b[v];
              }
            }var g = (l - 1) * c,
                y = l === f ? p : c;h.copy(u, g, 0, y);
          }return u;
        }var o = e("create-hmac"),
            a = Math.pow(2, 30) - 1;n.pbkdf2 = r, n.pbkdf2Sync = i;
      }).call(this, e("buffer").Buffer);
    }, { buffer: 179, "create-hmac": 108 }], 117: [function (e, t, n) {
      n.publicEncrypt = e("./publicEncrypt"), n.privateDecrypt = e("./privateDecrypt"), n.privateEncrypt = function (e, t) {
        return n.publicEncrypt(e, t, !0);
      }, n.publicDecrypt = function (e, t) {
        return n.privateDecrypt(e, t, !0);
      };
    }, { "./privateDecrypt": 141, "./publicEncrypt": 142 }], 118: [function (e, t, n) {
      (function (n) {
        function r(e) {
          var t = new n(4);return t.writeUInt32BE(e, 0), t;
        }var i = e("create-hash");t.exports = function (e, t) {
          for (var o, a = new n(""), s = 0; a.length < t;) {
            o = r(s++), a = n.concat([a, i("sha1").update(e).update(o).digest()]);
          }return a.slice(0, t);
        };
      }).call(this, e("buffer").Buffer);
    }, { buffer: 179, "create-hash": 96 }], 119: [function (e, t, n) {
      arguments[4][27][0].apply(n, arguments);
    }, { dup: 27 }], 120: [function (e, t, n) {
      arguments[4][28][0].apply(n, arguments);
    }, { "bn.js": 119, buffer: 179, dup: 28, randombytes: 145 }], 121: [function (e, t, n) {
      arguments[4][50][0].apply(n, arguments);
    }, { buffer: 179, "create-hash": 96, dup: 50 }], 122: [function (e, t, n) {
      arguments[4][51][0].apply(n, arguments);
    }, { dup: 51 }], 123: [function (e, t, n) {
      arguments[4][52][0].apply(n, arguments);
    }, { "asn1.js": 126, dup: 52 }], 124: [function (e, t, n) {
      arguments[4][53][0].apply(n, arguments);
    }, { "./EVP_BytesToKey": 121, "browserify-aes": 9, buffer: 179, dup: 53 }], 125: [function (e, t, n) {
      arguments[4][54][0].apply(n, arguments);
    }, { "./aesid.json": 122, "./asn1": 123, "./fixProc": 124, "browserify-aes": 9, buffer: 179, dup: 54, pbkdf2: 116 }], 126: [function (e, t, n) {
      arguments[4][55][0].apply(n, arguments);
    }, { "./asn1/api": 127, "./asn1/base": 129, "./asn1/constants": 133, "./asn1/decoders": 135, "./asn1/encoders": 138, "bn.js": 119, dup: 55 }], 127: [function (e, t, n) {
      arguments[4][56][0].apply(n, arguments);
    }, { "../asn1": 126, dup: 56, inherits: 152, vm: 177 }], 128: [function (e, t, n) {
      arguments[4][57][0].apply(n, arguments);
    }, { "../base": 129, buffer: 179, dup: 57, inherits: 152 }], 129: [function (e, t, n) {
      arguments[4][58][0].apply(n, arguments);
    }, { "./buffer": 128, "./node": 130, "./reporter": 131, dup: 58 }], 130: [function (e, t, n) {
      arguments[4][59][0].apply(n, arguments);
    }, { "../base": 129, dup: 59, "minimalistic-assert": 140 }], 131: [function (e, t, n) {
      arguments[4][60][0].apply(n, arguments);
    }, { dup: 60, inherits: 152 }], 132: [function (e, t, n) {
      arguments[4][61][0].apply(n, arguments);
    }, { "../constants": 133, dup: 61 }], 133: [function (e, t, n) {
      arguments[4][62][0].apply(n, arguments);
    }, { "./der": 132, dup: 62 }], 134: [function (e, t, n) {
      arguments[4][63][0].apply(n, arguments);
    }, { "../../asn1": 126, dup: 63, inherits: 152 }], 135: [function (e, t, n) {
      arguments[4][64][0].apply(n, arguments);
    }, { "./der": 134, "./pem": 136, dup: 64 }], 136: [function (e, t, n) {
      arguments[4][65][0].apply(n, arguments);
    }, { "../../asn1": 126, "./der": 134, buffer: 179, dup: 65, inherits: 152 }], 137: [function (e, t, n) {
      arguments[4][66][0].apply(n, arguments);
    }, { "../../asn1": 126, buffer: 179, dup: 66, inherits: 152 }], 138: [function (e, t, n) {
      arguments[4][67][0].apply(n, arguments);
    }, { "./der": 137, "./pem": 139, dup: 67 }], 139: [function (e, t, n) {
      arguments[4][68][0].apply(n, arguments);
    }, { "../../asn1": 126, "./der": 137, buffer: 179, dup: 68, inherits: 152 }], 140: [function (e, t, n) {
      arguments[4][69][0].apply(n, arguments);
    }, { dup: 69 }], 141: [function (e, t, n) {
      (function (n) {
        function r(e, t) {
          var r = (e.modulus, e.modulus.byteLength()),
              i = (t.length, d("sha1").update(new n("")).digest()),
              a = i.length;if (0 !== t[0]) throw new Error("decryption error");var f = t.slice(1, a + 1),
              u = t.slice(a + 1),
              p = c(f, s(u, a)),
              h = c(u, s(p, r - a - 1));if (o(i, h.slice(0, a))) throw new Error("decryption error");for (var l = a; 0 === h[l];) {
            l++;
          }if (1 !== h[l++]) throw new Error("decryption error");return h.slice(l);
        }function i(e, t, n) {
          for (var r = t.slice(0, 2), i = 2, o = 0; 0 !== t[i++];) {
            if (i >= t.length) {
              o++;break;
            }
          }var a = t.slice(2, i - 1);t.slice(i - 1, i);if (("0002" !== r.toString("hex") && !n || "0001" !== r.toString("hex") && n) && o++, a.length < 8 && o++, o) throw new Error("decryption error");return t.slice(i);
        }function o(e, t) {
          e = new n(e), t = new n(t);var r = 0,
              i = e.length;e.length !== t.length && (r++, i = Math.min(e.length, t.length));for (var o = -1; ++o < i;) {
            r += e[o] ^ t[o];
          }return r;
        }var a = e("parse-asn1"),
            s = e("./mgf"),
            c = e("./xor"),
            f = e("bn.js"),
            u = e("browserify-rsa"),
            d = e("create-hash"),
            p = e("./withPublic");t.exports = function (e, t, o) {
          var s;s = e.padding ? e.padding : o ? 1 : 4;var c = a(e),
              d = c.modulus.byteLength();if (t.length > d || new f(t).cmp(c.modulus) >= 0) throw new Error("decryption error");var h;h = o ? p(new f(t), c) : u(t, c);var l = new n(d - h.length);if (l.fill(0), h = n.concat([l, h], d), 4 === s) return r(c, h);if (1 === s) return i(c, h, o);if (3 === s) return h;throw new Error("unknown padding");
        };
      }).call(this, e("buffer").Buffer);
    }, { "./mgf": 118, "./withPublic": 143, "./xor": 144, "bn.js": 119, "browserify-rsa": 120, buffer: 179, "create-hash": 96, "parse-asn1": 125 }], 142: [function (e, t, n) {
      (function (n) {
        function r(e, t) {
          var r = e.modulus.byteLength(),
              i = t.length,
              o = c("sha1").update(new n("")).digest(),
              a = o.length,
              p = 2 * a;if (i > r - p - 2) throw new Error("message too long");var h = new n(r - i - p - 2);h.fill(0);var l = r - a - 1,
              b = s(a),
              m = u(n.concat([o, h, new n([1]), t], l), f(b, l)),
              v = u(b, f(m, a));return new d(n.concat([new n([0]), v, m], r));
        }function i(e, t, r) {
          var i = t.length,
              a = e.modulus.byteLength();if (i > a - 11) throw new Error("message too long");var s;return r ? (s = new n(a - i - 3), s.fill(255)) : s = o(a - i - 3), new d(n.concat([new n([0, r ? 1 : 2]), s, new n([0]), t], a));
        }function o(e, t) {
          for (var r, i = new n(e), o = 0, a = s(2 * e), c = 0; e > o;) {
            c === a.length && (a = s(2 * e), c = 0), r = a[c++], r && (i[o++] = r);
          }return i;
        }var a = e("parse-asn1"),
            s = e("randombytes"),
            c = e("create-hash"),
            f = e("./mgf"),
            u = e("./xor"),
            d = e("bn.js"),
            p = e("./withPublic"),
            h = e("browserify-rsa");t.exports = function (e, t, n) {
          var o;o = e.padding ? e.padding : n ? 1 : 4;var s,
              c = a(e);if (4 === o) s = r(c, t);else if (1 === o) s = i(c, t, n);else {
            if (3 !== o) throw new Error("unknown padding");if (s = new d(t), s.cmp(c.modulus) >= 0) throw new Error("data too long for modulus");
          }return n ? h(s, c) : p(s, c);
        };
      }).call(this, e("buffer").Buffer);
    }, { "./mgf": 118, "./withPublic": 143, "./xor": 144, "bn.js": 119, "browserify-rsa": 120, buffer: 179, "create-hash": 96, "parse-asn1": 125,
      randombytes: 145 }], 143: [function (e, t, n) {
      (function (n) {
        function r(e, t) {
          return new n(e.toRed(i.mont(t.modulus)).redPow(new i(t.publicExponent)).fromRed().toArray());
        }var i = e("bn.js");t.exports = r;
      }).call(this, e("buffer").Buffer);
    }, { "bn.js": 119, buffer: 179 }], 144: [function (e, t, n) {
      t.exports = function (e, t) {
        for (var n = e.length, r = -1; ++r < n;) {
          e[r] ^= t[r];
        }return e;
      };
    }, {}], 145: [function (e, t, n) {
      (function (e, n, r) {
        "use strict";
        function i(t, n) {
          var i = new r(t);return a.getRandomValues(i), "function" == typeof n ? e.nextTick(function () {
            n(null, i);
          }) : i;
        }function o() {
          throw new Error("secure random number generation not supported by this browser\nuse chrome, FireFox or Internet Explorer 11");
        }var a = n.crypto || n.msCrypto;a && a.getRandomValues ? t.exports = i : t.exports = o;
      }).call(this, e("_process"), "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {}, e("buffer").Buffer);
    }, { _process: 156, buffer: 179 }], 146: [function (e, t, n) {
      function r() {
        this._events = this._events || {}, this._maxListeners = this._maxListeners || void 0;
      }function i(e) {
        return "function" == typeof e;
      }function o(e) {
        return "number" == typeof e;
      }function a(e) {
        return "object" == (typeof e === "undefined" ? "undefined" : _typeof(e)) && null !== e;
      }function s(e) {
        return void 0 === e;
      }t.exports = r, r.EventEmitter = r, r.prototype._events = void 0, r.prototype._maxListeners = void 0, r.defaultMaxListeners = 10, r.prototype.setMaxListeners = function (e) {
        if (!o(e) || 0 > e || isNaN(e)) throw TypeError("n must be a positive number");return this._maxListeners = e, this;
      }, r.prototype.emit = function (e) {
        var t, n, r, o, c, f;if (this._events || (this._events = {}), "error" === e && (!this._events.error || a(this._events.error) && !this._events.error.length)) {
          if (t = arguments[1], t instanceof Error) throw t;throw TypeError('Uncaught, unspecified "error" event.');
        }if (n = this._events[e], s(n)) return !1;if (i(n)) switch (arguments.length) {case 1:
            n.call(this);break;case 2:
            n.call(this, arguments[1]);break;case 3:
            n.call(this, arguments[1], arguments[2]);break;default:
            for (r = arguments.length, o = new Array(r - 1), c = 1; r > c; c++) {
              o[c - 1] = arguments[c];
            }n.apply(this, o);} else if (a(n)) {
          for (r = arguments.length, o = new Array(r - 1), c = 1; r > c; c++) {
            o[c - 1] = arguments[c];
          }for (f = n.slice(), r = f.length, c = 0; r > c; c++) {
            f[c].apply(this, o);
          }
        }return !0;
      }, r.prototype.addListener = function (e, t) {
        var n;if (!i(t)) throw TypeError("listener must be a function");if (this._events || (this._events = {}), this._events.newListener && this.emit("newListener", e, i(t.listener) ? t.listener : t), this._events[e] ? a(this._events[e]) ? this._events[e].push(t) : this._events[e] = [this._events[e], t] : this._events[e] = t, a(this._events[e]) && !this._events[e].warned) {
          var n;n = s(this._maxListeners) ? r.defaultMaxListeners : this._maxListeners, n && n > 0 && this._events[e].length > n && (this._events[e].warned = !0, console.error("(node) warning: possible EventEmitter memory leak detected. %d listeners added. Use emitter.setMaxListeners() to increase limit.", this._events[e].length), "function" == typeof console.trace && console.trace());
        }return this;
      }, r.prototype.on = r.prototype.addListener, r.prototype.once = function (e, t) {
        function n() {
          this.removeListener(e, n), r || (r = !0, t.apply(this, arguments));
        }if (!i(t)) throw TypeError("listener must be a function");var r = !1;return n.listener = t, this.on(e, n), this;
      }, r.prototype.removeListener = function (e, t) {
        var n, r, o, s;if (!i(t)) throw TypeError("listener must be a function");if (!this._events || !this._events[e]) return this;if (n = this._events[e], o = n.length, r = -1, n === t || i(n.listener) && n.listener === t) delete this._events[e], this._events.removeListener && this.emit("removeListener", e, t);else if (a(n)) {
          for (s = o; s-- > 0;) {
            if (n[s] === t || n[s].listener && n[s].listener === t) {
              r = s;break;
            }
          }if (0 > r) return this;1 === n.length ? (n.length = 0, delete this._events[e]) : n.splice(r, 1), this._events.removeListener && this.emit("removeListener", e, t);
        }return this;
      }, r.prototype.removeAllListeners = function (e) {
        var t, n;if (!this._events) return this;if (!this._events.removeListener) return 0 === arguments.length ? this._events = {} : this._events[e] && delete this._events[e], this;if (0 === arguments.length) {
          for (t in this._events) {
            "removeListener" !== t && this.removeAllListeners(t);
          }return this.removeAllListeners("removeListener"), this._events = {}, this;
        }if (n = this._events[e], i(n)) this.removeListener(e, n);else for (; n.length;) {
          this.removeListener(e, n[n.length - 1]);
        }return delete this._events[e], this;
      }, r.prototype.listeners = function (e) {
        var t;return t = this._events && this._events[e] ? i(this._events[e]) ? [this._events[e]] : this._events[e].slice() : [];
      }, r.listenerCount = function (e, t) {
        var n;return n = e._events && e._events[t] ? i(e._events[t]) ? 1 : e._events[t].length : 0;
      };
    }, {}], 147: [function (e, t, n) {
      var r = t.exports,
          i = (e("events").EventEmitter, e("./lib/request")),
          o = e("url");r.request = function (e, t) {
        "string" == typeof e && (e = o.parse(e)), e || (e = {}), e.host || e.port || (e.port = parseInt(window.location.port, 10)), !e.host && e.hostname && (e.host = e.hostname), e.protocol || (e.scheme ? e.protocol = e.scheme + ":" : e.protocol = window.location.protocol), e.host || (e.host = window.location.hostname || window.location.host), /:/.test(e.host) && (e.port || (e.port = e.host.split(":")[1]), e.host = e.host.split(":")[0]), e.port || (e.port = "https:" == e.protocol ? 443 : 80);var n = new i(new a(), e);return t && n.on("response", t), n;
      }, r.get = function (e, t) {
        e.method = "GET";var n = r.request(e, t);return n.end(), n;
      }, r.Agent = function () {}, r.Agent.defaultMaxSockets = 4;var a = function () {
        if ("undefined" == typeof window) throw new Error("no window object present");if (window.XMLHttpRequest) return window.XMLHttpRequest;if (window.ActiveXObject) {
          for (var e = ["Msxml2.XMLHTTP.6.0", "Msxml2.XMLHTTP.3.0", "Microsoft.XMLHTTP"], t = 0; t < e.length; t++) {
            try {
              var n = new window.ActiveXObject(e[t]);return function () {
                if (n) {
                  var r = n;return n = null, r;
                }return new window.ActiveXObject(e[t]);
              };
            } catch (r) {}
          }throw new Error("ajax not supported in this browser");
        }throw new Error("ajax not supported in this browser");
      }();r.STATUS_CODES = { 100: "Continue", 101: "Switching Protocols", 102: "Processing", 200: "OK", 201: "Created", 202: "Accepted", 203: "Non-Authoritative Information", 204: "No Content", 205: "Reset Content", 206: "Partial Content", 207: "Multi-Status", 300: "Multiple Choices", 301: "Moved Permanently", 302: "Moved Temporarily", 303: "See Other", 304: "Not Modified", 305: "Use Proxy", 307: "Temporary Redirect", 400: "Bad Request", 401: "Unauthorized", 402: "Payment Required", 403: "Forbidden", 404: "Not Found", 405: "Method Not Allowed", 406: "Not Acceptable", 407: "Proxy Authentication Required", 408: "Request Time-out", 409: "Conflict", 410: "Gone", 411: "Length Required", 412: "Precondition Failed", 413: "Request Entity Too Large", 414: "Request-URI Too Large", 415: "Unsupported Media Type", 416: "Requested Range Not Satisfiable", 417: "Expectation Failed", 418: "I'm a teapot", 422: "Unprocessable Entity", 423: "Locked", 424: "Failed Dependency", 425: "Unordered Collection", 426: "Upgrade Required", 428: "Precondition Required", 429: "Too Many Requests", 431: "Request Header Fields Too Large", 500: "Internal Server Error", 501: "Not Implemented", 502: "Bad Gateway", 503: "Service Unavailable", 504: "Gateway Time-out", 505: "HTTP Version Not Supported", 506: "Variant Also Negotiates", 507: "Insufficient Storage", 509: "Bandwidth Limit Exceeded", 510: "Not Extended", 511: "Network Authentication Required" };
    }, { "./lib/request": 148, events: 146, url: 174 }], 148: [function (e, t, n) {
      var r = e("stream"),
          i = e("./response"),
          o = e("Base64"),
          a = e("inherits"),
          s = t.exports = function (e, t) {
        var n = this;n.writable = !0, n.xhr = e, n.body = [], n.uri = (t.protocol || "http:") + "//" + t.host + (t.port ? ":" + t.port : "") + (t.path || "/"), "undefined" == typeof t.withCredentials && (t.withCredentials = !0);try {
          e.withCredentials = t.withCredentials;
        } catch (r) {}if (t.responseType) try {
          e.responseType = t.responseType;
        } catch (r) {}if (e.open(t.method || "GET", n.uri, !0), e.onerror = function (e) {
          n.emit("error", new Error("Network error"));
        }, n._headers = {}, t.headers) for (var a = c(t.headers), s = 0; s < a.length; s++) {
          var f = a[s];if (n.isSafeRequestHeader(f)) {
            var u = t.headers[f];n.setHeader(f, u);
          }
        }t.auth && this.setHeader("Authorization", "Basic " + o.btoa(t.auth));var d = new i();d.on("close", function () {
          n.emit("close");
        }), d.on("ready", function () {
          n.emit("response", d);
        }), d.on("error", function (e) {
          n.emit("error", e);
        }), e.onreadystatechange = function () {
          e.__aborted || d.handle(e);
        };
      };a(s, r), s.prototype.setHeader = function (e, t) {
        this._headers[e.toLowerCase()] = t;
      }, s.prototype.getHeader = function (e) {
        return this._headers[e.toLowerCase()];
      }, s.prototype.removeHeader = function (e) {
        delete this._headers[e.toLowerCase()];
      }, s.prototype.write = function (e) {
        this.body.push(e);
      }, s.prototype.destroy = function (e) {
        this.xhr.__aborted = !0, this.xhr.abort(), this.emit("close");
      }, s.prototype.end = function (e) {
        void 0 !== e && this.body.push(e);for (var t = c(this._headers), n = 0; n < t.length; n++) {
          var r = t[n],
              i = this._headers[r];if (f(i)) for (var o = 0; o < i.length; o++) {
            this.xhr.setRequestHeader(r, i[o]);
          } else this.xhr.setRequestHeader(r, i);
        }if (0 === this.body.length) this.xhr.send("");else if ("string" == typeof this.body[0]) this.xhr.send(this.body.join(""));else if (f(this.body[0])) {
          for (var a = [], n = 0; n < this.body.length; n++) {
            a.push.apply(a, this.body[n]);
          }this.xhr.send(a);
        } else if (/Array/.test(Object.prototype.toString.call(this.body[0]))) {
          for (var s = 0, n = 0; n < this.body.length; n++) {
            s += this.body[n].length;
          }for (var a = new this.body[0].constructor(s), u = 0, n = 0; n < this.body.length; n++) {
            for (var p = this.body[n], o = 0; o < p.length; o++) {
              a[u++] = p[o];
            }
          }this.xhr.send(a);
        } else if (d(this.body[0])) this.xhr.send(this.body[0]);else {
          for (var a = "", n = 0; n < this.body.length; n++) {
            a += this.body[n].toString();
          }this.xhr.send(a);
        }
      }, s.unsafeHeaders = ["accept-charset", "accept-encoding", "access-control-request-headers", "access-control-request-method", "connection", "content-length", "cookie", "cookie2", "content-transfer-encoding", "date", "expect", "host", "keep-alive", "origin", "referer", "te", "trailer", "transfer-encoding", "upgrade", "user-agent", "via"], s.prototype.isSafeRequestHeader = function (e) {
        return e ? -1 === u(s.unsafeHeaders, e.toLowerCase()) : !1;
      };var c = Object.keys || function (e) {
        var t = [];for (var n in e) {
          t.push(n);
        }return t;
      },
          f = Array.isArray || function (e) {
        return "[object Array]" === Object.prototype.toString.call(e);
      },
          u = function u(e, t) {
        if (e.indexOf) return e.indexOf(t);for (var n = 0; n < e.length; n++) {
          if (e[n] === t) return n;
        }return -1;
      },
          d = function d(e) {
        return "undefined" != typeof Blob && e instanceof Blob ? !0 : "undefined" != typeof ArrayBuffer && e instanceof ArrayBuffer ? !0 : "undefined" != typeof FormData && e instanceof FormData ? !0 : void 0;
      };
    }, { "./response": 149, Base64: 150, inherits: 152, stream: 172 }], 149: [function (e, t, n) {
      function r(e) {
        for (var t = e.getAllResponseHeaders().split(/\r?\n/), n = {}, r = 0; r < t.length; r++) {
          var i = t[r];if ("" !== i) {
            var o = i.match(/^([^:]+):\s*(.*)/);if (o) {
              var a = o[1].toLowerCase(),
                  s = o[2];void 0 !== n[a] ? c(n[a]) ? n[a].push(s) : n[a] = [n[a], s] : n[a] = s;
            } else n[i] = !0;
          }
        }return n;
      }var i = e("stream"),
          o = e("util"),
          a = t.exports = function (e) {
        this.offset = 0, this.readable = !0;
      };o.inherits(a, i);var s = { streaming: !0, status2: !0 };a.prototype.getResponse = function (e) {
        var t = String(e.responseType).toLowerCase();return "blob" === t ? e.responseBlob || e.response : "arraybuffer" === t ? e.response : e.responseText;
      }, a.prototype.getHeader = function (e) {
        return this.headers[e.toLowerCase()];
      }, a.prototype.handle = function (e) {
        if (2 === e.readyState && s.status2) {
          try {
            this.statusCode = e.status, this.headers = r(e);
          } catch (t) {
            s.status2 = !1;
          }s.status2 && this.emit("ready");
        } else if (s.streaming && 3 === e.readyState) {
          try {
            this.statusCode || (this.statusCode = e.status, this.headers = r(e), this.emit("ready"));
          } catch (t) {}try {
            this._emitData(e);
          } catch (t) {
            s.streaming = !1;
          }
        } else 4 === e.readyState && (this.statusCode || (this.statusCode = e.status, this.emit("ready")), this._emitData(e), e.error ? this.emit("error", this.getResponse(e)) : this.emit("end"), this.emit("close"));
      }, a.prototype._emitData = function (e) {
        var t = this.getResponse(e);return t.toString().match(/ArrayBuffer/) ? (this.emit("data", new Uint8Array(t, this.offset)), void (this.offset = t.byteLength)) : void (t.length > this.offset && (this.emit("data", t.slice(this.offset)), this.offset = t.length));
      };var c = Array.isArray || function (e) {
        return "[object Array]" === Object.prototype.toString.call(e);
      };
    }, { stream: 172, util: 176 }], 150: [function (e, t, n) {
      !function () {
        function e(e) {
          this.message = e;
        }var t = "undefined" != typeof n ? n : this,
            r = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";e.prototype = new Error(), e.prototype.name = "InvalidCharacterError", t.btoa || (t.btoa = function (t) {
          for (var n, i, o = 0, a = r, s = ""; t.charAt(0 | o) || (a = "=", o % 1); s += a.charAt(63 & n >> 8 - o % 1 * 8)) {
            if (i = t.charCodeAt(o += .75), i > 255) throw new e("'btoa' failed: The string to be encoded contains characters outside of the Latin1 range.");n = n << 8 | i;
          }return s;
        }), t.atob || (t.atob = function (t) {
          if (t = t.replace(/=+$/, ""), t.length % 4 == 1) throw new e("'atob' failed: The string to be decoded is not correctly encoded.");for (var n, i, o = 0, a = 0, s = ""; i = t.charAt(a++); ~i && (n = o % 4 ? 64 * n + i : i, o++ % 4) ? s += String.fromCharCode(255 & n >> (-2 * o & 6)) : 0) {
            i = r.indexOf(i);
          }return s;
        });
      }();
    }, {}], 151: [function (e, t, n) {
      var r = e("http"),
          i = t.exports;for (var o in r) {
        r.hasOwnProperty(o) && (i[o] = r[o]);
      }i.request = function (e, t) {
        return e || (e = {}), e.scheme = "https", e.protocol = "https:", r.request.call(this, e, t);
      };
    }, { http: 147 }], 152: [function (e, t, n) {
      "function" == typeof Object.create ? t.exports = function (e, t) {
        e.super_ = t, e.prototype = Object.create(t.prototype, { constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 } });
      } : t.exports = function (e, t) {
        e.super_ = t;var n = function n() {};n.prototype = t.prototype, e.prototype = new n(), e.prototype.constructor = e;
      };
    }, {}], 153: [function (e, t, n) {
      t.exports = function (e) {
        return !(null == e || !(e._isBuffer || e.constructor && "function" == typeof e.constructor.isBuffer && e.constructor.isBuffer(e)));
      };
    }, {}], 154: [function (e, t, n) {
      t.exports = Array.isArray || function (e) {
        return "[object Array]" == Object.prototype.toString.call(e);
      };
    }, {}], 155: [function (e, t, n) {
      (function (e) {
        function t(e, t) {
          for (var n = 0, r = e.length - 1; r >= 0; r--) {
            var i = e[r];"." === i ? e.splice(r, 1) : ".." === i ? (e.splice(r, 1), n++) : n && (e.splice(r, 1), n--);
          }if (t) for (; n--; n) {
            e.unshift("..");
          }return e;
        }function r(e, t) {
          if (e.filter) return e.filter(t);for (var n = [], r = 0; r < e.length; r++) {
            t(e[r], r, e) && n.push(e[r]);
          }return n;
        }var i = /^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/,
            o = function o(e) {
          return i.exec(e).slice(1);
        };n.resolve = function () {
          for (var n = "", i = !1, o = arguments.length - 1; o >= -1 && !i; o--) {
            var a = o >= 0 ? arguments[o] : e.cwd();if ("string" != typeof a) throw new TypeError("Arguments to path.resolve must be strings");a && (n = a + "/" + n, i = "/" === a.charAt(0));
          }return n = t(r(n.split("/"), function (e) {
            return !!e;
          }), !i).join("/"), (i ? "/" : "") + n || ".";
        }, n.normalize = function (e) {
          var i = n.isAbsolute(e),
              o = "/" === a(e, -1);return e = t(r(e.split("/"), function (e) {
            return !!e;
          }), !i).join("/"), e || i || (e = "."), e && o && (e += "/"), (i ? "/" : "") + e;
        }, n.isAbsolute = function (e) {
          return "/" === e.charAt(0);
        }, n.join = function () {
          var e = Array.prototype.slice.call(arguments, 0);return n.normalize(r(e, function (e, t) {
            if ("string" != typeof e) throw new TypeError("Arguments to path.join must be strings");return e;
          }).join("/"));
        }, n.relative = function (e, t) {
          function r(e) {
            for (var t = 0; t < e.length && "" === e[t]; t++) {}for (var n = e.length - 1; n >= 0 && "" === e[n]; n--) {}return t > n ? [] : e.slice(t, n - t + 1);
          }e = n.resolve(e).substr(1), t = n.resolve(t).substr(1);for (var i = r(e.split("/")), o = r(t.split("/")), a = Math.min(i.length, o.length), s = a, c = 0; a > c; c++) {
            if (i[c] !== o[c]) {
              s = c;break;
            }
          }for (var f = [], c = s; c < i.length; c++) {
            f.push("..");
          }return f = f.concat(o.slice(s)), f.join("/");
        }, n.sep = "/", n.delimiter = ":", n.dirname = function (e) {
          var t = o(e),
              n = t[0],
              r = t[1];return n || r ? (r && (r = r.substr(0, r.length - 1)), n + r) : ".";
        }, n.basename = function (e, t) {
          var n = o(e)[2];return t && n.substr(-1 * t.length) === t && (n = n.substr(0, n.length - t.length)), n;
        }, n.extname = function (e) {
          return o(e)[3];
        };var a = "b" === "ab".substr(-1) ? function (e, t, n) {
          return e.substr(t, n);
        } : function (e, t, n) {
          return 0 > t && (t = e.length + t), e.substr(t, n);
        };
      }).call(this, e("_process"));
    }, { _process: 156 }], 156: [function (e, t, n) {
      function r() {
        u = !1, s.length ? f = s.concat(f) : d = -1, f.length && i();
      }function i() {
        if (!u) {
          var e = setTimeout(r);u = !0;for (var t = f.length; t;) {
            for (s = f, f = []; ++d < t;) {
              s && s[d].run();
            }d = -1, t = f.length;
          }s = null, u = !1, clearTimeout(e);
        }
      }function o(e, t) {
        this.fun = e, this.array = t;
      }function a() {}var s,
          c = t.exports = {},
          f = [],
          u = !1,
          d = -1;c.nextTick = function (e) {
        var t = new Array(arguments.length - 1);if (arguments.length > 1) for (var n = 1; n < arguments.length; n++) {
          t[n - 1] = arguments[n];
        }f.push(new o(e, t)), 1 !== f.length || u || setTimeout(i, 0);
      }, o.prototype.run = function () {
        this.fun.apply(null, this.array);
      }, c.title = "browser", c.browser = !0, c.env = {}, c.argv = [], c.version = "", c.versions = {}, c.on = a, c.addListener = a, c.once = a, c.off = a, c.removeListener = a, c.removeAllListeners = a, c.emit = a, c.binding = function (e) {
        throw new Error("process.binding is not supported");
      }, c.cwd = function () {
        return "/";
      }, c.chdir = function (e) {
        throw new Error("process.chdir is not supported");
      }, c.umask = function () {
        return 0;
      };
    }, {}], 157: [function (e, t, n) {
      (function (e) {
        !function (r) {
          function i(e) {
            throw RangeError(B[e]);
          }function o(e, t) {
            for (var n = e.length, r = []; n--;) {
              r[n] = t(e[n]);
            }return r;
          }function a(e, t) {
            var n = e.split("@"),
                r = "";n.length > 1 && (r = n[0] + "@", e = n[1]), e = e.replace(N, ".");var i = e.split("."),
                a = o(i, t).join(".");return r + a;
          }function s(e) {
            for (var t, n, r = [], i = 0, o = e.length; o > i;) {
              t = e.charCodeAt(i++), t >= 55296 && 56319 >= t && o > i ? (n = e.charCodeAt(i++), 56320 == (64512 & n) ? r.push(((1023 & t) << 10) + (1023 & n) + 65536) : (r.push(t), i--)) : r.push(t);
            }return r;
          }function c(e) {
            return o(e, function (e) {
              var t = "";return e > 65535 && (e -= 65536, t += P(e >>> 10 & 1023 | 55296), e = 56320 | 1023 & e), t += P(e);
            }).join("");
          }function f(e) {
            return 10 > e - 48 ? e - 22 : 26 > e - 65 ? e - 65 : 26 > e - 97 ? e - 97 : x;
          }function u(e, t) {
            return e + 22 + 75 * (26 > e) - ((0 != t) << 5);
          }function d(e, t, n) {
            var r = 0;for (e = n ? q(e / T) : e >> 1, e += q(e / t); e > C * S >> 1; r += x) {
              e = q(e / C);
            }return q(r + (C + 1) * e / (e + k));
          }function p(e) {
            var t,
                n,
                r,
                o,
                a,
                s,
                u,
                p,
                h,
                l,
                b = [],
                m = e.length,
                v = 0,
                g = A,
                y = j;for (n = e.lastIndexOf(I), 0 > n && (n = 0), r = 0; n > r; ++r) {
              e.charCodeAt(r) >= 128 && i("not-basic"), b.push(e.charCodeAt(r));
            }for (o = n > 0 ? n + 1 : 0; m > o;) {
              for (a = v, s = 1, u = x; o >= m && i("invalid-input"), p = f(e.charCodeAt(o++)), (p >= x || p > q((_ - v) / s)) && i("overflow"), v += p * s, h = y >= u ? E : u >= y + S ? S : u - y, !(h > p); u += x) {
                l = x - h, s > q(_ / l) && i("overflow"), s *= l;
              }t = b.length + 1, y = d(v - a, t, 0 == a), q(v / t) > _ - g && i("overflow"), g += q(v / t), v %= t, b.splice(v++, 0, g);
            }return c(b);
          }function h(e) {
            var t,
                n,
                r,
                o,
                a,
                c,
                f,
                p,
                h,
                l,
                b,
                m,
                v,
                g,
                y,
                w = [];for (e = s(e), m = e.length, t = A, n = 0, a = j, c = 0; m > c; ++c) {
              b = e[c], 128 > b && w.push(P(b));
            }for (r = o = w.length, o && w.push(I); m > r;) {
              for (f = _, c = 0; m > c; ++c) {
                b = e[c], b >= t && f > b && (f = b);
              }for (v = r + 1, f - t > q((_ - n) / v) && i("overflow"), n += (f - t) * v, t = f, c = 0; m > c; ++c) {
                if (b = e[c], t > b && ++n > _ && i("overflow"), b == t) {
                  for (p = n, h = x; l = a >= h ? E : h >= a + S ? S : h - a, !(l > p); h += x) {
                    y = p - l, g = x - l, w.push(P(u(l + y % g, 0))), p = q(y / g);
                  }w.push(P(u(p, 0))), a = d(n, v, r == o), n = 0, ++r;
                }
              }++n, ++t;
            }return w.join("");
          }function l(e) {
            return a(e, function (e) {
              return R.test(e) ? p(e.slice(4).toLowerCase()) : e;
            });
          }function b(e) {
            return a(e, function (e) {
              return O.test(e) ? "xn--" + h(e) : e;
            });
          }var m = "object" == (typeof n === "undefined" ? "undefined" : _typeof(n)) && n && !n.nodeType && n,
              v = "object" == (typeof t === "undefined" ? "undefined" : _typeof(t)) && t && !t.nodeType && t,
              g = "object" == (typeof e === "undefined" ? "undefined" : _typeof(e)) && e;g.global !== g && g.window !== g && g.self !== g || (r = g);var y,
              w,
              _ = 2147483647,
              x = 36,
              E = 1,
              S = 26,
              k = 38,
              T = 700,
              j = 72,
              A = 128,
              I = "-",
              R = /^xn--/,
              O = /[^\x20-\x7E]/,
              N = /[\x2E\u3002\uFF0E\uFF61]/g,
              B = { overflow: "Overflow: input needs wider integers to process", "not-basic": "Illegal input >= 0x80 (not a basic code point)", "invalid-input": "Invalid input" },
              C = x - E,
              q = Math.floor,
              P = String.fromCharCode;if (y = { version: "1.3.2", ucs2: { decode: s, encode: c }, decode: p, encode: h, toASCII: b, toUnicode: l }, "function" == typeof define && "object" == _typeof(define.amd) && define.amd) define("punycode", function () {
            return y;
          });else if (m && v) {
            if (t.exports == m) v.exports = y;else for (w in y) {
              y.hasOwnProperty(w) && (m[w] = y[w]);
            }
          } else r.punycode = y;
        }(this);
      }).call(this, "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {});
    }, {}], 158: [function (e, t, n) {
      "use strict";
      function r(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t);
      }t.exports = function (e, t, n, o) {
        t = t || "&", n = n || "=";var a = {};if ("string" != typeof e || 0 === e.length) return a;var s = /\+/g;e = e.split(t);var c = 1e3;o && "number" == typeof o.maxKeys && (c = o.maxKeys);var f = e.length;c > 0 && f > c && (f = c);for (var u = 0; f > u; ++u) {
          var d,
              p,
              h,
              l,
              b = e[u].replace(s, "%20"),
              m = b.indexOf(n);m >= 0 ? (d = b.substr(0, m), p = b.substr(m + 1)) : (d = b, p = ""), h = decodeURIComponent(d), l = decodeURIComponent(p), r(a, h) ? i(a[h]) ? a[h].push(l) : a[h] = [a[h], l] : a[h] = l;
        }return a;
      };var i = Array.isArray || function (e) {
        return "[object Array]" === Object.prototype.toString.call(e);
      };
    }, {}], 159: [function (e, t, n) {
      "use strict";
      function r(e, t) {
        if (e.map) return e.map(t);for (var n = [], r = 0; r < e.length; r++) {
          n.push(t(e[r], r));
        }return n;
      }var i = function i(e) {
        switch (typeof e === "undefined" ? "undefined" : _typeof(e)) {case "string":
            return e;case "boolean":
            return e ? "true" : "false";case "number":
            return isFinite(e) ? e : "";default:
            return "";}
      };t.exports = function (e, t, n, s) {
        return t = t || "&", n = n || "=", null === e && (e = void 0), "object" == (typeof e === "undefined" ? "undefined" : _typeof(e)) ? r(a(e), function (a) {
          var s = encodeURIComponent(i(a)) + n;return o(e[a]) ? r(e[a], function (e) {
            return s + encodeURIComponent(i(e));
          }).join(t) : s + encodeURIComponent(i(e[a]));
        }).join(t) : s ? encodeURIComponent(i(s)) + n + encodeURIComponent(i(e)) : "";
      };var o = Array.isArray || function (e) {
        return "[object Array]" === Object.prototype.toString.call(e);
      },
          a = Object.keys || function (e) {
        var t = [];for (var n in e) {
          Object.prototype.hasOwnProperty.call(e, n) && t.push(n);
        }return t;
      };
    }, {}], 160: [function (e, t, n) {
      "use strict";
      n.decode = n.parse = e("./decode"), n.encode = n.stringify = e("./encode");
    }, { "./decode": 158, "./encode": 159 }], 161: [function (e, t, n) {
      t.exports = e("./lib/_stream_duplex.js");
    }, { "./lib/_stream_duplex.js": 162 }], 162: [function (e, t, n) {
      (function (n) {
        function r(e) {
          return this instanceof r ? (c.call(this, e), f.call(this, e), e && e.readable === !1 && (this.readable = !1), e && e.writable === !1 && (this.writable = !1), this.allowHalfOpen = !0, e && e.allowHalfOpen === !1 && (this.allowHalfOpen = !1), void this.once("end", i)) : new r(e);
        }function i() {
          this.allowHalfOpen || this._writableState.ended || n.nextTick(this.end.bind(this));
        }function o(e, t) {
          for (var n = 0, r = e.length; r > n; n++) {
            t(e[n], n);
          }
        }t.exports = r;var a = Object.keys || function (e) {
          var t = [];for (var n in e) {
            t.push(n);
          }return t;
        },
            s = e("core-util-is");s.inherits = e("inherits");var c = e("./_stream_readable"),
            f = e("./_stream_writable");s.inherits(r, c), o(a(f.prototype), function (e) {
          r.prototype[e] || (r.prototype[e] = f.prototype[e]);
        });
      }).call(this, e("_process"));
    }, { "./_stream_readable": 164, "./_stream_writable": 166, _process: 156, "core-util-is": 167, inherits: 152 }], 163: [function (e, t, n) {
      function r(e) {
        return this instanceof r ? void i.call(this, e) : new r(e);
      }t.exports = r;var i = e("./_stream_transform"),
          o = e("core-util-is");o.inherits = e("inherits"), o.inherits(r, i), r.prototype._transform = function (e, t, n) {
        n(null, e);
      };
    }, { "./_stream_transform": 165, "core-util-is": 167, inherits: 152 }], 164: [function (e, t, n) {
      (function (n) {
        function r(t, n) {
          var r = e("./_stream_duplex");t = t || {};var i = t.highWaterMark,
              o = t.objectMode ? 16 : 16384;this.highWaterMark = i || 0 === i ? i : o, this.highWaterMark = ~~this.highWaterMark, this.buffer = [], this.length = 0, this.pipes = null, this.pipesCount = 0, this.flowing = null, this.ended = !1, this.endEmitted = !1, this.reading = !1, this.sync = !0, this.needReadable = !1, this.emittedReadable = !1, this.readableListening = !1, this.objectMode = !!t.objectMode, n instanceof r && (this.objectMode = this.objectMode || !!t.readableObjectMode), this.defaultEncoding = t.defaultEncoding || "utf8", this.ranOut = !1, this.awaitDrain = 0, this.readingMore = !1, this.decoder = null, this.encoding = null, t.encoding && (A || (A = e("string_decoder/").StringDecoder), this.decoder = new A(t.encoding), this.encoding = t.encoding);
        }function i(t) {
          e("./_stream_duplex");return this instanceof i ? (this._readableState = new r(t, this), this.readable = !0, void T.call(this)) : new i(t);
        }function o(e, t, n, r, i) {
          var o = f(t, n);if (o) e.emit("error", o);else if (j.isNullOrUndefined(n)) t.reading = !1, t.ended || u(e, t);else if (t.objectMode || n && n.length > 0) {
            if (t.ended && !i) {
              var s = new Error("stream.push() after EOF");e.emit("error", s);
            } else if (t.endEmitted && i) {
              var s = new Error("stream.unshift() after end event");e.emit("error", s);
            } else !t.decoder || i || r || (n = t.decoder.write(n)), i || (t.reading = !1), t.flowing && 0 === t.length && !t.sync ? (e.emit("data", n), e.read(0)) : (t.length += t.objectMode ? 1 : n.length, i ? t.buffer.unshift(n) : t.buffer.push(n), t.needReadable && d(e)), h(e, t);
          } else i || (t.reading = !1);return a(t);
        }function a(e) {
          return !e.ended && (e.needReadable || e.length < e.highWaterMark || 0 === e.length);
        }function s(e) {
          if (e >= R) e = R;else {
            e--;for (var t = 1; 32 > t; t <<= 1) {
              e |= e >> t;
            }e++;
          }return e;
        }function c(e, t) {
          return 0 === t.length && t.ended ? 0 : t.objectMode ? 0 === e ? 0 : 1 : isNaN(e) || j.isNull(e) ? t.flowing && t.buffer.length ? t.buffer[0].length : t.length : 0 >= e ? 0 : (e > t.highWaterMark && (t.highWaterMark = s(e)), e > t.length ? t.ended ? t.length : (t.needReadable = !0, 0) : e);
        }function f(e, t) {
          var n = null;return j.isBuffer(t) || j.isString(t) || j.isNullOrUndefined(t) || e.objectMode || (n = new TypeError("Invalid non-string/buffer chunk")), n;
        }function u(e, t) {
          if (t.decoder && !t.ended) {
            var n = t.decoder.end();n && n.length && (t.buffer.push(n), t.length += t.objectMode ? 1 : n.length);
          }t.ended = !0, d(e);
        }function d(e) {
          var t = e._readableState;t.needReadable = !1, t.emittedReadable || (I("emitReadable", t.flowing), t.emittedReadable = !0, t.sync ? n.nextTick(function () {
            p(e);
          }) : p(e));
        }function p(e) {
          I("emit readable"), e.emit("readable"), g(e);
        }function h(e, t) {
          t.readingMore || (t.readingMore = !0, n.nextTick(function () {
            l(e, t);
          }));
        }function l(e, t) {
          for (var n = t.length; !t.reading && !t.flowing && !t.ended && t.length < t.highWaterMark && (I("maybeReadMore read 0"), e.read(0), n !== t.length);) {
            n = t.length;
          }t.readingMore = !1;
        }function b(e) {
          return function () {
            var t = e._readableState;I("pipeOnDrain", t.awaitDrain), t.awaitDrain && t.awaitDrain--, 0 === t.awaitDrain && k.listenerCount(e, "data") && (t.flowing = !0, g(e));
          };
        }function m(e, t) {
          t.resumeScheduled || (t.resumeScheduled = !0, n.nextTick(function () {
            v(e, t);
          }));
        }function v(e, t) {
          t.resumeScheduled = !1, e.emit("resume"), g(e), t.flowing && !t.reading && e.read(0);
        }function g(e) {
          var t = e._readableState;if (I("flow", t.flowing), t.flowing) do {
            var n = e.read();
          } while (null !== n && t.flowing);
        }function y(e, t) {
          var n,
              r = t.buffer,
              i = t.length,
              o = !!t.decoder,
              a = !!t.objectMode;if (0 === r.length) return null;if (0 === i) n = null;else if (a) n = r.shift();else if (!e || e >= i) n = o ? r.join("") : S.concat(r, i), r.length = 0;else if (e < r[0].length) {
            var s = r[0];n = s.slice(0, e), r[0] = s.slice(e);
          } else if (e === r[0].length) n = r.shift();else {
            n = o ? "" : new S(e);for (var c = 0, f = 0, u = r.length; u > f && e > c; f++) {
              var s = r[0],
                  d = Math.min(e - c, s.length);o ? n += s.slice(0, d) : s.copy(n, c, 0, d), d < s.length ? r[0] = s.slice(d) : r.shift(), c += d;
            }
          }return n;
        }function w(e) {
          var t = e._readableState;if (t.length > 0) throw new Error("endReadable called on non-empty stream");t.endEmitted || (t.ended = !0, n.nextTick(function () {
            t.endEmitted || 0 !== t.length || (t.endEmitted = !0, e.readable = !1, e.emit("end"));
          }));
        }function _(e, t) {
          for (var n = 0, r = e.length; r > n; n++) {
            t(e[n], n);
          }
        }function x(e, t) {
          for (var n = 0, r = e.length; r > n; n++) {
            if (e[n] === t) return n;
          }return -1;
        }t.exports = i;var E = e("isarray"),
            S = e("buffer").Buffer;i.ReadableState = r;var k = e("events").EventEmitter;k.listenerCount || (k.listenerCount = function (e, t) {
          return e.listeners(t).length;
        });var T = e("stream"),
            j = e("core-util-is");j.inherits = e("inherits");var A,
            I = e("util");I = I && I.debuglog ? I.debuglog("stream") : function () {}, j.inherits(i, T), i.prototype.push = function (e, t) {
          var n = this._readableState;return j.isString(e) && !n.objectMode && (t = t || n.defaultEncoding, t !== n.encoding && (e = new S(e, t), t = "")), o(this, n, e, t, !1);
        }, i.prototype.unshift = function (e) {
          var t = this._readableState;return o(this, t, e, "", !0);
        }, i.prototype.setEncoding = function (t) {
          return A || (A = e("string_decoder/").StringDecoder), this._readableState.decoder = new A(t), this._readableState.encoding = t, this;
        };var R = 8388608;i.prototype.read = function (e) {
          I("read", e);var t = this._readableState,
              n = e;if ((!j.isNumber(e) || e > 0) && (t.emittedReadable = !1), 0 === e && t.needReadable && (t.length >= t.highWaterMark || t.ended)) return I("read: emitReadable", t.length, t.ended), 0 === t.length && t.ended ? w(this) : d(this), null;if (e = c(e, t), 0 === e && t.ended) return 0 === t.length && w(this), null;var r = t.needReadable;I("need readable", r), (0 === t.length || t.length - e < t.highWaterMark) && (r = !0, I("length less than watermark", r)), (t.ended || t.reading) && (r = !1, I("reading or ended", r)), r && (I("do read"), t.reading = !0, t.sync = !0, 0 === t.length && (t.needReadable = !0), this._read(t.highWaterMark), t.sync = !1), r && !t.reading && (e = c(n, t));var i;return i = e > 0 ? y(e, t) : null, j.isNull(i) && (t.needReadable = !0, e = 0), t.length -= e, 0 !== t.length || t.ended || (t.needReadable = !0), n !== e && t.ended && 0 === t.length && w(this), j.isNull(i) || this.emit("data", i), i;
        }, i.prototype._read = function (e) {
          this.emit("error", new Error("not implemented"));
        }, i.prototype.pipe = function (e, t) {
          function r(e) {
            I("onunpipe"), e === d && o();
          }function i() {
            I("onend"), e.end();
          }function o() {
            I("cleanup"), e.removeListener("close", c), e.removeListener("finish", f), e.removeListener("drain", m), e.removeListener("error", s), e.removeListener("unpipe", r), d.removeListener("end", i), d.removeListener("end", o), d.removeListener("data", a), !p.awaitDrain || e._writableState && !e._writableState.needDrain || m();
          }function a(t) {
            I("ondata");var n = e.write(t);!1 === n && (I("false write response, pause", d._readableState.awaitDrain), d._readableState.awaitDrain++, d.pause());
          }function s(t) {
            I("onerror", t), u(), e.removeListener("error", s), 0 === k.listenerCount(e, "error") && e.emit("error", t);
          }function c() {
            e.removeListener("finish", f), u();
          }function f() {
            I("onfinish"), e.removeListener("close", c), u();
          }function u() {
            I("unpipe"), d.unpipe(e);
          }var d = this,
              p = this._readableState;switch (p.pipesCount) {case 0:
              p.pipes = e;break;case 1:
              p.pipes = [p.pipes, e];break;default:
              p.pipes.push(e);}p.pipesCount += 1, I("pipe count=%d opts=%j", p.pipesCount, t);var h = (!t || t.end !== !1) && e !== n.stdout && e !== n.stderr,
              l = h ? i : o;p.endEmitted ? n.nextTick(l) : d.once("end", l), e.on("unpipe", r);var m = b(d);return e.on("drain", m), d.on("data", a), e._events && e._events.error ? E(e._events.error) ? e._events.error.unshift(s) : e._events.error = [s, e._events.error] : e.on("error", s), e.once("close", c), e.once("finish", f), e.emit("pipe", d), p.flowing || (I("pipe resume"), d.resume()), e;
        }, i.prototype.unpipe = function (e) {
          var t = this._readableState;if (0 === t.pipesCount) return this;if (1 === t.pipesCount) return e && e !== t.pipes ? this : (e || (e = t.pipes), t.pipes = null, t.pipesCount = 0, t.flowing = !1, e && e.emit("unpipe", this), this);if (!e) {
            var n = t.pipes,
                r = t.pipesCount;t.pipes = null, t.pipesCount = 0, t.flowing = !1;for (var i = 0; r > i; i++) {
              n[i].emit("unpipe", this);
            }return this;
          }var i = x(t.pipes, e);return -1 === i ? this : (t.pipes.splice(i, 1), t.pipesCount -= 1, 1 === t.pipesCount && (t.pipes = t.pipes[0]), e.emit("unpipe", this), this);
        }, i.prototype.on = function (e, t) {
          var r = T.prototype.on.call(this, e, t);if ("data" === e && !1 !== this._readableState.flowing && this.resume(), "readable" === e && this.readable) {
            var i = this._readableState;if (!i.readableListening) if (i.readableListening = !0, i.emittedReadable = !1, i.needReadable = !0, i.reading) i.length && d(this, i);else {
              var o = this;n.nextTick(function () {
                I("readable nexttick read 0"), o.read(0);
              });
            }
          }return r;
        }, i.prototype.addListener = i.prototype.on, i.prototype.resume = function () {
          var e = this._readableState;return e.flowing || (I("resume"), e.flowing = !0, e.reading || (I("resume read 0"), this.read(0)), m(this, e)), this;
        }, i.prototype.pause = function () {
          return I("call pause flowing=%j", this._readableState.flowing), !1 !== this._readableState.flowing && (I("pause"), this._readableState.flowing = !1, this.emit("pause")), this;
        }, i.prototype.wrap = function (e) {
          var t = this._readableState,
              n = !1,
              r = this;e.on("end", function () {
            if (I("wrapped end"), t.decoder && !t.ended) {
              var e = t.decoder.end();e && e.length && r.push(e);
            }r.push(null);
          }), e.on("data", function (i) {
            if (I("wrapped data"), t.decoder && (i = t.decoder.write(i)), i && (t.objectMode || i.length)) {
              var o = r.push(i);o || (n = !0, e.pause());
            }
          });for (var i in e) {
            j.isFunction(e[i]) && j.isUndefined(this[i]) && (this[i] = function (t) {
              return function () {
                return e[t].apply(e, arguments);
              };
            }(i));
          }var o = ["error", "close", "destroy", "pause", "resume"];return _(o, function (t) {
            e.on(t, r.emit.bind(r, t));
          }), r._read = function (t) {
            I("wrapped _read", t), n && (n = !1, e.resume());
          }, r;
        }, i._fromList = y;
      }).call(this, e("_process"));
    }, { "./_stream_duplex": 162, _process: 156, buffer: 179, "core-util-is": 167, events: 146, inherits: 152, isarray: 154, stream: 172, "string_decoder/": 173, util: 4 }], 165: [function (e, t, n) {
      function r(e, t) {
        this.afterTransform = function (e, n) {
          return i(t, e, n);
        }, this.needTransform = !1, this.transforming = !1, this.writecb = null, this.writechunk = null;
      }function i(e, t, n) {
        var r = e._transformState;r.transforming = !1;var i = r.writecb;if (!i) return e.emit("error", new Error("no writecb in Transform class"));r.writechunk = null, r.writecb = null, c.isNullOrUndefined(n) || e.push(n), i && i(t);var o = e._readableState;o.reading = !1, (o.needReadable || o.length < o.highWaterMark) && e._read(o.highWaterMark);
      }function o(e) {
        if (!(this instanceof o)) return new o(e);s.call(this, e), this._transformState = new r(e, this);var t = this;this._readableState.needReadable = !0, this._readableState.sync = !1, this.once("prefinish", function () {
          c.isFunction(this._flush) ? this._flush(function (e) {
            a(t, e);
          }) : a(t);
        });
      }function a(e, t) {
        if (t) return e.emit("error", t);
        var n = e._writableState,
            r = e._transformState;if (n.length) throw new Error("calling transform done when ws.length != 0");if (r.transforming) throw new Error("calling transform done when still transforming");return e.push(null);
      }t.exports = o;var s = e("./_stream_duplex"),
          c = e("core-util-is");c.inherits = e("inherits"), c.inherits(o, s), o.prototype.push = function (e, t) {
        return this._transformState.needTransform = !1, s.prototype.push.call(this, e, t);
      }, o.prototype._transform = function (e, t, n) {
        throw new Error("not implemented");
      }, o.prototype._write = function (e, t, n) {
        var r = this._transformState;if (r.writecb = n, r.writechunk = e, r.writeencoding = t, !r.transforming) {
          var i = this._readableState;(r.needTransform || i.needReadable || i.length < i.highWaterMark) && this._read(i.highWaterMark);
        }
      }, o.prototype._read = function (e) {
        var t = this._transformState;c.isNull(t.writechunk) || !t.writecb || t.transforming ? t.needTransform = !0 : (t.transforming = !0, this._transform(t.writechunk, t.writeencoding, t.afterTransform));
      };
    }, { "./_stream_duplex": 162, "core-util-is": 167, inherits: 152 }], 166: [function (e, t, n) {
      (function (n) {
        function r(e, t, n) {
          this.chunk = e, this.encoding = t, this.callback = n;
        }function i(t, n) {
          var r = e("./_stream_duplex");t = t || {};var i = t.highWaterMark,
              o = t.objectMode ? 16 : 16384;this.highWaterMark = i || 0 === i ? i : o, this.objectMode = !!t.objectMode, n instanceof r && (this.objectMode = this.objectMode || !!t.writableObjectMode), this.highWaterMark = ~~this.highWaterMark, this.needDrain = !1, this.ending = !1, this.ended = !1, this.finished = !1;var a = t.decodeStrings === !1;this.decodeStrings = !a, this.defaultEncoding = t.defaultEncoding || "utf8", this.length = 0, this.writing = !1, this.corked = 0, this.sync = !0, this.bufferProcessing = !1, this.onwrite = function (e) {
            h(n, e);
          }, this.writecb = null, this.writelen = 0, this.buffer = [], this.pendingcb = 0, this.prefinished = !1, this.errorEmitted = !1;
        }function o(t) {
          var n = e("./_stream_duplex");return this instanceof o || this instanceof n ? (this._writableState = new i(t, this), this.writable = !0, void E.call(this)) : new o(t);
        }function a(e, t, r) {
          var i = new Error("write after end");e.emit("error", i), n.nextTick(function () {
            r(i);
          });
        }function s(e, t, r, i) {
          var o = !0;if (!(x.isBuffer(r) || x.isString(r) || x.isNullOrUndefined(r) || t.objectMode)) {
            var a = new TypeError("Invalid non-string/buffer chunk");e.emit("error", a), n.nextTick(function () {
              i(a);
            }), o = !1;
          }return o;
        }function c(e, t, n) {
          return !e.objectMode && e.decodeStrings !== !1 && x.isString(t) && (t = new _(t, n)), t;
        }function f(e, t, n, i, o) {
          n = c(t, n, i), x.isBuffer(n) && (i = "buffer");var a = t.objectMode ? 1 : n.length;t.length += a;var s = t.length < t.highWaterMark;return s || (t.needDrain = !0), t.writing || t.corked ? t.buffer.push(new r(n, i, o)) : u(e, t, !1, a, n, i, o), s;
        }function u(e, t, n, r, i, o, a) {
          t.writelen = r, t.writecb = a, t.writing = !0, t.sync = !0, n ? e._writev(i, t.onwrite) : e._write(i, o, t.onwrite), t.sync = !1;
        }function d(e, t, r, i, o) {
          r ? n.nextTick(function () {
            t.pendingcb--, o(i);
          }) : (t.pendingcb--, o(i)), e._writableState.errorEmitted = !0, e.emit("error", i);
        }function p(e) {
          e.writing = !1, e.writecb = null, e.length -= e.writelen, e.writelen = 0;
        }function h(e, t) {
          var r = e._writableState,
              i = r.sync,
              o = r.writecb;if (p(r), t) d(e, r, i, t, o);else {
            var a = v(e, r);a || r.corked || r.bufferProcessing || !r.buffer.length || m(e, r), i ? n.nextTick(function () {
              l(e, r, a, o);
            }) : l(e, r, a, o);
          }
        }function l(e, t, n, r) {
          n || b(e, t), t.pendingcb--, r(), y(e, t);
        }function b(e, t) {
          0 === t.length && t.needDrain && (t.needDrain = !1, e.emit("drain"));
        }function m(e, t) {
          if (t.bufferProcessing = !0, e._writev && t.buffer.length > 1) {
            for (var n = [], r = 0; r < t.buffer.length; r++) {
              n.push(t.buffer[r].callback);
            }t.pendingcb++, u(e, t, !0, t.length, t.buffer, "", function (e) {
              for (var r = 0; r < n.length; r++) {
                t.pendingcb--, n[r](e);
              }
            }), t.buffer = [];
          } else {
            for (var r = 0; r < t.buffer.length; r++) {
              var i = t.buffer[r],
                  o = i.chunk,
                  a = i.encoding,
                  s = i.callback,
                  c = t.objectMode ? 1 : o.length;if (u(e, t, !1, c, o, a, s), t.writing) {
                r++;break;
              }
            }r < t.buffer.length ? t.buffer = t.buffer.slice(r) : t.buffer.length = 0;
          }t.bufferProcessing = !1;
        }function v(e, t) {
          return t.ending && 0 === t.length && !t.finished && !t.writing;
        }function g(e, t) {
          t.prefinished || (t.prefinished = !0, e.emit("prefinish"));
        }function y(e, t) {
          var n = v(e, t);return n && (0 === t.pendingcb ? (g(e, t), t.finished = !0, e.emit("finish")) : g(e, t)), n;
        }function w(e, t, r) {
          t.ending = !0, y(e, t), r && (t.finished ? n.nextTick(r) : e.once("finish", r)), t.ended = !0;
        }t.exports = o;var _ = e("buffer").Buffer;o.WritableState = i;var x = e("core-util-is");x.inherits = e("inherits");var E = e("stream");x.inherits(o, E), o.prototype.pipe = function () {
          this.emit("error", new Error("Cannot pipe. Not readable."));
        }, o.prototype.write = function (e, t, n) {
          var r = this._writableState,
              i = !1;return x.isFunction(t) && (n = t, t = null), x.isBuffer(e) ? t = "buffer" : t || (t = r.defaultEncoding), x.isFunction(n) || (n = function n() {}), r.ended ? a(this, r, n) : s(this, r, e, n) && (r.pendingcb++, i = f(this, r, e, t, n)), i;
        }, o.prototype.cork = function () {
          var e = this._writableState;e.corked++;
        }, o.prototype.uncork = function () {
          var e = this._writableState;e.corked && (e.corked--, e.writing || e.corked || e.finished || e.bufferProcessing || !e.buffer.length || m(this, e));
        }, o.prototype._write = function (e, t, n) {
          n(new Error("not implemented"));
        }, o.prototype._writev = null, o.prototype.end = function (e, t, n) {
          var r = this._writableState;x.isFunction(e) ? (n = e, e = null, t = null) : x.isFunction(t) && (n = t, t = null), x.isNullOrUndefined(e) || this.write(e, t), r.corked && (r.corked = 1, this.uncork()), r.ending || r.finished || w(this, r, n);
        };
      }).call(this, e("_process"));
    }, { "./_stream_duplex": 162, _process: 156, buffer: 179, "core-util-is": 167, inherits: 152, stream: 172 }], 167: [function (e, t, n) {
      (function (e) {
        function t(e) {
          return Array.isArray(e);
        }function r(e) {
          return "boolean" == typeof e;
        }function i(e) {
          return null === e;
        }function o(e) {
          return null == e;
        }function a(e) {
          return "number" == typeof e;
        }function s(e) {
          return "string" == typeof e;
        }function c(e) {
          return "symbol" == (typeof e === "undefined" ? "undefined" : _typeof(e));
        }function f(e) {
          return void 0 === e;
        }function u(e) {
          return d(e) && "[object RegExp]" === v(e);
        }function d(e) {
          return "object" == (typeof e === "undefined" ? "undefined" : _typeof(e)) && null !== e;
        }function p(e) {
          return d(e) && "[object Date]" === v(e);
        }function h(e) {
          return d(e) && ("[object Error]" === v(e) || e instanceof Error);
        }function l(e) {
          return "function" == typeof e;
        }function b(e) {
          return null === e || "boolean" == typeof e || "number" == typeof e || "string" == typeof e || "symbol" == (typeof e === "undefined" ? "undefined" : _typeof(e)) || "undefined" == typeof e;
        }function m(t) {
          return e.isBuffer(t);
        }function v(e) {
          return Object.prototype.toString.call(e);
        }n.isArray = t, n.isBoolean = r, n.isNull = i, n.isNullOrUndefined = o, n.isNumber = a, n.isString = s, n.isSymbol = c, n.isUndefined = f, n.isRegExp = u, n.isObject = d, n.isDate = p, n.isError = h, n.isFunction = l, n.isPrimitive = b, n.isBuffer = m;
      }).call(this, { isBuffer: e("/Volumes/HDD/Users/leeight/local/case/inf/bos/bce-sdk-js/node_modules/browserify/node_modules/insert-module-globals/node_modules/is-buffer/index.js") });
    }, { "/Volumes/HDD/Users/leeight/local/case/inf/bos/bce-sdk-js/node_modules/browserify/node_modules/insert-module-globals/node_modules/is-buffer/index.js": 153 }], 168: [function (e, t, n) {
      t.exports = e("./lib/_stream_passthrough.js");
    }, { "./lib/_stream_passthrough.js": 163 }], 169: [function (e, t, n) {
      n = t.exports = e("./lib/_stream_readable.js"), n.Stream = e("stream"), n.Readable = n, n.Writable = e("./lib/_stream_writable.js"), n.Duplex = e("./lib/_stream_duplex.js"), n.Transform = e("./lib/_stream_transform.js"), n.PassThrough = e("./lib/_stream_passthrough.js");
    }, { "./lib/_stream_duplex.js": 162, "./lib/_stream_passthrough.js": 163, "./lib/_stream_readable.js": 164, "./lib/_stream_transform.js": 165, "./lib/_stream_writable.js": 166, stream: 172 }], 170: [function (e, t, n) {
      t.exports = e("./lib/_stream_transform.js");
    }, { "./lib/_stream_transform.js": 165 }], 171: [function (e, t, n) {
      t.exports = e("./lib/_stream_writable.js");
    }, { "./lib/_stream_writable.js": 166 }], 172: [function (e, t, n) {
      function r() {
        i.call(this);
      }t.exports = r;var i = e("events").EventEmitter,
          o = e("inherits");o(r, i), r.Readable = e("readable-stream/readable.js"), r.Writable = e("readable-stream/writable.js"), r.Duplex = e("readable-stream/duplex.js"), r.Transform = e("readable-stream/transform.js"), r.PassThrough = e("readable-stream/passthrough.js"), r.Stream = r, r.prototype.pipe = function (e, t) {
        function n(t) {
          e.writable && !1 === e.write(t) && f.pause && f.pause();
        }function r() {
          f.readable && f.resume && f.resume();
        }function o() {
          u || (u = !0, e.end());
        }function a() {
          u || (u = !0, "function" == typeof e.destroy && e.destroy());
        }function s(e) {
          if (c(), 0 === i.listenerCount(this, "error")) throw e;
        }function c() {
          f.removeListener("data", n), e.removeListener("drain", r), f.removeListener("end", o), f.removeListener("close", a), f.removeListener("error", s), e.removeListener("error", s), f.removeListener("end", c), f.removeListener("close", c), e.removeListener("close", c);
        }var f = this;f.on("data", n), e.on("drain", r), e._isStdio || t && t.end === !1 || (f.on("end", o), f.on("close", a));var u = !1;return f.on("error", s), e.on("error", s), f.on("end", c), f.on("close", c), e.on("close", c), e.emit("pipe", f), e;
      };
    }, { events: 146, inherits: 152, "readable-stream/duplex.js": 161, "readable-stream/passthrough.js": 168, "readable-stream/readable.js": 169, "readable-stream/transform.js": 170, "readable-stream/writable.js": 171 }], 173: [function (e, t, n) {
      function r(e) {
        if (e && !c(e)) throw new Error("Unknown encoding: " + e);
      }function i(e) {
        return e.toString(this.encoding);
      }function o(e) {
        this.charReceived = e.length % 2, this.charLength = this.charReceived ? 2 : 0;
      }function a(e) {
        this.charReceived = e.length % 3, this.charLength = this.charReceived ? 3 : 0;
      }var s = e("buffer").Buffer,
          c = s.isEncoding || function (e) {
        switch (e && e.toLowerCase()) {case "hex":case "utf8":case "utf-8":case "ascii":case "binary":case "base64":case "ucs2":case "ucs-2":case "utf16le":case "utf-16le":case "raw":
            return !0;default:
            return !1;}
      },
          f = n.StringDecoder = function (e) {
        switch (this.encoding = (e || "utf8").toLowerCase().replace(/[-_]/, ""), r(e), this.encoding) {case "utf8":
            this.surrogateSize = 3;break;case "ucs2":case "utf16le":
            this.surrogateSize = 2, this.detectIncompleteChar = o;break;case "base64":
            this.surrogateSize = 3, this.detectIncompleteChar = a;break;default:
            return void (this.write = i);}this.charBuffer = new s(6), this.charReceived = 0, this.charLength = 0;
      };f.prototype.write = function (e) {
        for (var t = ""; this.charLength;) {
          var n = e.length >= this.charLength - this.charReceived ? this.charLength - this.charReceived : e.length;if (e.copy(this.charBuffer, this.charReceived, 0, n), this.charReceived += n, this.charReceived < this.charLength) return "";e = e.slice(n, e.length), t = this.charBuffer.slice(0, this.charLength).toString(this.encoding);var r = t.charCodeAt(t.length - 1);if (!(r >= 55296 && 56319 >= r)) {
            if (this.charReceived = this.charLength = 0, 0 === e.length) return t;break;
          }this.charLength += this.surrogateSize, t = "";
        }this.detectIncompleteChar(e);var i = e.length;this.charLength && (e.copy(this.charBuffer, 0, e.length - this.charReceived, i), i -= this.charReceived), t += e.toString(this.encoding, 0, i);var i = t.length - 1,
            r = t.charCodeAt(i);if (r >= 55296 && 56319 >= r) {
          var o = this.surrogateSize;return this.charLength += o, this.charReceived += o, this.charBuffer.copy(this.charBuffer, o, 0, o), e.copy(this.charBuffer, 0, 0, o), t.substring(0, i);
        }return t;
      }, f.prototype.detectIncompleteChar = function (e) {
        for (var t = e.length >= 3 ? 3 : e.length; t > 0; t--) {
          var n = e[e.length - t];if (1 == t && n >> 5 == 6) {
            this.charLength = 2;break;
          }if (2 >= t && n >> 4 == 14) {
            this.charLength = 3;break;
          }if (3 >= t && n >> 3 == 30) {
            this.charLength = 4;break;
          }
        }this.charReceived = t;
      }, f.prototype.end = function (e) {
        var t = "";if (e && e.length && (t = this.write(e)), this.charReceived) {
          var n = this.charReceived,
              r = this.charBuffer,
              i = this.encoding;t += r.slice(0, n).toString(i);
        }return t;
      };
    }, { buffer: 179 }], 174: [function (e, t, n) {
      function r() {
        this.protocol = null, this.slashes = null, this.auth = null, this.host = null, this.port = null, this.hostname = null, this.hash = null, this.search = null, this.query = null, this.pathname = null, this.path = null, this.href = null;
      }function i(e, t, n) {
        if (e && f(e) && e instanceof r) return e;var i = new r();return i.parse(e, t, n), i;
      }function o(e) {
        return c(e) && (e = i(e)), e instanceof r ? e.format() : r.prototype.format.call(e);
      }function a(e, t) {
        return i(e, !1, !0).resolve(t);
      }function s(e, t) {
        return e ? i(e, !1, !0).resolveObject(t) : t;
      }function c(e) {
        return "string" == typeof e;
      }function f(e) {
        return "object" == (typeof e === "undefined" ? "undefined" : _typeof(e)) && null !== e;
      }function u(e) {
        return null === e;
      }function d(e) {
        return null == e;
      }var p = e("punycode");n.parse = i, n.resolve = a, n.resolveObject = s, n.format = o, n.Url = r;var h = /^([a-z0-9.+-]+:)/i,
          l = /:[0-9]*$/,
          b = ["<", ">", '"', "`", " ", "\r", "\n", "	"],
          m = ["{", "}", "|", "\\", "^", "`"].concat(b),
          v = ["'"].concat(m),
          g = ["%", "/", "?", ";", "#"].concat(v),
          y = ["/", "?", "#"],
          w = 255,
          _ = /^[a-z0-9A-Z_-]{0,63}$/,
          x = /^([a-z0-9A-Z_-]{0,63})(.*)$/,
          E = { javascript: !0, "javascript:": !0 },
          S = { javascript: !0, "javascript:": !0 },
          k = { http: !0, https: !0, ftp: !0, gopher: !0, file: !0, "http:": !0, "https:": !0, "ftp:": !0, "gopher:": !0, "file:": !0 },
          T = e("querystring");r.prototype.parse = function (e, t, n) {
        if (!c(e)) throw new TypeError("Parameter 'url' must be a string, not " + (typeof e === "undefined" ? "undefined" : _typeof(e)));var r = e;r = r.trim();var i = h.exec(r);if (i) {
          i = i[0];var o = i.toLowerCase();this.protocol = o, r = r.substr(i.length);
        }if (n || i || r.match(/^\/\/[^@\/]+@[^@\/]+/)) {
          var a = "//" === r.substr(0, 2);!a || i && S[i] || (r = r.substr(2), this.slashes = !0);
        }if (!S[i] && (a || i && !k[i])) {
          for (var s = -1, f = 0; f < y.length; f++) {
            var u = r.indexOf(y[f]);-1 !== u && (-1 === s || s > u) && (s = u);
          }var d, l;l = -1 === s ? r.lastIndexOf("@") : r.lastIndexOf("@", s), -1 !== l && (d = r.slice(0, l), r = r.slice(l + 1), this.auth = decodeURIComponent(d)), s = -1;for (var f = 0; f < g.length; f++) {
            var u = r.indexOf(g[f]);-1 !== u && (-1 === s || s > u) && (s = u);
          }-1 === s && (s = r.length), this.host = r.slice(0, s), r = r.slice(s), this.parseHost(), this.hostname = this.hostname || "";var b = "[" === this.hostname[0] && "]" === this.hostname[this.hostname.length - 1];if (!b) for (var m = this.hostname.split(/\./), f = 0, j = m.length; j > f; f++) {
            var A = m[f];if (A && !A.match(_)) {
              for (var I = "", R = 0, O = A.length; O > R; R++) {
                I += A.charCodeAt(R) > 127 ? "x" : A[R];
              }if (!I.match(_)) {
                var N = m.slice(0, f),
                    B = m.slice(f + 1),
                    C = A.match(x);C && (N.push(C[1]), B.unshift(C[2])), B.length && (r = "/" + B.join(".") + r), this.hostname = N.join(".");break;
              }
            }
          }if (this.hostname.length > w ? this.hostname = "" : this.hostname = this.hostname.toLowerCase(), !b) {
            for (var q = this.hostname.split("."), P = [], f = 0; f < q.length; ++f) {
              var M = q[f];P.push(M.match(/[^A-Za-z0-9_-]/) ? "xn--" + p.encode(M) : M);
            }this.hostname = P.join(".");
          }var U = this.port ? ":" + this.port : "",
              z = this.hostname || "";this.host = z + U, this.href += this.host, b && (this.hostname = this.hostname.substr(1, this.hostname.length - 2), "/" !== r[0] && (r = "/" + r));
        }if (!E[o]) for (var f = 0, j = v.length; j > f; f++) {
          var L = v[f],
              D = encodeURIComponent(L);D === L && (D = escape(L)), r = r.split(L).join(D);
        }var F = r.indexOf("#");-1 !== F && (this.hash = r.substr(F), r = r.slice(0, F));var H = r.indexOf("?");if (-1 !== H ? (this.search = r.substr(H), this.query = r.substr(H + 1), t && (this.query = T.parse(this.query)), r = r.slice(0, H)) : t && (this.search = "", this.query = {}), r && (this.pathname = r), k[o] && this.hostname && !this.pathname && (this.pathname = "/"), this.pathname || this.search) {
          var U = this.pathname || "",
              M = this.search || "";this.path = U + M;
        }return this.href = this.format(), this;
      }, r.prototype.format = function () {
        var e = this.auth || "";e && (e = encodeURIComponent(e), e = e.replace(/%3A/i, ":"), e += "@");var t = this.protocol || "",
            n = this.pathname || "",
            r = this.hash || "",
            i = !1,
            o = "";this.host ? i = e + this.host : this.hostname && (i = e + (-1 === this.hostname.indexOf(":") ? this.hostname : "[" + this.hostname + "]"), this.port && (i += ":" + this.port)), this.query && f(this.query) && Object.keys(this.query).length && (o = T.stringify(this.query));var a = this.search || o && "?" + o || "";return t && ":" !== t.substr(-1) && (t += ":"), this.slashes || (!t || k[t]) && i !== !1 ? (i = "//" + (i || ""), n && "/" !== n.charAt(0) && (n = "/" + n)) : i || (i = ""), r && "#" !== r.charAt(0) && (r = "#" + r), a && "?" !== a.charAt(0) && (a = "?" + a), n = n.replace(/[?#]/g, function (e) {
          return encodeURIComponent(e);
        }), a = a.replace("#", "%23"), t + i + n + a + r;
      }, r.prototype.resolve = function (e) {
        return this.resolveObject(i(e, !1, !0)).format();
      }, r.prototype.resolveObject = function (e) {
        if (c(e)) {
          var t = new r();t.parse(e, !1, !0), e = t;
        }var n = new r();if (Object.keys(this).forEach(function (e) {
          n[e] = this[e];
        }, this), n.hash = e.hash, "" === e.href) return n.href = n.format(), n;if (e.slashes && !e.protocol) return Object.keys(e).forEach(function (t) {
          "protocol" !== t && (n[t] = e[t]);
        }), k[n.protocol] && n.hostname && !n.pathname && (n.path = n.pathname = "/"), n.href = n.format(), n;if (e.protocol && e.protocol !== n.protocol) {
          if (!k[e.protocol]) return Object.keys(e).forEach(function (t) {
            n[t] = e[t];
          }), n.href = n.format(), n;if (n.protocol = e.protocol, e.host || S[e.protocol]) n.pathname = e.pathname;else {
            for (var i = (e.pathname || "").split("/"); i.length && !(e.host = i.shift());) {}e.host || (e.host = ""), e.hostname || (e.hostname = ""), "" !== i[0] && i.unshift(""), i.length < 2 && i.unshift(""), n.pathname = i.join("/");
          }if (n.search = e.search, n.query = e.query, n.host = e.host || "", n.auth = e.auth, n.hostname = e.hostname || e.host, n.port = e.port, n.pathname || n.search) {
            var o = n.pathname || "",
                a = n.search || "";n.path = o + a;
          }return n.slashes = n.slashes || e.slashes, n.href = n.format(), n;
        }var s = n.pathname && "/" === n.pathname.charAt(0),
            f = e.host || e.pathname && "/" === e.pathname.charAt(0),
            p = f || s || n.host && e.pathname,
            h = p,
            l = n.pathname && n.pathname.split("/") || [],
            i = e.pathname && e.pathname.split("/") || [],
            b = n.protocol && !k[n.protocol];if (b && (n.hostname = "", n.port = null, n.host && ("" === l[0] ? l[0] = n.host : l.unshift(n.host)), n.host = "", e.protocol && (e.hostname = null, e.port = null, e.host && ("" === i[0] ? i[0] = e.host : i.unshift(e.host)), e.host = null), p = p && ("" === i[0] || "" === l[0])), f) n.host = e.host || "" === e.host ? e.host : n.host, n.hostname = e.hostname || "" === e.hostname ? e.hostname : n.hostname, n.search = e.search, n.query = e.query, l = i;else if (i.length) l || (l = []), l.pop(), l = l.concat(i), n.search = e.search, n.query = e.query;else if (!d(e.search)) {
          if (b) {
            n.hostname = n.host = l.shift();var m = n.host && n.host.indexOf("@") > 0 ? n.host.split("@") : !1;m && (n.auth = m.shift(), n.host = n.hostname = m.shift());
          }return n.search = e.search, n.query = e.query, u(n.pathname) && u(n.search) || (n.path = (n.pathname ? n.pathname : "") + (n.search ? n.search : "")), n.href = n.format(), n;
        }if (!l.length) return n.pathname = null, n.search ? n.path = "/" + n.search : n.path = null, n.href = n.format(), n;for (var v = l.slice(-1)[0], g = (n.host || e.host) && ("." === v || ".." === v) || "" === v, y = 0, w = l.length; w >= 0; w--) {
          v = l[w], "." == v ? l.splice(w, 1) : ".." === v ? (l.splice(w, 1), y++) : y && (l.splice(w, 1), y--);
        }if (!p && !h) for (; y--; y) {
          l.unshift("..");
        }!p || "" === l[0] || l[0] && "/" === l[0].charAt(0) || l.unshift(""), g && "/" !== l.join("/").substr(-1) && l.push("");var _ = "" === l[0] || l[0] && "/" === l[0].charAt(0);if (b) {
          n.hostname = n.host = _ ? "" : l.length ? l.shift() : "";var m = n.host && n.host.indexOf("@") > 0 ? n.host.split("@") : !1;m && (n.auth = m.shift(), n.host = n.hostname = m.shift());
        }return p = p || n.host && l.length, p && !_ && l.unshift(""), l.length ? n.pathname = l.join("/") : (n.pathname = null, n.path = null), u(n.pathname) && u(n.search) || (n.path = (n.pathname ? n.pathname : "") + (n.search ? n.search : "")), n.auth = e.auth || n.auth, n.slashes = n.slashes || e.slashes, n.href = n.format(), n;
      }, r.prototype.parseHost = function () {
        var e = this.host,
            t = l.exec(e);t && (t = t[0], ":" !== t && (this.port = t.substr(1)), e = e.substr(0, e.length - t.length)), e && (this.hostname = e);
      };
    }, { punycode: 157, querystring: 160 }], 175: [function (e, t, n) {
      t.exports = function (e) {
        return e && "object" == (typeof e === "undefined" ? "undefined" : _typeof(e)) && "function" == typeof e.copy && "function" == typeof e.fill && "function" == typeof e.readUInt8;
      };
    }, {}], 176: [function (e, t, n) {
      (function (t, r) {
        function i(e, t) {
          var r = { seen: [], stylize: a };return arguments.length >= 3 && (r.depth = arguments[2]), arguments.length >= 4 && (r.colors = arguments[3]), b(t) ? r.showHidden = t : t && n._extend(r, t), _(r.showHidden) && (r.showHidden = !1), _(r.depth) && (r.depth = 2), _(r.colors) && (r.colors = !1), _(r.customInspect) && (r.customInspect = !0), r.colors && (r.stylize = o), c(r, e, r.depth);
        }function o(e, t) {
          var n = i.styles[t];return n ? "[" + i.colors[n][0] + "m" + e + "[" + i.colors[n][1] + "m" : e;
        }function a(e, t) {
          return e;
        }function s(e) {
          var t = {};return e.forEach(function (e, n) {
            t[e] = !0;
          }), t;
        }function c(e, t, r) {
          if (e.customInspect && t && T(t.inspect) && t.inspect !== n.inspect && (!t.constructor || t.constructor.prototype !== t)) {
            var i = t.inspect(r, e);return y(i) || (i = c(e, i, r)), i;
          }var o = f(e, t);if (o) return o;var a = Object.keys(t),
              b = s(a);if (e.showHidden && (a = Object.getOwnPropertyNames(t)), k(t) && (a.indexOf("message") >= 0 || a.indexOf("description") >= 0)) return u(t);if (0 === a.length) {
            if (T(t)) {
              var m = t.name ? ": " + t.name : "";return e.stylize("[Function" + m + "]", "special");
            }if (x(t)) return e.stylize(RegExp.prototype.toString.call(t), "regexp");if (S(t)) return e.stylize(Date.prototype.toString.call(t), "date");if (k(t)) return u(t);
          }var v = "",
              g = !1,
              w = ["{", "}"];if (l(t) && (g = !0, w = ["[", "]"]), T(t)) {
            var _ = t.name ? ": " + t.name : "";v = " [Function" + _ + "]";
          }if (x(t) && (v = " " + RegExp.prototype.toString.call(t)), S(t) && (v = " " + Date.prototype.toUTCString.call(t)), k(t) && (v = " " + u(t)), 0 === a.length && (!g || 0 == t.length)) return w[0] + v + w[1];if (0 > r) return x(t) ? e.stylize(RegExp.prototype.toString.call(t), "regexp") : e.stylize("[Object]", "special");e.seen.push(t);var E;return E = g ? d(e, t, r, b, a) : a.map(function (n) {
            return p(e, t, r, b, n, g);
          }), e.seen.pop(), h(E, v, w);
        }function f(e, t) {
          if (_(t)) return e.stylize("undefined", "undefined");if (y(t)) {
            var n = "'" + JSON.stringify(t).replace(/^"|"$/g, "").replace(/'/g, "\\'").replace(/\\"/g, '"') + "'";return e.stylize(n, "string");
          }return g(t) ? e.stylize("" + t, "number") : b(t) ? e.stylize("" + t, "boolean") : m(t) ? e.stylize("null", "null") : void 0;
        }function u(e) {
          return "[" + Error.prototype.toString.call(e) + "]";
        }function d(e, t, n, r, i) {
          for (var o = [], a = 0, s = t.length; s > a; ++a) {
            O(t, String(a)) ? o.push(p(e, t, n, r, String(a), !0)) : o.push("");
          }return i.forEach(function (i) {
            i.match(/^\d+$/) || o.push(p(e, t, n, r, i, !0));
          }), o;
        }function p(e, t, n, r, i, o) {
          var a, s, f;if (f = Object.getOwnPropertyDescriptor(t, i) || { value: t[i] }, f.get ? s = f.set ? e.stylize("[Getter/Setter]", "special") : e.stylize("[Getter]", "special") : f.set && (s = e.stylize("[Setter]", "special")), O(r, i) || (a = "[" + i + "]"), s || (e.seen.indexOf(f.value) < 0 ? (s = m(n) ? c(e, f.value, null) : c(e, f.value, n - 1), s.indexOf("\n") > -1 && (s = o ? s.split("\n").map(function (e) {
            return "  " + e;
          }).join("\n").substr(2) : "\n" + s.split("\n").map(function (e) {
            return "   " + e;
          }).join("\n"))) : s = e.stylize("[Circular]", "special")), _(a)) {
            if (o && i.match(/^\d+$/)) return s;a = JSON.stringify("" + i), a.match(/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/) ? (a = a.substr(1, a.length - 2), a = e.stylize(a, "name")) : (a = a.replace(/'/g, "\\'").replace(/\\"/g, '"').replace(/(^"|"$)/g, "'"), a = e.stylize(a, "string"));
          }return a + ": " + s;
        }function h(e, t, n) {
          var r = 0,
              i = e.reduce(function (e, t) {
            return r++, t.indexOf("\n") >= 0 && r++, e + t.replace(/\u001b\[\d\d?m/g, "").length + 1;
          }, 0);return i > 60 ? n[0] + ("" === t ? "" : t + "\n ") + " " + e.join(",\n  ") + " " + n[1] : n[0] + t + " " + e.join(", ") + " " + n[1];
        }function l(e) {
          return Array.isArray(e);
        }function b(e) {
          return "boolean" == typeof e;
        }function m(e) {
          return null === e;
        }function v(e) {
          return null == e;
        }function g(e) {
          return "number" == typeof e;
        }function y(e) {
          return "string" == typeof e;
        }function w(e) {
          return "symbol" == (typeof e === "undefined" ? "undefined" : _typeof(e));
        }function _(e) {
          return void 0 === e;
        }function x(e) {
          return E(e) && "[object RegExp]" === A(e);
        }function E(e) {
          return "object" == (typeof e === "undefined" ? "undefined" : _typeof(e)) && null !== e;
        }function S(e) {
          return E(e) && "[object Date]" === A(e);
        }function k(e) {
          return E(e) && ("[object Error]" === A(e) || e instanceof Error);
        }function T(e) {
          return "function" == typeof e;
        }function j(e) {
          return null === e || "boolean" == typeof e || "number" == typeof e || "string" == typeof e || "symbol" == (typeof e === "undefined" ? "undefined" : _typeof(e)) || "undefined" == typeof e;
        }function A(e) {
          return Object.prototype.toString.call(e);
        }function I(e) {
          return 10 > e ? "0" + e.toString(10) : e.toString(10);
        }function R() {
          var e = new Date(),
              t = [I(e.getHours()), I(e.getMinutes()), I(e.getSeconds())].join(":");return [e.getDate(), q[e.getMonth()], t].join(" ");
        }function O(e, t) {
          return Object.prototype.hasOwnProperty.call(e, t);
        }var N = /%[sdj%]/g;n.format = function (e) {
          if (!y(e)) {
            for (var t = [], n = 0; n < arguments.length; n++) {
              t.push(i(arguments[n]));
            }return t.join(" ");
          }for (var n = 1, r = arguments, o = r.length, a = String(e).replace(N, function (e) {
            if ("%%" === e) return "%";if (n >= o) return e;switch (e) {case "%s":
                return String(r[n++]);case "%d":
                return Number(r[n++]);case "%j":
                try {
                  return JSON.stringify(r[n++]);
                } catch (t) {
                  return "[Circular]";
                }default:
                return e;}
          }), s = r[n]; o > n; s = r[++n]) {
            a += m(s) || !E(s) ? " " + s : " " + i(s);
          }return a;
        }, n.deprecate = function (e, i) {
          function o() {
            if (!a) {
              if (t.throwDeprecation) throw new Error(i);t.traceDeprecation ? console.trace(i) : console.error(i), a = !0;
            }return e.apply(this, arguments);
          }if (_(r.process)) return function () {
            return n.deprecate(e, i).apply(this, arguments);
          };if (t.noDeprecation === !0) return e;var a = !1;return o;
        };var B,
            C = {};n.debuglog = function (e) {
          if (_(B) && (B = t.env.NODE_DEBUG || ""), e = e.toUpperCase(), !C[e]) if (new RegExp("\\b" + e + "\\b", "i").test(B)) {
            var r = t.pid;C[e] = function () {
              var t = n.format.apply(n, arguments);console.error("%s %d: %s", e, r, t);
            };
          } else C[e] = function () {};return C[e];
        }, n.inspect = i, i.colors = { bold: [1, 22], italic: [3, 23], underline: [4, 24], inverse: [7, 27], white: [37, 39], grey: [90, 39], black: [30, 39], blue: [34, 39], cyan: [36, 39], green: [32, 39], magenta: [35, 39], red: [31, 39], yellow: [33, 39] }, i.styles = { special: "cyan", number: "yellow", "boolean": "yellow", undefined: "grey", "null": "bold", string: "green", date: "magenta", regexp: "red" }, n.isArray = l, n.isBoolean = b, n.isNull = m, n.isNullOrUndefined = v, n.isNumber = g, n.isString = y, n.isSymbol = w, n.isUndefined = _, n.isRegExp = x, n.isObject = E, n.isDate = S, n.isError = k, n.isFunction = T, n.isPrimitive = j, n.isBuffer = e("./support/isBuffer");var q = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];n.log = function () {
          console.log("%s - %s", R(), n.format.apply(n, arguments));
        }, n.inherits = e("inherits"), n._extend = function (e, t) {
          if (!t || !E(t)) return e;for (var n = Object.keys(t), r = n.length; r--;) {
            e[n[r]] = t[n[r]];
          }return e;
        };
      }).call(this, e("_process"), "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {});
    }, { "./support/isBuffer": 175, _process: 156, inherits: 152 }], 177: [function (require, module, exports) {
      function Context() {}var indexOf = require("indexof"),
          Object_keys = function Object_keys(e) {
        if (Object.keys) return Object.keys(e);var t = [];for (var n in e) {
          t.push(n);
        }return t;
      },
          forEach = function forEach(e, t) {
        if (e.forEach) return e.forEach(t);for (var n = 0; n < e.length; n++) {
          t(e[n], n, e);
        }
      },
          defineProp = function () {
        try {
          return Object.defineProperty({}, "_", {}), function (e, t, n) {
            Object.defineProperty(e, t, { writable: !0, enumerable: !1, configurable: !0, value: n });
          };
        } catch (e) {
          return function (e, t, n) {
            e[t] = n;
          };
        }
      }(),
          globals = ["Array", "Boolean", "Date", "Error", "EvalError", "Function", "Infinity", "JSON", "Math", "NaN", "Number", "Object", "RangeError", "ReferenceError", "RegExp", "String", "SyntaxError", "TypeError", "URIError", "decodeURI", "decodeURIComponent", "encodeURI", "encodeURIComponent", "escape", "eval", "isFinite", "isNaN", "parseFloat", "parseInt", "undefined", "unescape"];Context.prototype = {};var Script = exports.Script = function (e) {
        return this instanceof Script ? void (this.code = e) : new Script(e);
      };Script.prototype.runInContext = function (e) {
        if (!(e instanceof Context)) throw new TypeError("needs a 'context' argument.");var t = document.createElement("iframe");t.style || (t.style = {}), t.style.display = "none", document.body.appendChild(t);var n = t.contentWindow,
            r = n.eval,
            i = n.execScript;!r && i && (i.call(n, "null"), r = n.eval), forEach(Object_keys(e), function (t) {
          n[t] = e[t];
        }), forEach(globals, function (t) {
          e[t] && (n[t] = e[t]);
        });var o = Object_keys(n),
            a = r.call(n, this.code);return forEach(Object_keys(n), function (t) {
          (t in e || -1 === indexOf(o, t)) && (e[t] = n[t]);
        }), forEach(globals, function (t) {
          t in e || defineProp(e, t, n[t]);
        }), document.body.removeChild(t), a;
      }, Script.prototype.runInThisContext = function () {
        return eval(this.code);
      }, Script.prototype.runInNewContext = function (e) {
        var t = Script.createContext(e),
            n = this.runInContext(t);return forEach(Object_keys(t), function (n) {
          e[n] = t[n];
        }), n;
      }, forEach(Object_keys(Script.prototype), function (e) {
        exports[e] = Script[e] = function (t) {
          var n = Script(t);return n[e].apply(n, [].slice.call(arguments, 1));
        };
      }), exports.createScript = function (e) {
        return exports.Script(e);
      }, exports.createContext = Script.createContext = function (e) {
        var t = new Context();return "object" == (typeof e === "undefined" ? "undefined" : _typeof(e)) && forEach(Object_keys(e), function (n) {
          t[n] = e[n];
        }), t;
      };
    }, { indexof: 178 }], 178: [function (e, t, n) {
      var r = [].indexOf;t.exports = function (e, t) {
        if (r) return e.indexOf(t);for (var n = 0; n < e.length; ++n) {
          if (e[n] === t) return n;
        }return -1;
      };
    }, {}], 179: [function (e, t, n) {
      function r(e) {
        return this instanceof r ? (this.length = 0, this.parent = void 0, "number" == typeof e ? i(this, e) : "string" == typeof e ? o(this, e, arguments.length > 1 ? arguments[1] : "utf8") : a(this, e)) : arguments.length > 1 ? new r(e, arguments[1]) : new r(e);
      }function i(e, t) {
        if (e = p(e, 0 > t ? 0 : 0 | h(t)), !r.TYPED_ARRAY_SUPPORT) for (var n = 0; t > n; n++) {
          e[n] = 0;
        }return e;
      }function o(e, t, n) {
        "string" == typeof n && "" !== n || (n = "utf8");var r = 0 | b(t, n);return e = p(e, r), e.write(t, n), e;
      }function a(e, t) {
        if (r.isBuffer(t)) return s(e, t);if (J(t)) return c(e, t);if (null == t) throw new TypeError("must start with number, buffer, array or string");return "undefined" != typeof ArrayBuffer && t.buffer instanceof ArrayBuffer ? f(e, t) : t.length ? u(e, t) : d(e, t);
      }function s(e, t) {
        var n = 0 | h(t.length);return e = p(e, n), t.copy(e, 0, 0, n), e;
      }function c(e, t) {
        var n = 0 | h(t.length);e = p(e, n);for (var r = 0; n > r; r += 1) {
          e[r] = 255 & t[r];
        }return e;
      }function f(e, t) {
        var n = 0 | h(t.length);e = p(e, n);for (var r = 0; n > r; r += 1) {
          e[r] = 255 & t[r];
        }return e;
      }function u(e, t) {
        var n = 0 | h(t.length);e = p(e, n);for (var r = 0; n > r; r += 1) {
          e[r] = 255 & t[r];
        }return e;
      }function d(e, t) {
        var n,
            r = 0;"Buffer" === t.type && J(t.data) && (n = t.data, r = 0 | h(n.length)), e = p(e, r);for (var i = 0; r > i; i += 1) {
          e[i] = 255 & n[i];
        }return e;
      }function p(e, t) {
        r.TYPED_ARRAY_SUPPORT ? e = r._augment(new Uint8Array(t)) : (e.length = t, e._isBuffer = !0);var n = 0 !== t && t <= r.poolSize >>> 1;return n && (e.parent = X), e;
      }function h(e) {
        if (e >= Y) throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x" + Y.toString(16) + " bytes");return 0 | e;
      }function l(e, t) {
        if (!(this instanceof l)) return new l(e, t);var n = new r(e, t);return delete n.parent, n;
      }function b(e, t) {
        if ("string" != typeof e && (e = String(e)), 0 === e.length) return 0;switch (t || "utf8") {case "ascii":case "binary":case "raw":
            return e.length;case "ucs2":case "ucs-2":case "utf16le":case "utf-16le":
            return 2 * e.length;case "hex":
            return e.length >>> 1;case "utf8":case "utf-8":
            return U(e).length;case "base64":
            return D(e).length;default:
            return e.length;}
      }function m(e, t, n, r) {
        n = Number(n) || 0;var i = e.length - n;r ? (r = Number(r), r > i && (r = i)) : r = i;var o = t.length;if (o % 2 !== 0) throw new Error("Invalid hex string");r > o / 2 && (r = o / 2);for (var a = 0; r > a; a++) {
          var s = parseInt(t.substr(2 * a, 2), 16);if (isNaN(s)) throw new Error("Invalid hex string");e[n + a] = s;
        }return a;
      }function v(e, t, n, r) {
        return F(U(t, e.length - n), e, n, r);
      }function g(e, t, n, r) {
        return F(z(t), e, n, r);
      }function y(e, t, n, r) {
        return g(e, t, n, r);
      }function w(e, t, n, r) {
        return F(D(t), e, n, r);
      }function _(e, t, n, r) {
        return F(L(t, e.length - n), e, n, r);
      }function x(e, t, n) {
        return 0 === t && n === e.length ? G.fromByteArray(e) : G.fromByteArray(e.slice(t, n));
      }function E(e, t, n) {
        var r = "",
            i = "";n = Math.min(e.length, n);for (var o = t; n > o; o++) {
          e[o] <= 127 ? (r += H(i) + String.fromCharCode(e[o]), i = "") : i += "%" + e[o].toString(16);
        }return r + H(i);
      }function S(e, t, n) {
        var r = "";n = Math.min(e.length, n);for (var i = t; n > i; i++) {
          r += String.fromCharCode(127 & e[i]);
        }return r;
      }function k(e, t, n) {
        var r = "";n = Math.min(e.length, n);for (var i = t; n > i; i++) {
          r += String.fromCharCode(e[i]);
        }return r;
      }function T(e, t, n) {
        var r = e.length;(!t || 0 > t) && (t = 0), (!n || 0 > n || n > r) && (n = r);for (var i = "", o = t; n > o; o++) {
          i += M(e[o]);
        }return i;
      }function j(e, t, n) {
        for (var r = e.slice(t, n), i = "", o = 0; o < r.length; o += 2) {
          i += String.fromCharCode(r[o] + 256 * r[o + 1]);
        }return i;
      }function A(e, t, n) {
        if (e % 1 !== 0 || 0 > e) throw new RangeError("offset is not uint");if (e + t > n) throw new RangeError("Trying to access beyond buffer length");
      }function I(e, t, n, i, o, a) {
        if (!r.isBuffer(e)) throw new TypeError("buffer must be a Buffer instance");if (t > o || a > t) throw new RangeError("value is out of bounds");if (n + i > e.length) throw new RangeError("index out of range");
      }function R(e, t, n, r) {
        0 > t && (t = 65535 + t + 1);for (var i = 0, o = Math.min(e.length - n, 2); o > i; i++) {
          e[n + i] = (t & 255 << 8 * (r ? i : 1 - i)) >>> 8 * (r ? i : 1 - i);
        }
      }function O(e, t, n, r) {
        0 > t && (t = 4294967295 + t + 1);for (var i = 0, o = Math.min(e.length - n, 4); o > i; i++) {
          e[n + i] = t >>> 8 * (r ? i : 3 - i) & 255;
        }
      }function N(e, t, n, r, i, o) {
        if (t > i || o > t) throw new RangeError("value is out of bounds");if (n + r > e.length) throw new RangeError("index out of range");if (0 > n) throw new RangeError("index out of range");
      }function B(e, t, n, r, i) {
        return i || N(e, t, n, 4, 3.4028234663852886e38, -3.4028234663852886e38), K.write(e, t, n, r, 23, 4), n + 4;
      }function C(e, t, n, r, i) {
        return i || N(e, t, n, 8, 1.7976931348623157e308, -1.7976931348623157e308), K.write(e, t, n, r, 52, 8), n + 8;
      }function q(e) {
        if (e = P(e).replace(W, ""), e.length < 2) return "";for (; e.length % 4 !== 0;) {
          e += "=";
        }return e;
      }function P(e) {
        return e.trim ? e.trim() : e.replace(/^\s+|\s+$/g, "");
      }function M(e) {
        return 16 > e ? "0" + e.toString(16) : e.toString(16);
      }function U(e, t) {
        t = t || 1 / 0;for (var n, r = e.length, i = null, o = [], a = 0; r > a; a++) {
          if (n = e.charCodeAt(a), n > 55295 && 57344 > n) {
            if (!i) {
              if (n > 56319) {
                (t -= 3) > -1 && o.push(239, 191, 189);continue;
              }if (a + 1 === r) {
                (t -= 3) > -1 && o.push(239, 191, 189);continue;
              }i = n;continue;
            }if (56320 > n) {
              (t -= 3) > -1 && o.push(239, 191, 189), i = n;continue;
            }n = i - 55296 << 10 | n - 56320 | 65536, i = null;
          } else i && ((t -= 3) > -1 && o.push(239, 191, 189), i = null);if (128 > n) {
            if ((t -= 1) < 0) break;o.push(n);
          } else if (2048 > n) {
            if ((t -= 2) < 0) break;o.push(n >> 6 | 192, 63 & n | 128);
          } else if (65536 > n) {
            if ((t -= 3) < 0) break;o.push(n >> 12 | 224, n >> 6 & 63 | 128, 63 & n | 128);
          } else {
            if (!(2097152 > n)) throw new Error("Invalid code point");
            if ((t -= 4) < 0) break;o.push(n >> 18 | 240, n >> 12 & 63 | 128, n >> 6 & 63 | 128, 63 & n | 128);
          }
        }return o;
      }function z(e) {
        for (var t = [], n = 0; n < e.length; n++) {
          t.push(255 & e.charCodeAt(n));
        }return t;
      }function L(e, t) {
        for (var n, r, i, o = [], a = 0; a < e.length && !((t -= 2) < 0); a++) {
          n = e.charCodeAt(a), r = n >> 8, i = n % 256, o.push(i), o.push(r);
        }return o;
      }function D(e) {
        return G.toByteArray(q(e));
      }function F(e, t, n, r) {
        for (var i = 0; r > i && !(i + n >= t.length || i >= e.length); i++) {
          t[i + n] = e[i];
        }return i;
      }function H(e) {
        try {
          return decodeURIComponent(e);
        } catch (t) {
          return String.fromCharCode(65533);
        }
      }var G = e("base64-js"),
          K = e("ieee754"),
          J = e("is-array");n.Buffer = r, n.SlowBuffer = l, n.INSPECT_MAX_BYTES = 50, r.poolSize = 8192;var Y = 1073741823,
          X = {};r.TYPED_ARRAY_SUPPORT = function () {
        try {
          var e = new ArrayBuffer(0),
              t = new Uint8Array(e);return t.foo = function () {
            return 42;
          }, 42 === t.foo() && "function" == typeof t.subarray && 0 === new Uint8Array(1).subarray(1, 1).byteLength;
        } catch (n) {
          return !1;
        }
      }(), r.isBuffer = function (e) {
        return !(null == e || !e._isBuffer);
      }, r.compare = function (e, t) {
        if (!r.isBuffer(e) || !r.isBuffer(t)) throw new TypeError("Arguments must be Buffers");if (e === t) return 0;for (var n = e.length, i = t.length, o = 0, a = Math.min(n, i); a > o && e[o] === t[o];) {
          ++o;
        }return o !== a && (n = e[o], i = t[o]), i > n ? -1 : n > i ? 1 : 0;
      }, r.isEncoding = function (e) {
        switch (String(e).toLowerCase()) {case "hex":case "utf8":case "utf-8":case "ascii":case "binary":case "base64":case "raw":case "ucs2":case "ucs-2":case "utf16le":case "utf-16le":
            return !0;default:
            return !1;}
      }, r.concat = function (e, t) {
        if (!J(e)) throw new TypeError("list argument must be an Array of Buffers.");if (0 === e.length) return new r(0);if (1 === e.length) return e[0];var n;if (void 0 === t) for (t = 0, n = 0; n < e.length; n++) {
          t += e[n].length;
        }var i = new r(t),
            o = 0;for (n = 0; n < e.length; n++) {
          var a = e[n];a.copy(i, o), o += a.length;
        }return i;
      }, r.byteLength = b, r.prototype.length = void 0, r.prototype.parent = void 0, r.prototype.toString = function (e, t, n) {
        var r = !1;if (t = 0 | t, n = void 0 === n || n === 1 / 0 ? this.length : 0 | n, e || (e = "utf8"), 0 > t && (t = 0), n > this.length && (n = this.length), t >= n) return "";for (;;) {
          switch (e) {case "hex":
              return T(this, t, n);case "utf8":case "utf-8":
              return E(this, t, n);case "ascii":
              return S(this, t, n);case "binary":
              return k(this, t, n);case "base64":
              return x(this, t, n);case "ucs2":case "ucs-2":case "utf16le":case "utf-16le":
              return j(this, t, n);default:
              if (r) throw new TypeError("Unknown encoding: " + e);e = (e + "").toLowerCase(), r = !0;}
        }
      }, r.prototype.equals = function (e) {
        if (!r.isBuffer(e)) throw new TypeError("Argument must be a Buffer");return this === e ? !0 : 0 === r.compare(this, e);
      }, r.prototype.inspect = function () {
        var e = "",
            t = n.INSPECT_MAX_BYTES;return this.length > 0 && (e = this.toString("hex", 0, t).match(/.{2}/g).join(" "), this.length > t && (e += " ... ")), "<Buffer " + e + ">";
      }, r.prototype.compare = function (e) {
        if (!r.isBuffer(e)) throw new TypeError("Argument must be a Buffer");return this === e ? 0 : r.compare(this, e);
      }, r.prototype.indexOf = function (e, t) {
        function n(e, t, n) {
          for (var r = -1, i = 0; n + i < e.length; i++) {
            if (e[n + i] === t[-1 === r ? 0 : i - r]) {
              if (-1 === r && (r = i), i - r + 1 === t.length) return n + r;
            } else r = -1;
          }return -1;
        }if (t > 2147483647 ? t = 2147483647 : -2147483648 > t && (t = -2147483648), t >>= 0, 0 === this.length) return -1;if (t >= this.length) return -1;if (0 > t && (t = Math.max(this.length + t, 0)), "string" == typeof e) return 0 === e.length ? -1 : String.prototype.indexOf.call(this, e, t);if (r.isBuffer(e)) return n(this, e, t);if ("number" == typeof e) return r.TYPED_ARRAY_SUPPORT && "function" === Uint8Array.prototype.indexOf ? Uint8Array.prototype.indexOf.call(this, e, t) : n(this, [e], t);throw new TypeError("val must be string, number or Buffer");
      }, r.prototype.get = function (e) {
        return console.log(".get() is deprecated. Access using array indexes instead."), this.readUInt8(e);
      }, r.prototype.set = function (e, t) {
        return console.log(".set() is deprecated. Access using array indexes instead."), this.writeUInt8(e, t);
      }, r.prototype.write = function (e, t, n, r) {
        if (void 0 === t) r = "utf8", n = this.length, t = 0;else if (void 0 === n && "string" == typeof t) r = t, n = this.length, t = 0;else if (isFinite(t)) t = 0 | t, isFinite(n) ? (n = 0 | n, void 0 === r && (r = "utf8")) : (r = n, n = void 0);else {
          var i = r;r = t, t = 0 | n, n = i;
        }var o = this.length - t;if ((void 0 === n || n > o) && (n = o), e.length > 0 && (0 > n || 0 > t) || t > this.length) throw new RangeError("attempt to write outside buffer bounds");r || (r = "utf8");for (var a = !1;;) {
          switch (r) {case "hex":
              return m(this, e, t, n);case "utf8":case "utf-8":
              return v(this, e, t, n);case "ascii":
              return g(this, e, t, n);case "binary":
              return y(this, e, t, n);case "base64":
              return w(this, e, t, n);case "ucs2":case "ucs-2":case "utf16le":case "utf-16le":
              return _(this, e, t, n);default:
              if (a) throw new TypeError("Unknown encoding: " + r);r = ("" + r).toLowerCase(), a = !0;}
        }
      }, r.prototype.toJSON = function () {
        return { type: "Buffer", data: Array.prototype.slice.call(this._arr || this, 0) };
      }, r.prototype.slice = function (e, t) {
        var n = this.length;e = ~~e, t = void 0 === t ? n : ~~t, 0 > e ? (e += n, 0 > e && (e = 0)) : e > n && (e = n), 0 > t ? (t += n, 0 > t && (t = 0)) : t > n && (t = n), e > t && (t = e);var i;if (r.TYPED_ARRAY_SUPPORT) i = r._augment(this.subarray(e, t));else {
          var o = t - e;i = new r(o, void 0);for (var a = 0; o > a; a++) {
            i[a] = this[a + e];
          }
        }return i.length && (i.parent = this.parent || this), i;
      }, r.prototype.readUIntLE = function (e, t, n) {
        e = 0 | e, t = 0 | t, n || A(e, t, this.length);for (var r = this[e], i = 1, o = 0; ++o < t && (i *= 256);) {
          r += this[e + o] * i;
        }return r;
      }, r.prototype.readUIntBE = function (e, t, n) {
        e = 0 | e, t = 0 | t, n || A(e, t, this.length);for (var r = this[e + --t], i = 1; t > 0 && (i *= 256);) {
          r += this[e + --t] * i;
        }return r;
      }, r.prototype.readUInt8 = function (e, t) {
        return t || A(e, 1, this.length), this[e];
      }, r.prototype.readUInt16LE = function (e, t) {
        return t || A(e, 2, this.length), this[e] | this[e + 1] << 8;
      }, r.prototype.readUInt16BE = function (e, t) {
        return t || A(e, 2, this.length), this[e] << 8 | this[e + 1];
      }, r.prototype.readUInt32LE = function (e, t) {
        return t || A(e, 4, this.length), (this[e] | this[e + 1] << 8 | this[e + 2] << 16) + 16777216 * this[e + 3];
      }, r.prototype.readUInt32BE = function (e, t) {
        return t || A(e, 4, this.length), 16777216 * this[e] + (this[e + 1] << 16 | this[e + 2] << 8 | this[e + 3]);
      }, r.prototype.readIntLE = function (e, t, n) {
        e = 0 | e, t = 0 | t, n || A(e, t, this.length);for (var r = this[e], i = 1, o = 0; ++o < t && (i *= 256);) {
          r += this[e + o] * i;
        }return i *= 128, r >= i && (r -= Math.pow(2, 8 * t)), r;
      }, r.prototype.readIntBE = function (e, t, n) {
        e = 0 | e, t = 0 | t, n || A(e, t, this.length);for (var r = t, i = 1, o = this[e + --r]; r > 0 && (i *= 256);) {
          o += this[e + --r] * i;
        }return i *= 128, o >= i && (o -= Math.pow(2, 8 * t)), o;
      }, r.prototype.readInt8 = function (e, t) {
        return t || A(e, 1, this.length), 128 & this[e] ? -1 * (255 - this[e] + 1) : this[e];
      }, r.prototype.readInt16LE = function (e, t) {
        t || A(e, 2, this.length);var n = this[e] | this[e + 1] << 8;return 32768 & n ? 4294901760 | n : n;
      }, r.prototype.readInt16BE = function (e, t) {
        t || A(e, 2, this.length);var n = this[e + 1] | this[e] << 8;return 32768 & n ? 4294901760 | n : n;
      }, r.prototype.readInt32LE = function (e, t) {
        return t || A(e, 4, this.length), this[e] | this[e + 1] << 8 | this[e + 2] << 16 | this[e + 3] << 24;
      }, r.prototype.readInt32BE = function (e, t) {
        return t || A(e, 4, this.length), this[e] << 24 | this[e + 1] << 16 | this[e + 2] << 8 | this[e + 3];
      }, r.prototype.readFloatLE = function (e, t) {
        return t || A(e, 4, this.length), K.read(this, e, !0, 23, 4);
      }, r.prototype.readFloatBE = function (e, t) {
        return t || A(e, 4, this.length), K.read(this, e, !1, 23, 4);
      }, r.prototype.readDoubleLE = function (e, t) {
        return t || A(e, 8, this.length), K.read(this, e, !0, 52, 8);
      }, r.prototype.readDoubleBE = function (e, t) {
        return t || A(e, 8, this.length), K.read(this, e, !1, 52, 8);
      }, r.prototype.writeUIntLE = function (e, t, n, r) {
        e = +e, t = 0 | t, n = 0 | n, r || I(this, e, t, n, Math.pow(2, 8 * n), 0);var i = 1,
            o = 0;for (this[t] = 255 & e; ++o < n && (i *= 256);) {
          this[t + o] = e / i & 255;
        }return t + n;
      }, r.prototype.writeUIntBE = function (e, t, n, r) {
        e = +e, t = 0 | t, n = 0 | n, r || I(this, e, t, n, Math.pow(2, 8 * n), 0);var i = n - 1,
            o = 1;for (this[t + i] = 255 & e; --i >= 0 && (o *= 256);) {
          this[t + i] = e / o & 255;
        }return t + n;
      }, r.prototype.writeUInt8 = function (e, t, n) {
        return e = +e, t = 0 | t, n || I(this, e, t, 1, 255, 0), r.TYPED_ARRAY_SUPPORT || (e = Math.floor(e)), this[t] = e, t + 1;
      }, r.prototype.writeUInt16LE = function (e, t, n) {
        return e = +e, t = 0 | t, n || I(this, e, t, 2, 65535, 0), r.TYPED_ARRAY_SUPPORT ? (this[t] = e, this[t + 1] = e >>> 8) : R(this, e, t, !0), t + 2;
      }, r.prototype.writeUInt16BE = function (e, t, n) {
        return e = +e, t = 0 | t, n || I(this, e, t, 2, 65535, 0), r.TYPED_ARRAY_SUPPORT ? (this[t] = e >>> 8, this[t + 1] = e) : R(this, e, t, !1), t + 2;
      }, r.prototype.writeUInt32LE = function (e, t, n) {
        return e = +e, t = 0 | t, n || I(this, e, t, 4, 4294967295, 0), r.TYPED_ARRAY_SUPPORT ? (this[t + 3] = e >>> 24, this[t + 2] = e >>> 16, this[t + 1] = e >>> 8, this[t] = e) : O(this, e, t, !0), t + 4;
      }, r.prototype.writeUInt32BE = function (e, t, n) {
        return e = +e, t = 0 | t, n || I(this, e, t, 4, 4294967295, 0), r.TYPED_ARRAY_SUPPORT ? (this[t] = e >>> 24, this[t + 1] = e >>> 16, this[t + 2] = e >>> 8, this[t + 3] = e) : O(this, e, t, !1), t + 4;
      }, r.prototype.writeIntLE = function (e, t, n, r) {
        if (e = +e, t = 0 | t, !r) {
          var i = Math.pow(2, 8 * n - 1);I(this, e, t, n, i - 1, -i);
        }var o = 0,
            a = 1,
            s = 0 > e ? 1 : 0;for (this[t] = 255 & e; ++o < n && (a *= 256);) {
          this[t + o] = (e / a >> 0) - s & 255;
        }return t + n;
      }, r.prototype.writeIntBE = function (e, t, n, r) {
        if (e = +e, t = 0 | t, !r) {
          var i = Math.pow(2, 8 * n - 1);I(this, e, t, n, i - 1, -i);
        }var o = n - 1,
            a = 1,
            s = 0 > e ? 1 : 0;for (this[t + o] = 255 & e; --o >= 0 && (a *= 256);) {
          this[t + o] = (e / a >> 0) - s & 255;
        }return t + n;
      }, r.prototype.writeInt8 = function (e, t, n) {
        return e = +e, t = 0 | t, n || I(this, e, t, 1, 127, -128), r.TYPED_ARRAY_SUPPORT || (e = Math.floor(e)), 0 > e && (e = 255 + e + 1), this[t] = e, t + 1;
      }, r.prototype.writeInt16LE = function (e, t, n) {
        return e = +e, t = 0 | t, n || I(this, e, t, 2, 32767, -32768), r.TYPED_ARRAY_SUPPORT ? (this[t] = e, this[t + 1] = e >>> 8) : R(this, e, t, !0), t + 2;
      }, r.prototype.writeInt16BE = function (e, t, n) {
        return e = +e, t = 0 | t, n || I(this, e, t, 2, 32767, -32768), r.TYPED_ARRAY_SUPPORT ? (this[t] = e >>> 8, this[t + 1] = e) : R(this, e, t, !1), t + 2;
      }, r.prototype.writeInt32LE = function (e, t, n) {
        return e = +e, t = 0 | t, n || I(this, e, t, 4, 2147483647, -2147483648), r.TYPED_ARRAY_SUPPORT ? (this[t] = e, this[t + 1] = e >>> 8, this[t + 2] = e >>> 16, this[t + 3] = e >>> 24) : O(this, e, t, !0), t + 4;
      }, r.prototype.writeInt32BE = function (e, t, n) {
        return e = +e, t = 0 | t, n || I(this, e, t, 4, 2147483647, -2147483648), 0 > e && (e = 4294967295 + e + 1), r.TYPED_ARRAY_SUPPORT ? (this[t] = e >>> 24, this[t + 1] = e >>> 16, this[t + 2] = e >>> 8, this[t + 3] = e) : O(this, e, t, !1), t + 4;
      }, r.prototype.writeFloatLE = function (e, t, n) {
        return B(this, e, t, !0, n);
      }, r.prototype.writeFloatBE = function (e, t, n) {
        return B(this, e, t, !1, n);
      }, r.prototype.writeDoubleLE = function (e, t, n) {
        return C(this, e, t, !0, n);
      }, r.prototype.writeDoubleBE = function (e, t, n) {
        return C(this, e, t, !1, n);
      }, r.prototype.copy = function (e, t, n, i) {
        if (n || (n = 0), i || 0 === i || (i = this.length), t >= e.length && (t = e.length), t || (t = 0), i > 0 && n > i && (i = n), i === n) return 0;if (0 === e.length || 0 === this.length) return 0;if (0 > t) throw new RangeError("targetStart out of bounds");if (0 > n || n >= this.length) throw new RangeError("sourceStart out of bounds");if (0 > i) throw new RangeError("sourceEnd out of bounds");i > this.length && (i = this.length), e.length - t < i - n && (i = e.length - t + n);var o = i - n;if (1e3 > o || !r.TYPED_ARRAY_SUPPORT) for (var a = 0; o > a; a++) {
          e[a + t] = this[a + n];
        } else e._set(this.subarray(n, n + o), t);return o;
      }, r.prototype.fill = function (e, t, n) {
        if (e || (e = 0), t || (t = 0), n || (n = this.length), t > n) throw new RangeError("end < start");if (n !== t && 0 !== this.length) {
          if (0 > t || t >= this.length) throw new RangeError("start out of bounds");if (0 > n || n > this.length) throw new RangeError("end out of bounds");var r;if ("number" == typeof e) for (r = t; n > r; r++) {
            this[r] = e;
          } else {
            var i = U(e.toString()),
                o = i.length;for (r = t; n > r; r++) {
              this[r] = i[r % o];
            }
          }return this;
        }
      }, r.prototype.toArrayBuffer = function () {
        if ("undefined" != typeof Uint8Array) {
          if (r.TYPED_ARRAY_SUPPORT) return new r(this).buffer;for (var e = new Uint8Array(this.length), t = 0, n = e.length; n > t; t += 1) {
            e[t] = this[t];
          }return e.buffer;
        }throw new TypeError("Buffer.toArrayBuffer not supported in this browser");
      };var V = r.prototype;r._augment = function (e) {
        return e.constructor = r, e._isBuffer = !0, e._set = e.set, e.get = V.get, e.set = V.set, e.write = V.write, e.toString = V.toString, e.toLocaleString = V.toString, e.toJSON = V.toJSON, e.equals = V.equals, e.compare = V.compare, e.indexOf = V.indexOf, e.copy = V.copy, e.slice = V.slice, e.readUIntLE = V.readUIntLE, e.readUIntBE = V.readUIntBE, e.readUInt8 = V.readUInt8, e.readUInt16LE = V.readUInt16LE, e.readUInt16BE = V.readUInt16BE, e.readUInt32LE = V.readUInt32LE, e.readUInt32BE = V.readUInt32BE, e.readIntLE = V.readIntLE, e.readIntBE = V.readIntBE, e.readInt8 = V.readInt8, e.readInt16LE = V.readInt16LE, e.readInt16BE = V.readInt16BE, e.readInt32LE = V.readInt32LE, e.readInt32BE = V.readInt32BE, e.readFloatLE = V.readFloatLE, e.readFloatBE = V.readFloatBE, e.readDoubleLE = V.readDoubleLE, e.readDoubleBE = V.readDoubleBE, e.writeUInt8 = V.writeUInt8, e.writeUIntLE = V.writeUIntLE, e.writeUIntBE = V.writeUIntBE, e.writeUInt16LE = V.writeUInt16LE, e.writeUInt16BE = V.writeUInt16BE, e.writeUInt32LE = V.writeUInt32LE, e.writeUInt32BE = V.writeUInt32BE, e.writeIntLE = V.writeIntLE, e.writeIntBE = V.writeIntBE, e.writeInt8 = V.writeInt8, e.writeInt16LE = V.writeInt16LE, e.writeInt16BE = V.writeInt16BE, e.writeInt32LE = V.writeInt32LE, e.writeInt32BE = V.writeInt32BE, e.writeFloatLE = V.writeFloatLE, e.writeFloatBE = V.writeFloatBE, e.writeDoubleLE = V.writeDoubleLE, e.writeDoubleBE = V.writeDoubleBE, e.fill = V.fill, e.inspect = V.inspect, e.toArrayBuffer = V.toArrayBuffer, e;
      };var W = /[^+\/0-9A-z\-]/g;
    }, { "base64-js": 180, ieee754: 181, "is-array": 182 }], 180: [function (e, t, n) {
      var r = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";!function (e) {
        "use strict";
        function t(e) {
          var t = e.charCodeAt(0);return t === a || t === d ? 62 : t === s || t === p ? 63 : c > t ? -1 : c + 10 > t ? t - c + 26 + 26 : u + 26 > t ? t - u : f + 26 > t ? t - f + 26 : void 0;
        }function n(e) {
          function n(e) {
            f[d++] = e;
          }var r, i, a, s, c, f;if (e.length % 4 > 0) throw new Error("Invalid string. Length must be a multiple of 4");var u = e.length;c = "=" === e.charAt(u - 2) ? 2 : "=" === e.charAt(u - 1) ? 1 : 0, f = new o(3 * e.length / 4 - c), a = c > 0 ? e.length - 4 : e.length;var d = 0;for (r = 0, i = 0; a > r; r += 4, i += 3) {
            s = t(e.charAt(r)) << 18 | t(e.charAt(r + 1)) << 12 | t(e.charAt(r + 2)) << 6 | t(e.charAt(r + 3)), n((16711680 & s) >> 16), n((65280 & s) >> 8), n(255 & s);
          }return 2 === c ? (s = t(e.charAt(r)) << 2 | t(e.charAt(r + 1)) >> 4, n(255 & s)) : 1 === c && (s = t(e.charAt(r)) << 10 | t(e.charAt(r + 1)) << 4 | t(e.charAt(r + 2)) >> 2, n(s >> 8 & 255), n(255 & s)), f;
        }function i(e) {
          function t(e) {
            return r.charAt(e);
          }function n(e) {
            return t(e >> 18 & 63) + t(e >> 12 & 63) + t(e >> 6 & 63) + t(63 & e);
          }var i,
              o,
              a,
              s = e.length % 3,
              c = "";for (i = 0, a = e.length - s; a > i; i += 3) {
            o = (e[i] << 16) + (e[i + 1] << 8) + e[i + 2], c += n(o);
          }switch (s) {case 1:
              o = e[e.length - 1], c += t(o >> 2), c += t(o << 4 & 63), c += "==";break;case 2:
              o = (e[e.length - 2] << 8) + e[e.length - 1], c += t(o >> 10), c += t(o >> 4 & 63), c += t(o << 2 & 63), c += "=";}return c;
        }var o = "undefined" != typeof Uint8Array ? Uint8Array : Array,
            a = "+".charCodeAt(0),
            s = "/".charCodeAt(0),
            c = "0".charCodeAt(0),
            f = "a".charCodeAt(0),
            u = "A".charCodeAt(0),
            d = "-".charCodeAt(0),
            p = "_".charCodeAt(0);e.toByteArray = n, e.fromByteArray = i;
      }("undefined" == typeof n ? this.base64js = {} : n);
    }, {}], 181: [function (e, t, n) {
      n.read = function (e, t, n, r, i) {
        var o,
            a,
            s = 8 * i - r - 1,
            c = (1 << s) - 1,
            f = c >> 1,
            u = -7,
            d = n ? i - 1 : 0,
            p = n ? -1 : 1,
            h = e[t + d];for (d += p, o = h & (1 << -u) - 1, h >>= -u, u += s; u > 0; o = 256 * o + e[t + d], d += p, u -= 8) {}for (a = o & (1 << -u) - 1, o >>= -u, u += r; u > 0; a = 256 * a + e[t + d], d += p, u -= 8) {}if (0 === o) o = 1 - f;else {
          if (o === c) return a ? NaN : (h ? -1 : 1) * (1 / 0);a += Math.pow(2, r), o -= f;
        }return (h ? -1 : 1) * a * Math.pow(2, o - r);
      }, n.write = function (e, t, n, r, i, o) {
        var a,
            s,
            c,
            f = 8 * o - i - 1,
            u = (1 << f) - 1,
            d = u >> 1,
            p = 23 === i ? Math.pow(2, -24) - Math.pow(2, -77) : 0,
            h = r ? 0 : o - 1,
            l = r ? 1 : -1,
            b = 0 > t || 0 === t && 0 > 1 / t ? 1 : 0;for (t = Math.abs(t), isNaN(t) || t === 1 / 0 ? (s = isNaN(t) ? 1 : 0, a = u) : (a = Math.floor(Math.log(t) / Math.LN2), t * (c = Math.pow(2, -a)) < 1 && (a--, c *= 2), t += a + d >= 1 ? p / c : p * Math.pow(2, 1 - d), t * c >= 2 && (a++, c /= 2), a + d >= u ? (s = 0, a = u) : a + d >= 1 ? (s = (t * c - 1) * Math.pow(2, i), a += d) : (s = t * Math.pow(2, d - 1) * Math.pow(2, i), a = 0)); i >= 8; e[n + h] = 255 & s, h += l, s /= 256, i -= 8) {}for (a = a << i | s, f += i; f > 0; e[n + h] = 255 & a, h += l, a /= 256, f -= 8) {}e[n + h - l] |= 128 * b;
      };
    }, {}], 182: [function (e, t, n) {
      var r = Array.isArray,
          i = Object.prototype.toString;t.exports = r || function (e) {
        return !!e && "[object Array]" == i.call(e);
      };
    }, {}], 183: [function (e, t, n) {
      function r() {
        return "WebkitAppearance" in document.documentElement.style || window.console && (console.firebug || console.exception && console.table) || navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/) && parseInt(RegExp.$1, 10) >= 31;
      }function i() {
        var e = arguments,
            t = this.useColors;if (e[0] = (t ? "%c" : "") + this.namespace + (t ? " %c" : " ") + e[0] + (t ? "%c " : " ") + "+" + n.humanize(this.diff), !t) return e;var r = "color: " + this.color;e = [e[0], r, "color: inherit"].concat(Array.prototype.slice.call(e, 1));var i = 0,
            o = 0;return e[0].replace(/%[a-z%]/g, function (e) {
          "%%" !== e && (i++, "%c" === e && (o = i));
        }), e.splice(o, 0, r), e;
      }function o() {
        return "object" == (typeof console === "undefined" ? "undefined" : _typeof(console)) && console.log && Function.prototype.apply.call(console.log, console, arguments);
      }function a(e) {
        try {
          null == e ? n.storage.removeItem("debug") : n.storage.debug = e;
        } catch (t) {}
      }function s() {
        var e;try {
          e = n.storage.debug;
        } catch (t) {}return e;
      }function c() {
        try {
          return window.localStorage;
        } catch (e) {}
      }n = t.exports = e("./debug"), n.log = o, n.formatArgs = i, n.save = a, n.load = s, n.useColors = r, n.storage = "undefined" != typeof chrome && "undefined" != typeof chrome.storage ? chrome.storage.local : c(), n.colors = ["lightseagreen", "forestgreen", "goldenrod", "dodgerblue", "darkorchid", "crimson"], n.formatters.j = function (e) {
        return JSON.stringify(e);
      }, n.enable(s());
    }, { "./debug": 184 }], 184: [function (e, t, n) {
      function r() {
        return n.colors[u++ % n.colors.length];
      }function i(e) {
        function t() {}function i() {
          var e = i,
              t = +new Date(),
              o = t - (f || t);e.diff = o, e.prev = f, e.curr = t, f = t, null == e.useColors && (e.useColors = n.useColors()), null == e.color && e.useColors && (e.color = r());var a = Array.prototype.slice.call(arguments);a[0] = n.coerce(a[0]), "string" != typeof a[0] && (a = ["%o"].concat(a));var s = 0;a[0] = a[0].replace(/%([a-z%])/g, function (t, r) {
            if ("%%" === t) return t;s++;var i = n.formatters[r];if ("function" == typeof i) {
              var o = a[s];t = i.call(e, o), a.splice(s, 1), s--;
            }return t;
          }), "function" == typeof n.formatArgs && (a = n.formatArgs.apply(e, a));var c = i.log || n.log || console.log.bind(console);c.apply(e, a);
        }t.enabled = !1, i.enabled = !0;var o = n.enabled(e) ? i : t;return o.namespace = e, o;
      }function o(e) {
        n.save(e);for (var t = (e || "").split(/[\s,]+/), r = t.length, i = 0; r > i; i++) {
          t[i] && (e = t[i].replace(/\*/g, ".*?"), "-" === e[0] ? n.skips.push(new RegExp("^" + e.substr(1) + "$")) : n.names.push(new RegExp("^" + e + "$")));
        }
      }function a() {
        n.enable("");
      }function s(e) {
        var t, r;for (t = 0, r = n.skips.length; r > t; t++) {
          if (n.skips[t].test(e)) return !1;
        }for (t = 0, r = n.names.length; r > t; t++) {
          if (n.names[t].test(e)) return !0;
        }return !1;
      }function c(e) {
        return e instanceof Error ? e.stack || e.message : e;
      }n = t.exports = i, n.coerce = c, n.disable = a, n.enable = o, n.enabled = s, n.humanize = e("ms"), n.names = [], n.skips = [], n.formatters = {};var f,
          u = 0;
    }, { ms: 185 }], 185: [function (e, t, n) {
      function r(e) {
        if (e = "" + e, !(e.length > 1e4)) {
          var t = /^((?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|years?|yrs?|y)?$/i.exec(e);if (t) {
            var n = parseFloat(t[1]),
                r = (t[2] || "ms").toLowerCase();switch (r) {case "years":case "year":case "yrs":case "yr":case "y":
                return n * d;case "days":case "day":case "d":
                return n * u;case "hours":case "hour":case "hrs":case "hr":case "h":
                return n * f;case "minutes":case "minute":case "mins":case "min":case "m":
                return n * c;case "seconds":case "second":case "secs":case "sec":case "s":
                return n * s;case "milliseconds":case "millisecond":case "msecs":case "msec":case "ms":
                return n;}
          }
        }
      }function i(e) {
        return e >= u ? Math.round(e / u) + "d" : e >= f ? Math.round(e / f) + "h" : e >= c ? Math.round(e / c) + "m" : e >= s ? Math.round(e / s) + "s" : e + "ms";
      }function o(e) {
        return a(e, u, "day") || a(e, f, "hour") || a(e, c, "minute") || a(e, s, "second") || e + " ms";
      }function a(e, t, n) {
        return t > e ? void 0 : 1.5 * t > e ? Math.floor(e / t) + " " + n : Math.ceil(e / t) + " " + n + "s";
      }var s = 1e3,
          c = 60 * s,
          f = 60 * c,
          u = 24 * f,
          d = 365.25 * u;t.exports = function (e, t) {
        return t = t || {}, "string" == typeof e ? r(e) : t["long"] ? o(e) : i(e);
      };
    }, {}], 186: [function (e, t, n) {
      (function (e) {
        !function (e) {
          "use strict";
          if ("function" == typeof bootstrap) bootstrap("promise", e);else if ("object" == (typeof n === "undefined" ? "undefined" : _typeof(n)) && "object" == (typeof t === "undefined" ? "undefined" : _typeof(t))) t.exports = e();else if ("function" == typeof define && define.amd) define(e);else if ("undefined" != typeof ses) {
            if (!ses.ok()) return;ses.makeQ = e;
          } else {
            if ("undefined" == typeof self) throw new Error("This environment was not anticiapted by Q. Please file a bug.");self.Q = e();
          }
        }(function () {
          "use strict";
          function t(e) {
            return function () {
              return X.apply(e, arguments);
            };
          }function n(e) {
            return e === Object(e);
          }function r(e) {
            return "[object StopIteration]" === ne(e) || e instanceof G;
          }function i(e, t) {
            if (D && t.stack && "object" == (typeof e === "undefined" ? "undefined" : _typeof(e)) && null !== e && e.stack && -1 === e.stack.indexOf(re)) {
              for (var n = [], r = t; r; r = r.source) {
                r.stack && n.unshift(r.stack);
              }n.unshift(e.stack);var i = n.join("\n" + re + "\n");e.stack = o(i);
            }
          }function o(e) {
            for (var t = e.split("\n"), n = [], r = 0; r < t.length; ++r) {
              var i = t[r];c(i) || a(i) || !i || n.push(i);
            }return n.join("\n");
          }function a(e) {
            return -1 !== e.indexOf("(module.js:") || -1 !== e.indexOf("(node.js:");
          }function s(e) {
            var t = /at .+ \((.+):(\d+):(?:\d+)\)$/.exec(e);if (t) return [t[1], Number(t[2])];var n = /at ([^ ]+):(\d+):(?:\d+)$/.exec(e);if (n) return [n[1], Number(n[2])];var r = /.*@(.+):(\d+)$/.exec(e);return r ? [r[1], Number(r[2])] : void 0;
          }function c(e) {
            var t = s(e);if (!t) return !1;var n = t[0],
                r = t[1];return n === H && r >= K && se >= r;
          }function f() {
            if (D) try {
              throw new Error();
            } catch (e) {
              var t = e.stack.split("\n"),
                  n = t[0].indexOf("@") > 0 ? t[1] : t[2],
                  r = s(n);if (!r) return;return H = r[0], r[1];
            }
          }function u(e, t, n) {
            return function () {
              return "undefined" != typeof console && "function" == typeof console.warn && console.warn(t + " is deprecated, use " + n + " instead.", new Error("").stack), e.apply(e, arguments);
            };
          }function d(e) {
            return e instanceof b ? e : y(e) ? A(e) : j(e);
          }function p() {
            function e(e) {
              t = e, o.source = e, W(n, function (t, n) {
                d.nextTick(function () {
                  e.promiseDispatch.apply(e, n);
                });
              }, void 0), n = void 0, r = void 0;
            }var t,
                n = [],
                r = [],
                i = Z(p.prototype),
                o = Z(b.prototype);if (o.promiseDispatch = function (e, i, o) {
              var a = V(arguments);n ? (n.push(a), "when" === i && o[1] && r.push(o[1])) : d.nextTick(function () {
                t.promiseDispatch.apply(t, a);
              });
            }, o.valueOf = function () {
              if (n) return o;var e = v(t);return g(e) && (t = e), e;
            }, o.inspect = function () {
              return t ? t.inspect() : { state: "pending" };
            }, d.longStackSupport && D) try {
              throw new Error();
            } catch (a) {
              o.stack = a.stack.substring(a.stack.indexOf("\n") + 1);
            }return i.promise = o, i.resolve = function (n) {
              t || e(d(n));
            }, i.fulfill = function (n) {
              t || e(j(n));
            }, i.reject = function (n) {
              t || e(T(n));
            }, i.notify = function (e) {
              t || W(r, function (t, n) {
                d.nextTick(function () {
                  n(e);
                });
              }, void 0);
            }, i;
          }function h(e) {
            if ("function" != typeof e) throw new TypeError("resolver must be a function.");var t = p();try {
              e(t.resolve, t.reject, t.notify);
            } catch (n) {
              t.reject(n);
            }return t.promise;
          }function l(e) {
            return h(function (t, n) {
              for (var r = 0, i = e.length; i > r; r++) {
                d(e[r]).then(t, n);
              }
            });
          }function b(e, t, n) {
            void 0 === t && (t = function t(e) {
              return T(new Error("Promise does not support operation: " + e));
            }), void 0 === n && (n = function n() {
              return { state: "unknown" };
            });var r = Z(b.prototype);if (r.promiseDispatch = function (n, i, o) {
              var a;try {
                a = e[i] ? e[i].apply(r, o) : t.call(r, i, o);
              } catch (s) {
                a = T(s);
              }n && n(a);
            }, r.inspect = n, n) {
              var i = n();"rejected" === i.state && (r.exception = i.reason), r.valueOf = function () {
                var e = n();return "pending" === e.state || "rejected" === e.state ? r : e.value;
              };
            }return r;
          }function m(e, t, n, r) {
            return d(e).then(t, n, r);
          }function v(e) {
            if (g(e)) {
              var t = e.inspect();if ("fulfilled" === t.state) return t.value;
            }return e;
          }function g(e) {
            return e instanceof b;
          }function y(e) {
            return n(e) && "function" == typeof e.then;
          }function w(e) {
            return g(e) && "pending" === e.inspect().state;
          }function _(e) {
            return !g(e) || "fulfilled" === e.inspect().state;
          }function x(e) {
            return g(e) && "rejected" === e.inspect().state;
          }function E() {
            ie.length = 0, oe.length = 0, ae || (ae = !0);
          }function S(e, t) {
            ae && (oe.push(e), t && "undefined" != typeof t.stack ? ie.push(t.stack) : ie.push("(no stack) " + t));
          }function k(e) {
            if (ae) {
              var t = $(oe, e);-1 !== t && (oe.splice(t, 1), ie.splice(t, 1));
            }
          }function T(e) {
            var t = b({ when: function when(t) {
                return t && k(this), t ? t(e) : this;
              } }, function () {
              return this;
            }, function () {
              return { state: "rejected", reason: e };
            });return S(t, e), t;
          }function j(e) {
            return b({ when: function when() {
                return e;
              }, get: function get(t) {
                return e[t];
              }, set: function set(t, n) {
                e[t] = n;
              }, "delete": function _delete(t) {
                delete e[t];
              }, post: function post(t, n) {
                return null === t || void 0 === t ? e.apply(void 0, n) : e[t].apply(e, n);
              }, apply: function apply(t, n) {
                return e.apply(t, n);
              }, keys: function keys() {
                return te(e);
              } }, void 0, function () {
              return { state: "fulfilled", value: e };
            });
          }function A(e) {
            var t = p();return d.nextTick(function () {
              try {
                e.then(t.resolve, t.reject, t.notify);
              } catch (n) {
                t.reject(n);
              }
            }), t.promise;
          }function I(e) {
            return b({ isDef: function isDef() {} }, function (t, n) {
              return q(e, t, n);
            }, function () {
              return d(e).inspect();
            });
          }function R(e, t, n) {
            return d(e).spread(t, n);
          }function O(e) {
            return function () {
              function t(e, t) {
                var a;if ("undefined" == typeof StopIteration) {
                  try {
                    a = n[e](t);
                  } catch (s) {
                    return T(s);
                  }return a.done ? d(a.value) : m(a.value, i, o);
                }try {
                  a = n[e](t);
                } catch (s) {
                  return r(s) ? d(s.value) : T(s);
                }return m(a, i, o);
              }var n = e.apply(this, arguments),
                  i = t.bind(t, "next"),
                  o = t.bind(t, "throw");return i();
            };
          }function N(e) {
            d.done(d.async(e)());
          }function B(e) {
            throw new G(e);
          }function C(e) {
            return function () {
              return R([this, P(arguments)], function (t, n) {
                return e.apply(t, n);
              });
            };
          }function q(e, t, n) {
            return d(e).dispatch(t, n);
          }function P(e) {
            return m(e, function (e) {
              var t = 0,
                  n = p();return W(e, function (r, i, o) {
                var a;g(i) && "fulfilled" === (a = i.inspect()).state ? e[o] = a.value : (++t, m(i, function (r) {
                  e[o] = r, 0 === --t && n.resolve(e);
                }, n.reject, function (e) {
                  n.notify({ index: o, value: e });
                }));
              }, void 0), 0 === t && n.resolve(e), n.promise;
            });
          }function M(e) {
            return m(e, function (e) {
              return e = Q(e, d), m(P(Q(e, function (e) {
                return m(e, J, J);
              })), function () {
                return e;
              });
            });
          }function U(e) {
            return d(e).allSettled();
          }function z(e, t) {
            return d(e).then(void 0, void 0, t);
          }function L(e, t) {
            return d(e).nodeify(t);
          }var D = !1;try {
            throw new Error();
          } catch (F) {
            D = !!F.stack;
          }var H,
              G,
              K = f(),
              J = function J() {},
              Y = function () {
            function t() {
              for (; n.next;) {
                n = n.next;var e = n.task;n.task = void 0;var r = n.domain;r && (n.domain = void 0, r.enter());try {
                  e();
                } catch (o) {
                  if (a) throw r && r.exit(), setTimeout(t, 0), r && r.enter(), o;setTimeout(function () {
                    throw o;
                  }, 0);
                }r && r.exit();
              }i = !1;
            }var n = { task: void 0, next: null },
                r = n,
                i = !1,
                o = void 0,
                a = !1;if (Y = function Y(t) {
              r = r.next = { task: t, domain: a && e.domain, next: null }, i || (i = !0, o());
            }, "undefined" != typeof e && e.nextTick) a = !0, o = function o() {
              e.nextTick(t);
            };else if ("function" == typeof setImmediate) o = "undefined" != typeof window ? setImmediate.bind(window, t) : function () {
              setImmediate(t);
            };else if ("undefined" != typeof MessageChannel) {
              var s = new MessageChannel();s.port1.onmessage = function () {
                o = c, s.port1.onmessage = t, t();
              };var c = function c() {
                s.port2.postMessage(0);
              };o = function o() {
                setTimeout(t, 0), c();
              };
            } else o = function o() {
              setTimeout(t, 0);
            };return Y;
          }(),
              X = Function.call,
              V = t(Array.prototype.slice),
              W = t(Array.prototype.reduce || function (e, t) {
            var n = 0,
                r = this.length;if (1 === arguments.length) for (;;) {
              if (n in this) {
                t = this[n++];break;
              }if (++n >= r) throw new TypeError();
            }for (; r > n; n++) {
              n in this && (t = e(t, this[n], n));
            }return t;
          }),
              $ = t(Array.prototype.indexOf || function (e) {
            for (var t = 0; t < this.length; t++) {
              if (this[t] === e) return t;
            }return -1;
          }),
              Q = t(Array.prototype.map || function (e, t) {
            var n = this,
                r = [];return W(n, function (i, o, a) {
              r.push(e.call(t, o, a, n));
            }, void 0), r;
          }),
              Z = Object.create || function (e) {
            function t() {}return t.prototype = e, new t();
          },
              ee = t(Object.prototype.hasOwnProperty),
              te = Object.keys || function (e) {
            var t = [];for (var n in e) {
              ee(e, n) && t.push(n);
            }return t;
          },
              ne = t(Object.prototype.toString);G = "undefined" != typeof ReturnValue ? ReturnValue : function (e) {
            this.value = e;
          };var re = "From previous event:";d.resolve = d, d.nextTick = Y, d.longStackSupport = !1, "object" == (typeof e === "undefined" ? "undefined" : _typeof(e)) && e && e.env && e.env.Q_DEBUG && (d.longStackSupport = !0), d.defer = p, p.prototype.makeNodeResolver = function () {
            var e = this;return function (t, n) {
              t ? e.reject(t) : arguments.length > 2 ? e.resolve(V(arguments, 1)) : e.resolve(n);
            };
          }, d.Promise = h, d.promise = h, h.race = l, h.all = P, h.reject = T, h.resolve = d, d.passByCopy = function (e) {
            return e;
          }, b.prototype.passByCopy = function () {
            return this;
          }, d.join = function (e, t) {
            return d(e).join(t);
          }, b.prototype.join = function (e) {
            return d([this, e]).spread(function (e, t) {
              if (e === t) return e;throw new Error("Can't join: not the same: " + e + " " + t);
            });
          }, d.race = l, b.prototype.race = function () {
            return this.then(d.race);
          }, d.makePromise = b, b.prototype.toString = function () {
            return "[object Promise]";
          }, b.prototype.then = function (e, t, n) {
            function r(t) {
              try {
                return "function" == typeof e ? e(t) : t;
              } catch (n) {
                return T(n);
              }
            }function o(e) {
              if ("function" == typeof t) {
                i(e, s);try {
                  return t(e);
                } catch (n) {
                  return T(n);
                }
              }return T(e);
            }function a(e) {
              return "function" == typeof n ? n(e) : e;
            }var s = this,
                c = p(),
                f = !1;return d.nextTick(function () {
              s.promiseDispatch(function (e) {
                f || (f = !0, c.resolve(r(e)));
              }, "when", [function (e) {
                f || (f = !0, c.resolve(o(e)));
              }]);
            }), s.promiseDispatch(void 0, "when", [void 0, function (e) {
              var t,
                  n = !1;try {
                t = a(e);
              } catch (r) {
                if (n = !0, !d.onerror) throw r;d.onerror(r);
              }n || c.notify(t);
            }]), c.promise;
          }, d.tap = function (e, t) {
            return d(e).tap(t);
          }, b.prototype.tap = function (e) {
            return e = d(e), this.then(function (t) {
              return e.fcall(t).thenResolve(t);
            });
          }, d.when = m, b.prototype.thenResolve = function (e) {
            return this.then(function () {
              return e;
            });
          }, d.thenResolve = function (e, t) {
            return d(e).thenResolve(t);
          }, b.prototype.thenReject = function (e) {
            return this.then(function () {
              throw e;
            });
          }, d.thenReject = function (e, t) {
            return d(e).thenReject(t);
          }, d.nearer = v, d.isPromise = g, d.isPromiseAlike = y, d.isPending = w, b.prototype.isPending = function () {
            return "pending" === this.inspect().state;
          }, d.isFulfilled = _, b.prototype.isFulfilled = function () {
            return "fulfilled" === this.inspect().state;
          }, d.isRejected = x, b.prototype.isRejected = function () {
            return "rejected" === this.inspect().state;
          };var ie = [],
              oe = [],
              ae = !0;d.resetUnhandledRejections = E, d.getUnhandledReasons = function () {
            return ie.slice();
          }, d.stopUnhandledRejectionTracking = function () {
            E(), ae = !1;
          }, E(), d.reject = T, d.fulfill = j, d.master = I, d.spread = R, b.prototype.spread = function (e, t) {
            return this.all().then(function (t) {
              return e.apply(void 0, t);
            }, t);
          }, d.async = O, d.spawn = N, d["return"] = B, d.promised = C, d.dispatch = q, b.prototype.dispatch = function (e, t) {
            var n = this,
                r = p();return d.nextTick(function () {
              n.promiseDispatch(r.resolve, e, t);
            }), r.promise;
          }, d.get = function (e, t) {
            return d(e).dispatch("get", [t]);
          }, b.prototype.get = function (e) {
            return this.dispatch("get", [e]);
          }, d.set = function (e, t, n) {
            return d(e).dispatch("set", [t, n]);
          }, b.prototype.set = function (e, t) {
            return this.dispatch("set", [e, t]);
          }, d.del = d["delete"] = function (e, t) {
            return d(e).dispatch("delete", [t]);
          }, b.prototype.del = b.prototype["delete"] = function (e) {
            return this.dispatch("delete", [e]);
          }, d.mapply = d.post = function (e, t, n) {
            return d(e).dispatch("post", [t, n]);
          }, b.prototype.mapply = b.prototype.post = function (e, t) {
            return this.dispatch("post", [e, t]);
          }, d.send = d.mcall = d.invoke = function (e, t) {
            return d(e).dispatch("post", [t, V(arguments, 2)]);
          }, b.prototype.send = b.prototype.mcall = b.prototype.invoke = function (e) {
            return this.dispatch("post", [e, V(arguments, 1)]);
          }, d.fapply = function (e, t) {
            return d(e).dispatch("apply", [void 0, t]);
          }, b.prototype.fapply = function (e) {
            return this.dispatch("apply", [void 0, e]);
          }, d["try"] = d.fcall = function (e) {
            return d(e).dispatch("apply", [void 0, V(arguments, 1)]);
          }, b.prototype.fcall = function () {
            return this.dispatch("apply", [void 0, V(arguments)]);
          }, d.fbind = function (e) {
            var t = d(e),
                n = V(arguments, 1);return function () {
              return t.dispatch("apply", [this, n.concat(V(arguments))]);
            };
          }, b.prototype.fbind = function () {
            var e = this,
                t = V(arguments);return function () {
              return e.dispatch("apply", [this, t.concat(V(arguments))]);
            };
          }, d.keys = function (e) {
            return d(e).dispatch("keys", []);
          }, b.prototype.keys = function () {
            return this.dispatch("keys", []);
          }, d.all = P, b.prototype.all = function () {
            return P(this);
          }, d.allResolved = u(M, "allResolved", "allSettled"), b.prototype.allResolved = function () {
            return M(this);
          }, d.allSettled = U, b.prototype.allSettled = function () {
            return this.then(function (e) {
              return P(Q(e, function (e) {
                function t() {
                  return e.inspect();
                }return e = d(e), e.then(t, t);
              }));
            });
          }, d.fail = d["catch"] = function (e, t) {
            return d(e).then(void 0, t);
          }, b.prototype.fail = b.prototype["catch"] = function (e) {
            return this.then(void 0, e);
          }, d.progress = z, b.prototype.progress = function (e) {
            return this.then(void 0, void 0, e);
          }, d.fin = d["finally"] = function (e, t) {
            return d(e)["finally"](t);
          }, b.prototype.fin = b.prototype["finally"] = function (e) {
            return e = d(e), this.then(function (t) {
              return e.fcall().then(function () {
                return t;
              });
            }, function (t) {
              return e.fcall().then(function () {
                throw t;
              });
            });
          }, d.done = function (e, t, n, r) {
            return d(e).done(t, n, r);
          }, b.prototype.done = function (t, n, r) {
            var o = function o(e) {
              d.nextTick(function () {
                if (i(e, a), !d.onerror) throw e;d.onerror(e);
              });
            },
                a = t || n || r ? this.then(t, n, r) : this;"object" == (typeof e === "undefined" ? "undefined" : _typeof(e)) && e && e.domain && (o = e.domain.bind(o)), a.then(void 0, o);
          }, d.timeout = function (e, t, n) {
            return d(e).timeout(t, n);
          }, b.prototype.timeout = function (e, t) {
            var n = p(),
                r = setTimeout(function () {
              t && "string" != typeof t || (t = new Error(t || "Timed out after " + e + " ms"), t.code = "ETIMEDOUT"), n.reject(t);
            }, e);return this.then(function (e) {
              clearTimeout(r), n.resolve(e);
            }, function (e) {
              clearTimeout(r), n.reject(e);
            }, n.notify), n.promise;
          }, d.delay = function (e, t) {
            return void 0 === t && (t = e, e = void 0), d(e).delay(t);
          }, b.prototype.delay = function (e) {
            return this.then(function (t) {
              var n = p();return setTimeout(function () {
                n.resolve(t);
              }, e), n.promise;
            });
          }, d.nfapply = function (e, t) {
            return d(e).nfapply(t);
          }, b.prototype.nfapply = function (e) {
            var t = p(),
                n = V(e);return n.push(t.makeNodeResolver()), this.fapply(n).fail(t.reject), t.promise;
          }, d.nfcall = function (e) {
            var t = V(arguments, 1);return d(e).nfapply(t);
          }, b.prototype.nfcall = function () {
            var e = V(arguments),
                t = p();return e.push(t.makeNodeResolver()), this.fapply(e).fail(t.reject), t.promise;
          }, d.nfbind = d.denodeify = function (e) {
            var t = V(arguments, 1);return function () {
              var n = t.concat(V(arguments)),
                  r = p();
              return n.push(r.makeNodeResolver()), d(e).fapply(n).fail(r.reject), r.promise;
            };
          }, b.prototype.nfbind = b.prototype.denodeify = function () {
            var e = V(arguments);return e.unshift(this), d.denodeify.apply(void 0, e);
          }, d.nbind = function (e, t) {
            var n = V(arguments, 2);return function () {
              function r() {
                return e.apply(t, arguments);
              }var i = n.concat(V(arguments)),
                  o = p();return i.push(o.makeNodeResolver()), d(r).fapply(i).fail(o.reject), o.promise;
            };
          }, b.prototype.nbind = function () {
            var e = V(arguments, 0);return e.unshift(this), d.nbind.apply(void 0, e);
          }, d.nmapply = d.npost = function (e, t, n) {
            return d(e).npost(t, n);
          }, b.prototype.nmapply = b.prototype.npost = function (e, t) {
            var n = V(t || []),
                r = p();return n.push(r.makeNodeResolver()), this.dispatch("post", [e, n]).fail(r.reject), r.promise;
          }, d.nsend = d.nmcall = d.ninvoke = function (e, t) {
            var n = V(arguments, 2),
                r = p();return n.push(r.makeNodeResolver()), d(e).dispatch("post", [t, n]).fail(r.reject), r.promise;
          }, b.prototype.nsend = b.prototype.nmcall = b.prototype.ninvoke = function (e) {
            var t = V(arguments, 1),
                n = p();return t.push(n.makeNodeResolver()), this.dispatch("post", [e, t]).fail(n.reject), n.promise;
          }, d.nodeify = L, b.prototype.nodeify = function (e) {
            return e ? void this.then(function (t) {
              d.nextTick(function () {
                e(null, t);
              });
            }, function (t) {
              d.nextTick(function () {
                e(t);
              });
            }) : this;
          };var se = f();return d;
        });
      }).call(this, e("_process"));
    }, { _process: 156 }], 187: [function (e, t, n) {
      (function () {
        var e = this,
            r = e._,
            i = Array.prototype,
            o = Object.prototype,
            a = Function.prototype,
            s = i.push,
            c = i.slice,
            f = i.concat,
            u = o.toString,
            d = o.hasOwnProperty,
            p = Array.isArray,
            h = Object.keys,
            l = a.bind,
            b = function b(e) {
          return e instanceof b ? e : this instanceof b ? void (this._wrapped = e) : new b(e);
        };"undefined" != typeof n ? ("undefined" != typeof t && t.exports && (n = t.exports = b), n._ = b) : e._ = b, b.VERSION = "1.7.0";var m = function m(e, t, n) {
          if (void 0 === t) return e;switch (null == n ? 3 : n) {case 1:
              return function (n) {
                return e.call(t, n);
              };case 2:
              return function (n, r) {
                return e.call(t, n, r);
              };case 3:
              return function (n, r, i) {
                return e.call(t, n, r, i);
              };case 4:
              return function (n, r, i, o) {
                return e.call(t, n, r, i, o);
              };}return function () {
            return e.apply(t, arguments);
          };
        };b.iteratee = function (e, t, n) {
          return null == e ? b.identity : b.isFunction(e) ? m(e, t, n) : b.isObject(e) ? b.matches(e) : b.property(e);
        }, b.each = b.forEach = function (e, t, n) {
          if (null == e) return e;t = m(t, n);var r,
              i = e.length;if (i === +i) for (r = 0; i > r; r++) {
            t(e[r], r, e);
          } else {
            var o = b.keys(e);for (r = 0, i = o.length; i > r; r++) {
              t(e[o[r]], o[r], e);
            }
          }return e;
        }, b.map = b.collect = function (e, t, n) {
          if (null == e) return [];t = b.iteratee(t, n);for (var r, i = e.length !== +e.length && b.keys(e), o = (i || e).length, a = Array(o), s = 0; o > s; s++) {
            r = i ? i[s] : s, a[s] = t(e[r], r, e);
          }return a;
        };var v = "Reduce of empty array with no initial value";b.reduce = b.foldl = b.inject = function (e, t, n, r) {
          null == e && (e = []), t = m(t, r, 4);var i,
              o = e.length !== +e.length && b.keys(e),
              a = (o || e).length,
              s = 0;if (arguments.length < 3) {
            if (!a) throw new TypeError(v);n = e[o ? o[s++] : s++];
          }for (; a > s; s++) {
            i = o ? o[s] : s, n = t(n, e[i], i, e);
          }return n;
        }, b.reduceRight = b.foldr = function (e, t, n, r) {
          null == e && (e = []), t = m(t, r, 4);var i,
              o = e.length !== +e.length && b.keys(e),
              a = (o || e).length;if (arguments.length < 3) {
            if (!a) throw new TypeError(v);n = e[o ? o[--a] : --a];
          }for (; a--;) {
            i = o ? o[a] : a, n = t(n, e[i], i, e);
          }return n;
        }, b.find = b.detect = function (e, t, n) {
          var r;return t = b.iteratee(t, n), b.some(e, function (e, n, i) {
            return t(e, n, i) ? (r = e, !0) : void 0;
          }), r;
        }, b.filter = b.select = function (e, t, n) {
          var r = [];return null == e ? r : (t = b.iteratee(t, n), b.each(e, function (e, n, i) {
            t(e, n, i) && r.push(e);
          }), r);
        }, b.reject = function (e, t, n) {
          return b.filter(e, b.negate(b.iteratee(t)), n);
        }, b.every = b.all = function (e, t, n) {
          if (null == e) return !0;t = b.iteratee(t, n);var r,
              i,
              o = e.length !== +e.length && b.keys(e),
              a = (o || e).length;for (r = 0; a > r; r++) {
            if (i = o ? o[r] : r, !t(e[i], i, e)) return !1;
          }return !0;
        }, b.some = b.any = function (e, t, n) {
          if (null == e) return !1;t = b.iteratee(t, n);var r,
              i,
              o = e.length !== +e.length && b.keys(e),
              a = (o || e).length;for (r = 0; a > r; r++) {
            if (i = o ? o[r] : r, t(e[i], i, e)) return !0;
          }return !1;
        }, b.contains = b.include = function (e, t) {
          return null == e ? !1 : (e.length !== +e.length && (e = b.values(e)), b.indexOf(e, t) >= 0);
        }, b.invoke = function (e, t) {
          var n = c.call(arguments, 2),
              r = b.isFunction(t);return b.map(e, function (e) {
            return (r ? t : e[t]).apply(e, n);
          });
        }, b.pluck = function (e, t) {
          return b.map(e, b.property(t));
        }, b.where = function (e, t) {
          return b.filter(e, b.matches(t));
        }, b.findWhere = function (e, t) {
          return b.find(e, b.matches(t));
        }, b.max = function (e, t, n) {
          var r,
              i,
              o = -(1 / 0),
              a = -(1 / 0);if (null == t && null != e) {
            e = e.length === +e.length ? e : b.values(e);for (var s = 0, c = e.length; c > s; s++) {
              r = e[s], r > o && (o = r);
            }
          } else t = b.iteratee(t, n), b.each(e, function (e, n, r) {
            i = t(e, n, r), (i > a || i === -(1 / 0) && o === -(1 / 0)) && (o = e, a = i);
          });return o;
        }, b.min = function (e, t, n) {
          var r,
              i,
              o = 1 / 0,
              a = 1 / 0;if (null == t && null != e) {
            e = e.length === +e.length ? e : b.values(e);for (var s = 0, c = e.length; c > s; s++) {
              r = e[s], o > r && (o = r);
            }
          } else t = b.iteratee(t, n), b.each(e, function (e, n, r) {
            i = t(e, n, r), (a > i || i === 1 / 0 && o === 1 / 0) && (o = e, a = i);
          });return o;
        }, b.shuffle = function (e) {
          for (var t, n = e && e.length === +e.length ? e : b.values(e), r = n.length, i = Array(r), o = 0; r > o; o++) {
            t = b.random(0, o), t !== o && (i[o] = i[t]), i[t] = n[o];
          }return i;
        }, b.sample = function (e, t, n) {
          return null == t || n ? (e.length !== +e.length && (e = b.values(e)), e[b.random(e.length - 1)]) : b.shuffle(e).slice(0, Math.max(0, t));
        }, b.sortBy = function (e, t, n) {
          return t = b.iteratee(t, n), b.pluck(b.map(e, function (e, n, r) {
            return { value: e, index: n, criteria: t(e, n, r) };
          }).sort(function (e, t) {
            var n = e.criteria,
                r = t.criteria;if (n !== r) {
              if (n > r || void 0 === n) return 1;if (r > n || void 0 === r) return -1;
            }return e.index - t.index;
          }), "value");
        };var g = function g(e) {
          return function (t, n, r) {
            var i = {};return n = b.iteratee(n, r), b.each(t, function (r, o) {
              var a = n(r, o, t);e(i, r, a);
            }), i;
          };
        };b.groupBy = g(function (e, t, n) {
          b.has(e, n) ? e[n].push(t) : e[n] = [t];
        }), b.indexBy = g(function (e, t, n) {
          e[n] = t;
        }), b.countBy = g(function (e, t, n) {
          b.has(e, n) ? e[n]++ : e[n] = 1;
        }), b.sortedIndex = function (e, t, n, r) {
          n = b.iteratee(n, r, 1);for (var i = n(t), o = 0, a = e.length; a > o;) {
            var s = o + a >>> 1;n(e[s]) < i ? o = s + 1 : a = s;
          }return o;
        }, b.toArray = function (e) {
          return e ? b.isArray(e) ? c.call(e) : e.length === +e.length ? b.map(e, b.identity) : b.values(e) : [];
        }, b.size = function (e) {
          return null == e ? 0 : e.length === +e.length ? e.length : b.keys(e).length;
        }, b.partition = function (e, t, n) {
          t = b.iteratee(t, n);var r = [],
              i = [];return b.each(e, function (e, n, o) {
            (t(e, n, o) ? r : i).push(e);
          }), [r, i];
        }, b.first = b.head = b.take = function (e, t, n) {
          return null != e ? null == t || n ? e[0] : 0 > t ? [] : c.call(e, 0, t) : void 0;
        }, b.initial = function (e, t, n) {
          return c.call(e, 0, Math.max(0, e.length - (null == t || n ? 1 : t)));
        }, b.last = function (e, t, n) {
          return null != e ? null == t || n ? e[e.length - 1] : c.call(e, Math.max(e.length - t, 0)) : void 0;
        }, b.rest = b.tail = b.drop = function (e, t, n) {
          return c.call(e, null == t || n ? 1 : t);
        }, b.compact = function (e) {
          return b.filter(e, b.identity);
        };var y = function y(e, t, n, r) {
          if (t && b.every(e, b.isArray)) return f.apply(r, e);for (var i = 0, o = e.length; o > i; i++) {
            var a = e[i];b.isArray(a) || b.isArguments(a) ? t ? s.apply(r, a) : y(a, t, n, r) : n || r.push(a);
          }return r;
        };b.flatten = function (e, t) {
          return y(e, t, !1, []);
        }, b.without = function (e) {
          return b.difference(e, c.call(arguments, 1));
        }, b.uniq = b.unique = function (e, t, n, r) {
          if (null == e) return [];b.isBoolean(t) || (r = n, n = t, t = !1), null != n && (n = b.iteratee(n, r));for (var i = [], o = [], a = 0, s = e.length; s > a; a++) {
            var c = e[a];if (t) a && o === c || i.push(c), o = c;else if (n) {
              var f = n(c, a, e);b.indexOf(o, f) < 0 && (o.push(f), i.push(c));
            } else b.indexOf(i, c) < 0 && i.push(c);
          }return i;
        }, b.union = function () {
          return b.uniq(y(arguments, !0, !0, []));
        }, b.intersection = function (e) {
          if (null == e) return [];for (var t = [], n = arguments.length, r = 0, i = e.length; i > r; r++) {
            var o = e[r];if (!b.contains(t, o)) {
              for (var a = 1; n > a && b.contains(arguments[a], o); a++) {}a === n && t.push(o);
            }
          }return t;
        }, b.difference = function (e) {
          var t = y(c.call(arguments, 1), !0, !0, []);return b.filter(e, function (e) {
            return !b.contains(t, e);
          });
        }, b.zip = function (e) {
          if (null == e) return [];for (var t = b.max(arguments, "length").length, n = Array(t), r = 0; t > r; r++) {
            n[r] = b.pluck(arguments, r);
          }return n;
        }, b.object = function (e, t) {
          if (null == e) return {};for (var n = {}, r = 0, i = e.length; i > r; r++) {
            t ? n[e[r]] = t[r] : n[e[r][0]] = e[r][1];
          }return n;
        }, b.indexOf = function (e, t, n) {
          if (null == e) return -1;var r = 0,
              i = e.length;if (n) {
            if ("number" != typeof n) return r = b.sortedIndex(e, t), e[r] === t ? r : -1;r = 0 > n ? Math.max(0, i + n) : n;
          }for (; i > r; r++) {
            if (e[r] === t) return r;
          }return -1;
        }, b.lastIndexOf = function (e, t, n) {
          if (null == e) return -1;var r = e.length;for ("number" == typeof n && (r = 0 > n ? r + n + 1 : Math.min(r, n + 1)); --r >= 0;) {
            if (e[r] === t) return r;
          }return -1;
        }, b.range = function (e, t, n) {
          arguments.length <= 1 && (t = e || 0, e = 0), n = n || 1;for (var r = Math.max(Math.ceil((t - e) / n), 0), i = Array(r), o = 0; r > o; o++, e += n) {
            i[o] = e;
          }return i;
        };var w = function w() {};b.bind = function (e, t) {
          var n, _r;if (l && e.bind === l) return l.apply(e, c.call(arguments, 1));if (!b.isFunction(e)) throw new TypeError("Bind must be called on a function");return n = c.call(arguments, 2), _r = function r() {
            if (!(this instanceof _r)) return e.apply(t, n.concat(c.call(arguments)));w.prototype = e.prototype;var i = new w();w.prototype = null;var o = e.apply(i, n.concat(c.call(arguments)));return b.isObject(o) ? o : i;
          };
        }, b.partial = function (e) {
          var t = c.call(arguments, 1);return function () {
            for (var n = 0, r = t.slice(), i = 0, o = r.length; o > i; i++) {
              r[i] === b && (r[i] = arguments[n++]);
            }for (; n < arguments.length;) {
              r.push(arguments[n++]);
            }return e.apply(this, r);
          };
        }, b.bindAll = function (e) {
          var t,
              n,
              r = arguments.length;if (1 >= r) throw new Error("bindAll must be passed function names");for (t = 1; r > t; t++) {
            n = arguments[t], e[n] = b.bind(e[n], e);
          }return e;
        }, b.memoize = function (e, t) {
          var n = function n(r) {
            var i = n.cache,
                o = t ? t.apply(this, arguments) : r;return b.has(i, o) || (i[o] = e.apply(this, arguments)), i[o];
          };return n.cache = {}, n;
        }, b.delay = function (e, t) {
          var n = c.call(arguments, 2);return setTimeout(function () {
            return e.apply(null, n);
          }, t);
        }, b.defer = function (e) {
          return b.delay.apply(b, [e, 1].concat(c.call(arguments, 1)));
        }, b.throttle = function (e, t, n) {
          var r,
              i,
              o,
              a = null,
              s = 0;n || (n = {});var c = function c() {
            s = n.leading === !1 ? 0 : b.now(), a = null, o = e.apply(r, i), a || (r = i = null);
          };return function () {
            var f = b.now();s || n.leading !== !1 || (s = f);var u = t - (f - s);return r = this, i = arguments, 0 >= u || u > t ? (clearTimeout(a), a = null, s = f, o = e.apply(r, i), a || (r = i = null)) : a || n.trailing === !1 || (a = setTimeout(c, u)), o;
          };
        }, b.debounce = function (e, t, n) {
          var r,
              i,
              o,
              a,
              s,
              c = function c() {
            var f = b.now() - a;t > f && f > 0 ? r = setTimeout(c, t - f) : (r = null, n || (s = e.apply(o, i), r || (o = i = null)));
          };return function () {
            o = this, i = arguments, a = b.now();var f = n && !r;return r || (r = setTimeout(c, t)), f && (s = e.apply(o, i), o = i = null), s;
          };
        }, b.wrap = function (e, t) {
          return b.partial(t, e);
        }, b.negate = function (e) {
          return function () {
            return !e.apply(this, arguments);
          };
        }, b.compose = function () {
          var e = arguments,
              t = e.length - 1;return function () {
            for (var n = t, r = e[t].apply(this, arguments); n--;) {
              r = e[n].call(this, r);
            }return r;
          };
        }, b.after = function (e, t) {
          return function () {
            return --e < 1 ? t.apply(this, arguments) : void 0;
          };
        }, b.before = function (e, t) {
          var n;return function () {
            return --e > 0 ? n = t.apply(this, arguments) : t = null, n;
          };
        }, b.once = b.partial(b.before, 2), b.keys = function (e) {
          if (!b.isObject(e)) return [];if (h) return h(e);var t = [];for (var n in e) {
            b.has(e, n) && t.push(n);
          }return t;
        }, b.values = function (e) {
          for (var t = b.keys(e), n = t.length, r = Array(n), i = 0; n > i; i++) {
            r[i] = e[t[i]];
          }return r;
        }, b.pairs = function (e) {
          for (var t = b.keys(e), n = t.length, r = Array(n), i = 0; n > i; i++) {
            r[i] = [t[i], e[t[i]]];
          }return r;
        }, b.invert = function (e) {
          for (var t = {}, n = b.keys(e), r = 0, i = n.length; i > r; r++) {
            t[e[n[r]]] = n[r];
          }return t;
        }, b.functions = b.methods = function (e) {
          var t = [];for (var n in e) {
            b.isFunction(e[n]) && t.push(n);
          }return t.sort();
        }, b.extend = function (e) {
          if (!b.isObject(e)) return e;for (var t, n, r = 1, i = arguments.length; i > r; r++) {
            t = arguments[r];for (n in t) {
              d.call(t, n) && (e[n] = t[n]);
            }
          }return e;
        }, b.pick = function (e, t, n) {
          var r,
              i = {};if (null == e) return i;if (b.isFunction(t)) {
            t = m(t, n);for (r in e) {
              var o = e[r];t(o, r, e) && (i[r] = o);
            }
          } else {
            var a = f.apply([], c.call(arguments, 1));e = new Object(e);for (var s = 0, u = a.length; u > s; s++) {
              r = a[s], r in e && (i[r] = e[r]);
            }
          }return i;
        }, b.omit = function (e, t, n) {
          if (b.isFunction(t)) t = b.negate(t);else {
            var r = b.map(f.apply([], c.call(arguments, 1)), String);t = function t(e, _t) {
              return !b.contains(r, _t);
            };
          }return b.pick(e, t, n);
        }, b.defaults = function (e) {
          if (!b.isObject(e)) return e;for (var t = 1, n = arguments.length; n > t; t++) {
            var r = arguments[t];for (var i in r) {
              void 0 === e[i] && (e[i] = r[i]);
            }
          }return e;
        }, b.clone = function (e) {
          return b.isObject(e) ? b.isArray(e) ? e.slice() : b.extend({}, e) : e;
        }, b.tap = function (e, t) {
          return t(e), e;
        };var _ = function _(e, t, n, r) {
          if (e === t) return 0 !== e || 1 / e === 1 / t;if (null == e || null == t) return e === t;e instanceof b && (e = e._wrapped), t instanceof b && (t = t._wrapped);var i = u.call(e);if (i !== u.call(t)) return !1;switch (i) {case "[object RegExp]":case "[object String]":
              return "" + e == "" + t;case "[object Number]":
              return +e !== +e ? +t !== +t : 0 === +e ? 1 / +e === 1 / t : +e === +t;case "[object Date]":case "[object Boolean]":
              return +e === +t;}if ("object" != (typeof e === "undefined" ? "undefined" : _typeof(e)) || "object" != (typeof t === "undefined" ? "undefined" : _typeof(t))) return !1;for (var o = n.length; o--;) {
            if (n[o] === e) return r[o] === t;
          }var a = e.constructor,
              s = t.constructor;if (a !== s && "constructor" in e && "constructor" in t && !(b.isFunction(a) && a instanceof a && b.isFunction(s) && s instanceof s)) return !1;n.push(e), r.push(t);var c, f;if ("[object Array]" === i) {
            if (c = e.length, f = c === t.length) for (; c-- && (f = _(e[c], t[c], n, r));) {}
          } else {
            var d,
                p = b.keys(e);if (c = p.length, f = b.keys(t).length === c) for (; c-- && (d = p[c], f = b.has(t, d) && _(e[d], t[d], n, r));) {}
          }return n.pop(), r.pop(), f;
        };b.isEqual = function (e, t) {
          return _(e, t, [], []);
        }, b.isEmpty = function (e) {
          if (null == e) return !0;if (b.isArray(e) || b.isString(e) || b.isArguments(e)) return 0 === e.length;for (var t in e) {
            if (b.has(e, t)) return !1;
          }return !0;
        }, b.isElement = function (e) {
          return !(!e || 1 !== e.nodeType);
        }, b.isArray = p || function (e) {
          return "[object Array]" === u.call(e);
        }, b.isObject = function (e) {
          var t = typeof e === "undefined" ? "undefined" : _typeof(e);return "function" === t || "object" === t && !!e;
        }, b.each(["Arguments", "Function", "String", "Number", "Date", "RegExp"], function (e) {
          b["is" + e] = function (t) {
            return u.call(t) === "[object " + e + "]";
          };
        }), b.isArguments(arguments) || (b.isArguments = function (e) {
          return b.has(e, "callee");
        }), "function" != typeof /./ && (b.isFunction = function (e) {
          return "function" == typeof e || !1;
        }), b.isFinite = function (e) {
          return isFinite(e) && !isNaN(parseFloat(e));
        }, b.isNaN = function (e) {
          return b.isNumber(e) && e !== +e;
        }, b.isBoolean = function (e) {
          return e === !0 || e === !1 || "[object Boolean]" === u.call(e);
        }, b.isNull = function (e) {
          return null === e;
        }, b.isUndefined = function (e) {
          return void 0 === e;
        }, b.has = function (e, t) {
          return null != e && d.call(e, t);
        }, b.noConflict = function () {
          return e._ = r, this;
        }, b.identity = function (e) {
          return e;
        }, b.constant = function (e) {
          return function () {
            return e;
          };
        }, b.noop = function () {}, b.property = function (e) {
          return function (t) {
            return t[e];
          };
        }, b.matches = function (e) {
          var t = b.pairs(e),
              n = t.length;return function (e) {
            if (null == e) return !n;e = new Object(e);for (var r = 0; n > r; r++) {
              var i = t[r],
                  o = i[0];if (i[1] !== e[o] || !(o in e)) return !1;
            }return !0;
          };
        }, b.times = function (e, t, n) {
          var r = Array(Math.max(0, e));t = m(t, n, 1);for (var i = 0; e > i; i++) {
            r[i] = t(i);
          }return r;
        }, b.random = function (e, t) {
          return null == t && (t = e, e = 0), e + Math.floor(Math.random() * (t - e + 1));
        }, b.now = Date.now || function () {
          return new Date().getTime();
        };var x = { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#x27;", "`": "&#x60;" },
            E = b.invert(x),
            S = function S(e) {
          var t = function t(_t2) {
            return e[_t2];
          },
              n = "(?:" + b.keys(e).join("|") + ")",
              r = RegExp(n),
              i = RegExp(n, "g");return function (e) {
            return e = null == e ? "" : "" + e, r.test(e) ? e.replace(i, t) : e;
          };
        };b.escape = S(x), b.unescape = S(E), b.result = function (e, t) {
          if (null != e) {
            var n = e[t];return b.isFunction(n) ? e[t]() : n;
          }
        };var k = 0;b.uniqueId = function (e) {
          var t = ++k + "";return e ? e + t : t;
        }, b.templateSettings = { evaluate: /<%([\s\S]+?)%>/g, interpolate: /<%=([\s\S]+?)%>/g, escape: /<%-([\s\S]+?)%>/g };var T = /(.)^/,
            j = { "'": "'", "\\": "\\", "\r": "r", "\n": "n", "\u2028": "u2028", "\u2029": "u2029" },
            A = /\\|'|\r|\n|\u2028|\u2029/g,
            I = function I(e) {
          return "\\" + j[e];
        };b.template = function (e, t, n) {
          !t && n && (t = n), t = b.defaults({}, t, b.templateSettings);var r = RegExp([(t.escape || T).source, (t.interpolate || T).source, (t.evaluate || T).source].join("|") + "|$", "g"),
              i = 0,
              o = "__p+='";e.replace(r, function (t, n, r, a, s) {
            return o += e.slice(i, s).replace(A, I), i = s + t.length, n ? o += "'+\n((__t=(" + n + "))==null?'':_.escape(__t))+\n'" : r ? o += "'+\n((__t=(" + r + "))==null?'':__t)+\n'" : a && (o += "';\n" + a + "\n__p+='"), t;
          }), o += "';\n", t.variable || (o = "with(obj||{}){\n" + o + "}\n"), o = "var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};\n" + o + "return __p;\n";try {
            var a = new Function(t.variable || "obj", "_", o);
          } catch (s) {
            throw s.source = o, s;
          }var c = function c(e) {
            return a.call(this, e, b);
          },
              f = t.variable || "obj";return c.source = "function(" + f + "){\n" + o + "}", c;
        }, b.chain = function (e) {
          var t = b(e);return t._chain = !0, t;
        };var R = function R(e) {
          return this._chain ? b(e).chain() : e;
        };b.mixin = function (e) {
          b.each(b.functions(e), function (t) {
            var n = b[t] = e[t];b.prototype[t] = function () {
              var e = [this._wrapped];return s.apply(e, arguments), R.call(this, n.apply(b, e));
            };
          });
        }, b.mixin(b), b.each(["pop", "push", "reverse", "shift", "sort", "splice", "unshift"], function (e) {
          var t = i[e];b.prototype[e] = function () {
            var n = this._wrapped;return t.apply(n, arguments), "shift" !== e && "splice" !== e || 0 !== n.length || delete n[0], R.call(this, n);
          };
        }), b.each(["concat", "join", "slice"], function (e) {
          var t = i[e];b.prototype[e] = function () {
            return R.call(this, t.apply(this._wrapped, arguments));
          };
        }), b.prototype.value = function () {
          return this._wrapped;
        }, "function" == typeof define && define.amd && define("underscore", [], function () {
          return b;
        });
      }).call(this);
    }, {}], 188: [function (e, t, n) {
      t.exports = { name: "bce-sdk-js", version: "0.2.7", description: "Baidu Cloud Engine JavaScript SDK", main: "index.js", directories: { test: "test" }, scripts: { test: "./test/run-all.sh", fecs: "fecs src", pack: "node_modules/.bin/browserify -s baidubce.sdk index.js -o baidubce-sdk.bundle.js && uglifyjs baidubce-sdk.bundle.js --compress --mangle -o baidubce-sdk.bundle.min.js" }, repository: { type: "git", url: "https://github.com/baidubce/bce-sdk-js.git" }, author: "leeight@gmail.com", license: "MIT", dependencies: { async: "^1.5.2", debug: "^2.2.0", q: "^1.1.2", underscore: "^1.7.0" }, devDependencies: { browserify: "10.2.6", coveralls: "^2.11.8", "expect.js": "^0.3.1", istanbul: "^0.4.2", mocha: "^2.4.5" } };
    }, {}], 189: [function (e, t, n) {
      function r(e, t) {
        this.ak = e, this.sk = t;
      }var i = e("util"),
          o = e("underscore"),
          a = e("debug")("bce-sdk:auth"),
          s = e("./headers"),
          c = e("./strings");r.prototype.generateAuthorization = function (e, t, n, r, o, s, c) {
        var f = o ? new Date(1e3 * o) : new Date(),
            u = i.format("bce-auth-v1/%s/%s/%d", this.ak, f.toISOString().replace(/\.\d+Z$/, "Z"), s || 1800);a("rawSessionKey = %j", u);var d = this.hash(u, this.sk),
            p = this.uriCanonicalization(t),
            h = this.queryStringCanonicalization(n || {}),
            l = this.headersCanonicalization(r || {}, c),
            b = l[0],
            m = l[1];a("canonicalUri = %j", p), a("canonicalQueryString = %j", h), a("canonicalHeaders = %j", b), a("signedHeaders = %j", m);var v = i.format("%s\n%s\n%s\n%s", e, p, h, b);a("rawSignature = %j", v), a("sessionKey = %j", d);var g = this.hash(v, d);return m.length ? i.format("%s/%s/%s", u, m.join(";"), g) : i.format("%s//%s", u, g);
      }, r.prototype.uriCanonicalization = function (e) {
        return e;
      }, r.prototype.queryStringCanonicalization = function (e) {
        var t = [];return Object.keys(e).forEach(function (n) {
          if (n.toLowerCase() !== s.AUTHORIZATION.toLowerCase()) {
            var r = null == e[n] ? "" : e[n];t.push(n + "=" + c.normalize(r));
          }
        }), t.sort(), t.join("&");
      }, r.prototype.headersCanonicalization = function (e, t) {
        t && t.length || (t = [s.HOST, s.CONTENT_MD5, s.CONTENT_LENGTH, s.CONTENT_TYPE]), a("headers = %j, headersToSign = %j", e, t);var n = {};t.forEach(function (e) {
          n[e.toLowerCase()] = !0;
        });var r = [];Object.keys(e).forEach(function (t) {
          var a = e[t];a = o.isString(a) ? c.trim(a) : a, null != a && "" !== a && (t = t.toLowerCase(), (/^x\-bce\-/.test(t) || n[t] === !0) && r.push(i.format("%s:%s", c.normalize(t), c.normalize(a))));
        }), r.sort();var f = [];return r.forEach(function (e) {
          f.push(e.split(":")[0]);
        }), [r.join("\n"), f];
      }, r.prototype.hash = function (t, n) {
        var r = e("crypto"),
            i = r.createHmac("sha256", n);return i.update(t), i.digest("hex");
      }, t.exports = r;
    }, { "./headers": 198, "./strings": 209, crypto: 5, debug: 183, underscore: 187, util: 176 }], 190: [function (e, t, n) {
      function r(e) {
        c.call(this, e, "bcc", !0);
      }function i() {
        throw new Error("unimplemented method");
      }var o = e("util"),
          a = e("underscore"),
          s = e("debug")("bce-sdk:BccClient"),
          c = e("./bce_base_client");o.inherits(r, c), r.prototype.listInstances = function (e) {
        var t = e || {},
            n = a.extend({ maxKeys: 1e3 }, a.pick(t, "maxKeys", "marker"));return this.sendRequest("GET", "/v1/instance", { params: n, config: t.config });
      }, r.prototype.getPackages = function (e) {
        var t = e || {};return this.sendRequest("GET", "/v1/instance/price", { config: t.config });
      }, r.prototype.getImages = function (e) {
        var t = e || {},
            n = a.extend({ maxKeys: 1e3, imageType: "All" }, a.pick(t, "maxKeys", "marker", "imageType"));return this.sendRequest("GET", "/v1/image", { config: t.config, params: n });
      }, r.prototype.createInstance = function (e, t) {
        var n = this;return this.getClientToken().then(function (r) {
          var i = t || {},
              o = r.body.token,
              a = { clientToken: o };return s("createInstance, params = %j, body = %j", a, e), n.sendRequest("POST", "/v1/instance", { config: i.config, params: a, body: JSON.stringify(e) });
        });
      }, r.prototype.getInstance = function (e, t) {
        var n = t || {};return this.sendRequest("GET", "/v1/instance/" + e, { config: n.config });
      }, r.prototype.startInstance = function (e, t) {
        var n = t || {},
            r = { start: "" };return this.sendRequest("PUT", "/v1/instance/" + e, { params: r, config: n.config });
      }, r.prototype.stopInstance = function (e, t) {
        var n = t || {},
            r = { stop: "" };return this.sendRequest("PUT", "/v1/instance/" + e, { params: r, config: n.config });
      }, r.prototype.restartInstance = function (e, t) {
        var n = t || {},
            r = { reboot: "" };return this.sendRequest("PUT", "/v1/instance/" + e, { params: r, config: n.config });
      }, r.prototype.changeInstanceAdminPassword = i, r.prototype.rebuildInstance = i, r.prototype.deleteInstance = function (e, t) {
        var n = t || {};return this.sendRequest("DELETE", "/v1/instance/" + e, { config: n.config });
      }, r.prototype.joinSecurityGroup = i, r.prototype.leaveSecurityGroup = i, r.prototype.getVNCUrl = function (e, t) {
        var n = t || {};return this.sendRequest("GET", "/v1/instance/" + e + "/vnc", { config: n.config });
      }, r.prototype.getClientToken = function (e) {
        return this.sendRequest("POST", "/v1/token/create");
      }, r.prototype._generateClientToken = function () {
        var e = Date.now().toString(16) + (Number.MAX_VALUE * Math.random()).toString(16).substr(0, 8);return "ClientToken:" + e;
      }, t.exports = r;
    }, { "./bce_base_client": 191, debug: 183, underscore: 187, util: 176 }], 191: [function (e, t, n) {
      function r(e, t, n) {
        o.call(this), this.config = s.extend({}, c.DEFAULT_CONFIG, e), this.serviceId = t, this.regionSupported = !!n, this.config.endpoint = this._computeEndpoint(), this._httpAgent = null;
      }var i = e("util"),
          o = e("events").EventEmitter,
          a = e("q"),
          s = e("underscore"),
          c = e("./config"),
          f = e("./auth"),
          u = e("./http_client"),
          d = e("./headers");i.inherits(r, o), r.prototype._computeEndpoint = function () {
        return this.config.endpoint ? this.config.endpoint : this.regionSupported ? i.format("%s://%s.%s.%s", this.config.protocol, this.serviceId, this.config.region, c.DEFAULT_SERVICE_DOMAIN) : i.format("%s://%s.%s", this.config.protocol, this.serviceId, c.DEFAULT_SERVICE_DOMAIN);
      }, r.prototype.createSignature = function (e, t, n, r, i) {
        return a.fcall(function () {
          var o = new f(e.ak, e.sk);return o.generateAuthorization(t, n, r, i);
        });
      }, r.prototype.sendRequest = function (e, t, n) {
        var r = { body: null, headers: {}, params: {}, config: {}, outputStream: null },
            i = s.extend(r, n),
            o = s.extend({}, this.config, i.config);return o.sessionToken && (i.headers[d.SESSION_TOKEN] = o.sessionToken), this.sendHTTPRequest(e, t, i, o);
      }, r.prototype.sendHTTPRequest = function (e, t, n, r) {
        var i = this,
            o = this._httpAgent = new u(r);return s.each(["progress", "error", "abort"], function (e) {
          o.on(e, function (t) {
            i.emit(e, t);
          });
        }), this._httpAgent.sendRequest(e, t, n.body, n.headers, n.params, s.bind(this.createSignature, this), n.outputStream);
      }, t.exports = r;
    }, { "./auth": 189, "./config": 194, "./headers": 198, "./http_client": 200, events: 146, q: 186, underscore: 187, util: 176 }], 192: [function (e, t, n) {
      (function (n) {
        function r(e) {
          d.call(this, e, "bcs", !0);
        }var i = e("crypto"),
            o = e("util"),
            a = e("path"),
            s = e("fs"),
            c = e("underscore"),
            f = e("./headers"),
            u = e("./http_client"),
            d = e("./bce_base_client"),
            p = e("./mime.types"),
            h = 5368709120,
            l = 2048;o.inherits(r, d), r.prototype.listBuckets = function (e) {
          return e = e || {}, this.sendRequest("GET", { config: e.config });
        }, r.prototype.createBucket = function (e, t) {
          return t = t || {}, this.sendRequest("PUT", { bucketName: e, config: t.config });
        }, r.prototype.setBucketAcl = function (e, t, n) {
          n = n || {};var r = {};return r[f.CONTENT_TYPE] = "application/json; charset=UTF-8", this.sendRequest("PUT", { bucketName: e, body: JSON.stringify({ accessControlList: t }), headers: r, params: { acl: "" }, config: n.config });
        }, r.prototype.setBucketCannedAcl = function (e, t, n) {
          n = n || {};var r = {};return r[f.X_BCE_ACL] = t, this.sendRequest("PUT", { bucketName: e, headers: r, params: { acl: "" }, config: n.config });
        }, r.prototype.getBucketAcl = function (e, t) {
          return t = t || {}, this.sendRequest("GET", { bucketName: e, params: { acl: "1" }, config: t.config });
        }, r.prototype.deleteBucket = function (e, t) {
          return t = t || {}, this.sendRequest("DELETE", { bucketName: e, config: t.config });
        }, r.prototype.deleteObject = function (e, t, n) {
          return n = n || {}, this.sendRequest("DELETE", { bucketName: e, key: t, config: n.config });
        }, r.prototype.listObjects = function (e, t) {
          t = t || {};var n = c.extend({}, c.pick(t, "start", "limit"));return this.sendRequest("GET", { bucketName: e, params: n, config: t.config });
        }, r.prototype.getObjectMetadata = function (e, t, n) {
          return n = n || {}, this.sendRequest("HEAD", { bucketName: e, key: t, config: n.config });
        }, r.prototype.putObject = function (e, t, n, r) {
          if (!t) throw new TypeError("key should not be empty.");return r = this._checkOptions(r || {}), this.sendRequest("PUT", { bucketName: e, key: t, body: n, headers: r.headers, config: r.config });
        }, r.prototype.putObjectFromBlob = function (e, t, n, r) {
          var i = {};return i[f.CONTENT_LENGTH] = n.size, r = c.extend(i, r), this.putObject(e, t, n, r);
        }, r.prototype.putObjectFromString = function (t, r, i, o) {
          var a = {};return a[f.CONTENT_LENGTH] = n.byteLength(i), a[f.CONTENT_MD5] = e("./crypto").md5sum(i, null, "hex"), o = c.extend(a, o), this.putObject(t, r, i, o);
        }, r.prototype.putObjectFromFile = function (t, n, r, i) {
          i = i || {};var o = {};o[f.CONTENT_LENGTH] = s.statSync(r).size, o[f.CONTENT_TYPE] = i[f.CONTENT_TYPE] || p.guess(a.extname(r)), i = c.extend(o, i);var u = s.createReadStream(r);if (!c.has(i, f.CONTENT_MD5)) {
            var d = this;return e("./crypto").md5file(r, "hex").then(function (e) {
              return i[f.CONTENT_MD5] = e, d.putObject(t, n, u, i);
            });
          }return this.putObject(t, n, u, i);
        }, r.prototype.createSignature = function (e, t, r, o) {
          var a = "MBO",
              s = ["Method=" + t, "Bucket=" + r, "Object=" + o].join("\n"),
              c = a + "\n" + s + "\n",
              f = i.createHmac("sha1", e.sk);f.update(new n(c, "utf-8"));var u = encodeURIComponent(f.digest("base64")).replace(/%2F/g, "/");return [a, e.ak, u].join(":");
        }, r.prototype.sendRequest = function (t, n) {
          var r = { bucketName: null, key: null, body: null, headers: {}, params: {}, config: {}, outputStream: null },
              i = c.extend(r, n),
              o = c.extend({}, this.config, i.config),
              a = "/";i.bucketName && (a += i.bucketName), i.key && (a += "/" + i.key);var s = this.createSignature(o.credentials, t, i.bucketName ? i.bucketName : "", i.key ? "/" + i.key : "/"),
              f = this,
              d = this._httpAgent = new u(o);return c.each(["progress", "error", "abort"], function (e) {
            d.on(e, function (t) {
              f.emit(e, t);
            });
          }), d.buildQueryString = function (t) {
            var n = e("querystring").stringify(t);return n ? "sign=" + s + "&" + n : "sign=" + s;
          }, d.sendRequest(t, a, i.body, i.headers, i.params, null, i.outputStream);
        }, r.prototype._checkOptions = function (e, t) {
          var n = {};return n.config = e.config || {}, n.headers = this._prepareObjectHeaders(e), n.params = c.pick(e, t || []), n;
        }, r.prototype._prepareObjectHeaders = function (e) {
          var t = [f.CONTENT_LENGTH, f.CONTENT_ENCODING, f.CONTENT_MD5, f.CONTENT_TYPE, f.CONTENT_DISPOSITION, f.ETAG, f.SESSION_TOKEN],
              r = 0,
              i = c.pick(e, function (e, i) {
            return -1 !== t.indexOf(i) ? !0 : /^x\-bce\-meta\-/.test(i) ? (r += n.byteLength(i) + n.byteLength("" + e), !0) : void 0;
          });if (r > l) throw new TypeError("Metadata size should not be greater than " + l + ".");if (c.has(i, f.CONTENT_LENGTH)) {
            var a = i[f.CONTENT_LENGTH];if (0 > a) throw new TypeError("content_length should not be negative.");if (a > h) throw new TypeError("Object length should be less than " + h + ". Use multi-part upload instead.");
          }if (c.has(i, "ETag")) {
            var s = i.ETag;/^"/.test(s) || (i.ETag = o.format('"%s"', s));
          }return c.has(i, f.CONTENT_TYPE) || (i[f.CONTENT_TYPE] = "application/octet-stream"), i;
        }, t.exports = r;
      }).call(this, e("buffer").Buffer);
    }, { "./bce_base_client": 191, "./crypto": 195, "./headers": 198, "./http_client": 200, "./mime.types": 204, buffer: 179, crypto: 5, fs: 3, path: 155, querystring: 160, underscore: 187, util: 176 }], 193: [function (e, t, n) {
      (function (n) {
        function r(e) {
          b.call(this, e, "bos", !0), this._httpAgent = null;
        }var i = e("util"),
            o = e("path"),
            a = e("fs"),
            s = e("querystring"),
            c = e("underscore"),
            f = e("q"),
            u = e("./headers"),
            d = e("./strings"),
            p = e("./auth"),
            h = e("./crypto"),
            l = e("./http_client"),
            b = e("./bce_base_client"),
            m = e("./mime.types"),
            v = e("./wm_stream"),
            g = e("./multipart"),
            y = 5368709120,
            w = 2048,
            _ = 1,
            x = 1e4,
            E = { scale: "s", width: "w", height: "h", quality: "q", format: "f", angle: "a", display: "d", limit: "l", crop: "c", offsetX: "x", offsetY: "y", watermark: "wm", key: "k", gravity: "g", gravityX: "x", gravityY: "y", opacity: "o", text: "t", fontSize: "sz", fontFamily: "ff", fontColor: "fc", fontStyle: "fs" },
            S = "bceimg.com";i.inherits(r, b), r.prototype.generatePresignedUrl = function (t, n, r, a, f, u, h, l) {
          l = c.extend({}, this.config, l), u = u || {};var b = o.normalize(o.join("/v1", d.normalize(t || ""), d.normalize(n || "", !1))).replace(/\\/g, "/");f = f || {}, f.Host = e("url").parse(l.endpoint).host;var m = l.credentials,
              v = new p(m.ak, m.sk),
              g = v.generateAuthorization("GET", b, u, f, r, a, h);return u.authorization = g, i.format("%s%s?%s", l.endpoint, b, s.encode(u));
        }, r.prototype.generateUrl = function (e, t, n, r) {
          var a = o.normalize(o.join("/v1", d.normalize(e || ""), d.normalize(t || "", !1))).replace(/\\/g, "/"),
              s = "";return n && (s = c.isString(n) ? /^@/.test(n) ? n : "@" + n : "@" + c.map(n, function (e) {
            return c.map(e, function (e, t) {
              return [E[t] || t, e].join("_");
            }).join(",");
          }).join("|")), s ? r ? i.format("http://%s/%s%s", r, o.normalize(t), s) : i.format("http://%s.%s/%s%s", o.normalize(e), S, o.normalize(t), s) : i.format("%s%s%s", this.config.endpoint, a, s);
        }, r.prototype.listBuckets = function (e) {
          return e = e || {}, this.sendRequest("GET", { config: e.config });
        }, r.prototype.createBucket = function (e, t) {
          return t = t || {}, this.sendRequest("PUT", { bucketName: e, config: t.config });
        }, r.prototype.listObjects = function (e, t) {
          t = t || {};var n = c.extend({ maxKeys: 1e3 }, c.pick(t, "maxKeys", "prefix", "marker", "delimiter"));return this.sendRequest("GET", { bucketName: e, params: n, config: t.config });
        }, r.prototype.doesBucketExist = function (e, t) {
          return t = t || {}, this.sendRequest("HEAD", { bucketName: e, config: t.config }).then(function () {
            return f(!0);
          }, function (e) {
            return e && 403 === e[u.X_STATUS_CODE] ? f(!0) : e && 404 === e[u.X_STATUS_CODE] ? f(!1) : f.reject(e);
          });
        }, r.prototype.deleteBucket = function (e, t) {
          return t = t || {}, this.sendRequest("DELETE", { bucketName: e, config: t.config });
        }, r.prototype.setBucketCannedAcl = function (e, t, n) {
          n = n || {};var r = {};return r[u.X_BCE_ACL] = t, this.sendRequest("PUT", { bucketName: e, headers: r, params: { acl: "" }, config: n.config });
        }, r.prototype.setBucketAcl = function (e, t, n) {
          n = n || {};var r = {};return r[u.CONTENT_TYPE] = "application/json; charset=UTF-8", this.sendRequest("PUT", { bucketName: e, body: JSON.stringify({ accessControlList: t }), headers: r, params: { acl: "" }, config: n.config });
        }, r.prototype.getBucketAcl = function (e, t) {
          return t = t || {}, this.sendRequest("GET", { bucketName: e, params: { acl: "" }, config: t.config });
        }, r.prototype.getBucketLocation = function (e, t) {
          return t = t || {}, this.sendRequest("GET", { bucketName: e, params: { location: "" }, config: t.config });
        }, r.prototype.deleteMultipleObjects = function (e, t, n) {
          n = n || {};var r = c.map(t, function (e) {
            return { key: e };
          });return this.sendRequest("POST", { bucketName: e, params: { "delete": "" }, body: JSON.stringify({ objects: r }), config: n.config });
        }, r.prototype.deleteObject = function (e, t, n) {
          return n = n || {}, this.sendRequest("DELETE", { bucketName: e, key: t, config: n.config });
        }, r.prototype.putObject = function (e, t, n, r) {
          if (!t) throw new TypeError("key should not be empty.");return r = this._checkOptions(r || {}), this.sendRequest("PUT", { bucketName: e, key: t, body: n, headers: r.headers, config: r.config });
        }, r.prototype.putObjectFromBlob = function (e, t, n, r) {
          var i = {};return i[u.CONTENT_LENGTH] = n.size, r = c.extend(i, r), this.putObject(e, t, n, r);
        }, r.prototype.putObjectFromDataUrl = function (e, t, r, i) {
          r = new n(r, "base64");var o = {};return o[u.CONTENT_LENGTH] = r.length, i = c.extend(o, i), this.putObject(e, t, r, i);
        }, r.prototype.putObjectFromString = function (e, t, r, i) {
          i = i || {};var a = {};return a[u.CONTENT_LENGTH] = n.byteLength(r), a[u.CONTENT_TYPE] = i[u.CONTENT_TYPE] || m.guess(o.extname(t)), a[u.CONTENT_MD5] = h.md5sum(r), i = c.extend(a, i), this.putObject(e, t, r, i);
        }, r.prototype.putObjectFromFile = function (e, t, n, r) {
          r = r || {};var i = {},
              s = a.statSync(n).size,
              f = c.has(r, u.CONTENT_LENGTH) ? r[u.CONTENT_LENGTH] : s;if (f > s) throw new Error("options['Content-Length'] should less than " + s);i[u.CONTENT_LENGTH] = f, i[u.CONTENT_TYPE] = r[u.CONTENT_TYPE] || m.guess(o.extname(n)), r = c.extend(i, r);var d = { start: 0, end: Math.max(0, f - 1) },
              p = a.createReadStream(n, d);if (!c.has(r, u.CONTENT_MD5)) {
            var l = this,
                b = a.createReadStream(n, d);return h.md5stream(b).then(function (n) {
              return r[u.CONTENT_MD5] = n, l.putObject(e, t, p, r);
            });
          }return this.putObject(e, t, p, r);
        }, r.prototype.getObjectMetadata = function (e, t, n) {
          return n = n || {}, this.sendRequest("HEAD", { bucketName: e, key: t, config: n.config });
        }, r.prototype.getObject = function (e, t, n, r) {
          r = r || {};var o = new v();return this.sendRequest("GET", { bucketName: e, key: t, headers: { Range: n ? i.format("bytes=%s", n) : "" }, config: r.config, outputStream: o }).then(function (e) {
            return e.body = o.store, e;
          });
        }, r.prototype.getObjectToFile = function (e, t, n, r, o) {
          return o = o || {}, this.sendRequest("GET", { bucketName: e, key: t, headers: { Range: r ? i.format("bytes=%s", r) : "" }, config: o.config, outputStream: a.createWriteStream(n) });
        }, r.prototype.copyObject = function (e, t, n, r, o) {
          if (!e) throw new TypeError("sourceBucketName should not be empty");if (!t) throw new TypeError("sourceKey should not be empty");if (!n) throw new TypeError("targetBucketName should not be empty");if (!r) throw new TypeError("targetKey should not be empty");o = this._checkOptions(o || {});var a = !1;return c.some(o.headers, function (e, t) {
            return 0 === t.indexOf("x-bce-meta-") ? (a = !0, !0) : void 0;
          }), o.headers["x-bce-copy-source"] = d.normalize(i.format("/%s/%s", e, t), !1), c.has(o.headers, "ETag") && (o.headers["x-bce-copy-source-if-match"] = o.headers.ETag), o.headers["x-bce-metadata-directive"] = a ? "replace" : "copy", this.sendRequest("PUT", { bucketName: n, key: r, headers: o.headers, config: o.config });
        }, r.prototype.initiateMultipartUpload = function (e, t, n) {
          n = n || {};var r = {};return r[u.CONTENT_TYPE] = n[u.CONTENT_TYPE] || m.guess(o.extname(t)), this.sendRequest("POST", { bucketName: e, key: t, params: { uploads: "" }, headers: r, config: n.config });
        }, r.prototype.abortMultipartUpload = function (e, t, n, r) {
          return r = r || {}, this.sendRequest("DELETE", { bucketName: e, key: t, params: { uploadId: n }, config: r.config });
        }, r.prototype.completeMultipartUpload = function (e, t, n, r, i) {
          var o = {};return o[u.CONTENT_TYPE] = "application/json; charset=UTF-8", i = this._checkOptions(c.extend(o, i)), this.sendRequest("POST", { bucketName: e, key: t, body: JSON.stringify({ parts: r }), headers: i.headers, params: { uploadId: n }, config: i.config });
        }, r.prototype.uploadPartFromFile = function (e, t, n, r, i, o, s, c) {
          var f = s,
              u = s + i - 1,
              d = a.createReadStream(o, { start: f, end: u });return this.uploadPart(e, t, n, r, i, d, c);
        }, r.prototype.uploadPartFromBlob = function (e, t, n, r, o, a, s) {
          if (a.size !== o) throw new TypeError(i.format("Invalid partSize %d and data length %d", o, a.size));var f = {};return f[u.CONTENT_LENGTH] = o, f[u.CONTENT_TYPE] = "application/octet-stream", s = this._checkOptions(c.extend(f, s)), this.sendRequest("PUT", { bucketName: e, key: t, body: a, headers: s.headers, params: { partNumber: r, uploadId: n }, config: s.config });
        }, r.prototype.uploadPartFromDataUrl = function (e, t, r, o, a, s, f) {
          var d = new n(s, "base64");if (d.length !== a) throw new TypeError(i.format("Invalid partSize %d and data length %d", a, d.length));var p = {};return p[u.CONTENT_LENGTH] = a, p[u.CONTENT_TYPE] = "application/octet-stream", f = this._checkOptions(c.extend(p, f)), this.sendRequest("PUT", { bucketName: e, key: t, body: d, headers: f.headers, params: { partNumber: o, uploadId: r }, config: f.config });
        }, r.prototype.uploadPart = function (e, t, n, r, o, s, f) {
          function d() {
            return f = p._checkOptions(f), p.sendRequest("PUT", { bucketName: e, key: t, body: l, headers: f.headers, params: { partNumber: r, uploadId: n }, config: f.config });
          }if (!e) throw new TypeError("bucketName should not be empty");if (!t) throw new TypeError("key should not be empty");if (_ > r || r > x) throw new TypeError(i.format("Invalid partNumber %d. The valid range is from %d to %d.", r, _, x));var p = this,
              l = a.createReadStream(s.path, { start: s.start, end: s.end }),
              b = {};return b[u.CONTENT_LENGTH] = o, b[u.CONTENT_TYPE] = "application/octet-stream", f = c.extend(b, f), f[u.CONTENT_MD5] ? d() : h.md5stream(s).then(function (e) {
            return f[u.CONTENT_MD5] = e, d();
          });
        }, r.prototype.listParts = function (e, t, n, r) {
          if (!n) throw new TypeError("uploadId should not empty");var i = ["maxParts", "partNumberMarker", "uploadId"];return r = this._checkOptions(r || {}, i), r.params.uploadId = n, this.sendRequest("GET", { bucketName: e, key: t, params: r.params, config: r.config });
        }, r.prototype.listMultipartUploads = function (e, t) {
          var n = ["delimiter", "maxUploads", "keyMarker", "prefix", "uploads"];return t = this._checkOptions(t || {}, n), t.params.uploads = "", this.sendRequest("GET", { bucketName: e, params: t.params, config: t.config });
        }, r.prototype.appendObject = function (e, t, n, r, i) {
          if (!t) throw new TypeError("key should not be empty.");i = this._checkOptions(i || {});var o = { append: "" };return c.isNumber(r) && (o.offset = r), this.sendRequest("POST", { bucketName: e, key: t, body: n, headers: i.headers, params: o, config: i.config });
        }, r.prototype.appendObjectFromBlob = function (e, t, n, r, i) {
          var o = {};return o[u.CONTENT_LENGTH] = n.size, i = c.extend(o, i), this.appendObject(e, t, n, r, i);
        }, r.prototype.appendObjectFromDataUrl = function (e, t, r, i, o) {
          r = new n(r, "base64");var a = {};return a[u.CONTENT_LENGTH] = r.length, o = c.extend(a, o), this.appendObject(e, t, r, i, o);
        }, r.prototype.appendObjectFromString = function (e, t, r, i, a) {
          a = a || {};var s = {};return s[u.CONTENT_LENGTH] = n.byteLength(r), s[u.CONTENT_TYPE] = a[u.CONTENT_TYPE] || m.guess(o.extname(t)), s[u.CONTENT_MD5] = h.md5sum(r), a = c.extend(s, a), this.appendObject(e, t, r, i, a);
        }, r.prototype.appendObjectFromFile = function (e, t, n, r, i, s) {
          if (s = s || {}, 0 === i) return this.appendObjectFromString(e, t, "", r, s);var f = {},
              d = a.statSync(n).size;if (i + r > d) throw new Error("Can't read the content beyond the end of file.");f[u.CONTENT_LENGTH] = i, f[u.CONTENT_TYPE] = s[u.CONTENT_TYPE] || m.guess(o.extname(n)), s = c.extend(f, s);var p = { start: r || 0, end: (r || 0) + i - 1 },
              l = a.createReadStream(n, p);if (!c.has(s, u.CONTENT_MD5)) {
            var b = this,
                v = a.createReadStream(n, p);return h.md5stream(v).then(function (n) {
              return s[u.CONTENT_MD5] = n, b.appendObject(e, t, l, r, s);
            });
          }return this.appendObject(e, t, l, r, s);
        }, r.prototype.signPostObjectPolicy = function (e) {
          var t = this.config.credentials,
              r = new p(t.ak, t.sk);e = new n(JSON.stringify(e)).toString("base64");var i = r.hash(e, t.sk);return { policy: e, signature: i };
        }, r.prototype.postObject = function (e, t, r, i) {
          var o = "MM8964" + (Math.random() * Math.pow(2, 63)).toString(36),
              s = "multipart/form-data; boundary=" + o;if (c.isString(r)) r = a.readFileSync(r);else if (!n.isBuffer(r)) throw new Error("Invalid data type.");var f = this.config.credentials,
              d = f.ak,
              p = ["signature", "accessKey", "key", "file"];i = c.omit(i || {}, p);var h = new g(o);for (var l in i) {
            i.hasOwnProperty(l) && "policy" !== l && h.addPart(l, i[l]);
          }if (i.policy) {
            var b = this.signPostObjectPolicy(i.policy);h.addPart("policy", b.policy), h.addPart("signature", b.signature);
          }h.addPart("accessKey", d), h.addPart("key", t), h.addPart("file", r);var m = h.encode(),
              v = {};return v[u.CONTENT_TYPE] = s, this.sendRequest("POST", { bucketName: e, body: m, headers: v });
        }, r.prototype.sendRequest = function (e, t) {
          var n = { bucketName: null, key: null, body: null, headers: {}, params: {}, config: {}, outputStream: null },
              r = c.extend(n, t),
              i = c.extend({}, this.config, r.config),
              a = o.normalize(o.join("/v1", d.normalize(r.bucketName || ""), d.normalize(r.key || "", !1))).replace(/\\/g, "/");return i.sessionToken && (r.headers[u.SESSION_TOKEN] = i.sessionToken), this.sendHTTPRequest(e, a, r, i);
        }, r.prototype.sendHTTPRequest = function (e, t, n, r) {
          var i = this,
              o = this._httpAgent = new l(r),
              a = { httpMethod: e, resource: t, args: n, config: r };c.each(["progress", "error", "abort"], function (e) {
            o.on(e, function (t) {
              i.emit(e, t, a);
            });
          });var s = this._httpAgent.sendRequest(e, t, n.body, n.headers, n.params, c.bind(this.createSignature, this), n.outputStream);return s.abort = function () {
            if (o._req && o._req.xhr) {
              var e = o._req.xhr;e.abort();
            }
          }, s;
        }, r.prototype._checkOptions = function (e, t) {
          var n = {};return n.config = e.config || {}, n.headers = this._prepareObjectHeaders(e), n.params = c.pick(e, t || []), n;
        }, r.prototype._prepareObjectHeaders = function (e) {
          var t = [u.CONTENT_LENGTH, u.CONTENT_ENCODING, u.CONTENT_MD5, u.X_BCE_CONTENT_SHA256, u.CONTENT_TYPE, u.CONTENT_DISPOSITION, u.ETAG, u.SESSION_TOKEN, u.CACHE_CONTROL, u.EXPIRES, u.X_BCE_OBJECT_ACL, u.X_BCE_OBJECT_GRANT_READ],
              r = 0,
              o = c.pick(e, function (e, i) {
            return -1 !== t.indexOf(i) ? !0 : /^x\-bce\-meta\-/.test(i) ? (r += n.byteLength(i) + n.byteLength("" + e), !0) : void 0;
          });if (r > w) throw new TypeError("Metadata size should not be greater than " + w + ".");if (c.has(o, u.CONTENT_LENGTH)) {
            var a = o[u.CONTENT_LENGTH];if (0 > a) throw new TypeError("content_length should not be negative.");if (a > y) throw new TypeError("Object length should be less than " + y + ". Use multi-part upload instead.");
          }if (c.has(o, "ETag")) {
            var s = o.ETag;/^"/.test(s) || (o.ETag = i.format('"%s"', s));
          }return c.has(o, u.CONTENT_TYPE) || (o[u.CONTENT_TYPE] = "application/octet-stream"), o;
        }, t.exports = r;
      }).call(this, e("buffer").Buffer);
    }, { "./auth": 189, "./bce_base_client": 191, "./crypto": 195, "./headers": 198, "./http_client": 200, "./mime.types": 204, "./multipart": 205, "./strings": 209, "./wm_stream": 218, buffer: 179, fs: 3, path: 155, q: 186, querystring: 160, underscore: 187, url: 174, util: 176 }], 194: [function (e, t, n) {
      n.DEFAULT_SERVICE_DOMAIN = "baidubce.com", n.DEFAULT_CONFIG = { protocol: "http", region: "bj" };
    }, {}], 195: [function (e, t, n) {
      (function (t) {
        var r = e("fs"),
            i = e("crypto"),
            o = e("q");n.md5sum = function (e, n, r) {
          t.isBuffer(e) || (e = new t(e, n || "UTF-8"));var o = i.createHash("md5");return o.update(e), o.digest(r || "base64");
        }, n.md5stream = function (e, t) {
          var n = o.defer(),
              r = i.createHash("md5");return e.on("data", function (e) {
            r.update(e);
          }), e.on("end", function () {
            n.resolve(r.digest(t || "base64"));
          }), e.on("error", function (e) {
            n.reject(e);
          }), n.promise;
        }, n.md5file = function (e, t) {
          return n.md5stream(r.createReadStream(e), t);
        }, n.md5blob = function (e, t) {
          var r = o.defer(),
              i = new FileReader();return i.readAsArrayBuffer(e), i.onerror = function (e) {
            r.reject(i.error);
          }, i.onloadend = function (e) {
            if (e.target.readyState === FileReader.DONE) {
              var i = e.target.result,
                  o = n.md5sum(i, null, t);r.resolve(o);
            }
          }, r.promise;
        };
      }).call(this, e("buffer").Buffer);
    }, { buffer: 179, crypto: 5, fs: 3, q: 186 }], 196: [function (e, t, n) {
      (function (t) {
        function r(e) {
          h.call(this, e, "doc", !1), this._documentId = null;
        }function i(e) {
          h.call(this, e, "doc", !1), this._name = null, this._endpoint = null;
        }var o = e("fs"),
            a = e("path"),
            s = e("util"),
            c = e("url"),
            f = e("q"),
            u = e("underscore"),
            d = e("debug")("bce-sdk:Document"),
            p = e("./bos_client"),
            h = e("./bce_base_client"),
            l = e("./helper"),
            b = e("./crypto"),
            m = 1,
            v = 2,
            g = 4;s.inherits(r, h), r.prototype._buildUrl = function () {
          var e = "/v2/document",
              t = u.toArray(arguments);return t.length && (e += "/" + t.join("/")), e;
        }, r.prototype.getId = function () {
          return this._documentId;
        }, r.prototype.setId = function (e) {
          return this._documentId = e, this;
        }, r.prototype.create = function (e, n) {
          var r = u.extend({}, n),
              i = -1,
              s = /^bos:\/\//;if (u.isString(e)) {
            if (s.test(e)) try {
              var d = c.parse(e),
                  p = d.host,
                  h = d.pathname.substr(1);r = u.extend(r, d.query);var l = r.title || a.basename(h),
                  y = r.format || a.extname(h).substr(1),
                  w = r.notification;return this.createFromBos(p, h, l, y, w);
            } catch (_) {
              return f.reject(_);
            }i = m, r.format = r.format || a.extname(e).substr(1), r.title = r.title || a.basename(e, a.extname(e));
          } else if (t.isBuffer(e)) {
            if (null == r.format || null == r.title) return f.reject(new Error("buffer type required options.format and options.title"));i = v;
          } else {
            if (!("undefined" != typeof Blob && e instanceof Blob)) return f.reject(new Error("Unsupported dataType."));i = g, r.format = r.format || a.extname(e.name).substr(1), r.title = r.title || a.basename(e.name, a.extname(e.name));
          }if (!r.title || !r.format) return f.reject(new Error("`title` and `format` are required."));if (r.meta.md5) return this._doCreate(e, r);var x = this;return i === m ? b.md5stream(o.createReadStream(e), "hex").then(function (t) {
            return r.meta.md5 = t, x._doCreate(e, r);
          }) : i === g ? b.md5blob(e, "hex").then(function (t) {
            return r.meta.md5 = t, x._doCreate(e, r);
          }) : this._doCreate(e, r);
        }, r.prototype._doCreate = function (e, t) {
          var n = null,
              r = null,
              i = null,
              o = null,
              a = this;return a.register(t).then(function (t) {
            d("register[response = %j]", t), n = t.body.documentId, r = t.body.bucket, i = t.body.object, o = t.body.bosEndpoint;var s = u.extend({}, a.config, { endpoint: o }),
                c = new p(s);return l.upload(c, r, i, e);
          }).then(function (e) {
            return d("upload[response = %j]", e), a.publish();
          }).then(function (e) {
            return d("publish[response = %j]", e), e.body = { documentId: n, bucket: r, object: i, bosEndpoint: o }, e;
          });
        }, r.prototype.register = function (e) {
          d("register[options = %j]", e);var t = this,
              n = this._buildUrl();return this.sendRequest("POST", n, { params: { register: "" }, headers: { "Content-Type": "application/json" }, body: JSON.stringify(e) }).then(function (e) {
            return t.setId(e.body.documentId), e;
          });
        }, r.prototype.publish = function (e) {
          var t = this._buildUrl(e || this._documentId);return this.sendRequest("PUT", t, { params: { publish: "" } });
        }, r.prototype.get = function (e) {
          var t = this._buildUrl(e || this._documentId);return this.sendRequest("GET", t);
        }, r.prototype.read = function (e) {
          var t = this._buildUrl(e || this._documentId);return this.sendRequest("GET", t, { params: { read: "" } });
        }, r.prototype.download = function (e) {
          var t = this._buildUrl(e || this._documentId);return this.sendRequest("GET", t, { params: { download: "" } });
        }, r.prototype.createFromBos = function (e, t, n, r, i) {
          var o = this._buildUrl(),
              s = { bucket: e, object: t, title: n },
              c = r || a.extname(t).substr(1);if (!c) throw new Error("Document format parameter required");s.format = c, i && (s.notification = i), d("createFromBos:arguments = [%j], body = [%j]", arguments, s);var f = this;return this.sendRequest("POST", o, { params: { source: "bos" }, headers: { "Content-Type": "application/json" }, body: JSON.stringify(s) }).then(function (e) {
            return f.setId(e.body.documentId), e;
          });
        }, r.prototype.removeAll = function () {
          var e = this;return e.list().then(function (t) {
            var n = (t.body.documents || []).map(function (t) {
              return e.remove(t.documentId);
            });return f.all(n);
          });
        }, r.prototype.remove = function (e) {
          var t = this._buildUrl(e || this._documentId);return this.sendRequest("DELETE", t);
        }, r.prototype.list = function (e) {
          var t = e || "",
              n = this._buildUrl();return this.sendRequest("GET", n, { params: { status: t } });
        }, s.inherits(i, h), i.prototype._buildUrl = function () {
          var e = "/v1/notification",
              t = u.toArray(arguments);return t.length && (e += "/" + t.join("/")), e;
        }, i.prototype.create = function (e, t) {
          var n = this,
              r = this._buildUrl();return n.sendRequest("POST", r, { headers: { "Content-Type": "application/json" }, body: JSON.stringify({ name: e, endpoint: t }) }).then(function (r) {
            return n._name = e, n._endpoint = t, r;
          });
        }, i.prototype.get = function (e) {
          var t = this._buildUrl(e || this._name);return this.sendRequest("GET", t);
        }, i.prototype.list = function () {
          return this.sendRequest("GET", this._buildUrl());
        }, i.prototype.remove = function (e) {
          var t = this._buildUrl(e || this._name);return this.sendRequest("DELETE", t);
        }, i.prototype.removeAll = function () {
          var e = this;return e.list().then(function (t) {
            var n = (t.body.notifications || []).map(function (t) {
              return e.remove(t.name);
            });return f.all(n);
          });
        }, n.Document = r, n.Notification = i;
      }).call(this, { isBuffer: e("/Volumes/HDD/Users/leeight/local/case/inf/bos/bce-sdk-js/node_modules/browserify/node_modules/insert-module-globals/node_modules/is-buffer/index.js") });
    }, { "./bce_base_client": 191, "./bos_client": 193, "./crypto": 195, "./helper": 199, "/Volumes/HDD/Users/leeight/local/case/inf/bos/bce-sdk-js/node_modules/browserify/node_modules/insert-module-globals/node_modules/is-buffer/index.js": 153, debug: 183, fs: 3, path: 155, q: 186, underscore: 187, url: 174, util: 176 }], 197: [function (e, t, n) {
      (function (n) {
        function r(e) {
          s.call(this, e, "face", !0);
        }var i = e("util"),
            o = e("underscore"),
            a = e("debug")("bce-sdk:FaceClient"),
            s = e("./bce_base_client");i.inherits(r, s), r.prototype.createApp = function (e) {
          e = e || {};var t = "/v1/app";return this.sendRequest("POST", t, { config: e.config });
        }, r.prototype.listApps = function (e) {
          e = e || {};var t = "/v1/app";return this.sendRequest("GET", t, { config: e.config });
        }, r.prototype.createGroup = function (e, t, n) {
          n = n || {};var r = "/v1/app/" + e + "/group";return this.sendRequest("POST", r, { body: JSON.stringify({ groupName: t }), config: n.config });
        }, r.prototype.deleteGroup = function (e, t, n) {
          n = n || {};var r = "/v1/app/" + e + "/group/" + t;return this.sendRequest("DELETE", r, { config: n.config });
        }, r.prototype.getGroup = function (e, t, n) {
          n = n || {};var r = "/v1/app/" + e + "/group/" + t;return this.sendRequest("GET", r, { config: n.config });
        }, r.prototype.listGroups = function (e, t) {
          t = t || {};var n = "/v1/app/" + e + "/group";return this.sendRequest("GET", n, { config: t.config });
        }, r.prototype.createPerson = function (e, t, n, r, i) {
          i = i || {}, r = r.map(function (e) {
            return { bosPath: e };
          }), a("Create Person Faces = %j", r);var o = "/v1/app/" + e + "/person";return this.sendRequest("POST", o, { body: JSON.stringify({ personName: n, groupName: t, faces: r }), config: i.config });
        }, r.prototype.deletePerson = function (e, t, n) {
          n = n || {};var r = "/v1/app/" + e + "/person/" + t;return this.sendRequest("DELETE", r, { config: n.config });
        }, r.prototype.updatePerson = function (e, t, n, r) {
          r = r || {}, n = n.map(function (e) {
            return { bosPath: e };
          });var i = "/v1/app/" + e + "/person/" + t;return this.sendRequest("PUT", i, { body: JSON.stringify({ faces: n }), config: r.config });
        }, r.prototype.getPerson = function (e, t, n) {
          n = n || {};var r = "/v1/app/" + e + "/person/" + t;return this.sendRequest("GET", r, { config: n.config });
        }, r.prototype.listPersons = function (e, t) {
          t = t || {};var n = "/v1/app/" + e + "/person",
              r = o.pick(t, "groupName");return this.sendRequest("GET", n, { params: r, config: t.config });
        }, r.prototype.identify = function (e, t, r, i) {
          i = i || {};var o = {};o = n.isBuffer(r) ? { base64: r.toString("base64") } : { bosPath: r };var a = "/v1/app/" + e + "/group/" + t;return this.sendRequest("POST", a, { params: { identify: "" }, body: JSON.stringify(o), config: i.config });
        }, r.prototype.verify = function (e, t, r, i) {
          i = i || {};var o = {};o = n.isBuffer(r) ? { base64: r.toString("base64") } : { bosPath: r };var a = "/v1/app/" + e + "/person/" + t;return this.sendRequest("POST", a, { params: { verify: "" }, body: JSON.stringify(o), config: i.config });
        }, t.exports = r;
      }).call(this, { isBuffer: e("/Volumes/HDD/Users/leeight/local/case/inf/bos/bce-sdk-js/node_modules/browserify/node_modules/insert-module-globals/node_modules/is-buffer/index.js") });
    }, { "./bce_base_client": 191, "/Volumes/HDD/Users/leeight/local/case/inf/bos/bce-sdk-js/node_modules/browserify/node_modules/insert-module-globals/node_modules/is-buffer/index.js": 153, debug: 183, underscore: 187, util: 176 }], 198: [function (e, t, n) {
      n.CONTENT_TYPE = "Content-Type", n.CONTENT_LENGTH = "Content-Length", n.CONTENT_MD5 = "Content-MD5", n.CONTENT_ENCODING = "Content-Encoding", n.CONTENT_DISPOSITION = "Content-Disposition", n.ETAG = "ETag", n.CONNECTION = "Connection", n.HOST = "Host", n.USER_AGENT = "User-Agent", n.CACHE_CONTROL = "Cache-Control", n.EXPIRES = "Expires", n.AUTHORIZATION = "Authorization", n.X_BCE_DATE = "x-bce-date", n.X_BCE_ACL = "x-bce-acl", n.X_BCE_REQUEST_ID = "x-bce-request-id", n.X_BCE_CONTENT_SHA256 = "x-bce-content-sha256", n.X_BCE_OBJECT_ACL = "x-bce-object-acl", n.X_BCE_OBJECT_GRANT_READ = "x-bce-object-grant-read", n.X_HTTP_HEADERS = "http_headers", n.X_BODY = "body", n.X_STATUS_CODE = "status_code", n.X_MESSAGE = "message", n.X_CODE = "code", n.X_REQUEST_ID = "request_id", n.SESSION_TOKEN = "x-bce-security-token", n.X_VOD_MEDIA_TITLE = "x-vod-media-title", n.X_VOD_MEDIA_DESCRIPTION = "x-vod-media-description", n.ACCEPT_ENCODING = "accept-encoding", n.ACCEPT = "accept";
    }, {}], 199: [function (e, t, n) {
      (function (t) {
        function r(e, t, n, r, a, s, p, h) {
          var l;return e.initiateMultipartUpload(r, a, h).then(function (f) {
            l = f.body.uploadId, d("initiateMultipartUpload = %j", f);var h = u.defer(),
                b = o(t, l, r, a, s, p),
                m = { lengthComputable: !0, loaded: 0, total: b.length };return c.mapLimit(b, 2, i(e, n, m), function (e, t) {
              e ? h.reject(e) : h.resolve(t);
            }), h.promise;
          }).then(function (t) {
            var n = f.map(t, function (e, t) {
              return { partNumber: t + 1, eTag: e.http_headers.etag };
            });return d("parts = %j", n), e.completeMultipartUpload(r, a, l, n);
          });
        }function i(e, t, n) {
          return function (r, i) {
            var o = function o(t) {
              ++n.loaded, e.emit("progress", n), i(null, t);
            },
                a = function a(e) {
              i(e);
            };if (t === l) return d("client.uploadPartFromFile(%j)", f.omit(r, "data")), e.uploadPartFromFile(r.bucket, r.object, r.uploadId, r.partNumber, r.partSize, r.data, r.start).then(o, a);if (t === b) {
              d("client.uploadPartFromDataUrl(%j)", f.omit(r, "data"));var s = r.data.slice(r.start, r.stop + 1).toString("base64");return e.uploadPartFromDataUrl(r.bucket, r.object, r.uploadId, r.partNumber, r.partSize, s).then(o, a);
            }if (t === v) {
              d("client.uploadPartFromBlob(%j)", f.omit(r, "data"));var c = r.data.slice(r.start, r.stop + 1);return e.uploadPartFromBlob(r.bucket, r.object, r.uploadId, r.partNumber, r.partSize, c).then(o, a);
            }
          };
        }function o(e, t, n, r, i, o) {
          for (var a = i, s = 0, c = 1, f = []; a > 0;) {
            var u = Math.min(a, o);f.push({ data: e, uploadId: t, bucket: n, object: r, partNumber: c, partSize: u, start: s, stop: s + u - 1 }), a -= u, s += u, c += 1;
          }return f;
        }var a = e("fs"),
            s = e("stream"),
            c = e("async"),
            f = e("underscore"),
            u = e("q"),
            d = e("debug")("bce-sdk:helper"),
            p = 5242880,
            h = 1048576,
            l = 1,
            b = 2,
            m = 3,
            v = 4;n.omitNull = function (e, t, n) {
          return null != e;
        }, n.upload = function (e, n, i, o, c) {
          var f = 0,
              u = -1;if ("string" == typeof o ? (f = a.lstatSync(o).size, u = l) : t.isBuffer(o) ? (f = o.length, u = b) : o instanceof s.Readable ? u = m : "undefined" != typeof Blob && o instanceof Blob && (f = o.size, u = v), -1 === u) throw new Error("Unsupported `data` type.");if (u === m) return e.putObject(n, i, o, c);if (p >= f) {
            if (u === l) return e.putObjectFromFile(n, i, o, c);if (u === b) return e.putObject(n, i, o, c);if (u === v) return e.putObjectFromBlob(n, i, o, c);
          } else if (f > p) return d("%s > %s -> multi-part", f, p), r(e, o, u, n, i, f, h, c);
        };
      }).call(this, { isBuffer: e("/Volumes/HDD/Users/leeight/local/case/inf/bos/bce-sdk-js/node_modules/browserify/node_modules/insert-module-globals/node_modules/is-buffer/index.js") });
    }, { "/Volumes/HDD/Users/leeight/local/case/inf/bos/bce-sdk-js/node_modules/browserify/node_modules/insert-module-globals/node_modules/is-buffer/index.js": 153, async: 2, debug: 183, fs: 3, q: 186, stream: 172, underscore: 187 }], 200: [function (e, t, n) {
      (function (n, r) {
        function i(e) {
          h.call(this), this.config = e, this._req = null;
        }function o(e) {
          return e && ("object" == (typeof e === "undefined" ? "undefined" : _typeof(e)) || "function" == typeof e) && "function" == typeof e.then;
        }function a(e) {
          return "undefined" != typeof Blob && e instanceof Blob ? !0 : "undefined" != typeof ArrayBuffer && e instanceof ArrayBuffer ? !0 : "undefined" != typeof FormData && e instanceof FormData ? !0 : void 0;
        }function s(e, t) {
          var n = {};return n[v.X_HTTP_HEADERS] = e, n[v.X_BODY] = t, n;
        }function c(e, t, n, i) {
          var o = {};return o[v.X_STATUS_CODE] = e, o[v.X_MESSAGE] = r.isBuffer(t) ? String(t) : t, n && (o[v.X_CODE] = n), i && (o[v.X_REQUEST_ID] = i), o;
        }var f = e("http"),
            u = e("https"),
            d = e("util"),
            p = e("stream"),
            h = e("events").EventEmitter,
            l = e("underscore"),
            b = e("q"),
            m = e("debug")("bce-sdk:HttpClient"),
            v = e("./headers");d.inherits(i, h), i.prototype.sendRequest = function (t, r, i, a, s, c, f) {
          var u = this._getRequestUrl(r, s),
              p = e("url").parse(u);m("httpMethod = %s, requestUrl = %s, options = %j", t, u, p);var h = {};if ("object" == (typeof navigator === "undefined" ? "undefined" : _typeof(navigator)) ? h[v.USER_AGENT] = navigator.userAgent : h[v.USER_AGENT] = d.format("bce-sdk-nodejs/%s/%s/%s", e("../package.json").version, n.platform, n.version), h[v.X_BCE_DATE] = new Date().toISOString().replace(/\.\d+Z$/, "Z"), h[v.CONNECTION] = "close", h[v.CONTENT_TYPE] = "application/json; charset=UTF-8", h[v.HOST] = p.host, a = l.extend({}, h, a), !a.hasOwnProperty(v.CONTENT_LENGTH)) {
            var b = this._guessContentLength(i);0 === b && /GET|HEAD/i.test(t) || (a[v.CONTENT_LENGTH] = b);
          }var g = this;if (p.method = t, p.headers = a, p.mode = "prefer-fast", p.rejectUnauthorized = !1, "function" == typeof c) {
            var y = c(this.config.credentials, t, r, s, a);if (o(y)) return y.then(function (e, t) {
              return a[v.AUTHORIZATION] = e, t && (a[v.X_BCE_DATE] = t), m("options = %j", p), g._doRequest(p, i, f);
            });if ("string" != typeof y) throw new Error("Invalid signature = (" + y + ")");a[v.AUTHORIZATION] = y, m("options = %j", p);
          }return g._doRequest(p, i, f);
        }, i.prototype._isValidStatus = function (e) {
          return e >= 200 && 300 > e;
        }, i.prototype._doRequest = function (e, t, n) {
          var r = b.defer(),
              i = "https:" === e.protocol ? u : f,
              o = this,
              a = o._req = i.request(e, function (e) {
            return o._isValidStatus(e.statusCode) && n && n instanceof p.Writable ? (e.pipe(n), n.on("finish", function () {
              r.resolve(s(o._fixHeaders(e.headers), {}));
            }), void n.on("error", function (e) {
              r.reject(e);
            })) : void r.resolve(o._recvResponse(e));
          });a.xhr && "object" == _typeof(a.xhr.upload) && l.each(["progress", "error", "abort"], function (e) {
            a.xhr.upload.addEventListener(e, function (t) {
              o.emit(e, t);
            }, !1);
          }), a.on("error", function (e) {
            r.reject(e);
          });try {
            o._sendRequest(a, t);
          } catch (c) {
            r.reject(c);
          }return r.promise;
        }, i.prototype._generateRequestId = function () {
          function e() {
            var e = (~~(65535 * Math.random())).toString(16);return e.length < 4 && (e += new Array(4 - e.length + 1).join("0")), e;
          }return d.format("%s%s-%s-%s-%s-%s%s%s", e(), e(), e(), e(), e(), e(), e(), e());
        }, i.prototype._guessContentLength = function (e) {
          if (null == e) return 0;if ("string" == typeof e) return r.byteLength(e);if ("object" == (typeof e === "undefined" ? "undefined" : _typeof(e))) {
            if ("undefined" != typeof Blob && e instanceof Blob) return e.size;if ("undefined" != typeof ArrayBuffer && e instanceof ArrayBuffer) return e.byteLength;if (r.isBuffer(e)) return e.length;
          } else if (r.isBuffer(e)) return e.length;throw new Error("No Content-Length is specified.");
        }, i.prototype._fixHeaders = function (e) {
          var t = {};return e && Object.keys(e).forEach(function (n) {
            var r = e[n].trim();r && (n = n.toLowerCase(), "etag" === n && (r = r.replace(/"/g, "")), t[n] = r);
          }), t;
        }, i.prototype._recvResponse = function (e) {
          function t(e) {
            var t = n["content-type"];return e.length ? t && /(application|text)\/json/.test(t) ? JSON.parse(e.toString()) : e : {};
          }var n = this._fixHeaders(e.headers),
              i = e.statusCode,
              o = b.defer(),
              a = [];return e.on("data", function (e) {
            r.isBuffer(e) ? a.push(e) : a.push(new r(e));
          }), e.on("error", function (e) {
            o.reject(e);
          }), e.on("end", function () {
            var e = r.concat(a),
                f = null;try {
              f = t(e);
            } catch (u) {
              return m("statusCode = %s, Parse response body error = %s", i, u.message), void o.reject(this.failure(i, u.message));
            }i >= 100 && 200 > i ? o.reject(c(i, "Can not handle 1xx http status code.")) : (100 > i || i >= 300) && (f.requestId ? o.reject(c(i, f.message, f.code, f.requestId)) : o.reject(c(i, f))), o.resolve(s(n, f));
          }), o.promise;
        }, i.prototype._sendRequest = function (e, t) {
          if (!t) return void e.end();if ("string" == typeof t && (t = new r(t)), r.isBuffer(t) || a(t)) e.write(t), e.end();else {
            if (!(t instanceof p.Readable)) throw new Error("Invalid body type = " + (typeof t === "undefined" ? "undefined" : _typeof(t)));if (!t.readable) throw new Error("stream is not readable");t.on("data", function (t) {
              e.write(t);
            }), t.on("end", function () {
              e.end();
            });
          }
        }, i.prototype.buildQueryString = function (t) {
          var n = e("querystring").stringify(t);return n.replace(/[()'!~.*\-_]/g, function (e) {
            return "%" + e.charCodeAt().toString(16);
          });
        }, i.prototype._getRequestUrl = function (e, t) {
          var n = e,
              r = this.buildQueryString(t);return r && (n += "?" + r), this.config.endpoint + n;
        }, t.exports = i;
      }).call(this, e("_process"), e("buffer").Buffer);
    }, { "../package.json": 188, "./headers": 198, _process: 156, buffer: 179, debug: 183, events: 146, http: 147, https: 151, q: 186, querystring: 160, stream: 172, underscore: 187, url: 174, util: 176 }], 201: [function (e, t, n) {
      function r(e) {
        c.call(this, e, "lss", !0), this._name = null;
      }function i(e) {
        c.call(this, e, "lss", !0), this._sessionId = null;
      }function o(e) {
        c.call(this, e, "lss", !0), this._name = null, this._endpoint = null;
      }var a = e("util"),
          s = e("q"),
          c = e("./bce_base_client");a.inherits(r, c), r.prototype._buildUrl = function (e) {
        var t = "/v3/live/preset";return t + (e ? "/" + e : "");
      }, r.prototype.setName = function (e) {
        return this._name = e, this;
      }, r.prototype.create = function (e) {
        var t = this,
            n = t._buildUrl(!1);return t.sendRequest("POST", n, { body: JSON.stringify(e) }).then(function (n) {
          return t.setName(e.presetName), n;
        });
      }, r.prototype.remove = function (e) {
        var t = this._buildUrl(e || this._name);return this.sendRequest("DELETE", t);
      }, r.prototype.removeAll = function () {
        var e = this;return e.list().then(function (t) {
          var n = t.body.presets.filter(function (e) {
            return !/^(bce|lss)\./.test(e.presetName);
          }).map(function (t) {
            return e.remove(t.presetName);
          });return s.all(n);
        });
      }, r.prototype.get = function (e) {
        var t = this._buildUrl(e || this._name);return this.sendRequest("GET", t);
      }, r.prototype.list = function () {
        var e = this._buildUrl();return this.sendRequest("GET", e);
      }, a.inherits(i, c), i.prototype._buildUrl = function (e) {
        var t = "/v3/live/session";return t + (e ? "/" + e : "");
      }, i.prototype.setSessionId = function (e) {
        return this._sessionId = e, this;
      }, i.prototype.create = function (e) {
        var t = this,
            n = t._buildUrl(!1);return t.sendRequest("POST", n, { body: JSON.stringify(e) }).then(function (e) {
          var n = e.body;return t.setSessionId(n.sessionId), e;
        });
      }, i.prototype.remove = function (e) {
        var t = this._buildUrl(e || this._sessionId);return this.sendRequest("DELETE", t);
      }, i.prototype.removeAll = function () {
        var e = this;return e.list().then(function (t) {
          var n = t.body.liveInfos.map(function (t) {
            return e.remove(t.sessionId);
          });return s.all(n);
        });
      }, i.prototype.get = function (e) {
        var t = this._buildUrl(e || this._sessionId);return this.sendRequest("GET", t);
      }, i.prototype.list = function () {
        var e = this._buildUrl();return this.sendRequest("GET", e);
      }, i.prototype.pause = function (e) {
        var t = this._buildUrl(e || this._sessionId);return this.sendRequest("PUT", t, { params: { stop: "" } });
      }, i.prototype.resume = function (e) {
        var t = this._buildUrl(e || this._sessionId);return this.sendRequest("PUT", t, { params: { resume: "" } });
      }, i.prototype.refresh = function (e) {
        var t = this._buildUrl(e || this._sessionId);return this.sendRequest("PUT", t, { params: { refresh: "" } });
      }, a.inherits(o, c), o.prototype._buildUrl = function (e) {
        var t = "/v3/live/notification";return t + (e ? "/" + e : "");
      }, o.prototype.create = function (e, t) {
        var n = this._buildUrl(),
            r = { name: e, endpoint: t },
            i = this;return this.sendRequest("POST", n, { body: JSON.stringify(r) }).then(function (n) {
          return i._name = e, i._endpoint = t, n;
        });
      }, o.prototype.get = function (e) {
        var t = e || this._name;if (!t) throw new TypeError("name is required");var n = this._buildUrl(t);return this.sendRequest("GET", n);
      }, o.prototype.remove = function (e) {
        var t = e || this._name;if (!t) throw new TypeError("name is required");var n = this._buildUrl(t);return this.sendRequest("DELETE", n);
      }, o.prototype.removeAll = function () {
        var e = this;return e.list().then(function (t) {
          var n = (t.body.notifications || []).map(function (t) {
            return e.remove(t.name);
          });return s.all(n);
        });
      }, o.prototype.list = function () {
        var e = this._buildUrl();return this.sendRequest("GET", e);
      }, n.Preset = r, n.Session = i, n.Notification = o;
    }, { "./bce_base_client": 191, q: 186, util: 176 }], 202: [function (e, t, n) {
      function r(e) {
        d.call(this, e, "media", !0), this._id = null;
      }function i(e) {
        d.call(this, e, "media", !0);
      }function o(e) {
        d.call(this, e, "media", !0), this._name = null;
      }function a(e) {
        d.call(this, e, "media", !0), this._name = null;
      }function s(e) {
        d.call(this, e, "media", !0), this._jobId = null;
      }function c(e) {
        d.call(this, e, "media", !0), this._jobId = null;
      }var f = e("util"),
          u = e("q"),
          d = e("./bce_base_client");f.inherits(r, d), r.prototype._buildUrl = function (e) {
        var t = "/v3/watermark";if (e === !1) return t;var n = e || this._id;return t + (n ? "/" + n : "");
      }, r.prototype.setId = function (e) {
        return this._id = e, this;
      }, r.prototype.create = function (e) {
        var t = this,
            n = t._buildUrl(!1);return t.sendRequest("POST", n, { body: JSON.stringify(e) }).then(function (e) {
          return t.setId(e.body.watermarkId), e;
        });
      }, r.prototype.remove = function (e) {
        var t = this._buildUrl(e);return this.sendRequest("DELETE", t);
      }, r.prototype.removeAll = function () {
        var e = this;return e.list().then(function (t) {
          var n = t.body.watermarks.map(function (t) {
            return e.remove(t.watermarkId);
          });return u.all(n);
        });
      }, r.prototype.get = function (e) {
        var t = this,
            n = t._buildUrl(e);return t.sendRequest("GET", n).then(function (e) {
          return t.setId(e.body.watermarkId), e;
        });
      }, r.prototype.list = function () {
        var e = this._buildUrl(!1);return this.sendRequest("GET", e);
      }, f.inherits(i, d), i.prototype.get = function (e, t) {
        var n = "/v3/mediainfo";return this.sendRequest("GET", n, { params: { bucket: e, key: t } });
      }, f.inherits(o, d), o.prototype.setName = function (e) {
        return this._name = e, this;
      }, o.prototype._buildUrl = function (e) {
        var t = "/v3/pipeline";if (e === !1) return t;var n = e || this._name;return t + (n ? "/" + n : "");
      }, o.prototype.create = function (e) {
        var t = this,
            n = t._buildUrl(!1);return t.sendRequest("POST", n, { body: JSON.stringify(e) }).then(function (n) {
          return t.setName(e.pipelineName), n;
        });
      }, o.prototype.get = function (e) {
        var t = this,
            n = t._buildUrl(e);return t.sendRequest("GET", n).then(function (e) {
          return t.setName(e.body.pipelineName), e;
        });
      }, o.prototype.list = function () {
        var e = this._buildUrl(!1);return this.sendRequest("GET", e);
      }, o.prototype.remove = function (e) {
        var t = this._buildUrl(e);return this.sendRequest("DELETE", t);
      }, o.prototype.removeAll = function () {
        var e = this;return e.list().then(function (t) {
          var n = t.body.pipelines.filter(function (e) {
            var t = e.jobStatus;return t.running + t.pending <= 0;
          }).map(function (t) {
            return e.remove(t.pipelineName);
          });return u.all(n);
        });
      }, o.prototype.addTranscodingJob = function (e) {
        var t = e.pipelineName || this._name;if (!t) throw new Error("`pipelineName` is required.");e.pipelineName = t;var n = new c(this.config);return n.create(e).then(function (e) {
          return n;
        });
      }, o.prototype.addThumbnailJob = function (e) {
        var t = e.pipelineName || this._name;if (!t) throw new Error("`pipelineName` is required.");e.pipelineName = t;var n = new s(this.config);return n.create(e).then(function (e) {
          return n;
        });
      }, o.prototype.getTranscodingJobs = function (e) {
        var t = e || this._name;if (!t) throw new Error("`pipelineName` is required.");var n = new c(this.config);return n.list(t);
      }, o.prototype.getThumbnailJobs = function (e) {
        var t = e || this._name;if (!t) throw new Error("`pipelineName` is required");var n = new s(this.config);return n.list(t);
      }, f.inherits(a, d), a.prototype._buildUrl = function (e) {
        var t = "/v3/preset";if (e === !1) return t;var n = e || this._name;return t + (n ? "/" + n : "");
      }, a.prototype.setName = function (e) {
        return this._name = e, this;
      }, a.prototype.create = function (e) {
        var t = this,
            n = this._buildUrl(!1);
        return this.sendRequest("POST", n, { body: JSON.stringify(e) }).then(function (n) {
          return t.setName(e.presetName), n;
        });
      }, a.prototype.get = function (e) {
        var t = this,
            n = t._buildUrl(e);return t.sendRequest("GET", n).then(function (e) {
          return t.setName(e.body.presetName), e;
        });
      }, a.prototype.list = function () {
        var e = this._buildUrl(!1);return this.sendRequest("GET", e);
      }, a.prototype.remove = function (e) {
        var t = this._buildUrl(e);return this.sendRequest("DELETE", t);
      }, a.prototype.removeAll = function () {
        var e = this;return e.list().then(function (t) {
          var n = t.body.presets.filter(function (e) {
            return !/^bce\./.test(e.presetName);
          }).map(function (t) {
            return e.remove(t.presetName);
          });return u.all(n);
        });
      }, f.inherits(s, d), s.prototype._buildUrl = function () {
        var e = "/v3/job/thumbnail";return e;
      }, s.prototype.create = function (e) {
        var t = this,
            n = this._buildUrl();return this.sendRequest("POST", n, { body: JSON.stringify(e) }).then(function (e) {
          return t._jobId = e.body.jobId, e;
        });
      }, s.prototype.get = function (e) {
        var t = e || this._jobId;if (!t) throw new Error("`jobId` is required");var n = this,
            r = this._buildUrl() + "/" + t;return this.sendRequest("GET", r).then(function (e) {
          return n._jobId = t, e;
        });
      }, s.prototype.list = function (e) {
        var t = this._buildUrl();return this.sendRequest("GET", t, { params: { pipelineName: e } });
      }, f.inherits(c, d), c.prototype._buildUrl = function () {
        var e = "/v3/job/transcoding";return e;
      }, c.prototype.create = function (e) {
        var t = this,
            n = t._buildUrl();return t.sendRequest("POST", n, { body: JSON.stringify(e) }).then(function (e) {
          return t._jobId = e.body.jobId, e;
        });
      }, c.prototype.get = function (e) {
        var t = e || this._jobId;if (!t) throw new Error("`jobId` is required");var n = this,
            r = n._buildUrl() + "/" + t;return n.sendRequest("GET", r).then(function (e) {
          return n._jobId = t, e;
        });
      }, c.prototype.list = function (e) {
        var t = this._buildUrl();return this.sendRequest("GET", t, { params: { pipelineName: e } });
      }, n.Watermark = r, n.MediaInfo = i, n.Transcoding = c, n.Thumbnail = s, n.Pipeline = o, n.Preset = a;
    }, { "./bce_base_client": 191, q: 186, util: 176 }], 203: [function (e, t, n) {
      function r(e) {
        c.call(this, e, "media", !0);
      }var i = e("util"),
          o = e("underscore"),
          a = e("./auth"),
          s = e("./http_client"),
          c = e("./bce_base_client");i.inherits(r, c), r.prototype.createPipeline = function (e, t, n, r, i, o) {
        var a = "/v3/pipeline",
            s = o || {},
            c = JSON.stringify({ pipelineName: e, sourceBucket: t, targetBucket: n, config: r || { capacity: 5 }, description: i || "" });return this.sendRequest("POST", a, { body: c, config: s.config });
      }, r.prototype.getPipeline = function (e, t) {
        var n = "/v3/pipeline/" + e,
            r = t || {};return this.sendRequest("GET", n, { config: r.config });
      }, r.prototype.deletePipeline = function (e, t) {
        var n = "/v3/pipeline/" + e,
            r = t || {};return this.sendRequest("DELETE", n, { config: r.config });
      }, r.prototype.getAllPipelines = function (e) {
        var t = "/v3/pipeline",
            n = e || {};return this.sendRequest("GET", t, { config: n.config });
      }, r.prototype.createJob = function (e, t, n, r, i) {
        var o = "/v3/job",
            a = i || {},
            s = JSON.stringify({ pipelineName: e, source: t, target: n, presetName: r });return this.sendRequest("POST", o, { body: s, config: a.config });
      }, r.prototype.getAllJobs = function (e, t) {
        var n = "/v3/job",
            r = t || {},
            i = { pipelineName: e };return this.sendRequest("GET", n, { params: i, config: r.config });
      }, r.prototype.getJob = function (e, t) {
        var n = "/v3/job/" + e,
            r = t || {};return this.sendRequest("GET", n, { config: r.config });
      }, r.prototype.createPreset = function (e, t, n, r, i, o, a, s, c) {
        var f = "/v3/preset",
            u = c || {},
            d = { presetName: e, container: t };return n && (d.clip = n), r && (d.audio = r), i && (d.video = i), o && (d.encryption = o), null != a && (d.transmux = a), s && (d.description = s), this.sendRequest("POST", f, { body: JSON.stringify(d), config: u.config });
      }, r.prototype.getPreset = function (e, t) {
        var n = "/v3/preset/" + e,
            r = t || {};return this.sendRequest("GET", n, { config: r.config });
      }, r.prototype.deletePreset = function (e, t) {
        var n = "/v3/preset/" + e,
            r = t || {};return this.sendRequest("DELETE", n, { config: r.config });
      }, r.prototype.getMediainfo = function (e, t, n) {
        var r = "/v3/mediainfo",
            i = n || {},
            o = { bucket: e, key: t };return this.sendRequest("GET", r, { params: o, config: i.config });
      }, r.prototype.getProgress = function () {
        var e = "/v3/statistic/job/realtime";return this.sendRequest("GET", e);
      }, r.prototype.createSignature = function (e, t, n, r, i) {
        var o = new a(e.ak, e.sk),
            s = ["host"];return o.generateAuthorization(t, n, r, i, 0, 0, s);
      }, r.prototype.sendRequest = function (e, t, n) {
        var r = { bucketName: null, key: null, body: null, headers: {}, params: {}, config: {}, outputStream: null },
            i = o.extend(r, n),
            a = o.extend({}, this.config, i.config),
            c = this,
            f = this._httpAgent = new s(a);return o.each(["progress", "error", "abort"], function (e) {
          f.on(e, function (t) {
            c.emit(e, t);
          });
        }), this._httpAgent.sendRequest(e, t, i.body, i.headers, i.params, o.bind(this.createSignature, this), i.outputStream);
      }, t.exports = r;
    }, { "./auth": 189, "./bce_base_client": 191, "./http_client": 200, underscore: 187, util: 176 }], 204: [function (e, t, n) {
      var r = { ez: "application/andrew-inset", aw: "application/applixware", atom: "application/atom+xml", atomcat: "application/atomcat+xml", atomsvc: "application/atomsvc+xml", ccxml: "application/ccxml+xml", cdmia: "application/cdmi-capability", cdmic: "application/cdmi-container", cdmid: "application/cdmi-domain", cdmio: "application/cdmi-object", cdmiq: "application/cdmi-queue", cu: "application/cu-seeme", davmount: "application/davmount+xml", dbk: "application/docbook+xml", dssc: "application/dssc+der", xdssc: "application/dssc+xml", ecma: "application/ecmascript", emma: "application/emma+xml", epub: "application/epub+zip", exi: "application/exi", pfr: "application/font-tdpfr", gml: "application/gml+xml", gpx: "application/gpx+xml", gxf: "application/gxf", stk: "application/hyperstudio", ink: "application/inkml+xml", inkml: "application/inkml+xml", ipfix: "application/ipfix", jar: "application/java-archive", ser: "application/java-serialized-object", "class": "application/java-vm", js: "application/javascript", json: "application/json", jsonml: "application/jsonml+json", lostxml: "application/lost+xml", hqx: "application/mac-binhex40", cpt: "application/mac-compactpro", mads: "application/mads+xml", mrc: "application/marc", mrcx: "application/marcxml+xml", ma: "application/mathematica", nb: "application/mathematica", mb: "application/mathematica", mathml: "application/mathml+xml", mbox: "application/mbox", mscml: "application/mediaservercontrol+xml", metalink: "application/metalink+xml", meta4: "application/metalink4+xml", mets: "application/mets+xml", mods: "application/mods+xml", m21: "application/mp21", mp21: "application/mp21", mp4s: "application/mp4", doc: "application/msword", dot: "application/msword", mxf: "application/mxf", bin: "application/octet-stream", dms: "application/octet-stream", lrf: "application/octet-stream", mar: "application/octet-stream", so: "application/octet-stream", dist: "application/octet-stream", distz: "application/octet-stream", pkg: "application/octet-stream", bpk: "application/octet-stream", dump: "application/octet-stream", elc: "application/octet-stream", deploy: "application/octet-stream", oda: "application/oda", opf: "application/oebps-package+xml", ogx: "application/ogg", omdoc: "application/omdoc+xml", onetoc: "application/onenote", onetoc2: "application/onenote", onetmp: "application/onenote", onepkg: "application/onenote", oxps: "application/oxps", xer: "application/patch-ops-error+xml", pdf: "application/pdf", pgp: "application/pgp-encrypted", asc: "application/pgp-signature", sig: "application/pgp-signature", prf: "application/pics-rules", p10: "application/pkcs10", p7m: "application/pkcs7-mime", p7c: "application/pkcs7-mime", p7s: "application/pkcs7-signature", p8: "application/pkcs8", ac: "application/pkix-attr-cert", cer: "application/pkix-cert", crl: "application/pkix-crl", pkipath: "application/pkix-pkipath", pki: "application/pkixcmp", pls: "application/pls+xml", ai: "application/postscript", eps: "application/postscript", ps: "application/postscript", cww: "application/prs.cww", pskcxml: "application/pskc+xml", rdf: "application/rdf+xml", rif: "application/reginfo+xml", rnc: "application/relax-ng-compact-syntax", rl: "application/resource-lists+xml", rld: "application/resource-lists-diff+xml", rs: "application/rls-services+xml", gbr: "application/rpki-ghostbusters", mft: "application/rpki-manifest", roa: "application/rpki-roa", rsd: "application/rsd+xml", rss: "application/rss+xml", rtf: "application/rtf", sbml: "application/sbml+xml", scq: "application/scvp-cv-request", scs: "application/scvp-cv-response", spq: "application/scvp-vp-request", spp: "application/scvp-vp-response", sdp: "application/sdp", setpay: "application/set-payment-initiation", setreg: "application/set-registration-initiation", shf: "application/shf+xml", smi: "application/smil+xml", smil: "application/smil+xml", rq: "application/sparql-query", srx: "application/sparql-results+xml", gram: "application/srgs", grxml: "application/srgs+xml", sru: "application/sru+xml", ssdl: "application/ssdl+xml", ssml: "application/ssml+xml", tei: "application/tei+xml", teicorpus: "application/tei+xml", tfi: "application/thraud+xml", tsd: "application/timestamped-data", plb: "application/vnd.3gpp.pic-bw-large", psb: "application/vnd.3gpp.pic-bw-small", pvb: "application/vnd.3gpp.pic-bw-var", tcap: "application/vnd.3gpp2.tcap", pwn: "application/vnd.3m.post-it-notes", aso: "application/vnd.accpac.simply.aso", imp: "application/vnd.accpac.simply.imp", acu: "application/vnd.acucobol", atc: "application/vnd.acucorp", acutc: "application/vnd.acucorp", air: "application/vnd.adobe.air-application-installer-package+zip", fcdt: "application/vnd.adobe.formscentral.fcdt", fxp: "application/vnd.adobe.fxp", fxpl: "application/vnd.adobe.fxp", xdp: "application/vnd.adobe.xdp+xml", xfdf: "application/vnd.adobe.xfdf", ahead: "application/vnd.ahead.space", azf: "application/vnd.airzip.filesecure.azf", azs: "application/vnd.airzip.filesecure.azs", azw: "application/vnd.amazon.ebook", acc: "application/vnd.americandynamics.acc", ami: "application/vnd.amiga.ami", apk: "application/vnd.android.package-archive", cii: "application/vnd.anser-web-certificate-issue-initiation", fti: "application/vnd.anser-web-funds-transfer-initiation", atx: "application/vnd.antix.game-component", mpkg: "application/vnd.apple.installer+xml", m3u8: "application/vnd.apple.mpegurl", swi: "application/vnd.aristanetworks.swi", iota: "application/vnd.astraea-software.iota", aep: "application/vnd.audiograph", mpm: "application/vnd.blueice.multipass", bmi: "application/vnd.bmi", rep: "application/vnd.businessobjects", cdxml: "application/vnd.chemdraw+xml", mmd: "application/vnd.chipnuts.karaoke-mmd", cdy: "application/vnd.cinderella", cla: "application/vnd.claymore", rp9: "application/vnd.cloanto.rp9", c4g: "application/vnd.clonk.c4group", c4d: "application/vnd.clonk.c4group", c4f: "application/vnd.clonk.c4group", c4p: "application/vnd.clonk.c4group", c4u: "application/vnd.clonk.c4group", c11amc: "application/vnd.cluetrust.cartomobile-config", c11amz: "application/vnd.cluetrust.cartomobile-config-pkg", csp: "application/vnd.commonspace", cdbcmsg: "application/vnd.contact.cmsg", cmc: "application/vnd.cosmocaller", clkx: "application/vnd.crick.clicker", clkk: "application/vnd.crick.clicker.keyboard", clkp: "application/vnd.crick.clicker.palette", clkt: "application/vnd.crick.clicker.template", clkw: "application/vnd.crick.clicker.wordbank", wbs: "application/vnd.criticaltools.wbs+xml", pml: "application/vnd.ctc-posml", ppd: "application/vnd.cups-ppd", car: "application/vnd.curl.car", pcurl: "application/vnd.curl.pcurl", dart: "application/vnd.dart", rdz: "application/vnd.data-vision.rdz", uvf: "application/vnd.dece.data", uvvf: "application/vnd.dece.data", uvd: "application/vnd.dece.data", uvvd: "application/vnd.dece.data", uvt: "application/vnd.dece.ttml+xml", uvvt: "application/vnd.dece.ttml+xml", uvx: "application/vnd.dece.unspecified", uvvx: "application/vnd.dece.unspecified", uvz: "application/vnd.dece.zip", uvvz: "application/vnd.dece.zip", fe_launch: "application/vnd.denovo.fcselayout-link", dna: "application/vnd.dna", mlp: "application/vnd.dolby.mlp", dpg: "application/vnd.dpgraph", dfac: "application/vnd.dreamfactory", kpxx: "application/vnd.ds-keypoint", ait: "application/vnd.dvb.ait", svc: "application/vnd.dvb.service", geo: "application/vnd.dynageo", mag: "application/vnd.ecowin.chart", nml: "application/vnd.enliven", esf: "application/vnd.epson.esf", msf: "application/vnd.epson.msf", qam: "application/vnd.epson.quickanime", slt: "application/vnd.epson.salt", ssf: "application/vnd.epson.ssf", es3: "application/vnd.eszigno3+xml", et3: "application/vnd.eszigno3+xml", ez2: "application/vnd.ezpix-album", ez3: "application/vnd.ezpix-package", fdf: "application/vnd.fdf", mseed: "application/vnd.fdsn.mseed", seed: "application/vnd.fdsn.seed", dataless: "application/vnd.fdsn.seed", gph: "application/vnd.flographit", ftc: "application/vnd.fluxtime.clip", fm: "application/vnd.framemaker", frame: "application/vnd.framemaker", maker: "application/vnd.framemaker", book: "application/vnd.framemaker", fnc: "application/vnd.frogans.fnc", ltf: "application/vnd.frogans.ltf", fsc: "application/vnd.fsc.weblaunch", oas: "application/vnd.fujitsu.oasys", oa2: "application/vnd.fujitsu.oasys2", oa3: "application/vnd.fujitsu.oasys3", fg5: "application/vnd.fujitsu.oasysgp", bh2: "application/vnd.fujitsu.oasysprs", ddd: "application/vnd.fujixerox.ddd", xdw: "application/vnd.fujixerox.docuworks", xbd: "application/vnd.fujixerox.docuworks.binder", fzs: "application/vnd.fuzzysheet", txd: "application/vnd.genomatix.tuxedo", ggb: "application/vnd.geogebra.file", ggt: "application/vnd.geogebra.tool", gex: "application/vnd.geometry-explorer", gre: "application/vnd.geometry-explorer", gxt: "application/vnd.geonext", g2w: "application/vnd.geoplan", g3w: "application/vnd.geospace", gmx: "application/vnd.gmx", kml: "application/vnd.google-earth.kml+xml", kmz: "application/vnd.google-earth.kmz", gqf: "application/vnd.grafeq", gqs: "application/vnd.grafeq", gac: "application/vnd.groove-account", ghf: "application/vnd.groove-help", gim: "application/vnd.groove-identity-message", grv: "application/vnd.groove-injector", gtm: "application/vnd.groove-tool-message", tpl: "application/vnd.groove-tool-template", vcg: "application/vnd.groove-vcard", hal: "application/vnd.hal+xml", zmm: "application/vnd.handheld-entertainment+xml", hbci: "application/vnd.hbci", les: "application/vnd.hhe.lesson-player", hpgl: "application/vnd.hp-hpgl", hpid: "application/vnd.hp-hpid", hps: "application/vnd.hp-hps", jlt: "application/vnd.hp-jlyt", pcl: "application/vnd.hp-pcl", pclxl: "application/vnd.hp-pclxl", "sfd-hdstx": "application/vnd.hydrostatix.sof-data", mpy: "application/vnd.ibm.minipay", afp: "application/vnd.ibm.modcap", listafp: "application/vnd.ibm.modcap", list3820: "application/vnd.ibm.modcap", irm: "application/vnd.ibm.rights-management", sc: "application/vnd.ibm.secure-container", icc: "application/vnd.iccprofile", icm: "application/vnd.iccprofile", igl: "application/vnd.igloader", ivp: "application/vnd.immervision-ivp", ivu: "application/vnd.immervision-ivu", igm: "application/vnd.insors.igm", xpw: "application/vnd.intercon.formnet", xpx: "application/vnd.intercon.formnet", i2g: "application/vnd.intergeo", qbo: "application/vnd.intu.qbo", qfx: "application/vnd.intu.qfx", rcprofile: "application/vnd.ipunplugged.rcprofile", irp: "application/vnd.irepository.package+xml", xpr: "application/vnd.is-xpr", fcs: "application/vnd.isac.fcs", jam: "application/vnd.jam", rms: "application/vnd.jcp.javame.midlet-rms", jisp: "application/vnd.jisp", joda: "application/vnd.joost.joda-archive", ktz: "application/vnd.kahootz", ktr: "application/vnd.kahootz", karbon: "application/vnd.kde.karbon", chrt: "application/vnd.kde.kchart", kfo: "application/vnd.kde.kformula", flw: "application/vnd.kde.kivio", kon: "application/vnd.kde.kontour", kpr: "application/vnd.kde.kpresenter", kpt: "application/vnd.kde.kpresenter", ksp: "application/vnd.kde.kspread", kwd: "application/vnd.kde.kword", kwt: "application/vnd.kde.kword", htke: "application/vnd.kenameaapp", kia: "application/vnd.kidspiration", kne: "application/vnd.kinar", knp: "application/vnd.kinar", skp: "application/vnd.koan", skd: "application/vnd.koan", skt: "application/vnd.koan", skm: "application/vnd.koan", sse: "application/vnd.kodak-descriptor", lasxml: "application/vnd.las.las+xml", lbd: "application/vnd.llamagraphics.life-balance.desktop", lbe: "application/vnd.llamagraphics.life-balance.exchange+xml", 123: "application/vnd.lotus-1-2-3", apr: "application/vnd.lotus-approach", pre: "application/vnd.lotus-freelance", nsf: "application/vnd.lotus-notes", org: "application/vnd.lotus-organizer", scm: "application/vnd.lotus-screencam", lwp: "application/vnd.lotus-wordpro", portpkg: "application/vnd.macports.portpkg", mcd: "application/vnd.mcd", mc1: "application/vnd.medcalcdata", cdkey: "application/vnd.mediastation.cdkey", mwf: "application/vnd.mfer", mfm: "application/vnd.mfmp", flo: "application/vnd.micrografx.flo", igx: "application/vnd.micrografx.igx", mif: "application/vnd.mif", daf: "application/vnd.mobius.daf", dis: "application/vnd.mobius.dis", mbk: "application/vnd.mobius.mbk", mqy: "application/vnd.mobius.mqy", msl: "application/vnd.mobius.msl", plc: "application/vnd.mobius.plc", txf: "application/vnd.mobius.txf", mpn: "application/vnd.mophun.application", mpc: "application/vnd.mophun.certificate", xul: "application/vnd.mozilla.xul+xml", cil: "application/vnd.ms-artgalry", cab: "application/vnd.ms-cab-compressed", xls: "application/vnd.ms-excel", xlm: "application/vnd.ms-excel", xla: "application/vnd.ms-excel", xlc: "application/vnd.ms-excel", xlt: "application/vnd.ms-excel", xlw: "application/vnd.ms-excel", xlam: "application/vnd.ms-excel.addin.macroenabled.12", xlsb: "application/vnd.ms-excel.sheet.binary.macroenabled.12", xlsm: "application/vnd.ms-excel.sheet.macroenabled.12", xltm: "application/vnd.ms-excel.template.macroenabled.12", eot: "application/vnd.ms-fontobject", chm: "application/vnd.ms-htmlhelp", ims: "application/vnd.ms-ims", lrm: "application/vnd.ms-lrm", thmx: "application/vnd.ms-officetheme", cat: "application/vnd.ms-pki.seccat", stl: "application/vnd.ms-pki.stl", ppt: "application/vnd.ms-powerpoint", pps: "application/vnd.ms-powerpoint", pot: "application/vnd.ms-powerpoint", ppam: "application/vnd.ms-powerpoint.addin.macroenabled.12", pptm: "application/vnd.ms-powerpoint.presentation.macroenabled.12", sldm: "application/vnd.ms-powerpoint.slide.macroenabled.12", ppsm: "application/vnd.ms-powerpoint.slideshow.macroenabled.12", potm: "application/vnd.ms-powerpoint.template.macroenabled.12", mpp: "application/vnd.ms-project", mpt: "application/vnd.ms-project", docm: "application/vnd.ms-word.document.macroenabled.12", dotm: "application/vnd.ms-word.template.macroenabled.12", wps: "application/vnd.ms-works", wks: "application/vnd.ms-works", wcm: "application/vnd.ms-works", wdb: "application/vnd.ms-works", wpl: "application/vnd.ms-wpl", xps: "application/vnd.ms-xpsdocument", mseq: "application/vnd.mseq", mus: "application/vnd.musician", msty: "application/vnd.muvee.style", taglet: "application/vnd.mynfc", nlu: "application/vnd.neurolanguage.nlu", ntf: "application/vnd.nitf", nitf: "application/vnd.nitf", nnd: "application/vnd.noblenet-directory", nns: "application/vnd.noblenet-sealer", nnw: "application/vnd.noblenet-web", ngdat: "application/vnd.nokia.n-gage.data", "n-gage": "application/vnd.nokia.n-gage.symbian.install", rpst: "application/vnd.nokia.radio-preset", rpss: "application/vnd.nokia.radio-presets", edm: "application/vnd.novadigm.edm", edx: "application/vnd.novadigm.edx", ext: "application/vnd.novadigm.ext", odc: "application/vnd.oasis.opendocument.chart", otc: "application/vnd.oasis.opendocument.chart-template", odb: "application/vnd.oasis.opendocument.database", odf: "application/vnd.oasis.opendocument.formula", odft: "application/vnd.oasis.opendocument.formula-template", odg: "application/vnd.oasis.opendocument.graphics", otg: "application/vnd.oasis.opendocument.graphics-template", odi: "application/vnd.oasis.opendocument.image", oti: "application/vnd.oasis.opendocument.image-template", odp: "application/vnd.oasis.opendocument.presentation", otp: "application/vnd.oasis.opendocument.presentation-template", ods: "application/vnd.oasis.opendocument.spreadsheet", ots: "application/vnd.oasis.opendocument.spreadsheet-template", odt: "application/vnd.oasis.opendocument.text", odm: "application/vnd.oasis.opendocument.text-master", ott: "application/vnd.oasis.opendocument.text-template", oth: "application/vnd.oasis.opendocument.text-web", xo: "application/vnd.olpc-sugar", dd2: "application/vnd.oma.dd2+xml", oxt: "application/vnd.openofficeorg.extension", pptx: "application/vnd.openxmlformats-officedocument.presentationml.presentation", sldx: "application/vnd.openxmlformats-officedocument.presentationml.slide", ppsx: "application/vnd.openxmlformats-officedocument.presentationml.slideshow", potx: "application/vnd.openxmlformats-officedocument.presentationml.template", xlsx: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet", xltx: "application/vnd.openxmlformats-officedocument.spreadsheetml.template", docx: "application/vnd.openxmlformats-officedocument.wordprocessingml.document", dotx: "application/vnd.openxmlformats-officedocument.wordprocessingml.template", mgp: "application/vnd.osgeo.mapguide.package", dp: "application/vnd.osgi.dp", esa: "application/vnd.osgi.subsystem", pdb: "application/vnd.palm", pqa: "application/vnd.palm", oprc: "application/vnd.palm", paw: "application/vnd.pawaafile", str: "application/vnd.pg.format", ei6: "application/vnd.pg.osasli", efif: "application/vnd.picsel", wg: "application/vnd.pmi.widget", plf: "application/vnd.pocketlearn", pbd: "application/vnd.powerbuilder6", box: "application/vnd.previewsystems.box", mgz: "application/vnd.proteus.magazine", qps: "application/vnd.publishare-delta-tree", ptid: "application/vnd.pvi.ptid1", qxd: "application/vnd.quark.quarkxpress", qxt: "application/vnd.quark.quarkxpress", qwd: "application/vnd.quark.quarkxpress", qwt: "application/vnd.quark.quarkxpress", qxl: "application/vnd.quark.quarkxpress", qxb: "application/vnd.quark.quarkxpress", bed: "application/vnd.realvnc.bed", mxl: "application/vnd.recordare.musicxml", musicxml: "application/vnd.recordare.musicxml+xml", cryptonote: "application/vnd.rig.cryptonote", cod: "application/vnd.rim.cod", rm: "application/vnd.rn-realmedia", rmvb: "application/vnd.rn-realmedia-vbr", link66: "application/vnd.route66.link66+xml", st: "application/vnd.sailingtracker.track", see: "application/vnd.seemail", sema: "application/vnd.sema", semd: "application/vnd.semd", semf: "application/vnd.semf", ifm: "application/vnd.shana.informed.formdata", itp: "application/vnd.shana.informed.formtemplate", iif: "application/vnd.shana.informed.interchange", ipk: "application/vnd.shana.informed.package", twd: "application/vnd.simtech-mindmapper", twds: "application/vnd.simtech-mindmapper", mmf: "application/vnd.smaf", teacher: "application/vnd.smart.teacher", sdkm: "application/vnd.solent.sdkm+xml", sdkd: "application/vnd.solent.sdkm+xml", dxp: "application/vnd.spotfire.dxp", sfs: "application/vnd.spotfire.sfs", sdc: "application/vnd.stardivision.calc", sda: "application/vnd.stardivision.draw", sdd: "application/vnd.stardivision.impress", smf: "application/vnd.stardivision.math", sdw: "application/vnd.stardivision.writer", vor: "application/vnd.stardivision.writer", sgl: "application/vnd.stardivision.writer-global", smzip: "application/vnd.stepmania.package", sm: "application/vnd.stepmania.stepchart", sxc: "application/vnd.sun.xml.calc", stc: "application/vnd.sun.xml.calc.template", sxd: "application/vnd.sun.xml.draw", std: "application/vnd.sun.xml.draw.template", sxi: "application/vnd.sun.xml.impress", sti: "application/vnd.sun.xml.impress.template", sxm: "application/vnd.sun.xml.math", sxw: "application/vnd.sun.xml.writer", sxg: "application/vnd.sun.xml.writer.global", stw: "application/vnd.sun.xml.writer.template", sus: "application/vnd.sus-calendar", susp: "application/vnd.sus-calendar", svd: "application/vnd.svd", sis: "application/vnd.symbian.install", sisx: "application/vnd.symbian.install", xsm: "application/vnd.syncml+xml", bdm: "application/vnd.syncml.dm+wbxml", xdm: "application/vnd.syncml.dm+xml", tao: "application/vnd.tao.intent-module-archive", pcap: "application/vnd.tcpdump.pcap", cap: "application/vnd.tcpdump.pcap", dmp: "application/vnd.tcpdump.pcap", tmo: "application/vnd.tmobile-livetv", tpt: "application/vnd.trid.tpt", mxs: "application/vnd.triscape.mxs", tra: "application/vnd.trueapp", ufd: "application/vnd.ufdl", ufdl: "application/vnd.ufdl", utz: "application/vnd.uiq.theme", umj: "application/vnd.umajin", unityweb: "application/vnd.unity", uoml: "application/vnd.uoml+xml", vcx: "application/vnd.vcx", vsd: "application/vnd.visio", vst: "application/vnd.visio", vss: "application/vnd.visio", vsw: "application/vnd.visio", vis: "application/vnd.visionary", vsf: "application/vnd.vsf", wbxml: "application/vnd.wap.wbxml", wmlc: "application/vnd.wap.wmlc", wmlsc: "application/vnd.wap.wmlscriptc", wtb: "application/vnd.webturbo", nbp: "application/vnd.wolfram.player", wpd: "application/vnd.wordperfect", wqd: "application/vnd.wqd", stf: "application/vnd.wt.stf", xar: "application/vnd.xara", xfdl: "application/vnd.xfdl", hvd: "application/vnd.yamaha.hv-dic", hvs: "application/vnd.yamaha.hv-script", hvp: "application/vnd.yamaha.hv-voice", osf: "application/vnd.yamaha.openscoreformat", osfpvg: "application/vnd.yamaha.openscoreformat.osfpvg+xml", saf: "application/vnd.yamaha.smaf-audio", spf: "application/vnd.yamaha.smaf-phrase", cmp: "application/vnd.yellowriver-custom-menu", zir: "application/vnd.zul", zirz: "application/vnd.zul", zaz: "application/vnd.zzazz.deck+xml", vxml: "application/voicexml+xml", wgt: "application/widget", hlp: "application/winhlp", wsdl: "application/wsdl+xml", wspolicy: "application/wspolicy+xml", "7z": "application/x-7z-compressed", abw: "application/x-abiword", ace: "application/x-ace-compressed", dmg: "application/x-apple-diskimage", aab: "application/x-authorware-bin", x32: "application/x-authorware-bin", u32: "application/x-authorware-bin", vox: "application/x-authorware-bin", aam: "application/x-authorware-map", aas: "application/x-authorware-seg", bcpio: "application/x-bcpio", torrent: "application/x-bittorrent", blb: "application/x-blorb", blorb: "application/x-blorb", bz: "application/x-bzip", bz2: "application/x-bzip2", boz: "application/x-bzip2", cbr: "application/x-cbr", cba: "application/x-cbr", cbt: "application/x-cbr", cbz: "application/x-cbr", cb7: "application/x-cbr", vcd: "application/x-cdlink", cfs: "application/x-cfs-compressed", chat: "application/x-chat", pgn: "application/x-chess-pgn", nsc: "application/x-conference", cpio: "application/x-cpio", csh: "application/x-csh", deb: "application/x-debian-package", udeb: "application/x-debian-package", dgc: "application/x-dgc-compressed", dir: "application/x-director", dcr: "application/x-director", dxr: "application/x-director", cst: "application/x-director", cct: "application/x-director", cxt: "application/x-director", w3d: "application/x-director", fgd: "application/x-director", swa: "application/x-director", wad: "application/x-doom", ncx: "application/x-dtbncx+xml", dtb: "application/x-dtbook+xml", res: "application/x-dtbresource+xml", dvi: "application/x-dvi", evy: "application/x-envoy", eva: "application/x-eva", bdf: "application/x-font-bdf", gsf: "application/x-font-ghostscript", psf: "application/x-font-linux-psf", otf: "application/x-font-otf", pcf: "application/x-font-pcf", snf: "application/x-font-snf", ttf: "application/x-font-ttf", ttc: "application/x-font-ttf", pfa: "application/x-font-type1", pfb: "application/x-font-type1", pfm: "application/x-font-type1", afm: "application/x-font-type1", woff: "application/x-font-woff", arc: "application/x-freearc", spl: "application/x-futuresplash", gca: "application/x-gca-compressed", ulx: "application/x-glulx", gnumeric: "application/x-gnumeric", gramps: "application/x-gramps-xml", gtar: "application/x-gtar", tbz: "application/x-gtar", tgz: "application/x-gtar", "tar.gz": "application/x-gtar", tbz2: "application/x-gtar", "tar.bz2": "application/x-gtar", gz: "application/x-gzip", hdf: "application/x-hdf", install: "application/x-install-instructions", iso: "application/x-iso9660-image", jnlp: "application/x-java-jnlp-file", latex: "application/x-latex", lzh: "application/x-lzh-compressed", lha: "application/x-lzh-compressed", mie: "application/x-mie", prc: "application/x-mobipocket-ebook", mobi: "application/x-mobipocket-ebook", application: "application/x-ms-application", lnk: "application/x-ms-shortcut", wmd: "application/x-ms-wmd", xbap: "application/x-ms-xbap", mdb: "application/x-msaccess", obd: "application/x-msbinder", crd: "application/x-mscardfile", clp: "application/x-msclip", exe: "application/x-msdownload", dll: "application/x-msdownload", com: "application/x-msdownload", bat: "application/x-msdownload", msi: "application/x-msdownload", mvb: "application/x-msmediaview", m13: "application/x-msmediaview", m14: "application/x-msmediaview", wmf: "application/x-msmetafile", wmz: "application/x-msmetafile", emf: "application/x-msmetafile", emz: "application/x-msmetafile", mny: "application/x-msmoney", pub: "application/x-mspublisher", scd: "application/x-msschedule", trm: "application/x-msterminal", wri: "application/x-mswrite", nc: "application/x-netcdf", cdf: "application/x-netcdf", nzb: "application/x-nzb", p12: "application/x-pkcs12", pfx: "application/x-pkcs12", p7b: "application/x-pkcs7-certificates", spc: "application/x-pkcs7-certificates", p7r: "application/x-pkcs7-certreqresp", rar: "application/x-rar-compressed", ris: "application/x-research-info-systems", sh: "application/x-sh", shar: "application/x-shar", swf: "application/x-shockwave-flash", xap: "application/x-silverlight-app", sql: "application/x-sql", sit: "application/x-stuffit", sitx: "application/x-stuffitx", srt: "application/x-subrip", sv4cpio: "application/x-sv4cpio", sv4crc: "application/x-sv4crc", t3: "application/x-t3vm-image", gam: "application/x-tads", tar: "application/x-tar", tcl: "application/x-tcl", tex: "application/x-tex", tfm: "application/x-tex-tfm", texinfo: "application/x-texinfo", texi: "application/x-texinfo", obj: "application/x-tgif", ustar: "application/x-ustar", src: "application/x-wais-source", der: "application/x-x509-ca-cert", crt: "application/x-x509-ca-cert", fig: "application/x-xfig", xlf: "application/x-xliff+xml", xpi: "application/x-xpinstall", xz: "application/x-xz", z1: "application/x-zmachine", z2: "application/x-zmachine", z3: "application/x-zmachine", z4: "application/x-zmachine", z5: "application/x-zmachine", z6: "application/x-zmachine", z7: "application/x-zmachine", z8: "application/x-zmachine", xaml: "application/xaml+xml", xdf: "application/xcap-diff+xml", xenc: "application/xenc+xml", xhtml: "application/xhtml+xml", xht: "application/xhtml+xml", xml: "application/xml", xsl: "application/xml", dtd: "application/xml-dtd", xop: "application/xop+xml", xpl: "application/xproc+xml", xslt: "application/xslt+xml", xspf: "application/xspf+xml", mxml: "application/xv+xml", xhvml: "application/xv+xml", xvml: "application/xv+xml", xvm: "application/xv+xml", yang: "application/yang", yin: "application/yin+xml", zip: "application/zip", adp: "audio/adpcm", au: "audio/basic", snd: "audio/basic", mid: "audio/midi", midi: "audio/midi", kar: "audio/midi", rmi: "audio/midi", mp4a: "audio/mp4", mpga: "audio/mpeg", mp2: "audio/mpeg", mp2a: "audio/mpeg", mp3: "audio/mpeg", m2a: "audio/mpeg", m3a: "audio/mpeg", oga: "audio/ogg", ogg: "audio/ogg", spx: "audio/ogg", s3m: "audio/s3m", sil: "audio/silk", uva: "audio/vnd.dece.audio", uvva: "audio/vnd.dece.audio", eol: "audio/vnd.digital-winds", dra: "audio/vnd.dra", dts: "audio/vnd.dts", dtshd: "audio/vnd.dts.hd", lvp: "audio/vnd.lucent.voice", pya: "audio/vnd.ms-playready.media.pya", ecelp4800: "audio/vnd.nuera.ecelp4800", ecelp7470: "audio/vnd.nuera.ecelp7470", ecelp9600: "audio/vnd.nuera.ecelp9600", rip: "audio/vnd.rip", weba: "audio/webm", aac: "audio/x-aac", aif: "audio/x-aiff", aiff: "audio/x-aiff", aifc: "audio/x-aiff", caf: "audio/x-caf", flac: "audio/x-flac", mka: "audio/x-matroska", m3u: "audio/x-mpegurl", wax: "audio/x-ms-wax", wma: "audio/x-ms-wma", ram: "audio/x-pn-realaudio", ra: "audio/x-pn-realaudio", rmp: "audio/x-pn-realaudio-plugin", wav: "audio/x-wav", xm: "audio/xm", cdx: "chemical/x-cdx", cif: "chemical/x-cif", cmdf: "chemical/x-cmdf", cml: "chemical/x-cml", csml: "chemical/x-csml", xyz: "chemical/x-xyz", bmp: "image/bmp", cgm: "image/cgm", g3: "image/g3fax", gif: "image/gif", ief: "image/ief", jpeg: "image/jpeg", jpg: "image/jpeg", jpe: "image/jpeg", ktx: "image/ktx", png: "image/png", btif: "image/prs.btif", sgi: "image/sgi", svg: "image/svg+xml", svgz: "image/svg+xml", tiff: "image/tiff", tif: "image/tiff", psd: "image/vnd.adobe.photoshop", uvi: "image/vnd.dece.graphic", uvvi: "image/vnd.dece.graphic", uvg: "image/vnd.dece.graphic", uvvg: "image/vnd.dece.graphic", sub: "image/vnd.dvb.subtitle", djvu: "image/vnd.djvu", djv: "image/vnd.djvu", dwg: "image/vnd.dwg", dxf: "image/vnd.dxf", fbs: "image/vnd.fastbidsheet", fpx: "image/vnd.fpx", fst: "image/vnd.fst", mmr: "image/vnd.fujixerox.edmics-mmr", rlc: "image/vnd.fujixerox.edmics-rlc", mdi: "image/vnd.ms-modi", wdp: "image/vnd.ms-photo", npx: "image/vnd.net-fpx", wbmp: "image/vnd.wap.wbmp", xif: "image/vnd.xiff", webp: "image/webp", "3ds": "image/x-3ds", ras: "image/x-cmu-raster", cmx: "image/x-cmx", fh: "image/x-freehand", fhc: "image/x-freehand", fh4: "image/x-freehand", fh5: "image/x-freehand", fh7: "image/x-freehand", ico: "image/x-icon", sid: "image/x-mrsid-image",
        pcx: "image/x-pcx", pic: "image/x-pict", pct: "image/x-pict", pnm: "image/x-portable-anymap", pbm: "image/x-portable-bitmap", pgm: "image/x-portable-graymap", ppm: "image/x-portable-pixmap", rgb: "image/x-rgb", tga: "image/x-tga", xbm: "image/x-xbitmap", xpm: "image/x-xpixmap", xwd: "image/x-xwindowdump", eml: "message/rfc822", mime: "message/rfc822", igs: "model/iges", iges: "model/iges", msh: "model/mesh", mesh: "model/mesh", silo: "model/mesh", dae: "model/vnd.collada+xml", dwf: "model/vnd.dwf", gdl: "model/vnd.gdl", gtw: "model/vnd.gtw", mts: "model/vnd.mts", vtu: "model/vnd.vtu", wrl: "model/vrml", vrml: "model/vrml", x3db: "model/x3d+binary", x3dbz: "model/x3d+binary", x3dv: "model/x3d+vrml", x3dvz: "model/x3d+vrml", x3d: "model/x3d+xml", x3dz: "model/x3d+xml", appcache: "text/cache-manifest", ics: "text/calendar", ifb: "text/calendar", css: "text/css", csv: "text/csv", html: "text/html", htm: "text/html", n3: "text/n3", txt: "text/plain", text: "text/plain", conf: "text/plain", def: "text/plain", list: "text/plain", log: "text/plain", "in": "text/plain", dsc: "text/prs.lines.tag", rtx: "text/richtext", sgml: "text/sgml", sgm: "text/sgml", tsv: "text/tab-separated-values", t: "text/troff", tr: "text/troff", roff: "text/troff", man: "text/troff", me: "text/troff", ms: "text/troff", ttl: "text/turtle", uri: "text/uri-list", uris: "text/uri-list", urls: "text/uri-list", vcard: "text/vcard", curl: "text/vnd.curl", dcurl: "text/vnd.curl.dcurl", scurl: "text/vnd.curl.scurl", mcurl: "text/vnd.curl.mcurl", fly: "text/vnd.fly", flx: "text/vnd.fmi.flexstor", gv: "text/vnd.graphviz", "3dml": "text/vnd.in3d.3dml", spot: "text/vnd.in3d.spot", jad: "text/vnd.sun.j2me.app-descriptor", wml: "text/vnd.wap.wml", wmls: "text/vnd.wap.wmlscript", s: "text/x-asm", asm: "text/x-asm", c: "text/x-c", cc: "text/x-c", cxx: "text/x-c", cpp: "text/x-c", h: "text/x-c", hh: "text/x-c", dic: "text/x-c", f: "text/x-fortran", "for": "text/x-fortran", f77: "text/x-fortran", f90: "text/x-fortran", java: "text/x-java-source", opml: "text/x-opml", p: "text/x-pascal", pas: "text/x-pascal", nfo: "text/x-nfo", etx: "text/x-setext", sfv: "text/x-sfv", uu: "text/x-uuencode", vcs: "text/x-vcalendar", vcf: "text/x-vcard", "3gp": "video/3gpp", "3g2": "video/3gpp2", h261: "video/h261", h263: "video/h263", h264: "video/h264", jpgv: "video/jpeg", jpm: "video/jpm", jpgm: "video/jpm", mj2: "video/mj2", mjp2: "video/mj2", mp4: "video/mp4", mp4v: "video/mp4", mpg4: "video/mp4", mpeg: "video/mpeg", mpg: "video/mpeg", mpe: "video/mpeg", m1v: "video/mpeg", m2v: "video/mpeg", ogv: "video/ogg", qt: "video/quicktime", mov: "video/quicktime", uvh: "video/vnd.dece.hd", uvvh: "video/vnd.dece.hd", uvm: "video/vnd.dece.mobile", uvvm: "video/vnd.dece.mobile", uvp: "video/vnd.dece.pd", uvvp: "video/vnd.dece.pd", uvs: "video/vnd.dece.sd", uvvs: "video/vnd.dece.sd", uvv: "video/vnd.dece.video", uvvv: "video/vnd.dece.video", dvb: "video/vnd.dvb.file", fvt: "video/vnd.fvt", mxu: "video/vnd.mpegurl", m4u: "video/vnd.mpegurl", pyv: "video/vnd.ms-playready.media.pyv", uvu: "video/vnd.uvvu.mp4", uvvu: "video/vnd.uvvu.mp4", viv: "video/vnd.vivo", webm: "video/webm", f4v: "video/x-f4v", fli: "video/x-fli", flv: "video/x-flv", m4v: "video/x-m4v", mkv: "video/x-matroska", mk3d: "video/x-matroska", mks: "video/x-matroska", mng: "video/x-mng", asf: "video/x-ms-asf", asx: "video/x-ms-asf", vob: "video/x-ms-vob", wm: "video/x-ms-wm", wmv: "video/x-ms-wmv", wmx: "video/x-ms-wmx", wvx: "video/x-ms-wvx", avi: "video/x-msvideo", movie: "video/x-sgi-movie", smv: "video/x-smv", ice: "x-conference/x-cooltalk" };n.guess = function (e) {
        return e && e.length ? ("." === e[0] && (e = e.substr(1)), r[e.toLowerCase()] || "application/octet-stream") : "application/octet-stream";
      };
    }, {}], 205: [function (e, t, n) {
      (function (n) {
        function r(e) {
          this._boundary = e, this._parts = [];
        }var i = e("util"),
            o = e("underscore");r.prototype.addPart = function (e, t) {
          var r = [],
              a = i.format('--%s\r\nContent-Disposition: form-data; name="%s"%s\r\n\r\n', this._boundary, e, "");if (r.push(new n(a)), n.isBuffer(t)) r.push(t), r.push(new n("\r\n"));else {
            if (!o.isString(t)) throw new Error("Invalid data type.");r.push(new n(t + "\r\n"));
          }this._parts.push(n.concat(r));
        }, r.prototype.encode = function () {
          return n.concat([n.concat(this._parts), new n(i.format("--%s--", this._boundary))]);
        }, t.exports = r;
      }).call(this, e("buffer").Buffer);
    }, { buffer: 179, underscore: 187, util: 176 }], 206: [function (e, t, n) {
      (function (n) {
        function r(e) {
          a.call(this, e, "face", !0);
        }var i = e("util"),
            o = e("debug")("bce-sdk:OCRClient"),
            a = e("./bce_base_client");i.inherits(r, a), r.prototype._apiCall = function (e, t, r, i) {
          o("url = %j, data = %j, language = %j, options = %j", e, t, r, i), i = i || {};var a = {};return a = n.isBuffer(t) ? { base64: t.toString("base64") } : { bosPath: t }, r && (a.language = r), this.sendRequest("POST", e, { body: JSON.stringify(a), config: i.config });
        }, r.prototype.allText = function (e, t, n) {
          return this._apiCall("/v1/recognize/text", e, t, n);
        }, r.prototype.oneLine = function (e, t, n) {
          return this._apiCall("/v1/recognize/line", e, t, n);
        }, r.prototype.singleCharacter = function (e, t, n) {
          return this._apiCall("/v1/recognize/character", e, t, n);
        }, t.exports = r;
      }).call(this, { isBuffer: e("/Volumes/HDD/Users/leeight/local/case/inf/bos/bce-sdk-js/node_modules/browserify/node_modules/insert-module-globals/node_modules/is-buffer/index.js") });
    }, { "./bce_base_client": 191, "/Volumes/HDD/Users/leeight/local/case/inf/bos/bce-sdk-js/node_modules/browserify/node_modules/insert-module-globals/node_modules/is-buffer/index.js": 153, debug: 183, util: 176 }], 207: [function (e, t, n) {
      function r(e, t, n) {
        s.call(this, e, "qns", !0), this._account = t, this._name = n;
      }function i(e, t, n) {
        s.call(this, e, "qns", !0), this._account = t, this._name = n;
      }var o = e("util"),
          a = e("underscore"),
          s = e("./bce_base_client");o.inherits(r, s), r.prototype._buildUrl = function () {
        var e = "/v1/" + this._account + "/topic/" + this._name;return e;
      }, r.prototype.create = function (e) {
        e = e || {};var t = a.pick(e, "delayInSeconds", "maximumMessageSizeInBytes", "messageRetentionPeriodInSeconds");return this.sendRequest("PUT", this._buildUrl(), { body: JSON.stringify(t) });
      }, r.prototype.remove = function () {
        return this.sendRequest("DELETE", this._buildUrl());
      }, r.prototype.get = function () {
        return this.sendRequest("GET", this._buildUrl());
      }, r.prototype.update = function (e) {
        e = e || {};var t = a.pick(e, "delayInSeconds", "maximumMessageSizeInBytes", "messageRetentionPeriodInSeconds");return this.sendRequest("PUT", this._buildUrl(), { headers: { "If-Match": "*" }, body: JSON.stringify(t) });
      }, r.prototype.sendMessages = function (e) {
        var t = this._buildUrl() + "/message";return e = a.map(e, function (e) {
          return a.isString(e) ? { messageBody: e } : e;
        }), this.sendRequest("POST", t, { body: JSON.stringify({ messages: e }) });
      }, r.prototype.list = function (e) {
        e = e || {};var t = a.pick(e, "marker", "maxRecords"),
            n = "/v1/" + this._account + "/topic";return this.sendRequest("GET", n, { params: t });
      }, r.prototype.createSubscription = function (e, t) {
        t = t || {};var n = new i(this.config, this._account, e);return null == t.topic && (t.topic = this._name), n.create(t);
      }, o.inherits(i, s), i.prototype._buildUrl = function () {
        var e = "/v1/" + this._account + "/subscription/" + this._name;return e;
      }, i.prototype.create = function (e) {
        e = e || {};var t = a.pick(e, "receiveMessageWaitTimeInSeconds", "topic", "visibilityTimeoutInSeconds", "pushConfig");return this.sendRequest("PUT", this._buildUrl(), { body: JSON.stringify(t) });
      }, i.prototype.remove = function () {
        return this.sendRequest("DELETE", this._buildUrl());
      }, i.prototype.get = function () {
        return this.sendRequest("GET", this._buildUrl());
      }, i.prototype.update = function (e) {
        e = e || {};var t = a.pick(e, "receiveMessageWaitTimeInSeconds", "visibilityTimeoutInSeconds");return this.sendRequest("PUT", this._buildUrl(), { headers: { "If-Match": "*" }, body: JSON.stringify(t) });
      }, i.prototype.receiveMessages = function (e) {
        e = e || {};var t = a.pick(e, "waitInSeconds", "maxMessages", "peek"),
            n = this._buildUrl() + "/message";return this.sendRequest("GET", n, { body: JSON.stringify(t) });
      }, i.prototype.deleteMessage = function (e) {
        var t = this._buildUrl() + "/message";return this.sendRequest("DELETE", t, { params: { receiptHandle: e } });
      }, i.prototype.changeVisibility = function (e, t) {
        var n = this._buildUrl() + "/message";return this.sendRequest("PUT", n, { params: { receiptHandle: e, visibilityTimeoutInSeconds: t } });
      }, i.prototype.list = function (e) {
        e = e || {};var t = a.pick(e, "marker", "maxRecords"),
            n = "/v1/" + this._account + "/subscription";return this.sendRequest("GET", n, { params: t });
      }, n.Topic = r, n.Subscription = i;
    }, { "./bce_base_client": 191, underscore: 187, util: 176 }], 208: [function (e, t, n) {
      function r(e) {
        s.call(this, e, "ses", !0);
      }var i = e("fs"),
          o = e("path"),
          a = e("util"),
          s = e("./bce_base_client");a.inherits(r, s), r.prototype.addVerifiedEmail = function (e) {
        var t = "/v1/verifiedEmail/" + encodeURIComponent(e);return this.sendRequest("PUT", t);
      }, r.prototype.getAllVerifiedEmails = function () {
        var e = "/v1/verifiedEmail";return this.sendRequest("GET", e);
      }, r.prototype.getVerifiedEmail = function (e) {
        var t = "/v1/verifiedEmail/" + encodeURIComponent(e);return this.sendRequest("GET", t);
      }, r.prototype.deleteVerifiedEmail = function (e) {
        var t = "/v1/verifiedEmail/" + encodeURIComponent(e);return this.sendRequest("DELETE", t);
      }, r.prototype.getQuota = function () {
        var e = "/v1/quota";return this.sendRequest("GET", e);
      }, r.prototype.setQuota = function (e) {
        var t = "/v1/quota";return Object.keys(e).forEach(function (t) {
          var n = e[t];e[t] = n.toString();
        }), this.sendRequest("PUT", t, { body: JSON.stringify(e) });
      }, r.prototype.sendMail = function (e) {
        var t = e.from || "",
            n = e.to || [];"string" == typeof n && (n = [n]);var r = e.cc || [];"string" == typeof r && (r = [r]);var a = e.bcc || [];"string" == typeof a && (a = [a]);var s = e.subject,
            c = e.text || "",
            f = e.html || "",
            u = e.attachments || [];u = u.map(function (e) {
          return "string" == typeof e ? { file_name: o.basename(e), file_data: { data: i.readFileSync(e).toString("base64") } } : e;
        });var d = "/v1/email",
            p = JSON.stringify({ mail: { source: { from: t }, destination: { to_addr: n.map(function (e) {
                return { addr: e };
              }), cc_addr: r.map(function (e) {
                return { addr: e };
              }), bcc_addr: a.map(function (e) {
                return { addr: e };
              }) }, subject: { charset: 1, data: s }, priority: 1, message: { text: { charset: 1, data: c }, html: { charset: 1, data: f } }, attachments: u } });return this.sendRequest("POST", d, { body: p });
      }, t.exports = r;
    }, { "./bce_base_client": 191, fs: 3, path: 155, util: 176 }], 209: [function (e, t, n) {
      var r = { "!": "%21", "'": "%27", "(": "%28", ")": "%29", "*": "%2A" };n.normalize = function (e, t) {
        var n = encodeURIComponent(e);return n = n.replace(/[!'\(\)\*]/g, function (e) {
          return r[e];
        }), t === !1 && (n = n.replace(/%2F/gi, "/")), n;
      }, n.trim = function (e) {
        return (e || "").replace(/^\s+|\s+$/g, "");
      };
    }, {}], 210: [function (e, t, n) {
      function r(e) {
        a.call(this, e, "sts", !0);
      }var i = e("util"),
          o = e("underscore"),
          a = e("./bce_base_client");i.inherits(r, a), r.prototype.getSessionToken = function (e, t, n) {
        n = n || {};var r = "";t && (t = o.pick(t, "id", "accessControlList"), t.accessControlList && (t.accessControlList = o.map(t.accessControlList, function (e) {
          return o.pick(e, "eid", "service", "region", "effect", "resource", "permission");
        })), r = JSON.stringify(t));var i = "/v1/sessionToken";return this.sendRequest("POST", i, { config: n.config, params: { durationSeconds: e }, body: r });
      }, t.exports = r;
    }, { "./bce_base_client": 191, underscore: 187, util: 176 }], 211: [function (e, t, n) {
      function r(e) {
        s.call(this, e, "vod", !1), this._mediaId = null, this._sourceBucket = null, this._sourceKey = null, this._host = null;
      }var i = e("util"),
          o = e("underscore"),
          a = e("debug")("bce-sdk:VodClient.Media"),
          s = e("../bce_base_client"),
          c = e("../helper"),
          f = e("./Statistic");i.inherits(r, s), r.prototype.setMediaId = function (e) {
        return this._mediaId = e, this;
      }, r.prototype._buildUrl = function () {
        var e = "/v1/media",
            t = o.toArray(arguments);return t.length && (e += "/" + t.join("/")), e;
      }, r.prototype.apply = function () {
        var e = this._buildUrl(),
            t = { params: { apply: "" } },
            n = this;return this.sendRequest("POST", e, t).then(function (e) {
          return n._mediaId = e.body.mediaId, n._sourceBucket = e.body.sourceBucket, n._sourceKey = e.body.sourceKey, n._host = e.body.host, e;
        });
      }, r.prototype.process = function (e, t) {
        var n = this._buildUrl(this._mediaId),
            r = o.extend({ title: e, description: null, sourceExtension: null, transcodingPresetGroupName: null }, t);return r = o.pick(r, c.omitNull), this.sendRequest("POST", n, { params: { process: "" }, body: JSON.stringify(r) });
      }, r.prototype.disable = function (e) {
        var t = this._buildUrl(e || this._mediaId);return this.sendRequest("PUT", t, { params: { disable: "" } });
      }, r.prototype.resume = function (e) {
        var t = this._buildUrl(e || this._mediaId);return this.sendRequest("PUT", t, { params: { publish: "" } });
      }, r.prototype.remove = function (e) {
        var t = this._buildUrl(e || this._mediaId);return this.sendRequest("DELETE", t);
      }, r.prototype.get = function (e) {
        var t = this._buildUrl(e || this._mediaId);return a("url = %j", t), this.sendRequest("GET", t);
      }, r.prototype.getDownloadUrl = function (e, t) {
        var n = t || 86400,
            r = this._buildUrl(e || this._mediaId);return this.sendRequest("GET", r, { params: { sourcedownload: "", expiredInSeconds: n } });
      }, r.prototype.update = function (e, t) {
        var n = this._buildUrl(this._mediaId),
            r = o.pick({ title: e, description: t }, o.identity);return this.sendRequest("PUT", n, { params: { attributes: "" }, body: JSON.stringify(r) });
      }, r.prototype.stat = function (e) {
        var t = new f(this.config);return t.setMediaId(this._mediaId).stat(e);
      }, r.prototype.list = function (e) {
        var t = this._buildUrl(),
            n = o.extend({ pageSize: 10, pageNo: null, marker: null, maxSize: null, status: null, begin: null, end: null, title: null }, e);return n = o.pick(n, c.omitNull), null != n.marker ? (delete n.pageNo, delete n.pageSize) : n.pageSize && (delete n.marker, delete n.maxSize), a("list params = %j", n), this.sendRequest("GET", t, { params: n });
      }, t.exports = r;
    }, { "../bce_base_client": 191, "../helper": 199, "./Statistic": 215, debug: 183, underscore: 187, util: 176 }], 212: [function (e, t, n) {
      function r(e) {
        a.call(this, e, "vod", !1);
      }var i = e("util"),
          o = e("underscore"),
          a = e("../bce_base_client");i.inherits(r, a), r.prototype._buildUrl = function () {
        var e = "/v1/notification",
            t = o.toArray(arguments);return t.length && (e += "/" + t.join("/")), e;
      }, r.prototype.create = function (e, t) {
        var n = this._buildUrl(),
            r = { name: e, endpoint: t };return this.sendRequest("POST", n, { body: JSON.stringify(r) });
      }, r.prototype.get = function (e) {
        var t = this._buildUrl(e);return this.sendRequest("GET", t);
      }, r.prototype.listAll = function () {
        var e = this._buildUrl();return this.sendRequest("GET", e);
      }, r.prototype.remove = function (e) {
        var t = this._buildUrl(e);return this.sendRequest("DELETE", t);
      }, t.exports = r;
    }, { "../bce_base_client": 191, underscore: 187, util: 176 }], 213: [function (e, t, n) {
      (function (n) {
        function r(e) {
          a.call(this, e, "vod", !1), this._mediaId = null;
        }var i = e("util"),
            o = e("underscore"),
            a = e("../bce_base_client"),
            s = e("../helper");i.inherits(r, a), r.prototype.setMediaId = function (e) {
          return this._mediaId = e, this;
        }, r.prototype._buildUrl = function () {
          var e = "/v1/media",
              t = o.toArray(arguments);return t.length && (e += "/" + t.join("/")), e;
        }, r.prototype.delivery = function (e) {
          var t = this._buildUrl(this._mediaId, "delivery"),
              n = o.pick({ transcodingPresetName: e }, o.identity);return this.sendRequest("GET", t, { params: n }).then(function (e) {
            return e.body.success === !0 && (e.body = e.body.result), e;
          });
        }, r.prototype.code = function (e) {
          var t = this._buildUrl(this._mediaId, "code"),
              r = o.extend({ width: 100, height: 100, autostart: !0, ak: null, transcodingPresetName: null }, e);return r = o.pick(r, s.omitNull), this.sendRequest("GET", t, { params: r }).then(function (e) {
            for (var t = e.body.codes, r = 0; r < t.length; r++) {
              var i = t[r];if ("html" === i.codeType) {
                i.sourceCode = new n(i.sourceCode, "base64").toString("utf-8");break;
              }
            }return e;
          });
        }, t.exports = r;
      }).call(this, e("buffer").Buffer);
    }, { "../bce_base_client": 191, "../helper": 199, buffer: 179, underscore: 187, util: 176 }], 214: [function (e, t, n) {
      function r(e) {
        a.call(this, e, "vod", !1);
      }var i = e("util"),
          o = e("underscore"),
          a = e("../bce_base_client");i.inherits(r, a), r.prototype._buildUrl = function () {
        var e = "/v1/presetgroup",
            t = o.toArray(arguments);return t.length && (e += "/" + t.join("/")), e;
      }, r.prototype.create = function (e) {
        var t = this._buildUrl();return this.sendRequest("POST", t, { body: JSON.stringify(e) });
      }, r.prototype.get = function (e) {
        var t = this._buildUrl(e);return this.sendRequest("GET", t);
      }, r.prototype.listAll = function () {
        var e = this._buildUrl();return this.sendRequest("GET", e);
      }, r.prototype.update = function (e, t) {
        var n = this._buildUrl(e);return this.sendRequest("PUT", n, { body: JSON.stringify(t) });
      }, r.prototype.remove = function (e) {
        var t = this._buildUrl(e);return this.sendRequest("DELETE", t);
      }, t.exports = r;
    }, { "../bce_base_client": 191, underscore: 187, util: 176 }], 215: [function (e, t, n) {
      function r(e) {
        s.call(this, e, "vod", !1), this._mediaId = null;
      }var i = e("util"),
          o = e("underscore"),
          a = e("debug")("bce-sdk:VodClient.Statistic"),
          s = e("../bce_base_client"),
          c = e("../helper");i.inherits(r, s), r.prototype.setMediaId = function (e) {
        return this._mediaId = e, this;
      }, r.prototype._buildUrl = function () {
        var e = "/v1/statistic",
            t = o.toArray(arguments);return t.length && (e += "/" + t.join("/")), e;
      }, r.prototype.stat = function (e) {
        var t = this._buildUrl("media", this._mediaId),
            n = o.pick(o.extend({ startTime: null, endTime: null, aggregate: !0 }, e), c.omitNull);return a("stat.params = %j", n), this.sendRequest("GET", t, { params: n });
      }, t.exports = r;
    }, { "../bce_base_client": 191, "../helper": 199, debug: 183, underscore: 187, util: 176 }], 216: [function (e, t, n) {
      function r(e) {
        a.call(this, e, "vod", !1);
      }var i = e("util"),
          o = e("underscore"),
          a = e("../bce_base_client");i.inherits(r, a), r.prototype._buildUrl = function () {
        var e = "/v1/strategygroup",
            t = o.toArray(arguments);return t.length && (e += "/" + t.join("/")), e;
      }, r.prototype.get = function (e) {
        var t = this._buildUrl(e);return this.sendRequest("GET", t);
      }, r.prototype.listAll = function () {
        var e = this._buildUrl();return this.sendRequest("GET", e);
      }, r.prototype.update = function (e, t) {
        var n = this._buildUrl(e);return this.sendRequest("PUT", n, { body: JSON.stringify(t) });
      }, t.exports = r;
    }, { "../bce_base_client": 191, underscore: 187, util: 176 }], 217: [function (e, t, n) {
      function r(e) {
        s.call(this, e, "vod", !0);
      }var i = e("util"),
          o = e("underscore"),
          a = e("url"),
          s = e("./bce_base_client"),
          c = e("./bos_client"),
          f = e("./helper"),
          u = e("./vod/Media"),
          d = e("./vod/Notification"),
          p = e("./vod/Player"),
          h = e("./vod/PresetGroup"),
          l = e("./vod/Statistic"),
          b = e("./vod/StrategyGroup");i.inherits(r, s), r.prototype.createMediaResource = function (e, t, n, r) {
        var i = this,
            s = a.parse(this.config.endpoint).protocol || "https:",
            d = new u(this.config);return d.apply().then(function (e) {
          var t = new c({ endpoint: s + "//" + e.body.host, credentials: i.config.credentials, sessionToken: i.config.sessionToken });return t.on("progress", function (e) {
            i.emit("progress", e);
          }), f.upload(t, e.body.sourceBucket, e.body.sourceKey, n, r);
        }).then(function () {
          return d.process(e, o.extend({ description: t }, r));
        });
      }, r.prototype.getMediaResource = function (e) {
        return new u(this.config).setMediaId(e).get();
      }, r.prototype.listMediaResource = function (e) {
        return new u(this.config).list(e);
      }, r.prototype.listMediaResources = function (e) {
        return this.listMediaResource(e);
      }, r.prototype.updateMediaResource = function (e, t, n) {
        return new u(this.config).setMediaId(e).update(t, n);
      }, r.prototype.stopMediaResource = function (e, t) {
        return new u(this.config).setMediaId(e).disable();
      }, r.prototype.publishMediaResource = function (e, t) {
        return new u(this.config).setMediaId(e).resume();
      }, r.prototype.deleteMediaResource = function (e, t) {
        return new u(this.config).setMediaId(e).remove();
      }, r.prototype.getPlayableUrl = function (e, t) {
        return new p(this.config).setMediaId(e).delivery(t);
      }, r.prototype.getDownloadUrl = function (e, t) {
        return new u(this.config).getDownloadUrl(e, t);
      }, r.prototype.getPlayerCode = function (e, t, n, r, i) {
        return new p(this.config).setMediaId(e).code(o.extend({ ak: this.config.credentials.ak, width: t, height: n, autostart: r }, i));
      }, r.prototype._generateMediaId = function () {
        return new u(this.config).apply();
      }, r.prototype._createMediaResource = function (e, t, n, r) {
        return new u(this.config).setMediaId(e).process(t, o.extend({ description: n }, r));
      }, r.Media = u, r.Notification = d, r.Player = p, r.PresetGroup = h, r.Statistic = l, r.StrategyGroup = b, t.exports = r;
    }, { "./bce_base_client": 191, "./bos_client": 193, "./helper": 199, "./vod/Media": 211, "./vod/Notification": 212, "./vod/Player": 213, "./vod/PresetGroup": 214, "./vod/Statistic": 215, "./vod/StrategyGroup": 216, underscore: 187, url: 174, util: 176 }], 218: [function (e, t, n) {
      (function (n) {
        function r() {
          i.Writable.call(this), this.store = new n("");
        }var i = e("stream"),
            o = e("util");o.inherits(r, i.Writable), r.prototype._write = function (e, t, r) {
          var i = n.isBuffer(e) ? e : new n(e, t);this.store = n.concat([this.store, i]), r();
        }, t.exports = r;
      }).call(this, e("buffer").Buffer);
    }, { buffer: 179, stream: 172, util: 176 }] }, {}, [1])(1);
});
},{"indexof":6}],2:[function(require,module,exports) {
'use strict';

var _baidubceSdkBundle = require('./src/bower_components/bce-sdk-js/baidubce-sdk.bundle.min');

var _baidubceSdkBundle2 = _interopRequireDefault(_baidubceSdkBundle);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var endpoint = 'https://fog-pub-cfz.gz.bcebos.com';
var bucket = 'fog-pub-cfz';
var tokenUrl = 'https://cnapitest.fogcloud.io/get_bos_sign/';
var client = new _baidubceSdkBundle2.default.BosClient({
    endpoint: endpoint
});

client.createSignature = function (_, httpMethod, path, params, headers) {
    var deferred = _baidubceSdkBundle2.default.Q.defer();
    $.ajax({
        url: tokenUrl,
        dataType: 'json',
        method: 'get',
        data: {
            fog_token: 'ut 16094aae6bf09f16f6a1617b5869f0a0078f170a',
            httpMethod: httpMethod,
            path: path,
            params: JSON.stringify(params || {}),
            headers: JSON.stringify(headers || {})
        },
        success: function success(payload) {
            if (payload.statusCode === 200 && payload.signature) {
                deferred.resolve(payload.signature, payload.xbceDate);
            } else {
                deferred.reject(new Error('createSignature failed, statusCode = ' + payload.statusCode));
            }
        }
    });
    return deferred.promise;
};
$('#upload').on('change', function (evt) {
    var file = evt.target.files[0];
    var key = file.name;
    var blob = file;
    var id = +new Date();

    var ext = key.split(/\./g).pop();
    var mimeType = _baidubceSdkBundle2.default.MimeType.guess(ext);
    if (/^text\//.test(mimeType)) {
        mimeType += '; charset=UTF-8';
    }
    var options = {
        'Content-Type': mimeType
    };

    // 以下逻辑与基本示例中的相同
    var promise = client.putObjectFromBlob(bucket, key, blob, options);
    client.on('progress', function (evt) {
        // 上传中
        console.log(evt);
    });
    promise.then(function (res) {
        // 上传成功
        console.log(res, url);
    }).catch(function (err) {
        // 上传失败
        console.log(err);
    });
});
},{"./src/bower_components/bce-sdk-js/baidubce-sdk.bundle.min":3}],12:[function(require,module,exports) {

var global = (1, eval)('this');
var OldModule = module.bundle.Module;
function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    accept: function (fn) {
      this._acceptCallback = fn || function () {};
    },
    dispose: function (fn) {
      this._disposeCallback = fn;
    }
  };
}

module.bundle.Module = Module;

var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = '' || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + '52561' + '/');
  ws.onmessage = function (event) {
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      data.assets.forEach(function (asset) {
        hmrApply(global.require, asset);
      });

      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          hmrAccept(global.require, asset.id);
        }
      });
    }

    if (data.type === 'reload') {
      ws.close();
      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + 'data.error.stack');
    }
  };
}

function getParents(bundle, id) {
  var modules = bundle.modules;
  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];
      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(+k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;
  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAccept(bundle, id) {
  var modules = bundle.modules;
  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAccept(bundle.parent, id);
  }

  var cached = bundle.cache[id];
  if (cached && cached.hot._disposeCallback) {
    cached.hot._disposeCallback();
  }

  delete bundle.cache[id];
  bundle(id);

  cached = bundle.cache[id];
  if (cached && cached.hot && cached.hot._acceptCallback) {
    cached.hot._acceptCallback();
    return true;
  }

  return getParents(global.require, id).some(function (id) {
    return hmrAccept(global.require, id);
  });
}
},{}]},{},[12,2])
//# sourceMappingURL=/dist/da88ebd5beeb84ee4e85af8621c2674b.map