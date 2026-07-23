(function () {
  const t = document.createElement("link").relList;
  if (t && t.supports && t.supports("modulepreload")) return;
  for (const i of document.querySelectorAll('link[rel="modulepreload"]')) r(i);
  new MutationObserver((i) => {
    for (const s of i)
      if (s.type === "childList")
        for (const o of s.addedNodes)
          o.tagName === "LINK" && o.rel === "modulepreload" && r(o);
  }).observe(document, { childList: !0, subtree: !0 });
  function n(i) {
    const s = {};
    return (
      i.integrity && (s.integrity = i.integrity),
      i.referrerPolicy && (s.referrerPolicy = i.referrerPolicy),
      i.crossOrigin === "use-credentials"
        ? (s.credentials = "include")
        : i.crossOrigin === "anonymous"
          ? (s.credentials = "omit")
          : (s.credentials = "same-origin"),
      s
    );
  }
  function r(i) {
    if (i.ep) return;
    i.ep = !0;
    const s = n(i);
    fetch(i.href, s);
  }
})();
function ly(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default")
    ? e.default
    : e;
}
var ad = { exports: {} },
  _s = {},
  ld = { exports: {} },
  _ = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var ei = Symbol.for("react.element"),
  uy = Symbol.for("react.portal"),
  cy = Symbol.for("react.fragment"),
  fy = Symbol.for("react.strict_mode"),
  dy = Symbol.for("react.profiler"),
  hy = Symbol.for("react.provider"),
  py = Symbol.for("react.context"),
  my = Symbol.for("react.forward_ref"),
  yy = Symbol.for("react.suspense"),
  gy = Symbol.for("react.memo"),
  vy = Symbol.for("react.lazy"),
  Vu = Symbol.iterator;
function xy(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (Vu && e[Vu]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var ud = {
    isMounted: function () {
      return !1;
    },
    enqueueForceUpdate: function () {},
    enqueueReplaceState: function () {},
    enqueueSetState: function () {},
  },
  cd = Object.assign,
  fd = {};
function qn(e, t, n) {
  ((this.props = e),
    (this.context = t),
    (this.refs = fd),
    (this.updater = n || ud));
}
qn.prototype.isReactComponent = {};
qn.prototype.setState = function (e, t) {
  if (typeof e != "object" && typeof e != "function" && e != null)
    throw Error(
      "setState(...): takes an object of state variables to update or a function which returns an object of state variables.",
    );
  this.updater.enqueueSetState(this, e, t, "setState");
};
qn.prototype.forceUpdate = function (e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function dd() {}
dd.prototype = qn.prototype;
function cl(e, t, n) {
  ((this.props = e),
    (this.context = t),
    (this.refs = fd),
    (this.updater = n || ud));
}
var fl = (cl.prototype = new dd());
fl.constructor = cl;
cd(fl, qn.prototype);
fl.isPureReactComponent = !0;
var Lu = Array.isArray,
  hd = Object.prototype.hasOwnProperty,
  dl = { current: null },
  pd = { key: !0, ref: !0, __self: !0, __source: !0 };
function md(e, t, n) {
  var r,
    i = {},
    s = null,
    o = null;
  if (t != null)
    for (r in (t.ref !== void 0 && (o = t.ref),
    t.key !== void 0 && (s = "" + t.key),
    t))
      hd.call(t, r) && !pd.hasOwnProperty(r) && (i[r] = t[r]);
  var a = arguments.length - 2;
  if (a === 1) i.children = n;
  else if (1 < a) {
    for (var l = Array(a), u = 0; u < a; u++) l[u] = arguments[u + 2];
    i.children = l;
  }
  if (e && e.defaultProps)
    for (r in ((a = e.defaultProps), a)) i[r] === void 0 && (i[r] = a[r]);
  return {
    $$typeof: ei,
    type: e,
    key: s,
    ref: o,
    props: i,
    _owner: dl.current,
  };
}
function wy(e, t) {
  return {
    $$typeof: ei,
    type: e.type,
    key: t,
    ref: e.ref,
    props: e.props,
    _owner: e._owner,
  };
}
function hl(e) {
  return typeof e == "object" && e !== null && e.$$typeof === ei;
}
function Sy(e) {
  var t = { "=": "=0", ":": "=2" };
  return (
    "$" +
    e.replace(/[=:]/g, function (n) {
      return t[n];
    })
  );
}
var _u = /\/+/g;
function io(e, t) {
  return typeof e == "object" && e !== null && e.key != null
    ? Sy("" + e.key)
    : t.toString(36);
}
function Ii(e, t, n, r, i) {
  var s = typeof e;
  (s === "undefined" || s === "boolean") && (e = null);
  var o = !1;
  if (e === null) o = !0;
  else
    switch (s) {
      case "string":
      case "number":
        o = !0;
        break;
      case "object":
        switch (e.$$typeof) {
          case ei:
          case uy:
            o = !0;
        }
    }
  if (o)
    return (
      (o = e),
      (i = i(o)),
      (e = r === "" ? "." + io(o, 0) : r),
      Lu(i)
        ? ((n = ""),
          e != null && (n = e.replace(_u, "$&/") + "/"),
          Ii(i, t, n, "", function (u) {
            return u;
          }))
        : i != null &&
          (hl(i) &&
            (i = wy(
              i,
              n +
                (!i.key || (o && o.key === i.key)
                  ? ""
                  : ("" + i.key).replace(_u, "$&/") + "/") +
                e,
            )),
          t.push(i)),
      1
    );
  if (((o = 0), (r = r === "" ? "." : r + ":"), Lu(e)))
    for (var a = 0; a < e.length; a++) {
      s = e[a];
      var l = r + io(s, a);
      o += Ii(s, t, n, l, i);
    }
  else if (((l = xy(e)), typeof l == "function"))
    for (e = l.call(e), a = 0; !(s = e.next()).done; )
      ((s = s.value), (l = r + io(s, a++)), (o += Ii(s, t, n, l, i)));
  else if (s === "object")
    throw (
      (t = String(e)),
      Error(
        "Objects are not valid as a React child (found: " +
          (t === "[object Object]"
            ? "object with keys {" + Object.keys(e).join(", ") + "}"
            : t) +
          "). If you meant to render a collection of children, use an array instead.",
      )
    );
  return o;
}
function pi(e, t, n) {
  if (e == null) return e;
  var r = [],
    i = 0;
  return (
    Ii(e, r, "", "", function (s) {
      return t.call(n, s, i++);
    }),
    r
  );
}
function ky(e) {
  if (e._status === -1) {
    var t = e._result;
    ((t = t()),
      t.then(
        function (n) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 1), (e._result = n));
        },
        function (n) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 2), (e._result = n));
        },
      ),
      e._status === -1 && ((e._status = 0), (e._result = t)));
  }
  if (e._status === 1) return e._result.default;
  throw e._result;
}
var ke = { current: null },
  Fi = { transition: null },
  Ty = {
    ReactCurrentDispatcher: ke,
    ReactCurrentBatchConfig: Fi,
    ReactCurrentOwner: dl,
  };
function yd() {
  throw Error("act(...) is not supported in production builds of React.");
}
_.Children = {
  map: pi,
  forEach: function (e, t, n) {
    pi(
      e,
      function () {
        t.apply(this, arguments);
      },
      n,
    );
  },
  count: function (e) {
    var t = 0;
    return (
      pi(e, function () {
        t++;
      }),
      t
    );
  },
  toArray: function (e) {
    return (
      pi(e, function (t) {
        return t;
      }) || []
    );
  },
  only: function (e) {
    if (!hl(e))
      throw Error(
        "React.Children.only expected to receive a single React element child.",
      );
    return e;
  },
};
_.Component = qn;
_.Fragment = cy;
_.Profiler = dy;
_.PureComponent = cl;
_.StrictMode = fy;
_.Suspense = yy;
_.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Ty;
_.act = yd;
_.cloneElement = function (e, t, n) {
  if (e == null)
    throw Error(
      "React.cloneElement(...): The argument must be a React element, but you passed " +
        e +
        ".",
    );
  var r = cd({}, e.props),
    i = e.key,
    s = e.ref,
    o = e._owner;
  if (t != null) {
    if (
      (t.ref !== void 0 && ((s = t.ref), (o = dl.current)),
      t.key !== void 0 && (i = "" + t.key),
      e.type && e.type.defaultProps)
    )
      var a = e.type.defaultProps;
    for (l in t)
      hd.call(t, l) &&
        !pd.hasOwnProperty(l) &&
        (r[l] = t[l] === void 0 && a !== void 0 ? a[l] : t[l]);
  }
  var l = arguments.length - 2;
  if (l === 1) r.children = n;
  else if (1 < l) {
    a = Array(l);
    for (var u = 0; u < l; u++) a[u] = arguments[u + 2];
    r.children = a;
  }
  return { $$typeof: ei, type: e.type, key: i, ref: s, props: r, _owner: o };
};
_.createContext = function (e) {
  return (
    (e = {
      $$typeof: py,
      _currentValue: e,
      _currentValue2: e,
      _threadCount: 0,
      Provider: null,
      Consumer: null,
      _defaultValue: null,
      _globalName: null,
    }),
    (e.Provider = { $$typeof: hy, _context: e }),
    (e.Consumer = e)
  );
};
_.createElement = md;
_.createFactory = function (e) {
  var t = md.bind(null, e);
  return ((t.type = e), t);
};
_.createRef = function () {
  return { current: null };
};
_.forwardRef = function (e) {
  return { $$typeof: my, render: e };
};
_.isValidElement = hl;
_.lazy = function (e) {
  return { $$typeof: vy, _payload: { _status: -1, _result: e }, _init: ky };
};
_.memo = function (e, t) {
  return { $$typeof: gy, type: e, compare: t === void 0 ? null : t };
};
_.startTransition = function (e) {
  var t = Fi.transition;
  Fi.transition = {};
  try {
    e();
  } finally {
    Fi.transition = t;
  }
};
_.unstable_act = yd;
_.useCallback = function (e, t) {
  return ke.current.useCallback(e, t);
};
_.useContext = function (e) {
  return ke.current.useContext(e);
};
_.useDebugValue = function () {};
_.useDeferredValue = function (e) {
  return ke.current.useDeferredValue(e);
};
_.useEffect = function (e, t) {
  return ke.current.useEffect(e, t);
};
_.useId = function () {
  return ke.current.useId();
};
_.useImperativeHandle = function (e, t, n) {
  return ke.current.useImperativeHandle(e, t, n);
};
_.useInsertionEffect = function (e, t) {
  return ke.current.useInsertionEffect(e, t);
};
_.useLayoutEffect = function (e, t) {
  return ke.current.useLayoutEffect(e, t);
};
_.useMemo = function (e, t) {
  return ke.current.useMemo(e, t);
};
_.useReducer = function (e, t, n) {
  return ke.current.useReducer(e, t, n);
};
_.useRef = function (e) {
  return ke.current.useRef(e);
};
_.useState = function (e) {
  return ke.current.useState(e);
};
_.useSyncExternalStore = function (e, t, n) {
  return ke.current.useSyncExternalStore(e, t, n);
};
_.useTransition = function () {
  return ke.current.useTransition();
};
_.version = "18.3.1";
ld.exports = _;
var j = ld.exports;
const bt = ly(j);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Cy = j,
  Py = Symbol.for("react.element"),
  Ey = Symbol.for("react.fragment"),
  My = Object.prototype.hasOwnProperty,
  Ny = Cy.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
  jy = { key: !0, ref: !0, __self: !0, __source: !0 };
function gd(e, t, n) {
  var r,
    i = {},
    s = null,
    o = null;
  (n !== void 0 && (s = "" + n),
    t.key !== void 0 && (s = "" + t.key),
    t.ref !== void 0 && (o = t.ref));
  for (r in t) My.call(t, r) && !jy.hasOwnProperty(r) && (i[r] = t[r]);
  if (e && e.defaultProps)
    for (r in ((t = e.defaultProps), t)) i[r] === void 0 && (i[r] = t[r]);
  return {
    $$typeof: Py,
    type: e,
    key: s,
    ref: o,
    props: i,
    _owner: Ny.current,
  };
}
_s.Fragment = Ey;
_s.jsx = gd;
_s.jsxs = gd;
ad.exports = _s;
var g = ad.exports,
  vd = { exports: {} },
  Ie = {},
  xd = { exports: {} },
  wd = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ (function (e) {
  function t(M, V) {
    var L = M.length;
    M.push(V);
    e: for (; 0 < L; ) {
      var z = (L - 1) >>> 1,
        J = M[z];
      if (0 < i(J, V)) ((M[z] = V), (M[L] = J), (L = z));
      else break e;
    }
  }
  function n(M) {
    return M.length === 0 ? null : M[0];
  }
  function r(M) {
    if (M.length === 0) return null;
    var V = M[0],
      L = M.pop();
    if (L !== V) {
      M[0] = L;
      e: for (var z = 0, J = M.length, di = J >>> 1; z < di; ) {
        var Xt = 2 * (z + 1) - 1,
          ro = M[Xt],
          Zt = Xt + 1,
          hi = M[Zt];
        if (0 > i(ro, L))
          Zt < J && 0 > i(hi, ro)
            ? ((M[z] = hi), (M[Zt] = L), (z = Zt))
            : ((M[z] = ro), (M[Xt] = L), (z = Xt));
        else if (Zt < J && 0 > i(hi, L)) ((M[z] = hi), (M[Zt] = L), (z = Zt));
        else break e;
      }
    }
    return V;
  }
  function i(M, V) {
    var L = M.sortIndex - V.sortIndex;
    return L !== 0 ? L : M.id - V.id;
  }
  if (typeof performance == "object" && typeof performance.now == "function") {
    var s = performance;
    e.unstable_now = function () {
      return s.now();
    };
  } else {
    var o = Date,
      a = o.now();
    e.unstable_now = function () {
      return o.now() - a;
    };
  }
  var l = [],
    u = [],
    c = 1,
    f = null,
    d = 3,
    y = !1,
    v = !1,
    w = !1,
    k = typeof setTimeout == "function" ? setTimeout : null,
    p = typeof clearTimeout == "function" ? clearTimeout : null,
    h = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" &&
    navigator.scheduling !== void 0 &&
    navigator.scheduling.isInputPending !== void 0 &&
    navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function m(M) {
    for (var V = n(u); V !== null; ) {
      if (V.callback === null) r(u);
      else if (V.startTime <= M)
        (r(u), (V.sortIndex = V.expirationTime), t(l, V));
      else break;
      V = n(u);
    }
  }
  function x(M) {
    if (((w = !1), m(M), !v))
      if (n(l) !== null) ((v = !0), Ce(S));
      else {
        var V = n(u);
        V !== null && fi(x, V.startTime - M);
      }
  }
  function S(M, V) {
    ((v = !1), w && ((w = !1), p(T), (T = -1)), (y = !0));
    var L = d;
    try {
      for (
        m(V), f = n(l);
        f !== null && (!(f.expirationTime > V) || (M && !I()));
      ) {
        var z = f.callback;
        if (typeof z == "function") {
          ((f.callback = null), (d = f.priorityLevel));
          var J = z(f.expirationTime <= V);
          ((V = e.unstable_now()),
            typeof J == "function" ? (f.callback = J) : f === n(l) && r(l),
            m(V));
        } else r(l);
        f = n(l);
      }
      if (f !== null) var di = !0;
      else {
        var Xt = n(u);
        (Xt !== null && fi(x, Xt.startTime - V), (di = !1));
      }
      return di;
    } finally {
      ((f = null), (d = L), (y = !1));
    }
  }
  var E = !1,
    N = null,
    T = -1,
    R = 5,
    P = -1;
  function I() {
    return !(e.unstable_now() - P < R);
  }
  function K() {
    if (N !== null) {
      var M = e.unstable_now();
      P = M;
      var V = !0;
      try {
        V = N(!0, M);
      } finally {
        V ? ge() : ((E = !1), (N = null));
      }
    } else E = !1;
  }
  var ge;
  if (typeof h == "function")
    ge = function () {
      h(K);
    };
  else if (typeof MessageChannel < "u") {
    var De = new MessageChannel(),
      Ke = De.port2;
    ((De.port1.onmessage = K),
      (ge = function () {
        Ke.postMessage(null);
      }));
  } else
    ge = function () {
      k(K, 0);
    };
  function Ce(M) {
    ((N = M), E || ((E = !0), ge()));
  }
  function fi(M, V) {
    T = k(function () {
      M(e.unstable_now());
    }, V);
  }
  ((e.unstable_IdlePriority = 5),
    (e.unstable_ImmediatePriority = 1),
    (e.unstable_LowPriority = 4),
    (e.unstable_NormalPriority = 3),
    (e.unstable_Profiling = null),
    (e.unstable_UserBlockingPriority = 2),
    (e.unstable_cancelCallback = function (M) {
      M.callback = null;
    }),
    (e.unstable_continueExecution = function () {
      v || y || ((v = !0), Ce(S));
    }),
    (e.unstable_forceFrameRate = function (M) {
      0 > M || 125 < M
        ? console.error(
            "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported",
          )
        : (R = 0 < M ? Math.floor(1e3 / M) : 5);
    }),
    (e.unstable_getCurrentPriorityLevel = function () {
      return d;
    }),
    (e.unstable_getFirstCallbackNode = function () {
      return n(l);
    }),
    (e.unstable_next = function (M) {
      switch (d) {
        case 1:
        case 2:
        case 3:
          var V = 3;
          break;
        default:
          V = d;
      }
      var L = d;
      d = V;
      try {
        return M();
      } finally {
        d = L;
      }
    }),
    (e.unstable_pauseExecution = function () {}),
    (e.unstable_requestPaint = function () {}),
    (e.unstable_runWithPriority = function (M, V) {
      switch (M) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          M = 3;
      }
      var L = d;
      d = M;
      try {
        return V();
      } finally {
        d = L;
      }
    }),
    (e.unstable_scheduleCallback = function (M, V, L) {
      var z = e.unstable_now();
      switch (
        (typeof L == "object" && L !== null
          ? ((L = L.delay), (L = typeof L == "number" && 0 < L ? z + L : z))
          : (L = z),
        M)
      ) {
        case 1:
          var J = -1;
          break;
        case 2:
          J = 250;
          break;
        case 5:
          J = 1073741823;
          break;
        case 4:
          J = 1e4;
          break;
        default:
          J = 5e3;
      }
      return (
        (J = L + J),
        (M = {
          id: c++,
          callback: V,
          priorityLevel: M,
          startTime: L,
          expirationTime: J,
          sortIndex: -1,
        }),
        L > z
          ? ((M.sortIndex = L),
            t(u, M),
            n(l) === null &&
              M === n(u) &&
              (w ? (p(T), (T = -1)) : (w = !0), fi(x, L - z)))
          : ((M.sortIndex = J), t(l, M), v || y || ((v = !0), Ce(S))),
        M
      );
    }),
    (e.unstable_shouldYield = I),
    (e.unstable_wrapCallback = function (M) {
      var V = d;
      return function () {
        var L = d;
        d = V;
        try {
          return M.apply(this, arguments);
        } finally {
          d = L;
        }
      };
    }));
})(wd);
xd.exports = wd;
var Ay = xd.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Dy = j,
  _e = Ay;
function C(e) {
  for (
    var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1;
    n < arguments.length;
    n++
  )
    t += "&args[]=" + encodeURIComponent(arguments[n]);
  return (
    "Minified React error #" +
    e +
    "; visit " +
    t +
    " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
  );
}
var Sd = new Set(),
  Vr = {};
function gn(e, t) {
  (Un(e, t), Un(e + "Capture", t));
}
function Un(e, t) {
  for (Vr[e] = t, e = 0; e < t.length; e++) Sd.add(t[e]);
}
var vt = !(
    typeof window > "u" ||
    typeof window.document > "u" ||
    typeof window.document.createElement > "u"
  ),
  Yo = Object.prototype.hasOwnProperty,
  Ry =
    /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
  Iu = {},
  Fu = {};
function Vy(e) {
  return Yo.call(Fu, e)
    ? !0
    : Yo.call(Iu, e)
      ? !1
      : Ry.test(e)
        ? (Fu[e] = !0)
        : ((Iu[e] = !0), !1);
}
function Ly(e, t, n, r) {
  if (n !== null && n.type === 0) return !1;
  switch (typeof t) {
    case "function":
    case "symbol":
      return !0;
    case "boolean":
      return r
        ? !1
        : n !== null
          ? !n.acceptsBooleans
          : ((e = e.toLowerCase().slice(0, 5)), e !== "data-" && e !== "aria-");
    default:
      return !1;
  }
}
function _y(e, t, n, r) {
  if (t === null || typeof t > "u" || Ly(e, t, n, r)) return !0;
  if (r) return !1;
  if (n !== null)
    switch (n.type) {
      case 3:
        return !t;
      case 4:
        return t === !1;
      case 5:
        return isNaN(t);
      case 6:
        return isNaN(t) || 1 > t;
    }
  return !1;
}
function Te(e, t, n, r, i, s, o) {
  ((this.acceptsBooleans = t === 2 || t === 3 || t === 4),
    (this.attributeName = r),
    (this.attributeNamespace = i),
    (this.mustUseProperty = n),
    (this.propertyName = e),
    (this.type = t),
    (this.sanitizeURL = s),
    (this.removeEmptyString = o));
}
var de = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
  .split(" ")
  .forEach(function (e) {
    de[e] = new Te(e, 0, !1, e, null, !1, !1);
  });
[
  ["acceptCharset", "accept-charset"],
  ["className", "class"],
  ["htmlFor", "for"],
  ["httpEquiv", "http-equiv"],
].forEach(function (e) {
  var t = e[0];
  de[t] = new Te(t, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function (e) {
  de[e] = new Te(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
[
  "autoReverse",
  "externalResourcesRequired",
  "focusable",
  "preserveAlpha",
].forEach(function (e) {
  de[e] = new Te(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
  .split(" ")
  .forEach(function (e) {
    de[e] = new Te(e, 3, !1, e.toLowerCase(), null, !1, !1);
  });
["checked", "multiple", "muted", "selected"].forEach(function (e) {
  de[e] = new Te(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function (e) {
  de[e] = new Te(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function (e) {
  de[e] = new Te(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function (e) {
  de[e] = new Te(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var pl = /[\-:]([a-z])/g;
function ml(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(pl, ml);
    de[t] = new Te(t, 1, !1, e, null, !1, !1);
  });
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(pl, ml);
    de[t] = new Te(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
  });
["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
  var t = e.replace(pl, ml);
  de[t] = new Te(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function (e) {
  de[e] = new Te(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
de.xlinkHref = new Te(
  "xlinkHref",
  1,
  !1,
  "xlink:href",
  "http://www.w3.org/1999/xlink",
  !0,
  !1,
);
["src", "href", "action", "formAction"].forEach(function (e) {
  de[e] = new Te(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function yl(e, t, n, r) {
  var i = de.hasOwnProperty(t) ? de[t] : null;
  (i !== null
    ? i.type !== 0
    : r ||
      !(2 < t.length) ||
      (t[0] !== "o" && t[0] !== "O") ||
      (t[1] !== "n" && t[1] !== "N")) &&
    (_y(t, n, i, r) && (n = null),
    r || i === null
      ? Vy(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n))
      : i.mustUseProperty
        ? (e[i.propertyName] = n === null ? (i.type === 3 ? !1 : "") : n)
        : ((t = i.attributeName),
          (r = i.attributeNamespace),
          n === null
            ? e.removeAttribute(t)
            : ((i = i.type),
              (n = i === 3 || (i === 4 && n === !0) ? "" : "" + n),
              r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
}
var kt = Dy.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
  mi = Symbol.for("react.element"),
  Sn = Symbol.for("react.portal"),
  kn = Symbol.for("react.fragment"),
  gl = Symbol.for("react.strict_mode"),
  Qo = Symbol.for("react.profiler"),
  kd = Symbol.for("react.provider"),
  Td = Symbol.for("react.context"),
  vl = Symbol.for("react.forward_ref"),
  Xo = Symbol.for("react.suspense"),
  Zo = Symbol.for("react.suspense_list"),
  xl = Symbol.for("react.memo"),
  Et = Symbol.for("react.lazy"),
  Cd = Symbol.for("react.offscreen"),
  Ou = Symbol.iterator;
function sr(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (Ou && e[Ou]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var X = Object.assign,
  so;
function mr(e) {
  if (so === void 0)
    try {
      throw Error();
    } catch (n) {
      var t = n.stack.trim().match(/\n( *(at )?)/);
      so = (t && t[1]) || "";
    }
  return (
    `
` +
    so +
    e
  );
}
var oo = !1;
function ao(e, t) {
  if (!e || oo) return "";
  oo = !0;
  var n = Error.prepareStackTrace;
  Error.prepareStackTrace = void 0;
  try {
    if (t)
      if (
        ((t = function () {
          throw Error();
        }),
        Object.defineProperty(t.prototype, "props", {
          set: function () {
            throw Error();
          },
        }),
        typeof Reflect == "object" && Reflect.construct)
      ) {
        try {
          Reflect.construct(t, []);
        } catch (u) {
          var r = u;
        }
        Reflect.construct(e, [], t);
      } else {
        try {
          t.call();
        } catch (u) {
          r = u;
        }
        e.call(t.prototype);
      }
    else {
      try {
        throw Error();
      } catch (u) {
        r = u;
      }
      e();
    }
  } catch (u) {
    if (u && r && typeof u.stack == "string") {
      for (
        var i = u.stack.split(`
`),
          s = r.stack.split(`
`),
          o = i.length - 1,
          a = s.length - 1;
        1 <= o && 0 <= a && i[o] !== s[a];
      )
        a--;
      for (; 1 <= o && 0 <= a; o--, a--)
        if (i[o] !== s[a]) {
          if (o !== 1 || a !== 1)
            do
              if ((o--, a--, 0 > a || i[o] !== s[a])) {
                var l =
                  `
` + i[o].replace(" at new ", " at ");
                return (
                  e.displayName &&
                    l.includes("<anonymous>") &&
                    (l = l.replace("<anonymous>", e.displayName)),
                  l
                );
              }
            while (1 <= o && 0 <= a);
          break;
        }
    }
  } finally {
    ((oo = !1), (Error.prepareStackTrace = n));
  }
  return (e = e ? e.displayName || e.name : "") ? mr(e) : "";
}
function Iy(e) {
  switch (e.tag) {
    case 5:
      return mr(e.type);
    case 16:
      return mr("Lazy");
    case 13:
      return mr("Suspense");
    case 19:
      return mr("SuspenseList");
    case 0:
    case 2:
    case 15:
      return ((e = ao(e.type, !1)), e);
    case 11:
      return ((e = ao(e.type.render, !1)), e);
    case 1:
      return ((e = ao(e.type, !0)), e);
    default:
      return "";
  }
}
function qo(e) {
  if (e == null) return null;
  if (typeof e == "function") return e.displayName || e.name || null;
  if (typeof e == "string") return e;
  switch (e) {
    case kn:
      return "Fragment";
    case Sn:
      return "Portal";
    case Qo:
      return "Profiler";
    case gl:
      return "StrictMode";
    case Xo:
      return "Suspense";
    case Zo:
      return "SuspenseList";
  }
  if (typeof e == "object")
    switch (e.$$typeof) {
      case Td:
        return (e.displayName || "Context") + ".Consumer";
      case kd:
        return (e._context.displayName || "Context") + ".Provider";
      case vl:
        var t = e.render;
        return (
          (e = e.displayName),
          e ||
            ((e = t.displayName || t.name || ""),
            (e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")),
          e
        );
      case xl:
        return (
          (t = e.displayName || null),
          t !== null ? t : qo(e.type) || "Memo"
        );
      case Et:
        ((t = e._payload), (e = e._init));
        try {
          return qo(e(t));
        } catch {}
    }
  return null;
}
function Fy(e) {
  var t = e.type;
  switch (e.tag) {
    case 24:
      return "Cache";
    case 9:
      return (t.displayName || "Context") + ".Consumer";
    case 10:
      return (t._context.displayName || "Context") + ".Provider";
    case 18:
      return "DehydratedFragment";
    case 11:
      return (
        (e = t.render),
        (e = e.displayName || e.name || ""),
        t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")
      );
    case 7:
      return "Fragment";
    case 5:
      return t;
    case 4:
      return "Portal";
    case 3:
      return "Root";
    case 6:
      return "Text";
    case 16:
      return qo(t);
    case 8:
      return t === gl ? "StrictMode" : "Mode";
    case 22:
      return "Offscreen";
    case 12:
      return "Profiler";
    case 21:
      return "Scope";
    case 13:
      return "Suspense";
    case 19:
      return "SuspenseList";
    case 25:
      return "TracingMarker";
    case 1:
    case 0:
    case 17:
    case 2:
    case 14:
    case 15:
      if (typeof t == "function") return t.displayName || t.name || null;
      if (typeof t == "string") return t;
  }
  return null;
}
function Ut(e) {
  switch (typeof e) {
    case "boolean":
    case "number":
    case "string":
    case "undefined":
      return e;
    case "object":
      return e;
    default:
      return "";
  }
}
function Pd(e) {
  var t = e.type;
  return (
    (e = e.nodeName) &&
    e.toLowerCase() === "input" &&
    (t === "checkbox" || t === "radio")
  );
}
function Oy(e) {
  var t = Pd(e) ? "checked" : "value",
    n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
    r = "" + e[t];
  if (
    !e.hasOwnProperty(t) &&
    typeof n < "u" &&
    typeof n.get == "function" &&
    typeof n.set == "function"
  ) {
    var i = n.get,
      s = n.set;
    return (
      Object.defineProperty(e, t, {
        configurable: !0,
        get: function () {
          return i.call(this);
        },
        set: function (o) {
          ((r = "" + o), s.call(this, o));
        },
      }),
      Object.defineProperty(e, t, { enumerable: n.enumerable }),
      {
        getValue: function () {
          return r;
        },
        setValue: function (o) {
          r = "" + o;
        },
        stopTracking: function () {
          ((e._valueTracker = null), delete e[t]);
        },
      }
    );
  }
}
function yi(e) {
  e._valueTracker || (e._valueTracker = Oy(e));
}
function Ed(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var n = t.getValue(),
    r = "";
  return (
    e && (r = Pd(e) ? (e.checked ? "true" : "false") : e.value),
    (e = r),
    e !== n ? (t.setValue(e), !0) : !1
  );
}
function ns(e) {
  if (((e = e || (typeof document < "u" ? document : void 0)), typeof e > "u"))
    return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function Jo(e, t) {
  var n = t.checked;
  return X({}, t, {
    defaultChecked: void 0,
    defaultValue: void 0,
    value: void 0,
    checked: n ?? e._wrapperState.initialChecked,
  });
}
function zu(e, t) {
  var n = t.defaultValue == null ? "" : t.defaultValue,
    r = t.checked != null ? t.checked : t.defaultChecked;
  ((n = Ut(t.value != null ? t.value : n)),
    (e._wrapperState = {
      initialChecked: r,
      initialValue: n,
      controlled:
        t.type === "checkbox" || t.type === "radio"
          ? t.checked != null
          : t.value != null,
    }));
}
function Md(e, t) {
  ((t = t.checked), t != null && yl(e, "checked", t, !1));
}
function ea(e, t) {
  Md(e, t);
  var n = Ut(t.value),
    r = t.type;
  if (n != null)
    r === "number"
      ? ((n === 0 && e.value === "") || e.value != n) && (e.value = "" + n)
      : e.value !== "" + n && (e.value = "" + n);
  else if (r === "submit" || r === "reset") {
    e.removeAttribute("value");
    return;
  }
  (t.hasOwnProperty("value")
    ? ta(e, t.type, n)
    : t.hasOwnProperty("defaultValue") && ta(e, t.type, Ut(t.defaultValue)),
    t.checked == null &&
      t.defaultChecked != null &&
      (e.defaultChecked = !!t.defaultChecked));
}
function Bu(e, t, n) {
  if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
    var r = t.type;
    if (
      !(
        (r !== "submit" && r !== "reset") ||
        (t.value !== void 0 && t.value !== null)
      )
    )
      return;
    ((t = "" + e._wrapperState.initialValue),
      n || t === e.value || (e.value = t),
      (e.defaultValue = t));
  }
  ((n = e.name),
    n !== "" && (e.name = ""),
    (e.defaultChecked = !!e._wrapperState.initialChecked),
    n !== "" && (e.name = n));
}
function ta(e, t, n) {
  (t !== "number" || ns(e.ownerDocument) !== e) &&
    (n == null
      ? (e.defaultValue = "" + e._wrapperState.initialValue)
      : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
}
var yr = Array.isArray;
function In(e, t, n, r) {
  if (((e = e.options), t)) {
    t = {};
    for (var i = 0; i < n.length; i++) t["$" + n[i]] = !0;
    for (n = 0; n < e.length; n++)
      ((i = t.hasOwnProperty("$" + e[n].value)),
        e[n].selected !== i && (e[n].selected = i),
        i && r && (e[n].defaultSelected = !0));
  } else {
    for (n = "" + Ut(n), t = null, i = 0; i < e.length; i++) {
      if (e[i].value === n) {
        ((e[i].selected = !0), r && (e[i].defaultSelected = !0));
        return;
      }
      t !== null || e[i].disabled || (t = e[i]);
    }
    t !== null && (t.selected = !0);
  }
}
function na(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(C(91));
  return X({}, t, {
    value: void 0,
    defaultValue: void 0,
    children: "" + e._wrapperState.initialValue,
  });
}
function bu(e, t) {
  var n = t.value;
  if (n == null) {
    if (((n = t.children), (t = t.defaultValue), n != null)) {
      if (t != null) throw Error(C(92));
      if (yr(n)) {
        if (1 < n.length) throw Error(C(93));
        n = n[0];
      }
      t = n;
    }
    (t == null && (t = ""), (n = t));
  }
  e._wrapperState = { initialValue: Ut(n) };
}
function Nd(e, t) {
  var n = Ut(t.value),
    r = Ut(t.defaultValue);
  (n != null &&
    ((n = "" + n),
    n !== e.value && (e.value = n),
    t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
    r != null && (e.defaultValue = "" + r));
}
function Uu(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
}
function jd(e) {
  switch (e) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function ra(e, t) {
  return e == null || e === "http://www.w3.org/1999/xhtml"
    ? jd(t)
    : e === "http://www.w3.org/2000/svg" && t === "foreignObject"
      ? "http://www.w3.org/1999/xhtml"
      : e;
}
var gi,
  Ad = (function (e) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction
      ? function (t, n, r, i) {
          MSApp.execUnsafeLocalFunction(function () {
            return e(t, n, r, i);
          });
        }
      : e;
  })(function (e, t) {
    if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e)
      e.innerHTML = t;
    else {
      for (
        gi = gi || document.createElement("div"),
          gi.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>",
          t = gi.firstChild;
        e.firstChild;
      )
        e.removeChild(e.firstChild);
      for (; t.firstChild; ) e.appendChild(t.firstChild);
    }
  });
function Lr(e, t) {
  if (t) {
    var n = e.firstChild;
    if (n && n === e.lastChild && n.nodeType === 3) {
      n.nodeValue = t;
      return;
    }
  }
  e.textContent = t;
}
var wr = {
    animationIterationCount: !0,
    aspectRatio: !0,
    borderImageOutset: !0,
    borderImageSlice: !0,
    borderImageWidth: !0,
    boxFlex: !0,
    boxFlexGroup: !0,
    boxOrdinalGroup: !0,
    columnCount: !0,
    columns: !0,
    flex: !0,
    flexGrow: !0,
    flexPositive: !0,
    flexShrink: !0,
    flexNegative: !0,
    flexOrder: !0,
    gridArea: !0,
    gridRow: !0,
    gridRowEnd: !0,
    gridRowSpan: !0,
    gridRowStart: !0,
    gridColumn: !0,
    gridColumnEnd: !0,
    gridColumnSpan: !0,
    gridColumnStart: !0,
    fontWeight: !0,
    lineClamp: !0,
    lineHeight: !0,
    opacity: !0,
    order: !0,
    orphans: !0,
    tabSize: !0,
    widows: !0,
    zIndex: !0,
    zoom: !0,
    fillOpacity: !0,
    floodOpacity: !0,
    stopOpacity: !0,
    strokeDasharray: !0,
    strokeDashoffset: !0,
    strokeMiterlimit: !0,
    strokeOpacity: !0,
    strokeWidth: !0,
  },
  zy = ["Webkit", "ms", "Moz", "O"];
Object.keys(wr).forEach(function (e) {
  zy.forEach(function (t) {
    ((t = t + e.charAt(0).toUpperCase() + e.substring(1)), (wr[t] = wr[e]));
  });
});
function Dd(e, t, n) {
  return t == null || typeof t == "boolean" || t === ""
    ? ""
    : n || typeof t != "number" || t === 0 || (wr.hasOwnProperty(e) && wr[e])
      ? ("" + t).trim()
      : t + "px";
}
function Rd(e, t) {
  e = e.style;
  for (var n in t)
    if (t.hasOwnProperty(n)) {
      var r = n.indexOf("--") === 0,
        i = Dd(n, t[n], r);
      (n === "float" && (n = "cssFloat"), r ? e.setProperty(n, i) : (e[n] = i));
    }
}
var By = X(
  { menuitem: !0 },
  {
    area: !0,
    base: !0,
    br: !0,
    col: !0,
    embed: !0,
    hr: !0,
    img: !0,
    input: !0,
    keygen: !0,
    link: !0,
    meta: !0,
    param: !0,
    source: !0,
    track: !0,
    wbr: !0,
  },
);
function ia(e, t) {
  if (t) {
    if (By[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
      throw Error(C(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(C(60));
      if (
        typeof t.dangerouslySetInnerHTML != "object" ||
        !("__html" in t.dangerouslySetInnerHTML)
      )
        throw Error(C(61));
    }
    if (t.style != null && typeof t.style != "object") throw Error(C(62));
  }
}
function sa(e, t) {
  if (e.indexOf("-") === -1) return typeof t.is == "string";
  switch (e) {
    case "annotation-xml":
    case "color-profile":
    case "font-face":
    case "font-face-src":
    case "font-face-uri":
    case "font-face-format":
    case "font-face-name":
    case "missing-glyph":
      return !1;
    default:
      return !0;
  }
}
var oa = null;
function wl(e) {
  return (
    (e = e.target || e.srcElement || window),
    e.correspondingUseElement && (e = e.correspondingUseElement),
    e.nodeType === 3 ? e.parentNode : e
  );
}
var aa = null,
  Fn = null,
  On = null;
function $u(e) {
  if ((e = ri(e))) {
    if (typeof aa != "function") throw Error(C(280));
    var t = e.stateNode;
    t && ((t = Bs(t)), aa(e.stateNode, e.type, t));
  }
}
function Vd(e) {
  Fn ? (On ? On.push(e) : (On = [e])) : (Fn = e);
}
function Ld() {
  if (Fn) {
    var e = Fn,
      t = On;
    if (((On = Fn = null), $u(e), t)) for (e = 0; e < t.length; e++) $u(t[e]);
  }
}
function _d(e, t) {
  return e(t);
}
function Id() {}
var lo = !1;
function Fd(e, t, n) {
  if (lo) return e(t, n);
  lo = !0;
  try {
    return _d(e, t, n);
  } finally {
    ((lo = !1), (Fn !== null || On !== null) && (Id(), Ld()));
  }
}
function _r(e, t) {
  var n = e.stateNode;
  if (n === null) return null;
  var r = Bs(n);
  if (r === null) return null;
  n = r[t];
  e: switch (t) {
    case "onClick":
    case "onClickCapture":
    case "onDoubleClick":
    case "onDoubleClickCapture":
    case "onMouseDown":
    case "onMouseDownCapture":
    case "onMouseMove":
    case "onMouseMoveCapture":
    case "onMouseUp":
    case "onMouseUpCapture":
    case "onMouseEnter":
      ((r = !r.disabled) ||
        ((e = e.type),
        (r = !(
          e === "button" ||
          e === "input" ||
          e === "select" ||
          e === "textarea"
        ))),
        (e = !r));
      break e;
    default:
      e = !1;
  }
  if (e) return null;
  if (n && typeof n != "function") throw Error(C(231, t, typeof n));
  return n;
}
var la = !1;
if (vt)
  try {
    var or = {};
    (Object.defineProperty(or, "passive", {
      get: function () {
        la = !0;
      },
    }),
      window.addEventListener("test", or, or),
      window.removeEventListener("test", or, or));
  } catch {
    la = !1;
  }
function by(e, t, n, r, i, s, o, a, l) {
  var u = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, u);
  } catch (c) {
    this.onError(c);
  }
}
var Sr = !1,
  rs = null,
  is = !1,
  ua = null,
  Uy = {
    onError: function (e) {
      ((Sr = !0), (rs = e));
    },
  };
function $y(e, t, n, r, i, s, o, a, l) {
  ((Sr = !1), (rs = null), by.apply(Uy, arguments));
}
function Wy(e, t, n, r, i, s, o, a, l) {
  if (($y.apply(this, arguments), Sr)) {
    if (Sr) {
      var u = rs;
      ((Sr = !1), (rs = null));
    } else throw Error(C(198));
    is || ((is = !0), (ua = u));
  }
}
function vn(e) {
  var t = e,
    n = e;
  if (e.alternate) for (; t.return; ) t = t.return;
  else {
    e = t;
    do ((t = e), t.flags & 4098 && (n = t.return), (e = t.return));
    while (e);
  }
  return t.tag === 3 ? n : null;
}
function Od(e) {
  if (e.tag === 13) {
    var t = e.memoizedState;
    if (
      (t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)),
      t !== null)
    )
      return t.dehydrated;
  }
  return null;
}
function Wu(e) {
  if (vn(e) !== e) throw Error(C(188));
}
function Hy(e) {
  var t = e.alternate;
  if (!t) {
    if (((t = vn(e)), t === null)) throw Error(C(188));
    return t !== e ? null : e;
  }
  for (var n = e, r = t; ; ) {
    var i = n.return;
    if (i === null) break;
    var s = i.alternate;
    if (s === null) {
      if (((r = i.return), r !== null)) {
        n = r;
        continue;
      }
      break;
    }
    if (i.child === s.child) {
      for (s = i.child; s; ) {
        if (s === n) return (Wu(i), e);
        if (s === r) return (Wu(i), t);
        s = s.sibling;
      }
      throw Error(C(188));
    }
    if (n.return !== r.return) ((n = i), (r = s));
    else {
      for (var o = !1, a = i.child; a; ) {
        if (a === n) {
          ((o = !0), (n = i), (r = s));
          break;
        }
        if (a === r) {
          ((o = !0), (r = i), (n = s));
          break;
        }
        a = a.sibling;
      }
      if (!o) {
        for (a = s.child; a; ) {
          if (a === n) {
            ((o = !0), (n = s), (r = i));
            break;
          }
          if (a === r) {
            ((o = !0), (r = s), (n = i));
            break;
          }
          a = a.sibling;
        }
        if (!o) throw Error(C(189));
      }
    }
    if (n.alternate !== r) throw Error(C(190));
  }
  if (n.tag !== 3) throw Error(C(188));
  return n.stateNode.current === n ? e : t;
}
function zd(e) {
  return ((e = Hy(e)), e !== null ? Bd(e) : null);
}
function Bd(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null; ) {
    var t = Bd(e);
    if (t !== null) return t;
    e = e.sibling;
  }
  return null;
}
var bd = _e.unstable_scheduleCallback,
  Hu = _e.unstable_cancelCallback,
  Ky = _e.unstable_shouldYield,
  Gy = _e.unstable_requestPaint,
  q = _e.unstable_now,
  Yy = _e.unstable_getCurrentPriorityLevel,
  Sl = _e.unstable_ImmediatePriority,
  Ud = _e.unstable_UserBlockingPriority,
  ss = _e.unstable_NormalPriority,
  Qy = _e.unstable_LowPriority,
  $d = _e.unstable_IdlePriority,
  Is = null,
  lt = null;
function Xy(e) {
  if (lt && typeof lt.onCommitFiberRoot == "function")
    try {
      lt.onCommitFiberRoot(Is, e, void 0, (e.current.flags & 128) === 128);
    } catch {}
}
var Je = Math.clz32 ? Math.clz32 : Jy,
  Zy = Math.log,
  qy = Math.LN2;
function Jy(e) {
  return ((e >>>= 0), e === 0 ? 32 : (31 - ((Zy(e) / qy) | 0)) | 0);
}
var vi = 64,
  xi = 4194304;
function gr(e) {
  switch (e & -e) {
    case 1:
      return 1;
    case 2:
      return 2;
    case 4:
      return 4;
    case 8:
      return 8;
    case 16:
      return 16;
    case 32:
      return 32;
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return e & 4194240;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return e & 130023424;
    case 134217728:
      return 134217728;
    case 268435456:
      return 268435456;
    case 536870912:
      return 536870912;
    case 1073741824:
      return 1073741824;
    default:
      return e;
  }
}
function os(e, t) {
  var n = e.pendingLanes;
  if (n === 0) return 0;
  var r = 0,
    i = e.suspendedLanes,
    s = e.pingedLanes,
    o = n & 268435455;
  if (o !== 0) {
    var a = o & ~i;
    a !== 0 ? (r = gr(a)) : ((s &= o), s !== 0 && (r = gr(s)));
  } else ((o = n & ~i), o !== 0 ? (r = gr(o)) : s !== 0 && (r = gr(s)));
  if (r === 0) return 0;
  if (
    t !== 0 &&
    t !== r &&
    !(t & i) &&
    ((i = r & -r), (s = t & -t), i >= s || (i === 16 && (s & 4194240) !== 0))
  )
    return t;
  if ((r & 4 && (r |= n & 16), (t = e.entangledLanes), t !== 0))
    for (e = e.entanglements, t &= r; 0 < t; )
      ((n = 31 - Je(t)), (i = 1 << n), (r |= e[n]), (t &= ~i));
  return r;
}
function eg(e, t) {
  switch (e) {
    case 1:
    case 2:
    case 4:
      return t + 250;
    case 8:
    case 16:
    case 32:
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return t + 5e3;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return -1;
    case 134217728:
    case 268435456:
    case 536870912:
    case 1073741824:
      return -1;
    default:
      return -1;
  }
}
function tg(e, t) {
  for (
    var n = e.suspendedLanes,
      r = e.pingedLanes,
      i = e.expirationTimes,
      s = e.pendingLanes;
    0 < s;
  ) {
    var o = 31 - Je(s),
      a = 1 << o,
      l = i[o];
    (l === -1
      ? (!(a & n) || a & r) && (i[o] = eg(a, t))
      : l <= t && (e.expiredLanes |= a),
      (s &= ~a));
  }
}
function ca(e) {
  return (
    (e = e.pendingLanes & -1073741825),
    e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
  );
}
function Wd() {
  var e = vi;
  return ((vi <<= 1), !(vi & 4194240) && (vi = 64), e);
}
function uo(e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e);
  return t;
}
function ti(e, t, n) {
  ((e.pendingLanes |= t),
    t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
    (e = e.eventTimes),
    (t = 31 - Je(t)),
    (e[t] = n));
}
function ng(e, t) {
  var n = e.pendingLanes & ~t;
  ((e.pendingLanes = t),
    (e.suspendedLanes = 0),
    (e.pingedLanes = 0),
    (e.expiredLanes &= t),
    (e.mutableReadLanes &= t),
    (e.entangledLanes &= t),
    (t = e.entanglements));
  var r = e.eventTimes;
  for (e = e.expirationTimes; 0 < n; ) {
    var i = 31 - Je(n),
      s = 1 << i;
    ((t[i] = 0), (r[i] = -1), (e[i] = -1), (n &= ~s));
  }
}
function kl(e, t) {
  var n = (e.entangledLanes |= t);
  for (e = e.entanglements; n; ) {
    var r = 31 - Je(n),
      i = 1 << r;
    ((i & t) | (e[r] & t) && (e[r] |= t), (n &= ~i));
  }
}
var O = 0;
function Hd(e) {
  return (
    (e &= -e),
    1 < e ? (4 < e ? (e & 268435455 ? 16 : 536870912) : 4) : 1
  );
}
var Kd,
  Tl,
  Gd,
  Yd,
  Qd,
  fa = !1,
  wi = [],
  Vt = null,
  Lt = null,
  _t = null,
  Ir = new Map(),
  Fr = new Map(),
  Nt = [],
  rg =
    "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
      " ",
    );
function Ku(e, t) {
  switch (e) {
    case "focusin":
    case "focusout":
      Vt = null;
      break;
    case "dragenter":
    case "dragleave":
      Lt = null;
      break;
    case "mouseover":
    case "mouseout":
      _t = null;
      break;
    case "pointerover":
    case "pointerout":
      Ir.delete(t.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      Fr.delete(t.pointerId);
  }
}
function ar(e, t, n, r, i, s) {
  return e === null || e.nativeEvent !== s
    ? ((e = {
        blockedOn: t,
        domEventName: n,
        eventSystemFlags: r,
        nativeEvent: s,
        targetContainers: [i],
      }),
      t !== null && ((t = ri(t)), t !== null && Tl(t)),
      e)
    : ((e.eventSystemFlags |= r),
      (t = e.targetContainers),
      i !== null && t.indexOf(i) === -1 && t.push(i),
      e);
}
function ig(e, t, n, r, i) {
  switch (t) {
    case "focusin":
      return ((Vt = ar(Vt, e, t, n, r, i)), !0);
    case "dragenter":
      return ((Lt = ar(Lt, e, t, n, r, i)), !0);
    case "mouseover":
      return ((_t = ar(_t, e, t, n, r, i)), !0);
    case "pointerover":
      var s = i.pointerId;
      return (Ir.set(s, ar(Ir.get(s) || null, e, t, n, r, i)), !0);
    case "gotpointercapture":
      return (
        (s = i.pointerId),
        Fr.set(s, ar(Fr.get(s) || null, e, t, n, r, i)),
        !0
      );
  }
  return !1;
}
function Xd(e) {
  var t = nn(e.target);
  if (t !== null) {
    var n = vn(t);
    if (n !== null) {
      if (((t = n.tag), t === 13)) {
        if (((t = Od(n)), t !== null)) {
          ((e.blockedOn = t),
            Qd(e.priority, function () {
              Gd(n);
            }));
          return;
        }
      } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
        e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
        return;
      }
    }
  }
  e.blockedOn = null;
}
function Oi(e) {
  if (e.blockedOn !== null) return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = da(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
      n = e.nativeEvent;
      var r = new n.constructor(n.type, n);
      ((oa = r), n.target.dispatchEvent(r), (oa = null));
    } else return ((t = ri(n)), t !== null && Tl(t), (e.blockedOn = n), !1);
    t.shift();
  }
  return !0;
}
function Gu(e, t, n) {
  Oi(e) && n.delete(t);
}
function sg() {
  ((fa = !1),
    Vt !== null && Oi(Vt) && (Vt = null),
    Lt !== null && Oi(Lt) && (Lt = null),
    _t !== null && Oi(_t) && (_t = null),
    Ir.forEach(Gu),
    Fr.forEach(Gu));
}
function lr(e, t) {
  e.blockedOn === t &&
    ((e.blockedOn = null),
    fa ||
      ((fa = !0),
      _e.unstable_scheduleCallback(_e.unstable_NormalPriority, sg)));
}
function Or(e) {
  function t(i) {
    return lr(i, e);
  }
  if (0 < wi.length) {
    lr(wi[0], e);
    for (var n = 1; n < wi.length; n++) {
      var r = wi[n];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (
    Vt !== null && lr(Vt, e),
      Lt !== null && lr(Lt, e),
      _t !== null && lr(_t, e),
      Ir.forEach(t),
      Fr.forEach(t),
      n = 0;
    n < Nt.length;
    n++
  )
    ((r = Nt[n]), r.blockedOn === e && (r.blockedOn = null));
  for (; 0 < Nt.length && ((n = Nt[0]), n.blockedOn === null); )
    (Xd(n), n.blockedOn === null && Nt.shift());
}
var zn = kt.ReactCurrentBatchConfig,
  as = !0;
function og(e, t, n, r) {
  var i = O,
    s = zn.transition;
  zn.transition = null;
  try {
    ((O = 1), Cl(e, t, n, r));
  } finally {
    ((O = i), (zn.transition = s));
  }
}
function ag(e, t, n, r) {
  var i = O,
    s = zn.transition;
  zn.transition = null;
  try {
    ((O = 4), Cl(e, t, n, r));
  } finally {
    ((O = i), (zn.transition = s));
  }
}
function Cl(e, t, n, r) {
  if (as) {
    var i = da(e, t, n, r);
    if (i === null) (wo(e, t, r, ls, n), Ku(e, r));
    else if (ig(i, e, t, n, r)) r.stopPropagation();
    else if ((Ku(e, r), t & 4 && -1 < rg.indexOf(e))) {
      for (; i !== null; ) {
        var s = ri(i);
        if (
          (s !== null && Kd(s),
          (s = da(e, t, n, r)),
          s === null && wo(e, t, r, ls, n),
          s === i)
        )
          break;
        i = s;
      }
      i !== null && r.stopPropagation();
    } else wo(e, t, r, null, n);
  }
}
var ls = null;
function da(e, t, n, r) {
  if (((ls = null), (e = wl(r)), (e = nn(e)), e !== null))
    if (((t = vn(e)), t === null)) e = null;
    else if (((n = t.tag), n === 13)) {
      if (((e = Od(t)), e !== null)) return e;
      e = null;
    } else if (n === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated)
        return t.tag === 3 ? t.stateNode.containerInfo : null;
      e = null;
    } else t !== e && (e = null);
  return ((ls = e), null);
}
function Zd(e) {
  switch (e) {
    case "cancel":
    case "click":
    case "close":
    case "contextmenu":
    case "copy":
    case "cut":
    case "auxclick":
    case "dblclick":
    case "dragend":
    case "dragstart":
    case "drop":
    case "focusin":
    case "focusout":
    case "input":
    case "invalid":
    case "keydown":
    case "keypress":
    case "keyup":
    case "mousedown":
    case "mouseup":
    case "paste":
    case "pause":
    case "play":
    case "pointercancel":
    case "pointerdown":
    case "pointerup":
    case "ratechange":
    case "reset":
    case "resize":
    case "seeked":
    case "submit":
    case "touchcancel":
    case "touchend":
    case "touchstart":
    case "volumechange":
    case "change":
    case "selectionchange":
    case "textInput":
    case "compositionstart":
    case "compositionend":
    case "compositionupdate":
    case "beforeblur":
    case "afterblur":
    case "beforeinput":
    case "blur":
    case "fullscreenchange":
    case "focus":
    case "hashchange":
    case "popstate":
    case "select":
    case "selectstart":
      return 1;
    case "drag":
    case "dragenter":
    case "dragexit":
    case "dragleave":
    case "dragover":
    case "mousemove":
    case "mouseout":
    case "mouseover":
    case "pointermove":
    case "pointerout":
    case "pointerover":
    case "scroll":
    case "toggle":
    case "touchmove":
    case "wheel":
    case "mouseenter":
    case "mouseleave":
    case "pointerenter":
    case "pointerleave":
      return 4;
    case "message":
      switch (Yy()) {
        case Sl:
          return 1;
        case Ud:
          return 4;
        case ss:
        case Qy:
          return 16;
        case $d:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var At = null,
  Pl = null,
  zi = null;
function qd() {
  if (zi) return zi;
  var e,
    t = Pl,
    n = t.length,
    r,
    i = "value" in At ? At.value : At.textContent,
    s = i.length;
  for (e = 0; e < n && t[e] === i[e]; e++);
  var o = n - e;
  for (r = 1; r <= o && t[n - r] === i[s - r]; r++);
  return (zi = i.slice(e, 1 < r ? 1 - r : void 0));
}
function Bi(e) {
  var t = e.keyCode;
  return (
    "charCode" in e
      ? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
      : (e = t),
    e === 10 && (e = 13),
    32 <= e || e === 13 ? e : 0
  );
}
function Si() {
  return !0;
}
function Yu() {
  return !1;
}
function Fe(e) {
  function t(n, r, i, s, o) {
    ((this._reactName = n),
      (this._targetInst = i),
      (this.type = r),
      (this.nativeEvent = s),
      (this.target = o),
      (this.currentTarget = null));
    for (var a in e)
      e.hasOwnProperty(a) && ((n = e[a]), (this[a] = n ? n(s) : s[a]));
    return (
      (this.isDefaultPrevented = (
        s.defaultPrevented != null ? s.defaultPrevented : s.returnValue === !1
      )
        ? Si
        : Yu),
      (this.isPropagationStopped = Yu),
      this
    );
  }
  return (
    X(t.prototype, {
      preventDefault: function () {
        this.defaultPrevented = !0;
        var n = this.nativeEvent;
        n &&
          (n.preventDefault
            ? n.preventDefault()
            : typeof n.returnValue != "unknown" && (n.returnValue = !1),
          (this.isDefaultPrevented = Si));
      },
      stopPropagation: function () {
        var n = this.nativeEvent;
        n &&
          (n.stopPropagation
            ? n.stopPropagation()
            : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0),
          (this.isPropagationStopped = Si));
      },
      persist: function () {},
      isPersistent: Si,
    }),
    t
  );
}
var Jn = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function (e) {
      return e.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0,
  },
  El = Fe(Jn),
  ni = X({}, Jn, { view: 0, detail: 0 }),
  lg = Fe(ni),
  co,
  fo,
  ur,
  Fs = X({}, ni, {
    screenX: 0,
    screenY: 0,
    clientX: 0,
    clientY: 0,
    pageX: 0,
    pageY: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    getModifierState: Ml,
    button: 0,
    buttons: 0,
    relatedTarget: function (e) {
      return e.relatedTarget === void 0
        ? e.fromElement === e.srcElement
          ? e.toElement
          : e.fromElement
        : e.relatedTarget;
    },
    movementX: function (e) {
      return "movementX" in e
        ? e.movementX
        : (e !== ur &&
            (ur && e.type === "mousemove"
              ? ((co = e.screenX - ur.screenX), (fo = e.screenY - ur.screenY))
              : (fo = co = 0),
            (ur = e)),
          co);
    },
    movementY: function (e) {
      return "movementY" in e ? e.movementY : fo;
    },
  }),
  Qu = Fe(Fs),
  ug = X({}, Fs, { dataTransfer: 0 }),
  cg = Fe(ug),
  fg = X({}, ni, { relatedTarget: 0 }),
  ho = Fe(fg),
  dg = X({}, Jn, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
  hg = Fe(dg),
  pg = X({}, Jn, {
    clipboardData: function (e) {
      return "clipboardData" in e ? e.clipboardData : window.clipboardData;
    },
  }),
  mg = Fe(pg),
  yg = X({}, Jn, { data: 0 }),
  Xu = Fe(yg),
  gg = {
    Esc: "Escape",
    Spacebar: " ",
    Left: "ArrowLeft",
    Up: "ArrowUp",
    Right: "ArrowRight",
    Down: "ArrowDown",
    Del: "Delete",
    Win: "OS",
    Menu: "ContextMenu",
    Apps: "ContextMenu",
    Scroll: "ScrollLock",
    MozPrintableKey: "Unidentified",
  },
  vg = {
    8: "Backspace",
    9: "Tab",
    12: "Clear",
    13: "Enter",
    16: "Shift",
    17: "Control",
    18: "Alt",
    19: "Pause",
    20: "CapsLock",
    27: "Escape",
    32: " ",
    33: "PageUp",
    34: "PageDown",
    35: "End",
    36: "Home",
    37: "ArrowLeft",
    38: "ArrowUp",
    39: "ArrowRight",
    40: "ArrowDown",
    45: "Insert",
    46: "Delete",
    112: "F1",
    113: "F2",
    114: "F3",
    115: "F4",
    116: "F5",
    117: "F6",
    118: "F7",
    119: "F8",
    120: "F9",
    121: "F10",
    122: "F11",
    123: "F12",
    144: "NumLock",
    145: "ScrollLock",
    224: "Meta",
  },
  xg = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey",
  };
function wg(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = xg[e]) ? !!t[e] : !1;
}
function Ml() {
  return wg;
}
var Sg = X({}, ni, {
    key: function (e) {
      if (e.key) {
        var t = gg[e.key] || e.key;
        if (t !== "Unidentified") return t;
      }
      return e.type === "keypress"
        ? ((e = Bi(e)), e === 13 ? "Enter" : String.fromCharCode(e))
        : e.type === "keydown" || e.type === "keyup"
          ? vg[e.keyCode] || "Unidentified"
          : "";
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: Ml,
    charCode: function (e) {
      return e.type === "keypress" ? Bi(e) : 0;
    },
    keyCode: function (e) {
      return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    },
    which: function (e) {
      return e.type === "keypress"
        ? Bi(e)
        : e.type === "keydown" || e.type === "keyup"
          ? e.keyCode
          : 0;
    },
  }),
  kg = Fe(Sg),
  Tg = X({}, Fs, {
    pointerId: 0,
    width: 0,
    height: 0,
    pressure: 0,
    tangentialPressure: 0,
    tiltX: 0,
    tiltY: 0,
    twist: 0,
    pointerType: 0,
    isPrimary: 0,
  }),
  Zu = Fe(Tg),
  Cg = X({}, ni, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: Ml,
  }),
  Pg = Fe(Cg),
  Eg = X({}, Jn, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
  Mg = Fe(Eg),
  Ng = X({}, Fs, {
    deltaX: function (e) {
      return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
    },
    deltaY: function (e) {
      return "deltaY" in e
        ? e.deltaY
        : "wheelDeltaY" in e
          ? -e.wheelDeltaY
          : "wheelDelta" in e
            ? -e.wheelDelta
            : 0;
    },
    deltaZ: 0,
    deltaMode: 0,
  }),
  jg = Fe(Ng),
  Ag = [9, 13, 27, 32],
  Nl = vt && "CompositionEvent" in window,
  kr = null;
vt && "documentMode" in document && (kr = document.documentMode);
var Dg = vt && "TextEvent" in window && !kr,
  Jd = vt && (!Nl || (kr && 8 < kr && 11 >= kr)),
  qu = " ",
  Ju = !1;
function eh(e, t) {
  switch (e) {
    case "keyup":
      return Ag.indexOf(t.keyCode) !== -1;
    case "keydown":
      return t.keyCode !== 229;
    case "keypress":
    case "mousedown":
    case "focusout":
      return !0;
    default:
      return !1;
  }
}
function th(e) {
  return ((e = e.detail), typeof e == "object" && "data" in e ? e.data : null);
}
var Tn = !1;
function Rg(e, t) {
  switch (e) {
    case "compositionend":
      return th(t);
    case "keypress":
      return t.which !== 32 ? null : ((Ju = !0), qu);
    case "textInput":
      return ((e = t.data), e === qu && Ju ? null : e);
    default:
      return null;
  }
}
function Vg(e, t) {
  if (Tn)
    return e === "compositionend" || (!Nl && eh(e, t))
      ? ((e = qd()), (zi = Pl = At = null), (Tn = !1), e)
      : null;
  switch (e) {
    case "paste":
      return null;
    case "keypress":
      if (!(t.ctrlKey || t.altKey || t.metaKey) || (t.ctrlKey && t.altKey)) {
        if (t.char && 1 < t.char.length) return t.char;
        if (t.which) return String.fromCharCode(t.which);
      }
      return null;
    case "compositionend":
      return Jd && t.locale !== "ko" ? null : t.data;
    default:
      return null;
  }
}
var Lg = {
  color: !0,
  date: !0,
  datetime: !0,
  "datetime-local": !0,
  email: !0,
  month: !0,
  number: !0,
  password: !0,
  range: !0,
  search: !0,
  tel: !0,
  text: !0,
  time: !0,
  url: !0,
  week: !0,
};
function ec(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === "input" ? !!Lg[e.type] : t === "textarea";
}
function nh(e, t, n, r) {
  (Vd(r),
    (t = us(t, "onChange")),
    0 < t.length &&
      ((n = new El("onChange", "change", null, n, r)),
      e.push({ event: n, listeners: t })));
}
var Tr = null,
  zr = null;
function _g(e) {
  hh(e, 0);
}
function Os(e) {
  var t = En(e);
  if (Ed(t)) return e;
}
function Ig(e, t) {
  if (e === "change") return t;
}
var rh = !1;
if (vt) {
  var po;
  if (vt) {
    var mo = "oninput" in document;
    if (!mo) {
      var tc = document.createElement("div");
      (tc.setAttribute("oninput", "return;"),
        (mo = typeof tc.oninput == "function"));
    }
    po = mo;
  } else po = !1;
  rh = po && (!document.documentMode || 9 < document.documentMode);
}
function nc() {
  Tr && (Tr.detachEvent("onpropertychange", ih), (zr = Tr = null));
}
function ih(e) {
  if (e.propertyName === "value" && Os(zr)) {
    var t = [];
    (nh(t, zr, e, wl(e)), Fd(_g, t));
  }
}
function Fg(e, t, n) {
  e === "focusin"
    ? (nc(), (Tr = t), (zr = n), Tr.attachEvent("onpropertychange", ih))
    : e === "focusout" && nc();
}
function Og(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown")
    return Os(zr);
}
function zg(e, t) {
  if (e === "click") return Os(t);
}
function Bg(e, t) {
  if (e === "input" || e === "change") return Os(t);
}
function bg(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var nt = typeof Object.is == "function" ? Object.is : bg;
function Br(e, t) {
  if (nt(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null)
    return !1;
  var n = Object.keys(e),
    r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (r = 0; r < n.length; r++) {
    var i = n[r];
    if (!Yo.call(t, i) || !nt(e[i], t[i])) return !1;
  }
  return !0;
}
function rc(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function ic(e, t) {
  var n = rc(e);
  e = 0;
  for (var r; n; ) {
    if (n.nodeType === 3) {
      if (((r = e + n.textContent.length), e <= t && r >= t))
        return { node: n, offset: t - e };
      e = r;
    }
    e: {
      for (; n; ) {
        if (n.nextSibling) {
          n = n.nextSibling;
          break e;
        }
        n = n.parentNode;
      }
      n = void 0;
    }
    n = rc(n);
  }
}
function sh(e, t) {
  return e && t
    ? e === t
      ? !0
      : e && e.nodeType === 3
        ? !1
        : t && t.nodeType === 3
          ? sh(e, t.parentNode)
          : "contains" in e
            ? e.contains(t)
            : e.compareDocumentPosition
              ? !!(e.compareDocumentPosition(t) & 16)
              : !1
    : !1;
}
function oh() {
  for (var e = window, t = ns(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == "string";
    } catch {
      n = !1;
    }
    if (n) e = t.contentWindow;
    else break;
    t = ns(e.document);
  }
  return t;
}
function jl(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return (
    t &&
    ((t === "input" &&
      (e.type === "text" ||
        e.type === "search" ||
        e.type === "tel" ||
        e.type === "url" ||
        e.type === "password")) ||
      t === "textarea" ||
      e.contentEditable === "true")
  );
}
function Ug(e) {
  var t = oh(),
    n = e.focusedElem,
    r = e.selectionRange;
  if (
    t !== n &&
    n &&
    n.ownerDocument &&
    sh(n.ownerDocument.documentElement, n)
  ) {
    if (r !== null && jl(n)) {
      if (
        ((t = r.start),
        (e = r.end),
        e === void 0 && (e = t),
        "selectionStart" in n)
      )
        ((n.selectionStart = t),
          (n.selectionEnd = Math.min(e, n.value.length)));
      else if (
        ((e = ((t = n.ownerDocument || document) && t.defaultView) || window),
        e.getSelection)
      ) {
        e = e.getSelection();
        var i = n.textContent.length,
          s = Math.min(r.start, i);
        ((r = r.end === void 0 ? s : Math.min(r.end, i)),
          !e.extend && s > r && ((i = r), (r = s), (s = i)),
          (i = ic(n, s)));
        var o = ic(n, r);
        i &&
          o &&
          (e.rangeCount !== 1 ||
            e.anchorNode !== i.node ||
            e.anchorOffset !== i.offset ||
            e.focusNode !== o.node ||
            e.focusOffset !== o.offset) &&
          ((t = t.createRange()),
          t.setStart(i.node, i.offset),
          e.removeAllRanges(),
          s > r
            ? (e.addRange(t), e.extend(o.node, o.offset))
            : (t.setEnd(o.node, o.offset), e.addRange(t)));
      }
    }
    for (t = [], e = n; (e = e.parentNode); )
      e.nodeType === 1 &&
        t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
    for (typeof n.focus == "function" && n.focus(), n = 0; n < t.length; n++)
      ((e = t[n]),
        (e.element.scrollLeft = e.left),
        (e.element.scrollTop = e.top));
  }
}
var $g = vt && "documentMode" in document && 11 >= document.documentMode,
  Cn = null,
  ha = null,
  Cr = null,
  pa = !1;
function sc(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  pa ||
    Cn == null ||
    Cn !== ns(r) ||
    ((r = Cn),
    "selectionStart" in r && jl(r)
      ? (r = { start: r.selectionStart, end: r.selectionEnd })
      : ((r = (
          (r.ownerDocument && r.ownerDocument.defaultView) ||
          window
        ).getSelection()),
        (r = {
          anchorNode: r.anchorNode,
          anchorOffset: r.anchorOffset,
          focusNode: r.focusNode,
          focusOffset: r.focusOffset,
        })),
    (Cr && Br(Cr, r)) ||
      ((Cr = r),
      (r = us(ha, "onSelect")),
      0 < r.length &&
        ((t = new El("onSelect", "select", null, t, n)),
        e.push({ event: t, listeners: r }),
        (t.target = Cn))));
}
function ki(e, t) {
  var n = {};
  return (
    (n[e.toLowerCase()] = t.toLowerCase()),
    (n["Webkit" + e] = "webkit" + t),
    (n["Moz" + e] = "moz" + t),
    n
  );
}
var Pn = {
    animationend: ki("Animation", "AnimationEnd"),
    animationiteration: ki("Animation", "AnimationIteration"),
    animationstart: ki("Animation", "AnimationStart"),
    transitionend: ki("Transition", "TransitionEnd"),
  },
  yo = {},
  ah = {};
vt &&
  ((ah = document.createElement("div").style),
  "AnimationEvent" in window ||
    (delete Pn.animationend.animation,
    delete Pn.animationiteration.animation,
    delete Pn.animationstart.animation),
  "TransitionEvent" in window || delete Pn.transitionend.transition);
function zs(e) {
  if (yo[e]) return yo[e];
  if (!Pn[e]) return e;
  var t = Pn[e],
    n;
  for (n in t) if (t.hasOwnProperty(n) && n in ah) return (yo[e] = t[n]);
  return e;
}
var lh = zs("animationend"),
  uh = zs("animationiteration"),
  ch = zs("animationstart"),
  fh = zs("transitionend"),
  dh = new Map(),
  oc =
    "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
      " ",
    );
function Kt(e, t) {
  (dh.set(e, t), gn(t, [e]));
}
for (var go = 0; go < oc.length; go++) {
  var vo = oc[go],
    Wg = vo.toLowerCase(),
    Hg = vo[0].toUpperCase() + vo.slice(1);
  Kt(Wg, "on" + Hg);
}
Kt(lh, "onAnimationEnd");
Kt(uh, "onAnimationIteration");
Kt(ch, "onAnimationStart");
Kt("dblclick", "onDoubleClick");
Kt("focusin", "onFocus");
Kt("focusout", "onBlur");
Kt(fh, "onTransitionEnd");
Un("onMouseEnter", ["mouseout", "mouseover"]);
Un("onMouseLeave", ["mouseout", "mouseover"]);
Un("onPointerEnter", ["pointerout", "pointerover"]);
Un("onPointerLeave", ["pointerout", "pointerover"]);
gn(
  "onChange",
  "change click focusin focusout input keydown keyup selectionchange".split(
    " ",
  ),
);
gn(
  "onSelect",
  "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
    " ",
  ),
);
gn("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
gn(
  "onCompositionEnd",
  "compositionend focusout keydown keypress keyup mousedown".split(" "),
);
gn(
  "onCompositionStart",
  "compositionstart focusout keydown keypress keyup mousedown".split(" "),
);
gn(
  "onCompositionUpdate",
  "compositionupdate focusout keydown keypress keyup mousedown".split(" "),
);
var vr =
    "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
      " ",
    ),
  Kg = new Set("cancel close invalid load scroll toggle".split(" ").concat(vr));
function ac(e, t, n) {
  var r = e.type || "unknown-event";
  ((e.currentTarget = n), Wy(r, t, void 0, e), (e.currentTarget = null));
}
function hh(e, t) {
  t = (t & 4) !== 0;
  for (var n = 0; n < e.length; n++) {
    var r = e[n],
      i = r.event;
    r = r.listeners;
    e: {
      var s = void 0;
      if (t)
        for (var o = r.length - 1; 0 <= o; o--) {
          var a = r[o],
            l = a.instance,
            u = a.currentTarget;
          if (((a = a.listener), l !== s && i.isPropagationStopped())) break e;
          (ac(i, a, u), (s = l));
        }
      else
        for (o = 0; o < r.length; o++) {
          if (
            ((a = r[o]),
            (l = a.instance),
            (u = a.currentTarget),
            (a = a.listener),
            l !== s && i.isPropagationStopped())
          )
            break e;
          (ac(i, a, u), (s = l));
        }
    }
  }
  if (is) throw ((e = ua), (is = !1), (ua = null), e);
}
function U(e, t) {
  var n = t[xa];
  n === void 0 && (n = t[xa] = new Set());
  var r = e + "__bubble";
  n.has(r) || (ph(t, e, 2, !1), n.add(r));
}
function xo(e, t, n) {
  var r = 0;
  (t && (r |= 4), ph(n, e, r, t));
}
var Ti = "_reactListening" + Math.random().toString(36).slice(2);
function br(e) {
  if (!e[Ti]) {
    ((e[Ti] = !0),
      Sd.forEach(function (n) {
        n !== "selectionchange" && (Kg.has(n) || xo(n, !1, e), xo(n, !0, e));
      }));
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[Ti] || ((t[Ti] = !0), xo("selectionchange", !1, t));
  }
}
function ph(e, t, n, r) {
  switch (Zd(t)) {
    case 1:
      var i = og;
      break;
    case 4:
      i = ag;
      break;
    default:
      i = Cl;
  }
  ((n = i.bind(null, t, n, e)),
    (i = void 0),
    !la ||
      (t !== "touchstart" && t !== "touchmove" && t !== "wheel") ||
      (i = !0),
    r
      ? i !== void 0
        ? e.addEventListener(t, n, { capture: !0, passive: i })
        : e.addEventListener(t, n, !0)
      : i !== void 0
        ? e.addEventListener(t, n, { passive: i })
        : e.addEventListener(t, n, !1));
}
function wo(e, t, n, r, i) {
  var s = r;
  if (!(t & 1) && !(t & 2) && r !== null)
    e: for (;;) {
      if (r === null) return;
      var o = r.tag;
      if (o === 3 || o === 4) {
        var a = r.stateNode.containerInfo;
        if (a === i || (a.nodeType === 8 && a.parentNode === i)) break;
        if (o === 4)
          for (o = r.return; o !== null; ) {
            var l = o.tag;
            if (
              (l === 3 || l === 4) &&
              ((l = o.stateNode.containerInfo),
              l === i || (l.nodeType === 8 && l.parentNode === i))
            )
              return;
            o = o.return;
          }
        for (; a !== null; ) {
          if (((o = nn(a)), o === null)) return;
          if (((l = o.tag), l === 5 || l === 6)) {
            r = s = o;
            continue e;
          }
          a = a.parentNode;
        }
      }
      r = r.return;
    }
  Fd(function () {
    var u = s,
      c = wl(n),
      f = [];
    e: {
      var d = dh.get(e);
      if (d !== void 0) {
        var y = El,
          v = e;
        switch (e) {
          case "keypress":
            if (Bi(n) === 0) break e;
          case "keydown":
          case "keyup":
            y = kg;
            break;
          case "focusin":
            ((v = "focus"), (y = ho));
            break;
          case "focusout":
            ((v = "blur"), (y = ho));
            break;
          case "beforeblur":
          case "afterblur":
            y = ho;
            break;
          case "click":
            if (n.button === 2) break e;
          case "auxclick":
          case "dblclick":
          case "mousedown":
          case "mousemove":
          case "mouseup":
          case "mouseout":
          case "mouseover":
          case "contextmenu":
            y = Qu;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            y = cg;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            y = Pg;
            break;
          case lh:
          case uh:
          case ch:
            y = hg;
            break;
          case fh:
            y = Mg;
            break;
          case "scroll":
            y = lg;
            break;
          case "wheel":
            y = jg;
            break;
          case "copy":
          case "cut":
          case "paste":
            y = mg;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            y = Zu;
        }
        var w = (t & 4) !== 0,
          k = !w && e === "scroll",
          p = w ? (d !== null ? d + "Capture" : null) : d;
        w = [];
        for (var h = u, m; h !== null; ) {
          m = h;
          var x = m.stateNode;
          if (
            (m.tag === 5 &&
              x !== null &&
              ((m = x),
              p !== null && ((x = _r(h, p)), x != null && w.push(Ur(h, x, m)))),
            k)
          )
            break;
          h = h.return;
        }
        0 < w.length &&
          ((d = new y(d, v, null, n, c)), f.push({ event: d, listeners: w }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (
          ((d = e === "mouseover" || e === "pointerover"),
          (y = e === "mouseout" || e === "pointerout"),
          d &&
            n !== oa &&
            (v = n.relatedTarget || n.fromElement) &&
            (nn(v) || v[xt]))
        )
          break e;
        if (
          (y || d) &&
          ((d =
            c.window === c
              ? c
              : (d = c.ownerDocument)
                ? d.defaultView || d.parentWindow
                : window),
          y
            ? ((v = n.relatedTarget || n.toElement),
              (y = u),
              (v = v ? nn(v) : null),
              v !== null &&
                ((k = vn(v)), v !== k || (v.tag !== 5 && v.tag !== 6)) &&
                (v = null))
            : ((y = null), (v = u)),
          y !== v)
        ) {
          if (
            ((w = Qu),
            (x = "onMouseLeave"),
            (p = "onMouseEnter"),
            (h = "mouse"),
            (e === "pointerout" || e === "pointerover") &&
              ((w = Zu),
              (x = "onPointerLeave"),
              (p = "onPointerEnter"),
              (h = "pointer")),
            (k = y == null ? d : En(y)),
            (m = v == null ? d : En(v)),
            (d = new w(x, h + "leave", y, n, c)),
            (d.target = k),
            (d.relatedTarget = m),
            (x = null),
            nn(c) === u &&
              ((w = new w(p, h + "enter", v, n, c)),
              (w.target = m),
              (w.relatedTarget = k),
              (x = w)),
            (k = x),
            y && v)
          )
            t: {
              for (w = y, p = v, h = 0, m = w; m; m = xn(m)) h++;
              for (m = 0, x = p; x; x = xn(x)) m++;
              for (; 0 < h - m; ) ((w = xn(w)), h--);
              for (; 0 < m - h; ) ((p = xn(p)), m--);
              for (; h--; ) {
                if (w === p || (p !== null && w === p.alternate)) break t;
                ((w = xn(w)), (p = xn(p)));
              }
              w = null;
            }
          else w = null;
          (y !== null && lc(f, d, y, w, !1),
            v !== null && k !== null && lc(f, k, v, w, !0));
        }
      }
      e: {
        if (
          ((d = u ? En(u) : window),
          (y = d.nodeName && d.nodeName.toLowerCase()),
          y === "select" || (y === "input" && d.type === "file"))
        )
          var S = Ig;
        else if (ec(d))
          if (rh) S = Bg;
          else {
            S = Og;
            var E = Fg;
          }
        else
          (y = d.nodeName) &&
            y.toLowerCase() === "input" &&
            (d.type === "checkbox" || d.type === "radio") &&
            (S = zg);
        if (S && (S = S(e, u))) {
          nh(f, S, n, c);
          break e;
        }
        (E && E(e, d, u),
          e === "focusout" &&
            (E = d._wrapperState) &&
            E.controlled &&
            d.type === "number" &&
            ta(d, "number", d.value));
      }
      switch (((E = u ? En(u) : window), e)) {
        case "focusin":
          (ec(E) || E.contentEditable === "true") &&
            ((Cn = E), (ha = u), (Cr = null));
          break;
        case "focusout":
          Cr = ha = Cn = null;
          break;
        case "mousedown":
          pa = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          ((pa = !1), sc(f, n, c));
          break;
        case "selectionchange":
          if ($g) break;
        case "keydown":
        case "keyup":
          sc(f, n, c);
      }
      var N;
      if (Nl)
        e: {
          switch (e) {
            case "compositionstart":
              var T = "onCompositionStart";
              break e;
            case "compositionend":
              T = "onCompositionEnd";
              break e;
            case "compositionupdate":
              T = "onCompositionUpdate";
              break e;
          }
          T = void 0;
        }
      else
        Tn
          ? eh(e, n) && (T = "onCompositionEnd")
          : e === "keydown" && n.keyCode === 229 && (T = "onCompositionStart");
      (T &&
        (Jd &&
          n.locale !== "ko" &&
          (Tn || T !== "onCompositionStart"
            ? T === "onCompositionEnd" && Tn && (N = qd())
            : ((At = c),
              (Pl = "value" in At ? At.value : At.textContent),
              (Tn = !0))),
        (E = us(u, T)),
        0 < E.length &&
          ((T = new Xu(T, e, null, n, c)),
          f.push({ event: T, listeners: E }),
          N ? (T.data = N) : ((N = th(n)), N !== null && (T.data = N)))),
        (N = Dg ? Rg(e, n) : Vg(e, n)) &&
          ((u = us(u, "onBeforeInput")),
          0 < u.length &&
            ((c = new Xu("onBeforeInput", "beforeinput", null, n, c)),
            f.push({ event: c, listeners: u }),
            (c.data = N))));
    }
    hh(f, t);
  });
}
function Ur(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function us(e, t) {
  for (var n = t + "Capture", r = []; e !== null; ) {
    var i = e,
      s = i.stateNode;
    (i.tag === 5 &&
      s !== null &&
      ((i = s),
      (s = _r(e, n)),
      s != null && r.unshift(Ur(e, s, i)),
      (s = _r(e, t)),
      s != null && r.push(Ur(e, s, i))),
      (e = e.return));
  }
  return r;
}
function xn(e) {
  if (e === null) return null;
  do e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function lc(e, t, n, r, i) {
  for (var s = t._reactName, o = []; n !== null && n !== r; ) {
    var a = n,
      l = a.alternate,
      u = a.stateNode;
    if (l !== null && l === r) break;
    (a.tag === 5 &&
      u !== null &&
      ((a = u),
      i
        ? ((l = _r(n, s)), l != null && o.unshift(Ur(n, l, a)))
        : i || ((l = _r(n, s)), l != null && o.push(Ur(n, l, a)))),
      (n = n.return));
  }
  o.length !== 0 && e.push({ event: t, listeners: o });
}
var Gg = /\r\n?/g,
  Yg = /\u0000|\uFFFD/g;
function uc(e) {
  return (typeof e == "string" ? e : "" + e)
    .replace(
      Gg,
      `
`,
    )
    .replace(Yg, "");
}
function Ci(e, t, n) {
  if (((t = uc(t)), uc(e) !== t && n)) throw Error(C(425));
}
function cs() {}
var ma = null,
  ya = null;
function ga(e, t) {
  return (
    e === "textarea" ||
    e === "noscript" ||
    typeof t.children == "string" ||
    typeof t.children == "number" ||
    (typeof t.dangerouslySetInnerHTML == "object" &&
      t.dangerouslySetInnerHTML !== null &&
      t.dangerouslySetInnerHTML.__html != null)
  );
}
var va = typeof setTimeout == "function" ? setTimeout : void 0,
  Qg = typeof clearTimeout == "function" ? clearTimeout : void 0,
  cc = typeof Promise == "function" ? Promise : void 0,
  Xg =
    typeof queueMicrotask == "function"
      ? queueMicrotask
      : typeof cc < "u"
        ? function (e) {
            return cc.resolve(null).then(e).catch(Zg);
          }
        : va;
function Zg(e) {
  setTimeout(function () {
    throw e;
  });
}
function So(e, t) {
  var n = t,
    r = 0;
  do {
    var i = n.nextSibling;
    if ((e.removeChild(n), i && i.nodeType === 8))
      if (((n = i.data), n === "/$")) {
        if (r === 0) {
          (e.removeChild(i), Or(t));
          return;
        }
        r--;
      } else (n !== "$" && n !== "$?" && n !== "$!") || r++;
    n = i;
  } while (n);
  Or(t);
}
function It(e) {
  for (; e != null; e = e.nextSibling) {
    var t = e.nodeType;
    if (t === 1 || t === 3) break;
    if (t === 8) {
      if (((t = e.data), t === "$" || t === "$!" || t === "$?")) break;
      if (t === "/$") return null;
    }
  }
  return e;
}
function fc(e) {
  e = e.previousSibling;
  for (var t = 0; e; ) {
    if (e.nodeType === 8) {
      var n = e.data;
      if (n === "$" || n === "$!" || n === "$?") {
        if (t === 0) return e;
        t--;
      } else n === "/$" && t++;
    }
    e = e.previousSibling;
  }
  return null;
}
var er = Math.random().toString(36).slice(2),
  at = "__reactFiber$" + er,
  $r = "__reactProps$" + er,
  xt = "__reactContainer$" + er,
  xa = "__reactEvents$" + er,
  qg = "__reactListeners$" + er,
  Jg = "__reactHandles$" + er;
function nn(e) {
  var t = e[at];
  if (t) return t;
  for (var n = e.parentNode; n; ) {
    if ((t = n[xt] || n[at])) {
      if (
        ((n = t.alternate),
        t.child !== null || (n !== null && n.child !== null))
      )
        for (e = fc(e); e !== null; ) {
          if ((n = e[at])) return n;
          e = fc(e);
        }
      return t;
    }
    ((e = n), (n = e.parentNode));
  }
  return null;
}
function ri(e) {
  return (
    (e = e[at] || e[xt]),
    !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3) ? null : e
  );
}
function En(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(C(33));
}
function Bs(e) {
  return e[$r] || null;
}
var wa = [],
  Mn = -1;
function Gt(e) {
  return { current: e };
}
function W(e) {
  0 > Mn || ((e.current = wa[Mn]), (wa[Mn] = null), Mn--);
}
function b(e, t) {
  (Mn++, (wa[Mn] = e.current), (e.current = t));
}
var $t = {},
  ye = Gt($t),
  Me = Gt(!1),
  dn = $t;
function $n(e, t) {
  var n = e.type.contextTypes;
  if (!n) return $t;
  var r = e.stateNode;
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
    return r.__reactInternalMemoizedMaskedChildContext;
  var i = {},
    s;
  for (s in n) i[s] = t[s];
  return (
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = t),
      (e.__reactInternalMemoizedMaskedChildContext = i)),
    i
  );
}
function Ne(e) {
  return ((e = e.childContextTypes), e != null);
}
function fs() {
  (W(Me), W(ye));
}
function dc(e, t, n) {
  if (ye.current !== $t) throw Error(C(168));
  (b(ye, t), b(Me, n));
}
function mh(e, t, n) {
  var r = e.stateNode;
  if (((t = t.childContextTypes), typeof r.getChildContext != "function"))
    return n;
  r = r.getChildContext();
  for (var i in r) if (!(i in t)) throw Error(C(108, Fy(e) || "Unknown", i));
  return X({}, n, r);
}
function ds(e) {
  return (
    (e =
      ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || $t),
    (dn = ye.current),
    b(ye, e),
    b(Me, Me.current),
    !0
  );
}
function hc(e, t, n) {
  var r = e.stateNode;
  if (!r) throw Error(C(169));
  (n
    ? ((e = mh(e, t, dn)),
      (r.__reactInternalMemoizedMergedChildContext = e),
      W(Me),
      W(ye),
      b(ye, e))
    : W(Me),
    b(Me, n));
}
var pt = null,
  bs = !1,
  ko = !1;
function yh(e) {
  pt === null ? (pt = [e]) : pt.push(e);
}
function e0(e) {
  ((bs = !0), yh(e));
}
function Yt() {
  if (!ko && pt !== null) {
    ko = !0;
    var e = 0,
      t = O;
    try {
      var n = pt;
      for (O = 1; e < n.length; e++) {
        var r = n[e];
        do r = r(!0);
        while (r !== null);
      }
      ((pt = null), (bs = !1));
    } catch (i) {
      throw (pt !== null && (pt = pt.slice(e + 1)), bd(Sl, Yt), i);
    } finally {
      ((O = t), (ko = !1));
    }
  }
  return null;
}
var Nn = [],
  jn = 0,
  hs = null,
  ps = 0,
  Oe = [],
  ze = 0,
  hn = null,
  mt = 1,
  yt = "";
function Jt(e, t) {
  ((Nn[jn++] = ps), (Nn[jn++] = hs), (hs = e), (ps = t));
}
function gh(e, t, n) {
  ((Oe[ze++] = mt), (Oe[ze++] = yt), (Oe[ze++] = hn), (hn = e));
  var r = mt;
  e = yt;
  var i = 32 - Je(r) - 1;
  ((r &= ~(1 << i)), (n += 1));
  var s = 32 - Je(t) + i;
  if (30 < s) {
    var o = i - (i % 5);
    ((s = (r & ((1 << o) - 1)).toString(32)),
      (r >>= o),
      (i -= o),
      (mt = (1 << (32 - Je(t) + i)) | (n << i) | r),
      (yt = s + e));
  } else ((mt = (1 << s) | (n << i) | r), (yt = e));
}
function Al(e) {
  e.return !== null && (Jt(e, 1), gh(e, 1, 0));
}
function Dl(e) {
  for (; e === hs; )
    ((hs = Nn[--jn]), (Nn[jn] = null), (ps = Nn[--jn]), (Nn[jn] = null));
  for (; e === hn; )
    ((hn = Oe[--ze]),
      (Oe[ze] = null),
      (yt = Oe[--ze]),
      (Oe[ze] = null),
      (mt = Oe[--ze]),
      (Oe[ze] = null));
}
var Le = null,
  Ve = null,
  H = !1,
  qe = null;
function vh(e, t) {
  var n = Be(5, null, null, 0);
  ((n.elementType = "DELETED"),
    (n.stateNode = t),
    (n.return = e),
    (t = e.deletions),
    t === null ? ((e.deletions = [n]), (e.flags |= 16)) : t.push(n));
}
function pc(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return (
        (t =
          t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase()
            ? null
            : t),
        t !== null
          ? ((e.stateNode = t), (Le = e), (Ve = It(t.firstChild)), !0)
          : !1
      );
    case 6:
      return (
        (t = e.pendingProps === "" || t.nodeType !== 3 ? null : t),
        t !== null ? ((e.stateNode = t), (Le = e), (Ve = null), !0) : !1
      );
    case 13:
      return (
        (t = t.nodeType !== 8 ? null : t),
        t !== null
          ? ((n = hn !== null ? { id: mt, overflow: yt } : null),
            (e.memoizedState = {
              dehydrated: t,
              treeContext: n,
              retryLane: 1073741824,
            }),
            (n = Be(18, null, null, 0)),
            (n.stateNode = t),
            (n.return = e),
            (e.child = n),
            (Le = e),
            (Ve = null),
            !0)
          : !1
      );
    default:
      return !1;
  }
}
function Sa(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function ka(e) {
  if (H) {
    var t = Ve;
    if (t) {
      var n = t;
      if (!pc(e, t)) {
        if (Sa(e)) throw Error(C(418));
        t = It(n.nextSibling);
        var r = Le;
        t && pc(e, t)
          ? vh(r, n)
          : ((e.flags = (e.flags & -4097) | 2), (H = !1), (Le = e));
      }
    } else {
      if (Sa(e)) throw Error(C(418));
      ((e.flags = (e.flags & -4097) | 2), (H = !1), (Le = e));
    }
  }
}
function mc(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
    e = e.return;
  Le = e;
}
function Pi(e) {
  if (e !== Le) return !1;
  if (!H) return (mc(e), (H = !0), !1);
  var t;
  if (
    ((t = e.tag !== 3) &&
      !(t = e.tag !== 5) &&
      ((t = e.type),
      (t = t !== "head" && t !== "body" && !ga(e.type, e.memoizedProps))),
    t && (t = Ve))
  ) {
    if (Sa(e)) throw (xh(), Error(C(418)));
    for (; t; ) (vh(e, t), (t = It(t.nextSibling)));
  }
  if ((mc(e), e.tag === 13)) {
    if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
      throw Error(C(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === "/$") {
            if (t === 0) {
              Ve = It(e.nextSibling);
              break e;
            }
            t--;
          } else (n !== "$" && n !== "$!" && n !== "$?") || t++;
        }
        e = e.nextSibling;
      }
      Ve = null;
    }
  } else Ve = Le ? It(e.stateNode.nextSibling) : null;
  return !0;
}
function xh() {
  for (var e = Ve; e; ) e = It(e.nextSibling);
}
function Wn() {
  ((Ve = Le = null), (H = !1));
}
function Rl(e) {
  qe === null ? (qe = [e]) : qe.push(e);
}
var t0 = kt.ReactCurrentBatchConfig;
function cr(e, t, n) {
  if (
    ((e = n.ref), e !== null && typeof e != "function" && typeof e != "object")
  ) {
    if (n._owner) {
      if (((n = n._owner), n)) {
        if (n.tag !== 1) throw Error(C(309));
        var r = n.stateNode;
      }
      if (!r) throw Error(C(147, e));
      var i = r,
        s = "" + e;
      return t !== null &&
        t.ref !== null &&
        typeof t.ref == "function" &&
        t.ref._stringRef === s
        ? t.ref
        : ((t = function (o) {
            var a = i.refs;
            o === null ? delete a[s] : (a[s] = o);
          }),
          (t._stringRef = s),
          t);
    }
    if (typeof e != "string") throw Error(C(284));
    if (!n._owner) throw Error(C(290, e));
  }
  return e;
}
function Ei(e, t) {
  throw (
    (e = Object.prototype.toString.call(t)),
    Error(
      C(
        31,
        e === "[object Object]"
          ? "object with keys {" + Object.keys(t).join(", ") + "}"
          : e,
      ),
    )
  );
}
function yc(e) {
  var t = e._init;
  return t(e._payload);
}
function wh(e) {
  function t(p, h) {
    if (e) {
      var m = p.deletions;
      m === null ? ((p.deletions = [h]), (p.flags |= 16)) : m.push(h);
    }
  }
  function n(p, h) {
    if (!e) return null;
    for (; h !== null; ) (t(p, h), (h = h.sibling));
    return null;
  }
  function r(p, h) {
    for (p = new Map(); h !== null; )
      (h.key !== null ? p.set(h.key, h) : p.set(h.index, h), (h = h.sibling));
    return p;
  }
  function i(p, h) {
    return ((p = Bt(p, h)), (p.index = 0), (p.sibling = null), p);
  }
  function s(p, h, m) {
    return (
      (p.index = m),
      e
        ? ((m = p.alternate),
          m !== null
            ? ((m = m.index), m < h ? ((p.flags |= 2), h) : m)
            : ((p.flags |= 2), h))
        : ((p.flags |= 1048576), h)
    );
  }
  function o(p) {
    return (e && p.alternate === null && (p.flags |= 2), p);
  }
  function a(p, h, m, x) {
    return h === null || h.tag !== 6
      ? ((h = jo(m, p.mode, x)), (h.return = p), h)
      : ((h = i(h, m)), (h.return = p), h);
  }
  function l(p, h, m, x) {
    var S = m.type;
    return S === kn
      ? c(p, h, m.props.children, x, m.key)
      : h !== null &&
          (h.elementType === S ||
            (typeof S == "object" &&
              S !== null &&
              S.$$typeof === Et &&
              yc(S) === h.type))
        ? ((x = i(h, m.props)), (x.ref = cr(p, h, m)), (x.return = p), x)
        : ((x = Gi(m.type, m.key, m.props, null, p.mode, x)),
          (x.ref = cr(p, h, m)),
          (x.return = p),
          x);
  }
  function u(p, h, m, x) {
    return h === null ||
      h.tag !== 4 ||
      h.stateNode.containerInfo !== m.containerInfo ||
      h.stateNode.implementation !== m.implementation
      ? ((h = Ao(m, p.mode, x)), (h.return = p), h)
      : ((h = i(h, m.children || [])), (h.return = p), h);
  }
  function c(p, h, m, x, S) {
    return h === null || h.tag !== 7
      ? ((h = un(m, p.mode, x, S)), (h.return = p), h)
      : ((h = i(h, m)), (h.return = p), h);
  }
  function f(p, h, m) {
    if ((typeof h == "string" && h !== "") || typeof h == "number")
      return ((h = jo("" + h, p.mode, m)), (h.return = p), h);
    if (typeof h == "object" && h !== null) {
      switch (h.$$typeof) {
        case mi:
          return (
            (m = Gi(h.type, h.key, h.props, null, p.mode, m)),
            (m.ref = cr(p, null, h)),
            (m.return = p),
            m
          );
        case Sn:
          return ((h = Ao(h, p.mode, m)), (h.return = p), h);
        case Et:
          var x = h._init;
          return f(p, x(h._payload), m);
      }
      if (yr(h) || sr(h))
        return ((h = un(h, p.mode, m, null)), (h.return = p), h);
      Ei(p, h);
    }
    return null;
  }
  function d(p, h, m, x) {
    var S = h !== null ? h.key : null;
    if ((typeof m == "string" && m !== "") || typeof m == "number")
      return S !== null ? null : a(p, h, "" + m, x);
    if (typeof m == "object" && m !== null) {
      switch (m.$$typeof) {
        case mi:
          return m.key === S ? l(p, h, m, x) : null;
        case Sn:
          return m.key === S ? u(p, h, m, x) : null;
        case Et:
          return ((S = m._init), d(p, h, S(m._payload), x));
      }
      if (yr(m) || sr(m)) return S !== null ? null : c(p, h, m, x, null);
      Ei(p, m);
    }
    return null;
  }
  function y(p, h, m, x, S) {
    if ((typeof x == "string" && x !== "") || typeof x == "number")
      return ((p = p.get(m) || null), a(h, p, "" + x, S));
    if (typeof x == "object" && x !== null) {
      switch (x.$$typeof) {
        case mi:
          return (
            (p = p.get(x.key === null ? m : x.key) || null),
            l(h, p, x, S)
          );
        case Sn:
          return (
            (p = p.get(x.key === null ? m : x.key) || null),
            u(h, p, x, S)
          );
        case Et:
          var E = x._init;
          return y(p, h, m, E(x._payload), S);
      }
      if (yr(x) || sr(x)) return ((p = p.get(m) || null), c(h, p, x, S, null));
      Ei(h, x);
    }
    return null;
  }
  function v(p, h, m, x) {
    for (
      var S = null, E = null, N = h, T = (h = 0), R = null;
      N !== null && T < m.length;
      T++
    ) {
      N.index > T ? ((R = N), (N = null)) : (R = N.sibling);
      var P = d(p, N, m[T], x);
      if (P === null) {
        N === null && (N = R);
        break;
      }
      (e && N && P.alternate === null && t(p, N),
        (h = s(P, h, T)),
        E === null ? (S = P) : (E.sibling = P),
        (E = P),
        (N = R));
    }
    if (T === m.length) return (n(p, N), H && Jt(p, T), S);
    if (N === null) {
      for (; T < m.length; T++)
        ((N = f(p, m[T], x)),
          N !== null &&
            ((h = s(N, h, T)),
            E === null ? (S = N) : (E.sibling = N),
            (E = N)));
      return (H && Jt(p, T), S);
    }
    for (N = r(p, N); T < m.length; T++)
      ((R = y(N, p, T, m[T], x)),
        R !== null &&
          (e && R.alternate !== null && N.delete(R.key === null ? T : R.key),
          (h = s(R, h, T)),
          E === null ? (S = R) : (E.sibling = R),
          (E = R)));
    return (
      e &&
        N.forEach(function (I) {
          return t(p, I);
        }),
      H && Jt(p, T),
      S
    );
  }
  function w(p, h, m, x) {
    var S = sr(m);
    if (typeof S != "function") throw Error(C(150));
    if (((m = S.call(m)), m == null)) throw Error(C(151));
    for (
      var E = (S = null), N = h, T = (h = 0), R = null, P = m.next();
      N !== null && !P.done;
      T++, P = m.next()
    ) {
      N.index > T ? ((R = N), (N = null)) : (R = N.sibling);
      var I = d(p, N, P.value, x);
      if (I === null) {
        N === null && (N = R);
        break;
      }
      (e && N && I.alternate === null && t(p, N),
        (h = s(I, h, T)),
        E === null ? (S = I) : (E.sibling = I),
        (E = I),
        (N = R));
    }
    if (P.done) return (n(p, N), H && Jt(p, T), S);
    if (N === null) {
      for (; !P.done; T++, P = m.next())
        ((P = f(p, P.value, x)),
          P !== null &&
            ((h = s(P, h, T)),
            E === null ? (S = P) : (E.sibling = P),
            (E = P)));
      return (H && Jt(p, T), S);
    }
    for (N = r(p, N); !P.done; T++, P = m.next())
      ((P = y(N, p, T, P.value, x)),
        P !== null &&
          (e && P.alternate !== null && N.delete(P.key === null ? T : P.key),
          (h = s(P, h, T)),
          E === null ? (S = P) : (E.sibling = P),
          (E = P)));
    return (
      e &&
        N.forEach(function (K) {
          return t(p, K);
        }),
      H && Jt(p, T),
      S
    );
  }
  function k(p, h, m, x) {
    if (
      (typeof m == "object" &&
        m !== null &&
        m.type === kn &&
        m.key === null &&
        (m = m.props.children),
      typeof m == "object" && m !== null)
    ) {
      switch (m.$$typeof) {
        case mi:
          e: {
            for (var S = m.key, E = h; E !== null; ) {
              if (E.key === S) {
                if (((S = m.type), S === kn)) {
                  if (E.tag === 7) {
                    (n(p, E.sibling),
                      (h = i(E, m.props.children)),
                      (h.return = p),
                      (p = h));
                    break e;
                  }
                } else if (
                  E.elementType === S ||
                  (typeof S == "object" &&
                    S !== null &&
                    S.$$typeof === Et &&
                    yc(S) === E.type)
                ) {
                  (n(p, E.sibling),
                    (h = i(E, m.props)),
                    (h.ref = cr(p, E, m)),
                    (h.return = p),
                    (p = h));
                  break e;
                }
                n(p, E);
                break;
              } else t(p, E);
              E = E.sibling;
            }
            m.type === kn
              ? ((h = un(m.props.children, p.mode, x, m.key)),
                (h.return = p),
                (p = h))
              : ((x = Gi(m.type, m.key, m.props, null, p.mode, x)),
                (x.ref = cr(p, h, m)),
                (x.return = p),
                (p = x));
          }
          return o(p);
        case Sn:
          e: {
            for (E = m.key; h !== null; ) {
              if (h.key === E)
                if (
                  h.tag === 4 &&
                  h.stateNode.containerInfo === m.containerInfo &&
                  h.stateNode.implementation === m.implementation
                ) {
                  (n(p, h.sibling),
                    (h = i(h, m.children || [])),
                    (h.return = p),
                    (p = h));
                  break e;
                } else {
                  n(p, h);
                  break;
                }
              else t(p, h);
              h = h.sibling;
            }
            ((h = Ao(m, p.mode, x)), (h.return = p), (p = h));
          }
          return o(p);
        case Et:
          return ((E = m._init), k(p, h, E(m._payload), x));
      }
      if (yr(m)) return v(p, h, m, x);
      if (sr(m)) return w(p, h, m, x);
      Ei(p, m);
    }
    return (typeof m == "string" && m !== "") || typeof m == "number"
      ? ((m = "" + m),
        h !== null && h.tag === 6
          ? (n(p, h.sibling), (h = i(h, m)), (h.return = p), (p = h))
          : (n(p, h), (h = jo(m, p.mode, x)), (h.return = p), (p = h)),
        o(p))
      : n(p, h);
  }
  return k;
}
var Hn = wh(!0),
  Sh = wh(!1),
  ms = Gt(null),
  ys = null,
  An = null,
  Vl = null;
function Ll() {
  Vl = An = ys = null;
}
function _l(e) {
  var t = ms.current;
  (W(ms), (e._currentValue = t));
}
function Ta(e, t, n) {
  for (; e !== null; ) {
    var r = e.alternate;
    if (
      ((e.childLanes & t) !== t
        ? ((e.childLanes |= t), r !== null && (r.childLanes |= t))
        : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t),
      e === n)
    )
      break;
    e = e.return;
  }
}
function Bn(e, t) {
  ((ys = e),
    (Vl = An = null),
    (e = e.dependencies),
    e !== null &&
      e.firstContext !== null &&
      (e.lanes & t && (Ee = !0), (e.firstContext = null)));
}
function We(e) {
  var t = e._currentValue;
  if (Vl !== e)
    if (((e = { context: e, memoizedValue: t, next: null }), An === null)) {
      if (ys === null) throw Error(C(308));
      ((An = e), (ys.dependencies = { lanes: 0, firstContext: e }));
    } else An = An.next = e;
  return t;
}
var rn = null;
function Il(e) {
  rn === null ? (rn = [e]) : rn.push(e);
}
function kh(e, t, n, r) {
  var i = t.interleaved;
  return (
    i === null ? ((n.next = n), Il(t)) : ((n.next = i.next), (i.next = n)),
    (t.interleaved = n),
    wt(e, r)
  );
}
function wt(e, t) {
  e.lanes |= t;
  var n = e.alternate;
  for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; )
    ((e.childLanes |= t),
      (n = e.alternate),
      n !== null && (n.childLanes |= t),
      (n = e),
      (e = e.return));
  return n.tag === 3 ? n.stateNode : null;
}
var Mt = !1;
function Fl(e) {
  e.updateQueue = {
    baseState: e.memoizedState,
    firstBaseUpdate: null,
    lastBaseUpdate: null,
    shared: { pending: null, interleaved: null, lanes: 0 },
    effects: null,
  };
}
function Th(e, t) {
  ((e = e.updateQueue),
    t.updateQueue === e &&
      (t.updateQueue = {
        baseState: e.baseState,
        firstBaseUpdate: e.firstBaseUpdate,
        lastBaseUpdate: e.lastBaseUpdate,
        shared: e.shared,
        effects: e.effects,
      }));
}
function gt(e, t) {
  return {
    eventTime: e,
    lane: t,
    tag: 0,
    payload: null,
    callback: null,
    next: null,
  };
}
function Ft(e, t, n) {
  var r = e.updateQueue;
  if (r === null) return null;
  if (((r = r.shared), F & 2)) {
    var i = r.pending;
    return (
      i === null ? (t.next = t) : ((t.next = i.next), (i.next = t)),
      (r.pending = t),
      wt(e, n)
    );
  }
  return (
    (i = r.interleaved),
    i === null ? ((t.next = t), Il(r)) : ((t.next = i.next), (i.next = t)),
    (r.interleaved = t),
    wt(e, n)
  );
}
function bi(e, t, n) {
  if (
    ((t = t.updateQueue), t !== null && ((t = t.shared), (n & 4194240) !== 0))
  ) {
    var r = t.lanes;
    ((r &= e.pendingLanes), (n |= r), (t.lanes = n), kl(e, n));
  }
}
function gc(e, t) {
  var n = e.updateQueue,
    r = e.alternate;
  if (r !== null && ((r = r.updateQueue), n === r)) {
    var i = null,
      s = null;
    if (((n = n.firstBaseUpdate), n !== null)) {
      do {
        var o = {
          eventTime: n.eventTime,
          lane: n.lane,
          tag: n.tag,
          payload: n.payload,
          callback: n.callback,
          next: null,
        };
        (s === null ? (i = s = o) : (s = s.next = o), (n = n.next));
      } while (n !== null);
      s === null ? (i = s = t) : (s = s.next = t);
    } else i = s = t;
    ((n = {
      baseState: r.baseState,
      firstBaseUpdate: i,
      lastBaseUpdate: s,
      shared: r.shared,
      effects: r.effects,
    }),
      (e.updateQueue = n));
    return;
  }
  ((e = n.lastBaseUpdate),
    e === null ? (n.firstBaseUpdate = t) : (e.next = t),
    (n.lastBaseUpdate = t));
}
function gs(e, t, n, r) {
  var i = e.updateQueue;
  Mt = !1;
  var s = i.firstBaseUpdate,
    o = i.lastBaseUpdate,
    a = i.shared.pending;
  if (a !== null) {
    i.shared.pending = null;
    var l = a,
      u = l.next;
    ((l.next = null), o === null ? (s = u) : (o.next = u), (o = l));
    var c = e.alternate;
    c !== null &&
      ((c = c.updateQueue),
      (a = c.lastBaseUpdate),
      a !== o &&
        (a === null ? (c.firstBaseUpdate = u) : (a.next = u),
        (c.lastBaseUpdate = l)));
  }
  if (s !== null) {
    var f = i.baseState;
    ((o = 0), (c = u = l = null), (a = s));
    do {
      var d = a.lane,
        y = a.eventTime;
      if ((r & d) === d) {
        c !== null &&
          (c = c.next =
            {
              eventTime: y,
              lane: 0,
              tag: a.tag,
              payload: a.payload,
              callback: a.callback,
              next: null,
            });
        e: {
          var v = e,
            w = a;
          switch (((d = t), (y = n), w.tag)) {
            case 1:
              if (((v = w.payload), typeof v == "function")) {
                f = v.call(y, f, d);
                break e;
              }
              f = v;
              break e;
            case 3:
              v.flags = (v.flags & -65537) | 128;
            case 0:
              if (
                ((v = w.payload),
                (d = typeof v == "function" ? v.call(y, f, d) : v),
                d == null)
              )
                break e;
              f = X({}, f, d);
              break e;
            case 2:
              Mt = !0;
          }
        }
        a.callback !== null &&
          a.lane !== 0 &&
          ((e.flags |= 64),
          (d = i.effects),
          d === null ? (i.effects = [a]) : d.push(a));
      } else
        ((y = {
          eventTime: y,
          lane: d,
          tag: a.tag,
          payload: a.payload,
          callback: a.callback,
          next: null,
        }),
          c === null ? ((u = c = y), (l = f)) : (c = c.next = y),
          (o |= d));
      if (((a = a.next), a === null)) {
        if (((a = i.shared.pending), a === null)) break;
        ((d = a),
          (a = d.next),
          (d.next = null),
          (i.lastBaseUpdate = d),
          (i.shared.pending = null));
      }
    } while (!0);
    if (
      (c === null && (l = f),
      (i.baseState = l),
      (i.firstBaseUpdate = u),
      (i.lastBaseUpdate = c),
      (t = i.shared.interleaved),
      t !== null)
    ) {
      i = t;
      do ((o |= i.lane), (i = i.next));
      while (i !== t);
    } else s === null && (i.shared.lanes = 0);
    ((mn |= o), (e.lanes = o), (e.memoizedState = f));
  }
}
function vc(e, t, n) {
  if (((e = t.effects), (t.effects = null), e !== null))
    for (t = 0; t < e.length; t++) {
      var r = e[t],
        i = r.callback;
      if (i !== null) {
        if (((r.callback = null), (r = n), typeof i != "function"))
          throw Error(C(191, i));
        i.call(r);
      }
    }
}
var ii = {},
  ut = Gt(ii),
  Wr = Gt(ii),
  Hr = Gt(ii);
function sn(e) {
  if (e === ii) throw Error(C(174));
  return e;
}
function Ol(e, t) {
  switch ((b(Hr, t), b(Wr, e), b(ut, ii), (e = t.nodeType), e)) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : ra(null, "");
      break;
    default:
      ((e = e === 8 ? t.parentNode : t),
        (t = e.namespaceURI || null),
        (e = e.tagName),
        (t = ra(t, e)));
  }
  (W(ut), b(ut, t));
}
function Kn() {
  (W(ut), W(Wr), W(Hr));
}
function Ch(e) {
  sn(Hr.current);
  var t = sn(ut.current),
    n = ra(t, e.type);
  t !== n && (b(Wr, e), b(ut, n));
}
function zl(e) {
  Wr.current === e && (W(ut), W(Wr));
}
var Y = Gt(0);
function vs(e) {
  for (var t = e; t !== null; ) {
    if (t.tag === 13) {
      var n = t.memoizedState;
      if (
        n !== null &&
        ((n = n.dehydrated), n === null || n.data === "$?" || n.data === "$!")
      )
        return t;
    } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
      if (t.flags & 128) return t;
    } else if (t.child !== null) {
      ((t.child.return = t), (t = t.child));
      continue;
    }
    if (t === e) break;
    for (; t.sibling === null; ) {
      if (t.return === null || t.return === e) return null;
      t = t.return;
    }
    ((t.sibling.return = t.return), (t = t.sibling));
  }
  return null;
}
var To = [];
function Bl() {
  for (var e = 0; e < To.length; e++)
    To[e]._workInProgressVersionPrimary = null;
  To.length = 0;
}
var Ui = kt.ReactCurrentDispatcher,
  Co = kt.ReactCurrentBatchConfig,
  pn = 0,
  Q = null,
  ie = null,
  oe = null,
  xs = !1,
  Pr = !1,
  Kr = 0,
  n0 = 0;
function he() {
  throw Error(C(321));
}
function bl(e, t) {
  if (t === null) return !1;
  for (var n = 0; n < t.length && n < e.length; n++)
    if (!nt(e[n], t[n])) return !1;
  return !0;
}
function Ul(e, t, n, r, i, s) {
  if (
    ((pn = s),
    (Q = t),
    (t.memoizedState = null),
    (t.updateQueue = null),
    (t.lanes = 0),
    (Ui.current = e === null || e.memoizedState === null ? o0 : a0),
    (e = n(r, i)),
    Pr)
  ) {
    s = 0;
    do {
      if (((Pr = !1), (Kr = 0), 25 <= s)) throw Error(C(301));
      ((s += 1),
        (oe = ie = null),
        (t.updateQueue = null),
        (Ui.current = l0),
        (e = n(r, i)));
    } while (Pr);
  }
  if (
    ((Ui.current = ws),
    (t = ie !== null && ie.next !== null),
    (pn = 0),
    (oe = ie = Q = null),
    (xs = !1),
    t)
  )
    throw Error(C(300));
  return e;
}
function $l() {
  var e = Kr !== 0;
  return ((Kr = 0), e);
}
function it() {
  var e = {
    memoizedState: null,
    baseState: null,
    baseQueue: null,
    queue: null,
    next: null,
  };
  return (oe === null ? (Q.memoizedState = oe = e) : (oe = oe.next = e), oe);
}
function He() {
  if (ie === null) {
    var e = Q.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = ie.next;
  var t = oe === null ? Q.memoizedState : oe.next;
  if (t !== null) ((oe = t), (ie = e));
  else {
    if (e === null) throw Error(C(310));
    ((ie = e),
      (e = {
        memoizedState: ie.memoizedState,
        baseState: ie.baseState,
        baseQueue: ie.baseQueue,
        queue: ie.queue,
        next: null,
      }),
      oe === null ? (Q.memoizedState = oe = e) : (oe = oe.next = e));
  }
  return oe;
}
function Gr(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function Po(e) {
  var t = He(),
    n = t.queue;
  if (n === null) throw Error(C(311));
  n.lastRenderedReducer = e;
  var r = ie,
    i = r.baseQueue,
    s = n.pending;
  if (s !== null) {
    if (i !== null) {
      var o = i.next;
      ((i.next = s.next), (s.next = o));
    }
    ((r.baseQueue = i = s), (n.pending = null));
  }
  if (i !== null) {
    ((s = i.next), (r = r.baseState));
    var a = (o = null),
      l = null,
      u = s;
    do {
      var c = u.lane;
      if ((pn & c) === c)
        (l !== null &&
          (l = l.next =
            {
              lane: 0,
              action: u.action,
              hasEagerState: u.hasEagerState,
              eagerState: u.eagerState,
              next: null,
            }),
          (r = u.hasEagerState ? u.eagerState : e(r, u.action)));
      else {
        var f = {
          lane: c,
          action: u.action,
          hasEagerState: u.hasEagerState,
          eagerState: u.eagerState,
          next: null,
        };
        (l === null ? ((a = l = f), (o = r)) : (l = l.next = f),
          (Q.lanes |= c),
          (mn |= c));
      }
      u = u.next;
    } while (u !== null && u !== s);
    (l === null ? (o = r) : (l.next = a),
      nt(r, t.memoizedState) || (Ee = !0),
      (t.memoizedState = r),
      (t.baseState = o),
      (t.baseQueue = l),
      (n.lastRenderedState = r));
  }
  if (((e = n.interleaved), e !== null)) {
    i = e;
    do ((s = i.lane), (Q.lanes |= s), (mn |= s), (i = i.next));
    while (i !== e);
  } else i === null && (n.lanes = 0);
  return [t.memoizedState, n.dispatch];
}
function Eo(e) {
  var t = He(),
    n = t.queue;
  if (n === null) throw Error(C(311));
  n.lastRenderedReducer = e;
  var r = n.dispatch,
    i = n.pending,
    s = t.memoizedState;
  if (i !== null) {
    n.pending = null;
    var o = (i = i.next);
    do ((s = e(s, o.action)), (o = o.next));
    while (o !== i);
    (nt(s, t.memoizedState) || (Ee = !0),
      (t.memoizedState = s),
      t.baseQueue === null && (t.baseState = s),
      (n.lastRenderedState = s));
  }
  return [s, r];
}
function Ph() {}
function Eh(e, t) {
  var n = Q,
    r = He(),
    i = t(),
    s = !nt(r.memoizedState, i);
  if (
    (s && ((r.memoizedState = i), (Ee = !0)),
    (r = r.queue),
    Wl(jh.bind(null, n, r, e), [e]),
    r.getSnapshot !== t || s || (oe !== null && oe.memoizedState.tag & 1))
  ) {
    if (
      ((n.flags |= 2048),
      Yr(9, Nh.bind(null, n, r, i, t), void 0, null),
      ae === null)
    )
      throw Error(C(349));
    pn & 30 || Mh(n, t, i);
  }
  return i;
}
function Mh(e, t, n) {
  ((e.flags |= 16384),
    (e = { getSnapshot: t, value: n }),
    (t = Q.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (Q.updateQueue = t),
        (t.stores = [e]))
      : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e)));
}
function Nh(e, t, n, r) {
  ((t.value = n), (t.getSnapshot = r), Ah(t) && Dh(e));
}
function jh(e, t, n) {
  return n(function () {
    Ah(t) && Dh(e);
  });
}
function Ah(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !nt(e, n);
  } catch {
    return !0;
  }
}
function Dh(e) {
  var t = wt(e, 1);
  t !== null && et(t, e, 1, -1);
}
function xc(e) {
  var t = it();
  return (
    typeof e == "function" && (e = e()),
    (t.memoizedState = t.baseState = e),
    (e = {
      pending: null,
      interleaved: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: Gr,
      lastRenderedState: e,
    }),
    (t.queue = e),
    (e = e.dispatch = s0.bind(null, Q, e)),
    [t.memoizedState, e]
  );
}
function Yr(e, t, n, r) {
  return (
    (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
    (t = Q.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (Q.updateQueue = t),
        (t.lastEffect = e.next = e))
      : ((n = t.lastEffect),
        n === null
          ? (t.lastEffect = e.next = e)
          : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e))),
    e
  );
}
function Rh() {
  return He().memoizedState;
}
function $i(e, t, n, r) {
  var i = it();
  ((Q.flags |= e),
    (i.memoizedState = Yr(1 | t, n, void 0, r === void 0 ? null : r)));
}
function Us(e, t, n, r) {
  var i = He();
  r = r === void 0 ? null : r;
  var s = void 0;
  if (ie !== null) {
    var o = ie.memoizedState;
    if (((s = o.destroy), r !== null && bl(r, o.deps))) {
      i.memoizedState = Yr(t, n, s, r);
      return;
    }
  }
  ((Q.flags |= e), (i.memoizedState = Yr(1 | t, n, s, r)));
}
function wc(e, t) {
  return $i(8390656, 8, e, t);
}
function Wl(e, t) {
  return Us(2048, 8, e, t);
}
function Vh(e, t) {
  return Us(4, 2, e, t);
}
function Lh(e, t) {
  return Us(4, 4, e, t);
}
function _h(e, t) {
  if (typeof t == "function")
    return (
      (e = e()),
      t(e),
      function () {
        t(null);
      }
    );
  if (t != null)
    return (
      (e = e()),
      (t.current = e),
      function () {
        t.current = null;
      }
    );
}
function Ih(e, t, n) {
  return (
    (n = n != null ? n.concat([e]) : null),
    Us(4, 4, _h.bind(null, t, e), n)
  );
}
function Hl() {}
function Fh(e, t) {
  var n = He();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && bl(t, r[1])
    ? r[0]
    : ((n.memoizedState = [e, t]), e);
}
function Oh(e, t) {
  var n = He();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && bl(t, r[1])
    ? r[0]
    : ((e = e()), (n.memoizedState = [e, t]), e);
}
function zh(e, t, n) {
  return pn & 21
    ? (nt(n, t) || ((n = Wd()), (Q.lanes |= n), (mn |= n), (e.baseState = !0)),
      t)
    : (e.baseState && ((e.baseState = !1), (Ee = !0)), (e.memoizedState = n));
}
function r0(e, t) {
  var n = O;
  ((O = n !== 0 && 4 > n ? n : 4), e(!0));
  var r = Co.transition;
  Co.transition = {};
  try {
    (e(!1), t());
  } finally {
    ((O = n), (Co.transition = r));
  }
}
function Bh() {
  return He().memoizedState;
}
function i0(e, t, n) {
  var r = zt(e);
  if (
    ((n = {
      lane: r,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
    bh(e))
  )
    Uh(t, n);
  else if (((n = kh(e, t, n, r)), n !== null)) {
    var i = Se();
    (et(n, e, r, i), $h(n, t, r));
  }
}
function s0(e, t, n) {
  var r = zt(e),
    i = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (bh(e)) Uh(t, i);
  else {
    var s = e.alternate;
    if (
      e.lanes === 0 &&
      (s === null || s.lanes === 0) &&
      ((s = t.lastRenderedReducer), s !== null)
    )
      try {
        var o = t.lastRenderedState,
          a = s(o, n);
        if (((i.hasEagerState = !0), (i.eagerState = a), nt(a, o))) {
          var l = t.interleaved;
          (l === null
            ? ((i.next = i), Il(t))
            : ((i.next = l.next), (l.next = i)),
            (t.interleaved = i));
          return;
        }
      } catch {
      } finally {
      }
    ((n = kh(e, t, i, r)),
      n !== null && ((i = Se()), et(n, e, r, i), $h(n, t, r)));
  }
}
function bh(e) {
  var t = e.alternate;
  return e === Q || (t !== null && t === Q);
}
function Uh(e, t) {
  Pr = xs = !0;
  var n = e.pending;
  (n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)),
    (e.pending = t));
}
function $h(e, t, n) {
  if (n & 4194240) {
    var r = t.lanes;
    ((r &= e.pendingLanes), (n |= r), (t.lanes = n), kl(e, n));
  }
}
var ws = {
    readContext: We,
    useCallback: he,
    useContext: he,
    useEffect: he,
    useImperativeHandle: he,
    useInsertionEffect: he,
    useLayoutEffect: he,
    useMemo: he,
    useReducer: he,
    useRef: he,
    useState: he,
    useDebugValue: he,
    useDeferredValue: he,
    useTransition: he,
    useMutableSource: he,
    useSyncExternalStore: he,
    useId: he,
    unstable_isNewReconciler: !1,
  },
  o0 = {
    readContext: We,
    useCallback: function (e, t) {
      return ((it().memoizedState = [e, t === void 0 ? null : t]), e);
    },
    useContext: We,
    useEffect: wc,
    useImperativeHandle: function (e, t, n) {
      return (
        (n = n != null ? n.concat([e]) : null),
        $i(4194308, 4, _h.bind(null, t, e), n)
      );
    },
    useLayoutEffect: function (e, t) {
      return $i(4194308, 4, e, t);
    },
    useInsertionEffect: function (e, t) {
      return $i(4, 2, e, t);
    },
    useMemo: function (e, t) {
      var n = it();
      return (
        (t = t === void 0 ? null : t),
        (e = e()),
        (n.memoizedState = [e, t]),
        e
      );
    },
    useReducer: function (e, t, n) {
      var r = it();
      return (
        (t = n !== void 0 ? n(t) : t),
        (r.memoizedState = r.baseState = t),
        (e = {
          pending: null,
          interleaved: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: e,
          lastRenderedState: t,
        }),
        (r.queue = e),
        (e = e.dispatch = i0.bind(null, Q, e)),
        [r.memoizedState, e]
      );
    },
    useRef: function (e) {
      var t = it();
      return ((e = { current: e }), (t.memoizedState = e));
    },
    useState: xc,
    useDebugValue: Hl,
    useDeferredValue: function (e) {
      return (it().memoizedState = e);
    },
    useTransition: function () {
      var e = xc(!1),
        t = e[0];
      return ((e = r0.bind(null, e[1])), (it().memoizedState = e), [t, e]);
    },
    useMutableSource: function () {},
    useSyncExternalStore: function (e, t, n) {
      var r = Q,
        i = it();
      if (H) {
        if (n === void 0) throw Error(C(407));
        n = n();
      } else {
        if (((n = t()), ae === null)) throw Error(C(349));
        pn & 30 || Mh(r, t, n);
      }
      i.memoizedState = n;
      var s = { value: n, getSnapshot: t };
      return (
        (i.queue = s),
        wc(jh.bind(null, r, s, e), [e]),
        (r.flags |= 2048),
        Yr(9, Nh.bind(null, r, s, n, t), void 0, null),
        n
      );
    },
    useId: function () {
      var e = it(),
        t = ae.identifierPrefix;
      if (H) {
        var n = yt,
          r = mt;
        ((n = (r & ~(1 << (32 - Je(r) - 1))).toString(32) + n),
          (t = ":" + t + "R" + n),
          (n = Kr++),
          0 < n && (t += "H" + n.toString(32)),
          (t += ":"));
      } else ((n = n0++), (t = ":" + t + "r" + n.toString(32) + ":"));
      return (e.memoizedState = t);
    },
    unstable_isNewReconciler: !1,
  },
  a0 = {
    readContext: We,
    useCallback: Fh,
    useContext: We,
    useEffect: Wl,
    useImperativeHandle: Ih,
    useInsertionEffect: Vh,
    useLayoutEffect: Lh,
    useMemo: Oh,
    useReducer: Po,
    useRef: Rh,
    useState: function () {
      return Po(Gr);
    },
    useDebugValue: Hl,
    useDeferredValue: function (e) {
      var t = He();
      return zh(t, ie.memoizedState, e);
    },
    useTransition: function () {
      var e = Po(Gr)[0],
        t = He().memoizedState;
      return [e, t];
    },
    useMutableSource: Ph,
    useSyncExternalStore: Eh,
    useId: Bh,
    unstable_isNewReconciler: !1,
  },
  l0 = {
    readContext: We,
    useCallback: Fh,
    useContext: We,
    useEffect: Wl,
    useImperativeHandle: Ih,
    useInsertionEffect: Vh,
    useLayoutEffect: Lh,
    useMemo: Oh,
    useReducer: Eo,
    useRef: Rh,
    useState: function () {
      return Eo(Gr);
    },
    useDebugValue: Hl,
    useDeferredValue: function (e) {
      var t = He();
      return ie === null ? (t.memoizedState = e) : zh(t, ie.memoizedState, e);
    },
    useTransition: function () {
      var e = Eo(Gr)[0],
        t = He().memoizedState;
      return [e, t];
    },
    useMutableSource: Ph,
    useSyncExternalStore: Eh,
    useId: Bh,
    unstable_isNewReconciler: !1,
  };
function Xe(e, t) {
  if (e && e.defaultProps) {
    ((t = X({}, t)), (e = e.defaultProps));
    for (var n in e) t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
function Ca(e, t, n, r) {
  ((t = e.memoizedState),
    (n = n(r, t)),
    (n = n == null ? t : X({}, t, n)),
    (e.memoizedState = n),
    e.lanes === 0 && (e.updateQueue.baseState = n));
}
var $s = {
  isMounted: function (e) {
    return (e = e._reactInternals) ? vn(e) === e : !1;
  },
  enqueueSetState: function (e, t, n) {
    e = e._reactInternals;
    var r = Se(),
      i = zt(e),
      s = gt(r, i);
    ((s.payload = t),
      n != null && (s.callback = n),
      (t = Ft(e, s, i)),
      t !== null && (et(t, e, i, r), bi(t, e, i)));
  },
  enqueueReplaceState: function (e, t, n) {
    e = e._reactInternals;
    var r = Se(),
      i = zt(e),
      s = gt(r, i);
    ((s.tag = 1),
      (s.payload = t),
      n != null && (s.callback = n),
      (t = Ft(e, s, i)),
      t !== null && (et(t, e, i, r), bi(t, e, i)));
  },
  enqueueForceUpdate: function (e, t) {
    e = e._reactInternals;
    var n = Se(),
      r = zt(e),
      i = gt(n, r);
    ((i.tag = 2),
      t != null && (i.callback = t),
      (t = Ft(e, i, r)),
      t !== null && (et(t, e, r, n), bi(t, e, r)));
  },
};
function Sc(e, t, n, r, i, s, o) {
  return (
    (e = e.stateNode),
    typeof e.shouldComponentUpdate == "function"
      ? e.shouldComponentUpdate(r, s, o)
      : t.prototype && t.prototype.isPureReactComponent
        ? !Br(n, r) || !Br(i, s)
        : !0
  );
}
function Wh(e, t, n) {
  var r = !1,
    i = $t,
    s = t.contextType;
  return (
    typeof s == "object" && s !== null
      ? (s = We(s))
      : ((i = Ne(t) ? dn : ye.current),
        (r = t.contextTypes),
        (s = (r = r != null) ? $n(e, i) : $t)),
    (t = new t(n, s)),
    (e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null),
    (t.updater = $s),
    (e.stateNode = t),
    (t._reactInternals = e),
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = i),
      (e.__reactInternalMemoizedMaskedChildContext = s)),
    t
  );
}
function kc(e, t, n, r) {
  ((e = t.state),
    typeof t.componentWillReceiveProps == "function" &&
      t.componentWillReceiveProps(n, r),
    typeof t.UNSAFE_componentWillReceiveProps == "function" &&
      t.UNSAFE_componentWillReceiveProps(n, r),
    t.state !== e && $s.enqueueReplaceState(t, t.state, null));
}
function Pa(e, t, n, r) {
  var i = e.stateNode;
  ((i.props = n), (i.state = e.memoizedState), (i.refs = {}), Fl(e));
  var s = t.contextType;
  (typeof s == "object" && s !== null
    ? (i.context = We(s))
    : ((s = Ne(t) ? dn : ye.current), (i.context = $n(e, s))),
    (i.state = e.memoizedState),
    (s = t.getDerivedStateFromProps),
    typeof s == "function" && (Ca(e, t, s, n), (i.state = e.memoizedState)),
    typeof t.getDerivedStateFromProps == "function" ||
      typeof i.getSnapshotBeforeUpdate == "function" ||
      (typeof i.UNSAFE_componentWillMount != "function" &&
        typeof i.componentWillMount != "function") ||
      ((t = i.state),
      typeof i.componentWillMount == "function" && i.componentWillMount(),
      typeof i.UNSAFE_componentWillMount == "function" &&
        i.UNSAFE_componentWillMount(),
      t !== i.state && $s.enqueueReplaceState(i, i.state, null),
      gs(e, n, i, r),
      (i.state = e.memoizedState)),
    typeof i.componentDidMount == "function" && (e.flags |= 4194308));
}
function Gn(e, t) {
  try {
    var n = "",
      r = t;
    do ((n += Iy(r)), (r = r.return));
    while (r);
    var i = n;
  } catch (s) {
    i =
      `
Error generating stack: ` +
      s.message +
      `
` +
      s.stack;
  }
  return { value: e, source: t, stack: i, digest: null };
}
function Mo(e, t, n) {
  return { value: e, source: null, stack: n ?? null, digest: t ?? null };
}
function Ea(e, t) {
  try {
    console.error(t.value);
  } catch (n) {
    setTimeout(function () {
      throw n;
    });
  }
}
var u0 = typeof WeakMap == "function" ? WeakMap : Map;
function Hh(e, t, n) {
  ((n = gt(-1, n)), (n.tag = 3), (n.payload = { element: null }));
  var r = t.value;
  return (
    (n.callback = function () {
      (ks || ((ks = !0), (Ia = r)), Ea(e, t));
    }),
    n
  );
}
function Kh(e, t, n) {
  ((n = gt(-1, n)), (n.tag = 3));
  var r = e.type.getDerivedStateFromError;
  if (typeof r == "function") {
    var i = t.value;
    ((n.payload = function () {
      return r(i);
    }),
      (n.callback = function () {
        Ea(e, t);
      }));
  }
  var s = e.stateNode;
  return (
    s !== null &&
      typeof s.componentDidCatch == "function" &&
      (n.callback = function () {
        (Ea(e, t),
          typeof r != "function" &&
            (Ot === null ? (Ot = new Set([this])) : Ot.add(this)));
        var o = t.stack;
        this.componentDidCatch(t.value, {
          componentStack: o !== null ? o : "",
        });
      }),
    n
  );
}
function Tc(e, t, n) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new u0();
    var i = new Set();
    r.set(t, i);
  } else ((i = r.get(t)), i === void 0 && ((i = new Set()), r.set(t, i)));
  i.has(n) || (i.add(n), (e = T0.bind(null, e, t, n)), t.then(e, e));
}
function Cc(e) {
  do {
    var t;
    if (
      ((t = e.tag === 13) &&
        ((t = e.memoizedState), (t = t !== null ? t.dehydrated !== null : !0)),
      t)
    )
      return e;
    e = e.return;
  } while (e !== null);
  return null;
}
function Pc(e, t, n, r, i) {
  return e.mode & 1
    ? ((e.flags |= 65536), (e.lanes = i), e)
    : (e === t
        ? (e.flags |= 65536)
        : ((e.flags |= 128),
          (n.flags |= 131072),
          (n.flags &= -52805),
          n.tag === 1 &&
            (n.alternate === null
              ? (n.tag = 17)
              : ((t = gt(-1, 1)), (t.tag = 2), Ft(n, t, 1))),
          (n.lanes |= 1)),
      e);
}
var c0 = kt.ReactCurrentOwner,
  Ee = !1;
function ve(e, t, n, r) {
  t.child = e === null ? Sh(t, null, n, r) : Hn(t, e.child, n, r);
}
function Ec(e, t, n, r, i) {
  n = n.render;
  var s = t.ref;
  return (
    Bn(t, i),
    (r = Ul(e, t, n, r, s, i)),
    (n = $l()),
    e !== null && !Ee
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~i),
        St(e, t, i))
      : (H && n && Al(t), (t.flags |= 1), ve(e, t, r, i), t.child)
  );
}
function Mc(e, t, n, r, i) {
  if (e === null) {
    var s = n.type;
    return typeof s == "function" &&
      !Jl(s) &&
      s.defaultProps === void 0 &&
      n.compare === null &&
      n.defaultProps === void 0
      ? ((t.tag = 15), (t.type = s), Gh(e, t, s, r, i))
      : ((e = Gi(n.type, null, r, t, t.mode, i)),
        (e.ref = t.ref),
        (e.return = t),
        (t.child = e));
  }
  if (((s = e.child), !(e.lanes & i))) {
    var o = s.memoizedProps;
    if (
      ((n = n.compare), (n = n !== null ? n : Br), n(o, r) && e.ref === t.ref)
    )
      return St(e, t, i);
  }
  return (
    (t.flags |= 1),
    (e = Bt(s, r)),
    (e.ref = t.ref),
    (e.return = t),
    (t.child = e)
  );
}
function Gh(e, t, n, r, i) {
  if (e !== null) {
    var s = e.memoizedProps;
    if (Br(s, r) && e.ref === t.ref)
      if (((Ee = !1), (t.pendingProps = r = s), (e.lanes & i) !== 0))
        e.flags & 131072 && (Ee = !0);
      else return ((t.lanes = e.lanes), St(e, t, i));
  }
  return Ma(e, t, n, r, i);
}
function Yh(e, t, n) {
  var r = t.pendingProps,
    i = r.children,
    s = e !== null ? e.memoizedState : null;
  if (r.mode === "hidden")
    if (!(t.mode & 1))
      ((t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        b(Rn, Re),
        (Re |= n));
    else {
      if (!(n & 1073741824))
        return (
          (e = s !== null ? s.baseLanes | n : n),
          (t.lanes = t.childLanes = 1073741824),
          (t.memoizedState = {
            baseLanes: e,
            cachePool: null,
            transitions: null,
          }),
          (t.updateQueue = null),
          b(Rn, Re),
          (Re |= e),
          null
        );
      ((t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        (r = s !== null ? s.baseLanes : n),
        b(Rn, Re),
        (Re |= r));
    }
  else
    (s !== null ? ((r = s.baseLanes | n), (t.memoizedState = null)) : (r = n),
      b(Rn, Re),
      (Re |= r));
  return (ve(e, t, i, n), t.child);
}
function Qh(e, t) {
  var n = t.ref;
  ((e === null && n !== null) || (e !== null && e.ref !== n)) &&
    ((t.flags |= 512), (t.flags |= 2097152));
}
function Ma(e, t, n, r, i) {
  var s = Ne(n) ? dn : ye.current;
  return (
    (s = $n(t, s)),
    Bn(t, i),
    (n = Ul(e, t, n, r, s, i)),
    (r = $l()),
    e !== null && !Ee
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~i),
        St(e, t, i))
      : (H && r && Al(t), (t.flags |= 1), ve(e, t, n, i), t.child)
  );
}
function Nc(e, t, n, r, i) {
  if (Ne(n)) {
    var s = !0;
    ds(t);
  } else s = !1;
  if ((Bn(t, i), t.stateNode === null))
    (Wi(e, t), Wh(t, n, r), Pa(t, n, r, i), (r = !0));
  else if (e === null) {
    var o = t.stateNode,
      a = t.memoizedProps;
    o.props = a;
    var l = o.context,
      u = n.contextType;
    typeof u == "object" && u !== null
      ? (u = We(u))
      : ((u = Ne(n) ? dn : ye.current), (u = $n(t, u)));
    var c = n.getDerivedStateFromProps,
      f =
        typeof c == "function" ||
        typeof o.getSnapshotBeforeUpdate == "function";
    (f ||
      (typeof o.UNSAFE_componentWillReceiveProps != "function" &&
        typeof o.componentWillReceiveProps != "function") ||
      ((a !== r || l !== u) && kc(t, o, r, u)),
      (Mt = !1));
    var d = t.memoizedState;
    ((o.state = d),
      gs(t, r, o, i),
      (l = t.memoizedState),
      a !== r || d !== l || Me.current || Mt
        ? (typeof c == "function" && (Ca(t, n, c, r), (l = t.memoizedState)),
          (a = Mt || Sc(t, n, a, r, d, l, u))
            ? (f ||
                (typeof o.UNSAFE_componentWillMount != "function" &&
                  typeof o.componentWillMount != "function") ||
                (typeof o.componentWillMount == "function" &&
                  o.componentWillMount(),
                typeof o.UNSAFE_componentWillMount == "function" &&
                  o.UNSAFE_componentWillMount()),
              typeof o.componentDidMount == "function" && (t.flags |= 4194308))
            : (typeof o.componentDidMount == "function" && (t.flags |= 4194308),
              (t.memoizedProps = r),
              (t.memoizedState = l)),
          (o.props = r),
          (o.state = l),
          (o.context = u),
          (r = a))
        : (typeof o.componentDidMount == "function" && (t.flags |= 4194308),
          (r = !1)));
  } else {
    ((o = t.stateNode),
      Th(e, t),
      (a = t.memoizedProps),
      (u = t.type === t.elementType ? a : Xe(t.type, a)),
      (o.props = u),
      (f = t.pendingProps),
      (d = o.context),
      (l = n.contextType),
      typeof l == "object" && l !== null
        ? (l = We(l))
        : ((l = Ne(n) ? dn : ye.current), (l = $n(t, l))));
    var y = n.getDerivedStateFromProps;
    ((c =
      typeof y == "function" ||
      typeof o.getSnapshotBeforeUpdate == "function") ||
      (typeof o.UNSAFE_componentWillReceiveProps != "function" &&
        typeof o.componentWillReceiveProps != "function") ||
      ((a !== f || d !== l) && kc(t, o, r, l)),
      (Mt = !1),
      (d = t.memoizedState),
      (o.state = d),
      gs(t, r, o, i));
    var v = t.memoizedState;
    a !== f || d !== v || Me.current || Mt
      ? (typeof y == "function" && (Ca(t, n, y, r), (v = t.memoizedState)),
        (u = Mt || Sc(t, n, u, r, d, v, l) || !1)
          ? (c ||
              (typeof o.UNSAFE_componentWillUpdate != "function" &&
                typeof o.componentWillUpdate != "function") ||
              (typeof o.componentWillUpdate == "function" &&
                o.componentWillUpdate(r, v, l),
              typeof o.UNSAFE_componentWillUpdate == "function" &&
                o.UNSAFE_componentWillUpdate(r, v, l)),
            typeof o.componentDidUpdate == "function" && (t.flags |= 4),
            typeof o.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024))
          : (typeof o.componentDidUpdate != "function" ||
              (a === e.memoizedProps && d === e.memoizedState) ||
              (t.flags |= 4),
            typeof o.getSnapshotBeforeUpdate != "function" ||
              (a === e.memoizedProps && d === e.memoizedState) ||
              (t.flags |= 1024),
            (t.memoizedProps = r),
            (t.memoizedState = v)),
        (o.props = r),
        (o.state = v),
        (o.context = l),
        (r = u))
      : (typeof o.componentDidUpdate != "function" ||
          (a === e.memoizedProps && d === e.memoizedState) ||
          (t.flags |= 4),
        typeof o.getSnapshotBeforeUpdate != "function" ||
          (a === e.memoizedProps && d === e.memoizedState) ||
          (t.flags |= 1024),
        (r = !1));
  }
  return Na(e, t, n, r, s, i);
}
function Na(e, t, n, r, i, s) {
  Qh(e, t);
  var o = (t.flags & 128) !== 0;
  if (!r && !o) return (i && hc(t, n, !1), St(e, t, s));
  ((r = t.stateNode), (c0.current = t));
  var a =
    o && typeof n.getDerivedStateFromError != "function" ? null : r.render();
  return (
    (t.flags |= 1),
    e !== null && o
      ? ((t.child = Hn(t, e.child, null, s)), (t.child = Hn(t, null, a, s)))
      : ve(e, t, a, s),
    (t.memoizedState = r.state),
    i && hc(t, n, !0),
    t.child
  );
}
function Xh(e) {
  var t = e.stateNode;
  (t.pendingContext
    ? dc(e, t.pendingContext, t.pendingContext !== t.context)
    : t.context && dc(e, t.context, !1),
    Ol(e, t.containerInfo));
}
function jc(e, t, n, r, i) {
  return (Wn(), Rl(i), (t.flags |= 256), ve(e, t, n, r), t.child);
}
var ja = { dehydrated: null, treeContext: null, retryLane: 0 };
function Aa(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function Zh(e, t, n) {
  var r = t.pendingProps,
    i = Y.current,
    s = !1,
    o = (t.flags & 128) !== 0,
    a;
  if (
    ((a = o) ||
      (a = e !== null && e.memoizedState === null ? !1 : (i & 2) !== 0),
    a
      ? ((s = !0), (t.flags &= -129))
      : (e === null || e.memoizedState !== null) && (i |= 1),
    b(Y, i & 1),
    e === null)
  )
    return (
      ka(t),
      (e = t.memoizedState),
      e !== null && ((e = e.dehydrated), e !== null)
        ? (t.mode & 1
            ? e.data === "$!"
              ? (t.lanes = 8)
              : (t.lanes = 1073741824)
            : (t.lanes = 1),
          null)
        : ((o = r.children),
          (e = r.fallback),
          s
            ? ((r = t.mode),
              (s = t.child),
              (o = { mode: "hidden", children: o }),
              !(r & 1) && s !== null
                ? ((s.childLanes = 0), (s.pendingProps = o))
                : (s = Ks(o, r, 0, null)),
              (e = un(e, r, n, null)),
              (s.return = t),
              (e.return = t),
              (s.sibling = e),
              (t.child = s),
              (t.child.memoizedState = Aa(n)),
              (t.memoizedState = ja),
              e)
            : Kl(t, o))
    );
  if (((i = e.memoizedState), i !== null && ((a = i.dehydrated), a !== null)))
    return f0(e, t, o, r, a, i, n);
  if (s) {
    ((s = r.fallback), (o = t.mode), (i = e.child), (a = i.sibling));
    var l = { mode: "hidden", children: r.children };
    return (
      !(o & 1) && t.child !== i
        ? ((r = t.child),
          (r.childLanes = 0),
          (r.pendingProps = l),
          (t.deletions = null))
        : ((r = Bt(i, l)), (r.subtreeFlags = i.subtreeFlags & 14680064)),
      a !== null ? (s = Bt(a, s)) : ((s = un(s, o, n, null)), (s.flags |= 2)),
      (s.return = t),
      (r.return = t),
      (r.sibling = s),
      (t.child = r),
      (r = s),
      (s = t.child),
      (o = e.child.memoizedState),
      (o =
        o === null
          ? Aa(n)
          : {
              baseLanes: o.baseLanes | n,
              cachePool: null,
              transitions: o.transitions,
            }),
      (s.memoizedState = o),
      (s.childLanes = e.childLanes & ~n),
      (t.memoizedState = ja),
      r
    );
  }
  return (
    (s = e.child),
    (e = s.sibling),
    (r = Bt(s, { mode: "visible", children: r.children })),
    !(t.mode & 1) && (r.lanes = n),
    (r.return = t),
    (r.sibling = null),
    e !== null &&
      ((n = t.deletions),
      n === null ? ((t.deletions = [e]), (t.flags |= 16)) : n.push(e)),
    (t.child = r),
    (t.memoizedState = null),
    r
  );
}
function Kl(e, t) {
  return (
    (t = Ks({ mode: "visible", children: t }, e.mode, 0, null)),
    (t.return = e),
    (e.child = t)
  );
}
function Mi(e, t, n, r) {
  return (
    r !== null && Rl(r),
    Hn(t, e.child, null, n),
    (e = Kl(t, t.pendingProps.children)),
    (e.flags |= 2),
    (t.memoizedState = null),
    e
  );
}
function f0(e, t, n, r, i, s, o) {
  if (n)
    return t.flags & 256
      ? ((t.flags &= -257), (r = Mo(Error(C(422)))), Mi(e, t, o, r))
      : t.memoizedState !== null
        ? ((t.child = e.child), (t.flags |= 128), null)
        : ((s = r.fallback),
          (i = t.mode),
          (r = Ks({ mode: "visible", children: r.children }, i, 0, null)),
          (s = un(s, i, o, null)),
          (s.flags |= 2),
          (r.return = t),
          (s.return = t),
          (r.sibling = s),
          (t.child = r),
          t.mode & 1 && Hn(t, e.child, null, o),
          (t.child.memoizedState = Aa(o)),
          (t.memoizedState = ja),
          s);
  if (!(t.mode & 1)) return Mi(e, t, o, null);
  if (i.data === "$!") {
    if (((r = i.nextSibling && i.nextSibling.dataset), r)) var a = r.dgst;
    return (
      (r = a),
      (s = Error(C(419))),
      (r = Mo(s, r, void 0)),
      Mi(e, t, o, r)
    );
  }
  if (((a = (o & e.childLanes) !== 0), Ee || a)) {
    if (((r = ae), r !== null)) {
      switch (o & -o) {
        case 4:
          i = 2;
          break;
        case 16:
          i = 8;
          break;
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
          i = 32;
          break;
        case 536870912:
          i = 268435456;
          break;
        default:
          i = 0;
      }
      ((i = i & (r.suspendedLanes | o) ? 0 : i),
        i !== 0 &&
          i !== s.retryLane &&
          ((s.retryLane = i), wt(e, i), et(r, e, i, -1)));
    }
    return (ql(), (r = Mo(Error(C(421)))), Mi(e, t, o, r));
  }
  return i.data === "$?"
    ? ((t.flags |= 128),
      (t.child = e.child),
      (t = C0.bind(null, e)),
      (i._reactRetry = t),
      null)
    : ((e = s.treeContext),
      (Ve = It(i.nextSibling)),
      (Le = t),
      (H = !0),
      (qe = null),
      e !== null &&
        ((Oe[ze++] = mt),
        (Oe[ze++] = yt),
        (Oe[ze++] = hn),
        (mt = e.id),
        (yt = e.overflow),
        (hn = t)),
      (t = Kl(t, r.children)),
      (t.flags |= 4096),
      t);
}
function Ac(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  (r !== null && (r.lanes |= t), Ta(e.return, t, n));
}
function No(e, t, n, r, i) {
  var s = e.memoizedState;
  s === null
    ? (e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: r,
        tail: n,
        tailMode: i,
      })
    : ((s.isBackwards = t),
      (s.rendering = null),
      (s.renderingStartTime = 0),
      (s.last = r),
      (s.tail = n),
      (s.tailMode = i));
}
function qh(e, t, n) {
  var r = t.pendingProps,
    i = r.revealOrder,
    s = r.tail;
  if ((ve(e, t, r.children, n), (r = Y.current), r & 2))
    ((r = (r & 1) | 2), (t.flags |= 128));
  else {
    if (e !== null && e.flags & 128)
      e: for (e = t.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && Ac(e, n, t);
        else if (e.tag === 19) Ac(e, n, t);
        else if (e.child !== null) {
          ((e.child.return = e), (e = e.child));
          continue;
        }
        if (e === t) break e;
        for (; e.sibling === null; ) {
          if (e.return === null || e.return === t) break e;
          e = e.return;
        }
        ((e.sibling.return = e.return), (e = e.sibling));
      }
    r &= 1;
  }
  if ((b(Y, r), !(t.mode & 1))) t.memoizedState = null;
  else
    switch (i) {
      case "forwards":
        for (n = t.child, i = null; n !== null; )
          ((e = n.alternate),
            e !== null && vs(e) === null && (i = n),
            (n = n.sibling));
        ((n = i),
          n === null
            ? ((i = t.child), (t.child = null))
            : ((i = n.sibling), (n.sibling = null)),
          No(t, !1, i, n, s));
        break;
      case "backwards":
        for (n = null, i = t.child, t.child = null; i !== null; ) {
          if (((e = i.alternate), e !== null && vs(e) === null)) {
            t.child = i;
            break;
          }
          ((e = i.sibling), (i.sibling = n), (n = i), (i = e));
        }
        No(t, !0, n, null, s);
        break;
      case "together":
        No(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
  return t.child;
}
function Wi(e, t) {
  !(t.mode & 1) &&
    e !== null &&
    ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
}
function St(e, t, n) {
  if (
    (e !== null && (t.dependencies = e.dependencies),
    (mn |= t.lanes),
    !(n & t.childLanes))
  )
    return null;
  if (e !== null && t.child !== e.child) throw Error(C(153));
  if (t.child !== null) {
    for (
      e = t.child, n = Bt(e, e.pendingProps), t.child = n, n.return = t;
      e.sibling !== null;
    )
      ((e = e.sibling),
        (n = n.sibling = Bt(e, e.pendingProps)),
        (n.return = t));
    n.sibling = null;
  }
  return t.child;
}
function d0(e, t, n) {
  switch (t.tag) {
    case 3:
      (Xh(t), Wn());
      break;
    case 5:
      Ch(t);
      break;
    case 1:
      Ne(t.type) && ds(t);
      break;
    case 4:
      Ol(t, t.stateNode.containerInfo);
      break;
    case 10:
      var r = t.type._context,
        i = t.memoizedProps.value;
      (b(ms, r._currentValue), (r._currentValue = i));
      break;
    case 13:
      if (((r = t.memoizedState), r !== null))
        return r.dehydrated !== null
          ? (b(Y, Y.current & 1), (t.flags |= 128), null)
          : n & t.child.childLanes
            ? Zh(e, t, n)
            : (b(Y, Y.current & 1),
              (e = St(e, t, n)),
              e !== null ? e.sibling : null);
      b(Y, Y.current & 1);
      break;
    case 19:
      if (((r = (n & t.childLanes) !== 0), e.flags & 128)) {
        if (r) return qh(e, t, n);
        t.flags |= 128;
      }
      if (
        ((i = t.memoizedState),
        i !== null &&
          ((i.rendering = null), (i.tail = null), (i.lastEffect = null)),
        b(Y, Y.current),
        r)
      )
        break;
      return null;
    case 22:
    case 23:
      return ((t.lanes = 0), Yh(e, t, n));
  }
  return St(e, t, n);
}
var Jh, Da, ep, tp;
Jh = function (e, t) {
  for (var n = t.child; n !== null; ) {
    if (n.tag === 5 || n.tag === 6) e.appendChild(n.stateNode);
    else if (n.tag !== 4 && n.child !== null) {
      ((n.child.return = n), (n = n.child));
      continue;
    }
    if (n === t) break;
    for (; n.sibling === null; ) {
      if (n.return === null || n.return === t) return;
      n = n.return;
    }
    ((n.sibling.return = n.return), (n = n.sibling));
  }
};
Da = function () {};
ep = function (e, t, n, r) {
  var i = e.memoizedProps;
  if (i !== r) {
    ((e = t.stateNode), sn(ut.current));
    var s = null;
    switch (n) {
      case "input":
        ((i = Jo(e, i)), (r = Jo(e, r)), (s = []));
        break;
      case "select":
        ((i = X({}, i, { value: void 0 })),
          (r = X({}, r, { value: void 0 })),
          (s = []));
        break;
      case "textarea":
        ((i = na(e, i)), (r = na(e, r)), (s = []));
        break;
      default:
        typeof i.onClick != "function" &&
          typeof r.onClick == "function" &&
          (e.onclick = cs);
    }
    ia(n, r);
    var o;
    n = null;
    for (u in i)
      if (!r.hasOwnProperty(u) && i.hasOwnProperty(u) && i[u] != null)
        if (u === "style") {
          var a = i[u];
          for (o in a) a.hasOwnProperty(o) && (n || (n = {}), (n[o] = ""));
        } else
          u !== "dangerouslySetInnerHTML" &&
            u !== "children" &&
            u !== "suppressContentEditableWarning" &&
            u !== "suppressHydrationWarning" &&
            u !== "autoFocus" &&
            (Vr.hasOwnProperty(u)
              ? s || (s = [])
              : (s = s || []).push(u, null));
    for (u in r) {
      var l = r[u];
      if (
        ((a = i != null ? i[u] : void 0),
        r.hasOwnProperty(u) && l !== a && (l != null || a != null))
      )
        if (u === "style")
          if (a) {
            for (o in a)
              !a.hasOwnProperty(o) ||
                (l && l.hasOwnProperty(o)) ||
                (n || (n = {}), (n[o] = ""));
            for (o in l)
              l.hasOwnProperty(o) &&
                a[o] !== l[o] &&
                (n || (n = {}), (n[o] = l[o]));
          } else (n || (s || (s = []), s.push(u, n)), (n = l));
        else
          u === "dangerouslySetInnerHTML"
            ? ((l = l ? l.__html : void 0),
              (a = a ? a.__html : void 0),
              l != null && a !== l && (s = s || []).push(u, l))
            : u === "children"
              ? (typeof l != "string" && typeof l != "number") ||
                (s = s || []).push(u, "" + l)
              : u !== "suppressContentEditableWarning" &&
                u !== "suppressHydrationWarning" &&
                (Vr.hasOwnProperty(u)
                  ? (l != null && u === "onScroll" && U("scroll", e),
                    s || a === l || (s = []))
                  : (s = s || []).push(u, l));
    }
    n && (s = s || []).push("style", n);
    var u = s;
    (t.updateQueue = u) && (t.flags |= 4);
  }
};
tp = function (e, t, n, r) {
  n !== r && (t.flags |= 4);
};
function fr(e, t) {
  if (!H)
    switch (e.tailMode) {
      case "hidden":
        t = e.tail;
        for (var n = null; t !== null; )
          (t.alternate !== null && (n = t), (t = t.sibling));
        n === null ? (e.tail = null) : (n.sibling = null);
        break;
      case "collapsed":
        n = e.tail;
        for (var r = null; n !== null; )
          (n.alternate !== null && (r = n), (n = n.sibling));
        r === null
          ? t || e.tail === null
            ? (e.tail = null)
            : (e.tail.sibling = null)
          : (r.sibling = null);
    }
}
function pe(e) {
  var t = e.alternate !== null && e.alternate.child === e.child,
    n = 0,
    r = 0;
  if (t)
    for (var i = e.child; i !== null; )
      ((n |= i.lanes | i.childLanes),
        (r |= i.subtreeFlags & 14680064),
        (r |= i.flags & 14680064),
        (i.return = e),
        (i = i.sibling));
  else
    for (i = e.child; i !== null; )
      ((n |= i.lanes | i.childLanes),
        (r |= i.subtreeFlags),
        (r |= i.flags),
        (i.return = e),
        (i = i.sibling));
  return ((e.subtreeFlags |= r), (e.childLanes = n), t);
}
function h0(e, t, n) {
  var r = t.pendingProps;
  switch ((Dl(t), t.tag)) {
    case 2:
    case 16:
    case 15:
    case 0:
    case 11:
    case 7:
    case 8:
    case 12:
    case 9:
    case 14:
      return (pe(t), null);
    case 1:
      return (Ne(t.type) && fs(), pe(t), null);
    case 3:
      return (
        (r = t.stateNode),
        Kn(),
        W(Me),
        W(ye),
        Bl(),
        r.pendingContext &&
          ((r.context = r.pendingContext), (r.pendingContext = null)),
        (e === null || e.child === null) &&
          (Pi(t)
            ? (t.flags |= 4)
            : e === null ||
              (e.memoizedState.isDehydrated && !(t.flags & 256)) ||
              ((t.flags |= 1024), qe !== null && (za(qe), (qe = null)))),
        Da(e, t),
        pe(t),
        null
      );
    case 5:
      zl(t);
      var i = sn(Hr.current);
      if (((n = t.type), e !== null && t.stateNode != null))
        (ep(e, t, n, r, i),
          e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152)));
      else {
        if (!r) {
          if (t.stateNode === null) throw Error(C(166));
          return (pe(t), null);
        }
        if (((e = sn(ut.current)), Pi(t))) {
          ((r = t.stateNode), (n = t.type));
          var s = t.memoizedProps;
          switch (((r[at] = t), (r[$r] = s), (e = (t.mode & 1) !== 0), n)) {
            case "dialog":
              (U("cancel", r), U("close", r));
              break;
            case "iframe":
            case "object":
            case "embed":
              U("load", r);
              break;
            case "video":
            case "audio":
              for (i = 0; i < vr.length; i++) U(vr[i], r);
              break;
            case "source":
              U("error", r);
              break;
            case "img":
            case "image":
            case "link":
              (U("error", r), U("load", r));
              break;
            case "details":
              U("toggle", r);
              break;
            case "input":
              (zu(r, s), U("invalid", r));
              break;
            case "select":
              ((r._wrapperState = { wasMultiple: !!s.multiple }),
                U("invalid", r));
              break;
            case "textarea":
              (bu(r, s), U("invalid", r));
          }
          (ia(n, s), (i = null));
          for (var o in s)
            if (s.hasOwnProperty(o)) {
              var a = s[o];
              o === "children"
                ? typeof a == "string"
                  ? r.textContent !== a &&
                    (s.suppressHydrationWarning !== !0 &&
                      Ci(r.textContent, a, e),
                    (i = ["children", a]))
                  : typeof a == "number" &&
                    r.textContent !== "" + a &&
                    (s.suppressHydrationWarning !== !0 &&
                      Ci(r.textContent, a, e),
                    (i = ["children", "" + a]))
                : Vr.hasOwnProperty(o) &&
                  a != null &&
                  o === "onScroll" &&
                  U("scroll", r);
            }
          switch (n) {
            case "input":
              (yi(r), Bu(r, s, !0));
              break;
            case "textarea":
              (yi(r), Uu(r));
              break;
            case "select":
            case "option":
              break;
            default:
              typeof s.onClick == "function" && (r.onclick = cs);
          }
          ((r = i), (t.updateQueue = r), r !== null && (t.flags |= 4));
        } else {
          ((o = i.nodeType === 9 ? i : i.ownerDocument),
            e === "http://www.w3.org/1999/xhtml" && (e = jd(n)),
            e === "http://www.w3.org/1999/xhtml"
              ? n === "script"
                ? ((e = o.createElement("div")),
                  (e.innerHTML = "<script><\/script>"),
                  (e = e.removeChild(e.firstChild)))
                : typeof r.is == "string"
                  ? (e = o.createElement(n, { is: r.is }))
                  : ((e = o.createElement(n)),
                    n === "select" &&
                      ((o = e),
                      r.multiple
                        ? (o.multiple = !0)
                        : r.size && (o.size = r.size)))
              : (e = o.createElementNS(e, n)),
            (e[at] = t),
            (e[$r] = r),
            Jh(e, t, !1, !1),
            (t.stateNode = e));
          e: {
            switch (((o = sa(n, r)), n)) {
              case "dialog":
                (U("cancel", e), U("close", e), (i = r));
                break;
              case "iframe":
              case "object":
              case "embed":
                (U("load", e), (i = r));
                break;
              case "video":
              case "audio":
                for (i = 0; i < vr.length; i++) U(vr[i], e);
                i = r;
                break;
              case "source":
                (U("error", e), (i = r));
                break;
              case "img":
              case "image":
              case "link":
                (U("error", e), U("load", e), (i = r));
                break;
              case "details":
                (U("toggle", e), (i = r));
                break;
              case "input":
                (zu(e, r), (i = Jo(e, r)), U("invalid", e));
                break;
              case "option":
                i = r;
                break;
              case "select":
                ((e._wrapperState = { wasMultiple: !!r.multiple }),
                  (i = X({}, r, { value: void 0 })),
                  U("invalid", e));
                break;
              case "textarea":
                (bu(e, r), (i = na(e, r)), U("invalid", e));
                break;
              default:
                i = r;
            }
            (ia(n, i), (a = i));
            for (s in a)
              if (a.hasOwnProperty(s)) {
                var l = a[s];
                s === "style"
                  ? Rd(e, l)
                  : s === "dangerouslySetInnerHTML"
                    ? ((l = l ? l.__html : void 0), l != null && Ad(e, l))
                    : s === "children"
                      ? typeof l == "string"
                        ? (n !== "textarea" || l !== "") && Lr(e, l)
                        : typeof l == "number" && Lr(e, "" + l)
                      : s !== "suppressContentEditableWarning" &&
                        s !== "suppressHydrationWarning" &&
                        s !== "autoFocus" &&
                        (Vr.hasOwnProperty(s)
                          ? l != null && s === "onScroll" && U("scroll", e)
                          : l != null && yl(e, s, l, o));
              }
            switch (n) {
              case "input":
                (yi(e), Bu(e, r, !1));
                break;
              case "textarea":
                (yi(e), Uu(e));
                break;
              case "option":
                r.value != null && e.setAttribute("value", "" + Ut(r.value));
                break;
              case "select":
                ((e.multiple = !!r.multiple),
                  (s = r.value),
                  s != null
                    ? In(e, !!r.multiple, s, !1)
                    : r.defaultValue != null &&
                      In(e, !!r.multiple, r.defaultValue, !0));
                break;
              default:
                typeof i.onClick == "function" && (e.onclick = cs);
            }
            switch (n) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                r = !!r.autoFocus;
                break e;
              case "img":
                r = !0;
                break e;
              default:
                r = !1;
            }
          }
          r && (t.flags |= 4);
        }
        t.ref !== null && ((t.flags |= 512), (t.flags |= 2097152));
      }
      return (pe(t), null);
    case 6:
      if (e && t.stateNode != null) tp(e, t, e.memoizedProps, r);
      else {
        if (typeof r != "string" && t.stateNode === null) throw Error(C(166));
        if (((n = sn(Hr.current)), sn(ut.current), Pi(t))) {
          if (
            ((r = t.stateNode),
            (n = t.memoizedProps),
            (r[at] = t),
            (s = r.nodeValue !== n) && ((e = Le), e !== null))
          )
            switch (e.tag) {
              case 3:
                Ci(r.nodeValue, n, (e.mode & 1) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 &&
                  Ci(r.nodeValue, n, (e.mode & 1) !== 0);
            }
          s && (t.flags |= 4);
        } else
          ((r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r)),
            (r[at] = t),
            (t.stateNode = r));
      }
      return (pe(t), null);
    case 13:
      if (
        (W(Y),
        (r = t.memoizedState),
        e === null ||
          (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
      ) {
        if (H && Ve !== null && t.mode & 1 && !(t.flags & 128))
          (xh(), Wn(), (t.flags |= 98560), (s = !1));
        else if (((s = Pi(t)), r !== null && r.dehydrated !== null)) {
          if (e === null) {
            if (!s) throw Error(C(318));
            if (
              ((s = t.memoizedState),
              (s = s !== null ? s.dehydrated : null),
              !s)
            )
              throw Error(C(317));
            s[at] = t;
          } else
            (Wn(),
              !(t.flags & 128) && (t.memoizedState = null),
              (t.flags |= 4));
          (pe(t), (s = !1));
        } else (qe !== null && (za(qe), (qe = null)), (s = !0));
        if (!s) return t.flags & 65536 ? t : null;
      }
      return t.flags & 128
        ? ((t.lanes = n), t)
        : ((r = r !== null),
          r !== (e !== null && e.memoizedState !== null) &&
            r &&
            ((t.child.flags |= 8192),
            t.mode & 1 &&
              (e === null || Y.current & 1 ? se === 0 && (se = 3) : ql())),
          t.updateQueue !== null && (t.flags |= 4),
          pe(t),
          null);
    case 4:
      return (
        Kn(),
        Da(e, t),
        e === null && br(t.stateNode.containerInfo),
        pe(t),
        null
      );
    case 10:
      return (_l(t.type._context), pe(t), null);
    case 17:
      return (Ne(t.type) && fs(), pe(t), null);
    case 19:
      if ((W(Y), (s = t.memoizedState), s === null)) return (pe(t), null);
      if (((r = (t.flags & 128) !== 0), (o = s.rendering), o === null))
        if (r) fr(s, !1);
        else {
          if (se !== 0 || (e !== null && e.flags & 128))
            for (e = t.child; e !== null; ) {
              if (((o = vs(e)), o !== null)) {
                for (
                  t.flags |= 128,
                    fr(s, !1),
                    r = o.updateQueue,
                    r !== null && ((t.updateQueue = r), (t.flags |= 4)),
                    t.subtreeFlags = 0,
                    r = n,
                    n = t.child;
                  n !== null;
                )
                  ((s = n),
                    (e = r),
                    (s.flags &= 14680066),
                    (o = s.alternate),
                    o === null
                      ? ((s.childLanes = 0),
                        (s.lanes = e),
                        (s.child = null),
                        (s.subtreeFlags = 0),
                        (s.memoizedProps = null),
                        (s.memoizedState = null),
                        (s.updateQueue = null),
                        (s.dependencies = null),
                        (s.stateNode = null))
                      : ((s.childLanes = o.childLanes),
                        (s.lanes = o.lanes),
                        (s.child = o.child),
                        (s.subtreeFlags = 0),
                        (s.deletions = null),
                        (s.memoizedProps = o.memoizedProps),
                        (s.memoizedState = o.memoizedState),
                        (s.updateQueue = o.updateQueue),
                        (s.type = o.type),
                        (e = o.dependencies),
                        (s.dependencies =
                          e === null
                            ? null
                            : {
                                lanes: e.lanes,
                                firstContext: e.firstContext,
                              })),
                    (n = n.sibling));
                return (b(Y, (Y.current & 1) | 2), t.child);
              }
              e = e.sibling;
            }
          s.tail !== null &&
            q() > Yn &&
            ((t.flags |= 128), (r = !0), fr(s, !1), (t.lanes = 4194304));
        }
      else {
        if (!r)
          if (((e = vs(o)), e !== null)) {
            if (
              ((t.flags |= 128),
              (r = !0),
              (n = e.updateQueue),
              n !== null && ((t.updateQueue = n), (t.flags |= 4)),
              fr(s, !0),
              s.tail === null && s.tailMode === "hidden" && !o.alternate && !H)
            )
              return (pe(t), null);
          } else
            2 * q() - s.renderingStartTime > Yn &&
              n !== 1073741824 &&
              ((t.flags |= 128), (r = !0), fr(s, !1), (t.lanes = 4194304));
        s.isBackwards
          ? ((o.sibling = t.child), (t.child = o))
          : ((n = s.last),
            n !== null ? (n.sibling = o) : (t.child = o),
            (s.last = o));
      }
      return s.tail !== null
        ? ((t = s.tail),
          (s.rendering = t),
          (s.tail = t.sibling),
          (s.renderingStartTime = q()),
          (t.sibling = null),
          (n = Y.current),
          b(Y, r ? (n & 1) | 2 : n & 1),
          t)
        : (pe(t), null);
    case 22:
    case 23:
      return (
        Zl(),
        (r = t.memoizedState !== null),
        e !== null && (e.memoizedState !== null) !== r && (t.flags |= 8192),
        r && t.mode & 1
          ? Re & 1073741824 && (pe(t), t.subtreeFlags & 6 && (t.flags |= 8192))
          : pe(t),
        null
      );
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(C(156, t.tag));
}
function p0(e, t) {
  switch ((Dl(t), t.tag)) {
    case 1:
      return (
        Ne(t.type) && fs(),
        (e = t.flags),
        e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 3:
      return (
        Kn(),
        W(Me),
        W(ye),
        Bl(),
        (e = t.flags),
        e & 65536 && !(e & 128) ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 5:
      return (zl(t), null);
    case 13:
      if ((W(Y), (e = t.memoizedState), e !== null && e.dehydrated !== null)) {
        if (t.alternate === null) throw Error(C(340));
        Wn();
      }
      return (
        (e = t.flags),
        e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 19:
      return (W(Y), null);
    case 4:
      return (Kn(), null);
    case 10:
      return (_l(t.type._context), null);
    case 22:
    case 23:
      return (Zl(), null);
    case 24:
      return null;
    default:
      return null;
  }
}
var Ni = !1,
  me = !1,
  m0 = typeof WeakSet == "function" ? WeakSet : Set,
  A = null;
function Dn(e, t) {
  var n = e.ref;
  if (n !== null)
    if (typeof n == "function")
      try {
        n(null);
      } catch (r) {
        Z(e, t, r);
      }
    else n.current = null;
}
function Ra(e, t, n) {
  try {
    n();
  } catch (r) {
    Z(e, t, r);
  }
}
var Dc = !1;
function y0(e, t) {
  if (((ma = as), (e = oh()), jl(e))) {
    if ("selectionStart" in e)
      var n = { start: e.selectionStart, end: e.selectionEnd };
    else
      e: {
        n = ((n = e.ownerDocument) && n.defaultView) || window;
        var r = n.getSelection && n.getSelection();
        if (r && r.rangeCount !== 0) {
          n = r.anchorNode;
          var i = r.anchorOffset,
            s = r.focusNode;
          r = r.focusOffset;
          try {
            (n.nodeType, s.nodeType);
          } catch {
            n = null;
            break e;
          }
          var o = 0,
            a = -1,
            l = -1,
            u = 0,
            c = 0,
            f = e,
            d = null;
          t: for (;;) {
            for (
              var y;
              f !== n || (i !== 0 && f.nodeType !== 3) || (a = o + i),
                f !== s || (r !== 0 && f.nodeType !== 3) || (l = o + r),
                f.nodeType === 3 && (o += f.nodeValue.length),
                (y = f.firstChild) !== null;
            )
              ((d = f), (f = y));
            for (;;) {
              if (f === e) break t;
              if (
                (d === n && ++u === i && (a = o),
                d === s && ++c === r && (l = o),
                (y = f.nextSibling) !== null)
              )
                break;
              ((f = d), (d = f.parentNode));
            }
            f = y;
          }
          n = a === -1 || l === -1 ? null : { start: a, end: l };
        } else n = null;
      }
    n = n || { start: 0, end: 0 };
  } else n = null;
  for (ya = { focusedElem: e, selectionRange: n }, as = !1, A = t; A !== null; )
    if (((t = A), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null))
      ((e.return = t), (A = e));
    else
      for (; A !== null; ) {
        t = A;
        try {
          var v = t.alternate;
          if (t.flags & 1024)
            switch (t.tag) {
              case 0:
              case 11:
              case 15:
                break;
              case 1:
                if (v !== null) {
                  var w = v.memoizedProps,
                    k = v.memoizedState,
                    p = t.stateNode,
                    h = p.getSnapshotBeforeUpdate(
                      t.elementType === t.type ? w : Xe(t.type, w),
                      k,
                    );
                  p.__reactInternalSnapshotBeforeUpdate = h;
                }
                break;
              case 3:
                var m = t.stateNode.containerInfo;
                m.nodeType === 1
                  ? (m.textContent = "")
                  : m.nodeType === 9 &&
                    m.documentElement &&
                    m.removeChild(m.documentElement);
                break;
              case 5:
              case 6:
              case 4:
              case 17:
                break;
              default:
                throw Error(C(163));
            }
        } catch (x) {
          Z(t, t.return, x);
        }
        if (((e = t.sibling), e !== null)) {
          ((e.return = t.return), (A = e));
          break;
        }
        A = t.return;
      }
  return ((v = Dc), (Dc = !1), v);
}
function Er(e, t, n) {
  var r = t.updateQueue;
  if (((r = r !== null ? r.lastEffect : null), r !== null)) {
    var i = (r = r.next);
    do {
      if ((i.tag & e) === e) {
        var s = i.destroy;
        ((i.destroy = void 0), s !== void 0 && Ra(t, n, s));
      }
      i = i.next;
    } while (i !== r);
  }
}
function Ws(e, t) {
  if (
    ((t = t.updateQueue), (t = t !== null ? t.lastEffect : null), t !== null)
  ) {
    var n = (t = t.next);
    do {
      if ((n.tag & e) === e) {
        var r = n.create;
        n.destroy = r();
      }
      n = n.next;
    } while (n !== t);
  }
}
function Va(e) {
  var t = e.ref;
  if (t !== null) {
    var n = e.stateNode;
    switch (e.tag) {
      case 5:
        e = n;
        break;
      default:
        e = n;
    }
    typeof t == "function" ? t(e) : (t.current = e);
  }
}
function np(e) {
  var t = e.alternate;
  (t !== null && ((e.alternate = null), np(t)),
    (e.child = null),
    (e.deletions = null),
    (e.sibling = null),
    e.tag === 5 &&
      ((t = e.stateNode),
      t !== null &&
        (delete t[at], delete t[$r], delete t[xa], delete t[qg], delete t[Jg])),
    (e.stateNode = null),
    (e.return = null),
    (e.dependencies = null),
    (e.memoizedProps = null),
    (e.memoizedState = null),
    (e.pendingProps = null),
    (e.stateNode = null),
    (e.updateQueue = null));
}
function rp(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function Rc(e) {
  e: for (;;) {
    for (; e.sibling === null; ) {
      if (e.return === null || rp(e.return)) return null;
      e = e.return;
    }
    for (
      e.sibling.return = e.return, e = e.sibling;
      e.tag !== 5 && e.tag !== 6 && e.tag !== 18;
    ) {
      if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
      ((e.child.return = e), (e = e.child));
    }
    if (!(e.flags & 2)) return e.stateNode;
  }
}
function La(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    ((e = e.stateNode),
      t
        ? n.nodeType === 8
          ? n.parentNode.insertBefore(e, t)
          : n.insertBefore(e, t)
        : (n.nodeType === 8
            ? ((t = n.parentNode), t.insertBefore(e, n))
            : ((t = n), t.appendChild(e)),
          (n = n._reactRootContainer),
          n != null || t.onclick !== null || (t.onclick = cs)));
  else if (r !== 4 && ((e = e.child), e !== null))
    for (La(e, t, n), e = e.sibling; e !== null; )
      (La(e, t, n), (e = e.sibling));
}
function _a(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    ((e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e));
  else if (r !== 4 && ((e = e.child), e !== null))
    for (_a(e, t, n), e = e.sibling; e !== null; )
      (_a(e, t, n), (e = e.sibling));
}
var le = null,
  Ze = !1;
function Tt(e, t, n) {
  for (n = n.child; n !== null; ) (ip(e, t, n), (n = n.sibling));
}
function ip(e, t, n) {
  if (lt && typeof lt.onCommitFiberUnmount == "function")
    try {
      lt.onCommitFiberUnmount(Is, n);
    } catch {}
  switch (n.tag) {
    case 5:
      me || Dn(n, t);
    case 6:
      var r = le,
        i = Ze;
      ((le = null),
        Tt(e, t, n),
        (le = r),
        (Ze = i),
        le !== null &&
          (Ze
            ? ((e = le),
              (n = n.stateNode),
              e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n))
            : le.removeChild(n.stateNode)));
      break;
    case 18:
      le !== null &&
        (Ze
          ? ((e = le),
            (n = n.stateNode),
            e.nodeType === 8
              ? So(e.parentNode, n)
              : e.nodeType === 1 && So(e, n),
            Or(e))
          : So(le, n.stateNode));
      break;
    case 4:
      ((r = le),
        (i = Ze),
        (le = n.stateNode.containerInfo),
        (Ze = !0),
        Tt(e, t, n),
        (le = r),
        (Ze = i));
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (
        !me &&
        ((r = n.updateQueue), r !== null && ((r = r.lastEffect), r !== null))
      ) {
        i = r = r.next;
        do {
          var s = i,
            o = s.destroy;
          ((s = s.tag),
            o !== void 0 && (s & 2 || s & 4) && Ra(n, t, o),
            (i = i.next));
        } while (i !== r);
      }
      Tt(e, t, n);
      break;
    case 1:
      if (
        !me &&
        (Dn(n, t),
        (r = n.stateNode),
        typeof r.componentWillUnmount == "function")
      )
        try {
          ((r.props = n.memoizedProps),
            (r.state = n.memoizedState),
            r.componentWillUnmount());
        } catch (a) {
          Z(n, t, a);
        }
      Tt(e, t, n);
      break;
    case 21:
      Tt(e, t, n);
      break;
    case 22:
      n.mode & 1
        ? ((me = (r = me) || n.memoizedState !== null), Tt(e, t, n), (me = r))
        : Tt(e, t, n);
      break;
    default:
      Tt(e, t, n);
  }
}
function Vc(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    (n === null && (n = e.stateNode = new m0()),
      t.forEach(function (r) {
        var i = P0.bind(null, e, r);
        n.has(r) || (n.add(r), r.then(i, i));
      }));
  }
}
function Ge(e, t) {
  var n = t.deletions;
  if (n !== null)
    for (var r = 0; r < n.length; r++) {
      var i = n[r];
      try {
        var s = e,
          o = t,
          a = o;
        e: for (; a !== null; ) {
          switch (a.tag) {
            case 5:
              ((le = a.stateNode), (Ze = !1));
              break e;
            case 3:
              ((le = a.stateNode.containerInfo), (Ze = !0));
              break e;
            case 4:
              ((le = a.stateNode.containerInfo), (Ze = !0));
              break e;
          }
          a = a.return;
        }
        if (le === null) throw Error(C(160));
        (ip(s, o, i), (le = null), (Ze = !1));
        var l = i.alternate;
        (l !== null && (l.return = null), (i.return = null));
      } catch (u) {
        Z(i, t, u);
      }
    }
  if (t.subtreeFlags & 12854)
    for (t = t.child; t !== null; ) (sp(t, e), (t = t.sibling));
}
function sp(e, t) {
  var n = e.alternate,
    r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if ((Ge(t, e), rt(e), r & 4)) {
        try {
          (Er(3, e, e.return), Ws(3, e));
        } catch (w) {
          Z(e, e.return, w);
        }
        try {
          Er(5, e, e.return);
        } catch (w) {
          Z(e, e.return, w);
        }
      }
      break;
    case 1:
      (Ge(t, e), rt(e), r & 512 && n !== null && Dn(n, n.return));
      break;
    case 5:
      if (
        (Ge(t, e),
        rt(e),
        r & 512 && n !== null && Dn(n, n.return),
        e.flags & 32)
      ) {
        var i = e.stateNode;
        try {
          Lr(i, "");
        } catch (w) {
          Z(e, e.return, w);
        }
      }
      if (r & 4 && ((i = e.stateNode), i != null)) {
        var s = e.memoizedProps,
          o = n !== null ? n.memoizedProps : s,
          a = e.type,
          l = e.updateQueue;
        if (((e.updateQueue = null), l !== null))
          try {
            (a === "input" && s.type === "radio" && s.name != null && Md(i, s),
              sa(a, o));
            var u = sa(a, s);
            for (o = 0; o < l.length; o += 2) {
              var c = l[o],
                f = l[o + 1];
              c === "style"
                ? Rd(i, f)
                : c === "dangerouslySetInnerHTML"
                  ? Ad(i, f)
                  : c === "children"
                    ? Lr(i, f)
                    : yl(i, c, f, u);
            }
            switch (a) {
              case "input":
                ea(i, s);
                break;
              case "textarea":
                Nd(i, s);
                break;
              case "select":
                var d = i._wrapperState.wasMultiple;
                i._wrapperState.wasMultiple = !!s.multiple;
                var y = s.value;
                y != null
                  ? In(i, !!s.multiple, y, !1)
                  : d !== !!s.multiple &&
                    (s.defaultValue != null
                      ? In(i, !!s.multiple, s.defaultValue, !0)
                      : In(i, !!s.multiple, s.multiple ? [] : "", !1));
            }
            i[$r] = s;
          } catch (w) {
            Z(e, e.return, w);
          }
      }
      break;
    case 6:
      if ((Ge(t, e), rt(e), r & 4)) {
        if (e.stateNode === null) throw Error(C(162));
        ((i = e.stateNode), (s = e.memoizedProps));
        try {
          i.nodeValue = s;
        } catch (w) {
          Z(e, e.return, w);
        }
      }
      break;
    case 3:
      if (
        (Ge(t, e), rt(e), r & 4 && n !== null && n.memoizedState.isDehydrated)
      )
        try {
          Or(t.containerInfo);
        } catch (w) {
          Z(e, e.return, w);
        }
      break;
    case 4:
      (Ge(t, e), rt(e));
      break;
    case 13:
      (Ge(t, e),
        rt(e),
        (i = e.child),
        i.flags & 8192 &&
          ((s = i.memoizedState !== null),
          (i.stateNode.isHidden = s),
          !s ||
            (i.alternate !== null && i.alternate.memoizedState !== null) ||
            (Ql = q())),
        r & 4 && Vc(e));
      break;
    case 22:
      if (
        ((c = n !== null && n.memoizedState !== null),
        e.mode & 1 ? ((me = (u = me) || c), Ge(t, e), (me = u)) : Ge(t, e),
        rt(e),
        r & 8192)
      ) {
        if (
          ((u = e.memoizedState !== null),
          (e.stateNode.isHidden = u) && !c && e.mode & 1)
        )
          for (A = e, c = e.child; c !== null; ) {
            for (f = A = c; A !== null; ) {
              switch (((d = A), (y = d.child), d.tag)) {
                case 0:
                case 11:
                case 14:
                case 15:
                  Er(4, d, d.return);
                  break;
                case 1:
                  Dn(d, d.return);
                  var v = d.stateNode;
                  if (typeof v.componentWillUnmount == "function") {
                    ((r = d), (n = d.return));
                    try {
                      ((t = r),
                        (v.props = t.memoizedProps),
                        (v.state = t.memoizedState),
                        v.componentWillUnmount());
                    } catch (w) {
                      Z(r, n, w);
                    }
                  }
                  break;
                case 5:
                  Dn(d, d.return);
                  break;
                case 22:
                  if (d.memoizedState !== null) {
                    _c(f);
                    continue;
                  }
              }
              y !== null ? ((y.return = d), (A = y)) : _c(f);
            }
            c = c.sibling;
          }
        e: for (c = null, f = e; ; ) {
          if (f.tag === 5) {
            if (c === null) {
              c = f;
              try {
                ((i = f.stateNode),
                  u
                    ? ((s = i.style),
                      typeof s.setProperty == "function"
                        ? s.setProperty("display", "none", "important")
                        : (s.display = "none"))
                    : ((a = f.stateNode),
                      (l = f.memoizedProps.style),
                      (o =
                        l != null && l.hasOwnProperty("display")
                          ? l.display
                          : null),
                      (a.style.display = Dd("display", o))));
              } catch (w) {
                Z(e, e.return, w);
              }
            }
          } else if (f.tag === 6) {
            if (c === null)
              try {
                f.stateNode.nodeValue = u ? "" : f.memoizedProps;
              } catch (w) {
                Z(e, e.return, w);
              }
          } else if (
            ((f.tag !== 22 && f.tag !== 23) ||
              f.memoizedState === null ||
              f === e) &&
            f.child !== null
          ) {
            ((f.child.return = f), (f = f.child));
            continue;
          }
          if (f === e) break e;
          for (; f.sibling === null; ) {
            if (f.return === null || f.return === e) break e;
            (c === f && (c = null), (f = f.return));
          }
          (c === f && (c = null),
            (f.sibling.return = f.return),
            (f = f.sibling));
        }
      }
      break;
    case 19:
      (Ge(t, e), rt(e), r & 4 && Vc(e));
      break;
    case 21:
      break;
    default:
      (Ge(t, e), rt(e));
  }
}
function rt(e) {
  var t = e.flags;
  if (t & 2) {
    try {
      e: {
        for (var n = e.return; n !== null; ) {
          if (rp(n)) {
            var r = n;
            break e;
          }
          n = n.return;
        }
        throw Error(C(160));
      }
      switch (r.tag) {
        case 5:
          var i = r.stateNode;
          r.flags & 32 && (Lr(i, ""), (r.flags &= -33));
          var s = Rc(e);
          _a(e, s, i);
          break;
        case 3:
        case 4:
          var o = r.stateNode.containerInfo,
            a = Rc(e);
          La(e, a, o);
          break;
        default:
          throw Error(C(161));
      }
    } catch (l) {
      Z(e, e.return, l);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function g0(e, t, n) {
  ((A = e), op(e));
}
function op(e, t, n) {
  for (var r = (e.mode & 1) !== 0; A !== null; ) {
    var i = A,
      s = i.child;
    if (i.tag === 22 && r) {
      var o = i.memoizedState !== null || Ni;
      if (!o) {
        var a = i.alternate,
          l = (a !== null && a.memoizedState !== null) || me;
        a = Ni;
        var u = me;
        if (((Ni = o), (me = l) && !u))
          for (A = i; A !== null; )
            ((o = A),
              (l = o.child),
              o.tag === 22 && o.memoizedState !== null
                ? Ic(i)
                : l !== null
                  ? ((l.return = o), (A = l))
                  : Ic(i));
        for (; s !== null; ) ((A = s), op(s), (s = s.sibling));
        ((A = i), (Ni = a), (me = u));
      }
      Lc(e);
    } else
      i.subtreeFlags & 8772 && s !== null ? ((s.return = i), (A = s)) : Lc(e);
  }
}
function Lc(e) {
  for (; A !== null; ) {
    var t = A;
    if (t.flags & 8772) {
      var n = t.alternate;
      try {
        if (t.flags & 8772)
          switch (t.tag) {
            case 0:
            case 11:
            case 15:
              me || Ws(5, t);
              break;
            case 1:
              var r = t.stateNode;
              if (t.flags & 4 && !me)
                if (n === null) r.componentDidMount();
                else {
                  var i =
                    t.elementType === t.type
                      ? n.memoizedProps
                      : Xe(t.type, n.memoizedProps);
                  r.componentDidUpdate(
                    i,
                    n.memoizedState,
                    r.__reactInternalSnapshotBeforeUpdate,
                  );
                }
              var s = t.updateQueue;
              s !== null && vc(t, s, r);
              break;
            case 3:
              var o = t.updateQueue;
              if (o !== null) {
                if (((n = null), t.child !== null))
                  switch (t.child.tag) {
                    case 5:
                      n = t.child.stateNode;
                      break;
                    case 1:
                      n = t.child.stateNode;
                  }
                vc(t, o, n);
              }
              break;
            case 5:
              var a = t.stateNode;
              if (n === null && t.flags & 4) {
                n = a;
                var l = t.memoizedProps;
                switch (t.type) {
                  case "button":
                  case "input":
                  case "select":
                  case "textarea":
                    l.autoFocus && n.focus();
                    break;
                  case "img":
                    l.src && (n.src = l.src);
                }
              }
              break;
            case 6:
              break;
            case 4:
              break;
            case 12:
              break;
            case 13:
              if (t.memoizedState === null) {
                var u = t.alternate;
                if (u !== null) {
                  var c = u.memoizedState;
                  if (c !== null) {
                    var f = c.dehydrated;
                    f !== null && Or(f);
                  }
                }
              }
              break;
            case 19:
            case 17:
            case 21:
            case 22:
            case 23:
            case 25:
              break;
            default:
              throw Error(C(163));
          }
        me || (t.flags & 512 && Va(t));
      } catch (d) {
        Z(t, t.return, d);
      }
    }
    if (t === e) {
      A = null;
      break;
    }
    if (((n = t.sibling), n !== null)) {
      ((n.return = t.return), (A = n));
      break;
    }
    A = t.return;
  }
}
function _c(e) {
  for (; A !== null; ) {
    var t = A;
    if (t === e) {
      A = null;
      break;
    }
    var n = t.sibling;
    if (n !== null) {
      ((n.return = t.return), (A = n));
      break;
    }
    A = t.return;
  }
}
function Ic(e) {
  for (; A !== null; ) {
    var t = A;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return;
          try {
            Ws(4, t);
          } catch (l) {
            Z(t, n, l);
          }
          break;
        case 1:
          var r = t.stateNode;
          if (typeof r.componentDidMount == "function") {
            var i = t.return;
            try {
              r.componentDidMount();
            } catch (l) {
              Z(t, i, l);
            }
          }
          var s = t.return;
          try {
            Va(t);
          } catch (l) {
            Z(t, s, l);
          }
          break;
        case 5:
          var o = t.return;
          try {
            Va(t);
          } catch (l) {
            Z(t, o, l);
          }
      }
    } catch (l) {
      Z(t, t.return, l);
    }
    if (t === e) {
      A = null;
      break;
    }
    var a = t.sibling;
    if (a !== null) {
      ((a.return = t.return), (A = a));
      break;
    }
    A = t.return;
  }
}
var v0 = Math.ceil,
  Ss = kt.ReactCurrentDispatcher,
  Gl = kt.ReactCurrentOwner,
  Ue = kt.ReactCurrentBatchConfig,
  F = 0,
  ae = null,
  te = null,
  fe = 0,
  Re = 0,
  Rn = Gt(0),
  se = 0,
  Qr = null,
  mn = 0,
  Hs = 0,
  Yl = 0,
  Mr = null,
  Pe = null,
  Ql = 0,
  Yn = 1 / 0,
  dt = null,
  ks = !1,
  Ia = null,
  Ot = null,
  ji = !1,
  Dt = null,
  Ts = 0,
  Nr = 0,
  Fa = null,
  Hi = -1,
  Ki = 0;
function Se() {
  return F & 6 ? q() : Hi !== -1 ? Hi : (Hi = q());
}
function zt(e) {
  return e.mode & 1
    ? F & 2 && fe !== 0
      ? fe & -fe
      : t0.transition !== null
        ? (Ki === 0 && (Ki = Wd()), Ki)
        : ((e = O),
          e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : Zd(e.type))),
          e)
    : 1;
}
function et(e, t, n, r) {
  if (50 < Nr) throw ((Nr = 0), (Fa = null), Error(C(185)));
  (ti(e, n, r),
    (!(F & 2) || e !== ae) &&
      (e === ae && (!(F & 2) && (Hs |= n), se === 4 && jt(e, fe)),
      je(e, r),
      n === 1 && F === 0 && !(t.mode & 1) && ((Yn = q() + 500), bs && Yt())));
}
function je(e, t) {
  var n = e.callbackNode;
  tg(e, t);
  var r = os(e, e === ae ? fe : 0);
  if (r === 0)
    (n !== null && Hu(n), (e.callbackNode = null), (e.callbackPriority = 0));
  else if (((t = r & -r), e.callbackPriority !== t)) {
    if ((n != null && Hu(n), t === 1))
      (e.tag === 0 ? e0(Fc.bind(null, e)) : yh(Fc.bind(null, e)),
        Xg(function () {
          !(F & 6) && Yt();
        }),
        (n = null));
    else {
      switch (Hd(r)) {
        case 1:
          n = Sl;
          break;
        case 4:
          n = Ud;
          break;
        case 16:
          n = ss;
          break;
        case 536870912:
          n = $d;
          break;
        default:
          n = ss;
      }
      n = pp(n, ap.bind(null, e));
    }
    ((e.callbackPriority = t), (e.callbackNode = n));
  }
}
function ap(e, t) {
  if (((Hi = -1), (Ki = 0), F & 6)) throw Error(C(327));
  var n = e.callbackNode;
  if (bn() && e.callbackNode !== n) return null;
  var r = os(e, e === ae ? fe : 0);
  if (r === 0) return null;
  if (r & 30 || r & e.expiredLanes || t) t = Cs(e, r);
  else {
    t = r;
    var i = F;
    F |= 2;
    var s = up();
    (ae !== e || fe !== t) && ((dt = null), (Yn = q() + 500), ln(e, t));
    do
      try {
        S0();
        break;
      } catch (a) {
        lp(e, a);
      }
    while (!0);
    (Ll(),
      (Ss.current = s),
      (F = i),
      te !== null ? (t = 0) : ((ae = null), (fe = 0), (t = se)));
  }
  if (t !== 0) {
    if (
      (t === 2 && ((i = ca(e)), i !== 0 && ((r = i), (t = Oa(e, i)))), t === 1)
    )
      throw ((n = Qr), ln(e, 0), jt(e, r), je(e, q()), n);
    if (t === 6) jt(e, r);
    else {
      if (
        ((i = e.current.alternate),
        !(r & 30) &&
          !x0(i) &&
          ((t = Cs(e, r)),
          t === 2 && ((s = ca(e)), s !== 0 && ((r = s), (t = Oa(e, s)))),
          t === 1))
      )
        throw ((n = Qr), ln(e, 0), jt(e, r), je(e, q()), n);
      switch (((e.finishedWork = i), (e.finishedLanes = r), t)) {
        case 0:
        case 1:
          throw Error(C(345));
        case 2:
          en(e, Pe, dt);
          break;
        case 3:
          if (
            (jt(e, r), (r & 130023424) === r && ((t = Ql + 500 - q()), 10 < t))
          ) {
            if (os(e, 0) !== 0) break;
            if (((i = e.suspendedLanes), (i & r) !== r)) {
              (Se(), (e.pingedLanes |= e.suspendedLanes & i));
              break;
            }
            e.timeoutHandle = va(en.bind(null, e, Pe, dt), t);
            break;
          }
          en(e, Pe, dt);
          break;
        case 4:
          if ((jt(e, r), (r & 4194240) === r)) break;
          for (t = e.eventTimes, i = -1; 0 < r; ) {
            var o = 31 - Je(r);
            ((s = 1 << o), (o = t[o]), o > i && (i = o), (r &= ~s));
          }
          if (
            ((r = i),
            (r = q() - r),
            (r =
              (120 > r
                ? 120
                : 480 > r
                  ? 480
                  : 1080 > r
                    ? 1080
                    : 1920 > r
                      ? 1920
                      : 3e3 > r
                        ? 3e3
                        : 4320 > r
                          ? 4320
                          : 1960 * v0(r / 1960)) - r),
            10 < r)
          ) {
            e.timeoutHandle = va(en.bind(null, e, Pe, dt), r);
            break;
          }
          en(e, Pe, dt);
          break;
        case 5:
          en(e, Pe, dt);
          break;
        default:
          throw Error(C(329));
      }
    }
  }
  return (je(e, q()), e.callbackNode === n ? ap.bind(null, e) : null);
}
function Oa(e, t) {
  var n = Mr;
  return (
    e.current.memoizedState.isDehydrated && (ln(e, t).flags |= 256),
    (e = Cs(e, t)),
    e !== 2 && ((t = Pe), (Pe = n), t !== null && za(t)),
    e
  );
}
function za(e) {
  Pe === null ? (Pe = e) : Pe.push.apply(Pe, e);
}
function x0(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var n = t.updateQueue;
      if (n !== null && ((n = n.stores), n !== null))
        for (var r = 0; r < n.length; r++) {
          var i = n[r],
            s = i.getSnapshot;
          i = i.value;
          try {
            if (!nt(s(), i)) return !1;
          } catch {
            return !1;
          }
        }
    }
    if (((n = t.child), t.subtreeFlags & 16384 && n !== null))
      ((n.return = t), (t = n));
    else {
      if (t === e) break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === e) return !0;
        t = t.return;
      }
      ((t.sibling.return = t.return), (t = t.sibling));
    }
  }
  return !0;
}
function jt(e, t) {
  for (
    t &= ~Yl,
      t &= ~Hs,
      e.suspendedLanes |= t,
      e.pingedLanes &= ~t,
      e = e.expirationTimes;
    0 < t;
  ) {
    var n = 31 - Je(t),
      r = 1 << n;
    ((e[n] = -1), (t &= ~r));
  }
}
function Fc(e) {
  if (F & 6) throw Error(C(327));
  bn();
  var t = os(e, 0);
  if (!(t & 1)) return (je(e, q()), null);
  var n = Cs(e, t);
  if (e.tag !== 0 && n === 2) {
    var r = ca(e);
    r !== 0 && ((t = r), (n = Oa(e, r)));
  }
  if (n === 1) throw ((n = Qr), ln(e, 0), jt(e, t), je(e, q()), n);
  if (n === 6) throw Error(C(345));
  return (
    (e.finishedWork = e.current.alternate),
    (e.finishedLanes = t),
    en(e, Pe, dt),
    je(e, q()),
    null
  );
}
function Xl(e, t) {
  var n = F;
  F |= 1;
  try {
    return e(t);
  } finally {
    ((F = n), F === 0 && ((Yn = q() + 500), bs && Yt()));
  }
}
function yn(e) {
  Dt !== null && Dt.tag === 0 && !(F & 6) && bn();
  var t = F;
  F |= 1;
  var n = Ue.transition,
    r = O;
  try {
    if (((Ue.transition = null), (O = 1), e)) return e();
  } finally {
    ((O = r), (Ue.transition = n), (F = t), !(F & 6) && Yt());
  }
}
function Zl() {
  ((Re = Rn.current), W(Rn));
}
function ln(e, t) {
  ((e.finishedWork = null), (e.finishedLanes = 0));
  var n = e.timeoutHandle;
  if ((n !== -1 && ((e.timeoutHandle = -1), Qg(n)), te !== null))
    for (n = te.return; n !== null; ) {
      var r = n;
      switch ((Dl(r), r.tag)) {
        case 1:
          ((r = r.type.childContextTypes), r != null && fs());
          break;
        case 3:
          (Kn(), W(Me), W(ye), Bl());
          break;
        case 5:
          zl(r);
          break;
        case 4:
          Kn();
          break;
        case 13:
          W(Y);
          break;
        case 19:
          W(Y);
          break;
        case 10:
          _l(r.type._context);
          break;
        case 22:
        case 23:
          Zl();
      }
      n = n.return;
    }
  if (
    ((ae = e),
    (te = e = Bt(e.current, null)),
    (fe = Re = t),
    (se = 0),
    (Qr = null),
    (Yl = Hs = mn = 0),
    (Pe = Mr = null),
    rn !== null)
  ) {
    for (t = 0; t < rn.length; t++)
      if (((n = rn[t]), (r = n.interleaved), r !== null)) {
        n.interleaved = null;
        var i = r.next,
          s = n.pending;
        if (s !== null) {
          var o = s.next;
          ((s.next = i), (r.next = o));
        }
        n.pending = r;
      }
    rn = null;
  }
  return e;
}
function lp(e, t) {
  do {
    var n = te;
    try {
      if ((Ll(), (Ui.current = ws), xs)) {
        for (var r = Q.memoizedState; r !== null; ) {
          var i = r.queue;
          (i !== null && (i.pending = null), (r = r.next));
        }
        xs = !1;
      }
      if (
        ((pn = 0),
        (oe = ie = Q = null),
        (Pr = !1),
        (Kr = 0),
        (Gl.current = null),
        n === null || n.return === null)
      ) {
        ((se = 1), (Qr = t), (te = null));
        break;
      }
      e: {
        var s = e,
          o = n.return,
          a = n,
          l = t;
        if (
          ((t = fe),
          (a.flags |= 32768),
          l !== null && typeof l == "object" && typeof l.then == "function")
        ) {
          var u = l,
            c = a,
            f = c.tag;
          if (!(c.mode & 1) && (f === 0 || f === 11 || f === 15)) {
            var d = c.alternate;
            d
              ? ((c.updateQueue = d.updateQueue),
                (c.memoizedState = d.memoizedState),
                (c.lanes = d.lanes))
              : ((c.updateQueue = null), (c.memoizedState = null));
          }
          var y = Cc(o);
          if (y !== null) {
            ((y.flags &= -257),
              Pc(y, o, a, s, t),
              y.mode & 1 && Tc(s, u, t),
              (t = y),
              (l = u));
            var v = t.updateQueue;
            if (v === null) {
              var w = new Set();
              (w.add(l), (t.updateQueue = w));
            } else v.add(l);
            break e;
          } else {
            if (!(t & 1)) {
              (Tc(s, u, t), ql());
              break e;
            }
            l = Error(C(426));
          }
        } else if (H && a.mode & 1) {
          var k = Cc(o);
          if (k !== null) {
            (!(k.flags & 65536) && (k.flags |= 256),
              Pc(k, o, a, s, t),
              Rl(Gn(l, a)));
            break e;
          }
        }
        ((s = l = Gn(l, a)),
          se !== 4 && (se = 2),
          Mr === null ? (Mr = [s]) : Mr.push(s),
          (s = o));
        do {
          switch (s.tag) {
            case 3:
              ((s.flags |= 65536), (t &= -t), (s.lanes |= t));
              var p = Hh(s, l, t);
              gc(s, p);
              break e;
            case 1:
              a = l;
              var h = s.type,
                m = s.stateNode;
              if (
                !(s.flags & 128) &&
                (typeof h.getDerivedStateFromError == "function" ||
                  (m !== null &&
                    typeof m.componentDidCatch == "function" &&
                    (Ot === null || !Ot.has(m))))
              ) {
                ((s.flags |= 65536), (t &= -t), (s.lanes |= t));
                var x = Kh(s, a, t);
                gc(s, x);
                break e;
              }
          }
          s = s.return;
        } while (s !== null);
      }
      fp(n);
    } catch (S) {
      ((t = S), te === n && n !== null && (te = n = n.return));
      continue;
    }
    break;
  } while (!0);
}
function up() {
  var e = Ss.current;
  return ((Ss.current = ws), e === null ? ws : e);
}
function ql() {
  ((se === 0 || se === 3 || se === 2) && (se = 4),
    ae === null || (!(mn & 268435455) && !(Hs & 268435455)) || jt(ae, fe));
}
function Cs(e, t) {
  var n = F;
  F |= 2;
  var r = up();
  (ae !== e || fe !== t) && ((dt = null), ln(e, t));
  do
    try {
      w0();
      break;
    } catch (i) {
      lp(e, i);
    }
  while (!0);
  if ((Ll(), (F = n), (Ss.current = r), te !== null)) throw Error(C(261));
  return ((ae = null), (fe = 0), se);
}
function w0() {
  for (; te !== null; ) cp(te);
}
function S0() {
  for (; te !== null && !Ky(); ) cp(te);
}
function cp(e) {
  var t = hp(e.alternate, e, Re);
  ((e.memoizedProps = e.pendingProps),
    t === null ? fp(e) : (te = t),
    (Gl.current = null));
}
function fp(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (((e = t.return), t.flags & 32768)) {
      if (((n = p0(n, t)), n !== null)) {
        ((n.flags &= 32767), (te = n));
        return;
      }
      if (e !== null)
        ((e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null));
      else {
        ((se = 6), (te = null));
        return;
      }
    } else if (((n = h0(n, t, Re)), n !== null)) {
      te = n;
      return;
    }
    if (((t = t.sibling), t !== null)) {
      te = t;
      return;
    }
    te = t = e;
  } while (t !== null);
  se === 0 && (se = 5);
}
function en(e, t, n) {
  var r = O,
    i = Ue.transition;
  try {
    ((Ue.transition = null), (O = 1), k0(e, t, n, r));
  } finally {
    ((Ue.transition = i), (O = r));
  }
  return null;
}
function k0(e, t, n, r) {
  do bn();
  while (Dt !== null);
  if (F & 6) throw Error(C(327));
  n = e.finishedWork;
  var i = e.finishedLanes;
  if (n === null) return null;
  if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current))
    throw Error(C(177));
  ((e.callbackNode = null), (e.callbackPriority = 0));
  var s = n.lanes | n.childLanes;
  if (
    (ng(e, s),
    e === ae && ((te = ae = null), (fe = 0)),
    (!(n.subtreeFlags & 2064) && !(n.flags & 2064)) ||
      ji ||
      ((ji = !0),
      pp(ss, function () {
        return (bn(), null);
      })),
    (s = (n.flags & 15990) !== 0),
    n.subtreeFlags & 15990 || s)
  ) {
    ((s = Ue.transition), (Ue.transition = null));
    var o = O;
    O = 1;
    var a = F;
    ((F |= 4),
      (Gl.current = null),
      y0(e, n),
      sp(n, e),
      Ug(ya),
      (as = !!ma),
      (ya = ma = null),
      (e.current = n),
      g0(n),
      Gy(),
      (F = a),
      (O = o),
      (Ue.transition = s));
  } else e.current = n;
  if (
    (ji && ((ji = !1), (Dt = e), (Ts = i)),
    (s = e.pendingLanes),
    s === 0 && (Ot = null),
    Xy(n.stateNode),
    je(e, q()),
    t !== null)
  )
    for (r = e.onRecoverableError, n = 0; n < t.length; n++)
      ((i = t[n]), r(i.value, { componentStack: i.stack, digest: i.digest }));
  if (ks) throw ((ks = !1), (e = Ia), (Ia = null), e);
  return (
    Ts & 1 && e.tag !== 0 && bn(),
    (s = e.pendingLanes),
    s & 1 ? (e === Fa ? Nr++ : ((Nr = 0), (Fa = e))) : (Nr = 0),
    Yt(),
    null
  );
}
function bn() {
  if (Dt !== null) {
    var e = Hd(Ts),
      t = Ue.transition,
      n = O;
    try {
      if (((Ue.transition = null), (O = 16 > e ? 16 : e), Dt === null))
        var r = !1;
      else {
        if (((e = Dt), (Dt = null), (Ts = 0), F & 6)) throw Error(C(331));
        var i = F;
        for (F |= 4, A = e.current; A !== null; ) {
          var s = A,
            o = s.child;
          if (A.flags & 16) {
            var a = s.deletions;
            if (a !== null) {
              for (var l = 0; l < a.length; l++) {
                var u = a[l];
                for (A = u; A !== null; ) {
                  var c = A;
                  switch (c.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Er(8, c, s);
                  }
                  var f = c.child;
                  if (f !== null) ((f.return = c), (A = f));
                  else
                    for (; A !== null; ) {
                      c = A;
                      var d = c.sibling,
                        y = c.return;
                      if ((np(c), c === u)) {
                        A = null;
                        break;
                      }
                      if (d !== null) {
                        ((d.return = y), (A = d));
                        break;
                      }
                      A = y;
                    }
                }
              }
              var v = s.alternate;
              if (v !== null) {
                var w = v.child;
                if (w !== null) {
                  v.child = null;
                  do {
                    var k = w.sibling;
                    ((w.sibling = null), (w = k));
                  } while (w !== null);
                }
              }
              A = s;
            }
          }
          if (s.subtreeFlags & 2064 && o !== null) ((o.return = s), (A = o));
          else
            e: for (; A !== null; ) {
              if (((s = A), s.flags & 2048))
                switch (s.tag) {
                  case 0:
                  case 11:
                  case 15:
                    Er(9, s, s.return);
                }
              var p = s.sibling;
              if (p !== null) {
                ((p.return = s.return), (A = p));
                break e;
              }
              A = s.return;
            }
        }
        var h = e.current;
        for (A = h; A !== null; ) {
          o = A;
          var m = o.child;
          if (o.subtreeFlags & 2064 && m !== null) ((m.return = o), (A = m));
          else
            e: for (o = h; A !== null; ) {
              if (((a = A), a.flags & 2048))
                try {
                  switch (a.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Ws(9, a);
                  }
                } catch (S) {
                  Z(a, a.return, S);
                }
              if (a === o) {
                A = null;
                break e;
              }
              var x = a.sibling;
              if (x !== null) {
                ((x.return = a.return), (A = x));
                break e;
              }
              A = a.return;
            }
        }
        if (
          ((F = i), Yt(), lt && typeof lt.onPostCommitFiberRoot == "function")
        )
          try {
            lt.onPostCommitFiberRoot(Is, e);
          } catch {}
        r = !0;
      }
      return r;
    } finally {
      ((O = n), (Ue.transition = t));
    }
  }
  return !1;
}
function Oc(e, t, n) {
  ((t = Gn(n, t)),
    (t = Hh(e, t, 1)),
    (e = Ft(e, t, 1)),
    (t = Se()),
    e !== null && (ti(e, 1, t), je(e, t)));
}
function Z(e, t, n) {
  if (e.tag === 3) Oc(e, e, n);
  else
    for (; t !== null; ) {
      if (t.tag === 3) {
        Oc(t, e, n);
        break;
      } else if (t.tag === 1) {
        var r = t.stateNode;
        if (
          typeof t.type.getDerivedStateFromError == "function" ||
          (typeof r.componentDidCatch == "function" &&
            (Ot === null || !Ot.has(r)))
        ) {
          ((e = Gn(n, e)),
            (e = Kh(t, e, 1)),
            (t = Ft(t, e, 1)),
            (e = Se()),
            t !== null && (ti(t, 1, e), je(t, e)));
          break;
        }
      }
      t = t.return;
    }
}
function T0(e, t, n) {
  var r = e.pingCache;
  (r !== null && r.delete(t),
    (t = Se()),
    (e.pingedLanes |= e.suspendedLanes & n),
    ae === e &&
      (fe & n) === n &&
      (se === 4 || (se === 3 && (fe & 130023424) === fe && 500 > q() - Ql)
        ? ln(e, 0)
        : (Yl |= n)),
    je(e, t));
}
function dp(e, t) {
  t === 0 &&
    (e.mode & 1
      ? ((t = xi), (xi <<= 1), !(xi & 130023424) && (xi = 4194304))
      : (t = 1));
  var n = Se();
  ((e = wt(e, t)), e !== null && (ti(e, t, n), je(e, n)));
}
function C0(e) {
  var t = e.memoizedState,
    n = 0;
  (t !== null && (n = t.retryLane), dp(e, n));
}
function P0(e, t) {
  var n = 0;
  switch (e.tag) {
    case 13:
      var r = e.stateNode,
        i = e.memoizedState;
      i !== null && (n = i.retryLane);
      break;
    case 19:
      r = e.stateNode;
      break;
    default:
      throw Error(C(314));
  }
  (r !== null && r.delete(t), dp(e, n));
}
var hp;
hp = function (e, t, n) {
  if (e !== null)
    if (e.memoizedProps !== t.pendingProps || Me.current) Ee = !0;
    else {
      if (!(e.lanes & n) && !(t.flags & 128)) return ((Ee = !1), d0(e, t, n));
      Ee = !!(e.flags & 131072);
    }
  else ((Ee = !1), H && t.flags & 1048576 && gh(t, ps, t.index));
  switch (((t.lanes = 0), t.tag)) {
    case 2:
      var r = t.type;
      (Wi(e, t), (e = t.pendingProps));
      var i = $n(t, ye.current);
      (Bn(t, n), (i = Ul(null, t, r, e, i, n)));
      var s = $l();
      return (
        (t.flags |= 1),
        typeof i == "object" &&
        i !== null &&
        typeof i.render == "function" &&
        i.$$typeof === void 0
          ? ((t.tag = 1),
            (t.memoizedState = null),
            (t.updateQueue = null),
            Ne(r) ? ((s = !0), ds(t)) : (s = !1),
            (t.memoizedState =
              i.state !== null && i.state !== void 0 ? i.state : null),
            Fl(t),
            (i.updater = $s),
            (t.stateNode = i),
            (i._reactInternals = t),
            Pa(t, r, e, n),
            (t = Na(null, t, r, !0, s, n)))
          : ((t.tag = 0), H && s && Al(t), ve(null, t, i, n), (t = t.child)),
        t
      );
    case 16:
      r = t.elementType;
      e: {
        switch (
          (Wi(e, t),
          (e = t.pendingProps),
          (i = r._init),
          (r = i(r._payload)),
          (t.type = r),
          (i = t.tag = M0(r)),
          (e = Xe(r, e)),
          i)
        ) {
          case 0:
            t = Ma(null, t, r, e, n);
            break e;
          case 1:
            t = Nc(null, t, r, e, n);
            break e;
          case 11:
            t = Ec(null, t, r, e, n);
            break e;
          case 14:
            t = Mc(null, t, r, Xe(r.type, e), n);
            break e;
        }
        throw Error(C(306, r, ""));
      }
      return t;
    case 0:
      return (
        (r = t.type),
        (i = t.pendingProps),
        (i = t.elementType === r ? i : Xe(r, i)),
        Ma(e, t, r, i, n)
      );
    case 1:
      return (
        (r = t.type),
        (i = t.pendingProps),
        (i = t.elementType === r ? i : Xe(r, i)),
        Nc(e, t, r, i, n)
      );
    case 3:
      e: {
        if ((Xh(t), e === null)) throw Error(C(387));
        ((r = t.pendingProps),
          (s = t.memoizedState),
          (i = s.element),
          Th(e, t),
          gs(t, r, null, n));
        var o = t.memoizedState;
        if (((r = o.element), s.isDehydrated))
          if (
            ((s = {
              element: r,
              isDehydrated: !1,
              cache: o.cache,
              pendingSuspenseBoundaries: o.pendingSuspenseBoundaries,
              transitions: o.transitions,
            }),
            (t.updateQueue.baseState = s),
            (t.memoizedState = s),
            t.flags & 256)
          ) {
            ((i = Gn(Error(C(423)), t)), (t = jc(e, t, r, n, i)));
            break e;
          } else if (r !== i) {
            ((i = Gn(Error(C(424)), t)), (t = jc(e, t, r, n, i)));
            break e;
          } else
            for (
              Ve = It(t.stateNode.containerInfo.firstChild),
                Le = t,
                H = !0,
                qe = null,
                n = Sh(t, null, r, n),
                t.child = n;
              n;
            )
              ((n.flags = (n.flags & -3) | 4096), (n = n.sibling));
        else {
          if ((Wn(), r === i)) {
            t = St(e, t, n);
            break e;
          }
          ve(e, t, r, n);
        }
        t = t.child;
      }
      return t;
    case 5:
      return (
        Ch(t),
        e === null && ka(t),
        (r = t.type),
        (i = t.pendingProps),
        (s = e !== null ? e.memoizedProps : null),
        (o = i.children),
        ga(r, i) ? (o = null) : s !== null && ga(r, s) && (t.flags |= 32),
        Qh(e, t),
        ve(e, t, o, n),
        t.child
      );
    case 6:
      return (e === null && ka(t), null);
    case 13:
      return Zh(e, t, n);
    case 4:
      return (
        Ol(t, t.stateNode.containerInfo),
        (r = t.pendingProps),
        e === null ? (t.child = Hn(t, null, r, n)) : ve(e, t, r, n),
        t.child
      );
    case 11:
      return (
        (r = t.type),
        (i = t.pendingProps),
        (i = t.elementType === r ? i : Xe(r, i)),
        Ec(e, t, r, i, n)
      );
    case 7:
      return (ve(e, t, t.pendingProps, n), t.child);
    case 8:
      return (ve(e, t, t.pendingProps.children, n), t.child);
    case 12:
      return (ve(e, t, t.pendingProps.children, n), t.child);
    case 10:
      e: {
        if (
          ((r = t.type._context),
          (i = t.pendingProps),
          (s = t.memoizedProps),
          (o = i.value),
          b(ms, r._currentValue),
          (r._currentValue = o),
          s !== null)
        )
          if (nt(s.value, o)) {
            if (s.children === i.children && !Me.current) {
              t = St(e, t, n);
              break e;
            }
          } else
            for (s = t.child, s !== null && (s.return = t); s !== null; ) {
              var a = s.dependencies;
              if (a !== null) {
                o = s.child;
                for (var l = a.firstContext; l !== null; ) {
                  if (l.context === r) {
                    if (s.tag === 1) {
                      ((l = gt(-1, n & -n)), (l.tag = 2));
                      var u = s.updateQueue;
                      if (u !== null) {
                        u = u.shared;
                        var c = u.pending;
                        (c === null
                          ? (l.next = l)
                          : ((l.next = c.next), (c.next = l)),
                          (u.pending = l));
                      }
                    }
                    ((s.lanes |= n),
                      (l = s.alternate),
                      l !== null && (l.lanes |= n),
                      Ta(s.return, n, t),
                      (a.lanes |= n));
                    break;
                  }
                  l = l.next;
                }
              } else if (s.tag === 10) o = s.type === t.type ? null : s.child;
              else if (s.tag === 18) {
                if (((o = s.return), o === null)) throw Error(C(341));
                ((o.lanes |= n),
                  (a = o.alternate),
                  a !== null && (a.lanes |= n),
                  Ta(o, n, t),
                  (o = s.sibling));
              } else o = s.child;
              if (o !== null) o.return = s;
              else
                for (o = s; o !== null; ) {
                  if (o === t) {
                    o = null;
                    break;
                  }
                  if (((s = o.sibling), s !== null)) {
                    ((s.return = o.return), (o = s));
                    break;
                  }
                  o = o.return;
                }
              s = o;
            }
        (ve(e, t, i.children, n), (t = t.child));
      }
      return t;
    case 9:
      return (
        (i = t.type),
        (r = t.pendingProps.children),
        Bn(t, n),
        (i = We(i)),
        (r = r(i)),
        (t.flags |= 1),
        ve(e, t, r, n),
        t.child
      );
    case 14:
      return (
        (r = t.type),
        (i = Xe(r, t.pendingProps)),
        (i = Xe(r.type, i)),
        Mc(e, t, r, i, n)
      );
    case 15:
      return Gh(e, t, t.type, t.pendingProps, n);
    case 17:
      return (
        (r = t.type),
        (i = t.pendingProps),
        (i = t.elementType === r ? i : Xe(r, i)),
        Wi(e, t),
        (t.tag = 1),
        Ne(r) ? ((e = !0), ds(t)) : (e = !1),
        Bn(t, n),
        Wh(t, r, i),
        Pa(t, r, i, n),
        Na(null, t, r, !0, e, n)
      );
    case 19:
      return qh(e, t, n);
    case 22:
      return Yh(e, t, n);
  }
  throw Error(C(156, t.tag));
};
function pp(e, t) {
  return bd(e, t);
}
function E0(e, t, n, r) {
  ((this.tag = e),
    (this.key = n),
    (this.sibling =
      this.child =
      this.return =
      this.stateNode =
      this.type =
      this.elementType =
        null),
    (this.index = 0),
    (this.ref = null),
    (this.pendingProps = t),
    (this.dependencies =
      this.memoizedState =
      this.updateQueue =
      this.memoizedProps =
        null),
    (this.mode = r),
    (this.subtreeFlags = this.flags = 0),
    (this.deletions = null),
    (this.childLanes = this.lanes = 0),
    (this.alternate = null));
}
function Be(e, t, n, r) {
  return new E0(e, t, n, r);
}
function Jl(e) {
  return ((e = e.prototype), !(!e || !e.isReactComponent));
}
function M0(e) {
  if (typeof e == "function") return Jl(e) ? 1 : 0;
  if (e != null) {
    if (((e = e.$$typeof), e === vl)) return 11;
    if (e === xl) return 14;
  }
  return 2;
}
function Bt(e, t) {
  var n = e.alternate;
  return (
    n === null
      ? ((n = Be(e.tag, t, e.key, e.mode)),
        (n.elementType = e.elementType),
        (n.type = e.type),
        (n.stateNode = e.stateNode),
        (n.alternate = e),
        (e.alternate = n))
      : ((n.pendingProps = t),
        (n.type = e.type),
        (n.flags = 0),
        (n.subtreeFlags = 0),
        (n.deletions = null)),
    (n.flags = e.flags & 14680064),
    (n.childLanes = e.childLanes),
    (n.lanes = e.lanes),
    (n.child = e.child),
    (n.memoizedProps = e.memoizedProps),
    (n.memoizedState = e.memoizedState),
    (n.updateQueue = e.updateQueue),
    (t = e.dependencies),
    (n.dependencies =
      t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }),
    (n.sibling = e.sibling),
    (n.index = e.index),
    (n.ref = e.ref),
    n
  );
}
function Gi(e, t, n, r, i, s) {
  var o = 2;
  if (((r = e), typeof e == "function")) Jl(e) && (o = 1);
  else if (typeof e == "string") o = 5;
  else
    e: switch (e) {
      case kn:
        return un(n.children, i, s, t);
      case gl:
        ((o = 8), (i |= 8));
        break;
      case Qo:
        return (
          (e = Be(12, n, t, i | 2)),
          (e.elementType = Qo),
          (e.lanes = s),
          e
        );
      case Xo:
        return ((e = Be(13, n, t, i)), (e.elementType = Xo), (e.lanes = s), e);
      case Zo:
        return ((e = Be(19, n, t, i)), (e.elementType = Zo), (e.lanes = s), e);
      case Cd:
        return Ks(n, i, s, t);
      default:
        if (typeof e == "object" && e !== null)
          switch (e.$$typeof) {
            case kd:
              o = 10;
              break e;
            case Td:
              o = 9;
              break e;
            case vl:
              o = 11;
              break e;
            case xl:
              o = 14;
              break e;
            case Et:
              ((o = 16), (r = null));
              break e;
          }
        throw Error(C(130, e == null ? e : typeof e, ""));
    }
  return (
    (t = Be(o, n, t, i)),
    (t.elementType = e),
    (t.type = r),
    (t.lanes = s),
    t
  );
}
function un(e, t, n, r) {
  return ((e = Be(7, e, r, t)), (e.lanes = n), e);
}
function Ks(e, t, n, r) {
  return (
    (e = Be(22, e, r, t)),
    (e.elementType = Cd),
    (e.lanes = n),
    (e.stateNode = { isHidden: !1 }),
    e
  );
}
function jo(e, t, n) {
  return ((e = Be(6, e, null, t)), (e.lanes = n), e);
}
function Ao(e, t, n) {
  return (
    (t = Be(4, e.children !== null ? e.children : [], e.key, t)),
    (t.lanes = n),
    (t.stateNode = {
      containerInfo: e.containerInfo,
      pendingChildren: null,
      implementation: e.implementation,
    }),
    t
  );
}
function N0(e, t, n, r, i) {
  ((this.tag = t),
    (this.containerInfo = e),
    (this.finishedWork =
      this.pingCache =
      this.current =
      this.pendingChildren =
        null),
    (this.timeoutHandle = -1),
    (this.callbackNode = this.pendingContext = this.context = null),
    (this.callbackPriority = 0),
    (this.eventTimes = uo(0)),
    (this.expirationTimes = uo(-1)),
    (this.entangledLanes =
      this.finishedLanes =
      this.mutableReadLanes =
      this.expiredLanes =
      this.pingedLanes =
      this.suspendedLanes =
      this.pendingLanes =
        0),
    (this.entanglements = uo(0)),
    (this.identifierPrefix = r),
    (this.onRecoverableError = i),
    (this.mutableSourceEagerHydrationData = null));
}
function eu(e, t, n, r, i, s, o, a, l) {
  return (
    (e = new N0(e, t, n, a, l)),
    t === 1 ? ((t = 1), s === !0 && (t |= 8)) : (t = 0),
    (s = Be(3, null, null, t)),
    (e.current = s),
    (s.stateNode = e),
    (s.memoizedState = {
      element: r,
      isDehydrated: n,
      cache: null,
      transitions: null,
      pendingSuspenseBoundaries: null,
    }),
    Fl(s),
    e
  );
}
function j0(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return {
    $$typeof: Sn,
    key: r == null ? null : "" + r,
    children: e,
    containerInfo: t,
    implementation: n,
  };
}
function mp(e) {
  if (!e) return $t;
  e = e._reactInternals;
  e: {
    if (vn(e) !== e || e.tag !== 1) throw Error(C(170));
    var t = e;
    do {
      switch (t.tag) {
        case 3:
          t = t.stateNode.context;
          break e;
        case 1:
          if (Ne(t.type)) {
            t = t.stateNode.__reactInternalMemoizedMergedChildContext;
            break e;
          }
      }
      t = t.return;
    } while (t !== null);
    throw Error(C(171));
  }
  if (e.tag === 1) {
    var n = e.type;
    if (Ne(n)) return mh(e, n, t);
  }
  return t;
}
function yp(e, t, n, r, i, s, o, a, l) {
  return (
    (e = eu(n, r, !0, e, i, s, o, a, l)),
    (e.context = mp(null)),
    (n = e.current),
    (r = Se()),
    (i = zt(n)),
    (s = gt(r, i)),
    (s.callback = t ?? null),
    Ft(n, s, i),
    (e.current.lanes = i),
    ti(e, i, r),
    je(e, r),
    e
  );
}
function Gs(e, t, n, r) {
  var i = t.current,
    s = Se(),
    o = zt(i);
  return (
    (n = mp(n)),
    t.context === null ? (t.context = n) : (t.pendingContext = n),
    (t = gt(s, o)),
    (t.payload = { element: e }),
    (r = r === void 0 ? null : r),
    r !== null && (t.callback = r),
    (e = Ft(i, t, o)),
    e !== null && (et(e, i, o, s), bi(e, i, o)),
    o
  );
}
function Ps(e) {
  if (((e = e.current), !e.child)) return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function zc(e, t) {
  if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
  }
}
function tu(e, t) {
  (zc(e, t), (e = e.alternate) && zc(e, t));
}
function A0() {
  return null;
}
var gp =
  typeof reportError == "function"
    ? reportError
    : function (e) {
        console.error(e);
      };
function nu(e) {
  this._internalRoot = e;
}
Ys.prototype.render = nu.prototype.render = function (e) {
  var t = this._internalRoot;
  if (t === null) throw Error(C(409));
  Gs(e, t, null, null);
};
Ys.prototype.unmount = nu.prototype.unmount = function () {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    (yn(function () {
      Gs(null, e, null, null);
    }),
      (t[xt] = null));
  }
};
function Ys(e) {
  this._internalRoot = e;
}
Ys.prototype.unstable_scheduleHydration = function (e) {
  if (e) {
    var t = Yd();
    e = { blockedOn: null, target: e, priority: t };
    for (var n = 0; n < Nt.length && t !== 0 && t < Nt[n].priority; n++);
    (Nt.splice(n, 0, e), n === 0 && Xd(e));
  }
};
function ru(e) {
  return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
}
function Qs(e) {
  return !(
    !e ||
    (e.nodeType !== 1 &&
      e.nodeType !== 9 &&
      e.nodeType !== 11 &&
      (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
  );
}
function Bc() {}
function D0(e, t, n, r, i) {
  if (i) {
    if (typeof r == "function") {
      var s = r;
      r = function () {
        var u = Ps(o);
        s.call(u);
      };
    }
    var o = yp(t, r, e, 0, null, !1, !1, "", Bc);
    return (
      (e._reactRootContainer = o),
      (e[xt] = o.current),
      br(e.nodeType === 8 ? e.parentNode : e),
      yn(),
      o
    );
  }
  for (; (i = e.lastChild); ) e.removeChild(i);
  if (typeof r == "function") {
    var a = r;
    r = function () {
      var u = Ps(l);
      a.call(u);
    };
  }
  var l = eu(e, 0, !1, null, null, !1, !1, "", Bc);
  return (
    (e._reactRootContainer = l),
    (e[xt] = l.current),
    br(e.nodeType === 8 ? e.parentNode : e),
    yn(function () {
      Gs(t, l, n, r);
    }),
    l
  );
}
function Xs(e, t, n, r, i) {
  var s = n._reactRootContainer;
  if (s) {
    var o = s;
    if (typeof i == "function") {
      var a = i;
      i = function () {
        var l = Ps(o);
        a.call(l);
      };
    }
    Gs(t, o, e, i);
  } else o = D0(n, t, e, i, r);
  return Ps(o);
}
Kd = function (e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = gr(t.pendingLanes);
        n !== 0 &&
          (kl(t, n | 1), je(t, q()), !(F & 6) && ((Yn = q() + 500), Yt()));
      }
      break;
    case 13:
      (yn(function () {
        var r = wt(e, 1);
        if (r !== null) {
          var i = Se();
          et(r, e, 1, i);
        }
      }),
        tu(e, 1));
  }
};
Tl = function (e) {
  if (e.tag === 13) {
    var t = wt(e, 134217728);
    if (t !== null) {
      var n = Se();
      et(t, e, 134217728, n);
    }
    tu(e, 134217728);
  }
};
Gd = function (e) {
  if (e.tag === 13) {
    var t = zt(e),
      n = wt(e, t);
    if (n !== null) {
      var r = Se();
      et(n, e, t, r);
    }
    tu(e, t);
  }
};
Yd = function () {
  return O;
};
Qd = function (e, t) {
  var n = O;
  try {
    return ((O = e), t());
  } finally {
    O = n;
  }
};
aa = function (e, t, n) {
  switch (t) {
    case "input":
      if ((ea(e, n), (t = n.name), n.type === "radio" && t != null)) {
        for (n = e; n.parentNode; ) n = n.parentNode;
        for (
          n = n.querySelectorAll(
            "input[name=" + JSON.stringify("" + t) + '][type="radio"]',
          ),
            t = 0;
          t < n.length;
          t++
        ) {
          var r = n[t];
          if (r !== e && r.form === e.form) {
            var i = Bs(r);
            if (!i) throw Error(C(90));
            (Ed(r), ea(r, i));
          }
        }
      }
      break;
    case "textarea":
      Nd(e, n);
      break;
    case "select":
      ((t = n.value), t != null && In(e, !!n.multiple, t, !1));
  }
};
_d = Xl;
Id = yn;
var R0 = { usingClientEntryPoint: !1, Events: [ri, En, Bs, Vd, Ld, Xl] },
  dr = {
    findFiberByHostInstance: nn,
    bundleType: 0,
    version: "18.3.1",
    rendererPackageName: "react-dom",
  },
  V0 = {
    bundleType: dr.bundleType,
    version: dr.version,
    rendererPackageName: dr.rendererPackageName,
    rendererConfig: dr.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setErrorHandler: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: kt.ReactCurrentDispatcher,
    findHostInstanceByFiber: function (e) {
      return ((e = zd(e)), e === null ? null : e.stateNode);
    },
    findFiberByHostInstance: dr.findFiberByHostInstance || A0,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: "18.3.1-next-f1338f8080-20240426",
  };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var Ai = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!Ai.isDisabled && Ai.supportsFiber)
    try {
      ((Is = Ai.inject(V0)), (lt = Ai));
    } catch {}
}
Ie.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = R0;
Ie.createPortal = function (e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!ru(t)) throw Error(C(200));
  return j0(e, t, null, n);
};
Ie.createRoot = function (e, t) {
  if (!ru(e)) throw Error(C(299));
  var n = !1,
    r = "",
    i = gp;
  return (
    t != null &&
      (t.unstable_strictMode === !0 && (n = !0),
      t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
      t.onRecoverableError !== void 0 && (i = t.onRecoverableError)),
    (t = eu(e, 1, !1, null, null, n, !1, r, i)),
    (e[xt] = t.current),
    br(e.nodeType === 8 ? e.parentNode : e),
    new nu(t)
  );
};
Ie.findDOMNode = function (e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == "function"
      ? Error(C(188))
      : ((e = Object.keys(e).join(",")), Error(C(268, e)));
  return ((e = zd(t)), (e = e === null ? null : e.stateNode), e);
};
Ie.flushSync = function (e) {
  return yn(e);
};
Ie.hydrate = function (e, t, n) {
  if (!Qs(t)) throw Error(C(200));
  return Xs(null, e, t, !0, n);
};
Ie.hydrateRoot = function (e, t, n) {
  if (!ru(e)) throw Error(C(405));
  var r = (n != null && n.hydratedSources) || null,
    i = !1,
    s = "",
    o = gp;
  if (
    (n != null &&
      (n.unstable_strictMode === !0 && (i = !0),
      n.identifierPrefix !== void 0 && (s = n.identifierPrefix),
      n.onRecoverableError !== void 0 && (o = n.onRecoverableError)),
    (t = yp(t, null, e, 1, n ?? null, i, !1, s, o)),
    (e[xt] = t.current),
    br(e),
    r)
  )
    for (e = 0; e < r.length; e++)
      ((n = r[e]),
        (i = n._getVersion),
        (i = i(n._source)),
        t.mutableSourceEagerHydrationData == null
          ? (t.mutableSourceEagerHydrationData = [n, i])
          : t.mutableSourceEagerHydrationData.push(n, i));
  return new Ys(t);
};
Ie.render = function (e, t, n) {
  if (!Qs(t)) throw Error(C(200));
  return Xs(null, e, t, !1, n);
};
Ie.unmountComponentAtNode = function (e) {
  if (!Qs(e)) throw Error(C(40));
  return e._reactRootContainer
    ? (yn(function () {
        Xs(null, null, e, !1, function () {
          ((e._reactRootContainer = null), (e[xt] = null));
        });
      }),
      !0)
    : !1;
};
Ie.unstable_batchedUpdates = Xl;
Ie.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
  if (!Qs(n)) throw Error(C(200));
  if (e == null || e._reactInternals === void 0) throw Error(C(38));
  return Xs(e, t, n, !1, r);
};
Ie.version = "18.3.1-next-f1338f8080-20240426";
function vp() {
  if (
    !(
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
    )
  )
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(vp);
    } catch (e) {
      console.error(e);
    }
}
(vp(), (vd.exports = Ie));
var L0 = vd.exports,
  xp,
  bc = L0;
((xp = bc.createRoot), bc.hydrateRoot);
const _0 = [
    { id: "home", label: "Home", href: "#home" },
    { id: "guide", label: "Guide", href: "#guide" },
    { id: "why-us", label: "Why Us", href: "#benefits" },
    { id: "reviews", label: "Reviews", href: "#why-us" },
    { id: "faq", label: "FAQ", href: "#faq" },
  ],
  I0 = [
    {
      icon: "Mail",
      title: "Full email access",
      description:
        "Complete control with full email access or use your own private email.",
    },
    {
      icon: "Zap",
      title: "Instant delivery",
      description:
        "Receive your verified account within a couple of hours after starting the bot.",
    },
    {
      icon: "Shield",
      title: "Safe, fast and verified",
      description:
        "All accounts are 100% fresh, verified, unused, and assigned to a single player only.",
    },
    {
      icon: "Percent",
      title: "Rakeback enabled",
      description:
        "We are partnered with Stake, which allows us to provide you with an account that is not only fully verified but also comes with rakeback enabled right from the start.",
    },
  ],
  F0 = [
    {
      step: 1,
      title: "Message Telegram Bot",
      description:
        "Click below to claim your free verified Stake account instantly.",
      icon: "MousePointer",
    },
    {
      step: 2,
      title: "Start & Request Account",
      description: "Hit /start in the bot and follow the steps.",
      icon: "MessageSquare",
    },
    {
      step: 3,
      title: "Quick Private Support",
      description: "An admin will message you within 1–3 hours privately.",
      icon: "UserCheck",
    },
    {
      step: 4,
      title: "Receive Your Account",
      description:
        "Get your verified Stake account with full access and full email access.",
      icon: "TrendingUp",
    },
  ],
  O0 = [
    {
      question: "Is the account really free?",
      answer:
        "Yes, completely free. There are no charges and we will never ask you for money or crypto. The accounts are provided at no cost through our Telegram bot.",
    },
    {
      question: "Does it work with Stake.us?",
      answer:
        "Yes, our accounts work in any region. Even if you are from a restricted area, you can always use a VPN to play on Stake. Most of our players are from restricted areas and have never had any issues so far. Just make sure to use a trusted VPN.",
    },
    {
      question: "Do I need crypto to play?",
      answer:
        "Yes, on Stake.com you need crypto to play. If you don't own any crypto or don't know how to buy it, just search it up on YouTube, it's very simple and there are dozens of tutorials available.",
    },
    {
      question: "Do I need a VPN?",
      answer:
        "If you are from a non-restricted area, you will have no problem opening the Stake.com website. If you are from a restricted area, you will get a popup when opening Stake saying that Stake is not available in your country. If that happens, you can simply use a VPN to bypass this, which is completely fine and allowed by Stake.",
    },
    {
      question: "Can I change the password?",
      answer:
        "Yes, you will get full Stake account and email account access, so you can change both the email and Stake account passwords.",
    },
    {
      question: "Can I have more than one account?",
      answer:
        "If you for some reason need more than one account, for example for your friend, we can always discuss it in our private DM created by our Telegram bot. Feel free to share your request with us and we will do our best to fulfill it.",
    },
  ],
  z0 = (e) => {
    const t = document.getElementById(e);
    t && t.scrollIntoView({ behavior: "smooth", block: "start" });
  },
  B0 = () => {
    const [e, t] = bt.useState(!1);
    bt.useEffect(() => {
      const r = () => {
        t(window.scrollY > 50);
      };
      return (
        window.addEventListener("scroll", r),
        () => window.removeEventListener("scroll", r)
      );
    }, []);
    const n = (r) => {
      const i = r.substring(1);
      z0(i);
    };
    return g.jsx("nav", {
      className: `fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${e ? "bg-dark-900/90 backdrop-blur-xl shadow-lg shadow-brand-500/5" : "bg-transparent"}`,
      children: g.jsx("div", {
        className: "max-w-6xl mx-auto px-4 sm:px-6",
        children: g.jsx("div", {
          className: "hidden md:flex justify-center pt-5 pb-3",
          children: g.jsx("div", {
            className:
              "flex items-center gap-1 glass-nav rounded-full px-8 py-2.5",
            children: _0.map((r) =>
              g.jsx(
                "button",
                {
                  onClick: () => n(r.href),
                  className:
                    "px-4 py-1.5 text-white hover:text-brand-400 transition-colors duration-300 font-medium text-xs uppercase tracking-[0.15em] rounded-full hover:bg-white/[0.04]",
                  children: r.label,
                },
                r.id,
              ),
            ),
          }),
        }),
      }),
    });
  },
  iu = j.createContext({});
function su(e) {
  const t = j.useRef(null);
  return (t.current === null && (t.current = e()), t.current);
}
const b0 = typeof window < "u",
  wp = b0 ? j.useLayoutEffect : j.useEffect,
  Zs = j.createContext(null);
function ou(e, t) {
  e.indexOf(t) === -1 && e.push(t);
}
function Es(e, t) {
  const n = e.indexOf(t);
  n > -1 && e.splice(n, 1);
}
const ft = (e, t, n) => (n > t ? t : n < e ? e : n);
let qs = () => {},
  Qn = () => {};
const Wt = {},
  Sp = (e) => /^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(e);
function kp(e) {
  return typeof e == "object" && e !== null;
}
const Tp = (e) => /^0[^.\s]+$/u.test(e);
function Cp(e) {
  let t;
  return () => (t === void 0 && (t = e()), t);
}
const $e = (e) => e,
  U0 = (e, t) => (n) => t(e(n)),
  si = (...e) => e.reduce(U0),
  Xr = (e, t, n) => {
    const r = t - e;
    return r === 0 ? 1 : (n - e) / r;
  };
class au {
  constructor() {
    this.subscriptions = [];
  }
  add(t) {
    return (ou(this.subscriptions, t), () => Es(this.subscriptions, t));
  }
  notify(t, n, r) {
    const i = this.subscriptions.length;
    if (i)
      if (i === 1) this.subscriptions[0](t, n, r);
      else
        for (let s = 0; s < i; s++) {
          const o = this.subscriptions[s];
          o && o(t, n, r);
        }
  }
  getSize() {
    return this.subscriptions.length;
  }
  clear() {
    this.subscriptions.length = 0;
  }
}
const Ae = (e) => e * 1e3,
  be = (e) => e / 1e3;
function Pp(e, t) {
  return t ? e * (1e3 / t) : 0;
}
const Ep = (e, t, n) =>
    (((1 - 3 * n + 3 * t) * e + (3 * n - 6 * t)) * e + 3 * t) * e,
  $0 = 1e-7,
  W0 = 12;
function H0(e, t, n, r, i) {
  let s,
    o,
    a = 0;
  do ((o = t + (n - t) / 2), (s = Ep(o, r, i) - e), s > 0 ? (n = o) : (t = o));
  while (Math.abs(s) > $0 && ++a < W0);
  return o;
}
function oi(e, t, n, r) {
  if (e === t && n === r) return $e;
  const i = (s) => H0(s, 0, 1, e, n);
  return (s) => (s === 0 || s === 1 ? s : Ep(i(s), t, r));
}
const Mp = (e) => (t) => (t <= 0.5 ? e(2 * t) / 2 : (2 - e(2 * (1 - t))) / 2),
  Np = (e) => (t) => 1 - e(1 - t),
  jp = oi(0.33, 1.53, 0.69, 0.99),
  lu = Np(jp),
  Ap = Mp(lu),
  Dp = (e) =>
    e >= 1
      ? 1
      : (e *= 2) < 1
        ? 0.5 * lu(e)
        : 0.5 * (2 - Math.pow(2, -10 * (e - 1))),
  uu = (e) => 1 - Math.sin(Math.acos(e)),
  Rp = Np(uu),
  Vp = Mp(uu),
  K0 = oi(0.42, 0, 1, 1),
  G0 = oi(0, 0, 0.58, 1),
  Lp = oi(0.42, 0, 0.58, 1),
  Y0 = (e) => Array.isArray(e) && typeof e[0] != "number",
  _p = (e) => Array.isArray(e) && typeof e[0] == "number",
  Uc = {
    linear: $e,
    easeIn: K0,
    easeInOut: Lp,
    easeOut: G0,
    circIn: uu,
    circInOut: Vp,
    circOut: Rp,
    backIn: lu,
    backInOut: Ap,
    backOut: jp,
    anticipate: Dp,
  },
  Q0 = (e) => typeof e == "string",
  $c = (e) => {
    if (_p(e)) {
      Qn(
        e.length === 4,
        "Cubic bezier arrays must contain four numerical values.",
        "cubic-bezier-length",
      );
      const [t, n, r, i] = e;
      return oi(t, n, r, i);
    } else if (Q0(e))
      return (
        Qn(
          Uc[e] !== void 0,
          `Invalid easing type '${e}'`,
          "invalid-easing-type",
        ),
        Uc[e]
      );
    return e;
  },
  Di = [
    "setup",
    "read",
    "resolveKeyframes",
    "preUpdate",
    "update",
    "preRender",
    "render",
    "postRender",
  ],
  Wc = { value: null, addProjectionMetrics: null };
function X0(e, t) {
  let n = new Set(),
    r = new Set(),
    i = !1,
    s = !1;
  const o = new WeakSet();
  let a = { delta: 0, timestamp: 0, isProcessing: !1 },
    l = 0;
  function u(f) {
    (o.has(f) && (c.schedule(f), e()), l++, f(a));
  }
  const c = {
    schedule: (f, d = !1, y = !1) => {
      const w = y && i ? n : r;
      return (d && o.add(f), w.add(f), f);
    },
    cancel: (f) => {
      (r.delete(f), o.delete(f));
    },
    process: (f) => {
      if (((a = f), i)) {
        s = !0;
        return;
      }
      i = !0;
      const d = n;
      ((n = r),
        (r = d),
        n.forEach(u),
        t && Wc.value && Wc.value.frameloop[t].push(l),
        (l = 0),
        n.clear(),
        (i = !1),
        s && ((s = !1), c.process(f)));
    },
  };
  return c;
}
const Z0 = 40;
function Ip(e, t) {
  let n = !1,
    r = !0;
  const i = { delta: 0, timestamp: 0, isProcessing: !1 },
    s = () => (n = !0),
    o = Di.reduce((m, x) => ((m[x] = X0(s, t ? x : void 0)), m), {}),
    {
      setup: a,
      read: l,
      resolveKeyframes: u,
      preUpdate: c,
      update: f,
      preRender: d,
      render: y,
      postRender: v,
    } = o,
    w = () => {
      const m = Wt.useManualTiming,
        x = m ? i.timestamp : performance.now();
      ((n = !1),
        m ||
          (i.delta = r ? 1e3 / 60 : Math.max(Math.min(x - i.timestamp, Z0), 1)),
        (i.timestamp = x),
        (i.isProcessing = !0),
        a.process(i),
        l.process(i),
        u.process(i),
        c.process(i),
        f.process(i),
        d.process(i),
        y.process(i),
        v.process(i),
        (i.isProcessing = !1),
        n && t && ((r = !1), e(w)));
    },
    k = () => {
      ((n = !0), (r = !0), i.isProcessing || e(w));
    };
  return {
    schedule: Di.reduce((m, x) => {
      const S = o[x];
      return (
        (m[x] = (E, N = !1, T = !1) => (n || k(), S.schedule(E, N, T))),
        m
      );
    }, {}),
    cancel: (m) => {
      for (let x = 0; x < Di.length; x++) o[Di[x]].cancel(m);
    },
    state: i,
    steps: o,
  };
}
const {
  schedule: B,
  cancel: Ht,
  state: ue,
  steps: Do,
} = Ip(typeof requestAnimationFrame < "u" ? requestAnimationFrame : $e, !0);
let Yi;
function q0() {
  Yi = void 0;
}
const xe = {
    now: () => (
      Yi === void 0 &&
        xe.set(
          ue.isProcessing || Wt.useManualTiming
            ? ue.timestamp
            : performance.now(),
        ),
      Yi
    ),
    set: (e) => {
      ((Yi = e), queueMicrotask(q0));
    },
  },
  Fp = (e) => (t) => typeof t == "string" && t.startsWith(e),
  Op = Fp("--"),
  J0 = Fp("var(--"),
  cu = (e) => (J0(e) ? ev.test(e.split("/*")[0].trim()) : !1),
  ev =
    /var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu;
function Hc(e) {
  return typeof e != "string" ? !1 : e.split("/*")[0].includes("var(--");
}
const tr = {
    test: (e) => typeof e == "number",
    parse: parseFloat,
    transform: (e) => e,
  },
  Zr = { ...tr, transform: (e) => ft(0, 1, e) },
  Ri = { ...tr, default: 1 },
  jr = (e) => Math.round(e * 1e5) / 1e5,
  fu = /-?(?:\d+(?:\.\d+)?|\.\d+)/gu;
function tv(e) {
  return e == null;
}
const nv =
    /^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu,
  du = (e, t) => (n) =>
    !!(
      (typeof n == "string" && nv.test(n) && n.startsWith(e)) ||
      (t && !tv(n) && Object.prototype.hasOwnProperty.call(n, t))
    ),
  zp = (e, t, n) => (r) => {
    if (typeof r != "string") return r;
    const [i, s, o, a] = r.match(fu);
    return {
      [e]: parseFloat(i),
      [t]: parseFloat(s),
      [n]: parseFloat(o),
      alpha: a !== void 0 ? parseFloat(a) : 1,
    };
  },
  rv = (e) => ft(0, 255, e),
  Ro = { ...tr, transform: (e) => Math.round(rv(e)) },
  on = {
    test: du("rgb", "red"),
    parse: zp("red", "green", "blue"),
    transform: ({ red: e, green: t, blue: n, alpha: r = 1 }) =>
      "rgba(" +
      Ro.transform(e) +
      ", " +
      Ro.transform(t) +
      ", " +
      Ro.transform(n) +
      ", " +
      jr(Zr.transform(r)) +
      ")",
  };
function iv(e) {
  let t = "",
    n = "",
    r = "",
    i = "";
  return (
    e.length > 5
      ? ((t = e.substring(1, 3)),
        (n = e.substring(3, 5)),
        (r = e.substring(5, 7)),
        (i = e.substring(7, 9)))
      : ((t = e.substring(1, 2)),
        (n = e.substring(2, 3)),
        (r = e.substring(3, 4)),
        (i = e.substring(4, 5)),
        (t += t),
        (n += n),
        (r += r),
        (i += i)),
    {
      red: parseInt(t, 16),
      green: parseInt(n, 16),
      blue: parseInt(r, 16),
      alpha: i ? parseInt(i, 16) / 255 : 1,
    }
  );
}
const Ba = { test: du("#"), parse: iv, transform: on.transform },
  ai = (e) => ({
    test: (t) =>
      typeof t == "string" && t.endsWith(e) && t.split(" ").length === 1,
    parse: parseFloat,
    transform: (t) => `${t}${e}`,
  }),
  Ct = ai("deg"),
  ct = ai("%"),
  D = ai("px"),
  sv = ai("vh"),
  ov = ai("vw"),
  Kc = {
    ...ct,
    parse: (e) => ct.parse(e) / 100,
    transform: (e) => ct.transform(e * 100),
  },
  Vn = {
    test: du("hsl", "hue"),
    parse: zp("hue", "saturation", "lightness"),
    transform: ({ hue: e, saturation: t, lightness: n, alpha: r = 1 }) =>
      "hsla(" +
      Math.round(e) +
      ", " +
      ct.transform(jr(t)) +
      ", " +
      ct.transform(jr(n)) +
      ", " +
      jr(Zr.transform(r)) +
      ")",
  },
  ee = {
    test: (e) => on.test(e) || Ba.test(e) || Vn.test(e),
    parse: (e) =>
      on.test(e) ? on.parse(e) : Vn.test(e) ? Vn.parse(e) : Ba.parse(e),
    transform: (e) =>
      typeof e == "string"
        ? e
        : e.hasOwnProperty("red")
          ? on.transform(e)
          : Vn.transform(e),
    getAnimatableNone: (e) => {
      const t = ee.parse(e);
      return ((t.alpha = 0), ee.transform(t));
    },
  },
  av =
    /(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;
function lv(e) {
  var t, n;
  return (
    isNaN(e) &&
    typeof e == "string" &&
    (((t = e.match(fu)) == null ? void 0 : t.length) || 0) +
      (((n = e.match(av)) == null ? void 0 : n.length) || 0) >
      0
  );
}
const Bp = "number",
  bp = "color",
  uv = "var",
  cv = "var(",
  Gc = "${}",
  fv =
    /var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;
function Xn(e) {
  const t = e.toString(),
    n = [],
    r = { color: [], number: [], var: [] },
    i = [];
  let s = 0;
  const a = t
    .replace(
      fv,
      (l) => (
        ee.test(l)
          ? (r.color.push(s), i.push(bp), n.push(ee.parse(l)))
          : l.startsWith(cv)
            ? (r.var.push(s), i.push(uv), n.push(l))
            : (r.number.push(s), i.push(Bp), n.push(parseFloat(l))),
        ++s,
        Gc
      ),
    )
    .split(Gc);
  return { values: n, split: a, indexes: r, types: i };
}
function dv(e) {
  return Xn(e).values;
}
function Up({ split: e, types: t }) {
  const n = e.length;
  return (r) => {
    let i = "";
    for (let s = 0; s < n; s++)
      if (((i += e[s]), r[s] !== void 0)) {
        const o = t[s];
        o === Bp
          ? (i += jr(r[s]))
          : o === bp
            ? (i += ee.transform(r[s]))
            : (i += r[s]);
      }
    return i;
  };
}
function hv(e) {
  return Up(Xn(e));
}
const pv = (e) =>
    typeof e == "number" ? 0 : ee.test(e) ? ee.getAnimatableNone(e) : e,
  mv = (e, t) =>
    typeof e == "number"
      ? t != null && t.trim().endsWith("/")
        ? e
        : 0
      : pv(e);
function yv(e) {
  const t = Xn(e);
  return Up(t)(t.values.map((r, i) => mv(r, t.split[i])));
}
const tt = {
  test: lv,
  parse: dv,
  createTransformer: hv,
  getAnimatableNone: yv,
};
function Vo(e, t, n) {
  return (
    n < 0 && (n += 1),
    n > 1 && (n -= 1),
    n < 1 / 6
      ? e + (t - e) * 6 * n
      : n < 1 / 2
        ? t
        : n < 2 / 3
          ? e + (t - e) * (2 / 3 - n) * 6
          : e
  );
}
function gv({ hue: e, saturation: t, lightness: n, alpha: r }) {
  ((e /= 360), (t /= 100), (n /= 100));
  let i = 0,
    s = 0,
    o = 0;
  if (!t) i = s = o = n;
  else {
    const a = n < 0.5 ? n * (1 + t) : n + t - n * t,
      l = 2 * n - a;
    ((i = Vo(l, a, e + 1 / 3)), (s = Vo(l, a, e)), (o = Vo(l, a, e - 1 / 3)));
  }
  return {
    red: Math.round(i * 255),
    green: Math.round(s * 255),
    blue: Math.round(o * 255),
    alpha: r,
  };
}
function Ms(e, t) {
  return (n) => (n > 0 ? t : e);
}
const $ = (e, t, n) => e + (t - e) * n,
  Lo = (e, t, n) => {
    const r = e * e,
      i = n * (t * t - r) + r;
    return i < 0 ? 0 : Math.sqrt(i);
  },
  vv = [Ba, on, Vn],
  xv = (e) => vv.find((t) => t.test(e));
function Yc(e) {
  const t = xv(e);
  if (
    (qs(
      !!t,
      `'${e}' is not an animatable color. Use the equivalent color code instead.`,
      "color-not-animatable",
    ),
    !t)
  )
    return !1;
  let n = t.parse(e);
  return (t === Vn && (n = gv(n)), n);
}
const Qc = (e, t) => {
    const n = Yc(e),
      r = Yc(t);
    if (!n || !r) return Ms(e, t);
    const i = { ...n };
    return (s) => (
      (i.red = Lo(n.red, r.red, s)),
      (i.green = Lo(n.green, r.green, s)),
      (i.blue = Lo(n.blue, r.blue, s)),
      (i.alpha = $(n.alpha, r.alpha, s)),
      on.transform(i)
    );
  },
  ba = new Set(["none", "hidden"]);
function wv(e, t) {
  return ba.has(e) ? (n) => (n <= 0 ? e : t) : (n) => (n >= 1 ? t : e);
}
function Sv(e, t) {
  return (n) => $(e, t, n);
}
function hu(e) {
  return typeof e == "number"
    ? Sv
    : typeof e == "string"
      ? cu(e)
        ? Ms
        : ee.test(e)
          ? Qc
          : Cv
      : Array.isArray(e)
        ? $p
        : typeof e == "object"
          ? ee.test(e)
            ? Qc
            : kv
          : Ms;
}
function $p(e, t) {
  const n = [...e],
    r = n.length,
    i = e.map((s, o) => hu(s)(s, t[o]));
  return (s) => {
    for (let o = 0; o < r; o++) n[o] = i[o](s);
    return n;
  };
}
function kv(e, t) {
  const n = { ...e, ...t },
    r = {};
  for (const i in n)
    e[i] !== void 0 && t[i] !== void 0 && (r[i] = hu(e[i])(e[i], t[i]));
  return (i) => {
    for (const s in r) n[s] = r[s](i);
    return n;
  };
}
function Tv(e, t) {
  const n = [],
    r = { color: 0, var: 0, number: 0 };
  for (let i = 0; i < t.values.length; i++) {
    const s = t.types[i],
      o = e.indexes[s][r[s]],
      a = e.values[o] ?? 0;
    ((n[i] = a), r[s]++);
  }
  return n;
}
const Cv = (e, t) => {
  const n = tt.createTransformer(t),
    r = Xn(e),
    i = Xn(t);
  return r.indexes.var.length === i.indexes.var.length &&
    r.indexes.color.length === i.indexes.color.length &&
    r.indexes.number.length >= i.indexes.number.length
    ? (ba.has(e) && !i.values.length) || (ba.has(t) && !r.values.length)
      ? wv(e, t)
      : si($p(Tv(r, i), i.values), n)
    : (qs(
        !0,
        `Complex values '${e}' and '${t}' too different to mix. Ensure all colors are of the same type, and that each contains the same quantity of number and color values. Falling back to instant transition.`,
        "complex-values-different",
      ),
      Ms(e, t));
};
function Wp(e, t, n) {
  return typeof e == "number" && typeof t == "number" && typeof n == "number"
    ? $(e, t, n)
    : hu(e)(e, t);
}
const Pv = (e) => {
    const t = ({ timestamp: n }) => e(n);
    return {
      start: (n = !0) => B.update(t, n),
      stop: () => Ht(t),
      now: () => (ue.isProcessing ? ue.timestamp : xe.now()),
    };
  },
  Hp = (e, t, n = 10) => {
    let r = "";
    const i = Math.max(Math.round(t / n), 2);
    for (let s = 0; s < i; s++)
      r += Math.round(e(s / (i - 1)) * 1e4) / 1e4 + ", ";
    return `linear(${r.substring(0, r.length - 2)})`;
  },
  Ns = 2e4;
function pu(e) {
  let t = 0;
  const n = 50;
  let r = e.next(t);
  for (; !r.done && t < Ns; ) ((t += n), (r = e.next(t)));
  return t >= Ns ? 1 / 0 : t;
}
function Ev(e, t = 100, n) {
  const r = n({ ...e, keyframes: [0, t] }),
    i = Math.min(pu(r), Ns);
  return {
    type: "keyframes",
    ease: (s) => r.next(i * s).value / t,
    duration: be(i),
  };
}
const G = {
  stiffness: 100,
  damping: 10,
  mass: 1,
  velocity: 0,
  duration: 800,
  bounce: 0.3,
  visualDuration: 0.3,
  restSpeed: { granular: 0.01, default: 2 },
  restDelta: { granular: 0.005, default: 0.5 },
  minDuration: 0.01,
  maxDuration: 10,
  minDamping: 0.05,
  maxDamping: 1,
};
function Ua(e, t) {
  return e * Math.sqrt(1 - t * t);
}
const Mv = 12;
function Nv(e, t, n) {
  let r = n;
  for (let i = 1; i < Mv; i++) r = r - e(r) / t(r);
  return r;
}
const _o = 0.001;
function jv({
  duration: e = G.duration,
  bounce: t = G.bounce,
  velocity: n = G.velocity,
  mass: r = G.mass,
}) {
  let i, s;
  qs(
    e <= Ae(G.maxDuration),
    "Spring duration must be 10 seconds or less",
    "spring-duration-limit",
  );
  let o = 1 - t;
  ((o = ft(G.minDamping, G.maxDamping, o)),
    (e = ft(G.minDuration, G.maxDuration, be(e))),
    o < 1
      ? ((i = (u) => {
          const c = u * o,
            f = c * e,
            d = c - n,
            y = Ua(u, o),
            v = Math.exp(-f);
          return _o - (d / y) * v;
        }),
        (s = (u) => {
          const f = u * o * e,
            d = f * n + n,
            y = Math.pow(o, 2) * Math.pow(u, 2) * e,
            v = Math.exp(-f),
            w = Ua(Math.pow(u, 2), o);
          return ((-i(u) + _o > 0 ? -1 : 1) * ((d - y) * v)) / w;
        }))
      : ((i = (u) => {
          const c = Math.exp(-u * e),
            f = (u - n) * e + 1;
          return -_o + c * f;
        }),
        (s = (u) => {
          const c = Math.exp(-u * e),
            f = (n - u) * (e * e);
          return c * f;
        })));
  const a = 5 / e,
    l = Nv(i, s, a);
  if (((e = Ae(e)), isNaN(l)))
    return { stiffness: G.stiffness, damping: G.damping, duration: e };
  {
    const u = Math.pow(l, 2) * r;
    return { stiffness: u, damping: o * 2 * Math.sqrt(r * u), duration: e };
  }
}
const Av = ["duration", "bounce"],
  Dv = ["stiffness", "damping", "mass"];
function Xc(e, t) {
  return t.some((n) => e[n] !== void 0);
}
function Rv(e) {
  let t = {
    velocity: G.velocity,
    stiffness: G.stiffness,
    damping: G.damping,
    mass: G.mass,
    isResolvedFromDuration: !1,
    ...e,
  };
  if (!Xc(e, Dv) && Xc(e, Av))
    if (((t.velocity = 0), e.visualDuration)) {
      const n = e.visualDuration,
        r = (2 * Math.PI) / (n * 1.2),
        i = r * r,
        s = 2 * ft(0.05, 1, 1 - (e.bounce || 0)) * Math.sqrt(i);
      t = { ...t, mass: G.mass, stiffness: i, damping: s };
    } else {
      const n = jv({ ...e, velocity: 0 });
      ((t = { ...t, ...n, mass: G.mass }), (t.isResolvedFromDuration = !0));
    }
  return t;
}
function js(e = G.visualDuration, t = G.bounce) {
  const n =
    typeof e != "object"
      ? { visualDuration: e, keyframes: [0, 1], bounce: t }
      : e;
  let { restSpeed: r, restDelta: i } = n;
  const s = n.keyframes[0],
    o = n.keyframes[n.keyframes.length - 1],
    a = { done: !1, value: s },
    {
      stiffness: l,
      damping: u,
      mass: c,
      duration: f,
      velocity: d,
      isResolvedFromDuration: y,
    } = Rv({ ...n, velocity: -be(n.velocity || 0) }),
    v = d || 0,
    w = u / (2 * Math.sqrt(l * c)),
    k = o - s,
    p = be(Math.sqrt(l / c)),
    h = Math.abs(k) < 5;
  (r || (r = h ? G.restSpeed.granular : G.restSpeed.default),
    i || (i = h ? G.restDelta.granular : G.restDelta.default));
  let m, x, S, E, N, T;
  if (w < 1)
    ((S = Ua(p, w)),
      (E = (v + w * p * k) / S),
      (m = (P) => {
        const I = Math.exp(-w * p * P);
        return o - I * (E * Math.sin(S * P) + k * Math.cos(S * P));
      }),
      (N = w * p * E + k * S),
      (T = w * p * k - E * S),
      (x = (P) =>
        Math.exp(-w * p * P) * (N * Math.sin(S * P) + T * Math.cos(S * P))));
  else if (w === 1) {
    m = (I) => o - Math.exp(-p * I) * (k + (v + p * k) * I);
    const P = v + p * k;
    x = (I) => Math.exp(-p * I) * (p * P * I - v);
  } else {
    const P = p * Math.sqrt(w * w - 1);
    m = (De) => {
      const Ke = Math.exp(-w * p * De),
        Ce = Math.min(P * De, 300);
      return (
        o - (Ke * ((v + w * p * k) * Math.sinh(Ce) + P * k * Math.cosh(Ce))) / P
      );
    };
    const I = (v + w * p * k) / P,
      K = w * p * I - k * P,
      ge = w * p * k - I * P;
    x = (De) => {
      const Ke = Math.exp(-w * p * De),
        Ce = Math.min(P * De, 300);
      return Ke * (K * Math.sinh(Ce) + ge * Math.cosh(Ce));
    };
  }
  const R = {
    calculatedDuration: (y && f) || null,
    velocity: (P) => Ae(x(P)),
    next: (P) => {
      if (!y && w < 1) {
        const K = Math.exp(-w * p * P),
          ge = Math.sin(S * P),
          De = Math.cos(S * P),
          Ke = o - K * (E * ge + k * De),
          Ce = Ae(K * (N * ge + T * De));
        return (
          (a.done = Math.abs(Ce) <= r && Math.abs(o - Ke) <= i),
          (a.value = a.done ? o : Ke),
          a
        );
      }
      const I = m(P);
      if (y) a.done = P >= f;
      else {
        const K = Ae(x(P));
        a.done = Math.abs(K) <= r && Math.abs(o - I) <= i;
      }
      return ((a.value = a.done ? o : I), a);
    },
    toString: () => {
      const P = Math.min(pu(R), Ns),
        I = Hp((K) => R.next(P * K).value, P, 30);
      return P + "ms " + I;
    },
    toTransition: () => {},
  };
  return R;
}
js.applyToOptions = (e) => {
  const t = Ev(e, 100, js);
  return (
    (e.ease = t.ease),
    (e.duration = Ae(t.duration)),
    (e.type = "keyframes"),
    e
  );
};
const Vv = 5;
function Kp(e, t, n) {
  const r = Math.max(t - Vv, 0);
  return Pp(n - e(r), t - r);
}
function $a({
  keyframes: e,
  velocity: t = 0,
  power: n = 0.8,
  timeConstant: r = 325,
  bounceDamping: i = 10,
  bounceStiffness: s = 500,
  modifyTarget: o,
  min: a,
  max: l,
  restDelta: u = 0.5,
  restSpeed: c,
}) {
  const f = e[0],
    d = { done: !1, value: f },
    y = (T) => (a !== void 0 && T < a) || (l !== void 0 && T > l),
    v = (T) =>
      a === void 0
        ? l
        : l === void 0 || Math.abs(a - T) < Math.abs(l - T)
          ? a
          : l;
  let w = n * t;
  const k = f + w,
    p = o === void 0 ? k : o(k);
  p !== k && (w = p - f);
  const h = (T) => -w * Math.exp(-T / r),
    m = (T) => p + h(T),
    x = (T) => {
      const R = h(T),
        P = m(T);
      ((d.done = Math.abs(R) <= u), (d.value = d.done ? p : P));
    };
  let S, E;
  const N = (T) => {
    y(d.value) &&
      ((S = T),
      (E = js({
        keyframes: [d.value, v(d.value)],
        velocity: Kp(m, T, d.value),
        damping: i,
        stiffness: s,
        restDelta: u,
        restSpeed: c,
      })));
  };
  return (
    N(0),
    {
      calculatedDuration: null,
      next: (T) => {
        let R = !1;
        return (
          !E && S === void 0 && ((R = !0), x(T), N(T)),
          S !== void 0 && T >= S ? E.next(T - S) : (!R && x(T), d)
        );
      },
    }
  );
}
function Lv(e, t, n) {
  const r = [],
    i = n || Wt.mix || Wp,
    s = e.length - 1;
  for (let o = 0; o < s; o++) {
    let a = i(e[o], e[o + 1]);
    if (t) {
      const l = Array.isArray(t) ? t[o] || $e : t;
      a = si(l, a);
    }
    r.push(a);
  }
  return r;
}
function _v(e, t, { clamp: n = !0, ease: r, mixer: i } = {}) {
  const s = e.length;
  if (
    (Qn(
      s === t.length,
      "Both input and output ranges must be the same length",
      "range-length",
    ),
    s === 1)
  )
    return () => t[0];
  if (s === 2 && t[0] === t[1]) return () => t[1];
  const o = e[0] === e[1];
  e[0] > e[s - 1] && ((e = [...e].reverse()), (t = [...t].reverse()));
  const a = Lv(t, r, i),
    l = a.length,
    u = (c) => {
      if (o && c < e[0]) return t[0];
      let f = 0;
      if (l > 1) for (; f < e.length - 2 && !(c < e[f + 1]); f++);
      const d = Xr(e[f], e[f + 1], c);
      return a[f](d);
    };
  return n ? (c) => u(ft(e[0], e[s - 1], c)) : u;
}
function Iv(e, t) {
  const n = e[e.length - 1];
  for (let r = 1; r <= t; r++) {
    const i = Xr(0, t, r);
    e.push($(n, 1, i));
  }
}
function Fv(e) {
  const t = [0];
  return (Iv(t, e.length - 1), t);
}
function Ov(e, t) {
  return e.map((n) => n * t);
}
function zv(e, t) {
  return e.map(() => t || Lp).splice(0, e.length - 1);
}
function Ar({
  duration: e = 300,
  keyframes: t,
  times: n,
  ease: r = "easeInOut",
}) {
  const i = Y0(r) ? r.map($c) : $c(r),
    s = { done: !1, value: t[0] },
    o = Ov(n && n.length === t.length ? n : Fv(t), e),
    a = _v(o, t, { ease: Array.isArray(i) ? i : zv(t, i) });
  return {
    calculatedDuration: e,
    next: (l) => ((s.value = a(l)), (s.done = l >= e), s),
  };
}
const Bv = (e) => e !== null;
function Js(e, { repeat: t, repeatType: n = "loop" }, r, i = 1) {
  const s = e.filter(Bv),
    a = i < 0 || (t && n !== "loop" && t % 2 === 1) ? 0 : s.length - 1;
  return !a || r === void 0 ? s[a] : r;
}
const bv = { decay: $a, inertia: $a, tween: Ar, keyframes: Ar, spring: js };
function Gp(e) {
  typeof e.type == "string" && (e.type = bv[e.type]);
}
class mu {
  constructor() {
    this.updateFinished();
  }
  get finished() {
    return this._finished;
  }
  updateFinished() {
    this._finished = new Promise((t) => {
      this.resolve = t;
    });
  }
  notifyFinished() {
    this.resolve();
  }
  then(t, n) {
    return this.finished.then(t, n);
  }
}
const Uv = (e) => e / 100;
class As extends mu {
  constructor(t) {
    (super(),
      (this.state = "idle"),
      (this.startTime = null),
      (this.isStopped = !1),
      (this.currentTime = 0),
      (this.holdTime = null),
      (this.playbackSpeed = 1),
      (this.delayState = { done: !1, value: void 0 }),
      (this.stop = () => {
        var r, i;
        const { motionValue: n } = this.options;
        (n && n.updatedAt !== xe.now() && this.tick(xe.now()),
          (this.isStopped = !0),
          this.state !== "idle" &&
            (this.teardown(),
            (i = (r = this.options).onStop) == null || i.call(r)));
      }),
      (this.options = t),
      this.initAnimation(),
      this.play(),
      t.autoplay === !1 && this.pause());
  }
  initAnimation() {
    const { options: t } = this;
    Gp(t);
    const {
      type: n = Ar,
      repeat: r = 0,
      repeatDelay: i = 0,
      repeatType: s,
      velocity: o = 0,
    } = t;
    let { keyframes: a } = t;
    const l = n || Ar;
    l !== Ar &&
      typeof a[0] != "number" &&
      ((this.mixKeyframes = si(Uv, Wp(a[0], a[1]))), (a = [0, 100]));
    const u = l({ ...t, keyframes: a });
    (s === "mirror" &&
      (this.mirroredGenerator = l({
        ...t,
        keyframes: [...a].reverse(),
        velocity: -o,
      })),
      u.calculatedDuration === null && (u.calculatedDuration = pu(u)));
    const { calculatedDuration: c } = u;
    ((this.calculatedDuration = c),
      (this.resolvedDuration = c + i),
      (this.totalDuration = this.resolvedDuration * (r + 1) - i),
      (this.generator = u));
  }
  updateTime(t) {
    const n = Math.round(t - this.startTime) * this.playbackSpeed;
    this.holdTime !== null
      ? (this.currentTime = this.holdTime)
      : (this.currentTime = n);
  }
  tick(t, n = !1) {
    const {
      generator: r,
      totalDuration: i,
      mixKeyframes: s,
      mirroredGenerator: o,
      resolvedDuration: a,
      calculatedDuration: l,
    } = this;
    if (this.startTime === null) return r.next(0);
    const {
      delay: u = 0,
      keyframes: c,
      repeat: f,
      repeatType: d,
      repeatDelay: y,
      type: v,
      onUpdate: w,
      finalKeyframe: k,
    } = this.options;
    (this.speed > 0
      ? (this.startTime = Math.min(this.startTime, t))
      : this.speed < 0 &&
        (this.startTime = Math.min(t - i / this.speed, this.startTime)),
      n ? (this.currentTime = t) : this.updateTime(t));
    const p = this.currentTime - u * (this.playbackSpeed >= 0 ? 1 : -1),
      h = this.playbackSpeed >= 0 ? p < 0 : p > i;
    ((this.currentTime = Math.max(p, 0)),
      this.state === "finished" &&
        this.holdTime === null &&
        (this.currentTime = i));
    let m = this.currentTime,
      x = r;
    if (f) {
      const T = Math.min(this.currentTime, i) / a;
      let R = Math.floor(T),
        P = T % 1;
      (!P && T >= 1 && (P = 1),
        P === 1 && R--,
        (R = Math.min(R, f + 1)),
        !!(R % 2) &&
          (d === "reverse"
            ? ((P = 1 - P), y && (P -= y / a))
            : d === "mirror" && (x = o)),
        (m = ft(0, 1, P) * a));
    }
    let S;
    (h
      ? ((this.delayState.value = c[0]), (S = this.delayState))
      : (S = x.next(m)),
      s && !h && (S.value = s(S.value)));
    let { done: E } = S;
    !h &&
      l !== null &&
      (E =
        this.playbackSpeed >= 0
          ? this.currentTime >= i
          : this.currentTime <= 0);
    const N =
      this.holdTime === null &&
      (this.state === "finished" || (this.state === "running" && E));
    return (
      N && v !== $a && (S.value = Js(c, this.options, k, this.speed)),
      w && w(S.value),
      N && this.finish(),
      S
    );
  }
  then(t, n) {
    return this.finished.then(t, n);
  }
  get duration() {
    return be(this.calculatedDuration);
  }
  get iterationDuration() {
    const { delay: t = 0 } = this.options || {};
    return this.duration + be(t);
  }
  get time() {
    return be(this.currentTime);
  }
  set time(t) {
    ((t = Ae(t)),
      (this.currentTime = t),
      this.startTime === null ||
      this.holdTime !== null ||
      this.playbackSpeed === 0
        ? (this.holdTime = t)
        : this.driver &&
          (this.startTime = this.driver.now() - t / this.playbackSpeed),
      this.driver
        ? this.driver.start(!1)
        : ((this.startTime = 0),
          (this.state = "paused"),
          (this.holdTime = t),
          this.tick(t)));
  }
  getGeneratorVelocity() {
    const t = this.currentTime;
    if (t <= 0) return this.options.velocity || 0;
    if (this.generator.velocity) return this.generator.velocity(t);
    const n = this.generator.next(t).value;
    return Kp((r) => this.generator.next(r).value, t, n);
  }
  get speed() {
    return this.playbackSpeed;
  }
  set speed(t) {
    const n = this.playbackSpeed !== t;
    (n && this.driver && this.updateTime(xe.now()),
      (this.playbackSpeed = t),
      n && this.driver && (this.time = be(this.currentTime)));
  }
  play() {
    var i, s;
    if (this.isStopped) return;
    const { driver: t = Pv, startTime: n } = this.options;
    (this.driver || (this.driver = t((o) => this.tick(o))),
      (s = (i = this.options).onPlay) == null || s.call(i));
    const r = this.driver.now();
    (this.state === "finished"
      ? (this.updateFinished(), (this.startTime = r))
      : this.holdTime !== null
        ? (this.startTime = r - this.holdTime)
        : this.startTime || (this.startTime = n ?? r),
      this.state === "finished" &&
        this.speed < 0 &&
        (this.startTime += this.calculatedDuration),
      (this.holdTime = null),
      (this.state = "running"),
      this.driver.start());
  }
  pause() {
    ((this.state = "paused"),
      this.updateTime(xe.now()),
      (this.holdTime = this.currentTime));
  }
  complete() {
    (this.state !== "running" && this.play(),
      (this.state = "finished"),
      (this.holdTime = null));
  }
  finish() {
    var t, n;
    (this.notifyFinished(),
      this.teardown(),
      (this.state = "finished"),
      (n = (t = this.options).onComplete) == null || n.call(t));
  }
  cancel() {
    var t, n;
    ((this.holdTime = null),
      (this.startTime = 0),
      this.tick(0),
      this.teardown(),
      (n = (t = this.options).onCancel) == null || n.call(t));
  }
  teardown() {
    ((this.state = "idle"),
      this.stopDriver(),
      (this.startTime = this.holdTime = null));
  }
  stopDriver() {
    this.driver && (this.driver.stop(), (this.driver = void 0));
  }
  sample(t) {
    return ((this.startTime = 0), this.tick(t, !0));
  }
  attachTimeline(t) {
    var n;
    return (
      this.options.allowFlatten &&
        ((this.options.type = "keyframes"),
        (this.options.ease = "linear"),
        this.initAnimation()),
      (n = this.driver) == null || n.stop(),
      t.observe(this)
    );
  }
}
function $v(e) {
  for (let t = 1; t < e.length; t++) e[t] ?? (e[t] = e[t - 1]);
}
const an = (e) => (e * 180) / Math.PI,
  Wa = (e) => {
    const t = an(Math.atan2(e[1], e[0]));
    return Ha(t);
  },
  Wv = {
    x: 4,
    y: 5,
    translateX: 4,
    translateY: 5,
    scaleX: 0,
    scaleY: 3,
    scale: (e) => (Math.abs(e[0]) + Math.abs(e[3])) / 2,
    rotate: Wa,
    rotateZ: Wa,
    skewX: (e) => an(Math.atan(e[1])),
    skewY: (e) => an(Math.atan(e[2])),
    skew: (e) => (Math.abs(e[1]) + Math.abs(e[2])) / 2,
  },
  Ha = (e) => ((e = e % 360), e < 0 && (e += 360), e),
  Zc = Wa,
  qc = (e) => Math.sqrt(e[0] * e[0] + e[1] * e[1]),
  Jc = (e) => Math.sqrt(e[4] * e[4] + e[5] * e[5]),
  Hv = {
    x: 12,
    y: 13,
    z: 14,
    translateX: 12,
    translateY: 13,
    translateZ: 14,
    scaleX: qc,
    scaleY: Jc,
    scale: (e) => (qc(e) + Jc(e)) / 2,
    rotateX: (e) => Ha(an(Math.atan2(e[6], e[5]))),
    rotateY: (e) => Ha(an(Math.atan2(-e[2], e[0]))),
    rotateZ: Zc,
    rotate: Zc,
    skewX: (e) => an(Math.atan(e[4])),
    skewY: (e) => an(Math.atan(e[1])),
    skew: (e) => (Math.abs(e[1]) + Math.abs(e[4])) / 2,
  };
function Ka(e) {
  return e.includes("scale") ? 1 : 0;
}
function Ga(e, t) {
  if (!e || e === "none") return Ka(t);
  const n = e.match(/^matrix3d\(([-\d.e\s,]+)\)$/u);
  let r, i;
  if (n) ((r = Hv), (i = n));
  else {
    const a = e.match(/^matrix\(([-\d.e\s,]+)\)$/u);
    ((r = Wv), (i = a));
  }
  if (!i) return Ka(t);
  const s = r[t],
    o = i[1].split(",").map(Gv);
  return typeof s == "function" ? s(o) : o[s];
}
const Kv = (e, t) => {
  const { transform: n = "none" } = getComputedStyle(e);
  return Ga(n, t);
};
function Gv(e) {
  return parseFloat(e.trim());
}
const nr = [
    "transformPerspective",
    "x",
    "y",
    "z",
    "translateX",
    "translateY",
    "translateZ",
    "scale",
    "scaleX",
    "scaleY",
    "rotate",
    "rotateX",
    "rotateY",
    "rotateZ",
    "skew",
    "skewX",
    "skewY",
  ],
  rr = new Set(nr),
  ef = (e) => e === tr || e === D,
  Yv = new Set(["x", "y", "z"]),
  Qv = nr.filter((e) => !Yv.has(e));
function Xv(e) {
  const t = [];
  return (
    Qv.forEach((n) => {
      const r = e.getValue(n);
      r !== void 0 &&
        (t.push([n, r.get()]), r.set(n.startsWith("scale") ? 1 : 0));
    }),
    t
  );
}
const Rt = {
  width: (
    { x: e },
    { paddingLeft: t = "0", paddingRight: n = "0", boxSizing: r },
  ) => {
    const i = e.max - e.min;
    return r === "border-box" ? i : i - parseFloat(t) - parseFloat(n);
  },
  height: (
    { y: e },
    { paddingTop: t = "0", paddingBottom: n = "0", boxSizing: r },
  ) => {
    const i = e.max - e.min;
    return r === "border-box" ? i : i - parseFloat(t) - parseFloat(n);
  },
  top: (e, { top: t }) => parseFloat(t),
  left: (e, { left: t }) => parseFloat(t),
  bottom: ({ y: e }, { top: t }) => parseFloat(t) + (e.max - e.min),
  right: ({ x: e }, { left: t }) => parseFloat(t) + (e.max - e.min),
  x: (e, { transform: t }) => Ga(t, "x"),
  y: (e, { transform: t }) => Ga(t, "y"),
};
Rt.translateX = Rt.x;
Rt.translateY = Rt.y;
const cn = new Set();
let Ya = !1,
  Qa = !1,
  Xa = !1;
function Yp() {
  if (Qa) {
    const e = Array.from(cn).filter((r) => r.needsMeasurement),
      t = new Set(e.map((r) => r.element)),
      n = new Map();
    (t.forEach((r) => {
      const i = Xv(r);
      i.length && (n.set(r, i), r.render());
    }),
      e.forEach((r) => r.measureInitialState()),
      t.forEach((r) => {
        r.render();
        const i = n.get(r);
        i &&
          i.forEach(([s, o]) => {
            var a;
            (a = r.getValue(s)) == null || a.set(o);
          });
      }),
      e.forEach((r) => r.measureEndState()),
      e.forEach((r) => {
        r.suspendedScrollY !== void 0 && window.scrollTo(0, r.suspendedScrollY);
      }));
  }
  ((Qa = !1), (Ya = !1), cn.forEach((e) => e.complete(Xa)), cn.clear());
}
function Qp() {
  cn.forEach((e) => {
    (e.readKeyframes(), e.needsMeasurement && (Qa = !0));
  });
}
function Zv() {
  ((Xa = !0), Qp(), Yp(), (Xa = !1));
}
class yu {
  constructor(t, n, r, i, s, o = !1) {
    ((this.state = "pending"),
      (this.isAsync = !1),
      (this.needsMeasurement = !1),
      (this.unresolvedKeyframes = [...t]),
      (this.onComplete = n),
      (this.name = r),
      (this.motionValue = i),
      (this.element = s),
      (this.isAsync = o));
  }
  scheduleResolve() {
    ((this.state = "scheduled"),
      this.isAsync
        ? (cn.add(this), Ya || ((Ya = !0), B.read(Qp), B.resolveKeyframes(Yp)))
        : (this.readKeyframes(), this.complete()));
  }
  readKeyframes() {
    const {
      unresolvedKeyframes: t,
      name: n,
      element: r,
      motionValue: i,
    } = this;
    if (t[0] === null) {
      const s = i == null ? void 0 : i.get(),
        o = t[t.length - 1];
      if (s !== void 0) t[0] = s;
      else if (r && n) {
        const a = r.readValue(n, o);
        a != null && (t[0] = a);
      }
      (t[0] === void 0 && (t[0] = o), i && s === void 0 && i.set(t[0]));
    }
    $v(t);
  }
  setFinalKeyframe() {}
  measureInitialState() {}
  renderEndStyles() {}
  measureEndState() {}
  complete(t = !1) {
    ((this.state = "complete"),
      this.onComplete(this.unresolvedKeyframes, this.finalKeyframe, t),
      cn.delete(this));
  }
  cancel() {
    this.state === "scheduled" && (cn.delete(this), (this.state = "pending"));
  }
  resume() {
    this.state === "pending" && this.scheduleResolve();
  }
}
const qv = (e) => e.startsWith("--");
function Xp(e, t, n) {
  qv(t) ? e.style.setProperty(t, n) : (e.style[t] = n);
}
const Jv = {};
function Zp(e, t) {
  const n = Cp(e);
  return () => Jv[t] ?? n();
}
const e1 = Zp(() => window.ScrollTimeline !== void 0, "scrollTimeline"),
  qp = Zp(() => {
    try {
      document
        .createElement("div")
        .animate({ opacity: 0 }, { easing: "linear(0, 1)" });
    } catch {
      return !1;
    }
    return !0;
  }, "linearEasing"),
  xr = ([e, t, n, r]) => `cubic-bezier(${e}, ${t}, ${n}, ${r})`,
  tf = {
    linear: "linear",
    ease: "ease",
    easeIn: "ease-in",
    easeOut: "ease-out",
    easeInOut: "ease-in-out",
    circIn: xr([0, 0.65, 0.55, 1]),
    circOut: xr([0.55, 0, 1, 0.45]),
    backIn: xr([0.31, 0.01, 0.66, -0.59]),
    backOut: xr([0.33, 1.53, 0.69, 0.99]),
  };
function Jp(e, t) {
  if (e)
    return typeof e == "function"
      ? qp()
        ? Hp(e, t)
        : "ease-out"
      : _p(e)
        ? xr(e)
        : Array.isArray(e)
          ? e.map((n) => Jp(n, t) || tf.easeOut)
          : tf[e];
}
function t1(
  e,
  t,
  n,
  {
    delay: r = 0,
    duration: i = 300,
    repeat: s = 0,
    repeatType: o = "loop",
    ease: a = "easeOut",
    times: l,
  } = {},
  u = void 0,
) {
  const c = { [t]: n };
  l && (c.offset = l);
  const f = Jp(a, i);
  Array.isArray(f) && (c.easing = f);
  const d = {
    delay: r,
    duration: i,
    easing: Array.isArray(f) ? "linear" : f,
    fill: "both",
    iterations: s + 1,
    direction: o === "reverse" ? "alternate" : "normal",
  };
  return (u && (d.pseudoElement = u), e.animate(c, d));
}
function em(e) {
  return typeof e == "function" && "applyToOptions" in e;
}
function n1({ type: e, ...t }) {
  return em(e) && qp()
    ? e.applyToOptions(t)
    : (t.duration ?? (t.duration = 300), t.ease ?? (t.ease = "easeOut"), t);
}
class tm extends mu {
  constructor(t) {
    if (
      (super(),
      (this.finishedTime = null),
      (this.isStopped = !1),
      (this.manualStartTime = null),
      !t)
    )
      return;
    const {
      element: n,
      name: r,
      keyframes: i,
      pseudoElement: s,
      allowFlatten: o = !1,
      finalKeyframe: a,
      onComplete: l,
    } = t;
    ((this.isPseudoElement = !!s),
      (this.allowFlatten = o),
      (this.options = t),
      Qn(
        typeof t.type != "string",
        `Mini animate() doesn't support "type" as a string.`,
        "mini-spring",
      ));
    const u = n1(t);
    ((this.animation = t1(n, r, i, u, s)),
      u.autoplay === !1 && this.animation.pause(),
      (this.animation.onfinish = () => {
        if (((this.finishedTime = this.time), !s)) {
          const c = Js(i, this.options, a, this.speed);
          (this.updateMotionValue && this.updateMotionValue(c),
            Xp(n, r, c),
            this.animation.cancel());
        }
        (l == null || l(), this.notifyFinished());
      }));
  }
  play() {
    this.isStopped ||
      ((this.manualStartTime = null),
      this.animation.play(),
      this.state === "finished" && this.updateFinished());
  }
  pause() {
    this.animation.pause();
  }
  complete() {
    var t, n;
    (n = (t = this.animation).finish) == null || n.call(t);
  }
  cancel() {
    try {
      this.animation.cancel();
    } catch {}
  }
  stop() {
    if (this.isStopped) return;
    this.isStopped = !0;
    const { state: t } = this;
    t === "idle" ||
      t === "finished" ||
      (this.updateMotionValue ? this.updateMotionValue() : this.commitStyles(),
      this.isPseudoElement || this.cancel());
  }
  commitStyles() {
    var n, r, i;
    const t = (n = this.options) == null ? void 0 : n.element;
    !this.isPseudoElement &&
      t != null &&
      t.isConnected &&
      ((i = (r = this.animation).commitStyles) == null || i.call(r));
  }
  get duration() {
    var n, r;
    const t =
      ((r =
        (n = this.animation.effect) == null ? void 0 : n.getComputedTiming) ==
      null
        ? void 0
        : r.call(n).duration) || 0;
    return be(Number(t));
  }
  get iterationDuration() {
    const { delay: t = 0 } = this.options || {};
    return this.duration + be(t);
  }
  get time() {
    return be(Number(this.animation.currentTime) || 0);
  }
  set time(t) {
    const n = this.finishedTime !== null;
    ((this.manualStartTime = null),
      (this.finishedTime = null),
      (this.animation.currentTime = Ae(t)),
      n && this.animation.pause());
  }
  get speed() {
    return this.animation.playbackRate;
  }
  set speed(t) {
    (t < 0 && (this.finishedTime = null), (this.animation.playbackRate = t));
  }
  get state() {
    return this.finishedTime !== null ? "finished" : this.animation.playState;
  }
  get startTime() {
    return this.manualStartTime ?? Number(this.animation.startTime);
  }
  set startTime(t) {
    this.manualStartTime = this.animation.startTime = t;
  }
  attachTimeline({ timeline: t, rangeStart: n, rangeEnd: r, observe: i }) {
    var s;
    return (
      this.allowFlatten &&
        ((s = this.animation.effect) == null ||
          s.updateTiming({ easing: "linear" })),
      (this.animation.onfinish = null),
      t && e1()
        ? ((this.animation.timeline = t),
          n && (this.animation.rangeStart = n),
          r && (this.animation.rangeEnd = r),
          $e)
        : i(this)
    );
  }
}
const nm = { anticipate: Dp, backInOut: Ap, circInOut: Vp };
function r1(e) {
  return e in nm;
}
function i1(e) {
  typeof e.ease == "string" && r1(e.ease) && (e.ease = nm[e.ease]);
}
const Io = 10;
class s1 extends tm {
  constructor(t) {
    (i1(t),
      Gp(t),
      super(t),
      t.startTime !== void 0 &&
        t.autoplay !== !1 &&
        (this.startTime = t.startTime),
      (this.options = t));
  }
  updateMotionValue(t) {
    const {
      motionValue: n,
      onUpdate: r,
      onComplete: i,
      element: s,
      ...o
    } = this.options;
    if (!n) return;
    if (t !== void 0) {
      n.set(t);
      return;
    }
    const a = new As({ ...o, autoplay: !1 }),
      l = Math.max(Io, xe.now() - this.startTime),
      u = ft(0, Io, l - Io),
      c = a.sample(l).value,
      { name: f } = this.options;
    (s && f && Xp(s, f, c),
      n.setWithVelocity(a.sample(Math.max(0, l - u)).value, c, u),
      a.stop());
  }
}
const nf = (e, t) =>
  t === "zIndex"
    ? !1
    : !!(
        typeof e == "number" ||
        Array.isArray(e) ||
        (typeof e == "string" &&
          (tt.test(e) || e === "0") &&
          !e.startsWith("url("))
      );
function o1(e) {
  const t = e[0];
  if (e.length === 1) return !0;
  for (let n = 0; n < e.length; n++) if (e[n] !== t) return !0;
}
function a1(e, t, n, r) {
  const i = e[0];
  if (i === null) return !1;
  if (t === "display" || t === "visibility") return !0;
  const s = e[e.length - 1],
    o = nf(i, t),
    a = nf(s, t);
  return (
    qs(
      o === a,
      `You are trying to animate ${t} from "${i}" to "${s}". "${o ? s : i}" is not an animatable value.`,
      "value-not-animatable",
    ),
    !o || !a ? !1 : o1(e) || ((n === "spring" || em(n)) && r)
  );
}
function Za(e) {
  ((e.duration = 0), (e.type = "keyframes"));
}
const rm = new Set(["opacity", "clipPath", "filter", "transform"]),
  l1 = /^(?:oklch|oklab|lab|lch|color|color-mix|light-dark)\(/;
function u1(e) {
  for (let t = 0; t < e.length; t++)
    if (typeof e[t] == "string" && l1.test(e[t])) return !0;
  return !1;
}
const c1 = new Set([
    "color",
    "backgroundColor",
    "outlineColor",
    "fill",
    "stroke",
    "borderColor",
    "borderTopColor",
    "borderRightColor",
    "borderBottomColor",
    "borderLeftColor",
  ]),
  f1 = Cp(() => Object.hasOwnProperty.call(Element.prototype, "animate"));
function d1(e) {
  var f;
  const {
    motionValue: t,
    name: n,
    repeatDelay: r,
    repeatType: i,
    damping: s,
    type: o,
    keyframes: a,
  } = e;
  if (
    !(
      ((f = t == null ? void 0 : t.owner) == null
        ? void 0
        : f.current) instanceof HTMLElement
    )
  )
    return !1;
  const { onUpdate: u, transformTemplate: c } = t.owner.getProps();
  return (
    f1() &&
    n &&
    (rm.has(n) || (c1.has(n) && u1(a))) &&
    (n !== "transform" || !c) &&
    !u &&
    !r &&
    i !== "mirror" &&
    s !== 0 &&
    o !== "inertia"
  );
}
const h1 = 40;
class p1 extends mu {
  constructor({
    autoplay: t = !0,
    delay: n = 0,
    type: r = "keyframes",
    repeat: i = 0,
    repeatDelay: s = 0,
    repeatType: o = "loop",
    keyframes: a,
    name: l,
    motionValue: u,
    element: c,
    ...f
  }) {
    var v;
    (super(),
      (this.stop = () => {
        var w, k;
        (this._animation &&
          (this._animation.stop(),
          (w = this.stopTimeline) == null || w.call(this)),
          (k = this.keyframeResolver) == null || k.cancel());
      }),
      (this.createdAt = xe.now()));
    const d = {
        autoplay: t,
        delay: n,
        type: r,
        repeat: i,
        repeatDelay: s,
        repeatType: o,
        name: l,
        motionValue: u,
        element: c,
        ...f,
      },
      y = (c == null ? void 0 : c.KeyframeResolver) || yu;
    ((this.keyframeResolver = new y(
      a,
      (w, k, p) => this.onKeyframesResolved(w, k, d, !p),
      l,
      u,
      c,
    )),
      (v = this.keyframeResolver) == null || v.scheduleResolve());
  }
  onKeyframesResolved(t, n, r, i) {
    var p, h;
    this.keyframeResolver = void 0;
    const {
      name: s,
      type: o,
      velocity: a,
      delay: l,
      isHandoff: u,
      onUpdate: c,
    } = r;
    this.resolvedAt = xe.now();
    let f = !0;
    a1(t, s, o, a) ||
      ((f = !1),
      (Wt.instantAnimations || !l) && (c == null || c(Js(t, r, n))),
      (t[0] = t[t.length - 1]),
      Za(r),
      (r.repeat = 0));
    const y = {
        startTime: i
          ? this.resolvedAt
            ? this.resolvedAt - this.createdAt > h1
              ? this.resolvedAt
              : this.createdAt
            : this.createdAt
          : void 0,
        finalKeyframe: n,
        ...r,
        keyframes: t,
      },
      v = f && !u && d1(y),
      w =
        (h = (p = y.motionValue) == null ? void 0 : p.owner) == null
          ? void 0
          : h.current;
    let k;
    if (v)
      try {
        k = new s1({ ...y, element: w });
      } catch {
        k = new As(y);
      }
    else k = new As(y);
    (k.finished
      .then(() => {
        this.notifyFinished();
      })
      .catch($e),
      this.pendingTimeline &&
        ((this.stopTimeline = k.attachTimeline(this.pendingTimeline)),
        (this.pendingTimeline = void 0)),
      (this._animation = k));
  }
  get finished() {
    return this._animation ? this.animation.finished : this._finished;
  }
  then(t, n) {
    return this.finished.finally(t).then(() => {});
  }
  get animation() {
    var t;
    return (
      this._animation ||
        ((t = this.keyframeResolver) == null || t.resume(), Zv()),
      this._animation
    );
  }
  get duration() {
    return this.animation.duration;
  }
  get iterationDuration() {
    return this.animation.iterationDuration;
  }
  get time() {
    return this.animation.time;
  }
  set time(t) {
    this.animation.time = t;
  }
  get speed() {
    return this.animation.speed;
  }
  get state() {
    return this.animation.state;
  }
  set speed(t) {
    this.animation.speed = t;
  }
  get startTime() {
    return this.animation.startTime;
  }
  attachTimeline(t) {
    return (
      this._animation
        ? (this.stopTimeline = this.animation.attachTimeline(t))
        : (this.pendingTimeline = t),
      () => this.stop()
    );
  }
  play() {
    this.animation.play();
  }
  pause() {
    this.animation.pause();
  }
  complete() {
    this.animation.complete();
  }
  cancel() {
    var t;
    (this._animation && this.animation.cancel(),
      (t = this.keyframeResolver) == null || t.cancel());
  }
}
function im(e, t, n, r = 0, i = 1) {
  const s = Array.from(e)
      .sort((u, c) => u.sortNodePosition(c))
      .indexOf(t),
    o = e.size,
    a = (o - 1) * r;
  return typeof n == "function" ? n(s, o) : i === 1 ? s * r : a - s * r;
}
const m1 = /^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;
function y1(e) {
  const t = m1.exec(e);
  if (!t) return [,];
  const [, n, r, i] = t;
  return [`--${n ?? r}`, i];
}
const g1 = 4;
function sm(e, t, n = 1) {
  Qn(
    n <= g1,
    `Max CSS variable fallback depth detected in property "${e}". This may indicate a circular fallback dependency.`,
    "max-css-var-depth",
  );
  const [r, i] = y1(e);
  if (!r) return;
  const s = window.getComputedStyle(t).getPropertyValue(r);
  if (s) {
    const o = s.trim();
    return Sp(o) ? parseFloat(o) : o;
  }
  return cu(i) ? sm(i, t, n + 1) : i;
}
const v1 = { type: "spring", stiffness: 500, damping: 25, restSpeed: 10 },
  x1 = (e) => ({
    type: "spring",
    stiffness: 550,
    damping: e === 0 ? 2 * Math.sqrt(550) : 30,
    restSpeed: 10,
  }),
  w1 = { type: "keyframes", duration: 0.8 },
  S1 = { type: "keyframes", ease: [0.25, 0.1, 0.35, 1], duration: 0.3 },
  k1 = (e, { keyframes: t }) =>
    t.length > 2
      ? w1
      : rr.has(e)
        ? e.startsWith("scale")
          ? x1(t[1])
          : v1
        : S1;
function om(e, t) {
  if (e != null && e.inherit && t) {
    const { inherit: n, ...r } = e;
    return { ...t, ...r };
  }
  return e;
}
function gu(e, t) {
  const n =
    (e == null ? void 0 : e[t]) ?? (e == null ? void 0 : e.default) ?? e;
  return n !== e ? om(n, e) : n;
}
const T1 = new Set([
  "when",
  "delay",
  "delayChildren",
  "staggerChildren",
  "staggerDirection",
  "repeat",
  "repeatType",
  "repeatDelay",
  "from",
  "elapsed",
]);
function C1(e) {
  for (const t in e) if (!T1.has(t)) return !0;
  return !1;
}
const vu =
  (e, t, n, r = {}, i, s) =>
  (o) => {
    const a = gu(r, e) || {},
      l = a.delay || r.delay || 0;
    let { elapsed: u = 0 } = r;
    u = u - Ae(l);
    const c = {
      keyframes: Array.isArray(n) ? n : [null, n],
      ease: "easeOut",
      velocity: t.getVelocity(),
      ...a,
      delay: -u,
      onUpdate: (d) => {
        (t.set(d), a.onUpdate && a.onUpdate(d));
      },
      onComplete: () => {
        (o(), a.onComplete && a.onComplete());
      },
      name: e,
      motionValue: t,
      element: s ? void 0 : i,
    };
    (C1(a) || Object.assign(c, k1(e, c)),
      c.duration && (c.duration = Ae(c.duration)),
      c.repeatDelay && (c.repeatDelay = Ae(c.repeatDelay)),
      c.from !== void 0 && (c.keyframes[0] = c.from));
    let f = !1;
    if (
      ((c.type === !1 || (c.duration === 0 && !c.repeatDelay)) &&
        (Za(c), c.delay === 0 && (f = !0)),
      (Wt.instantAnimations ||
        Wt.skipAnimations ||
        (i != null && i.shouldSkipAnimations)) &&
        ((f = !0), Za(c), (c.delay = 0)),
      (c.allowFlatten = !a.type && !a.ease),
      f && !s && t.get() !== void 0)
    ) {
      const d = Js(c.keyframes, a);
      if (d !== void 0) {
        B.update(() => {
          (c.onUpdate(d), c.onComplete());
        });
        return;
      }
    }
    return a.isSync ? new As(c) : new p1(c);
  };
function rf(e) {
  const t = [{}, {}];
  return (
    e == null ||
      e.values.forEach((n, r) => {
        ((t[0][r] = n.get()), (t[1][r] = n.getVelocity()));
      }),
    t
  );
}
function xu(e, t, n, r) {
  if (typeof t == "function") {
    const [i, s] = rf(r);
    t = t(n !== void 0 ? n : e.custom, i, s);
  }
  if (
    (typeof t == "string" && (t = e.variants && e.variants[t]),
    typeof t == "function")
  ) {
    const [i, s] = rf(r);
    t = t(n !== void 0 ? n : e.custom, i, s);
  }
  return t;
}
function fn(e, t, n) {
  const r = e.getProps();
  return xu(r, t, n !== void 0 ? n : r.custom, e);
}
const am = new Set([
    "width",
    "height",
    "top",
    "left",
    "right",
    "bottom",
    ...nr,
  ]),
  sf = 30,
  P1 = (e) => !isNaN(parseFloat(e));
class E1 {
  constructor(t, n = {}) {
    ((this.canTrackVelocity = null),
      (this.events = {}),
      (this.updateAndNotify = (r) => {
        var s;
        const i = xe.now();
        if (
          (this.updatedAt !== i && this.setPrevFrameValue(),
          (this.prev = this.current),
          this.setCurrent(r),
          this.current !== this.prev &&
            ((s = this.events.change) == null || s.notify(this.current),
            this.dependents))
        )
          for (const o of this.dependents) o.dirty();
      }),
      (this.hasAnimated = !1),
      this.setCurrent(t),
      (this.owner = n.owner));
  }
  setCurrent(t) {
    ((this.current = t),
      (this.updatedAt = xe.now()),
      this.canTrackVelocity === null &&
        t !== void 0 &&
        (this.canTrackVelocity = P1(this.current)));
  }
  setPrevFrameValue(t = this.current) {
    ((this.prevFrameValue = t), (this.prevUpdatedAt = this.updatedAt));
  }
  onChange(t) {
    return this.on("change", t);
  }
  on(t, n) {
    this.events[t] || (this.events[t] = new au());
    const r = this.events[t].add(n);
    return t === "change"
      ? () => {
          (r(),
            B.read(() => {
              this.events.change.getSize() || this.stop();
            }));
        }
      : r;
  }
  clearListeners() {
    for (const t in this.events) this.events[t].clear();
  }
  attach(t, n) {
    ((this.passiveEffect = t), (this.stopPassiveEffect = n));
  }
  set(t) {
    this.passiveEffect
      ? this.passiveEffect(t, this.updateAndNotify)
      : this.updateAndNotify(t);
  }
  setWithVelocity(t, n, r) {
    (this.set(n),
      (this.prev = void 0),
      (this.prevFrameValue = t),
      (this.prevUpdatedAt = this.updatedAt - r));
  }
  jump(t, n = !0) {
    (this.updateAndNotify(t),
      (this.prev = t),
      (this.prevUpdatedAt = this.prevFrameValue = void 0),
      n && this.stop(),
      this.stopPassiveEffect && this.stopPassiveEffect());
  }
  dirty() {
    var t;
    (t = this.events.change) == null || t.notify(this.current);
  }
  addDependent(t) {
    (this.dependents || (this.dependents = new Set()), this.dependents.add(t));
  }
  removeDependent(t) {
    this.dependents && this.dependents.delete(t);
  }
  get() {
    return this.current;
  }
  getPrevious() {
    return this.prev;
  }
  getVelocity() {
    const t = xe.now();
    if (
      !this.canTrackVelocity ||
      this.prevFrameValue === void 0 ||
      t - this.updatedAt > sf
    )
      return 0;
    const n = Math.min(this.updatedAt - this.prevUpdatedAt, sf);
    return Pp(parseFloat(this.current) - parseFloat(this.prevFrameValue), n);
  }
  start(t) {
    return (
      this.stop(),
      new Promise((n) => {
        ((this.hasAnimated = !0),
          (this.animation = t(n)),
          this.events.animationStart && this.events.animationStart.notify());
      }).then(() => {
        (this.events.animationComplete &&
          this.events.animationComplete.notify(),
          this.clearAnimation());
      })
    );
  }
  stop() {
    (this.animation &&
      (this.animation.stop(),
      this.events.animationCancel && this.events.animationCancel.notify()),
      this.clearAnimation());
  }
  isAnimating() {
    return !!this.animation;
  }
  clearAnimation() {
    delete this.animation;
  }
  destroy() {
    var t, n;
    ((t = this.dependents) == null || t.clear(),
      (n = this.events.destroy) == null || n.notify(),
      this.clearListeners(),
      this.stop(),
      this.stopPassiveEffect && this.stopPassiveEffect());
  }
}
function Zn(e, t) {
  return new E1(e, t);
}
const qa = (e) => Array.isArray(e);
function M1(e, t, n) {
  e.hasValue(t) ? e.getValue(t).set(n) : e.addValue(t, Zn(n));
}
function N1(e) {
  return qa(e) ? e[e.length - 1] || 0 : e;
}
function j1(e, t) {
  const n = fn(e, t);
  let { transitionEnd: r = {}, transition: i = {}, ...s } = n || {};
  s = { ...s, ...r };
  for (const o in s) {
    const a = N1(s[o]);
    M1(e, o, a);
  }
}
const ce = (e) => !!(e && e.getVelocity);
function A1(e) {
  return !!(ce(e) && e.add);
}
function Ja(e, t) {
  const n = e.getValue("willChange");
  if (A1(n)) return n.add(t);
  if (!n && Wt.WillChange) {
    const r = new Wt.WillChange("auto");
    (e.addValue("willChange", r), r.add(t));
  }
}
function wu(e) {
  return e.replace(/([A-Z])/g, (t) => `-${t.toLowerCase()}`);
}
const D1 = "framerAppearId",
  lm = "data-" + wu(D1);
function um(e) {
  return e.props[lm];
}
function R1({ protectedKeys: e, needsAnimating: t }, n) {
  const r = e.hasOwnProperty(n) && t[n] !== !0;
  return ((t[n] = !1), r);
}
function cm(e, t, { delay: n = 0, transitionOverride: r, type: i } = {}) {
  let { transition: s, transitionEnd: o, ...a } = t;
  const l = e.getDefaultTransition();
  s = s ? om(s, l) : l;
  const u = s == null ? void 0 : s.reduceMotion;
  r && (s = r);
  const c = [],
    f = i && e.animationState && e.animationState.getState()[i];
  for (const d in a) {
    const y = e.getValue(d, e.latestValues[d] ?? null),
      v = a[d];
    if (v === void 0 || (f && R1(f, d))) continue;
    const w = { delay: n, ...gu(s || {}, d) },
      k = y.get();
    if (
      k !== void 0 &&
      !y.isAnimating() &&
      !Array.isArray(v) &&
      v === k &&
      !w.velocity
    ) {
      B.update(() => y.set(v));
      continue;
    }
    let p = !1;
    if (window.MotionHandoffAnimation) {
      const x = um(e);
      if (x) {
        const S = window.MotionHandoffAnimation(x, d, B);
        S !== null && ((w.startTime = S), (p = !0));
      }
    }
    Ja(e, d);
    const h = u ?? e.shouldReduceMotion;
    y.start(vu(d, y, v, h && am.has(d) ? { type: !1 } : w, e, p));
    const m = y.animation;
    m && c.push(m);
  }
  if (o) {
    const d = () =>
      B.update(() => {
        o && j1(e, o);
      });
    c.length ? Promise.all(c).then(d) : d();
  }
  return c;
}
function el(e, t, n = {}) {
  var l;
  const r = fn(
    e,
    t,
    n.type === "exit"
      ? (l = e.presenceContext) == null
        ? void 0
        : l.custom
      : void 0,
  );
  let { transition: i = e.getDefaultTransition() || {} } = r || {};
  n.transitionOverride && (i = n.transitionOverride);
  const s = r ? () => Promise.all(cm(e, r, n)) : () => Promise.resolve(),
    o =
      e.variantChildren && e.variantChildren.size
        ? (u = 0) => {
            const {
              delayChildren: c = 0,
              staggerChildren: f,
              staggerDirection: d,
            } = i;
            return V1(e, t, u, c, f, d, n);
          }
        : () => Promise.resolve(),
    { when: a } = i;
  if (a) {
    const [u, c] = a === "beforeChildren" ? [s, o] : [o, s];
    return u().then(() => c());
  } else return Promise.all([s(), o(n.delay)]);
}
function V1(e, t, n = 0, r = 0, i = 0, s = 1, o) {
  const a = [];
  for (const l of e.variantChildren)
    (l.notify("AnimationStart", t),
      a.push(
        el(l, t, {
          ...o,
          delay:
            n +
            (typeof r == "function" ? 0 : r) +
            im(e.variantChildren, l, r, i, s),
        }).then(() => l.notify("AnimationComplete", t)),
      ));
  return Promise.all(a);
}
function L1(e, t, n = {}) {
  e.notify("AnimationStart", t);
  let r;
  if (Array.isArray(t)) {
    const i = t.map((s) => el(e, s, n));
    r = Promise.all(i);
  } else if (typeof t == "string") r = el(e, t, n);
  else {
    const i = typeof t == "function" ? fn(e, t, n.custom) : t;
    r = Promise.all(cm(e, i, n));
  }
  return r.then(() => {
    e.notify("AnimationComplete", t);
  });
}
const _1 = { test: (e) => e === "auto", parse: (e) => e },
  fm = (e) => (t) => t.test(e),
  dm = [tr, D, ct, Ct, ov, sv, _1],
  of = (e) => dm.find(fm(e));
function I1(e) {
  return typeof e == "number"
    ? e === 0
    : e !== null
      ? e === "none" || e === "0" || Tp(e)
      : !0;
}
const F1 = new Set(["brightness", "contrast", "saturate", "opacity"]);
function O1(e) {
  const [t, n] = e.slice(0, -1).split("(");
  if (t === "drop-shadow") return e;
  const [r] = n.match(fu) || [];
  if (!r) return e;
  const i = n.replace(r, "");
  let s = F1.has(t) ? 1 : 0;
  return (r !== n && (s *= 100), t + "(" + s + i + ")");
}
const z1 = /\b([a-z-]*)\(.*?\)/gu,
  tl = {
    ...tt,
    getAnimatableNone: (e) => {
      const t = e.match(z1);
      return t ? t.map(O1).join(" ") : e;
    },
  },
  nl = {
    ...tt,
    getAnimatableNone: (e) => {
      const t = tt.parse(e);
      return tt.createTransformer(e)(
        t.map((r) =>
          typeof r == "number"
            ? 0
            : typeof r == "object"
              ? { ...r, alpha: 1 }
              : r,
        ),
      );
    },
  },
  af = { ...tr, transform: Math.round },
  B1 = {
    rotate: Ct,
    rotateX: Ct,
    rotateY: Ct,
    rotateZ: Ct,
    scale: Ri,
    scaleX: Ri,
    scaleY: Ri,
    scaleZ: Ri,
    skew: Ct,
    skewX: Ct,
    skewY: Ct,
    distance: D,
    translateX: D,
    translateY: D,
    translateZ: D,
    x: D,
    y: D,
    z: D,
    perspective: D,
    transformPerspective: D,
    opacity: Zr,
    originX: Kc,
    originY: Kc,
    originZ: D,
  },
  Su = {
    borderWidth: D,
    borderTopWidth: D,
    borderRightWidth: D,
    borderBottomWidth: D,
    borderLeftWidth: D,
    borderRadius: D,
    borderTopLeftRadius: D,
    borderTopRightRadius: D,
    borderBottomRightRadius: D,
    borderBottomLeftRadius: D,
    width: D,
    maxWidth: D,
    height: D,
    maxHeight: D,
    top: D,
    right: D,
    bottom: D,
    left: D,
    inset: D,
    insetBlock: D,
    insetBlockStart: D,
    insetBlockEnd: D,
    insetInline: D,
    insetInlineStart: D,
    insetInlineEnd: D,
    padding: D,
    paddingTop: D,
    paddingRight: D,
    paddingBottom: D,
    paddingLeft: D,
    paddingBlock: D,
    paddingBlockStart: D,
    paddingBlockEnd: D,
    paddingInline: D,
    paddingInlineStart: D,
    paddingInlineEnd: D,
    margin: D,
    marginTop: D,
    marginRight: D,
    marginBottom: D,
    marginLeft: D,
    marginBlock: D,
    marginBlockStart: D,
    marginBlockEnd: D,
    marginInline: D,
    marginInlineStart: D,
    marginInlineEnd: D,
    fontSize: D,
    backgroundPositionX: D,
    backgroundPositionY: D,
    ...B1,
    zIndex: af,
    fillOpacity: Zr,
    strokeOpacity: Zr,
    numOctaves: af,
  },
  b1 = {
    ...Su,
    color: ee,
    backgroundColor: ee,
    outlineColor: ee,
    fill: ee,
    stroke: ee,
    borderColor: ee,
    borderTopColor: ee,
    borderRightColor: ee,
    borderBottomColor: ee,
    borderLeftColor: ee,
    filter: tl,
    WebkitFilter: tl,
    mask: nl,
    WebkitMask: nl,
  },
  hm = (e) => b1[e],
  U1 = new Set([tl, nl]);
function pm(e, t) {
  let n = hm(e);
  return (
    U1.has(n) || (n = tt),
    n.getAnimatableNone ? n.getAnimatableNone(t) : void 0
  );
}
const $1 = new Set(["auto", "none", "0"]);
function W1(e, t, n) {
  let r = 0,
    i;
  for (; r < e.length && !i; ) {
    const s = e[r];
    (typeof s == "string" && !$1.has(s) && Xn(s).values.length && (i = e[r]),
      r++);
  }
  if (i && n) for (const s of t) e[s] = pm(n, i);
}
class H1 extends yu {
  constructor(t, n, r, i, s) {
    super(t, n, r, i, s, !0);
  }
  readKeyframes() {
    const { unresolvedKeyframes: t, element: n, name: r } = this;
    if (!n || !n.current) return;
    super.readKeyframes();
    for (let c = 0; c < t.length; c++) {
      let f = t[c];
      if (typeof f == "string" && ((f = f.trim()), cu(f))) {
        const d = sm(f, n.current);
        (d !== void 0 && (t[c] = d),
          c === t.length - 1 && (this.finalKeyframe = f));
      }
    }
    if ((this.resolveNoneKeyframes(), !am.has(r) || t.length !== 2)) return;
    const [i, s] = t,
      o = of(i),
      a = of(s),
      l = Hc(i),
      u = Hc(s);
    if (l !== u && Rt[r]) {
      this.needsMeasurement = !0;
      return;
    }
    if (o !== a)
      if (ef(o) && ef(a))
        for (let c = 0; c < t.length; c++) {
          const f = t[c];
          typeof f == "string" && (t[c] = parseFloat(f));
        }
      else Rt[r] && (this.needsMeasurement = !0);
  }
  resolveNoneKeyframes() {
    const { unresolvedKeyframes: t, name: n } = this,
      r = [];
    for (let i = 0; i < t.length; i++) (t[i] === null || I1(t[i])) && r.push(i);
    r.length && W1(t, r, n);
  }
  measureInitialState() {
    const { element: t, unresolvedKeyframes: n, name: r } = this;
    if (!t || !t.current) return;
    (r === "height" && (this.suspendedScrollY = window.pageYOffset),
      (this.measuredOrigin = Rt[r](
        t.measureViewportBox(),
        window.getComputedStyle(t.current),
      )),
      (n[0] = this.measuredOrigin));
    const i = n[n.length - 1];
    i !== void 0 && t.getValue(r, i).jump(i, !1);
  }
  measureEndState() {
    var a;
    const { element: t, name: n, unresolvedKeyframes: r } = this;
    if (!t || !t.current) return;
    const i = t.getValue(n);
    i && i.jump(this.measuredOrigin, !1);
    const s = r.length - 1,
      o = r[s];
    ((r[s] = Rt[n](t.measureViewportBox(), window.getComputedStyle(t.current))),
      o !== null && this.finalKeyframe === void 0 && (this.finalKeyframe = o),
      (a = this.removedTransforms) != null &&
        a.length &&
        this.removedTransforms.forEach(([l, u]) => {
          t.getValue(l).set(u);
        }),
      this.resolveNoneKeyframes());
  }
}
function mm(e, t, n) {
  if (e == null) return [];
  if (e instanceof EventTarget) return [e];
  if (typeof e == "string") {
    const i = document.querySelectorAll(e);
    return i ? Array.from(i) : [];
  }
  return Array.from(e).filter((r) => r != null);
}
const ym = (e, t) => (t && typeof e == "number" ? t.transform(e) : e);
function Qi(e) {
  return kp(e) && "offsetHeight" in e && !("ownerSVGElement" in e);
}
const { schedule: ku, cancel: hk } = Ip(queueMicrotask, !1),
  Qe = { x: !1, y: !1 };
function gm() {
  return Qe.x || Qe.y;
}
function K1(e) {
  return e === "x" || e === "y"
    ? Qe[e]
      ? null
      : ((Qe[e] = !0),
        () => {
          Qe[e] = !1;
        })
    : Qe.x || Qe.y
      ? null
      : ((Qe.x = Qe.y = !0),
        () => {
          Qe.x = Qe.y = !1;
        });
}
function vm(e, t) {
  const n = mm(e),
    r = new AbortController(),
    i = { passive: !0, ...t, signal: r.signal };
  return [n, i, () => r.abort()];
}
function G1(e) {
  return !(e.pointerType === "touch" || gm());
}
function Y1(e, t, n = {}) {
  const [r, i, s] = vm(e, n);
  return (
    r.forEach((o) => {
      let a = !1,
        l = !1,
        u;
      const c = () => {
          o.removeEventListener("pointerleave", v);
        },
        f = (k) => {
          (u && (u(k), (u = void 0)), c());
        },
        d = (k) => {
          ((a = !1),
            window.removeEventListener("pointerup", d),
            window.removeEventListener("pointercancel", d),
            l && ((l = !1), f(k)));
        },
        y = () => {
          ((a = !0),
            window.addEventListener("pointerup", d, i),
            window.addEventListener("pointercancel", d, i));
        },
        v = (k) => {
          if (k.pointerType !== "touch") {
            if (a) {
              l = !0;
              return;
            }
            f(k);
          }
        },
        w = (k) => {
          if (!G1(k)) return;
          l = !1;
          const p = t(o, k);
          typeof p == "function" &&
            ((u = p), o.addEventListener("pointerleave", v, i));
        };
      (o.addEventListener("pointerenter", w, i),
        o.addEventListener("pointerdown", y, i));
    }),
    s
  );
}
const xm = (e, t) => (t ? (e === t ? !0 : xm(e, t.parentElement)) : !1),
  Tu = (e) =>
    e.pointerType === "mouse"
      ? typeof e.button != "number" || e.button <= 0
      : e.isPrimary !== !1,
  Q1 = new Set(["BUTTON", "INPUT", "SELECT", "TEXTAREA", "A"]);
function X1(e) {
  return Q1.has(e.tagName) || e.isContentEditable === !0;
}
const Z1 = new Set(["INPUT", "SELECT", "TEXTAREA"]);
function q1(e) {
  return Z1.has(e.tagName) || e.isContentEditable === !0;
}
const Xi = new WeakSet();
function lf(e) {
  return (t) => {
    t.key === "Enter" && e(t);
  };
}
function Fo(e, t) {
  e.dispatchEvent(
    new PointerEvent("pointer" + t, { isPrimary: !0, bubbles: !0 }),
  );
}
const J1 = (e, t) => {
  const n = e.currentTarget;
  if (!n) return;
  const r = lf(() => {
    if (Xi.has(n)) return;
    Fo(n, "down");
    const i = lf(() => {
        Fo(n, "up");
      }),
      s = () => Fo(n, "cancel");
    (n.addEventListener("keyup", i, t), n.addEventListener("blur", s, t));
  });
  (n.addEventListener("keydown", r, t),
    n.addEventListener("blur", () => n.removeEventListener("keydown", r), t));
};
function uf(e) {
  return Tu(e) && !gm();
}
const cf = new WeakSet();
function ex(e, t, n = {}) {
  const [r, i, s] = vm(e, n),
    o = (a) => {
      const l = a.currentTarget;
      if (!uf(a) || cf.has(a)) return;
      (Xi.add(l), n.stopPropagation && cf.add(a));
      const u = t(l, a),
        c = (y, v) => {
          (window.removeEventListener("pointerup", f),
            window.removeEventListener("pointercancel", d),
            Xi.has(l) && Xi.delete(l),
            uf(y) && typeof u == "function" && u(y, { success: v }));
        },
        f = (y) => {
          c(
            y,
            l === window ||
              l === document ||
              n.useGlobalTarget ||
              xm(l, y.target),
          );
        },
        d = (y) => {
          c(y, !1);
        };
      (window.addEventListener("pointerup", f, i),
        window.addEventListener("pointercancel", d, i));
    };
  return (
    r.forEach((a) => {
      ((n.useGlobalTarget ? window : a).addEventListener("pointerdown", o, i),
        Qi(a) &&
          (a.addEventListener("focus", (u) => J1(u, i)),
          !X1(a) && !a.hasAttribute("tabindex") && (a.tabIndex = 0)));
    }),
    s
  );
}
function Cu(e) {
  return kp(e) && "ownerSVGElement" in e;
}
const Zi = new WeakMap();
let Pt;
const wm = (e, t, n) => (r, i) =>
    i && i[0]
      ? i[0][e + "Size"]
      : Cu(r) && "getBBox" in r
        ? r.getBBox()[t]
        : r[n],
  tx = wm("inline", "width", "offsetWidth"),
  nx = wm("block", "height", "offsetHeight");
function rx({ target: e, borderBoxSize: t }) {
  var n;
  (n = Zi.get(e)) == null ||
    n.forEach((r) => {
      r(e, {
        get width() {
          return tx(e, t);
        },
        get height() {
          return nx(e, t);
        },
      });
    });
}
function ix(e) {
  e.forEach(rx);
}
function sx() {
  typeof ResizeObserver > "u" || (Pt = new ResizeObserver(ix));
}
function ox(e, t) {
  Pt || sx();
  const n = mm(e);
  return (
    n.forEach((r) => {
      let i = Zi.get(r);
      (i || ((i = new Set()), Zi.set(r, i)),
        i.add(t),
        Pt == null || Pt.observe(r));
    }),
    () => {
      n.forEach((r) => {
        const i = Zi.get(r);
        (i == null || i.delete(t),
          (i != null && i.size) || Pt == null || Pt.unobserve(r));
      });
    }
  );
}
const qi = new Set();
let Ln;
function ax() {
  ((Ln = () => {
    const e = {
      get width() {
        return window.innerWidth;
      },
      get height() {
        return window.innerHeight;
      },
    };
    qi.forEach((t) => t(e));
  }),
    window.addEventListener("resize", Ln));
}
function lx(e) {
  return (
    qi.add(e),
    Ln || ax(),
    () => {
      (qi.delete(e),
        !qi.size &&
          typeof Ln == "function" &&
          (window.removeEventListener("resize", Ln), (Ln = void 0)));
    }
  );
}
function ff(e, t) {
  return typeof e == "function" ? lx(e) : ox(e, t);
}
function ux(e) {
  return Cu(e) && e.tagName === "svg";
}
const cx = [...dm, ee, tt],
  fx = (e) => cx.find(fm(e)),
  df = () => ({ translate: 0, scale: 1, origin: 0, originPoint: 0 }),
  _n = () => ({ x: df(), y: df() }),
  hf = () => ({ min: 0, max: 0 }),
  re = () => ({ x: hf(), y: hf() }),
  dx = new WeakMap();
function eo(e) {
  return e !== null && typeof e == "object" && typeof e.start == "function";
}
function qr(e) {
  return typeof e == "string" || Array.isArray(e);
}
const Pu = [
    "animate",
    "whileInView",
    "whileFocus",
    "whileHover",
    "whileTap",
    "whileDrag",
    "exit",
  ],
  Eu = ["initial", ...Pu];
function to(e) {
  return eo(e.animate) || Eu.some((t) => qr(e[t]));
}
function Sm(e) {
  return !!(to(e) || e.variants);
}
function hx(e, t, n) {
  for (const r in t) {
    const i = t[r],
      s = n[r];
    if (ce(i)) e.addValue(r, i);
    else if (ce(s)) e.addValue(r, Zn(i, { owner: e }));
    else if (s !== i)
      if (e.hasValue(r)) {
        const o = e.getValue(r);
        o.liveStyle === !0 ? o.jump(i) : o.hasAnimated || o.set(i);
      } else {
        const o = e.getStaticValue(r);
        e.addValue(r, Zn(o !== void 0 ? o : i, { owner: e }));
      }
  }
  for (const r in n) t[r] === void 0 && e.removeValue(r);
  return t;
}
const rl = { current: null },
  km = { current: !1 },
  px = typeof window < "u";
function mx() {
  if (((km.current = !0), !!px))
    if (window.matchMedia) {
      const e = window.matchMedia("(prefers-reduced-motion)"),
        t = () => (rl.current = e.matches);
      (e.addEventListener("change", t), t());
    } else rl.current = !1;
}
const pf = [
  "AnimationStart",
  "AnimationComplete",
  "Update",
  "BeforeLayoutMeasure",
  "LayoutMeasure",
  "LayoutAnimationStart",
  "LayoutAnimationComplete",
];
let Ds = {};
function Tm(e) {
  Ds = e;
}
function yx() {
  return Ds;
}
class gx {
  scrapeMotionValuesFromProps(t, n, r) {
    return {};
  }
  constructor(
    {
      parent: t,
      props: n,
      presenceContext: r,
      reducedMotionConfig: i,
      skipAnimations: s,
      blockInitialAnimation: o,
      visualState: a,
    },
    l = {},
  ) {
    ((this.current = null),
      (this.children = new Set()),
      (this.isVariantNode = !1),
      (this.isControllingVariants = !1),
      (this.shouldReduceMotion = null),
      (this.shouldSkipAnimations = !1),
      (this.values = new Map()),
      (this.KeyframeResolver = yu),
      (this.features = {}),
      (this.valueSubscriptions = new Map()),
      (this.prevMotionValues = {}),
      (this.hasBeenMounted = !1),
      (this.events = {}),
      (this.propEventSubscriptions = {}),
      (this.notifyUpdate = () => this.notify("Update", this.latestValues)),
      (this.render = () => {
        this.current &&
          (this.triggerBuild(),
          this.renderInstance(
            this.current,
            this.renderState,
            this.props.style,
            this.projection,
          ));
      }),
      (this.renderScheduledAt = 0),
      (this.scheduleRender = () => {
        const y = xe.now();
        this.renderScheduledAt < y &&
          ((this.renderScheduledAt = y), B.render(this.render, !1, !0));
      }));
    const { latestValues: u, renderState: c } = a;
    ((this.latestValues = u),
      (this.baseTarget = { ...u }),
      (this.initialValues = n.initial ? { ...u } : {}),
      (this.renderState = c),
      (this.parent = t),
      (this.props = n),
      (this.presenceContext = r),
      (this.depth = t ? t.depth + 1 : 0),
      (this.reducedMotionConfig = i),
      (this.skipAnimationsConfig = s),
      (this.options = l),
      (this.blockInitialAnimation = !!o),
      (this.isControllingVariants = to(n)),
      (this.isVariantNode = Sm(n)),
      this.isVariantNode && (this.variantChildren = new Set()),
      (this.manuallyAnimateOnMount = !!(t && t.current)));
    const { willChange: f, ...d } = this.scrapeMotionValuesFromProps(
      n,
      {},
      this,
    );
    for (const y in d) {
      const v = d[y];
      u[y] !== void 0 && ce(v) && v.set(u[y]);
    }
  }
  mount(t) {
    var n, r;
    if (this.hasBeenMounted)
      for (const i in this.initialValues)
        ((n = this.values.get(i)) == null || n.jump(this.initialValues[i]),
          (this.latestValues[i] = this.initialValues[i]));
    ((this.current = t),
      dx.set(t, this),
      this.projection && !this.projection.instance && this.projection.mount(t),
      this.parent &&
        this.isVariantNode &&
        !this.isControllingVariants &&
        (this.removeFromVariantTree = this.parent.addVariantChild(this)),
      this.values.forEach((i, s) => this.bindToMotionValue(s, i)),
      this.reducedMotionConfig === "never"
        ? (this.shouldReduceMotion = !1)
        : this.reducedMotionConfig === "always"
          ? (this.shouldReduceMotion = !0)
          : (km.current || mx(), (this.shouldReduceMotion = rl.current)),
      (this.shouldSkipAnimations = this.skipAnimationsConfig ?? !1),
      (r = this.parent) == null || r.addChild(this),
      this.update(this.props, this.presenceContext),
      (this.hasBeenMounted = !0));
  }
  unmount() {
    var t;
    (this.projection && this.projection.unmount(),
      Ht(this.notifyUpdate),
      Ht(this.render),
      this.valueSubscriptions.forEach((n) => n()),
      this.valueSubscriptions.clear(),
      this.removeFromVariantTree && this.removeFromVariantTree(),
      (t = this.parent) == null || t.removeChild(this));
    for (const n in this.events) this.events[n].clear();
    for (const n in this.features) {
      const r = this.features[n];
      r && (r.unmount(), (r.isMounted = !1));
    }
    this.current = null;
  }
  addChild(t) {
    (this.children.add(t),
      this.enteringChildren ?? (this.enteringChildren = new Set()),
      this.enteringChildren.add(t));
  }
  removeChild(t) {
    (this.children.delete(t),
      this.enteringChildren && this.enteringChildren.delete(t));
  }
  bindToMotionValue(t, n) {
    if (
      (this.valueSubscriptions.has(t) && this.valueSubscriptions.get(t)(),
      n.accelerate && rm.has(t) && this.current instanceof HTMLElement)
    ) {
      const {
          factory: o,
          keyframes: a,
          times: l,
          ease: u,
          duration: c,
        } = n.accelerate,
        f = new tm({
          element: this.current,
          name: t,
          keyframes: a,
          times: l,
          ease: u,
          duration: Ae(c),
        }),
        d = o(f);
      this.valueSubscriptions.set(t, () => {
        (d(), f.cancel());
      });
      return;
    }
    const r = rr.has(t);
    r && this.onBindTransform && this.onBindTransform();
    const i = n.on("change", (o) => {
      ((this.latestValues[t] = o),
        this.props.onUpdate && B.preRender(this.notifyUpdate),
        r && this.projection && (this.projection.isTransformDirty = !0),
        this.scheduleRender());
    });
    let s;
    (typeof window < "u" &&
      window.MotionCheckAppearSync &&
      (s = window.MotionCheckAppearSync(this, t, n)),
      this.valueSubscriptions.set(t, () => {
        (i(), s && s(), n.owner && n.stop());
      }));
  }
  sortNodePosition(t) {
    return !this.current ||
      !this.sortInstanceNodePosition ||
      this.type !== t.type
      ? 0
      : this.sortInstanceNodePosition(this.current, t.current);
  }
  updateFeatures() {
    let t = "animation";
    for (t in Ds) {
      const n = Ds[t];
      if (!n) continue;
      const { isEnabled: r, Feature: i } = n;
      if (
        (!this.features[t] &&
          i &&
          r(this.props) &&
          (this.features[t] = new i(this)),
        this.features[t])
      ) {
        const s = this.features[t];
        s.isMounted ? s.update() : (s.mount(), (s.isMounted = !0));
      }
    }
  }
  triggerBuild() {
    this.build(this.renderState, this.latestValues, this.props);
  }
  measureViewportBox() {
    return this.current
      ? this.measureInstanceViewportBox(this.current, this.props)
      : re();
  }
  getStaticValue(t) {
    return this.latestValues[t];
  }
  setStaticValue(t, n) {
    this.latestValues[t] = n;
  }
  update(t, n) {
    ((t.transformTemplate || this.props.transformTemplate) &&
      this.scheduleRender(),
      (this.prevProps = this.props),
      (this.props = t),
      (this.prevPresenceContext = this.presenceContext),
      (this.presenceContext = n));
    for (let r = 0; r < pf.length; r++) {
      const i = pf[r];
      this.propEventSubscriptions[i] &&
        (this.propEventSubscriptions[i](),
        delete this.propEventSubscriptions[i]);
      const s = "on" + i,
        o = t[s];
      o && (this.propEventSubscriptions[i] = this.on(i, o));
    }
    ((this.prevMotionValues = hx(
      this,
      this.scrapeMotionValuesFromProps(t, this.prevProps || {}, this),
      this.prevMotionValues,
    )),
      this.handleChildMotionValue && this.handleChildMotionValue());
  }
  getProps() {
    return this.props;
  }
  getVariant(t) {
    return this.props.variants ? this.props.variants[t] : void 0;
  }
  getDefaultTransition() {
    return this.props.transition;
  }
  getTransformPagePoint() {
    return this.props.transformPagePoint;
  }
  getClosestVariantNode() {
    return this.isVariantNode
      ? this
      : this.parent
        ? this.parent.getClosestVariantNode()
        : void 0;
  }
  addVariantChild(t) {
    const n = this.getClosestVariantNode();
    if (n)
      return (
        n.variantChildren && n.variantChildren.add(t),
        () => n.variantChildren.delete(t)
      );
  }
  addValue(t, n) {
    const r = this.values.get(t);
    n !== r &&
      (r && this.removeValue(t),
      this.bindToMotionValue(t, n),
      this.values.set(t, n),
      (this.latestValues[t] = n.get()));
  }
  removeValue(t) {
    this.values.delete(t);
    const n = this.valueSubscriptions.get(t);
    (n && (n(), this.valueSubscriptions.delete(t)),
      delete this.latestValues[t],
      this.removeValueFromRenderState(t, this.renderState));
  }
  hasValue(t) {
    return this.values.has(t);
  }
  getValue(t, n) {
    if (this.props.values && this.props.values[t]) return this.props.values[t];
    let r = this.values.get(t);
    return (
      r === void 0 &&
        n !== void 0 &&
        ((r = Zn(n === null ? void 0 : n, { owner: this })),
        this.addValue(t, r)),
      r
    );
  }
  readValue(t, n) {
    let r =
      this.latestValues[t] !== void 0 || !this.current
        ? this.latestValues[t]
        : (this.getBaseTargetFromProps(this.props, t) ??
          this.readValueFromInstance(this.current, t, this.options));
    return (
      r != null &&
        (typeof r == "string" && (Sp(r) || Tp(r))
          ? (r = parseFloat(r))
          : !fx(r) && tt.test(n) && (r = pm(t, n)),
        this.setBaseTarget(t, ce(r) ? r.get() : r)),
      ce(r) ? r.get() : r
    );
  }
  setBaseTarget(t, n) {
    this.baseTarget[t] = n;
  }
  getBaseTarget(t) {
    var s;
    const { initial: n } = this.props;
    let r;
    if (typeof n == "string" || typeof n == "object") {
      const o = xu(
        this.props,
        n,
        (s = this.presenceContext) == null ? void 0 : s.custom,
      );
      o && (r = o[t]);
    }
    if (n && r !== void 0) return r;
    const i = this.getBaseTargetFromProps(this.props, t);
    return i !== void 0 && !ce(i)
      ? i
      : this.initialValues[t] !== void 0 && r === void 0
        ? void 0
        : this.baseTarget[t];
  }
  on(t, n) {
    return (
      this.events[t] || (this.events[t] = new au()),
      this.events[t].add(n)
    );
  }
  notify(t, ...n) {
    this.events[t] && this.events[t].notify(...n);
  }
  scheduleRenderMicrotask() {
    ku.render(this.render);
  }
}
class Cm extends gx {
  constructor() {
    (super(...arguments), (this.KeyframeResolver = H1));
  }
  sortInstanceNodePosition(t, n) {
    return t.compareDocumentPosition(n) & 2 ? 1 : -1;
  }
  getBaseTargetFromProps(t, n) {
    const r = t.style;
    return r ? r[n] : void 0;
  }
  removeValueFromRenderState(t, { vars: n, style: r }) {
    (delete n[t], delete r[t]);
  }
  handleChildMotionValue() {
    this.childSubscription &&
      (this.childSubscription(), delete this.childSubscription);
    const { children: t } = this.props;
    ce(t) &&
      (this.childSubscription = t.on("change", (n) => {
        this.current && (this.current.textContent = `${n}`);
      }));
  }
}
class Qt {
  constructor(t) {
    ((this.isMounted = !1), (this.node = t));
  }
  update() {}
}
function Pm({ top: e, left: t, right: n, bottom: r }) {
  return { x: { min: t, max: n }, y: { min: e, max: r } };
}
function vx({ x: e, y: t }) {
  return { top: t.min, right: e.max, bottom: t.max, left: e.min };
}
function xx(e, t) {
  if (!t) return e;
  const n = t({ x: e.left, y: e.top }),
    r = t({ x: e.right, y: e.bottom });
  return { top: n.y, left: n.x, bottom: r.y, right: r.x };
}
function Oo(e) {
  return e === void 0 || e === 1;
}
function il({ scale: e, scaleX: t, scaleY: n }) {
  return !Oo(e) || !Oo(t) || !Oo(n);
}
function tn(e) {
  return (
    il(e) ||
    Em(e) ||
    e.z ||
    e.rotate ||
    e.rotateX ||
    e.rotateY ||
    e.skewX ||
    e.skewY
  );
}
function Em(e) {
  return mf(e.x) || mf(e.y);
}
function mf(e) {
  return e && e !== "0%";
}
function Rs(e, t, n) {
  const r = e - n,
    i = t * r;
  return n + i;
}
function yf(e, t, n, r, i) {
  return (i !== void 0 && (e = Rs(e, i, r)), Rs(e, n, r) + t);
}
function sl(e, t = 0, n = 1, r, i) {
  ((e.min = yf(e.min, t, n, r, i)), (e.max = yf(e.max, t, n, r, i)));
}
function Mm(e, { x: t, y: n }) {
  (sl(e.x, t.translate, t.scale, t.originPoint),
    sl(e.y, n.translate, n.scale, n.originPoint));
}
const gf = 0.999999999999,
  vf = 1.0000000000001;
function wx(e, t, n, r = !1) {
  var a;
  const i = n.length;
  if (!i) return;
  t.x = t.y = 1;
  let s, o;
  for (let l = 0; l < i; l++) {
    ((s = n[l]), (o = s.projectionDelta));
    const { visualElement: u } = s.options;
    (u && u.props.style && u.props.style.display === "contents") ||
      (r &&
        s.options.layoutScroll &&
        s.scroll &&
        s !== s.root &&
        (ot(e.x, -s.scroll.offset.x), ot(e.y, -s.scroll.offset.y)),
      o && ((t.x *= o.x.scale), (t.y *= o.y.scale), Mm(e, o)),
      r &&
        tn(s.latestValues) &&
        Ji(e, s.latestValues, (a = s.layout) == null ? void 0 : a.layoutBox));
  }
  (t.x < vf && t.x > gf && (t.x = 1), t.y < vf && t.y > gf && (t.y = 1));
}
function ot(e, t) {
  ((e.min += t), (e.max += t));
}
function xf(e, t, n, r, i = 0.5) {
  const s = $(e.min, e.max, i);
  sl(e, t, n, s, r);
}
function wf(e, t) {
  return typeof e == "string" ? (parseFloat(e) / 100) * (t.max - t.min) : e;
}
function Ji(e, t, n) {
  const r = n ?? e;
  (xf(e.x, wf(t.x, r.x), t.scaleX, t.scale, t.originX),
    xf(e.y, wf(t.y, r.y), t.scaleY, t.scale, t.originY));
}
function Nm(e, t) {
  return Pm(xx(e.getBoundingClientRect(), t));
}
function Sx(e, t, n) {
  const r = Nm(e, n),
    { scroll: i } = t;
  return (i && (ot(r.x, i.offset.x), ot(r.y, i.offset.y)), r);
}
const kx = {
    x: "translateX",
    y: "translateY",
    z: "translateZ",
    transformPerspective: "perspective",
  },
  Tx = nr.length;
function Cx(e, t, n) {
  let r = "",
    i = !0;
  for (let s = 0; s < Tx; s++) {
    const o = nr[s],
      a = e[o];
    if (a === void 0) continue;
    let l = !0;
    if (typeof a == "number") l = a === (o.startsWith("scale") ? 1 : 0);
    else {
      const u = parseFloat(a);
      l = o.startsWith("scale") ? u === 1 : u === 0;
    }
    if (!l || n) {
      const u = ym(a, Su[o]);
      if (!l) {
        i = !1;
        const c = kx[o] || o;
        r += `${c}(${u}) `;
      }
      n && (t[o] = u);
    }
  }
  return ((r = r.trim()), n ? (r = n(t, i ? "" : r)) : i && (r = "none"), r);
}
function Mu(e, t, n) {
  const { style: r, vars: i, transformOrigin: s } = e;
  let o = !1,
    a = !1;
  for (const l in t) {
    const u = t[l];
    if (rr.has(l)) {
      o = !0;
      continue;
    } else if (Op(l)) {
      i[l] = u;
      continue;
    } else {
      const c = ym(u, Su[l]);
      l.startsWith("origin") ? ((a = !0), (s[l] = c)) : (r[l] = c);
    }
  }
  if (
    (t.transform ||
      (o || n
        ? (r.transform = Cx(t, e.transform, n))
        : r.transform && (r.transform = "none")),
    a)
  ) {
    const { originX: l = "50%", originY: u = "50%", originZ: c = 0 } = s;
    r.transformOrigin = `${l} ${u} ${c}`;
  }
}
function jm(e, { style: t, vars: n }, r, i) {
  const s = e.style;
  let o;
  for (o in t) s[o] = t[o];
  i == null || i.applyProjectionStyles(s, r);
  for (o in n) s.setProperty(o, n[o]);
}
function Sf(e, t) {
  return t.max === t.min ? 0 : (e / (t.max - t.min)) * 100;
}
const hr = {
    correct: (e, t) => {
      if (!t.target) return e;
      if (typeof e == "string")
        if (D.test(e)) e = parseFloat(e);
        else return e;
      const n = Sf(e, t.target.x),
        r = Sf(e, t.target.y);
      return `${n}% ${r}%`;
    },
  },
  Px = {
    correct: (e, { treeScale: t, projectionDelta: n }) => {
      const r = e,
        i = tt.parse(e);
      if (i.length > 5) return r;
      const s = tt.createTransformer(e),
        o = typeof i[0] != "number" ? 1 : 0,
        a = n.x.scale * t.x,
        l = n.y.scale * t.y;
      ((i[0 + o] /= a), (i[1 + o] /= l));
      const u = $(a, l, 0.5);
      return (
        typeof i[2 + o] == "number" && (i[2 + o] /= u),
        typeof i[3 + o] == "number" && (i[3 + o] /= u),
        s(i)
      );
    },
  },
  ol = {
    borderRadius: {
      ...hr,
      applyTo: [
        "borderTopLeftRadius",
        "borderTopRightRadius",
        "borderBottomLeftRadius",
        "borderBottomRightRadius",
      ],
    },
    borderTopLeftRadius: hr,
    borderTopRightRadius: hr,
    borderBottomLeftRadius: hr,
    borderBottomRightRadius: hr,
    boxShadow: Px,
  };
function Am(e, { layout: t, layoutId: n }) {
  return (
    rr.has(e) ||
    e.startsWith("origin") ||
    ((t || n !== void 0) && (!!ol[e] || e === "opacity"))
  );
}
function Nu(e, t, n) {
  var o;
  const r = e.style,
    i = t == null ? void 0 : t.style,
    s = {};
  if (!r) return s;
  for (const a in r)
    (ce(r[a]) ||
      (i && ce(i[a])) ||
      Am(a, e) ||
      ((o = n == null ? void 0 : n.getValue(a)) == null
        ? void 0
        : o.liveStyle) !== void 0) &&
      (s[a] = r[a]);
  return s;
}
function Ex(e) {
  return window.getComputedStyle(e);
}
class Mx extends Cm {
  constructor() {
    (super(...arguments), (this.type = "html"), (this.renderInstance = jm));
  }
  readValueFromInstance(t, n) {
    var r;
    if (rr.has(n))
      return (r = this.projection) != null && r.isProjecting ? Ka(n) : Kv(t, n);
    {
      const i = Ex(t),
        s = (Op(n) ? i.getPropertyValue(n) : i[n]) || 0;
      return typeof s == "string" ? s.trim() : s;
    }
  }
  measureInstanceViewportBox(t, { transformPagePoint: n }) {
    return Nm(t, n);
  }
  build(t, n, r) {
    Mu(t, n, r.transformTemplate);
  }
  scrapeMotionValuesFromProps(t, n, r) {
    return Nu(t, n, r);
  }
}
const Nx = { offset: "stroke-dashoffset", array: "stroke-dasharray" },
  jx = { offset: "strokeDashoffset", array: "strokeDasharray" };
function Ax(e, t, n = 1, r = 0, i = !0) {
  e.pathLength = 1;
  const s = i ? Nx : jx;
  ((e[s.offset] = `${-r}`), (e[s.array] = `${t} ${n}`));
}
const Dx = ["offsetDistance", "offsetPath", "offsetRotate", "offsetAnchor"];
function Dm(
  e,
  {
    attrX: t,
    attrY: n,
    attrScale: r,
    pathLength: i,
    pathSpacing: s = 1,
    pathOffset: o = 0,
    ...a
  },
  l,
  u,
  c,
) {
  if ((Mu(e, a, u), l)) {
    e.style.viewBox && (e.attrs.viewBox = e.style.viewBox);
    return;
  }
  ((e.attrs = e.style), (e.style = {}));
  const { attrs: f, style: d } = e;
  (f.transform && ((d.transform = f.transform), delete f.transform),
    (d.transform || f.transformOrigin) &&
      ((d.transformOrigin = f.transformOrigin ?? "50% 50%"),
      delete f.transformOrigin),
    d.transform &&
      ((d.transformBox = (c == null ? void 0 : c.transformBox) ?? "fill-box"),
      delete f.transformBox));
  for (const y of Dx) f[y] !== void 0 && ((d[y] = f[y]), delete f[y]);
  (t !== void 0 && (f.x = t),
    n !== void 0 && (f.y = n),
    r !== void 0 && (f.scale = r),
    i !== void 0 && Ax(f, i, s, o, !1));
}
const Rm = new Set([
    "baseFrequency",
    "diffuseConstant",
    "kernelMatrix",
    "kernelUnitLength",
    "keySplines",
    "keyTimes",
    "limitingConeAngle",
    "markerHeight",
    "markerWidth",
    "numOctaves",
    "targetX",
    "targetY",
    "surfaceScale",
    "specularConstant",
    "specularExponent",
    "stdDeviation",
    "tableValues",
    "viewBox",
    "gradientTransform",
    "pathLength",
    "startOffset",
    "textLength",
    "lengthAdjust",
  ]),
  Vm = (e) => typeof e == "string" && e.toLowerCase() === "svg";
function Rx(e, t, n, r) {
  jm(e, t, void 0, r);
  for (const i in t.attrs) e.setAttribute(Rm.has(i) ? i : wu(i), t.attrs[i]);
}
function Lm(e, t, n) {
  const r = Nu(e, t, n);
  for (const i in e)
    if (ce(e[i]) || ce(t[i])) {
      const s =
        nr.indexOf(i) !== -1
          ? "attr" + i.charAt(0).toUpperCase() + i.substring(1)
          : i;
      r[s] = e[i];
    }
  return r;
}
class Vx extends Cm {
  constructor() {
    (super(...arguments),
      (this.type = "svg"),
      (this.isSVGTag = !1),
      (this.measureInstanceViewportBox = re));
  }
  getBaseTargetFromProps(t, n) {
    return t[n];
  }
  readValueFromInstance(t, n) {
    if (rr.has(n)) {
      const r = hm(n);
      return (r && r.default) || 0;
    }
    return ((n = Rm.has(n) ? n : wu(n)), t.getAttribute(n));
  }
  scrapeMotionValuesFromProps(t, n, r) {
    return Lm(t, n, r);
  }
  build(t, n, r) {
    Dm(t, n, this.isSVGTag, r.transformTemplate, r.style);
  }
  renderInstance(t, n, r, i) {
    Rx(t, n, r, i);
  }
  mount(t) {
    ((this.isSVGTag = Vm(t.tagName)), super.mount(t));
  }
}
const Lx = Eu.length;
function _m(e) {
  if (!e) return;
  if (!e.isControllingVariants) {
    const n = e.parent ? _m(e.parent) || {} : {};
    return (e.props.initial !== void 0 && (n.initial = e.props.initial), n);
  }
  const t = {};
  for (let n = 0; n < Lx; n++) {
    const r = Eu[n],
      i = e.props[r];
    (qr(i) || i === !1) && (t[r] = i);
  }
  return t;
}
function Im(e, t) {
  if (!Array.isArray(t)) return !1;
  const n = t.length;
  if (n !== e.length) return !1;
  for (let r = 0; r < n; r++) if (t[r] !== e[r]) return !1;
  return !0;
}
const _x = [...Pu].reverse(),
  Ix = Pu.length;
function Fx(e) {
  return (t) =>
    Promise.all(t.map(({ animation: n, options: r }) => L1(e, n, r)));
}
function Ox(e) {
  let t = Fx(e),
    n = kf(),
    r = !0,
    i = !1;
  const s = (u) => (c, f) => {
    var y;
    const d = fn(
      e,
      f,
      u === "exit"
        ? (y = e.presenceContext) == null
          ? void 0
          : y.custom
        : void 0,
    );
    if (d) {
      const { transition: v, transitionEnd: w, ...k } = d;
      c = { ...c, ...k, ...w };
    }
    return c;
  };
  function o(u) {
    t = u(e);
  }
  function a(u) {
    const { props: c } = e,
      f = _m(e.parent) || {},
      d = [],
      y = new Set();
    let v = {},
      w = 1 / 0;
    for (let p = 0; p < Ix; p++) {
      const h = _x[p],
        m = n[h],
        x = c[h] !== void 0 ? c[h] : f[h],
        S = qr(x),
        E = h === u ? m.isActive : null;
      E === !1 && (w = p);
      let N = x === f[h] && x !== c[h] && S;
      if (
        (N && (r || i) && e.manuallyAnimateOnMount && (N = !1),
        (m.protectedKeys = { ...v }),
        (!m.isActive && E === null) ||
          (!x && !m.prevProp) ||
          eo(x) ||
          typeof x == "boolean")
      )
        continue;
      if (h === "exit" && m.isActive && E !== !0) {
        m.prevResolvedValues && (v = { ...v, ...m.prevResolvedValues });
        continue;
      }
      const T = zx(m.prevProp, x);
      let R = T || (h === u && m.isActive && !N && S) || (p > w && S),
        P = !1;
      const I = Array.isArray(x) ? x : [x];
      let K = I.reduce(s(h), {});
      E === !1 && (K = {});
      const { prevResolvedValues: ge = {} } = m,
        De = { ...ge, ...K },
        Ke = (M) => {
          ((R = !0),
            y.has(M) && ((P = !0), y.delete(M)),
            (m.needsAnimating[M] = !0));
          const V = e.getValue(M);
          V && (V.liveStyle = !1);
        };
      for (const M in De) {
        const V = K[M],
          L = ge[M];
        if (v.hasOwnProperty(M)) continue;
        let z = !1;
        (qa(V) && qa(L) ? (z = !Im(V, L)) : (z = V !== L),
          z
            ? V != null
              ? Ke(M)
              : y.add(M)
            : V !== void 0 && y.has(M)
              ? Ke(M)
              : (m.protectedKeys[M] = !0));
      }
      ((m.prevProp = x),
        (m.prevResolvedValues = K),
        m.isActive && (v = { ...v, ...K }),
        (r || i) && e.blockInitialAnimation && (R = !1));
      const Ce = N && T;
      R &&
        (!Ce || P) &&
        d.push(
          ...I.map((M) => {
            const V = { type: h };
            if (
              typeof M == "string" &&
              (r || i) &&
              !Ce &&
              e.manuallyAnimateOnMount &&
              e.parent
            ) {
              const { parent: L } = e,
                z = fn(L, M);
              if (L.enteringChildren && z) {
                const { delayChildren: J } = z.transition || {};
                V.delay = im(L.enteringChildren, e, J);
              }
            }
            return { animation: M, options: V };
          }),
        );
    }
    if (y.size) {
      const p = {};
      if (typeof c.initial != "boolean") {
        const h = fn(e, Array.isArray(c.initial) ? c.initial[0] : c.initial);
        h && h.transition && (p.transition = h.transition);
      }
      (y.forEach((h) => {
        const m = e.getBaseTarget(h),
          x = e.getValue(h);
        (x && (x.liveStyle = !0), (p[h] = m ?? null));
      }),
        d.push({ animation: p }));
    }
    let k = !!d.length;
    return (
      r &&
        (c.initial === !1 || c.initial === c.animate) &&
        !e.manuallyAnimateOnMount &&
        (k = !1),
      (r = !1),
      (i = !1),
      k ? t(d) : Promise.resolve()
    );
  }
  function l(u, c) {
    var d;
    if (n[u].isActive === c) return Promise.resolve();
    ((d = e.variantChildren) == null ||
      d.forEach((y) => {
        var v;
        return (v = y.animationState) == null ? void 0 : v.setActive(u, c);
      }),
      (n[u].isActive = c));
    const f = a(u);
    for (const y in n) n[y].protectedKeys = {};
    return f;
  }
  return {
    animateChanges: a,
    setActive: l,
    setAnimateFunction: o,
    getState: () => n,
    reset: () => {
      ((n = kf()), (i = !0));
    },
  };
}
function zx(e, t) {
  return typeof t == "string" ? t !== e : Array.isArray(t) ? !Im(t, e) : !1;
}
function qt(e = !1) {
  return {
    isActive: e,
    protectedKeys: {},
    needsAnimating: {},
    prevResolvedValues: {},
  };
}
function kf() {
  return {
    animate: qt(!0),
    whileInView: qt(),
    whileHover: qt(),
    whileTap: qt(),
    whileDrag: qt(),
    whileFocus: qt(),
    exit: qt(),
  };
}
function al(e, t) {
  ((e.min = t.min), (e.max = t.max));
}
function Ye(e, t) {
  (al(e.x, t.x), al(e.y, t.y));
}
function Tf(e, t) {
  ((e.translate = t.translate),
    (e.scale = t.scale),
    (e.originPoint = t.originPoint),
    (e.origin = t.origin));
}
const Fm = 1e-4,
  Bx = 1 - Fm,
  bx = 1 + Fm,
  Om = 0.01,
  Ux = 0 - Om,
  $x = 0 + Om;
function we(e) {
  return e.max - e.min;
}
function Wx(e, t, n) {
  return Math.abs(e - t) <= n;
}
function Cf(e, t, n, r = 0.5) {
  ((e.origin = r),
    (e.originPoint = $(t.min, t.max, e.origin)),
    (e.scale = we(n) / we(t)),
    (e.translate = $(n.min, n.max, e.origin) - e.originPoint),
    ((e.scale >= Bx && e.scale <= bx) || isNaN(e.scale)) && (e.scale = 1),
    ((e.translate >= Ux && e.translate <= $x) || isNaN(e.translate)) &&
      (e.translate = 0));
}
function Dr(e, t, n, r) {
  (Cf(e.x, t.x, n.x, r ? r.originX : void 0),
    Cf(e.y, t.y, n.y, r ? r.originY : void 0));
}
function Pf(e, t, n, r = 0) {
  const i = r ? $(n.min, n.max, r) : n.min;
  ((e.min = i + t.min), (e.max = e.min + we(t)));
}
function Hx(e, t, n, r) {
  (Pf(e.x, t.x, n.x, r == null ? void 0 : r.x),
    Pf(e.y, t.y, n.y, r == null ? void 0 : r.y));
}
function Ef(e, t, n, r = 0) {
  const i = r ? $(n.min, n.max, r) : n.min;
  ((e.min = t.min - i), (e.max = e.min + we(t)));
}
function Vs(e, t, n, r) {
  (Ef(e.x, t.x, n.x, r == null ? void 0 : r.x),
    Ef(e.y, t.y, n.y, r == null ? void 0 : r.y));
}
function Mf(e, t, n, r, i) {
  return (
    (e -= t),
    (e = Rs(e, 1 / n, r)),
    i !== void 0 && (e = Rs(e, 1 / i, r)),
    e
  );
}
function Kx(e, t = 0, n = 1, r = 0.5, i, s = e, o = e) {
  if (
    (ct.test(t) &&
      ((t = parseFloat(t)), (t = $(o.min, o.max, t / 100) - o.min)),
    typeof t != "number")
  )
    return;
  let a = $(s.min, s.max, r);
  (e === s && (a -= t),
    (e.min = Mf(e.min, t, n, a, i)),
    (e.max = Mf(e.max, t, n, a, i)));
}
function Nf(e, t, [n, r, i], s, o) {
  Kx(e, t[n], t[r], t[i], t.scale, s, o);
}
const Gx = ["x", "scaleX", "originX"],
  Yx = ["y", "scaleY", "originY"];
function jf(e, t, n, r) {
  (Nf(e.x, t, Gx, n ? n.x : void 0, r ? r.x : void 0),
    Nf(e.y, t, Yx, n ? n.y : void 0, r ? r.y : void 0));
}
function Af(e) {
  return e.translate === 0 && e.scale === 1;
}
function zm(e) {
  return Af(e.x) && Af(e.y);
}
function Df(e, t) {
  return e.min === t.min && e.max === t.max;
}
function Qx(e, t) {
  return Df(e.x, t.x) && Df(e.y, t.y);
}
function Rf(e, t) {
  return (
    Math.round(e.min) === Math.round(t.min) &&
    Math.round(e.max) === Math.round(t.max)
  );
}
function Bm(e, t) {
  return Rf(e.x, t.x) && Rf(e.y, t.y);
}
function Vf(e) {
  return we(e.x) / we(e.y);
}
function Lf(e, t) {
  return (
    e.translate === t.translate &&
    e.scale === t.scale &&
    e.originPoint === t.originPoint
  );
}
function st(e) {
  return [e("x"), e("y")];
}
function Xx(e, t, n) {
  let r = "";
  const i = e.x.translate / t.x,
    s = e.y.translate / t.y,
    o = (n == null ? void 0 : n.z) || 0;
  if (
    ((i || s || o) && (r = `translate3d(${i}px, ${s}px, ${o}px) `),
    (t.x !== 1 || t.y !== 1) && (r += `scale(${1 / t.x}, ${1 / t.y}) `),
    n)
  ) {
    const {
      transformPerspective: u,
      rotate: c,
      rotateX: f,
      rotateY: d,
      skewX: y,
      skewY: v,
    } = n;
    (u && (r = `perspective(${u}px) ${r}`),
      c && (r += `rotate(${c}deg) `),
      f && (r += `rotateX(${f}deg) `),
      d && (r += `rotateY(${d}deg) `),
      y && (r += `skewX(${y}deg) `),
      v && (r += `skewY(${v}deg) `));
  }
  const a = e.x.scale * t.x,
    l = e.y.scale * t.y;
  return ((a !== 1 || l !== 1) && (r += `scale(${a}, ${l})`), r || "none");
}
const bm = [
    "borderTopLeftRadius",
    "borderTopRightRadius",
    "borderBottomLeftRadius",
    "borderBottomRightRadius",
  ],
  Zx = bm.length,
  _f = (e) => (typeof e == "string" ? parseFloat(e) : e),
  If = (e) => typeof e == "number" || D.test(e);
function qx(e, t, n, r, i, s) {
  i
    ? ((e.opacity = $(0, n.opacity ?? 1, Jx(r))),
      (e.opacityExit = $(t.opacity ?? 1, 0, ew(r))))
    : s && (e.opacity = $(t.opacity ?? 1, n.opacity ?? 1, r));
  for (let o = 0; o < Zx; o++) {
    const a = bm[o];
    let l = Ff(t, a),
      u = Ff(n, a);
    if (l === void 0 && u === void 0) continue;
    (l || (l = 0),
      u || (u = 0),
      l === 0 || u === 0 || If(l) === If(u)
        ? ((e[a] = Math.max($(_f(l), _f(u), r), 0)),
          (ct.test(u) || ct.test(l)) && (e[a] += "%"))
        : (e[a] = u));
  }
  (t.rotate || n.rotate) && (e.rotate = $(t.rotate || 0, n.rotate || 0, r));
}
function Ff(e, t) {
  return e[t] !== void 0 ? e[t] : e.borderRadius;
}
const Jx = Um(0, 0.5, Rp),
  ew = Um(0.5, 0.95, $e);
function Um(e, t, n) {
  return (r) => (r < e ? 0 : r > t ? 1 : n(Xr(e, t, r)));
}
function tw(e, t, n) {
  const r = ce(e) ? e : Zn(e);
  return (r.start(vu("", r, t, n)), r.animation);
}
function Jr(e, t, n, r = { passive: !0 }) {
  return (e.addEventListener(t, n, r), () => e.removeEventListener(t, n));
}
const nw = (e, t) => e.depth - t.depth;
class rw {
  constructor() {
    ((this.children = []), (this.isDirty = !1));
  }
  add(t) {
    (ou(this.children, t), (this.isDirty = !0));
  }
  remove(t) {
    (Es(this.children, t), (this.isDirty = !0));
  }
  forEach(t) {
    (this.isDirty && this.children.sort(nw),
      (this.isDirty = !1),
      this.children.forEach(t));
  }
}
function iw(e, t) {
  const n = xe.now(),
    r = ({ timestamp: i }) => {
      const s = i - n;
      s >= t && (Ht(r), e(s - t));
    };
  return (B.setup(r, !0), () => Ht(r));
}
function es(e) {
  return ce(e) ? e.get() : e;
}
class sw {
  constructor() {
    this.members = [];
  }
  add(t) {
    ou(this.members, t);
    for (let n = this.members.length - 1; n >= 0; n--) {
      const r = this.members[n];
      if (r === t || r === this.lead || r === this.prevLead) continue;
      const i = r.instance;
      (!i || i.isConnected === !1) &&
        !r.snapshot &&
        (Es(this.members, r), r.unmount());
    }
    t.scheduleRender();
  }
  remove(t) {
    if (
      (Es(this.members, t),
      t === this.prevLead && (this.prevLead = void 0),
      t === this.lead)
    ) {
      const n = this.members[this.members.length - 1];
      n && this.promote(n);
    }
  }
  relegate(t) {
    var n;
    for (let r = this.members.indexOf(t) - 1; r >= 0; r--) {
      const i = this.members[r];
      if (
        i.isPresent !== !1 &&
        ((n = i.instance) == null ? void 0 : n.isConnected) !== !1
      )
        return (this.promote(i), !0);
    }
    return !1;
  }
  promote(t, n) {
    var i;
    const r = this.lead;
    if (t !== r && ((this.prevLead = r), (this.lead = t), t.show(), r)) {
      (r.updateSnapshot(), t.scheduleRender());
      const { layoutDependency: s } = r.options,
        { layoutDependency: o } = t.options;
      ((s === void 0 || s !== o) &&
        ((t.resumeFrom = r),
        n && (r.preserveOpacity = !0),
        r.snapshot &&
          ((t.snapshot = r.snapshot),
          (t.snapshot.latestValues = r.animationValues || r.latestValues)),
        (i = t.root) != null && i.isUpdating && (t.isLayoutDirty = !0)),
        t.options.crossfade === !1 && r.hide());
    }
  }
  exitAnimationComplete() {
    this.members.forEach((t) => {
      var n, r, i, s, o;
      ((r = (n = t.options).onExitComplete) == null || r.call(n),
        (o =
          (i = t.resumingFrom) == null
            ? void 0
            : (s = i.options).onExitComplete) == null || o.call(s));
    });
  }
  scheduleRender() {
    this.members.forEach((t) => t.instance && t.scheduleRender(!1));
  }
  removeLeadSnapshot() {
    var t;
    (t = this.lead) != null && t.snapshot && (this.lead.snapshot = void 0);
  }
}
const ts = { hasAnimatedSinceResize: !0, hasEverUpdated: !1 },
  zo = ["", "X", "Y", "Z"],
  ow = 1e3;
let aw = 0;
function Bo(e, t, n, r) {
  const { latestValues: i } = t;
  i[e] && ((n[e] = i[e]), t.setStaticValue(e, 0), r && (r[e] = 0));
}
function $m(e) {
  if (((e.hasCheckedOptimisedAppear = !0), e.root === e)) return;
  const { visualElement: t } = e.options;
  if (!t) return;
  const n = um(t);
  if (window.MotionHasOptimisedAnimation(n, "transform")) {
    const { layout: i, layoutId: s } = e.options;
    window.MotionCancelOptimisedAnimation(n, "transform", B, !(i || s));
  }
  const { parent: r } = e;
  r && !r.hasCheckedOptimisedAppear && $m(r);
}
function Wm({
  attachResizeListener: e,
  defaultParent: t,
  measureScroll: n,
  checkIsScrollRoot: r,
  resetTransform: i,
}) {
  return class {
    constructor(o = {}, a = t == null ? void 0 : t()) {
      ((this.id = aw++),
        (this.animationId = 0),
        (this.animationCommitId = 0),
        (this.children = new Set()),
        (this.options = {}),
        (this.isTreeAnimating = !1),
        (this.isAnimationBlocked = !1),
        (this.isLayoutDirty = !1),
        (this.isProjectionDirty = !1),
        (this.isSharedProjectionDirty = !1),
        (this.isTransformDirty = !1),
        (this.updateManuallyBlocked = !1),
        (this.updateBlockedByResize = !1),
        (this.isUpdating = !1),
        (this.isSVG = !1),
        (this.needsReset = !1),
        (this.shouldResetTransform = !1),
        (this.hasCheckedOptimisedAppear = !1),
        (this.treeScale = { x: 1, y: 1 }),
        (this.eventHandlers = new Map()),
        (this.hasTreeAnimated = !1),
        (this.layoutVersion = 0),
        (this.updateScheduled = !1),
        (this.scheduleUpdate = () => this.update()),
        (this.projectionUpdateScheduled = !1),
        (this.checkUpdateFailed = () => {
          this.isUpdating && ((this.isUpdating = !1), this.clearAllSnapshots());
        }),
        (this.updateProjection = () => {
          ((this.projectionUpdateScheduled = !1),
            this.nodes.forEach(cw),
            this.nodes.forEach(yw),
            this.nodes.forEach(gw),
            this.nodes.forEach(fw));
        }),
        (this.resolvedRelativeTargetAt = 0),
        (this.linkedParentVersion = 0),
        (this.hasProjected = !1),
        (this.isVisible = !0),
        (this.animationProgress = 0),
        (this.sharedNodes = new Map()),
        (this.latestValues = o),
        (this.root = a ? a.root || a : this),
        (this.path = a ? [...a.path, a] : []),
        (this.parent = a),
        (this.depth = a ? a.depth + 1 : 0));
      for (let l = 0; l < this.path.length; l++)
        this.path[l].shouldResetTransform = !0;
      this.root === this && (this.nodes = new rw());
    }
    addEventListener(o, a) {
      return (
        this.eventHandlers.has(o) || this.eventHandlers.set(o, new au()),
        this.eventHandlers.get(o).add(a)
      );
    }
    notifyListeners(o, ...a) {
      const l = this.eventHandlers.get(o);
      l && l.notify(...a);
    }
    hasListeners(o) {
      return this.eventHandlers.has(o);
    }
    mount(o) {
      if (this.instance) return;
      ((this.isSVG = Cu(o) && !ux(o)), (this.instance = o));
      const { layoutId: a, layout: l, visualElement: u } = this.options;
      if (
        (u && !u.current && u.mount(o),
        this.root.nodes.add(this),
        this.parent && this.parent.children.add(this),
        this.root.hasTreeAnimated && (l || a) && (this.isLayoutDirty = !0),
        e)
      ) {
        let c,
          f = 0;
        const d = () => (this.root.updateBlockedByResize = !1);
        (B.read(() => {
          f = window.innerWidth;
        }),
          e(o, () => {
            const y = window.innerWidth;
            y !== f &&
              ((f = y),
              (this.root.updateBlockedByResize = !0),
              c && c(),
              (c = iw(d, 250)),
              ts.hasAnimatedSinceResize &&
                ((ts.hasAnimatedSinceResize = !1), this.nodes.forEach(Bf)));
          }));
      }
      (a && this.root.registerSharedNode(a, this),
        this.options.animate !== !1 &&
          u &&
          (a || l) &&
          this.addEventListener(
            "didUpdate",
            ({
              delta: c,
              hasLayoutChanged: f,
              hasRelativeLayoutChanged: d,
              layout: y,
            }) => {
              if (this.isTreeAnimationBlocked()) {
                ((this.target = void 0), (this.relativeTarget = void 0));
                return;
              }
              const v =
                  this.options.transition || u.getDefaultTransition() || kw,
                { onLayoutAnimationStart: w, onLayoutAnimationComplete: k } =
                  u.getProps(),
                p = !this.targetLayout || !Bm(this.targetLayout, y),
                h = !f && d;
              if (
                this.options.layoutRoot ||
                this.resumeFrom ||
                h ||
                (f && (p || !this.currentAnimation))
              ) {
                this.resumeFrom &&
                  ((this.resumingFrom = this.resumeFrom),
                  (this.resumingFrom.resumingFrom = void 0));
                const m = { ...gu(v, "layout"), onPlay: w, onComplete: k };
                ((u.shouldReduceMotion || this.options.layoutRoot) &&
                  ((m.delay = 0), (m.type = !1)),
                  this.startAnimation(m),
                  this.setAnimationOrigin(c, h));
              } else
                (f || Bf(this),
                  this.isLead() &&
                    this.options.onExitComplete &&
                    this.options.onExitComplete());
              this.targetLayout = y;
            },
          ));
    }
    unmount() {
      (this.options.layoutId && this.willUpdate(),
        this.root.nodes.remove(this));
      const o = this.getStack();
      (o && o.remove(this),
        this.parent && this.parent.children.delete(this),
        (this.instance = void 0),
        this.eventHandlers.clear(),
        Ht(this.updateProjection));
    }
    blockUpdate() {
      this.updateManuallyBlocked = !0;
    }
    unblockUpdate() {
      this.updateManuallyBlocked = !1;
    }
    isUpdateBlocked() {
      return this.updateManuallyBlocked || this.updateBlockedByResize;
    }
    isTreeAnimationBlocked() {
      return (
        this.isAnimationBlocked ||
        (this.parent && this.parent.isTreeAnimationBlocked()) ||
        !1
      );
    }
    startUpdate() {
      this.isUpdateBlocked() ||
        ((this.isUpdating = !0),
        this.nodes && this.nodes.forEach(vw),
        this.animationId++);
    }
    getTransformTemplate() {
      const { visualElement: o } = this.options;
      return o && o.getProps().transformTemplate;
    }
    willUpdate(o = !0) {
      if (((this.root.hasTreeAnimated = !0), this.root.isUpdateBlocked())) {
        this.options.onExitComplete && this.options.onExitComplete();
        return;
      }
      if (
        (window.MotionCancelOptimisedAnimation &&
          !this.hasCheckedOptimisedAppear &&
          $m(this),
        !this.root.isUpdating && this.root.startUpdate(),
        this.isLayoutDirty)
      )
        return;
      this.isLayoutDirty = !0;
      for (let c = 0; c < this.path.length; c++) {
        const f = this.path[c];
        ((f.shouldResetTransform = !0),
          (typeof f.latestValues.x == "string" ||
            typeof f.latestValues.y == "string") &&
            (f.isLayoutDirty = !0),
          f.updateScroll("snapshot"),
          f.options.layoutRoot && f.willUpdate(!1));
      }
      const { layoutId: a, layout: l } = this.options;
      if (a === void 0 && !l) return;
      const u = this.getTransformTemplate();
      ((this.prevTransformTemplateValue = u
        ? u(this.latestValues, "")
        : void 0),
        this.updateSnapshot(),
        o && this.notifyListeners("willUpdate"));
    }
    update() {
      if (((this.updateScheduled = !1), this.isUpdateBlocked())) {
        const l = this.updateBlockedByResize;
        (this.unblockUpdate(),
          (this.updateBlockedByResize = !1),
          this.clearAllSnapshots(),
          l && this.nodes.forEach(hw),
          this.nodes.forEach(Of));
        return;
      }
      if (this.animationId <= this.animationCommitId) {
        this.nodes.forEach(zf);
        return;
      }
      ((this.animationCommitId = this.animationId),
        this.isUpdating
          ? ((this.isUpdating = !1),
            this.nodes.forEach(pw),
            this.nodes.forEach(mw),
            this.nodes.forEach(lw),
            this.nodes.forEach(uw))
          : this.nodes.forEach(zf),
        this.clearAllSnapshots());
      const a = xe.now();
      ((ue.delta = ft(0, 1e3 / 60, a - ue.timestamp)),
        (ue.timestamp = a),
        (ue.isProcessing = !0),
        Do.update.process(ue),
        Do.preRender.process(ue),
        Do.render.process(ue),
        (ue.isProcessing = !1));
    }
    didUpdate() {
      this.updateScheduled ||
        ((this.updateScheduled = !0), ku.read(this.scheduleUpdate));
    }
    clearAllSnapshots() {
      (this.nodes.forEach(dw), this.sharedNodes.forEach(xw));
    }
    scheduleUpdateProjection() {
      this.projectionUpdateScheduled ||
        ((this.projectionUpdateScheduled = !0),
        B.preRender(this.updateProjection, !1, !0));
    }
    scheduleCheckAfterUnmount() {
      B.postRender(() => {
        this.isLayoutDirty
          ? this.root.didUpdate()
          : this.root.checkUpdateFailed();
      });
    }
    updateSnapshot() {
      this.snapshot ||
        !this.instance ||
        ((this.snapshot = this.measure()),
        this.snapshot &&
          !we(this.snapshot.measuredBox.x) &&
          !we(this.snapshot.measuredBox.y) &&
          (this.snapshot = void 0));
    }
    updateLayout() {
      if (
        !this.instance ||
        (this.updateScroll(),
        !(this.options.alwaysMeasureLayout && this.isLead()) &&
          !this.isLayoutDirty)
      )
        return;
      if (this.resumeFrom && !this.resumeFrom.instance)
        for (let l = 0; l < this.path.length; l++) this.path[l].updateScroll();
      const o = this.layout;
      ((this.layout = this.measure(!1)),
        this.layoutVersion++,
        this.layoutCorrected || (this.layoutCorrected = re()),
        (this.isLayoutDirty = !1),
        (this.projectionDelta = void 0),
        this.notifyListeners("measure", this.layout.layoutBox));
      const { visualElement: a } = this.options;
      a &&
        a.notify(
          "LayoutMeasure",
          this.layout.layoutBox,
          o ? o.layoutBox : void 0,
        );
    }
    updateScroll(o = "measure") {
      let a = !!(this.options.layoutScroll && this.instance);
      if (
        (this.scroll &&
          this.scroll.animationId === this.root.animationId &&
          this.scroll.phase === o &&
          (a = !1),
        a && this.instance)
      ) {
        const l = r(this.instance);
        this.scroll = {
          animationId: this.root.animationId,
          phase: o,
          isRoot: l,
          offset: n(this.instance),
          wasRoot: this.scroll ? this.scroll.isRoot : l,
        };
      }
    }
    resetTransform() {
      if (!i) return;
      const o =
          this.isLayoutDirty ||
          this.shouldResetTransform ||
          this.options.alwaysMeasureLayout,
        a = this.projectionDelta && !zm(this.projectionDelta),
        l = this.getTransformTemplate(),
        u = l ? l(this.latestValues, "") : void 0,
        c = u !== this.prevTransformTemplateValue;
      o &&
        this.instance &&
        (a || tn(this.latestValues) || c) &&
        (i(this.instance, u),
        (this.shouldResetTransform = !1),
        this.scheduleRender());
    }
    measure(o = !0) {
      const a = this.measurePageBox();
      let l = this.removeElementScroll(a);
      return (
        o && (l = this.removeTransform(l)),
        Tw(l),
        {
          animationId: this.root.animationId,
          measuredBox: a,
          layoutBox: l,
          latestValues: {},
          source: this.id,
        }
      );
    }
    measurePageBox() {
      var u;
      const { visualElement: o } = this.options;
      if (!o) return re();
      const a = o.measureViewportBox();
      if (
        !(
          ((u = this.scroll) == null ? void 0 : u.wasRoot) || this.path.some(Cw)
        )
      ) {
        const { scroll: c } = this.root;
        c && (ot(a.x, c.offset.x), ot(a.y, c.offset.y));
      }
      return a;
    }
    removeElementScroll(o) {
      var l;
      const a = re();
      if ((Ye(a, o), (l = this.scroll) != null && l.wasRoot)) return a;
      for (let u = 0; u < this.path.length; u++) {
        const c = this.path[u],
          { scroll: f, options: d } = c;
        c !== this.root &&
          f &&
          d.layoutScroll &&
          (f.wasRoot && Ye(a, o), ot(a.x, f.offset.x), ot(a.y, f.offset.y));
      }
      return a;
    }
    applyTransform(o, a = !1, l) {
      var c, f;
      const u = l || re();
      Ye(u, o);
      for (let d = 0; d < this.path.length; d++) {
        const y = this.path[d];
        (!a &&
          y.options.layoutScroll &&
          y.scroll &&
          y !== y.root &&
          (ot(u.x, -y.scroll.offset.x), ot(u.y, -y.scroll.offset.y)),
          tn(y.latestValues) &&
            Ji(
              u,
              y.latestValues,
              (c = y.layout) == null ? void 0 : c.layoutBox,
            ));
      }
      return (
        tn(this.latestValues) &&
          Ji(
            u,
            this.latestValues,
            (f = this.layout) == null ? void 0 : f.layoutBox,
          ),
        u
      );
    }
    removeTransform(o) {
      var l;
      const a = re();
      Ye(a, o);
      for (let u = 0; u < this.path.length; u++) {
        const c = this.path[u];
        if (!tn(c.latestValues)) continue;
        let f;
        (c.instance &&
          (il(c.latestValues) && c.updateSnapshot(),
          (f = re()),
          Ye(f, c.measurePageBox())),
          jf(
            a,
            c.latestValues,
            (l = c.snapshot) == null ? void 0 : l.layoutBox,
            f,
          ));
      }
      return (tn(this.latestValues) && jf(a, this.latestValues), a);
    }
    setTargetDelta(o) {
      ((this.targetDelta = o),
        this.root.scheduleUpdateProjection(),
        (this.isProjectionDirty = !0));
    }
    setOptions(o) {
      this.options = {
        ...this.options,
        ...o,
        crossfade: o.crossfade !== void 0 ? o.crossfade : !0,
      };
    }
    clearMeasurements() {
      ((this.scroll = void 0),
        (this.layout = void 0),
        (this.snapshot = void 0),
        (this.prevTransformTemplateValue = void 0),
        (this.targetDelta = void 0),
        (this.target = void 0),
        (this.isLayoutDirty = !1));
    }
    forceRelativeParentToResolveTarget() {
      this.relativeParent &&
        this.relativeParent.resolvedRelativeTargetAt !== ue.timestamp &&
        this.relativeParent.resolveTargetDelta(!0);
    }
    resolveTargetDelta(o = !1) {
      var y;
      const a = this.getLead();
      (this.isProjectionDirty || (this.isProjectionDirty = a.isProjectionDirty),
        this.isTransformDirty || (this.isTransformDirty = a.isTransformDirty),
        this.isSharedProjectionDirty ||
          (this.isSharedProjectionDirty = a.isSharedProjectionDirty));
      const l = !!this.resumingFrom || this !== a;
      if (
        !(
          o ||
          (l && this.isSharedProjectionDirty) ||
          this.isProjectionDirty ||
          ((y = this.parent) != null && y.isProjectionDirty) ||
          this.attemptToResolveRelativeTarget ||
          this.root.updateBlockedByResize
        )
      )
        return;
      const { layout: c, layoutId: f } = this.options;
      if (!this.layout || !(c || f)) return;
      this.resolvedRelativeTargetAt = ue.timestamp;
      const d = this.getClosestProjectingParent();
      (d &&
        this.linkedParentVersion !== d.layoutVersion &&
        !d.options.layoutRoot &&
        this.removeRelativeTarget(),
        !this.targetDelta &&
          !this.relativeTarget &&
          (this.options.layoutAnchor !== !1 && d && d.layout
            ? this.createRelativeTarget(
                d,
                this.layout.layoutBox,
                d.layout.layoutBox,
              )
            : this.removeRelativeTarget()),
        !(!this.relativeTarget && !this.targetDelta) &&
          (this.target ||
            ((this.target = re()), (this.targetWithTransforms = re())),
          this.relativeTarget &&
          this.relativeTargetOrigin &&
          this.relativeParent &&
          this.relativeParent.target
            ? (this.forceRelativeParentToResolveTarget(),
              Hx(
                this.target,
                this.relativeTarget,
                this.relativeParent.target,
                this.options.layoutAnchor || void 0,
              ))
            : this.targetDelta
              ? (this.resumingFrom
                  ? this.applyTransform(this.layout.layoutBox, !1, this.target)
                  : Ye(this.target, this.layout.layoutBox),
                Mm(this.target, this.targetDelta))
              : Ye(this.target, this.layout.layoutBox),
          this.attemptToResolveRelativeTarget &&
            ((this.attemptToResolveRelativeTarget = !1),
            this.options.layoutAnchor !== !1 &&
            d &&
            !!d.resumingFrom == !!this.resumingFrom &&
            !d.options.layoutScroll &&
            d.target &&
            this.animationProgress !== 1
              ? this.createRelativeTarget(d, this.target, d.target)
              : (this.relativeParent = this.relativeTarget = void 0))));
    }
    getClosestProjectingParent() {
      if (
        !(
          !this.parent ||
          il(this.parent.latestValues) ||
          Em(this.parent.latestValues)
        )
      )
        return this.parent.isProjecting()
          ? this.parent
          : this.parent.getClosestProjectingParent();
    }
    isProjecting() {
      return !!(
        (this.relativeTarget || this.targetDelta || this.options.layoutRoot) &&
        this.layout
      );
    }
    createRelativeTarget(o, a, l) {
      ((this.relativeParent = o),
        (this.linkedParentVersion = o.layoutVersion),
        this.forceRelativeParentToResolveTarget(),
        (this.relativeTarget = re()),
        (this.relativeTargetOrigin = re()),
        Vs(
          this.relativeTargetOrigin,
          a,
          l,
          this.options.layoutAnchor || void 0,
        ),
        Ye(this.relativeTarget, this.relativeTargetOrigin));
    }
    removeRelativeTarget() {
      this.relativeParent = this.relativeTarget = void 0;
    }
    calcProjection() {
      var v;
      const o = this.getLead(),
        a = !!this.resumingFrom || this !== o;
      let l = !0;
      if (
        ((this.isProjectionDirty ||
          ((v = this.parent) != null && v.isProjectionDirty)) &&
          (l = !1),
        a &&
          (this.isSharedProjectionDirty || this.isTransformDirty) &&
          (l = !1),
        this.resolvedRelativeTargetAt === ue.timestamp && (l = !1),
        l)
      )
        return;
      const { layout: u, layoutId: c } = this.options;
      if (
        ((this.isTreeAnimating = !!(
          (this.parent && this.parent.isTreeAnimating) ||
          this.currentAnimation ||
          this.pendingAnimation
        )),
        this.isTreeAnimating ||
          (this.targetDelta = this.relativeTarget = void 0),
        !this.layout || !(u || c))
      )
        return;
      Ye(this.layoutCorrected, this.layout.layoutBox);
      const f = this.treeScale.x,
        d = this.treeScale.y;
      (wx(this.layoutCorrected, this.treeScale, this.path, a),
        o.layout &&
          !o.target &&
          (this.treeScale.x !== 1 || this.treeScale.y !== 1) &&
          ((o.target = o.layout.layoutBox), (o.targetWithTransforms = re())));
      const { target: y } = o;
      if (!y) {
        this.prevProjectionDelta &&
          (this.createProjectionDeltas(), this.scheduleRender());
        return;
      }
      (!this.projectionDelta || !this.prevProjectionDelta
        ? this.createProjectionDeltas()
        : (Tf(this.prevProjectionDelta.x, this.projectionDelta.x),
          Tf(this.prevProjectionDelta.y, this.projectionDelta.y)),
        Dr(this.projectionDelta, this.layoutCorrected, y, this.latestValues),
        (this.treeScale.x !== f ||
          this.treeScale.y !== d ||
          !Lf(this.projectionDelta.x, this.prevProjectionDelta.x) ||
          !Lf(this.projectionDelta.y, this.prevProjectionDelta.y)) &&
          ((this.hasProjected = !0),
          this.scheduleRender(),
          this.notifyListeners("projectionUpdate", y)));
    }
    hide() {
      this.isVisible = !1;
    }
    show() {
      this.isVisible = !0;
    }
    scheduleRender(o = !0) {
      var a;
      if (((a = this.options.visualElement) == null || a.scheduleRender(), o)) {
        const l = this.getStack();
        l && l.scheduleRender();
      }
      this.resumingFrom &&
        !this.resumingFrom.instance &&
        (this.resumingFrom = void 0);
    }
    createProjectionDeltas() {
      ((this.prevProjectionDelta = _n()),
        (this.projectionDelta = _n()),
        (this.projectionDeltaWithTransform = _n()));
    }
    setAnimationOrigin(o, a = !1) {
      const l = this.snapshot,
        u = l ? l.latestValues : {},
        c = { ...this.latestValues },
        f = _n();
      ((!this.relativeParent || !this.relativeParent.options.layoutRoot) &&
        (this.relativeTarget = this.relativeTargetOrigin = void 0),
        (this.attemptToResolveRelativeTarget = !a));
      const d = re(),
        y = l ? l.source : void 0,
        v = this.layout ? this.layout.source : void 0,
        w = y !== v,
        k = this.getStack(),
        p = !k || k.members.length <= 1,
        h = !!(w && !p && this.options.crossfade === !0 && !this.path.some(Sw));
      this.animationProgress = 0;
      let m;
      ((this.mixTargetDelta = (x) => {
        const S = x / 1e3;
        (bf(f.x, o.x, S),
          bf(f.y, o.y, S),
          this.setTargetDelta(f),
          this.relativeTarget &&
            this.relativeTargetOrigin &&
            this.layout &&
            this.relativeParent &&
            this.relativeParent.layout &&
            (Vs(
              d,
              this.layout.layoutBox,
              this.relativeParent.layout.layoutBox,
              this.options.layoutAnchor || void 0,
            ),
            ww(this.relativeTarget, this.relativeTargetOrigin, d, S),
            m && Qx(this.relativeTarget, m) && (this.isProjectionDirty = !1),
            m || (m = re()),
            Ye(m, this.relativeTarget)),
          w &&
            ((this.animationValues = c), qx(c, u, this.latestValues, S, h, p)),
          this.root.scheduleUpdateProjection(),
          this.scheduleRender(),
          (this.animationProgress = S));
      }),
        this.mixTargetDelta(this.options.layoutRoot ? 1e3 : 0));
    }
    startAnimation(o) {
      var a, l, u;
      (this.notifyListeners("animationStart"),
        (a = this.currentAnimation) == null || a.stop(),
        (u = (l = this.resumingFrom) == null ? void 0 : l.currentAnimation) ==
          null || u.stop(),
        this.pendingAnimation &&
          (Ht(this.pendingAnimation), (this.pendingAnimation = void 0)),
        (this.pendingAnimation = B.update(() => {
          ((ts.hasAnimatedSinceResize = !0),
            this.motionValue || (this.motionValue = Zn(0)),
            this.motionValue.jump(0, !1),
            (this.currentAnimation = tw(this.motionValue, [0, 1e3], {
              ...o,
              velocity: 0,
              isSync: !0,
              onUpdate: (c) => {
                (this.mixTargetDelta(c), o.onUpdate && o.onUpdate(c));
              },
              onStop: () => {},
              onComplete: () => {
                (o.onComplete && o.onComplete(), this.completeAnimation());
              },
            })),
            this.resumingFrom &&
              (this.resumingFrom.currentAnimation = this.currentAnimation),
            (this.pendingAnimation = void 0));
        })));
    }
    completeAnimation() {
      this.resumingFrom &&
        ((this.resumingFrom.currentAnimation = void 0),
        (this.resumingFrom.preserveOpacity = void 0));
      const o = this.getStack();
      (o && o.exitAnimationComplete(),
        (this.resumingFrom =
          this.currentAnimation =
          this.animationValues =
            void 0),
        this.notifyListeners("animationComplete"));
    }
    finishAnimation() {
      (this.currentAnimation &&
        (this.mixTargetDelta && this.mixTargetDelta(ow),
        this.currentAnimation.stop()),
        this.completeAnimation());
    }
    applyTransformsToTarget() {
      const o = this.getLead();
      let {
        targetWithTransforms: a,
        target: l,
        layout: u,
        latestValues: c,
      } = o;
      if (!(!a || !l || !u)) {
        if (
          this !== o &&
          this.layout &&
          u &&
          Hm(this.options.animationType, this.layout.layoutBox, u.layoutBox)
        ) {
          l = this.target || re();
          const f = we(this.layout.layoutBox.x);
          ((l.x.min = o.target.x.min), (l.x.max = l.x.min + f));
          const d = we(this.layout.layoutBox.y);
          ((l.y.min = o.target.y.min), (l.y.max = l.y.min + d));
        }
        (Ye(a, l),
          Ji(a, c),
          Dr(this.projectionDeltaWithTransform, this.layoutCorrected, a, c));
      }
    }
    registerSharedNode(o, a) {
      (this.sharedNodes.has(o) || this.sharedNodes.set(o, new sw()),
        this.sharedNodes.get(o).add(a));
      const u = a.options.initialPromotionConfig;
      a.promote({
        transition: u ? u.transition : void 0,
        preserveFollowOpacity:
          u && u.shouldPreserveFollowOpacity
            ? u.shouldPreserveFollowOpacity(a)
            : void 0,
      });
    }
    isLead() {
      const o = this.getStack();
      return o ? o.lead === this : !0;
    }
    getLead() {
      var a;
      const { layoutId: o } = this.options;
      return o
        ? ((a = this.getStack()) == null ? void 0 : a.lead) || this
        : this;
    }
    getPrevLead() {
      var a;
      const { layoutId: o } = this.options;
      return o ? ((a = this.getStack()) == null ? void 0 : a.prevLead) : void 0;
    }
    getStack() {
      const { layoutId: o } = this.options;
      if (o) return this.root.sharedNodes.get(o);
    }
    promote({ needsReset: o, transition: a, preserveFollowOpacity: l } = {}) {
      const u = this.getStack();
      (u && u.promote(this, l),
        o && ((this.projectionDelta = void 0), (this.needsReset = !0)),
        a && this.setOptions({ transition: a }));
    }
    relegate() {
      const o = this.getStack();
      return o ? o.relegate(this) : !1;
    }
    resetSkewAndRotation() {
      const { visualElement: o } = this.options;
      if (!o) return;
      let a = !1;
      const { latestValues: l } = o;
      if (
        ((l.z ||
          l.rotate ||
          l.rotateX ||
          l.rotateY ||
          l.rotateZ ||
          l.skewX ||
          l.skewY) &&
          (a = !0),
        !a)
      )
        return;
      const u = {};
      l.z && Bo("z", o, u, this.animationValues);
      for (let c = 0; c < zo.length; c++)
        (Bo(`rotate${zo[c]}`, o, u, this.animationValues),
          Bo(`skew${zo[c]}`, o, u, this.animationValues));
      o.render();
      for (const c in u)
        (o.setStaticValue(c, u[c]),
          this.animationValues && (this.animationValues[c] = u[c]));
      o.scheduleRender();
    }
    applyProjectionStyles(o, a) {
      if (!this.instance || this.isSVG) return;
      if (!this.isVisible) {
        o.visibility = "hidden";
        return;
      }
      const l = this.getTransformTemplate();
      if (this.needsReset) {
        ((this.needsReset = !1),
          (o.visibility = ""),
          (o.opacity = ""),
          (o.pointerEvents = es(a == null ? void 0 : a.pointerEvents) || ""),
          (o.transform = l ? l(this.latestValues, "") : "none"));
        return;
      }
      const u = this.getLead();
      if (!this.projectionDelta || !this.layout || !u.target) {
        (this.options.layoutId &&
          ((o.opacity =
            this.latestValues.opacity !== void 0
              ? this.latestValues.opacity
              : 1),
          (o.pointerEvents = es(a == null ? void 0 : a.pointerEvents) || "")),
          this.hasProjected &&
            !tn(this.latestValues) &&
            ((o.transform = l ? l({}, "") : "none"), (this.hasProjected = !1)));
        return;
      }
      o.visibility = "";
      const c = u.animationValues || u.latestValues;
      this.applyTransformsToTarget();
      let f = Xx(this.projectionDeltaWithTransform, this.treeScale, c);
      (l && (f = l(c, f)), (o.transform = f));
      const { x: d, y } = this.projectionDelta;
      ((o.transformOrigin = `${d.origin * 100}% ${y.origin * 100}% 0`),
        u.animationValues
          ? (o.opacity =
              u === this
                ? (c.opacity ?? this.latestValues.opacity ?? 1)
                : this.preserveOpacity
                  ? this.latestValues.opacity
                  : c.opacityExit)
          : (o.opacity =
              u === this
                ? c.opacity !== void 0
                  ? c.opacity
                  : ""
                : c.opacityExit !== void 0
                  ? c.opacityExit
                  : 0));
      for (const v in ol) {
        if (c[v] === void 0) continue;
        const { correct: w, applyTo: k, isCSSVariable: p } = ol[v],
          h = f === "none" ? c[v] : w(c[v], u);
        if (k) {
          const m = k.length;
          for (let x = 0; x < m; x++) o[k[x]] = h;
        } else
          p ? (this.options.visualElement.renderState.vars[v] = h) : (o[v] = h);
      }
      this.options.layoutId &&
        (o.pointerEvents =
          u === this ? es(a == null ? void 0 : a.pointerEvents) || "" : "none");
    }
    clearSnapshot() {
      this.resumeFrom = this.snapshot = void 0;
    }
    resetTree() {
      (this.root.nodes.forEach((o) => {
        var a;
        return (a = o.currentAnimation) == null ? void 0 : a.stop();
      }),
        this.root.nodes.forEach(Of),
        this.root.sharedNodes.clear());
    }
  };
}
function lw(e) {
  e.updateLayout();
}
function uw(e) {
  var n;
  const t = ((n = e.resumeFrom) == null ? void 0 : n.snapshot) || e.snapshot;
  if (e.isLead() && e.layout && t && e.hasListeners("didUpdate")) {
    const { layoutBox: r, measuredBox: i } = e.layout,
      { animationType: s } = e.options,
      o = t.source !== e.layout.source;
    if (s === "size")
      st((f) => {
        const d = o ? t.measuredBox[f] : t.layoutBox[f],
          y = we(d);
        ((d.min = r[f].min), (d.max = d.min + y));
      });
    else if (s === "x" || s === "y") {
      const f = s === "x" ? "y" : "x";
      al(o ? t.measuredBox[f] : t.layoutBox[f], r[f]);
    } else
      Hm(s, t.layoutBox, r) &&
        st((f) => {
          const d = o ? t.measuredBox[f] : t.layoutBox[f],
            y = we(r[f]);
          ((d.max = d.min + y),
            e.relativeTarget &&
              !e.currentAnimation &&
              ((e.isProjectionDirty = !0),
              (e.relativeTarget[f].max = e.relativeTarget[f].min + y)));
        });
    const a = _n();
    Dr(a, r, t.layoutBox);
    const l = _n();
    o ? Dr(l, e.applyTransform(i, !0), t.measuredBox) : Dr(l, r, t.layoutBox);
    const u = !zm(a);
    let c = !1;
    if (!e.resumeFrom) {
      const f = e.getClosestProjectingParent();
      if (f && !f.resumeFrom) {
        const { snapshot: d, layout: y } = f;
        if (d && y) {
          const v = e.options.layoutAnchor || void 0,
            w = re();
          Vs(w, t.layoutBox, d.layoutBox, v);
          const k = re();
          (Vs(k, r, y.layoutBox, v),
            Bm(w, k) || (c = !0),
            f.options.layoutRoot &&
              ((e.relativeTarget = k),
              (e.relativeTargetOrigin = w),
              (e.relativeParent = f)));
        }
      }
    }
    e.notifyListeners("didUpdate", {
      layout: r,
      snapshot: t,
      delta: l,
      layoutDelta: a,
      hasLayoutChanged: u,
      hasRelativeLayoutChanged: c,
    });
  } else if (e.isLead()) {
    const { onExitComplete: r } = e.options;
    r && r();
  }
  e.options.transition = void 0;
}
function cw(e) {
  e.parent &&
    (e.isProjecting() || (e.isProjectionDirty = e.parent.isProjectionDirty),
    e.isSharedProjectionDirty ||
      (e.isSharedProjectionDirty = !!(
        e.isProjectionDirty ||
        e.parent.isProjectionDirty ||
        e.parent.isSharedProjectionDirty
      )),
    e.isTransformDirty || (e.isTransformDirty = e.parent.isTransformDirty));
}
function fw(e) {
  e.isProjectionDirty = e.isSharedProjectionDirty = e.isTransformDirty = !1;
}
function dw(e) {
  e.clearSnapshot();
}
function Of(e) {
  e.clearMeasurements();
}
function hw(e) {
  ((e.isLayoutDirty = !0), e.updateLayout());
}
function zf(e) {
  e.isLayoutDirty = !1;
}
function pw(e) {
  e.isAnimationBlocked &&
    e.layout &&
    !e.isLayoutDirty &&
    ((e.snapshot = e.layout), (e.isLayoutDirty = !0));
}
function mw(e) {
  const { visualElement: t } = e.options;
  (t && t.getProps().onBeforeLayoutMeasure && t.notify("BeforeLayoutMeasure"),
    e.resetTransform());
}
function Bf(e) {
  (e.finishAnimation(),
    (e.targetDelta = e.relativeTarget = e.target = void 0),
    (e.isProjectionDirty = !0));
}
function yw(e) {
  e.resolveTargetDelta();
}
function gw(e) {
  e.calcProjection();
}
function vw(e) {
  e.resetSkewAndRotation();
}
function xw(e) {
  e.removeLeadSnapshot();
}
function bf(e, t, n) {
  ((e.translate = $(t.translate, 0, n)),
    (e.scale = $(t.scale, 1, n)),
    (e.origin = t.origin),
    (e.originPoint = t.originPoint));
}
function Uf(e, t, n, r) {
  ((e.min = $(t.min, n.min, r)), (e.max = $(t.max, n.max, r)));
}
function ww(e, t, n, r) {
  (Uf(e.x, t.x, n.x, r), Uf(e.y, t.y, n.y, r));
}
function Sw(e) {
  return e.animationValues && e.animationValues.opacityExit !== void 0;
}
const kw = { duration: 0.45, ease: [0.4, 0, 0.1, 1] },
  $f = (e) =>
    typeof navigator < "u" &&
    navigator.userAgent &&
    navigator.userAgent.toLowerCase().includes(e),
  Wf = $f("applewebkit/") && !$f("chrome/") ? Math.round : $e;
function Hf(e) {
  ((e.min = Wf(e.min)), (e.max = Wf(e.max)));
}
function Tw(e) {
  (Hf(e.x), Hf(e.y));
}
function Hm(e, t, n) {
  return (
    e === "position" || (e === "preserve-aspect" && !Wx(Vf(t), Vf(n), 0.2))
  );
}
function Cw(e) {
  var t;
  return e !== e.root && ((t = e.scroll) == null ? void 0 : t.wasRoot);
}
const Pw = Wm({
    attachResizeListener: (e, t) => Jr(e, "resize", t),
    measureScroll: () => {
      var e, t;
      return {
        x:
          document.documentElement.scrollLeft ||
          ((e = document.body) == null ? void 0 : e.scrollLeft) ||
          0,
        y:
          document.documentElement.scrollTop ||
          ((t = document.body) == null ? void 0 : t.scrollTop) ||
          0,
      };
    },
    checkIsScrollRoot: () => !0,
  }),
  bo = { current: void 0 },
  Km = Wm({
    measureScroll: (e) => ({ x: e.scrollLeft, y: e.scrollTop }),
    defaultParent: () => {
      if (!bo.current) {
        const e = new Pw({});
        (e.mount(window), e.setOptions({ layoutScroll: !0 }), (bo.current = e));
      }
      return bo.current;
    },
    resetTransform: (e, t) => {
      e.style.transform = t !== void 0 ? t : "none";
    },
    checkIsScrollRoot: (e) => window.getComputedStyle(e).position === "fixed",
  }),
  ju = j.createContext({
    transformPagePoint: (e) => e,
    isStatic: !1,
    reducedMotion: "never",
  });
function Kf(e, t) {
  if (typeof e == "function") return e(t);
  e != null && (e.current = t);
}
function Ew(...e) {
  return (t) => {
    let n = !1;
    const r = e.map((i) => {
      const s = Kf(i, t);
      return (!n && typeof s == "function" && (n = !0), s);
    });
    if (n)
      return () => {
        for (let i = 0; i < r.length; i++) {
          const s = r[i];
          typeof s == "function" ? s() : Kf(e[i], null);
        }
      };
  };
}
function Mw(...e) {
  return j.useCallback(Ew(...e), e);
}
class Nw extends j.Component {
  getSnapshotBeforeUpdate(t) {
    const n = this.props.childRef.current;
    if (
      Qi(n) &&
      t.isPresent &&
      !this.props.isPresent &&
      this.props.pop !== !1
    ) {
      const r = n.offsetParent,
        i = (Qi(r) && r.offsetWidth) || 0,
        s = (Qi(r) && r.offsetHeight) || 0,
        o = getComputedStyle(n),
        a = this.props.sizeRef.current;
      ((a.height = parseFloat(o.height)),
        (a.width = parseFloat(o.width)),
        (a.top = n.offsetTop),
        (a.left = n.offsetLeft),
        (a.right = i - a.width - a.left),
        (a.bottom = s - a.height - a.top));
    }
    return null;
  }
  componentDidUpdate() {}
  render() {
    return this.props.children;
  }
}
function jw({
  children: e,
  isPresent: t,
  anchorX: n,
  anchorY: r,
  root: i,
  pop: s,
}) {
  var d;
  const o = j.useId(),
    a = j.useRef(null),
    l = j.useRef({ width: 0, height: 0, top: 0, left: 0, right: 0, bottom: 0 }),
    { nonce: u } = j.useContext(ju),
    c =
      ((d = e.props) == null ? void 0 : d.ref) ?? (e == null ? void 0 : e.ref),
    f = Mw(a, c);
  return (
    j.useInsertionEffect(() => {
      const {
        width: y,
        height: v,
        top: w,
        left: k,
        right: p,
        bottom: h,
      } = l.current;
      if (t || s === !1 || !a.current || !y || !v) return;
      const m = n === "left" ? `left: ${k}` : `right: ${p}`,
        x = r === "bottom" ? `bottom: ${h}` : `top: ${w}`;
      a.current.dataset.motionPopId = o;
      const S = document.createElement("style");
      u && (S.nonce = u);
      const E = i ?? document.head;
      return (
        E.appendChild(S),
        S.sheet &&
          S.sheet.insertRule(`
          [data-motion-pop-id="${o}"] {
            position: absolute !important;
            width: ${y}px !important;
            height: ${v}px !important;
            ${m}px !important;
            ${x}px !important;
          }
        `),
        () => {
          var N;
          ((N = a.current) == null || N.removeAttribute("data-motion-pop-id"),
            E.contains(S) && E.removeChild(S));
        }
      );
    }, [t]),
    g.jsx(Nw, {
      isPresent: t,
      childRef: a,
      sizeRef: l,
      pop: s,
      children: s === !1 ? e : j.cloneElement(e, { ref: f }),
    })
  );
}
const Aw = ({
  children: e,
  initial: t,
  isPresent: n,
  onExitComplete: r,
  custom: i,
  presenceAffectsLayout: s,
  mode: o,
  anchorX: a,
  anchorY: l,
  root: u,
}) => {
  const c = su(Dw),
    f = j.useId();
  let d = !0,
    y = j.useMemo(
      () => (
        (d = !1),
        {
          id: f,
          initial: t,
          isPresent: n,
          custom: i,
          onExitComplete: (v) => {
            c.set(v, !0);
            for (const w of c.values()) if (!w) return;
            r && r();
          },
          register: (v) => (c.set(v, !1), () => c.delete(v)),
        }
      ),
      [n, c, r],
    );
  return (
    s && d && (y = { ...y }),
    j.useMemo(() => {
      c.forEach((v, w) => c.set(w, !1));
    }, [n]),
    j.useEffect(() => {
      !n && !c.size && r && r();
    }, [n]),
    (e = g.jsx(jw, {
      pop: o === "popLayout",
      isPresent: n,
      anchorX: a,
      anchorY: l,
      root: u,
      children: e,
    })),
    g.jsx(Zs.Provider, { value: y, children: e })
  );
};
function Dw() {
  return new Map();
}
function Gm(e = !0) {
  const t = j.useContext(Zs);
  if (t === null) return [!0, null];
  const { isPresent: n, onExitComplete: r, register: i } = t,
    s = j.useId();
  j.useEffect(() => {
    if (e) return i(s);
  }, [e]);
  const o = j.useCallback(() => e && r && r(s), [s, r, e]);
  return !n && r ? [!1, o] : [!0];
}
const Vi = (e) => e.key || "";
function Gf(e) {
  const t = [];
  return (
    j.Children.forEach(e, (n) => {
      j.isValidElement(n) && t.push(n);
    }),
    t
  );
}
const Rw = ({
    children: e,
    custom: t,
    initial: n = !0,
    onExitComplete: r,
    presenceAffectsLayout: i = !0,
    mode: s = "sync",
    propagate: o = !1,
    anchorX: a = "left",
    anchorY: l = "top",
    root: u,
  }) => {
    const [c, f] = Gm(o),
      d = j.useMemo(() => Gf(e), [e]),
      y = o && !c ? [] : d.map(Vi),
      v = j.useRef(!0),
      w = j.useRef(d),
      k = su(() => new Map()),
      p = j.useRef(new Set()),
      [h, m] = j.useState(d),
      [x, S] = j.useState(d);
    wp(() => {
      ((v.current = !1), (w.current = d));
      for (let T = 0; T < x.length; T++) {
        const R = Vi(x[T]);
        y.includes(R)
          ? (k.delete(R), p.current.delete(R))
          : k.get(R) !== !0 && k.set(R, !1);
      }
    }, [x, y.length, y.join("-")]);
    const E = [];
    if (d !== h) {
      let T = [...d];
      for (let R = 0; R < x.length; R++) {
        const P = x[R],
          I = Vi(P);
        y.includes(I) || (T.splice(R, 0, P), E.push(P));
      }
      return (s === "wait" && E.length && (T = E), S(Gf(T)), m(d), null);
    }
    const { forceRender: N } = j.useContext(iu);
    return g.jsx(g.Fragment, {
      children: x.map((T) => {
        const R = Vi(T),
          P = o && !c ? !1 : d === x || y.includes(R),
          I = () => {
            if (p.current.has(R)) return;
            if (k.has(R)) (p.current.add(R), k.set(R, !0));
            else return;
            let K = !0;
            (k.forEach((ge) => {
              ge || (K = !1);
            }),
              K &&
                (N == null || N(),
                S(w.current),
                o && (f == null || f()),
                r && r()));
          };
        return g.jsx(
          Aw,
          {
            isPresent: P,
            initial: !v.current || n ? void 0 : !1,
            custom: t,
            presenceAffectsLayout: i,
            mode: s,
            root: u,
            onExitComplete: P ? void 0 : I,
            anchorX: a,
            anchorY: l,
            children: T,
          },
          R,
        );
      }),
    });
  },
  Ym = j.createContext({ strict: !1 }),
  Yf = {
    animation: [
      "animate",
      "variants",
      "whileHover",
      "whileTap",
      "exit",
      "whileInView",
      "whileFocus",
      "whileDrag",
    ],
    exit: ["exit"],
    drag: ["drag", "dragControls"],
    focus: ["whileFocus"],
    hover: ["whileHover", "onHoverStart", "onHoverEnd"],
    tap: ["whileTap", "onTap", "onTapStart", "onTapCancel"],
    pan: ["onPan", "onPanStart", "onPanSessionStart", "onPanEnd"],
    inView: ["whileInView", "onViewportEnter", "onViewportLeave"],
    layout: ["layout", "layoutId"],
  };
let Qf = !1;
function Vw() {
  if (Qf) return;
  const e = {};
  for (const t in Yf) e[t] = { isEnabled: (n) => Yf[t].some((r) => !!n[r]) };
  (Tm(e), (Qf = !0));
}
function Qm() {
  return (Vw(), yx());
}
function Lw(e) {
  const t = Qm();
  for (const n in e) t[n] = { ...t[n], ...e[n] };
  Tm(t);
}
const _w = new Set([
  "animate",
  "exit",
  "variants",
  "initial",
  "style",
  "values",
  "variants",
  "transition",
  "transformTemplate",
  "custom",
  "inherit",
  "onBeforeLayoutMeasure",
  "onAnimationStart",
  "onAnimationComplete",
  "onUpdate",
  "onDragStart",
  "onDrag",
  "onDragEnd",
  "onMeasureDragConstraints",
  "onDirectionLock",
  "onDragTransitionEnd",
  "_dragX",
  "_dragY",
  "onHoverStart",
  "onHoverEnd",
  "onViewportEnter",
  "onViewportLeave",
  "globalTapTarget",
  "propagate",
  "ignoreStrict",
  "viewport",
]);
function Ls(e) {
  return (
    e.startsWith("while") ||
    (e.startsWith("drag") && e !== "draggable") ||
    e.startsWith("layout") ||
    e.startsWith("onTap") ||
    e.startsWith("onPan") ||
    e.startsWith("onLayout") ||
    _w.has(e)
  );
}
let Xm = (e) => !Ls(e);
function Iw(e) {
  typeof e == "function" && (Xm = (t) => (t.startsWith("on") ? !Ls(t) : e(t)));
}
try {
  Iw(require("@emotion/is-prop-valid").default);
} catch {}
function Fw(e, t, n) {
  const r = {};
  for (const i in e)
    (i === "values" && typeof e.values == "object") ||
      ce(e[i]) ||
      ((Xm(i) ||
        (n === !0 && Ls(i)) ||
        (!t && !Ls(i)) ||
        (e.draggable && i.startsWith("onDrag"))) &&
        (r[i] = e[i]));
  return r;
}
const no = j.createContext({});
function Ow(e, t) {
  if (to(e)) {
    const { initial: n, animate: r } = e;
    return {
      initial: n === !1 || qr(n) ? n : void 0,
      animate: qr(r) ? r : void 0,
    };
  }
  return e.inherit !== !1 ? t : {};
}
function zw(e) {
  const { initial: t, animate: n } = Ow(e, j.useContext(no));
  return j.useMemo(() => ({ initial: t, animate: n }), [Xf(t), Xf(n)]);
}
function Xf(e) {
  return Array.isArray(e) ? e.join(" ") : e;
}
const Au = () => ({ style: {}, transform: {}, transformOrigin: {}, vars: {} });
function Zm(e, t, n) {
  for (const r in t) !ce(t[r]) && !Am(r, n) && (e[r] = t[r]);
}
function Bw({ transformTemplate: e }, t) {
  return j.useMemo(() => {
    const n = Au();
    return (Mu(n, t, e), Object.assign({}, n.vars, n.style));
  }, [t]);
}
function bw(e, t) {
  const n = e.style || {},
    r = {};
  return (Zm(r, n, e), Object.assign(r, Bw(e, t)), r);
}
function Uw(e, t) {
  const n = {},
    r = bw(e, t);
  return (
    e.drag &&
      e.dragListener !== !1 &&
      ((n.draggable = !1),
      (r.userSelect = r.WebkitUserSelect = r.WebkitTouchCallout = "none"),
      (r.touchAction =
        e.drag === !0 ? "none" : `pan-${e.drag === "x" ? "y" : "x"}`)),
    e.tabIndex === void 0 &&
      (e.onTap || e.onTapStart || e.whileTap) &&
      (n.tabIndex = 0),
    (n.style = r),
    n
  );
}
const qm = () => ({ ...Au(), attrs: {} });
function $w(e, t, n, r) {
  const i = j.useMemo(() => {
    const s = qm();
    return (
      Dm(s, t, Vm(r), e.transformTemplate, e.style),
      { ...s.attrs, style: { ...s.style } }
    );
  }, [t]);
  if (e.style) {
    const s = {};
    (Zm(s, e.style, e), (i.style = { ...s, ...i.style }));
  }
  return i;
}
const Ww = [
  "animate",
  "circle",
  "defs",
  "desc",
  "ellipse",
  "g",
  "image",
  "line",
  "filter",
  "marker",
  "mask",
  "metadata",
  "path",
  "pattern",
  "polygon",
  "polyline",
  "rect",
  "stop",
  "switch",
  "symbol",
  "svg",
  "text",
  "tspan",
  "use",
  "view",
];
function Du(e) {
  return typeof e != "string" || e.includes("-")
    ? !1
    : !!(Ww.indexOf(e) > -1 || /[A-Z]/u.test(e));
}
function Hw(e, t, n, { latestValues: r }, i, s = !1, o) {
  const l = ((o ?? Du(e)) ? $w : Uw)(t, r, i, e),
    u = Fw(t, typeof e == "string", s),
    c = e !== j.Fragment ? { ...u, ...l, ref: n } : {},
    { children: f } = t,
    d = j.useMemo(() => (ce(f) ? f.get() : f), [f]);
  return j.createElement(e, { ...c, children: d });
}
function Kw({ scrapeMotionValuesFromProps: e, createRenderState: t }, n, r, i) {
  return { latestValues: Gw(n, r, i, e), renderState: t() };
}
function Gw(e, t, n, r) {
  const i = {},
    s = r(e, {});
  for (const d in s) i[d] = es(s[d]);
  let { initial: o, animate: a } = e;
  const l = to(e),
    u = Sm(e);
  t &&
    u &&
    !l &&
    e.inherit !== !1 &&
    (o === void 0 && (o = t.initial), a === void 0 && (a = t.animate));
  let c = n ? n.initial === !1 : !1;
  c = c || o === !1;
  const f = c ? a : o;
  if (f && typeof f != "boolean" && !eo(f)) {
    const d = Array.isArray(f) ? f : [f];
    for (let y = 0; y < d.length; y++) {
      const v = xu(e, d[y]);
      if (v) {
        const { transitionEnd: w, transition: k, ...p } = v;
        for (const h in p) {
          let m = p[h];
          if (Array.isArray(m)) {
            const x = c ? m.length - 1 : 0;
            m = m[x];
          }
          m !== null && (i[h] = m);
        }
        for (const h in w) i[h] = w[h];
      }
    }
  }
  return i;
}
const Jm = (e) => (t, n) => {
    const r = j.useContext(no),
      i = j.useContext(Zs),
      s = () => Kw(e, t, r, i);
    return n ? s() : su(s);
  },
  Yw = Jm({ scrapeMotionValuesFromProps: Nu, createRenderState: Au }),
  Qw = Jm({ scrapeMotionValuesFromProps: Lm, createRenderState: qm }),
  Xw = Symbol.for("motionComponentSymbol");
function Zw(e, t, n) {
  const r = j.useRef(n);
  j.useInsertionEffect(() => {
    r.current = n;
  });
  const i = j.useRef(null);
  return j.useCallback(
    (s) => {
      var a;
      s && ((a = e.onMount) == null || a.call(e, s));
      const o = r.current;
      if (typeof o == "function")
        if (s) {
          const l = o(s);
          typeof l == "function" && (i.current = l);
        } else i.current ? (i.current(), (i.current = null)) : o(s);
      else o && (o.current = s);
      t && (s ? t.mount(s) : t.unmount());
    },
    [t],
  );
}
const ey = j.createContext({});
function wn(e) {
  return (
    e &&
    typeof e == "object" &&
    Object.prototype.hasOwnProperty.call(e, "current")
  );
}
function qw(e, t, n, r, i, s) {
  var m, x;
  const { visualElement: o } = j.useContext(no),
    a = j.useContext(Ym),
    l = j.useContext(Zs),
    u = j.useContext(ju),
    c = u.reducedMotion,
    f = u.skipAnimations,
    d = j.useRef(null),
    y = j.useRef(!1);
  ((r = r || a.renderer),
    !d.current &&
      r &&
      ((d.current = r(e, {
        visualState: t,
        parent: o,
        props: n,
        presenceContext: l,
        blockInitialAnimation: l ? l.initial === !1 : !1,
        reducedMotionConfig: c,
        skipAnimations: f,
        isSVG: s,
      })),
      y.current && d.current && (d.current.manuallyAnimateOnMount = !0)));
  const v = d.current,
    w = j.useContext(ey);
  v &&
    !v.projection &&
    i &&
    (v.type === "html" || v.type === "svg") &&
    Jw(d.current, n, i, w);
  const k = j.useRef(!1);
  j.useInsertionEffect(() => {
    v && k.current && v.update(n, l);
  });
  const p = n[lm],
    h = j.useRef(
      !!p &&
        typeof window < "u" &&
        !((m = window.MotionHandoffIsComplete) != null && m.call(window, p)) &&
        ((x = window.MotionHasOptimisedAnimation) == null
          ? void 0
          : x.call(window, p)),
    );
  return (
    wp(() => {
      ((y.current = !0),
        v &&
          ((k.current = !0),
          (window.MotionIsMounted = !0),
          v.updateFeatures(),
          v.scheduleRenderMicrotask(),
          h.current && v.animationState && v.animationState.animateChanges()));
    }),
    j.useEffect(() => {
      v &&
        (!h.current && v.animationState && v.animationState.animateChanges(),
        h.current &&
          (queueMicrotask(() => {
            var S;
            (S = window.MotionHandoffMarkAsComplete) == null ||
              S.call(window, p);
          }),
          (h.current = !1)),
        (v.enteringChildren = void 0));
    }),
    v
  );
}
function Jw(e, t, n, r) {
  const {
    layoutId: i,
    layout: s,
    drag: o,
    dragConstraints: a,
    layoutScroll: l,
    layoutRoot: u,
    layoutAnchor: c,
    layoutCrossfade: f,
  } = t;
  ((e.projection = new n(
    e.latestValues,
    t["data-framer-portal-id"] ? void 0 : ty(e.parent),
  )),
    e.projection.setOptions({
      layoutId: i,
      layout: s,
      alwaysMeasureLayout: !!o || (a && wn(a)),
      visualElement: e,
      animationType: typeof s == "string" ? s : "both",
      initialPromotionConfig: r,
      crossfade: f,
      layoutScroll: l,
      layoutRoot: u,
      layoutAnchor: c,
    }));
}
function ty(e) {
  if (e) return e.options.allowProjection !== !1 ? e.projection : ty(e.parent);
}
function Uo(e, { forwardMotionProps: t = !1, type: n } = {}, r, i) {
  r && Lw(r);
  const s = n ? n === "svg" : Du(e),
    o = s ? Qw : Yw;
  function a(u, c) {
    let f;
    const d = { ...j.useContext(ju), ...u, layoutId: eS(u) },
      { isStatic: y } = d,
      v = zw(u),
      w = o(u, y);
    if (!y && typeof window < "u") {
      tS();
      const k = nS(d);
      ((f = k.MeasureLayout),
        (v.visualElement = qw(e, w, d, i, k.ProjectionNode, s)));
    }
    return g.jsxs(no.Provider, {
      value: v,
      children: [
        f && v.visualElement
          ? g.jsx(f, { visualElement: v.visualElement, ...d })
          : null,
        Hw(e, u, Zw(w, v.visualElement, c), w, y, t, s),
      ],
    });
  }
  a.displayName = `motion.${typeof e == "string" ? e : `create(${e.displayName ?? e.name ?? ""})`}`;
  const l = j.forwardRef(a);
  return ((l[Xw] = e), l);
}
function eS({ layoutId: e }) {
  const t = j.useContext(iu).id;
  return t && e !== void 0 ? t + "-" + e : e;
}
function tS(e, t) {
  j.useContext(Ym).strict;
}
function nS(e) {
  const t = Qm(),
    { drag: n, layout: r } = t;
  if (!n && !r) return {};
  const i = { ...n, ...r };
  return {
    MeasureLayout:
      (n != null && n.isEnabled(e)) || (r != null && r.isEnabled(e))
        ? i.MeasureLayout
        : void 0,
    ProjectionNode: i.ProjectionNode,
  };
}
function rS(e, t) {
  if (typeof Proxy > "u") return Uo;
  const n = new Map(),
    r = (s, o) => Uo(s, o, e, t),
    i = (s, o) => r(s, o);
  return new Proxy(i, {
    get: (s, o) =>
      o === "create"
        ? r
        : (n.has(o) || n.set(o, Uo(o, void 0, e, t)), n.get(o)),
  });
}
const iS = (e, t) =>
  (t.isSVG ?? Du(e))
    ? new Vx(t)
    : new Mx(t, { allowProjection: e !== j.Fragment });
class sS extends Qt {
  constructor(t) {
    (super(t), t.animationState || (t.animationState = Ox(t)));
  }
  updateAnimationControlsSubscription() {
    const { animate: t } = this.node.getProps();
    eo(t) && (this.unmountControls = t.subscribe(this.node));
  }
  mount() {
    this.updateAnimationControlsSubscription();
  }
  update() {
    const { animate: t } = this.node.getProps(),
      { animate: n } = this.node.prevProps || {};
    t !== n && this.updateAnimationControlsSubscription();
  }
  unmount() {
    var t;
    (this.node.animationState.reset(),
      (t = this.unmountControls) == null || t.call(this));
  }
}
let oS = 0;
class aS extends Qt {
  constructor() {
    (super(...arguments), (this.id = oS++), (this.isExitComplete = !1));
  }
  update() {
    var s;
    if (!this.node.presenceContext) return;
    const { isPresent: t, onExitComplete: n } = this.node.presenceContext,
      { isPresent: r } = this.node.prevPresenceContext || {};
    if (!this.node.animationState || t === r) return;
    if (t && r === !1) {
      if (this.isExitComplete) {
        const { initial: o, custom: a } = this.node.getProps();
        if (typeof o == "string") {
          const l = fn(this.node, o, a);
          if (l) {
            const { transition: u, transitionEnd: c, ...f } = l;
            for (const d in f)
              (s = this.node.getValue(d)) == null || s.jump(f[d]);
          }
        }
        (this.node.animationState.reset(),
          this.node.animationState.animateChanges());
      } else this.node.animationState.setActive("exit", !1);
      this.isExitComplete = !1;
      return;
    }
    const i = this.node.animationState.setActive("exit", !t);
    n &&
      !t &&
      i.then(() => {
        ((this.isExitComplete = !0), n(this.id));
      });
  }
  mount() {
    const { register: t, onExitComplete: n } = this.node.presenceContext || {};
    (n && n(this.id), t && (this.unmount = t(this.id)));
  }
  unmount() {}
}
const lS = { animation: { Feature: sS }, exit: { Feature: aS } };
function li(e) {
  return { point: { x: e.pageX, y: e.pageY } };
}
const uS = (e) => (t) => Tu(t) && e(t, li(t));
function Rr(e, t, n, r) {
  return Jr(e, t, uS(n), r);
}
const ny = ({ current: e }) => (e ? e.ownerDocument.defaultView : null),
  Zf = (e, t) => Math.abs(e - t);
function cS(e, t) {
  const n = Zf(e.x, t.x),
    r = Zf(e.y, t.y);
  return Math.sqrt(n ** 2 + r ** 2);
}
const qf = new Set(["auto", "scroll"]);
class ry {
  constructor(
    t,
    n,
    {
      transformPagePoint: r,
      contextWindow: i = window,
      dragSnapToOrigin: s = !1,
      distanceThreshold: o = 3,
      element: a,
    } = {},
  ) {
    if (
      ((this.startEvent = null),
      (this.lastMoveEvent = null),
      (this.lastMoveEventInfo = null),
      (this.lastRawMoveEventInfo = null),
      (this.handlers = {}),
      (this.contextWindow = window),
      (this.scrollPositions = new Map()),
      (this.removeScrollListeners = null),
      (this.onElementScroll = (y) => {
        this.handleScroll(y.target);
      }),
      (this.onWindowScroll = () => {
        this.handleScroll(window);
      }),
      (this.updatePoint = () => {
        if (!(this.lastMoveEvent && this.lastMoveEventInfo)) return;
        this.lastRawMoveEventInfo &&
          (this.lastMoveEventInfo = Li(
            this.lastRawMoveEventInfo,
            this.transformPagePoint,
          ));
        const y = $o(this.lastMoveEventInfo, this.history),
          v = this.startEvent !== null,
          w = cS(y.offset, { x: 0, y: 0 }) >= this.distanceThreshold;
        if (!v && !w) return;
        const { point: k } = y,
          { timestamp: p } = ue;
        this.history.push({ ...k, timestamp: p });
        const { onStart: h, onMove: m } = this.handlers;
        (v ||
          (h && h(this.lastMoveEvent, y),
          (this.startEvent = this.lastMoveEvent)),
          m && m(this.lastMoveEvent, y));
      }),
      (this.handlePointerMove = (y, v) => {
        ((this.lastMoveEvent = y),
          (this.lastRawMoveEventInfo = v),
          (this.lastMoveEventInfo = Li(v, this.transformPagePoint)),
          B.update(this.updatePoint, !0));
      }),
      (this.handlePointerUp = (y, v) => {
        this.end();
        const { onEnd: w, onSessionEnd: k, resumeAnimation: p } = this.handlers;
        if (
          ((this.dragSnapToOrigin || !this.startEvent) && p && p(),
          !(this.lastMoveEvent && this.lastMoveEventInfo))
        )
          return;
        const h = $o(
          y.type === "pointercancel"
            ? this.lastMoveEventInfo
            : Li(v, this.transformPagePoint),
          this.history,
        );
        (this.startEvent && w && w(y, h), k && k(y, h));
      }),
      !Tu(t))
    )
      return;
    ((this.dragSnapToOrigin = s),
      (this.handlers = n),
      (this.transformPagePoint = r),
      (this.distanceThreshold = o),
      (this.contextWindow = i || window));
    const l = li(t),
      u = Li(l, this.transformPagePoint),
      { point: c } = u,
      { timestamp: f } = ue;
    this.history = [{ ...c, timestamp: f }];
    const { onSessionStart: d } = n;
    (d && d(t, $o(u, this.history)),
      (this.removeListeners = si(
        Rr(this.contextWindow, "pointermove", this.handlePointerMove),
        Rr(this.contextWindow, "pointerup", this.handlePointerUp),
        Rr(this.contextWindow, "pointercancel", this.handlePointerUp),
      )),
      a && this.startScrollTracking(a));
  }
  startScrollTracking(t) {
    let n = t.parentElement;
    for (; n; ) {
      const r = getComputedStyle(n);
      ((qf.has(r.overflowX) || qf.has(r.overflowY)) &&
        this.scrollPositions.set(n, { x: n.scrollLeft, y: n.scrollTop }),
        (n = n.parentElement));
    }
    (this.scrollPositions.set(window, { x: window.scrollX, y: window.scrollY }),
      window.addEventListener("scroll", this.onElementScroll, { capture: !0 }),
      window.addEventListener("scroll", this.onWindowScroll),
      (this.removeScrollListeners = () => {
        (window.removeEventListener("scroll", this.onElementScroll, {
          capture: !0,
        }),
          window.removeEventListener("scroll", this.onWindowScroll));
      }));
  }
  handleScroll(t) {
    const n = this.scrollPositions.get(t);
    if (!n) return;
    const r = t === window,
      i = r
        ? { x: window.scrollX, y: window.scrollY }
        : { x: t.scrollLeft, y: t.scrollTop },
      s = { x: i.x - n.x, y: i.y - n.y };
    (s.x === 0 && s.y === 0) ||
      (r
        ? this.lastMoveEventInfo &&
          ((this.lastMoveEventInfo.point.x += s.x),
          (this.lastMoveEventInfo.point.y += s.y))
        : this.history.length > 0 &&
          ((this.history[0].x -= s.x), (this.history[0].y -= s.y)),
      this.scrollPositions.set(t, i),
      B.update(this.updatePoint, !0));
  }
  updateHandlers(t) {
    this.handlers = t;
  }
  end() {
    (this.removeListeners && this.removeListeners(),
      this.removeScrollListeners && this.removeScrollListeners(),
      this.scrollPositions.clear(),
      Ht(this.updatePoint));
  }
}
function Li(e, t) {
  return t ? { point: t(e.point) } : e;
}
function Jf(e, t) {
  return { x: e.x - t.x, y: e.y - t.y };
}
function $o({ point: e }, t) {
  return {
    point: e,
    delta: Jf(e, iy(t)),
    offset: Jf(e, fS(t)),
    velocity: dS(t, 0.1),
  };
}
function fS(e) {
  return e[0];
}
function iy(e) {
  return e[e.length - 1];
}
function dS(e, t) {
  if (e.length < 2) return { x: 0, y: 0 };
  let n = e.length - 1,
    r = null;
  const i = iy(e);
  for (; n >= 0 && ((r = e[n]), !(i.timestamp - r.timestamp > Ae(t))); ) n--;
  if (!r) return { x: 0, y: 0 };
  r === e[0] &&
    e.length > 2 &&
    i.timestamp - r.timestamp > Ae(t) * 2 &&
    (r = e[1]);
  const s = be(i.timestamp - r.timestamp);
  if (s === 0) return { x: 0, y: 0 };
  const o = { x: (i.x - r.x) / s, y: (i.y - r.y) / s };
  return (o.x === 1 / 0 && (o.x = 0), o.y === 1 / 0 && (o.y = 0), o);
}
function hS(e, { min: t, max: n }, r) {
  return (
    t !== void 0 && e < t
      ? (e = r ? $(t, e, r.min) : Math.max(e, t))
      : n !== void 0 && e > n && (e = r ? $(n, e, r.max) : Math.min(e, n)),
    e
  );
}
function ed(e, t, n) {
  return {
    min: t !== void 0 ? e.min + t : void 0,
    max: n !== void 0 ? e.max + n - (e.max - e.min) : void 0,
  };
}
function pS(e, { top: t, left: n, bottom: r, right: i }) {
  return { x: ed(e.x, n, i), y: ed(e.y, t, r) };
}
function td(e, t) {
  let n = t.min - e.min,
    r = t.max - e.max;
  return (
    t.max - t.min < e.max - e.min && ([n, r] = [r, n]),
    { min: n, max: r }
  );
}
function mS(e, t) {
  return { x: td(e.x, t.x), y: td(e.y, t.y) };
}
function yS(e, t) {
  let n = 0.5;
  const r = we(e),
    i = we(t);
  return (
    i > r
      ? (n = Xr(t.min, t.max - r, e.min))
      : r > i && (n = Xr(e.min, e.max - i, t.min)),
    ft(0, 1, n)
  );
}
function gS(e, t) {
  const n = {};
  return (
    t.min !== void 0 && (n.min = t.min - e.min),
    t.max !== void 0 && (n.max = t.max - e.min),
    n
  );
}
const ll = 0.35;
function vS(e = ll) {
  return (
    e === !1 ? (e = 0) : e === !0 && (e = ll),
    { x: nd(e, "left", "right"), y: nd(e, "top", "bottom") }
  );
}
function nd(e, t, n) {
  return { min: rd(e, t), max: rd(e, n) };
}
function rd(e, t) {
  return typeof e == "number" ? e : e[t] || 0;
}
const xS = new WeakMap();
class wS {
  constructor(t) {
    ((this.openDragLock = null),
      (this.isDragging = !1),
      (this.currentDirection = null),
      (this.originPoint = { x: 0, y: 0 }),
      (this.constraints = !1),
      (this.hasMutatedConstraints = !1),
      (this.elastic = re()),
      (this.latestPointerEvent = null),
      (this.latestPanInfo = null),
      (this.visualElement = t));
  }
  start(t, { snapToCursor: n = !1, distanceThreshold: r } = {}) {
    const { presenceContext: i } = this.visualElement;
    if (i && i.isPresent === !1) return;
    const s = (f) => {
        (n && this.snapToCursor(li(f).point), this.stopAnimation());
      },
      o = (f, d) => {
        const { drag: y, dragPropagation: v, onDragStart: w } = this.getProps();
        if (
          y &&
          !v &&
          (this.openDragLock && this.openDragLock(),
          (this.openDragLock = K1(y)),
          !this.openDragLock)
        )
          return;
        ((this.latestPointerEvent = f),
          (this.latestPanInfo = d),
          (this.isDragging = !0),
          (this.currentDirection = null),
          this.resolveConstraints(),
          this.visualElement.projection &&
            ((this.visualElement.projection.isAnimationBlocked = !0),
            (this.visualElement.projection.target = void 0)),
          st((p) => {
            let h = this.getAxisMotionValue(p).get() || 0;
            if (ct.test(h)) {
              const { projection: m } = this.visualElement;
              if (m && m.layout) {
                const x = m.layout.layoutBox[p];
                x && (h = we(x) * (parseFloat(h) / 100));
              }
            }
            this.originPoint[p] = h;
          }),
          w && B.update(() => w(f, d), !1, !0),
          Ja(this.visualElement, "transform"));
        const { animationState: k } = this.visualElement;
        k && k.setActive("whileDrag", !0);
      },
      a = (f, d) => {
        ((this.latestPointerEvent = f), (this.latestPanInfo = d));
        const {
          dragPropagation: y,
          dragDirectionLock: v,
          onDirectionLock: w,
          onDrag: k,
        } = this.getProps();
        if (!y && !this.openDragLock) return;
        const { offset: p } = d;
        if (v && this.currentDirection === null) {
          ((this.currentDirection = kS(p)),
            this.currentDirection !== null && w && w(this.currentDirection));
          return;
        }
        (this.updateAxis("x", d.point, p),
          this.updateAxis("y", d.point, p),
          this.visualElement.render(),
          k && B.update(() => k(f, d), !1, !0));
      },
      l = (f, d) => {
        ((this.latestPointerEvent = f),
          (this.latestPanInfo = d),
          this.stop(f, d),
          (this.latestPointerEvent = null),
          (this.latestPanInfo = null));
      },
      u = () => {
        const { dragSnapToOrigin: f } = this.getProps();
        (f || this.constraints) && this.startAnimation({ x: 0, y: 0 });
      },
      { dragSnapToOrigin: c } = this.getProps();
    this.panSession = new ry(
      t,
      {
        onSessionStart: s,
        onStart: o,
        onMove: a,
        onSessionEnd: l,
        resumeAnimation: u,
      },
      {
        transformPagePoint: this.visualElement.getTransformPagePoint(),
        dragSnapToOrigin: c,
        distanceThreshold: r,
        contextWindow: ny(this.visualElement),
        element: this.visualElement.current,
      },
    );
  }
  stop(t, n) {
    const r = t || this.latestPointerEvent,
      i = n || this.latestPanInfo,
      s = this.isDragging;
    if ((this.cancel(), !s || !i || !r)) return;
    const { velocity: o } = i;
    this.startAnimation(o);
    const { onDragEnd: a } = this.getProps();
    a && B.postRender(() => a(r, i));
  }
  cancel() {
    this.isDragging = !1;
    const { projection: t, animationState: n } = this.visualElement;
    (t && (t.isAnimationBlocked = !1), this.endPanSession());
    const { dragPropagation: r } = this.getProps();
    (!r &&
      this.openDragLock &&
      (this.openDragLock(), (this.openDragLock = null)),
      n && n.setActive("whileDrag", !1));
  }
  endPanSession() {
    (this.panSession && this.panSession.end(), (this.panSession = void 0));
  }
  updateAxis(t, n, r) {
    const { drag: i } = this.getProps();
    if (!r || !_i(t, i, this.currentDirection)) return;
    const s = this.getAxisMotionValue(t);
    let o = this.originPoint[t] + r[t];
    (this.constraints &&
      this.constraints[t] &&
      (o = hS(o, this.constraints[t], this.elastic[t])),
      s.set(o));
  }
  resolveConstraints() {
    var s;
    const { dragConstraints: t, dragElastic: n } = this.getProps(),
      r =
        this.visualElement.projection && !this.visualElement.projection.layout
          ? this.visualElement.projection.measure(!1)
          : (s = this.visualElement.projection) == null
            ? void 0
            : s.layout,
      i = this.constraints;
    (t && wn(t)
      ? this.constraints || (this.constraints = this.resolveRefConstraints())
      : t && r
        ? (this.constraints = pS(r.layoutBox, t))
        : (this.constraints = !1),
      (this.elastic = vS(n)),
      i !== this.constraints &&
        !wn(t) &&
        r &&
        this.constraints &&
        !this.hasMutatedConstraints &&
        st((o) => {
          this.constraints !== !1 &&
            this.getAxisMotionValue(o) &&
            (this.constraints[o] = gS(r.layoutBox[o], this.constraints[o]));
        }));
  }
  resolveRefConstraints() {
    const { dragConstraints: t, onMeasureDragConstraints: n } = this.getProps();
    if (!t || !wn(t)) return !1;
    const r = t.current;
    Qn(
      r !== null,
      "If `dragConstraints` is set as a React ref, that ref must be passed to another component's `ref` prop.",
      "drag-constraints-ref",
    );
    const { projection: i } = this.visualElement;
    if (!i || !i.layout) return !1;
    const s = Sx(r, i.root, this.visualElement.getTransformPagePoint());
    let o = mS(i.layout.layoutBox, s);
    if (n) {
      const a = n(vx(o));
      ((this.hasMutatedConstraints = !!a), a && (o = Pm(a)));
    }
    return o;
  }
  startAnimation(t) {
    const {
        drag: n,
        dragMomentum: r,
        dragElastic: i,
        dragTransition: s,
        dragSnapToOrigin: o,
        onDragTransitionEnd: a,
      } = this.getProps(),
      l = this.constraints || {},
      u = st((c) => {
        if (!_i(c, n, this.currentDirection)) return;
        let f = (l && l[c]) || {};
        (o === !0 || o === c) && (f = { min: 0, max: 0 });
        const d = i ? 200 : 1e6,
          y = i ? 40 : 1e7,
          v = {
            type: "inertia",
            velocity: r ? t[c] : 0,
            bounceStiffness: d,
            bounceDamping: y,
            timeConstant: 750,
            restDelta: 1,
            restSpeed: 10,
            ...s,
            ...f,
          };
        return this.startAxisValueAnimation(c, v);
      });
    return Promise.all(u).then(a);
  }
  startAxisValueAnimation(t, n) {
    const r = this.getAxisMotionValue(t);
    return (
      Ja(this.visualElement, t),
      r.start(vu(t, r, 0, n, this.visualElement, !1))
    );
  }
  stopAnimation() {
    st((t) => this.getAxisMotionValue(t).stop());
  }
  getAxisMotionValue(t) {
    const n = `_drag${t.toUpperCase()}`,
      r = this.visualElement.getProps(),
      i = r[n];
    return (
      i ||
      this.visualElement.getValue(t, (r.initial ? r.initial[t] : void 0) || 0)
    );
  }
  snapToCursor(t) {
    st((n) => {
      const { drag: r } = this.getProps();
      if (!_i(n, r, this.currentDirection)) return;
      const { projection: i } = this.visualElement,
        s = this.getAxisMotionValue(n);
      if (i && i.layout) {
        const { min: o, max: a } = i.layout.layoutBox[n],
          l = s.get() || 0;
        s.set(t[n] - $(o, a, 0.5) + l);
      }
    });
  }
  scalePositionWithinConstraints() {
    if (!this.visualElement.current) return;
    const { drag: t, dragConstraints: n } = this.getProps(),
      { projection: r } = this.visualElement;
    if (!wn(n) || !r || !this.constraints) return;
    this.stopAnimation();
    const i = { x: 0, y: 0 };
    st((o) => {
      const a = this.getAxisMotionValue(o);
      if (a && this.constraints !== !1) {
        const l = a.get();
        i[o] = yS({ min: l, max: l }, this.constraints[o]);
      }
    });
    const { transformTemplate: s } = this.visualElement.getProps();
    ((this.visualElement.current.style.transform = s ? s({}, "") : "none"),
      r.root && r.root.updateScroll(),
      r.updateLayout(),
      (this.constraints = !1),
      this.resolveConstraints(),
      st((o) => {
        if (!_i(o, t, null)) return;
        const a = this.getAxisMotionValue(o),
          { min: l, max: u } = this.constraints[o];
        a.set($(l, u, i[o]));
      }),
      this.visualElement.render());
  }
  addListeners() {
    if (!this.visualElement.current) return;
    xS.set(this.visualElement, this);
    const t = this.visualElement.current,
      n = Rr(t, "pointerdown", (u) => {
        const { drag: c, dragListener: f = !0 } = this.getProps(),
          d = u.target,
          y = d !== t && q1(d);
        c && f && !y && this.start(u);
      });
    let r;
    const i = () => {
        const { dragConstraints: u } = this.getProps();
        wn(u) &&
          u.current &&
          ((this.constraints = this.resolveRefConstraints()),
          r ||
            (r = SS(t, u.current, () =>
              this.scalePositionWithinConstraints(),
            )));
      },
      { projection: s } = this.visualElement,
      o = s.addEventListener("measure", i);
    (s && !s.layout && (s.root && s.root.updateScroll(), s.updateLayout()),
      B.read(i));
    const a = Jr(window, "resize", () => this.scalePositionWithinConstraints()),
      l = s.addEventListener(
        "didUpdate",
        ({ delta: u, hasLayoutChanged: c }) => {
          this.isDragging &&
            c &&
            (st((f) => {
              const d = this.getAxisMotionValue(f);
              d &&
                ((this.originPoint[f] += u[f].translate),
                d.set(d.get() + u[f].translate));
            }),
            this.visualElement.render());
        },
      );
    return () => {
      (a(), n(), o(), l && l(), r && r());
    };
  }
  getProps() {
    const t = this.visualElement.getProps(),
      {
        drag: n = !1,
        dragDirectionLock: r = !1,
        dragPropagation: i = !1,
        dragConstraints: s = !1,
        dragElastic: o = ll,
        dragMomentum: a = !0,
      } = t;
    return {
      ...t,
      drag: n,
      dragDirectionLock: r,
      dragPropagation: i,
      dragConstraints: s,
      dragElastic: o,
      dragMomentum: a,
    };
  }
}
function id(e) {
  let t = !0;
  return () => {
    if (t) {
      t = !1;
      return;
    }
    e();
  };
}
function SS(e, t, n) {
  const r = ff(e, id(n)),
    i = ff(t, id(n));
  return () => {
    (r(), i());
  };
}
function _i(e, t, n) {
  return (t === !0 || t === e) && (n === null || n === e);
}
function kS(e, t = 10) {
  let n = null;
  return (Math.abs(e.y) > t ? (n = "y") : Math.abs(e.x) > t && (n = "x"), n);
}
class TS extends Qt {
  constructor(t) {
    (super(t),
      (this.removeGroupControls = $e),
      (this.removeListeners = $e),
      (this.controls = new wS(t)));
  }
  mount() {
    const { dragControls: t } = this.node.getProps();
    (t && (this.removeGroupControls = t.subscribe(this.controls)),
      (this.removeListeners = this.controls.addListeners() || $e));
  }
  update() {
    const { dragControls: t } = this.node.getProps(),
      { dragControls: n } = this.node.prevProps || {};
    t !== n &&
      (this.removeGroupControls(),
      t && (this.removeGroupControls = t.subscribe(this.controls)));
  }
  unmount() {
    (this.removeGroupControls(),
      this.removeListeners(),
      this.controls.isDragging || this.controls.endPanSession());
  }
}
const Wo = (e) => (t, n) => {
  e && B.update(() => e(t, n), !1, !0);
};
class CS extends Qt {
  constructor() {
    (super(...arguments), (this.removePointerDownListener = $e));
  }
  onPointerDown(t) {
    this.session = new ry(t, this.createPanHandlers(), {
      transformPagePoint: this.node.getTransformPagePoint(),
      contextWindow: ny(this.node),
    });
  }
  createPanHandlers() {
    const {
      onPanSessionStart: t,
      onPanStart: n,
      onPan: r,
      onPanEnd: i,
    } = this.node.getProps();
    return {
      onSessionStart: Wo(t),
      onStart: Wo(n),
      onMove: Wo(r),
      onEnd: (s, o) => {
        (delete this.session, i && B.postRender(() => i(s, o)));
      },
    };
  }
  mount() {
    this.removePointerDownListener = Rr(this.node.current, "pointerdown", (t) =>
      this.onPointerDown(t),
    );
  }
  update() {
    this.session && this.session.updateHandlers(this.createPanHandlers());
  }
  unmount() {
    (this.removePointerDownListener(), this.session && this.session.end());
  }
}
let Ho = !1;
class PS extends j.Component {
  componentDidMount() {
    const {
        visualElement: t,
        layoutGroup: n,
        switchLayoutGroup: r,
        layoutId: i,
      } = this.props,
      { projection: s } = t;
    (s &&
      (n.group && n.group.add(s),
      r && r.register && i && r.register(s),
      Ho && s.root.didUpdate(),
      s.addEventListener("animationComplete", () => {
        this.safeToRemove();
      }),
      s.setOptions({
        ...s.options,
        layoutDependency: this.props.layoutDependency,
        onExitComplete: () => this.safeToRemove(),
      })),
      (ts.hasEverUpdated = !0));
  }
  getSnapshotBeforeUpdate(t) {
    const {
        layoutDependency: n,
        visualElement: r,
        drag: i,
        isPresent: s,
      } = this.props,
      { projection: o } = r;
    return (
      o &&
        ((o.isPresent = s),
        t.layoutDependency !== n &&
          o.setOptions({ ...o.options, layoutDependency: n }),
        (Ho = !0),
        i || t.layoutDependency !== n || n === void 0 || t.isPresent !== s
          ? o.willUpdate()
          : this.safeToRemove(),
        t.isPresent !== s &&
          (s
            ? o.promote()
            : o.relegate() ||
              B.postRender(() => {
                const a = o.getStack();
                (!a || !a.members.length) && this.safeToRemove();
              }))),
      null
    );
  }
  componentDidUpdate() {
    const { visualElement: t, layoutAnchor: n } = this.props,
      { projection: r } = t;
    r &&
      ((r.options.layoutAnchor = n),
      r.root.didUpdate(),
      ku.postRender(() => {
        !r.currentAnimation && r.isLead() && this.safeToRemove();
      }));
  }
  componentWillUnmount() {
    const {
        visualElement: t,
        layoutGroup: n,
        switchLayoutGroup: r,
      } = this.props,
      { projection: i } = t;
    ((Ho = !0),
      i &&
        (i.scheduleCheckAfterUnmount(),
        n && n.group && n.group.remove(i),
        r && r.deregister && r.deregister(i)));
  }
  safeToRemove() {
    const { safeToRemove: t } = this.props;
    t && t();
  }
  render() {
    return null;
  }
}
function sy(e) {
  const [t, n] = Gm(),
    r = j.useContext(iu);
  return g.jsx(PS, {
    ...e,
    layoutGroup: r,
    switchLayoutGroup: j.useContext(ey),
    isPresent: t,
    safeToRemove: n,
  });
}
const ES = {
  pan: { Feature: CS },
  drag: { Feature: TS, ProjectionNode: Km, MeasureLayout: sy },
};
function sd(e, t, n) {
  const { props: r } = e;
  e.animationState &&
    r.whileHover &&
    e.animationState.setActive("whileHover", n === "Start");
  const i = "onHover" + n,
    s = r[i];
  s && B.postRender(() => s(t, li(t)));
}
class MS extends Qt {
  mount() {
    const { current: t } = this.node;
    t &&
      (this.unmount = Y1(
        t,
        (n, r) => (sd(this.node, r, "Start"), (i) => sd(this.node, i, "End")),
      ));
  }
  unmount() {}
}
class NS extends Qt {
  constructor() {
    (super(...arguments), (this.isActive = !1));
  }
  onFocus() {
    let t = !1;
    try {
      t = this.node.current.matches(":focus-visible");
    } catch {
      t = !0;
    }
    !t ||
      !this.node.animationState ||
      (this.node.animationState.setActive("whileFocus", !0),
      (this.isActive = !0));
  }
  onBlur() {
    !this.isActive ||
      !this.node.animationState ||
      (this.node.animationState.setActive("whileFocus", !1),
      (this.isActive = !1));
  }
  mount() {
    this.unmount = si(
      Jr(this.node.current, "focus", () => this.onFocus()),
      Jr(this.node.current, "blur", () => this.onBlur()),
    );
  }
  unmount() {}
}
function od(e, t, n) {
  const { props: r } = e;
  if (e.current instanceof HTMLButtonElement && e.current.disabled) return;
  e.animationState &&
    r.whileTap &&
    e.animationState.setActive("whileTap", n === "Start");
  const i = "onTap" + (n === "End" ? "" : n),
    s = r[i];
  s && B.postRender(() => s(t, li(t)));
}
class jS extends Qt {
  mount() {
    const { current: t } = this.node;
    if (!t) return;
    const { globalTapTarget: n, propagate: r } = this.node.props;
    this.unmount = ex(
      t,
      (i, s) => (
        od(this.node, s, "Start"),
        (o, { success: a }) => od(this.node, o, a ? "End" : "Cancel")
      ),
      {
        useGlobalTarget: n,
        stopPropagation: (r == null ? void 0 : r.tap) === !1,
      },
    );
  }
  unmount() {}
}
const ul = new WeakMap(),
  Ko = new WeakMap(),
  AS = (e) => {
    const t = ul.get(e.target);
    t && t(e);
  },
  DS = (e) => {
    e.forEach(AS);
  };
function RS({ root: e, ...t }) {
  const n = e || document;
  Ko.has(n) || Ko.set(n, {});
  const r = Ko.get(n),
    i = JSON.stringify(t);
  return (
    r[i] || (r[i] = new IntersectionObserver(DS, { root: e, ...t })),
    r[i]
  );
}
function VS(e, t, n) {
  const r = RS(t);
  return (
    ul.set(e, n),
    r.observe(e),
    () => {
      (ul.delete(e), r.unobserve(e));
    }
  );
}
const LS = { some: 0, all: 1 };
class _S extends Qt {
  constructor() {
    (super(...arguments), (this.hasEnteredView = !1), (this.isInView = !1));
  }
  startObserver() {
    var l;
    (l = this.stopObserver) == null || l.call(this);
    const { viewport: t = {} } = this.node.getProps(),
      { root: n, margin: r, amount: i = "some", once: s } = t,
      o = {
        root: n ? n.current : void 0,
        rootMargin: r,
        threshold: typeof i == "number" ? i : LS[i],
      },
      a = (u) => {
        const { isIntersecting: c } = u;
        if (
          this.isInView === c ||
          ((this.isInView = c), s && !c && this.hasEnteredView)
        )
          return;
        (c && (this.hasEnteredView = !0),
          this.node.animationState &&
            this.node.animationState.setActive("whileInView", c));
        const { onViewportEnter: f, onViewportLeave: d } = this.node.getProps(),
          y = c ? f : d;
        y && y(u);
      };
    this.stopObserver = VS(this.node.current, o, a);
  }
  mount() {
    this.startObserver();
  }
  update() {
    if (typeof IntersectionObserver > "u") return;
    const { props: t, prevProps: n } = this.node;
    ["amount", "margin", "root"].some(IS(t, n)) && this.startObserver();
  }
  unmount() {
    var t;
    ((t = this.stopObserver) == null || t.call(this),
      (this.hasEnteredView = !1),
      (this.isInView = !1));
  }
}
function IS({ viewport: e = {} }, { viewport: t = {} } = {}) {
  return (n) => e[n] !== t[n];
}
const FS = {
    inView: { Feature: _S },
    tap: { Feature: jS },
    focus: { Feature: NS },
    hover: { Feature: MS },
  },
  OS = { layout: { ProjectionNode: Km, MeasureLayout: sy } },
  zS = { ...lS, ...FS, ...ES, ...OS },
  ht = rS(zS, iS);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var BS = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
};
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const bS = (e) =>
    e
      .replace(/([a-z0-9])([A-Z])/g, "$1-$2")
      .toLowerCase()
      .trim(),
  ne = (e, t) => {
    const n = j.forwardRef(
      (
        {
          color: r = "currentColor",
          size: i = 24,
          strokeWidth: s = 2,
          absoluteStrokeWidth: o,
          className: a = "",
          children: l,
          ...u
        },
        c,
      ) =>
        j.createElement(
          "svg",
          {
            ref: c,
            ...BS,
            width: i,
            height: i,
            stroke: r,
            strokeWidth: o ? (Number(s) * 24) / Number(i) : s,
            className: ["lucide", `lucide-${bS(e)}`, a].join(" "),
            ...u,
          },
          [
            ...t.map(([f, d]) => j.createElement(f, d)),
            ...(Array.isArray(l) ? l : [l]),
          ],
        ),
    );
    return ((n.displayName = `${e}`), n);
  };
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const ui = ne("ArrowRight", [
  ["path", { d: "M5 12h14", key: "1ays0h" }],
  ["path", { d: "m12 5 7 7-7 7", key: "xquz4c" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const US = ne("Award", [
  ["circle", { cx: "12", cy: "8", r: "6", key: "1vp47v" }],
  ["path", { d: "M15.477 12.89 17 22l-5-3-5 3 1.523-9.11", key: "em7aur" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const $S = ne("ChevronDown", [
  ["path", { d: "m6 9 6 6 6-6", key: "qrunsl" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const WS = ne("ChevronUp", [
  ["path", { d: "m18 15-6-6-6 6", key: "153udz" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const HS = ne("Clock", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["polyline", { points: "12 6 12 12 16 14", key: "68esgv" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const oy = ne("Mail", [
  [
    "rect",
    { width: "20", height: "16", x: "2", y: "4", rx: "2", key: "18n3k1" },
  ],
  ["path", { d: "m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7", key: "1ocrg3" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const ay = ne("MessageCircle", [
  ["path", { d: "M7.9 20A9 9 0 1 0 4 16.1L2 22Z", key: "vv11sd" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const KS = ne("MessageSquare", [
  [
    "path",
    {
      d: "M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z",
      key: "1lielz",
    },
  ],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const GS = ne("MousePointer", [
  ["path", { d: "m3 3 7.07 16.97 2.51-7.39 7.39-2.51L3 3z", key: "y2ucgo" }],
  ["path", { d: "m13 13 6 6", key: "1nhxnf" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const YS = ne("Percent", [
  ["line", { x1: "19", x2: "5", y1: "5", y2: "19", key: "1x9vlm" }],
  ["circle", { cx: "6.5", cy: "6.5", r: "2.5", key: "4mh3h7" }],
  ["circle", { cx: "17.5", cy: "17.5", r: "2.5", key: "1mdrzq" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const ir = ne("Send", [
  ["path", { d: "m22 2-7 20-4-9-9-4Z", key: "1q3vgg" }],
  ["path", { d: "M22 2 11 13", key: "nzbqef" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const QS = ne("ShieldCheck", [
  [
    "path",
    {
      d: "M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",
      key: "oel41y",
    },
  ],
  ["path", { d: "m9 12 2 2 4-4", key: "dzmm74" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const XS = ne("Shield", [
  [
    "path",
    {
      d: "M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",
      key: "oel41y",
    },
  ],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const ZS = ne("Sparkles", [
  [
    "path",
    {
      d: "m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z",
      key: "17u4zn",
    },
  ],
  ["path", { d: "M5 3v4", key: "bklmnn" }],
  ["path", { d: "M19 17v4", key: "iiml17" }],
  ["path", { d: "M3 5h4", key: "nem4j1" }],
  ["path", { d: "M17 19h4", key: "lbex7p" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Go = ne("Star", [
  [
    "polygon",
    {
      points:
        "12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2",
      key: "8f66p6",
    },
  ],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const qS = ne("TrendingUp", [
  ["polyline", { points: "22 7 13.5 15.5 8.5 10.5 2 17", key: "126l90" }],
  ["polyline", { points: "16 7 22 7 22 13", key: "kwv8wd" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const JS = ne("UserCheck", [
  ["path", { d: "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2", key: "1yyitq" }],
  ["circle", { cx: "9", cy: "7", r: "4", key: "nufk8" }],
  ["polyline", { points: "16 11 18 13 22 9", key: "1pwet4" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Ru = ne("Users", [
  ["path", { d: "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2", key: "1yyitq" }],
  ["circle", { cx: "9", cy: "7", r: "4", key: "nufk8" }],
  ["path", { d: "M22 21v-2a4 4 0 0 0-3-3.87", key: "kshegd" }],
  ["path", { d: "M16 3.13a4 4 0 0 1 0 7.75", key: "1da9ce" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const ek = ne("X", [
  ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
  ["path", { d: "m6 6 12 12", key: "d8bk6v" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const tk = ne("Zap", [
    [
      "polygon",
      { points: "13 2 3 14 12 14 11 22 21 10 12 10 13 2", key: "45s27k" },
    ],
  ]),
  ci = ({ isOpen: e, onClose: t }) => {
    const n = () => {
        (window.fbq && window.fbq("track", "Lead"),
          setTimeout(() => {
            window.open("https://t.me/FreeStakeAccsBot", "_blank");
          }, 150));
      },
      r = () => {
        (window.fbq && window.fbq("track", "Lead"),
          setTimeout(() => {
            window.open("https://discord.gg/freestake", "_blank");
          }, 150));
      };
    return g.jsx(Rw, {
      children:
        e &&
        g.jsxs(g.Fragment, {
          children: [
            g.jsx(ht.div, {
              initial: { opacity: 0 },
              animate: { opacity: 1 },
              exit: { opacity: 0 },
              transition: { duration: 0.2 },
              className: "fixed inset-0 z-50 bg-black/70 backdrop-blur-sm",
              onClick: t,
            }),
            g.jsx("div", {
              className:
                "fixed inset-0 z-50 flex items-center justify-center px-4 pointer-events-none",
              children: g.jsxs(ht.div, {
                initial: { opacity: 0, scale: 0.92, y: 16 },
                animate: { opacity: 1, scale: 1, y: 0 },
                exit: { opacity: 0, scale: 0.92, y: 16 },
                transition: { duration: 0.25, ease: [0.22, 1, 0.36, 1] },
                className:
                  "pointer-events-auto relative w-full max-w-sm bg-dark-800 border border-white/10 rounded-2xl p-8 shadow-2xl",
                children: [
                  g.jsx("button", {
                    onClick: t,
                    className:
                      "absolute top-4 right-4 text-gray-500 hover:text-white transition-colors duration-200 p-1",
                    children: g.jsx(ek, { className: "w-5 h-5" }),
                  }),
                  g.jsx("h2", {
                    className: "text-xl font-bold text-white mb-2 text-center",
                    children: "Claim Your Free Account",
                  }),
                  g.jsx("p", {
                    className: "text-gray-400 text-sm text-center mb-8",
                    children: "Choose your preferred platform to get started.",
                  }),
                  g.jsxs("div", {
                    className: "flex flex-col gap-4",
                    children: [
                      g.jsxs("button", {
                        onClick: n,
                        className: `group inline-flex items-center justify-center gap-3 px-6 py-3.5 rounded-xl font-semibold text-white text-[15px]
                    bg-gradient-to-r from-brand-600 to-brand-500
                    neon-box-blue hover:neon-box-blue-strong hover:-translate-y-0.5
                    transition-all duration-300 ease-out cursor-pointer`,
                        children: [
                          g.jsx(ir, { className: "w-4 h-4" }),
                          "Claim On Telegram",
                        ],
                      }),
                      g.jsxs("button", {
                        onClick: r,
                        className: `group inline-flex items-center justify-center gap-3 px-6 py-3.5 rounded-xl font-semibold text-white text-[15px]
                    bg-gradient-to-r from-[#5865F2] to-[#4752C4]
                    hover:-translate-y-0.5
                    shadow-lg shadow-[#5865F2]/20 hover:shadow-[#5865F2]/40
                    transition-all duration-300 ease-out cursor-pointer`,
                        children: [
                          g.jsx(ay, { className: "w-4 h-4" }),
                          "Claim On Discord",
                        ],
                      }),
                    ],
                  }),
                ],
              }),
            }),
          ],
        }),
    });
  },
  pr = {
    hidden: { opacity: 0, y: 30 },
    visible: (e) => ({
      opacity: 1,
      y: 0,
      transition: { delay: e * 0.1, duration: 0.8, ease: [0.22, 1, 0.36, 1] },
    }),
  },
  nk = {
    hidden: { opacity: 0, scale: 0.9, y: 16 },
    visible: (e) => ({
      opacity: 1,
      scale: 1,
      y: 0,
      transition: { delay: e * 0.08, duration: 0.6, ease: [0.22, 1, 0.36, 1] },
    }),
  },
  rk = [
    { icon: Ru, value: "100+", label: "Users" },
    { icon: HS, value: "< 1hr", label: "Setup" },
    { icon: QS, value: "100%", label: "Access" },
  ],
  ik = () => {
    const [e, t] = bt.useState(!1);
    return g.jsxs(g.Fragment, {
      children: [
        g.jsxs("section", {
          id: "home",
          className:
            "relative min-h-screen flex items-center justify-center overflow-hidden bg-dark-900",
          children: [
            g.jsxs("div", {
              className: "absolute inset-0 pointer-events-none",
              children: [
                g.jsx("div", {
                  className: "absolute inset-0 grid-bg animate-grid-drift",
                }),
                g.jsx("div", {
                  className:
                    "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[600px] bg-brand-500/[0.06] rounded-full blur-[140px] animate-glow-breathe",
                }),
                g.jsx("div", {
                  className:
                    "absolute -top-40 -left-40 w-[500px] h-[500px] bg-brand-600/[0.04] rounded-full blur-[120px]",
                }),
                g.jsx("div", {
                  className:
                    "absolute -bottom-40 -right-40 w-[500px] h-[500px] bg-brand-500/[0.03] rounded-full blur-[120px]",
                }),
                [...Array(8)].map((n, r) =>
                  g.jsx(
                    ht.div,
                    {
                      className: "absolute rounded-full bg-brand-500/30",
                      style: {
                        width: 2 + (r % 3),
                        height: 2 + (r % 3),
                        top: `${15 + r * 10}%`,
                        left: `${8 + r * 12}%`,
                      },
                      animate: {
                        y: [0, -25 - r * 5, -10, -35 - r * 3, 0],
                        x: [0, 8 + r * 2, -4, 12 + r, 0],
                        opacity: [0.15, 0.4, 0.25, 0.5, 0.15],
                      },
                      transition: {
                        duration: 7 + r * 1.2,
                        repeat: 1 / 0,
                        ease: "easeInOut",
                      },
                    },
                    r,
                  ),
                ),
                g.jsx("div", { className: "absolute inset-0 vignette" }),
              ],
            }),
            g.jsxs("div", {
              className:
                "relative z-10 flex flex-col items-center justify-center text-center px-6 pt-8 pb-28 md:py-28 max-w-4xl mx-auto",
              children: [
                g.jsx(ht.div, {
                  custom: 0,
                  variants: pr,
                  initial: "hidden",
                  animate: "visible",
                  className: "mb-8",
                  children: g.jsxs("div", {
                    className:
                      "inline-flex items-center gap-2.5 px-5 py-2 rounded-full border border-[#00ff6a33] bg-[#00ff6a0d] shadow-[0_0_16px_#00ff6a22]",
                    children: [
                      g.jsxs("span", {
                        className: "relative flex h-2 w-2",
                        children: [
                          g.jsx("span", {
                            className:
                              "animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00ff6a] opacity-75",
                          }),
                          g.jsx("span", {
                            className:
                              "relative inline-flex rounded-full h-2 w-2 bg-[#00ff6a] shadow-[0_0_8px_#00ff6a]",
                          }),
                        ],
                      }),
                      g.jsx("span", {
                        className:
                          "text-[13px] font-semibold text-[#00ff6a] tracking-wide",
                        children: "Accounts available now",
                      }),
                    ],
                  }),
                }),
                g.jsxs(ht.h1, {
                  custom: 1,
                  variants: pr,
                  initial: "hidden",
                  animate: "visible",
                  className:
                    "text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] font-black leading-[1.05] tracking-tight mb-7",
                  children: [
                    g.jsx("span", {
                      className: "block text-white",
                      children: "Claim your",
                    }),
                    g.jsx("span", {
                      className: "block text-brand-500 neon-text-blue",
                      children: "Stake account",
                    }),
                    g.jsx("span", {
                      className: "block text-white",
                      children: "for free!",
                    }),
                  ],
                }),
                g.jsx(ht.p, {
                  custom: 2,
                  variants: pr,
                  initial: "hidden",
                  animate: "visible",
                  className:
                    "max-w-lg text-base md:text-lg text-gray-400 leading-relaxed mb-10",
                  children:
                    "The most trusted source for free verified Stake accounts with instant delivery, full access and human support.",
                }),
                g.jsxs(ht.div, {
                  custom: 3,
                  variants: pr,
                  initial: "hidden",
                  animate: "visible",
                  className:
                    "flex flex-col sm:flex-row items-center gap-4 mb-14",
                  children: [
                    g.jsxs("button", {
                      onClick: () => t(!0),
                      className: `group relative inline-flex items-center gap-2.5 px-7 py-3.5 rounded-xl font-semibold text-white text-[15px]
              bg-gradient-to-r from-brand-600 to-brand-500
              neon-box-blue
              hover:neon-box-blue-strong
              hover:-translate-y-0.5
              transition-all duration-300 ease-out`,
                      children: [
                        g.jsx(ir, { className: "w-4 h-4" }),
                        "Get Your Free Stake Account",
                        g.jsx(ui, {
                          className:
                            "w-4 h-4 group-hover:translate-x-0.5 transition-transform duration-300",
                        }),
                      ],
                    }),
                    g.jsx("a", {
                      href: "#guide",
                      className: `inline-flex items-center gap-2 px-7 py-3.5 rounded-xl font-semibold text-gray-300 text-[15px]
              bg-transparent border border-white/10
              hover:border-brand-500/30 hover:text-white hover:bg-white/[0.03]
              transition-all duration-300 ease-out`,
                      children: "Learn More",
                    }),
                  ],
                }),
                g.jsx(ht.div, {
                  custom: 4,
                  variants: pr,
                  initial: "hidden",
                  animate: "visible",
                  className:
                    "grid grid-cols-1 sm:grid-cols-3 gap-4 w-full max-w-2xl",
                  children: rk.map((n, r) =>
                    g.jsxs(
                      ht.div,
                      {
                        custom: 5 + r,
                        variants: nk,
                        initial: "hidden",
                        animate: "visible",
                        whileHover: { y: -4, transition: { duration: 0.2 } },
                        className: `flex flex-col items-center gap-1.5 p-6 rounded-2xl glass-card
                hover:border-brand-500/30 transition-all duration-300`,
                        children: [
                          g.jsx(n.icon, {
                            className: "w-5 h-5 text-brand-500 mb-1",
                          }),
                          g.jsx("span", {
                            className:
                              "text-2xl font-bold text-brand-400 neon-text-blue",
                            children: n.value,
                          }),
                          g.jsx("span", {
                            className: "text-sm text-gray-500 font-medium",
                            children: n.label,
                          }),
                        ],
                      },
                      n.label,
                    ),
                  ),
                }),
              ],
            }),
          ],
        }),
        g.jsx(ci, { isOpen: e, onClose: () => t(!1) }),
      ],
    });
  },
  sk = { Mail: oy, Zap: tk, Percent: YS, Shield: XS },
  ok = () => {
    const [e, t] = bt.useState(!1);
    return g.jsxs(g.Fragment, {
      children: [
        g.jsxs("section", {
          id: "benefits",
          className: "py-20 bg-dark-900 border-t border-blue-500/15",
          children: [
            g.jsxs("div", {
              className: "max-w-6xl mx-auto px-6",
              children: [
                g.jsxs("div", {
                  className: "text-center mb-16",
                  children: [
                    g.jsx("h2", {
                      className:
                        "text-4xl md:text-5xl font-bold mb-4 text-white tracking-tight",
                      children: "Why choose us?",
                    }),
                    g.jsxs("p", {
                      className: "text-xl text-gray-300",
                      children: [
                        "Why we are the ",
                        g.jsx("span", {
                          className: "text-brand-400 neon-text-blue",
                          children: "absolute",
                        }),
                        " best option to get your ",
                        g.jsx("span", {
                          className: "text-brand-400 neon-text-blue",
                          children: "free",
                        }),
                        " Stake account from.",
                      ],
                    }),
                  ],
                }),
                g.jsx("div", {
                  className: "grid grid-cols-1 md:grid-cols-2 gap-8",
                  children: I0.map((n, r) => {
                    const i = sk[n.icon];
                    return g.jsxs(
                      "div",
                      {
                        className:
                          "group bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-2xl border border-blue-500/20 card-hover",
                        children: [
                          g.jsx("div", {
                            className:
                              "bg-gradient-to-br from-blue-500 to-cyan-500 w-16 h-16 rounded-full flex items-center justify-center mb-6 group-hover:shadow-lg group-hover:shadow-blue-500/50 transition-all duration-300",
                            children: g.jsx(i, {
                              className: "w-8 h-8 text-white",
                            }),
                          }),
                          g.jsx("h3", {
                            className:
                              "text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors duration-300",
                            children: n.title,
                          }),
                          g.jsx("p", {
                            className: "text-gray-300 leading-relaxed",
                            children: n.description,
                          }),
                        ],
                      },
                      r,
                    );
                  }),
                }),
              ],
            }),
            g.jsxs("div", {
              className: "flex flex-col items-center mt-12",
              children: [
                g.jsxs("button", {
                  onClick: () => t(!0),
                  className: `group relative inline-flex items-center gap-2.5 px-7 py-3.5 rounded-xl font-semibold text-white text-[15px]
            bg-gradient-to-r from-brand-600 to-brand-500
            neon-box-blue
            hover:neon-box-blue-strong
            hover:-translate-y-0.5
            transition-all duration-300 ease-out`,
                  children: [
                    g.jsx(ir, { className: "w-4 h-4" }),
                    "Get Your Free Stake Account",
                    g.jsx(ui, {
                      className:
                        "w-4 h-4 group-hover:translate-x-0.5 transition-transform duration-300",
                    }),
                  ],
                }),
                g.jsx("p", {
                  className: "mt-3 text-sm text-gray-500",
                  children: "Takes less than 30 seconds. Seriously.",
                }),
              ],
            }),
          ],
        }),
        g.jsx(ci, { isOpen: e, onClose: () => t(!1) }),
      ],
    });
  },
  ak = { MousePointer: GS, MessageSquare: KS, UserCheck: JS, TrendingUp: qS },
  lk = () => {
    const [e, t] = bt.useState(!1);
    return g.jsxs(g.Fragment, {
      children: [
        g.jsx("section", {
          id: "guide",
          className: "pt-10 pb-20 bg-dark-900",
          children: g.jsxs("div", {
            className: "max-w-6xl mx-auto px-6",
            children: [
              g.jsxs("div", {
                className: "text-center mb-16",
                children: [
                  g.jsx("h2", {
                    className:
                      "text-4xl md:text-5xl font-bold mb-4 text-white tracking-tight",
                    children: "How to get your free Stake account",
                  }),
                  g.jsxs("p", {
                    className: "text-xl text-gray-300",
                    children: [
                      "How to claim your ",
                      g.jsx("span", {
                        className: "text-brand-400 neon-text-blue",
                        children: "free, fully verified",
                      }),
                      " Stake account!",
                    ],
                  }),
                ],
              }),
              g.jsx("div", {
                className:
                  "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 items-stretch",
                children: F0.map((n, r) => {
                  const i = ak[n.icon];
                  return g.jsx(
                    "div",
                    {
                      className: "relative group h-full",
                      children: g.jsxs("div", {
                        className:
                          "relative z-10 bg-dark-800/60 p-6 rounded-2xl border border-brand-500/20 text-center card-hover h-full flex flex-col items-center justify-start",
                        children: [
                          g.jsxs("div", {
                            className:
                              "bg-gradient-to-br from-cyan-500 to-blue-500 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4 relative flex-shrink-0",
                            children: [
                              g.jsx(i, { className: "w-10 h-10 text-white" }),
                              g.jsx("div", {
                                className:
                                  "absolute -top-2 -right-2 bg-green-500 w-8 h-8 rounded-full flex items-center justify-center text-white font-bold text-sm",
                                children: n.step,
                              }),
                            ],
                          }),
                          g.jsx("h3", {
                            className: "text-lg font-bold text-white mb-2",
                            children: n.title,
                          }),
                          g.jsx("p", {
                            className: "text-gray-300 text-sm",
                            children: n.description,
                          }),
                        ],
                      }),
                    },
                    r,
                  );
                }),
              }),
              g.jsxs("div", {
                className: "flex flex-col items-center mt-12",
                children: [
                  g.jsxs("button", {
                    onClick: () => t(!0),
                    className: `group relative inline-flex items-center gap-2.5 px-7 py-3.5 rounded-xl font-semibold text-white text-[15px]
              bg-gradient-to-r from-brand-600 to-brand-500
              neon-box-blue
              hover:neon-box-blue-strong
              hover:-translate-y-0.5
              transition-all duration-300 ease-out`,
                    children: [
                      g.jsx(ir, { className: "w-4 h-4" }),
                      "Get Your Free Stake Account",
                      g.jsx(ui, {
                        className:
                          "w-4 h-4 group-hover:translate-x-0.5 transition-transform duration-300",
                      }),
                    ],
                  }),
                  g.jsx("p", {
                    className: "mt-3 text-sm text-gray-500",
                    children: "Takes less than 30 seconds. Seriously.",
                  }),
                ],
              }),
            ],
          }),
        }),
        g.jsx(ci, { isOpen: e, onClose: () => t(!1) }),
      ],
    });
  },
  uk = () =>
    g.jsx("section", {
      id: "why-us",
      className: "py-20 bg-dark-900 border-t border-blue-500/15",
      children: g.jsxs("div", {
        className: "max-w-6xl mx-auto px-6",
        children: [
          g.jsxs("div", {
            className: "text-center mb-16",
            children: [
              g.jsx("h2", {
                className:
                  "text-4xl md:text-5xl font-bold mb-4 text-white tracking-tight",
                children: "What our players are saying",
              }),
              g.jsxs("p", {
                className: "text-xl text-gray-300",
                children: [
                  "We are the ",
                  g.jsx("span", {
                    className: "text-brand-400 neon-text-blue",
                    children: "only supplier",
                  }),
                  " that has a ",
                  g.jsx("span", {
                    className: "text-brand-400 neon-text-blue",
                    children: "Trustpilot",
                  }),
                  " profile!",
                ],
              }),
            ],
          }),
          g.jsxs("div", {
            className: "grid grid-cols-1 lg:grid-cols-2 gap-12 items-center",
            children: [
              g.jsxs("div", {
                className: "space-y-8",
                children: [
                  g.jsxs("div", {
                    className: "flex items-start gap-4 group",
                    children: [
                      g.jsx("div", {
                        className:
                          "bg-gradient-to-br from-green-500 to-emerald-600 w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 group-hover:shadow-lg group-hover:shadow-green-500/50 transition-all duration-300",
                        children: g.jsx(US, {
                          className: "w-6 h-6 text-white",
                        }),
                      }),
                      g.jsxs("div", {
                        children: [
                          g.jsx("h3", {
                            className: "text-xl font-bold text-white mb-2",
                            children: "Unique Rewards",
                          }),
                          g.jsx("p", {
                            className: "text-gray-300",
                            children:
                              "We're the ONLY provider offering exclusive rewards directly on your new account. These exclusive rewards sets us apart from every competitor.",
                          }),
                        ],
                      }),
                    ],
                  }),
                  g.jsxs("div", {
                    className: "flex items-start gap-4 group",
                    children: [
                      g.jsx("div", {
                        className:
                          "bg-gradient-to-br from-blue-500 to-cyan-600 w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 group-hover:shadow-lg group-hover:shadow-blue-500/50 transition-all duration-300",
                        children: g.jsx(Ru, {
                          className: "w-6 h-6 text-white",
                        }),
                      }),
                      g.jsxs("div", {
                        children: [
                          g.jsx("h3", {
                            className: "text-xl font-bold text-white mb-2",
                            children: "Trusted by Hundreds",
                          }),
                          g.jsx("p", {
                            className: "text-gray-300",
                            children:
                              "Join hundreds of satisfied players who have successfully used our verified accounts. Our reputation is built on reliability and trust.",
                          }),
                        ],
                      }),
                    ],
                  }),
                  g.jsxs("div", {
                    className: "flex items-start gap-4 group",
                    children: [
                      g.jsx("div", {
                        className:
                          "bg-gradient-to-br from-purple-500 to-pink-600 w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 group-hover:shadow-lg group-hover:shadow-purple-500/50 transition-all duration-300",
                        children: g.jsx(ZS, {
                          className: "w-6 h-6 text-white",
                        }),
                      }),
                      g.jsxs("div", {
                        children: [
                          g.jsx("h3", {
                            className: "text-xl font-bold text-white mb-2",
                            children: "Premium Quality",
                          }),
                          g.jsx("p", {
                            className: "text-gray-300",
                            children:
                              "Every account is carefully verified and fresh. We ensure that every account is freshly created upon request and if wanted, we can even use your own private email.",
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
              g.jsxs("div", {
                className:
                  "bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-2xl border border-blue-500/30 relative overflow-hidden",
                children: [
                  g.jsx("div", {
                    className:
                      "absolute inset-0 bg-gradient-to-br from-blue-500/5 to-cyan-500/5",
                  }),
                  g.jsxs("div", {
                    className: "relative z-10",
                    children: [
                      g.jsxs("div", {
                        className: "flex items-center gap-3 mb-6",
                        children: [
                          g.jsx(Go, { className: "w-8 h-8 text-yellow-400" }),
                          g.jsx("h3", {
                            className: "text-2xl font-bold text-white",
                            children: "Customer Reviews",
                          }),
                        ],
                      }),
                      g.jsxs("div", {
                        className: "space-y-6",
                        children: [
                          g.jsxs("div", {
                            className: "bg-gray-700/50 p-4 rounded-lg",
                            children: [
                              g.jsx("div", {
                                className: "flex gap-1 mb-2",
                                children: [...Array(5)].map((e, t) =>
                                  g.jsx(
                                    Go,
                                    {
                                      className:
                                        "w-4 h-4 fill-yellow-400 text-yellow-400",
                                    },
                                    t,
                                  ),
                                ),
                              }),
                              g.jsx("p", {
                                className: "text-gray-300 italic",
                                children: `"I was the first customer, so I was a bit skeptical at first. But everything went super smooth, I got my account in about 2 hours and was even able to use my private email for it. I'll definitely be buying more here in the future. Thanks guys ❤️"`,
                              }),
                              g.jsx("p", {
                                className: "text-blue-400 text-sm mt-2",
                                children: "- jacob",
                              }),
                            ],
                          }),
                          g.jsxs("div", {
                            className: "bg-gray-700/50 p-4 rounded-lg",
                            children: [
                              g.jsx("div", {
                                className: "flex gap-1 mb-2",
                                children: [...Array(5)].map((e, t) =>
                                  g.jsx(
                                    Go,
                                    {
                                      className:
                                        "w-4 h-4 fill-yellow-400 text-yellow-400",
                                    },
                                    t,
                                  ),
                                ),
                              }),
                              g.jsx("p", {
                                className: "text-gray-300 italic",
                                children:
                                  '"Support and process was Very fast and good thanks!"',
                              }),
                              g.jsx("p", {
                                className: "text-blue-400 text-sm mt-2",
                                children: "- Niels B.",
                              }),
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
            ],
          }),
          g.jsx("div", {
            className: "text-center mt-12",
            children: g.jsx("a", {
              href: "https://www.trustpilot.com/review/stakeaccountz.gg",
              target: "_blank",
              rel: "noopener noreferrer",
              className:
                "group relative inline-flex items-center gap-2.5 px-7 py-3.5 rounded-xl font-semibold text-white text-[15px] bg-gradient-to-r from-brand-600 to-brand-500 neon-box-blue hover:neon-box-blue-strong hover:-translate-y-0.5 transition-all duration-300 ease-out",
              children: "Trustpilot",
            }),
          }),
        ],
      }),
    }),
  ck = () => {
    const [e, t] = bt.useState(null),
      [n, r] = bt.useState(!1),
      i = (s) => {
        t(e === s ? null : s);
      };
    return g.jsxs(g.Fragment, {
      children: [
        g.jsx("section", {
          id: "faq",
          className: "py-20 bg-dark-900 border-t border-blue-500/15",
          children: g.jsxs("div", {
            className: "max-w-4xl mx-auto px-6",
            children: [
              g.jsxs("div", {
                className: "text-center mb-16",
                children: [
                  g.jsx("h1", {
                    className:
                      "text-4xl md:text-5xl font-bold mb-4 text-white tracking-tight",
                    children: "Frequently Asked Questions",
                  }),
                  g.jsxs("p", {
                    className: "text-xl text-gray-300",
                    children: [
                      "Everything you ",
                      g.jsx("span", {
                        className: "text-brand-400 neon-text-blue",
                        children: "need to know",
                      }),
                      " about our service!",
                    ],
                  }),
                ],
              }),
              g.jsx("div", {
                className: "space-y-4",
                children: O0.map((s, o) =>
                  g.jsxs(
                    "div",
                    {
                      className:
                        "bg-gradient-to-r from-gray-800 to-gray-900 rounded-2xl border border-blue-500/20 overflow-hidden",
                      children: [
                        g.jsxs("button", {
                          onClick: () => i(o),
                          className:
                            "w-full p-4 sm:p-6 text-left flex items-center justify-between",
                          children: [
                            g.jsx("h3", {
                              className:
                                "text-base sm:text-lg font-semibold text-white pr-3 sm:pr-4",
                              children: s.question,
                            }),
                            g.jsx("div", {
                              className: "text-blue-400 flex-shrink-0",
                              children:
                                e === o
                                  ? g.jsx(WS, {
                                      className: "w-5 h-5 sm:w-6 sm:h-6",
                                    })
                                  : g.jsx($S, {
                                      className: "w-5 h-5 sm:w-6 sm:h-6",
                                    }),
                            }),
                          ],
                        }),
                        g.jsx("div", {
                          className: `transition-all duration-300 ease-in-out ${e === o ? "max-h-96 opacity-100" : "max-h-0 opacity-0"} overflow-hidden`,
                          children: g.jsx("div", {
                            className: "px-4 sm:px-6 pb-4 sm:pb-6",
                            children: g.jsx("div", {
                              className: "bg-gray-700/30 p-3 sm:p-4 rounded-lg",
                              children: g.jsx("p", {
                                className:
                                  "text-gray-300 leading-relaxed text-sm sm:text-base",
                                children: s.answer,
                              }),
                            }),
                          }),
                        }),
                      ],
                    },
                    o,
                  ),
                ),
              }),
              g.jsxs("div", {
                className: "flex flex-col items-center mt-12",
                children: [
                  g.jsxs("button", {
                    onClick: () => r(!0),
                    className: `group relative inline-flex items-center gap-2.5 px-7 py-3.5 rounded-xl font-semibold text-white text-[15px]
              bg-gradient-to-r from-brand-600 to-brand-500
              neon-box-blue
              hover:neon-box-blue-strong
              hover:-translate-y-0.5
              transition-all duration-300 ease-out`,
                    children: [
                      g.jsx(ir, { className: "w-4 h-4" }),
                      "Get Your Free Stake Account",
                      g.jsx(ui, {
                        className:
                          "w-4 h-4 group-hover:translate-x-0.5 transition-transform duration-300",
                      }),
                    ],
                  }),
                  g.jsx("p", {
                    className: "mt-3 text-sm text-gray-500",
                    children: "Takes less than 30 seconds. Seriously.",
                  }),
                ],
              }),
            ],
          }),
        }),
        g.jsx(ci, { isOpen: n, onClose: () => r(!1) }),
      ],
    });
  },
  fk = () => {
    const [e, t] = bt.useState(!1);
    return g.jsxs(g.Fragment, {
      children: [
        g.jsx("footer", {
          id: "contact",
          className: "py-16 bg-dark-900 border-t border-blue-500/15",
          children: g.jsxs("div", {
            className: "max-w-6xl mx-auto px-6",
            children: [
              g.jsxs("div", {
                className: "text-center mb-12",
                children: [
                  g.jsx("h1", {
                    className:
                      "text-4xl md:text-5xl font-bold mb-4 text-white tracking-tight",
                    children: "Ready to Get Started?",
                  }),
                  g.jsxs("p", {
                    className: "text-xl text-gray-300 mb-8",
                    children: [
                      "Join thousands of ",
                      g.jsx("span", {
                        className: "text-brand-400 neon-text-blue",
                        children: "satisfied customers",
                      }),
                      " today!",
                    ],
                  }),
                  g.jsxs("div", {
                    className: "flex flex-col items-center",
                    children: [
                      g.jsxs("button", {
                        onClick: () => t(!0),
                        className: `group relative inline-flex items-center gap-2.5 px-7 py-3.5 rounded-xl font-semibold text-white text-[15px]
                bg-gradient-to-r from-brand-600 to-brand-500
                neon-box-blue
                hover:neon-box-blue-strong
                hover:-translate-y-0.5
                transition-all duration-300 ease-out`,
                        children: [
                          g.jsx(ir, { className: "w-4 h-4" }),
                          "Get Your Free Stake Account",
                          g.jsx(ui, {
                            className:
                              "w-4 h-4 group-hover:translate-x-0.5 transition-transform duration-300",
                          }),
                        ],
                      }),
                      g.jsx("p", {
                        className: "mt-3 text-sm text-gray-500",
                        children: "Takes less than 30 seconds. Seriously.",
                      }),
                    ],
                  }),
                ],
              }),
              g.jsxs("div", {
                className: "grid grid-cols-1 md:grid-cols-3 gap-8 mb-12",
                children: [
                  g.jsxs("div", {
                    className: "text-center",
                    children: [
                      g.jsx("div", {
                        className:
                          "bg-gradient-to-br from-blue-500 to-cyan-500 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4",
                        children: g.jsx(ay, {
                          className: "w-6 h-6 text-white",
                        }),
                      }),
                      g.jsx("h3", {
                        className: "text-lg font-semibold text-white mb-2",
                        children: "Human Support",
                      }),
                      g.jsx("p", {
                        className: "text-gray-300 text-sm",
                        children: "24/7 customer support via Telegram",
                      }),
                    ],
                  }),
                  g.jsxs("div", {
                    className: "text-center",
                    children: [
                      g.jsx("div", {
                        className:
                          "bg-gradient-to-br from-purple-500 to-pink-500 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4",
                        children: g.jsx(oy, {
                          className: "w-6 h-6 text-white",
                        }),
                      }),
                      g.jsx("h3", {
                        className: "text-lg font-semibold text-white mb-2",
                        children: "Email Access",
                      }),
                      g.jsx("p", {
                        className: "text-gray-300 text-sm",
                        children: "Full email control included",
                      }),
                    ],
                  }),
                  g.jsxs("div", {
                    className: "text-center",
                    children: [
                      g.jsx("div", {
                        className:
                          "bg-gradient-to-br from-green-500 to-emerald-500 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4",
                        children: g.jsx(Ru, {
                          className: "w-6 h-6 text-white",
                        }),
                      }),
                      g.jsx("h3", {
                        className: "text-lg font-semibold text-white mb-2",
                        children: "Trusted Service",
                      }),
                      g.jsx("p", {
                        className: "text-gray-300 text-sm",
                        children: "Hundreds of happy customers",
                      }),
                    ],
                  }),
                ],
              }),
              g.jsxs("div", {
                className: "border-t border-gray-700 pt-8 text-center",
                children: [
                  g.jsx("p", {
                    className: "text-gray-400 text-sm",
                    children: "© 2026 StakeAccountz. All rights reserved.",
                  }),
                  g.jsx("p", {
                    className: "text-gray-500 text-xs mt-2",
                    children: "Free, fully verified stake accounts!",
                  }),
                ],
              }),
            ],
          }),
        }),
        g.jsx(ci, { isOpen: e, onClose: () => t(!1) }),
      ],
    });
  };
function dk() {
  return g.jsxs("div", {
    className: "bg-dark-950 min-h-screen",
    children: [
      g.jsx(B0, {}),
      g.jsxs("main", {
        children: [
          g.jsx(ik, {}),
          g.jsx(lk, {}),
          g.jsx(ok, {}),
          g.jsx(uk, {}),
          g.jsx(ck, {}),
          g.jsx(fk, {}),
        ],
      }),
    ],
  });
}
xp(document.getElementById("root")).render(
  g.jsx(j.StrictMode, { children: g.jsx(dk, {}) }),
);
