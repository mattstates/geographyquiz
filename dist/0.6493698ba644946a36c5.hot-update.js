webpackHotUpdate(0,{

/***/ "./node_modules/d3-array/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__src_bisect__ = __webpack_require__("./node_modules/d3-array/src/bisect.js");
/* unused harmony reexport bisect */
/* unused harmony reexport bisectRight */
/* unused harmony reexport bisectLeft */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__src_ascending__ = __webpack_require__("./node_modules/d3-array/src/ascending.js");
/* unused harmony reexport ascending */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__src_bisector__ = __webpack_require__("./node_modules/d3-array/src/bisector.js");
/* unused harmony reexport bisector */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__src_cross__ = __webpack_require__("./node_modules/d3-array/src/cross.js");
/* unused harmony reexport cross */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__src_descending__ = __webpack_require__("./node_modules/d3-array/src/descending.js");
/* unused harmony reexport descending */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__src_deviation__ = __webpack_require__("./node_modules/d3-array/src/deviation.js");
/* unused harmony reexport deviation */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__src_extent__ = __webpack_require__("./node_modules/d3-array/src/extent.js");
/* unused harmony reexport extent */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__src_histogram__ = __webpack_require__("./node_modules/d3-array/src/histogram.js");
/* unused harmony reexport histogram */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__src_threshold_freedmanDiaconis__ = __webpack_require__("./node_modules/d3-array/src/threshold/freedmanDiaconis.js");
/* unused harmony reexport thresholdFreedmanDiaconis */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__src_threshold_scott__ = __webpack_require__("./node_modules/d3-array/src/threshold/scott.js");
/* unused harmony reexport thresholdScott */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__src_threshold_sturges__ = __webpack_require__("./node_modules/d3-array/src/threshold/sturges.js");
/* unused harmony reexport thresholdSturges */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__src_max__ = __webpack_require__("./node_modules/d3-array/src/max.js");
/* unused harmony reexport max */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__src_mean__ = __webpack_require__("./node_modules/d3-array/src/mean.js");
/* unused harmony reexport mean */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__src_median__ = __webpack_require__("./node_modules/d3-array/src/median.js");
/* unused harmony reexport median */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__src_merge__ = __webpack_require__("./node_modules/d3-array/src/merge.js");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_14__src_merge__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__src_min__ = __webpack_require__("./node_modules/d3-array/src/min.js");
/* unused harmony reexport min */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__src_pairs__ = __webpack_require__("./node_modules/d3-array/src/pairs.js");
/* unused harmony reexport pairs */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__src_permute__ = __webpack_require__("./node_modules/d3-array/src/permute.js");
/* unused harmony reexport permute */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__src_quantile__ = __webpack_require__("./node_modules/d3-array/src/quantile.js");
/* unused harmony reexport quantile */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__src_range__ = __webpack_require__("./node_modules/d3-array/src/range.js");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_19__src_range__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__src_scan__ = __webpack_require__("./node_modules/d3-array/src/scan.js");
/* unused harmony reexport scan */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__src_shuffle__ = __webpack_require__("./node_modules/d3-array/src/shuffle.js");
/* unused harmony reexport shuffle */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__src_sum__ = __webpack_require__("./node_modules/d3-array/src/sum.js");
/* unused harmony reexport sum */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__src_ticks__ = __webpack_require__("./node_modules/d3-array/src/ticks.js");
/* unused harmony reexport ticks */
/* unused harmony reexport tickIncrement */
/* unused harmony reexport tickStep */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__src_transpose__ = __webpack_require__("./node_modules/d3-array/src/transpose.js");
/* unused harmony reexport transpose */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__src_variance__ = __webpack_require__("./node_modules/d3-array/src/variance.js");
/* unused harmony reexport variance */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__src_zip__ = __webpack_require__("./node_modules/d3-array/src/zip.js");
/* unused harmony reexport zip */





























/***/ }),

/***/ "./node_modules/d3-array/src/array.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return slice; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return map; });
var array = Array.prototype;

var slice = array.slice;
var map = array.map;


/***/ }),

/***/ "./node_modules/d3-array/src/ascending.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (function(a, b) {
  return a < b ? -1 : a > b ? 1 : a >= b ? 0 : NaN;
});


/***/ }),

/***/ "./node_modules/d3-array/src/bisect.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export bisectRight */
/* unused harmony export bisectLeft */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ascending__ = __webpack_require__("./node_modules/d3-array/src/ascending.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__bisector__ = __webpack_require__("./node_modules/d3-array/src/bisector.js");



var ascendingBisect = Object(__WEBPACK_IMPORTED_MODULE_1__bisector__["a" /* default */])(__WEBPACK_IMPORTED_MODULE_0__ascending__["a" /* default */]);
var bisectRight = ascendingBisect.right;
var bisectLeft = ascendingBisect.left;
/* harmony default export */ __webpack_exports__["a"] = (bisectRight);


/***/ }),

/***/ "./node_modules/d3-array/src/bisector.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ascending__ = __webpack_require__("./node_modules/d3-array/src/ascending.js");


/* harmony default export */ __webpack_exports__["a"] = (function(compare) {
  if (compare.length === 1) compare = ascendingComparator(compare);
  return {
    left: function(a, x, lo, hi) {
      if (lo == null) lo = 0;
      if (hi == null) hi = a.length;
      while (lo < hi) {
        var mid = lo + hi >>> 1;
        if (compare(a[mid], x) < 0) lo = mid + 1;
        else hi = mid;
      }
      return lo;
    },
    right: function(a, x, lo, hi) {
      if (lo == null) lo = 0;
      if (hi == null) hi = a.length;
      while (lo < hi) {
        var mid = lo + hi >>> 1;
        if (compare(a[mid], x) > 0) hi = mid;
        else lo = mid + 1;
      }
      return lo;
    }
  };
});

function ascendingComparator(f) {
  return function(d, x) {
    return Object(__WEBPACK_IMPORTED_MODULE_0__ascending__["a" /* default */])(f(d), x);
  };
}


/***/ }),

/***/ "./node_modules/d3-array/src/constant.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (function(x) {
  return function() {
    return x;
  };
});


/***/ }),

/***/ "./node_modules/d3-array/src/cross.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__pairs__ = __webpack_require__("./node_modules/d3-array/src/pairs.js");


/* unused harmony default export */ var _unused_webpack_default_export = (function(values0, values1, reduce) {
  var n0 = values0.length,
      n1 = values1.length,
      values = new Array(n0 * n1),
      i0,
      i1,
      i,
      value0;

  if (reduce == null) reduce = __WEBPACK_IMPORTED_MODULE_0__pairs__["a" /* pair */];

  for (i0 = i = 0; i0 < n0; ++i0) {
    for (value0 = values0[i0], i1 = 0; i1 < n1; ++i1, ++i) {
      values[i] = reduce(value0, values1[i1]);
    }
  }

  return values;
});


/***/ }),

/***/ "./node_modules/d3-array/src/descending.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony default export */ var _unused_webpack_default_export = (function(a, b) {
  return b < a ? -1 : b > a ? 1 : b >= a ? 0 : NaN;
});


/***/ }),

/***/ "./node_modules/d3-array/src/deviation.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__variance__ = __webpack_require__("./node_modules/d3-array/src/variance.js");


/* harmony default export */ __webpack_exports__["a"] = (function(array, f) {
  var v = Object(__WEBPACK_IMPORTED_MODULE_0__variance__["a" /* default */])(array, f);
  return v ? Math.sqrt(v) : v;
});


/***/ }),

/***/ "./node_modules/d3-array/src/extent.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (function(values, valueof) {
  var n = values.length,
      i = -1,
      value,
      min,
      max;

  if (valueof == null) {
    while (++i < n) { // Find the first comparable value.
      if ((value = values[i]) != null && value >= value) {
        min = max = value;
        while (++i < n) { // Compare the remaining values.
          if ((value = values[i]) != null) {
            if (min > value) min = value;
            if (max < value) max = value;
          }
        }
      }
    }
  }

  else {
    while (++i < n) { // Find the first comparable value.
      if ((value = valueof(values[i], i, values)) != null && value >= value) {
        min = max = value;
        while (++i < n) { // Compare the remaining values.
          if ((value = valueof(values[i], i, values)) != null) {
            if (min > value) min = value;
            if (max < value) max = value;
          }
        }
      }
    }
  }

  return [min, max];
});


/***/ }),

/***/ "./node_modules/d3-array/src/histogram.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__array__ = __webpack_require__("./node_modules/d3-array/src/array.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__bisect__ = __webpack_require__("./node_modules/d3-array/src/bisect.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__constant__ = __webpack_require__("./node_modules/d3-array/src/constant.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__extent__ = __webpack_require__("./node_modules/d3-array/src/extent.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__identity__ = __webpack_require__("./node_modules/d3-array/src/identity.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__range__ = __webpack_require__("./node_modules/d3-array/src/range.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ticks__ = __webpack_require__("./node_modules/d3-array/src/ticks.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__threshold_sturges__ = __webpack_require__("./node_modules/d3-array/src/threshold/sturges.js");









/* unused harmony default export */ var _unused_webpack_default_export = (function() {
  var value = __WEBPACK_IMPORTED_MODULE_4__identity__["a" /* default */],
      domain = __WEBPACK_IMPORTED_MODULE_3__extent__["a" /* default */],
      threshold = __WEBPACK_IMPORTED_MODULE_7__threshold_sturges__["a" /* default */];

  function histogram(data) {
    var i,
        n = data.length,
        x,
        values = new Array(n);

    for (i = 0; i < n; ++i) {
      values[i] = value(data[i], i, data);
    }

    var xz = domain(values),
        x0 = xz[0],
        x1 = xz[1],
        tz = threshold(values, x0, x1);

    // Convert number of thresholds into uniform thresholds.
    if (!Array.isArray(tz)) {
      tz = Object(__WEBPACK_IMPORTED_MODULE_6__ticks__["a" /* tickStep */])(x0, x1, tz);
      tz = Object(__WEBPACK_IMPORTED_MODULE_5__range__["a" /* default */])(Math.ceil(x0 / tz) * tz, Math.floor(x1 / tz) * tz, tz); // exclusive
    }

    // Remove any thresholds outside the domain.
    var m = tz.length;
    while (tz[0] <= x0) tz.shift(), --m;
    while (tz[m - 1] > x1) tz.pop(), --m;

    var bins = new Array(m + 1),
        bin;

    // Initialize bins.
    for (i = 0; i <= m; ++i) {
      bin = bins[i] = [];
      bin.x0 = i > 0 ? tz[i - 1] : x0;
      bin.x1 = i < m ? tz[i] : x1;
    }

    // Assign data to bins by value, ignoring any outside the domain.
    for (i = 0; i < n; ++i) {
      x = values[i];
      if (x0 <= x && x <= x1) {
        bins[Object(__WEBPACK_IMPORTED_MODULE_1__bisect__["a" /* default */])(tz, x, 0, m)].push(data[i]);
      }
    }

    return bins;
  }

  histogram.value = function(_) {
    return arguments.length ? (value = typeof _ === "function" ? _ : Object(__WEBPACK_IMPORTED_MODULE_2__constant__["a" /* default */])(_), histogram) : value;
  };

  histogram.domain = function(_) {
    return arguments.length ? (domain = typeof _ === "function" ? _ : Object(__WEBPACK_IMPORTED_MODULE_2__constant__["a" /* default */])([_[0], _[1]]), histogram) : domain;
  };

  histogram.thresholds = function(_) {
    return arguments.length ? (threshold = typeof _ === "function" ? _ : Array.isArray(_) ? Object(__WEBPACK_IMPORTED_MODULE_2__constant__["a" /* default */])(__WEBPACK_IMPORTED_MODULE_0__array__["b" /* slice */].call(_)) : Object(__WEBPACK_IMPORTED_MODULE_2__constant__["a" /* default */])(_), histogram) : threshold;
  };

  return histogram;
});


/***/ }),

/***/ "./node_modules/d3-array/src/identity.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (function(x) {
  return x;
});


/***/ }),

/***/ "./node_modules/d3-array/src/max.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony default export */ var _unused_webpack_default_export = (function(values, valueof) {
  var n = values.length,
      i = -1,
      value,
      max;

  if (valueof == null) {
    while (++i < n) { // Find the first comparable value.
      if ((value = values[i]) != null && value >= value) {
        max = value;
        while (++i < n) { // Compare the remaining values.
          if ((value = values[i]) != null && value > max) {
            max = value;
          }
        }
      }
    }
  }

  else {
    while (++i < n) { // Find the first comparable value.
      if ((value = valueof(values[i], i, values)) != null && value >= value) {
        max = value;
        while (++i < n) { // Compare the remaining values.
          if ((value = valueof(values[i], i, values)) != null && value > max) {
            max = value;
          }
        }
      }
    }
  }

  return max;
});


/***/ }),

/***/ "./node_modules/d3-array/src/mean.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__number__ = __webpack_require__("./node_modules/d3-array/src/number.js");


/* unused harmony default export */ var _unused_webpack_default_export = (function(values, valueof) {
  var n = values.length,
      m = n,
      i = -1,
      value,
      sum = 0;

  if (valueof == null) {
    while (++i < n) {
      if (!isNaN(value = Object(__WEBPACK_IMPORTED_MODULE_0__number__["a" /* default */])(values[i]))) sum += value;
      else --m;
    }
  }

  else {
    while (++i < n) {
      if (!isNaN(value = Object(__WEBPACK_IMPORTED_MODULE_0__number__["a" /* default */])(valueof(values[i], i, values)))) sum += value;
      else --m;
    }
  }

  if (m) return sum / m;
});


/***/ }),

/***/ "./node_modules/d3-array/src/median.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ascending__ = __webpack_require__("./node_modules/d3-array/src/ascending.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__number__ = __webpack_require__("./node_modules/d3-array/src/number.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__quantile__ = __webpack_require__("./node_modules/d3-array/src/quantile.js");




/* unused harmony default export */ var _unused_webpack_default_export = (function(values, valueof) {
  var n = values.length,
      i = -1,
      value,
      numbers = [];

  if (valueof == null) {
    while (++i < n) {
      if (!isNaN(value = Object(__WEBPACK_IMPORTED_MODULE_1__number__["a" /* default */])(values[i]))) {
        numbers.push(value);
      }
    }
  }

  else {
    while (++i < n) {
      if (!isNaN(value = Object(__WEBPACK_IMPORTED_MODULE_1__number__["a" /* default */])(valueof(values[i], i, values)))) {
        numbers.push(value);
      }
    }
  }

  return Object(__WEBPACK_IMPORTED_MODULE_2__quantile__["a" /* default */])(numbers.sort(__WEBPACK_IMPORTED_MODULE_0__ascending__["a" /* default */]), 0.5);
});


/***/ }),

/***/ "./node_modules/d3-array/src/merge.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (function(arrays) {
  var n = arrays.length,
      m,
      i = -1,
      j = 0,
      merged,
      array;

  while (++i < n) j += arrays[i].length;
  merged = new Array(j);

  while (--n >= 0) {
    array = arrays[n];
    m = array.length;
    while (--m >= 0) {
      merged[--j] = array[m];
    }
  }

  return merged;
});


/***/ }),

/***/ "./node_modules/d3-array/src/min.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (function(values, valueof) {
  var n = values.length,
      i = -1,
      value,
      min;

  if (valueof == null) {
    while (++i < n) { // Find the first comparable value.
      if ((value = values[i]) != null && value >= value) {
        min = value;
        while (++i < n) { // Compare the remaining values.
          if ((value = values[i]) != null && min > value) {
            min = value;
          }
        }
      }
    }
  }

  else {
    while (++i < n) { // Find the first comparable value.
      if ((value = valueof(values[i], i, values)) != null && value >= value) {
        min = value;
        while (++i < n) { // Compare the remaining values.
          if ((value = valueof(values[i], i, values)) != null && min > value) {
            min = value;
          }
        }
      }
    }
  }

  return min;
});


/***/ }),

/***/ "./node_modules/d3-array/src/number.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (function(x) {
  return x === null ? NaN : +x;
});


/***/ }),

/***/ "./node_modules/d3-array/src/pairs.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = pair;
/* unused harmony default export */ var _unused_webpack_default_export = (function(array, f) {
  if (f == null) f = pair;
  var i = 0, n = array.length - 1, p = array[0], pairs = new Array(n < 0 ? 0 : n);
  while (i < n) pairs[i] = f(p, p = array[++i]);
  return pairs;
});

function pair(a, b) {
  return [a, b];
}


/***/ }),

/***/ "./node_modules/d3-array/src/permute.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony default export */ var _unused_webpack_default_export = (function(array, indexes) {
  var i = indexes.length, permutes = new Array(i);
  while (i--) permutes[i] = array[indexes[i]];
  return permutes;
});


/***/ }),

/***/ "./node_modules/d3-array/src/quantile.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__number__ = __webpack_require__("./node_modules/d3-array/src/number.js");


/* harmony default export */ __webpack_exports__["a"] = (function(values, p, valueof) {
  if (valueof == null) valueof = __WEBPACK_IMPORTED_MODULE_0__number__["a" /* default */];
  if (!(n = values.length)) return;
  if ((p = +p) <= 0 || n < 2) return +valueof(values[0], 0, values);
  if (p >= 1) return +valueof(values[n - 1], n - 1, values);
  var n,
      i = (n - 1) * p,
      i0 = Math.floor(i),
      value0 = +valueof(values[i0], i0, values),
      value1 = +valueof(values[i0 + 1], i0 + 1, values);
  return value0 + (value1 - value0) * (i - i0);
});


/***/ }),

/***/ "./node_modules/d3-array/src/range.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (function(start, stop, step) {
  start = +start, stop = +stop, step = (n = arguments.length) < 2 ? (stop = start, start = 0, 1) : n < 3 ? 1 : +step;

  var i = -1,
      n = Math.max(0, Math.ceil((stop - start) / step)) | 0,
      range = new Array(n);

  while (++i < n) {
    range[i] = start + i * step;
  }

  return range;
});


/***/ }),

/***/ "./node_modules/d3-array/src/scan.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ascending__ = __webpack_require__("./node_modules/d3-array/src/ascending.js");


/* unused harmony default export */ var _unused_webpack_default_export = (function(values, compare) {
  if (!(n = values.length)) return;
  var n,
      i = 0,
      j = 0,
      xi,
      xj = values[j];

  if (compare == null) compare = __WEBPACK_IMPORTED_MODULE_0__ascending__["a" /* default */];

  while (++i < n) {
    if (compare(xi = values[i], xj) < 0 || compare(xj, xj) !== 0) {
      xj = xi, j = i;
    }
  }

  if (compare(xj, xj) === 0) return j;
});


/***/ }),

/***/ "./node_modules/d3-array/src/shuffle.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony default export */ var _unused_webpack_default_export = (function(array, i0, i1) {
  var m = (i1 == null ? array.length : i1) - (i0 = i0 == null ? 0 : +i0),
      t,
      i;

  while (m) {
    i = Math.random() * m-- | 0;
    t = array[m + i0];
    array[m + i0] = array[i + i0];
    array[i + i0] = t;
  }

  return array;
});


/***/ }),

/***/ "./node_modules/d3-array/src/sum.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony default export */ var _unused_webpack_default_export = (function(values, valueof) {
  var n = values.length,
      i = -1,
      value,
      sum = 0;

  if (valueof == null) {
    while (++i < n) {
      if (value = +values[i]) sum += value; // Note: zero and null are equivalent.
    }
  }

  else {
    while (++i < n) {
      if (value = +valueof(values[i], i, values)) sum += value;
    }
  }

  return sum;
});


/***/ }),

/***/ "./node_modules/d3-array/src/threshold/freedmanDiaconis.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__array__ = __webpack_require__("./node_modules/d3-array/src/array.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ascending__ = __webpack_require__("./node_modules/d3-array/src/ascending.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__number__ = __webpack_require__("./node_modules/d3-array/src/number.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__quantile__ = __webpack_require__("./node_modules/d3-array/src/quantile.js");





/* unused harmony default export */ var _unused_webpack_default_export = (function(values, min, max) {
  values = __WEBPACK_IMPORTED_MODULE_0__array__["a" /* map */].call(values, __WEBPACK_IMPORTED_MODULE_2__number__["a" /* default */]).sort(__WEBPACK_IMPORTED_MODULE_1__ascending__["a" /* default */]);
  return Math.ceil((max - min) / (2 * (Object(__WEBPACK_IMPORTED_MODULE_3__quantile__["a" /* default */])(values, 0.75) - Object(__WEBPACK_IMPORTED_MODULE_3__quantile__["a" /* default */])(values, 0.25)) * Math.pow(values.length, -1 / 3)));
});


/***/ }),

/***/ "./node_modules/d3-array/src/threshold/scott.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__deviation__ = __webpack_require__("./node_modules/d3-array/src/deviation.js");


/* unused harmony default export */ var _unused_webpack_default_export = (function(values, min, max) {
  return Math.ceil((max - min) / (3.5 * Object(__WEBPACK_IMPORTED_MODULE_0__deviation__["a" /* default */])(values) * Math.pow(values.length, -1 / 3)));
});


/***/ }),

/***/ "./node_modules/d3-array/src/threshold/sturges.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (function(values) {
  return Math.ceil(Math.log(values.length) / Math.LN2) + 1;
});


/***/ }),

/***/ "./node_modules/d3-array/src/ticks.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export tickIncrement */
/* harmony export (immutable) */ __webpack_exports__["a"] = tickStep;
var e10 = Math.sqrt(50),
    e5 = Math.sqrt(10),
    e2 = Math.sqrt(2);

/* unused harmony default export */ var _unused_webpack_default_export = (function(start, stop, count) {
  var reverse = stop < start,
      i = -1,
      n,
      ticks,
      step;

  if (reverse) n = start, start = stop, stop = n;

  if ((step = tickIncrement(start, stop, count)) === 0 || !isFinite(step)) return [];

  if (step > 0) {
    start = Math.ceil(start / step);
    stop = Math.floor(stop / step);
    ticks = new Array(n = Math.ceil(stop - start + 1));
    while (++i < n) ticks[i] = (start + i) * step;
  } else {
    start = Math.floor(start * step);
    stop = Math.ceil(stop * step);
    ticks = new Array(n = Math.ceil(start - stop + 1));
    while (++i < n) ticks[i] = (start - i) / step;
  }

  if (reverse) ticks.reverse();

  return ticks;
});

function tickIncrement(start, stop, count) {
  var step = (stop - start) / Math.max(0, count),
      power = Math.floor(Math.log(step) / Math.LN10),
      error = step / Math.pow(10, power);
  return power >= 0
      ? (error >= e10 ? 10 : error >= e5 ? 5 : error >= e2 ? 2 : 1) * Math.pow(10, power)
      : -Math.pow(10, -power) / (error >= e10 ? 10 : error >= e5 ? 5 : error >= e2 ? 2 : 1);
}

function tickStep(start, stop, count) {
  var step0 = Math.abs(stop - start) / Math.max(0, count),
      step1 = Math.pow(10, Math.floor(Math.log(step0) / Math.LN10)),
      error = step0 / step1;
  if (error >= e10) step1 *= 10;
  else if (error >= e5) step1 *= 5;
  else if (error >= e2) step1 *= 2;
  return stop < start ? -step1 : step1;
}


/***/ }),

/***/ "./node_modules/d3-array/src/transpose.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__min__ = __webpack_require__("./node_modules/d3-array/src/min.js");


/* harmony default export */ __webpack_exports__["a"] = (function(matrix) {
  if (!(n = matrix.length)) return [];
  for (var i = -1, m = Object(__WEBPACK_IMPORTED_MODULE_0__min__["a" /* default */])(matrix, length), transpose = new Array(m); ++i < m;) {
    for (var j = -1, n, row = transpose[i] = new Array(n); ++j < n;) {
      row[j] = matrix[j][i];
    }
  }
  return transpose;
});

function length(d) {
  return d.length;
}


/***/ }),

/***/ "./node_modules/d3-array/src/variance.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__number__ = __webpack_require__("./node_modules/d3-array/src/number.js");


/* harmony default export */ __webpack_exports__["a"] = (function(values, valueof) {
  var n = values.length,
      m = 0,
      i = -1,
      mean = 0,
      value,
      delta,
      sum = 0;

  if (valueof == null) {
    while (++i < n) {
      if (!isNaN(value = Object(__WEBPACK_IMPORTED_MODULE_0__number__["a" /* default */])(values[i]))) {
        delta = value - mean;
        mean += delta / ++m;
        sum += delta * (value - mean);
      }
    }
  }

  else {
    while (++i < n) {
      if (!isNaN(value = Object(__WEBPACK_IMPORTED_MODULE_0__number__["a" /* default */])(valueof(values[i], i, values)))) {
        delta = value - mean;
        mean += delta / ++m;
        sum += delta * (value - mean);
      }
    }
  }

  if (m > 1) return sum / (m - 1);
});


/***/ }),

/***/ "./node_modules/d3-array/src/zip.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__transpose__ = __webpack_require__("./node_modules/d3-array/src/transpose.js");


/* unused harmony default export */ var _unused_webpack_default_export = (function() {
  return Object(__WEBPACK_IMPORTED_MODULE_0__transpose__["a" /* default */])(arguments);
});


/***/ }),

/***/ "./node_modules/d3-geo-projection/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__src_airy__ = __webpack_require__("./node_modules/d3-geo-projection/src/airy.js");
/* unused harmony reexport geoAiry */
/* unused harmony reexport geoAiryRaw */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__src_aitoff__ = __webpack_require__("./node_modules/d3-geo-projection/src/aitoff.js");
/* unused harmony reexport geoAitoff */
/* unused harmony reexport geoAitoffRaw */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__src_armadillo__ = __webpack_require__("./node_modules/d3-geo-projection/src/armadillo.js");
/* unused harmony reexport geoArmadillo */
/* unused harmony reexport geoArmadilloRaw */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__src_august__ = __webpack_require__("./node_modules/d3-geo-projection/src/august.js");
/* unused harmony reexport geoAugust */
/* unused harmony reexport geoAugustRaw */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__src_baker__ = __webpack_require__("./node_modules/d3-geo-projection/src/baker.js");
/* unused harmony reexport geoBaker */
/* unused harmony reexport geoBakerRaw */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__src_berghaus__ = __webpack_require__("./node_modules/d3-geo-projection/src/berghaus.js");
/* unused harmony reexport geoBerghaus */
/* unused harmony reexport geoBerghausRaw */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__src_bertin__ = __webpack_require__("./node_modules/d3-geo-projection/src/bertin.js");
/* unused harmony reexport geoBertin1953 */
/* unused harmony reexport geoBertin1953Raw */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__src_boggs__ = __webpack_require__("./node_modules/d3-geo-projection/src/boggs.js");
/* unused harmony reexport geoBoggs */
/* unused harmony reexport geoBoggsRaw */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__src_bonne__ = __webpack_require__("./node_modules/d3-geo-projection/src/bonne.js");
/* unused harmony reexport geoBonne */
/* unused harmony reexport geoBonneRaw */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__src_bottomley__ = __webpack_require__("./node_modules/d3-geo-projection/src/bottomley.js");
/* unused harmony reexport geoBottomley */
/* unused harmony reexport geoBottomleyRaw */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__src_bromley__ = __webpack_require__("./node_modules/d3-geo-projection/src/bromley.js");
/* unused harmony reexport geoBromley */
/* unused harmony reexport geoBromleyRaw */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__src_chamberlin__ = __webpack_require__("./node_modules/d3-geo-projection/src/chamberlin.js");
/* unused harmony reexport geoChamberlin */
/* unused harmony reexport geoChamberlinRaw */
/* unused harmony reexport geoChamberlinAfrica */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__src_collignon__ = __webpack_require__("./node_modules/d3-geo-projection/src/collignon.js");
/* unused harmony reexport geoCollignon */
/* unused harmony reexport geoCollignonRaw */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__src_craig__ = __webpack_require__("./node_modules/d3-geo-projection/src/craig.js");
/* unused harmony reexport geoCraig */
/* unused harmony reexport geoCraigRaw */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__src_craster__ = __webpack_require__("./node_modules/d3-geo-projection/src/craster.js");
/* unused harmony reexport geoCraster */
/* unused harmony reexport geoCrasterRaw */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__src_cylindricalEqualArea__ = __webpack_require__("./node_modules/d3-geo-projection/src/cylindricalEqualArea.js");
/* unused harmony reexport geoCylindricalEqualArea */
/* unused harmony reexport geoCylindricalEqualAreaRaw */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__src_cylindricalStereographic__ = __webpack_require__("./node_modules/d3-geo-projection/src/cylindricalStereographic.js");
/* unused harmony reexport geoCylindricalStereographic */
/* unused harmony reexport geoCylindricalStereographicRaw */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__src_eckert1_js__ = __webpack_require__("./node_modules/d3-geo-projection/src/eckert1.js");
/* unused harmony reexport geoEckert1 */
/* unused harmony reexport geoEckert1Raw */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__src_eckert2_js__ = __webpack_require__("./node_modules/d3-geo-projection/src/eckert2.js");
/* unused harmony reexport geoEckert2 */
/* unused harmony reexport geoEckert2Raw */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__src_eckert3_js__ = __webpack_require__("./node_modules/d3-geo-projection/src/eckert3.js");
/* unused harmony reexport geoEckert3 */
/* unused harmony reexport geoEckert3Raw */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__src_eckert4_js__ = __webpack_require__("./node_modules/d3-geo-projection/src/eckert4.js");
/* unused harmony reexport geoEckert4 */
/* unused harmony reexport geoEckert4Raw */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__src_eckert5_js__ = __webpack_require__("./node_modules/d3-geo-projection/src/eckert5.js");
/* unused harmony reexport geoEckert5 */
/* unused harmony reexport geoEckert5Raw */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__src_eckert6_js__ = __webpack_require__("./node_modules/d3-geo-projection/src/eckert6.js");
/* unused harmony reexport geoEckert6 */
/* unused harmony reexport geoEckert6Raw */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__src_eisenlohr_js__ = __webpack_require__("./node_modules/d3-geo-projection/src/eisenlohr.js");
/* unused harmony reexport geoEisenlohr */
/* unused harmony reexport geoEisenlohrRaw */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__src_fahey_js__ = __webpack_require__("./node_modules/d3-geo-projection/src/fahey.js");
/* unused harmony reexport geoFahey */
/* unused harmony reexport geoFaheyRaw */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__src_foucaut_js__ = __webpack_require__("./node_modules/d3-geo-projection/src/foucaut.js");
/* unused harmony reexport geoFoucaut */
/* unused harmony reexport geoFoucautRaw */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__src_gilbert_js__ = __webpack_require__("./node_modules/d3-geo-projection/src/gilbert.js");
/* unused harmony reexport geoGilbert */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__src_gingery_js__ = __webpack_require__("./node_modules/d3-geo-projection/src/gingery.js");
/* unused harmony reexport geoGingery */
/* unused harmony reexport geoGingeryRaw */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__src_ginzburg4_js__ = __webpack_require__("./node_modules/d3-geo-projection/src/ginzburg4.js");
/* unused harmony reexport geoGinzburg4 */
/* unused harmony reexport geoGinzburg4Raw */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__src_ginzburg5_js__ = __webpack_require__("./node_modules/d3-geo-projection/src/ginzburg5.js");
/* unused harmony reexport geoGinzburg5 */
/* unused harmony reexport geoGinzburg5Raw */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__src_ginzburg6_js__ = __webpack_require__("./node_modules/d3-geo-projection/src/ginzburg6.js");
/* unused harmony reexport geoGinzburg6 */
/* unused harmony reexport geoGinzburg6Raw */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__src_ginzburg8_js__ = __webpack_require__("./node_modules/d3-geo-projection/src/ginzburg8.js");
/* unused harmony reexport geoGinzburg8 */
/* unused harmony reexport geoGinzburg8Raw */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__src_ginzburg9_js__ = __webpack_require__("./node_modules/d3-geo-projection/src/ginzburg9.js");
/* unused harmony reexport geoGinzburg9 */
/* unused harmony reexport geoGinzburg9Raw */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__src_gringorten_js__ = __webpack_require__("./node_modules/d3-geo-projection/src/gringorten.js");
/* unused harmony reexport geoGringorten */
/* unused harmony reexport geoGringortenRaw */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__src_guyou_js__ = __webpack_require__("./node_modules/d3-geo-projection/src/guyou.js");
/* unused harmony reexport geoGuyou */
/* unused harmony reexport geoGuyouRaw */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__src_hammer_js__ = __webpack_require__("./node_modules/d3-geo-projection/src/hammer.js");
/* unused harmony reexport geoHammer */
/* unused harmony reexport geoHammerRaw */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36__src_hammerRetroazimuthal_js__ = __webpack_require__("./node_modules/d3-geo-projection/src/hammerRetroazimuthal.js");
/* unused harmony reexport geoHammerRetroazimuthal */
/* unused harmony reexport geoHammerRetroazimuthalRaw */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_37__src_healpix_js__ = __webpack_require__("./node_modules/d3-geo-projection/src/healpix.js");
/* unused harmony reexport geoHealpix */
/* unused harmony reexport geoHealpixRaw */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_38__src_hill_js__ = __webpack_require__("./node_modules/d3-geo-projection/src/hill.js");
/* unused harmony reexport geoHill */
/* unused harmony reexport geoHillRaw */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_39__src_homolosine_js__ = __webpack_require__("./node_modules/d3-geo-projection/src/homolosine.js");
/* unused harmony reexport geoHomolosine */
/* unused harmony reexport geoHomolosineRaw */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_40__src_interrupted_index__ = __webpack_require__("./node_modules/d3-geo-projection/src/interrupted/index.js");
/* unused harmony reexport geoInterrupt */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_41__src_interrupted_boggs__ = __webpack_require__("./node_modules/d3-geo-projection/src/interrupted/boggs.js");
/* unused harmony reexport geoInterruptedBoggs */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_42__src_interrupted_homolosine__ = __webpack_require__("./node_modules/d3-geo-projection/src/interrupted/homolosine.js");
/* unused harmony reexport geoInterruptedHomolosine */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_43__src_interrupted_mollweide__ = __webpack_require__("./node_modules/d3-geo-projection/src/interrupted/mollweide.js");
/* unused harmony reexport geoInterruptedMollweide */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_44__src_interrupted_mollweideHemispheres__ = __webpack_require__("./node_modules/d3-geo-projection/src/interrupted/mollweideHemispheres.js");
/* unused harmony reexport geoInterruptedMollweideHemispheres */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_45__src_interrupted_sinuMollweide__ = __webpack_require__("./node_modules/d3-geo-projection/src/interrupted/sinuMollweide.js");
/* unused harmony reexport geoInterruptedSinuMollweide */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_46__src_interrupted_sinusoidal__ = __webpack_require__("./node_modules/d3-geo-projection/src/interrupted/sinusoidal.js");
/* unused harmony reexport geoInterruptedSinusoidal */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_47__src_kavrayskiy7_js__ = __webpack_require__("./node_modules/d3-geo-projection/src/kavrayskiy7.js");
/* unused harmony reexport geoKavrayskiy7 */
/* unused harmony reexport geoKavrayskiy7Raw */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_48__src_lagrange_js__ = __webpack_require__("./node_modules/d3-geo-projection/src/lagrange.js");
/* unused harmony reexport geoLagrange */
/* unused harmony reexport geoLagrangeRaw */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_49__src_larrivee__ = __webpack_require__("./node_modules/d3-geo-projection/src/larrivee.js");
/* unused harmony reexport geoLarrivee */
/* unused harmony reexport geoLarriveeRaw */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_50__src_laskowski__ = __webpack_require__("./node_modules/d3-geo-projection/src/laskowski.js");
/* unused harmony reexport geoLaskowski */
/* unused harmony reexport geoLaskowskiRaw */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_51__src_littrow_js__ = __webpack_require__("./node_modules/d3-geo-projection/src/littrow.js");
/* unused harmony reexport geoLittrow */
/* unused harmony reexport geoLittrowRaw */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_52__src_loximuthal_js__ = __webpack_require__("./node_modules/d3-geo-projection/src/loximuthal.js");
/* unused harmony reexport geoLoximuthal */
/* unused harmony reexport geoLoximuthalRaw */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_53__src_miller__ = __webpack_require__("./node_modules/d3-geo-projection/src/miller.js");
/* unused harmony reexport geoMiller */
/* unused harmony reexport geoMillerRaw */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_54__src_modifiedStereographic__ = __webpack_require__("./node_modules/d3-geo-projection/src/modifiedStereographic.js");
/* unused harmony reexport geoModifiedStereographic */
/* unused harmony reexport geoModifiedStereographicRaw */
/* unused harmony reexport geoModifiedStereographicAlaska */
/* unused harmony reexport geoModifiedStereographicGs48 */
/* unused harmony reexport geoModifiedStereographicGs50 */
/* unused harmony reexport geoModifiedStereographicMiller */
/* unused harmony reexport geoModifiedStereographicLee */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_55__src_mollweide__ = __webpack_require__("./node_modules/d3-geo-projection/src/mollweide.js");
/* unused harmony reexport geoMollweide */
/* unused harmony reexport geoMollweideRaw */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_56__src_mtFlatPolarParabolic__ = __webpack_require__("./node_modules/d3-geo-projection/src/mtFlatPolarParabolic.js");
/* unused harmony reexport geoMtFlatPolarParabolic */
/* unused harmony reexport geoMtFlatPolarParabolicRaw */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_57__src_mtFlatPolarQuartic__ = __webpack_require__("./node_modules/d3-geo-projection/src/mtFlatPolarQuartic.js");
/* unused harmony reexport geoMtFlatPolarQuartic */
/* unused harmony reexport geoMtFlatPolarQuarticRaw */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_58__src_mtFlatPolarSinusoidal__ = __webpack_require__("./node_modules/d3-geo-projection/src/mtFlatPolarSinusoidal.js");
/* unused harmony reexport geoMtFlatPolarSinusoidal */
/* unused harmony reexport geoMtFlatPolarSinusoidalRaw */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_59_d3_geo__ = __webpack_require__("./node_modules/d3-geo-projection/node_modules/d3-geo/index.js");
/* unused harmony reexport geoNaturalEarth */
/* unused harmony reexport geoNaturalEarthRaw */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_60__src_naturalEarth2__ = __webpack_require__("./node_modules/d3-geo-projection/src/naturalEarth2.js");
/* unused harmony reexport geoNaturalEarth2 */
/* unused harmony reexport geoNaturalEarth2Raw */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_61__src_nellHammer__ = __webpack_require__("./node_modules/d3-geo-projection/src/nellHammer.js");
/* unused harmony reexport geoNellHammer */
/* unused harmony reexport geoNellHammerRaw */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_62__src_patterson__ = __webpack_require__("./node_modules/d3-geo-projection/src/patterson.js");
/* unused harmony reexport geoPatterson */
/* unused harmony reexport geoPattersonRaw */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_63__src_polyconic__ = __webpack_require__("./node_modules/d3-geo-projection/src/polyconic.js");
/* unused harmony reexport geoPolyconic */
/* unused harmony reexport geoPolyconicRaw */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_64__src_polyhedral_index_js__ = __webpack_require__("./node_modules/d3-geo-projection/src/polyhedral/index.js");
/* unused harmony reexport geoPolyhedral */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_65__src_polyhedral_butterfly_js__ = __webpack_require__("./node_modules/d3-geo-projection/src/polyhedral/butterfly.js");
/* unused harmony reexport geoPolyhedralButterfly */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_66__src_polyhedral_collignon_js__ = __webpack_require__("./node_modules/d3-geo-projection/src/polyhedral/collignon.js");
/* unused harmony reexport geoPolyhedralCollignon */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_67__src_polyhedral_waterman_js__ = __webpack_require__("./node_modules/d3-geo-projection/src/polyhedral/waterman.js");
/* unused harmony reexport geoPolyhedralWaterman */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_68__src_project_index__ = __webpack_require__("./node_modules/d3-geo-projection/src/project/index.js");
/* unused harmony reexport geoProject */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_69__src_quincuncial_gringorten_js__ = __webpack_require__("./node_modules/d3-geo-projection/src/quincuncial/gringorten.js");
/* unused harmony reexport geoGringortenQuincuncial */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_70__src_quincuncial_peirce_js__ = __webpack_require__("./node_modules/d3-geo-projection/src/quincuncial/peirce.js");
/* unused harmony reexport geoPeirceQuincuncial */
/* unused harmony reexport geoPierceQuincuncial */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_71__src_quantize__ = __webpack_require__("./node_modules/d3-geo-projection/src/quantize.js");
/* unused harmony reexport geoQuantize */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_72__src_quincuncial_index_js__ = __webpack_require__("./node_modules/d3-geo-projection/src/quincuncial/index.js");
/* unused harmony reexport geoQuincuncial */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_73__src_rectangularPolyconic__ = __webpack_require__("./node_modules/d3-geo-projection/src/rectangularPolyconic.js");
/* unused harmony reexport geoRectangularPolyconic */
/* unused harmony reexport geoRectangularPolyconicRaw */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_74__src_robinson__ = __webpack_require__("./node_modules/d3-geo-projection/src/robinson.js");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_74__src_robinson__["a"]; });
/* unused harmony reexport geoRobinsonRaw */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_75__src_satellite__ = __webpack_require__("./node_modules/d3-geo-projection/src/satellite.js");
/* unused harmony reexport geoSatellite */
/* unused harmony reexport geoSatelliteRaw */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_76__src_sinuMollweide__ = __webpack_require__("./node_modules/d3-geo-projection/src/sinuMollweide.js");
/* unused harmony reexport geoSinuMollweide */
/* unused harmony reexport geoSinuMollweideRaw */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_77__src_sinusoidal__ = __webpack_require__("./node_modules/d3-geo-projection/src/sinusoidal.js");
/* unused harmony reexport geoSinusoidal */
/* unused harmony reexport geoSinusoidalRaw */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_78__src_stitch__ = __webpack_require__("./node_modules/d3-geo-projection/src/stitch.js");
/* unused harmony reexport geoStitch */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_79__src_times__ = __webpack_require__("./node_modules/d3-geo-projection/src/times.js");
/* unused harmony reexport geoTimes */
/* unused harmony reexport geoTimesRaw */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_80__src_twoPointAzimuthal__ = __webpack_require__("./node_modules/d3-geo-projection/src/twoPointAzimuthal.js");
/* unused harmony reexport geoTwoPointAzimuthal */
/* unused harmony reexport geoTwoPointAzimuthalRaw */
/* unused harmony reexport geoTwoPointAzimuthalUsa */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_81__src_twoPointEquidistant__ = __webpack_require__("./node_modules/d3-geo-projection/src/twoPointEquidistant.js");
/* unused harmony reexport geoTwoPointEquidistant */
/* unused harmony reexport geoTwoPointEquidistantRaw */
/* unused harmony reexport geoTwoPointEquidistantUsa */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_82__src_vanDerGrinten__ = __webpack_require__("./node_modules/d3-geo-projection/src/vanDerGrinten.js");
/* unused harmony reexport geoVanDerGrinten */
/* unused harmony reexport geoVanDerGrintenRaw */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_83__src_vanDerGrinten2__ = __webpack_require__("./node_modules/d3-geo-projection/src/vanDerGrinten2.js");
/* unused harmony reexport geoVanDerGrinten2 */
/* unused harmony reexport geoVanDerGrinten2Raw */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_84__src_vanDerGrinten3__ = __webpack_require__("./node_modules/d3-geo-projection/src/vanDerGrinten3.js");
/* unused harmony reexport geoVanDerGrinten3 */
/* unused harmony reexport geoVanDerGrinten3Raw */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_85__src_vanDerGrinten4__ = __webpack_require__("./node_modules/d3-geo-projection/src/vanDerGrinten4.js");
/* unused harmony reexport geoVanDerGrinten4 */
/* unused harmony reexport geoVanDerGrinten4Raw */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_86__src_wagner4_js__ = __webpack_require__("./node_modules/d3-geo-projection/src/wagner4.js");
/* unused harmony reexport geoWagner4 */
/* unused harmony reexport geoWagner4Raw */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_87__src_wagner6_js__ = __webpack_require__("./node_modules/d3-geo-projection/src/wagner6.js");
/* unused harmony reexport geoWagner6 */
/* unused harmony reexport geoWagner6Raw */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_88__src_wagner7_js__ = __webpack_require__("./node_modules/d3-geo-projection/src/wagner7.js");
/* unused harmony reexport geoWagner7 */
/* unused harmony reexport geoWagner7Raw */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_89__src_wiechel_js__ = __webpack_require__("./node_modules/d3-geo-projection/src/wiechel.js");
/* unused harmony reexport geoWiechel */
/* unused harmony reexport geoWiechelRaw */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_90__src_winkel3__ = __webpack_require__("./node_modules/d3-geo-projection/src/winkel3.js");
/* unused harmony reexport geoWinkel3 */
/* unused harmony reexport geoWinkel3Raw */



























































 // DEPRECATED moved to d3-geo











 // DEPRECATED misspelling






















/***/ }),

/***/ "./node_modules/d3-geo-projection/node_modules/d3-geo/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__src_area__ = __webpack_require__("./node_modules/d3-geo-projection/node_modules/d3-geo/src/area.js");
/* unused harmony reexport geoArea */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__src_bounds__ = __webpack_require__("./node_modules/d3-geo-projection/node_modules/d3-geo/src/bounds.js");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_1__src_bounds__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__src_centroid__ = __webpack_require__("./node_modules/d3-geo-projection/node_modules/d3-geo/src/centroid.js");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return __WEBPACK_IMPORTED_MODULE_2__src_centroid__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__src_circle__ = __webpack_require__("./node_modules/d3-geo-projection/node_modules/d3-geo/src/circle.js");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return __WEBPACK_IMPORTED_MODULE_3__src_circle__["b"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__src_clip_antimeridian__ = __webpack_require__("./node_modules/d3-geo-projection/node_modules/d3-geo/src/clip/antimeridian.js");
/* unused harmony reexport geoClipAntimeridian */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__src_clip_circle__ = __webpack_require__("./node_modules/d3-geo-projection/node_modules/d3-geo/src/clip/circle.js");
/* unused harmony reexport geoClipCircle */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__src_clip_extent__ = __webpack_require__("./node_modules/d3-geo-projection/node_modules/d3-geo/src/clip/extent.js");
/* unused harmony reexport geoClipExtent */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__src_clip_rectangle__ = __webpack_require__("./node_modules/d3-geo-projection/node_modules/d3-geo/src/clip/rectangle.js");
/* unused harmony reexport geoClipRectangle */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__src_contains__ = __webpack_require__("./node_modules/d3-geo-projection/node_modules/d3-geo/src/contains.js");
/* unused harmony reexport geoContains */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__src_distance__ = __webpack_require__("./node_modules/d3-geo-projection/node_modules/d3-geo/src/distance.js");
/* unused harmony reexport geoDistance */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__src_graticule__ = __webpack_require__("./node_modules/d3-geo-projection/node_modules/d3-geo/src/graticule.js");
/* unused harmony reexport geoGraticule */
/* unused harmony reexport geoGraticule10 */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__src_interpolate__ = __webpack_require__("./node_modules/d3-geo-projection/node_modules/d3-geo/src/interpolate.js");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return __WEBPACK_IMPORTED_MODULE_11__src_interpolate__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__src_length__ = __webpack_require__("./node_modules/d3-geo-projection/node_modules/d3-geo/src/length.js");
/* unused harmony reexport geoLength */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__src_path_index__ = __webpack_require__("./node_modules/d3-geo-projection/node_modules/d3-geo/src/path/index.js");
/* unused harmony reexport geoPath */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__src_projection_albers__ = __webpack_require__("./node_modules/d3-geo-projection/node_modules/d3-geo/src/projection/albers.js");
/* unused harmony reexport geoAlbers */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__src_projection_albersUsa__ = __webpack_require__("./node_modules/d3-geo-projection/node_modules/d3-geo/src/projection/albersUsa.js");
/* unused harmony reexport geoAlbersUsa */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__src_projection_azimuthalEqualArea__ = __webpack_require__("./node_modules/d3-geo-projection/node_modules/d3-geo/src/projection/azimuthalEqualArea.js");
/* unused harmony reexport geoAzimuthalEqualArea */
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_16__src_projection_azimuthalEqualArea__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__src_projection_azimuthalEquidistant__ = __webpack_require__("./node_modules/d3-geo-projection/node_modules/d3-geo/src/projection/azimuthalEquidistant.js");
/* unused harmony reexport geoAzimuthalEquidistant */
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_17__src_projection_azimuthalEquidistant__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__src_projection_conicConformal__ = __webpack_require__("./node_modules/d3-geo-projection/node_modules/d3-geo/src/projection/conicConformal.js");
/* unused harmony reexport geoConicConformal */
/* unused harmony reexport geoConicConformalRaw */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__src_projection_conicEqualArea__ = __webpack_require__("./node_modules/d3-geo-projection/node_modules/d3-geo/src/projection/conicEqualArea.js");
/* unused harmony reexport geoConicEqualArea */
/* unused harmony reexport geoConicEqualAreaRaw */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__src_projection_conicEquidistant__ = __webpack_require__("./node_modules/d3-geo-projection/node_modules/d3-geo/src/projection/conicEquidistant.js");
/* unused harmony reexport geoConicEquidistant */
/* unused harmony reexport geoConicEquidistantRaw */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__src_projection_equirectangular__ = __webpack_require__("./node_modules/d3-geo-projection/node_modules/d3-geo/src/projection/equirectangular.js");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return __WEBPACK_IMPORTED_MODULE_21__src_projection_equirectangular__["a"]; });
/* unused harmony reexport geoEquirectangularRaw */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__src_projection_gnomonic__ = __webpack_require__("./node_modules/d3-geo-projection/node_modules/d3-geo/src/projection/gnomonic.js");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return __WEBPACK_IMPORTED_MODULE_22__src_projection_gnomonic__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return __WEBPACK_IMPORTED_MODULE_22__src_projection_gnomonic__["b"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__src_projection_identity__ = __webpack_require__("./node_modules/d3-geo-projection/node_modules/d3-geo/src/projection/identity.js");
/* unused harmony reexport geoIdentity */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__src_projection_index__ = __webpack_require__("./node_modules/d3-geo-projection/node_modules/d3-geo/src/projection/index.js");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "k", function() { return __WEBPACK_IMPORTED_MODULE_24__src_projection_index__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "l", function() { return __WEBPACK_IMPORTED_MODULE_24__src_projection_index__["b"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__src_projection_mercator__ = __webpack_require__("./node_modules/d3-geo-projection/node_modules/d3-geo/src/projection/mercator.js");
/* unused harmony reexport geoMercator */
/* unused harmony reexport geoMercatorRaw */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__src_projection_naturalEarth1__ = __webpack_require__("./node_modules/d3-geo-projection/node_modules/d3-geo/src/projection/naturalEarth1.js");
/* unused harmony reexport geoNaturalEarth1 */
/* unused harmony reexport geoNaturalEarth1Raw */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__src_projection_orthographic__ = __webpack_require__("./node_modules/d3-geo-projection/node_modules/d3-geo/src/projection/orthographic.js");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return __WEBPACK_IMPORTED_MODULE_27__src_projection_orthographic__["a"]; });
/* unused harmony reexport geoOrthographicRaw */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__src_projection_stereographic__ = __webpack_require__("./node_modules/d3-geo-projection/node_modules/d3-geo/src/projection/stereographic.js");
/* unused harmony reexport geoStereographic */
/* unused harmony reexport geoStereographicRaw */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__src_projection_transverseMercator__ = __webpack_require__("./node_modules/d3-geo-projection/node_modules/d3-geo/src/projection/transverseMercator.js");
/* unused harmony reexport geoTransverseMercator */
/* unused harmony reexport geoTransverseMercatorRaw */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__src_rotation__ = __webpack_require__("./node_modules/d3-geo-projection/node_modules/d3-geo/src/rotation.js");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "m", function() { return __WEBPACK_IMPORTED_MODULE_30__src_rotation__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__src_stream__ = __webpack_require__("./node_modules/d3-geo-projection/node_modules/d3-geo/src/stream.js");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "n", function() { return __WEBPACK_IMPORTED_MODULE_31__src_stream__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__src_transform__ = __webpack_require__("./node_modules/d3-geo-projection/node_modules/d3-geo/src/transform.js");
/* unused harmony reexport geoTransform */






 // DEPRECATED! Use d3.geoIdentity().clipExtent(…).




























/***/ }),

/***/ "./node_modules/d3-geo-projection/node_modules/d3-geo/src/adder.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// Adds floating point numbers with twice the normal precision.
// Reference: J. R. Shewchuk, Adaptive Precision Floating-Point Arithmetic and
// Fast Robust Geometric Predicates, Discrete & Computational Geometry 18(3)
// 305–363 (1997).
// Code adapted from GeographicLib by Charles F. F. Karney,
// http://geographiclib.sourceforge.net/

/* harmony default export */ __webpack_exports__["a"] = (function() {
  return new Adder;
});

function Adder() {
  this.reset();
}

Adder.prototype = {
  constructor: Adder,
  reset: function() {
    this.s = // rounded value
    this.t = 0; // exact error
  },
  add: function(y) {
    add(temp, y, this.t);
    add(this, temp.s, this.s);
    if (this.s) this.t += temp.t;
    else this.s = temp.t;
  },
  valueOf: function() {
    return this.s;
  }
};

var temp = new Adder;

function add(adder, a, b) {
  var x = adder.s = a + b,
      bv = x - a,
      av = x - bv;
  adder.t = (a - av) + (b - bv);
}


/***/ }),

/***/ "./node_modules/d3-geo-projection/node_modules/d3-geo/src/area.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return areaRingSum; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return areaStream; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__adder__ = __webpack_require__("./node_modules/d3-geo-projection/node_modules/d3-geo/src/adder.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__math__ = __webpack_require__("./node_modules/d3-geo-projection/node_modules/d3-geo/src/math.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__noop__ = __webpack_require__("./node_modules/d3-geo-projection/node_modules/d3-geo/src/noop.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__stream__ = __webpack_require__("./node_modules/d3-geo-projection/node_modules/d3-geo/src/stream.js");





var areaRingSum = Object(__WEBPACK_IMPORTED_MODULE_0__adder__["a" /* default */])();

var areaSum = Object(__WEBPACK_IMPORTED_MODULE_0__adder__["a" /* default */])(),
    lambda00,
    phi00,
    lambda0,
    cosPhi0,
    sinPhi0;

var areaStream = {
  point: __WEBPACK_IMPORTED_MODULE_2__noop__["a" /* default */],
  lineStart: __WEBPACK_IMPORTED_MODULE_2__noop__["a" /* default */],
  lineEnd: __WEBPACK_IMPORTED_MODULE_2__noop__["a" /* default */],
  polygonStart: function() {
    areaRingSum.reset();
    areaStream.lineStart = areaRingStart;
    areaStream.lineEnd = areaRingEnd;
  },
  polygonEnd: function() {
    var areaRing = +areaRingSum;
    areaSum.add(areaRing < 0 ? __WEBPACK_IMPORTED_MODULE_1__math__["w" /* tau */] + areaRing : areaRing);
    this.lineStart = this.lineEnd = this.point = __WEBPACK_IMPORTED_MODULE_2__noop__["a" /* default */];
  },
  sphere: function() {
    areaSum.add(__WEBPACK_IMPORTED_MODULE_1__math__["w" /* tau */]);
  }
};

function areaRingStart() {
  areaStream.point = areaPointFirst;
}

function areaRingEnd() {
  areaPoint(lambda00, phi00);
}

function areaPointFirst(lambda, phi) {
  areaStream.point = areaPoint;
  lambda00 = lambda, phi00 = phi;
  lambda *= __WEBPACK_IMPORTED_MODULE_1__math__["r" /* radians */], phi *= __WEBPACK_IMPORTED_MODULE_1__math__["r" /* radians */];
  lambda0 = lambda, cosPhi0 = Object(__WEBPACK_IMPORTED_MODULE_1__math__["g" /* cos */])(phi = phi / 2 + __WEBPACK_IMPORTED_MODULE_1__math__["q" /* quarterPi */]), sinPhi0 = Object(__WEBPACK_IMPORTED_MODULE_1__math__["t" /* sin */])(phi);
}

function areaPoint(lambda, phi) {
  lambda *= __WEBPACK_IMPORTED_MODULE_1__math__["r" /* radians */], phi *= __WEBPACK_IMPORTED_MODULE_1__math__["r" /* radians */];
  phi = phi / 2 + __WEBPACK_IMPORTED_MODULE_1__math__["q" /* quarterPi */]; // half the angular distance from south pole

  // Spherical excess E for a spherical triangle with vertices: south pole,
  // previous point, current point.  Uses a formula derived from Cagnoli’s
  // theorem.  See Todhunter, Spherical Trig. (1871), Sec. 103, Eq. (2).
  var dLambda = lambda - lambda0,
      sdLambda = dLambda >= 0 ? 1 : -1,
      adLambda = sdLambda * dLambda,
      cosPhi = Object(__WEBPACK_IMPORTED_MODULE_1__math__["g" /* cos */])(phi),
      sinPhi = Object(__WEBPACK_IMPORTED_MODULE_1__math__["t" /* sin */])(phi),
      k = sinPhi0 * sinPhi,
      u = cosPhi0 * cosPhi + k * Object(__WEBPACK_IMPORTED_MODULE_1__math__["g" /* cos */])(adLambda),
      v = k * sdLambda * Object(__WEBPACK_IMPORTED_MODULE_1__math__["t" /* sin */])(adLambda);
  areaRingSum.add(Object(__WEBPACK_IMPORTED_MODULE_1__math__["e" /* atan2 */])(v, u));

  // Advance the previous points.
  lambda0 = lambda, cosPhi0 = cosPhi, sinPhi0 = sinPhi;
}

/* unused harmony default export */ var _unused_webpack_default_export = (function(object) {
  areaSum.reset();
  Object(__WEBPACK_IMPORTED_MODULE_3__stream__["a" /* default */])(object, areaStream);
  return areaSum * 2;
});


/***/ }),

/***/ "./node_modules/d3-geo-projection/node_modules/d3-geo/src/bounds.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__adder__ = __webpack_require__("./node_modules/d3-geo-projection/node_modules/d3-geo/src/adder.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__area__ = __webpack_require__("./node_modules/d3-geo-projection/node_modules/d3-geo/src/area.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__cartesian__ = __webpack_require__("./node_modules/d3-geo-projection/node_modules/d3-geo/src/cartesian.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__math__ = __webpack_require__("./node_modules/d3-geo-projection/node_modules/d3-geo/src/math.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__stream__ = __webpack_require__("./node_modules/d3-geo-projection/node_modules/d3-geo/src/stream.js");






var lambda0, phi0, lambda1, phi1, // bounds
    lambda2, // previous lambda-coordinate
    lambda00, phi00, // first point
    p0, // previous 3D point
    deltaSum = Object(__WEBPACK_IMPORTED_MODULE_0__adder__["a" /* default */])(),
    ranges,
    range;

var boundsStream = {
  point: boundsPoint,
  lineStart: boundsLineStart,
  lineEnd: boundsLineEnd,
  polygonStart: function() {
    boundsStream.point = boundsRingPoint;
    boundsStream.lineStart = boundsRingStart;
    boundsStream.lineEnd = boundsRingEnd;
    deltaSum.reset();
    __WEBPACK_IMPORTED_MODULE_1__area__["b" /* areaStream */].polygonStart();
  },
  polygonEnd: function() {
    __WEBPACK_IMPORTED_MODULE_1__area__["b" /* areaStream */].polygonEnd();
    boundsStream.point = boundsPoint;
    boundsStream.lineStart = boundsLineStart;
    boundsStream.lineEnd = boundsLineEnd;
    if (__WEBPACK_IMPORTED_MODULE_1__area__["a" /* areaRingSum */] < 0) lambda0 = -(lambda1 = 180), phi0 = -(phi1 = 90);
    else if (deltaSum > __WEBPACK_IMPORTED_MODULE_3__math__["i" /* epsilon */]) phi1 = 90;
    else if (deltaSum < -__WEBPACK_IMPORTED_MODULE_3__math__["i" /* epsilon */]) phi0 = -90;
    range[0] = lambda0, range[1] = lambda1;
  }
};

function boundsPoint(lambda, phi) {
  ranges.push(range = [lambda0 = lambda, lambda1 = lambda]);
  if (phi < phi0) phi0 = phi;
  if (phi > phi1) phi1 = phi;
}

function linePoint(lambda, phi) {
  var p = Object(__WEBPACK_IMPORTED_MODULE_2__cartesian__["a" /* cartesian */])([lambda * __WEBPACK_IMPORTED_MODULE_3__math__["r" /* radians */], phi * __WEBPACK_IMPORTED_MODULE_3__math__["r" /* radians */]]);
  if (p0) {
    var normal = Object(__WEBPACK_IMPORTED_MODULE_2__cartesian__["c" /* cartesianCross */])(p0, p),
        equatorial = [normal[1], -normal[0], 0],
        inflection = Object(__WEBPACK_IMPORTED_MODULE_2__cartesian__["c" /* cartesianCross */])(equatorial, normal);
    Object(__WEBPACK_IMPORTED_MODULE_2__cartesian__["e" /* cartesianNormalizeInPlace */])(inflection);
    inflection = Object(__WEBPACK_IMPORTED_MODULE_2__cartesian__["g" /* spherical */])(inflection);
    var delta = lambda - lambda2,
        sign = delta > 0 ? 1 : -1,
        lambdai = inflection[0] * __WEBPACK_IMPORTED_MODULE_3__math__["h" /* degrees */] * sign,
        phii,
        antimeridian = Object(__WEBPACK_IMPORTED_MODULE_3__math__["a" /* abs */])(delta) > 180;
    if (antimeridian ^ (sign * lambda2 < lambdai && lambdai < sign * lambda)) {
      phii = inflection[1] * __WEBPACK_IMPORTED_MODULE_3__math__["h" /* degrees */];
      if (phii > phi1) phi1 = phii;
    } else if (lambdai = (lambdai + 360) % 360 - 180, antimeridian ^ (sign * lambda2 < lambdai && lambdai < sign * lambda)) {
      phii = -inflection[1] * __WEBPACK_IMPORTED_MODULE_3__math__["h" /* degrees */];
      if (phii < phi0) phi0 = phii;
    } else {
      if (phi < phi0) phi0 = phi;
      if (phi > phi1) phi1 = phi;
    }
    if (antimeridian) {
      if (lambda < lambda2) {
        if (angle(lambda0, lambda) > angle(lambda0, lambda1)) lambda1 = lambda;
      } else {
        if (angle(lambda, lambda1) > angle(lambda0, lambda1)) lambda0 = lambda;
      }
    } else {
      if (lambda1 >= lambda0) {
        if (lambda < lambda0) lambda0 = lambda;
        if (lambda > lambda1) lambda1 = lambda;
      } else {
        if (lambda > lambda2) {
          if (angle(lambda0, lambda) > angle(lambda0, lambda1)) lambda1 = lambda;
        } else {
          if (angle(lambda, lambda1) > angle(lambda0, lambda1)) lambda0 = lambda;
        }
      }
    }
  } else {
    ranges.push(range = [lambda0 = lambda, lambda1 = lambda]);
  }
  if (phi < phi0) phi0 = phi;
  if (phi > phi1) phi1 = phi;
  p0 = p, lambda2 = lambda;
}

function boundsLineStart() {
  boundsStream.point = linePoint;
}

function boundsLineEnd() {
  range[0] = lambda0, range[1] = lambda1;
  boundsStream.point = boundsPoint;
  p0 = null;
}

function boundsRingPoint(lambda, phi) {
  if (p0) {
    var delta = lambda - lambda2;
    deltaSum.add(Object(__WEBPACK_IMPORTED_MODULE_3__math__["a" /* abs */])(delta) > 180 ? delta + (delta > 0 ? 360 : -360) : delta);
  } else {
    lambda00 = lambda, phi00 = phi;
  }
  __WEBPACK_IMPORTED_MODULE_1__area__["b" /* areaStream */].point(lambda, phi);
  linePoint(lambda, phi);
}

function boundsRingStart() {
  __WEBPACK_IMPORTED_MODULE_1__area__["b" /* areaStream */].lineStart();
}

function boundsRingEnd() {
  boundsRingPoint(lambda00, phi00);
  __WEBPACK_IMPORTED_MODULE_1__area__["b" /* areaStream */].lineEnd();
  if (Object(__WEBPACK_IMPORTED_MODULE_3__math__["a" /* abs */])(deltaSum) > __WEBPACK_IMPORTED_MODULE_3__math__["i" /* epsilon */]) lambda0 = -(lambda1 = 180);
  range[0] = lambda0, range[1] = lambda1;
  p0 = null;
}

// Finds the left-right distance between two longitudes.
// This is almost the same as (lambda1 - lambda0 + 360°) % 360°, except that we want
// the distance between ±180° to be 360°.
function angle(lambda0, lambda1) {
  return (lambda1 -= lambda0) < 0 ? lambda1 + 360 : lambda1;
}

function rangeCompare(a, b) {
  return a[0] - b[0];
}

function rangeContains(range, x) {
  return range[0] <= range[1] ? range[0] <= x && x <= range[1] : x < range[0] || range[1] < x;
}

/* harmony default export */ __webpack_exports__["a"] = (function(feature) {
  var i, n, a, b, merged, deltaMax, delta;

  phi1 = lambda1 = -(lambda0 = phi0 = Infinity);
  ranges = [];
  Object(__WEBPACK_IMPORTED_MODULE_4__stream__["a" /* default */])(feature, boundsStream);

  // First, sort ranges by their minimum longitudes.
  if (n = ranges.length) {
    ranges.sort(rangeCompare);

    // Then, merge any ranges that overlap.
    for (i = 1, a = ranges[0], merged = [a]; i < n; ++i) {
      b = ranges[i];
      if (rangeContains(a, b[0]) || rangeContains(a, b[1])) {
        if (angle(a[0], b[1]) > angle(a[0], a[1])) a[1] = b[1];
        if (angle(b[0], a[1]) > angle(a[0], a[1])) a[0] = b[0];
      } else {
        merged.push(a = b);
      }
    }

    // Finally, find the largest gap between the merged ranges.
    // The final bounding box will be the inverse of this gap.
    for (deltaMax = -Infinity, n = merged.length - 1, i = 0, a = merged[n]; i <= n; a = b, ++i) {
      b = merged[i];
      if ((delta = angle(a[1], b[0])) > deltaMax) deltaMax = delta, lambda0 = b[0], lambda1 = a[1];
    }
  }

  ranges = range = null;

  return lambda0 === Infinity || phi0 === Infinity
      ? [[NaN, NaN], [NaN, NaN]]
      : [[lambda0, phi0], [lambda1, phi1]];
});


/***/ }),

/***/ "./node_modules/d3-geo-projection/node_modules/d3-geo/src/cartesian.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["g"] = spherical;
/* harmony export (immutable) */ __webpack_exports__["a"] = cartesian;
/* harmony export (immutable) */ __webpack_exports__["d"] = cartesianDot;
/* harmony export (immutable) */ __webpack_exports__["c"] = cartesianCross;
/* harmony export (immutable) */ __webpack_exports__["b"] = cartesianAddInPlace;
/* harmony export (immutable) */ __webpack_exports__["f"] = cartesianScale;
/* harmony export (immutable) */ __webpack_exports__["e"] = cartesianNormalizeInPlace;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__math__ = __webpack_require__("./node_modules/d3-geo-projection/node_modules/d3-geo/src/math.js");


function spherical(cartesian) {
  return [Object(__WEBPACK_IMPORTED_MODULE_0__math__["e" /* atan2 */])(cartesian[1], cartesian[0]), Object(__WEBPACK_IMPORTED_MODULE_0__math__["c" /* asin */])(cartesian[2])];
}

function cartesian(spherical) {
  var lambda = spherical[0], phi = spherical[1], cosPhi = Object(__WEBPACK_IMPORTED_MODULE_0__math__["g" /* cos */])(phi);
  return [cosPhi * Object(__WEBPACK_IMPORTED_MODULE_0__math__["g" /* cos */])(lambda), cosPhi * Object(__WEBPACK_IMPORTED_MODULE_0__math__["t" /* sin */])(lambda), Object(__WEBPACK_IMPORTED_MODULE_0__math__["t" /* sin */])(phi)];
}

function cartesianDot(a, b) {
  return a[0] * b[0] + a[1] * b[1] + a[2] * b[2];
}

function cartesianCross(a, b) {
  return [a[1] * b[2] - a[2] * b[1], a[2] * b[0] - a[0] * b[2], a[0] * b[1] - a[1] * b[0]];
}

// TODO return a
function cartesianAddInPlace(a, b) {
  a[0] += b[0], a[1] += b[1], a[2] += b[2];
}

function cartesianScale(vector, k) {
  return [vector[0] * k, vector[1] * k, vector[2] * k];
}

// TODO return d
function cartesianNormalizeInPlace(d) {
  var l = Object(__WEBPACK_IMPORTED_MODULE_0__math__["u" /* sqrt */])(d[0] * d[0] + d[1] * d[1] + d[2] * d[2]);
  d[0] /= l, d[1] /= l, d[2] /= l;
}


/***/ }),

/***/ "./node_modules/d3-geo-projection/node_modules/d3-geo/src/centroid.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__math__ = __webpack_require__("./node_modules/d3-geo-projection/node_modules/d3-geo/src/math.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__noop__ = __webpack_require__("./node_modules/d3-geo-projection/node_modules/d3-geo/src/noop.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__stream__ = __webpack_require__("./node_modules/d3-geo-projection/node_modules/d3-geo/src/stream.js");




var W0, W1,
    X0, Y0, Z0,
    X1, Y1, Z1,
    X2, Y2, Z2,
    lambda00, phi00, // first point
    x0, y0, z0; // previous point

var centroidStream = {
  sphere: __WEBPACK_IMPORTED_MODULE_1__noop__["a" /* default */],
  point: centroidPoint,
  lineStart: centroidLineStart,
  lineEnd: centroidLineEnd,
  polygonStart: function() {
    centroidStream.lineStart = centroidRingStart;
    centroidStream.lineEnd = centroidRingEnd;
  },
  polygonEnd: function() {
    centroidStream.lineStart = centroidLineStart;
    centroidStream.lineEnd = centroidLineEnd;
  }
};

// Arithmetic mean of Cartesian vectors.
function centroidPoint(lambda, phi) {
  lambda *= __WEBPACK_IMPORTED_MODULE_0__math__["r" /* radians */], phi *= __WEBPACK_IMPORTED_MODULE_0__math__["r" /* radians */];
  var cosPhi = Object(__WEBPACK_IMPORTED_MODULE_0__math__["g" /* cos */])(phi);
  centroidPointCartesian(cosPhi * Object(__WEBPACK_IMPORTED_MODULE_0__math__["g" /* cos */])(lambda), cosPhi * Object(__WEBPACK_IMPORTED_MODULE_0__math__["t" /* sin */])(lambda), Object(__WEBPACK_IMPORTED_MODULE_0__math__["t" /* sin */])(phi));
}

function centroidPointCartesian(x, y, z) {
  ++W0;
  X0 += (x - X0) / W0;
  Y0 += (y - Y0) / W0;
  Z0 += (z - Z0) / W0;
}

function centroidLineStart() {
  centroidStream.point = centroidLinePointFirst;
}

function centroidLinePointFirst(lambda, phi) {
  lambda *= __WEBPACK_IMPORTED_MODULE_0__math__["r" /* radians */], phi *= __WEBPACK_IMPORTED_MODULE_0__math__["r" /* radians */];
  var cosPhi = Object(__WEBPACK_IMPORTED_MODULE_0__math__["g" /* cos */])(phi);
  x0 = cosPhi * Object(__WEBPACK_IMPORTED_MODULE_0__math__["g" /* cos */])(lambda);
  y0 = cosPhi * Object(__WEBPACK_IMPORTED_MODULE_0__math__["t" /* sin */])(lambda);
  z0 = Object(__WEBPACK_IMPORTED_MODULE_0__math__["t" /* sin */])(phi);
  centroidStream.point = centroidLinePoint;
  centroidPointCartesian(x0, y0, z0);
}

function centroidLinePoint(lambda, phi) {
  lambda *= __WEBPACK_IMPORTED_MODULE_0__math__["r" /* radians */], phi *= __WEBPACK_IMPORTED_MODULE_0__math__["r" /* radians */];
  var cosPhi = Object(__WEBPACK_IMPORTED_MODULE_0__math__["g" /* cos */])(phi),
      x = cosPhi * Object(__WEBPACK_IMPORTED_MODULE_0__math__["g" /* cos */])(lambda),
      y = cosPhi * Object(__WEBPACK_IMPORTED_MODULE_0__math__["t" /* sin */])(lambda),
      z = Object(__WEBPACK_IMPORTED_MODULE_0__math__["t" /* sin */])(phi),
      w = Object(__WEBPACK_IMPORTED_MODULE_0__math__["e" /* atan2 */])(Object(__WEBPACK_IMPORTED_MODULE_0__math__["u" /* sqrt */])((w = y0 * z - z0 * y) * w + (w = z0 * x - x0 * z) * w + (w = x0 * y - y0 * x) * w), x0 * x + y0 * y + z0 * z);
  W1 += w;
  X1 += w * (x0 + (x0 = x));
  Y1 += w * (y0 + (y0 = y));
  Z1 += w * (z0 + (z0 = z));
  centroidPointCartesian(x0, y0, z0);
}

function centroidLineEnd() {
  centroidStream.point = centroidPoint;
}

// See J. E. Brock, The Inertia Tensor for a Spherical Triangle,
// J. Applied Mechanics 42, 239 (1975).
function centroidRingStart() {
  centroidStream.point = centroidRingPointFirst;
}

function centroidRingEnd() {
  centroidRingPoint(lambda00, phi00);
  centroidStream.point = centroidPoint;
}

function centroidRingPointFirst(lambda, phi) {
  lambda00 = lambda, phi00 = phi;
  lambda *= __WEBPACK_IMPORTED_MODULE_0__math__["r" /* radians */], phi *= __WEBPACK_IMPORTED_MODULE_0__math__["r" /* radians */];
  centroidStream.point = centroidRingPoint;
  var cosPhi = Object(__WEBPACK_IMPORTED_MODULE_0__math__["g" /* cos */])(phi);
  x0 = cosPhi * Object(__WEBPACK_IMPORTED_MODULE_0__math__["g" /* cos */])(lambda);
  y0 = cosPhi * Object(__WEBPACK_IMPORTED_MODULE_0__math__["t" /* sin */])(lambda);
  z0 = Object(__WEBPACK_IMPORTED_MODULE_0__math__["t" /* sin */])(phi);
  centroidPointCartesian(x0, y0, z0);
}

function centroidRingPoint(lambda, phi) {
  lambda *= __WEBPACK_IMPORTED_MODULE_0__math__["r" /* radians */], phi *= __WEBPACK_IMPORTED_MODULE_0__math__["r" /* radians */];
  var cosPhi = Object(__WEBPACK_IMPORTED_MODULE_0__math__["g" /* cos */])(phi),
      x = cosPhi * Object(__WEBPACK_IMPORTED_MODULE_0__math__["g" /* cos */])(lambda),
      y = cosPhi * Object(__WEBPACK_IMPORTED_MODULE_0__math__["t" /* sin */])(lambda),
      z = Object(__WEBPACK_IMPORTED_MODULE_0__math__["t" /* sin */])(phi),
      cx = y0 * z - z0 * y,
      cy = z0 * x - x0 * z,
      cz = x0 * y - y0 * x,
      m = Object(__WEBPACK_IMPORTED_MODULE_0__math__["u" /* sqrt */])(cx * cx + cy * cy + cz * cz),
      w = Object(__WEBPACK_IMPORTED_MODULE_0__math__["c" /* asin */])(m), // line weight = angle
      v = m && -w / m; // area weight multiplier
  X2 += v * cx;
  Y2 += v * cy;
  Z2 += v * cz;
  W1 += w;
  X1 += w * (x0 + (x0 = x));
  Y1 += w * (y0 + (y0 = y));
  Z1 += w * (z0 + (z0 = z));
  centroidPointCartesian(x0, y0, z0);
}

/* harmony default export */ __webpack_exports__["a"] = (function(object) {
  W0 = W1 =
  X0 = Y0 = Z0 =
  X1 = Y1 = Z1 =
  X2 = Y2 = Z2 = 0;
  Object(__WEBPACK_IMPORTED_MODULE_2__stream__["a" /* default */])(object, centroidStream);

  var x = X2,
      y = Y2,
      z = Z2,
      m = x * x + y * y + z * z;

  // If the area-weighted ccentroid is undefined, fall back to length-weighted ccentroid.
  if (m < __WEBPACK_IMPORTED_MODULE_0__math__["j" /* epsilon2 */]) {
    x = X1, y = Y1, z = Z1;
    // If the feature has zero length, fall back to arithmetic mean of point vectors.
    if (W1 < __WEBPACK_IMPORTED_MODULE_0__math__["i" /* epsilon */]) x = X0, y = Y0, z = Z0;
    m = x * x + y * y + z * z;
    // If the feature still has an undefined ccentroid, then return.
    if (m < __WEBPACK_IMPORTED_MODULE_0__math__["j" /* epsilon2 */]) return [NaN, NaN];
  }

  return [Object(__WEBPACK_IMPORTED_MODULE_0__math__["e" /* atan2 */])(y, x) * __WEBPACK_IMPORTED_MODULE_0__math__["h" /* degrees */], Object(__WEBPACK_IMPORTED_MODULE_0__math__["c" /* asin */])(z / Object(__WEBPACK_IMPORTED_MODULE_0__math__["u" /* sqrt */])(m)) * __WEBPACK_IMPORTED_MODULE_0__math__["h" /* degrees */]];
});


/***/ }),

/***/ "./node_modules/d3-geo-projection/node_modules/d3-geo/src/circle.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = circleStream;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__cartesian__ = __webpack_require__("./node_modules/d3-geo-projection/node_modules/d3-geo/src/cartesian.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__constant__ = __webpack_require__("./node_modules/d3-geo-projection/node_modules/d3-geo/src/constant.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__math__ = __webpack_require__("./node_modules/d3-geo-projection/node_modules/d3-geo/src/math.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__rotation__ = __webpack_require__("./node_modules/d3-geo-projection/node_modules/d3-geo/src/rotation.js");





// Generates a circle centered at [0°, 0°], with a given radius and precision.
function circleStream(stream, radius, delta, direction, t0, t1) {
  if (!delta) return;
  var cosRadius = Object(__WEBPACK_IMPORTED_MODULE_2__math__["g" /* cos */])(radius),
      sinRadius = Object(__WEBPACK_IMPORTED_MODULE_2__math__["t" /* sin */])(radius),
      step = direction * delta;
  if (t0 == null) {
    t0 = radius + direction * __WEBPACK_IMPORTED_MODULE_2__math__["w" /* tau */];
    t1 = radius - step / 2;
  } else {
    t0 = circleRadius(cosRadius, t0);
    t1 = circleRadius(cosRadius, t1);
    if (direction > 0 ? t0 < t1 : t0 > t1) t0 += direction * __WEBPACK_IMPORTED_MODULE_2__math__["w" /* tau */];
  }
  for (var point, t = t0; direction > 0 ? t > t1 : t < t1; t -= step) {
    point = Object(__WEBPACK_IMPORTED_MODULE_0__cartesian__["g" /* spherical */])([cosRadius, -sinRadius * Object(__WEBPACK_IMPORTED_MODULE_2__math__["g" /* cos */])(t), -sinRadius * Object(__WEBPACK_IMPORTED_MODULE_2__math__["t" /* sin */])(t)]);
    stream.point(point[0], point[1]);
  }
}

// Returns the signed angle of a cartesian point relative to [cosRadius, 0, 0].
function circleRadius(cosRadius, point) {
  point = Object(__WEBPACK_IMPORTED_MODULE_0__cartesian__["a" /* cartesian */])(point), point[0] -= cosRadius;
  Object(__WEBPACK_IMPORTED_MODULE_0__cartesian__["e" /* cartesianNormalizeInPlace */])(point);
  var radius = Object(__WEBPACK_IMPORTED_MODULE_2__math__["b" /* acos */])(-point[1]);
  return ((-point[2] < 0 ? -radius : radius) + __WEBPACK_IMPORTED_MODULE_2__math__["w" /* tau */] - __WEBPACK_IMPORTED_MODULE_2__math__["i" /* epsilon */]) % __WEBPACK_IMPORTED_MODULE_2__math__["w" /* tau */];
}

/* harmony default export */ __webpack_exports__["b"] = (function() {
  var center = Object(__WEBPACK_IMPORTED_MODULE_1__constant__["a" /* default */])([0, 0]),
      radius = Object(__WEBPACK_IMPORTED_MODULE_1__constant__["a" /* default */])(90),
      precision = Object(__WEBPACK_IMPORTED_MODULE_1__constant__["a" /* default */])(6),
      ring,
      rotate,
      stream = {point: point};

  function point(x, y) {
    ring.push(x = rotate(x, y));
    x[0] *= __WEBPACK_IMPORTED_MODULE_2__math__["h" /* degrees */], x[1] *= __WEBPACK_IMPORTED_MODULE_2__math__["h" /* degrees */];
  }

  function circle() {
    var c = center.apply(this, arguments),
        r = radius.apply(this, arguments) * __WEBPACK_IMPORTED_MODULE_2__math__["r" /* radians */],
        p = precision.apply(this, arguments) * __WEBPACK_IMPORTED_MODULE_2__math__["r" /* radians */];
    ring = [];
    rotate = Object(__WEBPACK_IMPORTED_MODULE_3__rotation__["b" /* rotateRadians */])(-c[0] * __WEBPACK_IMPORTED_MODULE_2__math__["r" /* radians */], -c[1] * __WEBPACK_IMPORTED_MODULE_2__math__["r" /* radians */], 0).invert;
    circleStream(stream, r, p, 1);
    c = {type: "Polygon", coordinates: [ring]};
    ring = rotate = null;
    return c;
  }

  circle.center = function(_) {
    return arguments.length ? (center = typeof _ === "function" ? _ : Object(__WEBPACK_IMPORTED_MODULE_1__constant__["a" /* default */])([+_[0], +_[1]]), circle) : center;
  };

  circle.radius = function(_) {
    return arguments.length ? (radius = typeof _ === "function" ? _ : Object(__WEBPACK_IMPORTED_MODULE_1__constant__["a" /* default */])(+_), circle) : radius;
  };

  circle.precision = function(_) {
    return arguments.length ? (precision = typeof _ === "function" ? _ : Object(__WEBPACK_IMPORTED_MODULE_1__constant__["a" /* default */])(+_), circle) : precision;
  };

  return circle;
});


/***/ }),

/***/ "./node_modules/d3-geo-projection/node_modules/d3-geo/src/clip/antimeridian.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__index__ = __webpack_require__("./node_modules/d3-geo-projection/node_modules/d3-geo/src/clip/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__math__ = __webpack_require__("./node_modules/d3-geo-projection/node_modules/d3-geo/src/math.js");



/* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_0__index__["a" /* default */])(
  function() { return true; },
  clipAntimeridianLine,
  clipAntimeridianInterpolate,
  [-__WEBPACK_IMPORTED_MODULE_1__math__["o" /* pi */], -__WEBPACK_IMPORTED_MODULE_1__math__["l" /* halfPi */]]
));

// Takes a line and cuts into visible segments. Return values: 0 - there were
// intersections or the line was empty; 1 - no intersections; 2 - there were
// intersections, and the first and last segments should be rejoined.
function clipAntimeridianLine(stream) {
  var lambda0 = NaN,
      phi0 = NaN,
      sign0 = NaN,
      clean; // no intersections

  return {
    lineStart: function() {
      stream.lineStart();
      clean = 1;
    },
    point: function(lambda1, phi1) {
      var sign1 = lambda1 > 0 ? __WEBPACK_IMPORTED_MODULE_1__math__["o" /* pi */] : -__WEBPACK_IMPORTED_MODULE_1__math__["o" /* pi */],
          delta = Object(__WEBPACK_IMPORTED_MODULE_1__math__["a" /* abs */])(lambda1 - lambda0);
      if (Object(__WEBPACK_IMPORTED_MODULE_1__math__["a" /* abs */])(delta - __WEBPACK_IMPORTED_MODULE_1__math__["o" /* pi */]) < __WEBPACK_IMPORTED_MODULE_1__math__["i" /* epsilon */]) { // line crosses a pole
        stream.point(lambda0, phi0 = (phi0 + phi1) / 2 > 0 ? __WEBPACK_IMPORTED_MODULE_1__math__["l" /* halfPi */] : -__WEBPACK_IMPORTED_MODULE_1__math__["l" /* halfPi */]);
        stream.point(sign0, phi0);
        stream.lineEnd();
        stream.lineStart();
        stream.point(sign1, phi0);
        stream.point(lambda1, phi0);
        clean = 0;
      } else if (sign0 !== sign1 && delta >= __WEBPACK_IMPORTED_MODULE_1__math__["o" /* pi */]) { // line crosses antimeridian
        if (Object(__WEBPACK_IMPORTED_MODULE_1__math__["a" /* abs */])(lambda0 - sign0) < __WEBPACK_IMPORTED_MODULE_1__math__["i" /* epsilon */]) lambda0 -= sign0 * __WEBPACK_IMPORTED_MODULE_1__math__["i" /* epsilon */]; // handle degeneracies
        if (Object(__WEBPACK_IMPORTED_MODULE_1__math__["a" /* abs */])(lambda1 - sign1) < __WEBPACK_IMPORTED_MODULE_1__math__["i" /* epsilon */]) lambda1 -= sign1 * __WEBPACK_IMPORTED_MODULE_1__math__["i" /* epsilon */];
        phi0 = clipAntimeridianIntersect(lambda0, phi0, lambda1, phi1);
        stream.point(sign0, phi0);
        stream.lineEnd();
        stream.lineStart();
        stream.point(sign1, phi0);
        clean = 0;
      }
      stream.point(lambda0 = lambda1, phi0 = phi1);
      sign0 = sign1;
    },
    lineEnd: function() {
      stream.lineEnd();
      lambda0 = phi0 = NaN;
    },
    clean: function() {
      return 2 - clean; // if intersections, rejoin first and last segments
    }
  };
}

function clipAntimeridianIntersect(lambda0, phi0, lambda1, phi1) {
  var cosPhi0,
      cosPhi1,
      sinLambda0Lambda1 = Object(__WEBPACK_IMPORTED_MODULE_1__math__["t" /* sin */])(lambda0 - lambda1);
  return Object(__WEBPACK_IMPORTED_MODULE_1__math__["a" /* abs */])(sinLambda0Lambda1) > __WEBPACK_IMPORTED_MODULE_1__math__["i" /* epsilon */]
      ? Object(__WEBPACK_IMPORTED_MODULE_1__math__["d" /* atan */])((Object(__WEBPACK_IMPORTED_MODULE_1__math__["t" /* sin */])(phi0) * (cosPhi1 = Object(__WEBPACK_IMPORTED_MODULE_1__math__["g" /* cos */])(phi1)) * Object(__WEBPACK_IMPORTED_MODULE_1__math__["t" /* sin */])(lambda1)
          - Object(__WEBPACK_IMPORTED_MODULE_1__math__["t" /* sin */])(phi1) * (cosPhi0 = Object(__WEBPACK_IMPORTED_MODULE_1__math__["g" /* cos */])(phi0)) * Object(__WEBPACK_IMPORTED_MODULE_1__math__["t" /* sin */])(lambda0))
          / (cosPhi0 * cosPhi1 * sinLambda0Lambda1))
      : (phi0 + phi1) / 2;
}

function clipAntimeridianInterpolate(from, to, direction, stream) {
  var phi;
  if (from == null) {
    phi = direction * __WEBPACK_IMPORTED_MODULE_1__math__["l" /* halfPi */];
    stream.point(-__WEBPACK_IMPORTED_MODULE_1__math__["o" /* pi */], phi);
    stream.point(0, phi);
    stream.point(__WEBPACK_IMPORTED_MODULE_1__math__["o" /* pi */], phi);
    stream.point(__WEBPACK_IMPORTED_MODULE_1__math__["o" /* pi */], 0);
    stream.point(__WEBPACK_IMPORTED_MODULE_1__math__["o" /* pi */], -phi);
    stream.point(0, -phi);
    stream.point(-__WEBPACK_IMPORTED_MODULE_1__math__["o" /* pi */], -phi);
    stream.point(-__WEBPACK_IMPORTED_MODULE_1__math__["o" /* pi */], 0);
    stream.point(-__WEBPACK_IMPORTED_MODULE_1__math__["o" /* pi */], phi);
  } else if (Object(__WEBPACK_IMPORTED_MODULE_1__math__["a" /* abs */])(from[0] - to[0]) > __WEBPACK_IMPORTED_MODULE_1__math__["i" /* epsilon */]) {
    var lambda = from[0] < to[0] ? __WEBPACK_IMPORTED_MODULE_1__math__["o" /* pi */] : -__WEBPACK_IMPORTED_MODULE_1__math__["o" /* pi */];
    phi = direction * lambda / 2;
    stream.point(-lambda, phi);
    stream.point(0, phi);
    stream.point(lambda, phi);
  } else {
    stream.point(to[0], to[1]);
  }
}


/***/ }),

/***/ "./node_modules/d3-geo-projection/node_modules/d3-geo/src/clip/buffer.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__noop__ = __webpack_require__("./node_modules/d3-geo-projection/node_modules/d3-geo/src/noop.js");


/* harmony default export */ __webpack_exports__["a"] = (function() {
  var lines = [],
      line;
  return {
    point: function(x, y) {
      line.push([x, y]);
    },
    lineStart: function() {
      lines.push(line = []);
    },
    lineEnd: __WEBPACK_IMPORTED_MODULE_0__noop__["a" /* default */],
    rejoin: function() {
      if (lines.length > 1) lines.push(lines.pop().concat(lines.shift()));
    },
    result: function() {
      var result = lines;
      lines = [];
      line = null;
      return result;
    }
  };
});


/***/ }),

/***/ "./node_modules/d3-geo-projection/node_modules/d3-geo/src/clip/circle.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__cartesian__ = __webpack_require__("./node_modules/d3-geo-projection/node_modules/d3-geo/src/cartesian.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__circle__ = __webpack_require__("./node_modules/d3-geo-projection/node_modules/d3-geo/src/circle.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__math__ = __webpack_require__("./node_modules/d3-geo-projection/node_modules/d3-geo/src/math.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pointEqual__ = __webpack_require__("./node_modules/d3-geo-projection/node_modules/d3-geo/src/pointEqual.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__index__ = __webpack_require__("./node_modules/d3-geo-projection/node_modules/d3-geo/src/clip/index.js");






/* harmony default export */ __webpack_exports__["a"] = (function(radius) {
  var cr = Object(__WEBPACK_IMPORTED_MODULE_2__math__["g" /* cos */])(radius),
      delta = 6 * __WEBPACK_IMPORTED_MODULE_2__math__["r" /* radians */],
      smallRadius = cr > 0,
      notHemisphere = Object(__WEBPACK_IMPORTED_MODULE_2__math__["a" /* abs */])(cr) > __WEBPACK_IMPORTED_MODULE_2__math__["i" /* epsilon */]; // TODO optimise for this common case

  function interpolate(from, to, direction, stream) {
    Object(__WEBPACK_IMPORTED_MODULE_1__circle__["a" /* circleStream */])(stream, radius, delta, direction, from, to);
  }

  function visible(lambda, phi) {
    return Object(__WEBPACK_IMPORTED_MODULE_2__math__["g" /* cos */])(lambda) * Object(__WEBPACK_IMPORTED_MODULE_2__math__["g" /* cos */])(phi) > cr;
  }

  // Takes a line and cuts into visible segments. Return values used for polygon
  // clipping: 0 - there were intersections or the line was empty; 1 - no
  // intersections 2 - there were intersections, and the first and last segments
  // should be rejoined.
  function clipLine(stream) {
    var point0, // previous point
        c0, // code for previous point
        v0, // visibility of previous point
        v00, // visibility of first point
        clean; // no intersections
    return {
      lineStart: function() {
        v00 = v0 = false;
        clean = 1;
      },
      point: function(lambda, phi) {
        var point1 = [lambda, phi],
            point2,
            v = visible(lambda, phi),
            c = smallRadius
              ? v ? 0 : code(lambda, phi)
              : v ? code(lambda + (lambda < 0 ? __WEBPACK_IMPORTED_MODULE_2__math__["o" /* pi */] : -__WEBPACK_IMPORTED_MODULE_2__math__["o" /* pi */]), phi) : 0;
        if (!point0 && (v00 = v0 = v)) stream.lineStart();
        // Handle degeneracies.
        // TODO ignore if not clipping polygons.
        if (v !== v0) {
          point2 = intersect(point0, point1);
          if (!point2 || Object(__WEBPACK_IMPORTED_MODULE_3__pointEqual__["a" /* default */])(point0, point2) || Object(__WEBPACK_IMPORTED_MODULE_3__pointEqual__["a" /* default */])(point1, point2)) {
            point1[0] += __WEBPACK_IMPORTED_MODULE_2__math__["i" /* epsilon */];
            point1[1] += __WEBPACK_IMPORTED_MODULE_2__math__["i" /* epsilon */];
            v = visible(point1[0], point1[1]);
          }
        }
        if (v !== v0) {
          clean = 0;
          if (v) {
            // outside going in
            stream.lineStart();
            point2 = intersect(point1, point0);
            stream.point(point2[0], point2[1]);
          } else {
            // inside going out
            point2 = intersect(point0, point1);
            stream.point(point2[0], point2[1]);
            stream.lineEnd();
          }
          point0 = point2;
        } else if (notHemisphere && point0 && smallRadius ^ v) {
          var t;
          // If the codes for two points are different, or are both zero,
          // and there this segment intersects with the small circle.
          if (!(c & c0) && (t = intersect(point1, point0, true))) {
            clean = 0;
            if (smallRadius) {
              stream.lineStart();
              stream.point(t[0][0], t[0][1]);
              stream.point(t[1][0], t[1][1]);
              stream.lineEnd();
            } else {
              stream.point(t[1][0], t[1][1]);
              stream.lineEnd();
              stream.lineStart();
              stream.point(t[0][0], t[0][1]);
            }
          }
        }
        if (v && (!point0 || !Object(__WEBPACK_IMPORTED_MODULE_3__pointEqual__["a" /* default */])(point0, point1))) {
          stream.point(point1[0], point1[1]);
        }
        point0 = point1, v0 = v, c0 = c;
      },
      lineEnd: function() {
        if (v0) stream.lineEnd();
        point0 = null;
      },
      // Rejoin first and last segments if there were intersections and the first
      // and last points were visible.
      clean: function() {
        return clean | ((v00 && v0) << 1);
      }
    };
  }

  // Intersects the great circle between a and b with the clip circle.
  function intersect(a, b, two) {
    var pa = Object(__WEBPACK_IMPORTED_MODULE_0__cartesian__["a" /* cartesian */])(a),
        pb = Object(__WEBPACK_IMPORTED_MODULE_0__cartesian__["a" /* cartesian */])(b);

    // We have two planes, n1.p = d1 and n2.p = d2.
    // Find intersection line p(t) = c1 n1 + c2 n2 + t (n1 ⨯ n2).
    var n1 = [1, 0, 0], // normal
        n2 = Object(__WEBPACK_IMPORTED_MODULE_0__cartesian__["c" /* cartesianCross */])(pa, pb),
        n2n2 = Object(__WEBPACK_IMPORTED_MODULE_0__cartesian__["d" /* cartesianDot */])(n2, n2),
        n1n2 = n2[0], // cartesianDot(n1, n2),
        determinant = n2n2 - n1n2 * n1n2;

    // Two polar points.
    if (!determinant) return !two && a;

    var c1 =  cr * n2n2 / determinant,
        c2 = -cr * n1n2 / determinant,
        n1xn2 = Object(__WEBPACK_IMPORTED_MODULE_0__cartesian__["c" /* cartesianCross */])(n1, n2),
        A = Object(__WEBPACK_IMPORTED_MODULE_0__cartesian__["f" /* cartesianScale */])(n1, c1),
        B = Object(__WEBPACK_IMPORTED_MODULE_0__cartesian__["f" /* cartesianScale */])(n2, c2);
    Object(__WEBPACK_IMPORTED_MODULE_0__cartesian__["b" /* cartesianAddInPlace */])(A, B);

    // Solve |p(t)|^2 = 1.
    var u = n1xn2,
        w = Object(__WEBPACK_IMPORTED_MODULE_0__cartesian__["d" /* cartesianDot */])(A, u),
        uu = Object(__WEBPACK_IMPORTED_MODULE_0__cartesian__["d" /* cartesianDot */])(u, u),
        t2 = w * w - uu * (Object(__WEBPACK_IMPORTED_MODULE_0__cartesian__["d" /* cartesianDot */])(A, A) - 1);

    if (t2 < 0) return;

    var t = Object(__WEBPACK_IMPORTED_MODULE_2__math__["u" /* sqrt */])(t2),
        q = Object(__WEBPACK_IMPORTED_MODULE_0__cartesian__["f" /* cartesianScale */])(u, (-w - t) / uu);
    Object(__WEBPACK_IMPORTED_MODULE_0__cartesian__["b" /* cartesianAddInPlace */])(q, A);
    q = Object(__WEBPACK_IMPORTED_MODULE_0__cartesian__["g" /* spherical */])(q);

    if (!two) return q;

    // Two intersection points.
    var lambda0 = a[0],
        lambda1 = b[0],
        phi0 = a[1],
        phi1 = b[1],
        z;

    if (lambda1 < lambda0) z = lambda0, lambda0 = lambda1, lambda1 = z;

    var delta = lambda1 - lambda0,
        polar = Object(__WEBPACK_IMPORTED_MODULE_2__math__["a" /* abs */])(delta - __WEBPACK_IMPORTED_MODULE_2__math__["o" /* pi */]) < __WEBPACK_IMPORTED_MODULE_2__math__["i" /* epsilon */],
        meridian = polar || delta < __WEBPACK_IMPORTED_MODULE_2__math__["i" /* epsilon */];

    if (!polar && phi1 < phi0) z = phi0, phi0 = phi1, phi1 = z;

    // Check that the first point is between a and b.
    if (meridian
        ? polar
          ? phi0 + phi1 > 0 ^ q[1] < (Object(__WEBPACK_IMPORTED_MODULE_2__math__["a" /* abs */])(q[0] - lambda0) < __WEBPACK_IMPORTED_MODULE_2__math__["i" /* epsilon */] ? phi0 : phi1)
          : phi0 <= q[1] && q[1] <= phi1
        : delta > __WEBPACK_IMPORTED_MODULE_2__math__["o" /* pi */] ^ (lambda0 <= q[0] && q[0] <= lambda1)) {
      var q1 = Object(__WEBPACK_IMPORTED_MODULE_0__cartesian__["f" /* cartesianScale */])(u, (-w + t) / uu);
      Object(__WEBPACK_IMPORTED_MODULE_0__cartesian__["b" /* cartesianAddInPlace */])(q1, A);
      return [q, Object(__WEBPACK_IMPORTED_MODULE_0__cartesian__["g" /* spherical */])(q1)];
    }
  }

  // Generates a 4-bit vector representing the location of a point relative to
  // the small circle's bounding box.
  function code(lambda, phi) {
    var r = smallRadius ? radius : __WEBPACK_IMPORTED_MODULE_2__math__["o" /* pi */] - radius,
        code = 0;
    if (lambda < -r) code |= 1; // left
    else if (lambda > r) code |= 2; // right
    if (phi < -r) code |= 4; // below
    else if (phi > r) code |= 8; // above
    return code;
  }

  return Object(__WEBPACK_IMPORTED_MODULE_4__index__["a" /* default */])(visible, clipLine, interpolate, smallRadius ? [0, -radius] : [-__WEBPACK_IMPORTED_MODULE_2__math__["o" /* pi */], radius - __WEBPACK_IMPORTED_MODULE_2__math__["o" /* pi */]]);
});


/***/ }),

/***/ "./node_modules/d3-geo-projection/node_modules/d3-geo/src/clip/extent.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__rectangle__ = __webpack_require__("./node_modules/d3-geo-projection/node_modules/d3-geo/src/clip/rectangle.js");


/* unused harmony default export */ var _unused_webpack_default_export = (function() {
  var x0 = 0,
      y0 = 0,
      x1 = 960,
      y1 = 500,
      cache,
      cacheStream,
      clip;

  return clip = {
    stream: function(stream) {
      return cache && cacheStream === stream ? cache : cache = Object(__WEBPACK_IMPORTED_MODULE_0__rectangle__["a" /* default */])(x0, y0, x1, y1)(cacheStream = stream);
    },
    extent: function(_) {
      return arguments.length ? (x0 = +_[0][0], y0 = +_[0][1], x1 = +_[1][0], y1 = +_[1][1], cache = cacheStream = null, clip) : [[x0, y0], [x1, y1]];
    }
  };
});


/***/ }),

/***/ "./node_modules/d3-geo-projection/node_modules/d3-geo/src/clip/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__buffer__ = __webpack_require__("./node_modules/d3-geo-projection/node_modules/d3-geo/src/clip/buffer.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__rejoin__ = __webpack_require__("./node_modules/d3-geo-projection/node_modules/d3-geo/src/clip/rejoin.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__math__ = __webpack_require__("./node_modules/d3-geo-projection/node_modules/d3-geo/src/math.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__polygonContains__ = __webpack_require__("./node_modules/d3-geo-projection/node_modules/d3-geo/src/polygonContains.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_d3_array__ = __webpack_require__("./node_modules/d3-array/index.js");






/* harmony default export */ __webpack_exports__["a"] = (function(pointVisible, clipLine, interpolate, start) {
  return function(sink) {
    var line = clipLine(sink),
        ringBuffer = Object(__WEBPACK_IMPORTED_MODULE_0__buffer__["a" /* default */])(),
        ringSink = clipLine(ringBuffer),
        polygonStarted = false,
        polygon,
        segments,
        ring;

    var clip = {
      point: point,
      lineStart: lineStart,
      lineEnd: lineEnd,
      polygonStart: function() {
        clip.point = pointRing;
        clip.lineStart = ringStart;
        clip.lineEnd = ringEnd;
        segments = [];
        polygon = [];
      },
      polygonEnd: function() {
        clip.point = point;
        clip.lineStart = lineStart;
        clip.lineEnd = lineEnd;
        segments = Object(__WEBPACK_IMPORTED_MODULE_4_d3_array__["a" /* merge */])(segments);
        var startInside = Object(__WEBPACK_IMPORTED_MODULE_3__polygonContains__["a" /* default */])(polygon, start);
        if (segments.length) {
          if (!polygonStarted) sink.polygonStart(), polygonStarted = true;
          Object(__WEBPACK_IMPORTED_MODULE_1__rejoin__["a" /* default */])(segments, compareIntersection, startInside, interpolate, sink);
        } else if (startInside) {
          if (!polygonStarted) sink.polygonStart(), polygonStarted = true;
          sink.lineStart();
          interpolate(null, null, 1, sink);
          sink.lineEnd();
        }
        if (polygonStarted) sink.polygonEnd(), polygonStarted = false;
        segments = polygon = null;
      },
      sphere: function() {
        sink.polygonStart();
        sink.lineStart();
        interpolate(null, null, 1, sink);
        sink.lineEnd();
        sink.polygonEnd();
      }
    };

    function point(lambda, phi) {
      if (pointVisible(lambda, phi)) sink.point(lambda, phi);
    }

    function pointLine(lambda, phi) {
      line.point(lambda, phi);
    }

    function lineStart() {
      clip.point = pointLine;
      line.lineStart();
    }

    function lineEnd() {
      clip.point = point;
      line.lineEnd();
    }

    function pointRing(lambda, phi) {
      ring.push([lambda, phi]);
      ringSink.point(lambda, phi);
    }

    function ringStart() {
      ringSink.lineStart();
      ring = [];
    }

    function ringEnd() {
      pointRing(ring[0][0], ring[0][1]);
      ringSink.lineEnd();

      var clean = ringSink.clean(),
          ringSegments = ringBuffer.result(),
          i, n = ringSegments.length, m,
          segment,
          point;

      ring.pop();
      polygon.push(ring);
      ring = null;

      if (!n) return;

      // No intersections.
      if (clean & 1) {
        segment = ringSegments[0];
        if ((m = segment.length - 1) > 0) {
          if (!polygonStarted) sink.polygonStart(), polygonStarted = true;
          sink.lineStart();
          for (i = 0; i < m; ++i) sink.point((point = segment[i])[0], point[1]);
          sink.lineEnd();
        }
        return;
      }

      // Rejoin connected segments.
      // TODO reuse ringBuffer.rejoin()?
      if (n > 1 && clean & 2) ringSegments.push(ringSegments.pop().concat(ringSegments.shift()));

      segments.push(ringSegments.filter(validSegment));
    }

    return clip;
  };
});

function validSegment(segment) {
  return segment.length > 1;
}

// Intersections are sorted along the clip edge. For both antimeridian cutting
// and circle clipping, the same comparison is used.
function compareIntersection(a, b) {
  return ((a = a.x)[0] < 0 ? a[1] - __WEBPACK_IMPORTED_MODULE_2__math__["l" /* halfPi */] - __WEBPACK_IMPORTED_MODULE_2__math__["i" /* epsilon */] : __WEBPACK_IMPORTED_MODULE_2__math__["l" /* halfPi */] - a[1])
       - ((b = b.x)[0] < 0 ? b[1] - __WEBPACK_IMPORTED_MODULE_2__math__["l" /* halfPi */] - __WEBPACK_IMPORTED_MODULE_2__math__["i" /* epsilon */] : __WEBPACK_IMPORTED_MODULE_2__math__["l" /* halfPi */] - b[1]);
}


/***/ }),

/***/ "./node_modules/d3-geo-projection/node_modules/d3-geo/src/clip/line.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (function(a, b, x0, y0, x1, y1) {
  var ax = a[0],
      ay = a[1],
      bx = b[0],
      by = b[1],
      t0 = 0,
      t1 = 1,
      dx = bx - ax,
      dy = by - ay,
      r;

  r = x0 - ax;
  if (!dx && r > 0) return;
  r /= dx;
  if (dx < 0) {
    if (r < t0) return;
    if (r < t1) t1 = r;
  } else if (dx > 0) {
    if (r > t1) return;
    if (r > t0) t0 = r;
  }

  r = x1 - ax;
  if (!dx && r < 0) return;
  r /= dx;
  if (dx < 0) {
    if (r > t1) return;
    if (r > t0) t0 = r;
  } else if (dx > 0) {
    if (r < t0) return;
    if (r < t1) t1 = r;
  }

  r = y0 - ay;
  if (!dy && r > 0) return;
  r /= dy;
  if (dy < 0) {
    if (r < t0) return;
    if (r < t1) t1 = r;
  } else if (dy > 0) {
    if (r > t1) return;
    if (r > t0) t0 = r;
  }

  r = y1 - ay;
  if (!dy && r < 0) return;
  r /= dy;
  if (dy < 0) {
    if (r > t1) return;
    if (r > t0) t0 = r;
  } else if (dy > 0) {
    if (r < t0) return;
    if (r < t1) t1 = r;
  }

  if (t0 > 0) a[0] = ax + t0 * dx, a[1] = ay + t0 * dy;
  if (t1 < 1) b[0] = ax + t1 * dx, b[1] = ay + t1 * dy;
  return true;
});


/***/ }),

/***/ "./node_modules/d3-geo-projection/node_modules/d3-geo/src/clip/rectangle.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = clipRectangle;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__math__ = __webpack_require__("./node_modules/d3-geo-projection/node_modules/d3-geo/src/math.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__buffer__ = __webpack_require__("./node_modules/d3-geo-projection/node_modules/d3-geo/src/clip/buffer.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__line__ = __webpack_require__("./node_modules/d3-geo-projection/node_modules/d3-geo/src/clip/line.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__rejoin__ = __webpack_require__("./node_modules/d3-geo-projection/node_modules/d3-geo/src/clip/rejoin.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_d3_array__ = __webpack_require__("./node_modules/d3-array/index.js");






var clipMax = 1e9, clipMin = -clipMax;

// TODO Use d3-polygon’s polygonContains here for the ring check?
// TODO Eliminate duplicate buffering in clipBuffer and polygon.push?

function clipRectangle(x0, y0, x1, y1) {

  function visible(x, y) {
    return x0 <= x && x <= x1 && y0 <= y && y <= y1;
  }

  function interpolate(from, to, direction, stream) {
    var a = 0, a1 = 0;
    if (from == null
        || (a = corner(from, direction)) !== (a1 = corner(to, direction))
        || comparePoint(from, to) < 0 ^ direction > 0) {
      do stream.point(a === 0 || a === 3 ? x0 : x1, a > 1 ? y1 : y0);
      while ((a = (a + direction + 4) % 4) !== a1);
    } else {
      stream.point(to[0], to[1]);
    }
  }

  function corner(p, direction) {
    return Object(__WEBPACK_IMPORTED_MODULE_0__math__["a" /* abs */])(p[0] - x0) < __WEBPACK_IMPORTED_MODULE_0__math__["i" /* epsilon */] ? direction > 0 ? 0 : 3
        : Object(__WEBPACK_IMPORTED_MODULE_0__math__["a" /* abs */])(p[0] - x1) < __WEBPACK_IMPORTED_MODULE_0__math__["i" /* epsilon */] ? direction > 0 ? 2 : 1
        : Object(__WEBPACK_IMPORTED_MODULE_0__math__["a" /* abs */])(p[1] - y0) < __WEBPACK_IMPORTED_MODULE_0__math__["i" /* epsilon */] ? direction > 0 ? 1 : 0
        : direction > 0 ? 3 : 2; // abs(p[1] - y1) < epsilon
  }

  function compareIntersection(a, b) {
    return comparePoint(a.x, b.x);
  }

  function comparePoint(a, b) {
    var ca = corner(a, 1),
        cb = corner(b, 1);
    return ca !== cb ? ca - cb
        : ca === 0 ? b[1] - a[1]
        : ca === 1 ? a[0] - b[0]
        : ca === 2 ? a[1] - b[1]
        : b[0] - a[0];
  }

  return function(stream) {
    var activeStream = stream,
        bufferStream = Object(__WEBPACK_IMPORTED_MODULE_1__buffer__["a" /* default */])(),
        segments,
        polygon,
        ring,
        x__, y__, v__, // first point
        x_, y_, v_, // previous point
        first,
        clean;

    var clipStream = {
      point: point,
      lineStart: lineStart,
      lineEnd: lineEnd,
      polygonStart: polygonStart,
      polygonEnd: polygonEnd
    };

    function point(x, y) {
      if (visible(x, y)) activeStream.point(x, y);
    }

    function polygonInside() {
      var winding = 0;

      for (var i = 0, n = polygon.length; i < n; ++i) {
        for (var ring = polygon[i], j = 1, m = ring.length, point = ring[0], a0, a1, b0 = point[0], b1 = point[1]; j < m; ++j) {
          a0 = b0, a1 = b1, point = ring[j], b0 = point[0], b1 = point[1];
          if (a1 <= y1) { if (b1 > y1 && (b0 - a0) * (y1 - a1) > (b1 - a1) * (x0 - a0)) ++winding; }
          else { if (b1 <= y1 && (b0 - a0) * (y1 - a1) < (b1 - a1) * (x0 - a0)) --winding; }
        }
      }

      return winding;
    }

    // Buffer geometry within a polygon and then clip it en masse.
    function polygonStart() {
      activeStream = bufferStream, segments = [], polygon = [], clean = true;
    }

    function polygonEnd() {
      var startInside = polygonInside(),
          cleanInside = clean && startInside,
          visible = (segments = Object(__WEBPACK_IMPORTED_MODULE_4_d3_array__["a" /* merge */])(segments)).length;
      if (cleanInside || visible) {
        stream.polygonStart();
        if (cleanInside) {
          stream.lineStart();
          interpolate(null, null, 1, stream);
          stream.lineEnd();
        }
        if (visible) {
          Object(__WEBPACK_IMPORTED_MODULE_3__rejoin__["a" /* default */])(segments, compareIntersection, startInside, interpolate, stream);
        }
        stream.polygonEnd();
      }
      activeStream = stream, segments = polygon = ring = null;
    }

    function lineStart() {
      clipStream.point = linePoint;
      if (polygon) polygon.push(ring = []);
      first = true;
      v_ = false;
      x_ = y_ = NaN;
    }

    // TODO rather than special-case polygons, simply handle them separately.
    // Ideally, coincident intersection points should be jittered to avoid
    // clipping issues.
    function lineEnd() {
      if (segments) {
        linePoint(x__, y__);
        if (v__ && v_) bufferStream.rejoin();
        segments.push(bufferStream.result());
      }
      clipStream.point = point;
      if (v_) activeStream.lineEnd();
    }

    function linePoint(x, y) {
      var v = visible(x, y);
      if (polygon) ring.push([x, y]);
      if (first) {
        x__ = x, y__ = y, v__ = v;
        first = false;
        if (v) {
          activeStream.lineStart();
          activeStream.point(x, y);
        }
      } else {
        if (v && v_) activeStream.point(x, y);
        else {
          var a = [x_ = Math.max(clipMin, Math.min(clipMax, x_)), y_ = Math.max(clipMin, Math.min(clipMax, y_))],
              b = [x = Math.max(clipMin, Math.min(clipMax, x)), y = Math.max(clipMin, Math.min(clipMax, y))];
          if (Object(__WEBPACK_IMPORTED_MODULE_2__line__["a" /* default */])(a, b, x0, y0, x1, y1)) {
            if (!v_) {
              activeStream.lineStart();
              activeStream.point(a[0], a[1]);
            }
            activeStream.point(b[0], b[1]);
            if (!v) activeStream.lineEnd();
            clean = false;
          } else if (v) {
            activeStream.lineStart();
            activeStream.point(x, y);
            clean = false;
          }
        }
      }
      x_ = x, y_ = y, v_ = v;
    }

    return clipStream;
  };
}


/***/ }),

/***/ "./node_modules/d3-geo-projection/node_modules/d3-geo/src/clip/rejoin.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__pointEqual__ = __webpack_require__("./node_modules/d3-geo-projection/node_modules/d3-geo/src/pointEqual.js");


function Intersection(point, points, other, entry) {
  this.x = point;
  this.z = points;
  this.o = other; // another intersection
  this.e = entry; // is an entry?
  this.v = false; // visited
  this.n = this.p = null; // next & previous
}

// A generalized polygon clipping algorithm: given a polygon that has been cut
// into its visible line segments, and rejoins the segments by interpolating
// along the clip edge.
/* harmony default export */ __webpack_exports__["a"] = (function(segments, compareIntersection, startInside, interpolate, stream) {
  var subject = [],
      clip = [],
      i,
      n;

  segments.forEach(function(segment) {
    if ((n = segment.length - 1) <= 0) return;
    var n, p0 = segment[0], p1 = segment[n], x;

    // If the first and last points of a segment are coincident, then treat as a
    // closed ring. TODO if all rings are closed, then the winding order of the
    // exterior ring should be checked.
    if (Object(__WEBPACK_IMPORTED_MODULE_0__pointEqual__["a" /* default */])(p0, p1)) {
      stream.lineStart();
      for (i = 0; i < n; ++i) stream.point((p0 = segment[i])[0], p0[1]);
      stream.lineEnd();
      return;
    }

    subject.push(x = new Intersection(p0, segment, null, true));
    clip.push(x.o = new Intersection(p0, null, x, false));
    subject.push(x = new Intersection(p1, segment, null, false));
    clip.push(x.o = new Intersection(p1, null, x, true));
  });

  if (!subject.length) return;

  clip.sort(compareIntersection);
  link(subject);
  link(clip);

  for (i = 0, n = clip.length; i < n; ++i) {
    clip[i].e = startInside = !startInside;
  }

  var start = subject[0],
      points,
      point;

  while (1) {
    // Find first unvisited intersection.
    var current = start,
        isSubject = true;
    while (current.v) if ((current = current.n) === start) return;
    points = current.z;
    stream.lineStart();
    do {
      current.v = current.o.v = true;
      if (current.e) {
        if (isSubject) {
          for (i = 0, n = points.length; i < n; ++i) stream.point((point = points[i])[0], point[1]);
        } else {
          interpolate(current.x, current.n.x, 1, stream);
        }
        current = current.n;
      } else {
        if (isSubject) {
          points = current.p.z;
          for (i = points.length - 1; i >= 0; --i) stream.point((point = points[i])[0], point[1]);
        } else {
          interpolate(current.x, current.p.x, -1, stream);
        }
        current = current.p;
      }
      current = current.o;
      points = current.z;
      isSubject = !isSubject;
    } while (!current.v);
    stream.lineEnd();
  }
});

function link(array) {
  if (!(n = array.length)) return;
  var n,
      i = 0,
      a = array[0],
      b;
  while (++i < n) {
    a.n = b = array[i];
    b.p = a;
    a = b;
  }
  a.n = b = array[0];
  b.p = a;
}


/***/ }),

/***/ "./node_modules/d3-geo-projection/node_modules/d3-geo/src/compose.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (function(a, b) {

  function compose(x, y) {
    return x = a(x, y), b(x[0], x[1]);
  }

  if (a.invert && b.invert) compose.invert = function(x, y) {
    return x = b.invert(x, y), x && a.invert(x[0], x[1]);
  };

  return compose;
});


/***/ }),

/***/ "./node_modules/d3-geo-projection/node_modules/d3-geo/src/constant.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (function(x) {
  return function() {
    return x;
  };
});


/***/ }),

/***/ "./node_modules/d3-geo-projection/node_modules/d3-geo/src/contains.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__polygonContains__ = __webpack_require__("./node_modules/d3-geo-projection/node_modules/d3-geo/src/polygonContains.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__distance__ = __webpack_require__("./node_modules/d3-geo-projection/node_modules/d3-geo/src/distance.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__math__ = __webpack_require__("./node_modules/d3-geo-projection/node_modules/d3-geo/src/math.js");




var containsObjectType = {
  Feature: function(object, point) {
    return containsGeometry(object.geometry, point);
  },
  FeatureCollection: function(object, point) {
    var features = object.features, i = -1, n = features.length;
    while (++i < n) if (containsGeometry(features[i].geometry, point)) return true;
    return false;
  }
};

var containsGeometryType = {
  Sphere: function() {
    return true;
  },
  Point: function(object, point) {
    return containsPoint(object.coordinates, point);
  },
  MultiPoint: function(object, point) {
    var coordinates = object.coordinates, i = -1, n = coordinates.length;
    while (++i < n) if (containsPoint(coordinates[i], point)) return true;
    return false;
  },
  LineString: function(object, point) {
    return containsLine(object.coordinates, point);
  },
  MultiLineString: function(object, point) {
    var coordinates = object.coordinates, i = -1, n = coordinates.length;
    while (++i < n) if (containsLine(coordinates[i], point)) return true;
    return false;
  },
  Polygon: function(object, point) {
    return containsPolygon(object.coordinates, point);
  },
  MultiPolygon: function(object, point) {
    var coordinates = object.coordinates, i = -1, n = coordinates.length;
    while (++i < n) if (containsPolygon(coordinates[i], point)) return true;
    return false;
  },
  GeometryCollection: function(object, point) {
    var geometries = object.geometries, i = -1, n = geometries.length;
    while (++i < n) if (containsGeometry(geometries[i], point)) return true;
    return false;
  }
};

function containsGeometry(geometry, point) {
  return geometry && containsGeometryType.hasOwnProperty(geometry.type)
      ? containsGeometryType[geometry.type](geometry, point)
      : false;
}

function containsPoint(coordinates, point) {
  return Object(__WEBPACK_IMPORTED_MODULE_1__distance__["a" /* default */])(coordinates, point) === 0;
}

function containsLine(coordinates, point) {
  var ab = Object(__WEBPACK_IMPORTED_MODULE_1__distance__["a" /* default */])(coordinates[0], coordinates[1]),
      ao = Object(__WEBPACK_IMPORTED_MODULE_1__distance__["a" /* default */])(coordinates[0], point),
      ob = Object(__WEBPACK_IMPORTED_MODULE_1__distance__["a" /* default */])(point, coordinates[1]);
  return ao + ob <= ab + __WEBPACK_IMPORTED_MODULE_2__math__["i" /* epsilon */];
}

function containsPolygon(coordinates, point) {
  return !!Object(__WEBPACK_IMPORTED_MODULE_0__polygonContains__["a" /* default */])(coordinates.map(ringRadians), pointRadians(point));
}

function ringRadians(ring) {
  return ring = ring.map(pointRadians), ring.pop(), ring;
}

function pointRadians(point) {
  return [point[0] * __WEBPACK_IMPORTED_MODULE_2__math__["r" /* radians */], point[1] * __WEBPACK_IMPORTED_MODULE_2__math__["r" /* radians */]];
}

/* unused harmony default export */ var _unused_webpack_default_export = (function(object, point) {
  return (object && containsObjectType.hasOwnProperty(object.type)
      ? containsObjectType[object.type]
      : containsGeometry)(object, point);
});


/***/ }),

/***/ "./node_modules/d3-geo-projection/node_modules/d3-geo/src/distance.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__length__ = __webpack_require__("./node_modules/d3-geo-projection/node_modules/d3-geo/src/length.js");


var coordinates = [null, null],
    object = {type: "LineString", coordinates: coordinates};

/* harmony default export */ __webpack_exports__["a"] = (function(a, b) {
  coordinates[0] = a;
  coordinates[1] = b;
  return Object(__WEBPACK_IMPORTED_MODULE_0__length__["a" /* default */])(object);
});


/***/ }),

/***/ "./node_modules/d3-geo-projection/node_modules/d3-geo/src/graticule.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export default */
/* unused harmony export graticule10 */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_d3_array__ = __webpack_require__("./node_modules/d3-array/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__math__ = __webpack_require__("./node_modules/d3-geo-projection/node_modules/d3-geo/src/math.js");



function graticuleX(y0, y1, dy) {
  var y = Object(__WEBPACK_IMPORTED_MODULE_0_d3_array__["b" /* range */])(y0, y1 - __WEBPACK_IMPORTED_MODULE_1__math__["i" /* epsilon */], dy).concat(y1);
  return function(x) { return y.map(function(y) { return [x, y]; }); };
}

function graticuleY(x0, x1, dx) {
  var x = Object(__WEBPACK_IMPORTED_MODULE_0_d3_array__["b" /* range */])(x0, x1 - __WEBPACK_IMPORTED_MODULE_1__math__["i" /* epsilon */], dx).concat(x1);
  return function(y) { return x.map(function(x) { return [x, y]; }); };
}

function graticule() {
  var x1, x0, X1, X0,
      y1, y0, Y1, Y0,
      dx = 10, dy = dx, DX = 90, DY = 360,
      x, y, X, Y,
      precision = 2.5;

  function graticule() {
    return {type: "MultiLineString", coordinates: lines()};
  }

  function lines() {
    return Object(__WEBPACK_IMPORTED_MODULE_0_d3_array__["b" /* range */])(Object(__WEBPACK_IMPORTED_MODULE_1__math__["f" /* ceil */])(X0 / DX) * DX, X1, DX).map(X)
        .concat(Object(__WEBPACK_IMPORTED_MODULE_0_d3_array__["b" /* range */])(Object(__WEBPACK_IMPORTED_MODULE_1__math__["f" /* ceil */])(Y0 / DY) * DY, Y1, DY).map(Y))
        .concat(Object(__WEBPACK_IMPORTED_MODULE_0_d3_array__["b" /* range */])(Object(__WEBPACK_IMPORTED_MODULE_1__math__["f" /* ceil */])(x0 / dx) * dx, x1, dx).filter(function(x) { return Object(__WEBPACK_IMPORTED_MODULE_1__math__["a" /* abs */])(x % DX) > __WEBPACK_IMPORTED_MODULE_1__math__["i" /* epsilon */]; }).map(x))
        .concat(Object(__WEBPACK_IMPORTED_MODULE_0_d3_array__["b" /* range */])(Object(__WEBPACK_IMPORTED_MODULE_1__math__["f" /* ceil */])(y0 / dy) * dy, y1, dy).filter(function(y) { return Object(__WEBPACK_IMPORTED_MODULE_1__math__["a" /* abs */])(y % DY) > __WEBPACK_IMPORTED_MODULE_1__math__["i" /* epsilon */]; }).map(y));
  }

  graticule.lines = function() {
    return lines().map(function(coordinates) { return {type: "LineString", coordinates: coordinates}; });
  };

  graticule.outline = function() {
    return {
      type: "Polygon",
      coordinates: [
        X(X0).concat(
        Y(Y1).slice(1),
        X(X1).reverse().slice(1),
        Y(Y0).reverse().slice(1))
      ]
    };
  };

  graticule.extent = function(_) {
    if (!arguments.length) return graticule.extentMinor();
    return graticule.extentMajor(_).extentMinor(_);
  };

  graticule.extentMajor = function(_) {
    if (!arguments.length) return [[X0, Y0], [X1, Y1]];
    X0 = +_[0][0], X1 = +_[1][0];
    Y0 = +_[0][1], Y1 = +_[1][1];
    if (X0 > X1) _ = X0, X0 = X1, X1 = _;
    if (Y0 > Y1) _ = Y0, Y0 = Y1, Y1 = _;
    return graticule.precision(precision);
  };

  graticule.extentMinor = function(_) {
    if (!arguments.length) return [[x0, y0], [x1, y1]];
    x0 = +_[0][0], x1 = +_[1][0];
    y0 = +_[0][1], y1 = +_[1][1];
    if (x0 > x1) _ = x0, x0 = x1, x1 = _;
    if (y0 > y1) _ = y0, y0 = y1, y1 = _;
    return graticule.precision(precision);
  };

  graticule.step = function(_) {
    if (!arguments.length) return graticule.stepMinor();
    return graticule.stepMajor(_).stepMinor(_);
  };

  graticule.stepMajor = function(_) {
    if (!arguments.length) return [DX, DY];
    DX = +_[0], DY = +_[1];
    return graticule;
  };

  graticule.stepMinor = function(_) {
    if (!arguments.length) return [dx, dy];
    dx = +_[0], dy = +_[1];
    return graticule;
  };

  graticule.precision = function(_) {
    if (!arguments.length) return precision;
    precision = +_;
    x = graticuleX(y0, y1, 90);
    y = graticuleY(x0, x1, precision);
    X = graticuleX(Y0, Y1, 90);
    Y = graticuleY(X0, X1, precision);
    return graticule;
  };

  return graticule
      .extentMajor([[-180, -90 + __WEBPACK_IMPORTED_MODULE_1__math__["i" /* epsilon */]], [180, 90 - __WEBPACK_IMPORTED_MODULE_1__math__["i" /* epsilon */]]])
      .extentMinor([[-180, -80 - __WEBPACK_IMPORTED_MODULE_1__math__["i" /* epsilon */]], [180, 80 + __WEBPACK_IMPORTED_MODULE_1__math__["i" /* epsilon */]]]);
}

function graticule10() {
  return graticule()();
}


/***/ }),

/***/ "./node_modules/d3-geo-projection/node_modules/d3-geo/src/identity.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (function(x) {
  return x;
});


/***/ }),

/***/ "./node_modules/d3-geo-projection/node_modules/d3-geo/src/interpolate.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__math__ = __webpack_require__("./node_modules/d3-geo-projection/node_modules/d3-geo/src/math.js");


/* harmony default export */ __webpack_exports__["a"] = (function(a, b) {
  var x0 = a[0] * __WEBPACK_IMPORTED_MODULE_0__math__["r" /* radians */],
      y0 = a[1] * __WEBPACK_IMPORTED_MODULE_0__math__["r" /* radians */],
      x1 = b[0] * __WEBPACK_IMPORTED_MODULE_0__math__["r" /* radians */],
      y1 = b[1] * __WEBPACK_IMPORTED_MODULE_0__math__["r" /* radians */],
      cy0 = Object(__WEBPACK_IMPORTED_MODULE_0__math__["g" /* cos */])(y0),
      sy0 = Object(__WEBPACK_IMPORTED_MODULE_0__math__["t" /* sin */])(y0),
      cy1 = Object(__WEBPACK_IMPORTED_MODULE_0__math__["g" /* cos */])(y1),
      sy1 = Object(__WEBPACK_IMPORTED_MODULE_0__math__["t" /* sin */])(y1),
      kx0 = cy0 * Object(__WEBPACK_IMPORTED_MODULE_0__math__["g" /* cos */])(x0),
      ky0 = cy0 * Object(__WEBPACK_IMPORTED_MODULE_0__math__["t" /* sin */])(x0),
      kx1 = cy1 * Object(__WEBPACK_IMPORTED_MODULE_0__math__["g" /* cos */])(x1),
      ky1 = cy1 * Object(__WEBPACK_IMPORTED_MODULE_0__math__["t" /* sin */])(x1),
      d = 2 * Object(__WEBPACK_IMPORTED_MODULE_0__math__["c" /* asin */])(Object(__WEBPACK_IMPORTED_MODULE_0__math__["u" /* sqrt */])(Object(__WEBPACK_IMPORTED_MODULE_0__math__["m" /* haversin */])(y1 - y0) + cy0 * cy1 * Object(__WEBPACK_IMPORTED_MODULE_0__math__["m" /* haversin */])(x1 - x0))),
      k = Object(__WEBPACK_IMPORTED_MODULE_0__math__["t" /* sin */])(d);

  var interpolate = d ? function(t) {
    var B = Object(__WEBPACK_IMPORTED_MODULE_0__math__["t" /* sin */])(t *= d) / k,
        A = Object(__WEBPACK_IMPORTED_MODULE_0__math__["t" /* sin */])(d - t) / k,
        x = A * kx0 + B * kx1,
        y = A * ky0 + B * ky1,
        z = A * sy0 + B * sy1;
    return [
      Object(__WEBPACK_IMPORTED_MODULE_0__math__["e" /* atan2 */])(y, x) * __WEBPACK_IMPORTED_MODULE_0__math__["h" /* degrees */],
      Object(__WEBPACK_IMPORTED_MODULE_0__math__["e" /* atan2 */])(z, Object(__WEBPACK_IMPORTED_MODULE_0__math__["u" /* sqrt */])(x * x + y * y)) * __WEBPACK_IMPORTED_MODULE_0__math__["h" /* degrees */]
    ];
  } : function() {
    return [x0 * __WEBPACK_IMPORTED_MODULE_0__math__["h" /* degrees */], y0 * __WEBPACK_IMPORTED_MODULE_0__math__["h" /* degrees */]];
  };

  interpolate.distance = d;

  return interpolate;
});


/***/ }),

/***/ "./node_modules/d3-geo-projection/node_modules/d3-geo/src/length.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__adder__ = __webpack_require__("./node_modules/d3-geo-projection/node_modules/d3-geo/src/adder.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__math__ = __webpack_require__("./node_modules/d3-geo-projection/node_modules/d3-geo/src/math.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__noop__ = __webpack_require__("./node_modules/d3-geo-projection/node_modules/d3-geo/src/noop.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__stream__ = __webpack_require__("./node_modules/d3-geo-projection/node_modules/d3-geo/src/stream.js");





var lengthSum = Object(__WEBPACK_IMPORTED_MODULE_0__adder__["a" /* default */])(),
    lambda0,
    sinPhi0,
    cosPhi0;

var lengthStream = {
  sphere: __WEBPACK_IMPORTED_MODULE_2__noop__["a" /* default */],
  point: __WEBPACK_IMPORTED_MODULE_2__noop__["a" /* default */],
  lineStart: lengthLineStart,
  lineEnd: __WEBPACK_IMPORTED_MODULE_2__noop__["a" /* default */],
  polygonStart: __WEBPACK_IMPORTED_MODULE_2__noop__["a" /* default */],
  polygonEnd: __WEBPACK_IMPORTED_MODULE_2__noop__["a" /* default */]
};

function lengthLineStart() {
  lengthStream.point = lengthPointFirst;
  lengthStream.lineEnd = lengthLineEnd;
}

function lengthLineEnd() {
  lengthStream.point = lengthStream.lineEnd = __WEBPACK_IMPORTED_MODULE_2__noop__["a" /* default */];
}

function lengthPointFirst(lambda, phi) {
  lambda *= __WEBPACK_IMPORTED_MODULE_1__math__["r" /* radians */], phi *= __WEBPACK_IMPORTED_MODULE_1__math__["r" /* radians */];
  lambda0 = lambda, sinPhi0 = Object(__WEBPACK_IMPORTED_MODULE_1__math__["t" /* sin */])(phi), cosPhi0 = Object(__WEBPACK_IMPORTED_MODULE_1__math__["g" /* cos */])(phi);
  lengthStream.point = lengthPoint;
}

function lengthPoint(lambda, phi) {
  lambda *= __WEBPACK_IMPORTED_MODULE_1__math__["r" /* radians */], phi *= __WEBPACK_IMPORTED_MODULE_1__math__["r" /* radians */];
  var sinPhi = Object(__WEBPACK_IMPORTED_MODULE_1__math__["t" /* sin */])(phi),
      cosPhi = Object(__WEBPACK_IMPORTED_MODULE_1__math__["g" /* cos */])(phi),
      delta = Object(__WEBPACK_IMPORTED_MODULE_1__math__["a" /* abs */])(lambda - lambda0),
      cosDelta = Object(__WEBPACK_IMPORTED_MODULE_1__math__["g" /* cos */])(delta),
      sinDelta = Object(__WEBPACK_IMPORTED_MODULE_1__math__["t" /* sin */])(delta),
      x = cosPhi * sinDelta,
      y = cosPhi0 * sinPhi - sinPhi0 * cosPhi * cosDelta,
      z = sinPhi0 * sinPhi + cosPhi0 * cosPhi * cosDelta;
  lengthSum.add(Object(__WEBPACK_IMPORTED_MODULE_1__math__["e" /* atan2 */])(Object(__WEBPACK_IMPORTED_MODULE_1__math__["u" /* sqrt */])(x * x + y * y), z));
  lambda0 = lambda, sinPhi0 = sinPhi, cosPhi0 = cosPhi;
}

/* harmony default export */ __webpack_exports__["a"] = (function(object) {
  lengthSum.reset();
  Object(__WEBPACK_IMPORTED_MODULE_3__stream__["a" /* default */])(object, lengthStream);
  return +lengthSum;
});


/***/ }),

/***/ "./node_modules/d3-geo-projection/node_modules/d3-geo/src/math.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return epsilon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return epsilon2; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "o", function() { return pi; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "l", function() { return halfPi; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "q", function() { return quarterPi; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "w", function() { return tau; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return degrees; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "r", function() { return radians; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return abs; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return atan; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return atan2; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return cos; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return ceil; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "k", function() { return exp; });
/* unused harmony export floor */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "n", function() { return log; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "p", function() { return pow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "t", function() { return sin; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "s", function() { return sign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "u", function() { return sqrt; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "v", function() { return tan; });
/* harmony export (immutable) */ __webpack_exports__["b"] = acos;
/* harmony export (immutable) */ __webpack_exports__["c"] = asin;
/* harmony export (immutable) */ __webpack_exports__["m"] = haversin;
var epsilon = 1e-6;
var epsilon2 = 1e-12;
var pi = Math.PI;
var halfPi = pi / 2;
var quarterPi = pi / 4;
var tau = pi * 2;

var degrees = 180 / pi;
var radians = pi / 180;

var abs = Math.abs;
var atan = Math.atan;
var atan2 = Math.atan2;
var cos = Math.cos;
var ceil = Math.ceil;
var exp = Math.exp;
var floor = Math.floor;
var log = Math.log;
var pow = Math.pow;
var sin = Math.sin;
var sign = Math.sign || function(x) { return x > 0 ? 1 : x < 0 ? -1 : 0; };
var sqrt = Math.sqrt;
var tan = Math.tan;

function acos(x) {
  return x > 1 ? 0 : x < -1 ? pi : Math.acos(x);
}

function asin(x) {
  return x > 1 ? halfPi : x < -1 ? -halfPi : Math.asin(x);
}

function haversin(x) {
  return (x = sin(x / 2)) * x;
}


/***/ }),

/***/ "./node_modules/d3-geo-projection/node_modules/d3-geo/src/noop.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = noop;
function noop() {}


/***/ }),

/***/ "./node_modules/d3-geo-projection/node_modules/d3-geo/src/path/area.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__adder__ = __webpack_require__("./node_modules/d3-geo-projection/node_modules/d3-geo/src/adder.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__math__ = __webpack_require__("./node_modules/d3-geo-projection/node_modules/d3-geo/src/math.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__noop__ = __webpack_require__("./node_modules/d3-geo-projection/node_modules/d3-geo/src/noop.js");




var areaSum = Object(__WEBPACK_IMPORTED_MODULE_0__adder__["a" /* default */])(),
    areaRingSum = Object(__WEBPACK_IMPORTED_MODULE_0__adder__["a" /* default */])(),
    x00,
    y00,
    x0,
    y0;

var areaStream = {
  point: __WEBPACK_IMPORTED_MODULE_2__noop__["a" /* default */],
  lineStart: __WEBPACK_IMPORTED_MODULE_2__noop__["a" /* default */],
  lineEnd: __WEBPACK_IMPORTED_MODULE_2__noop__["a" /* default */],
  polygonStart: function() {
    areaStream.lineStart = areaRingStart;
    areaStream.lineEnd = areaRingEnd;
  },
  polygonEnd: function() {
    areaStream.lineStart = areaStream.lineEnd = areaStream.point = __WEBPACK_IMPORTED_MODULE_2__noop__["a" /* default */];
    areaSum.add(Object(__WEBPACK_IMPORTED_MODULE_1__math__["a" /* abs */])(areaRingSum));
    areaRingSum.reset();
  },
  result: function() {
    var area = areaSum / 2;
    areaSum.reset();
    return area;
  }
};

function areaRingStart() {
  areaStream.point = areaPointFirst;
}

function areaPointFirst(x, y) {
  areaStream.point = areaPoint;
  x00 = x0 = x, y00 = y0 = y;
}

function areaPoint(x, y) {
  areaRingSum.add(y0 * x - x0 * y);
  x0 = x, y0 = y;
}

function areaRingEnd() {
  areaPoint(x00, y00);
}

/* harmony default export */ __webpack_exports__["a"] = (areaStream);


/***/ }),

/***/ "./node_modules/d3-geo-projection/node_modules/d3-geo/src/path/bounds.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__noop__ = __webpack_require__("./node_modules/d3-geo-projection/node_modules/d3-geo/src/noop.js");


var x0 = Infinity,
    y0 = x0,
    x1 = -x0,
    y1 = x1;

var boundsStream = {
  point: boundsPoint,
  lineStart: __WEBPACK_IMPORTED_MODULE_0__noop__["a" /* default */],
  lineEnd: __WEBPACK_IMPORTED_MODULE_0__noop__["a" /* default */],
  polygonStart: __WEBPACK_IMPORTED_MODULE_0__noop__["a" /* default */],
  polygonEnd: __WEBPACK_IMPORTED_MODULE_0__noop__["a" /* default */],
  result: function() {
    var bounds = [[x0, y0], [x1, y1]];
    x1 = y1 = -(y0 = x0 = Infinity);
    return bounds;
  }
};

function boundsPoint(x, y) {
  if (x < x0) x0 = x;
  if (x > x1) x1 = x;
  if (y < y0) y0 = y;
  if (y > y1) y1 = y;
}

/* harmony default export */ __webpack_exports__["a"] = (boundsStream);


/***/ }),

/***/ "./node_modules/d3-geo-projection/node_modules/d3-geo/src/path/centroid.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__math__ = __webpack_require__("./node_modules/d3-geo-projection/node_modules/d3-geo/src/math.js");


// TODO Enforce positive area for exterior, negative area for interior?

var X0 = 0,
    Y0 = 0,
    Z0 = 0,
    X1 = 0,
    Y1 = 0,
    Z1 = 0,
    X2 = 0,
    Y2 = 0,
    Z2 = 0,
    x00,
    y00,
    x0,
    y0;

var centroidStream = {
  point: centroidPoint,
  lineStart: centroidLineStart,
  lineEnd: centroidLineEnd,
  polygonStart: function() {
    centroidStream.lineStart = centroidRingStart;
    centroidStream.lineEnd = centroidRingEnd;
  },
  polygonEnd: function() {
    centroidStream.point = centroidPoint;
    centroidStream.lineStart = centroidLineStart;
    centroidStream.lineEnd = centroidLineEnd;
  },
  result: function() {
    var centroid = Z2 ? [X2 / Z2, Y2 / Z2]
        : Z1 ? [X1 / Z1, Y1 / Z1]
        : Z0 ? [X0 / Z0, Y0 / Z0]
        : [NaN, NaN];
    X0 = Y0 = Z0 =
    X1 = Y1 = Z1 =
    X2 = Y2 = Z2 = 0;
    return centroid;
  }
};

function centroidPoint(x, y) {
  X0 += x;
  Y0 += y;
  ++Z0;
}

function centroidLineStart() {
  centroidStream.point = centroidPointFirstLine;
}

function centroidPointFirstLine(x, y) {
  centroidStream.point = centroidPointLine;
  centroidPoint(x0 = x, y0 = y);
}

function centroidPointLine(x, y) {
  var dx = x - x0, dy = y - y0, z = Object(__WEBPACK_IMPORTED_MODULE_0__math__["u" /* sqrt */])(dx * dx + dy * dy);
  X1 += z * (x0 + x) / 2;
  Y1 += z * (y0 + y) / 2;
  Z1 += z;
  centroidPoint(x0 = x, y0 = y);
}

function centroidLineEnd() {
  centroidStream.point = centroidPoint;
}

function centroidRingStart() {
  centroidStream.point = centroidPointFirstRing;
}

function centroidRingEnd() {
  centroidPointRing(x00, y00);
}

function centroidPointFirstRing(x, y) {
  centroidStream.point = centroidPointRing;
  centroidPoint(x00 = x0 = x, y00 = y0 = y);
}

function centroidPointRing(x, y) {
  var dx = x - x0,
      dy = y - y0,
      z = Object(__WEBPACK_IMPORTED_MODULE_0__math__["u" /* sqrt */])(dx * dx + dy * dy);

  X1 += z * (x0 + x) / 2;
  Y1 += z * (y0 + y) / 2;
  Z1 += z;

  z = y0 * x - x0 * y;
  X2 += z * (x0 + x);
  Y2 += z * (y0 + y);
  Z2 += z * 3;
  centroidPoint(x0 = x, y0 = y);
}

/* harmony default export */ __webpack_exports__["a"] = (centroidStream);


/***/ }),

/***/ "./node_modules/d3-geo-projection/node_modules/d3-geo/src/path/context.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = PathContext;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__math__ = __webpack_require__("./node_modules/d3-geo-projection/node_modules/d3-geo/src/math.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__noop__ = __webpack_require__("./node_modules/d3-geo-projection/node_modules/d3-geo/src/noop.js");



function PathContext(context) {
  this._context = context;
}

PathContext.prototype = {
  _radius: 4.5,
  pointRadius: function(_) {
    return this._radius = _, this;
  },
  polygonStart: function() {
    this._line = 0;
  },
  polygonEnd: function() {
    this._line = NaN;
  },
  lineStart: function() {
    this._point = 0;
  },
  lineEnd: function() {
    if (this._line === 0) this._context.closePath();
    this._point = NaN;
  },
  point: function(x, y) {
    switch (this._point) {
      case 0: {
        this._context.moveTo(x, y);
        this._point = 1;
        break;
      }
      case 1: {
        this._context.lineTo(x, y);
        break;
      }
      default: {
        this._context.moveTo(x + this._radius, y);
        this._context.arc(x, y, this._radius, 0, __WEBPACK_IMPORTED_MODULE_0__math__["w" /* tau */]);
        break;
      }
    }
  },
  result: __WEBPACK_IMPORTED_MODULE_1__noop__["a" /* default */]
};


/***/ }),

/***/ "./node_modules/d3-geo-projection/node_modules/d3-geo/src/path/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__identity__ = __webpack_require__("./node_modules/d3-geo-projection/node_modules/d3-geo/src/identity.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__stream__ = __webpack_require__("./node_modules/d3-geo-projection/node_modules/d3-geo/src/stream.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__area__ = __webpack_require__("./node_modules/d3-geo-projection/node_modules/d3-geo/src/path/area.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__bounds__ = __webpack_require__("./node_modules/d3-geo-projection/node_modules/d3-geo/src/path/bounds.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__centroid__ = __webpack_require__("./node_modules/d3-geo-projection/node_modules/d3-geo/src/path/centroid.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__context__ = __webpack_require__("./node_modules/d3-geo-projection/node_modules/d3-geo/src/path/context.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__measure__ = __webpack_require__("./node_modules/d3-geo-projection/node_modules/d3-geo/src/path/measure.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__string__ = __webpack_require__("./node_modules/d3-geo-projection/node_modules/d3-geo/src/path/string.js");









/* unused harmony default export */ var _unused_webpack_default_export = (function(projection, context) {
  var pointRadius = 4.5,
      projectionStream,
      contextStream;

  function path(object) {
    if (object) {
      if (typeof pointRadius === "function") contextStream.pointRadius(+pointRadius.apply(this, arguments));
      Object(__WEBPACK_IMPORTED_MODULE_1__stream__["a" /* default */])(object, projectionStream(contextStream));
    }
    return contextStream.result();
  }

  path.area = function(object) {
    Object(__WEBPACK_IMPORTED_MODULE_1__stream__["a" /* default */])(object, projectionStream(__WEBPACK_IMPORTED_MODULE_2__area__["a" /* default */]));
    return __WEBPACK_IMPORTED_MODULE_2__area__["a" /* default */].result();
  };

  path.measure = function(object) {
    Object(__WEBPACK_IMPORTED_MODULE_1__stream__["a" /* default */])(object, projectionStream(__WEBPACK_IMPORTED_MODULE_6__measure__["a" /* default */]));
    return __WEBPACK_IMPORTED_MODULE_6__measure__["a" /* default */].result();
  };

  path.bounds = function(object) {
    Object(__WEBPACK_IMPORTED_MODULE_1__stream__["a" /* default */])(object, projectionStream(__WEBPACK_IMPORTED_MODULE_3__bounds__["a" /* default */]));
    return __WEBPACK_IMPORTED_MODULE_3__bounds__["a" /* default */].result();
  };

  path.centroid = function(object) {
    Object(__WEBPACK_IMPORTED_MODULE_1__stream__["a" /* default */])(object, projectionStream(__WEBPACK_IMPORTED_MODULE_4__centroid__["a" /* default */]));
    return __WEBPACK_IMPORTED_MODULE_4__centroid__["a" /* default */].result();
  };

  path.projection = function(_) {
    return arguments.length ? (projectionStream = _ == null ? (projection = null, __WEBPACK_IMPORTED_MODULE_0__identity__["a" /* default */]) : (projection = _).stream, path) : projection;
  };

  path.context = function(_) {
    if (!arguments.length) return context;
    contextStream = _ == null ? (context = null, new __WEBPACK_IMPORTED_MODULE_7__string__["a" /* default */]) : new __WEBPACK_IMPORTED_MODULE_5__context__["a" /* default */](context = _);
    if (typeof pointRadius !== "function") contextStream.pointRadius(pointRadius);
    return path;
  };

  path.pointRadius = function(_) {
    if (!arguments.length) return pointRadius;
    pointRadius = typeof _ === "function" ? _ : (contextStream.pointRadius(+_), +_);
    return path;
  };

  return path.projection(projection).context(context);
});


/***/ }),

/***/ "./node_modules/d3-geo-projection/node_modules/d3-geo/src/path/measure.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__adder__ = __webpack_require__("./node_modules/d3-geo-projection/node_modules/d3-geo/src/adder.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__math__ = __webpack_require__("./node_modules/d3-geo-projection/node_modules/d3-geo/src/math.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__noop__ = __webpack_require__("./node_modules/d3-geo-projection/node_modules/d3-geo/src/noop.js");




var lengthSum = Object(__WEBPACK_IMPORTED_MODULE_0__adder__["a" /* default */])(),
    lengthRing,
    x00,
    y00,
    x0,
    y0;

var lengthStream = {
  point: __WEBPACK_IMPORTED_MODULE_2__noop__["a" /* default */],
  lineStart: function() {
    lengthStream.point = lengthPointFirst;
  },
  lineEnd: function() {
    if (lengthRing) lengthPoint(x00, y00);
    lengthStream.point = __WEBPACK_IMPORTED_MODULE_2__noop__["a" /* default */];
  },
  polygonStart: function() {
    lengthRing = true;
  },
  polygonEnd: function() {
    lengthRing = null;
  },
  result: function() {
    var length = +lengthSum;
    lengthSum.reset();
    return length;
  }
};

function lengthPointFirst(x, y) {
  lengthStream.point = lengthPoint;
  x00 = x0 = x, y00 = y0 = y;
}

function lengthPoint(x, y) {
  x0 -= x, y0 -= y;
  lengthSum.add(Object(__WEBPACK_IMPORTED_MODULE_1__math__["u" /* sqrt */])(x0 * x0 + y0 * y0));
  x0 = x, y0 = y;
}

/* harmony default export */ __webpack_exports__["a"] = (lengthStream);


/***/ }),

/***/ "./node_modules/d3-geo-projection/node_modules/d3-geo/src/path/string.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = PathString;
function PathString() {
  this._string = [];
}

PathString.prototype = {
  _radius: 4.5,
  _circle: circle(4.5),
  pointRadius: function(_) {
    if ((_ = +_) !== this._radius) this._radius = _, this._circle = null;
    return this;
  },
  polygonStart: function() {
    this._line = 0;
  },
  polygonEnd: function() {
    this._line = NaN;
  },
  lineStart: function() {
    this._point = 0;
  },
  lineEnd: function() {
    if (this._line === 0) this._string.push("Z");
    this._point = NaN;
  },
  point: function(x, y) {
    switch (this._point) {
      case 0: {
        this._string.push("M", x, ",", y);
        this._point = 1;
        break;
      }
      case 1: {
        this._string.push("L", x, ",", y);
        break;
      }
      default: {
        if (this._circle == null) this._circle = circle(this._radius);
        this._string.push("M", x, ",", y, this._circle);
        break;
      }
    }
  },
  result: function() {
    if (this._string.length) {
      var result = this._string.join("");
      this._string = [];
      return result;
    } else {
      return null;
    }
  }
};

function circle(radius) {
  return "m0," + radius
      + "a" + radius + "," + radius + " 0 1,1 0," + -2 * radius
      + "a" + radius + "," + radius + " 0 1,1 0," + 2 * radius
      + "z";
}


/***/ }),

/***/ "./node_modules/d3-geo-projection/node_modules/d3-geo/src/pointEqual.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__math__ = __webpack_require__("./node_modules/d3-geo-projection/node_modules/d3-geo/src/math.js");


/* harmony default export */ __webpack_exports__["a"] = (function(a, b) {
  return Object(__WEBPACK_IMPORTED_MODULE_0__math__["a" /* abs */])(a[0] - b[0]) < __WEBPACK_IMPORTED_MODULE_0__math__["i" /* epsilon */] && Object(__WEBPACK_IMPORTED_MODULE_0__math__["a" /* abs */])(a[1] - b[1]) < __WEBPACK_IMPORTED_MODULE_0__math__["i" /* epsilon */];
});


/***/ }),

/***/ "./node_modules/d3-geo-projection/node_modules/d3-geo/src/polygonContains.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__adder__ = __webpack_require__("./node_modules/d3-geo-projection/node_modules/d3-geo/src/adder.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__cartesian__ = __webpack_require__("./node_modules/d3-geo-projection/node_modules/d3-geo/src/cartesian.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__math__ = __webpack_require__("./node_modules/d3-geo-projection/node_modules/d3-geo/src/math.js");




var sum = Object(__WEBPACK_IMPORTED_MODULE_0__adder__["a" /* default */])();

/* harmony default export */ __webpack_exports__["a"] = (function(polygon, point) {
  var lambda = point[0],
      phi = point[1],
      normal = [Object(__WEBPACK_IMPORTED_MODULE_2__math__["t" /* sin */])(lambda), -Object(__WEBPACK_IMPORTED_MODULE_2__math__["g" /* cos */])(lambda), 0],
      angle = 0,
      winding = 0;

  sum.reset();

  for (var i = 0, n = polygon.length; i < n; ++i) {
    if (!(m = (ring = polygon[i]).length)) continue;
    var ring,
        m,
        point0 = ring[m - 1],
        lambda0 = point0[0],
        phi0 = point0[1] / 2 + __WEBPACK_IMPORTED_MODULE_2__math__["q" /* quarterPi */],
        sinPhi0 = Object(__WEBPACK_IMPORTED_MODULE_2__math__["t" /* sin */])(phi0),
        cosPhi0 = Object(__WEBPACK_IMPORTED_MODULE_2__math__["g" /* cos */])(phi0);

    for (var j = 0; j < m; ++j, lambda0 = lambda1, sinPhi0 = sinPhi1, cosPhi0 = cosPhi1, point0 = point1) {
      var point1 = ring[j],
          lambda1 = point1[0],
          phi1 = point1[1] / 2 + __WEBPACK_IMPORTED_MODULE_2__math__["q" /* quarterPi */],
          sinPhi1 = Object(__WEBPACK_IMPORTED_MODULE_2__math__["t" /* sin */])(phi1),
          cosPhi1 = Object(__WEBPACK_IMPORTED_MODULE_2__math__["g" /* cos */])(phi1),
          delta = lambda1 - lambda0,
          sign = delta >= 0 ? 1 : -1,
          absDelta = sign * delta,
          antimeridian = absDelta > __WEBPACK_IMPORTED_MODULE_2__math__["o" /* pi */],
          k = sinPhi0 * sinPhi1;

      sum.add(Object(__WEBPACK_IMPORTED_MODULE_2__math__["e" /* atan2 */])(k * sign * Object(__WEBPACK_IMPORTED_MODULE_2__math__["t" /* sin */])(absDelta), cosPhi0 * cosPhi1 + k * Object(__WEBPACK_IMPORTED_MODULE_2__math__["g" /* cos */])(absDelta)));
      angle += antimeridian ? delta + sign * __WEBPACK_IMPORTED_MODULE_2__math__["w" /* tau */] : delta;

      // Are the longitudes either side of the point’s meridian (lambda),
      // and are the latitudes smaller than the parallel (phi)?
      if (antimeridian ^ lambda0 >= lambda ^ lambda1 >= lambda) {
        var arc = Object(__WEBPACK_IMPORTED_MODULE_1__cartesian__["c" /* cartesianCross */])(Object(__WEBPACK_IMPORTED_MODULE_1__cartesian__["a" /* cartesian */])(point0), Object(__WEBPACK_IMPORTED_MODULE_1__cartesian__["a" /* cartesian */])(point1));
        Object(__WEBPACK_IMPORTED_MODULE_1__cartesian__["e" /* cartesianNormalizeInPlace */])(arc);
        var intersection = Object(__WEBPACK_IMPORTED_MODULE_1__cartesian__["c" /* cartesianCross */])(normal, arc);
        Object(__WEBPACK_IMPORTED_MODULE_1__cartesian__["e" /* cartesianNormalizeInPlace */])(intersection);
        var phiArc = (antimeridian ^ delta >= 0 ? -1 : 1) * Object(__WEBPACK_IMPORTED_MODULE_2__math__["c" /* asin */])(intersection[2]);
        if (phi > phiArc || phi === phiArc && (arc[0] || arc[1])) {
          winding += antimeridian ^ delta >= 0 ? 1 : -1;
        }
      }
    }
  }

  // First, determine whether the South pole is inside or outside:
  //
  // It is inside if:
  // * the polygon winds around it in a clockwise direction.
  // * the polygon does not (cumulatively) wind around it, but has a negative
  //   (counter-clockwise) area.
  //
  // Second, count the (signed) number of times a segment crosses a lambda
  // from the point to the South pole.  If it is zero, then the point is the
  // same side as the South pole.

  return (angle < -__WEBPACK_IMPORTED_MODULE_2__math__["i" /* epsilon */] || angle < __WEBPACK_IMPORTED_MODULE_2__math__["i" /* epsilon */] && sum < -__WEBPACK_IMPORTED_MODULE_2__math__["i" /* epsilon */]) ^ (winding & 1);
});


/***/ }),

/***/ "./node_modules/d3-geo-projection/node_modules/d3-geo/src/projection/albers.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__conicEqualArea__ = __webpack_require__("./node_modules/d3-geo-projection/node_modules/d3-geo/src/projection/conicEqualArea.js");


/* harmony default export */ __webpack_exports__["a"] = (function() {
  return Object(__WEBPACK_IMPORTED_MODULE_0__conicEqualArea__["a" /* default */])()
      .parallels([29.5, 45.5])
      .scale(1070)
      .translate([480, 250])
      .rotate([96, 0])
      .center([-0.6, 38.7]);
});


/***/ }),

/***/ "./node_modules/d3-geo-projection/node_modules/d3-geo/src/projection/albersUsa.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__math__ = __webpack_require__("./node_modules/d3-geo-projection/node_modules/d3-geo/src/math.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__albers__ = __webpack_require__("./node_modules/d3-geo-projection/node_modules/d3-geo/src/projection/albers.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__conicEqualArea__ = __webpack_require__("./node_modules/d3-geo-projection/node_modules/d3-geo/src/projection/conicEqualArea.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__fit__ = __webpack_require__("./node_modules/d3-geo-projection/node_modules/d3-geo/src/projection/fit.js");





// The projections must have mutually exclusive clip regions on the sphere,
// as this will avoid emitting interleaving lines and polygons.
function multiplex(streams) {
  var n = streams.length;
  return {
    point: function(x, y) { var i = -1; while (++i < n) streams[i].point(x, y); },
    sphere: function() { var i = -1; while (++i < n) streams[i].sphere(); },
    lineStart: function() { var i = -1; while (++i < n) streams[i].lineStart(); },
    lineEnd: function() { var i = -1; while (++i < n) streams[i].lineEnd(); },
    polygonStart: function() { var i = -1; while (++i < n) streams[i].polygonStart(); },
    polygonEnd: function() { var i = -1; while (++i < n) streams[i].polygonEnd(); }
  };
}

// A composite projection for the United States, configured by default for
// 960×500. The projection also works quite well at 960×600 if you change the
// scale to 1285 and adjust the translate accordingly. The set of standard
// parallels for each region comes from USGS, which is published here:
// http://egsc.usgs.gov/isb/pubs/MapProjections/projections.html#albers
/* unused harmony default export */ var _unused_webpack_default_export = (function() {
  var cache,
      cacheStream,
      lower48 = Object(__WEBPACK_IMPORTED_MODULE_1__albers__["a" /* default */])(), lower48Point,
      alaska = Object(__WEBPACK_IMPORTED_MODULE_2__conicEqualArea__["a" /* default */])().rotate([154, 0]).center([-2, 58.5]).parallels([55, 65]), alaskaPoint, // EPSG:3338
      hawaii = Object(__WEBPACK_IMPORTED_MODULE_2__conicEqualArea__["a" /* default */])().rotate([157, 0]).center([-3, 19.9]).parallels([8, 18]), hawaiiPoint, // ESRI:102007
      point, pointStream = {point: function(x, y) { point = [x, y]; }};

  function albersUsa(coordinates) {
    var x = coordinates[0], y = coordinates[1];
    return point = null,
        (lower48Point.point(x, y), point)
        || (alaskaPoint.point(x, y), point)
        || (hawaiiPoint.point(x, y), point);
  }

  albersUsa.invert = function(coordinates) {
    var k = lower48.scale(),
        t = lower48.translate(),
        x = (coordinates[0] - t[0]) / k,
        y = (coordinates[1] - t[1]) / k;
    return (y >= 0.120 && y < 0.234 && x >= -0.425 && x < -0.214 ? alaska
        : y >= 0.166 && y < 0.234 && x >= -0.214 && x < -0.115 ? hawaii
        : lower48).invert(coordinates);
  };

  albersUsa.stream = function(stream) {
    return cache && cacheStream === stream ? cache : cache = multiplex([lower48.stream(cacheStream = stream), alaska.stream(stream), hawaii.stream(stream)]);
  };

  albersUsa.precision = function(_) {
    if (!arguments.length) return lower48.precision();
    lower48.precision(_), alaska.precision(_), hawaii.precision(_);
    return reset();
  };

  albersUsa.scale = function(_) {
    if (!arguments.length) return lower48.scale();
    lower48.scale(_), alaska.scale(_ * 0.35), hawaii.scale(_);
    return albersUsa.translate(lower48.translate());
  };

  albersUsa.translate = function(_) {
    if (!arguments.length) return lower48.translate();
    var k = lower48.scale(), x = +_[0], y = +_[1];

    lower48Point = lower48
        .translate(_)
        .clipExtent([[x - 0.455 * k, y - 0.238 * k], [x + 0.455 * k, y + 0.238 * k]])
        .stream(pointStream);

    alaskaPoint = alaska
        .translate([x - 0.307 * k, y + 0.201 * k])
        .clipExtent([[x - 0.425 * k + __WEBPACK_IMPORTED_MODULE_0__math__["i" /* epsilon */], y + 0.120 * k + __WEBPACK_IMPORTED_MODULE_0__math__["i" /* epsilon */]], [x - 0.214 * k - __WEBPACK_IMPORTED_MODULE_0__math__["i" /* epsilon */], y + 0.234 * k - __WEBPACK_IMPORTED_MODULE_0__math__["i" /* epsilon */]]])
        .stream(pointStream);

    hawaiiPoint = hawaii
        .translate([x - 0.205 * k, y + 0.212 * k])
        .clipExtent([[x - 0.214 * k + __WEBPACK_IMPORTED_MODULE_0__math__["i" /* epsilon */], y + 0.166 * k + __WEBPACK_IMPORTED_MODULE_0__math__["i" /* epsilon */]], [x - 0.115 * k - __WEBPACK_IMPORTED_MODULE_0__math__["i" /* epsilon */], y + 0.234 * k - __WEBPACK_IMPORTED_MODULE_0__math__["i" /* epsilon */]]])
        .stream(pointStream);

    return reset();
  };

  albersUsa.fitExtent = function(extent, object) {
    return Object(__WEBPACK_IMPORTED_MODULE_3__fit__["a" /* fitExtent */])(albersUsa, extent, object);
  };

  albersUsa.fitSize = function(size, object) {
    return Object(__WEBPACK_IMPORTED_MODULE_3__fit__["c" /* fitSize */])(albersUsa, size, object);
  };

  albersUsa.fitWidth = function(width, object) {
    return Object(__WEBPACK_IMPORTED_MODULE_3__fit__["d" /* fitWidth */])(albersUsa, width, object);
  };

  albersUsa.fitHeight = function(height, object) {
    return Object(__WEBPACK_IMPORTED_MODULE_3__fit__["b" /* fitHeight */])(albersUsa, height, object);
  };

  function reset() {
    cache = cacheStream = null;
    return albersUsa;
  }

  return albersUsa.scale(1070);
});


/***/ }),

/***/ "./node_modules/d3-geo-projection/node_modules/d3-geo/src/projection/azimuthal.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["b"] = azimuthalRaw;
/* harmony export (immutable) */ __webpack_exports__["a"] = azimuthalInvert;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__math__ = __webpack_require__("./node_modules/d3-geo-projection/node_modules/d3-geo/src/math.js");


function azimuthalRaw(scale) {
  return function(x, y) {
    var cx = Object(__WEBPACK_IMPORTED_MODULE_0__math__["g" /* cos */])(x),
        cy = Object(__WEBPACK_IMPORTED_MODULE_0__math__["g" /* cos */])(y),
        k = scale(cx * cy);
    return [
      k * cy * Object(__WEBPACK_IMPORTED_MODULE_0__math__["t" /* sin */])(x),
      k * Object(__WEBPACK_IMPORTED_MODULE_0__math__["t" /* sin */])(y)
    ];
  }
}

function azimuthalInvert(angle) {
  return function(x, y) {
    var z = Object(__WEBPACK_IMPORTED_MODULE_0__math__["u" /* sqrt */])(x * x + y * y),
        c = angle(z),
        sc = Object(__WEBPACK_IMPORTED_MODULE_0__math__["t" /* sin */])(c),
        cc = Object(__WEBPACK_IMPORTED_MODULE_0__math__["g" /* cos */])(c);
    return [
      Object(__WEBPACK_IMPORTED_MODULE_0__math__["e" /* atan2 */])(x * sc, z * cc),
      Object(__WEBPACK_IMPORTED_MODULE_0__math__["c" /* asin */])(z && y * sc / z)
    ];
  }
}


/***/ }),

/***/ "./node_modules/d3-geo-projection/node_modules/d3-geo/src/projection/azimuthalEqualArea.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return azimuthalEqualAreaRaw; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__math__ = __webpack_require__("./node_modules/d3-geo-projection/node_modules/d3-geo/src/math.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__azimuthal__ = __webpack_require__("./node_modules/d3-geo-projection/node_modules/d3-geo/src/projection/azimuthal.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__index__ = __webpack_require__("./node_modules/d3-geo-projection/node_modules/d3-geo/src/projection/index.js");




var azimuthalEqualAreaRaw = Object(__WEBPACK_IMPORTED_MODULE_1__azimuthal__["b" /* azimuthalRaw */])(function(cxcy) {
  return Object(__WEBPACK_IMPORTED_MODULE_0__math__["u" /* sqrt */])(2 / (1 + cxcy));
});

azimuthalEqualAreaRaw.invert = Object(__WEBPACK_IMPORTED_MODULE_1__azimuthal__["a" /* azimuthalInvert */])(function(z) {
  return 2 * Object(__WEBPACK_IMPORTED_MODULE_0__math__["c" /* asin */])(z / 2);
});

/* unused harmony default export */ var _unused_webpack_default_export = (function() {
  return Object(__WEBPACK_IMPORTED_MODULE_2__index__["a" /* default */])(azimuthalEqualAreaRaw)
      .scale(124.75)
      .clipAngle(180 - 1e-3);
});


/***/ }),

/***/ "./node_modules/d3-geo-projection/node_modules/d3-geo/src/projection/azimuthalEquidistant.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return azimuthalEquidistantRaw; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__math__ = __webpack_require__("./node_modules/d3-geo-projection/node_modules/d3-geo/src/math.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__azimuthal__ = __webpack_require__("./node_modules/d3-geo-projection/node_modules/d3-geo/src/projection/azimuthal.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__index__ = __webpack_require__("./node_modules/d3-geo-projection/node_modules/d3-geo/src/projection/index.js");




var azimuthalEquidistantRaw = Object(__WEBPACK_IMPORTED_MODULE_1__azimuthal__["b" /* azimuthalRaw */])(function(c) {
  return (c = Object(__WEBPACK_IMPORTED_MODULE_0__math__["b" /* acos */])(c)) && c / Object(__WEBPACK_IMPORTED_MODULE_0__math__["t" /* sin */])(c);
});

azimuthalEquidistantRaw.invert = Object(__WEBPACK_IMPORTED_MODULE_1__azimuthal__["a" /* azimuthalInvert */])(function(z) {
  return z;
});

/* unused harmony default export */ var _unused_webpack_default_export = (function() {
  return Object(__WEBPACK_IMPORTED_MODULE_2__index__["a" /* default */])(azimuthalEquidistantRaw)
      .scale(79.4188)
      .clipAngle(180 - 1e-3);
});


/***/ }),

/***/ "./node_modules/d3-geo-projection/node_modules/d3-geo/src/projection/conic.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = conicProjection;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__math__ = __webpack_require__("./node_modules/d3-geo-projection/node_modules/d3-geo/src/math.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index__ = __webpack_require__("./node_modules/d3-geo-projection/node_modules/d3-geo/src/projection/index.js");



function conicProjection(projectAt) {
  var phi0 = 0,
      phi1 = __WEBPACK_IMPORTED_MODULE_0__math__["o" /* pi */] / 3,
      m = Object(__WEBPACK_IMPORTED_MODULE_1__index__["b" /* projectionMutator */])(projectAt),
      p = m(phi0, phi1);

  p.parallels = function(_) {
    return arguments.length ? m(phi0 = _[0] * __WEBPACK_IMPORTED_MODULE_0__math__["r" /* radians */], phi1 = _[1] * __WEBPACK_IMPORTED_MODULE_0__math__["r" /* radians */]) : [phi0 * __WEBPACK_IMPORTED_MODULE_0__math__["h" /* degrees */], phi1 * __WEBPACK_IMPORTED_MODULE_0__math__["h" /* degrees */]];
  };

  return p;
}


/***/ }),

/***/ "./node_modules/d3-geo-projection/node_modules/d3-geo/src/projection/conicConformal.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export conicConformalRaw */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__math__ = __webpack_require__("./node_modules/d3-geo-projection/node_modules/d3-geo/src/math.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__conic__ = __webpack_require__("./node_modules/d3-geo-projection/node_modules/d3-geo/src/projection/conic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__mercator__ = __webpack_require__("./node_modules/d3-geo-projection/node_modules/d3-geo/src/projection/mercator.js");




function tany(y) {
  return Object(__WEBPACK_IMPORTED_MODULE_0__math__["v" /* tan */])((__WEBPACK_IMPORTED_MODULE_0__math__["l" /* halfPi */] + y) / 2);
}

function conicConformalRaw(y0, y1) {
  var cy0 = Object(__WEBPACK_IMPORTED_MODULE_0__math__["g" /* cos */])(y0),
      n = y0 === y1 ? Object(__WEBPACK_IMPORTED_MODULE_0__math__["t" /* sin */])(y0) : Object(__WEBPACK_IMPORTED_MODULE_0__math__["n" /* log */])(cy0 / Object(__WEBPACK_IMPORTED_MODULE_0__math__["g" /* cos */])(y1)) / Object(__WEBPACK_IMPORTED_MODULE_0__math__["n" /* log */])(tany(y1) / tany(y0)),
      f = cy0 * Object(__WEBPACK_IMPORTED_MODULE_0__math__["p" /* pow */])(tany(y0), n) / n;

  if (!n) return __WEBPACK_IMPORTED_MODULE_2__mercator__["b" /* mercatorRaw */];

  function project(x, y) {
    if (f > 0) { if (y < -__WEBPACK_IMPORTED_MODULE_0__math__["l" /* halfPi */] + __WEBPACK_IMPORTED_MODULE_0__math__["i" /* epsilon */]) y = -__WEBPACK_IMPORTED_MODULE_0__math__["l" /* halfPi */] + __WEBPACK_IMPORTED_MODULE_0__math__["i" /* epsilon */]; }
    else { if (y > __WEBPACK_IMPORTED_MODULE_0__math__["l" /* halfPi */] - __WEBPACK_IMPORTED_MODULE_0__math__["i" /* epsilon */]) y = __WEBPACK_IMPORTED_MODULE_0__math__["l" /* halfPi */] - __WEBPACK_IMPORTED_MODULE_0__math__["i" /* epsilon */]; }
    var r = f / Object(__WEBPACK_IMPORTED_MODULE_0__math__["p" /* pow */])(tany(y), n);
    return [r * Object(__WEBPACK_IMPORTED_MODULE_0__math__["t" /* sin */])(n * x), f - r * Object(__WEBPACK_IMPORTED_MODULE_0__math__["g" /* cos */])(n * x)];
  }

  project.invert = function(x, y) {
    var fy = f - y, r = Object(__WEBPACK_IMPORTED_MODULE_0__math__["s" /* sign */])(n) * Object(__WEBPACK_IMPORTED_MODULE_0__math__["u" /* sqrt */])(x * x + fy * fy);
    return [Object(__WEBPACK_IMPORTED_MODULE_0__math__["e" /* atan2 */])(x, Object(__WEBPACK_IMPORTED_MODULE_0__math__["a" /* abs */])(fy)) / n * Object(__WEBPACK_IMPORTED_MODULE_0__math__["s" /* sign */])(fy), 2 * Object(__WEBPACK_IMPORTED_MODULE_0__math__["d" /* atan */])(Object(__WEBPACK_IMPORTED_MODULE_0__math__["p" /* pow */])(f / r, 1 / n)) - __WEBPACK_IMPORTED_MODULE_0__math__["l" /* halfPi */]];
  };

  return project;
}

/* unused harmony default export */ var _unused_webpack_default_export = (function() {
  return Object(__WEBPACK_IMPORTED_MODULE_1__conic__["a" /* conicProjection */])(conicConformalRaw)
      .scale(109.5)
      .parallels([30, 30]);
});


/***/ }),

/***/ "./node_modules/d3-geo-projection/node_modules/d3-geo/src/projection/conicEqualArea.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export conicEqualAreaRaw */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__math__ = __webpack_require__("./node_modules/d3-geo-projection/node_modules/d3-geo/src/math.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__conic__ = __webpack_require__("./node_modules/d3-geo-projection/node_modules/d3-geo/src/projection/conic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__cylindricalEqualArea__ = __webpack_require__("./node_modules/d3-geo-projection/node_modules/d3-geo/src/projection/cylindricalEqualArea.js");




function conicEqualAreaRaw(y0, y1) {
  var sy0 = Object(__WEBPACK_IMPORTED_MODULE_0__math__["t" /* sin */])(y0), n = (sy0 + Object(__WEBPACK_IMPORTED_MODULE_0__math__["t" /* sin */])(y1)) / 2;

  // Are the parallels symmetrical around the Equator?
  if (Object(__WEBPACK_IMPORTED_MODULE_0__math__["a" /* abs */])(n) < __WEBPACK_IMPORTED_MODULE_0__math__["i" /* epsilon */]) return Object(__WEBPACK_IMPORTED_MODULE_2__cylindricalEqualArea__["a" /* cylindricalEqualAreaRaw */])(y0);

  var c = 1 + sy0 * (2 * n - sy0), r0 = Object(__WEBPACK_IMPORTED_MODULE_0__math__["u" /* sqrt */])(c) / n;

  function project(x, y) {
    var r = Object(__WEBPACK_IMPORTED_MODULE_0__math__["u" /* sqrt */])(c - 2 * n * Object(__WEBPACK_IMPORTED_MODULE_0__math__["t" /* sin */])(y)) / n;
    return [r * Object(__WEBPACK_IMPORTED_MODULE_0__math__["t" /* sin */])(x *= n), r0 - r * Object(__WEBPACK_IMPORTED_MODULE_0__math__["g" /* cos */])(x)];
  }

  project.invert = function(x, y) {
    var r0y = r0 - y;
    return [Object(__WEBPACK_IMPORTED_MODULE_0__math__["e" /* atan2 */])(x, Object(__WEBPACK_IMPORTED_MODULE_0__math__["a" /* abs */])(r0y)) / n * Object(__WEBPACK_IMPORTED_MODULE_0__math__["s" /* sign */])(r0y), Object(__WEBPACK_IMPORTED_MODULE_0__math__["c" /* asin */])((c - (x * x + r0y * r0y) * n * n) / (2 * n))];
  };

  return project;
}

/* harmony default export */ __webpack_exports__["a"] = (function() {
  return Object(__WEBPACK_IMPORTED_MODULE_1__conic__["a" /* conicProjection */])(conicEqualAreaRaw)
      .scale(155.424)
      .center([0, 33.6442]);
});


/***/ }),

/***/ "./node_modules/d3-geo-projection/node_modules/d3-geo/src/projection/conicEquidistant.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export conicEquidistantRaw */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__math__ = __webpack_require__("./node_modules/d3-geo-projection/node_modules/d3-geo/src/math.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__conic__ = __webpack_require__("./node_modules/d3-geo-projection/node_modules/d3-geo/src/projection/conic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__equirectangular__ = __webpack_require__("./node_modules/d3-geo-projection/node_modules/d3-geo/src/projection/equirectangular.js");




function conicEquidistantRaw(y0, y1) {
  var cy0 = Object(__WEBPACK_IMPORTED_MODULE_0__math__["g" /* cos */])(y0),
      n = y0 === y1 ? Object(__WEBPACK_IMPORTED_MODULE_0__math__["t" /* sin */])(y0) : (cy0 - Object(__WEBPACK_IMPORTED_MODULE_0__math__["g" /* cos */])(y1)) / (y1 - y0),
      g = cy0 / n + y0;

  if (Object(__WEBPACK_IMPORTED_MODULE_0__math__["a" /* abs */])(n) < __WEBPACK_IMPORTED_MODULE_0__math__["i" /* epsilon */]) return __WEBPACK_IMPORTED_MODULE_2__equirectangular__["b" /* equirectangularRaw */];

  function project(x, y) {
    var gy = g - y, nx = n * x;
    return [gy * Object(__WEBPACK_IMPORTED_MODULE_0__math__["t" /* sin */])(nx), g - gy * Object(__WEBPACK_IMPORTED_MODULE_0__math__["g" /* cos */])(nx)];
  }

  project.invert = function(x, y) {
    var gy = g - y;
    return [Object(__WEBPACK_IMPORTED_MODULE_0__math__["e" /* atan2 */])(x, Object(__WEBPACK_IMPORTED_MODULE_0__math__["a" /* abs */])(gy)) / n * Object(__WEBPACK_IMPORTED_MODULE_0__math__["s" /* sign */])(gy), g - Object(__WEBPACK_IMPORTED_MODULE_0__math__["s" /* sign */])(n) * Object(__WEBPACK_IMPORTED_MODULE_0__math__["u" /* sqrt */])(x * x + gy * gy)];
  };

  return project;
}

/* unused harmony default export */ var _unused_webpack_default_export = (function() {
  return Object(__WEBPACK_IMPORTED_MODULE_1__conic__["a" /* conicProjection */])(conicEquidistantRaw)
      .scale(131.154)
      .center([0, 13.9389]);
});


/***/ }),

/***/ "./node_modules/d3-geo-projection/node_modules/d3-geo/src/projection/cylindricalEqualArea.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = cylindricalEqualAreaRaw;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__math__ = __webpack_require__("./node_modules/d3-geo-projection/node_modules/d3-geo/src/math.js");


function cylindricalEqualAreaRaw(phi0) {
  var cosPhi0 = Object(__WEBPACK_IMPORTED_MODULE_0__math__["g" /* cos */])(phi0);

  function forward(lambda, phi) {
    return [lambda * cosPhi0, Object(__WEBPACK_IMPORTED_MODULE_0__math__["t" /* sin */])(phi) / cosPhi0];
  }

  forward.invert = function(x, y) {
    return [x / cosPhi0, Object(__WEBPACK_IMPORTED_MODULE_0__math__["c" /* asin */])(y * cosPhi0)];
  };

  return forward;
}


/***/ }),

/***/ "./node_modules/d3-geo-projection/node_modules/d3-geo/src/projection/equirectangular.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["b"] = equirectangularRaw;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__index__ = __webpack_require__("./node_modules/d3-geo-projection/node_modules/d3-geo/src/projection/index.js");


function equirectangularRaw(lambda, phi) {
  return [lambda, phi];
}

equirectangularRaw.invert = equirectangularRaw;

/* harmony default export */ __webpack_exports__["a"] = (function() {
  return Object(__WEBPACK_IMPORTED_MODULE_0__index__["a" /* default */])(equirectangularRaw)
      .scale(152.63);
});


/***/ }),

/***/ "./node_modules/d3-geo-projection/node_modules/d3-geo/src/projection/fit.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = fitExtent;
/* harmony export (immutable) */ __webpack_exports__["c"] = fitSize;
/* harmony export (immutable) */ __webpack_exports__["d"] = fitWidth;
/* harmony export (immutable) */ __webpack_exports__["b"] = fitHeight;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__stream__ = __webpack_require__("./node_modules/d3-geo-projection/node_modules/d3-geo/src/stream.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__path_bounds__ = __webpack_require__("./node_modules/d3-geo-projection/node_modules/d3-geo/src/path/bounds.js");



function fit(projection, fitBounds, object) {
  var clip = projection.clipExtent && projection.clipExtent();
  projection.scale(150).translate([0, 0]);
  if (clip != null) projection.clipExtent(null);
  Object(__WEBPACK_IMPORTED_MODULE_0__stream__["a" /* default */])(object, projection.stream(__WEBPACK_IMPORTED_MODULE_1__path_bounds__["a" /* default */]));
  fitBounds(__WEBPACK_IMPORTED_MODULE_1__path_bounds__["a" /* default */].result());
  if (clip != null) projection.clipExtent(clip);
  return projection;
}

function fitExtent(projection, extent, object) {
  return fit(projection, function(b) {
    var w = extent[1][0] - extent[0][0],
        h = extent[1][1] - extent[0][1],
        k = Math.min(w / (b[1][0] - b[0][0]), h / (b[1][1] - b[0][1])),
        x = +extent[0][0] + (w - k * (b[1][0] + b[0][0])) / 2,
        y = +extent[0][1] + (h - k * (b[1][1] + b[0][1])) / 2;
    projection.scale(150 * k).translate([x, y]);
  }, object);
}

function fitSize(projection, size, object) {
  return fitExtent(projection, [[0, 0], size], object);
}

function fitWidth(projection, width, object) {
  return fit(projection, function(b) {
    var w = +width,
        k = w / (b[1][0] - b[0][0]),
        x = (w - k * (b[1][0] + b[0][0])) / 2,
        y = -k * b[0][1];
    projection.scale(150 * k).translate([x, y]);
  }, object);
}

function fitHeight(projection, height, object) {
  return fit(projection, function(b) {
    var h = +height,
        k = h / (b[1][1] - b[0][1]),
        x = -k * b[0][0],
        y = (h - k * (b[1][1] + b[0][1])) / 2;
    projection.scale(150 * k).translate([x, y]);
  }, object);
}


/***/ }),

/***/ "./node_modules/d3-geo-projection/node_modules/d3-geo/src/projection/gnomonic.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["b"] = gnomonicRaw;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__math__ = __webpack_require__("./node_modules/d3-geo-projection/node_modules/d3-geo/src/math.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__azimuthal__ = __webpack_require__("./node_modules/d3-geo-projection/node_modules/d3-geo/src/projection/azimuthal.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__index__ = __webpack_require__("./node_modules/d3-geo-projection/node_modules/d3-geo/src/projection/index.js");




function gnomonicRaw(x, y) {
  var cy = Object(__WEBPACK_IMPORTED_MODULE_0__math__["g" /* cos */])(y), k = Object(__WEBPACK_IMPORTED_MODULE_0__math__["g" /* cos */])(x) * cy;
  return [cy * Object(__WEBPACK_IMPORTED_MODULE_0__math__["t" /* sin */])(x) / k, Object(__WEBPACK_IMPORTED_MODULE_0__math__["t" /* sin */])(y) / k];
}

gnomonicRaw.invert = Object(__WEBPACK_IMPORTED_MODULE_1__azimuthal__["a" /* azimuthalInvert */])(__WEBPACK_IMPORTED_MODULE_0__math__["d" /* atan */]);

/* harmony default export */ __webpack_exports__["a"] = (function() {
  return Object(__WEBPACK_IMPORTED_MODULE_2__index__["a" /* default */])(gnomonicRaw)
      .scale(144.049)
      .clipAngle(60);
});


/***/ }),

/***/ "./node_modules/d3-geo-projection/node_modules/d3-geo/src/projection/identity.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__clip_rectangle__ = __webpack_require__("./node_modules/d3-geo-projection/node_modules/d3-geo/src/clip/rectangle.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__identity__ = __webpack_require__("./node_modules/d3-geo-projection/node_modules/d3-geo/src/identity.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__transform__ = __webpack_require__("./node_modules/d3-geo-projection/node_modules/d3-geo/src/transform.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__fit__ = __webpack_require__("./node_modules/d3-geo-projection/node_modules/d3-geo/src/projection/fit.js");





function scaleTranslate(kx, ky, tx, ty) {
  return kx === 1 && ky === 1 && tx === 0 && ty === 0 ? __WEBPACK_IMPORTED_MODULE_1__identity__["a" /* default */] : Object(__WEBPACK_IMPORTED_MODULE_2__transform__["a" /* transformer */])({
    point: function(x, y) {
      this.stream.point(x * kx + tx, y * ky + ty);
    }
  });
}

/* unused harmony default export */ var _unused_webpack_default_export = (function() {
  var k = 1, tx = 0, ty = 0, sx = 1, sy = 1, transform = __WEBPACK_IMPORTED_MODULE_1__identity__["a" /* default */], // scale, translate and reflect
      x0 = null, y0, x1, y1, // clip extent
      postclip = __WEBPACK_IMPORTED_MODULE_1__identity__["a" /* default */],
      cache,
      cacheStream,
      projection;

  function reset() {
    cache = cacheStream = null;
    return projection;
  }

  return projection = {
    stream: function(stream) {
      return cache && cacheStream === stream ? cache : cache = transform(postclip(cacheStream = stream));
    },
    postclip: function(_) {
      return arguments.length ? (postclip = _, x0 = y0 = x1 = y1 = null, reset()) : postclip;
    },
    clipExtent: function(_) {
      return arguments.length ? (postclip = _ == null ? (x0 = y0 = x1 = y1 = null, __WEBPACK_IMPORTED_MODULE_1__identity__["a" /* default */]) : Object(__WEBPACK_IMPORTED_MODULE_0__clip_rectangle__["a" /* default */])(x0 = +_[0][0], y0 = +_[0][1], x1 = +_[1][0], y1 = +_[1][1]), reset()) : x0 == null ? null : [[x0, y0], [x1, y1]];
    },
    scale: function(_) {
      return arguments.length ? (transform = scaleTranslate((k = +_) * sx, k * sy, tx, ty), reset()) : k;
    },
    translate: function(_) {
      return arguments.length ? (transform = scaleTranslate(k * sx, k * sy, tx = +_[0], ty = +_[1]), reset()) : [tx, ty];
    },
    reflectX: function(_) {
      return arguments.length ? (transform = scaleTranslate(k * (sx = _ ? -1 : 1), k * sy, tx, ty), reset()) : sx < 0;
    },
    reflectY: function(_) {
      return arguments.length ? (transform = scaleTranslate(k * sx, k * (sy = _ ? -1 : 1), tx, ty), reset()) : sy < 0;
    },
    fitExtent: function(extent, object) {
      return Object(__WEBPACK_IMPORTED_MODULE_3__fit__["a" /* fitExtent */])(projection, extent, object);
    },
    fitSize: function(size, object) {
      return Object(__WEBPACK_IMPORTED_MODULE_3__fit__["c" /* fitSize */])(projection, size, object);
    },
    fitWidth: function(width, object) {
      return Object(__WEBPACK_IMPORTED_MODULE_3__fit__["d" /* fitWidth */])(projection, width, object);
    },
    fitHeight: function(height, object) {
      return Object(__WEBPACK_IMPORTED_MODULE_3__fit__["b" /* fitHeight */])(projection, height, object);
    }
  };
});


/***/ }),

/***/ "./node_modules/d3-geo-projection/node_modules/d3-geo/src/projection/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = projection;
/* harmony export (immutable) */ __webpack_exports__["b"] = projectionMutator;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__clip_antimeridian__ = __webpack_require__("./node_modules/d3-geo-projection/node_modules/d3-geo/src/clip/antimeridian.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__clip_circle__ = __webpack_require__("./node_modules/d3-geo-projection/node_modules/d3-geo/src/clip/circle.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__clip_rectangle__ = __webpack_require__("./node_modules/d3-geo-projection/node_modules/d3-geo/src/clip/rectangle.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__compose__ = __webpack_require__("./node_modules/d3-geo-projection/node_modules/d3-geo/src/compose.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__identity__ = __webpack_require__("./node_modules/d3-geo-projection/node_modules/d3-geo/src/identity.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__math__ = __webpack_require__("./node_modules/d3-geo-projection/node_modules/d3-geo/src/math.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__rotation__ = __webpack_require__("./node_modules/d3-geo-projection/node_modules/d3-geo/src/rotation.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__transform__ = __webpack_require__("./node_modules/d3-geo-projection/node_modules/d3-geo/src/transform.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__fit__ = __webpack_require__("./node_modules/d3-geo-projection/node_modules/d3-geo/src/projection/fit.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__resample__ = __webpack_require__("./node_modules/d3-geo-projection/node_modules/d3-geo/src/projection/resample.js");











var transformRadians = Object(__WEBPACK_IMPORTED_MODULE_7__transform__["a" /* transformer */])({
  point: function(x, y) {
    this.stream.point(x * __WEBPACK_IMPORTED_MODULE_5__math__["r" /* radians */], y * __WEBPACK_IMPORTED_MODULE_5__math__["r" /* radians */]);
  }
});

function transformRotate(rotate) {
  return Object(__WEBPACK_IMPORTED_MODULE_7__transform__["a" /* transformer */])({
    point: function(x, y) {
      var r = rotate(x, y);
      return this.stream.point(r[0], r[1]);
    }
  });
}

function projection(project) {
  return projectionMutator(function() { return project; })();
}

function projectionMutator(projectAt) {
  var project,
      k = 150, // scale
      x = 480, y = 250, // translate
      dx, dy, lambda = 0, phi = 0, // center
      deltaLambda = 0, deltaPhi = 0, deltaGamma = 0, rotate, projectRotate, // rotate
      theta = null, preclip = __WEBPACK_IMPORTED_MODULE_0__clip_antimeridian__["a" /* default */], // clip angle
      x0 = null, y0, x1, y1, postclip = __WEBPACK_IMPORTED_MODULE_4__identity__["a" /* default */], // clip extent
      delta2 = 0.5, projectResample = Object(__WEBPACK_IMPORTED_MODULE_9__resample__["a" /* default */])(projectTransform, delta2), // precision
      cache,
      cacheStream;

  function projection(point) {
    point = projectRotate(point[0] * __WEBPACK_IMPORTED_MODULE_5__math__["r" /* radians */], point[1] * __WEBPACK_IMPORTED_MODULE_5__math__["r" /* radians */]);
    return [point[0] * k + dx, dy - point[1] * k];
  }

  function invert(point) {
    point = projectRotate.invert((point[0] - dx) / k, (dy - point[1]) / k);
    return point && [point[0] * __WEBPACK_IMPORTED_MODULE_5__math__["h" /* degrees */], point[1] * __WEBPACK_IMPORTED_MODULE_5__math__["h" /* degrees */]];
  }

  function projectTransform(x, y) {
    return x = project(x, y), [x[0] * k + dx, dy - x[1] * k];
  }

  projection.stream = function(stream) {
    return cache && cacheStream === stream ? cache : cache = transformRadians(transformRotate(rotate)(preclip(projectResample(postclip(cacheStream = stream)))));
  };

  projection.preclip = function(_) {
    return arguments.length ? (preclip = _, theta = undefined, reset()) : preclip;
  };

  projection.postclip = function(_) {
    return arguments.length ? (postclip = _, x0 = y0 = x1 = y1 = null, reset()) : postclip;
  };

  projection.clipAngle = function(_) {
    return arguments.length ? (preclip = +_ ? Object(__WEBPACK_IMPORTED_MODULE_1__clip_circle__["a" /* default */])(theta = _ * __WEBPACK_IMPORTED_MODULE_5__math__["r" /* radians */]) : (theta = null, __WEBPACK_IMPORTED_MODULE_0__clip_antimeridian__["a" /* default */]), reset()) : theta * __WEBPACK_IMPORTED_MODULE_5__math__["h" /* degrees */];
  };

  projection.clipExtent = function(_) {
    return arguments.length ? (postclip = _ == null ? (x0 = y0 = x1 = y1 = null, __WEBPACK_IMPORTED_MODULE_4__identity__["a" /* default */]) : Object(__WEBPACK_IMPORTED_MODULE_2__clip_rectangle__["a" /* default */])(x0 = +_[0][0], y0 = +_[0][1], x1 = +_[1][0], y1 = +_[1][1]), reset()) : x0 == null ? null : [[x0, y0], [x1, y1]];
  };

  projection.scale = function(_) {
    return arguments.length ? (k = +_, recenter()) : k;
  };

  projection.translate = function(_) {
    return arguments.length ? (x = +_[0], y = +_[1], recenter()) : [x, y];
  };

  projection.center = function(_) {
    return arguments.length ? (lambda = _[0] % 360 * __WEBPACK_IMPORTED_MODULE_5__math__["r" /* radians */], phi = _[1] % 360 * __WEBPACK_IMPORTED_MODULE_5__math__["r" /* radians */], recenter()) : [lambda * __WEBPACK_IMPORTED_MODULE_5__math__["h" /* degrees */], phi * __WEBPACK_IMPORTED_MODULE_5__math__["h" /* degrees */]];
  };

  projection.rotate = function(_) {
    return arguments.length ? (deltaLambda = _[0] % 360 * __WEBPACK_IMPORTED_MODULE_5__math__["r" /* radians */], deltaPhi = _[1] % 360 * __WEBPACK_IMPORTED_MODULE_5__math__["r" /* radians */], deltaGamma = _.length > 2 ? _[2] % 360 * __WEBPACK_IMPORTED_MODULE_5__math__["r" /* radians */] : 0, recenter()) : [deltaLambda * __WEBPACK_IMPORTED_MODULE_5__math__["h" /* degrees */], deltaPhi * __WEBPACK_IMPORTED_MODULE_5__math__["h" /* degrees */], deltaGamma * __WEBPACK_IMPORTED_MODULE_5__math__["h" /* degrees */]];
  };

  projection.precision = function(_) {
    return arguments.length ? (projectResample = Object(__WEBPACK_IMPORTED_MODULE_9__resample__["a" /* default */])(projectTransform, delta2 = _ * _), reset()) : Object(__WEBPACK_IMPORTED_MODULE_5__math__["u" /* sqrt */])(delta2);
  };

  projection.fitExtent = function(extent, object) {
    return Object(__WEBPACK_IMPORTED_MODULE_8__fit__["a" /* fitExtent */])(projection, extent, object);
  };

  projection.fitSize = function(size, object) {
    return Object(__WEBPACK_IMPORTED_MODULE_8__fit__["c" /* fitSize */])(projection, size, object);
  };

  projection.fitWidth = function(width, object) {
    return Object(__WEBPACK_IMPORTED_MODULE_8__fit__["d" /* fitWidth */])(projection, width, object);
  };

  projection.fitHeight = function(height, object) {
    return Object(__WEBPACK_IMPORTED_MODULE_8__fit__["b" /* fitHeight */])(projection, height, object);
  };

  function recenter() {
    projectRotate = Object(__WEBPACK_IMPORTED_MODULE_3__compose__["a" /* default */])(rotate = Object(__WEBPACK_IMPORTED_MODULE_6__rotation__["b" /* rotateRadians */])(deltaLambda, deltaPhi, deltaGamma), project);
    var center = project(lambda, phi);
    dx = x - center[0] * k;
    dy = y + center[1] * k;
    return reset();
  }

  function reset() {
    cache = cacheStream = null;
    return projection;
  }

  return function() {
    project = projectAt.apply(this, arguments);
    projection.invert = project.invert && invert;
    return recenter();
  };
}


/***/ }),

/***/ "./node_modules/d3-geo-projection/node_modules/d3-geo/src/projection/mercator.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["b"] = mercatorRaw;
/* harmony export (immutable) */ __webpack_exports__["a"] = mercatorProjection;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__math__ = __webpack_require__("./node_modules/d3-geo-projection/node_modules/d3-geo/src/math.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__rotation__ = __webpack_require__("./node_modules/d3-geo-projection/node_modules/d3-geo/src/rotation.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__index__ = __webpack_require__("./node_modules/d3-geo-projection/node_modules/d3-geo/src/projection/index.js");




function mercatorRaw(lambda, phi) {
  return [lambda, Object(__WEBPACK_IMPORTED_MODULE_0__math__["n" /* log */])(Object(__WEBPACK_IMPORTED_MODULE_0__math__["v" /* tan */])((__WEBPACK_IMPORTED_MODULE_0__math__["l" /* halfPi */] + phi) / 2))];
}

mercatorRaw.invert = function(x, y) {
  return [x, 2 * Object(__WEBPACK_IMPORTED_MODULE_0__math__["d" /* atan */])(Object(__WEBPACK_IMPORTED_MODULE_0__math__["k" /* exp */])(y)) - __WEBPACK_IMPORTED_MODULE_0__math__["l" /* halfPi */]];
};

/* unused harmony default export */ var _unused_webpack_default_export = (function() {
  return mercatorProjection(mercatorRaw)
      .scale(961 / __WEBPACK_IMPORTED_MODULE_0__math__["w" /* tau */]);
});

function mercatorProjection(project) {
  var m = Object(__WEBPACK_IMPORTED_MODULE_2__index__["a" /* default */])(project),
      center = m.center,
      scale = m.scale,
      translate = m.translate,
      clipExtent = m.clipExtent,
      x0 = null, y0, x1, y1; // clip extent

  m.scale = function(_) {
    return arguments.length ? (scale(_), reclip()) : scale();
  };

  m.translate = function(_) {
    return arguments.length ? (translate(_), reclip()) : translate();
  };

  m.center = function(_) {
    return arguments.length ? (center(_), reclip()) : center();
  };

  m.clipExtent = function(_) {
    return arguments.length ? ((_ == null ? x0 = y0 = x1 = y1 = null : (x0 = +_[0][0], y0 = +_[0][1], x1 = +_[1][0], y1 = +_[1][1])), reclip()) : x0 == null ? null : [[x0, y0], [x1, y1]];
  };

  function reclip() {
    var k = __WEBPACK_IMPORTED_MODULE_0__math__["o" /* pi */] * scale(),
        t = m(Object(__WEBPACK_IMPORTED_MODULE_1__rotation__["a" /* default */])(m.rotate()).invert([0, 0]));
    return clipExtent(x0 == null
        ? [[t[0] - k, t[1] - k], [t[0] + k, t[1] + k]] : project === mercatorRaw
        ? [[Math.max(t[0] - k, x0), y0], [Math.min(t[0] + k, x1), y1]]
        : [[x0, Math.max(t[1] - k, y0)], [x1, Math.min(t[1] + k, y1)]]);
  }

  return reclip();
}


/***/ }),

/***/ "./node_modules/d3-geo-projection/node_modules/d3-geo/src/projection/naturalEarth1.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export naturalEarth1Raw */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__index__ = __webpack_require__("./node_modules/d3-geo-projection/node_modules/d3-geo/src/projection/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__math__ = __webpack_require__("./node_modules/d3-geo-projection/node_modules/d3-geo/src/math.js");



function naturalEarth1Raw(lambda, phi) {
  var phi2 = phi * phi, phi4 = phi2 * phi2;
  return [
    lambda * (0.8707 - 0.131979 * phi2 + phi4 * (-0.013791 + phi4 * (0.003971 * phi2 - 0.001529 * phi4))),
    phi * (1.007226 + phi2 * (0.015085 + phi4 * (-0.044475 + 0.028874 * phi2 - 0.005916 * phi4)))
  ];
}

naturalEarth1Raw.invert = function(x, y) {
  var phi = y, i = 25, delta;
  do {
    var phi2 = phi * phi, phi4 = phi2 * phi2;
    phi -= delta = (phi * (1.007226 + phi2 * (0.015085 + phi4 * (-0.044475 + 0.028874 * phi2 - 0.005916 * phi4))) - y) /
        (1.007226 + phi2 * (0.015085 * 3 + phi4 * (-0.044475 * 7 + 0.028874 * 9 * phi2 - 0.005916 * 11 * phi4)));
  } while (Object(__WEBPACK_IMPORTED_MODULE_1__math__["a" /* abs */])(delta) > __WEBPACK_IMPORTED_MODULE_1__math__["i" /* epsilon */] && --i > 0);
  return [
    x / (0.8707 + (phi2 = phi * phi) * (-0.131979 + phi2 * (-0.013791 + phi2 * phi2 * phi2 * (0.003971 - 0.001529 * phi2)))),
    phi
  ];
};

/* unused harmony default export */ var _unused_webpack_default_export = (function() {
  return Object(__WEBPACK_IMPORTED_MODULE_0__index__["a" /* default */])(naturalEarth1Raw)
      .scale(175.295);
});


/***/ }),

/***/ "./node_modules/d3-geo-projection/node_modules/d3-geo/src/projection/orthographic.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export orthographicRaw */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__math__ = __webpack_require__("./node_modules/d3-geo-projection/node_modules/d3-geo/src/math.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__azimuthal__ = __webpack_require__("./node_modules/d3-geo-projection/node_modules/d3-geo/src/projection/azimuthal.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__index__ = __webpack_require__("./node_modules/d3-geo-projection/node_modules/d3-geo/src/projection/index.js");




function orthographicRaw(x, y) {
  return [Object(__WEBPACK_IMPORTED_MODULE_0__math__["g" /* cos */])(y) * Object(__WEBPACK_IMPORTED_MODULE_0__math__["t" /* sin */])(x), Object(__WEBPACK_IMPORTED_MODULE_0__math__["t" /* sin */])(y)];
}

orthographicRaw.invert = Object(__WEBPACK_IMPORTED_MODULE_1__azimuthal__["a" /* azimuthalInvert */])(__WEBPACK_IMPORTED_MODULE_0__math__["c" /* asin */]);

/* harmony default export */ __webpack_exports__["a"] = (function() {
  return Object(__WEBPACK_IMPORTED_MODULE_2__index__["a" /* default */])(orthographicRaw)
      .scale(249.5)
      .clipAngle(90 + __WEBPACK_IMPORTED_MODULE_0__math__["i" /* epsilon */]);
});


/***/ }),

/***/ "./node_modules/d3-geo-projection/node_modules/d3-geo/src/projection/resample.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__cartesian__ = __webpack_require__("./node_modules/d3-geo-projection/node_modules/d3-geo/src/cartesian.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__math__ = __webpack_require__("./node_modules/d3-geo-projection/node_modules/d3-geo/src/math.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__transform__ = __webpack_require__("./node_modules/d3-geo-projection/node_modules/d3-geo/src/transform.js");




var maxDepth = 16, // maximum depth of subdivision
    cosMinDistance = Object(__WEBPACK_IMPORTED_MODULE_1__math__["g" /* cos */])(30 * __WEBPACK_IMPORTED_MODULE_1__math__["r" /* radians */]); // cos(minimum angular distance)

/* harmony default export */ __webpack_exports__["a"] = (function(project, delta2) {
  return +delta2 ? resample(project, delta2) : resampleNone(project);
});

function resampleNone(project) {
  return Object(__WEBPACK_IMPORTED_MODULE_2__transform__["a" /* transformer */])({
    point: function(x, y) {
      x = project(x, y);
      this.stream.point(x[0], x[1]);
    }
  });
}

function resample(project, delta2) {

  function resampleLineTo(x0, y0, lambda0, a0, b0, c0, x1, y1, lambda1, a1, b1, c1, depth, stream) {
    var dx = x1 - x0,
        dy = y1 - y0,
        d2 = dx * dx + dy * dy;
    if (d2 > 4 * delta2 && depth--) {
      var a = a0 + a1,
          b = b0 + b1,
          c = c0 + c1,
          m = Object(__WEBPACK_IMPORTED_MODULE_1__math__["u" /* sqrt */])(a * a + b * b + c * c),
          phi2 = Object(__WEBPACK_IMPORTED_MODULE_1__math__["c" /* asin */])(c /= m),
          lambda2 = Object(__WEBPACK_IMPORTED_MODULE_1__math__["a" /* abs */])(Object(__WEBPACK_IMPORTED_MODULE_1__math__["a" /* abs */])(c) - 1) < __WEBPACK_IMPORTED_MODULE_1__math__["i" /* epsilon */] || Object(__WEBPACK_IMPORTED_MODULE_1__math__["a" /* abs */])(lambda0 - lambda1) < __WEBPACK_IMPORTED_MODULE_1__math__["i" /* epsilon */] ? (lambda0 + lambda1) / 2 : Object(__WEBPACK_IMPORTED_MODULE_1__math__["e" /* atan2 */])(b, a),
          p = project(lambda2, phi2),
          x2 = p[0],
          y2 = p[1],
          dx2 = x2 - x0,
          dy2 = y2 - y0,
          dz = dy * dx2 - dx * dy2;
      if (dz * dz / d2 > delta2 // perpendicular projected distance
          || Object(__WEBPACK_IMPORTED_MODULE_1__math__["a" /* abs */])((dx * dx2 + dy * dy2) / d2 - 0.5) > 0.3 // midpoint close to an end
          || a0 * a1 + b0 * b1 + c0 * c1 < cosMinDistance) { // angular distance
        resampleLineTo(x0, y0, lambda0, a0, b0, c0, x2, y2, lambda2, a /= m, b /= m, c, depth, stream);
        stream.point(x2, y2);
        resampleLineTo(x2, y2, lambda2, a, b, c, x1, y1, lambda1, a1, b1, c1, depth, stream);
      }
    }
  }
  return function(stream) {
    var lambda00, x00, y00, a00, b00, c00, // first point
        lambda0, x0, y0, a0, b0, c0; // previous point

    var resampleStream = {
      point: point,
      lineStart: lineStart,
      lineEnd: lineEnd,
      polygonStart: function() { stream.polygonStart(); resampleStream.lineStart = ringStart; },
      polygonEnd: function() { stream.polygonEnd(); resampleStream.lineStart = lineStart; }
    };

    function point(x, y) {
      x = project(x, y);
      stream.point(x[0], x[1]);
    }

    function lineStart() {
      x0 = NaN;
      resampleStream.point = linePoint;
      stream.lineStart();
    }

    function linePoint(lambda, phi) {
      var c = Object(__WEBPACK_IMPORTED_MODULE_0__cartesian__["a" /* cartesian */])([lambda, phi]), p = project(lambda, phi);
      resampleLineTo(x0, y0, lambda0, a0, b0, c0, x0 = p[0], y0 = p[1], lambda0 = lambda, a0 = c[0], b0 = c[1], c0 = c[2], maxDepth, stream);
      stream.point(x0, y0);
    }

    function lineEnd() {
      resampleStream.point = point;
      stream.lineEnd();
    }

    function ringStart() {
      lineStart();
      resampleStream.point = ringPoint;
      resampleStream.lineEnd = ringEnd;
    }

    function ringPoint(lambda, phi) {
      linePoint(lambda00 = lambda, phi), x00 = x0, y00 = y0, a00 = a0, b00 = b0, c00 = c0;
      resampleStream.point = linePoint;
    }

    function ringEnd() {
      resampleLineTo(x0, y0, lambda0, a0, b0, c0, x00, y00, lambda00, a00, b00, c00, maxDepth, stream);
      resampleStream.lineEnd = lineEnd;
      lineEnd();
    }

    return resampleStream;
  };
}


/***/ }),

/***/ "./node_modules/d3-geo-projection/node_modules/d3-geo/src/projection/stereographic.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export stereographicRaw */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__math__ = __webpack_require__("./node_modules/d3-geo-projection/node_modules/d3-geo/src/math.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__azimuthal__ = __webpack_require__("./node_modules/d3-geo-projection/node_modules/d3-geo/src/projection/azimuthal.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__index__ = __webpack_require__("./node_modules/d3-geo-projection/node_modules/d3-geo/src/projection/index.js");




function stereographicRaw(x, y) {
  var cy = Object(__WEBPACK_IMPORTED_MODULE_0__math__["g" /* cos */])(y), k = 1 + Object(__WEBPACK_IMPORTED_MODULE_0__math__["g" /* cos */])(x) * cy;
  return [cy * Object(__WEBPACK_IMPORTED_MODULE_0__math__["t" /* sin */])(x) / k, Object(__WEBPACK_IMPORTED_MODULE_0__math__["t" /* sin */])(y) / k];
}

stereographicRaw.invert = Object(__WEBPACK_IMPORTED_MODULE_1__azimuthal__["a" /* azimuthalInvert */])(function(z) {
  return 2 * Object(__WEBPACK_IMPORTED_MODULE_0__math__["d" /* atan */])(z);
});

/* unused harmony default export */ var _unused_webpack_default_export = (function() {
  return Object(__WEBPACK_IMPORTED_MODULE_2__index__["a" /* default */])(stereographicRaw)
      .scale(250)
      .clipAngle(142);
});


/***/ }),

/***/ "./node_modules/d3-geo-projection/node_modules/d3-geo/src/projection/transverseMercator.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export transverseMercatorRaw */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__math__ = __webpack_require__("./node_modules/d3-geo-projection/node_modules/d3-geo/src/math.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mercator__ = __webpack_require__("./node_modules/d3-geo-projection/node_modules/d3-geo/src/projection/mercator.js");



function transverseMercatorRaw(lambda, phi) {
  return [Object(__WEBPACK_IMPORTED_MODULE_0__math__["n" /* log */])(Object(__WEBPACK_IMPORTED_MODULE_0__math__["v" /* tan */])((__WEBPACK_IMPORTED_MODULE_0__math__["l" /* halfPi */] + phi) / 2)), -lambda];
}

transverseMercatorRaw.invert = function(x, y) {
  return [-y, 2 * Object(__WEBPACK_IMPORTED_MODULE_0__math__["d" /* atan */])(Object(__WEBPACK_IMPORTED_MODULE_0__math__["k" /* exp */])(x)) - __WEBPACK_IMPORTED_MODULE_0__math__["l" /* halfPi */]];
};

/* unused harmony default export */ var _unused_webpack_default_export = (function() {
  var m = Object(__WEBPACK_IMPORTED_MODULE_1__mercator__["a" /* mercatorProjection */])(transverseMercatorRaw),
      center = m.center,
      rotate = m.rotate;

  m.center = function(_) {
    return arguments.length ? center([-_[1], _[0]]) : (_ = center(), [_[1], -_[0]]);
  };

  m.rotate = function(_) {
    return arguments.length ? rotate([_[0], _[1], _.length > 2 ? _[2] + 90 : 90]) : (_ = rotate(), [_[0], _[1], _[2] - 90]);
  };

  return rotate([0, 0, 90])
      .scale(159.155);
});


/***/ }),

/***/ "./node_modules/d3-geo-projection/node_modules/d3-geo/src/rotation.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["b"] = rotateRadians;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__compose__ = __webpack_require__("./node_modules/d3-geo-projection/node_modules/d3-geo/src/compose.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__math__ = __webpack_require__("./node_modules/d3-geo-projection/node_modules/d3-geo/src/math.js");



function rotationIdentity(lambda, phi) {
  return [lambda > __WEBPACK_IMPORTED_MODULE_1__math__["o" /* pi */] ? lambda - __WEBPACK_IMPORTED_MODULE_1__math__["w" /* tau */] : lambda < -__WEBPACK_IMPORTED_MODULE_1__math__["o" /* pi */] ? lambda + __WEBPACK_IMPORTED_MODULE_1__math__["w" /* tau */] : lambda, phi];
}

rotationIdentity.invert = rotationIdentity;

function rotateRadians(deltaLambda, deltaPhi, deltaGamma) {
  return (deltaLambda %= __WEBPACK_IMPORTED_MODULE_1__math__["w" /* tau */]) ? (deltaPhi || deltaGamma ? Object(__WEBPACK_IMPORTED_MODULE_0__compose__["a" /* default */])(rotationLambda(deltaLambda), rotationPhiGamma(deltaPhi, deltaGamma))
    : rotationLambda(deltaLambda))
    : (deltaPhi || deltaGamma ? rotationPhiGamma(deltaPhi, deltaGamma)
    : rotationIdentity);
}

function forwardRotationLambda(deltaLambda) {
  return function(lambda, phi) {
    return lambda += deltaLambda, [lambda > __WEBPACK_IMPORTED_MODULE_1__math__["o" /* pi */] ? lambda - __WEBPACK_IMPORTED_MODULE_1__math__["w" /* tau */] : lambda < -__WEBPACK_IMPORTED_MODULE_1__math__["o" /* pi */] ? lambda + __WEBPACK_IMPORTED_MODULE_1__math__["w" /* tau */] : lambda, phi];
  };
}

function rotationLambda(deltaLambda) {
  var rotation = forwardRotationLambda(deltaLambda);
  rotation.invert = forwardRotationLambda(-deltaLambda);
  return rotation;
}

function rotationPhiGamma(deltaPhi, deltaGamma) {
  var cosDeltaPhi = Object(__WEBPACK_IMPORTED_MODULE_1__math__["g" /* cos */])(deltaPhi),
      sinDeltaPhi = Object(__WEBPACK_IMPORTED_MODULE_1__math__["t" /* sin */])(deltaPhi),
      cosDeltaGamma = Object(__WEBPACK_IMPORTED_MODULE_1__math__["g" /* cos */])(deltaGamma),
      sinDeltaGamma = Object(__WEBPACK_IMPORTED_MODULE_1__math__["t" /* sin */])(deltaGamma);

  function rotation(lambda, phi) {
    var cosPhi = Object(__WEBPACK_IMPORTED_MODULE_1__math__["g" /* cos */])(phi),
        x = Object(__WEBPACK_IMPORTED_MODULE_1__math__["g" /* cos */])(lambda) * cosPhi,
        y = Object(__WEBPACK_IMPORTED_MODULE_1__math__["t" /* sin */])(lambda) * cosPhi,
        z = Object(__WEBPACK_IMPORTED_MODULE_1__math__["t" /* sin */])(phi),
        k = z * cosDeltaPhi + x * sinDeltaPhi;
    return [
      Object(__WEBPACK_IMPORTED_MODULE_1__math__["e" /* atan2 */])(y * cosDeltaGamma - k * sinDeltaGamma, x * cosDeltaPhi - z * sinDeltaPhi),
      Object(__WEBPACK_IMPORTED_MODULE_1__math__["c" /* asin */])(k * cosDeltaGamma + y * sinDeltaGamma)
    ];
  }

  rotation.invert = function(lambda, phi) {
    var cosPhi = Object(__WEBPACK_IMPORTED_MODULE_1__math__["g" /* cos */])(phi),
        x = Object(__WEBPACK_IMPORTED_MODULE_1__math__["g" /* cos */])(lambda) * cosPhi,
        y = Object(__WEBPACK_IMPORTED_MODULE_1__math__["t" /* sin */])(lambda) * cosPhi,
        z = Object(__WEBPACK_IMPORTED_MODULE_1__math__["t" /* sin */])(phi),
        k = z * cosDeltaGamma - y * sinDeltaGamma;
    return [
      Object(__WEBPACK_IMPORTED_MODULE_1__math__["e" /* atan2 */])(y * cosDeltaGamma + z * sinDeltaGamma, x * cosDeltaPhi + k * sinDeltaPhi),
      Object(__WEBPACK_IMPORTED_MODULE_1__math__["c" /* asin */])(k * cosDeltaPhi - x * sinDeltaPhi)
    ];
  };

  return rotation;
}

/* harmony default export */ __webpack_exports__["a"] = (function(rotate) {
  rotate = rotateRadians(rotate[0] * __WEBPACK_IMPORTED_MODULE_1__math__["r" /* radians */], rotate[1] * __WEBPACK_IMPORTED_MODULE_1__math__["r" /* radians */], rotate.length > 2 ? rotate[2] * __WEBPACK_IMPORTED_MODULE_1__math__["r" /* radians */] : 0);

  function forward(coordinates) {
    coordinates = rotate(coordinates[0] * __WEBPACK_IMPORTED_MODULE_1__math__["r" /* radians */], coordinates[1] * __WEBPACK_IMPORTED_MODULE_1__math__["r" /* radians */]);
    return coordinates[0] *= __WEBPACK_IMPORTED_MODULE_1__math__["h" /* degrees */], coordinates[1] *= __WEBPACK_IMPORTED_MODULE_1__math__["h" /* degrees */], coordinates;
  }

  forward.invert = function(coordinates) {
    coordinates = rotate.invert(coordinates[0] * __WEBPACK_IMPORTED_MODULE_1__math__["r" /* radians */], coordinates[1] * __WEBPACK_IMPORTED_MODULE_1__math__["r" /* radians */]);
    return coordinates[0] *= __WEBPACK_IMPORTED_MODULE_1__math__["h" /* degrees */], coordinates[1] *= __WEBPACK_IMPORTED_MODULE_1__math__["h" /* degrees */], coordinates;
  };

  return forward;
});


/***/ }),

/***/ "./node_modules/d3-geo-projection/node_modules/d3-geo/src/stream.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
function streamGeometry(geometry, stream) {
  if (geometry && streamGeometryType.hasOwnProperty(geometry.type)) {
    streamGeometryType[geometry.type](geometry, stream);
  }
}

var streamObjectType = {
  Feature: function(object, stream) {
    streamGeometry(object.geometry, stream);
  },
  FeatureCollection: function(object, stream) {
    var features = object.features, i = -1, n = features.length;
    while (++i < n) streamGeometry(features[i].geometry, stream);
  }
};

var streamGeometryType = {
  Sphere: function(object, stream) {
    stream.sphere();
  },
  Point: function(object, stream) {
    object = object.coordinates;
    stream.point(object[0], object[1], object[2]);
  },
  MultiPoint: function(object, stream) {
    var coordinates = object.coordinates, i = -1, n = coordinates.length;
    while (++i < n) object = coordinates[i], stream.point(object[0], object[1], object[2]);
  },
  LineString: function(object, stream) {
    streamLine(object.coordinates, stream, 0);
  },
  MultiLineString: function(object, stream) {
    var coordinates = object.coordinates, i = -1, n = coordinates.length;
    while (++i < n) streamLine(coordinates[i], stream, 0);
  },
  Polygon: function(object, stream) {
    streamPolygon(object.coordinates, stream);
  },
  MultiPolygon: function(object, stream) {
    var coordinates = object.coordinates, i = -1, n = coordinates.length;
    while (++i < n) streamPolygon(coordinates[i], stream);
  },
  GeometryCollection: function(object, stream) {
    var geometries = object.geometries, i = -1, n = geometries.length;
    while (++i < n) streamGeometry(geometries[i], stream);
  }
};

function streamLine(coordinates, stream, closed) {
  var i = -1, n = coordinates.length - closed, coordinate;
  stream.lineStart();
  while (++i < n) coordinate = coordinates[i], stream.point(coordinate[0], coordinate[1], coordinate[2]);
  stream.lineEnd();
}

function streamPolygon(coordinates, stream) {
  var i = -1, n = coordinates.length;
  stream.polygonStart();
  while (++i < n) streamLine(coordinates[i], stream, 1);
  stream.polygonEnd();
}

/* harmony default export */ __webpack_exports__["a"] = (function(object, stream) {
  if (object && streamObjectType.hasOwnProperty(object.type)) {
    streamObjectType[object.type](object, stream);
  } else {
    streamGeometry(object, stream);
  }
});


/***/ }),

/***/ "./node_modules/d3-geo-projection/node_modules/d3-geo/src/transform.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = transformer;
/* unused harmony default export */ var _unused_webpack_default_export = (function(methods) {
  return {
    stream: transformer(methods)
  };
});

function transformer(methods) {
  return function(stream) {
    var s = new TransformStream;
    for (var key in methods) s[key] = methods[key];
    s.stream = stream;
    return s;
  };
}

function TransformStream() {}

TransformStream.prototype = {
  constructor: TransformStream,
  point: function(x, y) { this.stream.point(x, y); },
  sphere: function() { this.stream.sphere(); },
  lineStart: function() { this.stream.lineStart(); },
  lineEnd: function() { this.stream.lineEnd(); },
  polygonStart: function() { this.stream.polygonStart(); },
  polygonEnd: function() { this.stream.polygonEnd(); }
};


/***/ }),

/***/ "./node_modules/d3-geo-projection/src/airy.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export airyRaw */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_d3_geo__ = __webpack_require__("./node_modules/d3-geo-projection/node_modules/d3-geo/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__math__ = __webpack_require__("./node_modules/d3-geo-projection/src/math.js");



function airyRaw(beta) {
  var tanBeta_2 = Object(__WEBPACK_IMPORTED_MODULE_1__math__["F" /* tan */])(beta / 2),
      b = 2 * Object(__WEBPACK_IMPORTED_MODULE_1__math__["p" /* log */])(Object(__WEBPACK_IMPORTED_MODULE_1__math__["h" /* cos */])(beta / 2)) / (tanBeta_2 * tanBeta_2);

  function forward(x, y) {
    var cosx = Object(__WEBPACK_IMPORTED_MODULE_1__math__["h" /* cos */])(x),
        cosy = Object(__WEBPACK_IMPORTED_MODULE_1__math__["h" /* cos */])(y),
        siny = Object(__WEBPACK_IMPORTED_MODULE_1__math__["y" /* sin */])(y),
        cosz = cosy * cosx,
        k = -((1 - cosz ? Object(__WEBPACK_IMPORTED_MODULE_1__math__["p" /* log */])((1 + cosz) / 2) / (1 - cosz) : -0.5) + b / (1 + cosz));
    return [k * cosy * Object(__WEBPACK_IMPORTED_MODULE_1__math__["y" /* sin */])(x), k * siny];
  }

  forward.invert = function(x, y) {
    var r = Object(__WEBPACK_IMPORTED_MODULE_1__math__["B" /* sqrt */])(x * x + y * y),
        z = -beta / 2,
        i = 50, delta;
    if (!r) return [0, 0];
    do {
      var z_2 = z / 2,
          cosz_2 = Object(__WEBPACK_IMPORTED_MODULE_1__math__["h" /* cos */])(z_2),
          sinz_2 = Object(__WEBPACK_IMPORTED_MODULE_1__math__["y" /* sin */])(z_2),
          tanz_2 = Object(__WEBPACK_IMPORTED_MODULE_1__math__["F" /* tan */])(z_2),
          lnsecz_2 = Object(__WEBPACK_IMPORTED_MODULE_1__math__["p" /* log */])(1 / cosz_2);
      z -= delta = (2 / tanz_2 * lnsecz_2 - b * tanz_2 - r) / (-lnsecz_2 / (sinz_2 * sinz_2) + 1 - b / (2 * cosz_2 * cosz_2));
    } while (Object(__WEBPACK_IMPORTED_MODULE_1__math__["a" /* abs */])(delta) > __WEBPACK_IMPORTED_MODULE_1__math__["k" /* epsilon */] && --i > 0);
    var sinz = Object(__WEBPACK_IMPORTED_MODULE_1__math__["y" /* sin */])(z);
    return [Object(__WEBPACK_IMPORTED_MODULE_1__math__["g" /* atan2 */])(x * sinz, r * Object(__WEBPACK_IMPORTED_MODULE_1__math__["h" /* cos */])(z)), Object(__WEBPACK_IMPORTED_MODULE_1__math__["e" /* asin */])(y * sinz / r)];
  };

  return forward;
}

/* unused harmony default export */ var _unused_webpack_default_export = (function() {
  var beta = __WEBPACK_IMPORTED_MODULE_1__math__["o" /* halfPi */],
      m = Object(__WEBPACK_IMPORTED_MODULE_0_d3_geo__["l" /* geoProjectionMutator */])(airyRaw),
      p = m(beta);

  p.radius = function(_) {
    return arguments.length ? m(beta = _ * __WEBPACK_IMPORTED_MODULE_1__math__["v" /* radians */]) : beta * __WEBPACK_IMPORTED_MODULE_1__math__["j" /* degrees */];
  };

  return p
      .scale(179.976)
      .clipAngle(147);
});


/***/ }),

/***/ "./node_modules/d3-geo-projection/src/aitoff.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = aitoffRaw;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_d3_geo__ = __webpack_require__("./node_modules/d3-geo-projection/node_modules/d3-geo/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__math__ = __webpack_require__("./node_modules/d3-geo-projection/src/math.js");



function aitoffRaw(x, y) {
  var cosy = Object(__WEBPACK_IMPORTED_MODULE_1__math__["h" /* cos */])(y), sincia = Object(__WEBPACK_IMPORTED_MODULE_1__math__["z" /* sinci */])(Object(__WEBPACK_IMPORTED_MODULE_1__math__["b" /* acos */])(cosy * Object(__WEBPACK_IMPORTED_MODULE_1__math__["h" /* cos */])(x /= 2)));
  return [2 * cosy * Object(__WEBPACK_IMPORTED_MODULE_1__math__["y" /* sin */])(x) * sincia, Object(__WEBPACK_IMPORTED_MODULE_1__math__["y" /* sin */])(y) * sincia];
}

// Abort if [x, y] is not within an ellipse centered at [0, 0] with
// semi-major axis pi and semi-minor axis pi/2.
aitoffRaw.invert = function(x, y) {
  if (x * x + 4 * y * y > __WEBPACK_IMPORTED_MODULE_1__math__["s" /* pi */] * __WEBPACK_IMPORTED_MODULE_1__math__["s" /* pi */] + __WEBPACK_IMPORTED_MODULE_1__math__["k" /* epsilon */]) return;
  var x1 = x, y1 = y, i = 25;
  do {
    var sinx = Object(__WEBPACK_IMPORTED_MODULE_1__math__["y" /* sin */])(x1),
        sinx_2 = Object(__WEBPACK_IMPORTED_MODULE_1__math__["y" /* sin */])(x1 / 2),
        cosx_2 = Object(__WEBPACK_IMPORTED_MODULE_1__math__["h" /* cos */])(x1 / 2),
        siny = Object(__WEBPACK_IMPORTED_MODULE_1__math__["y" /* sin */])(y1),
        cosy = Object(__WEBPACK_IMPORTED_MODULE_1__math__["h" /* cos */])(y1),
        sin_2y = Object(__WEBPACK_IMPORTED_MODULE_1__math__["y" /* sin */])(2 * y1),
        sin2y = siny * siny,
        cos2y = cosy * cosy,
        sin2x_2 = sinx_2 * sinx_2,
        c = 1 - cos2y * cosx_2 * cosx_2,
        e = c ? Object(__WEBPACK_IMPORTED_MODULE_1__math__["b" /* acos */])(cosy * cosx_2) * Object(__WEBPACK_IMPORTED_MODULE_1__math__["B" /* sqrt */])(f = 1 / c) : f = 0,
        f,
        fx = 2 * e * cosy * sinx_2 - x,
        fy = e * siny - y,
        dxdx = f * (cos2y * sin2x_2 + e * cosy * cosx_2 * sin2y),
        dxdy = f * (0.5 * sinx * sin_2y - e * 2 * siny * sinx_2),
        dydx = f * 0.25 * (sin_2y * sinx_2 - e * siny * cos2y * sinx),
        dydy = f * (sin2y * cosx_2 + e * sin2x_2 * cosy),
        z = dxdy * dydx - dydy * dxdx;
    if (!z) break;
    var dx = (fy * dxdy - fx * dydy) / z,
        dy = (fx * dydx - fy * dxdx) / z;
    x1 -= dx, y1 -= dy;
  } while ((Object(__WEBPACK_IMPORTED_MODULE_1__math__["a" /* abs */])(dx) > __WEBPACK_IMPORTED_MODULE_1__math__["k" /* epsilon */] || Object(__WEBPACK_IMPORTED_MODULE_1__math__["a" /* abs */])(dy) > __WEBPACK_IMPORTED_MODULE_1__math__["k" /* epsilon */]) && --i > 0);
  return [x1, y1];
};

/* unused harmony default export */ var _unused_webpack_default_export = (function() {
  return Object(__WEBPACK_IMPORTED_MODULE_0_d3_geo__["k" /* geoProjection */])(aitoffRaw)
      .scale(152.63);
});


/***/ }),

/***/ "./node_modules/d3-geo-projection/src/armadillo.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export armadilloRaw */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_d3_geo__ = __webpack_require__("./node_modules/d3-geo-projection/node_modules/d3-geo/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__math__ = __webpack_require__("./node_modules/d3-geo-projection/src/math.js");



function armadilloRaw(phi0) {
  var sinPhi0 = Object(__WEBPACK_IMPORTED_MODULE_1__math__["y" /* sin */])(phi0),
      cosPhi0 = Object(__WEBPACK_IMPORTED_MODULE_1__math__["h" /* cos */])(phi0),
      sPhi0 = phi0 >= 0 ? 1 : -1,
      tanPhi0 = Object(__WEBPACK_IMPORTED_MODULE_1__math__["F" /* tan */])(sPhi0 * phi0),
      k = (1 + sinPhi0 - cosPhi0) / 2;

  function forward(lambda, phi) {
    var cosPhi = Object(__WEBPACK_IMPORTED_MODULE_1__math__["h" /* cos */])(phi),
        cosLambda = Object(__WEBPACK_IMPORTED_MODULE_1__math__["h" /* cos */])(lambda /= 2);
    return [
      (1 + cosPhi) * Object(__WEBPACK_IMPORTED_MODULE_1__math__["y" /* sin */])(lambda),
      (sPhi0 * phi > -Object(__WEBPACK_IMPORTED_MODULE_1__math__["g" /* atan2 */])(cosLambda, tanPhi0) - 1e-3 ? 0 : -sPhi0 * 10) + k + Object(__WEBPACK_IMPORTED_MODULE_1__math__["y" /* sin */])(phi) * cosPhi0 - (1 + cosPhi) * sinPhi0 * cosLambda // TODO D3 core should allow null or [NaN, NaN] to be returned.
    ];
  }

  forward.invert = function(x, y) {
    var lambda = 0,
        phi = 0,
        i = 50;
    do {
      var cosLambda = Object(__WEBPACK_IMPORTED_MODULE_1__math__["h" /* cos */])(lambda),
          sinLambda = Object(__WEBPACK_IMPORTED_MODULE_1__math__["y" /* sin */])(lambda),
          cosPhi = Object(__WEBPACK_IMPORTED_MODULE_1__math__["h" /* cos */])(phi),
          sinPhi = Object(__WEBPACK_IMPORTED_MODULE_1__math__["y" /* sin */])(phi),
          A = 1 + cosPhi,
          fx = A * sinLambda - x,
          fy = k + sinPhi * cosPhi0 - A * sinPhi0 * cosLambda - y,
          dxdLambda = A * cosLambda / 2,
          dxdPhi = -sinLambda * sinPhi,
          dydLambda = sinPhi0 * A * sinLambda / 2,
          dydPhi = cosPhi0 * cosPhi + sinPhi0 * cosLambda * sinPhi,
          denominator = dxdPhi * dydLambda - dydPhi * dxdLambda,
          dLambda = (fy * dxdPhi - fx * dydPhi) / denominator / 2,
          dPhi = (fx * dydLambda - fy * dxdLambda) / denominator;
      lambda -= dLambda, phi -= dPhi;
    } while ((Object(__WEBPACK_IMPORTED_MODULE_1__math__["a" /* abs */])(dLambda) > __WEBPACK_IMPORTED_MODULE_1__math__["k" /* epsilon */] || Object(__WEBPACK_IMPORTED_MODULE_1__math__["a" /* abs */])(dPhi) > __WEBPACK_IMPORTED_MODULE_1__math__["k" /* epsilon */]) && --i > 0);
    return sPhi0 * phi > -Object(__WEBPACK_IMPORTED_MODULE_1__math__["g" /* atan2 */])(Object(__WEBPACK_IMPORTED_MODULE_1__math__["h" /* cos */])(lambda), tanPhi0) - 1e-3 ? [lambda * 2, phi] : null;
  };

  return forward;
}

/* unused harmony default export */ var _unused_webpack_default_export = (function() {
  var phi0 = 20 * __WEBPACK_IMPORTED_MODULE_1__math__["v" /* radians */],
      sPhi0 = phi0 >= 0 ? 1 : -1,
      tanPhi0 = Object(__WEBPACK_IMPORTED_MODULE_1__math__["F" /* tan */])(sPhi0 * phi0),
      m = Object(__WEBPACK_IMPORTED_MODULE_0_d3_geo__["l" /* geoProjectionMutator */])(armadilloRaw),
      p = m(phi0),
      stream_ = p.stream;

  p.parallel = function(_) {
    if (!arguments.length) return phi0 * __WEBPACK_IMPORTED_MODULE_1__math__["j" /* degrees */];
    tanPhi0 = Object(__WEBPACK_IMPORTED_MODULE_1__math__["F" /* tan */])((sPhi0 = (phi0 = _ * __WEBPACK_IMPORTED_MODULE_1__math__["v" /* radians */]) >= 0 ? 1 : -1) * phi0);
    return m(phi0);
  };

  p.stream = function(stream) {
    var rotate = p.rotate(),
        rotateStream = stream_(stream),
        sphereStream = (p.rotate([0, 0]), stream_(stream));
    p.rotate(rotate);
    rotateStream.sphere = function() {
      sphereStream.polygonStart(), sphereStream.lineStart();
      for (var lambda = sPhi0 * -180; sPhi0 * lambda < 180; lambda += sPhi0 * 90) sphereStream.point(lambda, sPhi0 * 90);
      while (sPhi0 * (lambda -= phi0) >= -180) { // TODO precision?
        sphereStream.point(lambda, sPhi0 * -Object(__WEBPACK_IMPORTED_MODULE_1__math__["g" /* atan2 */])(Object(__WEBPACK_IMPORTED_MODULE_1__math__["h" /* cos */])(lambda * __WEBPACK_IMPORTED_MODULE_1__math__["v" /* radians */] / 2), tanPhi0) * __WEBPACK_IMPORTED_MODULE_1__math__["j" /* degrees */]);
      }
      sphereStream.lineEnd(), sphereStream.polygonEnd();
    };
    return rotateStream;
  };

  return p
      .scale(218.695)
      .center([0, 28.0974]);
});


/***/ }),

/***/ "./node_modules/d3-geo-projection/src/august.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = augustRaw;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_d3_geo__ = __webpack_require__("./node_modules/d3-geo-projection/node_modules/d3-geo/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__math__ = __webpack_require__("./node_modules/d3-geo-projection/src/math.js");



function augustRaw(lambda, phi) {
  var tanPhi = Object(__WEBPACK_IMPORTED_MODULE_1__math__["F" /* tan */])(phi / 2),
      k = Object(__WEBPACK_IMPORTED_MODULE_1__math__["B" /* sqrt */])(1 - tanPhi * tanPhi),
      c = 1 + k * Object(__WEBPACK_IMPORTED_MODULE_1__math__["h" /* cos */])(lambda /= 2),
      x = Object(__WEBPACK_IMPORTED_MODULE_1__math__["y" /* sin */])(lambda) * k / c,
      y = tanPhi / c,
      x2 = x * x,
      y2 = y * y;
  return [
    4 / 3 * x * (3 + x2 - 3 * y2),
    4 / 3 * y * (3 + 3 * x2 - y2)
  ];
}

augustRaw.invert = function(x, y) {
  x *= 3 / 8, y *= 3 / 8;
  if (!x && Object(__WEBPACK_IMPORTED_MODULE_1__math__["a" /* abs */])(y) > 1) return null;
  var x2 = x * x,
      y2 = y * y,
      s = 1 + x2 + y2,
      sin3Eta = Object(__WEBPACK_IMPORTED_MODULE_1__math__["B" /* sqrt */])((s - Object(__WEBPACK_IMPORTED_MODULE_1__math__["B" /* sqrt */])(s * s - 4 * y * y)) / 2),
      eta = Object(__WEBPACK_IMPORTED_MODULE_1__math__["e" /* asin */])(sin3Eta) / 3,
      xi = sin3Eta ? Object(__WEBPACK_IMPORTED_MODULE_1__math__["c" /* arcosh */])(Object(__WEBPACK_IMPORTED_MODULE_1__math__["a" /* abs */])(y / sin3Eta)) / 3 : Object(__WEBPACK_IMPORTED_MODULE_1__math__["d" /* arsinh */])(Object(__WEBPACK_IMPORTED_MODULE_1__math__["a" /* abs */])(x)) / 3,
      cosEta = Object(__WEBPACK_IMPORTED_MODULE_1__math__["h" /* cos */])(eta),
      coshXi = Object(__WEBPACK_IMPORTED_MODULE_1__math__["i" /* cosh */])(xi),
      d = coshXi * coshXi - cosEta * cosEta;
  return [
    Object(__WEBPACK_IMPORTED_MODULE_1__math__["x" /* sign */])(x) * 2 * Object(__WEBPACK_IMPORTED_MODULE_1__math__["g" /* atan2 */])(Object(__WEBPACK_IMPORTED_MODULE_1__math__["A" /* sinh */])(xi) * cosEta, 0.25 - d),
    Object(__WEBPACK_IMPORTED_MODULE_1__math__["x" /* sign */])(y) * 2 * Object(__WEBPACK_IMPORTED_MODULE_1__math__["g" /* atan2 */])(coshXi * Object(__WEBPACK_IMPORTED_MODULE_1__math__["y" /* sin */])(eta), 0.25 + d)
  ];
};

/* unused harmony default export */ var _unused_webpack_default_export = (function() {
  return Object(__WEBPACK_IMPORTED_MODULE_0_d3_geo__["k" /* geoProjection */])(augustRaw)
      .scale(66.1603);
});


/***/ }),

/***/ "./node_modules/d3-geo-projection/src/baker.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export bakerRaw */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_d3_geo__ = __webpack_require__("./node_modules/d3-geo-projection/node_modules/d3-geo/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__math__ = __webpack_require__("./node_modules/d3-geo-projection/src/math.js");



var sqrt8 = Object(__WEBPACK_IMPORTED_MODULE_1__math__["B" /* sqrt */])(8),
    phi0 = Object(__WEBPACK_IMPORTED_MODULE_1__math__["p" /* log */])(1 + __WEBPACK_IMPORTED_MODULE_1__math__["D" /* sqrt2 */]);

function bakerRaw(lambda, phi) {
  var phi0 = Object(__WEBPACK_IMPORTED_MODULE_1__math__["a" /* abs */])(phi);
  return phi0 < __WEBPACK_IMPORTED_MODULE_1__math__["u" /* quarterPi */]
      ? [lambda, Object(__WEBPACK_IMPORTED_MODULE_1__math__["p" /* log */])(Object(__WEBPACK_IMPORTED_MODULE_1__math__["F" /* tan */])(__WEBPACK_IMPORTED_MODULE_1__math__["u" /* quarterPi */] + phi / 2))]
      : [lambda * Object(__WEBPACK_IMPORTED_MODULE_1__math__["h" /* cos */])(phi0) * (2 * __WEBPACK_IMPORTED_MODULE_1__math__["D" /* sqrt2 */] - 1 / Object(__WEBPACK_IMPORTED_MODULE_1__math__["y" /* sin */])(phi0)), Object(__WEBPACK_IMPORTED_MODULE_1__math__["x" /* sign */])(phi) * (2 * __WEBPACK_IMPORTED_MODULE_1__math__["D" /* sqrt2 */] * (phi0 - __WEBPACK_IMPORTED_MODULE_1__math__["u" /* quarterPi */]) - Object(__WEBPACK_IMPORTED_MODULE_1__math__["p" /* log */])(Object(__WEBPACK_IMPORTED_MODULE_1__math__["F" /* tan */])(phi0 / 2)))];
}

bakerRaw.invert = function(x, y) {
  if ((y0 = Object(__WEBPACK_IMPORTED_MODULE_1__math__["a" /* abs */])(y)) < phi0) return [x, 2 * Object(__WEBPACK_IMPORTED_MODULE_1__math__["f" /* atan */])(Object(__WEBPACK_IMPORTED_MODULE_1__math__["m" /* exp */])(y)) - __WEBPACK_IMPORTED_MODULE_1__math__["o" /* halfPi */]];
  var phi = __WEBPACK_IMPORTED_MODULE_1__math__["u" /* quarterPi */], i = 25, delta, y0;
  do {
    var cosPhi_2 = Object(__WEBPACK_IMPORTED_MODULE_1__math__["h" /* cos */])(phi / 2), tanPhi_2 = Object(__WEBPACK_IMPORTED_MODULE_1__math__["F" /* tan */])(phi / 2);
    phi -= delta = (sqrt8 * (phi - __WEBPACK_IMPORTED_MODULE_1__math__["u" /* quarterPi */]) - Object(__WEBPACK_IMPORTED_MODULE_1__math__["p" /* log */])(tanPhi_2) - y0) / (sqrt8 - cosPhi_2 * cosPhi_2 / (2 * tanPhi_2));
  } while (Object(__WEBPACK_IMPORTED_MODULE_1__math__["a" /* abs */])(delta) > __WEBPACK_IMPORTED_MODULE_1__math__["l" /* epsilon2 */] && --i > 0);
  return [x / (Object(__WEBPACK_IMPORTED_MODULE_1__math__["h" /* cos */])(phi) * (sqrt8 - 1 / Object(__WEBPACK_IMPORTED_MODULE_1__math__["y" /* sin */])(phi))), Object(__WEBPACK_IMPORTED_MODULE_1__math__["x" /* sign */])(y) * phi];
};

/* unused harmony default export */ var _unused_webpack_default_export = (function() {
  return Object(__WEBPACK_IMPORTED_MODULE_0_d3_geo__["k" /* geoProjection */])(bakerRaw)
      .scale(112.314);
});


/***/ }),

/***/ "./node_modules/d3-geo-projection/src/berghaus.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export berghausRaw */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_d3_geo__ = __webpack_require__("./node_modules/d3-geo-projection/node_modules/d3-geo/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__math__ = __webpack_require__("./node_modules/d3-geo-projection/src/math.js");



function berghausRaw(lobes) {
  var k = 2 * __WEBPACK_IMPORTED_MODULE_1__math__["s" /* pi */] / lobes;

  function forward(lambda, phi) {
    var p = Object(__WEBPACK_IMPORTED_MODULE_0_d3_geo__["b" /* geoAzimuthalEquidistantRaw */])(lambda, phi);
    if (Object(__WEBPACK_IMPORTED_MODULE_1__math__["a" /* abs */])(lambda) > __WEBPACK_IMPORTED_MODULE_1__math__["o" /* halfPi */]) { // back hemisphere
      var theta = Object(__WEBPACK_IMPORTED_MODULE_1__math__["g" /* atan2 */])(p[1], p[0]),
          r = Object(__WEBPACK_IMPORTED_MODULE_1__math__["B" /* sqrt */])(p[0] * p[0] + p[1] * p[1]),
          theta0 = k * Object(__WEBPACK_IMPORTED_MODULE_1__math__["w" /* round */])((theta - __WEBPACK_IMPORTED_MODULE_1__math__["o" /* halfPi */]) / k) + __WEBPACK_IMPORTED_MODULE_1__math__["o" /* halfPi */],
          alpha = Object(__WEBPACK_IMPORTED_MODULE_1__math__["g" /* atan2 */])(Object(__WEBPACK_IMPORTED_MODULE_1__math__["y" /* sin */])(theta -= theta0), 2 - Object(__WEBPACK_IMPORTED_MODULE_1__math__["h" /* cos */])(theta)); // angle relative to lobe end
      theta = theta0 + Object(__WEBPACK_IMPORTED_MODULE_1__math__["e" /* asin */])(__WEBPACK_IMPORTED_MODULE_1__math__["s" /* pi */] / r * Object(__WEBPACK_IMPORTED_MODULE_1__math__["y" /* sin */])(alpha)) - alpha;
      p[0] = r * Object(__WEBPACK_IMPORTED_MODULE_1__math__["h" /* cos */])(theta);
      p[1] = r * Object(__WEBPACK_IMPORTED_MODULE_1__math__["y" /* sin */])(theta);
    }
    return p;
  }

  forward.invert = function(x, y) {
    var r = Object(__WEBPACK_IMPORTED_MODULE_1__math__["B" /* sqrt */])(x * x + y * y);
    if (r > __WEBPACK_IMPORTED_MODULE_1__math__["o" /* halfPi */]) {
      var theta = Object(__WEBPACK_IMPORTED_MODULE_1__math__["g" /* atan2 */])(y, x),
          theta0 = k * Object(__WEBPACK_IMPORTED_MODULE_1__math__["w" /* round */])((theta - __WEBPACK_IMPORTED_MODULE_1__math__["o" /* halfPi */]) / k) + __WEBPACK_IMPORTED_MODULE_1__math__["o" /* halfPi */],
          s = theta > theta0 ? -1 : 1,
          A = r * Object(__WEBPACK_IMPORTED_MODULE_1__math__["h" /* cos */])(theta0 - theta),
          cotAlpha = 1 / Object(__WEBPACK_IMPORTED_MODULE_1__math__["F" /* tan */])(s * Object(__WEBPACK_IMPORTED_MODULE_1__math__["b" /* acos */])((A - __WEBPACK_IMPORTED_MODULE_1__math__["s" /* pi */]) / Object(__WEBPACK_IMPORTED_MODULE_1__math__["B" /* sqrt */])(__WEBPACK_IMPORTED_MODULE_1__math__["s" /* pi */] * (__WEBPACK_IMPORTED_MODULE_1__math__["s" /* pi */] - 2 * A) + r * r)));
      theta = theta0 + 2 * Object(__WEBPACK_IMPORTED_MODULE_1__math__["f" /* atan */])((cotAlpha + s * Object(__WEBPACK_IMPORTED_MODULE_1__math__["B" /* sqrt */])(cotAlpha * cotAlpha - 3)) / 3);
      x = r * Object(__WEBPACK_IMPORTED_MODULE_1__math__["h" /* cos */])(theta), y = r * Object(__WEBPACK_IMPORTED_MODULE_1__math__["y" /* sin */])(theta);
    }
    return __WEBPACK_IMPORTED_MODULE_0_d3_geo__["b" /* geoAzimuthalEquidistantRaw */].invert(x, y);
  };

  return forward;
}

/* unused harmony default export */ var _unused_webpack_default_export = (function() {
  var lobes = 5,
      m = Object(__WEBPACK_IMPORTED_MODULE_0_d3_geo__["l" /* geoProjectionMutator */])(berghausRaw),
      p = m(lobes),
      projectionStream = p.stream,
      epsilon = 1e-2,
      cr = -Object(__WEBPACK_IMPORTED_MODULE_1__math__["h" /* cos */])(epsilon * __WEBPACK_IMPORTED_MODULE_1__math__["v" /* radians */]),
      sr = Object(__WEBPACK_IMPORTED_MODULE_1__math__["y" /* sin */])(epsilon * __WEBPACK_IMPORTED_MODULE_1__math__["v" /* radians */]);

  p.lobes = function(_) {
    return arguments.length ? m(lobes = +_) : lobes;
  };

  p.stream = function(stream) {
    var rotate = p.rotate(),
        rotateStream = projectionStream(stream),
        sphereStream = (p.rotate([0, 0]), projectionStream(stream));
    p.rotate(rotate);
    rotateStream.sphere = function() {
      sphereStream.polygonStart(), sphereStream.lineStart();
      for (var i = 0, delta = 360 / lobes, delta0 = 2 * __WEBPACK_IMPORTED_MODULE_1__math__["s" /* pi */] / lobes, phi = 90 - 180 / lobes, phi0 = __WEBPACK_IMPORTED_MODULE_1__math__["o" /* halfPi */]; i < lobes; ++i, phi -= delta, phi0 -= delta0) {
        sphereStream.point(Object(__WEBPACK_IMPORTED_MODULE_1__math__["g" /* atan2 */])(sr * Object(__WEBPACK_IMPORTED_MODULE_1__math__["h" /* cos */])(phi0), cr) * __WEBPACK_IMPORTED_MODULE_1__math__["j" /* degrees */], Object(__WEBPACK_IMPORTED_MODULE_1__math__["e" /* asin */])(sr * Object(__WEBPACK_IMPORTED_MODULE_1__math__["y" /* sin */])(phi0)) * __WEBPACK_IMPORTED_MODULE_1__math__["j" /* degrees */]);
        if (phi < -90) {
          sphereStream.point(-90, -180 - phi - epsilon);
          sphereStream.point(-90, -180 - phi + epsilon);
        } else {
          sphereStream.point(90, phi + epsilon);
          sphereStream.point(90, phi - epsilon);
        }
      }
      sphereStream.lineEnd(), sphereStream.polygonEnd();
    };
    return rotateStream;
  };

  return p
      .scale(87.8076)
      .center([0, 17.1875])
      .clipAngle(180 - 1e-3);
});


/***/ }),

/***/ "./node_modules/d3-geo-projection/src/bertin.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export bertin1953Raw */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_d3_geo__ = __webpack_require__("./node_modules/d3-geo-projection/node_modules/d3-geo/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__hammer__ = __webpack_require__("./node_modules/d3-geo-projection/src/hammer.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__math__ = __webpack_require__("./node_modules/d3-geo-projection/src/math.js");




// Bertin 1953 as a modified Briesemeister
// https://bl.ocks.org/Fil/5b9ee9636dfb6ffa53443c9006beb642
function bertin1953Raw() {
  var hammer = Object(__WEBPACK_IMPORTED_MODULE_1__hammer__["a" /* hammerRaw */])(1.68, 2),
      fu = 1.4, k = 12;

  return function(lambda, phi) {

    if (lambda + phi < -fu) {
      var u = (lambda - phi + 1.6) * (lambda + phi + fu) / 8;
      lambda += u;
      phi -= 0.8 * u * Object(__WEBPACK_IMPORTED_MODULE_2__math__["y" /* sin */])(phi + __WEBPACK_IMPORTED_MODULE_2__math__["s" /* pi */] / 2);
    }

    var r = hammer(lambda, phi);

    var d = (1 - Object(__WEBPACK_IMPORTED_MODULE_2__math__["h" /* cos */])(lambda * phi)) / k;

    if (r[1] < 0) {
      r[0] *= 1 + d;
    }
    if (r[1] > 0) {
      r[1] *= 1 + d / 1.5 * r[0] * r[0];
    }

    return r;
  };
}

/* unused harmony default export */ var _unused_webpack_default_export = (function() {
  var p = Object(__WEBPACK_IMPORTED_MODULE_0_d3_geo__["k" /* geoProjection */])(bertin1953Raw());

  p.rotate([-16.5, -42]);
  delete p.rotate;

  return p
    .scale(176.57)
    .center([7.93, 0.09]);
});


/***/ }),

/***/ "./node_modules/d3-geo-projection/src/boggs.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = boggsRaw;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_d3_geo__ = __webpack_require__("./node_modules/d3-geo-projection/node_modules/d3-geo/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mollweide__ = __webpack_require__("./node_modules/d3-geo-projection/src/mollweide.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__math__ = __webpack_require__("./node_modules/d3-geo-projection/src/math.js");




var k = 2.00276,
    w = 1.11072;

function boggsRaw(lambda, phi) {
  var theta = Object(__WEBPACK_IMPORTED_MODULE_1__mollweide__["b" /* mollweideBromleyTheta */])(__WEBPACK_IMPORTED_MODULE_2__math__["s" /* pi */], phi);
  return [k * lambda / (1 / Object(__WEBPACK_IMPORTED_MODULE_2__math__["h" /* cos */])(phi) + w / Object(__WEBPACK_IMPORTED_MODULE_2__math__["h" /* cos */])(theta)), (phi + __WEBPACK_IMPORTED_MODULE_2__math__["D" /* sqrt2 */] * Object(__WEBPACK_IMPORTED_MODULE_2__math__["y" /* sin */])(theta)) / k];
}

boggsRaw.invert = function(x, y) {
  var ky = k * y, theta = y < 0 ? -__WEBPACK_IMPORTED_MODULE_2__math__["u" /* quarterPi */] : __WEBPACK_IMPORTED_MODULE_2__math__["u" /* quarterPi */], i = 25, delta, phi;
  do {
    phi = ky - __WEBPACK_IMPORTED_MODULE_2__math__["D" /* sqrt2 */] * Object(__WEBPACK_IMPORTED_MODULE_2__math__["y" /* sin */])(theta);
    theta -= delta = (Object(__WEBPACK_IMPORTED_MODULE_2__math__["y" /* sin */])(2 * theta) + 2 * theta - __WEBPACK_IMPORTED_MODULE_2__math__["s" /* pi */] * Object(__WEBPACK_IMPORTED_MODULE_2__math__["y" /* sin */])(phi)) / (2 * Object(__WEBPACK_IMPORTED_MODULE_2__math__["h" /* cos */])(2 * theta) + 2 + __WEBPACK_IMPORTED_MODULE_2__math__["s" /* pi */] * Object(__WEBPACK_IMPORTED_MODULE_2__math__["h" /* cos */])(phi) * __WEBPACK_IMPORTED_MODULE_2__math__["D" /* sqrt2 */] * Object(__WEBPACK_IMPORTED_MODULE_2__math__["h" /* cos */])(theta));
  } while (Object(__WEBPACK_IMPORTED_MODULE_2__math__["a" /* abs */])(delta) > __WEBPACK_IMPORTED_MODULE_2__math__["k" /* epsilon */] && --i > 0);
  phi = ky - __WEBPACK_IMPORTED_MODULE_2__math__["D" /* sqrt2 */] * Object(__WEBPACK_IMPORTED_MODULE_2__math__["y" /* sin */])(theta);
  return [x * (1 / Object(__WEBPACK_IMPORTED_MODULE_2__math__["h" /* cos */])(phi) + w / Object(__WEBPACK_IMPORTED_MODULE_2__math__["h" /* cos */])(theta)) / k, phi];
};

/* unused harmony default export */ var _unused_webpack_default_export = (function() {
  return Object(__WEBPACK_IMPORTED_MODULE_0_d3_geo__["k" /* geoProjection */])(boggsRaw)
      .scale(160.857);
});


/***/ }),

/***/ "./node_modules/d3-geo-projection/src/bonne.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export bonneRaw */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__parallel1__ = __webpack_require__("./node_modules/d3-geo-projection/src/parallel1.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__math__ = __webpack_require__("./node_modules/d3-geo-projection/src/math.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__sinusoidal__ = __webpack_require__("./node_modules/d3-geo-projection/src/sinusoidal.js");




function bonneRaw(phi0) {
  if (!phi0) return __WEBPACK_IMPORTED_MODULE_2__sinusoidal__["a" /* sinusoidalRaw */];
  var cotPhi0 = 1 / Object(__WEBPACK_IMPORTED_MODULE_1__math__["F" /* tan */])(phi0);

  function forward(lambda, phi) {
    var rho = cotPhi0 + phi0 - phi,
        e = rho ? lambda * Object(__WEBPACK_IMPORTED_MODULE_1__math__["h" /* cos */])(phi) / rho : rho;
    return [rho * Object(__WEBPACK_IMPORTED_MODULE_1__math__["y" /* sin */])(e), cotPhi0 - rho * Object(__WEBPACK_IMPORTED_MODULE_1__math__["h" /* cos */])(e)];
  }

  forward.invert = function(x, y) {
    var rho = Object(__WEBPACK_IMPORTED_MODULE_1__math__["B" /* sqrt */])(x * x + (y = cotPhi0 - y) * y),
        phi = cotPhi0 + phi0 - rho;
    return [rho / Object(__WEBPACK_IMPORTED_MODULE_1__math__["h" /* cos */])(phi) * Object(__WEBPACK_IMPORTED_MODULE_1__math__["g" /* atan2 */])(x, y), phi];
  };

  return forward;
}

/* unused harmony default export */ var _unused_webpack_default_export = (function() {
  return Object(__WEBPACK_IMPORTED_MODULE_0__parallel1__["a" /* default */])(bonneRaw)
      .scale(123.082)
      .center([0, 26.1441])
      .parallel(45);
});


/***/ }),

/***/ "./node_modules/d3-geo-projection/src/bottomley.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export bottomleyRaw */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_d3_geo__ = __webpack_require__("./node_modules/d3-geo-projection/node_modules/d3-geo/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__math__ = __webpack_require__("./node_modules/d3-geo-projection/src/math.js");



function bottomleyRaw(sinPsi) {

  function forward(lambda, phi) {
    var rho = __WEBPACK_IMPORTED_MODULE_1__math__["o" /* halfPi */] - phi,
        eta = rho ? lambda * sinPsi * Object(__WEBPACK_IMPORTED_MODULE_1__math__["y" /* sin */])(rho) / rho : rho;
    return [rho * Object(__WEBPACK_IMPORTED_MODULE_1__math__["y" /* sin */])(eta) / sinPsi, __WEBPACK_IMPORTED_MODULE_1__math__["o" /* halfPi */] - rho * Object(__WEBPACK_IMPORTED_MODULE_1__math__["h" /* cos */])(eta)];
  }

  forward.invert = function(x, y) {
    var x1 = x * sinPsi,
        y1 = __WEBPACK_IMPORTED_MODULE_1__math__["o" /* halfPi */] - y,
        rho = Object(__WEBPACK_IMPORTED_MODULE_1__math__["B" /* sqrt */])(x1 * x1 + y1 * y1),
        eta = Object(__WEBPACK_IMPORTED_MODULE_1__math__["g" /* atan2 */])(x1, y1);
    return [(rho ? rho / Object(__WEBPACK_IMPORTED_MODULE_1__math__["y" /* sin */])(rho) : 1) * eta / sinPsi, __WEBPACK_IMPORTED_MODULE_1__math__["o" /* halfPi */] - rho];
  };

  return forward;
}

/* unused harmony default export */ var _unused_webpack_default_export = (function() {
  var sinPsi = 0.5,
      m = Object(__WEBPACK_IMPORTED_MODULE_0_d3_geo__["l" /* geoProjectionMutator */])(bottomleyRaw),
      p = m(sinPsi);

  p.fraction = function(_) {
    return arguments.length ? m(sinPsi = +_) : sinPsi;
  };

  return p
      .scale(158.837);
});


/***/ }),

/***/ "./node_modules/d3-geo-projection/src/bromley.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export bromleyRaw */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_d3_geo__ = __webpack_require__("./node_modules/d3-geo-projection/node_modules/d3-geo/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__math__ = __webpack_require__("./node_modules/d3-geo-projection/src/math.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__mollweide__ = __webpack_require__("./node_modules/d3-geo-projection/src/mollweide.js");




var bromleyRaw = Object(__WEBPACK_IMPORTED_MODULE_2__mollweide__["a" /* mollweideBromleyRaw */])(1, 4 / __WEBPACK_IMPORTED_MODULE_1__math__["s" /* pi */], __WEBPACK_IMPORTED_MODULE_1__math__["s" /* pi */]);

/* unused harmony default export */ var _unused_webpack_default_export = (function() {
  return Object(__WEBPACK_IMPORTED_MODULE_0_d3_geo__["k" /* geoProjection */])(bromleyRaw)
      .scale(152.63);
});


/***/ }),

/***/ "./node_modules/d3-geo-projection/src/chamberlin.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export chamberlinRaw */
/* unused harmony export chamberlinAfrica */
/* unused harmony export default */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_d3_geo__ = __webpack_require__("./node_modules/d3-geo-projection/node_modules/d3-geo/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__math__ = __webpack_require__("./node_modules/d3-geo-projection/src/math.js");



// Azimuthal distance.
function distance(dPhi, c1, s1, c2, s2, dLambda) {
  var cosdLambda = Object(__WEBPACK_IMPORTED_MODULE_1__math__["h" /* cos */])(dLambda), r;
  if (Object(__WEBPACK_IMPORTED_MODULE_1__math__["a" /* abs */])(dPhi) > 1 || Object(__WEBPACK_IMPORTED_MODULE_1__math__["a" /* abs */])(dLambda) > 1) {
    r = Object(__WEBPACK_IMPORTED_MODULE_1__math__["b" /* acos */])(s1 * s2 + c1 * c2 * cosdLambda);
  } else {
    var sindPhi = Object(__WEBPACK_IMPORTED_MODULE_1__math__["y" /* sin */])(dPhi / 2), sindLambda = Object(__WEBPACK_IMPORTED_MODULE_1__math__["y" /* sin */])(dLambda / 2);
    r = 2 * Object(__WEBPACK_IMPORTED_MODULE_1__math__["e" /* asin */])(Object(__WEBPACK_IMPORTED_MODULE_1__math__["B" /* sqrt */])(sindPhi * sindPhi + c1 * c2 * sindLambda * sindLambda));
  }
  return Object(__WEBPACK_IMPORTED_MODULE_1__math__["a" /* abs */])(r) > __WEBPACK_IMPORTED_MODULE_1__math__["k" /* epsilon */] ? [r, Object(__WEBPACK_IMPORTED_MODULE_1__math__["g" /* atan2 */])(c2 * Object(__WEBPACK_IMPORTED_MODULE_1__math__["y" /* sin */])(dLambda), c1 * s2 - s1 * c2 * cosdLambda)] : [0, 0];
}

// Angle opposite a, and contained between sides of lengths b and c.
function angle(b, c, a) {
  return Object(__WEBPACK_IMPORTED_MODULE_1__math__["b" /* acos */])((b * b + c * c - a * a) / (2 * b * c));
}

// Normalize longitude.
function longitude(lambda) {
  return lambda - 2 * __WEBPACK_IMPORTED_MODULE_1__math__["s" /* pi */] * Object(__WEBPACK_IMPORTED_MODULE_1__math__["n" /* floor */])((lambda + __WEBPACK_IMPORTED_MODULE_1__math__["s" /* pi */]) / (2 * __WEBPACK_IMPORTED_MODULE_1__math__["s" /* pi */]));
}

function chamberlinRaw(p0, p1, p2) {
  var points = [
    [p0[0], p0[1], Object(__WEBPACK_IMPORTED_MODULE_1__math__["y" /* sin */])(p0[1]), Object(__WEBPACK_IMPORTED_MODULE_1__math__["h" /* cos */])(p0[1])],
    [p1[0], p1[1], Object(__WEBPACK_IMPORTED_MODULE_1__math__["y" /* sin */])(p1[1]), Object(__WEBPACK_IMPORTED_MODULE_1__math__["h" /* cos */])(p1[1])],
    [p2[0], p2[1], Object(__WEBPACK_IMPORTED_MODULE_1__math__["y" /* sin */])(p2[1]), Object(__WEBPACK_IMPORTED_MODULE_1__math__["h" /* cos */])(p2[1])]
  ];

  for (var a = points[2], b, i = 0; i < 3; ++i, a = b) {
    b = points[i];
    a.v = distance(b[1] - a[1], a[3], a[2], b[3], b[2], b[0] - a[0]);
    a.point = [0, 0];
  }

  var beta0 = angle(points[0].v[0], points[2].v[0], points[1].v[0]),
      beta1 = angle(points[0].v[0], points[1].v[0], points[2].v[0]),
      beta2 = __WEBPACK_IMPORTED_MODULE_1__math__["s" /* pi */] - beta0;

  points[2].point[1] = 0;
  points[0].point[0] = -(points[1].point[0] = points[0].v[0] / 2);

  var mean = [
    points[2].point[0] = points[0].point[0] + points[2].v[0] * Object(__WEBPACK_IMPORTED_MODULE_1__math__["h" /* cos */])(beta0),
    2 * (points[0].point[1] = points[1].point[1] = points[2].v[0] * Object(__WEBPACK_IMPORTED_MODULE_1__math__["y" /* sin */])(beta0))
  ];

  function forward(lambda, phi) {
    var sinPhi = Object(__WEBPACK_IMPORTED_MODULE_1__math__["y" /* sin */])(phi),
        cosPhi = Object(__WEBPACK_IMPORTED_MODULE_1__math__["h" /* cos */])(phi),
        v = new Array(3), i;

    // Compute distance and azimuth from control points.
    for (i = 0; i < 3; ++i) {
      var p = points[i];
      v[i] = distance(phi - p[1], p[3], p[2], cosPhi, sinPhi, lambda - p[0]);
      if (!v[i][0]) return p.point;
      v[i][1] = longitude(v[i][1] - p.v[1]);
    }

    // Arithmetic mean of interception points.
    var point = mean.slice();
    for (i = 0; i < 3; ++i) {
      var j = i == 2 ? 0 : i + 1;
      var a = angle(points[i].v[0], v[i][0], v[j][0]);
      if (v[i][1] < 0) a = -a;

      if (!i) {
        point[0] += v[i][0] * Object(__WEBPACK_IMPORTED_MODULE_1__math__["h" /* cos */])(a);
        point[1] -= v[i][0] * Object(__WEBPACK_IMPORTED_MODULE_1__math__["y" /* sin */])(a);
      } else if (i == 1) {
        a = beta1 - a;
        point[0] -= v[i][0] * Object(__WEBPACK_IMPORTED_MODULE_1__math__["h" /* cos */])(a);
        point[1] -= v[i][0] * Object(__WEBPACK_IMPORTED_MODULE_1__math__["y" /* sin */])(a);
      } else {
        a = beta2 - a;
        point[0] += v[i][0] * Object(__WEBPACK_IMPORTED_MODULE_1__math__["h" /* cos */])(a);
        point[1] += v[i][0] * Object(__WEBPACK_IMPORTED_MODULE_1__math__["y" /* sin */])(a);
      }
    }

    point[0] /= 3, point[1] /= 3;
    return point;
  }

  return forward;
}

function pointRadians(p) {
  return p[0] *= __WEBPACK_IMPORTED_MODULE_1__math__["v" /* radians */], p[1] *= __WEBPACK_IMPORTED_MODULE_1__math__["v" /* radians */], p;
}

function chamberlinAfrica() {
  return chamberlin([0, 22], [45, 22], [22.5, -22])
      .scale(380)
      .center([22.5, 2]);
}

function chamberlin(p0, p1, p2) { // TODO order matters!
  var c = Object(__WEBPACK_IMPORTED_MODULE_0_d3_geo__["d" /* geoCentroid */])({type: "MultiPoint", coordinates: [p0, p1, p2]}),
      R = [-c[0], -c[1]],
      r = Object(__WEBPACK_IMPORTED_MODULE_0_d3_geo__["m" /* geoRotation */])(R),
      p = Object(__WEBPACK_IMPORTED_MODULE_0_d3_geo__["k" /* geoProjection */])(chamberlinRaw(pointRadians(r(p0)), pointRadians(r(p1)), pointRadians(r(p2)))).rotate(R),
      center = p.center;

  delete p.rotate;

  p.center = function(_) {
    return arguments.length ? center(r(_)) : r.invert(center());
  };

  return p
      .clipAngle(90);
}


/***/ }),

/***/ "./node_modules/d3-geo-projection/src/collignon.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = collignonRaw;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_d3_geo__ = __webpack_require__("./node_modules/d3-geo-projection/node_modules/d3-geo/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__math__ = __webpack_require__("./node_modules/d3-geo-projection/src/math.js");



function collignonRaw(lambda, phi) {
  var alpha = Object(__WEBPACK_IMPORTED_MODULE_1__math__["B" /* sqrt */])(1 - Object(__WEBPACK_IMPORTED_MODULE_1__math__["y" /* sin */])(phi));
  return [(2 / __WEBPACK_IMPORTED_MODULE_1__math__["E" /* sqrtPi */]) * lambda * alpha, __WEBPACK_IMPORTED_MODULE_1__math__["E" /* sqrtPi */] * (1 - alpha)];
}

collignonRaw.invert = function(x, y) {
  var lambda = (lambda = y / __WEBPACK_IMPORTED_MODULE_1__math__["E" /* sqrtPi */] - 1) * lambda;
  return [lambda > 0 ? x * Object(__WEBPACK_IMPORTED_MODULE_1__math__["B" /* sqrt */])(__WEBPACK_IMPORTED_MODULE_1__math__["s" /* pi */] / lambda) / 2 : 0, Object(__WEBPACK_IMPORTED_MODULE_1__math__["e" /* asin */])(1 - lambda)];
};

/* unused harmony default export */ var _unused_webpack_default_export = (function() {
  return Object(__WEBPACK_IMPORTED_MODULE_0_d3_geo__["k" /* geoProjection */])(collignonRaw)
      .scale(95.6464)
      .center([0, 30]);
});


/***/ }),

/***/ "./node_modules/d3-geo-projection/src/craig.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export craigRaw */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__math__ = __webpack_require__("./node_modules/d3-geo-projection/src/math.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__parallel1__ = __webpack_require__("./node_modules/d3-geo-projection/src/parallel1.js");



function craigRaw(phi0) {
  var tanPhi0 = Object(__WEBPACK_IMPORTED_MODULE_0__math__["F" /* tan */])(phi0);

  function forward(lambda, phi) {
    return [lambda, (lambda ? lambda / Object(__WEBPACK_IMPORTED_MODULE_0__math__["y" /* sin */])(lambda) : 1) * (Object(__WEBPACK_IMPORTED_MODULE_0__math__["y" /* sin */])(phi) * Object(__WEBPACK_IMPORTED_MODULE_0__math__["h" /* cos */])(lambda) - tanPhi0 * Object(__WEBPACK_IMPORTED_MODULE_0__math__["h" /* cos */])(phi))];
  }

  forward.invert = tanPhi0 ? function(x, y) {
    if (x) y *= Object(__WEBPACK_IMPORTED_MODULE_0__math__["y" /* sin */])(x) / x;
    var cosLambda = Object(__WEBPACK_IMPORTED_MODULE_0__math__["h" /* cos */])(x);
    return [x, 2 * Object(__WEBPACK_IMPORTED_MODULE_0__math__["g" /* atan2 */])(Object(__WEBPACK_IMPORTED_MODULE_0__math__["B" /* sqrt */])(cosLambda * cosLambda + tanPhi0 * tanPhi0 - y * y) - cosLambda, tanPhi0 - y)];
  } : function(x, y) {
    return [x, Object(__WEBPACK_IMPORTED_MODULE_0__math__["e" /* asin */])(x ? y * Object(__WEBPACK_IMPORTED_MODULE_0__math__["F" /* tan */])(x) / x : y)];
  };

  return forward;
}

/* unused harmony default export */ var _unused_webpack_default_export = (function() {
  return Object(__WEBPACK_IMPORTED_MODULE_1__parallel1__["a" /* default */])(craigRaw)
      .scale(249.828)
      .clipAngle(90);
});


/***/ }),

/***/ "./node_modules/d3-geo-projection/src/craster.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export crasterRaw */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_d3_geo__ = __webpack_require__("./node_modules/d3-geo-projection/node_modules/d3-geo/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__math__ = __webpack_require__("./node_modules/d3-geo-projection/src/math.js");



var sqrt3 = Object(__WEBPACK_IMPORTED_MODULE_1__math__["B" /* sqrt */])(3);

function crasterRaw(lambda, phi) {
  return [sqrt3 * lambda * (2 * Object(__WEBPACK_IMPORTED_MODULE_1__math__["h" /* cos */])(2 * phi / 3) - 1) / __WEBPACK_IMPORTED_MODULE_1__math__["E" /* sqrtPi */], sqrt3 * __WEBPACK_IMPORTED_MODULE_1__math__["E" /* sqrtPi */] * Object(__WEBPACK_IMPORTED_MODULE_1__math__["y" /* sin */])(phi / 3)];
}

crasterRaw.invert = function(x, y) {
  var phi = 3 * Object(__WEBPACK_IMPORTED_MODULE_1__math__["e" /* asin */])(y / (sqrt3 * __WEBPACK_IMPORTED_MODULE_1__math__["E" /* sqrtPi */]));
  return [__WEBPACK_IMPORTED_MODULE_1__math__["E" /* sqrtPi */] * x / (sqrt3 * (2 * Object(__WEBPACK_IMPORTED_MODULE_1__math__["h" /* cos */])(2 * phi / 3) - 1)), phi];
};

/* unused harmony default export */ var _unused_webpack_default_export = (function() {
  return Object(__WEBPACK_IMPORTED_MODULE_0_d3_geo__["k" /* geoProjection */])(crasterRaw)
      .scale(156.19);
});


/***/ }),

/***/ "./node_modules/d3-geo-projection/src/cylindricalEqualArea.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = cylindricalEqualAreaRaw;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__math__ = __webpack_require__("./node_modules/d3-geo-projection/src/math.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__parallel1__ = __webpack_require__("./node_modules/d3-geo-projection/src/parallel1.js");



function cylindricalEqualAreaRaw(phi0) {
  var cosPhi0 = Object(__WEBPACK_IMPORTED_MODULE_0__math__["h" /* cos */])(phi0);

  function forward(lambda, phi) {
    return [lambda * cosPhi0, Object(__WEBPACK_IMPORTED_MODULE_0__math__["y" /* sin */])(phi) / cosPhi0];
  }

  forward.invert = function(x, y) {
    return [x / cosPhi0, Object(__WEBPACK_IMPORTED_MODULE_0__math__["e" /* asin */])(y * cosPhi0)];
  };

  return forward;
}

/* unused harmony default export */ var _unused_webpack_default_export = (function() {
  return Object(__WEBPACK_IMPORTED_MODULE_1__parallel1__["a" /* default */])(cylindricalEqualAreaRaw)
      .parallel(38.58) // acos(sqrt(width / height / pi)) * radians
      .scale(195.044); // width / (sqrt(width / height / pi) * 2 * pi)
});


/***/ }),

/***/ "./node_modules/d3-geo-projection/src/cylindricalStereographic.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export cylindricalStereographicRaw */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__math__ = __webpack_require__("./node_modules/d3-geo-projection/src/math.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__parallel1__ = __webpack_require__("./node_modules/d3-geo-projection/src/parallel1.js");



function cylindricalStereographicRaw(phi0) {
  var cosPhi0 = Object(__WEBPACK_IMPORTED_MODULE_0__math__["h" /* cos */])(phi0);

  function forward(lambda, phi) {
    return [lambda * cosPhi0, (1 + cosPhi0) * Object(__WEBPACK_IMPORTED_MODULE_0__math__["F" /* tan */])(phi / 2)];
  }

  forward.invert = function(x, y) {
    return [x / cosPhi0, Object(__WEBPACK_IMPORTED_MODULE_0__math__["f" /* atan */])(y / (1 + cosPhi0)) * 2];
  };

  return forward;
}

/* unused harmony default export */ var _unused_webpack_default_export = (function() {
  return Object(__WEBPACK_IMPORTED_MODULE_1__parallel1__["a" /* default */])(cylindricalStereographicRaw)
      .scale(124.75);
});


/***/ }),

/***/ "./node_modules/d3-geo-projection/src/eckert1.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export eckert1Raw */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_d3_geo__ = __webpack_require__("./node_modules/d3-geo-projection/node_modules/d3-geo/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__math__ = __webpack_require__("./node_modules/d3-geo-projection/src/math.js");



function eckert1Raw(lambda, phi) {
  var alpha = Object(__WEBPACK_IMPORTED_MODULE_1__math__["B" /* sqrt */])(8 / (3 * __WEBPACK_IMPORTED_MODULE_1__math__["s" /* pi */]));
  return [
    alpha * lambda * (1 - Object(__WEBPACK_IMPORTED_MODULE_1__math__["a" /* abs */])(phi) / __WEBPACK_IMPORTED_MODULE_1__math__["s" /* pi */]),
    alpha * phi
  ];
}

eckert1Raw.invert = function(x, y) {
  var alpha = Object(__WEBPACK_IMPORTED_MODULE_1__math__["B" /* sqrt */])(8 / (3 * __WEBPACK_IMPORTED_MODULE_1__math__["s" /* pi */])),
      phi = y / alpha;
  return [
    x / (alpha * (1 - Object(__WEBPACK_IMPORTED_MODULE_1__math__["a" /* abs */])(phi) / __WEBPACK_IMPORTED_MODULE_1__math__["s" /* pi */])),
    phi
  ];
};

/* unused harmony default export */ var _unused_webpack_default_export = (function() {
  return Object(__WEBPACK_IMPORTED_MODULE_0_d3_geo__["k" /* geoProjection */])(eckert1Raw)
      .scale(165.664);
});


/***/ }),

/***/ "./node_modules/d3-geo-projection/src/eckert2.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export eckert2Raw */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_d3_geo__ = __webpack_require__("./node_modules/d3-geo-projection/node_modules/d3-geo/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__math__ = __webpack_require__("./node_modules/d3-geo-projection/src/math.js");



function eckert2Raw(lambda, phi) {
  var alpha = Object(__WEBPACK_IMPORTED_MODULE_1__math__["B" /* sqrt */])(4 - 3 * Object(__WEBPACK_IMPORTED_MODULE_1__math__["y" /* sin */])(Object(__WEBPACK_IMPORTED_MODULE_1__math__["a" /* abs */])(phi)));
  return [
    2 / Object(__WEBPACK_IMPORTED_MODULE_1__math__["B" /* sqrt */])(6 * __WEBPACK_IMPORTED_MODULE_1__math__["s" /* pi */]) * lambda * alpha,
    Object(__WEBPACK_IMPORTED_MODULE_1__math__["x" /* sign */])(phi) * Object(__WEBPACK_IMPORTED_MODULE_1__math__["B" /* sqrt */])(2 * __WEBPACK_IMPORTED_MODULE_1__math__["s" /* pi */] / 3) * (2 - alpha)
  ];
}

eckert2Raw.invert = function(x, y) {
  var alpha = 2 - Object(__WEBPACK_IMPORTED_MODULE_1__math__["a" /* abs */])(y) / Object(__WEBPACK_IMPORTED_MODULE_1__math__["B" /* sqrt */])(2 * __WEBPACK_IMPORTED_MODULE_1__math__["s" /* pi */] / 3);
  return [
    x * Object(__WEBPACK_IMPORTED_MODULE_1__math__["B" /* sqrt */])(6 * __WEBPACK_IMPORTED_MODULE_1__math__["s" /* pi */]) / (2 * alpha),
    Object(__WEBPACK_IMPORTED_MODULE_1__math__["x" /* sign */])(y) * Object(__WEBPACK_IMPORTED_MODULE_1__math__["e" /* asin */])((4 - alpha * alpha) / 3)
  ];
};

/* unused harmony default export */ var _unused_webpack_default_export = (function() {
  return Object(__WEBPACK_IMPORTED_MODULE_0_d3_geo__["k" /* geoProjection */])(eckert2Raw)
      .scale(165.664);
});


/***/ }),

/***/ "./node_modules/d3-geo-projection/src/eckert3.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export eckert3Raw */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_d3_geo__ = __webpack_require__("./node_modules/d3-geo-projection/node_modules/d3-geo/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__math__ = __webpack_require__("./node_modules/d3-geo-projection/src/math.js");



function eckert3Raw(lambda, phi) {
  var k = Object(__WEBPACK_IMPORTED_MODULE_1__math__["B" /* sqrt */])(__WEBPACK_IMPORTED_MODULE_1__math__["s" /* pi */] * (4 + __WEBPACK_IMPORTED_MODULE_1__math__["s" /* pi */]));
  return [
    2 / k * lambda * (1 + Object(__WEBPACK_IMPORTED_MODULE_1__math__["B" /* sqrt */])(1 - 4 * phi * phi / (__WEBPACK_IMPORTED_MODULE_1__math__["s" /* pi */] * __WEBPACK_IMPORTED_MODULE_1__math__["s" /* pi */]))),
    4 / k * phi
  ];
}

eckert3Raw.invert = function(x, y) {
  var k = Object(__WEBPACK_IMPORTED_MODULE_1__math__["B" /* sqrt */])(__WEBPACK_IMPORTED_MODULE_1__math__["s" /* pi */] * (4 + __WEBPACK_IMPORTED_MODULE_1__math__["s" /* pi */])) / 2;
  return [
    x * k / (1 + Object(__WEBPACK_IMPORTED_MODULE_1__math__["B" /* sqrt */])(1 - y * y * (4 + __WEBPACK_IMPORTED_MODULE_1__math__["s" /* pi */]) / (4 * __WEBPACK_IMPORTED_MODULE_1__math__["s" /* pi */]))),
    y * k / 2
  ];
};

/* unused harmony default export */ var _unused_webpack_default_export = (function() {
  return Object(__WEBPACK_IMPORTED_MODULE_0_d3_geo__["k" /* geoProjection */])(eckert3Raw)
      .scale(180.739);
});


/***/ }),

/***/ "./node_modules/d3-geo-projection/src/eckert4.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export eckert4Raw */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_d3_geo__ = __webpack_require__("./node_modules/d3-geo-projection/node_modules/d3-geo/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__math__ = __webpack_require__("./node_modules/d3-geo-projection/src/math.js");



function eckert4Raw(lambda, phi) {
  var k = (2 + __WEBPACK_IMPORTED_MODULE_1__math__["o" /* halfPi */]) * Object(__WEBPACK_IMPORTED_MODULE_1__math__["y" /* sin */])(phi);
  phi /= 2;
  for (var i = 0, delta = Infinity; i < 10 && Object(__WEBPACK_IMPORTED_MODULE_1__math__["a" /* abs */])(delta) > __WEBPACK_IMPORTED_MODULE_1__math__["k" /* epsilon */]; i++) {
    var cosPhi = Object(__WEBPACK_IMPORTED_MODULE_1__math__["h" /* cos */])(phi);
    phi -= delta = (phi + Object(__WEBPACK_IMPORTED_MODULE_1__math__["y" /* sin */])(phi) * (cosPhi + 2) - k) / (2 * cosPhi * (1 + cosPhi));
  }
  return [
    2 / Object(__WEBPACK_IMPORTED_MODULE_1__math__["B" /* sqrt */])(__WEBPACK_IMPORTED_MODULE_1__math__["s" /* pi */] * (4 + __WEBPACK_IMPORTED_MODULE_1__math__["s" /* pi */])) * lambda * (1 + Object(__WEBPACK_IMPORTED_MODULE_1__math__["h" /* cos */])(phi)),
    2 * Object(__WEBPACK_IMPORTED_MODULE_1__math__["B" /* sqrt */])(__WEBPACK_IMPORTED_MODULE_1__math__["s" /* pi */] / (4 + __WEBPACK_IMPORTED_MODULE_1__math__["s" /* pi */])) * Object(__WEBPACK_IMPORTED_MODULE_1__math__["y" /* sin */])(phi)
  ];
}

eckert4Raw.invert = function(x, y) {
  var A = y * Object(__WEBPACK_IMPORTED_MODULE_1__math__["B" /* sqrt */])((4 + __WEBPACK_IMPORTED_MODULE_1__math__["s" /* pi */]) / __WEBPACK_IMPORTED_MODULE_1__math__["s" /* pi */]) / 2,
      k = Object(__WEBPACK_IMPORTED_MODULE_1__math__["e" /* asin */])(A),
      c = Object(__WEBPACK_IMPORTED_MODULE_1__math__["h" /* cos */])(k);
  return [
    x / (2 / Object(__WEBPACK_IMPORTED_MODULE_1__math__["B" /* sqrt */])(__WEBPACK_IMPORTED_MODULE_1__math__["s" /* pi */] * (4 + __WEBPACK_IMPORTED_MODULE_1__math__["s" /* pi */])) * (1 + c)),
    Object(__WEBPACK_IMPORTED_MODULE_1__math__["e" /* asin */])((k + A * (c + 2)) / (2 + __WEBPACK_IMPORTED_MODULE_1__math__["o" /* halfPi */]))
  ];
};

/* unused harmony default export */ var _unused_webpack_default_export = (function() {
  return Object(__WEBPACK_IMPORTED_MODULE_0_d3_geo__["k" /* geoProjection */])(eckert4Raw)
      .scale(180.739);
});


/***/ }),

/***/ "./node_modules/d3-geo-projection/src/eckert5.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export eckert5Raw */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_d3_geo__ = __webpack_require__("./node_modules/d3-geo-projection/node_modules/d3-geo/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__math__ = __webpack_require__("./node_modules/d3-geo-projection/src/math.js");



function eckert5Raw(lambda, phi) {
  return [
    lambda * (1 + Object(__WEBPACK_IMPORTED_MODULE_1__math__["h" /* cos */])(phi)) / Object(__WEBPACK_IMPORTED_MODULE_1__math__["B" /* sqrt */])(2 + __WEBPACK_IMPORTED_MODULE_1__math__["s" /* pi */]),
    2 * phi / Object(__WEBPACK_IMPORTED_MODULE_1__math__["B" /* sqrt */])(2 + __WEBPACK_IMPORTED_MODULE_1__math__["s" /* pi */])
  ];
}

eckert5Raw.invert = function(x, y) {
  var k = Object(__WEBPACK_IMPORTED_MODULE_1__math__["B" /* sqrt */])(2 + __WEBPACK_IMPORTED_MODULE_1__math__["s" /* pi */]),
      phi = y * k / 2;
  return [
    k * x / (1 + Object(__WEBPACK_IMPORTED_MODULE_1__math__["h" /* cos */])(phi)),
    phi
  ];
};

/* unused harmony default export */ var _unused_webpack_default_export = (function() {
  return Object(__WEBPACK_IMPORTED_MODULE_0_d3_geo__["k" /* geoProjection */])(eckert5Raw)
      .scale(173.044);
});


/***/ }),

/***/ "./node_modules/d3-geo-projection/src/eckert6.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export eckert6Raw */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_d3_geo__ = __webpack_require__("./node_modules/d3-geo-projection/node_modules/d3-geo/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__math__ = __webpack_require__("./node_modules/d3-geo-projection/src/math.js");



function eckert6Raw(lambda, phi) {
  var k = (1 + __WEBPACK_IMPORTED_MODULE_1__math__["o" /* halfPi */]) * Object(__WEBPACK_IMPORTED_MODULE_1__math__["y" /* sin */])(phi);
  for (var i = 0, delta = Infinity; i < 10 && Object(__WEBPACK_IMPORTED_MODULE_1__math__["a" /* abs */])(delta) > __WEBPACK_IMPORTED_MODULE_1__math__["k" /* epsilon */]; i++) {
    phi -= delta = (phi + Object(__WEBPACK_IMPORTED_MODULE_1__math__["y" /* sin */])(phi) - k) / (1 + Object(__WEBPACK_IMPORTED_MODULE_1__math__["h" /* cos */])(phi));
  }
  k = Object(__WEBPACK_IMPORTED_MODULE_1__math__["B" /* sqrt */])(2 + __WEBPACK_IMPORTED_MODULE_1__math__["s" /* pi */]);
  return [
    lambda * (1 + Object(__WEBPACK_IMPORTED_MODULE_1__math__["h" /* cos */])(phi)) / k,
    2 * phi / k
  ];
}

eckert6Raw.invert = function(x, y) {
  var j = 1 + __WEBPACK_IMPORTED_MODULE_1__math__["o" /* halfPi */],
      k = Object(__WEBPACK_IMPORTED_MODULE_1__math__["B" /* sqrt */])(j / 2);
  return [
    x * 2 * k / (1 + Object(__WEBPACK_IMPORTED_MODULE_1__math__["h" /* cos */])(y *= k)),
    Object(__WEBPACK_IMPORTED_MODULE_1__math__["e" /* asin */])((y + Object(__WEBPACK_IMPORTED_MODULE_1__math__["y" /* sin */])(y)) / j)
  ];
};

/* unused harmony default export */ var _unused_webpack_default_export = (function() {
  return Object(__WEBPACK_IMPORTED_MODULE_0_d3_geo__["k" /* geoProjection */])(eckert6Raw)
      .scale(173.044);
});


/***/ }),

/***/ "./node_modules/d3-geo-projection/src/eisenlohr.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export eisenlohrRaw */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_d3_geo__ = __webpack_require__("./node_modules/d3-geo-projection/node_modules/d3-geo/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__august__ = __webpack_require__("./node_modules/d3-geo-projection/src/august.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__math__ = __webpack_require__("./node_modules/d3-geo-projection/src/math.js");




var eisenlohrK = 3 + 2 * __WEBPACK_IMPORTED_MODULE_2__math__["D" /* sqrt2 */];

function eisenlohrRaw(lambda, phi) {
  var s0 = Object(__WEBPACK_IMPORTED_MODULE_2__math__["y" /* sin */])(lambda /= 2),
      c0 = Object(__WEBPACK_IMPORTED_MODULE_2__math__["h" /* cos */])(lambda),
      k = Object(__WEBPACK_IMPORTED_MODULE_2__math__["B" /* sqrt */])(Object(__WEBPACK_IMPORTED_MODULE_2__math__["h" /* cos */])(phi)),
      c1 = Object(__WEBPACK_IMPORTED_MODULE_2__math__["h" /* cos */])(phi /= 2),
      t = Object(__WEBPACK_IMPORTED_MODULE_2__math__["y" /* sin */])(phi) / (c1 + __WEBPACK_IMPORTED_MODULE_2__math__["D" /* sqrt2 */] * c0 * k),
      c = Object(__WEBPACK_IMPORTED_MODULE_2__math__["B" /* sqrt */])(2 / (1 + t * t)),
      v = Object(__WEBPACK_IMPORTED_MODULE_2__math__["B" /* sqrt */])((__WEBPACK_IMPORTED_MODULE_2__math__["D" /* sqrt2 */] * c1 + (c0 + s0) * k) / (__WEBPACK_IMPORTED_MODULE_2__math__["D" /* sqrt2 */] * c1 + (c0 - s0) * k));
  return [
    eisenlohrK * (c * (v - 1 / v) - 2 * Object(__WEBPACK_IMPORTED_MODULE_2__math__["p" /* log */])(v)),
    eisenlohrK * (c * t * (v + 1 / v) - 2 * Object(__WEBPACK_IMPORTED_MODULE_2__math__["f" /* atan */])(t))
  ];
}

eisenlohrRaw.invert = function(x, y) {
  if (!(p = __WEBPACK_IMPORTED_MODULE_1__august__["a" /* augustRaw */].invert(x / 1.2, y * 1.065))) return null;
  var lambda = p[0], phi = p[1], i = 20, p;
  x /= eisenlohrK, y /= eisenlohrK;
  do {
    var _0 = lambda / 2,
        _1 = phi / 2,
        s0 = Object(__WEBPACK_IMPORTED_MODULE_2__math__["y" /* sin */])(_0),
        c0 = Object(__WEBPACK_IMPORTED_MODULE_2__math__["h" /* cos */])(_0),
        s1 = Object(__WEBPACK_IMPORTED_MODULE_2__math__["y" /* sin */])(_1),
        c1 = Object(__WEBPACK_IMPORTED_MODULE_2__math__["h" /* cos */])(_1),
        cos1 = Object(__WEBPACK_IMPORTED_MODULE_2__math__["h" /* cos */])(phi),
        k = Object(__WEBPACK_IMPORTED_MODULE_2__math__["B" /* sqrt */])(cos1),
        t = s1 / (c1 + __WEBPACK_IMPORTED_MODULE_2__math__["D" /* sqrt2 */] * c0 * k),
        t2 = t * t,
        c = Object(__WEBPACK_IMPORTED_MODULE_2__math__["B" /* sqrt */])(2 / (1 + t2)),
        v0 = (__WEBPACK_IMPORTED_MODULE_2__math__["D" /* sqrt2 */] * c1 + (c0 + s0) * k),
        v1 = (__WEBPACK_IMPORTED_MODULE_2__math__["D" /* sqrt2 */] * c1 + (c0 - s0) * k),
        v2 = v0 / v1,
        v = Object(__WEBPACK_IMPORTED_MODULE_2__math__["B" /* sqrt */])(v2),
        vm1v = v - 1 / v,
        vp1v = v + 1 / v,
        fx = c * vm1v - 2 * Object(__WEBPACK_IMPORTED_MODULE_2__math__["p" /* log */])(v) - x,
        fy = c * t * vp1v - 2 * Object(__WEBPACK_IMPORTED_MODULE_2__math__["f" /* atan */])(t) - y,
        deltatDeltaLambda = s1 && __WEBPACK_IMPORTED_MODULE_2__math__["C" /* sqrt1_2 */] * k * s0 * t2 / s1,
        deltatDeltaPhi = (__WEBPACK_IMPORTED_MODULE_2__math__["D" /* sqrt2 */] * c0 * c1 + k) / (2 * (c1 + __WEBPACK_IMPORTED_MODULE_2__math__["D" /* sqrt2 */] * c0 * k) * (c1 + __WEBPACK_IMPORTED_MODULE_2__math__["D" /* sqrt2 */] * c0 * k) * k),
        deltacDeltat = -0.5 * t * c * c * c,
        deltacDeltaLambda = deltacDeltat * deltatDeltaLambda,
        deltacDeltaPhi = deltacDeltat * deltatDeltaPhi,
        A = (A = 2 * c1 + __WEBPACK_IMPORTED_MODULE_2__math__["D" /* sqrt2 */] * k * (c0 - s0)) * A * v,
        deltavDeltaLambda = (__WEBPACK_IMPORTED_MODULE_2__math__["D" /* sqrt2 */] * c0 * c1 * k + cos1) / A,
        deltavDeltaPhi = -(__WEBPACK_IMPORTED_MODULE_2__math__["D" /* sqrt2 */] * s0 * s1) / (k * A),
        deltaxDeltaLambda = vm1v * deltacDeltaLambda - 2 * deltavDeltaLambda / v + c * (deltavDeltaLambda + deltavDeltaLambda / v2),
        deltaxDeltaPhi = vm1v * deltacDeltaPhi - 2 * deltavDeltaPhi / v + c * (deltavDeltaPhi + deltavDeltaPhi / v2),
        deltayDeltaLambda = t * vp1v * deltacDeltaLambda - 2 * deltatDeltaLambda / (1 + t2) + c * vp1v * deltatDeltaLambda + c * t * (deltavDeltaLambda - deltavDeltaLambda / v2),
        deltayDeltaPhi = t * vp1v * deltacDeltaPhi - 2 * deltatDeltaPhi / (1 + t2) + c * vp1v * deltatDeltaPhi + c * t * (deltavDeltaPhi - deltavDeltaPhi / v2),
        denominator = deltaxDeltaPhi * deltayDeltaLambda - deltayDeltaPhi * deltaxDeltaLambda;
    if (!denominator) break;
    var deltaLambda = (fy * deltaxDeltaPhi - fx * deltayDeltaPhi) / denominator,
        deltaPhi = (fx * deltayDeltaLambda - fy * deltaxDeltaLambda) / denominator;
    lambda -= deltaLambda;
    phi = Object(__WEBPACK_IMPORTED_MODULE_2__math__["q" /* max */])(-__WEBPACK_IMPORTED_MODULE_2__math__["o" /* halfPi */], Object(__WEBPACK_IMPORTED_MODULE_2__math__["r" /* min */])(__WEBPACK_IMPORTED_MODULE_2__math__["o" /* halfPi */], phi - deltaPhi));
  } while ((Object(__WEBPACK_IMPORTED_MODULE_2__math__["a" /* abs */])(deltaLambda) > __WEBPACK_IMPORTED_MODULE_2__math__["k" /* epsilon */] || Object(__WEBPACK_IMPORTED_MODULE_2__math__["a" /* abs */])(deltaPhi) > __WEBPACK_IMPORTED_MODULE_2__math__["k" /* epsilon */]) && --i > 0);
  return Object(__WEBPACK_IMPORTED_MODULE_2__math__["a" /* abs */])(Object(__WEBPACK_IMPORTED_MODULE_2__math__["a" /* abs */])(phi) - __WEBPACK_IMPORTED_MODULE_2__math__["o" /* halfPi */]) < __WEBPACK_IMPORTED_MODULE_2__math__["k" /* epsilon */] ? [0, phi] : i && [lambda, phi];
};

/* unused harmony default export */ var _unused_webpack_default_export = (function() {
  return Object(__WEBPACK_IMPORTED_MODULE_0_d3_geo__["k" /* geoProjection */])(eisenlohrRaw)
      .scale(62.5271);
});


/***/ }),

/***/ "./node_modules/d3-geo-projection/src/elliptic.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["c"] = ellipticJi;
/* unused harmony export ellipticJ */
/* harmony export (immutable) */ __webpack_exports__["b"] = ellipticFi;
/* harmony export (immutable) */ __webpack_exports__["a"] = ellipticF;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__math__ = __webpack_require__("./node_modules/d3-geo-projection/src/math.js");


// Returns [sn, cn, dn](u + iv|m).
function ellipticJi(u, v, m) {
  var a, b, c;
  if (!u) {
    b = ellipticJ(v, 1 - m);
    return [
      [0, b[0] / b[1]],
      [1 / b[1], 0],
      [b[2] / b[1], 0]
    ];
  }
  a = ellipticJ(u, m);
  if (!v) return [[a[0], 0], [a[1], 0], [a[2], 0]];
  b = ellipticJ(v, 1 - m);
  c = b[1] * b[1] + m * a[0] * a[0] * b[0] * b[0];
  return [
    [a[0] * b[2] / c, a[1] * a[2] * b[0] * b[1] / c],
    [a[1] * b[1] / c, -a[0] * a[2] * b[0] * b[2] / c],
    [a[2] * b[1] * b[2] / c, -m * a[0] * a[1] * b[0] / c]
  ];
}

// Returns [sn, cn, dn, ph](u|m).
function ellipticJ(u, m) {
  var ai, b, phi, t, twon;
  if (m < __WEBPACK_IMPORTED_MODULE_0__math__["k" /* epsilon */]) {
    t = Object(__WEBPACK_IMPORTED_MODULE_0__math__["y" /* sin */])(u);
    b = Object(__WEBPACK_IMPORTED_MODULE_0__math__["h" /* cos */])(u);
    ai = m * (u - t * b) / 4;
    return [
      t - ai * b,
      b + ai * t,
      1 - m * t * t / 2,
      u - ai
    ];
  }
  if (m >= 1 - __WEBPACK_IMPORTED_MODULE_0__math__["k" /* epsilon */]) {
    ai = (1 - m) / 4;
    b = Object(__WEBPACK_IMPORTED_MODULE_0__math__["i" /* cosh */])(u);
    t = Object(__WEBPACK_IMPORTED_MODULE_0__math__["G" /* tanh */])(u);
    phi = 1 / b;
    twon = b * Object(__WEBPACK_IMPORTED_MODULE_0__math__["A" /* sinh */])(u);
    return [
      t + ai * (twon - u) / (b * b),
      phi - ai * t * phi * (twon - u),
      phi + ai * t * phi * (twon + u),
      2 * Object(__WEBPACK_IMPORTED_MODULE_0__math__["f" /* atan */])(Object(__WEBPACK_IMPORTED_MODULE_0__math__["m" /* exp */])(u)) - __WEBPACK_IMPORTED_MODULE_0__math__["o" /* halfPi */] + ai * (twon - u) / b
    ];
  }

  var a = [1, 0, 0, 0, 0, 0, 0, 0, 0],
      c = [Object(__WEBPACK_IMPORTED_MODULE_0__math__["B" /* sqrt */])(m), 0, 0, 0, 0, 0, 0, 0, 0],
      i = 0;
  b = Object(__WEBPACK_IMPORTED_MODULE_0__math__["B" /* sqrt */])(1 - m);
  twon = 1;

  while (Object(__WEBPACK_IMPORTED_MODULE_0__math__["a" /* abs */])(c[i] / a[i]) > __WEBPACK_IMPORTED_MODULE_0__math__["k" /* epsilon */] && i < 8) {
    ai = a[i++];
    c[i] = (ai - b) / 2;
    a[i] = (ai + b) / 2;
    b = Object(__WEBPACK_IMPORTED_MODULE_0__math__["B" /* sqrt */])(ai * b);
    twon *= 2;
  }

  phi = twon * a[i] * u;
  do {
    t = c[i] * Object(__WEBPACK_IMPORTED_MODULE_0__math__["y" /* sin */])(b = phi) / a[i];
    phi = (Object(__WEBPACK_IMPORTED_MODULE_0__math__["e" /* asin */])(t) + phi) / 2;
  } while (--i);

  return [Object(__WEBPACK_IMPORTED_MODULE_0__math__["y" /* sin */])(phi), t = Object(__WEBPACK_IMPORTED_MODULE_0__math__["h" /* cos */])(phi), t / Object(__WEBPACK_IMPORTED_MODULE_0__math__["h" /* cos */])(phi - b), phi];
}

// Calculate F(phi+iPsi|m).
// See Abramowitz and Stegun, 17.4.11.
function ellipticFi(phi, psi, m) {
  var r = Object(__WEBPACK_IMPORTED_MODULE_0__math__["a" /* abs */])(phi),
      i = Object(__WEBPACK_IMPORTED_MODULE_0__math__["a" /* abs */])(psi),
      sinhPsi = Object(__WEBPACK_IMPORTED_MODULE_0__math__["A" /* sinh */])(i);
  if (r) {
    var cscPhi = 1 / Object(__WEBPACK_IMPORTED_MODULE_0__math__["y" /* sin */])(r),
        cotPhi2 = 1 / (Object(__WEBPACK_IMPORTED_MODULE_0__math__["F" /* tan */])(r) * Object(__WEBPACK_IMPORTED_MODULE_0__math__["F" /* tan */])(r)),
        b = -(cotPhi2 + m * (sinhPsi * sinhPsi * cscPhi * cscPhi) - 1 + m),
        c = (m - 1) * cotPhi2,
        cotLambda2 = (-b + Object(__WEBPACK_IMPORTED_MODULE_0__math__["B" /* sqrt */])(b * b - 4 * c)) / 2;
    return [
      ellipticF(Object(__WEBPACK_IMPORTED_MODULE_0__math__["f" /* atan */])(1 / Object(__WEBPACK_IMPORTED_MODULE_0__math__["B" /* sqrt */])(cotLambda2)), m) * Object(__WEBPACK_IMPORTED_MODULE_0__math__["x" /* sign */])(phi),
      ellipticF(Object(__WEBPACK_IMPORTED_MODULE_0__math__["f" /* atan */])(Object(__WEBPACK_IMPORTED_MODULE_0__math__["B" /* sqrt */])((cotLambda2 / cotPhi2 - 1) / m)), 1 - m) * Object(__WEBPACK_IMPORTED_MODULE_0__math__["x" /* sign */])(psi)
    ];
  }
  return [
    0,
    ellipticF(Object(__WEBPACK_IMPORTED_MODULE_0__math__["f" /* atan */])(sinhPsi), 1 - m) * Object(__WEBPACK_IMPORTED_MODULE_0__math__["x" /* sign */])(psi)
  ];
}

// Calculate F(phi|m) where m = k² = sin²α.
// See Abramowitz and Stegun, 17.6.7.
function ellipticF(phi, m) {
  if (!m) return phi;
  if (m === 1) return Object(__WEBPACK_IMPORTED_MODULE_0__math__["p" /* log */])(Object(__WEBPACK_IMPORTED_MODULE_0__math__["F" /* tan */])(phi / 2 + __WEBPACK_IMPORTED_MODULE_0__math__["u" /* quarterPi */]));
  var a = 1,
      b = Object(__WEBPACK_IMPORTED_MODULE_0__math__["B" /* sqrt */])(1 - m),
      c = Object(__WEBPACK_IMPORTED_MODULE_0__math__["B" /* sqrt */])(m);
  for (var i = 0; Object(__WEBPACK_IMPORTED_MODULE_0__math__["a" /* abs */])(c) > __WEBPACK_IMPORTED_MODULE_0__math__["k" /* epsilon */]; i++) {
    if (phi % __WEBPACK_IMPORTED_MODULE_0__math__["s" /* pi */]) {
      var dPhi = Object(__WEBPACK_IMPORTED_MODULE_0__math__["f" /* atan */])(b * Object(__WEBPACK_IMPORTED_MODULE_0__math__["F" /* tan */])(phi) / a);
      if (dPhi < 0) dPhi += __WEBPACK_IMPORTED_MODULE_0__math__["s" /* pi */];
      phi += dPhi + ~~(phi / __WEBPACK_IMPORTED_MODULE_0__math__["s" /* pi */]) * __WEBPACK_IMPORTED_MODULE_0__math__["s" /* pi */];
    } else phi += phi;
    c = (a + b) / 2;
    b = Object(__WEBPACK_IMPORTED_MODULE_0__math__["B" /* sqrt */])(a * b);
    c = ((a = c) - b) / 2;
  }
  return phi / (Object(__WEBPACK_IMPORTED_MODULE_0__math__["t" /* pow */])(2, i) * a);
}


/***/ }),

/***/ "./node_modules/d3-geo-projection/src/fahey.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export faheyRaw */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_d3_geo__ = __webpack_require__("./node_modules/d3-geo-projection/node_modules/d3-geo/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__math__ = __webpack_require__("./node_modules/d3-geo-projection/src/math.js");



var faheyK = Object(__WEBPACK_IMPORTED_MODULE_1__math__["h" /* cos */])(35 * __WEBPACK_IMPORTED_MODULE_1__math__["v" /* radians */]);

function faheyRaw(lambda, phi) {
  var t = Object(__WEBPACK_IMPORTED_MODULE_1__math__["F" /* tan */])(phi / 2);
  return [lambda * faheyK * Object(__WEBPACK_IMPORTED_MODULE_1__math__["B" /* sqrt */])(1 - t * t), (1 + faheyK) * t];
}

faheyRaw.invert = function(x, y) {
  var t = y / (1 + faheyK);
  return [x && x / (faheyK * Object(__WEBPACK_IMPORTED_MODULE_1__math__["B" /* sqrt */])(1 - t * t)), 2 * Object(__WEBPACK_IMPORTED_MODULE_1__math__["f" /* atan */])(t)];
};

/* unused harmony default export */ var _unused_webpack_default_export = (function() {
  return Object(__WEBPACK_IMPORTED_MODULE_0_d3_geo__["k" /* geoProjection */])(faheyRaw)
      .scale(137.152);
});


/***/ }),

/***/ "./node_modules/d3-geo-projection/src/foucaut.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export foucautRaw */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_d3_geo__ = __webpack_require__("./node_modules/d3-geo-projection/node_modules/d3-geo/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__math__ = __webpack_require__("./node_modules/d3-geo-projection/src/math.js");



function foucautRaw(lambda, phi) {
  var k = phi / 2, cosk = Object(__WEBPACK_IMPORTED_MODULE_1__math__["h" /* cos */])(k);
  return [ 2 * lambda / __WEBPACK_IMPORTED_MODULE_1__math__["E" /* sqrtPi */] * Object(__WEBPACK_IMPORTED_MODULE_1__math__["h" /* cos */])(phi) * cosk * cosk, __WEBPACK_IMPORTED_MODULE_1__math__["E" /* sqrtPi */] * Object(__WEBPACK_IMPORTED_MODULE_1__math__["F" /* tan */])(k)];
}

foucautRaw.invert = function(x, y) {
  var k = Object(__WEBPACK_IMPORTED_MODULE_1__math__["f" /* atan */])(y / __WEBPACK_IMPORTED_MODULE_1__math__["E" /* sqrtPi */]), cosk = Object(__WEBPACK_IMPORTED_MODULE_1__math__["h" /* cos */])(k), phi = 2 * k;
  return [x * __WEBPACK_IMPORTED_MODULE_1__math__["E" /* sqrtPi */] / 2 / (Object(__WEBPACK_IMPORTED_MODULE_1__math__["h" /* cos */])(phi) * cosk * cosk), phi];
};

/* unused harmony default export */ var _unused_webpack_default_export = (function() {
  return Object(__WEBPACK_IMPORTED_MODULE_0_d3_geo__["k" /* geoProjection */])(foucautRaw)
      .scale(135.264);
});


/***/ }),

/***/ "./node_modules/d3-geo-projection/src/gilbert.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_d3_geo__ = __webpack_require__("./node_modules/d3-geo-projection/node_modules/d3-geo/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__math__ = __webpack_require__("./node_modules/d3-geo-projection/src/math.js");



function gilbertForward(point) {
  return [point[0] / 2, Object(__WEBPACK_IMPORTED_MODULE_1__math__["e" /* asin */])(Object(__WEBPACK_IMPORTED_MODULE_1__math__["F" /* tan */])(point[1] / 2 * __WEBPACK_IMPORTED_MODULE_1__math__["v" /* radians */])) * __WEBPACK_IMPORTED_MODULE_1__math__["j" /* degrees */]];
}

function gilbertInvert(point) {
  return [point[0] * 2, 2 * Object(__WEBPACK_IMPORTED_MODULE_1__math__["f" /* atan */])(Object(__WEBPACK_IMPORTED_MODULE_1__math__["y" /* sin */])(point[1] * __WEBPACK_IMPORTED_MODULE_1__math__["v" /* radians */])) * __WEBPACK_IMPORTED_MODULE_1__math__["j" /* degrees */]];
}

/* unused harmony default export */ var _unused_webpack_default_export = (function(projectionType) {
  if (projectionType == null) projectionType = __WEBPACK_IMPORTED_MODULE_0_d3_geo__["j" /* geoOrthographic */];
  var projection = projectionType(),
      equirectangular = Object(__WEBPACK_IMPORTED_MODULE_0_d3_geo__["f" /* geoEquirectangular */])().scale(__WEBPACK_IMPORTED_MODULE_1__math__["j" /* degrees */]).precision(0).clipAngle(null).translate([0, 0]); // antimeridian cutting

  function gilbert(point) {
    return projection(gilbertForward(point));
  }

  if (projection.invert) gilbert.invert = function(point) {
    return gilbertInvert(projection.invert(point));
  };

  gilbert.stream = function(stream) {
    var s1 = projection.stream(stream), s0 = equirectangular.stream({
      point: function(lambda, phi) { s1.point(lambda / 2, Object(__WEBPACK_IMPORTED_MODULE_1__math__["e" /* asin */])(Object(__WEBPACK_IMPORTED_MODULE_1__math__["F" /* tan */])(-phi / 2 * __WEBPACK_IMPORTED_MODULE_1__math__["v" /* radians */])) * __WEBPACK_IMPORTED_MODULE_1__math__["j" /* degrees */]); },
      lineStart: function() { s1.lineStart(); },
      lineEnd: function() { s1.lineEnd(); },
      polygonStart: function() { s1.polygonStart(); },
      polygonEnd: function() { s1.polygonEnd(); }
    });
    s0.sphere = s1.sphere;
    return s0;
  };

  function property(name) {
    gilbert[name] = function(_) {
      return arguments.length ? (projection[name](_), gilbert) : projection[name]();
    };
  }

  gilbert.rotate = function(_) {
    return arguments.length ? (equirectangular.rotate(_), gilbert) : equirectangular.rotate();
  };

  gilbert.center = function(_) {
    return arguments.length ? (projection.center(gilbertForward(_)), gilbert) : gilbertInvert(projection.center());
  };

  property("clipAngle");
  property("clipExtent");
  property("scale");
  property("translate");
  property("precision");

  return gilbert
      .scale(249.5);
});


/***/ }),

/***/ "./node_modules/d3-geo-projection/src/gingery.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export gingeryRaw */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_d3_geo__ = __webpack_require__("./node_modules/d3-geo-projection/node_modules/d3-geo/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__math__ = __webpack_require__("./node_modules/d3-geo-projection/src/math.js");



function gingeryRaw(rho, n) {
  var k = 2 * __WEBPACK_IMPORTED_MODULE_1__math__["s" /* pi */] / n,
      rho2 = rho * rho;

  function forward(lambda, phi) {
    var p = Object(__WEBPACK_IMPORTED_MODULE_0_d3_geo__["b" /* geoAzimuthalEquidistantRaw */])(lambda, phi),
        x = p[0],
        y = p[1],
        r2 = x * x + y * y;

    if (r2 > rho2) {
      var r = Object(__WEBPACK_IMPORTED_MODULE_1__math__["B" /* sqrt */])(r2),
          theta = Object(__WEBPACK_IMPORTED_MODULE_1__math__["g" /* atan2 */])(y, x),
          theta0 = k * Object(__WEBPACK_IMPORTED_MODULE_1__math__["w" /* round */])(theta / k),
          alpha = theta - theta0,
          rhoCosAlpha = rho * Object(__WEBPACK_IMPORTED_MODULE_1__math__["h" /* cos */])(alpha),
          k_ = (rho * Object(__WEBPACK_IMPORTED_MODULE_1__math__["y" /* sin */])(alpha) - alpha * Object(__WEBPACK_IMPORTED_MODULE_1__math__["y" /* sin */])(rhoCosAlpha)) / (__WEBPACK_IMPORTED_MODULE_1__math__["o" /* halfPi */] - rhoCosAlpha),
          s_ = gingeryLength(alpha, k_),
          e = (__WEBPACK_IMPORTED_MODULE_1__math__["s" /* pi */] - rho) / gingeryIntegrate(s_, rhoCosAlpha, __WEBPACK_IMPORTED_MODULE_1__math__["s" /* pi */]);

      x = r;
      var i = 50, delta;
      do {
        x -= delta = (rho + gingeryIntegrate(s_, rhoCosAlpha, x) * e - r) / (s_(x) * e);
      } while (Object(__WEBPACK_IMPORTED_MODULE_1__math__["a" /* abs */])(delta) > __WEBPACK_IMPORTED_MODULE_1__math__["k" /* epsilon */] && --i > 0);

      y = alpha * Object(__WEBPACK_IMPORTED_MODULE_1__math__["y" /* sin */])(x);
      if (x < __WEBPACK_IMPORTED_MODULE_1__math__["o" /* halfPi */]) y -= k_ * (x - __WEBPACK_IMPORTED_MODULE_1__math__["o" /* halfPi */]);

      var s = Object(__WEBPACK_IMPORTED_MODULE_1__math__["y" /* sin */])(theta0),
          c = Object(__WEBPACK_IMPORTED_MODULE_1__math__["h" /* cos */])(theta0);
      p[0] = x * c - y * s;
      p[1] = x * s + y * c;
    }
    return p;
  }

  forward.invert = function(x, y) {
    var r2 = x * x + y * y;
    if (r2 > rho2) {
      var r = Object(__WEBPACK_IMPORTED_MODULE_1__math__["B" /* sqrt */])(r2),
          theta = Object(__WEBPACK_IMPORTED_MODULE_1__math__["g" /* atan2 */])(y, x),
          theta0 = k * Object(__WEBPACK_IMPORTED_MODULE_1__math__["w" /* round */])(theta / k),
          dTheta = theta - theta0;

      x = r * Object(__WEBPACK_IMPORTED_MODULE_1__math__["h" /* cos */])(dTheta);
      y = r * Object(__WEBPACK_IMPORTED_MODULE_1__math__["y" /* sin */])(dTheta);

      var x_halfPi = x - __WEBPACK_IMPORTED_MODULE_1__math__["o" /* halfPi */],
          sinx = Object(__WEBPACK_IMPORTED_MODULE_1__math__["y" /* sin */])(x),
          alpha = y / sinx,
          delta = x < __WEBPACK_IMPORTED_MODULE_1__math__["o" /* halfPi */] ? Infinity : 0,
          i = 10;

      while (true) {
        var rhosinAlpha = rho * Object(__WEBPACK_IMPORTED_MODULE_1__math__["y" /* sin */])(alpha),
            rhoCosAlpha = rho * Object(__WEBPACK_IMPORTED_MODULE_1__math__["h" /* cos */])(alpha),
            sinRhoCosAlpha = Object(__WEBPACK_IMPORTED_MODULE_1__math__["y" /* sin */])(rhoCosAlpha),
            halfPi_RhoCosAlpha = __WEBPACK_IMPORTED_MODULE_1__math__["o" /* halfPi */] - rhoCosAlpha,
            k_ = (rhosinAlpha - alpha * sinRhoCosAlpha) / halfPi_RhoCosAlpha,
            s_ = gingeryLength(alpha, k_);

        if (Object(__WEBPACK_IMPORTED_MODULE_1__math__["a" /* abs */])(delta) < __WEBPACK_IMPORTED_MODULE_1__math__["l" /* epsilon2 */] || !--i) break;

        alpha -= delta = (alpha * sinx - k_ * x_halfPi - y) / (
          sinx - x_halfPi * 2 * (
            halfPi_RhoCosAlpha * (rhoCosAlpha + alpha * rhosinAlpha * Object(__WEBPACK_IMPORTED_MODULE_1__math__["h" /* cos */])(rhoCosAlpha) - sinRhoCosAlpha) -
            rhosinAlpha * (rhosinAlpha - alpha * sinRhoCosAlpha)
          ) / (halfPi_RhoCosAlpha * halfPi_RhoCosAlpha));
      }
      r = rho + gingeryIntegrate(s_, rhoCosAlpha, x) * (__WEBPACK_IMPORTED_MODULE_1__math__["s" /* pi */] - rho) / gingeryIntegrate(s_, rhoCosAlpha, __WEBPACK_IMPORTED_MODULE_1__math__["s" /* pi */]);
      theta = theta0 + alpha;
      x = r * Object(__WEBPACK_IMPORTED_MODULE_1__math__["h" /* cos */])(theta);
      y = r * Object(__WEBPACK_IMPORTED_MODULE_1__math__["y" /* sin */])(theta);
    }
    return __WEBPACK_IMPORTED_MODULE_0_d3_geo__["b" /* geoAzimuthalEquidistantRaw */].invert(x, y);
  };

  return forward;
}

function gingeryLength(alpha, k) {
  return function(x) {
    var y_ = alpha * Object(__WEBPACK_IMPORTED_MODULE_1__math__["h" /* cos */])(x);
    if (x < __WEBPACK_IMPORTED_MODULE_1__math__["o" /* halfPi */]) y_ -= k;
    return Object(__WEBPACK_IMPORTED_MODULE_1__math__["B" /* sqrt */])(1 + y_ * y_);
  };
}

// Numerical integration: trapezoidal rule.
function gingeryIntegrate(f, a, b) {
  var n = 50,
      h = (b - a) / n,
      s = f(a) + f(b);
  for (var i = 1, x = a; i < n; ++i) s += 2 * f(x += h);
  return s * 0.5 * h;
}

/* unused harmony default export */ var _unused_webpack_default_export = (function() {
  var n = 6,
      rho = 30 * __WEBPACK_IMPORTED_MODULE_1__math__["v" /* radians */],
      cRho = Object(__WEBPACK_IMPORTED_MODULE_1__math__["h" /* cos */])(rho),
      sRho = Object(__WEBPACK_IMPORTED_MODULE_1__math__["y" /* sin */])(rho),
      m = Object(__WEBPACK_IMPORTED_MODULE_0_d3_geo__["l" /* geoProjectionMutator */])(gingeryRaw),
      p = m(rho, n),
      stream_ = p.stream,
      epsilon = 1e-2,
      cr = -Object(__WEBPACK_IMPORTED_MODULE_1__math__["h" /* cos */])(epsilon * __WEBPACK_IMPORTED_MODULE_1__math__["v" /* radians */]),
      sr = Object(__WEBPACK_IMPORTED_MODULE_1__math__["y" /* sin */])(epsilon * __WEBPACK_IMPORTED_MODULE_1__math__["v" /* radians */]);

  p.radius = function(_) {
    if (!arguments.length) return rho * __WEBPACK_IMPORTED_MODULE_1__math__["j" /* degrees */];
    cRho = Object(__WEBPACK_IMPORTED_MODULE_1__math__["h" /* cos */])(rho = _ * __WEBPACK_IMPORTED_MODULE_1__math__["v" /* radians */]);
    sRho = Object(__WEBPACK_IMPORTED_MODULE_1__math__["y" /* sin */])(rho);
    return m(rho, n);
  };

  p.lobes = function(_) {
    if (!arguments.length) return n;
    return m(rho, n = +_);
  };

  p.stream = function(stream) {
    var rotate = p.rotate(),
        rotateStream = stream_(stream),
        sphereStream = (p.rotate([0, 0]), stream_(stream));
    p.rotate(rotate);
    rotateStream.sphere = function() {
      sphereStream.polygonStart(), sphereStream.lineStart();
      for (var i = 0, delta = 2 * __WEBPACK_IMPORTED_MODULE_1__math__["s" /* pi */] / n, phi = 0; i < n; ++i, phi -= delta) {
        sphereStream.point(Object(__WEBPACK_IMPORTED_MODULE_1__math__["g" /* atan2 */])(sr * Object(__WEBPACK_IMPORTED_MODULE_1__math__["h" /* cos */])(phi), cr) * __WEBPACK_IMPORTED_MODULE_1__math__["j" /* degrees */], Object(__WEBPACK_IMPORTED_MODULE_1__math__["e" /* asin */])(sr * Object(__WEBPACK_IMPORTED_MODULE_1__math__["y" /* sin */])(phi)) * __WEBPACK_IMPORTED_MODULE_1__math__["j" /* degrees */]);
        sphereStream.point(Object(__WEBPACK_IMPORTED_MODULE_1__math__["g" /* atan2 */])(sRho * Object(__WEBPACK_IMPORTED_MODULE_1__math__["h" /* cos */])(phi - delta / 2), cRho) * __WEBPACK_IMPORTED_MODULE_1__math__["j" /* degrees */], Object(__WEBPACK_IMPORTED_MODULE_1__math__["e" /* asin */])(sRho * Object(__WEBPACK_IMPORTED_MODULE_1__math__["y" /* sin */])(phi - delta / 2)) * __WEBPACK_IMPORTED_MODULE_1__math__["j" /* degrees */]);
      }
      sphereStream.lineEnd(), sphereStream.polygonEnd();
    };
    return rotateStream;
  };

  return p
      .rotate([90, -40])
      .scale(91.7095)
      .clipAngle(180 - 1e-3);
});


/***/ }),

/***/ "./node_modules/d3-geo-projection/src/ginzburg4.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export ginzburg4Raw */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_d3_geo__ = __webpack_require__("./node_modules/d3-geo-projection/node_modules/d3-geo/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ginzburgPolyconic__ = __webpack_require__("./node_modules/d3-geo-projection/src/ginzburgPolyconic.js");



var ginzburg4Raw = Object(__WEBPACK_IMPORTED_MODULE_1__ginzburgPolyconic__["a" /* default */])(2.8284, -1.6988, 0.75432, -0.18071, 1.76003, -0.38914, 0.042555);

/* unused harmony default export */ var _unused_webpack_default_export = (function() {
  return Object(__WEBPACK_IMPORTED_MODULE_0_d3_geo__["k" /* geoProjection */])(ginzburg4Raw)
      .scale(149.995);
});


/***/ }),

/***/ "./node_modules/d3-geo-projection/src/ginzburg5.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export ginzburg5Raw */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_d3_geo__ = __webpack_require__("./node_modules/d3-geo-projection/node_modules/d3-geo/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ginzburgPolyconic__ = __webpack_require__("./node_modules/d3-geo-projection/src/ginzburgPolyconic.js");



var ginzburg5Raw = Object(__WEBPACK_IMPORTED_MODULE_1__ginzburgPolyconic__["a" /* default */])(2.583819, -0.835827, 0.170354, -0.038094, 1.543313, -0.411435,0.082742);

/* unused harmony default export */ var _unused_webpack_default_export = (function() {
  return Object(__WEBPACK_IMPORTED_MODULE_0_d3_geo__["k" /* geoProjection */])(ginzburg5Raw)
      .scale(153.93);
});


/***/ }),

/***/ "./node_modules/d3-geo-projection/src/ginzburg6.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export ginzburg6Raw */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_d3_geo__ = __webpack_require__("./node_modules/d3-geo-projection/node_modules/d3-geo/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ginzburgPolyconic__ = __webpack_require__("./node_modules/d3-geo-projection/src/ginzburgPolyconic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__math__ = __webpack_require__("./node_modules/d3-geo-projection/src/math.js");




var ginzburg6Raw = Object(__WEBPACK_IMPORTED_MODULE_1__ginzburgPolyconic__["a" /* default */])(5 / 6 * __WEBPACK_IMPORTED_MODULE_2__math__["s" /* pi */], -0.62636, -0.0344, 0, 1.3493, -0.05524, 0, 0.045);

/* unused harmony default export */ var _unused_webpack_default_export = (function() {
  return Object(__WEBPACK_IMPORTED_MODULE_0_d3_geo__["k" /* geoProjection */])(ginzburg6Raw)
      .scale(130.945);
});


/***/ }),

/***/ "./node_modules/d3-geo-projection/src/ginzburg8.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export ginzburg8Raw */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_d3_geo__ = __webpack_require__("./node_modules/d3-geo-projection/node_modules/d3-geo/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__math__ = __webpack_require__("./node_modules/d3-geo-projection/src/math.js");



function ginzburg8Raw(lambda, phi) {
  var lambda2 = lambda * lambda,
      phi2 = phi * phi;
  return [
    lambda * (1 - 0.162388 * phi2) * (0.87 - 0.000952426 * lambda2 * lambda2),
    phi * (1 + phi2 / 12)
  ];
}

ginzburg8Raw.invert = function(x, y) {
  var lambda = x,
      phi = y,
      i = 50, delta;
  do {
    var phi2 = phi * phi;
    phi -= delta = (phi * (1 + phi2 / 12) - y) / (1 + phi2 / 4);
  } while (Object(__WEBPACK_IMPORTED_MODULE_1__math__["a" /* abs */])(delta) > __WEBPACK_IMPORTED_MODULE_1__math__["k" /* epsilon */] && --i > 0);
  i = 50;
  x /= 1 -0.162388 * phi2;
  do {
    var lambda4 = (lambda4 = lambda * lambda) * lambda4;
    lambda -= delta = (lambda * (0.87 - 0.000952426 * lambda4) - x) / (0.87 - 0.00476213 * lambda4);
  } while (Object(__WEBPACK_IMPORTED_MODULE_1__math__["a" /* abs */])(delta) > __WEBPACK_IMPORTED_MODULE_1__math__["k" /* epsilon */] && --i > 0);
  return [lambda, phi];
};

/* unused harmony default export */ var _unused_webpack_default_export = (function() {
  return Object(__WEBPACK_IMPORTED_MODULE_0_d3_geo__["k" /* geoProjection */])(ginzburg8Raw)
      .scale(131.747);
});


/***/ }),

/***/ "./node_modules/d3-geo-projection/src/ginzburg9.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export ginzburg9Raw */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_d3_geo__ = __webpack_require__("./node_modules/d3-geo-projection/node_modules/d3-geo/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ginzburgPolyconic__ = __webpack_require__("./node_modules/d3-geo-projection/src/ginzburgPolyconic.js");



var ginzburg9Raw = Object(__WEBPACK_IMPORTED_MODULE_1__ginzburgPolyconic__["a" /* default */])(2.6516, -0.76534, 0.19123, -0.047094, 1.36289, -0.13965,0.031762);

/* unused harmony default export */ var _unused_webpack_default_export = (function() {
  return Object(__WEBPACK_IMPORTED_MODULE_0_d3_geo__["k" /* geoProjection */])(ginzburg9Raw)
      .scale(131.087);
});


/***/ }),

/***/ "./node_modules/d3-geo-projection/src/ginzburgPolyconic.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__math__ = __webpack_require__("./node_modules/d3-geo-projection/src/math.js");


/* harmony default export */ __webpack_exports__["a"] = (function(a, b, c, d, e, f, g, h) {
  if (arguments.length < 8) h = 0;

  function forward(lambda, phi) {
    if (!phi) return [a * lambda / __WEBPACK_IMPORTED_MODULE_0__math__["s" /* pi */], 0];
    var phi2 = phi * phi,
        xB = a + phi2 * (b + phi2 * (c + phi2 * d)),
        yB = phi * (e - 1 + phi2 * (f - h + phi2 * g)),
        m = (xB * xB + yB * yB) / (2 * yB),
        alpha = lambda * Object(__WEBPACK_IMPORTED_MODULE_0__math__["e" /* asin */])(xB / m) / __WEBPACK_IMPORTED_MODULE_0__math__["s" /* pi */];
    return [m * Object(__WEBPACK_IMPORTED_MODULE_0__math__["y" /* sin */])(alpha), phi * (1 + phi2 * h) + m * (1 - Object(__WEBPACK_IMPORTED_MODULE_0__math__["h" /* cos */])(alpha))];
  }

  forward.invert = function(x, y) {
    var lambda = __WEBPACK_IMPORTED_MODULE_0__math__["s" /* pi */] * x / a,
        phi = y,
        deltaLambda, deltaPhi, i = 50;
    do {
      var phi2 = phi * phi,
          xB = a + phi2 * (b + phi2 * (c + phi2 * d)),
          yB = phi * (e - 1 + phi2 * (f - h + phi2 * g)),
          p = xB * xB + yB * yB,
          q = 2 * yB,
          m = p / q,
          m2 = m * m,
          dAlphadLambda = Object(__WEBPACK_IMPORTED_MODULE_0__math__["e" /* asin */])(xB / m) / __WEBPACK_IMPORTED_MODULE_0__math__["s" /* pi */],
          alpha = lambda * dAlphadLambda,
          xB2 = xB * xB,
          dxBdPhi = (2 * b + phi2 * (4 * c + phi2 * 6 * d)) * phi,
          dyBdPhi = e + phi2 * (3 * f + phi2 * 5 * g),
          dpdPhi = 2 * (xB * dxBdPhi + yB * (dyBdPhi - 1)),
          dqdPhi = 2 * (dyBdPhi - 1),
          dmdPhi = (dpdPhi * q - p * dqdPhi) / (q * q),
          cosAlpha = Object(__WEBPACK_IMPORTED_MODULE_0__math__["h" /* cos */])(alpha),
          sinAlpha = Object(__WEBPACK_IMPORTED_MODULE_0__math__["y" /* sin */])(alpha),
          mcosAlpha = m * cosAlpha,
          msinAlpha = m * sinAlpha,
          dAlphadPhi = ((lambda / __WEBPACK_IMPORTED_MODULE_0__math__["s" /* pi */]) * (1 / Object(__WEBPACK_IMPORTED_MODULE_0__math__["B" /* sqrt */])(1 - xB2 / m2)) * (dxBdPhi * m - xB * dmdPhi)) / m2,
          fx = msinAlpha - x,
          fy = phi * (1 + phi2 * h) + m - mcosAlpha - y,
          deltaxDeltaPhi = dmdPhi * sinAlpha + mcosAlpha * dAlphadPhi,
          deltaxDeltaLambda = mcosAlpha * dAlphadLambda,
          deltayDeltaPhi = 1 + dmdPhi - (dmdPhi * cosAlpha - msinAlpha * dAlphadPhi),
          deltayDeltaLambda = msinAlpha * dAlphadLambda,
          denominator = deltaxDeltaPhi * deltayDeltaLambda - deltayDeltaPhi * deltaxDeltaLambda;
      if (!denominator) break;
      lambda -= deltaLambda = (fy * deltaxDeltaPhi - fx * deltayDeltaPhi) / denominator;
      phi -= deltaPhi = (fx * deltayDeltaLambda - fy * deltaxDeltaLambda) / denominator;
    } while ((Object(__WEBPACK_IMPORTED_MODULE_0__math__["a" /* abs */])(deltaLambda) > __WEBPACK_IMPORTED_MODULE_0__math__["k" /* epsilon */] || Object(__WEBPACK_IMPORTED_MODULE_0__math__["a" /* abs */])(deltaPhi) > __WEBPACK_IMPORTED_MODULE_0__math__["k" /* epsilon */]) && --i > 0);
    return [lambda, phi];
  };

  return forward;
});


/***/ }),

/***/ "./node_modules/d3-geo-projection/src/gringorten.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = gringortenRaw;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_d3_geo__ = __webpack_require__("./node_modules/d3-geo-projection/node_modules/d3-geo/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__math__ = __webpack_require__("./node_modules/d3-geo-projection/src/math.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__square__ = __webpack_require__("./node_modules/d3-geo-projection/src/square.js");




function gringortenRaw(lambda, phi) {
  var sLambda = Object(__WEBPACK_IMPORTED_MODULE_1__math__["x" /* sign */])(lambda),
      sPhi = Object(__WEBPACK_IMPORTED_MODULE_1__math__["x" /* sign */])(phi),
      cosPhi = Object(__WEBPACK_IMPORTED_MODULE_1__math__["h" /* cos */])(phi),
      x = Object(__WEBPACK_IMPORTED_MODULE_1__math__["h" /* cos */])(lambda) * cosPhi,
      y = Object(__WEBPACK_IMPORTED_MODULE_1__math__["y" /* sin */])(lambda) * cosPhi,
      z = Object(__WEBPACK_IMPORTED_MODULE_1__math__["y" /* sin */])(sPhi * phi);
  lambda = Object(__WEBPACK_IMPORTED_MODULE_1__math__["a" /* abs */])(Object(__WEBPACK_IMPORTED_MODULE_1__math__["g" /* atan2 */])(y, z));
  phi = Object(__WEBPACK_IMPORTED_MODULE_1__math__["e" /* asin */])(x);
  if (Object(__WEBPACK_IMPORTED_MODULE_1__math__["a" /* abs */])(lambda - __WEBPACK_IMPORTED_MODULE_1__math__["o" /* halfPi */]) > __WEBPACK_IMPORTED_MODULE_1__math__["k" /* epsilon */]) lambda %= __WEBPACK_IMPORTED_MODULE_1__math__["o" /* halfPi */];
  var point = gringortenHexadecant(lambda > __WEBPACK_IMPORTED_MODULE_1__math__["s" /* pi */] / 4 ? __WEBPACK_IMPORTED_MODULE_1__math__["o" /* halfPi */] - lambda : lambda, phi);
  if (lambda > __WEBPACK_IMPORTED_MODULE_1__math__["s" /* pi */] / 4) z = point[0], point[0] = -point[1], point[1] = -z;
  return (point[0] *= sLambda, point[1] *= -sPhi, point);
}

gringortenRaw.invert = function(x, y) {
  if (Object(__WEBPACK_IMPORTED_MODULE_1__math__["a" /* abs */])(x) > 1) x = Object(__WEBPACK_IMPORTED_MODULE_1__math__["x" /* sign */])(x) * 2 - x;
  if (Object(__WEBPACK_IMPORTED_MODULE_1__math__["a" /* abs */])(y) > 1) y = Object(__WEBPACK_IMPORTED_MODULE_1__math__["x" /* sign */])(y) * 2 - y;
  var sx = Object(__WEBPACK_IMPORTED_MODULE_1__math__["x" /* sign */])(x),
      sy = Object(__WEBPACK_IMPORTED_MODULE_1__math__["x" /* sign */])(y),
      x0 = -sx * x,
      y0 = -sy * y,
      t = y0 / x0 < 1,
      p = gringortenHexadecantInvert(t ? y0 : x0, t ? x0 : y0),
      lambda = p[0],
      phi = p[1],
      cosPhi = Object(__WEBPACK_IMPORTED_MODULE_1__math__["h" /* cos */])(phi);
  if (t) lambda = -__WEBPACK_IMPORTED_MODULE_1__math__["o" /* halfPi */] - lambda;
  return [sx * (Object(__WEBPACK_IMPORTED_MODULE_1__math__["g" /* atan2 */])(Object(__WEBPACK_IMPORTED_MODULE_1__math__["y" /* sin */])(lambda) * cosPhi, -Object(__WEBPACK_IMPORTED_MODULE_1__math__["y" /* sin */])(phi)) + __WEBPACK_IMPORTED_MODULE_1__math__["s" /* pi */]), sy * Object(__WEBPACK_IMPORTED_MODULE_1__math__["e" /* asin */])(Object(__WEBPACK_IMPORTED_MODULE_1__math__["h" /* cos */])(lambda) * cosPhi)];
};

function gringortenHexadecant(lambda, phi) {
  if (phi === __WEBPACK_IMPORTED_MODULE_1__math__["o" /* halfPi */]) return [0, 0];

  var sinPhi = Object(__WEBPACK_IMPORTED_MODULE_1__math__["y" /* sin */])(phi),
      r = sinPhi * sinPhi,
      r2 = r * r,
      j = 1 + r2,
      k = 1 + 3 * r2,
      q = 1 - r2,
      z = Object(__WEBPACK_IMPORTED_MODULE_1__math__["e" /* asin */])(1 / Object(__WEBPACK_IMPORTED_MODULE_1__math__["B" /* sqrt */])(j)),
      v = q + r * j * z,
      p2 = (1 - sinPhi) / v,
      p = Object(__WEBPACK_IMPORTED_MODULE_1__math__["B" /* sqrt */])(p2),
      a2 = p2 * j,
      a = Object(__WEBPACK_IMPORTED_MODULE_1__math__["B" /* sqrt */])(a2),
      h = p * q,
      x,
      i;

  if (lambda === 0) return [0, -(h + r * a)];

  var cosPhi = Object(__WEBPACK_IMPORTED_MODULE_1__math__["h" /* cos */])(phi),
      secPhi = 1 / cosPhi,
      drdPhi = 2 * sinPhi * cosPhi,
      dvdPhi = (-3 * r + z * k) * drdPhi,
      dp2dPhi = (-v * cosPhi - (1 - sinPhi) * dvdPhi) / (v * v),
      dpdPhi = (0.5 * dp2dPhi) / p,
      dhdPhi = q * dpdPhi - 2 * r * p * drdPhi,
      dra2dPhi = r * j * dp2dPhi + p2 * k * drdPhi,
      mu = -secPhi * drdPhi,
      nu = -secPhi * dra2dPhi,
      zeta = -2 * secPhi * dhdPhi,
      lambda1 = 4 * lambda / __WEBPACK_IMPORTED_MODULE_1__math__["s" /* pi */],
      delta;

  // Slower but accurate bisection method.
  if (lambda > 0.222 * __WEBPACK_IMPORTED_MODULE_1__math__["s" /* pi */] || phi < __WEBPACK_IMPORTED_MODULE_1__math__["s" /* pi */] / 4 && lambda > 0.175 * __WEBPACK_IMPORTED_MODULE_1__math__["s" /* pi */]) {
    x = (h + r * Object(__WEBPACK_IMPORTED_MODULE_1__math__["B" /* sqrt */])(a2 * (1 + r2) - h * h)) / (1 + r2);
    if (lambda > __WEBPACK_IMPORTED_MODULE_1__math__["s" /* pi */] / 4) return [x, x];
    var x1 = x, x0 = 0.5 * x;
    x = 0.5 * (x0 + x1), i = 50;
    do {
      var g = Object(__WEBPACK_IMPORTED_MODULE_1__math__["B" /* sqrt */])(a2 - x * x),
          f = (x * (zeta + mu * g) + nu * Object(__WEBPACK_IMPORTED_MODULE_1__math__["e" /* asin */])(x / a)) - lambda1;
      if (!f) break;
      if (f < 0) x0 = x;
      else x1 = x;
      x = 0.5 * (x0 + x1);
    } while (Object(__WEBPACK_IMPORTED_MODULE_1__math__["a" /* abs */])(x1 - x0) > __WEBPACK_IMPORTED_MODULE_1__math__["k" /* epsilon */] && --i > 0);
  }

  // Newton-Raphson.
  else {
    x = __WEBPACK_IMPORTED_MODULE_1__math__["k" /* epsilon */], i = 25;
    do {
      var x2 = x * x,
          g2 = Object(__WEBPACK_IMPORTED_MODULE_1__math__["B" /* sqrt */])(a2 - x2),
          zetaMug = zeta + mu * g2,
          f2 = x * zetaMug + nu * Object(__WEBPACK_IMPORTED_MODULE_1__math__["e" /* asin */])(x / a) - lambda1,
          df = zetaMug + (nu - mu * x2) / g2;
      x -= delta = g2 ? f2 / df : 0;
    } while (Object(__WEBPACK_IMPORTED_MODULE_1__math__["a" /* abs */])(delta) > __WEBPACK_IMPORTED_MODULE_1__math__["k" /* epsilon */] && --i > 0);
  }

  return [x, -h - r * Object(__WEBPACK_IMPORTED_MODULE_1__math__["B" /* sqrt */])(a2 - x * x)];
}

function gringortenHexadecantInvert(x, y) {
  var x0 = 0,
      x1 = 1,
      r = 0.5,
      i = 50;

  while (true) {
    var r2 = r * r,
        sinPhi = Object(__WEBPACK_IMPORTED_MODULE_1__math__["B" /* sqrt */])(r),
        z = Object(__WEBPACK_IMPORTED_MODULE_1__math__["e" /* asin */])(1 / Object(__WEBPACK_IMPORTED_MODULE_1__math__["B" /* sqrt */])(1 + r2)),
        v = (1 - r2) + r * (1 + r2) * z,
        p2 = (1 - sinPhi) / v,
        p = Object(__WEBPACK_IMPORTED_MODULE_1__math__["B" /* sqrt */])(p2),
        a2 = p2 * (1 + r2),
        h = p * (1 - r2),
        g2 = a2 - x * x,
        g = Object(__WEBPACK_IMPORTED_MODULE_1__math__["B" /* sqrt */])(g2),
        y0 = y + h + r * g;
    if (Object(__WEBPACK_IMPORTED_MODULE_1__math__["a" /* abs */])(x1 - x0) < __WEBPACK_IMPORTED_MODULE_1__math__["l" /* epsilon2 */] || --i === 0 || y0 === 0) break;
    if (y0 > 0) x0 = r;
    else x1 = r;
    r = 0.5 * (x0 + x1);
  }

  if (!i) return null;

  var phi = Object(__WEBPACK_IMPORTED_MODULE_1__math__["e" /* asin */])(sinPhi),
      cosPhi = Object(__WEBPACK_IMPORTED_MODULE_1__math__["h" /* cos */])(phi),
      secPhi = 1 / cosPhi,
      drdPhi = 2 * sinPhi * cosPhi,
      dvdPhi = (-3 * r + z * (1 + 3 * r2)) * drdPhi,
      dp2dPhi = (-v * cosPhi - (1 - sinPhi) * dvdPhi) / (v * v),
      dpdPhi = 0.5 * dp2dPhi / p,
      dhdPhi = (1 - r2) * dpdPhi - 2 * r * p * drdPhi,
      zeta = -2 * secPhi * dhdPhi,
      mu = -secPhi * drdPhi,
      nu = -secPhi * (r * (1 + r2) * dp2dPhi + p2 * (1 + 3 * r2) * drdPhi);

  return [__WEBPACK_IMPORTED_MODULE_1__math__["s" /* pi */] / 4 * (x * (zeta + mu * g) + nu * Object(__WEBPACK_IMPORTED_MODULE_1__math__["e" /* asin */])(x / Object(__WEBPACK_IMPORTED_MODULE_1__math__["B" /* sqrt */])(a2))), phi];
}

/* unused harmony default export */ var _unused_webpack_default_export = (function() {
  return Object(__WEBPACK_IMPORTED_MODULE_0_d3_geo__["k" /* geoProjection */])(Object(__WEBPACK_IMPORTED_MODULE_2__square__["a" /* default */])(gringortenRaw))
      .scale(239.75);
});


/***/ }),

/***/ "./node_modules/d3-geo-projection/src/guyou.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = guyouRaw;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_d3_geo__ = __webpack_require__("./node_modules/d3-geo-projection/node_modules/d3-geo/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__elliptic__ = __webpack_require__("./node_modules/d3-geo-projection/src/elliptic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__math__ = __webpack_require__("./node_modules/d3-geo-projection/src/math.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__square__ = __webpack_require__("./node_modules/d3-geo-projection/src/square.js");





function guyouRaw(lambda, phi) {
  var k_ = (__WEBPACK_IMPORTED_MODULE_2__math__["D" /* sqrt2 */] - 1) / (__WEBPACK_IMPORTED_MODULE_2__math__["D" /* sqrt2 */] + 1),
      k = Object(__WEBPACK_IMPORTED_MODULE_2__math__["B" /* sqrt */])(1 - k_ * k_),
      K = Object(__WEBPACK_IMPORTED_MODULE_1__elliptic__["a" /* ellipticF */])(__WEBPACK_IMPORTED_MODULE_2__math__["o" /* halfPi */], k * k),
      f = -1,
      psi = Object(__WEBPACK_IMPORTED_MODULE_2__math__["p" /* log */])(Object(__WEBPACK_IMPORTED_MODULE_2__math__["F" /* tan */])(__WEBPACK_IMPORTED_MODULE_2__math__["s" /* pi */] / 4 + Object(__WEBPACK_IMPORTED_MODULE_2__math__["a" /* abs */])(phi) / 2)),
      r = Object(__WEBPACK_IMPORTED_MODULE_2__math__["m" /* exp */])(f * psi) / Object(__WEBPACK_IMPORTED_MODULE_2__math__["B" /* sqrt */])(k_),
      at = guyouComplexAtan(r * Object(__WEBPACK_IMPORTED_MODULE_2__math__["h" /* cos */])(f * lambda), r * Object(__WEBPACK_IMPORTED_MODULE_2__math__["y" /* sin */])(f * lambda)),
      t = Object(__WEBPACK_IMPORTED_MODULE_1__elliptic__["b" /* ellipticFi */])(at[0], at[1], k * k);
  return [-t[1], (phi >= 0 ? 1 : -1) * (0.5 * K - t[0])];
}

function guyouComplexAtan(x, y) {
  var x2 = x * x,
      y_1 = y + 1,
      t = 1 - x2 - y * y;
  return [
   0.5 * ((x >= 0 ? __WEBPACK_IMPORTED_MODULE_2__math__["o" /* halfPi */] : -__WEBPACK_IMPORTED_MODULE_2__math__["o" /* halfPi */]) - Object(__WEBPACK_IMPORTED_MODULE_2__math__["g" /* atan2 */])(t, 2 * x)),
    -0.25 * Object(__WEBPACK_IMPORTED_MODULE_2__math__["p" /* log */])(t * t + 4 * x2) +0.5 * Object(__WEBPACK_IMPORTED_MODULE_2__math__["p" /* log */])(y_1 * y_1 + x2)
  ];
}

function guyouComplexDivide(a, b) {
  var denominator = b[0] * b[0] + b[1] * b[1];
  return [
    (a[0] * b[0] + a[1] * b[1]) / denominator,
    (a[1] * b[0] - a[0] * b[1]) / denominator
  ];
}

guyouRaw.invert = function(x, y) {
  var k_ = (__WEBPACK_IMPORTED_MODULE_2__math__["D" /* sqrt2 */] - 1) / (__WEBPACK_IMPORTED_MODULE_2__math__["D" /* sqrt2 */] + 1),
      k = Object(__WEBPACK_IMPORTED_MODULE_2__math__["B" /* sqrt */])(1 - k_ * k_),
      K = Object(__WEBPACK_IMPORTED_MODULE_1__elliptic__["a" /* ellipticF */])(__WEBPACK_IMPORTED_MODULE_2__math__["o" /* halfPi */], k * k),
      f = -1,
      j = Object(__WEBPACK_IMPORTED_MODULE_1__elliptic__["c" /* ellipticJi */])(0.5 * K - y, -x, k * k),
      tn = guyouComplexDivide(j[0], j[1]),
      lambda = Object(__WEBPACK_IMPORTED_MODULE_2__math__["g" /* atan2 */])(tn[1], tn[0]) / f;
  return [
    lambda,
    2 * Object(__WEBPACK_IMPORTED_MODULE_2__math__["f" /* atan */])(Object(__WEBPACK_IMPORTED_MODULE_2__math__["m" /* exp */])(0.5 / f * Object(__WEBPACK_IMPORTED_MODULE_2__math__["p" /* log */])(k_ * tn[0] * tn[0] + k_ * tn[1] * tn[1]))) - __WEBPACK_IMPORTED_MODULE_2__math__["o" /* halfPi */]
  ];
};

/* unused harmony default export */ var _unused_webpack_default_export = (function() {
  return Object(__WEBPACK_IMPORTED_MODULE_0_d3_geo__["k" /* geoProjection */])(Object(__WEBPACK_IMPORTED_MODULE_3__square__["a" /* default */])(guyouRaw))
      .scale(151.496);
});


/***/ }),

/***/ "./node_modules/d3-geo-projection/src/hammer.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = hammerRaw;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_d3_geo__ = __webpack_require__("./node_modules/d3-geo-projection/node_modules/d3-geo/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__math__ = __webpack_require__("./node_modules/d3-geo-projection/src/math.js");



function hammerRaw(A, B) {
  if (arguments.length < 2) B = A;
  if (B === 1) return __WEBPACK_IMPORTED_MODULE_0_d3_geo__["a" /* geoAzimuthalEqualAreaRaw */];
  if (B === Infinity) return hammerQuarticAuthalicRaw;

  function forward(lambda, phi) {
    var coordinates = Object(__WEBPACK_IMPORTED_MODULE_0_d3_geo__["a" /* geoAzimuthalEqualAreaRaw */])(lambda / B, phi);
    coordinates[0] *= A;
    return coordinates;
  }

  forward.invert = function(x, y) {
    var coordinates = __WEBPACK_IMPORTED_MODULE_0_d3_geo__["a" /* geoAzimuthalEqualAreaRaw */].invert(x / A, y);
    coordinates[0] *= B;
    return coordinates;
  };

  return forward;
}

function hammerQuarticAuthalicRaw(lambda, phi) {
  return [
    lambda * Object(__WEBPACK_IMPORTED_MODULE_1__math__["h" /* cos */])(phi) / Object(__WEBPACK_IMPORTED_MODULE_1__math__["h" /* cos */])(phi /= 2),
    2 * Object(__WEBPACK_IMPORTED_MODULE_1__math__["y" /* sin */])(phi)
  ];
}

hammerQuarticAuthalicRaw.invert = function(x, y) {
  var phi = 2 * Object(__WEBPACK_IMPORTED_MODULE_1__math__["e" /* asin */])(y / 2);
  return [
    x * Object(__WEBPACK_IMPORTED_MODULE_1__math__["h" /* cos */])(phi / 2) / Object(__WEBPACK_IMPORTED_MODULE_1__math__["h" /* cos */])(phi),
    phi
  ];
};

/* unused harmony default export */ var _unused_webpack_default_export = (function() {
  var B = 2,
      m = Object(__WEBPACK_IMPORTED_MODULE_0_d3_geo__["l" /* geoProjectionMutator */])(hammerRaw),
      p = m(B);

  p.coefficient = function(_) {
    if (!arguments.length) return B;
    return m(B = +_);
  };

  return p
    .scale(169.529);
});


/***/ }),

/***/ "./node_modules/d3-geo-projection/src/hammerRetroazimuthal.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export hammerRetroazimuthalRaw */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_d3_geo__ = __webpack_require__("./node_modules/d3-geo-projection/node_modules/d3-geo/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__math__ = __webpack_require__("./node_modules/d3-geo-projection/src/math.js");



function hammerRetroazimuthalRaw(phi0) {
  var sinPhi0 = Object(__WEBPACK_IMPORTED_MODULE_1__math__["y" /* sin */])(phi0),
      cosPhi0 = Object(__WEBPACK_IMPORTED_MODULE_1__math__["h" /* cos */])(phi0),
      rotate = hammerRetroazimuthalRotation(phi0);

  rotate.invert = hammerRetroazimuthalRotation(-phi0);

  function forward(lambda, phi) {
    var p = rotate(lambda, phi);
    lambda = p[0], phi = p[1];
    var sinPhi = Object(__WEBPACK_IMPORTED_MODULE_1__math__["y" /* sin */])(phi),
        cosPhi = Object(__WEBPACK_IMPORTED_MODULE_1__math__["h" /* cos */])(phi),
        cosLambda = Object(__WEBPACK_IMPORTED_MODULE_1__math__["h" /* cos */])(lambda),
        z = Object(__WEBPACK_IMPORTED_MODULE_1__math__["b" /* acos */])(sinPhi0 * sinPhi + cosPhi0 * cosPhi * cosLambda),
        sinz = Object(__WEBPACK_IMPORTED_MODULE_1__math__["y" /* sin */])(z),
        K = Object(__WEBPACK_IMPORTED_MODULE_1__math__["a" /* abs */])(sinz) > __WEBPACK_IMPORTED_MODULE_1__math__["k" /* epsilon */] ? z / sinz : 1;
    return [
      K * cosPhi0 * Object(__WEBPACK_IMPORTED_MODULE_1__math__["y" /* sin */])(lambda),
      (Object(__WEBPACK_IMPORTED_MODULE_1__math__["a" /* abs */])(lambda) > __WEBPACK_IMPORTED_MODULE_1__math__["o" /* halfPi */] ? K : -K) // rotate for back hemisphere
        * (sinPhi0 * cosPhi - cosPhi0 * sinPhi * cosLambda)
    ];
  }

  forward.invert = function(x, y) {
    var rho = Object(__WEBPACK_IMPORTED_MODULE_1__math__["B" /* sqrt */])(x * x + y * y),
        sinz = -Object(__WEBPACK_IMPORTED_MODULE_1__math__["y" /* sin */])(rho),
        cosz = Object(__WEBPACK_IMPORTED_MODULE_1__math__["h" /* cos */])(rho),
        a = rho * cosz,
        b = -y * sinz,
        c = rho * sinPhi0,
        d = Object(__WEBPACK_IMPORTED_MODULE_1__math__["B" /* sqrt */])(a * a + b * b - c * c),
        phi = Object(__WEBPACK_IMPORTED_MODULE_1__math__["g" /* atan2 */])(a * c + b * d, b * c - a * d),
        lambda = (rho > __WEBPACK_IMPORTED_MODULE_1__math__["o" /* halfPi */] ? -1 : 1) * Object(__WEBPACK_IMPORTED_MODULE_1__math__["g" /* atan2 */])(x * sinz, rho * Object(__WEBPACK_IMPORTED_MODULE_1__math__["h" /* cos */])(phi) * cosz + y * Object(__WEBPACK_IMPORTED_MODULE_1__math__["y" /* sin */])(phi) * sinz);
    return rotate.invert(lambda, phi);
  };

  return forward;
}

// Latitudinal rotation by phi0.
// Temporary hack until D3 supports arbitrary small-circle clipping origins.
function hammerRetroazimuthalRotation(phi0) {
  var sinPhi0 = Object(__WEBPACK_IMPORTED_MODULE_1__math__["y" /* sin */])(phi0),
      cosPhi0 = Object(__WEBPACK_IMPORTED_MODULE_1__math__["h" /* cos */])(phi0);

  return function(lambda, phi) {
    var cosPhi = Object(__WEBPACK_IMPORTED_MODULE_1__math__["h" /* cos */])(phi),
        x = Object(__WEBPACK_IMPORTED_MODULE_1__math__["h" /* cos */])(lambda) * cosPhi,
        y = Object(__WEBPACK_IMPORTED_MODULE_1__math__["y" /* sin */])(lambda) * cosPhi,
        z = Object(__WEBPACK_IMPORTED_MODULE_1__math__["y" /* sin */])(phi);
    return [
      Object(__WEBPACK_IMPORTED_MODULE_1__math__["g" /* atan2 */])(y, x * cosPhi0 - z * sinPhi0),
      Object(__WEBPACK_IMPORTED_MODULE_1__math__["e" /* asin */])(z * cosPhi0 + x * sinPhi0)
    ];
  };
}

/* unused harmony default export */ var _unused_webpack_default_export = (function() {
  var phi0 = 0,
      m = Object(__WEBPACK_IMPORTED_MODULE_0_d3_geo__["l" /* geoProjectionMutator */])(hammerRetroazimuthalRaw),
      p = m(phi0),
      rotate_ = p.rotate,
      stream_ = p.stream,
      circle = Object(__WEBPACK_IMPORTED_MODULE_0_d3_geo__["e" /* geoCircle */])();

  p.parallel = function(_) {
    if (!arguments.length) return phi0 * __WEBPACK_IMPORTED_MODULE_1__math__["j" /* degrees */];
    var r = p.rotate();
    return m(phi0 = _ * __WEBPACK_IMPORTED_MODULE_1__math__["v" /* radians */]).rotate(r);
  };

  // Temporary hack; see hammerRetroazimuthalRotation.
  p.rotate = function(_) {
    if (!arguments.length) return (_ = rotate_.call(p), _[1] += phi0 * __WEBPACK_IMPORTED_MODULE_1__math__["j" /* degrees */], _);
    rotate_.call(p, [_[0], _[1] - phi0 * __WEBPACK_IMPORTED_MODULE_1__math__["j" /* degrees */]]);
    circle.center([-_[0], -_[1]]);
    return p;
  };

  p.stream = function(stream) {
    stream = stream_(stream);
    stream.sphere = function() {
      stream.polygonStart();
      var epsilon = 1e-2,
          ring = circle.radius(90 - epsilon)().coordinates[0],
          n = ring.length - 1,
          i = -1,
          p;
      stream.lineStart();
      while (++i < n) stream.point((p = ring[i])[0], p[1]);
      stream.lineEnd();
      ring = circle.radius(90 + epsilon)().coordinates[0];
      n = ring.length - 1;
      stream.lineStart();
      while (--i >= 0) stream.point((p = ring[i])[0], p[1]);
      stream.lineEnd();
      stream.polygonEnd();
    };
    return stream;
  };

  return p
      .scale(79.4187)
      .parallel(45)
      .clipAngle(180 - 1e-3);
});


/***/ }),

/***/ "./node_modules/d3-geo-projection/src/healpix.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export healpixRaw */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_d3_array__ = __webpack_require__("./node_modules/d3-array/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_d3_geo__ = __webpack_require__("./node_modules/d3-geo-projection/node_modules/d3-geo/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__collignon__ = __webpack_require__("./node_modules/d3-geo-projection/src/collignon.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__cylindricalEqualArea__ = __webpack_require__("./node_modules/d3-geo-projection/src/cylindricalEqualArea.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__math__ = __webpack_require__("./node_modules/d3-geo-projection/src/math.js");






var healpixParallel = 41 + 48 / 36 + 37 / 3600, // for K=3; TODO automate
    healpixLambert = Object(__WEBPACK_IMPORTED_MODULE_3__cylindricalEqualArea__["a" /* cylindricalEqualAreaRaw */])(0);

function healpixRaw(H) {
  var phi0 = healpixParallel * __WEBPACK_IMPORTED_MODULE_4__math__["v" /* radians */],
      dx = Object(__WEBPACK_IMPORTED_MODULE_2__collignon__["a" /* collignonRaw */])(__WEBPACK_IMPORTED_MODULE_4__math__["s" /* pi */], phi0)[0] - Object(__WEBPACK_IMPORTED_MODULE_2__collignon__["a" /* collignonRaw */])(-__WEBPACK_IMPORTED_MODULE_4__math__["s" /* pi */], phi0)[0],
      y0 = healpixLambert(0, phi0)[1],
      y1 = Object(__WEBPACK_IMPORTED_MODULE_2__collignon__["a" /* collignonRaw */])(0, phi0)[1],
      dy1 = __WEBPACK_IMPORTED_MODULE_4__math__["E" /* sqrtPi */] - y1,
      k = __WEBPACK_IMPORTED_MODULE_4__math__["H" /* tau */] / H,
      w = 4 / __WEBPACK_IMPORTED_MODULE_4__math__["H" /* tau */],
      h = y0 + (dy1 * dy1 * 4) / __WEBPACK_IMPORTED_MODULE_4__math__["H" /* tau */];

  function forward(lambda, phi) {
    var point,
        phi2 = Object(__WEBPACK_IMPORTED_MODULE_4__math__["a" /* abs */])(phi);
    if (phi2 > phi0) {
      var i = Object(__WEBPACK_IMPORTED_MODULE_4__math__["r" /* min */])(H - 1, Object(__WEBPACK_IMPORTED_MODULE_4__math__["q" /* max */])(0, Object(__WEBPACK_IMPORTED_MODULE_4__math__["n" /* floor */])((lambda + __WEBPACK_IMPORTED_MODULE_4__math__["s" /* pi */]) / k)));
      lambda += __WEBPACK_IMPORTED_MODULE_4__math__["s" /* pi */] * (H - 1) / H - i * k;
      point = Object(__WEBPACK_IMPORTED_MODULE_2__collignon__["a" /* collignonRaw */])(lambda, phi2);
      point[0] = point[0] * __WEBPACK_IMPORTED_MODULE_4__math__["H" /* tau */] / dx - __WEBPACK_IMPORTED_MODULE_4__math__["H" /* tau */] * (H - 1) / (2 * H) + i * __WEBPACK_IMPORTED_MODULE_4__math__["H" /* tau */] / H;
      point[1] = y0 + (point[1] - y1) * 4 * dy1 / __WEBPACK_IMPORTED_MODULE_4__math__["H" /* tau */];
      if (phi < 0) point[1] = -point[1];
    } else {
      point = healpixLambert(lambda, phi);
    }
    point[0] *= w, point[1] /= h;
    return point;
  }

  forward.invert = function(x, y) {
    x /= w, y *= h;
    var y2 = Object(__WEBPACK_IMPORTED_MODULE_4__math__["a" /* abs */])(y);
    if (y2 > y0) {
      var i = Object(__WEBPACK_IMPORTED_MODULE_4__math__["r" /* min */])(H - 1, Object(__WEBPACK_IMPORTED_MODULE_4__math__["q" /* max */])(0, Object(__WEBPACK_IMPORTED_MODULE_4__math__["n" /* floor */])((x + __WEBPACK_IMPORTED_MODULE_4__math__["s" /* pi */]) / k)));
      x = (x + __WEBPACK_IMPORTED_MODULE_4__math__["s" /* pi */] * (H - 1) / H - i * k) * dx / __WEBPACK_IMPORTED_MODULE_4__math__["H" /* tau */];
      var point = __WEBPACK_IMPORTED_MODULE_2__collignon__["a" /* collignonRaw */].invert(x, 0.25 * (y2 - y0) * __WEBPACK_IMPORTED_MODULE_4__math__["H" /* tau */] / dy1 + y1);
      point[0] -= __WEBPACK_IMPORTED_MODULE_4__math__["s" /* pi */] * (H - 1) / H - i * k;
      if (y < 0) point[1] = -point[1];
      return point;
    }
    return healpixLambert.invert(x, y);
  };

  return forward;
}

function sphere(step) {
  return {
    type: "Polygon",
    coordinates: [
      Object(__WEBPACK_IMPORTED_MODULE_0_d3_array__["b" /* range */])(-180, 180 + step / 2, step).map(function(x, i) { return [x, i & 1 ? 90 - 1e-6 : healpixParallel]; })
      .concat(Object(__WEBPACK_IMPORTED_MODULE_0_d3_array__["b" /* range */])(180, -180 - step / 2, -step).map(function(x, i) { return [x, i & 1 ? -90 + 1e-6 : -healpixParallel]; }))
    ]
  };
}

/* unused harmony default export */ var _unused_webpack_default_export = (function() {
  var H = 4,
      m = Object(__WEBPACK_IMPORTED_MODULE_1_d3_geo__["l" /* geoProjectionMutator */])(healpixRaw),
      p = m(H),
      stream_ = p.stream;

  p.lobes = function(_) {
    return arguments.length ? m(H = +_) : H;
  };

  p.stream = function(stream) {
    var rotate = p.rotate(),
        rotateStream = stream_(stream),
        sphereStream = (p.rotate([0, 0]), stream_(stream));
    p.rotate(rotate);
    rotateStream.sphere = function() { Object(__WEBPACK_IMPORTED_MODULE_1_d3_geo__["n" /* geoStream */])(sphere(180 / H), sphereStream); };
    return rotateStream;
  };

  return p
      .scale(239.75);
});


/***/ }),

/***/ "./node_modules/d3-geo-projection/src/hill.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export hillRaw */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_d3_geo__ = __webpack_require__("./node_modules/d3-geo-projection/node_modules/d3-geo/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__math__ = __webpack_require__("./node_modules/d3-geo-projection/src/math.js");



function hillRaw(K) {
  var L = 1 + K,
      sinBt = Object(__WEBPACK_IMPORTED_MODULE_1__math__["y" /* sin */])(1 / L),
      Bt = Object(__WEBPACK_IMPORTED_MODULE_1__math__["e" /* asin */])(sinBt),
      A = 2 * Object(__WEBPACK_IMPORTED_MODULE_1__math__["B" /* sqrt */])(__WEBPACK_IMPORTED_MODULE_1__math__["s" /* pi */] / (B = __WEBPACK_IMPORTED_MODULE_1__math__["s" /* pi */] + 4 * Bt * L)),
      B,
      rho0 = 0.5 * A * (L + Object(__WEBPACK_IMPORTED_MODULE_1__math__["B" /* sqrt */])(K * (2 + K))),
      K2 = K * K,
      L2 = L * L;

  function forward(lambda, phi) {
    var t = 1 - Object(__WEBPACK_IMPORTED_MODULE_1__math__["y" /* sin */])(phi),
        rho,
        omega;
    if (t && t < 2) {
      var theta = __WEBPACK_IMPORTED_MODULE_1__math__["o" /* halfPi */] - phi, i = 25, delta;
      do {
        var sinTheta = Object(__WEBPACK_IMPORTED_MODULE_1__math__["y" /* sin */])(theta),
            cosTheta = Object(__WEBPACK_IMPORTED_MODULE_1__math__["h" /* cos */])(theta),
            Bt_Bt1 = Bt + Object(__WEBPACK_IMPORTED_MODULE_1__math__["g" /* atan2 */])(sinTheta, L - cosTheta),
            C = 1 + L2 - 2 * L * cosTheta;
        theta -= delta = (theta - K2 * Bt - L * sinTheta + C * Bt_Bt1 -0.5 * t * B) / (2 * L * sinTheta * Bt_Bt1);
      } while (Object(__WEBPACK_IMPORTED_MODULE_1__math__["a" /* abs */])(delta) > __WEBPACK_IMPORTED_MODULE_1__math__["l" /* epsilon2 */] && --i > 0);
      rho = A * Object(__WEBPACK_IMPORTED_MODULE_1__math__["B" /* sqrt */])(C);
      omega = lambda * Bt_Bt1 / __WEBPACK_IMPORTED_MODULE_1__math__["s" /* pi */];
    } else {
      rho = A * (K + t);
      omega = lambda * Bt / __WEBPACK_IMPORTED_MODULE_1__math__["s" /* pi */];
    }
    return [
      rho * Object(__WEBPACK_IMPORTED_MODULE_1__math__["y" /* sin */])(omega),
      rho0 - rho * Object(__WEBPACK_IMPORTED_MODULE_1__math__["h" /* cos */])(omega)
    ];
  }

  forward.invert = function(x, y) {
    var rho2 = x * x + (y -= rho0) * y,
        cosTheta = (1 + L2 - rho2 / (A * A)) / (2 * L),
        theta = Object(__WEBPACK_IMPORTED_MODULE_1__math__["b" /* acos */])(cosTheta),
        sinTheta = Object(__WEBPACK_IMPORTED_MODULE_1__math__["y" /* sin */])(theta),
        Bt_Bt1 = Bt + Object(__WEBPACK_IMPORTED_MODULE_1__math__["g" /* atan2 */])(sinTheta, L - cosTheta);
    return [
      Object(__WEBPACK_IMPORTED_MODULE_1__math__["e" /* asin */])(x / Object(__WEBPACK_IMPORTED_MODULE_1__math__["B" /* sqrt */])(rho2)) * __WEBPACK_IMPORTED_MODULE_1__math__["s" /* pi */] / Bt_Bt1,
      Object(__WEBPACK_IMPORTED_MODULE_1__math__["e" /* asin */])(1 - 2 * (theta - K2 * Bt - L * sinTheta + (1 + L2 - 2 * L * cosTheta) * Bt_Bt1) / B)
    ];
  };

  return forward;
}

/* unused harmony default export */ var _unused_webpack_default_export = (function() {
  var K = 1,
      m = Object(__WEBPACK_IMPORTED_MODULE_0_d3_geo__["l" /* geoProjectionMutator */])(hillRaw),
      p = m(K);

  p.ratio = function(_) {
    return arguments.length ? m(K = +_) : K;
  };

  return p
      .scale(167.774)
      .center([0, 18.67]);
});


/***/ }),

/***/ "./node_modules/d3-geo-projection/src/homolosine.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = homolosineRaw;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_d3_geo__ = __webpack_require__("./node_modules/d3-geo-projection/node_modules/d3-geo/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__math__ = __webpack_require__("./node_modules/d3-geo-projection/src/math.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__mollweide__ = __webpack_require__("./node_modules/d3-geo-projection/src/mollweide.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__sinusoidal__ = __webpack_require__("./node_modules/d3-geo-projection/src/sinusoidal.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__sinuMollweide__ = __webpack_require__("./node_modules/d3-geo-projection/src/sinuMollweide.js");






function homolosineRaw(lambda, phi) {
  return Object(__WEBPACK_IMPORTED_MODULE_1__math__["a" /* abs */])(phi) > __WEBPACK_IMPORTED_MODULE_4__sinuMollweide__["a" /* sinuMollweidePhi */]
      ? (lambda = Object(__WEBPACK_IMPORTED_MODULE_2__mollweide__["c" /* mollweideRaw */])(lambda, phi), lambda[1] -= phi > 0 ? __WEBPACK_IMPORTED_MODULE_4__sinuMollweide__["c" /* sinuMollweideY */] : -__WEBPACK_IMPORTED_MODULE_4__sinuMollweide__["c" /* sinuMollweideY */], lambda)
      : Object(__WEBPACK_IMPORTED_MODULE_3__sinusoidal__["a" /* sinusoidalRaw */])(lambda, phi);
}

homolosineRaw.invert = function(x, y) {
  return Object(__WEBPACK_IMPORTED_MODULE_1__math__["a" /* abs */])(y) > __WEBPACK_IMPORTED_MODULE_4__sinuMollweide__["a" /* sinuMollweidePhi */]
      ? __WEBPACK_IMPORTED_MODULE_2__mollweide__["c" /* mollweideRaw */].invert(x, y + (y > 0 ? __WEBPACK_IMPORTED_MODULE_4__sinuMollweide__["c" /* sinuMollweideY */] : -__WEBPACK_IMPORTED_MODULE_4__sinuMollweide__["c" /* sinuMollweideY */]))
      : __WEBPACK_IMPORTED_MODULE_3__sinusoidal__["a" /* sinusoidalRaw */].invert(x, y);
};

/* unused harmony default export */ var _unused_webpack_default_export = (function() {
  return Object(__WEBPACK_IMPORTED_MODULE_0_d3_geo__["k" /* geoProjection */])(homolosineRaw)
      .scale(152.63);
});


/***/ }),

/***/ "./node_modules/d3-geo-projection/src/interrupted/boggs.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__boggs__ = __webpack_require__("./node_modules/d3-geo-projection/src/boggs.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index__ = __webpack_require__("./node_modules/d3-geo-projection/src/interrupted/index.js");



var lobes = [[ // northern hemisphere
  [[-180,   0], [-100,  90], [ -40,   0]],
  [[ -40,   0], [  30,  90], [ 180,   0]]
], [ // southern hemisphere
  [[-180,   0], [-160, -90], [-100,   0]],
  [[-100,   0], [ -60, -90], [ -20,   0]],
  [[ -20,   0], [  20, -90], [  80,   0]],
  [[  80,   0], [ 140, -90], [ 180,   0]]
]];

/* unused harmony default export */ var _unused_webpack_default_export = (function() {
  return Object(__WEBPACK_IMPORTED_MODULE_1__index__["a" /* default */])(__WEBPACK_IMPORTED_MODULE_0__boggs__["a" /* boggsRaw */], lobes)
      .scale(160.857);
});


/***/ }),

/***/ "./node_modules/d3-geo-projection/src/interrupted/homolosine.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__homolosine__ = __webpack_require__("./node_modules/d3-geo-projection/src/homolosine.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index__ = __webpack_require__("./node_modules/d3-geo-projection/src/interrupted/index.js");



var lobes = [[ // northern hemisphere
  [[-180,   0], [-100,  90], [ -40,   0]],
  [[ -40,   0], [  30,  90], [ 180,   0]]
], [ // southern hemisphere
  [[-180,   0], [-160, -90], [-100,   0]],
  [[-100,   0], [ -60, -90], [ -20,   0]],
  [[ -20,   0], [  20, -90], [  80,   0]],
  [[  80,   0], [ 140, -90], [ 180,   0]]
]];

/* unused harmony default export */ var _unused_webpack_default_export = (function() {
  return Object(__WEBPACK_IMPORTED_MODULE_1__index__["a" /* default */])(__WEBPACK_IMPORTED_MODULE_0__homolosine__["a" /* homolosineRaw */], lobes)
      .scale(152.63);
});


/***/ }),

/***/ "./node_modules/d3-geo-projection/src/interrupted/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_d3_array__ = __webpack_require__("./node_modules/d3-array/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_d3_geo__ = __webpack_require__("./node_modules/d3-geo-projection/node_modules/d3-geo/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__math__ = __webpack_require__("./node_modules/d3-geo-projection/src/math.js");




function pointEqual(a, b) {
  return Object(__WEBPACK_IMPORTED_MODULE_2__math__["a" /* abs */])(a[0] - b[0]) < __WEBPACK_IMPORTED_MODULE_2__math__["k" /* epsilon */] && Object(__WEBPACK_IMPORTED_MODULE_2__math__["a" /* abs */])(a[1] - b[1]) < __WEBPACK_IMPORTED_MODULE_2__math__["k" /* epsilon */];
}

function interpolateLine(coordinates, m) {
  var i = -1,
      n = coordinates.length,
      p0 = coordinates[0],
      p1,
      dx,
      dy,
      resampled = [];
  while (++i < n) {
    p1 = coordinates[i];
    dx = (p1[0] - p0[0]) / m;
    dy = (p1[1] - p0[1]) / m;
    for (var j = 0; j < m; ++j) resampled.push([p0[0] + j * dx, p0[1] + j * dy]);
    p0 = p1;
  }
  resampled.push(p1);
  return resampled;
}

function interpolateSphere(lobes) {
  var coordinates = [],
      lobe,
      lambda0, phi0, phi1,
      lambda2, phi2,
      i, n = lobes[0].length;

  // Northern Hemisphere
  for (i = 0; i < n; ++i) {
    lobe = lobes[0][i];
    lambda0 = lobe[0][0], phi0 = lobe[0][1], phi1 = lobe[1][1];
    lambda2 = lobe[2][0], phi2 = lobe[2][1];
    coordinates.push(interpolateLine([
      [lambda0 + __WEBPACK_IMPORTED_MODULE_2__math__["k" /* epsilon */], phi0 + __WEBPACK_IMPORTED_MODULE_2__math__["k" /* epsilon */]],
      [lambda0 + __WEBPACK_IMPORTED_MODULE_2__math__["k" /* epsilon */], phi1 - __WEBPACK_IMPORTED_MODULE_2__math__["k" /* epsilon */]],
      [lambda2 - __WEBPACK_IMPORTED_MODULE_2__math__["k" /* epsilon */], phi1 - __WEBPACK_IMPORTED_MODULE_2__math__["k" /* epsilon */]],
      [lambda2 - __WEBPACK_IMPORTED_MODULE_2__math__["k" /* epsilon */], phi2 + __WEBPACK_IMPORTED_MODULE_2__math__["k" /* epsilon */]]
    ], 30));
  }

  // Southern Hemisphere
  for (i = lobes[1].length - 1; i >= 0; --i) {
    lobe = lobes[1][i];
    lambda0 = lobe[0][0], phi0 = lobe[0][1], phi1 = lobe[1][1];
    lambda2 = lobe[2][0], phi2 = lobe[2][1];
    coordinates.push(interpolateLine([
      [lambda2 - __WEBPACK_IMPORTED_MODULE_2__math__["k" /* epsilon */], phi2 - __WEBPACK_IMPORTED_MODULE_2__math__["k" /* epsilon */]],
      [lambda2 - __WEBPACK_IMPORTED_MODULE_2__math__["k" /* epsilon */], phi1 + __WEBPACK_IMPORTED_MODULE_2__math__["k" /* epsilon */]],
      [lambda0 + __WEBPACK_IMPORTED_MODULE_2__math__["k" /* epsilon */], phi1 + __WEBPACK_IMPORTED_MODULE_2__math__["k" /* epsilon */]],
      [lambda0 + __WEBPACK_IMPORTED_MODULE_2__math__["k" /* epsilon */], phi0 - __WEBPACK_IMPORTED_MODULE_2__math__["k" /* epsilon */]]
    ], 30));
  }

  return {
    type: "Polygon",
    coordinates: [Object(__WEBPACK_IMPORTED_MODULE_0_d3_array__["a" /* merge */])(coordinates)]
  };
}

/* harmony default export */ __webpack_exports__["a"] = (function(project, lobes) {
  var sphere, bounds;

  function forward(lambda, phi) {
    var sign = phi < 0 ? -1 : +1, lobe = lobes[+(phi < 0)];
    for (var i = 0, n = lobe.length - 1; i < n && lambda > lobe[i][2][0]; ++i);
    var p = project(lambda - lobe[i][1][0], phi);
    p[0] += project(lobe[i][1][0], sign * phi > sign * lobe[i][0][1] ? lobe[i][0][1] : phi)[0];
    return p;
  }

  // Assumes mutually exclusive bounding boxes for lobes.
  if (project.invert) forward.invert = function(x, y) {
    var bound = bounds[+(y < 0)], lobe = lobes[+(y < 0)];
    for (var i = 0, n = bound.length; i < n; ++i) {
      var b = bound[i];
      if (b[0][0] <= x && x < b[1][0] && b[0][1] <= y && y < b[1][1]) {
        var p = project.invert(x - project(lobe[i][1][0], 0)[0], y);
        p[0] += lobe[i][1][0];
        return pointEqual(forward(p[0], p[1]), [x, y]) ? p : null;
      }
    }
  };

  var p = Object(__WEBPACK_IMPORTED_MODULE_1_d3_geo__["k" /* geoProjection */])(forward),
      stream_ = p.stream;

  p.stream = function(stream) {
    var rotate = p.rotate(),
        rotateStream = stream_(stream),
        sphereStream = (p.rotate([0, 0]), stream_(stream));
    p.rotate(rotate);
    rotateStream.sphere = function() { Object(__WEBPACK_IMPORTED_MODULE_1_d3_geo__["n" /* geoStream */])(sphere, sphereStream); };
    return rotateStream;
  };
  
  p.lobes = function(_) {
    if (!arguments.length) return lobes.map(function(lobe) {
      return lobe.map(function(l) {
        return [
          [l[0][0] * __WEBPACK_IMPORTED_MODULE_2__math__["j" /* degrees */], l[0][1] * __WEBPACK_IMPORTED_MODULE_2__math__["j" /* degrees */]],
          [l[1][0] * __WEBPACK_IMPORTED_MODULE_2__math__["j" /* degrees */], l[1][1] * __WEBPACK_IMPORTED_MODULE_2__math__["j" /* degrees */]],
          [l[2][0] * __WEBPACK_IMPORTED_MODULE_2__math__["j" /* degrees */], l[2][1] * __WEBPACK_IMPORTED_MODULE_2__math__["j" /* degrees */]]
        ];
      });
    });

    sphere = interpolateSphere(_);

    lobes = _.map(function(lobe) {
      return lobe.map(function(l) {
        return [
          [l[0][0] * __WEBPACK_IMPORTED_MODULE_2__math__["v" /* radians */], l[0][1] * __WEBPACK_IMPORTED_MODULE_2__math__["v" /* radians */]],
          [l[1][0] * __WEBPACK_IMPORTED_MODULE_2__math__["v" /* radians */], l[1][1] * __WEBPACK_IMPORTED_MODULE_2__math__["v" /* radians */]],
          [l[2][0] * __WEBPACK_IMPORTED_MODULE_2__math__["v" /* radians */], l[2][1] * __WEBPACK_IMPORTED_MODULE_2__math__["v" /* radians */]]
        ];
      });
    });

    bounds = lobes.map(function(lobe) {
      return lobe.map(function(l) {
        var x0 = project(l[0][0], l[0][1])[0],
            x1 = project(l[2][0], l[2][1])[0],
            y0 = project(l[1][0], l[0][1])[1],
            y1 = project(l[1][0], l[1][1])[1],
            t;
        if (y0 > y1) t = y0, y0 = y1, y1 = t;
        return [[x0, y0], [x1, y1]];
      });
    });

    return p;
  };

  if (lobes != null) p.lobes(lobes);

  return p;
});


/***/ }),

/***/ "./node_modules/d3-geo-projection/src/interrupted/mollweide.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__mollweide__ = __webpack_require__("./node_modules/d3-geo-projection/src/mollweide.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index__ = __webpack_require__("./node_modules/d3-geo-projection/src/interrupted/index.js");



var lobes = [[ // northern hemisphere
  [[-180,   0], [-100,  90], [ -40,   0]],
  [[ -40,   0], [  30,  90], [ 180,   0]]
], [ // southern hemisphere
  [[-180,   0], [-160, -90], [-100,   0]],
  [[-100,   0], [ -60, -90], [ -20,   0]],
  [[ -20,   0], [  20, -90], [  80,   0]],
  [[  80,   0], [ 140, -90], [ 180,   0]]
]];

/* unused harmony default export */ var _unused_webpack_default_export = (function() {
  return Object(__WEBPACK_IMPORTED_MODULE_1__index__["a" /* default */])(__WEBPACK_IMPORTED_MODULE_0__mollweide__["c" /* mollweideRaw */], lobes)
      .scale(169.529);
});


/***/ }),

/***/ "./node_modules/d3-geo-projection/src/interrupted/mollweideHemispheres.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__mollweide__ = __webpack_require__("./node_modules/d3-geo-projection/src/mollweide.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index__ = __webpack_require__("./node_modules/d3-geo-projection/src/interrupted/index.js");



var lobes = [[ // northern hemisphere
  [[-180,   0], [ -90,  90], [   0,   0]],
  [[   0,   0], [  90,  90], [ 180,   0]]
], [ // southern hemisphere
  [[-180,   0], [ -90, -90], [   0,   0]],
  [[   0,   0], [  90, -90], [ 180,   0]]
]];

/* unused harmony default export */ var _unused_webpack_default_export = (function() {
  return Object(__WEBPACK_IMPORTED_MODULE_1__index__["a" /* default */])(__WEBPACK_IMPORTED_MODULE_0__mollweide__["c" /* mollweideRaw */], lobes)
      .scale(169.529)
      .rotate([20, 0]);
});


/***/ }),

/***/ "./node_modules/d3-geo-projection/src/interrupted/sinuMollweide.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__sinuMollweide__ = __webpack_require__("./node_modules/d3-geo-projection/src/sinuMollweide.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index__ = __webpack_require__("./node_modules/d3-geo-projection/src/interrupted/index.js");



var lobes = [[ // northern hemisphere
  [[-180,  35], [ -30,  90], [   0,  35]],
  [[   0,  35], [  30,  90], [ 180,  35]]
], [ // southern hemisphere
  [[-180, -10], [-102, -90], [ -65, -10]],
  [[ -65, -10], [   5, -90], [  77, -10]],
  [[  77, -10], [ 103, -90], [ 180, -10]]
]];

/* unused harmony default export */ var _unused_webpack_default_export = (function() {
  return Object(__WEBPACK_IMPORTED_MODULE_1__index__["a" /* default */])(__WEBPACK_IMPORTED_MODULE_0__sinuMollweide__["b" /* sinuMollweideRaw */], lobes)
      .rotate([-20, -55])
      .scale(164.263)
      .center([0, -5.4036]);
});


/***/ }),

/***/ "./node_modules/d3-geo-projection/src/interrupted/sinusoidal.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__sinusoidal__ = __webpack_require__("./node_modules/d3-geo-projection/src/sinusoidal.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index__ = __webpack_require__("./node_modules/d3-geo-projection/src/interrupted/index.js");



var lobes = [[ // northern hemisphere
  [[-180,   0], [-110,  90], [ -40,   0]],
  [[ -40,   0], [   0,  90], [  40,   0]],
  [[  40,   0], [ 110,  90], [ 180,   0]]
], [ // southern hemisphere
  [[-180,   0], [-110, -90], [ -40,   0]],
  [[ -40,   0], [   0, -90], [  40,   0]],
  [[  40,   0], [ 110, -90], [ 180,   0]]
]];

/* unused harmony default export */ var _unused_webpack_default_export = (function() {
  return Object(__WEBPACK_IMPORTED_MODULE_1__index__["a" /* default */])(__WEBPACK_IMPORTED_MODULE_0__sinusoidal__["a" /* sinusoidalRaw */], lobes)
      .scale(152.63)
      .rotate([-20, 0]);
});


/***/ }),

/***/ "./node_modules/d3-geo-projection/src/kavrayskiy7.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export kavrayskiy7Raw */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_d3_geo__ = __webpack_require__("./node_modules/d3-geo-projection/node_modules/d3-geo/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__math__ = __webpack_require__("./node_modules/d3-geo-projection/src/math.js");



function kavrayskiy7Raw(lambda, phi) {
  return [3 / __WEBPACK_IMPORTED_MODULE_1__math__["H" /* tau */] * lambda * Object(__WEBPACK_IMPORTED_MODULE_1__math__["B" /* sqrt */])(__WEBPACK_IMPORTED_MODULE_1__math__["s" /* pi */] * __WEBPACK_IMPORTED_MODULE_1__math__["s" /* pi */] / 3 - phi * phi), phi];
}

kavrayskiy7Raw.invert = function(x, y) {
  return [__WEBPACK_IMPORTED_MODULE_1__math__["H" /* tau */] / 3 * x / Object(__WEBPACK_IMPORTED_MODULE_1__math__["B" /* sqrt */])(__WEBPACK_IMPORTED_MODULE_1__math__["s" /* pi */] * __WEBPACK_IMPORTED_MODULE_1__math__["s" /* pi */] / 3 - y * y), y];
};

/* unused harmony default export */ var _unused_webpack_default_export = (function() {
  return Object(__WEBPACK_IMPORTED_MODULE_0_d3_geo__["k" /* geoProjection */])(kavrayskiy7Raw)
      .scale(158.837);
});


/***/ }),

/***/ "./node_modules/d3-geo-projection/src/lagrange.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export lagrangeRaw */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_d3_geo__ = __webpack_require__("./node_modules/d3-geo-projection/node_modules/d3-geo/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__math__ = __webpack_require__("./node_modules/d3-geo-projection/src/math.js");



function lagrangeRaw(n) {

  function forward(lambda, phi) {
    if (Object(__WEBPACK_IMPORTED_MODULE_1__math__["a" /* abs */])(Object(__WEBPACK_IMPORTED_MODULE_1__math__["a" /* abs */])(phi) - __WEBPACK_IMPORTED_MODULE_1__math__["o" /* halfPi */]) < __WEBPACK_IMPORTED_MODULE_1__math__["k" /* epsilon */]) return [0, phi < 0 ? -2 : 2];
    var sinPhi = Object(__WEBPACK_IMPORTED_MODULE_1__math__["y" /* sin */])(phi),
        v = Object(__WEBPACK_IMPORTED_MODULE_1__math__["t" /* pow */])((1 + sinPhi) / (1 - sinPhi), n / 2),
        c = 0.5 * (v + 1 / v) + Object(__WEBPACK_IMPORTED_MODULE_1__math__["h" /* cos */])(lambda *= n);
    return [
      2 * Object(__WEBPACK_IMPORTED_MODULE_1__math__["y" /* sin */])(lambda) / c,
      (v - 1 / v) / c
    ];
  }

  forward.invert = function(x, y) {
    var y0 = Object(__WEBPACK_IMPORTED_MODULE_1__math__["a" /* abs */])(y);
    if (Object(__WEBPACK_IMPORTED_MODULE_1__math__["a" /* abs */])(y0 - 2) < __WEBPACK_IMPORTED_MODULE_1__math__["k" /* epsilon */]) return x ? null : [0, Object(__WEBPACK_IMPORTED_MODULE_1__math__["x" /* sign */])(y) * __WEBPACK_IMPORTED_MODULE_1__math__["o" /* halfPi */]];
    if (y0 > 2) return null;

    x /= 2, y /= 2;
    var x2 = x * x,
        y2 = y * y,
        t = 2 * y / (1 + x2 + y2); // tanh(nPhi)
    t = Object(__WEBPACK_IMPORTED_MODULE_1__math__["t" /* pow */])((1 + t) / (1 - t), 1 / n);
    return [
      Object(__WEBPACK_IMPORTED_MODULE_1__math__["g" /* atan2 */])(2 * x, 1 - x2 - y2) / n,
      Object(__WEBPACK_IMPORTED_MODULE_1__math__["e" /* asin */])((t - 1) / (t + 1))
    ];
  };

  return forward;
}

/* unused harmony default export */ var _unused_webpack_default_export = (function() {
  var n = 0.5,
      m = Object(__WEBPACK_IMPORTED_MODULE_0_d3_geo__["l" /* geoProjectionMutator */])(lagrangeRaw),
      p = m(n);

  p.spacing = function(_) {
    return arguments.length ? m(n = +_) : n;
  };

  return p
      .scale(124.75);
});


/***/ }),

/***/ "./node_modules/d3-geo-projection/src/larrivee.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export larriveeRaw */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_d3_geo__ = __webpack_require__("./node_modules/d3-geo-projection/node_modules/d3-geo/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__math__ = __webpack_require__("./node_modules/d3-geo-projection/src/math.js");



var pi_sqrt2 = __WEBPACK_IMPORTED_MODULE_1__math__["s" /* pi */] / __WEBPACK_IMPORTED_MODULE_1__math__["D" /* sqrt2 */];

function larriveeRaw(lambda, phi) {
  return [
    lambda * (1 + Object(__WEBPACK_IMPORTED_MODULE_1__math__["B" /* sqrt */])(Object(__WEBPACK_IMPORTED_MODULE_1__math__["h" /* cos */])(phi))) / 2,
    phi / (Object(__WEBPACK_IMPORTED_MODULE_1__math__["h" /* cos */])(phi / 2) * Object(__WEBPACK_IMPORTED_MODULE_1__math__["h" /* cos */])(lambda / 6))
  ];
}

larriveeRaw.invert = function(x, y) {
  var x0 = Object(__WEBPACK_IMPORTED_MODULE_1__math__["a" /* abs */])(x),
      y0 = Object(__WEBPACK_IMPORTED_MODULE_1__math__["a" /* abs */])(y),
      lambda = __WEBPACK_IMPORTED_MODULE_1__math__["k" /* epsilon */],
      phi = __WEBPACK_IMPORTED_MODULE_1__math__["o" /* halfPi */];
  if (y0 < pi_sqrt2) phi *= y0 / pi_sqrt2;
  else lambda += 6 * Object(__WEBPACK_IMPORTED_MODULE_1__math__["b" /* acos */])(pi_sqrt2 / y0);
  for (var i = 0; i < 25; i++) {
    var sinPhi = Object(__WEBPACK_IMPORTED_MODULE_1__math__["y" /* sin */])(phi),
        sqrtcosPhi = Object(__WEBPACK_IMPORTED_MODULE_1__math__["B" /* sqrt */])(Object(__WEBPACK_IMPORTED_MODULE_1__math__["h" /* cos */])(phi)),
        sinPhi_2 = Object(__WEBPACK_IMPORTED_MODULE_1__math__["y" /* sin */])(phi / 2),
        cosPhi_2 = Object(__WEBPACK_IMPORTED_MODULE_1__math__["h" /* cos */])(phi / 2),
        sinLambda_6 = Object(__WEBPACK_IMPORTED_MODULE_1__math__["y" /* sin */])(lambda / 6),
        cosLambda_6 = Object(__WEBPACK_IMPORTED_MODULE_1__math__["h" /* cos */])(lambda / 6),
        f0 = 0.5 * lambda * (1 + sqrtcosPhi) - x0,
        f1 = phi / (cosPhi_2 * cosLambda_6) - y0,
        df0dPhi = sqrtcosPhi ? -0.25 * lambda * sinPhi / sqrtcosPhi : 0,
        df0dLambda = 0.5 * (1 + sqrtcosPhi),
        df1dPhi = (1 +0.5 * phi * sinPhi_2 / cosPhi_2) / (cosPhi_2 * cosLambda_6),
        df1dLambda = (phi / cosPhi_2) * (sinLambda_6 / 6) / (cosLambda_6 * cosLambda_6),
        denom = df0dPhi * df1dLambda - df1dPhi * df0dLambda,
        dPhi = (f0 * df1dLambda - f1 * df0dLambda) / denom,
        dLambda = (f1 * df0dPhi - f0 * df1dPhi) / denom;
    phi -= dPhi;
    lambda -= dLambda;
    if (Object(__WEBPACK_IMPORTED_MODULE_1__math__["a" /* abs */])(dPhi) < __WEBPACK_IMPORTED_MODULE_1__math__["k" /* epsilon */] && Object(__WEBPACK_IMPORTED_MODULE_1__math__["a" /* abs */])(dLambda) < __WEBPACK_IMPORTED_MODULE_1__math__["k" /* epsilon */]) break;
  }
  return [x < 0 ? -lambda : lambda, y < 0 ? -phi : phi];
};

/* unused harmony default export */ var _unused_webpack_default_export = (function() {
  return Object(__WEBPACK_IMPORTED_MODULE_0_d3_geo__["k" /* geoProjection */])(larriveeRaw)
      .scale(97.2672);
});


/***/ }),

/***/ "./node_modules/d3-geo-projection/src/laskowski.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export laskowskiRaw */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_d3_geo__ = __webpack_require__("./node_modules/d3-geo-projection/node_modules/d3-geo/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__math__ = __webpack_require__("./node_modules/d3-geo-projection/src/math.js");



function laskowskiRaw(lambda, phi) {
  var lambda2 = lambda * lambda, phi2 = phi * phi;
  return [
    lambda * (0.975534 + phi2 * (-0.119161 + lambda2 * -0.0143059 + phi2 * -0.0547009)),
    phi * (1.00384 + lambda2 * (0.0802894 + phi2 * -0.02855 + lambda2 * 0.000199025) + phi2 * (0.0998909 + phi2 * -0.0491032))
  ];
}

laskowskiRaw.invert = function(x, y) {
  var lambda = Object(__WEBPACK_IMPORTED_MODULE_1__math__["x" /* sign */])(x) * __WEBPACK_IMPORTED_MODULE_1__math__["s" /* pi */],
      phi = y / 2,
      i = 50;
  do {
    var lambda2 = lambda * lambda,
        phi2 = phi * phi,
        lambdaPhi = lambda * phi,
        fx = lambda * (0.975534 + phi2 * (-0.119161 + lambda2 * -0.0143059 + phi2 * -0.0547009)) - x,
        fy = phi * (1.00384 + lambda2 * (0.0802894 + phi2 * -0.02855 + lambda2 * 0.000199025) + phi2 * (0.0998909 + phi2 * -0.0491032)) - y,
        deltaxDeltaLambda = 0.975534 - phi2 * (0.119161 + 3 * lambda2 * 0.0143059 + phi2 * 0.0547009),
        deltaxDeltaPhi = -lambdaPhi * (2 * 0.119161 + 4 * 0.0547009 * phi2 + 2 * 0.0143059 * lambda2),
        deltayDeltaLambda = lambdaPhi * (2 * 0.0802894 + 4 * 0.000199025 * lambda2 + 2 * -0.02855 * phi2),
        deltayDeltaPhi = 1.00384 + lambda2 * (0.0802894 + 0.000199025 * lambda2) + phi2 * (3 * (0.0998909 - 0.02855 * lambda2) - 5 * 0.0491032 * phi2),
        denominator = deltaxDeltaPhi * deltayDeltaLambda - deltayDeltaPhi * deltaxDeltaLambda,
        deltaLambda = (fy * deltaxDeltaPhi - fx * deltayDeltaPhi) / denominator,
        deltaPhi = (fx * deltayDeltaLambda - fy * deltaxDeltaLambda) / denominator;
    lambda -= deltaLambda, phi -= deltaPhi;
  } while ((Object(__WEBPACK_IMPORTED_MODULE_1__math__["a" /* abs */])(deltaLambda) > __WEBPACK_IMPORTED_MODULE_1__math__["k" /* epsilon */] || Object(__WEBPACK_IMPORTED_MODULE_1__math__["a" /* abs */])(deltaPhi) > __WEBPACK_IMPORTED_MODULE_1__math__["k" /* epsilon */]) && --i > 0);
  return i && [lambda, phi];
};

/* unused harmony default export */ var _unused_webpack_default_export = (function() {
  return Object(__WEBPACK_IMPORTED_MODULE_0_d3_geo__["k" /* geoProjection */])(laskowskiRaw)
      .scale(139.98);
});


/***/ }),

/***/ "./node_modules/d3-geo-projection/src/littrow.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export littrowRaw */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_d3_geo__ = __webpack_require__("./node_modules/d3-geo-projection/node_modules/d3-geo/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__math__ = __webpack_require__("./node_modules/d3-geo-projection/src/math.js");



function littrowRaw(lambda, phi) {
  return [
    Object(__WEBPACK_IMPORTED_MODULE_1__math__["y" /* sin */])(lambda) / Object(__WEBPACK_IMPORTED_MODULE_1__math__["h" /* cos */])(phi),
    Object(__WEBPACK_IMPORTED_MODULE_1__math__["F" /* tan */])(phi) * Object(__WEBPACK_IMPORTED_MODULE_1__math__["h" /* cos */])(lambda)
  ];
}

littrowRaw.invert = function(x, y) {
  var x2 = x * x,
      y2 = y * y,
      y2_1 = y2 + 1,
      x2_y2_1 = x2 + y2_1,
      cosPhi = x
          ? __WEBPACK_IMPORTED_MODULE_1__math__["C" /* sqrt1_2 */] * Object(__WEBPACK_IMPORTED_MODULE_1__math__["B" /* sqrt */])((x2_y2_1 - Object(__WEBPACK_IMPORTED_MODULE_1__math__["B" /* sqrt */])(x2_y2_1 * x2_y2_1 - 4 * x2)) / x2)
          : 1 / Object(__WEBPACK_IMPORTED_MODULE_1__math__["B" /* sqrt */])(y2_1);
  return [
    Object(__WEBPACK_IMPORTED_MODULE_1__math__["e" /* asin */])(x * cosPhi),
    Object(__WEBPACK_IMPORTED_MODULE_1__math__["x" /* sign */])(y) * Object(__WEBPACK_IMPORTED_MODULE_1__math__["b" /* acos */])(cosPhi)
  ];
};

/* unused harmony default export */ var _unused_webpack_default_export = (function() {
  return Object(__WEBPACK_IMPORTED_MODULE_0_d3_geo__["k" /* geoProjection */])(littrowRaw)
      .scale(144.049)
      .clipAngle(90 - 1e-3);
});


/***/ }),

/***/ "./node_modules/d3-geo-projection/src/loximuthal.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export loximuthalRaw */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__parallel1__ = __webpack_require__("./node_modules/d3-geo-projection/src/parallel1.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__math__ = __webpack_require__("./node_modules/d3-geo-projection/src/math.js");



function loximuthalRaw(phi0) {
  var cosPhi0 = Object(__WEBPACK_IMPORTED_MODULE_1__math__["h" /* cos */])(phi0),
      tanPhi0 = Object(__WEBPACK_IMPORTED_MODULE_1__math__["F" /* tan */])(__WEBPACK_IMPORTED_MODULE_1__math__["u" /* quarterPi */] + phi0 / 2);

  function forward(lambda, phi) {
    var y = phi - phi0,
        x = Object(__WEBPACK_IMPORTED_MODULE_1__math__["a" /* abs */])(y) < __WEBPACK_IMPORTED_MODULE_1__math__["k" /* epsilon */] ? lambda * cosPhi0
            : Object(__WEBPACK_IMPORTED_MODULE_1__math__["a" /* abs */])(x = __WEBPACK_IMPORTED_MODULE_1__math__["u" /* quarterPi */] + phi / 2) < __WEBPACK_IMPORTED_MODULE_1__math__["k" /* epsilon */] || Object(__WEBPACK_IMPORTED_MODULE_1__math__["a" /* abs */])(Object(__WEBPACK_IMPORTED_MODULE_1__math__["a" /* abs */])(x) - __WEBPACK_IMPORTED_MODULE_1__math__["o" /* halfPi */]) < __WEBPACK_IMPORTED_MODULE_1__math__["k" /* epsilon */]
            ? 0 : lambda * y / Object(__WEBPACK_IMPORTED_MODULE_1__math__["p" /* log */])(Object(__WEBPACK_IMPORTED_MODULE_1__math__["F" /* tan */])(x) / tanPhi0);
    return [x, y];
  }

  forward.invert = function(x, y) {
    var lambda,
        phi = y + phi0;
    return [
      Object(__WEBPACK_IMPORTED_MODULE_1__math__["a" /* abs */])(y) < __WEBPACK_IMPORTED_MODULE_1__math__["k" /* epsilon */] ? x / cosPhi0
          : (Object(__WEBPACK_IMPORTED_MODULE_1__math__["a" /* abs */])(lambda = __WEBPACK_IMPORTED_MODULE_1__math__["u" /* quarterPi */] + phi / 2) < __WEBPACK_IMPORTED_MODULE_1__math__["k" /* epsilon */] || Object(__WEBPACK_IMPORTED_MODULE_1__math__["a" /* abs */])(Object(__WEBPACK_IMPORTED_MODULE_1__math__["a" /* abs */])(lambda) - __WEBPACK_IMPORTED_MODULE_1__math__["o" /* halfPi */]) < __WEBPACK_IMPORTED_MODULE_1__math__["k" /* epsilon */]) ? 0
          : x * Object(__WEBPACK_IMPORTED_MODULE_1__math__["p" /* log */])(Object(__WEBPACK_IMPORTED_MODULE_1__math__["F" /* tan */])(lambda) / tanPhi0) / y,
      phi
    ];
  };

  return forward;
}

/* unused harmony default export */ var _unused_webpack_default_export = (function() {
  return Object(__WEBPACK_IMPORTED_MODULE_0__parallel1__["a" /* default */])(loximuthalRaw)
      .parallel(40)
      .scale(158.837);
});


/***/ }),

/***/ "./node_modules/d3-geo-projection/src/math.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return abs; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return atan; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return atan2; });
/* unused harmony export ceil */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return cos; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "m", function() { return exp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "n", function() { return floor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "p", function() { return log; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "q", function() { return max; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "r", function() { return min; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "t", function() { return pow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "w", function() { return round; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "x", function() { return sign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "y", function() { return sin; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "F", function() { return tan; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "k", function() { return epsilon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "l", function() { return epsilon2; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "s", function() { return pi; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "o", function() { return halfPi; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "u", function() { return quarterPi; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "C", function() { return sqrt1_2; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "D", function() { return sqrt2; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "E", function() { return sqrtPi; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "H", function() { return tau; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return degrees; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "v", function() { return radians; });
/* harmony export (immutable) */ __webpack_exports__["z"] = sinci;
/* harmony export (immutable) */ __webpack_exports__["e"] = asin;
/* harmony export (immutable) */ __webpack_exports__["b"] = acos;
/* harmony export (immutable) */ __webpack_exports__["B"] = sqrt;
/* harmony export (immutable) */ __webpack_exports__["G"] = tanh;
/* harmony export (immutable) */ __webpack_exports__["A"] = sinh;
/* harmony export (immutable) */ __webpack_exports__["i"] = cosh;
/* harmony export (immutable) */ __webpack_exports__["d"] = arsinh;
/* harmony export (immutable) */ __webpack_exports__["c"] = arcosh;
var abs = Math.abs;
var atan = Math.atan;
var atan2 = Math.atan2;
var ceil = Math.ceil;
var cos = Math.cos;
var exp = Math.exp;
var floor = Math.floor;
var log = Math.log;
var max = Math.max;
var min = Math.min;
var pow = Math.pow;
var round = Math.round;
var sign = Math.sign || function(x) { return x > 0 ? 1 : x < 0 ? -1 : 0; };
var sin = Math.sin;
var tan = Math.tan;

var epsilon = 1e-6;
var epsilon2 = 1e-12;
var pi = Math.PI;
var halfPi = pi / 2;
var quarterPi = pi / 4;
var sqrt1_2 = Math.SQRT1_2;
var sqrt2 = sqrt(2);
var sqrtPi = sqrt(pi);
var tau = pi * 2;
var degrees = 180 / pi;
var radians = pi / 180;

function sinci(x) {
  return x ? x / Math.sin(x) : 1;
}

function asin(x) {
  return x > 1 ? halfPi : x < -1 ? -halfPi : Math.asin(x);
}

function acos(x) {
  return x > 1 ? 0 : x < -1 ? pi : Math.acos(x);
}

function sqrt(x) {
  return x > 0 ? Math.sqrt(x) : 0;
}

function tanh(x) {
  x = exp(2 * x);
  return (x - 1) / (x + 1);
}

function sinh(x) {
  return (exp(x) - exp(-x)) / 2;
}

function cosh(x) {
  return (exp(x) + exp(-x)) / 2;
}

function arsinh(x) {
  return log(x + sqrt(x * x + 1));
}

function arcosh(x) {
  return log(x + sqrt(x * x - 1));
}


/***/ }),

/***/ "./node_modules/d3-geo-projection/src/miller.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export millerRaw */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_d3_geo__ = __webpack_require__("./node_modules/d3-geo-projection/node_modules/d3-geo/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__math__ = __webpack_require__("./node_modules/d3-geo-projection/src/math.js");



function millerRaw(lambda, phi) {
  return [lambda, 1.25 * Object(__WEBPACK_IMPORTED_MODULE_1__math__["p" /* log */])(Object(__WEBPACK_IMPORTED_MODULE_1__math__["F" /* tan */])(__WEBPACK_IMPORTED_MODULE_1__math__["u" /* quarterPi */] + 0.4 * phi))];
}

millerRaw.invert = function(x, y) {
  return [x, 2.5 * Object(__WEBPACK_IMPORTED_MODULE_1__math__["f" /* atan */])(Object(__WEBPACK_IMPORTED_MODULE_1__math__["m" /* exp */])(0.8 * y)) - 0.625 * __WEBPACK_IMPORTED_MODULE_1__math__["s" /* pi */]];
};

/* unused harmony default export */ var _unused_webpack_default_export = (function() {
  return Object(__WEBPACK_IMPORTED_MODULE_0_d3_geo__["k" /* geoProjection */])(millerRaw)
      .scale(108.318);
});


/***/ }),

/***/ "./node_modules/d3-geo-projection/src/modifiedStereographic.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export modifiedStereographicRaw */
/* unused harmony export modifiedStereographicAlaska */
/* unused harmony export modifiedStereographicGs48 */
/* unused harmony export modifiedStereographicGs50 */
/* unused harmony export modifiedStereographicMiller */
/* unused harmony export modifiedStereographicLee */
/* unused harmony export default */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_d3_geo__ = __webpack_require__("./node_modules/d3-geo-projection/node_modules/d3-geo/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__math__ = __webpack_require__("./node_modules/d3-geo-projection/src/math.js");



function modifiedStereographicRaw(C) {
  var m = C.length - 1;

  function forward(lambda, phi) {
    var cosPhi = Object(__WEBPACK_IMPORTED_MODULE_1__math__["h" /* cos */])(phi),
        k = 2 / (1 + cosPhi * Object(__WEBPACK_IMPORTED_MODULE_1__math__["h" /* cos */])(lambda)),
        zr = k * cosPhi * Object(__WEBPACK_IMPORTED_MODULE_1__math__["y" /* sin */])(lambda),
        zi = k * Object(__WEBPACK_IMPORTED_MODULE_1__math__["y" /* sin */])(phi),
        i = m,
        w = C[i],
        ar = w[0],
        ai = w[1],
        t;
    while (--i >= 0) {
      w = C[i];
      ar = w[0] + zr * (t = ar) - zi * ai;
      ai = w[1] + zr * ai + zi * t;
    }
    ar = zr * (t = ar) - zi * ai;
    ai = zr * ai + zi * t;
    return [ar, ai];
  }

  forward.invert = function(x, y) {
    var i = 20,
        zr = x,
        zi = y;
    do {
      var j = m,
          w = C[j],
          ar = w[0],
          ai = w[1],
          br = 0,
          bi = 0,
          t;

      while (--j >= 0) {
        w = C[j];
        br = ar + zr * (t = br) - zi * bi;
        bi = ai + zr * bi + zi * t;
        ar = w[0] + zr * (t = ar) - zi * ai;
        ai = w[1] + zr * ai + zi * t;
      }
      br = ar + zr * (t = br) - zi * bi;
      bi = ai + zr * bi + zi * t;
      ar = zr * (t = ar) - zi * ai - x;
      ai = zr * ai + zi * t - y;

      var denominator = br * br + bi * bi, deltar, deltai;
      zr -= deltar = (ar * br + ai * bi) / denominator;
      zi -= deltai = (ai * br - ar * bi) / denominator;
    } while (Object(__WEBPACK_IMPORTED_MODULE_1__math__["a" /* abs */])(deltar) + Object(__WEBPACK_IMPORTED_MODULE_1__math__["a" /* abs */])(deltai) > __WEBPACK_IMPORTED_MODULE_1__math__["k" /* epsilon */] * __WEBPACK_IMPORTED_MODULE_1__math__["k" /* epsilon */] && --i > 0);

    if (i) {
      var rho = Object(__WEBPACK_IMPORTED_MODULE_1__math__["B" /* sqrt */])(zr * zr + zi * zi),
          c = 2 * Object(__WEBPACK_IMPORTED_MODULE_1__math__["f" /* atan */])(rho * 0.5),
          sinc = Object(__WEBPACK_IMPORTED_MODULE_1__math__["y" /* sin */])(c);
      return [Object(__WEBPACK_IMPORTED_MODULE_1__math__["g" /* atan2 */])(zr * sinc, rho * Object(__WEBPACK_IMPORTED_MODULE_1__math__["h" /* cos */])(c)), rho ? Object(__WEBPACK_IMPORTED_MODULE_1__math__["e" /* asin */])(zi * sinc / rho) : 0];
    }
  };

  return forward;
}

var alaska = [[0.9972523, 0], [0.0052513, -0.0041175], [0.0074606, 0.0048125], [-0.0153783, -0.1968253], [0.0636871, -0.1408027], [0.3660976, -0.2937382]],
    gs48 = [[0.98879, 0], [0, 0], [-0.050909, 0], [0, 0], [0.075528, 0]],
    gs50 = [[0.9842990, 0], [0.0211642, 0.0037608], [-0.1036018, -0.0575102], [-0.0329095, -0.0320119], [0.0499471, 0.1223335], [0.0260460, 0.0899805], [0.0007388, -0.1435792], [0.0075848, -0.1334108], [-0.0216473, 0.0776645], [-0.0225161, 0.0853673]],
    miller = [[0.9245, 0], [0, 0], [0.01943, 0]],
    lee = [[0.721316, 0], [0, 0], [-0.00881625, -0.00617325]];

function modifiedStereographicAlaska() {
  return modifiedStereographic(alaska, [152, -64])
      .scale(1500)
      .center([-160.908, 62.4864])
      .clipAngle(25);
}

function modifiedStereographicGs48() {
  return modifiedStereographic(gs48, [95, -38])
      .scale(1000)
      .clipAngle(55)
      .center([-96.5563, 38.8675]);
}

function modifiedStereographicGs50() {
  return modifiedStereographic(gs50, [120, -45])
      .scale(359.513)
      .clipAngle(55)
      .center([-117.474, 53.0628]);
}

function modifiedStereographicMiller() {
  return modifiedStereographic(miller, [-20, -18])
      .scale(209.091)
      .center([20, 16.7214])
      .clipAngle(82);
}

function modifiedStereographicLee() {
  return modifiedStereographic(lee, [165, 10])
      .scale(250)
      .clipAngle(130)
      .center([-165, -10]);
}

function modifiedStereographic(coefficients, rotate) {
  var p = Object(__WEBPACK_IMPORTED_MODULE_0_d3_geo__["k" /* geoProjection */])(modifiedStereographicRaw(coefficients)).rotate(rotate).clipAngle(90),
      r = Object(__WEBPACK_IMPORTED_MODULE_0_d3_geo__["m" /* geoRotation */])(rotate),
      center = p.center;

  delete p.rotate;

  p.center = function(_) {
    return arguments.length ? center(r(_)) : r.invert(center());
  };

  return p;
}


/***/ }),

/***/ "./node_modules/d3-geo-projection/src/mollweide.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["b"] = mollweideBromleyTheta;
/* harmony export (immutable) */ __webpack_exports__["a"] = mollweideBromleyRaw;
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return mollweideRaw; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_d3_geo__ = __webpack_require__("./node_modules/d3-geo-projection/node_modules/d3-geo/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__math__ = __webpack_require__("./node_modules/d3-geo-projection/src/math.js");



function mollweideBromleyTheta(cp, phi) {
  var cpsinPhi = cp * Object(__WEBPACK_IMPORTED_MODULE_1__math__["y" /* sin */])(phi), i = 30, delta;
  do phi -= delta = (phi + Object(__WEBPACK_IMPORTED_MODULE_1__math__["y" /* sin */])(phi) - cpsinPhi) / (1 + Object(__WEBPACK_IMPORTED_MODULE_1__math__["h" /* cos */])(phi));
  while (Object(__WEBPACK_IMPORTED_MODULE_1__math__["a" /* abs */])(delta) > __WEBPACK_IMPORTED_MODULE_1__math__["k" /* epsilon */] && --i > 0);
  return phi / 2;
}

function mollweideBromleyRaw(cx, cy, cp) {

  function forward(lambda, phi) {
    return [cx * lambda * Object(__WEBPACK_IMPORTED_MODULE_1__math__["h" /* cos */])(phi = mollweideBromleyTheta(cp, phi)), cy * Object(__WEBPACK_IMPORTED_MODULE_1__math__["y" /* sin */])(phi)];
  }

  forward.invert = function(x, y) {
    return y = Object(__WEBPACK_IMPORTED_MODULE_1__math__["e" /* asin */])(y / cy), [x / (cx * Object(__WEBPACK_IMPORTED_MODULE_1__math__["h" /* cos */])(y)), Object(__WEBPACK_IMPORTED_MODULE_1__math__["e" /* asin */])((2 * y + Object(__WEBPACK_IMPORTED_MODULE_1__math__["y" /* sin */])(2 * y)) / cp)];
  };

  return forward;
}

var mollweideRaw = mollweideBromleyRaw(__WEBPACK_IMPORTED_MODULE_1__math__["D" /* sqrt2 */] / __WEBPACK_IMPORTED_MODULE_1__math__["o" /* halfPi */], __WEBPACK_IMPORTED_MODULE_1__math__["D" /* sqrt2 */], __WEBPACK_IMPORTED_MODULE_1__math__["s" /* pi */]);

/* unused harmony default export */ var _unused_webpack_default_export = (function() {
  return Object(__WEBPACK_IMPORTED_MODULE_0_d3_geo__["k" /* geoProjection */])(mollweideRaw)
      .scale(169.529);
});


/***/ }),

/***/ "./node_modules/d3-geo-projection/src/mtFlatPolarParabolic.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export mtFlatPolarParabolicRaw */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_d3_geo__ = __webpack_require__("./node_modules/d3-geo-projection/node_modules/d3-geo/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__math__ = __webpack_require__("./node_modules/d3-geo-projection/src/math.js");



var sqrt6 = Object(__WEBPACK_IMPORTED_MODULE_1__math__["B" /* sqrt */])(6),
    sqrt7 = Object(__WEBPACK_IMPORTED_MODULE_1__math__["B" /* sqrt */])(7);

function mtFlatPolarParabolicRaw(lambda, phi) {
  var theta = Object(__WEBPACK_IMPORTED_MODULE_1__math__["e" /* asin */])(7 * Object(__WEBPACK_IMPORTED_MODULE_1__math__["y" /* sin */])(phi) / (3 * sqrt6));
  return [
    sqrt6 * lambda * (2 * Object(__WEBPACK_IMPORTED_MODULE_1__math__["h" /* cos */])(2 * theta / 3) - 1) / sqrt7,
    9 * Object(__WEBPACK_IMPORTED_MODULE_1__math__["y" /* sin */])(theta / 3) / sqrt7
  ];
}

mtFlatPolarParabolicRaw.invert = function(x, y) {
  var theta = 3 * Object(__WEBPACK_IMPORTED_MODULE_1__math__["e" /* asin */])(y * sqrt7 / 9);
  return [
    x * sqrt7 / (sqrt6 * (2 * Object(__WEBPACK_IMPORTED_MODULE_1__math__["h" /* cos */])(2 * theta / 3) - 1)),
    Object(__WEBPACK_IMPORTED_MODULE_1__math__["e" /* asin */])(Object(__WEBPACK_IMPORTED_MODULE_1__math__["y" /* sin */])(theta) * 3 * sqrt6 / 7)
  ];
};

/* unused harmony default export */ var _unused_webpack_default_export = (function() {
  return Object(__WEBPACK_IMPORTED_MODULE_0_d3_geo__["k" /* geoProjection */])(mtFlatPolarParabolicRaw)
      .scale(164.859);
});


/***/ }),

/***/ "./node_modules/d3-geo-projection/src/mtFlatPolarQuartic.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export mtFlatPolarQuarticRaw */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_d3_geo__ = __webpack_require__("./node_modules/d3-geo-projection/node_modules/d3-geo/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__math__ = __webpack_require__("./node_modules/d3-geo-projection/src/math.js");



function mtFlatPolarQuarticRaw(lambda, phi) {
  var k = (1 + __WEBPACK_IMPORTED_MODULE_1__math__["C" /* sqrt1_2 */]) * Object(__WEBPACK_IMPORTED_MODULE_1__math__["y" /* sin */])(phi),
      theta = phi;
  for (var i = 0, delta; i < 25; i++) {
    theta -= delta = (Object(__WEBPACK_IMPORTED_MODULE_1__math__["y" /* sin */])(theta / 2) + Object(__WEBPACK_IMPORTED_MODULE_1__math__["y" /* sin */])(theta) - k) / (0.5 * Object(__WEBPACK_IMPORTED_MODULE_1__math__["h" /* cos */])(theta / 2) + Object(__WEBPACK_IMPORTED_MODULE_1__math__["h" /* cos */])(theta));
    if (Object(__WEBPACK_IMPORTED_MODULE_1__math__["a" /* abs */])(delta) < __WEBPACK_IMPORTED_MODULE_1__math__["k" /* epsilon */]) break;
  }
  return [
    lambda * (1 + 2 * Object(__WEBPACK_IMPORTED_MODULE_1__math__["h" /* cos */])(theta) / Object(__WEBPACK_IMPORTED_MODULE_1__math__["h" /* cos */])(theta / 2)) / (3 * __WEBPACK_IMPORTED_MODULE_1__math__["D" /* sqrt2 */]),
    2 * Object(__WEBPACK_IMPORTED_MODULE_1__math__["B" /* sqrt */])(3) * Object(__WEBPACK_IMPORTED_MODULE_1__math__["y" /* sin */])(theta / 2) / Object(__WEBPACK_IMPORTED_MODULE_1__math__["B" /* sqrt */])(2 + __WEBPACK_IMPORTED_MODULE_1__math__["D" /* sqrt2 */])
  ];
}

mtFlatPolarQuarticRaw.invert = function(x, y) {
  var sinTheta_2 = y * Object(__WEBPACK_IMPORTED_MODULE_1__math__["B" /* sqrt */])(2 + __WEBPACK_IMPORTED_MODULE_1__math__["D" /* sqrt2 */]) / (2 * Object(__WEBPACK_IMPORTED_MODULE_1__math__["B" /* sqrt */])(3)),
      theta = 2 * Object(__WEBPACK_IMPORTED_MODULE_1__math__["e" /* asin */])(sinTheta_2);
  return [
    3 * __WEBPACK_IMPORTED_MODULE_1__math__["D" /* sqrt2 */] * x / (1 + 2 * Object(__WEBPACK_IMPORTED_MODULE_1__math__["h" /* cos */])(theta) / Object(__WEBPACK_IMPORTED_MODULE_1__math__["h" /* cos */])(theta / 2)),
    Object(__WEBPACK_IMPORTED_MODULE_1__math__["e" /* asin */])((sinTheta_2 + Object(__WEBPACK_IMPORTED_MODULE_1__math__["y" /* sin */])(theta)) / (1 + __WEBPACK_IMPORTED_MODULE_1__math__["C" /* sqrt1_2 */]))
  ];
};

/* unused harmony default export */ var _unused_webpack_default_export = (function() {
  return Object(__WEBPACK_IMPORTED_MODULE_0_d3_geo__["k" /* geoProjection */])(mtFlatPolarQuarticRaw)
      .scale(188.209);
});


/***/ }),

/***/ "./node_modules/d3-geo-projection/src/mtFlatPolarSinusoidal.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export mtFlatPolarSinusoidalRaw */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_d3_geo__ = __webpack_require__("./node_modules/d3-geo-projection/node_modules/d3-geo/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__math__ = __webpack_require__("./node_modules/d3-geo-projection/src/math.js");



function mtFlatPolarSinusoidalRaw(lambda, phi) {
  var A = Object(__WEBPACK_IMPORTED_MODULE_1__math__["B" /* sqrt */])(6 / (4 + __WEBPACK_IMPORTED_MODULE_1__math__["s" /* pi */])),
      k = (1 + __WEBPACK_IMPORTED_MODULE_1__math__["s" /* pi */] / 4) * Object(__WEBPACK_IMPORTED_MODULE_1__math__["y" /* sin */])(phi),
      theta = phi / 2;
  for (var i = 0, delta; i < 25; i++) {
    theta -= delta = (theta / 2 + Object(__WEBPACK_IMPORTED_MODULE_1__math__["y" /* sin */])(theta) - k) / (0.5 + Object(__WEBPACK_IMPORTED_MODULE_1__math__["h" /* cos */])(theta));
    if (Object(__WEBPACK_IMPORTED_MODULE_1__math__["a" /* abs */])(delta) < __WEBPACK_IMPORTED_MODULE_1__math__["k" /* epsilon */]) break;
  }
  return [
    A * (0.5 + Object(__WEBPACK_IMPORTED_MODULE_1__math__["h" /* cos */])(theta)) * lambda / 1.5,
    A * theta
  ];
}

mtFlatPolarSinusoidalRaw.invert = function(x, y) {
  var A = Object(__WEBPACK_IMPORTED_MODULE_1__math__["B" /* sqrt */])(6 / (4 + __WEBPACK_IMPORTED_MODULE_1__math__["s" /* pi */])),
      theta = y / A;
  if (Object(__WEBPACK_IMPORTED_MODULE_1__math__["a" /* abs */])(Object(__WEBPACK_IMPORTED_MODULE_1__math__["a" /* abs */])(theta) - __WEBPACK_IMPORTED_MODULE_1__math__["o" /* halfPi */]) < __WEBPACK_IMPORTED_MODULE_1__math__["k" /* epsilon */]) theta = theta < 0 ? -__WEBPACK_IMPORTED_MODULE_1__math__["o" /* halfPi */] : __WEBPACK_IMPORTED_MODULE_1__math__["o" /* halfPi */];
  return [
    1.5 * x / (A * (0.5 + Object(__WEBPACK_IMPORTED_MODULE_1__math__["h" /* cos */])(theta))),
    Object(__WEBPACK_IMPORTED_MODULE_1__math__["e" /* asin */])((theta / 2 + Object(__WEBPACK_IMPORTED_MODULE_1__math__["y" /* sin */])(theta)) / (1 + __WEBPACK_IMPORTED_MODULE_1__math__["s" /* pi */] / 4))
  ];
};

/* unused harmony default export */ var _unused_webpack_default_export = (function() {
  return Object(__WEBPACK_IMPORTED_MODULE_0_d3_geo__["k" /* geoProjection */])(mtFlatPolarSinusoidalRaw)
      .scale(166.518);
});


/***/ }),

/***/ "./node_modules/d3-geo-projection/src/naturalEarth2.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export naturalEarth2Raw */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_d3_geo__ = __webpack_require__("./node_modules/d3-geo-projection/node_modules/d3-geo/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__math__ = __webpack_require__("./node_modules/d3-geo-projection/src/math.js");



function naturalEarth2Raw(lambda, phi) {
  var phi2 = phi * phi, phi4 = phi2 * phi2, phi6 = phi2 * phi4;
  return [
    lambda * (0.84719 - 0.13063 * phi2 + phi6 * phi6 * (-0.04515 + 0.05494 * phi2 - 0.02326 * phi4 + 0.00331 * phi6)),
    phi * (1.01183 + phi4 * phi4 * (-0.02625 + 0.01926 * phi2 - 0.00396 * phi4))
  ];
}

naturalEarth2Raw.invert = function(x, y) {
  var phi = y, i = 25, delta, phi2, phi4, phi6;
  do {
    phi2 = phi * phi; phi4 = phi2 * phi2;
    phi -= delta = ((phi * (1.01183 + phi4 * phi4 * (-0.02625 + 0.01926 * phi2 - 0.00396 * phi4))) - y) /
      (1.01183 + phi4 * phi4 * ((9 * -0.02625) + (11 * 0.01926) * phi2 + (13 * -0.00396) * phi4));
  } while (Object(__WEBPACK_IMPORTED_MODULE_1__math__["a" /* abs */])(delta) > __WEBPACK_IMPORTED_MODULE_1__math__["l" /* epsilon2 */] && --i > 0);
  phi2 = phi * phi; phi4 = phi2 * phi2; phi6 = phi2 * phi4;
  return [
    x / (0.84719 - 0.13063 * phi2 + phi6 * phi6 * (-0.04515 + 0.05494 * phi2 - 0.02326 * phi4 + 0.00331 * phi6)),
    phi
  ];
};

/* unused harmony default export */ var _unused_webpack_default_export = (function() {
  return Object(__WEBPACK_IMPORTED_MODULE_0_d3_geo__["k" /* geoProjection */])(naturalEarth2Raw)
      .scale(175.295);
});


/***/ }),

/***/ "./node_modules/d3-geo-projection/src/nellHammer.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export nellHammerRaw */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_d3_geo__ = __webpack_require__("./node_modules/d3-geo-projection/node_modules/d3-geo/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__math__ = __webpack_require__("./node_modules/d3-geo-projection/src/math.js");



function nellHammerRaw(lambda, phi) {
  return [
    lambda * (1 + Object(__WEBPACK_IMPORTED_MODULE_1__math__["h" /* cos */])(phi)) / 2,
    2 * (phi - Object(__WEBPACK_IMPORTED_MODULE_1__math__["F" /* tan */])(phi / 2))
  ];
}

nellHammerRaw.invert = function(x, y) {
  var p = y / 2;
  for (var i = 0, delta = Infinity; i < 10 && Object(__WEBPACK_IMPORTED_MODULE_1__math__["a" /* abs */])(delta) > __WEBPACK_IMPORTED_MODULE_1__math__["k" /* epsilon */]; ++i) {
    var c = Object(__WEBPACK_IMPORTED_MODULE_1__math__["h" /* cos */])(y / 2);
    y -= delta = (y - Object(__WEBPACK_IMPORTED_MODULE_1__math__["F" /* tan */])(y / 2) - p) / (1 - 0.5 / (c * c));
  }
  return [
    2 * x / (1 + Object(__WEBPACK_IMPORTED_MODULE_1__math__["h" /* cos */])(y)),
    y
  ];
};

/* unused harmony default export */ var _unused_webpack_default_export = (function() {
  return Object(__WEBPACK_IMPORTED_MODULE_0_d3_geo__["k" /* geoProjection */])(nellHammerRaw)
      .scale(152.63);
});


/***/ }),

/***/ "./node_modules/d3-geo-projection/src/noop.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (function() {});


/***/ }),

/***/ "./node_modules/d3-geo-projection/src/parallel1.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_d3_geo__ = __webpack_require__("./node_modules/d3-geo-projection/node_modules/d3-geo/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__math__ = __webpack_require__("./node_modules/d3-geo-projection/src/math.js");



/* harmony default export */ __webpack_exports__["a"] = (function(projectAt) {
  var phi0 = 0,
      m = Object(__WEBPACK_IMPORTED_MODULE_0_d3_geo__["l" /* geoProjectionMutator */])(projectAt),
      p = m(phi0);

  p.parallel = function(_) {
    return arguments.length ? m(phi0 = _ * __WEBPACK_IMPORTED_MODULE_1__math__["v" /* radians */]) : phi0 * __WEBPACK_IMPORTED_MODULE_1__math__["j" /* degrees */];
  };

  return p;
});


/***/ }),

/***/ "./node_modules/d3-geo-projection/src/patterson.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export pattersonRaw */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_d3_geo__ = __webpack_require__("./node_modules/d3-geo-projection/node_modules/d3-geo/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__math__ = __webpack_require__("./node_modules/d3-geo-projection/src/math.js");



// Based on Java implementation by Bojan Savric.
// https://github.com/OSUCartography/JMapProjLib/blob/master/src/com/jhlabs/map/proj/PattersonProjection.java

var pattersonK1 = 1.0148,
    pattersonK2 = 0.23185,
    pattersonK3 = -0.14499,
    pattersonK4 = 0.02406,
    pattersonC1 = pattersonK1,
    pattersonC2 = 5 * pattersonK2,
    pattersonC3 = 7 * pattersonK3,
    pattersonC4 = 9 * pattersonK4,
    pattersonYmax = 1.790857183;

function pattersonRaw(lambda, phi) {
  var phi2 = phi * phi;
  return [
    lambda,
    phi * (pattersonK1 + phi2 * phi2 * (pattersonK2 + phi2 * (pattersonK3 + pattersonK4 * phi2)))
  ];
}

pattersonRaw.invert = function(x, y) {
  if (y > pattersonYmax) y = pattersonYmax;
  else if (y < -pattersonYmax) y = -pattersonYmax;
  var yc = y, delta;

  do { // Newton-Raphson
    var y2 = yc * yc;
    yc -= delta = ((yc * (pattersonK1 + y2 * y2 * (pattersonK2 + y2 * (pattersonK3 + pattersonK4 * y2)))) - y) / (pattersonC1 + y2 * y2 * (pattersonC2 + y2 * (pattersonC3 + pattersonC4 * y2)));
  } while (Object(__WEBPACK_IMPORTED_MODULE_1__math__["a" /* abs */])(delta) > __WEBPACK_IMPORTED_MODULE_1__math__["k" /* epsilon */]);

  return [x, yc];
};

/* unused harmony default export */ var _unused_webpack_default_export = (function() {
  return Object(__WEBPACK_IMPORTED_MODULE_0_d3_geo__["k" /* geoProjection */])(pattersonRaw)
      .scale(139.319);
});


/***/ }),

/***/ "./node_modules/d3-geo-projection/src/polyconic.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export polyconicRaw */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_d3_geo__ = __webpack_require__("./node_modules/d3-geo-projection/node_modules/d3-geo/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__math__ = __webpack_require__("./node_modules/d3-geo-projection/src/math.js");



function polyconicRaw(lambda, phi) {
  if (Object(__WEBPACK_IMPORTED_MODULE_1__math__["a" /* abs */])(phi) < __WEBPACK_IMPORTED_MODULE_1__math__["k" /* epsilon */]) return [lambda, 0];
  var tanPhi = Object(__WEBPACK_IMPORTED_MODULE_1__math__["F" /* tan */])(phi),
      k = lambda * Object(__WEBPACK_IMPORTED_MODULE_1__math__["y" /* sin */])(phi);
  return [
    Object(__WEBPACK_IMPORTED_MODULE_1__math__["y" /* sin */])(k) / tanPhi,
    phi + (1 - Object(__WEBPACK_IMPORTED_MODULE_1__math__["h" /* cos */])(k)) / tanPhi
  ];
}

polyconicRaw.invert = function(x, y) {
  if (Object(__WEBPACK_IMPORTED_MODULE_1__math__["a" /* abs */])(y) < __WEBPACK_IMPORTED_MODULE_1__math__["k" /* epsilon */]) return [x, 0];
  var k = x * x + y * y,
      phi = y * 0.5,
      i = 10, delta;
  do {
    var tanPhi = Object(__WEBPACK_IMPORTED_MODULE_1__math__["F" /* tan */])(phi),
        secPhi = 1 / Object(__WEBPACK_IMPORTED_MODULE_1__math__["h" /* cos */])(phi),
        j = k - 2 * y * phi + phi * phi;
    phi -= delta = (tanPhi * j + 2 * (phi - y)) / (2 + j * secPhi * secPhi + 2 * (phi - y) * tanPhi);
  } while (Object(__WEBPACK_IMPORTED_MODULE_1__math__["a" /* abs */])(delta) > __WEBPACK_IMPORTED_MODULE_1__math__["k" /* epsilon */] && --i > 0);
  tanPhi = Object(__WEBPACK_IMPORTED_MODULE_1__math__["F" /* tan */])(phi);
  return [
    (Object(__WEBPACK_IMPORTED_MODULE_1__math__["a" /* abs */])(y) < Object(__WEBPACK_IMPORTED_MODULE_1__math__["a" /* abs */])(phi + 1 / tanPhi) ? Object(__WEBPACK_IMPORTED_MODULE_1__math__["e" /* asin */])(x * tanPhi) : Object(__WEBPACK_IMPORTED_MODULE_1__math__["x" /* sign */])(x) * (Object(__WEBPACK_IMPORTED_MODULE_1__math__["b" /* acos */])(Object(__WEBPACK_IMPORTED_MODULE_1__math__["a" /* abs */])(x * tanPhi)) + __WEBPACK_IMPORTED_MODULE_1__math__["o" /* halfPi */])) / Object(__WEBPACK_IMPORTED_MODULE_1__math__["y" /* sin */])(phi),
    phi
  ];
};

/* unused harmony default export */ var _unused_webpack_default_export = (function() {
  return Object(__WEBPACK_IMPORTED_MODULE_0_d3_geo__["k" /* geoProjection */])(polyconicRaw)
      .scale(103.74);
});


/***/ }),

/***/ "./node_modules/d3-geo-projection/src/polyhedral/butterfly.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_d3_geo__ = __webpack_require__("./node_modules/d3-geo-projection/node_modules/d3-geo/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__math__ = __webpack_require__("./node_modules/d3-geo-projection/src/math.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__index__ = __webpack_require__("./node_modules/d3-geo-projection/src/polyhedral/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__octahedron__ = __webpack_require__("./node_modules/d3-geo-projection/src/polyhedral/octahedron.js");





/* unused harmony default export */ var _unused_webpack_default_export = (function(faceProjection) {

  faceProjection = faceProjection || function(face) {
    var c = Object(__WEBPACK_IMPORTED_MODULE_0_d3_geo__["d" /* geoCentroid */])({type: "MultiPoint", coordinates: face});
    return Object(__WEBPACK_IMPORTED_MODULE_0_d3_geo__["g" /* geoGnomonic */])().scale(1).translate([0, 0]).rotate([-c[0], -c[1]]);
  };

  var faces = __WEBPACK_IMPORTED_MODULE_3__octahedron__["a" /* default */].map(function(face) {
    return {face: face, project: faceProjection(face)};
  });

  [-1, 0, 0, 1, 0, 1, 4, 5].forEach(function(d, i) {
    var node = faces[d];
    node && (node.children || (node.children = [])).push(faces[i]);
  });

  return Object(__WEBPACK_IMPORTED_MODULE_2__index__["a" /* default */])(faces[0], function(lambda, phi) {
        return faces[lambda < -__WEBPACK_IMPORTED_MODULE_1__math__["s" /* pi */] / 2 ? phi < 0 ? 6 : 4
            : lambda < 0 ? phi < 0 ? 2 : 0
            : lambda < __WEBPACK_IMPORTED_MODULE_1__math__["s" /* pi */] / 2 ? phi < 0 ? 3 : 1
            : phi < 0 ? 7 : 5];
      })
      .scale(101.858)
      .center([0, 45]);
});


/***/ }),

/***/ "./node_modules/d3-geo-projection/src/polyhedral/collignon.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_d3_geo__ = __webpack_require__("./node_modules/d3-geo-projection/node_modules/d3-geo/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__collignon__ = __webpack_require__("./node_modules/d3-geo-projection/src/collignon.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__math__ = __webpack_require__("./node_modules/d3-geo-projection/src/math.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__index__ = __webpack_require__("./node_modules/d3-geo-projection/src/polyhedral/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__octahedron__ = __webpack_require__("./node_modules/d3-geo-projection/src/polyhedral/octahedron.js");






var kx = 2 / Object(__WEBPACK_IMPORTED_MODULE_2__math__["B" /* sqrt */])(3);

function collignonK(a, b) {
  var p = Object(__WEBPACK_IMPORTED_MODULE_1__collignon__["a" /* collignonRaw */])(a, b);
  return [p[0] * kx, p[1]];
}

collignonK.invert = function(x,y) {
  return __WEBPACK_IMPORTED_MODULE_1__collignon__["a" /* collignonRaw */].invert(x / kx, y);
};

/* unused harmony default export */ var _unused_webpack_default_export = (function(faceProjection) {

  faceProjection = faceProjection || function(face) {
    var c = Object(__WEBPACK_IMPORTED_MODULE_0_d3_geo__["d" /* geoCentroid */])({type: "MultiPoint", coordinates: face});
    return Object(__WEBPACK_IMPORTED_MODULE_0_d3_geo__["k" /* geoProjection */])(collignonK).translate([0, 0]).scale(1).rotate(c[1] > 0 ? [-c[0], 0] : [180 - c[0], 180]);
  };

  var faces = __WEBPACK_IMPORTED_MODULE_4__octahedron__["a" /* default */].map(function(face) {
    return {face: face, project: faceProjection(face)};
  });

  [-1, 0, 0, 1, 0, 1, 4, 5].forEach(function(d, i) {
    var node = faces[d];
    node && (node.children || (node.children = [])).push(faces[i]);
  });

  return Object(__WEBPACK_IMPORTED_MODULE_3__index__["a" /* default */])(faces[0], function(lambda, phi) {
        return faces[lambda < -__WEBPACK_IMPORTED_MODULE_2__math__["s" /* pi */] / 2 ? phi < 0 ? 6 : 4
            : lambda < 0 ? phi < 0 ? 2 : 0
            : lambda < __WEBPACK_IMPORTED_MODULE_2__math__["s" /* pi */] / 2 ? phi < 0 ? 3 : 1
            : phi < 0 ? 7 : 5];
      })
      .scale(121.906)
      .center([0, 48.5904]);
});


/***/ }),

/***/ "./node_modules/d3-geo-projection/src/polyhedral/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_d3_geo__ = __webpack_require__("./node_modules/d3-geo-projection/node_modules/d3-geo/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__math__ = __webpack_require__("./node_modules/d3-geo-projection/src/math.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__matrix__ = __webpack_require__("./node_modules/d3-geo-projection/src/polyhedral/matrix.js");




// Creates a polyhedral projection.
//  * root: a spanning tree of polygon faces.  Nodes are automatically
//    augmented with a transform matrix.
//  * face: a function that returns the appropriate node for a given {lambda, phi}
//    point (radians).
//  * r: rotation angle for final polyhedral net.  Defaults to -pi / 6 (for
//    butterflies).
/* harmony default export */ __webpack_exports__["a"] = (function(root, face, r) {

  r = r == null ? -__WEBPACK_IMPORTED_MODULE_1__math__["s" /* pi */] / 6 : r; // TODO automate

  recurse(root, {transform: [
    Object(__WEBPACK_IMPORTED_MODULE_1__math__["h" /* cos */])(r), Object(__WEBPACK_IMPORTED_MODULE_1__math__["y" /* sin */])(r), 0,
    -Object(__WEBPACK_IMPORTED_MODULE_1__math__["y" /* sin */])(r), Object(__WEBPACK_IMPORTED_MODULE_1__math__["h" /* cos */])(r), 0
  ]});

  function recurse(node, parent) {
    node.edges = faceEdges(node.face);
    // Find shared edge.
    if (parent.face) {
      var shared = node.shared = sharedEdge(node.face, parent.face),
          m = Object(__WEBPACK_IMPORTED_MODULE_2__matrix__["a" /* default */])(shared.map(parent.project), shared.map(node.project));
      node.transform = parent.transform ? Object(__WEBPACK_IMPORTED_MODULE_2__matrix__["c" /* multiply */])(parent.transform, m) : m;
      // Replace shared edge in parent edges array.
      var edges = parent.edges;
      for (var i = 0, n = edges.length; i < n; ++i) {
        if (pointEqual(shared[0], edges[i][1]) && pointEqual(shared[1], edges[i][0])) edges[i] = node;
        if (pointEqual(shared[0], edges[i][0]) && pointEqual(shared[1], edges[i][1])) edges[i] = node;
      }
      edges = node.edges;
      for (i = 0, n = edges.length; i < n; ++i) {
        if (pointEqual(shared[0], edges[i][0]) && pointEqual(shared[1], edges[i][1])) edges[i] = parent;
        if (pointEqual(shared[0], edges[i][1]) && pointEqual(shared[1], edges[i][0])) edges[i] = parent;
      }
    } else {
      node.transform = parent.transform;
    }
    if (node.children) {
      node.children.forEach(function(child) {
        recurse(child, node);
      });
    }
    return node;
  }

  function forward(lambda, phi) {
    var node = face(lambda, phi),
        point = node.project([lambda * __WEBPACK_IMPORTED_MODULE_1__math__["j" /* degrees */], phi * __WEBPACK_IMPORTED_MODULE_1__math__["j" /* degrees */]]),
        t;
    if (t = node.transform) {
      return [
        t[0] * point[0] + t[1] * point[1] + t[2],
        -(t[3] * point[0] + t[4] * point[1] + t[5])
      ];
    }
    point[1] = -point[1];
    return point;
  }

  // Naive inverse!  A faster solution would use bounding boxes, or even a
  // polygonal quadtree.
  if (hasInverse(root)) forward.invert = function(x, y) {
    var coordinates = faceInvert(root, [x, -y]);
    return coordinates && (coordinates[0] *= __WEBPACK_IMPORTED_MODULE_1__math__["v" /* radians */], coordinates[1] *= __WEBPACK_IMPORTED_MODULE_1__math__["v" /* radians */], coordinates);
  };

  function faceInvert(node, coordinates) {
    var invert = node.project.invert,
        t = node.transform,
        point = coordinates;
    if (t) {
      t = Object(__WEBPACK_IMPORTED_MODULE_2__matrix__["b" /* inverse */])(t);
      point = [
        t[0] * point[0] + t[1] * point[1] + t[2],
        (t[3] * point[0] + t[4] * point[1] + t[5])
      ];
    }
    if (invert && node === faceDegrees(p = invert(point))) return p;
    var p,
        children = node.children;
    for (var i = 0, n = children && children.length; i < n; ++i) {
      if (p = faceInvert(children[i], coordinates)) return p;
    }
  }

  function faceDegrees(coordinates) {
    return face(coordinates[0] * __WEBPACK_IMPORTED_MODULE_1__math__["v" /* radians */], coordinates[1] * __WEBPACK_IMPORTED_MODULE_1__math__["v" /* radians */]);
  }

  var proj = Object(__WEBPACK_IMPORTED_MODULE_0_d3_geo__["k" /* geoProjection */])(forward),
      stream_ = proj.stream;

  proj.stream = function(stream) {
    var rotate = proj.rotate(),
        rotateStream = stream_(stream),
        sphereStream = (proj.rotate([0, 0]), stream_(stream));
    proj.rotate(rotate);
    rotateStream.sphere = function() {
      sphereStream.polygonStart();
      sphereStream.lineStart();
      outline(sphereStream, root);
      sphereStream.lineEnd();
      sphereStream.polygonEnd();
    };
    return rotateStream;
  };

  return proj;
});

function outline(stream, node, parent) {
  var point,
      edges = node.edges,
      n = edges.length,
      edge,
      multiPoint = {type: "MultiPoint", coordinates: node.face},
      notPoles = node.face.filter(function(d) { return Object(__WEBPACK_IMPORTED_MODULE_1__math__["a" /* abs */])(d[1]) !== 90; }),
      b = Object(__WEBPACK_IMPORTED_MODULE_0_d3_geo__["c" /* geoBounds */])({type: "MultiPoint", coordinates: notPoles}),
      inside = false,
      j = -1,
      dx = b[1][0] - b[0][0];
  // TODO
  var c = dx === 180 || dx === 360
      ? [(b[0][0] + b[1][0]) / 2, (b[0][1] + b[1][1]) / 2]
      : Object(__WEBPACK_IMPORTED_MODULE_0_d3_geo__["d" /* geoCentroid */])(multiPoint);
  // First find the shared edge…
  if (parent) while (++j < n) {
    if (edges[j] === parent) break;
  }
  ++j;
  for (var i = 0; i < n; ++i) {
    edge = edges[(i + j) % n];
    if (Array.isArray(edge)) {
      if (!inside) {
        stream.point((point = Object(__WEBPACK_IMPORTED_MODULE_0_d3_geo__["i" /* geoInterpolate */])(edge[0], c)(__WEBPACK_IMPORTED_MODULE_1__math__["k" /* epsilon */]))[0], point[1]);
        inside = true;
      }
      stream.point((point = Object(__WEBPACK_IMPORTED_MODULE_0_d3_geo__["i" /* geoInterpolate */])(edge[1], c)(__WEBPACK_IMPORTED_MODULE_1__math__["k" /* epsilon */]))[0], point[1]);
    } else {
      inside = false;
      if (edge !== parent) outline(stream, edge, node);
    }
  }
}

// Tests equality of two spherical points.
function pointEqual(a, b) {
  return a && b && a[0] === b[0] && a[1] === b[1];
}

// Finds a shared edge given two clockwise polygons.
function sharedEdge(a, b) {
  var x, y, n = a.length, found = null;
  for (var i = 0; i < n; ++i) {
    x = a[i];
    for (var j = b.length; --j >= 0;) {
      y = b[j];
      if (x[0] === y[0] && x[1] === y[1]) {
        if (found) return [found, x];
        found = x;
      }
    }
  }
}

// Converts an array of n face vertices to an array of n + 1 edges.
function faceEdges(face) {
  var n = face.length,
      edges = [];
  for (var a = face[n - 1], i = 0; i < n; ++i) edges.push([a, a = face[i]]);
  return edges;
}

function hasInverse(node) {
  return node.project.invert || node.children && node.children.some(hasInverse);
}


/***/ }),

/***/ "./node_modules/d3-geo-projection/src/polyhedral/matrix.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["b"] = inverse;
/* harmony export (immutable) */ __webpack_exports__["c"] = multiply;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__math__ = __webpack_require__("./node_modules/d3-geo-projection/src/math.js");


// Note: 6-element arrays are used to denote the 3x3 affine transform matrix:
// [a, b, c,
//  d, e, f,
//  0, 0, 1] - this redundant row is left out.

// Transform matrix for [a0, a1] -> [b0, b1].
/* harmony default export */ __webpack_exports__["a"] = (function(a, b) {
  var u = subtract(a[1], a[0]),
      v = subtract(b[1], b[0]),
      phi = angle(u, v),
      s = length(u) / length(v);

  return multiply([
    1, 0, a[0][0],
    0, 1, a[0][1]
  ], multiply([
    s, 0, 0,
    0, s, 0
  ], multiply([
    Object(__WEBPACK_IMPORTED_MODULE_0__math__["h" /* cos */])(phi), Object(__WEBPACK_IMPORTED_MODULE_0__math__["y" /* sin */])(phi), 0,
    -Object(__WEBPACK_IMPORTED_MODULE_0__math__["y" /* sin */])(phi), Object(__WEBPACK_IMPORTED_MODULE_0__math__["h" /* cos */])(phi), 0
  ], [
    1, 0, -b[0][0],
    0, 1, -b[0][1]
  ])));
});

// Inverts a transform matrix.
function inverse(m) {
  var k = 1 / (m[0] * m[4] - m[1] * m[3]);
  return [
    k * m[4], -k * m[1], k * (m[1] * m[5] - m[2] * m[4]),
    -k * m[3], k * m[0], k * (m[2] * m[3] - m[0] * m[5])
  ];
}

// Multiplies two 3x2 matrices.
function multiply(a, b) {
  return [
    a[0] * b[0] + a[1] * b[3],
    a[0] * b[1] + a[1] * b[4],
    a[0] * b[2] + a[1] * b[5] + a[2],
    a[3] * b[0] + a[4] * b[3],
    a[3] * b[1] + a[4] * b[4],
    a[3] * b[2] + a[4] * b[5] + a[5]
  ];
}

// Subtracts 2D vectors.
function subtract(a, b) {
  return [a[0] - b[0], a[1] - b[1]];
}

// Magnitude of a 2D vector.
function length(v) {
  return Object(__WEBPACK_IMPORTED_MODULE_0__math__["B" /* sqrt */])(v[0] * v[0] + v[1] * v[1]);
}

// Angle between two 2D vectors.
function angle(a, b) {
  return Object(__WEBPACK_IMPORTED_MODULE_0__math__["g" /* atan2 */])(a[0] * b[1] - a[1] * b[0], a[0] * b[0] + a[1] * b[1]);
}


/***/ }),

/***/ "./node_modules/d3-geo-projection/src/polyhedral/octahedron.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// TODO generate on-the-fly to avoid external modification.
var octahedron = [
  [0, 90],
  [-90, 0], [0, 0], [90, 0], [180, 0],
  [0, -90]
];

/* harmony default export */ __webpack_exports__["a"] = ([
  [0, 2, 1],
  [0, 3, 2],
  [5, 1, 2],
  [5, 2, 3],
  [0, 1, 4],
  [0, 4, 3],
  [5, 4, 1],
  [5, 3, 4]
].map(function(face) {
  return face.map(function(i) {
    return octahedron[i];
  });
}));


/***/ }),

/***/ "./node_modules/d3-geo-projection/src/polyhedral/waterman.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_d3_geo__ = __webpack_require__("./node_modules/d3-geo-projection/node_modules/d3-geo/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__math__ = __webpack_require__("./node_modules/d3-geo-projection/src/math.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__index__ = __webpack_require__("./node_modules/d3-geo-projection/src/polyhedral/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__octahedron__ = __webpack_require__("./node_modules/d3-geo-projection/src/polyhedral/octahedron.js");





/* unused harmony default export */ var _unused_webpack_default_export = (function(faceProjection) {

  faceProjection = faceProjection || function(face) {
    var c = face.length === 6 ? Object(__WEBPACK_IMPORTED_MODULE_0_d3_geo__["d" /* geoCentroid */])({type: "MultiPoint", coordinates: face}) : face[0];
    return Object(__WEBPACK_IMPORTED_MODULE_0_d3_geo__["g" /* geoGnomonic */])().scale(1).translate([0, 0]).rotate([-c[0], -c[1]]);
  };

  var w5 = __WEBPACK_IMPORTED_MODULE_3__octahedron__["a" /* default */].map(function(face) {
    var xyz = face.map(cartesian),
        n = xyz.length,
        a = xyz[n - 1],
        b,
        hexagon = [];
    for (var i = 0; i < n; ++i) {
      b = xyz[i];
      hexagon.push(spherical([
        a[0] * 0.9486832980505138 + b[0] * 0.31622776601683794,
        a[1] * 0.9486832980505138 + b[1] * 0.31622776601683794,
        a[2] * 0.9486832980505138 + b[2] * 0.31622776601683794
      ]), spherical([
        b[0] * 0.9486832980505138 + a[0] * 0.31622776601683794,
        b[1] * 0.9486832980505138 + a[1] * 0.31622776601683794,
        b[2] * 0.9486832980505138 + a[2] * 0.31622776601683794
      ]));
      a = b;
    }
    return hexagon;
  });

  var cornerNormals = [];

  var parents = [-1, 0, 0, 1, 0, 1, 4, 5];

  w5.forEach(function(hexagon, j) {
    var face = __WEBPACK_IMPORTED_MODULE_3__octahedron__["a" /* default */][j],
        n = face.length,
        normals = cornerNormals[j] = [];
    for (var i = 0; i < n; ++i) {
      w5.push([
        face[i],
        hexagon[(i * 2 + 2) % (2 * n)],
        hexagon[(i * 2 + 1) % (2 * n)]
      ]);
      parents.push(j);
      normals.push(cross(
        cartesian(hexagon[(i * 2 + 2) % (2 * n)]),
        cartesian(hexagon[(i * 2 + 1) % (2 * n)])
      ));
    }
  });

  var faces = w5.map(function(face) {
    return {
      project: faceProjection(face),
      face: face
    };
  });

  parents.forEach(function(d, i) {
    var parent = faces[d];
    parent && (parent.children || (parent.children = [])).push(faces[i]);
  });

  function face(lambda, phi) {
    var cosphi = Object(__WEBPACK_IMPORTED_MODULE_1__math__["h" /* cos */])(phi),
        p = [cosphi * Object(__WEBPACK_IMPORTED_MODULE_1__math__["h" /* cos */])(lambda), cosphi * Object(__WEBPACK_IMPORTED_MODULE_1__math__["y" /* sin */])(lambda), Object(__WEBPACK_IMPORTED_MODULE_1__math__["y" /* sin */])(phi)];

    var hexagon = lambda < -__WEBPACK_IMPORTED_MODULE_1__math__["s" /* pi */] / 2 ? phi < 0 ? 6 : 4
        : lambda < 0 ? phi < 0 ? 2 : 0
        : lambda < __WEBPACK_IMPORTED_MODULE_1__math__["s" /* pi */] / 2 ? phi < 0 ? 3 : 1
        : phi < 0 ? 7 : 5;

    var n = cornerNormals[hexagon];

    return faces[dot(n[0], p) < 0 ? 8 + 3 * hexagon
        : dot(n[1], p) < 0 ? 8 + 3 * hexagon + 1
        : dot(n[2], p) < 0 ? 8 + 3 * hexagon + 2
        : hexagon];
  }

  return Object(__WEBPACK_IMPORTED_MODULE_2__index__["a" /* default */])(faces[0], face)
      .scale(110.625)
      .center([0,45]);
});

function dot(a, b) {
  for (var i = 0, n = a.length, s = 0; i < n; ++i) s += a[i] * b[i];
  return s;
}

function cross(a, b) {
  return [
    a[1] * b[2] - a[2] * b[1],
    a[2] * b[0] - a[0] * b[2],
    a[0] * b[1] - a[1] * b[0]
  ];
}

// Converts 3D Cartesian to spherical coordinates (degrees).
function spherical(cartesian) {
  return [
    Object(__WEBPACK_IMPORTED_MODULE_1__math__["g" /* atan2 */])(cartesian[1], cartesian[0]) * __WEBPACK_IMPORTED_MODULE_1__math__["j" /* degrees */],
    Object(__WEBPACK_IMPORTED_MODULE_1__math__["e" /* asin */])(Object(__WEBPACK_IMPORTED_MODULE_1__math__["q" /* max */])(-1, Object(__WEBPACK_IMPORTED_MODULE_1__math__["r" /* min */])(1, cartesian[2]))) * __WEBPACK_IMPORTED_MODULE_1__math__["j" /* degrees */]
  ];
}

// Converts spherical coordinates (degrees) to 3D Cartesian.
function cartesian(coordinates) {
  var lambda = coordinates[0] * __WEBPACK_IMPORTED_MODULE_1__math__["v" /* radians */],
      phi = coordinates[1] * __WEBPACK_IMPORTED_MODULE_1__math__["v" /* radians */],
      cosphi = Object(__WEBPACK_IMPORTED_MODULE_1__math__["h" /* cos */])(phi);
  return [
    cosphi * Object(__WEBPACK_IMPORTED_MODULE_1__math__["h" /* cos */])(lambda),
    cosphi * Object(__WEBPACK_IMPORTED_MODULE_1__math__["y" /* sin */])(lambda),
    Object(__WEBPACK_IMPORTED_MODULE_1__math__["y" /* sin */])(phi)
  ];
}


/***/ }),

/***/ "./node_modules/d3-geo-projection/src/project/clockwise.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (function(ring) {
  if ((n = ring.length) < 4) return false;
  var i = 0,
      n,
      area = ring[n - 1][1] * ring[0][0] - ring[n - 1][0] * ring[0][1];
  while (++i < n) area += ring[i - 1][1] * ring[i][0] - ring[i - 1][0] * ring[i][1];
  return area <= 0;
});


/***/ }),

/***/ "./node_modules/d3-geo-projection/src/project/contains.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (function(ring, point) {
  var x = point[0],
      y = point[1],
      contains = false;
  for (var i = 0, n = ring.length, j = n - 1; i < n; j = i++) {
    var pi = ring[i], xi = pi[0], yi = pi[1],
        pj = ring[j], xj = pj[0], yj = pj[1];
    if (((yi > y) ^ (yj > y)) && (x < (xj - xi) * (y - yi) / (yj - yi) + xi)) contains = !contains;
  }
  return contains;
});


/***/ }),

/***/ "./node_modules/d3-geo-projection/src/project/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_d3_geo__ = __webpack_require__("./node_modules/d3-geo-projection/node_modules/d3-geo/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__noop__ = __webpack_require__("./node_modules/d3-geo-projection/src/noop.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__clockwise__ = __webpack_require__("./node_modules/d3-geo-projection/src/project/clockwise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__contains__ = __webpack_require__("./node_modules/d3-geo-projection/src/project/contains.js");





/* unused harmony default export */ var _unused_webpack_default_export = (function(object, projection) {
  var stream = projection.stream, project;
  if (!stream) throw new Error("invalid projection");
  switch (object && object.type) {
    case "Feature": project = projectFeature; break;
    case "FeatureCollection": project = projectFeatureCollection; break;
    default: project = projectGeometry; break;
  }
  return project(object, stream);
});

function projectFeatureCollection(o, stream) {
  return {
    type: "FeatureCollection",
    features: o.features.map(function(f) {
      return projectFeature(f, stream);
    })
  };
}

function projectFeature(o, stream) {
  return {
    type: "Feature",
    id: o.id,
    properties: o.properties,
    geometry: projectGeometry(o.geometry, stream)
  };
}

function projectGeometryCollection(o, stream) {
  return {
    type: "GeometryCollection",
    geometries: o.geometries.map(function(o) {
      return projectGeometry(o, stream);
    })
  };
}

function projectGeometry(o, stream) {
  if (!o) return null;
  if (o.type === "GeometryCollection") return projectGeometryCollection(o, stream);
  var sink;
  switch (o.type) {
    case "Point": sink = sinkPoint; break;
    case "MultiPoint": sink = sinkPoint; break;
    case "LineString": sink = sinkLine; break;
    case "MultiLineString": sink = sinkLine; break;
    case "Polygon": sink = sinkPolygon; break;
    case "MultiPolygon": sink = sinkPolygon; break;
    case "Sphere": sink = sinkPolygon; break;
    default: return null;
  }
  Object(__WEBPACK_IMPORTED_MODULE_0_d3_geo__["n" /* geoStream */])(o, stream(sink));
  return sink.result();
}

var points = [],
    lines = [];

var sinkPoint = {
  point: function(x, y) {
    points.push([x, y]);
  },
  result: function() {
    var result = !points.length ? null
        : points.length < 2 ? {type: "Point", coordinates: points[0]}
        : {type: "MultiPoint", coordinates: points};
    points = [];
    return result;
  }
};

var sinkLine = {
  lineStart: __WEBPACK_IMPORTED_MODULE_1__noop__["a" /* default */],
  point: function(x, y) {
    points.push([x, y]);
  },
  lineEnd: function() {
    if (points.length) lines.push(points), points = [];
  },
  result: function() {
    var result = !lines.length ? null
        : lines.length < 2 ? {type: "LineString", coordinates: lines[0]}
        : {type: "MultiLineString", coordinates: lines};
    lines = [];
    return result;
  }
};

var sinkPolygon = {
  polygonStart: __WEBPACK_IMPORTED_MODULE_1__noop__["a" /* default */],
  lineStart: __WEBPACK_IMPORTED_MODULE_1__noop__["a" /* default */],
  point: function(x, y) {
    points.push([x, y]);
  },
  lineEnd: function() {
    var n = points.length;
    if (n) {
      do points.push(points[0].slice()); while (++n < 4);
      lines.push(points), points = [];
    }
  },
  polygonEnd: __WEBPACK_IMPORTED_MODULE_1__noop__["a" /* default */],
  result: function() {
    if (!lines.length) return null;
    var polygons = [],
        holes = [];

    // https://github.com/d3/d3/issues/1558
    lines.forEach(function(ring) {
      if (Object(__WEBPACK_IMPORTED_MODULE_2__clockwise__["a" /* default */])(ring)) polygons.push([ring]);
      else holes.push(ring);
    });

    holes.forEach(function(hole) {
      var point = hole[0];
      polygons.some(function(polygon) {
        if (Object(__WEBPACK_IMPORTED_MODULE_3__contains__["a" /* default */])(polygon[0], point)) {
          polygon.push(hole);
          return true;
        }
      }) || polygons.push([hole]);
    });

    lines = [];

    return !polygons.length ? null
        : polygons.length > 1 ? {type: "MultiPolygon", coordinates: polygons}
        : {type: "Polygon", coordinates: polygons[0]};
  }
};


/***/ }),

/***/ "./node_modules/d3-geo-projection/src/quantize.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony default export */ var _unused_webpack_default_export = (function(input, digits) {
  if (!(0 <= (digits = +digits) && digits <= 20)) throw new Error("invalid digits");

  function quantizePoint(input) {
    var n = input.length, i = 2, output = new Array(n);
    output[0] = +input[0].toFixed(digits);
    output[1] = +input[1].toFixed(digits);
    while (i < n) output[i] = input[i], ++i;
    return output;
  }

  function quantizePoints(input) {
    return input.map(quantizePoint);
  }

  function quantizePolygon(input) {
    return input.map(quantizePoints);
  }

  function quantizeGeometry(input) {
    if (input == null) return input;
    var output;
    switch (input.type) {
      case "GeometryCollection": output = {type: "GeometryCollection", geometries: input.geometries.map(quantizeGeometry)}; break;
      case "Point": output = {type: "Point", coordinates: quantizePoint(input.coordinates)}; break;
      case "MultiPoint": case "LineString": output = {type: input.type, coordinates: quantizePoints(input.coordinates)}; break;
      case "MultiLineString": case "Polygon": output = {type: input.type, coordinates: quantizePolygon(input.coordinates)}; break;
      case "MultiPolygon": output = {type: "MultiPolygon", coordinates: input.coordinates.map(quantizePolygon)}; break;
      default: return input;
    }
    if (input.bbox != null) output.bbox = input.bbox;
    return output;
  }

  function quantizeFeature(input) {
    var output = {type: "Feature", properties: input.properties, geometry: quantizeGeometry(input.geometry)};
    if (input.id != null) output.id = input.id;
    if (input.bbox != null) output.bbox = input.bbox;
    return output;
  }

  if (input != null) switch (input.type) {
    case "Feature": return quantizeFeature(input);
    case "FeatureCollection": {
      var output = {type: "FeatureCollection", features: input.features.map(quantizeFeature)};
      if (input.bbox != null) output.bbox = input.bbox;
      return output;
    }
    default: return quantizeGeometry(input);
  }

  return input;
});


/***/ }),

/***/ "./node_modules/d3-geo-projection/src/quincuncial/gringorten.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__gringorten__ = __webpack_require__("./node_modules/d3-geo-projection/src/gringorten.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index__ = __webpack_require__("./node_modules/d3-geo-projection/src/quincuncial/index.js");



/* unused harmony default export */ var _unused_webpack_default_export = (function() {
  return Object(__WEBPACK_IMPORTED_MODULE_1__index__["a" /* default */])(__WEBPACK_IMPORTED_MODULE_0__gringorten__["a" /* gringortenRaw */])
      .scale(176.423);
});


/***/ }),

/***/ "./node_modules/d3-geo-projection/src/quincuncial/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_d3_geo__ = __webpack_require__("./node_modules/d3-geo-projection/node_modules/d3-geo/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__math__ = __webpack_require__("./node_modules/d3-geo-projection/src/math.js");



/* harmony default export */ __webpack_exports__["a"] = (function(project) {
  var dx = project(__WEBPACK_IMPORTED_MODULE_1__math__["o" /* halfPi */], 0)[0] - project(-__WEBPACK_IMPORTED_MODULE_1__math__["o" /* halfPi */], 0)[0];

  function projectQuincuncial(lambda, phi) {
    var t = Object(__WEBPACK_IMPORTED_MODULE_1__math__["a" /* abs */])(lambda) < __WEBPACK_IMPORTED_MODULE_1__math__["o" /* halfPi */],
        p = project(t ? lambda : lambda > 0 ? lambda - __WEBPACK_IMPORTED_MODULE_1__math__["s" /* pi */] : lambda + __WEBPACK_IMPORTED_MODULE_1__math__["s" /* pi */], phi),
        x = (p[0] - p[1]) * __WEBPACK_IMPORTED_MODULE_1__math__["C" /* sqrt1_2 */],
        y = (p[0] + p[1]) * __WEBPACK_IMPORTED_MODULE_1__math__["C" /* sqrt1_2 */];
    if (t) return [x, y];
    var d = dx * __WEBPACK_IMPORTED_MODULE_1__math__["C" /* sqrt1_2 */],
        s = x > 0 ^ y > 0 ? -1 : 1;
    return [s * x - Object(__WEBPACK_IMPORTED_MODULE_1__math__["x" /* sign */])(y) * d, s * y - Object(__WEBPACK_IMPORTED_MODULE_1__math__["x" /* sign */])(x) * d];
  }

  if (project.invert) projectQuincuncial.invert = function(x0, y0) {
    var x = (x0 + y0) * __WEBPACK_IMPORTED_MODULE_1__math__["C" /* sqrt1_2 */],
        y = (y0 - x0) * __WEBPACK_IMPORTED_MODULE_1__math__["C" /* sqrt1_2 */],
        t = Object(__WEBPACK_IMPORTED_MODULE_1__math__["a" /* abs */])(x) < 0.5 * dx && Object(__WEBPACK_IMPORTED_MODULE_1__math__["a" /* abs */])(y) < 0.5 * dx;

    if (!t) {
      var d = dx * __WEBPACK_IMPORTED_MODULE_1__math__["C" /* sqrt1_2 */],
          s = x > 0 ^ y > 0 ? -1 : 1,
          x1 = -s * x0 + (y > 0 ? 1 : -1) * d,
          y1 = -s * y0 + (x > 0 ? 1 : -1) * d;
      x = (-x1 - y1) * __WEBPACK_IMPORTED_MODULE_1__math__["C" /* sqrt1_2 */];
      y = (x1 - y1) * __WEBPACK_IMPORTED_MODULE_1__math__["C" /* sqrt1_2 */];
    }

    var p = project.invert(x, y);
    if (!t) p[0] += x > 0 ? __WEBPACK_IMPORTED_MODULE_1__math__["s" /* pi */] : -__WEBPACK_IMPORTED_MODULE_1__math__["s" /* pi */];
    return p;
  };

  return Object(__WEBPACK_IMPORTED_MODULE_0_d3_geo__["k" /* geoProjection */])(projectQuincuncial)
      .rotate([-90, -90, 45])
      .clipAngle(180 - 1e-3);
});


/***/ }),

/***/ "./node_modules/d3-geo-projection/src/quincuncial/peirce.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__guyou__ = __webpack_require__("./node_modules/d3-geo-projection/src/guyou.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index__ = __webpack_require__("./node_modules/d3-geo-projection/src/quincuncial/index.js");



/* unused harmony default export */ var _unused_webpack_default_export = (function() {
  return Object(__WEBPACK_IMPORTED_MODULE_1__index__["a" /* default */])(__WEBPACK_IMPORTED_MODULE_0__guyou__["a" /* guyouRaw */])
      .scale(111.48);
});


/***/ }),

/***/ "./node_modules/d3-geo-projection/src/rectangularPolyconic.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export rectangularPolyconicRaw */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__math__ = __webpack_require__("./node_modules/d3-geo-projection/src/math.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__parallel1__ = __webpack_require__("./node_modules/d3-geo-projection/src/parallel1.js");



function rectangularPolyconicRaw(phi0) {
  var sinPhi0 = Object(__WEBPACK_IMPORTED_MODULE_0__math__["y" /* sin */])(phi0);

  function forward(lambda, phi) {
    var A = sinPhi0 ? Object(__WEBPACK_IMPORTED_MODULE_0__math__["F" /* tan */])(lambda * sinPhi0 / 2) / sinPhi0 : lambda / 2;
    if (!phi) return [2 * A, -phi0];
    var E = 2 * Object(__WEBPACK_IMPORTED_MODULE_0__math__["f" /* atan */])(A * Object(__WEBPACK_IMPORTED_MODULE_0__math__["y" /* sin */])(phi)),
        cotPhi = 1 / Object(__WEBPACK_IMPORTED_MODULE_0__math__["F" /* tan */])(phi);
    return [
      Object(__WEBPACK_IMPORTED_MODULE_0__math__["y" /* sin */])(E) * cotPhi,
      phi + (1 - Object(__WEBPACK_IMPORTED_MODULE_0__math__["h" /* cos */])(E)) * cotPhi - phi0
    ];
  }

  // TODO return null for points outside outline.
  forward.invert = function(x, y) {
    if (Object(__WEBPACK_IMPORTED_MODULE_0__math__["a" /* abs */])(y += phi0) < __WEBPACK_IMPORTED_MODULE_0__math__["k" /* epsilon */]) return [sinPhi0 ? 2 * Object(__WEBPACK_IMPORTED_MODULE_0__math__["f" /* atan */])(sinPhi0 * x / 2) / sinPhi0 : x, 0];
    var k = x * x + y * y,
        phi = 0,
        i = 10, delta;
    do {
      var tanPhi = Object(__WEBPACK_IMPORTED_MODULE_0__math__["F" /* tan */])(phi),
          secPhi = 1 / Object(__WEBPACK_IMPORTED_MODULE_0__math__["h" /* cos */])(phi),
          j = k - 2 * y * phi + phi * phi;
      phi -= delta = (tanPhi * j + 2 * (phi - y)) / (2 + j * secPhi * secPhi + 2 * (phi - y) * tanPhi);
    } while (Object(__WEBPACK_IMPORTED_MODULE_0__math__["a" /* abs */])(delta) > __WEBPACK_IMPORTED_MODULE_0__math__["k" /* epsilon */] && --i > 0);
    var E = x * (tanPhi = Object(__WEBPACK_IMPORTED_MODULE_0__math__["F" /* tan */])(phi)),
        A = Object(__WEBPACK_IMPORTED_MODULE_0__math__["F" /* tan */])(Object(__WEBPACK_IMPORTED_MODULE_0__math__["a" /* abs */])(y) < Object(__WEBPACK_IMPORTED_MODULE_0__math__["a" /* abs */])(phi + 1 / tanPhi) ? Object(__WEBPACK_IMPORTED_MODULE_0__math__["e" /* asin */])(E) * 0.5 : Object(__WEBPACK_IMPORTED_MODULE_0__math__["b" /* acos */])(E) * 0.5 + __WEBPACK_IMPORTED_MODULE_0__math__["s" /* pi */] / 4) / Object(__WEBPACK_IMPORTED_MODULE_0__math__["y" /* sin */])(phi);
    return [
      sinPhi0 ? 2 * Object(__WEBPACK_IMPORTED_MODULE_0__math__["f" /* atan */])(sinPhi0 * A) / sinPhi0 : 2 * A,
      phi
    ];
  };

  return forward;
}

/* unused harmony default export */ var _unused_webpack_default_export = (function() {
  return Object(__WEBPACK_IMPORTED_MODULE_1__parallel1__["a" /* default */])(rectangularPolyconicRaw)
      .scale(131.215);
});


/***/ }),

/***/ "./node_modules/d3-geo-projection/src/robinson.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export robinsonRaw */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_d3_geo__ = __webpack_require__("./node_modules/d3-geo-projection/node_modules/d3-geo/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__math__ = __webpack_require__("./node_modules/d3-geo-projection/src/math.js");



var K = [
  [0.9986, -0.062],
  [1.0000, 0.0000],
  [0.9986, 0.0620],
  [0.9954, 0.1240],
  [0.9900, 0.1860],
  [0.9822, 0.2480],
  [0.9730, 0.3100],
  [0.9600, 0.3720],
  [0.9427, 0.4340],
  [0.9216, 0.4958],
  [0.8962, 0.5571],
  [0.8679, 0.6176],
  [0.8350, 0.6769],
  [0.7986, 0.7346],
  [0.7597, 0.7903],
  [0.7186, 0.8435],
  [0.6732, 0.8936],
  [0.6213, 0.9394],
  [0.5722, 0.9761],
  [0.5322, 1.0000]
];

K.forEach(function(d) {
  d[1] *= 1.0144;
});

function robinsonRaw(lambda, phi) {
  var i = Object(__WEBPACK_IMPORTED_MODULE_1__math__["r" /* min */])(18, Object(__WEBPACK_IMPORTED_MODULE_1__math__["a" /* abs */])(phi) * 36 / __WEBPACK_IMPORTED_MODULE_1__math__["s" /* pi */]),
      i0 = Object(__WEBPACK_IMPORTED_MODULE_1__math__["n" /* floor */])(i),
      di = i - i0,
      ax = (k = K[i0])[0],
      ay = k[1],
      bx = (k = K[++i0])[0],
      by = k[1],
      cx = (k = K[Object(__WEBPACK_IMPORTED_MODULE_1__math__["r" /* min */])(19, ++i0)])[0],
      cy = k[1],
      k;
  return [
    lambda * (bx + di * (cx - ax) / 2 + di * di * (cx - 2 * bx + ax) / 2),
    (phi > 0 ? __WEBPACK_IMPORTED_MODULE_1__math__["o" /* halfPi */] : -__WEBPACK_IMPORTED_MODULE_1__math__["o" /* halfPi */]) * (by + di * (cy - ay) / 2 + di * di * (cy - 2 * by + ay) / 2)
  ];
}

robinsonRaw.invert = function(x, y) {
  var yy = y / __WEBPACK_IMPORTED_MODULE_1__math__["o" /* halfPi */],
      phi = yy * 90,
      i = Object(__WEBPACK_IMPORTED_MODULE_1__math__["r" /* min */])(18, Object(__WEBPACK_IMPORTED_MODULE_1__math__["a" /* abs */])(phi / 5)),
      i0 = Object(__WEBPACK_IMPORTED_MODULE_1__math__["q" /* max */])(0, Object(__WEBPACK_IMPORTED_MODULE_1__math__["n" /* floor */])(i));
  do {
    var ay = K[i0][1],
        by = K[i0 + 1][1],
        cy = K[Object(__WEBPACK_IMPORTED_MODULE_1__math__["r" /* min */])(19, i0 + 2)][1],
        u = cy - ay,
        v = cy - 2 * by + ay,
        t = 2 * (Object(__WEBPACK_IMPORTED_MODULE_1__math__["a" /* abs */])(yy) - by) / u,
        c = v / u,
        di = t * (1 - c * t * (1 - 2 * c * t));
    if (di >= 0 || i0 === 1) {
      phi = (y >= 0 ? 5 : -5) * (di + i);
      var j = 50, delta;
      do {
        i = Object(__WEBPACK_IMPORTED_MODULE_1__math__["r" /* min */])(18, Object(__WEBPACK_IMPORTED_MODULE_1__math__["a" /* abs */])(phi) / 5);
        i0 = Object(__WEBPACK_IMPORTED_MODULE_1__math__["n" /* floor */])(i);
        di = i - i0;
        ay = K[i0][1];
        by = K[i0 + 1][1];
        cy = K[Object(__WEBPACK_IMPORTED_MODULE_1__math__["r" /* min */])(19, i0 + 2)][1];
        phi -= (delta = (y >= 0 ? __WEBPACK_IMPORTED_MODULE_1__math__["o" /* halfPi */] : -__WEBPACK_IMPORTED_MODULE_1__math__["o" /* halfPi */]) * (by + di * (cy - ay) / 2 + di * di * (cy - 2 * by + ay) / 2) - y) * __WEBPACK_IMPORTED_MODULE_1__math__["j" /* degrees */];
      } while (Object(__WEBPACK_IMPORTED_MODULE_1__math__["a" /* abs */])(delta) > __WEBPACK_IMPORTED_MODULE_1__math__["l" /* epsilon2 */] && --j > 0);
      break;
    }
  } while (--i0 >= 0);
  var ax = K[i0][0],
      bx = K[i0 + 1][0],
      cx = K[Object(__WEBPACK_IMPORTED_MODULE_1__math__["r" /* min */])(19, i0 + 2)][0];
  return [
    x / (bx + di * (cx - ax) / 2 + di * di * (cx - 2 * bx + ax) / 2),
    phi * __WEBPACK_IMPORTED_MODULE_1__math__["v" /* radians */]
  ];
};

/* harmony default export */ __webpack_exports__["a"] = (function() {
  return Object(__WEBPACK_IMPORTED_MODULE_0_d3_geo__["k" /* geoProjection */])(robinsonRaw)
      .scale(152.63);
});


/***/ }),

/***/ "./node_modules/d3-geo-projection/src/satellite.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export satelliteRaw */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_d3_geo__ = __webpack_require__("./node_modules/d3-geo-projection/node_modules/d3-geo/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__math__ = __webpack_require__("./node_modules/d3-geo-projection/src/math.js");



function satelliteVerticalRaw(P) {
  function forward(lambda, phi) {
    var cosPhi = Object(__WEBPACK_IMPORTED_MODULE_1__math__["h" /* cos */])(phi),
        k = (P - 1) / (P - cosPhi * Object(__WEBPACK_IMPORTED_MODULE_1__math__["h" /* cos */])(lambda));
    return [
      k * cosPhi * Object(__WEBPACK_IMPORTED_MODULE_1__math__["y" /* sin */])(lambda),
      k * Object(__WEBPACK_IMPORTED_MODULE_1__math__["y" /* sin */])(phi)
    ];
  }

  forward.invert = function(x, y) {
    var rho2 = x * x + y * y,
        rho = Object(__WEBPACK_IMPORTED_MODULE_1__math__["B" /* sqrt */])(rho2),
        sinc = (P - Object(__WEBPACK_IMPORTED_MODULE_1__math__["B" /* sqrt */])(1 - rho2 * (P + 1) / (P - 1))) / ((P - 1) / rho + rho / (P - 1));
    return [
      Object(__WEBPACK_IMPORTED_MODULE_1__math__["g" /* atan2 */])(x * sinc, rho * Object(__WEBPACK_IMPORTED_MODULE_1__math__["B" /* sqrt */])(1 - sinc * sinc)),
      rho ? Object(__WEBPACK_IMPORTED_MODULE_1__math__["e" /* asin */])(y * sinc / rho) : 0
    ];
  };

  return forward;
}

function satelliteRaw(P, omega) {
  var vertical = satelliteVerticalRaw(P);
  if (!omega) return vertical;
  var cosOmega = Object(__WEBPACK_IMPORTED_MODULE_1__math__["h" /* cos */])(omega),
      sinOmega = Object(__WEBPACK_IMPORTED_MODULE_1__math__["y" /* sin */])(omega);

  function forward(lambda, phi) {
    var coordinates = vertical(lambda, phi),
        y = coordinates[1],
        A = y * sinOmega / (P - 1) + cosOmega;
    return [
      coordinates[0] * cosOmega / A,
      y / A
    ];
  }

  forward.invert = function(x, y) {
    var k = (P - 1) / (P - 1 - y * sinOmega);
    return vertical.invert(k * x, k * y * cosOmega);
  };

  return forward;
}

/* unused harmony default export */ var _unused_webpack_default_export = (function() {
  var distance = 2,
      omega = 0,
      m = Object(__WEBPACK_IMPORTED_MODULE_0_d3_geo__["l" /* geoProjectionMutator */])(satelliteRaw),
      p = m(distance, omega);

  // As a multiple of radius.
  p.distance = function(_) {
    if (!arguments.length) return distance;
    return m(distance = +_, omega);
  };

  p.tilt = function(_) {
    if (!arguments.length) return omega * __WEBPACK_IMPORTED_MODULE_1__math__["j" /* degrees */];
    return m(distance, omega = _ * __WEBPACK_IMPORTED_MODULE_1__math__["v" /* radians */]);
  };

  return p
      .scale(432.147)
      .clipAngle(Object(__WEBPACK_IMPORTED_MODULE_1__math__["b" /* acos */])(1 / distance) * __WEBPACK_IMPORTED_MODULE_1__math__["j" /* degrees */] - 1e-6);
});


/***/ }),

/***/ "./node_modules/d3-geo-projection/src/sinuMollweide.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return sinuMollweidePhi; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return sinuMollweideY; });
/* harmony export (immutable) */ __webpack_exports__["b"] = sinuMollweideRaw;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_d3_geo__ = __webpack_require__("./node_modules/d3-geo-projection/node_modules/d3-geo/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mollweide__ = __webpack_require__("./node_modules/d3-geo-projection/src/mollweide.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__sinusoidal__ = __webpack_require__("./node_modules/d3-geo-projection/src/sinusoidal.js");




var sinuMollweidePhi = 0.7109889596207567;

var sinuMollweideY = 0.0528035274542;

function sinuMollweideRaw(lambda, phi) {
  return phi > -sinuMollweidePhi
      ? (lambda = Object(__WEBPACK_IMPORTED_MODULE_1__mollweide__["c" /* mollweideRaw */])(lambda, phi), lambda[1] += sinuMollweideY, lambda)
      : Object(__WEBPACK_IMPORTED_MODULE_2__sinusoidal__["a" /* sinusoidalRaw */])(lambda, phi);
}

sinuMollweideRaw.invert = function(x, y) {
  return y > -sinuMollweidePhi
      ? __WEBPACK_IMPORTED_MODULE_1__mollweide__["c" /* mollweideRaw */].invert(x, y - sinuMollweideY)
      : __WEBPACK_IMPORTED_MODULE_2__sinusoidal__["a" /* sinusoidalRaw */].invert(x, y);
};

/* unused harmony default export */ var _unused_webpack_default_export = (function() {
  return Object(__WEBPACK_IMPORTED_MODULE_0_d3_geo__["k" /* geoProjection */])(sinuMollweideRaw)
      .rotate([-20, -55])
      .scale(164.263)
      .center([0, -5.4036]);
});


/***/ }),

/***/ "./node_modules/d3-geo-projection/src/sinusoidal.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = sinusoidalRaw;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_d3_geo__ = __webpack_require__("./node_modules/d3-geo-projection/node_modules/d3-geo/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__math__ = __webpack_require__("./node_modules/d3-geo-projection/src/math.js");



function sinusoidalRaw(lambda, phi) {
  return [lambda * Object(__WEBPACK_IMPORTED_MODULE_1__math__["h" /* cos */])(phi), phi];
}

sinusoidalRaw.invert = function(x, y) {
  return [x / Object(__WEBPACK_IMPORTED_MODULE_1__math__["h" /* cos */])(y), y];
};

/* unused harmony default export */ var _unused_webpack_default_export = (function() {
  return Object(__WEBPACK_IMPORTED_MODULE_0_d3_geo__["k" /* geoProjection */])(sinusoidalRaw)
      .scale(152.63);
});


/***/ }),

/***/ "./node_modules/d3-geo-projection/src/square.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__math__ = __webpack_require__("./node_modules/d3-geo-projection/src/math.js");


/* harmony default export */ __webpack_exports__["a"] = (function(project) {
  var dx = project(__WEBPACK_IMPORTED_MODULE_0__math__["o" /* halfPi */], 0)[0] - project(-__WEBPACK_IMPORTED_MODULE_0__math__["o" /* halfPi */], 0)[0];

  function projectSquare(lambda, phi) {
    var s = lambda > 0 ? -0.5 : 0.5,
        point = project(lambda + s * __WEBPACK_IMPORTED_MODULE_0__math__["s" /* pi */], phi);
    point[0] -= s * dx;
    return point;
  }

  if (project.invert) projectSquare.invert = function(x, y) {
    var s = x > 0 ? -0.5 : 0.5,
        location = project.invert(x + s * dx, y),
        lambda = location[0] - s * __WEBPACK_IMPORTED_MODULE_0__math__["s" /* pi */];
    if (lambda < -__WEBPACK_IMPORTED_MODULE_0__math__["s" /* pi */]) lambda += 2 * __WEBPACK_IMPORTED_MODULE_0__math__["s" /* pi */];
    else if (lambda > __WEBPACK_IMPORTED_MODULE_0__math__["s" /* pi */]) lambda -= 2 * __WEBPACK_IMPORTED_MODULE_0__math__["s" /* pi */];
    location[0] = lambda;
    return location;
  };

  return projectSquare;
});


/***/ }),

/***/ "./node_modules/d3-geo-projection/src/stitch.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var epsilon = 1e-4,
    epsilonInverse = 1e4,
    x0 = -180, x0e = x0 + epsilon,
    x1 = 180, x1e = x1 - epsilon,
    y0 = -90, y0e = y0 + epsilon,
    y1 = 90, y1e = y1 - epsilon;

function nonempty(coordinates) {
  return coordinates.length > 0;
}

function quantize(x) {
  return Math.floor(x * epsilonInverse) / epsilonInverse;
}

function normalizePoint(y) {
  return y === y0 || y === y1 ? [0, y] : [x0, quantize(y)]; // pole or antimeridian?
}

function clampPoint(p) {
  var x = p[0], y = p[1], clamped = false;
  if (x <= x0e) x = x0, clamped = true;
  else if (x >= x1e) x = x1, clamped = true;
  if (y <= y0e) y = y0, clamped = true;
  else if (y >= y1e) y = y1, clamped = true;
  return clamped ? [x, y] : p;
}

function clampPoints(points) {
  return points.map(clampPoint);
}

// For each ring, detect where it crosses the antimeridian or pole.
function extractFragments(rings, polygon, fragments) {
  for (var j = 0, m = rings.length; j < m; ++j) {
    var ring = rings[j].slice();

    // By default, assume that this ring doesn’t need any stitching.
    fragments.push({index: -1, polygon: polygon, ring: ring});

    for (var i = 0, n = ring.length; i < n; ++i) {
      var point = ring[i],
          x = point[0],
          y = point[1];

      // If this is an antimeridian or polar point…
      if (x <= x0e || x >= x1e || y <= y0e || y >= y1e) {
        ring[i] = clampPoint(point);

        // Advance through any antimeridian or polar points…
        for (var k = i + 1; k < n; ++k) {
          var pointk = ring[k],
              xk = pointk[0],
              yk = pointk[1];
          if (xk > x0e && xk < x1e && yk > y0e && yk < y1e) break;
        }

        // If this was just a single antimeridian or polar point,
        // we don’t need to cut this ring into a fragment;
        // we can just leave it as-is.
        if (k === i + 1) continue;

        // Otherwise, if this is not the first point in the ring,
        // cut the current fragment so that it ends at the current point.
        // The current point is also normalized for later joining.
        if (i) {
          var fragmentBefore = {index: -1, polygon: polygon, ring: ring.slice(0, i + 1)};
          fragmentBefore.ring[fragmentBefore.ring.length - 1] = normalizePoint(y);
          fragments[fragments.length - 1] = fragmentBefore;
        }

        // If the ring started with an antimeridian fragment,
        // we can ignore that fragment entirely.
        else fragments.pop();

        // If the remainder of the ring is an antimeridian fragment,
        // move on to the next ring.
        if (k >= n) break;

        // Otherwise, add the remaining ring fragment and continue.
        fragments.push({index: -1, polygon: polygon, ring: ring = ring.slice(k - 1)});
        ring[0] = normalizePoint(ring[0][1]);
        i = -1;
        n = ring.length;
      }
    }
  }
}

// Now stitch the fragments back together into rings.
function stitchFragments(fragments) {
  var i, n = fragments.length;

  // To connect the fragments start-to-end, create a simple index by end.
  var fragmentByStart = {},
      fragmentByEnd = {},
      fragment,
      start,
      startFragment,
      end,
      endFragment;

  // For each fragment…
  for (i = 0; i < n; ++i) {
    fragment = fragments[i];
    start = fragment.ring[0];
    end = fragment.ring[fragment.ring.length - 1];

    // If this fragment is closed, add it as a standalone ring.
    if (start[0] === end[0] && start[1] === end[1]) {
      fragment.polygon.push(fragment.ring);
      fragments[i] = null;
      continue;
    }

    fragment.index = i;
    fragmentByStart[start] = fragmentByEnd[end] = fragment;
  }

  // For each open fragment…
  for (i = 0; i < n; ++i) {
    fragment = fragments[i];
    if (fragment) {
      start = fragment.ring[0];
      end = fragment.ring[fragment.ring.length - 1];
      startFragment = fragmentByEnd[start];
      endFragment = fragmentByStart[end];

      delete fragmentByStart[start];
      delete fragmentByEnd[end];

      // If this fragment is closed, add it as a standalone ring.
      if (start[0] === end[0] && start[1] === end[1]) {
        fragment.polygon.push(fragment.ring);
        continue;
      }

      if (startFragment) {
        delete fragmentByEnd[start];
        delete fragmentByStart[startFragment.ring[0]];
        startFragment.ring.pop(); // drop the shared coordinate
        fragments[startFragment.index] = null;
        fragment = {index: -1, polygon: startFragment.polygon, ring: startFragment.ring.concat(fragment.ring)};

        if (startFragment === endFragment) {
          // Connect both ends to this single fragment to create a ring.
          fragment.polygon.push(fragment.ring);
        } else {
          fragment.index = n++;
          fragments.push(fragmentByStart[fragment.ring[0]] = fragmentByEnd[fragment.ring[fragment.ring.length - 1]] = fragment);
        }
      } else if (endFragment) {
        delete fragmentByStart[end];
        delete fragmentByEnd[endFragment.ring[endFragment.ring.length - 1]];
        fragment.ring.pop(); // drop the shared coordinate
        fragment = {index: n++, polygon: endFragment.polygon, ring: fragment.ring.concat(endFragment.ring)};
        fragments[endFragment.index] = null;
        fragments.push(fragmentByStart[fragment.ring[0]] = fragmentByEnd[fragment.ring[fragment.ring.length - 1]] = fragment);
      } else {
        fragment.ring.push(fragment.ring[0]); // close ring
        fragment.polygon.push(fragment.ring);
      }
    }
  }
}

function stitchFeature(input) {
  var output = {type: "Feature", geometry: stitchGeometry(input.geometry)};
  if (input.id != null) output.id = input.id;
  if (input.bbox != null) output.bbox = input.bbox;
  if (input.properties != null) output.properties = input.properties;
  return output;
}

function stitchGeometry(input) {
  if (input == null) return input;
  var output, fragments, i, n;
  switch (input.type) {
    case "GeometryCollection": output = {type: "GeometryCollection", geometries: input.geometries.map(stitchGeometry)}; break;
    case "Point": output = {type: "Point", coordinates: clampPoint(input.coordinates)}; break;
    case "MultiPoint": case "LineString": output = {type: input.type, coordinates: clampPoints(input.coordinates)}; break;
    case "MultiLineString": output = {type: "MultiLineString", coordinates: input.coordinates.map(clampPoints)}; break;
    case "Polygon": {
      var polygon = [];
      extractFragments(input.coordinates, polygon, fragments = []);
      stitchFragments(fragments);
      output = {type: "Polygon", coordinates: polygon};
      break;
    }
    case "MultiPolygon": {
      fragments = [], i = -1, n = input.coordinates.length;
      var polygons = new Array(n);
      while (++i < n) extractFragments(input.coordinates[i], polygons[i] = [], fragments);
      stitchFragments(fragments);
      output = {type: "MultiPolygon", coordinates: polygons.filter(nonempty)};
      break;
    }
    default: return input;
  }
  if (input.bbox != null) output.bbox = input.bbox;
  return output;
}

/* unused harmony default export */ var _unused_webpack_default_export = (function(input) {
  if (input == null) return input;
  switch (input.type) {
    case "Feature": return stitchFeature(input);
    case "FeatureCollection": {
      var output = {type: "FeatureCollection", features: input.features.map(stitchFeature)};
      if (input.bbox != null) output.bbox = input.bbox;
      return output;
    }
    default: return stitchGeometry(input);
  }
});


/***/ }),

/***/ "./node_modules/d3-geo-projection/src/times.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export timesRaw */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_d3_geo__ = __webpack_require__("./node_modules/d3-geo-projection/node_modules/d3-geo/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__math__ = __webpack_require__("./node_modules/d3-geo-projection/src/math.js");



function timesRaw(lambda, phi) {
  var t = Object(__WEBPACK_IMPORTED_MODULE_1__math__["F" /* tan */])(phi / 2),
      s = Object(__WEBPACK_IMPORTED_MODULE_1__math__["y" /* sin */])(__WEBPACK_IMPORTED_MODULE_1__math__["u" /* quarterPi */] * t);
  return [
    lambda * (0.74482 - 0.34588 * s * s),
    1.70711 * t
  ];
}

timesRaw.invert = function(x, y) {
  var t = y / 1.70711,
      s = Object(__WEBPACK_IMPORTED_MODULE_1__math__["y" /* sin */])(__WEBPACK_IMPORTED_MODULE_1__math__["u" /* quarterPi */] * t);
  return [
    x / (0.74482 - 0.34588 * s * s),
    2 * Object(__WEBPACK_IMPORTED_MODULE_1__math__["f" /* atan */])(t)
  ];
};

/* unused harmony default export */ var _unused_webpack_default_export = (function() {
  return Object(__WEBPACK_IMPORTED_MODULE_0_d3_geo__["k" /* geoProjection */])(timesRaw)
      .scale(146.153);
});


/***/ }),

/***/ "./node_modules/d3-geo-projection/src/twoPoint.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_d3_geo__ = __webpack_require__("./node_modules/d3-geo-projection/node_modules/d3-geo/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__math__ = __webpack_require__("./node_modules/d3-geo-projection/src/math.js");



// Compute the origin as the midpoint of the two reference points.
// Rotate one of the reference points by the origin.
// Apply the spherical law of sines to compute gamma rotation.
/* harmony default export */ __webpack_exports__["a"] = (function(raw, p0, p1) {
  var i = Object(__WEBPACK_IMPORTED_MODULE_0_d3_geo__["i" /* geoInterpolate */])(p0, p1),
      o = i(0.5),
      a = Object(__WEBPACK_IMPORTED_MODULE_0_d3_geo__["m" /* geoRotation */])([-o[0], -o[1]])(p0),
      b = i.distance / 2,
      y = -Object(__WEBPACK_IMPORTED_MODULE_1__math__["e" /* asin */])(Object(__WEBPACK_IMPORTED_MODULE_1__math__["y" /* sin */])(a[1] * __WEBPACK_IMPORTED_MODULE_1__math__["v" /* radians */]) / Object(__WEBPACK_IMPORTED_MODULE_1__math__["y" /* sin */])(b)),
      R = [-o[0], -o[1], -(a[0] > 0 ? __WEBPACK_IMPORTED_MODULE_1__math__["s" /* pi */] - y : y) * __WEBPACK_IMPORTED_MODULE_1__math__["j" /* degrees */]],
      p = Object(__WEBPACK_IMPORTED_MODULE_0_d3_geo__["k" /* geoProjection */])(raw(b)).rotate(R),
      r = Object(__WEBPACK_IMPORTED_MODULE_0_d3_geo__["m" /* geoRotation */])(R),
      center = p.center;

  delete p.rotate;

  p.center = function(_) {
    return arguments.length ? center(r(_)) : r.invert(center());
  };

  return p
      .clipAngle(90);
});


/***/ }),

/***/ "./node_modules/d3-geo-projection/src/twoPointAzimuthal.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export twoPointAzimuthalRaw */
/* unused harmony export twoPointAzimuthalUsa */
/* unused harmony export default */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_d3_geo__ = __webpack_require__("./node_modules/d3-geo-projection/node_modules/d3-geo/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__math__ = __webpack_require__("./node_modules/d3-geo-projection/src/math.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__twoPoint__ = __webpack_require__("./node_modules/d3-geo-projection/src/twoPoint.js");




function twoPointAzimuthalRaw(d) {
  var cosd = Object(__WEBPACK_IMPORTED_MODULE_1__math__["h" /* cos */])(d);

  function forward(lambda, phi) {
    var coordinates = Object(__WEBPACK_IMPORTED_MODULE_0_d3_geo__["h" /* geoGnomonicRaw */])(lambda, phi);
    coordinates[0] *= cosd;
    return coordinates;
  }

  forward.invert = function(x, y) {
    return __WEBPACK_IMPORTED_MODULE_0_d3_geo__["h" /* geoGnomonicRaw */].invert(x / cosd, y);
  };

  return forward;
}

function twoPointAzimuthalUsa() {
  return twoPointAzimuthal([-158, 21.5], [-77, 39])
      .clipAngle(60)
      .scale(400);
}

function twoPointAzimuthal(p0, p1) {
  return Object(__WEBPACK_IMPORTED_MODULE_2__twoPoint__["a" /* default */])(twoPointAzimuthalRaw, p0, p1);
}


/***/ }),

/***/ "./node_modules/d3-geo-projection/src/twoPointEquidistant.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export twoPointEquidistantRaw */
/* unused harmony export twoPointEquidistantUsa */
/* unused harmony export default */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_d3_geo__ = __webpack_require__("./node_modules/d3-geo-projection/node_modules/d3-geo/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__math__ = __webpack_require__("./node_modules/d3-geo-projection/src/math.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__twoPoint__ = __webpack_require__("./node_modules/d3-geo-projection/src/twoPoint.js");




// TODO clip to ellipse
function twoPointEquidistantRaw(z0) {
  if (!(z0 *= 2)) return __WEBPACK_IMPORTED_MODULE_0_d3_geo__["b" /* geoAzimuthalEquidistantRaw */];
  var lambdaa = -z0 / 2,
      lambdab = -lambdaa,
      z02 = z0 * z0,
      tanLambda0 = Object(__WEBPACK_IMPORTED_MODULE_1__math__["F" /* tan */])(lambdab),
      S = 0.5 / Object(__WEBPACK_IMPORTED_MODULE_1__math__["y" /* sin */])(lambdab);

  function forward(lambda, phi) {
    var za = Object(__WEBPACK_IMPORTED_MODULE_1__math__["b" /* acos */])(Object(__WEBPACK_IMPORTED_MODULE_1__math__["h" /* cos */])(phi) * Object(__WEBPACK_IMPORTED_MODULE_1__math__["h" /* cos */])(lambda - lambdaa)),
        zb = Object(__WEBPACK_IMPORTED_MODULE_1__math__["b" /* acos */])(Object(__WEBPACK_IMPORTED_MODULE_1__math__["h" /* cos */])(phi) * Object(__WEBPACK_IMPORTED_MODULE_1__math__["h" /* cos */])(lambda - lambdab)),
        ys = phi < 0 ? -1 : 1;
    za *= za, zb *= zb;
    return [
      (za - zb) / (2 * z0),
      ys * Object(__WEBPACK_IMPORTED_MODULE_1__math__["B" /* sqrt */])(4 * z02 * zb - (z02 - za + zb) * (z02 - za + zb)) / (2 * z0)
    ];
  }

  forward.invert = function(x, y) {
    var y2 = y * y,
        cosza = Object(__WEBPACK_IMPORTED_MODULE_1__math__["h" /* cos */])(Object(__WEBPACK_IMPORTED_MODULE_1__math__["B" /* sqrt */])(y2 + (t = x + lambdaa) * t)),
        coszb = Object(__WEBPACK_IMPORTED_MODULE_1__math__["h" /* cos */])(Object(__WEBPACK_IMPORTED_MODULE_1__math__["B" /* sqrt */])(y2 + (t = x + lambdab) * t)),
        t,
        d;
    return [
      Object(__WEBPACK_IMPORTED_MODULE_1__math__["g" /* atan2 */])(d = cosza - coszb, t = (cosza + coszb) * tanLambda0),
      (y < 0 ? -1 : 1) * Object(__WEBPACK_IMPORTED_MODULE_1__math__["b" /* acos */])(Object(__WEBPACK_IMPORTED_MODULE_1__math__["B" /* sqrt */])(t * t + d * d) * S)
    ];
  };

  return forward;
}

function twoPointEquidistantUsa() {
  return twoPointEquidistant([-158, 21.5], [-77, 39])
      .clipAngle(130)
      .scale(122.571);
}

function twoPointEquidistant(p0, p1) {
  return Object(__WEBPACK_IMPORTED_MODULE_2__twoPoint__["a" /* default */])(twoPointEquidistantRaw, p0, p1);
}


/***/ }),

/***/ "./node_modules/d3-geo-projection/src/vanDerGrinten.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export vanDerGrintenRaw */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_d3_geo__ = __webpack_require__("./node_modules/d3-geo-projection/node_modules/d3-geo/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__math__ = __webpack_require__("./node_modules/d3-geo-projection/src/math.js");



function vanDerGrintenRaw(lambda, phi) {
  if (Object(__WEBPACK_IMPORTED_MODULE_1__math__["a" /* abs */])(phi) < __WEBPACK_IMPORTED_MODULE_1__math__["k" /* epsilon */]) return [lambda, 0];
  var sinTheta = Object(__WEBPACK_IMPORTED_MODULE_1__math__["a" /* abs */])(phi / __WEBPACK_IMPORTED_MODULE_1__math__["o" /* halfPi */]),
      theta = Object(__WEBPACK_IMPORTED_MODULE_1__math__["e" /* asin */])(sinTheta);
  if (Object(__WEBPACK_IMPORTED_MODULE_1__math__["a" /* abs */])(lambda) < __WEBPACK_IMPORTED_MODULE_1__math__["k" /* epsilon */] || Object(__WEBPACK_IMPORTED_MODULE_1__math__["a" /* abs */])(Object(__WEBPACK_IMPORTED_MODULE_1__math__["a" /* abs */])(phi) - __WEBPACK_IMPORTED_MODULE_1__math__["o" /* halfPi */]) < __WEBPACK_IMPORTED_MODULE_1__math__["k" /* epsilon */]) return [0, Object(__WEBPACK_IMPORTED_MODULE_1__math__["x" /* sign */])(phi) * __WEBPACK_IMPORTED_MODULE_1__math__["s" /* pi */] * Object(__WEBPACK_IMPORTED_MODULE_1__math__["F" /* tan */])(theta / 2)];
  var cosTheta = Object(__WEBPACK_IMPORTED_MODULE_1__math__["h" /* cos */])(theta),
      A = Object(__WEBPACK_IMPORTED_MODULE_1__math__["a" /* abs */])(__WEBPACK_IMPORTED_MODULE_1__math__["s" /* pi */] / lambda - lambda / __WEBPACK_IMPORTED_MODULE_1__math__["s" /* pi */]) / 2,
      A2 = A * A,
      G = cosTheta / (sinTheta + cosTheta - 1),
      P = G * (2 / sinTheta - 1),
      P2 = P * P,
      P2_A2 = P2 + A2,
      G_P2 = G - P2,
      Q = A2 + G;
  return [
    Object(__WEBPACK_IMPORTED_MODULE_1__math__["x" /* sign */])(lambda) * __WEBPACK_IMPORTED_MODULE_1__math__["s" /* pi */] * (A * G_P2 + Object(__WEBPACK_IMPORTED_MODULE_1__math__["B" /* sqrt */])(A2 * G_P2 * G_P2 - P2_A2 * (G * G - P2))) / P2_A2,
    Object(__WEBPACK_IMPORTED_MODULE_1__math__["x" /* sign */])(phi) * __WEBPACK_IMPORTED_MODULE_1__math__["s" /* pi */] * (P * Q - A * Object(__WEBPACK_IMPORTED_MODULE_1__math__["B" /* sqrt */])((A2 + 1) * P2_A2 - Q * Q)) / P2_A2
  ];
}

vanDerGrintenRaw.invert = function(x, y) {
  if (Object(__WEBPACK_IMPORTED_MODULE_1__math__["a" /* abs */])(y) < __WEBPACK_IMPORTED_MODULE_1__math__["k" /* epsilon */]) return [x, 0];
  if (Object(__WEBPACK_IMPORTED_MODULE_1__math__["a" /* abs */])(x) < __WEBPACK_IMPORTED_MODULE_1__math__["k" /* epsilon */]) return [0, __WEBPACK_IMPORTED_MODULE_1__math__["o" /* halfPi */] * Object(__WEBPACK_IMPORTED_MODULE_1__math__["y" /* sin */])(2 * Object(__WEBPACK_IMPORTED_MODULE_1__math__["f" /* atan */])(y / __WEBPACK_IMPORTED_MODULE_1__math__["s" /* pi */]))];
  var x2 = (x /= __WEBPACK_IMPORTED_MODULE_1__math__["s" /* pi */]) * x,
      y2 = (y /= __WEBPACK_IMPORTED_MODULE_1__math__["s" /* pi */]) * y,
      x2_y2 = x2 + y2,
      z = x2_y2 * x2_y2,
      c1 = -Object(__WEBPACK_IMPORTED_MODULE_1__math__["a" /* abs */])(y) * (1 + x2_y2),
      c2 = c1 - 2 * y2 + x2,
      c3 = -2 * c1 + 1 + 2 * y2 + z,
      d = y2 / c3 + (2 * c2 * c2 * c2 / (c3 * c3 * c3) - 9 * c1 * c2 / (c3 * c3)) / 27,
      a1 = (c1 - c2 * c2 / (3 * c3)) / c3,
      m1 = 2 * Object(__WEBPACK_IMPORTED_MODULE_1__math__["B" /* sqrt */])(-a1 / 3),
      theta1 = Object(__WEBPACK_IMPORTED_MODULE_1__math__["b" /* acos */])(3 * d / (a1 * m1)) / 3;
  return [
    __WEBPACK_IMPORTED_MODULE_1__math__["s" /* pi */] * (x2_y2 - 1 + Object(__WEBPACK_IMPORTED_MODULE_1__math__["B" /* sqrt */])(1 + 2 * (x2 - y2) + z)) / (2 * x),
    Object(__WEBPACK_IMPORTED_MODULE_1__math__["x" /* sign */])(y) * __WEBPACK_IMPORTED_MODULE_1__math__["s" /* pi */] * (-m1 * Object(__WEBPACK_IMPORTED_MODULE_1__math__["h" /* cos */])(theta1 + __WEBPACK_IMPORTED_MODULE_1__math__["s" /* pi */] / 3) - c2 / (3 * c3))
  ];
};

/* unused harmony default export */ var _unused_webpack_default_export = (function() {
  return Object(__WEBPACK_IMPORTED_MODULE_0_d3_geo__["k" /* geoProjection */])(vanDerGrintenRaw)
      .scale(79.4183);
});


/***/ }),

/***/ "./node_modules/d3-geo-projection/src/vanDerGrinten2.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export vanDerGrinten2Raw */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_d3_geo__ = __webpack_require__("./node_modules/d3-geo-projection/node_modules/d3-geo/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__math__ = __webpack_require__("./node_modules/d3-geo-projection/src/math.js");



function vanDerGrinten2Raw(lambda, phi) {
  if (Object(__WEBPACK_IMPORTED_MODULE_1__math__["a" /* abs */])(phi) < __WEBPACK_IMPORTED_MODULE_1__math__["k" /* epsilon */]) return [lambda, 0];
  var sinTheta = Object(__WEBPACK_IMPORTED_MODULE_1__math__["a" /* abs */])(phi / __WEBPACK_IMPORTED_MODULE_1__math__["o" /* halfPi */]),
      theta = Object(__WEBPACK_IMPORTED_MODULE_1__math__["e" /* asin */])(sinTheta);
  if (Object(__WEBPACK_IMPORTED_MODULE_1__math__["a" /* abs */])(lambda) < __WEBPACK_IMPORTED_MODULE_1__math__["k" /* epsilon */] || Object(__WEBPACK_IMPORTED_MODULE_1__math__["a" /* abs */])(Object(__WEBPACK_IMPORTED_MODULE_1__math__["a" /* abs */])(phi) - __WEBPACK_IMPORTED_MODULE_1__math__["o" /* halfPi */]) < __WEBPACK_IMPORTED_MODULE_1__math__["k" /* epsilon */]) return [0, Object(__WEBPACK_IMPORTED_MODULE_1__math__["x" /* sign */])(phi) * __WEBPACK_IMPORTED_MODULE_1__math__["s" /* pi */] * Object(__WEBPACK_IMPORTED_MODULE_1__math__["F" /* tan */])(theta / 2)];
  var cosTheta = Object(__WEBPACK_IMPORTED_MODULE_1__math__["h" /* cos */])(theta),
      A = Object(__WEBPACK_IMPORTED_MODULE_1__math__["a" /* abs */])(__WEBPACK_IMPORTED_MODULE_1__math__["s" /* pi */] / lambda - lambda / __WEBPACK_IMPORTED_MODULE_1__math__["s" /* pi */]) / 2,
      A2 = A * A,
      x1 = cosTheta * (Object(__WEBPACK_IMPORTED_MODULE_1__math__["B" /* sqrt */])(1 + A2) - A * cosTheta) / (1 + A2 * sinTheta * sinTheta);
  return [
    Object(__WEBPACK_IMPORTED_MODULE_1__math__["x" /* sign */])(lambda) * __WEBPACK_IMPORTED_MODULE_1__math__["s" /* pi */] * x1,
    Object(__WEBPACK_IMPORTED_MODULE_1__math__["x" /* sign */])(phi) * __WEBPACK_IMPORTED_MODULE_1__math__["s" /* pi */] * Object(__WEBPACK_IMPORTED_MODULE_1__math__["B" /* sqrt */])(1 - x1 * (2 * A + x1))
  ];
}

vanDerGrinten2Raw.invert = function(x, y) {
  if (!x) return [0, __WEBPACK_IMPORTED_MODULE_1__math__["o" /* halfPi */] * Object(__WEBPACK_IMPORTED_MODULE_1__math__["y" /* sin */])(2 * Object(__WEBPACK_IMPORTED_MODULE_1__math__["f" /* atan */])(y / __WEBPACK_IMPORTED_MODULE_1__math__["s" /* pi */]))];
  var x1 = Object(__WEBPACK_IMPORTED_MODULE_1__math__["a" /* abs */])(x / __WEBPACK_IMPORTED_MODULE_1__math__["s" /* pi */]),
      A = (1 - x1 * x1 - (y /= __WEBPACK_IMPORTED_MODULE_1__math__["s" /* pi */]) * y) / (2 * x1),
      A2 = A * A,
      B = Object(__WEBPACK_IMPORTED_MODULE_1__math__["B" /* sqrt */])(A2 + 1);
  return [
    Object(__WEBPACK_IMPORTED_MODULE_1__math__["x" /* sign */])(x) * __WEBPACK_IMPORTED_MODULE_1__math__["s" /* pi */] * (B - A),
    Object(__WEBPACK_IMPORTED_MODULE_1__math__["x" /* sign */])(y) * __WEBPACK_IMPORTED_MODULE_1__math__["o" /* halfPi */] * Object(__WEBPACK_IMPORTED_MODULE_1__math__["y" /* sin */])(2 * Object(__WEBPACK_IMPORTED_MODULE_1__math__["g" /* atan2 */])(Object(__WEBPACK_IMPORTED_MODULE_1__math__["B" /* sqrt */])((1 - 2 * A * x1) * (A + B) - x1), Object(__WEBPACK_IMPORTED_MODULE_1__math__["B" /* sqrt */])(B + A + x1)))
  ];
};

/* unused harmony default export */ var _unused_webpack_default_export = (function() {
  return Object(__WEBPACK_IMPORTED_MODULE_0_d3_geo__["k" /* geoProjection */])(vanDerGrinten2Raw)
      .scale(79.4183);
});


/***/ }),

/***/ "./node_modules/d3-geo-projection/src/vanDerGrinten3.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export vanDerGrinten3Raw */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_d3_geo__ = __webpack_require__("./node_modules/d3-geo-projection/node_modules/d3-geo/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__math__ = __webpack_require__("./node_modules/d3-geo-projection/src/math.js");



function vanDerGrinten3Raw(lambda, phi) {
  if (Object(__WEBPACK_IMPORTED_MODULE_1__math__["a" /* abs */])(phi) < __WEBPACK_IMPORTED_MODULE_1__math__["k" /* epsilon */]) return [lambda, 0];
  var sinTheta = phi / __WEBPACK_IMPORTED_MODULE_1__math__["o" /* halfPi */],
      theta = Object(__WEBPACK_IMPORTED_MODULE_1__math__["e" /* asin */])(sinTheta);
  if (Object(__WEBPACK_IMPORTED_MODULE_1__math__["a" /* abs */])(lambda) < __WEBPACK_IMPORTED_MODULE_1__math__["k" /* epsilon */] || Object(__WEBPACK_IMPORTED_MODULE_1__math__["a" /* abs */])(Object(__WEBPACK_IMPORTED_MODULE_1__math__["a" /* abs */])(phi) - __WEBPACK_IMPORTED_MODULE_1__math__["o" /* halfPi */]) < __WEBPACK_IMPORTED_MODULE_1__math__["k" /* epsilon */]) return [0, __WEBPACK_IMPORTED_MODULE_1__math__["s" /* pi */] * Object(__WEBPACK_IMPORTED_MODULE_1__math__["F" /* tan */])(theta / 2)];
  var A = (__WEBPACK_IMPORTED_MODULE_1__math__["s" /* pi */] / lambda - lambda / __WEBPACK_IMPORTED_MODULE_1__math__["s" /* pi */]) / 2,
      y1 = sinTheta / (1 + Object(__WEBPACK_IMPORTED_MODULE_1__math__["h" /* cos */])(theta));
  return [
    __WEBPACK_IMPORTED_MODULE_1__math__["s" /* pi */] * (Object(__WEBPACK_IMPORTED_MODULE_1__math__["x" /* sign */])(lambda) * Object(__WEBPACK_IMPORTED_MODULE_1__math__["B" /* sqrt */])(A * A + 1 - y1 * y1) - A),
    __WEBPACK_IMPORTED_MODULE_1__math__["s" /* pi */] * y1
  ];
}

vanDerGrinten3Raw.invert = function(x, y) {
  if (!y) return [x, 0];
  var y1 = y / __WEBPACK_IMPORTED_MODULE_1__math__["s" /* pi */],
      A = (__WEBPACK_IMPORTED_MODULE_1__math__["s" /* pi */] * __WEBPACK_IMPORTED_MODULE_1__math__["s" /* pi */] * (1 - y1 * y1) - x * x) / (2 * __WEBPACK_IMPORTED_MODULE_1__math__["s" /* pi */] * x);
  return [
    x ? __WEBPACK_IMPORTED_MODULE_1__math__["s" /* pi */] * (Object(__WEBPACK_IMPORTED_MODULE_1__math__["x" /* sign */])(x) * Object(__WEBPACK_IMPORTED_MODULE_1__math__["B" /* sqrt */])(A * A + 1) - A) : 0,
    __WEBPACK_IMPORTED_MODULE_1__math__["o" /* halfPi */] * Object(__WEBPACK_IMPORTED_MODULE_1__math__["y" /* sin */])(2 * Object(__WEBPACK_IMPORTED_MODULE_1__math__["f" /* atan */])(y1))
  ];
};

/* unused harmony default export */ var _unused_webpack_default_export = (function() {
  return Object(__WEBPACK_IMPORTED_MODULE_0_d3_geo__["k" /* geoProjection */])(vanDerGrinten3Raw)
        .scale(79.4183);
});


/***/ }),

/***/ "./node_modules/d3-geo-projection/src/vanDerGrinten4.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export vanDerGrinten4Raw */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_d3_geo__ = __webpack_require__("./node_modules/d3-geo-projection/node_modules/d3-geo/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__math__ = __webpack_require__("./node_modules/d3-geo-projection/src/math.js");



function vanDerGrinten4Raw(lambda, phi) {
  if (!phi) return [lambda, 0];
  var phi0 = Object(__WEBPACK_IMPORTED_MODULE_1__math__["a" /* abs */])(phi);
  if (!lambda || phi0 === __WEBPACK_IMPORTED_MODULE_1__math__["o" /* halfPi */]) return [0, phi];
  var B = phi0 / __WEBPACK_IMPORTED_MODULE_1__math__["o" /* halfPi */],
      B2 = B * B,
      C = (8 * B - B2 * (B2 + 2) - 5) / (2 * B2 * (B - 1)),
      C2 = C * C,
      BC = B * C,
      B_C2 = B2 + C2 + 2 * BC,
      B_3C = B + 3 * C,
      lambda0 = lambda / __WEBPACK_IMPORTED_MODULE_1__math__["o" /* halfPi */],
      lambda1 = lambda0 + 1 / lambda0,
      D = Object(__WEBPACK_IMPORTED_MODULE_1__math__["x" /* sign */])(Object(__WEBPACK_IMPORTED_MODULE_1__math__["a" /* abs */])(lambda) - __WEBPACK_IMPORTED_MODULE_1__math__["o" /* halfPi */]) * Object(__WEBPACK_IMPORTED_MODULE_1__math__["B" /* sqrt */])(lambda1 * lambda1 - 4),
      D2 = D * D,
      F = B_C2 * (B2 + C2 * D2 - 1) + (1 - B2) * (B2 * (B_3C * B_3C + 4 * C2) + 12 * BC * C2 + 4 * C2 * C2),
      x1 = (D * (B_C2 + C2 - 1) + 2 * Object(__WEBPACK_IMPORTED_MODULE_1__math__["B" /* sqrt */])(F)) / (4 * B_C2 + D2);
  return [
    Object(__WEBPACK_IMPORTED_MODULE_1__math__["x" /* sign */])(lambda) * __WEBPACK_IMPORTED_MODULE_1__math__["o" /* halfPi */] * x1,
    Object(__WEBPACK_IMPORTED_MODULE_1__math__["x" /* sign */])(phi) * __WEBPACK_IMPORTED_MODULE_1__math__["o" /* halfPi */] * Object(__WEBPACK_IMPORTED_MODULE_1__math__["B" /* sqrt */])(1 + D * Object(__WEBPACK_IMPORTED_MODULE_1__math__["a" /* abs */])(x1) - x1 * x1)
  ];
}

vanDerGrinten4Raw.invert = function(x, y) {
  var delta;
  if (!x || !y) return [x, y];
  y /= __WEBPACK_IMPORTED_MODULE_1__math__["s" /* pi */];
  var x1 = Object(__WEBPACK_IMPORTED_MODULE_1__math__["x" /* sign */])(x) * x / __WEBPACK_IMPORTED_MODULE_1__math__["o" /* halfPi */],
      D = (x1 * x1 - 1 + 4 * y * y) / Object(__WEBPACK_IMPORTED_MODULE_1__math__["a" /* abs */])(x1),
      D2 = D * D,
      B = 2 * y,
      i = 50;
  do {
    var B2 = B * B,
        C = (8 * B - B2 * (B2 + 2) - 5) / (2 * B2 * (B - 1)),
        C_ = (3 * B - B2 * B - 10) / (2 * B2 * B),
        C2 = C * C,
        BC = B * C,
        B_C = B + C,
        B_C2 = B_C * B_C,
        B_3C = B + 3 * C,
        F = B_C2 * (B2 + C2 * D2 - 1) + (1 - B2) * (B2 * (B_3C * B_3C + 4 * C2) + C2 * (12 * BC + 4 * C2)),
        F_ = -2 * B_C * (4 * BC * C2 + (1 - 4 * B2 + 3 * B2 * B2) * (1 + C_) + C2 * (-6 + 14 * B2 - D2 + (-8 + 8 * B2 - 2 * D2) * C_) + BC * (-8 + 12 * B2 + (-10 + 10 * B2 - D2) * C_)),
        sqrtF = Object(__WEBPACK_IMPORTED_MODULE_1__math__["B" /* sqrt */])(F),
        f = D * (B_C2 + C2 - 1) + 2 * sqrtF - x1 * (4 * B_C2 + D2),
        f_ = D * (2 * C * C_ + 2 * B_C * (1 + C_)) + F_ / sqrtF - 8 * B_C * (D * (-1 + C2 + B_C2) + 2 * sqrtF) * (1 + C_) / (D2 + 4 * B_C2);
    B -= delta = f / f_;
  } while (delta > __WEBPACK_IMPORTED_MODULE_1__math__["k" /* epsilon */] && --i > 0);
  return [
    Object(__WEBPACK_IMPORTED_MODULE_1__math__["x" /* sign */])(x) * (Object(__WEBPACK_IMPORTED_MODULE_1__math__["B" /* sqrt */])(D * D + 4) + D) * __WEBPACK_IMPORTED_MODULE_1__math__["s" /* pi */] / 4,
    __WEBPACK_IMPORTED_MODULE_1__math__["o" /* halfPi */] * B
  ];
};

/* unused harmony default export */ var _unused_webpack_default_export = (function() {
  return Object(__WEBPACK_IMPORTED_MODULE_0_d3_geo__["k" /* geoProjection */])(vanDerGrinten4Raw)
      .scale(127.16);
});


/***/ }),

/***/ "./node_modules/d3-geo-projection/src/wagner4.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export wagner4Raw */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_d3_geo__ = __webpack_require__("./node_modules/d3-geo-projection/node_modules/d3-geo/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__math__ = __webpack_require__("./node_modules/d3-geo-projection/src/math.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__mollweide__ = __webpack_require__("./node_modules/d3-geo-projection/src/mollweide.js");




var A = 4 * __WEBPACK_IMPORTED_MODULE_1__math__["s" /* pi */] + 3 * Object(__WEBPACK_IMPORTED_MODULE_1__math__["B" /* sqrt */])(3),
    B = 2 * Object(__WEBPACK_IMPORTED_MODULE_1__math__["B" /* sqrt */])(2 * __WEBPACK_IMPORTED_MODULE_1__math__["s" /* pi */] * Object(__WEBPACK_IMPORTED_MODULE_1__math__["B" /* sqrt */])(3) / A);

var wagner4Raw = Object(__WEBPACK_IMPORTED_MODULE_2__mollweide__["a" /* mollweideBromleyRaw */])(B * Object(__WEBPACK_IMPORTED_MODULE_1__math__["B" /* sqrt */])(3) / __WEBPACK_IMPORTED_MODULE_1__math__["s" /* pi */], B, A / 6);

/* unused harmony default export */ var _unused_webpack_default_export = (function() {
  return Object(__WEBPACK_IMPORTED_MODULE_0_d3_geo__["k" /* geoProjection */])(wagner4Raw)
      .scale(176.84);
});


/***/ }),

/***/ "./node_modules/d3-geo-projection/src/wagner6.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export wagner6Raw */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_d3_geo__ = __webpack_require__("./node_modules/d3-geo-projection/node_modules/d3-geo/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__math__ = __webpack_require__("./node_modules/d3-geo-projection/src/math.js");



function wagner6Raw(lambda, phi) {
  return [lambda * Object(__WEBPACK_IMPORTED_MODULE_1__math__["B" /* sqrt */])(1 - 3 * phi * phi / (__WEBPACK_IMPORTED_MODULE_1__math__["s" /* pi */] * __WEBPACK_IMPORTED_MODULE_1__math__["s" /* pi */])), phi];
}

wagner6Raw.invert = function(x, y) {
  return [x / Object(__WEBPACK_IMPORTED_MODULE_1__math__["B" /* sqrt */])(1 - 3 * y * y / (__WEBPACK_IMPORTED_MODULE_1__math__["s" /* pi */] * __WEBPACK_IMPORTED_MODULE_1__math__["s" /* pi */])), y];
};

/* unused harmony default export */ var _unused_webpack_default_export = (function() {
  return Object(__WEBPACK_IMPORTED_MODULE_0_d3_geo__["k" /* geoProjection */])(wagner6Raw)
      .scale(152.63);
});


/***/ }),

/***/ "./node_modules/d3-geo-projection/src/wagner7.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export wagner7Raw */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_d3_geo__ = __webpack_require__("./node_modules/d3-geo-projection/node_modules/d3-geo/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__math__ = __webpack_require__("./node_modules/d3-geo-projection/src/math.js");



function wagner7Raw(lambda, phi) {
  var s = 0.90631 * Object(__WEBPACK_IMPORTED_MODULE_1__math__["y" /* sin */])(phi),
      c0 = Object(__WEBPACK_IMPORTED_MODULE_1__math__["B" /* sqrt */])(1 - s * s),
      c1 = Object(__WEBPACK_IMPORTED_MODULE_1__math__["B" /* sqrt */])(2 / (1 + c0 * Object(__WEBPACK_IMPORTED_MODULE_1__math__["h" /* cos */])(lambda /= 3)));
  return [
    2.66723 * c0 * c1 * Object(__WEBPACK_IMPORTED_MODULE_1__math__["y" /* sin */])(lambda),
    1.24104 * s * c1
  ];
}

wagner7Raw.invert = function(x, y) {
  var t1 = x / 2.66723,
      t2 = y / 1.24104,
      p = Object(__WEBPACK_IMPORTED_MODULE_1__math__["B" /* sqrt */])(t1 * t1 + t2 * t2),
      c = 2 * Object(__WEBPACK_IMPORTED_MODULE_1__math__["e" /* asin */])(p / 2);
  return [
    3 * Object(__WEBPACK_IMPORTED_MODULE_1__math__["g" /* atan2 */])(x * Object(__WEBPACK_IMPORTED_MODULE_1__math__["F" /* tan */])(c), 2.66723 * p),
    p && Object(__WEBPACK_IMPORTED_MODULE_1__math__["e" /* asin */])(y * Object(__WEBPACK_IMPORTED_MODULE_1__math__["y" /* sin */])(c) / (1.24104 * 0.90631 * p))
  ];
};

/* unused harmony default export */ var _unused_webpack_default_export = (function() {
  return Object(__WEBPACK_IMPORTED_MODULE_0_d3_geo__["k" /* geoProjection */])(wagner7Raw)
      .scale(172.632);
});


/***/ }),

/***/ "./node_modules/d3-geo-projection/src/wiechel.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export wiechelRaw */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_d3_geo__ = __webpack_require__("./node_modules/d3-geo-projection/node_modules/d3-geo/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__math__ = __webpack_require__("./node_modules/d3-geo-projection/src/math.js");



function wiechelRaw(lambda, phi) {
  var cosPhi = Object(__WEBPACK_IMPORTED_MODULE_1__math__["h" /* cos */])(phi),
      sinPhi = Object(__WEBPACK_IMPORTED_MODULE_1__math__["h" /* cos */])(lambda) * cosPhi,
      sin1_Phi = 1 - sinPhi,
      cosLambda = Object(__WEBPACK_IMPORTED_MODULE_1__math__["h" /* cos */])(lambda = Object(__WEBPACK_IMPORTED_MODULE_1__math__["g" /* atan2 */])(Object(__WEBPACK_IMPORTED_MODULE_1__math__["y" /* sin */])(lambda) * cosPhi, -Object(__WEBPACK_IMPORTED_MODULE_1__math__["y" /* sin */])(phi))),
      sinLambda = Object(__WEBPACK_IMPORTED_MODULE_1__math__["y" /* sin */])(lambda);
  cosPhi = Object(__WEBPACK_IMPORTED_MODULE_1__math__["B" /* sqrt */])(1 - sinPhi * sinPhi);
  return [
    sinLambda * cosPhi - cosLambda * sin1_Phi,
    -cosLambda * cosPhi - sinLambda * sin1_Phi
  ];
}

wiechelRaw.invert = function(x, y) {
  var w = (x * x + y * y) / -2,
      k = Object(__WEBPACK_IMPORTED_MODULE_1__math__["B" /* sqrt */])(-w * (2 + w)),
      b = y * w + x * k,
      a = x * w - y * k,
      D = Object(__WEBPACK_IMPORTED_MODULE_1__math__["B" /* sqrt */])(a * a + b * b);
  return [
    Object(__WEBPACK_IMPORTED_MODULE_1__math__["g" /* atan2 */])(k * b, D * (1 + w)),
    D ? -Object(__WEBPACK_IMPORTED_MODULE_1__math__["e" /* asin */])(k * a / D) : 0
  ];
};

/* unused harmony default export */ var _unused_webpack_default_export = (function() {
  return Object(__WEBPACK_IMPORTED_MODULE_0_d3_geo__["k" /* geoProjection */])(wiechelRaw)
      .rotate([0, -90, 45])
      .scale(124.75)
      .clipAngle(180 - 1e-3);
});


/***/ }),

/***/ "./node_modules/d3-geo-projection/src/winkel3.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export winkel3Raw */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_d3_geo__ = __webpack_require__("./node_modules/d3-geo-projection/node_modules/d3-geo/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__aitoff__ = __webpack_require__("./node_modules/d3-geo-projection/src/aitoff.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__math__ = __webpack_require__("./node_modules/d3-geo-projection/src/math.js");




function winkel3Raw(lambda, phi) {
  var coordinates = Object(__WEBPACK_IMPORTED_MODULE_1__aitoff__["a" /* aitoffRaw */])(lambda, phi);
  return [
    (coordinates[0] + lambda / __WEBPACK_IMPORTED_MODULE_2__math__["o" /* halfPi */]) / 2,
    (coordinates[1] + phi) / 2
  ];
}

winkel3Raw.invert = function(x, y) {
  var lambda = x, phi = y, i = 25;
  do {
    var cosphi = Object(__WEBPACK_IMPORTED_MODULE_2__math__["h" /* cos */])(phi),
        sinphi = Object(__WEBPACK_IMPORTED_MODULE_2__math__["y" /* sin */])(phi),
        sin_2phi = Object(__WEBPACK_IMPORTED_MODULE_2__math__["y" /* sin */])(2 * phi),
        sin2phi = sinphi * sinphi,
        cos2phi = cosphi * cosphi,
        sinlambda = Object(__WEBPACK_IMPORTED_MODULE_2__math__["y" /* sin */])(lambda),
        coslambda_2 = Object(__WEBPACK_IMPORTED_MODULE_2__math__["h" /* cos */])(lambda / 2),
        sinlambda_2 = Object(__WEBPACK_IMPORTED_MODULE_2__math__["y" /* sin */])(lambda / 2),
        sin2lambda_2 = sinlambda_2 * sinlambda_2,
        C = 1 - cos2phi * coslambda_2 * coslambda_2,
        E = C ? Object(__WEBPACK_IMPORTED_MODULE_2__math__["b" /* acos */])(cosphi * coslambda_2) * Object(__WEBPACK_IMPORTED_MODULE_2__math__["B" /* sqrt */])(F = 1 / C) : F = 0,
        F,
        fx = 0.5 * (2 * E * cosphi * sinlambda_2 + lambda / __WEBPACK_IMPORTED_MODULE_2__math__["o" /* halfPi */]) - x,
        fy = 0.5 * (E * sinphi + phi) - y,
        dxdlambda = 0.5 * F * (cos2phi * sin2lambda_2 + E * cosphi * coslambda_2 * sin2phi) + 0.5 / __WEBPACK_IMPORTED_MODULE_2__math__["o" /* halfPi */],
        dxdphi = F * (sinlambda * sin_2phi / 4 - E * sinphi * sinlambda_2),
        dydlambda = 0.125 * F * (sin_2phi * sinlambda_2 - E * sinphi * cos2phi * sinlambda),
        dydphi = 0.5 * F * (sin2phi * coslambda_2 + E * sin2lambda_2 * cosphi) + 0.5,
        denominator = dxdphi * dydlambda - dydphi * dxdlambda,
        dlambda = (fy * dxdphi - fx * dydphi) / denominator,
        dphi = (fx * dydlambda - fy * dxdlambda) / denominator;
    lambda -= dlambda, phi -= dphi;
  } while ((Object(__WEBPACK_IMPORTED_MODULE_2__math__["a" /* abs */])(dlambda) > __WEBPACK_IMPORTED_MODULE_2__math__["k" /* epsilon */] || Object(__WEBPACK_IMPORTED_MODULE_2__math__["a" /* abs */])(dphi) > __WEBPACK_IMPORTED_MODULE_2__math__["k" /* epsilon */]) && --i > 0);
  return [lambda, phi];
};

/* unused harmony default export */ var _unused_webpack_default_export = (function() {
  return Object(__WEBPACK_IMPORTED_MODULE_0_d3_geo__["k" /* geoProjection */])(winkel3Raw)
      .scale(158.837);
});


/***/ }),

/***/ "./src/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_d3__ = __webpack_require__("./node_modules/d3/build/d3.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_d3___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_d3__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_topojson__ = __webpack_require__("./node_modules/topojson/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_d3_geo_projection__ = __webpack_require__("./node_modules/d3-geo-projection/index.js");




//let d3 = Object.assign({}, d3geoProj, d3Main);
/*
let questions = [];
var width = 960;
var height = 500;

let question = document.getElementById('question');
let randomBtn = document.getElementById('random');
let score = document.getElementById('score');
let status = document.getElementById('status');

let correctAnswerText;
let oldColor;

var svg = d3.select('#map')
    .append('svg')
    .attr('width', width)
    .attr('height', height)
    .attr('class', 'map')
    .append('g')

var projection = d3.geoRobinson()
    //   .scale(width / 1.25); USA
    .scale(width / 5.6);

//    .translate([Math.sqrt(width / 2), height / 2]);

// projection.center([-98, 36]); USA
projection.center([15, 10]);


var path = d3.geoPath()
    .projection(projection);

var url = '/maps/world-110m.geojson';

d3.json(url, function(err, mapJson) {
    //console.log(mapJson);
    if (err) {
        console.log('error in d3.json', err);
    }
    let mapDivisions = Object.keys(mapJson.objects)[0];
    let countries = topojson.feature(mapJson, mapJson.objects[mapDivisions]).features;
    //console.log(countries, '<-- countries');
    let colorScale = d3.scaleSequential(d3.interpolateRainbow).domain([30, 750]);

    svg.selectAll('.country')
        .data(countries, function(country, i) {
            console.log(i, country, 'country');
            if (country.properties.name !== 'District of Columbia') {

                questions.push(country.properties.name);
            }
        })
        .enter()
        .append('path')
        .attr('class', 'country')
        .attr('d', path)
        .attr('stroke', 'rgba(50,50,50,.6)')
        .attr('fill', function(data, i) {
            return colorScale(i * 7);
        })
        .on('mouseover', function() {
            // console.log(d);
            // console.log(this.getAttribute('fill'));
            oldColor = this.getAttribute('fill');
            // this.setAttribute('stroke', 'rgba(250,250,250,.9)');
            this.setAttribute('stroke-width', 0.2);
            this.setAttribute('fill', 'yellow');
        })
        .on('mouseout', function() {
            // this.setAttribute('stroke', 'black');
            this.setAttribute('stroke-width', 1);
            this.setAttribute('fill', oldColor);

        })
        .on('click', function(data) {
            status.classList.remove('correct', 'wrong');
            correctAnswerText = document.getElementById('test');
            data.properties.name === correctAnswerText.innerText ? correctAnswer() : wrongAnswer();
        });
    console.log(questions);
});


randomBtn.addEventListener('click', generateQuestion);

function generateQuestion() {
    question.innerHTML = `Where is <strong id='test'>${questions[Math.floor(Math.random() * questions.length)]}</strong>?`;
    //status.classList.remove('correct', 'wrong');

}

function correctAnswer() {
    let scoreCount = parseInt(score.innerText);
    score.innerText = scoreCount += 1;
    status.innerText = 'CORRECT!';
    // status.classList.remove('correct', 'wrong');

    status.classList.add('correct');
    generateQuestion();
}

function wrongAnswer() {
    status.innerText = 'WRONG!';
    // status.classList.remove('correct', 'wrong');
    status.classList.add('wrong');
}
*/
console.log(__WEBPACK_IMPORTED_MODULE_0_d3__);
var width = 960,
    height = 500,
    active = __WEBPACK_IMPORTED_MODULE_0_d3__["select"](null);

var projection = __WEBPACK_IMPORTED_MODULE_2_d3_geo_projection__["a" /* geoRobinson */]() // updated for d3 v4
    .scale(130)
    .translate([width / 2, height / 2]);

var zoom = __WEBPACK_IMPORTED_MODULE_0_d3__["zoom"]()
    // no longer in d3 v4 - zoom initialises with zoomIdentity, so it's already at origin
    // .translate([0, 0])
    // .scale(1)
    .scaleExtent([1, 8])
    .on('zoom', zoomed);

var path = __WEBPACK_IMPORTED_MODULE_0_d3__["geoPath"]() // updated for d3 v4
    .projection(projection);

var svg = __WEBPACK_IMPORTED_MODULE_0_d3__["select"]('body')
    .append('svg')
    .attr('width', width)
    .attr('height', height)
    .on('click', stopped, true);

svg
    .append('rect')
    .attr('class', 'background')
    .attr('width', width)
    .attr('height', height)
    .on('click', reset);

var g = svg.append('g');

svg.call(zoom); // delete this line to disable free zooming
// .call(zoom.event); // not in d3 v4

__WEBPACK_IMPORTED_MODULE_0_d3__["json"]('/maps/world-110m.geojson', function(error, mapJson) {
    if (error) {
        throw error;
    }
    let mapDivisions = Object.keys(mapJson.objects)[0];

    g
        .selectAll('path')
        .data(__WEBPACK_IMPORTED_MODULE_1_topojson__["a" /* feature */](mapJson, mapJson.objects[mapDivisions]).features)
        .enter()
        .append('path')
        .attr('d', path)
        .attr('class', 'feature')
        .on('click', clicked);

    g
        .append('path')
        .datum(
            __WEBPACK_IMPORTED_MODULE_1_topojson__["b" /* mesh */](mapJson, mapJson.objects[mapDivisions], function(a, b) {
                return a !== b;
            })
        )
        .attr('class', 'mesh')
        .attr('d', path);
});

function clicked(d) {
    if (active.node() === this) {
        return reset();
    }
    active.classed('active', false);
    active = __WEBPACK_IMPORTED_MODULE_0_d3__["select"](this).classed('active', true);

    var bounds = path.bounds(d),
        dx = bounds[1][0] - bounds[0][0],
        dy = bounds[1][1] - bounds[0][1],
        x = (bounds[0][0] + bounds[1][0]) / 2,
        y = (bounds[0][1] + bounds[1][1]) / 2,
        scale = Math.max(1, Math.min(8, 0.9 / Math.max(dx / width, dy / height))),
        translate = [width / 2 - scale * x, height / 2 - scale * y];

    svg
        .transition()
        .duration(750)
    // .call(zoom.translate(translate).scale(scale).event); // not in d3 v4
        .call(zoom.transform, __WEBPACK_IMPORTED_MODULE_0_d3__["zoomIdentity"].translate(translate[0], translate[1]).scale(scale)); // updated for d3 v4
}

function reset() {
    active.classed('active', false);
    active = __WEBPACK_IMPORTED_MODULE_0_d3__["select"](null);

    svg
        .transition()
        .duration(750)
    // .call( zoom.transform, d3.zoomIdentity.translate(0, 0).scale(1) ); // not in d3 v4
        .call(zoom.transform, __WEBPACK_IMPORTED_MODULE_0_d3__["zoomIdentity"]); // updated for d3 v4
}

function zoomed() {
    g.style('stroke-width', 1.5 / __WEBPACK_IMPORTED_MODULE_0_d3__["event"].transform.k + 'px');
    // g.attr("transform", "translate(" + d3.event.translate + ")scale(" + d3.event.scale + ")"); // not in d3 v4
    g.attr('transform', __WEBPACK_IMPORTED_MODULE_0_d3__["event"].transform); // updated for d3 v4
}

// If the drag behavior prevents the default click,
// also stop propagation so we don’t click-to-zoom.
function stopped() {
    if (__WEBPACK_IMPORTED_MODULE_0_d3__["event"].defaultPrevented) {
        __WEBPACK_IMPORTED_MODULE_0_d3__["event"].stopPropagation();
    }
}


/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZDMtYXJyYXkvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2QzLWFycmF5L3NyYy9hcnJheS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZDMtYXJyYXkvc3JjL2FzY2VuZGluZy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZDMtYXJyYXkvc3JjL2Jpc2VjdC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZDMtYXJyYXkvc3JjL2Jpc2VjdG9yLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9kMy1hcnJheS9zcmMvY29uc3RhbnQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2QzLWFycmF5L3NyYy9jcm9zcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZDMtYXJyYXkvc3JjL2Rlc2NlbmRpbmcuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2QzLWFycmF5L3NyYy9kZXZpYXRpb24uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2QzLWFycmF5L3NyYy9leHRlbnQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2QzLWFycmF5L3NyYy9oaXN0b2dyYW0uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2QzLWFycmF5L3NyYy9pZGVudGl0eS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZDMtYXJyYXkvc3JjL21heC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZDMtYXJyYXkvc3JjL21lYW4uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2QzLWFycmF5L3NyYy9tZWRpYW4uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2QzLWFycmF5L3NyYy9tZXJnZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZDMtYXJyYXkvc3JjL21pbi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZDMtYXJyYXkvc3JjL251bWJlci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZDMtYXJyYXkvc3JjL3BhaXJzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9kMy1hcnJheS9zcmMvcGVybXV0ZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZDMtYXJyYXkvc3JjL3F1YW50aWxlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9kMy1hcnJheS9zcmMvcmFuZ2UuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2QzLWFycmF5L3NyYy9zY2FuLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9kMy1hcnJheS9zcmMvc2h1ZmZsZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZDMtYXJyYXkvc3JjL3N1bS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZDMtYXJyYXkvc3JjL3RocmVzaG9sZC9mcmVlZG1hbkRpYWNvbmlzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9kMy1hcnJheS9zcmMvdGhyZXNob2xkL3Njb3R0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9kMy1hcnJheS9zcmMvdGhyZXNob2xkL3N0dXJnZXMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2QzLWFycmF5L3NyYy90aWNrcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZDMtYXJyYXkvc3JjL3RyYW5zcG9zZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZDMtYXJyYXkvc3JjL3ZhcmlhbmNlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9kMy1hcnJheS9zcmMvemlwLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9kMy1nZW8tcHJvamVjdGlvbi9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZDMtZ2VvLXByb2plY3Rpb24vbm9kZV9tb2R1bGVzL2QzLWdlby9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZDMtZ2VvLXByb2plY3Rpb24vbm9kZV9tb2R1bGVzL2QzLWdlby9zcmMvYWRkZXIuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2QzLWdlby1wcm9qZWN0aW9uL25vZGVfbW9kdWxlcy9kMy1nZW8vc3JjL2FyZWEuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2QzLWdlby1wcm9qZWN0aW9uL25vZGVfbW9kdWxlcy9kMy1nZW8vc3JjL2JvdW5kcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZDMtZ2VvLXByb2plY3Rpb24vbm9kZV9tb2R1bGVzL2QzLWdlby9zcmMvY2FydGVzaWFuLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9kMy1nZW8tcHJvamVjdGlvbi9ub2RlX21vZHVsZXMvZDMtZ2VvL3NyYy9jZW50cm9pZC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZDMtZ2VvLXByb2plY3Rpb24vbm9kZV9tb2R1bGVzL2QzLWdlby9zcmMvY2lyY2xlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9kMy1nZW8tcHJvamVjdGlvbi9ub2RlX21vZHVsZXMvZDMtZ2VvL3NyYy9jbGlwL2FudGltZXJpZGlhbi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZDMtZ2VvLXByb2plY3Rpb24vbm9kZV9tb2R1bGVzL2QzLWdlby9zcmMvY2xpcC9idWZmZXIuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2QzLWdlby1wcm9qZWN0aW9uL25vZGVfbW9kdWxlcy9kMy1nZW8vc3JjL2NsaXAvY2lyY2xlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9kMy1nZW8tcHJvamVjdGlvbi9ub2RlX21vZHVsZXMvZDMtZ2VvL3NyYy9jbGlwL2V4dGVudC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZDMtZ2VvLXByb2plY3Rpb24vbm9kZV9tb2R1bGVzL2QzLWdlby9zcmMvY2xpcC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZDMtZ2VvLXByb2plY3Rpb24vbm9kZV9tb2R1bGVzL2QzLWdlby9zcmMvY2xpcC9saW5lLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9kMy1nZW8tcHJvamVjdGlvbi9ub2RlX21vZHVsZXMvZDMtZ2VvL3NyYy9jbGlwL3JlY3RhbmdsZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZDMtZ2VvLXByb2plY3Rpb24vbm9kZV9tb2R1bGVzL2QzLWdlby9zcmMvY2xpcC9yZWpvaW4uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2QzLWdlby1wcm9qZWN0aW9uL25vZGVfbW9kdWxlcy9kMy1nZW8vc3JjL2NvbXBvc2UuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2QzLWdlby1wcm9qZWN0aW9uL25vZGVfbW9kdWxlcy9kMy1nZW8vc3JjL2NvbnN0YW50LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9kMy1nZW8tcHJvamVjdGlvbi9ub2RlX21vZHVsZXMvZDMtZ2VvL3NyYy9jb250YWlucy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZDMtZ2VvLXByb2plY3Rpb24vbm9kZV9tb2R1bGVzL2QzLWdlby9zcmMvZGlzdGFuY2UuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2QzLWdlby1wcm9qZWN0aW9uL25vZGVfbW9kdWxlcy9kMy1nZW8vc3JjL2dyYXRpY3VsZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZDMtZ2VvLXByb2plY3Rpb24vbm9kZV9tb2R1bGVzL2QzLWdlby9zcmMvaWRlbnRpdHkuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2QzLWdlby1wcm9qZWN0aW9uL25vZGVfbW9kdWxlcy9kMy1nZW8vc3JjL2ludGVycG9sYXRlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9kMy1nZW8tcHJvamVjdGlvbi9ub2RlX21vZHVsZXMvZDMtZ2VvL3NyYy9sZW5ndGguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2QzLWdlby1wcm9qZWN0aW9uL25vZGVfbW9kdWxlcy9kMy1nZW8vc3JjL21hdGguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2QzLWdlby1wcm9qZWN0aW9uL25vZGVfbW9kdWxlcy9kMy1nZW8vc3JjL25vb3AuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2QzLWdlby1wcm9qZWN0aW9uL25vZGVfbW9kdWxlcy9kMy1nZW8vc3JjL3BhdGgvYXJlYS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZDMtZ2VvLXByb2plY3Rpb24vbm9kZV9tb2R1bGVzL2QzLWdlby9zcmMvcGF0aC9ib3VuZHMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2QzLWdlby1wcm9qZWN0aW9uL25vZGVfbW9kdWxlcy9kMy1nZW8vc3JjL3BhdGgvY2VudHJvaWQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2QzLWdlby1wcm9qZWN0aW9uL25vZGVfbW9kdWxlcy9kMy1nZW8vc3JjL3BhdGgvY29udGV4dC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZDMtZ2VvLXByb2plY3Rpb24vbm9kZV9tb2R1bGVzL2QzLWdlby9zcmMvcGF0aC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZDMtZ2VvLXByb2plY3Rpb24vbm9kZV9tb2R1bGVzL2QzLWdlby9zcmMvcGF0aC9tZWFzdXJlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9kMy1nZW8tcHJvamVjdGlvbi9ub2RlX21vZHVsZXMvZDMtZ2VvL3NyYy9wYXRoL3N0cmluZy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZDMtZ2VvLXByb2plY3Rpb24vbm9kZV9tb2R1bGVzL2QzLWdlby9zcmMvcG9pbnRFcXVhbC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZDMtZ2VvLXByb2plY3Rpb24vbm9kZV9tb2R1bGVzL2QzLWdlby9zcmMvcG9seWdvbkNvbnRhaW5zLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9kMy1nZW8tcHJvamVjdGlvbi9ub2RlX21vZHVsZXMvZDMtZ2VvL3NyYy9wcm9qZWN0aW9uL2FsYmVycy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZDMtZ2VvLXByb2plY3Rpb24vbm9kZV9tb2R1bGVzL2QzLWdlby9zcmMvcHJvamVjdGlvbi9hbGJlcnNVc2EuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2QzLWdlby1wcm9qZWN0aW9uL25vZGVfbW9kdWxlcy9kMy1nZW8vc3JjL3Byb2plY3Rpb24vYXppbXV0aGFsLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9kMy1nZW8tcHJvamVjdGlvbi9ub2RlX21vZHVsZXMvZDMtZ2VvL3NyYy9wcm9qZWN0aW9uL2F6aW11dGhhbEVxdWFsQXJlYS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZDMtZ2VvLXByb2plY3Rpb24vbm9kZV9tb2R1bGVzL2QzLWdlby9zcmMvcHJvamVjdGlvbi9hemltdXRoYWxFcXVpZGlzdGFudC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZDMtZ2VvLXByb2plY3Rpb24vbm9kZV9tb2R1bGVzL2QzLWdlby9zcmMvcHJvamVjdGlvbi9jb25pYy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZDMtZ2VvLXByb2plY3Rpb24vbm9kZV9tb2R1bGVzL2QzLWdlby9zcmMvcHJvamVjdGlvbi9jb25pY0NvbmZvcm1hbC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZDMtZ2VvLXByb2plY3Rpb24vbm9kZV9tb2R1bGVzL2QzLWdlby9zcmMvcHJvamVjdGlvbi9jb25pY0VxdWFsQXJlYS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZDMtZ2VvLXByb2plY3Rpb24vbm9kZV9tb2R1bGVzL2QzLWdlby9zcmMvcHJvamVjdGlvbi9jb25pY0VxdWlkaXN0YW50LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9kMy1nZW8tcHJvamVjdGlvbi9ub2RlX21vZHVsZXMvZDMtZ2VvL3NyYy9wcm9qZWN0aW9uL2N5bGluZHJpY2FsRXF1YWxBcmVhLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9kMy1nZW8tcHJvamVjdGlvbi9ub2RlX21vZHVsZXMvZDMtZ2VvL3NyYy9wcm9qZWN0aW9uL2VxdWlyZWN0YW5ndWxhci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZDMtZ2VvLXByb2plY3Rpb24vbm9kZV9tb2R1bGVzL2QzLWdlby9zcmMvcHJvamVjdGlvbi9maXQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2QzLWdlby1wcm9qZWN0aW9uL25vZGVfbW9kdWxlcy9kMy1nZW8vc3JjL3Byb2plY3Rpb24vZ25vbW9uaWMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2QzLWdlby1wcm9qZWN0aW9uL25vZGVfbW9kdWxlcy9kMy1nZW8vc3JjL3Byb2plY3Rpb24vaWRlbnRpdHkuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2QzLWdlby1wcm9qZWN0aW9uL25vZGVfbW9kdWxlcy9kMy1nZW8vc3JjL3Byb2plY3Rpb24vaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2QzLWdlby1wcm9qZWN0aW9uL25vZGVfbW9kdWxlcy9kMy1nZW8vc3JjL3Byb2plY3Rpb24vbWVyY2F0b3IuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2QzLWdlby1wcm9qZWN0aW9uL25vZGVfbW9kdWxlcy9kMy1nZW8vc3JjL3Byb2plY3Rpb24vbmF0dXJhbEVhcnRoMS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZDMtZ2VvLXByb2plY3Rpb24vbm9kZV9tb2R1bGVzL2QzLWdlby9zcmMvcHJvamVjdGlvbi9vcnRob2dyYXBoaWMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2QzLWdlby1wcm9qZWN0aW9uL25vZGVfbW9kdWxlcy9kMy1nZW8vc3JjL3Byb2plY3Rpb24vcmVzYW1wbGUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2QzLWdlby1wcm9qZWN0aW9uL25vZGVfbW9kdWxlcy9kMy1nZW8vc3JjL3Byb2plY3Rpb24vc3RlcmVvZ3JhcGhpYy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZDMtZ2VvLXByb2plY3Rpb24vbm9kZV9tb2R1bGVzL2QzLWdlby9zcmMvcHJvamVjdGlvbi90cmFuc3ZlcnNlTWVyY2F0b3IuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2QzLWdlby1wcm9qZWN0aW9uL25vZGVfbW9kdWxlcy9kMy1nZW8vc3JjL3JvdGF0aW9uLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9kMy1nZW8tcHJvamVjdGlvbi9ub2RlX21vZHVsZXMvZDMtZ2VvL3NyYy9zdHJlYW0uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2QzLWdlby1wcm9qZWN0aW9uL25vZGVfbW9kdWxlcy9kMy1nZW8vc3JjL3RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZDMtZ2VvLXByb2plY3Rpb24vc3JjL2FpcnkuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2QzLWdlby1wcm9qZWN0aW9uL3NyYy9haXRvZmYuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2QzLWdlby1wcm9qZWN0aW9uL3NyYy9hcm1hZGlsbG8uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2QzLWdlby1wcm9qZWN0aW9uL3NyYy9hdWd1c3QuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2QzLWdlby1wcm9qZWN0aW9uL3NyYy9iYWtlci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZDMtZ2VvLXByb2plY3Rpb24vc3JjL2JlcmdoYXVzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9kMy1nZW8tcHJvamVjdGlvbi9zcmMvYmVydGluLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9kMy1nZW8tcHJvamVjdGlvbi9zcmMvYm9nZ3MuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2QzLWdlby1wcm9qZWN0aW9uL3NyYy9ib25uZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZDMtZ2VvLXByb2plY3Rpb24vc3JjL2JvdHRvbWxleS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZDMtZ2VvLXByb2plY3Rpb24vc3JjL2Jyb21sZXkuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2QzLWdlby1wcm9qZWN0aW9uL3NyYy9jaGFtYmVybGluLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9kMy1nZW8tcHJvamVjdGlvbi9zcmMvY29sbGlnbm9uLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9kMy1nZW8tcHJvamVjdGlvbi9zcmMvY3JhaWcuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2QzLWdlby1wcm9qZWN0aW9uL3NyYy9jcmFzdGVyLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9kMy1nZW8tcHJvamVjdGlvbi9zcmMvY3lsaW5kcmljYWxFcXVhbEFyZWEuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2QzLWdlby1wcm9qZWN0aW9uL3NyYy9jeWxpbmRyaWNhbFN0ZXJlb2dyYXBoaWMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2QzLWdlby1wcm9qZWN0aW9uL3NyYy9lY2tlcnQxLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9kMy1nZW8tcHJvamVjdGlvbi9zcmMvZWNrZXJ0Mi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZDMtZ2VvLXByb2plY3Rpb24vc3JjL2Vja2VydDMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2QzLWdlby1wcm9qZWN0aW9uL3NyYy9lY2tlcnQ0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9kMy1nZW8tcHJvamVjdGlvbi9zcmMvZWNrZXJ0NS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZDMtZ2VvLXByb2plY3Rpb24vc3JjL2Vja2VydDYuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2QzLWdlby1wcm9qZWN0aW9uL3NyYy9laXNlbmxvaHIuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2QzLWdlby1wcm9qZWN0aW9uL3NyYy9lbGxpcHRpYy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZDMtZ2VvLXByb2plY3Rpb24vc3JjL2ZhaGV5LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9kMy1nZW8tcHJvamVjdGlvbi9zcmMvZm91Y2F1dC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZDMtZ2VvLXByb2plY3Rpb24vc3JjL2dpbGJlcnQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2QzLWdlby1wcm9qZWN0aW9uL3NyYy9naW5nZXJ5LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9kMy1nZW8tcHJvamVjdGlvbi9zcmMvZ2luemJ1cmc0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9kMy1nZW8tcHJvamVjdGlvbi9zcmMvZ2luemJ1cmc1LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9kMy1nZW8tcHJvamVjdGlvbi9zcmMvZ2luemJ1cmc2LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9kMy1nZW8tcHJvamVjdGlvbi9zcmMvZ2luemJ1cmc4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9kMy1nZW8tcHJvamVjdGlvbi9zcmMvZ2luemJ1cmc5LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9kMy1nZW8tcHJvamVjdGlvbi9zcmMvZ2luemJ1cmdQb2x5Y29uaWMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2QzLWdlby1wcm9qZWN0aW9uL3NyYy9ncmluZ29ydGVuLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9kMy1nZW8tcHJvamVjdGlvbi9zcmMvZ3V5b3UuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2QzLWdlby1wcm9qZWN0aW9uL3NyYy9oYW1tZXIuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2QzLWdlby1wcm9qZWN0aW9uL3NyYy9oYW1tZXJSZXRyb2F6aW11dGhhbC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZDMtZ2VvLXByb2plY3Rpb24vc3JjL2hlYWxwaXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2QzLWdlby1wcm9qZWN0aW9uL3NyYy9oaWxsLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9kMy1nZW8tcHJvamVjdGlvbi9zcmMvaG9tb2xvc2luZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZDMtZ2VvLXByb2plY3Rpb24vc3JjL2ludGVycnVwdGVkL2JvZ2dzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9kMy1nZW8tcHJvamVjdGlvbi9zcmMvaW50ZXJydXB0ZWQvaG9tb2xvc2luZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZDMtZ2VvLXByb2plY3Rpb24vc3JjL2ludGVycnVwdGVkL2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9kMy1nZW8tcHJvamVjdGlvbi9zcmMvaW50ZXJydXB0ZWQvbW9sbHdlaWRlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9kMy1nZW8tcHJvamVjdGlvbi9zcmMvaW50ZXJydXB0ZWQvbW9sbHdlaWRlSGVtaXNwaGVyZXMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2QzLWdlby1wcm9qZWN0aW9uL3NyYy9pbnRlcnJ1cHRlZC9zaW51TW9sbHdlaWRlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9kMy1nZW8tcHJvamVjdGlvbi9zcmMvaW50ZXJydXB0ZWQvc2ludXNvaWRhbC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZDMtZ2VvLXByb2plY3Rpb24vc3JjL2thdnJheXNraXk3LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9kMy1nZW8tcHJvamVjdGlvbi9zcmMvbGFncmFuZ2UuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2QzLWdlby1wcm9qZWN0aW9uL3NyYy9sYXJyaXZlZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZDMtZ2VvLXByb2plY3Rpb24vc3JjL2xhc2tvd3NraS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZDMtZ2VvLXByb2plY3Rpb24vc3JjL2xpdHRyb3cuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2QzLWdlby1wcm9qZWN0aW9uL3NyYy9sb3hpbXV0aGFsLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9kMy1nZW8tcHJvamVjdGlvbi9zcmMvbWF0aC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZDMtZ2VvLXByb2plY3Rpb24vc3JjL21pbGxlci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZDMtZ2VvLXByb2plY3Rpb24vc3JjL21vZGlmaWVkU3RlcmVvZ3JhcGhpYy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZDMtZ2VvLXByb2plY3Rpb24vc3JjL21vbGx3ZWlkZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZDMtZ2VvLXByb2plY3Rpb24vc3JjL210RmxhdFBvbGFyUGFyYWJvbGljLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9kMy1nZW8tcHJvamVjdGlvbi9zcmMvbXRGbGF0UG9sYXJRdWFydGljLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9kMy1nZW8tcHJvamVjdGlvbi9zcmMvbXRGbGF0UG9sYXJTaW51c29pZGFsLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9kMy1nZW8tcHJvamVjdGlvbi9zcmMvbmF0dXJhbEVhcnRoMi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZDMtZ2VvLXByb2plY3Rpb24vc3JjL25lbGxIYW1tZXIuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2QzLWdlby1wcm9qZWN0aW9uL3NyYy9ub29wLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9kMy1nZW8tcHJvamVjdGlvbi9zcmMvcGFyYWxsZWwxLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9kMy1nZW8tcHJvamVjdGlvbi9zcmMvcGF0dGVyc29uLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9kMy1nZW8tcHJvamVjdGlvbi9zcmMvcG9seWNvbmljLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9kMy1nZW8tcHJvamVjdGlvbi9zcmMvcG9seWhlZHJhbC9idXR0ZXJmbHkuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2QzLWdlby1wcm9qZWN0aW9uL3NyYy9wb2x5aGVkcmFsL2NvbGxpZ25vbi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZDMtZ2VvLXByb2plY3Rpb24vc3JjL3BvbHloZWRyYWwvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2QzLWdlby1wcm9qZWN0aW9uL3NyYy9wb2x5aGVkcmFsL21hdHJpeC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZDMtZ2VvLXByb2plY3Rpb24vc3JjL3BvbHloZWRyYWwvb2N0YWhlZHJvbi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZDMtZ2VvLXByb2plY3Rpb24vc3JjL3BvbHloZWRyYWwvd2F0ZXJtYW4uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2QzLWdlby1wcm9qZWN0aW9uL3NyYy9wcm9qZWN0L2Nsb2Nrd2lzZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZDMtZ2VvLXByb2plY3Rpb24vc3JjL3Byb2plY3QvY29udGFpbnMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2QzLWdlby1wcm9qZWN0aW9uL3NyYy9wcm9qZWN0L2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9kMy1nZW8tcHJvamVjdGlvbi9zcmMvcXVhbnRpemUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2QzLWdlby1wcm9qZWN0aW9uL3NyYy9xdWluY3VuY2lhbC9ncmluZ29ydGVuLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9kMy1nZW8tcHJvamVjdGlvbi9zcmMvcXVpbmN1bmNpYWwvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2QzLWdlby1wcm9qZWN0aW9uL3NyYy9xdWluY3VuY2lhbC9wZWlyY2UuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2QzLWdlby1wcm9qZWN0aW9uL3NyYy9yZWN0YW5ndWxhclBvbHljb25pYy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZDMtZ2VvLXByb2plY3Rpb24vc3JjL3JvYmluc29uLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9kMy1nZW8tcHJvamVjdGlvbi9zcmMvc2F0ZWxsaXRlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9kMy1nZW8tcHJvamVjdGlvbi9zcmMvc2ludU1vbGx3ZWlkZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZDMtZ2VvLXByb2plY3Rpb24vc3JjL3NpbnVzb2lkYWwuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2QzLWdlby1wcm9qZWN0aW9uL3NyYy9zcXVhcmUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2QzLWdlby1wcm9qZWN0aW9uL3NyYy9zdGl0Y2guanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2QzLWdlby1wcm9qZWN0aW9uL3NyYy90aW1lcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZDMtZ2VvLXByb2plY3Rpb24vc3JjL3R3b1BvaW50LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9kMy1nZW8tcHJvamVjdGlvbi9zcmMvdHdvUG9pbnRBemltdXRoYWwuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2QzLWdlby1wcm9qZWN0aW9uL3NyYy90d29Qb2ludEVxdWlkaXN0YW50LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9kMy1nZW8tcHJvamVjdGlvbi9zcmMvdmFuRGVyR3JpbnRlbi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZDMtZ2VvLXByb2plY3Rpb24vc3JjL3ZhbkRlckdyaW50ZW4yLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9kMy1nZW8tcHJvamVjdGlvbi9zcmMvdmFuRGVyR3JpbnRlbjMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2QzLWdlby1wcm9qZWN0aW9uL3NyYy92YW5EZXJHcmludGVuNC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZDMtZ2VvLXByb2plY3Rpb24vc3JjL3dhZ25lcjQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2QzLWdlby1wcm9qZWN0aW9uL3NyYy93YWduZXI2LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9kMy1nZW8tcHJvamVjdGlvbi9zcmMvd2FnbmVyNy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZDMtZ2VvLXByb2plY3Rpb24vc3JjL3dpZWNoZWwuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2QzLWdlby1wcm9qZWN0aW9uL3NyYy93aW5rZWwzLmpzIiwid2VicGFjazovLy8uL3NyYy9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQW1EO0FBQ3RCO0FBQ0Q7QUFDSDtBQUNLO0FBQ0Q7QUFDSDtBQUNHO0FBQ2dCO0FBQ1g7QUFDRTtBQUNiO0FBQ0M7QUFDRTtBQUNEO0FBQ0Y7QUFDRTtBQUNFO0FBQ0M7QUFDSDtBQUNEO0FBQ0c7QUFDSjtBQUMyQjtBQUNyQjtBQUNEO0FBQ0w7Ozs7Ozs7Ozs7QUMxQnZCO0FBQUE7O0FBRUE7QUFDQTs7Ozs7Ozs7O0FDSEE7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDRkE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQ05BOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7O0FDaENBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUNKYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBLGtCQUFrQixTQUFTO0FBQzNCLHNDQUFzQyxTQUFTO0FBQy9DO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7QUNwQkE7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDRkE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7OztBQ0xBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0EseUJBQXlCO0FBQ3pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBLHlCQUF5QjtBQUN6QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDcENjO0FBQ2Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNpQjtBQUNqQjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGVBQWUsT0FBTztBQUN0QjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGtJQUF3RTtBQUN4RTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsZUFBZSxRQUFRO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsZUFBZSxPQUFPO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7QUMxRUE7QUFDQTtBQUNBOzs7Ozs7Ozs7QUNGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQSx5QkFBeUI7QUFDekI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBLHlCQUF5QjtBQUN6QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7O0FDakNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7OztBQ3hCQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7QUMzQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7QUNwQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0EseUJBQXlCO0FBQ3pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQSx5QkFBeUI7QUFDekI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7O0FDakNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQ0ZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7Ozs7Ozs7OztBQ1RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUNKQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7OztBQ2JBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7O0FDWkE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7QUNuQkE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7OztBQ2JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLDJDQUEyQztBQUMzQztBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7OztBQ25CWTtBQUNaO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQ1JBOztBQUVBO0FBQ0E7QUFDQTs7Ozs7Ozs7O0FDSkE7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDRkE7QUFBQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDakRBOztBQUVBO0FBQ0E7QUFDQSwrSEFBcUUsU0FBUztBQUM5RSwwREFBMEQsU0FBUztBQUNuRTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQ2RBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7O0FDaENBOztBQUVBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDSmtEO0FBQ007QUFDUztBQUNUO0FBQ0g7QUFDUztBQUNNO0FBQ2Y7QUFDQTtBQUNZO0FBQ047QUFDa0Q7QUFDNUM7QUFDWjtBQUNNO0FBQ3VDO0FBQ1k7QUFDbkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ007QUFDWjtBQUNNO0FBQzdCO0FBQzZCO0FBQ007QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNHO0FBQ2Y7QUFDRztBQUMwQztBQUN2QztBQUNUO0FBQ2tCO0FBQ3BDO0FBQ087QUFDSztBQUNEO0FBQ1c7QUFDUDtBQUNIO0FBQzJCO0FBQ1Q7QUFDQTtBQUNHO0FBQ047QUFDUztBQUNaO0FBQzBWO0FBQ2pWO0FBQ2lDO0FBQ047QUFDUztBQUNDO0FBQ3pCO0FBQ1Q7QUFDSDtBQUNBO0FBQ2hDO0FBQ1M7QUFDQTtBQUNEO0FBQ1g7QUFDYztBQUNKO0FBQ29DO0FBQzdDO0FBQ0c7QUFDZ0U7QUFDcEM7QUFDRztBQUNZO0FBQ1Q7QUFDdkM7QUFDd0I7QUFDcUY7QUFDVTtBQUN2RTtBQUNHO0FBQ0E7QUFDQTtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzNGaEM7QUFDRTtBQUNFO0FBQ0Y7QUFDVTtBQUNOO0FBQzBCO0FBQ3ZCO0FBQ0w7QUFDQTtBQUNnQztBQUM3QjtBQUNMO0FBQ0Y7QUFDRTtBQUNHO0FBQzREO0FBQ007QUFDbEI7QUFDQTtBQUNNO0FBQ0g7QUFDckI7QUFDL0I7QUFDNkM7QUFDZDtBQUNlO0FBQ0g7QUFDRztBQUNlO0FBQzdEO0FBQ0Y7QUFDRzs7Ozs7Ozs7O0FDaENoQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWU7QUFDZixHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQ3ZDQTtBQUNpRDtBQUNqRDtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSwyRUFBNEI7O0FBRTVCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUN6RUE7QUFDZ0M7QUFDd0M7QUFDakM7QUFDdkM7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDRDQUE0QyxPQUFPO0FBQ25EO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsMkVBQTJFLFFBQVE7QUFDbkY7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDL0tvQzs7QUFFcEM7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7OztBQ2hDeUU7QUFDekU7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZTs7QUFFZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0I7QUFDdEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUMzSXdEO0FBQ3hEO0FBQ3VEO0FBQ2pDOztBQUV0QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUIsaUNBQWlDO0FBQzFEO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQjs7QUFFaEI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7O0FDdkVBO0FBQ2lEOztBQUVqRDtBQUNBLGNBQWMsYUFBYSxFQUFFO0FBQzdCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsdUNBQXVDLHNCQUFzQjtBQUM3RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWTs7QUFFWjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSwyTEFBc0M7QUFDdEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPLDBGQUEyQztBQUNsRCw0TkFBdUU7QUFDdkU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsdUJBQXVCO0FBQ3ZCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQzNGQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUN2QmdHO0FBQzNFO0FBQ3dCO0FBQzdDO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4SUFBd0M7O0FBRXhDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxrRUFBa0U7QUFDbEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjO0FBQ2Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrQkFBK0I7QUFDL0IsbUNBQW1DO0FBQ25DLDRCQUE0QjtBQUM1QixnQ0FBZ0M7QUFDaEM7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7O0FDckxBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FDbkJBO0FBQ0E7QUFDd0I7QUFDeEI7QUFDYzs7QUFFZDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLE9BQU87QUFDNUI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7OztBQ2xJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUMxRHFCO0FBQ3JCO0FBQ0E7QUFDQTtBQUNjOztBQUVkOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdDQUFnQztBQUNoQzs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBLHlDQUF5QyxPQUFPO0FBQ2hELGtIQUFrSCxPQUFPO0FBQ3pIO0FBQ0EseUJBQXlCLHlFQUF5RTtBQUNsRyxnQkFBZ0IsMEVBQTBFO0FBQzFGO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQ3ZLQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakIsaUJBQWlCO0FBQ2pCLGlCQUFpQjtBQUNqQix5QkFBeUI7QUFDekI7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQixPQUFPO0FBQ3hCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7O0FBRUE7QUFDQTtBQUNBOztBQUVBLDhCQUE4QixPQUFPO0FBQ3JDO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3Q0FBd0MsT0FBTztBQUMvQyxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQSxxQ0FBcUMsUUFBUTtBQUM3QyxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7OztBQ3BHQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7OztBQ1hBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7OztBQ0ptQztBQUNQO0FBQ0g7O0FBRXpCO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQ25GQTs7QUFFQTtBQUNBLGNBQWM7O0FBRWQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQ1RjO0FBQ2E7O0FBRTNCO0FBQ0E7QUFDQSxzQkFBc0IsMkJBQTJCLGVBQWUsRUFBRSxFQUFFO0FBQ3BFOztBQUVBO0FBQ0E7QUFDQSxzQkFBc0IsMkJBQTJCLGVBQWUsRUFBRSxFQUFFO0FBQ3BFOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLFlBQVk7QUFDWjs7QUFFQTtBQUNBO0FBQ0E7QUFDQSx1TEFBc0Usb0lBQThCLEVBQUU7QUFDdEcsdUxBQXNFLG9JQUE4QixFQUFFO0FBQ3RHOztBQUVBO0FBQ0EsOENBQThDLFNBQVMsOENBQThDLEVBQUU7QUFDdkc7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7Ozs7Ozs7OztBQ3hHQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUNGZ0U7O0FBRWhFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBOztBQUVBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNuQ0E7QUFDNEM7QUFDNUM7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3BEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFDQUE0QyxtQ0FBbUM7QUFDL0U7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQ2xDQTs7Ozs7Ozs7Ozs7O0FDQUE7QUFDWTtBQUNaOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7OztBQ2pEQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7O0FDM0JhOztBQUViOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7Ozs7O0FDbkdZO0FBQ1o7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDNUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7OztBQzVEQTtBQUNhO0FBQ2I7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7QUM1Q0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQzFEcUI7O0FBRXJCO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7O0FDSkE7QUFDNkQ7QUFDRjs7QUFFM0Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBLHFDQUFxQyxPQUFPO0FBQzVDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsbUJBQW1CLE9BQU87QUFDMUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7QUNuRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQ1RnQjtBQUNoQjtBQUNBO0FBQ2dEOztBQUVoRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkJBQTJCLFlBQVksd0NBQXdDLEVBQUU7QUFDakYsd0JBQXdCLFlBQVkscUNBQXFDLEVBQUU7QUFDM0UsMkJBQTJCLFlBQVksd0NBQXdDLEVBQUU7QUFDakYseUJBQXlCLFlBQVksc0NBQXNDLEVBQUU7QUFDN0UsOEJBQThCLFlBQVksMkNBQTJDLEVBQUU7QUFDdkYsNEJBQTRCLFlBQVkseUNBQXlDO0FBQ2pGO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRCQUE0Qix1QkFBdUIsZ0JBQWdCOztBQUVuRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7O0FDOUdvQzs7QUFFcEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUN6Qm1CO0FBQ21CO0FBQ3RDOztBQUVBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNoQmtCO0FBQ29CO0FBQ3RDOztBQUVBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7OztBQ2hCNkI7QUFDSDs7QUFFMUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7OztBQ2QrRTtBQUN2RDtBQUNKOztBQUVwQjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSxnQkFBZ0IsOE9BQWtEO0FBQ2xFLFVBQVUsNE9BQWdEO0FBQzFEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNsQ3dEO0FBQ2hDO0FBQ1E7O0FBRWhDO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUM3QmtEO0FBQzFCO0FBQ0c7O0FBRTNCO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7QUM1QnVCOztBQUV2QjtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7QUNkQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQ1g2QjtBQUM3Qjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7Ozs7Ozs7Ozs7Ozs7QUM5Q3VCO0FBQ0M7QUFDeEI7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQ2ZBO0FBQ0E7QUFDb0I7QUFDNEI7O0FBRWhEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzdEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQytCO0FBQ1Q7QUFDRjtBQUM0QjtBQUNoRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0EsdUNBQXVDLGdCQUFnQixFQUFFO0FBQ3pEOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7OztBQ2xJNkM7QUFDN0M7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRCQUE0Qjs7QUFFNUI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7O0FDbkRBO0FBQ3FCOztBQUVyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQzNCZ0M7QUFDUjtBQUN4Qjs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7O0FDZGtCO0FBQ29DO0FBQ2xDOztBQUVwQjtBQUNBLDZJQUF1Qzs7QUFFdkM7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDREQUE0RDtBQUM1RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0NBQW9DOztBQUVwQztBQUNBO0FBQ0E7QUFDQTtBQUNBLGdDQUFnQyx1QkFBdUIsc0NBQXNDLEVBQUU7QUFDL0YsOEJBQThCLHFCQUFxQixzQ0FBc0M7QUFDekY7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNyR3VCO0FBQ0M7QUFDeEI7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7O0FDakJvQztBQUNUOztBQUUzQjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7QUMxQkE7QUFDeUQ7O0FBRXpEO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7QUMzRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQ3BFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLHlCQUF5Qix5QkFBeUIsRUFBRTtBQUNwRCxzQkFBc0Isc0JBQXNCLEVBQUU7QUFDOUMseUJBQXlCLHlCQUF5QixFQUFFO0FBQ3BELHVCQUF1Qix1QkFBdUIsRUFBRTtBQUNoRCw0QkFBNEIsNEJBQTRCLEVBQUU7QUFDMUQsMEJBQTBCLDBCQUEwQjtBQUNwRDs7Ozs7Ozs7Ozs7O0FDekJrRDtBQUNvQzs7QUFFdEY7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7O0FDaERvQztBQUNrQjs7QUFFdEQ7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7QUM1Q2tEO0FBQ1c7O0FBRTdEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQ0FBcUMsc0JBQXNCO0FBQzNELGdEQUFnRDtBQUNoRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7OztBQy9Fb0M7QUFDNEM7O0FBRWhGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7OztBQ3RDb0M7QUFDdUQ7O0FBRTNGO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7QUMxQnlHO0FBQ1Y7O0FBRS9GO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHFJQUErQjtBQUMvQjtBQUNBO0FBQ0E7QUFDQSxtT0FBOEQ7QUFDOUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3TUFBMEcsV0FBVztBQUNySDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUM1RW9DO0FBQ2xCO0FBQ0c7O0FBRXJCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQzFDb0M7QUFDTjtBQUN1Qjs7QUFFckQ7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQ3pCQTtBQUNtQztBQUNiOztBQUV0QjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7QUM1QmtEO0FBQ1o7O0FBRXRDOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDakNvQztBQUN6QjtBQUNpQjs7QUFFNUI7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FDVHNGO0FBQ1Y7O0FBRTVFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsbUNBQW1DLE9BQU87QUFDMUM7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxlQUFlLE9BQU87QUFDdEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsZUFBZSxPQUFPO0FBQ3RCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsaUNBQWdEO0FBQ2hELCtFQUFvQiw4Q0FBOEM7QUFDbEU7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7O0FDcEhvQztBQUNBOztBQUVwQztBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7QUNqQnlDO0FBQ3pDOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7QUN6Qm9DO0FBQ0M7O0FBRXJDOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7O0FDakJ1QjtBQUN2Qjs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0I7QUFDdEI7Ozs7Ozs7Ozs7OztBQ3JCdUI7QUFDdkI7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7OztBQ3BCb0M7QUFDZDs7QUFFdEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7O0FDdkJvQztBQUNHOztBQUV2QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7O0FDdEJvQztBQUNuQjs7QUFFakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7OztBQ3RCb0M7QUFDbUI7O0FBRXZEO0FBQ0E7QUFDQTtBQUNBLG1DQUFtQyxzSUFBZ0M7QUFDbkU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7OztBQzdCb0M7QUFDZDs7QUFFdEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7OztBQ3RCb0M7QUFDbUI7O0FBRXZEO0FBQ0E7QUFDQSxtQ0FBbUMsc0lBQWdDO0FBQ25FO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQzNCb0M7QUFDbEI7QUFDZ0U7O0FBRWxGOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7OztBQ3JFb0g7O0FBRXBIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCLHdIQUFrQjtBQUNuQztBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7OztBQ3JIb0M7QUFDRTs7QUFFdEM7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7OztBQ2xCb0M7QUFDTDs7QUFFL0I7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7O0FDaEI0QztBQUNHOztBQUUvQztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGtOQUEyRzs7QUFFM0c7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0Esb0NBQW9DLDJRQUErRCxFQUFFO0FBQ3JHLDZCQUE2QixnQkFBZ0IsRUFBRTtBQUMvQywyQkFBMkIsY0FBYyxFQUFFO0FBQzNDLGdDQUFnQyxtQkFBbUIsRUFBRTtBQUNyRCw4QkFBOEIsaUJBQWlCO0FBQy9DLEtBQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7QUMxRHlHO0FBQ1I7O0FBRWpHO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87O0FBRVA7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLE9BQU87QUFDL0I7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlHQUFrRCxPQUFPO0FBQ3pEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7OztBQ2pKb0M7QUFDcEM7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7OztBQ1JvQztBQUNwQzs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQ1JvQztBQUNwQztBQUNXOztBQUVYOztBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7QUNUb0M7QUFDZjs7QUFFckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7OztBQ2hDb0M7QUFDcEM7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUNSK0M7O0FBRS9DO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDdkRvQztBQUMwQztBQUM5RTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FDbEpvQztBQUNNO0FBQ2lDO0FBQzNFOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7QUNwRHFHO0FBQzlFOztBQUV2QjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7QUNsRDZEO0FBQ3FCOztBQUVsRjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsb0JBQW9CO0FBQ3BCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FDNUdjO0FBQytDO0FBQ3hDO0FBQ1c7QUFDdUI7O0FBRXZELDJEQUEyRDtBQUMzRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0hBQTRELGlEQUFpRCxFQUFFO0FBQy9HLCtIQUFxRSxtREFBbUQsRUFBRTtBQUMxSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNDQUFzQyxrR0FBMEM7QUFDaEY7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7OztBQ3BGa0Q7QUFDbUI7O0FBRXJFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQ2pFb0M7QUFDeEI7QUFDUztBQUNDO0FBQ21COztBQUV6QztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7O0FDckJpQjtBQUNqQjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7O0FDaEJzQjtBQUN0Qjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7OztBQ2hCYztBQUNpQztBQUNSOztBQUV2QztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CLE9BQU87QUFDMUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxhQUFhLE9BQU87QUFDcEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSwrQkFBK0IsUUFBUTtBQUN2QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHdDQUF3QyxpQ0FBaUM7QUFDekU7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EscUNBQXFDLE9BQU87QUFDNUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQ0FBc0MseUZBQWlDO0FBQ3ZFO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUCxLQUFLOztBQUVMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQLEtBQUs7O0FBRUw7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7OztBQy9JcUI7QUFDckI7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7OztBQ2hCcUI7QUFDckI7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7QUNmeUI7QUFDekI7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7O0FDakJzQjtBQUN0Qjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7O0FDakJvQztBQUNkOztBQUV0QjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7QUNka0Q7QUFDYTs7QUFFL0Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esa0NBQWtDO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7OztBQzlDb0M7QUFDMEI7O0FBRTlEOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQixRQUFRO0FBQ3pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7O0FDN0NvQztBQUNMOztBQUUvQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7O0FDcENvQztBQUNtQjs7QUFFdkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7OztBQzVCQTtBQUN1RDs7QUFFdkQ7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNqQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUNBQTRDLG1DQUFtQztBQUMvRTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7O0FDL0RvQztBQUNPOztBQUUzQztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNkNkQ7QUFDTDs7QUFFeEQ7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7OztBQ3hIb0M7QUFDb0I7O0FBRXhEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7OztBQzVCb0M7QUFDUDs7QUFFN0I7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7O0FDekJvQztBQUN1Qjs7QUFFM0Q7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLFFBQVE7QUFDaEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7QUM1Qm9DO0FBQ21COztBQUV2RDtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QixRQUFRO0FBQ2hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7QUM5Qm9DO0FBQ2Q7O0FBRXRCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0EsR0FBRztBQUNILG1CQUFtQixvQkFBb0I7QUFDdkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7O0FDNUJvQztBQUNMOztBQUUvQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLG1DQUFtQyxzSUFBZ0M7QUFDbkU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7O0FDekJBOzs7Ozs7Ozs7OztBQ0FrRDtBQUN6Qjs7QUFFekI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7OztBQ2JvQztBQUNmOztBQUVyQjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxNQUFNO0FBQ047QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7O0FDeENvQztBQUMwQjs7QUFFOUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQ2xDeUQ7QUFDOUM7QUFDWDtBQUNBOztBQUVBOztBQUVBO0FBQ0EsaUZBQXNCLHNDQUFzQztBQUM1RDtBQUNBOztBQUVBO0FBQ0EsWUFBWTtBQUNaLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUM3QjZEO0FBQ3hDO0FBQ0o7QUFDakI7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSxpRkFBc0Isc0NBQXNDO0FBQzVEO0FBQ0E7O0FBRUE7QUFDQSxZQUFZO0FBQ1osR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7QUN6Q2lIO0FBQzVEO0FBQ1I7O0FBRTdDO0FBQ0E7QUFDQTtBQUNBLHNFQUFzRTtBQUN0RTtBQUNBO0FBQ0E7eURBQ0E7O0FBRUEsNkVBQThCOztBQUU5QixpQkFBaUI7QUFDakI7QUFDQTtBQUNBLElBQUk7O0FBRUo7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUNBQXVDLE9BQU87QUFDOUM7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBbUMsT0FBTztBQUMxQztBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvREFBb0QsT0FBTztBQUMzRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsMkNBQTJDO0FBQy9ELCtDQUErQyxnRkFBeUIsRUFBRTtBQUMxRSw2RUFBa0IsMENBQTBDO0FBQzVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQixPQUFPO0FBQ3hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCLE9BQU87QUFDeEI7QUFDQSwwQkFBMEIsVUFBVTtBQUNwQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0NBQWtDLE9BQU87QUFDekM7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7OztBQ25MOEI7O0FBRTlCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO3lEQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7OztBQy9EQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNILENBQUM7Ozs7Ozs7Ozs7Ozs7QUNwQndEO0FBQ0s7QUFDOUQ7QUFDQTs7MEVBRUE7O0FBRUE7QUFDQSxxR0FBMEMsc0NBQXNDO0FBQ2hGO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CLE9BQU87QUFDMUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CLE9BQU87QUFDMUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHNDQUFzQyxPQUFPO0FBQzdDO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7O0FDekhBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7OztBQ1BBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkNBQTZDLE9BQU87QUFDcEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDVmtCO0FBQ2xCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZDQUE2QztBQUM3QyxpRUFBaUU7QUFDakUsdUNBQXVDO0FBQ3ZDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1DQUFtQztBQUNuQyx3Q0FBd0M7QUFDeEMsdUNBQXVDO0FBQ3ZDLDRDQUE0QztBQUM1Qyx1Q0FBdUM7QUFDdkMsNENBQTRDO0FBQzVDLHNDQUFzQztBQUN0QztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSwrQkFBK0I7QUFDL0IsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLDhCQUE4QjtBQUM5QixXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSx3Q0FBd0M7QUFDeEM7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUCxLQUFLOztBQUVMOztBQUVBO0FBQ0EsaUNBQWlDO0FBQ2pDLFdBQVc7QUFDWDtBQUNBOzs7Ozs7Ozs7QUN2SUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkNBQTJDLGdGQUFnRjtBQUMzSCw4QkFBOEIsOERBQThEO0FBQzVGLHNEQUFzRCxrRUFBa0U7QUFDeEgsd0RBQXdELG1FQUFtRTtBQUMzSCxxQ0FBcUMsMkVBQTJFO0FBQ2hIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxrQkFBa0I7QUFDbEI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CO0FBQ3BCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7QUNwRHNCO0FBQ3RCOztBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7OztBQ05vQztBQUNHOztBQUV2QztBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7O0FDdkNpQjtBQUNqQjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7O0FDTjBEO0FBQzFEOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7QUMzQ29DO0FBQ2lDOztBQUVyRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7OztBQ3hGa0Q7QUFDVTs7QUFFNUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7OzBFQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FDdEVvQztBQUNmO0FBQ0M7O0FBRXRCOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7OztBQ3pCb0M7QUFDeEI7O0FBRVo7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQ2RtQjs7QUFFbkI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7OztBQ3ZCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDJEQUEyRDtBQUMzRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsbUNBQW1DLE9BQU87QUFDMUM7O0FBRUE7QUFDQSxvQkFBb0Isd0NBQXdDOztBQUU1RCxvQ0FBb0MsT0FBTztBQUMzQztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsMkJBQTJCLE9BQU87QUFDbEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdDQUFnQztBQUNoQztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHdCQUF3Qiw0REFBNEQ7QUFDcEY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsMEJBQTBCO0FBQzFCLHdCQUF3QjtBQUN4QjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsYUFBYSxPQUFPO0FBQ3BCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsYUFBYSxPQUFPO0FBQ3BCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsaUNBQWlDO0FBQ2pDO0FBQ0Esb0JBQW9COztBQUVwQjtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQSw0QkFBNEI7QUFDNUIsb0JBQW9CO0FBQ3BCO0FBQ0E7QUFDQSxPQUFPO0FBQ1AsNkNBQTZDO0FBQzdDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxnQkFBZ0I7QUFDaEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlDQUF5Qyw4RUFBOEU7QUFDdkgsNEJBQTRCLDJEQUEyRDtBQUN2RixvREFBb0QsK0RBQStEO0FBQ25ILHNDQUFzQywwRUFBMEU7QUFDaEg7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0I7QUFDaEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0I7QUFDaEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQjtBQUNwQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7OztBQ3ROb0M7QUFDRjs7QUFFbEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7OztBQ3hCNEY7QUFDcEQ7O0FBRXhDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQ3pCc0M7QUFDMUI7QUFDWjs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQzVCOEQ7QUFDckI7QUFDekM7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7OztBQy9Db0M7QUFDMEM7O0FBRTlFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7QUM5Q29DO0FBQzJDOztBQUUvRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7OztBQ2pDb0M7QUFDb0M7O0FBRXhFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7OztBQzdCb0M7QUFDUzs7QUFFN0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUM1RG9DO0FBQ25CO0FBQ1c7O0FBRTVCO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7OztBQ1pvQztBQUNuQjs7QUFFakI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7O0FDZG9DO0FBQ0s7O0FBRXpDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7O0FDM0JvQztBQUNBOztBQUVwQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNqQ29DO0FBQ2xCO0FBQ2lDOztBQUVuRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7OztBQzVDQTtBQUNBO0FBQ0E7O0FBRUEsMkJBQTJCO0FBQzNCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOEJBQThCO0FBQzlCOztBQUVBOztBQUVBLGdDQUFnQztBQUNoQzs7O0FBR0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQSxDQUFDOzs7QUFHRDs7QUFFQTtBQUNBLHVEQUF1RCx3REFBd0Q7QUFDL0c7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsdUZBQ0E7QUFDQTtBQUNBOztBQUVBLG1EQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxzREFDQTtBQUNBOztBQUVBLG9EQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBLGVBQWU7QUFDZixxQkFBcUI7O0FBRXJCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLDJEQUEyRDtBQUMzRCxtSUFBa0c7QUFDbEc7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLHlFQUF5RTtBQUN6RSxnRkFBK0M7QUFDL0M7O0FBRUE7QUFDQTtBQUNBLGlHQUFpRztBQUNqRyw2RUFBNEM7QUFDNUM7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiMC42NDkzNjk4YmE2NDQ5NDZhMzZjNS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IHtkZWZhdWx0IGFzIGJpc2VjdCwgYmlzZWN0UmlnaHQsIGJpc2VjdExlZnR9IGZyb20gXCIuL3NyYy9iaXNlY3RcIjtcbmV4cG9ydCB7ZGVmYXVsdCBhcyBhc2NlbmRpbmd9IGZyb20gXCIuL3NyYy9hc2NlbmRpbmdcIjtcbmV4cG9ydCB7ZGVmYXVsdCBhcyBiaXNlY3Rvcn0gZnJvbSBcIi4vc3JjL2Jpc2VjdG9yXCI7XG5leHBvcnQge2RlZmF1bHQgYXMgY3Jvc3N9IGZyb20gXCIuL3NyYy9jcm9zc1wiO1xuZXhwb3J0IHtkZWZhdWx0IGFzIGRlc2NlbmRpbmd9IGZyb20gXCIuL3NyYy9kZXNjZW5kaW5nXCI7XG5leHBvcnQge2RlZmF1bHQgYXMgZGV2aWF0aW9ufSBmcm9tIFwiLi9zcmMvZGV2aWF0aW9uXCI7XG5leHBvcnQge2RlZmF1bHQgYXMgZXh0ZW50fSBmcm9tIFwiLi9zcmMvZXh0ZW50XCI7XG5leHBvcnQge2RlZmF1bHQgYXMgaGlzdG9ncmFtfSBmcm9tIFwiLi9zcmMvaGlzdG9ncmFtXCI7XG5leHBvcnQge2RlZmF1bHQgYXMgdGhyZXNob2xkRnJlZWRtYW5EaWFjb25pc30gZnJvbSBcIi4vc3JjL3RocmVzaG9sZC9mcmVlZG1hbkRpYWNvbmlzXCI7XG5leHBvcnQge2RlZmF1bHQgYXMgdGhyZXNob2xkU2NvdHR9IGZyb20gXCIuL3NyYy90aHJlc2hvbGQvc2NvdHRcIjtcbmV4cG9ydCB7ZGVmYXVsdCBhcyB0aHJlc2hvbGRTdHVyZ2VzfSBmcm9tIFwiLi9zcmMvdGhyZXNob2xkL3N0dXJnZXNcIjtcbmV4cG9ydCB7ZGVmYXVsdCBhcyBtYXh9IGZyb20gXCIuL3NyYy9tYXhcIjtcbmV4cG9ydCB7ZGVmYXVsdCBhcyBtZWFufSBmcm9tIFwiLi9zcmMvbWVhblwiO1xuZXhwb3J0IHtkZWZhdWx0IGFzIG1lZGlhbn0gZnJvbSBcIi4vc3JjL21lZGlhblwiO1xuZXhwb3J0IHtkZWZhdWx0IGFzIG1lcmdlfSBmcm9tIFwiLi9zcmMvbWVyZ2VcIjtcbmV4cG9ydCB7ZGVmYXVsdCBhcyBtaW59IGZyb20gXCIuL3NyYy9taW5cIjtcbmV4cG9ydCB7ZGVmYXVsdCBhcyBwYWlyc30gZnJvbSBcIi4vc3JjL3BhaXJzXCI7XG5leHBvcnQge2RlZmF1bHQgYXMgcGVybXV0ZX0gZnJvbSBcIi4vc3JjL3Blcm11dGVcIjtcbmV4cG9ydCB7ZGVmYXVsdCBhcyBxdWFudGlsZX0gZnJvbSBcIi4vc3JjL3F1YW50aWxlXCI7XG5leHBvcnQge2RlZmF1bHQgYXMgcmFuZ2V9IGZyb20gXCIuL3NyYy9yYW5nZVwiO1xuZXhwb3J0IHtkZWZhdWx0IGFzIHNjYW59IGZyb20gXCIuL3NyYy9zY2FuXCI7XG5leHBvcnQge2RlZmF1bHQgYXMgc2h1ZmZsZX0gZnJvbSBcIi4vc3JjL3NodWZmbGVcIjtcbmV4cG9ydCB7ZGVmYXVsdCBhcyBzdW19IGZyb20gXCIuL3NyYy9zdW1cIjtcbmV4cG9ydCB7ZGVmYXVsdCBhcyB0aWNrcywgdGlja0luY3JlbWVudCwgdGlja1N0ZXB9IGZyb20gXCIuL3NyYy90aWNrc1wiO1xuZXhwb3J0IHtkZWZhdWx0IGFzIHRyYW5zcG9zZX0gZnJvbSBcIi4vc3JjL3RyYW5zcG9zZVwiO1xuZXhwb3J0IHtkZWZhdWx0IGFzIHZhcmlhbmNlfSBmcm9tIFwiLi9zcmMvdmFyaWFuY2VcIjtcbmV4cG9ydCB7ZGVmYXVsdCBhcyB6aXB9IGZyb20gXCIuL3NyYy96aXBcIjtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2QzLWFycmF5L2luZGV4LmpzXG4vLyBtb2R1bGUgaWQgPSAuL25vZGVfbW9kdWxlcy9kMy1hcnJheS9pbmRleC5qc1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgYXJyYXkgPSBBcnJheS5wcm90b3R5cGU7XG5cbmV4cG9ydCB2YXIgc2xpY2UgPSBhcnJheS5zbGljZTtcbmV4cG9ydCB2YXIgbWFwID0gYXJyYXkubWFwO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvZDMtYXJyYXkvc3JjL2FycmF5LmpzXG4vLyBtb2R1bGUgaWQgPSAuL25vZGVfbW9kdWxlcy9kMy1hcnJheS9zcmMvYXJyYXkuanNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oYSwgYikge1xuICByZXR1cm4gYSA8IGIgPyAtMSA6IGEgPiBiID8gMSA6IGEgPj0gYiA/IDAgOiBOYU47XG59XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9kMy1hcnJheS9zcmMvYXNjZW5kaW5nLmpzXG4vLyBtb2R1bGUgaWQgPSAuL25vZGVfbW9kdWxlcy9kMy1hcnJheS9zcmMvYXNjZW5kaW5nLmpzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCBhc2NlbmRpbmcgZnJvbSBcIi4vYXNjZW5kaW5nXCI7XG5pbXBvcnQgYmlzZWN0b3IgZnJvbSBcIi4vYmlzZWN0b3JcIjtcblxudmFyIGFzY2VuZGluZ0Jpc2VjdCA9IGJpc2VjdG9yKGFzY2VuZGluZyk7XG5leHBvcnQgdmFyIGJpc2VjdFJpZ2h0ID0gYXNjZW5kaW5nQmlzZWN0LnJpZ2h0O1xuZXhwb3J0IHZhciBiaXNlY3RMZWZ0ID0gYXNjZW5kaW5nQmlzZWN0LmxlZnQ7XG5leHBvcnQgZGVmYXVsdCBiaXNlY3RSaWdodDtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2QzLWFycmF5L3NyYy9iaXNlY3QuanNcbi8vIG1vZHVsZSBpZCA9IC4vbm9kZV9tb2R1bGVzL2QzLWFycmF5L3NyYy9iaXNlY3QuanNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IGFzY2VuZGluZyBmcm9tIFwiLi9hc2NlbmRpbmdcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oY29tcGFyZSkge1xuICBpZiAoY29tcGFyZS5sZW5ndGggPT09IDEpIGNvbXBhcmUgPSBhc2NlbmRpbmdDb21wYXJhdG9yKGNvbXBhcmUpO1xuICByZXR1cm4ge1xuICAgIGxlZnQ6IGZ1bmN0aW9uKGEsIHgsIGxvLCBoaSkge1xuICAgICAgaWYgKGxvID09IG51bGwpIGxvID0gMDtcbiAgICAgIGlmIChoaSA9PSBudWxsKSBoaSA9IGEubGVuZ3RoO1xuICAgICAgd2hpbGUgKGxvIDwgaGkpIHtcbiAgICAgICAgdmFyIG1pZCA9IGxvICsgaGkgPj4+IDE7XG4gICAgICAgIGlmIChjb21wYXJlKGFbbWlkXSwgeCkgPCAwKSBsbyA9IG1pZCArIDE7XG4gICAgICAgIGVsc2UgaGkgPSBtaWQ7XG4gICAgICB9XG4gICAgICByZXR1cm4gbG87XG4gICAgfSxcbiAgICByaWdodDogZnVuY3Rpb24oYSwgeCwgbG8sIGhpKSB7XG4gICAgICBpZiAobG8gPT0gbnVsbCkgbG8gPSAwO1xuICAgICAgaWYgKGhpID09IG51bGwpIGhpID0gYS5sZW5ndGg7XG4gICAgICB3aGlsZSAobG8gPCBoaSkge1xuICAgICAgICB2YXIgbWlkID0gbG8gKyBoaSA+Pj4gMTtcbiAgICAgICAgaWYgKGNvbXBhcmUoYVttaWRdLCB4KSA+IDApIGhpID0gbWlkO1xuICAgICAgICBlbHNlIGxvID0gbWlkICsgMTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBsbztcbiAgICB9XG4gIH07XG59XG5cbmZ1bmN0aW9uIGFzY2VuZGluZ0NvbXBhcmF0b3IoZikge1xuICByZXR1cm4gZnVuY3Rpb24oZCwgeCkge1xuICAgIHJldHVybiBhc2NlbmRpbmcoZihkKSwgeCk7XG4gIH07XG59XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9kMy1hcnJheS9zcmMvYmlzZWN0b3IuanNcbi8vIG1vZHVsZSBpZCA9IC4vbm9kZV9tb2R1bGVzL2QzLWFycmF5L3NyYy9iaXNlY3Rvci5qc1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbih4KSB7XG4gIHJldHVybiBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4geDtcbiAgfTtcbn1cblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2QzLWFycmF5L3NyYy9jb25zdGFudC5qc1xuLy8gbW9kdWxlIGlkID0gLi9ub2RlX21vZHVsZXMvZDMtYXJyYXkvc3JjL2NvbnN0YW50LmpzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCB7cGFpcn0gZnJvbSBcIi4vcGFpcnNcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24odmFsdWVzMCwgdmFsdWVzMSwgcmVkdWNlKSB7XG4gIHZhciBuMCA9IHZhbHVlczAubGVuZ3RoLFxuICAgICAgbjEgPSB2YWx1ZXMxLmxlbmd0aCxcbiAgICAgIHZhbHVlcyA9IG5ldyBBcnJheShuMCAqIG4xKSxcbiAgICAgIGkwLFxuICAgICAgaTEsXG4gICAgICBpLFxuICAgICAgdmFsdWUwO1xuXG4gIGlmIChyZWR1Y2UgPT0gbnVsbCkgcmVkdWNlID0gcGFpcjtcblxuICBmb3IgKGkwID0gaSA9IDA7IGkwIDwgbjA7ICsraTApIHtcbiAgICBmb3IgKHZhbHVlMCA9IHZhbHVlczBbaTBdLCBpMSA9IDA7IGkxIDwgbjE7ICsraTEsICsraSkge1xuICAgICAgdmFsdWVzW2ldID0gcmVkdWNlKHZhbHVlMCwgdmFsdWVzMVtpMV0pO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB2YWx1ZXM7XG59XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9kMy1hcnJheS9zcmMvY3Jvc3MuanNcbi8vIG1vZHVsZSBpZCA9IC4vbm9kZV9tb2R1bGVzL2QzLWFycmF5L3NyYy9jcm9zcy5qc1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbihhLCBiKSB7XG4gIHJldHVybiBiIDwgYSA/IC0xIDogYiA+IGEgPyAxIDogYiA+PSBhID8gMCA6IE5hTjtcbn1cblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2QzLWFycmF5L3NyYy9kZXNjZW5kaW5nLmpzXG4vLyBtb2R1bGUgaWQgPSAuL25vZGVfbW9kdWxlcy9kMy1hcnJheS9zcmMvZGVzY2VuZGluZy5qc1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgdmFyaWFuY2UgZnJvbSBcIi4vdmFyaWFuY2VcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oYXJyYXksIGYpIHtcbiAgdmFyIHYgPSB2YXJpYW5jZShhcnJheSwgZik7XG4gIHJldHVybiB2ID8gTWF0aC5zcXJ0KHYpIDogdjtcbn1cblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2QzLWFycmF5L3NyYy9kZXZpYXRpb24uanNcbi8vIG1vZHVsZSBpZCA9IC4vbm9kZV9tb2R1bGVzL2QzLWFycmF5L3NyYy9kZXZpYXRpb24uanNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24odmFsdWVzLCB2YWx1ZW9mKSB7XG4gIHZhciBuID0gdmFsdWVzLmxlbmd0aCxcbiAgICAgIGkgPSAtMSxcbiAgICAgIHZhbHVlLFxuICAgICAgbWluLFxuICAgICAgbWF4O1xuXG4gIGlmICh2YWx1ZW9mID09IG51bGwpIHtcbiAgICB3aGlsZSAoKytpIDwgbikgeyAvLyBGaW5kIHRoZSBmaXJzdCBjb21wYXJhYmxlIHZhbHVlLlxuICAgICAgaWYgKCh2YWx1ZSA9IHZhbHVlc1tpXSkgIT0gbnVsbCAmJiB2YWx1ZSA+PSB2YWx1ZSkge1xuICAgICAgICBtaW4gPSBtYXggPSB2YWx1ZTtcbiAgICAgICAgd2hpbGUgKCsraSA8IG4pIHsgLy8gQ29tcGFyZSB0aGUgcmVtYWluaW5nIHZhbHVlcy5cbiAgICAgICAgICBpZiAoKHZhbHVlID0gdmFsdWVzW2ldKSAhPSBudWxsKSB7XG4gICAgICAgICAgICBpZiAobWluID4gdmFsdWUpIG1pbiA9IHZhbHVlO1xuICAgICAgICAgICAgaWYgKG1heCA8IHZhbHVlKSBtYXggPSB2YWx1ZTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBlbHNlIHtcbiAgICB3aGlsZSAoKytpIDwgbikgeyAvLyBGaW5kIHRoZSBmaXJzdCBjb21wYXJhYmxlIHZhbHVlLlxuICAgICAgaWYgKCh2YWx1ZSA9IHZhbHVlb2YodmFsdWVzW2ldLCBpLCB2YWx1ZXMpKSAhPSBudWxsICYmIHZhbHVlID49IHZhbHVlKSB7XG4gICAgICAgIG1pbiA9IG1heCA9IHZhbHVlO1xuICAgICAgICB3aGlsZSAoKytpIDwgbikgeyAvLyBDb21wYXJlIHRoZSByZW1haW5pbmcgdmFsdWVzLlxuICAgICAgICAgIGlmICgodmFsdWUgPSB2YWx1ZW9mKHZhbHVlc1tpXSwgaSwgdmFsdWVzKSkgIT0gbnVsbCkge1xuICAgICAgICAgICAgaWYgKG1pbiA+IHZhbHVlKSBtaW4gPSB2YWx1ZTtcbiAgICAgICAgICAgIGlmIChtYXggPCB2YWx1ZSkgbWF4ID0gdmFsdWU7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIFttaW4sIG1heF07XG59XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9kMy1hcnJheS9zcmMvZXh0ZW50LmpzXG4vLyBtb2R1bGUgaWQgPSAuL25vZGVfbW9kdWxlcy9kMy1hcnJheS9zcmMvZXh0ZW50LmpzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCB7c2xpY2V9IGZyb20gXCIuL2FycmF5XCI7XG5pbXBvcnQgYmlzZWN0IGZyb20gXCIuL2Jpc2VjdFwiO1xuaW1wb3J0IGNvbnN0YW50IGZyb20gXCIuL2NvbnN0YW50XCI7XG5pbXBvcnQgZXh0ZW50IGZyb20gXCIuL2V4dGVudFwiO1xuaW1wb3J0IGlkZW50aXR5IGZyb20gXCIuL2lkZW50aXR5XCI7XG5pbXBvcnQgcmFuZ2UgZnJvbSBcIi4vcmFuZ2VcIjtcbmltcG9ydCB7dGlja1N0ZXB9IGZyb20gXCIuL3RpY2tzXCI7XG5pbXBvcnQgc3R1cmdlcyBmcm9tIFwiLi90aHJlc2hvbGQvc3R1cmdlc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbigpIHtcbiAgdmFyIHZhbHVlID0gaWRlbnRpdHksXG4gICAgICBkb21haW4gPSBleHRlbnQsXG4gICAgICB0aHJlc2hvbGQgPSBzdHVyZ2VzO1xuXG4gIGZ1bmN0aW9uIGhpc3RvZ3JhbShkYXRhKSB7XG4gICAgdmFyIGksXG4gICAgICAgIG4gPSBkYXRhLmxlbmd0aCxcbiAgICAgICAgeCxcbiAgICAgICAgdmFsdWVzID0gbmV3IEFycmF5KG4pO1xuXG4gICAgZm9yIChpID0gMDsgaSA8IG47ICsraSkge1xuICAgICAgdmFsdWVzW2ldID0gdmFsdWUoZGF0YVtpXSwgaSwgZGF0YSk7XG4gICAgfVxuXG4gICAgdmFyIHh6ID0gZG9tYWluKHZhbHVlcyksXG4gICAgICAgIHgwID0geHpbMF0sXG4gICAgICAgIHgxID0geHpbMV0sXG4gICAgICAgIHR6ID0gdGhyZXNob2xkKHZhbHVlcywgeDAsIHgxKTtcblxuICAgIC8vIENvbnZlcnQgbnVtYmVyIG9mIHRocmVzaG9sZHMgaW50byB1bmlmb3JtIHRocmVzaG9sZHMuXG4gICAgaWYgKCFBcnJheS5pc0FycmF5KHR6KSkge1xuICAgICAgdHogPSB0aWNrU3RlcCh4MCwgeDEsIHR6KTtcbiAgICAgIHR6ID0gcmFuZ2UoTWF0aC5jZWlsKHgwIC8gdHopICogdHosIE1hdGguZmxvb3IoeDEgLyB0eikgKiB0eiwgdHopOyAvLyBleGNsdXNpdmVcbiAgICB9XG5cbiAgICAvLyBSZW1vdmUgYW55IHRocmVzaG9sZHMgb3V0c2lkZSB0aGUgZG9tYWluLlxuICAgIHZhciBtID0gdHoubGVuZ3RoO1xuICAgIHdoaWxlICh0elswXSA8PSB4MCkgdHouc2hpZnQoKSwgLS1tO1xuICAgIHdoaWxlICh0elttIC0gMV0gPiB4MSkgdHoucG9wKCksIC0tbTtcblxuICAgIHZhciBiaW5zID0gbmV3IEFycmF5KG0gKyAxKSxcbiAgICAgICAgYmluO1xuXG4gICAgLy8gSW5pdGlhbGl6ZSBiaW5zLlxuICAgIGZvciAoaSA9IDA7IGkgPD0gbTsgKytpKSB7XG4gICAgICBiaW4gPSBiaW5zW2ldID0gW107XG4gICAgICBiaW4ueDAgPSBpID4gMCA/IHR6W2kgLSAxXSA6IHgwO1xuICAgICAgYmluLngxID0gaSA8IG0gPyB0eltpXSA6IHgxO1xuICAgIH1cblxuICAgIC8vIEFzc2lnbiBkYXRhIHRvIGJpbnMgYnkgdmFsdWUsIGlnbm9yaW5nIGFueSBvdXRzaWRlIHRoZSBkb21haW4uXG4gICAgZm9yIChpID0gMDsgaSA8IG47ICsraSkge1xuICAgICAgeCA9IHZhbHVlc1tpXTtcbiAgICAgIGlmICh4MCA8PSB4ICYmIHggPD0geDEpIHtcbiAgICAgICAgYmluc1tiaXNlY3QodHosIHgsIDAsIG0pXS5wdXNoKGRhdGFbaV0pO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBiaW5zO1xuICB9XG5cbiAgaGlzdG9ncmFtLnZhbHVlID0gZnVuY3Rpb24oXykge1xuICAgIHJldHVybiBhcmd1bWVudHMubGVuZ3RoID8gKHZhbHVlID0gdHlwZW9mIF8gPT09IFwiZnVuY3Rpb25cIiA/IF8gOiBjb25zdGFudChfKSwgaGlzdG9ncmFtKSA6IHZhbHVlO1xuICB9O1xuXG4gIGhpc3RvZ3JhbS5kb21haW4gPSBmdW5jdGlvbihfKSB7XG4gICAgcmV0dXJuIGFyZ3VtZW50cy5sZW5ndGggPyAoZG9tYWluID0gdHlwZW9mIF8gPT09IFwiZnVuY3Rpb25cIiA/IF8gOiBjb25zdGFudChbX1swXSwgX1sxXV0pLCBoaXN0b2dyYW0pIDogZG9tYWluO1xuICB9O1xuXG4gIGhpc3RvZ3JhbS50aHJlc2hvbGRzID0gZnVuY3Rpb24oXykge1xuICAgIHJldHVybiBhcmd1bWVudHMubGVuZ3RoID8gKHRocmVzaG9sZCA9IHR5cGVvZiBfID09PSBcImZ1bmN0aW9uXCIgPyBfIDogQXJyYXkuaXNBcnJheShfKSA/IGNvbnN0YW50KHNsaWNlLmNhbGwoXykpIDogY29uc3RhbnQoXyksIGhpc3RvZ3JhbSkgOiB0aHJlc2hvbGQ7XG4gIH07XG5cbiAgcmV0dXJuIGhpc3RvZ3JhbTtcbn1cblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2QzLWFycmF5L3NyYy9oaXN0b2dyYW0uanNcbi8vIG1vZHVsZSBpZCA9IC4vbm9kZV9tb2R1bGVzL2QzLWFycmF5L3NyYy9oaXN0b2dyYW0uanNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oeCkge1xuICByZXR1cm4geDtcbn1cblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2QzLWFycmF5L3NyYy9pZGVudGl0eS5qc1xuLy8gbW9kdWxlIGlkID0gLi9ub2RlX21vZHVsZXMvZDMtYXJyYXkvc3JjL2lkZW50aXR5LmpzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKHZhbHVlcywgdmFsdWVvZikge1xuICB2YXIgbiA9IHZhbHVlcy5sZW5ndGgsXG4gICAgICBpID0gLTEsXG4gICAgICB2YWx1ZSxcbiAgICAgIG1heDtcblxuICBpZiAodmFsdWVvZiA9PSBudWxsKSB7XG4gICAgd2hpbGUgKCsraSA8IG4pIHsgLy8gRmluZCB0aGUgZmlyc3QgY29tcGFyYWJsZSB2YWx1ZS5cbiAgICAgIGlmICgodmFsdWUgPSB2YWx1ZXNbaV0pICE9IG51bGwgJiYgdmFsdWUgPj0gdmFsdWUpIHtcbiAgICAgICAgbWF4ID0gdmFsdWU7XG4gICAgICAgIHdoaWxlICgrK2kgPCBuKSB7IC8vIENvbXBhcmUgdGhlIHJlbWFpbmluZyB2YWx1ZXMuXG4gICAgICAgICAgaWYgKCh2YWx1ZSA9IHZhbHVlc1tpXSkgIT0gbnVsbCAmJiB2YWx1ZSA+IG1heCkge1xuICAgICAgICAgICAgbWF4ID0gdmFsdWU7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgZWxzZSB7XG4gICAgd2hpbGUgKCsraSA8IG4pIHsgLy8gRmluZCB0aGUgZmlyc3QgY29tcGFyYWJsZSB2YWx1ZS5cbiAgICAgIGlmICgodmFsdWUgPSB2YWx1ZW9mKHZhbHVlc1tpXSwgaSwgdmFsdWVzKSkgIT0gbnVsbCAmJiB2YWx1ZSA+PSB2YWx1ZSkge1xuICAgICAgICBtYXggPSB2YWx1ZTtcbiAgICAgICAgd2hpbGUgKCsraSA8IG4pIHsgLy8gQ29tcGFyZSB0aGUgcmVtYWluaW5nIHZhbHVlcy5cbiAgICAgICAgICBpZiAoKHZhbHVlID0gdmFsdWVvZih2YWx1ZXNbaV0sIGksIHZhbHVlcykpICE9IG51bGwgJiYgdmFsdWUgPiBtYXgpIHtcbiAgICAgICAgICAgIG1heCA9IHZhbHVlO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBtYXg7XG59XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9kMy1hcnJheS9zcmMvbWF4LmpzXG4vLyBtb2R1bGUgaWQgPSAuL25vZGVfbW9kdWxlcy9kMy1hcnJheS9zcmMvbWF4LmpzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCBudW1iZXIgZnJvbSBcIi4vbnVtYmVyXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKHZhbHVlcywgdmFsdWVvZikge1xuICB2YXIgbiA9IHZhbHVlcy5sZW5ndGgsXG4gICAgICBtID0gbixcbiAgICAgIGkgPSAtMSxcbiAgICAgIHZhbHVlLFxuICAgICAgc3VtID0gMDtcblxuICBpZiAodmFsdWVvZiA9PSBudWxsKSB7XG4gICAgd2hpbGUgKCsraSA8IG4pIHtcbiAgICAgIGlmICghaXNOYU4odmFsdWUgPSBudW1iZXIodmFsdWVzW2ldKSkpIHN1bSArPSB2YWx1ZTtcbiAgICAgIGVsc2UgLS1tO1xuICAgIH1cbiAgfVxuXG4gIGVsc2Uge1xuICAgIHdoaWxlICgrK2kgPCBuKSB7XG4gICAgICBpZiAoIWlzTmFOKHZhbHVlID0gbnVtYmVyKHZhbHVlb2YodmFsdWVzW2ldLCBpLCB2YWx1ZXMpKSkpIHN1bSArPSB2YWx1ZTtcbiAgICAgIGVsc2UgLS1tO1xuICAgIH1cbiAgfVxuXG4gIGlmIChtKSByZXR1cm4gc3VtIC8gbTtcbn1cblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2QzLWFycmF5L3NyYy9tZWFuLmpzXG4vLyBtb2R1bGUgaWQgPSAuL25vZGVfbW9kdWxlcy9kMy1hcnJheS9zcmMvbWVhbi5qc1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgYXNjZW5kaW5nIGZyb20gXCIuL2FzY2VuZGluZ1wiO1xuaW1wb3J0IG51bWJlciBmcm9tIFwiLi9udW1iZXJcIjtcbmltcG9ydCBxdWFudGlsZSBmcm9tIFwiLi9xdWFudGlsZVwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbih2YWx1ZXMsIHZhbHVlb2YpIHtcbiAgdmFyIG4gPSB2YWx1ZXMubGVuZ3RoLFxuICAgICAgaSA9IC0xLFxuICAgICAgdmFsdWUsXG4gICAgICBudW1iZXJzID0gW107XG5cbiAgaWYgKHZhbHVlb2YgPT0gbnVsbCkge1xuICAgIHdoaWxlICgrK2kgPCBuKSB7XG4gICAgICBpZiAoIWlzTmFOKHZhbHVlID0gbnVtYmVyKHZhbHVlc1tpXSkpKSB7XG4gICAgICAgIG51bWJlcnMucHVzaCh2YWx1ZSk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgZWxzZSB7XG4gICAgd2hpbGUgKCsraSA8IG4pIHtcbiAgICAgIGlmICghaXNOYU4odmFsdWUgPSBudW1iZXIodmFsdWVvZih2YWx1ZXNbaV0sIGksIHZhbHVlcykpKSkge1xuICAgICAgICBudW1iZXJzLnB1c2godmFsdWUpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBxdWFudGlsZShudW1iZXJzLnNvcnQoYXNjZW5kaW5nKSwgMC41KTtcbn1cblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2QzLWFycmF5L3NyYy9tZWRpYW4uanNcbi8vIG1vZHVsZSBpZCA9IC4vbm9kZV9tb2R1bGVzL2QzLWFycmF5L3NyYy9tZWRpYW4uanNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oYXJyYXlzKSB7XG4gIHZhciBuID0gYXJyYXlzLmxlbmd0aCxcbiAgICAgIG0sXG4gICAgICBpID0gLTEsXG4gICAgICBqID0gMCxcbiAgICAgIG1lcmdlZCxcbiAgICAgIGFycmF5O1xuXG4gIHdoaWxlICgrK2kgPCBuKSBqICs9IGFycmF5c1tpXS5sZW5ndGg7XG4gIG1lcmdlZCA9IG5ldyBBcnJheShqKTtcblxuICB3aGlsZSAoLS1uID49IDApIHtcbiAgICBhcnJheSA9IGFycmF5c1tuXTtcbiAgICBtID0gYXJyYXkubGVuZ3RoO1xuICAgIHdoaWxlICgtLW0gPj0gMCkge1xuICAgICAgbWVyZ2VkWy0tal0gPSBhcnJheVttXTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gbWVyZ2VkO1xufVxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvZDMtYXJyYXkvc3JjL21lcmdlLmpzXG4vLyBtb2R1bGUgaWQgPSAuL25vZGVfbW9kdWxlcy9kMy1hcnJheS9zcmMvbWVyZ2UuanNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24odmFsdWVzLCB2YWx1ZW9mKSB7XG4gIHZhciBuID0gdmFsdWVzLmxlbmd0aCxcbiAgICAgIGkgPSAtMSxcbiAgICAgIHZhbHVlLFxuICAgICAgbWluO1xuXG4gIGlmICh2YWx1ZW9mID09IG51bGwpIHtcbiAgICB3aGlsZSAoKytpIDwgbikgeyAvLyBGaW5kIHRoZSBmaXJzdCBjb21wYXJhYmxlIHZhbHVlLlxuICAgICAgaWYgKCh2YWx1ZSA9IHZhbHVlc1tpXSkgIT0gbnVsbCAmJiB2YWx1ZSA+PSB2YWx1ZSkge1xuICAgICAgICBtaW4gPSB2YWx1ZTtcbiAgICAgICAgd2hpbGUgKCsraSA8IG4pIHsgLy8gQ29tcGFyZSB0aGUgcmVtYWluaW5nIHZhbHVlcy5cbiAgICAgICAgICBpZiAoKHZhbHVlID0gdmFsdWVzW2ldKSAhPSBudWxsICYmIG1pbiA+IHZhbHVlKSB7XG4gICAgICAgICAgICBtaW4gPSB2YWx1ZTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBlbHNlIHtcbiAgICB3aGlsZSAoKytpIDwgbikgeyAvLyBGaW5kIHRoZSBmaXJzdCBjb21wYXJhYmxlIHZhbHVlLlxuICAgICAgaWYgKCh2YWx1ZSA9IHZhbHVlb2YodmFsdWVzW2ldLCBpLCB2YWx1ZXMpKSAhPSBudWxsICYmIHZhbHVlID49IHZhbHVlKSB7XG4gICAgICAgIG1pbiA9IHZhbHVlO1xuICAgICAgICB3aGlsZSAoKytpIDwgbikgeyAvLyBDb21wYXJlIHRoZSByZW1haW5pbmcgdmFsdWVzLlxuICAgICAgICAgIGlmICgodmFsdWUgPSB2YWx1ZW9mKHZhbHVlc1tpXSwgaSwgdmFsdWVzKSkgIT0gbnVsbCAmJiBtaW4gPiB2YWx1ZSkge1xuICAgICAgICAgICAgbWluID0gdmFsdWU7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIG1pbjtcbn1cblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2QzLWFycmF5L3NyYy9taW4uanNcbi8vIG1vZHVsZSBpZCA9IC4vbm9kZV9tb2R1bGVzL2QzLWFycmF5L3NyYy9taW4uanNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oeCkge1xuICByZXR1cm4geCA9PT0gbnVsbCA/IE5hTiA6ICt4O1xufVxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvZDMtYXJyYXkvc3JjL251bWJlci5qc1xuLy8gbW9kdWxlIGlkID0gLi9ub2RlX21vZHVsZXMvZDMtYXJyYXkvc3JjL251bWJlci5qc1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbihhcnJheSwgZikge1xuICBpZiAoZiA9PSBudWxsKSBmID0gcGFpcjtcbiAgdmFyIGkgPSAwLCBuID0gYXJyYXkubGVuZ3RoIC0gMSwgcCA9IGFycmF5WzBdLCBwYWlycyA9IG5ldyBBcnJheShuIDwgMCA/IDAgOiBuKTtcbiAgd2hpbGUgKGkgPCBuKSBwYWlyc1tpXSA9IGYocCwgcCA9IGFycmF5WysraV0pO1xuICByZXR1cm4gcGFpcnM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwYWlyKGEsIGIpIHtcbiAgcmV0dXJuIFthLCBiXTtcbn1cblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2QzLWFycmF5L3NyYy9wYWlycy5qc1xuLy8gbW9kdWxlIGlkID0gLi9ub2RlX21vZHVsZXMvZDMtYXJyYXkvc3JjL3BhaXJzLmpzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKGFycmF5LCBpbmRleGVzKSB7XG4gIHZhciBpID0gaW5kZXhlcy5sZW5ndGgsIHBlcm11dGVzID0gbmV3IEFycmF5KGkpO1xuICB3aGlsZSAoaS0tKSBwZXJtdXRlc1tpXSA9IGFycmF5W2luZGV4ZXNbaV1dO1xuICByZXR1cm4gcGVybXV0ZXM7XG59XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9kMy1hcnJheS9zcmMvcGVybXV0ZS5qc1xuLy8gbW9kdWxlIGlkID0gLi9ub2RlX21vZHVsZXMvZDMtYXJyYXkvc3JjL3Blcm11dGUuanNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IG51bWJlciBmcm9tIFwiLi9udW1iZXJcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24odmFsdWVzLCBwLCB2YWx1ZW9mKSB7XG4gIGlmICh2YWx1ZW9mID09IG51bGwpIHZhbHVlb2YgPSBudW1iZXI7XG4gIGlmICghKG4gPSB2YWx1ZXMubGVuZ3RoKSkgcmV0dXJuO1xuICBpZiAoKHAgPSArcCkgPD0gMCB8fCBuIDwgMikgcmV0dXJuICt2YWx1ZW9mKHZhbHVlc1swXSwgMCwgdmFsdWVzKTtcbiAgaWYgKHAgPj0gMSkgcmV0dXJuICt2YWx1ZW9mKHZhbHVlc1tuIC0gMV0sIG4gLSAxLCB2YWx1ZXMpO1xuICB2YXIgbixcbiAgICAgIGkgPSAobiAtIDEpICogcCxcbiAgICAgIGkwID0gTWF0aC5mbG9vcihpKSxcbiAgICAgIHZhbHVlMCA9ICt2YWx1ZW9mKHZhbHVlc1tpMF0sIGkwLCB2YWx1ZXMpLFxuICAgICAgdmFsdWUxID0gK3ZhbHVlb2YodmFsdWVzW2kwICsgMV0sIGkwICsgMSwgdmFsdWVzKTtcbiAgcmV0dXJuIHZhbHVlMCArICh2YWx1ZTEgLSB2YWx1ZTApICogKGkgLSBpMCk7XG59XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9kMy1hcnJheS9zcmMvcXVhbnRpbGUuanNcbi8vIG1vZHVsZSBpZCA9IC4vbm9kZV9tb2R1bGVzL2QzLWFycmF5L3NyYy9xdWFudGlsZS5qc1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbihzdGFydCwgc3RvcCwgc3RlcCkge1xuICBzdGFydCA9ICtzdGFydCwgc3RvcCA9ICtzdG9wLCBzdGVwID0gKG4gPSBhcmd1bWVudHMubGVuZ3RoKSA8IDIgPyAoc3RvcCA9IHN0YXJ0LCBzdGFydCA9IDAsIDEpIDogbiA8IDMgPyAxIDogK3N0ZXA7XG5cbiAgdmFyIGkgPSAtMSxcbiAgICAgIG4gPSBNYXRoLm1heCgwLCBNYXRoLmNlaWwoKHN0b3AgLSBzdGFydCkgLyBzdGVwKSkgfCAwLFxuICAgICAgcmFuZ2UgPSBuZXcgQXJyYXkobik7XG5cbiAgd2hpbGUgKCsraSA8IG4pIHtcbiAgICByYW5nZVtpXSA9IHN0YXJ0ICsgaSAqIHN0ZXA7XG4gIH1cblxuICByZXR1cm4gcmFuZ2U7XG59XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9kMy1hcnJheS9zcmMvcmFuZ2UuanNcbi8vIG1vZHVsZSBpZCA9IC4vbm9kZV9tb2R1bGVzL2QzLWFycmF5L3NyYy9yYW5nZS5qc1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgYXNjZW5kaW5nIGZyb20gXCIuL2FzY2VuZGluZ1wiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbih2YWx1ZXMsIGNvbXBhcmUpIHtcbiAgaWYgKCEobiA9IHZhbHVlcy5sZW5ndGgpKSByZXR1cm47XG4gIHZhciBuLFxuICAgICAgaSA9IDAsXG4gICAgICBqID0gMCxcbiAgICAgIHhpLFxuICAgICAgeGogPSB2YWx1ZXNbal07XG5cbiAgaWYgKGNvbXBhcmUgPT0gbnVsbCkgY29tcGFyZSA9IGFzY2VuZGluZztcblxuICB3aGlsZSAoKytpIDwgbikge1xuICAgIGlmIChjb21wYXJlKHhpID0gdmFsdWVzW2ldLCB4aikgPCAwIHx8IGNvbXBhcmUoeGosIHhqKSAhPT0gMCkge1xuICAgICAgeGogPSB4aSwgaiA9IGk7XG4gICAgfVxuICB9XG5cbiAgaWYgKGNvbXBhcmUoeGosIHhqKSA9PT0gMCkgcmV0dXJuIGo7XG59XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9kMy1hcnJheS9zcmMvc2Nhbi5qc1xuLy8gbW9kdWxlIGlkID0gLi9ub2RlX21vZHVsZXMvZDMtYXJyYXkvc3JjL3NjYW4uanNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oYXJyYXksIGkwLCBpMSkge1xuICB2YXIgbSA9IChpMSA9PSBudWxsID8gYXJyYXkubGVuZ3RoIDogaTEpIC0gKGkwID0gaTAgPT0gbnVsbCA/IDAgOiAraTApLFxuICAgICAgdCxcbiAgICAgIGk7XG5cbiAgd2hpbGUgKG0pIHtcbiAgICBpID0gTWF0aC5yYW5kb20oKSAqIG0tLSB8IDA7XG4gICAgdCA9IGFycmF5W20gKyBpMF07XG4gICAgYXJyYXlbbSArIGkwXSA9IGFycmF5W2kgKyBpMF07XG4gICAgYXJyYXlbaSArIGkwXSA9IHQ7XG4gIH1cblxuICByZXR1cm4gYXJyYXk7XG59XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9kMy1hcnJheS9zcmMvc2h1ZmZsZS5qc1xuLy8gbW9kdWxlIGlkID0gLi9ub2RlX21vZHVsZXMvZDMtYXJyYXkvc3JjL3NodWZmbGUuanNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24odmFsdWVzLCB2YWx1ZW9mKSB7XG4gIHZhciBuID0gdmFsdWVzLmxlbmd0aCxcbiAgICAgIGkgPSAtMSxcbiAgICAgIHZhbHVlLFxuICAgICAgc3VtID0gMDtcblxuICBpZiAodmFsdWVvZiA9PSBudWxsKSB7XG4gICAgd2hpbGUgKCsraSA8IG4pIHtcbiAgICAgIGlmICh2YWx1ZSA9ICt2YWx1ZXNbaV0pIHN1bSArPSB2YWx1ZTsgLy8gTm90ZTogemVybyBhbmQgbnVsbCBhcmUgZXF1aXZhbGVudC5cbiAgICB9XG4gIH1cblxuICBlbHNlIHtcbiAgICB3aGlsZSAoKytpIDwgbikge1xuICAgICAgaWYgKHZhbHVlID0gK3ZhbHVlb2YodmFsdWVzW2ldLCBpLCB2YWx1ZXMpKSBzdW0gKz0gdmFsdWU7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHN1bTtcbn1cblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2QzLWFycmF5L3NyYy9zdW0uanNcbi8vIG1vZHVsZSBpZCA9IC4vbm9kZV9tb2R1bGVzL2QzLWFycmF5L3NyYy9zdW0uanNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IHttYXB9IGZyb20gXCIuLi9hcnJheVwiO1xuaW1wb3J0IGFzY2VuZGluZyBmcm9tIFwiLi4vYXNjZW5kaW5nXCI7XG5pbXBvcnQgbnVtYmVyIGZyb20gXCIuLi9udW1iZXJcIjtcbmltcG9ydCBxdWFudGlsZSBmcm9tIFwiLi4vcXVhbnRpbGVcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24odmFsdWVzLCBtaW4sIG1heCkge1xuICB2YWx1ZXMgPSBtYXAuY2FsbCh2YWx1ZXMsIG51bWJlcikuc29ydChhc2NlbmRpbmcpO1xuICByZXR1cm4gTWF0aC5jZWlsKChtYXggLSBtaW4pIC8gKDIgKiAocXVhbnRpbGUodmFsdWVzLCAwLjc1KSAtIHF1YW50aWxlKHZhbHVlcywgMC4yNSkpICogTWF0aC5wb3codmFsdWVzLmxlbmd0aCwgLTEgLyAzKSkpO1xufVxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvZDMtYXJyYXkvc3JjL3RocmVzaG9sZC9mcmVlZG1hbkRpYWNvbmlzLmpzXG4vLyBtb2R1bGUgaWQgPSAuL25vZGVfbW9kdWxlcy9kMy1hcnJheS9zcmMvdGhyZXNob2xkL2ZyZWVkbWFuRGlhY29uaXMuanNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IGRldmlhdGlvbiBmcm9tIFwiLi4vZGV2aWF0aW9uXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKHZhbHVlcywgbWluLCBtYXgpIHtcbiAgcmV0dXJuIE1hdGguY2VpbCgobWF4IC0gbWluKSAvICgzLjUgKiBkZXZpYXRpb24odmFsdWVzKSAqIE1hdGgucG93KHZhbHVlcy5sZW5ndGgsIC0xIC8gMykpKTtcbn1cblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2QzLWFycmF5L3NyYy90aHJlc2hvbGQvc2NvdHQuanNcbi8vIG1vZHVsZSBpZCA9IC4vbm9kZV9tb2R1bGVzL2QzLWFycmF5L3NyYy90aHJlc2hvbGQvc2NvdHQuanNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24odmFsdWVzKSB7XG4gIHJldHVybiBNYXRoLmNlaWwoTWF0aC5sb2codmFsdWVzLmxlbmd0aCkgLyBNYXRoLkxOMikgKyAxO1xufVxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvZDMtYXJyYXkvc3JjL3RocmVzaG9sZC9zdHVyZ2VzLmpzXG4vLyBtb2R1bGUgaWQgPSAuL25vZGVfbW9kdWxlcy9kMy1hcnJheS9zcmMvdGhyZXNob2xkL3N0dXJnZXMuanNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIGUxMCA9IE1hdGguc3FydCg1MCksXG4gICAgZTUgPSBNYXRoLnNxcnQoMTApLFxuICAgIGUyID0gTWF0aC5zcXJ0KDIpO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbihzdGFydCwgc3RvcCwgY291bnQpIHtcbiAgdmFyIHJldmVyc2UgPSBzdG9wIDwgc3RhcnQsXG4gICAgICBpID0gLTEsXG4gICAgICBuLFxuICAgICAgdGlja3MsXG4gICAgICBzdGVwO1xuXG4gIGlmIChyZXZlcnNlKSBuID0gc3RhcnQsIHN0YXJ0ID0gc3RvcCwgc3RvcCA9IG47XG5cbiAgaWYgKChzdGVwID0gdGlja0luY3JlbWVudChzdGFydCwgc3RvcCwgY291bnQpKSA9PT0gMCB8fCAhaXNGaW5pdGUoc3RlcCkpIHJldHVybiBbXTtcblxuICBpZiAoc3RlcCA+IDApIHtcbiAgICBzdGFydCA9IE1hdGguY2VpbChzdGFydCAvIHN0ZXApO1xuICAgIHN0b3AgPSBNYXRoLmZsb29yKHN0b3AgLyBzdGVwKTtcbiAgICB0aWNrcyA9IG5ldyBBcnJheShuID0gTWF0aC5jZWlsKHN0b3AgLSBzdGFydCArIDEpKTtcbiAgICB3aGlsZSAoKytpIDwgbikgdGlja3NbaV0gPSAoc3RhcnQgKyBpKSAqIHN0ZXA7XG4gIH0gZWxzZSB7XG4gICAgc3RhcnQgPSBNYXRoLmZsb29yKHN0YXJ0ICogc3RlcCk7XG4gICAgc3RvcCA9IE1hdGguY2VpbChzdG9wICogc3RlcCk7XG4gICAgdGlja3MgPSBuZXcgQXJyYXkobiA9IE1hdGguY2VpbChzdGFydCAtIHN0b3AgKyAxKSk7XG4gICAgd2hpbGUgKCsraSA8IG4pIHRpY2tzW2ldID0gKHN0YXJ0IC0gaSkgLyBzdGVwO1xuICB9XG5cbiAgaWYgKHJldmVyc2UpIHRpY2tzLnJldmVyc2UoKTtcblxuICByZXR1cm4gdGlja3M7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0aWNrSW5jcmVtZW50KHN0YXJ0LCBzdG9wLCBjb3VudCkge1xuICB2YXIgc3RlcCA9IChzdG9wIC0gc3RhcnQpIC8gTWF0aC5tYXgoMCwgY291bnQpLFxuICAgICAgcG93ZXIgPSBNYXRoLmZsb29yKE1hdGgubG9nKHN0ZXApIC8gTWF0aC5MTjEwKSxcbiAgICAgIGVycm9yID0gc3RlcCAvIE1hdGgucG93KDEwLCBwb3dlcik7XG4gIHJldHVybiBwb3dlciA+PSAwXG4gICAgICA/IChlcnJvciA+PSBlMTAgPyAxMCA6IGVycm9yID49IGU1ID8gNSA6IGVycm9yID49IGUyID8gMiA6IDEpICogTWF0aC5wb3coMTAsIHBvd2VyKVxuICAgICAgOiAtTWF0aC5wb3coMTAsIC1wb3dlcikgLyAoZXJyb3IgPj0gZTEwID8gMTAgOiBlcnJvciA+PSBlNSA/IDUgOiBlcnJvciA+PSBlMiA/IDIgOiAxKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHRpY2tTdGVwKHN0YXJ0LCBzdG9wLCBjb3VudCkge1xuICB2YXIgc3RlcDAgPSBNYXRoLmFicyhzdG9wIC0gc3RhcnQpIC8gTWF0aC5tYXgoMCwgY291bnQpLFxuICAgICAgc3RlcDEgPSBNYXRoLnBvdygxMCwgTWF0aC5mbG9vcihNYXRoLmxvZyhzdGVwMCkgLyBNYXRoLkxOMTApKSxcbiAgICAgIGVycm9yID0gc3RlcDAgLyBzdGVwMTtcbiAgaWYgKGVycm9yID49IGUxMCkgc3RlcDEgKj0gMTA7XG4gIGVsc2UgaWYgKGVycm9yID49IGU1KSBzdGVwMSAqPSA1O1xuICBlbHNlIGlmIChlcnJvciA+PSBlMikgc3RlcDEgKj0gMjtcbiAgcmV0dXJuIHN0b3AgPCBzdGFydCA/IC1zdGVwMSA6IHN0ZXAxO1xufVxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvZDMtYXJyYXkvc3JjL3RpY2tzLmpzXG4vLyBtb2R1bGUgaWQgPSAuL25vZGVfbW9kdWxlcy9kMy1hcnJheS9zcmMvdGlja3MuanNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IG1pbiBmcm9tIFwiLi9taW5cIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24obWF0cml4KSB7XG4gIGlmICghKG4gPSBtYXRyaXgubGVuZ3RoKSkgcmV0dXJuIFtdO1xuICBmb3IgKHZhciBpID0gLTEsIG0gPSBtaW4obWF0cml4LCBsZW5ndGgpLCB0cmFuc3Bvc2UgPSBuZXcgQXJyYXkobSk7ICsraSA8IG07KSB7XG4gICAgZm9yICh2YXIgaiA9IC0xLCBuLCByb3cgPSB0cmFuc3Bvc2VbaV0gPSBuZXcgQXJyYXkobik7ICsraiA8IG47KSB7XG4gICAgICByb3dbal0gPSBtYXRyaXhbal1baV07XG4gICAgfVxuICB9XG4gIHJldHVybiB0cmFuc3Bvc2U7XG59XG5cbmZ1bmN0aW9uIGxlbmd0aChkKSB7XG4gIHJldHVybiBkLmxlbmd0aDtcbn1cblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2QzLWFycmF5L3NyYy90cmFuc3Bvc2UuanNcbi8vIG1vZHVsZSBpZCA9IC4vbm9kZV9tb2R1bGVzL2QzLWFycmF5L3NyYy90cmFuc3Bvc2UuanNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IG51bWJlciBmcm9tIFwiLi9udW1iZXJcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24odmFsdWVzLCB2YWx1ZW9mKSB7XG4gIHZhciBuID0gdmFsdWVzLmxlbmd0aCxcbiAgICAgIG0gPSAwLFxuICAgICAgaSA9IC0xLFxuICAgICAgbWVhbiA9IDAsXG4gICAgICB2YWx1ZSxcbiAgICAgIGRlbHRhLFxuICAgICAgc3VtID0gMDtcblxuICBpZiAodmFsdWVvZiA9PSBudWxsKSB7XG4gICAgd2hpbGUgKCsraSA8IG4pIHtcbiAgICAgIGlmICghaXNOYU4odmFsdWUgPSBudW1iZXIodmFsdWVzW2ldKSkpIHtcbiAgICAgICAgZGVsdGEgPSB2YWx1ZSAtIG1lYW47XG4gICAgICAgIG1lYW4gKz0gZGVsdGEgLyArK207XG4gICAgICAgIHN1bSArPSBkZWx0YSAqICh2YWx1ZSAtIG1lYW4pO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGVsc2Uge1xuICAgIHdoaWxlICgrK2kgPCBuKSB7XG4gICAgICBpZiAoIWlzTmFOKHZhbHVlID0gbnVtYmVyKHZhbHVlb2YodmFsdWVzW2ldLCBpLCB2YWx1ZXMpKSkpIHtcbiAgICAgICAgZGVsdGEgPSB2YWx1ZSAtIG1lYW47XG4gICAgICAgIG1lYW4gKz0gZGVsdGEgLyArK207XG4gICAgICAgIHN1bSArPSBkZWx0YSAqICh2YWx1ZSAtIG1lYW4pO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGlmIChtID4gMSkgcmV0dXJuIHN1bSAvIChtIC0gMSk7XG59XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9kMy1hcnJheS9zcmMvdmFyaWFuY2UuanNcbi8vIG1vZHVsZSBpZCA9IC4vbm9kZV9tb2R1bGVzL2QzLWFycmF5L3NyYy92YXJpYW5jZS5qc1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgdHJhbnNwb3NlIGZyb20gXCIuL3RyYW5zcG9zZVwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbigpIHtcbiAgcmV0dXJuIHRyYW5zcG9zZShhcmd1bWVudHMpO1xufVxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvZDMtYXJyYXkvc3JjL3ppcC5qc1xuLy8gbW9kdWxlIGlkID0gLi9ub2RlX21vZHVsZXMvZDMtYXJyYXkvc3JjL3ppcC5qc1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJleHBvcnQge2RlZmF1bHQgYXMgZ2VvQWlyeSwgYWlyeVJhdyBhcyBnZW9BaXJ5UmF3fSBmcm9tIFwiLi9zcmMvYWlyeVwiO1xuZXhwb3J0IHtkZWZhdWx0IGFzIGdlb0FpdG9mZiwgYWl0b2ZmUmF3IGFzIGdlb0FpdG9mZlJhd30gZnJvbSBcIi4vc3JjL2FpdG9mZlwiO1xuZXhwb3J0IHtkZWZhdWx0IGFzIGdlb0FybWFkaWxsbywgYXJtYWRpbGxvUmF3IGFzIGdlb0FybWFkaWxsb1Jhd30gZnJvbSBcIi4vc3JjL2FybWFkaWxsb1wiO1xuZXhwb3J0IHtkZWZhdWx0IGFzIGdlb0F1Z3VzdCwgYXVndXN0UmF3IGFzIGdlb0F1Z3VzdFJhd30gZnJvbSBcIi4vc3JjL2F1Z3VzdFwiO1xuZXhwb3J0IHtkZWZhdWx0IGFzIGdlb0Jha2VyLCBiYWtlclJhdyBhcyBnZW9CYWtlclJhd30gZnJvbSBcIi4vc3JjL2Jha2VyXCI7XG5leHBvcnQge2RlZmF1bHQgYXMgZ2VvQmVyZ2hhdXMsIGJlcmdoYXVzUmF3IGFzIGdlb0JlcmdoYXVzUmF3fSBmcm9tIFwiLi9zcmMvYmVyZ2hhdXNcIjtcbmV4cG9ydCB7ZGVmYXVsdCBhcyBnZW9CZXJ0aW4xOTUzLCBiZXJ0aW4xOTUzUmF3IGFzIGdlb0JlcnRpbjE5NTNSYXd9IGZyb20gXCIuL3NyYy9iZXJ0aW5cIjtcbmV4cG9ydCB7ZGVmYXVsdCBhcyBnZW9Cb2dncywgYm9nZ3NSYXcgYXMgZ2VvQm9nZ3NSYXd9IGZyb20gXCIuL3NyYy9ib2dnc1wiO1xuZXhwb3J0IHtkZWZhdWx0IGFzIGdlb0Jvbm5lLCBib25uZVJhdyBhcyBnZW9Cb25uZVJhd30gZnJvbSBcIi4vc3JjL2Jvbm5lXCI7XG5leHBvcnQge2RlZmF1bHQgYXMgZ2VvQm90dG9tbGV5LCBib3R0b21sZXlSYXcgYXMgZ2VvQm90dG9tbGV5UmF3fSBmcm9tIFwiLi9zcmMvYm90dG9tbGV5XCI7XG5leHBvcnQge2RlZmF1bHQgYXMgZ2VvQnJvbWxleSwgYnJvbWxleVJhdyBhcyBnZW9Ccm9tbGV5UmF3fSBmcm9tIFwiLi9zcmMvYnJvbWxleVwiO1xuZXhwb3J0IHtkZWZhdWx0IGFzIGdlb0NoYW1iZXJsaW4sIGNoYW1iZXJsaW5SYXcgYXMgZ2VvQ2hhbWJlcmxpblJhdywgY2hhbWJlcmxpbkFmcmljYSBhcyBnZW9DaGFtYmVybGluQWZyaWNhfSBmcm9tIFwiLi9zcmMvY2hhbWJlcmxpblwiO1xuZXhwb3J0IHtkZWZhdWx0IGFzIGdlb0NvbGxpZ25vbiwgY29sbGlnbm9uUmF3IGFzIGdlb0NvbGxpZ25vblJhd30gZnJvbSBcIi4vc3JjL2NvbGxpZ25vblwiO1xuZXhwb3J0IHtkZWZhdWx0IGFzIGdlb0NyYWlnLCBjcmFpZ1JhdyBhcyBnZW9DcmFpZ1Jhd30gZnJvbSBcIi4vc3JjL2NyYWlnXCI7XG5leHBvcnQge2RlZmF1bHQgYXMgZ2VvQ3Jhc3RlciwgY3Jhc3RlclJhdyBhcyBnZW9DcmFzdGVyUmF3fSBmcm9tIFwiLi9zcmMvY3Jhc3RlclwiO1xuZXhwb3J0IHtkZWZhdWx0IGFzIGdlb0N5bGluZHJpY2FsRXF1YWxBcmVhLCBjeWxpbmRyaWNhbEVxdWFsQXJlYVJhdyBhcyBnZW9DeWxpbmRyaWNhbEVxdWFsQXJlYVJhd30gZnJvbSBcIi4vc3JjL2N5bGluZHJpY2FsRXF1YWxBcmVhXCI7XG5leHBvcnQge2RlZmF1bHQgYXMgZ2VvQ3lsaW5kcmljYWxTdGVyZW9ncmFwaGljLCBjeWxpbmRyaWNhbFN0ZXJlb2dyYXBoaWNSYXcgYXMgZ2VvQ3lsaW5kcmljYWxTdGVyZW9ncmFwaGljUmF3fSBmcm9tIFwiLi9zcmMvY3lsaW5kcmljYWxTdGVyZW9ncmFwaGljXCI7XG5leHBvcnQge2RlZmF1bHQgYXMgZ2VvRWNrZXJ0MSwgZWNrZXJ0MVJhdyBhcyBnZW9FY2tlcnQxUmF3fSBmcm9tIFwiLi9zcmMvZWNrZXJ0MS5qc1wiO1xuZXhwb3J0IHtkZWZhdWx0IGFzIGdlb0Vja2VydDIsIGVja2VydDJSYXcgYXMgZ2VvRWNrZXJ0MlJhd30gZnJvbSBcIi4vc3JjL2Vja2VydDIuanNcIjtcbmV4cG9ydCB7ZGVmYXVsdCBhcyBnZW9FY2tlcnQzLCBlY2tlcnQzUmF3IGFzIGdlb0Vja2VydDNSYXd9IGZyb20gXCIuL3NyYy9lY2tlcnQzLmpzXCI7XG5leHBvcnQge2RlZmF1bHQgYXMgZ2VvRWNrZXJ0NCwgZWNrZXJ0NFJhdyBhcyBnZW9FY2tlcnQ0UmF3fSBmcm9tIFwiLi9zcmMvZWNrZXJ0NC5qc1wiO1xuZXhwb3J0IHtkZWZhdWx0IGFzIGdlb0Vja2VydDUsIGVja2VydDVSYXcgYXMgZ2VvRWNrZXJ0NVJhd30gZnJvbSBcIi4vc3JjL2Vja2VydDUuanNcIjtcbmV4cG9ydCB7ZGVmYXVsdCBhcyBnZW9FY2tlcnQ2LCBlY2tlcnQ2UmF3IGFzIGdlb0Vja2VydDZSYXd9IGZyb20gXCIuL3NyYy9lY2tlcnQ2LmpzXCI7XG5leHBvcnQge2RlZmF1bHQgYXMgZ2VvRWlzZW5sb2hyLCBlaXNlbmxvaHJSYXcgYXMgZ2VvRWlzZW5sb2hyUmF3fSBmcm9tIFwiLi9zcmMvZWlzZW5sb2hyLmpzXCI7XG5leHBvcnQge2RlZmF1bHQgYXMgZ2VvRmFoZXksIGZhaGV5UmF3IGFzIGdlb0ZhaGV5UmF3fSBmcm9tIFwiLi9zcmMvZmFoZXkuanNcIjtcbmV4cG9ydCB7ZGVmYXVsdCBhcyBnZW9Gb3VjYXV0LCBmb3VjYXV0UmF3IGFzIGdlb0ZvdWNhdXRSYXd9IGZyb20gXCIuL3NyYy9mb3VjYXV0LmpzXCI7XG5leHBvcnQge2RlZmF1bHQgYXMgZ2VvR2lsYmVydH0gZnJvbSBcIi4vc3JjL2dpbGJlcnQuanNcIjtcbmV4cG9ydCB7ZGVmYXVsdCBhcyBnZW9HaW5nZXJ5LCBnaW5nZXJ5UmF3IGFzIGdlb0dpbmdlcnlSYXd9IGZyb20gXCIuL3NyYy9naW5nZXJ5LmpzXCI7XG5leHBvcnQge2RlZmF1bHQgYXMgZ2VvR2luemJ1cmc0LCBnaW56YnVyZzRSYXcgYXMgZ2VvR2luemJ1cmc0UmF3fSBmcm9tIFwiLi9zcmMvZ2luemJ1cmc0LmpzXCI7XG5leHBvcnQge2RlZmF1bHQgYXMgZ2VvR2luemJ1cmc1LCBnaW56YnVyZzVSYXcgYXMgZ2VvR2luemJ1cmc1UmF3fSBmcm9tIFwiLi9zcmMvZ2luemJ1cmc1LmpzXCI7XG5leHBvcnQge2RlZmF1bHQgYXMgZ2VvR2luemJ1cmc2LCBnaW56YnVyZzZSYXcgYXMgZ2VvR2luemJ1cmc2UmF3fSBmcm9tIFwiLi9zcmMvZ2luemJ1cmc2LmpzXCI7XG5leHBvcnQge2RlZmF1bHQgYXMgZ2VvR2luemJ1cmc4LCBnaW56YnVyZzhSYXcgYXMgZ2VvR2luemJ1cmc4UmF3fSBmcm9tIFwiLi9zcmMvZ2luemJ1cmc4LmpzXCI7XG5leHBvcnQge2RlZmF1bHQgYXMgZ2VvR2luemJ1cmc5LCBnaW56YnVyZzlSYXcgYXMgZ2VvR2luemJ1cmc5UmF3fSBmcm9tIFwiLi9zcmMvZ2luemJ1cmc5LmpzXCI7XG5leHBvcnQge2RlZmF1bHQgYXMgZ2VvR3JpbmdvcnRlbiwgZ3JpbmdvcnRlblJhdyBhcyBnZW9HcmluZ29ydGVuUmF3fSBmcm9tIFwiLi9zcmMvZ3JpbmdvcnRlbi5qc1wiO1xuZXhwb3J0IHtkZWZhdWx0IGFzIGdlb0d1eW91LCBndXlvdVJhdyBhcyBnZW9HdXlvdVJhd30gZnJvbSBcIi4vc3JjL2d1eW91LmpzXCI7XG5leHBvcnQge2RlZmF1bHQgYXMgZ2VvSGFtbWVyLCBoYW1tZXJSYXcgYXMgZ2VvSGFtbWVyUmF3fSBmcm9tIFwiLi9zcmMvaGFtbWVyLmpzXCI7XG5leHBvcnQge2RlZmF1bHQgYXMgZ2VvSGFtbWVyUmV0cm9hemltdXRoYWwsIGhhbW1lclJldHJvYXppbXV0aGFsUmF3IGFzIGdlb0hhbW1lclJldHJvYXppbXV0aGFsUmF3fSBmcm9tIFwiLi9zcmMvaGFtbWVyUmV0cm9hemltdXRoYWwuanNcIjtcbmV4cG9ydCB7ZGVmYXVsdCBhcyBnZW9IZWFscGl4LCBoZWFscGl4UmF3IGFzIGdlb0hlYWxwaXhSYXd9IGZyb20gXCIuL3NyYy9oZWFscGl4LmpzXCI7XG5leHBvcnQge2RlZmF1bHQgYXMgZ2VvSGlsbCwgaGlsbFJhdyBhcyBnZW9IaWxsUmF3fSBmcm9tIFwiLi9zcmMvaGlsbC5qc1wiO1xuZXhwb3J0IHtkZWZhdWx0IGFzIGdlb0hvbW9sb3NpbmUsIGhvbW9sb3NpbmVSYXcgYXMgZ2VvSG9tb2xvc2luZVJhd30gZnJvbSBcIi4vc3JjL2hvbW9sb3NpbmUuanNcIjtcbmV4cG9ydCB7ZGVmYXVsdCBhcyBnZW9JbnRlcnJ1cHR9IGZyb20gXCIuL3NyYy9pbnRlcnJ1cHRlZC9pbmRleFwiO1xuZXhwb3J0IHtkZWZhdWx0IGFzIGdlb0ludGVycnVwdGVkQm9nZ3N9IGZyb20gXCIuL3NyYy9pbnRlcnJ1cHRlZC9ib2dnc1wiO1xuZXhwb3J0IHtkZWZhdWx0IGFzIGdlb0ludGVycnVwdGVkSG9tb2xvc2luZX0gZnJvbSBcIi4vc3JjL2ludGVycnVwdGVkL2hvbW9sb3NpbmVcIjtcbmV4cG9ydCB7ZGVmYXVsdCBhcyBnZW9JbnRlcnJ1cHRlZE1vbGx3ZWlkZX0gZnJvbSBcIi4vc3JjL2ludGVycnVwdGVkL21vbGx3ZWlkZVwiO1xuZXhwb3J0IHtkZWZhdWx0IGFzIGdlb0ludGVycnVwdGVkTW9sbHdlaWRlSGVtaXNwaGVyZXN9IGZyb20gXCIuL3NyYy9pbnRlcnJ1cHRlZC9tb2xsd2VpZGVIZW1pc3BoZXJlc1wiO1xuZXhwb3J0IHtkZWZhdWx0IGFzIGdlb0ludGVycnVwdGVkU2ludU1vbGx3ZWlkZX0gZnJvbSBcIi4vc3JjL2ludGVycnVwdGVkL3NpbnVNb2xsd2VpZGVcIjtcbmV4cG9ydCB7ZGVmYXVsdCBhcyBnZW9JbnRlcnJ1cHRlZFNpbnVzb2lkYWx9IGZyb20gXCIuL3NyYy9pbnRlcnJ1cHRlZC9zaW51c29pZGFsXCI7XG5leHBvcnQge2RlZmF1bHQgYXMgZ2VvS2F2cmF5c2tpeTcsIGthdnJheXNraXk3UmF3IGFzIGdlb0thdnJheXNraXk3UmF3fSBmcm9tIFwiLi9zcmMva2F2cmF5c2tpeTcuanNcIjtcbmV4cG9ydCB7ZGVmYXVsdCBhcyBnZW9MYWdyYW5nZSwgbGFncmFuZ2VSYXcgYXMgZ2VvTGFncmFuZ2VSYXd9IGZyb20gXCIuL3NyYy9sYWdyYW5nZS5qc1wiO1xuZXhwb3J0IHtkZWZhdWx0IGFzIGdlb0xhcnJpdmVlLCBsYXJyaXZlZVJhdyBhcyBnZW9MYXJyaXZlZVJhd30gZnJvbSBcIi4vc3JjL2xhcnJpdmVlXCI7XG5leHBvcnQge2RlZmF1bHQgYXMgZ2VvTGFza293c2tpLCBsYXNrb3dza2lSYXcgYXMgZ2VvTGFza293c2tpUmF3fSBmcm9tIFwiLi9zcmMvbGFza293c2tpXCI7XG5leHBvcnQge2RlZmF1bHQgYXMgZ2VvTGl0dHJvdywgbGl0dHJvd1JhdyBhcyBnZW9MaXR0cm93UmF3fSBmcm9tIFwiLi9zcmMvbGl0dHJvdy5qc1wiO1xuZXhwb3J0IHtkZWZhdWx0IGFzIGdlb0xveGltdXRoYWwsIGxveGltdXRoYWxSYXcgYXMgZ2VvTG94aW11dGhhbFJhd30gZnJvbSBcIi4vc3JjL2xveGltdXRoYWwuanNcIjtcbmV4cG9ydCB7ZGVmYXVsdCBhcyBnZW9NaWxsZXIsIG1pbGxlclJhdyBhcyBnZW9NaWxsZXJSYXd9IGZyb20gXCIuL3NyYy9taWxsZXJcIjtcbmV4cG9ydCB7ZGVmYXVsdCBhcyBnZW9Nb2RpZmllZFN0ZXJlb2dyYXBoaWMsIG1vZGlmaWVkU3RlcmVvZ3JhcGhpY1JhdyBhcyBnZW9Nb2RpZmllZFN0ZXJlb2dyYXBoaWNSYXcsIG1vZGlmaWVkU3RlcmVvZ3JhcGhpY0FsYXNrYSBhcyBnZW9Nb2RpZmllZFN0ZXJlb2dyYXBoaWNBbGFza2EsIG1vZGlmaWVkU3RlcmVvZ3JhcGhpY0dzNDggYXMgZ2VvTW9kaWZpZWRTdGVyZW9ncmFwaGljR3M0OCwgbW9kaWZpZWRTdGVyZW9ncmFwaGljR3M1MCBhcyBnZW9Nb2RpZmllZFN0ZXJlb2dyYXBoaWNHczUwLCBtb2RpZmllZFN0ZXJlb2dyYXBoaWNNaWxsZXIgYXMgZ2VvTW9kaWZpZWRTdGVyZW9ncmFwaGljTWlsbGVyLCBtb2RpZmllZFN0ZXJlb2dyYXBoaWNMZWUgYXMgZ2VvTW9kaWZpZWRTdGVyZW9ncmFwaGljTGVlfSBmcm9tIFwiLi9zcmMvbW9kaWZpZWRTdGVyZW9ncmFwaGljXCI7XG5leHBvcnQge2RlZmF1bHQgYXMgZ2VvTW9sbHdlaWRlLCBtb2xsd2VpZGVSYXcgYXMgZ2VvTW9sbHdlaWRlUmF3fSBmcm9tIFwiLi9zcmMvbW9sbHdlaWRlXCI7XG5leHBvcnQge2RlZmF1bHQgYXMgZ2VvTXRGbGF0UG9sYXJQYXJhYm9saWMsIG10RmxhdFBvbGFyUGFyYWJvbGljUmF3IGFzIGdlb010RmxhdFBvbGFyUGFyYWJvbGljUmF3fSBmcm9tIFwiLi9zcmMvbXRGbGF0UG9sYXJQYXJhYm9saWNcIjtcbmV4cG9ydCB7ZGVmYXVsdCBhcyBnZW9NdEZsYXRQb2xhclF1YXJ0aWMsIG10RmxhdFBvbGFyUXVhcnRpY1JhdyBhcyBnZW9NdEZsYXRQb2xhclF1YXJ0aWNSYXd9IGZyb20gXCIuL3NyYy9tdEZsYXRQb2xhclF1YXJ0aWNcIjtcbmV4cG9ydCB7ZGVmYXVsdCBhcyBnZW9NdEZsYXRQb2xhclNpbnVzb2lkYWwsIG10RmxhdFBvbGFyU2ludXNvaWRhbFJhdyBhcyBnZW9NdEZsYXRQb2xhclNpbnVzb2lkYWxSYXd9IGZyb20gXCIuL3NyYy9tdEZsYXRQb2xhclNpbnVzb2lkYWxcIjtcbmV4cG9ydCB7Z2VvTmF0dXJhbEVhcnRoMSBhcyBnZW9OYXR1cmFsRWFydGgsIGdlb05hdHVyYWxFYXJ0aDFSYXcgYXMgZ2VvTmF0dXJhbEVhcnRoUmF3fSBmcm9tIFwiZDMtZ2VvXCI7IC8vIERFUFJFQ0FURUQgbW92ZWQgdG8gZDMtZ2VvXG5leHBvcnQge2RlZmF1bHQgYXMgZ2VvTmF0dXJhbEVhcnRoMiwgbmF0dXJhbEVhcnRoMlJhdyBhcyBnZW9OYXR1cmFsRWFydGgyUmF3fSBmcm9tIFwiLi9zcmMvbmF0dXJhbEVhcnRoMlwiO1xuZXhwb3J0IHtkZWZhdWx0IGFzIGdlb05lbGxIYW1tZXIsIG5lbGxIYW1tZXJSYXcgYXMgZ2VvTmVsbEhhbW1lclJhd30gZnJvbSBcIi4vc3JjL25lbGxIYW1tZXJcIjtcbmV4cG9ydCB7ZGVmYXVsdCBhcyBnZW9QYXR0ZXJzb24sIHBhdHRlcnNvblJhdyBhcyBnZW9QYXR0ZXJzb25SYXd9IGZyb20gXCIuL3NyYy9wYXR0ZXJzb25cIjtcbmV4cG9ydCB7ZGVmYXVsdCBhcyBnZW9Qb2x5Y29uaWMsIHBvbHljb25pY1JhdyBhcyBnZW9Qb2x5Y29uaWNSYXd9IGZyb20gXCIuL3NyYy9wb2x5Y29uaWNcIjtcbmV4cG9ydCB7ZGVmYXVsdCBhcyBnZW9Qb2x5aGVkcmFsfSBmcm9tIFwiLi9zcmMvcG9seWhlZHJhbC9pbmRleC5qc1wiO1xuZXhwb3J0IHtkZWZhdWx0IGFzIGdlb1BvbHloZWRyYWxCdXR0ZXJmbHl9IGZyb20gXCIuL3NyYy9wb2x5aGVkcmFsL2J1dHRlcmZseS5qc1wiO1xuZXhwb3J0IHtkZWZhdWx0IGFzIGdlb1BvbHloZWRyYWxDb2xsaWdub259IGZyb20gXCIuL3NyYy9wb2x5aGVkcmFsL2NvbGxpZ25vbi5qc1wiO1xuZXhwb3J0IHtkZWZhdWx0IGFzIGdlb1BvbHloZWRyYWxXYXRlcm1hbn0gZnJvbSBcIi4vc3JjL3BvbHloZWRyYWwvd2F0ZXJtYW4uanNcIjtcbmV4cG9ydCB7ZGVmYXVsdCBhcyBnZW9Qcm9qZWN0fSBmcm9tIFwiLi9zcmMvcHJvamVjdC9pbmRleFwiO1xuZXhwb3J0IHtkZWZhdWx0IGFzIGdlb0dyaW5nb3J0ZW5RdWluY3VuY2lhbH0gZnJvbSBcIi4vc3JjL3F1aW5jdW5jaWFsL2dyaW5nb3J0ZW4uanNcIjtcbmV4cG9ydCB7ZGVmYXVsdCBhcyBnZW9QZWlyY2VRdWluY3VuY2lhbH0gZnJvbSBcIi4vc3JjL3F1aW5jdW5jaWFsL3BlaXJjZS5qc1wiO1xuZXhwb3J0IHtkZWZhdWx0IGFzIGdlb1BpZXJjZVF1aW5jdW5jaWFsfSBmcm9tIFwiLi9zcmMvcXVpbmN1bmNpYWwvcGVpcmNlLmpzXCI7IC8vIERFUFJFQ0FURUQgbWlzc3BlbGxpbmdcbmV4cG9ydCB7ZGVmYXVsdCBhcyBnZW9RdWFudGl6ZX0gZnJvbSBcIi4vc3JjL3F1YW50aXplXCI7XG5leHBvcnQge2RlZmF1bHQgYXMgZ2VvUXVpbmN1bmNpYWx9IGZyb20gXCIuL3NyYy9xdWluY3VuY2lhbC9pbmRleC5qc1wiO1xuZXhwb3J0IHtkZWZhdWx0IGFzIGdlb1JlY3Rhbmd1bGFyUG9seWNvbmljLCByZWN0YW5ndWxhclBvbHljb25pY1JhdyBhcyBnZW9SZWN0YW5ndWxhclBvbHljb25pY1Jhd30gZnJvbSBcIi4vc3JjL3JlY3Rhbmd1bGFyUG9seWNvbmljXCI7XG5leHBvcnQge2RlZmF1bHQgYXMgZ2VvUm9iaW5zb24sIHJvYmluc29uUmF3IGFzIGdlb1JvYmluc29uUmF3fSBmcm9tIFwiLi9zcmMvcm9iaW5zb25cIjtcbmV4cG9ydCB7ZGVmYXVsdCBhcyBnZW9TYXRlbGxpdGUsIHNhdGVsbGl0ZVJhdyBhcyBnZW9TYXRlbGxpdGVSYXd9IGZyb20gXCIuL3NyYy9zYXRlbGxpdGVcIjtcbmV4cG9ydCB7ZGVmYXVsdCBhcyBnZW9TaW51TW9sbHdlaWRlLCBzaW51TW9sbHdlaWRlUmF3IGFzIGdlb1NpbnVNb2xsd2VpZGVSYXd9IGZyb20gXCIuL3NyYy9zaW51TW9sbHdlaWRlXCI7XG5leHBvcnQge2RlZmF1bHQgYXMgZ2VvU2ludXNvaWRhbCwgc2ludXNvaWRhbFJhdyBhcyBnZW9TaW51c29pZGFsUmF3fSBmcm9tIFwiLi9zcmMvc2ludXNvaWRhbFwiO1xuZXhwb3J0IHtkZWZhdWx0IGFzIGdlb1N0aXRjaH0gZnJvbSBcIi4vc3JjL3N0aXRjaFwiO1xuZXhwb3J0IHtkZWZhdWx0IGFzIGdlb1RpbWVzLCB0aW1lc1JhdyBhcyBnZW9UaW1lc1Jhd30gZnJvbSBcIi4vc3JjL3RpbWVzXCI7XG5leHBvcnQge2RlZmF1bHQgYXMgZ2VvVHdvUG9pbnRBemltdXRoYWwsIHR3b1BvaW50QXppbXV0aGFsUmF3IGFzIGdlb1R3b1BvaW50QXppbXV0aGFsUmF3LCB0d29Qb2ludEF6aW11dGhhbFVzYSBhcyBnZW9Ud29Qb2ludEF6aW11dGhhbFVzYX0gZnJvbSBcIi4vc3JjL3R3b1BvaW50QXppbXV0aGFsXCI7XG5leHBvcnQge2RlZmF1bHQgYXMgZ2VvVHdvUG9pbnRFcXVpZGlzdGFudCwgdHdvUG9pbnRFcXVpZGlzdGFudFJhdyBhcyBnZW9Ud29Qb2ludEVxdWlkaXN0YW50UmF3LCB0d29Qb2ludEVxdWlkaXN0YW50VXNhIGFzIGdlb1R3b1BvaW50RXF1aWRpc3RhbnRVc2F9IGZyb20gXCIuL3NyYy90d29Qb2ludEVxdWlkaXN0YW50XCI7XG5leHBvcnQge2RlZmF1bHQgYXMgZ2VvVmFuRGVyR3JpbnRlbiwgdmFuRGVyR3JpbnRlblJhdyBhcyBnZW9WYW5EZXJHcmludGVuUmF3fSBmcm9tIFwiLi9zcmMvdmFuRGVyR3JpbnRlblwiO1xuZXhwb3J0IHtkZWZhdWx0IGFzIGdlb1ZhbkRlckdyaW50ZW4yLCB2YW5EZXJHcmludGVuMlJhdyBhcyBnZW9WYW5EZXJHcmludGVuMlJhd30gZnJvbSBcIi4vc3JjL3ZhbkRlckdyaW50ZW4yXCI7XG5leHBvcnQge2RlZmF1bHQgYXMgZ2VvVmFuRGVyR3JpbnRlbjMsIHZhbkRlckdyaW50ZW4zUmF3IGFzIGdlb1ZhbkRlckdyaW50ZW4zUmF3fSBmcm9tIFwiLi9zcmMvdmFuRGVyR3JpbnRlbjNcIjtcbmV4cG9ydCB7ZGVmYXVsdCBhcyBnZW9WYW5EZXJHcmludGVuNCwgdmFuRGVyR3JpbnRlbjRSYXcgYXMgZ2VvVmFuRGVyR3JpbnRlbjRSYXd9IGZyb20gXCIuL3NyYy92YW5EZXJHcmludGVuNFwiO1xuZXhwb3J0IHtkZWZhdWx0IGFzIGdlb1dhZ25lcjQsIHdhZ25lcjRSYXcgYXMgZ2VvV2FnbmVyNFJhd30gZnJvbSBcIi4vc3JjL3dhZ25lcjQuanNcIjtcbmV4cG9ydCB7ZGVmYXVsdCBhcyBnZW9XYWduZXI2LCB3YWduZXI2UmF3IGFzIGdlb1dhZ25lcjZSYXd9IGZyb20gXCIuL3NyYy93YWduZXI2LmpzXCI7XG5leHBvcnQge2RlZmF1bHQgYXMgZ2VvV2FnbmVyNywgd2FnbmVyN1JhdyBhcyBnZW9XYWduZXI3UmF3fSBmcm9tIFwiLi9zcmMvd2FnbmVyNy5qc1wiO1xuZXhwb3J0IHtkZWZhdWx0IGFzIGdlb1dpZWNoZWwsIHdpZWNoZWxSYXcgYXMgZ2VvV2llY2hlbFJhd30gZnJvbSBcIi4vc3JjL3dpZWNoZWwuanNcIjtcbmV4cG9ydCB7ZGVmYXVsdCBhcyBnZW9XaW5rZWwzLCB3aW5rZWwzUmF3IGFzIGdlb1dpbmtlbDNSYXd9IGZyb20gXCIuL3NyYy93aW5rZWwzXCI7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9kMy1nZW8tcHJvamVjdGlvbi9pbmRleC5qc1xuLy8gbW9kdWxlIGlkID0gLi9ub2RlX21vZHVsZXMvZDMtZ2VvLXByb2plY3Rpb24vaW5kZXguanNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiZXhwb3J0IHtkZWZhdWx0IGFzIGdlb0FyZWF9IGZyb20gXCIuL3NyYy9hcmVhXCI7XG5leHBvcnQge2RlZmF1bHQgYXMgZ2VvQm91bmRzfSBmcm9tIFwiLi9zcmMvYm91bmRzXCI7XG5leHBvcnQge2RlZmF1bHQgYXMgZ2VvQ2VudHJvaWR9IGZyb20gXCIuL3NyYy9jZW50cm9pZFwiO1xuZXhwb3J0IHtkZWZhdWx0IGFzIGdlb0NpcmNsZX0gZnJvbSBcIi4vc3JjL2NpcmNsZVwiO1xuZXhwb3J0IHtkZWZhdWx0IGFzIGdlb0NsaXBBbnRpbWVyaWRpYW59IGZyb20gXCIuL3NyYy9jbGlwL2FudGltZXJpZGlhblwiO1xuZXhwb3J0IHtkZWZhdWx0IGFzIGdlb0NsaXBDaXJjbGV9IGZyb20gXCIuL3NyYy9jbGlwL2NpcmNsZVwiO1xuZXhwb3J0IHtkZWZhdWx0IGFzIGdlb0NsaXBFeHRlbnR9IGZyb20gXCIuL3NyYy9jbGlwL2V4dGVudFwiOyAvLyBERVBSRUNBVEVEISBVc2UgZDMuZ2VvSWRlbnRpdHkoKS5jbGlwRXh0ZW50KOKApikuXG5leHBvcnQge2RlZmF1bHQgYXMgZ2VvQ2xpcFJlY3RhbmdsZX0gZnJvbSBcIi4vc3JjL2NsaXAvcmVjdGFuZ2xlXCI7XG5leHBvcnQge2RlZmF1bHQgYXMgZ2VvQ29udGFpbnN9IGZyb20gXCIuL3NyYy9jb250YWluc1wiO1xuZXhwb3J0IHtkZWZhdWx0IGFzIGdlb0Rpc3RhbmNlfSBmcm9tIFwiLi9zcmMvZGlzdGFuY2VcIjtcbmV4cG9ydCB7ZGVmYXVsdCBhcyBnZW9HcmF0aWN1bGUsIGdyYXRpY3VsZTEwIGFzIGdlb0dyYXRpY3VsZTEwfSBmcm9tIFwiLi9zcmMvZ3JhdGljdWxlXCI7XG5leHBvcnQge2RlZmF1bHQgYXMgZ2VvSW50ZXJwb2xhdGV9IGZyb20gXCIuL3NyYy9pbnRlcnBvbGF0ZVwiO1xuZXhwb3J0IHtkZWZhdWx0IGFzIGdlb0xlbmd0aH0gZnJvbSBcIi4vc3JjL2xlbmd0aFwiO1xuZXhwb3J0IHtkZWZhdWx0IGFzIGdlb1BhdGh9IGZyb20gXCIuL3NyYy9wYXRoL2luZGV4XCI7XG5leHBvcnQge2RlZmF1bHQgYXMgZ2VvQWxiZXJzfSBmcm9tIFwiLi9zcmMvcHJvamVjdGlvbi9hbGJlcnNcIjtcbmV4cG9ydCB7ZGVmYXVsdCBhcyBnZW9BbGJlcnNVc2F9IGZyb20gXCIuL3NyYy9wcm9qZWN0aW9uL2FsYmVyc1VzYVwiO1xuZXhwb3J0IHtkZWZhdWx0IGFzIGdlb0F6aW11dGhhbEVxdWFsQXJlYSwgYXppbXV0aGFsRXF1YWxBcmVhUmF3IGFzIGdlb0F6aW11dGhhbEVxdWFsQXJlYVJhd30gZnJvbSBcIi4vc3JjL3Byb2plY3Rpb24vYXppbXV0aGFsRXF1YWxBcmVhXCI7XG5leHBvcnQge2RlZmF1bHQgYXMgZ2VvQXppbXV0aGFsRXF1aWRpc3RhbnQsIGF6aW11dGhhbEVxdWlkaXN0YW50UmF3IGFzIGdlb0F6aW11dGhhbEVxdWlkaXN0YW50UmF3fSBmcm9tIFwiLi9zcmMvcHJvamVjdGlvbi9hemltdXRoYWxFcXVpZGlzdGFudFwiO1xuZXhwb3J0IHtkZWZhdWx0IGFzIGdlb0NvbmljQ29uZm9ybWFsLCBjb25pY0NvbmZvcm1hbFJhdyBhcyBnZW9Db25pY0NvbmZvcm1hbFJhd30gZnJvbSBcIi4vc3JjL3Byb2plY3Rpb24vY29uaWNDb25mb3JtYWxcIjtcbmV4cG9ydCB7ZGVmYXVsdCBhcyBnZW9Db25pY0VxdWFsQXJlYSwgY29uaWNFcXVhbEFyZWFSYXcgYXMgZ2VvQ29uaWNFcXVhbEFyZWFSYXd9IGZyb20gXCIuL3NyYy9wcm9qZWN0aW9uL2NvbmljRXF1YWxBcmVhXCI7XG5leHBvcnQge2RlZmF1bHQgYXMgZ2VvQ29uaWNFcXVpZGlzdGFudCwgY29uaWNFcXVpZGlzdGFudFJhdyBhcyBnZW9Db25pY0VxdWlkaXN0YW50UmF3fSBmcm9tIFwiLi9zcmMvcHJvamVjdGlvbi9jb25pY0VxdWlkaXN0YW50XCI7XG5leHBvcnQge2RlZmF1bHQgYXMgZ2VvRXF1aXJlY3Rhbmd1bGFyLCBlcXVpcmVjdGFuZ3VsYXJSYXcgYXMgZ2VvRXF1aXJlY3Rhbmd1bGFyUmF3fSBmcm9tIFwiLi9zcmMvcHJvamVjdGlvbi9lcXVpcmVjdGFuZ3VsYXJcIjtcbmV4cG9ydCB7ZGVmYXVsdCBhcyBnZW9Hbm9tb25pYywgZ25vbW9uaWNSYXcgYXMgZ2VvR25vbW9uaWNSYXd9IGZyb20gXCIuL3NyYy9wcm9qZWN0aW9uL2dub21vbmljXCI7XG5leHBvcnQge2RlZmF1bHQgYXMgZ2VvSWRlbnRpdHl9IGZyb20gXCIuL3NyYy9wcm9qZWN0aW9uL2lkZW50aXR5XCI7XG5leHBvcnQge2RlZmF1bHQgYXMgZ2VvUHJvamVjdGlvbiwgcHJvamVjdGlvbk11dGF0b3IgYXMgZ2VvUHJvamVjdGlvbk11dGF0b3J9IGZyb20gXCIuL3NyYy9wcm9qZWN0aW9uL2luZGV4XCI7XG5leHBvcnQge2RlZmF1bHQgYXMgZ2VvTWVyY2F0b3IsIG1lcmNhdG9yUmF3IGFzIGdlb01lcmNhdG9yUmF3fSBmcm9tIFwiLi9zcmMvcHJvamVjdGlvbi9tZXJjYXRvclwiO1xuZXhwb3J0IHtkZWZhdWx0IGFzIGdlb05hdHVyYWxFYXJ0aDEsIG5hdHVyYWxFYXJ0aDFSYXcgYXMgZ2VvTmF0dXJhbEVhcnRoMVJhd30gZnJvbSBcIi4vc3JjL3Byb2plY3Rpb24vbmF0dXJhbEVhcnRoMVwiO1xuZXhwb3J0IHtkZWZhdWx0IGFzIGdlb09ydGhvZ3JhcGhpYywgb3J0aG9ncmFwaGljUmF3IGFzIGdlb09ydGhvZ3JhcGhpY1Jhd30gZnJvbSBcIi4vc3JjL3Byb2plY3Rpb24vb3J0aG9ncmFwaGljXCI7XG5leHBvcnQge2RlZmF1bHQgYXMgZ2VvU3RlcmVvZ3JhcGhpYywgc3RlcmVvZ3JhcGhpY1JhdyBhcyBnZW9TdGVyZW9ncmFwaGljUmF3fSBmcm9tIFwiLi9zcmMvcHJvamVjdGlvbi9zdGVyZW9ncmFwaGljXCI7XG5leHBvcnQge2RlZmF1bHQgYXMgZ2VvVHJhbnN2ZXJzZU1lcmNhdG9yLCB0cmFuc3ZlcnNlTWVyY2F0b3JSYXcgYXMgZ2VvVHJhbnN2ZXJzZU1lcmNhdG9yUmF3fSBmcm9tIFwiLi9zcmMvcHJvamVjdGlvbi90cmFuc3ZlcnNlTWVyY2F0b3JcIjtcbmV4cG9ydCB7ZGVmYXVsdCBhcyBnZW9Sb3RhdGlvbn0gZnJvbSBcIi4vc3JjL3JvdGF0aW9uXCI7XG5leHBvcnQge2RlZmF1bHQgYXMgZ2VvU3RyZWFtfSBmcm9tIFwiLi9zcmMvc3RyZWFtXCI7XG5leHBvcnQge2RlZmF1bHQgYXMgZ2VvVHJhbnNmb3JtfSBmcm9tIFwiLi9zcmMvdHJhbnNmb3JtXCI7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9kMy1nZW8tcHJvamVjdGlvbi9ub2RlX21vZHVsZXMvZDMtZ2VvL2luZGV4LmpzXG4vLyBtb2R1bGUgaWQgPSAuL25vZGVfbW9kdWxlcy9kMy1nZW8tcHJvamVjdGlvbi9ub2RlX21vZHVsZXMvZDMtZ2VvL2luZGV4LmpzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8vIEFkZHMgZmxvYXRpbmcgcG9pbnQgbnVtYmVycyB3aXRoIHR3aWNlIHRoZSBub3JtYWwgcHJlY2lzaW9uLlxuLy8gUmVmZXJlbmNlOiBKLiBSLiBTaGV3Y2h1aywgQWRhcHRpdmUgUHJlY2lzaW9uIEZsb2F0aW5nLVBvaW50IEFyaXRobWV0aWMgYW5kXG4vLyBGYXN0IFJvYnVzdCBHZW9tZXRyaWMgUHJlZGljYXRlcywgRGlzY3JldGUgJiBDb21wdXRhdGlvbmFsIEdlb21ldHJ5IDE4KDMpXG4vLyAzMDXigJMzNjMgKDE5OTcpLlxuLy8gQ29kZSBhZGFwdGVkIGZyb20gR2VvZ3JhcGhpY0xpYiBieSBDaGFybGVzIEYuIEYuIEthcm5leSxcbi8vIGh0dHA6Ly9nZW9ncmFwaGljbGliLnNvdXJjZWZvcmdlLm5ldC9cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oKSB7XG4gIHJldHVybiBuZXcgQWRkZXI7XG59XG5cbmZ1bmN0aW9uIEFkZGVyKCkge1xuICB0aGlzLnJlc2V0KCk7XG59XG5cbkFkZGVyLnByb3RvdHlwZSA9IHtcbiAgY29uc3RydWN0b3I6IEFkZGVyLFxuICByZXNldDogZnVuY3Rpb24oKSB7XG4gICAgdGhpcy5zID0gLy8gcm91bmRlZCB2YWx1ZVxuICAgIHRoaXMudCA9IDA7IC8vIGV4YWN0IGVycm9yXG4gIH0sXG4gIGFkZDogZnVuY3Rpb24oeSkge1xuICAgIGFkZCh0ZW1wLCB5LCB0aGlzLnQpO1xuICAgIGFkZCh0aGlzLCB0ZW1wLnMsIHRoaXMucyk7XG4gICAgaWYgKHRoaXMucykgdGhpcy50ICs9IHRlbXAudDtcbiAgICBlbHNlIHRoaXMucyA9IHRlbXAudDtcbiAgfSxcbiAgdmFsdWVPZjogZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMucztcbiAgfVxufTtcblxudmFyIHRlbXAgPSBuZXcgQWRkZXI7XG5cbmZ1bmN0aW9uIGFkZChhZGRlciwgYSwgYikge1xuICB2YXIgeCA9IGFkZGVyLnMgPSBhICsgYixcbiAgICAgIGJ2ID0geCAtIGEsXG4gICAgICBhdiA9IHggLSBidjtcbiAgYWRkZXIudCA9IChhIC0gYXYpICsgKGIgLSBidik7XG59XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9kMy1nZW8tcHJvamVjdGlvbi9ub2RlX21vZHVsZXMvZDMtZ2VvL3NyYy9hZGRlci5qc1xuLy8gbW9kdWxlIGlkID0gLi9ub2RlX21vZHVsZXMvZDMtZ2VvLXByb2plY3Rpb24vbm9kZV9tb2R1bGVzL2QzLWdlby9zcmMvYWRkZXIuanNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IGFkZGVyIGZyb20gXCIuL2FkZGVyXCI7XG5pbXBvcnQge2F0YW4yLCBjb3MsIHF1YXJ0ZXJQaSwgcmFkaWFucywgc2luLCB0YXV9IGZyb20gXCIuL21hdGhcIjtcbmltcG9ydCBub29wIGZyb20gXCIuL25vb3BcIjtcbmltcG9ydCBzdHJlYW0gZnJvbSBcIi4vc3RyZWFtXCI7XG5cbmV4cG9ydCB2YXIgYXJlYVJpbmdTdW0gPSBhZGRlcigpO1xuXG52YXIgYXJlYVN1bSA9IGFkZGVyKCksXG4gICAgbGFtYmRhMDAsXG4gICAgcGhpMDAsXG4gICAgbGFtYmRhMCxcbiAgICBjb3NQaGkwLFxuICAgIHNpblBoaTA7XG5cbmV4cG9ydCB2YXIgYXJlYVN0cmVhbSA9IHtcbiAgcG9pbnQ6IG5vb3AsXG4gIGxpbmVTdGFydDogbm9vcCxcbiAgbGluZUVuZDogbm9vcCxcbiAgcG9seWdvblN0YXJ0OiBmdW5jdGlvbigpIHtcbiAgICBhcmVhUmluZ1N1bS5yZXNldCgpO1xuICAgIGFyZWFTdHJlYW0ubGluZVN0YXJ0ID0gYXJlYVJpbmdTdGFydDtcbiAgICBhcmVhU3RyZWFtLmxpbmVFbmQgPSBhcmVhUmluZ0VuZDtcbiAgfSxcbiAgcG9seWdvbkVuZDogZnVuY3Rpb24oKSB7XG4gICAgdmFyIGFyZWFSaW5nID0gK2FyZWFSaW5nU3VtO1xuICAgIGFyZWFTdW0uYWRkKGFyZWFSaW5nIDwgMCA/IHRhdSArIGFyZWFSaW5nIDogYXJlYVJpbmcpO1xuICAgIHRoaXMubGluZVN0YXJ0ID0gdGhpcy5saW5lRW5kID0gdGhpcy5wb2ludCA9IG5vb3A7XG4gIH0sXG4gIHNwaGVyZTogZnVuY3Rpb24oKSB7XG4gICAgYXJlYVN1bS5hZGQodGF1KTtcbiAgfVxufTtcblxuZnVuY3Rpb24gYXJlYVJpbmdTdGFydCgpIHtcbiAgYXJlYVN0cmVhbS5wb2ludCA9IGFyZWFQb2ludEZpcnN0O1xufVxuXG5mdW5jdGlvbiBhcmVhUmluZ0VuZCgpIHtcbiAgYXJlYVBvaW50KGxhbWJkYTAwLCBwaGkwMCk7XG59XG5cbmZ1bmN0aW9uIGFyZWFQb2ludEZpcnN0KGxhbWJkYSwgcGhpKSB7XG4gIGFyZWFTdHJlYW0ucG9pbnQgPSBhcmVhUG9pbnQ7XG4gIGxhbWJkYTAwID0gbGFtYmRhLCBwaGkwMCA9IHBoaTtcbiAgbGFtYmRhICo9IHJhZGlhbnMsIHBoaSAqPSByYWRpYW5zO1xuICBsYW1iZGEwID0gbGFtYmRhLCBjb3NQaGkwID0gY29zKHBoaSA9IHBoaSAvIDIgKyBxdWFydGVyUGkpLCBzaW5QaGkwID0gc2luKHBoaSk7XG59XG5cbmZ1bmN0aW9uIGFyZWFQb2ludChsYW1iZGEsIHBoaSkge1xuICBsYW1iZGEgKj0gcmFkaWFucywgcGhpICo9IHJhZGlhbnM7XG4gIHBoaSA9IHBoaSAvIDIgKyBxdWFydGVyUGk7IC8vIGhhbGYgdGhlIGFuZ3VsYXIgZGlzdGFuY2UgZnJvbSBzb3V0aCBwb2xlXG5cbiAgLy8gU3BoZXJpY2FsIGV4Y2VzcyBFIGZvciBhIHNwaGVyaWNhbCB0cmlhbmdsZSB3aXRoIHZlcnRpY2VzOiBzb3V0aCBwb2xlLFxuICAvLyBwcmV2aW91cyBwb2ludCwgY3VycmVudCBwb2ludC4gIFVzZXMgYSBmb3JtdWxhIGRlcml2ZWQgZnJvbSBDYWdub2xp4oCZc1xuICAvLyB0aGVvcmVtLiAgU2VlIFRvZGh1bnRlciwgU3BoZXJpY2FsIFRyaWcuICgxODcxKSwgU2VjLiAxMDMsIEVxLiAoMikuXG4gIHZhciBkTGFtYmRhID0gbGFtYmRhIC0gbGFtYmRhMCxcbiAgICAgIHNkTGFtYmRhID0gZExhbWJkYSA+PSAwID8gMSA6IC0xLFxuICAgICAgYWRMYW1iZGEgPSBzZExhbWJkYSAqIGRMYW1iZGEsXG4gICAgICBjb3NQaGkgPSBjb3MocGhpKSxcbiAgICAgIHNpblBoaSA9IHNpbihwaGkpLFxuICAgICAgayA9IHNpblBoaTAgKiBzaW5QaGksXG4gICAgICB1ID0gY29zUGhpMCAqIGNvc1BoaSArIGsgKiBjb3MoYWRMYW1iZGEpLFxuICAgICAgdiA9IGsgKiBzZExhbWJkYSAqIHNpbihhZExhbWJkYSk7XG4gIGFyZWFSaW5nU3VtLmFkZChhdGFuMih2LCB1KSk7XG5cbiAgLy8gQWR2YW5jZSB0aGUgcHJldmlvdXMgcG9pbnRzLlxuICBsYW1iZGEwID0gbGFtYmRhLCBjb3NQaGkwID0gY29zUGhpLCBzaW5QaGkwID0gc2luUGhpO1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbihvYmplY3QpIHtcbiAgYXJlYVN1bS5yZXNldCgpO1xuICBzdHJlYW0ob2JqZWN0LCBhcmVhU3RyZWFtKTtcbiAgcmV0dXJuIGFyZWFTdW0gKiAyO1xufVxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvZDMtZ2VvLXByb2plY3Rpb24vbm9kZV9tb2R1bGVzL2QzLWdlby9zcmMvYXJlYS5qc1xuLy8gbW9kdWxlIGlkID0gLi9ub2RlX21vZHVsZXMvZDMtZ2VvLXByb2plY3Rpb24vbm9kZV9tb2R1bGVzL2QzLWdlby9zcmMvYXJlYS5qc1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgYWRkZXIgZnJvbSBcIi4vYWRkZXJcIjtcbmltcG9ydCB7YXJlYVN0cmVhbSwgYXJlYVJpbmdTdW19IGZyb20gXCIuL2FyZWFcIjtcbmltcG9ydCB7Y2FydGVzaWFuLCBjYXJ0ZXNpYW5Dcm9zcywgY2FydGVzaWFuTm9ybWFsaXplSW5QbGFjZSwgc3BoZXJpY2FsfSBmcm9tIFwiLi9jYXJ0ZXNpYW5cIjtcbmltcG9ydCB7YWJzLCBkZWdyZWVzLCBlcHNpbG9uLCByYWRpYW5zfSBmcm9tIFwiLi9tYXRoXCI7XG5pbXBvcnQgc3RyZWFtIGZyb20gXCIuL3N0cmVhbVwiO1xuXG52YXIgbGFtYmRhMCwgcGhpMCwgbGFtYmRhMSwgcGhpMSwgLy8gYm91bmRzXG4gICAgbGFtYmRhMiwgLy8gcHJldmlvdXMgbGFtYmRhLWNvb3JkaW5hdGVcbiAgICBsYW1iZGEwMCwgcGhpMDAsIC8vIGZpcnN0IHBvaW50XG4gICAgcDAsIC8vIHByZXZpb3VzIDNEIHBvaW50XG4gICAgZGVsdGFTdW0gPSBhZGRlcigpLFxuICAgIHJhbmdlcyxcbiAgICByYW5nZTtcblxudmFyIGJvdW5kc1N0cmVhbSA9IHtcbiAgcG9pbnQ6IGJvdW5kc1BvaW50LFxuICBsaW5lU3RhcnQ6IGJvdW5kc0xpbmVTdGFydCxcbiAgbGluZUVuZDogYm91bmRzTGluZUVuZCxcbiAgcG9seWdvblN0YXJ0OiBmdW5jdGlvbigpIHtcbiAgICBib3VuZHNTdHJlYW0ucG9pbnQgPSBib3VuZHNSaW5nUG9pbnQ7XG4gICAgYm91bmRzU3RyZWFtLmxpbmVTdGFydCA9IGJvdW5kc1JpbmdTdGFydDtcbiAgICBib3VuZHNTdHJlYW0ubGluZUVuZCA9IGJvdW5kc1JpbmdFbmQ7XG4gICAgZGVsdGFTdW0ucmVzZXQoKTtcbiAgICBhcmVhU3RyZWFtLnBvbHlnb25TdGFydCgpO1xuICB9LFxuICBwb2x5Z29uRW5kOiBmdW5jdGlvbigpIHtcbiAgICBhcmVhU3RyZWFtLnBvbHlnb25FbmQoKTtcbiAgICBib3VuZHNTdHJlYW0ucG9pbnQgPSBib3VuZHNQb2ludDtcbiAgICBib3VuZHNTdHJlYW0ubGluZVN0YXJ0ID0gYm91bmRzTGluZVN0YXJ0O1xuICAgIGJvdW5kc1N0cmVhbS5saW5lRW5kID0gYm91bmRzTGluZUVuZDtcbiAgICBpZiAoYXJlYVJpbmdTdW0gPCAwKSBsYW1iZGEwID0gLShsYW1iZGExID0gMTgwKSwgcGhpMCA9IC0ocGhpMSA9IDkwKTtcbiAgICBlbHNlIGlmIChkZWx0YVN1bSA+IGVwc2lsb24pIHBoaTEgPSA5MDtcbiAgICBlbHNlIGlmIChkZWx0YVN1bSA8IC1lcHNpbG9uKSBwaGkwID0gLTkwO1xuICAgIHJhbmdlWzBdID0gbGFtYmRhMCwgcmFuZ2VbMV0gPSBsYW1iZGExO1xuICB9XG59O1xuXG5mdW5jdGlvbiBib3VuZHNQb2ludChsYW1iZGEsIHBoaSkge1xuICByYW5nZXMucHVzaChyYW5nZSA9IFtsYW1iZGEwID0gbGFtYmRhLCBsYW1iZGExID0gbGFtYmRhXSk7XG4gIGlmIChwaGkgPCBwaGkwKSBwaGkwID0gcGhpO1xuICBpZiAocGhpID4gcGhpMSkgcGhpMSA9IHBoaTtcbn1cblxuZnVuY3Rpb24gbGluZVBvaW50KGxhbWJkYSwgcGhpKSB7XG4gIHZhciBwID0gY2FydGVzaWFuKFtsYW1iZGEgKiByYWRpYW5zLCBwaGkgKiByYWRpYW5zXSk7XG4gIGlmIChwMCkge1xuICAgIHZhciBub3JtYWwgPSBjYXJ0ZXNpYW5Dcm9zcyhwMCwgcCksXG4gICAgICAgIGVxdWF0b3JpYWwgPSBbbm9ybWFsWzFdLCAtbm9ybWFsWzBdLCAwXSxcbiAgICAgICAgaW5mbGVjdGlvbiA9IGNhcnRlc2lhbkNyb3NzKGVxdWF0b3JpYWwsIG5vcm1hbCk7XG4gICAgY2FydGVzaWFuTm9ybWFsaXplSW5QbGFjZShpbmZsZWN0aW9uKTtcbiAgICBpbmZsZWN0aW9uID0gc3BoZXJpY2FsKGluZmxlY3Rpb24pO1xuICAgIHZhciBkZWx0YSA9IGxhbWJkYSAtIGxhbWJkYTIsXG4gICAgICAgIHNpZ24gPSBkZWx0YSA+IDAgPyAxIDogLTEsXG4gICAgICAgIGxhbWJkYWkgPSBpbmZsZWN0aW9uWzBdICogZGVncmVlcyAqIHNpZ24sXG4gICAgICAgIHBoaWksXG4gICAgICAgIGFudGltZXJpZGlhbiA9IGFicyhkZWx0YSkgPiAxODA7XG4gICAgaWYgKGFudGltZXJpZGlhbiBeIChzaWduICogbGFtYmRhMiA8IGxhbWJkYWkgJiYgbGFtYmRhaSA8IHNpZ24gKiBsYW1iZGEpKSB7XG4gICAgICBwaGlpID0gaW5mbGVjdGlvblsxXSAqIGRlZ3JlZXM7XG4gICAgICBpZiAocGhpaSA+IHBoaTEpIHBoaTEgPSBwaGlpO1xuICAgIH0gZWxzZSBpZiAobGFtYmRhaSA9IChsYW1iZGFpICsgMzYwKSAlIDM2MCAtIDE4MCwgYW50aW1lcmlkaWFuIF4gKHNpZ24gKiBsYW1iZGEyIDwgbGFtYmRhaSAmJiBsYW1iZGFpIDwgc2lnbiAqIGxhbWJkYSkpIHtcbiAgICAgIHBoaWkgPSAtaW5mbGVjdGlvblsxXSAqIGRlZ3JlZXM7XG4gICAgICBpZiAocGhpaSA8IHBoaTApIHBoaTAgPSBwaGlpO1xuICAgIH0gZWxzZSB7XG4gICAgICBpZiAocGhpIDwgcGhpMCkgcGhpMCA9IHBoaTtcbiAgICAgIGlmIChwaGkgPiBwaGkxKSBwaGkxID0gcGhpO1xuICAgIH1cbiAgICBpZiAoYW50aW1lcmlkaWFuKSB7XG4gICAgICBpZiAobGFtYmRhIDwgbGFtYmRhMikge1xuICAgICAgICBpZiAoYW5nbGUobGFtYmRhMCwgbGFtYmRhKSA+IGFuZ2xlKGxhbWJkYTAsIGxhbWJkYTEpKSBsYW1iZGExID0gbGFtYmRhO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaWYgKGFuZ2xlKGxhbWJkYSwgbGFtYmRhMSkgPiBhbmdsZShsYW1iZGEwLCBsYW1iZGExKSkgbGFtYmRhMCA9IGxhbWJkYTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKGxhbWJkYTEgPj0gbGFtYmRhMCkge1xuICAgICAgICBpZiAobGFtYmRhIDwgbGFtYmRhMCkgbGFtYmRhMCA9IGxhbWJkYTtcbiAgICAgICAgaWYgKGxhbWJkYSA+IGxhbWJkYTEpIGxhbWJkYTEgPSBsYW1iZGE7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpZiAobGFtYmRhID4gbGFtYmRhMikge1xuICAgICAgICAgIGlmIChhbmdsZShsYW1iZGEwLCBsYW1iZGEpID4gYW5nbGUobGFtYmRhMCwgbGFtYmRhMSkpIGxhbWJkYTEgPSBsYW1iZGE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaWYgKGFuZ2xlKGxhbWJkYSwgbGFtYmRhMSkgPiBhbmdsZShsYW1iZGEwLCBsYW1iZGExKSkgbGFtYmRhMCA9IGxhbWJkYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfSBlbHNlIHtcbiAgICByYW5nZXMucHVzaChyYW5nZSA9IFtsYW1iZGEwID0gbGFtYmRhLCBsYW1iZGExID0gbGFtYmRhXSk7XG4gIH1cbiAgaWYgKHBoaSA8IHBoaTApIHBoaTAgPSBwaGk7XG4gIGlmIChwaGkgPiBwaGkxKSBwaGkxID0gcGhpO1xuICBwMCA9IHAsIGxhbWJkYTIgPSBsYW1iZGE7XG59XG5cbmZ1bmN0aW9uIGJvdW5kc0xpbmVTdGFydCgpIHtcbiAgYm91bmRzU3RyZWFtLnBvaW50ID0gbGluZVBvaW50O1xufVxuXG5mdW5jdGlvbiBib3VuZHNMaW5lRW5kKCkge1xuICByYW5nZVswXSA9IGxhbWJkYTAsIHJhbmdlWzFdID0gbGFtYmRhMTtcbiAgYm91bmRzU3RyZWFtLnBvaW50ID0gYm91bmRzUG9pbnQ7XG4gIHAwID0gbnVsbDtcbn1cblxuZnVuY3Rpb24gYm91bmRzUmluZ1BvaW50KGxhbWJkYSwgcGhpKSB7XG4gIGlmIChwMCkge1xuICAgIHZhciBkZWx0YSA9IGxhbWJkYSAtIGxhbWJkYTI7XG4gICAgZGVsdGFTdW0uYWRkKGFicyhkZWx0YSkgPiAxODAgPyBkZWx0YSArIChkZWx0YSA+IDAgPyAzNjAgOiAtMzYwKSA6IGRlbHRhKTtcbiAgfSBlbHNlIHtcbiAgICBsYW1iZGEwMCA9IGxhbWJkYSwgcGhpMDAgPSBwaGk7XG4gIH1cbiAgYXJlYVN0cmVhbS5wb2ludChsYW1iZGEsIHBoaSk7XG4gIGxpbmVQb2ludChsYW1iZGEsIHBoaSk7XG59XG5cbmZ1bmN0aW9uIGJvdW5kc1JpbmdTdGFydCgpIHtcbiAgYXJlYVN0cmVhbS5saW5lU3RhcnQoKTtcbn1cblxuZnVuY3Rpb24gYm91bmRzUmluZ0VuZCgpIHtcbiAgYm91bmRzUmluZ1BvaW50KGxhbWJkYTAwLCBwaGkwMCk7XG4gIGFyZWFTdHJlYW0ubGluZUVuZCgpO1xuICBpZiAoYWJzKGRlbHRhU3VtKSA+IGVwc2lsb24pIGxhbWJkYTAgPSAtKGxhbWJkYTEgPSAxODApO1xuICByYW5nZVswXSA9IGxhbWJkYTAsIHJhbmdlWzFdID0gbGFtYmRhMTtcbiAgcDAgPSBudWxsO1xufVxuXG4vLyBGaW5kcyB0aGUgbGVmdC1yaWdodCBkaXN0YW5jZSBiZXR3ZWVuIHR3byBsb25naXR1ZGVzLlxuLy8gVGhpcyBpcyBhbG1vc3QgdGhlIHNhbWUgYXMgKGxhbWJkYTEgLSBsYW1iZGEwICsgMzYwwrApICUgMzYwwrAsIGV4Y2VwdCB0aGF0IHdlIHdhbnRcbi8vIHRoZSBkaXN0YW5jZSBiZXR3ZWVuIMKxMTgwwrAgdG8gYmUgMzYwwrAuXG5mdW5jdGlvbiBhbmdsZShsYW1iZGEwLCBsYW1iZGExKSB7XG4gIHJldHVybiAobGFtYmRhMSAtPSBsYW1iZGEwKSA8IDAgPyBsYW1iZGExICsgMzYwIDogbGFtYmRhMTtcbn1cblxuZnVuY3Rpb24gcmFuZ2VDb21wYXJlKGEsIGIpIHtcbiAgcmV0dXJuIGFbMF0gLSBiWzBdO1xufVxuXG5mdW5jdGlvbiByYW5nZUNvbnRhaW5zKHJhbmdlLCB4KSB7XG4gIHJldHVybiByYW5nZVswXSA8PSByYW5nZVsxXSA/IHJhbmdlWzBdIDw9IHggJiYgeCA8PSByYW5nZVsxXSA6IHggPCByYW5nZVswXSB8fCByYW5nZVsxXSA8IHg7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKGZlYXR1cmUpIHtcbiAgdmFyIGksIG4sIGEsIGIsIG1lcmdlZCwgZGVsdGFNYXgsIGRlbHRhO1xuXG4gIHBoaTEgPSBsYW1iZGExID0gLShsYW1iZGEwID0gcGhpMCA9IEluZmluaXR5KTtcbiAgcmFuZ2VzID0gW107XG4gIHN0cmVhbShmZWF0dXJlLCBib3VuZHNTdHJlYW0pO1xuXG4gIC8vIEZpcnN0LCBzb3J0IHJhbmdlcyBieSB0aGVpciBtaW5pbXVtIGxvbmdpdHVkZXMuXG4gIGlmIChuID0gcmFuZ2VzLmxlbmd0aCkge1xuICAgIHJhbmdlcy5zb3J0KHJhbmdlQ29tcGFyZSk7XG5cbiAgICAvLyBUaGVuLCBtZXJnZSBhbnkgcmFuZ2VzIHRoYXQgb3ZlcmxhcC5cbiAgICBmb3IgKGkgPSAxLCBhID0gcmFuZ2VzWzBdLCBtZXJnZWQgPSBbYV07IGkgPCBuOyArK2kpIHtcbiAgICAgIGIgPSByYW5nZXNbaV07XG4gICAgICBpZiAocmFuZ2VDb250YWlucyhhLCBiWzBdKSB8fCByYW5nZUNvbnRhaW5zKGEsIGJbMV0pKSB7XG4gICAgICAgIGlmIChhbmdsZShhWzBdLCBiWzFdKSA+IGFuZ2xlKGFbMF0sIGFbMV0pKSBhWzFdID0gYlsxXTtcbiAgICAgICAgaWYgKGFuZ2xlKGJbMF0sIGFbMV0pID4gYW5nbGUoYVswXSwgYVsxXSkpIGFbMF0gPSBiWzBdO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbWVyZ2VkLnB1c2goYSA9IGIpO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8vIEZpbmFsbHksIGZpbmQgdGhlIGxhcmdlc3QgZ2FwIGJldHdlZW4gdGhlIG1lcmdlZCByYW5nZXMuXG4gICAgLy8gVGhlIGZpbmFsIGJvdW5kaW5nIGJveCB3aWxsIGJlIHRoZSBpbnZlcnNlIG9mIHRoaXMgZ2FwLlxuICAgIGZvciAoZGVsdGFNYXggPSAtSW5maW5pdHksIG4gPSBtZXJnZWQubGVuZ3RoIC0gMSwgaSA9IDAsIGEgPSBtZXJnZWRbbl07IGkgPD0gbjsgYSA9IGIsICsraSkge1xuICAgICAgYiA9IG1lcmdlZFtpXTtcbiAgICAgIGlmICgoZGVsdGEgPSBhbmdsZShhWzFdLCBiWzBdKSkgPiBkZWx0YU1heCkgZGVsdGFNYXggPSBkZWx0YSwgbGFtYmRhMCA9IGJbMF0sIGxhbWJkYTEgPSBhWzFdO1xuICAgIH1cbiAgfVxuXG4gIHJhbmdlcyA9IHJhbmdlID0gbnVsbDtcblxuICByZXR1cm4gbGFtYmRhMCA9PT0gSW5maW5pdHkgfHwgcGhpMCA9PT0gSW5maW5pdHlcbiAgICAgID8gW1tOYU4sIE5hTl0sIFtOYU4sIE5hTl1dXG4gICAgICA6IFtbbGFtYmRhMCwgcGhpMF0sIFtsYW1iZGExLCBwaGkxXV07XG59XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9kMy1nZW8tcHJvamVjdGlvbi9ub2RlX21vZHVsZXMvZDMtZ2VvL3NyYy9ib3VuZHMuanNcbi8vIG1vZHVsZSBpZCA9IC4vbm9kZV9tb2R1bGVzL2QzLWdlby1wcm9qZWN0aW9uL25vZGVfbW9kdWxlcy9kMy1nZW8vc3JjL2JvdW5kcy5qc1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQge2FzaW4sIGF0YW4yLCBjb3MsIHNpbiwgc3FydH0gZnJvbSBcIi4vbWF0aFwiO1xuXG5leHBvcnQgZnVuY3Rpb24gc3BoZXJpY2FsKGNhcnRlc2lhbikge1xuICByZXR1cm4gW2F0YW4yKGNhcnRlc2lhblsxXSwgY2FydGVzaWFuWzBdKSwgYXNpbihjYXJ0ZXNpYW5bMl0pXTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNhcnRlc2lhbihzcGhlcmljYWwpIHtcbiAgdmFyIGxhbWJkYSA9IHNwaGVyaWNhbFswXSwgcGhpID0gc3BoZXJpY2FsWzFdLCBjb3NQaGkgPSBjb3MocGhpKTtcbiAgcmV0dXJuIFtjb3NQaGkgKiBjb3MobGFtYmRhKSwgY29zUGhpICogc2luKGxhbWJkYSksIHNpbihwaGkpXTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNhcnRlc2lhbkRvdChhLCBiKSB7XG4gIHJldHVybiBhWzBdICogYlswXSArIGFbMV0gKiBiWzFdICsgYVsyXSAqIGJbMl07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjYXJ0ZXNpYW5Dcm9zcyhhLCBiKSB7XG4gIHJldHVybiBbYVsxXSAqIGJbMl0gLSBhWzJdICogYlsxXSwgYVsyXSAqIGJbMF0gLSBhWzBdICogYlsyXSwgYVswXSAqIGJbMV0gLSBhWzFdICogYlswXV07XG59XG5cbi8vIFRPRE8gcmV0dXJuIGFcbmV4cG9ydCBmdW5jdGlvbiBjYXJ0ZXNpYW5BZGRJblBsYWNlKGEsIGIpIHtcbiAgYVswXSArPSBiWzBdLCBhWzFdICs9IGJbMV0sIGFbMl0gKz0gYlsyXTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNhcnRlc2lhblNjYWxlKHZlY3Rvciwgaykge1xuICByZXR1cm4gW3ZlY3RvclswXSAqIGssIHZlY3RvclsxXSAqIGssIHZlY3RvclsyXSAqIGtdO1xufVxuXG4vLyBUT0RPIHJldHVybiBkXG5leHBvcnQgZnVuY3Rpb24gY2FydGVzaWFuTm9ybWFsaXplSW5QbGFjZShkKSB7XG4gIHZhciBsID0gc3FydChkWzBdICogZFswXSArIGRbMV0gKiBkWzFdICsgZFsyXSAqIGRbMl0pO1xuICBkWzBdIC89IGwsIGRbMV0gLz0gbCwgZFsyXSAvPSBsO1xufVxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvZDMtZ2VvLXByb2plY3Rpb24vbm9kZV9tb2R1bGVzL2QzLWdlby9zcmMvY2FydGVzaWFuLmpzXG4vLyBtb2R1bGUgaWQgPSAuL25vZGVfbW9kdWxlcy9kMy1nZW8tcHJvamVjdGlvbi9ub2RlX21vZHVsZXMvZDMtZ2VvL3NyYy9jYXJ0ZXNpYW4uanNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IHthc2luLCBhdGFuMiwgY29zLCBkZWdyZWVzLCBlcHNpbG9uLCBlcHNpbG9uMiwgcmFkaWFucywgc2luLCBzcXJ0fSBmcm9tIFwiLi9tYXRoXCI7XG5pbXBvcnQgbm9vcCBmcm9tIFwiLi9ub29wXCI7XG5pbXBvcnQgc3RyZWFtIGZyb20gXCIuL3N0cmVhbVwiO1xuXG52YXIgVzAsIFcxLFxuICAgIFgwLCBZMCwgWjAsXG4gICAgWDEsIFkxLCBaMSxcbiAgICBYMiwgWTIsIFoyLFxuICAgIGxhbWJkYTAwLCBwaGkwMCwgLy8gZmlyc3QgcG9pbnRcbiAgICB4MCwgeTAsIHowOyAvLyBwcmV2aW91cyBwb2ludFxuXG52YXIgY2VudHJvaWRTdHJlYW0gPSB7XG4gIHNwaGVyZTogbm9vcCxcbiAgcG9pbnQ6IGNlbnRyb2lkUG9pbnQsXG4gIGxpbmVTdGFydDogY2VudHJvaWRMaW5lU3RhcnQsXG4gIGxpbmVFbmQ6IGNlbnRyb2lkTGluZUVuZCxcbiAgcG9seWdvblN0YXJ0OiBmdW5jdGlvbigpIHtcbiAgICBjZW50cm9pZFN0cmVhbS5saW5lU3RhcnQgPSBjZW50cm9pZFJpbmdTdGFydDtcbiAgICBjZW50cm9pZFN0cmVhbS5saW5lRW5kID0gY2VudHJvaWRSaW5nRW5kO1xuICB9LFxuICBwb2x5Z29uRW5kOiBmdW5jdGlvbigpIHtcbiAgICBjZW50cm9pZFN0cmVhbS5saW5lU3RhcnQgPSBjZW50cm9pZExpbmVTdGFydDtcbiAgICBjZW50cm9pZFN0cmVhbS5saW5lRW5kID0gY2VudHJvaWRMaW5lRW5kO1xuICB9XG59O1xuXG4vLyBBcml0aG1ldGljIG1lYW4gb2YgQ2FydGVzaWFuIHZlY3RvcnMuXG5mdW5jdGlvbiBjZW50cm9pZFBvaW50KGxhbWJkYSwgcGhpKSB7XG4gIGxhbWJkYSAqPSByYWRpYW5zLCBwaGkgKj0gcmFkaWFucztcbiAgdmFyIGNvc1BoaSA9IGNvcyhwaGkpO1xuICBjZW50cm9pZFBvaW50Q2FydGVzaWFuKGNvc1BoaSAqIGNvcyhsYW1iZGEpLCBjb3NQaGkgKiBzaW4obGFtYmRhKSwgc2luKHBoaSkpO1xufVxuXG5mdW5jdGlvbiBjZW50cm9pZFBvaW50Q2FydGVzaWFuKHgsIHksIHopIHtcbiAgKytXMDtcbiAgWDAgKz0gKHggLSBYMCkgLyBXMDtcbiAgWTAgKz0gKHkgLSBZMCkgLyBXMDtcbiAgWjAgKz0gKHogLSBaMCkgLyBXMDtcbn1cblxuZnVuY3Rpb24gY2VudHJvaWRMaW5lU3RhcnQoKSB7XG4gIGNlbnRyb2lkU3RyZWFtLnBvaW50ID0gY2VudHJvaWRMaW5lUG9pbnRGaXJzdDtcbn1cblxuZnVuY3Rpb24gY2VudHJvaWRMaW5lUG9pbnRGaXJzdChsYW1iZGEsIHBoaSkge1xuICBsYW1iZGEgKj0gcmFkaWFucywgcGhpICo9IHJhZGlhbnM7XG4gIHZhciBjb3NQaGkgPSBjb3MocGhpKTtcbiAgeDAgPSBjb3NQaGkgKiBjb3MobGFtYmRhKTtcbiAgeTAgPSBjb3NQaGkgKiBzaW4obGFtYmRhKTtcbiAgejAgPSBzaW4ocGhpKTtcbiAgY2VudHJvaWRTdHJlYW0ucG9pbnQgPSBjZW50cm9pZExpbmVQb2ludDtcbiAgY2VudHJvaWRQb2ludENhcnRlc2lhbih4MCwgeTAsIHowKTtcbn1cblxuZnVuY3Rpb24gY2VudHJvaWRMaW5lUG9pbnQobGFtYmRhLCBwaGkpIHtcbiAgbGFtYmRhICo9IHJhZGlhbnMsIHBoaSAqPSByYWRpYW5zO1xuICB2YXIgY29zUGhpID0gY29zKHBoaSksXG4gICAgICB4ID0gY29zUGhpICogY29zKGxhbWJkYSksXG4gICAgICB5ID0gY29zUGhpICogc2luKGxhbWJkYSksXG4gICAgICB6ID0gc2luKHBoaSksXG4gICAgICB3ID0gYXRhbjIoc3FydCgodyA9IHkwICogeiAtIHowICogeSkgKiB3ICsgKHcgPSB6MCAqIHggLSB4MCAqIHopICogdyArICh3ID0geDAgKiB5IC0geTAgKiB4KSAqIHcpLCB4MCAqIHggKyB5MCAqIHkgKyB6MCAqIHopO1xuICBXMSArPSB3O1xuICBYMSArPSB3ICogKHgwICsgKHgwID0geCkpO1xuICBZMSArPSB3ICogKHkwICsgKHkwID0geSkpO1xuICBaMSArPSB3ICogKHowICsgKHowID0geikpO1xuICBjZW50cm9pZFBvaW50Q2FydGVzaWFuKHgwLCB5MCwgejApO1xufVxuXG5mdW5jdGlvbiBjZW50cm9pZExpbmVFbmQoKSB7XG4gIGNlbnRyb2lkU3RyZWFtLnBvaW50ID0gY2VudHJvaWRQb2ludDtcbn1cblxuLy8gU2VlIEouIEUuIEJyb2NrLCBUaGUgSW5lcnRpYSBUZW5zb3IgZm9yIGEgU3BoZXJpY2FsIFRyaWFuZ2xlLFxuLy8gSi4gQXBwbGllZCBNZWNoYW5pY3MgNDIsIDIzOSAoMTk3NSkuXG5mdW5jdGlvbiBjZW50cm9pZFJpbmdTdGFydCgpIHtcbiAgY2VudHJvaWRTdHJlYW0ucG9pbnQgPSBjZW50cm9pZFJpbmdQb2ludEZpcnN0O1xufVxuXG5mdW5jdGlvbiBjZW50cm9pZFJpbmdFbmQoKSB7XG4gIGNlbnRyb2lkUmluZ1BvaW50KGxhbWJkYTAwLCBwaGkwMCk7XG4gIGNlbnRyb2lkU3RyZWFtLnBvaW50ID0gY2VudHJvaWRQb2ludDtcbn1cblxuZnVuY3Rpb24gY2VudHJvaWRSaW5nUG9pbnRGaXJzdChsYW1iZGEsIHBoaSkge1xuICBsYW1iZGEwMCA9IGxhbWJkYSwgcGhpMDAgPSBwaGk7XG4gIGxhbWJkYSAqPSByYWRpYW5zLCBwaGkgKj0gcmFkaWFucztcbiAgY2VudHJvaWRTdHJlYW0ucG9pbnQgPSBjZW50cm9pZFJpbmdQb2ludDtcbiAgdmFyIGNvc1BoaSA9IGNvcyhwaGkpO1xuICB4MCA9IGNvc1BoaSAqIGNvcyhsYW1iZGEpO1xuICB5MCA9IGNvc1BoaSAqIHNpbihsYW1iZGEpO1xuICB6MCA9IHNpbihwaGkpO1xuICBjZW50cm9pZFBvaW50Q2FydGVzaWFuKHgwLCB5MCwgejApO1xufVxuXG5mdW5jdGlvbiBjZW50cm9pZFJpbmdQb2ludChsYW1iZGEsIHBoaSkge1xuICBsYW1iZGEgKj0gcmFkaWFucywgcGhpICo9IHJhZGlhbnM7XG4gIHZhciBjb3NQaGkgPSBjb3MocGhpKSxcbiAgICAgIHggPSBjb3NQaGkgKiBjb3MobGFtYmRhKSxcbiAgICAgIHkgPSBjb3NQaGkgKiBzaW4obGFtYmRhKSxcbiAgICAgIHogPSBzaW4ocGhpKSxcbiAgICAgIGN4ID0geTAgKiB6IC0gejAgKiB5LFxuICAgICAgY3kgPSB6MCAqIHggLSB4MCAqIHosXG4gICAgICBjeiA9IHgwICogeSAtIHkwICogeCxcbiAgICAgIG0gPSBzcXJ0KGN4ICogY3ggKyBjeSAqIGN5ICsgY3ogKiBjeiksXG4gICAgICB3ID0gYXNpbihtKSwgLy8gbGluZSB3ZWlnaHQgPSBhbmdsZVxuICAgICAgdiA9IG0gJiYgLXcgLyBtOyAvLyBhcmVhIHdlaWdodCBtdWx0aXBsaWVyXG4gIFgyICs9IHYgKiBjeDtcbiAgWTIgKz0gdiAqIGN5O1xuICBaMiArPSB2ICogY3o7XG4gIFcxICs9IHc7XG4gIFgxICs9IHcgKiAoeDAgKyAoeDAgPSB4KSk7XG4gIFkxICs9IHcgKiAoeTAgKyAoeTAgPSB5KSk7XG4gIFoxICs9IHcgKiAoejAgKyAoejAgPSB6KSk7XG4gIGNlbnRyb2lkUG9pbnRDYXJ0ZXNpYW4oeDAsIHkwLCB6MCk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKG9iamVjdCkge1xuICBXMCA9IFcxID1cbiAgWDAgPSBZMCA9IFowID1cbiAgWDEgPSBZMSA9IFoxID1cbiAgWDIgPSBZMiA9IFoyID0gMDtcbiAgc3RyZWFtKG9iamVjdCwgY2VudHJvaWRTdHJlYW0pO1xuXG4gIHZhciB4ID0gWDIsXG4gICAgICB5ID0gWTIsXG4gICAgICB6ID0gWjIsXG4gICAgICBtID0geCAqIHggKyB5ICogeSArIHogKiB6O1xuXG4gIC8vIElmIHRoZSBhcmVhLXdlaWdodGVkIGNjZW50cm9pZCBpcyB1bmRlZmluZWQsIGZhbGwgYmFjayB0byBsZW5ndGgtd2VpZ2h0ZWQgY2NlbnRyb2lkLlxuICBpZiAobSA8IGVwc2lsb24yKSB7XG4gICAgeCA9IFgxLCB5ID0gWTEsIHogPSBaMTtcbiAgICAvLyBJZiB0aGUgZmVhdHVyZSBoYXMgemVybyBsZW5ndGgsIGZhbGwgYmFjayB0byBhcml0aG1ldGljIG1lYW4gb2YgcG9pbnQgdmVjdG9ycy5cbiAgICBpZiAoVzEgPCBlcHNpbG9uKSB4ID0gWDAsIHkgPSBZMCwgeiA9IFowO1xuICAgIG0gPSB4ICogeCArIHkgKiB5ICsgeiAqIHo7XG4gICAgLy8gSWYgdGhlIGZlYXR1cmUgc3RpbGwgaGFzIGFuIHVuZGVmaW5lZCBjY2VudHJvaWQsIHRoZW4gcmV0dXJuLlxuICAgIGlmIChtIDwgZXBzaWxvbjIpIHJldHVybiBbTmFOLCBOYU5dO1xuICB9XG5cbiAgcmV0dXJuIFthdGFuMih5LCB4KSAqIGRlZ3JlZXMsIGFzaW4oeiAvIHNxcnQobSkpICogZGVncmVlc107XG59XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9kMy1nZW8tcHJvamVjdGlvbi9ub2RlX21vZHVsZXMvZDMtZ2VvL3NyYy9jZW50cm9pZC5qc1xuLy8gbW9kdWxlIGlkID0gLi9ub2RlX21vZHVsZXMvZDMtZ2VvLXByb2plY3Rpb24vbm9kZV9tb2R1bGVzL2QzLWdlby9zcmMvY2VudHJvaWQuanNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IHtjYXJ0ZXNpYW4sIGNhcnRlc2lhbk5vcm1hbGl6ZUluUGxhY2UsIHNwaGVyaWNhbH0gZnJvbSBcIi4vY2FydGVzaWFuXCI7XG5pbXBvcnQgY29uc3RhbnQgZnJvbSBcIi4vY29uc3RhbnRcIjtcbmltcG9ydCB7YWNvcywgY29zLCBkZWdyZWVzLCBlcHNpbG9uLCByYWRpYW5zLCBzaW4sIHRhdX0gZnJvbSBcIi4vbWF0aFwiO1xuaW1wb3J0IHtyb3RhdGVSYWRpYW5zfSBmcm9tIFwiLi9yb3RhdGlvblwiO1xuXG4vLyBHZW5lcmF0ZXMgYSBjaXJjbGUgY2VudGVyZWQgYXQgWzDCsCwgMMKwXSwgd2l0aCBhIGdpdmVuIHJhZGl1cyBhbmQgcHJlY2lzaW9uLlxuZXhwb3J0IGZ1bmN0aW9uIGNpcmNsZVN0cmVhbShzdHJlYW0sIHJhZGl1cywgZGVsdGEsIGRpcmVjdGlvbiwgdDAsIHQxKSB7XG4gIGlmICghZGVsdGEpIHJldHVybjtcbiAgdmFyIGNvc1JhZGl1cyA9IGNvcyhyYWRpdXMpLFxuICAgICAgc2luUmFkaXVzID0gc2luKHJhZGl1cyksXG4gICAgICBzdGVwID0gZGlyZWN0aW9uICogZGVsdGE7XG4gIGlmICh0MCA9PSBudWxsKSB7XG4gICAgdDAgPSByYWRpdXMgKyBkaXJlY3Rpb24gKiB0YXU7XG4gICAgdDEgPSByYWRpdXMgLSBzdGVwIC8gMjtcbiAgfSBlbHNlIHtcbiAgICB0MCA9IGNpcmNsZVJhZGl1cyhjb3NSYWRpdXMsIHQwKTtcbiAgICB0MSA9IGNpcmNsZVJhZGl1cyhjb3NSYWRpdXMsIHQxKTtcbiAgICBpZiAoZGlyZWN0aW9uID4gMCA/IHQwIDwgdDEgOiB0MCA+IHQxKSB0MCArPSBkaXJlY3Rpb24gKiB0YXU7XG4gIH1cbiAgZm9yICh2YXIgcG9pbnQsIHQgPSB0MDsgZGlyZWN0aW9uID4gMCA/IHQgPiB0MSA6IHQgPCB0MTsgdCAtPSBzdGVwKSB7XG4gICAgcG9pbnQgPSBzcGhlcmljYWwoW2Nvc1JhZGl1cywgLXNpblJhZGl1cyAqIGNvcyh0KSwgLXNpblJhZGl1cyAqIHNpbih0KV0pO1xuICAgIHN0cmVhbS5wb2ludChwb2ludFswXSwgcG9pbnRbMV0pO1xuICB9XG59XG5cbi8vIFJldHVybnMgdGhlIHNpZ25lZCBhbmdsZSBvZiBhIGNhcnRlc2lhbiBwb2ludCByZWxhdGl2ZSB0byBbY29zUmFkaXVzLCAwLCAwXS5cbmZ1bmN0aW9uIGNpcmNsZVJhZGl1cyhjb3NSYWRpdXMsIHBvaW50KSB7XG4gIHBvaW50ID0gY2FydGVzaWFuKHBvaW50KSwgcG9pbnRbMF0gLT0gY29zUmFkaXVzO1xuICBjYXJ0ZXNpYW5Ob3JtYWxpemVJblBsYWNlKHBvaW50KTtcbiAgdmFyIHJhZGl1cyA9IGFjb3MoLXBvaW50WzFdKTtcbiAgcmV0dXJuICgoLXBvaW50WzJdIDwgMCA/IC1yYWRpdXMgOiByYWRpdXMpICsgdGF1IC0gZXBzaWxvbikgJSB0YXU7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKCkge1xuICB2YXIgY2VudGVyID0gY29uc3RhbnQoWzAsIDBdKSxcbiAgICAgIHJhZGl1cyA9IGNvbnN0YW50KDkwKSxcbiAgICAgIHByZWNpc2lvbiA9IGNvbnN0YW50KDYpLFxuICAgICAgcmluZyxcbiAgICAgIHJvdGF0ZSxcbiAgICAgIHN0cmVhbSA9IHtwb2ludDogcG9pbnR9O1xuXG4gIGZ1bmN0aW9uIHBvaW50KHgsIHkpIHtcbiAgICByaW5nLnB1c2goeCA9IHJvdGF0ZSh4LCB5KSk7XG4gICAgeFswXSAqPSBkZWdyZWVzLCB4WzFdICo9IGRlZ3JlZXM7XG4gIH1cblxuICBmdW5jdGlvbiBjaXJjbGUoKSB7XG4gICAgdmFyIGMgPSBjZW50ZXIuYXBwbHkodGhpcywgYXJndW1lbnRzKSxcbiAgICAgICAgciA9IHJhZGl1cy5hcHBseSh0aGlzLCBhcmd1bWVudHMpICogcmFkaWFucyxcbiAgICAgICAgcCA9IHByZWNpc2lvbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpICogcmFkaWFucztcbiAgICByaW5nID0gW107XG4gICAgcm90YXRlID0gcm90YXRlUmFkaWFucygtY1swXSAqIHJhZGlhbnMsIC1jWzFdICogcmFkaWFucywgMCkuaW52ZXJ0O1xuICAgIGNpcmNsZVN0cmVhbShzdHJlYW0sIHIsIHAsIDEpO1xuICAgIGMgPSB7dHlwZTogXCJQb2x5Z29uXCIsIGNvb3JkaW5hdGVzOiBbcmluZ119O1xuICAgIHJpbmcgPSByb3RhdGUgPSBudWxsO1xuICAgIHJldHVybiBjO1xuICB9XG5cbiAgY2lyY2xlLmNlbnRlciA9IGZ1bmN0aW9uKF8pIHtcbiAgICByZXR1cm4gYXJndW1lbnRzLmxlbmd0aCA/IChjZW50ZXIgPSB0eXBlb2YgXyA9PT0gXCJmdW5jdGlvblwiID8gXyA6IGNvbnN0YW50KFsrX1swXSwgK19bMV1dKSwgY2lyY2xlKSA6IGNlbnRlcjtcbiAgfTtcblxuICBjaXJjbGUucmFkaXVzID0gZnVuY3Rpb24oXykge1xuICAgIHJldHVybiBhcmd1bWVudHMubGVuZ3RoID8gKHJhZGl1cyA9IHR5cGVvZiBfID09PSBcImZ1bmN0aW9uXCIgPyBfIDogY29uc3RhbnQoK18pLCBjaXJjbGUpIDogcmFkaXVzO1xuICB9O1xuXG4gIGNpcmNsZS5wcmVjaXNpb24gPSBmdW5jdGlvbihfKSB7XG4gICAgcmV0dXJuIGFyZ3VtZW50cy5sZW5ndGggPyAocHJlY2lzaW9uID0gdHlwZW9mIF8gPT09IFwiZnVuY3Rpb25cIiA/IF8gOiBjb25zdGFudCgrXyksIGNpcmNsZSkgOiBwcmVjaXNpb247XG4gIH07XG5cbiAgcmV0dXJuIGNpcmNsZTtcbn1cblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2QzLWdlby1wcm9qZWN0aW9uL25vZGVfbW9kdWxlcy9kMy1nZW8vc3JjL2NpcmNsZS5qc1xuLy8gbW9kdWxlIGlkID0gLi9ub2RlX21vZHVsZXMvZDMtZ2VvLXByb2plY3Rpb24vbm9kZV9tb2R1bGVzL2QzLWdlby9zcmMvY2lyY2xlLmpzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCBjbGlwIGZyb20gXCIuL2luZGV4XCI7XG5pbXBvcnQge2FicywgYXRhbiwgY29zLCBlcHNpbG9uLCBoYWxmUGksIHBpLCBzaW59IGZyb20gXCIuLi9tYXRoXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsaXAoXG4gIGZ1bmN0aW9uKCkgeyByZXR1cm4gdHJ1ZTsgfSxcbiAgY2xpcEFudGltZXJpZGlhbkxpbmUsXG4gIGNsaXBBbnRpbWVyaWRpYW5JbnRlcnBvbGF0ZSxcbiAgWy1waSwgLWhhbGZQaV1cbik7XG5cbi8vIFRha2VzIGEgbGluZSBhbmQgY3V0cyBpbnRvIHZpc2libGUgc2VnbWVudHMuIFJldHVybiB2YWx1ZXM6IDAgLSB0aGVyZSB3ZXJlXG4vLyBpbnRlcnNlY3Rpb25zIG9yIHRoZSBsaW5lIHdhcyBlbXB0eTsgMSAtIG5vIGludGVyc2VjdGlvbnM7IDIgLSB0aGVyZSB3ZXJlXG4vLyBpbnRlcnNlY3Rpb25zLCBhbmQgdGhlIGZpcnN0IGFuZCBsYXN0IHNlZ21lbnRzIHNob3VsZCBiZSByZWpvaW5lZC5cbmZ1bmN0aW9uIGNsaXBBbnRpbWVyaWRpYW5MaW5lKHN0cmVhbSkge1xuICB2YXIgbGFtYmRhMCA9IE5hTixcbiAgICAgIHBoaTAgPSBOYU4sXG4gICAgICBzaWduMCA9IE5hTixcbiAgICAgIGNsZWFuOyAvLyBubyBpbnRlcnNlY3Rpb25zXG5cbiAgcmV0dXJuIHtcbiAgICBsaW5lU3RhcnQ6IGZ1bmN0aW9uKCkge1xuICAgICAgc3RyZWFtLmxpbmVTdGFydCgpO1xuICAgICAgY2xlYW4gPSAxO1xuICAgIH0sXG4gICAgcG9pbnQ6IGZ1bmN0aW9uKGxhbWJkYTEsIHBoaTEpIHtcbiAgICAgIHZhciBzaWduMSA9IGxhbWJkYTEgPiAwID8gcGkgOiAtcGksXG4gICAgICAgICAgZGVsdGEgPSBhYnMobGFtYmRhMSAtIGxhbWJkYTApO1xuICAgICAgaWYgKGFicyhkZWx0YSAtIHBpKSA8IGVwc2lsb24pIHsgLy8gbGluZSBjcm9zc2VzIGEgcG9sZVxuICAgICAgICBzdHJlYW0ucG9pbnQobGFtYmRhMCwgcGhpMCA9IChwaGkwICsgcGhpMSkgLyAyID4gMCA/IGhhbGZQaSA6IC1oYWxmUGkpO1xuICAgICAgICBzdHJlYW0ucG9pbnQoc2lnbjAsIHBoaTApO1xuICAgICAgICBzdHJlYW0ubGluZUVuZCgpO1xuICAgICAgICBzdHJlYW0ubGluZVN0YXJ0KCk7XG4gICAgICAgIHN0cmVhbS5wb2ludChzaWduMSwgcGhpMCk7XG4gICAgICAgIHN0cmVhbS5wb2ludChsYW1iZGExLCBwaGkwKTtcbiAgICAgICAgY2xlYW4gPSAwO1xuICAgICAgfSBlbHNlIGlmIChzaWduMCAhPT0gc2lnbjEgJiYgZGVsdGEgPj0gcGkpIHsgLy8gbGluZSBjcm9zc2VzIGFudGltZXJpZGlhblxuICAgICAgICBpZiAoYWJzKGxhbWJkYTAgLSBzaWduMCkgPCBlcHNpbG9uKSBsYW1iZGEwIC09IHNpZ24wICogZXBzaWxvbjsgLy8gaGFuZGxlIGRlZ2VuZXJhY2llc1xuICAgICAgICBpZiAoYWJzKGxhbWJkYTEgLSBzaWduMSkgPCBlcHNpbG9uKSBsYW1iZGExIC09IHNpZ24xICogZXBzaWxvbjtcbiAgICAgICAgcGhpMCA9IGNsaXBBbnRpbWVyaWRpYW5JbnRlcnNlY3QobGFtYmRhMCwgcGhpMCwgbGFtYmRhMSwgcGhpMSk7XG4gICAgICAgIHN0cmVhbS5wb2ludChzaWduMCwgcGhpMCk7XG4gICAgICAgIHN0cmVhbS5saW5lRW5kKCk7XG4gICAgICAgIHN0cmVhbS5saW5lU3RhcnQoKTtcbiAgICAgICAgc3RyZWFtLnBvaW50KHNpZ24xLCBwaGkwKTtcbiAgICAgICAgY2xlYW4gPSAwO1xuICAgICAgfVxuICAgICAgc3RyZWFtLnBvaW50KGxhbWJkYTAgPSBsYW1iZGExLCBwaGkwID0gcGhpMSk7XG4gICAgICBzaWduMCA9IHNpZ24xO1xuICAgIH0sXG4gICAgbGluZUVuZDogZnVuY3Rpb24oKSB7XG4gICAgICBzdHJlYW0ubGluZUVuZCgpO1xuICAgICAgbGFtYmRhMCA9IHBoaTAgPSBOYU47XG4gICAgfSxcbiAgICBjbGVhbjogZnVuY3Rpb24oKSB7XG4gICAgICByZXR1cm4gMiAtIGNsZWFuOyAvLyBpZiBpbnRlcnNlY3Rpb25zLCByZWpvaW4gZmlyc3QgYW5kIGxhc3Qgc2VnbWVudHNcbiAgICB9XG4gIH07XG59XG5cbmZ1bmN0aW9uIGNsaXBBbnRpbWVyaWRpYW5JbnRlcnNlY3QobGFtYmRhMCwgcGhpMCwgbGFtYmRhMSwgcGhpMSkge1xuICB2YXIgY29zUGhpMCxcbiAgICAgIGNvc1BoaTEsXG4gICAgICBzaW5MYW1iZGEwTGFtYmRhMSA9IHNpbihsYW1iZGEwIC0gbGFtYmRhMSk7XG4gIHJldHVybiBhYnMoc2luTGFtYmRhMExhbWJkYTEpID4gZXBzaWxvblxuICAgICAgPyBhdGFuKChzaW4ocGhpMCkgKiAoY29zUGhpMSA9IGNvcyhwaGkxKSkgKiBzaW4obGFtYmRhMSlcbiAgICAgICAgICAtIHNpbihwaGkxKSAqIChjb3NQaGkwID0gY29zKHBoaTApKSAqIHNpbihsYW1iZGEwKSlcbiAgICAgICAgICAvIChjb3NQaGkwICogY29zUGhpMSAqIHNpbkxhbWJkYTBMYW1iZGExKSlcbiAgICAgIDogKHBoaTAgKyBwaGkxKSAvIDI7XG59XG5cbmZ1bmN0aW9uIGNsaXBBbnRpbWVyaWRpYW5JbnRlcnBvbGF0ZShmcm9tLCB0bywgZGlyZWN0aW9uLCBzdHJlYW0pIHtcbiAgdmFyIHBoaTtcbiAgaWYgKGZyb20gPT0gbnVsbCkge1xuICAgIHBoaSA9IGRpcmVjdGlvbiAqIGhhbGZQaTtcbiAgICBzdHJlYW0ucG9pbnQoLXBpLCBwaGkpO1xuICAgIHN0cmVhbS5wb2ludCgwLCBwaGkpO1xuICAgIHN0cmVhbS5wb2ludChwaSwgcGhpKTtcbiAgICBzdHJlYW0ucG9pbnQocGksIDApO1xuICAgIHN0cmVhbS5wb2ludChwaSwgLXBoaSk7XG4gICAgc3RyZWFtLnBvaW50KDAsIC1waGkpO1xuICAgIHN0cmVhbS5wb2ludCgtcGksIC1waGkpO1xuICAgIHN0cmVhbS5wb2ludCgtcGksIDApO1xuICAgIHN0cmVhbS5wb2ludCgtcGksIHBoaSk7XG4gIH0gZWxzZSBpZiAoYWJzKGZyb21bMF0gLSB0b1swXSkgPiBlcHNpbG9uKSB7XG4gICAgdmFyIGxhbWJkYSA9IGZyb21bMF0gPCB0b1swXSA/IHBpIDogLXBpO1xuICAgIHBoaSA9IGRpcmVjdGlvbiAqIGxhbWJkYSAvIDI7XG4gICAgc3RyZWFtLnBvaW50KC1sYW1iZGEsIHBoaSk7XG4gICAgc3RyZWFtLnBvaW50KDAsIHBoaSk7XG4gICAgc3RyZWFtLnBvaW50KGxhbWJkYSwgcGhpKTtcbiAgfSBlbHNlIHtcbiAgICBzdHJlYW0ucG9pbnQodG9bMF0sIHRvWzFdKTtcbiAgfVxufVxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvZDMtZ2VvLXByb2plY3Rpb24vbm9kZV9tb2R1bGVzL2QzLWdlby9zcmMvY2xpcC9hbnRpbWVyaWRpYW4uanNcbi8vIG1vZHVsZSBpZCA9IC4vbm9kZV9tb2R1bGVzL2QzLWdlby1wcm9qZWN0aW9uL25vZGVfbW9kdWxlcy9kMy1nZW8vc3JjL2NsaXAvYW50aW1lcmlkaWFuLmpzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCBub29wIGZyb20gXCIuLi9ub29wXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKCkge1xuICB2YXIgbGluZXMgPSBbXSxcbiAgICAgIGxpbmU7XG4gIHJldHVybiB7XG4gICAgcG9pbnQ6IGZ1bmN0aW9uKHgsIHkpIHtcbiAgICAgIGxpbmUucHVzaChbeCwgeV0pO1xuICAgIH0sXG4gICAgbGluZVN0YXJ0OiBmdW5jdGlvbigpIHtcbiAgICAgIGxpbmVzLnB1c2gobGluZSA9IFtdKTtcbiAgICB9LFxuICAgIGxpbmVFbmQ6IG5vb3AsXG4gICAgcmVqb2luOiBmdW5jdGlvbigpIHtcbiAgICAgIGlmIChsaW5lcy5sZW5ndGggPiAxKSBsaW5lcy5wdXNoKGxpbmVzLnBvcCgpLmNvbmNhdChsaW5lcy5zaGlmdCgpKSk7XG4gICAgfSxcbiAgICByZXN1bHQ6IGZ1bmN0aW9uKCkge1xuICAgICAgdmFyIHJlc3VsdCA9IGxpbmVzO1xuICAgICAgbGluZXMgPSBbXTtcbiAgICAgIGxpbmUgPSBudWxsO1xuICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG4gIH07XG59XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9kMy1nZW8tcHJvamVjdGlvbi9ub2RlX21vZHVsZXMvZDMtZ2VvL3NyYy9jbGlwL2J1ZmZlci5qc1xuLy8gbW9kdWxlIGlkID0gLi9ub2RlX21vZHVsZXMvZDMtZ2VvLXByb2plY3Rpb24vbm9kZV9tb2R1bGVzL2QzLWdlby9zcmMvY2xpcC9idWZmZXIuanNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IHtjYXJ0ZXNpYW4sIGNhcnRlc2lhbkFkZEluUGxhY2UsIGNhcnRlc2lhbkNyb3NzLCBjYXJ0ZXNpYW5Eb3QsIGNhcnRlc2lhblNjYWxlLCBzcGhlcmljYWx9IGZyb20gXCIuLi9jYXJ0ZXNpYW5cIjtcbmltcG9ydCB7Y2lyY2xlU3RyZWFtfSBmcm9tIFwiLi4vY2lyY2xlXCI7XG5pbXBvcnQge2FicywgY29zLCBlcHNpbG9uLCBwaSwgcmFkaWFucywgc3FydH0gZnJvbSBcIi4uL21hdGhcIjtcbmltcG9ydCBwb2ludEVxdWFsIGZyb20gXCIuLi9wb2ludEVxdWFsXCI7XG5pbXBvcnQgY2xpcCBmcm9tIFwiLi9pbmRleFwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbihyYWRpdXMpIHtcbiAgdmFyIGNyID0gY29zKHJhZGl1cyksXG4gICAgICBkZWx0YSA9IDYgKiByYWRpYW5zLFxuICAgICAgc21hbGxSYWRpdXMgPSBjciA+IDAsXG4gICAgICBub3RIZW1pc3BoZXJlID0gYWJzKGNyKSA+IGVwc2lsb247IC8vIFRPRE8gb3B0aW1pc2UgZm9yIHRoaXMgY29tbW9uIGNhc2VcblxuICBmdW5jdGlvbiBpbnRlcnBvbGF0ZShmcm9tLCB0bywgZGlyZWN0aW9uLCBzdHJlYW0pIHtcbiAgICBjaXJjbGVTdHJlYW0oc3RyZWFtLCByYWRpdXMsIGRlbHRhLCBkaXJlY3Rpb24sIGZyb20sIHRvKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHZpc2libGUobGFtYmRhLCBwaGkpIHtcbiAgICByZXR1cm4gY29zKGxhbWJkYSkgKiBjb3MocGhpKSA+IGNyO1xuICB9XG5cbiAgLy8gVGFrZXMgYSBsaW5lIGFuZCBjdXRzIGludG8gdmlzaWJsZSBzZWdtZW50cy4gUmV0dXJuIHZhbHVlcyB1c2VkIGZvciBwb2x5Z29uXG4gIC8vIGNsaXBwaW5nOiAwIC0gdGhlcmUgd2VyZSBpbnRlcnNlY3Rpb25zIG9yIHRoZSBsaW5lIHdhcyBlbXB0eTsgMSAtIG5vXG4gIC8vIGludGVyc2VjdGlvbnMgMiAtIHRoZXJlIHdlcmUgaW50ZXJzZWN0aW9ucywgYW5kIHRoZSBmaXJzdCBhbmQgbGFzdCBzZWdtZW50c1xuICAvLyBzaG91bGQgYmUgcmVqb2luZWQuXG4gIGZ1bmN0aW9uIGNsaXBMaW5lKHN0cmVhbSkge1xuICAgIHZhciBwb2ludDAsIC8vIHByZXZpb3VzIHBvaW50XG4gICAgICAgIGMwLCAvLyBjb2RlIGZvciBwcmV2aW91cyBwb2ludFxuICAgICAgICB2MCwgLy8gdmlzaWJpbGl0eSBvZiBwcmV2aW91cyBwb2ludFxuICAgICAgICB2MDAsIC8vIHZpc2liaWxpdHkgb2YgZmlyc3QgcG9pbnRcbiAgICAgICAgY2xlYW47IC8vIG5vIGludGVyc2VjdGlvbnNcbiAgICByZXR1cm4ge1xuICAgICAgbGluZVN0YXJ0OiBmdW5jdGlvbigpIHtcbiAgICAgICAgdjAwID0gdjAgPSBmYWxzZTtcbiAgICAgICAgY2xlYW4gPSAxO1xuICAgICAgfSxcbiAgICAgIHBvaW50OiBmdW5jdGlvbihsYW1iZGEsIHBoaSkge1xuICAgICAgICB2YXIgcG9pbnQxID0gW2xhbWJkYSwgcGhpXSxcbiAgICAgICAgICAgIHBvaW50MixcbiAgICAgICAgICAgIHYgPSB2aXNpYmxlKGxhbWJkYSwgcGhpKSxcbiAgICAgICAgICAgIGMgPSBzbWFsbFJhZGl1c1xuICAgICAgICAgICAgICA/IHYgPyAwIDogY29kZShsYW1iZGEsIHBoaSlcbiAgICAgICAgICAgICAgOiB2ID8gY29kZShsYW1iZGEgKyAobGFtYmRhIDwgMCA/IHBpIDogLXBpKSwgcGhpKSA6IDA7XG4gICAgICAgIGlmICghcG9pbnQwICYmICh2MDAgPSB2MCA9IHYpKSBzdHJlYW0ubGluZVN0YXJ0KCk7XG4gICAgICAgIC8vIEhhbmRsZSBkZWdlbmVyYWNpZXMuXG4gICAgICAgIC8vIFRPRE8gaWdub3JlIGlmIG5vdCBjbGlwcGluZyBwb2x5Z29ucy5cbiAgICAgICAgaWYgKHYgIT09IHYwKSB7XG4gICAgICAgICAgcG9pbnQyID0gaW50ZXJzZWN0KHBvaW50MCwgcG9pbnQxKTtcbiAgICAgICAgICBpZiAoIXBvaW50MiB8fCBwb2ludEVxdWFsKHBvaW50MCwgcG9pbnQyKSB8fCBwb2ludEVxdWFsKHBvaW50MSwgcG9pbnQyKSkge1xuICAgICAgICAgICAgcG9pbnQxWzBdICs9IGVwc2lsb247XG4gICAgICAgICAgICBwb2ludDFbMV0gKz0gZXBzaWxvbjtcbiAgICAgICAgICAgIHYgPSB2aXNpYmxlKHBvaW50MVswXSwgcG9pbnQxWzFdKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHYgIT09IHYwKSB7XG4gICAgICAgICAgY2xlYW4gPSAwO1xuICAgICAgICAgIGlmICh2KSB7XG4gICAgICAgICAgICAvLyBvdXRzaWRlIGdvaW5nIGluXG4gICAgICAgICAgICBzdHJlYW0ubGluZVN0YXJ0KCk7XG4gICAgICAgICAgICBwb2ludDIgPSBpbnRlcnNlY3QocG9pbnQxLCBwb2ludDApO1xuICAgICAgICAgICAgc3RyZWFtLnBvaW50KHBvaW50MlswXSwgcG9pbnQyWzFdKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgLy8gaW5zaWRlIGdvaW5nIG91dFxuICAgICAgICAgICAgcG9pbnQyID0gaW50ZXJzZWN0KHBvaW50MCwgcG9pbnQxKTtcbiAgICAgICAgICAgIHN0cmVhbS5wb2ludChwb2ludDJbMF0sIHBvaW50MlsxXSk7XG4gICAgICAgICAgICBzdHJlYW0ubGluZUVuZCgpO1xuICAgICAgICAgIH1cbiAgICAgICAgICBwb2ludDAgPSBwb2ludDI7XG4gICAgICAgIH0gZWxzZSBpZiAobm90SGVtaXNwaGVyZSAmJiBwb2ludDAgJiYgc21hbGxSYWRpdXMgXiB2KSB7XG4gICAgICAgICAgdmFyIHQ7XG4gICAgICAgICAgLy8gSWYgdGhlIGNvZGVzIGZvciB0d28gcG9pbnRzIGFyZSBkaWZmZXJlbnQsIG9yIGFyZSBib3RoIHplcm8sXG4gICAgICAgICAgLy8gYW5kIHRoZXJlIHRoaXMgc2VnbWVudCBpbnRlcnNlY3RzIHdpdGggdGhlIHNtYWxsIGNpcmNsZS5cbiAgICAgICAgICBpZiAoIShjICYgYzApICYmICh0ID0gaW50ZXJzZWN0KHBvaW50MSwgcG9pbnQwLCB0cnVlKSkpIHtcbiAgICAgICAgICAgIGNsZWFuID0gMDtcbiAgICAgICAgICAgIGlmIChzbWFsbFJhZGl1cykge1xuICAgICAgICAgICAgICBzdHJlYW0ubGluZVN0YXJ0KCk7XG4gICAgICAgICAgICAgIHN0cmVhbS5wb2ludCh0WzBdWzBdLCB0WzBdWzFdKTtcbiAgICAgICAgICAgICAgc3RyZWFtLnBvaW50KHRbMV1bMF0sIHRbMV1bMV0pO1xuICAgICAgICAgICAgICBzdHJlYW0ubGluZUVuZCgpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgc3RyZWFtLnBvaW50KHRbMV1bMF0sIHRbMV1bMV0pO1xuICAgICAgICAgICAgICBzdHJlYW0ubGluZUVuZCgpO1xuICAgICAgICAgICAgICBzdHJlYW0ubGluZVN0YXJ0KCk7XG4gICAgICAgICAgICAgIHN0cmVhbS5wb2ludCh0WzBdWzBdLCB0WzBdWzFdKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHYgJiYgKCFwb2ludDAgfHwgIXBvaW50RXF1YWwocG9pbnQwLCBwb2ludDEpKSkge1xuICAgICAgICAgIHN0cmVhbS5wb2ludChwb2ludDFbMF0sIHBvaW50MVsxXSk7XG4gICAgICAgIH1cbiAgICAgICAgcG9pbnQwID0gcG9pbnQxLCB2MCA9IHYsIGMwID0gYztcbiAgICAgIH0sXG4gICAgICBsaW5lRW5kOiBmdW5jdGlvbigpIHtcbiAgICAgICAgaWYgKHYwKSBzdHJlYW0ubGluZUVuZCgpO1xuICAgICAgICBwb2ludDAgPSBudWxsO1xuICAgICAgfSxcbiAgICAgIC8vIFJlam9pbiBmaXJzdCBhbmQgbGFzdCBzZWdtZW50cyBpZiB0aGVyZSB3ZXJlIGludGVyc2VjdGlvbnMgYW5kIHRoZSBmaXJzdFxuICAgICAgLy8gYW5kIGxhc3QgcG9pbnRzIHdlcmUgdmlzaWJsZS5cbiAgICAgIGNsZWFuOiBmdW5jdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIGNsZWFuIHwgKCh2MDAgJiYgdjApIDw8IDEpO1xuICAgICAgfVxuICAgIH07XG4gIH1cblxuICAvLyBJbnRlcnNlY3RzIHRoZSBncmVhdCBjaXJjbGUgYmV0d2VlbiBhIGFuZCBiIHdpdGggdGhlIGNsaXAgY2lyY2xlLlxuICBmdW5jdGlvbiBpbnRlcnNlY3QoYSwgYiwgdHdvKSB7XG4gICAgdmFyIHBhID0gY2FydGVzaWFuKGEpLFxuICAgICAgICBwYiA9IGNhcnRlc2lhbihiKTtcblxuICAgIC8vIFdlIGhhdmUgdHdvIHBsYW5lcywgbjEucCA9IGQxIGFuZCBuMi5wID0gZDIuXG4gICAgLy8gRmluZCBpbnRlcnNlY3Rpb24gbGluZSBwKHQpID0gYzEgbjEgKyBjMiBuMiArIHQgKG4xIOKoryBuMikuXG4gICAgdmFyIG4xID0gWzEsIDAsIDBdLCAvLyBub3JtYWxcbiAgICAgICAgbjIgPSBjYXJ0ZXNpYW5Dcm9zcyhwYSwgcGIpLFxuICAgICAgICBuMm4yID0gY2FydGVzaWFuRG90KG4yLCBuMiksXG4gICAgICAgIG4xbjIgPSBuMlswXSwgLy8gY2FydGVzaWFuRG90KG4xLCBuMiksXG4gICAgICAgIGRldGVybWluYW50ID0gbjJuMiAtIG4xbjIgKiBuMW4yO1xuXG4gICAgLy8gVHdvIHBvbGFyIHBvaW50cy5cbiAgICBpZiAoIWRldGVybWluYW50KSByZXR1cm4gIXR3byAmJiBhO1xuXG4gICAgdmFyIGMxID0gIGNyICogbjJuMiAvIGRldGVybWluYW50LFxuICAgICAgICBjMiA9IC1jciAqIG4xbjIgLyBkZXRlcm1pbmFudCxcbiAgICAgICAgbjF4bjIgPSBjYXJ0ZXNpYW5Dcm9zcyhuMSwgbjIpLFxuICAgICAgICBBID0gY2FydGVzaWFuU2NhbGUobjEsIGMxKSxcbiAgICAgICAgQiA9IGNhcnRlc2lhblNjYWxlKG4yLCBjMik7XG4gICAgY2FydGVzaWFuQWRkSW5QbGFjZShBLCBCKTtcblxuICAgIC8vIFNvbHZlIHxwKHQpfF4yID0gMS5cbiAgICB2YXIgdSA9IG4xeG4yLFxuICAgICAgICB3ID0gY2FydGVzaWFuRG90KEEsIHUpLFxuICAgICAgICB1dSA9IGNhcnRlc2lhbkRvdCh1LCB1KSxcbiAgICAgICAgdDIgPSB3ICogdyAtIHV1ICogKGNhcnRlc2lhbkRvdChBLCBBKSAtIDEpO1xuXG4gICAgaWYgKHQyIDwgMCkgcmV0dXJuO1xuXG4gICAgdmFyIHQgPSBzcXJ0KHQyKSxcbiAgICAgICAgcSA9IGNhcnRlc2lhblNjYWxlKHUsICgtdyAtIHQpIC8gdXUpO1xuICAgIGNhcnRlc2lhbkFkZEluUGxhY2UocSwgQSk7XG4gICAgcSA9IHNwaGVyaWNhbChxKTtcblxuICAgIGlmICghdHdvKSByZXR1cm4gcTtcblxuICAgIC8vIFR3byBpbnRlcnNlY3Rpb24gcG9pbnRzLlxuICAgIHZhciBsYW1iZGEwID0gYVswXSxcbiAgICAgICAgbGFtYmRhMSA9IGJbMF0sXG4gICAgICAgIHBoaTAgPSBhWzFdLFxuICAgICAgICBwaGkxID0gYlsxXSxcbiAgICAgICAgejtcblxuICAgIGlmIChsYW1iZGExIDwgbGFtYmRhMCkgeiA9IGxhbWJkYTAsIGxhbWJkYTAgPSBsYW1iZGExLCBsYW1iZGExID0gejtcblxuICAgIHZhciBkZWx0YSA9IGxhbWJkYTEgLSBsYW1iZGEwLFxuICAgICAgICBwb2xhciA9IGFicyhkZWx0YSAtIHBpKSA8IGVwc2lsb24sXG4gICAgICAgIG1lcmlkaWFuID0gcG9sYXIgfHwgZGVsdGEgPCBlcHNpbG9uO1xuXG4gICAgaWYgKCFwb2xhciAmJiBwaGkxIDwgcGhpMCkgeiA9IHBoaTAsIHBoaTAgPSBwaGkxLCBwaGkxID0gejtcblxuICAgIC8vIENoZWNrIHRoYXQgdGhlIGZpcnN0IHBvaW50IGlzIGJldHdlZW4gYSBhbmQgYi5cbiAgICBpZiAobWVyaWRpYW5cbiAgICAgICAgPyBwb2xhclxuICAgICAgICAgID8gcGhpMCArIHBoaTEgPiAwIF4gcVsxXSA8IChhYnMocVswXSAtIGxhbWJkYTApIDwgZXBzaWxvbiA/IHBoaTAgOiBwaGkxKVxuICAgICAgICAgIDogcGhpMCA8PSBxWzFdICYmIHFbMV0gPD0gcGhpMVxuICAgICAgICA6IGRlbHRhID4gcGkgXiAobGFtYmRhMCA8PSBxWzBdICYmIHFbMF0gPD0gbGFtYmRhMSkpIHtcbiAgICAgIHZhciBxMSA9IGNhcnRlc2lhblNjYWxlKHUsICgtdyArIHQpIC8gdXUpO1xuICAgICAgY2FydGVzaWFuQWRkSW5QbGFjZShxMSwgQSk7XG4gICAgICByZXR1cm4gW3EsIHNwaGVyaWNhbChxMSldO1xuICAgIH1cbiAgfVxuXG4gIC8vIEdlbmVyYXRlcyBhIDQtYml0IHZlY3RvciByZXByZXNlbnRpbmcgdGhlIGxvY2F0aW9uIG9mIGEgcG9pbnQgcmVsYXRpdmUgdG9cbiAgLy8gdGhlIHNtYWxsIGNpcmNsZSdzIGJvdW5kaW5nIGJveC5cbiAgZnVuY3Rpb24gY29kZShsYW1iZGEsIHBoaSkge1xuICAgIHZhciByID0gc21hbGxSYWRpdXMgPyByYWRpdXMgOiBwaSAtIHJhZGl1cyxcbiAgICAgICAgY29kZSA9IDA7XG4gICAgaWYgKGxhbWJkYSA8IC1yKSBjb2RlIHw9IDE7IC8vIGxlZnRcbiAgICBlbHNlIGlmIChsYW1iZGEgPiByKSBjb2RlIHw9IDI7IC8vIHJpZ2h0XG4gICAgaWYgKHBoaSA8IC1yKSBjb2RlIHw9IDQ7IC8vIGJlbG93XG4gICAgZWxzZSBpZiAocGhpID4gcikgY29kZSB8PSA4OyAvLyBhYm92ZVxuICAgIHJldHVybiBjb2RlO1xuICB9XG5cbiAgcmV0dXJuIGNsaXAodmlzaWJsZSwgY2xpcExpbmUsIGludGVycG9sYXRlLCBzbWFsbFJhZGl1cyA/IFswLCAtcmFkaXVzXSA6IFstcGksIHJhZGl1cyAtIHBpXSk7XG59XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9kMy1nZW8tcHJvamVjdGlvbi9ub2RlX21vZHVsZXMvZDMtZ2VvL3NyYy9jbGlwL2NpcmNsZS5qc1xuLy8gbW9kdWxlIGlkID0gLi9ub2RlX21vZHVsZXMvZDMtZ2VvLXByb2plY3Rpb24vbm9kZV9tb2R1bGVzL2QzLWdlby9zcmMvY2xpcC9jaXJjbGUuanNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IGNsaXBSZWN0YW5nbGUgZnJvbSBcIi4vcmVjdGFuZ2xlXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKCkge1xuICB2YXIgeDAgPSAwLFxuICAgICAgeTAgPSAwLFxuICAgICAgeDEgPSA5NjAsXG4gICAgICB5MSA9IDUwMCxcbiAgICAgIGNhY2hlLFxuICAgICAgY2FjaGVTdHJlYW0sXG4gICAgICBjbGlwO1xuXG4gIHJldHVybiBjbGlwID0ge1xuICAgIHN0cmVhbTogZnVuY3Rpb24oc3RyZWFtKSB7XG4gICAgICByZXR1cm4gY2FjaGUgJiYgY2FjaGVTdHJlYW0gPT09IHN0cmVhbSA/IGNhY2hlIDogY2FjaGUgPSBjbGlwUmVjdGFuZ2xlKHgwLCB5MCwgeDEsIHkxKShjYWNoZVN0cmVhbSA9IHN0cmVhbSk7XG4gICAgfSxcbiAgICBleHRlbnQ6IGZ1bmN0aW9uKF8pIHtcbiAgICAgIHJldHVybiBhcmd1bWVudHMubGVuZ3RoID8gKHgwID0gK19bMF1bMF0sIHkwID0gK19bMF1bMV0sIHgxID0gK19bMV1bMF0sIHkxID0gK19bMV1bMV0sIGNhY2hlID0gY2FjaGVTdHJlYW0gPSBudWxsLCBjbGlwKSA6IFtbeDAsIHkwXSwgW3gxLCB5MV1dO1xuICAgIH1cbiAgfTtcbn1cblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2QzLWdlby1wcm9qZWN0aW9uL25vZGVfbW9kdWxlcy9kMy1nZW8vc3JjL2NsaXAvZXh0ZW50LmpzXG4vLyBtb2R1bGUgaWQgPSAuL25vZGVfbW9kdWxlcy9kMy1nZW8tcHJvamVjdGlvbi9ub2RlX21vZHVsZXMvZDMtZ2VvL3NyYy9jbGlwL2V4dGVudC5qc1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgY2xpcEJ1ZmZlciBmcm9tIFwiLi9idWZmZXJcIjtcbmltcG9ydCBjbGlwUmVqb2luIGZyb20gXCIuL3Jlam9pblwiO1xuaW1wb3J0IHtlcHNpbG9uLCBoYWxmUGl9IGZyb20gXCIuLi9tYXRoXCI7XG5pbXBvcnQgcG9seWdvbkNvbnRhaW5zIGZyb20gXCIuLi9wb2x5Z29uQ29udGFpbnNcIjtcbmltcG9ydCB7bWVyZ2V9IGZyb20gXCJkMy1hcnJheVwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbihwb2ludFZpc2libGUsIGNsaXBMaW5lLCBpbnRlcnBvbGF0ZSwgc3RhcnQpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uKHNpbmspIHtcbiAgICB2YXIgbGluZSA9IGNsaXBMaW5lKHNpbmspLFxuICAgICAgICByaW5nQnVmZmVyID0gY2xpcEJ1ZmZlcigpLFxuICAgICAgICByaW5nU2luayA9IGNsaXBMaW5lKHJpbmdCdWZmZXIpLFxuICAgICAgICBwb2x5Z29uU3RhcnRlZCA9IGZhbHNlLFxuICAgICAgICBwb2x5Z29uLFxuICAgICAgICBzZWdtZW50cyxcbiAgICAgICAgcmluZztcblxuICAgIHZhciBjbGlwID0ge1xuICAgICAgcG9pbnQ6IHBvaW50LFxuICAgICAgbGluZVN0YXJ0OiBsaW5lU3RhcnQsXG4gICAgICBsaW5lRW5kOiBsaW5lRW5kLFxuICAgICAgcG9seWdvblN0YXJ0OiBmdW5jdGlvbigpIHtcbiAgICAgICAgY2xpcC5wb2ludCA9IHBvaW50UmluZztcbiAgICAgICAgY2xpcC5saW5lU3RhcnQgPSByaW5nU3RhcnQ7XG4gICAgICAgIGNsaXAubGluZUVuZCA9IHJpbmdFbmQ7XG4gICAgICAgIHNlZ21lbnRzID0gW107XG4gICAgICAgIHBvbHlnb24gPSBbXTtcbiAgICAgIH0sXG4gICAgICBwb2x5Z29uRW5kOiBmdW5jdGlvbigpIHtcbiAgICAgICAgY2xpcC5wb2ludCA9IHBvaW50O1xuICAgICAgICBjbGlwLmxpbmVTdGFydCA9IGxpbmVTdGFydDtcbiAgICAgICAgY2xpcC5saW5lRW5kID0gbGluZUVuZDtcbiAgICAgICAgc2VnbWVudHMgPSBtZXJnZShzZWdtZW50cyk7XG4gICAgICAgIHZhciBzdGFydEluc2lkZSA9IHBvbHlnb25Db250YWlucyhwb2x5Z29uLCBzdGFydCk7XG4gICAgICAgIGlmIChzZWdtZW50cy5sZW5ndGgpIHtcbiAgICAgICAgICBpZiAoIXBvbHlnb25TdGFydGVkKSBzaW5rLnBvbHlnb25TdGFydCgpLCBwb2x5Z29uU3RhcnRlZCA9IHRydWU7XG4gICAgICAgICAgY2xpcFJlam9pbihzZWdtZW50cywgY29tcGFyZUludGVyc2VjdGlvbiwgc3RhcnRJbnNpZGUsIGludGVycG9sYXRlLCBzaW5rKTtcbiAgICAgICAgfSBlbHNlIGlmIChzdGFydEluc2lkZSkge1xuICAgICAgICAgIGlmICghcG9seWdvblN0YXJ0ZWQpIHNpbmsucG9seWdvblN0YXJ0KCksIHBvbHlnb25TdGFydGVkID0gdHJ1ZTtcbiAgICAgICAgICBzaW5rLmxpbmVTdGFydCgpO1xuICAgICAgICAgIGludGVycG9sYXRlKG51bGwsIG51bGwsIDEsIHNpbmspO1xuICAgICAgICAgIHNpbmsubGluZUVuZCgpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChwb2x5Z29uU3RhcnRlZCkgc2luay5wb2x5Z29uRW5kKCksIHBvbHlnb25TdGFydGVkID0gZmFsc2U7XG4gICAgICAgIHNlZ21lbnRzID0gcG9seWdvbiA9IG51bGw7XG4gICAgICB9LFxuICAgICAgc3BoZXJlOiBmdW5jdGlvbigpIHtcbiAgICAgICAgc2luay5wb2x5Z29uU3RhcnQoKTtcbiAgICAgICAgc2luay5saW5lU3RhcnQoKTtcbiAgICAgICAgaW50ZXJwb2xhdGUobnVsbCwgbnVsbCwgMSwgc2luayk7XG4gICAgICAgIHNpbmsubGluZUVuZCgpO1xuICAgICAgICBzaW5rLnBvbHlnb25FbmQoKTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgZnVuY3Rpb24gcG9pbnQobGFtYmRhLCBwaGkpIHtcbiAgICAgIGlmIChwb2ludFZpc2libGUobGFtYmRhLCBwaGkpKSBzaW5rLnBvaW50KGxhbWJkYSwgcGhpKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBwb2ludExpbmUobGFtYmRhLCBwaGkpIHtcbiAgICAgIGxpbmUucG9pbnQobGFtYmRhLCBwaGkpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGxpbmVTdGFydCgpIHtcbiAgICAgIGNsaXAucG9pbnQgPSBwb2ludExpbmU7XG4gICAgICBsaW5lLmxpbmVTdGFydCgpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGxpbmVFbmQoKSB7XG4gICAgICBjbGlwLnBvaW50ID0gcG9pbnQ7XG4gICAgICBsaW5lLmxpbmVFbmQoKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBwb2ludFJpbmcobGFtYmRhLCBwaGkpIHtcbiAgICAgIHJpbmcucHVzaChbbGFtYmRhLCBwaGldKTtcbiAgICAgIHJpbmdTaW5rLnBvaW50KGxhbWJkYSwgcGhpKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiByaW5nU3RhcnQoKSB7XG4gICAgICByaW5nU2luay5saW5lU3RhcnQoKTtcbiAgICAgIHJpbmcgPSBbXTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiByaW5nRW5kKCkge1xuICAgICAgcG9pbnRSaW5nKHJpbmdbMF1bMF0sIHJpbmdbMF1bMV0pO1xuICAgICAgcmluZ1NpbmsubGluZUVuZCgpO1xuXG4gICAgICB2YXIgY2xlYW4gPSByaW5nU2luay5jbGVhbigpLFxuICAgICAgICAgIHJpbmdTZWdtZW50cyA9IHJpbmdCdWZmZXIucmVzdWx0KCksXG4gICAgICAgICAgaSwgbiA9IHJpbmdTZWdtZW50cy5sZW5ndGgsIG0sXG4gICAgICAgICAgc2VnbWVudCxcbiAgICAgICAgICBwb2ludDtcblxuICAgICAgcmluZy5wb3AoKTtcbiAgICAgIHBvbHlnb24ucHVzaChyaW5nKTtcbiAgICAgIHJpbmcgPSBudWxsO1xuXG4gICAgICBpZiAoIW4pIHJldHVybjtcblxuICAgICAgLy8gTm8gaW50ZXJzZWN0aW9ucy5cbiAgICAgIGlmIChjbGVhbiAmIDEpIHtcbiAgICAgICAgc2VnbWVudCA9IHJpbmdTZWdtZW50c1swXTtcbiAgICAgICAgaWYgKChtID0gc2VnbWVudC5sZW5ndGggLSAxKSA+IDApIHtcbiAgICAgICAgICBpZiAoIXBvbHlnb25TdGFydGVkKSBzaW5rLnBvbHlnb25TdGFydCgpLCBwb2x5Z29uU3RhcnRlZCA9IHRydWU7XG4gICAgICAgICAgc2luay5saW5lU3RhcnQoKTtcbiAgICAgICAgICBmb3IgKGkgPSAwOyBpIDwgbTsgKytpKSBzaW5rLnBvaW50KChwb2ludCA9IHNlZ21lbnRbaV0pWzBdLCBwb2ludFsxXSk7XG4gICAgICAgICAgc2luay5saW5lRW5kKCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICAvLyBSZWpvaW4gY29ubmVjdGVkIHNlZ21lbnRzLlxuICAgICAgLy8gVE9ETyByZXVzZSByaW5nQnVmZmVyLnJlam9pbigpP1xuICAgICAgaWYgKG4gPiAxICYmIGNsZWFuICYgMikgcmluZ1NlZ21lbnRzLnB1c2gocmluZ1NlZ21lbnRzLnBvcCgpLmNvbmNhdChyaW5nU2VnbWVudHMuc2hpZnQoKSkpO1xuXG4gICAgICBzZWdtZW50cy5wdXNoKHJpbmdTZWdtZW50cy5maWx0ZXIodmFsaWRTZWdtZW50KSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGNsaXA7XG4gIH07XG59XG5cbmZ1bmN0aW9uIHZhbGlkU2VnbWVudChzZWdtZW50KSB7XG4gIHJldHVybiBzZWdtZW50Lmxlbmd0aCA+IDE7XG59XG5cbi8vIEludGVyc2VjdGlvbnMgYXJlIHNvcnRlZCBhbG9uZyB0aGUgY2xpcCBlZGdlLiBGb3IgYm90aCBhbnRpbWVyaWRpYW4gY3V0dGluZ1xuLy8gYW5kIGNpcmNsZSBjbGlwcGluZywgdGhlIHNhbWUgY29tcGFyaXNvbiBpcyB1c2VkLlxuZnVuY3Rpb24gY29tcGFyZUludGVyc2VjdGlvbihhLCBiKSB7XG4gIHJldHVybiAoKGEgPSBhLngpWzBdIDwgMCA/IGFbMV0gLSBoYWxmUGkgLSBlcHNpbG9uIDogaGFsZlBpIC0gYVsxXSlcbiAgICAgICAtICgoYiA9IGIueClbMF0gPCAwID8gYlsxXSAtIGhhbGZQaSAtIGVwc2lsb24gOiBoYWxmUGkgLSBiWzFdKTtcbn1cblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2QzLWdlby1wcm9qZWN0aW9uL25vZGVfbW9kdWxlcy9kMy1nZW8vc3JjL2NsaXAvaW5kZXguanNcbi8vIG1vZHVsZSBpZCA9IC4vbm9kZV9tb2R1bGVzL2QzLWdlby1wcm9qZWN0aW9uL25vZGVfbW9kdWxlcy9kMy1nZW8vc3JjL2NsaXAvaW5kZXguanNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oYSwgYiwgeDAsIHkwLCB4MSwgeTEpIHtcbiAgdmFyIGF4ID0gYVswXSxcbiAgICAgIGF5ID0gYVsxXSxcbiAgICAgIGJ4ID0gYlswXSxcbiAgICAgIGJ5ID0gYlsxXSxcbiAgICAgIHQwID0gMCxcbiAgICAgIHQxID0gMSxcbiAgICAgIGR4ID0gYnggLSBheCxcbiAgICAgIGR5ID0gYnkgLSBheSxcbiAgICAgIHI7XG5cbiAgciA9IHgwIC0gYXg7XG4gIGlmICghZHggJiYgciA+IDApIHJldHVybjtcbiAgciAvPSBkeDtcbiAgaWYgKGR4IDwgMCkge1xuICAgIGlmIChyIDwgdDApIHJldHVybjtcbiAgICBpZiAociA8IHQxKSB0MSA9IHI7XG4gIH0gZWxzZSBpZiAoZHggPiAwKSB7XG4gICAgaWYgKHIgPiB0MSkgcmV0dXJuO1xuICAgIGlmIChyID4gdDApIHQwID0gcjtcbiAgfVxuXG4gIHIgPSB4MSAtIGF4O1xuICBpZiAoIWR4ICYmIHIgPCAwKSByZXR1cm47XG4gIHIgLz0gZHg7XG4gIGlmIChkeCA8IDApIHtcbiAgICBpZiAociA+IHQxKSByZXR1cm47XG4gICAgaWYgKHIgPiB0MCkgdDAgPSByO1xuICB9IGVsc2UgaWYgKGR4ID4gMCkge1xuICAgIGlmIChyIDwgdDApIHJldHVybjtcbiAgICBpZiAociA8IHQxKSB0MSA9IHI7XG4gIH1cblxuICByID0geTAgLSBheTtcbiAgaWYgKCFkeSAmJiByID4gMCkgcmV0dXJuO1xuICByIC89IGR5O1xuICBpZiAoZHkgPCAwKSB7XG4gICAgaWYgKHIgPCB0MCkgcmV0dXJuO1xuICAgIGlmIChyIDwgdDEpIHQxID0gcjtcbiAgfSBlbHNlIGlmIChkeSA+IDApIHtcbiAgICBpZiAociA+IHQxKSByZXR1cm47XG4gICAgaWYgKHIgPiB0MCkgdDAgPSByO1xuICB9XG5cbiAgciA9IHkxIC0gYXk7XG4gIGlmICghZHkgJiYgciA8IDApIHJldHVybjtcbiAgciAvPSBkeTtcbiAgaWYgKGR5IDwgMCkge1xuICAgIGlmIChyID4gdDEpIHJldHVybjtcbiAgICBpZiAociA+IHQwKSB0MCA9IHI7XG4gIH0gZWxzZSBpZiAoZHkgPiAwKSB7XG4gICAgaWYgKHIgPCB0MCkgcmV0dXJuO1xuICAgIGlmIChyIDwgdDEpIHQxID0gcjtcbiAgfVxuXG4gIGlmICh0MCA+IDApIGFbMF0gPSBheCArIHQwICogZHgsIGFbMV0gPSBheSArIHQwICogZHk7XG4gIGlmICh0MSA8IDEpIGJbMF0gPSBheCArIHQxICogZHgsIGJbMV0gPSBheSArIHQxICogZHk7XG4gIHJldHVybiB0cnVlO1xufVxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvZDMtZ2VvLXByb2plY3Rpb24vbm9kZV9tb2R1bGVzL2QzLWdlby9zcmMvY2xpcC9saW5lLmpzXG4vLyBtb2R1bGUgaWQgPSAuL25vZGVfbW9kdWxlcy9kMy1nZW8tcHJvamVjdGlvbi9ub2RlX21vZHVsZXMvZDMtZ2VvL3NyYy9jbGlwL2xpbmUuanNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IHthYnMsIGVwc2lsb259IGZyb20gXCIuLi9tYXRoXCI7XG5pbXBvcnQgY2xpcEJ1ZmZlciBmcm9tIFwiLi9idWZmZXJcIjtcbmltcG9ydCBjbGlwTGluZSBmcm9tIFwiLi9saW5lXCI7XG5pbXBvcnQgY2xpcFJlam9pbiBmcm9tIFwiLi9yZWpvaW5cIjtcbmltcG9ydCB7bWVyZ2V9IGZyb20gXCJkMy1hcnJheVwiO1xuXG52YXIgY2xpcE1heCA9IDFlOSwgY2xpcE1pbiA9IC1jbGlwTWF4O1xuXG4vLyBUT0RPIFVzZSBkMy1wb2x5Z29u4oCZcyBwb2x5Z29uQ29udGFpbnMgaGVyZSBmb3IgdGhlIHJpbmcgY2hlY2s/XG4vLyBUT0RPIEVsaW1pbmF0ZSBkdXBsaWNhdGUgYnVmZmVyaW5nIGluIGNsaXBCdWZmZXIgYW5kIHBvbHlnb24ucHVzaD9cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY2xpcFJlY3RhbmdsZSh4MCwgeTAsIHgxLCB5MSkge1xuXG4gIGZ1bmN0aW9uIHZpc2libGUoeCwgeSkge1xuICAgIHJldHVybiB4MCA8PSB4ICYmIHggPD0geDEgJiYgeTAgPD0geSAmJiB5IDw9IHkxO1xuICB9XG5cbiAgZnVuY3Rpb24gaW50ZXJwb2xhdGUoZnJvbSwgdG8sIGRpcmVjdGlvbiwgc3RyZWFtKSB7XG4gICAgdmFyIGEgPSAwLCBhMSA9IDA7XG4gICAgaWYgKGZyb20gPT0gbnVsbFxuICAgICAgICB8fCAoYSA9IGNvcm5lcihmcm9tLCBkaXJlY3Rpb24pKSAhPT0gKGExID0gY29ybmVyKHRvLCBkaXJlY3Rpb24pKVxuICAgICAgICB8fCBjb21wYXJlUG9pbnQoZnJvbSwgdG8pIDwgMCBeIGRpcmVjdGlvbiA+IDApIHtcbiAgICAgIGRvIHN0cmVhbS5wb2ludChhID09PSAwIHx8IGEgPT09IDMgPyB4MCA6IHgxLCBhID4gMSA/IHkxIDogeTApO1xuICAgICAgd2hpbGUgKChhID0gKGEgKyBkaXJlY3Rpb24gKyA0KSAlIDQpICE9PSBhMSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHN0cmVhbS5wb2ludCh0b1swXSwgdG9bMV0pO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIGNvcm5lcihwLCBkaXJlY3Rpb24pIHtcbiAgICByZXR1cm4gYWJzKHBbMF0gLSB4MCkgPCBlcHNpbG9uID8gZGlyZWN0aW9uID4gMCA/IDAgOiAzXG4gICAgICAgIDogYWJzKHBbMF0gLSB4MSkgPCBlcHNpbG9uID8gZGlyZWN0aW9uID4gMCA/IDIgOiAxXG4gICAgICAgIDogYWJzKHBbMV0gLSB5MCkgPCBlcHNpbG9uID8gZGlyZWN0aW9uID4gMCA/IDEgOiAwXG4gICAgICAgIDogZGlyZWN0aW9uID4gMCA/IDMgOiAyOyAvLyBhYnMocFsxXSAtIHkxKSA8IGVwc2lsb25cbiAgfVxuXG4gIGZ1bmN0aW9uIGNvbXBhcmVJbnRlcnNlY3Rpb24oYSwgYikge1xuICAgIHJldHVybiBjb21wYXJlUG9pbnQoYS54LCBiLngpO1xuICB9XG5cbiAgZnVuY3Rpb24gY29tcGFyZVBvaW50KGEsIGIpIHtcbiAgICB2YXIgY2EgPSBjb3JuZXIoYSwgMSksXG4gICAgICAgIGNiID0gY29ybmVyKGIsIDEpO1xuICAgIHJldHVybiBjYSAhPT0gY2IgPyBjYSAtIGNiXG4gICAgICAgIDogY2EgPT09IDAgPyBiWzFdIC0gYVsxXVxuICAgICAgICA6IGNhID09PSAxID8gYVswXSAtIGJbMF1cbiAgICAgICAgOiBjYSA9PT0gMiA/IGFbMV0gLSBiWzFdXG4gICAgICAgIDogYlswXSAtIGFbMF07XG4gIH1cblxuICByZXR1cm4gZnVuY3Rpb24oc3RyZWFtKSB7XG4gICAgdmFyIGFjdGl2ZVN0cmVhbSA9IHN0cmVhbSxcbiAgICAgICAgYnVmZmVyU3RyZWFtID0gY2xpcEJ1ZmZlcigpLFxuICAgICAgICBzZWdtZW50cyxcbiAgICAgICAgcG9seWdvbixcbiAgICAgICAgcmluZyxcbiAgICAgICAgeF9fLCB5X18sIHZfXywgLy8gZmlyc3QgcG9pbnRcbiAgICAgICAgeF8sIHlfLCB2XywgLy8gcHJldmlvdXMgcG9pbnRcbiAgICAgICAgZmlyc3QsXG4gICAgICAgIGNsZWFuO1xuXG4gICAgdmFyIGNsaXBTdHJlYW0gPSB7XG4gICAgICBwb2ludDogcG9pbnQsXG4gICAgICBsaW5lU3RhcnQ6IGxpbmVTdGFydCxcbiAgICAgIGxpbmVFbmQ6IGxpbmVFbmQsXG4gICAgICBwb2x5Z29uU3RhcnQ6IHBvbHlnb25TdGFydCxcbiAgICAgIHBvbHlnb25FbmQ6IHBvbHlnb25FbmRcbiAgICB9O1xuXG4gICAgZnVuY3Rpb24gcG9pbnQoeCwgeSkge1xuICAgICAgaWYgKHZpc2libGUoeCwgeSkpIGFjdGl2ZVN0cmVhbS5wb2ludCh4LCB5KTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBwb2x5Z29uSW5zaWRlKCkge1xuICAgICAgdmFyIHdpbmRpbmcgPSAwO1xuXG4gICAgICBmb3IgKHZhciBpID0gMCwgbiA9IHBvbHlnb24ubGVuZ3RoOyBpIDwgbjsgKytpKSB7XG4gICAgICAgIGZvciAodmFyIHJpbmcgPSBwb2x5Z29uW2ldLCBqID0gMSwgbSA9IHJpbmcubGVuZ3RoLCBwb2ludCA9IHJpbmdbMF0sIGEwLCBhMSwgYjAgPSBwb2ludFswXSwgYjEgPSBwb2ludFsxXTsgaiA8IG07ICsraikge1xuICAgICAgICAgIGEwID0gYjAsIGExID0gYjEsIHBvaW50ID0gcmluZ1tqXSwgYjAgPSBwb2ludFswXSwgYjEgPSBwb2ludFsxXTtcbiAgICAgICAgICBpZiAoYTEgPD0geTEpIHsgaWYgKGIxID4geTEgJiYgKGIwIC0gYTApICogKHkxIC0gYTEpID4gKGIxIC0gYTEpICogKHgwIC0gYTApKSArK3dpbmRpbmc7IH1cbiAgICAgICAgICBlbHNlIHsgaWYgKGIxIDw9IHkxICYmIChiMCAtIGEwKSAqICh5MSAtIGExKSA8IChiMSAtIGExKSAqICh4MCAtIGEwKSkgLS13aW5kaW5nOyB9XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHdpbmRpbmc7XG4gICAgfVxuXG4gICAgLy8gQnVmZmVyIGdlb21ldHJ5IHdpdGhpbiBhIHBvbHlnb24gYW5kIHRoZW4gY2xpcCBpdCBlbiBtYXNzZS5cbiAgICBmdW5jdGlvbiBwb2x5Z29uU3RhcnQoKSB7XG4gICAgICBhY3RpdmVTdHJlYW0gPSBidWZmZXJTdHJlYW0sIHNlZ21lbnRzID0gW10sIHBvbHlnb24gPSBbXSwgY2xlYW4gPSB0cnVlO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHBvbHlnb25FbmQoKSB7XG4gICAgICB2YXIgc3RhcnRJbnNpZGUgPSBwb2x5Z29uSW5zaWRlKCksXG4gICAgICAgICAgY2xlYW5JbnNpZGUgPSBjbGVhbiAmJiBzdGFydEluc2lkZSxcbiAgICAgICAgICB2aXNpYmxlID0gKHNlZ21lbnRzID0gbWVyZ2Uoc2VnbWVudHMpKS5sZW5ndGg7XG4gICAgICBpZiAoY2xlYW5JbnNpZGUgfHwgdmlzaWJsZSkge1xuICAgICAgICBzdHJlYW0ucG9seWdvblN0YXJ0KCk7XG4gICAgICAgIGlmIChjbGVhbkluc2lkZSkge1xuICAgICAgICAgIHN0cmVhbS5saW5lU3RhcnQoKTtcbiAgICAgICAgICBpbnRlcnBvbGF0ZShudWxsLCBudWxsLCAxLCBzdHJlYW0pO1xuICAgICAgICAgIHN0cmVhbS5saW5lRW5kKCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHZpc2libGUpIHtcbiAgICAgICAgICBjbGlwUmVqb2luKHNlZ21lbnRzLCBjb21wYXJlSW50ZXJzZWN0aW9uLCBzdGFydEluc2lkZSwgaW50ZXJwb2xhdGUsIHN0cmVhbSk7XG4gICAgICAgIH1cbiAgICAgICAgc3RyZWFtLnBvbHlnb25FbmQoKTtcbiAgICAgIH1cbiAgICAgIGFjdGl2ZVN0cmVhbSA9IHN0cmVhbSwgc2VnbWVudHMgPSBwb2x5Z29uID0gcmluZyA9IG51bGw7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gbGluZVN0YXJ0KCkge1xuICAgICAgY2xpcFN0cmVhbS5wb2ludCA9IGxpbmVQb2ludDtcbiAgICAgIGlmIChwb2x5Z29uKSBwb2x5Z29uLnB1c2gocmluZyA9IFtdKTtcbiAgICAgIGZpcnN0ID0gdHJ1ZTtcbiAgICAgIHZfID0gZmFsc2U7XG4gICAgICB4XyA9IHlfID0gTmFOO1xuICAgIH1cblxuICAgIC8vIFRPRE8gcmF0aGVyIHRoYW4gc3BlY2lhbC1jYXNlIHBvbHlnb25zLCBzaW1wbHkgaGFuZGxlIHRoZW0gc2VwYXJhdGVseS5cbiAgICAvLyBJZGVhbGx5LCBjb2luY2lkZW50IGludGVyc2VjdGlvbiBwb2ludHMgc2hvdWxkIGJlIGppdHRlcmVkIHRvIGF2b2lkXG4gICAgLy8gY2xpcHBpbmcgaXNzdWVzLlxuICAgIGZ1bmN0aW9uIGxpbmVFbmQoKSB7XG4gICAgICBpZiAoc2VnbWVudHMpIHtcbiAgICAgICAgbGluZVBvaW50KHhfXywgeV9fKTtcbiAgICAgICAgaWYgKHZfXyAmJiB2XykgYnVmZmVyU3RyZWFtLnJlam9pbigpO1xuICAgICAgICBzZWdtZW50cy5wdXNoKGJ1ZmZlclN0cmVhbS5yZXN1bHQoKSk7XG4gICAgICB9XG4gICAgICBjbGlwU3RyZWFtLnBvaW50ID0gcG9pbnQ7XG4gICAgICBpZiAodl8pIGFjdGl2ZVN0cmVhbS5saW5lRW5kKCk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gbGluZVBvaW50KHgsIHkpIHtcbiAgICAgIHZhciB2ID0gdmlzaWJsZSh4LCB5KTtcbiAgICAgIGlmIChwb2x5Z29uKSByaW5nLnB1c2goW3gsIHldKTtcbiAgICAgIGlmIChmaXJzdCkge1xuICAgICAgICB4X18gPSB4LCB5X18gPSB5LCB2X18gPSB2O1xuICAgICAgICBmaXJzdCA9IGZhbHNlO1xuICAgICAgICBpZiAodikge1xuICAgICAgICAgIGFjdGl2ZVN0cmVhbS5saW5lU3RhcnQoKTtcbiAgICAgICAgICBhY3RpdmVTdHJlYW0ucG9pbnQoeCwgeSk7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGlmICh2ICYmIHZfKSBhY3RpdmVTdHJlYW0ucG9pbnQoeCwgeSk7XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgIHZhciBhID0gW3hfID0gTWF0aC5tYXgoY2xpcE1pbiwgTWF0aC5taW4oY2xpcE1heCwgeF8pKSwgeV8gPSBNYXRoLm1heChjbGlwTWluLCBNYXRoLm1pbihjbGlwTWF4LCB5XykpXSxcbiAgICAgICAgICAgICAgYiA9IFt4ID0gTWF0aC5tYXgoY2xpcE1pbiwgTWF0aC5taW4oY2xpcE1heCwgeCkpLCB5ID0gTWF0aC5tYXgoY2xpcE1pbiwgTWF0aC5taW4oY2xpcE1heCwgeSkpXTtcbiAgICAgICAgICBpZiAoY2xpcExpbmUoYSwgYiwgeDAsIHkwLCB4MSwgeTEpKSB7XG4gICAgICAgICAgICBpZiAoIXZfKSB7XG4gICAgICAgICAgICAgIGFjdGl2ZVN0cmVhbS5saW5lU3RhcnQoKTtcbiAgICAgICAgICAgICAgYWN0aXZlU3RyZWFtLnBvaW50KGFbMF0sIGFbMV0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgYWN0aXZlU3RyZWFtLnBvaW50KGJbMF0sIGJbMV0pO1xuICAgICAgICAgICAgaWYgKCF2KSBhY3RpdmVTdHJlYW0ubGluZUVuZCgpO1xuICAgICAgICAgICAgY2xlYW4gPSBmYWxzZTtcbiAgICAgICAgICB9IGVsc2UgaWYgKHYpIHtcbiAgICAgICAgICAgIGFjdGl2ZVN0cmVhbS5saW5lU3RhcnQoKTtcbiAgICAgICAgICAgIGFjdGl2ZVN0cmVhbS5wb2ludCh4LCB5KTtcbiAgICAgICAgICAgIGNsZWFuID0gZmFsc2U7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICB4XyA9IHgsIHlfID0geSwgdl8gPSB2O1xuICAgIH1cblxuICAgIHJldHVybiBjbGlwU3RyZWFtO1xuICB9O1xufVxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvZDMtZ2VvLXByb2plY3Rpb24vbm9kZV9tb2R1bGVzL2QzLWdlby9zcmMvY2xpcC9yZWN0YW5nbGUuanNcbi8vIG1vZHVsZSBpZCA9IC4vbm9kZV9tb2R1bGVzL2QzLWdlby1wcm9qZWN0aW9uL25vZGVfbW9kdWxlcy9kMy1nZW8vc3JjL2NsaXAvcmVjdGFuZ2xlLmpzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCBwb2ludEVxdWFsIGZyb20gXCIuLi9wb2ludEVxdWFsXCI7XG5cbmZ1bmN0aW9uIEludGVyc2VjdGlvbihwb2ludCwgcG9pbnRzLCBvdGhlciwgZW50cnkpIHtcbiAgdGhpcy54ID0gcG9pbnQ7XG4gIHRoaXMueiA9IHBvaW50cztcbiAgdGhpcy5vID0gb3RoZXI7IC8vIGFub3RoZXIgaW50ZXJzZWN0aW9uXG4gIHRoaXMuZSA9IGVudHJ5OyAvLyBpcyBhbiBlbnRyeT9cbiAgdGhpcy52ID0gZmFsc2U7IC8vIHZpc2l0ZWRcbiAgdGhpcy5uID0gdGhpcy5wID0gbnVsbDsgLy8gbmV4dCAmIHByZXZpb3VzXG59XG5cbi8vIEEgZ2VuZXJhbGl6ZWQgcG9seWdvbiBjbGlwcGluZyBhbGdvcml0aG06IGdpdmVuIGEgcG9seWdvbiB0aGF0IGhhcyBiZWVuIGN1dFxuLy8gaW50byBpdHMgdmlzaWJsZSBsaW5lIHNlZ21lbnRzLCBhbmQgcmVqb2lucyB0aGUgc2VnbWVudHMgYnkgaW50ZXJwb2xhdGluZ1xuLy8gYWxvbmcgdGhlIGNsaXAgZWRnZS5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKHNlZ21lbnRzLCBjb21wYXJlSW50ZXJzZWN0aW9uLCBzdGFydEluc2lkZSwgaW50ZXJwb2xhdGUsIHN0cmVhbSkge1xuICB2YXIgc3ViamVjdCA9IFtdLFxuICAgICAgY2xpcCA9IFtdLFxuICAgICAgaSxcbiAgICAgIG47XG5cbiAgc2VnbWVudHMuZm9yRWFjaChmdW5jdGlvbihzZWdtZW50KSB7XG4gICAgaWYgKChuID0gc2VnbWVudC5sZW5ndGggLSAxKSA8PSAwKSByZXR1cm47XG4gICAgdmFyIG4sIHAwID0gc2VnbWVudFswXSwgcDEgPSBzZWdtZW50W25dLCB4O1xuXG4gICAgLy8gSWYgdGhlIGZpcnN0IGFuZCBsYXN0IHBvaW50cyBvZiBhIHNlZ21lbnQgYXJlIGNvaW5jaWRlbnQsIHRoZW4gdHJlYXQgYXMgYVxuICAgIC8vIGNsb3NlZCByaW5nLiBUT0RPIGlmIGFsbCByaW5ncyBhcmUgY2xvc2VkLCB0aGVuIHRoZSB3aW5kaW5nIG9yZGVyIG9mIHRoZVxuICAgIC8vIGV4dGVyaW9yIHJpbmcgc2hvdWxkIGJlIGNoZWNrZWQuXG4gICAgaWYgKHBvaW50RXF1YWwocDAsIHAxKSkge1xuICAgICAgc3RyZWFtLmxpbmVTdGFydCgpO1xuICAgICAgZm9yIChpID0gMDsgaSA8IG47ICsraSkgc3RyZWFtLnBvaW50KChwMCA9IHNlZ21lbnRbaV0pWzBdLCBwMFsxXSk7XG4gICAgICBzdHJlYW0ubGluZUVuZCgpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHN1YmplY3QucHVzaCh4ID0gbmV3IEludGVyc2VjdGlvbihwMCwgc2VnbWVudCwgbnVsbCwgdHJ1ZSkpO1xuICAgIGNsaXAucHVzaCh4Lm8gPSBuZXcgSW50ZXJzZWN0aW9uKHAwLCBudWxsLCB4LCBmYWxzZSkpO1xuICAgIHN1YmplY3QucHVzaCh4ID0gbmV3IEludGVyc2VjdGlvbihwMSwgc2VnbWVudCwgbnVsbCwgZmFsc2UpKTtcbiAgICBjbGlwLnB1c2goeC5vID0gbmV3IEludGVyc2VjdGlvbihwMSwgbnVsbCwgeCwgdHJ1ZSkpO1xuICB9KTtcblxuICBpZiAoIXN1YmplY3QubGVuZ3RoKSByZXR1cm47XG5cbiAgY2xpcC5zb3J0KGNvbXBhcmVJbnRlcnNlY3Rpb24pO1xuICBsaW5rKHN1YmplY3QpO1xuICBsaW5rKGNsaXApO1xuXG4gIGZvciAoaSA9IDAsIG4gPSBjbGlwLmxlbmd0aDsgaSA8IG47ICsraSkge1xuICAgIGNsaXBbaV0uZSA9IHN0YXJ0SW5zaWRlID0gIXN0YXJ0SW5zaWRlO1xuICB9XG5cbiAgdmFyIHN0YXJ0ID0gc3ViamVjdFswXSxcbiAgICAgIHBvaW50cyxcbiAgICAgIHBvaW50O1xuXG4gIHdoaWxlICgxKSB7XG4gICAgLy8gRmluZCBmaXJzdCB1bnZpc2l0ZWQgaW50ZXJzZWN0aW9uLlxuICAgIHZhciBjdXJyZW50ID0gc3RhcnQsXG4gICAgICAgIGlzU3ViamVjdCA9IHRydWU7XG4gICAgd2hpbGUgKGN1cnJlbnQudikgaWYgKChjdXJyZW50ID0gY3VycmVudC5uKSA9PT0gc3RhcnQpIHJldHVybjtcbiAgICBwb2ludHMgPSBjdXJyZW50Lno7XG4gICAgc3RyZWFtLmxpbmVTdGFydCgpO1xuICAgIGRvIHtcbiAgICAgIGN1cnJlbnQudiA9IGN1cnJlbnQuby52ID0gdHJ1ZTtcbiAgICAgIGlmIChjdXJyZW50LmUpIHtcbiAgICAgICAgaWYgKGlzU3ViamVjdCkge1xuICAgICAgICAgIGZvciAoaSA9IDAsIG4gPSBwb2ludHMubGVuZ3RoOyBpIDwgbjsgKytpKSBzdHJlYW0ucG9pbnQoKHBvaW50ID0gcG9pbnRzW2ldKVswXSwgcG9pbnRbMV0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGludGVycG9sYXRlKGN1cnJlbnQueCwgY3VycmVudC5uLngsIDEsIHN0cmVhbSk7XG4gICAgICAgIH1cbiAgICAgICAgY3VycmVudCA9IGN1cnJlbnQubjtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGlmIChpc1N1YmplY3QpIHtcbiAgICAgICAgICBwb2ludHMgPSBjdXJyZW50LnAuejtcbiAgICAgICAgICBmb3IgKGkgPSBwb2ludHMubGVuZ3RoIC0gMTsgaSA+PSAwOyAtLWkpIHN0cmVhbS5wb2ludCgocG9pbnQgPSBwb2ludHNbaV0pWzBdLCBwb2ludFsxXSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaW50ZXJwb2xhdGUoY3VycmVudC54LCBjdXJyZW50LnAueCwgLTEsIHN0cmVhbSk7XG4gICAgICAgIH1cbiAgICAgICAgY3VycmVudCA9IGN1cnJlbnQucDtcbiAgICAgIH1cbiAgICAgIGN1cnJlbnQgPSBjdXJyZW50Lm87XG4gICAgICBwb2ludHMgPSBjdXJyZW50Lno7XG4gICAgICBpc1N1YmplY3QgPSAhaXNTdWJqZWN0O1xuICAgIH0gd2hpbGUgKCFjdXJyZW50LnYpO1xuICAgIHN0cmVhbS5saW5lRW5kKCk7XG4gIH1cbn1cblxuZnVuY3Rpb24gbGluayhhcnJheSkge1xuICBpZiAoIShuID0gYXJyYXkubGVuZ3RoKSkgcmV0dXJuO1xuICB2YXIgbixcbiAgICAgIGkgPSAwLFxuICAgICAgYSA9IGFycmF5WzBdLFxuICAgICAgYjtcbiAgd2hpbGUgKCsraSA8IG4pIHtcbiAgICBhLm4gPSBiID0gYXJyYXlbaV07XG4gICAgYi5wID0gYTtcbiAgICBhID0gYjtcbiAgfVxuICBhLm4gPSBiID0gYXJyYXlbMF07XG4gIGIucCA9IGE7XG59XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9kMy1nZW8tcHJvamVjdGlvbi9ub2RlX21vZHVsZXMvZDMtZ2VvL3NyYy9jbGlwL3Jlam9pbi5qc1xuLy8gbW9kdWxlIGlkID0gLi9ub2RlX21vZHVsZXMvZDMtZ2VvLXByb2plY3Rpb24vbm9kZV9tb2R1bGVzL2QzLWdlby9zcmMvY2xpcC9yZWpvaW4uanNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oYSwgYikge1xuXG4gIGZ1bmN0aW9uIGNvbXBvc2UoeCwgeSkge1xuICAgIHJldHVybiB4ID0gYSh4LCB5KSwgYih4WzBdLCB4WzFdKTtcbiAgfVxuXG4gIGlmIChhLmludmVydCAmJiBiLmludmVydCkgY29tcG9zZS5pbnZlcnQgPSBmdW5jdGlvbih4LCB5KSB7XG4gICAgcmV0dXJuIHggPSBiLmludmVydCh4LCB5KSwgeCAmJiBhLmludmVydCh4WzBdLCB4WzFdKTtcbiAgfTtcblxuICByZXR1cm4gY29tcG9zZTtcbn1cblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2QzLWdlby1wcm9qZWN0aW9uL25vZGVfbW9kdWxlcy9kMy1nZW8vc3JjL2NvbXBvc2UuanNcbi8vIG1vZHVsZSBpZCA9IC4vbm9kZV9tb2R1bGVzL2QzLWdlby1wcm9qZWN0aW9uL25vZGVfbW9kdWxlcy9kMy1nZW8vc3JjL2NvbXBvc2UuanNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oeCkge1xuICByZXR1cm4gZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIHg7XG4gIH07XG59XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9kMy1nZW8tcHJvamVjdGlvbi9ub2RlX21vZHVsZXMvZDMtZ2VvL3NyYy9jb25zdGFudC5qc1xuLy8gbW9kdWxlIGlkID0gLi9ub2RlX21vZHVsZXMvZDMtZ2VvLXByb2plY3Rpb24vbm9kZV9tb2R1bGVzL2QzLWdlby9zcmMvY29uc3RhbnQuanNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IHtkZWZhdWx0IGFzIHBvbHlnb25Db250YWluc30gZnJvbSBcIi4vcG9seWdvbkNvbnRhaW5zXCI7XG5pbXBvcnQge2RlZmF1bHQgYXMgZGlzdGFuY2V9IGZyb20gXCIuL2Rpc3RhbmNlXCI7XG5pbXBvcnQge2Vwc2lsb24sIHJhZGlhbnN9IGZyb20gXCIuL21hdGhcIjtcblxudmFyIGNvbnRhaW5zT2JqZWN0VHlwZSA9IHtcbiAgRmVhdHVyZTogZnVuY3Rpb24ob2JqZWN0LCBwb2ludCkge1xuICAgIHJldHVybiBjb250YWluc0dlb21ldHJ5KG9iamVjdC5nZW9tZXRyeSwgcG9pbnQpO1xuICB9LFxuICBGZWF0dXJlQ29sbGVjdGlvbjogZnVuY3Rpb24ob2JqZWN0LCBwb2ludCkge1xuICAgIHZhciBmZWF0dXJlcyA9IG9iamVjdC5mZWF0dXJlcywgaSA9IC0xLCBuID0gZmVhdHVyZXMubGVuZ3RoO1xuICAgIHdoaWxlICgrK2kgPCBuKSBpZiAoY29udGFpbnNHZW9tZXRyeShmZWF0dXJlc1tpXS5nZW9tZXRyeSwgcG9pbnQpKSByZXR1cm4gdHJ1ZTtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbn07XG5cbnZhciBjb250YWluc0dlb21ldHJ5VHlwZSA9IHtcbiAgU3BoZXJlOiBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfSxcbiAgUG9pbnQ6IGZ1bmN0aW9uKG9iamVjdCwgcG9pbnQpIHtcbiAgICByZXR1cm4gY29udGFpbnNQb2ludChvYmplY3QuY29vcmRpbmF0ZXMsIHBvaW50KTtcbiAgfSxcbiAgTXVsdGlQb2ludDogZnVuY3Rpb24ob2JqZWN0LCBwb2ludCkge1xuICAgIHZhciBjb29yZGluYXRlcyA9IG9iamVjdC5jb29yZGluYXRlcywgaSA9IC0xLCBuID0gY29vcmRpbmF0ZXMubGVuZ3RoO1xuICAgIHdoaWxlICgrK2kgPCBuKSBpZiAoY29udGFpbnNQb2ludChjb29yZGluYXRlc1tpXSwgcG9pbnQpKSByZXR1cm4gdHJ1ZTtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH0sXG4gIExpbmVTdHJpbmc6IGZ1bmN0aW9uKG9iamVjdCwgcG9pbnQpIHtcbiAgICByZXR1cm4gY29udGFpbnNMaW5lKG9iamVjdC5jb29yZGluYXRlcywgcG9pbnQpO1xuICB9LFxuICBNdWx0aUxpbmVTdHJpbmc6IGZ1bmN0aW9uKG9iamVjdCwgcG9pbnQpIHtcbiAgICB2YXIgY29vcmRpbmF0ZXMgPSBvYmplY3QuY29vcmRpbmF0ZXMsIGkgPSAtMSwgbiA9IGNvb3JkaW5hdGVzLmxlbmd0aDtcbiAgICB3aGlsZSAoKytpIDwgbikgaWYgKGNvbnRhaW5zTGluZShjb29yZGluYXRlc1tpXSwgcG9pbnQpKSByZXR1cm4gdHJ1ZTtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH0sXG4gIFBvbHlnb246IGZ1bmN0aW9uKG9iamVjdCwgcG9pbnQpIHtcbiAgICByZXR1cm4gY29udGFpbnNQb2x5Z29uKG9iamVjdC5jb29yZGluYXRlcywgcG9pbnQpO1xuICB9LFxuICBNdWx0aVBvbHlnb246IGZ1bmN0aW9uKG9iamVjdCwgcG9pbnQpIHtcbiAgICB2YXIgY29vcmRpbmF0ZXMgPSBvYmplY3QuY29vcmRpbmF0ZXMsIGkgPSAtMSwgbiA9IGNvb3JkaW5hdGVzLmxlbmd0aDtcbiAgICB3aGlsZSAoKytpIDwgbikgaWYgKGNvbnRhaW5zUG9seWdvbihjb29yZGluYXRlc1tpXSwgcG9pbnQpKSByZXR1cm4gdHJ1ZTtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH0sXG4gIEdlb21ldHJ5Q29sbGVjdGlvbjogZnVuY3Rpb24ob2JqZWN0LCBwb2ludCkge1xuICAgIHZhciBnZW9tZXRyaWVzID0gb2JqZWN0Lmdlb21ldHJpZXMsIGkgPSAtMSwgbiA9IGdlb21ldHJpZXMubGVuZ3RoO1xuICAgIHdoaWxlICgrK2kgPCBuKSBpZiAoY29udGFpbnNHZW9tZXRyeShnZW9tZXRyaWVzW2ldLCBwb2ludCkpIHJldHVybiB0cnVlO1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxufTtcblxuZnVuY3Rpb24gY29udGFpbnNHZW9tZXRyeShnZW9tZXRyeSwgcG9pbnQpIHtcbiAgcmV0dXJuIGdlb21ldHJ5ICYmIGNvbnRhaW5zR2VvbWV0cnlUeXBlLmhhc093blByb3BlcnR5KGdlb21ldHJ5LnR5cGUpXG4gICAgICA/IGNvbnRhaW5zR2VvbWV0cnlUeXBlW2dlb21ldHJ5LnR5cGVdKGdlb21ldHJ5LCBwb2ludClcbiAgICAgIDogZmFsc2U7XG59XG5cbmZ1bmN0aW9uIGNvbnRhaW5zUG9pbnQoY29vcmRpbmF0ZXMsIHBvaW50KSB7XG4gIHJldHVybiBkaXN0YW5jZShjb29yZGluYXRlcywgcG9pbnQpID09PSAwO1xufVxuXG5mdW5jdGlvbiBjb250YWluc0xpbmUoY29vcmRpbmF0ZXMsIHBvaW50KSB7XG4gIHZhciBhYiA9IGRpc3RhbmNlKGNvb3JkaW5hdGVzWzBdLCBjb29yZGluYXRlc1sxXSksXG4gICAgICBhbyA9IGRpc3RhbmNlKGNvb3JkaW5hdGVzWzBdLCBwb2ludCksXG4gICAgICBvYiA9IGRpc3RhbmNlKHBvaW50LCBjb29yZGluYXRlc1sxXSk7XG4gIHJldHVybiBhbyArIG9iIDw9IGFiICsgZXBzaWxvbjtcbn1cblxuZnVuY3Rpb24gY29udGFpbnNQb2x5Z29uKGNvb3JkaW5hdGVzLCBwb2ludCkge1xuICByZXR1cm4gISFwb2x5Z29uQ29udGFpbnMoY29vcmRpbmF0ZXMubWFwKHJpbmdSYWRpYW5zKSwgcG9pbnRSYWRpYW5zKHBvaW50KSk7XG59XG5cbmZ1bmN0aW9uIHJpbmdSYWRpYW5zKHJpbmcpIHtcbiAgcmV0dXJuIHJpbmcgPSByaW5nLm1hcChwb2ludFJhZGlhbnMpLCByaW5nLnBvcCgpLCByaW5nO1xufVxuXG5mdW5jdGlvbiBwb2ludFJhZGlhbnMocG9pbnQpIHtcbiAgcmV0dXJuIFtwb2ludFswXSAqIHJhZGlhbnMsIHBvaW50WzFdICogcmFkaWFuc107XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKG9iamVjdCwgcG9pbnQpIHtcbiAgcmV0dXJuIChvYmplY3QgJiYgY29udGFpbnNPYmplY3RUeXBlLmhhc093blByb3BlcnR5KG9iamVjdC50eXBlKVxuICAgICAgPyBjb250YWluc09iamVjdFR5cGVbb2JqZWN0LnR5cGVdXG4gICAgICA6IGNvbnRhaW5zR2VvbWV0cnkpKG9iamVjdCwgcG9pbnQpO1xufVxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvZDMtZ2VvLXByb2plY3Rpb24vbm9kZV9tb2R1bGVzL2QzLWdlby9zcmMvY29udGFpbnMuanNcbi8vIG1vZHVsZSBpZCA9IC4vbm9kZV9tb2R1bGVzL2QzLWdlby1wcm9qZWN0aW9uL25vZGVfbW9kdWxlcy9kMy1nZW8vc3JjL2NvbnRhaW5zLmpzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCBsZW5ndGggZnJvbSBcIi4vbGVuZ3RoXCI7XG5cbnZhciBjb29yZGluYXRlcyA9IFtudWxsLCBudWxsXSxcbiAgICBvYmplY3QgPSB7dHlwZTogXCJMaW5lU3RyaW5nXCIsIGNvb3JkaW5hdGVzOiBjb29yZGluYXRlc307XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKGEsIGIpIHtcbiAgY29vcmRpbmF0ZXNbMF0gPSBhO1xuICBjb29yZGluYXRlc1sxXSA9IGI7XG4gIHJldHVybiBsZW5ndGgob2JqZWN0KTtcbn1cblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2QzLWdlby1wcm9qZWN0aW9uL25vZGVfbW9kdWxlcy9kMy1nZW8vc3JjL2Rpc3RhbmNlLmpzXG4vLyBtb2R1bGUgaWQgPSAuL25vZGVfbW9kdWxlcy9kMy1nZW8tcHJvamVjdGlvbi9ub2RlX21vZHVsZXMvZDMtZ2VvL3NyYy9kaXN0YW5jZS5qc1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQge3JhbmdlfSBmcm9tIFwiZDMtYXJyYXlcIjtcbmltcG9ydCB7YWJzLCBjZWlsLCBlcHNpbG9ufSBmcm9tIFwiLi9tYXRoXCI7XG5cbmZ1bmN0aW9uIGdyYXRpY3VsZVgoeTAsIHkxLCBkeSkge1xuICB2YXIgeSA9IHJhbmdlKHkwLCB5MSAtIGVwc2lsb24sIGR5KS5jb25jYXQoeTEpO1xuICByZXR1cm4gZnVuY3Rpb24oeCkgeyByZXR1cm4geS5tYXAoZnVuY3Rpb24oeSkgeyByZXR1cm4gW3gsIHldOyB9KTsgfTtcbn1cblxuZnVuY3Rpb24gZ3JhdGljdWxlWSh4MCwgeDEsIGR4KSB7XG4gIHZhciB4ID0gcmFuZ2UoeDAsIHgxIC0gZXBzaWxvbiwgZHgpLmNvbmNhdCh4MSk7XG4gIHJldHVybiBmdW5jdGlvbih5KSB7IHJldHVybiB4Lm1hcChmdW5jdGlvbih4KSB7IHJldHVybiBbeCwgeV07IH0pOyB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBncmF0aWN1bGUoKSB7XG4gIHZhciB4MSwgeDAsIFgxLCBYMCxcbiAgICAgIHkxLCB5MCwgWTEsIFkwLFxuICAgICAgZHggPSAxMCwgZHkgPSBkeCwgRFggPSA5MCwgRFkgPSAzNjAsXG4gICAgICB4LCB5LCBYLCBZLFxuICAgICAgcHJlY2lzaW9uID0gMi41O1xuXG4gIGZ1bmN0aW9uIGdyYXRpY3VsZSgpIHtcbiAgICByZXR1cm4ge3R5cGU6IFwiTXVsdGlMaW5lU3RyaW5nXCIsIGNvb3JkaW5hdGVzOiBsaW5lcygpfTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGxpbmVzKCkge1xuICAgIHJldHVybiByYW5nZShjZWlsKFgwIC8gRFgpICogRFgsIFgxLCBEWCkubWFwKFgpXG4gICAgICAgIC5jb25jYXQocmFuZ2UoY2VpbChZMCAvIERZKSAqIERZLCBZMSwgRFkpLm1hcChZKSlcbiAgICAgICAgLmNvbmNhdChyYW5nZShjZWlsKHgwIC8gZHgpICogZHgsIHgxLCBkeCkuZmlsdGVyKGZ1bmN0aW9uKHgpIHsgcmV0dXJuIGFicyh4ICUgRFgpID4gZXBzaWxvbjsgfSkubWFwKHgpKVxuICAgICAgICAuY29uY2F0KHJhbmdlKGNlaWwoeTAgLyBkeSkgKiBkeSwgeTEsIGR5KS5maWx0ZXIoZnVuY3Rpb24oeSkgeyByZXR1cm4gYWJzKHkgJSBEWSkgPiBlcHNpbG9uOyB9KS5tYXAoeSkpO1xuICB9XG5cbiAgZ3JhdGljdWxlLmxpbmVzID0gZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIGxpbmVzKCkubWFwKGZ1bmN0aW9uKGNvb3JkaW5hdGVzKSB7IHJldHVybiB7dHlwZTogXCJMaW5lU3RyaW5nXCIsIGNvb3JkaW5hdGVzOiBjb29yZGluYXRlc307IH0pO1xuICB9O1xuXG4gIGdyYXRpY3VsZS5vdXRsaW5lID0gZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHR5cGU6IFwiUG9seWdvblwiLFxuICAgICAgY29vcmRpbmF0ZXM6IFtcbiAgICAgICAgWChYMCkuY29uY2F0KFxuICAgICAgICBZKFkxKS5zbGljZSgxKSxcbiAgICAgICAgWChYMSkucmV2ZXJzZSgpLnNsaWNlKDEpLFxuICAgICAgICBZKFkwKS5yZXZlcnNlKCkuc2xpY2UoMSkpXG4gICAgICBdXG4gICAgfTtcbiAgfTtcblxuICBncmF0aWN1bGUuZXh0ZW50ID0gZnVuY3Rpb24oXykge1xuICAgIGlmICghYXJndW1lbnRzLmxlbmd0aCkgcmV0dXJuIGdyYXRpY3VsZS5leHRlbnRNaW5vcigpO1xuICAgIHJldHVybiBncmF0aWN1bGUuZXh0ZW50TWFqb3IoXykuZXh0ZW50TWlub3IoXyk7XG4gIH07XG5cbiAgZ3JhdGljdWxlLmV4dGVudE1ham9yID0gZnVuY3Rpb24oXykge1xuICAgIGlmICghYXJndW1lbnRzLmxlbmd0aCkgcmV0dXJuIFtbWDAsIFkwXSwgW1gxLCBZMV1dO1xuICAgIFgwID0gK19bMF1bMF0sIFgxID0gK19bMV1bMF07XG4gICAgWTAgPSArX1swXVsxXSwgWTEgPSArX1sxXVsxXTtcbiAgICBpZiAoWDAgPiBYMSkgXyA9IFgwLCBYMCA9IFgxLCBYMSA9IF87XG4gICAgaWYgKFkwID4gWTEpIF8gPSBZMCwgWTAgPSBZMSwgWTEgPSBfO1xuICAgIHJldHVybiBncmF0aWN1bGUucHJlY2lzaW9uKHByZWNpc2lvbik7XG4gIH07XG5cbiAgZ3JhdGljdWxlLmV4dGVudE1pbm9yID0gZnVuY3Rpb24oXykge1xuICAgIGlmICghYXJndW1lbnRzLmxlbmd0aCkgcmV0dXJuIFtbeDAsIHkwXSwgW3gxLCB5MV1dO1xuICAgIHgwID0gK19bMF1bMF0sIHgxID0gK19bMV1bMF07XG4gICAgeTAgPSArX1swXVsxXSwgeTEgPSArX1sxXVsxXTtcbiAgICBpZiAoeDAgPiB4MSkgXyA9IHgwLCB4MCA9IHgxLCB4MSA9IF87XG4gICAgaWYgKHkwID4geTEpIF8gPSB5MCwgeTAgPSB5MSwgeTEgPSBfO1xuICAgIHJldHVybiBncmF0aWN1bGUucHJlY2lzaW9uKHByZWNpc2lvbik7XG4gIH07XG5cbiAgZ3JhdGljdWxlLnN0ZXAgPSBmdW5jdGlvbihfKSB7XG4gICAgaWYgKCFhcmd1bWVudHMubGVuZ3RoKSByZXR1cm4gZ3JhdGljdWxlLnN0ZXBNaW5vcigpO1xuICAgIHJldHVybiBncmF0aWN1bGUuc3RlcE1ham9yKF8pLnN0ZXBNaW5vcihfKTtcbiAgfTtcblxuICBncmF0aWN1bGUuc3RlcE1ham9yID0gZnVuY3Rpb24oXykge1xuICAgIGlmICghYXJndW1lbnRzLmxlbmd0aCkgcmV0dXJuIFtEWCwgRFldO1xuICAgIERYID0gK19bMF0sIERZID0gK19bMV07XG4gICAgcmV0dXJuIGdyYXRpY3VsZTtcbiAgfTtcblxuICBncmF0aWN1bGUuc3RlcE1pbm9yID0gZnVuY3Rpb24oXykge1xuICAgIGlmICghYXJndW1lbnRzLmxlbmd0aCkgcmV0dXJuIFtkeCwgZHldO1xuICAgIGR4ID0gK19bMF0sIGR5ID0gK19bMV07XG4gICAgcmV0dXJuIGdyYXRpY3VsZTtcbiAgfTtcblxuICBncmF0aWN1bGUucHJlY2lzaW9uID0gZnVuY3Rpb24oXykge1xuICAgIGlmICghYXJndW1lbnRzLmxlbmd0aCkgcmV0dXJuIHByZWNpc2lvbjtcbiAgICBwcmVjaXNpb24gPSArXztcbiAgICB4ID0gZ3JhdGljdWxlWCh5MCwgeTEsIDkwKTtcbiAgICB5ID0gZ3JhdGljdWxlWSh4MCwgeDEsIHByZWNpc2lvbik7XG4gICAgWCA9IGdyYXRpY3VsZVgoWTAsIFkxLCA5MCk7XG4gICAgWSA9IGdyYXRpY3VsZVkoWDAsIFgxLCBwcmVjaXNpb24pO1xuICAgIHJldHVybiBncmF0aWN1bGU7XG4gIH07XG5cbiAgcmV0dXJuIGdyYXRpY3VsZVxuICAgICAgLmV4dGVudE1ham9yKFtbLTE4MCwgLTkwICsgZXBzaWxvbl0sIFsxODAsIDkwIC0gZXBzaWxvbl1dKVxuICAgICAgLmV4dGVudE1pbm9yKFtbLTE4MCwgLTgwIC0gZXBzaWxvbl0sIFsxODAsIDgwICsgZXBzaWxvbl1dKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdyYXRpY3VsZTEwKCkge1xuICByZXR1cm4gZ3JhdGljdWxlKCkoKTtcbn1cblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2QzLWdlby1wcm9qZWN0aW9uL25vZGVfbW9kdWxlcy9kMy1nZW8vc3JjL2dyYXRpY3VsZS5qc1xuLy8gbW9kdWxlIGlkID0gLi9ub2RlX21vZHVsZXMvZDMtZ2VvLXByb2plY3Rpb24vbm9kZV9tb2R1bGVzL2QzLWdlby9zcmMvZ3JhdGljdWxlLmpzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKHgpIHtcbiAgcmV0dXJuIHg7XG59XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9kMy1nZW8tcHJvamVjdGlvbi9ub2RlX21vZHVsZXMvZDMtZ2VvL3NyYy9pZGVudGl0eS5qc1xuLy8gbW9kdWxlIGlkID0gLi9ub2RlX21vZHVsZXMvZDMtZ2VvLXByb2plY3Rpb24vbm9kZV9tb2R1bGVzL2QzLWdlby9zcmMvaWRlbnRpdHkuanNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IHthc2luLCBhdGFuMiwgY29zLCBkZWdyZWVzLCBoYXZlcnNpbiwgcmFkaWFucywgc2luLCBzcXJ0fSBmcm9tIFwiLi9tYXRoXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKGEsIGIpIHtcbiAgdmFyIHgwID0gYVswXSAqIHJhZGlhbnMsXG4gICAgICB5MCA9IGFbMV0gKiByYWRpYW5zLFxuICAgICAgeDEgPSBiWzBdICogcmFkaWFucyxcbiAgICAgIHkxID0gYlsxXSAqIHJhZGlhbnMsXG4gICAgICBjeTAgPSBjb3MoeTApLFxuICAgICAgc3kwID0gc2luKHkwKSxcbiAgICAgIGN5MSA9IGNvcyh5MSksXG4gICAgICBzeTEgPSBzaW4oeTEpLFxuICAgICAga3gwID0gY3kwICogY29zKHgwKSxcbiAgICAgIGt5MCA9IGN5MCAqIHNpbih4MCksXG4gICAgICBreDEgPSBjeTEgKiBjb3MoeDEpLFxuICAgICAga3kxID0gY3kxICogc2luKHgxKSxcbiAgICAgIGQgPSAyICogYXNpbihzcXJ0KGhhdmVyc2luKHkxIC0geTApICsgY3kwICogY3kxICogaGF2ZXJzaW4oeDEgLSB4MCkpKSxcbiAgICAgIGsgPSBzaW4oZCk7XG5cbiAgdmFyIGludGVycG9sYXRlID0gZCA/IGZ1bmN0aW9uKHQpIHtcbiAgICB2YXIgQiA9IHNpbih0ICo9IGQpIC8gayxcbiAgICAgICAgQSA9IHNpbihkIC0gdCkgLyBrLFxuICAgICAgICB4ID0gQSAqIGt4MCArIEIgKiBreDEsXG4gICAgICAgIHkgPSBBICoga3kwICsgQiAqIGt5MSxcbiAgICAgICAgeiA9IEEgKiBzeTAgKyBCICogc3kxO1xuICAgIHJldHVybiBbXG4gICAgICBhdGFuMih5LCB4KSAqIGRlZ3JlZXMsXG4gICAgICBhdGFuMih6LCBzcXJ0KHggKiB4ICsgeSAqIHkpKSAqIGRlZ3JlZXNcbiAgICBdO1xuICB9IDogZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIFt4MCAqIGRlZ3JlZXMsIHkwICogZGVncmVlc107XG4gIH07XG5cbiAgaW50ZXJwb2xhdGUuZGlzdGFuY2UgPSBkO1xuXG4gIHJldHVybiBpbnRlcnBvbGF0ZTtcbn1cblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2QzLWdlby1wcm9qZWN0aW9uL25vZGVfbW9kdWxlcy9kMy1nZW8vc3JjL2ludGVycG9sYXRlLmpzXG4vLyBtb2R1bGUgaWQgPSAuL25vZGVfbW9kdWxlcy9kMy1nZW8tcHJvamVjdGlvbi9ub2RlX21vZHVsZXMvZDMtZ2VvL3NyYy9pbnRlcnBvbGF0ZS5qc1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgYWRkZXIgZnJvbSBcIi4vYWRkZXJcIjtcbmltcG9ydCB7YWJzLCBhdGFuMiwgY29zLCByYWRpYW5zLCBzaW4sIHNxcnR9IGZyb20gXCIuL21hdGhcIjtcbmltcG9ydCBub29wIGZyb20gXCIuL25vb3BcIjtcbmltcG9ydCBzdHJlYW0gZnJvbSBcIi4vc3RyZWFtXCI7XG5cbnZhciBsZW5ndGhTdW0gPSBhZGRlcigpLFxuICAgIGxhbWJkYTAsXG4gICAgc2luUGhpMCxcbiAgICBjb3NQaGkwO1xuXG52YXIgbGVuZ3RoU3RyZWFtID0ge1xuICBzcGhlcmU6IG5vb3AsXG4gIHBvaW50OiBub29wLFxuICBsaW5lU3RhcnQ6IGxlbmd0aExpbmVTdGFydCxcbiAgbGluZUVuZDogbm9vcCxcbiAgcG9seWdvblN0YXJ0OiBub29wLFxuICBwb2x5Z29uRW5kOiBub29wXG59O1xuXG5mdW5jdGlvbiBsZW5ndGhMaW5lU3RhcnQoKSB7XG4gIGxlbmd0aFN0cmVhbS5wb2ludCA9IGxlbmd0aFBvaW50Rmlyc3Q7XG4gIGxlbmd0aFN0cmVhbS5saW5lRW5kID0gbGVuZ3RoTGluZUVuZDtcbn1cblxuZnVuY3Rpb24gbGVuZ3RoTGluZUVuZCgpIHtcbiAgbGVuZ3RoU3RyZWFtLnBvaW50ID0gbGVuZ3RoU3RyZWFtLmxpbmVFbmQgPSBub29wO1xufVxuXG5mdW5jdGlvbiBsZW5ndGhQb2ludEZpcnN0KGxhbWJkYSwgcGhpKSB7XG4gIGxhbWJkYSAqPSByYWRpYW5zLCBwaGkgKj0gcmFkaWFucztcbiAgbGFtYmRhMCA9IGxhbWJkYSwgc2luUGhpMCA9IHNpbihwaGkpLCBjb3NQaGkwID0gY29zKHBoaSk7XG4gIGxlbmd0aFN0cmVhbS5wb2ludCA9IGxlbmd0aFBvaW50O1xufVxuXG5mdW5jdGlvbiBsZW5ndGhQb2ludChsYW1iZGEsIHBoaSkge1xuICBsYW1iZGEgKj0gcmFkaWFucywgcGhpICo9IHJhZGlhbnM7XG4gIHZhciBzaW5QaGkgPSBzaW4ocGhpKSxcbiAgICAgIGNvc1BoaSA9IGNvcyhwaGkpLFxuICAgICAgZGVsdGEgPSBhYnMobGFtYmRhIC0gbGFtYmRhMCksXG4gICAgICBjb3NEZWx0YSA9IGNvcyhkZWx0YSksXG4gICAgICBzaW5EZWx0YSA9IHNpbihkZWx0YSksXG4gICAgICB4ID0gY29zUGhpICogc2luRGVsdGEsXG4gICAgICB5ID0gY29zUGhpMCAqIHNpblBoaSAtIHNpblBoaTAgKiBjb3NQaGkgKiBjb3NEZWx0YSxcbiAgICAgIHogPSBzaW5QaGkwICogc2luUGhpICsgY29zUGhpMCAqIGNvc1BoaSAqIGNvc0RlbHRhO1xuICBsZW5ndGhTdW0uYWRkKGF0YW4yKHNxcnQoeCAqIHggKyB5ICogeSksIHopKTtcbiAgbGFtYmRhMCA9IGxhbWJkYSwgc2luUGhpMCA9IHNpblBoaSwgY29zUGhpMCA9IGNvc1BoaTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24ob2JqZWN0KSB7XG4gIGxlbmd0aFN1bS5yZXNldCgpO1xuICBzdHJlYW0ob2JqZWN0LCBsZW5ndGhTdHJlYW0pO1xuICByZXR1cm4gK2xlbmd0aFN1bTtcbn1cblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2QzLWdlby1wcm9qZWN0aW9uL25vZGVfbW9kdWxlcy9kMy1nZW8vc3JjL2xlbmd0aC5qc1xuLy8gbW9kdWxlIGlkID0gLi9ub2RlX21vZHVsZXMvZDMtZ2VvLXByb2plY3Rpb24vbm9kZV9tb2R1bGVzL2QzLWdlby9zcmMvbGVuZ3RoLmpzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImV4cG9ydCB2YXIgZXBzaWxvbiA9IDFlLTY7XG5leHBvcnQgdmFyIGVwc2lsb24yID0gMWUtMTI7XG5leHBvcnQgdmFyIHBpID0gTWF0aC5QSTtcbmV4cG9ydCB2YXIgaGFsZlBpID0gcGkgLyAyO1xuZXhwb3J0IHZhciBxdWFydGVyUGkgPSBwaSAvIDQ7XG5leHBvcnQgdmFyIHRhdSA9IHBpICogMjtcblxuZXhwb3J0IHZhciBkZWdyZWVzID0gMTgwIC8gcGk7XG5leHBvcnQgdmFyIHJhZGlhbnMgPSBwaSAvIDE4MDtcblxuZXhwb3J0IHZhciBhYnMgPSBNYXRoLmFicztcbmV4cG9ydCB2YXIgYXRhbiA9IE1hdGguYXRhbjtcbmV4cG9ydCB2YXIgYXRhbjIgPSBNYXRoLmF0YW4yO1xuZXhwb3J0IHZhciBjb3MgPSBNYXRoLmNvcztcbmV4cG9ydCB2YXIgY2VpbCA9IE1hdGguY2VpbDtcbmV4cG9ydCB2YXIgZXhwID0gTWF0aC5leHA7XG5leHBvcnQgdmFyIGZsb29yID0gTWF0aC5mbG9vcjtcbmV4cG9ydCB2YXIgbG9nID0gTWF0aC5sb2c7XG5leHBvcnQgdmFyIHBvdyA9IE1hdGgucG93O1xuZXhwb3J0IHZhciBzaW4gPSBNYXRoLnNpbjtcbmV4cG9ydCB2YXIgc2lnbiA9IE1hdGguc2lnbiB8fCBmdW5jdGlvbih4KSB7IHJldHVybiB4ID4gMCA/IDEgOiB4IDwgMCA/IC0xIDogMDsgfTtcbmV4cG9ydCB2YXIgc3FydCA9IE1hdGguc3FydDtcbmV4cG9ydCB2YXIgdGFuID0gTWF0aC50YW47XG5cbmV4cG9ydCBmdW5jdGlvbiBhY29zKHgpIHtcbiAgcmV0dXJuIHggPiAxID8gMCA6IHggPCAtMSA/IHBpIDogTWF0aC5hY29zKHgpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYXNpbih4KSB7XG4gIHJldHVybiB4ID4gMSA/IGhhbGZQaSA6IHggPCAtMSA/IC1oYWxmUGkgOiBNYXRoLmFzaW4oeCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBoYXZlcnNpbih4KSB7XG4gIHJldHVybiAoeCA9IHNpbih4IC8gMikpICogeDtcbn1cblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2QzLWdlby1wcm9qZWN0aW9uL25vZGVfbW9kdWxlcy9kMy1nZW8vc3JjL21hdGguanNcbi8vIG1vZHVsZSBpZCA9IC4vbm9kZV9tb2R1bGVzL2QzLWdlby1wcm9qZWN0aW9uL25vZGVfbW9kdWxlcy9kMy1nZW8vc3JjL21hdGguanNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbm9vcCgpIHt9XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9kMy1nZW8tcHJvamVjdGlvbi9ub2RlX21vZHVsZXMvZDMtZ2VvL3NyYy9ub29wLmpzXG4vLyBtb2R1bGUgaWQgPSAuL25vZGVfbW9kdWxlcy9kMy1nZW8tcHJvamVjdGlvbi9ub2RlX21vZHVsZXMvZDMtZ2VvL3NyYy9ub29wLmpzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCBhZGRlciBmcm9tIFwiLi4vYWRkZXJcIjtcbmltcG9ydCB7YWJzfSBmcm9tIFwiLi4vbWF0aFwiO1xuaW1wb3J0IG5vb3AgZnJvbSBcIi4uL25vb3BcIjtcblxudmFyIGFyZWFTdW0gPSBhZGRlcigpLFxuICAgIGFyZWFSaW5nU3VtID0gYWRkZXIoKSxcbiAgICB4MDAsXG4gICAgeTAwLFxuICAgIHgwLFxuICAgIHkwO1xuXG52YXIgYXJlYVN0cmVhbSA9IHtcbiAgcG9pbnQ6IG5vb3AsXG4gIGxpbmVTdGFydDogbm9vcCxcbiAgbGluZUVuZDogbm9vcCxcbiAgcG9seWdvblN0YXJ0OiBmdW5jdGlvbigpIHtcbiAgICBhcmVhU3RyZWFtLmxpbmVTdGFydCA9IGFyZWFSaW5nU3RhcnQ7XG4gICAgYXJlYVN0cmVhbS5saW5lRW5kID0gYXJlYVJpbmdFbmQ7XG4gIH0sXG4gIHBvbHlnb25FbmQ6IGZ1bmN0aW9uKCkge1xuICAgIGFyZWFTdHJlYW0ubGluZVN0YXJ0ID0gYXJlYVN0cmVhbS5saW5lRW5kID0gYXJlYVN0cmVhbS5wb2ludCA9IG5vb3A7XG4gICAgYXJlYVN1bS5hZGQoYWJzKGFyZWFSaW5nU3VtKSk7XG4gICAgYXJlYVJpbmdTdW0ucmVzZXQoKTtcbiAgfSxcbiAgcmVzdWx0OiBmdW5jdGlvbigpIHtcbiAgICB2YXIgYXJlYSA9IGFyZWFTdW0gLyAyO1xuICAgIGFyZWFTdW0ucmVzZXQoKTtcbiAgICByZXR1cm4gYXJlYTtcbiAgfVxufTtcblxuZnVuY3Rpb24gYXJlYVJpbmdTdGFydCgpIHtcbiAgYXJlYVN0cmVhbS5wb2ludCA9IGFyZWFQb2ludEZpcnN0O1xufVxuXG5mdW5jdGlvbiBhcmVhUG9pbnRGaXJzdCh4LCB5KSB7XG4gIGFyZWFTdHJlYW0ucG9pbnQgPSBhcmVhUG9pbnQ7XG4gIHgwMCA9IHgwID0geCwgeTAwID0geTAgPSB5O1xufVxuXG5mdW5jdGlvbiBhcmVhUG9pbnQoeCwgeSkge1xuICBhcmVhUmluZ1N1bS5hZGQoeTAgKiB4IC0geDAgKiB5KTtcbiAgeDAgPSB4LCB5MCA9IHk7XG59XG5cbmZ1bmN0aW9uIGFyZWFSaW5nRW5kKCkge1xuICBhcmVhUG9pbnQoeDAwLCB5MDApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBhcmVhU3RyZWFtO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvZDMtZ2VvLXByb2plY3Rpb24vbm9kZV9tb2R1bGVzL2QzLWdlby9zcmMvcGF0aC9hcmVhLmpzXG4vLyBtb2R1bGUgaWQgPSAuL25vZGVfbW9kdWxlcy9kMy1nZW8tcHJvamVjdGlvbi9ub2RlX21vZHVsZXMvZDMtZ2VvL3NyYy9wYXRoL2FyZWEuanNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IG5vb3AgZnJvbSBcIi4uL25vb3BcIjtcblxudmFyIHgwID0gSW5maW5pdHksXG4gICAgeTAgPSB4MCxcbiAgICB4MSA9IC14MCxcbiAgICB5MSA9IHgxO1xuXG52YXIgYm91bmRzU3RyZWFtID0ge1xuICBwb2ludDogYm91bmRzUG9pbnQsXG4gIGxpbmVTdGFydDogbm9vcCxcbiAgbGluZUVuZDogbm9vcCxcbiAgcG9seWdvblN0YXJ0OiBub29wLFxuICBwb2x5Z29uRW5kOiBub29wLFxuICByZXN1bHQ6IGZ1bmN0aW9uKCkge1xuICAgIHZhciBib3VuZHMgPSBbW3gwLCB5MF0sIFt4MSwgeTFdXTtcbiAgICB4MSA9IHkxID0gLSh5MCA9IHgwID0gSW5maW5pdHkpO1xuICAgIHJldHVybiBib3VuZHM7XG4gIH1cbn07XG5cbmZ1bmN0aW9uIGJvdW5kc1BvaW50KHgsIHkpIHtcbiAgaWYgKHggPCB4MCkgeDAgPSB4O1xuICBpZiAoeCA+IHgxKSB4MSA9IHg7XG4gIGlmICh5IDwgeTApIHkwID0geTtcbiAgaWYgKHkgPiB5MSkgeTEgPSB5O1xufVxuXG5leHBvcnQgZGVmYXVsdCBib3VuZHNTdHJlYW07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9kMy1nZW8tcHJvamVjdGlvbi9ub2RlX21vZHVsZXMvZDMtZ2VvL3NyYy9wYXRoL2JvdW5kcy5qc1xuLy8gbW9kdWxlIGlkID0gLi9ub2RlX21vZHVsZXMvZDMtZ2VvLXByb2plY3Rpb24vbm9kZV9tb2R1bGVzL2QzLWdlby9zcmMvcGF0aC9ib3VuZHMuanNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IHtzcXJ0fSBmcm9tIFwiLi4vbWF0aFwiO1xuXG4vLyBUT0RPIEVuZm9yY2UgcG9zaXRpdmUgYXJlYSBmb3IgZXh0ZXJpb3IsIG5lZ2F0aXZlIGFyZWEgZm9yIGludGVyaW9yP1xuXG52YXIgWDAgPSAwLFxuICAgIFkwID0gMCxcbiAgICBaMCA9IDAsXG4gICAgWDEgPSAwLFxuICAgIFkxID0gMCxcbiAgICBaMSA9IDAsXG4gICAgWDIgPSAwLFxuICAgIFkyID0gMCxcbiAgICBaMiA9IDAsXG4gICAgeDAwLFxuICAgIHkwMCxcbiAgICB4MCxcbiAgICB5MDtcblxudmFyIGNlbnRyb2lkU3RyZWFtID0ge1xuICBwb2ludDogY2VudHJvaWRQb2ludCxcbiAgbGluZVN0YXJ0OiBjZW50cm9pZExpbmVTdGFydCxcbiAgbGluZUVuZDogY2VudHJvaWRMaW5lRW5kLFxuICBwb2x5Z29uU3RhcnQ6IGZ1bmN0aW9uKCkge1xuICAgIGNlbnRyb2lkU3RyZWFtLmxpbmVTdGFydCA9IGNlbnRyb2lkUmluZ1N0YXJ0O1xuICAgIGNlbnRyb2lkU3RyZWFtLmxpbmVFbmQgPSBjZW50cm9pZFJpbmdFbmQ7XG4gIH0sXG4gIHBvbHlnb25FbmQ6IGZ1bmN0aW9uKCkge1xuICAgIGNlbnRyb2lkU3RyZWFtLnBvaW50ID0gY2VudHJvaWRQb2ludDtcbiAgICBjZW50cm9pZFN0cmVhbS5saW5lU3RhcnQgPSBjZW50cm9pZExpbmVTdGFydDtcbiAgICBjZW50cm9pZFN0cmVhbS5saW5lRW5kID0gY2VudHJvaWRMaW5lRW5kO1xuICB9LFxuICByZXN1bHQ6IGZ1bmN0aW9uKCkge1xuICAgIHZhciBjZW50cm9pZCA9IFoyID8gW1gyIC8gWjIsIFkyIC8gWjJdXG4gICAgICAgIDogWjEgPyBbWDEgLyBaMSwgWTEgLyBaMV1cbiAgICAgICAgOiBaMCA/IFtYMCAvIFowLCBZMCAvIFowXVxuICAgICAgICA6IFtOYU4sIE5hTl07XG4gICAgWDAgPSBZMCA9IFowID1cbiAgICBYMSA9IFkxID0gWjEgPVxuICAgIFgyID0gWTIgPSBaMiA9IDA7XG4gICAgcmV0dXJuIGNlbnRyb2lkO1xuICB9XG59O1xuXG5mdW5jdGlvbiBjZW50cm9pZFBvaW50KHgsIHkpIHtcbiAgWDAgKz0geDtcbiAgWTAgKz0geTtcbiAgKytaMDtcbn1cblxuZnVuY3Rpb24gY2VudHJvaWRMaW5lU3RhcnQoKSB7XG4gIGNlbnRyb2lkU3RyZWFtLnBvaW50ID0gY2VudHJvaWRQb2ludEZpcnN0TGluZTtcbn1cblxuZnVuY3Rpb24gY2VudHJvaWRQb2ludEZpcnN0TGluZSh4LCB5KSB7XG4gIGNlbnRyb2lkU3RyZWFtLnBvaW50ID0gY2VudHJvaWRQb2ludExpbmU7XG4gIGNlbnRyb2lkUG9pbnQoeDAgPSB4LCB5MCA9IHkpO1xufVxuXG5mdW5jdGlvbiBjZW50cm9pZFBvaW50TGluZSh4LCB5KSB7XG4gIHZhciBkeCA9IHggLSB4MCwgZHkgPSB5IC0geTAsIHogPSBzcXJ0KGR4ICogZHggKyBkeSAqIGR5KTtcbiAgWDEgKz0geiAqICh4MCArIHgpIC8gMjtcbiAgWTEgKz0geiAqICh5MCArIHkpIC8gMjtcbiAgWjEgKz0gejtcbiAgY2VudHJvaWRQb2ludCh4MCA9IHgsIHkwID0geSk7XG59XG5cbmZ1bmN0aW9uIGNlbnRyb2lkTGluZUVuZCgpIHtcbiAgY2VudHJvaWRTdHJlYW0ucG9pbnQgPSBjZW50cm9pZFBvaW50O1xufVxuXG5mdW5jdGlvbiBjZW50cm9pZFJpbmdTdGFydCgpIHtcbiAgY2VudHJvaWRTdHJlYW0ucG9pbnQgPSBjZW50cm9pZFBvaW50Rmlyc3RSaW5nO1xufVxuXG5mdW5jdGlvbiBjZW50cm9pZFJpbmdFbmQoKSB7XG4gIGNlbnRyb2lkUG9pbnRSaW5nKHgwMCwgeTAwKTtcbn1cblxuZnVuY3Rpb24gY2VudHJvaWRQb2ludEZpcnN0UmluZyh4LCB5KSB7XG4gIGNlbnRyb2lkU3RyZWFtLnBvaW50ID0gY2VudHJvaWRQb2ludFJpbmc7XG4gIGNlbnRyb2lkUG9pbnQoeDAwID0geDAgPSB4LCB5MDAgPSB5MCA9IHkpO1xufVxuXG5mdW5jdGlvbiBjZW50cm9pZFBvaW50UmluZyh4LCB5KSB7XG4gIHZhciBkeCA9IHggLSB4MCxcbiAgICAgIGR5ID0geSAtIHkwLFxuICAgICAgeiA9IHNxcnQoZHggKiBkeCArIGR5ICogZHkpO1xuXG4gIFgxICs9IHogKiAoeDAgKyB4KSAvIDI7XG4gIFkxICs9IHogKiAoeTAgKyB5KSAvIDI7XG4gIFoxICs9IHo7XG5cbiAgeiA9IHkwICogeCAtIHgwICogeTtcbiAgWDIgKz0geiAqICh4MCArIHgpO1xuICBZMiArPSB6ICogKHkwICsgeSk7XG4gIFoyICs9IHogKiAzO1xuICBjZW50cm9pZFBvaW50KHgwID0geCwgeTAgPSB5KTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgY2VudHJvaWRTdHJlYW07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9kMy1nZW8tcHJvamVjdGlvbi9ub2RlX21vZHVsZXMvZDMtZ2VvL3NyYy9wYXRoL2NlbnRyb2lkLmpzXG4vLyBtb2R1bGUgaWQgPSAuL25vZGVfbW9kdWxlcy9kMy1nZW8tcHJvamVjdGlvbi9ub2RlX21vZHVsZXMvZDMtZ2VvL3NyYy9wYXRoL2NlbnRyb2lkLmpzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCB7dGF1fSBmcm9tIFwiLi4vbWF0aFwiO1xuaW1wb3J0IG5vb3AgZnJvbSBcIi4uL25vb3BcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUGF0aENvbnRleHQoY29udGV4dCkge1xuICB0aGlzLl9jb250ZXh0ID0gY29udGV4dDtcbn1cblxuUGF0aENvbnRleHQucHJvdG90eXBlID0ge1xuICBfcmFkaXVzOiA0LjUsXG4gIHBvaW50UmFkaXVzOiBmdW5jdGlvbihfKSB7XG4gICAgcmV0dXJuIHRoaXMuX3JhZGl1cyA9IF8sIHRoaXM7XG4gIH0sXG4gIHBvbHlnb25TdGFydDogZnVuY3Rpb24oKSB7XG4gICAgdGhpcy5fbGluZSA9IDA7XG4gIH0sXG4gIHBvbHlnb25FbmQ6IGZ1bmN0aW9uKCkge1xuICAgIHRoaXMuX2xpbmUgPSBOYU47XG4gIH0sXG4gIGxpbmVTdGFydDogZnVuY3Rpb24oKSB7XG4gICAgdGhpcy5fcG9pbnQgPSAwO1xuICB9LFxuICBsaW5lRW5kOiBmdW5jdGlvbigpIHtcbiAgICBpZiAodGhpcy5fbGluZSA9PT0gMCkgdGhpcy5fY29udGV4dC5jbG9zZVBhdGgoKTtcbiAgICB0aGlzLl9wb2ludCA9IE5hTjtcbiAgfSxcbiAgcG9pbnQ6IGZ1bmN0aW9uKHgsIHkpIHtcbiAgICBzd2l0Y2ggKHRoaXMuX3BvaW50KSB7XG4gICAgICBjYXNlIDA6IHtcbiAgICAgICAgdGhpcy5fY29udGV4dC5tb3ZlVG8oeCwgeSk7XG4gICAgICAgIHRoaXMuX3BvaW50ID0gMTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgICBjYXNlIDE6IHtcbiAgICAgICAgdGhpcy5fY29udGV4dC5saW5lVG8oeCwgeSk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgICAgZGVmYXVsdDoge1xuICAgICAgICB0aGlzLl9jb250ZXh0Lm1vdmVUbyh4ICsgdGhpcy5fcmFkaXVzLCB5KTtcbiAgICAgICAgdGhpcy5fY29udGV4dC5hcmMoeCwgeSwgdGhpcy5fcmFkaXVzLCAwLCB0YXUpO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG4gIH0sXG4gIHJlc3VsdDogbm9vcFxufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2QzLWdlby1wcm9qZWN0aW9uL25vZGVfbW9kdWxlcy9kMy1nZW8vc3JjL3BhdGgvY29udGV4dC5qc1xuLy8gbW9kdWxlIGlkID0gLi9ub2RlX21vZHVsZXMvZDMtZ2VvLXByb2plY3Rpb24vbm9kZV9tb2R1bGVzL2QzLWdlby9zcmMvcGF0aC9jb250ZXh0LmpzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCBpZGVudGl0eSBmcm9tIFwiLi4vaWRlbnRpdHlcIjtcbmltcG9ydCBzdHJlYW0gZnJvbSBcIi4uL3N0cmVhbVwiO1xuaW1wb3J0IHBhdGhBcmVhIGZyb20gXCIuL2FyZWFcIjtcbmltcG9ydCBwYXRoQm91bmRzIGZyb20gXCIuL2JvdW5kc1wiO1xuaW1wb3J0IHBhdGhDZW50cm9pZCBmcm9tIFwiLi9jZW50cm9pZFwiO1xuaW1wb3J0IFBhdGhDb250ZXh0IGZyb20gXCIuL2NvbnRleHRcIjtcbmltcG9ydCBwYXRoTWVhc3VyZSBmcm9tIFwiLi9tZWFzdXJlXCI7XG5pbXBvcnQgUGF0aFN0cmluZyBmcm9tIFwiLi9zdHJpbmdcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24ocHJvamVjdGlvbiwgY29udGV4dCkge1xuICB2YXIgcG9pbnRSYWRpdXMgPSA0LjUsXG4gICAgICBwcm9qZWN0aW9uU3RyZWFtLFxuICAgICAgY29udGV4dFN0cmVhbTtcblxuICBmdW5jdGlvbiBwYXRoKG9iamVjdCkge1xuICAgIGlmIChvYmplY3QpIHtcbiAgICAgIGlmICh0eXBlb2YgcG9pbnRSYWRpdXMgPT09IFwiZnVuY3Rpb25cIikgY29udGV4dFN0cmVhbS5wb2ludFJhZGl1cygrcG9pbnRSYWRpdXMuYXBwbHkodGhpcywgYXJndW1lbnRzKSk7XG4gICAgICBzdHJlYW0ob2JqZWN0LCBwcm9qZWN0aW9uU3RyZWFtKGNvbnRleHRTdHJlYW0pKTtcbiAgICB9XG4gICAgcmV0dXJuIGNvbnRleHRTdHJlYW0ucmVzdWx0KCk7XG4gIH1cblxuICBwYXRoLmFyZWEgPSBmdW5jdGlvbihvYmplY3QpIHtcbiAgICBzdHJlYW0ob2JqZWN0LCBwcm9qZWN0aW9uU3RyZWFtKHBhdGhBcmVhKSk7XG4gICAgcmV0dXJuIHBhdGhBcmVhLnJlc3VsdCgpO1xuICB9O1xuXG4gIHBhdGgubWVhc3VyZSA9IGZ1bmN0aW9uKG9iamVjdCkge1xuICAgIHN0cmVhbShvYmplY3QsIHByb2plY3Rpb25TdHJlYW0ocGF0aE1lYXN1cmUpKTtcbiAgICByZXR1cm4gcGF0aE1lYXN1cmUucmVzdWx0KCk7XG4gIH07XG5cbiAgcGF0aC5ib3VuZHMgPSBmdW5jdGlvbihvYmplY3QpIHtcbiAgICBzdHJlYW0ob2JqZWN0LCBwcm9qZWN0aW9uU3RyZWFtKHBhdGhCb3VuZHMpKTtcbiAgICByZXR1cm4gcGF0aEJvdW5kcy5yZXN1bHQoKTtcbiAgfTtcblxuICBwYXRoLmNlbnRyb2lkID0gZnVuY3Rpb24ob2JqZWN0KSB7XG4gICAgc3RyZWFtKG9iamVjdCwgcHJvamVjdGlvblN0cmVhbShwYXRoQ2VudHJvaWQpKTtcbiAgICByZXR1cm4gcGF0aENlbnRyb2lkLnJlc3VsdCgpO1xuICB9O1xuXG4gIHBhdGgucHJvamVjdGlvbiA9IGZ1bmN0aW9uKF8pIHtcbiAgICByZXR1cm4gYXJndW1lbnRzLmxlbmd0aCA/IChwcm9qZWN0aW9uU3RyZWFtID0gXyA9PSBudWxsID8gKHByb2plY3Rpb24gPSBudWxsLCBpZGVudGl0eSkgOiAocHJvamVjdGlvbiA9IF8pLnN0cmVhbSwgcGF0aCkgOiBwcm9qZWN0aW9uO1xuICB9O1xuXG4gIHBhdGguY29udGV4dCA9IGZ1bmN0aW9uKF8pIHtcbiAgICBpZiAoIWFyZ3VtZW50cy5sZW5ndGgpIHJldHVybiBjb250ZXh0O1xuICAgIGNvbnRleHRTdHJlYW0gPSBfID09IG51bGwgPyAoY29udGV4dCA9IG51bGwsIG5ldyBQYXRoU3RyaW5nKSA6IG5ldyBQYXRoQ29udGV4dChjb250ZXh0ID0gXyk7XG4gICAgaWYgKHR5cGVvZiBwb2ludFJhZGl1cyAhPT0gXCJmdW5jdGlvblwiKSBjb250ZXh0U3RyZWFtLnBvaW50UmFkaXVzKHBvaW50UmFkaXVzKTtcbiAgICByZXR1cm4gcGF0aDtcbiAgfTtcblxuICBwYXRoLnBvaW50UmFkaXVzID0gZnVuY3Rpb24oXykge1xuICAgIGlmICghYXJndW1lbnRzLmxlbmd0aCkgcmV0dXJuIHBvaW50UmFkaXVzO1xuICAgIHBvaW50UmFkaXVzID0gdHlwZW9mIF8gPT09IFwiZnVuY3Rpb25cIiA/IF8gOiAoY29udGV4dFN0cmVhbS5wb2ludFJhZGl1cygrXyksICtfKTtcbiAgICByZXR1cm4gcGF0aDtcbiAgfTtcblxuICByZXR1cm4gcGF0aC5wcm9qZWN0aW9uKHByb2plY3Rpb24pLmNvbnRleHQoY29udGV4dCk7XG59XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9kMy1nZW8tcHJvamVjdGlvbi9ub2RlX21vZHVsZXMvZDMtZ2VvL3NyYy9wYXRoL2luZGV4LmpzXG4vLyBtb2R1bGUgaWQgPSAuL25vZGVfbW9kdWxlcy9kMy1nZW8tcHJvamVjdGlvbi9ub2RlX21vZHVsZXMvZDMtZ2VvL3NyYy9wYXRoL2luZGV4LmpzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCBhZGRlciBmcm9tIFwiLi4vYWRkZXJcIjtcbmltcG9ydCB7c3FydH0gZnJvbSBcIi4uL21hdGhcIjtcbmltcG9ydCBub29wIGZyb20gXCIuLi9ub29wXCI7XG5cbnZhciBsZW5ndGhTdW0gPSBhZGRlcigpLFxuICAgIGxlbmd0aFJpbmcsXG4gICAgeDAwLFxuICAgIHkwMCxcbiAgICB4MCxcbiAgICB5MDtcblxudmFyIGxlbmd0aFN0cmVhbSA9IHtcbiAgcG9pbnQ6IG5vb3AsXG4gIGxpbmVTdGFydDogZnVuY3Rpb24oKSB7XG4gICAgbGVuZ3RoU3RyZWFtLnBvaW50ID0gbGVuZ3RoUG9pbnRGaXJzdDtcbiAgfSxcbiAgbGluZUVuZDogZnVuY3Rpb24oKSB7XG4gICAgaWYgKGxlbmd0aFJpbmcpIGxlbmd0aFBvaW50KHgwMCwgeTAwKTtcbiAgICBsZW5ndGhTdHJlYW0ucG9pbnQgPSBub29wO1xuICB9LFxuICBwb2x5Z29uU3RhcnQ6IGZ1bmN0aW9uKCkge1xuICAgIGxlbmd0aFJpbmcgPSB0cnVlO1xuICB9LFxuICBwb2x5Z29uRW5kOiBmdW5jdGlvbigpIHtcbiAgICBsZW5ndGhSaW5nID0gbnVsbDtcbiAgfSxcbiAgcmVzdWx0OiBmdW5jdGlvbigpIHtcbiAgICB2YXIgbGVuZ3RoID0gK2xlbmd0aFN1bTtcbiAgICBsZW5ndGhTdW0ucmVzZXQoKTtcbiAgICByZXR1cm4gbGVuZ3RoO1xuICB9XG59O1xuXG5mdW5jdGlvbiBsZW5ndGhQb2ludEZpcnN0KHgsIHkpIHtcbiAgbGVuZ3RoU3RyZWFtLnBvaW50ID0gbGVuZ3RoUG9pbnQ7XG4gIHgwMCA9IHgwID0geCwgeTAwID0geTAgPSB5O1xufVxuXG5mdW5jdGlvbiBsZW5ndGhQb2ludCh4LCB5KSB7XG4gIHgwIC09IHgsIHkwIC09IHk7XG4gIGxlbmd0aFN1bS5hZGQoc3FydCh4MCAqIHgwICsgeTAgKiB5MCkpO1xuICB4MCA9IHgsIHkwID0geTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgbGVuZ3RoU3RyZWFtO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvZDMtZ2VvLXByb2plY3Rpb24vbm9kZV9tb2R1bGVzL2QzLWdlby9zcmMvcGF0aC9tZWFzdXJlLmpzXG4vLyBtb2R1bGUgaWQgPSAuL25vZGVfbW9kdWxlcy9kMy1nZW8tcHJvamVjdGlvbi9ub2RlX21vZHVsZXMvZDMtZ2VvL3NyYy9wYXRoL21lYXN1cmUuanNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUGF0aFN0cmluZygpIHtcbiAgdGhpcy5fc3RyaW5nID0gW107XG59XG5cblBhdGhTdHJpbmcucHJvdG90eXBlID0ge1xuICBfcmFkaXVzOiA0LjUsXG4gIF9jaXJjbGU6IGNpcmNsZSg0LjUpLFxuICBwb2ludFJhZGl1czogZnVuY3Rpb24oXykge1xuICAgIGlmICgoXyA9ICtfKSAhPT0gdGhpcy5fcmFkaXVzKSB0aGlzLl9yYWRpdXMgPSBfLCB0aGlzLl9jaXJjbGUgPSBudWxsO1xuICAgIHJldHVybiB0aGlzO1xuICB9LFxuICBwb2x5Z29uU3RhcnQ6IGZ1bmN0aW9uKCkge1xuICAgIHRoaXMuX2xpbmUgPSAwO1xuICB9LFxuICBwb2x5Z29uRW5kOiBmdW5jdGlvbigpIHtcbiAgICB0aGlzLl9saW5lID0gTmFOO1xuICB9LFxuICBsaW5lU3RhcnQ6IGZ1bmN0aW9uKCkge1xuICAgIHRoaXMuX3BvaW50ID0gMDtcbiAgfSxcbiAgbGluZUVuZDogZnVuY3Rpb24oKSB7XG4gICAgaWYgKHRoaXMuX2xpbmUgPT09IDApIHRoaXMuX3N0cmluZy5wdXNoKFwiWlwiKTtcbiAgICB0aGlzLl9wb2ludCA9IE5hTjtcbiAgfSxcbiAgcG9pbnQ6IGZ1bmN0aW9uKHgsIHkpIHtcbiAgICBzd2l0Y2ggKHRoaXMuX3BvaW50KSB7XG4gICAgICBjYXNlIDA6IHtcbiAgICAgICAgdGhpcy5fc3RyaW5nLnB1c2goXCJNXCIsIHgsIFwiLFwiLCB5KTtcbiAgICAgICAgdGhpcy5fcG9pbnQgPSAxO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICAgIGNhc2UgMToge1xuICAgICAgICB0aGlzLl9zdHJpbmcucHVzaChcIkxcIiwgeCwgXCIsXCIsIHkpO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICAgIGRlZmF1bHQ6IHtcbiAgICAgICAgaWYgKHRoaXMuX2NpcmNsZSA9PSBudWxsKSB0aGlzLl9jaXJjbGUgPSBjaXJjbGUodGhpcy5fcmFkaXVzKTtcbiAgICAgICAgdGhpcy5fc3RyaW5nLnB1c2goXCJNXCIsIHgsIFwiLFwiLCB5LCB0aGlzLl9jaXJjbGUpO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG4gIH0sXG4gIHJlc3VsdDogZnVuY3Rpb24oKSB7XG4gICAgaWYgKHRoaXMuX3N0cmluZy5sZW5ndGgpIHtcbiAgICAgIHZhciByZXN1bHQgPSB0aGlzLl9zdHJpbmcuam9pbihcIlwiKTtcbiAgICAgIHRoaXMuX3N0cmluZyA9IFtdO1xuICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICB9XG59O1xuXG5mdW5jdGlvbiBjaXJjbGUocmFkaXVzKSB7XG4gIHJldHVybiBcIm0wLFwiICsgcmFkaXVzXG4gICAgICArIFwiYVwiICsgcmFkaXVzICsgXCIsXCIgKyByYWRpdXMgKyBcIiAwIDEsMSAwLFwiICsgLTIgKiByYWRpdXNcbiAgICAgICsgXCJhXCIgKyByYWRpdXMgKyBcIixcIiArIHJhZGl1cyArIFwiIDAgMSwxIDAsXCIgKyAyICogcmFkaXVzXG4gICAgICArIFwielwiO1xufVxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvZDMtZ2VvLXByb2plY3Rpb24vbm9kZV9tb2R1bGVzL2QzLWdlby9zcmMvcGF0aC9zdHJpbmcuanNcbi8vIG1vZHVsZSBpZCA9IC4vbm9kZV9tb2R1bGVzL2QzLWdlby1wcm9qZWN0aW9uL25vZGVfbW9kdWxlcy9kMy1nZW8vc3JjL3BhdGgvc3RyaW5nLmpzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCB7YWJzLCBlcHNpbG9ufSBmcm9tIFwiLi9tYXRoXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKGEsIGIpIHtcbiAgcmV0dXJuIGFicyhhWzBdIC0gYlswXSkgPCBlcHNpbG9uICYmIGFicyhhWzFdIC0gYlsxXSkgPCBlcHNpbG9uO1xufVxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvZDMtZ2VvLXByb2plY3Rpb24vbm9kZV9tb2R1bGVzL2QzLWdlby9zcmMvcG9pbnRFcXVhbC5qc1xuLy8gbW9kdWxlIGlkID0gLi9ub2RlX21vZHVsZXMvZDMtZ2VvLXByb2plY3Rpb24vbm9kZV9tb2R1bGVzL2QzLWdlby9zcmMvcG9pbnRFcXVhbC5qc1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgYWRkZXIgZnJvbSBcIi4vYWRkZXJcIjtcbmltcG9ydCB7Y2FydGVzaWFuLCBjYXJ0ZXNpYW5Dcm9zcywgY2FydGVzaWFuTm9ybWFsaXplSW5QbGFjZX0gZnJvbSBcIi4vY2FydGVzaWFuXCI7XG5pbXBvcnQge2FzaW4sIGF0YW4yLCBjb3MsIGVwc2lsb24sIHBpLCBxdWFydGVyUGksIHNpbiwgdGF1fSBmcm9tIFwiLi9tYXRoXCI7XG5cbnZhciBzdW0gPSBhZGRlcigpO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbihwb2x5Z29uLCBwb2ludCkge1xuICB2YXIgbGFtYmRhID0gcG9pbnRbMF0sXG4gICAgICBwaGkgPSBwb2ludFsxXSxcbiAgICAgIG5vcm1hbCA9IFtzaW4obGFtYmRhKSwgLWNvcyhsYW1iZGEpLCAwXSxcbiAgICAgIGFuZ2xlID0gMCxcbiAgICAgIHdpbmRpbmcgPSAwO1xuXG4gIHN1bS5yZXNldCgpO1xuXG4gIGZvciAodmFyIGkgPSAwLCBuID0gcG9seWdvbi5sZW5ndGg7IGkgPCBuOyArK2kpIHtcbiAgICBpZiAoIShtID0gKHJpbmcgPSBwb2x5Z29uW2ldKS5sZW5ndGgpKSBjb250aW51ZTtcbiAgICB2YXIgcmluZyxcbiAgICAgICAgbSxcbiAgICAgICAgcG9pbnQwID0gcmluZ1ttIC0gMV0sXG4gICAgICAgIGxhbWJkYTAgPSBwb2ludDBbMF0sXG4gICAgICAgIHBoaTAgPSBwb2ludDBbMV0gLyAyICsgcXVhcnRlclBpLFxuICAgICAgICBzaW5QaGkwID0gc2luKHBoaTApLFxuICAgICAgICBjb3NQaGkwID0gY29zKHBoaTApO1xuXG4gICAgZm9yICh2YXIgaiA9IDA7IGogPCBtOyArK2osIGxhbWJkYTAgPSBsYW1iZGExLCBzaW5QaGkwID0gc2luUGhpMSwgY29zUGhpMCA9IGNvc1BoaTEsIHBvaW50MCA9IHBvaW50MSkge1xuICAgICAgdmFyIHBvaW50MSA9IHJpbmdbal0sXG4gICAgICAgICAgbGFtYmRhMSA9IHBvaW50MVswXSxcbiAgICAgICAgICBwaGkxID0gcG9pbnQxWzFdIC8gMiArIHF1YXJ0ZXJQaSxcbiAgICAgICAgICBzaW5QaGkxID0gc2luKHBoaTEpLFxuICAgICAgICAgIGNvc1BoaTEgPSBjb3MocGhpMSksXG4gICAgICAgICAgZGVsdGEgPSBsYW1iZGExIC0gbGFtYmRhMCxcbiAgICAgICAgICBzaWduID0gZGVsdGEgPj0gMCA/IDEgOiAtMSxcbiAgICAgICAgICBhYnNEZWx0YSA9IHNpZ24gKiBkZWx0YSxcbiAgICAgICAgICBhbnRpbWVyaWRpYW4gPSBhYnNEZWx0YSA+IHBpLFxuICAgICAgICAgIGsgPSBzaW5QaGkwICogc2luUGhpMTtcblxuICAgICAgc3VtLmFkZChhdGFuMihrICogc2lnbiAqIHNpbihhYnNEZWx0YSksIGNvc1BoaTAgKiBjb3NQaGkxICsgayAqIGNvcyhhYnNEZWx0YSkpKTtcbiAgICAgIGFuZ2xlICs9IGFudGltZXJpZGlhbiA/IGRlbHRhICsgc2lnbiAqIHRhdSA6IGRlbHRhO1xuXG4gICAgICAvLyBBcmUgdGhlIGxvbmdpdHVkZXMgZWl0aGVyIHNpZGUgb2YgdGhlIHBvaW504oCZcyBtZXJpZGlhbiAobGFtYmRhKSxcbiAgICAgIC8vIGFuZCBhcmUgdGhlIGxhdGl0dWRlcyBzbWFsbGVyIHRoYW4gdGhlIHBhcmFsbGVsIChwaGkpP1xuICAgICAgaWYgKGFudGltZXJpZGlhbiBeIGxhbWJkYTAgPj0gbGFtYmRhIF4gbGFtYmRhMSA+PSBsYW1iZGEpIHtcbiAgICAgICAgdmFyIGFyYyA9IGNhcnRlc2lhbkNyb3NzKGNhcnRlc2lhbihwb2ludDApLCBjYXJ0ZXNpYW4ocG9pbnQxKSk7XG4gICAgICAgIGNhcnRlc2lhbk5vcm1hbGl6ZUluUGxhY2UoYXJjKTtcbiAgICAgICAgdmFyIGludGVyc2VjdGlvbiA9IGNhcnRlc2lhbkNyb3NzKG5vcm1hbCwgYXJjKTtcbiAgICAgICAgY2FydGVzaWFuTm9ybWFsaXplSW5QbGFjZShpbnRlcnNlY3Rpb24pO1xuICAgICAgICB2YXIgcGhpQXJjID0gKGFudGltZXJpZGlhbiBeIGRlbHRhID49IDAgPyAtMSA6IDEpICogYXNpbihpbnRlcnNlY3Rpb25bMl0pO1xuICAgICAgICBpZiAocGhpID4gcGhpQXJjIHx8IHBoaSA9PT0gcGhpQXJjICYmIChhcmNbMF0gfHwgYXJjWzFdKSkge1xuICAgICAgICAgIHdpbmRpbmcgKz0gYW50aW1lcmlkaWFuIF4gZGVsdGEgPj0gMCA/IDEgOiAtMTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8vIEZpcnN0LCBkZXRlcm1pbmUgd2hldGhlciB0aGUgU291dGggcG9sZSBpcyBpbnNpZGUgb3Igb3V0c2lkZTpcbiAgLy9cbiAgLy8gSXQgaXMgaW5zaWRlIGlmOlxuICAvLyAqIHRoZSBwb2x5Z29uIHdpbmRzIGFyb3VuZCBpdCBpbiBhIGNsb2Nrd2lzZSBkaXJlY3Rpb24uXG4gIC8vICogdGhlIHBvbHlnb24gZG9lcyBub3QgKGN1bXVsYXRpdmVseSkgd2luZCBhcm91bmQgaXQsIGJ1dCBoYXMgYSBuZWdhdGl2ZVxuICAvLyAgIChjb3VudGVyLWNsb2Nrd2lzZSkgYXJlYS5cbiAgLy9cbiAgLy8gU2Vjb25kLCBjb3VudCB0aGUgKHNpZ25lZCkgbnVtYmVyIG9mIHRpbWVzIGEgc2VnbWVudCBjcm9zc2VzIGEgbGFtYmRhXG4gIC8vIGZyb20gdGhlIHBvaW50IHRvIHRoZSBTb3V0aCBwb2xlLiAgSWYgaXQgaXMgemVybywgdGhlbiB0aGUgcG9pbnQgaXMgdGhlXG4gIC8vIHNhbWUgc2lkZSBhcyB0aGUgU291dGggcG9sZS5cblxuICByZXR1cm4gKGFuZ2xlIDwgLWVwc2lsb24gfHwgYW5nbGUgPCBlcHNpbG9uICYmIHN1bSA8IC1lcHNpbG9uKSBeICh3aW5kaW5nICYgMSk7XG59XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9kMy1nZW8tcHJvamVjdGlvbi9ub2RlX21vZHVsZXMvZDMtZ2VvL3NyYy9wb2x5Z29uQ29udGFpbnMuanNcbi8vIG1vZHVsZSBpZCA9IC4vbm9kZV9tb2R1bGVzL2QzLWdlby1wcm9qZWN0aW9uL25vZGVfbW9kdWxlcy9kMy1nZW8vc3JjL3BvbHlnb25Db250YWlucy5qc1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgY29uaWNFcXVhbEFyZWEgZnJvbSBcIi4vY29uaWNFcXVhbEFyZWFcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oKSB7XG4gIHJldHVybiBjb25pY0VxdWFsQXJlYSgpXG4gICAgICAucGFyYWxsZWxzKFsyOS41LCA0NS41XSlcbiAgICAgIC5zY2FsZSgxMDcwKVxuICAgICAgLnRyYW5zbGF0ZShbNDgwLCAyNTBdKVxuICAgICAgLnJvdGF0ZShbOTYsIDBdKVxuICAgICAgLmNlbnRlcihbLTAuNiwgMzguN10pO1xufVxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvZDMtZ2VvLXByb2plY3Rpb24vbm9kZV9tb2R1bGVzL2QzLWdlby9zcmMvcHJvamVjdGlvbi9hbGJlcnMuanNcbi8vIG1vZHVsZSBpZCA9IC4vbm9kZV9tb2R1bGVzL2QzLWdlby1wcm9qZWN0aW9uL25vZGVfbW9kdWxlcy9kMy1nZW8vc3JjL3Byb2plY3Rpb24vYWxiZXJzLmpzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCB7ZXBzaWxvbn0gZnJvbSBcIi4uL21hdGhcIjtcbmltcG9ydCBhbGJlcnMgZnJvbSBcIi4vYWxiZXJzXCI7XG5pbXBvcnQgY29uaWNFcXVhbEFyZWEgZnJvbSBcIi4vY29uaWNFcXVhbEFyZWFcIjtcbmltcG9ydCB7Zml0RXh0ZW50LCBmaXRTaXplLCBmaXRXaWR0aCwgZml0SGVpZ2h0fSBmcm9tIFwiLi9maXRcIjtcblxuLy8gVGhlIHByb2plY3Rpb25zIG11c3QgaGF2ZSBtdXR1YWxseSBleGNsdXNpdmUgY2xpcCByZWdpb25zIG9uIHRoZSBzcGhlcmUsXG4vLyBhcyB0aGlzIHdpbGwgYXZvaWQgZW1pdHRpbmcgaW50ZXJsZWF2aW5nIGxpbmVzIGFuZCBwb2x5Z29ucy5cbmZ1bmN0aW9uIG11bHRpcGxleChzdHJlYW1zKSB7XG4gIHZhciBuID0gc3RyZWFtcy5sZW5ndGg7XG4gIHJldHVybiB7XG4gICAgcG9pbnQ6IGZ1bmN0aW9uKHgsIHkpIHsgdmFyIGkgPSAtMTsgd2hpbGUgKCsraSA8IG4pIHN0cmVhbXNbaV0ucG9pbnQoeCwgeSk7IH0sXG4gICAgc3BoZXJlOiBmdW5jdGlvbigpIHsgdmFyIGkgPSAtMTsgd2hpbGUgKCsraSA8IG4pIHN0cmVhbXNbaV0uc3BoZXJlKCk7IH0sXG4gICAgbGluZVN0YXJ0OiBmdW5jdGlvbigpIHsgdmFyIGkgPSAtMTsgd2hpbGUgKCsraSA8IG4pIHN0cmVhbXNbaV0ubGluZVN0YXJ0KCk7IH0sXG4gICAgbGluZUVuZDogZnVuY3Rpb24oKSB7IHZhciBpID0gLTE7IHdoaWxlICgrK2kgPCBuKSBzdHJlYW1zW2ldLmxpbmVFbmQoKTsgfSxcbiAgICBwb2x5Z29uU3RhcnQ6IGZ1bmN0aW9uKCkgeyB2YXIgaSA9IC0xOyB3aGlsZSAoKytpIDwgbikgc3RyZWFtc1tpXS5wb2x5Z29uU3RhcnQoKTsgfSxcbiAgICBwb2x5Z29uRW5kOiBmdW5jdGlvbigpIHsgdmFyIGkgPSAtMTsgd2hpbGUgKCsraSA8IG4pIHN0cmVhbXNbaV0ucG9seWdvbkVuZCgpOyB9XG4gIH07XG59XG5cbi8vIEEgY29tcG9zaXRlIHByb2plY3Rpb24gZm9yIHRoZSBVbml0ZWQgU3RhdGVzLCBjb25maWd1cmVkIGJ5IGRlZmF1bHQgZm9yXG4vLyA5NjDDlzUwMC4gVGhlIHByb2plY3Rpb24gYWxzbyB3b3JrcyBxdWl0ZSB3ZWxsIGF0IDk2MMOXNjAwIGlmIHlvdSBjaGFuZ2UgdGhlXG4vLyBzY2FsZSB0byAxMjg1IGFuZCBhZGp1c3QgdGhlIHRyYW5zbGF0ZSBhY2NvcmRpbmdseS4gVGhlIHNldCBvZiBzdGFuZGFyZFxuLy8gcGFyYWxsZWxzIGZvciBlYWNoIHJlZ2lvbiBjb21lcyBmcm9tIFVTR1MsIHdoaWNoIGlzIHB1Ymxpc2hlZCBoZXJlOlxuLy8gaHR0cDovL2Vnc2MudXNncy5nb3YvaXNiL3B1YnMvTWFwUHJvamVjdGlvbnMvcHJvamVjdGlvbnMuaHRtbCNhbGJlcnNcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKCkge1xuICB2YXIgY2FjaGUsXG4gICAgICBjYWNoZVN0cmVhbSxcbiAgICAgIGxvd2VyNDggPSBhbGJlcnMoKSwgbG93ZXI0OFBvaW50LFxuICAgICAgYWxhc2thID0gY29uaWNFcXVhbEFyZWEoKS5yb3RhdGUoWzE1NCwgMF0pLmNlbnRlcihbLTIsIDU4LjVdKS5wYXJhbGxlbHMoWzU1LCA2NV0pLCBhbGFza2FQb2ludCwgLy8gRVBTRzozMzM4XG4gICAgICBoYXdhaWkgPSBjb25pY0VxdWFsQXJlYSgpLnJvdGF0ZShbMTU3LCAwXSkuY2VudGVyKFstMywgMTkuOV0pLnBhcmFsbGVscyhbOCwgMThdKSwgaGF3YWlpUG9pbnQsIC8vIEVTUkk6MTAyMDA3XG4gICAgICBwb2ludCwgcG9pbnRTdHJlYW0gPSB7cG9pbnQ6IGZ1bmN0aW9uKHgsIHkpIHsgcG9pbnQgPSBbeCwgeV07IH19O1xuXG4gIGZ1bmN0aW9uIGFsYmVyc1VzYShjb29yZGluYXRlcykge1xuICAgIHZhciB4ID0gY29vcmRpbmF0ZXNbMF0sIHkgPSBjb29yZGluYXRlc1sxXTtcbiAgICByZXR1cm4gcG9pbnQgPSBudWxsLFxuICAgICAgICAobG93ZXI0OFBvaW50LnBvaW50KHgsIHkpLCBwb2ludClcbiAgICAgICAgfHwgKGFsYXNrYVBvaW50LnBvaW50KHgsIHkpLCBwb2ludClcbiAgICAgICAgfHwgKGhhd2FpaVBvaW50LnBvaW50KHgsIHkpLCBwb2ludCk7XG4gIH1cblxuICBhbGJlcnNVc2EuaW52ZXJ0ID0gZnVuY3Rpb24oY29vcmRpbmF0ZXMpIHtcbiAgICB2YXIgayA9IGxvd2VyNDguc2NhbGUoKSxcbiAgICAgICAgdCA9IGxvd2VyNDgudHJhbnNsYXRlKCksXG4gICAgICAgIHggPSAoY29vcmRpbmF0ZXNbMF0gLSB0WzBdKSAvIGssXG4gICAgICAgIHkgPSAoY29vcmRpbmF0ZXNbMV0gLSB0WzFdKSAvIGs7XG4gICAgcmV0dXJuICh5ID49IDAuMTIwICYmIHkgPCAwLjIzNCAmJiB4ID49IC0wLjQyNSAmJiB4IDwgLTAuMjE0ID8gYWxhc2thXG4gICAgICAgIDogeSA+PSAwLjE2NiAmJiB5IDwgMC4yMzQgJiYgeCA+PSAtMC4yMTQgJiYgeCA8IC0wLjExNSA/IGhhd2FpaVxuICAgICAgICA6IGxvd2VyNDgpLmludmVydChjb29yZGluYXRlcyk7XG4gIH07XG5cbiAgYWxiZXJzVXNhLnN0cmVhbSA9IGZ1bmN0aW9uKHN0cmVhbSkge1xuICAgIHJldHVybiBjYWNoZSAmJiBjYWNoZVN0cmVhbSA9PT0gc3RyZWFtID8gY2FjaGUgOiBjYWNoZSA9IG11bHRpcGxleChbbG93ZXI0OC5zdHJlYW0oY2FjaGVTdHJlYW0gPSBzdHJlYW0pLCBhbGFza2Euc3RyZWFtKHN0cmVhbSksIGhhd2FpaS5zdHJlYW0oc3RyZWFtKV0pO1xuICB9O1xuXG4gIGFsYmVyc1VzYS5wcmVjaXNpb24gPSBmdW5jdGlvbihfKSB7XG4gICAgaWYgKCFhcmd1bWVudHMubGVuZ3RoKSByZXR1cm4gbG93ZXI0OC5wcmVjaXNpb24oKTtcbiAgICBsb3dlcjQ4LnByZWNpc2lvbihfKSwgYWxhc2thLnByZWNpc2lvbihfKSwgaGF3YWlpLnByZWNpc2lvbihfKTtcbiAgICByZXR1cm4gcmVzZXQoKTtcbiAgfTtcblxuICBhbGJlcnNVc2Euc2NhbGUgPSBmdW5jdGlvbihfKSB7XG4gICAgaWYgKCFhcmd1bWVudHMubGVuZ3RoKSByZXR1cm4gbG93ZXI0OC5zY2FsZSgpO1xuICAgIGxvd2VyNDguc2NhbGUoXyksIGFsYXNrYS5zY2FsZShfICogMC4zNSksIGhhd2FpaS5zY2FsZShfKTtcbiAgICByZXR1cm4gYWxiZXJzVXNhLnRyYW5zbGF0ZShsb3dlcjQ4LnRyYW5zbGF0ZSgpKTtcbiAgfTtcblxuICBhbGJlcnNVc2EudHJhbnNsYXRlID0gZnVuY3Rpb24oXykge1xuICAgIGlmICghYXJndW1lbnRzLmxlbmd0aCkgcmV0dXJuIGxvd2VyNDgudHJhbnNsYXRlKCk7XG4gICAgdmFyIGsgPSBsb3dlcjQ4LnNjYWxlKCksIHggPSArX1swXSwgeSA9ICtfWzFdO1xuXG4gICAgbG93ZXI0OFBvaW50ID0gbG93ZXI0OFxuICAgICAgICAudHJhbnNsYXRlKF8pXG4gICAgICAgIC5jbGlwRXh0ZW50KFtbeCAtIDAuNDU1ICogaywgeSAtIDAuMjM4ICoga10sIFt4ICsgMC40NTUgKiBrLCB5ICsgMC4yMzggKiBrXV0pXG4gICAgICAgIC5zdHJlYW0ocG9pbnRTdHJlYW0pO1xuXG4gICAgYWxhc2thUG9pbnQgPSBhbGFza2FcbiAgICAgICAgLnRyYW5zbGF0ZShbeCAtIDAuMzA3ICogaywgeSArIDAuMjAxICoga10pXG4gICAgICAgIC5jbGlwRXh0ZW50KFtbeCAtIDAuNDI1ICogayArIGVwc2lsb24sIHkgKyAwLjEyMCAqIGsgKyBlcHNpbG9uXSwgW3ggLSAwLjIxNCAqIGsgLSBlcHNpbG9uLCB5ICsgMC4yMzQgKiBrIC0gZXBzaWxvbl1dKVxuICAgICAgICAuc3RyZWFtKHBvaW50U3RyZWFtKTtcblxuICAgIGhhd2FpaVBvaW50ID0gaGF3YWlpXG4gICAgICAgIC50cmFuc2xhdGUoW3ggLSAwLjIwNSAqIGssIHkgKyAwLjIxMiAqIGtdKVxuICAgICAgICAuY2xpcEV4dGVudChbW3ggLSAwLjIxNCAqIGsgKyBlcHNpbG9uLCB5ICsgMC4xNjYgKiBrICsgZXBzaWxvbl0sIFt4IC0gMC4xMTUgKiBrIC0gZXBzaWxvbiwgeSArIDAuMjM0ICogayAtIGVwc2lsb25dXSlcbiAgICAgICAgLnN0cmVhbShwb2ludFN0cmVhbSk7XG5cbiAgICByZXR1cm4gcmVzZXQoKTtcbiAgfTtcblxuICBhbGJlcnNVc2EuZml0RXh0ZW50ID0gZnVuY3Rpb24oZXh0ZW50LCBvYmplY3QpIHtcbiAgICByZXR1cm4gZml0RXh0ZW50KGFsYmVyc1VzYSwgZXh0ZW50LCBvYmplY3QpO1xuICB9O1xuXG4gIGFsYmVyc1VzYS5maXRTaXplID0gZnVuY3Rpb24oc2l6ZSwgb2JqZWN0KSB7XG4gICAgcmV0dXJuIGZpdFNpemUoYWxiZXJzVXNhLCBzaXplLCBvYmplY3QpO1xuICB9O1xuXG4gIGFsYmVyc1VzYS5maXRXaWR0aCA9IGZ1bmN0aW9uKHdpZHRoLCBvYmplY3QpIHtcbiAgICByZXR1cm4gZml0V2lkdGgoYWxiZXJzVXNhLCB3aWR0aCwgb2JqZWN0KTtcbiAgfTtcblxuICBhbGJlcnNVc2EuZml0SGVpZ2h0ID0gZnVuY3Rpb24oaGVpZ2h0LCBvYmplY3QpIHtcbiAgICByZXR1cm4gZml0SGVpZ2h0KGFsYmVyc1VzYSwgaGVpZ2h0LCBvYmplY3QpO1xuICB9O1xuXG4gIGZ1bmN0aW9uIHJlc2V0KCkge1xuICAgIGNhY2hlID0gY2FjaGVTdHJlYW0gPSBudWxsO1xuICAgIHJldHVybiBhbGJlcnNVc2E7XG4gIH1cblxuICByZXR1cm4gYWxiZXJzVXNhLnNjYWxlKDEwNzApO1xufVxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvZDMtZ2VvLXByb2plY3Rpb24vbm9kZV9tb2R1bGVzL2QzLWdlby9zcmMvcHJvamVjdGlvbi9hbGJlcnNVc2EuanNcbi8vIG1vZHVsZSBpZCA9IC4vbm9kZV9tb2R1bGVzL2QzLWdlby1wcm9qZWN0aW9uL25vZGVfbW9kdWxlcy9kMy1nZW8vc3JjL3Byb2plY3Rpb24vYWxiZXJzVXNhLmpzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCB7YXNpbiwgYXRhbjIsIGNvcywgc2luLCBzcXJ0fSBmcm9tIFwiLi4vbWF0aFwiO1xuXG5leHBvcnQgZnVuY3Rpb24gYXppbXV0aGFsUmF3KHNjYWxlKSB7XG4gIHJldHVybiBmdW5jdGlvbih4LCB5KSB7XG4gICAgdmFyIGN4ID0gY29zKHgpLFxuICAgICAgICBjeSA9IGNvcyh5KSxcbiAgICAgICAgayA9IHNjYWxlKGN4ICogY3kpO1xuICAgIHJldHVybiBbXG4gICAgICBrICogY3kgKiBzaW4oeCksXG4gICAgICBrICogc2luKHkpXG4gICAgXTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gYXppbXV0aGFsSW52ZXJ0KGFuZ2xlKSB7XG4gIHJldHVybiBmdW5jdGlvbih4LCB5KSB7XG4gICAgdmFyIHogPSBzcXJ0KHggKiB4ICsgeSAqIHkpLFxuICAgICAgICBjID0gYW5nbGUoeiksXG4gICAgICAgIHNjID0gc2luKGMpLFxuICAgICAgICBjYyA9IGNvcyhjKTtcbiAgICByZXR1cm4gW1xuICAgICAgYXRhbjIoeCAqIHNjLCB6ICogY2MpLFxuICAgICAgYXNpbih6ICYmIHkgKiBzYyAvIHopXG4gICAgXTtcbiAgfVxufVxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvZDMtZ2VvLXByb2plY3Rpb24vbm9kZV9tb2R1bGVzL2QzLWdlby9zcmMvcHJvamVjdGlvbi9hemltdXRoYWwuanNcbi8vIG1vZHVsZSBpZCA9IC4vbm9kZV9tb2R1bGVzL2QzLWdlby1wcm9qZWN0aW9uL25vZGVfbW9kdWxlcy9kMy1nZW8vc3JjL3Byb2plY3Rpb24vYXppbXV0aGFsLmpzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCB7YXNpbiwgc3FydH0gZnJvbSBcIi4uL21hdGhcIjtcbmltcG9ydCB7YXppbXV0aGFsUmF3LCBhemltdXRoYWxJbnZlcnR9IGZyb20gXCIuL2F6aW11dGhhbFwiO1xuaW1wb3J0IHByb2plY3Rpb24gZnJvbSBcIi4vaW5kZXhcIjtcblxuZXhwb3J0IHZhciBhemltdXRoYWxFcXVhbEFyZWFSYXcgPSBhemltdXRoYWxSYXcoZnVuY3Rpb24oY3hjeSkge1xuICByZXR1cm4gc3FydCgyIC8gKDEgKyBjeGN5KSk7XG59KTtcblxuYXppbXV0aGFsRXF1YWxBcmVhUmF3LmludmVydCA9IGF6aW11dGhhbEludmVydChmdW5jdGlvbih6KSB7XG4gIHJldHVybiAyICogYXNpbih6IC8gMik7XG59KTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oKSB7XG4gIHJldHVybiBwcm9qZWN0aW9uKGF6aW11dGhhbEVxdWFsQXJlYVJhdylcbiAgICAgIC5zY2FsZSgxMjQuNzUpXG4gICAgICAuY2xpcEFuZ2xlKDE4MCAtIDFlLTMpO1xufVxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvZDMtZ2VvLXByb2plY3Rpb24vbm9kZV9tb2R1bGVzL2QzLWdlby9zcmMvcHJvamVjdGlvbi9hemltdXRoYWxFcXVhbEFyZWEuanNcbi8vIG1vZHVsZSBpZCA9IC4vbm9kZV9tb2R1bGVzL2QzLWdlby1wcm9qZWN0aW9uL25vZGVfbW9kdWxlcy9kMy1nZW8vc3JjL3Byb2plY3Rpb24vYXppbXV0aGFsRXF1YWxBcmVhLmpzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCB7YWNvcywgc2lufSBmcm9tIFwiLi4vbWF0aFwiO1xuaW1wb3J0IHthemltdXRoYWxSYXcsIGF6aW11dGhhbEludmVydH0gZnJvbSBcIi4vYXppbXV0aGFsXCI7XG5pbXBvcnQgcHJvamVjdGlvbiBmcm9tIFwiLi9pbmRleFwiO1xuXG5leHBvcnQgdmFyIGF6aW11dGhhbEVxdWlkaXN0YW50UmF3ID0gYXppbXV0aGFsUmF3KGZ1bmN0aW9uKGMpIHtcbiAgcmV0dXJuIChjID0gYWNvcyhjKSkgJiYgYyAvIHNpbihjKTtcbn0pO1xuXG5hemltdXRoYWxFcXVpZGlzdGFudFJhdy5pbnZlcnQgPSBhemltdXRoYWxJbnZlcnQoZnVuY3Rpb24oeikge1xuICByZXR1cm4gejtcbn0pO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbigpIHtcbiAgcmV0dXJuIHByb2plY3Rpb24oYXppbXV0aGFsRXF1aWRpc3RhbnRSYXcpXG4gICAgICAuc2NhbGUoNzkuNDE4OClcbiAgICAgIC5jbGlwQW5nbGUoMTgwIC0gMWUtMyk7XG59XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9kMy1nZW8tcHJvamVjdGlvbi9ub2RlX21vZHVsZXMvZDMtZ2VvL3NyYy9wcm9qZWN0aW9uL2F6aW11dGhhbEVxdWlkaXN0YW50LmpzXG4vLyBtb2R1bGUgaWQgPSAuL25vZGVfbW9kdWxlcy9kMy1nZW8tcHJvamVjdGlvbi9ub2RlX21vZHVsZXMvZDMtZ2VvL3NyYy9wcm9qZWN0aW9uL2F6aW11dGhhbEVxdWlkaXN0YW50LmpzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCB7ZGVncmVlcywgcGksIHJhZGlhbnN9IGZyb20gXCIuLi9tYXRoXCI7XG5pbXBvcnQge3Byb2plY3Rpb25NdXRhdG9yfSBmcm9tIFwiLi9pbmRleFwiO1xuXG5leHBvcnQgZnVuY3Rpb24gY29uaWNQcm9qZWN0aW9uKHByb2plY3RBdCkge1xuICB2YXIgcGhpMCA9IDAsXG4gICAgICBwaGkxID0gcGkgLyAzLFxuICAgICAgbSA9IHByb2plY3Rpb25NdXRhdG9yKHByb2plY3RBdCksXG4gICAgICBwID0gbShwaGkwLCBwaGkxKTtcblxuICBwLnBhcmFsbGVscyA9IGZ1bmN0aW9uKF8pIHtcbiAgICByZXR1cm4gYXJndW1lbnRzLmxlbmd0aCA/IG0ocGhpMCA9IF9bMF0gKiByYWRpYW5zLCBwaGkxID0gX1sxXSAqIHJhZGlhbnMpIDogW3BoaTAgKiBkZWdyZWVzLCBwaGkxICogZGVncmVlc107XG4gIH07XG5cbiAgcmV0dXJuIHA7XG59XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9kMy1nZW8tcHJvamVjdGlvbi9ub2RlX21vZHVsZXMvZDMtZ2VvL3NyYy9wcm9qZWN0aW9uL2NvbmljLmpzXG4vLyBtb2R1bGUgaWQgPSAuL25vZGVfbW9kdWxlcy9kMy1nZW8tcHJvamVjdGlvbi9ub2RlX21vZHVsZXMvZDMtZ2VvL3NyYy9wcm9qZWN0aW9uL2NvbmljLmpzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCB7YWJzLCBhdGFuLCBhdGFuMiwgY29zLCBlcHNpbG9uLCBoYWxmUGksIGxvZywgcG93LCBzaWduLCBzaW4sIHNxcnQsIHRhbn0gZnJvbSBcIi4uL21hdGhcIjtcbmltcG9ydCB7Y29uaWNQcm9qZWN0aW9ufSBmcm9tIFwiLi9jb25pY1wiO1xuaW1wb3J0IHttZXJjYXRvclJhd30gZnJvbSBcIi4vbWVyY2F0b3JcIjtcblxuZnVuY3Rpb24gdGFueSh5KSB7XG4gIHJldHVybiB0YW4oKGhhbGZQaSArIHkpIC8gMik7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjb25pY0NvbmZvcm1hbFJhdyh5MCwgeTEpIHtcbiAgdmFyIGN5MCA9IGNvcyh5MCksXG4gICAgICBuID0geTAgPT09IHkxID8gc2luKHkwKSA6IGxvZyhjeTAgLyBjb3MoeTEpKSAvIGxvZyh0YW55KHkxKSAvIHRhbnkoeTApKSxcbiAgICAgIGYgPSBjeTAgKiBwb3codGFueSh5MCksIG4pIC8gbjtcblxuICBpZiAoIW4pIHJldHVybiBtZXJjYXRvclJhdztcblxuICBmdW5jdGlvbiBwcm9qZWN0KHgsIHkpIHtcbiAgICBpZiAoZiA+IDApIHsgaWYgKHkgPCAtaGFsZlBpICsgZXBzaWxvbikgeSA9IC1oYWxmUGkgKyBlcHNpbG9uOyB9XG4gICAgZWxzZSB7IGlmICh5ID4gaGFsZlBpIC0gZXBzaWxvbikgeSA9IGhhbGZQaSAtIGVwc2lsb247IH1cbiAgICB2YXIgciA9IGYgLyBwb3codGFueSh5KSwgbik7XG4gICAgcmV0dXJuIFtyICogc2luKG4gKiB4KSwgZiAtIHIgKiBjb3MobiAqIHgpXTtcbiAgfVxuXG4gIHByb2plY3QuaW52ZXJ0ID0gZnVuY3Rpb24oeCwgeSkge1xuICAgIHZhciBmeSA9IGYgLSB5LCByID0gc2lnbihuKSAqIHNxcnQoeCAqIHggKyBmeSAqIGZ5KTtcbiAgICByZXR1cm4gW2F0YW4yKHgsIGFicyhmeSkpIC8gbiAqIHNpZ24oZnkpLCAyICogYXRhbihwb3coZiAvIHIsIDEgLyBuKSkgLSBoYWxmUGldO1xuICB9O1xuXG4gIHJldHVybiBwcm9qZWN0O1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbigpIHtcbiAgcmV0dXJuIGNvbmljUHJvamVjdGlvbihjb25pY0NvbmZvcm1hbFJhdylcbiAgICAgIC5zY2FsZSgxMDkuNSlcbiAgICAgIC5wYXJhbGxlbHMoWzMwLCAzMF0pO1xufVxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvZDMtZ2VvLXByb2plY3Rpb24vbm9kZV9tb2R1bGVzL2QzLWdlby9zcmMvcHJvamVjdGlvbi9jb25pY0NvbmZvcm1hbC5qc1xuLy8gbW9kdWxlIGlkID0gLi9ub2RlX21vZHVsZXMvZDMtZ2VvLXByb2plY3Rpb24vbm9kZV9tb2R1bGVzL2QzLWdlby9zcmMvcHJvamVjdGlvbi9jb25pY0NvbmZvcm1hbC5qc1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQge2FicywgYXNpbiwgYXRhbjIsIGNvcywgZXBzaWxvbiwgc2lnbiwgc2luLCBzcXJ0fSBmcm9tIFwiLi4vbWF0aFwiO1xuaW1wb3J0IHtjb25pY1Byb2plY3Rpb259IGZyb20gXCIuL2NvbmljXCI7XG5pbXBvcnQge2N5bGluZHJpY2FsRXF1YWxBcmVhUmF3fSBmcm9tIFwiLi9jeWxpbmRyaWNhbEVxdWFsQXJlYVwiO1xuXG5leHBvcnQgZnVuY3Rpb24gY29uaWNFcXVhbEFyZWFSYXcoeTAsIHkxKSB7XG4gIHZhciBzeTAgPSBzaW4oeTApLCBuID0gKHN5MCArIHNpbih5MSkpIC8gMjtcblxuICAvLyBBcmUgdGhlIHBhcmFsbGVscyBzeW1tZXRyaWNhbCBhcm91bmQgdGhlIEVxdWF0b3I/XG4gIGlmIChhYnMobikgPCBlcHNpbG9uKSByZXR1cm4gY3lsaW5kcmljYWxFcXVhbEFyZWFSYXcoeTApO1xuXG4gIHZhciBjID0gMSArIHN5MCAqICgyICogbiAtIHN5MCksIHIwID0gc3FydChjKSAvIG47XG5cbiAgZnVuY3Rpb24gcHJvamVjdCh4LCB5KSB7XG4gICAgdmFyIHIgPSBzcXJ0KGMgLSAyICogbiAqIHNpbih5KSkgLyBuO1xuICAgIHJldHVybiBbciAqIHNpbih4ICo9IG4pLCByMCAtIHIgKiBjb3MoeCldO1xuICB9XG5cbiAgcHJvamVjdC5pbnZlcnQgPSBmdW5jdGlvbih4LCB5KSB7XG4gICAgdmFyIHIweSA9IHIwIC0geTtcbiAgICByZXR1cm4gW2F0YW4yKHgsIGFicyhyMHkpKSAvIG4gKiBzaWduKHIweSksIGFzaW4oKGMgLSAoeCAqIHggKyByMHkgKiByMHkpICogbiAqIG4pIC8gKDIgKiBuKSldO1xuICB9O1xuXG4gIHJldHVybiBwcm9qZWN0O1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbigpIHtcbiAgcmV0dXJuIGNvbmljUHJvamVjdGlvbihjb25pY0VxdWFsQXJlYVJhdylcbiAgICAgIC5zY2FsZSgxNTUuNDI0KVxuICAgICAgLmNlbnRlcihbMCwgMzMuNjQ0Ml0pO1xufVxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvZDMtZ2VvLXByb2plY3Rpb24vbm9kZV9tb2R1bGVzL2QzLWdlby9zcmMvcHJvamVjdGlvbi9jb25pY0VxdWFsQXJlYS5qc1xuLy8gbW9kdWxlIGlkID0gLi9ub2RlX21vZHVsZXMvZDMtZ2VvLXByb2plY3Rpb24vbm9kZV9tb2R1bGVzL2QzLWdlby9zcmMvcHJvamVjdGlvbi9jb25pY0VxdWFsQXJlYS5qc1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQge2FicywgYXRhbjIsIGNvcywgZXBzaWxvbiwgc2lnbiwgc2luLCBzcXJ0fSBmcm9tIFwiLi4vbWF0aFwiO1xuaW1wb3J0IHtjb25pY1Byb2plY3Rpb259IGZyb20gXCIuL2NvbmljXCI7XG5pbXBvcnQge2VxdWlyZWN0YW5ndWxhclJhd30gZnJvbSBcIi4vZXF1aXJlY3Rhbmd1bGFyXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBjb25pY0VxdWlkaXN0YW50UmF3KHkwLCB5MSkge1xuICB2YXIgY3kwID0gY29zKHkwKSxcbiAgICAgIG4gPSB5MCA9PT0geTEgPyBzaW4oeTApIDogKGN5MCAtIGNvcyh5MSkpIC8gKHkxIC0geTApLFxuICAgICAgZyA9IGN5MCAvIG4gKyB5MDtcblxuICBpZiAoYWJzKG4pIDwgZXBzaWxvbikgcmV0dXJuIGVxdWlyZWN0YW5ndWxhclJhdztcblxuICBmdW5jdGlvbiBwcm9qZWN0KHgsIHkpIHtcbiAgICB2YXIgZ3kgPSBnIC0geSwgbnggPSBuICogeDtcbiAgICByZXR1cm4gW2d5ICogc2luKG54KSwgZyAtIGd5ICogY29zKG54KV07XG4gIH1cblxuICBwcm9qZWN0LmludmVydCA9IGZ1bmN0aW9uKHgsIHkpIHtcbiAgICB2YXIgZ3kgPSBnIC0geTtcbiAgICByZXR1cm4gW2F0YW4yKHgsIGFicyhneSkpIC8gbiAqIHNpZ24oZ3kpLCBnIC0gc2lnbihuKSAqIHNxcnQoeCAqIHggKyBneSAqIGd5KV07XG4gIH07XG5cbiAgcmV0dXJuIHByb2plY3Q7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKCkge1xuICByZXR1cm4gY29uaWNQcm9qZWN0aW9uKGNvbmljRXF1aWRpc3RhbnRSYXcpXG4gICAgICAuc2NhbGUoMTMxLjE1NClcbiAgICAgIC5jZW50ZXIoWzAsIDEzLjkzODldKTtcbn1cblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2QzLWdlby1wcm9qZWN0aW9uL25vZGVfbW9kdWxlcy9kMy1nZW8vc3JjL3Byb2plY3Rpb24vY29uaWNFcXVpZGlzdGFudC5qc1xuLy8gbW9kdWxlIGlkID0gLi9ub2RlX21vZHVsZXMvZDMtZ2VvLXByb2plY3Rpb24vbm9kZV9tb2R1bGVzL2QzLWdlby9zcmMvcHJvamVjdGlvbi9jb25pY0VxdWlkaXN0YW50LmpzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCB7YXNpbiwgY29zLCBzaW59IGZyb20gXCIuLi9tYXRoXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBjeWxpbmRyaWNhbEVxdWFsQXJlYVJhdyhwaGkwKSB7XG4gIHZhciBjb3NQaGkwID0gY29zKHBoaTApO1xuXG4gIGZ1bmN0aW9uIGZvcndhcmQobGFtYmRhLCBwaGkpIHtcbiAgICByZXR1cm4gW2xhbWJkYSAqIGNvc1BoaTAsIHNpbihwaGkpIC8gY29zUGhpMF07XG4gIH1cblxuICBmb3J3YXJkLmludmVydCA9IGZ1bmN0aW9uKHgsIHkpIHtcbiAgICByZXR1cm4gW3ggLyBjb3NQaGkwLCBhc2luKHkgKiBjb3NQaGkwKV07XG4gIH07XG5cbiAgcmV0dXJuIGZvcndhcmQ7XG59XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9kMy1nZW8tcHJvamVjdGlvbi9ub2RlX21vZHVsZXMvZDMtZ2VvL3NyYy9wcm9qZWN0aW9uL2N5bGluZHJpY2FsRXF1YWxBcmVhLmpzXG4vLyBtb2R1bGUgaWQgPSAuL25vZGVfbW9kdWxlcy9kMy1nZW8tcHJvamVjdGlvbi9ub2RlX21vZHVsZXMvZDMtZ2VvL3NyYy9wcm9qZWN0aW9uL2N5bGluZHJpY2FsRXF1YWxBcmVhLmpzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCBwcm9qZWN0aW9uIGZyb20gXCIuL2luZGV4XCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBlcXVpcmVjdGFuZ3VsYXJSYXcobGFtYmRhLCBwaGkpIHtcbiAgcmV0dXJuIFtsYW1iZGEsIHBoaV07XG59XG5cbmVxdWlyZWN0YW5ndWxhclJhdy5pbnZlcnQgPSBlcXVpcmVjdGFuZ3VsYXJSYXc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKCkge1xuICByZXR1cm4gcHJvamVjdGlvbihlcXVpcmVjdGFuZ3VsYXJSYXcpXG4gICAgICAuc2NhbGUoMTUyLjYzKTtcbn1cblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2QzLWdlby1wcm9qZWN0aW9uL25vZGVfbW9kdWxlcy9kMy1nZW8vc3JjL3Byb2plY3Rpb24vZXF1aXJlY3Rhbmd1bGFyLmpzXG4vLyBtb2R1bGUgaWQgPSAuL25vZGVfbW9kdWxlcy9kMy1nZW8tcHJvamVjdGlvbi9ub2RlX21vZHVsZXMvZDMtZ2VvL3NyYy9wcm9qZWN0aW9uL2VxdWlyZWN0YW5ndWxhci5qc1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQge2RlZmF1bHQgYXMgZ2VvU3RyZWFtfSBmcm9tIFwiLi4vc3RyZWFtXCI7XG5pbXBvcnQgYm91bmRzU3RyZWFtIGZyb20gXCIuLi9wYXRoL2JvdW5kc1wiO1xuXG5mdW5jdGlvbiBmaXQocHJvamVjdGlvbiwgZml0Qm91bmRzLCBvYmplY3QpIHtcbiAgdmFyIGNsaXAgPSBwcm9qZWN0aW9uLmNsaXBFeHRlbnQgJiYgcHJvamVjdGlvbi5jbGlwRXh0ZW50KCk7XG4gIHByb2plY3Rpb24uc2NhbGUoMTUwKS50cmFuc2xhdGUoWzAsIDBdKTtcbiAgaWYgKGNsaXAgIT0gbnVsbCkgcHJvamVjdGlvbi5jbGlwRXh0ZW50KG51bGwpO1xuICBnZW9TdHJlYW0ob2JqZWN0LCBwcm9qZWN0aW9uLnN0cmVhbShib3VuZHNTdHJlYW0pKTtcbiAgZml0Qm91bmRzKGJvdW5kc1N0cmVhbS5yZXN1bHQoKSk7XG4gIGlmIChjbGlwICE9IG51bGwpIHByb2plY3Rpb24uY2xpcEV4dGVudChjbGlwKTtcbiAgcmV0dXJuIHByb2plY3Rpb247XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBmaXRFeHRlbnQocHJvamVjdGlvbiwgZXh0ZW50LCBvYmplY3QpIHtcbiAgcmV0dXJuIGZpdChwcm9qZWN0aW9uLCBmdW5jdGlvbihiKSB7XG4gICAgdmFyIHcgPSBleHRlbnRbMV1bMF0gLSBleHRlbnRbMF1bMF0sXG4gICAgICAgIGggPSBleHRlbnRbMV1bMV0gLSBleHRlbnRbMF1bMV0sXG4gICAgICAgIGsgPSBNYXRoLm1pbih3IC8gKGJbMV1bMF0gLSBiWzBdWzBdKSwgaCAvIChiWzFdWzFdIC0gYlswXVsxXSkpLFxuICAgICAgICB4ID0gK2V4dGVudFswXVswXSArICh3IC0gayAqIChiWzFdWzBdICsgYlswXVswXSkpIC8gMixcbiAgICAgICAgeSA9ICtleHRlbnRbMF1bMV0gKyAoaCAtIGsgKiAoYlsxXVsxXSArIGJbMF1bMV0pKSAvIDI7XG4gICAgcHJvamVjdGlvbi5zY2FsZSgxNTAgKiBrKS50cmFuc2xhdGUoW3gsIHldKTtcbiAgfSwgb2JqZWN0KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGZpdFNpemUocHJvamVjdGlvbiwgc2l6ZSwgb2JqZWN0KSB7XG4gIHJldHVybiBmaXRFeHRlbnQocHJvamVjdGlvbiwgW1swLCAwXSwgc2l6ZV0sIG9iamVjdCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBmaXRXaWR0aChwcm9qZWN0aW9uLCB3aWR0aCwgb2JqZWN0KSB7XG4gIHJldHVybiBmaXQocHJvamVjdGlvbiwgZnVuY3Rpb24oYikge1xuICAgIHZhciB3ID0gK3dpZHRoLFxuICAgICAgICBrID0gdyAvIChiWzFdWzBdIC0gYlswXVswXSksXG4gICAgICAgIHggPSAodyAtIGsgKiAoYlsxXVswXSArIGJbMF1bMF0pKSAvIDIsXG4gICAgICAgIHkgPSAtayAqIGJbMF1bMV07XG4gICAgcHJvamVjdGlvbi5zY2FsZSgxNTAgKiBrKS50cmFuc2xhdGUoW3gsIHldKTtcbiAgfSwgb2JqZWN0KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGZpdEhlaWdodChwcm9qZWN0aW9uLCBoZWlnaHQsIG9iamVjdCkge1xuICByZXR1cm4gZml0KHByb2plY3Rpb24sIGZ1bmN0aW9uKGIpIHtcbiAgICB2YXIgaCA9ICtoZWlnaHQsXG4gICAgICAgIGsgPSBoIC8gKGJbMV1bMV0gLSBiWzBdWzFdKSxcbiAgICAgICAgeCA9IC1rICogYlswXVswXSxcbiAgICAgICAgeSA9IChoIC0gayAqIChiWzFdWzFdICsgYlswXVsxXSkpIC8gMjtcbiAgICBwcm9qZWN0aW9uLnNjYWxlKDE1MCAqIGspLnRyYW5zbGF0ZShbeCwgeV0pO1xuICB9LCBvYmplY3QpO1xufVxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvZDMtZ2VvLXByb2plY3Rpb24vbm9kZV9tb2R1bGVzL2QzLWdlby9zcmMvcHJvamVjdGlvbi9maXQuanNcbi8vIG1vZHVsZSBpZCA9IC4vbm9kZV9tb2R1bGVzL2QzLWdlby1wcm9qZWN0aW9uL25vZGVfbW9kdWxlcy9kMy1nZW8vc3JjL3Byb2plY3Rpb24vZml0LmpzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCB7YXRhbiwgY29zLCBzaW59IGZyb20gXCIuLi9tYXRoXCI7XG5pbXBvcnQge2F6aW11dGhhbEludmVydH0gZnJvbSBcIi4vYXppbXV0aGFsXCI7XG5pbXBvcnQgcHJvamVjdGlvbiBmcm9tIFwiLi9pbmRleFwiO1xuXG5leHBvcnQgZnVuY3Rpb24gZ25vbW9uaWNSYXcoeCwgeSkge1xuICB2YXIgY3kgPSBjb3MoeSksIGsgPSBjb3MoeCkgKiBjeTtcbiAgcmV0dXJuIFtjeSAqIHNpbih4KSAvIGssIHNpbih5KSAvIGtdO1xufVxuXG5nbm9tb25pY1Jhdy5pbnZlcnQgPSBhemltdXRoYWxJbnZlcnQoYXRhbik7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKCkge1xuICByZXR1cm4gcHJvamVjdGlvbihnbm9tb25pY1JhdylcbiAgICAgIC5zY2FsZSgxNDQuMDQ5KVxuICAgICAgLmNsaXBBbmdsZSg2MCk7XG59XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9kMy1nZW8tcHJvamVjdGlvbi9ub2RlX21vZHVsZXMvZDMtZ2VvL3NyYy9wcm9qZWN0aW9uL2dub21vbmljLmpzXG4vLyBtb2R1bGUgaWQgPSAuL25vZGVfbW9kdWxlcy9kMy1nZW8tcHJvamVjdGlvbi9ub2RlX21vZHVsZXMvZDMtZ2VvL3NyYy9wcm9qZWN0aW9uL2dub21vbmljLmpzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCBjbGlwUmVjdGFuZ2xlIGZyb20gXCIuLi9jbGlwL3JlY3RhbmdsZVwiO1xuaW1wb3J0IGlkZW50aXR5IGZyb20gXCIuLi9pZGVudGl0eVwiO1xuaW1wb3J0IHt0cmFuc2Zvcm1lcn0gZnJvbSBcIi4uL3RyYW5zZm9ybVwiO1xuaW1wb3J0IHtmaXRFeHRlbnQsIGZpdFNpemUsIGZpdFdpZHRoLCBmaXRIZWlnaHR9IGZyb20gXCIuL2ZpdFwiO1xuXG5mdW5jdGlvbiBzY2FsZVRyYW5zbGF0ZShreCwga3ksIHR4LCB0eSkge1xuICByZXR1cm4ga3ggPT09IDEgJiYga3kgPT09IDEgJiYgdHggPT09IDAgJiYgdHkgPT09IDAgPyBpZGVudGl0eSA6IHRyYW5zZm9ybWVyKHtcbiAgICBwb2ludDogZnVuY3Rpb24oeCwgeSkge1xuICAgICAgdGhpcy5zdHJlYW0ucG9pbnQoeCAqIGt4ICsgdHgsIHkgKiBreSArIHR5KTtcbiAgICB9XG4gIH0pO1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbigpIHtcbiAgdmFyIGsgPSAxLCB0eCA9IDAsIHR5ID0gMCwgc3ggPSAxLCBzeSA9IDEsIHRyYW5zZm9ybSA9IGlkZW50aXR5LCAvLyBzY2FsZSwgdHJhbnNsYXRlIGFuZCByZWZsZWN0XG4gICAgICB4MCA9IG51bGwsIHkwLCB4MSwgeTEsIC8vIGNsaXAgZXh0ZW50XG4gICAgICBwb3N0Y2xpcCA9IGlkZW50aXR5LFxuICAgICAgY2FjaGUsXG4gICAgICBjYWNoZVN0cmVhbSxcbiAgICAgIHByb2plY3Rpb247XG5cbiAgZnVuY3Rpb24gcmVzZXQoKSB7XG4gICAgY2FjaGUgPSBjYWNoZVN0cmVhbSA9IG51bGw7XG4gICAgcmV0dXJuIHByb2plY3Rpb247XG4gIH1cblxuICByZXR1cm4gcHJvamVjdGlvbiA9IHtcbiAgICBzdHJlYW06IGZ1bmN0aW9uKHN0cmVhbSkge1xuICAgICAgcmV0dXJuIGNhY2hlICYmIGNhY2hlU3RyZWFtID09PSBzdHJlYW0gPyBjYWNoZSA6IGNhY2hlID0gdHJhbnNmb3JtKHBvc3RjbGlwKGNhY2hlU3RyZWFtID0gc3RyZWFtKSk7XG4gICAgfSxcbiAgICBwb3N0Y2xpcDogZnVuY3Rpb24oXykge1xuICAgICAgcmV0dXJuIGFyZ3VtZW50cy5sZW5ndGggPyAocG9zdGNsaXAgPSBfLCB4MCA9IHkwID0geDEgPSB5MSA9IG51bGwsIHJlc2V0KCkpIDogcG9zdGNsaXA7XG4gICAgfSxcbiAgICBjbGlwRXh0ZW50OiBmdW5jdGlvbihfKSB7XG4gICAgICByZXR1cm4gYXJndW1lbnRzLmxlbmd0aCA/IChwb3N0Y2xpcCA9IF8gPT0gbnVsbCA/ICh4MCA9IHkwID0geDEgPSB5MSA9IG51bGwsIGlkZW50aXR5KSA6IGNsaXBSZWN0YW5nbGUoeDAgPSArX1swXVswXSwgeTAgPSArX1swXVsxXSwgeDEgPSArX1sxXVswXSwgeTEgPSArX1sxXVsxXSksIHJlc2V0KCkpIDogeDAgPT0gbnVsbCA/IG51bGwgOiBbW3gwLCB5MF0sIFt4MSwgeTFdXTtcbiAgICB9LFxuICAgIHNjYWxlOiBmdW5jdGlvbihfKSB7XG4gICAgICByZXR1cm4gYXJndW1lbnRzLmxlbmd0aCA/ICh0cmFuc2Zvcm0gPSBzY2FsZVRyYW5zbGF0ZSgoayA9ICtfKSAqIHN4LCBrICogc3ksIHR4LCB0eSksIHJlc2V0KCkpIDogaztcbiAgICB9LFxuICAgIHRyYW5zbGF0ZTogZnVuY3Rpb24oXykge1xuICAgICAgcmV0dXJuIGFyZ3VtZW50cy5sZW5ndGggPyAodHJhbnNmb3JtID0gc2NhbGVUcmFuc2xhdGUoayAqIHN4LCBrICogc3ksIHR4ID0gK19bMF0sIHR5ID0gK19bMV0pLCByZXNldCgpKSA6IFt0eCwgdHldO1xuICAgIH0sXG4gICAgcmVmbGVjdFg6IGZ1bmN0aW9uKF8pIHtcbiAgICAgIHJldHVybiBhcmd1bWVudHMubGVuZ3RoID8gKHRyYW5zZm9ybSA9IHNjYWxlVHJhbnNsYXRlKGsgKiAoc3ggPSBfID8gLTEgOiAxKSwgayAqIHN5LCB0eCwgdHkpLCByZXNldCgpKSA6IHN4IDwgMDtcbiAgICB9LFxuICAgIHJlZmxlY3RZOiBmdW5jdGlvbihfKSB7XG4gICAgICByZXR1cm4gYXJndW1lbnRzLmxlbmd0aCA/ICh0cmFuc2Zvcm0gPSBzY2FsZVRyYW5zbGF0ZShrICogc3gsIGsgKiAoc3kgPSBfID8gLTEgOiAxKSwgdHgsIHR5KSwgcmVzZXQoKSkgOiBzeSA8IDA7XG4gICAgfSxcbiAgICBmaXRFeHRlbnQ6IGZ1bmN0aW9uKGV4dGVudCwgb2JqZWN0KSB7XG4gICAgICByZXR1cm4gZml0RXh0ZW50KHByb2plY3Rpb24sIGV4dGVudCwgb2JqZWN0KTtcbiAgICB9LFxuICAgIGZpdFNpemU6IGZ1bmN0aW9uKHNpemUsIG9iamVjdCkge1xuICAgICAgcmV0dXJuIGZpdFNpemUocHJvamVjdGlvbiwgc2l6ZSwgb2JqZWN0KTtcbiAgICB9LFxuICAgIGZpdFdpZHRoOiBmdW5jdGlvbih3aWR0aCwgb2JqZWN0KSB7XG4gICAgICByZXR1cm4gZml0V2lkdGgocHJvamVjdGlvbiwgd2lkdGgsIG9iamVjdCk7XG4gICAgfSxcbiAgICBmaXRIZWlnaHQ6IGZ1bmN0aW9uKGhlaWdodCwgb2JqZWN0KSB7XG4gICAgICByZXR1cm4gZml0SGVpZ2h0KHByb2plY3Rpb24sIGhlaWdodCwgb2JqZWN0KTtcbiAgICB9XG4gIH07XG59XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9kMy1nZW8tcHJvamVjdGlvbi9ub2RlX21vZHVsZXMvZDMtZ2VvL3NyYy9wcm9qZWN0aW9uL2lkZW50aXR5LmpzXG4vLyBtb2R1bGUgaWQgPSAuL25vZGVfbW9kdWxlcy9kMy1nZW8tcHJvamVjdGlvbi9ub2RlX21vZHVsZXMvZDMtZ2VvL3NyYy9wcm9qZWN0aW9uL2lkZW50aXR5LmpzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCBjbGlwQW50aW1lcmlkaWFuIGZyb20gXCIuLi9jbGlwL2FudGltZXJpZGlhblwiO1xuaW1wb3J0IGNsaXBDaXJjbGUgZnJvbSBcIi4uL2NsaXAvY2lyY2xlXCI7XG5pbXBvcnQgY2xpcFJlY3RhbmdsZSBmcm9tIFwiLi4vY2xpcC9yZWN0YW5nbGVcIjtcbmltcG9ydCBjb21wb3NlIGZyb20gXCIuLi9jb21wb3NlXCI7XG5pbXBvcnQgaWRlbnRpdHkgZnJvbSBcIi4uL2lkZW50aXR5XCI7XG5pbXBvcnQge2RlZ3JlZXMsIHJhZGlhbnMsIHNxcnR9IGZyb20gXCIuLi9tYXRoXCI7XG5pbXBvcnQge3JvdGF0ZVJhZGlhbnN9IGZyb20gXCIuLi9yb3RhdGlvblwiO1xuaW1wb3J0IHt0cmFuc2Zvcm1lcn0gZnJvbSBcIi4uL3RyYW5zZm9ybVwiO1xuaW1wb3J0IHtmaXRFeHRlbnQsIGZpdFNpemUsIGZpdFdpZHRoLCBmaXRIZWlnaHR9IGZyb20gXCIuL2ZpdFwiO1xuaW1wb3J0IHJlc2FtcGxlIGZyb20gXCIuL3Jlc2FtcGxlXCI7XG5cbnZhciB0cmFuc2Zvcm1SYWRpYW5zID0gdHJhbnNmb3JtZXIoe1xuICBwb2ludDogZnVuY3Rpb24oeCwgeSkge1xuICAgIHRoaXMuc3RyZWFtLnBvaW50KHggKiByYWRpYW5zLCB5ICogcmFkaWFucyk7XG4gIH1cbn0pO1xuXG5mdW5jdGlvbiB0cmFuc2Zvcm1Sb3RhdGUocm90YXRlKSB7XG4gIHJldHVybiB0cmFuc2Zvcm1lcih7XG4gICAgcG9pbnQ6IGZ1bmN0aW9uKHgsIHkpIHtcbiAgICAgIHZhciByID0gcm90YXRlKHgsIHkpO1xuICAgICAgcmV0dXJuIHRoaXMuc3RyZWFtLnBvaW50KHJbMF0sIHJbMV0pO1xuICAgIH1cbiAgfSk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHByb2plY3Rpb24ocHJvamVjdCkge1xuICByZXR1cm4gcHJvamVjdGlvbk11dGF0b3IoZnVuY3Rpb24oKSB7IHJldHVybiBwcm9qZWN0OyB9KSgpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcHJvamVjdGlvbk11dGF0b3IocHJvamVjdEF0KSB7XG4gIHZhciBwcm9qZWN0LFxuICAgICAgayA9IDE1MCwgLy8gc2NhbGVcbiAgICAgIHggPSA0ODAsIHkgPSAyNTAsIC8vIHRyYW5zbGF0ZVxuICAgICAgZHgsIGR5LCBsYW1iZGEgPSAwLCBwaGkgPSAwLCAvLyBjZW50ZXJcbiAgICAgIGRlbHRhTGFtYmRhID0gMCwgZGVsdGFQaGkgPSAwLCBkZWx0YUdhbW1hID0gMCwgcm90YXRlLCBwcm9qZWN0Um90YXRlLCAvLyByb3RhdGVcbiAgICAgIHRoZXRhID0gbnVsbCwgcHJlY2xpcCA9IGNsaXBBbnRpbWVyaWRpYW4sIC8vIGNsaXAgYW5nbGVcbiAgICAgIHgwID0gbnVsbCwgeTAsIHgxLCB5MSwgcG9zdGNsaXAgPSBpZGVudGl0eSwgLy8gY2xpcCBleHRlbnRcbiAgICAgIGRlbHRhMiA9IDAuNSwgcHJvamVjdFJlc2FtcGxlID0gcmVzYW1wbGUocHJvamVjdFRyYW5zZm9ybSwgZGVsdGEyKSwgLy8gcHJlY2lzaW9uXG4gICAgICBjYWNoZSxcbiAgICAgIGNhY2hlU3RyZWFtO1xuXG4gIGZ1bmN0aW9uIHByb2plY3Rpb24ocG9pbnQpIHtcbiAgICBwb2ludCA9IHByb2plY3RSb3RhdGUocG9pbnRbMF0gKiByYWRpYW5zLCBwb2ludFsxXSAqIHJhZGlhbnMpO1xuICAgIHJldHVybiBbcG9pbnRbMF0gKiBrICsgZHgsIGR5IC0gcG9pbnRbMV0gKiBrXTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGludmVydChwb2ludCkge1xuICAgIHBvaW50ID0gcHJvamVjdFJvdGF0ZS5pbnZlcnQoKHBvaW50WzBdIC0gZHgpIC8gaywgKGR5IC0gcG9pbnRbMV0pIC8gayk7XG4gICAgcmV0dXJuIHBvaW50ICYmIFtwb2ludFswXSAqIGRlZ3JlZXMsIHBvaW50WzFdICogZGVncmVlc107XG4gIH1cblxuICBmdW5jdGlvbiBwcm9qZWN0VHJhbnNmb3JtKHgsIHkpIHtcbiAgICByZXR1cm4geCA9IHByb2plY3QoeCwgeSksIFt4WzBdICogayArIGR4LCBkeSAtIHhbMV0gKiBrXTtcbiAgfVxuXG4gIHByb2plY3Rpb24uc3RyZWFtID0gZnVuY3Rpb24oc3RyZWFtKSB7XG4gICAgcmV0dXJuIGNhY2hlICYmIGNhY2hlU3RyZWFtID09PSBzdHJlYW0gPyBjYWNoZSA6IGNhY2hlID0gdHJhbnNmb3JtUmFkaWFucyh0cmFuc2Zvcm1Sb3RhdGUocm90YXRlKShwcmVjbGlwKHByb2plY3RSZXNhbXBsZShwb3N0Y2xpcChjYWNoZVN0cmVhbSA9IHN0cmVhbSkpKSkpO1xuICB9O1xuXG4gIHByb2plY3Rpb24ucHJlY2xpcCA9IGZ1bmN0aW9uKF8pIHtcbiAgICByZXR1cm4gYXJndW1lbnRzLmxlbmd0aCA/IChwcmVjbGlwID0gXywgdGhldGEgPSB1bmRlZmluZWQsIHJlc2V0KCkpIDogcHJlY2xpcDtcbiAgfTtcblxuICBwcm9qZWN0aW9uLnBvc3RjbGlwID0gZnVuY3Rpb24oXykge1xuICAgIHJldHVybiBhcmd1bWVudHMubGVuZ3RoID8gKHBvc3RjbGlwID0gXywgeDAgPSB5MCA9IHgxID0geTEgPSBudWxsLCByZXNldCgpKSA6IHBvc3RjbGlwO1xuICB9O1xuXG4gIHByb2plY3Rpb24uY2xpcEFuZ2xlID0gZnVuY3Rpb24oXykge1xuICAgIHJldHVybiBhcmd1bWVudHMubGVuZ3RoID8gKHByZWNsaXAgPSArXyA/IGNsaXBDaXJjbGUodGhldGEgPSBfICogcmFkaWFucykgOiAodGhldGEgPSBudWxsLCBjbGlwQW50aW1lcmlkaWFuKSwgcmVzZXQoKSkgOiB0aGV0YSAqIGRlZ3JlZXM7XG4gIH07XG5cbiAgcHJvamVjdGlvbi5jbGlwRXh0ZW50ID0gZnVuY3Rpb24oXykge1xuICAgIHJldHVybiBhcmd1bWVudHMubGVuZ3RoID8gKHBvc3RjbGlwID0gXyA9PSBudWxsID8gKHgwID0geTAgPSB4MSA9IHkxID0gbnVsbCwgaWRlbnRpdHkpIDogY2xpcFJlY3RhbmdsZSh4MCA9ICtfWzBdWzBdLCB5MCA9ICtfWzBdWzFdLCB4MSA9ICtfWzFdWzBdLCB5MSA9ICtfWzFdWzFdKSwgcmVzZXQoKSkgOiB4MCA9PSBudWxsID8gbnVsbCA6IFtbeDAsIHkwXSwgW3gxLCB5MV1dO1xuICB9O1xuXG4gIHByb2plY3Rpb24uc2NhbGUgPSBmdW5jdGlvbihfKSB7XG4gICAgcmV0dXJuIGFyZ3VtZW50cy5sZW5ndGggPyAoayA9ICtfLCByZWNlbnRlcigpKSA6IGs7XG4gIH07XG5cbiAgcHJvamVjdGlvbi50cmFuc2xhdGUgPSBmdW5jdGlvbihfKSB7XG4gICAgcmV0dXJuIGFyZ3VtZW50cy5sZW5ndGggPyAoeCA9ICtfWzBdLCB5ID0gK19bMV0sIHJlY2VudGVyKCkpIDogW3gsIHldO1xuICB9O1xuXG4gIHByb2plY3Rpb24uY2VudGVyID0gZnVuY3Rpb24oXykge1xuICAgIHJldHVybiBhcmd1bWVudHMubGVuZ3RoID8gKGxhbWJkYSA9IF9bMF0gJSAzNjAgKiByYWRpYW5zLCBwaGkgPSBfWzFdICUgMzYwICogcmFkaWFucywgcmVjZW50ZXIoKSkgOiBbbGFtYmRhICogZGVncmVlcywgcGhpICogZGVncmVlc107XG4gIH07XG5cbiAgcHJvamVjdGlvbi5yb3RhdGUgPSBmdW5jdGlvbihfKSB7XG4gICAgcmV0dXJuIGFyZ3VtZW50cy5sZW5ndGggPyAoZGVsdGFMYW1iZGEgPSBfWzBdICUgMzYwICogcmFkaWFucywgZGVsdGFQaGkgPSBfWzFdICUgMzYwICogcmFkaWFucywgZGVsdGFHYW1tYSA9IF8ubGVuZ3RoID4gMiA/IF9bMl0gJSAzNjAgKiByYWRpYW5zIDogMCwgcmVjZW50ZXIoKSkgOiBbZGVsdGFMYW1iZGEgKiBkZWdyZWVzLCBkZWx0YVBoaSAqIGRlZ3JlZXMsIGRlbHRhR2FtbWEgKiBkZWdyZWVzXTtcbiAgfTtcblxuICBwcm9qZWN0aW9uLnByZWNpc2lvbiA9IGZ1bmN0aW9uKF8pIHtcbiAgICByZXR1cm4gYXJndW1lbnRzLmxlbmd0aCA/IChwcm9qZWN0UmVzYW1wbGUgPSByZXNhbXBsZShwcm9qZWN0VHJhbnNmb3JtLCBkZWx0YTIgPSBfICogXyksIHJlc2V0KCkpIDogc3FydChkZWx0YTIpO1xuICB9O1xuXG4gIHByb2plY3Rpb24uZml0RXh0ZW50ID0gZnVuY3Rpb24oZXh0ZW50LCBvYmplY3QpIHtcbiAgICByZXR1cm4gZml0RXh0ZW50KHByb2plY3Rpb24sIGV4dGVudCwgb2JqZWN0KTtcbiAgfTtcblxuICBwcm9qZWN0aW9uLmZpdFNpemUgPSBmdW5jdGlvbihzaXplLCBvYmplY3QpIHtcbiAgICByZXR1cm4gZml0U2l6ZShwcm9qZWN0aW9uLCBzaXplLCBvYmplY3QpO1xuICB9O1xuXG4gIHByb2plY3Rpb24uZml0V2lkdGggPSBmdW5jdGlvbih3aWR0aCwgb2JqZWN0KSB7XG4gICAgcmV0dXJuIGZpdFdpZHRoKHByb2plY3Rpb24sIHdpZHRoLCBvYmplY3QpO1xuICB9O1xuXG4gIHByb2plY3Rpb24uZml0SGVpZ2h0ID0gZnVuY3Rpb24oaGVpZ2h0LCBvYmplY3QpIHtcbiAgICByZXR1cm4gZml0SGVpZ2h0KHByb2plY3Rpb24sIGhlaWdodCwgb2JqZWN0KTtcbiAgfTtcblxuICBmdW5jdGlvbiByZWNlbnRlcigpIHtcbiAgICBwcm9qZWN0Um90YXRlID0gY29tcG9zZShyb3RhdGUgPSByb3RhdGVSYWRpYW5zKGRlbHRhTGFtYmRhLCBkZWx0YVBoaSwgZGVsdGFHYW1tYSksIHByb2plY3QpO1xuICAgIHZhciBjZW50ZXIgPSBwcm9qZWN0KGxhbWJkYSwgcGhpKTtcbiAgICBkeCA9IHggLSBjZW50ZXJbMF0gKiBrO1xuICAgIGR5ID0geSArIGNlbnRlclsxXSAqIGs7XG4gICAgcmV0dXJuIHJlc2V0KCk7XG4gIH1cblxuICBmdW5jdGlvbiByZXNldCgpIHtcbiAgICBjYWNoZSA9IGNhY2hlU3RyZWFtID0gbnVsbDtcbiAgICByZXR1cm4gcHJvamVjdGlvbjtcbiAgfVxuXG4gIHJldHVybiBmdW5jdGlvbigpIHtcbiAgICBwcm9qZWN0ID0gcHJvamVjdEF0LmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgcHJvamVjdGlvbi5pbnZlcnQgPSBwcm9qZWN0LmludmVydCAmJiBpbnZlcnQ7XG4gICAgcmV0dXJuIHJlY2VudGVyKCk7XG4gIH07XG59XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9kMy1nZW8tcHJvamVjdGlvbi9ub2RlX21vZHVsZXMvZDMtZ2VvL3NyYy9wcm9qZWN0aW9uL2luZGV4LmpzXG4vLyBtb2R1bGUgaWQgPSAuL25vZGVfbW9kdWxlcy9kMy1nZW8tcHJvamVjdGlvbi9ub2RlX21vZHVsZXMvZDMtZ2VvL3NyYy9wcm9qZWN0aW9uL2luZGV4LmpzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCB7YXRhbiwgZXhwLCBoYWxmUGksIGxvZywgcGksIHRhbiwgdGF1fSBmcm9tIFwiLi4vbWF0aFwiO1xuaW1wb3J0IHJvdGF0aW9uIGZyb20gXCIuLi9yb3RhdGlvblwiO1xuaW1wb3J0IHByb2plY3Rpb24gZnJvbSBcIi4vaW5kZXhcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIG1lcmNhdG9yUmF3KGxhbWJkYSwgcGhpKSB7XG4gIHJldHVybiBbbGFtYmRhLCBsb2codGFuKChoYWxmUGkgKyBwaGkpIC8gMikpXTtcbn1cblxubWVyY2F0b3JSYXcuaW52ZXJ0ID0gZnVuY3Rpb24oeCwgeSkge1xuICByZXR1cm4gW3gsIDIgKiBhdGFuKGV4cCh5KSkgLSBoYWxmUGldO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oKSB7XG4gIHJldHVybiBtZXJjYXRvclByb2plY3Rpb24obWVyY2F0b3JSYXcpXG4gICAgICAuc2NhbGUoOTYxIC8gdGF1KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG1lcmNhdG9yUHJvamVjdGlvbihwcm9qZWN0KSB7XG4gIHZhciBtID0gcHJvamVjdGlvbihwcm9qZWN0KSxcbiAgICAgIGNlbnRlciA9IG0uY2VudGVyLFxuICAgICAgc2NhbGUgPSBtLnNjYWxlLFxuICAgICAgdHJhbnNsYXRlID0gbS50cmFuc2xhdGUsXG4gICAgICBjbGlwRXh0ZW50ID0gbS5jbGlwRXh0ZW50LFxuICAgICAgeDAgPSBudWxsLCB5MCwgeDEsIHkxOyAvLyBjbGlwIGV4dGVudFxuXG4gIG0uc2NhbGUgPSBmdW5jdGlvbihfKSB7XG4gICAgcmV0dXJuIGFyZ3VtZW50cy5sZW5ndGggPyAoc2NhbGUoXyksIHJlY2xpcCgpKSA6IHNjYWxlKCk7XG4gIH07XG5cbiAgbS50cmFuc2xhdGUgPSBmdW5jdGlvbihfKSB7XG4gICAgcmV0dXJuIGFyZ3VtZW50cy5sZW5ndGggPyAodHJhbnNsYXRlKF8pLCByZWNsaXAoKSkgOiB0cmFuc2xhdGUoKTtcbiAgfTtcblxuICBtLmNlbnRlciA9IGZ1bmN0aW9uKF8pIHtcbiAgICByZXR1cm4gYXJndW1lbnRzLmxlbmd0aCA/IChjZW50ZXIoXyksIHJlY2xpcCgpKSA6IGNlbnRlcigpO1xuICB9O1xuXG4gIG0uY2xpcEV4dGVudCA9IGZ1bmN0aW9uKF8pIHtcbiAgICByZXR1cm4gYXJndW1lbnRzLmxlbmd0aCA/ICgoXyA9PSBudWxsID8geDAgPSB5MCA9IHgxID0geTEgPSBudWxsIDogKHgwID0gK19bMF1bMF0sIHkwID0gK19bMF1bMV0sIHgxID0gK19bMV1bMF0sIHkxID0gK19bMV1bMV0pKSwgcmVjbGlwKCkpIDogeDAgPT0gbnVsbCA/IG51bGwgOiBbW3gwLCB5MF0sIFt4MSwgeTFdXTtcbiAgfTtcblxuICBmdW5jdGlvbiByZWNsaXAoKSB7XG4gICAgdmFyIGsgPSBwaSAqIHNjYWxlKCksXG4gICAgICAgIHQgPSBtKHJvdGF0aW9uKG0ucm90YXRlKCkpLmludmVydChbMCwgMF0pKTtcbiAgICByZXR1cm4gY2xpcEV4dGVudCh4MCA9PSBudWxsXG4gICAgICAgID8gW1t0WzBdIC0gaywgdFsxXSAtIGtdLCBbdFswXSArIGssIHRbMV0gKyBrXV0gOiBwcm9qZWN0ID09PSBtZXJjYXRvclJhd1xuICAgICAgICA/IFtbTWF0aC5tYXgodFswXSAtIGssIHgwKSwgeTBdLCBbTWF0aC5taW4odFswXSArIGssIHgxKSwgeTFdXVxuICAgICAgICA6IFtbeDAsIE1hdGgubWF4KHRbMV0gLSBrLCB5MCldLCBbeDEsIE1hdGgubWluKHRbMV0gKyBrLCB5MSldXSk7XG4gIH1cblxuICByZXR1cm4gcmVjbGlwKCk7XG59XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9kMy1nZW8tcHJvamVjdGlvbi9ub2RlX21vZHVsZXMvZDMtZ2VvL3NyYy9wcm9qZWN0aW9uL21lcmNhdG9yLmpzXG4vLyBtb2R1bGUgaWQgPSAuL25vZGVfbW9kdWxlcy9kMy1nZW8tcHJvamVjdGlvbi9ub2RlX21vZHVsZXMvZDMtZ2VvL3NyYy9wcm9qZWN0aW9uL21lcmNhdG9yLmpzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCBwcm9qZWN0aW9uIGZyb20gXCIuL2luZGV4XCI7XG5pbXBvcnQge2FicywgZXBzaWxvbn0gZnJvbSBcIi4uL21hdGhcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIG5hdHVyYWxFYXJ0aDFSYXcobGFtYmRhLCBwaGkpIHtcbiAgdmFyIHBoaTIgPSBwaGkgKiBwaGksIHBoaTQgPSBwaGkyICogcGhpMjtcbiAgcmV0dXJuIFtcbiAgICBsYW1iZGEgKiAoMC44NzA3IC0gMC4xMzE5NzkgKiBwaGkyICsgcGhpNCAqICgtMC4wMTM3OTEgKyBwaGk0ICogKDAuMDAzOTcxICogcGhpMiAtIDAuMDAxNTI5ICogcGhpNCkpKSxcbiAgICBwaGkgKiAoMS4wMDcyMjYgKyBwaGkyICogKDAuMDE1MDg1ICsgcGhpNCAqICgtMC4wNDQ0NzUgKyAwLjAyODg3NCAqIHBoaTIgLSAwLjAwNTkxNiAqIHBoaTQpKSlcbiAgXTtcbn1cblxubmF0dXJhbEVhcnRoMVJhdy5pbnZlcnQgPSBmdW5jdGlvbih4LCB5KSB7XG4gIHZhciBwaGkgPSB5LCBpID0gMjUsIGRlbHRhO1xuICBkbyB7XG4gICAgdmFyIHBoaTIgPSBwaGkgKiBwaGksIHBoaTQgPSBwaGkyICogcGhpMjtcbiAgICBwaGkgLT0gZGVsdGEgPSAocGhpICogKDEuMDA3MjI2ICsgcGhpMiAqICgwLjAxNTA4NSArIHBoaTQgKiAoLTAuMDQ0NDc1ICsgMC4wMjg4NzQgKiBwaGkyIC0gMC4wMDU5MTYgKiBwaGk0KSkpIC0geSkgL1xuICAgICAgICAoMS4wMDcyMjYgKyBwaGkyICogKDAuMDE1MDg1ICogMyArIHBoaTQgKiAoLTAuMDQ0NDc1ICogNyArIDAuMDI4ODc0ICogOSAqIHBoaTIgLSAwLjAwNTkxNiAqIDExICogcGhpNCkpKTtcbiAgfSB3aGlsZSAoYWJzKGRlbHRhKSA+IGVwc2lsb24gJiYgLS1pID4gMCk7XG4gIHJldHVybiBbXG4gICAgeCAvICgwLjg3MDcgKyAocGhpMiA9IHBoaSAqIHBoaSkgKiAoLTAuMTMxOTc5ICsgcGhpMiAqICgtMC4wMTM3OTEgKyBwaGkyICogcGhpMiAqIHBoaTIgKiAoMC4wMDM5NzEgLSAwLjAwMTUyOSAqIHBoaTIpKSkpLFxuICAgIHBoaVxuICBdO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oKSB7XG4gIHJldHVybiBwcm9qZWN0aW9uKG5hdHVyYWxFYXJ0aDFSYXcpXG4gICAgICAuc2NhbGUoMTc1LjI5NSk7XG59XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9kMy1nZW8tcHJvamVjdGlvbi9ub2RlX21vZHVsZXMvZDMtZ2VvL3NyYy9wcm9qZWN0aW9uL25hdHVyYWxFYXJ0aDEuanNcbi8vIG1vZHVsZSBpZCA9IC4vbm9kZV9tb2R1bGVzL2QzLWdlby1wcm9qZWN0aW9uL25vZGVfbW9kdWxlcy9kMy1nZW8vc3JjL3Byb2plY3Rpb24vbmF0dXJhbEVhcnRoMS5qc1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQge2FzaW4sIGNvcywgZXBzaWxvbiwgc2lufSBmcm9tIFwiLi4vbWF0aFwiO1xuaW1wb3J0IHthemltdXRoYWxJbnZlcnR9IGZyb20gXCIuL2F6aW11dGhhbFwiO1xuaW1wb3J0IHByb2plY3Rpb24gZnJvbSBcIi4vaW5kZXhcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIG9ydGhvZ3JhcGhpY1Jhdyh4LCB5KSB7XG4gIHJldHVybiBbY29zKHkpICogc2luKHgpLCBzaW4oeSldO1xufVxuXG5vcnRob2dyYXBoaWNSYXcuaW52ZXJ0ID0gYXppbXV0aGFsSW52ZXJ0KGFzaW4pO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbigpIHtcbiAgcmV0dXJuIHByb2plY3Rpb24ob3J0aG9ncmFwaGljUmF3KVxuICAgICAgLnNjYWxlKDI0OS41KVxuICAgICAgLmNsaXBBbmdsZSg5MCArIGVwc2lsb24pO1xufVxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvZDMtZ2VvLXByb2plY3Rpb24vbm9kZV9tb2R1bGVzL2QzLWdlby9zcmMvcHJvamVjdGlvbi9vcnRob2dyYXBoaWMuanNcbi8vIG1vZHVsZSBpZCA9IC4vbm9kZV9tb2R1bGVzL2QzLWdlby1wcm9qZWN0aW9uL25vZGVfbW9kdWxlcy9kMy1nZW8vc3JjL3Byb2plY3Rpb24vb3J0aG9ncmFwaGljLmpzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCB7Y2FydGVzaWFufSBmcm9tIFwiLi4vY2FydGVzaWFuXCI7XG5pbXBvcnQge2FicywgYXNpbiwgYXRhbjIsIGNvcywgZXBzaWxvbiwgcmFkaWFucywgc3FydH0gZnJvbSBcIi4uL21hdGhcIjtcbmltcG9ydCB7dHJhbnNmb3JtZXJ9IGZyb20gXCIuLi90cmFuc2Zvcm1cIjtcblxudmFyIG1heERlcHRoID0gMTYsIC8vIG1heGltdW0gZGVwdGggb2Ygc3ViZGl2aXNpb25cbiAgICBjb3NNaW5EaXN0YW5jZSA9IGNvcygzMCAqIHJhZGlhbnMpOyAvLyBjb3MobWluaW11bSBhbmd1bGFyIGRpc3RhbmNlKVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbihwcm9qZWN0LCBkZWx0YTIpIHtcbiAgcmV0dXJuICtkZWx0YTIgPyByZXNhbXBsZShwcm9qZWN0LCBkZWx0YTIpIDogcmVzYW1wbGVOb25lKHByb2plY3QpO1xufVxuXG5mdW5jdGlvbiByZXNhbXBsZU5vbmUocHJvamVjdCkge1xuICByZXR1cm4gdHJhbnNmb3JtZXIoe1xuICAgIHBvaW50OiBmdW5jdGlvbih4LCB5KSB7XG4gICAgICB4ID0gcHJvamVjdCh4LCB5KTtcbiAgICAgIHRoaXMuc3RyZWFtLnBvaW50KHhbMF0sIHhbMV0pO1xuICAgIH1cbiAgfSk7XG59XG5cbmZ1bmN0aW9uIHJlc2FtcGxlKHByb2plY3QsIGRlbHRhMikge1xuXG4gIGZ1bmN0aW9uIHJlc2FtcGxlTGluZVRvKHgwLCB5MCwgbGFtYmRhMCwgYTAsIGIwLCBjMCwgeDEsIHkxLCBsYW1iZGExLCBhMSwgYjEsIGMxLCBkZXB0aCwgc3RyZWFtKSB7XG4gICAgdmFyIGR4ID0geDEgLSB4MCxcbiAgICAgICAgZHkgPSB5MSAtIHkwLFxuICAgICAgICBkMiA9IGR4ICogZHggKyBkeSAqIGR5O1xuICAgIGlmIChkMiA+IDQgKiBkZWx0YTIgJiYgZGVwdGgtLSkge1xuICAgICAgdmFyIGEgPSBhMCArIGExLFxuICAgICAgICAgIGIgPSBiMCArIGIxLFxuICAgICAgICAgIGMgPSBjMCArIGMxLFxuICAgICAgICAgIG0gPSBzcXJ0KGEgKiBhICsgYiAqIGIgKyBjICogYyksXG4gICAgICAgICAgcGhpMiA9IGFzaW4oYyAvPSBtKSxcbiAgICAgICAgICBsYW1iZGEyID0gYWJzKGFicyhjKSAtIDEpIDwgZXBzaWxvbiB8fCBhYnMobGFtYmRhMCAtIGxhbWJkYTEpIDwgZXBzaWxvbiA/IChsYW1iZGEwICsgbGFtYmRhMSkgLyAyIDogYXRhbjIoYiwgYSksXG4gICAgICAgICAgcCA9IHByb2plY3QobGFtYmRhMiwgcGhpMiksXG4gICAgICAgICAgeDIgPSBwWzBdLFxuICAgICAgICAgIHkyID0gcFsxXSxcbiAgICAgICAgICBkeDIgPSB4MiAtIHgwLFxuICAgICAgICAgIGR5MiA9IHkyIC0geTAsXG4gICAgICAgICAgZHogPSBkeSAqIGR4MiAtIGR4ICogZHkyO1xuICAgICAgaWYgKGR6ICogZHogLyBkMiA+IGRlbHRhMiAvLyBwZXJwZW5kaWN1bGFyIHByb2plY3RlZCBkaXN0YW5jZVxuICAgICAgICAgIHx8IGFicygoZHggKiBkeDIgKyBkeSAqIGR5MikgLyBkMiAtIDAuNSkgPiAwLjMgLy8gbWlkcG9pbnQgY2xvc2UgdG8gYW4gZW5kXG4gICAgICAgICAgfHwgYTAgKiBhMSArIGIwICogYjEgKyBjMCAqIGMxIDwgY29zTWluRGlzdGFuY2UpIHsgLy8gYW5ndWxhciBkaXN0YW5jZVxuICAgICAgICByZXNhbXBsZUxpbmVUbyh4MCwgeTAsIGxhbWJkYTAsIGEwLCBiMCwgYzAsIHgyLCB5MiwgbGFtYmRhMiwgYSAvPSBtLCBiIC89IG0sIGMsIGRlcHRoLCBzdHJlYW0pO1xuICAgICAgICBzdHJlYW0ucG9pbnQoeDIsIHkyKTtcbiAgICAgICAgcmVzYW1wbGVMaW5lVG8oeDIsIHkyLCBsYW1iZGEyLCBhLCBiLCBjLCB4MSwgeTEsIGxhbWJkYTEsIGExLCBiMSwgYzEsIGRlcHRoLCBzdHJlYW0pO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICByZXR1cm4gZnVuY3Rpb24oc3RyZWFtKSB7XG4gICAgdmFyIGxhbWJkYTAwLCB4MDAsIHkwMCwgYTAwLCBiMDAsIGMwMCwgLy8gZmlyc3QgcG9pbnRcbiAgICAgICAgbGFtYmRhMCwgeDAsIHkwLCBhMCwgYjAsIGMwOyAvLyBwcmV2aW91cyBwb2ludFxuXG4gICAgdmFyIHJlc2FtcGxlU3RyZWFtID0ge1xuICAgICAgcG9pbnQ6IHBvaW50LFxuICAgICAgbGluZVN0YXJ0OiBsaW5lU3RhcnQsXG4gICAgICBsaW5lRW5kOiBsaW5lRW5kLFxuICAgICAgcG9seWdvblN0YXJ0OiBmdW5jdGlvbigpIHsgc3RyZWFtLnBvbHlnb25TdGFydCgpOyByZXNhbXBsZVN0cmVhbS5saW5lU3RhcnQgPSByaW5nU3RhcnQ7IH0sXG4gICAgICBwb2x5Z29uRW5kOiBmdW5jdGlvbigpIHsgc3RyZWFtLnBvbHlnb25FbmQoKTsgcmVzYW1wbGVTdHJlYW0ubGluZVN0YXJ0ID0gbGluZVN0YXJ0OyB9XG4gICAgfTtcblxuICAgIGZ1bmN0aW9uIHBvaW50KHgsIHkpIHtcbiAgICAgIHggPSBwcm9qZWN0KHgsIHkpO1xuICAgICAgc3RyZWFtLnBvaW50KHhbMF0sIHhbMV0pO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGxpbmVTdGFydCgpIHtcbiAgICAgIHgwID0gTmFOO1xuICAgICAgcmVzYW1wbGVTdHJlYW0ucG9pbnQgPSBsaW5lUG9pbnQ7XG4gICAgICBzdHJlYW0ubGluZVN0YXJ0KCk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gbGluZVBvaW50KGxhbWJkYSwgcGhpKSB7XG4gICAgICB2YXIgYyA9IGNhcnRlc2lhbihbbGFtYmRhLCBwaGldKSwgcCA9IHByb2plY3QobGFtYmRhLCBwaGkpO1xuICAgICAgcmVzYW1wbGVMaW5lVG8oeDAsIHkwLCBsYW1iZGEwLCBhMCwgYjAsIGMwLCB4MCA9IHBbMF0sIHkwID0gcFsxXSwgbGFtYmRhMCA9IGxhbWJkYSwgYTAgPSBjWzBdLCBiMCA9IGNbMV0sIGMwID0gY1syXSwgbWF4RGVwdGgsIHN0cmVhbSk7XG4gICAgICBzdHJlYW0ucG9pbnQoeDAsIHkwKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBsaW5lRW5kKCkge1xuICAgICAgcmVzYW1wbGVTdHJlYW0ucG9pbnQgPSBwb2ludDtcbiAgICAgIHN0cmVhbS5saW5lRW5kKCk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcmluZ1N0YXJ0KCkge1xuICAgICAgbGluZVN0YXJ0KCk7XG4gICAgICByZXNhbXBsZVN0cmVhbS5wb2ludCA9IHJpbmdQb2ludDtcbiAgICAgIHJlc2FtcGxlU3RyZWFtLmxpbmVFbmQgPSByaW5nRW5kO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHJpbmdQb2ludChsYW1iZGEsIHBoaSkge1xuICAgICAgbGluZVBvaW50KGxhbWJkYTAwID0gbGFtYmRhLCBwaGkpLCB4MDAgPSB4MCwgeTAwID0geTAsIGEwMCA9IGEwLCBiMDAgPSBiMCwgYzAwID0gYzA7XG4gICAgICByZXNhbXBsZVN0cmVhbS5wb2ludCA9IGxpbmVQb2ludDtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiByaW5nRW5kKCkge1xuICAgICAgcmVzYW1wbGVMaW5lVG8oeDAsIHkwLCBsYW1iZGEwLCBhMCwgYjAsIGMwLCB4MDAsIHkwMCwgbGFtYmRhMDAsIGEwMCwgYjAwLCBjMDAsIG1heERlcHRoLCBzdHJlYW0pO1xuICAgICAgcmVzYW1wbGVTdHJlYW0ubGluZUVuZCA9IGxpbmVFbmQ7XG4gICAgICBsaW5lRW5kKCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHJlc2FtcGxlU3RyZWFtO1xuICB9O1xufVxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvZDMtZ2VvLXByb2plY3Rpb24vbm9kZV9tb2R1bGVzL2QzLWdlby9zcmMvcHJvamVjdGlvbi9yZXNhbXBsZS5qc1xuLy8gbW9kdWxlIGlkID0gLi9ub2RlX21vZHVsZXMvZDMtZ2VvLXByb2plY3Rpb24vbm9kZV9tb2R1bGVzL2QzLWdlby9zcmMvcHJvamVjdGlvbi9yZXNhbXBsZS5qc1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQge2F0YW4sIGNvcywgc2lufSBmcm9tIFwiLi4vbWF0aFwiO1xuaW1wb3J0IHthemltdXRoYWxJbnZlcnR9IGZyb20gXCIuL2F6aW11dGhhbFwiO1xuaW1wb3J0IHByb2plY3Rpb24gZnJvbSBcIi4vaW5kZXhcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIHN0ZXJlb2dyYXBoaWNSYXcoeCwgeSkge1xuICB2YXIgY3kgPSBjb3MoeSksIGsgPSAxICsgY29zKHgpICogY3k7XG4gIHJldHVybiBbY3kgKiBzaW4oeCkgLyBrLCBzaW4oeSkgLyBrXTtcbn1cblxuc3RlcmVvZ3JhcGhpY1Jhdy5pbnZlcnQgPSBhemltdXRoYWxJbnZlcnQoZnVuY3Rpb24oeikge1xuICByZXR1cm4gMiAqIGF0YW4oeik7XG59KTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oKSB7XG4gIHJldHVybiBwcm9qZWN0aW9uKHN0ZXJlb2dyYXBoaWNSYXcpXG4gICAgICAuc2NhbGUoMjUwKVxuICAgICAgLmNsaXBBbmdsZSgxNDIpO1xufVxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvZDMtZ2VvLXByb2plY3Rpb24vbm9kZV9tb2R1bGVzL2QzLWdlby9zcmMvcHJvamVjdGlvbi9zdGVyZW9ncmFwaGljLmpzXG4vLyBtb2R1bGUgaWQgPSAuL25vZGVfbW9kdWxlcy9kMy1nZW8tcHJvamVjdGlvbi9ub2RlX21vZHVsZXMvZDMtZ2VvL3NyYy9wcm9qZWN0aW9uL3N0ZXJlb2dyYXBoaWMuanNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IHthdGFuLCBleHAsIGhhbGZQaSwgbG9nLCB0YW59IGZyb20gXCIuLi9tYXRoXCI7XG5pbXBvcnQge21lcmNhdG9yUHJvamVjdGlvbn0gZnJvbSBcIi4vbWVyY2F0b3JcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIHRyYW5zdmVyc2VNZXJjYXRvclJhdyhsYW1iZGEsIHBoaSkge1xuICByZXR1cm4gW2xvZyh0YW4oKGhhbGZQaSArIHBoaSkgLyAyKSksIC1sYW1iZGFdO1xufVxuXG50cmFuc3ZlcnNlTWVyY2F0b3JSYXcuaW52ZXJ0ID0gZnVuY3Rpb24oeCwgeSkge1xuICByZXR1cm4gWy15LCAyICogYXRhbihleHAoeCkpIC0gaGFsZlBpXTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKCkge1xuICB2YXIgbSA9IG1lcmNhdG9yUHJvamVjdGlvbih0cmFuc3ZlcnNlTWVyY2F0b3JSYXcpLFxuICAgICAgY2VudGVyID0gbS5jZW50ZXIsXG4gICAgICByb3RhdGUgPSBtLnJvdGF0ZTtcblxuICBtLmNlbnRlciA9IGZ1bmN0aW9uKF8pIHtcbiAgICByZXR1cm4gYXJndW1lbnRzLmxlbmd0aCA/IGNlbnRlcihbLV9bMV0sIF9bMF1dKSA6IChfID0gY2VudGVyKCksIFtfWzFdLCAtX1swXV0pO1xuICB9O1xuXG4gIG0ucm90YXRlID0gZnVuY3Rpb24oXykge1xuICAgIHJldHVybiBhcmd1bWVudHMubGVuZ3RoID8gcm90YXRlKFtfWzBdLCBfWzFdLCBfLmxlbmd0aCA+IDIgPyBfWzJdICsgOTAgOiA5MF0pIDogKF8gPSByb3RhdGUoKSwgW19bMF0sIF9bMV0sIF9bMl0gLSA5MF0pO1xuICB9O1xuXG4gIHJldHVybiByb3RhdGUoWzAsIDAsIDkwXSlcbiAgICAgIC5zY2FsZSgxNTkuMTU1KTtcbn1cblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2QzLWdlby1wcm9qZWN0aW9uL25vZGVfbW9kdWxlcy9kMy1nZW8vc3JjL3Byb2plY3Rpb24vdHJhbnN2ZXJzZU1lcmNhdG9yLmpzXG4vLyBtb2R1bGUgaWQgPSAuL25vZGVfbW9kdWxlcy9kMy1nZW8tcHJvamVjdGlvbi9ub2RlX21vZHVsZXMvZDMtZ2VvL3NyYy9wcm9qZWN0aW9uL3RyYW5zdmVyc2VNZXJjYXRvci5qc1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgY29tcG9zZSBmcm9tIFwiLi9jb21wb3NlXCI7XG5pbXBvcnQge2FzaW4sIGF0YW4yLCBjb3MsIGRlZ3JlZXMsIHBpLCByYWRpYW5zLCBzaW4sIHRhdX0gZnJvbSBcIi4vbWF0aFwiO1xuXG5mdW5jdGlvbiByb3RhdGlvbklkZW50aXR5KGxhbWJkYSwgcGhpKSB7XG4gIHJldHVybiBbbGFtYmRhID4gcGkgPyBsYW1iZGEgLSB0YXUgOiBsYW1iZGEgPCAtcGkgPyBsYW1iZGEgKyB0YXUgOiBsYW1iZGEsIHBoaV07XG59XG5cbnJvdGF0aW9uSWRlbnRpdHkuaW52ZXJ0ID0gcm90YXRpb25JZGVudGl0eTtcblxuZXhwb3J0IGZ1bmN0aW9uIHJvdGF0ZVJhZGlhbnMoZGVsdGFMYW1iZGEsIGRlbHRhUGhpLCBkZWx0YUdhbW1hKSB7XG4gIHJldHVybiAoZGVsdGFMYW1iZGEgJT0gdGF1KSA/IChkZWx0YVBoaSB8fCBkZWx0YUdhbW1hID8gY29tcG9zZShyb3RhdGlvbkxhbWJkYShkZWx0YUxhbWJkYSksIHJvdGF0aW9uUGhpR2FtbWEoZGVsdGFQaGksIGRlbHRhR2FtbWEpKVxuICAgIDogcm90YXRpb25MYW1iZGEoZGVsdGFMYW1iZGEpKVxuICAgIDogKGRlbHRhUGhpIHx8IGRlbHRhR2FtbWEgPyByb3RhdGlvblBoaUdhbW1hKGRlbHRhUGhpLCBkZWx0YUdhbW1hKVxuICAgIDogcm90YXRpb25JZGVudGl0eSk7XG59XG5cbmZ1bmN0aW9uIGZvcndhcmRSb3RhdGlvbkxhbWJkYShkZWx0YUxhbWJkYSkge1xuICByZXR1cm4gZnVuY3Rpb24obGFtYmRhLCBwaGkpIHtcbiAgICByZXR1cm4gbGFtYmRhICs9IGRlbHRhTGFtYmRhLCBbbGFtYmRhID4gcGkgPyBsYW1iZGEgLSB0YXUgOiBsYW1iZGEgPCAtcGkgPyBsYW1iZGEgKyB0YXUgOiBsYW1iZGEsIHBoaV07XG4gIH07XG59XG5cbmZ1bmN0aW9uIHJvdGF0aW9uTGFtYmRhKGRlbHRhTGFtYmRhKSB7XG4gIHZhciByb3RhdGlvbiA9IGZvcndhcmRSb3RhdGlvbkxhbWJkYShkZWx0YUxhbWJkYSk7XG4gIHJvdGF0aW9uLmludmVydCA9IGZvcndhcmRSb3RhdGlvbkxhbWJkYSgtZGVsdGFMYW1iZGEpO1xuICByZXR1cm4gcm90YXRpb247XG59XG5cbmZ1bmN0aW9uIHJvdGF0aW9uUGhpR2FtbWEoZGVsdGFQaGksIGRlbHRhR2FtbWEpIHtcbiAgdmFyIGNvc0RlbHRhUGhpID0gY29zKGRlbHRhUGhpKSxcbiAgICAgIHNpbkRlbHRhUGhpID0gc2luKGRlbHRhUGhpKSxcbiAgICAgIGNvc0RlbHRhR2FtbWEgPSBjb3MoZGVsdGFHYW1tYSksXG4gICAgICBzaW5EZWx0YUdhbW1hID0gc2luKGRlbHRhR2FtbWEpO1xuXG4gIGZ1bmN0aW9uIHJvdGF0aW9uKGxhbWJkYSwgcGhpKSB7XG4gICAgdmFyIGNvc1BoaSA9IGNvcyhwaGkpLFxuICAgICAgICB4ID0gY29zKGxhbWJkYSkgKiBjb3NQaGksXG4gICAgICAgIHkgPSBzaW4obGFtYmRhKSAqIGNvc1BoaSxcbiAgICAgICAgeiA9IHNpbihwaGkpLFxuICAgICAgICBrID0geiAqIGNvc0RlbHRhUGhpICsgeCAqIHNpbkRlbHRhUGhpO1xuICAgIHJldHVybiBbXG4gICAgICBhdGFuMih5ICogY29zRGVsdGFHYW1tYSAtIGsgKiBzaW5EZWx0YUdhbW1hLCB4ICogY29zRGVsdGFQaGkgLSB6ICogc2luRGVsdGFQaGkpLFxuICAgICAgYXNpbihrICogY29zRGVsdGFHYW1tYSArIHkgKiBzaW5EZWx0YUdhbW1hKVxuICAgIF07XG4gIH1cblxuICByb3RhdGlvbi5pbnZlcnQgPSBmdW5jdGlvbihsYW1iZGEsIHBoaSkge1xuICAgIHZhciBjb3NQaGkgPSBjb3MocGhpKSxcbiAgICAgICAgeCA9IGNvcyhsYW1iZGEpICogY29zUGhpLFxuICAgICAgICB5ID0gc2luKGxhbWJkYSkgKiBjb3NQaGksXG4gICAgICAgIHogPSBzaW4ocGhpKSxcbiAgICAgICAgayA9IHogKiBjb3NEZWx0YUdhbW1hIC0geSAqIHNpbkRlbHRhR2FtbWE7XG4gICAgcmV0dXJuIFtcbiAgICAgIGF0YW4yKHkgKiBjb3NEZWx0YUdhbW1hICsgeiAqIHNpbkRlbHRhR2FtbWEsIHggKiBjb3NEZWx0YVBoaSArIGsgKiBzaW5EZWx0YVBoaSksXG4gICAgICBhc2luKGsgKiBjb3NEZWx0YVBoaSAtIHggKiBzaW5EZWx0YVBoaSlcbiAgICBdO1xuICB9O1xuXG4gIHJldHVybiByb3RhdGlvbjtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24ocm90YXRlKSB7XG4gIHJvdGF0ZSA9IHJvdGF0ZVJhZGlhbnMocm90YXRlWzBdICogcmFkaWFucywgcm90YXRlWzFdICogcmFkaWFucywgcm90YXRlLmxlbmd0aCA+IDIgPyByb3RhdGVbMl0gKiByYWRpYW5zIDogMCk7XG5cbiAgZnVuY3Rpb24gZm9yd2FyZChjb29yZGluYXRlcykge1xuICAgIGNvb3JkaW5hdGVzID0gcm90YXRlKGNvb3JkaW5hdGVzWzBdICogcmFkaWFucywgY29vcmRpbmF0ZXNbMV0gKiByYWRpYW5zKTtcbiAgICByZXR1cm4gY29vcmRpbmF0ZXNbMF0gKj0gZGVncmVlcywgY29vcmRpbmF0ZXNbMV0gKj0gZGVncmVlcywgY29vcmRpbmF0ZXM7XG4gIH1cblxuICBmb3J3YXJkLmludmVydCA9IGZ1bmN0aW9uKGNvb3JkaW5hdGVzKSB7XG4gICAgY29vcmRpbmF0ZXMgPSByb3RhdGUuaW52ZXJ0KGNvb3JkaW5hdGVzWzBdICogcmFkaWFucywgY29vcmRpbmF0ZXNbMV0gKiByYWRpYW5zKTtcbiAgICByZXR1cm4gY29vcmRpbmF0ZXNbMF0gKj0gZGVncmVlcywgY29vcmRpbmF0ZXNbMV0gKj0gZGVncmVlcywgY29vcmRpbmF0ZXM7XG4gIH07XG5cbiAgcmV0dXJuIGZvcndhcmQ7XG59XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9kMy1nZW8tcHJvamVjdGlvbi9ub2RlX21vZHVsZXMvZDMtZ2VvL3NyYy9yb3RhdGlvbi5qc1xuLy8gbW9kdWxlIGlkID0gLi9ub2RlX21vZHVsZXMvZDMtZ2VvLXByb2plY3Rpb24vbm9kZV9tb2R1bGVzL2QzLWdlby9zcmMvcm90YXRpb24uanNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiZnVuY3Rpb24gc3RyZWFtR2VvbWV0cnkoZ2VvbWV0cnksIHN0cmVhbSkge1xuICBpZiAoZ2VvbWV0cnkgJiYgc3RyZWFtR2VvbWV0cnlUeXBlLmhhc093blByb3BlcnR5KGdlb21ldHJ5LnR5cGUpKSB7XG4gICAgc3RyZWFtR2VvbWV0cnlUeXBlW2dlb21ldHJ5LnR5cGVdKGdlb21ldHJ5LCBzdHJlYW0pO1xuICB9XG59XG5cbnZhciBzdHJlYW1PYmplY3RUeXBlID0ge1xuICBGZWF0dXJlOiBmdW5jdGlvbihvYmplY3QsIHN0cmVhbSkge1xuICAgIHN0cmVhbUdlb21ldHJ5KG9iamVjdC5nZW9tZXRyeSwgc3RyZWFtKTtcbiAgfSxcbiAgRmVhdHVyZUNvbGxlY3Rpb246IGZ1bmN0aW9uKG9iamVjdCwgc3RyZWFtKSB7XG4gICAgdmFyIGZlYXR1cmVzID0gb2JqZWN0LmZlYXR1cmVzLCBpID0gLTEsIG4gPSBmZWF0dXJlcy5sZW5ndGg7XG4gICAgd2hpbGUgKCsraSA8IG4pIHN0cmVhbUdlb21ldHJ5KGZlYXR1cmVzW2ldLmdlb21ldHJ5LCBzdHJlYW0pO1xuICB9XG59O1xuXG52YXIgc3RyZWFtR2VvbWV0cnlUeXBlID0ge1xuICBTcGhlcmU6IGZ1bmN0aW9uKG9iamVjdCwgc3RyZWFtKSB7XG4gICAgc3RyZWFtLnNwaGVyZSgpO1xuICB9LFxuICBQb2ludDogZnVuY3Rpb24ob2JqZWN0LCBzdHJlYW0pIHtcbiAgICBvYmplY3QgPSBvYmplY3QuY29vcmRpbmF0ZXM7XG4gICAgc3RyZWFtLnBvaW50KG9iamVjdFswXSwgb2JqZWN0WzFdLCBvYmplY3RbMl0pO1xuICB9LFxuICBNdWx0aVBvaW50OiBmdW5jdGlvbihvYmplY3QsIHN0cmVhbSkge1xuICAgIHZhciBjb29yZGluYXRlcyA9IG9iamVjdC5jb29yZGluYXRlcywgaSA9IC0xLCBuID0gY29vcmRpbmF0ZXMubGVuZ3RoO1xuICAgIHdoaWxlICgrK2kgPCBuKSBvYmplY3QgPSBjb29yZGluYXRlc1tpXSwgc3RyZWFtLnBvaW50KG9iamVjdFswXSwgb2JqZWN0WzFdLCBvYmplY3RbMl0pO1xuICB9LFxuICBMaW5lU3RyaW5nOiBmdW5jdGlvbihvYmplY3QsIHN0cmVhbSkge1xuICAgIHN0cmVhbUxpbmUob2JqZWN0LmNvb3JkaW5hdGVzLCBzdHJlYW0sIDApO1xuICB9LFxuICBNdWx0aUxpbmVTdHJpbmc6IGZ1bmN0aW9uKG9iamVjdCwgc3RyZWFtKSB7XG4gICAgdmFyIGNvb3JkaW5hdGVzID0gb2JqZWN0LmNvb3JkaW5hdGVzLCBpID0gLTEsIG4gPSBjb29yZGluYXRlcy5sZW5ndGg7XG4gICAgd2hpbGUgKCsraSA8IG4pIHN0cmVhbUxpbmUoY29vcmRpbmF0ZXNbaV0sIHN0cmVhbSwgMCk7XG4gIH0sXG4gIFBvbHlnb246IGZ1bmN0aW9uKG9iamVjdCwgc3RyZWFtKSB7XG4gICAgc3RyZWFtUG9seWdvbihvYmplY3QuY29vcmRpbmF0ZXMsIHN0cmVhbSk7XG4gIH0sXG4gIE11bHRpUG9seWdvbjogZnVuY3Rpb24ob2JqZWN0LCBzdHJlYW0pIHtcbiAgICB2YXIgY29vcmRpbmF0ZXMgPSBvYmplY3QuY29vcmRpbmF0ZXMsIGkgPSAtMSwgbiA9IGNvb3JkaW5hdGVzLmxlbmd0aDtcbiAgICB3aGlsZSAoKytpIDwgbikgc3RyZWFtUG9seWdvbihjb29yZGluYXRlc1tpXSwgc3RyZWFtKTtcbiAgfSxcbiAgR2VvbWV0cnlDb2xsZWN0aW9uOiBmdW5jdGlvbihvYmplY3QsIHN0cmVhbSkge1xuICAgIHZhciBnZW9tZXRyaWVzID0gb2JqZWN0Lmdlb21ldHJpZXMsIGkgPSAtMSwgbiA9IGdlb21ldHJpZXMubGVuZ3RoO1xuICAgIHdoaWxlICgrK2kgPCBuKSBzdHJlYW1HZW9tZXRyeShnZW9tZXRyaWVzW2ldLCBzdHJlYW0pO1xuICB9XG59O1xuXG5mdW5jdGlvbiBzdHJlYW1MaW5lKGNvb3JkaW5hdGVzLCBzdHJlYW0sIGNsb3NlZCkge1xuICB2YXIgaSA9IC0xLCBuID0gY29vcmRpbmF0ZXMubGVuZ3RoIC0gY2xvc2VkLCBjb29yZGluYXRlO1xuICBzdHJlYW0ubGluZVN0YXJ0KCk7XG4gIHdoaWxlICgrK2kgPCBuKSBjb29yZGluYXRlID0gY29vcmRpbmF0ZXNbaV0sIHN0cmVhbS5wb2ludChjb29yZGluYXRlWzBdLCBjb29yZGluYXRlWzFdLCBjb29yZGluYXRlWzJdKTtcbiAgc3RyZWFtLmxpbmVFbmQoKTtcbn1cblxuZnVuY3Rpb24gc3RyZWFtUG9seWdvbihjb29yZGluYXRlcywgc3RyZWFtKSB7XG4gIHZhciBpID0gLTEsIG4gPSBjb29yZGluYXRlcy5sZW5ndGg7XG4gIHN0cmVhbS5wb2x5Z29uU3RhcnQoKTtcbiAgd2hpbGUgKCsraSA8IG4pIHN0cmVhbUxpbmUoY29vcmRpbmF0ZXNbaV0sIHN0cmVhbSwgMSk7XG4gIHN0cmVhbS5wb2x5Z29uRW5kKCk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKG9iamVjdCwgc3RyZWFtKSB7XG4gIGlmIChvYmplY3QgJiYgc3RyZWFtT2JqZWN0VHlwZS5oYXNPd25Qcm9wZXJ0eShvYmplY3QudHlwZSkpIHtcbiAgICBzdHJlYW1PYmplY3RUeXBlW29iamVjdC50eXBlXShvYmplY3QsIHN0cmVhbSk7XG4gIH0gZWxzZSB7XG4gICAgc3RyZWFtR2VvbWV0cnkob2JqZWN0LCBzdHJlYW0pO1xuICB9XG59XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9kMy1nZW8tcHJvamVjdGlvbi9ub2RlX21vZHVsZXMvZDMtZ2VvL3NyYy9zdHJlYW0uanNcbi8vIG1vZHVsZSBpZCA9IC4vbm9kZV9tb2R1bGVzL2QzLWdlby1wcm9qZWN0aW9uL25vZGVfbW9kdWxlcy9kMy1nZW8vc3JjL3N0cmVhbS5qc1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbihtZXRob2RzKSB7XG4gIHJldHVybiB7XG4gICAgc3RyZWFtOiB0cmFuc2Zvcm1lcihtZXRob2RzKVxuICB9O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdHJhbnNmb3JtZXIobWV0aG9kcykge1xuICByZXR1cm4gZnVuY3Rpb24oc3RyZWFtKSB7XG4gICAgdmFyIHMgPSBuZXcgVHJhbnNmb3JtU3RyZWFtO1xuICAgIGZvciAodmFyIGtleSBpbiBtZXRob2RzKSBzW2tleV0gPSBtZXRob2RzW2tleV07XG4gICAgcy5zdHJlYW0gPSBzdHJlYW07XG4gICAgcmV0dXJuIHM7XG4gIH07XG59XG5cbmZ1bmN0aW9uIFRyYW5zZm9ybVN0cmVhbSgpIHt9XG5cblRyYW5zZm9ybVN0cmVhbS5wcm90b3R5cGUgPSB7XG4gIGNvbnN0cnVjdG9yOiBUcmFuc2Zvcm1TdHJlYW0sXG4gIHBvaW50OiBmdW5jdGlvbih4LCB5KSB7IHRoaXMuc3RyZWFtLnBvaW50KHgsIHkpOyB9LFxuICBzcGhlcmU6IGZ1bmN0aW9uKCkgeyB0aGlzLnN0cmVhbS5zcGhlcmUoKTsgfSxcbiAgbGluZVN0YXJ0OiBmdW5jdGlvbigpIHsgdGhpcy5zdHJlYW0ubGluZVN0YXJ0KCk7IH0sXG4gIGxpbmVFbmQ6IGZ1bmN0aW9uKCkgeyB0aGlzLnN0cmVhbS5saW5lRW5kKCk7IH0sXG4gIHBvbHlnb25TdGFydDogZnVuY3Rpb24oKSB7IHRoaXMuc3RyZWFtLnBvbHlnb25TdGFydCgpOyB9LFxuICBwb2x5Z29uRW5kOiBmdW5jdGlvbigpIHsgdGhpcy5zdHJlYW0ucG9seWdvbkVuZCgpOyB9XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvZDMtZ2VvLXByb2plY3Rpb24vbm9kZV9tb2R1bGVzL2QzLWdlby9zcmMvdHJhbnNmb3JtLmpzXG4vLyBtb2R1bGUgaWQgPSAuL25vZGVfbW9kdWxlcy9kMy1nZW8tcHJvamVjdGlvbi9ub2RlX21vZHVsZXMvZDMtZ2VvL3NyYy90cmFuc2Zvcm0uanNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IHtnZW9Qcm9qZWN0aW9uTXV0YXRvciBhcyBwcm9qZWN0aW9uTXV0YXRvcn0gZnJvbSBcImQzLWdlb1wiO1xuaW1wb3J0IHthYnMsIGFzaW4sIGF0YW4yLCBjb3MsIGRlZ3JlZXMsIGVwc2lsb24sIGhhbGZQaSwgbG9nLCByYWRpYW5zLCBzaW4sIHNxcnQsIHRhbn0gZnJvbSBcIi4vbWF0aFwiO1xuXG5leHBvcnQgZnVuY3Rpb24gYWlyeVJhdyhiZXRhKSB7XG4gIHZhciB0YW5CZXRhXzIgPSB0YW4oYmV0YSAvIDIpLFxuICAgICAgYiA9IDIgKiBsb2coY29zKGJldGEgLyAyKSkgLyAodGFuQmV0YV8yICogdGFuQmV0YV8yKTtcblxuICBmdW5jdGlvbiBmb3J3YXJkKHgsIHkpIHtcbiAgICB2YXIgY29zeCA9IGNvcyh4KSxcbiAgICAgICAgY29zeSA9IGNvcyh5KSxcbiAgICAgICAgc2lueSA9IHNpbih5KSxcbiAgICAgICAgY29zeiA9IGNvc3kgKiBjb3N4LFxuICAgICAgICBrID0gLSgoMSAtIGNvc3ogPyBsb2coKDEgKyBjb3N6KSAvIDIpIC8gKDEgLSBjb3N6KSA6IC0wLjUpICsgYiAvICgxICsgY29zeikpO1xuICAgIHJldHVybiBbayAqIGNvc3kgKiBzaW4oeCksIGsgKiBzaW55XTtcbiAgfVxuXG4gIGZvcndhcmQuaW52ZXJ0ID0gZnVuY3Rpb24oeCwgeSkge1xuICAgIHZhciByID0gc3FydCh4ICogeCArIHkgKiB5KSxcbiAgICAgICAgeiA9IC1iZXRhIC8gMixcbiAgICAgICAgaSA9IDUwLCBkZWx0YTtcbiAgICBpZiAoIXIpIHJldHVybiBbMCwgMF07XG4gICAgZG8ge1xuICAgICAgdmFyIHpfMiA9IHogLyAyLFxuICAgICAgICAgIGNvc3pfMiA9IGNvcyh6XzIpLFxuICAgICAgICAgIHNpbnpfMiA9IHNpbih6XzIpLFxuICAgICAgICAgIHRhbnpfMiA9IHRhbih6XzIpLFxuICAgICAgICAgIGxuc2Vjel8yID0gbG9nKDEgLyBjb3N6XzIpO1xuICAgICAgeiAtPSBkZWx0YSA9ICgyIC8gdGFuel8yICogbG5zZWN6XzIgLSBiICogdGFuel8yIC0gcikgLyAoLWxuc2Vjel8yIC8gKHNpbnpfMiAqIHNpbnpfMikgKyAxIC0gYiAvICgyICogY29zel8yICogY29zel8yKSk7XG4gICAgfSB3aGlsZSAoYWJzKGRlbHRhKSA+IGVwc2lsb24gJiYgLS1pID4gMCk7XG4gICAgdmFyIHNpbnogPSBzaW4oeik7XG4gICAgcmV0dXJuIFthdGFuMih4ICogc2lueiwgciAqIGNvcyh6KSksIGFzaW4oeSAqIHNpbnogLyByKV07XG4gIH07XG5cbiAgcmV0dXJuIGZvcndhcmQ7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKCkge1xuICB2YXIgYmV0YSA9IGhhbGZQaSxcbiAgICAgIG0gPSBwcm9qZWN0aW9uTXV0YXRvcihhaXJ5UmF3KSxcbiAgICAgIHAgPSBtKGJldGEpO1xuXG4gIHAucmFkaXVzID0gZnVuY3Rpb24oXykge1xuICAgIHJldHVybiBhcmd1bWVudHMubGVuZ3RoID8gbShiZXRhID0gXyAqIHJhZGlhbnMpIDogYmV0YSAqIGRlZ3JlZXM7XG4gIH07XG5cbiAgcmV0dXJuIHBcbiAgICAgIC5zY2FsZSgxNzkuOTc2KVxuICAgICAgLmNsaXBBbmdsZSgxNDcpO1xufVxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvZDMtZ2VvLXByb2plY3Rpb24vc3JjL2FpcnkuanNcbi8vIG1vZHVsZSBpZCA9IC4vbm9kZV9tb2R1bGVzL2QzLWdlby1wcm9qZWN0aW9uL3NyYy9haXJ5LmpzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCB7Z2VvUHJvamVjdGlvbiBhcyBwcm9qZWN0aW9ufSBmcm9tIFwiZDMtZ2VvXCI7XG5pbXBvcnQge2FicywgYWNvcywgY29zLCBlcHNpbG9uLCBwaSwgc2luLCBzaW5jaSwgc3FydH0gZnJvbSBcIi4vbWF0aFwiO1xuXG5leHBvcnQgZnVuY3Rpb24gYWl0b2ZmUmF3KHgsIHkpIHtcbiAgdmFyIGNvc3kgPSBjb3MoeSksIHNpbmNpYSA9IHNpbmNpKGFjb3MoY29zeSAqIGNvcyh4IC89IDIpKSk7XG4gIHJldHVybiBbMiAqIGNvc3kgKiBzaW4oeCkgKiBzaW5jaWEsIHNpbih5KSAqIHNpbmNpYV07XG59XG5cbi8vIEFib3J0IGlmIFt4LCB5XSBpcyBub3Qgd2l0aGluIGFuIGVsbGlwc2UgY2VudGVyZWQgYXQgWzAsIDBdIHdpdGhcbi8vIHNlbWktbWFqb3IgYXhpcyBwaSBhbmQgc2VtaS1taW5vciBheGlzIHBpLzIuXG5haXRvZmZSYXcuaW52ZXJ0ID0gZnVuY3Rpb24oeCwgeSkge1xuICBpZiAoeCAqIHggKyA0ICogeSAqIHkgPiBwaSAqIHBpICsgZXBzaWxvbikgcmV0dXJuO1xuICB2YXIgeDEgPSB4LCB5MSA9IHksIGkgPSAyNTtcbiAgZG8ge1xuICAgIHZhciBzaW54ID0gc2luKHgxKSxcbiAgICAgICAgc2lueF8yID0gc2luKHgxIC8gMiksXG4gICAgICAgIGNvc3hfMiA9IGNvcyh4MSAvIDIpLFxuICAgICAgICBzaW55ID0gc2luKHkxKSxcbiAgICAgICAgY29zeSA9IGNvcyh5MSksXG4gICAgICAgIHNpbl8yeSA9IHNpbigyICogeTEpLFxuICAgICAgICBzaW4yeSA9IHNpbnkgKiBzaW55LFxuICAgICAgICBjb3MyeSA9IGNvc3kgKiBjb3N5LFxuICAgICAgICBzaW4yeF8yID0gc2lueF8yICogc2lueF8yLFxuICAgICAgICBjID0gMSAtIGNvczJ5ICogY29zeF8yICogY29zeF8yLFxuICAgICAgICBlID0gYyA/IGFjb3MoY29zeSAqIGNvc3hfMikgKiBzcXJ0KGYgPSAxIC8gYykgOiBmID0gMCxcbiAgICAgICAgZixcbiAgICAgICAgZnggPSAyICogZSAqIGNvc3kgKiBzaW54XzIgLSB4LFxuICAgICAgICBmeSA9IGUgKiBzaW55IC0geSxcbiAgICAgICAgZHhkeCA9IGYgKiAoY29zMnkgKiBzaW4yeF8yICsgZSAqIGNvc3kgKiBjb3N4XzIgKiBzaW4yeSksXG4gICAgICAgIGR4ZHkgPSBmICogKDAuNSAqIHNpbnggKiBzaW5fMnkgLSBlICogMiAqIHNpbnkgKiBzaW54XzIpLFxuICAgICAgICBkeWR4ID0gZiAqIDAuMjUgKiAoc2luXzJ5ICogc2lueF8yIC0gZSAqIHNpbnkgKiBjb3MyeSAqIHNpbngpLFxuICAgICAgICBkeWR5ID0gZiAqIChzaW4yeSAqIGNvc3hfMiArIGUgKiBzaW4yeF8yICogY29zeSksXG4gICAgICAgIHogPSBkeGR5ICogZHlkeCAtIGR5ZHkgKiBkeGR4O1xuICAgIGlmICgheikgYnJlYWs7XG4gICAgdmFyIGR4ID0gKGZ5ICogZHhkeSAtIGZ4ICogZHlkeSkgLyB6LFxuICAgICAgICBkeSA9IChmeCAqIGR5ZHggLSBmeSAqIGR4ZHgpIC8gejtcbiAgICB4MSAtPSBkeCwgeTEgLT0gZHk7XG4gIH0gd2hpbGUgKChhYnMoZHgpID4gZXBzaWxvbiB8fCBhYnMoZHkpID4gZXBzaWxvbikgJiYgLS1pID4gMCk7XG4gIHJldHVybiBbeDEsIHkxXTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKCkge1xuICByZXR1cm4gcHJvamVjdGlvbihhaXRvZmZSYXcpXG4gICAgICAuc2NhbGUoMTUyLjYzKTtcbn1cblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2QzLWdlby1wcm9qZWN0aW9uL3NyYy9haXRvZmYuanNcbi8vIG1vZHVsZSBpZCA9IC4vbm9kZV9tb2R1bGVzL2QzLWdlby1wcm9qZWN0aW9uL3NyYy9haXRvZmYuanNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IHtnZW9Qcm9qZWN0aW9uTXV0YXRvciBhcyBwcm9qZWN0aW9uTXV0YXRvcn0gZnJvbSBcImQzLWdlb1wiO1xuaW1wb3J0IHthYnMsIGF0YW4yLCBjb3MsIGRlZ3JlZXMsIGVwc2lsb24sIHJhZGlhbnMsIHNpbiwgdGFufSBmcm9tIFwiLi9tYXRoXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBhcm1hZGlsbG9SYXcocGhpMCkge1xuICB2YXIgc2luUGhpMCA9IHNpbihwaGkwKSxcbiAgICAgIGNvc1BoaTAgPSBjb3MocGhpMCksXG4gICAgICBzUGhpMCA9IHBoaTAgPj0gMCA/IDEgOiAtMSxcbiAgICAgIHRhblBoaTAgPSB0YW4oc1BoaTAgKiBwaGkwKSxcbiAgICAgIGsgPSAoMSArIHNpblBoaTAgLSBjb3NQaGkwKSAvIDI7XG5cbiAgZnVuY3Rpb24gZm9yd2FyZChsYW1iZGEsIHBoaSkge1xuICAgIHZhciBjb3NQaGkgPSBjb3MocGhpKSxcbiAgICAgICAgY29zTGFtYmRhID0gY29zKGxhbWJkYSAvPSAyKTtcbiAgICByZXR1cm4gW1xuICAgICAgKDEgKyBjb3NQaGkpICogc2luKGxhbWJkYSksXG4gICAgICAoc1BoaTAgKiBwaGkgPiAtYXRhbjIoY29zTGFtYmRhLCB0YW5QaGkwKSAtIDFlLTMgPyAwIDogLXNQaGkwICogMTApICsgayArIHNpbihwaGkpICogY29zUGhpMCAtICgxICsgY29zUGhpKSAqIHNpblBoaTAgKiBjb3NMYW1iZGEgLy8gVE9ETyBEMyBjb3JlIHNob3VsZCBhbGxvdyBudWxsIG9yIFtOYU4sIE5hTl0gdG8gYmUgcmV0dXJuZWQuXG4gICAgXTtcbiAgfVxuXG4gIGZvcndhcmQuaW52ZXJ0ID0gZnVuY3Rpb24oeCwgeSkge1xuICAgIHZhciBsYW1iZGEgPSAwLFxuICAgICAgICBwaGkgPSAwLFxuICAgICAgICBpID0gNTA7XG4gICAgZG8ge1xuICAgICAgdmFyIGNvc0xhbWJkYSA9IGNvcyhsYW1iZGEpLFxuICAgICAgICAgIHNpbkxhbWJkYSA9IHNpbihsYW1iZGEpLFxuICAgICAgICAgIGNvc1BoaSA9IGNvcyhwaGkpLFxuICAgICAgICAgIHNpblBoaSA9IHNpbihwaGkpLFxuICAgICAgICAgIEEgPSAxICsgY29zUGhpLFxuICAgICAgICAgIGZ4ID0gQSAqIHNpbkxhbWJkYSAtIHgsXG4gICAgICAgICAgZnkgPSBrICsgc2luUGhpICogY29zUGhpMCAtIEEgKiBzaW5QaGkwICogY29zTGFtYmRhIC0geSxcbiAgICAgICAgICBkeGRMYW1iZGEgPSBBICogY29zTGFtYmRhIC8gMixcbiAgICAgICAgICBkeGRQaGkgPSAtc2luTGFtYmRhICogc2luUGhpLFxuICAgICAgICAgIGR5ZExhbWJkYSA9IHNpblBoaTAgKiBBICogc2luTGFtYmRhIC8gMixcbiAgICAgICAgICBkeWRQaGkgPSBjb3NQaGkwICogY29zUGhpICsgc2luUGhpMCAqIGNvc0xhbWJkYSAqIHNpblBoaSxcbiAgICAgICAgICBkZW5vbWluYXRvciA9IGR4ZFBoaSAqIGR5ZExhbWJkYSAtIGR5ZFBoaSAqIGR4ZExhbWJkYSxcbiAgICAgICAgICBkTGFtYmRhID0gKGZ5ICogZHhkUGhpIC0gZnggKiBkeWRQaGkpIC8gZGVub21pbmF0b3IgLyAyLFxuICAgICAgICAgIGRQaGkgPSAoZnggKiBkeWRMYW1iZGEgLSBmeSAqIGR4ZExhbWJkYSkgLyBkZW5vbWluYXRvcjtcbiAgICAgIGxhbWJkYSAtPSBkTGFtYmRhLCBwaGkgLT0gZFBoaTtcbiAgICB9IHdoaWxlICgoYWJzKGRMYW1iZGEpID4gZXBzaWxvbiB8fCBhYnMoZFBoaSkgPiBlcHNpbG9uKSAmJiAtLWkgPiAwKTtcbiAgICByZXR1cm4gc1BoaTAgKiBwaGkgPiAtYXRhbjIoY29zKGxhbWJkYSksIHRhblBoaTApIC0gMWUtMyA/IFtsYW1iZGEgKiAyLCBwaGldIDogbnVsbDtcbiAgfTtcblxuICByZXR1cm4gZm9yd2FyZDtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oKSB7XG4gIHZhciBwaGkwID0gMjAgKiByYWRpYW5zLFxuICAgICAgc1BoaTAgPSBwaGkwID49IDAgPyAxIDogLTEsXG4gICAgICB0YW5QaGkwID0gdGFuKHNQaGkwICogcGhpMCksXG4gICAgICBtID0gcHJvamVjdGlvbk11dGF0b3IoYXJtYWRpbGxvUmF3KSxcbiAgICAgIHAgPSBtKHBoaTApLFxuICAgICAgc3RyZWFtXyA9IHAuc3RyZWFtO1xuXG4gIHAucGFyYWxsZWwgPSBmdW5jdGlvbihfKSB7XG4gICAgaWYgKCFhcmd1bWVudHMubGVuZ3RoKSByZXR1cm4gcGhpMCAqIGRlZ3JlZXM7XG4gICAgdGFuUGhpMCA9IHRhbigoc1BoaTAgPSAocGhpMCA9IF8gKiByYWRpYW5zKSA+PSAwID8gMSA6IC0xKSAqIHBoaTApO1xuICAgIHJldHVybiBtKHBoaTApO1xuICB9O1xuXG4gIHAuc3RyZWFtID0gZnVuY3Rpb24oc3RyZWFtKSB7XG4gICAgdmFyIHJvdGF0ZSA9IHAucm90YXRlKCksXG4gICAgICAgIHJvdGF0ZVN0cmVhbSA9IHN0cmVhbV8oc3RyZWFtKSxcbiAgICAgICAgc3BoZXJlU3RyZWFtID0gKHAucm90YXRlKFswLCAwXSksIHN0cmVhbV8oc3RyZWFtKSk7XG4gICAgcC5yb3RhdGUocm90YXRlKTtcbiAgICByb3RhdGVTdHJlYW0uc3BoZXJlID0gZnVuY3Rpb24oKSB7XG4gICAgICBzcGhlcmVTdHJlYW0ucG9seWdvblN0YXJ0KCksIHNwaGVyZVN0cmVhbS5saW5lU3RhcnQoKTtcbiAgICAgIGZvciAodmFyIGxhbWJkYSA9IHNQaGkwICogLTE4MDsgc1BoaTAgKiBsYW1iZGEgPCAxODA7IGxhbWJkYSArPSBzUGhpMCAqIDkwKSBzcGhlcmVTdHJlYW0ucG9pbnQobGFtYmRhLCBzUGhpMCAqIDkwKTtcbiAgICAgIHdoaWxlIChzUGhpMCAqIChsYW1iZGEgLT0gcGhpMCkgPj0gLTE4MCkgeyAvLyBUT0RPIHByZWNpc2lvbj9cbiAgICAgICAgc3BoZXJlU3RyZWFtLnBvaW50KGxhbWJkYSwgc1BoaTAgKiAtYXRhbjIoY29zKGxhbWJkYSAqIHJhZGlhbnMgLyAyKSwgdGFuUGhpMCkgKiBkZWdyZWVzKTtcbiAgICAgIH1cbiAgICAgIHNwaGVyZVN0cmVhbS5saW5lRW5kKCksIHNwaGVyZVN0cmVhbS5wb2x5Z29uRW5kKCk7XG4gICAgfTtcbiAgICByZXR1cm4gcm90YXRlU3RyZWFtO1xuICB9O1xuXG4gIHJldHVybiBwXG4gICAgICAuc2NhbGUoMjE4LjY5NSlcbiAgICAgIC5jZW50ZXIoWzAsIDI4LjA5NzRdKTtcbn1cblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2QzLWdlby1wcm9qZWN0aW9uL3NyYy9hcm1hZGlsbG8uanNcbi8vIG1vZHVsZSBpZCA9IC4vbm9kZV9tb2R1bGVzL2QzLWdlby1wcm9qZWN0aW9uL3NyYy9hcm1hZGlsbG8uanNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IHtnZW9Qcm9qZWN0aW9uIGFzIHByb2plY3Rpb259IGZyb20gXCJkMy1nZW9cIjtcbmltcG9ydCB7YWJzLCBhcmNvc2gsIGFyc2luaCwgYXNpbiwgYXRhbjIsIGNvcywgY29zaCwgc2lnbiwgc2luLCBzaW5oLCBzcXJ0LCB0YW59IGZyb20gXCIuL21hdGhcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIGF1Z3VzdFJhdyhsYW1iZGEsIHBoaSkge1xuICB2YXIgdGFuUGhpID0gdGFuKHBoaSAvIDIpLFxuICAgICAgayA9IHNxcnQoMSAtIHRhblBoaSAqIHRhblBoaSksXG4gICAgICBjID0gMSArIGsgKiBjb3MobGFtYmRhIC89IDIpLFxuICAgICAgeCA9IHNpbihsYW1iZGEpICogayAvIGMsXG4gICAgICB5ID0gdGFuUGhpIC8gYyxcbiAgICAgIHgyID0geCAqIHgsXG4gICAgICB5MiA9IHkgKiB5O1xuICByZXR1cm4gW1xuICAgIDQgLyAzICogeCAqICgzICsgeDIgLSAzICogeTIpLFxuICAgIDQgLyAzICogeSAqICgzICsgMyAqIHgyIC0geTIpXG4gIF07XG59XG5cbmF1Z3VzdFJhdy5pbnZlcnQgPSBmdW5jdGlvbih4LCB5KSB7XG4gIHggKj0gMyAvIDgsIHkgKj0gMyAvIDg7XG4gIGlmICgheCAmJiBhYnMoeSkgPiAxKSByZXR1cm4gbnVsbDtcbiAgdmFyIHgyID0geCAqIHgsXG4gICAgICB5MiA9IHkgKiB5LFxuICAgICAgcyA9IDEgKyB4MiArIHkyLFxuICAgICAgc2luM0V0YSA9IHNxcnQoKHMgLSBzcXJ0KHMgKiBzIC0gNCAqIHkgKiB5KSkgLyAyKSxcbiAgICAgIGV0YSA9IGFzaW4oc2luM0V0YSkgLyAzLFxuICAgICAgeGkgPSBzaW4zRXRhID8gYXJjb3NoKGFicyh5IC8gc2luM0V0YSkpIC8gMyA6IGFyc2luaChhYnMoeCkpIC8gMyxcbiAgICAgIGNvc0V0YSA9IGNvcyhldGEpLFxuICAgICAgY29zaFhpID0gY29zaCh4aSksXG4gICAgICBkID0gY29zaFhpICogY29zaFhpIC0gY29zRXRhICogY29zRXRhO1xuICByZXR1cm4gW1xuICAgIHNpZ24oeCkgKiAyICogYXRhbjIoc2luaCh4aSkgKiBjb3NFdGEsIDAuMjUgLSBkKSxcbiAgICBzaWduKHkpICogMiAqIGF0YW4yKGNvc2hYaSAqIHNpbihldGEpLCAwLjI1ICsgZClcbiAgXTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKCkge1xuICByZXR1cm4gcHJvamVjdGlvbihhdWd1c3RSYXcpXG4gICAgICAuc2NhbGUoNjYuMTYwMyk7XG59XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9kMy1nZW8tcHJvamVjdGlvbi9zcmMvYXVndXN0LmpzXG4vLyBtb2R1bGUgaWQgPSAuL25vZGVfbW9kdWxlcy9kMy1nZW8tcHJvamVjdGlvbi9zcmMvYXVndXN0LmpzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCB7Z2VvUHJvamVjdGlvbiBhcyBwcm9qZWN0aW9ufSBmcm9tIFwiZDMtZ2VvXCI7XG5pbXBvcnQge2FicywgYXRhbiwgY29zLCBlcHNpbG9uMiwgZXhwLCBoYWxmUGksIGxvZywgcXVhcnRlclBpLCBzaWduLCBzaW4sIHNxcnQsIHNxcnQyLCB0YW59IGZyb20gXCIuL21hdGhcIjtcblxudmFyIHNxcnQ4ID0gc3FydCg4KSxcbiAgICBwaGkwID0gbG9nKDEgKyBzcXJ0Mik7XG5cbmV4cG9ydCBmdW5jdGlvbiBiYWtlclJhdyhsYW1iZGEsIHBoaSkge1xuICB2YXIgcGhpMCA9IGFicyhwaGkpO1xuICByZXR1cm4gcGhpMCA8IHF1YXJ0ZXJQaVxuICAgICAgPyBbbGFtYmRhLCBsb2codGFuKHF1YXJ0ZXJQaSArIHBoaSAvIDIpKV1cbiAgICAgIDogW2xhbWJkYSAqIGNvcyhwaGkwKSAqICgyICogc3FydDIgLSAxIC8gc2luKHBoaTApKSwgc2lnbihwaGkpICogKDIgKiBzcXJ0MiAqIChwaGkwIC0gcXVhcnRlclBpKSAtIGxvZyh0YW4ocGhpMCAvIDIpKSldO1xufVxuXG5iYWtlclJhdy5pbnZlcnQgPSBmdW5jdGlvbih4LCB5KSB7XG4gIGlmICgoeTAgPSBhYnMoeSkpIDwgcGhpMCkgcmV0dXJuIFt4LCAyICogYXRhbihleHAoeSkpIC0gaGFsZlBpXTtcbiAgdmFyIHBoaSA9IHF1YXJ0ZXJQaSwgaSA9IDI1LCBkZWx0YSwgeTA7XG4gIGRvIHtcbiAgICB2YXIgY29zUGhpXzIgPSBjb3MocGhpIC8gMiksIHRhblBoaV8yID0gdGFuKHBoaSAvIDIpO1xuICAgIHBoaSAtPSBkZWx0YSA9IChzcXJ0OCAqIChwaGkgLSBxdWFydGVyUGkpIC0gbG9nKHRhblBoaV8yKSAtIHkwKSAvIChzcXJ0OCAtIGNvc1BoaV8yICogY29zUGhpXzIgLyAoMiAqIHRhblBoaV8yKSk7XG4gIH0gd2hpbGUgKGFicyhkZWx0YSkgPiBlcHNpbG9uMiAmJiAtLWkgPiAwKTtcbiAgcmV0dXJuIFt4IC8gKGNvcyhwaGkpICogKHNxcnQ4IC0gMSAvIHNpbihwaGkpKSksIHNpZ24oeSkgKiBwaGldO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oKSB7XG4gIHJldHVybiBwcm9qZWN0aW9uKGJha2VyUmF3KVxuICAgICAgLnNjYWxlKDExMi4zMTQpO1xufVxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvZDMtZ2VvLXByb2plY3Rpb24vc3JjL2Jha2VyLmpzXG4vLyBtb2R1bGUgaWQgPSAuL25vZGVfbW9kdWxlcy9kMy1nZW8tcHJvamVjdGlvbi9zcmMvYmFrZXIuanNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IHtnZW9Qcm9qZWN0aW9uTXV0YXRvciBhcyBwcm9qZWN0aW9uTXV0YXRvciwgZ2VvQXppbXV0aGFsRXF1aWRpc3RhbnRSYXcgYXMgYXppbXV0aGFsRXF1aWRpc3RhbnRSYXd9IGZyb20gXCJkMy1nZW9cIjtcbmltcG9ydCB7YWJzLCBhY29zLCBhc2luLCBhdGFuLCBhdGFuMiwgY29zLCBkZWdyZWVzLCBoYWxmUGksIHBpLCByYWRpYW5zLCByb3VuZCwgc2luLCBzcXJ0LCB0YW59IGZyb20gXCIuL21hdGhcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIGJlcmdoYXVzUmF3KGxvYmVzKSB7XG4gIHZhciBrID0gMiAqIHBpIC8gbG9iZXM7XG5cbiAgZnVuY3Rpb24gZm9yd2FyZChsYW1iZGEsIHBoaSkge1xuICAgIHZhciBwID0gYXppbXV0aGFsRXF1aWRpc3RhbnRSYXcobGFtYmRhLCBwaGkpO1xuICAgIGlmIChhYnMobGFtYmRhKSA+IGhhbGZQaSkgeyAvLyBiYWNrIGhlbWlzcGhlcmVcbiAgICAgIHZhciB0aGV0YSA9IGF0YW4yKHBbMV0sIHBbMF0pLFxuICAgICAgICAgIHIgPSBzcXJ0KHBbMF0gKiBwWzBdICsgcFsxXSAqIHBbMV0pLFxuICAgICAgICAgIHRoZXRhMCA9IGsgKiByb3VuZCgodGhldGEgLSBoYWxmUGkpIC8gaykgKyBoYWxmUGksXG4gICAgICAgICAgYWxwaGEgPSBhdGFuMihzaW4odGhldGEgLT0gdGhldGEwKSwgMiAtIGNvcyh0aGV0YSkpOyAvLyBhbmdsZSByZWxhdGl2ZSB0byBsb2JlIGVuZFxuICAgICAgdGhldGEgPSB0aGV0YTAgKyBhc2luKHBpIC8gciAqIHNpbihhbHBoYSkpIC0gYWxwaGE7XG4gICAgICBwWzBdID0gciAqIGNvcyh0aGV0YSk7XG4gICAgICBwWzFdID0gciAqIHNpbih0aGV0YSk7XG4gICAgfVxuICAgIHJldHVybiBwO1xuICB9XG5cbiAgZm9yd2FyZC5pbnZlcnQgPSBmdW5jdGlvbih4LCB5KSB7XG4gICAgdmFyIHIgPSBzcXJ0KHggKiB4ICsgeSAqIHkpO1xuICAgIGlmIChyID4gaGFsZlBpKSB7XG4gICAgICB2YXIgdGhldGEgPSBhdGFuMih5LCB4KSxcbiAgICAgICAgICB0aGV0YTAgPSBrICogcm91bmQoKHRoZXRhIC0gaGFsZlBpKSAvIGspICsgaGFsZlBpLFxuICAgICAgICAgIHMgPSB0aGV0YSA+IHRoZXRhMCA/IC0xIDogMSxcbiAgICAgICAgICBBID0gciAqIGNvcyh0aGV0YTAgLSB0aGV0YSksXG4gICAgICAgICAgY290QWxwaGEgPSAxIC8gdGFuKHMgKiBhY29zKChBIC0gcGkpIC8gc3FydChwaSAqIChwaSAtIDIgKiBBKSArIHIgKiByKSkpO1xuICAgICAgdGhldGEgPSB0aGV0YTAgKyAyICogYXRhbigoY290QWxwaGEgKyBzICogc3FydChjb3RBbHBoYSAqIGNvdEFscGhhIC0gMykpIC8gMyk7XG4gICAgICB4ID0gciAqIGNvcyh0aGV0YSksIHkgPSByICogc2luKHRoZXRhKTtcbiAgICB9XG4gICAgcmV0dXJuIGF6aW11dGhhbEVxdWlkaXN0YW50UmF3LmludmVydCh4LCB5KTtcbiAgfTtcblxuICByZXR1cm4gZm9yd2FyZDtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oKSB7XG4gIHZhciBsb2JlcyA9IDUsXG4gICAgICBtID0gcHJvamVjdGlvbk11dGF0b3IoYmVyZ2hhdXNSYXcpLFxuICAgICAgcCA9IG0obG9iZXMpLFxuICAgICAgcHJvamVjdGlvblN0cmVhbSA9IHAuc3RyZWFtLFxuICAgICAgZXBzaWxvbiA9IDFlLTIsXG4gICAgICBjciA9IC1jb3MoZXBzaWxvbiAqIHJhZGlhbnMpLFxuICAgICAgc3IgPSBzaW4oZXBzaWxvbiAqIHJhZGlhbnMpO1xuXG4gIHAubG9iZXMgPSBmdW5jdGlvbihfKSB7XG4gICAgcmV0dXJuIGFyZ3VtZW50cy5sZW5ndGggPyBtKGxvYmVzID0gK18pIDogbG9iZXM7XG4gIH07XG5cbiAgcC5zdHJlYW0gPSBmdW5jdGlvbihzdHJlYW0pIHtcbiAgICB2YXIgcm90YXRlID0gcC5yb3RhdGUoKSxcbiAgICAgICAgcm90YXRlU3RyZWFtID0gcHJvamVjdGlvblN0cmVhbShzdHJlYW0pLFxuICAgICAgICBzcGhlcmVTdHJlYW0gPSAocC5yb3RhdGUoWzAsIDBdKSwgcHJvamVjdGlvblN0cmVhbShzdHJlYW0pKTtcbiAgICBwLnJvdGF0ZShyb3RhdGUpO1xuICAgIHJvdGF0ZVN0cmVhbS5zcGhlcmUgPSBmdW5jdGlvbigpIHtcbiAgICAgIHNwaGVyZVN0cmVhbS5wb2x5Z29uU3RhcnQoKSwgc3BoZXJlU3RyZWFtLmxpbmVTdGFydCgpO1xuICAgICAgZm9yICh2YXIgaSA9IDAsIGRlbHRhID0gMzYwIC8gbG9iZXMsIGRlbHRhMCA9IDIgKiBwaSAvIGxvYmVzLCBwaGkgPSA5MCAtIDE4MCAvIGxvYmVzLCBwaGkwID0gaGFsZlBpOyBpIDwgbG9iZXM7ICsraSwgcGhpIC09IGRlbHRhLCBwaGkwIC09IGRlbHRhMCkge1xuICAgICAgICBzcGhlcmVTdHJlYW0ucG9pbnQoYXRhbjIoc3IgKiBjb3MocGhpMCksIGNyKSAqIGRlZ3JlZXMsIGFzaW4oc3IgKiBzaW4ocGhpMCkpICogZGVncmVlcyk7XG4gICAgICAgIGlmIChwaGkgPCAtOTApIHtcbiAgICAgICAgICBzcGhlcmVTdHJlYW0ucG9pbnQoLTkwLCAtMTgwIC0gcGhpIC0gZXBzaWxvbik7XG4gICAgICAgICAgc3BoZXJlU3RyZWFtLnBvaW50KC05MCwgLTE4MCAtIHBoaSArIGVwc2lsb24pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHNwaGVyZVN0cmVhbS5wb2ludCg5MCwgcGhpICsgZXBzaWxvbik7XG4gICAgICAgICAgc3BoZXJlU3RyZWFtLnBvaW50KDkwLCBwaGkgLSBlcHNpbG9uKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgc3BoZXJlU3RyZWFtLmxpbmVFbmQoKSwgc3BoZXJlU3RyZWFtLnBvbHlnb25FbmQoKTtcbiAgICB9O1xuICAgIHJldHVybiByb3RhdGVTdHJlYW07XG4gIH07XG5cbiAgcmV0dXJuIHBcbiAgICAgIC5zY2FsZSg4Ny44MDc2KVxuICAgICAgLmNlbnRlcihbMCwgMTcuMTg3NV0pXG4gICAgICAuY2xpcEFuZ2xlKDE4MCAtIDFlLTMpO1xufVxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvZDMtZ2VvLXByb2plY3Rpb24vc3JjL2JlcmdoYXVzLmpzXG4vLyBtb2R1bGUgaWQgPSAuL25vZGVfbW9kdWxlcy9kMy1nZW8tcHJvamVjdGlvbi9zcmMvYmVyZ2hhdXMuanNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IHtnZW9Qcm9qZWN0aW9uIGFzIHByb2plY3Rpb259IGZyb20gXCJkMy1nZW9cIjtcbmltcG9ydCB7aGFtbWVyUmF3fSBmcm9tIFwiLi9oYW1tZXJcIjtcbmltcG9ydCB7Y29zLCBwaSwgc2lufSBmcm9tIFwiLi9tYXRoXCI7XG5cbi8vIEJlcnRpbiAxOTUzIGFzIGEgbW9kaWZpZWQgQnJpZXNlbWVpc3RlclxuLy8gaHR0cHM6Ly9ibC5vY2tzLm9yZy9GaWwvNWI5ZWU5NjM2ZGZiNmZmYTUzNDQzYzkwMDZiZWI2NDJcbmV4cG9ydCBmdW5jdGlvbiBiZXJ0aW4xOTUzUmF3KCkge1xuICB2YXIgaGFtbWVyID0gaGFtbWVyUmF3KDEuNjgsIDIpLFxuICAgICAgZnUgPSAxLjQsIGsgPSAxMjtcblxuICByZXR1cm4gZnVuY3Rpb24obGFtYmRhLCBwaGkpIHtcblxuICAgIGlmIChsYW1iZGEgKyBwaGkgPCAtZnUpIHtcbiAgICAgIHZhciB1ID0gKGxhbWJkYSAtIHBoaSArIDEuNikgKiAobGFtYmRhICsgcGhpICsgZnUpIC8gODtcbiAgICAgIGxhbWJkYSArPSB1O1xuICAgICAgcGhpIC09IDAuOCAqIHUgKiBzaW4ocGhpICsgcGkgLyAyKTtcbiAgICB9XG5cbiAgICB2YXIgciA9IGhhbW1lcihsYW1iZGEsIHBoaSk7XG5cbiAgICB2YXIgZCA9ICgxIC0gY29zKGxhbWJkYSAqIHBoaSkpIC8gaztcblxuICAgIGlmIChyWzFdIDwgMCkge1xuICAgICAgclswXSAqPSAxICsgZDtcbiAgICB9XG4gICAgaWYgKHJbMV0gPiAwKSB7XG4gICAgICByWzFdICo9IDEgKyBkIC8gMS41ICogclswXSAqIHJbMF07XG4gICAgfVxuXG4gICAgcmV0dXJuIHI7XG4gIH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKCkge1xuICB2YXIgcCA9IHByb2plY3Rpb24oYmVydGluMTk1M1JhdygpKTtcblxuICBwLnJvdGF0ZShbLTE2LjUsIC00Ml0pO1xuICBkZWxldGUgcC5yb3RhdGU7XG5cbiAgcmV0dXJuIHBcbiAgICAuc2NhbGUoMTc2LjU3KVxuICAgIC5jZW50ZXIoWzcuOTMsIDAuMDldKTtcbn1cblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2QzLWdlby1wcm9qZWN0aW9uL3NyYy9iZXJ0aW4uanNcbi8vIG1vZHVsZSBpZCA9IC4vbm9kZV9tb2R1bGVzL2QzLWdlby1wcm9qZWN0aW9uL3NyYy9iZXJ0aW4uanNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IHtnZW9Qcm9qZWN0aW9uIGFzIHByb2plY3Rpb259IGZyb20gXCJkMy1nZW9cIjtcbmltcG9ydCB7bW9sbHdlaWRlQnJvbWxleVRoZXRhfSBmcm9tIFwiLi9tb2xsd2VpZGVcIjtcbmltcG9ydCB7YWJzLCBjb3MsIGVwc2lsb24sIHBpLCBxdWFydGVyUGksIHNpbiwgc3FydDJ9IGZyb20gXCIuL21hdGhcIjtcblxudmFyIGsgPSAyLjAwMjc2LFxuICAgIHcgPSAxLjExMDcyO1xuXG5leHBvcnQgZnVuY3Rpb24gYm9nZ3NSYXcobGFtYmRhLCBwaGkpIHtcbiAgdmFyIHRoZXRhID0gbW9sbHdlaWRlQnJvbWxleVRoZXRhKHBpLCBwaGkpO1xuICByZXR1cm4gW2sgKiBsYW1iZGEgLyAoMSAvIGNvcyhwaGkpICsgdyAvIGNvcyh0aGV0YSkpLCAocGhpICsgc3FydDIgKiBzaW4odGhldGEpKSAvIGtdO1xufVxuXG5ib2dnc1Jhdy5pbnZlcnQgPSBmdW5jdGlvbih4LCB5KSB7XG4gIHZhciBreSA9IGsgKiB5LCB0aGV0YSA9IHkgPCAwID8gLXF1YXJ0ZXJQaSA6IHF1YXJ0ZXJQaSwgaSA9IDI1LCBkZWx0YSwgcGhpO1xuICBkbyB7XG4gICAgcGhpID0ga3kgLSBzcXJ0MiAqIHNpbih0aGV0YSk7XG4gICAgdGhldGEgLT0gZGVsdGEgPSAoc2luKDIgKiB0aGV0YSkgKyAyICogdGhldGEgLSBwaSAqIHNpbihwaGkpKSAvICgyICogY29zKDIgKiB0aGV0YSkgKyAyICsgcGkgKiBjb3MocGhpKSAqIHNxcnQyICogY29zKHRoZXRhKSk7XG4gIH0gd2hpbGUgKGFicyhkZWx0YSkgPiBlcHNpbG9uICYmIC0taSA+IDApO1xuICBwaGkgPSBreSAtIHNxcnQyICogc2luKHRoZXRhKTtcbiAgcmV0dXJuIFt4ICogKDEgLyBjb3MocGhpKSArIHcgLyBjb3ModGhldGEpKSAvIGssIHBoaV07XG59O1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbigpIHtcbiAgcmV0dXJuIHByb2plY3Rpb24oYm9nZ3NSYXcpXG4gICAgICAuc2NhbGUoMTYwLjg1Nyk7XG59XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9kMy1nZW8tcHJvamVjdGlvbi9zcmMvYm9nZ3MuanNcbi8vIG1vZHVsZSBpZCA9IC4vbm9kZV9tb2R1bGVzL2QzLWdlby1wcm9qZWN0aW9uL3NyYy9ib2dncy5qc1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgcGFyYWxsZWwxIGZyb20gXCIuL3BhcmFsbGVsMVwiO1xuaW1wb3J0IHthdGFuMiwgY29zLCBzaW4sIHNxcnQsIHRhbn0gZnJvbSBcIi4vbWF0aFwiO1xuaW1wb3J0IHtzaW51c29pZGFsUmF3fSBmcm9tIFwiLi9zaW51c29pZGFsXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBib25uZVJhdyhwaGkwKSB7XG4gIGlmICghcGhpMCkgcmV0dXJuIHNpbnVzb2lkYWxSYXc7XG4gIHZhciBjb3RQaGkwID0gMSAvIHRhbihwaGkwKTtcblxuICBmdW5jdGlvbiBmb3J3YXJkKGxhbWJkYSwgcGhpKSB7XG4gICAgdmFyIHJobyA9IGNvdFBoaTAgKyBwaGkwIC0gcGhpLFxuICAgICAgICBlID0gcmhvID8gbGFtYmRhICogY29zKHBoaSkgLyByaG8gOiByaG87XG4gICAgcmV0dXJuIFtyaG8gKiBzaW4oZSksIGNvdFBoaTAgLSByaG8gKiBjb3MoZSldO1xuICB9XG5cbiAgZm9yd2FyZC5pbnZlcnQgPSBmdW5jdGlvbih4LCB5KSB7XG4gICAgdmFyIHJobyA9IHNxcnQoeCAqIHggKyAoeSA9IGNvdFBoaTAgLSB5KSAqIHkpLFxuICAgICAgICBwaGkgPSBjb3RQaGkwICsgcGhpMCAtIHJobztcbiAgICByZXR1cm4gW3JobyAvIGNvcyhwaGkpICogYXRhbjIoeCwgeSksIHBoaV07XG4gIH07XG5cbiAgcmV0dXJuIGZvcndhcmQ7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKCkge1xuICByZXR1cm4gcGFyYWxsZWwxKGJvbm5lUmF3KVxuICAgICAgLnNjYWxlKDEyMy4wODIpXG4gICAgICAuY2VudGVyKFswLCAyNi4xNDQxXSlcbiAgICAgIC5wYXJhbGxlbCg0NSk7XG59XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9kMy1nZW8tcHJvamVjdGlvbi9zcmMvYm9ubmUuanNcbi8vIG1vZHVsZSBpZCA9IC4vbm9kZV9tb2R1bGVzL2QzLWdlby1wcm9qZWN0aW9uL3NyYy9ib25uZS5qc1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQge2dlb1Byb2plY3Rpb25NdXRhdG9yIGFzIHByb2plY3Rpb25NdXRhdG9yfSBmcm9tIFwiZDMtZ2VvXCI7XG5pbXBvcnQge2F0YW4yLCBjb3MsIGhhbGZQaSwgc2luLCBzcXJ0fSBmcm9tIFwiLi9tYXRoXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBib3R0b21sZXlSYXcoc2luUHNpKSB7XG5cbiAgZnVuY3Rpb24gZm9yd2FyZChsYW1iZGEsIHBoaSkge1xuICAgIHZhciByaG8gPSBoYWxmUGkgLSBwaGksXG4gICAgICAgIGV0YSA9IHJobyA/IGxhbWJkYSAqIHNpblBzaSAqIHNpbihyaG8pIC8gcmhvIDogcmhvO1xuICAgIHJldHVybiBbcmhvICogc2luKGV0YSkgLyBzaW5Qc2ksIGhhbGZQaSAtIHJobyAqIGNvcyhldGEpXTtcbiAgfVxuXG4gIGZvcndhcmQuaW52ZXJ0ID0gZnVuY3Rpb24oeCwgeSkge1xuICAgIHZhciB4MSA9IHggKiBzaW5Qc2ksXG4gICAgICAgIHkxID0gaGFsZlBpIC0geSxcbiAgICAgICAgcmhvID0gc3FydCh4MSAqIHgxICsgeTEgKiB5MSksXG4gICAgICAgIGV0YSA9IGF0YW4yKHgxLCB5MSk7XG4gICAgcmV0dXJuIFsocmhvID8gcmhvIC8gc2luKHJobykgOiAxKSAqIGV0YSAvIHNpblBzaSwgaGFsZlBpIC0gcmhvXTtcbiAgfTtcblxuICByZXR1cm4gZm9yd2FyZDtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oKSB7XG4gIHZhciBzaW5Qc2kgPSAwLjUsXG4gICAgICBtID0gcHJvamVjdGlvbk11dGF0b3IoYm90dG9tbGV5UmF3KSxcbiAgICAgIHAgPSBtKHNpblBzaSk7XG5cbiAgcC5mcmFjdGlvbiA9IGZ1bmN0aW9uKF8pIHtcbiAgICByZXR1cm4gYXJndW1lbnRzLmxlbmd0aCA/IG0oc2luUHNpID0gK18pIDogc2luUHNpO1xuICB9O1xuXG4gIHJldHVybiBwXG4gICAgICAuc2NhbGUoMTU4LjgzNyk7XG59XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9kMy1nZW8tcHJvamVjdGlvbi9zcmMvYm90dG9tbGV5LmpzXG4vLyBtb2R1bGUgaWQgPSAuL25vZGVfbW9kdWxlcy9kMy1nZW8tcHJvamVjdGlvbi9zcmMvYm90dG9tbGV5LmpzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCB7Z2VvUHJvamVjdGlvbiBhcyBwcm9qZWN0aW9ufSBmcm9tIFwiZDMtZ2VvXCI7XG5pbXBvcnQge3BpfSBmcm9tIFwiLi9tYXRoXCI7XG5pbXBvcnQge21vbGx3ZWlkZUJyb21sZXlSYXd9IGZyb20gXCIuL21vbGx3ZWlkZVwiO1xuXG5leHBvcnQgdmFyIGJyb21sZXlSYXcgPSBtb2xsd2VpZGVCcm9tbGV5UmF3KDEsIDQgLyBwaSwgcGkpO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbigpIHtcbiAgcmV0dXJuIHByb2plY3Rpb24oYnJvbWxleVJhdylcbiAgICAgIC5zY2FsZSgxNTIuNjMpO1xufVxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvZDMtZ2VvLXByb2plY3Rpb24vc3JjL2Jyb21sZXkuanNcbi8vIG1vZHVsZSBpZCA9IC4vbm9kZV9tb2R1bGVzL2QzLWdlby1wcm9qZWN0aW9uL3NyYy9icm9tbGV5LmpzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCB7Z2VvQ2VudHJvaWQgYXMgY2VudHJvaWQsIGdlb1Byb2plY3Rpb24gYXMgcHJvamVjdGlvbiwgZ2VvUm90YXRpb24gYXMgcm90YXRpb259IGZyb20gXCJkMy1nZW9cIjtcbmltcG9ydCB7YWJzLCBhY29zLCBhc2luLCBhdGFuMiwgY29zLCBlcHNpbG9uLCBmbG9vciwgcGksIHJhZGlhbnMsIHNpbiwgc3FydH0gZnJvbSBcIi4vbWF0aFwiO1xuXG4vLyBBemltdXRoYWwgZGlzdGFuY2UuXG5mdW5jdGlvbiBkaXN0YW5jZShkUGhpLCBjMSwgczEsIGMyLCBzMiwgZExhbWJkYSkge1xuICB2YXIgY29zZExhbWJkYSA9IGNvcyhkTGFtYmRhKSwgcjtcbiAgaWYgKGFicyhkUGhpKSA+IDEgfHwgYWJzKGRMYW1iZGEpID4gMSkge1xuICAgIHIgPSBhY29zKHMxICogczIgKyBjMSAqIGMyICogY29zZExhbWJkYSk7XG4gIH0gZWxzZSB7XG4gICAgdmFyIHNpbmRQaGkgPSBzaW4oZFBoaSAvIDIpLCBzaW5kTGFtYmRhID0gc2luKGRMYW1iZGEgLyAyKTtcbiAgICByID0gMiAqIGFzaW4oc3FydChzaW5kUGhpICogc2luZFBoaSArIGMxICogYzIgKiBzaW5kTGFtYmRhICogc2luZExhbWJkYSkpO1xuICB9XG4gIHJldHVybiBhYnMocikgPiBlcHNpbG9uID8gW3IsIGF0YW4yKGMyICogc2luKGRMYW1iZGEpLCBjMSAqIHMyIC0gczEgKiBjMiAqIGNvc2RMYW1iZGEpXSA6IFswLCAwXTtcbn1cblxuLy8gQW5nbGUgb3Bwb3NpdGUgYSwgYW5kIGNvbnRhaW5lZCBiZXR3ZWVuIHNpZGVzIG9mIGxlbmd0aHMgYiBhbmQgYy5cbmZ1bmN0aW9uIGFuZ2xlKGIsIGMsIGEpIHtcbiAgcmV0dXJuIGFjb3MoKGIgKiBiICsgYyAqIGMgLSBhICogYSkgLyAoMiAqIGIgKiBjKSk7XG59XG5cbi8vIE5vcm1hbGl6ZSBsb25naXR1ZGUuXG5mdW5jdGlvbiBsb25naXR1ZGUobGFtYmRhKSB7XG4gIHJldHVybiBsYW1iZGEgLSAyICogcGkgKiBmbG9vcigobGFtYmRhICsgcGkpIC8gKDIgKiBwaSkpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY2hhbWJlcmxpblJhdyhwMCwgcDEsIHAyKSB7XG4gIHZhciBwb2ludHMgPSBbXG4gICAgW3AwWzBdLCBwMFsxXSwgc2luKHAwWzFdKSwgY29zKHAwWzFdKV0sXG4gICAgW3AxWzBdLCBwMVsxXSwgc2luKHAxWzFdKSwgY29zKHAxWzFdKV0sXG4gICAgW3AyWzBdLCBwMlsxXSwgc2luKHAyWzFdKSwgY29zKHAyWzFdKV1cbiAgXTtcblxuICBmb3IgKHZhciBhID0gcG9pbnRzWzJdLCBiLCBpID0gMDsgaSA8IDM7ICsraSwgYSA9IGIpIHtcbiAgICBiID0gcG9pbnRzW2ldO1xuICAgIGEudiA9IGRpc3RhbmNlKGJbMV0gLSBhWzFdLCBhWzNdLCBhWzJdLCBiWzNdLCBiWzJdLCBiWzBdIC0gYVswXSk7XG4gICAgYS5wb2ludCA9IFswLCAwXTtcbiAgfVxuXG4gIHZhciBiZXRhMCA9IGFuZ2xlKHBvaW50c1swXS52WzBdLCBwb2ludHNbMl0udlswXSwgcG9pbnRzWzFdLnZbMF0pLFxuICAgICAgYmV0YTEgPSBhbmdsZShwb2ludHNbMF0udlswXSwgcG9pbnRzWzFdLnZbMF0sIHBvaW50c1syXS52WzBdKSxcbiAgICAgIGJldGEyID0gcGkgLSBiZXRhMDtcblxuICBwb2ludHNbMl0ucG9pbnRbMV0gPSAwO1xuICBwb2ludHNbMF0ucG9pbnRbMF0gPSAtKHBvaW50c1sxXS5wb2ludFswXSA9IHBvaW50c1swXS52WzBdIC8gMik7XG5cbiAgdmFyIG1lYW4gPSBbXG4gICAgcG9pbnRzWzJdLnBvaW50WzBdID0gcG9pbnRzWzBdLnBvaW50WzBdICsgcG9pbnRzWzJdLnZbMF0gKiBjb3MoYmV0YTApLFxuICAgIDIgKiAocG9pbnRzWzBdLnBvaW50WzFdID0gcG9pbnRzWzFdLnBvaW50WzFdID0gcG9pbnRzWzJdLnZbMF0gKiBzaW4oYmV0YTApKVxuICBdO1xuXG4gIGZ1bmN0aW9uIGZvcndhcmQobGFtYmRhLCBwaGkpIHtcbiAgICB2YXIgc2luUGhpID0gc2luKHBoaSksXG4gICAgICAgIGNvc1BoaSA9IGNvcyhwaGkpLFxuICAgICAgICB2ID0gbmV3IEFycmF5KDMpLCBpO1xuXG4gICAgLy8gQ29tcHV0ZSBkaXN0YW5jZSBhbmQgYXppbXV0aCBmcm9tIGNvbnRyb2wgcG9pbnRzLlxuICAgIGZvciAoaSA9IDA7IGkgPCAzOyArK2kpIHtcbiAgICAgIHZhciBwID0gcG9pbnRzW2ldO1xuICAgICAgdltpXSA9IGRpc3RhbmNlKHBoaSAtIHBbMV0sIHBbM10sIHBbMl0sIGNvc1BoaSwgc2luUGhpLCBsYW1iZGEgLSBwWzBdKTtcbiAgICAgIGlmICghdltpXVswXSkgcmV0dXJuIHAucG9pbnQ7XG4gICAgICB2W2ldWzFdID0gbG9uZ2l0dWRlKHZbaV1bMV0gLSBwLnZbMV0pO1xuICAgIH1cblxuICAgIC8vIEFyaXRobWV0aWMgbWVhbiBvZiBpbnRlcmNlcHRpb24gcG9pbnRzLlxuICAgIHZhciBwb2ludCA9IG1lYW4uc2xpY2UoKTtcbiAgICBmb3IgKGkgPSAwOyBpIDwgMzsgKytpKSB7XG4gICAgICB2YXIgaiA9IGkgPT0gMiA/IDAgOiBpICsgMTtcbiAgICAgIHZhciBhID0gYW5nbGUocG9pbnRzW2ldLnZbMF0sIHZbaV1bMF0sIHZbal1bMF0pO1xuICAgICAgaWYgKHZbaV1bMV0gPCAwKSBhID0gLWE7XG5cbiAgICAgIGlmICghaSkge1xuICAgICAgICBwb2ludFswXSArPSB2W2ldWzBdICogY29zKGEpO1xuICAgICAgICBwb2ludFsxXSAtPSB2W2ldWzBdICogc2luKGEpO1xuICAgICAgfSBlbHNlIGlmIChpID09IDEpIHtcbiAgICAgICAgYSA9IGJldGExIC0gYTtcbiAgICAgICAgcG9pbnRbMF0gLT0gdltpXVswXSAqIGNvcyhhKTtcbiAgICAgICAgcG9pbnRbMV0gLT0gdltpXVswXSAqIHNpbihhKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGEgPSBiZXRhMiAtIGE7XG4gICAgICAgIHBvaW50WzBdICs9IHZbaV1bMF0gKiBjb3MoYSk7XG4gICAgICAgIHBvaW50WzFdICs9IHZbaV1bMF0gKiBzaW4oYSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcG9pbnRbMF0gLz0gMywgcG9pbnRbMV0gLz0gMztcbiAgICByZXR1cm4gcG9pbnQ7XG4gIH1cblxuICByZXR1cm4gZm9yd2FyZDtcbn1cblxuZnVuY3Rpb24gcG9pbnRSYWRpYW5zKHApIHtcbiAgcmV0dXJuIHBbMF0gKj0gcmFkaWFucywgcFsxXSAqPSByYWRpYW5zLCBwO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY2hhbWJlcmxpbkFmcmljYSgpIHtcbiAgcmV0dXJuIGNoYW1iZXJsaW4oWzAsIDIyXSwgWzQ1LCAyMl0sIFsyMi41LCAtMjJdKVxuICAgICAgLnNjYWxlKDM4MClcbiAgICAgIC5jZW50ZXIoWzIyLjUsIDJdKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY2hhbWJlcmxpbihwMCwgcDEsIHAyKSB7IC8vIFRPRE8gb3JkZXIgbWF0dGVycyFcbiAgdmFyIGMgPSBjZW50cm9pZCh7dHlwZTogXCJNdWx0aVBvaW50XCIsIGNvb3JkaW5hdGVzOiBbcDAsIHAxLCBwMl19KSxcbiAgICAgIFIgPSBbLWNbMF0sIC1jWzFdXSxcbiAgICAgIHIgPSByb3RhdGlvbihSKSxcbiAgICAgIHAgPSBwcm9qZWN0aW9uKGNoYW1iZXJsaW5SYXcocG9pbnRSYWRpYW5zKHIocDApKSwgcG9pbnRSYWRpYW5zKHIocDEpKSwgcG9pbnRSYWRpYW5zKHIocDIpKSkpLnJvdGF0ZShSKSxcbiAgICAgIGNlbnRlciA9IHAuY2VudGVyO1xuXG4gIGRlbGV0ZSBwLnJvdGF0ZTtcblxuICBwLmNlbnRlciA9IGZ1bmN0aW9uKF8pIHtcbiAgICByZXR1cm4gYXJndW1lbnRzLmxlbmd0aCA/IGNlbnRlcihyKF8pKSA6IHIuaW52ZXJ0KGNlbnRlcigpKTtcbiAgfTtcblxuICByZXR1cm4gcFxuICAgICAgLmNsaXBBbmdsZSg5MCk7XG59XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9kMy1nZW8tcHJvamVjdGlvbi9zcmMvY2hhbWJlcmxpbi5qc1xuLy8gbW9kdWxlIGlkID0gLi9ub2RlX21vZHVsZXMvZDMtZ2VvLXByb2plY3Rpb24vc3JjL2NoYW1iZXJsaW4uanNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IHtnZW9Qcm9qZWN0aW9uIGFzIHByb2plY3Rpb259IGZyb20gXCJkMy1nZW9cIjtcbmltcG9ydCB7YXNpbiwgcGksIHNpbiwgc3FydCwgc3FydFBpfSBmcm9tIFwiLi9tYXRoXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBjb2xsaWdub25SYXcobGFtYmRhLCBwaGkpIHtcbiAgdmFyIGFscGhhID0gc3FydCgxIC0gc2luKHBoaSkpO1xuICByZXR1cm4gWygyIC8gc3FydFBpKSAqIGxhbWJkYSAqIGFscGhhLCBzcXJ0UGkgKiAoMSAtIGFscGhhKV07XG59XG5cbmNvbGxpZ25vblJhdy5pbnZlcnQgPSBmdW5jdGlvbih4LCB5KSB7XG4gIHZhciBsYW1iZGEgPSAobGFtYmRhID0geSAvIHNxcnRQaSAtIDEpICogbGFtYmRhO1xuICByZXR1cm4gW2xhbWJkYSA+IDAgPyB4ICogc3FydChwaSAvIGxhbWJkYSkgLyAyIDogMCwgYXNpbigxIC0gbGFtYmRhKV07XG59O1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbigpIHtcbiAgcmV0dXJuIHByb2plY3Rpb24oY29sbGlnbm9uUmF3KVxuICAgICAgLnNjYWxlKDk1LjY0NjQpXG4gICAgICAuY2VudGVyKFswLCAzMF0pO1xufVxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvZDMtZ2VvLXByb2plY3Rpb24vc3JjL2NvbGxpZ25vbi5qc1xuLy8gbW9kdWxlIGlkID0gLi9ub2RlX21vZHVsZXMvZDMtZ2VvLXByb2plY3Rpb24vc3JjL2NvbGxpZ25vbi5qc1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQge2FzaW4sIGF0YW4yLCBjb3MsIHNpbiwgc3FydCwgdGFufSBmcm9tIFwiLi9tYXRoXCI7XG5pbXBvcnQgcGFyYWxsZWwxIGZyb20gXCIuL3BhcmFsbGVsMVwiO1xuXG5leHBvcnQgZnVuY3Rpb24gY3JhaWdSYXcocGhpMCkge1xuICB2YXIgdGFuUGhpMCA9IHRhbihwaGkwKTtcblxuICBmdW5jdGlvbiBmb3J3YXJkKGxhbWJkYSwgcGhpKSB7XG4gICAgcmV0dXJuIFtsYW1iZGEsIChsYW1iZGEgPyBsYW1iZGEgLyBzaW4obGFtYmRhKSA6IDEpICogKHNpbihwaGkpICogY29zKGxhbWJkYSkgLSB0YW5QaGkwICogY29zKHBoaSkpXTtcbiAgfVxuXG4gIGZvcndhcmQuaW52ZXJ0ID0gdGFuUGhpMCA/IGZ1bmN0aW9uKHgsIHkpIHtcbiAgICBpZiAoeCkgeSAqPSBzaW4oeCkgLyB4O1xuICAgIHZhciBjb3NMYW1iZGEgPSBjb3MoeCk7XG4gICAgcmV0dXJuIFt4LCAyICogYXRhbjIoc3FydChjb3NMYW1iZGEgKiBjb3NMYW1iZGEgKyB0YW5QaGkwICogdGFuUGhpMCAtIHkgKiB5KSAtIGNvc0xhbWJkYSwgdGFuUGhpMCAtIHkpXTtcbiAgfSA6IGZ1bmN0aW9uKHgsIHkpIHtcbiAgICByZXR1cm4gW3gsIGFzaW4oeCA/IHkgKiB0YW4oeCkgLyB4IDogeSldO1xuICB9O1xuXG4gIHJldHVybiBmb3J3YXJkO1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbigpIHtcbiAgcmV0dXJuIHBhcmFsbGVsMShjcmFpZ1JhdylcbiAgICAgIC5zY2FsZSgyNDkuODI4KVxuICAgICAgLmNsaXBBbmdsZSg5MCk7XG59XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9kMy1nZW8tcHJvamVjdGlvbi9zcmMvY3JhaWcuanNcbi8vIG1vZHVsZSBpZCA9IC4vbm9kZV9tb2R1bGVzL2QzLWdlby1wcm9qZWN0aW9uL3NyYy9jcmFpZy5qc1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQge2dlb1Byb2plY3Rpb24gYXMgcHJvamVjdGlvbn0gZnJvbSBcImQzLWdlb1wiO1xuaW1wb3J0IHthc2luLCBjb3MsIHNpbiwgc3FydCwgc3FydFBpfSBmcm9tIFwiLi9tYXRoXCI7XG5cbnZhciBzcXJ0MyA9IHNxcnQoMyk7XG5cbmV4cG9ydCBmdW5jdGlvbiBjcmFzdGVyUmF3KGxhbWJkYSwgcGhpKSB7XG4gIHJldHVybiBbc3FydDMgKiBsYW1iZGEgKiAoMiAqIGNvcygyICogcGhpIC8gMykgLSAxKSAvIHNxcnRQaSwgc3FydDMgKiBzcXJ0UGkgKiBzaW4ocGhpIC8gMyldO1xufVxuXG5jcmFzdGVyUmF3LmludmVydCA9IGZ1bmN0aW9uKHgsIHkpIHtcbiAgdmFyIHBoaSA9IDMgKiBhc2luKHkgLyAoc3FydDMgKiBzcXJ0UGkpKTtcbiAgcmV0dXJuIFtzcXJ0UGkgKiB4IC8gKHNxcnQzICogKDIgKiBjb3MoMiAqIHBoaSAvIDMpIC0gMSkpLCBwaGldO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oKSB7XG4gIHJldHVybiBwcm9qZWN0aW9uKGNyYXN0ZXJSYXcpXG4gICAgICAuc2NhbGUoMTU2LjE5KTtcbn1cblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2QzLWdlby1wcm9qZWN0aW9uL3NyYy9jcmFzdGVyLmpzXG4vLyBtb2R1bGUgaWQgPSAuL25vZGVfbW9kdWxlcy9kMy1nZW8tcHJvamVjdGlvbi9zcmMvY3Jhc3Rlci5qc1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQge2FzaW4sIGNvcywgc2lufSBmcm9tIFwiLi9tYXRoXCI7XG5pbXBvcnQgcGFyYWxsZWwxIGZyb20gXCIuL3BhcmFsbGVsMVwiO1xuXG5leHBvcnQgZnVuY3Rpb24gY3lsaW5kcmljYWxFcXVhbEFyZWFSYXcocGhpMCkge1xuICB2YXIgY29zUGhpMCA9IGNvcyhwaGkwKTtcblxuICBmdW5jdGlvbiBmb3J3YXJkKGxhbWJkYSwgcGhpKSB7XG4gICAgcmV0dXJuIFtsYW1iZGEgKiBjb3NQaGkwLCBzaW4ocGhpKSAvIGNvc1BoaTBdO1xuICB9XG5cbiAgZm9yd2FyZC5pbnZlcnQgPSBmdW5jdGlvbih4LCB5KSB7XG4gICAgcmV0dXJuIFt4IC8gY29zUGhpMCwgYXNpbih5ICogY29zUGhpMCldO1xuICB9O1xuXG4gIHJldHVybiBmb3J3YXJkO1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbigpIHtcbiAgcmV0dXJuIHBhcmFsbGVsMShjeWxpbmRyaWNhbEVxdWFsQXJlYVJhdylcbiAgICAgIC5wYXJhbGxlbCgzOC41OCkgLy8gYWNvcyhzcXJ0KHdpZHRoIC8gaGVpZ2h0IC8gcGkpKSAqIHJhZGlhbnNcbiAgICAgIC5zY2FsZSgxOTUuMDQ0KTsgLy8gd2lkdGggLyAoc3FydCh3aWR0aCAvIGhlaWdodCAvIHBpKSAqIDIgKiBwaSlcbn1cblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2QzLWdlby1wcm9qZWN0aW9uL3NyYy9jeWxpbmRyaWNhbEVxdWFsQXJlYS5qc1xuLy8gbW9kdWxlIGlkID0gLi9ub2RlX21vZHVsZXMvZDMtZ2VvLXByb2plY3Rpb24vc3JjL2N5bGluZHJpY2FsRXF1YWxBcmVhLmpzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCB7YXRhbiwgY29zLCB0YW59IGZyb20gXCIuL21hdGhcIjtcbmltcG9ydCBwYXJhbGxlbDEgZnJvbSBcIi4vcGFyYWxsZWwxXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBjeWxpbmRyaWNhbFN0ZXJlb2dyYXBoaWNSYXcocGhpMCkge1xuICB2YXIgY29zUGhpMCA9IGNvcyhwaGkwKTtcblxuICBmdW5jdGlvbiBmb3J3YXJkKGxhbWJkYSwgcGhpKSB7XG4gICAgcmV0dXJuIFtsYW1iZGEgKiBjb3NQaGkwLCAoMSArIGNvc1BoaTApICogdGFuKHBoaSAvIDIpXTtcbiAgfVxuXG4gIGZvcndhcmQuaW52ZXJ0ID0gZnVuY3Rpb24oeCwgeSkge1xuICAgIHJldHVybiBbeCAvIGNvc1BoaTAsIGF0YW4oeSAvICgxICsgY29zUGhpMCkpICogMl07XG4gIH07XG5cbiAgcmV0dXJuIGZvcndhcmQ7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKCkge1xuICByZXR1cm4gcGFyYWxsZWwxKGN5bGluZHJpY2FsU3RlcmVvZ3JhcGhpY1JhdylcbiAgICAgIC5zY2FsZSgxMjQuNzUpO1xufVxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvZDMtZ2VvLXByb2plY3Rpb24vc3JjL2N5bGluZHJpY2FsU3RlcmVvZ3JhcGhpYy5qc1xuLy8gbW9kdWxlIGlkID0gLi9ub2RlX21vZHVsZXMvZDMtZ2VvLXByb2plY3Rpb24vc3JjL2N5bGluZHJpY2FsU3RlcmVvZ3JhcGhpYy5qc1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQge2dlb1Byb2plY3Rpb24gYXMgcHJvamVjdGlvbn0gZnJvbSBcImQzLWdlb1wiO1xuaW1wb3J0IHthYnMsIHBpLCBzcXJ0fSBmcm9tIFwiLi9tYXRoXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBlY2tlcnQxUmF3KGxhbWJkYSwgcGhpKSB7XG4gIHZhciBhbHBoYSA9IHNxcnQoOCAvICgzICogcGkpKTtcbiAgcmV0dXJuIFtcbiAgICBhbHBoYSAqIGxhbWJkYSAqICgxIC0gYWJzKHBoaSkgLyBwaSksXG4gICAgYWxwaGEgKiBwaGlcbiAgXTtcbn1cblxuZWNrZXJ0MVJhdy5pbnZlcnQgPSBmdW5jdGlvbih4LCB5KSB7XG4gIHZhciBhbHBoYSA9IHNxcnQoOCAvICgzICogcGkpKSxcbiAgICAgIHBoaSA9IHkgLyBhbHBoYTtcbiAgcmV0dXJuIFtcbiAgICB4IC8gKGFscGhhICogKDEgLSBhYnMocGhpKSAvIHBpKSksXG4gICAgcGhpXG4gIF07XG59O1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbigpIHtcbiAgcmV0dXJuIHByb2plY3Rpb24oZWNrZXJ0MVJhdylcbiAgICAgIC5zY2FsZSgxNjUuNjY0KTtcbn1cblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2QzLWdlby1wcm9qZWN0aW9uL3NyYy9lY2tlcnQxLmpzXG4vLyBtb2R1bGUgaWQgPSAuL25vZGVfbW9kdWxlcy9kMy1nZW8tcHJvamVjdGlvbi9zcmMvZWNrZXJ0MS5qc1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQge2dlb1Byb2plY3Rpb24gYXMgcHJvamVjdGlvbn0gZnJvbSBcImQzLWdlb1wiO1xuaW1wb3J0IHthYnMsIGFzaW4sIHBpLCBzaWduLCBzaW4sIHNxcnR9IGZyb20gXCIuL21hdGhcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIGVja2VydDJSYXcobGFtYmRhLCBwaGkpIHtcbiAgdmFyIGFscGhhID0gc3FydCg0IC0gMyAqIHNpbihhYnMocGhpKSkpO1xuICByZXR1cm4gW1xuICAgIDIgLyBzcXJ0KDYgKiBwaSkgKiBsYW1iZGEgKiBhbHBoYSxcbiAgICBzaWduKHBoaSkgKiBzcXJ0KDIgKiBwaSAvIDMpICogKDIgLSBhbHBoYSlcbiAgXTtcbn1cblxuZWNrZXJ0MlJhdy5pbnZlcnQgPSBmdW5jdGlvbih4LCB5KSB7XG4gIHZhciBhbHBoYSA9IDIgLSBhYnMoeSkgLyBzcXJ0KDIgKiBwaSAvIDMpO1xuICByZXR1cm4gW1xuICAgIHggKiBzcXJ0KDYgKiBwaSkgLyAoMiAqIGFscGhhKSxcbiAgICBzaWduKHkpICogYXNpbigoNCAtIGFscGhhICogYWxwaGEpIC8gMylcbiAgXTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKCkge1xuICByZXR1cm4gcHJvamVjdGlvbihlY2tlcnQyUmF3KVxuICAgICAgLnNjYWxlKDE2NS42NjQpO1xufVxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvZDMtZ2VvLXByb2plY3Rpb24vc3JjL2Vja2VydDIuanNcbi8vIG1vZHVsZSBpZCA9IC4vbm9kZV9tb2R1bGVzL2QzLWdlby1wcm9qZWN0aW9uL3NyYy9lY2tlcnQyLmpzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCB7Z2VvUHJvamVjdGlvbiBhcyBwcm9qZWN0aW9ufSBmcm9tIFwiZDMtZ2VvXCI7XG5pbXBvcnQge3BpLCBzcXJ0fSBmcm9tIFwiLi9tYXRoXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBlY2tlcnQzUmF3KGxhbWJkYSwgcGhpKSB7XG4gIHZhciBrID0gc3FydChwaSAqICg0ICsgcGkpKTtcbiAgcmV0dXJuIFtcbiAgICAyIC8gayAqIGxhbWJkYSAqICgxICsgc3FydCgxIC0gNCAqIHBoaSAqIHBoaSAvIChwaSAqIHBpKSkpLFxuICAgIDQgLyBrICogcGhpXG4gIF07XG59XG5cbmVja2VydDNSYXcuaW52ZXJ0ID0gZnVuY3Rpb24oeCwgeSkge1xuICB2YXIgayA9IHNxcnQocGkgKiAoNCArIHBpKSkgLyAyO1xuICByZXR1cm4gW1xuICAgIHggKiBrIC8gKDEgKyBzcXJ0KDEgLSB5ICogeSAqICg0ICsgcGkpIC8gKDQgKiBwaSkpKSxcbiAgICB5ICogayAvIDJcbiAgXTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKCkge1xuICByZXR1cm4gcHJvamVjdGlvbihlY2tlcnQzUmF3KVxuICAgICAgLnNjYWxlKDE4MC43MzkpO1xufVxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvZDMtZ2VvLXByb2plY3Rpb24vc3JjL2Vja2VydDMuanNcbi8vIG1vZHVsZSBpZCA9IC4vbm9kZV9tb2R1bGVzL2QzLWdlby1wcm9qZWN0aW9uL3NyYy9lY2tlcnQzLmpzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCB7Z2VvUHJvamVjdGlvbiBhcyBwcm9qZWN0aW9ufSBmcm9tIFwiZDMtZ2VvXCI7XG5pbXBvcnQge2FicywgYXNpbiwgY29zLCBlcHNpbG9uLCBoYWxmUGksIHBpLCBzaW4sIHNxcnR9IGZyb20gXCIuL21hdGhcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIGVja2VydDRSYXcobGFtYmRhLCBwaGkpIHtcbiAgdmFyIGsgPSAoMiArIGhhbGZQaSkgKiBzaW4ocGhpKTtcbiAgcGhpIC89IDI7XG4gIGZvciAodmFyIGkgPSAwLCBkZWx0YSA9IEluZmluaXR5OyBpIDwgMTAgJiYgYWJzKGRlbHRhKSA+IGVwc2lsb247IGkrKykge1xuICAgIHZhciBjb3NQaGkgPSBjb3MocGhpKTtcbiAgICBwaGkgLT0gZGVsdGEgPSAocGhpICsgc2luKHBoaSkgKiAoY29zUGhpICsgMikgLSBrKSAvICgyICogY29zUGhpICogKDEgKyBjb3NQaGkpKTtcbiAgfVxuICByZXR1cm4gW1xuICAgIDIgLyBzcXJ0KHBpICogKDQgKyBwaSkpICogbGFtYmRhICogKDEgKyBjb3MocGhpKSksXG4gICAgMiAqIHNxcnQocGkgLyAoNCArIHBpKSkgKiBzaW4ocGhpKVxuICBdO1xufVxuXG5lY2tlcnQ0UmF3LmludmVydCA9IGZ1bmN0aW9uKHgsIHkpIHtcbiAgdmFyIEEgPSB5ICogc3FydCgoNCArIHBpKSAvIHBpKSAvIDIsXG4gICAgICBrID0gYXNpbihBKSxcbiAgICAgIGMgPSBjb3Moayk7XG4gIHJldHVybiBbXG4gICAgeCAvICgyIC8gc3FydChwaSAqICg0ICsgcGkpKSAqICgxICsgYykpLFxuICAgIGFzaW4oKGsgKyBBICogKGMgKyAyKSkgLyAoMiArIGhhbGZQaSkpXG4gIF07XG59O1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbigpIHtcbiAgcmV0dXJuIHByb2plY3Rpb24oZWNrZXJ0NFJhdylcbiAgICAgIC5zY2FsZSgxODAuNzM5KTtcbn1cblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2QzLWdlby1wcm9qZWN0aW9uL3NyYy9lY2tlcnQ0LmpzXG4vLyBtb2R1bGUgaWQgPSAuL25vZGVfbW9kdWxlcy9kMy1nZW8tcHJvamVjdGlvbi9zcmMvZWNrZXJ0NC5qc1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQge2dlb1Byb2plY3Rpb24gYXMgcHJvamVjdGlvbn0gZnJvbSBcImQzLWdlb1wiO1xuaW1wb3J0IHtjb3MsIHBpLCBzcXJ0fSBmcm9tIFwiLi9tYXRoXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBlY2tlcnQ1UmF3KGxhbWJkYSwgcGhpKSB7XG4gIHJldHVybiBbXG4gICAgbGFtYmRhICogKDEgKyBjb3MocGhpKSkgLyBzcXJ0KDIgKyBwaSksXG4gICAgMiAqIHBoaSAvIHNxcnQoMiArIHBpKVxuICBdO1xufVxuXG5lY2tlcnQ1UmF3LmludmVydCA9IGZ1bmN0aW9uKHgsIHkpIHtcbiAgdmFyIGsgPSBzcXJ0KDIgKyBwaSksXG4gICAgICBwaGkgPSB5ICogayAvIDI7XG4gIHJldHVybiBbXG4gICAgayAqIHggLyAoMSArIGNvcyhwaGkpKSxcbiAgICBwaGlcbiAgXTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKCkge1xuICByZXR1cm4gcHJvamVjdGlvbihlY2tlcnQ1UmF3KVxuICAgICAgLnNjYWxlKDE3My4wNDQpO1xufVxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvZDMtZ2VvLXByb2plY3Rpb24vc3JjL2Vja2VydDUuanNcbi8vIG1vZHVsZSBpZCA9IC4vbm9kZV9tb2R1bGVzL2QzLWdlby1wcm9qZWN0aW9uL3NyYy9lY2tlcnQ1LmpzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCB7Z2VvUHJvamVjdGlvbiBhcyBwcm9qZWN0aW9ufSBmcm9tIFwiZDMtZ2VvXCI7XG5pbXBvcnQge2FicywgYXNpbiwgY29zLCBlcHNpbG9uLCBoYWxmUGksIHBpLCBzaW4sIHNxcnR9IGZyb20gXCIuL21hdGhcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIGVja2VydDZSYXcobGFtYmRhLCBwaGkpIHtcbiAgdmFyIGsgPSAoMSArIGhhbGZQaSkgKiBzaW4ocGhpKTtcbiAgZm9yICh2YXIgaSA9IDAsIGRlbHRhID0gSW5maW5pdHk7IGkgPCAxMCAmJiBhYnMoZGVsdGEpID4gZXBzaWxvbjsgaSsrKSB7XG4gICAgcGhpIC09IGRlbHRhID0gKHBoaSArIHNpbihwaGkpIC0gaykgLyAoMSArIGNvcyhwaGkpKTtcbiAgfVxuICBrID0gc3FydCgyICsgcGkpO1xuICByZXR1cm4gW1xuICAgIGxhbWJkYSAqICgxICsgY29zKHBoaSkpIC8gayxcbiAgICAyICogcGhpIC8ga1xuICBdO1xufVxuXG5lY2tlcnQ2UmF3LmludmVydCA9IGZ1bmN0aW9uKHgsIHkpIHtcbiAgdmFyIGogPSAxICsgaGFsZlBpLFxuICAgICAgayA9IHNxcnQoaiAvIDIpO1xuICByZXR1cm4gW1xuICAgIHggKiAyICogayAvICgxICsgY29zKHkgKj0gaykpLFxuICAgIGFzaW4oKHkgKyBzaW4oeSkpIC8gailcbiAgXTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKCkge1xuICByZXR1cm4gcHJvamVjdGlvbihlY2tlcnQ2UmF3KVxuICAgICAgLnNjYWxlKDE3My4wNDQpO1xufVxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvZDMtZ2VvLXByb2plY3Rpb24vc3JjL2Vja2VydDYuanNcbi8vIG1vZHVsZSBpZCA9IC4vbm9kZV9tb2R1bGVzL2QzLWdlby1wcm9qZWN0aW9uL3NyYy9lY2tlcnQ2LmpzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCB7Z2VvUHJvamVjdGlvbiBhcyBwcm9qZWN0aW9ufSBmcm9tIFwiZDMtZ2VvXCI7XG5pbXBvcnQge2F1Z3VzdFJhd30gZnJvbSBcIi4vYXVndXN0XCI7XG5pbXBvcnQge2FicywgYXRhbiwgY29zLCBlcHNpbG9uLCBoYWxmUGksIGxvZywgbWF4LCBtaW4sIHNpbiwgc3FydCwgc3FydDFfMiwgc3FydDJ9IGZyb20gXCIuL21hdGhcIjtcblxudmFyIGVpc2VubG9ocksgPSAzICsgMiAqIHNxcnQyO1xuXG5leHBvcnQgZnVuY3Rpb24gZWlzZW5sb2hyUmF3KGxhbWJkYSwgcGhpKSB7XG4gIHZhciBzMCA9IHNpbihsYW1iZGEgLz0gMiksXG4gICAgICBjMCA9IGNvcyhsYW1iZGEpLFxuICAgICAgayA9IHNxcnQoY29zKHBoaSkpLFxuICAgICAgYzEgPSBjb3MocGhpIC89IDIpLFxuICAgICAgdCA9IHNpbihwaGkpIC8gKGMxICsgc3FydDIgKiBjMCAqIGspLFxuICAgICAgYyA9IHNxcnQoMiAvICgxICsgdCAqIHQpKSxcbiAgICAgIHYgPSBzcXJ0KChzcXJ0MiAqIGMxICsgKGMwICsgczApICogaykgLyAoc3FydDIgKiBjMSArIChjMCAtIHMwKSAqIGspKTtcbiAgcmV0dXJuIFtcbiAgICBlaXNlbmxvaHJLICogKGMgKiAodiAtIDEgLyB2KSAtIDIgKiBsb2codikpLFxuICAgIGVpc2VubG9ocksgKiAoYyAqIHQgKiAodiArIDEgLyB2KSAtIDIgKiBhdGFuKHQpKVxuICBdO1xufVxuXG5laXNlbmxvaHJSYXcuaW52ZXJ0ID0gZnVuY3Rpb24oeCwgeSkge1xuICBpZiAoIShwID0gYXVndXN0UmF3LmludmVydCh4IC8gMS4yLCB5ICogMS4wNjUpKSkgcmV0dXJuIG51bGw7XG4gIHZhciBsYW1iZGEgPSBwWzBdLCBwaGkgPSBwWzFdLCBpID0gMjAsIHA7XG4gIHggLz0gZWlzZW5sb2hySywgeSAvPSBlaXNlbmxvaHJLO1xuICBkbyB7XG4gICAgdmFyIF8wID0gbGFtYmRhIC8gMixcbiAgICAgICAgXzEgPSBwaGkgLyAyLFxuICAgICAgICBzMCA9IHNpbihfMCksXG4gICAgICAgIGMwID0gY29zKF8wKSxcbiAgICAgICAgczEgPSBzaW4oXzEpLFxuICAgICAgICBjMSA9IGNvcyhfMSksXG4gICAgICAgIGNvczEgPSBjb3MocGhpKSxcbiAgICAgICAgayA9IHNxcnQoY29zMSksXG4gICAgICAgIHQgPSBzMSAvIChjMSArIHNxcnQyICogYzAgKiBrKSxcbiAgICAgICAgdDIgPSB0ICogdCxcbiAgICAgICAgYyA9IHNxcnQoMiAvICgxICsgdDIpKSxcbiAgICAgICAgdjAgPSAoc3FydDIgKiBjMSArIChjMCArIHMwKSAqIGspLFxuICAgICAgICB2MSA9IChzcXJ0MiAqIGMxICsgKGMwIC0gczApICogayksXG4gICAgICAgIHYyID0gdjAgLyB2MSxcbiAgICAgICAgdiA9IHNxcnQodjIpLFxuICAgICAgICB2bTF2ID0gdiAtIDEgLyB2LFxuICAgICAgICB2cDF2ID0gdiArIDEgLyB2LFxuICAgICAgICBmeCA9IGMgKiB2bTF2IC0gMiAqIGxvZyh2KSAtIHgsXG4gICAgICAgIGZ5ID0gYyAqIHQgKiB2cDF2IC0gMiAqIGF0YW4odCkgLSB5LFxuICAgICAgICBkZWx0YXREZWx0YUxhbWJkYSA9IHMxICYmIHNxcnQxXzIgKiBrICogczAgKiB0MiAvIHMxLFxuICAgICAgICBkZWx0YXREZWx0YVBoaSA9IChzcXJ0MiAqIGMwICogYzEgKyBrKSAvICgyICogKGMxICsgc3FydDIgKiBjMCAqIGspICogKGMxICsgc3FydDIgKiBjMCAqIGspICogayksXG4gICAgICAgIGRlbHRhY0RlbHRhdCA9IC0wLjUgKiB0ICogYyAqIGMgKiBjLFxuICAgICAgICBkZWx0YWNEZWx0YUxhbWJkYSA9IGRlbHRhY0RlbHRhdCAqIGRlbHRhdERlbHRhTGFtYmRhLFxuICAgICAgICBkZWx0YWNEZWx0YVBoaSA9IGRlbHRhY0RlbHRhdCAqIGRlbHRhdERlbHRhUGhpLFxuICAgICAgICBBID0gKEEgPSAyICogYzEgKyBzcXJ0MiAqIGsgKiAoYzAgLSBzMCkpICogQSAqIHYsXG4gICAgICAgIGRlbHRhdkRlbHRhTGFtYmRhID0gKHNxcnQyICogYzAgKiBjMSAqIGsgKyBjb3MxKSAvIEEsXG4gICAgICAgIGRlbHRhdkRlbHRhUGhpID0gLShzcXJ0MiAqIHMwICogczEpIC8gKGsgKiBBKSxcbiAgICAgICAgZGVsdGF4RGVsdGFMYW1iZGEgPSB2bTF2ICogZGVsdGFjRGVsdGFMYW1iZGEgLSAyICogZGVsdGF2RGVsdGFMYW1iZGEgLyB2ICsgYyAqIChkZWx0YXZEZWx0YUxhbWJkYSArIGRlbHRhdkRlbHRhTGFtYmRhIC8gdjIpLFxuICAgICAgICBkZWx0YXhEZWx0YVBoaSA9IHZtMXYgKiBkZWx0YWNEZWx0YVBoaSAtIDIgKiBkZWx0YXZEZWx0YVBoaSAvIHYgKyBjICogKGRlbHRhdkRlbHRhUGhpICsgZGVsdGF2RGVsdGFQaGkgLyB2MiksXG4gICAgICAgIGRlbHRheURlbHRhTGFtYmRhID0gdCAqIHZwMXYgKiBkZWx0YWNEZWx0YUxhbWJkYSAtIDIgKiBkZWx0YXREZWx0YUxhbWJkYSAvICgxICsgdDIpICsgYyAqIHZwMXYgKiBkZWx0YXREZWx0YUxhbWJkYSArIGMgKiB0ICogKGRlbHRhdkRlbHRhTGFtYmRhIC0gZGVsdGF2RGVsdGFMYW1iZGEgLyB2MiksXG4gICAgICAgIGRlbHRheURlbHRhUGhpID0gdCAqIHZwMXYgKiBkZWx0YWNEZWx0YVBoaSAtIDIgKiBkZWx0YXREZWx0YVBoaSAvICgxICsgdDIpICsgYyAqIHZwMXYgKiBkZWx0YXREZWx0YVBoaSArIGMgKiB0ICogKGRlbHRhdkRlbHRhUGhpIC0gZGVsdGF2RGVsdGFQaGkgLyB2MiksXG4gICAgICAgIGRlbm9taW5hdG9yID0gZGVsdGF4RGVsdGFQaGkgKiBkZWx0YXlEZWx0YUxhbWJkYSAtIGRlbHRheURlbHRhUGhpICogZGVsdGF4RGVsdGFMYW1iZGE7XG4gICAgaWYgKCFkZW5vbWluYXRvcikgYnJlYWs7XG4gICAgdmFyIGRlbHRhTGFtYmRhID0gKGZ5ICogZGVsdGF4RGVsdGFQaGkgLSBmeCAqIGRlbHRheURlbHRhUGhpKSAvIGRlbm9taW5hdG9yLFxuICAgICAgICBkZWx0YVBoaSA9IChmeCAqIGRlbHRheURlbHRhTGFtYmRhIC0gZnkgKiBkZWx0YXhEZWx0YUxhbWJkYSkgLyBkZW5vbWluYXRvcjtcbiAgICBsYW1iZGEgLT0gZGVsdGFMYW1iZGE7XG4gICAgcGhpID0gbWF4KC1oYWxmUGksIG1pbihoYWxmUGksIHBoaSAtIGRlbHRhUGhpKSk7XG4gIH0gd2hpbGUgKChhYnMoZGVsdGFMYW1iZGEpID4gZXBzaWxvbiB8fCBhYnMoZGVsdGFQaGkpID4gZXBzaWxvbikgJiYgLS1pID4gMCk7XG4gIHJldHVybiBhYnMoYWJzKHBoaSkgLSBoYWxmUGkpIDwgZXBzaWxvbiA/IFswLCBwaGldIDogaSAmJiBbbGFtYmRhLCBwaGldO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oKSB7XG4gIHJldHVybiBwcm9qZWN0aW9uKGVpc2VubG9oclJhdylcbiAgICAgIC5zY2FsZSg2Mi41MjcxKTtcbn1cblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2QzLWdlby1wcm9qZWN0aW9uL3NyYy9laXNlbmxvaHIuanNcbi8vIG1vZHVsZSBpZCA9IC4vbm9kZV9tb2R1bGVzL2QzLWdlby1wcm9qZWN0aW9uL3NyYy9laXNlbmxvaHIuanNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IHthYnMsIGFzaW4sIGF0YW4sIGNvcywgY29zaCwgZXBzaWxvbiwgZXhwLCBoYWxmUGksIGxvZywgcGksIHBvdywgcXVhcnRlclBpLCBzaWduLCBzaW4sIHNpbmgsIHNxcnQsIHRhbiwgdGFuaH0gZnJvbSBcIi4vbWF0aFwiO1xuXG4vLyBSZXR1cm5zIFtzbiwgY24sIGRuXSh1ICsgaXZ8bSkuXG5leHBvcnQgZnVuY3Rpb24gZWxsaXB0aWNKaSh1LCB2LCBtKSB7XG4gIHZhciBhLCBiLCBjO1xuICBpZiAoIXUpIHtcbiAgICBiID0gZWxsaXB0aWNKKHYsIDEgLSBtKTtcbiAgICByZXR1cm4gW1xuICAgICAgWzAsIGJbMF0gLyBiWzFdXSxcbiAgICAgIFsxIC8gYlsxXSwgMF0sXG4gICAgICBbYlsyXSAvIGJbMV0sIDBdXG4gICAgXTtcbiAgfVxuICBhID0gZWxsaXB0aWNKKHUsIG0pO1xuICBpZiAoIXYpIHJldHVybiBbW2FbMF0sIDBdLCBbYVsxXSwgMF0sIFthWzJdLCAwXV07XG4gIGIgPSBlbGxpcHRpY0oodiwgMSAtIG0pO1xuICBjID0gYlsxXSAqIGJbMV0gKyBtICogYVswXSAqIGFbMF0gKiBiWzBdICogYlswXTtcbiAgcmV0dXJuIFtcbiAgICBbYVswXSAqIGJbMl0gLyBjLCBhWzFdICogYVsyXSAqIGJbMF0gKiBiWzFdIC8gY10sXG4gICAgW2FbMV0gKiBiWzFdIC8gYywgLWFbMF0gKiBhWzJdICogYlswXSAqIGJbMl0gLyBjXSxcbiAgICBbYVsyXSAqIGJbMV0gKiBiWzJdIC8gYywgLW0gKiBhWzBdICogYVsxXSAqIGJbMF0gLyBjXVxuICBdO1xufVxuXG4vLyBSZXR1cm5zIFtzbiwgY24sIGRuLCBwaF0odXxtKS5cbmV4cG9ydCBmdW5jdGlvbiBlbGxpcHRpY0oodSwgbSkge1xuICB2YXIgYWksIGIsIHBoaSwgdCwgdHdvbjtcbiAgaWYgKG0gPCBlcHNpbG9uKSB7XG4gICAgdCA9IHNpbih1KTtcbiAgICBiID0gY29zKHUpO1xuICAgIGFpID0gbSAqICh1IC0gdCAqIGIpIC8gNDtcbiAgICByZXR1cm4gW1xuICAgICAgdCAtIGFpICogYixcbiAgICAgIGIgKyBhaSAqIHQsXG4gICAgICAxIC0gbSAqIHQgKiB0IC8gMixcbiAgICAgIHUgLSBhaVxuICAgIF07XG4gIH1cbiAgaWYgKG0gPj0gMSAtIGVwc2lsb24pIHtcbiAgICBhaSA9ICgxIC0gbSkgLyA0O1xuICAgIGIgPSBjb3NoKHUpO1xuICAgIHQgPSB0YW5oKHUpO1xuICAgIHBoaSA9IDEgLyBiO1xuICAgIHR3b24gPSBiICogc2luaCh1KTtcbiAgICByZXR1cm4gW1xuICAgICAgdCArIGFpICogKHR3b24gLSB1KSAvIChiICogYiksXG4gICAgICBwaGkgLSBhaSAqIHQgKiBwaGkgKiAodHdvbiAtIHUpLFxuICAgICAgcGhpICsgYWkgKiB0ICogcGhpICogKHR3b24gKyB1KSxcbiAgICAgIDIgKiBhdGFuKGV4cCh1KSkgLSBoYWxmUGkgKyBhaSAqICh0d29uIC0gdSkgLyBiXG4gICAgXTtcbiAgfVxuXG4gIHZhciBhID0gWzEsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDBdLFxuICAgICAgYyA9IFtzcXJ0KG0pLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwXSxcbiAgICAgIGkgPSAwO1xuICBiID0gc3FydCgxIC0gbSk7XG4gIHR3b24gPSAxO1xuXG4gIHdoaWxlIChhYnMoY1tpXSAvIGFbaV0pID4gZXBzaWxvbiAmJiBpIDwgOCkge1xuICAgIGFpID0gYVtpKytdO1xuICAgIGNbaV0gPSAoYWkgLSBiKSAvIDI7XG4gICAgYVtpXSA9IChhaSArIGIpIC8gMjtcbiAgICBiID0gc3FydChhaSAqIGIpO1xuICAgIHR3b24gKj0gMjtcbiAgfVxuXG4gIHBoaSA9IHR3b24gKiBhW2ldICogdTtcbiAgZG8ge1xuICAgIHQgPSBjW2ldICogc2luKGIgPSBwaGkpIC8gYVtpXTtcbiAgICBwaGkgPSAoYXNpbih0KSArIHBoaSkgLyAyO1xuICB9IHdoaWxlICgtLWkpO1xuXG4gIHJldHVybiBbc2luKHBoaSksIHQgPSBjb3MocGhpKSwgdCAvIGNvcyhwaGkgLSBiKSwgcGhpXTtcbn1cblxuLy8gQ2FsY3VsYXRlIEYocGhpK2lQc2l8bSkuXG4vLyBTZWUgQWJyYW1vd2l0eiBhbmQgU3RlZ3VuLCAxNy40LjExLlxuZXhwb3J0IGZ1bmN0aW9uIGVsbGlwdGljRmkocGhpLCBwc2ksIG0pIHtcbiAgdmFyIHIgPSBhYnMocGhpKSxcbiAgICAgIGkgPSBhYnMocHNpKSxcbiAgICAgIHNpbmhQc2kgPSBzaW5oKGkpO1xuICBpZiAocikge1xuICAgIHZhciBjc2NQaGkgPSAxIC8gc2luKHIpLFxuICAgICAgICBjb3RQaGkyID0gMSAvICh0YW4ocikgKiB0YW4ocikpLFxuICAgICAgICBiID0gLShjb3RQaGkyICsgbSAqIChzaW5oUHNpICogc2luaFBzaSAqIGNzY1BoaSAqIGNzY1BoaSkgLSAxICsgbSksXG4gICAgICAgIGMgPSAobSAtIDEpICogY290UGhpMixcbiAgICAgICAgY290TGFtYmRhMiA9ICgtYiArIHNxcnQoYiAqIGIgLSA0ICogYykpIC8gMjtcbiAgICByZXR1cm4gW1xuICAgICAgZWxsaXB0aWNGKGF0YW4oMSAvIHNxcnQoY290TGFtYmRhMikpLCBtKSAqIHNpZ24ocGhpKSxcbiAgICAgIGVsbGlwdGljRihhdGFuKHNxcnQoKGNvdExhbWJkYTIgLyBjb3RQaGkyIC0gMSkgLyBtKSksIDEgLSBtKSAqIHNpZ24ocHNpKVxuICAgIF07XG4gIH1cbiAgcmV0dXJuIFtcbiAgICAwLFxuICAgIGVsbGlwdGljRihhdGFuKHNpbmhQc2kpLCAxIC0gbSkgKiBzaWduKHBzaSlcbiAgXTtcbn1cblxuLy8gQ2FsY3VsYXRlIEYocGhpfG0pIHdoZXJlIG0gPSBrwrIgPSBzaW7Css6xLlxuLy8gU2VlIEFicmFtb3dpdHogYW5kIFN0ZWd1biwgMTcuNi43LlxuZXhwb3J0IGZ1bmN0aW9uIGVsbGlwdGljRihwaGksIG0pIHtcbiAgaWYgKCFtKSByZXR1cm4gcGhpO1xuICBpZiAobSA9PT0gMSkgcmV0dXJuIGxvZyh0YW4ocGhpIC8gMiArIHF1YXJ0ZXJQaSkpO1xuICB2YXIgYSA9IDEsXG4gICAgICBiID0gc3FydCgxIC0gbSksXG4gICAgICBjID0gc3FydChtKTtcbiAgZm9yICh2YXIgaSA9IDA7IGFicyhjKSA+IGVwc2lsb247IGkrKykge1xuICAgIGlmIChwaGkgJSBwaSkge1xuICAgICAgdmFyIGRQaGkgPSBhdGFuKGIgKiB0YW4ocGhpKSAvIGEpO1xuICAgICAgaWYgKGRQaGkgPCAwKSBkUGhpICs9IHBpO1xuICAgICAgcGhpICs9IGRQaGkgKyB+fihwaGkgLyBwaSkgKiBwaTtcbiAgICB9IGVsc2UgcGhpICs9IHBoaTtcbiAgICBjID0gKGEgKyBiKSAvIDI7XG4gICAgYiA9IHNxcnQoYSAqIGIpO1xuICAgIGMgPSAoKGEgPSBjKSAtIGIpIC8gMjtcbiAgfVxuICByZXR1cm4gcGhpIC8gKHBvdygyLCBpKSAqIGEpO1xufVxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvZDMtZ2VvLXByb2plY3Rpb24vc3JjL2VsbGlwdGljLmpzXG4vLyBtb2R1bGUgaWQgPSAuL25vZGVfbW9kdWxlcy9kMy1nZW8tcHJvamVjdGlvbi9zcmMvZWxsaXB0aWMuanNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IHtnZW9Qcm9qZWN0aW9uIGFzIHByb2plY3Rpb259IGZyb20gXCJkMy1nZW9cIjtcbmltcG9ydCB7YXRhbiwgY29zLCByYWRpYW5zLCBzcXJ0LCB0YW59IGZyb20gXCIuL21hdGhcIjtcblxudmFyIGZhaGV5SyA9IGNvcygzNSAqIHJhZGlhbnMpO1xuXG5leHBvcnQgZnVuY3Rpb24gZmFoZXlSYXcobGFtYmRhLCBwaGkpIHtcbiAgdmFyIHQgPSB0YW4ocGhpIC8gMik7XG4gIHJldHVybiBbbGFtYmRhICogZmFoZXlLICogc3FydCgxIC0gdCAqIHQpLCAoMSArIGZhaGV5SykgKiB0XTtcbn1cblxuZmFoZXlSYXcuaW52ZXJ0ID0gZnVuY3Rpb24oeCwgeSkge1xuICB2YXIgdCA9IHkgLyAoMSArIGZhaGV5Syk7XG4gIHJldHVybiBbeCAmJiB4IC8gKGZhaGV5SyAqIHNxcnQoMSAtIHQgKiB0KSksIDIgKiBhdGFuKHQpXTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKCkge1xuICByZXR1cm4gcHJvamVjdGlvbihmYWhleVJhdylcbiAgICAgIC5zY2FsZSgxMzcuMTUyKTtcbn1cblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2QzLWdlby1wcm9qZWN0aW9uL3NyYy9mYWhleS5qc1xuLy8gbW9kdWxlIGlkID0gLi9ub2RlX21vZHVsZXMvZDMtZ2VvLXByb2plY3Rpb24vc3JjL2ZhaGV5LmpzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCB7Z2VvUHJvamVjdGlvbiBhcyBwcm9qZWN0aW9ufSBmcm9tIFwiZDMtZ2VvXCI7XG5pbXBvcnQge2F0YW4sIGNvcywgc3FydFBpLCB0YW59IGZyb20gXCIuL21hdGhcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIGZvdWNhdXRSYXcobGFtYmRhLCBwaGkpIHtcbiAgdmFyIGsgPSBwaGkgLyAyLCBjb3NrID0gY29zKGspO1xuICByZXR1cm4gWyAyICogbGFtYmRhIC8gc3FydFBpICogY29zKHBoaSkgKiBjb3NrICogY29zaywgc3FydFBpICogdGFuKGspXTtcbn1cblxuZm91Y2F1dFJhdy5pbnZlcnQgPSBmdW5jdGlvbih4LCB5KSB7XG4gIHZhciBrID0gYXRhbih5IC8gc3FydFBpKSwgY29zayA9IGNvcyhrKSwgcGhpID0gMiAqIGs7XG4gIHJldHVybiBbeCAqIHNxcnRQaSAvIDIgLyAoY29zKHBoaSkgKiBjb3NrICogY29zayksIHBoaV07XG59O1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbigpIHtcbiAgcmV0dXJuIHByb2plY3Rpb24oZm91Y2F1dFJhdylcbiAgICAgIC5zY2FsZSgxMzUuMjY0KTtcbn1cblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2QzLWdlby1wcm9qZWN0aW9uL3NyYy9mb3VjYXV0LmpzXG4vLyBtb2R1bGUgaWQgPSAuL25vZGVfbW9kdWxlcy9kMy1nZW8tcHJvamVjdGlvbi9zcmMvZm91Y2F1dC5qc1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQge2dlb0VxdWlyZWN0YW5ndWxhciwgZ2VvT3J0aG9ncmFwaGljfSBmcm9tIFwiZDMtZ2VvXCI7XG5pbXBvcnQge2FzaW4sIGF0YW4sIGRlZ3JlZXMsIHJhZGlhbnMsIHNpbiwgdGFufSBmcm9tIFwiLi9tYXRoXCI7XG5cbmZ1bmN0aW9uIGdpbGJlcnRGb3J3YXJkKHBvaW50KSB7XG4gIHJldHVybiBbcG9pbnRbMF0gLyAyLCBhc2luKHRhbihwb2ludFsxXSAvIDIgKiByYWRpYW5zKSkgKiBkZWdyZWVzXTtcbn1cblxuZnVuY3Rpb24gZ2lsYmVydEludmVydChwb2ludCkge1xuICByZXR1cm4gW3BvaW50WzBdICogMiwgMiAqIGF0YW4oc2luKHBvaW50WzFdICogcmFkaWFucykpICogZGVncmVlc107XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKHByb2plY3Rpb25UeXBlKSB7XG4gIGlmIChwcm9qZWN0aW9uVHlwZSA9PSBudWxsKSBwcm9qZWN0aW9uVHlwZSA9IGdlb09ydGhvZ3JhcGhpYztcbiAgdmFyIHByb2plY3Rpb24gPSBwcm9qZWN0aW9uVHlwZSgpLFxuICAgICAgZXF1aXJlY3Rhbmd1bGFyID0gZ2VvRXF1aXJlY3Rhbmd1bGFyKCkuc2NhbGUoZGVncmVlcykucHJlY2lzaW9uKDApLmNsaXBBbmdsZShudWxsKS50cmFuc2xhdGUoWzAsIDBdKTsgLy8gYW50aW1lcmlkaWFuIGN1dHRpbmdcblxuICBmdW5jdGlvbiBnaWxiZXJ0KHBvaW50KSB7XG4gICAgcmV0dXJuIHByb2plY3Rpb24oZ2lsYmVydEZvcndhcmQocG9pbnQpKTtcbiAgfVxuXG4gIGlmIChwcm9qZWN0aW9uLmludmVydCkgZ2lsYmVydC5pbnZlcnQgPSBmdW5jdGlvbihwb2ludCkge1xuICAgIHJldHVybiBnaWxiZXJ0SW52ZXJ0KHByb2plY3Rpb24uaW52ZXJ0KHBvaW50KSk7XG4gIH07XG5cbiAgZ2lsYmVydC5zdHJlYW0gPSBmdW5jdGlvbihzdHJlYW0pIHtcbiAgICB2YXIgczEgPSBwcm9qZWN0aW9uLnN0cmVhbShzdHJlYW0pLCBzMCA9IGVxdWlyZWN0YW5ndWxhci5zdHJlYW0oe1xuICAgICAgcG9pbnQ6IGZ1bmN0aW9uKGxhbWJkYSwgcGhpKSB7IHMxLnBvaW50KGxhbWJkYSAvIDIsIGFzaW4odGFuKC1waGkgLyAyICogcmFkaWFucykpICogZGVncmVlcyk7IH0sXG4gICAgICBsaW5lU3RhcnQ6IGZ1bmN0aW9uKCkgeyBzMS5saW5lU3RhcnQoKTsgfSxcbiAgICAgIGxpbmVFbmQ6IGZ1bmN0aW9uKCkgeyBzMS5saW5lRW5kKCk7IH0sXG4gICAgICBwb2x5Z29uU3RhcnQ6IGZ1bmN0aW9uKCkgeyBzMS5wb2x5Z29uU3RhcnQoKTsgfSxcbiAgICAgIHBvbHlnb25FbmQ6IGZ1bmN0aW9uKCkgeyBzMS5wb2x5Z29uRW5kKCk7IH1cbiAgICB9KTtcbiAgICBzMC5zcGhlcmUgPSBzMS5zcGhlcmU7XG4gICAgcmV0dXJuIHMwO1xuICB9O1xuXG4gIGZ1bmN0aW9uIHByb3BlcnR5KG5hbWUpIHtcbiAgICBnaWxiZXJ0W25hbWVdID0gZnVuY3Rpb24oXykge1xuICAgICAgcmV0dXJuIGFyZ3VtZW50cy5sZW5ndGggPyAocHJvamVjdGlvbltuYW1lXShfKSwgZ2lsYmVydCkgOiBwcm9qZWN0aW9uW25hbWVdKCk7XG4gICAgfTtcbiAgfVxuXG4gIGdpbGJlcnQucm90YXRlID0gZnVuY3Rpb24oXykge1xuICAgIHJldHVybiBhcmd1bWVudHMubGVuZ3RoID8gKGVxdWlyZWN0YW5ndWxhci5yb3RhdGUoXyksIGdpbGJlcnQpIDogZXF1aXJlY3Rhbmd1bGFyLnJvdGF0ZSgpO1xuICB9O1xuXG4gIGdpbGJlcnQuY2VudGVyID0gZnVuY3Rpb24oXykge1xuICAgIHJldHVybiBhcmd1bWVudHMubGVuZ3RoID8gKHByb2plY3Rpb24uY2VudGVyKGdpbGJlcnRGb3J3YXJkKF8pKSwgZ2lsYmVydCkgOiBnaWxiZXJ0SW52ZXJ0KHByb2plY3Rpb24uY2VudGVyKCkpO1xuICB9O1xuXG4gIHByb3BlcnR5KFwiY2xpcEFuZ2xlXCIpO1xuICBwcm9wZXJ0eShcImNsaXBFeHRlbnRcIik7XG4gIHByb3BlcnR5KFwic2NhbGVcIik7XG4gIHByb3BlcnR5KFwidHJhbnNsYXRlXCIpO1xuICBwcm9wZXJ0eShcInByZWNpc2lvblwiKTtcblxuICByZXR1cm4gZ2lsYmVydFxuICAgICAgLnNjYWxlKDI0OS41KTtcbn1cblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2QzLWdlby1wcm9qZWN0aW9uL3NyYy9naWxiZXJ0LmpzXG4vLyBtb2R1bGUgaWQgPSAuL25vZGVfbW9kdWxlcy9kMy1nZW8tcHJvamVjdGlvbi9zcmMvZ2lsYmVydC5qc1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQge2dlb0F6aW11dGhhbEVxdWlkaXN0YW50UmF3IGFzIGF6aW11dGhhbEVxdWlkaXN0YW50UmF3LCBnZW9Qcm9qZWN0aW9uTXV0YXRvciBhcyBwcm9qZWN0aW9uTXV0YXRvcn0gZnJvbSBcImQzLWdlb1wiO1xuaW1wb3J0IHthYnMsIGFzaW4sIGF0YW4yLCBjb3MsIGRlZ3JlZXMsIGVwc2lsb24sIGVwc2lsb24yLCBoYWxmUGksIHBpLCByYWRpYW5zLCByb3VuZCwgc2luLCBzcXJ0fSBmcm9tIFwiLi9tYXRoXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBnaW5nZXJ5UmF3KHJobywgbikge1xuICB2YXIgayA9IDIgKiBwaSAvIG4sXG4gICAgICByaG8yID0gcmhvICogcmhvO1xuXG4gIGZ1bmN0aW9uIGZvcndhcmQobGFtYmRhLCBwaGkpIHtcbiAgICB2YXIgcCA9IGF6aW11dGhhbEVxdWlkaXN0YW50UmF3KGxhbWJkYSwgcGhpKSxcbiAgICAgICAgeCA9IHBbMF0sXG4gICAgICAgIHkgPSBwWzFdLFxuICAgICAgICByMiA9IHggKiB4ICsgeSAqIHk7XG5cbiAgICBpZiAocjIgPiByaG8yKSB7XG4gICAgICB2YXIgciA9IHNxcnQocjIpLFxuICAgICAgICAgIHRoZXRhID0gYXRhbjIoeSwgeCksXG4gICAgICAgICAgdGhldGEwID0gayAqIHJvdW5kKHRoZXRhIC8gayksXG4gICAgICAgICAgYWxwaGEgPSB0aGV0YSAtIHRoZXRhMCxcbiAgICAgICAgICByaG9Db3NBbHBoYSA9IHJobyAqIGNvcyhhbHBoYSksXG4gICAgICAgICAga18gPSAocmhvICogc2luKGFscGhhKSAtIGFscGhhICogc2luKHJob0Nvc0FscGhhKSkgLyAoaGFsZlBpIC0gcmhvQ29zQWxwaGEpLFxuICAgICAgICAgIHNfID0gZ2luZ2VyeUxlbmd0aChhbHBoYSwga18pLFxuICAgICAgICAgIGUgPSAocGkgLSByaG8pIC8gZ2luZ2VyeUludGVncmF0ZShzXywgcmhvQ29zQWxwaGEsIHBpKTtcblxuICAgICAgeCA9IHI7XG4gICAgICB2YXIgaSA9IDUwLCBkZWx0YTtcbiAgICAgIGRvIHtcbiAgICAgICAgeCAtPSBkZWx0YSA9IChyaG8gKyBnaW5nZXJ5SW50ZWdyYXRlKHNfLCByaG9Db3NBbHBoYSwgeCkgKiBlIC0gcikgLyAoc18oeCkgKiBlKTtcbiAgICAgIH0gd2hpbGUgKGFicyhkZWx0YSkgPiBlcHNpbG9uICYmIC0taSA+IDApO1xuXG4gICAgICB5ID0gYWxwaGEgKiBzaW4oeCk7XG4gICAgICBpZiAoeCA8IGhhbGZQaSkgeSAtPSBrXyAqICh4IC0gaGFsZlBpKTtcblxuICAgICAgdmFyIHMgPSBzaW4odGhldGEwKSxcbiAgICAgICAgICBjID0gY29zKHRoZXRhMCk7XG4gICAgICBwWzBdID0geCAqIGMgLSB5ICogcztcbiAgICAgIHBbMV0gPSB4ICogcyArIHkgKiBjO1xuICAgIH1cbiAgICByZXR1cm4gcDtcbiAgfVxuXG4gIGZvcndhcmQuaW52ZXJ0ID0gZnVuY3Rpb24oeCwgeSkge1xuICAgIHZhciByMiA9IHggKiB4ICsgeSAqIHk7XG4gICAgaWYgKHIyID4gcmhvMikge1xuICAgICAgdmFyIHIgPSBzcXJ0KHIyKSxcbiAgICAgICAgICB0aGV0YSA9IGF0YW4yKHksIHgpLFxuICAgICAgICAgIHRoZXRhMCA9IGsgKiByb3VuZCh0aGV0YSAvIGspLFxuICAgICAgICAgIGRUaGV0YSA9IHRoZXRhIC0gdGhldGEwO1xuXG4gICAgICB4ID0gciAqIGNvcyhkVGhldGEpO1xuICAgICAgeSA9IHIgKiBzaW4oZFRoZXRhKTtcblxuICAgICAgdmFyIHhfaGFsZlBpID0geCAtIGhhbGZQaSxcbiAgICAgICAgICBzaW54ID0gc2luKHgpLFxuICAgICAgICAgIGFscGhhID0geSAvIHNpbngsXG4gICAgICAgICAgZGVsdGEgPSB4IDwgaGFsZlBpID8gSW5maW5pdHkgOiAwLFxuICAgICAgICAgIGkgPSAxMDtcblxuICAgICAgd2hpbGUgKHRydWUpIHtcbiAgICAgICAgdmFyIHJob3NpbkFscGhhID0gcmhvICogc2luKGFscGhhKSxcbiAgICAgICAgICAgIHJob0Nvc0FscGhhID0gcmhvICogY29zKGFscGhhKSxcbiAgICAgICAgICAgIHNpblJob0Nvc0FscGhhID0gc2luKHJob0Nvc0FscGhhKSxcbiAgICAgICAgICAgIGhhbGZQaV9SaG9Db3NBbHBoYSA9IGhhbGZQaSAtIHJob0Nvc0FscGhhLFxuICAgICAgICAgICAga18gPSAocmhvc2luQWxwaGEgLSBhbHBoYSAqIHNpblJob0Nvc0FscGhhKSAvIGhhbGZQaV9SaG9Db3NBbHBoYSxcbiAgICAgICAgICAgIHNfID0gZ2luZ2VyeUxlbmd0aChhbHBoYSwga18pO1xuXG4gICAgICAgIGlmIChhYnMoZGVsdGEpIDwgZXBzaWxvbjIgfHwgIS0taSkgYnJlYWs7XG5cbiAgICAgICAgYWxwaGEgLT0gZGVsdGEgPSAoYWxwaGEgKiBzaW54IC0ga18gKiB4X2hhbGZQaSAtIHkpIC8gKFxuICAgICAgICAgIHNpbnggLSB4X2hhbGZQaSAqIDIgKiAoXG4gICAgICAgICAgICBoYWxmUGlfUmhvQ29zQWxwaGEgKiAocmhvQ29zQWxwaGEgKyBhbHBoYSAqIHJob3NpbkFscGhhICogY29zKHJob0Nvc0FscGhhKSAtIHNpblJob0Nvc0FscGhhKSAtXG4gICAgICAgICAgICByaG9zaW5BbHBoYSAqIChyaG9zaW5BbHBoYSAtIGFscGhhICogc2luUmhvQ29zQWxwaGEpXG4gICAgICAgICAgKSAvIChoYWxmUGlfUmhvQ29zQWxwaGEgKiBoYWxmUGlfUmhvQ29zQWxwaGEpKTtcbiAgICAgIH1cbiAgICAgIHIgPSByaG8gKyBnaW5nZXJ5SW50ZWdyYXRlKHNfLCByaG9Db3NBbHBoYSwgeCkgKiAocGkgLSByaG8pIC8gZ2luZ2VyeUludGVncmF0ZShzXywgcmhvQ29zQWxwaGEsIHBpKTtcbiAgICAgIHRoZXRhID0gdGhldGEwICsgYWxwaGE7XG4gICAgICB4ID0gciAqIGNvcyh0aGV0YSk7XG4gICAgICB5ID0gciAqIHNpbih0aGV0YSk7XG4gICAgfVxuICAgIHJldHVybiBhemltdXRoYWxFcXVpZGlzdGFudFJhdy5pbnZlcnQoeCwgeSk7XG4gIH07XG5cbiAgcmV0dXJuIGZvcndhcmQ7XG59XG5cbmZ1bmN0aW9uIGdpbmdlcnlMZW5ndGgoYWxwaGEsIGspIHtcbiAgcmV0dXJuIGZ1bmN0aW9uKHgpIHtcbiAgICB2YXIgeV8gPSBhbHBoYSAqIGNvcyh4KTtcbiAgICBpZiAoeCA8IGhhbGZQaSkgeV8gLT0gaztcbiAgICByZXR1cm4gc3FydCgxICsgeV8gKiB5Xyk7XG4gIH07XG59XG5cbi8vIE51bWVyaWNhbCBpbnRlZ3JhdGlvbjogdHJhcGV6b2lkYWwgcnVsZS5cbmZ1bmN0aW9uIGdpbmdlcnlJbnRlZ3JhdGUoZiwgYSwgYikge1xuICB2YXIgbiA9IDUwLFxuICAgICAgaCA9IChiIC0gYSkgLyBuLFxuICAgICAgcyA9IGYoYSkgKyBmKGIpO1xuICBmb3IgKHZhciBpID0gMSwgeCA9IGE7IGkgPCBuOyArK2kpIHMgKz0gMiAqIGYoeCArPSBoKTtcbiAgcmV0dXJuIHMgKiAwLjUgKiBoO1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbigpIHtcbiAgdmFyIG4gPSA2LFxuICAgICAgcmhvID0gMzAgKiByYWRpYW5zLFxuICAgICAgY1JobyA9IGNvcyhyaG8pLFxuICAgICAgc1JobyA9IHNpbihyaG8pLFxuICAgICAgbSA9IHByb2plY3Rpb25NdXRhdG9yKGdpbmdlcnlSYXcpLFxuICAgICAgcCA9IG0ocmhvLCBuKSxcbiAgICAgIHN0cmVhbV8gPSBwLnN0cmVhbSxcbiAgICAgIGVwc2lsb24gPSAxZS0yLFxuICAgICAgY3IgPSAtY29zKGVwc2lsb24gKiByYWRpYW5zKSxcbiAgICAgIHNyID0gc2luKGVwc2lsb24gKiByYWRpYW5zKTtcblxuICBwLnJhZGl1cyA9IGZ1bmN0aW9uKF8pIHtcbiAgICBpZiAoIWFyZ3VtZW50cy5sZW5ndGgpIHJldHVybiByaG8gKiBkZWdyZWVzO1xuICAgIGNSaG8gPSBjb3MocmhvID0gXyAqIHJhZGlhbnMpO1xuICAgIHNSaG8gPSBzaW4ocmhvKTtcbiAgICByZXR1cm4gbShyaG8sIG4pO1xuICB9O1xuXG4gIHAubG9iZXMgPSBmdW5jdGlvbihfKSB7XG4gICAgaWYgKCFhcmd1bWVudHMubGVuZ3RoKSByZXR1cm4gbjtcbiAgICByZXR1cm4gbShyaG8sIG4gPSArXyk7XG4gIH07XG5cbiAgcC5zdHJlYW0gPSBmdW5jdGlvbihzdHJlYW0pIHtcbiAgICB2YXIgcm90YXRlID0gcC5yb3RhdGUoKSxcbiAgICAgICAgcm90YXRlU3RyZWFtID0gc3RyZWFtXyhzdHJlYW0pLFxuICAgICAgICBzcGhlcmVTdHJlYW0gPSAocC5yb3RhdGUoWzAsIDBdKSwgc3RyZWFtXyhzdHJlYW0pKTtcbiAgICBwLnJvdGF0ZShyb3RhdGUpO1xuICAgIHJvdGF0ZVN0cmVhbS5zcGhlcmUgPSBmdW5jdGlvbigpIHtcbiAgICAgIHNwaGVyZVN0cmVhbS5wb2x5Z29uU3RhcnQoKSwgc3BoZXJlU3RyZWFtLmxpbmVTdGFydCgpO1xuICAgICAgZm9yICh2YXIgaSA9IDAsIGRlbHRhID0gMiAqIHBpIC8gbiwgcGhpID0gMDsgaSA8IG47ICsraSwgcGhpIC09IGRlbHRhKSB7XG4gICAgICAgIHNwaGVyZVN0cmVhbS5wb2ludChhdGFuMihzciAqIGNvcyhwaGkpLCBjcikgKiBkZWdyZWVzLCBhc2luKHNyICogc2luKHBoaSkpICogZGVncmVlcyk7XG4gICAgICAgIHNwaGVyZVN0cmVhbS5wb2ludChhdGFuMihzUmhvICogY29zKHBoaSAtIGRlbHRhIC8gMiksIGNSaG8pICogZGVncmVlcywgYXNpbihzUmhvICogc2luKHBoaSAtIGRlbHRhIC8gMikpICogZGVncmVlcyk7XG4gICAgICB9XG4gICAgICBzcGhlcmVTdHJlYW0ubGluZUVuZCgpLCBzcGhlcmVTdHJlYW0ucG9seWdvbkVuZCgpO1xuICAgIH07XG4gICAgcmV0dXJuIHJvdGF0ZVN0cmVhbTtcbiAgfTtcblxuICByZXR1cm4gcFxuICAgICAgLnJvdGF0ZShbOTAsIC00MF0pXG4gICAgICAuc2NhbGUoOTEuNzA5NSlcbiAgICAgIC5jbGlwQW5nbGUoMTgwIC0gMWUtMyk7XG59XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9kMy1nZW8tcHJvamVjdGlvbi9zcmMvZ2luZ2VyeS5qc1xuLy8gbW9kdWxlIGlkID0gLi9ub2RlX21vZHVsZXMvZDMtZ2VvLXByb2plY3Rpb24vc3JjL2dpbmdlcnkuanNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IHtnZW9Qcm9qZWN0aW9uIGFzIHByb2plY3Rpb259IGZyb20gXCJkMy1nZW9cIjtcbmltcG9ydCBnaW56YnVyZ1BvbHljb25pY1JhdyBmcm9tIFwiLi9naW56YnVyZ1BvbHljb25pY1wiO1xuXG5leHBvcnQgdmFyIGdpbnpidXJnNFJhdyA9IGdpbnpidXJnUG9seWNvbmljUmF3KDIuODI4NCwgLTEuNjk4OCwgMC43NTQzMiwgLTAuMTgwNzEsIDEuNzYwMDMsIC0wLjM4OTE0LCAwLjA0MjU1NSk7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKCkge1xuICByZXR1cm4gcHJvamVjdGlvbihnaW56YnVyZzRSYXcpXG4gICAgICAuc2NhbGUoMTQ5Ljk5NSk7XG59XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9kMy1nZW8tcHJvamVjdGlvbi9zcmMvZ2luemJ1cmc0LmpzXG4vLyBtb2R1bGUgaWQgPSAuL25vZGVfbW9kdWxlcy9kMy1nZW8tcHJvamVjdGlvbi9zcmMvZ2luemJ1cmc0LmpzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCB7Z2VvUHJvamVjdGlvbiBhcyBwcm9qZWN0aW9ufSBmcm9tIFwiZDMtZ2VvXCI7XG5pbXBvcnQgZ2luemJ1cmdQb2x5Y29uaWNSYXcgZnJvbSBcIi4vZ2luemJ1cmdQb2x5Y29uaWNcIjtcblxuZXhwb3J0IHZhciBnaW56YnVyZzVSYXcgPSBnaW56YnVyZ1BvbHljb25pY1JhdygyLjU4MzgxOSwgLTAuODM1ODI3LCAwLjE3MDM1NCwgLTAuMDM4MDk0LCAxLjU0MzMxMywgLTAuNDExNDM1LDAuMDgyNzQyKTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oKSB7XG4gIHJldHVybiBwcm9qZWN0aW9uKGdpbnpidXJnNVJhdylcbiAgICAgIC5zY2FsZSgxNTMuOTMpO1xufVxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvZDMtZ2VvLXByb2plY3Rpb24vc3JjL2dpbnpidXJnNS5qc1xuLy8gbW9kdWxlIGlkID0gLi9ub2RlX21vZHVsZXMvZDMtZ2VvLXByb2plY3Rpb24vc3JjL2dpbnpidXJnNS5qc1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQge2dlb1Byb2plY3Rpb24gYXMgcHJvamVjdGlvbn0gZnJvbSBcImQzLWdlb1wiO1xuaW1wb3J0IGdpbnpidXJnUG9seWNvbmljUmF3IGZyb20gXCIuL2dpbnpidXJnUG9seWNvbmljXCI7XG5pbXBvcnQge3BpfSBmcm9tIFwiLi9tYXRoXCI7XG5cbmV4cG9ydCB2YXIgZ2luemJ1cmc2UmF3ID0gZ2luemJ1cmdQb2x5Y29uaWNSYXcoNSAvIDYgKiBwaSwgLTAuNjI2MzYsIC0wLjAzNDQsIDAsIDEuMzQ5MywgLTAuMDU1MjQsIDAsIDAuMDQ1KTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oKSB7XG4gIHJldHVybiBwcm9qZWN0aW9uKGdpbnpidXJnNlJhdylcbiAgICAgIC5zY2FsZSgxMzAuOTQ1KTtcbn1cblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2QzLWdlby1wcm9qZWN0aW9uL3NyYy9naW56YnVyZzYuanNcbi8vIG1vZHVsZSBpZCA9IC4vbm9kZV9tb2R1bGVzL2QzLWdlby1wcm9qZWN0aW9uL3NyYy9naW56YnVyZzYuanNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IHtnZW9Qcm9qZWN0aW9uIGFzIHByb2plY3Rpb259IGZyb20gXCJkMy1nZW9cIjtcbmltcG9ydCB7YWJzLCBlcHNpbG9ufSBmcm9tIFwiLi9tYXRoXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBnaW56YnVyZzhSYXcobGFtYmRhLCBwaGkpIHtcbiAgdmFyIGxhbWJkYTIgPSBsYW1iZGEgKiBsYW1iZGEsXG4gICAgICBwaGkyID0gcGhpICogcGhpO1xuICByZXR1cm4gW1xuICAgIGxhbWJkYSAqICgxIC0gMC4xNjIzODggKiBwaGkyKSAqICgwLjg3IC0gMC4wMDA5NTI0MjYgKiBsYW1iZGEyICogbGFtYmRhMiksXG4gICAgcGhpICogKDEgKyBwaGkyIC8gMTIpXG4gIF07XG59XG5cbmdpbnpidXJnOFJhdy5pbnZlcnQgPSBmdW5jdGlvbih4LCB5KSB7XG4gIHZhciBsYW1iZGEgPSB4LFxuICAgICAgcGhpID0geSxcbiAgICAgIGkgPSA1MCwgZGVsdGE7XG4gIGRvIHtcbiAgICB2YXIgcGhpMiA9IHBoaSAqIHBoaTtcbiAgICBwaGkgLT0gZGVsdGEgPSAocGhpICogKDEgKyBwaGkyIC8gMTIpIC0geSkgLyAoMSArIHBoaTIgLyA0KTtcbiAgfSB3aGlsZSAoYWJzKGRlbHRhKSA+IGVwc2lsb24gJiYgLS1pID4gMCk7XG4gIGkgPSA1MDtcbiAgeCAvPSAxIC0wLjE2MjM4OCAqIHBoaTI7XG4gIGRvIHtcbiAgICB2YXIgbGFtYmRhNCA9IChsYW1iZGE0ID0gbGFtYmRhICogbGFtYmRhKSAqIGxhbWJkYTQ7XG4gICAgbGFtYmRhIC09IGRlbHRhID0gKGxhbWJkYSAqICgwLjg3IC0gMC4wMDA5NTI0MjYgKiBsYW1iZGE0KSAtIHgpIC8gKDAuODcgLSAwLjAwNDc2MjEzICogbGFtYmRhNCk7XG4gIH0gd2hpbGUgKGFicyhkZWx0YSkgPiBlcHNpbG9uICYmIC0taSA+IDApO1xuICByZXR1cm4gW2xhbWJkYSwgcGhpXTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKCkge1xuICByZXR1cm4gcHJvamVjdGlvbihnaW56YnVyZzhSYXcpXG4gICAgICAuc2NhbGUoMTMxLjc0Nyk7XG59XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9kMy1nZW8tcHJvamVjdGlvbi9zcmMvZ2luemJ1cmc4LmpzXG4vLyBtb2R1bGUgaWQgPSAuL25vZGVfbW9kdWxlcy9kMy1nZW8tcHJvamVjdGlvbi9zcmMvZ2luemJ1cmc4LmpzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCB7Z2VvUHJvamVjdGlvbiBhcyBwcm9qZWN0aW9ufSBmcm9tIFwiZDMtZ2VvXCI7XG5pbXBvcnQgZ2luemJ1cmdQb2x5Y29uaWNSYXcgZnJvbSBcIi4vZ2luemJ1cmdQb2x5Y29uaWNcIjtcblxuZXhwb3J0IHZhciBnaW56YnVyZzlSYXcgPSBnaW56YnVyZ1BvbHljb25pY1JhdygyLjY1MTYsIC0wLjc2NTM0LCAwLjE5MTIzLCAtMC4wNDcwOTQsIDEuMzYyODksIC0wLjEzOTY1LDAuMDMxNzYyKTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oKSB7XG4gIHJldHVybiBwcm9qZWN0aW9uKGdpbnpidXJnOVJhdylcbiAgICAgIC5zY2FsZSgxMzEuMDg3KTtcbn1cblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2QzLWdlby1wcm9qZWN0aW9uL3NyYy9naW56YnVyZzkuanNcbi8vIG1vZHVsZSBpZCA9IC4vbm9kZV9tb2R1bGVzL2QzLWdlby1wcm9qZWN0aW9uL3NyYy9naW56YnVyZzkuanNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IHthYnMsIGFzaW4sIGNvcywgZXBzaWxvbiwgcGksIHNpbiwgc3FydH0gZnJvbSBcIi4vbWF0aFwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbihhLCBiLCBjLCBkLCBlLCBmLCBnLCBoKSB7XG4gIGlmIChhcmd1bWVudHMubGVuZ3RoIDwgOCkgaCA9IDA7XG5cbiAgZnVuY3Rpb24gZm9yd2FyZChsYW1iZGEsIHBoaSkge1xuICAgIGlmICghcGhpKSByZXR1cm4gW2EgKiBsYW1iZGEgLyBwaSwgMF07XG4gICAgdmFyIHBoaTIgPSBwaGkgKiBwaGksXG4gICAgICAgIHhCID0gYSArIHBoaTIgKiAoYiArIHBoaTIgKiAoYyArIHBoaTIgKiBkKSksXG4gICAgICAgIHlCID0gcGhpICogKGUgLSAxICsgcGhpMiAqIChmIC0gaCArIHBoaTIgKiBnKSksXG4gICAgICAgIG0gPSAoeEIgKiB4QiArIHlCICogeUIpIC8gKDIgKiB5QiksXG4gICAgICAgIGFscGhhID0gbGFtYmRhICogYXNpbih4QiAvIG0pIC8gcGk7XG4gICAgcmV0dXJuIFttICogc2luKGFscGhhKSwgcGhpICogKDEgKyBwaGkyICogaCkgKyBtICogKDEgLSBjb3MoYWxwaGEpKV07XG4gIH1cblxuICBmb3J3YXJkLmludmVydCA9IGZ1bmN0aW9uKHgsIHkpIHtcbiAgICB2YXIgbGFtYmRhID0gcGkgKiB4IC8gYSxcbiAgICAgICAgcGhpID0geSxcbiAgICAgICAgZGVsdGFMYW1iZGEsIGRlbHRhUGhpLCBpID0gNTA7XG4gICAgZG8ge1xuICAgICAgdmFyIHBoaTIgPSBwaGkgKiBwaGksXG4gICAgICAgICAgeEIgPSBhICsgcGhpMiAqIChiICsgcGhpMiAqIChjICsgcGhpMiAqIGQpKSxcbiAgICAgICAgICB5QiA9IHBoaSAqIChlIC0gMSArIHBoaTIgKiAoZiAtIGggKyBwaGkyICogZykpLFxuICAgICAgICAgIHAgPSB4QiAqIHhCICsgeUIgKiB5QixcbiAgICAgICAgICBxID0gMiAqIHlCLFxuICAgICAgICAgIG0gPSBwIC8gcSxcbiAgICAgICAgICBtMiA9IG0gKiBtLFxuICAgICAgICAgIGRBbHBoYWRMYW1iZGEgPSBhc2luKHhCIC8gbSkgLyBwaSxcbiAgICAgICAgICBhbHBoYSA9IGxhbWJkYSAqIGRBbHBoYWRMYW1iZGEsXG4gICAgICAgICAgeEIyID0geEIgKiB4QixcbiAgICAgICAgICBkeEJkUGhpID0gKDIgKiBiICsgcGhpMiAqICg0ICogYyArIHBoaTIgKiA2ICogZCkpICogcGhpLFxuICAgICAgICAgIGR5QmRQaGkgPSBlICsgcGhpMiAqICgzICogZiArIHBoaTIgKiA1ICogZyksXG4gICAgICAgICAgZHBkUGhpID0gMiAqICh4QiAqIGR4QmRQaGkgKyB5QiAqIChkeUJkUGhpIC0gMSkpLFxuICAgICAgICAgIGRxZFBoaSA9IDIgKiAoZHlCZFBoaSAtIDEpLFxuICAgICAgICAgIGRtZFBoaSA9IChkcGRQaGkgKiBxIC0gcCAqIGRxZFBoaSkgLyAocSAqIHEpLFxuICAgICAgICAgIGNvc0FscGhhID0gY29zKGFscGhhKSxcbiAgICAgICAgICBzaW5BbHBoYSA9IHNpbihhbHBoYSksXG4gICAgICAgICAgbWNvc0FscGhhID0gbSAqIGNvc0FscGhhLFxuICAgICAgICAgIG1zaW5BbHBoYSA9IG0gKiBzaW5BbHBoYSxcbiAgICAgICAgICBkQWxwaGFkUGhpID0gKChsYW1iZGEgLyBwaSkgKiAoMSAvIHNxcnQoMSAtIHhCMiAvIG0yKSkgKiAoZHhCZFBoaSAqIG0gLSB4QiAqIGRtZFBoaSkpIC8gbTIsXG4gICAgICAgICAgZnggPSBtc2luQWxwaGEgLSB4LFxuICAgICAgICAgIGZ5ID0gcGhpICogKDEgKyBwaGkyICogaCkgKyBtIC0gbWNvc0FscGhhIC0geSxcbiAgICAgICAgICBkZWx0YXhEZWx0YVBoaSA9IGRtZFBoaSAqIHNpbkFscGhhICsgbWNvc0FscGhhICogZEFscGhhZFBoaSxcbiAgICAgICAgICBkZWx0YXhEZWx0YUxhbWJkYSA9IG1jb3NBbHBoYSAqIGRBbHBoYWRMYW1iZGEsXG4gICAgICAgICAgZGVsdGF5RGVsdGFQaGkgPSAxICsgZG1kUGhpIC0gKGRtZFBoaSAqIGNvc0FscGhhIC0gbXNpbkFscGhhICogZEFscGhhZFBoaSksXG4gICAgICAgICAgZGVsdGF5RGVsdGFMYW1iZGEgPSBtc2luQWxwaGEgKiBkQWxwaGFkTGFtYmRhLFxuICAgICAgICAgIGRlbm9taW5hdG9yID0gZGVsdGF4RGVsdGFQaGkgKiBkZWx0YXlEZWx0YUxhbWJkYSAtIGRlbHRheURlbHRhUGhpICogZGVsdGF4RGVsdGFMYW1iZGE7XG4gICAgICBpZiAoIWRlbm9taW5hdG9yKSBicmVhaztcbiAgICAgIGxhbWJkYSAtPSBkZWx0YUxhbWJkYSA9IChmeSAqIGRlbHRheERlbHRhUGhpIC0gZnggKiBkZWx0YXlEZWx0YVBoaSkgLyBkZW5vbWluYXRvcjtcbiAgICAgIHBoaSAtPSBkZWx0YVBoaSA9IChmeCAqIGRlbHRheURlbHRhTGFtYmRhIC0gZnkgKiBkZWx0YXhEZWx0YUxhbWJkYSkgLyBkZW5vbWluYXRvcjtcbiAgICB9IHdoaWxlICgoYWJzKGRlbHRhTGFtYmRhKSA+IGVwc2lsb24gfHwgYWJzKGRlbHRhUGhpKSA+IGVwc2lsb24pICYmIC0taSA+IDApO1xuICAgIHJldHVybiBbbGFtYmRhLCBwaGldO1xuICB9O1xuXG4gIHJldHVybiBmb3J3YXJkO1xufVxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvZDMtZ2VvLXByb2plY3Rpb24vc3JjL2dpbnpidXJnUG9seWNvbmljLmpzXG4vLyBtb2R1bGUgaWQgPSAuL25vZGVfbW9kdWxlcy9kMy1nZW8tcHJvamVjdGlvbi9zcmMvZ2luemJ1cmdQb2x5Y29uaWMuanNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IHtnZW9Qcm9qZWN0aW9uIGFzIHByb2plY3Rpb259IGZyb20gXCJkMy1nZW9cIjtcbmltcG9ydCB7YWJzLCBhc2luLCBhdGFuMiwgY29zLCBzaWduLCBlcHNpbG9uLCBlcHNpbG9uMiwgaGFsZlBpLCBwaSwgc2luLCBzcXJ0fSBmcm9tIFwiLi9tYXRoXCI7XG5pbXBvcnQgc3F1YXJlUmF3IGZyb20gXCIuL3NxdWFyZVwiO1xuXG5leHBvcnQgZnVuY3Rpb24gZ3JpbmdvcnRlblJhdyhsYW1iZGEsIHBoaSkge1xuICB2YXIgc0xhbWJkYSA9IHNpZ24obGFtYmRhKSxcbiAgICAgIHNQaGkgPSBzaWduKHBoaSksXG4gICAgICBjb3NQaGkgPSBjb3MocGhpKSxcbiAgICAgIHggPSBjb3MobGFtYmRhKSAqIGNvc1BoaSxcbiAgICAgIHkgPSBzaW4obGFtYmRhKSAqIGNvc1BoaSxcbiAgICAgIHogPSBzaW4oc1BoaSAqIHBoaSk7XG4gIGxhbWJkYSA9IGFicyhhdGFuMih5LCB6KSk7XG4gIHBoaSA9IGFzaW4oeCk7XG4gIGlmIChhYnMobGFtYmRhIC0gaGFsZlBpKSA+IGVwc2lsb24pIGxhbWJkYSAlPSBoYWxmUGk7XG4gIHZhciBwb2ludCA9IGdyaW5nb3J0ZW5IZXhhZGVjYW50KGxhbWJkYSA+IHBpIC8gNCA/IGhhbGZQaSAtIGxhbWJkYSA6IGxhbWJkYSwgcGhpKTtcbiAgaWYgKGxhbWJkYSA+IHBpIC8gNCkgeiA9IHBvaW50WzBdLCBwb2ludFswXSA9IC1wb2ludFsxXSwgcG9pbnRbMV0gPSAtejtcbiAgcmV0dXJuIChwb2ludFswXSAqPSBzTGFtYmRhLCBwb2ludFsxXSAqPSAtc1BoaSwgcG9pbnQpO1xufVxuXG5ncmluZ29ydGVuUmF3LmludmVydCA9IGZ1bmN0aW9uKHgsIHkpIHtcbiAgaWYgKGFicyh4KSA+IDEpIHggPSBzaWduKHgpICogMiAtIHg7XG4gIGlmIChhYnMoeSkgPiAxKSB5ID0gc2lnbih5KSAqIDIgLSB5O1xuICB2YXIgc3ggPSBzaWduKHgpLFxuICAgICAgc3kgPSBzaWduKHkpLFxuICAgICAgeDAgPSAtc3ggKiB4LFxuICAgICAgeTAgPSAtc3kgKiB5LFxuICAgICAgdCA9IHkwIC8geDAgPCAxLFxuICAgICAgcCA9IGdyaW5nb3J0ZW5IZXhhZGVjYW50SW52ZXJ0KHQgPyB5MCA6IHgwLCB0ID8geDAgOiB5MCksXG4gICAgICBsYW1iZGEgPSBwWzBdLFxuICAgICAgcGhpID0gcFsxXSxcbiAgICAgIGNvc1BoaSA9IGNvcyhwaGkpO1xuICBpZiAodCkgbGFtYmRhID0gLWhhbGZQaSAtIGxhbWJkYTtcbiAgcmV0dXJuIFtzeCAqIChhdGFuMihzaW4obGFtYmRhKSAqIGNvc1BoaSwgLXNpbihwaGkpKSArIHBpKSwgc3kgKiBhc2luKGNvcyhsYW1iZGEpICogY29zUGhpKV07XG59O1xuXG5mdW5jdGlvbiBncmluZ29ydGVuSGV4YWRlY2FudChsYW1iZGEsIHBoaSkge1xuICBpZiAocGhpID09PSBoYWxmUGkpIHJldHVybiBbMCwgMF07XG5cbiAgdmFyIHNpblBoaSA9IHNpbihwaGkpLFxuICAgICAgciA9IHNpblBoaSAqIHNpblBoaSxcbiAgICAgIHIyID0gciAqIHIsXG4gICAgICBqID0gMSArIHIyLFxuICAgICAgayA9IDEgKyAzICogcjIsXG4gICAgICBxID0gMSAtIHIyLFxuICAgICAgeiA9IGFzaW4oMSAvIHNxcnQoaikpLFxuICAgICAgdiA9IHEgKyByICogaiAqIHosXG4gICAgICBwMiA9ICgxIC0gc2luUGhpKSAvIHYsXG4gICAgICBwID0gc3FydChwMiksXG4gICAgICBhMiA9IHAyICogaixcbiAgICAgIGEgPSBzcXJ0KGEyKSxcbiAgICAgIGggPSBwICogcSxcbiAgICAgIHgsXG4gICAgICBpO1xuXG4gIGlmIChsYW1iZGEgPT09IDApIHJldHVybiBbMCwgLShoICsgciAqIGEpXTtcblxuICB2YXIgY29zUGhpID0gY29zKHBoaSksXG4gICAgICBzZWNQaGkgPSAxIC8gY29zUGhpLFxuICAgICAgZHJkUGhpID0gMiAqIHNpblBoaSAqIGNvc1BoaSxcbiAgICAgIGR2ZFBoaSA9ICgtMyAqIHIgKyB6ICogaykgKiBkcmRQaGksXG4gICAgICBkcDJkUGhpID0gKC12ICogY29zUGhpIC0gKDEgLSBzaW5QaGkpICogZHZkUGhpKSAvICh2ICogdiksXG4gICAgICBkcGRQaGkgPSAoMC41ICogZHAyZFBoaSkgLyBwLFxuICAgICAgZGhkUGhpID0gcSAqIGRwZFBoaSAtIDIgKiByICogcCAqIGRyZFBoaSxcbiAgICAgIGRyYTJkUGhpID0gciAqIGogKiBkcDJkUGhpICsgcDIgKiBrICogZHJkUGhpLFxuICAgICAgbXUgPSAtc2VjUGhpICogZHJkUGhpLFxuICAgICAgbnUgPSAtc2VjUGhpICogZHJhMmRQaGksXG4gICAgICB6ZXRhID0gLTIgKiBzZWNQaGkgKiBkaGRQaGksXG4gICAgICBsYW1iZGExID0gNCAqIGxhbWJkYSAvIHBpLFxuICAgICAgZGVsdGE7XG5cbiAgLy8gU2xvd2VyIGJ1dCBhY2N1cmF0ZSBiaXNlY3Rpb24gbWV0aG9kLlxuICBpZiAobGFtYmRhID4gMC4yMjIgKiBwaSB8fCBwaGkgPCBwaSAvIDQgJiYgbGFtYmRhID4gMC4xNzUgKiBwaSkge1xuICAgIHggPSAoaCArIHIgKiBzcXJ0KGEyICogKDEgKyByMikgLSBoICogaCkpIC8gKDEgKyByMik7XG4gICAgaWYgKGxhbWJkYSA+IHBpIC8gNCkgcmV0dXJuIFt4LCB4XTtcbiAgICB2YXIgeDEgPSB4LCB4MCA9IDAuNSAqIHg7XG4gICAgeCA9IDAuNSAqICh4MCArIHgxKSwgaSA9IDUwO1xuICAgIGRvIHtcbiAgICAgIHZhciBnID0gc3FydChhMiAtIHggKiB4KSxcbiAgICAgICAgICBmID0gKHggKiAoemV0YSArIG11ICogZykgKyBudSAqIGFzaW4oeCAvIGEpKSAtIGxhbWJkYTE7XG4gICAgICBpZiAoIWYpIGJyZWFrO1xuICAgICAgaWYgKGYgPCAwKSB4MCA9IHg7XG4gICAgICBlbHNlIHgxID0geDtcbiAgICAgIHggPSAwLjUgKiAoeDAgKyB4MSk7XG4gICAgfSB3aGlsZSAoYWJzKHgxIC0geDApID4gZXBzaWxvbiAmJiAtLWkgPiAwKTtcbiAgfVxuXG4gIC8vIE5ld3Rvbi1SYXBoc29uLlxuICBlbHNlIHtcbiAgICB4ID0gZXBzaWxvbiwgaSA9IDI1O1xuICAgIGRvIHtcbiAgICAgIHZhciB4MiA9IHggKiB4LFxuICAgICAgICAgIGcyID0gc3FydChhMiAtIHgyKSxcbiAgICAgICAgICB6ZXRhTXVnID0gemV0YSArIG11ICogZzIsXG4gICAgICAgICAgZjIgPSB4ICogemV0YU11ZyArIG51ICogYXNpbih4IC8gYSkgLSBsYW1iZGExLFxuICAgICAgICAgIGRmID0gemV0YU11ZyArIChudSAtIG11ICogeDIpIC8gZzI7XG4gICAgICB4IC09IGRlbHRhID0gZzIgPyBmMiAvIGRmIDogMDtcbiAgICB9IHdoaWxlIChhYnMoZGVsdGEpID4gZXBzaWxvbiAmJiAtLWkgPiAwKTtcbiAgfVxuXG4gIHJldHVybiBbeCwgLWggLSByICogc3FydChhMiAtIHggKiB4KV07XG59XG5cbmZ1bmN0aW9uIGdyaW5nb3J0ZW5IZXhhZGVjYW50SW52ZXJ0KHgsIHkpIHtcbiAgdmFyIHgwID0gMCxcbiAgICAgIHgxID0gMSxcbiAgICAgIHIgPSAwLjUsXG4gICAgICBpID0gNTA7XG5cbiAgd2hpbGUgKHRydWUpIHtcbiAgICB2YXIgcjIgPSByICogcixcbiAgICAgICAgc2luUGhpID0gc3FydChyKSxcbiAgICAgICAgeiA9IGFzaW4oMSAvIHNxcnQoMSArIHIyKSksXG4gICAgICAgIHYgPSAoMSAtIHIyKSArIHIgKiAoMSArIHIyKSAqIHosXG4gICAgICAgIHAyID0gKDEgLSBzaW5QaGkpIC8gdixcbiAgICAgICAgcCA9IHNxcnQocDIpLFxuICAgICAgICBhMiA9IHAyICogKDEgKyByMiksXG4gICAgICAgIGggPSBwICogKDEgLSByMiksXG4gICAgICAgIGcyID0gYTIgLSB4ICogeCxcbiAgICAgICAgZyA9IHNxcnQoZzIpLFxuICAgICAgICB5MCA9IHkgKyBoICsgciAqIGc7XG4gICAgaWYgKGFicyh4MSAtIHgwKSA8IGVwc2lsb24yIHx8IC0taSA9PT0gMCB8fCB5MCA9PT0gMCkgYnJlYWs7XG4gICAgaWYgKHkwID4gMCkgeDAgPSByO1xuICAgIGVsc2UgeDEgPSByO1xuICAgIHIgPSAwLjUgKiAoeDAgKyB4MSk7XG4gIH1cblxuICBpZiAoIWkpIHJldHVybiBudWxsO1xuXG4gIHZhciBwaGkgPSBhc2luKHNpblBoaSksXG4gICAgICBjb3NQaGkgPSBjb3MocGhpKSxcbiAgICAgIHNlY1BoaSA9IDEgLyBjb3NQaGksXG4gICAgICBkcmRQaGkgPSAyICogc2luUGhpICogY29zUGhpLFxuICAgICAgZHZkUGhpID0gKC0zICogciArIHogKiAoMSArIDMgKiByMikpICogZHJkUGhpLFxuICAgICAgZHAyZFBoaSA9ICgtdiAqIGNvc1BoaSAtICgxIC0gc2luUGhpKSAqIGR2ZFBoaSkgLyAodiAqIHYpLFxuICAgICAgZHBkUGhpID0gMC41ICogZHAyZFBoaSAvIHAsXG4gICAgICBkaGRQaGkgPSAoMSAtIHIyKSAqIGRwZFBoaSAtIDIgKiByICogcCAqIGRyZFBoaSxcbiAgICAgIHpldGEgPSAtMiAqIHNlY1BoaSAqIGRoZFBoaSxcbiAgICAgIG11ID0gLXNlY1BoaSAqIGRyZFBoaSxcbiAgICAgIG51ID0gLXNlY1BoaSAqIChyICogKDEgKyByMikgKiBkcDJkUGhpICsgcDIgKiAoMSArIDMgKiByMikgKiBkcmRQaGkpO1xuXG4gIHJldHVybiBbcGkgLyA0ICogKHggKiAoemV0YSArIG11ICogZykgKyBudSAqIGFzaW4oeCAvIHNxcnQoYTIpKSksIHBoaV07XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKCkge1xuICByZXR1cm4gcHJvamVjdGlvbihzcXVhcmVSYXcoZ3JpbmdvcnRlblJhdykpXG4gICAgICAuc2NhbGUoMjM5Ljc1KTtcbn1cblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2QzLWdlby1wcm9qZWN0aW9uL3NyYy9ncmluZ29ydGVuLmpzXG4vLyBtb2R1bGUgaWQgPSAuL25vZGVfbW9kdWxlcy9kMy1nZW8tcHJvamVjdGlvbi9zcmMvZ3JpbmdvcnRlbi5qc1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQge2dlb1Byb2plY3Rpb24gYXMgcHJvamVjdGlvbn0gZnJvbSBcImQzLWdlb1wiO1xuaW1wb3J0IHtlbGxpcHRpY0YsIGVsbGlwdGljRmksIGVsbGlwdGljSml9IGZyb20gXCIuL2VsbGlwdGljXCI7XG5pbXBvcnQge2FicywgYXRhbiwgYXRhbjIsIGNvcywgZXhwLCBoYWxmUGksIGxvZywgcGksIHNpbiwgc3FydCwgc3FydDIsIHRhbn0gZnJvbSBcIi4vbWF0aFwiO1xuaW1wb3J0IHNxdWFyZVJhdyBmcm9tIFwiLi9zcXVhcmVcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIGd1eW91UmF3KGxhbWJkYSwgcGhpKSB7XG4gIHZhciBrXyA9IChzcXJ0MiAtIDEpIC8gKHNxcnQyICsgMSksXG4gICAgICBrID0gc3FydCgxIC0ga18gKiBrXyksXG4gICAgICBLID0gZWxsaXB0aWNGKGhhbGZQaSwgayAqIGspLFxuICAgICAgZiA9IC0xLFxuICAgICAgcHNpID0gbG9nKHRhbihwaSAvIDQgKyBhYnMocGhpKSAvIDIpKSxcbiAgICAgIHIgPSBleHAoZiAqIHBzaSkgLyBzcXJ0KGtfKSxcbiAgICAgIGF0ID0gZ3V5b3VDb21wbGV4QXRhbihyICogY29zKGYgKiBsYW1iZGEpLCByICogc2luKGYgKiBsYW1iZGEpKSxcbiAgICAgIHQgPSBlbGxpcHRpY0ZpKGF0WzBdLCBhdFsxXSwgayAqIGspO1xuICByZXR1cm4gWy10WzFdLCAocGhpID49IDAgPyAxIDogLTEpICogKDAuNSAqIEsgLSB0WzBdKV07XG59XG5cbmZ1bmN0aW9uIGd1eW91Q29tcGxleEF0YW4oeCwgeSkge1xuICB2YXIgeDIgPSB4ICogeCxcbiAgICAgIHlfMSA9IHkgKyAxLFxuICAgICAgdCA9IDEgLSB4MiAtIHkgKiB5O1xuICByZXR1cm4gW1xuICAgMC41ICogKCh4ID49IDAgPyBoYWxmUGkgOiAtaGFsZlBpKSAtIGF0YW4yKHQsIDIgKiB4KSksXG4gICAgLTAuMjUgKiBsb2codCAqIHQgKyA0ICogeDIpICswLjUgKiBsb2coeV8xICogeV8xICsgeDIpXG4gIF07XG59XG5cbmZ1bmN0aW9uIGd1eW91Q29tcGxleERpdmlkZShhLCBiKSB7XG4gIHZhciBkZW5vbWluYXRvciA9IGJbMF0gKiBiWzBdICsgYlsxXSAqIGJbMV07XG4gIHJldHVybiBbXG4gICAgKGFbMF0gKiBiWzBdICsgYVsxXSAqIGJbMV0pIC8gZGVub21pbmF0b3IsXG4gICAgKGFbMV0gKiBiWzBdIC0gYVswXSAqIGJbMV0pIC8gZGVub21pbmF0b3JcbiAgXTtcbn1cblxuZ3V5b3VSYXcuaW52ZXJ0ID0gZnVuY3Rpb24oeCwgeSkge1xuICB2YXIga18gPSAoc3FydDIgLSAxKSAvIChzcXJ0MiArIDEpLFxuICAgICAgayA9IHNxcnQoMSAtIGtfICoga18pLFxuICAgICAgSyA9IGVsbGlwdGljRihoYWxmUGksIGsgKiBrKSxcbiAgICAgIGYgPSAtMSxcbiAgICAgIGogPSBlbGxpcHRpY0ppKDAuNSAqIEsgLSB5LCAteCwgayAqIGspLFxuICAgICAgdG4gPSBndXlvdUNvbXBsZXhEaXZpZGUoalswXSwgalsxXSksXG4gICAgICBsYW1iZGEgPSBhdGFuMih0blsxXSwgdG5bMF0pIC8gZjtcbiAgcmV0dXJuIFtcbiAgICBsYW1iZGEsXG4gICAgMiAqIGF0YW4oZXhwKDAuNSAvIGYgKiBsb2coa18gKiB0blswXSAqIHRuWzBdICsga18gKiB0blsxXSAqIHRuWzFdKSkpIC0gaGFsZlBpXG4gIF07XG59O1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbigpIHtcbiAgcmV0dXJuIHByb2plY3Rpb24oc3F1YXJlUmF3KGd1eW91UmF3KSlcbiAgICAgIC5zY2FsZSgxNTEuNDk2KTtcbn1cblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2QzLWdlby1wcm9qZWN0aW9uL3NyYy9ndXlvdS5qc1xuLy8gbW9kdWxlIGlkID0gLi9ub2RlX21vZHVsZXMvZDMtZ2VvLXByb2plY3Rpb24vc3JjL2d1eW91LmpzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCB7Z2VvQXppbXV0aGFsRXF1YWxBcmVhUmF3IGFzIGF6aW11dGhhbEVxdWFsQXJlYVJhdywgZ2VvUHJvamVjdGlvbk11dGF0b3IgYXMgcHJvamVjdGlvbk11dGF0b3J9IGZyb20gXCJkMy1nZW9cIjtcbmltcG9ydCB7YXNpbiwgY29zLCBzaW59IGZyb20gXCIuL21hdGhcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIGhhbW1lclJhdyhBLCBCKSB7XG4gIGlmIChhcmd1bWVudHMubGVuZ3RoIDwgMikgQiA9IEE7XG4gIGlmIChCID09PSAxKSByZXR1cm4gYXppbXV0aGFsRXF1YWxBcmVhUmF3O1xuICBpZiAoQiA9PT0gSW5maW5pdHkpIHJldHVybiBoYW1tZXJRdWFydGljQXV0aGFsaWNSYXc7XG5cbiAgZnVuY3Rpb24gZm9yd2FyZChsYW1iZGEsIHBoaSkge1xuICAgIHZhciBjb29yZGluYXRlcyA9IGF6aW11dGhhbEVxdWFsQXJlYVJhdyhsYW1iZGEgLyBCLCBwaGkpO1xuICAgIGNvb3JkaW5hdGVzWzBdICo9IEE7XG4gICAgcmV0dXJuIGNvb3JkaW5hdGVzO1xuICB9XG5cbiAgZm9yd2FyZC5pbnZlcnQgPSBmdW5jdGlvbih4LCB5KSB7XG4gICAgdmFyIGNvb3JkaW5hdGVzID0gYXppbXV0aGFsRXF1YWxBcmVhUmF3LmludmVydCh4IC8gQSwgeSk7XG4gICAgY29vcmRpbmF0ZXNbMF0gKj0gQjtcbiAgICByZXR1cm4gY29vcmRpbmF0ZXM7XG4gIH07XG5cbiAgcmV0dXJuIGZvcndhcmQ7XG59XG5cbmZ1bmN0aW9uIGhhbW1lclF1YXJ0aWNBdXRoYWxpY1JhdyhsYW1iZGEsIHBoaSkge1xuICByZXR1cm4gW1xuICAgIGxhbWJkYSAqIGNvcyhwaGkpIC8gY29zKHBoaSAvPSAyKSxcbiAgICAyICogc2luKHBoaSlcbiAgXTtcbn1cblxuaGFtbWVyUXVhcnRpY0F1dGhhbGljUmF3LmludmVydCA9IGZ1bmN0aW9uKHgsIHkpIHtcbiAgdmFyIHBoaSA9IDIgKiBhc2luKHkgLyAyKTtcbiAgcmV0dXJuIFtcbiAgICB4ICogY29zKHBoaSAvIDIpIC8gY29zKHBoaSksXG4gICAgcGhpXG4gIF07XG59O1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbigpIHtcbiAgdmFyIEIgPSAyLFxuICAgICAgbSA9IHByb2plY3Rpb25NdXRhdG9yKGhhbW1lclJhdyksXG4gICAgICBwID0gbShCKTtcblxuICBwLmNvZWZmaWNpZW50ID0gZnVuY3Rpb24oXykge1xuICAgIGlmICghYXJndW1lbnRzLmxlbmd0aCkgcmV0dXJuIEI7XG4gICAgcmV0dXJuIG0oQiA9ICtfKTtcbiAgfTtcblxuICByZXR1cm4gcFxuICAgIC5zY2FsZSgxNjkuNTI5KTtcbn1cblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2QzLWdlby1wcm9qZWN0aW9uL3NyYy9oYW1tZXIuanNcbi8vIG1vZHVsZSBpZCA9IC4vbm9kZV9tb2R1bGVzL2QzLWdlby1wcm9qZWN0aW9uL3NyYy9oYW1tZXIuanNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IHtnZW9Qcm9qZWN0aW9uTXV0YXRvciBhcyBwcm9qZWN0aW9uTXV0YXRvciwgZ2VvQ2lyY2xlfSBmcm9tIFwiZDMtZ2VvXCI7XG5pbXBvcnQge2FicywgYWNvcywgYXNpbiwgYXRhbjIsIGNvcywgZGVncmVlcywgZXBzaWxvbiwgaGFsZlBpLCByYWRpYW5zLCBzcXJ0LCBzaW59IGZyb20gXCIuL21hdGhcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIGhhbW1lclJldHJvYXppbXV0aGFsUmF3KHBoaTApIHtcbiAgdmFyIHNpblBoaTAgPSBzaW4ocGhpMCksXG4gICAgICBjb3NQaGkwID0gY29zKHBoaTApLFxuICAgICAgcm90YXRlID0gaGFtbWVyUmV0cm9hemltdXRoYWxSb3RhdGlvbihwaGkwKTtcblxuICByb3RhdGUuaW52ZXJ0ID0gaGFtbWVyUmV0cm9hemltdXRoYWxSb3RhdGlvbigtcGhpMCk7XG5cbiAgZnVuY3Rpb24gZm9yd2FyZChsYW1iZGEsIHBoaSkge1xuICAgIHZhciBwID0gcm90YXRlKGxhbWJkYSwgcGhpKTtcbiAgICBsYW1iZGEgPSBwWzBdLCBwaGkgPSBwWzFdO1xuICAgIHZhciBzaW5QaGkgPSBzaW4ocGhpKSxcbiAgICAgICAgY29zUGhpID0gY29zKHBoaSksXG4gICAgICAgIGNvc0xhbWJkYSA9IGNvcyhsYW1iZGEpLFxuICAgICAgICB6ID0gYWNvcyhzaW5QaGkwICogc2luUGhpICsgY29zUGhpMCAqIGNvc1BoaSAqIGNvc0xhbWJkYSksXG4gICAgICAgIHNpbnogPSBzaW4oeiksXG4gICAgICAgIEsgPSBhYnMoc2lueikgPiBlcHNpbG9uID8geiAvIHNpbnogOiAxO1xuICAgIHJldHVybiBbXG4gICAgICBLICogY29zUGhpMCAqIHNpbihsYW1iZGEpLFxuICAgICAgKGFicyhsYW1iZGEpID4gaGFsZlBpID8gSyA6IC1LKSAvLyByb3RhdGUgZm9yIGJhY2sgaGVtaXNwaGVyZVxuICAgICAgICAqIChzaW5QaGkwICogY29zUGhpIC0gY29zUGhpMCAqIHNpblBoaSAqIGNvc0xhbWJkYSlcbiAgICBdO1xuICB9XG5cbiAgZm9yd2FyZC5pbnZlcnQgPSBmdW5jdGlvbih4LCB5KSB7XG4gICAgdmFyIHJobyA9IHNxcnQoeCAqIHggKyB5ICogeSksXG4gICAgICAgIHNpbnogPSAtc2luKHJobyksXG4gICAgICAgIGNvc3ogPSBjb3MocmhvKSxcbiAgICAgICAgYSA9IHJobyAqIGNvc3osXG4gICAgICAgIGIgPSAteSAqIHNpbnosXG4gICAgICAgIGMgPSByaG8gKiBzaW5QaGkwLFxuICAgICAgICBkID0gc3FydChhICogYSArIGIgKiBiIC0gYyAqIGMpLFxuICAgICAgICBwaGkgPSBhdGFuMihhICogYyArIGIgKiBkLCBiICogYyAtIGEgKiBkKSxcbiAgICAgICAgbGFtYmRhID0gKHJobyA+IGhhbGZQaSA/IC0xIDogMSkgKiBhdGFuMih4ICogc2lueiwgcmhvICogY29zKHBoaSkgKiBjb3N6ICsgeSAqIHNpbihwaGkpICogc2lueik7XG4gICAgcmV0dXJuIHJvdGF0ZS5pbnZlcnQobGFtYmRhLCBwaGkpO1xuICB9O1xuXG4gIHJldHVybiBmb3J3YXJkO1xufVxuXG4vLyBMYXRpdHVkaW5hbCByb3RhdGlvbiBieSBwaGkwLlxuLy8gVGVtcG9yYXJ5IGhhY2sgdW50aWwgRDMgc3VwcG9ydHMgYXJiaXRyYXJ5IHNtYWxsLWNpcmNsZSBjbGlwcGluZyBvcmlnaW5zLlxuZnVuY3Rpb24gaGFtbWVyUmV0cm9hemltdXRoYWxSb3RhdGlvbihwaGkwKSB7XG4gIHZhciBzaW5QaGkwID0gc2luKHBoaTApLFxuICAgICAgY29zUGhpMCA9IGNvcyhwaGkwKTtcblxuICByZXR1cm4gZnVuY3Rpb24obGFtYmRhLCBwaGkpIHtcbiAgICB2YXIgY29zUGhpID0gY29zKHBoaSksXG4gICAgICAgIHggPSBjb3MobGFtYmRhKSAqIGNvc1BoaSxcbiAgICAgICAgeSA9IHNpbihsYW1iZGEpICogY29zUGhpLFxuICAgICAgICB6ID0gc2luKHBoaSk7XG4gICAgcmV0dXJuIFtcbiAgICAgIGF0YW4yKHksIHggKiBjb3NQaGkwIC0geiAqIHNpblBoaTApLFxuICAgICAgYXNpbih6ICogY29zUGhpMCArIHggKiBzaW5QaGkwKVxuICAgIF07XG4gIH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKCkge1xuICB2YXIgcGhpMCA9IDAsXG4gICAgICBtID0gcHJvamVjdGlvbk11dGF0b3IoaGFtbWVyUmV0cm9hemltdXRoYWxSYXcpLFxuICAgICAgcCA9IG0ocGhpMCksXG4gICAgICByb3RhdGVfID0gcC5yb3RhdGUsXG4gICAgICBzdHJlYW1fID0gcC5zdHJlYW0sXG4gICAgICBjaXJjbGUgPSBnZW9DaXJjbGUoKTtcblxuICBwLnBhcmFsbGVsID0gZnVuY3Rpb24oXykge1xuICAgIGlmICghYXJndW1lbnRzLmxlbmd0aCkgcmV0dXJuIHBoaTAgKiBkZWdyZWVzO1xuICAgIHZhciByID0gcC5yb3RhdGUoKTtcbiAgICByZXR1cm4gbShwaGkwID0gXyAqIHJhZGlhbnMpLnJvdGF0ZShyKTtcbiAgfTtcblxuICAvLyBUZW1wb3JhcnkgaGFjazsgc2VlIGhhbW1lclJldHJvYXppbXV0aGFsUm90YXRpb24uXG4gIHAucm90YXRlID0gZnVuY3Rpb24oXykge1xuICAgIGlmICghYXJndW1lbnRzLmxlbmd0aCkgcmV0dXJuIChfID0gcm90YXRlXy5jYWxsKHApLCBfWzFdICs9IHBoaTAgKiBkZWdyZWVzLCBfKTtcbiAgICByb3RhdGVfLmNhbGwocCwgW19bMF0sIF9bMV0gLSBwaGkwICogZGVncmVlc10pO1xuICAgIGNpcmNsZS5jZW50ZXIoWy1fWzBdLCAtX1sxXV0pO1xuICAgIHJldHVybiBwO1xuICB9O1xuXG4gIHAuc3RyZWFtID0gZnVuY3Rpb24oc3RyZWFtKSB7XG4gICAgc3RyZWFtID0gc3RyZWFtXyhzdHJlYW0pO1xuICAgIHN0cmVhbS5zcGhlcmUgPSBmdW5jdGlvbigpIHtcbiAgICAgIHN0cmVhbS5wb2x5Z29uU3RhcnQoKTtcbiAgICAgIHZhciBlcHNpbG9uID0gMWUtMixcbiAgICAgICAgICByaW5nID0gY2lyY2xlLnJhZGl1cyg5MCAtIGVwc2lsb24pKCkuY29vcmRpbmF0ZXNbMF0sXG4gICAgICAgICAgbiA9IHJpbmcubGVuZ3RoIC0gMSxcbiAgICAgICAgICBpID0gLTEsXG4gICAgICAgICAgcDtcbiAgICAgIHN0cmVhbS5saW5lU3RhcnQoKTtcbiAgICAgIHdoaWxlICgrK2kgPCBuKSBzdHJlYW0ucG9pbnQoKHAgPSByaW5nW2ldKVswXSwgcFsxXSk7XG4gICAgICBzdHJlYW0ubGluZUVuZCgpO1xuICAgICAgcmluZyA9IGNpcmNsZS5yYWRpdXMoOTAgKyBlcHNpbG9uKSgpLmNvb3JkaW5hdGVzWzBdO1xuICAgICAgbiA9IHJpbmcubGVuZ3RoIC0gMTtcbiAgICAgIHN0cmVhbS5saW5lU3RhcnQoKTtcbiAgICAgIHdoaWxlICgtLWkgPj0gMCkgc3RyZWFtLnBvaW50KChwID0gcmluZ1tpXSlbMF0sIHBbMV0pO1xuICAgICAgc3RyZWFtLmxpbmVFbmQoKTtcbiAgICAgIHN0cmVhbS5wb2x5Z29uRW5kKCk7XG4gICAgfTtcbiAgICByZXR1cm4gc3RyZWFtO1xuICB9O1xuXG4gIHJldHVybiBwXG4gICAgICAuc2NhbGUoNzkuNDE4NylcbiAgICAgIC5wYXJhbGxlbCg0NSlcbiAgICAgIC5jbGlwQW5nbGUoMTgwIC0gMWUtMyk7XG59XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9kMy1nZW8tcHJvamVjdGlvbi9zcmMvaGFtbWVyUmV0cm9hemltdXRoYWwuanNcbi8vIG1vZHVsZSBpZCA9IC4vbm9kZV9tb2R1bGVzL2QzLWdlby1wcm9qZWN0aW9uL3NyYy9oYW1tZXJSZXRyb2F6aW11dGhhbC5qc1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQge3JhbmdlfSBmcm9tIFwiZDMtYXJyYXlcIjtcbmltcG9ydCB7Z2VvU3RyZWFtLCBnZW9Qcm9qZWN0aW9uTXV0YXRvciBhcyBwcm9qZWN0aW9uTXV0YXRvcn0gZnJvbSBcImQzLWdlb1wiO1xuaW1wb3J0IHtjb2xsaWdub25SYXd9IGZyb20gXCIuL2NvbGxpZ25vblwiO1xuaW1wb3J0IHtjeWxpbmRyaWNhbEVxdWFsQXJlYVJhd30gZnJvbSBcIi4vY3lsaW5kcmljYWxFcXVhbEFyZWFcIjtcbmltcG9ydCB7YWJzLCBmbG9vciwgbWF4LCBtaW4sIHBpLCByYWRpYW5zLCBzcXJ0UGksIHRhdX0gZnJvbSBcIi4vbWF0aFwiO1xuXG52YXIgaGVhbHBpeFBhcmFsbGVsID0gNDEgKyA0OCAvIDM2ICsgMzcgLyAzNjAwLCAvLyBmb3IgSz0zOyBUT0RPIGF1dG9tYXRlXG4gICAgaGVhbHBpeExhbWJlcnQgPSBjeWxpbmRyaWNhbEVxdWFsQXJlYVJhdygwKTtcblxuZXhwb3J0IGZ1bmN0aW9uIGhlYWxwaXhSYXcoSCkge1xuICB2YXIgcGhpMCA9IGhlYWxwaXhQYXJhbGxlbCAqIHJhZGlhbnMsXG4gICAgICBkeCA9IGNvbGxpZ25vblJhdyhwaSwgcGhpMClbMF0gLSBjb2xsaWdub25SYXcoLXBpLCBwaGkwKVswXSxcbiAgICAgIHkwID0gaGVhbHBpeExhbWJlcnQoMCwgcGhpMClbMV0sXG4gICAgICB5MSA9IGNvbGxpZ25vblJhdygwLCBwaGkwKVsxXSxcbiAgICAgIGR5MSA9IHNxcnRQaSAtIHkxLFxuICAgICAgayA9IHRhdSAvIEgsXG4gICAgICB3ID0gNCAvIHRhdSxcbiAgICAgIGggPSB5MCArIChkeTEgKiBkeTEgKiA0KSAvIHRhdTtcblxuICBmdW5jdGlvbiBmb3J3YXJkKGxhbWJkYSwgcGhpKSB7XG4gICAgdmFyIHBvaW50LFxuICAgICAgICBwaGkyID0gYWJzKHBoaSk7XG4gICAgaWYgKHBoaTIgPiBwaGkwKSB7XG4gICAgICB2YXIgaSA9IG1pbihIIC0gMSwgbWF4KDAsIGZsb29yKChsYW1iZGEgKyBwaSkgLyBrKSkpO1xuICAgICAgbGFtYmRhICs9IHBpICogKEggLSAxKSAvIEggLSBpICogaztcbiAgICAgIHBvaW50ID0gY29sbGlnbm9uUmF3KGxhbWJkYSwgcGhpMik7XG4gICAgICBwb2ludFswXSA9IHBvaW50WzBdICogdGF1IC8gZHggLSB0YXUgKiAoSCAtIDEpIC8gKDIgKiBIKSArIGkgKiB0YXUgLyBIO1xuICAgICAgcG9pbnRbMV0gPSB5MCArIChwb2ludFsxXSAtIHkxKSAqIDQgKiBkeTEgLyB0YXU7XG4gICAgICBpZiAocGhpIDwgMCkgcG9pbnRbMV0gPSAtcG9pbnRbMV07XG4gICAgfSBlbHNlIHtcbiAgICAgIHBvaW50ID0gaGVhbHBpeExhbWJlcnQobGFtYmRhLCBwaGkpO1xuICAgIH1cbiAgICBwb2ludFswXSAqPSB3LCBwb2ludFsxXSAvPSBoO1xuICAgIHJldHVybiBwb2ludDtcbiAgfVxuXG4gIGZvcndhcmQuaW52ZXJ0ID0gZnVuY3Rpb24oeCwgeSkge1xuICAgIHggLz0gdywgeSAqPSBoO1xuICAgIHZhciB5MiA9IGFicyh5KTtcbiAgICBpZiAoeTIgPiB5MCkge1xuICAgICAgdmFyIGkgPSBtaW4oSCAtIDEsIG1heCgwLCBmbG9vcigoeCArIHBpKSAvIGspKSk7XG4gICAgICB4ID0gKHggKyBwaSAqIChIIC0gMSkgLyBIIC0gaSAqIGspICogZHggLyB0YXU7XG4gICAgICB2YXIgcG9pbnQgPSBjb2xsaWdub25SYXcuaW52ZXJ0KHgsIDAuMjUgKiAoeTIgLSB5MCkgKiB0YXUgLyBkeTEgKyB5MSk7XG4gICAgICBwb2ludFswXSAtPSBwaSAqIChIIC0gMSkgLyBIIC0gaSAqIGs7XG4gICAgICBpZiAoeSA8IDApIHBvaW50WzFdID0gLXBvaW50WzFdO1xuICAgICAgcmV0dXJuIHBvaW50O1xuICAgIH1cbiAgICByZXR1cm4gaGVhbHBpeExhbWJlcnQuaW52ZXJ0KHgsIHkpO1xuICB9O1xuXG4gIHJldHVybiBmb3J3YXJkO1xufVxuXG5mdW5jdGlvbiBzcGhlcmUoc3RlcCkge1xuICByZXR1cm4ge1xuICAgIHR5cGU6IFwiUG9seWdvblwiLFxuICAgIGNvb3JkaW5hdGVzOiBbXG4gICAgICByYW5nZSgtMTgwLCAxODAgKyBzdGVwIC8gMiwgc3RlcCkubWFwKGZ1bmN0aW9uKHgsIGkpIHsgcmV0dXJuIFt4LCBpICYgMSA/IDkwIC0gMWUtNiA6IGhlYWxwaXhQYXJhbGxlbF07IH0pXG4gICAgICAuY29uY2F0KHJhbmdlKDE4MCwgLTE4MCAtIHN0ZXAgLyAyLCAtc3RlcCkubWFwKGZ1bmN0aW9uKHgsIGkpIHsgcmV0dXJuIFt4LCBpICYgMSA/IC05MCArIDFlLTYgOiAtaGVhbHBpeFBhcmFsbGVsXTsgfSkpXG4gICAgXVxuICB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbigpIHtcbiAgdmFyIEggPSA0LFxuICAgICAgbSA9IHByb2plY3Rpb25NdXRhdG9yKGhlYWxwaXhSYXcpLFxuICAgICAgcCA9IG0oSCksXG4gICAgICBzdHJlYW1fID0gcC5zdHJlYW07XG5cbiAgcC5sb2JlcyA9IGZ1bmN0aW9uKF8pIHtcbiAgICByZXR1cm4gYXJndW1lbnRzLmxlbmd0aCA/IG0oSCA9ICtfKSA6IEg7XG4gIH07XG5cbiAgcC5zdHJlYW0gPSBmdW5jdGlvbihzdHJlYW0pIHtcbiAgICB2YXIgcm90YXRlID0gcC5yb3RhdGUoKSxcbiAgICAgICAgcm90YXRlU3RyZWFtID0gc3RyZWFtXyhzdHJlYW0pLFxuICAgICAgICBzcGhlcmVTdHJlYW0gPSAocC5yb3RhdGUoWzAsIDBdKSwgc3RyZWFtXyhzdHJlYW0pKTtcbiAgICBwLnJvdGF0ZShyb3RhdGUpO1xuICAgIHJvdGF0ZVN0cmVhbS5zcGhlcmUgPSBmdW5jdGlvbigpIHsgZ2VvU3RyZWFtKHNwaGVyZSgxODAgLyBIKSwgc3BoZXJlU3RyZWFtKTsgfTtcbiAgICByZXR1cm4gcm90YXRlU3RyZWFtO1xuICB9O1xuXG4gIHJldHVybiBwXG4gICAgICAuc2NhbGUoMjM5Ljc1KTtcbn1cblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2QzLWdlby1wcm9qZWN0aW9uL3NyYy9oZWFscGl4LmpzXG4vLyBtb2R1bGUgaWQgPSAuL25vZGVfbW9kdWxlcy9kMy1nZW8tcHJvamVjdGlvbi9zcmMvaGVhbHBpeC5qc1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQge2dlb1Byb2plY3Rpb25NdXRhdG9yIGFzIHByb2plY3Rpb25NdXRhdG9yfSBmcm9tIFwiZDMtZ2VvXCI7XG5pbXBvcnQge2FicywgYWNvcywgYXNpbiwgYXRhbjIsIGNvcywgZXBzaWxvbjIsIGhhbGZQaSwgcGksIHNpbiwgc3FydH0gZnJvbSBcIi4vbWF0aFwiO1xuXG5leHBvcnQgZnVuY3Rpb24gaGlsbFJhdyhLKSB7XG4gIHZhciBMID0gMSArIEssXG4gICAgICBzaW5CdCA9IHNpbigxIC8gTCksXG4gICAgICBCdCA9IGFzaW4oc2luQnQpLFxuICAgICAgQSA9IDIgKiBzcXJ0KHBpIC8gKEIgPSBwaSArIDQgKiBCdCAqIEwpKSxcbiAgICAgIEIsXG4gICAgICByaG8wID0gMC41ICogQSAqIChMICsgc3FydChLICogKDIgKyBLKSkpLFxuICAgICAgSzIgPSBLICogSyxcbiAgICAgIEwyID0gTCAqIEw7XG5cbiAgZnVuY3Rpb24gZm9yd2FyZChsYW1iZGEsIHBoaSkge1xuICAgIHZhciB0ID0gMSAtIHNpbihwaGkpLFxuICAgICAgICByaG8sXG4gICAgICAgIG9tZWdhO1xuICAgIGlmICh0ICYmIHQgPCAyKSB7XG4gICAgICB2YXIgdGhldGEgPSBoYWxmUGkgLSBwaGksIGkgPSAyNSwgZGVsdGE7XG4gICAgICBkbyB7XG4gICAgICAgIHZhciBzaW5UaGV0YSA9IHNpbih0aGV0YSksXG4gICAgICAgICAgICBjb3NUaGV0YSA9IGNvcyh0aGV0YSksXG4gICAgICAgICAgICBCdF9CdDEgPSBCdCArIGF0YW4yKHNpblRoZXRhLCBMIC0gY29zVGhldGEpLFxuICAgICAgICAgICAgQyA9IDEgKyBMMiAtIDIgKiBMICogY29zVGhldGE7XG4gICAgICAgIHRoZXRhIC09IGRlbHRhID0gKHRoZXRhIC0gSzIgKiBCdCAtIEwgKiBzaW5UaGV0YSArIEMgKiBCdF9CdDEgLTAuNSAqIHQgKiBCKSAvICgyICogTCAqIHNpblRoZXRhICogQnRfQnQxKTtcbiAgICAgIH0gd2hpbGUgKGFicyhkZWx0YSkgPiBlcHNpbG9uMiAmJiAtLWkgPiAwKTtcbiAgICAgIHJobyA9IEEgKiBzcXJ0KEMpO1xuICAgICAgb21lZ2EgPSBsYW1iZGEgKiBCdF9CdDEgLyBwaTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmhvID0gQSAqIChLICsgdCk7XG4gICAgICBvbWVnYSA9IGxhbWJkYSAqIEJ0IC8gcGk7XG4gICAgfVxuICAgIHJldHVybiBbXG4gICAgICByaG8gKiBzaW4ob21lZ2EpLFxuICAgICAgcmhvMCAtIHJobyAqIGNvcyhvbWVnYSlcbiAgICBdO1xuICB9XG5cbiAgZm9yd2FyZC5pbnZlcnQgPSBmdW5jdGlvbih4LCB5KSB7XG4gICAgdmFyIHJobzIgPSB4ICogeCArICh5IC09IHJobzApICogeSxcbiAgICAgICAgY29zVGhldGEgPSAoMSArIEwyIC0gcmhvMiAvIChBICogQSkpIC8gKDIgKiBMKSxcbiAgICAgICAgdGhldGEgPSBhY29zKGNvc1RoZXRhKSxcbiAgICAgICAgc2luVGhldGEgPSBzaW4odGhldGEpLFxuICAgICAgICBCdF9CdDEgPSBCdCArIGF0YW4yKHNpblRoZXRhLCBMIC0gY29zVGhldGEpO1xuICAgIHJldHVybiBbXG4gICAgICBhc2luKHggLyBzcXJ0KHJobzIpKSAqIHBpIC8gQnRfQnQxLFxuICAgICAgYXNpbigxIC0gMiAqICh0aGV0YSAtIEsyICogQnQgLSBMICogc2luVGhldGEgKyAoMSArIEwyIC0gMiAqIEwgKiBjb3NUaGV0YSkgKiBCdF9CdDEpIC8gQilcbiAgICBdO1xuICB9O1xuXG4gIHJldHVybiBmb3J3YXJkO1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbigpIHtcbiAgdmFyIEsgPSAxLFxuICAgICAgbSA9IHByb2plY3Rpb25NdXRhdG9yKGhpbGxSYXcpLFxuICAgICAgcCA9IG0oSyk7XG5cbiAgcC5yYXRpbyA9IGZ1bmN0aW9uKF8pIHtcbiAgICByZXR1cm4gYXJndW1lbnRzLmxlbmd0aCA/IG0oSyA9ICtfKSA6IEs7XG4gIH07XG5cbiAgcmV0dXJuIHBcbiAgICAgIC5zY2FsZSgxNjcuNzc0KVxuICAgICAgLmNlbnRlcihbMCwgMTguNjddKTtcbn1cblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2QzLWdlby1wcm9qZWN0aW9uL3NyYy9oaWxsLmpzXG4vLyBtb2R1bGUgaWQgPSAuL25vZGVfbW9kdWxlcy9kMy1nZW8tcHJvamVjdGlvbi9zcmMvaGlsbC5qc1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQge2dlb1Byb2plY3Rpb24gYXMgcHJvamVjdGlvbn0gZnJvbSBcImQzLWdlb1wiO1xuaW1wb3J0IHthYnN9IGZyb20gXCIuL21hdGhcIjtcbmltcG9ydCB7bW9sbHdlaWRlUmF3fSBmcm9tIFwiLi9tb2xsd2VpZGVcIjtcbmltcG9ydCB7c2ludXNvaWRhbFJhd30gZnJvbSBcIi4vc2ludXNvaWRhbFwiO1xuaW1wb3J0IHtzaW51TW9sbHdlaWRlUGhpLCBzaW51TW9sbHdlaWRlWX0gZnJvbSBcIi4vc2ludU1vbGx3ZWlkZVwiO1xuXG5leHBvcnQgZnVuY3Rpb24gaG9tb2xvc2luZVJhdyhsYW1iZGEsIHBoaSkge1xuICByZXR1cm4gYWJzKHBoaSkgPiBzaW51TW9sbHdlaWRlUGhpXG4gICAgICA/IChsYW1iZGEgPSBtb2xsd2VpZGVSYXcobGFtYmRhLCBwaGkpLCBsYW1iZGFbMV0gLT0gcGhpID4gMCA/IHNpbnVNb2xsd2VpZGVZIDogLXNpbnVNb2xsd2VpZGVZLCBsYW1iZGEpXG4gICAgICA6IHNpbnVzb2lkYWxSYXcobGFtYmRhLCBwaGkpO1xufVxuXG5ob21vbG9zaW5lUmF3LmludmVydCA9IGZ1bmN0aW9uKHgsIHkpIHtcbiAgcmV0dXJuIGFicyh5KSA+IHNpbnVNb2xsd2VpZGVQaGlcbiAgICAgID8gbW9sbHdlaWRlUmF3LmludmVydCh4LCB5ICsgKHkgPiAwID8gc2ludU1vbGx3ZWlkZVkgOiAtc2ludU1vbGx3ZWlkZVkpKVxuICAgICAgOiBzaW51c29pZGFsUmF3LmludmVydCh4LCB5KTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKCkge1xuICByZXR1cm4gcHJvamVjdGlvbihob21vbG9zaW5lUmF3KVxuICAgICAgLnNjYWxlKDE1Mi42Myk7XG59XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9kMy1nZW8tcHJvamVjdGlvbi9zcmMvaG9tb2xvc2luZS5qc1xuLy8gbW9kdWxlIGlkID0gLi9ub2RlX21vZHVsZXMvZDMtZ2VvLXByb2plY3Rpb24vc3JjL2hvbW9sb3NpbmUuanNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IHtib2dnc1Jhd30gZnJvbSBcIi4uL2JvZ2dzXCI7XG5pbXBvcnQgaW50ZXJydXB0IGZyb20gXCIuL2luZGV4XCI7XG5cbnZhciBsb2JlcyA9IFtbIC8vIG5vcnRoZXJuIGhlbWlzcGhlcmVcbiAgW1stMTgwLCAgIDBdLCBbLTEwMCwgIDkwXSwgWyAtNDAsICAgMF1dLFxuICBbWyAtNDAsICAgMF0sIFsgIDMwLCAgOTBdLCBbIDE4MCwgICAwXV1cbl0sIFsgLy8gc291dGhlcm4gaGVtaXNwaGVyZVxuICBbWy0xODAsICAgMF0sIFstMTYwLCAtOTBdLCBbLTEwMCwgICAwXV0sXG4gIFtbLTEwMCwgICAwXSwgWyAtNjAsIC05MF0sIFsgLTIwLCAgIDBdXSxcbiAgW1sgLTIwLCAgIDBdLCBbICAyMCwgLTkwXSwgWyAgODAsICAgMF1dLFxuICBbWyAgODAsICAgMF0sIFsgMTQwLCAtOTBdLCBbIDE4MCwgICAwXV1cbl1dO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbigpIHtcbiAgcmV0dXJuIGludGVycnVwdChib2dnc1JhdywgbG9iZXMpXG4gICAgICAuc2NhbGUoMTYwLjg1Nyk7XG59XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9kMy1nZW8tcHJvamVjdGlvbi9zcmMvaW50ZXJydXB0ZWQvYm9nZ3MuanNcbi8vIG1vZHVsZSBpZCA9IC4vbm9kZV9tb2R1bGVzL2QzLWdlby1wcm9qZWN0aW9uL3NyYy9pbnRlcnJ1cHRlZC9ib2dncy5qc1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQge2hvbW9sb3NpbmVSYXd9IGZyb20gXCIuLi9ob21vbG9zaW5lXCI7XG5pbXBvcnQgaW50ZXJydXB0IGZyb20gXCIuL2luZGV4XCI7XG5cbnZhciBsb2JlcyA9IFtbIC8vIG5vcnRoZXJuIGhlbWlzcGhlcmVcbiAgW1stMTgwLCAgIDBdLCBbLTEwMCwgIDkwXSwgWyAtNDAsICAgMF1dLFxuICBbWyAtNDAsICAgMF0sIFsgIDMwLCAgOTBdLCBbIDE4MCwgICAwXV1cbl0sIFsgLy8gc291dGhlcm4gaGVtaXNwaGVyZVxuICBbWy0xODAsICAgMF0sIFstMTYwLCAtOTBdLCBbLTEwMCwgICAwXV0sXG4gIFtbLTEwMCwgICAwXSwgWyAtNjAsIC05MF0sIFsgLTIwLCAgIDBdXSxcbiAgW1sgLTIwLCAgIDBdLCBbICAyMCwgLTkwXSwgWyAgODAsICAgMF1dLFxuICBbWyAgODAsICAgMF0sIFsgMTQwLCAtOTBdLCBbIDE4MCwgICAwXV1cbl1dO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbigpIHtcbiAgcmV0dXJuIGludGVycnVwdChob21vbG9zaW5lUmF3LCBsb2JlcylcbiAgICAgIC5zY2FsZSgxNTIuNjMpO1xufVxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvZDMtZ2VvLXByb2plY3Rpb24vc3JjL2ludGVycnVwdGVkL2hvbW9sb3NpbmUuanNcbi8vIG1vZHVsZSBpZCA9IC4vbm9kZV9tb2R1bGVzL2QzLWdlby1wcm9qZWN0aW9uL3NyYy9pbnRlcnJ1cHRlZC9ob21vbG9zaW5lLmpzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCB7bWVyZ2V9IGZyb20gXCJkMy1hcnJheVwiO1xuaW1wb3J0IHtnZW9TdHJlYW0sIGdlb1Byb2plY3Rpb24gYXMgcHJvamVjdGlvbn0gZnJvbSBcImQzLWdlb1wiO1xuaW1wb3J0IHthYnMsIGRlZ3JlZXMsIGVwc2lsb24sIHJhZGlhbnN9IGZyb20gXCIuLi9tYXRoXCI7XG5cbmZ1bmN0aW9uIHBvaW50RXF1YWwoYSwgYikge1xuICByZXR1cm4gYWJzKGFbMF0gLSBiWzBdKSA8IGVwc2lsb24gJiYgYWJzKGFbMV0gLSBiWzFdKSA8IGVwc2lsb247XG59XG5cbmZ1bmN0aW9uIGludGVycG9sYXRlTGluZShjb29yZGluYXRlcywgbSkge1xuICB2YXIgaSA9IC0xLFxuICAgICAgbiA9IGNvb3JkaW5hdGVzLmxlbmd0aCxcbiAgICAgIHAwID0gY29vcmRpbmF0ZXNbMF0sXG4gICAgICBwMSxcbiAgICAgIGR4LFxuICAgICAgZHksXG4gICAgICByZXNhbXBsZWQgPSBbXTtcbiAgd2hpbGUgKCsraSA8IG4pIHtcbiAgICBwMSA9IGNvb3JkaW5hdGVzW2ldO1xuICAgIGR4ID0gKHAxWzBdIC0gcDBbMF0pIC8gbTtcbiAgICBkeSA9IChwMVsxXSAtIHAwWzFdKSAvIG07XG4gICAgZm9yICh2YXIgaiA9IDA7IGogPCBtOyArK2opIHJlc2FtcGxlZC5wdXNoKFtwMFswXSArIGogKiBkeCwgcDBbMV0gKyBqICogZHldKTtcbiAgICBwMCA9IHAxO1xuICB9XG4gIHJlc2FtcGxlZC5wdXNoKHAxKTtcbiAgcmV0dXJuIHJlc2FtcGxlZDtcbn1cblxuZnVuY3Rpb24gaW50ZXJwb2xhdGVTcGhlcmUobG9iZXMpIHtcbiAgdmFyIGNvb3JkaW5hdGVzID0gW10sXG4gICAgICBsb2JlLFxuICAgICAgbGFtYmRhMCwgcGhpMCwgcGhpMSxcbiAgICAgIGxhbWJkYTIsIHBoaTIsXG4gICAgICBpLCBuID0gbG9iZXNbMF0ubGVuZ3RoO1xuXG4gIC8vIE5vcnRoZXJuIEhlbWlzcGhlcmVcbiAgZm9yIChpID0gMDsgaSA8IG47ICsraSkge1xuICAgIGxvYmUgPSBsb2Jlc1swXVtpXTtcbiAgICBsYW1iZGEwID0gbG9iZVswXVswXSwgcGhpMCA9IGxvYmVbMF1bMV0sIHBoaTEgPSBsb2JlWzFdWzFdO1xuICAgIGxhbWJkYTIgPSBsb2JlWzJdWzBdLCBwaGkyID0gbG9iZVsyXVsxXTtcbiAgICBjb29yZGluYXRlcy5wdXNoKGludGVycG9sYXRlTGluZShbXG4gICAgICBbbGFtYmRhMCArIGVwc2lsb24sIHBoaTAgKyBlcHNpbG9uXSxcbiAgICAgIFtsYW1iZGEwICsgZXBzaWxvbiwgcGhpMSAtIGVwc2lsb25dLFxuICAgICAgW2xhbWJkYTIgLSBlcHNpbG9uLCBwaGkxIC0gZXBzaWxvbl0sXG4gICAgICBbbGFtYmRhMiAtIGVwc2lsb24sIHBoaTIgKyBlcHNpbG9uXVxuICAgIF0sIDMwKSk7XG4gIH1cblxuICAvLyBTb3V0aGVybiBIZW1pc3BoZXJlXG4gIGZvciAoaSA9IGxvYmVzWzFdLmxlbmd0aCAtIDE7IGkgPj0gMDsgLS1pKSB7XG4gICAgbG9iZSA9IGxvYmVzWzFdW2ldO1xuICAgIGxhbWJkYTAgPSBsb2JlWzBdWzBdLCBwaGkwID0gbG9iZVswXVsxXSwgcGhpMSA9IGxvYmVbMV1bMV07XG4gICAgbGFtYmRhMiA9IGxvYmVbMl1bMF0sIHBoaTIgPSBsb2JlWzJdWzFdO1xuICAgIGNvb3JkaW5hdGVzLnB1c2goaW50ZXJwb2xhdGVMaW5lKFtcbiAgICAgIFtsYW1iZGEyIC0gZXBzaWxvbiwgcGhpMiAtIGVwc2lsb25dLFxuICAgICAgW2xhbWJkYTIgLSBlcHNpbG9uLCBwaGkxICsgZXBzaWxvbl0sXG4gICAgICBbbGFtYmRhMCArIGVwc2lsb24sIHBoaTEgKyBlcHNpbG9uXSxcbiAgICAgIFtsYW1iZGEwICsgZXBzaWxvbiwgcGhpMCAtIGVwc2lsb25dXG4gICAgXSwgMzApKTtcbiAgfVxuXG4gIHJldHVybiB7XG4gICAgdHlwZTogXCJQb2x5Z29uXCIsXG4gICAgY29vcmRpbmF0ZXM6IFttZXJnZShjb29yZGluYXRlcyldXG4gIH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKHByb2plY3QsIGxvYmVzKSB7XG4gIHZhciBzcGhlcmUsIGJvdW5kcztcblxuICBmdW5jdGlvbiBmb3J3YXJkKGxhbWJkYSwgcGhpKSB7XG4gICAgdmFyIHNpZ24gPSBwaGkgPCAwID8gLTEgOiArMSwgbG9iZSA9IGxvYmVzWysocGhpIDwgMCldO1xuICAgIGZvciAodmFyIGkgPSAwLCBuID0gbG9iZS5sZW5ndGggLSAxOyBpIDwgbiAmJiBsYW1iZGEgPiBsb2JlW2ldWzJdWzBdOyArK2kpO1xuICAgIHZhciBwID0gcHJvamVjdChsYW1iZGEgLSBsb2JlW2ldWzFdWzBdLCBwaGkpO1xuICAgIHBbMF0gKz0gcHJvamVjdChsb2JlW2ldWzFdWzBdLCBzaWduICogcGhpID4gc2lnbiAqIGxvYmVbaV1bMF1bMV0gPyBsb2JlW2ldWzBdWzFdIDogcGhpKVswXTtcbiAgICByZXR1cm4gcDtcbiAgfVxuXG4gIC8vIEFzc3VtZXMgbXV0dWFsbHkgZXhjbHVzaXZlIGJvdW5kaW5nIGJveGVzIGZvciBsb2Jlcy5cbiAgaWYgKHByb2plY3QuaW52ZXJ0KSBmb3J3YXJkLmludmVydCA9IGZ1bmN0aW9uKHgsIHkpIHtcbiAgICB2YXIgYm91bmQgPSBib3VuZHNbKyh5IDwgMCldLCBsb2JlID0gbG9iZXNbKyh5IDwgMCldO1xuICAgIGZvciAodmFyIGkgPSAwLCBuID0gYm91bmQubGVuZ3RoOyBpIDwgbjsgKytpKSB7XG4gICAgICB2YXIgYiA9IGJvdW5kW2ldO1xuICAgICAgaWYgKGJbMF1bMF0gPD0geCAmJiB4IDwgYlsxXVswXSAmJiBiWzBdWzFdIDw9IHkgJiYgeSA8IGJbMV1bMV0pIHtcbiAgICAgICAgdmFyIHAgPSBwcm9qZWN0LmludmVydCh4IC0gcHJvamVjdChsb2JlW2ldWzFdWzBdLCAwKVswXSwgeSk7XG4gICAgICAgIHBbMF0gKz0gbG9iZVtpXVsxXVswXTtcbiAgICAgICAgcmV0dXJuIHBvaW50RXF1YWwoZm9yd2FyZChwWzBdLCBwWzFdKSwgW3gsIHldKSA/IHAgOiBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgfTtcblxuICB2YXIgcCA9IHByb2plY3Rpb24oZm9yd2FyZCksXG4gICAgICBzdHJlYW1fID0gcC5zdHJlYW07XG5cbiAgcC5zdHJlYW0gPSBmdW5jdGlvbihzdHJlYW0pIHtcbiAgICB2YXIgcm90YXRlID0gcC5yb3RhdGUoKSxcbiAgICAgICAgcm90YXRlU3RyZWFtID0gc3RyZWFtXyhzdHJlYW0pLFxuICAgICAgICBzcGhlcmVTdHJlYW0gPSAocC5yb3RhdGUoWzAsIDBdKSwgc3RyZWFtXyhzdHJlYW0pKTtcbiAgICBwLnJvdGF0ZShyb3RhdGUpO1xuICAgIHJvdGF0ZVN0cmVhbS5zcGhlcmUgPSBmdW5jdGlvbigpIHsgZ2VvU3RyZWFtKHNwaGVyZSwgc3BoZXJlU3RyZWFtKTsgfTtcbiAgICByZXR1cm4gcm90YXRlU3RyZWFtO1xuICB9O1xuICBcbiAgcC5sb2JlcyA9IGZ1bmN0aW9uKF8pIHtcbiAgICBpZiAoIWFyZ3VtZW50cy5sZW5ndGgpIHJldHVybiBsb2Jlcy5tYXAoZnVuY3Rpb24obG9iZSkge1xuICAgICAgcmV0dXJuIGxvYmUubWFwKGZ1bmN0aW9uKGwpIHtcbiAgICAgICAgcmV0dXJuIFtcbiAgICAgICAgICBbbFswXVswXSAqIGRlZ3JlZXMsIGxbMF1bMV0gKiBkZWdyZWVzXSxcbiAgICAgICAgICBbbFsxXVswXSAqIGRlZ3JlZXMsIGxbMV1bMV0gKiBkZWdyZWVzXSxcbiAgICAgICAgICBbbFsyXVswXSAqIGRlZ3JlZXMsIGxbMl1bMV0gKiBkZWdyZWVzXVxuICAgICAgICBdO1xuICAgICAgfSk7XG4gICAgfSk7XG5cbiAgICBzcGhlcmUgPSBpbnRlcnBvbGF0ZVNwaGVyZShfKTtcblxuICAgIGxvYmVzID0gXy5tYXAoZnVuY3Rpb24obG9iZSkge1xuICAgICAgcmV0dXJuIGxvYmUubWFwKGZ1bmN0aW9uKGwpIHtcbiAgICAgICAgcmV0dXJuIFtcbiAgICAgICAgICBbbFswXVswXSAqIHJhZGlhbnMsIGxbMF1bMV0gKiByYWRpYW5zXSxcbiAgICAgICAgICBbbFsxXVswXSAqIHJhZGlhbnMsIGxbMV1bMV0gKiByYWRpYW5zXSxcbiAgICAgICAgICBbbFsyXVswXSAqIHJhZGlhbnMsIGxbMl1bMV0gKiByYWRpYW5zXVxuICAgICAgICBdO1xuICAgICAgfSk7XG4gICAgfSk7XG5cbiAgICBib3VuZHMgPSBsb2Jlcy5tYXAoZnVuY3Rpb24obG9iZSkge1xuICAgICAgcmV0dXJuIGxvYmUubWFwKGZ1bmN0aW9uKGwpIHtcbiAgICAgICAgdmFyIHgwID0gcHJvamVjdChsWzBdWzBdLCBsWzBdWzFdKVswXSxcbiAgICAgICAgICAgIHgxID0gcHJvamVjdChsWzJdWzBdLCBsWzJdWzFdKVswXSxcbiAgICAgICAgICAgIHkwID0gcHJvamVjdChsWzFdWzBdLCBsWzBdWzFdKVsxXSxcbiAgICAgICAgICAgIHkxID0gcHJvamVjdChsWzFdWzBdLCBsWzFdWzFdKVsxXSxcbiAgICAgICAgICAgIHQ7XG4gICAgICAgIGlmICh5MCA+IHkxKSB0ID0geTAsIHkwID0geTEsIHkxID0gdDtcbiAgICAgICAgcmV0dXJuIFtbeDAsIHkwXSwgW3gxLCB5MV1dO1xuICAgICAgfSk7XG4gICAgfSk7XG5cbiAgICByZXR1cm4gcDtcbiAgfTtcblxuICBpZiAobG9iZXMgIT0gbnVsbCkgcC5sb2Jlcyhsb2Jlcyk7XG5cbiAgcmV0dXJuIHA7XG59XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9kMy1nZW8tcHJvamVjdGlvbi9zcmMvaW50ZXJydXB0ZWQvaW5kZXguanNcbi8vIG1vZHVsZSBpZCA9IC4vbm9kZV9tb2R1bGVzL2QzLWdlby1wcm9qZWN0aW9uL3NyYy9pbnRlcnJ1cHRlZC9pbmRleC5qc1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQge21vbGx3ZWlkZVJhd30gZnJvbSBcIi4uL21vbGx3ZWlkZVwiO1xuaW1wb3J0IGludGVycnVwdCBmcm9tIFwiLi9pbmRleFwiO1xuXG52YXIgbG9iZXMgPSBbWyAvLyBub3J0aGVybiBoZW1pc3BoZXJlXG4gIFtbLTE4MCwgICAwXSwgWy0xMDAsICA5MF0sIFsgLTQwLCAgIDBdXSxcbiAgW1sgLTQwLCAgIDBdLCBbICAzMCwgIDkwXSwgWyAxODAsICAgMF1dXG5dLCBbIC8vIHNvdXRoZXJuIGhlbWlzcGhlcmVcbiAgW1stMTgwLCAgIDBdLCBbLTE2MCwgLTkwXSwgWy0xMDAsICAgMF1dLFxuICBbWy0xMDAsICAgMF0sIFsgLTYwLCAtOTBdLCBbIC0yMCwgICAwXV0sXG4gIFtbIC0yMCwgICAwXSwgWyAgMjAsIC05MF0sIFsgIDgwLCAgIDBdXSxcbiAgW1sgIDgwLCAgIDBdLCBbIDE0MCwgLTkwXSwgWyAxODAsICAgMF1dXG5dXTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oKSB7XG4gIHJldHVybiBpbnRlcnJ1cHQobW9sbHdlaWRlUmF3LCBsb2JlcylcbiAgICAgIC5zY2FsZSgxNjkuNTI5KTtcbn1cblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2QzLWdlby1wcm9qZWN0aW9uL3NyYy9pbnRlcnJ1cHRlZC9tb2xsd2VpZGUuanNcbi8vIG1vZHVsZSBpZCA9IC4vbm9kZV9tb2R1bGVzL2QzLWdlby1wcm9qZWN0aW9uL3NyYy9pbnRlcnJ1cHRlZC9tb2xsd2VpZGUuanNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IHttb2xsd2VpZGVSYXd9IGZyb20gXCIuLi9tb2xsd2VpZGVcIjtcbmltcG9ydCBpbnRlcnJ1cHQgZnJvbSBcIi4vaW5kZXhcIjtcblxudmFyIGxvYmVzID0gW1sgLy8gbm9ydGhlcm4gaGVtaXNwaGVyZVxuICBbWy0xODAsICAgMF0sIFsgLTkwLCAgOTBdLCBbICAgMCwgICAwXV0sXG4gIFtbICAgMCwgICAwXSwgWyAgOTAsICA5MF0sIFsgMTgwLCAgIDBdXVxuXSwgWyAvLyBzb3V0aGVybiBoZW1pc3BoZXJlXG4gIFtbLTE4MCwgICAwXSwgWyAtOTAsIC05MF0sIFsgICAwLCAgIDBdXSxcbiAgW1sgICAwLCAgIDBdLCBbICA5MCwgLTkwXSwgWyAxODAsICAgMF1dXG5dXTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oKSB7XG4gIHJldHVybiBpbnRlcnJ1cHQobW9sbHdlaWRlUmF3LCBsb2JlcylcbiAgICAgIC5zY2FsZSgxNjkuNTI5KVxuICAgICAgLnJvdGF0ZShbMjAsIDBdKTtcbn1cblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2QzLWdlby1wcm9qZWN0aW9uL3NyYy9pbnRlcnJ1cHRlZC9tb2xsd2VpZGVIZW1pc3BoZXJlcy5qc1xuLy8gbW9kdWxlIGlkID0gLi9ub2RlX21vZHVsZXMvZDMtZ2VvLXByb2plY3Rpb24vc3JjL2ludGVycnVwdGVkL21vbGx3ZWlkZUhlbWlzcGhlcmVzLmpzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCB7c2ludU1vbGx3ZWlkZVJhd30gZnJvbSBcIi4uL3NpbnVNb2xsd2VpZGVcIjtcbmltcG9ydCBpbnRlcnJ1cHQgZnJvbSBcIi4vaW5kZXhcIjtcblxudmFyIGxvYmVzID0gW1sgLy8gbm9ydGhlcm4gaGVtaXNwaGVyZVxuICBbWy0xODAsICAzNV0sIFsgLTMwLCAgOTBdLCBbICAgMCwgIDM1XV0sXG4gIFtbICAgMCwgIDM1XSwgWyAgMzAsICA5MF0sIFsgMTgwLCAgMzVdXVxuXSwgWyAvLyBzb3V0aGVybiBoZW1pc3BoZXJlXG4gIFtbLTE4MCwgLTEwXSwgWy0xMDIsIC05MF0sIFsgLTY1LCAtMTBdXSxcbiAgW1sgLTY1LCAtMTBdLCBbICAgNSwgLTkwXSwgWyAgNzcsIC0xMF1dLFxuICBbWyAgNzcsIC0xMF0sIFsgMTAzLCAtOTBdLCBbIDE4MCwgLTEwXV1cbl1dO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbigpIHtcbiAgcmV0dXJuIGludGVycnVwdChzaW51TW9sbHdlaWRlUmF3LCBsb2JlcylcbiAgICAgIC5yb3RhdGUoWy0yMCwgLTU1XSlcbiAgICAgIC5zY2FsZSgxNjQuMjYzKVxuICAgICAgLmNlbnRlcihbMCwgLTUuNDAzNl0pO1xufVxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvZDMtZ2VvLXByb2plY3Rpb24vc3JjL2ludGVycnVwdGVkL3NpbnVNb2xsd2VpZGUuanNcbi8vIG1vZHVsZSBpZCA9IC4vbm9kZV9tb2R1bGVzL2QzLWdlby1wcm9qZWN0aW9uL3NyYy9pbnRlcnJ1cHRlZC9zaW51TW9sbHdlaWRlLmpzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCB7c2ludXNvaWRhbFJhd30gZnJvbSBcIi4uL3NpbnVzb2lkYWxcIjtcbmltcG9ydCBpbnRlcnJ1cHQgZnJvbSBcIi4vaW5kZXhcIjtcblxudmFyIGxvYmVzID0gW1sgLy8gbm9ydGhlcm4gaGVtaXNwaGVyZVxuICBbWy0xODAsICAgMF0sIFstMTEwLCAgOTBdLCBbIC00MCwgICAwXV0sXG4gIFtbIC00MCwgICAwXSwgWyAgIDAsICA5MF0sIFsgIDQwLCAgIDBdXSxcbiAgW1sgIDQwLCAgIDBdLCBbIDExMCwgIDkwXSwgWyAxODAsICAgMF1dXG5dLCBbIC8vIHNvdXRoZXJuIGhlbWlzcGhlcmVcbiAgW1stMTgwLCAgIDBdLCBbLTExMCwgLTkwXSwgWyAtNDAsICAgMF1dLFxuICBbWyAtNDAsICAgMF0sIFsgICAwLCAtOTBdLCBbICA0MCwgICAwXV0sXG4gIFtbICA0MCwgICAwXSwgWyAxMTAsIC05MF0sIFsgMTgwLCAgIDBdXVxuXV07XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKCkge1xuICByZXR1cm4gaW50ZXJydXB0KHNpbnVzb2lkYWxSYXcsIGxvYmVzKVxuICAgICAgLnNjYWxlKDE1Mi42MylcbiAgICAgIC5yb3RhdGUoWy0yMCwgMF0pO1xufVxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvZDMtZ2VvLXByb2plY3Rpb24vc3JjL2ludGVycnVwdGVkL3NpbnVzb2lkYWwuanNcbi8vIG1vZHVsZSBpZCA9IC4vbm9kZV9tb2R1bGVzL2QzLWdlby1wcm9qZWN0aW9uL3NyYy9pbnRlcnJ1cHRlZC9zaW51c29pZGFsLmpzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCB7Z2VvUHJvamVjdGlvbiBhcyBwcm9qZWN0aW9ufSBmcm9tIFwiZDMtZ2VvXCI7XG5pbXBvcnQge3BpLCBzcXJ0LCB0YXV9IGZyb20gXCIuL21hdGhcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIGthdnJheXNraXk3UmF3KGxhbWJkYSwgcGhpKSB7XG4gIHJldHVybiBbMyAvIHRhdSAqIGxhbWJkYSAqIHNxcnQocGkgKiBwaSAvIDMgLSBwaGkgKiBwaGkpLCBwaGldO1xufVxuXG5rYXZyYXlza2l5N1Jhdy5pbnZlcnQgPSBmdW5jdGlvbih4LCB5KSB7XG4gIHJldHVybiBbdGF1IC8gMyAqIHggLyBzcXJ0KHBpICogcGkgLyAzIC0geSAqIHkpLCB5XTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKCkge1xuICByZXR1cm4gcHJvamVjdGlvbihrYXZyYXlza2l5N1JhdylcbiAgICAgIC5zY2FsZSgxNTguODM3KTtcbn1cblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2QzLWdlby1wcm9qZWN0aW9uL3NyYy9rYXZyYXlza2l5Ny5qc1xuLy8gbW9kdWxlIGlkID0gLi9ub2RlX21vZHVsZXMvZDMtZ2VvLXByb2plY3Rpb24vc3JjL2thdnJheXNraXk3LmpzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCB7Z2VvUHJvamVjdGlvbk11dGF0b3IgYXMgcHJvamVjdGlvbk11dGF0b3J9IGZyb20gXCJkMy1nZW9cIjtcbmltcG9ydCB7YWJzLCBhc2luLCBhdGFuMiwgY29zLCBlcHNpbG9uLCBoYWxmUGksIHBvdywgc2lnbiwgc2lufSBmcm9tIFwiLi9tYXRoXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBsYWdyYW5nZVJhdyhuKSB7XG5cbiAgZnVuY3Rpb24gZm9yd2FyZChsYW1iZGEsIHBoaSkge1xuICAgIGlmIChhYnMoYWJzKHBoaSkgLSBoYWxmUGkpIDwgZXBzaWxvbikgcmV0dXJuIFswLCBwaGkgPCAwID8gLTIgOiAyXTtcbiAgICB2YXIgc2luUGhpID0gc2luKHBoaSksXG4gICAgICAgIHYgPSBwb3coKDEgKyBzaW5QaGkpIC8gKDEgLSBzaW5QaGkpLCBuIC8gMiksXG4gICAgICAgIGMgPSAwLjUgKiAodiArIDEgLyB2KSArIGNvcyhsYW1iZGEgKj0gbik7XG4gICAgcmV0dXJuIFtcbiAgICAgIDIgKiBzaW4obGFtYmRhKSAvIGMsXG4gICAgICAodiAtIDEgLyB2KSAvIGNcbiAgICBdO1xuICB9XG5cbiAgZm9yd2FyZC5pbnZlcnQgPSBmdW5jdGlvbih4LCB5KSB7XG4gICAgdmFyIHkwID0gYWJzKHkpO1xuICAgIGlmIChhYnMoeTAgLSAyKSA8IGVwc2lsb24pIHJldHVybiB4ID8gbnVsbCA6IFswLCBzaWduKHkpICogaGFsZlBpXTtcbiAgICBpZiAoeTAgPiAyKSByZXR1cm4gbnVsbDtcblxuICAgIHggLz0gMiwgeSAvPSAyO1xuICAgIHZhciB4MiA9IHggKiB4LFxuICAgICAgICB5MiA9IHkgKiB5LFxuICAgICAgICB0ID0gMiAqIHkgLyAoMSArIHgyICsgeTIpOyAvLyB0YW5oKG5QaGkpXG4gICAgdCA9IHBvdygoMSArIHQpIC8gKDEgLSB0KSwgMSAvIG4pO1xuICAgIHJldHVybiBbXG4gICAgICBhdGFuMigyICogeCwgMSAtIHgyIC0geTIpIC8gbixcbiAgICAgIGFzaW4oKHQgLSAxKSAvICh0ICsgMSkpXG4gICAgXTtcbiAgfTtcblxuICByZXR1cm4gZm9yd2FyZDtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oKSB7XG4gIHZhciBuID0gMC41LFxuICAgICAgbSA9IHByb2plY3Rpb25NdXRhdG9yKGxhZ3JhbmdlUmF3KSxcbiAgICAgIHAgPSBtKG4pO1xuXG4gIHAuc3BhY2luZyA9IGZ1bmN0aW9uKF8pIHtcbiAgICByZXR1cm4gYXJndW1lbnRzLmxlbmd0aCA/IG0obiA9ICtfKSA6IG47XG4gIH07XG5cbiAgcmV0dXJuIHBcbiAgICAgIC5zY2FsZSgxMjQuNzUpO1xufVxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvZDMtZ2VvLXByb2plY3Rpb24vc3JjL2xhZ3JhbmdlLmpzXG4vLyBtb2R1bGUgaWQgPSAuL25vZGVfbW9kdWxlcy9kMy1nZW8tcHJvamVjdGlvbi9zcmMvbGFncmFuZ2UuanNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IHtnZW9Qcm9qZWN0aW9uIGFzIHByb2plY3Rpb259IGZyb20gXCJkMy1nZW9cIjtcbmltcG9ydCB7YWJzLCBhY29zLCBjb3MsIGVwc2lsb24sIGhhbGZQaSwgc2luLCBwaSwgc3FydCwgc3FydDJ9IGZyb20gXCIuL21hdGhcIjtcblxudmFyIHBpX3NxcnQyID0gcGkgLyBzcXJ0MjtcblxuZXhwb3J0IGZ1bmN0aW9uIGxhcnJpdmVlUmF3KGxhbWJkYSwgcGhpKSB7XG4gIHJldHVybiBbXG4gICAgbGFtYmRhICogKDEgKyBzcXJ0KGNvcyhwaGkpKSkgLyAyLFxuICAgIHBoaSAvIChjb3MocGhpIC8gMikgKiBjb3MobGFtYmRhIC8gNikpXG4gIF07XG59XG5cbmxhcnJpdmVlUmF3LmludmVydCA9IGZ1bmN0aW9uKHgsIHkpIHtcbiAgdmFyIHgwID0gYWJzKHgpLFxuICAgICAgeTAgPSBhYnMoeSksXG4gICAgICBsYW1iZGEgPSBlcHNpbG9uLFxuICAgICAgcGhpID0gaGFsZlBpO1xuICBpZiAoeTAgPCBwaV9zcXJ0MikgcGhpICo9IHkwIC8gcGlfc3FydDI7XG4gIGVsc2UgbGFtYmRhICs9IDYgKiBhY29zKHBpX3NxcnQyIC8geTApO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IDI1OyBpKyspIHtcbiAgICB2YXIgc2luUGhpID0gc2luKHBoaSksXG4gICAgICAgIHNxcnRjb3NQaGkgPSBzcXJ0KGNvcyhwaGkpKSxcbiAgICAgICAgc2luUGhpXzIgPSBzaW4ocGhpIC8gMiksXG4gICAgICAgIGNvc1BoaV8yID0gY29zKHBoaSAvIDIpLFxuICAgICAgICBzaW5MYW1iZGFfNiA9IHNpbihsYW1iZGEgLyA2KSxcbiAgICAgICAgY29zTGFtYmRhXzYgPSBjb3MobGFtYmRhIC8gNiksXG4gICAgICAgIGYwID0gMC41ICogbGFtYmRhICogKDEgKyBzcXJ0Y29zUGhpKSAtIHgwLFxuICAgICAgICBmMSA9IHBoaSAvIChjb3NQaGlfMiAqIGNvc0xhbWJkYV82KSAtIHkwLFxuICAgICAgICBkZjBkUGhpID0gc3FydGNvc1BoaSA/IC0wLjI1ICogbGFtYmRhICogc2luUGhpIC8gc3FydGNvc1BoaSA6IDAsXG4gICAgICAgIGRmMGRMYW1iZGEgPSAwLjUgKiAoMSArIHNxcnRjb3NQaGkpLFxuICAgICAgICBkZjFkUGhpID0gKDEgKzAuNSAqIHBoaSAqIHNpblBoaV8yIC8gY29zUGhpXzIpIC8gKGNvc1BoaV8yICogY29zTGFtYmRhXzYpLFxuICAgICAgICBkZjFkTGFtYmRhID0gKHBoaSAvIGNvc1BoaV8yKSAqIChzaW5MYW1iZGFfNiAvIDYpIC8gKGNvc0xhbWJkYV82ICogY29zTGFtYmRhXzYpLFxuICAgICAgICBkZW5vbSA9IGRmMGRQaGkgKiBkZjFkTGFtYmRhIC0gZGYxZFBoaSAqIGRmMGRMYW1iZGEsXG4gICAgICAgIGRQaGkgPSAoZjAgKiBkZjFkTGFtYmRhIC0gZjEgKiBkZjBkTGFtYmRhKSAvIGRlbm9tLFxuICAgICAgICBkTGFtYmRhID0gKGYxICogZGYwZFBoaSAtIGYwICogZGYxZFBoaSkgLyBkZW5vbTtcbiAgICBwaGkgLT0gZFBoaTtcbiAgICBsYW1iZGEgLT0gZExhbWJkYTtcbiAgICBpZiAoYWJzKGRQaGkpIDwgZXBzaWxvbiAmJiBhYnMoZExhbWJkYSkgPCBlcHNpbG9uKSBicmVhaztcbiAgfVxuICByZXR1cm4gW3ggPCAwID8gLWxhbWJkYSA6IGxhbWJkYSwgeSA8IDAgPyAtcGhpIDogcGhpXTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKCkge1xuICByZXR1cm4gcHJvamVjdGlvbihsYXJyaXZlZVJhdylcbiAgICAgIC5zY2FsZSg5Ny4yNjcyKTtcbn1cblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2QzLWdlby1wcm9qZWN0aW9uL3NyYy9sYXJyaXZlZS5qc1xuLy8gbW9kdWxlIGlkID0gLi9ub2RlX21vZHVsZXMvZDMtZ2VvLXByb2plY3Rpb24vc3JjL2xhcnJpdmVlLmpzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCB7Z2VvUHJvamVjdGlvbiBhcyBwcm9qZWN0aW9ufSBmcm9tIFwiZDMtZ2VvXCI7XG5pbXBvcnQge2FicywgZXBzaWxvbiwgcGksIHNpZ259IGZyb20gXCIuL21hdGhcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIGxhc2tvd3NraVJhdyhsYW1iZGEsIHBoaSkge1xuICB2YXIgbGFtYmRhMiA9IGxhbWJkYSAqIGxhbWJkYSwgcGhpMiA9IHBoaSAqIHBoaTtcbiAgcmV0dXJuIFtcbiAgICBsYW1iZGEgKiAoMC45NzU1MzQgKyBwaGkyICogKC0wLjExOTE2MSArIGxhbWJkYTIgKiAtMC4wMTQzMDU5ICsgcGhpMiAqIC0wLjA1NDcwMDkpKSxcbiAgICBwaGkgKiAoMS4wMDM4NCArIGxhbWJkYTIgKiAoMC4wODAyODk0ICsgcGhpMiAqIC0wLjAyODU1ICsgbGFtYmRhMiAqIDAuMDAwMTk5MDI1KSArIHBoaTIgKiAoMC4wOTk4OTA5ICsgcGhpMiAqIC0wLjA0OTEwMzIpKVxuICBdO1xufVxuXG5sYXNrb3dza2lSYXcuaW52ZXJ0ID0gZnVuY3Rpb24oeCwgeSkge1xuICB2YXIgbGFtYmRhID0gc2lnbih4KSAqIHBpLFxuICAgICAgcGhpID0geSAvIDIsXG4gICAgICBpID0gNTA7XG4gIGRvIHtcbiAgICB2YXIgbGFtYmRhMiA9IGxhbWJkYSAqIGxhbWJkYSxcbiAgICAgICAgcGhpMiA9IHBoaSAqIHBoaSxcbiAgICAgICAgbGFtYmRhUGhpID0gbGFtYmRhICogcGhpLFxuICAgICAgICBmeCA9IGxhbWJkYSAqICgwLjk3NTUzNCArIHBoaTIgKiAoLTAuMTE5MTYxICsgbGFtYmRhMiAqIC0wLjAxNDMwNTkgKyBwaGkyICogLTAuMDU0NzAwOSkpIC0geCxcbiAgICAgICAgZnkgPSBwaGkgKiAoMS4wMDM4NCArIGxhbWJkYTIgKiAoMC4wODAyODk0ICsgcGhpMiAqIC0wLjAyODU1ICsgbGFtYmRhMiAqIDAuMDAwMTk5MDI1KSArIHBoaTIgKiAoMC4wOTk4OTA5ICsgcGhpMiAqIC0wLjA0OTEwMzIpKSAtIHksXG4gICAgICAgIGRlbHRheERlbHRhTGFtYmRhID0gMC45NzU1MzQgLSBwaGkyICogKDAuMTE5MTYxICsgMyAqIGxhbWJkYTIgKiAwLjAxNDMwNTkgKyBwaGkyICogMC4wNTQ3MDA5KSxcbiAgICAgICAgZGVsdGF4RGVsdGFQaGkgPSAtbGFtYmRhUGhpICogKDIgKiAwLjExOTE2MSArIDQgKiAwLjA1NDcwMDkgKiBwaGkyICsgMiAqIDAuMDE0MzA1OSAqIGxhbWJkYTIpLFxuICAgICAgICBkZWx0YXlEZWx0YUxhbWJkYSA9IGxhbWJkYVBoaSAqICgyICogMC4wODAyODk0ICsgNCAqIDAuMDAwMTk5MDI1ICogbGFtYmRhMiArIDIgKiAtMC4wMjg1NSAqIHBoaTIpLFxuICAgICAgICBkZWx0YXlEZWx0YVBoaSA9IDEuMDAzODQgKyBsYW1iZGEyICogKDAuMDgwMjg5NCArIDAuMDAwMTk5MDI1ICogbGFtYmRhMikgKyBwaGkyICogKDMgKiAoMC4wOTk4OTA5IC0gMC4wMjg1NSAqIGxhbWJkYTIpIC0gNSAqIDAuMDQ5MTAzMiAqIHBoaTIpLFxuICAgICAgICBkZW5vbWluYXRvciA9IGRlbHRheERlbHRhUGhpICogZGVsdGF5RGVsdGFMYW1iZGEgLSBkZWx0YXlEZWx0YVBoaSAqIGRlbHRheERlbHRhTGFtYmRhLFxuICAgICAgICBkZWx0YUxhbWJkYSA9IChmeSAqIGRlbHRheERlbHRhUGhpIC0gZnggKiBkZWx0YXlEZWx0YVBoaSkgLyBkZW5vbWluYXRvcixcbiAgICAgICAgZGVsdGFQaGkgPSAoZnggKiBkZWx0YXlEZWx0YUxhbWJkYSAtIGZ5ICogZGVsdGF4RGVsdGFMYW1iZGEpIC8gZGVub21pbmF0b3I7XG4gICAgbGFtYmRhIC09IGRlbHRhTGFtYmRhLCBwaGkgLT0gZGVsdGFQaGk7XG4gIH0gd2hpbGUgKChhYnMoZGVsdGFMYW1iZGEpID4gZXBzaWxvbiB8fCBhYnMoZGVsdGFQaGkpID4gZXBzaWxvbikgJiYgLS1pID4gMCk7XG4gIHJldHVybiBpICYmIFtsYW1iZGEsIHBoaV07XG59O1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbigpIHtcbiAgcmV0dXJuIHByb2plY3Rpb24obGFza293c2tpUmF3KVxuICAgICAgLnNjYWxlKDEzOS45OCk7XG59XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9kMy1nZW8tcHJvamVjdGlvbi9zcmMvbGFza293c2tpLmpzXG4vLyBtb2R1bGUgaWQgPSAuL25vZGVfbW9kdWxlcy9kMy1nZW8tcHJvamVjdGlvbi9zcmMvbGFza293c2tpLmpzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCB7Z2VvUHJvamVjdGlvbiBhcyBwcm9qZWN0aW9ufSBmcm9tIFwiZDMtZ2VvXCI7XG5pbXBvcnQge2Fjb3MsIGFzaW4sIGNvcywgc2lnbiwgc2luLCB0YW4sIHNxcnQsIHNxcnQxXzJ9IGZyb20gXCIuL21hdGhcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIGxpdHRyb3dSYXcobGFtYmRhLCBwaGkpIHtcbiAgcmV0dXJuIFtcbiAgICBzaW4obGFtYmRhKSAvIGNvcyhwaGkpLFxuICAgIHRhbihwaGkpICogY29zKGxhbWJkYSlcbiAgXTtcbn1cblxubGl0dHJvd1Jhdy5pbnZlcnQgPSBmdW5jdGlvbih4LCB5KSB7XG4gIHZhciB4MiA9IHggKiB4LFxuICAgICAgeTIgPSB5ICogeSxcbiAgICAgIHkyXzEgPSB5MiArIDEsXG4gICAgICB4Ml95Ml8xID0geDIgKyB5Ml8xLFxuICAgICAgY29zUGhpID0geFxuICAgICAgICAgID8gc3FydDFfMiAqIHNxcnQoKHgyX3kyXzEgLSBzcXJ0KHgyX3kyXzEgKiB4Ml95Ml8xIC0gNCAqIHgyKSkgLyB4MilcbiAgICAgICAgICA6IDEgLyBzcXJ0KHkyXzEpO1xuICByZXR1cm4gW1xuICAgIGFzaW4oeCAqIGNvc1BoaSksXG4gICAgc2lnbih5KSAqIGFjb3MoY29zUGhpKVxuICBdO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oKSB7XG4gIHJldHVybiBwcm9qZWN0aW9uKGxpdHRyb3dSYXcpXG4gICAgICAuc2NhbGUoMTQ0LjA0OSlcbiAgICAgIC5jbGlwQW5nbGUoOTAgLSAxZS0zKTtcbn1cblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2QzLWdlby1wcm9qZWN0aW9uL3NyYy9saXR0cm93LmpzXG4vLyBtb2R1bGUgaWQgPSAuL25vZGVfbW9kdWxlcy9kMy1nZW8tcHJvamVjdGlvbi9zcmMvbGl0dHJvdy5qc1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgcGFyYWxsZWwxIGZyb20gXCIuL3BhcmFsbGVsMVwiO1xuaW1wb3J0IHthYnMsIGNvcywgZXBzaWxvbiwgaGFsZlBpLCBsb2csIHF1YXJ0ZXJQaSwgdGFufSBmcm9tIFwiLi9tYXRoXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBsb3hpbXV0aGFsUmF3KHBoaTApIHtcbiAgdmFyIGNvc1BoaTAgPSBjb3MocGhpMCksXG4gICAgICB0YW5QaGkwID0gdGFuKHF1YXJ0ZXJQaSArIHBoaTAgLyAyKTtcblxuICBmdW5jdGlvbiBmb3J3YXJkKGxhbWJkYSwgcGhpKSB7XG4gICAgdmFyIHkgPSBwaGkgLSBwaGkwLFxuICAgICAgICB4ID0gYWJzKHkpIDwgZXBzaWxvbiA/IGxhbWJkYSAqIGNvc1BoaTBcbiAgICAgICAgICAgIDogYWJzKHggPSBxdWFydGVyUGkgKyBwaGkgLyAyKSA8IGVwc2lsb24gfHwgYWJzKGFicyh4KSAtIGhhbGZQaSkgPCBlcHNpbG9uXG4gICAgICAgICAgICA/IDAgOiBsYW1iZGEgKiB5IC8gbG9nKHRhbih4KSAvIHRhblBoaTApO1xuICAgIHJldHVybiBbeCwgeV07XG4gIH1cblxuICBmb3J3YXJkLmludmVydCA9IGZ1bmN0aW9uKHgsIHkpIHtcbiAgICB2YXIgbGFtYmRhLFxuICAgICAgICBwaGkgPSB5ICsgcGhpMDtcbiAgICByZXR1cm4gW1xuICAgICAgYWJzKHkpIDwgZXBzaWxvbiA/IHggLyBjb3NQaGkwXG4gICAgICAgICAgOiAoYWJzKGxhbWJkYSA9IHF1YXJ0ZXJQaSArIHBoaSAvIDIpIDwgZXBzaWxvbiB8fCBhYnMoYWJzKGxhbWJkYSkgLSBoYWxmUGkpIDwgZXBzaWxvbikgPyAwXG4gICAgICAgICAgOiB4ICogbG9nKHRhbihsYW1iZGEpIC8gdGFuUGhpMCkgLyB5LFxuICAgICAgcGhpXG4gICAgXTtcbiAgfTtcblxuICByZXR1cm4gZm9yd2FyZDtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oKSB7XG4gIHJldHVybiBwYXJhbGxlbDEobG94aW11dGhhbFJhdylcbiAgICAgIC5wYXJhbGxlbCg0MClcbiAgICAgIC5zY2FsZSgxNTguODM3KTtcbn1cblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2QzLWdlby1wcm9qZWN0aW9uL3NyYy9sb3hpbXV0aGFsLmpzXG4vLyBtb2R1bGUgaWQgPSAuL25vZGVfbW9kdWxlcy9kMy1nZW8tcHJvamVjdGlvbi9zcmMvbG94aW11dGhhbC5qc1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJleHBvcnQgdmFyIGFicyA9IE1hdGguYWJzO1xuZXhwb3J0IHZhciBhdGFuID0gTWF0aC5hdGFuO1xuZXhwb3J0IHZhciBhdGFuMiA9IE1hdGguYXRhbjI7XG5leHBvcnQgdmFyIGNlaWwgPSBNYXRoLmNlaWw7XG5leHBvcnQgdmFyIGNvcyA9IE1hdGguY29zO1xuZXhwb3J0IHZhciBleHAgPSBNYXRoLmV4cDtcbmV4cG9ydCB2YXIgZmxvb3IgPSBNYXRoLmZsb29yO1xuZXhwb3J0IHZhciBsb2cgPSBNYXRoLmxvZztcbmV4cG9ydCB2YXIgbWF4ID0gTWF0aC5tYXg7XG5leHBvcnQgdmFyIG1pbiA9IE1hdGgubWluO1xuZXhwb3J0IHZhciBwb3cgPSBNYXRoLnBvdztcbmV4cG9ydCB2YXIgcm91bmQgPSBNYXRoLnJvdW5kO1xuZXhwb3J0IHZhciBzaWduID0gTWF0aC5zaWduIHx8IGZ1bmN0aW9uKHgpIHsgcmV0dXJuIHggPiAwID8gMSA6IHggPCAwID8gLTEgOiAwOyB9O1xuZXhwb3J0IHZhciBzaW4gPSBNYXRoLnNpbjtcbmV4cG9ydCB2YXIgdGFuID0gTWF0aC50YW47XG5cbmV4cG9ydCB2YXIgZXBzaWxvbiA9IDFlLTY7XG5leHBvcnQgdmFyIGVwc2lsb24yID0gMWUtMTI7XG5leHBvcnQgdmFyIHBpID0gTWF0aC5QSTtcbmV4cG9ydCB2YXIgaGFsZlBpID0gcGkgLyAyO1xuZXhwb3J0IHZhciBxdWFydGVyUGkgPSBwaSAvIDQ7XG5leHBvcnQgdmFyIHNxcnQxXzIgPSBNYXRoLlNRUlQxXzI7XG5leHBvcnQgdmFyIHNxcnQyID0gc3FydCgyKTtcbmV4cG9ydCB2YXIgc3FydFBpID0gc3FydChwaSk7XG5leHBvcnQgdmFyIHRhdSA9IHBpICogMjtcbmV4cG9ydCB2YXIgZGVncmVlcyA9IDE4MCAvIHBpO1xuZXhwb3J0IHZhciByYWRpYW5zID0gcGkgLyAxODA7XG5cbmV4cG9ydCBmdW5jdGlvbiBzaW5jaSh4KSB7XG4gIHJldHVybiB4ID8geCAvIE1hdGguc2luKHgpIDogMTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFzaW4oeCkge1xuICByZXR1cm4geCA+IDEgPyBoYWxmUGkgOiB4IDwgLTEgPyAtaGFsZlBpIDogTWF0aC5hc2luKHgpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYWNvcyh4KSB7XG4gIHJldHVybiB4ID4gMSA/IDAgOiB4IDwgLTEgPyBwaSA6IE1hdGguYWNvcyh4KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNxcnQoeCkge1xuICByZXR1cm4geCA+IDAgPyBNYXRoLnNxcnQoeCkgOiAwO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdGFuaCh4KSB7XG4gIHggPSBleHAoMiAqIHgpO1xuICByZXR1cm4gKHggLSAxKSAvICh4ICsgMSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzaW5oKHgpIHtcbiAgcmV0dXJuIChleHAoeCkgLSBleHAoLXgpKSAvIDI7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjb3NoKHgpIHtcbiAgcmV0dXJuIChleHAoeCkgKyBleHAoLXgpKSAvIDI7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhcnNpbmgoeCkge1xuICByZXR1cm4gbG9nKHggKyBzcXJ0KHggKiB4ICsgMSkpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYXJjb3NoKHgpIHtcbiAgcmV0dXJuIGxvZyh4ICsgc3FydCh4ICogeCAtIDEpKTtcbn1cblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2QzLWdlby1wcm9qZWN0aW9uL3NyYy9tYXRoLmpzXG4vLyBtb2R1bGUgaWQgPSAuL25vZGVfbW9kdWxlcy9kMy1nZW8tcHJvamVjdGlvbi9zcmMvbWF0aC5qc1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQge2dlb1Byb2plY3Rpb24gYXMgcHJvamVjdGlvbn0gZnJvbSBcImQzLWdlb1wiO1xuaW1wb3J0IHthdGFuLCBleHAsIGxvZywgcXVhcnRlclBpLCBwaSwgdGFufSBmcm9tIFwiLi9tYXRoXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBtaWxsZXJSYXcobGFtYmRhLCBwaGkpIHtcbiAgcmV0dXJuIFtsYW1iZGEsIDEuMjUgKiBsb2codGFuKHF1YXJ0ZXJQaSArIDAuNCAqIHBoaSkpXTtcbn1cblxubWlsbGVyUmF3LmludmVydCA9IGZ1bmN0aW9uKHgsIHkpIHtcbiAgcmV0dXJuIFt4LCAyLjUgKiBhdGFuKGV4cCgwLjggKiB5KSkgLSAwLjYyNSAqIHBpXTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKCkge1xuICByZXR1cm4gcHJvamVjdGlvbihtaWxsZXJSYXcpXG4gICAgICAuc2NhbGUoMTA4LjMxOCk7XG59XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9kMy1nZW8tcHJvamVjdGlvbi9zcmMvbWlsbGVyLmpzXG4vLyBtb2R1bGUgaWQgPSAuL25vZGVfbW9kdWxlcy9kMy1nZW8tcHJvamVjdGlvbi9zcmMvbWlsbGVyLmpzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCB7Z2VvUHJvamVjdGlvbiBhcyBwcm9qZWN0aW9uLCBnZW9Sb3RhdGlvbiBhcyByb3RhdGlvbn0gZnJvbSBcImQzLWdlb1wiO1xuaW1wb3J0IHthYnMsIGFzaW4sIGF0YW4sIGF0YW4yLCBjb3MsIGVwc2lsb24sIHNpbiwgc3FydH0gZnJvbSBcIi4vbWF0aFwiO1xuXG5leHBvcnQgZnVuY3Rpb24gbW9kaWZpZWRTdGVyZW9ncmFwaGljUmF3KEMpIHtcbiAgdmFyIG0gPSBDLmxlbmd0aCAtIDE7XG5cbiAgZnVuY3Rpb24gZm9yd2FyZChsYW1iZGEsIHBoaSkge1xuICAgIHZhciBjb3NQaGkgPSBjb3MocGhpKSxcbiAgICAgICAgayA9IDIgLyAoMSArIGNvc1BoaSAqIGNvcyhsYW1iZGEpKSxcbiAgICAgICAgenIgPSBrICogY29zUGhpICogc2luKGxhbWJkYSksXG4gICAgICAgIHppID0gayAqIHNpbihwaGkpLFxuICAgICAgICBpID0gbSxcbiAgICAgICAgdyA9IENbaV0sXG4gICAgICAgIGFyID0gd1swXSxcbiAgICAgICAgYWkgPSB3WzFdLFxuICAgICAgICB0O1xuICAgIHdoaWxlICgtLWkgPj0gMCkge1xuICAgICAgdyA9IENbaV07XG4gICAgICBhciA9IHdbMF0gKyB6ciAqICh0ID0gYXIpIC0gemkgKiBhaTtcbiAgICAgIGFpID0gd1sxXSArIHpyICogYWkgKyB6aSAqIHQ7XG4gICAgfVxuICAgIGFyID0genIgKiAodCA9IGFyKSAtIHppICogYWk7XG4gICAgYWkgPSB6ciAqIGFpICsgemkgKiB0O1xuICAgIHJldHVybiBbYXIsIGFpXTtcbiAgfVxuXG4gIGZvcndhcmQuaW52ZXJ0ID0gZnVuY3Rpb24oeCwgeSkge1xuICAgIHZhciBpID0gMjAsXG4gICAgICAgIHpyID0geCxcbiAgICAgICAgemkgPSB5O1xuICAgIGRvIHtcbiAgICAgIHZhciBqID0gbSxcbiAgICAgICAgICB3ID0gQ1tqXSxcbiAgICAgICAgICBhciA9IHdbMF0sXG4gICAgICAgICAgYWkgPSB3WzFdLFxuICAgICAgICAgIGJyID0gMCxcbiAgICAgICAgICBiaSA9IDAsXG4gICAgICAgICAgdDtcblxuICAgICAgd2hpbGUgKC0taiA+PSAwKSB7XG4gICAgICAgIHcgPSBDW2pdO1xuICAgICAgICBiciA9IGFyICsgenIgKiAodCA9IGJyKSAtIHppICogYmk7XG4gICAgICAgIGJpID0gYWkgKyB6ciAqIGJpICsgemkgKiB0O1xuICAgICAgICBhciA9IHdbMF0gKyB6ciAqICh0ID0gYXIpIC0gemkgKiBhaTtcbiAgICAgICAgYWkgPSB3WzFdICsgenIgKiBhaSArIHppICogdDtcbiAgICAgIH1cbiAgICAgIGJyID0gYXIgKyB6ciAqICh0ID0gYnIpIC0gemkgKiBiaTtcbiAgICAgIGJpID0gYWkgKyB6ciAqIGJpICsgemkgKiB0O1xuICAgICAgYXIgPSB6ciAqICh0ID0gYXIpIC0gemkgKiBhaSAtIHg7XG4gICAgICBhaSA9IHpyICogYWkgKyB6aSAqIHQgLSB5O1xuXG4gICAgICB2YXIgZGVub21pbmF0b3IgPSBiciAqIGJyICsgYmkgKiBiaSwgZGVsdGFyLCBkZWx0YWk7XG4gICAgICB6ciAtPSBkZWx0YXIgPSAoYXIgKiBiciArIGFpICogYmkpIC8gZGVub21pbmF0b3I7XG4gICAgICB6aSAtPSBkZWx0YWkgPSAoYWkgKiBiciAtIGFyICogYmkpIC8gZGVub21pbmF0b3I7XG4gICAgfSB3aGlsZSAoYWJzKGRlbHRhcikgKyBhYnMoZGVsdGFpKSA+IGVwc2lsb24gKiBlcHNpbG9uICYmIC0taSA+IDApO1xuXG4gICAgaWYgKGkpIHtcbiAgICAgIHZhciByaG8gPSBzcXJ0KHpyICogenIgKyB6aSAqIHppKSxcbiAgICAgICAgICBjID0gMiAqIGF0YW4ocmhvICogMC41KSxcbiAgICAgICAgICBzaW5jID0gc2luKGMpO1xuICAgICAgcmV0dXJuIFthdGFuMih6ciAqIHNpbmMsIHJobyAqIGNvcyhjKSksIHJobyA/IGFzaW4oemkgKiBzaW5jIC8gcmhvKSA6IDBdO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gZm9yd2FyZDtcbn1cblxudmFyIGFsYXNrYSA9IFtbMC45OTcyNTIzLCAwXSwgWzAuMDA1MjUxMywgLTAuMDA0MTE3NV0sIFswLjAwNzQ2MDYsIDAuMDA0ODEyNV0sIFstMC4wMTUzNzgzLCAtMC4xOTY4MjUzXSwgWzAuMDYzNjg3MSwgLTAuMTQwODAyN10sIFswLjM2NjA5NzYsIC0wLjI5MzczODJdXSxcbiAgICBnczQ4ID0gW1swLjk4ODc5LCAwXSwgWzAsIDBdLCBbLTAuMDUwOTA5LCAwXSwgWzAsIDBdLCBbMC4wNzU1MjgsIDBdXSxcbiAgICBnczUwID0gW1swLjk4NDI5OTAsIDBdLCBbMC4wMjExNjQyLCAwLjAwMzc2MDhdLCBbLTAuMTAzNjAxOCwgLTAuMDU3NTEwMl0sIFstMC4wMzI5MDk1LCAtMC4wMzIwMTE5XSwgWzAuMDQ5OTQ3MSwgMC4xMjIzMzM1XSwgWzAuMDI2MDQ2MCwgMC4wODk5ODA1XSwgWzAuMDAwNzM4OCwgLTAuMTQzNTc5Ml0sIFswLjAwNzU4NDgsIC0wLjEzMzQxMDhdLCBbLTAuMDIxNjQ3MywgMC4wNzc2NjQ1XSwgWy0wLjAyMjUxNjEsIDAuMDg1MzY3M11dLFxuICAgIG1pbGxlciA9IFtbMC45MjQ1LCAwXSwgWzAsIDBdLCBbMC4wMTk0MywgMF1dLFxuICAgIGxlZSA9IFtbMC43MjEzMTYsIDBdLCBbMCwgMF0sIFstMC4wMDg4MTYyNSwgLTAuMDA2MTczMjVdXTtcblxuZXhwb3J0IGZ1bmN0aW9uIG1vZGlmaWVkU3RlcmVvZ3JhcGhpY0FsYXNrYSgpIHtcbiAgcmV0dXJuIG1vZGlmaWVkU3RlcmVvZ3JhcGhpYyhhbGFza2EsIFsxNTIsIC02NF0pXG4gICAgICAuc2NhbGUoMTUwMClcbiAgICAgIC5jZW50ZXIoWy0xNjAuOTA4LCA2Mi40ODY0XSlcbiAgICAgIC5jbGlwQW5nbGUoMjUpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbW9kaWZpZWRTdGVyZW9ncmFwaGljR3M0OCgpIHtcbiAgcmV0dXJuIG1vZGlmaWVkU3RlcmVvZ3JhcGhpYyhnczQ4LCBbOTUsIC0zOF0pXG4gICAgICAuc2NhbGUoMTAwMClcbiAgICAgIC5jbGlwQW5nbGUoNTUpXG4gICAgICAuY2VudGVyKFstOTYuNTU2MywgMzguODY3NV0pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbW9kaWZpZWRTdGVyZW9ncmFwaGljR3M1MCgpIHtcbiAgcmV0dXJuIG1vZGlmaWVkU3RlcmVvZ3JhcGhpYyhnczUwLCBbMTIwLCAtNDVdKVxuICAgICAgLnNjYWxlKDM1OS41MTMpXG4gICAgICAuY2xpcEFuZ2xlKDU1KVxuICAgICAgLmNlbnRlcihbLTExNy40NzQsIDUzLjA2MjhdKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG1vZGlmaWVkU3RlcmVvZ3JhcGhpY01pbGxlcigpIHtcbiAgcmV0dXJuIG1vZGlmaWVkU3RlcmVvZ3JhcGhpYyhtaWxsZXIsIFstMjAsIC0xOF0pXG4gICAgICAuc2NhbGUoMjA5LjA5MSlcbiAgICAgIC5jZW50ZXIoWzIwLCAxNi43MjE0XSlcbiAgICAgIC5jbGlwQW5nbGUoODIpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbW9kaWZpZWRTdGVyZW9ncmFwaGljTGVlKCkge1xuICByZXR1cm4gbW9kaWZpZWRTdGVyZW9ncmFwaGljKGxlZSwgWzE2NSwgMTBdKVxuICAgICAgLnNjYWxlKDI1MClcbiAgICAgIC5jbGlwQW5nbGUoMTMwKVxuICAgICAgLmNlbnRlcihbLTE2NSwgLTEwXSk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIG1vZGlmaWVkU3RlcmVvZ3JhcGhpYyhjb2VmZmljaWVudHMsIHJvdGF0ZSkge1xuICB2YXIgcCA9IHByb2plY3Rpb24obW9kaWZpZWRTdGVyZW9ncmFwaGljUmF3KGNvZWZmaWNpZW50cykpLnJvdGF0ZShyb3RhdGUpLmNsaXBBbmdsZSg5MCksXG4gICAgICByID0gcm90YXRpb24ocm90YXRlKSxcbiAgICAgIGNlbnRlciA9IHAuY2VudGVyO1xuXG4gIGRlbGV0ZSBwLnJvdGF0ZTtcblxuICBwLmNlbnRlciA9IGZ1bmN0aW9uKF8pIHtcbiAgICByZXR1cm4gYXJndW1lbnRzLmxlbmd0aCA/IGNlbnRlcihyKF8pKSA6IHIuaW52ZXJ0KGNlbnRlcigpKTtcbiAgfTtcblxuICByZXR1cm4gcDtcbn1cblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2QzLWdlby1wcm9qZWN0aW9uL3NyYy9tb2RpZmllZFN0ZXJlb2dyYXBoaWMuanNcbi8vIG1vZHVsZSBpZCA9IC4vbm9kZV9tb2R1bGVzL2QzLWdlby1wcm9qZWN0aW9uL3NyYy9tb2RpZmllZFN0ZXJlb2dyYXBoaWMuanNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IHtnZW9Qcm9qZWN0aW9uIGFzIHByb2plY3Rpb259IGZyb20gXCJkMy1nZW9cIjtcbmltcG9ydCB7YWJzLCBhc2luLCBjb3MsIGVwc2lsb24sIGhhbGZQaSwgcGksIHNpbiwgc3FydDJ9IGZyb20gXCIuL21hdGhcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIG1vbGx3ZWlkZUJyb21sZXlUaGV0YShjcCwgcGhpKSB7XG4gIHZhciBjcHNpblBoaSA9IGNwICogc2luKHBoaSksIGkgPSAzMCwgZGVsdGE7XG4gIGRvIHBoaSAtPSBkZWx0YSA9IChwaGkgKyBzaW4ocGhpKSAtIGNwc2luUGhpKSAvICgxICsgY29zKHBoaSkpO1xuICB3aGlsZSAoYWJzKGRlbHRhKSA+IGVwc2lsb24gJiYgLS1pID4gMCk7XG4gIHJldHVybiBwaGkgLyAyO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbW9sbHdlaWRlQnJvbWxleVJhdyhjeCwgY3ksIGNwKSB7XG5cbiAgZnVuY3Rpb24gZm9yd2FyZChsYW1iZGEsIHBoaSkge1xuICAgIHJldHVybiBbY3ggKiBsYW1iZGEgKiBjb3MocGhpID0gbW9sbHdlaWRlQnJvbWxleVRoZXRhKGNwLCBwaGkpKSwgY3kgKiBzaW4ocGhpKV07XG4gIH1cblxuICBmb3J3YXJkLmludmVydCA9IGZ1bmN0aW9uKHgsIHkpIHtcbiAgICByZXR1cm4geSA9IGFzaW4oeSAvIGN5KSwgW3ggLyAoY3ggKiBjb3MoeSkpLCBhc2luKCgyICogeSArIHNpbigyICogeSkpIC8gY3ApXTtcbiAgfTtcblxuICByZXR1cm4gZm9yd2FyZDtcbn1cblxuZXhwb3J0IHZhciBtb2xsd2VpZGVSYXcgPSBtb2xsd2VpZGVCcm9tbGV5UmF3KHNxcnQyIC8gaGFsZlBpLCBzcXJ0MiwgcGkpO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbigpIHtcbiAgcmV0dXJuIHByb2plY3Rpb24obW9sbHdlaWRlUmF3KVxuICAgICAgLnNjYWxlKDE2OS41MjkpO1xufVxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvZDMtZ2VvLXByb2plY3Rpb24vc3JjL21vbGx3ZWlkZS5qc1xuLy8gbW9kdWxlIGlkID0gLi9ub2RlX21vZHVsZXMvZDMtZ2VvLXByb2plY3Rpb24vc3JjL21vbGx3ZWlkZS5qc1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQge2dlb1Byb2plY3Rpb24gYXMgcHJvamVjdGlvbn0gZnJvbSBcImQzLWdlb1wiO1xuaW1wb3J0IHthc2luLCBjb3MsIHNpbiwgc3FydH0gZnJvbSBcIi4vbWF0aFwiO1xuXG52YXIgc3FydDYgPSBzcXJ0KDYpLFxuICAgIHNxcnQ3ID0gc3FydCg3KTtcblxuZXhwb3J0IGZ1bmN0aW9uIG10RmxhdFBvbGFyUGFyYWJvbGljUmF3KGxhbWJkYSwgcGhpKSB7XG4gIHZhciB0aGV0YSA9IGFzaW4oNyAqIHNpbihwaGkpIC8gKDMgKiBzcXJ0NikpO1xuICByZXR1cm4gW1xuICAgIHNxcnQ2ICogbGFtYmRhICogKDIgKiBjb3MoMiAqIHRoZXRhIC8gMykgLSAxKSAvIHNxcnQ3LFxuICAgIDkgKiBzaW4odGhldGEgLyAzKSAvIHNxcnQ3XG4gIF07XG59XG5cbm10RmxhdFBvbGFyUGFyYWJvbGljUmF3LmludmVydCA9IGZ1bmN0aW9uKHgsIHkpIHtcbiAgdmFyIHRoZXRhID0gMyAqIGFzaW4oeSAqIHNxcnQ3IC8gOSk7XG4gIHJldHVybiBbXG4gICAgeCAqIHNxcnQ3IC8gKHNxcnQ2ICogKDIgKiBjb3MoMiAqIHRoZXRhIC8gMykgLSAxKSksXG4gICAgYXNpbihzaW4odGhldGEpICogMyAqIHNxcnQ2IC8gNylcbiAgXTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKCkge1xuICByZXR1cm4gcHJvamVjdGlvbihtdEZsYXRQb2xhclBhcmFib2xpY1JhdylcbiAgICAgIC5zY2FsZSgxNjQuODU5KTtcbn1cblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2QzLWdlby1wcm9qZWN0aW9uL3NyYy9tdEZsYXRQb2xhclBhcmFib2xpYy5qc1xuLy8gbW9kdWxlIGlkID0gLi9ub2RlX21vZHVsZXMvZDMtZ2VvLXByb2plY3Rpb24vc3JjL210RmxhdFBvbGFyUGFyYWJvbGljLmpzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCB7Z2VvUHJvamVjdGlvbiBhcyBwcm9qZWN0aW9ufSBmcm9tIFwiZDMtZ2VvXCI7XG5pbXBvcnQge2FicywgYXNpbiwgY29zLCBlcHNpbG9uLCBzaW4sIHNxcnQsIHNxcnQxXzIsIHNxcnQyfSBmcm9tIFwiLi9tYXRoXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBtdEZsYXRQb2xhclF1YXJ0aWNSYXcobGFtYmRhLCBwaGkpIHtcbiAgdmFyIGsgPSAoMSArIHNxcnQxXzIpICogc2luKHBoaSksXG4gICAgICB0aGV0YSA9IHBoaTtcbiAgZm9yICh2YXIgaSA9IDAsIGRlbHRhOyBpIDwgMjU7IGkrKykge1xuICAgIHRoZXRhIC09IGRlbHRhID0gKHNpbih0aGV0YSAvIDIpICsgc2luKHRoZXRhKSAtIGspIC8gKDAuNSAqIGNvcyh0aGV0YSAvIDIpICsgY29zKHRoZXRhKSk7XG4gICAgaWYgKGFicyhkZWx0YSkgPCBlcHNpbG9uKSBicmVhaztcbiAgfVxuICByZXR1cm4gW1xuICAgIGxhbWJkYSAqICgxICsgMiAqIGNvcyh0aGV0YSkgLyBjb3ModGhldGEgLyAyKSkgLyAoMyAqIHNxcnQyKSxcbiAgICAyICogc3FydCgzKSAqIHNpbih0aGV0YSAvIDIpIC8gc3FydCgyICsgc3FydDIpXG4gIF07XG59XG5cbm10RmxhdFBvbGFyUXVhcnRpY1Jhdy5pbnZlcnQgPSBmdW5jdGlvbih4LCB5KSB7XG4gIHZhciBzaW5UaGV0YV8yID0geSAqIHNxcnQoMiArIHNxcnQyKSAvICgyICogc3FydCgzKSksXG4gICAgICB0aGV0YSA9IDIgKiBhc2luKHNpblRoZXRhXzIpO1xuICByZXR1cm4gW1xuICAgIDMgKiBzcXJ0MiAqIHggLyAoMSArIDIgKiBjb3ModGhldGEpIC8gY29zKHRoZXRhIC8gMikpLFxuICAgIGFzaW4oKHNpblRoZXRhXzIgKyBzaW4odGhldGEpKSAvICgxICsgc3FydDFfMikpXG4gIF07XG59O1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbigpIHtcbiAgcmV0dXJuIHByb2plY3Rpb24obXRGbGF0UG9sYXJRdWFydGljUmF3KVxuICAgICAgLnNjYWxlKDE4OC4yMDkpO1xufVxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvZDMtZ2VvLXByb2plY3Rpb24vc3JjL210RmxhdFBvbGFyUXVhcnRpYy5qc1xuLy8gbW9kdWxlIGlkID0gLi9ub2RlX21vZHVsZXMvZDMtZ2VvLXByb2plY3Rpb24vc3JjL210RmxhdFBvbGFyUXVhcnRpYy5qc1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQge2dlb1Byb2plY3Rpb24gYXMgcHJvamVjdGlvbn0gZnJvbSBcImQzLWdlb1wiO1xuaW1wb3J0IHthYnMsIGFzaW4sIGNvcywgZXBzaWxvbiwgaGFsZlBpLCBwaSwgc2luLCBzcXJ0fSBmcm9tIFwiLi9tYXRoXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBtdEZsYXRQb2xhclNpbnVzb2lkYWxSYXcobGFtYmRhLCBwaGkpIHtcbiAgdmFyIEEgPSBzcXJ0KDYgLyAoNCArIHBpKSksXG4gICAgICBrID0gKDEgKyBwaSAvIDQpICogc2luKHBoaSksXG4gICAgICB0aGV0YSA9IHBoaSAvIDI7XG4gIGZvciAodmFyIGkgPSAwLCBkZWx0YTsgaSA8IDI1OyBpKyspIHtcbiAgICB0aGV0YSAtPSBkZWx0YSA9ICh0aGV0YSAvIDIgKyBzaW4odGhldGEpIC0gaykgLyAoMC41ICsgY29zKHRoZXRhKSk7XG4gICAgaWYgKGFicyhkZWx0YSkgPCBlcHNpbG9uKSBicmVhaztcbiAgfVxuICByZXR1cm4gW1xuICAgIEEgKiAoMC41ICsgY29zKHRoZXRhKSkgKiBsYW1iZGEgLyAxLjUsXG4gICAgQSAqIHRoZXRhXG4gIF07XG59XG5cbm10RmxhdFBvbGFyU2ludXNvaWRhbFJhdy5pbnZlcnQgPSBmdW5jdGlvbih4LCB5KSB7XG4gIHZhciBBID0gc3FydCg2IC8gKDQgKyBwaSkpLFxuICAgICAgdGhldGEgPSB5IC8gQTtcbiAgaWYgKGFicyhhYnModGhldGEpIC0gaGFsZlBpKSA8IGVwc2lsb24pIHRoZXRhID0gdGhldGEgPCAwID8gLWhhbGZQaSA6IGhhbGZQaTtcbiAgcmV0dXJuIFtcbiAgICAxLjUgKiB4IC8gKEEgKiAoMC41ICsgY29zKHRoZXRhKSkpLFxuICAgIGFzaW4oKHRoZXRhIC8gMiArIHNpbih0aGV0YSkpIC8gKDEgKyBwaSAvIDQpKVxuICBdO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oKSB7XG4gIHJldHVybiBwcm9qZWN0aW9uKG10RmxhdFBvbGFyU2ludXNvaWRhbFJhdylcbiAgICAgIC5zY2FsZSgxNjYuNTE4KTtcbn1cblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2QzLWdlby1wcm9qZWN0aW9uL3NyYy9tdEZsYXRQb2xhclNpbnVzb2lkYWwuanNcbi8vIG1vZHVsZSBpZCA9IC4vbm9kZV9tb2R1bGVzL2QzLWdlby1wcm9qZWN0aW9uL3NyYy9tdEZsYXRQb2xhclNpbnVzb2lkYWwuanNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IHtnZW9Qcm9qZWN0aW9uIGFzIHByb2plY3Rpb259IGZyb20gXCJkMy1nZW9cIjtcbmltcG9ydCB7YWJzLCBlcHNpbG9uMn0gZnJvbSBcIi4vbWF0aFwiO1xuXG5leHBvcnQgZnVuY3Rpb24gbmF0dXJhbEVhcnRoMlJhdyhsYW1iZGEsIHBoaSkge1xuICB2YXIgcGhpMiA9IHBoaSAqIHBoaSwgcGhpNCA9IHBoaTIgKiBwaGkyLCBwaGk2ID0gcGhpMiAqIHBoaTQ7XG4gIHJldHVybiBbXG4gICAgbGFtYmRhICogKDAuODQ3MTkgLSAwLjEzMDYzICogcGhpMiArIHBoaTYgKiBwaGk2ICogKC0wLjA0NTE1ICsgMC4wNTQ5NCAqIHBoaTIgLSAwLjAyMzI2ICogcGhpNCArIDAuMDAzMzEgKiBwaGk2KSksXG4gICAgcGhpICogKDEuMDExODMgKyBwaGk0ICogcGhpNCAqICgtMC4wMjYyNSArIDAuMDE5MjYgKiBwaGkyIC0gMC4wMDM5NiAqIHBoaTQpKVxuICBdO1xufVxuXG5uYXR1cmFsRWFydGgyUmF3LmludmVydCA9IGZ1bmN0aW9uKHgsIHkpIHtcbiAgdmFyIHBoaSA9IHksIGkgPSAyNSwgZGVsdGEsIHBoaTIsIHBoaTQsIHBoaTY7XG4gIGRvIHtcbiAgICBwaGkyID0gcGhpICogcGhpOyBwaGk0ID0gcGhpMiAqIHBoaTI7XG4gICAgcGhpIC09IGRlbHRhID0gKChwaGkgKiAoMS4wMTE4MyArIHBoaTQgKiBwaGk0ICogKC0wLjAyNjI1ICsgMC4wMTkyNiAqIHBoaTIgLSAwLjAwMzk2ICogcGhpNCkpKSAtIHkpIC9cbiAgICAgICgxLjAxMTgzICsgcGhpNCAqIHBoaTQgKiAoKDkgKiAtMC4wMjYyNSkgKyAoMTEgKiAwLjAxOTI2KSAqIHBoaTIgKyAoMTMgKiAtMC4wMDM5NikgKiBwaGk0KSk7XG4gIH0gd2hpbGUgKGFicyhkZWx0YSkgPiBlcHNpbG9uMiAmJiAtLWkgPiAwKTtcbiAgcGhpMiA9IHBoaSAqIHBoaTsgcGhpNCA9IHBoaTIgKiBwaGkyOyBwaGk2ID0gcGhpMiAqIHBoaTQ7XG4gIHJldHVybiBbXG4gICAgeCAvICgwLjg0NzE5IC0gMC4xMzA2MyAqIHBoaTIgKyBwaGk2ICogcGhpNiAqICgtMC4wNDUxNSArIDAuMDU0OTQgKiBwaGkyIC0gMC4wMjMyNiAqIHBoaTQgKyAwLjAwMzMxICogcGhpNikpLFxuICAgIHBoaVxuICBdO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oKSB7XG4gIHJldHVybiBwcm9qZWN0aW9uKG5hdHVyYWxFYXJ0aDJSYXcpXG4gICAgICAuc2NhbGUoMTc1LjI5NSk7XG59XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9kMy1nZW8tcHJvamVjdGlvbi9zcmMvbmF0dXJhbEVhcnRoMi5qc1xuLy8gbW9kdWxlIGlkID0gLi9ub2RlX21vZHVsZXMvZDMtZ2VvLXByb2plY3Rpb24vc3JjL25hdHVyYWxFYXJ0aDIuanNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IHtnZW9Qcm9qZWN0aW9uIGFzIHByb2plY3Rpb259IGZyb20gXCJkMy1nZW9cIjtcbmltcG9ydCB7YWJzLCBjb3MsIGVwc2lsb24sIHRhbn0gZnJvbSBcIi4vbWF0aFwiO1xuXG5leHBvcnQgZnVuY3Rpb24gbmVsbEhhbW1lclJhdyhsYW1iZGEsIHBoaSkge1xuICByZXR1cm4gW1xuICAgIGxhbWJkYSAqICgxICsgY29zKHBoaSkpIC8gMixcbiAgICAyICogKHBoaSAtIHRhbihwaGkgLyAyKSlcbiAgXTtcbn1cblxubmVsbEhhbW1lclJhdy5pbnZlcnQgPSBmdW5jdGlvbih4LCB5KSB7XG4gIHZhciBwID0geSAvIDI7XG4gIGZvciAodmFyIGkgPSAwLCBkZWx0YSA9IEluZmluaXR5OyBpIDwgMTAgJiYgYWJzKGRlbHRhKSA+IGVwc2lsb247ICsraSkge1xuICAgIHZhciBjID0gY29zKHkgLyAyKTtcbiAgICB5IC09IGRlbHRhID0gKHkgLSB0YW4oeSAvIDIpIC0gcCkgLyAoMSAtIDAuNSAvIChjICogYykpO1xuICB9XG4gIHJldHVybiBbXG4gICAgMiAqIHggLyAoMSArIGNvcyh5KSksXG4gICAgeVxuICBdO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oKSB7XG4gIHJldHVybiBwcm9qZWN0aW9uKG5lbGxIYW1tZXJSYXcpXG4gICAgICAuc2NhbGUoMTUyLjYzKTtcbn1cblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2QzLWdlby1wcm9qZWN0aW9uL3NyYy9uZWxsSGFtbWVyLmpzXG4vLyBtb2R1bGUgaWQgPSAuL25vZGVfbW9kdWxlcy9kMy1nZW8tcHJvamVjdGlvbi9zcmMvbmVsbEhhbW1lci5qc1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbigpIHt9XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9kMy1nZW8tcHJvamVjdGlvbi9zcmMvbm9vcC5qc1xuLy8gbW9kdWxlIGlkID0gLi9ub2RlX21vZHVsZXMvZDMtZ2VvLXByb2plY3Rpb24vc3JjL25vb3AuanNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IHtnZW9Qcm9qZWN0aW9uTXV0YXRvciBhcyBwcm9qZWN0aW9uTXV0YXRvcn0gZnJvbSBcImQzLWdlb1wiO1xuaW1wb3J0IHtkZWdyZWVzLCByYWRpYW5zfSBmcm9tIFwiLi9tYXRoXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKHByb2plY3RBdCkge1xuICB2YXIgcGhpMCA9IDAsXG4gICAgICBtID0gcHJvamVjdGlvbk11dGF0b3IocHJvamVjdEF0KSxcbiAgICAgIHAgPSBtKHBoaTApO1xuXG4gIHAucGFyYWxsZWwgPSBmdW5jdGlvbihfKSB7XG4gICAgcmV0dXJuIGFyZ3VtZW50cy5sZW5ndGggPyBtKHBoaTAgPSBfICogcmFkaWFucykgOiBwaGkwICogZGVncmVlcztcbiAgfTtcblxuICByZXR1cm4gcDtcbn1cblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2QzLWdlby1wcm9qZWN0aW9uL3NyYy9wYXJhbGxlbDEuanNcbi8vIG1vZHVsZSBpZCA9IC4vbm9kZV9tb2R1bGVzL2QzLWdlby1wcm9qZWN0aW9uL3NyYy9wYXJhbGxlbDEuanNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IHtnZW9Qcm9qZWN0aW9uIGFzIHByb2plY3Rpb259IGZyb20gXCJkMy1nZW9cIjtcbmltcG9ydCB7YWJzLCBlcHNpbG9ufSBmcm9tIFwiLi9tYXRoXCI7XG5cbi8vIEJhc2VkIG9uIEphdmEgaW1wbGVtZW50YXRpb24gYnkgQm9qYW4gU2F2cmljLlxuLy8gaHR0cHM6Ly9naXRodWIuY29tL09TVUNhcnRvZ3JhcGh5L0pNYXBQcm9qTGliL2Jsb2IvbWFzdGVyL3NyYy9jb20vamhsYWJzL21hcC9wcm9qL1BhdHRlcnNvblByb2plY3Rpb24uamF2YVxuXG52YXIgcGF0dGVyc29uSzEgPSAxLjAxNDgsXG4gICAgcGF0dGVyc29uSzIgPSAwLjIzMTg1LFxuICAgIHBhdHRlcnNvbkszID0gLTAuMTQ0OTksXG4gICAgcGF0dGVyc29uSzQgPSAwLjAyNDA2LFxuICAgIHBhdHRlcnNvbkMxID0gcGF0dGVyc29uSzEsXG4gICAgcGF0dGVyc29uQzIgPSA1ICogcGF0dGVyc29uSzIsXG4gICAgcGF0dGVyc29uQzMgPSA3ICogcGF0dGVyc29uSzMsXG4gICAgcGF0dGVyc29uQzQgPSA5ICogcGF0dGVyc29uSzQsXG4gICAgcGF0dGVyc29uWW1heCA9IDEuNzkwODU3MTgzO1xuXG5leHBvcnQgZnVuY3Rpb24gcGF0dGVyc29uUmF3KGxhbWJkYSwgcGhpKSB7XG4gIHZhciBwaGkyID0gcGhpICogcGhpO1xuICByZXR1cm4gW1xuICAgIGxhbWJkYSxcbiAgICBwaGkgKiAocGF0dGVyc29uSzEgKyBwaGkyICogcGhpMiAqIChwYXR0ZXJzb25LMiArIHBoaTIgKiAocGF0dGVyc29uSzMgKyBwYXR0ZXJzb25LNCAqIHBoaTIpKSlcbiAgXTtcbn1cblxucGF0dGVyc29uUmF3LmludmVydCA9IGZ1bmN0aW9uKHgsIHkpIHtcbiAgaWYgKHkgPiBwYXR0ZXJzb25ZbWF4KSB5ID0gcGF0dGVyc29uWW1heDtcbiAgZWxzZSBpZiAoeSA8IC1wYXR0ZXJzb25ZbWF4KSB5ID0gLXBhdHRlcnNvblltYXg7XG4gIHZhciB5YyA9IHksIGRlbHRhO1xuXG4gIGRvIHsgLy8gTmV3dG9uLVJhcGhzb25cbiAgICB2YXIgeTIgPSB5YyAqIHljO1xuICAgIHljIC09IGRlbHRhID0gKCh5YyAqIChwYXR0ZXJzb25LMSArIHkyICogeTIgKiAocGF0dGVyc29uSzIgKyB5MiAqIChwYXR0ZXJzb25LMyArIHBhdHRlcnNvbks0ICogeTIpKSkpIC0geSkgLyAocGF0dGVyc29uQzEgKyB5MiAqIHkyICogKHBhdHRlcnNvbkMyICsgeTIgKiAocGF0dGVyc29uQzMgKyBwYXR0ZXJzb25DNCAqIHkyKSkpO1xuICB9IHdoaWxlIChhYnMoZGVsdGEpID4gZXBzaWxvbik7XG5cbiAgcmV0dXJuIFt4LCB5Y107XG59O1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbigpIHtcbiAgcmV0dXJuIHByb2plY3Rpb24ocGF0dGVyc29uUmF3KVxuICAgICAgLnNjYWxlKDEzOS4zMTkpO1xufVxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvZDMtZ2VvLXByb2plY3Rpb24vc3JjL3BhdHRlcnNvbi5qc1xuLy8gbW9kdWxlIGlkID0gLi9ub2RlX21vZHVsZXMvZDMtZ2VvLXByb2plY3Rpb24vc3JjL3BhdHRlcnNvbi5qc1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQge2dlb1Byb2plY3Rpb24gYXMgcHJvamVjdGlvbn0gZnJvbSBcImQzLWdlb1wiO1xuaW1wb3J0IHthYnMsIGFjb3MsIGFzaW4sIGNvcywgZXBzaWxvbiwgaGFsZlBpLCBzaWduLCBzaW4sIHRhbn0gZnJvbSBcIi4vbWF0aFwiO1xuXG5leHBvcnQgZnVuY3Rpb24gcG9seWNvbmljUmF3KGxhbWJkYSwgcGhpKSB7XG4gIGlmIChhYnMocGhpKSA8IGVwc2lsb24pIHJldHVybiBbbGFtYmRhLCAwXTtcbiAgdmFyIHRhblBoaSA9IHRhbihwaGkpLFxuICAgICAgayA9IGxhbWJkYSAqIHNpbihwaGkpO1xuICByZXR1cm4gW1xuICAgIHNpbihrKSAvIHRhblBoaSxcbiAgICBwaGkgKyAoMSAtIGNvcyhrKSkgLyB0YW5QaGlcbiAgXTtcbn1cblxucG9seWNvbmljUmF3LmludmVydCA9IGZ1bmN0aW9uKHgsIHkpIHtcbiAgaWYgKGFicyh5KSA8IGVwc2lsb24pIHJldHVybiBbeCwgMF07XG4gIHZhciBrID0geCAqIHggKyB5ICogeSxcbiAgICAgIHBoaSA9IHkgKiAwLjUsXG4gICAgICBpID0gMTAsIGRlbHRhO1xuICBkbyB7XG4gICAgdmFyIHRhblBoaSA9IHRhbihwaGkpLFxuICAgICAgICBzZWNQaGkgPSAxIC8gY29zKHBoaSksXG4gICAgICAgIGogPSBrIC0gMiAqIHkgKiBwaGkgKyBwaGkgKiBwaGk7XG4gICAgcGhpIC09IGRlbHRhID0gKHRhblBoaSAqIGogKyAyICogKHBoaSAtIHkpKSAvICgyICsgaiAqIHNlY1BoaSAqIHNlY1BoaSArIDIgKiAocGhpIC0geSkgKiB0YW5QaGkpO1xuICB9IHdoaWxlIChhYnMoZGVsdGEpID4gZXBzaWxvbiAmJiAtLWkgPiAwKTtcbiAgdGFuUGhpID0gdGFuKHBoaSk7XG4gIHJldHVybiBbXG4gICAgKGFicyh5KSA8IGFicyhwaGkgKyAxIC8gdGFuUGhpKSA/IGFzaW4oeCAqIHRhblBoaSkgOiBzaWduKHgpICogKGFjb3MoYWJzKHggKiB0YW5QaGkpKSArIGhhbGZQaSkpIC8gc2luKHBoaSksXG4gICAgcGhpXG4gIF07XG59O1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbigpIHtcbiAgcmV0dXJuIHByb2plY3Rpb24ocG9seWNvbmljUmF3KVxuICAgICAgLnNjYWxlKDEwMy43NCk7XG59XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9kMy1nZW8tcHJvamVjdGlvbi9zcmMvcG9seWNvbmljLmpzXG4vLyBtb2R1bGUgaWQgPSAuL25vZGVfbW9kdWxlcy9kMy1nZW8tcHJvamVjdGlvbi9zcmMvcG9seWNvbmljLmpzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCB7Z2VvQ2VudHJvaWQgYXMgY2VudHJvaWQsIGdlb0dub21vbmljIGFzIGdub21vbmljfSBmcm9tIFwiZDMtZ2VvXCI7XG5pbXBvcnQge3BpfSBmcm9tIFwiLi4vbWF0aFwiO1xuaW1wb3J0IHBvbHloZWRyYWwgZnJvbSBcIi4vaW5kZXhcIjtcbmltcG9ydCBvY3RhaGVkcm9uIGZyb20gXCIuL29jdGFoZWRyb25cIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oZmFjZVByb2plY3Rpb24pIHtcblxuICBmYWNlUHJvamVjdGlvbiA9IGZhY2VQcm9qZWN0aW9uIHx8IGZ1bmN0aW9uKGZhY2UpIHtcbiAgICB2YXIgYyA9IGNlbnRyb2lkKHt0eXBlOiBcIk11bHRpUG9pbnRcIiwgY29vcmRpbmF0ZXM6IGZhY2V9KTtcbiAgICByZXR1cm4gZ25vbW9uaWMoKS5zY2FsZSgxKS50cmFuc2xhdGUoWzAsIDBdKS5yb3RhdGUoWy1jWzBdLCAtY1sxXV0pO1xuICB9O1xuXG4gIHZhciBmYWNlcyA9IG9jdGFoZWRyb24ubWFwKGZ1bmN0aW9uKGZhY2UpIHtcbiAgICByZXR1cm4ge2ZhY2U6IGZhY2UsIHByb2plY3Q6IGZhY2VQcm9qZWN0aW9uKGZhY2UpfTtcbiAgfSk7XG5cbiAgWy0xLCAwLCAwLCAxLCAwLCAxLCA0LCA1XS5mb3JFYWNoKGZ1bmN0aW9uKGQsIGkpIHtcbiAgICB2YXIgbm9kZSA9IGZhY2VzW2RdO1xuICAgIG5vZGUgJiYgKG5vZGUuY2hpbGRyZW4gfHwgKG5vZGUuY2hpbGRyZW4gPSBbXSkpLnB1c2goZmFjZXNbaV0pO1xuICB9KTtcblxuICByZXR1cm4gcG9seWhlZHJhbChmYWNlc1swXSwgZnVuY3Rpb24obGFtYmRhLCBwaGkpIHtcbiAgICAgICAgcmV0dXJuIGZhY2VzW2xhbWJkYSA8IC1waSAvIDIgPyBwaGkgPCAwID8gNiA6IDRcbiAgICAgICAgICAgIDogbGFtYmRhIDwgMCA/IHBoaSA8IDAgPyAyIDogMFxuICAgICAgICAgICAgOiBsYW1iZGEgPCBwaSAvIDIgPyBwaGkgPCAwID8gMyA6IDFcbiAgICAgICAgICAgIDogcGhpIDwgMCA/IDcgOiA1XTtcbiAgICAgIH0pXG4gICAgICAuc2NhbGUoMTAxLjg1OClcbiAgICAgIC5jZW50ZXIoWzAsIDQ1XSk7XG59XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9kMy1nZW8tcHJvamVjdGlvbi9zcmMvcG9seWhlZHJhbC9idXR0ZXJmbHkuanNcbi8vIG1vZHVsZSBpZCA9IC4vbm9kZV9tb2R1bGVzL2QzLWdlby1wcm9qZWN0aW9uL3NyYy9wb2x5aGVkcmFsL2J1dHRlcmZseS5qc1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQge2dlb0NlbnRyb2lkIGFzIGNlbnRyb2lkLCBnZW9Qcm9qZWN0aW9uIGFzIHByb2plY3Rpb259IGZyb20gXCJkMy1nZW9cIjtcbmltcG9ydCB7Y29sbGlnbm9uUmF3fSBmcm9tIFwiLi4vY29sbGlnbm9uXCI7XG5pbXBvcnQge3BpLCBzcXJ0fSBmcm9tIFwiLi4vbWF0aFwiO1xuaW1wb3J0IHBvbHloZWRyYWwgZnJvbSBcIi4vaW5kZXhcIjtcbmltcG9ydCBvY3RhaGVkcm9uIGZyb20gXCIuL29jdGFoZWRyb25cIjtcblxudmFyIGt4ID0gMiAvIHNxcnQoMyk7XG5cbmZ1bmN0aW9uIGNvbGxpZ25vbksoYSwgYikge1xuICB2YXIgcCA9IGNvbGxpZ25vblJhdyhhLCBiKTtcbiAgcmV0dXJuIFtwWzBdICoga3gsIHBbMV1dO1xufVxuXG5jb2xsaWdub25LLmludmVydCA9IGZ1bmN0aW9uKHgseSkge1xuICByZXR1cm4gY29sbGlnbm9uUmF3LmludmVydCh4IC8ga3gsIHkpO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oZmFjZVByb2plY3Rpb24pIHtcblxuICBmYWNlUHJvamVjdGlvbiA9IGZhY2VQcm9qZWN0aW9uIHx8IGZ1bmN0aW9uKGZhY2UpIHtcbiAgICB2YXIgYyA9IGNlbnRyb2lkKHt0eXBlOiBcIk11bHRpUG9pbnRcIiwgY29vcmRpbmF0ZXM6IGZhY2V9KTtcbiAgICByZXR1cm4gcHJvamVjdGlvbihjb2xsaWdub25LKS50cmFuc2xhdGUoWzAsIDBdKS5zY2FsZSgxKS5yb3RhdGUoY1sxXSA+IDAgPyBbLWNbMF0sIDBdIDogWzE4MCAtIGNbMF0sIDE4MF0pO1xuICB9O1xuXG4gIHZhciBmYWNlcyA9IG9jdGFoZWRyb24ubWFwKGZ1bmN0aW9uKGZhY2UpIHtcbiAgICByZXR1cm4ge2ZhY2U6IGZhY2UsIHByb2plY3Q6IGZhY2VQcm9qZWN0aW9uKGZhY2UpfTtcbiAgfSk7XG5cbiAgWy0xLCAwLCAwLCAxLCAwLCAxLCA0LCA1XS5mb3JFYWNoKGZ1bmN0aW9uKGQsIGkpIHtcbiAgICB2YXIgbm9kZSA9IGZhY2VzW2RdO1xuICAgIG5vZGUgJiYgKG5vZGUuY2hpbGRyZW4gfHwgKG5vZGUuY2hpbGRyZW4gPSBbXSkpLnB1c2goZmFjZXNbaV0pO1xuICB9KTtcblxuICByZXR1cm4gcG9seWhlZHJhbChmYWNlc1swXSwgZnVuY3Rpb24obGFtYmRhLCBwaGkpIHtcbiAgICAgICAgcmV0dXJuIGZhY2VzW2xhbWJkYSA8IC1waSAvIDIgPyBwaGkgPCAwID8gNiA6IDRcbiAgICAgICAgICAgIDogbGFtYmRhIDwgMCA/IHBoaSA8IDAgPyAyIDogMFxuICAgICAgICAgICAgOiBsYW1iZGEgPCBwaSAvIDIgPyBwaGkgPCAwID8gMyA6IDFcbiAgICAgICAgICAgIDogcGhpIDwgMCA/IDcgOiA1XTtcbiAgICAgIH0pXG4gICAgICAuc2NhbGUoMTIxLjkwNilcbiAgICAgIC5jZW50ZXIoWzAsIDQ4LjU5MDRdKTtcbn1cblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2QzLWdlby1wcm9qZWN0aW9uL3NyYy9wb2x5aGVkcmFsL2NvbGxpZ25vbi5qc1xuLy8gbW9kdWxlIGlkID0gLi9ub2RlX21vZHVsZXMvZDMtZ2VvLXByb2plY3Rpb24vc3JjL3BvbHloZWRyYWwvY29sbGlnbm9uLmpzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCB7Z2VvQm91bmRzIGFzIGJvdW5kcywgZ2VvQ2VudHJvaWQgYXMgY2VudHJvaWQsIGdlb0ludGVycG9sYXRlIGFzIGludGVycG9sYXRlLCBnZW9Qcm9qZWN0aW9uIGFzIHByb2plY3Rpb259IGZyb20gXCJkMy1nZW9cIjtcbmltcG9ydCB7YWJzLCBjb3MsIGRlZ3JlZXMsIGVwc2lsb24sIHBpLCByYWRpYW5zLCBzaW59IGZyb20gXCIuLi9tYXRoXCI7XG5pbXBvcnQge2RlZmF1bHQgYXMgbWF0cml4LCBtdWx0aXBseSwgaW52ZXJzZX0gZnJvbSBcIi4vbWF0cml4XCI7XG5cbi8vIENyZWF0ZXMgYSBwb2x5aGVkcmFsIHByb2plY3Rpb24uXG4vLyAgKiByb290OiBhIHNwYW5uaW5nIHRyZWUgb2YgcG9seWdvbiBmYWNlcy4gIE5vZGVzIGFyZSBhdXRvbWF0aWNhbGx5XG4vLyAgICBhdWdtZW50ZWQgd2l0aCBhIHRyYW5zZm9ybSBtYXRyaXguXG4vLyAgKiBmYWNlOiBhIGZ1bmN0aW9uIHRoYXQgcmV0dXJucyB0aGUgYXBwcm9wcmlhdGUgbm9kZSBmb3IgYSBnaXZlbiB7bGFtYmRhLCBwaGl9XG4vLyAgICBwb2ludCAocmFkaWFucykuXG4vLyAgKiByOiByb3RhdGlvbiBhbmdsZSBmb3IgZmluYWwgcG9seWhlZHJhbCBuZXQuICBEZWZhdWx0cyB0byAtcGkgLyA2IChmb3Jcbi8vICAgIGJ1dHRlcmZsaWVzKS5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKHJvb3QsIGZhY2UsIHIpIHtcblxuICByID0gciA9PSBudWxsID8gLXBpIC8gNiA6IHI7IC8vIFRPRE8gYXV0b21hdGVcblxuICByZWN1cnNlKHJvb3QsIHt0cmFuc2Zvcm06IFtcbiAgICBjb3MociksIHNpbihyKSwgMCxcbiAgICAtc2luKHIpLCBjb3MociksIDBcbiAgXX0pO1xuXG4gIGZ1bmN0aW9uIHJlY3Vyc2Uobm9kZSwgcGFyZW50KSB7XG4gICAgbm9kZS5lZGdlcyA9IGZhY2VFZGdlcyhub2RlLmZhY2UpO1xuICAgIC8vIEZpbmQgc2hhcmVkIGVkZ2UuXG4gICAgaWYgKHBhcmVudC5mYWNlKSB7XG4gICAgICB2YXIgc2hhcmVkID0gbm9kZS5zaGFyZWQgPSBzaGFyZWRFZGdlKG5vZGUuZmFjZSwgcGFyZW50LmZhY2UpLFxuICAgICAgICAgIG0gPSBtYXRyaXgoc2hhcmVkLm1hcChwYXJlbnQucHJvamVjdCksIHNoYXJlZC5tYXAobm9kZS5wcm9qZWN0KSk7XG4gICAgICBub2RlLnRyYW5zZm9ybSA9IHBhcmVudC50cmFuc2Zvcm0gPyBtdWx0aXBseShwYXJlbnQudHJhbnNmb3JtLCBtKSA6IG07XG4gICAgICAvLyBSZXBsYWNlIHNoYXJlZCBlZGdlIGluIHBhcmVudCBlZGdlcyBhcnJheS5cbiAgICAgIHZhciBlZGdlcyA9IHBhcmVudC5lZGdlcztcbiAgICAgIGZvciAodmFyIGkgPSAwLCBuID0gZWRnZXMubGVuZ3RoOyBpIDwgbjsgKytpKSB7XG4gICAgICAgIGlmIChwb2ludEVxdWFsKHNoYXJlZFswXSwgZWRnZXNbaV1bMV0pICYmIHBvaW50RXF1YWwoc2hhcmVkWzFdLCBlZGdlc1tpXVswXSkpIGVkZ2VzW2ldID0gbm9kZTtcbiAgICAgICAgaWYgKHBvaW50RXF1YWwoc2hhcmVkWzBdLCBlZGdlc1tpXVswXSkgJiYgcG9pbnRFcXVhbChzaGFyZWRbMV0sIGVkZ2VzW2ldWzFdKSkgZWRnZXNbaV0gPSBub2RlO1xuICAgICAgfVxuICAgICAgZWRnZXMgPSBub2RlLmVkZ2VzO1xuICAgICAgZm9yIChpID0gMCwgbiA9IGVkZ2VzLmxlbmd0aDsgaSA8IG47ICsraSkge1xuICAgICAgICBpZiAocG9pbnRFcXVhbChzaGFyZWRbMF0sIGVkZ2VzW2ldWzBdKSAmJiBwb2ludEVxdWFsKHNoYXJlZFsxXSwgZWRnZXNbaV1bMV0pKSBlZGdlc1tpXSA9IHBhcmVudDtcbiAgICAgICAgaWYgKHBvaW50RXF1YWwoc2hhcmVkWzBdLCBlZGdlc1tpXVsxXSkgJiYgcG9pbnRFcXVhbChzaGFyZWRbMV0sIGVkZ2VzW2ldWzBdKSkgZWRnZXNbaV0gPSBwYXJlbnQ7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIG5vZGUudHJhbnNmb3JtID0gcGFyZW50LnRyYW5zZm9ybTtcbiAgICB9XG4gICAgaWYgKG5vZGUuY2hpbGRyZW4pIHtcbiAgICAgIG5vZGUuY2hpbGRyZW4uZm9yRWFjaChmdW5jdGlvbihjaGlsZCkge1xuICAgICAgICByZWN1cnNlKGNoaWxkLCBub2RlKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgICByZXR1cm4gbm9kZTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGZvcndhcmQobGFtYmRhLCBwaGkpIHtcbiAgICB2YXIgbm9kZSA9IGZhY2UobGFtYmRhLCBwaGkpLFxuICAgICAgICBwb2ludCA9IG5vZGUucHJvamVjdChbbGFtYmRhICogZGVncmVlcywgcGhpICogZGVncmVlc10pLFxuICAgICAgICB0O1xuICAgIGlmICh0ID0gbm9kZS50cmFuc2Zvcm0pIHtcbiAgICAgIHJldHVybiBbXG4gICAgICAgIHRbMF0gKiBwb2ludFswXSArIHRbMV0gKiBwb2ludFsxXSArIHRbMl0sXG4gICAgICAgIC0odFszXSAqIHBvaW50WzBdICsgdFs0XSAqIHBvaW50WzFdICsgdFs1XSlcbiAgICAgIF07XG4gICAgfVxuICAgIHBvaW50WzFdID0gLXBvaW50WzFdO1xuICAgIHJldHVybiBwb2ludDtcbiAgfVxuXG4gIC8vIE5haXZlIGludmVyc2UhICBBIGZhc3RlciBzb2x1dGlvbiB3b3VsZCB1c2UgYm91bmRpbmcgYm94ZXMsIG9yIGV2ZW4gYVxuICAvLyBwb2x5Z29uYWwgcXVhZHRyZWUuXG4gIGlmIChoYXNJbnZlcnNlKHJvb3QpKSBmb3J3YXJkLmludmVydCA9IGZ1bmN0aW9uKHgsIHkpIHtcbiAgICB2YXIgY29vcmRpbmF0ZXMgPSBmYWNlSW52ZXJ0KHJvb3QsIFt4LCAteV0pO1xuICAgIHJldHVybiBjb29yZGluYXRlcyAmJiAoY29vcmRpbmF0ZXNbMF0gKj0gcmFkaWFucywgY29vcmRpbmF0ZXNbMV0gKj0gcmFkaWFucywgY29vcmRpbmF0ZXMpO1xuICB9O1xuXG4gIGZ1bmN0aW9uIGZhY2VJbnZlcnQobm9kZSwgY29vcmRpbmF0ZXMpIHtcbiAgICB2YXIgaW52ZXJ0ID0gbm9kZS5wcm9qZWN0LmludmVydCxcbiAgICAgICAgdCA9IG5vZGUudHJhbnNmb3JtLFxuICAgICAgICBwb2ludCA9IGNvb3JkaW5hdGVzO1xuICAgIGlmICh0KSB7XG4gICAgICB0ID0gaW52ZXJzZSh0KTtcbiAgICAgIHBvaW50ID0gW1xuICAgICAgICB0WzBdICogcG9pbnRbMF0gKyB0WzFdICogcG9pbnRbMV0gKyB0WzJdLFxuICAgICAgICAodFszXSAqIHBvaW50WzBdICsgdFs0XSAqIHBvaW50WzFdICsgdFs1XSlcbiAgICAgIF07XG4gICAgfVxuICAgIGlmIChpbnZlcnQgJiYgbm9kZSA9PT0gZmFjZURlZ3JlZXMocCA9IGludmVydChwb2ludCkpKSByZXR1cm4gcDtcbiAgICB2YXIgcCxcbiAgICAgICAgY2hpbGRyZW4gPSBub2RlLmNoaWxkcmVuO1xuICAgIGZvciAodmFyIGkgPSAwLCBuID0gY2hpbGRyZW4gJiYgY2hpbGRyZW4ubGVuZ3RoOyBpIDwgbjsgKytpKSB7XG4gICAgICBpZiAocCA9IGZhY2VJbnZlcnQoY2hpbGRyZW5baV0sIGNvb3JkaW5hdGVzKSkgcmV0dXJuIHA7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gZmFjZURlZ3JlZXMoY29vcmRpbmF0ZXMpIHtcbiAgICByZXR1cm4gZmFjZShjb29yZGluYXRlc1swXSAqIHJhZGlhbnMsIGNvb3JkaW5hdGVzWzFdICogcmFkaWFucyk7XG4gIH1cblxuICB2YXIgcHJvaiA9IHByb2plY3Rpb24oZm9yd2FyZCksXG4gICAgICBzdHJlYW1fID0gcHJvai5zdHJlYW07XG5cbiAgcHJvai5zdHJlYW0gPSBmdW5jdGlvbihzdHJlYW0pIHtcbiAgICB2YXIgcm90YXRlID0gcHJvai5yb3RhdGUoKSxcbiAgICAgICAgcm90YXRlU3RyZWFtID0gc3RyZWFtXyhzdHJlYW0pLFxuICAgICAgICBzcGhlcmVTdHJlYW0gPSAocHJvai5yb3RhdGUoWzAsIDBdKSwgc3RyZWFtXyhzdHJlYW0pKTtcbiAgICBwcm9qLnJvdGF0ZShyb3RhdGUpO1xuICAgIHJvdGF0ZVN0cmVhbS5zcGhlcmUgPSBmdW5jdGlvbigpIHtcbiAgICAgIHNwaGVyZVN0cmVhbS5wb2x5Z29uU3RhcnQoKTtcbiAgICAgIHNwaGVyZVN0cmVhbS5saW5lU3RhcnQoKTtcbiAgICAgIG91dGxpbmUoc3BoZXJlU3RyZWFtLCByb290KTtcbiAgICAgIHNwaGVyZVN0cmVhbS5saW5lRW5kKCk7XG4gICAgICBzcGhlcmVTdHJlYW0ucG9seWdvbkVuZCgpO1xuICAgIH07XG4gICAgcmV0dXJuIHJvdGF0ZVN0cmVhbTtcbiAgfTtcblxuICByZXR1cm4gcHJvajtcbn1cblxuZnVuY3Rpb24gb3V0bGluZShzdHJlYW0sIG5vZGUsIHBhcmVudCkge1xuICB2YXIgcG9pbnQsXG4gICAgICBlZGdlcyA9IG5vZGUuZWRnZXMsXG4gICAgICBuID0gZWRnZXMubGVuZ3RoLFxuICAgICAgZWRnZSxcbiAgICAgIG11bHRpUG9pbnQgPSB7dHlwZTogXCJNdWx0aVBvaW50XCIsIGNvb3JkaW5hdGVzOiBub2RlLmZhY2V9LFxuICAgICAgbm90UG9sZXMgPSBub2RlLmZhY2UuZmlsdGVyKGZ1bmN0aW9uKGQpIHsgcmV0dXJuIGFicyhkWzFdKSAhPT0gOTA7IH0pLFxuICAgICAgYiA9IGJvdW5kcyh7dHlwZTogXCJNdWx0aVBvaW50XCIsIGNvb3JkaW5hdGVzOiBub3RQb2xlc30pLFxuICAgICAgaW5zaWRlID0gZmFsc2UsXG4gICAgICBqID0gLTEsXG4gICAgICBkeCA9IGJbMV1bMF0gLSBiWzBdWzBdO1xuICAvLyBUT0RPXG4gIHZhciBjID0gZHggPT09IDE4MCB8fCBkeCA9PT0gMzYwXG4gICAgICA/IFsoYlswXVswXSArIGJbMV1bMF0pIC8gMiwgKGJbMF1bMV0gKyBiWzFdWzFdKSAvIDJdXG4gICAgICA6IGNlbnRyb2lkKG11bHRpUG9pbnQpO1xuICAvLyBGaXJzdCBmaW5kIHRoZSBzaGFyZWQgZWRnZeKAplxuICBpZiAocGFyZW50KSB3aGlsZSAoKytqIDwgbikge1xuICAgIGlmIChlZGdlc1tqXSA9PT0gcGFyZW50KSBicmVhaztcbiAgfVxuICArK2o7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbjsgKytpKSB7XG4gICAgZWRnZSA9IGVkZ2VzWyhpICsgaikgJSBuXTtcbiAgICBpZiAoQXJyYXkuaXNBcnJheShlZGdlKSkge1xuICAgICAgaWYgKCFpbnNpZGUpIHtcbiAgICAgICAgc3RyZWFtLnBvaW50KChwb2ludCA9IGludGVycG9sYXRlKGVkZ2VbMF0sIGMpKGVwc2lsb24pKVswXSwgcG9pbnRbMV0pO1xuICAgICAgICBpbnNpZGUgPSB0cnVlO1xuICAgICAgfVxuICAgICAgc3RyZWFtLnBvaW50KChwb2ludCA9IGludGVycG9sYXRlKGVkZ2VbMV0sIGMpKGVwc2lsb24pKVswXSwgcG9pbnRbMV0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBpbnNpZGUgPSBmYWxzZTtcbiAgICAgIGlmIChlZGdlICE9PSBwYXJlbnQpIG91dGxpbmUoc3RyZWFtLCBlZGdlLCBub2RlKTtcbiAgICB9XG4gIH1cbn1cblxuLy8gVGVzdHMgZXF1YWxpdHkgb2YgdHdvIHNwaGVyaWNhbCBwb2ludHMuXG5mdW5jdGlvbiBwb2ludEVxdWFsKGEsIGIpIHtcbiAgcmV0dXJuIGEgJiYgYiAmJiBhWzBdID09PSBiWzBdICYmIGFbMV0gPT09IGJbMV07XG59XG5cbi8vIEZpbmRzIGEgc2hhcmVkIGVkZ2UgZ2l2ZW4gdHdvIGNsb2Nrd2lzZSBwb2x5Z29ucy5cbmZ1bmN0aW9uIHNoYXJlZEVkZ2UoYSwgYikge1xuICB2YXIgeCwgeSwgbiA9IGEubGVuZ3RoLCBmb3VuZCA9IG51bGw7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbjsgKytpKSB7XG4gICAgeCA9IGFbaV07XG4gICAgZm9yICh2YXIgaiA9IGIubGVuZ3RoOyAtLWogPj0gMDspIHtcbiAgICAgIHkgPSBiW2pdO1xuICAgICAgaWYgKHhbMF0gPT09IHlbMF0gJiYgeFsxXSA9PT0geVsxXSkge1xuICAgICAgICBpZiAoZm91bmQpIHJldHVybiBbZm91bmQsIHhdO1xuICAgICAgICBmb3VuZCA9IHg7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbi8vIENvbnZlcnRzIGFuIGFycmF5IG9mIG4gZmFjZSB2ZXJ0aWNlcyB0byBhbiBhcnJheSBvZiBuICsgMSBlZGdlcy5cbmZ1bmN0aW9uIGZhY2VFZGdlcyhmYWNlKSB7XG4gIHZhciBuID0gZmFjZS5sZW5ndGgsXG4gICAgICBlZGdlcyA9IFtdO1xuICBmb3IgKHZhciBhID0gZmFjZVtuIC0gMV0sIGkgPSAwOyBpIDwgbjsgKytpKSBlZGdlcy5wdXNoKFthLCBhID0gZmFjZVtpXV0pO1xuICByZXR1cm4gZWRnZXM7XG59XG5cbmZ1bmN0aW9uIGhhc0ludmVyc2Uobm9kZSkge1xuICByZXR1cm4gbm9kZS5wcm9qZWN0LmludmVydCB8fCBub2RlLmNoaWxkcmVuICYmIG5vZGUuY2hpbGRyZW4uc29tZShoYXNJbnZlcnNlKTtcbn1cblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2QzLWdlby1wcm9qZWN0aW9uL3NyYy9wb2x5aGVkcmFsL2luZGV4LmpzXG4vLyBtb2R1bGUgaWQgPSAuL25vZGVfbW9kdWxlcy9kMy1nZW8tcHJvamVjdGlvbi9zcmMvcG9seWhlZHJhbC9pbmRleC5qc1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQge2F0YW4yLCBjb3MsIHNpbiwgc3FydH0gZnJvbSBcIi4uL21hdGhcIjtcblxuLy8gTm90ZTogNi1lbGVtZW50IGFycmF5cyBhcmUgdXNlZCB0byBkZW5vdGUgdGhlIDN4MyBhZmZpbmUgdHJhbnNmb3JtIG1hdHJpeDpcbi8vIFthLCBiLCBjLFxuLy8gIGQsIGUsIGYsXG4vLyAgMCwgMCwgMV0gLSB0aGlzIHJlZHVuZGFudCByb3cgaXMgbGVmdCBvdXQuXG5cbi8vIFRyYW5zZm9ybSBtYXRyaXggZm9yIFthMCwgYTFdIC0+IFtiMCwgYjFdLlxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oYSwgYikge1xuICB2YXIgdSA9IHN1YnRyYWN0KGFbMV0sIGFbMF0pLFxuICAgICAgdiA9IHN1YnRyYWN0KGJbMV0sIGJbMF0pLFxuICAgICAgcGhpID0gYW5nbGUodSwgdiksXG4gICAgICBzID0gbGVuZ3RoKHUpIC8gbGVuZ3RoKHYpO1xuXG4gIHJldHVybiBtdWx0aXBseShbXG4gICAgMSwgMCwgYVswXVswXSxcbiAgICAwLCAxLCBhWzBdWzFdXG4gIF0sIG11bHRpcGx5KFtcbiAgICBzLCAwLCAwLFxuICAgIDAsIHMsIDBcbiAgXSwgbXVsdGlwbHkoW1xuICAgIGNvcyhwaGkpLCBzaW4ocGhpKSwgMCxcbiAgICAtc2luKHBoaSksIGNvcyhwaGkpLCAwXG4gIF0sIFtcbiAgICAxLCAwLCAtYlswXVswXSxcbiAgICAwLCAxLCAtYlswXVsxXVxuICBdKSkpO1xufVxuXG4vLyBJbnZlcnRzIGEgdHJhbnNmb3JtIG1hdHJpeC5cbmV4cG9ydCBmdW5jdGlvbiBpbnZlcnNlKG0pIHtcbiAgdmFyIGsgPSAxIC8gKG1bMF0gKiBtWzRdIC0gbVsxXSAqIG1bM10pO1xuICByZXR1cm4gW1xuICAgIGsgKiBtWzRdLCAtayAqIG1bMV0sIGsgKiAobVsxXSAqIG1bNV0gLSBtWzJdICogbVs0XSksXG4gICAgLWsgKiBtWzNdLCBrICogbVswXSwgayAqIChtWzJdICogbVszXSAtIG1bMF0gKiBtWzVdKVxuICBdO1xufVxuXG4vLyBNdWx0aXBsaWVzIHR3byAzeDIgbWF0cmljZXMuXG5leHBvcnQgZnVuY3Rpb24gbXVsdGlwbHkoYSwgYikge1xuICByZXR1cm4gW1xuICAgIGFbMF0gKiBiWzBdICsgYVsxXSAqIGJbM10sXG4gICAgYVswXSAqIGJbMV0gKyBhWzFdICogYls0XSxcbiAgICBhWzBdICogYlsyXSArIGFbMV0gKiBiWzVdICsgYVsyXSxcbiAgICBhWzNdICogYlswXSArIGFbNF0gKiBiWzNdLFxuICAgIGFbM10gKiBiWzFdICsgYVs0XSAqIGJbNF0sXG4gICAgYVszXSAqIGJbMl0gKyBhWzRdICogYls1XSArIGFbNV1cbiAgXTtcbn1cblxuLy8gU3VidHJhY3RzIDJEIHZlY3RvcnMuXG5mdW5jdGlvbiBzdWJ0cmFjdChhLCBiKSB7XG4gIHJldHVybiBbYVswXSAtIGJbMF0sIGFbMV0gLSBiWzFdXTtcbn1cblxuLy8gTWFnbml0dWRlIG9mIGEgMkQgdmVjdG9yLlxuZnVuY3Rpb24gbGVuZ3RoKHYpIHtcbiAgcmV0dXJuIHNxcnQodlswXSAqIHZbMF0gKyB2WzFdICogdlsxXSk7XG59XG5cbi8vIEFuZ2xlIGJldHdlZW4gdHdvIDJEIHZlY3RvcnMuXG5mdW5jdGlvbiBhbmdsZShhLCBiKSB7XG4gIHJldHVybiBhdGFuMihhWzBdICogYlsxXSAtIGFbMV0gKiBiWzBdLCBhWzBdICogYlswXSArIGFbMV0gKiBiWzFdKTtcbn1cblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2QzLWdlby1wcm9qZWN0aW9uL3NyYy9wb2x5aGVkcmFsL21hdHJpeC5qc1xuLy8gbW9kdWxlIGlkID0gLi9ub2RlX21vZHVsZXMvZDMtZ2VvLXByb2plY3Rpb24vc3JjL3BvbHloZWRyYWwvbWF0cml4LmpzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8vIFRPRE8gZ2VuZXJhdGUgb24tdGhlLWZseSB0byBhdm9pZCBleHRlcm5hbCBtb2RpZmljYXRpb24uXG52YXIgb2N0YWhlZHJvbiA9IFtcbiAgWzAsIDkwXSxcbiAgWy05MCwgMF0sIFswLCAwXSwgWzkwLCAwXSwgWzE4MCwgMF0sXG4gIFswLCAtOTBdXG5dO1xuXG5leHBvcnQgZGVmYXVsdCBbXG4gIFswLCAyLCAxXSxcbiAgWzAsIDMsIDJdLFxuICBbNSwgMSwgMl0sXG4gIFs1LCAyLCAzXSxcbiAgWzAsIDEsIDRdLFxuICBbMCwgNCwgM10sXG4gIFs1LCA0LCAxXSxcbiAgWzUsIDMsIDRdXG5dLm1hcChmdW5jdGlvbihmYWNlKSB7XG4gIHJldHVybiBmYWNlLm1hcChmdW5jdGlvbihpKSB7XG4gICAgcmV0dXJuIG9jdGFoZWRyb25baV07XG4gIH0pO1xufSk7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9kMy1nZW8tcHJvamVjdGlvbi9zcmMvcG9seWhlZHJhbC9vY3RhaGVkcm9uLmpzXG4vLyBtb2R1bGUgaWQgPSAuL25vZGVfbW9kdWxlcy9kMy1nZW8tcHJvamVjdGlvbi9zcmMvcG9seWhlZHJhbC9vY3RhaGVkcm9uLmpzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCB7Z2VvQ2VudHJvaWQgYXMgY2VudHJvaWQsIGdlb0dub21vbmljIGFzIGdub21vbmljfSBmcm9tIFwiZDMtZ2VvXCI7XG5pbXBvcnQge2FzaW4sIGF0YW4yLCBjb3MsIGRlZ3JlZXMsIG1heCwgbWluLCBwaSwgcmFkaWFucywgc2lufSBmcm9tIFwiLi4vbWF0aFwiO1xuaW1wb3J0IHBvbHloZWRyYWwgZnJvbSBcIi4vaW5kZXhcIjtcbmltcG9ydCBvY3RhaGVkcm9uIGZyb20gXCIuL29jdGFoZWRyb25cIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oZmFjZVByb2plY3Rpb24pIHtcblxuICBmYWNlUHJvamVjdGlvbiA9IGZhY2VQcm9qZWN0aW9uIHx8IGZ1bmN0aW9uKGZhY2UpIHtcbiAgICB2YXIgYyA9IGZhY2UubGVuZ3RoID09PSA2ID8gY2VudHJvaWQoe3R5cGU6IFwiTXVsdGlQb2ludFwiLCBjb29yZGluYXRlczogZmFjZX0pIDogZmFjZVswXTtcbiAgICByZXR1cm4gZ25vbW9uaWMoKS5zY2FsZSgxKS50cmFuc2xhdGUoWzAsIDBdKS5yb3RhdGUoWy1jWzBdLCAtY1sxXV0pO1xuICB9O1xuXG4gIHZhciB3NSA9IG9jdGFoZWRyb24ubWFwKGZ1bmN0aW9uKGZhY2UpIHtcbiAgICB2YXIgeHl6ID0gZmFjZS5tYXAoY2FydGVzaWFuKSxcbiAgICAgICAgbiA9IHh5ei5sZW5ndGgsXG4gICAgICAgIGEgPSB4eXpbbiAtIDFdLFxuICAgICAgICBiLFxuICAgICAgICBoZXhhZ29uID0gW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBuOyArK2kpIHtcbiAgICAgIGIgPSB4eXpbaV07XG4gICAgICBoZXhhZ29uLnB1c2goc3BoZXJpY2FsKFtcbiAgICAgICAgYVswXSAqIDAuOTQ4NjgzMjk4MDUwNTEzOCArIGJbMF0gKiAwLjMxNjIyNzc2NjAxNjgzNzk0LFxuICAgICAgICBhWzFdICogMC45NDg2ODMyOTgwNTA1MTM4ICsgYlsxXSAqIDAuMzE2MjI3NzY2MDE2ODM3OTQsXG4gICAgICAgIGFbMl0gKiAwLjk0ODY4MzI5ODA1MDUxMzggKyBiWzJdICogMC4zMTYyMjc3NjYwMTY4Mzc5NFxuICAgICAgXSksIHNwaGVyaWNhbChbXG4gICAgICAgIGJbMF0gKiAwLjk0ODY4MzI5ODA1MDUxMzggKyBhWzBdICogMC4zMTYyMjc3NjYwMTY4Mzc5NCxcbiAgICAgICAgYlsxXSAqIDAuOTQ4NjgzMjk4MDUwNTEzOCArIGFbMV0gKiAwLjMxNjIyNzc2NjAxNjgzNzk0LFxuICAgICAgICBiWzJdICogMC45NDg2ODMyOTgwNTA1MTM4ICsgYVsyXSAqIDAuMzE2MjI3NzY2MDE2ODM3OTRcbiAgICAgIF0pKTtcbiAgICAgIGEgPSBiO1xuICAgIH1cbiAgICByZXR1cm4gaGV4YWdvbjtcbiAgfSk7XG5cbiAgdmFyIGNvcm5lck5vcm1hbHMgPSBbXTtcblxuICB2YXIgcGFyZW50cyA9IFstMSwgMCwgMCwgMSwgMCwgMSwgNCwgNV07XG5cbiAgdzUuZm9yRWFjaChmdW5jdGlvbihoZXhhZ29uLCBqKSB7XG4gICAgdmFyIGZhY2UgPSBvY3RhaGVkcm9uW2pdLFxuICAgICAgICBuID0gZmFjZS5sZW5ndGgsXG4gICAgICAgIG5vcm1hbHMgPSBjb3JuZXJOb3JtYWxzW2pdID0gW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBuOyArK2kpIHtcbiAgICAgIHc1LnB1c2goW1xuICAgICAgICBmYWNlW2ldLFxuICAgICAgICBoZXhhZ29uWyhpICogMiArIDIpICUgKDIgKiBuKV0sXG4gICAgICAgIGhleGFnb25bKGkgKiAyICsgMSkgJSAoMiAqIG4pXVxuICAgICAgXSk7XG4gICAgICBwYXJlbnRzLnB1c2goaik7XG4gICAgICBub3JtYWxzLnB1c2goY3Jvc3MoXG4gICAgICAgIGNhcnRlc2lhbihoZXhhZ29uWyhpICogMiArIDIpICUgKDIgKiBuKV0pLFxuICAgICAgICBjYXJ0ZXNpYW4oaGV4YWdvblsoaSAqIDIgKyAxKSAlICgyICogbildKVxuICAgICAgKSk7XG4gICAgfVxuICB9KTtcblxuICB2YXIgZmFjZXMgPSB3NS5tYXAoZnVuY3Rpb24oZmFjZSkge1xuICAgIHJldHVybiB7XG4gICAgICBwcm9qZWN0OiBmYWNlUHJvamVjdGlvbihmYWNlKSxcbiAgICAgIGZhY2U6IGZhY2VcbiAgICB9O1xuICB9KTtcblxuICBwYXJlbnRzLmZvckVhY2goZnVuY3Rpb24oZCwgaSkge1xuICAgIHZhciBwYXJlbnQgPSBmYWNlc1tkXTtcbiAgICBwYXJlbnQgJiYgKHBhcmVudC5jaGlsZHJlbiB8fCAocGFyZW50LmNoaWxkcmVuID0gW10pKS5wdXNoKGZhY2VzW2ldKTtcbiAgfSk7XG5cbiAgZnVuY3Rpb24gZmFjZShsYW1iZGEsIHBoaSkge1xuICAgIHZhciBjb3NwaGkgPSBjb3MocGhpKSxcbiAgICAgICAgcCA9IFtjb3NwaGkgKiBjb3MobGFtYmRhKSwgY29zcGhpICogc2luKGxhbWJkYSksIHNpbihwaGkpXTtcblxuICAgIHZhciBoZXhhZ29uID0gbGFtYmRhIDwgLXBpIC8gMiA/IHBoaSA8IDAgPyA2IDogNFxuICAgICAgICA6IGxhbWJkYSA8IDAgPyBwaGkgPCAwID8gMiA6IDBcbiAgICAgICAgOiBsYW1iZGEgPCBwaSAvIDIgPyBwaGkgPCAwID8gMyA6IDFcbiAgICAgICAgOiBwaGkgPCAwID8gNyA6IDU7XG5cbiAgICB2YXIgbiA9IGNvcm5lck5vcm1hbHNbaGV4YWdvbl07XG5cbiAgICByZXR1cm4gZmFjZXNbZG90KG5bMF0sIHApIDwgMCA/IDggKyAzICogaGV4YWdvblxuICAgICAgICA6IGRvdChuWzFdLCBwKSA8IDAgPyA4ICsgMyAqIGhleGFnb24gKyAxXG4gICAgICAgIDogZG90KG5bMl0sIHApIDwgMCA/IDggKyAzICogaGV4YWdvbiArIDJcbiAgICAgICAgOiBoZXhhZ29uXTtcbiAgfVxuXG4gIHJldHVybiBwb2x5aGVkcmFsKGZhY2VzWzBdLCBmYWNlKVxuICAgICAgLnNjYWxlKDExMC42MjUpXG4gICAgICAuY2VudGVyKFswLDQ1XSk7XG59XG5cbmZ1bmN0aW9uIGRvdChhLCBiKSB7XG4gIGZvciAodmFyIGkgPSAwLCBuID0gYS5sZW5ndGgsIHMgPSAwOyBpIDwgbjsgKytpKSBzICs9IGFbaV0gKiBiW2ldO1xuICByZXR1cm4gcztcbn1cblxuZnVuY3Rpb24gY3Jvc3MoYSwgYikge1xuICByZXR1cm4gW1xuICAgIGFbMV0gKiBiWzJdIC0gYVsyXSAqIGJbMV0sXG4gICAgYVsyXSAqIGJbMF0gLSBhWzBdICogYlsyXSxcbiAgICBhWzBdICogYlsxXSAtIGFbMV0gKiBiWzBdXG4gIF07XG59XG5cbi8vIENvbnZlcnRzIDNEIENhcnRlc2lhbiB0byBzcGhlcmljYWwgY29vcmRpbmF0ZXMgKGRlZ3JlZXMpLlxuZnVuY3Rpb24gc3BoZXJpY2FsKGNhcnRlc2lhbikge1xuICByZXR1cm4gW1xuICAgIGF0YW4yKGNhcnRlc2lhblsxXSwgY2FydGVzaWFuWzBdKSAqIGRlZ3JlZXMsXG4gICAgYXNpbihtYXgoLTEsIG1pbigxLCBjYXJ0ZXNpYW5bMl0pKSkgKiBkZWdyZWVzXG4gIF07XG59XG5cbi8vIENvbnZlcnRzIHNwaGVyaWNhbCBjb29yZGluYXRlcyAoZGVncmVlcykgdG8gM0QgQ2FydGVzaWFuLlxuZnVuY3Rpb24gY2FydGVzaWFuKGNvb3JkaW5hdGVzKSB7XG4gIHZhciBsYW1iZGEgPSBjb29yZGluYXRlc1swXSAqIHJhZGlhbnMsXG4gICAgICBwaGkgPSBjb29yZGluYXRlc1sxXSAqIHJhZGlhbnMsXG4gICAgICBjb3NwaGkgPSBjb3MocGhpKTtcbiAgcmV0dXJuIFtcbiAgICBjb3NwaGkgKiBjb3MobGFtYmRhKSxcbiAgICBjb3NwaGkgKiBzaW4obGFtYmRhKSxcbiAgICBzaW4ocGhpKVxuICBdO1xufVxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvZDMtZ2VvLXByb2plY3Rpb24vc3JjL3BvbHloZWRyYWwvd2F0ZXJtYW4uanNcbi8vIG1vZHVsZSBpZCA9IC4vbm9kZV9tb2R1bGVzL2QzLWdlby1wcm9qZWN0aW9uL3NyYy9wb2x5aGVkcmFsL3dhdGVybWFuLmpzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKHJpbmcpIHtcbiAgaWYgKChuID0gcmluZy5sZW5ndGgpIDwgNCkgcmV0dXJuIGZhbHNlO1xuICB2YXIgaSA9IDAsXG4gICAgICBuLFxuICAgICAgYXJlYSA9IHJpbmdbbiAtIDFdWzFdICogcmluZ1swXVswXSAtIHJpbmdbbiAtIDFdWzBdICogcmluZ1swXVsxXTtcbiAgd2hpbGUgKCsraSA8IG4pIGFyZWEgKz0gcmluZ1tpIC0gMV1bMV0gKiByaW5nW2ldWzBdIC0gcmluZ1tpIC0gMV1bMF0gKiByaW5nW2ldWzFdO1xuICByZXR1cm4gYXJlYSA8PSAwO1xufVxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvZDMtZ2VvLXByb2plY3Rpb24vc3JjL3Byb2plY3QvY2xvY2t3aXNlLmpzXG4vLyBtb2R1bGUgaWQgPSAuL25vZGVfbW9kdWxlcy9kMy1nZW8tcHJvamVjdGlvbi9zcmMvcHJvamVjdC9jbG9ja3dpc2UuanNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24ocmluZywgcG9pbnQpIHtcbiAgdmFyIHggPSBwb2ludFswXSxcbiAgICAgIHkgPSBwb2ludFsxXSxcbiAgICAgIGNvbnRhaW5zID0gZmFsc2U7XG4gIGZvciAodmFyIGkgPSAwLCBuID0gcmluZy5sZW5ndGgsIGogPSBuIC0gMTsgaSA8IG47IGogPSBpKyspIHtcbiAgICB2YXIgcGkgPSByaW5nW2ldLCB4aSA9IHBpWzBdLCB5aSA9IHBpWzFdLFxuICAgICAgICBwaiA9IHJpbmdbal0sIHhqID0gcGpbMF0sIHlqID0gcGpbMV07XG4gICAgaWYgKCgoeWkgPiB5KSBeICh5aiA+IHkpKSAmJiAoeCA8ICh4aiAtIHhpKSAqICh5IC0geWkpIC8gKHlqIC0geWkpICsgeGkpKSBjb250YWlucyA9ICFjb250YWlucztcbiAgfVxuICByZXR1cm4gY29udGFpbnM7XG59XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9kMy1nZW8tcHJvamVjdGlvbi9zcmMvcHJvamVjdC9jb250YWlucy5qc1xuLy8gbW9kdWxlIGlkID0gLi9ub2RlX21vZHVsZXMvZDMtZ2VvLXByb2plY3Rpb24vc3JjL3Byb2plY3QvY29udGFpbnMuanNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IHtnZW9TdHJlYW19IGZyb20gXCJkMy1nZW9cIjtcbmltcG9ydCBub29wIGZyb20gXCIuLi9ub29wXCI7XG5pbXBvcnQgY2xvY2t3aXNlIGZyb20gXCIuL2Nsb2Nrd2lzZVwiO1xuaW1wb3J0IGNvbnRhaW5zIGZyb20gXCIuL2NvbnRhaW5zXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKG9iamVjdCwgcHJvamVjdGlvbikge1xuICB2YXIgc3RyZWFtID0gcHJvamVjdGlvbi5zdHJlYW0sIHByb2plY3Q7XG4gIGlmICghc3RyZWFtKSB0aHJvdyBuZXcgRXJyb3IoXCJpbnZhbGlkIHByb2plY3Rpb25cIik7XG4gIHN3aXRjaCAob2JqZWN0ICYmIG9iamVjdC50eXBlKSB7XG4gICAgY2FzZSBcIkZlYXR1cmVcIjogcHJvamVjdCA9IHByb2plY3RGZWF0dXJlOyBicmVhaztcbiAgICBjYXNlIFwiRmVhdHVyZUNvbGxlY3Rpb25cIjogcHJvamVjdCA9IHByb2plY3RGZWF0dXJlQ29sbGVjdGlvbjsgYnJlYWs7XG4gICAgZGVmYXVsdDogcHJvamVjdCA9IHByb2plY3RHZW9tZXRyeTsgYnJlYWs7XG4gIH1cbiAgcmV0dXJuIHByb2plY3Qob2JqZWN0LCBzdHJlYW0pO1xufVxuXG5mdW5jdGlvbiBwcm9qZWN0RmVhdHVyZUNvbGxlY3Rpb24obywgc3RyZWFtKSB7XG4gIHJldHVybiB7XG4gICAgdHlwZTogXCJGZWF0dXJlQ29sbGVjdGlvblwiLFxuICAgIGZlYXR1cmVzOiBvLmZlYXR1cmVzLm1hcChmdW5jdGlvbihmKSB7XG4gICAgICByZXR1cm4gcHJvamVjdEZlYXR1cmUoZiwgc3RyZWFtKTtcbiAgICB9KVxuICB9O1xufVxuXG5mdW5jdGlvbiBwcm9qZWN0RmVhdHVyZShvLCBzdHJlYW0pIHtcbiAgcmV0dXJuIHtcbiAgICB0eXBlOiBcIkZlYXR1cmVcIixcbiAgICBpZDogby5pZCxcbiAgICBwcm9wZXJ0aWVzOiBvLnByb3BlcnRpZXMsXG4gICAgZ2VvbWV0cnk6IHByb2plY3RHZW9tZXRyeShvLmdlb21ldHJ5LCBzdHJlYW0pXG4gIH07XG59XG5cbmZ1bmN0aW9uIHByb2plY3RHZW9tZXRyeUNvbGxlY3Rpb24obywgc3RyZWFtKSB7XG4gIHJldHVybiB7XG4gICAgdHlwZTogXCJHZW9tZXRyeUNvbGxlY3Rpb25cIixcbiAgICBnZW9tZXRyaWVzOiBvLmdlb21ldHJpZXMubWFwKGZ1bmN0aW9uKG8pIHtcbiAgICAgIHJldHVybiBwcm9qZWN0R2VvbWV0cnkobywgc3RyZWFtKTtcbiAgICB9KVxuICB9O1xufVxuXG5mdW5jdGlvbiBwcm9qZWN0R2VvbWV0cnkobywgc3RyZWFtKSB7XG4gIGlmICghbykgcmV0dXJuIG51bGw7XG4gIGlmIChvLnR5cGUgPT09IFwiR2VvbWV0cnlDb2xsZWN0aW9uXCIpIHJldHVybiBwcm9qZWN0R2VvbWV0cnlDb2xsZWN0aW9uKG8sIHN0cmVhbSk7XG4gIHZhciBzaW5rO1xuICBzd2l0Y2ggKG8udHlwZSkge1xuICAgIGNhc2UgXCJQb2ludFwiOiBzaW5rID0gc2lua1BvaW50OyBicmVhaztcbiAgICBjYXNlIFwiTXVsdGlQb2ludFwiOiBzaW5rID0gc2lua1BvaW50OyBicmVhaztcbiAgICBjYXNlIFwiTGluZVN0cmluZ1wiOiBzaW5rID0gc2lua0xpbmU7IGJyZWFrO1xuICAgIGNhc2UgXCJNdWx0aUxpbmVTdHJpbmdcIjogc2luayA9IHNpbmtMaW5lOyBicmVhaztcbiAgICBjYXNlIFwiUG9seWdvblwiOiBzaW5rID0gc2lua1BvbHlnb247IGJyZWFrO1xuICAgIGNhc2UgXCJNdWx0aVBvbHlnb25cIjogc2luayA9IHNpbmtQb2x5Z29uOyBicmVhaztcbiAgICBjYXNlIFwiU3BoZXJlXCI6IHNpbmsgPSBzaW5rUG9seWdvbjsgYnJlYWs7XG4gICAgZGVmYXVsdDogcmV0dXJuIG51bGw7XG4gIH1cbiAgZ2VvU3RyZWFtKG8sIHN0cmVhbShzaW5rKSk7XG4gIHJldHVybiBzaW5rLnJlc3VsdCgpO1xufVxuXG52YXIgcG9pbnRzID0gW10sXG4gICAgbGluZXMgPSBbXTtcblxudmFyIHNpbmtQb2ludCA9IHtcbiAgcG9pbnQ6IGZ1bmN0aW9uKHgsIHkpIHtcbiAgICBwb2ludHMucHVzaChbeCwgeV0pO1xuICB9LFxuICByZXN1bHQ6IGZ1bmN0aW9uKCkge1xuICAgIHZhciByZXN1bHQgPSAhcG9pbnRzLmxlbmd0aCA/IG51bGxcbiAgICAgICAgOiBwb2ludHMubGVuZ3RoIDwgMiA/IHt0eXBlOiBcIlBvaW50XCIsIGNvb3JkaW5hdGVzOiBwb2ludHNbMF19XG4gICAgICAgIDoge3R5cGU6IFwiTXVsdGlQb2ludFwiLCBjb29yZGluYXRlczogcG9pbnRzfTtcbiAgICBwb2ludHMgPSBbXTtcbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG59O1xuXG52YXIgc2lua0xpbmUgPSB7XG4gIGxpbmVTdGFydDogbm9vcCxcbiAgcG9pbnQ6IGZ1bmN0aW9uKHgsIHkpIHtcbiAgICBwb2ludHMucHVzaChbeCwgeV0pO1xuICB9LFxuICBsaW5lRW5kOiBmdW5jdGlvbigpIHtcbiAgICBpZiAocG9pbnRzLmxlbmd0aCkgbGluZXMucHVzaChwb2ludHMpLCBwb2ludHMgPSBbXTtcbiAgfSxcbiAgcmVzdWx0OiBmdW5jdGlvbigpIHtcbiAgICB2YXIgcmVzdWx0ID0gIWxpbmVzLmxlbmd0aCA/IG51bGxcbiAgICAgICAgOiBsaW5lcy5sZW5ndGggPCAyID8ge3R5cGU6IFwiTGluZVN0cmluZ1wiLCBjb29yZGluYXRlczogbGluZXNbMF19XG4gICAgICAgIDoge3R5cGU6IFwiTXVsdGlMaW5lU3RyaW5nXCIsIGNvb3JkaW5hdGVzOiBsaW5lc307XG4gICAgbGluZXMgPSBbXTtcbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG59O1xuXG52YXIgc2lua1BvbHlnb24gPSB7XG4gIHBvbHlnb25TdGFydDogbm9vcCxcbiAgbGluZVN0YXJ0OiBub29wLFxuICBwb2ludDogZnVuY3Rpb24oeCwgeSkge1xuICAgIHBvaW50cy5wdXNoKFt4LCB5XSk7XG4gIH0sXG4gIGxpbmVFbmQ6IGZ1bmN0aW9uKCkge1xuICAgIHZhciBuID0gcG9pbnRzLmxlbmd0aDtcbiAgICBpZiAobikge1xuICAgICAgZG8gcG9pbnRzLnB1c2gocG9pbnRzWzBdLnNsaWNlKCkpOyB3aGlsZSAoKytuIDwgNCk7XG4gICAgICBsaW5lcy5wdXNoKHBvaW50cyksIHBvaW50cyA9IFtdO1xuICAgIH1cbiAgfSxcbiAgcG9seWdvbkVuZDogbm9vcCxcbiAgcmVzdWx0OiBmdW5jdGlvbigpIHtcbiAgICBpZiAoIWxpbmVzLmxlbmd0aCkgcmV0dXJuIG51bGw7XG4gICAgdmFyIHBvbHlnb25zID0gW10sXG4gICAgICAgIGhvbGVzID0gW107XG5cbiAgICAvLyBodHRwczovL2dpdGh1Yi5jb20vZDMvZDMvaXNzdWVzLzE1NThcbiAgICBsaW5lcy5mb3JFYWNoKGZ1bmN0aW9uKHJpbmcpIHtcbiAgICAgIGlmIChjbG9ja3dpc2UocmluZykpIHBvbHlnb25zLnB1c2goW3JpbmddKTtcbiAgICAgIGVsc2UgaG9sZXMucHVzaChyaW5nKTtcbiAgICB9KTtcblxuICAgIGhvbGVzLmZvckVhY2goZnVuY3Rpb24oaG9sZSkge1xuICAgICAgdmFyIHBvaW50ID0gaG9sZVswXTtcbiAgICAgIHBvbHlnb25zLnNvbWUoZnVuY3Rpb24ocG9seWdvbikge1xuICAgICAgICBpZiAoY29udGFpbnMocG9seWdvblswXSwgcG9pbnQpKSB7XG4gICAgICAgICAgcG9seWdvbi5wdXNoKGhvbGUpO1xuICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICB9KSB8fCBwb2x5Z29ucy5wdXNoKFtob2xlXSk7XG4gICAgfSk7XG5cbiAgICBsaW5lcyA9IFtdO1xuXG4gICAgcmV0dXJuICFwb2x5Z29ucy5sZW5ndGggPyBudWxsXG4gICAgICAgIDogcG9seWdvbnMubGVuZ3RoID4gMSA/IHt0eXBlOiBcIk11bHRpUG9seWdvblwiLCBjb29yZGluYXRlczogcG9seWdvbnN9XG4gICAgICAgIDoge3R5cGU6IFwiUG9seWdvblwiLCBjb29yZGluYXRlczogcG9seWdvbnNbMF19O1xuICB9XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvZDMtZ2VvLXByb2plY3Rpb24vc3JjL3Byb2plY3QvaW5kZXguanNcbi8vIG1vZHVsZSBpZCA9IC4vbm9kZV9tb2R1bGVzL2QzLWdlby1wcm9qZWN0aW9uL3NyYy9wcm9qZWN0L2luZGV4LmpzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKGlucHV0LCBkaWdpdHMpIHtcbiAgaWYgKCEoMCA8PSAoZGlnaXRzID0gK2RpZ2l0cykgJiYgZGlnaXRzIDw9IDIwKSkgdGhyb3cgbmV3IEVycm9yKFwiaW52YWxpZCBkaWdpdHNcIik7XG5cbiAgZnVuY3Rpb24gcXVhbnRpemVQb2ludChpbnB1dCkge1xuICAgIHZhciBuID0gaW5wdXQubGVuZ3RoLCBpID0gMiwgb3V0cHV0ID0gbmV3IEFycmF5KG4pO1xuICAgIG91dHB1dFswXSA9ICtpbnB1dFswXS50b0ZpeGVkKGRpZ2l0cyk7XG4gICAgb3V0cHV0WzFdID0gK2lucHV0WzFdLnRvRml4ZWQoZGlnaXRzKTtcbiAgICB3aGlsZSAoaSA8IG4pIG91dHB1dFtpXSA9IGlucHV0W2ldLCArK2k7XG4gICAgcmV0dXJuIG91dHB1dDtcbiAgfVxuXG4gIGZ1bmN0aW9uIHF1YW50aXplUG9pbnRzKGlucHV0KSB7XG4gICAgcmV0dXJuIGlucHV0Lm1hcChxdWFudGl6ZVBvaW50KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHF1YW50aXplUG9seWdvbihpbnB1dCkge1xuICAgIHJldHVybiBpbnB1dC5tYXAocXVhbnRpemVQb2ludHMpO1xuICB9XG5cbiAgZnVuY3Rpb24gcXVhbnRpemVHZW9tZXRyeShpbnB1dCkge1xuICAgIGlmIChpbnB1dCA9PSBudWxsKSByZXR1cm4gaW5wdXQ7XG4gICAgdmFyIG91dHB1dDtcbiAgICBzd2l0Y2ggKGlucHV0LnR5cGUpIHtcbiAgICAgIGNhc2UgXCJHZW9tZXRyeUNvbGxlY3Rpb25cIjogb3V0cHV0ID0ge3R5cGU6IFwiR2VvbWV0cnlDb2xsZWN0aW9uXCIsIGdlb21ldHJpZXM6IGlucHV0Lmdlb21ldHJpZXMubWFwKHF1YW50aXplR2VvbWV0cnkpfTsgYnJlYWs7XG4gICAgICBjYXNlIFwiUG9pbnRcIjogb3V0cHV0ID0ge3R5cGU6IFwiUG9pbnRcIiwgY29vcmRpbmF0ZXM6IHF1YW50aXplUG9pbnQoaW5wdXQuY29vcmRpbmF0ZXMpfTsgYnJlYWs7XG4gICAgICBjYXNlIFwiTXVsdGlQb2ludFwiOiBjYXNlIFwiTGluZVN0cmluZ1wiOiBvdXRwdXQgPSB7dHlwZTogaW5wdXQudHlwZSwgY29vcmRpbmF0ZXM6IHF1YW50aXplUG9pbnRzKGlucHV0LmNvb3JkaW5hdGVzKX07IGJyZWFrO1xuICAgICAgY2FzZSBcIk11bHRpTGluZVN0cmluZ1wiOiBjYXNlIFwiUG9seWdvblwiOiBvdXRwdXQgPSB7dHlwZTogaW5wdXQudHlwZSwgY29vcmRpbmF0ZXM6IHF1YW50aXplUG9seWdvbihpbnB1dC5jb29yZGluYXRlcyl9OyBicmVhaztcbiAgICAgIGNhc2UgXCJNdWx0aVBvbHlnb25cIjogb3V0cHV0ID0ge3R5cGU6IFwiTXVsdGlQb2x5Z29uXCIsIGNvb3JkaW5hdGVzOiBpbnB1dC5jb29yZGluYXRlcy5tYXAocXVhbnRpemVQb2x5Z29uKX07IGJyZWFrO1xuICAgICAgZGVmYXVsdDogcmV0dXJuIGlucHV0O1xuICAgIH1cbiAgICBpZiAoaW5wdXQuYmJveCAhPSBudWxsKSBvdXRwdXQuYmJveCA9IGlucHV0LmJib3g7XG4gICAgcmV0dXJuIG91dHB1dDtcbiAgfVxuXG4gIGZ1bmN0aW9uIHF1YW50aXplRmVhdHVyZShpbnB1dCkge1xuICAgIHZhciBvdXRwdXQgPSB7dHlwZTogXCJGZWF0dXJlXCIsIHByb3BlcnRpZXM6IGlucHV0LnByb3BlcnRpZXMsIGdlb21ldHJ5OiBxdWFudGl6ZUdlb21ldHJ5KGlucHV0Lmdlb21ldHJ5KX07XG4gICAgaWYgKGlucHV0LmlkICE9IG51bGwpIG91dHB1dC5pZCA9IGlucHV0LmlkO1xuICAgIGlmIChpbnB1dC5iYm94ICE9IG51bGwpIG91dHB1dC5iYm94ID0gaW5wdXQuYmJveDtcbiAgICByZXR1cm4gb3V0cHV0O1xuICB9XG5cbiAgaWYgKGlucHV0ICE9IG51bGwpIHN3aXRjaCAoaW5wdXQudHlwZSkge1xuICAgIGNhc2UgXCJGZWF0dXJlXCI6IHJldHVybiBxdWFudGl6ZUZlYXR1cmUoaW5wdXQpO1xuICAgIGNhc2UgXCJGZWF0dXJlQ29sbGVjdGlvblwiOiB7XG4gICAgICB2YXIgb3V0cHV0ID0ge3R5cGU6IFwiRmVhdHVyZUNvbGxlY3Rpb25cIiwgZmVhdHVyZXM6IGlucHV0LmZlYXR1cmVzLm1hcChxdWFudGl6ZUZlYXR1cmUpfTtcbiAgICAgIGlmIChpbnB1dC5iYm94ICE9IG51bGwpIG91dHB1dC5iYm94ID0gaW5wdXQuYmJveDtcbiAgICAgIHJldHVybiBvdXRwdXQ7XG4gICAgfVxuICAgIGRlZmF1bHQ6IHJldHVybiBxdWFudGl6ZUdlb21ldHJ5KGlucHV0KTtcbiAgfVxuXG4gIHJldHVybiBpbnB1dDtcbn1cblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2QzLWdlby1wcm9qZWN0aW9uL3NyYy9xdWFudGl6ZS5qc1xuLy8gbW9kdWxlIGlkID0gLi9ub2RlX21vZHVsZXMvZDMtZ2VvLXByb2plY3Rpb24vc3JjL3F1YW50aXplLmpzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCB7Z3JpbmdvcnRlblJhd30gZnJvbSBcIi4uL2dyaW5nb3J0ZW5cIjtcbmltcG9ydCBxdWluY3VuY2lhbCBmcm9tIFwiLi9pbmRleFwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbigpIHtcbiAgcmV0dXJuIHF1aW5jdW5jaWFsKGdyaW5nb3J0ZW5SYXcpXG4gICAgICAuc2NhbGUoMTc2LjQyMyk7XG59XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9kMy1nZW8tcHJvamVjdGlvbi9zcmMvcXVpbmN1bmNpYWwvZ3JpbmdvcnRlbi5qc1xuLy8gbW9kdWxlIGlkID0gLi9ub2RlX21vZHVsZXMvZDMtZ2VvLXByb2plY3Rpb24vc3JjL3F1aW5jdW5jaWFsL2dyaW5nb3J0ZW4uanNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IHtnZW9Qcm9qZWN0aW9uIGFzIHByb2plY3Rpb259IGZyb20gXCJkMy1nZW9cIjtcbmltcG9ydCB7YWJzLCBoYWxmUGksIHBpLCBzaWduLCBzcXJ0MV8yfSBmcm9tIFwiLi4vbWF0aFwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbihwcm9qZWN0KSB7XG4gIHZhciBkeCA9IHByb2plY3QoaGFsZlBpLCAwKVswXSAtIHByb2plY3QoLWhhbGZQaSwgMClbMF07XG5cbiAgZnVuY3Rpb24gcHJvamVjdFF1aW5jdW5jaWFsKGxhbWJkYSwgcGhpKSB7XG4gICAgdmFyIHQgPSBhYnMobGFtYmRhKSA8IGhhbGZQaSxcbiAgICAgICAgcCA9IHByb2plY3QodCA/IGxhbWJkYSA6IGxhbWJkYSA+IDAgPyBsYW1iZGEgLSBwaSA6IGxhbWJkYSArIHBpLCBwaGkpLFxuICAgICAgICB4ID0gKHBbMF0gLSBwWzFdKSAqIHNxcnQxXzIsXG4gICAgICAgIHkgPSAocFswXSArIHBbMV0pICogc3FydDFfMjtcbiAgICBpZiAodCkgcmV0dXJuIFt4LCB5XTtcbiAgICB2YXIgZCA9IGR4ICogc3FydDFfMixcbiAgICAgICAgcyA9IHggPiAwIF4geSA+IDAgPyAtMSA6IDE7XG4gICAgcmV0dXJuIFtzICogeCAtIHNpZ24oeSkgKiBkLCBzICogeSAtIHNpZ24oeCkgKiBkXTtcbiAgfVxuXG4gIGlmIChwcm9qZWN0LmludmVydCkgcHJvamVjdFF1aW5jdW5jaWFsLmludmVydCA9IGZ1bmN0aW9uKHgwLCB5MCkge1xuICAgIHZhciB4ID0gKHgwICsgeTApICogc3FydDFfMixcbiAgICAgICAgeSA9ICh5MCAtIHgwKSAqIHNxcnQxXzIsXG4gICAgICAgIHQgPSBhYnMoeCkgPCAwLjUgKiBkeCAmJiBhYnMoeSkgPCAwLjUgKiBkeDtcblxuICAgIGlmICghdCkge1xuICAgICAgdmFyIGQgPSBkeCAqIHNxcnQxXzIsXG4gICAgICAgICAgcyA9IHggPiAwIF4geSA+IDAgPyAtMSA6IDEsXG4gICAgICAgICAgeDEgPSAtcyAqIHgwICsgKHkgPiAwID8gMSA6IC0xKSAqIGQsXG4gICAgICAgICAgeTEgPSAtcyAqIHkwICsgKHggPiAwID8gMSA6IC0xKSAqIGQ7XG4gICAgICB4ID0gKC14MSAtIHkxKSAqIHNxcnQxXzI7XG4gICAgICB5ID0gKHgxIC0geTEpICogc3FydDFfMjtcbiAgICB9XG5cbiAgICB2YXIgcCA9IHByb2plY3QuaW52ZXJ0KHgsIHkpO1xuICAgIGlmICghdCkgcFswXSArPSB4ID4gMCA/IHBpIDogLXBpO1xuICAgIHJldHVybiBwO1xuICB9O1xuXG4gIHJldHVybiBwcm9qZWN0aW9uKHByb2plY3RRdWluY3VuY2lhbClcbiAgICAgIC5yb3RhdGUoWy05MCwgLTkwLCA0NV0pXG4gICAgICAuY2xpcEFuZ2xlKDE4MCAtIDFlLTMpO1xufVxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvZDMtZ2VvLXByb2plY3Rpb24vc3JjL3F1aW5jdW5jaWFsL2luZGV4LmpzXG4vLyBtb2R1bGUgaWQgPSAuL25vZGVfbW9kdWxlcy9kMy1nZW8tcHJvamVjdGlvbi9zcmMvcXVpbmN1bmNpYWwvaW5kZXguanNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IHtndXlvdVJhd30gZnJvbSBcIi4uL2d1eW91XCI7XG5pbXBvcnQgcXVpbmN1bmNpYWwgZnJvbSBcIi4vaW5kZXhcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oKSB7XG4gIHJldHVybiBxdWluY3VuY2lhbChndXlvdVJhdylcbiAgICAgIC5zY2FsZSgxMTEuNDgpO1xufVxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvZDMtZ2VvLXByb2plY3Rpb24vc3JjL3F1aW5jdW5jaWFsL3BlaXJjZS5qc1xuLy8gbW9kdWxlIGlkID0gLi9ub2RlX21vZHVsZXMvZDMtZ2VvLXByb2plY3Rpb24vc3JjL3F1aW5jdW5jaWFsL3BlaXJjZS5qc1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQge2FicywgYWNvcywgYXNpbiwgYXRhbiwgY29zLCBlcHNpbG9uLCBwaSwgc2luLCB0YW59IGZyb20gXCIuL21hdGhcIjtcbmltcG9ydCBwYXJhbGxlbDEgZnJvbSBcIi4vcGFyYWxsZWwxXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiByZWN0YW5ndWxhclBvbHljb25pY1JhdyhwaGkwKSB7XG4gIHZhciBzaW5QaGkwID0gc2luKHBoaTApO1xuXG4gIGZ1bmN0aW9uIGZvcndhcmQobGFtYmRhLCBwaGkpIHtcbiAgICB2YXIgQSA9IHNpblBoaTAgPyB0YW4obGFtYmRhICogc2luUGhpMCAvIDIpIC8gc2luUGhpMCA6IGxhbWJkYSAvIDI7XG4gICAgaWYgKCFwaGkpIHJldHVybiBbMiAqIEEsIC1waGkwXTtcbiAgICB2YXIgRSA9IDIgKiBhdGFuKEEgKiBzaW4ocGhpKSksXG4gICAgICAgIGNvdFBoaSA9IDEgLyB0YW4ocGhpKTtcbiAgICByZXR1cm4gW1xuICAgICAgc2luKEUpICogY290UGhpLFxuICAgICAgcGhpICsgKDEgLSBjb3MoRSkpICogY290UGhpIC0gcGhpMFxuICAgIF07XG4gIH1cblxuICAvLyBUT0RPIHJldHVybiBudWxsIGZvciBwb2ludHMgb3V0c2lkZSBvdXRsaW5lLlxuICBmb3J3YXJkLmludmVydCA9IGZ1bmN0aW9uKHgsIHkpIHtcbiAgICBpZiAoYWJzKHkgKz0gcGhpMCkgPCBlcHNpbG9uKSByZXR1cm4gW3NpblBoaTAgPyAyICogYXRhbihzaW5QaGkwICogeCAvIDIpIC8gc2luUGhpMCA6IHgsIDBdO1xuICAgIHZhciBrID0geCAqIHggKyB5ICogeSxcbiAgICAgICAgcGhpID0gMCxcbiAgICAgICAgaSA9IDEwLCBkZWx0YTtcbiAgICBkbyB7XG4gICAgICB2YXIgdGFuUGhpID0gdGFuKHBoaSksXG4gICAgICAgICAgc2VjUGhpID0gMSAvIGNvcyhwaGkpLFxuICAgICAgICAgIGogPSBrIC0gMiAqIHkgKiBwaGkgKyBwaGkgKiBwaGk7XG4gICAgICBwaGkgLT0gZGVsdGEgPSAodGFuUGhpICogaiArIDIgKiAocGhpIC0geSkpIC8gKDIgKyBqICogc2VjUGhpICogc2VjUGhpICsgMiAqIChwaGkgLSB5KSAqIHRhblBoaSk7XG4gICAgfSB3aGlsZSAoYWJzKGRlbHRhKSA+IGVwc2lsb24gJiYgLS1pID4gMCk7XG4gICAgdmFyIEUgPSB4ICogKHRhblBoaSA9IHRhbihwaGkpKSxcbiAgICAgICAgQSA9IHRhbihhYnMoeSkgPCBhYnMocGhpICsgMSAvIHRhblBoaSkgPyBhc2luKEUpICogMC41IDogYWNvcyhFKSAqIDAuNSArIHBpIC8gNCkgLyBzaW4ocGhpKTtcbiAgICByZXR1cm4gW1xuICAgICAgc2luUGhpMCA/IDIgKiBhdGFuKHNpblBoaTAgKiBBKSAvIHNpblBoaTAgOiAyICogQSxcbiAgICAgIHBoaVxuICAgIF07XG4gIH07XG5cbiAgcmV0dXJuIGZvcndhcmQ7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKCkge1xuICByZXR1cm4gcGFyYWxsZWwxKHJlY3Rhbmd1bGFyUG9seWNvbmljUmF3KVxuICAgICAgLnNjYWxlKDEzMS4yMTUpO1xufVxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvZDMtZ2VvLXByb2plY3Rpb24vc3JjL3JlY3Rhbmd1bGFyUG9seWNvbmljLmpzXG4vLyBtb2R1bGUgaWQgPSAuL25vZGVfbW9kdWxlcy9kMy1nZW8tcHJvamVjdGlvbi9zcmMvcmVjdGFuZ3VsYXJQb2x5Y29uaWMuanNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IHtnZW9Qcm9qZWN0aW9uIGFzIHByb2plY3Rpb259IGZyb20gXCJkMy1nZW9cIjtcbmltcG9ydCB7YWJzLCBkZWdyZWVzLCBlcHNpbG9uMiwgZmxvb3IsIGhhbGZQaSwgbWF4LCBtaW4sIHBpLCByYWRpYW5zfSBmcm9tIFwiLi9tYXRoXCI7XG5cbnZhciBLID0gW1xuICBbMC45OTg2LCAtMC4wNjJdLFxuICBbMS4wMDAwLCAwLjAwMDBdLFxuICBbMC45OTg2LCAwLjA2MjBdLFxuICBbMC45OTU0LCAwLjEyNDBdLFxuICBbMC45OTAwLCAwLjE4NjBdLFxuICBbMC45ODIyLCAwLjI0ODBdLFxuICBbMC45NzMwLCAwLjMxMDBdLFxuICBbMC45NjAwLCAwLjM3MjBdLFxuICBbMC45NDI3LCAwLjQzNDBdLFxuICBbMC45MjE2LCAwLjQ5NThdLFxuICBbMC44OTYyLCAwLjU1NzFdLFxuICBbMC44Njc5LCAwLjYxNzZdLFxuICBbMC44MzUwLCAwLjY3NjldLFxuICBbMC43OTg2LCAwLjczNDZdLFxuICBbMC43NTk3LCAwLjc5MDNdLFxuICBbMC43MTg2LCAwLjg0MzVdLFxuICBbMC42NzMyLCAwLjg5MzZdLFxuICBbMC42MjEzLCAwLjkzOTRdLFxuICBbMC41NzIyLCAwLjk3NjFdLFxuICBbMC41MzIyLCAxLjAwMDBdXG5dO1xuXG5LLmZvckVhY2goZnVuY3Rpb24oZCkge1xuICBkWzFdICo9IDEuMDE0NDtcbn0pO1xuXG5leHBvcnQgZnVuY3Rpb24gcm9iaW5zb25SYXcobGFtYmRhLCBwaGkpIHtcbiAgdmFyIGkgPSBtaW4oMTgsIGFicyhwaGkpICogMzYgLyBwaSksXG4gICAgICBpMCA9IGZsb29yKGkpLFxuICAgICAgZGkgPSBpIC0gaTAsXG4gICAgICBheCA9IChrID0gS1tpMF0pWzBdLFxuICAgICAgYXkgPSBrWzFdLFxuICAgICAgYnggPSAoayA9IEtbKytpMF0pWzBdLFxuICAgICAgYnkgPSBrWzFdLFxuICAgICAgY3ggPSAoayA9IEtbbWluKDE5LCArK2kwKV0pWzBdLFxuICAgICAgY3kgPSBrWzFdLFxuICAgICAgaztcbiAgcmV0dXJuIFtcbiAgICBsYW1iZGEgKiAoYnggKyBkaSAqIChjeCAtIGF4KSAvIDIgKyBkaSAqIGRpICogKGN4IC0gMiAqIGJ4ICsgYXgpIC8gMiksXG4gICAgKHBoaSA+IDAgPyBoYWxmUGkgOiAtaGFsZlBpKSAqIChieSArIGRpICogKGN5IC0gYXkpIC8gMiArIGRpICogZGkgKiAoY3kgLSAyICogYnkgKyBheSkgLyAyKVxuICBdO1xufVxuXG5yb2JpbnNvblJhdy5pbnZlcnQgPSBmdW5jdGlvbih4LCB5KSB7XG4gIHZhciB5eSA9IHkgLyBoYWxmUGksXG4gICAgICBwaGkgPSB5eSAqIDkwLFxuICAgICAgaSA9IG1pbigxOCwgYWJzKHBoaSAvIDUpKSxcbiAgICAgIGkwID0gbWF4KDAsIGZsb29yKGkpKTtcbiAgZG8ge1xuICAgIHZhciBheSA9IEtbaTBdWzFdLFxuICAgICAgICBieSA9IEtbaTAgKyAxXVsxXSxcbiAgICAgICAgY3kgPSBLW21pbigxOSwgaTAgKyAyKV1bMV0sXG4gICAgICAgIHUgPSBjeSAtIGF5LFxuICAgICAgICB2ID0gY3kgLSAyICogYnkgKyBheSxcbiAgICAgICAgdCA9IDIgKiAoYWJzKHl5KSAtIGJ5KSAvIHUsXG4gICAgICAgIGMgPSB2IC8gdSxcbiAgICAgICAgZGkgPSB0ICogKDEgLSBjICogdCAqICgxIC0gMiAqIGMgKiB0KSk7XG4gICAgaWYgKGRpID49IDAgfHwgaTAgPT09IDEpIHtcbiAgICAgIHBoaSA9ICh5ID49IDAgPyA1IDogLTUpICogKGRpICsgaSk7XG4gICAgICB2YXIgaiA9IDUwLCBkZWx0YTtcbiAgICAgIGRvIHtcbiAgICAgICAgaSA9IG1pbigxOCwgYWJzKHBoaSkgLyA1KTtcbiAgICAgICAgaTAgPSBmbG9vcihpKTtcbiAgICAgICAgZGkgPSBpIC0gaTA7XG4gICAgICAgIGF5ID0gS1tpMF1bMV07XG4gICAgICAgIGJ5ID0gS1tpMCArIDFdWzFdO1xuICAgICAgICBjeSA9IEtbbWluKDE5LCBpMCArIDIpXVsxXTtcbiAgICAgICAgcGhpIC09IChkZWx0YSA9ICh5ID49IDAgPyBoYWxmUGkgOiAtaGFsZlBpKSAqIChieSArIGRpICogKGN5IC0gYXkpIC8gMiArIGRpICogZGkgKiAoY3kgLSAyICogYnkgKyBheSkgLyAyKSAtIHkpICogZGVncmVlcztcbiAgICAgIH0gd2hpbGUgKGFicyhkZWx0YSkgPiBlcHNpbG9uMiAmJiAtLWogPiAwKTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfSB3aGlsZSAoLS1pMCA+PSAwKTtcbiAgdmFyIGF4ID0gS1tpMF1bMF0sXG4gICAgICBieCA9IEtbaTAgKyAxXVswXSxcbiAgICAgIGN4ID0gS1ttaW4oMTksIGkwICsgMildWzBdO1xuICByZXR1cm4gW1xuICAgIHggLyAoYnggKyBkaSAqIChjeCAtIGF4KSAvIDIgKyBkaSAqIGRpICogKGN4IC0gMiAqIGJ4ICsgYXgpIC8gMiksXG4gICAgcGhpICogcmFkaWFuc1xuICBdO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oKSB7XG4gIHJldHVybiBwcm9qZWN0aW9uKHJvYmluc29uUmF3KVxuICAgICAgLnNjYWxlKDE1Mi42Myk7XG59XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9kMy1nZW8tcHJvamVjdGlvbi9zcmMvcm9iaW5zb24uanNcbi8vIG1vZHVsZSBpZCA9IC4vbm9kZV9tb2R1bGVzL2QzLWdlby1wcm9qZWN0aW9uL3NyYy9yb2JpbnNvbi5qc1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQge2dlb1Byb2plY3Rpb25NdXRhdG9yIGFzIHByb2plY3Rpb25NdXRhdG9yfSBmcm9tIFwiZDMtZ2VvXCI7XG5pbXBvcnQge2Fjb3MsIGFzaW4sIGF0YW4yLCBjb3MsIGRlZ3JlZXMsIHJhZGlhbnMsIHNpbiwgc3FydH0gZnJvbSBcIi4vbWF0aFwiO1xuXG5mdW5jdGlvbiBzYXRlbGxpdGVWZXJ0aWNhbFJhdyhQKSB7XG4gIGZ1bmN0aW9uIGZvcndhcmQobGFtYmRhLCBwaGkpIHtcbiAgICB2YXIgY29zUGhpID0gY29zKHBoaSksXG4gICAgICAgIGsgPSAoUCAtIDEpIC8gKFAgLSBjb3NQaGkgKiBjb3MobGFtYmRhKSk7XG4gICAgcmV0dXJuIFtcbiAgICAgIGsgKiBjb3NQaGkgKiBzaW4obGFtYmRhKSxcbiAgICAgIGsgKiBzaW4ocGhpKVxuICAgIF07XG4gIH1cblxuICBmb3J3YXJkLmludmVydCA9IGZ1bmN0aW9uKHgsIHkpIHtcbiAgICB2YXIgcmhvMiA9IHggKiB4ICsgeSAqIHksXG4gICAgICAgIHJobyA9IHNxcnQocmhvMiksXG4gICAgICAgIHNpbmMgPSAoUCAtIHNxcnQoMSAtIHJobzIgKiAoUCArIDEpIC8gKFAgLSAxKSkpIC8gKChQIC0gMSkgLyByaG8gKyByaG8gLyAoUCAtIDEpKTtcbiAgICByZXR1cm4gW1xuICAgICAgYXRhbjIoeCAqIHNpbmMsIHJobyAqIHNxcnQoMSAtIHNpbmMgKiBzaW5jKSksXG4gICAgICByaG8gPyBhc2luKHkgKiBzaW5jIC8gcmhvKSA6IDBcbiAgICBdO1xuICB9O1xuXG4gIHJldHVybiBmb3J3YXJkO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc2F0ZWxsaXRlUmF3KFAsIG9tZWdhKSB7XG4gIHZhciB2ZXJ0aWNhbCA9IHNhdGVsbGl0ZVZlcnRpY2FsUmF3KFApO1xuICBpZiAoIW9tZWdhKSByZXR1cm4gdmVydGljYWw7XG4gIHZhciBjb3NPbWVnYSA9IGNvcyhvbWVnYSksXG4gICAgICBzaW5PbWVnYSA9IHNpbihvbWVnYSk7XG5cbiAgZnVuY3Rpb24gZm9yd2FyZChsYW1iZGEsIHBoaSkge1xuICAgIHZhciBjb29yZGluYXRlcyA9IHZlcnRpY2FsKGxhbWJkYSwgcGhpKSxcbiAgICAgICAgeSA9IGNvb3JkaW5hdGVzWzFdLFxuICAgICAgICBBID0geSAqIHNpbk9tZWdhIC8gKFAgLSAxKSArIGNvc09tZWdhO1xuICAgIHJldHVybiBbXG4gICAgICBjb29yZGluYXRlc1swXSAqIGNvc09tZWdhIC8gQSxcbiAgICAgIHkgLyBBXG4gICAgXTtcbiAgfVxuXG4gIGZvcndhcmQuaW52ZXJ0ID0gZnVuY3Rpb24oeCwgeSkge1xuICAgIHZhciBrID0gKFAgLSAxKSAvIChQIC0gMSAtIHkgKiBzaW5PbWVnYSk7XG4gICAgcmV0dXJuIHZlcnRpY2FsLmludmVydChrICogeCwgayAqIHkgKiBjb3NPbWVnYSk7XG4gIH07XG5cbiAgcmV0dXJuIGZvcndhcmQ7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKCkge1xuICB2YXIgZGlzdGFuY2UgPSAyLFxuICAgICAgb21lZ2EgPSAwLFxuICAgICAgbSA9IHByb2plY3Rpb25NdXRhdG9yKHNhdGVsbGl0ZVJhdyksXG4gICAgICBwID0gbShkaXN0YW5jZSwgb21lZ2EpO1xuXG4gIC8vIEFzIGEgbXVsdGlwbGUgb2YgcmFkaXVzLlxuICBwLmRpc3RhbmNlID0gZnVuY3Rpb24oXykge1xuICAgIGlmICghYXJndW1lbnRzLmxlbmd0aCkgcmV0dXJuIGRpc3RhbmNlO1xuICAgIHJldHVybiBtKGRpc3RhbmNlID0gK18sIG9tZWdhKTtcbiAgfTtcblxuICBwLnRpbHQgPSBmdW5jdGlvbihfKSB7XG4gICAgaWYgKCFhcmd1bWVudHMubGVuZ3RoKSByZXR1cm4gb21lZ2EgKiBkZWdyZWVzO1xuICAgIHJldHVybiBtKGRpc3RhbmNlLCBvbWVnYSA9IF8gKiByYWRpYW5zKTtcbiAgfTtcblxuICByZXR1cm4gcFxuICAgICAgLnNjYWxlKDQzMi4xNDcpXG4gICAgICAuY2xpcEFuZ2xlKGFjb3MoMSAvIGRpc3RhbmNlKSAqIGRlZ3JlZXMgLSAxZS02KTtcbn1cblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2QzLWdlby1wcm9qZWN0aW9uL3NyYy9zYXRlbGxpdGUuanNcbi8vIG1vZHVsZSBpZCA9IC4vbm9kZV9tb2R1bGVzL2QzLWdlby1wcm9qZWN0aW9uL3NyYy9zYXRlbGxpdGUuanNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IHtnZW9Qcm9qZWN0aW9uIGFzIHByb2plY3Rpb259IGZyb20gXCJkMy1nZW9cIjtcbmltcG9ydCB7bW9sbHdlaWRlUmF3fSBmcm9tIFwiLi9tb2xsd2VpZGVcIjtcbmltcG9ydCB7c2ludXNvaWRhbFJhd30gZnJvbSBcIi4vc2ludXNvaWRhbFwiO1xuXG5leHBvcnQgdmFyIHNpbnVNb2xsd2VpZGVQaGkgPSAwLjcxMDk4ODk1OTYyMDc1Njc7XG5cbmV4cG9ydCB2YXIgc2ludU1vbGx3ZWlkZVkgPSAwLjA1MjgwMzUyNzQ1NDI7XG5cbmV4cG9ydCBmdW5jdGlvbiBzaW51TW9sbHdlaWRlUmF3KGxhbWJkYSwgcGhpKSB7XG4gIHJldHVybiBwaGkgPiAtc2ludU1vbGx3ZWlkZVBoaVxuICAgICAgPyAobGFtYmRhID0gbW9sbHdlaWRlUmF3KGxhbWJkYSwgcGhpKSwgbGFtYmRhWzFdICs9IHNpbnVNb2xsd2VpZGVZLCBsYW1iZGEpXG4gICAgICA6IHNpbnVzb2lkYWxSYXcobGFtYmRhLCBwaGkpO1xufVxuXG5zaW51TW9sbHdlaWRlUmF3LmludmVydCA9IGZ1bmN0aW9uKHgsIHkpIHtcbiAgcmV0dXJuIHkgPiAtc2ludU1vbGx3ZWlkZVBoaVxuICAgICAgPyBtb2xsd2VpZGVSYXcuaW52ZXJ0KHgsIHkgLSBzaW51TW9sbHdlaWRlWSlcbiAgICAgIDogc2ludXNvaWRhbFJhdy5pbnZlcnQoeCwgeSk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbigpIHtcbiAgcmV0dXJuIHByb2plY3Rpb24oc2ludU1vbGx3ZWlkZVJhdylcbiAgICAgIC5yb3RhdGUoWy0yMCwgLTU1XSlcbiAgICAgIC5zY2FsZSgxNjQuMjYzKVxuICAgICAgLmNlbnRlcihbMCwgLTUuNDAzNl0pO1xufVxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvZDMtZ2VvLXByb2plY3Rpb24vc3JjL3NpbnVNb2xsd2VpZGUuanNcbi8vIG1vZHVsZSBpZCA9IC4vbm9kZV9tb2R1bGVzL2QzLWdlby1wcm9qZWN0aW9uL3NyYy9zaW51TW9sbHdlaWRlLmpzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCB7Z2VvUHJvamVjdGlvbiBhcyBwcm9qZWN0aW9ufSBmcm9tIFwiZDMtZ2VvXCI7XG5pbXBvcnQge2Nvc30gZnJvbSBcIi4vbWF0aFwiO1xuXG5leHBvcnQgZnVuY3Rpb24gc2ludXNvaWRhbFJhdyhsYW1iZGEsIHBoaSkge1xuICByZXR1cm4gW2xhbWJkYSAqIGNvcyhwaGkpLCBwaGldO1xufVxuXG5zaW51c29pZGFsUmF3LmludmVydCA9IGZ1bmN0aW9uKHgsIHkpIHtcbiAgcmV0dXJuIFt4IC8gY29zKHkpLCB5XTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKCkge1xuICByZXR1cm4gcHJvamVjdGlvbihzaW51c29pZGFsUmF3KVxuICAgICAgLnNjYWxlKDE1Mi42Myk7XG59XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9kMy1nZW8tcHJvamVjdGlvbi9zcmMvc2ludXNvaWRhbC5qc1xuLy8gbW9kdWxlIGlkID0gLi9ub2RlX21vZHVsZXMvZDMtZ2VvLXByb2plY3Rpb24vc3JjL3NpbnVzb2lkYWwuanNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IHtoYWxmUGksIHBpfSBmcm9tIFwiLi9tYXRoXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKHByb2plY3QpIHtcbiAgdmFyIGR4ID0gcHJvamVjdChoYWxmUGksIDApWzBdIC0gcHJvamVjdCgtaGFsZlBpLCAwKVswXTtcblxuICBmdW5jdGlvbiBwcm9qZWN0U3F1YXJlKGxhbWJkYSwgcGhpKSB7XG4gICAgdmFyIHMgPSBsYW1iZGEgPiAwID8gLTAuNSA6IDAuNSxcbiAgICAgICAgcG9pbnQgPSBwcm9qZWN0KGxhbWJkYSArIHMgKiBwaSwgcGhpKTtcbiAgICBwb2ludFswXSAtPSBzICogZHg7XG4gICAgcmV0dXJuIHBvaW50O1xuICB9XG5cbiAgaWYgKHByb2plY3QuaW52ZXJ0KSBwcm9qZWN0U3F1YXJlLmludmVydCA9IGZ1bmN0aW9uKHgsIHkpIHtcbiAgICB2YXIgcyA9IHggPiAwID8gLTAuNSA6IDAuNSxcbiAgICAgICAgbG9jYXRpb24gPSBwcm9qZWN0LmludmVydCh4ICsgcyAqIGR4LCB5KSxcbiAgICAgICAgbGFtYmRhID0gbG9jYXRpb25bMF0gLSBzICogcGk7XG4gICAgaWYgKGxhbWJkYSA8IC1waSkgbGFtYmRhICs9IDIgKiBwaTtcbiAgICBlbHNlIGlmIChsYW1iZGEgPiBwaSkgbGFtYmRhIC09IDIgKiBwaTtcbiAgICBsb2NhdGlvblswXSA9IGxhbWJkYTtcbiAgICByZXR1cm4gbG9jYXRpb247XG4gIH07XG5cbiAgcmV0dXJuIHByb2plY3RTcXVhcmU7XG59XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9kMy1nZW8tcHJvamVjdGlvbi9zcmMvc3F1YXJlLmpzXG4vLyBtb2R1bGUgaWQgPSAuL25vZGVfbW9kdWxlcy9kMy1nZW8tcHJvamVjdGlvbi9zcmMvc3F1YXJlLmpzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBlcHNpbG9uID0gMWUtNCxcbiAgICBlcHNpbG9uSW52ZXJzZSA9IDFlNCxcbiAgICB4MCA9IC0xODAsIHgwZSA9IHgwICsgZXBzaWxvbixcbiAgICB4MSA9IDE4MCwgeDFlID0geDEgLSBlcHNpbG9uLFxuICAgIHkwID0gLTkwLCB5MGUgPSB5MCArIGVwc2lsb24sXG4gICAgeTEgPSA5MCwgeTFlID0geTEgLSBlcHNpbG9uO1xuXG5mdW5jdGlvbiBub25lbXB0eShjb29yZGluYXRlcykge1xuICByZXR1cm4gY29vcmRpbmF0ZXMubGVuZ3RoID4gMDtcbn1cblxuZnVuY3Rpb24gcXVhbnRpemUoeCkge1xuICByZXR1cm4gTWF0aC5mbG9vcih4ICogZXBzaWxvbkludmVyc2UpIC8gZXBzaWxvbkludmVyc2U7XG59XG5cbmZ1bmN0aW9uIG5vcm1hbGl6ZVBvaW50KHkpIHtcbiAgcmV0dXJuIHkgPT09IHkwIHx8IHkgPT09IHkxID8gWzAsIHldIDogW3gwLCBxdWFudGl6ZSh5KV07IC8vIHBvbGUgb3IgYW50aW1lcmlkaWFuP1xufVxuXG5mdW5jdGlvbiBjbGFtcFBvaW50KHApIHtcbiAgdmFyIHggPSBwWzBdLCB5ID0gcFsxXSwgY2xhbXBlZCA9IGZhbHNlO1xuICBpZiAoeCA8PSB4MGUpIHggPSB4MCwgY2xhbXBlZCA9IHRydWU7XG4gIGVsc2UgaWYgKHggPj0geDFlKSB4ID0geDEsIGNsYW1wZWQgPSB0cnVlO1xuICBpZiAoeSA8PSB5MGUpIHkgPSB5MCwgY2xhbXBlZCA9IHRydWU7XG4gIGVsc2UgaWYgKHkgPj0geTFlKSB5ID0geTEsIGNsYW1wZWQgPSB0cnVlO1xuICByZXR1cm4gY2xhbXBlZCA/IFt4LCB5XSA6IHA7XG59XG5cbmZ1bmN0aW9uIGNsYW1wUG9pbnRzKHBvaW50cykge1xuICByZXR1cm4gcG9pbnRzLm1hcChjbGFtcFBvaW50KTtcbn1cblxuLy8gRm9yIGVhY2ggcmluZywgZGV0ZWN0IHdoZXJlIGl0IGNyb3NzZXMgdGhlIGFudGltZXJpZGlhbiBvciBwb2xlLlxuZnVuY3Rpb24gZXh0cmFjdEZyYWdtZW50cyhyaW5ncywgcG9seWdvbiwgZnJhZ21lbnRzKSB7XG4gIGZvciAodmFyIGogPSAwLCBtID0gcmluZ3MubGVuZ3RoOyBqIDwgbTsgKytqKSB7XG4gICAgdmFyIHJpbmcgPSByaW5nc1tqXS5zbGljZSgpO1xuXG4gICAgLy8gQnkgZGVmYXVsdCwgYXNzdW1lIHRoYXQgdGhpcyByaW5nIGRvZXNu4oCZdCBuZWVkIGFueSBzdGl0Y2hpbmcuXG4gICAgZnJhZ21lbnRzLnB1c2goe2luZGV4OiAtMSwgcG9seWdvbjogcG9seWdvbiwgcmluZzogcmluZ30pO1xuXG4gICAgZm9yICh2YXIgaSA9IDAsIG4gPSByaW5nLmxlbmd0aDsgaSA8IG47ICsraSkge1xuICAgICAgdmFyIHBvaW50ID0gcmluZ1tpXSxcbiAgICAgICAgICB4ID0gcG9pbnRbMF0sXG4gICAgICAgICAgeSA9IHBvaW50WzFdO1xuXG4gICAgICAvLyBJZiB0aGlzIGlzIGFuIGFudGltZXJpZGlhbiBvciBwb2xhciBwb2ludOKAplxuICAgICAgaWYgKHggPD0geDBlIHx8IHggPj0geDFlIHx8IHkgPD0geTBlIHx8IHkgPj0geTFlKSB7XG4gICAgICAgIHJpbmdbaV0gPSBjbGFtcFBvaW50KHBvaW50KTtcblxuICAgICAgICAvLyBBZHZhbmNlIHRocm91Z2ggYW55IGFudGltZXJpZGlhbiBvciBwb2xhciBwb2ludHPigKZcbiAgICAgICAgZm9yICh2YXIgayA9IGkgKyAxOyBrIDwgbjsgKytrKSB7XG4gICAgICAgICAgdmFyIHBvaW50ayA9IHJpbmdba10sXG4gICAgICAgICAgICAgIHhrID0gcG9pbnRrWzBdLFxuICAgICAgICAgICAgICB5ayA9IHBvaW50a1sxXTtcbiAgICAgICAgICBpZiAoeGsgPiB4MGUgJiYgeGsgPCB4MWUgJiYgeWsgPiB5MGUgJiYgeWsgPCB5MWUpIGJyZWFrO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gSWYgdGhpcyB3YXMganVzdCBhIHNpbmdsZSBhbnRpbWVyaWRpYW4gb3IgcG9sYXIgcG9pbnQsXG4gICAgICAgIC8vIHdlIGRvbuKAmXQgbmVlZCB0byBjdXQgdGhpcyByaW5nIGludG8gYSBmcmFnbWVudDtcbiAgICAgICAgLy8gd2UgY2FuIGp1c3QgbGVhdmUgaXQgYXMtaXMuXG4gICAgICAgIGlmIChrID09PSBpICsgMSkgY29udGludWU7XG5cbiAgICAgICAgLy8gT3RoZXJ3aXNlLCBpZiB0aGlzIGlzIG5vdCB0aGUgZmlyc3QgcG9pbnQgaW4gdGhlIHJpbmcsXG4gICAgICAgIC8vIGN1dCB0aGUgY3VycmVudCBmcmFnbWVudCBzbyB0aGF0IGl0IGVuZHMgYXQgdGhlIGN1cnJlbnQgcG9pbnQuXG4gICAgICAgIC8vIFRoZSBjdXJyZW50IHBvaW50IGlzIGFsc28gbm9ybWFsaXplZCBmb3IgbGF0ZXIgam9pbmluZy5cbiAgICAgICAgaWYgKGkpIHtcbiAgICAgICAgICB2YXIgZnJhZ21lbnRCZWZvcmUgPSB7aW5kZXg6IC0xLCBwb2x5Z29uOiBwb2x5Z29uLCByaW5nOiByaW5nLnNsaWNlKDAsIGkgKyAxKX07XG4gICAgICAgICAgZnJhZ21lbnRCZWZvcmUucmluZ1tmcmFnbWVudEJlZm9yZS5yaW5nLmxlbmd0aCAtIDFdID0gbm9ybWFsaXplUG9pbnQoeSk7XG4gICAgICAgICAgZnJhZ21lbnRzW2ZyYWdtZW50cy5sZW5ndGggLSAxXSA9IGZyYWdtZW50QmVmb3JlO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gSWYgdGhlIHJpbmcgc3RhcnRlZCB3aXRoIGFuIGFudGltZXJpZGlhbiBmcmFnbWVudCxcbiAgICAgICAgLy8gd2UgY2FuIGlnbm9yZSB0aGF0IGZyYWdtZW50IGVudGlyZWx5LlxuICAgICAgICBlbHNlIGZyYWdtZW50cy5wb3AoKTtcblxuICAgICAgICAvLyBJZiB0aGUgcmVtYWluZGVyIG9mIHRoZSByaW5nIGlzIGFuIGFudGltZXJpZGlhbiBmcmFnbWVudCxcbiAgICAgICAgLy8gbW92ZSBvbiB0byB0aGUgbmV4dCByaW5nLlxuICAgICAgICBpZiAoayA+PSBuKSBicmVhaztcblxuICAgICAgICAvLyBPdGhlcndpc2UsIGFkZCB0aGUgcmVtYWluaW5nIHJpbmcgZnJhZ21lbnQgYW5kIGNvbnRpbnVlLlxuICAgICAgICBmcmFnbWVudHMucHVzaCh7aW5kZXg6IC0xLCBwb2x5Z29uOiBwb2x5Z29uLCByaW5nOiByaW5nID0gcmluZy5zbGljZShrIC0gMSl9KTtcbiAgICAgICAgcmluZ1swXSA9IG5vcm1hbGl6ZVBvaW50KHJpbmdbMF1bMV0pO1xuICAgICAgICBpID0gLTE7XG4gICAgICAgIG4gPSByaW5nLmxlbmd0aDtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuLy8gTm93IHN0aXRjaCB0aGUgZnJhZ21lbnRzIGJhY2sgdG9nZXRoZXIgaW50byByaW5ncy5cbmZ1bmN0aW9uIHN0aXRjaEZyYWdtZW50cyhmcmFnbWVudHMpIHtcbiAgdmFyIGksIG4gPSBmcmFnbWVudHMubGVuZ3RoO1xuXG4gIC8vIFRvIGNvbm5lY3QgdGhlIGZyYWdtZW50cyBzdGFydC10by1lbmQsIGNyZWF0ZSBhIHNpbXBsZSBpbmRleCBieSBlbmQuXG4gIHZhciBmcmFnbWVudEJ5U3RhcnQgPSB7fSxcbiAgICAgIGZyYWdtZW50QnlFbmQgPSB7fSxcbiAgICAgIGZyYWdtZW50LFxuICAgICAgc3RhcnQsXG4gICAgICBzdGFydEZyYWdtZW50LFxuICAgICAgZW5kLFxuICAgICAgZW5kRnJhZ21lbnQ7XG5cbiAgLy8gRm9yIGVhY2ggZnJhZ21lbnTigKZcbiAgZm9yIChpID0gMDsgaSA8IG47ICsraSkge1xuICAgIGZyYWdtZW50ID0gZnJhZ21lbnRzW2ldO1xuICAgIHN0YXJ0ID0gZnJhZ21lbnQucmluZ1swXTtcbiAgICBlbmQgPSBmcmFnbWVudC5yaW5nW2ZyYWdtZW50LnJpbmcubGVuZ3RoIC0gMV07XG5cbiAgICAvLyBJZiB0aGlzIGZyYWdtZW50IGlzIGNsb3NlZCwgYWRkIGl0IGFzIGEgc3RhbmRhbG9uZSByaW5nLlxuICAgIGlmIChzdGFydFswXSA9PT0gZW5kWzBdICYmIHN0YXJ0WzFdID09PSBlbmRbMV0pIHtcbiAgICAgIGZyYWdtZW50LnBvbHlnb24ucHVzaChmcmFnbWVudC5yaW5nKTtcbiAgICAgIGZyYWdtZW50c1tpXSA9IG51bGw7XG4gICAgICBjb250aW51ZTtcbiAgICB9XG5cbiAgICBmcmFnbWVudC5pbmRleCA9IGk7XG4gICAgZnJhZ21lbnRCeVN0YXJ0W3N0YXJ0XSA9IGZyYWdtZW50QnlFbmRbZW5kXSA9IGZyYWdtZW50O1xuICB9XG5cbiAgLy8gRm9yIGVhY2ggb3BlbiBmcmFnbWVudOKAplxuICBmb3IgKGkgPSAwOyBpIDwgbjsgKytpKSB7XG4gICAgZnJhZ21lbnQgPSBmcmFnbWVudHNbaV07XG4gICAgaWYgKGZyYWdtZW50KSB7XG4gICAgICBzdGFydCA9IGZyYWdtZW50LnJpbmdbMF07XG4gICAgICBlbmQgPSBmcmFnbWVudC5yaW5nW2ZyYWdtZW50LnJpbmcubGVuZ3RoIC0gMV07XG4gICAgICBzdGFydEZyYWdtZW50ID0gZnJhZ21lbnRCeUVuZFtzdGFydF07XG4gICAgICBlbmRGcmFnbWVudCA9IGZyYWdtZW50QnlTdGFydFtlbmRdO1xuXG4gICAgICBkZWxldGUgZnJhZ21lbnRCeVN0YXJ0W3N0YXJ0XTtcbiAgICAgIGRlbGV0ZSBmcmFnbWVudEJ5RW5kW2VuZF07XG5cbiAgICAgIC8vIElmIHRoaXMgZnJhZ21lbnQgaXMgY2xvc2VkLCBhZGQgaXQgYXMgYSBzdGFuZGFsb25lIHJpbmcuXG4gICAgICBpZiAoc3RhcnRbMF0gPT09IGVuZFswXSAmJiBzdGFydFsxXSA9PT0gZW5kWzFdKSB7XG4gICAgICAgIGZyYWdtZW50LnBvbHlnb24ucHVzaChmcmFnbWVudC5yaW5nKTtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmIChzdGFydEZyYWdtZW50KSB7XG4gICAgICAgIGRlbGV0ZSBmcmFnbWVudEJ5RW5kW3N0YXJ0XTtcbiAgICAgICAgZGVsZXRlIGZyYWdtZW50QnlTdGFydFtzdGFydEZyYWdtZW50LnJpbmdbMF1dO1xuICAgICAgICBzdGFydEZyYWdtZW50LnJpbmcucG9wKCk7IC8vIGRyb3AgdGhlIHNoYXJlZCBjb29yZGluYXRlXG4gICAgICAgIGZyYWdtZW50c1tzdGFydEZyYWdtZW50LmluZGV4XSA9IG51bGw7XG4gICAgICAgIGZyYWdtZW50ID0ge2luZGV4OiAtMSwgcG9seWdvbjogc3RhcnRGcmFnbWVudC5wb2x5Z29uLCByaW5nOiBzdGFydEZyYWdtZW50LnJpbmcuY29uY2F0KGZyYWdtZW50LnJpbmcpfTtcblxuICAgICAgICBpZiAoc3RhcnRGcmFnbWVudCA9PT0gZW5kRnJhZ21lbnQpIHtcbiAgICAgICAgICAvLyBDb25uZWN0IGJvdGggZW5kcyB0byB0aGlzIHNpbmdsZSBmcmFnbWVudCB0byBjcmVhdGUgYSByaW5nLlxuICAgICAgICAgIGZyYWdtZW50LnBvbHlnb24ucHVzaChmcmFnbWVudC5yaW5nKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBmcmFnbWVudC5pbmRleCA9IG4rKztcbiAgICAgICAgICBmcmFnbWVudHMucHVzaChmcmFnbWVudEJ5U3RhcnRbZnJhZ21lbnQucmluZ1swXV0gPSBmcmFnbWVudEJ5RW5kW2ZyYWdtZW50LnJpbmdbZnJhZ21lbnQucmluZy5sZW5ndGggLSAxXV0gPSBmcmFnbWVudCk7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAoZW5kRnJhZ21lbnQpIHtcbiAgICAgICAgZGVsZXRlIGZyYWdtZW50QnlTdGFydFtlbmRdO1xuICAgICAgICBkZWxldGUgZnJhZ21lbnRCeUVuZFtlbmRGcmFnbWVudC5yaW5nW2VuZEZyYWdtZW50LnJpbmcubGVuZ3RoIC0gMV1dO1xuICAgICAgICBmcmFnbWVudC5yaW5nLnBvcCgpOyAvLyBkcm9wIHRoZSBzaGFyZWQgY29vcmRpbmF0ZVxuICAgICAgICBmcmFnbWVudCA9IHtpbmRleDogbisrLCBwb2x5Z29uOiBlbmRGcmFnbWVudC5wb2x5Z29uLCByaW5nOiBmcmFnbWVudC5yaW5nLmNvbmNhdChlbmRGcmFnbWVudC5yaW5nKX07XG4gICAgICAgIGZyYWdtZW50c1tlbmRGcmFnbWVudC5pbmRleF0gPSBudWxsO1xuICAgICAgICBmcmFnbWVudHMucHVzaChmcmFnbWVudEJ5U3RhcnRbZnJhZ21lbnQucmluZ1swXV0gPSBmcmFnbWVudEJ5RW5kW2ZyYWdtZW50LnJpbmdbZnJhZ21lbnQucmluZy5sZW5ndGggLSAxXV0gPSBmcmFnbWVudCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBmcmFnbWVudC5yaW5nLnB1c2goZnJhZ21lbnQucmluZ1swXSk7IC8vIGNsb3NlIHJpbmdcbiAgICAgICAgZnJhZ21lbnQucG9seWdvbi5wdXNoKGZyYWdtZW50LnJpbmcpO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBzdGl0Y2hGZWF0dXJlKGlucHV0KSB7XG4gIHZhciBvdXRwdXQgPSB7dHlwZTogXCJGZWF0dXJlXCIsIGdlb21ldHJ5OiBzdGl0Y2hHZW9tZXRyeShpbnB1dC5nZW9tZXRyeSl9O1xuICBpZiAoaW5wdXQuaWQgIT0gbnVsbCkgb3V0cHV0LmlkID0gaW5wdXQuaWQ7XG4gIGlmIChpbnB1dC5iYm94ICE9IG51bGwpIG91dHB1dC5iYm94ID0gaW5wdXQuYmJveDtcbiAgaWYgKGlucHV0LnByb3BlcnRpZXMgIT0gbnVsbCkgb3V0cHV0LnByb3BlcnRpZXMgPSBpbnB1dC5wcm9wZXJ0aWVzO1xuICByZXR1cm4gb3V0cHV0O1xufVxuXG5mdW5jdGlvbiBzdGl0Y2hHZW9tZXRyeShpbnB1dCkge1xuICBpZiAoaW5wdXQgPT0gbnVsbCkgcmV0dXJuIGlucHV0O1xuICB2YXIgb3V0cHV0LCBmcmFnbWVudHMsIGksIG47XG4gIHN3aXRjaCAoaW5wdXQudHlwZSkge1xuICAgIGNhc2UgXCJHZW9tZXRyeUNvbGxlY3Rpb25cIjogb3V0cHV0ID0ge3R5cGU6IFwiR2VvbWV0cnlDb2xsZWN0aW9uXCIsIGdlb21ldHJpZXM6IGlucHV0Lmdlb21ldHJpZXMubWFwKHN0aXRjaEdlb21ldHJ5KX07IGJyZWFrO1xuICAgIGNhc2UgXCJQb2ludFwiOiBvdXRwdXQgPSB7dHlwZTogXCJQb2ludFwiLCBjb29yZGluYXRlczogY2xhbXBQb2ludChpbnB1dC5jb29yZGluYXRlcyl9OyBicmVhaztcbiAgICBjYXNlIFwiTXVsdGlQb2ludFwiOiBjYXNlIFwiTGluZVN0cmluZ1wiOiBvdXRwdXQgPSB7dHlwZTogaW5wdXQudHlwZSwgY29vcmRpbmF0ZXM6IGNsYW1wUG9pbnRzKGlucHV0LmNvb3JkaW5hdGVzKX07IGJyZWFrO1xuICAgIGNhc2UgXCJNdWx0aUxpbmVTdHJpbmdcIjogb3V0cHV0ID0ge3R5cGU6IFwiTXVsdGlMaW5lU3RyaW5nXCIsIGNvb3JkaW5hdGVzOiBpbnB1dC5jb29yZGluYXRlcy5tYXAoY2xhbXBQb2ludHMpfTsgYnJlYWs7XG4gICAgY2FzZSBcIlBvbHlnb25cIjoge1xuICAgICAgdmFyIHBvbHlnb24gPSBbXTtcbiAgICAgIGV4dHJhY3RGcmFnbWVudHMoaW5wdXQuY29vcmRpbmF0ZXMsIHBvbHlnb24sIGZyYWdtZW50cyA9IFtdKTtcbiAgICAgIHN0aXRjaEZyYWdtZW50cyhmcmFnbWVudHMpO1xuICAgICAgb3V0cHV0ID0ge3R5cGU6IFwiUG9seWdvblwiLCBjb29yZGluYXRlczogcG9seWdvbn07XG4gICAgICBicmVhaztcbiAgICB9XG4gICAgY2FzZSBcIk11bHRpUG9seWdvblwiOiB7XG4gICAgICBmcmFnbWVudHMgPSBbXSwgaSA9IC0xLCBuID0gaW5wdXQuY29vcmRpbmF0ZXMubGVuZ3RoO1xuICAgICAgdmFyIHBvbHlnb25zID0gbmV3IEFycmF5KG4pO1xuICAgICAgd2hpbGUgKCsraSA8IG4pIGV4dHJhY3RGcmFnbWVudHMoaW5wdXQuY29vcmRpbmF0ZXNbaV0sIHBvbHlnb25zW2ldID0gW10sIGZyYWdtZW50cyk7XG4gICAgICBzdGl0Y2hGcmFnbWVudHMoZnJhZ21lbnRzKTtcbiAgICAgIG91dHB1dCA9IHt0eXBlOiBcIk11bHRpUG9seWdvblwiLCBjb29yZGluYXRlczogcG9seWdvbnMuZmlsdGVyKG5vbmVtcHR5KX07XG4gICAgICBicmVhaztcbiAgICB9XG4gICAgZGVmYXVsdDogcmV0dXJuIGlucHV0O1xuICB9XG4gIGlmIChpbnB1dC5iYm94ICE9IG51bGwpIG91dHB1dC5iYm94ID0gaW5wdXQuYmJveDtcbiAgcmV0dXJuIG91dHB1dDtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oaW5wdXQpIHtcbiAgaWYgKGlucHV0ID09IG51bGwpIHJldHVybiBpbnB1dDtcbiAgc3dpdGNoIChpbnB1dC50eXBlKSB7XG4gICAgY2FzZSBcIkZlYXR1cmVcIjogcmV0dXJuIHN0aXRjaEZlYXR1cmUoaW5wdXQpO1xuICAgIGNhc2UgXCJGZWF0dXJlQ29sbGVjdGlvblwiOiB7XG4gICAgICB2YXIgb3V0cHV0ID0ge3R5cGU6IFwiRmVhdHVyZUNvbGxlY3Rpb25cIiwgZmVhdHVyZXM6IGlucHV0LmZlYXR1cmVzLm1hcChzdGl0Y2hGZWF0dXJlKX07XG4gICAgICBpZiAoaW5wdXQuYmJveCAhPSBudWxsKSBvdXRwdXQuYmJveCA9IGlucHV0LmJib3g7XG4gICAgICByZXR1cm4gb3V0cHV0O1xuICAgIH1cbiAgICBkZWZhdWx0OiByZXR1cm4gc3RpdGNoR2VvbWV0cnkoaW5wdXQpO1xuICB9XG59XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9kMy1nZW8tcHJvamVjdGlvbi9zcmMvc3RpdGNoLmpzXG4vLyBtb2R1bGUgaWQgPSAuL25vZGVfbW9kdWxlcy9kMy1nZW8tcHJvamVjdGlvbi9zcmMvc3RpdGNoLmpzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCB7Z2VvUHJvamVjdGlvbiBhcyBwcm9qZWN0aW9ufSBmcm9tIFwiZDMtZ2VvXCI7XG5pbXBvcnQge2F0YW4sIHF1YXJ0ZXJQaSwgc2luLCB0YW59IGZyb20gXCIuL21hdGhcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIHRpbWVzUmF3KGxhbWJkYSwgcGhpKSB7XG4gIHZhciB0ID0gdGFuKHBoaSAvIDIpLFxuICAgICAgcyA9IHNpbihxdWFydGVyUGkgKiB0KTtcbiAgcmV0dXJuIFtcbiAgICBsYW1iZGEgKiAoMC43NDQ4MiAtIDAuMzQ1ODggKiBzICogcyksXG4gICAgMS43MDcxMSAqIHRcbiAgXTtcbn1cblxudGltZXNSYXcuaW52ZXJ0ID0gZnVuY3Rpb24oeCwgeSkge1xuICB2YXIgdCA9IHkgLyAxLjcwNzExLFxuICAgICAgcyA9IHNpbihxdWFydGVyUGkgKiB0KTtcbiAgcmV0dXJuIFtcbiAgICB4IC8gKDAuNzQ0ODIgLSAwLjM0NTg4ICogcyAqIHMpLFxuICAgIDIgKiBhdGFuKHQpXG4gIF07XG59O1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbigpIHtcbiAgcmV0dXJuIHByb2plY3Rpb24odGltZXNSYXcpXG4gICAgICAuc2NhbGUoMTQ2LjE1Myk7XG59XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9kMy1nZW8tcHJvamVjdGlvbi9zcmMvdGltZXMuanNcbi8vIG1vZHVsZSBpZCA9IC4vbm9kZV9tb2R1bGVzL2QzLWdlby1wcm9qZWN0aW9uL3NyYy90aW1lcy5qc1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQge2dlb0ludGVycG9sYXRlIGFzIGludGVycG9sYXRlLCBnZW9Qcm9qZWN0aW9uIGFzIHByb2plY3Rpb24sIGdlb1JvdGF0aW9uIGFzIHJvdGF0aW9ufSBmcm9tIFwiZDMtZ2VvXCI7XG5pbXBvcnQge2FzaW4sIGRlZ3JlZXMsIHBpLCBzaW4sIHJhZGlhbnN9IGZyb20gXCIuL21hdGhcIjtcblxuLy8gQ29tcHV0ZSB0aGUgb3JpZ2luIGFzIHRoZSBtaWRwb2ludCBvZiB0aGUgdHdvIHJlZmVyZW5jZSBwb2ludHMuXG4vLyBSb3RhdGUgb25lIG9mIHRoZSByZWZlcmVuY2UgcG9pbnRzIGJ5IHRoZSBvcmlnaW4uXG4vLyBBcHBseSB0aGUgc3BoZXJpY2FsIGxhdyBvZiBzaW5lcyB0byBjb21wdXRlIGdhbW1hIHJvdGF0aW9uLlxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24ocmF3LCBwMCwgcDEpIHtcbiAgdmFyIGkgPSBpbnRlcnBvbGF0ZShwMCwgcDEpLFxuICAgICAgbyA9IGkoMC41KSxcbiAgICAgIGEgPSByb3RhdGlvbihbLW9bMF0sIC1vWzFdXSkocDApLFxuICAgICAgYiA9IGkuZGlzdGFuY2UgLyAyLFxuICAgICAgeSA9IC1hc2luKHNpbihhWzFdICogcmFkaWFucykgLyBzaW4oYikpLFxuICAgICAgUiA9IFstb1swXSwgLW9bMV0sIC0oYVswXSA+IDAgPyBwaSAtIHkgOiB5KSAqIGRlZ3JlZXNdLFxuICAgICAgcCA9IHByb2plY3Rpb24ocmF3KGIpKS5yb3RhdGUoUiksXG4gICAgICByID0gcm90YXRpb24oUiksXG4gICAgICBjZW50ZXIgPSBwLmNlbnRlcjtcblxuICBkZWxldGUgcC5yb3RhdGU7XG5cbiAgcC5jZW50ZXIgPSBmdW5jdGlvbihfKSB7XG4gICAgcmV0dXJuIGFyZ3VtZW50cy5sZW5ndGggPyBjZW50ZXIocihfKSkgOiByLmludmVydChjZW50ZXIoKSk7XG4gIH07XG5cbiAgcmV0dXJuIHBcbiAgICAgIC5jbGlwQW5nbGUoOTApO1xufVxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvZDMtZ2VvLXByb2plY3Rpb24vc3JjL3R3b1BvaW50LmpzXG4vLyBtb2R1bGUgaWQgPSAuL25vZGVfbW9kdWxlcy9kMy1nZW8tcHJvamVjdGlvbi9zcmMvdHdvUG9pbnQuanNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IHtnZW9Hbm9tb25pY1JhdyBhcyBnbm9tb25pY1Jhd30gZnJvbSBcImQzLWdlb1wiO1xuaW1wb3J0IHtjb3N9IGZyb20gXCIuL21hdGhcIjtcbmltcG9ydCB0d29Qb2ludCBmcm9tIFwiLi90d29Qb2ludFwiO1xuXG5leHBvcnQgZnVuY3Rpb24gdHdvUG9pbnRBemltdXRoYWxSYXcoZCkge1xuICB2YXIgY29zZCA9IGNvcyhkKTtcblxuICBmdW5jdGlvbiBmb3J3YXJkKGxhbWJkYSwgcGhpKSB7XG4gICAgdmFyIGNvb3JkaW5hdGVzID0gZ25vbW9uaWNSYXcobGFtYmRhLCBwaGkpO1xuICAgIGNvb3JkaW5hdGVzWzBdICo9IGNvc2Q7XG4gICAgcmV0dXJuIGNvb3JkaW5hdGVzO1xuICB9XG5cbiAgZm9yd2FyZC5pbnZlcnQgPSBmdW5jdGlvbih4LCB5KSB7XG4gICAgcmV0dXJuIGdub21vbmljUmF3LmludmVydCh4IC8gY29zZCwgeSk7XG4gIH07XG5cbiAgcmV0dXJuIGZvcndhcmQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0d29Qb2ludEF6aW11dGhhbFVzYSgpIHtcbiAgcmV0dXJuIHR3b1BvaW50QXppbXV0aGFsKFstMTU4LCAyMS41XSwgWy03NywgMzldKVxuICAgICAgLmNsaXBBbmdsZSg2MClcbiAgICAgIC5zY2FsZSg0MDApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB0d29Qb2ludEF6aW11dGhhbChwMCwgcDEpIHtcbiAgcmV0dXJuIHR3b1BvaW50KHR3b1BvaW50QXppbXV0aGFsUmF3LCBwMCwgcDEpO1xufVxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvZDMtZ2VvLXByb2plY3Rpb24vc3JjL3R3b1BvaW50QXppbXV0aGFsLmpzXG4vLyBtb2R1bGUgaWQgPSAuL25vZGVfbW9kdWxlcy9kMy1nZW8tcHJvamVjdGlvbi9zcmMvdHdvUG9pbnRBemltdXRoYWwuanNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IHtnZW9BemltdXRoYWxFcXVpZGlzdGFudFJhdyBhcyBhemltdXRoYWxFcXVpZGlzdGFudFJhd30gZnJvbSBcImQzLWdlb1wiO1xuaW1wb3J0IHthY29zLCBhdGFuMiwgY29zLCBzaW4sIHNxcnQsIHRhbn0gZnJvbSBcIi4vbWF0aFwiO1xuaW1wb3J0IHR3b1BvaW50IGZyb20gXCIuL3R3b1BvaW50XCI7XG5cbi8vIFRPRE8gY2xpcCB0byBlbGxpcHNlXG5leHBvcnQgZnVuY3Rpb24gdHdvUG9pbnRFcXVpZGlzdGFudFJhdyh6MCkge1xuICBpZiAoISh6MCAqPSAyKSkgcmV0dXJuIGF6aW11dGhhbEVxdWlkaXN0YW50UmF3O1xuICB2YXIgbGFtYmRhYSA9IC16MCAvIDIsXG4gICAgICBsYW1iZGFiID0gLWxhbWJkYWEsXG4gICAgICB6MDIgPSB6MCAqIHowLFxuICAgICAgdGFuTGFtYmRhMCA9IHRhbihsYW1iZGFiKSxcbiAgICAgIFMgPSAwLjUgLyBzaW4obGFtYmRhYik7XG5cbiAgZnVuY3Rpb24gZm9yd2FyZChsYW1iZGEsIHBoaSkge1xuICAgIHZhciB6YSA9IGFjb3MoY29zKHBoaSkgKiBjb3MobGFtYmRhIC0gbGFtYmRhYSkpLFxuICAgICAgICB6YiA9IGFjb3MoY29zKHBoaSkgKiBjb3MobGFtYmRhIC0gbGFtYmRhYikpLFxuICAgICAgICB5cyA9IHBoaSA8IDAgPyAtMSA6IDE7XG4gICAgemEgKj0gemEsIHpiICo9IHpiO1xuICAgIHJldHVybiBbXG4gICAgICAoemEgLSB6YikgLyAoMiAqIHowKSxcbiAgICAgIHlzICogc3FydCg0ICogejAyICogemIgLSAoejAyIC0gemEgKyB6YikgKiAoejAyIC0gemEgKyB6YikpIC8gKDIgKiB6MClcbiAgICBdO1xuICB9XG5cbiAgZm9yd2FyZC5pbnZlcnQgPSBmdW5jdGlvbih4LCB5KSB7XG4gICAgdmFyIHkyID0geSAqIHksXG4gICAgICAgIGNvc3phID0gY29zKHNxcnQoeTIgKyAodCA9IHggKyBsYW1iZGFhKSAqIHQpKSxcbiAgICAgICAgY29zemIgPSBjb3Moc3FydCh5MiArICh0ID0geCArIGxhbWJkYWIpICogdCkpLFxuICAgICAgICB0LFxuICAgICAgICBkO1xuICAgIHJldHVybiBbXG4gICAgICBhdGFuMihkID0gY29zemEgLSBjb3N6YiwgdCA9IChjb3N6YSArIGNvc3piKSAqIHRhbkxhbWJkYTApLFxuICAgICAgKHkgPCAwID8gLTEgOiAxKSAqIGFjb3Moc3FydCh0ICogdCArIGQgKiBkKSAqIFMpXG4gICAgXTtcbiAgfTtcblxuICByZXR1cm4gZm9yd2FyZDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHR3b1BvaW50RXF1aWRpc3RhbnRVc2EoKSB7XG4gIHJldHVybiB0d29Qb2ludEVxdWlkaXN0YW50KFstMTU4LCAyMS41XSwgWy03NywgMzldKVxuICAgICAgLmNsaXBBbmdsZSgxMzApXG4gICAgICAuc2NhbGUoMTIyLjU3MSk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHR3b1BvaW50RXF1aWRpc3RhbnQocDAsIHAxKSB7XG4gIHJldHVybiB0d29Qb2ludCh0d29Qb2ludEVxdWlkaXN0YW50UmF3LCBwMCwgcDEpO1xufVxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvZDMtZ2VvLXByb2plY3Rpb24vc3JjL3R3b1BvaW50RXF1aWRpc3RhbnQuanNcbi8vIG1vZHVsZSBpZCA9IC4vbm9kZV9tb2R1bGVzL2QzLWdlby1wcm9qZWN0aW9uL3NyYy90d29Qb2ludEVxdWlkaXN0YW50LmpzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCB7Z2VvUHJvamVjdGlvbiBhcyBwcm9qZWN0aW9ufSBmcm9tIFwiZDMtZ2VvXCI7XG5pbXBvcnQge2FicywgYWNvcywgYXNpbiwgYXRhbiwgY29zLCBlcHNpbG9uLCBoYWxmUGksIHBpLCBzaWduLCBzaW4sIHNxcnQsIHRhbn0gZnJvbSBcIi4vbWF0aFwiO1xuXG5leHBvcnQgZnVuY3Rpb24gdmFuRGVyR3JpbnRlblJhdyhsYW1iZGEsIHBoaSkge1xuICBpZiAoYWJzKHBoaSkgPCBlcHNpbG9uKSByZXR1cm4gW2xhbWJkYSwgMF07XG4gIHZhciBzaW5UaGV0YSA9IGFicyhwaGkgLyBoYWxmUGkpLFxuICAgICAgdGhldGEgPSBhc2luKHNpblRoZXRhKTtcbiAgaWYgKGFicyhsYW1iZGEpIDwgZXBzaWxvbiB8fCBhYnMoYWJzKHBoaSkgLSBoYWxmUGkpIDwgZXBzaWxvbikgcmV0dXJuIFswLCBzaWduKHBoaSkgKiBwaSAqIHRhbih0aGV0YSAvIDIpXTtcbiAgdmFyIGNvc1RoZXRhID0gY29zKHRoZXRhKSxcbiAgICAgIEEgPSBhYnMocGkgLyBsYW1iZGEgLSBsYW1iZGEgLyBwaSkgLyAyLFxuICAgICAgQTIgPSBBICogQSxcbiAgICAgIEcgPSBjb3NUaGV0YSAvIChzaW5UaGV0YSArIGNvc1RoZXRhIC0gMSksXG4gICAgICBQID0gRyAqICgyIC8gc2luVGhldGEgLSAxKSxcbiAgICAgIFAyID0gUCAqIFAsXG4gICAgICBQMl9BMiA9IFAyICsgQTIsXG4gICAgICBHX1AyID0gRyAtIFAyLFxuICAgICAgUSA9IEEyICsgRztcbiAgcmV0dXJuIFtcbiAgICBzaWduKGxhbWJkYSkgKiBwaSAqIChBICogR19QMiArIHNxcnQoQTIgKiBHX1AyICogR19QMiAtIFAyX0EyICogKEcgKiBHIC0gUDIpKSkgLyBQMl9BMixcbiAgICBzaWduKHBoaSkgKiBwaSAqIChQICogUSAtIEEgKiBzcXJ0KChBMiArIDEpICogUDJfQTIgLSBRICogUSkpIC8gUDJfQTJcbiAgXTtcbn1cblxudmFuRGVyR3JpbnRlblJhdy5pbnZlcnQgPSBmdW5jdGlvbih4LCB5KSB7XG4gIGlmIChhYnMoeSkgPCBlcHNpbG9uKSByZXR1cm4gW3gsIDBdO1xuICBpZiAoYWJzKHgpIDwgZXBzaWxvbikgcmV0dXJuIFswLCBoYWxmUGkgKiBzaW4oMiAqIGF0YW4oeSAvIHBpKSldO1xuICB2YXIgeDIgPSAoeCAvPSBwaSkgKiB4LFxuICAgICAgeTIgPSAoeSAvPSBwaSkgKiB5LFxuICAgICAgeDJfeTIgPSB4MiArIHkyLFxuICAgICAgeiA9IHgyX3kyICogeDJfeTIsXG4gICAgICBjMSA9IC1hYnMoeSkgKiAoMSArIHgyX3kyKSxcbiAgICAgIGMyID0gYzEgLSAyICogeTIgKyB4MixcbiAgICAgIGMzID0gLTIgKiBjMSArIDEgKyAyICogeTIgKyB6LFxuICAgICAgZCA9IHkyIC8gYzMgKyAoMiAqIGMyICogYzIgKiBjMiAvIChjMyAqIGMzICogYzMpIC0gOSAqIGMxICogYzIgLyAoYzMgKiBjMykpIC8gMjcsXG4gICAgICBhMSA9IChjMSAtIGMyICogYzIgLyAoMyAqIGMzKSkgLyBjMyxcbiAgICAgIG0xID0gMiAqIHNxcnQoLWExIC8gMyksXG4gICAgICB0aGV0YTEgPSBhY29zKDMgKiBkIC8gKGExICogbTEpKSAvIDM7XG4gIHJldHVybiBbXG4gICAgcGkgKiAoeDJfeTIgLSAxICsgc3FydCgxICsgMiAqICh4MiAtIHkyKSArIHopKSAvICgyICogeCksXG4gICAgc2lnbih5KSAqIHBpICogKC1tMSAqIGNvcyh0aGV0YTEgKyBwaSAvIDMpIC0gYzIgLyAoMyAqIGMzKSlcbiAgXTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKCkge1xuICByZXR1cm4gcHJvamVjdGlvbih2YW5EZXJHcmludGVuUmF3KVxuICAgICAgLnNjYWxlKDc5LjQxODMpO1xufVxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvZDMtZ2VvLXByb2plY3Rpb24vc3JjL3ZhbkRlckdyaW50ZW4uanNcbi8vIG1vZHVsZSBpZCA9IC4vbm9kZV9tb2R1bGVzL2QzLWdlby1wcm9qZWN0aW9uL3NyYy92YW5EZXJHcmludGVuLmpzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCB7Z2VvUHJvamVjdGlvbiBhcyBwcm9qZWN0aW9ufSBmcm9tIFwiZDMtZ2VvXCI7XG5pbXBvcnQge2FicywgYXNpbiwgYXRhbiwgYXRhbjIsIGNvcywgaGFsZlBpLCBlcHNpbG9uLCBwaSwgc2lnbiwgc2luLCBzcXJ0LCB0YW59IGZyb20gXCIuL21hdGhcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIHZhbkRlckdyaW50ZW4yUmF3KGxhbWJkYSwgcGhpKSB7XG4gIGlmIChhYnMocGhpKSA8IGVwc2lsb24pIHJldHVybiBbbGFtYmRhLCAwXTtcbiAgdmFyIHNpblRoZXRhID0gYWJzKHBoaSAvIGhhbGZQaSksXG4gICAgICB0aGV0YSA9IGFzaW4oc2luVGhldGEpO1xuICBpZiAoYWJzKGxhbWJkYSkgPCBlcHNpbG9uIHx8IGFicyhhYnMocGhpKSAtIGhhbGZQaSkgPCBlcHNpbG9uKSByZXR1cm4gWzAsIHNpZ24ocGhpKSAqIHBpICogdGFuKHRoZXRhIC8gMildO1xuICB2YXIgY29zVGhldGEgPSBjb3ModGhldGEpLFxuICAgICAgQSA9IGFicyhwaSAvIGxhbWJkYSAtIGxhbWJkYSAvIHBpKSAvIDIsXG4gICAgICBBMiA9IEEgKiBBLFxuICAgICAgeDEgPSBjb3NUaGV0YSAqIChzcXJ0KDEgKyBBMikgLSBBICogY29zVGhldGEpIC8gKDEgKyBBMiAqIHNpblRoZXRhICogc2luVGhldGEpO1xuICByZXR1cm4gW1xuICAgIHNpZ24obGFtYmRhKSAqIHBpICogeDEsXG4gICAgc2lnbihwaGkpICogcGkgKiBzcXJ0KDEgLSB4MSAqICgyICogQSArIHgxKSlcbiAgXTtcbn1cblxudmFuRGVyR3JpbnRlbjJSYXcuaW52ZXJ0ID0gZnVuY3Rpb24oeCwgeSkge1xuICBpZiAoIXgpIHJldHVybiBbMCwgaGFsZlBpICogc2luKDIgKiBhdGFuKHkgLyBwaSkpXTtcbiAgdmFyIHgxID0gYWJzKHggLyBwaSksXG4gICAgICBBID0gKDEgLSB4MSAqIHgxIC0gKHkgLz0gcGkpICogeSkgLyAoMiAqIHgxKSxcbiAgICAgIEEyID0gQSAqIEEsXG4gICAgICBCID0gc3FydChBMiArIDEpO1xuICByZXR1cm4gW1xuICAgIHNpZ24oeCkgKiBwaSAqIChCIC0gQSksXG4gICAgc2lnbih5KSAqIGhhbGZQaSAqIHNpbigyICogYXRhbjIoc3FydCgoMSAtIDIgKiBBICogeDEpICogKEEgKyBCKSAtIHgxKSwgc3FydChCICsgQSArIHgxKSkpXG4gIF07XG59O1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbigpIHtcbiAgcmV0dXJuIHByb2plY3Rpb24odmFuRGVyR3JpbnRlbjJSYXcpXG4gICAgICAuc2NhbGUoNzkuNDE4Myk7XG59XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9kMy1nZW8tcHJvamVjdGlvbi9zcmMvdmFuRGVyR3JpbnRlbjIuanNcbi8vIG1vZHVsZSBpZCA9IC4vbm9kZV9tb2R1bGVzL2QzLWdlby1wcm9qZWN0aW9uL3NyYy92YW5EZXJHcmludGVuMi5qc1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQge2dlb1Byb2plY3Rpb24gYXMgcHJvamVjdGlvbn0gZnJvbSBcImQzLWdlb1wiO1xuaW1wb3J0IHthYnMsIGFzaW4sIGF0YW4sIGNvcywgZXBzaWxvbiwgaGFsZlBpLCBwaSwgc2lnbiwgc2luLCBzcXJ0LCB0YW59IGZyb20gXCIuL21hdGhcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIHZhbkRlckdyaW50ZW4zUmF3KGxhbWJkYSwgcGhpKSB7XG4gIGlmIChhYnMocGhpKSA8IGVwc2lsb24pIHJldHVybiBbbGFtYmRhLCAwXTtcbiAgdmFyIHNpblRoZXRhID0gcGhpIC8gaGFsZlBpLFxuICAgICAgdGhldGEgPSBhc2luKHNpblRoZXRhKTtcbiAgaWYgKGFicyhsYW1iZGEpIDwgZXBzaWxvbiB8fCBhYnMoYWJzKHBoaSkgLSBoYWxmUGkpIDwgZXBzaWxvbikgcmV0dXJuIFswLCBwaSAqIHRhbih0aGV0YSAvIDIpXTtcbiAgdmFyIEEgPSAocGkgLyBsYW1iZGEgLSBsYW1iZGEgLyBwaSkgLyAyLFxuICAgICAgeTEgPSBzaW5UaGV0YSAvICgxICsgY29zKHRoZXRhKSk7XG4gIHJldHVybiBbXG4gICAgcGkgKiAoc2lnbihsYW1iZGEpICogc3FydChBICogQSArIDEgLSB5MSAqIHkxKSAtIEEpLFxuICAgIHBpICogeTFcbiAgXTtcbn1cblxudmFuRGVyR3JpbnRlbjNSYXcuaW52ZXJ0ID0gZnVuY3Rpb24oeCwgeSkge1xuICBpZiAoIXkpIHJldHVybiBbeCwgMF07XG4gIHZhciB5MSA9IHkgLyBwaSxcbiAgICAgIEEgPSAocGkgKiBwaSAqICgxIC0geTEgKiB5MSkgLSB4ICogeCkgLyAoMiAqIHBpICogeCk7XG4gIHJldHVybiBbXG4gICAgeCA/IHBpICogKHNpZ24oeCkgKiBzcXJ0KEEgKiBBICsgMSkgLSBBKSA6IDAsXG4gICAgaGFsZlBpICogc2luKDIgKiBhdGFuKHkxKSlcbiAgXTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKCkge1xuICByZXR1cm4gcHJvamVjdGlvbih2YW5EZXJHcmludGVuM1JhdylcbiAgICAgICAgLnNjYWxlKDc5LjQxODMpO1xufVxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvZDMtZ2VvLXByb2plY3Rpb24vc3JjL3ZhbkRlckdyaW50ZW4zLmpzXG4vLyBtb2R1bGUgaWQgPSAuL25vZGVfbW9kdWxlcy9kMy1nZW8tcHJvamVjdGlvbi9zcmMvdmFuRGVyR3JpbnRlbjMuanNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IHtnZW9Qcm9qZWN0aW9uIGFzIHByb2plY3Rpb259IGZyb20gXCJkMy1nZW9cIjtcbmltcG9ydCB7YWJzLCBlcHNpbG9uLCBoYWxmUGksIHBpLCBzaWduLCBzcXJ0fSBmcm9tIFwiLi9tYXRoXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiB2YW5EZXJHcmludGVuNFJhdyhsYW1iZGEsIHBoaSkge1xuICBpZiAoIXBoaSkgcmV0dXJuIFtsYW1iZGEsIDBdO1xuICB2YXIgcGhpMCA9IGFicyhwaGkpO1xuICBpZiAoIWxhbWJkYSB8fCBwaGkwID09PSBoYWxmUGkpIHJldHVybiBbMCwgcGhpXTtcbiAgdmFyIEIgPSBwaGkwIC8gaGFsZlBpLFxuICAgICAgQjIgPSBCICogQixcbiAgICAgIEMgPSAoOCAqIEIgLSBCMiAqIChCMiArIDIpIC0gNSkgLyAoMiAqIEIyICogKEIgLSAxKSksXG4gICAgICBDMiA9IEMgKiBDLFxuICAgICAgQkMgPSBCICogQyxcbiAgICAgIEJfQzIgPSBCMiArIEMyICsgMiAqIEJDLFxuICAgICAgQl8zQyA9IEIgKyAzICogQyxcbiAgICAgIGxhbWJkYTAgPSBsYW1iZGEgLyBoYWxmUGksXG4gICAgICBsYW1iZGExID0gbGFtYmRhMCArIDEgLyBsYW1iZGEwLFxuICAgICAgRCA9IHNpZ24oYWJzKGxhbWJkYSkgLSBoYWxmUGkpICogc3FydChsYW1iZGExICogbGFtYmRhMSAtIDQpLFxuICAgICAgRDIgPSBEICogRCxcbiAgICAgIEYgPSBCX0MyICogKEIyICsgQzIgKiBEMiAtIDEpICsgKDEgLSBCMikgKiAoQjIgKiAoQl8zQyAqIEJfM0MgKyA0ICogQzIpICsgMTIgKiBCQyAqIEMyICsgNCAqIEMyICogQzIpLFxuICAgICAgeDEgPSAoRCAqIChCX0MyICsgQzIgLSAxKSArIDIgKiBzcXJ0KEYpKSAvICg0ICogQl9DMiArIEQyKTtcbiAgcmV0dXJuIFtcbiAgICBzaWduKGxhbWJkYSkgKiBoYWxmUGkgKiB4MSxcbiAgICBzaWduKHBoaSkgKiBoYWxmUGkgKiBzcXJ0KDEgKyBEICogYWJzKHgxKSAtIHgxICogeDEpXG4gIF07XG59XG5cbnZhbkRlckdyaW50ZW40UmF3LmludmVydCA9IGZ1bmN0aW9uKHgsIHkpIHtcbiAgdmFyIGRlbHRhO1xuICBpZiAoIXggfHwgIXkpIHJldHVybiBbeCwgeV07XG4gIHkgLz0gcGk7XG4gIHZhciB4MSA9IHNpZ24oeCkgKiB4IC8gaGFsZlBpLFxuICAgICAgRCA9ICh4MSAqIHgxIC0gMSArIDQgKiB5ICogeSkgLyBhYnMoeDEpLFxuICAgICAgRDIgPSBEICogRCxcbiAgICAgIEIgPSAyICogeSxcbiAgICAgIGkgPSA1MDtcbiAgZG8ge1xuICAgIHZhciBCMiA9IEIgKiBCLFxuICAgICAgICBDID0gKDggKiBCIC0gQjIgKiAoQjIgKyAyKSAtIDUpIC8gKDIgKiBCMiAqIChCIC0gMSkpLFxuICAgICAgICBDXyA9ICgzICogQiAtIEIyICogQiAtIDEwKSAvICgyICogQjIgKiBCKSxcbiAgICAgICAgQzIgPSBDICogQyxcbiAgICAgICAgQkMgPSBCICogQyxcbiAgICAgICAgQl9DID0gQiArIEMsXG4gICAgICAgIEJfQzIgPSBCX0MgKiBCX0MsXG4gICAgICAgIEJfM0MgPSBCICsgMyAqIEMsXG4gICAgICAgIEYgPSBCX0MyICogKEIyICsgQzIgKiBEMiAtIDEpICsgKDEgLSBCMikgKiAoQjIgKiAoQl8zQyAqIEJfM0MgKyA0ICogQzIpICsgQzIgKiAoMTIgKiBCQyArIDQgKiBDMikpLFxuICAgICAgICBGXyA9IC0yICogQl9DICogKDQgKiBCQyAqIEMyICsgKDEgLSA0ICogQjIgKyAzICogQjIgKiBCMikgKiAoMSArIENfKSArIEMyICogKC02ICsgMTQgKiBCMiAtIEQyICsgKC04ICsgOCAqIEIyIC0gMiAqIEQyKSAqIENfKSArIEJDICogKC04ICsgMTIgKiBCMiArICgtMTAgKyAxMCAqIEIyIC0gRDIpICogQ18pKSxcbiAgICAgICAgc3FydEYgPSBzcXJ0KEYpLFxuICAgICAgICBmID0gRCAqIChCX0MyICsgQzIgLSAxKSArIDIgKiBzcXJ0RiAtIHgxICogKDQgKiBCX0MyICsgRDIpLFxuICAgICAgICBmXyA9IEQgKiAoMiAqIEMgKiBDXyArIDIgKiBCX0MgKiAoMSArIENfKSkgKyBGXyAvIHNxcnRGIC0gOCAqIEJfQyAqIChEICogKC0xICsgQzIgKyBCX0MyKSArIDIgKiBzcXJ0RikgKiAoMSArIENfKSAvIChEMiArIDQgKiBCX0MyKTtcbiAgICBCIC09IGRlbHRhID0gZiAvIGZfO1xuICB9IHdoaWxlIChkZWx0YSA+IGVwc2lsb24gJiYgLS1pID4gMCk7XG4gIHJldHVybiBbXG4gICAgc2lnbih4KSAqIChzcXJ0KEQgKiBEICsgNCkgKyBEKSAqIHBpIC8gNCxcbiAgICBoYWxmUGkgKiBCXG4gIF07XG59O1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbigpIHtcbiAgcmV0dXJuIHByb2plY3Rpb24odmFuRGVyR3JpbnRlbjRSYXcpXG4gICAgICAuc2NhbGUoMTI3LjE2KTtcbn1cblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2QzLWdlby1wcm9qZWN0aW9uL3NyYy92YW5EZXJHcmludGVuNC5qc1xuLy8gbW9kdWxlIGlkID0gLi9ub2RlX21vZHVsZXMvZDMtZ2VvLXByb2plY3Rpb24vc3JjL3ZhbkRlckdyaW50ZW40LmpzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCB7Z2VvUHJvamVjdGlvbiBhcyBwcm9qZWN0aW9ufSBmcm9tIFwiZDMtZ2VvXCI7XG5pbXBvcnQge3NxcnQsIHBpfSBmcm9tIFwiLi9tYXRoXCI7XG5pbXBvcnQge21vbGx3ZWlkZUJyb21sZXlSYXd9IGZyb20gXCIuL21vbGx3ZWlkZVwiO1xuXG52YXIgQSA9IDQgKiBwaSArIDMgKiBzcXJ0KDMpLFxuICAgIEIgPSAyICogc3FydCgyICogcGkgKiBzcXJ0KDMpIC8gQSk7XG5cbmV4cG9ydCB2YXIgd2FnbmVyNFJhdyA9IG1vbGx3ZWlkZUJyb21sZXlSYXcoQiAqIHNxcnQoMykgLyBwaSwgQiwgQSAvIDYpO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbigpIHtcbiAgcmV0dXJuIHByb2plY3Rpb24od2FnbmVyNFJhdylcbiAgICAgIC5zY2FsZSgxNzYuODQpO1xufVxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvZDMtZ2VvLXByb2plY3Rpb24vc3JjL3dhZ25lcjQuanNcbi8vIG1vZHVsZSBpZCA9IC4vbm9kZV9tb2R1bGVzL2QzLWdlby1wcm9qZWN0aW9uL3NyYy93YWduZXI0LmpzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCB7Z2VvUHJvamVjdGlvbiBhcyBwcm9qZWN0aW9ufSBmcm9tIFwiZDMtZ2VvXCI7XG5pbXBvcnQge3BpLCBzcXJ0fSBmcm9tIFwiLi9tYXRoXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiB3YWduZXI2UmF3KGxhbWJkYSwgcGhpKSB7XG4gIHJldHVybiBbbGFtYmRhICogc3FydCgxIC0gMyAqIHBoaSAqIHBoaSAvIChwaSAqIHBpKSksIHBoaV07XG59XG5cbndhZ25lcjZSYXcuaW52ZXJ0ID0gZnVuY3Rpb24oeCwgeSkge1xuICByZXR1cm4gW3ggLyBzcXJ0KDEgLSAzICogeSAqIHkgLyAocGkgKiBwaSkpLCB5XTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKCkge1xuICByZXR1cm4gcHJvamVjdGlvbih3YWduZXI2UmF3KVxuICAgICAgLnNjYWxlKDE1Mi42Myk7XG59XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9kMy1nZW8tcHJvamVjdGlvbi9zcmMvd2FnbmVyNi5qc1xuLy8gbW9kdWxlIGlkID0gLi9ub2RlX21vZHVsZXMvZDMtZ2VvLXByb2plY3Rpb24vc3JjL3dhZ25lcjYuanNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IHtnZW9Qcm9qZWN0aW9uIGFzIHByb2plY3Rpb259IGZyb20gXCJkMy1nZW9cIjtcbmltcG9ydCB7YXNpbiwgYXRhbjIsIGNvcywgc2luLCBzcXJ0LCB0YW59IGZyb20gXCIuL21hdGhcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIHdhZ25lcjdSYXcobGFtYmRhLCBwaGkpIHtcbiAgdmFyIHMgPSAwLjkwNjMxICogc2luKHBoaSksXG4gICAgICBjMCA9IHNxcnQoMSAtIHMgKiBzKSxcbiAgICAgIGMxID0gc3FydCgyIC8gKDEgKyBjMCAqIGNvcyhsYW1iZGEgLz0gMykpKTtcbiAgcmV0dXJuIFtcbiAgICAyLjY2NzIzICogYzAgKiBjMSAqIHNpbihsYW1iZGEpLFxuICAgIDEuMjQxMDQgKiBzICogYzFcbiAgXTtcbn1cblxud2FnbmVyN1Jhdy5pbnZlcnQgPSBmdW5jdGlvbih4LCB5KSB7XG4gIHZhciB0MSA9IHggLyAyLjY2NzIzLFxuICAgICAgdDIgPSB5IC8gMS4yNDEwNCxcbiAgICAgIHAgPSBzcXJ0KHQxICogdDEgKyB0MiAqIHQyKSxcbiAgICAgIGMgPSAyICogYXNpbihwIC8gMik7XG4gIHJldHVybiBbXG4gICAgMyAqIGF0YW4yKHggKiB0YW4oYyksIDIuNjY3MjMgKiBwKSxcbiAgICBwICYmIGFzaW4oeSAqIHNpbihjKSAvICgxLjI0MTA0ICogMC45MDYzMSAqIHApKVxuICBdO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oKSB7XG4gIHJldHVybiBwcm9qZWN0aW9uKHdhZ25lcjdSYXcpXG4gICAgICAuc2NhbGUoMTcyLjYzMik7XG59XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9kMy1nZW8tcHJvamVjdGlvbi9zcmMvd2FnbmVyNy5qc1xuLy8gbW9kdWxlIGlkID0gLi9ub2RlX21vZHVsZXMvZDMtZ2VvLXByb2plY3Rpb24vc3JjL3dhZ25lcjcuanNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IHtnZW9Qcm9qZWN0aW9uIGFzIHByb2plY3Rpb259IGZyb20gXCJkMy1nZW9cIjtcbmltcG9ydCB7YXNpbiwgYXRhbjIsIGNvcywgc2luLCBzcXJ0fSBmcm9tIFwiLi9tYXRoXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiB3aWVjaGVsUmF3KGxhbWJkYSwgcGhpKSB7XG4gIHZhciBjb3NQaGkgPSBjb3MocGhpKSxcbiAgICAgIHNpblBoaSA9IGNvcyhsYW1iZGEpICogY29zUGhpLFxuICAgICAgc2luMV9QaGkgPSAxIC0gc2luUGhpLFxuICAgICAgY29zTGFtYmRhID0gY29zKGxhbWJkYSA9IGF0YW4yKHNpbihsYW1iZGEpICogY29zUGhpLCAtc2luKHBoaSkpKSxcbiAgICAgIHNpbkxhbWJkYSA9IHNpbihsYW1iZGEpO1xuICBjb3NQaGkgPSBzcXJ0KDEgLSBzaW5QaGkgKiBzaW5QaGkpO1xuICByZXR1cm4gW1xuICAgIHNpbkxhbWJkYSAqIGNvc1BoaSAtIGNvc0xhbWJkYSAqIHNpbjFfUGhpLFxuICAgIC1jb3NMYW1iZGEgKiBjb3NQaGkgLSBzaW5MYW1iZGEgKiBzaW4xX1BoaVxuICBdO1xufVxuXG53aWVjaGVsUmF3LmludmVydCA9IGZ1bmN0aW9uKHgsIHkpIHtcbiAgdmFyIHcgPSAoeCAqIHggKyB5ICogeSkgLyAtMixcbiAgICAgIGsgPSBzcXJ0KC13ICogKDIgKyB3KSksXG4gICAgICBiID0geSAqIHcgKyB4ICogayxcbiAgICAgIGEgPSB4ICogdyAtIHkgKiBrLFxuICAgICAgRCA9IHNxcnQoYSAqIGEgKyBiICogYik7XG4gIHJldHVybiBbXG4gICAgYXRhbjIoayAqIGIsIEQgKiAoMSArIHcpKSxcbiAgICBEID8gLWFzaW4oayAqIGEgLyBEKSA6IDBcbiAgXTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKCkge1xuICByZXR1cm4gcHJvamVjdGlvbih3aWVjaGVsUmF3KVxuICAgICAgLnJvdGF0ZShbMCwgLTkwLCA0NV0pXG4gICAgICAuc2NhbGUoMTI0Ljc1KVxuICAgICAgLmNsaXBBbmdsZSgxODAgLSAxZS0zKTtcbn1cblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2QzLWdlby1wcm9qZWN0aW9uL3NyYy93aWVjaGVsLmpzXG4vLyBtb2R1bGUgaWQgPSAuL25vZGVfbW9kdWxlcy9kMy1nZW8tcHJvamVjdGlvbi9zcmMvd2llY2hlbC5qc1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQge2dlb1Byb2plY3Rpb24gYXMgcHJvamVjdGlvbn0gZnJvbSBcImQzLWdlb1wiO1xuaW1wb3J0IHthaXRvZmZSYXd9IGZyb20gXCIuL2FpdG9mZlwiO1xuaW1wb3J0IHtoYWxmUGksIGVwc2lsb24sIHNpbiwgY29zLCBzcXJ0LCBhYnMsIGFjb3N9IGZyb20gXCIuL21hdGhcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIHdpbmtlbDNSYXcobGFtYmRhLCBwaGkpIHtcbiAgdmFyIGNvb3JkaW5hdGVzID0gYWl0b2ZmUmF3KGxhbWJkYSwgcGhpKTtcbiAgcmV0dXJuIFtcbiAgICAoY29vcmRpbmF0ZXNbMF0gKyBsYW1iZGEgLyBoYWxmUGkpIC8gMixcbiAgICAoY29vcmRpbmF0ZXNbMV0gKyBwaGkpIC8gMlxuICBdO1xufVxuXG53aW5rZWwzUmF3LmludmVydCA9IGZ1bmN0aW9uKHgsIHkpIHtcbiAgdmFyIGxhbWJkYSA9IHgsIHBoaSA9IHksIGkgPSAyNTtcbiAgZG8ge1xuICAgIHZhciBjb3NwaGkgPSBjb3MocGhpKSxcbiAgICAgICAgc2lucGhpID0gc2luKHBoaSksXG4gICAgICAgIHNpbl8ycGhpID0gc2luKDIgKiBwaGkpLFxuICAgICAgICBzaW4ycGhpID0gc2lucGhpICogc2lucGhpLFxuICAgICAgICBjb3MycGhpID0gY29zcGhpICogY29zcGhpLFxuICAgICAgICBzaW5sYW1iZGEgPSBzaW4obGFtYmRhKSxcbiAgICAgICAgY29zbGFtYmRhXzIgPSBjb3MobGFtYmRhIC8gMiksXG4gICAgICAgIHNpbmxhbWJkYV8yID0gc2luKGxhbWJkYSAvIDIpLFxuICAgICAgICBzaW4ybGFtYmRhXzIgPSBzaW5sYW1iZGFfMiAqIHNpbmxhbWJkYV8yLFxuICAgICAgICBDID0gMSAtIGNvczJwaGkgKiBjb3NsYW1iZGFfMiAqIGNvc2xhbWJkYV8yLFxuICAgICAgICBFID0gQyA/IGFjb3MoY29zcGhpICogY29zbGFtYmRhXzIpICogc3FydChGID0gMSAvIEMpIDogRiA9IDAsXG4gICAgICAgIEYsXG4gICAgICAgIGZ4ID0gMC41ICogKDIgKiBFICogY29zcGhpICogc2lubGFtYmRhXzIgKyBsYW1iZGEgLyBoYWxmUGkpIC0geCxcbiAgICAgICAgZnkgPSAwLjUgKiAoRSAqIHNpbnBoaSArIHBoaSkgLSB5LFxuICAgICAgICBkeGRsYW1iZGEgPSAwLjUgKiBGICogKGNvczJwaGkgKiBzaW4ybGFtYmRhXzIgKyBFICogY29zcGhpICogY29zbGFtYmRhXzIgKiBzaW4ycGhpKSArIDAuNSAvIGhhbGZQaSxcbiAgICAgICAgZHhkcGhpID0gRiAqIChzaW5sYW1iZGEgKiBzaW5fMnBoaSAvIDQgLSBFICogc2lucGhpICogc2lubGFtYmRhXzIpLFxuICAgICAgICBkeWRsYW1iZGEgPSAwLjEyNSAqIEYgKiAoc2luXzJwaGkgKiBzaW5sYW1iZGFfMiAtIEUgKiBzaW5waGkgKiBjb3MycGhpICogc2lubGFtYmRhKSxcbiAgICAgICAgZHlkcGhpID0gMC41ICogRiAqIChzaW4ycGhpICogY29zbGFtYmRhXzIgKyBFICogc2luMmxhbWJkYV8yICogY29zcGhpKSArIDAuNSxcbiAgICAgICAgZGVub21pbmF0b3IgPSBkeGRwaGkgKiBkeWRsYW1iZGEgLSBkeWRwaGkgKiBkeGRsYW1iZGEsXG4gICAgICAgIGRsYW1iZGEgPSAoZnkgKiBkeGRwaGkgLSBmeCAqIGR5ZHBoaSkgLyBkZW5vbWluYXRvcixcbiAgICAgICAgZHBoaSA9IChmeCAqIGR5ZGxhbWJkYSAtIGZ5ICogZHhkbGFtYmRhKSAvIGRlbm9taW5hdG9yO1xuICAgIGxhbWJkYSAtPSBkbGFtYmRhLCBwaGkgLT0gZHBoaTtcbiAgfSB3aGlsZSAoKGFicyhkbGFtYmRhKSA+IGVwc2lsb24gfHwgYWJzKGRwaGkpID4gZXBzaWxvbikgJiYgLS1pID4gMCk7XG4gIHJldHVybiBbbGFtYmRhLCBwaGldO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oKSB7XG4gIHJldHVybiBwcm9qZWN0aW9uKHdpbmtlbDNSYXcpXG4gICAgICAuc2NhbGUoMTU4LjgzNyk7XG59XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9kMy1nZW8tcHJvamVjdGlvbi9zcmMvd2lua2VsMy5qc1xuLy8gbW9kdWxlIGlkID0gLi9ub2RlX21vZHVsZXMvZDMtZ2VvLXByb2plY3Rpb24vc3JjL3dpbmtlbDMuanNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0ICogYXMgZDMgZnJvbSAnZDMnO1xuaW1wb3J0ICogYXMgdG9wb2pzb24gZnJvbSAndG9wb2pzb24nO1xuaW1wb3J0ICogYXMgZDNnZW9Qcm9qIGZyb20gJ2QzLWdlby1wcm9qZWN0aW9uJztcblxuLy9sZXQgZDMgPSBPYmplY3QuYXNzaWduKHt9LCBkM2dlb1Byb2osIGQzTWFpbik7XG4vKlxubGV0IHF1ZXN0aW9ucyA9IFtdO1xudmFyIHdpZHRoID0gOTYwO1xudmFyIGhlaWdodCA9IDUwMDtcblxubGV0IHF1ZXN0aW9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3F1ZXN0aW9uJyk7XG5sZXQgcmFuZG9tQnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3JhbmRvbScpO1xubGV0IHNjb3JlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Njb3JlJyk7XG5sZXQgc3RhdHVzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3N0YXR1cycpO1xuXG5sZXQgY29ycmVjdEFuc3dlclRleHQ7XG5sZXQgb2xkQ29sb3I7XG5cbnZhciBzdmcgPSBkMy5zZWxlY3QoJyNtYXAnKVxuICAgIC5hcHBlbmQoJ3N2ZycpXG4gICAgLmF0dHIoJ3dpZHRoJywgd2lkdGgpXG4gICAgLmF0dHIoJ2hlaWdodCcsIGhlaWdodClcbiAgICAuYXR0cignY2xhc3MnLCAnbWFwJylcbiAgICAuYXBwZW5kKCdnJylcblxudmFyIHByb2plY3Rpb24gPSBkMy5nZW9Sb2JpbnNvbigpXG4gICAgLy8gICAuc2NhbGUod2lkdGggLyAxLjI1KTsgVVNBXG4gICAgLnNjYWxlKHdpZHRoIC8gNS42KTtcblxuLy8gICAgLnRyYW5zbGF0ZShbTWF0aC5zcXJ0KHdpZHRoIC8gMiksIGhlaWdodCAvIDJdKTtcblxuLy8gcHJvamVjdGlvbi5jZW50ZXIoWy05OCwgMzZdKTsgVVNBXG5wcm9qZWN0aW9uLmNlbnRlcihbMTUsIDEwXSk7XG5cblxudmFyIHBhdGggPSBkMy5nZW9QYXRoKClcbiAgICAucHJvamVjdGlvbihwcm9qZWN0aW9uKTtcblxudmFyIHVybCA9ICcvbWFwcy93b3JsZC0xMTBtLmdlb2pzb24nO1xuXG5kMy5qc29uKHVybCwgZnVuY3Rpb24oZXJyLCBtYXBKc29uKSB7XG4gICAgLy9jb25zb2xlLmxvZyhtYXBKc29uKTtcbiAgICBpZiAoZXJyKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdlcnJvciBpbiBkMy5qc29uJywgZXJyKTtcbiAgICB9XG4gICAgbGV0IG1hcERpdmlzaW9ucyA9IE9iamVjdC5rZXlzKG1hcEpzb24ub2JqZWN0cylbMF07XG4gICAgbGV0IGNvdW50cmllcyA9IHRvcG9qc29uLmZlYXR1cmUobWFwSnNvbiwgbWFwSnNvbi5vYmplY3RzW21hcERpdmlzaW9uc10pLmZlYXR1cmVzO1xuICAgIC8vY29uc29sZS5sb2coY291bnRyaWVzLCAnPC0tIGNvdW50cmllcycpO1xuICAgIGxldCBjb2xvclNjYWxlID0gZDMuc2NhbGVTZXF1ZW50aWFsKGQzLmludGVycG9sYXRlUmFpbmJvdykuZG9tYWluKFszMCwgNzUwXSk7XG5cbiAgICBzdmcuc2VsZWN0QWxsKCcuY291bnRyeScpXG4gICAgICAgIC5kYXRhKGNvdW50cmllcywgZnVuY3Rpb24oY291bnRyeSwgaSkge1xuICAgICAgICAgICAgY29uc29sZS5sb2coaSwgY291bnRyeSwgJ2NvdW50cnknKTtcbiAgICAgICAgICAgIGlmIChjb3VudHJ5LnByb3BlcnRpZXMubmFtZSAhPT0gJ0Rpc3RyaWN0IG9mIENvbHVtYmlhJykge1xuXG4gICAgICAgICAgICAgICAgcXVlc3Rpb25zLnB1c2goY291bnRyeS5wcm9wZXJ0aWVzLm5hbWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICAgICAuZW50ZXIoKVxuICAgICAgICAuYXBwZW5kKCdwYXRoJylcbiAgICAgICAgLmF0dHIoJ2NsYXNzJywgJ2NvdW50cnknKVxuICAgICAgICAuYXR0cignZCcsIHBhdGgpXG4gICAgICAgIC5hdHRyKCdzdHJva2UnLCAncmdiYSg1MCw1MCw1MCwuNiknKVxuICAgICAgICAuYXR0cignZmlsbCcsIGZ1bmN0aW9uKGRhdGEsIGkpIHtcbiAgICAgICAgICAgIHJldHVybiBjb2xvclNjYWxlKGkgKiA3KTtcbiAgICAgICAgfSlcbiAgICAgICAgLm9uKCdtb3VzZW92ZXInLCBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKGQpO1xuICAgICAgICAgICAgLy8gY29uc29sZS5sb2codGhpcy5nZXRBdHRyaWJ1dGUoJ2ZpbGwnKSk7XG4gICAgICAgICAgICBvbGRDb2xvciA9IHRoaXMuZ2V0QXR0cmlidXRlKCdmaWxsJyk7XG4gICAgICAgICAgICAvLyB0aGlzLnNldEF0dHJpYnV0ZSgnc3Ryb2tlJywgJ3JnYmEoMjUwLDI1MCwyNTAsLjkpJyk7XG4gICAgICAgICAgICB0aGlzLnNldEF0dHJpYnV0ZSgnc3Ryb2tlLXdpZHRoJywgMC4yKTtcbiAgICAgICAgICAgIHRoaXMuc2V0QXR0cmlidXRlKCdmaWxsJywgJ3llbGxvdycpO1xuICAgICAgICB9KVxuICAgICAgICAub24oJ21vdXNlb3V0JywgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAvLyB0aGlzLnNldEF0dHJpYnV0ZSgnc3Ryb2tlJywgJ2JsYWNrJyk7XG4gICAgICAgICAgICB0aGlzLnNldEF0dHJpYnV0ZSgnc3Ryb2tlLXdpZHRoJywgMSk7XG4gICAgICAgICAgICB0aGlzLnNldEF0dHJpYnV0ZSgnZmlsbCcsIG9sZENvbG9yKTtcblxuICAgICAgICB9KVxuICAgICAgICAub24oJ2NsaWNrJywgZnVuY3Rpb24oZGF0YSkge1xuICAgICAgICAgICAgc3RhdHVzLmNsYXNzTGlzdC5yZW1vdmUoJ2NvcnJlY3QnLCAnd3JvbmcnKTtcbiAgICAgICAgICAgIGNvcnJlY3RBbnN3ZXJUZXh0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Rlc3QnKTtcbiAgICAgICAgICAgIGRhdGEucHJvcGVydGllcy5uYW1lID09PSBjb3JyZWN0QW5zd2VyVGV4dC5pbm5lclRleHQgPyBjb3JyZWN0QW5zd2VyKCkgOiB3cm9uZ0Fuc3dlcigpO1xuICAgICAgICB9KTtcbiAgICBjb25zb2xlLmxvZyhxdWVzdGlvbnMpO1xufSk7XG5cblxucmFuZG9tQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZ2VuZXJhdGVRdWVzdGlvbik7XG5cbmZ1bmN0aW9uIGdlbmVyYXRlUXVlc3Rpb24oKSB7XG4gICAgcXVlc3Rpb24uaW5uZXJIVE1MID0gYFdoZXJlIGlzIDxzdHJvbmcgaWQ9J3Rlc3QnPiR7cXVlc3Rpb25zW01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIHF1ZXN0aW9ucy5sZW5ndGgpXX08L3N0cm9uZz4/YDtcbiAgICAvL3N0YXR1cy5jbGFzc0xpc3QucmVtb3ZlKCdjb3JyZWN0JywgJ3dyb25nJyk7XG5cbn1cblxuZnVuY3Rpb24gY29ycmVjdEFuc3dlcigpIHtcbiAgICBsZXQgc2NvcmVDb3VudCA9IHBhcnNlSW50KHNjb3JlLmlubmVyVGV4dCk7XG4gICAgc2NvcmUuaW5uZXJUZXh0ID0gc2NvcmVDb3VudCArPSAxO1xuICAgIHN0YXR1cy5pbm5lclRleHQgPSAnQ09SUkVDVCEnO1xuICAgIC8vIHN0YXR1cy5jbGFzc0xpc3QucmVtb3ZlKCdjb3JyZWN0JywgJ3dyb25nJyk7XG5cbiAgICBzdGF0dXMuY2xhc3NMaXN0LmFkZCgnY29ycmVjdCcpO1xuICAgIGdlbmVyYXRlUXVlc3Rpb24oKTtcbn1cblxuZnVuY3Rpb24gd3JvbmdBbnN3ZXIoKSB7XG4gICAgc3RhdHVzLmlubmVyVGV4dCA9ICdXUk9ORyEnO1xuICAgIC8vIHN0YXR1cy5jbGFzc0xpc3QucmVtb3ZlKCdjb3JyZWN0JywgJ3dyb25nJyk7XG4gICAgc3RhdHVzLmNsYXNzTGlzdC5hZGQoJ3dyb25nJyk7XG59XG4qL1xuY29uc29sZS5sb2coZDMpO1xudmFyIHdpZHRoID0gOTYwLFxuICAgIGhlaWdodCA9IDUwMCxcbiAgICBhY3RpdmUgPSBkMy5zZWxlY3QobnVsbCk7XG5cbnZhciBwcm9qZWN0aW9uID0gZDNnZW9Qcm9qXG4gICAgLmdlb1JvYmluc29uKCkgLy8gdXBkYXRlZCBmb3IgZDMgdjRcbiAgICAuc2NhbGUoMTMwKVxuICAgIC50cmFuc2xhdGUoW3dpZHRoIC8gMiwgaGVpZ2h0IC8gMl0pO1xuXG52YXIgem9vbSA9IGQzXG4gICAgLnpvb20oKVxuICAgIC8vIG5vIGxvbmdlciBpbiBkMyB2NCAtIHpvb20gaW5pdGlhbGlzZXMgd2l0aCB6b29tSWRlbnRpdHksIHNvIGl0J3MgYWxyZWFkeSBhdCBvcmlnaW5cbiAgICAvLyAudHJhbnNsYXRlKFswLCAwXSlcbiAgICAvLyAuc2NhbGUoMSlcbiAgICAuc2NhbGVFeHRlbnQoWzEsIDhdKVxuICAgIC5vbignem9vbScsIHpvb21lZCk7XG5cbnZhciBwYXRoID0gZDNcbiAgICAuZ2VvUGF0aCgpIC8vIHVwZGF0ZWQgZm9yIGQzIHY0XG4gICAgLnByb2plY3Rpb24ocHJvamVjdGlvbik7XG5cbnZhciBzdmcgPSBkM1xuICAgIC5zZWxlY3QoJ2JvZHknKVxuICAgIC5hcHBlbmQoJ3N2ZycpXG4gICAgLmF0dHIoJ3dpZHRoJywgd2lkdGgpXG4gICAgLmF0dHIoJ2hlaWdodCcsIGhlaWdodClcbiAgICAub24oJ2NsaWNrJywgc3RvcHBlZCwgdHJ1ZSk7XG5cbnN2Z1xuICAgIC5hcHBlbmQoJ3JlY3QnKVxuICAgIC5hdHRyKCdjbGFzcycsICdiYWNrZ3JvdW5kJylcbiAgICAuYXR0cignd2lkdGgnLCB3aWR0aClcbiAgICAuYXR0cignaGVpZ2h0JywgaGVpZ2h0KVxuICAgIC5vbignY2xpY2snLCByZXNldCk7XG5cbnZhciBnID0gc3ZnLmFwcGVuZCgnZycpO1xuXG5zdmcuY2FsbCh6b29tKTsgLy8gZGVsZXRlIHRoaXMgbGluZSB0byBkaXNhYmxlIGZyZWUgem9vbWluZ1xuLy8gLmNhbGwoem9vbS5ldmVudCk7IC8vIG5vdCBpbiBkMyB2NFxuXG5kMy5qc29uKCcvbWFwcy93b3JsZC0xMTBtLmdlb2pzb24nLCBmdW5jdGlvbihlcnJvciwgbWFwSnNvbikge1xuICAgIGlmIChlcnJvcikge1xuICAgICAgICB0aHJvdyBlcnJvcjtcbiAgICB9XG4gICAgbGV0IG1hcERpdmlzaW9ucyA9IE9iamVjdC5rZXlzKG1hcEpzb24ub2JqZWN0cylbMF07XG5cbiAgICBnXG4gICAgICAgIC5zZWxlY3RBbGwoJ3BhdGgnKVxuICAgICAgICAuZGF0YSh0b3BvanNvbi5mZWF0dXJlKG1hcEpzb24sIG1hcEpzb24ub2JqZWN0c1ttYXBEaXZpc2lvbnNdKS5mZWF0dXJlcylcbiAgICAgICAgLmVudGVyKClcbiAgICAgICAgLmFwcGVuZCgncGF0aCcpXG4gICAgICAgIC5hdHRyKCdkJywgcGF0aClcbiAgICAgICAgLmF0dHIoJ2NsYXNzJywgJ2ZlYXR1cmUnKVxuICAgICAgICAub24oJ2NsaWNrJywgY2xpY2tlZCk7XG5cbiAgICBnXG4gICAgICAgIC5hcHBlbmQoJ3BhdGgnKVxuICAgICAgICAuZGF0dW0oXG4gICAgICAgICAgICB0b3BvanNvbi5tZXNoKG1hcEpzb24sIG1hcEpzb24ub2JqZWN0c1ttYXBEaXZpc2lvbnNdLCBmdW5jdGlvbihhLCBiKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGEgIT09IGI7XG4gICAgICAgICAgICB9KVxuICAgICAgICApXG4gICAgICAgIC5hdHRyKCdjbGFzcycsICdtZXNoJylcbiAgICAgICAgLmF0dHIoJ2QnLCBwYXRoKTtcbn0pO1xuXG5mdW5jdGlvbiBjbGlja2VkKGQpIHtcbiAgICBpZiAoYWN0aXZlLm5vZGUoKSA9PT0gdGhpcykge1xuICAgICAgICByZXR1cm4gcmVzZXQoKTtcbiAgICB9XG4gICAgYWN0aXZlLmNsYXNzZWQoJ2FjdGl2ZScsIGZhbHNlKTtcbiAgICBhY3RpdmUgPSBkMy5zZWxlY3QodGhpcykuY2xhc3NlZCgnYWN0aXZlJywgdHJ1ZSk7XG5cbiAgICB2YXIgYm91bmRzID0gcGF0aC5ib3VuZHMoZCksXG4gICAgICAgIGR4ID0gYm91bmRzWzFdWzBdIC0gYm91bmRzWzBdWzBdLFxuICAgICAgICBkeSA9IGJvdW5kc1sxXVsxXSAtIGJvdW5kc1swXVsxXSxcbiAgICAgICAgeCA9IChib3VuZHNbMF1bMF0gKyBib3VuZHNbMV1bMF0pIC8gMixcbiAgICAgICAgeSA9IChib3VuZHNbMF1bMV0gKyBib3VuZHNbMV1bMV0pIC8gMixcbiAgICAgICAgc2NhbGUgPSBNYXRoLm1heCgxLCBNYXRoLm1pbig4LCAwLjkgLyBNYXRoLm1heChkeCAvIHdpZHRoLCBkeSAvIGhlaWdodCkpKSxcbiAgICAgICAgdHJhbnNsYXRlID0gW3dpZHRoIC8gMiAtIHNjYWxlICogeCwgaGVpZ2h0IC8gMiAtIHNjYWxlICogeV07XG5cbiAgICBzdmdcbiAgICAgICAgLnRyYW5zaXRpb24oKVxuICAgICAgICAuZHVyYXRpb24oNzUwKVxuICAgIC8vIC5jYWxsKHpvb20udHJhbnNsYXRlKHRyYW5zbGF0ZSkuc2NhbGUoc2NhbGUpLmV2ZW50KTsgLy8gbm90IGluIGQzIHY0XG4gICAgICAgIC5jYWxsKHpvb20udHJhbnNmb3JtLCBkMy56b29tSWRlbnRpdHkudHJhbnNsYXRlKHRyYW5zbGF0ZVswXSwgdHJhbnNsYXRlWzFdKS5zY2FsZShzY2FsZSkpOyAvLyB1cGRhdGVkIGZvciBkMyB2NFxufVxuXG5mdW5jdGlvbiByZXNldCgpIHtcbiAgICBhY3RpdmUuY2xhc3NlZCgnYWN0aXZlJywgZmFsc2UpO1xuICAgIGFjdGl2ZSA9IGQzLnNlbGVjdChudWxsKTtcblxuICAgIHN2Z1xuICAgICAgICAudHJhbnNpdGlvbigpXG4gICAgICAgIC5kdXJhdGlvbig3NTApXG4gICAgLy8gLmNhbGwoIHpvb20udHJhbnNmb3JtLCBkMy56b29tSWRlbnRpdHkudHJhbnNsYXRlKDAsIDApLnNjYWxlKDEpICk7IC8vIG5vdCBpbiBkMyB2NFxuICAgICAgICAuY2FsbCh6b29tLnRyYW5zZm9ybSwgZDMuem9vbUlkZW50aXR5KTsgLy8gdXBkYXRlZCBmb3IgZDMgdjRcbn1cblxuZnVuY3Rpb24gem9vbWVkKCkge1xuICAgIGcuc3R5bGUoJ3N0cm9rZS13aWR0aCcsIDEuNSAvIGQzLmV2ZW50LnRyYW5zZm9ybS5rICsgJ3B4Jyk7XG4gICAgLy8gZy5hdHRyKFwidHJhbnNmb3JtXCIsIFwidHJhbnNsYXRlKFwiICsgZDMuZXZlbnQudHJhbnNsYXRlICsgXCIpc2NhbGUoXCIgKyBkMy5ldmVudC5zY2FsZSArIFwiKVwiKTsgLy8gbm90IGluIGQzIHY0XG4gICAgZy5hdHRyKCd0cmFuc2Zvcm0nLCBkMy5ldmVudC50cmFuc2Zvcm0pOyAvLyB1cGRhdGVkIGZvciBkMyB2NFxufVxuXG4vLyBJZiB0aGUgZHJhZyBiZWhhdmlvciBwcmV2ZW50cyB0aGUgZGVmYXVsdCBjbGljayxcbi8vIGFsc28gc3RvcCBwcm9wYWdhdGlvbiBzbyB3ZSBkb27igJl0IGNsaWNrLXRvLXpvb20uXG5mdW5jdGlvbiBzdG9wcGVkKCkge1xuICAgIGlmIChkMy5ldmVudC5kZWZhdWx0UHJldmVudGVkKSB7XG4gICAgICAgIGQzLmV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgIH1cbn1cblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2luZGV4LmpzXG4vLyBtb2R1bGUgaWQgPSAuL3NyYy9pbmRleC5qc1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwic291cmNlUm9vdCI6IiJ9