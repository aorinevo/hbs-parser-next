/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./tests/index.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]!./node_modules/qunit/qunit/qunit.css":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/file-loader/dist/cjs.js?name=[name].[ext]!./node_modules/qunit/qunit/qunit.css ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "qunit.css");

/***/ }),

/***/ "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]!./tests/index.html":
/*!***********************************************************************************!*\
  !*** ./node_modules/file-loader/dist/cjs.js?name=[name].[ext]!./tests/index.html ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "index.html");

/***/ }),

/***/ "./node_modules/process/browser.js":
/*!*****************************************!*\
  !*** ./node_modules/process/browser.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ }),

/***/ "./node_modules/qunit/qunit/qunit.js":
/*!*******************************************!*\
  !*** ./node_modules/qunit/qunit/qunit.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(process, global, module) {var __WEBPACK_AMD_DEFINE_RESULT__;/*!
 * QUnit 2.9.3
 * https://qunitjs.com/
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license
 * https://jquery.org/license
 *
 * Date: 2019-10-08T15:49Z
 */
(function (global$1) {
  'use strict';

  global$1 = global$1 && global$1.hasOwnProperty('default') ? global$1['default'] : global$1;

  var window$1 = global$1.window;
  var self$1 = global$1.self;
  var console = global$1.console;
  var setTimeout$1 = global$1.setTimeout;
  var clearTimeout = global$1.clearTimeout;

  var document$1 = window$1 && window$1.document;
  var navigator = window$1 && window$1.navigator;

  var localSessionStorage = function () {
  	var x = "qunit-test-string";
  	try {
  		global$1.sessionStorage.setItem(x, x);
  		global$1.sessionStorage.removeItem(x);
  		return global$1.sessionStorage;
  	} catch (e) {
  		return undefined;
  	}
  }();

  /**
   * Returns a function that proxies to the given method name on the globals
   * console object. The proxy will also detect if the console doesn't exist and
   * will appropriately no-op. This allows support for IE9, which doesn't have a
   * console if the developer tools are not open.
   */
  function consoleProxy(method) {
  	return function () {
  		if (console) {
  			console[method].apply(console, arguments);
  		}
  	};
  }

  var Logger = {
  	warn: consoleProxy("warn")
  };

  var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
    return typeof obj;
  } : function (obj) {
    return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
  };











  var classCallCheck = function (instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  };

  var createClass = function () {
    function defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }

    return function (Constructor, protoProps, staticProps) {
      if (protoProps) defineProperties(Constructor.prototype, protoProps);
      if (staticProps) defineProperties(Constructor, staticProps);
      return Constructor;
    };
  }();









































  var toConsumableArray = function (arr) {
    if (Array.isArray(arr)) {
      for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) arr2[i] = arr[i];

      return arr2;
    } else {
      return Array.from(arr);
    }
  };

  var toString = Object.prototype.toString;
  var hasOwn = Object.prototype.hasOwnProperty;
  var now = Date.now || function () {
  	return new Date().getTime();
  };

  var hasPerformanceApi = detectPerformanceApi();
  var performance = hasPerformanceApi ? window$1.performance : undefined;
  var performanceNow = hasPerformanceApi ? performance.now.bind(performance) : now;

  function detectPerformanceApi() {
  	return window$1 && typeof window$1.performance !== "undefined" && typeof window$1.performance.mark === "function" && typeof window$1.performance.measure === "function";
  }

  function measure(comment, startMark, endMark) {

  	// `performance.measure` may fail if the mark could not be found.
  	// reasons a specific mark could not be found include: outside code invoking `performance.clearMarks()`
  	try {
  		performance.measure(comment, startMark, endMark);
  	} catch (ex) {
  		Logger.warn("performance.measure could not be executed because of ", ex.message);
  	}
  }

  var defined = {
  	document: window$1 && window$1.document !== undefined,
  	setTimeout: setTimeout$1 !== undefined
  };

  // Returns a new Array with the elements that are in a but not in b
  function diff(a, b) {
  	var i,
  	    j,
  	    result = a.slice();

  	for (i = 0; i < result.length; i++) {
  		for (j = 0; j < b.length; j++) {
  			if (result[i] === b[j]) {
  				result.splice(i, 1);
  				i--;
  				break;
  			}
  		}
  	}
  	return result;
  }

  /**
   * Determines whether an element exists in a given array or not.
   *
   * @method inArray
   * @param {Any} elem
   * @param {Array} array
   * @return {Boolean}
   */
  function inArray(elem, array) {
  	return array.indexOf(elem) !== -1;
  }

  /**
   * Makes a clone of an object using only Array or Object as base,
   * and copies over the own enumerable properties.
   *
   * @param {Object} obj
   * @return {Object} New object with only the own properties (recursively).
   */
  function objectValues(obj) {
  	var key,
  	    val,
  	    vals = is("array", obj) ? [] : {};
  	for (key in obj) {
  		if (hasOwn.call(obj, key)) {
  			val = obj[key];
  			vals[key] = val === Object(val) ? objectValues(val) : val;
  		}
  	}
  	return vals;
  }

  function extend(a, b, undefOnly) {
  	for (var prop in b) {
  		if (hasOwn.call(b, prop)) {
  			if (b[prop] === undefined) {
  				delete a[prop];
  			} else if (!(undefOnly && typeof a[prop] !== "undefined")) {
  				a[prop] = b[prop];
  			}
  		}
  	}

  	return a;
  }

  function objectType(obj) {
  	if (typeof obj === "undefined") {
  		return "undefined";
  	}

  	// Consider: typeof null === object
  	if (obj === null) {
  		return "null";
  	}

  	var match = toString.call(obj).match(/^\[object\s(.*)\]$/),
  	    type = match && match[1];

  	switch (type) {
  		case "Number":
  			if (isNaN(obj)) {
  				return "nan";
  			}
  			return "number";
  		case "String":
  		case "Boolean":
  		case "Array":
  		case "Set":
  		case "Map":
  		case "Date":
  		case "RegExp":
  		case "Function":
  		case "Symbol":
  			return type.toLowerCase();
  		default:
  			return typeof obj === "undefined" ? "undefined" : _typeof(obj);
  	}
  }

  // Safe object type checking
  function is(type, obj) {
  	return objectType(obj) === type;
  }

  // Based on Java's String.hashCode, a simple but not
  // rigorously collision resistant hashing function
  function generateHash(module, testName) {
  	var str = module + "\x1C" + testName;
  	var hash = 0;

  	for (var i = 0; i < str.length; i++) {
  		hash = (hash << 5) - hash + str.charCodeAt(i);
  		hash |= 0;
  	}

  	// Convert the possibly negative integer hash code into an 8 character hex string, which isn't
  	// strictly necessary but increases user understanding that the id is a SHA-like hash
  	var hex = (0x100000000 + hash).toString(16);
  	if (hex.length < 8) {
  		hex = "0000000" + hex;
  	}

  	return hex.slice(-8);
  }

  // Test for equality any JavaScript type.
  // Authors: Philippe Rathé <prathe@gmail.com>, David Chan <david@troi.org>
  var equiv = (function () {

  	// Value pairs queued for comparison. Used for breadth-first processing order, recursion
  	// detection and avoiding repeated comparison (see below for details).
  	// Elements are { a: val, b: val }.
  	var pairs = [];

  	var getProto = Object.getPrototypeOf || function (obj) {
  		return obj.__proto__;
  	};

  	function useStrictEquality(a, b) {

  		// This only gets called if a and b are not strict equal, and is used to compare on
  		// the primitive values inside object wrappers. For example:
  		// `var i = 1;`
  		// `var j = new Number(1);`
  		// Neither a nor b can be null, as a !== b and they have the same type.
  		if ((typeof a === "undefined" ? "undefined" : _typeof(a)) === "object") {
  			a = a.valueOf();
  		}
  		if ((typeof b === "undefined" ? "undefined" : _typeof(b)) === "object") {
  			b = b.valueOf();
  		}

  		return a === b;
  	}

  	function compareConstructors(a, b) {
  		var protoA = getProto(a);
  		var protoB = getProto(b);

  		// Comparing constructors is more strict than using `instanceof`
  		if (a.constructor === b.constructor) {
  			return true;
  		}

  		// Ref #851
  		// If the obj prototype descends from a null constructor, treat it
  		// as a null prototype.
  		if (protoA && protoA.constructor === null) {
  			protoA = null;
  		}
  		if (protoB && protoB.constructor === null) {
  			protoB = null;
  		}

  		// Allow objects with no prototype to be equivalent to
  		// objects with Object as their constructor.
  		if (protoA === null && protoB === Object.prototype || protoB === null && protoA === Object.prototype) {
  			return true;
  		}

  		return false;
  	}

  	function getRegExpFlags(regexp) {
  		return "flags" in regexp ? regexp.flags : regexp.toString().match(/[gimuy]*$/)[0];
  	}

  	function isContainer(val) {
  		return ["object", "array", "map", "set"].indexOf(objectType(val)) !== -1;
  	}

  	function breadthFirstCompareChild(a, b) {

  		// If a is a container not reference-equal to b, postpone the comparison to the
  		// end of the pairs queue -- unless (a, b) has been seen before, in which case skip
  		// over the pair.
  		if (a === b) {
  			return true;
  		}
  		if (!isContainer(a)) {
  			return typeEquiv(a, b);
  		}
  		if (pairs.every(function (pair) {
  			return pair.a !== a || pair.b !== b;
  		})) {

  			// Not yet started comparing this pair
  			pairs.push({ a: a, b: b });
  		}
  		return true;
  	}

  	var callbacks = {
  		"string": useStrictEquality,
  		"boolean": useStrictEquality,
  		"number": useStrictEquality,
  		"null": useStrictEquality,
  		"undefined": useStrictEquality,
  		"symbol": useStrictEquality,
  		"date": useStrictEquality,

  		"nan": function nan() {
  			return true;
  		},

  		"regexp": function regexp(a, b) {
  			return a.source === b.source &&

  			// Include flags in the comparison
  			getRegExpFlags(a) === getRegExpFlags(b);
  		},

  		// abort (identical references / instance methods were skipped earlier)
  		"function": function _function() {
  			return false;
  		},

  		"array": function array(a, b) {
  			var i, len;

  			len = a.length;
  			if (len !== b.length) {

  				// Safe and faster
  				return false;
  			}

  			for (i = 0; i < len; i++) {

  				// Compare non-containers; queue non-reference-equal containers
  				if (!breadthFirstCompareChild(a[i], b[i])) {
  					return false;
  				}
  			}
  			return true;
  		},

  		// Define sets a and b to be equivalent if for each element aVal in a, there
  		// is some element bVal in b such that aVal and bVal are equivalent. Element
  		// repetitions are not counted, so these are equivalent:
  		// a = new Set( [ {}, [], [] ] );
  		// b = new Set( [ {}, {}, [] ] );
  		"set": function set$$1(a, b) {
  			var innerEq,
  			    outerEq = true;

  			if (a.size !== b.size) {

  				// This optimization has certain quirks because of the lack of
  				// repetition counting. For instance, adding the same
  				// (reference-identical) element to two equivalent sets can
  				// make them non-equivalent.
  				return false;
  			}

  			a.forEach(function (aVal) {

  				// Short-circuit if the result is already known. (Using for...of
  				// with a break clause would be cleaner here, but it would cause
  				// a syntax error on older Javascript implementations even if
  				// Set is unused)
  				if (!outerEq) {
  					return;
  				}

  				innerEq = false;

  				b.forEach(function (bVal) {
  					var parentPairs;

  					// Likewise, short-circuit if the result is already known
  					if (innerEq) {
  						return;
  					}

  					// Swap out the global pairs list, as the nested call to
  					// innerEquiv will clobber its contents
  					parentPairs = pairs;
  					if (innerEquiv(bVal, aVal)) {
  						innerEq = true;
  					}

  					// Replace the global pairs list
  					pairs = parentPairs;
  				});

  				if (!innerEq) {
  					outerEq = false;
  				}
  			});

  			return outerEq;
  		},

  		// Define maps a and b to be equivalent if for each key-value pair (aKey, aVal)
  		// in a, there is some key-value pair (bKey, bVal) in b such that
  		// [ aKey, aVal ] and [ bKey, bVal ] are equivalent. Key repetitions are not
  		// counted, so these are equivalent:
  		// a = new Map( [ [ {}, 1 ], [ {}, 1 ], [ [], 1 ] ] );
  		// b = new Map( [ [ {}, 1 ], [ [], 1 ], [ [], 1 ] ] );
  		"map": function map(a, b) {
  			var innerEq,
  			    outerEq = true;

  			if (a.size !== b.size) {

  				// This optimization has certain quirks because of the lack of
  				// repetition counting. For instance, adding the same
  				// (reference-identical) key-value pair to two equivalent maps
  				// can make them non-equivalent.
  				return false;
  			}

  			a.forEach(function (aVal, aKey) {

  				// Short-circuit if the result is already known. (Using for...of
  				// with a break clause would be cleaner here, but it would cause
  				// a syntax error on older Javascript implementations even if
  				// Map is unused)
  				if (!outerEq) {
  					return;
  				}

  				innerEq = false;

  				b.forEach(function (bVal, bKey) {
  					var parentPairs;

  					// Likewise, short-circuit if the result is already known
  					if (innerEq) {
  						return;
  					}

  					// Swap out the global pairs list, as the nested call to
  					// innerEquiv will clobber its contents
  					parentPairs = pairs;
  					if (innerEquiv([bVal, bKey], [aVal, aKey])) {
  						innerEq = true;
  					}

  					// Replace the global pairs list
  					pairs = parentPairs;
  				});

  				if (!innerEq) {
  					outerEq = false;
  				}
  			});

  			return outerEq;
  		},

  		"object": function object(a, b) {
  			var i,
  			    aProperties = [],
  			    bProperties = [];

  			if (compareConstructors(a, b) === false) {
  				return false;
  			}

  			// Be strict: don't ensure hasOwnProperty and go deep
  			for (i in a) {

  				// Collect a's properties
  				aProperties.push(i);

  				// Skip OOP methods that look the same
  				if (a.constructor !== Object && typeof a.constructor !== "undefined" && typeof a[i] === "function" && typeof b[i] === "function" && a[i].toString() === b[i].toString()) {
  					continue;
  				}

  				// Compare non-containers; queue non-reference-equal containers
  				if (!breadthFirstCompareChild(a[i], b[i])) {
  					return false;
  				}
  			}

  			for (i in b) {

  				// Collect b's properties
  				bProperties.push(i);
  			}

  			// Ensures identical properties name
  			return typeEquiv(aProperties.sort(), bProperties.sort());
  		}
  	};

  	function typeEquiv(a, b) {
  		var type = objectType(a);

  		// Callbacks for containers will append to the pairs queue to achieve breadth-first
  		// search order. The pairs queue is also used to avoid reprocessing any pair of
  		// containers that are reference-equal to a previously visited pair (a special case
  		// this being recursion detection).
  		//
  		// Because of this approach, once typeEquiv returns a false value, it should not be
  		// called again without clearing the pair queue else it may wrongly report a visited
  		// pair as being equivalent.
  		return objectType(b) === type && callbacks[type](a, b);
  	}

  	function innerEquiv(a, b) {
  		var i, pair;

  		// We're done when there's nothing more to compare
  		if (arguments.length < 2) {
  			return true;
  		}

  		// Clear the global pair queue and add the top-level values being compared
  		pairs = [{ a: a, b: b }];

  		for (i = 0; i < pairs.length; i++) {
  			pair = pairs[i];

  			// Perform type-specific comparison on any pairs that are not strictly
  			// equal. For container types, that comparison will postpone comparison
  			// of any sub-container pair to the end of the pair queue. This gives
  			// breadth-first search order. It also avoids the reprocessing of
  			// reference-equal siblings, cousins etc, which can have a significant speed
  			// impact when comparing a container of small objects each of which has a
  			// reference to the same (singleton) large object.
  			if (pair.a !== pair.b && !typeEquiv(pair.a, pair.b)) {
  				return false;
  			}
  		}

  		// ...across all consecutive argument pairs
  		return arguments.length === 2 || innerEquiv.apply(this, [].slice.call(arguments, 1));
  	}

  	return function () {
  		var result = innerEquiv.apply(undefined, arguments);

  		// Release any retained objects
  		pairs.length = 0;
  		return result;
  	};
  })();

  /**
   * Config object: Maintain internal state
   * Later exposed as QUnit.config
   * `config` initialized at top of scope
   */
  var config = {

  	// The queue of tests to run
  	queue: [],

  	// Block until document ready
  	blocking: true,

  	// By default, run previously failed tests first
  	// very useful in combination with "Hide passed tests" checked
  	reorder: true,

  	// By default, modify document.title when suite is done
  	altertitle: true,

  	// HTML Reporter: collapse every test except the first failing test
  	// If false, all failing tests will be expanded
  	collapse: true,

  	// By default, scroll to top of the page when suite is done
  	scrolltop: true,

  	// Depth up-to which object will be dumped
  	maxDepth: 5,

  	// When enabled, all tests must call expect()
  	requireExpects: false,

  	// Placeholder for user-configurable form-exposed URL parameters
  	urlConfig: [],

  	// Set of all modules.
  	modules: [],

  	// The first unnamed module
  	currentModule: {
  		name: "",
  		tests: [],
  		childModules: [],
  		testsRun: 0,
  		unskippedTestsRun: 0,
  		hooks: {
  			before: [],
  			beforeEach: [],
  			afterEach: [],
  			after: []
  		}
  	},

  	callbacks: {},

  	// The storage module to use for reordering tests
  	storage: localSessionStorage
  };

  // take a predefined QUnit.config and extend the defaults
  var globalConfig = window$1 && window$1.QUnit && window$1.QUnit.config;

  // only extend the global config if there is no QUnit overload
  if (window$1 && window$1.QUnit && !window$1.QUnit.version) {
  	extend(config, globalConfig);
  }

  // Push a loose unnamed module to the modules collection
  config.modules.push(config.currentModule);

  // Based on jsDump by Ariel Flesler
  // http://flesler.blogspot.com/2008/05/jsdump-pretty-dump-of-any-javascript.html
  var dump = (function () {
  	function quote(str) {
  		return "\"" + str.toString().replace(/\\/g, "\\\\").replace(/"/g, "\\\"") + "\"";
  	}
  	function literal(o) {
  		return o + "";
  	}
  	function join(pre, arr, post) {
  		var s = dump.separator(),
  		    base = dump.indent(),
  		    inner = dump.indent(1);
  		if (arr.join) {
  			arr = arr.join("," + s + inner);
  		}
  		if (!arr) {
  			return pre + post;
  		}
  		return [pre, inner + arr, base + post].join(s);
  	}
  	function array(arr, stack) {
  		var i = arr.length,
  		    ret = new Array(i);

  		if (dump.maxDepth && dump.depth > dump.maxDepth) {
  			return "[object Array]";
  		}

  		this.up();
  		while (i--) {
  			ret[i] = this.parse(arr[i], undefined, stack);
  		}
  		this.down();
  		return join("[", ret, "]");
  	}

  	function isArray(obj) {
  		return (

  			//Native Arrays
  			toString.call(obj) === "[object Array]" ||

  			// NodeList objects
  			typeof obj.length === "number" && obj.item !== undefined && (obj.length ? obj.item(0) === obj[0] : obj.item(0) === null && obj[0] === undefined)
  		);
  	}

  	var reName = /^function (\w+)/,
  	    dump = {

  		// The objType is used mostly internally, you can fix a (custom) type in advance
  		parse: function parse(obj, objType, stack) {
  			stack = stack || [];
  			var res,
  			    parser,
  			    parserType,
  			    objIndex = stack.indexOf(obj);

  			if (objIndex !== -1) {
  				return "recursion(" + (objIndex - stack.length) + ")";
  			}

  			objType = objType || this.typeOf(obj);
  			parser = this.parsers[objType];
  			parserType = typeof parser === "undefined" ? "undefined" : _typeof(parser);

  			if (parserType === "function") {
  				stack.push(obj);
  				res = parser.call(this, obj, stack);
  				stack.pop();
  				return res;
  			}
  			return parserType === "string" ? parser : this.parsers.error;
  		},
  		typeOf: function typeOf(obj) {
  			var type;

  			if (obj === null) {
  				type = "null";
  			} else if (typeof obj === "undefined") {
  				type = "undefined";
  			} else if (is("regexp", obj)) {
  				type = "regexp";
  			} else if (is("date", obj)) {
  				type = "date";
  			} else if (is("function", obj)) {
  				type = "function";
  			} else if (obj.setInterval !== undefined && obj.document !== undefined && obj.nodeType === undefined) {
  				type = "window";
  			} else if (obj.nodeType === 9) {
  				type = "document";
  			} else if (obj.nodeType) {
  				type = "node";
  			} else if (isArray(obj)) {
  				type = "array";
  			} else if (obj.constructor === Error.prototype.constructor) {
  				type = "error";
  			} else {
  				type = typeof obj === "undefined" ? "undefined" : _typeof(obj);
  			}
  			return type;
  		},

  		separator: function separator() {
  			if (this.multiline) {
  				return this.HTML ? "<br />" : "\n";
  			} else {
  				return this.HTML ? "&#160;" : " ";
  			}
  		},

  		// Extra can be a number, shortcut for increasing-calling-decreasing
  		indent: function indent(extra) {
  			if (!this.multiline) {
  				return "";
  			}
  			var chr = this.indentChar;
  			if (this.HTML) {
  				chr = chr.replace(/\t/g, "   ").replace(/ /g, "&#160;");
  			}
  			return new Array(this.depth + (extra || 0)).join(chr);
  		},
  		up: function up(a) {
  			this.depth += a || 1;
  		},
  		down: function down(a) {
  			this.depth -= a || 1;
  		},
  		setParser: function setParser(name, parser) {
  			this.parsers[name] = parser;
  		},

  		// The next 3 are exposed so you can use them
  		quote: quote,
  		literal: literal,
  		join: join,
  		depth: 1,
  		maxDepth: config.maxDepth,

  		// This is the list of parsers, to modify them, use dump.setParser
  		parsers: {
  			window: "[Window]",
  			document: "[Document]",
  			error: function error(_error) {
  				return "Error(\"" + _error.message + "\")";
  			},
  			unknown: "[Unknown]",
  			"null": "null",
  			"undefined": "undefined",
  			"function": function _function(fn) {
  				var ret = "function",


  				// Functions never have name in IE
  				name = "name" in fn ? fn.name : (reName.exec(fn) || [])[1];

  				if (name) {
  					ret += " " + name;
  				}
  				ret += "(";

  				ret = [ret, dump.parse(fn, "functionArgs"), "){"].join("");
  				return join(ret, dump.parse(fn, "functionCode"), "}");
  			},
  			array: array,
  			nodelist: array,
  			"arguments": array,
  			object: function object(map, stack) {
  				var keys,
  				    key,
  				    val,
  				    i,
  				    nonEnumerableProperties,
  				    ret = [];

  				if (dump.maxDepth && dump.depth > dump.maxDepth) {
  					return "[object Object]";
  				}

  				dump.up();
  				keys = [];
  				for (key in map) {
  					keys.push(key);
  				}

  				// Some properties are not always enumerable on Error objects.
  				nonEnumerableProperties = ["message", "name"];
  				for (i in nonEnumerableProperties) {
  					key = nonEnumerableProperties[i];
  					if (key in map && !inArray(key, keys)) {
  						keys.push(key);
  					}
  				}
  				keys.sort();
  				for (i = 0; i < keys.length; i++) {
  					key = keys[i];
  					val = map[key];
  					ret.push(dump.parse(key, "key") + ": " + dump.parse(val, undefined, stack));
  				}
  				dump.down();
  				return join("{", ret, "}");
  			},
  			node: function node(_node) {
  				var len,
  				    i,
  				    val,
  				    open = dump.HTML ? "&lt;" : "<",
  				    close = dump.HTML ? "&gt;" : ">",
  				    tag = _node.nodeName.toLowerCase(),
  				    ret = open + tag,
  				    attrs = _node.attributes;

  				if (attrs) {
  					for (i = 0, len = attrs.length; i < len; i++) {
  						val = attrs[i].nodeValue;

  						// IE6 includes all attributes in .attributes, even ones not explicitly
  						// set. Those have values like undefined, null, 0, false, "" or
  						// "inherit".
  						if (val && val !== "inherit") {
  							ret += " " + attrs[i].nodeName + "=" + dump.parse(val, "attribute");
  						}
  					}
  				}
  				ret += close;

  				// Show content of TextNode or CDATASection
  				if (_node.nodeType === 3 || _node.nodeType === 4) {
  					ret += _node.nodeValue;
  				}

  				return ret + open + "/" + tag + close;
  			},

  			// Function calls it internally, it's the arguments part of the function
  			functionArgs: function functionArgs(fn) {
  				var args,
  				    l = fn.length;

  				if (!l) {
  					return "";
  				}

  				args = new Array(l);
  				while (l--) {

  					// 97 is 'a'
  					args[l] = String.fromCharCode(97 + l);
  				}
  				return " " + args.join(", ") + " ";
  			},

  			// Object calls it internally, the key part of an item in a map
  			key: quote,

  			// Function calls it internally, it's the content of the function
  			functionCode: "[code]",

  			// Node calls it internally, it's a html attribute value
  			attribute: quote,
  			string: quote,
  			date: quote,
  			regexp: literal,
  			number: literal,
  			"boolean": literal,
  			symbol: function symbol(sym) {
  				return sym.toString();
  			}
  		},

  		// If true, entities are escaped ( <, >, \t, space and \n )
  		HTML: false,

  		// Indentation unit
  		indentChar: "  ",

  		// If true, items in a collection, are separated by a \n, else just a space.
  		multiline: true
  	};

  	return dump;
  })();

  var SuiteReport = function () {
  	function SuiteReport(name, parentSuite) {
  		classCallCheck(this, SuiteReport);

  		this.name = name;
  		this.fullName = parentSuite ? parentSuite.fullName.concat(name) : [];

  		this.tests = [];
  		this.childSuites = [];

  		if (parentSuite) {
  			parentSuite.pushChildSuite(this);
  		}
  	}

  	createClass(SuiteReport, [{
  		key: "start",
  		value: function start(recordTime) {
  			if (recordTime) {
  				this._startTime = performanceNow();

  				if (performance) {
  					var suiteLevel = this.fullName.length;
  					performance.mark("qunit_suite_" + suiteLevel + "_start");
  				}
  			}

  			return {
  				name: this.name,
  				fullName: this.fullName.slice(),
  				tests: this.tests.map(function (test) {
  					return test.start();
  				}),
  				childSuites: this.childSuites.map(function (suite) {
  					return suite.start();
  				}),
  				testCounts: {
  					total: this.getTestCounts().total
  				}
  			};
  		}
  	}, {
  		key: "end",
  		value: function end(recordTime) {
  			if (recordTime) {
  				this._endTime = performanceNow();

  				if (performance) {
  					var suiteLevel = this.fullName.length;
  					performance.mark("qunit_suite_" + suiteLevel + "_end");

  					var suiteName = this.fullName.join(" – ");

  					measure(suiteLevel === 0 ? "QUnit Test Run" : "QUnit Test Suite: " + suiteName, "qunit_suite_" + suiteLevel + "_start", "qunit_suite_" + suiteLevel + "_end");
  				}
  			}

  			return {
  				name: this.name,
  				fullName: this.fullName.slice(),
  				tests: this.tests.map(function (test) {
  					return test.end();
  				}),
  				childSuites: this.childSuites.map(function (suite) {
  					return suite.end();
  				}),
  				testCounts: this.getTestCounts(),
  				runtime: this.getRuntime(),
  				status: this.getStatus()
  			};
  		}
  	}, {
  		key: "pushChildSuite",
  		value: function pushChildSuite(suite) {
  			this.childSuites.push(suite);
  		}
  	}, {
  		key: "pushTest",
  		value: function pushTest(test) {
  			this.tests.push(test);
  		}
  	}, {
  		key: "getRuntime",
  		value: function getRuntime() {
  			return this._endTime - this._startTime;
  		}
  	}, {
  		key: "getTestCounts",
  		value: function getTestCounts() {
  			var counts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : { passed: 0, failed: 0, skipped: 0, todo: 0, total: 0 };

  			counts = this.tests.reduce(function (counts, test) {
  				if (test.valid) {
  					counts[test.getStatus()]++;
  					counts.total++;
  				}

  				return counts;
  			}, counts);

  			return this.childSuites.reduce(function (counts, suite) {
  				return suite.getTestCounts(counts);
  			}, counts);
  		}
  	}, {
  		key: "getStatus",
  		value: function getStatus() {
  			var _getTestCounts = this.getTestCounts(),
  			    total = _getTestCounts.total,
  			    failed = _getTestCounts.failed,
  			    skipped = _getTestCounts.skipped,
  			    todo = _getTestCounts.todo;

  			if (failed) {
  				return "failed";
  			} else {
  				if (skipped === total) {
  					return "skipped";
  				} else if (todo === total) {
  					return "todo";
  				} else {
  					return "passed";
  				}
  			}
  		}
  	}]);
  	return SuiteReport;
  }();

  var focused = false;

  var moduleStack = [];

  function createModule(name, testEnvironment, modifiers) {
  	var parentModule = moduleStack.length ? moduleStack.slice(-1)[0] : null;
  	var moduleName = parentModule !== null ? [parentModule.name, name].join(" > ") : name;
  	var parentSuite = parentModule ? parentModule.suiteReport : globalSuite;

  	var skip = parentModule !== null && parentModule.skip || modifiers.skip;
  	var todo = parentModule !== null && parentModule.todo || modifiers.todo;

  	var module = {
  		name: moduleName,
  		parentModule: parentModule,
  		tests: [],
  		moduleId: generateHash(moduleName),
  		testsRun: 0,
  		unskippedTestsRun: 0,
  		childModules: [],
  		suiteReport: new SuiteReport(name, parentSuite),

  		// Pass along `skip` and `todo` properties from parent module, in case
  		// there is one, to childs. And use own otherwise.
  		// This property will be used to mark own tests and tests of child suites
  		// as either `skipped` or `todo`.
  		skip: skip,
  		todo: skip ? false : todo
  	};

  	var env = {};
  	if (parentModule) {
  		parentModule.childModules.push(module);
  		extend(env, parentModule.testEnvironment);
  	}
  	extend(env, testEnvironment);
  	module.testEnvironment = env;

  	config.modules.push(module);
  	return module;
  }

  function processModule(name, options, executeNow) {
  	var modifiers = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};

  	if (objectType(options) === "function") {
  		executeNow = options;
  		options = undefined;
  	}

  	var module = createModule(name, options, modifiers);

  	// Move any hooks to a 'hooks' object
  	var testEnvironment = module.testEnvironment;
  	var hooks = module.hooks = {};

  	setHookFromEnvironment(hooks, testEnvironment, "before");
  	setHookFromEnvironment(hooks, testEnvironment, "beforeEach");
  	setHookFromEnvironment(hooks, testEnvironment, "afterEach");
  	setHookFromEnvironment(hooks, testEnvironment, "after");

  	var moduleFns = {
  		before: setHookFunction(module, "before"),
  		beforeEach: setHookFunction(module, "beforeEach"),
  		afterEach: setHookFunction(module, "afterEach"),
  		after: setHookFunction(module, "after")
  	};

  	var currentModule = config.currentModule;
  	if (objectType(executeNow) === "function") {
  		moduleStack.push(module);
  		config.currentModule = module;
  		executeNow.call(module.testEnvironment, moduleFns);
  		moduleStack.pop();
  		module = module.parentModule || currentModule;
  	}

  	config.currentModule = module;

  	function setHookFromEnvironment(hooks, environment, name) {
  		var potentialHook = environment[name];
  		hooks[name] = typeof potentialHook === "function" ? [potentialHook] : [];
  		delete environment[name];
  	}

  	function setHookFunction(module, hookName) {
  		return function setHook(callback) {
  			module.hooks[hookName].push(callback);
  		};
  	}
  }

  function module$1(name, options, executeNow) {
  	if (focused) {
  		return;
  	}

  	processModule(name, options, executeNow);
  }

  module$1.only = function () {
  	if (focused) {
  		return;
  	}

  	config.modules.length = 0;
  	config.queue.length = 0;

  	module$1.apply(undefined, arguments);

  	focused = true;
  };

  module$1.skip = function (name, options, executeNow) {
  	if (focused) {
  		return;
  	}

  	processModule(name, options, executeNow, { skip: true });
  };

  module$1.todo = function (name, options, executeNow) {
  	if (focused) {
  		return;
  	}

  	processModule(name, options, executeNow, { todo: true });
  };

  var LISTENERS = Object.create(null);
  var SUPPORTED_EVENTS = ["runStart", "suiteStart", "testStart", "assertion", "testEnd", "suiteEnd", "runEnd"];

  /**
   * Emits an event with the specified data to all currently registered listeners.
   * Callbacks will fire in the order in which they are registered (FIFO). This
   * function is not exposed publicly; it is used by QUnit internals to emit
   * logging events.
   *
   * @private
   * @method emit
   * @param {String} eventName
   * @param {Object} data
   * @return {Void}
   */
  function emit(eventName, data) {
  	if (objectType(eventName) !== "string") {
  		throw new TypeError("eventName must be a string when emitting an event");
  	}

  	// Clone the callbacks in case one of them registers a new callback
  	var originalCallbacks = LISTENERS[eventName];
  	var callbacks = originalCallbacks ? [].concat(toConsumableArray(originalCallbacks)) : [];

  	for (var i = 0; i < callbacks.length; i++) {
  		callbacks[i](data);
  	}
  }

  /**
   * Registers a callback as a listener to the specified event.
   *
   * @public
   * @method on
   * @param {String} eventName
   * @param {Function} callback
   * @return {Void}
   */
  function on(eventName, callback) {
  	if (objectType(eventName) !== "string") {
  		throw new TypeError("eventName must be a string when registering a listener");
  	} else if (!inArray(eventName, SUPPORTED_EVENTS)) {
  		var events = SUPPORTED_EVENTS.join(", ");
  		throw new Error("\"" + eventName + "\" is not a valid event; must be one of: " + events + ".");
  	} else if (objectType(callback) !== "function") {
  		throw new TypeError("callback must be a function when registering a listener");
  	}

  	if (!LISTENERS[eventName]) {
  		LISTENERS[eventName] = [];
  	}

  	// Don't register the same callback more than once
  	if (!inArray(callback, LISTENERS[eventName])) {
  		LISTENERS[eventName].push(callback);
  	}
  }

  function objectOrFunction(x) {
    var type = typeof x === 'undefined' ? 'undefined' : _typeof(x);
    return x !== null && (type === 'object' || type === 'function');
  }

  function isFunction(x) {
    return typeof x === 'function';
  }



  var _isArray = void 0;
  if (Array.isArray) {
    _isArray = Array.isArray;
  } else {
    _isArray = function _isArray(x) {
      return Object.prototype.toString.call(x) === '[object Array]';
    };
  }

  var isArray = _isArray;

  var len = 0;
  var vertxNext = void 0;
  var customSchedulerFn = void 0;

  var asap = function asap(callback, arg) {
    queue[len] = callback;
    queue[len + 1] = arg;
    len += 2;
    if (len === 2) {
      // If len is 2, that means that we need to schedule an async flush.
      // If additional callbacks are queued before the queue is flushed, they
      // will be processed by this flush that we are scheduling.
      if (customSchedulerFn) {
        customSchedulerFn(flush);
      } else {
        scheduleFlush();
      }
    }
  };

  function setScheduler(scheduleFn) {
    customSchedulerFn = scheduleFn;
  }

  function setAsap(asapFn) {
    asap = asapFn;
  }

  var browserWindow = typeof window !== 'undefined' ? window : undefined;
  var browserGlobal = browserWindow || {};
  var BrowserMutationObserver = browserGlobal.MutationObserver || browserGlobal.WebKitMutationObserver;
  var isNode = typeof self === 'undefined' && typeof process !== 'undefined' && {}.toString.call(process) === '[object process]';

  // test for web worker but not in IE10
  var isWorker = typeof Uint8ClampedArray !== 'undefined' && typeof importScripts !== 'undefined' && typeof MessageChannel !== 'undefined';

  // node
  function useNextTick() {
    // node version 0.10.x displays a deprecation warning when nextTick is used recursively
    // see https://github.com/cujojs/when/issues/410 for details
    return function () {
      return process.nextTick(flush);
    };
  }

  // vertx
  function useVertxTimer() {
    if (typeof vertxNext !== 'undefined') {
      return function () {
        vertxNext(flush);
      };
    }

    return useSetTimeout();
  }

  function useMutationObserver() {
    var iterations = 0;
    var observer = new BrowserMutationObserver(flush);
    var node = document.createTextNode('');
    observer.observe(node, { characterData: true });

    return function () {
      node.data = iterations = ++iterations % 2;
    };
  }

  // web worker
  function useMessageChannel() {
    var channel = new MessageChannel();
    channel.port1.onmessage = flush;
    return function () {
      return channel.port2.postMessage(0);
    };
  }

  function useSetTimeout() {
    // Store setTimeout reference so es6-promise will be unaffected by
    // other code modifying setTimeout (like sinon.useFakeTimers())
    var globalSetTimeout = setTimeout;
    return function () {
      return globalSetTimeout(flush, 1);
    };
  }

  var queue = new Array(1000);
  function flush() {
    for (var i = 0; i < len; i += 2) {
      var callback = queue[i];
      var arg = queue[i + 1];

      callback(arg);

      queue[i] = undefined;
      queue[i + 1] = undefined;
    }

    len = 0;
  }

  function attemptVertx() {
    try {
      var vertx = Function('return this')().require('vertx');
      vertxNext = vertx.runOnLoop || vertx.runOnContext;
      return useVertxTimer();
    } catch (e) {
      return useSetTimeout();
    }
  }

  var scheduleFlush = void 0;
  // Decide what async method to use to triggering processing of queued callbacks:
  if (isNode) {
    scheduleFlush = useNextTick();
  } else if (BrowserMutationObserver) {
    scheduleFlush = useMutationObserver();
  } else if (isWorker) {
    scheduleFlush = useMessageChannel();
  } else if (browserWindow === undefined && "function" === 'function') {
    scheduleFlush = attemptVertx();
  } else {
    scheduleFlush = useSetTimeout();
  }

  function then(onFulfillment, onRejection) {
    var parent = this;

    var child = new this.constructor(noop);

    if (child[PROMISE_ID] === undefined) {
      makePromise(child);
    }

    var _state = parent._state;


    if (_state) {
      var callback = arguments[_state - 1];
      asap(function () {
        return invokeCallback(_state, child, callback, parent._result);
      });
    } else {
      subscribe(parent, child, onFulfillment, onRejection);
    }

    return child;
  }

  /**
    `Promise.resolve` returns a promise that will become resolved with the
    passed `value`. It is shorthand for the following:

    ```javascript
    let promise = new Promise(function(resolve, reject){
      resolve(1);
    });

    promise.then(function(value){
      // value === 1
    });
    ```

    Instead of writing the above, your code now simply becomes the following:

    ```javascript
    let promise = Promise.resolve(1);

    promise.then(function(value){
      // value === 1
    });
    ```

    @method resolve
    @static
    @param {Any} value value that the returned promise will be resolved with
    Useful for tooling.
    @return {Promise} a promise that will become fulfilled with the given
    `value`
  */
  function resolve$1(object) {
    /*jshint validthis:true */
    var Constructor = this;

    if (object && (typeof object === 'undefined' ? 'undefined' : _typeof(object)) === 'object' && object.constructor === Constructor) {
      return object;
    }

    var promise = new Constructor(noop);
    resolve(promise, object);
    return promise;
  }

  var PROMISE_ID = Math.random().toString(36).substring(2);

  function noop() {}

  var PENDING = void 0;
  var FULFILLED = 1;
  var REJECTED = 2;

  function selfFulfillment() {
    return new TypeError("You cannot resolve a promise with itself");
  }

  function cannotReturnOwn() {
    return new TypeError('A promises callback cannot return that same promise.');
  }

  function tryThen(then$$1, value, fulfillmentHandler, rejectionHandler) {
    try {
      then$$1.call(value, fulfillmentHandler, rejectionHandler);
    } catch (e) {
      return e;
    }
  }

  function handleForeignThenable(promise, thenable, then$$1) {
    asap(function (promise) {
      var sealed = false;
      var error = tryThen(then$$1, thenable, function (value) {
        if (sealed) {
          return;
        }
        sealed = true;
        if (thenable !== value) {
          resolve(promise, value);
        } else {
          fulfill(promise, value);
        }
      }, function (reason) {
        if (sealed) {
          return;
        }
        sealed = true;

        reject(promise, reason);
      }, 'Settle: ' + (promise._label || ' unknown promise'));

      if (!sealed && error) {
        sealed = true;
        reject(promise, error);
      }
    }, promise);
  }

  function handleOwnThenable(promise, thenable) {
    if (thenable._state === FULFILLED) {
      fulfill(promise, thenable._result);
    } else if (thenable._state === REJECTED) {
      reject(promise, thenable._result);
    } else {
      subscribe(thenable, undefined, function (value) {
        return resolve(promise, value);
      }, function (reason) {
        return reject(promise, reason);
      });
    }
  }

  function handleMaybeThenable(promise, maybeThenable, then$$1) {
    if (maybeThenable.constructor === promise.constructor && then$$1 === then && maybeThenable.constructor.resolve === resolve$1) {
      handleOwnThenable(promise, maybeThenable);
    } else {
      if (then$$1 === undefined) {
        fulfill(promise, maybeThenable);
      } else if (isFunction(then$$1)) {
        handleForeignThenable(promise, maybeThenable, then$$1);
      } else {
        fulfill(promise, maybeThenable);
      }
    }
  }

  function resolve(promise, value) {
    if (promise === value) {
      reject(promise, selfFulfillment());
    } else if (objectOrFunction(value)) {
      var then$$1 = void 0;
      try {
        then$$1 = value.then;
      } catch (error) {
        reject(promise, error);
        return;
      }
      handleMaybeThenable(promise, value, then$$1);
    } else {
      fulfill(promise, value);
    }
  }

  function publishRejection(promise) {
    if (promise._onerror) {
      promise._onerror(promise._result);
    }

    publish(promise);
  }

  function fulfill(promise, value) {
    if (promise._state !== PENDING) {
      return;
    }

    promise._result = value;
    promise._state = FULFILLED;

    if (promise._subscribers.length !== 0) {
      asap(publish, promise);
    }
  }

  function reject(promise, reason) {
    if (promise._state !== PENDING) {
      return;
    }
    promise._state = REJECTED;
    promise._result = reason;

    asap(publishRejection, promise);
  }

  function subscribe(parent, child, onFulfillment, onRejection) {
    var _subscribers = parent._subscribers;
    var length = _subscribers.length;


    parent._onerror = null;

    _subscribers[length] = child;
    _subscribers[length + FULFILLED] = onFulfillment;
    _subscribers[length + REJECTED] = onRejection;

    if (length === 0 && parent._state) {
      asap(publish, parent);
    }
  }

  function publish(promise) {
    var subscribers = promise._subscribers;
    var settled = promise._state;

    if (subscribers.length === 0) {
      return;
    }

    var child = void 0,
        callback = void 0,
        detail = promise._result;

    for (var i = 0; i < subscribers.length; i += 3) {
      child = subscribers[i];
      callback = subscribers[i + settled];

      if (child) {
        invokeCallback(settled, child, callback, detail);
      } else {
        callback(detail);
      }
    }

    promise._subscribers.length = 0;
  }

  function invokeCallback(settled, promise, callback, detail) {
    var hasCallback = isFunction(callback),
        value = void 0,
        error = void 0,
        succeeded = true;

    if (hasCallback) {
      try {
        value = callback(detail);
      } catch (e) {
        succeeded = false;
        error = e;
      }

      if (promise === value) {
        reject(promise, cannotReturnOwn());
        return;
      }
    } else {
      value = detail;
    }

    if (promise._state !== PENDING) {
      // noop
    } else if (hasCallback && succeeded) {
      resolve(promise, value);
    } else if (succeeded === false) {
      reject(promise, error);
    } else if (settled === FULFILLED) {
      fulfill(promise, value);
    } else if (settled === REJECTED) {
      reject(promise, value);
    }
  }

  function initializePromise(promise, resolver) {
    try {
      resolver(function resolvePromise(value) {
        resolve(promise, value);
      }, function rejectPromise(reason) {
        reject(promise, reason);
      });
    } catch (e) {
      reject(promise, e);
    }
  }

  var id = 0;
  function nextId() {
    return id++;
  }

  function makePromise(promise) {
    promise[PROMISE_ID] = id++;
    promise._state = undefined;
    promise._result = undefined;
    promise._subscribers = [];
  }

  function validationError() {
    return new Error('Array Methods must be provided an Array');
  }

  var Enumerator = function () {
    function Enumerator(Constructor, input) {
      classCallCheck(this, Enumerator);

      this._instanceConstructor = Constructor;
      this.promise = new Constructor(noop);

      if (!this.promise[PROMISE_ID]) {
        makePromise(this.promise);
      }

      if (isArray(input)) {
        this.length = input.length;
        this._remaining = input.length;

        this._result = new Array(this.length);

        if (this.length === 0) {
          fulfill(this.promise, this._result);
        } else {
          this.length = this.length || 0;
          this._enumerate(input);
          if (this._remaining === 0) {
            fulfill(this.promise, this._result);
          }
        }
      } else {
        reject(this.promise, validationError());
      }
    }

    createClass(Enumerator, [{
      key: '_enumerate',
      value: function _enumerate(input) {
        for (var i = 0; this._state === PENDING && i < input.length; i++) {
          this._eachEntry(input[i], i);
        }
      }
    }, {
      key: '_eachEntry',
      value: function _eachEntry(entry, i) {
        var c = this._instanceConstructor;
        var resolve$$1 = c.resolve;


        if (resolve$$1 === resolve$1) {
          var _then = void 0;
          var error = void 0;
          var didError = false;
          try {
            _then = entry.then;
          } catch (e) {
            didError = true;
            error = e;
          }

          if (_then === then && entry._state !== PENDING) {
            this._settledAt(entry._state, i, entry._result);
          } else if (typeof _then !== 'function') {
            this._remaining--;
            this._result[i] = entry;
          } else if (c === Promise$2) {
            var promise = new c(noop);
            if (didError) {
              reject(promise, error);
            } else {
              handleMaybeThenable(promise, entry, _then);
            }
            this._willSettleAt(promise, i);
          } else {
            this._willSettleAt(new c(function (resolve$$1) {
              return resolve$$1(entry);
            }), i);
          }
        } else {
          this._willSettleAt(resolve$$1(entry), i);
        }
      }
    }, {
      key: '_settledAt',
      value: function _settledAt(state, i, value) {
        var promise = this.promise;


        if (promise._state === PENDING) {
          this._remaining--;

          if (state === REJECTED) {
            reject(promise, value);
          } else {
            this._result[i] = value;
          }
        }

        if (this._remaining === 0) {
          fulfill(promise, this._result);
        }
      }
    }, {
      key: '_willSettleAt',
      value: function _willSettleAt(promise, i) {
        var enumerator = this;

        subscribe(promise, undefined, function (value) {
          return enumerator._settledAt(FULFILLED, i, value);
        }, function (reason) {
          return enumerator._settledAt(REJECTED, i, reason);
        });
      }
    }]);
    return Enumerator;
  }();

  /**
    `Promise.all` accepts an array of promises, and returns a new promise which
    is fulfilled with an array of fulfillment values for the passed promises, or
    rejected with the reason of the first passed promise to be rejected. It casts all
    elements of the passed iterable to promises as it runs this algorithm.

    Example:

    ```javascript
    let promise1 = resolve(1);
    let promise2 = resolve(2);
    let promise3 = resolve(3);
    let promises = [ promise1, promise2, promise3 ];

    Promise.all(promises).then(function(array){
      // The array here would be [ 1, 2, 3 ];
    });
    ```

    If any of the `promises` given to `all` are rejected, the first promise
    that is rejected will be given as an argument to the returned promises's
    rejection handler. For example:

    Example:

    ```javascript
    let promise1 = resolve(1);
    let promise2 = reject(new Error("2"));
    let promise3 = reject(new Error("3"));
    let promises = [ promise1, promise2, promise3 ];

    Promise.all(promises).then(function(array){
      // Code here never runs because there are rejected promises!
    }, function(error) {
      // error.message === "2"
    });
    ```

    @method all
    @static
    @param {Array} entries array of promises
    @param {String} label optional string for labeling the promise.
    Useful for tooling.
    @return {Promise} promise that is fulfilled when all `promises` have been
    fulfilled, or rejected if any of them become rejected.
    @static
  */
  function all(entries) {
    return new Enumerator(this, entries).promise;
  }

  /**
    `Promise.race` returns a new promise which is settled in the same way as the
    first passed promise to settle.

    Example:

    ```javascript
    let promise1 = new Promise(function(resolve, reject){
      setTimeout(function(){
        resolve('promise 1');
      }, 200);
    });

    let promise2 = new Promise(function(resolve, reject){
      setTimeout(function(){
        resolve('promise 2');
      }, 100);
    });

    Promise.race([promise1, promise2]).then(function(result){
      // result === 'promise 2' because it was resolved before promise1
      // was resolved.
    });
    ```

    `Promise.race` is deterministic in that only the state of the first
    settled promise matters. For example, even if other promises given to the
    `promises` array argument are resolved, but the first settled promise has
    become rejected before the other promises became fulfilled, the returned
    promise will become rejected:

    ```javascript
    let promise1 = new Promise(function(resolve, reject){
      setTimeout(function(){
        resolve('promise 1');
      }, 200);
    });

    let promise2 = new Promise(function(resolve, reject){
      setTimeout(function(){
        reject(new Error('promise 2'));
      }, 100);
    });

    Promise.race([promise1, promise2]).then(function(result){
      // Code here never runs
    }, function(reason){
      // reason.message === 'promise 2' because promise 2 became rejected before
      // promise 1 became fulfilled
    });
    ```

    An example real-world use case is implementing timeouts:

    ```javascript
    Promise.race([ajax('foo.json'), timeout(5000)])
    ```

    @method race
    @static
    @param {Array} promises array of promises to observe
    Useful for tooling.
    @return {Promise} a promise which settles in the same way as the first passed
    promise to settle.
  */
  function race(entries) {
    /*jshint validthis:true */
    var Constructor = this;

    if (!isArray(entries)) {
      return new Constructor(function (_, reject) {
        return reject(new TypeError('You must pass an array to race.'));
      });
    } else {
      return new Constructor(function (resolve, reject) {
        var length = entries.length;
        for (var i = 0; i < length; i++) {
          Constructor.resolve(entries[i]).then(resolve, reject);
        }
      });
    }
  }

  /**
    `Promise.reject` returns a promise rejected with the passed `reason`.
    It is shorthand for the following:

    ```javascript
    let promise = new Promise(function(resolve, reject){
      reject(new Error('WHOOPS'));
    });

    promise.then(function(value){
      // Code here doesn't run because the promise is rejected!
    }, function(reason){
      // reason.message === 'WHOOPS'
    });
    ```

    Instead of writing the above, your code now simply becomes the following:

    ```javascript
    let promise = Promise.reject(new Error('WHOOPS'));

    promise.then(function(value){
      // Code here doesn't run because the promise is rejected!
    }, function(reason){
      // reason.message === 'WHOOPS'
    });
    ```

    @method reject
    @static
    @param {Any} reason value that the returned promise will be rejected with.
    Useful for tooling.
    @return {Promise} a promise rejected with the given `reason`.
  */
  function reject$1(reason) {
    /*jshint validthis:true */
    var Constructor = this;
    var promise = new Constructor(noop);
    reject(promise, reason);
    return promise;
  }

  function needsResolver() {
    throw new TypeError('You must pass a resolver function as the first argument to the promise constructor');
  }

  function needsNew() {
    throw new TypeError("Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function.");
  }

  /**
    Promise objects represent the eventual result of an asynchronous operation. The
    primary way of interacting with a promise is through its `then` method, which
    registers callbacks to receive either a promise's eventual value or the reason
    why the promise cannot be fulfilled.

    Terminology
    -----------

    - `promise` is an object or function with a `then` method whose behavior conforms to this specification.
    - `thenable` is an object or function that defines a `then` method.
    - `value` is any legal JavaScript value (including undefined, a thenable, or a promise).
    - `exception` is a value that is thrown using the throw statement.
    - `reason` is a value that indicates why a promise was rejected.
    - `settled` the final resting state of a promise, fulfilled or rejected.

    A promise can be in one of three states: pending, fulfilled, or rejected.

    Promises that are fulfilled have a fulfillment value and are in the fulfilled
    state.  Promises that are rejected have a rejection reason and are in the
    rejected state.  A fulfillment value is never a thenable.

    Promises can also be said to *resolve* a value.  If this value is also a
    promise, then the original promise's settled state will match the value's
    settled state.  So a promise that *resolves* a promise that rejects will
    itself reject, and a promise that *resolves* a promise that fulfills will
    itself fulfill.


    Basic Usage:
    ------------

    ```js
    let promise = new Promise(function(resolve, reject) {
      // on success
      resolve(value);

      // on failure
      reject(reason);
    });

    promise.then(function(value) {
      // on fulfillment
    }, function(reason) {
      // on rejection
    });
    ```

    Advanced Usage:
    ---------------

    Promises shine when abstracting away asynchronous interactions such as
    `XMLHttpRequest`s.

    ```js
    function getJSON(url) {
      return new Promise(function(resolve, reject){
        let xhr = new XMLHttpRequest();

        xhr.open('GET', url);
        xhr.onreadystatechange = handler;
        xhr.responseType = 'json';
        xhr.setRequestHeader('Accept', 'application/json');
        xhr.send();

        function handler() {
          if (this.readyState === this.DONE) {
            if (this.status === 200) {
              resolve(this.response);
            } else {
              reject(new Error('getJSON: `' + url + '` failed with status: [' + this.status + ']'));
            }
          }
        };
      });
    }

    getJSON('/posts.json').then(function(json) {
      // on fulfillment
    }, function(reason) {
      // on rejection
    });
    ```

    Unlike callbacks, promises are great composable primitives.

    ```js
    Promise.all([
      getJSON('/posts'),
      getJSON('/comments')
    ]).then(function(values){
      values[0] // => postsJSON
      values[1] // => commentsJSON

      return values;
    });
    ```

    @class Promise
    @param {Function} resolver
    Useful for tooling.
    @constructor
  */

  var Promise$2 = function () {
    function Promise(resolver) {
      classCallCheck(this, Promise);

      this[PROMISE_ID] = nextId();
      this._result = this._state = undefined;
      this._subscribers = [];

      if (noop !== resolver) {
        typeof resolver !== 'function' && needsResolver();
        this instanceof Promise ? initializePromise(this, resolver) : needsNew();
      }
    }

    /**
    The primary way of interacting with a promise is through its `then` method,
    which registers callbacks to receive either a promise's eventual value or the
    reason why the promise cannot be fulfilled.
     ```js
    findUser().then(function(user){
      // user is available
    }, function(reason){
      // user is unavailable, and you are given the reason why
    });
    ```
     Chaining
    --------
     The return value of `then` is itself a promise.  This second, 'downstream'
    promise is resolved with the return value of the first promise's fulfillment
    or rejection handler, or rejected if the handler throws an exception.
     ```js
    findUser().then(function (user) {
      return user.name;
    }, function (reason) {
      return 'default name';
    }).then(function (userName) {
      // If `findUser` fulfilled, `userName` will be the user's name, otherwise it
      // will be `'default name'`
    });
     findUser().then(function (user) {
      throw new Error('Found user, but still unhappy');
    }, function (reason) {
      throw new Error('`findUser` rejected and we're unhappy');
    }).then(function (value) {
      // never reached
    }, function (reason) {
      // if `findUser` fulfilled, `reason` will be 'Found user, but still unhappy'.
      // If `findUser` rejected, `reason` will be '`findUser` rejected and we're unhappy'.
    });
    ```
    If the downstream promise does not specify a rejection handler, rejection reasons will be propagated further downstream.
     ```js
    findUser().then(function (user) {
      throw new PedagogicalException('Upstream error');
    }).then(function (value) {
      // never reached
    }).then(function (value) {
      // never reached
    }, function (reason) {
      // The `PedgagocialException` is propagated all the way down to here
    });
    ```
     Assimilation
    ------------
     Sometimes the value you want to propagate to a downstream promise can only be
    retrieved asynchronously. This can be achieved by returning a promise in the
    fulfillment or rejection handler. The downstream promise will then be pending
    until the returned promise is settled. This is called *assimilation*.
     ```js
    findUser().then(function (user) {
      return findCommentsByAuthor(user);
    }).then(function (comments) {
      // The user's comments are now available
    });
    ```
     If the assimliated promise rejects, then the downstream promise will also reject.
     ```js
    findUser().then(function (user) {
      return findCommentsByAuthor(user);
    }).then(function (comments) {
      // If `findCommentsByAuthor` fulfills, we'll have the value here
    }, function (reason) {
      // If `findCommentsByAuthor` rejects, we'll have the reason here
    });
    ```
     Simple Example
    --------------
     Synchronous Example
     ```javascript
    let result;
     try {
      result = findResult();
      // success
    } catch(reason) {
      // failure
    }
    ```
     Errback Example
     ```js
    findResult(function(result, err){
      if (err) {
        // failure
      } else {
        // success
      }
    });
    ```
     Promise Example;
     ```javascript
    findResult().then(function(result){
      // success
    }, function(reason){
      // failure
    });
    ```
     Advanced Example
    --------------
     Synchronous Example
     ```javascript
    let author, books;
     try {
      author = findAuthor();
      books  = findBooksByAuthor(author);
      // success
    } catch(reason) {
      // failure
    }
    ```
     Errback Example
     ```js
     function foundBooks(books) {
     }
     function failure(reason) {
     }
     findAuthor(function(author, err){
      if (err) {
        failure(err);
        // failure
      } else {
        try {
          findBoooksByAuthor(author, function(books, err) {
            if (err) {
              failure(err);
            } else {
              try {
                foundBooks(books);
              } catch(reason) {
                failure(reason);
              }
            }
          });
        } catch(error) {
          failure(err);
        }
        // success
      }
    });
    ```
     Promise Example;
     ```javascript
    findAuthor().
      then(findBooksByAuthor).
      then(function(books){
        // found books
    }).catch(function(reason){
      // something went wrong
    });
    ```
     @method then
    @param {Function} onFulfilled
    @param {Function} onRejected
    Useful for tooling.
    @return {Promise}
    */

    /**
    `catch` is simply sugar for `then(undefined, onRejection)` which makes it the same
    as the catch block of a try/catch statement.
    ```js
    function findAuthor(){
    throw new Error('couldn't find that author');
    }
    // synchronous
    try {
    findAuthor();
    } catch(reason) {
    // something went wrong
    }
    // async with promises
    findAuthor().catch(function(reason){
    // something went wrong
    });
    ```
    @method catch
    @param {Function} onRejection
    Useful for tooling.
    @return {Promise}
    */


    createClass(Promise, [{
      key: 'catch',
      value: function _catch(onRejection) {
        return this.then(null, onRejection);
      }

      /**
        `finally` will be invoked regardless of the promise's fate just as native
        try/catch/finally behaves
      
        Synchronous example:
      
        ```js
        findAuthor() {
          if (Math.random() > 0.5) {
            throw new Error();
          }
          return new Author();
        }
      
        try {
          return findAuthor(); // succeed or fail
        } catch(error) {
          return findOtherAuther();
        } finally {
          // always runs
          // doesn't affect the return value
        }
        ```
      
        Asynchronous example:
      
        ```js
        findAuthor().catch(function(reason){
          return findOtherAuther();
        }).finally(function(){
          // author was either found, or not
        });
        ```
      
        @method finally
        @param {Function} callback
        @return {Promise}
      */

    }, {
      key: 'finally',
      value: function _finally(callback) {
        var promise = this;
        var constructor = promise.constructor;

        if (isFunction(callback)) {
          return promise.then(function (value) {
            return constructor.resolve(callback()).then(function () {
              return value;
            });
          }, function (reason) {
            return constructor.resolve(callback()).then(function () {
              throw reason;
            });
          });
        }

        return promise.then(callback, callback);
      }
    }]);
    return Promise;
  }();

  Promise$2.prototype.then = then;
  Promise$2.all = all;
  Promise$2.race = race;
  Promise$2.resolve = resolve$1;
  Promise$2.reject = reject$1;
  Promise$2._setScheduler = setScheduler;
  Promise$2._setAsap = setAsap;
  Promise$2._asap = asap;

  /*global self*/
  function polyfill() {
    var local = void 0;

    if (typeof global !== 'undefined') {
      local = global;
    } else if (typeof self !== 'undefined') {
      local = self;
    } else {
      try {
        local = Function('return this')();
      } catch (e) {
        throw new Error('polyfill failed because global object is unavailable in this environment');
      }
    }

    var P = local.Promise;

    if (P) {
      var promiseToString = null;
      try {
        promiseToString = Object.prototype.toString.call(P.resolve());
      } catch (e) {
        // silently ignored
      }

      if (promiseToString === '[object Promise]' && !P.cast) {
        return;
      }
    }

    local.Promise = Promise$2;
  }

  // Strange compat..
  Promise$2.polyfill = polyfill;
  Promise$2.Promise = Promise$2;

  var Promise$1 = typeof Promise !== "undefined" ? Promise : Promise$2;

  // Register logging callbacks
  function registerLoggingCallbacks(obj) {
  	var i,
  	    l,
  	    key,
  	    callbackNames = ["begin", "done", "log", "testStart", "testDone", "moduleStart", "moduleDone"];

  	function registerLoggingCallback(key) {
  		var loggingCallback = function loggingCallback(callback) {
  			if (objectType(callback) !== "function") {
  				throw new Error("QUnit logging methods require a callback function as their first parameters.");
  			}

  			config.callbacks[key].push(callback);
  		};

  		return loggingCallback;
  	}

  	for (i = 0, l = callbackNames.length; i < l; i++) {
  		key = callbackNames[i];

  		// Initialize key collection of logging callback
  		if (objectType(config.callbacks[key]) === "undefined") {
  			config.callbacks[key] = [];
  		}

  		obj[key] = registerLoggingCallback(key);
  	}
  }

  function runLoggingCallbacks(key, args) {
  	var callbacks = config.callbacks[key];

  	// Handling 'log' callbacks separately. Unlike the other callbacks,
  	// the log callback is not controlled by the processing queue,
  	// but rather used by asserts. Hence to promisfy the 'log' callback
  	// would mean promisfying each step of a test
  	if (key === "log") {
  		callbacks.map(function (callback) {
  			return callback(args);
  		});
  		return;
  	}

  	// ensure that each callback is executed serially
  	return callbacks.reduce(function (promiseChain, callback) {
  		return promiseChain.then(function () {
  			return Promise$1.resolve(callback(args));
  		});
  	}, Promise$1.resolve([]));
  }

  // Doesn't support IE9, it will return undefined on these browsers
  // See also https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Error/Stack
  var fileName = (sourceFromStacktrace(0) || "").replace(/(:\d+)+\)?/, "").replace(/.+\//, "");

  function extractStacktrace(e, offset) {
  	offset = offset === undefined ? 4 : offset;

  	var stack, include, i;

  	if (e && e.stack) {
  		stack = e.stack.split("\n");
  		if (/^error$/i.test(stack[0])) {
  			stack.shift();
  		}
  		if (fileName) {
  			include = [];
  			for (i = offset; i < stack.length; i++) {
  				if (stack[i].indexOf(fileName) !== -1) {
  					break;
  				}
  				include.push(stack[i]);
  			}
  			if (include.length) {
  				return include.join("\n");
  			}
  		}
  		return stack[offset];
  	}
  }

  function sourceFromStacktrace(offset) {
  	var error = new Error();

  	// Support: Safari <=7 only, IE <=10 - 11 only
  	// Not all browsers generate the `stack` property for `new Error()`, see also #636
  	if (!error.stack) {
  		try {
  			throw error;
  		} catch (err) {
  			error = err;
  		}
  	}

  	return extractStacktrace(error, offset);
  }

  var priorityCount = 0;
  var unitSampler = void 0;

  // This is a queue of functions that are tasks within a single test.
  // After tests are dequeued from config.queue they are expanded into
  // a set of tasks in this queue.
  var taskQueue = [];

  /**
   * Advances the taskQueue to the next task. If the taskQueue is empty,
   * process the testQueue
   */
  function advance() {
  	advanceTaskQueue();

  	if (!taskQueue.length && !config.blocking && !config.current) {
  		advanceTestQueue();
  	}
  }

  /**
   * Advances the taskQueue with an increased depth
   */
  function advanceTaskQueue() {
  	var start = now();
  	config.depth = (config.depth || 0) + 1;

  	processTaskQueue(start);

  	config.depth--;
  }

  /**
   * Process the first task on the taskQueue as a promise.
   * Each task is a function returned by https://github.com/qunitjs/qunit/blob/master/src/test.js#L381
   */
  function processTaskQueue(start) {
  	if (taskQueue.length && !config.blocking) {
  		var elapsedTime = now() - start;

  		if (!defined.setTimeout || config.updateRate <= 0 || elapsedTime < config.updateRate) {
  			var task = taskQueue.shift();
  			Promise$1.resolve(task()).then(function () {
  				if (!taskQueue.length) {
  					advance();
  				} else {
  					processTaskQueue(start);
  				}
  			});
  		} else {
  			setTimeout$1(advance);
  		}
  	}
  }

  /**
   * Advance the testQueue to the next test to process. Call done() if testQueue completes.
   */
  function advanceTestQueue() {
  	if (!config.blocking && !config.queue.length && config.depth === 0) {
  		done();
  		return;
  	}

  	var testTasks = config.queue.shift();
  	addToTaskQueue(testTasks());

  	if (priorityCount > 0) {
  		priorityCount--;
  	}

  	advance();
  }

  /**
   * Enqueue the tasks for a test into the task queue.
   * @param {Array} tasksArray
   */
  function addToTaskQueue(tasksArray) {
  	taskQueue.push.apply(taskQueue, toConsumableArray(tasksArray));
  }

  /**
   * Return the number of tasks remaining in the task queue to be processed.
   * @return {Number}
   */
  function taskQueueLength() {
  	return taskQueue.length;
  }

  /**
   * Adds a test to the TestQueue for execution.
   * @param {Function} testTasksFunc
   * @param {Boolean} prioritize
   * @param {String} seed
   */
  function addToTestQueue(testTasksFunc, prioritize, seed) {
  	if (prioritize) {
  		config.queue.splice(priorityCount++, 0, testTasksFunc);
  	} else if (seed) {
  		if (!unitSampler) {
  			unitSampler = unitSamplerGenerator(seed);
  		}

  		// Insert into a random position after all prioritized items
  		var index = Math.floor(unitSampler() * (config.queue.length - priorityCount + 1));
  		config.queue.splice(priorityCount + index, 0, testTasksFunc);
  	} else {
  		config.queue.push(testTasksFunc);
  	}
  }

  /**
   * Creates a seeded "sample" generator which is used for randomizing tests.
   */
  function unitSamplerGenerator(seed) {

  	// 32-bit xorshift, requires only a nonzero seed
  	// http://excamera.com/sphinx/article-xorshift.html
  	var sample = parseInt(generateHash(seed), 16) || -1;
  	return function () {
  		sample ^= sample << 13;
  		sample ^= sample >>> 17;
  		sample ^= sample << 5;

  		// ECMAScript has no unsigned number type
  		if (sample < 0) {
  			sample += 0x100000000;
  		}

  		return sample / 0x100000000;
  	};
  }

  /**
   * This function is called when the ProcessingQueue is done processing all
   * items. It handles emitting the final run events.
   */
  function done() {
  	var storage = config.storage;

  	ProcessingQueue.finished = true;

  	var runtime = now() - config.started;
  	var passed = config.stats.all - config.stats.bad;

  	if (config.stats.all === 0) {

  		if (config.filter && config.filter.length) {
  			throw new Error("No tests matched the filter \"" + config.filter + "\".");
  		}

  		if (config.module && config.module.length) {
  			throw new Error("No tests matched the module \"" + config.module + "\".");
  		}

  		if (config.moduleId && config.moduleId.length) {
  			throw new Error("No tests matched the moduleId \"" + config.moduleId + "\".");
  		}

  		if (config.testId && config.testId.length) {
  			throw new Error("No tests matched the testId \"" + config.testId + "\".");
  		}

  		throw new Error("No tests were run.");
  	}

  	emit("runEnd", globalSuite.end(true));
  	runLoggingCallbacks("done", {
  		passed: passed,
  		failed: config.stats.bad,
  		total: config.stats.all,
  		runtime: runtime
  	}).then(function () {

  		// Clear own storage items if all tests passed
  		if (storage && config.stats.bad === 0) {
  			for (var i = storage.length - 1; i >= 0; i--) {
  				var key = storage.key(i);

  				if (key.indexOf("qunit-test-") === 0) {
  					storage.removeItem(key);
  				}
  			}
  		}
  	});
  }

  var ProcessingQueue = {
  	finished: false,
  	add: addToTestQueue,
  	advance: advance,
  	taskCount: taskQueueLength
  };

  var TestReport = function () {
  	function TestReport(name, suite, options) {
  		classCallCheck(this, TestReport);

  		this.name = name;
  		this.suiteName = suite.name;
  		this.fullName = suite.fullName.concat(name);
  		this.runtime = 0;
  		this.assertions = [];

  		this.skipped = !!options.skip;
  		this.todo = !!options.todo;

  		this.valid = options.valid;

  		this._startTime = 0;
  		this._endTime = 0;

  		suite.pushTest(this);
  	}

  	createClass(TestReport, [{
  		key: "start",
  		value: function start(recordTime) {
  			if (recordTime) {
  				this._startTime = performanceNow();
  				if (performance) {
  					performance.mark("qunit_test_start");
  				}
  			}

  			return {
  				name: this.name,
  				suiteName: this.suiteName,
  				fullName: this.fullName.slice()
  			};
  		}
  	}, {
  		key: "end",
  		value: function end(recordTime) {
  			if (recordTime) {
  				this._endTime = performanceNow();
  				if (performance) {
  					performance.mark("qunit_test_end");

  					var testName = this.fullName.join(" – ");

  					measure("QUnit Test: " + testName, "qunit_test_start", "qunit_test_end");
  				}
  			}

  			return extend(this.start(), {
  				runtime: this.getRuntime(),
  				status: this.getStatus(),
  				errors: this.getFailedAssertions(),
  				assertions: this.getAssertions()
  			});
  		}
  	}, {
  		key: "pushAssertion",
  		value: function pushAssertion(assertion) {
  			this.assertions.push(assertion);
  		}
  	}, {
  		key: "getRuntime",
  		value: function getRuntime() {
  			return this._endTime - this._startTime;
  		}
  	}, {
  		key: "getStatus",
  		value: function getStatus() {
  			if (this.skipped) {
  				return "skipped";
  			}

  			var testPassed = this.getFailedAssertions().length > 0 ? this.todo : !this.todo;

  			if (!testPassed) {
  				return "failed";
  			} else if (this.todo) {
  				return "todo";
  			} else {
  				return "passed";
  			}
  		}
  	}, {
  		key: "getFailedAssertions",
  		value: function getFailedAssertions() {
  			return this.assertions.filter(function (assertion) {
  				return !assertion.passed;
  			});
  		}
  	}, {
  		key: "getAssertions",
  		value: function getAssertions() {
  			return this.assertions.slice();
  		}

  		// Remove actual and expected values from assertions. This is to prevent
  		// leaking memory throughout a test suite.

  	}, {
  		key: "slimAssertions",
  		value: function slimAssertions() {
  			this.assertions = this.assertions.map(function (assertion) {
  				delete assertion.actual;
  				delete assertion.expected;
  				return assertion;
  			});
  		}
  	}]);
  	return TestReport;
  }();

  var focused$1 = false;

  function Test(settings) {
  	var i, l;

  	++Test.count;

  	this.expected = null;
  	this.assertions = [];
  	this.semaphore = 0;
  	this.module = config.currentModule;
  	this.steps = [];
  	this.timeout = undefined;
  	this.errorForStack = new Error();

  	// If a module is skipped, all its tests and the tests of the child suites
  	// should be treated as skipped even if they are defined as `only` or `todo`.
  	// As for `todo` module, all its tests will be treated as `todo` except for
  	// tests defined as `skip` which will be left intact.
  	//
  	// So, if a test is defined as `todo` and is inside a skipped module, we should
  	// then treat that test as if was defined as `skip`.
  	if (this.module.skip) {
  		settings.skip = true;
  		settings.todo = false;

  		// Skipped tests should be left intact
  	} else if (this.module.todo && !settings.skip) {
  		settings.todo = true;
  	}

  	extend(this, settings);

  	this.testReport = new TestReport(settings.testName, this.module.suiteReport, {
  		todo: settings.todo,
  		skip: settings.skip,
  		valid: this.valid()
  	});

  	// Register unique strings
  	for (i = 0, l = this.module.tests; i < l.length; i++) {
  		if (this.module.tests[i].name === this.testName) {
  			this.testName += " ";
  		}
  	}

  	this.testId = generateHash(this.module.name, this.testName);

  	this.module.tests.push({
  		name: this.testName,
  		testId: this.testId,
  		skip: !!settings.skip
  	});

  	if (settings.skip) {

  		// Skipped tests will fully ignore any sent callback
  		this.callback = function () {};
  		this.async = false;
  		this.expected = 0;
  	} else {
  		if (typeof this.callback !== "function") {
  			var method = this.todo ? "todo" : "test";

  			// eslint-disable-next-line max-len
  			throw new TypeError("You must provide a function as a test callback to QUnit." + method + "(\"" + settings.testName + "\")");
  		}

  		this.assert = new Assert(this);
  	}
  }

  Test.count = 0;

  function getNotStartedModules(startModule) {
  	var module = startModule,
  	    modules = [];

  	while (module && module.testsRun === 0) {
  		modules.push(module);
  		module = module.parentModule;
  	}

  	// The above push modules from the child to the parent
  	// return a reversed order with the top being the top most parent module
  	return modules.reverse();
  }

  Test.prototype = {

  	// generating a stack trace can be expensive, so using a getter defers this until we need it
  	get stack() {
  		return extractStacktrace(this.errorForStack, 2);
  	},

  	before: function before() {
  		var _this = this;

  		var module = this.module,
  		    notStartedModules = getNotStartedModules(module);

  		// ensure the callbacks are executed serially for each module
  		var callbackPromises = notStartedModules.reduce(function (promiseChain, startModule) {
  			return promiseChain.then(function () {
  				startModule.stats = { all: 0, bad: 0, started: now() };
  				emit("suiteStart", startModule.suiteReport.start(true));
  				return runLoggingCallbacks("moduleStart", {
  					name: startModule.name,
  					tests: startModule.tests
  				});
  			});
  		}, Promise$1.resolve([]));

  		return callbackPromises.then(function () {
  			config.current = _this;

  			_this.testEnvironment = extend({}, module.testEnvironment);

  			_this.started = now();
  			emit("testStart", _this.testReport.start(true));
  			return runLoggingCallbacks("testStart", {
  				name: _this.testName,
  				module: module.name,
  				testId: _this.testId,
  				previousFailure: _this.previousFailure
  			}).then(function () {
  				if (!config.pollution) {
  					saveGlobal();
  				}
  			});
  		});
  	},

  	run: function run() {
  		var promise;

  		config.current = this;

  		this.callbackStarted = now();

  		if (config.notrycatch) {
  			runTest(this);
  			return;
  		}

  		try {
  			runTest(this);
  		} catch (e) {
  			this.pushFailure("Died on test #" + (this.assertions.length + 1) + " " + this.stack + ": " + (e.message || e), extractStacktrace(e, 0));

  			// Else next test will carry the responsibility
  			saveGlobal();

  			// Restart the tests if they're blocking
  			if (config.blocking) {
  				internalRecover(this);
  			}
  		}

  		function runTest(test) {
  			promise = test.callback.call(test.testEnvironment, test.assert);
  			test.resolvePromise(promise);

  			// If the test has a "lock" on it, but the timeout is 0, then we push a
  			// failure as the test should be synchronous.
  			if (test.timeout === 0 && test.semaphore !== 0) {
  				pushFailure("Test did not finish synchronously even though assert.timeout( 0 ) was used.", sourceFromStacktrace(2));
  			}
  		}
  	},

  	after: function after() {
  		checkPollution();
  	},

  	queueHook: function queueHook(hook, hookName, hookOwner) {
  		var _this2 = this;

  		var callHook = function callHook() {
  			var promise = hook.call(_this2.testEnvironment, _this2.assert);
  			_this2.resolvePromise(promise, hookName);
  		};

  		var runHook = function runHook() {
  			if (hookName === "before") {
  				if (hookOwner.unskippedTestsRun !== 0) {
  					return;
  				}

  				_this2.preserveEnvironment = true;
  			}

  			// The 'after' hook should only execute when there are not tests left and
  			// when the 'after' and 'finish' tasks are the only tasks left to process
  			if (hookName === "after" && hookOwner.unskippedTestsRun !== numberOfUnskippedTests(hookOwner) - 1 && (config.queue.length > 0 || ProcessingQueue.taskCount() > 2)) {
  				return;
  			}

  			config.current = _this2;
  			if (config.notrycatch) {
  				callHook();
  				return;
  			}
  			try {
  				callHook();
  			} catch (error) {
  				_this2.pushFailure(hookName + " failed on " + _this2.testName + ": " + (error.message || error), extractStacktrace(error, 0));
  			}
  		};

  		return runHook;
  	},


  	// Currently only used for module level hooks, can be used to add global level ones
  	hooks: function hooks(handler) {
  		var hooks = [];

  		function processHooks(test, module) {
  			if (module.parentModule) {
  				processHooks(test, module.parentModule);
  			}

  			if (module.hooks[handler].length) {
  				for (var i = 0; i < module.hooks[handler].length; i++) {
  					hooks.push(test.queueHook(module.hooks[handler][i], handler, module));
  				}
  			}
  		}

  		// Hooks are ignored on skipped tests
  		if (!this.skip) {
  			processHooks(this, this.module);
  		}

  		return hooks;
  	},


  	finish: function finish() {
  		config.current = this;

  		// Release the test callback to ensure that anything referenced has been
  		// released to be garbage collected.
  		this.callback = undefined;

  		if (this.steps.length) {
  			var stepsList = this.steps.join(", ");
  			this.pushFailure("Expected assert.verifySteps() to be called before end of test " + ("after using assert.step(). Unverified steps: " + stepsList), this.stack);
  		}

  		if (config.requireExpects && this.expected === null) {
  			this.pushFailure("Expected number of assertions to be defined, but expect() was " + "not called.", this.stack);
  		} else if (this.expected !== null && this.expected !== this.assertions.length) {
  			this.pushFailure("Expected " + this.expected + " assertions, but " + this.assertions.length + " were run", this.stack);
  		} else if (this.expected === null && !this.assertions.length) {
  			this.pushFailure("Expected at least one assertion, but none were run - call " + "expect(0) to accept zero assertions.", this.stack);
  		}

  		var i,
  		    module = this.module,
  		    moduleName = module.name,
  		    testName = this.testName,
  		    skipped = !!this.skip,
  		    todo = !!this.todo,
  		    bad = 0,
  		    storage = config.storage;

  		this.runtime = now() - this.started;

  		config.stats.all += this.assertions.length;
  		module.stats.all += this.assertions.length;

  		for (i = 0; i < this.assertions.length; i++) {
  			if (!this.assertions[i].result) {
  				bad++;
  				config.stats.bad++;
  				module.stats.bad++;
  			}
  		}

  		notifyTestsRan(module, skipped);

  		// Store result when possible
  		if (storage) {
  			if (bad) {
  				storage.setItem("qunit-test-" + moduleName + "-" + testName, bad);
  			} else {
  				storage.removeItem("qunit-test-" + moduleName + "-" + testName);
  			}
  		}

  		// After emitting the js-reporters event we cleanup the assertion data to
  		// avoid leaking it. It is not used by the legacy testDone callbacks.
  		emit("testEnd", this.testReport.end(true));
  		this.testReport.slimAssertions();
  		var test = this;

  		return runLoggingCallbacks("testDone", {
  			name: testName,
  			module: moduleName,
  			skipped: skipped,
  			todo: todo,
  			failed: bad,
  			passed: this.assertions.length - bad,
  			total: this.assertions.length,
  			runtime: skipped ? 0 : this.runtime,

  			// HTML Reporter use
  			assertions: this.assertions,
  			testId: this.testId,

  			// Source of Test
  			// generating stack trace is expensive, so using a getter will help defer this until we need it
  			get source() {
  				return test.stack;
  			}
  		}).then(function () {
  			if (module.testsRun === numberOfTests(module)) {
  				var completedModules = [module];

  				// Check if the parent modules, iteratively, are done. If that the case,
  				// we emit the `suiteEnd` event and trigger `moduleDone` callback.
  				var parent = module.parentModule;
  				while (parent && parent.testsRun === numberOfTests(parent)) {
  					completedModules.push(parent);
  					parent = parent.parentModule;
  				}

  				return completedModules.reduce(function (promiseChain, completedModule) {
  					return promiseChain.then(function () {
  						return logSuiteEnd(completedModule);
  					});
  				}, Promise$1.resolve([]));
  			}
  		}).then(function () {
  			config.current = undefined;
  		});

  		function logSuiteEnd(module) {

  			// Reset `module.hooks` to ensure that anything referenced in these hooks
  			// has been released to be garbage collected.
  			module.hooks = {};

  			emit("suiteEnd", module.suiteReport.end(true));
  			return runLoggingCallbacks("moduleDone", {
  				name: module.name,
  				tests: module.tests,
  				failed: module.stats.bad,
  				passed: module.stats.all - module.stats.bad,
  				total: module.stats.all,
  				runtime: now() - module.stats.started
  			});
  		}
  	},

  	preserveTestEnvironment: function preserveTestEnvironment() {
  		if (this.preserveEnvironment) {
  			this.module.testEnvironment = this.testEnvironment;
  			this.testEnvironment = extend({}, this.module.testEnvironment);
  		}
  	},

  	queue: function queue() {
  		var test = this;

  		if (!this.valid()) {
  			return;
  		}

  		function runTest() {
  			return [function () {
  				return test.before();
  			}].concat(toConsumableArray(test.hooks("before")), [function () {
  				test.preserveTestEnvironment();
  			}], toConsumableArray(test.hooks("beforeEach")), [function () {
  				test.run();
  			}], toConsumableArray(test.hooks("afterEach").reverse()), toConsumableArray(test.hooks("after").reverse()), [function () {
  				test.after();
  			}, function () {
  				return test.finish();
  			}]);
  		}

  		var previousFailCount = config.storage && +config.storage.getItem("qunit-test-" + this.module.name + "-" + this.testName);

  		// Prioritize previously failed tests, detected from storage
  		var prioritize = config.reorder && !!previousFailCount;

  		this.previousFailure = !!previousFailCount;

  		ProcessingQueue.add(runTest, prioritize, config.seed);

  		// If the queue has already finished, we manually process the new test
  		if (ProcessingQueue.finished) {
  			ProcessingQueue.advance();
  		}
  	},


  	pushResult: function pushResult(resultInfo) {
  		if (this !== config.current) {
  			throw new Error("Assertion occurred after test had finished.");
  		}

  		// Destructure of resultInfo = { result, actual, expected, message, negative }
  		var source,
  		    details = {
  			module: this.module.name,
  			name: this.testName,
  			result: resultInfo.result,
  			message: resultInfo.message,
  			actual: resultInfo.actual,
  			testId: this.testId,
  			negative: resultInfo.negative || false,
  			runtime: now() - this.started,
  			todo: !!this.todo
  		};

  		if (hasOwn.call(resultInfo, "expected")) {
  			details.expected = resultInfo.expected;
  		}

  		if (!resultInfo.result) {
  			source = resultInfo.source || sourceFromStacktrace();

  			if (source) {
  				details.source = source;
  			}
  		}

  		this.logAssertion(details);

  		this.assertions.push({
  			result: !!resultInfo.result,
  			message: resultInfo.message
  		});
  	},

  	pushFailure: function pushFailure(message, source, actual) {
  		if (!(this instanceof Test)) {
  			throw new Error("pushFailure() assertion outside test context, was " + sourceFromStacktrace(2));
  		}

  		this.pushResult({
  			result: false,
  			message: message || "error",
  			actual: actual || null,
  			source: source
  		});
  	},

  	/**
    * Log assertion details using both the old QUnit.log interface and
    * QUnit.on( "assertion" ) interface.
    *
    * @private
    */
  	logAssertion: function logAssertion(details) {
  		runLoggingCallbacks("log", details);

  		var assertion = {
  			passed: details.result,
  			actual: details.actual,
  			expected: details.expected,
  			message: details.message,
  			stack: details.source,
  			todo: details.todo
  		};
  		this.testReport.pushAssertion(assertion);
  		emit("assertion", assertion);
  	},


  	resolvePromise: function resolvePromise(promise, phase) {
  		var then,
  		    resume,
  		    message,
  		    test = this;
  		if (promise != null) {
  			then = promise.then;
  			if (objectType(then) === "function") {
  				resume = internalStop(test);
  				if (config.notrycatch) {
  					then.call(promise, function () {
  						resume();
  					});
  				} else {
  					then.call(promise, function () {
  						resume();
  					}, function (error) {
  						message = "Promise rejected " + (!phase ? "during" : phase.replace(/Each$/, "")) + " \"" + test.testName + "\": " + (error && error.message || error);
  						test.pushFailure(message, extractStacktrace(error, 0));

  						// Else next test will carry the responsibility
  						saveGlobal();

  						// Unblock
  						internalRecover(test);
  					});
  				}
  			}
  		}
  	},

  	valid: function valid() {
  		var filter = config.filter,
  		    regexFilter = /^(!?)\/([\w\W]*)\/(i?$)/.exec(filter),
  		    module = config.module && config.module.toLowerCase(),
  		    fullName = this.module.name + ": " + this.testName;

  		function moduleChainNameMatch(testModule) {
  			var testModuleName = testModule.name ? testModule.name.toLowerCase() : null;
  			if (testModuleName === module) {
  				return true;
  			} else if (testModule.parentModule) {
  				return moduleChainNameMatch(testModule.parentModule);
  			} else {
  				return false;
  			}
  		}

  		function moduleChainIdMatch(testModule) {
  			return inArray(testModule.moduleId, config.moduleId) || testModule.parentModule && moduleChainIdMatch(testModule.parentModule);
  		}

  		// Internally-generated tests are always valid
  		if (this.callback && this.callback.validTest) {
  			return true;
  		}

  		if (config.moduleId && config.moduleId.length > 0 && !moduleChainIdMatch(this.module)) {

  			return false;
  		}

  		if (config.testId && config.testId.length > 0 && !inArray(this.testId, config.testId)) {

  			return false;
  		}

  		if (module && !moduleChainNameMatch(this.module)) {
  			return false;
  		}

  		if (!filter) {
  			return true;
  		}

  		return regexFilter ? this.regexFilter(!!regexFilter[1], regexFilter[2], regexFilter[3], fullName) : this.stringFilter(filter, fullName);
  	},

  	regexFilter: function regexFilter(exclude, pattern, flags, fullName) {
  		var regex = new RegExp(pattern, flags);
  		var match = regex.test(fullName);

  		return match !== exclude;
  	},

  	stringFilter: function stringFilter(filter, fullName) {
  		filter = filter.toLowerCase();
  		fullName = fullName.toLowerCase();

  		var include = filter.charAt(0) !== "!";
  		if (!include) {
  			filter = filter.slice(1);
  		}

  		// If the filter matches, we need to honour include
  		if (fullName.indexOf(filter) !== -1) {
  			return include;
  		}

  		// Otherwise, do the opposite
  		return !include;
  	}
  };

  function pushFailure() {
  	if (!config.current) {
  		throw new Error("pushFailure() assertion outside test context, in " + sourceFromStacktrace(2));
  	}

  	// Gets current test obj
  	var currentTest = config.current;

  	return currentTest.pushFailure.apply(currentTest, arguments);
  }

  function saveGlobal() {
  	config.pollution = [];

  	if (config.noglobals) {
  		for (var key in global$1) {
  			if (hasOwn.call(global$1, key)) {

  				// In Opera sometimes DOM element ids show up here, ignore them
  				if (/^qunit-test-output/.test(key)) {
  					continue;
  				}
  				config.pollution.push(key);
  			}
  		}
  	}
  }

  function checkPollution() {
  	var newGlobals,
  	    deletedGlobals,
  	    old = config.pollution;

  	saveGlobal();

  	newGlobals = diff(config.pollution, old);
  	if (newGlobals.length > 0) {
  		pushFailure("Introduced global variable(s): " + newGlobals.join(", "));
  	}

  	deletedGlobals = diff(old, config.pollution);
  	if (deletedGlobals.length > 0) {
  		pushFailure("Deleted global variable(s): " + deletedGlobals.join(", "));
  	}
  }

  // Will be exposed as QUnit.test
  function test(testName, callback) {
  	if (focused$1) {
  		return;
  	}

  	var newTest = new Test({
  		testName: testName,
  		callback: callback
  	});

  	newTest.queue();
  }

  function todo(testName, callback) {
  	if (focused$1) {
  		return;
  	}

  	var newTest = new Test({
  		testName: testName,
  		callback: callback,
  		todo: true
  	});

  	newTest.queue();
  }

  // Will be exposed as QUnit.skip
  function skip(testName) {
  	if (focused$1) {
  		return;
  	}

  	var test = new Test({
  		testName: testName,
  		skip: true
  	});

  	test.queue();
  }

  // Will be exposed as QUnit.only
  function only(testName, callback) {
  	if (focused$1) {
  		return;
  	}

  	config.queue.length = 0;
  	focused$1 = true;

  	var newTest = new Test({
  		testName: testName,
  		callback: callback
  	});

  	newTest.queue();
  }

  // Resets config.timeout with a new timeout duration.
  function resetTestTimeout(timeoutDuration) {
  	clearTimeout(config.timeout);
  	config.timeout = setTimeout$1(config.timeoutHandler(timeoutDuration), timeoutDuration);
  }

  // Put a hold on processing and return a function that will release it.
  function internalStop(test) {
  	var released = false;
  	test.semaphore += 1;
  	config.blocking = true;

  	// Set a recovery timeout, if so configured.
  	if (defined.setTimeout) {
  		var timeoutDuration = void 0;

  		if (typeof test.timeout === "number") {
  			timeoutDuration = test.timeout;
  		} else if (typeof config.testTimeout === "number") {
  			timeoutDuration = config.testTimeout;
  		}

  		if (typeof timeoutDuration === "number" && timeoutDuration > 0) {
  			clearTimeout(config.timeout);
  			config.timeoutHandler = function (timeout) {
  				return function () {
  					pushFailure("Test took longer than " + timeout + "ms; test timed out.", sourceFromStacktrace(2));
  					released = true;
  					internalRecover(test);
  				};
  			};
  			config.timeout = setTimeout$1(config.timeoutHandler(timeoutDuration), timeoutDuration);
  		}
  	}

  	return function resume() {
  		if (released) {
  			return;
  		}

  		released = true;
  		test.semaphore -= 1;
  		internalStart(test);
  	};
  }

  // Forcefully release all processing holds.
  function internalRecover(test) {
  	test.semaphore = 0;
  	internalStart(test);
  }

  // Release a processing hold, scheduling a resumption attempt if no holds remain.
  function internalStart(test) {

  	// If semaphore is non-numeric, throw error
  	if (isNaN(test.semaphore)) {
  		test.semaphore = 0;

  		pushFailure("Invalid value on test.semaphore", sourceFromStacktrace(2));
  		return;
  	}

  	// Don't start until equal number of stop-calls
  	if (test.semaphore > 0) {
  		return;
  	}

  	// Throw an Error if start is called more often than stop
  	if (test.semaphore < 0) {
  		test.semaphore = 0;

  		pushFailure("Tried to restart test while already started (test's semaphore was 0 already)", sourceFromStacktrace(2));
  		return;
  	}

  	// Add a slight delay to allow more assertions etc.
  	if (defined.setTimeout) {
  		if (config.timeout) {
  			clearTimeout(config.timeout);
  		}
  		config.timeout = setTimeout$1(function () {
  			if (test.semaphore > 0) {
  				return;
  			}

  			if (config.timeout) {
  				clearTimeout(config.timeout);
  			}

  			begin();
  		});
  	} else {
  		begin();
  	}
  }

  function collectTests(module) {
  	var tests = [].concat(module.tests);
  	var modules = [].concat(toConsumableArray(module.childModules));

  	// Do a breadth-first traversal of the child modules
  	while (modules.length) {
  		var nextModule = modules.shift();
  		tests.push.apply(tests, nextModule.tests);
  		modules.push.apply(modules, toConsumableArray(nextModule.childModules));
  	}

  	return tests;
  }

  function numberOfTests(module) {
  	return collectTests(module).length;
  }

  function numberOfUnskippedTests(module) {
  	return collectTests(module).filter(function (test) {
  		return !test.skip;
  	}).length;
  }

  function notifyTestsRan(module, skipped) {
  	module.testsRun++;
  	if (!skipped) {
  		module.unskippedTestsRun++;
  	}
  	while (module = module.parentModule) {
  		module.testsRun++;
  		if (!skipped) {
  			module.unskippedTestsRun++;
  		}
  	}
  }

  var Assert = function () {
  	function Assert(testContext) {
  		classCallCheck(this, Assert);

  		this.test = testContext;
  	}

  	// Assert helpers

  	createClass(Assert, [{
  		key: "timeout",
  		value: function timeout(duration) {
  			if (typeof duration !== "number") {
  				throw new Error("You must pass a number as the duration to assert.timeout");
  			}

  			this.test.timeout = duration;

  			// If a timeout has been set, clear it and reset with the new duration
  			if (config.timeout) {
  				clearTimeout(config.timeout);

  				if (config.timeoutHandler && this.test.timeout > 0) {
  					resetTestTimeout(this.test.timeout);
  				}
  			}
  		}

  		// Documents a "step", which is a string value, in a test as a passing assertion

  	}, {
  		key: "step",
  		value: function step(message) {
  			var assertionMessage = message;
  			var result = !!message;

  			this.test.steps.push(message);

  			if (objectType(message) === "undefined" || message === "") {
  				assertionMessage = "You must provide a message to assert.step";
  			} else if (objectType(message) !== "string") {
  				assertionMessage = "You must provide a string value to assert.step";
  				result = false;
  			}

  			this.pushResult({
  				result: result,
  				message: assertionMessage
  			});
  		}

  		// Verifies the steps in a test match a given array of string values

  	}, {
  		key: "verifySteps",
  		value: function verifySteps(steps, message) {

  			// Since the steps array is just string values, we can clone with slice
  			var actualStepsClone = this.test.steps.slice();
  			this.deepEqual(actualStepsClone, steps, message);
  			this.test.steps.length = 0;
  		}

  		// Specify the number of expected assertions to guarantee that failed test
  		// (no assertions are run at all) don't slip through.

  	}, {
  		key: "expect",
  		value: function expect(asserts) {
  			if (arguments.length === 1) {
  				this.test.expected = asserts;
  			} else {
  				return this.test.expected;
  			}
  		}

  		// Put a hold on processing and return a function that will release it a maximum of once.

  	}, {
  		key: "async",
  		value: function async(count) {
  			var test$$1 = this.test;

  			var popped = false,
  			    acceptCallCount = count;

  			if (typeof acceptCallCount === "undefined") {
  				acceptCallCount = 1;
  			}

  			var resume = internalStop(test$$1);

  			return function done() {
  				if (config.current !== test$$1) {
  					throw Error("assert.async callback called after test finished.");
  				}

  				if (popped) {
  					test$$1.pushFailure("Too many calls to the `assert.async` callback", sourceFromStacktrace(2));
  					return;
  				}

  				acceptCallCount -= 1;
  				if (acceptCallCount > 0) {
  					return;
  				}

  				popped = true;
  				resume();
  			};
  		}

  		// Exports test.push() to the user API
  		// Alias of pushResult.

  	}, {
  		key: "push",
  		value: function push(result, actual, expected, message, negative) {
  			Logger.warn("assert.push is deprecated and will be removed in QUnit 3.0." + " Please use assert.pushResult instead (https://api.qunitjs.com/assert/pushResult).");

  			var currentAssert = this instanceof Assert ? this : config.current.assert;
  			return currentAssert.pushResult({
  				result: result,
  				actual: actual,
  				expected: expected,
  				message: message,
  				negative: negative
  			});
  		}
  	}, {
  		key: "pushResult",
  		value: function pushResult(resultInfo) {

  			// Destructure of resultInfo = { result, actual, expected, message, negative }
  			var assert = this;
  			var currentTest = assert instanceof Assert && assert.test || config.current;

  			// Backwards compatibility fix.
  			// Allows the direct use of global exported assertions and QUnit.assert.*
  			// Although, it's use is not recommended as it can leak assertions
  			// to other tests from async tests, because we only get a reference to the current test,
  			// not exactly the test where assertion were intended to be called.
  			if (!currentTest) {
  				throw new Error("assertion outside test context, in " + sourceFromStacktrace(2));
  			}

  			if (!(assert instanceof Assert)) {
  				assert = currentTest.assert;
  			}

  			return assert.test.pushResult(resultInfo);
  		}
  	}, {
  		key: "ok",
  		value: function ok(result, message) {
  			if (!message) {
  				message = result ? "okay" : "failed, expected argument to be truthy, was: " + dump.parse(result);
  			}

  			this.pushResult({
  				result: !!result,
  				actual: result,
  				expected: true,
  				message: message
  			});
  		}
  	}, {
  		key: "notOk",
  		value: function notOk(result, message) {
  			if (!message) {
  				message = !result ? "okay" : "failed, expected argument to be falsy, was: " + dump.parse(result);
  			}

  			this.pushResult({
  				result: !result,
  				actual: result,
  				expected: false,
  				message: message
  			});
  		}
  	}, {
  		key: "equal",
  		value: function equal(actual, expected, message) {

  			// eslint-disable-next-line eqeqeq
  			var result = expected == actual;

  			this.pushResult({
  				result: result,
  				actual: actual,
  				expected: expected,
  				message: message
  			});
  		}
  	}, {
  		key: "notEqual",
  		value: function notEqual(actual, expected, message) {

  			// eslint-disable-next-line eqeqeq
  			var result = expected != actual;

  			this.pushResult({
  				result: result,
  				actual: actual,
  				expected: expected,
  				message: message,
  				negative: true
  			});
  		}
  	}, {
  		key: "propEqual",
  		value: function propEqual(actual, expected, message) {
  			actual = objectValues(actual);
  			expected = objectValues(expected);

  			this.pushResult({
  				result: equiv(actual, expected),
  				actual: actual,
  				expected: expected,
  				message: message
  			});
  		}
  	}, {
  		key: "notPropEqual",
  		value: function notPropEqual(actual, expected, message) {
  			actual = objectValues(actual);
  			expected = objectValues(expected);

  			this.pushResult({
  				result: !equiv(actual, expected),
  				actual: actual,
  				expected: expected,
  				message: message,
  				negative: true
  			});
  		}
  	}, {
  		key: "deepEqual",
  		value: function deepEqual(actual, expected, message) {
  			this.pushResult({
  				result: equiv(actual, expected),
  				actual: actual,
  				expected: expected,
  				message: message
  			});
  		}
  	}, {
  		key: "notDeepEqual",
  		value: function notDeepEqual(actual, expected, message) {
  			this.pushResult({
  				result: !equiv(actual, expected),
  				actual: actual,
  				expected: expected,
  				message: message,
  				negative: true
  			});
  		}
  	}, {
  		key: "strictEqual",
  		value: function strictEqual(actual, expected, message) {
  			this.pushResult({
  				result: expected === actual,
  				actual: actual,
  				expected: expected,
  				message: message
  			});
  		}
  	}, {
  		key: "notStrictEqual",
  		value: function notStrictEqual(actual, expected, message) {
  			this.pushResult({
  				result: expected !== actual,
  				actual: actual,
  				expected: expected,
  				message: message,
  				negative: true
  			});
  		}
  	}, {
  		key: "throws",
  		value: function throws(block, expected, message) {
  			var actual = void 0,
  			    result = false;

  			var currentTest = this instanceof Assert && this.test || config.current;

  			// 'expected' is optional unless doing string comparison
  			if (objectType(expected) === "string") {
  				if (message == null) {
  					message = expected;
  					expected = null;
  				} else {
  					throw new Error("throws/raises does not accept a string value for the expected argument.\n" + "Use a non-string object value (e.g. regExp) instead if it's necessary.");
  				}
  			}

  			currentTest.ignoreGlobalErrors = true;
  			try {
  				block.call(currentTest.testEnvironment);
  			} catch (e) {
  				actual = e;
  			}
  			currentTest.ignoreGlobalErrors = false;

  			if (actual) {
  				var expectedType = objectType(expected);

  				// We don't want to validate thrown error
  				if (!expected) {
  					result = true;

  					// Expected is a regexp
  				} else if (expectedType === "regexp") {
  					result = expected.test(errorString(actual));

  					// Log the string form of the regexp
  					expected = String(expected);

  					// Expected is a constructor, maybe an Error constructor
  				} else if (expectedType === "function" && actual instanceof expected) {
  					result = true;

  					// Expected is an Error object
  				} else if (expectedType === "object") {
  					result = actual instanceof expected.constructor && actual.name === expected.name && actual.message === expected.message;

  					// Log the string form of the Error object
  					expected = errorString(expected);

  					// Expected is a validation function which returns true if validation passed
  				} else if (expectedType === "function" && expected.call({}, actual) === true) {
  					expected = null;
  					result = true;
  				}
  			}

  			currentTest.assert.pushResult({
  				result: result,

  				// undefined if it didn't throw
  				actual: actual && errorString(actual),
  				expected: expected,
  				message: message
  			});
  		}
  	}, {
  		key: "rejects",
  		value: function rejects(promise, expected, message) {
  			var result = false;

  			var currentTest = this instanceof Assert && this.test || config.current;

  			// 'expected' is optional unless doing string comparison
  			if (objectType(expected) === "string") {
  				if (message === undefined) {
  					message = expected;
  					expected = undefined;
  				} else {
  					message = "assert.rejects does not accept a string value for the expected " + "argument.\nUse a non-string object value (e.g. validator function) instead " + "if necessary.";

  					currentTest.assert.pushResult({
  						result: false,
  						message: message
  					});

  					return;
  				}
  			}

  			var then = promise && promise.then;
  			if (objectType(then) !== "function") {
  				var _message = "The value provided to `assert.rejects` in " + "\"" + currentTest.testName + "\" was not a promise.";

  				currentTest.assert.pushResult({
  					result: false,
  					message: _message,
  					actual: promise
  				});

  				return;
  			}

  			var done = this.async();

  			return then.call(promise, function handleFulfillment() {
  				var message = "The promise returned by the `assert.rejects` callback in " + "\"" + currentTest.testName + "\" did not reject.";

  				currentTest.assert.pushResult({
  					result: false,
  					message: message,
  					actual: promise
  				});

  				done();
  			}, function handleRejection(actual) {
  				var expectedType = objectType(expected);

  				// We don't want to validate
  				if (expected === undefined) {
  					result = true;

  					// Expected is a regexp
  				} else if (expectedType === "regexp") {
  					result = expected.test(errorString(actual));

  					// Log the string form of the regexp
  					expected = String(expected);

  					// Expected is a constructor, maybe an Error constructor
  				} else if (expectedType === "function" && actual instanceof expected) {
  					result = true;

  					// Expected is an Error object
  				} else if (expectedType === "object") {
  					result = actual instanceof expected.constructor && actual.name === expected.name && actual.message === expected.message;

  					// Log the string form of the Error object
  					expected = errorString(expected);

  					// Expected is a validation function which returns true if validation passed
  				} else {
  					if (expectedType === "function") {
  						result = expected.call({}, actual) === true;
  						expected = null;

  						// Expected is some other invalid type
  					} else {
  						result = false;
  						message = "invalid expected value provided to `assert.rejects` " + "callback in \"" + currentTest.testName + "\": " + expectedType + ".";
  					}
  				}

  				currentTest.assert.pushResult({
  					result: result,

  					// leave rejection value of undefined as-is
  					actual: actual && errorString(actual),
  					expected: expected,
  					message: message
  				});

  				done();
  			});
  		}
  	}]);
  	return Assert;
  }();

  // Provide an alternative to assert.throws(), for environments that consider throws a reserved word
  // Known to us are: Closure Compiler, Narwhal
  // eslint-disable-next-line dot-notation


  Assert.prototype.raises = Assert.prototype["throws"];

  /**
   * Converts an error into a simple string for comparisons.
   *
   * @param {Error|Object} error
   * @return {String}
   */
  function errorString(error) {
  	var resultErrorString = error.toString();

  	// If the error wasn't a subclass of Error but something like
  	// an object literal with name and message properties...
  	if (resultErrorString.substring(0, 7) === "[object") {
  		var name = error.name ? error.name.toString() : "Error";
  		var message = error.message ? error.message.toString() : "";

  		if (name && message) {
  			return name + ": " + message;
  		} else if (name) {
  			return name;
  		} else if (message) {
  			return message;
  		} else {
  			return "Error";
  		}
  	} else {
  		return resultErrorString;
  	}
  }

  /* global module, exports, define */
  function exportQUnit(QUnit) {

  	if (defined.document) {

  		// QUnit may be defined when it is preconfigured but then only QUnit and QUnit.config may be defined.
  		if (window$1.QUnit && window$1.QUnit.version) {
  			throw new Error("QUnit has already been defined.");
  		}

  		window$1.QUnit = QUnit;
  	}

  	// For nodejs
  	if ( true && module && module.exports) {
  		module.exports = QUnit;

  		// For consistency with CommonJS environments' exports
  		module.exports.QUnit = QUnit;
  	}

  	// For CommonJS with exports, but without module.exports, like Rhino
  	if ( true && exports) {
  		exports.QUnit = QUnit;
  	}

  	if (true) {
  		!(__WEBPACK_AMD_DEFINE_RESULT__ = (function () {
  			return QUnit;
  		}).call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  		QUnit.config.autostart = false;
  	}

  	// For Web/Service Workers
  	if (self$1 && self$1.WorkerGlobalScope && self$1 instanceof self$1.WorkerGlobalScope) {
  		self$1.QUnit = QUnit;
  	}
  }

  // Handle an unhandled exception. By convention, returns true if further
  // error handling should be suppressed and false otherwise.
  // In this case, we will only suppress further error handling if the
  // "ignoreGlobalErrors" configuration option is enabled.
  function onError(error) {
  	for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
  		args[_key - 1] = arguments[_key];
  	}

  	if (config.current) {
  		if (config.current.ignoreGlobalErrors) {
  			return true;
  		}
  		pushFailure.apply(undefined, [error.message, error.stacktrace || error.fileName + ":" + error.lineNumber].concat(args));
  	} else {
  		test("global failure", extend(function () {
  			pushFailure.apply(undefined, [error.message, error.stacktrace || error.fileName + ":" + error.lineNumber].concat(args));
  		}, { validTest: true }));
  	}

  	return false;
  }

  // Handle an unhandled rejection
  function onUnhandledRejection(reason) {
  	var resultInfo = {
  		result: false,
  		message: reason.message || "error",
  		actual: reason,
  		source: reason.stack || sourceFromStacktrace(3)
  	};

  	var currentTest = config.current;
  	if (currentTest) {
  		currentTest.assert.pushResult(resultInfo);
  	} else {
  		test("global failure", extend(function (assert) {
  			assert.pushResult(resultInfo);
  		}, { validTest: true }));
  	}
  }

  var QUnit = {};
  var globalSuite = new SuiteReport();

  // The initial "currentModule" represents the global (or top-level) module that
  // is not explicitly defined by the user, therefore we add the "globalSuite" to
  // it since each module has a suiteReport associated with it.
  config.currentModule.suiteReport = globalSuite;

  var globalStartCalled = false;
  var runStarted = false;

  // Figure out if we're running the tests from a server or not
  QUnit.isLocal = !(defined.document && window$1.location.protocol !== "file:");

  // Expose the current QUnit version
  QUnit.version = "2.9.3";

  extend(QUnit, {
  	on: on,

  	module: module$1,

  	test: test,

  	todo: todo,

  	skip: skip,

  	only: only,

  	start: function start(count) {
  		var globalStartAlreadyCalled = globalStartCalled;

  		if (!config.current) {
  			globalStartCalled = true;

  			if (runStarted) {
  				throw new Error("Called start() while test already started running");
  			} else if (globalStartAlreadyCalled || count > 1) {
  				throw new Error("Called start() outside of a test context too many times");
  			} else if (config.autostart) {
  				throw new Error("Called start() outside of a test context when " + "QUnit.config.autostart was true");
  			} else if (!config.pageLoaded) {

  				// The page isn't completely loaded yet, so we set autostart and then
  				// load if we're in Node or wait for the browser's load event.
  				config.autostart = true;

  				// Starts from Node even if .load was not previously called. We still return
  				// early otherwise we'll wind up "beginning" twice.
  				if (!defined.document) {
  					QUnit.load();
  				}

  				return;
  			}
  		} else {
  			throw new Error("QUnit.start cannot be called inside a test context.");
  		}

  		scheduleBegin();
  	},

  	config: config,

  	is: is,

  	objectType: objectType,

  	extend: extend,

  	load: function load() {
  		config.pageLoaded = true;

  		// Initialize the configuration options
  		extend(config, {
  			stats: { all: 0, bad: 0 },
  			started: 0,
  			updateRate: 1000,
  			autostart: true,
  			filter: ""
  		}, true);

  		if (!runStarted) {
  			config.blocking = false;

  			if (config.autostart) {
  				scheduleBegin();
  			}
  		}
  	},

  	stack: function stack(offset) {
  		offset = (offset || 0) + 2;
  		return sourceFromStacktrace(offset);
  	},

  	onError: onError,

  	onUnhandledRejection: onUnhandledRejection
  });

  QUnit.pushFailure = pushFailure;
  QUnit.assert = Assert.prototype;
  QUnit.equiv = equiv;
  QUnit.dump = dump;

  registerLoggingCallbacks(QUnit);

  function scheduleBegin() {

  	runStarted = true;

  	// Add a slight delay to allow definition of more modules and tests.
  	if (defined.setTimeout) {
  		setTimeout$1(function () {
  			begin();
  		});
  	} else {
  		begin();
  	}
  }

  function unblockAndAdvanceQueue() {
  	config.blocking = false;
  	ProcessingQueue.advance();
  }

  function begin() {
  	var i,
  	    l,
  	    modulesLog = [];

  	// If the test run hasn't officially begun yet
  	if (!config.started) {

  		// Record the time of the test run's beginning
  		config.started = now();

  		// Delete the loose unnamed module if unused.
  		if (config.modules[0].name === "" && config.modules[0].tests.length === 0) {
  			config.modules.shift();
  		}

  		// Avoid unnecessary information by not logging modules' test environments
  		for (i = 0, l = config.modules.length; i < l; i++) {
  			modulesLog.push({
  				name: config.modules[i].name,
  				tests: config.modules[i].tests
  			});
  		}

  		// The test run is officially beginning now
  		emit("runStart", globalSuite.start(true));
  		runLoggingCallbacks("begin", {
  			totalTests: Test.count,
  			modules: modulesLog
  		}).then(unblockAndAdvanceQueue);
  	} else {
  		unblockAndAdvanceQueue();
  	}
  }

  exportQUnit(QUnit);

  (function () {

  	if (typeof window$1 === "undefined" || typeof document$1 === "undefined") {
  		return;
  	}

  	var config = QUnit.config,
  	    hasOwn = Object.prototype.hasOwnProperty;

  	// Stores fixture HTML for resetting later
  	function storeFixture() {

  		// Avoid overwriting user-defined values
  		if (hasOwn.call(config, "fixture")) {
  			return;
  		}

  		var fixture = document$1.getElementById("qunit-fixture");
  		if (fixture) {
  			config.fixture = fixture.cloneNode(true);
  		}
  	}

  	QUnit.begin(storeFixture);

  	// Resets the fixture DOM element if available.
  	function resetFixture() {
  		if (config.fixture == null) {
  			return;
  		}

  		var fixture = document$1.getElementById("qunit-fixture");
  		var resetFixtureType = _typeof(config.fixture);
  		if (resetFixtureType === "string") {

  			// support user defined values for `config.fixture`
  			var newFixture = document$1.createElement("div");
  			newFixture.setAttribute("id", "qunit-fixture");
  			newFixture.innerHTML = config.fixture;
  			fixture.parentNode.replaceChild(newFixture, fixture);
  		} else {
  			var clonedFixture = config.fixture.cloneNode(true);
  			fixture.parentNode.replaceChild(clonedFixture, fixture);
  		}
  	}

  	QUnit.testStart(resetFixture);
  })();

  (function () {

  	// Only interact with URLs via window.location
  	var location = typeof window$1 !== "undefined" && window$1.location;
  	if (!location) {
  		return;
  	}

  	var urlParams = getUrlParams();

  	QUnit.urlParams = urlParams;

  	// Match module/test by inclusion in an array
  	QUnit.config.moduleId = [].concat(urlParams.moduleId || []);
  	QUnit.config.testId = [].concat(urlParams.testId || []);

  	// Exact case-insensitive match of the module name
  	QUnit.config.module = urlParams.module;

  	// Regular expression or case-insenstive substring match against "moduleName: testName"
  	QUnit.config.filter = urlParams.filter;

  	// Test order randomization
  	if (urlParams.seed === true) {

  		// Generate a random seed if the option is specified without a value
  		QUnit.config.seed = Math.random().toString(36).slice(2);
  	} else if (urlParams.seed) {
  		QUnit.config.seed = urlParams.seed;
  	}

  	// Add URL-parameter-mapped config values with UI form rendering data
  	QUnit.config.urlConfig.push({
  		id: "hidepassed",
  		label: "Hide passed tests",
  		tooltip: "Only show tests and assertions that fail. Stored as query-strings."
  	}, {
  		id: "noglobals",
  		label: "Check for Globals",
  		tooltip: "Enabling this will test if any test introduces new properties on the " + "global object (`window` in Browsers). Stored as query-strings."
  	}, {
  		id: "notrycatch",
  		label: "No try-catch",
  		tooltip: "Enabling this will run tests outside of a try-catch block. Makes debugging " + "exceptions in IE reasonable. Stored as query-strings."
  	});

  	QUnit.begin(function () {
  		var i,
  		    option,
  		    urlConfig = QUnit.config.urlConfig;

  		for (i = 0; i < urlConfig.length; i++) {

  			// Options can be either strings or objects with nonempty "id" properties
  			option = QUnit.config.urlConfig[i];
  			if (typeof option !== "string") {
  				option = option.id;
  			}

  			if (QUnit.config[option] === undefined) {
  				QUnit.config[option] = urlParams[option];
  			}
  		}
  	});

  	function getUrlParams() {
  		var i, param, name, value;
  		var urlParams = Object.create(null);
  		var params = location.search.slice(1).split("&");
  		var length = params.length;

  		for (i = 0; i < length; i++) {
  			if (params[i]) {
  				param = params[i].split("=");
  				name = decodeQueryParam(param[0]);

  				// Allow just a key to turn on a flag, e.g., test.html?noglobals
  				value = param.length === 1 || decodeQueryParam(param.slice(1).join("="));
  				if (name in urlParams) {
  					urlParams[name] = [].concat(urlParams[name], value);
  				} else {
  					urlParams[name] = value;
  				}
  			}
  		}

  		return urlParams;
  	}

  	function decodeQueryParam(param) {
  		return decodeURIComponent(param.replace(/\+/g, "%20"));
  	}
  })();

  var stats = {
  	passedTests: 0,
  	failedTests: 0,
  	skippedTests: 0,
  	todoTests: 0
  };

  // Escape text for attribute or text content.
  function escapeText(s) {
  	if (!s) {
  		return "";
  	}
  	s = s + "";

  	// Both single quotes and double quotes (for attributes)
  	return s.replace(/['"<>&]/g, function (s) {
  		switch (s) {
  			case "'":
  				return "&#039;";
  			case "\"":
  				return "&quot;";
  			case "<":
  				return "&lt;";
  			case ">":
  				return "&gt;";
  			case "&":
  				return "&amp;";
  		}
  	});
  }

  (function () {

  	// Don't load the HTML Reporter on non-browser environments
  	if (typeof window$1 === "undefined" || !window$1.document) {
  		return;
  	}

  	var config = QUnit.config,
  	    hiddenTests = [],
  	    document = window$1.document,
  	    collapseNext = false,
  	    hasOwn$$1 = Object.prototype.hasOwnProperty,
  	    unfilteredUrl = setUrl({ filter: undefined, module: undefined,
  		moduleId: undefined, testId: undefined }),
  	    modulesList = [];

  	function addEvent(elem, type, fn) {
  		elem.addEventListener(type, fn, false);
  	}

  	function removeEvent(elem, type, fn) {
  		elem.removeEventListener(type, fn, false);
  	}

  	function addEvents(elems, type, fn) {
  		var i = elems.length;
  		while (i--) {
  			addEvent(elems[i], type, fn);
  		}
  	}

  	function hasClass(elem, name) {
  		return (" " + elem.className + " ").indexOf(" " + name + " ") >= 0;
  	}

  	function addClass(elem, name) {
  		if (!hasClass(elem, name)) {
  			elem.className += (elem.className ? " " : "") + name;
  		}
  	}

  	function toggleClass(elem, name, force) {
  		if (force || typeof force === "undefined" && !hasClass(elem, name)) {
  			addClass(elem, name);
  		} else {
  			removeClass(elem, name);
  		}
  	}

  	function removeClass(elem, name) {
  		var set = " " + elem.className + " ";

  		// Class name may appear multiple times
  		while (set.indexOf(" " + name + " ") >= 0) {
  			set = set.replace(" " + name + " ", " ");
  		}

  		// Trim for prettiness
  		elem.className = typeof set.trim === "function" ? set.trim() : set.replace(/^\s+|\s+$/g, "");
  	}

  	function id(name) {
  		return document.getElementById && document.getElementById(name);
  	}

  	function abortTests() {
  		var abortButton = id("qunit-abort-tests-button");
  		if (abortButton) {
  			abortButton.disabled = true;
  			abortButton.innerHTML = "Aborting...";
  		}
  		QUnit.config.queue.length = 0;
  		return false;
  	}

  	function interceptNavigation(ev) {
  		applyUrlParams();

  		if (ev && ev.preventDefault) {
  			ev.preventDefault();
  		}

  		return false;
  	}

  	function getUrlConfigHtml() {
  		var i,
  		    j,
  		    val,
  		    escaped,
  		    escapedTooltip,
  		    selection = false,
  		    urlConfig = config.urlConfig,
  		    urlConfigHtml = "";

  		for (i = 0; i < urlConfig.length; i++) {

  			// Options can be either strings or objects with nonempty "id" properties
  			val = config.urlConfig[i];
  			if (typeof val === "string") {
  				val = {
  					id: val,
  					label: val
  				};
  			}

  			escaped = escapeText(val.id);
  			escapedTooltip = escapeText(val.tooltip);

  			if (!val.value || typeof val.value === "string") {
  				urlConfigHtml += "<label for='qunit-urlconfig-" + escaped + "' title='" + escapedTooltip + "'><input id='qunit-urlconfig-" + escaped + "' name='" + escaped + "' type='checkbox'" + (val.value ? " value='" + escapeText(val.value) + "'" : "") + (config[val.id] ? " checked='checked'" : "") + " title='" + escapedTooltip + "' />" + escapeText(val.label) + "</label>";
  			} else {
  				urlConfigHtml += "<label for='qunit-urlconfig-" + escaped + "' title='" + escapedTooltip + "'>" + val.label + ": </label><select id='qunit-urlconfig-" + escaped + "' name='" + escaped + "' title='" + escapedTooltip + "'><option></option>";

  				if (QUnit.is("array", val.value)) {
  					for (j = 0; j < val.value.length; j++) {
  						escaped = escapeText(val.value[j]);
  						urlConfigHtml += "<option value='" + escaped + "'" + (config[val.id] === val.value[j] ? (selection = true) && " selected='selected'" : "") + ">" + escaped + "</option>";
  					}
  				} else {
  					for (j in val.value) {
  						if (hasOwn$$1.call(val.value, j)) {
  							urlConfigHtml += "<option value='" + escapeText(j) + "'" + (config[val.id] === j ? (selection = true) && " selected='selected'" : "") + ">" + escapeText(val.value[j]) + "</option>";
  						}
  					}
  				}
  				if (config[val.id] && !selection) {
  					escaped = escapeText(config[val.id]);
  					urlConfigHtml += "<option value='" + escaped + "' selected='selected' disabled='disabled'>" + escaped + "</option>";
  				}
  				urlConfigHtml += "</select>";
  			}
  		}

  		return urlConfigHtml;
  	}

  	// Handle "click" events on toolbar checkboxes and "change" for select menus.
  	// Updates the URL with the new state of `config.urlConfig` values.
  	function toolbarChanged() {
  		var updatedUrl,
  		    value,
  		    tests,
  		    field = this,
  		    params = {};

  		// Detect if field is a select menu or a checkbox
  		if ("selectedIndex" in field) {
  			value = field.options[field.selectedIndex].value || undefined;
  		} else {
  			value = field.checked ? field.defaultValue || true : undefined;
  		}

  		params[field.name] = value;
  		updatedUrl = setUrl(params);

  		// Check if we can apply the change without a page refresh
  		if ("hidepassed" === field.name && "replaceState" in window$1.history) {
  			QUnit.urlParams[field.name] = value;
  			config[field.name] = value || false;
  			tests = id("qunit-tests");
  			if (tests) {
  				var length = tests.children.length;
  				var children = tests.children;

  				if (field.checked) {
  					for (var i = 0; i < length; i++) {
  						var test$$1 = children[i];

  						if (test$$1 && test$$1.className.indexOf("pass") > -1) {
  							hiddenTests.push(test$$1);
  						}
  					}

  					var _iteratorNormalCompletion = true;
  					var _didIteratorError = false;
  					var _iteratorError = undefined;

  					try {
  						for (var _iterator = hiddenTests[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
  							var hiddenTest = _step.value;

  							tests.removeChild(hiddenTest);
  						}
  					} catch (err) {
  						_didIteratorError = true;
  						_iteratorError = err;
  					} finally {
  						try {
  							if (!_iteratorNormalCompletion && _iterator.return) {
  								_iterator.return();
  							}
  						} finally {
  							if (_didIteratorError) {
  								throw _iteratorError;
  							}
  						}
  					}
  				} else {
  					while ((test$$1 = hiddenTests.pop()) != null) {
  						tests.appendChild(test$$1);
  					}
  				}
  			}
  			window$1.history.replaceState(null, "", updatedUrl);
  		} else {
  			window$1.location = updatedUrl;
  		}
  	}

  	function setUrl(params) {
  		var key,
  		    arrValue,
  		    i,
  		    querystring = "?",
  		    location = window$1.location;

  		params = QUnit.extend(QUnit.extend({}, QUnit.urlParams), params);

  		for (key in params) {

  			// Skip inherited or undefined properties
  			if (hasOwn$$1.call(params, key) && params[key] !== undefined) {

  				// Output a parameter for each value of this key
  				// (but usually just one)
  				arrValue = [].concat(params[key]);
  				for (i = 0; i < arrValue.length; i++) {
  					querystring += encodeURIComponent(key);
  					if (arrValue[i] !== true) {
  						querystring += "=" + encodeURIComponent(arrValue[i]);
  					}
  					querystring += "&";
  				}
  			}
  		}
  		return location.protocol + "//" + location.host + location.pathname + querystring.slice(0, -1);
  	}

  	function applyUrlParams() {
  		var i,
  		    selectedModules = [],
  		    modulesList = id("qunit-modulefilter-dropdown-list").getElementsByTagName("input"),
  		    filter = id("qunit-filter-input").value;

  		for (i = 0; i < modulesList.length; i++) {
  			if (modulesList[i].checked) {
  				selectedModules.push(modulesList[i].value);
  			}
  		}

  		window$1.location = setUrl({
  			filter: filter === "" ? undefined : filter,
  			moduleId: selectedModules.length === 0 ? undefined : selectedModules,

  			// Remove module and testId filter
  			module: undefined,
  			testId: undefined
  		});
  	}

  	function toolbarUrlConfigContainer() {
  		var urlConfigContainer = document.createElement("span");

  		urlConfigContainer.innerHTML = getUrlConfigHtml();
  		addClass(urlConfigContainer, "qunit-url-config");

  		addEvents(urlConfigContainer.getElementsByTagName("input"), "change", toolbarChanged);
  		addEvents(urlConfigContainer.getElementsByTagName("select"), "change", toolbarChanged);

  		return urlConfigContainer;
  	}

  	function abortTestsButton() {
  		var button = document.createElement("button");
  		button.id = "qunit-abort-tests-button";
  		button.innerHTML = "Abort";
  		addEvent(button, "click", abortTests);
  		return button;
  	}

  	function toolbarLooseFilter() {
  		var filter = document.createElement("form"),
  		    label = document.createElement("label"),
  		    input = document.createElement("input"),
  		    button = document.createElement("button");

  		addClass(filter, "qunit-filter");

  		label.innerHTML = "Filter: ";

  		input.type = "text";
  		input.value = config.filter || "";
  		input.name = "filter";
  		input.id = "qunit-filter-input";

  		button.innerHTML = "Go";

  		label.appendChild(input);

  		filter.appendChild(label);
  		filter.appendChild(document.createTextNode(" "));
  		filter.appendChild(button);
  		addEvent(filter, "submit", interceptNavigation);

  		return filter;
  	}

  	function moduleListHtml() {
  		var i,
  		    checked,
  		    html = "";

  		for (i = 0; i < config.modules.length; i++) {
  			if (config.modules[i].name !== "") {
  				checked = config.moduleId.indexOf(config.modules[i].moduleId) > -1;
  				html += "<li><label class='clickable" + (checked ? " checked" : "") + "'><input type='checkbox' " + "value='" + config.modules[i].moduleId + "'" + (checked ? " checked='checked'" : "") + " />" + escapeText(config.modules[i].name) + "</label></li>";
  			}
  		}

  		return html;
  	}

  	function toolbarModuleFilter() {
  		var commit,
  		    reset,
  		    moduleFilter = document.createElement("form"),
  		    label = document.createElement("label"),
  		    moduleSearch = document.createElement("input"),
  		    dropDown = document.createElement("div"),
  		    actions = document.createElement("span"),
  		    applyButton = document.createElement("button"),
  		    resetButton = document.createElement("button"),
  		    allModulesLabel = document.createElement("label"),
  		    allCheckbox = document.createElement("input"),
  		    dropDownList = document.createElement("ul"),
  		    dirty = false;

  		moduleSearch.id = "qunit-modulefilter-search";
  		moduleSearch.autocomplete = "off";
  		addEvent(moduleSearch, "input", searchInput);
  		addEvent(moduleSearch, "input", searchFocus);
  		addEvent(moduleSearch, "focus", searchFocus);
  		addEvent(moduleSearch, "click", searchFocus);

  		label.id = "qunit-modulefilter-search-container";
  		label.innerHTML = "Module: ";
  		label.appendChild(moduleSearch);

  		applyButton.textContent = "Apply";
  		applyButton.style.display = "none";

  		resetButton.textContent = "Reset";
  		resetButton.type = "reset";
  		resetButton.style.display = "none";

  		allCheckbox.type = "checkbox";
  		allCheckbox.checked = config.moduleId.length === 0;

  		allModulesLabel.className = "clickable";
  		if (config.moduleId.length) {
  			allModulesLabel.className = "checked";
  		}
  		allModulesLabel.appendChild(allCheckbox);
  		allModulesLabel.appendChild(document.createTextNode("All modules"));

  		actions.id = "qunit-modulefilter-actions";
  		actions.appendChild(applyButton);
  		actions.appendChild(resetButton);
  		actions.appendChild(allModulesLabel);
  		commit = actions.firstChild;
  		reset = commit.nextSibling;
  		addEvent(commit, "click", applyUrlParams);

  		dropDownList.id = "qunit-modulefilter-dropdown-list";
  		dropDownList.innerHTML = moduleListHtml();

  		dropDown.id = "qunit-modulefilter-dropdown";
  		dropDown.style.display = "none";
  		dropDown.appendChild(actions);
  		dropDown.appendChild(dropDownList);
  		addEvent(dropDown, "change", selectionChange);
  		selectionChange();

  		moduleFilter.id = "qunit-modulefilter";
  		moduleFilter.appendChild(label);
  		moduleFilter.appendChild(dropDown);
  		addEvent(moduleFilter, "submit", interceptNavigation);
  		addEvent(moduleFilter, "reset", function () {

  			// Let the reset happen, then update styles
  			window$1.setTimeout(selectionChange);
  		});

  		// Enables show/hide for the dropdown
  		function searchFocus() {
  			if (dropDown.style.display !== "none") {
  				return;
  			}

  			dropDown.style.display = "block";
  			addEvent(document, "click", hideHandler);
  			addEvent(document, "keydown", hideHandler);

  			// Hide on Escape keydown or outside-container click
  			function hideHandler(e) {
  				var inContainer = moduleFilter.contains(e.target);

  				if (e.keyCode === 27 || !inContainer) {
  					if (e.keyCode === 27 && inContainer) {
  						moduleSearch.focus();
  					}
  					dropDown.style.display = "none";
  					removeEvent(document, "click", hideHandler);
  					removeEvent(document, "keydown", hideHandler);
  					moduleSearch.value = "";
  					searchInput();
  				}
  			}
  		}

  		// Processes module search box input
  		function searchInput() {
  			var i,
  			    item,
  			    searchText = moduleSearch.value.toLowerCase(),
  			    listItems = dropDownList.children;

  			for (i = 0; i < listItems.length; i++) {
  				item = listItems[i];
  				if (!searchText || item.textContent.toLowerCase().indexOf(searchText) > -1) {
  					item.style.display = "";
  				} else {
  					item.style.display = "none";
  				}
  			}
  		}

  		// Processes selection changes
  		function selectionChange(evt) {
  			var i,
  			    item,
  			    checkbox = evt && evt.target || allCheckbox,
  			    modulesList = dropDownList.getElementsByTagName("input"),
  			    selectedNames = [];

  			toggleClass(checkbox.parentNode, "checked", checkbox.checked);

  			dirty = false;
  			if (checkbox.checked && checkbox !== allCheckbox) {
  				allCheckbox.checked = false;
  				removeClass(allCheckbox.parentNode, "checked");
  			}
  			for (i = 0; i < modulesList.length; i++) {
  				item = modulesList[i];
  				if (!evt) {
  					toggleClass(item.parentNode, "checked", item.checked);
  				} else if (checkbox === allCheckbox && checkbox.checked) {
  					item.checked = false;
  					removeClass(item.parentNode, "checked");
  				}
  				dirty = dirty || item.checked !== item.defaultChecked;
  				if (item.checked) {
  					selectedNames.push(item.parentNode.textContent);
  				}
  			}

  			commit.style.display = reset.style.display = dirty ? "" : "none";
  			moduleSearch.placeholder = selectedNames.join(", ") || allCheckbox.parentNode.textContent;
  			moduleSearch.title = "Type to filter list. Current selection:\n" + (selectedNames.join("\n") || allCheckbox.parentNode.textContent);
  		}

  		return moduleFilter;
  	}

  	function appendToolbar() {
  		var toolbar = id("qunit-testrunner-toolbar");

  		if (toolbar) {
  			toolbar.appendChild(toolbarUrlConfigContainer());
  			toolbar.appendChild(toolbarModuleFilter());
  			toolbar.appendChild(toolbarLooseFilter());
  			toolbar.appendChild(document.createElement("div")).className = "clearfix";
  		}
  	}

  	function appendHeader() {
  		var header = id("qunit-header");

  		if (header) {
  			header.innerHTML = "<a href='" + escapeText(unfilteredUrl) + "'>" + header.innerHTML + "</a> ";
  		}
  	}

  	function appendBanner() {
  		var banner = id("qunit-banner");

  		if (banner) {
  			banner.className = "";
  		}
  	}

  	function appendTestResults() {
  		var tests = id("qunit-tests"),
  		    result = id("qunit-testresult"),
  		    controls;

  		if (result) {
  			result.parentNode.removeChild(result);
  		}

  		if (tests) {
  			tests.innerHTML = "";
  			result = document.createElement("p");
  			result.id = "qunit-testresult";
  			result.className = "result";
  			tests.parentNode.insertBefore(result, tests);
  			result.innerHTML = "<div id=\"qunit-testresult-display\">Running...<br />&#160;</div>" + "<div id=\"qunit-testresult-controls\"></div>" + "<div class=\"clearfix\"></div>";
  			controls = id("qunit-testresult-controls");
  		}

  		if (controls) {
  			controls.appendChild(abortTestsButton());
  		}
  	}

  	function appendFilteredTest() {
  		var testId = QUnit.config.testId;
  		if (!testId || testId.length <= 0) {
  			return "";
  		}
  		return "<div id='qunit-filteredTest'>Rerunning selected tests: " + escapeText(testId.join(", ")) + " <a id='qunit-clearFilter' href='" + escapeText(unfilteredUrl) + "'>Run all tests</a></div>";
  	}

  	function appendUserAgent() {
  		var userAgent = id("qunit-userAgent");

  		if (userAgent) {
  			userAgent.innerHTML = "";
  			userAgent.appendChild(document.createTextNode("QUnit " + QUnit.version + "; " + navigator.userAgent));
  		}
  	}

  	function appendInterface() {
  		var qunit = id("qunit");

  		if (qunit) {
  			qunit.innerHTML = "<h1 id='qunit-header'>" + escapeText(document.title) + "</h1>" + "<h2 id='qunit-banner'></h2>" + "<div id='qunit-testrunner-toolbar'></div>" + appendFilteredTest() + "<h2 id='qunit-userAgent'></h2>" + "<ol id='qunit-tests'></ol>";
  		}

  		appendHeader();
  		appendBanner();
  		appendTestResults();
  		appendUserAgent();
  		appendToolbar();
  	}

  	function appendTest(name, testId, moduleName) {
  		var title,
  		    rerunTrigger,
  		    testBlock,
  		    assertList,
  		    tests = id("qunit-tests");

  		if (!tests) {
  			return;
  		}

  		title = document.createElement("strong");
  		title.innerHTML = getNameHtml(name, moduleName);

  		rerunTrigger = document.createElement("a");
  		rerunTrigger.innerHTML = "Rerun";
  		rerunTrigger.href = setUrl({ testId: testId });

  		testBlock = document.createElement("li");
  		testBlock.appendChild(title);
  		testBlock.appendChild(rerunTrigger);
  		testBlock.id = "qunit-test-output-" + testId;

  		assertList = document.createElement("ol");
  		assertList.className = "qunit-assert-list";

  		testBlock.appendChild(assertList);

  		tests.appendChild(testBlock);
  	}

  	// HTML Reporter initialization and load
  	QUnit.begin(function (details) {
  		var i, moduleObj;

  		// Sort modules by name for the picker
  		for (i = 0; i < details.modules.length; i++) {
  			moduleObj = details.modules[i];
  			if (moduleObj.name) {
  				modulesList.push(moduleObj.name);
  			}
  		}
  		modulesList.sort(function (a, b) {
  			return a.localeCompare(b);
  		});

  		// Initialize QUnit elements
  		appendInterface();
  	});

  	QUnit.done(function (details) {
  		var banner = id("qunit-banner"),
  		    tests = id("qunit-tests"),
  		    abortButton = id("qunit-abort-tests-button"),
  		    totalTests = stats.passedTests + stats.skippedTests + stats.todoTests + stats.failedTests,
  		    html = [totalTests, " tests completed in ", details.runtime, " milliseconds, with ", stats.failedTests, " failed, ", stats.skippedTests, " skipped, and ", stats.todoTests, " todo.<br />", "<span class='passed'>", details.passed, "</span> assertions of <span class='total'>", details.total, "</span> passed, <span class='failed'>", details.failed, "</span> failed."].join(""),
  		    test$$1,
  		    assertLi,
  		    assertList;

  		// Update remaining tests to aborted
  		if (abortButton && abortButton.disabled) {
  			html = "Tests aborted after " + details.runtime + " milliseconds.";

  			for (var i = 0; i < tests.children.length; i++) {
  				test$$1 = tests.children[i];
  				if (test$$1.className === "" || test$$1.className === "running") {
  					test$$1.className = "aborted";
  					assertList = test$$1.getElementsByTagName("ol")[0];
  					assertLi = document.createElement("li");
  					assertLi.className = "fail";
  					assertLi.innerHTML = "Test aborted.";
  					assertList.appendChild(assertLi);
  				}
  			}
  		}

  		if (banner && (!abortButton || abortButton.disabled === false)) {
  			banner.className = stats.failedTests ? "qunit-fail" : "qunit-pass";
  		}

  		if (abortButton) {
  			abortButton.parentNode.removeChild(abortButton);
  		}

  		if (tests) {
  			id("qunit-testresult-display").innerHTML = html;
  		}

  		if (config.altertitle && document.title) {

  			// Show ✖ for good, ✔ for bad suite result in title
  			// use escape sequences in case file gets loaded with non-utf-8
  			// charset
  			document.title = [stats.failedTests ? "\u2716" : "\u2714", document.title.replace(/^[\u2714\u2716] /i, "")].join(" ");
  		}

  		// Scroll back to top to show results
  		if (config.scrolltop && window$1.scrollTo) {
  			window$1.scrollTo(0, 0);
  		}
  	});

  	function getNameHtml(name, module) {
  		var nameHtml = "";

  		if (module) {
  			nameHtml = "<span class='module-name'>" + escapeText(module) + "</span>: ";
  		}

  		nameHtml += "<span class='test-name'>" + escapeText(name) + "</span>";

  		return nameHtml;
  	}

  	function getProgressHtml(runtime, stats, total) {
  		var completed = stats.passedTests + stats.skippedTests + stats.todoTests + stats.failedTests;

  		return ["<br />", completed, " / ", total, " tests completed in ", runtime, " milliseconds, with ", stats.failedTests, " failed, ", stats.skippedTests, " skipped, and ", stats.todoTests, " todo."].join("");
  	}

  	QUnit.testStart(function (details) {
  		var running, bad;

  		appendTest(details.name, details.testId, details.module);

  		running = id("qunit-testresult-display");

  		if (running) {
  			addClass(running, "running");

  			bad = QUnit.config.reorder && details.previousFailure;

  			running.innerHTML = [bad ? "Rerunning previously failed test: <br />" : "Running: <br />", getNameHtml(details.name, details.module), getProgressHtml(now() - config.started, stats, Test.count)].join("");
  		}
  	});

  	function stripHtml(string) {

  		// Strip tags, html entity and whitespaces
  		return string.replace(/<\/?[^>]+(>|$)/g, "").replace(/&quot;/g, "").replace(/\s+/g, "");
  	}

  	QUnit.log(function (details) {
  		var assertList,
  		    assertLi,
  		    message,
  		    expected,
  		    actual,
  		    diff$$1,
  		    showDiff = false,
  		    testItem = id("qunit-test-output-" + details.testId);

  		if (!testItem) {
  			return;
  		}

  		message = escapeText(details.message) || (details.result ? "okay" : "failed");
  		message = "<span class='test-message'>" + message + "</span>";
  		message += "<span class='runtime'>@ " + details.runtime + " ms</span>";

  		// The pushFailure doesn't provide details.expected
  		// when it calls, it's implicit to also not show expected and diff stuff
  		// Also, we need to check details.expected existence, as it can exist and be undefined
  		if (!details.result && hasOwn$$1.call(details, "expected")) {
  			if (details.negative) {
  				expected = "NOT " + QUnit.dump.parse(details.expected);
  			} else {
  				expected = QUnit.dump.parse(details.expected);
  			}

  			actual = QUnit.dump.parse(details.actual);
  			message += "<table><tr class='test-expected'><th>Expected: </th><td><pre>" + escapeText(expected) + "</pre></td></tr>";

  			if (actual !== expected) {

  				message += "<tr class='test-actual'><th>Result: </th><td><pre>" + escapeText(actual) + "</pre></td></tr>";

  				if (typeof details.actual === "number" && typeof details.expected === "number") {
  					if (!isNaN(details.actual) && !isNaN(details.expected)) {
  						showDiff = true;
  						diff$$1 = details.actual - details.expected;
  						diff$$1 = (diff$$1 > 0 ? "+" : "") + diff$$1;
  					}
  				} else if (typeof details.actual !== "boolean" && typeof details.expected !== "boolean") {
  					diff$$1 = QUnit.diff(expected, actual);

  					// don't show diff if there is zero overlap
  					showDiff = stripHtml(diff$$1).length !== stripHtml(expected).length + stripHtml(actual).length;
  				}

  				if (showDiff) {
  					message += "<tr class='test-diff'><th>Diff: </th><td><pre>" + diff$$1 + "</pre></td></tr>";
  				}
  			} else if (expected.indexOf("[object Array]") !== -1 || expected.indexOf("[object Object]") !== -1) {
  				message += "<tr class='test-message'><th>Message: </th><td>" + "Diff suppressed as the depth of object is more than current max depth (" + QUnit.config.maxDepth + ").<p>Hint: Use <code>QUnit.dump.maxDepth</code> to " + " run with a higher max depth or <a href='" + escapeText(setUrl({ maxDepth: -1 })) + "'>" + "Rerun</a> without max depth.</p></td></tr>";
  			} else {
  				message += "<tr class='test-message'><th>Message: </th><td>" + "Diff suppressed as the expected and actual results have an equivalent" + " serialization</td></tr>";
  			}

  			if (details.source) {
  				message += "<tr class='test-source'><th>Source: </th><td><pre>" + escapeText(details.source) + "</pre></td></tr>";
  			}

  			message += "</table>";

  			// This occurs when pushFailure is set and we have an extracted stack trace
  		} else if (!details.result && details.source) {
  			message += "<table>" + "<tr class='test-source'><th>Source: </th><td><pre>" + escapeText(details.source) + "</pre></td></tr>" + "</table>";
  		}

  		assertList = testItem.getElementsByTagName("ol")[0];

  		assertLi = document.createElement("li");
  		assertLi.className = details.result ? "pass" : "fail";
  		assertLi.innerHTML = message;
  		assertList.appendChild(assertLi);
  	});

  	QUnit.testDone(function (details) {
  		var testTitle,
  		    time,
  		    testItem,
  		    assertList,
  		    status,
  		    good,
  		    bad,
  		    testCounts,
  		    skipped,
  		    sourceName,
  		    tests = id("qunit-tests");

  		if (!tests) {
  			return;
  		}

  		testItem = id("qunit-test-output-" + details.testId);

  		removeClass(testItem, "running");

  		if (details.failed > 0) {
  			status = "failed";
  		} else if (details.todo) {
  			status = "todo";
  		} else {
  			status = details.skipped ? "skipped" : "passed";
  		}

  		assertList = testItem.getElementsByTagName("ol")[0];

  		good = details.passed;
  		bad = details.failed;

  		// This test passed if it has no unexpected failed assertions
  		var testPassed = details.failed > 0 ? details.todo : !details.todo;

  		if (testPassed) {

  			// Collapse the passing tests
  			addClass(assertList, "qunit-collapsed");
  		} else if (config.collapse) {
  			if (!collapseNext) {

  				// Skip collapsing the first failing test
  				collapseNext = true;
  			} else {

  				// Collapse remaining tests
  				addClass(assertList, "qunit-collapsed");
  			}
  		}

  		// The testItem.firstChild is the test name
  		testTitle = testItem.firstChild;

  		testCounts = bad ? "<b class='failed'>" + bad + "</b>, " + "<b class='passed'>" + good + "</b>, " : "";

  		testTitle.innerHTML += " <b class='counts'>(" + testCounts + details.assertions.length + ")</b>";

  		if (details.skipped) {
  			stats.skippedTests++;

  			testItem.className = "skipped";
  			skipped = document.createElement("em");
  			skipped.className = "qunit-skipped-label";
  			skipped.innerHTML = "skipped";
  			testItem.insertBefore(skipped, testTitle);
  		} else {
  			addEvent(testTitle, "click", function () {
  				toggleClass(assertList, "qunit-collapsed");
  			});

  			testItem.className = testPassed ? "pass" : "fail";

  			if (details.todo) {
  				var todoLabel = document.createElement("em");
  				todoLabel.className = "qunit-todo-label";
  				todoLabel.innerHTML = "todo";
  				testItem.className += " todo";
  				testItem.insertBefore(todoLabel, testTitle);
  			}

  			time = document.createElement("span");
  			time.className = "runtime";
  			time.innerHTML = details.runtime + " ms";
  			testItem.insertBefore(time, assertList);

  			if (!testPassed) {
  				stats.failedTests++;
  			} else if (details.todo) {
  				stats.todoTests++;
  			} else {
  				stats.passedTests++;
  			}
  		}

  		// Show the source of the test when showing assertions
  		if (details.source) {
  			sourceName = document.createElement("p");
  			sourceName.innerHTML = "<strong>Source: </strong>" + escapeText(details.source);
  			addClass(sourceName, "qunit-source");
  			if (testPassed) {
  				addClass(sourceName, "qunit-collapsed");
  			}
  			addEvent(testTitle, "click", function () {
  				toggleClass(sourceName, "qunit-collapsed");
  			});
  			testItem.appendChild(sourceName);
  		}

  		if (config.hidepassed && status === "passed") {

  			// use removeChild instead of remove because of support
  			hiddenTests.push(testItem);

  			tests.removeChild(testItem);
  		}
  	});

  	// Avoid readyState issue with phantomjs
  	// Ref: #818
  	var notPhantom = function (p) {
  		return !(p && p.version && p.version.major > 0);
  	}(window$1.phantom);

  	if (notPhantom && document.readyState === "complete") {
  		QUnit.load();
  	} else {
  		addEvent(window$1, "load", QUnit.load);
  	}

  	// Wrap window.onerror. We will call the original window.onerror to see if
  	// the existing handler fully handles the error; if not, we will call the
  	// QUnit.onError function.
  	var originalWindowOnError = window$1.onerror;

  	// Cover uncaught exceptions
  	// Returning true will suppress the default browser handler,
  	// returning false will let it run.
  	window$1.onerror = function (message, fileName, lineNumber, columnNumber, errorObj) {
  		var ret = false;
  		if (originalWindowOnError) {
  			for (var _len = arguments.length, args = Array(_len > 5 ? _len - 5 : 0), _key = 5; _key < _len; _key++) {
  				args[_key - 5] = arguments[_key];
  			}

  			ret = originalWindowOnError.call.apply(originalWindowOnError, [this, message, fileName, lineNumber, columnNumber, errorObj].concat(args));
  		}

  		// Treat return value as window.onerror itself does,
  		// Only do our handling if not suppressed.
  		if (ret !== true) {
  			var error = {
  				message: message,
  				fileName: fileName,
  				lineNumber: lineNumber
  			};

  			// According to
  			// https://blog.sentry.io/2016/01/04/client-javascript-reporting-window-onerror,
  			// most modern browsers support an errorObj argument; use that to
  			// get a full stack trace if it's available.
  			if (errorObj && errorObj.stack) {
  				error.stacktrace = extractStacktrace(errorObj, 0);
  			}

  			ret = QUnit.onError(error);
  		}

  		return ret;
  	};

  	// Listen for unhandled rejections, and call QUnit.onUnhandledRejection
  	window$1.addEventListener("unhandledrejection", function (event) {
  		QUnit.onUnhandledRejection(event.reason);
  	});
  })();

  /*
   * This file is a modified version of google-diff-match-patch's JavaScript implementation
   * (https://code.google.com/p/google-diff-match-patch/source/browse/trunk/javascript/diff_match_patch_uncompressed.js),
   * modifications are licensed as more fully set forth in LICENSE.txt.
   *
   * The original source of google-diff-match-patch is attributable and licensed as follows:
   *
   * Copyright 2006 Google Inc.
   * https://code.google.com/p/google-diff-match-patch/
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * https://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *
   * More Info:
   *  https://code.google.com/p/google-diff-match-patch/
   *
   * Usage: QUnit.diff(expected, actual)
   *
   */
  QUnit.diff = function () {
  	function DiffMatchPatch() {}

  	//  DIFF FUNCTIONS

  	/**
    * The data structure representing a diff is an array of tuples:
    * [[DIFF_DELETE, 'Hello'], [DIFF_INSERT, 'Goodbye'], [DIFF_EQUAL, ' world.']]
    * which means: delete 'Hello', add 'Goodbye' and keep ' world.'
    */
  	var DIFF_DELETE = -1,
  	    DIFF_INSERT = 1,
  	    DIFF_EQUAL = 0;

  	/**
    * Find the differences between two texts.  Simplifies the problem by stripping
    * any common prefix or suffix off the texts before diffing.
    * @param {string} text1 Old string to be diffed.
    * @param {string} text2 New string to be diffed.
    * @param {boolean=} optChecklines Optional speedup flag. If present and false,
    *     then don't run a line-level diff first to identify the changed areas.
    *     Defaults to true, which does a faster, slightly less optimal diff.
    * @return {!Array.<!DiffMatchPatch.Diff>} Array of diff tuples.
    */
  	DiffMatchPatch.prototype.DiffMain = function (text1, text2, optChecklines) {
  		var deadline, checklines, commonlength, commonprefix, commonsuffix, diffs;

  		// The diff must be complete in up to 1 second.
  		deadline = new Date().getTime() + 1000;

  		// Check for null inputs.
  		if (text1 === null || text2 === null) {
  			throw new Error("Null input. (DiffMain)");
  		}

  		// Check for equality (speedup).
  		if (text1 === text2) {
  			if (text1) {
  				return [[DIFF_EQUAL, text1]];
  			}
  			return [];
  		}

  		if (typeof optChecklines === "undefined") {
  			optChecklines = true;
  		}

  		checklines = optChecklines;

  		// Trim off common prefix (speedup).
  		commonlength = this.diffCommonPrefix(text1, text2);
  		commonprefix = text1.substring(0, commonlength);
  		text1 = text1.substring(commonlength);
  		text2 = text2.substring(commonlength);

  		// Trim off common suffix (speedup).
  		commonlength = this.diffCommonSuffix(text1, text2);
  		commonsuffix = text1.substring(text1.length - commonlength);
  		text1 = text1.substring(0, text1.length - commonlength);
  		text2 = text2.substring(0, text2.length - commonlength);

  		// Compute the diff on the middle block.
  		diffs = this.diffCompute(text1, text2, checklines, deadline);

  		// Restore the prefix and suffix.
  		if (commonprefix) {
  			diffs.unshift([DIFF_EQUAL, commonprefix]);
  		}
  		if (commonsuffix) {
  			diffs.push([DIFF_EQUAL, commonsuffix]);
  		}
  		this.diffCleanupMerge(diffs);
  		return diffs;
  	};

  	/**
    * Reduce the number of edits by eliminating operationally trivial equalities.
    * @param {!Array.<!DiffMatchPatch.Diff>} diffs Array of diff tuples.
    */
  	DiffMatchPatch.prototype.diffCleanupEfficiency = function (diffs) {
  		var changes, equalities, equalitiesLength, lastequality, pointer, preIns, preDel, postIns, postDel;
  		changes = false;
  		equalities = []; // Stack of indices where equalities are found.
  		equalitiesLength = 0; // Keeping our own length var is faster in JS.
  		/** @type {?string} */
  		lastequality = null;

  		// Always equal to diffs[equalities[equalitiesLength - 1]][1]
  		pointer = 0; // Index of current position.

  		// Is there an insertion operation before the last equality.
  		preIns = false;

  		// Is there a deletion operation before the last equality.
  		preDel = false;

  		// Is there an insertion operation after the last equality.
  		postIns = false;

  		// Is there a deletion operation after the last equality.
  		postDel = false;
  		while (pointer < diffs.length) {

  			// Equality found.
  			if (diffs[pointer][0] === DIFF_EQUAL) {
  				if (diffs[pointer][1].length < 4 && (postIns || postDel)) {

  					// Candidate found.
  					equalities[equalitiesLength++] = pointer;
  					preIns = postIns;
  					preDel = postDel;
  					lastequality = diffs[pointer][1];
  				} else {

  					// Not a candidate, and can never become one.
  					equalitiesLength = 0;
  					lastequality = null;
  				}
  				postIns = postDel = false;

  				// An insertion or deletion.
  			} else {

  				if (diffs[pointer][0] === DIFF_DELETE) {
  					postDel = true;
  				} else {
  					postIns = true;
  				}

  				/*
       * Five types to be split:
       * <ins>A</ins><del>B</del>XY<ins>C</ins><del>D</del>
       * <ins>A</ins>X<ins>C</ins><del>D</del>
       * <ins>A</ins><del>B</del>X<ins>C</ins>
       * <ins>A</del>X<ins>C</ins><del>D</del>
       * <ins>A</ins><del>B</del>X<del>C</del>
       */
  				if (lastequality && (preIns && preDel && postIns && postDel || lastequality.length < 2 && preIns + preDel + postIns + postDel === 3)) {

  					// Duplicate record.
  					diffs.splice(equalities[equalitiesLength - 1], 0, [DIFF_DELETE, lastequality]);

  					// Change second copy to insert.
  					diffs[equalities[equalitiesLength - 1] + 1][0] = DIFF_INSERT;
  					equalitiesLength--; // Throw away the equality we just deleted;
  					lastequality = null;
  					if (preIns && preDel) {

  						// No changes made which could affect previous entry, keep going.
  						postIns = postDel = true;
  						equalitiesLength = 0;
  					} else {
  						equalitiesLength--; // Throw away the previous equality.
  						pointer = equalitiesLength > 0 ? equalities[equalitiesLength - 1] : -1;
  						postIns = postDel = false;
  					}
  					changes = true;
  				}
  			}
  			pointer++;
  		}

  		if (changes) {
  			this.diffCleanupMerge(diffs);
  		}
  	};

  	/**
    * Convert a diff array into a pretty HTML report.
    * @param {!Array.<!DiffMatchPatch.Diff>} diffs Array of diff tuples.
    * @param {integer} string to be beautified.
    * @return {string} HTML representation.
    */
  	DiffMatchPatch.prototype.diffPrettyHtml = function (diffs) {
  		var op,
  		    data,
  		    x,
  		    html = [];
  		for (x = 0; x < diffs.length; x++) {
  			op = diffs[x][0]; // Operation (insert, delete, equal)
  			data = diffs[x][1]; // Text of change.
  			switch (op) {
  				case DIFF_INSERT:
  					html[x] = "<ins>" + escapeText(data) + "</ins>";
  					break;
  				case DIFF_DELETE:
  					html[x] = "<del>" + escapeText(data) + "</del>";
  					break;
  				case DIFF_EQUAL:
  					html[x] = "<span>" + escapeText(data) + "</span>";
  					break;
  			}
  		}
  		return html.join("");
  	};

  	/**
    * Determine the common prefix of two strings.
    * @param {string} text1 First string.
    * @param {string} text2 Second string.
    * @return {number} The number of characters common to the start of each
    *     string.
    */
  	DiffMatchPatch.prototype.diffCommonPrefix = function (text1, text2) {
  		var pointermid, pointermax, pointermin, pointerstart;

  		// Quick check for common null cases.
  		if (!text1 || !text2 || text1.charAt(0) !== text2.charAt(0)) {
  			return 0;
  		}

  		// Binary search.
  		// Performance analysis: https://neil.fraser.name/news/2007/10/09/
  		pointermin = 0;
  		pointermax = Math.min(text1.length, text2.length);
  		pointermid = pointermax;
  		pointerstart = 0;
  		while (pointermin < pointermid) {
  			if (text1.substring(pointerstart, pointermid) === text2.substring(pointerstart, pointermid)) {
  				pointermin = pointermid;
  				pointerstart = pointermin;
  			} else {
  				pointermax = pointermid;
  			}
  			pointermid = Math.floor((pointermax - pointermin) / 2 + pointermin);
  		}
  		return pointermid;
  	};

  	/**
    * Determine the common suffix of two strings.
    * @param {string} text1 First string.
    * @param {string} text2 Second string.
    * @return {number} The number of characters common to the end of each string.
    */
  	DiffMatchPatch.prototype.diffCommonSuffix = function (text1, text2) {
  		var pointermid, pointermax, pointermin, pointerend;

  		// Quick check for common null cases.
  		if (!text1 || !text2 || text1.charAt(text1.length - 1) !== text2.charAt(text2.length - 1)) {
  			return 0;
  		}

  		// Binary search.
  		// Performance analysis: https://neil.fraser.name/news/2007/10/09/
  		pointermin = 0;
  		pointermax = Math.min(text1.length, text2.length);
  		pointermid = pointermax;
  		pointerend = 0;
  		while (pointermin < pointermid) {
  			if (text1.substring(text1.length - pointermid, text1.length - pointerend) === text2.substring(text2.length - pointermid, text2.length - pointerend)) {
  				pointermin = pointermid;
  				pointerend = pointermin;
  			} else {
  				pointermax = pointermid;
  			}
  			pointermid = Math.floor((pointermax - pointermin) / 2 + pointermin);
  		}
  		return pointermid;
  	};

  	/**
    * Find the differences between two texts.  Assumes that the texts do not
    * have any common prefix or suffix.
    * @param {string} text1 Old string to be diffed.
    * @param {string} text2 New string to be diffed.
    * @param {boolean} checklines Speedup flag.  If false, then don't run a
    *     line-level diff first to identify the changed areas.
    *     If true, then run a faster, slightly less optimal diff.
    * @param {number} deadline Time when the diff should be complete by.
    * @return {!Array.<!DiffMatchPatch.Diff>} Array of diff tuples.
    * @private
    */
  	DiffMatchPatch.prototype.diffCompute = function (text1, text2, checklines, deadline) {
  		var diffs, longtext, shorttext, i, hm, text1A, text2A, text1B, text2B, midCommon, diffsA, diffsB;

  		if (!text1) {

  			// Just add some text (speedup).
  			return [[DIFF_INSERT, text2]];
  		}

  		if (!text2) {

  			// Just delete some text (speedup).
  			return [[DIFF_DELETE, text1]];
  		}

  		longtext = text1.length > text2.length ? text1 : text2;
  		shorttext = text1.length > text2.length ? text2 : text1;
  		i = longtext.indexOf(shorttext);
  		if (i !== -1) {

  			// Shorter text is inside the longer text (speedup).
  			diffs = [[DIFF_INSERT, longtext.substring(0, i)], [DIFF_EQUAL, shorttext], [DIFF_INSERT, longtext.substring(i + shorttext.length)]];

  			// Swap insertions for deletions if diff is reversed.
  			if (text1.length > text2.length) {
  				diffs[0][0] = diffs[2][0] = DIFF_DELETE;
  			}
  			return diffs;
  		}

  		if (shorttext.length === 1) {

  			// Single character string.
  			// After the previous speedup, the character can't be an equality.
  			return [[DIFF_DELETE, text1], [DIFF_INSERT, text2]];
  		}

  		// Check to see if the problem can be split in two.
  		hm = this.diffHalfMatch(text1, text2);
  		if (hm) {

  			// A half-match was found, sort out the return data.
  			text1A = hm[0];
  			text1B = hm[1];
  			text2A = hm[2];
  			text2B = hm[3];
  			midCommon = hm[4];

  			// Send both pairs off for separate processing.
  			diffsA = this.DiffMain(text1A, text2A, checklines, deadline);
  			diffsB = this.DiffMain(text1B, text2B, checklines, deadline);

  			// Merge the results.
  			return diffsA.concat([[DIFF_EQUAL, midCommon]], diffsB);
  		}

  		if (checklines && text1.length > 100 && text2.length > 100) {
  			return this.diffLineMode(text1, text2, deadline);
  		}

  		return this.diffBisect(text1, text2, deadline);
  	};

  	/**
    * Do the two texts share a substring which is at least half the length of the
    * longer text?
    * This speedup can produce non-minimal diffs.
    * @param {string} text1 First string.
    * @param {string} text2 Second string.
    * @return {Array.<string>} Five element Array, containing the prefix of
    *     text1, the suffix of text1, the prefix of text2, the suffix of
    *     text2 and the common middle.  Or null if there was no match.
    * @private
    */
  	DiffMatchPatch.prototype.diffHalfMatch = function (text1, text2) {
  		var longtext, shorttext, dmp, text1A, text2B, text2A, text1B, midCommon, hm1, hm2, hm;

  		longtext = text1.length > text2.length ? text1 : text2;
  		shorttext = text1.length > text2.length ? text2 : text1;
  		if (longtext.length < 4 || shorttext.length * 2 < longtext.length) {
  			return null; // Pointless.
  		}
  		dmp = this; // 'this' becomes 'window' in a closure.

  		/**
     * Does a substring of shorttext exist within longtext such that the substring
     * is at least half the length of longtext?
     * Closure, but does not reference any external variables.
     * @param {string} longtext Longer string.
     * @param {string} shorttext Shorter string.
     * @param {number} i Start index of quarter length substring within longtext.
     * @return {Array.<string>} Five element Array, containing the prefix of
     *     longtext, the suffix of longtext, the prefix of shorttext, the suffix
     *     of shorttext and the common middle.  Or null if there was no match.
     * @private
     */
  		function diffHalfMatchI(longtext, shorttext, i) {
  			var seed, j, bestCommon, prefixLength, suffixLength, bestLongtextA, bestLongtextB, bestShorttextA, bestShorttextB;

  			// Start with a 1/4 length substring at position i as a seed.
  			seed = longtext.substring(i, i + Math.floor(longtext.length / 4));
  			j = -1;
  			bestCommon = "";
  			while ((j = shorttext.indexOf(seed, j + 1)) !== -1) {
  				prefixLength = dmp.diffCommonPrefix(longtext.substring(i), shorttext.substring(j));
  				suffixLength = dmp.diffCommonSuffix(longtext.substring(0, i), shorttext.substring(0, j));
  				if (bestCommon.length < suffixLength + prefixLength) {
  					bestCommon = shorttext.substring(j - suffixLength, j) + shorttext.substring(j, j + prefixLength);
  					bestLongtextA = longtext.substring(0, i - suffixLength);
  					bestLongtextB = longtext.substring(i + prefixLength);
  					bestShorttextA = shorttext.substring(0, j - suffixLength);
  					bestShorttextB = shorttext.substring(j + prefixLength);
  				}
  			}
  			if (bestCommon.length * 2 >= longtext.length) {
  				return [bestLongtextA, bestLongtextB, bestShorttextA, bestShorttextB, bestCommon];
  			} else {
  				return null;
  			}
  		}

  		// First check if the second quarter is the seed for a half-match.
  		hm1 = diffHalfMatchI(longtext, shorttext, Math.ceil(longtext.length / 4));

  		// Check again based on the third quarter.
  		hm2 = diffHalfMatchI(longtext, shorttext, Math.ceil(longtext.length / 2));
  		if (!hm1 && !hm2) {
  			return null;
  		} else if (!hm2) {
  			hm = hm1;
  		} else if (!hm1) {
  			hm = hm2;
  		} else {

  			// Both matched.  Select the longest.
  			hm = hm1[4].length > hm2[4].length ? hm1 : hm2;
  		}

  		// A half-match was found, sort out the return data.
  		if (text1.length > text2.length) {
  			text1A = hm[0];
  			text1B = hm[1];
  			text2A = hm[2];
  			text2B = hm[3];
  		} else {
  			text2A = hm[0];
  			text2B = hm[1];
  			text1A = hm[2];
  			text1B = hm[3];
  		}
  		midCommon = hm[4];
  		return [text1A, text1B, text2A, text2B, midCommon];
  	};

  	/**
    * Do a quick line-level diff on both strings, then rediff the parts for
    * greater accuracy.
    * This speedup can produce non-minimal diffs.
    * @param {string} text1 Old string to be diffed.
    * @param {string} text2 New string to be diffed.
    * @param {number} deadline Time when the diff should be complete by.
    * @return {!Array.<!DiffMatchPatch.Diff>} Array of diff tuples.
    * @private
    */
  	DiffMatchPatch.prototype.diffLineMode = function (text1, text2, deadline) {
  		var a, diffs, linearray, pointer, countInsert, countDelete, textInsert, textDelete, j;

  		// Scan the text on a line-by-line basis first.
  		a = this.diffLinesToChars(text1, text2);
  		text1 = a.chars1;
  		text2 = a.chars2;
  		linearray = a.lineArray;

  		diffs = this.DiffMain(text1, text2, false, deadline);

  		// Convert the diff back to original text.
  		this.diffCharsToLines(diffs, linearray);

  		// Eliminate freak matches (e.g. blank lines)
  		this.diffCleanupSemantic(diffs);

  		// Rediff any replacement blocks, this time character-by-character.
  		// Add a dummy entry at the end.
  		diffs.push([DIFF_EQUAL, ""]);
  		pointer = 0;
  		countDelete = 0;
  		countInsert = 0;
  		textDelete = "";
  		textInsert = "";
  		while (pointer < diffs.length) {
  			switch (diffs[pointer][0]) {
  				case DIFF_INSERT:
  					countInsert++;
  					textInsert += diffs[pointer][1];
  					break;
  				case DIFF_DELETE:
  					countDelete++;
  					textDelete += diffs[pointer][1];
  					break;
  				case DIFF_EQUAL:

  					// Upon reaching an equality, check for prior redundancies.
  					if (countDelete >= 1 && countInsert >= 1) {

  						// Delete the offending records and add the merged ones.
  						diffs.splice(pointer - countDelete - countInsert, countDelete + countInsert);
  						pointer = pointer - countDelete - countInsert;
  						a = this.DiffMain(textDelete, textInsert, false, deadline);
  						for (j = a.length - 1; j >= 0; j--) {
  							diffs.splice(pointer, 0, a[j]);
  						}
  						pointer = pointer + a.length;
  					}
  					countInsert = 0;
  					countDelete = 0;
  					textDelete = "";
  					textInsert = "";
  					break;
  			}
  			pointer++;
  		}
  		diffs.pop(); // Remove the dummy entry at the end.

  		return diffs;
  	};

  	/**
    * Find the 'middle snake' of a diff, split the problem in two
    * and return the recursively constructed diff.
    * See Myers 1986 paper: An O(ND) Difference Algorithm and Its Variations.
    * @param {string} text1 Old string to be diffed.
    * @param {string} text2 New string to be diffed.
    * @param {number} deadline Time at which to bail if not yet complete.
    * @return {!Array.<!DiffMatchPatch.Diff>} Array of diff tuples.
    * @private
    */
  	DiffMatchPatch.prototype.diffBisect = function (text1, text2, deadline) {
  		var text1Length, text2Length, maxD, vOffset, vLength, v1, v2, x, delta, front, k1start, k1end, k2start, k2end, k2Offset, k1Offset, x1, x2, y1, y2, d, k1, k2;

  		// Cache the text lengths to prevent multiple calls.
  		text1Length = text1.length;
  		text2Length = text2.length;
  		maxD = Math.ceil((text1Length + text2Length) / 2);
  		vOffset = maxD;
  		vLength = 2 * maxD;
  		v1 = new Array(vLength);
  		v2 = new Array(vLength);

  		// Setting all elements to -1 is faster in Chrome & Firefox than mixing
  		// integers and undefined.
  		for (x = 0; x < vLength; x++) {
  			v1[x] = -1;
  			v2[x] = -1;
  		}
  		v1[vOffset + 1] = 0;
  		v2[vOffset + 1] = 0;
  		delta = text1Length - text2Length;

  		// If the total number of characters is odd, then the front path will collide
  		// with the reverse path.
  		front = delta % 2 !== 0;

  		// Offsets for start and end of k loop.
  		// Prevents mapping of space beyond the grid.
  		k1start = 0;
  		k1end = 0;
  		k2start = 0;
  		k2end = 0;
  		for (d = 0; d < maxD; d++) {

  			// Bail out if deadline is reached.
  			if (new Date().getTime() > deadline) {
  				break;
  			}

  			// Walk the front path one step.
  			for (k1 = -d + k1start; k1 <= d - k1end; k1 += 2) {
  				k1Offset = vOffset + k1;
  				if (k1 === -d || k1 !== d && v1[k1Offset - 1] < v1[k1Offset + 1]) {
  					x1 = v1[k1Offset + 1];
  				} else {
  					x1 = v1[k1Offset - 1] + 1;
  				}
  				y1 = x1 - k1;
  				while (x1 < text1Length && y1 < text2Length && text1.charAt(x1) === text2.charAt(y1)) {
  					x1++;
  					y1++;
  				}
  				v1[k1Offset] = x1;
  				if (x1 > text1Length) {

  					// Ran off the right of the graph.
  					k1end += 2;
  				} else if (y1 > text2Length) {

  					// Ran off the bottom of the graph.
  					k1start += 2;
  				} else if (front) {
  					k2Offset = vOffset + delta - k1;
  					if (k2Offset >= 0 && k2Offset < vLength && v2[k2Offset] !== -1) {

  						// Mirror x2 onto top-left coordinate system.
  						x2 = text1Length - v2[k2Offset];
  						if (x1 >= x2) {

  							// Overlap detected.
  							return this.diffBisectSplit(text1, text2, x1, y1, deadline);
  						}
  					}
  				}
  			}

  			// Walk the reverse path one step.
  			for (k2 = -d + k2start; k2 <= d - k2end; k2 += 2) {
  				k2Offset = vOffset + k2;
  				if (k2 === -d || k2 !== d && v2[k2Offset - 1] < v2[k2Offset + 1]) {
  					x2 = v2[k2Offset + 1];
  				} else {
  					x2 = v2[k2Offset - 1] + 1;
  				}
  				y2 = x2 - k2;
  				while (x2 < text1Length && y2 < text2Length && text1.charAt(text1Length - x2 - 1) === text2.charAt(text2Length - y2 - 1)) {
  					x2++;
  					y2++;
  				}
  				v2[k2Offset] = x2;
  				if (x2 > text1Length) {

  					// Ran off the left of the graph.
  					k2end += 2;
  				} else if (y2 > text2Length) {

  					// Ran off the top of the graph.
  					k2start += 2;
  				} else if (!front) {
  					k1Offset = vOffset + delta - k2;
  					if (k1Offset >= 0 && k1Offset < vLength && v1[k1Offset] !== -1) {
  						x1 = v1[k1Offset];
  						y1 = vOffset + x1 - k1Offset;

  						// Mirror x2 onto top-left coordinate system.
  						x2 = text1Length - x2;
  						if (x1 >= x2) {

  							// Overlap detected.
  							return this.diffBisectSplit(text1, text2, x1, y1, deadline);
  						}
  					}
  				}
  			}
  		}

  		// Diff took too long and hit the deadline or
  		// number of diffs equals number of characters, no commonality at all.
  		return [[DIFF_DELETE, text1], [DIFF_INSERT, text2]];
  	};

  	/**
    * Given the location of the 'middle snake', split the diff in two parts
    * and recurse.
    * @param {string} text1 Old string to be diffed.
    * @param {string} text2 New string to be diffed.
    * @param {number} x Index of split point in text1.
    * @param {number} y Index of split point in text2.
    * @param {number} deadline Time at which to bail if not yet complete.
    * @return {!Array.<!DiffMatchPatch.Diff>} Array of diff tuples.
    * @private
    */
  	DiffMatchPatch.prototype.diffBisectSplit = function (text1, text2, x, y, deadline) {
  		var text1a, text1b, text2a, text2b, diffs, diffsb;
  		text1a = text1.substring(0, x);
  		text2a = text2.substring(0, y);
  		text1b = text1.substring(x);
  		text2b = text2.substring(y);

  		// Compute both diffs serially.
  		diffs = this.DiffMain(text1a, text2a, false, deadline);
  		diffsb = this.DiffMain(text1b, text2b, false, deadline);

  		return diffs.concat(diffsb);
  	};

  	/**
    * Reduce the number of edits by eliminating semantically trivial equalities.
    * @param {!Array.<!DiffMatchPatch.Diff>} diffs Array of diff tuples.
    */
  	DiffMatchPatch.prototype.diffCleanupSemantic = function (diffs) {
  		var changes, equalities, equalitiesLength, lastequality, pointer, lengthInsertions2, lengthDeletions2, lengthInsertions1, lengthDeletions1, deletion, insertion, overlapLength1, overlapLength2;
  		changes = false;
  		equalities = []; // Stack of indices where equalities are found.
  		equalitiesLength = 0; // Keeping our own length var is faster in JS.
  		/** @type {?string} */
  		lastequality = null;

  		// Always equal to diffs[equalities[equalitiesLength - 1]][1]
  		pointer = 0; // Index of current position.

  		// Number of characters that changed prior to the equality.
  		lengthInsertions1 = 0;
  		lengthDeletions1 = 0;

  		// Number of characters that changed after the equality.
  		lengthInsertions2 = 0;
  		lengthDeletions2 = 0;
  		while (pointer < diffs.length) {
  			if (diffs[pointer][0] === DIFF_EQUAL) {
  				// Equality found.
  				equalities[equalitiesLength++] = pointer;
  				lengthInsertions1 = lengthInsertions2;
  				lengthDeletions1 = lengthDeletions2;
  				lengthInsertions2 = 0;
  				lengthDeletions2 = 0;
  				lastequality = diffs[pointer][1];
  			} else {
  				// An insertion or deletion.
  				if (diffs[pointer][0] === DIFF_INSERT) {
  					lengthInsertions2 += diffs[pointer][1].length;
  				} else {
  					lengthDeletions2 += diffs[pointer][1].length;
  				}

  				// Eliminate an equality that is smaller or equal to the edits on both
  				// sides of it.
  				if (lastequality && lastequality.length <= Math.max(lengthInsertions1, lengthDeletions1) && lastequality.length <= Math.max(lengthInsertions2, lengthDeletions2)) {

  					// Duplicate record.
  					diffs.splice(equalities[equalitiesLength - 1], 0, [DIFF_DELETE, lastequality]);

  					// Change second copy to insert.
  					diffs[equalities[equalitiesLength - 1] + 1][0] = DIFF_INSERT;

  					// Throw away the equality we just deleted.
  					equalitiesLength--;

  					// Throw away the previous equality (it needs to be reevaluated).
  					equalitiesLength--;
  					pointer = equalitiesLength > 0 ? equalities[equalitiesLength - 1] : -1;

  					// Reset the counters.
  					lengthInsertions1 = 0;
  					lengthDeletions1 = 0;
  					lengthInsertions2 = 0;
  					lengthDeletions2 = 0;
  					lastequality = null;
  					changes = true;
  				}
  			}
  			pointer++;
  		}

  		// Normalize the diff.
  		if (changes) {
  			this.diffCleanupMerge(diffs);
  		}

  		// Find any overlaps between deletions and insertions.
  		// e.g: <del>abcxxx</del><ins>xxxdef</ins>
  		//   -> <del>abc</del>xxx<ins>def</ins>
  		// e.g: <del>xxxabc</del><ins>defxxx</ins>
  		//   -> <ins>def</ins>xxx<del>abc</del>
  		// Only extract an overlap if it is as big as the edit ahead or behind it.
  		pointer = 1;
  		while (pointer < diffs.length) {
  			if (diffs[pointer - 1][0] === DIFF_DELETE && diffs[pointer][0] === DIFF_INSERT) {
  				deletion = diffs[pointer - 1][1];
  				insertion = diffs[pointer][1];
  				overlapLength1 = this.diffCommonOverlap(deletion, insertion);
  				overlapLength2 = this.diffCommonOverlap(insertion, deletion);
  				if (overlapLength1 >= overlapLength2) {
  					if (overlapLength1 >= deletion.length / 2 || overlapLength1 >= insertion.length / 2) {

  						// Overlap found.  Insert an equality and trim the surrounding edits.
  						diffs.splice(pointer, 0, [DIFF_EQUAL, insertion.substring(0, overlapLength1)]);
  						diffs[pointer - 1][1] = deletion.substring(0, deletion.length - overlapLength1);
  						diffs[pointer + 1][1] = insertion.substring(overlapLength1);
  						pointer++;
  					}
  				} else {
  					if (overlapLength2 >= deletion.length / 2 || overlapLength2 >= insertion.length / 2) {

  						// Reverse overlap found.
  						// Insert an equality and swap and trim the surrounding edits.
  						diffs.splice(pointer, 0, [DIFF_EQUAL, deletion.substring(0, overlapLength2)]);

  						diffs[pointer - 1][0] = DIFF_INSERT;
  						diffs[pointer - 1][1] = insertion.substring(0, insertion.length - overlapLength2);
  						diffs[pointer + 1][0] = DIFF_DELETE;
  						diffs[pointer + 1][1] = deletion.substring(overlapLength2);
  						pointer++;
  					}
  				}
  				pointer++;
  			}
  			pointer++;
  		}
  	};

  	/**
    * Determine if the suffix of one string is the prefix of another.
    * @param {string} text1 First string.
    * @param {string} text2 Second string.
    * @return {number} The number of characters common to the end of the first
    *     string and the start of the second string.
    * @private
    */
  	DiffMatchPatch.prototype.diffCommonOverlap = function (text1, text2) {
  		var text1Length, text2Length, textLength, best, length, pattern, found;

  		// Cache the text lengths to prevent multiple calls.
  		text1Length = text1.length;
  		text2Length = text2.length;

  		// Eliminate the null case.
  		if (text1Length === 0 || text2Length === 0) {
  			return 0;
  		}

  		// Truncate the longer string.
  		if (text1Length > text2Length) {
  			text1 = text1.substring(text1Length - text2Length);
  		} else if (text1Length < text2Length) {
  			text2 = text2.substring(0, text1Length);
  		}
  		textLength = Math.min(text1Length, text2Length);

  		// Quick check for the worst case.
  		if (text1 === text2) {
  			return textLength;
  		}

  		// Start by looking for a single character match
  		// and increase length until no match is found.
  		// Performance analysis: https://neil.fraser.name/news/2010/11/04/
  		best = 0;
  		length = 1;
  		while (true) {
  			pattern = text1.substring(textLength - length);
  			found = text2.indexOf(pattern);
  			if (found === -1) {
  				return best;
  			}
  			length += found;
  			if (found === 0 || text1.substring(textLength - length) === text2.substring(0, length)) {
  				best = length;
  				length++;
  			}
  		}
  	};

  	/**
    * Split two texts into an array of strings.  Reduce the texts to a string of
    * hashes where each Unicode character represents one line.
    * @param {string} text1 First string.
    * @param {string} text2 Second string.
    * @return {{chars1: string, chars2: string, lineArray: !Array.<string>}}
    *     An object containing the encoded text1, the encoded text2 and
    *     the array of unique strings.
    *     The zeroth element of the array of unique strings is intentionally blank.
    * @private
    */
  	DiffMatchPatch.prototype.diffLinesToChars = function (text1, text2) {
  		var lineArray, lineHash, chars1, chars2;
  		lineArray = []; // E.g. lineArray[4] === 'Hello\n'
  		lineHash = {}; // E.g. lineHash['Hello\n'] === 4

  		// '\x00' is a valid character, but various debuggers don't like it.
  		// So we'll insert a junk entry to avoid generating a null character.
  		lineArray[0] = "";

  		/**
     * Split a text into an array of strings.  Reduce the texts to a string of
     * hashes where each Unicode character represents one line.
     * Modifies linearray and linehash through being a closure.
     * @param {string} text String to encode.
     * @return {string} Encoded string.
     * @private
     */
  		function diffLinesToCharsMunge(text) {
  			var chars, lineStart, lineEnd, lineArrayLength, line;
  			chars = "";

  			// Walk the text, pulling out a substring for each line.
  			// text.split('\n') would would temporarily double our memory footprint.
  			// Modifying text would create many large strings to garbage collect.
  			lineStart = 0;
  			lineEnd = -1;

  			// Keeping our own length variable is faster than looking it up.
  			lineArrayLength = lineArray.length;
  			while (lineEnd < text.length - 1) {
  				lineEnd = text.indexOf("\n", lineStart);
  				if (lineEnd === -1) {
  					lineEnd = text.length - 1;
  				}
  				line = text.substring(lineStart, lineEnd + 1);
  				lineStart = lineEnd + 1;

  				var lineHashExists = lineHash.hasOwnProperty ? lineHash.hasOwnProperty(line) : lineHash[line] !== undefined;

  				if (lineHashExists) {
  					chars += String.fromCharCode(lineHash[line]);
  				} else {
  					chars += String.fromCharCode(lineArrayLength);
  					lineHash[line] = lineArrayLength;
  					lineArray[lineArrayLength++] = line;
  				}
  			}
  			return chars;
  		}

  		chars1 = diffLinesToCharsMunge(text1);
  		chars2 = diffLinesToCharsMunge(text2);
  		return {
  			chars1: chars1,
  			chars2: chars2,
  			lineArray: lineArray
  		};
  	};

  	/**
    * Rehydrate the text in a diff from a string of line hashes to real lines of
    * text.
    * @param {!Array.<!DiffMatchPatch.Diff>} diffs Array of diff tuples.
    * @param {!Array.<string>} lineArray Array of unique strings.
    * @private
    */
  	DiffMatchPatch.prototype.diffCharsToLines = function (diffs, lineArray) {
  		var x, chars, text, y;
  		for (x = 0; x < diffs.length; x++) {
  			chars = diffs[x][1];
  			text = [];
  			for (y = 0; y < chars.length; y++) {
  				text[y] = lineArray[chars.charCodeAt(y)];
  			}
  			diffs[x][1] = text.join("");
  		}
  	};

  	/**
    * Reorder and merge like edit sections.  Merge equalities.
    * Any edit section can move as long as it doesn't cross an equality.
    * @param {!Array.<!DiffMatchPatch.Diff>} diffs Array of diff tuples.
    */
  	DiffMatchPatch.prototype.diffCleanupMerge = function (diffs) {
  		var pointer, countDelete, countInsert, textInsert, textDelete, commonlength, changes, diffPointer, position;
  		diffs.push([DIFF_EQUAL, ""]); // Add a dummy entry at the end.
  		pointer = 0;
  		countDelete = 0;
  		countInsert = 0;
  		textDelete = "";
  		textInsert = "";

  		while (pointer < diffs.length) {
  			switch (diffs[pointer][0]) {
  				case DIFF_INSERT:
  					countInsert++;
  					textInsert += diffs[pointer][1];
  					pointer++;
  					break;
  				case DIFF_DELETE:
  					countDelete++;
  					textDelete += diffs[pointer][1];
  					pointer++;
  					break;
  				case DIFF_EQUAL:

  					// Upon reaching an equality, check for prior redundancies.
  					if (countDelete + countInsert > 1) {
  						if (countDelete !== 0 && countInsert !== 0) {

  							// Factor out any common prefixes.
  							commonlength = this.diffCommonPrefix(textInsert, textDelete);
  							if (commonlength !== 0) {
  								if (pointer - countDelete - countInsert > 0 && diffs[pointer - countDelete - countInsert - 1][0] === DIFF_EQUAL) {
  									diffs[pointer - countDelete - countInsert - 1][1] += textInsert.substring(0, commonlength);
  								} else {
  									diffs.splice(0, 0, [DIFF_EQUAL, textInsert.substring(0, commonlength)]);
  									pointer++;
  								}
  								textInsert = textInsert.substring(commonlength);
  								textDelete = textDelete.substring(commonlength);
  							}

  							// Factor out any common suffixies.
  							commonlength = this.diffCommonSuffix(textInsert, textDelete);
  							if (commonlength !== 0) {
  								diffs[pointer][1] = textInsert.substring(textInsert.length - commonlength) + diffs[pointer][1];
  								textInsert = textInsert.substring(0, textInsert.length - commonlength);
  								textDelete = textDelete.substring(0, textDelete.length - commonlength);
  							}
  						}

  						// Delete the offending records and add the merged ones.
  						if (countDelete === 0) {
  							diffs.splice(pointer - countInsert, countDelete + countInsert, [DIFF_INSERT, textInsert]);
  						} else if (countInsert === 0) {
  							diffs.splice(pointer - countDelete, countDelete + countInsert, [DIFF_DELETE, textDelete]);
  						} else {
  							diffs.splice(pointer - countDelete - countInsert, countDelete + countInsert, [DIFF_DELETE, textDelete], [DIFF_INSERT, textInsert]);
  						}
  						pointer = pointer - countDelete - countInsert + (countDelete ? 1 : 0) + (countInsert ? 1 : 0) + 1;
  					} else if (pointer !== 0 && diffs[pointer - 1][0] === DIFF_EQUAL) {

  						// Merge this equality with the previous one.
  						diffs[pointer - 1][1] += diffs[pointer][1];
  						diffs.splice(pointer, 1);
  					} else {
  						pointer++;
  					}
  					countInsert = 0;
  					countDelete = 0;
  					textDelete = "";
  					textInsert = "";
  					break;
  			}
  		}
  		if (diffs[diffs.length - 1][1] === "") {
  			diffs.pop(); // Remove the dummy entry at the end.
  		}

  		// Second pass: look for single edits surrounded on both sides by equalities
  		// which can be shifted sideways to eliminate an equality.
  		// e.g: A<ins>BA</ins>C -> <ins>AB</ins>AC
  		changes = false;
  		pointer = 1;

  		// Intentionally ignore the first and last element (don't need checking).
  		while (pointer < diffs.length - 1) {
  			if (diffs[pointer - 1][0] === DIFF_EQUAL && diffs[pointer + 1][0] === DIFF_EQUAL) {

  				diffPointer = diffs[pointer][1];
  				position = diffPointer.substring(diffPointer.length - diffs[pointer - 1][1].length);

  				// This is a single edit surrounded by equalities.
  				if (position === diffs[pointer - 1][1]) {

  					// Shift the edit over the previous equality.
  					diffs[pointer][1] = diffs[pointer - 1][1] + diffs[pointer][1].substring(0, diffs[pointer][1].length - diffs[pointer - 1][1].length);
  					diffs[pointer + 1][1] = diffs[pointer - 1][1] + diffs[pointer + 1][1];
  					diffs.splice(pointer - 1, 1);
  					changes = true;
  				} else if (diffPointer.substring(0, diffs[pointer + 1][1].length) === diffs[pointer + 1][1]) {

  					// Shift the edit over the next equality.
  					diffs[pointer - 1][1] += diffs[pointer + 1][1];
  					diffs[pointer][1] = diffs[pointer][1].substring(diffs[pointer + 1][1].length) + diffs[pointer + 1][1];
  					diffs.splice(pointer + 1, 1);
  					changes = true;
  				}
  			}
  			pointer++;
  		}

  		// If shifts were made, the diff needs reordering and another shift sweep.
  		if (changes) {
  			this.diffCleanupMerge(diffs);
  		}
  	};

  	return function (o, n) {
  		var diff, output, text;
  		diff = new DiffMatchPatch();
  		output = diff.DiffMain(o, n);
  		diff.diffCleanupEfficiency(output);
  		text = diff.diffPrettyHtml(output);

  		return text;
  	};
  }();

}((function() { return this; }())));

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../process/browser.js */ "./node_modules/process/browser.js"), __webpack_require__(/*! ./../../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js"), __webpack_require__(/*! ./../../webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./node_modules/webpack/buildin/global.js":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),

/***/ "./node_modules/webpack/buildin/module.js":
/*!***********************************!*\
  !*** (webpack)/buildin/module.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function(module) {
	if (!module.webpackPolyfill) {
		module.deprecate = function() {};
		module.paths = [];
		// module.parent = undefined by default
		if (!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ }),

/***/ "./src/combinators.ts":
/*!****************************!*\
  !*** ./src/combinators.ts ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
function tag(source) {
    return function (input) {
        var next = input.slice(source.length);
        if (next.fragment === source) {
            return { kind: "ok", value: next };
        }
        else {
            return { kind: "err", snippet: input, reason: "tag" };
        }
    };
}
exports.tag = tag;


/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var combinators = __importStar(__webpack_require__(/*! ./combinators */ "./src/combinators.ts"));
exports.combinators = combinators;
__export(__webpack_require__(/*! ./snippet */ "./src/snippet.ts"));
function parse(input) {
    return {};
}
exports.parse = parse;


/***/ }),

/***/ "./src/snippet.ts":
/*!************************!*\
  !*** ./src/snippet.ts ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Snippet = /** @class */ (function () {
    function Snippet(source, offset, length) {
        this.source = source;
        this.offset = offset;
        this.length = length;
    }
    Snippet.input = function (source) {
        return new Snippet(source, 0, 0);
    };
    Snippet.prototype.slice = function (chars) {
        return new Snippet(this.source, this.offset + this.length, chars);
    };
    Object.defineProperty(Snippet.prototype, "fragment", {
        get: function () {
            return this.source.slice(this.offset, this.offset + this.length);
        },
        enumerable: true,
        configurable: true
    });
    return Snippet;
}());
exports.Snippet = Snippet;


/***/ }),

/***/ "./tests/combinators-test.ts":
/*!***********************************!*\
  !*** ./tests/combinators-test.ts ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var qunit_1 = __webpack_require__(/*! qunit */ "./node_modules/qunit/qunit/qunit.js");
var hbs_parser_next_1 = __webpack_require__(/*! hbs-parser-next */ "./src/index.ts");
qunit_1.module("[combinators] tag");
qunit_1.test("match: one character tag", function (assert) {
    var input = hbs_parser_next_1.Snippet.input("hello world");
    var next = hbs_parser_next_1.combinators.tag("h")(input);
    assert.deepEqual(next, {
        kind: "ok",
        value: input.slice(1)
    });
});
qunit_1.test("match: multi-character tag", function (assert) {
    var input = hbs_parser_next_1.Snippet.input("hello world");
    var next = hbs_parser_next_1.combinators.tag("hello")(input);
    assert.deepEqual(next, {
        kind: "ok",
        value: input.slice(5)
    });
});
qunit_1.test("mismatch: multi-character tag", function (assert) {
    var input = hbs_parser_next_1.Snippet.input("hello world");
    var next = hbs_parser_next_1.combinators.tag("holla")(input);
    assert.deepEqual(next, {
        kind: "err",
        snippet: input,
        reason: "tag"
    });
});
qunit_1.test("mismatch: not at 0 offset", function (assert) {
    var input = hbs_parser_next_1.Snippet.input("hello world");
    var next = unwrap(hbs_parser_next_1.combinators.tag("hello ")(input));
    var mismatch = hbs_parser_next_1.combinators.tag("woold")(next);
    assert.deepEqual(mismatch, {
        kind: "err",
        snippet: next,
        reason: "tag"
    });
});
function unwrap(input) {
    if (input.kind === "ok") {
        return input.value;
    }
    else {
        throw new Error("Expected Ok result, got Err (reason=" + input.reason + ")");
    }
}


/***/ }),

/***/ "./tests/index.ts":
/*!************************!*\
  !*** ./tests/index.ts ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
__webpack_require__(/*! file-loader?name=[name].[ext]!./index.html */ "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]!./tests/index.html");
__webpack_require__(/*! file-loader?name=[name].[ext]!../node_modules/qunit/qunit/qunit.css */ "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]!./node_modules/qunit/qunit/qunit.css");
var qunit_1 = __webpack_require__(/*! qunit */ "./node_modules/qunit/qunit/qunit.js");
__webpack_require__(/*! ./combinators-test */ "./tests/combinators-test.ts");
qunit_1.config.autostart = true;


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3F1bml0L3F1bml0L3F1bml0LmNzcyIsIndlYnBhY2s6Ly8vLi90ZXN0cy9pbmRleC5odG1sIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9wcm9jZXNzL2Jyb3dzZXIuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3F1bml0L3F1bml0L3F1bml0LmpzIiwid2VicGFjazovLy8od2VicGFjaykvYnVpbGRpbi9nbG9iYWwuanMiLCJ3ZWJwYWNrOi8vLyh3ZWJwYWNrKS9idWlsZGluL21vZHVsZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tYmluYXRvcnMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LnRzIiwid2VicGFjazovLy8uL3NyYy9zbmlwcGV0LnRzIiwid2VicGFjazovLy8uL3Rlc3RzL2NvbWJpbmF0b3JzLXRlc3QudHMiLCJ3ZWJwYWNrOi8vLy4vdGVzdHMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7OztBQ2xGQTtBQUFlLG9GQUF1QixjQUFjLEU7Ozs7Ozs7Ozs7OztBQ0FwRDtBQUFlLG9GQUF1QixlQUFlLEU7Ozs7Ozs7Ozs7O0FDQXJEO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUIsc0JBQXNCO0FBQzdDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxxQ0FBcUM7O0FBRXJDO0FBQ0E7QUFDQTs7QUFFQSwyQkFBMkI7QUFDM0I7QUFDQTtBQUNBO0FBQ0EsNEJBQTRCLFVBQVU7Ozs7Ozs7Ozs7OztBQ3ZMdEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTs7Ozs7Ozs7Ozs7O0FBWUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EscUJBQXFCLGtCQUFrQjtBQUN2QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBMENIO0FBQ0E7QUFDQSwrQ0FBK0MsZ0JBQWdCOztBQUUvRDtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGNBQWMsbUJBQW1CO0FBQ2pDLGVBQWUsY0FBYztBQUM3QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhLElBQUk7QUFDakIsYUFBYSxNQUFNO0FBQ25CLGNBQWM7QUFDZDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWEsT0FBTztBQUNwQixjQUFjLE9BQU87QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGtCQUFrQixnQkFBZ0I7QUFDbEM7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0Esb0JBQW9CLGlCQUFpQjtBQUNyQzs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLGtCQUFrQjtBQUNsQiw4QkFBOEI7QUFDOUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0EsaUJBQWlCLGFBQWE7QUFDOUI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsZ0JBQWdCLFNBQVM7O0FBRXpCLGdDQUFnQztBQUNoQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQSx3QkFBd0I7QUFDeEIsd0JBQXdCLElBQUk7QUFDNUI7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsT0FBTzs7QUFFUDtBQUNBO0FBQ0E7QUFDQSxNQUFNOztBQUVOO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBCQUEwQixXQUFXO0FBQ3JDLDBCQUEwQjtBQUMxQjtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxPQUFPOztBQUVQO0FBQ0E7QUFDQTtBQUNBLE1BQU07O0FBRU47QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsZ0NBQWdDO0FBQ2hDO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxjQUFjLGFBQWE7O0FBRTNCLGVBQWUsa0JBQWtCO0FBQ2pDOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7O0FBRUosZ0JBQWdCOztBQUVoQjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtB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QUFDMUQ7QUFDQSxHQUFHO0FBQ0g7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1AsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0EsWUFBWSxJQUFJO0FBQ2hCO0FBQ0EsYUFBYSxRQUFRO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLE9BQU87O0FBRVA7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQSxPQUFPO0FBQ1A7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsbUJBQW1CLHdCQUF3QjtBQUMzQztBQUNBOztBQUVBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLEtBQUs7QUFDTDtBQUNBLEtBQUs7QUFDTDtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQSxPQUFPO0FBQ1AsS0FBSztBQUNMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1Qiw2Q0FBNkM7QUFDcEU7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFD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O0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsS0FBSztBQUNMO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLEtBQUs7QUFDTDtBQUNBLEtBQUs7QUFDTDtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsS0FBSztBQUNMO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0EsZUFBZTtBQUNmO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWCxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLFlBQVksU0FBUztBQUNyQixZQUFZLFNBQVM7QUFDckI7QUFDQSxhQUFhO0FBQ2I7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsWUFBWSxTQUFTO0FBQ3JCO0FBQ0EsYUFBYTtBQUNiOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhCQUE4QjtBQUM5QixTQUFTO0FBQ1Q7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0EsZ0JBQWdCLFNBQVM7QUFDekIsaUJBQWlCO0FBQ2pCOztBQUVBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYixXQUFXO0FBQ1g7QUFDQTtBQUNBLGFBQWE7QUFDYixXQUFXO0FBQ1g7O0FBRUE7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSx3Q0FBd0MsT0FBTztBQUMvQzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLElBQUk7QUFDSjs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQixrQkFBa0I7QUFDdkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQSxNQUFNO0FBQ04sS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsYUFBYSxNQUFNO0FBQ25CO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxjQUFjO0FBQ2Q7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGFBQWEsU0FBUztBQUN0QixhQUFhLFFBQVE7QUFDckIsYUFBYSxPQUFPO0FBQ3BCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJOztBQUVKO0FBQ0E7QUFDQSxxQ0FBcUMsUUFBUTtBQUM3Qzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBLElBQUk7QUFDSjtBQUNBLEdBQUc7O0FBRUg7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLElBQUk7QUFDSjtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTs7QUFFSjtBQUNBLHFDQUFxQyxjQUFjO0FBQ25EO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTs7QUFFSjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLElBQUk7O0FBRUo7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLDJCQUEyQjtBQUMzQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUCxNQUFNO0FBQ04sS0FBSzs7QUFFTDtBQUNBOztBQUVBLHNDQUFzQzs7QUFFdEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOLEtBQUs7QUFDTCxJQUFJOztBQUVKO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7O0FBRUo7QUFDQTtBQUNBLElBQUk7O0FBRUo7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxJQUFJOzs7QUFHSjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxxQkFBcUIsa0NBQWtDO0FBQ3ZEO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsSUFBSTs7O0FBR0o7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQSxlQUFlLDRCQUE0QjtBQUMzQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSLE9BQU87QUFDUDtBQUNBLEtBQUs7QUFDTDtBQUNBLEtBQUs7O0FBRUw7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQSxJQUFJOztBQUVKO0FBQ0E7QUFDQTtBQUNBLHFDQUFxQztBQUNyQztBQUNBLElBQUk7O0FBRUo7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0EsTUFBTTtBQUNOO0FBQ0EsTUFBTTtBQUNOO0FBQ0EsTUFBTTtBQUNOO0FBQ0EsTUFBTTtBQUNOOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJOzs7QUFHSjtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxvQ0FBb0M7QUFDcEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxJQUFJOztBQUVKO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsSUFBSTs7QUFFSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTs7O0FBR0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSLE9BQU87QUFDUDtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBLElBQUk7O0FBRUo7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsSUFBSTs7QUFFSjtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxJQUFJOztBQUVKO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxJQUFJOztBQUVKO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJOztBQUVKO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxJQUFJOztBQUVKO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLElBQUk7O0FBRUo7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDREQUE0RDtBQUM1RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEtBQUs7QUFDTCxJQUFJO0FBQ0o7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUEsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjs7QUFFQTs7QUFFQSxJQUFJO0FBQ0o7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSxJQUFJO0FBQ0o7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsSUFBSTtBQUNKO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBLElBQUk7QUFDSjtBQUNBOztBQUVBLHFDQUFxQztBQUNyQztBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBLElBQUk7QUFDSjtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBLElBQUk7QUFDSjtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFD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QUNBOztBQUVBO0FBQ0E7QUFDQSxhQUFhLGlCQUFpQjtBQUM5QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7O0FBRUo7QUFDQTtBQUNBO0FBQ0EsSUFBSTs7QUFFSjs7QUFFQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsSUFBSTtBQUNKO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSwwQ0FBMEMsT0FBTztBQUNqRDtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxJQUFJO0FBQ0o7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsR0FBRzs7QUFFSDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0EsSUFBSTs7QUFFSjtBQUNBO0FBQ0E7QUFDQTs7QUFF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QTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsZUFBZSwyQkFBMkI7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGdCQUFnQixzQkFBc0I7QUFDdEM7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0Isd0JBQXdCO0FBQ3hDO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9GQUFvRjtBQUNwRjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGdGQUFnRjtBQUNoRjtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGdDQUFnQyxpQkFBaUI7O0FBRWpEO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxlQUFlLDRCQUE0QjtBQUMzQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBLElBQUk7O0FBRUo7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxvQkFBb0IsMkJBQTJCO0FBQy9DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7O0FBRUo7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSxJQUFJOztBQUVKOztBQUVBO0FBQ0EsZ0VBQWdFO0FBQ2hFOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ04sa1NBQWtTLGVBQWU7QUFDalQsTUFBTTtBQUNOO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJOztBQUVKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQSxNQUFNOztBQUVOO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxNQUFNOztBQUVOOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBOztBQUVBO0FBQ0E7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QUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQy9DYTtBQUNiLDhDQUE4QyxjQUFjO0FBQzVELG1CQUFPLENBQUMsK0hBQTRDO0FBQ3BELG1CQUFPLENBQUMsMEtBQXFFO0FBQzdFLGNBQWMsbUJBQU8sQ0FBQyxrREFBTztBQUM3QixtQkFBTyxDQUFDLHVEQUFvQjtBQUM1QiIsImZpbGUiOiJ0ZXN0cy5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vdGVzdHMvaW5kZXgudHNcIik7XG4iLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwicXVuaXQuY3NzXCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImluZGV4Lmh0bWxcIjsiLCIvLyBzaGltIGZvciB1c2luZyBwcm9jZXNzIGluIGJyb3dzZXJcbnZhciBwcm9jZXNzID0gbW9kdWxlLmV4cG9ydHMgPSB7fTtcblxuLy8gY2FjaGVkIGZyb20gd2hhdGV2ZXIgZ2xvYmFsIGlzIHByZXNlbnQgc28gdGhhdCB0ZXN0IHJ1bm5lcnMgdGhhdCBzdHViIGl0XG4vLyBkb24ndCBicmVhayB0aGluZ3MuICBCdXQgd2UgbmVlZCB0byB3cmFwIGl0IGluIGEgdHJ5IGNhdGNoIGluIGNhc2UgaXQgaXNcbi8vIHdyYXBwZWQgaW4gc3RyaWN0IG1vZGUgY29kZSB3aGljaCBkb2Vzbid0IGRlZmluZSBhbnkgZ2xvYmFscy4gIEl0J3MgaW5zaWRlIGFcbi8vIGZ1bmN0aW9uIGJlY2F1c2UgdHJ5L2NhdGNoZXMgZGVvcHRpbWl6ZSBpbiBjZXJ0YWluIGVuZ2luZXMuXG5cbnZhciBjYWNoZWRTZXRUaW1lb3V0O1xudmFyIGNhY2hlZENsZWFyVGltZW91dDtcblxuZnVuY3Rpb24gZGVmYXVsdFNldFRpbW91dCgpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ3NldFRpbWVvdXQgaGFzIG5vdCBiZWVuIGRlZmluZWQnKTtcbn1cbmZ1bmN0aW9uIGRlZmF1bHRDbGVhclRpbWVvdXQgKCkge1xuICAgIHRocm93IG5ldyBFcnJvcignY2xlYXJUaW1lb3V0IGhhcyBub3QgYmVlbiBkZWZpbmVkJyk7XG59XG4oZnVuY3Rpb24gKCkge1xuICAgIHRyeSB7XG4gICAgICAgIGlmICh0eXBlb2Ygc2V0VGltZW91dCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgY2FjaGVkU2V0VGltZW91dCA9IHNldFRpbWVvdXQ7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjYWNoZWRTZXRUaW1lb3V0ID0gZGVmYXVsdFNldFRpbW91dDtcbiAgICAgICAgfVxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgY2FjaGVkU2V0VGltZW91dCA9IGRlZmF1bHRTZXRUaW1vdXQ7XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICAgIGlmICh0eXBlb2YgY2xlYXJUaW1lb3V0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICBjYWNoZWRDbGVhclRpbWVvdXQgPSBjbGVhclRpbWVvdXQ7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjYWNoZWRDbGVhclRpbWVvdXQgPSBkZWZhdWx0Q2xlYXJUaW1lb3V0O1xuICAgICAgICB9XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgICBjYWNoZWRDbGVhclRpbWVvdXQgPSBkZWZhdWx0Q2xlYXJUaW1lb3V0O1xuICAgIH1cbn0gKCkpXG5mdW5jdGlvbiBydW5UaW1lb3V0KGZ1bikge1xuICAgIGlmIChjYWNoZWRTZXRUaW1lb3V0ID09PSBzZXRUaW1lb3V0KSB7XG4gICAgICAgIC8vbm9ybWFsIGVudmlyb21lbnRzIGluIHNhbmUgc2l0dWF0aW9uc1xuICAgICAgICByZXR1cm4gc2V0VGltZW91dChmdW4sIDApO1xuICAgIH1cbiAgICAvLyBpZiBzZXRUaW1lb3V0IHdhc24ndCBhdmFpbGFibGUgYnV0IHdhcyBsYXR0ZXIgZGVmaW5lZFxuICAgIGlmICgoY2FjaGVkU2V0VGltZW91dCA9PT0gZGVmYXVsdFNldFRpbW91dCB8fCAhY2FjaGVkU2V0VGltZW91dCkgJiYgc2V0VGltZW91dCkge1xuICAgICAgICBjYWNoZWRTZXRUaW1lb3V0ID0gc2V0VGltZW91dDtcbiAgICAgICAgcmV0dXJuIHNldFRpbWVvdXQoZnVuLCAwKTtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgICAgLy8gd2hlbiB3aGVuIHNvbWVib2R5IGhhcyBzY3Jld2VkIHdpdGggc2V0VGltZW91dCBidXQgbm8gSS5FLiBtYWRkbmVzc1xuICAgICAgICByZXR1cm4gY2FjaGVkU2V0VGltZW91dChmdW4sIDApO1xuICAgIH0gY2F0Y2goZSl7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICAvLyBXaGVuIHdlIGFyZSBpbiBJLkUuIGJ1dCB0aGUgc2NyaXB0IGhhcyBiZWVuIGV2YWxlZCBzbyBJLkUuIGRvZXNuJ3QgdHJ1c3QgdGhlIGdsb2JhbCBvYmplY3Qgd2hlbiBjYWxsZWQgbm9ybWFsbHlcbiAgICAgICAgICAgIHJldHVybiBjYWNoZWRTZXRUaW1lb3V0LmNhbGwobnVsbCwgZnVuLCAwKTtcbiAgICAgICAgfSBjYXRjaChlKXtcbiAgICAgICAgICAgIC8vIHNhbWUgYXMgYWJvdmUgYnV0IHdoZW4gaXQncyBhIHZlcnNpb24gb2YgSS5FLiB0aGF0IG11c3QgaGF2ZSB0aGUgZ2xvYmFsIG9iamVjdCBmb3IgJ3RoaXMnLCBob3BmdWxseSBvdXIgY29udGV4dCBjb3JyZWN0IG90aGVyd2lzZSBpdCB3aWxsIHRocm93IGEgZ2xvYmFsIGVycm9yXG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkU2V0VGltZW91dC5jYWxsKHRoaXMsIGZ1biwgMCk7XG4gICAgICAgIH1cbiAgICB9XG5cblxufVxuZnVuY3Rpb24gcnVuQ2xlYXJUaW1lb3V0KG1hcmtlcikge1xuICAgIGlmIChjYWNoZWRDbGVhclRpbWVvdXQgPT09IGNsZWFyVGltZW91dCkge1xuICAgICAgICAvL25vcm1hbCBlbnZpcm9tZW50cyBpbiBzYW5lIHNpdHVhdGlvbnNcbiAgICAgICAgcmV0dXJuIGNsZWFyVGltZW91dChtYXJrZXIpO1xuICAgIH1cbiAgICAvLyBpZiBjbGVhclRpbWVvdXQgd2Fzbid0IGF2YWlsYWJsZSBidXQgd2FzIGxhdHRlciBkZWZpbmVkXG4gICAgaWYgKChjYWNoZWRDbGVhclRpbWVvdXQgPT09IGRlZmF1bHRDbGVhclRpbWVvdXQgfHwgIWNhY2hlZENsZWFyVGltZW91dCkgJiYgY2xlYXJUaW1lb3V0KSB7XG4gICAgICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGNsZWFyVGltZW91dDtcbiAgICAgICAgcmV0dXJuIGNsZWFyVGltZW91dChtYXJrZXIpO1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgICAvLyB3aGVuIHdoZW4gc29tZWJvZHkgaGFzIHNjcmV3ZWQgd2l0aCBzZXRUaW1lb3V0IGJ1dCBubyBJLkUuIG1hZGRuZXNzXG4gICAgICAgIHJldHVybiBjYWNoZWRDbGVhclRpbWVvdXQobWFya2VyKTtcbiAgICB9IGNhdGNoIChlKXtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIC8vIFdoZW4gd2UgYXJlIGluIEkuRS4gYnV0IHRoZSBzY3JpcHQgaGFzIGJlZW4gZXZhbGVkIHNvIEkuRS4gZG9lc24ndCAgdHJ1c3QgdGhlIGdsb2JhbCBvYmplY3Qgd2hlbiBjYWxsZWQgbm9ybWFsbHlcbiAgICAgICAgICAgIHJldHVybiBjYWNoZWRDbGVhclRpbWVvdXQuY2FsbChudWxsLCBtYXJrZXIpO1xuICAgICAgICB9IGNhdGNoIChlKXtcbiAgICAgICAgICAgIC8vIHNhbWUgYXMgYWJvdmUgYnV0IHdoZW4gaXQncyBhIHZlcnNpb24gb2YgSS5FLiB0aGF0IG11c3QgaGF2ZSB0aGUgZ2xvYmFsIG9iamVjdCBmb3IgJ3RoaXMnLCBob3BmdWxseSBvdXIgY29udGV4dCBjb3JyZWN0IG90aGVyd2lzZSBpdCB3aWxsIHRocm93IGEgZ2xvYmFsIGVycm9yLlxuICAgICAgICAgICAgLy8gU29tZSB2ZXJzaW9ucyBvZiBJLkUuIGhhdmUgZGlmZmVyZW50IHJ1bGVzIGZvciBjbGVhclRpbWVvdXQgdnMgc2V0VGltZW91dFxuICAgICAgICAgICAgcmV0dXJuIGNhY2hlZENsZWFyVGltZW91dC5jYWxsKHRoaXMsIG1hcmtlcik7XG4gICAgICAgIH1cbiAgICB9XG5cblxuXG59XG52YXIgcXVldWUgPSBbXTtcbnZhciBkcmFpbmluZyA9IGZhbHNlO1xudmFyIGN1cnJlbnRRdWV1ZTtcbnZhciBxdWV1ZUluZGV4ID0gLTE7XG5cbmZ1bmN0aW9uIGNsZWFuVXBOZXh0VGljaygpIHtcbiAgICBpZiAoIWRyYWluaW5nIHx8ICFjdXJyZW50UXVldWUpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBkcmFpbmluZyA9IGZhbHNlO1xuICAgIGlmIChjdXJyZW50UXVldWUubGVuZ3RoKSB7XG4gICAgICAgIHF1ZXVlID0gY3VycmVudFF1ZXVlLmNvbmNhdChxdWV1ZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgcXVldWVJbmRleCA9IC0xO1xuICAgIH1cbiAgICBpZiAocXVldWUubGVuZ3RoKSB7XG4gICAgICAgIGRyYWluUXVldWUoKTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIGRyYWluUXVldWUoKSB7XG4gICAgaWYgKGRyYWluaW5nKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdmFyIHRpbWVvdXQgPSBydW5UaW1lb3V0KGNsZWFuVXBOZXh0VGljayk7XG4gICAgZHJhaW5pbmcgPSB0cnVlO1xuXG4gICAgdmFyIGxlbiA9IHF1ZXVlLmxlbmd0aDtcbiAgICB3aGlsZShsZW4pIHtcbiAgICAgICAgY3VycmVudFF1ZXVlID0gcXVldWU7XG4gICAgICAgIHF1ZXVlID0gW107XG4gICAgICAgIHdoaWxlICgrK3F1ZXVlSW5kZXggPCBsZW4pIHtcbiAgICAgICAgICAgIGlmIChjdXJyZW50UXVldWUpIHtcbiAgICAgICAgICAgICAgICBjdXJyZW50UXVldWVbcXVldWVJbmRleF0ucnVuKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcXVldWVJbmRleCA9IC0xO1xuICAgICAgICBsZW4gPSBxdWV1ZS5sZW5ndGg7XG4gICAgfVxuICAgIGN1cnJlbnRRdWV1ZSA9IG51bGw7XG4gICAgZHJhaW5pbmcgPSBmYWxzZTtcbiAgICBydW5DbGVhclRpbWVvdXQodGltZW91dCk7XG59XG5cbnByb2Nlc3MubmV4dFRpY2sgPSBmdW5jdGlvbiAoZnVuKSB7XG4gICAgdmFyIGFyZ3MgPSBuZXcgQXJyYXkoYXJndW1lbnRzLmxlbmd0aCAtIDEpO1xuICAgIGlmIChhcmd1bWVudHMubGVuZ3RoID4gMSkge1xuICAgICAgICBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgYXJnc1tpIC0gMV0gPSBhcmd1bWVudHNbaV07XG4gICAgICAgIH1cbiAgICB9XG4gICAgcXVldWUucHVzaChuZXcgSXRlbShmdW4sIGFyZ3MpKTtcbiAgICBpZiAocXVldWUubGVuZ3RoID09PSAxICYmICFkcmFpbmluZykge1xuICAgICAgICBydW5UaW1lb3V0KGRyYWluUXVldWUpO1xuICAgIH1cbn07XG5cbi8vIHY4IGxpa2VzIHByZWRpY3RpYmxlIG9iamVjdHNcbmZ1bmN0aW9uIEl0ZW0oZnVuLCBhcnJheSkge1xuICAgIHRoaXMuZnVuID0gZnVuO1xuICAgIHRoaXMuYXJyYXkgPSBhcnJheTtcbn1cbkl0ZW0ucHJvdG90eXBlLnJ1biA9IGZ1bmN0aW9uICgpIHtcbiAgICB0aGlzLmZ1bi5hcHBseShudWxsLCB0aGlzLmFycmF5KTtcbn07XG5wcm9jZXNzLnRpdGxlID0gJ2Jyb3dzZXInO1xucHJvY2Vzcy5icm93c2VyID0gdHJ1ZTtcbnByb2Nlc3MuZW52ID0ge307XG5wcm9jZXNzLmFyZ3YgPSBbXTtcbnByb2Nlc3MudmVyc2lvbiA9ICcnOyAvLyBlbXB0eSBzdHJpbmcgdG8gYXZvaWQgcmVnZXhwIGlzc3Vlc1xucHJvY2Vzcy52ZXJzaW9ucyA9IHt9O1xuXG5mdW5jdGlvbiBub29wKCkge31cblxucHJvY2Vzcy5vbiA9IG5vb3A7XG5wcm9jZXNzLmFkZExpc3RlbmVyID0gbm9vcDtcbnByb2Nlc3Mub25jZSA9IG5vb3A7XG5wcm9jZXNzLm9mZiA9IG5vb3A7XG5wcm9jZXNzLnJlbW92ZUxpc3RlbmVyID0gbm9vcDtcbnByb2Nlc3MucmVtb3ZlQWxsTGlzdGVuZXJzID0gbm9vcDtcbnByb2Nlc3MuZW1pdCA9IG5vb3A7XG5wcm9jZXNzLnByZXBlbmRMaXN0ZW5lciA9IG5vb3A7XG5wcm9jZXNzLnByZXBlbmRPbmNlTGlzdGVuZXIgPSBub29wO1xuXG5wcm9jZXNzLmxpc3RlbmVycyA9IGZ1bmN0aW9uIChuYW1lKSB7IHJldHVybiBbXSB9XG5cbnByb2Nlc3MuYmluZGluZyA9IGZ1bmN0aW9uIChuYW1lKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdwcm9jZXNzLmJpbmRpbmcgaXMgbm90IHN1cHBvcnRlZCcpO1xufTtcblxucHJvY2Vzcy5jd2QgPSBmdW5jdGlvbiAoKSB7IHJldHVybiAnLycgfTtcbnByb2Nlc3MuY2hkaXIgPSBmdW5jdGlvbiAoZGlyKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdwcm9jZXNzLmNoZGlyIGlzIG5vdCBzdXBwb3J0ZWQnKTtcbn07XG5wcm9jZXNzLnVtYXNrID0gZnVuY3Rpb24oKSB7IHJldHVybiAwOyB9O1xuIiwiLyohXG4gKiBRVW5pdCAyLjkuM1xuICogaHR0cHM6Ly9xdW5pdGpzLmNvbS9cbiAqXG4gKiBDb3B5cmlnaHQgalF1ZXJ5IEZvdW5kYXRpb24gYW5kIG90aGVyIGNvbnRyaWJ1dG9yc1xuICogUmVsZWFzZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlXG4gKiBodHRwczovL2pxdWVyeS5vcmcvbGljZW5zZVxuICpcbiAqIERhdGU6IDIwMTktMTAtMDhUMTU6NDlaXG4gKi9cbihmdW5jdGlvbiAoZ2xvYmFsJDEpIHtcbiAgJ3VzZSBzdHJpY3QnO1xuXG4gIGdsb2JhbCQxID0gZ2xvYmFsJDEgJiYgZ2xvYmFsJDEuaGFzT3duUHJvcGVydHkoJ2RlZmF1bHQnKSA/IGdsb2JhbCQxWydkZWZhdWx0J10gOiBnbG9iYWwkMTtcblxuICB2YXIgd2luZG93JDEgPSBnbG9iYWwkMS53aW5kb3c7XG4gIHZhciBzZWxmJDEgPSBnbG9iYWwkMS5zZWxmO1xuICB2YXIgY29uc29sZSA9IGdsb2JhbCQxLmNvbnNvbGU7XG4gIHZhciBzZXRUaW1lb3V0JDEgPSBnbG9iYWwkMS5zZXRUaW1lb3V0O1xuICB2YXIgY2xlYXJUaW1lb3V0ID0gZ2xvYmFsJDEuY2xlYXJUaW1lb3V0O1xuXG4gIHZhciBkb2N1bWVudCQxID0gd2luZG93JDEgJiYgd2luZG93JDEuZG9jdW1lbnQ7XG4gIHZhciBuYXZpZ2F0b3IgPSB3aW5kb3ckMSAmJiB3aW5kb3ckMS5uYXZpZ2F0b3I7XG5cbiAgdmFyIGxvY2FsU2Vzc2lvblN0b3JhZ2UgPSBmdW5jdGlvbiAoKSB7XG4gIFx0dmFyIHggPSBcInF1bml0LXRlc3Qtc3RyaW5nXCI7XG4gIFx0dHJ5IHtcbiAgXHRcdGdsb2JhbCQxLnNlc3Npb25TdG9yYWdlLnNldEl0ZW0oeCwgeCk7XG4gIFx0XHRnbG9iYWwkMS5zZXNzaW9uU3RvcmFnZS5yZW1vdmVJdGVtKHgpO1xuICBcdFx0cmV0dXJuIGdsb2JhbCQxLnNlc3Npb25TdG9yYWdlO1xuICBcdH0gY2F0Y2ggKGUpIHtcbiAgXHRcdHJldHVybiB1bmRlZmluZWQ7XG4gIFx0fVxuICB9KCk7XG5cbiAgLyoqXG4gICAqIFJldHVybnMgYSBmdW5jdGlvbiB0aGF0IHByb3hpZXMgdG8gdGhlIGdpdmVuIG1ldGhvZCBuYW1lIG9uIHRoZSBnbG9iYWxzXG4gICAqIGNvbnNvbGUgb2JqZWN0LiBUaGUgcHJveHkgd2lsbCBhbHNvIGRldGVjdCBpZiB0aGUgY29uc29sZSBkb2Vzbid0IGV4aXN0IGFuZFxuICAgKiB3aWxsIGFwcHJvcHJpYXRlbHkgbm8tb3AuIFRoaXMgYWxsb3dzIHN1cHBvcnQgZm9yIElFOSwgd2hpY2ggZG9lc24ndCBoYXZlIGFcbiAgICogY29uc29sZSBpZiB0aGUgZGV2ZWxvcGVyIHRvb2xzIGFyZSBub3Qgb3Blbi5cbiAgICovXG4gIGZ1bmN0aW9uIGNvbnNvbGVQcm94eShtZXRob2QpIHtcbiAgXHRyZXR1cm4gZnVuY3Rpb24gKCkge1xuICBcdFx0aWYgKGNvbnNvbGUpIHtcbiAgXHRcdFx0Y29uc29sZVttZXRob2RdLmFwcGx5KGNvbnNvbGUsIGFyZ3VtZW50cyk7XG4gIFx0XHR9XG4gIFx0fTtcbiAgfVxuXG4gIHZhciBMb2dnZXIgPSB7XG4gIFx0d2FybjogY29uc29sZVByb3h5KFwid2FyblwiKVxuICB9O1xuXG4gIHZhciBfdHlwZW9mID0gdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPT09IFwic3ltYm9sXCIgPyBmdW5jdGlvbiAob2JqKSB7XG4gICAgcmV0dXJuIHR5cGVvZiBvYmo7XG4gIH0gOiBmdW5jdGlvbiAob2JqKSB7XG4gICAgcmV0dXJuIG9iaiAmJiB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgb2JqICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvYmo7XG4gIH07XG5cblxuXG5cblxuXG5cblxuXG5cblxuICB2YXIgY2xhc3NDYWxsQ2hlY2sgPSBmdW5jdGlvbiAoaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7XG4gICAgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHtcbiAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7XG4gICAgfVxuICB9O1xuXG4gIHZhciBjcmVhdGVDbGFzcyA9IGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHtcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTtcbiAgICAgICAgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlO1xuICAgICAgICBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7XG4gICAgICAgIGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7XG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gZnVuY3Rpb24gKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykge1xuICAgICAgaWYgKHByb3RvUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTtcbiAgICAgIGlmIChzdGF0aWNQcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpO1xuICAgICAgcmV0dXJuIENvbnN0cnVjdG9yO1xuICAgIH07XG4gIH0oKTtcblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG4gIHZhciB0b0NvbnN1bWFibGVBcnJheSA9IGZ1bmN0aW9uIChhcnIpIHtcbiAgICBpZiAoQXJyYXkuaXNBcnJheShhcnIpKSB7XG4gICAgICBmb3IgKHZhciBpID0gMCwgYXJyMiA9IEFycmF5KGFyci5sZW5ndGgpOyBpIDwgYXJyLmxlbmd0aDsgaSsrKSBhcnIyW2ldID0gYXJyW2ldO1xuXG4gICAgICByZXR1cm4gYXJyMjtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIEFycmF5LmZyb20oYXJyKTtcbiAgICB9XG4gIH07XG5cbiAgdmFyIHRvU3RyaW5nID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZztcbiAgdmFyIGhhc093biA9IE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHk7XG4gIHZhciBub3cgPSBEYXRlLm5vdyB8fCBmdW5jdGlvbiAoKSB7XG4gIFx0cmV0dXJuIG5ldyBEYXRlKCkuZ2V0VGltZSgpO1xuICB9O1xuXG4gIHZhciBoYXNQZXJmb3JtYW5jZUFwaSA9IGRldGVjdFBlcmZvcm1hbmNlQXBpKCk7XG4gIHZhciBwZXJmb3JtYW5jZSA9IGhhc1BlcmZvcm1hbmNlQXBpID8gd2luZG93JDEucGVyZm9ybWFuY2UgOiB1bmRlZmluZWQ7XG4gIHZhciBwZXJmb3JtYW5jZU5vdyA9IGhhc1BlcmZvcm1hbmNlQXBpID8gcGVyZm9ybWFuY2Uubm93LmJpbmQocGVyZm9ybWFuY2UpIDogbm93O1xuXG4gIGZ1bmN0aW9uIGRldGVjdFBlcmZvcm1hbmNlQXBpKCkge1xuICBcdHJldHVybiB3aW5kb3ckMSAmJiB0eXBlb2Ygd2luZG93JDEucGVyZm9ybWFuY2UgIT09IFwidW5kZWZpbmVkXCIgJiYgdHlwZW9mIHdpbmRvdyQxLnBlcmZvcm1hbmNlLm1hcmsgPT09IFwiZnVuY3Rpb25cIiAmJiB0eXBlb2Ygd2luZG93JDEucGVyZm9ybWFuY2UubWVhc3VyZSA9PT0gXCJmdW5jdGlvblwiO1xuICB9XG5cbiAgZnVuY3Rpb24gbWVhc3VyZShjb21tZW50LCBzdGFydE1hcmssIGVuZE1hcmspIHtcblxuICBcdC8vIGBwZXJmb3JtYW5jZS5tZWFzdXJlYCBtYXkgZmFpbCBpZiB0aGUgbWFyayBjb3VsZCBub3QgYmUgZm91bmQuXG4gIFx0Ly8gcmVhc29ucyBhIHNwZWNpZmljIG1hcmsgY291bGQgbm90IGJlIGZvdW5kIGluY2x1ZGU6IG91dHNpZGUgY29kZSBpbnZva2luZyBgcGVyZm9ybWFuY2UuY2xlYXJNYXJrcygpYFxuICBcdHRyeSB7XG4gIFx0XHRwZXJmb3JtYW5jZS5tZWFzdXJlKGNvbW1lbnQsIHN0YXJ0TWFyaywgZW5kTWFyayk7XG4gIFx0fSBjYXRjaCAoZXgpIHtcbiAgXHRcdExvZ2dlci53YXJuKFwicGVyZm9ybWFuY2UubWVhc3VyZSBjb3VsZCBub3QgYmUgZXhlY3V0ZWQgYmVjYXVzZSBvZiBcIiwgZXgubWVzc2FnZSk7XG4gIFx0fVxuICB9XG5cbiAgdmFyIGRlZmluZWQgPSB7XG4gIFx0ZG9jdW1lbnQ6IHdpbmRvdyQxICYmIHdpbmRvdyQxLmRvY3VtZW50ICE9PSB1bmRlZmluZWQsXG4gIFx0c2V0VGltZW91dDogc2V0VGltZW91dCQxICE9PSB1bmRlZmluZWRcbiAgfTtcblxuICAvLyBSZXR1cm5zIGEgbmV3IEFycmF5IHdpdGggdGhlIGVsZW1lbnRzIHRoYXQgYXJlIGluIGEgYnV0IG5vdCBpbiBiXG4gIGZ1bmN0aW9uIGRpZmYoYSwgYikge1xuICBcdHZhciBpLFxuICBcdCAgICBqLFxuICBcdCAgICByZXN1bHQgPSBhLnNsaWNlKCk7XG5cbiAgXHRmb3IgKGkgPSAwOyBpIDwgcmVzdWx0Lmxlbmd0aDsgaSsrKSB7XG4gIFx0XHRmb3IgKGogPSAwOyBqIDwgYi5sZW5ndGg7IGorKykge1xuICBcdFx0XHRpZiAocmVzdWx0W2ldID09PSBiW2pdKSB7XG4gIFx0XHRcdFx0cmVzdWx0LnNwbGljZShpLCAxKTtcbiAgXHRcdFx0XHRpLS07XG4gIFx0XHRcdFx0YnJlYWs7XG4gIFx0XHRcdH1cbiAgXHRcdH1cbiAgXHR9XG4gIFx0cmV0dXJuIHJlc3VsdDtcbiAgfVxuXG4gIC8qKlxuICAgKiBEZXRlcm1pbmVzIHdoZXRoZXIgYW4gZWxlbWVudCBleGlzdHMgaW4gYSBnaXZlbiBhcnJheSBvciBub3QuXG4gICAqXG4gICAqIEBtZXRob2QgaW5BcnJheVxuICAgKiBAcGFyYW0ge0FueX0gZWxlbVxuICAgKiBAcGFyYW0ge0FycmF5fSBhcnJheVxuICAgKiBAcmV0dXJuIHtCb29sZWFufVxuICAgKi9cbiAgZnVuY3Rpb24gaW5BcnJheShlbGVtLCBhcnJheSkge1xuICBcdHJldHVybiBhcnJheS5pbmRleE9mKGVsZW0pICE9PSAtMTtcbiAgfVxuXG4gIC8qKlxuICAgKiBNYWtlcyBhIGNsb25lIG9mIGFuIG9iamVjdCB1c2luZyBvbmx5IEFycmF5IG9yIE9iamVjdCBhcyBiYXNlLFxuICAgKiBhbmQgY29waWVzIG92ZXIgdGhlIG93biBlbnVtZXJhYmxlIHByb3BlcnRpZXMuXG4gICAqXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBvYmpcbiAgICogQHJldHVybiB7T2JqZWN0fSBOZXcgb2JqZWN0IHdpdGggb25seSB0aGUgb3duIHByb3BlcnRpZXMgKHJlY3Vyc2l2ZWx5KS5cbiAgICovXG4gIGZ1bmN0aW9uIG9iamVjdFZhbHVlcyhvYmopIHtcbiAgXHR2YXIga2V5LFxuICBcdCAgICB2YWwsXG4gIFx0ICAgIHZhbHMgPSBpcyhcImFycmF5XCIsIG9iaikgPyBbXSA6IHt9O1xuICBcdGZvciAoa2V5IGluIG9iaikge1xuICBcdFx0aWYgKGhhc093bi5jYWxsKG9iaiwga2V5KSkge1xuICBcdFx0XHR2YWwgPSBvYmpba2V5XTtcbiAgXHRcdFx0dmFsc1trZXldID0gdmFsID09PSBPYmplY3QodmFsKSA/IG9iamVjdFZhbHVlcyh2YWwpIDogdmFsO1xuICBcdFx0fVxuICBcdH1cbiAgXHRyZXR1cm4gdmFscztcbiAgfVxuXG4gIGZ1bmN0aW9uIGV4dGVuZChhLCBiLCB1bmRlZk9ubHkpIHtcbiAgXHRmb3IgKHZhciBwcm9wIGluIGIpIHtcbiAgXHRcdGlmIChoYXNPd24uY2FsbChiLCBwcm9wKSkge1xuICBcdFx0XHRpZiAoYltwcm9wXSA9PT0gdW5kZWZpbmVkKSB7XG4gIFx0XHRcdFx0ZGVsZXRlIGFbcHJvcF07XG4gIFx0XHRcdH0gZWxzZSBpZiAoISh1bmRlZk9ubHkgJiYgdHlwZW9mIGFbcHJvcF0gIT09IFwidW5kZWZpbmVkXCIpKSB7XG4gIFx0XHRcdFx0YVtwcm9wXSA9IGJbcHJvcF07XG4gIFx0XHRcdH1cbiAgXHRcdH1cbiAgXHR9XG5cbiAgXHRyZXR1cm4gYTtcbiAgfVxuXG4gIGZ1bmN0aW9uIG9iamVjdFR5cGUob2JqKSB7XG4gIFx0aWYgKHR5cGVvZiBvYmogPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgXHRcdHJldHVybiBcInVuZGVmaW5lZFwiO1xuICBcdH1cblxuICBcdC8vIENvbnNpZGVyOiB0eXBlb2YgbnVsbCA9PT0gb2JqZWN0XG4gIFx0aWYgKG9iaiA9PT0gbnVsbCkge1xuICBcdFx0cmV0dXJuIFwibnVsbFwiO1xuICBcdH1cblxuICBcdHZhciBtYXRjaCA9IHRvU3RyaW5nLmNhbGwob2JqKS5tYXRjaCgvXlxcW29iamVjdFxccyguKilcXF0kLyksXG4gIFx0ICAgIHR5cGUgPSBtYXRjaCAmJiBtYXRjaFsxXTtcblxuICBcdHN3aXRjaCAodHlwZSkge1xuICBcdFx0Y2FzZSBcIk51bWJlclwiOlxuICBcdFx0XHRpZiAoaXNOYU4ob2JqKSkge1xuICBcdFx0XHRcdHJldHVybiBcIm5hblwiO1xuICBcdFx0XHR9XG4gIFx0XHRcdHJldHVybiBcIm51bWJlclwiO1xuICBcdFx0Y2FzZSBcIlN0cmluZ1wiOlxuICBcdFx0Y2FzZSBcIkJvb2xlYW5cIjpcbiAgXHRcdGNhc2UgXCJBcnJheVwiOlxuICBcdFx0Y2FzZSBcIlNldFwiOlxuICBcdFx0Y2FzZSBcIk1hcFwiOlxuICBcdFx0Y2FzZSBcIkRhdGVcIjpcbiAgXHRcdGNhc2UgXCJSZWdFeHBcIjpcbiAgXHRcdGNhc2UgXCJGdW5jdGlvblwiOlxuICBcdFx0Y2FzZSBcIlN5bWJvbFwiOlxuICBcdFx0XHRyZXR1cm4gdHlwZS50b0xvd2VyQ2FzZSgpO1xuICBcdFx0ZGVmYXVsdDpcbiAgXHRcdFx0cmV0dXJuIHR5cGVvZiBvYmogPT09IFwidW5kZWZpbmVkXCIgPyBcInVuZGVmaW5lZFwiIDogX3R5cGVvZihvYmopO1xuICBcdH1cbiAgfVxuXG4gIC8vIFNhZmUgb2JqZWN0IHR5cGUgY2hlY2tpbmdcbiAgZnVuY3Rpb24gaXModHlwZSwgb2JqKSB7XG4gIFx0cmV0dXJuIG9iamVjdFR5cGUob2JqKSA9PT0gdHlwZTtcbiAgfVxuXG4gIC8vIEJhc2VkIG9uIEphdmEncyBTdHJpbmcuaGFzaENvZGUsIGEgc2ltcGxlIGJ1dCBub3RcbiAgLy8gcmlnb3JvdXNseSBjb2xsaXNpb24gcmVzaXN0YW50IGhhc2hpbmcgZnVuY3Rpb25cbiAgZnVuY3Rpb24gZ2VuZXJhdGVIYXNoKG1vZHVsZSwgdGVzdE5hbWUpIHtcbiAgXHR2YXIgc3RyID0gbW9kdWxlICsgXCJcXHgxQ1wiICsgdGVzdE5hbWU7XG4gIFx0dmFyIGhhc2ggPSAwO1xuXG4gIFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBzdHIubGVuZ3RoOyBpKyspIHtcbiAgXHRcdGhhc2ggPSAoaGFzaCA8PCA1KSAtIGhhc2ggKyBzdHIuY2hhckNvZGVBdChpKTtcbiAgXHRcdGhhc2ggfD0gMDtcbiAgXHR9XG5cbiAgXHQvLyBDb252ZXJ0IHRoZSBwb3NzaWJseSBuZWdhdGl2ZSBpbnRlZ2VyIGhhc2ggY29kZSBpbnRvIGFuIDggY2hhcmFjdGVyIGhleCBzdHJpbmcsIHdoaWNoIGlzbid0XG4gIFx0Ly8gc3RyaWN0bHkgbmVjZXNzYXJ5IGJ1dCBpbmNyZWFzZXMgdXNlciB1bmRlcnN0YW5kaW5nIHRoYXQgdGhlIGlkIGlzIGEgU0hBLWxpa2UgaGFzaFxuICBcdHZhciBoZXggPSAoMHgxMDAwMDAwMDAgKyBoYXNoKS50b1N0cmluZygxNik7XG4gIFx0aWYgKGhleC5sZW5ndGggPCA4KSB7XG4gIFx0XHRoZXggPSBcIjAwMDAwMDBcIiArIGhleDtcbiAgXHR9XG5cbiAgXHRyZXR1cm4gaGV4LnNsaWNlKC04KTtcbiAgfVxuXG4gIC8vIFRlc3QgZm9yIGVxdWFsaXR5IGFueSBKYXZhU2NyaXB0IHR5cGUuXG4gIC8vIEF1dGhvcnM6IFBoaWxpcHBlIFJhdGjDqSA8cHJhdGhlQGdtYWlsLmNvbT4sIERhdmlkIENoYW4gPGRhdmlkQHRyb2kub3JnPlxuICB2YXIgZXF1aXYgPSAoZnVuY3Rpb24gKCkge1xuXG4gIFx0Ly8gVmFsdWUgcGFpcnMgcXVldWVkIGZvciBjb21wYXJpc29uLiBVc2VkIGZvciBicmVhZHRoLWZpcnN0IHByb2Nlc3Npbmcgb3JkZXIsIHJlY3Vyc2lvblxuICBcdC8vIGRldGVjdGlvbiBhbmQgYXZvaWRpbmcgcmVwZWF0ZWQgY29tcGFyaXNvbiAoc2VlIGJlbG93IGZvciBkZXRhaWxzKS5cbiAgXHQvLyBFbGVtZW50cyBhcmUgeyBhOiB2YWwsIGI6IHZhbCB9LlxuICBcdHZhciBwYWlycyA9IFtdO1xuXG4gIFx0dmFyIGdldFByb3RvID0gT2JqZWN0LmdldFByb3RvdHlwZU9mIHx8IGZ1bmN0aW9uIChvYmopIHtcbiAgXHRcdHJldHVybiBvYmouX19wcm90b19fO1xuICBcdH07XG5cbiAgXHRmdW5jdGlvbiB1c2VTdHJpY3RFcXVhbGl0eShhLCBiKSB7XG5cbiAgXHRcdC8vIFRoaXMgb25seSBnZXRzIGNhbGxlZCBpZiBhIGFuZCBiIGFyZSBub3Qgc3RyaWN0IGVxdWFsLCBhbmQgaXMgdXNlZCB0byBjb21wYXJlIG9uXG4gIFx0XHQvLyB0aGUgcHJpbWl0aXZlIHZhbHVlcyBpbnNpZGUgb2JqZWN0IHdyYXBwZXJzLiBGb3IgZXhhbXBsZTpcbiAgXHRcdC8vIGB2YXIgaSA9IDE7YFxuICBcdFx0Ly8gYHZhciBqID0gbmV3IE51bWJlcigxKTtgXG4gIFx0XHQvLyBOZWl0aGVyIGEgbm9yIGIgY2FuIGJlIG51bGwsIGFzIGEgIT09IGIgYW5kIHRoZXkgaGF2ZSB0aGUgc2FtZSB0eXBlLlxuICBcdFx0aWYgKCh0eXBlb2YgYSA9PT0gXCJ1bmRlZmluZWRcIiA/IFwidW5kZWZpbmVkXCIgOiBfdHlwZW9mKGEpKSA9PT0gXCJvYmplY3RcIikge1xuICBcdFx0XHRhID0gYS52YWx1ZU9mKCk7XG4gIFx0XHR9XG4gIFx0XHRpZiAoKHR5cGVvZiBiID09PSBcInVuZGVmaW5lZFwiID8gXCJ1bmRlZmluZWRcIiA6IF90eXBlb2YoYikpID09PSBcIm9iamVjdFwiKSB7XG4gIFx0XHRcdGIgPSBiLnZhbHVlT2YoKTtcbiAgXHRcdH1cblxuICBcdFx0cmV0dXJuIGEgPT09IGI7XG4gIFx0fVxuXG4gIFx0ZnVuY3Rpb24gY29tcGFyZUNvbnN0cnVjdG9ycyhhLCBiKSB7XG4gIFx0XHR2YXIgcHJvdG9BID0gZ2V0UHJvdG8oYSk7XG4gIFx0XHR2YXIgcHJvdG9CID0gZ2V0UHJvdG8oYik7XG5cbiAgXHRcdC8vIENvbXBhcmluZyBjb25zdHJ1Y3RvcnMgaXMgbW9yZSBzdHJpY3QgdGhhbiB1c2luZyBgaW5zdGFuY2VvZmBcbiAgXHRcdGlmIChhLmNvbnN0cnVjdG9yID09PSBiLmNvbnN0cnVjdG9yKSB7XG4gIFx0XHRcdHJldHVybiB0cnVlO1xuICBcdFx0fVxuXG4gIFx0XHQvLyBSZWYgIzg1MVxuICBcdFx0Ly8gSWYgdGhlIG9iaiBwcm90b3R5cGUgZGVzY2VuZHMgZnJvbSBhIG51bGwgY29uc3RydWN0b3IsIHRyZWF0IGl0XG4gIFx0XHQvLyBhcyBhIG51bGwgcHJvdG90eXBlLlxuICBcdFx0aWYgKHByb3RvQSAmJiBwcm90b0EuY29uc3RydWN0b3IgPT09IG51bGwpIHtcbiAgXHRcdFx0cHJvdG9BID0gbnVsbDtcbiAgXHRcdH1cbiAgXHRcdGlmIChwcm90b0IgJiYgcHJvdG9CLmNvbnN0cnVjdG9yID09PSBudWxsKSB7XG4gIFx0XHRcdHByb3RvQiA9IG51bGw7XG4gIFx0XHR9XG5cbiAgXHRcdC8vIEFsbG93IG9iamVjdHMgd2l0aCBubyBwcm90b3R5cGUgdG8gYmUgZXF1aXZhbGVudCB0b1xuICBcdFx0Ly8gb2JqZWN0cyB3aXRoIE9iamVjdCBhcyB0aGVpciBjb25zdHJ1Y3Rvci5cbiAgXHRcdGlmIChwcm90b0EgPT09IG51bGwgJiYgcHJvdG9CID09PSBPYmplY3QucHJvdG90eXBlIHx8IHByb3RvQiA9PT0gbnVsbCAmJiBwcm90b0EgPT09IE9iamVjdC5wcm90b3R5cGUpIHtcbiAgXHRcdFx0cmV0dXJuIHRydWU7XG4gIFx0XHR9XG5cbiAgXHRcdHJldHVybiBmYWxzZTtcbiAgXHR9XG5cbiAgXHRmdW5jdGlvbiBnZXRSZWdFeHBGbGFncyhyZWdleHApIHtcbiAgXHRcdHJldHVybiBcImZsYWdzXCIgaW4gcmVnZXhwID8gcmVnZXhwLmZsYWdzIDogcmVnZXhwLnRvU3RyaW5nKCkubWF0Y2goL1tnaW11eV0qJC8pWzBdO1xuICBcdH1cblxuICBcdGZ1bmN0aW9uIGlzQ29udGFpbmVyKHZhbCkge1xuICBcdFx0cmV0dXJuIFtcIm9iamVjdFwiLCBcImFycmF5XCIsIFwibWFwXCIsIFwic2V0XCJdLmluZGV4T2Yob2JqZWN0VHlwZSh2YWwpKSAhPT0gLTE7XG4gIFx0fVxuXG4gIFx0ZnVuY3Rpb24gYnJlYWR0aEZpcnN0Q29tcGFyZUNoaWxkKGEsIGIpIHtcblxuICBcdFx0Ly8gSWYgYSBpcyBhIGNvbnRhaW5lciBub3QgcmVmZXJlbmNlLWVxdWFsIHRvIGIsIHBvc3Rwb25lIHRoZSBjb21wYXJpc29uIHRvIHRoZVxuICBcdFx0Ly8gZW5kIG9mIHRoZSBwYWlycyBxdWV1ZSAtLSB1bmxlc3MgKGEsIGIpIGhhcyBiZWVuIHNlZW4gYmVmb3JlLCBpbiB3aGljaCBjYXNlIHNraXBcbiAgXHRcdC8vIG92ZXIgdGhlIHBhaXIuXG4gIFx0XHRpZiAoYSA9PT0gYikge1xuICBcdFx0XHRyZXR1cm4gdHJ1ZTtcbiAgXHRcdH1cbiAgXHRcdGlmICghaXNDb250YWluZXIoYSkpIHtcbiAgXHRcdFx0cmV0dXJuIHR5cGVFcXVpdihhLCBiKTtcbiAgXHRcdH1cbiAgXHRcdGlmIChwYWlycy5ldmVyeShmdW5jdGlvbiAocGFpcikge1xuICBcdFx0XHRyZXR1cm4gcGFpci5hICE9PSBhIHx8IHBhaXIuYiAhPT0gYjtcbiAgXHRcdH0pKSB7XG5cbiAgXHRcdFx0Ly8gTm90IHlldCBzdGFydGVkIGNvbXBhcmluZyB0aGlzIHBhaXJcbiAgXHRcdFx0cGFpcnMucHVzaCh7IGE6IGEsIGI6IGIgfSk7XG4gIFx0XHR9XG4gIFx0XHRyZXR1cm4gdHJ1ZTtcbiAgXHR9XG5cbiAgXHR2YXIgY2FsbGJhY2tzID0ge1xuICBcdFx0XCJzdHJpbmdcIjogdXNlU3RyaWN0RXF1YWxpdHksXG4gIFx0XHRcImJvb2xlYW5cIjogdXNlU3RyaWN0RXF1YWxpdHksXG4gIFx0XHRcIm51bWJlclwiOiB1c2VTdHJpY3RFcXVhbGl0eSxcbiAgXHRcdFwibnVsbFwiOiB1c2VTdHJpY3RFcXVhbGl0eSxcbiAgXHRcdFwidW5kZWZpbmVkXCI6IHVzZVN0cmljdEVxdWFsaXR5LFxuICBcdFx0XCJzeW1ib2xcIjogdXNlU3RyaWN0RXF1YWxpdHksXG4gIFx0XHRcImRhdGVcIjogdXNlU3RyaWN0RXF1YWxpdHksXG5cbiAgXHRcdFwibmFuXCI6IGZ1bmN0aW9uIG5hbigpIHtcbiAgXHRcdFx0cmV0dXJuIHRydWU7XG4gIFx0XHR9LFxuXG4gIFx0XHRcInJlZ2V4cFwiOiBmdW5jdGlvbiByZWdleHAoYSwgYikge1xuICBcdFx0XHRyZXR1cm4gYS5zb3VyY2UgPT09IGIuc291cmNlICYmXG5cbiAgXHRcdFx0Ly8gSW5jbHVkZSBmbGFncyBpbiB0aGUgY29tcGFyaXNvblxuICBcdFx0XHRnZXRSZWdFeHBGbGFncyhhKSA9PT0gZ2V0UmVnRXhwRmxhZ3MoYik7XG4gIFx0XHR9LFxuXG4gIFx0XHQvLyBhYm9ydCAoaWRlbnRpY2FsIHJlZmVyZW5jZXMgLyBpbnN0YW5jZSBtZXRob2RzIHdlcmUgc2tpcHBlZCBlYXJsaWVyKVxuICBcdFx0XCJmdW5jdGlvblwiOiBmdW5jdGlvbiBfZnVuY3Rpb24oKSB7XG4gIFx0XHRcdHJldHVybiBmYWxzZTtcbiAgXHRcdH0sXG5cbiAgXHRcdFwiYXJyYXlcIjogZnVuY3Rpb24gYXJyYXkoYSwgYikge1xuICBcdFx0XHR2YXIgaSwgbGVuO1xuXG4gIFx0XHRcdGxlbiA9IGEubGVuZ3RoO1xuICBcdFx0XHRpZiAobGVuICE9PSBiLmxlbmd0aCkge1xuXG4gIFx0XHRcdFx0Ly8gU2FmZSBhbmQgZmFzdGVyXG4gIFx0XHRcdFx0cmV0dXJuIGZhbHNlO1xuICBcdFx0XHR9XG5cbiAgXHRcdFx0Zm9yIChpID0gMDsgaSA8IGxlbjsgaSsrKSB7XG5cbiAgXHRcdFx0XHQvLyBDb21wYXJlIG5vbi1jb250YWluZXJzOyBxdWV1ZSBub24tcmVmZXJlbmNlLWVxdWFsIGNvbnRhaW5lcnNcbiAgXHRcdFx0XHRpZiAoIWJyZWFkdGhGaXJzdENvbXBhcmVDaGlsZChhW2ldLCBiW2ldKSkge1xuICBcdFx0XHRcdFx0cmV0dXJuIGZhbHNlO1xuICBcdFx0XHRcdH1cbiAgXHRcdFx0fVxuICBcdFx0XHRyZXR1cm4gdHJ1ZTtcbiAgXHRcdH0sXG5cbiAgXHRcdC8vIERlZmluZSBzZXRzIGEgYW5kIGIgdG8gYmUgZXF1aXZhbGVudCBpZiBmb3IgZWFjaCBlbGVtZW50IGFWYWwgaW4gYSwgdGhlcmVcbiAgXHRcdC8vIGlzIHNvbWUgZWxlbWVudCBiVmFsIGluIGIgc3VjaCB0aGF0IGFWYWwgYW5kIGJWYWwgYXJlIGVxdWl2YWxlbnQuIEVsZW1lbnRcbiAgXHRcdC8vIHJlcGV0aXRpb25zIGFyZSBub3QgY291bnRlZCwgc28gdGhlc2UgYXJlIGVxdWl2YWxlbnQ6XG4gIFx0XHQvLyBhID0gbmV3IFNldCggWyB7fSwgW10sIFtdIF0gKTtcbiAgXHRcdC8vIGIgPSBuZXcgU2V0KCBbIHt9LCB7fSwgW10gXSApO1xuICBcdFx0XCJzZXRcIjogZnVuY3Rpb24gc2V0JCQxKGEsIGIpIHtcbiAgXHRcdFx0dmFyIGlubmVyRXEsXG4gIFx0XHRcdCAgICBvdXRlckVxID0gdHJ1ZTtcblxuICBcdFx0XHRpZiAoYS5zaXplICE9PSBiLnNpemUpIHtcblxuICBcdFx0XHRcdC8vIFRoaXMgb3B0aW1pemF0aW9uIGhhcyBjZXJ0YWluIHF1aXJrcyBiZWNhdXNlIG9mIHRoZSBsYWNrIG9mXG4gIFx0XHRcdFx0Ly8gcmVwZXRpdGlvbiBjb3VudGluZy4gRm9yIGluc3RhbmNlLCBhZGRpbmcgdGhlIHNhbWVcbiAgXHRcdFx0XHQvLyAocmVmZXJlbmNlLWlkZW50aWNhbCkgZWxlbWVudCB0byB0d28gZXF1aXZhbGVudCBzZXRzIGNhblxuICBcdFx0XHRcdC8vIG1ha2UgdGhlbSBub24tZXF1aXZhbGVudC5cbiAgXHRcdFx0XHRyZXR1cm4gZmFsc2U7XG4gIFx0XHRcdH1cblxuICBcdFx0XHRhLmZvckVhY2goZnVuY3Rpb24gKGFWYWwpIHtcblxuICBcdFx0XHRcdC8vIFNob3J0LWNpcmN1aXQgaWYgdGhlIHJlc3VsdCBpcyBhbHJlYWR5IGtub3duLiAoVXNpbmcgZm9yLi4ub2ZcbiAgXHRcdFx0XHQvLyB3aXRoIGEgYnJlYWsgY2xhdXNlIHdvdWxkIGJlIGNsZWFuZXIgaGVyZSwgYnV0IGl0IHdvdWxkIGNhdXNlXG4gIFx0XHRcdFx0Ly8gYSBzeW50YXggZXJyb3Igb24gb2xkZXIgSmF2YXNjcmlwdCBpbXBsZW1lbnRhdGlvbnMgZXZlbiBpZlxuICBcdFx0XHRcdC8vIFNldCBpcyB1bnVzZWQpXG4gIFx0XHRcdFx0aWYgKCFvdXRlckVxKSB7XG4gIFx0XHRcdFx0XHRyZXR1cm47XG4gIFx0XHRcdFx0fVxuXG4gIFx0XHRcdFx0aW5uZXJFcSA9IGZhbHNlO1xuXG4gIFx0XHRcdFx0Yi5mb3JFYWNoKGZ1bmN0aW9uIChiVmFsKSB7XG4gIFx0XHRcdFx0XHR2YXIgcGFyZW50UGFpcnM7XG5cbiAgXHRcdFx0XHRcdC8vIExpa2V3aXNlLCBzaG9ydC1jaXJjdWl0IGlmIHRoZSByZXN1bHQgaXMgYWxyZWFkeSBrbm93blxuICBcdFx0XHRcdFx0aWYgKGlubmVyRXEpIHtcbiAgXHRcdFx0XHRcdFx0cmV0dXJuO1xuICBcdFx0XHRcdFx0fVxuXG4gIFx0XHRcdFx0XHQvLyBTd2FwIG91dCB0aGUgZ2xvYmFsIHBhaXJzIGxpc3QsIGFzIHRoZSBuZXN0ZWQgY2FsbCB0b1xuICBcdFx0XHRcdFx0Ly8gaW5uZXJFcXVpdiB3aWxsIGNsb2JiZXIgaXRzIGNvbnRlbnRzXG4gIFx0XHRcdFx0XHRwYXJlbnRQYWlycyA9IHBhaXJzO1xuICBcdFx0XHRcdFx0aWYgKGlubmVyRXF1aXYoYlZhbCwgYVZhbCkpIHtcbiAgXHRcdFx0XHRcdFx0aW5uZXJFcSA9IHRydWU7XG4gIFx0XHRcdFx0XHR9XG5cbiAgXHRcdFx0XHRcdC8vIFJlcGxhY2UgdGhlIGdsb2JhbCBwYWlycyBsaXN0XG4gIFx0XHRcdFx0XHRwYWlycyA9IHBhcmVudFBhaXJzO1xuICBcdFx0XHRcdH0pO1xuXG4gIFx0XHRcdFx0aWYgKCFpbm5lckVxKSB7XG4gIFx0XHRcdFx0XHRvdXRlckVxID0gZmFsc2U7XG4gIFx0XHRcdFx0fVxuICBcdFx0XHR9KTtcblxuICBcdFx0XHRyZXR1cm4gb3V0ZXJFcTtcbiAgXHRcdH0sXG5cbiAgXHRcdC8vIERlZmluZSBtYXBzIGEgYW5kIGIgdG8gYmUgZXF1aXZhbGVudCBpZiBmb3IgZWFjaCBrZXktdmFsdWUgcGFpciAoYUtleSwgYVZhbClcbiAgXHRcdC8vIGluIGEsIHRoZXJlIGlzIHNvbWUga2V5LXZhbHVlIHBhaXIgKGJLZXksIGJWYWwpIGluIGIgc3VjaCB0aGF0XG4gIFx0XHQvLyBbIGFLZXksIGFWYWwgXSBhbmQgWyBiS2V5LCBiVmFsIF0gYXJlIGVxdWl2YWxlbnQuIEtleSByZXBldGl0aW9ucyBhcmUgbm90XG4gIFx0XHQvLyBjb3VudGVkLCBzbyB0aGVzZSBhcmUgZXF1aXZhbGVudDpcbiAgXHRcdC8vIGEgPSBuZXcgTWFwKCBbIFsge30sIDEgXSwgWyB7fSwgMSBdLCBbIFtdLCAxIF0gXSApO1xuICBcdFx0Ly8gYiA9IG5ldyBNYXAoIFsgWyB7fSwgMSBdLCBbIFtdLCAxIF0sIFsgW10sIDEgXSBdICk7XG4gIFx0XHRcIm1hcFwiOiBmdW5jdGlvbiBtYXAoYSwgYikge1xuICBcdFx0XHR2YXIgaW5uZXJFcSxcbiAgXHRcdFx0ICAgIG91dGVyRXEgPSB0cnVlO1xuXG4gIFx0XHRcdGlmIChhLnNpemUgIT09IGIuc2l6ZSkge1xuXG4gIFx0XHRcdFx0Ly8gVGhpcyBvcHRpbWl6YXRpb24gaGFzIGNlcnRhaW4gcXVpcmtzIGJlY2F1c2Ugb2YgdGhlIGxhY2sgb2ZcbiAgXHRcdFx0XHQvLyByZXBldGl0aW9uIGNvdW50aW5nLiBGb3IgaW5zdGFuY2UsIGFkZGluZyB0aGUgc2FtZVxuICBcdFx0XHRcdC8vIChyZWZlcmVuY2UtaWRlbnRpY2FsKSBrZXktdmFsdWUgcGFpciB0byB0d28gZXF1aXZhbGVudCBtYXBzXG4gIFx0XHRcdFx0Ly8gY2FuIG1ha2UgdGhlbSBub24tZXF1aXZhbGVudC5cbiAgXHRcdFx0XHRyZXR1cm4gZmFsc2U7XG4gIFx0XHRcdH1cblxuICBcdFx0XHRhLmZvckVhY2goZnVuY3Rpb24gKGFWYWwsIGFLZXkpIHtcblxuICBcdFx0XHRcdC8vIFNob3J0LWNpcmN1aXQgaWYgdGhlIHJlc3VsdCBpcyBhbHJlYWR5IGtub3duLiAoVXNpbmcgZm9yLi4ub2ZcbiAgXHRcdFx0XHQvLyB3aXRoIGEgYnJlYWsgY2xhdXNlIHdvdWxkIGJlIGNsZWFuZXIgaGVyZSwgYnV0IGl0IHdvdWxkIGNhdXNlXG4gIFx0XHRcdFx0Ly8gYSBzeW50YXggZXJyb3Igb24gb2xkZXIgSmF2YXNjcmlwdCBpbXBsZW1lbnRhdGlvbnMgZXZlbiBpZlxuICBcdFx0XHRcdC8vIE1hcCBpcyB1bnVzZWQpXG4gIFx0XHRcdFx0aWYgKCFvdXRlckVxKSB7XG4gIFx0XHRcdFx0XHRyZXR1cm47XG4gIFx0XHRcdFx0fVxuXG4gIFx0XHRcdFx0aW5uZXJFcSA9IGZhbHNlO1xuXG4gIFx0XHRcdFx0Yi5mb3JFYWNoKGZ1bmN0aW9uIChiVmFsLCBiS2V5KSB7XG4gIFx0XHRcdFx0XHR2YXIgcGFyZW50UGFpcnM7XG5cbiAgXHRcdFx0XHRcdC8vIExpa2V3aXNlLCBzaG9ydC1jaXJjdWl0IGlmIHRoZSByZXN1bHQgaXMgYWxyZWFkeSBrbm93blxuICBcdFx0XHRcdFx0aWYgKGlubmVyRXEpIHtcbiAgXHRcdFx0XHRcdFx0cmV0dXJuO1xuICBcdFx0XHRcdFx0fVxuXG4gIFx0XHRcdFx0XHQvLyBTd2FwIG91dCB0aGUgZ2xvYmFsIHBhaXJzIGxpc3QsIGFzIHRoZSBuZXN0ZWQgY2FsbCB0b1xuICBcdFx0XHRcdFx0Ly8gaW5uZXJFcXVpdiB3aWxsIGNsb2JiZXIgaXRzIGNvbnRlbnRzXG4gIFx0XHRcdFx0XHRwYXJlbnRQYWlycyA9IHBhaXJzO1xuICBcdFx0XHRcdFx0aWYgKGlubmVyRXF1aXYoW2JWYWwsIGJLZXldLCBbYVZhbCwgYUtleV0pKSB7XG4gIFx0XHRcdFx0XHRcdGlubmVyRXEgPSB0cnVlO1xuICBcdFx0XHRcdFx0fVxuXG4gIFx0XHRcdFx0XHQvLyBSZXBsYWNlIHRoZSBnbG9iYWwgcGFpcnMgbGlzdFxuICBcdFx0XHRcdFx0cGFpcnMgPSBwYXJlbnRQYWlycztcbiAgXHRcdFx0XHR9KTtcblxuICBcdFx0XHRcdGlmICghaW5uZXJFcSkge1xuICBcdFx0XHRcdFx0b3V0ZXJFcSA9IGZhbHNlO1xuICBcdFx0XHRcdH1cbiAgXHRcdFx0fSk7XG5cbiAgXHRcdFx0cmV0dXJuIG91dGVyRXE7XG4gIFx0XHR9LFxuXG4gIFx0XHRcIm9iamVjdFwiOiBmdW5jdGlvbiBvYmplY3QoYSwgYikge1xuICBcdFx0XHR2YXIgaSxcbiAgXHRcdFx0ICAgIGFQcm9wZXJ0aWVzID0gW10sXG4gIFx0XHRcdCAgICBiUHJvcGVydGllcyA9IFtdO1xuXG4gIFx0XHRcdGlmIChjb21wYXJlQ29uc3RydWN0b3JzKGEsIGIpID09PSBmYWxzZSkge1xuICBcdFx0XHRcdHJldHVybiBmYWxzZTtcbiAgXHRcdFx0fVxuXG4gIFx0XHRcdC8vIEJlIHN0cmljdDogZG9uJ3QgZW5zdXJlIGhhc093blByb3BlcnR5IGFuZCBnbyBkZWVwXG4gIFx0XHRcdGZvciAoaSBpbiBhKSB7XG5cbiAgXHRcdFx0XHQvLyBDb2xsZWN0IGEncyBwcm9wZXJ0aWVzXG4gIFx0XHRcdFx0YVByb3BlcnRpZXMucHVzaChpKTtcblxuICBcdFx0XHRcdC8vIFNraXAgT09QIG1ldGhvZHMgdGhhdCBsb29rIHRoZSBzYW1lXG4gIFx0XHRcdFx0aWYgKGEuY29uc3RydWN0b3IgIT09IE9iamVjdCAmJiB0eXBlb2YgYS5jb25zdHJ1Y3RvciAhPT0gXCJ1bmRlZmluZWRcIiAmJiB0eXBlb2YgYVtpXSA9PT0gXCJmdW5jdGlvblwiICYmIHR5cGVvZiBiW2ldID09PSBcImZ1bmN0aW9uXCIgJiYgYVtpXS50b1N0cmluZygpID09PSBiW2ldLnRvU3RyaW5nKCkpIHtcbiAgXHRcdFx0XHRcdGNvbnRpbnVlO1xuICBcdFx0XHRcdH1cblxuICBcdFx0XHRcdC8vIENvbXBhcmUgbm9uLWNvbnRhaW5lcnM7IHF1ZXVlIG5vbi1yZWZlcmVuY2UtZXF1YWwgY29udGFpbmVyc1xuICBcdFx0XHRcdGlmICghYnJlYWR0aEZpcnN0Q29tcGFyZUNoaWxkKGFbaV0sIGJbaV0pKSB7XG4gIFx0XHRcdFx0XHRyZXR1cm4gZmFsc2U7XG4gIFx0XHRcdFx0fVxuICBcdFx0XHR9XG5cbiAgXHRcdFx0Zm9yIChpIGluIGIpIHtcblxuICBcdFx0XHRcdC8vIENvbGxlY3QgYidzIHByb3BlcnRpZXNcbiAgXHRcdFx0XHRiUHJvcGVydGllcy5wdXNoKGkpO1xuICBcdFx0XHR9XG5cbiAgXHRcdFx0Ly8gRW5zdXJlcyBpZGVudGljYWwgcHJvcGVydGllcyBuYW1lXG4gIFx0XHRcdHJldHVybiB0eXBlRXF1aXYoYVByb3BlcnRpZXMuc29ydCgpLCBiUHJvcGVydGllcy5zb3J0KCkpO1xuICBcdFx0fVxuICBcdH07XG5cbiAgXHRmdW5jdGlvbiB0eXBlRXF1aXYoYSwgYikge1xuICBcdFx0dmFyIHR5cGUgPSBvYmplY3RUeXBlKGEpO1xuXG4gIFx0XHQvLyBDYWxsYmFja3MgZm9yIGNvbnRhaW5lcnMgd2lsbCBhcHBlbmQgdG8gdGhlIHBhaXJzIHF1ZXVlIHRvIGFjaGlldmUgYnJlYWR0aC1maXJzdFxuICBcdFx0Ly8gc2VhcmNoIG9yZGVyLiBUaGUgcGFpcnMgcXVldWUgaXMgYWxzbyB1c2VkIHRvIGF2b2lkIHJlcHJvY2Vzc2luZyBhbnkgcGFpciBvZlxuICBcdFx0Ly8gY29udGFpbmVycyB0aGF0IGFyZSByZWZlcmVuY2UtZXF1YWwgdG8gYSBwcmV2aW91c2x5IHZpc2l0ZWQgcGFpciAoYSBzcGVjaWFsIGNhc2VcbiAgXHRcdC8vIHRoaXMgYmVpbmcgcmVjdXJzaW9uIGRldGVjdGlvbikuXG4gIFx0XHQvL1xuICBcdFx0Ly8gQmVjYXVzZSBvZiB0aGlzIGFwcHJvYWNoLCBvbmNlIHR5cGVFcXVpdiByZXR1cm5zIGEgZmFsc2UgdmFsdWUsIGl0IHNob3VsZCBub3QgYmVcbiAgXHRcdC8vIGNhbGxlZCBhZ2FpbiB3aXRob3V0IGNsZWFyaW5nIHRoZSBwYWlyIHF1ZXVlIGVsc2UgaXQgbWF5IHdyb25nbHkgcmVwb3J0IGEgdmlzaXRlZFxuICBcdFx0Ly8gcGFpciBhcyBiZWluZyBlcXVpdmFsZW50LlxuICBcdFx0cmV0dXJuIG9iamVjdFR5cGUoYikgPT09IHR5cGUgJiYgY2FsbGJhY2tzW3R5cGVdKGEsIGIpO1xuICBcdH1cblxuICBcdGZ1bmN0aW9uIGlubmVyRXF1aXYoYSwgYikge1xuICBcdFx0dmFyIGksIHBhaXI7XG5cbiAgXHRcdC8vIFdlJ3JlIGRvbmUgd2hlbiB0aGVyZSdzIG5vdGhpbmcgbW9yZSB0byBjb21wYXJlXG4gIFx0XHRpZiAoYXJndW1lbnRzLmxlbmd0aCA8IDIpIHtcbiAgXHRcdFx0cmV0dXJuIHRydWU7XG4gIFx0XHR9XG5cbiAgXHRcdC8vIENsZWFyIHRoZSBnbG9iYWwgcGFpciBxdWV1ZSBhbmQgYWRkIHRoZSB0b3AtbGV2ZWwgdmFsdWVzIGJlaW5nIGNvbXBhcmVkXG4gIFx0XHRwYWlycyA9IFt7IGE6IGEsIGI6IGIgfV07XG5cbiAgXHRcdGZvciAoaSA9IDA7IGkgPCBwYWlycy5sZW5ndGg7IGkrKykge1xuICBcdFx0XHRwYWlyID0gcGFpcnNbaV07XG5cbiAgXHRcdFx0Ly8gUGVyZm9ybSB0eXBlLXNwZWNpZmljIGNvbXBhcmlzb24gb24gYW55IHBhaXJzIHRoYXQgYXJlIG5vdCBzdHJpY3RseVxuICBcdFx0XHQvLyBlcXVhbC4gRm9yIGNvbnRhaW5lciB0eXBlcywgdGhhdCBjb21wYXJpc29uIHdpbGwgcG9zdHBvbmUgY29tcGFyaXNvblxuICBcdFx0XHQvLyBvZiBhbnkgc3ViLWNvbnRhaW5lciBwYWlyIHRvIHRoZSBlbmQgb2YgdGhlIHBhaXIgcXVldWUuIFRoaXMgZ2l2ZXNcbiAgXHRcdFx0Ly8gYnJlYWR0aC1maXJzdCBzZWFyY2ggb3JkZXIuIEl0IGFsc28gYXZvaWRzIHRoZSByZXByb2Nlc3Npbmcgb2ZcbiAgXHRcdFx0Ly8gcmVmZXJlbmNlLWVxdWFsIHNpYmxpbmdzLCBjb3VzaW5zIGV0Yywgd2hpY2ggY2FuIGhhdmUgYSBzaWduaWZpY2FudCBzcGVlZFxuICBcdFx0XHQvLyBpbXBhY3Qgd2hlbiBjb21wYXJpbmcgYSBjb250YWluZXIgb2Ygc21hbGwgb2JqZWN0cyBlYWNoIG9mIHdoaWNoIGhhcyBhXG4gIFx0XHRcdC8vIHJlZmVyZW5jZSB0byB0aGUgc2FtZSAoc2luZ2xldG9uKSBsYXJnZSBvYmplY3QuXG4gIFx0XHRcdGlmIChwYWlyLmEgIT09IHBhaXIuYiAmJiAhdHlwZUVxdWl2KHBhaXIuYSwgcGFpci5iKSkge1xuICBcdFx0XHRcdHJldHVybiBmYWxzZTtcbiAgXHRcdFx0fVxuICBcdFx0fVxuXG4gIFx0XHQvLyAuLi5hY3Jvc3MgYWxsIGNvbnNlY3V0aXZlIGFyZ3VtZW50IHBhaXJzXG4gIFx0XHRyZXR1cm4gYXJndW1lbnRzLmxlbmd0aCA9PT0gMiB8fCBpbm5lckVxdWl2LmFwcGx5KHRoaXMsIFtdLnNsaWNlLmNhbGwoYXJndW1lbnRzLCAxKSk7XG4gIFx0fVxuXG4gIFx0cmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgXHRcdHZhciByZXN1bHQgPSBpbm5lckVxdWl2LmFwcGx5KHVuZGVmaW5lZCwgYXJndW1lbnRzKTtcblxuICBcdFx0Ly8gUmVsZWFzZSBhbnkgcmV0YWluZWQgb2JqZWN0c1xuICBcdFx0cGFpcnMubGVuZ3RoID0gMDtcbiAgXHRcdHJldHVybiByZXN1bHQ7XG4gIFx0fTtcbiAgfSkoKTtcblxuICAvKipcbiAgICogQ29uZmlnIG9iamVjdDogTWFpbnRhaW4gaW50ZXJuYWwgc3RhdGVcbiAgICogTGF0ZXIgZXhwb3NlZCBhcyBRVW5pdC5jb25maWdcbiAgICogYGNvbmZpZ2AgaW5pdGlhbGl6ZWQgYXQgdG9wIG9mIHNjb3BlXG4gICAqL1xuICB2YXIgY29uZmlnID0ge1xuXG4gIFx0Ly8gVGhlIHF1ZXVlIG9mIHRlc3RzIHRvIHJ1blxuICBcdHF1ZXVlOiBbXSxcblxuICBcdC8vIEJsb2NrIHVudGlsIGRvY3VtZW50IHJlYWR5XG4gIFx0YmxvY2tpbmc6IHRydWUsXG5cbiAgXHQvLyBCeSBkZWZhdWx0LCBydW4gcHJldmlvdXNseSBmYWlsZWQgdGVzdHMgZmlyc3RcbiAgXHQvLyB2ZXJ5IHVzZWZ1bCBpbiBjb21iaW5hdGlvbiB3aXRoIFwiSGlkZSBwYXNzZWQgdGVzdHNcIiBjaGVja2VkXG4gIFx0cmVvcmRlcjogdHJ1ZSxcblxuICBcdC8vIEJ5IGRlZmF1bHQsIG1vZGlmeSBkb2N1bWVudC50aXRsZSB3aGVuIHN1aXRlIGlzIGRvbmVcbiAgXHRhbHRlcnRpdGxlOiB0cnVlLFxuXG4gIFx0Ly8gSFRNTCBSZXBvcnRlcjogY29sbGFwc2UgZXZlcnkgdGVzdCBleGNlcHQgdGhlIGZpcnN0IGZhaWxpbmcgdGVzdFxuICBcdC8vIElmIGZhbHNlLCBhbGwgZmFpbGluZyB0ZXN0cyB3aWxsIGJlIGV4cGFuZGVkXG4gIFx0Y29sbGFwc2U6IHRydWUsXG5cbiAgXHQvLyBCeSBkZWZhdWx0LCBzY3JvbGwgdG8gdG9wIG9mIHRoZSBwYWdlIHdoZW4gc3VpdGUgaXMgZG9uZVxuICBcdHNjcm9sbHRvcDogdHJ1ZSxcblxuICBcdC8vIERlcHRoIHVwLXRvIHdoaWNoIG9iamVjdCB3aWxsIGJlIGR1bXBlZFxuICBcdG1heERlcHRoOiA1LFxuXG4gIFx0Ly8gV2hlbiBlbmFibGVkLCBhbGwgdGVzdHMgbXVzdCBjYWxsIGV4cGVjdCgpXG4gIFx0cmVxdWlyZUV4cGVjdHM6IGZhbHNlLFxuXG4gIFx0Ly8gUGxhY2Vob2xkZXIgZm9yIHVzZXItY29uZmlndXJhYmxlIGZvcm0tZXhwb3NlZCBVUkwgcGFyYW1ldGVyc1xuICBcdHVybENvbmZpZzogW10sXG5cbiAgXHQvLyBTZXQgb2YgYWxsIG1vZHVsZXMuXG4gIFx0bW9kdWxlczogW10sXG5cbiAgXHQvLyBUaGUgZmlyc3QgdW5uYW1lZCBtb2R1bGVcbiAgXHRjdXJyZW50TW9kdWxlOiB7XG4gIFx0XHRuYW1lOiBcIlwiLFxuICBcdFx0dGVzdHM6IFtdLFxuICBcdFx0Y2hpbGRNb2R1bGVzOiBbXSxcbiAgXHRcdHRlc3RzUnVuOiAwLFxuICBcdFx0dW5za2lwcGVkVGVzdHNSdW46IDAsXG4gIFx0XHRob29rczoge1xuICBcdFx0XHRiZWZvcmU6IFtdLFxuICBcdFx0XHRiZWZvcmVFYWNoOiBbXSxcbiAgXHRcdFx0YWZ0ZXJFYWNoOiBbXSxcbiAgXHRcdFx0YWZ0ZXI6IFtdXG4gIFx0XHR9XG4gIFx0fSxcblxuICBcdGNhbGxiYWNrczoge30sXG5cbiAgXHQvLyBUaGUgc3RvcmFnZSBtb2R1bGUgdG8gdXNlIGZvciByZW9yZGVyaW5nIHRlc3RzXG4gIFx0c3RvcmFnZTogbG9jYWxTZXNzaW9uU3RvcmFnZVxuICB9O1xuXG4gIC8vIHRha2UgYSBwcmVkZWZpbmVkIFFVbml0LmNvbmZpZyBhbmQgZXh0ZW5kIHRoZSBkZWZhdWx0c1xuICB2YXIgZ2xvYmFsQ29uZmlnID0gd2luZG93JDEgJiYgd2luZG93JDEuUVVuaXQgJiYgd2luZG93JDEuUVVuaXQuY29uZmlnO1xuXG4gIC8vIG9ubHkgZXh0ZW5kIHRoZSBnbG9iYWwgY29uZmlnIGlmIHRoZXJlIGlzIG5vIFFVbml0IG92ZXJsb2FkXG4gIGlmICh3aW5kb3ckMSAmJiB3aW5kb3ckMS5RVW5pdCAmJiAhd2luZG93JDEuUVVuaXQudmVyc2lvbikge1xuICBcdGV4dGVuZChjb25maWcsIGdsb2JhbENvbmZpZyk7XG4gIH1cblxuICAvLyBQdXNoIGEgbG9vc2UgdW5uYW1lZCBtb2R1bGUgdG8gdGhlIG1vZHVsZXMgY29sbGVjdGlvblxuICBjb25maWcubW9kdWxlcy5wdXNoKGNvbmZpZy5jdXJyZW50TW9kdWxlKTtcblxuICAvLyBCYXNlZCBvbiBqc0R1bXAgYnkgQXJpZWwgRmxlc2xlclxuICAvLyBodHRwOi8vZmxlc2xlci5ibG9nc3BvdC5jb20vMjAwOC8wNS9qc2R1bXAtcHJldHR5LWR1bXAtb2YtYW55LWphdmFzY3JpcHQuaHRtbFxuICB2YXIgZHVtcCA9IChmdW5jdGlvbiAoKSB7XG4gIFx0ZnVuY3Rpb24gcXVvdGUoc3RyKSB7XG4gIFx0XHRyZXR1cm4gXCJcXFwiXCIgKyBzdHIudG9TdHJpbmcoKS5yZXBsYWNlKC9cXFxcL2csIFwiXFxcXFxcXFxcIikucmVwbGFjZSgvXCIvZywgXCJcXFxcXFxcIlwiKSArIFwiXFxcIlwiO1xuICBcdH1cbiAgXHRmdW5jdGlvbiBsaXRlcmFsKG8pIHtcbiAgXHRcdHJldHVybiBvICsgXCJcIjtcbiAgXHR9XG4gIFx0ZnVuY3Rpb24gam9pbihwcmUsIGFyciwgcG9zdCkge1xuICBcdFx0dmFyIHMgPSBkdW1wLnNlcGFyYXRvcigpLFxuICBcdFx0ICAgIGJhc2UgPSBkdW1wLmluZGVudCgpLFxuICBcdFx0ICAgIGlubmVyID0gZHVtcC5pbmRlbnQoMSk7XG4gIFx0XHRpZiAoYXJyLmpvaW4pIHtcbiAgXHRcdFx0YXJyID0gYXJyLmpvaW4oXCIsXCIgKyBzICsgaW5uZXIpO1xuICBcdFx0fVxuICBcdFx0aWYgKCFhcnIpIHtcbiAgXHRcdFx0cmV0dXJuIHByZSArIHBvc3Q7XG4gIFx0XHR9XG4gIFx0XHRyZXR1cm4gW3ByZSwgaW5uZXIgKyBhcnIsIGJhc2UgKyBwb3N0XS5qb2luKHMpO1xuICBcdH1cbiAgXHRmdW5jdGlvbiBhcnJheShhcnIsIHN0YWNrKSB7XG4gIFx0XHR2YXIgaSA9IGFyci5sZW5ndGgsXG4gIFx0XHQgICAgcmV0ID0gbmV3IEFycmF5KGkpO1xuXG4gIFx0XHRpZiAoZHVtcC5tYXhEZXB0aCAmJiBkdW1wLmRlcHRoID4gZHVtcC5tYXhEZXB0aCkge1xuICBcdFx0XHRyZXR1cm4gXCJbb2JqZWN0IEFycmF5XVwiO1xuICBcdFx0fVxuXG4gIFx0XHR0aGlzLnVwKCk7XG4gIFx0XHR3aGlsZSAoaS0tKSB7XG4gIFx0XHRcdHJldFtpXSA9IHRoaXMucGFyc2UoYXJyW2ldLCB1bmRlZmluZWQsIHN0YWNrKTtcbiAgXHRcdH1cbiAgXHRcdHRoaXMuZG93bigpO1xuICBcdFx0cmV0dXJuIGpvaW4oXCJbXCIsIHJldCwgXCJdXCIpO1xuICBcdH1cblxuICBcdGZ1bmN0aW9uIGlzQXJyYXkob2JqKSB7XG4gIFx0XHRyZXR1cm4gKFxuXG4gIFx0XHRcdC8vTmF0aXZlIEFycmF5c1xuICBcdFx0XHR0b1N0cmluZy5jYWxsKG9iaikgPT09IFwiW29iamVjdCBBcnJheV1cIiB8fFxuXG4gIFx0XHRcdC8vIE5vZGVMaXN0IG9iamVjdHNcbiAgXHRcdFx0dHlwZW9mIG9iai5sZW5ndGggPT09IFwibnVtYmVyXCIgJiYgb2JqLml0ZW0gIT09IHVuZGVmaW5lZCAmJiAob2JqLmxlbmd0aCA/IG9iai5pdGVtKDApID09PSBvYmpbMF0gOiBvYmouaXRlbSgwKSA9PT0gbnVsbCAmJiBvYmpbMF0gPT09IHVuZGVmaW5lZClcbiAgXHRcdCk7XG4gIFx0fVxuXG4gIFx0dmFyIHJlTmFtZSA9IC9eZnVuY3Rpb24gKFxcdyspLyxcbiAgXHQgICAgZHVtcCA9IHtcblxuICBcdFx0Ly8gVGhlIG9ialR5cGUgaXMgdXNlZCBtb3N0bHkgaW50ZXJuYWxseSwgeW91IGNhbiBmaXggYSAoY3VzdG9tKSB0eXBlIGluIGFkdmFuY2VcbiAgXHRcdHBhcnNlOiBmdW5jdGlvbiBwYXJzZShvYmosIG9ialR5cGUsIHN0YWNrKSB7XG4gIFx0XHRcdHN0YWNrID0gc3RhY2sgfHwgW107XG4gIFx0XHRcdHZhciByZXMsXG4gIFx0XHRcdCAgICBwYXJzZXIsXG4gIFx0XHRcdCAgICBwYXJzZXJUeXBlLFxuICBcdFx0XHQgICAgb2JqSW5kZXggPSBzdGFjay5pbmRleE9mKG9iaik7XG5cbiAgXHRcdFx0aWYgKG9iakluZGV4ICE9PSAtMSkge1xuICBcdFx0XHRcdHJldHVybiBcInJlY3Vyc2lvbihcIiArIChvYmpJbmRleCAtIHN0YWNrLmxlbmd0aCkgKyBcIilcIjtcbiAgXHRcdFx0fVxuXG4gIFx0XHRcdG9ialR5cGUgPSBvYmpUeXBlIHx8IHRoaXMudHlwZU9mKG9iaik7XG4gIFx0XHRcdHBhcnNlciA9IHRoaXMucGFyc2Vyc1tvYmpUeXBlXTtcbiAgXHRcdFx0cGFyc2VyVHlwZSA9IHR5cGVvZiBwYXJzZXIgPT09IFwidW5kZWZpbmVkXCIgPyBcInVuZGVmaW5lZFwiIDogX3R5cGVvZihwYXJzZXIpO1xuXG4gIFx0XHRcdGlmIChwYXJzZXJUeXBlID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgXHRcdFx0XHRzdGFjay5wdXNoKG9iaik7XG4gIFx0XHRcdFx0cmVzID0gcGFyc2VyLmNhbGwodGhpcywgb2JqLCBzdGFjayk7XG4gIFx0XHRcdFx0c3RhY2sucG9wKCk7XG4gIFx0XHRcdFx0cmV0dXJuIHJlcztcbiAgXHRcdFx0fVxuICBcdFx0XHRyZXR1cm4gcGFyc2VyVHlwZSA9PT0gXCJzdHJpbmdcIiA/IHBhcnNlciA6IHRoaXMucGFyc2Vycy5lcnJvcjtcbiAgXHRcdH0sXG4gIFx0XHR0eXBlT2Y6IGZ1bmN0aW9uIHR5cGVPZihvYmopIHtcbiAgXHRcdFx0dmFyIHR5cGU7XG5cbiAgXHRcdFx0aWYgKG9iaiA9PT0gbnVsbCkge1xuICBcdFx0XHRcdHR5cGUgPSBcIm51bGxcIjtcbiAgXHRcdFx0fSBlbHNlIGlmICh0eXBlb2Ygb2JqID09PSBcInVuZGVmaW5lZFwiKSB7XG4gIFx0XHRcdFx0dHlwZSA9IFwidW5kZWZpbmVkXCI7XG4gIFx0XHRcdH0gZWxzZSBpZiAoaXMoXCJyZWdleHBcIiwgb2JqKSkge1xuICBcdFx0XHRcdHR5cGUgPSBcInJlZ2V4cFwiO1xuICBcdFx0XHR9IGVsc2UgaWYgKGlzKFwiZGF0ZVwiLCBvYmopKSB7XG4gIFx0XHRcdFx0dHlwZSA9IFwiZGF0ZVwiO1xuICBcdFx0XHR9IGVsc2UgaWYgKGlzKFwiZnVuY3Rpb25cIiwgb2JqKSkge1xuICBcdFx0XHRcdHR5cGUgPSBcImZ1bmN0aW9uXCI7XG4gIFx0XHRcdH0gZWxzZSBpZiAob2JqLnNldEludGVydmFsICE9PSB1bmRlZmluZWQgJiYgb2JqLmRvY3VtZW50ICE9PSB1bmRlZmluZWQgJiYgb2JqLm5vZGVUeXBlID09PSB1bmRlZmluZWQpIHtcbiAgXHRcdFx0XHR0eXBlID0gXCJ3aW5kb3dcIjtcbiAgXHRcdFx0fSBlbHNlIGlmIChvYmoubm9kZVR5cGUgPT09IDkpIHtcbiAgXHRcdFx0XHR0eXBlID0gXCJkb2N1bWVudFwiO1xuICBcdFx0XHR9IGVsc2UgaWYgKG9iai5ub2RlVHlwZSkge1xuICBcdFx0XHRcdHR5cGUgPSBcIm5vZGVcIjtcbiAgXHRcdFx0fSBlbHNlIGlmIChpc0FycmF5KG9iaikpIHtcbiAgXHRcdFx0XHR0eXBlID0gXCJhcnJheVwiO1xuICBcdFx0XHR9IGVsc2UgaWYgKG9iai5jb25zdHJ1Y3RvciA9PT0gRXJyb3IucHJvdG90eXBlLmNvbnN0cnVjdG9yKSB7XG4gIFx0XHRcdFx0dHlwZSA9IFwiZXJyb3JcIjtcbiAgXHRcdFx0fSBlbHNlIHtcbiAgXHRcdFx0XHR0eXBlID0gdHlwZW9mIG9iaiA9PT0gXCJ1bmRlZmluZWRcIiA/IFwidW5kZWZpbmVkXCIgOiBfdHlwZW9mKG9iaik7XG4gIFx0XHRcdH1cbiAgXHRcdFx0cmV0dXJuIHR5cGU7XG4gIFx0XHR9LFxuXG4gIFx0XHRzZXBhcmF0b3I6IGZ1bmN0aW9uIHNlcGFyYXRvcigpIHtcbiAgXHRcdFx0aWYgKHRoaXMubXVsdGlsaW5lKSB7XG4gIFx0XHRcdFx0cmV0dXJuIHRoaXMuSFRNTCA/IFwiPGJyIC8+XCIgOiBcIlxcblwiO1xuICBcdFx0XHR9IGVsc2Uge1xuICBcdFx0XHRcdHJldHVybiB0aGlzLkhUTUwgPyBcIiYjMTYwO1wiIDogXCIgXCI7XG4gIFx0XHRcdH1cbiAgXHRcdH0sXG5cbiAgXHRcdC8vIEV4dHJhIGNhbiBiZSBhIG51bWJlciwgc2hvcnRjdXQgZm9yIGluY3JlYXNpbmctY2FsbGluZy1kZWNyZWFzaW5nXG4gIFx0XHRpbmRlbnQ6IGZ1bmN0aW9uIGluZGVudChleHRyYSkge1xuICBcdFx0XHRpZiAoIXRoaXMubXVsdGlsaW5lKSB7XG4gIFx0XHRcdFx0cmV0dXJuIFwiXCI7XG4gIFx0XHRcdH1cbiAgXHRcdFx0dmFyIGNociA9IHRoaXMuaW5kZW50Q2hhcjtcbiAgXHRcdFx0aWYgKHRoaXMuSFRNTCkge1xuICBcdFx0XHRcdGNociA9IGNoci5yZXBsYWNlKC9cXHQvZywgXCIgICBcIikucmVwbGFjZSgvIC9nLCBcIiYjMTYwO1wiKTtcbiAgXHRcdFx0fVxuICBcdFx0XHRyZXR1cm4gbmV3IEFycmF5KHRoaXMuZGVwdGggKyAoZXh0cmEgfHwgMCkpLmpvaW4oY2hyKTtcbiAgXHRcdH0sXG4gIFx0XHR1cDogZnVuY3Rpb24gdXAoYSkge1xuICBcdFx0XHR0aGlzLmRlcHRoICs9IGEgfHwgMTtcbiAgXHRcdH0sXG4gIFx0XHRkb3duOiBmdW5jdGlvbiBkb3duKGEpIHtcbiAgXHRcdFx0dGhpcy5kZXB0aCAtPSBhIHx8IDE7XG4gIFx0XHR9LFxuICBcdFx0c2V0UGFyc2VyOiBmdW5jdGlvbiBzZXRQYXJzZXIobmFtZSwgcGFyc2VyKSB7XG4gIFx0XHRcdHRoaXMucGFyc2Vyc1tuYW1lXSA9IHBhcnNlcjtcbiAgXHRcdH0sXG5cbiAgXHRcdC8vIFRoZSBuZXh0IDMgYXJlIGV4cG9zZWQgc28geW91IGNhbiB1c2UgdGhlbVxuICBcdFx0cXVvdGU6IHF1b3RlLFxuICBcdFx0bGl0ZXJhbDogbGl0ZXJhbCxcbiAgXHRcdGpvaW46IGpvaW4sXG4gIFx0XHRkZXB0aDogMSxcbiAgXHRcdG1heERlcHRoOiBjb25maWcubWF4RGVwdGgsXG5cbiAgXHRcdC8vIFRoaXMgaXMgdGhlIGxpc3Qgb2YgcGFyc2VycywgdG8gbW9kaWZ5IHRoZW0sIHVzZSBkdW1wLnNldFBhcnNlclxuICBcdFx0cGFyc2Vyczoge1xuICBcdFx0XHR3aW5kb3c6IFwiW1dpbmRvd11cIixcbiAgXHRcdFx0ZG9jdW1lbnQ6IFwiW0RvY3VtZW50XVwiLFxuICBcdFx0XHRlcnJvcjogZnVuY3Rpb24gZXJyb3IoX2Vycm9yKSB7XG4gIFx0XHRcdFx0cmV0dXJuIFwiRXJyb3IoXFxcIlwiICsgX2Vycm9yLm1lc3NhZ2UgKyBcIlxcXCIpXCI7XG4gIFx0XHRcdH0sXG4gIFx0XHRcdHVua25vd246IFwiW1Vua25vd25dXCIsXG4gIFx0XHRcdFwibnVsbFwiOiBcIm51bGxcIixcbiAgXHRcdFx0XCJ1bmRlZmluZWRcIjogXCJ1bmRlZmluZWRcIixcbiAgXHRcdFx0XCJmdW5jdGlvblwiOiBmdW5jdGlvbiBfZnVuY3Rpb24oZm4pIHtcbiAgXHRcdFx0XHR2YXIgcmV0ID0gXCJmdW5jdGlvblwiLFxuXG5cbiAgXHRcdFx0XHQvLyBGdW5jdGlvbnMgbmV2ZXIgaGF2ZSBuYW1lIGluIElFXG4gIFx0XHRcdFx0bmFtZSA9IFwibmFtZVwiIGluIGZuID8gZm4ubmFtZSA6IChyZU5hbWUuZXhlYyhmbikgfHwgW10pWzFdO1xuXG4gIFx0XHRcdFx0aWYgKG5hbWUpIHtcbiAgXHRcdFx0XHRcdHJldCArPSBcIiBcIiArIG5hbWU7XG4gIFx0XHRcdFx0fVxuICBcdFx0XHRcdHJldCArPSBcIihcIjtcblxuICBcdFx0XHRcdHJldCA9IFtyZXQsIGR1bXAucGFyc2UoZm4sIFwiZnVuY3Rpb25BcmdzXCIpLCBcIil7XCJdLmpvaW4oXCJcIik7XG4gIFx0XHRcdFx0cmV0dXJuIGpvaW4ocmV0LCBkdW1wLnBhcnNlKGZuLCBcImZ1bmN0aW9uQ29kZVwiKSwgXCJ9XCIpO1xuICBcdFx0XHR9LFxuICBcdFx0XHRhcnJheTogYXJyYXksXG4gIFx0XHRcdG5vZGVsaXN0OiBhcnJheSxcbiAgXHRcdFx0XCJhcmd1bWVudHNcIjogYXJyYXksXG4gIFx0XHRcdG9iamVjdDogZnVuY3Rpb24gb2JqZWN0KG1hcCwgc3RhY2spIHtcbiAgXHRcdFx0XHR2YXIga2V5cyxcbiAgXHRcdFx0XHQgICAga2V5LFxuICBcdFx0XHRcdCAgICB2YWwsXG4gIFx0XHRcdFx0ICAgIGksXG4gIFx0XHRcdFx0ICAgIG5vbkVudW1lcmFibGVQcm9wZXJ0aWVzLFxuICBcdFx0XHRcdCAgICByZXQgPSBbXTtcblxuICBcdFx0XHRcdGlmIChkdW1wLm1heERlcHRoICYmIGR1bXAuZGVwdGggPiBkdW1wLm1heERlcHRoKSB7XG4gIFx0XHRcdFx0XHRyZXR1cm4gXCJbb2JqZWN0IE9iamVjdF1cIjtcbiAgXHRcdFx0XHR9XG5cbiAgXHRcdFx0XHRkdW1wLnVwKCk7XG4gIFx0XHRcdFx0a2V5cyA9IFtdO1xuICBcdFx0XHRcdGZvciAoa2V5IGluIG1hcCkge1xuICBcdFx0XHRcdFx0a2V5cy5wdXNoKGtleSk7XG4gIFx0XHRcdFx0fVxuXG4gIFx0XHRcdFx0Ly8gU29tZSBwcm9wZXJ0aWVzIGFyZSBub3QgYWx3YXlzIGVudW1lcmFibGUgb24gRXJyb3Igb2JqZWN0cy5cbiAgXHRcdFx0XHRub25FbnVtZXJhYmxlUHJvcGVydGllcyA9IFtcIm1lc3NhZ2VcIiwgXCJuYW1lXCJdO1xuICBcdFx0XHRcdGZvciAoaSBpbiBub25FbnVtZXJhYmxlUHJvcGVydGllcykge1xuICBcdFx0XHRcdFx0a2V5ID0gbm9uRW51bWVyYWJsZVByb3BlcnRpZXNbaV07XG4gIFx0XHRcdFx0XHRpZiAoa2V5IGluIG1hcCAmJiAhaW5BcnJheShrZXksIGtleXMpKSB7XG4gIFx0XHRcdFx0XHRcdGtleXMucHVzaChrZXkpO1xuICBcdFx0XHRcdFx0fVxuICBcdFx0XHRcdH1cbiAgXHRcdFx0XHRrZXlzLnNvcnQoKTtcbiAgXHRcdFx0XHRmb3IgKGkgPSAwOyBpIDwga2V5cy5sZW5ndGg7IGkrKykge1xuICBcdFx0XHRcdFx0a2V5ID0ga2V5c1tpXTtcbiAgXHRcdFx0XHRcdHZhbCA9IG1hcFtrZXldO1xuICBcdFx0XHRcdFx0cmV0LnB1c2goZHVtcC5wYXJzZShrZXksIFwia2V5XCIpICsgXCI6IFwiICsgZHVtcC5wYXJzZSh2YWwsIHVuZGVmaW5lZCwgc3RhY2spKTtcbiAgXHRcdFx0XHR9XG4gIFx0XHRcdFx0ZHVtcC5kb3duKCk7XG4gIFx0XHRcdFx0cmV0dXJuIGpvaW4oXCJ7XCIsIHJldCwgXCJ9XCIpO1xuICBcdFx0XHR9LFxuICBcdFx0XHRub2RlOiBmdW5jdGlvbiBub2RlKF9ub2RlKSB7XG4gIFx0XHRcdFx0dmFyIGxlbixcbiAgXHRcdFx0XHQgICAgaSxcbiAgXHRcdFx0XHQgICAgdmFsLFxuICBcdFx0XHRcdCAgICBvcGVuID0gZHVtcC5IVE1MID8gXCImbHQ7XCIgOiBcIjxcIixcbiAgXHRcdFx0XHQgICAgY2xvc2UgPSBkdW1wLkhUTUwgPyBcIiZndDtcIiA6IFwiPlwiLFxuICBcdFx0XHRcdCAgICB0YWcgPSBfbm9kZS5ub2RlTmFtZS50b0xvd2VyQ2FzZSgpLFxuICBcdFx0XHRcdCAgICByZXQgPSBvcGVuICsgdGFnLFxuICBcdFx0XHRcdCAgICBhdHRycyA9IF9ub2RlLmF0dHJpYnV0ZXM7XG5cbiAgXHRcdFx0XHRpZiAoYXR0cnMpIHtcbiAgXHRcdFx0XHRcdGZvciAoaSA9IDAsIGxlbiA9IGF0dHJzLmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XG4gIFx0XHRcdFx0XHRcdHZhbCA9IGF0dHJzW2ldLm5vZGVWYWx1ZTtcblxuICBcdFx0XHRcdFx0XHQvLyBJRTYgaW5jbHVkZXMgYWxsIGF0dHJpYnV0ZXMgaW4gLmF0dHJpYnV0ZXMsIGV2ZW4gb25lcyBub3QgZXhwbGljaXRseVxuICBcdFx0XHRcdFx0XHQvLyBzZXQuIFRob3NlIGhhdmUgdmFsdWVzIGxpa2UgdW5kZWZpbmVkLCBudWxsLCAwLCBmYWxzZSwgXCJcIiBvclxuICBcdFx0XHRcdFx0XHQvLyBcImluaGVyaXRcIi5cbiAgXHRcdFx0XHRcdFx0aWYgKHZhbCAmJiB2YWwgIT09IFwiaW5oZXJpdFwiKSB7XG4gIFx0XHRcdFx0XHRcdFx0cmV0ICs9IFwiIFwiICsgYXR0cnNbaV0ubm9kZU5hbWUgKyBcIj1cIiArIGR1bXAucGFyc2UodmFsLCBcImF0dHJpYnV0ZVwiKTtcbiAgXHRcdFx0XHRcdFx0fVxuICBcdFx0XHRcdFx0fVxuICBcdFx0XHRcdH1cbiAgXHRcdFx0XHRyZXQgKz0gY2xvc2U7XG5cbiAgXHRcdFx0XHQvLyBTaG93IGNvbnRlbnQgb2YgVGV4dE5vZGUgb3IgQ0RBVEFTZWN0aW9uXG4gIFx0XHRcdFx0aWYgKF9ub2RlLm5vZGVUeXBlID09PSAzIHx8IF9ub2RlLm5vZGVUeXBlID09PSA0KSB7XG4gIFx0XHRcdFx0XHRyZXQgKz0gX25vZGUubm9kZVZhbHVlO1xuICBcdFx0XHRcdH1cblxuICBcdFx0XHRcdHJldHVybiByZXQgKyBvcGVuICsgXCIvXCIgKyB0YWcgKyBjbG9zZTtcbiAgXHRcdFx0fSxcblxuICBcdFx0XHQvLyBGdW5jdGlvbiBjYWxscyBpdCBpbnRlcm5hbGx5LCBpdCdzIHRoZSBhcmd1bWVudHMgcGFydCBvZiB0aGUgZnVuY3Rpb25cbiAgXHRcdFx0ZnVuY3Rpb25BcmdzOiBmdW5jdGlvbiBmdW5jdGlvbkFyZ3MoZm4pIHtcbiAgXHRcdFx0XHR2YXIgYXJncyxcbiAgXHRcdFx0XHQgICAgbCA9IGZuLmxlbmd0aDtcblxuICBcdFx0XHRcdGlmICghbCkge1xuICBcdFx0XHRcdFx0cmV0dXJuIFwiXCI7XG4gIFx0XHRcdFx0fVxuXG4gIFx0XHRcdFx0YXJncyA9IG5ldyBBcnJheShsKTtcbiAgXHRcdFx0XHR3aGlsZSAobC0tKSB7XG5cbiAgXHRcdFx0XHRcdC8vIDk3IGlzICdhJ1xuICBcdFx0XHRcdFx0YXJnc1tsXSA9IFN0cmluZy5mcm9tQ2hhckNvZGUoOTcgKyBsKTtcbiAgXHRcdFx0XHR9XG4gIFx0XHRcdFx0cmV0dXJuIFwiIFwiICsgYXJncy5qb2luKFwiLCBcIikgKyBcIiBcIjtcbiAgXHRcdFx0fSxcblxuICBcdFx0XHQvLyBPYmplY3QgY2FsbHMgaXQgaW50ZXJuYWxseSwgdGhlIGtleSBwYXJ0IG9mIGFuIGl0ZW0gaW4gYSBtYXBcbiAgXHRcdFx0a2V5OiBxdW90ZSxcblxuICBcdFx0XHQvLyBGdW5jdGlvbiBjYWxscyBpdCBpbnRlcm5hbGx5LCBpdCdzIHRoZSBjb250ZW50IG9mIHRoZSBmdW5jdGlvblxuICBcdFx0XHRmdW5jdGlvbkNvZGU6IFwiW2NvZGVdXCIsXG5cbiAgXHRcdFx0Ly8gTm9kZSBjYWxscyBpdCBpbnRlcm5hbGx5LCBpdCdzIGEgaHRtbCBhdHRyaWJ1dGUgdmFsdWVcbiAgXHRcdFx0YXR0cmlidXRlOiBxdW90ZSxcbiAgXHRcdFx0c3RyaW5nOiBxdW90ZSxcbiAgXHRcdFx0ZGF0ZTogcXVvdGUsXG4gIFx0XHRcdHJlZ2V4cDogbGl0ZXJhbCxcbiAgXHRcdFx0bnVtYmVyOiBsaXRlcmFsLFxuICBcdFx0XHRcImJvb2xlYW5cIjogbGl0ZXJhbCxcbiAgXHRcdFx0c3ltYm9sOiBmdW5jdGlvbiBzeW1ib2woc3ltKSB7XG4gIFx0XHRcdFx0cmV0dXJuIHN5bS50b1N0cmluZygpO1xuICBcdFx0XHR9XG4gIFx0XHR9LFxuXG4gIFx0XHQvLyBJZiB0cnVlLCBlbnRpdGllcyBhcmUgZXNjYXBlZCAoIDwsID4sIFxcdCwgc3BhY2UgYW5kIFxcbiApXG4gIFx0XHRIVE1MOiBmYWxzZSxcblxuICBcdFx0Ly8gSW5kZW50YXRpb24gdW5pdFxuICBcdFx0aW5kZW50Q2hhcjogXCIgIFwiLFxuXG4gIFx0XHQvLyBJZiB0cnVlLCBpdGVtcyBpbiBhIGNvbGxlY3Rpb24sIGFyZSBzZXBhcmF0ZWQgYnkgYSBcXG4sIGVsc2UganVzdCBhIHNwYWNlLlxuICBcdFx0bXVsdGlsaW5lOiB0cnVlXG4gIFx0fTtcblxuICBcdHJldHVybiBkdW1wO1xuICB9KSgpO1xuXG4gIHZhciBTdWl0ZVJlcG9ydCA9IGZ1bmN0aW9uICgpIHtcbiAgXHRmdW5jdGlvbiBTdWl0ZVJlcG9ydChuYW1lLCBwYXJlbnRTdWl0ZSkge1xuICBcdFx0Y2xhc3NDYWxsQ2hlY2sodGhpcywgU3VpdGVSZXBvcnQpO1xuXG4gIFx0XHR0aGlzLm5hbWUgPSBuYW1lO1xuICBcdFx0dGhpcy5mdWxsTmFtZSA9IHBhcmVudFN1aXRlID8gcGFyZW50U3VpdGUuZnVsbE5hbWUuY29uY2F0KG5hbWUpIDogW107XG5cbiAgXHRcdHRoaXMudGVzdHMgPSBbXTtcbiAgXHRcdHRoaXMuY2hpbGRTdWl0ZXMgPSBbXTtcblxuICBcdFx0aWYgKHBhcmVudFN1aXRlKSB7XG4gIFx0XHRcdHBhcmVudFN1aXRlLnB1c2hDaGlsZFN1aXRlKHRoaXMpO1xuICBcdFx0fVxuICBcdH1cblxuICBcdGNyZWF0ZUNsYXNzKFN1aXRlUmVwb3J0LCBbe1xuICBcdFx0a2V5OiBcInN0YXJ0XCIsXG4gIFx0XHR2YWx1ZTogZnVuY3Rpb24gc3RhcnQocmVjb3JkVGltZSkge1xuICBcdFx0XHRpZiAocmVjb3JkVGltZSkge1xuICBcdFx0XHRcdHRoaXMuX3N0YXJ0VGltZSA9IHBlcmZvcm1hbmNlTm93KCk7XG5cbiAgXHRcdFx0XHRpZiAocGVyZm9ybWFuY2UpIHtcbiAgXHRcdFx0XHRcdHZhciBzdWl0ZUxldmVsID0gdGhpcy5mdWxsTmFtZS5sZW5ndGg7XG4gIFx0XHRcdFx0XHRwZXJmb3JtYW5jZS5tYXJrKFwicXVuaXRfc3VpdGVfXCIgKyBzdWl0ZUxldmVsICsgXCJfc3RhcnRcIik7XG4gIFx0XHRcdFx0fVxuICBcdFx0XHR9XG5cbiAgXHRcdFx0cmV0dXJuIHtcbiAgXHRcdFx0XHRuYW1lOiB0aGlzLm5hbWUsXG4gIFx0XHRcdFx0ZnVsbE5hbWU6IHRoaXMuZnVsbE5hbWUuc2xpY2UoKSxcbiAgXHRcdFx0XHR0ZXN0czogdGhpcy50ZXN0cy5tYXAoZnVuY3Rpb24gKHRlc3QpIHtcbiAgXHRcdFx0XHRcdHJldHVybiB0ZXN0LnN0YXJ0KCk7XG4gIFx0XHRcdFx0fSksXG4gIFx0XHRcdFx0Y2hpbGRTdWl0ZXM6IHRoaXMuY2hpbGRTdWl0ZXMubWFwKGZ1bmN0aW9uIChzdWl0ZSkge1xuICBcdFx0XHRcdFx0cmV0dXJuIHN1aXRlLnN0YXJ0KCk7XG4gIFx0XHRcdFx0fSksXG4gIFx0XHRcdFx0dGVzdENvdW50czoge1xuICBcdFx0XHRcdFx0dG90YWw6IHRoaXMuZ2V0VGVzdENvdW50cygpLnRvdGFsXG4gIFx0XHRcdFx0fVxuICBcdFx0XHR9O1xuICBcdFx0fVxuICBcdH0sIHtcbiAgXHRcdGtleTogXCJlbmRcIixcbiAgXHRcdHZhbHVlOiBmdW5jdGlvbiBlbmQocmVjb3JkVGltZSkge1xuICBcdFx0XHRpZiAocmVjb3JkVGltZSkge1xuICBcdFx0XHRcdHRoaXMuX2VuZFRpbWUgPSBwZXJmb3JtYW5jZU5vdygpO1xuXG4gIFx0XHRcdFx0aWYgKHBlcmZvcm1hbmNlKSB7XG4gIFx0XHRcdFx0XHR2YXIgc3VpdGVMZXZlbCA9IHRoaXMuZnVsbE5hbWUubGVuZ3RoO1xuICBcdFx0XHRcdFx0cGVyZm9ybWFuY2UubWFyayhcInF1bml0X3N1aXRlX1wiICsgc3VpdGVMZXZlbCArIFwiX2VuZFwiKTtcblxuICBcdFx0XHRcdFx0dmFyIHN1aXRlTmFtZSA9IHRoaXMuZnVsbE5hbWUuam9pbihcIiDigJMgXCIpO1xuXG4gIFx0XHRcdFx0XHRtZWFzdXJlKHN1aXRlTGV2ZWwgPT09IDAgPyBcIlFVbml0IFRlc3QgUnVuXCIgOiBcIlFVbml0IFRlc3QgU3VpdGU6IFwiICsgc3VpdGVOYW1lLCBcInF1bml0X3N1aXRlX1wiICsgc3VpdGVMZXZlbCArIFwiX3N0YXJ0XCIsIFwicXVuaXRfc3VpdGVfXCIgKyBzdWl0ZUxldmVsICsgXCJfZW5kXCIpO1xuICBcdFx0XHRcdH1cbiAgXHRcdFx0fVxuXG4gIFx0XHRcdHJldHVybiB7XG4gIFx0XHRcdFx0bmFtZTogdGhpcy5uYW1lLFxuICBcdFx0XHRcdGZ1bGxOYW1lOiB0aGlzLmZ1bGxOYW1lLnNsaWNlKCksXG4gIFx0XHRcdFx0dGVzdHM6IHRoaXMudGVzdHMubWFwKGZ1bmN0aW9uICh0ZXN0KSB7XG4gIFx0XHRcdFx0XHRyZXR1cm4gdGVzdC5lbmQoKTtcbiAgXHRcdFx0XHR9KSxcbiAgXHRcdFx0XHRjaGlsZFN1aXRlczogdGhpcy5jaGlsZFN1aXRlcy5tYXAoZnVuY3Rpb24gKHN1aXRlKSB7XG4gIFx0XHRcdFx0XHRyZXR1cm4gc3VpdGUuZW5kKCk7XG4gIFx0XHRcdFx0fSksXG4gIFx0XHRcdFx0dGVzdENvdW50czogdGhpcy5nZXRUZXN0Q291bnRzKCksXG4gIFx0XHRcdFx0cnVudGltZTogdGhpcy5nZXRSdW50aW1lKCksXG4gIFx0XHRcdFx0c3RhdHVzOiB0aGlzLmdldFN0YXR1cygpXG4gIFx0XHRcdH07XG4gIFx0XHR9XG4gIFx0fSwge1xuICBcdFx0a2V5OiBcInB1c2hDaGlsZFN1aXRlXCIsXG4gIFx0XHR2YWx1ZTogZnVuY3Rpb24gcHVzaENoaWxkU3VpdGUoc3VpdGUpIHtcbiAgXHRcdFx0dGhpcy5jaGlsZFN1aXRlcy5wdXNoKHN1aXRlKTtcbiAgXHRcdH1cbiAgXHR9LCB7XG4gIFx0XHRrZXk6IFwicHVzaFRlc3RcIixcbiAgXHRcdHZhbHVlOiBmdW5jdGlvbiBwdXNoVGVzdCh0ZXN0KSB7XG4gIFx0XHRcdHRoaXMudGVzdHMucHVzaCh0ZXN0KTtcbiAgXHRcdH1cbiAgXHR9LCB7XG4gIFx0XHRrZXk6IFwiZ2V0UnVudGltZVwiLFxuICBcdFx0dmFsdWU6IGZ1bmN0aW9uIGdldFJ1bnRpbWUoKSB7XG4gIFx0XHRcdHJldHVybiB0aGlzLl9lbmRUaW1lIC0gdGhpcy5fc3RhcnRUaW1lO1xuICBcdFx0fVxuICBcdH0sIHtcbiAgXHRcdGtleTogXCJnZXRUZXN0Q291bnRzXCIsXG4gIFx0XHR2YWx1ZTogZnVuY3Rpb24gZ2V0VGVzdENvdW50cygpIHtcbiAgXHRcdFx0dmFyIGNvdW50cyA9IGFyZ3VtZW50cy5sZW5ndGggPiAwICYmIGFyZ3VtZW50c1swXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzBdIDogeyBwYXNzZWQ6IDAsIGZhaWxlZDogMCwgc2tpcHBlZDogMCwgdG9kbzogMCwgdG90YWw6IDAgfTtcblxuICBcdFx0XHRjb3VudHMgPSB0aGlzLnRlc3RzLnJlZHVjZShmdW5jdGlvbiAoY291bnRzLCB0ZXN0KSB7XG4gIFx0XHRcdFx0aWYgKHRlc3QudmFsaWQpIHtcbiAgXHRcdFx0XHRcdGNvdW50c1t0ZXN0LmdldFN0YXR1cygpXSsrO1xuICBcdFx0XHRcdFx0Y291bnRzLnRvdGFsKys7XG4gIFx0XHRcdFx0fVxuXG4gIFx0XHRcdFx0cmV0dXJuIGNvdW50cztcbiAgXHRcdFx0fSwgY291bnRzKTtcblxuICBcdFx0XHRyZXR1cm4gdGhpcy5jaGlsZFN1aXRlcy5yZWR1Y2UoZnVuY3Rpb24gKGNvdW50cywgc3VpdGUpIHtcbiAgXHRcdFx0XHRyZXR1cm4gc3VpdGUuZ2V0VGVzdENvdW50cyhjb3VudHMpO1xuICBcdFx0XHR9LCBjb3VudHMpO1xuICBcdFx0fVxuICBcdH0sIHtcbiAgXHRcdGtleTogXCJnZXRTdGF0dXNcIixcbiAgXHRcdHZhbHVlOiBmdW5jdGlvbiBnZXRTdGF0dXMoKSB7XG4gIFx0XHRcdHZhciBfZ2V0VGVzdENvdW50cyA9IHRoaXMuZ2V0VGVzdENvdW50cygpLFxuICBcdFx0XHQgICAgdG90YWwgPSBfZ2V0VGVzdENvdW50cy50b3RhbCxcbiAgXHRcdFx0ICAgIGZhaWxlZCA9IF9nZXRUZXN0Q291bnRzLmZhaWxlZCxcbiAgXHRcdFx0ICAgIHNraXBwZWQgPSBfZ2V0VGVzdENvdW50cy5za2lwcGVkLFxuICBcdFx0XHQgICAgdG9kbyA9IF9nZXRUZXN0Q291bnRzLnRvZG87XG5cbiAgXHRcdFx0aWYgKGZhaWxlZCkge1xuICBcdFx0XHRcdHJldHVybiBcImZhaWxlZFwiO1xuICBcdFx0XHR9IGVsc2Uge1xuICBcdFx0XHRcdGlmIChza2lwcGVkID09PSB0b3RhbCkge1xuICBcdFx0XHRcdFx0cmV0dXJuIFwic2tpcHBlZFwiO1xuICBcdFx0XHRcdH0gZWxzZSBpZiAodG9kbyA9PT0gdG90YWwpIHtcbiAgXHRcdFx0XHRcdHJldHVybiBcInRvZG9cIjtcbiAgXHRcdFx0XHR9IGVsc2Uge1xuICBcdFx0XHRcdFx0cmV0dXJuIFwicGFzc2VkXCI7XG4gIFx0XHRcdFx0fVxuICBcdFx0XHR9XG4gIFx0XHR9XG4gIFx0fV0pO1xuICBcdHJldHVybiBTdWl0ZVJlcG9ydDtcbiAgfSgpO1xuXG4gIHZhciBmb2N1c2VkID0gZmFsc2U7XG5cbiAgdmFyIG1vZHVsZVN0YWNrID0gW107XG5cbiAgZnVuY3Rpb24gY3JlYXRlTW9kdWxlKG5hbWUsIHRlc3RFbnZpcm9ubWVudCwgbW9kaWZpZXJzKSB7XG4gIFx0dmFyIHBhcmVudE1vZHVsZSA9IG1vZHVsZVN0YWNrLmxlbmd0aCA/IG1vZHVsZVN0YWNrLnNsaWNlKC0xKVswXSA6IG51bGw7XG4gIFx0dmFyIG1vZHVsZU5hbWUgPSBwYXJlbnRNb2R1bGUgIT09IG51bGwgPyBbcGFyZW50TW9kdWxlLm5hbWUsIG5hbWVdLmpvaW4oXCIgPiBcIikgOiBuYW1lO1xuICBcdHZhciBwYXJlbnRTdWl0ZSA9IHBhcmVudE1vZHVsZSA/IHBhcmVudE1vZHVsZS5zdWl0ZVJlcG9ydCA6IGdsb2JhbFN1aXRlO1xuXG4gIFx0dmFyIHNraXAgPSBwYXJlbnRNb2R1bGUgIT09IG51bGwgJiYgcGFyZW50TW9kdWxlLnNraXAgfHwgbW9kaWZpZXJzLnNraXA7XG4gIFx0dmFyIHRvZG8gPSBwYXJlbnRNb2R1bGUgIT09IG51bGwgJiYgcGFyZW50TW9kdWxlLnRvZG8gfHwgbW9kaWZpZXJzLnRvZG87XG5cbiAgXHR2YXIgbW9kdWxlID0ge1xuICBcdFx0bmFtZTogbW9kdWxlTmFtZSxcbiAgXHRcdHBhcmVudE1vZHVsZTogcGFyZW50TW9kdWxlLFxuICBcdFx0dGVzdHM6IFtdLFxuICBcdFx0bW9kdWxlSWQ6IGdlbmVyYXRlSGFzaChtb2R1bGVOYW1lKSxcbiAgXHRcdHRlc3RzUnVuOiAwLFxuICBcdFx0dW5za2lwcGVkVGVzdHNSdW46IDAsXG4gIFx0XHRjaGlsZE1vZHVsZXM6IFtdLFxuICBcdFx0c3VpdGVSZXBvcnQ6IG5ldyBTdWl0ZVJlcG9ydChuYW1lLCBwYXJlbnRTdWl0ZSksXG5cbiAgXHRcdC8vIFBhc3MgYWxvbmcgYHNraXBgIGFuZCBgdG9kb2AgcHJvcGVydGllcyBmcm9tIHBhcmVudCBtb2R1bGUsIGluIGNhc2VcbiAgXHRcdC8vIHRoZXJlIGlzIG9uZSwgdG8gY2hpbGRzLiBBbmQgdXNlIG93biBvdGhlcndpc2UuXG4gIFx0XHQvLyBUaGlzIHByb3BlcnR5IHdpbGwgYmUgdXNlZCB0byBtYXJrIG93biB0ZXN0cyBhbmQgdGVzdHMgb2YgY2hpbGQgc3VpdGVzXG4gIFx0XHQvLyBhcyBlaXRoZXIgYHNraXBwZWRgIG9yIGB0b2RvYC5cbiAgXHRcdHNraXA6IHNraXAsXG4gIFx0XHR0b2RvOiBza2lwID8gZmFsc2UgOiB0b2RvXG4gIFx0fTtcblxuICBcdHZhciBlbnYgPSB7fTtcbiAgXHRpZiAocGFyZW50TW9kdWxlKSB7XG4gIFx0XHRwYXJlbnRNb2R1bGUuY2hpbGRNb2R1bGVzLnB1c2gobW9kdWxlKTtcbiAgXHRcdGV4dGVuZChlbnYsIHBhcmVudE1vZHVsZS50ZXN0RW52aXJvbm1lbnQpO1xuICBcdH1cbiAgXHRleHRlbmQoZW52LCB0ZXN0RW52aXJvbm1lbnQpO1xuICBcdG1vZHVsZS50ZXN0RW52aXJvbm1lbnQgPSBlbnY7XG5cbiAgXHRjb25maWcubW9kdWxlcy5wdXNoKG1vZHVsZSk7XG4gIFx0cmV0dXJuIG1vZHVsZTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHByb2Nlc3NNb2R1bGUobmFtZSwgb3B0aW9ucywgZXhlY3V0ZU5vdykge1xuICBcdHZhciBtb2RpZmllcnMgPSBhcmd1bWVudHMubGVuZ3RoID4gMyAmJiBhcmd1bWVudHNbM10gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1szXSA6IHt9O1xuXG4gIFx0aWYgKG9iamVjdFR5cGUob3B0aW9ucykgPT09IFwiZnVuY3Rpb25cIikge1xuICBcdFx0ZXhlY3V0ZU5vdyA9IG9wdGlvbnM7XG4gIFx0XHRvcHRpb25zID0gdW5kZWZpbmVkO1xuICBcdH1cblxuICBcdHZhciBtb2R1bGUgPSBjcmVhdGVNb2R1bGUobmFtZSwgb3B0aW9ucywgbW9kaWZpZXJzKTtcblxuICBcdC8vIE1vdmUgYW55IGhvb2tzIHRvIGEgJ2hvb2tzJyBvYmplY3RcbiAgXHR2YXIgdGVzdEVudmlyb25tZW50ID0gbW9kdWxlLnRlc3RFbnZpcm9ubWVudDtcbiAgXHR2YXIgaG9va3MgPSBtb2R1bGUuaG9va3MgPSB7fTtcblxuICBcdHNldEhvb2tGcm9tRW52aXJvbm1lbnQoaG9va3MsIHRlc3RFbnZpcm9ubWVudCwgXCJiZWZvcmVcIik7XG4gIFx0c2V0SG9va0Zyb21FbnZpcm9ubWVudChob29rcywgdGVzdEVudmlyb25tZW50LCBcImJlZm9yZUVhY2hcIik7XG4gIFx0c2V0SG9va0Zyb21FbnZpcm9ubWVudChob29rcywgdGVzdEVudmlyb25tZW50LCBcImFmdGVyRWFjaFwiKTtcbiAgXHRzZXRIb29rRnJvbUVudmlyb25tZW50KGhvb2tzLCB0ZXN0RW52aXJvbm1lbnQsIFwiYWZ0ZXJcIik7XG5cbiAgXHR2YXIgbW9kdWxlRm5zID0ge1xuICBcdFx0YmVmb3JlOiBzZXRIb29rRnVuY3Rpb24obW9kdWxlLCBcImJlZm9yZVwiKSxcbiAgXHRcdGJlZm9yZUVhY2g6IHNldEhvb2tGdW5jdGlvbihtb2R1bGUsIFwiYmVmb3JlRWFjaFwiKSxcbiAgXHRcdGFmdGVyRWFjaDogc2V0SG9va0Z1bmN0aW9uKG1vZHVsZSwgXCJhZnRlckVhY2hcIiksXG4gIFx0XHRhZnRlcjogc2V0SG9va0Z1bmN0aW9uKG1vZHVsZSwgXCJhZnRlclwiKVxuICBcdH07XG5cbiAgXHR2YXIgY3VycmVudE1vZHVsZSA9IGNvbmZpZy5jdXJyZW50TW9kdWxlO1xuICBcdGlmIChvYmplY3RUeXBlKGV4ZWN1dGVOb3cpID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgXHRcdG1vZHVsZVN0YWNrLnB1c2gobW9kdWxlKTtcbiAgXHRcdGNvbmZpZy5jdXJyZW50TW9kdWxlID0gbW9kdWxlO1xuICBcdFx0ZXhlY3V0ZU5vdy5jYWxsKG1vZHVsZS50ZXN0RW52aXJvbm1lbnQsIG1vZHVsZUZucyk7XG4gIFx0XHRtb2R1bGVTdGFjay5wb3AoKTtcbiAgXHRcdG1vZHVsZSA9IG1vZHVsZS5wYXJlbnRNb2R1bGUgfHwgY3VycmVudE1vZHVsZTtcbiAgXHR9XG5cbiAgXHRjb25maWcuY3VycmVudE1vZHVsZSA9IG1vZHVsZTtcblxuICBcdGZ1bmN0aW9uIHNldEhvb2tGcm9tRW52aXJvbm1lbnQoaG9va3MsIGVudmlyb25tZW50LCBuYW1lKSB7XG4gIFx0XHR2YXIgcG90ZW50aWFsSG9vayA9IGVudmlyb25tZW50W25hbWVdO1xuICBcdFx0aG9va3NbbmFtZV0gPSB0eXBlb2YgcG90ZW50aWFsSG9vayA9PT0gXCJmdW5jdGlvblwiID8gW3BvdGVudGlhbEhvb2tdIDogW107XG4gIFx0XHRkZWxldGUgZW52aXJvbm1lbnRbbmFtZV07XG4gIFx0fVxuXG4gIFx0ZnVuY3Rpb24gc2V0SG9va0Z1bmN0aW9uKG1vZHVsZSwgaG9va05hbWUpIHtcbiAgXHRcdHJldHVybiBmdW5jdGlvbiBzZXRIb29rKGNhbGxiYWNrKSB7XG4gIFx0XHRcdG1vZHVsZS5ob29rc1tob29rTmFtZV0ucHVzaChjYWxsYmFjayk7XG4gIFx0XHR9O1xuICBcdH1cbiAgfVxuXG4gIGZ1bmN0aW9uIG1vZHVsZSQxKG5hbWUsIG9wdGlvbnMsIGV4ZWN1dGVOb3cpIHtcbiAgXHRpZiAoZm9jdXNlZCkge1xuICBcdFx0cmV0dXJuO1xuICBcdH1cblxuICBcdHByb2Nlc3NNb2R1bGUobmFtZSwgb3B0aW9ucywgZXhlY3V0ZU5vdyk7XG4gIH1cblxuICBtb2R1bGUkMS5vbmx5ID0gZnVuY3Rpb24gKCkge1xuICBcdGlmIChmb2N1c2VkKSB7XG4gIFx0XHRyZXR1cm47XG4gIFx0fVxuXG4gIFx0Y29uZmlnLm1vZHVsZXMubGVuZ3RoID0gMDtcbiAgXHRjb25maWcucXVldWUubGVuZ3RoID0gMDtcblxuICBcdG1vZHVsZSQxLmFwcGx5KHVuZGVmaW5lZCwgYXJndW1lbnRzKTtcblxuICBcdGZvY3VzZWQgPSB0cnVlO1xuICB9O1xuXG4gIG1vZHVsZSQxLnNraXAgPSBmdW5jdGlvbiAobmFtZSwgb3B0aW9ucywgZXhlY3V0ZU5vdykge1xuICBcdGlmIChmb2N1c2VkKSB7XG4gIFx0XHRyZXR1cm47XG4gIFx0fVxuXG4gIFx0cHJvY2Vzc01vZHVsZShuYW1lLCBvcHRpb25zLCBleGVjdXRlTm93LCB7IHNraXA6IHRydWUgfSk7XG4gIH07XG5cbiAgbW9kdWxlJDEudG9kbyA9IGZ1bmN0aW9uIChuYW1lLCBvcHRpb25zLCBleGVjdXRlTm93KSB7XG4gIFx0aWYgKGZvY3VzZWQpIHtcbiAgXHRcdHJldHVybjtcbiAgXHR9XG5cbiAgXHRwcm9jZXNzTW9kdWxlKG5hbWUsIG9wdGlvbnMsIGV4ZWN1dGVOb3csIHsgdG9kbzogdHJ1ZSB9KTtcbiAgfTtcblxuICB2YXIgTElTVEVORVJTID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiAgdmFyIFNVUFBPUlRFRF9FVkVOVFMgPSBbXCJydW5TdGFydFwiLCBcInN1aXRlU3RhcnRcIiwgXCJ0ZXN0U3RhcnRcIiwgXCJhc3NlcnRpb25cIiwgXCJ0ZXN0RW5kXCIsIFwic3VpdGVFbmRcIiwgXCJydW5FbmRcIl07XG5cbiAgLyoqXG4gICAqIEVtaXRzIGFuIGV2ZW50IHdpdGggdGhlIHNwZWNpZmllZCBkYXRhIHRvIGFsbCBjdXJyZW50bHkgcmVnaXN0ZXJlZCBsaXN0ZW5lcnMuXG4gICAqIENhbGxiYWNrcyB3aWxsIGZpcmUgaW4gdGhlIG9yZGVyIGluIHdoaWNoIHRoZXkgYXJlIHJlZ2lzdGVyZWQgKEZJRk8pLiBUaGlzXG4gICAqIGZ1bmN0aW9uIGlzIG5vdCBleHBvc2VkIHB1YmxpY2x5OyBpdCBpcyB1c2VkIGJ5IFFVbml0IGludGVybmFscyB0byBlbWl0XG4gICAqIGxvZ2dpbmcgZXZlbnRzLlxuICAgKlxuICAgKiBAcHJpdmF0ZVxuICAgKiBAbWV0aG9kIGVtaXRcbiAgICogQHBhcmFtIHtTdHJpbmd9IGV2ZW50TmFtZVxuICAgKiBAcGFyYW0ge09iamVjdH0gZGF0YVxuICAgKiBAcmV0dXJuIHtWb2lkfVxuICAgKi9cbiAgZnVuY3Rpb24gZW1pdChldmVudE5hbWUsIGRhdGEpIHtcbiAgXHRpZiAob2JqZWN0VHlwZShldmVudE5hbWUpICE9PSBcInN0cmluZ1wiKSB7XG4gIFx0XHR0aHJvdyBuZXcgVHlwZUVycm9yKFwiZXZlbnROYW1lIG11c3QgYmUgYSBzdHJpbmcgd2hlbiBlbWl0dGluZyBhbiBldmVudFwiKTtcbiAgXHR9XG5cbiAgXHQvLyBDbG9uZSB0aGUgY2FsbGJhY2tzIGluIGNhc2Ugb25lIG9mIHRoZW0gcmVnaXN0ZXJzIGEgbmV3IGNhbGxiYWNrXG4gIFx0dmFyIG9yaWdpbmFsQ2FsbGJhY2tzID0gTElTVEVORVJTW2V2ZW50TmFtZV07XG4gIFx0dmFyIGNhbGxiYWNrcyA9IG9yaWdpbmFsQ2FsbGJhY2tzID8gW10uY29uY2F0KHRvQ29uc3VtYWJsZUFycmF5KG9yaWdpbmFsQ2FsbGJhY2tzKSkgOiBbXTtcblxuICBcdGZvciAodmFyIGkgPSAwOyBpIDwgY2FsbGJhY2tzLmxlbmd0aDsgaSsrKSB7XG4gIFx0XHRjYWxsYmFja3NbaV0oZGF0YSk7XG4gIFx0fVxuICB9XG5cbiAgLyoqXG4gICAqIFJlZ2lzdGVycyBhIGNhbGxiYWNrIGFzIGEgbGlzdGVuZXIgdG8gdGhlIHNwZWNpZmllZCBldmVudC5cbiAgICpcbiAgICogQHB1YmxpY1xuICAgKiBAbWV0aG9kIG9uXG4gICAqIEBwYXJhbSB7U3RyaW5nfSBldmVudE5hbWVcbiAgICogQHBhcmFtIHtGdW5jdGlvbn0gY2FsbGJhY2tcbiAgICogQHJldHVybiB7Vm9pZH1cbiAgICovXG4gIGZ1bmN0aW9uIG9uKGV2ZW50TmFtZSwgY2FsbGJhY2spIHtcbiAgXHRpZiAob2JqZWN0VHlwZShldmVudE5hbWUpICE9PSBcInN0cmluZ1wiKSB7XG4gIFx0XHR0aHJvdyBuZXcgVHlwZUVycm9yKFwiZXZlbnROYW1lIG11c3QgYmUgYSBzdHJpbmcgd2hlbiByZWdpc3RlcmluZyBhIGxpc3RlbmVyXCIpO1xuICBcdH0gZWxzZSBpZiAoIWluQXJyYXkoZXZlbnROYW1lLCBTVVBQT1JURURfRVZFTlRTKSkge1xuICBcdFx0dmFyIGV2ZW50cyA9IFNVUFBPUlRFRF9FVkVOVFMuam9pbihcIiwgXCIpO1xuICBcdFx0dGhyb3cgbmV3IEVycm9yKFwiXFxcIlwiICsgZXZlbnROYW1lICsgXCJcXFwiIGlzIG5vdCBhIHZhbGlkIGV2ZW50OyBtdXN0IGJlIG9uZSBvZjogXCIgKyBldmVudHMgKyBcIi5cIik7XG4gIFx0fSBlbHNlIGlmIChvYmplY3RUeXBlKGNhbGxiYWNrKSAhPT0gXCJmdW5jdGlvblwiKSB7XG4gIFx0XHR0aHJvdyBuZXcgVHlwZUVycm9yKFwiY2FsbGJhY2sgbXVzdCBiZSBhIGZ1bmN0aW9uIHdoZW4gcmVnaXN0ZXJpbmcgYSBsaXN0ZW5lclwiKTtcbiAgXHR9XG5cbiAgXHRpZiAoIUxJU1RFTkVSU1tldmVudE5hbWVdKSB7XG4gIFx0XHRMSVNURU5FUlNbZXZlbnROYW1lXSA9IFtdO1xuICBcdH1cblxuICBcdC8vIERvbid0IHJlZ2lzdGVyIHRoZSBzYW1lIGNhbGxiYWNrIG1vcmUgdGhhbiBvbmNlXG4gIFx0aWYgKCFpbkFycmF5KGNhbGxiYWNrLCBMSVNURU5FUlNbZXZlbnROYW1lXSkpIHtcbiAgXHRcdExJU1RFTkVSU1tldmVudE5hbWVdLnB1c2goY2FsbGJhY2spO1xuICBcdH1cbiAgfVxuXG4gIGZ1bmN0aW9uIG9iamVjdE9yRnVuY3Rpb24oeCkge1xuICAgIHZhciB0eXBlID0gdHlwZW9mIHggPT09ICd1bmRlZmluZWQnID8gJ3VuZGVmaW5lZCcgOiBfdHlwZW9mKHgpO1xuICAgIHJldHVybiB4ICE9PSBudWxsICYmICh0eXBlID09PSAnb2JqZWN0JyB8fCB0eXBlID09PSAnZnVuY3Rpb24nKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGlzRnVuY3Rpb24oeCkge1xuICAgIHJldHVybiB0eXBlb2YgeCA9PT0gJ2Z1bmN0aW9uJztcbiAgfVxuXG5cblxuICB2YXIgX2lzQXJyYXkgPSB2b2lkIDA7XG4gIGlmIChBcnJheS5pc0FycmF5KSB7XG4gICAgX2lzQXJyYXkgPSBBcnJheS5pc0FycmF5O1xuICB9IGVsc2Uge1xuICAgIF9pc0FycmF5ID0gZnVuY3Rpb24gX2lzQXJyYXkoeCkge1xuICAgICAgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbCh4KSA9PT0gJ1tvYmplY3QgQXJyYXldJztcbiAgICB9O1xuICB9XG5cbiAgdmFyIGlzQXJyYXkgPSBfaXNBcnJheTtcblxuICB2YXIgbGVuID0gMDtcbiAgdmFyIHZlcnR4TmV4dCA9IHZvaWQgMDtcbiAgdmFyIGN1c3RvbVNjaGVkdWxlckZuID0gdm9pZCAwO1xuXG4gIHZhciBhc2FwID0gZnVuY3Rpb24gYXNhcChjYWxsYmFjaywgYXJnKSB7XG4gICAgcXVldWVbbGVuXSA9IGNhbGxiYWNrO1xuICAgIHF1ZXVlW2xlbiArIDFdID0gYXJnO1xuICAgIGxlbiArPSAyO1xuICAgIGlmIChsZW4gPT09IDIpIHtcbiAgICAgIC8vIElmIGxlbiBpcyAyLCB0aGF0IG1lYW5zIHRoYXQgd2UgbmVlZCB0byBzY2hlZHVsZSBhbiBhc3luYyBmbHVzaC5cbiAgICAgIC8vIElmIGFkZGl0aW9uYWwgY2FsbGJhY2tzIGFyZSBxdWV1ZWQgYmVmb3JlIHRoZSBxdWV1ZSBpcyBmbHVzaGVkLCB0aGV5XG4gICAgICAvLyB3aWxsIGJlIHByb2Nlc3NlZCBieSB0aGlzIGZsdXNoIHRoYXQgd2UgYXJlIHNjaGVkdWxpbmcuXG4gICAgICBpZiAoY3VzdG9tU2NoZWR1bGVyRm4pIHtcbiAgICAgICAgY3VzdG9tU2NoZWR1bGVyRm4oZmx1c2gpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgc2NoZWR1bGVGbHVzaCgpO1xuICAgICAgfVxuICAgIH1cbiAgfTtcblxuICBmdW5jdGlvbiBzZXRTY2hlZHVsZXIoc2NoZWR1bGVGbikge1xuICAgIGN1c3RvbVNjaGVkdWxlckZuID0gc2NoZWR1bGVGbjtcbiAgfVxuXG4gIGZ1bmN0aW9uIHNldEFzYXAoYXNhcEZuKSB7XG4gICAgYXNhcCA9IGFzYXBGbjtcbiAgfVxuXG4gIHZhciBicm93c2VyV2luZG93ID0gdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgPyB3aW5kb3cgOiB1bmRlZmluZWQ7XG4gIHZhciBicm93c2VyR2xvYmFsID0gYnJvd3NlcldpbmRvdyB8fCB7fTtcbiAgdmFyIEJyb3dzZXJNdXRhdGlvbk9ic2VydmVyID0gYnJvd3Nlckdsb2JhbC5NdXRhdGlvbk9ic2VydmVyIHx8IGJyb3dzZXJHbG9iYWwuV2ViS2l0TXV0YXRpb25PYnNlcnZlcjtcbiAgdmFyIGlzTm9kZSA9IHR5cGVvZiBzZWxmID09PSAndW5kZWZpbmVkJyAmJiB0eXBlb2YgcHJvY2VzcyAhPT0gJ3VuZGVmaW5lZCcgJiYge30udG9TdHJpbmcuY2FsbChwcm9jZXNzKSA9PT0gJ1tvYmplY3QgcHJvY2Vzc10nO1xuXG4gIC8vIHRlc3QgZm9yIHdlYiB3b3JrZXIgYnV0IG5vdCBpbiBJRTEwXG4gIHZhciBpc1dvcmtlciA9IHR5cGVvZiBVaW50OENsYW1wZWRBcnJheSAhPT0gJ3VuZGVmaW5lZCcgJiYgdHlwZW9mIGltcG9ydFNjcmlwdHMgIT09ICd1bmRlZmluZWQnICYmIHR5cGVvZiBNZXNzYWdlQ2hhbm5lbCAhPT0gJ3VuZGVmaW5lZCc7XG5cbiAgLy8gbm9kZVxuICBmdW5jdGlvbiB1c2VOZXh0VGljaygpIHtcbiAgICAvLyBub2RlIHZlcnNpb24gMC4xMC54IGRpc3BsYXlzIGEgZGVwcmVjYXRpb24gd2FybmluZyB3aGVuIG5leHRUaWNrIGlzIHVzZWQgcmVjdXJzaXZlbHlcbiAgICAvLyBzZWUgaHR0cHM6Ly9naXRodWIuY29tL2N1am9qcy93aGVuL2lzc3Vlcy80MTAgZm9yIGRldGFpbHNcbiAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuIHByb2Nlc3MubmV4dFRpY2soZmx1c2gpO1xuICAgIH07XG4gIH1cblxuICAvLyB2ZXJ0eFxuICBmdW5jdGlvbiB1c2VWZXJ0eFRpbWVyKCkge1xuICAgIGlmICh0eXBlb2YgdmVydHhOZXh0ICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmVydHhOZXh0KGZsdXNoKTtcbiAgICAgIH07XG4gICAgfVxuXG4gICAgcmV0dXJuIHVzZVNldFRpbWVvdXQoKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHVzZU11dGF0aW9uT2JzZXJ2ZXIoKSB7XG4gICAgdmFyIGl0ZXJhdGlvbnMgPSAwO1xuICAgIHZhciBvYnNlcnZlciA9IG5ldyBCcm93c2VyTXV0YXRpb25PYnNlcnZlcihmbHVzaCk7XG4gICAgdmFyIG5vZGUgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZSgnJyk7XG4gICAgb2JzZXJ2ZXIub2JzZXJ2ZShub2RlLCB7IGNoYXJhY3RlckRhdGE6IHRydWUgfSk7XG5cbiAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgICAgbm9kZS5kYXRhID0gaXRlcmF0aW9ucyA9ICsraXRlcmF0aW9ucyAlIDI7XG4gICAgfTtcbiAgfVxuXG4gIC8vIHdlYiB3b3JrZXJcbiAgZnVuY3Rpb24gdXNlTWVzc2FnZUNoYW5uZWwoKSB7XG4gICAgdmFyIGNoYW5uZWwgPSBuZXcgTWVzc2FnZUNoYW5uZWwoKTtcbiAgICBjaGFubmVsLnBvcnQxLm9ubWVzc2FnZSA9IGZsdXNoO1xuICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4gY2hhbm5lbC5wb3J0Mi5wb3N0TWVzc2FnZSgwKTtcbiAgICB9O1xuICB9XG5cbiAgZnVuY3Rpb24gdXNlU2V0VGltZW91dCgpIHtcbiAgICAvLyBTdG9yZSBzZXRUaW1lb3V0IHJlZmVyZW5jZSBzbyBlczYtcHJvbWlzZSB3aWxsIGJlIHVuYWZmZWN0ZWQgYnlcbiAgICAvLyBvdGhlciBjb2RlIG1vZGlmeWluZyBzZXRUaW1lb3V0IChsaWtlIHNpbm9uLnVzZUZha2VUaW1lcnMoKSlcbiAgICB2YXIgZ2xvYmFsU2V0VGltZW91dCA9IHNldFRpbWVvdXQ7XG4gICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiBnbG9iYWxTZXRUaW1lb3V0KGZsdXNoLCAxKTtcbiAgICB9O1xuICB9XG5cbiAgdmFyIHF1ZXVlID0gbmV3IEFycmF5KDEwMDApO1xuICBmdW5jdGlvbiBmbHVzaCgpIHtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxlbjsgaSArPSAyKSB7XG4gICAgICB2YXIgY2FsbGJhY2sgPSBxdWV1ZVtpXTtcbiAgICAgIHZhciBhcmcgPSBxdWV1ZVtpICsgMV07XG5cbiAgICAgIGNhbGxiYWNrKGFyZyk7XG5cbiAgICAgIHF1ZXVlW2ldID0gdW5kZWZpbmVkO1xuICAgICAgcXVldWVbaSArIDFdID0gdW5kZWZpbmVkO1xuICAgIH1cblxuICAgIGxlbiA9IDA7XG4gIH1cblxuICBmdW5jdGlvbiBhdHRlbXB0VmVydHgoKSB7XG4gICAgdHJ5IHtcbiAgICAgIHZhciB2ZXJ0eCA9IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCkucmVxdWlyZSgndmVydHgnKTtcbiAgICAgIHZlcnR4TmV4dCA9IHZlcnR4LnJ1bk9uTG9vcCB8fCB2ZXJ0eC5ydW5PbkNvbnRleHQ7XG4gICAgICByZXR1cm4gdXNlVmVydHhUaW1lcigpO1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIHJldHVybiB1c2VTZXRUaW1lb3V0KCk7XG4gICAgfVxuICB9XG5cbiAgdmFyIHNjaGVkdWxlRmx1c2ggPSB2b2lkIDA7XG4gIC8vIERlY2lkZSB3aGF0IGFzeW5jIG1ldGhvZCB0byB1c2UgdG8gdHJpZ2dlcmluZyBwcm9jZXNzaW5nIG9mIHF1ZXVlZCBjYWxsYmFja3M6XG4gIGlmIChpc05vZGUpIHtcbiAgICBzY2hlZHVsZUZsdXNoID0gdXNlTmV4dFRpY2soKTtcbiAgfSBlbHNlIGlmIChCcm93c2VyTXV0YXRpb25PYnNlcnZlcikge1xuICAgIHNjaGVkdWxlRmx1c2ggPSB1c2VNdXRhdGlvbk9ic2VydmVyKCk7XG4gIH0gZWxzZSBpZiAoaXNXb3JrZXIpIHtcbiAgICBzY2hlZHVsZUZsdXNoID0gdXNlTWVzc2FnZUNoYW5uZWwoKTtcbiAgfSBlbHNlIGlmIChicm93c2VyV2luZG93ID09PSB1bmRlZmluZWQgJiYgdHlwZW9mIHJlcXVpcmUgPT09ICdmdW5jdGlvbicpIHtcbiAgICBzY2hlZHVsZUZsdXNoID0gYXR0ZW1wdFZlcnR4KCk7XG4gIH0gZWxzZSB7XG4gICAgc2NoZWR1bGVGbHVzaCA9IHVzZVNldFRpbWVvdXQoKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHRoZW4ob25GdWxmaWxsbWVudCwgb25SZWplY3Rpb24pIHtcbiAgICB2YXIgcGFyZW50ID0gdGhpcztcblxuICAgIHZhciBjaGlsZCA9IG5ldyB0aGlzLmNvbnN0cnVjdG9yKG5vb3ApO1xuXG4gICAgaWYgKGNoaWxkW1BST01JU0VfSURdID09PSB1bmRlZmluZWQpIHtcbiAgICAgIG1ha2VQcm9taXNlKGNoaWxkKTtcbiAgICB9XG5cbiAgICB2YXIgX3N0YXRlID0gcGFyZW50Ll9zdGF0ZTtcblxuXG4gICAgaWYgKF9zdGF0ZSkge1xuICAgICAgdmFyIGNhbGxiYWNrID0gYXJndW1lbnRzW19zdGF0ZSAtIDFdO1xuICAgICAgYXNhcChmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBpbnZva2VDYWxsYmFjayhfc3RhdGUsIGNoaWxkLCBjYWxsYmFjaywgcGFyZW50Ll9yZXN1bHQpO1xuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHN1YnNjcmliZShwYXJlbnQsIGNoaWxkLCBvbkZ1bGZpbGxtZW50LCBvblJlamVjdGlvbik7XG4gICAgfVxuXG4gICAgcmV0dXJuIGNoaWxkO1xuICB9XG5cbiAgLyoqXG4gICAgYFByb21pc2UucmVzb2x2ZWAgcmV0dXJucyBhIHByb21pc2UgdGhhdCB3aWxsIGJlY29tZSByZXNvbHZlZCB3aXRoIHRoZVxuICAgIHBhc3NlZCBgdmFsdWVgLiBJdCBpcyBzaG9ydGhhbmQgZm9yIHRoZSBmb2xsb3dpbmc6XG5cbiAgICBgYGBqYXZhc2NyaXB0XG4gICAgbGV0IHByb21pc2UgPSBuZXcgUHJvbWlzZShmdW5jdGlvbihyZXNvbHZlLCByZWplY3Qpe1xuICAgICAgcmVzb2x2ZSgxKTtcbiAgICB9KTtcblxuICAgIHByb21pc2UudGhlbihmdW5jdGlvbih2YWx1ZSl7XG4gICAgICAvLyB2YWx1ZSA9PT0gMVxuICAgIH0pO1xuICAgIGBgYFxuXG4gICAgSW5zdGVhZCBvZiB3cml0aW5nIHRoZSBhYm92ZSwgeW91ciBjb2RlIG5vdyBzaW1wbHkgYmVjb21lcyB0aGUgZm9sbG93aW5nOlxuXG4gICAgYGBgamF2YXNjcmlwdFxuICAgIGxldCBwcm9taXNlID0gUHJvbWlzZS5yZXNvbHZlKDEpO1xuXG4gICAgcHJvbWlzZS50aGVuKGZ1bmN0aW9uKHZhbHVlKXtcbiAgICAgIC8vIHZhbHVlID09PSAxXG4gICAgfSk7XG4gICAgYGBgXG5cbiAgICBAbWV0aG9kIHJlc29sdmVcbiAgICBAc3RhdGljXG4gICAgQHBhcmFtIHtBbnl9IHZhbHVlIHZhbHVlIHRoYXQgdGhlIHJldHVybmVkIHByb21pc2Ugd2lsbCBiZSByZXNvbHZlZCB3aXRoXG4gICAgVXNlZnVsIGZvciB0b29saW5nLlxuICAgIEByZXR1cm4ge1Byb21pc2V9IGEgcHJvbWlzZSB0aGF0IHdpbGwgYmVjb21lIGZ1bGZpbGxlZCB3aXRoIHRoZSBnaXZlblxuICAgIGB2YWx1ZWBcbiAgKi9cbiAgZnVuY3Rpb24gcmVzb2x2ZSQxKG9iamVjdCkge1xuICAgIC8qanNoaW50IHZhbGlkdGhpczp0cnVlICovXG4gICAgdmFyIENvbnN0cnVjdG9yID0gdGhpcztcblxuICAgIGlmIChvYmplY3QgJiYgKHR5cGVvZiBvYmplY3QgPT09ICd1bmRlZmluZWQnID8gJ3VuZGVmaW5lZCcgOiBfdHlwZW9mKG9iamVjdCkpID09PSAnb2JqZWN0JyAmJiBvYmplY3QuY29uc3RydWN0b3IgPT09IENvbnN0cnVjdG9yKSB7XG4gICAgICByZXR1cm4gb2JqZWN0O1xuICAgIH1cblxuICAgIHZhciBwcm9taXNlID0gbmV3IENvbnN0cnVjdG9yKG5vb3ApO1xuICAgIHJlc29sdmUocHJvbWlzZSwgb2JqZWN0KTtcbiAgICByZXR1cm4gcHJvbWlzZTtcbiAgfVxuXG4gIHZhciBQUk9NSVNFX0lEID0gTWF0aC5yYW5kb20oKS50b1N0cmluZygzNikuc3Vic3RyaW5nKDIpO1xuXG4gIGZ1bmN0aW9uIG5vb3AoKSB7fVxuXG4gIHZhciBQRU5ESU5HID0gdm9pZCAwO1xuICB2YXIgRlVMRklMTEVEID0gMTtcbiAgdmFyIFJFSkVDVEVEID0gMjtcblxuICBmdW5jdGlvbiBzZWxmRnVsZmlsbG1lbnQoKSB7XG4gICAgcmV0dXJuIG5ldyBUeXBlRXJyb3IoXCJZb3UgY2Fubm90IHJlc29sdmUgYSBwcm9taXNlIHdpdGggaXRzZWxmXCIpO1xuICB9XG5cbiAgZnVuY3Rpb24gY2Fubm90UmV0dXJuT3duKCkge1xuICAgIHJldHVybiBuZXcgVHlwZUVycm9yKCdBIHByb21pc2VzIGNhbGxiYWNrIGNhbm5vdCByZXR1cm4gdGhhdCBzYW1lIHByb21pc2UuJyk7XG4gIH1cblxuICBmdW5jdGlvbiB0cnlUaGVuKHRoZW4kJDEsIHZhbHVlLCBmdWxmaWxsbWVudEhhbmRsZXIsIHJlamVjdGlvbkhhbmRsZXIpIHtcbiAgICB0cnkge1xuICAgICAgdGhlbiQkMS5jYWxsKHZhbHVlLCBmdWxmaWxsbWVudEhhbmRsZXIsIHJlamVjdGlvbkhhbmRsZXIpO1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIHJldHVybiBlO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIGhhbmRsZUZvcmVpZ25UaGVuYWJsZShwcm9taXNlLCB0aGVuYWJsZSwgdGhlbiQkMSkge1xuICAgIGFzYXAoZnVuY3Rpb24gKHByb21pc2UpIHtcbiAgICAgIHZhciBzZWFsZWQgPSBmYWxzZTtcbiAgICAgIHZhciBlcnJvciA9IHRyeVRoZW4odGhlbiQkMSwgdGhlbmFibGUsIGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICBpZiAoc2VhbGVkKSB7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHNlYWxlZCA9IHRydWU7XG4gICAgICAgIGlmICh0aGVuYWJsZSAhPT0gdmFsdWUpIHtcbiAgICAgICAgICByZXNvbHZlKHByb21pc2UsIHZhbHVlKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBmdWxmaWxsKHByb21pc2UsIHZhbHVlKTtcbiAgICAgICAgfVxuICAgICAgfSwgZnVuY3Rpb24gKHJlYXNvbikge1xuICAgICAgICBpZiAoc2VhbGVkKSB7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHNlYWxlZCA9IHRydWU7XG5cbiAgICAgICAgcmVqZWN0KHByb21pc2UsIHJlYXNvbik7XG4gICAgICB9LCAnU2V0dGxlOiAnICsgKHByb21pc2UuX2xhYmVsIHx8ICcgdW5rbm93biBwcm9taXNlJykpO1xuXG4gICAgICBpZiAoIXNlYWxlZCAmJiBlcnJvcikge1xuICAgICAgICBzZWFsZWQgPSB0cnVlO1xuICAgICAgICByZWplY3QocHJvbWlzZSwgZXJyb3IpO1xuICAgICAgfVxuICAgIH0sIHByb21pc2UpO1xuICB9XG5cbiAgZnVuY3Rpb24gaGFuZGxlT3duVGhlbmFibGUocHJvbWlzZSwgdGhlbmFibGUpIHtcbiAgICBpZiAodGhlbmFibGUuX3N0YXRlID09PSBGVUxGSUxMRUQpIHtcbiAgICAgIGZ1bGZpbGwocHJvbWlzZSwgdGhlbmFibGUuX3Jlc3VsdCk7XG4gICAgfSBlbHNlIGlmICh0aGVuYWJsZS5fc3RhdGUgPT09IFJFSkVDVEVEKSB7XG4gICAgICByZWplY3QocHJvbWlzZSwgdGhlbmFibGUuX3Jlc3VsdCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHN1YnNjcmliZSh0aGVuYWJsZSwgdW5kZWZpbmVkLCBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgcmV0dXJuIHJlc29sdmUocHJvbWlzZSwgdmFsdWUpO1xuICAgICAgfSwgZnVuY3Rpb24gKHJlYXNvbikge1xuICAgICAgICByZXR1cm4gcmVqZWN0KHByb21pc2UsIHJlYXNvbik7XG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBoYW5kbGVNYXliZVRoZW5hYmxlKHByb21pc2UsIG1heWJlVGhlbmFibGUsIHRoZW4kJDEpIHtcbiAgICBpZiAobWF5YmVUaGVuYWJsZS5jb25zdHJ1Y3RvciA9PT0gcHJvbWlzZS5jb25zdHJ1Y3RvciAmJiB0aGVuJCQxID09PSB0aGVuICYmIG1heWJlVGhlbmFibGUuY29uc3RydWN0b3IucmVzb2x2ZSA9PT0gcmVzb2x2ZSQxKSB7XG4gICAgICBoYW5kbGVPd25UaGVuYWJsZShwcm9taXNlLCBtYXliZVRoZW5hYmxlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKHRoZW4kJDEgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICBmdWxmaWxsKHByb21pc2UsIG1heWJlVGhlbmFibGUpO1xuICAgICAgfSBlbHNlIGlmIChpc0Z1bmN0aW9uKHRoZW4kJDEpKSB7XG4gICAgICAgIGhhbmRsZUZvcmVpZ25UaGVuYWJsZShwcm9taXNlLCBtYXliZVRoZW5hYmxlLCB0aGVuJCQxKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGZ1bGZpbGwocHJvbWlzZSwgbWF5YmVUaGVuYWJsZSk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gcmVzb2x2ZShwcm9taXNlLCB2YWx1ZSkge1xuICAgIGlmIChwcm9taXNlID09PSB2YWx1ZSkge1xuICAgICAgcmVqZWN0KHByb21pc2UsIHNlbGZGdWxmaWxsbWVudCgpKTtcbiAgICB9IGVsc2UgaWYgKG9iamVjdE9yRnVuY3Rpb24odmFsdWUpKSB7XG4gICAgICB2YXIgdGhlbiQkMSA9IHZvaWQgMDtcbiAgICAgIHRyeSB7XG4gICAgICAgIHRoZW4kJDEgPSB2YWx1ZS50aGVuO1xuICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgcmVqZWN0KHByb21pc2UsIGVycm9yKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgaGFuZGxlTWF5YmVUaGVuYWJsZShwcm9taXNlLCB2YWx1ZSwgdGhlbiQkMSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGZ1bGZpbGwocHJvbWlzZSwgdmFsdWUpO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIHB1Ymxpc2hSZWplY3Rpb24ocHJvbWlzZSkge1xuICAgIGlmIChwcm9taXNlLl9vbmVycm9yKSB7XG4gICAgICBwcm9taXNlLl9vbmVycm9yKHByb21pc2UuX3Jlc3VsdCk7XG4gICAgfVxuXG4gICAgcHVibGlzaChwcm9taXNlKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGZ1bGZpbGwocHJvbWlzZSwgdmFsdWUpIHtcbiAgICBpZiAocHJvbWlzZS5fc3RhdGUgIT09IFBFTkRJTkcpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBwcm9taXNlLl9yZXN1bHQgPSB2YWx1ZTtcbiAgICBwcm9taXNlLl9zdGF0ZSA9IEZVTEZJTExFRDtcblxuICAgIGlmIChwcm9taXNlLl9zdWJzY3JpYmVycy5sZW5ndGggIT09IDApIHtcbiAgICAgIGFzYXAocHVibGlzaCwgcHJvbWlzZSk7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gcmVqZWN0KHByb21pc2UsIHJlYXNvbikge1xuICAgIGlmIChwcm9taXNlLl9zdGF0ZSAhPT0gUEVORElORykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBwcm9taXNlLl9zdGF0ZSA9IFJFSkVDVEVEO1xuICAgIHByb21pc2UuX3Jlc3VsdCA9IHJlYXNvbjtcblxuICAgIGFzYXAocHVibGlzaFJlamVjdGlvbiwgcHJvbWlzZSk7XG4gIH1cblxuICBmdW5jdGlvbiBzdWJzY3JpYmUocGFyZW50LCBjaGlsZCwgb25GdWxmaWxsbWVudCwgb25SZWplY3Rpb24pIHtcbiAgICB2YXIgX3N1YnNjcmliZXJzID0gcGFyZW50Ll9zdWJzY3JpYmVycztcbiAgICB2YXIgbGVuZ3RoID0gX3N1YnNjcmliZXJzLmxlbmd0aDtcblxuXG4gICAgcGFyZW50Ll9vbmVycm9yID0gbnVsbDtcblxuICAgIF9zdWJzY3JpYmVyc1tsZW5ndGhdID0gY2hpbGQ7XG4gICAgX3N1YnNjcmliZXJzW2xlbmd0aCArIEZVTEZJTExFRF0gPSBvbkZ1bGZpbGxtZW50O1xuICAgIF9zdWJzY3JpYmVyc1tsZW5ndGggKyBSRUpFQ1RFRF0gPSBvblJlamVjdGlvbjtcblxuICAgIGlmIChsZW5ndGggPT09IDAgJiYgcGFyZW50Ll9zdGF0ZSkge1xuICAgICAgYXNhcChwdWJsaXNoLCBwYXJlbnQpO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIHB1Ymxpc2gocHJvbWlzZSkge1xuICAgIHZhciBzdWJzY3JpYmVycyA9IHByb21pc2UuX3N1YnNjcmliZXJzO1xuICAgIHZhciBzZXR0bGVkID0gcHJvbWlzZS5fc3RhdGU7XG5cbiAgICBpZiAoc3Vic2NyaWJlcnMubGVuZ3RoID09PSAwKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdmFyIGNoaWxkID0gdm9pZCAwLFxuICAgICAgICBjYWxsYmFjayA9IHZvaWQgMCxcbiAgICAgICAgZGV0YWlsID0gcHJvbWlzZS5fcmVzdWx0O1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdWJzY3JpYmVycy5sZW5ndGg7IGkgKz0gMykge1xuICAgICAgY2hpbGQgPSBzdWJzY3JpYmVyc1tpXTtcbiAgICAgIGNhbGxiYWNrID0gc3Vic2NyaWJlcnNbaSArIHNldHRsZWRdO1xuXG4gICAgICBpZiAoY2hpbGQpIHtcbiAgICAgICAgaW52b2tlQ2FsbGJhY2soc2V0dGxlZCwgY2hpbGQsIGNhbGxiYWNrLCBkZXRhaWwpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY2FsbGJhY2soZGV0YWlsKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBwcm9taXNlLl9zdWJzY3JpYmVycy5sZW5ndGggPSAwO1xuICB9XG5cbiAgZnVuY3Rpb24gaW52b2tlQ2FsbGJhY2soc2V0dGxlZCwgcHJvbWlzZSwgY2FsbGJhY2ssIGRldGFpbCkge1xuICAgIHZhciBoYXNDYWxsYmFjayA9IGlzRnVuY3Rpb24oY2FsbGJhY2spLFxuICAgICAgICB2YWx1ZSA9IHZvaWQgMCxcbiAgICAgICAgZXJyb3IgPSB2b2lkIDAsXG4gICAgICAgIHN1Y2NlZWRlZCA9IHRydWU7XG5cbiAgICBpZiAoaGFzQ2FsbGJhY2spIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIHZhbHVlID0gY2FsbGJhY2soZGV0YWlsKTtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgc3VjY2VlZGVkID0gZmFsc2U7XG4gICAgICAgIGVycm9yID0gZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHByb21pc2UgPT09IHZhbHVlKSB7XG4gICAgICAgIHJlamVjdChwcm9taXNlLCBjYW5ub3RSZXR1cm5Pd24oKSk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgdmFsdWUgPSBkZXRhaWw7XG4gICAgfVxuXG4gICAgaWYgKHByb21pc2UuX3N0YXRlICE9PSBQRU5ESU5HKSB7XG4gICAgICAvLyBub29wXG4gICAgfSBlbHNlIGlmIChoYXNDYWxsYmFjayAmJiBzdWNjZWVkZWQpIHtcbiAgICAgIHJlc29sdmUocHJvbWlzZSwgdmFsdWUpO1xuICAgIH0gZWxzZSBpZiAoc3VjY2VlZGVkID09PSBmYWxzZSkge1xuICAgICAgcmVqZWN0KHByb21pc2UsIGVycm9yKTtcbiAgICB9IGVsc2UgaWYgKHNldHRsZWQgPT09IEZVTEZJTExFRCkge1xuICAgICAgZnVsZmlsbChwcm9taXNlLCB2YWx1ZSk7XG4gICAgfSBlbHNlIGlmIChzZXR0bGVkID09PSBSRUpFQ1RFRCkge1xuICAgICAgcmVqZWN0KHByb21pc2UsIHZhbHVlKTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBpbml0aWFsaXplUHJvbWlzZShwcm9taXNlLCByZXNvbHZlcikge1xuICAgIHRyeSB7XG4gICAgICByZXNvbHZlcihmdW5jdGlvbiByZXNvbHZlUHJvbWlzZSh2YWx1ZSkge1xuICAgICAgICByZXNvbHZlKHByb21pc2UsIHZhbHVlKTtcbiAgICAgIH0sIGZ1bmN0aW9uIHJlamVjdFByb21pc2UocmVhc29uKSB7XG4gICAgICAgIHJlamVjdChwcm9taXNlLCByZWFzb24pO1xuICAgICAgfSk7XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgcmVqZWN0KHByb21pc2UsIGUpO1xuICAgIH1cbiAgfVxuXG4gIHZhciBpZCA9IDA7XG4gIGZ1bmN0aW9uIG5leHRJZCgpIHtcbiAgICByZXR1cm4gaWQrKztcbiAgfVxuXG4gIGZ1bmN0aW9uIG1ha2VQcm9taXNlKHByb21pc2UpIHtcbiAgICBwcm9taXNlW1BST01JU0VfSURdID0gaWQrKztcbiAgICBwcm9taXNlLl9zdGF0ZSA9IHVuZGVmaW5lZDtcbiAgICBwcm9taXNlLl9yZXN1bHQgPSB1bmRlZmluZWQ7XG4gICAgcHJvbWlzZS5fc3Vic2NyaWJlcnMgPSBbXTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHZhbGlkYXRpb25FcnJvcigpIHtcbiAgICByZXR1cm4gbmV3IEVycm9yKCdBcnJheSBNZXRob2RzIG11c3QgYmUgcHJvdmlkZWQgYW4gQXJyYXknKTtcbiAgfVxuXG4gIHZhciBFbnVtZXJhdG9yID0gZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIEVudW1lcmF0b3IoQ29uc3RydWN0b3IsIGlucHV0KSB7XG4gICAgICBjbGFzc0NhbGxDaGVjayh0aGlzLCBFbnVtZXJhdG9yKTtcblxuICAgICAgdGhpcy5faW5zdGFuY2VDb25zdHJ1Y3RvciA9IENvbnN0cnVjdG9yO1xuICAgICAgdGhpcy5wcm9taXNlID0gbmV3IENvbnN0cnVjdG9yKG5vb3ApO1xuXG4gICAgICBpZiAoIXRoaXMucHJvbWlzZVtQUk9NSVNFX0lEXSkge1xuICAgICAgICBtYWtlUHJvbWlzZSh0aGlzLnByb21pc2UpO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXNBcnJheShpbnB1dCkpIHtcbiAgICAgICAgdGhpcy5sZW5ndGggPSBpbnB1dC5sZW5ndGg7XG4gICAgICAgIHRoaXMuX3JlbWFpbmluZyA9IGlucHV0Lmxlbmd0aDtcblxuICAgICAgICB0aGlzLl9yZXN1bHQgPSBuZXcgQXJyYXkodGhpcy5sZW5ndGgpO1xuXG4gICAgICAgIGlmICh0aGlzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgIGZ1bGZpbGwodGhpcy5wcm9taXNlLCB0aGlzLl9yZXN1bHQpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRoaXMubGVuZ3RoID0gdGhpcy5sZW5ndGggfHwgMDtcbiAgICAgICAgICB0aGlzLl9lbnVtZXJhdGUoaW5wdXQpO1xuICAgICAgICAgIGlmICh0aGlzLl9yZW1haW5pbmcgPT09IDApIHtcbiAgICAgICAgICAgIGZ1bGZpbGwodGhpcy5wcm9taXNlLCB0aGlzLl9yZXN1bHQpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmVqZWN0KHRoaXMucHJvbWlzZSwgdmFsaWRhdGlvbkVycm9yKCkpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGNyZWF0ZUNsYXNzKEVudW1lcmF0b3IsIFt7XG4gICAgICBrZXk6ICdfZW51bWVyYXRlJyxcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiBfZW51bWVyYXRlKGlucHV0KSB7XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyB0aGlzLl9zdGF0ZSA9PT0gUEVORElORyAmJiBpIDwgaW5wdXQubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICB0aGlzLl9lYWNoRW50cnkoaW5wdXRbaV0sIGkpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSwge1xuICAgICAga2V5OiAnX2VhY2hFbnRyeScsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gX2VhY2hFbnRyeShlbnRyeSwgaSkge1xuICAgICAgICB2YXIgYyA9IHRoaXMuX2luc3RhbmNlQ29uc3RydWN0b3I7XG4gICAgICAgIHZhciByZXNvbHZlJCQxID0gYy5yZXNvbHZlO1xuXG5cbiAgICAgICAgaWYgKHJlc29sdmUkJDEgPT09IHJlc29sdmUkMSkge1xuICAgICAgICAgIHZhciBfdGhlbiA9IHZvaWQgMDtcbiAgICAgICAgICB2YXIgZXJyb3IgPSB2b2lkIDA7XG4gICAgICAgICAgdmFyIGRpZEVycm9yID0gZmFsc2U7XG4gICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIF90aGVuID0gZW50cnkudGhlbjtcbiAgICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgICBkaWRFcnJvciA9IHRydWU7XG4gICAgICAgICAgICBlcnJvciA9IGU7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYgKF90aGVuID09PSB0aGVuICYmIGVudHJ5Ll9zdGF0ZSAhPT0gUEVORElORykge1xuICAgICAgICAgICAgdGhpcy5fc2V0dGxlZEF0KGVudHJ5Ll9zdGF0ZSwgaSwgZW50cnkuX3Jlc3VsdCk7XG4gICAgICAgICAgfSBlbHNlIGlmICh0eXBlb2YgX3RoZW4gIT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIHRoaXMuX3JlbWFpbmluZy0tO1xuICAgICAgICAgICAgdGhpcy5fcmVzdWx0W2ldID0gZW50cnk7XG4gICAgICAgICAgfSBlbHNlIGlmIChjID09PSBQcm9taXNlJDIpIHtcbiAgICAgICAgICAgIHZhciBwcm9taXNlID0gbmV3IGMobm9vcCk7XG4gICAgICAgICAgICBpZiAoZGlkRXJyb3IpIHtcbiAgICAgICAgICAgICAgcmVqZWN0KHByb21pc2UsIGVycm9yKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIGhhbmRsZU1heWJlVGhlbmFibGUocHJvbWlzZSwgZW50cnksIF90aGVuKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuX3dpbGxTZXR0bGVBdChwcm9taXNlLCBpKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5fd2lsbFNldHRsZUF0KG5ldyBjKGZ1bmN0aW9uIChyZXNvbHZlJCQxKSB7XG4gICAgICAgICAgICAgIHJldHVybiByZXNvbHZlJCQxKGVudHJ5KTtcbiAgICAgICAgICAgIH0pLCBpKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhpcy5fd2lsbFNldHRsZUF0KHJlc29sdmUkJDEoZW50cnkpLCBpKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sIHtcbiAgICAgIGtleTogJ19zZXR0bGVkQXQnLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIF9zZXR0bGVkQXQoc3RhdGUsIGksIHZhbHVlKSB7XG4gICAgICAgIHZhciBwcm9taXNlID0gdGhpcy5wcm9taXNlO1xuXG5cbiAgICAgICAgaWYgKHByb21pc2UuX3N0YXRlID09PSBQRU5ESU5HKSB7XG4gICAgICAgICAgdGhpcy5fcmVtYWluaW5nLS07XG5cbiAgICAgICAgICBpZiAoc3RhdGUgPT09IFJFSkVDVEVEKSB7XG4gICAgICAgICAgICByZWplY3QocHJvbWlzZSwgdmFsdWUpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLl9yZXN1bHRbaV0gPSB2YWx1ZTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5fcmVtYWluaW5nID09PSAwKSB7XG4gICAgICAgICAgZnVsZmlsbChwcm9taXNlLCB0aGlzLl9yZXN1bHQpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSwge1xuICAgICAga2V5OiAnX3dpbGxTZXR0bGVBdCcsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gX3dpbGxTZXR0bGVBdChwcm9taXNlLCBpKSB7XG4gICAgICAgIHZhciBlbnVtZXJhdG9yID0gdGhpcztcblxuICAgICAgICBzdWJzY3JpYmUocHJvbWlzZSwgdW5kZWZpbmVkLCBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgICByZXR1cm4gZW51bWVyYXRvci5fc2V0dGxlZEF0KEZVTEZJTExFRCwgaSwgdmFsdWUpO1xuICAgICAgICB9LCBmdW5jdGlvbiAocmVhc29uKSB7XG4gICAgICAgICAgcmV0dXJuIGVudW1lcmF0b3IuX3NldHRsZWRBdChSRUpFQ1RFRCwgaSwgcmVhc29uKTtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfV0pO1xuICAgIHJldHVybiBFbnVtZXJhdG9yO1xuICB9KCk7XG5cbiAgLyoqXG4gICAgYFByb21pc2UuYWxsYCBhY2NlcHRzIGFuIGFycmF5IG9mIHByb21pc2VzLCBhbmQgcmV0dXJucyBhIG5ldyBwcm9taXNlIHdoaWNoXG4gICAgaXMgZnVsZmlsbGVkIHdpdGggYW4gYXJyYXkgb2YgZnVsZmlsbG1lbnQgdmFsdWVzIGZvciB0aGUgcGFzc2VkIHByb21pc2VzLCBvclxuICAgIHJlamVjdGVkIHdpdGggdGhlIHJlYXNvbiBvZiB0aGUgZmlyc3QgcGFzc2VkIHByb21pc2UgdG8gYmUgcmVqZWN0ZWQuIEl0IGNhc3RzIGFsbFxuICAgIGVsZW1lbnRzIG9mIHRoZSBwYXNzZWQgaXRlcmFibGUgdG8gcHJvbWlzZXMgYXMgaXQgcnVucyB0aGlzIGFsZ29yaXRobS5cblxuICAgIEV4YW1wbGU6XG5cbiAgICBgYGBqYXZhc2NyaXB0XG4gICAgbGV0IHByb21pc2UxID0gcmVzb2x2ZSgxKTtcbiAgICBsZXQgcHJvbWlzZTIgPSByZXNvbHZlKDIpO1xuICAgIGxldCBwcm9taXNlMyA9IHJlc29sdmUoMyk7XG4gICAgbGV0IHByb21pc2VzID0gWyBwcm9taXNlMSwgcHJvbWlzZTIsIHByb21pc2UzIF07XG5cbiAgICBQcm9taXNlLmFsbChwcm9taXNlcykudGhlbihmdW5jdGlvbihhcnJheSl7XG4gICAgICAvLyBUaGUgYXJyYXkgaGVyZSB3b3VsZCBiZSBbIDEsIDIsIDMgXTtcbiAgICB9KTtcbiAgICBgYGBcblxuICAgIElmIGFueSBvZiB0aGUgYHByb21pc2VzYCBnaXZlbiB0byBgYWxsYCBhcmUgcmVqZWN0ZWQsIHRoZSBmaXJzdCBwcm9taXNlXG4gICAgdGhhdCBpcyByZWplY3RlZCB3aWxsIGJlIGdpdmVuIGFzIGFuIGFyZ3VtZW50IHRvIHRoZSByZXR1cm5lZCBwcm9taXNlcydzXG4gICAgcmVqZWN0aW9uIGhhbmRsZXIuIEZvciBleGFtcGxlOlxuXG4gICAgRXhhbXBsZTpcblxuICAgIGBgYGphdmFzY3JpcHRcbiAgICBsZXQgcHJvbWlzZTEgPSByZXNvbHZlKDEpO1xuICAgIGxldCBwcm9taXNlMiA9IHJlamVjdChuZXcgRXJyb3IoXCIyXCIpKTtcbiAgICBsZXQgcHJvbWlzZTMgPSByZWplY3QobmV3IEVycm9yKFwiM1wiKSk7XG4gICAgbGV0IHByb21pc2VzID0gWyBwcm9taXNlMSwgcHJvbWlzZTIsIHByb21pc2UzIF07XG5cbiAgICBQcm9taXNlLmFsbChwcm9taXNlcykudGhlbihmdW5jdGlvbihhcnJheSl7XG4gICAgICAvLyBDb2RlIGhlcmUgbmV2ZXIgcnVucyBiZWNhdXNlIHRoZXJlIGFyZSByZWplY3RlZCBwcm9taXNlcyFcbiAgICB9LCBmdW5jdGlvbihlcnJvcikge1xuICAgICAgLy8gZXJyb3IubWVzc2FnZSA9PT0gXCIyXCJcbiAgICB9KTtcbiAgICBgYGBcblxuICAgIEBtZXRob2QgYWxsXG4gICAgQHN0YXRpY1xuICAgIEBwYXJhbSB7QXJyYXl9IGVudHJpZXMgYXJyYXkgb2YgcHJvbWlzZXNcbiAgICBAcGFyYW0ge1N0cmluZ30gbGFiZWwgb3B0aW9uYWwgc3RyaW5nIGZvciBsYWJlbGluZyB0aGUgcHJvbWlzZS5cbiAgICBVc2VmdWwgZm9yIHRvb2xpbmcuXG4gICAgQHJldHVybiB7UHJvbWlzZX0gcHJvbWlzZSB0aGF0IGlzIGZ1bGZpbGxlZCB3aGVuIGFsbCBgcHJvbWlzZXNgIGhhdmUgYmVlblxuICAgIGZ1bGZpbGxlZCwgb3IgcmVqZWN0ZWQgaWYgYW55IG9mIHRoZW0gYmVjb21lIHJlamVjdGVkLlxuICAgIEBzdGF0aWNcbiAgKi9cbiAgZnVuY3Rpb24gYWxsKGVudHJpZXMpIHtcbiAgICByZXR1cm4gbmV3IEVudW1lcmF0b3IodGhpcywgZW50cmllcykucHJvbWlzZTtcbiAgfVxuXG4gIC8qKlxuICAgIGBQcm9taXNlLnJhY2VgIHJldHVybnMgYSBuZXcgcHJvbWlzZSB3aGljaCBpcyBzZXR0bGVkIGluIHRoZSBzYW1lIHdheSBhcyB0aGVcbiAgICBmaXJzdCBwYXNzZWQgcHJvbWlzZSB0byBzZXR0bGUuXG5cbiAgICBFeGFtcGxlOlxuXG4gICAgYGBgamF2YXNjcmlwdFxuICAgIGxldCBwcm9taXNlMSA9IG5ldyBQcm9taXNlKGZ1bmN0aW9uKHJlc29sdmUsIHJlamVjdCl7XG4gICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7XG4gICAgICAgIHJlc29sdmUoJ3Byb21pc2UgMScpO1xuICAgICAgfSwgMjAwKTtcbiAgICB9KTtcblxuICAgIGxldCBwcm9taXNlMiA9IG5ldyBQcm9taXNlKGZ1bmN0aW9uKHJlc29sdmUsIHJlamVjdCl7XG4gICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7XG4gICAgICAgIHJlc29sdmUoJ3Byb21pc2UgMicpO1xuICAgICAgfSwgMTAwKTtcbiAgICB9KTtcblxuICAgIFByb21pc2UucmFjZShbcHJvbWlzZTEsIHByb21pc2UyXSkudGhlbihmdW5jdGlvbihyZXN1bHQpe1xuICAgICAgLy8gcmVzdWx0ID09PSAncHJvbWlzZSAyJyBiZWNhdXNlIGl0IHdhcyByZXNvbHZlZCBiZWZvcmUgcHJvbWlzZTFcbiAgICAgIC8vIHdhcyByZXNvbHZlZC5cbiAgICB9KTtcbiAgICBgYGBcblxuICAgIGBQcm9taXNlLnJhY2VgIGlzIGRldGVybWluaXN0aWMgaW4gdGhhdCBvbmx5IHRoZSBzdGF0ZSBvZiB0aGUgZmlyc3RcbiAgICBzZXR0bGVkIHByb21pc2UgbWF0dGVycy4gRm9yIGV4YW1wbGUsIGV2ZW4gaWYgb3RoZXIgcHJvbWlzZXMgZ2l2ZW4gdG8gdGhlXG4gICAgYHByb21pc2VzYCBhcnJheSBhcmd1bWVudCBhcmUgcmVzb2x2ZWQsIGJ1dCB0aGUgZmlyc3Qgc2V0dGxlZCBwcm9taXNlIGhhc1xuICAgIGJlY29tZSByZWplY3RlZCBiZWZvcmUgdGhlIG90aGVyIHByb21pc2VzIGJlY2FtZSBmdWxmaWxsZWQsIHRoZSByZXR1cm5lZFxuICAgIHByb21pc2Ugd2lsbCBiZWNvbWUgcmVqZWN0ZWQ6XG5cbiAgICBgYGBqYXZhc2NyaXB0XG4gICAgbGV0IHByb21pc2UxID0gbmV3IFByb21pc2UoZnVuY3Rpb24ocmVzb2x2ZSwgcmVqZWN0KXtcbiAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKXtcbiAgICAgICAgcmVzb2x2ZSgncHJvbWlzZSAxJyk7XG4gICAgICB9LCAyMDApO1xuICAgIH0pO1xuXG4gICAgbGV0IHByb21pc2UyID0gbmV3IFByb21pc2UoZnVuY3Rpb24ocmVzb2x2ZSwgcmVqZWN0KXtcbiAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKXtcbiAgICAgICAgcmVqZWN0KG5ldyBFcnJvcigncHJvbWlzZSAyJykpO1xuICAgICAgfSwgMTAwKTtcbiAgICB9KTtcblxuICAgIFByb21pc2UucmFjZShbcHJvbWlzZTEsIHByb21pc2UyXSkudGhlbihmdW5jdGlvbihyZXN1bHQpe1xuICAgICAgLy8gQ29kZSBoZXJlIG5ldmVyIHJ1bnNcbiAgICB9LCBmdW5jdGlvbihyZWFzb24pe1xuICAgICAgLy8gcmVhc29uLm1lc3NhZ2UgPT09ICdwcm9taXNlIDInIGJlY2F1c2UgcHJvbWlzZSAyIGJlY2FtZSByZWplY3RlZCBiZWZvcmVcbiAgICAgIC8vIHByb21pc2UgMSBiZWNhbWUgZnVsZmlsbGVkXG4gICAgfSk7XG4gICAgYGBgXG5cbiAgICBBbiBleGFtcGxlIHJlYWwtd29ybGQgdXNlIGNhc2UgaXMgaW1wbGVtZW50aW5nIHRpbWVvdXRzOlxuXG4gICAgYGBgamF2YXNjcmlwdFxuICAgIFByb21pc2UucmFjZShbYWpheCgnZm9vLmpzb24nKSwgdGltZW91dCg1MDAwKV0pXG4gICAgYGBgXG5cbiAgICBAbWV0aG9kIHJhY2VcbiAgICBAc3RhdGljXG4gICAgQHBhcmFtIHtBcnJheX0gcHJvbWlzZXMgYXJyYXkgb2YgcHJvbWlzZXMgdG8gb2JzZXJ2ZVxuICAgIFVzZWZ1bCBmb3IgdG9vbGluZy5cbiAgICBAcmV0dXJuIHtQcm9taXNlfSBhIHByb21pc2Ugd2hpY2ggc2V0dGxlcyBpbiB0aGUgc2FtZSB3YXkgYXMgdGhlIGZpcnN0IHBhc3NlZFxuICAgIHByb21pc2UgdG8gc2V0dGxlLlxuICAqL1xuICBmdW5jdGlvbiByYWNlKGVudHJpZXMpIHtcbiAgICAvKmpzaGludCB2YWxpZHRoaXM6dHJ1ZSAqL1xuICAgIHZhciBDb25zdHJ1Y3RvciA9IHRoaXM7XG5cbiAgICBpZiAoIWlzQXJyYXkoZW50cmllcykpIHtcbiAgICAgIHJldHVybiBuZXcgQ29uc3RydWN0b3IoZnVuY3Rpb24gKF8sIHJlamVjdCkge1xuICAgICAgICByZXR1cm4gcmVqZWN0KG5ldyBUeXBlRXJyb3IoJ1lvdSBtdXN0IHBhc3MgYW4gYXJyYXkgdG8gcmFjZS4nKSk7XG4gICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIG5ldyBDb25zdHJ1Y3RvcihmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgIHZhciBsZW5ndGggPSBlbnRyaWVzLmxlbmd0aDtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgICAgICAgIENvbnN0cnVjdG9yLnJlc29sdmUoZW50cmllc1tpXSkudGhlbihyZXNvbHZlLCByZWplY3QpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICBgUHJvbWlzZS5yZWplY3RgIHJldHVybnMgYSBwcm9taXNlIHJlamVjdGVkIHdpdGggdGhlIHBhc3NlZCBgcmVhc29uYC5cbiAgICBJdCBpcyBzaG9ydGhhbmQgZm9yIHRoZSBmb2xsb3dpbmc6XG5cbiAgICBgYGBqYXZhc2NyaXB0XG4gICAgbGV0IHByb21pc2UgPSBuZXcgUHJvbWlzZShmdW5jdGlvbihyZXNvbHZlLCByZWplY3Qpe1xuICAgICAgcmVqZWN0KG5ldyBFcnJvcignV0hPT1BTJykpO1xuICAgIH0pO1xuXG4gICAgcHJvbWlzZS50aGVuKGZ1bmN0aW9uKHZhbHVlKXtcbiAgICAgIC8vIENvZGUgaGVyZSBkb2Vzbid0IHJ1biBiZWNhdXNlIHRoZSBwcm9taXNlIGlzIHJlamVjdGVkIVxuICAgIH0sIGZ1bmN0aW9uKHJlYXNvbil7XG4gICAgICAvLyByZWFzb24ubWVzc2FnZSA9PT0gJ1dIT09QUydcbiAgICB9KTtcbiAgICBgYGBcblxuICAgIEluc3RlYWQgb2Ygd3JpdGluZyB0aGUgYWJvdmUsIHlvdXIgY29kZSBub3cgc2ltcGx5IGJlY29tZXMgdGhlIGZvbGxvd2luZzpcblxuICAgIGBgYGphdmFzY3JpcHRcbiAgICBsZXQgcHJvbWlzZSA9IFByb21pc2UucmVqZWN0KG5ldyBFcnJvcignV0hPT1BTJykpO1xuXG4gICAgcHJvbWlzZS50aGVuKGZ1bmN0aW9uKHZhbHVlKXtcbiAgICAgIC8vIENvZGUgaGVyZSBkb2Vzbid0IHJ1biBiZWNhdXNlIHRoZSBwcm9taXNlIGlzIHJlamVjdGVkIVxuICAgIH0sIGZ1bmN0aW9uKHJlYXNvbil7XG4gICAgICAvLyByZWFzb24ubWVzc2FnZSA9PT0gJ1dIT09QUydcbiAgICB9KTtcbiAgICBgYGBcblxuICAgIEBtZXRob2QgcmVqZWN0XG4gICAgQHN0YXRpY1xuICAgIEBwYXJhbSB7QW55fSByZWFzb24gdmFsdWUgdGhhdCB0aGUgcmV0dXJuZWQgcHJvbWlzZSB3aWxsIGJlIHJlamVjdGVkIHdpdGguXG4gICAgVXNlZnVsIGZvciB0b29saW5nLlxuICAgIEByZXR1cm4ge1Byb21pc2V9IGEgcHJvbWlzZSByZWplY3RlZCB3aXRoIHRoZSBnaXZlbiBgcmVhc29uYC5cbiAgKi9cbiAgZnVuY3Rpb24gcmVqZWN0JDEocmVhc29uKSB7XG4gICAgLypqc2hpbnQgdmFsaWR0aGlzOnRydWUgKi9cbiAgICB2YXIgQ29uc3RydWN0b3IgPSB0aGlzO1xuICAgIHZhciBwcm9taXNlID0gbmV3IENvbnN0cnVjdG9yKG5vb3ApO1xuICAgIHJlamVjdChwcm9taXNlLCByZWFzb24pO1xuICAgIHJldHVybiBwcm9taXNlO1xuICB9XG5cbiAgZnVuY3Rpb24gbmVlZHNSZXNvbHZlcigpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdZb3UgbXVzdCBwYXNzIGEgcmVzb2x2ZXIgZnVuY3Rpb24gYXMgdGhlIGZpcnN0IGFyZ3VtZW50IHRvIHRoZSBwcm9taXNlIGNvbnN0cnVjdG9yJyk7XG4gIH1cblxuICBmdW5jdGlvbiBuZWVkc05ldygpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiRmFpbGVkIHRvIGNvbnN0cnVjdCAnUHJvbWlzZSc6IFBsZWFzZSB1c2UgdGhlICduZXcnIG9wZXJhdG9yLCB0aGlzIG9iamVjdCBjb25zdHJ1Y3RvciBjYW5ub3QgYmUgY2FsbGVkIGFzIGEgZnVuY3Rpb24uXCIpO1xuICB9XG5cbiAgLyoqXG4gICAgUHJvbWlzZSBvYmplY3RzIHJlcHJlc2VudCB0aGUgZXZlbnR1YWwgcmVzdWx0IG9mIGFuIGFzeW5jaHJvbm91cyBvcGVyYXRpb24uIFRoZVxuICAgIHByaW1hcnkgd2F5IG9mIGludGVyYWN0aW5nIHdpdGggYSBwcm9taXNlIGlzIHRocm91Z2ggaXRzIGB0aGVuYCBtZXRob2QsIHdoaWNoXG4gICAgcmVnaXN0ZXJzIGNhbGxiYWNrcyB0byByZWNlaXZlIGVpdGhlciBhIHByb21pc2UncyBldmVudHVhbCB2YWx1ZSBvciB0aGUgcmVhc29uXG4gICAgd2h5IHRoZSBwcm9taXNlIGNhbm5vdCBiZSBmdWxmaWxsZWQuXG5cbiAgICBUZXJtaW5vbG9neVxuICAgIC0tLS0tLS0tLS0tXG5cbiAgICAtIGBwcm9taXNlYCBpcyBhbiBvYmplY3Qgb3IgZnVuY3Rpb24gd2l0aCBhIGB0aGVuYCBtZXRob2Qgd2hvc2UgYmVoYXZpb3IgY29uZm9ybXMgdG8gdGhpcyBzcGVjaWZpY2F0aW9uLlxuICAgIC0gYHRoZW5hYmxlYCBpcyBhbiBvYmplY3Qgb3IgZnVuY3Rpb24gdGhhdCBkZWZpbmVzIGEgYHRoZW5gIG1ldGhvZC5cbiAgICAtIGB2YWx1ZWAgaXMgYW55IGxlZ2FsIEphdmFTY3JpcHQgdmFsdWUgKGluY2x1ZGluZyB1bmRlZmluZWQsIGEgdGhlbmFibGUsIG9yIGEgcHJvbWlzZSkuXG4gICAgLSBgZXhjZXB0aW9uYCBpcyBhIHZhbHVlIHRoYXQgaXMgdGhyb3duIHVzaW5nIHRoZSB0aHJvdyBzdGF0ZW1lbnQuXG4gICAgLSBgcmVhc29uYCBpcyBhIHZhbHVlIHRoYXQgaW5kaWNhdGVzIHdoeSBhIHByb21pc2Ugd2FzIHJlamVjdGVkLlxuICAgIC0gYHNldHRsZWRgIHRoZSBmaW5hbCByZXN0aW5nIHN0YXRlIG9mIGEgcHJvbWlzZSwgZnVsZmlsbGVkIG9yIHJlamVjdGVkLlxuXG4gICAgQSBwcm9taXNlIGNhbiBiZSBpbiBvbmUgb2YgdGhyZWUgc3RhdGVzOiBwZW5kaW5nLCBmdWxmaWxsZWQsIG9yIHJlamVjdGVkLlxuXG4gICAgUHJvbWlzZXMgdGhhdCBhcmUgZnVsZmlsbGVkIGhhdmUgYSBmdWxmaWxsbWVudCB2YWx1ZSBhbmQgYXJlIGluIHRoZSBmdWxmaWxsZWRcbiAgICBzdGF0ZS4gIFByb21pc2VzIHRoYXQgYXJlIHJlamVjdGVkIGhhdmUgYSByZWplY3Rpb24gcmVhc29uIGFuZCBhcmUgaW4gdGhlXG4gICAgcmVqZWN0ZWQgc3RhdGUuICBBIGZ1bGZpbGxtZW50IHZhbHVlIGlzIG5ldmVyIGEgdGhlbmFibGUuXG5cbiAgICBQcm9taXNlcyBjYW4gYWxzbyBiZSBzYWlkIHRvICpyZXNvbHZlKiBhIHZhbHVlLiAgSWYgdGhpcyB2YWx1ZSBpcyBhbHNvIGFcbiAgICBwcm9taXNlLCB0aGVuIHRoZSBvcmlnaW5hbCBwcm9taXNlJ3Mgc2V0dGxlZCBzdGF0ZSB3aWxsIG1hdGNoIHRoZSB2YWx1ZSdzXG4gICAgc2V0dGxlZCBzdGF0ZS4gIFNvIGEgcHJvbWlzZSB0aGF0ICpyZXNvbHZlcyogYSBwcm9taXNlIHRoYXQgcmVqZWN0cyB3aWxsXG4gICAgaXRzZWxmIHJlamVjdCwgYW5kIGEgcHJvbWlzZSB0aGF0ICpyZXNvbHZlcyogYSBwcm9taXNlIHRoYXQgZnVsZmlsbHMgd2lsbFxuICAgIGl0c2VsZiBmdWxmaWxsLlxuXG5cbiAgICBCYXNpYyBVc2FnZTpcbiAgICAtLS0tLS0tLS0tLS1cblxuICAgIGBgYGpzXG4gICAgbGV0IHByb21pc2UgPSBuZXcgUHJvbWlzZShmdW5jdGlvbihyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgIC8vIG9uIHN1Y2Nlc3NcbiAgICAgIHJlc29sdmUodmFsdWUpO1xuXG4gICAgICAvLyBvbiBmYWlsdXJlXG4gICAgICByZWplY3QocmVhc29uKTtcbiAgICB9KTtcblxuICAgIHByb21pc2UudGhlbihmdW5jdGlvbih2YWx1ZSkge1xuICAgICAgLy8gb24gZnVsZmlsbG1lbnRcbiAgICB9LCBmdW5jdGlvbihyZWFzb24pIHtcbiAgICAgIC8vIG9uIHJlamVjdGlvblxuICAgIH0pO1xuICAgIGBgYFxuXG4gICAgQWR2YW5jZWQgVXNhZ2U6XG4gICAgLS0tLS0tLS0tLS0tLS0tXG5cbiAgICBQcm9taXNlcyBzaGluZSB3aGVuIGFic3RyYWN0aW5nIGF3YXkgYXN5bmNocm9ub3VzIGludGVyYWN0aW9ucyBzdWNoIGFzXG4gICAgYFhNTEh0dHBSZXF1ZXN0YHMuXG5cbiAgICBgYGBqc1xuICAgIGZ1bmN0aW9uIGdldEpTT04odXJsKSB7XG4gICAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24ocmVzb2x2ZSwgcmVqZWN0KXtcbiAgICAgICAgbGV0IHhociA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpO1xuXG4gICAgICAgIHhoci5vcGVuKCdHRVQnLCB1cmwpO1xuICAgICAgICB4aHIub25yZWFkeXN0YXRlY2hhbmdlID0gaGFuZGxlcjtcbiAgICAgICAgeGhyLnJlc3BvbnNlVHlwZSA9ICdqc29uJztcbiAgICAgICAgeGhyLnNldFJlcXVlc3RIZWFkZXIoJ0FjY2VwdCcsICdhcHBsaWNhdGlvbi9qc29uJyk7XG4gICAgICAgIHhoci5zZW5kKCk7XG5cbiAgICAgICAgZnVuY3Rpb24gaGFuZGxlcigpIHtcbiAgICAgICAgICBpZiAodGhpcy5yZWFkeVN0YXRlID09PSB0aGlzLkRPTkUpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnN0YXR1cyA9PT0gMjAwKSB7XG4gICAgICAgICAgICAgIHJlc29sdmUodGhpcy5yZXNwb25zZSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICByZWplY3QobmV3IEVycm9yKCdnZXRKU09OOiBgJyArIHVybCArICdgIGZhaWxlZCB3aXRoIHN0YXR1czogWycgKyB0aGlzLnN0YXR1cyArICddJykpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGdldEpTT04oJy9wb3N0cy5qc29uJykudGhlbihmdW5jdGlvbihqc29uKSB7XG4gICAgICAvLyBvbiBmdWxmaWxsbWVudFxuICAgIH0sIGZ1bmN0aW9uKHJlYXNvbikge1xuICAgICAgLy8gb24gcmVqZWN0aW9uXG4gICAgfSk7XG4gICAgYGBgXG5cbiAgICBVbmxpa2UgY2FsbGJhY2tzLCBwcm9taXNlcyBhcmUgZ3JlYXQgY29tcG9zYWJsZSBwcmltaXRpdmVzLlxuXG4gICAgYGBganNcbiAgICBQcm9taXNlLmFsbChbXG4gICAgICBnZXRKU09OKCcvcG9zdHMnKSxcbiAgICAgIGdldEpTT04oJy9jb21tZW50cycpXG4gICAgXSkudGhlbihmdW5jdGlvbih2YWx1ZXMpe1xuICAgICAgdmFsdWVzWzBdIC8vID0+IHBvc3RzSlNPTlxuICAgICAgdmFsdWVzWzFdIC8vID0+IGNvbW1lbnRzSlNPTlxuXG4gICAgICByZXR1cm4gdmFsdWVzO1xuICAgIH0pO1xuICAgIGBgYFxuXG4gICAgQGNsYXNzIFByb21pc2VcbiAgICBAcGFyYW0ge0Z1bmN0aW9ufSByZXNvbHZlclxuICAgIFVzZWZ1bCBmb3IgdG9vbGluZy5cbiAgICBAY29uc3RydWN0b3JcbiAgKi9cblxuICB2YXIgUHJvbWlzZSQyID0gZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIFByb21pc2UocmVzb2x2ZXIpIHtcbiAgICAgIGNsYXNzQ2FsbENoZWNrKHRoaXMsIFByb21pc2UpO1xuXG4gICAgICB0aGlzW1BST01JU0VfSURdID0gbmV4dElkKCk7XG4gICAgICB0aGlzLl9yZXN1bHQgPSB0aGlzLl9zdGF0ZSA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX3N1YnNjcmliZXJzID0gW107XG5cbiAgICAgIGlmIChub29wICE9PSByZXNvbHZlcikge1xuICAgICAgICB0eXBlb2YgcmVzb2x2ZXIgIT09ICdmdW5jdGlvbicgJiYgbmVlZHNSZXNvbHZlcigpO1xuICAgICAgICB0aGlzIGluc3RhbmNlb2YgUHJvbWlzZSA/IGluaXRpYWxpemVQcm9taXNlKHRoaXMsIHJlc29sdmVyKSA6IG5lZWRzTmV3KCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgVGhlIHByaW1hcnkgd2F5IG9mIGludGVyYWN0aW5nIHdpdGggYSBwcm9taXNlIGlzIHRocm91Z2ggaXRzIGB0aGVuYCBtZXRob2QsXG4gICAgd2hpY2ggcmVnaXN0ZXJzIGNhbGxiYWNrcyB0byByZWNlaXZlIGVpdGhlciBhIHByb21pc2UncyBldmVudHVhbCB2YWx1ZSBvciB0aGVcbiAgICByZWFzb24gd2h5IHRoZSBwcm9taXNlIGNhbm5vdCBiZSBmdWxmaWxsZWQuXG4gICAgIGBgYGpzXG4gICAgZmluZFVzZXIoKS50aGVuKGZ1bmN0aW9uKHVzZXIpe1xuICAgICAgLy8gdXNlciBpcyBhdmFpbGFibGVcbiAgICB9LCBmdW5jdGlvbihyZWFzb24pe1xuICAgICAgLy8gdXNlciBpcyB1bmF2YWlsYWJsZSwgYW5kIHlvdSBhcmUgZ2l2ZW4gdGhlIHJlYXNvbiB3aHlcbiAgICB9KTtcbiAgICBgYGBcbiAgICAgQ2hhaW5pbmdcbiAgICAtLS0tLS0tLVxuICAgICBUaGUgcmV0dXJuIHZhbHVlIG9mIGB0aGVuYCBpcyBpdHNlbGYgYSBwcm9taXNlLiAgVGhpcyBzZWNvbmQsICdkb3duc3RyZWFtJ1xuICAgIHByb21pc2UgaXMgcmVzb2x2ZWQgd2l0aCB0aGUgcmV0dXJuIHZhbHVlIG9mIHRoZSBmaXJzdCBwcm9taXNlJ3MgZnVsZmlsbG1lbnRcbiAgICBvciByZWplY3Rpb24gaGFuZGxlciwgb3IgcmVqZWN0ZWQgaWYgdGhlIGhhbmRsZXIgdGhyb3dzIGFuIGV4Y2VwdGlvbi5cbiAgICAgYGBganNcbiAgICBmaW5kVXNlcigpLnRoZW4oZnVuY3Rpb24gKHVzZXIpIHtcbiAgICAgIHJldHVybiB1c2VyLm5hbWU7XG4gICAgfSwgZnVuY3Rpb24gKHJlYXNvbikge1xuICAgICAgcmV0dXJuICdkZWZhdWx0IG5hbWUnO1xuICAgIH0pLnRoZW4oZnVuY3Rpb24gKHVzZXJOYW1lKSB7XG4gICAgICAvLyBJZiBgZmluZFVzZXJgIGZ1bGZpbGxlZCwgYHVzZXJOYW1lYCB3aWxsIGJlIHRoZSB1c2VyJ3MgbmFtZSwgb3RoZXJ3aXNlIGl0XG4gICAgICAvLyB3aWxsIGJlIGAnZGVmYXVsdCBuYW1lJ2BcbiAgICB9KTtcbiAgICAgZmluZFVzZXIoKS50aGVuKGZ1bmN0aW9uICh1c2VyKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ0ZvdW5kIHVzZXIsIGJ1dCBzdGlsbCB1bmhhcHB5Jyk7XG4gICAgfSwgZnVuY3Rpb24gKHJlYXNvbikge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdgZmluZFVzZXJgIHJlamVjdGVkIGFuZCB3ZSdyZSB1bmhhcHB5Jyk7XG4gICAgfSkudGhlbihmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgIC8vIG5ldmVyIHJlYWNoZWRcbiAgICB9LCBmdW5jdGlvbiAocmVhc29uKSB7XG4gICAgICAvLyBpZiBgZmluZFVzZXJgIGZ1bGZpbGxlZCwgYHJlYXNvbmAgd2lsbCBiZSAnRm91bmQgdXNlciwgYnV0IHN0aWxsIHVuaGFwcHknLlxuICAgICAgLy8gSWYgYGZpbmRVc2VyYCByZWplY3RlZCwgYHJlYXNvbmAgd2lsbCBiZSAnYGZpbmRVc2VyYCByZWplY3RlZCBhbmQgd2UncmUgdW5oYXBweScuXG4gICAgfSk7XG4gICAgYGBgXG4gICAgSWYgdGhlIGRvd25zdHJlYW0gcHJvbWlzZSBkb2VzIG5vdCBzcGVjaWZ5IGEgcmVqZWN0aW9uIGhhbmRsZXIsIHJlamVjdGlvbiByZWFzb25zIHdpbGwgYmUgcHJvcGFnYXRlZCBmdXJ0aGVyIGRvd25zdHJlYW0uXG4gICAgIGBgYGpzXG4gICAgZmluZFVzZXIoKS50aGVuKGZ1bmN0aW9uICh1c2VyKSB7XG4gICAgICB0aHJvdyBuZXcgUGVkYWdvZ2ljYWxFeGNlcHRpb24oJ1Vwc3RyZWFtIGVycm9yJyk7XG4gICAgfSkudGhlbihmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgIC8vIG5ldmVyIHJlYWNoZWRcbiAgICB9KS50aGVuKGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgLy8gbmV2ZXIgcmVhY2hlZFxuICAgIH0sIGZ1bmN0aW9uIChyZWFzb24pIHtcbiAgICAgIC8vIFRoZSBgUGVkZ2Fnb2NpYWxFeGNlcHRpb25gIGlzIHByb3BhZ2F0ZWQgYWxsIHRoZSB3YXkgZG93biB0byBoZXJlXG4gICAgfSk7XG4gICAgYGBgXG4gICAgIEFzc2ltaWxhdGlvblxuICAgIC0tLS0tLS0tLS0tLVxuICAgICBTb21ldGltZXMgdGhlIHZhbHVlIHlvdSB3YW50IHRvIHByb3BhZ2F0ZSB0byBhIGRvd25zdHJlYW0gcHJvbWlzZSBjYW4gb25seSBiZVxuICAgIHJldHJpZXZlZCBhc3luY2hyb25vdXNseS4gVGhpcyBjYW4gYmUgYWNoaWV2ZWQgYnkgcmV0dXJuaW5nIGEgcHJvbWlzZSBpbiB0aGVcbiAgICBmdWxmaWxsbWVudCBvciByZWplY3Rpb24gaGFuZGxlci4gVGhlIGRvd25zdHJlYW0gcHJvbWlzZSB3aWxsIHRoZW4gYmUgcGVuZGluZ1xuICAgIHVudGlsIHRoZSByZXR1cm5lZCBwcm9taXNlIGlzIHNldHRsZWQuIFRoaXMgaXMgY2FsbGVkICphc3NpbWlsYXRpb24qLlxuICAgICBgYGBqc1xuICAgIGZpbmRVc2VyKCkudGhlbihmdW5jdGlvbiAodXNlcikge1xuICAgICAgcmV0dXJuIGZpbmRDb21tZW50c0J5QXV0aG9yKHVzZXIpO1xuICAgIH0pLnRoZW4oZnVuY3Rpb24gKGNvbW1lbnRzKSB7XG4gICAgICAvLyBUaGUgdXNlcidzIGNvbW1lbnRzIGFyZSBub3cgYXZhaWxhYmxlXG4gICAgfSk7XG4gICAgYGBgXG4gICAgIElmIHRoZSBhc3NpbWxpYXRlZCBwcm9taXNlIHJlamVjdHMsIHRoZW4gdGhlIGRvd25zdHJlYW0gcHJvbWlzZSB3aWxsIGFsc28gcmVqZWN0LlxuICAgICBgYGBqc1xuICAgIGZpbmRVc2VyKCkudGhlbihmdW5jdGlvbiAodXNlcikge1xuICAgICAgcmV0dXJuIGZpbmRDb21tZW50c0J5QXV0aG9yKHVzZXIpO1xuICAgIH0pLnRoZW4oZnVuY3Rpb24gKGNvbW1lbnRzKSB7XG4gICAgICAvLyBJZiBgZmluZENvbW1lbnRzQnlBdXRob3JgIGZ1bGZpbGxzLCB3ZSdsbCBoYXZlIHRoZSB2YWx1ZSBoZXJlXG4gICAgfSwgZnVuY3Rpb24gKHJlYXNvbikge1xuICAgICAgLy8gSWYgYGZpbmRDb21tZW50c0J5QXV0aG9yYCByZWplY3RzLCB3ZSdsbCBoYXZlIHRoZSByZWFzb24gaGVyZVxuICAgIH0pO1xuICAgIGBgYFxuICAgICBTaW1wbGUgRXhhbXBsZVxuICAgIC0tLS0tLS0tLS0tLS0tXG4gICAgIFN5bmNocm9ub3VzIEV4YW1wbGVcbiAgICAgYGBgamF2YXNjcmlwdFxuICAgIGxldCByZXN1bHQ7XG4gICAgIHRyeSB7XG4gICAgICByZXN1bHQgPSBmaW5kUmVzdWx0KCk7XG4gICAgICAvLyBzdWNjZXNzXG4gICAgfSBjYXRjaChyZWFzb24pIHtcbiAgICAgIC8vIGZhaWx1cmVcbiAgICB9XG4gICAgYGBgXG4gICAgIEVycmJhY2sgRXhhbXBsZVxuICAgICBgYGBqc1xuICAgIGZpbmRSZXN1bHQoZnVuY3Rpb24ocmVzdWx0LCBlcnIpe1xuICAgICAgaWYgKGVycikge1xuICAgICAgICAvLyBmYWlsdXJlXG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBzdWNjZXNzXG4gICAgICB9XG4gICAgfSk7XG4gICAgYGBgXG4gICAgIFByb21pc2UgRXhhbXBsZTtcbiAgICAgYGBgamF2YXNjcmlwdFxuICAgIGZpbmRSZXN1bHQoKS50aGVuKGZ1bmN0aW9uKHJlc3VsdCl7XG4gICAgICAvLyBzdWNjZXNzXG4gICAgfSwgZnVuY3Rpb24ocmVhc29uKXtcbiAgICAgIC8vIGZhaWx1cmVcbiAgICB9KTtcbiAgICBgYGBcbiAgICAgQWR2YW5jZWQgRXhhbXBsZVxuICAgIC0tLS0tLS0tLS0tLS0tXG4gICAgIFN5bmNocm9ub3VzIEV4YW1wbGVcbiAgICAgYGBgamF2YXNjcmlwdFxuICAgIGxldCBhdXRob3IsIGJvb2tzO1xuICAgICB0cnkge1xuICAgICAgYXV0aG9yID0gZmluZEF1dGhvcigpO1xuICAgICAgYm9va3MgID0gZmluZEJvb2tzQnlBdXRob3IoYXV0aG9yKTtcbiAgICAgIC8vIHN1Y2Nlc3NcbiAgICB9IGNhdGNoKHJlYXNvbikge1xuICAgICAgLy8gZmFpbHVyZVxuICAgIH1cbiAgICBgYGBcbiAgICAgRXJyYmFjayBFeGFtcGxlXG4gICAgIGBgYGpzXG4gICAgIGZ1bmN0aW9uIGZvdW5kQm9va3MoYm9va3MpIHtcbiAgICAgfVxuICAgICBmdW5jdGlvbiBmYWlsdXJlKHJlYXNvbikge1xuICAgICB9XG4gICAgIGZpbmRBdXRob3IoZnVuY3Rpb24oYXV0aG9yLCBlcnIpe1xuICAgICAgaWYgKGVycikge1xuICAgICAgICBmYWlsdXJlKGVycik7XG4gICAgICAgIC8vIGZhaWx1cmVcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgZmluZEJvb29rc0J5QXV0aG9yKGF1dGhvciwgZnVuY3Rpb24oYm9va3MsIGVycikge1xuICAgICAgICAgICAgaWYgKGVycikge1xuICAgICAgICAgICAgICBmYWlsdXJlKGVycik7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIGZvdW5kQm9va3MoYm9va3MpO1xuICAgICAgICAgICAgICB9IGNhdGNoKHJlYXNvbikge1xuICAgICAgICAgICAgICAgIGZhaWx1cmUocmVhc29uKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pO1xuICAgICAgICB9IGNhdGNoKGVycm9yKSB7XG4gICAgICAgICAgZmFpbHVyZShlcnIpO1xuICAgICAgICB9XG4gICAgICAgIC8vIHN1Y2Nlc3NcbiAgICAgIH1cbiAgICB9KTtcbiAgICBgYGBcbiAgICAgUHJvbWlzZSBFeGFtcGxlO1xuICAgICBgYGBqYXZhc2NyaXB0XG4gICAgZmluZEF1dGhvcigpLlxuICAgICAgdGhlbihmaW5kQm9va3NCeUF1dGhvcikuXG4gICAgICB0aGVuKGZ1bmN0aW9uKGJvb2tzKXtcbiAgICAgICAgLy8gZm91bmQgYm9va3NcbiAgICB9KS5jYXRjaChmdW5jdGlvbihyZWFzb24pe1xuICAgICAgLy8gc29tZXRoaW5nIHdlbnQgd3JvbmdcbiAgICB9KTtcbiAgICBgYGBcbiAgICAgQG1ldGhvZCB0aGVuXG4gICAgQHBhcmFtIHtGdW5jdGlvbn0gb25GdWxmaWxsZWRcbiAgICBAcGFyYW0ge0Z1bmN0aW9ufSBvblJlamVjdGVkXG4gICAgVXNlZnVsIGZvciB0b29saW5nLlxuICAgIEByZXR1cm4ge1Byb21pc2V9XG4gICAgKi9cblxuICAgIC8qKlxuICAgIGBjYXRjaGAgaXMgc2ltcGx5IHN1Z2FyIGZvciBgdGhlbih1bmRlZmluZWQsIG9uUmVqZWN0aW9uKWAgd2hpY2ggbWFrZXMgaXQgdGhlIHNhbWVcbiAgICBhcyB0aGUgY2F0Y2ggYmxvY2sgb2YgYSB0cnkvY2F0Y2ggc3RhdGVtZW50LlxuICAgIGBgYGpzXG4gICAgZnVuY3Rpb24gZmluZEF1dGhvcigpe1xuICAgIHRocm93IG5ldyBFcnJvcignY291bGRuJ3QgZmluZCB0aGF0IGF1dGhvcicpO1xuICAgIH1cbiAgICAvLyBzeW5jaHJvbm91c1xuICAgIHRyeSB7XG4gICAgZmluZEF1dGhvcigpO1xuICAgIH0gY2F0Y2gocmVhc29uKSB7XG4gICAgLy8gc29tZXRoaW5nIHdlbnQgd3JvbmdcbiAgICB9XG4gICAgLy8gYXN5bmMgd2l0aCBwcm9taXNlc1xuICAgIGZpbmRBdXRob3IoKS5jYXRjaChmdW5jdGlvbihyZWFzb24pe1xuICAgIC8vIHNvbWV0aGluZyB3ZW50IHdyb25nXG4gICAgfSk7XG4gICAgYGBgXG4gICAgQG1ldGhvZCBjYXRjaFxuICAgIEBwYXJhbSB7RnVuY3Rpb259IG9uUmVqZWN0aW9uXG4gICAgVXNlZnVsIGZvciB0b29saW5nLlxuICAgIEByZXR1cm4ge1Byb21pc2V9XG4gICAgKi9cblxuXG4gICAgY3JlYXRlQ2xhc3MoUHJvbWlzZSwgW3tcbiAgICAgIGtleTogJ2NhdGNoJyxcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiBfY2F0Y2gob25SZWplY3Rpb24pIHtcbiAgICAgICAgcmV0dXJuIHRoaXMudGhlbihudWxsLCBvblJlamVjdGlvbik7XG4gICAgICB9XG5cbiAgICAgIC8qKlxuICAgICAgICBgZmluYWxseWAgd2lsbCBiZSBpbnZva2VkIHJlZ2FyZGxlc3Mgb2YgdGhlIHByb21pc2UncyBmYXRlIGp1c3QgYXMgbmF0aXZlXG4gICAgICAgIHRyeS9jYXRjaC9maW5hbGx5IGJlaGF2ZXNcbiAgICAgIFxuICAgICAgICBTeW5jaHJvbm91cyBleGFtcGxlOlxuICAgICAgXG4gICAgICAgIGBgYGpzXG4gICAgICAgIGZpbmRBdXRob3IoKSB7XG4gICAgICAgICAgaWYgKE1hdGgucmFuZG9tKCkgPiAwLjUpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcigpO1xuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gbmV3IEF1dGhvcigpO1xuICAgICAgICB9XG4gICAgICBcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICByZXR1cm4gZmluZEF1dGhvcigpOyAvLyBzdWNjZWVkIG9yIGZhaWxcbiAgICAgICAgfSBjYXRjaChlcnJvcikge1xuICAgICAgICAgIHJldHVybiBmaW5kT3RoZXJBdXRoZXIoKTtcbiAgICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgICAvLyBhbHdheXMgcnVuc1xuICAgICAgICAgIC8vIGRvZXNuJ3QgYWZmZWN0IHRoZSByZXR1cm4gdmFsdWVcbiAgICAgICAgfVxuICAgICAgICBgYGBcbiAgICAgIFxuICAgICAgICBBc3luY2hyb25vdXMgZXhhbXBsZTpcbiAgICAgIFxuICAgICAgICBgYGBqc1xuICAgICAgICBmaW5kQXV0aG9yKCkuY2F0Y2goZnVuY3Rpb24ocmVhc29uKXtcbiAgICAgICAgICByZXR1cm4gZmluZE90aGVyQXV0aGVyKCk7XG4gICAgICAgIH0pLmZpbmFsbHkoZnVuY3Rpb24oKXtcbiAgICAgICAgICAvLyBhdXRob3Igd2FzIGVpdGhlciBmb3VuZCwgb3Igbm90XG4gICAgICAgIH0pO1xuICAgICAgICBgYGBcbiAgICAgIFxuICAgICAgICBAbWV0aG9kIGZpbmFsbHlcbiAgICAgICAgQHBhcmFtIHtGdW5jdGlvbn0gY2FsbGJhY2tcbiAgICAgICAgQHJldHVybiB7UHJvbWlzZX1cbiAgICAgICovXG5cbiAgICB9LCB7XG4gICAgICBrZXk6ICdmaW5hbGx5JyxcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiBfZmluYWxseShjYWxsYmFjaykge1xuICAgICAgICB2YXIgcHJvbWlzZSA9IHRoaXM7XG4gICAgICAgIHZhciBjb25zdHJ1Y3RvciA9IHByb21pc2UuY29uc3RydWN0b3I7XG5cbiAgICAgICAgaWYgKGlzRnVuY3Rpb24oY2FsbGJhY2spKSB7XG4gICAgICAgICAgcmV0dXJuIHByb21pc2UudGhlbihmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgICAgIHJldHVybiBjb25zdHJ1Y3Rvci5yZXNvbHZlKGNhbGxiYWNrKCkpLnRoZW4oZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICByZXR1cm4gdmFsdWU7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9LCBmdW5jdGlvbiAocmVhc29uKSB7XG4gICAgICAgICAgICByZXR1cm4gY29uc3RydWN0b3IucmVzb2x2ZShjYWxsYmFjaygpKS50aGVuKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgdGhyb3cgcmVhc29uO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gcHJvbWlzZS50aGVuKGNhbGxiYWNrLCBjYWxsYmFjayk7XG4gICAgICB9XG4gICAgfV0pO1xuICAgIHJldHVybiBQcm9taXNlO1xuICB9KCk7XG5cbiAgUHJvbWlzZSQyLnByb3RvdHlwZS50aGVuID0gdGhlbjtcbiAgUHJvbWlzZSQyLmFsbCA9IGFsbDtcbiAgUHJvbWlzZSQyLnJhY2UgPSByYWNlO1xuICBQcm9taXNlJDIucmVzb2x2ZSA9IHJlc29sdmUkMTtcbiAgUHJvbWlzZSQyLnJlamVjdCA9IHJlamVjdCQxO1xuICBQcm9taXNlJDIuX3NldFNjaGVkdWxlciA9IHNldFNjaGVkdWxlcjtcbiAgUHJvbWlzZSQyLl9zZXRBc2FwID0gc2V0QXNhcDtcbiAgUHJvbWlzZSQyLl9hc2FwID0gYXNhcDtcblxuICAvKmdsb2JhbCBzZWxmKi9cbiAgZnVuY3Rpb24gcG9seWZpbGwoKSB7XG4gICAgdmFyIGxvY2FsID0gdm9pZCAwO1xuXG4gICAgaWYgKHR5cGVvZiBnbG9iYWwgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICBsb2NhbCA9IGdsb2JhbDtcbiAgICB9IGVsc2UgaWYgKHR5cGVvZiBzZWxmICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgbG9jYWwgPSBzZWxmO1xuICAgIH0gZWxzZSB7XG4gICAgICB0cnkge1xuICAgICAgICBsb2NhbCA9IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcigncG9seWZpbGwgZmFpbGVkIGJlY2F1c2UgZ2xvYmFsIG9iamVjdCBpcyB1bmF2YWlsYWJsZSBpbiB0aGlzIGVudmlyb25tZW50Jyk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgdmFyIFAgPSBsb2NhbC5Qcm9taXNlO1xuXG4gICAgaWYgKFApIHtcbiAgICAgIHZhciBwcm9taXNlVG9TdHJpbmcgPSBudWxsO1xuICAgICAgdHJ5IHtcbiAgICAgICAgcHJvbWlzZVRvU3RyaW5nID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKFAucmVzb2x2ZSgpKTtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gc2lsZW50bHkgaWdub3JlZFxuICAgICAgfVxuXG4gICAgICBpZiAocHJvbWlzZVRvU3RyaW5nID09PSAnW29iamVjdCBQcm9taXNlXScgJiYgIVAuY2FzdCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgfVxuXG4gICAgbG9jYWwuUHJvbWlzZSA9IFByb21pc2UkMjtcbiAgfVxuXG4gIC8vIFN0cmFuZ2UgY29tcGF0Li5cbiAgUHJvbWlzZSQyLnBvbHlmaWxsID0gcG9seWZpbGw7XG4gIFByb21pc2UkMi5Qcm9taXNlID0gUHJvbWlzZSQyO1xuXG4gIHZhciBQcm9taXNlJDEgPSB0eXBlb2YgUHJvbWlzZSAhPT0gXCJ1bmRlZmluZWRcIiA/IFByb21pc2UgOiBQcm9taXNlJDI7XG5cbiAgLy8gUmVnaXN0ZXIgbG9nZ2luZyBjYWxsYmFja3NcbiAgZnVuY3Rpb24gcmVnaXN0ZXJMb2dnaW5nQ2FsbGJhY2tzKG9iaikge1xuICBcdHZhciBpLFxuICBcdCAgICBsLFxuICBcdCAgICBrZXksXG4gIFx0ICAgIGNhbGxiYWNrTmFtZXMgPSBbXCJiZWdpblwiLCBcImRvbmVcIiwgXCJsb2dcIiwgXCJ0ZXN0U3RhcnRcIiwgXCJ0ZXN0RG9uZVwiLCBcIm1vZHVsZVN0YXJ0XCIsIFwibW9kdWxlRG9uZVwiXTtcblxuICBcdGZ1bmN0aW9uIHJlZ2lzdGVyTG9nZ2luZ0NhbGxiYWNrKGtleSkge1xuICBcdFx0dmFyIGxvZ2dpbmdDYWxsYmFjayA9IGZ1bmN0aW9uIGxvZ2dpbmdDYWxsYmFjayhjYWxsYmFjaykge1xuICBcdFx0XHRpZiAob2JqZWN0VHlwZShjYWxsYmFjaykgIT09IFwiZnVuY3Rpb25cIikge1xuICBcdFx0XHRcdHRocm93IG5ldyBFcnJvcihcIlFVbml0IGxvZ2dpbmcgbWV0aG9kcyByZXF1aXJlIGEgY2FsbGJhY2sgZnVuY3Rpb24gYXMgdGhlaXIgZmlyc3QgcGFyYW1ldGVycy5cIik7XG4gIFx0XHRcdH1cblxuICBcdFx0XHRjb25maWcuY2FsbGJhY2tzW2tleV0ucHVzaChjYWxsYmFjayk7XG4gIFx0XHR9O1xuXG4gIFx0XHRyZXR1cm4gbG9nZ2luZ0NhbGxiYWNrO1xuICBcdH1cblxuICBcdGZvciAoaSA9IDAsIGwgPSBjYWxsYmFja05hbWVzLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICBcdFx0a2V5ID0gY2FsbGJhY2tOYW1lc1tpXTtcblxuICBcdFx0Ly8gSW5pdGlhbGl6ZSBrZXkgY29sbGVjdGlvbiBvZiBsb2dnaW5nIGNhbGxiYWNrXG4gIFx0XHRpZiAob2JqZWN0VHlwZShjb25maWcuY2FsbGJhY2tzW2tleV0pID09PSBcInVuZGVmaW5lZFwiKSB7XG4gIFx0XHRcdGNvbmZpZy5jYWxsYmFja3Nba2V5XSA9IFtdO1xuICBcdFx0fVxuXG4gIFx0XHRvYmpba2V5XSA9IHJlZ2lzdGVyTG9nZ2luZ0NhbGxiYWNrKGtleSk7XG4gIFx0fVxuICB9XG5cbiAgZnVuY3Rpb24gcnVuTG9nZ2luZ0NhbGxiYWNrcyhrZXksIGFyZ3MpIHtcbiAgXHR2YXIgY2FsbGJhY2tzID0gY29uZmlnLmNhbGxiYWNrc1trZXldO1xuXG4gIFx0Ly8gSGFuZGxpbmcgJ2xvZycgY2FsbGJhY2tzIHNlcGFyYXRlbHkuIFVubGlrZSB0aGUgb3RoZXIgY2FsbGJhY2tzLFxuICBcdC8vIHRoZSBsb2cgY2FsbGJhY2sgaXMgbm90IGNvbnRyb2xsZWQgYnkgdGhlIHByb2Nlc3NpbmcgcXVldWUsXG4gIFx0Ly8gYnV0IHJhdGhlciB1c2VkIGJ5IGFzc2VydHMuIEhlbmNlIHRvIHByb21pc2Z5IHRoZSAnbG9nJyBjYWxsYmFja1xuICBcdC8vIHdvdWxkIG1lYW4gcHJvbWlzZnlpbmcgZWFjaCBzdGVwIG9mIGEgdGVzdFxuICBcdGlmIChrZXkgPT09IFwibG9nXCIpIHtcbiAgXHRcdGNhbGxiYWNrcy5tYXAoZnVuY3Rpb24gKGNhbGxiYWNrKSB7XG4gIFx0XHRcdHJldHVybiBjYWxsYmFjayhhcmdzKTtcbiAgXHRcdH0pO1xuICBcdFx0cmV0dXJuO1xuICBcdH1cblxuICBcdC8vIGVuc3VyZSB0aGF0IGVhY2ggY2FsbGJhY2sgaXMgZXhlY3V0ZWQgc2VyaWFsbHlcbiAgXHRyZXR1cm4gY2FsbGJhY2tzLnJlZHVjZShmdW5jdGlvbiAocHJvbWlzZUNoYWluLCBjYWxsYmFjaykge1xuICBcdFx0cmV0dXJuIHByb21pc2VDaGFpbi50aGVuKGZ1bmN0aW9uICgpIHtcbiAgXHRcdFx0cmV0dXJuIFByb21pc2UkMS5yZXNvbHZlKGNhbGxiYWNrKGFyZ3MpKTtcbiAgXHRcdH0pO1xuICBcdH0sIFByb21pc2UkMS5yZXNvbHZlKFtdKSk7XG4gIH1cblxuICAvLyBEb2Vzbid0IHN1cHBvcnQgSUU5LCBpdCB3aWxsIHJldHVybiB1bmRlZmluZWQgb24gdGhlc2UgYnJvd3NlcnNcbiAgLy8gU2VlIGFsc28gaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4vSmF2YVNjcmlwdC9SZWZlcmVuY2UvR2xvYmFsX09iamVjdHMvRXJyb3IvU3RhY2tcbiAgdmFyIGZpbGVOYW1lID0gKHNvdXJjZUZyb21TdGFja3RyYWNlKDApIHx8IFwiXCIpLnJlcGxhY2UoLyg6XFxkKykrXFwpPy8sIFwiXCIpLnJlcGxhY2UoLy4rXFwvLywgXCJcIik7XG5cbiAgZnVuY3Rpb24gZXh0cmFjdFN0YWNrdHJhY2UoZSwgb2Zmc2V0KSB7XG4gIFx0b2Zmc2V0ID0gb2Zmc2V0ID09PSB1bmRlZmluZWQgPyA0IDogb2Zmc2V0O1xuXG4gIFx0dmFyIHN0YWNrLCBpbmNsdWRlLCBpO1xuXG4gIFx0aWYgKGUgJiYgZS5zdGFjaykge1xuICBcdFx0c3RhY2sgPSBlLnN0YWNrLnNwbGl0KFwiXFxuXCIpO1xuICBcdFx0aWYgKC9eZXJyb3IkL2kudGVzdChzdGFja1swXSkpIHtcbiAgXHRcdFx0c3RhY2suc2hpZnQoKTtcbiAgXHRcdH1cbiAgXHRcdGlmIChmaWxlTmFtZSkge1xuICBcdFx0XHRpbmNsdWRlID0gW107XG4gIFx0XHRcdGZvciAoaSA9IG9mZnNldDsgaSA8IHN0YWNrLmxlbmd0aDsgaSsrKSB7XG4gIFx0XHRcdFx0aWYgKHN0YWNrW2ldLmluZGV4T2YoZmlsZU5hbWUpICE9PSAtMSkge1xuICBcdFx0XHRcdFx0YnJlYWs7XG4gIFx0XHRcdFx0fVxuICBcdFx0XHRcdGluY2x1ZGUucHVzaChzdGFja1tpXSk7XG4gIFx0XHRcdH1cbiAgXHRcdFx0aWYgKGluY2x1ZGUubGVuZ3RoKSB7XG4gIFx0XHRcdFx0cmV0dXJuIGluY2x1ZGUuam9pbihcIlxcblwiKTtcbiAgXHRcdFx0fVxuICBcdFx0fVxuICBcdFx0cmV0dXJuIHN0YWNrW29mZnNldF07XG4gIFx0fVxuICB9XG5cbiAgZnVuY3Rpb24gc291cmNlRnJvbVN0YWNrdHJhY2Uob2Zmc2V0KSB7XG4gIFx0dmFyIGVycm9yID0gbmV3IEVycm9yKCk7XG5cbiAgXHQvLyBTdXBwb3J0OiBTYWZhcmkgPD03IG9ubHksIElFIDw9MTAgLSAxMSBvbmx5XG4gIFx0Ly8gTm90IGFsbCBicm93c2VycyBnZW5lcmF0ZSB0aGUgYHN0YWNrYCBwcm9wZXJ0eSBmb3IgYG5ldyBFcnJvcigpYCwgc2VlIGFsc28gIzYzNlxuICBcdGlmICghZXJyb3Iuc3RhY2spIHtcbiAgXHRcdHRyeSB7XG4gIFx0XHRcdHRocm93IGVycm9yO1xuICBcdFx0fSBjYXRjaCAoZXJyKSB7XG4gIFx0XHRcdGVycm9yID0gZXJyO1xuICBcdFx0fVxuICBcdH1cblxuICBcdHJldHVybiBleHRyYWN0U3RhY2t0cmFjZShlcnJvciwgb2Zmc2V0KTtcbiAgfVxuXG4gIHZhciBwcmlvcml0eUNvdW50ID0gMDtcbiAgdmFyIHVuaXRTYW1wbGVyID0gdm9pZCAwO1xuXG4gIC8vIFRoaXMgaXMgYSBxdWV1ZSBvZiBmdW5jdGlvbnMgdGhhdCBhcmUgdGFza3Mgd2l0aGluIGEgc2luZ2xlIHRlc3QuXG4gIC8vIEFmdGVyIHRlc3RzIGFyZSBkZXF1ZXVlZCBmcm9tIGNvbmZpZy5xdWV1ZSB0aGV5IGFyZSBleHBhbmRlZCBpbnRvXG4gIC8vIGEgc2V0IG9mIHRhc2tzIGluIHRoaXMgcXVldWUuXG4gIHZhciB0YXNrUXVldWUgPSBbXTtcblxuICAvKipcbiAgICogQWR2YW5jZXMgdGhlIHRhc2tRdWV1ZSB0byB0aGUgbmV4dCB0YXNrLiBJZiB0aGUgdGFza1F1ZXVlIGlzIGVtcHR5LFxuICAgKiBwcm9jZXNzIHRoZSB0ZXN0UXVldWVcbiAgICovXG4gIGZ1bmN0aW9uIGFkdmFuY2UoKSB7XG4gIFx0YWR2YW5jZVRhc2tRdWV1ZSgpO1xuXG4gIFx0aWYgKCF0YXNrUXVldWUubGVuZ3RoICYmICFjb25maWcuYmxvY2tpbmcgJiYgIWNvbmZpZy5jdXJyZW50KSB7XG4gIFx0XHRhZHZhbmNlVGVzdFF1ZXVlKCk7XG4gIFx0fVxuICB9XG5cbiAgLyoqXG4gICAqIEFkdmFuY2VzIHRoZSB0YXNrUXVldWUgd2l0aCBhbiBpbmNyZWFzZWQgZGVwdGhcbiAgICovXG4gIGZ1bmN0aW9uIGFkdmFuY2VUYXNrUXVldWUoKSB7XG4gIFx0dmFyIHN0YXJ0ID0gbm93KCk7XG4gIFx0Y29uZmlnLmRlcHRoID0gKGNvbmZpZy5kZXB0aCB8fCAwKSArIDE7XG5cbiAgXHRwcm9jZXNzVGFza1F1ZXVlKHN0YXJ0KTtcblxuICBcdGNvbmZpZy5kZXB0aC0tO1xuICB9XG5cbiAgLyoqXG4gICAqIFByb2Nlc3MgdGhlIGZpcnN0IHRhc2sgb24gdGhlIHRhc2tRdWV1ZSBhcyBhIHByb21pc2UuXG4gICAqIEVhY2ggdGFzayBpcyBhIGZ1bmN0aW9uIHJldHVybmVkIGJ5IGh0dHBzOi8vZ2l0aHViLmNvbS9xdW5pdGpzL3F1bml0L2Jsb2IvbWFzdGVyL3NyYy90ZXN0LmpzI0wzODFcbiAgICovXG4gIGZ1bmN0aW9uIHByb2Nlc3NUYXNrUXVldWUoc3RhcnQpIHtcbiAgXHRpZiAodGFza1F1ZXVlLmxlbmd0aCAmJiAhY29uZmlnLmJsb2NraW5nKSB7XG4gIFx0XHR2YXIgZWxhcHNlZFRpbWUgPSBub3coKSAtIHN0YXJ0O1xuXG4gIFx0XHRpZiAoIWRlZmluZWQuc2V0VGltZW91dCB8fCBjb25maWcudXBkYXRlUmF0ZSA8PSAwIHx8IGVsYXBzZWRUaW1lIDwgY29uZmlnLnVwZGF0ZVJhdGUpIHtcbiAgXHRcdFx0dmFyIHRhc2sgPSB0YXNrUXVldWUuc2hpZnQoKTtcbiAgXHRcdFx0UHJvbWlzZSQxLnJlc29sdmUodGFzaygpKS50aGVuKGZ1bmN0aW9uICgpIHtcbiAgXHRcdFx0XHRpZiAoIXRhc2tRdWV1ZS5sZW5ndGgpIHtcbiAgXHRcdFx0XHRcdGFkdmFuY2UoKTtcbiAgXHRcdFx0XHR9IGVsc2Uge1xuICBcdFx0XHRcdFx0cHJvY2Vzc1Rhc2tRdWV1ZShzdGFydCk7XG4gIFx0XHRcdFx0fVxuICBcdFx0XHR9KTtcbiAgXHRcdH0gZWxzZSB7XG4gIFx0XHRcdHNldFRpbWVvdXQkMShhZHZhbmNlKTtcbiAgXHRcdH1cbiAgXHR9XG4gIH1cblxuICAvKipcbiAgICogQWR2YW5jZSB0aGUgdGVzdFF1ZXVlIHRvIHRoZSBuZXh0IHRlc3QgdG8gcHJvY2Vzcy4gQ2FsbCBkb25lKCkgaWYgdGVzdFF1ZXVlIGNvbXBsZXRlcy5cbiAgICovXG4gIGZ1bmN0aW9uIGFkdmFuY2VUZXN0UXVldWUoKSB7XG4gIFx0aWYgKCFjb25maWcuYmxvY2tpbmcgJiYgIWNvbmZpZy5xdWV1ZS5sZW5ndGggJiYgY29uZmlnLmRlcHRoID09PSAwKSB7XG4gIFx0XHRkb25lKCk7XG4gIFx0XHRyZXR1cm47XG4gIFx0fVxuXG4gIFx0dmFyIHRlc3RUYXNrcyA9IGNvbmZpZy5xdWV1ZS5zaGlmdCgpO1xuICBcdGFkZFRvVGFza1F1ZXVlKHRlc3RUYXNrcygpKTtcblxuICBcdGlmIChwcmlvcml0eUNvdW50ID4gMCkge1xuICBcdFx0cHJpb3JpdHlDb3VudC0tO1xuICBcdH1cblxuICBcdGFkdmFuY2UoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBFbnF1ZXVlIHRoZSB0YXNrcyBmb3IgYSB0ZXN0IGludG8gdGhlIHRhc2sgcXVldWUuXG4gICAqIEBwYXJhbSB7QXJyYXl9IHRhc2tzQXJyYXlcbiAgICovXG4gIGZ1bmN0aW9uIGFkZFRvVGFza1F1ZXVlKHRhc2tzQXJyYXkpIHtcbiAgXHR0YXNrUXVldWUucHVzaC5hcHBseSh0YXNrUXVldWUsIHRvQ29uc3VtYWJsZUFycmF5KHRhc2tzQXJyYXkpKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm4gdGhlIG51bWJlciBvZiB0YXNrcyByZW1haW5pbmcgaW4gdGhlIHRhc2sgcXVldWUgdG8gYmUgcHJvY2Vzc2VkLlxuICAgKiBAcmV0dXJuIHtOdW1iZXJ9XG4gICAqL1xuICBmdW5jdGlvbiB0YXNrUXVldWVMZW5ndGgoKSB7XG4gIFx0cmV0dXJuIHRhc2tRdWV1ZS5sZW5ndGg7XG4gIH1cblxuICAvKipcbiAgICogQWRkcyBhIHRlc3QgdG8gdGhlIFRlc3RRdWV1ZSBmb3IgZXhlY3V0aW9uLlxuICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSB0ZXN0VGFza3NGdW5jXG4gICAqIEBwYXJhbSB7Qm9vbGVhbn0gcHJpb3JpdGl6ZVxuICAgKiBAcGFyYW0ge1N0cmluZ30gc2VlZFxuICAgKi9cbiAgZnVuY3Rpb24gYWRkVG9UZXN0UXVldWUodGVzdFRhc2tzRnVuYywgcHJpb3JpdGl6ZSwgc2VlZCkge1xuICBcdGlmIChwcmlvcml0aXplKSB7XG4gIFx0XHRjb25maWcucXVldWUuc3BsaWNlKHByaW9yaXR5Q291bnQrKywgMCwgdGVzdFRhc2tzRnVuYyk7XG4gIFx0fSBlbHNlIGlmIChzZWVkKSB7XG4gIFx0XHRpZiAoIXVuaXRTYW1wbGVyKSB7XG4gIFx0XHRcdHVuaXRTYW1wbGVyID0gdW5pdFNhbXBsZXJHZW5lcmF0b3Ioc2VlZCk7XG4gIFx0XHR9XG5cbiAgXHRcdC8vIEluc2VydCBpbnRvIGEgcmFuZG9tIHBvc2l0aW9uIGFmdGVyIGFsbCBwcmlvcml0aXplZCBpdGVtc1xuICBcdFx0dmFyIGluZGV4ID0gTWF0aC5mbG9vcih1bml0U2FtcGxlcigpICogKGNvbmZpZy5xdWV1ZS5sZW5ndGggLSBwcmlvcml0eUNvdW50ICsgMSkpO1xuICBcdFx0Y29uZmlnLnF1ZXVlLnNwbGljZShwcmlvcml0eUNvdW50ICsgaW5kZXgsIDAsIHRlc3RUYXNrc0Z1bmMpO1xuICBcdH0gZWxzZSB7XG4gIFx0XHRjb25maWcucXVldWUucHVzaCh0ZXN0VGFza3NGdW5jKTtcbiAgXHR9XG4gIH1cblxuICAvKipcbiAgICogQ3JlYXRlcyBhIHNlZWRlZCBcInNhbXBsZVwiIGdlbmVyYXRvciB3aGljaCBpcyB1c2VkIGZvciByYW5kb21pemluZyB0ZXN0cy5cbiAgICovXG4gIGZ1bmN0aW9uIHVuaXRTYW1wbGVyR2VuZXJhdG9yKHNlZWQpIHtcblxuICBcdC8vIDMyLWJpdCB4b3JzaGlmdCwgcmVxdWlyZXMgb25seSBhIG5vbnplcm8gc2VlZFxuICBcdC8vIGh0dHA6Ly9leGNhbWVyYS5jb20vc3BoaW54L2FydGljbGUteG9yc2hpZnQuaHRtbFxuICBcdHZhciBzYW1wbGUgPSBwYXJzZUludChnZW5lcmF0ZUhhc2goc2VlZCksIDE2KSB8fCAtMTtcbiAgXHRyZXR1cm4gZnVuY3Rpb24gKCkge1xuICBcdFx0c2FtcGxlIF49IHNhbXBsZSA8PCAxMztcbiAgXHRcdHNhbXBsZSBePSBzYW1wbGUgPj4+IDE3O1xuICBcdFx0c2FtcGxlIF49IHNhbXBsZSA8PCA1O1xuXG4gIFx0XHQvLyBFQ01BU2NyaXB0IGhhcyBubyB1bnNpZ25lZCBudW1iZXIgdHlwZVxuICBcdFx0aWYgKHNhbXBsZSA8IDApIHtcbiAgXHRcdFx0c2FtcGxlICs9IDB4MTAwMDAwMDAwO1xuICBcdFx0fVxuXG4gIFx0XHRyZXR1cm4gc2FtcGxlIC8gMHgxMDAwMDAwMDA7XG4gIFx0fTtcbiAgfVxuXG4gIC8qKlxuICAgKiBUaGlzIGZ1bmN0aW9uIGlzIGNhbGxlZCB3aGVuIHRoZSBQcm9jZXNzaW5nUXVldWUgaXMgZG9uZSBwcm9jZXNzaW5nIGFsbFxuICAgKiBpdGVtcy4gSXQgaGFuZGxlcyBlbWl0dGluZyB0aGUgZmluYWwgcnVuIGV2ZW50cy5cbiAgICovXG4gIGZ1bmN0aW9uIGRvbmUoKSB7XG4gIFx0dmFyIHN0b3JhZ2UgPSBjb25maWcuc3RvcmFnZTtcblxuICBcdFByb2Nlc3NpbmdRdWV1ZS5maW5pc2hlZCA9IHRydWU7XG5cbiAgXHR2YXIgcnVudGltZSA9IG5vdygpIC0gY29uZmlnLnN0YXJ0ZWQ7XG4gIFx0dmFyIHBhc3NlZCA9IGNvbmZpZy5zdGF0cy5hbGwgLSBjb25maWcuc3RhdHMuYmFkO1xuXG4gIFx0aWYgKGNvbmZpZy5zdGF0cy5hbGwgPT09IDApIHtcblxuICBcdFx0aWYgKGNvbmZpZy5maWx0ZXIgJiYgY29uZmlnLmZpbHRlci5sZW5ndGgpIHtcbiAgXHRcdFx0dGhyb3cgbmV3IEVycm9yKFwiTm8gdGVzdHMgbWF0Y2hlZCB0aGUgZmlsdGVyIFxcXCJcIiArIGNvbmZpZy5maWx0ZXIgKyBcIlxcXCIuXCIpO1xuICBcdFx0fVxuXG4gIFx0XHRpZiAoY29uZmlnLm1vZHVsZSAmJiBjb25maWcubW9kdWxlLmxlbmd0aCkge1xuICBcdFx0XHR0aHJvdyBuZXcgRXJyb3IoXCJObyB0ZXN0cyBtYXRjaGVkIHRoZSBtb2R1bGUgXFxcIlwiICsgY29uZmlnLm1vZHVsZSArIFwiXFxcIi5cIik7XG4gIFx0XHR9XG5cbiAgXHRcdGlmIChjb25maWcubW9kdWxlSWQgJiYgY29uZmlnLm1vZHVsZUlkLmxlbmd0aCkge1xuICBcdFx0XHR0aHJvdyBuZXcgRXJyb3IoXCJObyB0ZXN0cyBtYXRjaGVkIHRoZSBtb2R1bGVJZCBcXFwiXCIgKyBjb25maWcubW9kdWxlSWQgKyBcIlxcXCIuXCIpO1xuICBcdFx0fVxuXG4gIFx0XHRpZiAoY29uZmlnLnRlc3RJZCAmJiBjb25maWcudGVzdElkLmxlbmd0aCkge1xuICBcdFx0XHR0aHJvdyBuZXcgRXJyb3IoXCJObyB0ZXN0cyBtYXRjaGVkIHRoZSB0ZXN0SWQgXFxcIlwiICsgY29uZmlnLnRlc3RJZCArIFwiXFxcIi5cIik7XG4gIFx0XHR9XG5cbiAgXHRcdHRocm93IG5ldyBFcnJvcihcIk5vIHRlc3RzIHdlcmUgcnVuLlwiKTtcbiAgXHR9XG5cbiAgXHRlbWl0KFwicnVuRW5kXCIsIGdsb2JhbFN1aXRlLmVuZCh0cnVlKSk7XG4gIFx0cnVuTG9nZ2luZ0NhbGxiYWNrcyhcImRvbmVcIiwge1xuICBcdFx0cGFzc2VkOiBwYXNzZWQsXG4gIFx0XHRmYWlsZWQ6IGNvbmZpZy5zdGF0cy5iYWQsXG4gIFx0XHR0b3RhbDogY29uZmlnLnN0YXRzLmFsbCxcbiAgXHRcdHJ1bnRpbWU6IHJ1bnRpbWVcbiAgXHR9KS50aGVuKGZ1bmN0aW9uICgpIHtcblxuICBcdFx0Ly8gQ2xlYXIgb3duIHN0b3JhZ2UgaXRlbXMgaWYgYWxsIHRlc3RzIHBhc3NlZFxuICBcdFx0aWYgKHN0b3JhZ2UgJiYgY29uZmlnLnN0YXRzLmJhZCA9PT0gMCkge1xuICBcdFx0XHRmb3IgKHZhciBpID0gc3RvcmFnZS5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xuICBcdFx0XHRcdHZhciBrZXkgPSBzdG9yYWdlLmtleShpKTtcblxuICBcdFx0XHRcdGlmIChrZXkuaW5kZXhPZihcInF1bml0LXRlc3QtXCIpID09PSAwKSB7XG4gIFx0XHRcdFx0XHRzdG9yYWdlLnJlbW92ZUl0ZW0oa2V5KTtcbiAgXHRcdFx0XHR9XG4gIFx0XHRcdH1cbiAgXHRcdH1cbiAgXHR9KTtcbiAgfVxuXG4gIHZhciBQcm9jZXNzaW5nUXVldWUgPSB7XG4gIFx0ZmluaXNoZWQ6IGZhbHNlLFxuICBcdGFkZDogYWRkVG9UZXN0UXVldWUsXG4gIFx0YWR2YW5jZTogYWR2YW5jZSxcbiAgXHR0YXNrQ291bnQ6IHRhc2tRdWV1ZUxlbmd0aFxuICB9O1xuXG4gIHZhciBUZXN0UmVwb3J0ID0gZnVuY3Rpb24gKCkge1xuICBcdGZ1bmN0aW9uIFRlc3RSZXBvcnQobmFtZSwgc3VpdGUsIG9wdGlvbnMpIHtcbiAgXHRcdGNsYXNzQ2FsbENoZWNrKHRoaXMsIFRlc3RSZXBvcnQpO1xuXG4gIFx0XHR0aGlzLm5hbWUgPSBuYW1lO1xuICBcdFx0dGhpcy5zdWl0ZU5hbWUgPSBzdWl0ZS5uYW1lO1xuICBcdFx0dGhpcy5mdWxsTmFtZSA9IHN1aXRlLmZ1bGxOYW1lLmNvbmNhdChuYW1lKTtcbiAgXHRcdHRoaXMucnVudGltZSA9IDA7XG4gIFx0XHR0aGlzLmFzc2VydGlvbnMgPSBbXTtcblxuICBcdFx0dGhpcy5za2lwcGVkID0gISFvcHRpb25zLnNraXA7XG4gIFx0XHR0aGlzLnRvZG8gPSAhIW9wdGlvbnMudG9kbztcblxuICBcdFx0dGhpcy52YWxpZCA9IG9wdGlvbnMudmFsaWQ7XG5cbiAgXHRcdHRoaXMuX3N0YXJ0VGltZSA9IDA7XG4gIFx0XHR0aGlzLl9lbmRUaW1lID0gMDtcblxuICBcdFx0c3VpdGUucHVzaFRlc3QodGhpcyk7XG4gIFx0fVxuXG4gIFx0Y3JlYXRlQ2xhc3MoVGVzdFJlcG9ydCwgW3tcbiAgXHRcdGtleTogXCJzdGFydFwiLFxuICBcdFx0dmFsdWU6IGZ1bmN0aW9uIHN0YXJ0KHJlY29yZFRpbWUpIHtcbiAgXHRcdFx0aWYgKHJlY29yZFRpbWUpIHtcbiAgXHRcdFx0XHR0aGlzLl9zdGFydFRpbWUgPSBwZXJmb3JtYW5jZU5vdygpO1xuICBcdFx0XHRcdGlmIChwZXJmb3JtYW5jZSkge1xuICBcdFx0XHRcdFx0cGVyZm9ybWFuY2UubWFyayhcInF1bml0X3Rlc3Rfc3RhcnRcIik7XG4gIFx0XHRcdFx0fVxuICBcdFx0XHR9XG5cbiAgXHRcdFx0cmV0dXJuIHtcbiAgXHRcdFx0XHRuYW1lOiB0aGlzLm5hbWUsXG4gIFx0XHRcdFx0c3VpdGVOYW1lOiB0aGlzLnN1aXRlTmFtZSxcbiAgXHRcdFx0XHRmdWxsTmFtZTogdGhpcy5mdWxsTmFtZS5zbGljZSgpXG4gIFx0XHRcdH07XG4gIFx0XHR9XG4gIFx0fSwge1xuICBcdFx0a2V5OiBcImVuZFwiLFxuICBcdFx0dmFsdWU6IGZ1bmN0aW9uIGVuZChyZWNvcmRUaW1lKSB7XG4gIFx0XHRcdGlmIChyZWNvcmRUaW1lKSB7XG4gIFx0XHRcdFx0dGhpcy5fZW5kVGltZSA9IHBlcmZvcm1hbmNlTm93KCk7XG4gIFx0XHRcdFx0aWYgKHBlcmZvcm1hbmNlKSB7XG4gIFx0XHRcdFx0XHRwZXJmb3JtYW5jZS5tYXJrKFwicXVuaXRfdGVzdF9lbmRcIik7XG5cbiAgXHRcdFx0XHRcdHZhciB0ZXN0TmFtZSA9IHRoaXMuZnVsbE5hbWUuam9pbihcIiDigJMgXCIpO1xuXG4gIFx0XHRcdFx0XHRtZWFzdXJlKFwiUVVuaXQgVGVzdDogXCIgKyB0ZXN0TmFtZSwgXCJxdW5pdF90ZXN0X3N0YXJ0XCIsIFwicXVuaXRfdGVzdF9lbmRcIik7XG4gIFx0XHRcdFx0fVxuICBcdFx0XHR9XG5cbiAgXHRcdFx0cmV0dXJuIGV4dGVuZCh0aGlzLnN0YXJ0KCksIHtcbiAgXHRcdFx0XHRydW50aW1lOiB0aGlzLmdldFJ1bnRpbWUoKSxcbiAgXHRcdFx0XHRzdGF0dXM6IHRoaXMuZ2V0U3RhdHVzKCksXG4gIFx0XHRcdFx0ZXJyb3JzOiB0aGlzLmdldEZhaWxlZEFzc2VydGlvbnMoKSxcbiAgXHRcdFx0XHRhc3NlcnRpb25zOiB0aGlzLmdldEFzc2VydGlvbnMoKVxuICBcdFx0XHR9KTtcbiAgXHRcdH1cbiAgXHR9LCB7XG4gIFx0XHRrZXk6IFwicHVzaEFzc2VydGlvblwiLFxuICBcdFx0dmFsdWU6IGZ1bmN0aW9uIHB1c2hBc3NlcnRpb24oYXNzZXJ0aW9uKSB7XG4gIFx0XHRcdHRoaXMuYXNzZXJ0aW9ucy5wdXNoKGFzc2VydGlvbik7XG4gIFx0XHR9XG4gIFx0fSwge1xuICBcdFx0a2V5OiBcImdldFJ1bnRpbWVcIixcbiAgXHRcdHZhbHVlOiBmdW5jdGlvbiBnZXRSdW50aW1lKCkge1xuICBcdFx0XHRyZXR1cm4gdGhpcy5fZW5kVGltZSAtIHRoaXMuX3N0YXJ0VGltZTtcbiAgXHRcdH1cbiAgXHR9LCB7XG4gIFx0XHRrZXk6IFwiZ2V0U3RhdHVzXCIsXG4gIFx0XHR2YWx1ZTogZnVuY3Rpb24gZ2V0U3RhdHVzKCkge1xuICBcdFx0XHRpZiAodGhpcy5za2lwcGVkKSB7XG4gIFx0XHRcdFx0cmV0dXJuIFwic2tpcHBlZFwiO1xuICBcdFx0XHR9XG5cbiAgXHRcdFx0dmFyIHRlc3RQYXNzZWQgPSB0aGlzLmdldEZhaWxlZEFzc2VydGlvbnMoKS5sZW5ndGggPiAwID8gdGhpcy50b2RvIDogIXRoaXMudG9kbztcblxuICBcdFx0XHRpZiAoIXRlc3RQYXNzZWQpIHtcbiAgXHRcdFx0XHRyZXR1cm4gXCJmYWlsZWRcIjtcbiAgXHRcdFx0fSBlbHNlIGlmICh0aGlzLnRvZG8pIHtcbiAgXHRcdFx0XHRyZXR1cm4gXCJ0b2RvXCI7XG4gIFx0XHRcdH0gZWxzZSB7XG4gIFx0XHRcdFx0cmV0dXJuIFwicGFzc2VkXCI7XG4gIFx0XHRcdH1cbiAgXHRcdH1cbiAgXHR9LCB7XG4gIFx0XHRrZXk6IFwiZ2V0RmFpbGVkQXNzZXJ0aW9uc1wiLFxuICBcdFx0dmFsdWU6IGZ1bmN0aW9uIGdldEZhaWxlZEFzc2VydGlvbnMoKSB7XG4gIFx0XHRcdHJldHVybiB0aGlzLmFzc2VydGlvbnMuZmlsdGVyKGZ1bmN0aW9uIChhc3NlcnRpb24pIHtcbiAgXHRcdFx0XHRyZXR1cm4gIWFzc2VydGlvbi5wYXNzZWQ7XG4gIFx0XHRcdH0pO1xuICBcdFx0fVxuICBcdH0sIHtcbiAgXHRcdGtleTogXCJnZXRBc3NlcnRpb25zXCIsXG4gIFx0XHR2YWx1ZTogZnVuY3Rpb24gZ2V0QXNzZXJ0aW9ucygpIHtcbiAgXHRcdFx0cmV0dXJuIHRoaXMuYXNzZXJ0aW9ucy5zbGljZSgpO1xuICBcdFx0fVxuXG4gIFx0XHQvLyBSZW1vdmUgYWN0dWFsIGFuZCBleHBlY3RlZCB2YWx1ZXMgZnJvbSBhc3NlcnRpb25zLiBUaGlzIGlzIHRvIHByZXZlbnRcbiAgXHRcdC8vIGxlYWtpbmcgbWVtb3J5IHRocm91Z2hvdXQgYSB0ZXN0IHN1aXRlLlxuXG4gIFx0fSwge1xuICBcdFx0a2V5OiBcInNsaW1Bc3NlcnRpb25zXCIsXG4gIFx0XHR2YWx1ZTogZnVuY3Rpb24gc2xpbUFzc2VydGlvbnMoKSB7XG4gIFx0XHRcdHRoaXMuYXNzZXJ0aW9ucyA9IHRoaXMuYXNzZXJ0aW9ucy5tYXAoZnVuY3Rpb24gKGFzc2VydGlvbikge1xuICBcdFx0XHRcdGRlbGV0ZSBhc3NlcnRpb24uYWN0dWFsO1xuICBcdFx0XHRcdGRlbGV0ZSBhc3NlcnRpb24uZXhwZWN0ZWQ7XG4gIFx0XHRcdFx0cmV0dXJuIGFzc2VydGlvbjtcbiAgXHRcdFx0fSk7XG4gIFx0XHR9XG4gIFx0fV0pO1xuICBcdHJldHVybiBUZXN0UmVwb3J0O1xuICB9KCk7XG5cbiAgdmFyIGZvY3VzZWQkMSA9IGZhbHNlO1xuXG4gIGZ1bmN0aW9uIFRlc3Qoc2V0dGluZ3MpIHtcbiAgXHR2YXIgaSwgbDtcblxuICBcdCsrVGVzdC5jb3VudDtcblxuICBcdHRoaXMuZXhwZWN0ZWQgPSBudWxsO1xuICBcdHRoaXMuYXNzZXJ0aW9ucyA9IFtdO1xuICBcdHRoaXMuc2VtYXBob3JlID0gMDtcbiAgXHR0aGlzLm1vZHVsZSA9IGNvbmZpZy5jdXJyZW50TW9kdWxlO1xuICBcdHRoaXMuc3RlcHMgPSBbXTtcbiAgXHR0aGlzLnRpbWVvdXQgPSB1bmRlZmluZWQ7XG4gIFx0dGhpcy5lcnJvckZvclN0YWNrID0gbmV3IEVycm9yKCk7XG5cbiAgXHQvLyBJZiBhIG1vZHVsZSBpcyBza2lwcGVkLCBhbGwgaXRzIHRlc3RzIGFuZCB0aGUgdGVzdHMgb2YgdGhlIGNoaWxkIHN1aXRlc1xuICBcdC8vIHNob3VsZCBiZSB0cmVhdGVkIGFzIHNraXBwZWQgZXZlbiBpZiB0aGV5IGFyZSBkZWZpbmVkIGFzIGBvbmx5YCBvciBgdG9kb2AuXG4gIFx0Ly8gQXMgZm9yIGB0b2RvYCBtb2R1bGUsIGFsbCBpdHMgdGVzdHMgd2lsbCBiZSB0cmVhdGVkIGFzIGB0b2RvYCBleGNlcHQgZm9yXG4gIFx0Ly8gdGVzdHMgZGVmaW5lZCBhcyBgc2tpcGAgd2hpY2ggd2lsbCBiZSBsZWZ0IGludGFjdC5cbiAgXHQvL1xuICBcdC8vIFNvLCBpZiBhIHRlc3QgaXMgZGVmaW5lZCBhcyBgdG9kb2AgYW5kIGlzIGluc2lkZSBhIHNraXBwZWQgbW9kdWxlLCB3ZSBzaG91bGRcbiAgXHQvLyB0aGVuIHRyZWF0IHRoYXQgdGVzdCBhcyBpZiB3YXMgZGVmaW5lZCBhcyBgc2tpcGAuXG4gIFx0aWYgKHRoaXMubW9kdWxlLnNraXApIHtcbiAgXHRcdHNldHRpbmdzLnNraXAgPSB0cnVlO1xuICBcdFx0c2V0dGluZ3MudG9kbyA9IGZhbHNlO1xuXG4gIFx0XHQvLyBTa2lwcGVkIHRlc3RzIHNob3VsZCBiZSBsZWZ0IGludGFjdFxuICBcdH0gZWxzZSBpZiAodGhpcy5tb2R1bGUudG9kbyAmJiAhc2V0dGluZ3Muc2tpcCkge1xuICBcdFx0c2V0dGluZ3MudG9kbyA9IHRydWU7XG4gIFx0fVxuXG4gIFx0ZXh0ZW5kKHRoaXMsIHNldHRpbmdzKTtcblxuICBcdHRoaXMudGVzdFJlcG9ydCA9IG5ldyBUZXN0UmVwb3J0KHNldHRpbmdzLnRlc3ROYW1lLCB0aGlzLm1vZHVsZS5zdWl0ZVJlcG9ydCwge1xuICBcdFx0dG9kbzogc2V0dGluZ3MudG9kbyxcbiAgXHRcdHNraXA6IHNldHRpbmdzLnNraXAsXG4gIFx0XHR2YWxpZDogdGhpcy52YWxpZCgpXG4gIFx0fSk7XG5cbiAgXHQvLyBSZWdpc3RlciB1bmlxdWUgc3RyaW5nc1xuICBcdGZvciAoaSA9IDAsIGwgPSB0aGlzLm1vZHVsZS50ZXN0czsgaSA8IGwubGVuZ3RoOyBpKyspIHtcbiAgXHRcdGlmICh0aGlzLm1vZHVsZS50ZXN0c1tpXS5uYW1lID09PSB0aGlzLnRlc3ROYW1lKSB7XG4gIFx0XHRcdHRoaXMudGVzdE5hbWUgKz0gXCIgXCI7XG4gIFx0XHR9XG4gIFx0fVxuXG4gIFx0dGhpcy50ZXN0SWQgPSBnZW5lcmF0ZUhhc2godGhpcy5tb2R1bGUubmFtZSwgdGhpcy50ZXN0TmFtZSk7XG5cbiAgXHR0aGlzLm1vZHVsZS50ZXN0cy5wdXNoKHtcbiAgXHRcdG5hbWU6IHRoaXMudGVzdE5hbWUsXG4gIFx0XHR0ZXN0SWQ6IHRoaXMudGVzdElkLFxuICBcdFx0c2tpcDogISFzZXR0aW5ncy5za2lwXG4gIFx0fSk7XG5cbiAgXHRpZiAoc2V0dGluZ3Muc2tpcCkge1xuXG4gIFx0XHQvLyBTa2lwcGVkIHRlc3RzIHdpbGwgZnVsbHkgaWdub3JlIGFueSBzZW50IGNhbGxiYWNrXG4gIFx0XHR0aGlzLmNhbGxiYWNrID0gZnVuY3Rpb24gKCkge307XG4gIFx0XHR0aGlzLmFzeW5jID0gZmFsc2U7XG4gIFx0XHR0aGlzLmV4cGVjdGVkID0gMDtcbiAgXHR9IGVsc2Uge1xuICBcdFx0aWYgKHR5cGVvZiB0aGlzLmNhbGxiYWNrICE9PSBcImZ1bmN0aW9uXCIpIHtcbiAgXHRcdFx0dmFyIG1ldGhvZCA9IHRoaXMudG9kbyA/IFwidG9kb1wiIDogXCJ0ZXN0XCI7XG5cbiAgXHRcdFx0Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG1heC1sZW5cbiAgXHRcdFx0dGhyb3cgbmV3IFR5cGVFcnJvcihcIllvdSBtdXN0IHByb3ZpZGUgYSBmdW5jdGlvbiBhcyBhIHRlc3QgY2FsbGJhY2sgdG8gUVVuaXQuXCIgKyBtZXRob2QgKyBcIihcXFwiXCIgKyBzZXR0aW5ncy50ZXN0TmFtZSArIFwiXFxcIilcIik7XG4gIFx0XHR9XG5cbiAgXHRcdHRoaXMuYXNzZXJ0ID0gbmV3IEFzc2VydCh0aGlzKTtcbiAgXHR9XG4gIH1cblxuICBUZXN0LmNvdW50ID0gMDtcblxuICBmdW5jdGlvbiBnZXROb3RTdGFydGVkTW9kdWxlcyhzdGFydE1vZHVsZSkge1xuICBcdHZhciBtb2R1bGUgPSBzdGFydE1vZHVsZSxcbiAgXHQgICAgbW9kdWxlcyA9IFtdO1xuXG4gIFx0d2hpbGUgKG1vZHVsZSAmJiBtb2R1bGUudGVzdHNSdW4gPT09IDApIHtcbiAgXHRcdG1vZHVsZXMucHVzaChtb2R1bGUpO1xuICBcdFx0bW9kdWxlID0gbW9kdWxlLnBhcmVudE1vZHVsZTtcbiAgXHR9XG5cbiAgXHQvLyBUaGUgYWJvdmUgcHVzaCBtb2R1bGVzIGZyb20gdGhlIGNoaWxkIHRvIHRoZSBwYXJlbnRcbiAgXHQvLyByZXR1cm4gYSByZXZlcnNlZCBvcmRlciB3aXRoIHRoZSB0b3AgYmVpbmcgdGhlIHRvcCBtb3N0IHBhcmVudCBtb2R1bGVcbiAgXHRyZXR1cm4gbW9kdWxlcy5yZXZlcnNlKCk7XG4gIH1cblxuICBUZXN0LnByb3RvdHlwZSA9IHtcblxuICBcdC8vIGdlbmVyYXRpbmcgYSBzdGFjayB0cmFjZSBjYW4gYmUgZXhwZW5zaXZlLCBzbyB1c2luZyBhIGdldHRlciBkZWZlcnMgdGhpcyB1bnRpbCB3ZSBuZWVkIGl0XG4gIFx0Z2V0IHN0YWNrKCkge1xuICBcdFx0cmV0dXJuIGV4dHJhY3RTdGFja3RyYWNlKHRoaXMuZXJyb3JGb3JTdGFjaywgMik7XG4gIFx0fSxcblxuICBcdGJlZm9yZTogZnVuY3Rpb24gYmVmb3JlKCkge1xuICBcdFx0dmFyIF90aGlzID0gdGhpcztcblxuICBcdFx0dmFyIG1vZHVsZSA9IHRoaXMubW9kdWxlLFxuICBcdFx0ICAgIG5vdFN0YXJ0ZWRNb2R1bGVzID0gZ2V0Tm90U3RhcnRlZE1vZHVsZXMobW9kdWxlKTtcblxuICBcdFx0Ly8gZW5zdXJlIHRoZSBjYWxsYmFja3MgYXJlIGV4ZWN1dGVkIHNlcmlhbGx5IGZvciBlYWNoIG1vZHVsZVxuICBcdFx0dmFyIGNhbGxiYWNrUHJvbWlzZXMgPSBub3RTdGFydGVkTW9kdWxlcy5yZWR1Y2UoZnVuY3Rpb24gKHByb21pc2VDaGFpbiwgc3RhcnRNb2R1bGUpIHtcbiAgXHRcdFx0cmV0dXJuIHByb21pc2VDaGFpbi50aGVuKGZ1bmN0aW9uICgpIHtcbiAgXHRcdFx0XHRzdGFydE1vZHVsZS5zdGF0cyA9IHsgYWxsOiAwLCBiYWQ6IDAsIHN0YXJ0ZWQ6IG5vdygpIH07XG4gIFx0XHRcdFx0ZW1pdChcInN1aXRlU3RhcnRcIiwgc3RhcnRNb2R1bGUuc3VpdGVSZXBvcnQuc3RhcnQodHJ1ZSkpO1xuICBcdFx0XHRcdHJldHVybiBydW5Mb2dnaW5nQ2FsbGJhY2tzKFwibW9kdWxlU3RhcnRcIiwge1xuICBcdFx0XHRcdFx0bmFtZTogc3RhcnRNb2R1bGUubmFtZSxcbiAgXHRcdFx0XHRcdHRlc3RzOiBzdGFydE1vZHVsZS50ZXN0c1xuICBcdFx0XHRcdH0pO1xuICBcdFx0XHR9KTtcbiAgXHRcdH0sIFByb21pc2UkMS5yZXNvbHZlKFtdKSk7XG5cbiAgXHRcdHJldHVybiBjYWxsYmFja1Byb21pc2VzLnRoZW4oZnVuY3Rpb24gKCkge1xuICBcdFx0XHRjb25maWcuY3VycmVudCA9IF90aGlzO1xuXG4gIFx0XHRcdF90aGlzLnRlc3RFbnZpcm9ubWVudCA9IGV4dGVuZCh7fSwgbW9kdWxlLnRlc3RFbnZpcm9ubWVudCk7XG5cbiAgXHRcdFx0X3RoaXMuc3RhcnRlZCA9IG5vdygpO1xuICBcdFx0XHRlbWl0KFwidGVzdFN0YXJ0XCIsIF90aGlzLnRlc3RSZXBvcnQuc3RhcnQodHJ1ZSkpO1xuICBcdFx0XHRyZXR1cm4gcnVuTG9nZ2luZ0NhbGxiYWNrcyhcInRlc3RTdGFydFwiLCB7XG4gIFx0XHRcdFx0bmFtZTogX3RoaXMudGVzdE5hbWUsXG4gIFx0XHRcdFx0bW9kdWxlOiBtb2R1bGUubmFtZSxcbiAgXHRcdFx0XHR0ZXN0SWQ6IF90aGlzLnRlc3RJZCxcbiAgXHRcdFx0XHRwcmV2aW91c0ZhaWx1cmU6IF90aGlzLnByZXZpb3VzRmFpbHVyZVxuICBcdFx0XHR9KS50aGVuKGZ1bmN0aW9uICgpIHtcbiAgXHRcdFx0XHRpZiAoIWNvbmZpZy5wb2xsdXRpb24pIHtcbiAgXHRcdFx0XHRcdHNhdmVHbG9iYWwoKTtcbiAgXHRcdFx0XHR9XG4gIFx0XHRcdH0pO1xuICBcdFx0fSk7XG4gIFx0fSxcblxuICBcdHJ1bjogZnVuY3Rpb24gcnVuKCkge1xuICBcdFx0dmFyIHByb21pc2U7XG5cbiAgXHRcdGNvbmZpZy5jdXJyZW50ID0gdGhpcztcblxuICBcdFx0dGhpcy5jYWxsYmFja1N0YXJ0ZWQgPSBub3coKTtcblxuICBcdFx0aWYgKGNvbmZpZy5ub3RyeWNhdGNoKSB7XG4gIFx0XHRcdHJ1blRlc3QodGhpcyk7XG4gIFx0XHRcdHJldHVybjtcbiAgXHRcdH1cblxuICBcdFx0dHJ5IHtcbiAgXHRcdFx0cnVuVGVzdCh0aGlzKTtcbiAgXHRcdH0gY2F0Y2ggKGUpIHtcbiAgXHRcdFx0dGhpcy5wdXNoRmFpbHVyZShcIkRpZWQgb24gdGVzdCAjXCIgKyAodGhpcy5hc3NlcnRpb25zLmxlbmd0aCArIDEpICsgXCIgXCIgKyB0aGlzLnN0YWNrICsgXCI6IFwiICsgKGUubWVzc2FnZSB8fCBlKSwgZXh0cmFjdFN0YWNrdHJhY2UoZSwgMCkpO1xuXG4gIFx0XHRcdC8vIEVsc2UgbmV4dCB0ZXN0IHdpbGwgY2FycnkgdGhlIHJlc3BvbnNpYmlsaXR5XG4gIFx0XHRcdHNhdmVHbG9iYWwoKTtcblxuICBcdFx0XHQvLyBSZXN0YXJ0IHRoZSB0ZXN0cyBpZiB0aGV5J3JlIGJsb2NraW5nXG4gIFx0XHRcdGlmIChjb25maWcuYmxvY2tpbmcpIHtcbiAgXHRcdFx0XHRpbnRlcm5hbFJlY292ZXIodGhpcyk7XG4gIFx0XHRcdH1cbiAgXHRcdH1cblxuICBcdFx0ZnVuY3Rpb24gcnVuVGVzdCh0ZXN0KSB7XG4gIFx0XHRcdHByb21pc2UgPSB0ZXN0LmNhbGxiYWNrLmNhbGwodGVzdC50ZXN0RW52aXJvbm1lbnQsIHRlc3QuYXNzZXJ0KTtcbiAgXHRcdFx0dGVzdC5yZXNvbHZlUHJvbWlzZShwcm9taXNlKTtcblxuICBcdFx0XHQvLyBJZiB0aGUgdGVzdCBoYXMgYSBcImxvY2tcIiBvbiBpdCwgYnV0IHRoZSB0aW1lb3V0IGlzIDAsIHRoZW4gd2UgcHVzaCBhXG4gIFx0XHRcdC8vIGZhaWx1cmUgYXMgdGhlIHRlc3Qgc2hvdWxkIGJlIHN5bmNocm9ub3VzLlxuICBcdFx0XHRpZiAodGVzdC50aW1lb3V0ID09PSAwICYmIHRlc3Quc2VtYXBob3JlICE9PSAwKSB7XG4gIFx0XHRcdFx0cHVzaEZhaWx1cmUoXCJUZXN0IGRpZCBub3QgZmluaXNoIHN5bmNocm9ub3VzbHkgZXZlbiB0aG91Z2ggYXNzZXJ0LnRpbWVvdXQoIDAgKSB3YXMgdXNlZC5cIiwgc291cmNlRnJvbVN0YWNrdHJhY2UoMikpO1xuICBcdFx0XHR9XG4gIFx0XHR9XG4gIFx0fSxcblxuICBcdGFmdGVyOiBmdW5jdGlvbiBhZnRlcigpIHtcbiAgXHRcdGNoZWNrUG9sbHV0aW9uKCk7XG4gIFx0fSxcblxuICBcdHF1ZXVlSG9vazogZnVuY3Rpb24gcXVldWVIb29rKGhvb2ssIGhvb2tOYW1lLCBob29rT3duZXIpIHtcbiAgXHRcdHZhciBfdGhpczIgPSB0aGlzO1xuXG4gIFx0XHR2YXIgY2FsbEhvb2sgPSBmdW5jdGlvbiBjYWxsSG9vaygpIHtcbiAgXHRcdFx0dmFyIHByb21pc2UgPSBob29rLmNhbGwoX3RoaXMyLnRlc3RFbnZpcm9ubWVudCwgX3RoaXMyLmFzc2VydCk7XG4gIFx0XHRcdF90aGlzMi5yZXNvbHZlUHJvbWlzZShwcm9taXNlLCBob29rTmFtZSk7XG4gIFx0XHR9O1xuXG4gIFx0XHR2YXIgcnVuSG9vayA9IGZ1bmN0aW9uIHJ1bkhvb2soKSB7XG4gIFx0XHRcdGlmIChob29rTmFtZSA9PT0gXCJiZWZvcmVcIikge1xuICBcdFx0XHRcdGlmIChob29rT3duZXIudW5za2lwcGVkVGVzdHNSdW4gIT09IDApIHtcbiAgXHRcdFx0XHRcdHJldHVybjtcbiAgXHRcdFx0XHR9XG5cbiAgXHRcdFx0XHRfdGhpczIucHJlc2VydmVFbnZpcm9ubWVudCA9IHRydWU7XG4gIFx0XHRcdH1cblxuICBcdFx0XHQvLyBUaGUgJ2FmdGVyJyBob29rIHNob3VsZCBvbmx5IGV4ZWN1dGUgd2hlbiB0aGVyZSBhcmUgbm90IHRlc3RzIGxlZnQgYW5kXG4gIFx0XHRcdC8vIHdoZW4gdGhlICdhZnRlcicgYW5kICdmaW5pc2gnIHRhc2tzIGFyZSB0aGUgb25seSB0YXNrcyBsZWZ0IHRvIHByb2Nlc3NcbiAgXHRcdFx0aWYgKGhvb2tOYW1lID09PSBcImFmdGVyXCIgJiYgaG9va093bmVyLnVuc2tpcHBlZFRlc3RzUnVuICE9PSBudW1iZXJPZlVuc2tpcHBlZFRlc3RzKGhvb2tPd25lcikgLSAxICYmIChjb25maWcucXVldWUubGVuZ3RoID4gMCB8fCBQcm9jZXNzaW5nUXVldWUudGFza0NvdW50KCkgPiAyKSkge1xuICBcdFx0XHRcdHJldHVybjtcbiAgXHRcdFx0fVxuXG4gIFx0XHRcdGNvbmZpZy5jdXJyZW50ID0gX3RoaXMyO1xuICBcdFx0XHRpZiAoY29uZmlnLm5vdHJ5Y2F0Y2gpIHtcbiAgXHRcdFx0XHRjYWxsSG9vaygpO1xuICBcdFx0XHRcdHJldHVybjtcbiAgXHRcdFx0fVxuICBcdFx0XHR0cnkge1xuICBcdFx0XHRcdGNhbGxIb29rKCk7XG4gIFx0XHRcdH0gY2F0Y2ggKGVycm9yKSB7XG4gIFx0XHRcdFx0X3RoaXMyLnB1c2hGYWlsdXJlKGhvb2tOYW1lICsgXCIgZmFpbGVkIG9uIFwiICsgX3RoaXMyLnRlc3ROYW1lICsgXCI6IFwiICsgKGVycm9yLm1lc3NhZ2UgfHwgZXJyb3IpLCBleHRyYWN0U3RhY2t0cmFjZShlcnJvciwgMCkpO1xuICBcdFx0XHR9XG4gIFx0XHR9O1xuXG4gIFx0XHRyZXR1cm4gcnVuSG9vaztcbiAgXHR9LFxuXG5cbiAgXHQvLyBDdXJyZW50bHkgb25seSB1c2VkIGZvciBtb2R1bGUgbGV2ZWwgaG9va3MsIGNhbiBiZSB1c2VkIHRvIGFkZCBnbG9iYWwgbGV2ZWwgb25lc1xuICBcdGhvb2tzOiBmdW5jdGlvbiBob29rcyhoYW5kbGVyKSB7XG4gIFx0XHR2YXIgaG9va3MgPSBbXTtcblxuICBcdFx0ZnVuY3Rpb24gcHJvY2Vzc0hvb2tzKHRlc3QsIG1vZHVsZSkge1xuICBcdFx0XHRpZiAobW9kdWxlLnBhcmVudE1vZHVsZSkge1xuICBcdFx0XHRcdHByb2Nlc3NIb29rcyh0ZXN0LCBtb2R1bGUucGFyZW50TW9kdWxlKTtcbiAgXHRcdFx0fVxuXG4gIFx0XHRcdGlmIChtb2R1bGUuaG9va3NbaGFuZGxlcl0ubGVuZ3RoKSB7XG4gIFx0XHRcdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBtb2R1bGUuaG9va3NbaGFuZGxlcl0ubGVuZ3RoOyBpKyspIHtcbiAgXHRcdFx0XHRcdGhvb2tzLnB1c2godGVzdC5xdWV1ZUhvb2sobW9kdWxlLmhvb2tzW2hhbmRsZXJdW2ldLCBoYW5kbGVyLCBtb2R1bGUpKTtcbiAgXHRcdFx0XHR9XG4gIFx0XHRcdH1cbiAgXHRcdH1cblxuICBcdFx0Ly8gSG9va3MgYXJlIGlnbm9yZWQgb24gc2tpcHBlZCB0ZXN0c1xuICBcdFx0aWYgKCF0aGlzLnNraXApIHtcbiAgXHRcdFx0cHJvY2Vzc0hvb2tzKHRoaXMsIHRoaXMubW9kdWxlKTtcbiAgXHRcdH1cblxuICBcdFx0cmV0dXJuIGhvb2tzO1xuICBcdH0sXG5cblxuICBcdGZpbmlzaDogZnVuY3Rpb24gZmluaXNoKCkge1xuICBcdFx0Y29uZmlnLmN1cnJlbnQgPSB0aGlzO1xuXG4gIFx0XHQvLyBSZWxlYXNlIHRoZSB0ZXN0IGNhbGxiYWNrIHRvIGVuc3VyZSB0aGF0IGFueXRoaW5nIHJlZmVyZW5jZWQgaGFzIGJlZW5cbiAgXHRcdC8vIHJlbGVhc2VkIHRvIGJlIGdhcmJhZ2UgY29sbGVjdGVkLlxuICBcdFx0dGhpcy5jYWxsYmFjayA9IHVuZGVmaW5lZDtcblxuICBcdFx0aWYgKHRoaXMuc3RlcHMubGVuZ3RoKSB7XG4gIFx0XHRcdHZhciBzdGVwc0xpc3QgPSB0aGlzLnN0ZXBzLmpvaW4oXCIsIFwiKTtcbiAgXHRcdFx0dGhpcy5wdXNoRmFpbHVyZShcIkV4cGVjdGVkIGFzc2VydC52ZXJpZnlTdGVwcygpIHRvIGJlIGNhbGxlZCBiZWZvcmUgZW5kIG9mIHRlc3QgXCIgKyAoXCJhZnRlciB1c2luZyBhc3NlcnQuc3RlcCgpLiBVbnZlcmlmaWVkIHN0ZXBzOiBcIiArIHN0ZXBzTGlzdCksIHRoaXMuc3RhY2spO1xuICBcdFx0fVxuXG4gIFx0XHRpZiAoY29uZmlnLnJlcXVpcmVFeHBlY3RzICYmIHRoaXMuZXhwZWN0ZWQgPT09IG51bGwpIHtcbiAgXHRcdFx0dGhpcy5wdXNoRmFpbHVyZShcIkV4cGVjdGVkIG51bWJlciBvZiBhc3NlcnRpb25zIHRvIGJlIGRlZmluZWQsIGJ1dCBleHBlY3QoKSB3YXMgXCIgKyBcIm5vdCBjYWxsZWQuXCIsIHRoaXMuc3RhY2spO1xuICBcdFx0fSBlbHNlIGlmICh0aGlzLmV4cGVjdGVkICE9PSBudWxsICYmIHRoaXMuZXhwZWN0ZWQgIT09IHRoaXMuYXNzZXJ0aW9ucy5sZW5ndGgpIHtcbiAgXHRcdFx0dGhpcy5wdXNoRmFpbHVyZShcIkV4cGVjdGVkIFwiICsgdGhpcy5leHBlY3RlZCArIFwiIGFzc2VydGlvbnMsIGJ1dCBcIiArIHRoaXMuYXNzZXJ0aW9ucy5sZW5ndGggKyBcIiB3ZXJlIHJ1blwiLCB0aGlzLnN0YWNrKTtcbiAgXHRcdH0gZWxzZSBpZiAodGhpcy5leHBlY3RlZCA9PT0gbnVsbCAmJiAhdGhpcy5hc3NlcnRpb25zLmxlbmd0aCkge1xuICBcdFx0XHR0aGlzLnB1c2hGYWlsdXJlKFwiRXhwZWN0ZWQgYXQgbGVhc3Qgb25lIGFzc2VydGlvbiwgYnV0IG5vbmUgd2VyZSBydW4gLSBjYWxsIFwiICsgXCJleHBlY3QoMCkgdG8gYWNjZXB0IHplcm8gYXNzZXJ0aW9ucy5cIiwgdGhpcy5zdGFjayk7XG4gIFx0XHR9XG5cbiAgXHRcdHZhciBpLFxuICBcdFx0ICAgIG1vZHVsZSA9IHRoaXMubW9kdWxlLFxuICBcdFx0ICAgIG1vZHVsZU5hbWUgPSBtb2R1bGUubmFtZSxcbiAgXHRcdCAgICB0ZXN0TmFtZSA9IHRoaXMudGVzdE5hbWUsXG4gIFx0XHQgICAgc2tpcHBlZCA9ICEhdGhpcy5za2lwLFxuICBcdFx0ICAgIHRvZG8gPSAhIXRoaXMudG9kbyxcbiAgXHRcdCAgICBiYWQgPSAwLFxuICBcdFx0ICAgIHN0b3JhZ2UgPSBjb25maWcuc3RvcmFnZTtcblxuICBcdFx0dGhpcy5ydW50aW1lID0gbm93KCkgLSB0aGlzLnN0YXJ0ZWQ7XG5cbiAgXHRcdGNvbmZpZy5zdGF0cy5hbGwgKz0gdGhpcy5hc3NlcnRpb25zLmxlbmd0aDtcbiAgXHRcdG1vZHVsZS5zdGF0cy5hbGwgKz0gdGhpcy5hc3NlcnRpb25zLmxlbmd0aDtcblxuICBcdFx0Zm9yIChpID0gMDsgaSA8IHRoaXMuYXNzZXJ0aW9ucy5sZW5ndGg7IGkrKykge1xuICBcdFx0XHRpZiAoIXRoaXMuYXNzZXJ0aW9uc1tpXS5yZXN1bHQpIHtcbiAgXHRcdFx0XHRiYWQrKztcbiAgXHRcdFx0XHRjb25maWcuc3RhdHMuYmFkKys7XG4gIFx0XHRcdFx0bW9kdWxlLnN0YXRzLmJhZCsrO1xuICBcdFx0XHR9XG4gIFx0XHR9XG5cbiAgXHRcdG5vdGlmeVRlc3RzUmFuKG1vZHVsZSwgc2tpcHBlZCk7XG5cbiAgXHRcdC8vIFN0b3JlIHJlc3VsdCB3aGVuIHBvc3NpYmxlXG4gIFx0XHRpZiAoc3RvcmFnZSkge1xuICBcdFx0XHRpZiAoYmFkKSB7XG4gIFx0XHRcdFx0c3RvcmFnZS5zZXRJdGVtKFwicXVuaXQtdGVzdC1cIiArIG1vZHVsZU5hbWUgKyBcIi1cIiArIHRlc3ROYW1lLCBiYWQpO1xuICBcdFx0XHR9IGVsc2Uge1xuICBcdFx0XHRcdHN0b3JhZ2UucmVtb3ZlSXRlbShcInF1bml0LXRlc3QtXCIgKyBtb2R1bGVOYW1lICsgXCItXCIgKyB0ZXN0TmFtZSk7XG4gIFx0XHRcdH1cbiAgXHRcdH1cblxuICBcdFx0Ly8gQWZ0ZXIgZW1pdHRpbmcgdGhlIGpzLXJlcG9ydGVycyBldmVudCB3ZSBjbGVhbnVwIHRoZSBhc3NlcnRpb24gZGF0YSB0b1xuICBcdFx0Ly8gYXZvaWQgbGVha2luZyBpdC4gSXQgaXMgbm90IHVzZWQgYnkgdGhlIGxlZ2FjeSB0ZXN0RG9uZSBjYWxsYmFja3MuXG4gIFx0XHRlbWl0KFwidGVzdEVuZFwiLCB0aGlzLnRlc3RSZXBvcnQuZW5kKHRydWUpKTtcbiAgXHRcdHRoaXMudGVzdFJlcG9ydC5zbGltQXNzZXJ0aW9ucygpO1xuICBcdFx0dmFyIHRlc3QgPSB0aGlzO1xuXG4gIFx0XHRyZXR1cm4gcnVuTG9nZ2luZ0NhbGxiYWNrcyhcInRlc3REb25lXCIsIHtcbiAgXHRcdFx0bmFtZTogdGVzdE5hbWUsXG4gIFx0XHRcdG1vZHVsZTogbW9kdWxlTmFtZSxcbiAgXHRcdFx0c2tpcHBlZDogc2tpcHBlZCxcbiAgXHRcdFx0dG9kbzogdG9kbyxcbiAgXHRcdFx0ZmFpbGVkOiBiYWQsXG4gIFx0XHRcdHBhc3NlZDogdGhpcy5hc3NlcnRpb25zLmxlbmd0aCAtIGJhZCxcbiAgXHRcdFx0dG90YWw6IHRoaXMuYXNzZXJ0aW9ucy5sZW5ndGgsXG4gIFx0XHRcdHJ1bnRpbWU6IHNraXBwZWQgPyAwIDogdGhpcy5ydW50aW1lLFxuXG4gIFx0XHRcdC8vIEhUTUwgUmVwb3J0ZXIgdXNlXG4gIFx0XHRcdGFzc2VydGlvbnM6IHRoaXMuYXNzZXJ0aW9ucyxcbiAgXHRcdFx0dGVzdElkOiB0aGlzLnRlc3RJZCxcblxuICBcdFx0XHQvLyBTb3VyY2Ugb2YgVGVzdFxuICBcdFx0XHQvLyBnZW5lcmF0aW5nIHN0YWNrIHRyYWNlIGlzIGV4cGVuc2l2ZSwgc28gdXNpbmcgYSBnZXR0ZXIgd2lsbCBoZWxwIGRlZmVyIHRoaXMgdW50aWwgd2UgbmVlZCBpdFxuICBcdFx0XHRnZXQgc291cmNlKCkge1xuICBcdFx0XHRcdHJldHVybiB0ZXN0LnN0YWNrO1xuICBcdFx0XHR9XG4gIFx0XHR9KS50aGVuKGZ1bmN0aW9uICgpIHtcbiAgXHRcdFx0aWYgKG1vZHVsZS50ZXN0c1J1biA9PT0gbnVtYmVyT2ZUZXN0cyhtb2R1bGUpKSB7XG4gIFx0XHRcdFx0dmFyIGNvbXBsZXRlZE1vZHVsZXMgPSBbbW9kdWxlXTtcblxuICBcdFx0XHRcdC8vIENoZWNrIGlmIHRoZSBwYXJlbnQgbW9kdWxlcywgaXRlcmF0aXZlbHksIGFyZSBkb25lLiBJZiB0aGF0IHRoZSBjYXNlLFxuICBcdFx0XHRcdC8vIHdlIGVtaXQgdGhlIGBzdWl0ZUVuZGAgZXZlbnQgYW5kIHRyaWdnZXIgYG1vZHVsZURvbmVgIGNhbGxiYWNrLlxuICBcdFx0XHRcdHZhciBwYXJlbnQgPSBtb2R1bGUucGFyZW50TW9kdWxlO1xuICBcdFx0XHRcdHdoaWxlIChwYXJlbnQgJiYgcGFyZW50LnRlc3RzUnVuID09PSBudW1iZXJPZlRlc3RzKHBhcmVudCkpIHtcbiAgXHRcdFx0XHRcdGNvbXBsZXRlZE1vZHVsZXMucHVzaChwYXJlbnQpO1xuICBcdFx0XHRcdFx0cGFyZW50ID0gcGFyZW50LnBhcmVudE1vZHVsZTtcbiAgXHRcdFx0XHR9XG5cbiAgXHRcdFx0XHRyZXR1cm4gY29tcGxldGVkTW9kdWxlcy5yZWR1Y2UoZnVuY3Rpb24gKHByb21pc2VDaGFpbiwgY29tcGxldGVkTW9kdWxlKSB7XG4gIFx0XHRcdFx0XHRyZXR1cm4gcHJvbWlzZUNoYWluLnRoZW4oZnVuY3Rpb24gKCkge1xuICBcdFx0XHRcdFx0XHRyZXR1cm4gbG9nU3VpdGVFbmQoY29tcGxldGVkTW9kdWxlKTtcbiAgXHRcdFx0XHRcdH0pO1xuICBcdFx0XHRcdH0sIFByb21pc2UkMS5yZXNvbHZlKFtdKSk7XG4gIFx0XHRcdH1cbiAgXHRcdH0pLnRoZW4oZnVuY3Rpb24gKCkge1xuICBcdFx0XHRjb25maWcuY3VycmVudCA9IHVuZGVmaW5lZDtcbiAgXHRcdH0pO1xuXG4gIFx0XHRmdW5jdGlvbiBsb2dTdWl0ZUVuZChtb2R1bGUpIHtcblxuICBcdFx0XHQvLyBSZXNldCBgbW9kdWxlLmhvb2tzYCB0byBlbnN1cmUgdGhhdCBhbnl0aGluZyByZWZlcmVuY2VkIGluIHRoZXNlIGhvb2tzXG4gIFx0XHRcdC8vIGhhcyBiZWVuIHJlbGVhc2VkIHRvIGJlIGdhcmJhZ2UgY29sbGVjdGVkLlxuICBcdFx0XHRtb2R1bGUuaG9va3MgPSB7fTtcblxuICBcdFx0XHRlbWl0KFwic3VpdGVFbmRcIiwgbW9kdWxlLnN1aXRlUmVwb3J0LmVuZCh0cnVlKSk7XG4gIFx0XHRcdHJldHVybiBydW5Mb2dnaW5nQ2FsbGJhY2tzKFwibW9kdWxlRG9uZVwiLCB7XG4gIFx0XHRcdFx0bmFtZTogbW9kdWxlLm5hbWUsXG4gIFx0XHRcdFx0dGVzdHM6IG1vZHVsZS50ZXN0cyxcbiAgXHRcdFx0XHRmYWlsZWQ6IG1vZHVsZS5zdGF0cy5iYWQsXG4gIFx0XHRcdFx0cGFzc2VkOiBtb2R1bGUuc3RhdHMuYWxsIC0gbW9kdWxlLnN0YXRzLmJhZCxcbiAgXHRcdFx0XHR0b3RhbDogbW9kdWxlLnN0YXRzLmFsbCxcbiAgXHRcdFx0XHRydW50aW1lOiBub3coKSAtIG1vZHVsZS5zdGF0cy5zdGFydGVkXG4gIFx0XHRcdH0pO1xuICBcdFx0fVxuICBcdH0sXG5cbiAgXHRwcmVzZXJ2ZVRlc3RFbnZpcm9ubWVudDogZnVuY3Rpb24gcHJlc2VydmVUZXN0RW52aXJvbm1lbnQoKSB7XG4gIFx0XHRpZiAodGhpcy5wcmVzZXJ2ZUVudmlyb25tZW50KSB7XG4gIFx0XHRcdHRoaXMubW9kdWxlLnRlc3RFbnZpcm9ubWVudCA9IHRoaXMudGVzdEVudmlyb25tZW50O1xuICBcdFx0XHR0aGlzLnRlc3RFbnZpcm9ubWVudCA9IGV4dGVuZCh7fSwgdGhpcy5tb2R1bGUudGVzdEVudmlyb25tZW50KTtcbiAgXHRcdH1cbiAgXHR9LFxuXG4gIFx0cXVldWU6IGZ1bmN0aW9uIHF1ZXVlKCkge1xuICBcdFx0dmFyIHRlc3QgPSB0aGlzO1xuXG4gIFx0XHRpZiAoIXRoaXMudmFsaWQoKSkge1xuICBcdFx0XHRyZXR1cm47XG4gIFx0XHR9XG5cbiAgXHRcdGZ1bmN0aW9uIHJ1blRlc3QoKSB7XG4gIFx0XHRcdHJldHVybiBbZnVuY3Rpb24gKCkge1xuICBcdFx0XHRcdHJldHVybiB0ZXN0LmJlZm9yZSgpO1xuICBcdFx0XHR9XS5jb25jYXQodG9Db25zdW1hYmxlQXJyYXkodGVzdC5ob29rcyhcImJlZm9yZVwiKSksIFtmdW5jdGlvbiAoKSB7XG4gIFx0XHRcdFx0dGVzdC5wcmVzZXJ2ZVRlc3RFbnZpcm9ubWVudCgpO1xuICBcdFx0XHR9XSwgdG9Db25zdW1hYmxlQXJyYXkodGVzdC5ob29rcyhcImJlZm9yZUVhY2hcIikpLCBbZnVuY3Rpb24gKCkge1xuICBcdFx0XHRcdHRlc3QucnVuKCk7XG4gIFx0XHRcdH1dLCB0b0NvbnN1bWFibGVBcnJheSh0ZXN0Lmhvb2tzKFwiYWZ0ZXJFYWNoXCIpLnJldmVyc2UoKSksIHRvQ29uc3VtYWJsZUFycmF5KHRlc3QuaG9va3MoXCJhZnRlclwiKS5yZXZlcnNlKCkpLCBbZnVuY3Rpb24gKCkge1xuICBcdFx0XHRcdHRlc3QuYWZ0ZXIoKTtcbiAgXHRcdFx0fSwgZnVuY3Rpb24gKCkge1xuICBcdFx0XHRcdHJldHVybiB0ZXN0LmZpbmlzaCgpO1xuICBcdFx0XHR9XSk7XG4gIFx0XHR9XG5cbiAgXHRcdHZhciBwcmV2aW91c0ZhaWxDb3VudCA9IGNvbmZpZy5zdG9yYWdlICYmICtjb25maWcuc3RvcmFnZS5nZXRJdGVtKFwicXVuaXQtdGVzdC1cIiArIHRoaXMubW9kdWxlLm5hbWUgKyBcIi1cIiArIHRoaXMudGVzdE5hbWUpO1xuXG4gIFx0XHQvLyBQcmlvcml0aXplIHByZXZpb3VzbHkgZmFpbGVkIHRlc3RzLCBkZXRlY3RlZCBmcm9tIHN0b3JhZ2VcbiAgXHRcdHZhciBwcmlvcml0aXplID0gY29uZmlnLnJlb3JkZXIgJiYgISFwcmV2aW91c0ZhaWxDb3VudDtcblxuICBcdFx0dGhpcy5wcmV2aW91c0ZhaWx1cmUgPSAhIXByZXZpb3VzRmFpbENvdW50O1xuXG4gIFx0XHRQcm9jZXNzaW5nUXVldWUuYWRkKHJ1blRlc3QsIHByaW9yaXRpemUsIGNvbmZpZy5zZWVkKTtcblxuICBcdFx0Ly8gSWYgdGhlIHF1ZXVlIGhhcyBhbHJlYWR5IGZpbmlzaGVkLCB3ZSBtYW51YWxseSBwcm9jZXNzIHRoZSBuZXcgdGVzdFxuICBcdFx0aWYgKFByb2Nlc3NpbmdRdWV1ZS5maW5pc2hlZCkge1xuICBcdFx0XHRQcm9jZXNzaW5nUXVldWUuYWR2YW5jZSgpO1xuICBcdFx0fVxuICBcdH0sXG5cblxuICBcdHB1c2hSZXN1bHQ6IGZ1bmN0aW9uIHB1c2hSZXN1bHQocmVzdWx0SW5mbykge1xuICBcdFx0aWYgKHRoaXMgIT09IGNvbmZpZy5jdXJyZW50KSB7XG4gIFx0XHRcdHRocm93IG5ldyBFcnJvcihcIkFzc2VydGlvbiBvY2N1cnJlZCBhZnRlciB0ZXN0IGhhZCBmaW5pc2hlZC5cIik7XG4gIFx0XHR9XG5cbiAgXHRcdC8vIERlc3RydWN0dXJlIG9mIHJlc3VsdEluZm8gPSB7IHJlc3VsdCwgYWN0dWFsLCBleHBlY3RlZCwgbWVzc2FnZSwgbmVnYXRpdmUgfVxuICBcdFx0dmFyIHNvdXJjZSxcbiAgXHRcdCAgICBkZXRhaWxzID0ge1xuICBcdFx0XHRtb2R1bGU6IHRoaXMubW9kdWxlLm5hbWUsXG4gIFx0XHRcdG5hbWU6IHRoaXMudGVzdE5hbWUsXG4gIFx0XHRcdHJlc3VsdDogcmVzdWx0SW5mby5yZXN1bHQsXG4gIFx0XHRcdG1lc3NhZ2U6IHJlc3VsdEluZm8ubWVzc2FnZSxcbiAgXHRcdFx0YWN0dWFsOiByZXN1bHRJbmZvLmFjdHVhbCxcbiAgXHRcdFx0dGVzdElkOiB0aGlzLnRlc3RJZCxcbiAgXHRcdFx0bmVnYXRpdmU6IHJlc3VsdEluZm8ubmVnYXRpdmUgfHwgZmFsc2UsXG4gIFx0XHRcdHJ1bnRpbWU6IG5vdygpIC0gdGhpcy5zdGFydGVkLFxuICBcdFx0XHR0b2RvOiAhIXRoaXMudG9kb1xuICBcdFx0fTtcblxuICBcdFx0aWYgKGhhc093bi5jYWxsKHJlc3VsdEluZm8sIFwiZXhwZWN0ZWRcIikpIHtcbiAgXHRcdFx0ZGV0YWlscy5leHBlY3RlZCA9IHJlc3VsdEluZm8uZXhwZWN0ZWQ7XG4gIFx0XHR9XG5cbiAgXHRcdGlmICghcmVzdWx0SW5mby5yZXN1bHQpIHtcbiAgXHRcdFx0c291cmNlID0gcmVzdWx0SW5mby5zb3VyY2UgfHwgc291cmNlRnJvbVN0YWNrdHJhY2UoKTtcblxuICBcdFx0XHRpZiAoc291cmNlKSB7XG4gIFx0XHRcdFx0ZGV0YWlscy5zb3VyY2UgPSBzb3VyY2U7XG4gIFx0XHRcdH1cbiAgXHRcdH1cblxuICBcdFx0dGhpcy5sb2dBc3NlcnRpb24oZGV0YWlscyk7XG5cbiAgXHRcdHRoaXMuYXNzZXJ0aW9ucy5wdXNoKHtcbiAgXHRcdFx0cmVzdWx0OiAhIXJlc3VsdEluZm8ucmVzdWx0LFxuICBcdFx0XHRtZXNzYWdlOiByZXN1bHRJbmZvLm1lc3NhZ2VcbiAgXHRcdH0pO1xuICBcdH0sXG5cbiAgXHRwdXNoRmFpbHVyZTogZnVuY3Rpb24gcHVzaEZhaWx1cmUobWVzc2FnZSwgc291cmNlLCBhY3R1YWwpIHtcbiAgXHRcdGlmICghKHRoaXMgaW5zdGFuY2VvZiBUZXN0KSkge1xuICBcdFx0XHR0aHJvdyBuZXcgRXJyb3IoXCJwdXNoRmFpbHVyZSgpIGFzc2VydGlvbiBvdXRzaWRlIHRlc3QgY29udGV4dCwgd2FzIFwiICsgc291cmNlRnJvbVN0YWNrdHJhY2UoMikpO1xuICBcdFx0fVxuXG4gIFx0XHR0aGlzLnB1c2hSZXN1bHQoe1xuICBcdFx0XHRyZXN1bHQ6IGZhbHNlLFxuICBcdFx0XHRtZXNzYWdlOiBtZXNzYWdlIHx8IFwiZXJyb3JcIixcbiAgXHRcdFx0YWN0dWFsOiBhY3R1YWwgfHwgbnVsbCxcbiAgXHRcdFx0c291cmNlOiBzb3VyY2VcbiAgXHRcdH0pO1xuICBcdH0sXG5cbiAgXHQvKipcbiAgICAqIExvZyBhc3NlcnRpb24gZGV0YWlscyB1c2luZyBib3RoIHRoZSBvbGQgUVVuaXQubG9nIGludGVyZmFjZSBhbmRcbiAgICAqIFFVbml0Lm9uKCBcImFzc2VydGlvblwiICkgaW50ZXJmYWNlLlxuICAgICpcbiAgICAqIEBwcml2YXRlXG4gICAgKi9cbiAgXHRsb2dBc3NlcnRpb246IGZ1bmN0aW9uIGxvZ0Fzc2VydGlvbihkZXRhaWxzKSB7XG4gIFx0XHRydW5Mb2dnaW5nQ2FsbGJhY2tzKFwibG9nXCIsIGRldGFpbHMpO1xuXG4gIFx0XHR2YXIgYXNzZXJ0aW9uID0ge1xuICBcdFx0XHRwYXNzZWQ6IGRldGFpbHMucmVzdWx0LFxuICBcdFx0XHRhY3R1YWw6IGRldGFpbHMuYWN0dWFsLFxuICBcdFx0XHRleHBlY3RlZDogZGV0YWlscy5leHBlY3RlZCxcbiAgXHRcdFx0bWVzc2FnZTogZGV0YWlscy5tZXNzYWdlLFxuICBcdFx0XHRzdGFjazogZGV0YWlscy5zb3VyY2UsXG4gIFx0XHRcdHRvZG86IGRldGFpbHMudG9kb1xuICBcdFx0fTtcbiAgXHRcdHRoaXMudGVzdFJlcG9ydC5wdXNoQXNzZXJ0aW9uKGFzc2VydGlvbik7XG4gIFx0XHRlbWl0KFwiYXNzZXJ0aW9uXCIsIGFzc2VydGlvbik7XG4gIFx0fSxcblxuXG4gIFx0cmVzb2x2ZVByb21pc2U6IGZ1bmN0aW9uIHJlc29sdmVQcm9taXNlKHByb21pc2UsIHBoYXNlKSB7XG4gIFx0XHR2YXIgdGhlbixcbiAgXHRcdCAgICByZXN1bWUsXG4gIFx0XHQgICAgbWVzc2FnZSxcbiAgXHRcdCAgICB0ZXN0ID0gdGhpcztcbiAgXHRcdGlmIChwcm9taXNlICE9IG51bGwpIHtcbiAgXHRcdFx0dGhlbiA9IHByb21pc2UudGhlbjtcbiAgXHRcdFx0aWYgKG9iamVjdFR5cGUodGhlbikgPT09IFwiZnVuY3Rpb25cIikge1xuICBcdFx0XHRcdHJlc3VtZSA9IGludGVybmFsU3RvcCh0ZXN0KTtcbiAgXHRcdFx0XHRpZiAoY29uZmlnLm5vdHJ5Y2F0Y2gpIHtcbiAgXHRcdFx0XHRcdHRoZW4uY2FsbChwcm9taXNlLCBmdW5jdGlvbiAoKSB7XG4gIFx0XHRcdFx0XHRcdHJlc3VtZSgpO1xuICBcdFx0XHRcdFx0fSk7XG4gIFx0XHRcdFx0fSBlbHNlIHtcbiAgXHRcdFx0XHRcdHRoZW4uY2FsbChwcm9taXNlLCBmdW5jdGlvbiAoKSB7XG4gIFx0XHRcdFx0XHRcdHJlc3VtZSgpO1xuICBcdFx0XHRcdFx0fSwgZnVuY3Rpb24gKGVycm9yKSB7XG4gIFx0XHRcdFx0XHRcdG1lc3NhZ2UgPSBcIlByb21pc2UgcmVqZWN0ZWQgXCIgKyAoIXBoYXNlID8gXCJkdXJpbmdcIiA6IHBoYXNlLnJlcGxhY2UoL0VhY2gkLywgXCJcIikpICsgXCIgXFxcIlwiICsgdGVzdC50ZXN0TmFtZSArIFwiXFxcIjogXCIgKyAoZXJyb3IgJiYgZXJyb3IubWVzc2FnZSB8fCBlcnJvcik7XG4gIFx0XHRcdFx0XHRcdHRlc3QucHVzaEZhaWx1cmUobWVzc2FnZSwgZXh0cmFjdFN0YWNrdHJhY2UoZXJyb3IsIDApKTtcblxuICBcdFx0XHRcdFx0XHQvLyBFbHNlIG5leHQgdGVzdCB3aWxsIGNhcnJ5IHRoZSByZXNwb25zaWJpbGl0eVxuICBcdFx0XHRcdFx0XHRzYXZlR2xvYmFsKCk7XG5cbiAgXHRcdFx0XHRcdFx0Ly8gVW5ibG9ja1xuICBcdFx0XHRcdFx0XHRpbnRlcm5hbFJlY292ZXIodGVzdCk7XG4gIFx0XHRcdFx0XHR9KTtcbiAgXHRcdFx0XHR9XG4gIFx0XHRcdH1cbiAgXHRcdH1cbiAgXHR9LFxuXG4gIFx0dmFsaWQ6IGZ1bmN0aW9uIHZhbGlkKCkge1xuICBcdFx0dmFyIGZpbHRlciA9IGNvbmZpZy5maWx0ZXIsXG4gIFx0XHQgICAgcmVnZXhGaWx0ZXIgPSAvXighPylcXC8oW1xcd1xcV10qKVxcLyhpPyQpLy5leGVjKGZpbHRlciksXG4gIFx0XHQgICAgbW9kdWxlID0gY29uZmlnLm1vZHVsZSAmJiBjb25maWcubW9kdWxlLnRvTG93ZXJDYXNlKCksXG4gIFx0XHQgICAgZnVsbE5hbWUgPSB0aGlzLm1vZHVsZS5uYW1lICsgXCI6IFwiICsgdGhpcy50ZXN0TmFtZTtcblxuICBcdFx0ZnVuY3Rpb24gbW9kdWxlQ2hhaW5OYW1lTWF0Y2godGVzdE1vZHVsZSkge1xuICBcdFx0XHR2YXIgdGVzdE1vZHVsZU5hbWUgPSB0ZXN0TW9kdWxlLm5hbWUgPyB0ZXN0TW9kdWxlLm5hbWUudG9Mb3dlckNhc2UoKSA6IG51bGw7XG4gIFx0XHRcdGlmICh0ZXN0TW9kdWxlTmFtZSA9PT0gbW9kdWxlKSB7XG4gIFx0XHRcdFx0cmV0dXJuIHRydWU7XG4gIFx0XHRcdH0gZWxzZSBpZiAodGVzdE1vZHVsZS5wYXJlbnRNb2R1bGUpIHtcbiAgXHRcdFx0XHRyZXR1cm4gbW9kdWxlQ2hhaW5OYW1lTWF0Y2godGVzdE1vZHVsZS5wYXJlbnRNb2R1bGUpO1xuICBcdFx0XHR9IGVsc2Uge1xuICBcdFx0XHRcdHJldHVybiBmYWxzZTtcbiAgXHRcdFx0fVxuICBcdFx0fVxuXG4gIFx0XHRmdW5jdGlvbiBtb2R1bGVDaGFpbklkTWF0Y2godGVzdE1vZHVsZSkge1xuICBcdFx0XHRyZXR1cm4gaW5BcnJheSh0ZXN0TW9kdWxlLm1vZHVsZUlkLCBjb25maWcubW9kdWxlSWQpIHx8IHRlc3RNb2R1bGUucGFyZW50TW9kdWxlICYmIG1vZHVsZUNoYWluSWRNYXRjaCh0ZXN0TW9kdWxlLnBhcmVudE1vZHVsZSk7XG4gIFx0XHR9XG5cbiAgXHRcdC8vIEludGVybmFsbHktZ2VuZXJhdGVkIHRlc3RzIGFyZSBhbHdheXMgdmFsaWRcbiAgXHRcdGlmICh0aGlzLmNhbGxiYWNrICYmIHRoaXMuY2FsbGJhY2sudmFsaWRUZXN0KSB7XG4gIFx0XHRcdHJldHVybiB0cnVlO1xuICBcdFx0fVxuXG4gIFx0XHRpZiAoY29uZmlnLm1vZHVsZUlkICYmIGNvbmZpZy5tb2R1bGVJZC5sZW5ndGggPiAwICYmICFtb2R1bGVDaGFpbklkTWF0Y2godGhpcy5tb2R1bGUpKSB7XG5cbiAgXHRcdFx0cmV0dXJuIGZhbHNlO1xuICBcdFx0fVxuXG4gIFx0XHRpZiAoY29uZmlnLnRlc3RJZCAmJiBjb25maWcudGVzdElkLmxlbmd0aCA+IDAgJiYgIWluQXJyYXkodGhpcy50ZXN0SWQsIGNvbmZpZy50ZXN0SWQpKSB7XG5cbiAgXHRcdFx0cmV0dXJuIGZhbHNlO1xuICBcdFx0fVxuXG4gIFx0XHRpZiAobW9kdWxlICYmICFtb2R1bGVDaGFpbk5hbWVNYXRjaCh0aGlzLm1vZHVsZSkpIHtcbiAgXHRcdFx0cmV0dXJuIGZhbHNlO1xuICBcdFx0fVxuXG4gIFx0XHRpZiAoIWZpbHRlcikge1xuICBcdFx0XHRyZXR1cm4gdHJ1ZTtcbiAgXHRcdH1cblxuICBcdFx0cmV0dXJuIHJlZ2V4RmlsdGVyID8gdGhpcy5yZWdleEZpbHRlcighIXJlZ2V4RmlsdGVyWzFdLCByZWdleEZpbHRlclsyXSwgcmVnZXhGaWx0ZXJbM10sIGZ1bGxOYW1lKSA6IHRoaXMuc3RyaW5nRmlsdGVyKGZpbHRlciwgZnVsbE5hbWUpO1xuICBcdH0sXG5cbiAgXHRyZWdleEZpbHRlcjogZnVuY3Rpb24gcmVnZXhGaWx0ZXIoZXhjbHVkZSwgcGF0dGVybiwgZmxhZ3MsIGZ1bGxOYW1lKSB7XG4gIFx0XHR2YXIgcmVnZXggPSBuZXcgUmVnRXhwKHBhdHRlcm4sIGZsYWdzKTtcbiAgXHRcdHZhciBtYXRjaCA9IHJlZ2V4LnRlc3QoZnVsbE5hbWUpO1xuXG4gIFx0XHRyZXR1cm4gbWF0Y2ggIT09IGV4Y2x1ZGU7XG4gIFx0fSxcblxuICBcdHN0cmluZ0ZpbHRlcjogZnVuY3Rpb24gc3RyaW5nRmlsdGVyKGZpbHRlciwgZnVsbE5hbWUpIHtcbiAgXHRcdGZpbHRlciA9IGZpbHRlci50b0xvd2VyQ2FzZSgpO1xuICBcdFx0ZnVsbE5hbWUgPSBmdWxsTmFtZS50b0xvd2VyQ2FzZSgpO1xuXG4gIFx0XHR2YXIgaW5jbHVkZSA9IGZpbHRlci5jaGFyQXQoMCkgIT09IFwiIVwiO1xuICBcdFx0aWYgKCFpbmNsdWRlKSB7XG4gIFx0XHRcdGZpbHRlciA9IGZpbHRlci5zbGljZSgxKTtcbiAgXHRcdH1cblxuICBcdFx0Ly8gSWYgdGhlIGZpbHRlciBtYXRjaGVzLCB3ZSBuZWVkIHRvIGhvbm91ciBpbmNsdWRlXG4gIFx0XHRpZiAoZnVsbE5hbWUuaW5kZXhPZihmaWx0ZXIpICE9PSAtMSkge1xuICBcdFx0XHRyZXR1cm4gaW5jbHVkZTtcbiAgXHRcdH1cblxuICBcdFx0Ly8gT3RoZXJ3aXNlLCBkbyB0aGUgb3Bwb3NpdGVcbiAgXHRcdHJldHVybiAhaW5jbHVkZTtcbiAgXHR9XG4gIH07XG5cbiAgZnVuY3Rpb24gcHVzaEZhaWx1cmUoKSB7XG4gIFx0aWYgKCFjb25maWcuY3VycmVudCkge1xuICBcdFx0dGhyb3cgbmV3IEVycm9yKFwicHVzaEZhaWx1cmUoKSBhc3NlcnRpb24gb3V0c2lkZSB0ZXN0IGNvbnRleHQsIGluIFwiICsgc291cmNlRnJvbVN0YWNrdHJhY2UoMikpO1xuICBcdH1cblxuICBcdC8vIEdldHMgY3VycmVudCB0ZXN0IG9ialxuICBcdHZhciBjdXJyZW50VGVzdCA9IGNvbmZpZy5jdXJyZW50O1xuXG4gIFx0cmV0dXJuIGN1cnJlbnRUZXN0LnB1c2hGYWlsdXJlLmFwcGx5KGN1cnJlbnRUZXN0LCBhcmd1bWVudHMpO1xuICB9XG5cbiAgZnVuY3Rpb24gc2F2ZUdsb2JhbCgpIHtcbiAgXHRjb25maWcucG9sbHV0aW9uID0gW107XG5cbiAgXHRpZiAoY29uZmlnLm5vZ2xvYmFscykge1xuICBcdFx0Zm9yICh2YXIga2V5IGluIGdsb2JhbCQxKSB7XG4gIFx0XHRcdGlmIChoYXNPd24uY2FsbChnbG9iYWwkMSwga2V5KSkge1xuXG4gIFx0XHRcdFx0Ly8gSW4gT3BlcmEgc29tZXRpbWVzIERPTSBlbGVtZW50IGlkcyBzaG93IHVwIGhlcmUsIGlnbm9yZSB0aGVtXG4gIFx0XHRcdFx0aWYgKC9ecXVuaXQtdGVzdC1vdXRwdXQvLnRlc3Qoa2V5KSkge1xuICBcdFx0XHRcdFx0Y29udGludWU7XG4gIFx0XHRcdFx0fVxuICBcdFx0XHRcdGNvbmZpZy5wb2xsdXRpb24ucHVzaChrZXkpO1xuICBcdFx0XHR9XG4gIFx0XHR9XG4gIFx0fVxuICB9XG5cbiAgZnVuY3Rpb24gY2hlY2tQb2xsdXRpb24oKSB7XG4gIFx0dmFyIG5ld0dsb2JhbHMsXG4gIFx0ICAgIGRlbGV0ZWRHbG9iYWxzLFxuICBcdCAgICBvbGQgPSBjb25maWcucG9sbHV0aW9uO1xuXG4gIFx0c2F2ZUdsb2JhbCgpO1xuXG4gIFx0bmV3R2xvYmFscyA9IGRpZmYoY29uZmlnLnBvbGx1dGlvbiwgb2xkKTtcbiAgXHRpZiAobmV3R2xvYmFscy5sZW5ndGggPiAwKSB7XG4gIFx0XHRwdXNoRmFpbHVyZShcIkludHJvZHVjZWQgZ2xvYmFsIHZhcmlhYmxlKHMpOiBcIiArIG5ld0dsb2JhbHMuam9pbihcIiwgXCIpKTtcbiAgXHR9XG5cbiAgXHRkZWxldGVkR2xvYmFscyA9IGRpZmYob2xkLCBjb25maWcucG9sbHV0aW9uKTtcbiAgXHRpZiAoZGVsZXRlZEdsb2JhbHMubGVuZ3RoID4gMCkge1xuICBcdFx0cHVzaEZhaWx1cmUoXCJEZWxldGVkIGdsb2JhbCB2YXJpYWJsZShzKTogXCIgKyBkZWxldGVkR2xvYmFscy5qb2luKFwiLCBcIikpO1xuICBcdH1cbiAgfVxuXG4gIC8vIFdpbGwgYmUgZXhwb3NlZCBhcyBRVW5pdC50ZXN0XG4gIGZ1bmN0aW9uIHRlc3QodGVzdE5hbWUsIGNhbGxiYWNrKSB7XG4gIFx0aWYgKGZvY3VzZWQkMSkge1xuICBcdFx0cmV0dXJuO1xuICBcdH1cblxuICBcdHZhciBuZXdUZXN0ID0gbmV3IFRlc3Qoe1xuICBcdFx0dGVzdE5hbWU6IHRlc3ROYW1lLFxuICBcdFx0Y2FsbGJhY2s6IGNhbGxiYWNrXG4gIFx0fSk7XG5cbiAgXHRuZXdUZXN0LnF1ZXVlKCk7XG4gIH1cblxuICBmdW5jdGlvbiB0b2RvKHRlc3ROYW1lLCBjYWxsYmFjaykge1xuICBcdGlmIChmb2N1c2VkJDEpIHtcbiAgXHRcdHJldHVybjtcbiAgXHR9XG5cbiAgXHR2YXIgbmV3VGVzdCA9IG5ldyBUZXN0KHtcbiAgXHRcdHRlc3ROYW1lOiB0ZXN0TmFtZSxcbiAgXHRcdGNhbGxiYWNrOiBjYWxsYmFjayxcbiAgXHRcdHRvZG86IHRydWVcbiAgXHR9KTtcblxuICBcdG5ld1Rlc3QucXVldWUoKTtcbiAgfVxuXG4gIC8vIFdpbGwgYmUgZXhwb3NlZCBhcyBRVW5pdC5za2lwXG4gIGZ1bmN0aW9uIHNraXAodGVzdE5hbWUpIHtcbiAgXHRpZiAoZm9jdXNlZCQxKSB7XG4gIFx0XHRyZXR1cm47XG4gIFx0fVxuXG4gIFx0dmFyIHRlc3QgPSBuZXcgVGVzdCh7XG4gIFx0XHR0ZXN0TmFtZTogdGVzdE5hbWUsXG4gIFx0XHRza2lwOiB0cnVlXG4gIFx0fSk7XG5cbiAgXHR0ZXN0LnF1ZXVlKCk7XG4gIH1cblxuICAvLyBXaWxsIGJlIGV4cG9zZWQgYXMgUVVuaXQub25seVxuICBmdW5jdGlvbiBvbmx5KHRlc3ROYW1lLCBjYWxsYmFjaykge1xuICBcdGlmIChmb2N1c2VkJDEpIHtcbiAgXHRcdHJldHVybjtcbiAgXHR9XG5cbiAgXHRjb25maWcucXVldWUubGVuZ3RoID0gMDtcbiAgXHRmb2N1c2VkJDEgPSB0cnVlO1xuXG4gIFx0dmFyIG5ld1Rlc3QgPSBuZXcgVGVzdCh7XG4gIFx0XHR0ZXN0TmFtZTogdGVzdE5hbWUsXG4gIFx0XHRjYWxsYmFjazogY2FsbGJhY2tcbiAgXHR9KTtcblxuICBcdG5ld1Rlc3QucXVldWUoKTtcbiAgfVxuXG4gIC8vIFJlc2V0cyBjb25maWcudGltZW91dCB3aXRoIGEgbmV3IHRpbWVvdXQgZHVyYXRpb24uXG4gIGZ1bmN0aW9uIHJlc2V0VGVzdFRpbWVvdXQodGltZW91dER1cmF0aW9uKSB7XG4gIFx0Y2xlYXJUaW1lb3V0KGNvbmZpZy50aW1lb3V0KTtcbiAgXHRjb25maWcudGltZW91dCA9IHNldFRpbWVvdXQkMShjb25maWcudGltZW91dEhhbmRsZXIodGltZW91dER1cmF0aW9uKSwgdGltZW91dER1cmF0aW9uKTtcbiAgfVxuXG4gIC8vIFB1dCBhIGhvbGQgb24gcHJvY2Vzc2luZyBhbmQgcmV0dXJuIGEgZnVuY3Rpb24gdGhhdCB3aWxsIHJlbGVhc2UgaXQuXG4gIGZ1bmN0aW9uIGludGVybmFsU3RvcCh0ZXN0KSB7XG4gIFx0dmFyIHJlbGVhc2VkID0gZmFsc2U7XG4gIFx0dGVzdC5zZW1hcGhvcmUgKz0gMTtcbiAgXHRjb25maWcuYmxvY2tpbmcgPSB0cnVlO1xuXG4gIFx0Ly8gU2V0IGEgcmVjb3ZlcnkgdGltZW91dCwgaWYgc28gY29uZmlndXJlZC5cbiAgXHRpZiAoZGVmaW5lZC5zZXRUaW1lb3V0KSB7XG4gIFx0XHR2YXIgdGltZW91dER1cmF0aW9uID0gdm9pZCAwO1xuXG4gIFx0XHRpZiAodHlwZW9mIHRlc3QudGltZW91dCA9PT0gXCJudW1iZXJcIikge1xuICBcdFx0XHR0aW1lb3V0RHVyYXRpb24gPSB0ZXN0LnRpbWVvdXQ7XG4gIFx0XHR9IGVsc2UgaWYgKHR5cGVvZiBjb25maWcudGVzdFRpbWVvdXQgPT09IFwibnVtYmVyXCIpIHtcbiAgXHRcdFx0dGltZW91dER1cmF0aW9uID0gY29uZmlnLnRlc3RUaW1lb3V0O1xuICBcdFx0fVxuXG4gIFx0XHRpZiAodHlwZW9mIHRpbWVvdXREdXJhdGlvbiA9PT0gXCJudW1iZXJcIiAmJiB0aW1lb3V0RHVyYXRpb24gPiAwKSB7XG4gIFx0XHRcdGNsZWFyVGltZW91dChjb25maWcudGltZW91dCk7XG4gIFx0XHRcdGNvbmZpZy50aW1lb3V0SGFuZGxlciA9IGZ1bmN0aW9uICh0aW1lb3V0KSB7XG4gIFx0XHRcdFx0cmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgXHRcdFx0XHRcdHB1c2hGYWlsdXJlKFwiVGVzdCB0b29rIGxvbmdlciB0aGFuIFwiICsgdGltZW91dCArIFwibXM7IHRlc3QgdGltZWQgb3V0LlwiLCBzb3VyY2VGcm9tU3RhY2t0cmFjZSgyKSk7XG4gIFx0XHRcdFx0XHRyZWxlYXNlZCA9IHRydWU7XG4gIFx0XHRcdFx0XHRpbnRlcm5hbFJlY292ZXIodGVzdCk7XG4gIFx0XHRcdFx0fTtcbiAgXHRcdFx0fTtcbiAgXHRcdFx0Y29uZmlnLnRpbWVvdXQgPSBzZXRUaW1lb3V0JDEoY29uZmlnLnRpbWVvdXRIYW5kbGVyKHRpbWVvdXREdXJhdGlvbiksIHRpbWVvdXREdXJhdGlvbik7XG4gIFx0XHR9XG4gIFx0fVxuXG4gIFx0cmV0dXJuIGZ1bmN0aW9uIHJlc3VtZSgpIHtcbiAgXHRcdGlmIChyZWxlYXNlZCkge1xuICBcdFx0XHRyZXR1cm47XG4gIFx0XHR9XG5cbiAgXHRcdHJlbGVhc2VkID0gdHJ1ZTtcbiAgXHRcdHRlc3Quc2VtYXBob3JlIC09IDE7XG4gIFx0XHRpbnRlcm5hbFN0YXJ0KHRlc3QpO1xuICBcdH07XG4gIH1cblxuICAvLyBGb3JjZWZ1bGx5IHJlbGVhc2UgYWxsIHByb2Nlc3NpbmcgaG9sZHMuXG4gIGZ1bmN0aW9uIGludGVybmFsUmVjb3Zlcih0ZXN0KSB7XG4gIFx0dGVzdC5zZW1hcGhvcmUgPSAwO1xuICBcdGludGVybmFsU3RhcnQodGVzdCk7XG4gIH1cblxuICAvLyBSZWxlYXNlIGEgcHJvY2Vzc2luZyBob2xkLCBzY2hlZHVsaW5nIGEgcmVzdW1wdGlvbiBhdHRlbXB0IGlmIG5vIGhvbGRzIHJlbWFpbi5cbiAgZnVuY3Rpb24gaW50ZXJuYWxTdGFydCh0ZXN0KSB7XG5cbiAgXHQvLyBJZiBzZW1hcGhvcmUgaXMgbm9uLW51bWVyaWMsIHRocm93IGVycm9yXG4gIFx0aWYgKGlzTmFOKHRlc3Quc2VtYXBob3JlKSkge1xuICBcdFx0dGVzdC5zZW1hcGhvcmUgPSAwO1xuXG4gIFx0XHRwdXNoRmFpbHVyZShcIkludmFsaWQgdmFsdWUgb24gdGVzdC5zZW1hcGhvcmVcIiwgc291cmNlRnJvbVN0YWNrdHJhY2UoMikpO1xuICBcdFx0cmV0dXJuO1xuICBcdH1cblxuICBcdC8vIERvbid0IHN0YXJ0IHVudGlsIGVxdWFsIG51bWJlciBvZiBzdG9wLWNhbGxzXG4gIFx0aWYgKHRlc3Quc2VtYXBob3JlID4gMCkge1xuICBcdFx0cmV0dXJuO1xuICBcdH1cblxuICBcdC8vIFRocm93IGFuIEVycm9yIGlmIHN0YXJ0IGlzIGNhbGxlZCBtb3JlIG9mdGVuIHRoYW4gc3RvcFxuICBcdGlmICh0ZXN0LnNlbWFwaG9yZSA8IDApIHtcbiAgXHRcdHRlc3Quc2VtYXBob3JlID0gMDtcblxuICBcdFx0cHVzaEZhaWx1cmUoXCJUcmllZCB0byByZXN0YXJ0IHRlc3Qgd2hpbGUgYWxyZWFkeSBzdGFydGVkICh0ZXN0J3Mgc2VtYXBob3JlIHdhcyAwIGFscmVhZHkpXCIsIHNvdXJjZUZyb21TdGFja3RyYWNlKDIpKTtcbiAgXHRcdHJldHVybjtcbiAgXHR9XG5cbiAgXHQvLyBBZGQgYSBzbGlnaHQgZGVsYXkgdG8gYWxsb3cgbW9yZSBhc3NlcnRpb25zIGV0Yy5cbiAgXHRpZiAoZGVmaW5lZC5zZXRUaW1lb3V0KSB7XG4gIFx0XHRpZiAoY29uZmlnLnRpbWVvdXQpIHtcbiAgXHRcdFx0Y2xlYXJUaW1lb3V0KGNvbmZpZy50aW1lb3V0KTtcbiAgXHRcdH1cbiAgXHRcdGNvbmZpZy50aW1lb3V0ID0gc2V0VGltZW91dCQxKGZ1bmN0aW9uICgpIHtcbiAgXHRcdFx0aWYgKHRlc3Quc2VtYXBob3JlID4gMCkge1xuICBcdFx0XHRcdHJldHVybjtcbiAgXHRcdFx0fVxuXG4gIFx0XHRcdGlmIChjb25maWcudGltZW91dCkge1xuICBcdFx0XHRcdGNsZWFyVGltZW91dChjb25maWcudGltZW91dCk7XG4gIFx0XHRcdH1cblxuICBcdFx0XHRiZWdpbigpO1xuICBcdFx0fSk7XG4gIFx0fSBlbHNlIHtcbiAgXHRcdGJlZ2luKCk7XG4gIFx0fVxuICB9XG5cbiAgZnVuY3Rpb24gY29sbGVjdFRlc3RzKG1vZHVsZSkge1xuICBcdHZhciB0ZXN0cyA9IFtdLmNvbmNhdChtb2R1bGUudGVzdHMpO1xuICBcdHZhciBtb2R1bGVzID0gW10uY29uY2F0KHRvQ29uc3VtYWJsZUFycmF5KG1vZHVsZS5jaGlsZE1vZHVsZXMpKTtcblxuICBcdC8vIERvIGEgYnJlYWR0aC1maXJzdCB0cmF2ZXJzYWwgb2YgdGhlIGNoaWxkIG1vZHVsZXNcbiAgXHR3aGlsZSAobW9kdWxlcy5sZW5ndGgpIHtcbiAgXHRcdHZhciBuZXh0TW9kdWxlID0gbW9kdWxlcy5zaGlmdCgpO1xuICBcdFx0dGVzdHMucHVzaC5hcHBseSh0ZXN0cywgbmV4dE1vZHVsZS50ZXN0cyk7XG4gIFx0XHRtb2R1bGVzLnB1c2guYXBwbHkobW9kdWxlcywgdG9Db25zdW1hYmxlQXJyYXkobmV4dE1vZHVsZS5jaGlsZE1vZHVsZXMpKTtcbiAgXHR9XG5cbiAgXHRyZXR1cm4gdGVzdHM7XG4gIH1cblxuICBmdW5jdGlvbiBudW1iZXJPZlRlc3RzKG1vZHVsZSkge1xuICBcdHJldHVybiBjb2xsZWN0VGVzdHMobW9kdWxlKS5sZW5ndGg7XG4gIH1cblxuICBmdW5jdGlvbiBudW1iZXJPZlVuc2tpcHBlZFRlc3RzKG1vZHVsZSkge1xuICBcdHJldHVybiBjb2xsZWN0VGVzdHMobW9kdWxlKS5maWx0ZXIoZnVuY3Rpb24gKHRlc3QpIHtcbiAgXHRcdHJldHVybiAhdGVzdC5za2lwO1xuICBcdH0pLmxlbmd0aDtcbiAgfVxuXG4gIGZ1bmN0aW9uIG5vdGlmeVRlc3RzUmFuKG1vZHVsZSwgc2tpcHBlZCkge1xuICBcdG1vZHVsZS50ZXN0c1J1bisrO1xuICBcdGlmICghc2tpcHBlZCkge1xuICBcdFx0bW9kdWxlLnVuc2tpcHBlZFRlc3RzUnVuKys7XG4gIFx0fVxuICBcdHdoaWxlIChtb2R1bGUgPSBtb2R1bGUucGFyZW50TW9kdWxlKSB7XG4gIFx0XHRtb2R1bGUudGVzdHNSdW4rKztcbiAgXHRcdGlmICghc2tpcHBlZCkge1xuICBcdFx0XHRtb2R1bGUudW5za2lwcGVkVGVzdHNSdW4rKztcbiAgXHRcdH1cbiAgXHR9XG4gIH1cblxuICB2YXIgQXNzZXJ0ID0gZnVuY3Rpb24gKCkge1xuICBcdGZ1bmN0aW9uIEFzc2VydCh0ZXN0Q29udGV4dCkge1xuICBcdFx0Y2xhc3NDYWxsQ2hlY2sodGhpcywgQXNzZXJ0KTtcblxuICBcdFx0dGhpcy50ZXN0ID0gdGVzdENvbnRleHQ7XG4gIFx0fVxuXG4gIFx0Ly8gQXNzZXJ0IGhlbHBlcnNcblxuICBcdGNyZWF0ZUNsYXNzKEFzc2VydCwgW3tcbiAgXHRcdGtleTogXCJ0aW1lb3V0XCIsXG4gIFx0XHR2YWx1ZTogZnVuY3Rpb24gdGltZW91dChkdXJhdGlvbikge1xuICBcdFx0XHRpZiAodHlwZW9mIGR1cmF0aW9uICE9PSBcIm51bWJlclwiKSB7XG4gIFx0XHRcdFx0dGhyb3cgbmV3IEVycm9yKFwiWW91IG11c3QgcGFzcyBhIG51bWJlciBhcyB0aGUgZHVyYXRpb24gdG8gYXNzZXJ0LnRpbWVvdXRcIik7XG4gIFx0XHRcdH1cblxuICBcdFx0XHR0aGlzLnRlc3QudGltZW91dCA9IGR1cmF0aW9uO1xuXG4gIFx0XHRcdC8vIElmIGEgdGltZW91dCBoYXMgYmVlbiBzZXQsIGNsZWFyIGl0IGFuZCByZXNldCB3aXRoIHRoZSBuZXcgZHVyYXRpb25cbiAgXHRcdFx0aWYgKGNvbmZpZy50aW1lb3V0KSB7XG4gIFx0XHRcdFx0Y2xlYXJUaW1lb3V0KGNvbmZpZy50aW1lb3V0KTtcblxuICBcdFx0XHRcdGlmIChjb25maWcudGltZW91dEhhbmRsZXIgJiYgdGhpcy50ZXN0LnRpbWVvdXQgPiAwKSB7XG4gIFx0XHRcdFx0XHRyZXNldFRlc3RUaW1lb3V0KHRoaXMudGVzdC50aW1lb3V0KTtcbiAgXHRcdFx0XHR9XG4gIFx0XHRcdH1cbiAgXHRcdH1cblxuICBcdFx0Ly8gRG9jdW1lbnRzIGEgXCJzdGVwXCIsIHdoaWNoIGlzIGEgc3RyaW5nIHZhbHVlLCBpbiBhIHRlc3QgYXMgYSBwYXNzaW5nIGFzc2VydGlvblxuXG4gIFx0fSwge1xuICBcdFx0a2V5OiBcInN0ZXBcIixcbiAgXHRcdHZhbHVlOiBmdW5jdGlvbiBzdGVwKG1lc3NhZ2UpIHtcbiAgXHRcdFx0dmFyIGFzc2VydGlvbk1lc3NhZ2UgPSBtZXNzYWdlO1xuICBcdFx0XHR2YXIgcmVzdWx0ID0gISFtZXNzYWdlO1xuXG4gIFx0XHRcdHRoaXMudGVzdC5zdGVwcy5wdXNoKG1lc3NhZ2UpO1xuXG4gIFx0XHRcdGlmIChvYmplY3RUeXBlKG1lc3NhZ2UpID09PSBcInVuZGVmaW5lZFwiIHx8IG1lc3NhZ2UgPT09IFwiXCIpIHtcbiAgXHRcdFx0XHRhc3NlcnRpb25NZXNzYWdlID0gXCJZb3UgbXVzdCBwcm92aWRlIGEgbWVzc2FnZSB0byBhc3NlcnQuc3RlcFwiO1xuICBcdFx0XHR9IGVsc2UgaWYgKG9iamVjdFR5cGUobWVzc2FnZSkgIT09IFwic3RyaW5nXCIpIHtcbiAgXHRcdFx0XHRhc3NlcnRpb25NZXNzYWdlID0gXCJZb3UgbXVzdCBwcm92aWRlIGEgc3RyaW5nIHZhbHVlIHRvIGFzc2VydC5zdGVwXCI7XG4gIFx0XHRcdFx0cmVzdWx0ID0gZmFsc2U7XG4gIFx0XHRcdH1cblxuICBcdFx0XHR0aGlzLnB1c2hSZXN1bHQoe1xuICBcdFx0XHRcdHJlc3VsdDogcmVzdWx0LFxuICBcdFx0XHRcdG1lc3NhZ2U6IGFzc2VydGlvbk1lc3NhZ2VcbiAgXHRcdFx0fSk7XG4gIFx0XHR9XG5cbiAgXHRcdC8vIFZlcmlmaWVzIHRoZSBzdGVwcyBpbiBhIHRlc3QgbWF0Y2ggYSBnaXZlbiBhcnJheSBvZiBzdHJpbmcgdmFsdWVzXG5cbiAgXHR9LCB7XG4gIFx0XHRrZXk6IFwidmVyaWZ5U3RlcHNcIixcbiAgXHRcdHZhbHVlOiBmdW5jdGlvbiB2ZXJpZnlTdGVwcyhzdGVwcywgbWVzc2FnZSkge1xuXG4gIFx0XHRcdC8vIFNpbmNlIHRoZSBzdGVwcyBhcnJheSBpcyBqdXN0IHN0cmluZyB2YWx1ZXMsIHdlIGNhbiBjbG9uZSB3aXRoIHNsaWNlXG4gIFx0XHRcdHZhciBhY3R1YWxTdGVwc0Nsb25lID0gdGhpcy50ZXN0LnN0ZXBzLnNsaWNlKCk7XG4gIFx0XHRcdHRoaXMuZGVlcEVxdWFsKGFjdHVhbFN0ZXBzQ2xvbmUsIHN0ZXBzLCBtZXNzYWdlKTtcbiAgXHRcdFx0dGhpcy50ZXN0LnN0ZXBzLmxlbmd0aCA9IDA7XG4gIFx0XHR9XG5cbiAgXHRcdC8vIFNwZWNpZnkgdGhlIG51bWJlciBvZiBleHBlY3RlZCBhc3NlcnRpb25zIHRvIGd1YXJhbnRlZSB0aGF0IGZhaWxlZCB0ZXN0XG4gIFx0XHQvLyAobm8gYXNzZXJ0aW9ucyBhcmUgcnVuIGF0IGFsbCkgZG9uJ3Qgc2xpcCB0aHJvdWdoLlxuXG4gIFx0fSwge1xuICBcdFx0a2V5OiBcImV4cGVjdFwiLFxuICBcdFx0dmFsdWU6IGZ1bmN0aW9uIGV4cGVjdChhc3NlcnRzKSB7XG4gIFx0XHRcdGlmIChhcmd1bWVudHMubGVuZ3RoID09PSAxKSB7XG4gIFx0XHRcdFx0dGhpcy50ZXN0LmV4cGVjdGVkID0gYXNzZXJ0cztcbiAgXHRcdFx0fSBlbHNlIHtcbiAgXHRcdFx0XHRyZXR1cm4gdGhpcy50ZXN0LmV4cGVjdGVkO1xuICBcdFx0XHR9XG4gIFx0XHR9XG5cbiAgXHRcdC8vIFB1dCBhIGhvbGQgb24gcHJvY2Vzc2luZyBhbmQgcmV0dXJuIGEgZnVuY3Rpb24gdGhhdCB3aWxsIHJlbGVhc2UgaXQgYSBtYXhpbXVtIG9mIG9uY2UuXG5cbiAgXHR9LCB7XG4gIFx0XHRrZXk6IFwiYXN5bmNcIixcbiAgXHRcdHZhbHVlOiBmdW5jdGlvbiBhc3luYyhjb3VudCkge1xuICBcdFx0XHR2YXIgdGVzdCQkMSA9IHRoaXMudGVzdDtcblxuICBcdFx0XHR2YXIgcG9wcGVkID0gZmFsc2UsXG4gIFx0XHRcdCAgICBhY2NlcHRDYWxsQ291bnQgPSBjb3VudDtcblxuICBcdFx0XHRpZiAodHlwZW9mIGFjY2VwdENhbGxDb3VudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICBcdFx0XHRcdGFjY2VwdENhbGxDb3VudCA9IDE7XG4gIFx0XHRcdH1cblxuICBcdFx0XHR2YXIgcmVzdW1lID0gaW50ZXJuYWxTdG9wKHRlc3QkJDEpO1xuXG4gIFx0XHRcdHJldHVybiBmdW5jdGlvbiBkb25lKCkge1xuICBcdFx0XHRcdGlmIChjb25maWcuY3VycmVudCAhPT0gdGVzdCQkMSkge1xuICBcdFx0XHRcdFx0dGhyb3cgRXJyb3IoXCJhc3NlcnQuYXN5bmMgY2FsbGJhY2sgY2FsbGVkIGFmdGVyIHRlc3QgZmluaXNoZWQuXCIpO1xuICBcdFx0XHRcdH1cblxuICBcdFx0XHRcdGlmIChwb3BwZWQpIHtcbiAgXHRcdFx0XHRcdHRlc3QkJDEucHVzaEZhaWx1cmUoXCJUb28gbWFueSBjYWxscyB0byB0aGUgYGFzc2VydC5hc3luY2AgY2FsbGJhY2tcIiwgc291cmNlRnJvbVN0YWNrdHJhY2UoMikpO1xuICBcdFx0XHRcdFx0cmV0dXJuO1xuICBcdFx0XHRcdH1cblxuICBcdFx0XHRcdGFjY2VwdENhbGxDb3VudCAtPSAxO1xuICBcdFx0XHRcdGlmIChhY2NlcHRDYWxsQ291bnQgPiAwKSB7XG4gIFx0XHRcdFx0XHRyZXR1cm47XG4gIFx0XHRcdFx0fVxuXG4gIFx0XHRcdFx0cG9wcGVkID0gdHJ1ZTtcbiAgXHRcdFx0XHRyZXN1bWUoKTtcbiAgXHRcdFx0fTtcbiAgXHRcdH1cblxuICBcdFx0Ly8gRXhwb3J0cyB0ZXN0LnB1c2goKSB0byB0aGUgdXNlciBBUElcbiAgXHRcdC8vIEFsaWFzIG9mIHB1c2hSZXN1bHQuXG5cbiAgXHR9LCB7XG4gIFx0XHRrZXk6IFwicHVzaFwiLFxuICBcdFx0dmFsdWU6IGZ1bmN0aW9uIHB1c2gocmVzdWx0LCBhY3R1YWwsIGV4cGVjdGVkLCBtZXNzYWdlLCBuZWdhdGl2ZSkge1xuICBcdFx0XHRMb2dnZXIud2FybihcImFzc2VydC5wdXNoIGlzIGRlcHJlY2F0ZWQgYW5kIHdpbGwgYmUgcmVtb3ZlZCBpbiBRVW5pdCAzLjAuXCIgKyBcIiBQbGVhc2UgdXNlIGFzc2VydC5wdXNoUmVzdWx0IGluc3RlYWQgKGh0dHBzOi8vYXBpLnF1bml0anMuY29tL2Fzc2VydC9wdXNoUmVzdWx0KS5cIik7XG5cbiAgXHRcdFx0dmFyIGN1cnJlbnRBc3NlcnQgPSB0aGlzIGluc3RhbmNlb2YgQXNzZXJ0ID8gdGhpcyA6IGNvbmZpZy5jdXJyZW50LmFzc2VydDtcbiAgXHRcdFx0cmV0dXJuIGN1cnJlbnRBc3NlcnQucHVzaFJlc3VsdCh7XG4gIFx0XHRcdFx0cmVzdWx0OiByZXN1bHQsXG4gIFx0XHRcdFx0YWN0dWFsOiBhY3R1YWwsXG4gIFx0XHRcdFx0ZXhwZWN0ZWQ6IGV4cGVjdGVkLFxuICBcdFx0XHRcdG1lc3NhZ2U6IG1lc3NhZ2UsXG4gIFx0XHRcdFx0bmVnYXRpdmU6IG5lZ2F0aXZlXG4gIFx0XHRcdH0pO1xuICBcdFx0fVxuICBcdH0sIHtcbiAgXHRcdGtleTogXCJwdXNoUmVzdWx0XCIsXG4gIFx0XHR2YWx1ZTogZnVuY3Rpb24gcHVzaFJlc3VsdChyZXN1bHRJbmZvKSB7XG5cbiAgXHRcdFx0Ly8gRGVzdHJ1Y3R1cmUgb2YgcmVzdWx0SW5mbyA9IHsgcmVzdWx0LCBhY3R1YWwsIGV4cGVjdGVkLCBtZXNzYWdlLCBuZWdhdGl2ZSB9XG4gIFx0XHRcdHZhciBhc3NlcnQgPSB0aGlzO1xuICBcdFx0XHR2YXIgY3VycmVudFRlc3QgPSBhc3NlcnQgaW5zdGFuY2VvZiBBc3NlcnQgJiYgYXNzZXJ0LnRlc3QgfHwgY29uZmlnLmN1cnJlbnQ7XG5cbiAgXHRcdFx0Ly8gQmFja3dhcmRzIGNvbXBhdGliaWxpdHkgZml4LlxuICBcdFx0XHQvLyBBbGxvd3MgdGhlIGRpcmVjdCB1c2Ugb2YgZ2xvYmFsIGV4cG9ydGVkIGFzc2VydGlvbnMgYW5kIFFVbml0LmFzc2VydC4qXG4gIFx0XHRcdC8vIEFsdGhvdWdoLCBpdCdzIHVzZSBpcyBub3QgcmVjb21tZW5kZWQgYXMgaXQgY2FuIGxlYWsgYXNzZXJ0aW9uc1xuICBcdFx0XHQvLyB0byBvdGhlciB0ZXN0cyBmcm9tIGFzeW5jIHRlc3RzLCBiZWNhdXNlIHdlIG9ubHkgZ2V0IGEgcmVmZXJlbmNlIHRvIHRoZSBjdXJyZW50IHRlc3QsXG4gIFx0XHRcdC8vIG5vdCBleGFjdGx5IHRoZSB0ZXN0IHdoZXJlIGFzc2VydGlvbiB3ZXJlIGludGVuZGVkIHRvIGJlIGNhbGxlZC5cbiAgXHRcdFx0aWYgKCFjdXJyZW50VGVzdCkge1xuICBcdFx0XHRcdHRocm93IG5ldyBFcnJvcihcImFzc2VydGlvbiBvdXRzaWRlIHRlc3QgY29udGV4dCwgaW4gXCIgKyBzb3VyY2VGcm9tU3RhY2t0cmFjZSgyKSk7XG4gIFx0XHRcdH1cblxuICBcdFx0XHRpZiAoIShhc3NlcnQgaW5zdGFuY2VvZiBBc3NlcnQpKSB7XG4gIFx0XHRcdFx0YXNzZXJ0ID0gY3VycmVudFRlc3QuYXNzZXJ0O1xuICBcdFx0XHR9XG5cbiAgXHRcdFx0cmV0dXJuIGFzc2VydC50ZXN0LnB1c2hSZXN1bHQocmVzdWx0SW5mbyk7XG4gIFx0XHR9XG4gIFx0fSwge1xuICBcdFx0a2V5OiBcIm9rXCIsXG4gIFx0XHR2YWx1ZTogZnVuY3Rpb24gb2socmVzdWx0LCBtZXNzYWdlKSB7XG4gIFx0XHRcdGlmICghbWVzc2FnZSkge1xuICBcdFx0XHRcdG1lc3NhZ2UgPSByZXN1bHQgPyBcIm9rYXlcIiA6IFwiZmFpbGVkLCBleHBlY3RlZCBhcmd1bWVudCB0byBiZSB0cnV0aHksIHdhczogXCIgKyBkdW1wLnBhcnNlKHJlc3VsdCk7XG4gIFx0XHRcdH1cblxuICBcdFx0XHR0aGlzLnB1c2hSZXN1bHQoe1xuICBcdFx0XHRcdHJlc3VsdDogISFyZXN1bHQsXG4gIFx0XHRcdFx0YWN0dWFsOiByZXN1bHQsXG4gIFx0XHRcdFx0ZXhwZWN0ZWQ6IHRydWUsXG4gIFx0XHRcdFx0bWVzc2FnZTogbWVzc2FnZVxuICBcdFx0XHR9KTtcbiAgXHRcdH1cbiAgXHR9LCB7XG4gIFx0XHRrZXk6IFwibm90T2tcIixcbiAgXHRcdHZhbHVlOiBmdW5jdGlvbiBub3RPayhyZXN1bHQsIG1lc3NhZ2UpIHtcbiAgXHRcdFx0aWYgKCFtZXNzYWdlKSB7XG4gIFx0XHRcdFx0bWVzc2FnZSA9ICFyZXN1bHQgPyBcIm9rYXlcIiA6IFwiZmFpbGVkLCBleHBlY3RlZCBhcmd1bWVudCB0byBiZSBmYWxzeSwgd2FzOiBcIiArIGR1bXAucGFyc2UocmVzdWx0KTtcbiAgXHRcdFx0fVxuXG4gIFx0XHRcdHRoaXMucHVzaFJlc3VsdCh7XG4gIFx0XHRcdFx0cmVzdWx0OiAhcmVzdWx0LFxuICBcdFx0XHRcdGFjdHVhbDogcmVzdWx0LFxuICBcdFx0XHRcdGV4cGVjdGVkOiBmYWxzZSxcbiAgXHRcdFx0XHRtZXNzYWdlOiBtZXNzYWdlXG4gIFx0XHRcdH0pO1xuICBcdFx0fVxuICBcdH0sIHtcbiAgXHRcdGtleTogXCJlcXVhbFwiLFxuICBcdFx0dmFsdWU6IGZ1bmN0aW9uIGVxdWFsKGFjdHVhbCwgZXhwZWN0ZWQsIG1lc3NhZ2UpIHtcblxuICBcdFx0XHQvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZXFlcWVxXG4gIFx0XHRcdHZhciByZXN1bHQgPSBleHBlY3RlZCA9PSBhY3R1YWw7XG5cbiAgXHRcdFx0dGhpcy5wdXNoUmVzdWx0KHtcbiAgXHRcdFx0XHRyZXN1bHQ6IHJlc3VsdCxcbiAgXHRcdFx0XHRhY3R1YWw6IGFjdHVhbCxcbiAgXHRcdFx0XHRleHBlY3RlZDogZXhwZWN0ZWQsXG4gIFx0XHRcdFx0bWVzc2FnZTogbWVzc2FnZVxuICBcdFx0XHR9KTtcbiAgXHRcdH1cbiAgXHR9LCB7XG4gIFx0XHRrZXk6IFwibm90RXF1YWxcIixcbiAgXHRcdHZhbHVlOiBmdW5jdGlvbiBub3RFcXVhbChhY3R1YWwsIGV4cGVjdGVkLCBtZXNzYWdlKSB7XG5cbiAgXHRcdFx0Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGVxZXFlcVxuICBcdFx0XHR2YXIgcmVzdWx0ID0gZXhwZWN0ZWQgIT0gYWN0dWFsO1xuXG4gIFx0XHRcdHRoaXMucHVzaFJlc3VsdCh7XG4gIFx0XHRcdFx0cmVzdWx0OiByZXN1bHQsXG4gIFx0XHRcdFx0YWN0dWFsOiBhY3R1YWwsXG4gIFx0XHRcdFx0ZXhwZWN0ZWQ6IGV4cGVjdGVkLFxuICBcdFx0XHRcdG1lc3NhZ2U6IG1lc3NhZ2UsXG4gIFx0XHRcdFx0bmVnYXRpdmU6IHRydWVcbiAgXHRcdFx0fSk7XG4gIFx0XHR9XG4gIFx0fSwge1xuICBcdFx0a2V5OiBcInByb3BFcXVhbFwiLFxuICBcdFx0dmFsdWU6IGZ1bmN0aW9uIHByb3BFcXVhbChhY3R1YWwsIGV4cGVjdGVkLCBtZXNzYWdlKSB7XG4gIFx0XHRcdGFjdHVhbCA9IG9iamVjdFZhbHVlcyhhY3R1YWwpO1xuICBcdFx0XHRleHBlY3RlZCA9IG9iamVjdFZhbHVlcyhleHBlY3RlZCk7XG5cbiAgXHRcdFx0dGhpcy5wdXNoUmVzdWx0KHtcbiAgXHRcdFx0XHRyZXN1bHQ6IGVxdWl2KGFjdHVhbCwgZXhwZWN0ZWQpLFxuICBcdFx0XHRcdGFjdHVhbDogYWN0dWFsLFxuICBcdFx0XHRcdGV4cGVjdGVkOiBleHBlY3RlZCxcbiAgXHRcdFx0XHRtZXNzYWdlOiBtZXNzYWdlXG4gIFx0XHRcdH0pO1xuICBcdFx0fVxuICBcdH0sIHtcbiAgXHRcdGtleTogXCJub3RQcm9wRXF1YWxcIixcbiAgXHRcdHZhbHVlOiBmdW5jdGlvbiBub3RQcm9wRXF1YWwoYWN0dWFsLCBleHBlY3RlZCwgbWVzc2FnZSkge1xuICBcdFx0XHRhY3R1YWwgPSBvYmplY3RWYWx1ZXMoYWN0dWFsKTtcbiAgXHRcdFx0ZXhwZWN0ZWQgPSBvYmplY3RWYWx1ZXMoZXhwZWN0ZWQpO1xuXG4gIFx0XHRcdHRoaXMucHVzaFJlc3VsdCh7XG4gIFx0XHRcdFx0cmVzdWx0OiAhZXF1aXYoYWN0dWFsLCBleHBlY3RlZCksXG4gIFx0XHRcdFx0YWN0dWFsOiBhY3R1YWwsXG4gIFx0XHRcdFx0ZXhwZWN0ZWQ6IGV4cGVjdGVkLFxuICBcdFx0XHRcdG1lc3NhZ2U6IG1lc3NhZ2UsXG4gIFx0XHRcdFx0bmVnYXRpdmU6IHRydWVcbiAgXHRcdFx0fSk7XG4gIFx0XHR9XG4gIFx0fSwge1xuICBcdFx0a2V5OiBcImRlZXBFcXVhbFwiLFxuICBcdFx0dmFsdWU6IGZ1bmN0aW9uIGRlZXBFcXVhbChhY3R1YWwsIGV4cGVjdGVkLCBtZXNzYWdlKSB7XG4gIFx0XHRcdHRoaXMucHVzaFJlc3VsdCh7XG4gIFx0XHRcdFx0cmVzdWx0OiBlcXVpdihhY3R1YWwsIGV4cGVjdGVkKSxcbiAgXHRcdFx0XHRhY3R1YWw6IGFjdHVhbCxcbiAgXHRcdFx0XHRleHBlY3RlZDogZXhwZWN0ZWQsXG4gIFx0XHRcdFx0bWVzc2FnZTogbWVzc2FnZVxuICBcdFx0XHR9KTtcbiAgXHRcdH1cbiAgXHR9LCB7XG4gIFx0XHRrZXk6IFwibm90RGVlcEVxdWFsXCIsXG4gIFx0XHR2YWx1ZTogZnVuY3Rpb24gbm90RGVlcEVxdWFsKGFjdHVhbCwgZXhwZWN0ZWQsIG1lc3NhZ2UpIHtcbiAgXHRcdFx0dGhpcy5wdXNoUmVzdWx0KHtcbiAgXHRcdFx0XHRyZXN1bHQ6ICFlcXVpdihhY3R1YWwsIGV4cGVjdGVkKSxcbiAgXHRcdFx0XHRhY3R1YWw6IGFjdHVhbCxcbiAgXHRcdFx0XHRleHBlY3RlZDogZXhwZWN0ZWQsXG4gIFx0XHRcdFx0bWVzc2FnZTogbWVzc2FnZSxcbiAgXHRcdFx0XHRuZWdhdGl2ZTogdHJ1ZVxuICBcdFx0XHR9KTtcbiAgXHRcdH1cbiAgXHR9LCB7XG4gIFx0XHRrZXk6IFwic3RyaWN0RXF1YWxcIixcbiAgXHRcdHZhbHVlOiBmdW5jdGlvbiBzdHJpY3RFcXVhbChhY3R1YWwsIGV4cGVjdGVkLCBtZXNzYWdlKSB7XG4gIFx0XHRcdHRoaXMucHVzaFJlc3VsdCh7XG4gIFx0XHRcdFx0cmVzdWx0OiBleHBlY3RlZCA9PT0gYWN0dWFsLFxuICBcdFx0XHRcdGFjdHVhbDogYWN0dWFsLFxuICBcdFx0XHRcdGV4cGVjdGVkOiBleHBlY3RlZCxcbiAgXHRcdFx0XHRtZXNzYWdlOiBtZXNzYWdlXG4gIFx0XHRcdH0pO1xuICBcdFx0fVxuICBcdH0sIHtcbiAgXHRcdGtleTogXCJub3RTdHJpY3RFcXVhbFwiLFxuICBcdFx0dmFsdWU6IGZ1bmN0aW9uIG5vdFN0cmljdEVxdWFsKGFjdHVhbCwgZXhwZWN0ZWQsIG1lc3NhZ2UpIHtcbiAgXHRcdFx0dGhpcy5wdXNoUmVzdWx0KHtcbiAgXHRcdFx0XHRyZXN1bHQ6IGV4cGVjdGVkICE9PSBhY3R1YWwsXG4gIFx0XHRcdFx0YWN0dWFsOiBhY3R1YWwsXG4gIFx0XHRcdFx0ZXhwZWN0ZWQ6IGV4cGVjdGVkLFxuICBcdFx0XHRcdG1lc3NhZ2U6IG1lc3NhZ2UsXG4gIFx0XHRcdFx0bmVnYXRpdmU6IHRydWVcbiAgXHRcdFx0fSk7XG4gIFx0XHR9XG4gIFx0fSwge1xuICBcdFx0a2V5OiBcInRocm93c1wiLFxuICBcdFx0dmFsdWU6IGZ1bmN0aW9uIHRocm93cyhibG9jaywgZXhwZWN0ZWQsIG1lc3NhZ2UpIHtcbiAgXHRcdFx0dmFyIGFjdHVhbCA9IHZvaWQgMCxcbiAgXHRcdFx0ICAgIHJlc3VsdCA9IGZhbHNlO1xuXG4gIFx0XHRcdHZhciBjdXJyZW50VGVzdCA9IHRoaXMgaW5zdGFuY2VvZiBBc3NlcnQgJiYgdGhpcy50ZXN0IHx8IGNvbmZpZy5jdXJyZW50O1xuXG4gIFx0XHRcdC8vICdleHBlY3RlZCcgaXMgb3B0aW9uYWwgdW5sZXNzIGRvaW5nIHN0cmluZyBjb21wYXJpc29uXG4gIFx0XHRcdGlmIChvYmplY3RUeXBlKGV4cGVjdGVkKSA9PT0gXCJzdHJpbmdcIikge1xuICBcdFx0XHRcdGlmIChtZXNzYWdlID09IG51bGwpIHtcbiAgXHRcdFx0XHRcdG1lc3NhZ2UgPSBleHBlY3RlZDtcbiAgXHRcdFx0XHRcdGV4cGVjdGVkID0gbnVsbDtcbiAgXHRcdFx0XHR9IGVsc2Uge1xuICBcdFx0XHRcdFx0dGhyb3cgbmV3IEVycm9yKFwidGhyb3dzL3JhaXNlcyBkb2VzIG5vdCBhY2NlcHQgYSBzdHJpbmcgdmFsdWUgZm9yIHRoZSBleHBlY3RlZCBhcmd1bWVudC5cXG5cIiArIFwiVXNlIGEgbm9uLXN0cmluZyBvYmplY3QgdmFsdWUgKGUuZy4gcmVnRXhwKSBpbnN0ZWFkIGlmIGl0J3MgbmVjZXNzYXJ5LlwiKTtcbiAgXHRcdFx0XHR9XG4gIFx0XHRcdH1cblxuICBcdFx0XHRjdXJyZW50VGVzdC5pZ25vcmVHbG9iYWxFcnJvcnMgPSB0cnVlO1xuICBcdFx0XHR0cnkge1xuICBcdFx0XHRcdGJsb2NrLmNhbGwoY3VycmVudFRlc3QudGVzdEVudmlyb25tZW50KTtcbiAgXHRcdFx0fSBjYXRjaCAoZSkge1xuICBcdFx0XHRcdGFjdHVhbCA9IGU7XG4gIFx0XHRcdH1cbiAgXHRcdFx0Y3VycmVudFRlc3QuaWdub3JlR2xvYmFsRXJyb3JzID0gZmFsc2U7XG5cbiAgXHRcdFx0aWYgKGFjdHVhbCkge1xuICBcdFx0XHRcdHZhciBleHBlY3RlZFR5cGUgPSBvYmplY3RUeXBlKGV4cGVjdGVkKTtcblxuICBcdFx0XHRcdC8vIFdlIGRvbid0IHdhbnQgdG8gdmFsaWRhdGUgdGhyb3duIGVycm9yXG4gIFx0XHRcdFx0aWYgKCFleHBlY3RlZCkge1xuICBcdFx0XHRcdFx0cmVzdWx0ID0gdHJ1ZTtcblxuICBcdFx0XHRcdFx0Ly8gRXhwZWN0ZWQgaXMgYSByZWdleHBcbiAgXHRcdFx0XHR9IGVsc2UgaWYgKGV4cGVjdGVkVHlwZSA9PT0gXCJyZWdleHBcIikge1xuICBcdFx0XHRcdFx0cmVzdWx0ID0gZXhwZWN0ZWQudGVzdChlcnJvclN0cmluZyhhY3R1YWwpKTtcblxuICBcdFx0XHRcdFx0Ly8gTG9nIHRoZSBzdHJpbmcgZm9ybSBvZiB0aGUgcmVnZXhwXG4gIFx0XHRcdFx0XHRleHBlY3RlZCA9IFN0cmluZyhleHBlY3RlZCk7XG5cbiAgXHRcdFx0XHRcdC8vIEV4cGVjdGVkIGlzIGEgY29uc3RydWN0b3IsIG1heWJlIGFuIEVycm9yIGNvbnN0cnVjdG9yXG4gIFx0XHRcdFx0fSBlbHNlIGlmIChleHBlY3RlZFR5cGUgPT09IFwiZnVuY3Rpb25cIiAmJiBhY3R1YWwgaW5zdGFuY2VvZiBleHBlY3RlZCkge1xuICBcdFx0XHRcdFx0cmVzdWx0ID0gdHJ1ZTtcblxuICBcdFx0XHRcdFx0Ly8gRXhwZWN0ZWQgaXMgYW4gRXJyb3Igb2JqZWN0XG4gIFx0XHRcdFx0fSBlbHNlIGlmIChleHBlY3RlZFR5cGUgPT09IFwib2JqZWN0XCIpIHtcbiAgXHRcdFx0XHRcdHJlc3VsdCA9IGFjdHVhbCBpbnN0YW5jZW9mIGV4cGVjdGVkLmNvbnN0cnVjdG9yICYmIGFjdHVhbC5uYW1lID09PSBleHBlY3RlZC5uYW1lICYmIGFjdHVhbC5tZXNzYWdlID09PSBleHBlY3RlZC5tZXNzYWdlO1xuXG4gIFx0XHRcdFx0XHQvLyBMb2cgdGhlIHN0cmluZyBmb3JtIG9mIHRoZSBFcnJvciBvYmplY3RcbiAgXHRcdFx0XHRcdGV4cGVjdGVkID0gZXJyb3JTdHJpbmcoZXhwZWN0ZWQpO1xuXG4gIFx0XHRcdFx0XHQvLyBFeHBlY3RlZCBpcyBhIHZhbGlkYXRpb24gZnVuY3Rpb24gd2hpY2ggcmV0dXJucyB0cnVlIGlmIHZhbGlkYXRpb24gcGFzc2VkXG4gIFx0XHRcdFx0fSBlbHNlIGlmIChleHBlY3RlZFR5cGUgPT09IFwiZnVuY3Rpb25cIiAmJiBleHBlY3RlZC5jYWxsKHt9LCBhY3R1YWwpID09PSB0cnVlKSB7XG4gIFx0XHRcdFx0XHRleHBlY3RlZCA9IG51bGw7XG4gIFx0XHRcdFx0XHRyZXN1bHQgPSB0cnVlO1xuICBcdFx0XHRcdH1cbiAgXHRcdFx0fVxuXG4gIFx0XHRcdGN1cnJlbnRUZXN0LmFzc2VydC5wdXNoUmVzdWx0KHtcbiAgXHRcdFx0XHRyZXN1bHQ6IHJlc3VsdCxcblxuICBcdFx0XHRcdC8vIHVuZGVmaW5lZCBpZiBpdCBkaWRuJ3QgdGhyb3dcbiAgXHRcdFx0XHRhY3R1YWw6IGFjdHVhbCAmJiBlcnJvclN0cmluZyhhY3R1YWwpLFxuICBcdFx0XHRcdGV4cGVjdGVkOiBleHBlY3RlZCxcbiAgXHRcdFx0XHRtZXNzYWdlOiBtZXNzYWdlXG4gIFx0XHRcdH0pO1xuICBcdFx0fVxuICBcdH0sIHtcbiAgXHRcdGtleTogXCJyZWplY3RzXCIsXG4gIFx0XHR2YWx1ZTogZnVuY3Rpb24gcmVqZWN0cyhwcm9taXNlLCBleHBlY3RlZCwgbWVzc2FnZSkge1xuICBcdFx0XHR2YXIgcmVzdWx0ID0gZmFsc2U7XG5cbiAgXHRcdFx0dmFyIGN1cnJlbnRUZXN0ID0gdGhpcyBpbnN0YW5jZW9mIEFzc2VydCAmJiB0aGlzLnRlc3QgfHwgY29uZmlnLmN1cnJlbnQ7XG5cbiAgXHRcdFx0Ly8gJ2V4cGVjdGVkJyBpcyBvcHRpb25hbCB1bmxlc3MgZG9pbmcgc3RyaW5nIGNvbXBhcmlzb25cbiAgXHRcdFx0aWYgKG9iamVjdFR5cGUoZXhwZWN0ZWQpID09PSBcInN0cmluZ1wiKSB7XG4gIFx0XHRcdFx0aWYgKG1lc3NhZ2UgPT09IHVuZGVmaW5lZCkge1xuICBcdFx0XHRcdFx0bWVzc2FnZSA9IGV4cGVjdGVkO1xuICBcdFx0XHRcdFx0ZXhwZWN0ZWQgPSB1bmRlZmluZWQ7XG4gIFx0XHRcdFx0fSBlbHNlIHtcbiAgXHRcdFx0XHRcdG1lc3NhZ2UgPSBcImFzc2VydC5yZWplY3RzIGRvZXMgbm90IGFjY2VwdCBhIHN0cmluZyB2YWx1ZSBmb3IgdGhlIGV4cGVjdGVkIFwiICsgXCJhcmd1bWVudC5cXG5Vc2UgYSBub24tc3RyaW5nIG9iamVjdCB2YWx1ZSAoZS5nLiB2YWxpZGF0b3IgZnVuY3Rpb24pIGluc3RlYWQgXCIgKyBcImlmIG5lY2Vzc2FyeS5cIjtcblxuICBcdFx0XHRcdFx0Y3VycmVudFRlc3QuYXNzZXJ0LnB1c2hSZXN1bHQoe1xuICBcdFx0XHRcdFx0XHRyZXN1bHQ6IGZhbHNlLFxuICBcdFx0XHRcdFx0XHRtZXNzYWdlOiBtZXNzYWdlXG4gIFx0XHRcdFx0XHR9KTtcblxuICBcdFx0XHRcdFx0cmV0dXJuO1xuICBcdFx0XHRcdH1cbiAgXHRcdFx0fVxuXG4gIFx0XHRcdHZhciB0aGVuID0gcHJvbWlzZSAmJiBwcm9taXNlLnRoZW47XG4gIFx0XHRcdGlmIChvYmplY3RUeXBlKHRoZW4pICE9PSBcImZ1bmN0aW9uXCIpIHtcbiAgXHRcdFx0XHR2YXIgX21lc3NhZ2UgPSBcIlRoZSB2YWx1ZSBwcm92aWRlZCB0byBgYXNzZXJ0LnJlamVjdHNgIGluIFwiICsgXCJcXFwiXCIgKyBjdXJyZW50VGVzdC50ZXN0TmFtZSArIFwiXFxcIiB3YXMgbm90IGEgcHJvbWlzZS5cIjtcblxuICBcdFx0XHRcdGN1cnJlbnRUZXN0LmFzc2VydC5wdXNoUmVzdWx0KHtcbiAgXHRcdFx0XHRcdHJlc3VsdDogZmFsc2UsXG4gIFx0XHRcdFx0XHRtZXNzYWdlOiBfbWVzc2FnZSxcbiAgXHRcdFx0XHRcdGFjdHVhbDogcHJvbWlzZVxuICBcdFx0XHRcdH0pO1xuXG4gIFx0XHRcdFx0cmV0dXJuO1xuICBcdFx0XHR9XG5cbiAgXHRcdFx0dmFyIGRvbmUgPSB0aGlzLmFzeW5jKCk7XG5cbiAgXHRcdFx0cmV0dXJuIHRoZW4uY2FsbChwcm9taXNlLCBmdW5jdGlvbiBoYW5kbGVGdWxmaWxsbWVudCgpIHtcbiAgXHRcdFx0XHR2YXIgbWVzc2FnZSA9IFwiVGhlIHByb21pc2UgcmV0dXJuZWQgYnkgdGhlIGBhc3NlcnQucmVqZWN0c2AgY2FsbGJhY2sgaW4gXCIgKyBcIlxcXCJcIiArIGN1cnJlbnRUZXN0LnRlc3ROYW1lICsgXCJcXFwiIGRpZCBub3QgcmVqZWN0LlwiO1xuXG4gIFx0XHRcdFx0Y3VycmVudFRlc3QuYXNzZXJ0LnB1c2hSZXN1bHQoe1xuICBcdFx0XHRcdFx0cmVzdWx0OiBmYWxzZSxcbiAgXHRcdFx0XHRcdG1lc3NhZ2U6IG1lc3NhZ2UsXG4gIFx0XHRcdFx0XHRhY3R1YWw6IHByb21pc2VcbiAgXHRcdFx0XHR9KTtcblxuICBcdFx0XHRcdGRvbmUoKTtcbiAgXHRcdFx0fSwgZnVuY3Rpb24gaGFuZGxlUmVqZWN0aW9uKGFjdHVhbCkge1xuICBcdFx0XHRcdHZhciBleHBlY3RlZFR5cGUgPSBvYmplY3RUeXBlKGV4cGVjdGVkKTtcblxuICBcdFx0XHRcdC8vIFdlIGRvbid0IHdhbnQgdG8gdmFsaWRhdGVcbiAgXHRcdFx0XHRpZiAoZXhwZWN0ZWQgPT09IHVuZGVmaW5lZCkge1xuICBcdFx0XHRcdFx0cmVzdWx0ID0gdHJ1ZTtcblxuICBcdFx0XHRcdFx0Ly8gRXhwZWN0ZWQgaXMgYSByZWdleHBcbiAgXHRcdFx0XHR9IGVsc2UgaWYgKGV4cGVjdGVkVHlwZSA9PT0gXCJyZWdleHBcIikge1xuICBcdFx0XHRcdFx0cmVzdWx0ID0gZXhwZWN0ZWQudGVzdChlcnJvclN0cmluZyhhY3R1YWwpKTtcblxuICBcdFx0XHRcdFx0Ly8gTG9nIHRoZSBzdHJpbmcgZm9ybSBvZiB0aGUgcmVnZXhwXG4gIFx0XHRcdFx0XHRleHBlY3RlZCA9IFN0cmluZyhleHBlY3RlZCk7XG5cbiAgXHRcdFx0XHRcdC8vIEV4cGVjdGVkIGlzIGEgY29uc3RydWN0b3IsIG1heWJlIGFuIEVycm9yIGNvbnN0cnVjdG9yXG4gIFx0XHRcdFx0fSBlbHNlIGlmIChleHBlY3RlZFR5cGUgPT09IFwiZnVuY3Rpb25cIiAmJiBhY3R1YWwgaW5zdGFuY2VvZiBleHBlY3RlZCkge1xuICBcdFx0XHRcdFx0cmVzdWx0ID0gdHJ1ZTtcblxuICBcdFx0XHRcdFx0Ly8gRXhwZWN0ZWQgaXMgYW4gRXJyb3Igb2JqZWN0XG4gIFx0XHRcdFx0fSBlbHNlIGlmIChleHBlY3RlZFR5cGUgPT09IFwib2JqZWN0XCIpIHtcbiAgXHRcdFx0XHRcdHJlc3VsdCA9IGFjdHVhbCBpbnN0YW5jZW9mIGV4cGVjdGVkLmNvbnN0cnVjdG9yICYmIGFjdHVhbC5uYW1lID09PSBleHBlY3RlZC5uYW1lICYmIGFjdHVhbC5tZXNzYWdlID09PSBleHBlY3RlZC5tZXNzYWdlO1xuXG4gIFx0XHRcdFx0XHQvLyBMb2cgdGhlIHN0cmluZyBmb3JtIG9mIHRoZSBFcnJvciBvYmplY3RcbiAgXHRcdFx0XHRcdGV4cGVjdGVkID0gZXJyb3JTdHJpbmcoZXhwZWN0ZWQpO1xuXG4gIFx0XHRcdFx0XHQvLyBFeHBlY3RlZCBpcyBhIHZhbGlkYXRpb24gZnVuY3Rpb24gd2hpY2ggcmV0dXJucyB0cnVlIGlmIHZhbGlkYXRpb24gcGFzc2VkXG4gIFx0XHRcdFx0fSBlbHNlIHtcbiAgXHRcdFx0XHRcdGlmIChleHBlY3RlZFR5cGUgPT09IFwiZnVuY3Rpb25cIikge1xuICBcdFx0XHRcdFx0XHRyZXN1bHQgPSBleHBlY3RlZC5jYWxsKHt9LCBhY3R1YWwpID09PSB0cnVlO1xuICBcdFx0XHRcdFx0XHRleHBlY3RlZCA9IG51bGw7XG5cbiAgXHRcdFx0XHRcdFx0Ly8gRXhwZWN0ZWQgaXMgc29tZSBvdGhlciBpbnZhbGlkIHR5cGVcbiAgXHRcdFx0XHRcdH0gZWxzZSB7XG4gIFx0XHRcdFx0XHRcdHJlc3VsdCA9IGZhbHNlO1xuICBcdFx0XHRcdFx0XHRtZXNzYWdlID0gXCJpbnZhbGlkIGV4cGVjdGVkIHZhbHVlIHByb3ZpZGVkIHRvIGBhc3NlcnQucmVqZWN0c2AgXCIgKyBcImNhbGxiYWNrIGluIFxcXCJcIiArIGN1cnJlbnRUZXN0LnRlc3ROYW1lICsgXCJcXFwiOiBcIiArIGV4cGVjdGVkVHlwZSArIFwiLlwiO1xuICBcdFx0XHRcdFx0fVxuICBcdFx0XHRcdH1cblxuICBcdFx0XHRcdGN1cnJlbnRUZXN0LmFzc2VydC5wdXNoUmVzdWx0KHtcbiAgXHRcdFx0XHRcdHJlc3VsdDogcmVzdWx0LFxuXG4gIFx0XHRcdFx0XHQvLyBsZWF2ZSByZWplY3Rpb24gdmFsdWUgb2YgdW5kZWZpbmVkIGFzLWlzXG4gIFx0XHRcdFx0XHRhY3R1YWw6IGFjdHVhbCAmJiBlcnJvclN0cmluZyhhY3R1YWwpLFxuICBcdFx0XHRcdFx0ZXhwZWN0ZWQ6IGV4cGVjdGVkLFxuICBcdFx0XHRcdFx0bWVzc2FnZTogbWVzc2FnZVxuICBcdFx0XHRcdH0pO1xuXG4gIFx0XHRcdFx0ZG9uZSgpO1xuICBcdFx0XHR9KTtcbiAgXHRcdH1cbiAgXHR9XSk7XG4gIFx0cmV0dXJuIEFzc2VydDtcbiAgfSgpO1xuXG4gIC8vIFByb3ZpZGUgYW4gYWx0ZXJuYXRpdmUgdG8gYXNzZXJ0LnRocm93cygpLCBmb3IgZW52aXJvbm1lbnRzIHRoYXQgY29uc2lkZXIgdGhyb3dzIGEgcmVzZXJ2ZWQgd29yZFxuICAvLyBLbm93biB0byB1cyBhcmU6IENsb3N1cmUgQ29tcGlsZXIsIE5hcndoYWxcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGRvdC1ub3RhdGlvblxuXG5cbiAgQXNzZXJ0LnByb3RvdHlwZS5yYWlzZXMgPSBBc3NlcnQucHJvdG90eXBlW1widGhyb3dzXCJdO1xuXG4gIC8qKlxuICAgKiBDb252ZXJ0cyBhbiBlcnJvciBpbnRvIGEgc2ltcGxlIHN0cmluZyBmb3IgY29tcGFyaXNvbnMuXG4gICAqXG4gICAqIEBwYXJhbSB7RXJyb3J8T2JqZWN0fSBlcnJvclxuICAgKiBAcmV0dXJuIHtTdHJpbmd9XG4gICAqL1xuICBmdW5jdGlvbiBlcnJvclN0cmluZyhlcnJvcikge1xuICBcdHZhciByZXN1bHRFcnJvclN0cmluZyA9IGVycm9yLnRvU3RyaW5nKCk7XG5cbiAgXHQvLyBJZiB0aGUgZXJyb3Igd2Fzbid0IGEgc3ViY2xhc3Mgb2YgRXJyb3IgYnV0IHNvbWV0aGluZyBsaWtlXG4gIFx0Ly8gYW4gb2JqZWN0IGxpdGVyYWwgd2l0aCBuYW1lIGFuZCBtZXNzYWdlIHByb3BlcnRpZXMuLi5cbiAgXHRpZiAocmVzdWx0RXJyb3JTdHJpbmcuc3Vic3RyaW5nKDAsIDcpID09PSBcIltvYmplY3RcIikge1xuICBcdFx0dmFyIG5hbWUgPSBlcnJvci5uYW1lID8gZXJyb3IubmFtZS50b1N0cmluZygpIDogXCJFcnJvclwiO1xuICBcdFx0dmFyIG1lc3NhZ2UgPSBlcnJvci5tZXNzYWdlID8gZXJyb3IubWVzc2FnZS50b1N0cmluZygpIDogXCJcIjtcblxuICBcdFx0aWYgKG5hbWUgJiYgbWVzc2FnZSkge1xuICBcdFx0XHRyZXR1cm4gbmFtZSArIFwiOiBcIiArIG1lc3NhZ2U7XG4gIFx0XHR9IGVsc2UgaWYgKG5hbWUpIHtcbiAgXHRcdFx0cmV0dXJuIG5hbWU7XG4gIFx0XHR9IGVsc2UgaWYgKG1lc3NhZ2UpIHtcbiAgXHRcdFx0cmV0dXJuIG1lc3NhZ2U7XG4gIFx0XHR9IGVsc2Uge1xuICBcdFx0XHRyZXR1cm4gXCJFcnJvclwiO1xuICBcdFx0fVxuICBcdH0gZWxzZSB7XG4gIFx0XHRyZXR1cm4gcmVzdWx0RXJyb3JTdHJpbmc7XG4gIFx0fVxuICB9XG5cbiAgLyogZ2xvYmFsIG1vZHVsZSwgZXhwb3J0cywgZGVmaW5lICovXG4gIGZ1bmN0aW9uIGV4cG9ydFFVbml0KFFVbml0KSB7XG5cbiAgXHRpZiAoZGVmaW5lZC5kb2N1bWVudCkge1xuXG4gIFx0XHQvLyBRVW5pdCBtYXkgYmUgZGVmaW5lZCB3aGVuIGl0IGlzIHByZWNvbmZpZ3VyZWQgYnV0IHRoZW4gb25seSBRVW5pdCBhbmQgUVVuaXQuY29uZmlnIG1heSBiZSBkZWZpbmVkLlxuICBcdFx0aWYgKHdpbmRvdyQxLlFVbml0ICYmIHdpbmRvdyQxLlFVbml0LnZlcnNpb24pIHtcbiAgXHRcdFx0dGhyb3cgbmV3IEVycm9yKFwiUVVuaXQgaGFzIGFscmVhZHkgYmVlbiBkZWZpbmVkLlwiKTtcbiAgXHRcdH1cblxuICBcdFx0d2luZG93JDEuUVVuaXQgPSBRVW5pdDtcbiAgXHR9XG5cbiAgXHQvLyBGb3Igbm9kZWpzXG4gIFx0aWYgKHR5cGVvZiBtb2R1bGUgIT09IFwidW5kZWZpbmVkXCIgJiYgbW9kdWxlICYmIG1vZHVsZS5leHBvcnRzKSB7XG4gIFx0XHRtb2R1bGUuZXhwb3J0cyA9IFFVbml0O1xuXG4gIFx0XHQvLyBGb3IgY29uc2lzdGVuY3kgd2l0aCBDb21tb25KUyBlbnZpcm9ubWVudHMnIGV4cG9ydHNcbiAgXHRcdG1vZHVsZS5leHBvcnRzLlFVbml0ID0gUVVuaXQ7XG4gIFx0fVxuXG4gIFx0Ly8gRm9yIENvbW1vbkpTIHdpdGggZXhwb3J0cywgYnV0IHdpdGhvdXQgbW9kdWxlLmV4cG9ydHMsIGxpa2UgUmhpbm9cbiAgXHRpZiAodHlwZW9mIGV4cG9ydHMgIT09IFwidW5kZWZpbmVkXCIgJiYgZXhwb3J0cykge1xuICBcdFx0ZXhwb3J0cy5RVW5pdCA9IFFVbml0O1xuICBcdH1cblxuICBcdGlmICh0eXBlb2YgZGVmaW5lID09PSBcImZ1bmN0aW9uXCIgJiYgZGVmaW5lLmFtZCkge1xuICBcdFx0ZGVmaW5lKGZ1bmN0aW9uICgpIHtcbiAgXHRcdFx0cmV0dXJuIFFVbml0O1xuICBcdFx0fSk7XG4gIFx0XHRRVW5pdC5jb25maWcuYXV0b3N0YXJ0ID0gZmFsc2U7XG4gIFx0fVxuXG4gIFx0Ly8gRm9yIFdlYi9TZXJ2aWNlIFdvcmtlcnNcbiAgXHRpZiAoc2VsZiQxICYmIHNlbGYkMS5Xb3JrZXJHbG9iYWxTY29wZSAmJiBzZWxmJDEgaW5zdGFuY2VvZiBzZWxmJDEuV29ya2VyR2xvYmFsU2NvcGUpIHtcbiAgXHRcdHNlbGYkMS5RVW5pdCA9IFFVbml0O1xuICBcdH1cbiAgfVxuXG4gIC8vIEhhbmRsZSBhbiB1bmhhbmRsZWQgZXhjZXB0aW9uLiBCeSBjb252ZW50aW9uLCByZXR1cm5zIHRydWUgaWYgZnVydGhlclxuICAvLyBlcnJvciBoYW5kbGluZyBzaG91bGQgYmUgc3VwcHJlc3NlZCBhbmQgZmFsc2Ugb3RoZXJ3aXNlLlxuICAvLyBJbiB0aGlzIGNhc2UsIHdlIHdpbGwgb25seSBzdXBwcmVzcyBmdXJ0aGVyIGVycm9yIGhhbmRsaW5nIGlmIHRoZVxuICAvLyBcImlnbm9yZUdsb2JhbEVycm9yc1wiIGNvbmZpZ3VyYXRpb24gb3B0aW9uIGlzIGVuYWJsZWQuXG4gIGZ1bmN0aW9uIG9uRXJyb3IoZXJyb3IpIHtcbiAgXHRmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IEFycmF5KF9sZW4gPiAxID8gX2xlbiAtIDEgOiAwKSwgX2tleSA9IDE7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcbiAgXHRcdGFyZ3NbX2tleSAtIDFdID0gYXJndW1lbnRzW19rZXldO1xuICBcdH1cblxuICBcdGlmIChjb25maWcuY3VycmVudCkge1xuICBcdFx0aWYgKGNvbmZpZy5jdXJyZW50Lmlnbm9yZUdsb2JhbEVycm9ycykge1xuICBcdFx0XHRyZXR1cm4gdHJ1ZTtcbiAgXHRcdH1cbiAgXHRcdHB1c2hGYWlsdXJlLmFwcGx5KHVuZGVmaW5lZCwgW2Vycm9yLm1lc3NhZ2UsIGVycm9yLnN0YWNrdHJhY2UgfHwgZXJyb3IuZmlsZU5hbWUgKyBcIjpcIiArIGVycm9yLmxpbmVOdW1iZXJdLmNvbmNhdChhcmdzKSk7XG4gIFx0fSBlbHNlIHtcbiAgXHRcdHRlc3QoXCJnbG9iYWwgZmFpbHVyZVwiLCBleHRlbmQoZnVuY3Rpb24gKCkge1xuICBcdFx0XHRwdXNoRmFpbHVyZS5hcHBseSh1bmRlZmluZWQsIFtlcnJvci5tZXNzYWdlLCBlcnJvci5zdGFja3RyYWNlIHx8IGVycm9yLmZpbGVOYW1lICsgXCI6XCIgKyBlcnJvci5saW5lTnVtYmVyXS5jb25jYXQoYXJncykpO1xuICBcdFx0fSwgeyB2YWxpZFRlc3Q6IHRydWUgfSkpO1xuICBcdH1cblxuICBcdHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIC8vIEhhbmRsZSBhbiB1bmhhbmRsZWQgcmVqZWN0aW9uXG4gIGZ1bmN0aW9uIG9uVW5oYW5kbGVkUmVqZWN0aW9uKHJlYXNvbikge1xuICBcdHZhciByZXN1bHRJbmZvID0ge1xuICBcdFx0cmVzdWx0OiBmYWxzZSxcbiAgXHRcdG1lc3NhZ2U6IHJlYXNvbi5tZXNzYWdlIHx8IFwiZXJyb3JcIixcbiAgXHRcdGFjdHVhbDogcmVhc29uLFxuICBcdFx0c291cmNlOiByZWFzb24uc3RhY2sgfHwgc291cmNlRnJvbVN0YWNrdHJhY2UoMylcbiAgXHR9O1xuXG4gIFx0dmFyIGN1cnJlbnRUZXN0ID0gY29uZmlnLmN1cnJlbnQ7XG4gIFx0aWYgKGN1cnJlbnRUZXN0KSB7XG4gIFx0XHRjdXJyZW50VGVzdC5hc3NlcnQucHVzaFJlc3VsdChyZXN1bHRJbmZvKTtcbiAgXHR9IGVsc2Uge1xuICBcdFx0dGVzdChcImdsb2JhbCBmYWlsdXJlXCIsIGV4dGVuZChmdW5jdGlvbiAoYXNzZXJ0KSB7XG4gIFx0XHRcdGFzc2VydC5wdXNoUmVzdWx0KHJlc3VsdEluZm8pO1xuICBcdFx0fSwgeyB2YWxpZFRlc3Q6IHRydWUgfSkpO1xuICBcdH1cbiAgfVxuXG4gIHZhciBRVW5pdCA9IHt9O1xuICB2YXIgZ2xvYmFsU3VpdGUgPSBuZXcgU3VpdGVSZXBvcnQoKTtcblxuICAvLyBUaGUgaW5pdGlhbCBcImN1cnJlbnRNb2R1bGVcIiByZXByZXNlbnRzIHRoZSBnbG9iYWwgKG9yIHRvcC1sZXZlbCkgbW9kdWxlIHRoYXRcbiAgLy8gaXMgbm90IGV4cGxpY2l0bHkgZGVmaW5lZCBieSB0aGUgdXNlciwgdGhlcmVmb3JlIHdlIGFkZCB0aGUgXCJnbG9iYWxTdWl0ZVwiIHRvXG4gIC8vIGl0IHNpbmNlIGVhY2ggbW9kdWxlIGhhcyBhIHN1aXRlUmVwb3J0IGFzc29jaWF0ZWQgd2l0aCBpdC5cbiAgY29uZmlnLmN1cnJlbnRNb2R1bGUuc3VpdGVSZXBvcnQgPSBnbG9iYWxTdWl0ZTtcblxuICB2YXIgZ2xvYmFsU3RhcnRDYWxsZWQgPSBmYWxzZTtcbiAgdmFyIHJ1blN0YXJ0ZWQgPSBmYWxzZTtcblxuICAvLyBGaWd1cmUgb3V0IGlmIHdlJ3JlIHJ1bm5pbmcgdGhlIHRlc3RzIGZyb20gYSBzZXJ2ZXIgb3Igbm90XG4gIFFVbml0LmlzTG9jYWwgPSAhKGRlZmluZWQuZG9jdW1lbnQgJiYgd2luZG93JDEubG9jYXRpb24ucHJvdG9jb2wgIT09IFwiZmlsZTpcIik7XG5cbiAgLy8gRXhwb3NlIHRoZSBjdXJyZW50IFFVbml0IHZlcnNpb25cbiAgUVVuaXQudmVyc2lvbiA9IFwiMi45LjNcIjtcblxuICBleHRlbmQoUVVuaXQsIHtcbiAgXHRvbjogb24sXG5cbiAgXHRtb2R1bGU6IG1vZHVsZSQxLFxuXG4gIFx0dGVzdDogdGVzdCxcblxuICBcdHRvZG86IHRvZG8sXG5cbiAgXHRza2lwOiBza2lwLFxuXG4gIFx0b25seTogb25seSxcblxuICBcdHN0YXJ0OiBmdW5jdGlvbiBzdGFydChjb3VudCkge1xuICBcdFx0dmFyIGdsb2JhbFN0YXJ0QWxyZWFkeUNhbGxlZCA9IGdsb2JhbFN0YXJ0Q2FsbGVkO1xuXG4gIFx0XHRpZiAoIWNvbmZpZy5jdXJyZW50KSB7XG4gIFx0XHRcdGdsb2JhbFN0YXJ0Q2FsbGVkID0gdHJ1ZTtcblxuICBcdFx0XHRpZiAocnVuU3RhcnRlZCkge1xuICBcdFx0XHRcdHRocm93IG5ldyBFcnJvcihcIkNhbGxlZCBzdGFydCgpIHdoaWxlIHRlc3QgYWxyZWFkeSBzdGFydGVkIHJ1bm5pbmdcIik7XG4gIFx0XHRcdH0gZWxzZSBpZiAoZ2xvYmFsU3RhcnRBbHJlYWR5Q2FsbGVkIHx8IGNvdW50ID4gMSkge1xuICBcdFx0XHRcdHRocm93IG5ldyBFcnJvcihcIkNhbGxlZCBzdGFydCgpIG91dHNpZGUgb2YgYSB0ZXN0IGNvbnRleHQgdG9vIG1hbnkgdGltZXNcIik7XG4gIFx0XHRcdH0gZWxzZSBpZiAoY29uZmlnLmF1dG9zdGFydCkge1xuICBcdFx0XHRcdHRocm93IG5ldyBFcnJvcihcIkNhbGxlZCBzdGFydCgpIG91dHNpZGUgb2YgYSB0ZXN0IGNvbnRleHQgd2hlbiBcIiArIFwiUVVuaXQuY29uZmlnLmF1dG9zdGFydCB3YXMgdHJ1ZVwiKTtcbiAgXHRcdFx0fSBlbHNlIGlmICghY29uZmlnLnBhZ2VMb2FkZWQpIHtcblxuICBcdFx0XHRcdC8vIFRoZSBwYWdlIGlzbid0IGNvbXBsZXRlbHkgbG9hZGVkIHlldCwgc28gd2Ugc2V0IGF1dG9zdGFydCBhbmQgdGhlblxuICBcdFx0XHRcdC8vIGxvYWQgaWYgd2UncmUgaW4gTm9kZSBvciB3YWl0IGZvciB0aGUgYnJvd3NlcidzIGxvYWQgZXZlbnQuXG4gIFx0XHRcdFx0Y29uZmlnLmF1dG9zdGFydCA9IHRydWU7XG5cbiAgXHRcdFx0XHQvLyBTdGFydHMgZnJvbSBOb2RlIGV2ZW4gaWYgLmxvYWQgd2FzIG5vdCBwcmV2aW91c2x5IGNhbGxlZC4gV2Ugc3RpbGwgcmV0dXJuXG4gIFx0XHRcdFx0Ly8gZWFybHkgb3RoZXJ3aXNlIHdlJ2xsIHdpbmQgdXAgXCJiZWdpbm5pbmdcIiB0d2ljZS5cbiAgXHRcdFx0XHRpZiAoIWRlZmluZWQuZG9jdW1lbnQpIHtcbiAgXHRcdFx0XHRcdFFVbml0LmxvYWQoKTtcbiAgXHRcdFx0XHR9XG5cbiAgXHRcdFx0XHRyZXR1cm47XG4gIFx0XHRcdH1cbiAgXHRcdH0gZWxzZSB7XG4gIFx0XHRcdHRocm93IG5ldyBFcnJvcihcIlFVbml0LnN0YXJ0IGNhbm5vdCBiZSBjYWxsZWQgaW5zaWRlIGEgdGVzdCBjb250ZXh0LlwiKTtcbiAgXHRcdH1cblxuICBcdFx0c2NoZWR1bGVCZWdpbigpO1xuICBcdH0sXG5cbiAgXHRjb25maWc6IGNvbmZpZyxcblxuICBcdGlzOiBpcyxcblxuICBcdG9iamVjdFR5cGU6IG9iamVjdFR5cGUsXG5cbiAgXHRleHRlbmQ6IGV4dGVuZCxcblxuICBcdGxvYWQ6IGZ1bmN0aW9uIGxvYWQoKSB7XG4gIFx0XHRjb25maWcucGFnZUxvYWRlZCA9IHRydWU7XG5cbiAgXHRcdC8vIEluaXRpYWxpemUgdGhlIGNvbmZpZ3VyYXRpb24gb3B0aW9uc1xuICBcdFx0ZXh0ZW5kKGNvbmZpZywge1xuICBcdFx0XHRzdGF0czogeyBhbGw6IDAsIGJhZDogMCB9LFxuICBcdFx0XHRzdGFydGVkOiAwLFxuICBcdFx0XHR1cGRhdGVSYXRlOiAxMDAwLFxuICBcdFx0XHRhdXRvc3RhcnQ6IHRydWUsXG4gIFx0XHRcdGZpbHRlcjogXCJcIlxuICBcdFx0fSwgdHJ1ZSk7XG5cbiAgXHRcdGlmICghcnVuU3RhcnRlZCkge1xuICBcdFx0XHRjb25maWcuYmxvY2tpbmcgPSBmYWxzZTtcblxuICBcdFx0XHRpZiAoY29uZmlnLmF1dG9zdGFydCkge1xuICBcdFx0XHRcdHNjaGVkdWxlQmVnaW4oKTtcbiAgXHRcdFx0fVxuICBcdFx0fVxuICBcdH0sXG5cbiAgXHRzdGFjazogZnVuY3Rpb24gc3RhY2sob2Zmc2V0KSB7XG4gIFx0XHRvZmZzZXQgPSAob2Zmc2V0IHx8IDApICsgMjtcbiAgXHRcdHJldHVybiBzb3VyY2VGcm9tU3RhY2t0cmFjZShvZmZzZXQpO1xuICBcdH0sXG5cbiAgXHRvbkVycm9yOiBvbkVycm9yLFxuXG4gIFx0b25VbmhhbmRsZWRSZWplY3Rpb246IG9uVW5oYW5kbGVkUmVqZWN0aW9uXG4gIH0pO1xuXG4gIFFVbml0LnB1c2hGYWlsdXJlID0gcHVzaEZhaWx1cmU7XG4gIFFVbml0LmFzc2VydCA9IEFzc2VydC5wcm90b3R5cGU7XG4gIFFVbml0LmVxdWl2ID0gZXF1aXY7XG4gIFFVbml0LmR1bXAgPSBkdW1wO1xuXG4gIHJlZ2lzdGVyTG9nZ2luZ0NhbGxiYWNrcyhRVW5pdCk7XG5cbiAgZnVuY3Rpb24gc2NoZWR1bGVCZWdpbigpIHtcblxuICBcdHJ1blN0YXJ0ZWQgPSB0cnVlO1xuXG4gIFx0Ly8gQWRkIGEgc2xpZ2h0IGRlbGF5IHRvIGFsbG93IGRlZmluaXRpb24gb2YgbW9yZSBtb2R1bGVzIGFuZCB0ZXN0cy5cbiAgXHRpZiAoZGVmaW5lZC5zZXRUaW1lb3V0KSB7XG4gIFx0XHRzZXRUaW1lb3V0JDEoZnVuY3Rpb24gKCkge1xuICBcdFx0XHRiZWdpbigpO1xuICBcdFx0fSk7XG4gIFx0fSBlbHNlIHtcbiAgXHRcdGJlZ2luKCk7XG4gIFx0fVxuICB9XG5cbiAgZnVuY3Rpb24gdW5ibG9ja0FuZEFkdmFuY2VRdWV1ZSgpIHtcbiAgXHRjb25maWcuYmxvY2tpbmcgPSBmYWxzZTtcbiAgXHRQcm9jZXNzaW5nUXVldWUuYWR2YW5jZSgpO1xuICB9XG5cbiAgZnVuY3Rpb24gYmVnaW4oKSB7XG4gIFx0dmFyIGksXG4gIFx0ICAgIGwsXG4gIFx0ICAgIG1vZHVsZXNMb2cgPSBbXTtcblxuICBcdC8vIElmIHRoZSB0ZXN0IHJ1biBoYXNuJ3Qgb2ZmaWNpYWxseSBiZWd1biB5ZXRcbiAgXHRpZiAoIWNvbmZpZy5zdGFydGVkKSB7XG5cbiAgXHRcdC8vIFJlY29yZCB0aGUgdGltZSBvZiB0aGUgdGVzdCBydW4ncyBiZWdpbm5pbmdcbiAgXHRcdGNvbmZpZy5zdGFydGVkID0gbm93KCk7XG5cbiAgXHRcdC8vIERlbGV0ZSB0aGUgbG9vc2UgdW5uYW1lZCBtb2R1bGUgaWYgdW51c2VkLlxuICBcdFx0aWYgKGNvbmZpZy5tb2R1bGVzWzBdLm5hbWUgPT09IFwiXCIgJiYgY29uZmlnLm1vZHVsZXNbMF0udGVzdHMubGVuZ3RoID09PSAwKSB7XG4gIFx0XHRcdGNvbmZpZy5tb2R1bGVzLnNoaWZ0KCk7XG4gIFx0XHR9XG5cbiAgXHRcdC8vIEF2b2lkIHVubmVjZXNzYXJ5IGluZm9ybWF0aW9uIGJ5IG5vdCBsb2dnaW5nIG1vZHVsZXMnIHRlc3QgZW52aXJvbm1lbnRzXG4gIFx0XHRmb3IgKGkgPSAwLCBsID0gY29uZmlnLm1vZHVsZXMubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gIFx0XHRcdG1vZHVsZXNMb2cucHVzaCh7XG4gIFx0XHRcdFx0bmFtZTogY29uZmlnLm1vZHVsZXNbaV0ubmFtZSxcbiAgXHRcdFx0XHR0ZXN0czogY29uZmlnLm1vZHVsZXNbaV0udGVzdHNcbiAgXHRcdFx0fSk7XG4gIFx0XHR9XG5cbiAgXHRcdC8vIFRoZSB0ZXN0IHJ1biBpcyBvZmZpY2lhbGx5IGJlZ2lubmluZyBub3dcbiAgXHRcdGVtaXQoXCJydW5TdGFydFwiLCBnbG9iYWxTdWl0ZS5zdGFydCh0cnVlKSk7XG4gIFx0XHRydW5Mb2dnaW5nQ2FsbGJhY2tzKFwiYmVnaW5cIiwge1xuICBcdFx0XHR0b3RhbFRlc3RzOiBUZXN0LmNvdW50LFxuICBcdFx0XHRtb2R1bGVzOiBtb2R1bGVzTG9nXG4gIFx0XHR9KS50aGVuKHVuYmxvY2tBbmRBZHZhbmNlUXVldWUpO1xuICBcdH0gZWxzZSB7XG4gIFx0XHR1bmJsb2NrQW5kQWR2YW5jZVF1ZXVlKCk7XG4gIFx0fVxuICB9XG5cbiAgZXhwb3J0UVVuaXQoUVVuaXQpO1xuXG4gIChmdW5jdGlvbiAoKSB7XG5cbiAgXHRpZiAodHlwZW9mIHdpbmRvdyQxID09PSBcInVuZGVmaW5lZFwiIHx8IHR5cGVvZiBkb2N1bWVudCQxID09PSBcInVuZGVmaW5lZFwiKSB7XG4gIFx0XHRyZXR1cm47XG4gIFx0fVxuXG4gIFx0dmFyIGNvbmZpZyA9IFFVbml0LmNvbmZpZyxcbiAgXHQgICAgaGFzT3duID0gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eTtcblxuICBcdC8vIFN0b3JlcyBmaXh0dXJlIEhUTUwgZm9yIHJlc2V0dGluZyBsYXRlclxuICBcdGZ1bmN0aW9uIHN0b3JlRml4dHVyZSgpIHtcblxuICBcdFx0Ly8gQXZvaWQgb3ZlcndyaXRpbmcgdXNlci1kZWZpbmVkIHZhbHVlc1xuICBcdFx0aWYgKGhhc093bi5jYWxsKGNvbmZpZywgXCJmaXh0dXJlXCIpKSB7XG4gIFx0XHRcdHJldHVybjtcbiAgXHRcdH1cblxuICBcdFx0dmFyIGZpeHR1cmUgPSBkb2N1bWVudCQxLmdldEVsZW1lbnRCeUlkKFwicXVuaXQtZml4dHVyZVwiKTtcbiAgXHRcdGlmIChmaXh0dXJlKSB7XG4gIFx0XHRcdGNvbmZpZy5maXh0dXJlID0gZml4dHVyZS5jbG9uZU5vZGUodHJ1ZSk7XG4gIFx0XHR9XG4gIFx0fVxuXG4gIFx0UVVuaXQuYmVnaW4oc3RvcmVGaXh0dXJlKTtcblxuICBcdC8vIFJlc2V0cyB0aGUgZml4dHVyZSBET00gZWxlbWVudCBpZiBhdmFpbGFibGUuXG4gIFx0ZnVuY3Rpb24gcmVzZXRGaXh0dXJlKCkge1xuICBcdFx0aWYgKGNvbmZpZy5maXh0dXJlID09IG51bGwpIHtcbiAgXHRcdFx0cmV0dXJuO1xuICBcdFx0fVxuXG4gIFx0XHR2YXIgZml4dHVyZSA9IGRvY3VtZW50JDEuZ2V0RWxlbWVudEJ5SWQoXCJxdW5pdC1maXh0dXJlXCIpO1xuICBcdFx0dmFyIHJlc2V0Rml4dHVyZVR5cGUgPSBfdHlwZW9mKGNvbmZpZy5maXh0dXJlKTtcbiAgXHRcdGlmIChyZXNldEZpeHR1cmVUeXBlID09PSBcInN0cmluZ1wiKSB7XG5cbiAgXHRcdFx0Ly8gc3VwcG9ydCB1c2VyIGRlZmluZWQgdmFsdWVzIGZvciBgY29uZmlnLmZpeHR1cmVgXG4gIFx0XHRcdHZhciBuZXdGaXh0dXJlID0gZG9jdW1lbnQkMS5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBcdFx0XHRuZXdGaXh0dXJlLnNldEF0dHJpYnV0ZShcImlkXCIsIFwicXVuaXQtZml4dHVyZVwiKTtcbiAgXHRcdFx0bmV3Rml4dHVyZS5pbm5lckhUTUwgPSBjb25maWcuZml4dHVyZTtcbiAgXHRcdFx0Zml4dHVyZS5wYXJlbnROb2RlLnJlcGxhY2VDaGlsZChuZXdGaXh0dXJlLCBmaXh0dXJlKTtcbiAgXHRcdH0gZWxzZSB7XG4gIFx0XHRcdHZhciBjbG9uZWRGaXh0dXJlID0gY29uZmlnLmZpeHR1cmUuY2xvbmVOb2RlKHRydWUpO1xuICBcdFx0XHRmaXh0dXJlLnBhcmVudE5vZGUucmVwbGFjZUNoaWxkKGNsb25lZEZpeHR1cmUsIGZpeHR1cmUpO1xuICBcdFx0fVxuICBcdH1cblxuICBcdFFVbml0LnRlc3RTdGFydChyZXNldEZpeHR1cmUpO1xuICB9KSgpO1xuXG4gIChmdW5jdGlvbiAoKSB7XG5cbiAgXHQvLyBPbmx5IGludGVyYWN0IHdpdGggVVJMcyB2aWEgd2luZG93LmxvY2F0aW9uXG4gIFx0dmFyIGxvY2F0aW9uID0gdHlwZW9mIHdpbmRvdyQxICE9PSBcInVuZGVmaW5lZFwiICYmIHdpbmRvdyQxLmxvY2F0aW9uO1xuICBcdGlmICghbG9jYXRpb24pIHtcbiAgXHRcdHJldHVybjtcbiAgXHR9XG5cbiAgXHR2YXIgdXJsUGFyYW1zID0gZ2V0VXJsUGFyYW1zKCk7XG5cbiAgXHRRVW5pdC51cmxQYXJhbXMgPSB1cmxQYXJhbXM7XG5cbiAgXHQvLyBNYXRjaCBtb2R1bGUvdGVzdCBieSBpbmNsdXNpb24gaW4gYW4gYXJyYXlcbiAgXHRRVW5pdC5jb25maWcubW9kdWxlSWQgPSBbXS5jb25jYXQodXJsUGFyYW1zLm1vZHVsZUlkIHx8IFtdKTtcbiAgXHRRVW5pdC5jb25maWcudGVzdElkID0gW10uY29uY2F0KHVybFBhcmFtcy50ZXN0SWQgfHwgW10pO1xuXG4gIFx0Ly8gRXhhY3QgY2FzZS1pbnNlbnNpdGl2ZSBtYXRjaCBvZiB0aGUgbW9kdWxlIG5hbWVcbiAgXHRRVW5pdC5jb25maWcubW9kdWxlID0gdXJsUGFyYW1zLm1vZHVsZTtcblxuICBcdC8vIFJlZ3VsYXIgZXhwcmVzc2lvbiBvciBjYXNlLWluc2Vuc3RpdmUgc3Vic3RyaW5nIG1hdGNoIGFnYWluc3QgXCJtb2R1bGVOYW1lOiB0ZXN0TmFtZVwiXG4gIFx0UVVuaXQuY29uZmlnLmZpbHRlciA9IHVybFBhcmFtcy5maWx0ZXI7XG5cbiAgXHQvLyBUZXN0IG9yZGVyIHJhbmRvbWl6YXRpb25cbiAgXHRpZiAodXJsUGFyYW1zLnNlZWQgPT09IHRydWUpIHtcblxuICBcdFx0Ly8gR2VuZXJhdGUgYSByYW5kb20gc2VlZCBpZiB0aGUgb3B0aW9uIGlzIHNwZWNpZmllZCB3aXRob3V0IGEgdmFsdWVcbiAgXHRcdFFVbml0LmNvbmZpZy5zZWVkID0gTWF0aC5yYW5kb20oKS50b1N0cmluZygzNikuc2xpY2UoMik7XG4gIFx0fSBlbHNlIGlmICh1cmxQYXJhbXMuc2VlZCkge1xuICBcdFx0UVVuaXQuY29uZmlnLnNlZWQgPSB1cmxQYXJhbXMuc2VlZDtcbiAgXHR9XG5cbiAgXHQvLyBBZGQgVVJMLXBhcmFtZXRlci1tYXBwZWQgY29uZmlnIHZhbHVlcyB3aXRoIFVJIGZvcm0gcmVuZGVyaW5nIGRhdGFcbiAgXHRRVW5pdC5jb25maWcudXJsQ29uZmlnLnB1c2goe1xuICBcdFx0aWQ6IFwiaGlkZXBhc3NlZFwiLFxuICBcdFx0bGFiZWw6IFwiSGlkZSBwYXNzZWQgdGVzdHNcIixcbiAgXHRcdHRvb2x0aXA6IFwiT25seSBzaG93IHRlc3RzIGFuZCBhc3NlcnRpb25zIHRoYXQgZmFpbC4gU3RvcmVkIGFzIHF1ZXJ5LXN0cmluZ3MuXCJcbiAgXHR9LCB7XG4gIFx0XHRpZDogXCJub2dsb2JhbHNcIixcbiAgXHRcdGxhYmVsOiBcIkNoZWNrIGZvciBHbG9iYWxzXCIsXG4gIFx0XHR0b29sdGlwOiBcIkVuYWJsaW5nIHRoaXMgd2lsbCB0ZXN0IGlmIGFueSB0ZXN0IGludHJvZHVjZXMgbmV3IHByb3BlcnRpZXMgb24gdGhlIFwiICsgXCJnbG9iYWwgb2JqZWN0IChgd2luZG93YCBpbiBCcm93c2VycykuIFN0b3JlZCBhcyBxdWVyeS1zdHJpbmdzLlwiXG4gIFx0fSwge1xuICBcdFx0aWQ6IFwibm90cnljYXRjaFwiLFxuICBcdFx0bGFiZWw6IFwiTm8gdHJ5LWNhdGNoXCIsXG4gIFx0XHR0b29sdGlwOiBcIkVuYWJsaW5nIHRoaXMgd2lsbCBydW4gdGVzdHMgb3V0c2lkZSBvZiBhIHRyeS1jYXRjaCBibG9jay4gTWFrZXMgZGVidWdnaW5nIFwiICsgXCJleGNlcHRpb25zIGluIElFIHJlYXNvbmFibGUuIFN0b3JlZCBhcyBxdWVyeS1zdHJpbmdzLlwiXG4gIFx0fSk7XG5cbiAgXHRRVW5pdC5iZWdpbihmdW5jdGlvbiAoKSB7XG4gIFx0XHR2YXIgaSxcbiAgXHRcdCAgICBvcHRpb24sXG4gIFx0XHQgICAgdXJsQ29uZmlnID0gUVVuaXQuY29uZmlnLnVybENvbmZpZztcblxuICBcdFx0Zm9yIChpID0gMDsgaSA8IHVybENvbmZpZy5sZW5ndGg7IGkrKykge1xuXG4gIFx0XHRcdC8vIE9wdGlvbnMgY2FuIGJlIGVpdGhlciBzdHJpbmdzIG9yIG9iamVjdHMgd2l0aCBub25lbXB0eSBcImlkXCIgcHJvcGVydGllc1xuICBcdFx0XHRvcHRpb24gPSBRVW5pdC5jb25maWcudXJsQ29uZmlnW2ldO1xuICBcdFx0XHRpZiAodHlwZW9mIG9wdGlvbiAhPT0gXCJzdHJpbmdcIikge1xuICBcdFx0XHRcdG9wdGlvbiA9IG9wdGlvbi5pZDtcbiAgXHRcdFx0fVxuXG4gIFx0XHRcdGlmIChRVW5pdC5jb25maWdbb3B0aW9uXSA9PT0gdW5kZWZpbmVkKSB7XG4gIFx0XHRcdFx0UVVuaXQuY29uZmlnW29wdGlvbl0gPSB1cmxQYXJhbXNbb3B0aW9uXTtcbiAgXHRcdFx0fVxuICBcdFx0fVxuICBcdH0pO1xuXG4gIFx0ZnVuY3Rpb24gZ2V0VXJsUGFyYW1zKCkge1xuICBcdFx0dmFyIGksIHBhcmFtLCBuYW1lLCB2YWx1ZTtcbiAgXHRcdHZhciB1cmxQYXJhbXMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuICBcdFx0dmFyIHBhcmFtcyA9IGxvY2F0aW9uLnNlYXJjaC5zbGljZSgxKS5zcGxpdChcIiZcIik7XG4gIFx0XHR2YXIgbGVuZ3RoID0gcGFyYW1zLmxlbmd0aDtcblxuICBcdFx0Zm9yIChpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gIFx0XHRcdGlmIChwYXJhbXNbaV0pIHtcbiAgXHRcdFx0XHRwYXJhbSA9IHBhcmFtc1tpXS5zcGxpdChcIj1cIik7XG4gIFx0XHRcdFx0bmFtZSA9IGRlY29kZVF1ZXJ5UGFyYW0ocGFyYW1bMF0pO1xuXG4gIFx0XHRcdFx0Ly8gQWxsb3cganVzdCBhIGtleSB0byB0dXJuIG9uIGEgZmxhZywgZS5nLiwgdGVzdC5odG1sP25vZ2xvYmFsc1xuICBcdFx0XHRcdHZhbHVlID0gcGFyYW0ubGVuZ3RoID09PSAxIHx8IGRlY29kZVF1ZXJ5UGFyYW0ocGFyYW0uc2xpY2UoMSkuam9pbihcIj1cIikpO1xuICBcdFx0XHRcdGlmIChuYW1lIGluIHVybFBhcmFtcykge1xuICBcdFx0XHRcdFx0dXJsUGFyYW1zW25hbWVdID0gW10uY29uY2F0KHVybFBhcmFtc1tuYW1lXSwgdmFsdWUpO1xuICBcdFx0XHRcdH0gZWxzZSB7XG4gIFx0XHRcdFx0XHR1cmxQYXJhbXNbbmFtZV0gPSB2YWx1ZTtcbiAgXHRcdFx0XHR9XG4gIFx0XHRcdH1cbiAgXHRcdH1cblxuICBcdFx0cmV0dXJuIHVybFBhcmFtcztcbiAgXHR9XG5cbiAgXHRmdW5jdGlvbiBkZWNvZGVRdWVyeVBhcmFtKHBhcmFtKSB7XG4gIFx0XHRyZXR1cm4gZGVjb2RlVVJJQ29tcG9uZW50KHBhcmFtLnJlcGxhY2UoL1xcKy9nLCBcIiUyMFwiKSk7XG4gIFx0fVxuICB9KSgpO1xuXG4gIHZhciBzdGF0cyA9IHtcbiAgXHRwYXNzZWRUZXN0czogMCxcbiAgXHRmYWlsZWRUZXN0czogMCxcbiAgXHRza2lwcGVkVGVzdHM6IDAsXG4gIFx0dG9kb1Rlc3RzOiAwXG4gIH07XG5cbiAgLy8gRXNjYXBlIHRleHQgZm9yIGF0dHJpYnV0ZSBvciB0ZXh0IGNvbnRlbnQuXG4gIGZ1bmN0aW9uIGVzY2FwZVRleHQocykge1xuICBcdGlmICghcykge1xuICBcdFx0cmV0dXJuIFwiXCI7XG4gIFx0fVxuICBcdHMgPSBzICsgXCJcIjtcblxuICBcdC8vIEJvdGggc2luZ2xlIHF1b3RlcyBhbmQgZG91YmxlIHF1b3RlcyAoZm9yIGF0dHJpYnV0ZXMpXG4gIFx0cmV0dXJuIHMucmVwbGFjZSgvWydcIjw+Jl0vZywgZnVuY3Rpb24gKHMpIHtcbiAgXHRcdHN3aXRjaCAocykge1xuICBcdFx0XHRjYXNlIFwiJ1wiOlxuICBcdFx0XHRcdHJldHVybiBcIiYjMDM5O1wiO1xuICBcdFx0XHRjYXNlIFwiXFxcIlwiOlxuICBcdFx0XHRcdHJldHVybiBcIiZxdW90O1wiO1xuICBcdFx0XHRjYXNlIFwiPFwiOlxuICBcdFx0XHRcdHJldHVybiBcIiZsdDtcIjtcbiAgXHRcdFx0Y2FzZSBcIj5cIjpcbiAgXHRcdFx0XHRyZXR1cm4gXCImZ3Q7XCI7XG4gIFx0XHRcdGNhc2UgXCImXCI6XG4gIFx0XHRcdFx0cmV0dXJuIFwiJmFtcDtcIjtcbiAgXHRcdH1cbiAgXHR9KTtcbiAgfVxuXG4gIChmdW5jdGlvbiAoKSB7XG5cbiAgXHQvLyBEb24ndCBsb2FkIHRoZSBIVE1MIFJlcG9ydGVyIG9uIG5vbi1icm93c2VyIGVudmlyb25tZW50c1xuICBcdGlmICh0eXBlb2Ygd2luZG93JDEgPT09IFwidW5kZWZpbmVkXCIgfHwgIXdpbmRvdyQxLmRvY3VtZW50KSB7XG4gIFx0XHRyZXR1cm47XG4gIFx0fVxuXG4gIFx0dmFyIGNvbmZpZyA9IFFVbml0LmNvbmZpZyxcbiAgXHQgICAgaGlkZGVuVGVzdHMgPSBbXSxcbiAgXHQgICAgZG9jdW1lbnQgPSB3aW5kb3ckMS5kb2N1bWVudCxcbiAgXHQgICAgY29sbGFwc2VOZXh0ID0gZmFsc2UsXG4gIFx0ICAgIGhhc093biQkMSA9IE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHksXG4gIFx0ICAgIHVuZmlsdGVyZWRVcmwgPSBzZXRVcmwoeyBmaWx0ZXI6IHVuZGVmaW5lZCwgbW9kdWxlOiB1bmRlZmluZWQsXG4gIFx0XHRtb2R1bGVJZDogdW5kZWZpbmVkLCB0ZXN0SWQ6IHVuZGVmaW5lZCB9KSxcbiAgXHQgICAgbW9kdWxlc0xpc3QgPSBbXTtcblxuICBcdGZ1bmN0aW9uIGFkZEV2ZW50KGVsZW0sIHR5cGUsIGZuKSB7XG4gIFx0XHRlbGVtLmFkZEV2ZW50TGlzdGVuZXIodHlwZSwgZm4sIGZhbHNlKTtcbiAgXHR9XG5cbiAgXHRmdW5jdGlvbiByZW1vdmVFdmVudChlbGVtLCB0eXBlLCBmbikge1xuICBcdFx0ZWxlbS5yZW1vdmVFdmVudExpc3RlbmVyKHR5cGUsIGZuLCBmYWxzZSk7XG4gIFx0fVxuXG4gIFx0ZnVuY3Rpb24gYWRkRXZlbnRzKGVsZW1zLCB0eXBlLCBmbikge1xuICBcdFx0dmFyIGkgPSBlbGVtcy5sZW5ndGg7XG4gIFx0XHR3aGlsZSAoaS0tKSB7XG4gIFx0XHRcdGFkZEV2ZW50KGVsZW1zW2ldLCB0eXBlLCBmbik7XG4gIFx0XHR9XG4gIFx0fVxuXG4gIFx0ZnVuY3Rpb24gaGFzQ2xhc3MoZWxlbSwgbmFtZSkge1xuICBcdFx0cmV0dXJuIChcIiBcIiArIGVsZW0uY2xhc3NOYW1lICsgXCIgXCIpLmluZGV4T2YoXCIgXCIgKyBuYW1lICsgXCIgXCIpID49IDA7XG4gIFx0fVxuXG4gIFx0ZnVuY3Rpb24gYWRkQ2xhc3MoZWxlbSwgbmFtZSkge1xuICBcdFx0aWYgKCFoYXNDbGFzcyhlbGVtLCBuYW1lKSkge1xuICBcdFx0XHRlbGVtLmNsYXNzTmFtZSArPSAoZWxlbS5jbGFzc05hbWUgPyBcIiBcIiA6IFwiXCIpICsgbmFtZTtcbiAgXHRcdH1cbiAgXHR9XG5cbiAgXHRmdW5jdGlvbiB0b2dnbGVDbGFzcyhlbGVtLCBuYW1lLCBmb3JjZSkge1xuICBcdFx0aWYgKGZvcmNlIHx8IHR5cGVvZiBmb3JjZSA9PT0gXCJ1bmRlZmluZWRcIiAmJiAhaGFzQ2xhc3MoZWxlbSwgbmFtZSkpIHtcbiAgXHRcdFx0YWRkQ2xhc3MoZWxlbSwgbmFtZSk7XG4gIFx0XHR9IGVsc2Uge1xuICBcdFx0XHRyZW1vdmVDbGFzcyhlbGVtLCBuYW1lKTtcbiAgXHRcdH1cbiAgXHR9XG5cbiAgXHRmdW5jdGlvbiByZW1vdmVDbGFzcyhlbGVtLCBuYW1lKSB7XG4gIFx0XHR2YXIgc2V0ID0gXCIgXCIgKyBlbGVtLmNsYXNzTmFtZSArIFwiIFwiO1xuXG4gIFx0XHQvLyBDbGFzcyBuYW1lIG1heSBhcHBlYXIgbXVsdGlwbGUgdGltZXNcbiAgXHRcdHdoaWxlIChzZXQuaW5kZXhPZihcIiBcIiArIG5hbWUgKyBcIiBcIikgPj0gMCkge1xuICBcdFx0XHRzZXQgPSBzZXQucmVwbGFjZShcIiBcIiArIG5hbWUgKyBcIiBcIiwgXCIgXCIpO1xuICBcdFx0fVxuXG4gIFx0XHQvLyBUcmltIGZvciBwcmV0dGluZXNzXG4gIFx0XHRlbGVtLmNsYXNzTmFtZSA9IHR5cGVvZiBzZXQudHJpbSA9PT0gXCJmdW5jdGlvblwiID8gc2V0LnRyaW0oKSA6IHNldC5yZXBsYWNlKC9eXFxzK3xcXHMrJC9nLCBcIlwiKTtcbiAgXHR9XG5cbiAgXHRmdW5jdGlvbiBpZChuYW1lKSB7XG4gIFx0XHRyZXR1cm4gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQgJiYgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQobmFtZSk7XG4gIFx0fVxuXG4gIFx0ZnVuY3Rpb24gYWJvcnRUZXN0cygpIHtcbiAgXHRcdHZhciBhYm9ydEJ1dHRvbiA9IGlkKFwicXVuaXQtYWJvcnQtdGVzdHMtYnV0dG9uXCIpO1xuICBcdFx0aWYgKGFib3J0QnV0dG9uKSB7XG4gIFx0XHRcdGFib3J0QnV0dG9uLmRpc2FibGVkID0gdHJ1ZTtcbiAgXHRcdFx0YWJvcnRCdXR0b24uaW5uZXJIVE1MID0gXCJBYm9ydGluZy4uLlwiO1xuICBcdFx0fVxuICBcdFx0UVVuaXQuY29uZmlnLnF1ZXVlLmxlbmd0aCA9IDA7XG4gIFx0XHRyZXR1cm4gZmFsc2U7XG4gIFx0fVxuXG4gIFx0ZnVuY3Rpb24gaW50ZXJjZXB0TmF2aWdhdGlvbihldikge1xuICBcdFx0YXBwbHlVcmxQYXJhbXMoKTtcblxuICBcdFx0aWYgKGV2ICYmIGV2LnByZXZlbnREZWZhdWx0KSB7XG4gIFx0XHRcdGV2LnByZXZlbnREZWZhdWx0KCk7XG4gIFx0XHR9XG5cbiAgXHRcdHJldHVybiBmYWxzZTtcbiAgXHR9XG5cbiAgXHRmdW5jdGlvbiBnZXRVcmxDb25maWdIdG1sKCkge1xuICBcdFx0dmFyIGksXG4gIFx0XHQgICAgaixcbiAgXHRcdCAgICB2YWwsXG4gIFx0XHQgICAgZXNjYXBlZCxcbiAgXHRcdCAgICBlc2NhcGVkVG9vbHRpcCxcbiAgXHRcdCAgICBzZWxlY3Rpb24gPSBmYWxzZSxcbiAgXHRcdCAgICB1cmxDb25maWcgPSBjb25maWcudXJsQ29uZmlnLFxuICBcdFx0ICAgIHVybENvbmZpZ0h0bWwgPSBcIlwiO1xuXG4gIFx0XHRmb3IgKGkgPSAwOyBpIDwgdXJsQ29uZmlnLmxlbmd0aDsgaSsrKSB7XG5cbiAgXHRcdFx0Ly8gT3B0aW9ucyBjYW4gYmUgZWl0aGVyIHN0cmluZ3Mgb3Igb2JqZWN0cyB3aXRoIG5vbmVtcHR5IFwiaWRcIiBwcm9wZXJ0aWVzXG4gIFx0XHRcdHZhbCA9IGNvbmZpZy51cmxDb25maWdbaV07XG4gIFx0XHRcdGlmICh0eXBlb2YgdmFsID09PSBcInN0cmluZ1wiKSB7XG4gIFx0XHRcdFx0dmFsID0ge1xuICBcdFx0XHRcdFx0aWQ6IHZhbCxcbiAgXHRcdFx0XHRcdGxhYmVsOiB2YWxcbiAgXHRcdFx0XHR9O1xuICBcdFx0XHR9XG5cbiAgXHRcdFx0ZXNjYXBlZCA9IGVzY2FwZVRleHQodmFsLmlkKTtcbiAgXHRcdFx0ZXNjYXBlZFRvb2x0aXAgPSBlc2NhcGVUZXh0KHZhbC50b29sdGlwKTtcblxuICBcdFx0XHRpZiAoIXZhbC52YWx1ZSB8fCB0eXBlb2YgdmFsLnZhbHVlID09PSBcInN0cmluZ1wiKSB7XG4gIFx0XHRcdFx0dXJsQ29uZmlnSHRtbCArPSBcIjxsYWJlbCBmb3I9J3F1bml0LXVybGNvbmZpZy1cIiArIGVzY2FwZWQgKyBcIicgdGl0bGU9J1wiICsgZXNjYXBlZFRvb2x0aXAgKyBcIic+PGlucHV0IGlkPSdxdW5pdC11cmxjb25maWctXCIgKyBlc2NhcGVkICsgXCInIG5hbWU9J1wiICsgZXNjYXBlZCArIFwiJyB0eXBlPSdjaGVja2JveCdcIiArICh2YWwudmFsdWUgPyBcIiB2YWx1ZT0nXCIgKyBlc2NhcGVUZXh0KHZhbC52YWx1ZSkgKyBcIidcIiA6IFwiXCIpICsgKGNvbmZpZ1t2YWwuaWRdID8gXCIgY2hlY2tlZD0nY2hlY2tlZCdcIiA6IFwiXCIpICsgXCIgdGl0bGU9J1wiICsgZXNjYXBlZFRvb2x0aXAgKyBcIicgLz5cIiArIGVzY2FwZVRleHQodmFsLmxhYmVsKSArIFwiPC9sYWJlbD5cIjtcbiAgXHRcdFx0fSBlbHNlIHtcbiAgXHRcdFx0XHR1cmxDb25maWdIdG1sICs9IFwiPGxhYmVsIGZvcj0ncXVuaXQtdXJsY29uZmlnLVwiICsgZXNjYXBlZCArIFwiJyB0aXRsZT0nXCIgKyBlc2NhcGVkVG9vbHRpcCArIFwiJz5cIiArIHZhbC5sYWJlbCArIFwiOiA8L2xhYmVsPjxzZWxlY3QgaWQ9J3F1bml0LXVybGNvbmZpZy1cIiArIGVzY2FwZWQgKyBcIicgbmFtZT0nXCIgKyBlc2NhcGVkICsgXCInIHRpdGxlPSdcIiArIGVzY2FwZWRUb29sdGlwICsgXCInPjxvcHRpb24+PC9vcHRpb24+XCI7XG5cbiAgXHRcdFx0XHRpZiAoUVVuaXQuaXMoXCJhcnJheVwiLCB2YWwudmFsdWUpKSB7XG4gIFx0XHRcdFx0XHRmb3IgKGogPSAwOyBqIDwgdmFsLnZhbHVlLmxlbmd0aDsgaisrKSB7XG4gIFx0XHRcdFx0XHRcdGVzY2FwZWQgPSBlc2NhcGVUZXh0KHZhbC52YWx1ZVtqXSk7XG4gIFx0XHRcdFx0XHRcdHVybENvbmZpZ0h0bWwgKz0gXCI8b3B0aW9uIHZhbHVlPSdcIiArIGVzY2FwZWQgKyBcIidcIiArIChjb25maWdbdmFsLmlkXSA9PT0gdmFsLnZhbHVlW2pdID8gKHNlbGVjdGlvbiA9IHRydWUpICYmIFwiIHNlbGVjdGVkPSdzZWxlY3RlZCdcIiA6IFwiXCIpICsgXCI+XCIgKyBlc2NhcGVkICsgXCI8L29wdGlvbj5cIjtcbiAgXHRcdFx0XHRcdH1cbiAgXHRcdFx0XHR9IGVsc2Uge1xuICBcdFx0XHRcdFx0Zm9yIChqIGluIHZhbC52YWx1ZSkge1xuICBcdFx0XHRcdFx0XHRpZiAoaGFzT3duJCQxLmNhbGwodmFsLnZhbHVlLCBqKSkge1xuICBcdFx0XHRcdFx0XHRcdHVybENvbmZpZ0h0bWwgKz0gXCI8b3B0aW9uIHZhbHVlPSdcIiArIGVzY2FwZVRleHQoaikgKyBcIidcIiArIChjb25maWdbdmFsLmlkXSA9PT0gaiA/IChzZWxlY3Rpb24gPSB0cnVlKSAmJiBcIiBzZWxlY3RlZD0nc2VsZWN0ZWQnXCIgOiBcIlwiKSArIFwiPlwiICsgZXNjYXBlVGV4dCh2YWwudmFsdWVbal0pICsgXCI8L29wdGlvbj5cIjtcbiAgXHRcdFx0XHRcdFx0fVxuICBcdFx0XHRcdFx0fVxuICBcdFx0XHRcdH1cbiAgXHRcdFx0XHRpZiAoY29uZmlnW3ZhbC5pZF0gJiYgIXNlbGVjdGlvbikge1xuICBcdFx0XHRcdFx0ZXNjYXBlZCA9IGVzY2FwZVRleHQoY29uZmlnW3ZhbC5pZF0pO1xuICBcdFx0XHRcdFx0dXJsQ29uZmlnSHRtbCArPSBcIjxvcHRpb24gdmFsdWU9J1wiICsgZXNjYXBlZCArIFwiJyBzZWxlY3RlZD0nc2VsZWN0ZWQnIGRpc2FibGVkPSdkaXNhYmxlZCc+XCIgKyBlc2NhcGVkICsgXCI8L29wdGlvbj5cIjtcbiAgXHRcdFx0XHR9XG4gIFx0XHRcdFx0dXJsQ29uZmlnSHRtbCArPSBcIjwvc2VsZWN0PlwiO1xuICBcdFx0XHR9XG4gIFx0XHR9XG5cbiAgXHRcdHJldHVybiB1cmxDb25maWdIdG1sO1xuICBcdH1cblxuICBcdC8vIEhhbmRsZSBcImNsaWNrXCIgZXZlbnRzIG9uIHRvb2xiYXIgY2hlY2tib3hlcyBhbmQgXCJjaGFuZ2VcIiBmb3Igc2VsZWN0IG1lbnVzLlxuICBcdC8vIFVwZGF0ZXMgdGhlIFVSTCB3aXRoIHRoZSBuZXcgc3RhdGUgb2YgYGNvbmZpZy51cmxDb25maWdgIHZhbHVlcy5cbiAgXHRmdW5jdGlvbiB0b29sYmFyQ2hhbmdlZCgpIHtcbiAgXHRcdHZhciB1cGRhdGVkVXJsLFxuICBcdFx0ICAgIHZhbHVlLFxuICBcdFx0ICAgIHRlc3RzLFxuICBcdFx0ICAgIGZpZWxkID0gdGhpcyxcbiAgXHRcdCAgICBwYXJhbXMgPSB7fTtcblxuICBcdFx0Ly8gRGV0ZWN0IGlmIGZpZWxkIGlzIGEgc2VsZWN0IG1lbnUgb3IgYSBjaGVja2JveFxuICBcdFx0aWYgKFwic2VsZWN0ZWRJbmRleFwiIGluIGZpZWxkKSB7XG4gIFx0XHRcdHZhbHVlID0gZmllbGQub3B0aW9uc1tmaWVsZC5zZWxlY3RlZEluZGV4XS52YWx1ZSB8fCB1bmRlZmluZWQ7XG4gIFx0XHR9IGVsc2Uge1xuICBcdFx0XHR2YWx1ZSA9IGZpZWxkLmNoZWNrZWQgPyBmaWVsZC5kZWZhdWx0VmFsdWUgfHwgdHJ1ZSA6IHVuZGVmaW5lZDtcbiAgXHRcdH1cblxuICBcdFx0cGFyYW1zW2ZpZWxkLm5hbWVdID0gdmFsdWU7XG4gIFx0XHR1cGRhdGVkVXJsID0gc2V0VXJsKHBhcmFtcyk7XG5cbiAgXHRcdC8vIENoZWNrIGlmIHdlIGNhbiBhcHBseSB0aGUgY2hhbmdlIHdpdGhvdXQgYSBwYWdlIHJlZnJlc2hcbiAgXHRcdGlmIChcImhpZGVwYXNzZWRcIiA9PT0gZmllbGQubmFtZSAmJiBcInJlcGxhY2VTdGF0ZVwiIGluIHdpbmRvdyQxLmhpc3RvcnkpIHtcbiAgXHRcdFx0UVVuaXQudXJsUGFyYW1zW2ZpZWxkLm5hbWVdID0gdmFsdWU7XG4gIFx0XHRcdGNvbmZpZ1tmaWVsZC5uYW1lXSA9IHZhbHVlIHx8IGZhbHNlO1xuICBcdFx0XHR0ZXN0cyA9IGlkKFwicXVuaXQtdGVzdHNcIik7XG4gIFx0XHRcdGlmICh0ZXN0cykge1xuICBcdFx0XHRcdHZhciBsZW5ndGggPSB0ZXN0cy5jaGlsZHJlbi5sZW5ndGg7XG4gIFx0XHRcdFx0dmFyIGNoaWxkcmVuID0gdGVzdHMuY2hpbGRyZW47XG5cbiAgXHRcdFx0XHRpZiAoZmllbGQuY2hlY2tlZCkge1xuICBcdFx0XHRcdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xuICBcdFx0XHRcdFx0XHR2YXIgdGVzdCQkMSA9IGNoaWxkcmVuW2ldO1xuXG4gIFx0XHRcdFx0XHRcdGlmICh0ZXN0JCQxICYmIHRlc3QkJDEuY2xhc3NOYW1lLmluZGV4T2YoXCJwYXNzXCIpID4gLTEpIHtcbiAgXHRcdFx0XHRcdFx0XHRoaWRkZW5UZXN0cy5wdXNoKHRlc3QkJDEpO1xuICBcdFx0XHRcdFx0XHR9XG4gIFx0XHRcdFx0XHR9XG5cbiAgXHRcdFx0XHRcdHZhciBfaXRlcmF0b3JOb3JtYWxDb21wbGV0aW9uID0gdHJ1ZTtcbiAgXHRcdFx0XHRcdHZhciBfZGlkSXRlcmF0b3JFcnJvciA9IGZhbHNlO1xuICBcdFx0XHRcdFx0dmFyIF9pdGVyYXRvckVycm9yID0gdW5kZWZpbmVkO1xuXG4gIFx0XHRcdFx0XHR0cnkge1xuICBcdFx0XHRcdFx0XHRmb3IgKHZhciBfaXRlcmF0b3IgPSBoaWRkZW5UZXN0c1tTeW1ib2wuaXRlcmF0b3JdKCksIF9zdGVwOyAhKF9pdGVyYXRvck5vcm1hbENvbXBsZXRpb24gPSAoX3N0ZXAgPSBfaXRlcmF0b3IubmV4dCgpKS5kb25lKTsgX2l0ZXJhdG9yTm9ybWFsQ29tcGxldGlvbiA9IHRydWUpIHtcbiAgXHRcdFx0XHRcdFx0XHR2YXIgaGlkZGVuVGVzdCA9IF9zdGVwLnZhbHVlO1xuXG4gIFx0XHRcdFx0XHRcdFx0dGVzdHMucmVtb3ZlQ2hpbGQoaGlkZGVuVGVzdCk7XG4gIFx0XHRcdFx0XHRcdH1cbiAgXHRcdFx0XHRcdH0gY2F0Y2ggKGVycikge1xuICBcdFx0XHRcdFx0XHRfZGlkSXRlcmF0b3JFcnJvciA9IHRydWU7XG4gIFx0XHRcdFx0XHRcdF9pdGVyYXRvckVycm9yID0gZXJyO1xuICBcdFx0XHRcdFx0fSBmaW5hbGx5IHtcbiAgXHRcdFx0XHRcdFx0dHJ5IHtcbiAgXHRcdFx0XHRcdFx0XHRpZiAoIV9pdGVyYXRvck5vcm1hbENvbXBsZXRpb24gJiYgX2l0ZXJhdG9yLnJldHVybikge1xuICBcdFx0XHRcdFx0XHRcdFx0X2l0ZXJhdG9yLnJldHVybigpO1xuICBcdFx0XHRcdFx0XHRcdH1cbiAgXHRcdFx0XHRcdFx0fSBmaW5hbGx5IHtcbiAgXHRcdFx0XHRcdFx0XHRpZiAoX2RpZEl0ZXJhdG9yRXJyb3IpIHtcbiAgXHRcdFx0XHRcdFx0XHRcdHRocm93IF9pdGVyYXRvckVycm9yO1xuICBcdFx0XHRcdFx0XHRcdH1cbiAgXHRcdFx0XHRcdFx0fVxuICBcdFx0XHRcdFx0fVxuICBcdFx0XHRcdH0gZWxzZSB7XG4gIFx0XHRcdFx0XHR3aGlsZSAoKHRlc3QkJDEgPSBoaWRkZW5UZXN0cy5wb3AoKSkgIT0gbnVsbCkge1xuICBcdFx0XHRcdFx0XHR0ZXN0cy5hcHBlbmRDaGlsZCh0ZXN0JCQxKTtcbiAgXHRcdFx0XHRcdH1cbiAgXHRcdFx0XHR9XG4gIFx0XHRcdH1cbiAgXHRcdFx0d2luZG93JDEuaGlzdG9yeS5yZXBsYWNlU3RhdGUobnVsbCwgXCJcIiwgdXBkYXRlZFVybCk7XG4gIFx0XHR9IGVsc2Uge1xuICBcdFx0XHR3aW5kb3ckMS5sb2NhdGlvbiA9IHVwZGF0ZWRVcmw7XG4gIFx0XHR9XG4gIFx0fVxuXG4gIFx0ZnVuY3Rpb24gc2V0VXJsKHBhcmFtcykge1xuICBcdFx0dmFyIGtleSxcbiAgXHRcdCAgICBhcnJWYWx1ZSxcbiAgXHRcdCAgICBpLFxuICBcdFx0ICAgIHF1ZXJ5c3RyaW5nID0gXCI/XCIsXG4gIFx0XHQgICAgbG9jYXRpb24gPSB3aW5kb3ckMS5sb2NhdGlvbjtcblxuICBcdFx0cGFyYW1zID0gUVVuaXQuZXh0ZW5kKFFVbml0LmV4dGVuZCh7fSwgUVVuaXQudXJsUGFyYW1zKSwgcGFyYW1zKTtcblxuICBcdFx0Zm9yIChrZXkgaW4gcGFyYW1zKSB7XG5cbiAgXHRcdFx0Ly8gU2tpcCBpbmhlcml0ZWQgb3IgdW5kZWZpbmVkIHByb3BlcnRpZXNcbiAgXHRcdFx0aWYgKGhhc093biQkMS5jYWxsKHBhcmFtcywga2V5KSAmJiBwYXJhbXNba2V5XSAhPT0gdW5kZWZpbmVkKSB7XG5cbiAgXHRcdFx0XHQvLyBPdXRwdXQgYSBwYXJhbWV0ZXIgZm9yIGVhY2ggdmFsdWUgb2YgdGhpcyBrZXlcbiAgXHRcdFx0XHQvLyAoYnV0IHVzdWFsbHkganVzdCBvbmUpXG4gIFx0XHRcdFx0YXJyVmFsdWUgPSBbXS5jb25jYXQocGFyYW1zW2tleV0pO1xuICBcdFx0XHRcdGZvciAoaSA9IDA7IGkgPCBhcnJWYWx1ZS5sZW5ndGg7IGkrKykge1xuICBcdFx0XHRcdFx0cXVlcnlzdHJpbmcgKz0gZW5jb2RlVVJJQ29tcG9uZW50KGtleSk7XG4gIFx0XHRcdFx0XHRpZiAoYXJyVmFsdWVbaV0gIT09IHRydWUpIHtcbiAgXHRcdFx0XHRcdFx0cXVlcnlzdHJpbmcgKz0gXCI9XCIgKyBlbmNvZGVVUklDb21wb25lbnQoYXJyVmFsdWVbaV0pO1xuICBcdFx0XHRcdFx0fVxuICBcdFx0XHRcdFx0cXVlcnlzdHJpbmcgKz0gXCImXCI7XG4gIFx0XHRcdFx0fVxuICBcdFx0XHR9XG4gIFx0XHR9XG4gIFx0XHRyZXR1cm4gbG9jYXRpb24ucHJvdG9jb2wgKyBcIi8vXCIgKyBsb2NhdGlvbi5ob3N0ICsgbG9jYXRpb24ucGF0aG5hbWUgKyBxdWVyeXN0cmluZy5zbGljZSgwLCAtMSk7XG4gIFx0fVxuXG4gIFx0ZnVuY3Rpb24gYXBwbHlVcmxQYXJhbXMoKSB7XG4gIFx0XHR2YXIgaSxcbiAgXHRcdCAgICBzZWxlY3RlZE1vZHVsZXMgPSBbXSxcbiAgXHRcdCAgICBtb2R1bGVzTGlzdCA9IGlkKFwicXVuaXQtbW9kdWxlZmlsdGVyLWRyb3Bkb3duLWxpc3RcIikuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJpbnB1dFwiKSxcbiAgXHRcdCAgICBmaWx0ZXIgPSBpZChcInF1bml0LWZpbHRlci1pbnB1dFwiKS52YWx1ZTtcblxuICBcdFx0Zm9yIChpID0gMDsgaSA8IG1vZHVsZXNMaXN0Lmxlbmd0aDsgaSsrKSB7XG4gIFx0XHRcdGlmIChtb2R1bGVzTGlzdFtpXS5jaGVja2VkKSB7XG4gIFx0XHRcdFx0c2VsZWN0ZWRNb2R1bGVzLnB1c2gobW9kdWxlc0xpc3RbaV0udmFsdWUpO1xuICBcdFx0XHR9XG4gIFx0XHR9XG5cbiAgXHRcdHdpbmRvdyQxLmxvY2F0aW9uID0gc2V0VXJsKHtcbiAgXHRcdFx0ZmlsdGVyOiBmaWx0ZXIgPT09IFwiXCIgPyB1bmRlZmluZWQgOiBmaWx0ZXIsXG4gIFx0XHRcdG1vZHVsZUlkOiBzZWxlY3RlZE1vZHVsZXMubGVuZ3RoID09PSAwID8gdW5kZWZpbmVkIDogc2VsZWN0ZWRNb2R1bGVzLFxuXG4gIFx0XHRcdC8vIFJlbW92ZSBtb2R1bGUgYW5kIHRlc3RJZCBmaWx0ZXJcbiAgXHRcdFx0bW9kdWxlOiB1bmRlZmluZWQsXG4gIFx0XHRcdHRlc3RJZDogdW5kZWZpbmVkXG4gIFx0XHR9KTtcbiAgXHR9XG5cbiAgXHRmdW5jdGlvbiB0b29sYmFyVXJsQ29uZmlnQ29udGFpbmVyKCkge1xuICBcdFx0dmFyIHVybENvbmZpZ0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuXG4gIFx0XHR1cmxDb25maWdDb250YWluZXIuaW5uZXJIVE1MID0gZ2V0VXJsQ29uZmlnSHRtbCgpO1xuICBcdFx0YWRkQ2xhc3ModXJsQ29uZmlnQ29udGFpbmVyLCBcInF1bml0LXVybC1jb25maWdcIik7XG5cbiAgXHRcdGFkZEV2ZW50cyh1cmxDb25maWdDb250YWluZXIuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJpbnB1dFwiKSwgXCJjaGFuZ2VcIiwgdG9vbGJhckNoYW5nZWQpO1xuICBcdFx0YWRkRXZlbnRzKHVybENvbmZpZ0NvbnRhaW5lci5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNlbGVjdFwiKSwgXCJjaGFuZ2VcIiwgdG9vbGJhckNoYW5nZWQpO1xuXG4gIFx0XHRyZXR1cm4gdXJsQ29uZmlnQ29udGFpbmVyO1xuICBcdH1cblxuICBcdGZ1bmN0aW9uIGFib3J0VGVzdHNCdXR0b24oKSB7XG4gIFx0XHR2YXIgYnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgXHRcdGJ1dHRvbi5pZCA9IFwicXVuaXQtYWJvcnQtdGVzdHMtYnV0dG9uXCI7XG4gIFx0XHRidXR0b24uaW5uZXJIVE1MID0gXCJBYm9ydFwiO1xuICBcdFx0YWRkRXZlbnQoYnV0dG9uLCBcImNsaWNrXCIsIGFib3J0VGVzdHMpO1xuICBcdFx0cmV0dXJuIGJ1dHRvbjtcbiAgXHR9XG5cbiAgXHRmdW5jdGlvbiB0b29sYmFyTG9vc2VGaWx0ZXIoKSB7XG4gIFx0XHR2YXIgZmlsdGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImZvcm1cIiksXG4gIFx0XHQgICAgbGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIiksXG4gIFx0XHQgICAgaW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIiksXG4gIFx0XHQgICAgYnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcblxuICBcdFx0YWRkQ2xhc3MoZmlsdGVyLCBcInF1bml0LWZpbHRlclwiKTtcblxuICBcdFx0bGFiZWwuaW5uZXJIVE1MID0gXCJGaWx0ZXI6IFwiO1xuXG4gIFx0XHRpbnB1dC50eXBlID0gXCJ0ZXh0XCI7XG4gIFx0XHRpbnB1dC52YWx1ZSA9IGNvbmZpZy5maWx0ZXIgfHwgXCJcIjtcbiAgXHRcdGlucHV0Lm5hbWUgPSBcImZpbHRlclwiO1xuICBcdFx0aW5wdXQuaWQgPSBcInF1bml0LWZpbHRlci1pbnB1dFwiO1xuXG4gIFx0XHRidXR0b24uaW5uZXJIVE1MID0gXCJHb1wiO1xuXG4gIFx0XHRsYWJlbC5hcHBlbmRDaGlsZChpbnB1dCk7XG5cbiAgXHRcdGZpbHRlci5hcHBlbmRDaGlsZChsYWJlbCk7XG4gIFx0XHRmaWx0ZXIuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoXCIgXCIpKTtcbiAgXHRcdGZpbHRlci5hcHBlbmRDaGlsZChidXR0b24pO1xuICBcdFx0YWRkRXZlbnQoZmlsdGVyLCBcInN1Ym1pdFwiLCBpbnRlcmNlcHROYXZpZ2F0aW9uKTtcblxuICBcdFx0cmV0dXJuIGZpbHRlcjtcbiAgXHR9XG5cbiAgXHRmdW5jdGlvbiBtb2R1bGVMaXN0SHRtbCgpIHtcbiAgXHRcdHZhciBpLFxuICBcdFx0ICAgIGNoZWNrZWQsXG4gIFx0XHQgICAgaHRtbCA9IFwiXCI7XG5cbiAgXHRcdGZvciAoaSA9IDA7IGkgPCBjb25maWcubW9kdWxlcy5sZW5ndGg7IGkrKykge1xuICBcdFx0XHRpZiAoY29uZmlnLm1vZHVsZXNbaV0ubmFtZSAhPT0gXCJcIikge1xuICBcdFx0XHRcdGNoZWNrZWQgPSBjb25maWcubW9kdWxlSWQuaW5kZXhPZihjb25maWcubW9kdWxlc1tpXS5tb2R1bGVJZCkgPiAtMTtcbiAgXHRcdFx0XHRodG1sICs9IFwiPGxpPjxsYWJlbCBjbGFzcz0nY2xpY2thYmxlXCIgKyAoY2hlY2tlZCA/IFwiIGNoZWNrZWRcIiA6IFwiXCIpICsgXCInPjxpbnB1dCB0eXBlPSdjaGVja2JveCcgXCIgKyBcInZhbHVlPSdcIiArIGNvbmZpZy5tb2R1bGVzW2ldLm1vZHVsZUlkICsgXCInXCIgKyAoY2hlY2tlZCA/IFwiIGNoZWNrZWQ9J2NoZWNrZWQnXCIgOiBcIlwiKSArIFwiIC8+XCIgKyBlc2NhcGVUZXh0KGNvbmZpZy5tb2R1bGVzW2ldLm5hbWUpICsgXCI8L2xhYmVsPjwvbGk+XCI7XG4gIFx0XHRcdH1cbiAgXHRcdH1cblxuICBcdFx0cmV0dXJuIGh0bWw7XG4gIFx0fVxuXG4gIFx0ZnVuY3Rpb24gdG9vbGJhck1vZHVsZUZpbHRlcigpIHtcbiAgXHRcdHZhciBjb21taXQsXG4gIFx0XHQgICAgcmVzZXQsXG4gIFx0XHQgICAgbW9kdWxlRmlsdGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImZvcm1cIiksXG4gIFx0XHQgICAgbGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIiksXG4gIFx0XHQgICAgbW9kdWxlU2VhcmNoID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpLFxuICBcdFx0ICAgIGRyb3BEb3duID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKSxcbiAgXHRcdCAgICBhY3Rpb25zID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIiksXG4gIFx0XHQgICAgYXBwbHlCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpLFxuICBcdFx0ICAgIHJlc2V0QnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKSxcbiAgXHRcdCAgICBhbGxNb2R1bGVzTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIiksXG4gIFx0XHQgICAgYWxsQ2hlY2tib3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIiksXG4gIFx0XHQgICAgZHJvcERvd25MaXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInVsXCIpLFxuICBcdFx0ICAgIGRpcnR5ID0gZmFsc2U7XG5cbiAgXHRcdG1vZHVsZVNlYXJjaC5pZCA9IFwicXVuaXQtbW9kdWxlZmlsdGVyLXNlYXJjaFwiO1xuICBcdFx0bW9kdWxlU2VhcmNoLmF1dG9jb21wbGV0ZSA9IFwib2ZmXCI7XG4gIFx0XHRhZGRFdmVudChtb2R1bGVTZWFyY2gsIFwiaW5wdXRcIiwgc2VhcmNoSW5wdXQpO1xuICBcdFx0YWRkRXZlbnQobW9kdWxlU2VhcmNoLCBcImlucHV0XCIsIHNlYXJjaEZvY3VzKTtcbiAgXHRcdGFkZEV2ZW50KG1vZHVsZVNlYXJjaCwgXCJmb2N1c1wiLCBzZWFyY2hGb2N1cyk7XG4gIFx0XHRhZGRFdmVudChtb2R1bGVTZWFyY2gsIFwiY2xpY2tcIiwgc2VhcmNoRm9jdXMpO1xuXG4gIFx0XHRsYWJlbC5pZCA9IFwicXVuaXQtbW9kdWxlZmlsdGVyLXNlYXJjaC1jb250YWluZXJcIjtcbiAgXHRcdGxhYmVsLmlubmVySFRNTCA9IFwiTW9kdWxlOiBcIjtcbiAgXHRcdGxhYmVsLmFwcGVuZENoaWxkKG1vZHVsZVNlYXJjaCk7XG5cbiAgXHRcdGFwcGx5QnV0dG9uLnRleHRDb250ZW50ID0gXCJBcHBseVwiO1xuICBcdFx0YXBwbHlCdXR0b24uc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuXG4gIFx0XHRyZXNldEJ1dHRvbi50ZXh0Q29udGVudCA9IFwiUmVzZXRcIjtcbiAgXHRcdHJlc2V0QnV0dG9uLnR5cGUgPSBcInJlc2V0XCI7XG4gIFx0XHRyZXNldEJ1dHRvbi5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG5cbiAgXHRcdGFsbENoZWNrYm94LnR5cGUgPSBcImNoZWNrYm94XCI7XG4gIFx0XHRhbGxDaGVja2JveC5jaGVja2VkID0gY29uZmlnLm1vZHVsZUlkLmxlbmd0aCA9PT0gMDtcblxuICBcdFx0YWxsTW9kdWxlc0xhYmVsLmNsYXNzTmFtZSA9IFwiY2xpY2thYmxlXCI7XG4gIFx0XHRpZiAoY29uZmlnLm1vZHVsZUlkLmxlbmd0aCkge1xuICBcdFx0XHRhbGxNb2R1bGVzTGFiZWwuY2xhc3NOYW1lID0gXCJjaGVja2VkXCI7XG4gIFx0XHR9XG4gIFx0XHRhbGxNb2R1bGVzTGFiZWwuYXBwZW5kQ2hpbGQoYWxsQ2hlY2tib3gpO1xuICBcdFx0YWxsTW9kdWxlc0xhYmVsLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKFwiQWxsIG1vZHVsZXNcIikpO1xuXG4gIFx0XHRhY3Rpb25zLmlkID0gXCJxdW5pdC1tb2R1bGVmaWx0ZXItYWN0aW9uc1wiO1xuICBcdFx0YWN0aW9ucy5hcHBlbmRDaGlsZChhcHBseUJ1dHRvbik7XG4gIFx0XHRhY3Rpb25zLmFwcGVuZENoaWxkKHJlc2V0QnV0dG9uKTtcbiAgXHRcdGFjdGlvbnMuYXBwZW5kQ2hpbGQoYWxsTW9kdWxlc0xhYmVsKTtcbiAgXHRcdGNvbW1pdCA9IGFjdGlvbnMuZmlyc3RDaGlsZDtcbiAgXHRcdHJlc2V0ID0gY29tbWl0Lm5leHRTaWJsaW5nO1xuICBcdFx0YWRkRXZlbnQoY29tbWl0LCBcImNsaWNrXCIsIGFwcGx5VXJsUGFyYW1zKTtcblxuICBcdFx0ZHJvcERvd25MaXN0LmlkID0gXCJxdW5pdC1tb2R1bGVmaWx0ZXItZHJvcGRvd24tbGlzdFwiO1xuICBcdFx0ZHJvcERvd25MaXN0LmlubmVySFRNTCA9IG1vZHVsZUxpc3RIdG1sKCk7XG5cbiAgXHRcdGRyb3BEb3duLmlkID0gXCJxdW5pdC1tb2R1bGVmaWx0ZXItZHJvcGRvd25cIjtcbiAgXHRcdGRyb3BEb3duLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgXHRcdGRyb3BEb3duLmFwcGVuZENoaWxkKGFjdGlvbnMpO1xuICBcdFx0ZHJvcERvd24uYXBwZW5kQ2hpbGQoZHJvcERvd25MaXN0KTtcbiAgXHRcdGFkZEV2ZW50KGRyb3BEb3duLCBcImNoYW5nZVwiLCBzZWxlY3Rpb25DaGFuZ2UpO1xuICBcdFx0c2VsZWN0aW9uQ2hhbmdlKCk7XG5cbiAgXHRcdG1vZHVsZUZpbHRlci5pZCA9IFwicXVuaXQtbW9kdWxlZmlsdGVyXCI7XG4gIFx0XHRtb2R1bGVGaWx0ZXIuYXBwZW5kQ2hpbGQobGFiZWwpO1xuICBcdFx0bW9kdWxlRmlsdGVyLmFwcGVuZENoaWxkKGRyb3BEb3duKTtcbiAgXHRcdGFkZEV2ZW50KG1vZHVsZUZpbHRlciwgXCJzdWJtaXRcIiwgaW50ZXJjZXB0TmF2aWdhdGlvbik7XG4gIFx0XHRhZGRFdmVudChtb2R1bGVGaWx0ZXIsIFwicmVzZXRcIiwgZnVuY3Rpb24gKCkge1xuXG4gIFx0XHRcdC8vIExldCB0aGUgcmVzZXQgaGFwcGVuLCB0aGVuIHVwZGF0ZSBzdHlsZXNcbiAgXHRcdFx0d2luZG93JDEuc2V0VGltZW91dChzZWxlY3Rpb25DaGFuZ2UpO1xuICBcdFx0fSk7XG5cbiAgXHRcdC8vIEVuYWJsZXMgc2hvdy9oaWRlIGZvciB0aGUgZHJvcGRvd25cbiAgXHRcdGZ1bmN0aW9uIHNlYXJjaEZvY3VzKCkge1xuICBcdFx0XHRpZiAoZHJvcERvd24uc3R5bGUuZGlzcGxheSAhPT0gXCJub25lXCIpIHtcbiAgXHRcdFx0XHRyZXR1cm47XG4gIFx0XHRcdH1cblxuICBcdFx0XHRkcm9wRG93bi5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xuICBcdFx0XHRhZGRFdmVudChkb2N1bWVudCwgXCJjbGlja1wiLCBoaWRlSGFuZGxlcik7XG4gIFx0XHRcdGFkZEV2ZW50KGRvY3VtZW50LCBcImtleWRvd25cIiwgaGlkZUhhbmRsZXIpO1xuXG4gIFx0XHRcdC8vIEhpZGUgb24gRXNjYXBlIGtleWRvd24gb3Igb3V0c2lkZS1jb250YWluZXIgY2xpY2tcbiAgXHRcdFx0ZnVuY3Rpb24gaGlkZUhhbmRsZXIoZSkge1xuICBcdFx0XHRcdHZhciBpbkNvbnRhaW5lciA9IG1vZHVsZUZpbHRlci5jb250YWlucyhlLnRhcmdldCk7XG5cbiAgXHRcdFx0XHRpZiAoZS5rZXlDb2RlID09PSAyNyB8fCAhaW5Db250YWluZXIpIHtcbiAgXHRcdFx0XHRcdGlmIChlLmtleUNvZGUgPT09IDI3ICYmIGluQ29udGFpbmVyKSB7XG4gIFx0XHRcdFx0XHRcdG1vZHVsZVNlYXJjaC5mb2N1cygpO1xuICBcdFx0XHRcdFx0fVxuICBcdFx0XHRcdFx0ZHJvcERvd24uc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICBcdFx0XHRcdFx0cmVtb3ZlRXZlbnQoZG9jdW1lbnQsIFwiY2xpY2tcIiwgaGlkZUhhbmRsZXIpO1xuICBcdFx0XHRcdFx0cmVtb3ZlRXZlbnQoZG9jdW1lbnQsIFwia2V5ZG93blwiLCBoaWRlSGFuZGxlcik7XG4gIFx0XHRcdFx0XHRtb2R1bGVTZWFyY2gudmFsdWUgPSBcIlwiO1xuICBcdFx0XHRcdFx0c2VhcmNoSW5wdXQoKTtcbiAgXHRcdFx0XHR9XG4gIFx0XHRcdH1cbiAgXHRcdH1cblxuICBcdFx0Ly8gUHJvY2Vzc2VzIG1vZHVsZSBzZWFyY2ggYm94IGlucHV0XG4gIFx0XHRmdW5jdGlvbiBzZWFyY2hJbnB1dCgpIHtcbiAgXHRcdFx0dmFyIGksXG4gIFx0XHRcdCAgICBpdGVtLFxuICBcdFx0XHQgICAgc2VhcmNoVGV4dCA9IG1vZHVsZVNlYXJjaC52YWx1ZS50b0xvd2VyQ2FzZSgpLFxuICBcdFx0XHQgICAgbGlzdEl0ZW1zID0gZHJvcERvd25MaXN0LmNoaWxkcmVuO1xuXG4gIFx0XHRcdGZvciAoaSA9IDA7IGkgPCBsaXN0SXRlbXMubGVuZ3RoOyBpKyspIHtcbiAgXHRcdFx0XHRpdGVtID0gbGlzdEl0ZW1zW2ldO1xuICBcdFx0XHRcdGlmICghc2VhcmNoVGV4dCB8fCBpdGVtLnRleHRDb250ZW50LnRvTG93ZXJDYXNlKCkuaW5kZXhPZihzZWFyY2hUZXh0KSA+IC0xKSB7XG4gIFx0XHRcdFx0XHRpdGVtLnN0eWxlLmRpc3BsYXkgPSBcIlwiO1xuICBcdFx0XHRcdH0gZWxzZSB7XG4gIFx0XHRcdFx0XHRpdGVtLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgXHRcdFx0XHR9XG4gIFx0XHRcdH1cbiAgXHRcdH1cblxuICBcdFx0Ly8gUHJvY2Vzc2VzIHNlbGVjdGlvbiBjaGFuZ2VzXG4gIFx0XHRmdW5jdGlvbiBzZWxlY3Rpb25DaGFuZ2UoZXZ0KSB7XG4gIFx0XHRcdHZhciBpLFxuICBcdFx0XHQgICAgaXRlbSxcbiAgXHRcdFx0ICAgIGNoZWNrYm94ID0gZXZ0ICYmIGV2dC50YXJnZXQgfHwgYWxsQ2hlY2tib3gsXG4gIFx0XHRcdCAgICBtb2R1bGVzTGlzdCA9IGRyb3BEb3duTGlzdC5nZXRFbGVtZW50c0J5VGFnTmFtZShcImlucHV0XCIpLFxuICBcdFx0XHQgICAgc2VsZWN0ZWROYW1lcyA9IFtdO1xuXG4gIFx0XHRcdHRvZ2dsZUNsYXNzKGNoZWNrYm94LnBhcmVudE5vZGUsIFwiY2hlY2tlZFwiLCBjaGVja2JveC5jaGVja2VkKTtcblxuICBcdFx0XHRkaXJ0eSA9IGZhbHNlO1xuICBcdFx0XHRpZiAoY2hlY2tib3guY2hlY2tlZCAmJiBjaGVja2JveCAhPT0gYWxsQ2hlY2tib3gpIHtcbiAgXHRcdFx0XHRhbGxDaGVja2JveC5jaGVja2VkID0gZmFsc2U7XG4gIFx0XHRcdFx0cmVtb3ZlQ2xhc3MoYWxsQ2hlY2tib3gucGFyZW50Tm9kZSwgXCJjaGVja2VkXCIpO1xuICBcdFx0XHR9XG4gIFx0XHRcdGZvciAoaSA9IDA7IGkgPCBtb2R1bGVzTGlzdC5sZW5ndGg7IGkrKykge1xuICBcdFx0XHRcdGl0ZW0gPSBtb2R1bGVzTGlzdFtpXTtcbiAgXHRcdFx0XHRpZiAoIWV2dCkge1xuICBcdFx0XHRcdFx0dG9nZ2xlQ2xhc3MoaXRlbS5wYXJlbnROb2RlLCBcImNoZWNrZWRcIiwgaXRlbS5jaGVja2VkKTtcbiAgXHRcdFx0XHR9IGVsc2UgaWYgKGNoZWNrYm94ID09PSBhbGxDaGVja2JveCAmJiBjaGVja2JveC5jaGVja2VkKSB7XG4gIFx0XHRcdFx0XHRpdGVtLmNoZWNrZWQgPSBmYWxzZTtcbiAgXHRcdFx0XHRcdHJlbW92ZUNsYXNzKGl0ZW0ucGFyZW50Tm9kZSwgXCJjaGVja2VkXCIpO1xuICBcdFx0XHRcdH1cbiAgXHRcdFx0XHRkaXJ0eSA9IGRpcnR5IHx8IGl0ZW0uY2hlY2tlZCAhPT0gaXRlbS5kZWZhdWx0Q2hlY2tlZDtcbiAgXHRcdFx0XHRpZiAoaXRlbS5jaGVja2VkKSB7XG4gIFx0XHRcdFx0XHRzZWxlY3RlZE5hbWVzLnB1c2goaXRlbS5wYXJlbnROb2RlLnRleHRDb250ZW50KTtcbiAgXHRcdFx0XHR9XG4gIFx0XHRcdH1cblxuICBcdFx0XHRjb21taXQuc3R5bGUuZGlzcGxheSA9IHJlc2V0LnN0eWxlLmRpc3BsYXkgPSBkaXJ0eSA/IFwiXCIgOiBcIm5vbmVcIjtcbiAgXHRcdFx0bW9kdWxlU2VhcmNoLnBsYWNlaG9sZGVyID0gc2VsZWN0ZWROYW1lcy5qb2luKFwiLCBcIikgfHwgYWxsQ2hlY2tib3gucGFyZW50Tm9kZS50ZXh0Q29udGVudDtcbiAgXHRcdFx0bW9kdWxlU2VhcmNoLnRpdGxlID0gXCJUeXBlIHRvIGZpbHRlciBsaXN0LiBDdXJyZW50IHNlbGVjdGlvbjpcXG5cIiArIChzZWxlY3RlZE5hbWVzLmpvaW4oXCJcXG5cIikgfHwgYWxsQ2hlY2tib3gucGFyZW50Tm9kZS50ZXh0Q29udGVudCk7XG4gIFx0XHR9XG5cbiAgXHRcdHJldHVybiBtb2R1bGVGaWx0ZXI7XG4gIFx0fVxuXG4gIFx0ZnVuY3Rpb24gYXBwZW5kVG9vbGJhcigpIHtcbiAgXHRcdHZhciB0b29sYmFyID0gaWQoXCJxdW5pdC10ZXN0cnVubmVyLXRvb2xiYXJcIik7XG5cbiAgXHRcdGlmICh0b29sYmFyKSB7XG4gIFx0XHRcdHRvb2xiYXIuYXBwZW5kQ2hpbGQodG9vbGJhclVybENvbmZpZ0NvbnRhaW5lcigpKTtcbiAgXHRcdFx0dG9vbGJhci5hcHBlbmRDaGlsZCh0b29sYmFyTW9kdWxlRmlsdGVyKCkpO1xuICBcdFx0XHR0b29sYmFyLmFwcGVuZENoaWxkKHRvb2xiYXJMb29zZUZpbHRlcigpKTtcbiAgXHRcdFx0dG9vbGJhci5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpKS5jbGFzc05hbWUgPSBcImNsZWFyZml4XCI7XG4gIFx0XHR9XG4gIFx0fVxuXG4gIFx0ZnVuY3Rpb24gYXBwZW5kSGVhZGVyKCkge1xuICBcdFx0dmFyIGhlYWRlciA9IGlkKFwicXVuaXQtaGVhZGVyXCIpO1xuXG4gIFx0XHRpZiAoaGVhZGVyKSB7XG4gIFx0XHRcdGhlYWRlci5pbm5lckhUTUwgPSBcIjxhIGhyZWY9J1wiICsgZXNjYXBlVGV4dCh1bmZpbHRlcmVkVXJsKSArIFwiJz5cIiArIGhlYWRlci5pbm5lckhUTUwgKyBcIjwvYT4gXCI7XG4gIFx0XHR9XG4gIFx0fVxuXG4gIFx0ZnVuY3Rpb24gYXBwZW5kQmFubmVyKCkge1xuICBcdFx0dmFyIGJhbm5lciA9IGlkKFwicXVuaXQtYmFubmVyXCIpO1xuXG4gIFx0XHRpZiAoYmFubmVyKSB7XG4gIFx0XHRcdGJhbm5lci5jbGFzc05hbWUgPSBcIlwiO1xuICBcdFx0fVxuICBcdH1cblxuICBcdGZ1bmN0aW9uIGFwcGVuZFRlc3RSZXN1bHRzKCkge1xuICBcdFx0dmFyIHRlc3RzID0gaWQoXCJxdW5pdC10ZXN0c1wiKSxcbiAgXHRcdCAgICByZXN1bHQgPSBpZChcInF1bml0LXRlc3RyZXN1bHRcIiksXG4gIFx0XHQgICAgY29udHJvbHM7XG5cbiAgXHRcdGlmIChyZXN1bHQpIHtcbiAgXHRcdFx0cmVzdWx0LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQocmVzdWx0KTtcbiAgXHRcdH1cblxuICBcdFx0aWYgKHRlc3RzKSB7XG4gIFx0XHRcdHRlc3RzLmlubmVySFRNTCA9IFwiXCI7XG4gIFx0XHRcdHJlc3VsdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICBcdFx0XHRyZXN1bHQuaWQgPSBcInF1bml0LXRlc3RyZXN1bHRcIjtcbiAgXHRcdFx0cmVzdWx0LmNsYXNzTmFtZSA9IFwicmVzdWx0XCI7XG4gIFx0XHRcdHRlc3RzLnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKHJlc3VsdCwgdGVzdHMpO1xuICBcdFx0XHRyZXN1bHQuaW5uZXJIVE1MID0gXCI8ZGl2IGlkPVxcXCJxdW5pdC10ZXN0cmVzdWx0LWRpc3BsYXlcXFwiPlJ1bm5pbmcuLi48YnIgLz4mIzE2MDs8L2Rpdj5cIiArIFwiPGRpdiBpZD1cXFwicXVuaXQtdGVzdHJlc3VsdC1jb250cm9sc1xcXCI+PC9kaXY+XCIgKyBcIjxkaXYgY2xhc3M9XFxcImNsZWFyZml4XFxcIj48L2Rpdj5cIjtcbiAgXHRcdFx0Y29udHJvbHMgPSBpZChcInF1bml0LXRlc3RyZXN1bHQtY29udHJvbHNcIik7XG4gIFx0XHR9XG5cbiAgXHRcdGlmIChjb250cm9scykge1xuICBcdFx0XHRjb250cm9scy5hcHBlbmRDaGlsZChhYm9ydFRlc3RzQnV0dG9uKCkpO1xuICBcdFx0fVxuICBcdH1cblxuICBcdGZ1bmN0aW9uIGFwcGVuZEZpbHRlcmVkVGVzdCgpIHtcbiAgXHRcdHZhciB0ZXN0SWQgPSBRVW5pdC5jb25maWcudGVzdElkO1xuICBcdFx0aWYgKCF0ZXN0SWQgfHwgdGVzdElkLmxlbmd0aCA8PSAwKSB7XG4gIFx0XHRcdHJldHVybiBcIlwiO1xuICBcdFx0fVxuICBcdFx0cmV0dXJuIFwiPGRpdiBpZD0ncXVuaXQtZmlsdGVyZWRUZXN0Jz5SZXJ1bm5pbmcgc2VsZWN0ZWQgdGVzdHM6IFwiICsgZXNjYXBlVGV4dCh0ZXN0SWQuam9pbihcIiwgXCIpKSArIFwiIDxhIGlkPSdxdW5pdC1jbGVhckZpbHRlcicgaHJlZj0nXCIgKyBlc2NhcGVUZXh0KHVuZmlsdGVyZWRVcmwpICsgXCInPlJ1biBhbGwgdGVzdHM8L2E+PC9kaXY+XCI7XG4gIFx0fVxuXG4gIFx0ZnVuY3Rpb24gYXBwZW5kVXNlckFnZW50KCkge1xuICBcdFx0dmFyIHVzZXJBZ2VudCA9IGlkKFwicXVuaXQtdXNlckFnZW50XCIpO1xuXG4gIFx0XHRpZiAodXNlckFnZW50KSB7XG4gIFx0XHRcdHVzZXJBZ2VudC5pbm5lckhUTUwgPSBcIlwiO1xuICBcdFx0XHR1c2VyQWdlbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoXCJRVW5pdCBcIiArIFFVbml0LnZlcnNpb24gKyBcIjsgXCIgKyBuYXZpZ2F0b3IudXNlckFnZW50KSk7XG4gIFx0XHR9XG4gIFx0fVxuXG4gIFx0ZnVuY3Rpb24gYXBwZW5kSW50ZXJmYWNlKCkge1xuICBcdFx0dmFyIHF1bml0ID0gaWQoXCJxdW5pdFwiKTtcblxuICBcdFx0aWYgKHF1bml0KSB7XG4gIFx0XHRcdHF1bml0LmlubmVySFRNTCA9IFwiPGgxIGlkPSdxdW5pdC1oZWFkZXInPlwiICsgZXNjYXBlVGV4dChkb2N1bWVudC50aXRsZSkgKyBcIjwvaDE+XCIgKyBcIjxoMiBpZD0ncXVuaXQtYmFubmVyJz48L2gyPlwiICsgXCI8ZGl2IGlkPSdxdW5pdC10ZXN0cnVubmVyLXRvb2xiYXInPjwvZGl2PlwiICsgYXBwZW5kRmlsdGVyZWRUZXN0KCkgKyBcIjxoMiBpZD0ncXVuaXQtdXNlckFnZW50Jz48L2gyPlwiICsgXCI8b2wgaWQ9J3F1bml0LXRlc3RzJz48L29sPlwiO1xuICBcdFx0fVxuXG4gIFx0XHRhcHBlbmRIZWFkZXIoKTtcbiAgXHRcdGFwcGVuZEJhbm5lcigpO1xuICBcdFx0YXBwZW5kVGVzdFJlc3VsdHMoKTtcbiAgXHRcdGFwcGVuZFVzZXJBZ2VudCgpO1xuICBcdFx0YXBwZW5kVG9vbGJhcigpO1xuICBcdH1cblxuICBcdGZ1bmN0aW9uIGFwcGVuZFRlc3QobmFtZSwgdGVzdElkLCBtb2R1bGVOYW1lKSB7XG4gIFx0XHR2YXIgdGl0bGUsXG4gIFx0XHQgICAgcmVydW5UcmlnZ2VyLFxuICBcdFx0ICAgIHRlc3RCbG9jayxcbiAgXHRcdCAgICBhc3NlcnRMaXN0LFxuICBcdFx0ICAgIHRlc3RzID0gaWQoXCJxdW5pdC10ZXN0c1wiKTtcblxuICBcdFx0aWYgKCF0ZXN0cykge1xuICBcdFx0XHRyZXR1cm47XG4gIFx0XHR9XG5cbiAgXHRcdHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0cm9uZ1wiKTtcbiAgXHRcdHRpdGxlLmlubmVySFRNTCA9IGdldE5hbWVIdG1sKG5hbWUsIG1vZHVsZU5hbWUpO1xuXG4gIFx0XHRyZXJ1blRyaWdnZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYVwiKTtcbiAgXHRcdHJlcnVuVHJpZ2dlci5pbm5lckhUTUwgPSBcIlJlcnVuXCI7XG4gIFx0XHRyZXJ1blRyaWdnZXIuaHJlZiA9IHNldFVybCh7IHRlc3RJZDogdGVzdElkIH0pO1xuXG4gIFx0XHR0ZXN0QmxvY2sgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XG4gIFx0XHR0ZXN0QmxvY2suYXBwZW5kQ2hpbGQodGl0bGUpO1xuICBcdFx0dGVzdEJsb2NrLmFwcGVuZENoaWxkKHJlcnVuVHJpZ2dlcik7XG4gIFx0XHR0ZXN0QmxvY2suaWQgPSBcInF1bml0LXRlc3Qtb3V0cHV0LVwiICsgdGVzdElkO1xuXG4gIFx0XHRhc3NlcnRMaXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm9sXCIpO1xuICBcdFx0YXNzZXJ0TGlzdC5jbGFzc05hbWUgPSBcInF1bml0LWFzc2VydC1saXN0XCI7XG5cbiAgXHRcdHRlc3RCbG9jay5hcHBlbmRDaGlsZChhc3NlcnRMaXN0KTtcblxuICBcdFx0dGVzdHMuYXBwZW5kQ2hpbGQodGVzdEJsb2NrKTtcbiAgXHR9XG5cbiAgXHQvLyBIVE1MIFJlcG9ydGVyIGluaXRpYWxpemF0aW9uIGFuZCBsb2FkXG4gIFx0UVVuaXQuYmVnaW4oZnVuY3Rpb24gKGRldGFpbHMpIHtcbiAgXHRcdHZhciBpLCBtb2R1bGVPYmo7XG5cbiAgXHRcdC8vIFNvcnQgbW9kdWxlcyBieSBuYW1lIGZvciB0aGUgcGlja2VyXG4gIFx0XHRmb3IgKGkgPSAwOyBpIDwgZGV0YWlscy5tb2R1bGVzLmxlbmd0aDsgaSsrKSB7XG4gIFx0XHRcdG1vZHVsZU9iaiA9IGRldGFpbHMubW9kdWxlc1tpXTtcbiAgXHRcdFx0aWYgKG1vZHVsZU9iai5uYW1lKSB7XG4gIFx0XHRcdFx0bW9kdWxlc0xpc3QucHVzaChtb2R1bGVPYmoubmFtZSk7XG4gIFx0XHRcdH1cbiAgXHRcdH1cbiAgXHRcdG1vZHVsZXNMaXN0LnNvcnQoZnVuY3Rpb24gKGEsIGIpIHtcbiAgXHRcdFx0cmV0dXJuIGEubG9jYWxlQ29tcGFyZShiKTtcbiAgXHRcdH0pO1xuXG4gIFx0XHQvLyBJbml0aWFsaXplIFFVbml0IGVsZW1lbnRzXG4gIFx0XHRhcHBlbmRJbnRlcmZhY2UoKTtcbiAgXHR9KTtcblxuICBcdFFVbml0LmRvbmUoZnVuY3Rpb24gKGRldGFpbHMpIHtcbiAgXHRcdHZhciBiYW5uZXIgPSBpZChcInF1bml0LWJhbm5lclwiKSxcbiAgXHRcdCAgICB0ZXN0cyA9IGlkKFwicXVuaXQtdGVzdHNcIiksXG4gIFx0XHQgICAgYWJvcnRCdXR0b24gPSBpZChcInF1bml0LWFib3J0LXRlc3RzLWJ1dHRvblwiKSxcbiAgXHRcdCAgICB0b3RhbFRlc3RzID0gc3RhdHMucGFzc2VkVGVzdHMgKyBzdGF0cy5za2lwcGVkVGVzdHMgKyBzdGF0cy50b2RvVGVzdHMgKyBzdGF0cy5mYWlsZWRUZXN0cyxcbiAgXHRcdCAgICBodG1sID0gW3RvdGFsVGVzdHMsIFwiIHRlc3RzIGNvbXBsZXRlZCBpbiBcIiwgZGV0YWlscy5ydW50aW1lLCBcIiBtaWxsaXNlY29uZHMsIHdpdGggXCIsIHN0YXRzLmZhaWxlZFRlc3RzLCBcIiBmYWlsZWQsIFwiLCBzdGF0cy5za2lwcGVkVGVzdHMsIFwiIHNraXBwZWQsIGFuZCBcIiwgc3RhdHMudG9kb1Rlc3RzLCBcIiB0b2RvLjxiciAvPlwiLCBcIjxzcGFuIGNsYXNzPSdwYXNzZWQnPlwiLCBkZXRhaWxzLnBhc3NlZCwgXCI8L3NwYW4+IGFzc2VydGlvbnMgb2YgPHNwYW4gY2xhc3M9J3RvdGFsJz5cIiwgZGV0YWlscy50b3RhbCwgXCI8L3NwYW4+IHBhc3NlZCwgPHNwYW4gY2xhc3M9J2ZhaWxlZCc+XCIsIGRldGFpbHMuZmFpbGVkLCBcIjwvc3Bhbj4gZmFpbGVkLlwiXS5qb2luKFwiXCIpLFxuICBcdFx0ICAgIHRlc3QkJDEsXG4gIFx0XHQgICAgYXNzZXJ0TGksXG4gIFx0XHQgICAgYXNzZXJ0TGlzdDtcblxuICBcdFx0Ly8gVXBkYXRlIHJlbWFpbmluZyB0ZXN0cyB0byBhYm9ydGVkXG4gIFx0XHRpZiAoYWJvcnRCdXR0b24gJiYgYWJvcnRCdXR0b24uZGlzYWJsZWQpIHtcbiAgXHRcdFx0aHRtbCA9IFwiVGVzdHMgYWJvcnRlZCBhZnRlciBcIiArIGRldGFpbHMucnVudGltZSArIFwiIG1pbGxpc2Vjb25kcy5cIjtcblxuICBcdFx0XHRmb3IgKHZhciBpID0gMDsgaSA8IHRlc3RzLmNoaWxkcmVuLmxlbmd0aDsgaSsrKSB7XG4gIFx0XHRcdFx0dGVzdCQkMSA9IHRlc3RzLmNoaWxkcmVuW2ldO1xuICBcdFx0XHRcdGlmICh0ZXN0JCQxLmNsYXNzTmFtZSA9PT0gXCJcIiB8fCB0ZXN0JCQxLmNsYXNzTmFtZSA9PT0gXCJydW5uaW5nXCIpIHtcbiAgXHRcdFx0XHRcdHRlc3QkJDEuY2xhc3NOYW1lID0gXCJhYm9ydGVkXCI7XG4gIFx0XHRcdFx0XHRhc3NlcnRMaXN0ID0gdGVzdCQkMS5nZXRFbGVtZW50c0J5VGFnTmFtZShcIm9sXCIpWzBdO1xuICBcdFx0XHRcdFx0YXNzZXJ0TGkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XG4gIFx0XHRcdFx0XHRhc3NlcnRMaS5jbGFzc05hbWUgPSBcImZhaWxcIjtcbiAgXHRcdFx0XHRcdGFzc2VydExpLmlubmVySFRNTCA9IFwiVGVzdCBhYm9ydGVkLlwiO1xuICBcdFx0XHRcdFx0YXNzZXJ0TGlzdC5hcHBlbmRDaGlsZChhc3NlcnRMaSk7XG4gIFx0XHRcdFx0fVxuICBcdFx0XHR9XG4gIFx0XHR9XG5cbiAgXHRcdGlmIChiYW5uZXIgJiYgKCFhYm9ydEJ1dHRvbiB8fCBhYm9ydEJ1dHRvbi5kaXNhYmxlZCA9PT0gZmFsc2UpKSB7XG4gIFx0XHRcdGJhbm5lci5jbGFzc05hbWUgPSBzdGF0cy5mYWlsZWRUZXN0cyA/IFwicXVuaXQtZmFpbFwiIDogXCJxdW5pdC1wYXNzXCI7XG4gIFx0XHR9XG5cbiAgXHRcdGlmIChhYm9ydEJ1dHRvbikge1xuICBcdFx0XHRhYm9ydEJ1dHRvbi5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKGFib3J0QnV0dG9uKTtcbiAgXHRcdH1cblxuICBcdFx0aWYgKHRlc3RzKSB7XG4gIFx0XHRcdGlkKFwicXVuaXQtdGVzdHJlc3VsdC1kaXNwbGF5XCIpLmlubmVySFRNTCA9IGh0bWw7XG4gIFx0XHR9XG5cbiAgXHRcdGlmIChjb25maWcuYWx0ZXJ0aXRsZSAmJiBkb2N1bWVudC50aXRsZSkge1xuXG4gIFx0XHRcdC8vIFNob3cg4pyWIGZvciBnb29kLCDinJQgZm9yIGJhZCBzdWl0ZSByZXN1bHQgaW4gdGl0bGVcbiAgXHRcdFx0Ly8gdXNlIGVzY2FwZSBzZXF1ZW5jZXMgaW4gY2FzZSBmaWxlIGdldHMgbG9hZGVkIHdpdGggbm9uLXV0Zi04XG4gIFx0XHRcdC8vIGNoYXJzZXRcbiAgXHRcdFx0ZG9jdW1lbnQudGl0bGUgPSBbc3RhdHMuZmFpbGVkVGVzdHMgPyBcIlxcdTI3MTZcIiA6IFwiXFx1MjcxNFwiLCBkb2N1bWVudC50aXRsZS5yZXBsYWNlKC9eW1xcdTI3MTRcXHUyNzE2XSAvaSwgXCJcIildLmpvaW4oXCIgXCIpO1xuICBcdFx0fVxuXG4gIFx0XHQvLyBTY3JvbGwgYmFjayB0byB0b3AgdG8gc2hvdyByZXN1bHRzXG4gIFx0XHRpZiAoY29uZmlnLnNjcm9sbHRvcCAmJiB3aW5kb3ckMS5zY3JvbGxUbykge1xuICBcdFx0XHR3aW5kb3ckMS5zY3JvbGxUbygwLCAwKTtcbiAgXHRcdH1cbiAgXHR9KTtcblxuICBcdGZ1bmN0aW9uIGdldE5hbWVIdG1sKG5hbWUsIG1vZHVsZSkge1xuICBcdFx0dmFyIG5hbWVIdG1sID0gXCJcIjtcblxuICBcdFx0aWYgKG1vZHVsZSkge1xuICBcdFx0XHRuYW1lSHRtbCA9IFwiPHNwYW4gY2xhc3M9J21vZHVsZS1uYW1lJz5cIiArIGVzY2FwZVRleHQobW9kdWxlKSArIFwiPC9zcGFuPjogXCI7XG4gIFx0XHR9XG5cbiAgXHRcdG5hbWVIdG1sICs9IFwiPHNwYW4gY2xhc3M9J3Rlc3QtbmFtZSc+XCIgKyBlc2NhcGVUZXh0KG5hbWUpICsgXCI8L3NwYW4+XCI7XG5cbiAgXHRcdHJldHVybiBuYW1lSHRtbDtcbiAgXHR9XG5cbiAgXHRmdW5jdGlvbiBnZXRQcm9ncmVzc0h0bWwocnVudGltZSwgc3RhdHMsIHRvdGFsKSB7XG4gIFx0XHR2YXIgY29tcGxldGVkID0gc3RhdHMucGFzc2VkVGVzdHMgKyBzdGF0cy5za2lwcGVkVGVzdHMgKyBzdGF0cy50b2RvVGVzdHMgKyBzdGF0cy5mYWlsZWRUZXN0cztcblxuICBcdFx0cmV0dXJuIFtcIjxiciAvPlwiLCBjb21wbGV0ZWQsIFwiIC8gXCIsIHRvdGFsLCBcIiB0ZXN0cyBjb21wbGV0ZWQgaW4gXCIsIHJ1bnRpbWUsIFwiIG1pbGxpc2Vjb25kcywgd2l0aCBcIiwgc3RhdHMuZmFpbGVkVGVzdHMsIFwiIGZhaWxlZCwgXCIsIHN0YXRzLnNraXBwZWRUZXN0cywgXCIgc2tpcHBlZCwgYW5kIFwiLCBzdGF0cy50b2RvVGVzdHMsIFwiIHRvZG8uXCJdLmpvaW4oXCJcIik7XG4gIFx0fVxuXG4gIFx0UVVuaXQudGVzdFN0YXJ0KGZ1bmN0aW9uIChkZXRhaWxzKSB7XG4gIFx0XHR2YXIgcnVubmluZywgYmFkO1xuXG4gIFx0XHRhcHBlbmRUZXN0KGRldGFpbHMubmFtZSwgZGV0YWlscy50ZXN0SWQsIGRldGFpbHMubW9kdWxlKTtcblxuICBcdFx0cnVubmluZyA9IGlkKFwicXVuaXQtdGVzdHJlc3VsdC1kaXNwbGF5XCIpO1xuXG4gIFx0XHRpZiAocnVubmluZykge1xuICBcdFx0XHRhZGRDbGFzcyhydW5uaW5nLCBcInJ1bm5pbmdcIik7XG5cbiAgXHRcdFx0YmFkID0gUVVuaXQuY29uZmlnLnJlb3JkZXIgJiYgZGV0YWlscy5wcmV2aW91c0ZhaWx1cmU7XG5cbiAgXHRcdFx0cnVubmluZy5pbm5lckhUTUwgPSBbYmFkID8gXCJSZXJ1bm5pbmcgcHJldmlvdXNseSBmYWlsZWQgdGVzdDogPGJyIC8+XCIgOiBcIlJ1bm5pbmc6IDxiciAvPlwiLCBnZXROYW1lSHRtbChkZXRhaWxzLm5hbWUsIGRldGFpbHMubW9kdWxlKSwgZ2V0UHJvZ3Jlc3NIdG1sKG5vdygpIC0gY29uZmlnLnN0YXJ0ZWQsIHN0YXRzLCBUZXN0LmNvdW50KV0uam9pbihcIlwiKTtcbiAgXHRcdH1cbiAgXHR9KTtcblxuICBcdGZ1bmN0aW9uIHN0cmlwSHRtbChzdHJpbmcpIHtcblxuICBcdFx0Ly8gU3RyaXAgdGFncywgaHRtbCBlbnRpdHkgYW5kIHdoaXRlc3BhY2VzXG4gIFx0XHRyZXR1cm4gc3RyaW5nLnJlcGxhY2UoLzxcXC8/W14+XSsoPnwkKS9nLCBcIlwiKS5yZXBsYWNlKC8mcXVvdDsvZywgXCJcIikucmVwbGFjZSgvXFxzKy9nLCBcIlwiKTtcbiAgXHR9XG5cbiAgXHRRVW5pdC5sb2coZnVuY3Rpb24gKGRldGFpbHMpIHtcbiAgXHRcdHZhciBhc3NlcnRMaXN0LFxuICBcdFx0ICAgIGFzc2VydExpLFxuICBcdFx0ICAgIG1lc3NhZ2UsXG4gIFx0XHQgICAgZXhwZWN0ZWQsXG4gIFx0XHQgICAgYWN0dWFsLFxuICBcdFx0ICAgIGRpZmYkJDEsXG4gIFx0XHQgICAgc2hvd0RpZmYgPSBmYWxzZSxcbiAgXHRcdCAgICB0ZXN0SXRlbSA9IGlkKFwicXVuaXQtdGVzdC1vdXRwdXQtXCIgKyBkZXRhaWxzLnRlc3RJZCk7XG5cbiAgXHRcdGlmICghdGVzdEl0ZW0pIHtcbiAgXHRcdFx0cmV0dXJuO1xuICBcdFx0fVxuXG4gIFx0XHRtZXNzYWdlID0gZXNjYXBlVGV4dChkZXRhaWxzLm1lc3NhZ2UpIHx8IChkZXRhaWxzLnJlc3VsdCA/IFwib2theVwiIDogXCJmYWlsZWRcIik7XG4gIFx0XHRtZXNzYWdlID0gXCI8c3BhbiBjbGFzcz0ndGVzdC1tZXNzYWdlJz5cIiArIG1lc3NhZ2UgKyBcIjwvc3Bhbj5cIjtcbiAgXHRcdG1lc3NhZ2UgKz0gXCI8c3BhbiBjbGFzcz0ncnVudGltZSc+QCBcIiArIGRldGFpbHMucnVudGltZSArIFwiIG1zPC9zcGFuPlwiO1xuXG4gIFx0XHQvLyBUaGUgcHVzaEZhaWx1cmUgZG9lc24ndCBwcm92aWRlIGRldGFpbHMuZXhwZWN0ZWRcbiAgXHRcdC8vIHdoZW4gaXQgY2FsbHMsIGl0J3MgaW1wbGljaXQgdG8gYWxzbyBub3Qgc2hvdyBleHBlY3RlZCBhbmQgZGlmZiBzdHVmZlxuICBcdFx0Ly8gQWxzbywgd2UgbmVlZCB0byBjaGVjayBkZXRhaWxzLmV4cGVjdGVkIGV4aXN0ZW5jZSwgYXMgaXQgY2FuIGV4aXN0IGFuZCBiZSB1bmRlZmluZWRcbiAgXHRcdGlmICghZGV0YWlscy5yZXN1bHQgJiYgaGFzT3duJCQxLmNhbGwoZGV0YWlscywgXCJleHBlY3RlZFwiKSkge1xuICBcdFx0XHRpZiAoZGV0YWlscy5uZWdhdGl2ZSkge1xuICBcdFx0XHRcdGV4cGVjdGVkID0gXCJOT1QgXCIgKyBRVW5pdC5kdW1wLnBhcnNlKGRldGFpbHMuZXhwZWN0ZWQpO1xuICBcdFx0XHR9IGVsc2Uge1xuICBcdFx0XHRcdGV4cGVjdGVkID0gUVVuaXQuZHVtcC5wYXJzZShkZXRhaWxzLmV4cGVjdGVkKTtcbiAgXHRcdFx0fVxuXG4gIFx0XHRcdGFjdHVhbCA9IFFVbml0LmR1bXAucGFyc2UoZGV0YWlscy5hY3R1YWwpO1xuICBcdFx0XHRtZXNzYWdlICs9IFwiPHRhYmxlPjx0ciBjbGFzcz0ndGVzdC1leHBlY3RlZCc+PHRoPkV4cGVjdGVkOiA8L3RoPjx0ZD48cHJlPlwiICsgZXNjYXBlVGV4dChleHBlY3RlZCkgKyBcIjwvcHJlPjwvdGQ+PC90cj5cIjtcblxuICBcdFx0XHRpZiAoYWN0dWFsICE9PSBleHBlY3RlZCkge1xuXG4gIFx0XHRcdFx0bWVzc2FnZSArPSBcIjx0ciBjbGFzcz0ndGVzdC1hY3R1YWwnPjx0aD5SZXN1bHQ6IDwvdGg+PHRkPjxwcmU+XCIgKyBlc2NhcGVUZXh0KGFjdHVhbCkgKyBcIjwvcHJlPjwvdGQ+PC90cj5cIjtcblxuICBcdFx0XHRcdGlmICh0eXBlb2YgZGV0YWlscy5hY3R1YWwgPT09IFwibnVtYmVyXCIgJiYgdHlwZW9mIGRldGFpbHMuZXhwZWN0ZWQgPT09IFwibnVtYmVyXCIpIHtcbiAgXHRcdFx0XHRcdGlmICghaXNOYU4oZGV0YWlscy5hY3R1YWwpICYmICFpc05hTihkZXRhaWxzLmV4cGVjdGVkKSkge1xuICBcdFx0XHRcdFx0XHRzaG93RGlmZiA9IHRydWU7XG4gIFx0XHRcdFx0XHRcdGRpZmYkJDEgPSBkZXRhaWxzLmFjdHVhbCAtIGRldGFpbHMuZXhwZWN0ZWQ7XG4gIFx0XHRcdFx0XHRcdGRpZmYkJDEgPSAoZGlmZiQkMSA+IDAgPyBcIitcIiA6IFwiXCIpICsgZGlmZiQkMTtcbiAgXHRcdFx0XHRcdH1cbiAgXHRcdFx0XHR9IGVsc2UgaWYgKHR5cGVvZiBkZXRhaWxzLmFjdHVhbCAhPT0gXCJib29sZWFuXCIgJiYgdHlwZW9mIGRldGFpbHMuZXhwZWN0ZWQgIT09IFwiYm9vbGVhblwiKSB7XG4gIFx0XHRcdFx0XHRkaWZmJCQxID0gUVVuaXQuZGlmZihleHBlY3RlZCwgYWN0dWFsKTtcblxuICBcdFx0XHRcdFx0Ly8gZG9uJ3Qgc2hvdyBkaWZmIGlmIHRoZXJlIGlzIHplcm8gb3ZlcmxhcFxuICBcdFx0XHRcdFx0c2hvd0RpZmYgPSBzdHJpcEh0bWwoZGlmZiQkMSkubGVuZ3RoICE9PSBzdHJpcEh0bWwoZXhwZWN0ZWQpLmxlbmd0aCArIHN0cmlwSHRtbChhY3R1YWwpLmxlbmd0aDtcbiAgXHRcdFx0XHR9XG5cbiAgXHRcdFx0XHRpZiAoc2hvd0RpZmYpIHtcbiAgXHRcdFx0XHRcdG1lc3NhZ2UgKz0gXCI8dHIgY2xhc3M9J3Rlc3QtZGlmZic+PHRoPkRpZmY6IDwvdGg+PHRkPjxwcmU+XCIgKyBkaWZmJCQxICsgXCI8L3ByZT48L3RkPjwvdHI+XCI7XG4gIFx0XHRcdFx0fVxuICBcdFx0XHR9IGVsc2UgaWYgKGV4cGVjdGVkLmluZGV4T2YoXCJbb2JqZWN0IEFycmF5XVwiKSAhPT0gLTEgfHwgZXhwZWN0ZWQuaW5kZXhPZihcIltvYmplY3QgT2JqZWN0XVwiKSAhPT0gLTEpIHtcbiAgXHRcdFx0XHRtZXNzYWdlICs9IFwiPHRyIGNsYXNzPSd0ZXN0LW1lc3NhZ2UnPjx0aD5NZXNzYWdlOiA8L3RoPjx0ZD5cIiArIFwiRGlmZiBzdXBwcmVzc2VkIGFzIHRoZSBkZXB0aCBvZiBvYmplY3QgaXMgbW9yZSB0aGFuIGN1cnJlbnQgbWF4IGRlcHRoIChcIiArIFFVbml0LmNvbmZpZy5tYXhEZXB0aCArIFwiKS48cD5IaW50OiBVc2UgPGNvZGU+UVVuaXQuZHVtcC5tYXhEZXB0aDwvY29kZT4gdG8gXCIgKyBcIiBydW4gd2l0aCBhIGhpZ2hlciBtYXggZGVwdGggb3IgPGEgaHJlZj0nXCIgKyBlc2NhcGVUZXh0KHNldFVybCh7IG1heERlcHRoOiAtMSB9KSkgKyBcIic+XCIgKyBcIlJlcnVuPC9hPiB3aXRob3V0IG1heCBkZXB0aC48L3A+PC90ZD48L3RyPlwiO1xuICBcdFx0XHR9IGVsc2Uge1xuICBcdFx0XHRcdG1lc3NhZ2UgKz0gXCI8dHIgY2xhc3M9J3Rlc3QtbWVzc2FnZSc+PHRoPk1lc3NhZ2U6IDwvdGg+PHRkPlwiICsgXCJEaWZmIHN1cHByZXNzZWQgYXMgdGhlIGV4cGVjdGVkIGFuZCBhY3R1YWwgcmVzdWx0cyBoYXZlIGFuIGVxdWl2YWxlbnRcIiArIFwiIHNlcmlhbGl6YXRpb248L3RkPjwvdHI+XCI7XG4gIFx0XHRcdH1cblxuICBcdFx0XHRpZiAoZGV0YWlscy5zb3VyY2UpIHtcbiAgXHRcdFx0XHRtZXNzYWdlICs9IFwiPHRyIGNsYXNzPSd0ZXN0LXNvdXJjZSc+PHRoPlNvdXJjZTogPC90aD48dGQ+PHByZT5cIiArIGVzY2FwZVRleHQoZGV0YWlscy5zb3VyY2UpICsgXCI8L3ByZT48L3RkPjwvdHI+XCI7XG4gIFx0XHRcdH1cblxuICBcdFx0XHRtZXNzYWdlICs9IFwiPC90YWJsZT5cIjtcblxuICBcdFx0XHQvLyBUaGlzIG9jY3VycyB3aGVuIHB1c2hGYWlsdXJlIGlzIHNldCBhbmQgd2UgaGF2ZSBhbiBleHRyYWN0ZWQgc3RhY2sgdHJhY2VcbiAgXHRcdH0gZWxzZSBpZiAoIWRldGFpbHMucmVzdWx0ICYmIGRldGFpbHMuc291cmNlKSB7XG4gIFx0XHRcdG1lc3NhZ2UgKz0gXCI8dGFibGU+XCIgKyBcIjx0ciBjbGFzcz0ndGVzdC1zb3VyY2UnPjx0aD5Tb3VyY2U6IDwvdGg+PHRkPjxwcmU+XCIgKyBlc2NhcGVUZXh0KGRldGFpbHMuc291cmNlKSArIFwiPC9wcmU+PC90ZD48L3RyPlwiICsgXCI8L3RhYmxlPlwiO1xuICBcdFx0fVxuXG4gIFx0XHRhc3NlcnRMaXN0ID0gdGVzdEl0ZW0uZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJvbFwiKVswXTtcblxuICBcdFx0YXNzZXJ0TGkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XG4gIFx0XHRhc3NlcnRMaS5jbGFzc05hbWUgPSBkZXRhaWxzLnJlc3VsdCA/IFwicGFzc1wiIDogXCJmYWlsXCI7XG4gIFx0XHRhc3NlcnRMaS5pbm5lckhUTUwgPSBtZXNzYWdlO1xuICBcdFx0YXNzZXJ0TGlzdC5hcHBlbmRDaGlsZChhc3NlcnRMaSk7XG4gIFx0fSk7XG5cbiAgXHRRVW5pdC50ZXN0RG9uZShmdW5jdGlvbiAoZGV0YWlscykge1xuICBcdFx0dmFyIHRlc3RUaXRsZSxcbiAgXHRcdCAgICB0aW1lLFxuICBcdFx0ICAgIHRlc3RJdGVtLFxuICBcdFx0ICAgIGFzc2VydExpc3QsXG4gIFx0XHQgICAgc3RhdHVzLFxuICBcdFx0ICAgIGdvb2QsXG4gIFx0XHQgICAgYmFkLFxuICBcdFx0ICAgIHRlc3RDb3VudHMsXG4gIFx0XHQgICAgc2tpcHBlZCxcbiAgXHRcdCAgICBzb3VyY2VOYW1lLFxuICBcdFx0ICAgIHRlc3RzID0gaWQoXCJxdW5pdC10ZXN0c1wiKTtcblxuICBcdFx0aWYgKCF0ZXN0cykge1xuICBcdFx0XHRyZXR1cm47XG4gIFx0XHR9XG5cbiAgXHRcdHRlc3RJdGVtID0gaWQoXCJxdW5pdC10ZXN0LW91dHB1dC1cIiArIGRldGFpbHMudGVzdElkKTtcblxuICBcdFx0cmVtb3ZlQ2xhc3ModGVzdEl0ZW0sIFwicnVubmluZ1wiKTtcblxuICBcdFx0aWYgKGRldGFpbHMuZmFpbGVkID4gMCkge1xuICBcdFx0XHRzdGF0dXMgPSBcImZhaWxlZFwiO1xuICBcdFx0fSBlbHNlIGlmIChkZXRhaWxzLnRvZG8pIHtcbiAgXHRcdFx0c3RhdHVzID0gXCJ0b2RvXCI7XG4gIFx0XHR9IGVsc2Uge1xuICBcdFx0XHRzdGF0dXMgPSBkZXRhaWxzLnNraXBwZWQgPyBcInNraXBwZWRcIiA6IFwicGFzc2VkXCI7XG4gIFx0XHR9XG5cbiAgXHRcdGFzc2VydExpc3QgPSB0ZXN0SXRlbS5nZXRFbGVtZW50c0J5VGFnTmFtZShcIm9sXCIpWzBdO1xuXG4gIFx0XHRnb29kID0gZGV0YWlscy5wYXNzZWQ7XG4gIFx0XHRiYWQgPSBkZXRhaWxzLmZhaWxlZDtcblxuICBcdFx0Ly8gVGhpcyB0ZXN0IHBhc3NlZCBpZiBpdCBoYXMgbm8gdW5leHBlY3RlZCBmYWlsZWQgYXNzZXJ0aW9uc1xuICBcdFx0dmFyIHRlc3RQYXNzZWQgPSBkZXRhaWxzLmZhaWxlZCA+IDAgPyBkZXRhaWxzLnRvZG8gOiAhZGV0YWlscy50b2RvO1xuXG4gIFx0XHRpZiAodGVzdFBhc3NlZCkge1xuXG4gIFx0XHRcdC8vIENvbGxhcHNlIHRoZSBwYXNzaW5nIHRlc3RzXG4gIFx0XHRcdGFkZENsYXNzKGFzc2VydExpc3QsIFwicXVuaXQtY29sbGFwc2VkXCIpO1xuICBcdFx0fSBlbHNlIGlmIChjb25maWcuY29sbGFwc2UpIHtcbiAgXHRcdFx0aWYgKCFjb2xsYXBzZU5leHQpIHtcblxuICBcdFx0XHRcdC8vIFNraXAgY29sbGFwc2luZyB0aGUgZmlyc3QgZmFpbGluZyB0ZXN0XG4gIFx0XHRcdFx0Y29sbGFwc2VOZXh0ID0gdHJ1ZTtcbiAgXHRcdFx0fSBlbHNlIHtcblxuICBcdFx0XHRcdC8vIENvbGxhcHNlIHJlbWFpbmluZyB0ZXN0c1xuICBcdFx0XHRcdGFkZENsYXNzKGFzc2VydExpc3QsIFwicXVuaXQtY29sbGFwc2VkXCIpO1xuICBcdFx0XHR9XG4gIFx0XHR9XG5cbiAgXHRcdC8vIFRoZSB0ZXN0SXRlbS5maXJzdENoaWxkIGlzIHRoZSB0ZXN0IG5hbWVcbiAgXHRcdHRlc3RUaXRsZSA9IHRlc3RJdGVtLmZpcnN0Q2hpbGQ7XG5cbiAgXHRcdHRlc3RDb3VudHMgPSBiYWQgPyBcIjxiIGNsYXNzPSdmYWlsZWQnPlwiICsgYmFkICsgXCI8L2I+LCBcIiArIFwiPGIgY2xhc3M9J3Bhc3NlZCc+XCIgKyBnb29kICsgXCI8L2I+LCBcIiA6IFwiXCI7XG5cbiAgXHRcdHRlc3RUaXRsZS5pbm5lckhUTUwgKz0gXCIgPGIgY2xhc3M9J2NvdW50cyc+KFwiICsgdGVzdENvdW50cyArIGRldGFpbHMuYXNzZXJ0aW9ucy5sZW5ndGggKyBcIik8L2I+XCI7XG5cbiAgXHRcdGlmIChkZXRhaWxzLnNraXBwZWQpIHtcbiAgXHRcdFx0c3RhdHMuc2tpcHBlZFRlc3RzKys7XG5cbiAgXHRcdFx0dGVzdEl0ZW0uY2xhc3NOYW1lID0gXCJza2lwcGVkXCI7XG4gIFx0XHRcdHNraXBwZWQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZW1cIik7XG4gIFx0XHRcdHNraXBwZWQuY2xhc3NOYW1lID0gXCJxdW5pdC1za2lwcGVkLWxhYmVsXCI7XG4gIFx0XHRcdHNraXBwZWQuaW5uZXJIVE1MID0gXCJza2lwcGVkXCI7XG4gIFx0XHRcdHRlc3RJdGVtLmluc2VydEJlZm9yZShza2lwcGVkLCB0ZXN0VGl0bGUpO1xuICBcdFx0fSBlbHNlIHtcbiAgXHRcdFx0YWRkRXZlbnQodGVzdFRpdGxlLCBcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcbiAgXHRcdFx0XHR0b2dnbGVDbGFzcyhhc3NlcnRMaXN0LCBcInF1bml0LWNvbGxhcHNlZFwiKTtcbiAgXHRcdFx0fSk7XG5cbiAgXHRcdFx0dGVzdEl0ZW0uY2xhc3NOYW1lID0gdGVzdFBhc3NlZCA/IFwicGFzc1wiIDogXCJmYWlsXCI7XG5cbiAgXHRcdFx0aWYgKGRldGFpbHMudG9kbykge1xuICBcdFx0XHRcdHZhciB0b2RvTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZW1cIik7XG4gIFx0XHRcdFx0dG9kb0xhYmVsLmNsYXNzTmFtZSA9IFwicXVuaXQtdG9kby1sYWJlbFwiO1xuICBcdFx0XHRcdHRvZG9MYWJlbC5pbm5lckhUTUwgPSBcInRvZG9cIjtcbiAgXHRcdFx0XHR0ZXN0SXRlbS5jbGFzc05hbWUgKz0gXCIgdG9kb1wiO1xuICBcdFx0XHRcdHRlc3RJdGVtLmluc2VydEJlZm9yZSh0b2RvTGFiZWwsIHRlc3RUaXRsZSk7XG4gIFx0XHRcdH1cblxuICBcdFx0XHR0aW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XG4gIFx0XHRcdHRpbWUuY2xhc3NOYW1lID0gXCJydW50aW1lXCI7XG4gIFx0XHRcdHRpbWUuaW5uZXJIVE1MID0gZGV0YWlscy5ydW50aW1lICsgXCIgbXNcIjtcbiAgXHRcdFx0dGVzdEl0ZW0uaW5zZXJ0QmVmb3JlKHRpbWUsIGFzc2VydExpc3QpO1xuXG4gIFx0XHRcdGlmICghdGVzdFBhc3NlZCkge1xuICBcdFx0XHRcdHN0YXRzLmZhaWxlZFRlc3RzKys7XG4gIFx0XHRcdH0gZWxzZSBpZiAoZGV0YWlscy50b2RvKSB7XG4gIFx0XHRcdFx0c3RhdHMudG9kb1Rlc3RzKys7XG4gIFx0XHRcdH0gZWxzZSB7XG4gIFx0XHRcdFx0c3RhdHMucGFzc2VkVGVzdHMrKztcbiAgXHRcdFx0fVxuICBcdFx0fVxuXG4gIFx0XHQvLyBTaG93IHRoZSBzb3VyY2Ugb2YgdGhlIHRlc3Qgd2hlbiBzaG93aW5nIGFzc2VydGlvbnNcbiAgXHRcdGlmIChkZXRhaWxzLnNvdXJjZSkge1xuICBcdFx0XHRzb3VyY2VOYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gIFx0XHRcdHNvdXJjZU5hbWUuaW5uZXJIVE1MID0gXCI8c3Ryb25nPlNvdXJjZTogPC9zdHJvbmc+XCIgKyBlc2NhcGVUZXh0KGRldGFpbHMuc291cmNlKTtcbiAgXHRcdFx0YWRkQ2xhc3Moc291cmNlTmFtZSwgXCJxdW5pdC1zb3VyY2VcIik7XG4gIFx0XHRcdGlmICh0ZXN0UGFzc2VkKSB7XG4gIFx0XHRcdFx0YWRkQ2xhc3Moc291cmNlTmFtZSwgXCJxdW5pdC1jb2xsYXBzZWRcIik7XG4gIFx0XHRcdH1cbiAgXHRcdFx0YWRkRXZlbnQodGVzdFRpdGxlLCBcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcbiAgXHRcdFx0XHR0b2dnbGVDbGFzcyhzb3VyY2VOYW1lLCBcInF1bml0LWNvbGxhcHNlZFwiKTtcbiAgXHRcdFx0fSk7XG4gIFx0XHRcdHRlc3RJdGVtLmFwcGVuZENoaWxkKHNvdXJjZU5hbWUpO1xuICBcdFx0fVxuXG4gIFx0XHRpZiAoY29uZmlnLmhpZGVwYXNzZWQgJiYgc3RhdHVzID09PSBcInBhc3NlZFwiKSB7XG5cbiAgXHRcdFx0Ly8gdXNlIHJlbW92ZUNoaWxkIGluc3RlYWQgb2YgcmVtb3ZlIGJlY2F1c2Ugb2Ygc3VwcG9ydFxuICBcdFx0XHRoaWRkZW5UZXN0cy5wdXNoKHRlc3RJdGVtKTtcblxuICBcdFx0XHR0ZXN0cy5yZW1vdmVDaGlsZCh0ZXN0SXRlbSk7XG4gIFx0XHR9XG4gIFx0fSk7XG5cbiAgXHQvLyBBdm9pZCByZWFkeVN0YXRlIGlzc3VlIHdpdGggcGhhbnRvbWpzXG4gIFx0Ly8gUmVmOiAjODE4XG4gIFx0dmFyIG5vdFBoYW50b20gPSBmdW5jdGlvbiAocCkge1xuICBcdFx0cmV0dXJuICEocCAmJiBwLnZlcnNpb24gJiYgcC52ZXJzaW9uLm1ham9yID4gMCk7XG4gIFx0fSh3aW5kb3ckMS5waGFudG9tKTtcblxuICBcdGlmIChub3RQaGFudG9tICYmIGRvY3VtZW50LnJlYWR5U3RhdGUgPT09IFwiY29tcGxldGVcIikge1xuICBcdFx0UVVuaXQubG9hZCgpO1xuICBcdH0gZWxzZSB7XG4gIFx0XHRhZGRFdmVudCh3aW5kb3ckMSwgXCJsb2FkXCIsIFFVbml0LmxvYWQpO1xuICBcdH1cblxuICBcdC8vIFdyYXAgd2luZG93Lm9uZXJyb3IuIFdlIHdpbGwgY2FsbCB0aGUgb3JpZ2luYWwgd2luZG93Lm9uZXJyb3IgdG8gc2VlIGlmXG4gIFx0Ly8gdGhlIGV4aXN0aW5nIGhhbmRsZXIgZnVsbHkgaGFuZGxlcyB0aGUgZXJyb3I7IGlmIG5vdCwgd2Ugd2lsbCBjYWxsIHRoZVxuICBcdC8vIFFVbml0Lm9uRXJyb3IgZnVuY3Rpb24uXG4gIFx0dmFyIG9yaWdpbmFsV2luZG93T25FcnJvciA9IHdpbmRvdyQxLm9uZXJyb3I7XG5cbiAgXHQvLyBDb3ZlciB1bmNhdWdodCBleGNlcHRpb25zXG4gIFx0Ly8gUmV0dXJuaW5nIHRydWUgd2lsbCBzdXBwcmVzcyB0aGUgZGVmYXVsdCBicm93c2VyIGhhbmRsZXIsXG4gIFx0Ly8gcmV0dXJuaW5nIGZhbHNlIHdpbGwgbGV0IGl0IHJ1bi5cbiAgXHR3aW5kb3ckMS5vbmVycm9yID0gZnVuY3Rpb24gKG1lc3NhZ2UsIGZpbGVOYW1lLCBsaW5lTnVtYmVyLCBjb2x1bW5OdW1iZXIsIGVycm9yT2JqKSB7XG4gIFx0XHR2YXIgcmV0ID0gZmFsc2U7XG4gIFx0XHRpZiAob3JpZ2luYWxXaW5kb3dPbkVycm9yKSB7XG4gIFx0XHRcdGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gQXJyYXkoX2xlbiA+IDUgPyBfbGVuIC0gNSA6IDApLCBfa2V5ID0gNTsgX2tleSA8IF9sZW47IF9rZXkrKykge1xuICBcdFx0XHRcdGFyZ3NbX2tleSAtIDVdID0gYXJndW1lbnRzW19rZXldO1xuICBcdFx0XHR9XG5cbiAgXHRcdFx0cmV0ID0gb3JpZ2luYWxXaW5kb3dPbkVycm9yLmNhbGwuYXBwbHkob3JpZ2luYWxXaW5kb3dPbkVycm9yLCBbdGhpcywgbWVzc2FnZSwgZmlsZU5hbWUsIGxpbmVOdW1iZXIsIGNvbHVtbk51bWJlciwgZXJyb3JPYmpdLmNvbmNhdChhcmdzKSk7XG4gIFx0XHR9XG5cbiAgXHRcdC8vIFRyZWF0IHJldHVybiB2YWx1ZSBhcyB3aW5kb3cub25lcnJvciBpdHNlbGYgZG9lcyxcbiAgXHRcdC8vIE9ubHkgZG8gb3VyIGhhbmRsaW5nIGlmIG5vdCBzdXBwcmVzc2VkLlxuICBcdFx0aWYgKHJldCAhPT0gdHJ1ZSkge1xuICBcdFx0XHR2YXIgZXJyb3IgPSB7XG4gIFx0XHRcdFx0bWVzc2FnZTogbWVzc2FnZSxcbiAgXHRcdFx0XHRmaWxlTmFtZTogZmlsZU5hbWUsXG4gIFx0XHRcdFx0bGluZU51bWJlcjogbGluZU51bWJlclxuICBcdFx0XHR9O1xuXG4gIFx0XHRcdC8vIEFjY29yZGluZyB0b1xuICBcdFx0XHQvLyBodHRwczovL2Jsb2cuc2VudHJ5LmlvLzIwMTYvMDEvMDQvY2xpZW50LWphdmFzY3JpcHQtcmVwb3J0aW5nLXdpbmRvdy1vbmVycm9yLFxuICBcdFx0XHQvLyBtb3N0IG1vZGVybiBicm93c2VycyBzdXBwb3J0IGFuIGVycm9yT2JqIGFyZ3VtZW50OyB1c2UgdGhhdCB0b1xuICBcdFx0XHQvLyBnZXQgYSBmdWxsIHN0YWNrIHRyYWNlIGlmIGl0J3MgYXZhaWxhYmxlLlxuICBcdFx0XHRpZiAoZXJyb3JPYmogJiYgZXJyb3JPYmouc3RhY2spIHtcbiAgXHRcdFx0XHRlcnJvci5zdGFja3RyYWNlID0gZXh0cmFjdFN0YWNrdHJhY2UoZXJyb3JPYmosIDApO1xuICBcdFx0XHR9XG5cbiAgXHRcdFx0cmV0ID0gUVVuaXQub25FcnJvcihlcnJvcik7XG4gIFx0XHR9XG5cbiAgXHRcdHJldHVybiByZXQ7XG4gIFx0fTtcblxuICBcdC8vIExpc3RlbiBmb3IgdW5oYW5kbGVkIHJlamVjdGlvbnMsIGFuZCBjYWxsIFFVbml0Lm9uVW5oYW5kbGVkUmVqZWN0aW9uXG4gIFx0d2luZG93JDEuYWRkRXZlbnRMaXN0ZW5lcihcInVuaGFuZGxlZHJlamVjdGlvblwiLCBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgXHRcdFFVbml0Lm9uVW5oYW5kbGVkUmVqZWN0aW9uKGV2ZW50LnJlYXNvbik7XG4gIFx0fSk7XG4gIH0pKCk7XG5cbiAgLypcbiAgICogVGhpcyBmaWxlIGlzIGEgbW9kaWZpZWQgdmVyc2lvbiBvZiBnb29nbGUtZGlmZi1tYXRjaC1wYXRjaCdzIEphdmFTY3JpcHQgaW1wbGVtZW50YXRpb25cbiAgICogKGh0dHBzOi8vY29kZS5nb29nbGUuY29tL3AvZ29vZ2xlLWRpZmYtbWF0Y2gtcGF0Y2gvc291cmNlL2Jyb3dzZS90cnVuay9qYXZhc2NyaXB0L2RpZmZfbWF0Y2hfcGF0Y2hfdW5jb21wcmVzc2VkLmpzKSxcbiAgICogbW9kaWZpY2F0aW9ucyBhcmUgbGljZW5zZWQgYXMgbW9yZSBmdWxseSBzZXQgZm9ydGggaW4gTElDRU5TRS50eHQuXG4gICAqXG4gICAqIFRoZSBvcmlnaW5hbCBzb3VyY2Ugb2YgZ29vZ2xlLWRpZmYtbWF0Y2gtcGF0Y2ggaXMgYXR0cmlidXRhYmxlIGFuZCBsaWNlbnNlZCBhcyBmb2xsb3dzOlxuICAgKlxuICAgKiBDb3B5cmlnaHQgMjAwNiBHb29nbGUgSW5jLlxuICAgKiBodHRwczovL2NvZGUuZ29vZ2xlLmNvbS9wL2dvb2dsZS1kaWZmLW1hdGNoLXBhdGNoL1xuICAgKlxuICAgKiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xuICAgKiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXG4gICAqIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxuICAgKlxuICAgKiBodHRwczovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG4gICAqXG4gICAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcbiAgICogZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxuICAgKiBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cbiAgICogU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxuICAgKiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cbiAgICpcbiAgICogTW9yZSBJbmZvOlxuICAgKiAgaHR0cHM6Ly9jb2RlLmdvb2dsZS5jb20vcC9nb29nbGUtZGlmZi1tYXRjaC1wYXRjaC9cbiAgICpcbiAgICogVXNhZ2U6IFFVbml0LmRpZmYoZXhwZWN0ZWQsIGFjdHVhbClcbiAgICpcbiAgICovXG4gIFFVbml0LmRpZmYgPSBmdW5jdGlvbiAoKSB7XG4gIFx0ZnVuY3Rpb24gRGlmZk1hdGNoUGF0Y2goKSB7fVxuXG4gIFx0Ly8gIERJRkYgRlVOQ1RJT05TXG5cbiAgXHQvKipcbiAgICAqIFRoZSBkYXRhIHN0cnVjdHVyZSByZXByZXNlbnRpbmcgYSBkaWZmIGlzIGFuIGFycmF5IG9mIHR1cGxlczpcbiAgICAqIFtbRElGRl9ERUxFVEUsICdIZWxsbyddLCBbRElGRl9JTlNFUlQsICdHb29kYnllJ10sIFtESUZGX0VRVUFMLCAnIHdvcmxkLiddXVxuICAgICogd2hpY2ggbWVhbnM6IGRlbGV0ZSAnSGVsbG8nLCBhZGQgJ0dvb2RieWUnIGFuZCBrZWVwICcgd29ybGQuJ1xuICAgICovXG4gIFx0dmFyIERJRkZfREVMRVRFID0gLTEsXG4gIFx0ICAgIERJRkZfSU5TRVJUID0gMSxcbiAgXHQgICAgRElGRl9FUVVBTCA9IDA7XG5cbiAgXHQvKipcbiAgICAqIEZpbmQgdGhlIGRpZmZlcmVuY2VzIGJldHdlZW4gdHdvIHRleHRzLiAgU2ltcGxpZmllcyB0aGUgcHJvYmxlbSBieSBzdHJpcHBpbmdcbiAgICAqIGFueSBjb21tb24gcHJlZml4IG9yIHN1ZmZpeCBvZmYgdGhlIHRleHRzIGJlZm9yZSBkaWZmaW5nLlxuICAgICogQHBhcmFtIHtzdHJpbmd9IHRleHQxIE9sZCBzdHJpbmcgdG8gYmUgZGlmZmVkLlxuICAgICogQHBhcmFtIHtzdHJpbmd9IHRleHQyIE5ldyBzdHJpbmcgdG8gYmUgZGlmZmVkLlxuICAgICogQHBhcmFtIHtib29sZWFuPX0gb3B0Q2hlY2tsaW5lcyBPcHRpb25hbCBzcGVlZHVwIGZsYWcuIElmIHByZXNlbnQgYW5kIGZhbHNlLFxuICAgICogICAgIHRoZW4gZG9uJ3QgcnVuIGEgbGluZS1sZXZlbCBkaWZmIGZpcnN0IHRvIGlkZW50aWZ5IHRoZSBjaGFuZ2VkIGFyZWFzLlxuICAgICogICAgIERlZmF1bHRzIHRvIHRydWUsIHdoaWNoIGRvZXMgYSBmYXN0ZXIsIHNsaWdodGx5IGxlc3Mgb3B0aW1hbCBkaWZmLlxuICAgICogQHJldHVybiB7IUFycmF5LjwhRGlmZk1hdGNoUGF0Y2guRGlmZj59IEFycmF5IG9mIGRpZmYgdHVwbGVzLlxuICAgICovXG4gIFx0RGlmZk1hdGNoUGF0Y2gucHJvdG90eXBlLkRpZmZNYWluID0gZnVuY3Rpb24gKHRleHQxLCB0ZXh0Miwgb3B0Q2hlY2tsaW5lcykge1xuICBcdFx0dmFyIGRlYWRsaW5lLCBjaGVja2xpbmVzLCBjb21tb25sZW5ndGgsIGNvbW1vbnByZWZpeCwgY29tbW9uc3VmZml4LCBkaWZmcztcblxuICBcdFx0Ly8gVGhlIGRpZmYgbXVzdCBiZSBjb21wbGV0ZSBpbiB1cCB0byAxIHNlY29uZC5cbiAgXHRcdGRlYWRsaW5lID0gbmV3IERhdGUoKS5nZXRUaW1lKCkgKyAxMDAwO1xuXG4gIFx0XHQvLyBDaGVjayBmb3IgbnVsbCBpbnB1dHMuXG4gIFx0XHRpZiAodGV4dDEgPT09IG51bGwgfHwgdGV4dDIgPT09IG51bGwpIHtcbiAgXHRcdFx0dGhyb3cgbmV3IEVycm9yKFwiTnVsbCBpbnB1dC4gKERpZmZNYWluKVwiKTtcbiAgXHRcdH1cblxuICBcdFx0Ly8gQ2hlY2sgZm9yIGVxdWFsaXR5IChzcGVlZHVwKS5cbiAgXHRcdGlmICh0ZXh0MSA9PT0gdGV4dDIpIHtcbiAgXHRcdFx0aWYgKHRleHQxKSB7XG4gIFx0XHRcdFx0cmV0dXJuIFtbRElGRl9FUVVBTCwgdGV4dDFdXTtcbiAgXHRcdFx0fVxuICBcdFx0XHRyZXR1cm4gW107XG4gIFx0XHR9XG5cbiAgXHRcdGlmICh0eXBlb2Ygb3B0Q2hlY2tsaW5lcyA9PT0gXCJ1bmRlZmluZWRcIikge1xuICBcdFx0XHRvcHRDaGVja2xpbmVzID0gdHJ1ZTtcbiAgXHRcdH1cblxuICBcdFx0Y2hlY2tsaW5lcyA9IG9wdENoZWNrbGluZXM7XG5cbiAgXHRcdC8vIFRyaW0gb2ZmIGNvbW1vbiBwcmVmaXggKHNwZWVkdXApLlxuICBcdFx0Y29tbW9ubGVuZ3RoID0gdGhpcy5kaWZmQ29tbW9uUHJlZml4KHRleHQxLCB0ZXh0Mik7XG4gIFx0XHRjb21tb25wcmVmaXggPSB0ZXh0MS5zdWJzdHJpbmcoMCwgY29tbW9ubGVuZ3RoKTtcbiAgXHRcdHRleHQxID0gdGV4dDEuc3Vic3RyaW5nKGNvbW1vbmxlbmd0aCk7XG4gIFx0XHR0ZXh0MiA9IHRleHQyLnN1YnN0cmluZyhjb21tb25sZW5ndGgpO1xuXG4gIFx0XHQvLyBUcmltIG9mZiBjb21tb24gc3VmZml4IChzcGVlZHVwKS5cbiAgXHRcdGNvbW1vbmxlbmd0aCA9IHRoaXMuZGlmZkNvbW1vblN1ZmZpeCh0ZXh0MSwgdGV4dDIpO1xuICBcdFx0Y29tbW9uc3VmZml4ID0gdGV4dDEuc3Vic3RyaW5nKHRleHQxLmxlbmd0aCAtIGNvbW1vbmxlbmd0aCk7XG4gIFx0XHR0ZXh0MSA9IHRleHQxLnN1YnN0cmluZygwLCB0ZXh0MS5sZW5ndGggLSBjb21tb25sZW5ndGgpO1xuICBcdFx0dGV4dDIgPSB0ZXh0Mi5zdWJzdHJpbmcoMCwgdGV4dDIubGVuZ3RoIC0gY29tbW9ubGVuZ3RoKTtcblxuICBcdFx0Ly8gQ29tcHV0ZSB0aGUgZGlmZiBvbiB0aGUgbWlkZGxlIGJsb2NrLlxuICBcdFx0ZGlmZnMgPSB0aGlzLmRpZmZDb21wdXRlKHRleHQxLCB0ZXh0MiwgY2hlY2tsaW5lcywgZGVhZGxpbmUpO1xuXG4gIFx0XHQvLyBSZXN0b3JlIHRoZSBwcmVmaXggYW5kIHN1ZmZpeC5cbiAgXHRcdGlmIChjb21tb25wcmVmaXgpIHtcbiAgXHRcdFx0ZGlmZnMudW5zaGlmdChbRElGRl9FUVVBTCwgY29tbW9ucHJlZml4XSk7XG4gIFx0XHR9XG4gIFx0XHRpZiAoY29tbW9uc3VmZml4KSB7XG4gIFx0XHRcdGRpZmZzLnB1c2goW0RJRkZfRVFVQUwsIGNvbW1vbnN1ZmZpeF0pO1xuICBcdFx0fVxuICBcdFx0dGhpcy5kaWZmQ2xlYW51cE1lcmdlKGRpZmZzKTtcbiAgXHRcdHJldHVybiBkaWZmcztcbiAgXHR9O1xuXG4gIFx0LyoqXG4gICAgKiBSZWR1Y2UgdGhlIG51bWJlciBvZiBlZGl0cyBieSBlbGltaW5hdGluZyBvcGVyYXRpb25hbGx5IHRyaXZpYWwgZXF1YWxpdGllcy5cbiAgICAqIEBwYXJhbSB7IUFycmF5LjwhRGlmZk1hdGNoUGF0Y2guRGlmZj59IGRpZmZzIEFycmF5IG9mIGRpZmYgdHVwbGVzLlxuICAgICovXG4gIFx0RGlmZk1hdGNoUGF0Y2gucHJvdG90eXBlLmRpZmZDbGVhbnVwRWZmaWNpZW5jeSA9IGZ1bmN0aW9uIChkaWZmcykge1xuICBcdFx0dmFyIGNoYW5nZXMsIGVxdWFsaXRpZXMsIGVxdWFsaXRpZXNMZW5ndGgsIGxhc3RlcXVhbGl0eSwgcG9pbnRlciwgcHJlSW5zLCBwcmVEZWwsIHBvc3RJbnMsIHBvc3REZWw7XG4gIFx0XHRjaGFuZ2VzID0gZmFsc2U7XG4gIFx0XHRlcXVhbGl0aWVzID0gW107IC8vIFN0YWNrIG9mIGluZGljZXMgd2hlcmUgZXF1YWxpdGllcyBhcmUgZm91bmQuXG4gIFx0XHRlcXVhbGl0aWVzTGVuZ3RoID0gMDsgLy8gS2VlcGluZyBvdXIgb3duIGxlbmd0aCB2YXIgaXMgZmFzdGVyIGluIEpTLlxuICBcdFx0LyoqIEB0eXBlIHs/c3RyaW5nfSAqL1xuICBcdFx0bGFzdGVxdWFsaXR5ID0gbnVsbDtcblxuICBcdFx0Ly8gQWx3YXlzIGVxdWFsIHRvIGRpZmZzW2VxdWFsaXRpZXNbZXF1YWxpdGllc0xlbmd0aCAtIDFdXVsxXVxuICBcdFx0cG9pbnRlciA9IDA7IC8vIEluZGV4IG9mIGN1cnJlbnQgcG9zaXRpb24uXG5cbiAgXHRcdC8vIElzIHRoZXJlIGFuIGluc2VydGlvbiBvcGVyYXRpb24gYmVmb3JlIHRoZSBsYXN0IGVxdWFsaXR5LlxuICBcdFx0cHJlSW5zID0gZmFsc2U7XG5cbiAgXHRcdC8vIElzIHRoZXJlIGEgZGVsZXRpb24gb3BlcmF0aW9uIGJlZm9yZSB0aGUgbGFzdCBlcXVhbGl0eS5cbiAgXHRcdHByZURlbCA9IGZhbHNlO1xuXG4gIFx0XHQvLyBJcyB0aGVyZSBhbiBpbnNlcnRpb24gb3BlcmF0aW9uIGFmdGVyIHRoZSBsYXN0IGVxdWFsaXR5LlxuICBcdFx0cG9zdElucyA9IGZhbHNlO1xuXG4gIFx0XHQvLyBJcyB0aGVyZSBhIGRlbGV0aW9uIG9wZXJhdGlvbiBhZnRlciB0aGUgbGFzdCBlcXVhbGl0eS5cbiAgXHRcdHBvc3REZWwgPSBmYWxzZTtcbiAgXHRcdHdoaWxlIChwb2ludGVyIDwgZGlmZnMubGVuZ3RoKSB7XG5cbiAgXHRcdFx0Ly8gRXF1YWxpdHkgZm91bmQuXG4gIFx0XHRcdGlmIChkaWZmc1twb2ludGVyXVswXSA9PT0gRElGRl9FUVVBTCkge1xuICBcdFx0XHRcdGlmIChkaWZmc1twb2ludGVyXVsxXS5sZW5ndGggPCA0ICYmIChwb3N0SW5zIHx8IHBvc3REZWwpKSB7XG5cbiAgXHRcdFx0XHRcdC8vIENhbmRpZGF0ZSBmb3VuZC5cbiAgXHRcdFx0XHRcdGVxdWFsaXRpZXNbZXF1YWxpdGllc0xlbmd0aCsrXSA9IHBvaW50ZXI7XG4gIFx0XHRcdFx0XHRwcmVJbnMgPSBwb3N0SW5zO1xuICBcdFx0XHRcdFx0cHJlRGVsID0gcG9zdERlbDtcbiAgXHRcdFx0XHRcdGxhc3RlcXVhbGl0eSA9IGRpZmZzW3BvaW50ZXJdWzFdO1xuICBcdFx0XHRcdH0gZWxzZSB7XG5cbiAgXHRcdFx0XHRcdC8vIE5vdCBhIGNhbmRpZGF0ZSwgYW5kIGNhbiBuZXZlciBiZWNvbWUgb25lLlxuICBcdFx0XHRcdFx0ZXF1YWxpdGllc0xlbmd0aCA9IDA7XG4gIFx0XHRcdFx0XHRsYXN0ZXF1YWxpdHkgPSBudWxsO1xuICBcdFx0XHRcdH1cbiAgXHRcdFx0XHRwb3N0SW5zID0gcG9zdERlbCA9IGZhbHNlO1xuXG4gIFx0XHRcdFx0Ly8gQW4gaW5zZXJ0aW9uIG9yIGRlbGV0aW9uLlxuICBcdFx0XHR9IGVsc2Uge1xuXG4gIFx0XHRcdFx0aWYgKGRpZmZzW3BvaW50ZXJdWzBdID09PSBESUZGX0RFTEVURSkge1xuICBcdFx0XHRcdFx0cG9zdERlbCA9IHRydWU7XG4gIFx0XHRcdFx0fSBlbHNlIHtcbiAgXHRcdFx0XHRcdHBvc3RJbnMgPSB0cnVlO1xuICBcdFx0XHRcdH1cblxuICBcdFx0XHRcdC8qXG4gICAgICAgKiBGaXZlIHR5cGVzIHRvIGJlIHNwbGl0OlxuICAgICAgICogPGlucz5BPC9pbnM+PGRlbD5CPC9kZWw+WFk8aW5zPkM8L2lucz48ZGVsPkQ8L2RlbD5cbiAgICAgICAqIDxpbnM+QTwvaW5zPlg8aW5zPkM8L2lucz48ZGVsPkQ8L2RlbD5cbiAgICAgICAqIDxpbnM+QTwvaW5zPjxkZWw+QjwvZGVsPlg8aW5zPkM8L2lucz5cbiAgICAgICAqIDxpbnM+QTwvZGVsPlg8aW5zPkM8L2lucz48ZGVsPkQ8L2RlbD5cbiAgICAgICAqIDxpbnM+QTwvaW5zPjxkZWw+QjwvZGVsPlg8ZGVsPkM8L2RlbD5cbiAgICAgICAqL1xuICBcdFx0XHRcdGlmIChsYXN0ZXF1YWxpdHkgJiYgKHByZUlucyAmJiBwcmVEZWwgJiYgcG9zdElucyAmJiBwb3N0RGVsIHx8IGxhc3RlcXVhbGl0eS5sZW5ndGggPCAyICYmIHByZUlucyArIHByZURlbCArIHBvc3RJbnMgKyBwb3N0RGVsID09PSAzKSkge1xuXG4gIFx0XHRcdFx0XHQvLyBEdXBsaWNhdGUgcmVjb3JkLlxuICBcdFx0XHRcdFx0ZGlmZnMuc3BsaWNlKGVxdWFsaXRpZXNbZXF1YWxpdGllc0xlbmd0aCAtIDFdLCAwLCBbRElGRl9ERUxFVEUsIGxhc3RlcXVhbGl0eV0pO1xuXG4gIFx0XHRcdFx0XHQvLyBDaGFuZ2Ugc2Vjb25kIGNvcHkgdG8gaW5zZXJ0LlxuICBcdFx0XHRcdFx0ZGlmZnNbZXF1YWxpdGllc1tlcXVhbGl0aWVzTGVuZ3RoIC0gMV0gKyAxXVswXSA9IERJRkZfSU5TRVJUO1xuICBcdFx0XHRcdFx0ZXF1YWxpdGllc0xlbmd0aC0tOyAvLyBUaHJvdyBhd2F5IHRoZSBlcXVhbGl0eSB3ZSBqdXN0IGRlbGV0ZWQ7XG4gIFx0XHRcdFx0XHRsYXN0ZXF1YWxpdHkgPSBudWxsO1xuICBcdFx0XHRcdFx0aWYgKHByZUlucyAmJiBwcmVEZWwpIHtcblxuICBcdFx0XHRcdFx0XHQvLyBObyBjaGFuZ2VzIG1hZGUgd2hpY2ggY291bGQgYWZmZWN0IHByZXZpb3VzIGVudHJ5LCBrZWVwIGdvaW5nLlxuICBcdFx0XHRcdFx0XHRwb3N0SW5zID0gcG9zdERlbCA9IHRydWU7XG4gIFx0XHRcdFx0XHRcdGVxdWFsaXRpZXNMZW5ndGggPSAwO1xuICBcdFx0XHRcdFx0fSBlbHNlIHtcbiAgXHRcdFx0XHRcdFx0ZXF1YWxpdGllc0xlbmd0aC0tOyAvLyBUaHJvdyBhd2F5IHRoZSBwcmV2aW91cyBlcXVhbGl0eS5cbiAgXHRcdFx0XHRcdFx0cG9pbnRlciA9IGVxdWFsaXRpZXNMZW5ndGggPiAwID8gZXF1YWxpdGllc1tlcXVhbGl0aWVzTGVuZ3RoIC0gMV0gOiAtMTtcbiAgXHRcdFx0XHRcdFx0cG9zdElucyA9IHBvc3REZWwgPSBmYWxzZTtcbiAgXHRcdFx0XHRcdH1cbiAgXHRcdFx0XHRcdGNoYW5nZXMgPSB0cnVlO1xuICBcdFx0XHRcdH1cbiAgXHRcdFx0fVxuICBcdFx0XHRwb2ludGVyKys7XG4gIFx0XHR9XG5cbiAgXHRcdGlmIChjaGFuZ2VzKSB7XG4gIFx0XHRcdHRoaXMuZGlmZkNsZWFudXBNZXJnZShkaWZmcyk7XG4gIFx0XHR9XG4gIFx0fTtcblxuICBcdC8qKlxuICAgICogQ29udmVydCBhIGRpZmYgYXJyYXkgaW50byBhIHByZXR0eSBIVE1MIHJlcG9ydC5cbiAgICAqIEBwYXJhbSB7IUFycmF5LjwhRGlmZk1hdGNoUGF0Y2guRGlmZj59IGRpZmZzIEFycmF5IG9mIGRpZmYgdHVwbGVzLlxuICAgICogQHBhcmFtIHtpbnRlZ2VyfSBzdHJpbmcgdG8gYmUgYmVhdXRpZmllZC5cbiAgICAqIEByZXR1cm4ge3N0cmluZ30gSFRNTCByZXByZXNlbnRhdGlvbi5cbiAgICAqL1xuICBcdERpZmZNYXRjaFBhdGNoLnByb3RvdHlwZS5kaWZmUHJldHR5SHRtbCA9IGZ1bmN0aW9uIChkaWZmcykge1xuICBcdFx0dmFyIG9wLFxuICBcdFx0ICAgIGRhdGEsXG4gIFx0XHQgICAgeCxcbiAgXHRcdCAgICBodG1sID0gW107XG4gIFx0XHRmb3IgKHggPSAwOyB4IDwgZGlmZnMubGVuZ3RoOyB4KyspIHtcbiAgXHRcdFx0b3AgPSBkaWZmc1t4XVswXTsgLy8gT3BlcmF0aW9uIChpbnNlcnQsIGRlbGV0ZSwgZXF1YWwpXG4gIFx0XHRcdGRhdGEgPSBkaWZmc1t4XVsxXTsgLy8gVGV4dCBvZiBjaGFuZ2UuXG4gIFx0XHRcdHN3aXRjaCAob3ApIHtcbiAgXHRcdFx0XHRjYXNlIERJRkZfSU5TRVJUOlxuICBcdFx0XHRcdFx0aHRtbFt4XSA9IFwiPGlucz5cIiArIGVzY2FwZVRleHQoZGF0YSkgKyBcIjwvaW5zPlwiO1xuICBcdFx0XHRcdFx0YnJlYWs7XG4gIFx0XHRcdFx0Y2FzZSBESUZGX0RFTEVURTpcbiAgXHRcdFx0XHRcdGh0bWxbeF0gPSBcIjxkZWw+XCIgKyBlc2NhcGVUZXh0KGRhdGEpICsgXCI8L2RlbD5cIjtcbiAgXHRcdFx0XHRcdGJyZWFrO1xuICBcdFx0XHRcdGNhc2UgRElGRl9FUVVBTDpcbiAgXHRcdFx0XHRcdGh0bWxbeF0gPSBcIjxzcGFuPlwiICsgZXNjYXBlVGV4dChkYXRhKSArIFwiPC9zcGFuPlwiO1xuICBcdFx0XHRcdFx0YnJlYWs7XG4gIFx0XHRcdH1cbiAgXHRcdH1cbiAgXHRcdHJldHVybiBodG1sLmpvaW4oXCJcIik7XG4gIFx0fTtcblxuICBcdC8qKlxuICAgICogRGV0ZXJtaW5lIHRoZSBjb21tb24gcHJlZml4IG9mIHR3byBzdHJpbmdzLlxuICAgICogQHBhcmFtIHtzdHJpbmd9IHRleHQxIEZpcnN0IHN0cmluZy5cbiAgICAqIEBwYXJhbSB7c3RyaW5nfSB0ZXh0MiBTZWNvbmQgc3RyaW5nLlxuICAgICogQHJldHVybiB7bnVtYmVyfSBUaGUgbnVtYmVyIG9mIGNoYXJhY3RlcnMgY29tbW9uIHRvIHRoZSBzdGFydCBvZiBlYWNoXG4gICAgKiAgICAgc3RyaW5nLlxuICAgICovXG4gIFx0RGlmZk1hdGNoUGF0Y2gucHJvdG90eXBlLmRpZmZDb21tb25QcmVmaXggPSBmdW5jdGlvbiAodGV4dDEsIHRleHQyKSB7XG4gIFx0XHR2YXIgcG9pbnRlcm1pZCwgcG9pbnRlcm1heCwgcG9pbnRlcm1pbiwgcG9pbnRlcnN0YXJ0O1xuXG4gIFx0XHQvLyBRdWljayBjaGVjayBmb3IgY29tbW9uIG51bGwgY2FzZXMuXG4gIFx0XHRpZiAoIXRleHQxIHx8ICF0ZXh0MiB8fCB0ZXh0MS5jaGFyQXQoMCkgIT09IHRleHQyLmNoYXJBdCgwKSkge1xuICBcdFx0XHRyZXR1cm4gMDtcbiAgXHRcdH1cblxuICBcdFx0Ly8gQmluYXJ5IHNlYXJjaC5cbiAgXHRcdC8vIFBlcmZvcm1hbmNlIGFuYWx5c2lzOiBodHRwczovL25laWwuZnJhc2VyLm5hbWUvbmV3cy8yMDA3LzEwLzA5L1xuICBcdFx0cG9pbnRlcm1pbiA9IDA7XG4gIFx0XHRwb2ludGVybWF4ID0gTWF0aC5taW4odGV4dDEubGVuZ3RoLCB0ZXh0Mi5sZW5ndGgpO1xuICBcdFx0cG9pbnRlcm1pZCA9IHBvaW50ZXJtYXg7XG4gIFx0XHRwb2ludGVyc3RhcnQgPSAwO1xuICBcdFx0d2hpbGUgKHBvaW50ZXJtaW4gPCBwb2ludGVybWlkKSB7XG4gIFx0XHRcdGlmICh0ZXh0MS5zdWJzdHJpbmcocG9pbnRlcnN0YXJ0LCBwb2ludGVybWlkKSA9PT0gdGV4dDIuc3Vic3RyaW5nKHBvaW50ZXJzdGFydCwgcG9pbnRlcm1pZCkpIHtcbiAgXHRcdFx0XHRwb2ludGVybWluID0gcG9pbnRlcm1pZDtcbiAgXHRcdFx0XHRwb2ludGVyc3RhcnQgPSBwb2ludGVybWluO1xuICBcdFx0XHR9IGVsc2Uge1xuICBcdFx0XHRcdHBvaW50ZXJtYXggPSBwb2ludGVybWlkO1xuICBcdFx0XHR9XG4gIFx0XHRcdHBvaW50ZXJtaWQgPSBNYXRoLmZsb29yKChwb2ludGVybWF4IC0gcG9pbnRlcm1pbikgLyAyICsgcG9pbnRlcm1pbik7XG4gIFx0XHR9XG4gIFx0XHRyZXR1cm4gcG9pbnRlcm1pZDtcbiAgXHR9O1xuXG4gIFx0LyoqXG4gICAgKiBEZXRlcm1pbmUgdGhlIGNvbW1vbiBzdWZmaXggb2YgdHdvIHN0cmluZ3MuXG4gICAgKiBAcGFyYW0ge3N0cmluZ30gdGV4dDEgRmlyc3Qgc3RyaW5nLlxuICAgICogQHBhcmFtIHtzdHJpbmd9IHRleHQyIFNlY29uZCBzdHJpbmcuXG4gICAgKiBAcmV0dXJuIHtudW1iZXJ9IFRoZSBudW1iZXIgb2YgY2hhcmFjdGVycyBjb21tb24gdG8gdGhlIGVuZCBvZiBlYWNoIHN0cmluZy5cbiAgICAqL1xuICBcdERpZmZNYXRjaFBhdGNoLnByb3RvdHlwZS5kaWZmQ29tbW9uU3VmZml4ID0gZnVuY3Rpb24gKHRleHQxLCB0ZXh0Mikge1xuICBcdFx0dmFyIHBvaW50ZXJtaWQsIHBvaW50ZXJtYXgsIHBvaW50ZXJtaW4sIHBvaW50ZXJlbmQ7XG5cbiAgXHRcdC8vIFF1aWNrIGNoZWNrIGZvciBjb21tb24gbnVsbCBjYXNlcy5cbiAgXHRcdGlmICghdGV4dDEgfHwgIXRleHQyIHx8IHRleHQxLmNoYXJBdCh0ZXh0MS5sZW5ndGggLSAxKSAhPT0gdGV4dDIuY2hhckF0KHRleHQyLmxlbmd0aCAtIDEpKSB7XG4gIFx0XHRcdHJldHVybiAwO1xuICBcdFx0fVxuXG4gIFx0XHQvLyBCaW5hcnkgc2VhcmNoLlxuICBcdFx0Ly8gUGVyZm9ybWFuY2UgYW5hbHlzaXM6IGh0dHBzOi8vbmVpbC5mcmFzZXIubmFtZS9uZXdzLzIwMDcvMTAvMDkvXG4gIFx0XHRwb2ludGVybWluID0gMDtcbiAgXHRcdHBvaW50ZXJtYXggPSBNYXRoLm1pbih0ZXh0MS5sZW5ndGgsIHRleHQyLmxlbmd0aCk7XG4gIFx0XHRwb2ludGVybWlkID0gcG9pbnRlcm1heDtcbiAgXHRcdHBvaW50ZXJlbmQgPSAwO1xuICBcdFx0d2hpbGUgKHBvaW50ZXJtaW4gPCBwb2ludGVybWlkKSB7XG4gIFx0XHRcdGlmICh0ZXh0MS5zdWJzdHJpbmcodGV4dDEubGVuZ3RoIC0gcG9pbnRlcm1pZCwgdGV4dDEubGVuZ3RoIC0gcG9pbnRlcmVuZCkgPT09IHRleHQyLnN1YnN0cmluZyh0ZXh0Mi5sZW5ndGggLSBwb2ludGVybWlkLCB0ZXh0Mi5sZW5ndGggLSBwb2ludGVyZW5kKSkge1xuICBcdFx0XHRcdHBvaW50ZXJtaW4gPSBwb2ludGVybWlkO1xuICBcdFx0XHRcdHBvaW50ZXJlbmQgPSBwb2ludGVybWluO1xuICBcdFx0XHR9IGVsc2Uge1xuICBcdFx0XHRcdHBvaW50ZXJtYXggPSBwb2ludGVybWlkO1xuICBcdFx0XHR9XG4gIFx0XHRcdHBvaW50ZXJtaWQgPSBNYXRoLmZsb29yKChwb2ludGVybWF4IC0gcG9pbnRlcm1pbikgLyAyICsgcG9pbnRlcm1pbik7XG4gIFx0XHR9XG4gIFx0XHRyZXR1cm4gcG9pbnRlcm1pZDtcbiAgXHR9O1xuXG4gIFx0LyoqXG4gICAgKiBGaW5kIHRoZSBkaWZmZXJlbmNlcyBiZXR3ZWVuIHR3byB0ZXh0cy4gIEFzc3VtZXMgdGhhdCB0aGUgdGV4dHMgZG8gbm90XG4gICAgKiBoYXZlIGFueSBjb21tb24gcHJlZml4IG9yIHN1ZmZpeC5cbiAgICAqIEBwYXJhbSB7c3RyaW5nfSB0ZXh0MSBPbGQgc3RyaW5nIHRvIGJlIGRpZmZlZC5cbiAgICAqIEBwYXJhbSB7c3RyaW5nfSB0ZXh0MiBOZXcgc3RyaW5nIHRvIGJlIGRpZmZlZC5cbiAgICAqIEBwYXJhbSB7Ym9vbGVhbn0gY2hlY2tsaW5lcyBTcGVlZHVwIGZsYWcuICBJZiBmYWxzZSwgdGhlbiBkb24ndCBydW4gYVxuICAgICogICAgIGxpbmUtbGV2ZWwgZGlmZiBmaXJzdCB0byBpZGVudGlmeSB0aGUgY2hhbmdlZCBhcmVhcy5cbiAgICAqICAgICBJZiB0cnVlLCB0aGVuIHJ1biBhIGZhc3Rlciwgc2xpZ2h0bHkgbGVzcyBvcHRpbWFsIGRpZmYuXG4gICAgKiBAcGFyYW0ge251bWJlcn0gZGVhZGxpbmUgVGltZSB3aGVuIHRoZSBkaWZmIHNob3VsZCBiZSBjb21wbGV0ZSBieS5cbiAgICAqIEByZXR1cm4geyFBcnJheS48IURpZmZNYXRjaFBhdGNoLkRpZmY+fSBBcnJheSBvZiBkaWZmIHR1cGxlcy5cbiAgICAqIEBwcml2YXRlXG4gICAgKi9cbiAgXHREaWZmTWF0Y2hQYXRjaC5wcm90b3R5cGUuZGlmZkNvbXB1dGUgPSBmdW5jdGlvbiAodGV4dDEsIHRleHQyLCBjaGVja2xpbmVzLCBkZWFkbGluZSkge1xuICBcdFx0dmFyIGRpZmZzLCBsb25ndGV4dCwgc2hvcnR0ZXh0LCBpLCBobSwgdGV4dDFBLCB0ZXh0MkEsIHRleHQxQiwgdGV4dDJCLCBtaWRDb21tb24sIGRpZmZzQSwgZGlmZnNCO1xuXG4gIFx0XHRpZiAoIXRleHQxKSB7XG5cbiAgXHRcdFx0Ly8gSnVzdCBhZGQgc29tZSB0ZXh0IChzcGVlZHVwKS5cbiAgXHRcdFx0cmV0dXJuIFtbRElGRl9JTlNFUlQsIHRleHQyXV07XG4gIFx0XHR9XG5cbiAgXHRcdGlmICghdGV4dDIpIHtcblxuICBcdFx0XHQvLyBKdXN0IGRlbGV0ZSBzb21lIHRleHQgKHNwZWVkdXApLlxuICBcdFx0XHRyZXR1cm4gW1tESUZGX0RFTEVURSwgdGV4dDFdXTtcbiAgXHRcdH1cblxuICBcdFx0bG9uZ3RleHQgPSB0ZXh0MS5sZW5ndGggPiB0ZXh0Mi5sZW5ndGggPyB0ZXh0MSA6IHRleHQyO1xuICBcdFx0c2hvcnR0ZXh0ID0gdGV4dDEubGVuZ3RoID4gdGV4dDIubGVuZ3RoID8gdGV4dDIgOiB0ZXh0MTtcbiAgXHRcdGkgPSBsb25ndGV4dC5pbmRleE9mKHNob3J0dGV4dCk7XG4gIFx0XHRpZiAoaSAhPT0gLTEpIHtcblxuICBcdFx0XHQvLyBTaG9ydGVyIHRleHQgaXMgaW5zaWRlIHRoZSBsb25nZXIgdGV4dCAoc3BlZWR1cCkuXG4gIFx0XHRcdGRpZmZzID0gW1tESUZGX0lOU0VSVCwgbG9uZ3RleHQuc3Vic3RyaW5nKDAsIGkpXSwgW0RJRkZfRVFVQUwsIHNob3J0dGV4dF0sIFtESUZGX0lOU0VSVCwgbG9uZ3RleHQuc3Vic3RyaW5nKGkgKyBzaG9ydHRleHQubGVuZ3RoKV1dO1xuXG4gIFx0XHRcdC8vIFN3YXAgaW5zZXJ0aW9ucyBmb3IgZGVsZXRpb25zIGlmIGRpZmYgaXMgcmV2ZXJzZWQuXG4gIFx0XHRcdGlmICh0ZXh0MS5sZW5ndGggPiB0ZXh0Mi5sZW5ndGgpIHtcbiAgXHRcdFx0XHRkaWZmc1swXVswXSA9IGRpZmZzWzJdWzBdID0gRElGRl9ERUxFVEU7XG4gIFx0XHRcdH1cbiAgXHRcdFx0cmV0dXJuIGRpZmZzO1xuICBcdFx0fVxuXG4gIFx0XHRpZiAoc2hvcnR0ZXh0Lmxlbmd0aCA9PT0gMSkge1xuXG4gIFx0XHRcdC8vIFNpbmdsZSBjaGFyYWN0ZXIgc3RyaW5nLlxuICBcdFx0XHQvLyBBZnRlciB0aGUgcHJldmlvdXMgc3BlZWR1cCwgdGhlIGNoYXJhY3RlciBjYW4ndCBiZSBhbiBlcXVhbGl0eS5cbiAgXHRcdFx0cmV0dXJuIFtbRElGRl9ERUxFVEUsIHRleHQxXSwgW0RJRkZfSU5TRVJULCB0ZXh0Ml1dO1xuICBcdFx0fVxuXG4gIFx0XHQvLyBDaGVjayB0byBzZWUgaWYgdGhlIHByb2JsZW0gY2FuIGJlIHNwbGl0IGluIHR3by5cbiAgXHRcdGhtID0gdGhpcy5kaWZmSGFsZk1hdGNoKHRleHQxLCB0ZXh0Mik7XG4gIFx0XHRpZiAoaG0pIHtcblxuICBcdFx0XHQvLyBBIGhhbGYtbWF0Y2ggd2FzIGZvdW5kLCBzb3J0IG91dCB0aGUgcmV0dXJuIGRhdGEuXG4gIFx0XHRcdHRleHQxQSA9IGhtWzBdO1xuICBcdFx0XHR0ZXh0MUIgPSBobVsxXTtcbiAgXHRcdFx0dGV4dDJBID0gaG1bMl07XG4gIFx0XHRcdHRleHQyQiA9IGhtWzNdO1xuICBcdFx0XHRtaWRDb21tb24gPSBobVs0XTtcblxuICBcdFx0XHQvLyBTZW5kIGJvdGggcGFpcnMgb2ZmIGZvciBzZXBhcmF0ZSBwcm9jZXNzaW5nLlxuICBcdFx0XHRkaWZmc0EgPSB0aGlzLkRpZmZNYWluKHRleHQxQSwgdGV4dDJBLCBjaGVja2xpbmVzLCBkZWFkbGluZSk7XG4gIFx0XHRcdGRpZmZzQiA9IHRoaXMuRGlmZk1haW4odGV4dDFCLCB0ZXh0MkIsIGNoZWNrbGluZXMsIGRlYWRsaW5lKTtcblxuICBcdFx0XHQvLyBNZXJnZSB0aGUgcmVzdWx0cy5cbiAgXHRcdFx0cmV0dXJuIGRpZmZzQS5jb25jYXQoW1tESUZGX0VRVUFMLCBtaWRDb21tb25dXSwgZGlmZnNCKTtcbiAgXHRcdH1cblxuICBcdFx0aWYgKGNoZWNrbGluZXMgJiYgdGV4dDEubGVuZ3RoID4gMTAwICYmIHRleHQyLmxlbmd0aCA+IDEwMCkge1xuICBcdFx0XHRyZXR1cm4gdGhpcy5kaWZmTGluZU1vZGUodGV4dDEsIHRleHQyLCBkZWFkbGluZSk7XG4gIFx0XHR9XG5cbiAgXHRcdHJldHVybiB0aGlzLmRpZmZCaXNlY3QodGV4dDEsIHRleHQyLCBkZWFkbGluZSk7XG4gIFx0fTtcblxuICBcdC8qKlxuICAgICogRG8gdGhlIHR3byB0ZXh0cyBzaGFyZSBhIHN1YnN0cmluZyB3aGljaCBpcyBhdCBsZWFzdCBoYWxmIHRoZSBsZW5ndGggb2YgdGhlXG4gICAgKiBsb25nZXIgdGV4dD9cbiAgICAqIFRoaXMgc3BlZWR1cCBjYW4gcHJvZHVjZSBub24tbWluaW1hbCBkaWZmcy5cbiAgICAqIEBwYXJhbSB7c3RyaW5nfSB0ZXh0MSBGaXJzdCBzdHJpbmcuXG4gICAgKiBAcGFyYW0ge3N0cmluZ30gdGV4dDIgU2Vjb25kIHN0cmluZy5cbiAgICAqIEByZXR1cm4ge0FycmF5LjxzdHJpbmc+fSBGaXZlIGVsZW1lbnQgQXJyYXksIGNvbnRhaW5pbmcgdGhlIHByZWZpeCBvZlxuICAgICogICAgIHRleHQxLCB0aGUgc3VmZml4IG9mIHRleHQxLCB0aGUgcHJlZml4IG9mIHRleHQyLCB0aGUgc3VmZml4IG9mXG4gICAgKiAgICAgdGV4dDIgYW5kIHRoZSBjb21tb24gbWlkZGxlLiAgT3IgbnVsbCBpZiB0aGVyZSB3YXMgbm8gbWF0Y2guXG4gICAgKiBAcHJpdmF0ZVxuICAgICovXG4gIFx0RGlmZk1hdGNoUGF0Y2gucHJvdG90eXBlLmRpZmZIYWxmTWF0Y2ggPSBmdW5jdGlvbiAodGV4dDEsIHRleHQyKSB7XG4gIFx0XHR2YXIgbG9uZ3RleHQsIHNob3J0dGV4dCwgZG1wLCB0ZXh0MUEsIHRleHQyQiwgdGV4dDJBLCB0ZXh0MUIsIG1pZENvbW1vbiwgaG0xLCBobTIsIGhtO1xuXG4gIFx0XHRsb25ndGV4dCA9IHRleHQxLmxlbmd0aCA+IHRleHQyLmxlbmd0aCA/IHRleHQxIDogdGV4dDI7XG4gIFx0XHRzaG9ydHRleHQgPSB0ZXh0MS5sZW5ndGggPiB0ZXh0Mi5sZW5ndGggPyB0ZXh0MiA6IHRleHQxO1xuICBcdFx0aWYgKGxvbmd0ZXh0Lmxlbmd0aCA8IDQgfHwgc2hvcnR0ZXh0Lmxlbmd0aCAqIDIgPCBsb25ndGV4dC5sZW5ndGgpIHtcbiAgXHRcdFx0cmV0dXJuIG51bGw7IC8vIFBvaW50bGVzcy5cbiAgXHRcdH1cbiAgXHRcdGRtcCA9IHRoaXM7IC8vICd0aGlzJyBiZWNvbWVzICd3aW5kb3cnIGluIGEgY2xvc3VyZS5cblxuICBcdFx0LyoqXG4gICAgICogRG9lcyBhIHN1YnN0cmluZyBvZiBzaG9ydHRleHQgZXhpc3Qgd2l0aGluIGxvbmd0ZXh0IHN1Y2ggdGhhdCB0aGUgc3Vic3RyaW5nXG4gICAgICogaXMgYXQgbGVhc3QgaGFsZiB0aGUgbGVuZ3RoIG9mIGxvbmd0ZXh0P1xuICAgICAqIENsb3N1cmUsIGJ1dCBkb2VzIG5vdCByZWZlcmVuY2UgYW55IGV4dGVybmFsIHZhcmlhYmxlcy5cbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gbG9uZ3RleHQgTG9uZ2VyIHN0cmluZy5cbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gc2hvcnR0ZXh0IFNob3J0ZXIgc3RyaW5nLlxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBpIFN0YXJ0IGluZGV4IG9mIHF1YXJ0ZXIgbGVuZ3RoIHN1YnN0cmluZyB3aXRoaW4gbG9uZ3RleHQuXG4gICAgICogQHJldHVybiB7QXJyYXkuPHN0cmluZz59IEZpdmUgZWxlbWVudCBBcnJheSwgY29udGFpbmluZyB0aGUgcHJlZml4IG9mXG4gICAgICogICAgIGxvbmd0ZXh0LCB0aGUgc3VmZml4IG9mIGxvbmd0ZXh0LCB0aGUgcHJlZml4IG9mIHNob3J0dGV4dCwgdGhlIHN1ZmZpeFxuICAgICAqICAgICBvZiBzaG9ydHRleHQgYW5kIHRoZSBjb21tb24gbWlkZGxlLiAgT3IgbnVsbCBpZiB0aGVyZSB3YXMgbm8gbWF0Y2guXG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgXHRcdGZ1bmN0aW9uIGRpZmZIYWxmTWF0Y2hJKGxvbmd0ZXh0LCBzaG9ydHRleHQsIGkpIHtcbiAgXHRcdFx0dmFyIHNlZWQsIGosIGJlc3RDb21tb24sIHByZWZpeExlbmd0aCwgc3VmZml4TGVuZ3RoLCBiZXN0TG9uZ3RleHRBLCBiZXN0TG9uZ3RleHRCLCBiZXN0U2hvcnR0ZXh0QSwgYmVzdFNob3J0dGV4dEI7XG5cbiAgXHRcdFx0Ly8gU3RhcnQgd2l0aCBhIDEvNCBsZW5ndGggc3Vic3RyaW5nIGF0IHBvc2l0aW9uIGkgYXMgYSBzZWVkLlxuICBcdFx0XHRzZWVkID0gbG9uZ3RleHQuc3Vic3RyaW5nKGksIGkgKyBNYXRoLmZsb29yKGxvbmd0ZXh0Lmxlbmd0aCAvIDQpKTtcbiAgXHRcdFx0aiA9IC0xO1xuICBcdFx0XHRiZXN0Q29tbW9uID0gXCJcIjtcbiAgXHRcdFx0d2hpbGUgKChqID0gc2hvcnR0ZXh0LmluZGV4T2Yoc2VlZCwgaiArIDEpKSAhPT0gLTEpIHtcbiAgXHRcdFx0XHRwcmVmaXhMZW5ndGggPSBkbXAuZGlmZkNvbW1vblByZWZpeChsb25ndGV4dC5zdWJzdHJpbmcoaSksIHNob3J0dGV4dC5zdWJzdHJpbmcoaikpO1xuICBcdFx0XHRcdHN1ZmZpeExlbmd0aCA9IGRtcC5kaWZmQ29tbW9uU3VmZml4KGxvbmd0ZXh0LnN1YnN0cmluZygwLCBpKSwgc2hvcnR0ZXh0LnN1YnN0cmluZygwLCBqKSk7XG4gIFx0XHRcdFx0aWYgKGJlc3RDb21tb24ubGVuZ3RoIDwgc3VmZml4TGVuZ3RoICsgcHJlZml4TGVuZ3RoKSB7XG4gIFx0XHRcdFx0XHRiZXN0Q29tbW9uID0gc2hvcnR0ZXh0LnN1YnN0cmluZyhqIC0gc3VmZml4TGVuZ3RoLCBqKSArIHNob3J0dGV4dC5zdWJzdHJpbmcoaiwgaiArIHByZWZpeExlbmd0aCk7XG4gIFx0XHRcdFx0XHRiZXN0TG9uZ3RleHRBID0gbG9uZ3RleHQuc3Vic3RyaW5nKDAsIGkgLSBzdWZmaXhMZW5ndGgpO1xuICBcdFx0XHRcdFx0YmVzdExvbmd0ZXh0QiA9IGxvbmd0ZXh0LnN1YnN0cmluZyhpICsgcHJlZml4TGVuZ3RoKTtcbiAgXHRcdFx0XHRcdGJlc3RTaG9ydHRleHRBID0gc2hvcnR0ZXh0LnN1YnN0cmluZygwLCBqIC0gc3VmZml4TGVuZ3RoKTtcbiAgXHRcdFx0XHRcdGJlc3RTaG9ydHRleHRCID0gc2hvcnR0ZXh0LnN1YnN0cmluZyhqICsgcHJlZml4TGVuZ3RoKTtcbiAgXHRcdFx0XHR9XG4gIFx0XHRcdH1cbiAgXHRcdFx0aWYgKGJlc3RDb21tb24ubGVuZ3RoICogMiA+PSBsb25ndGV4dC5sZW5ndGgpIHtcbiAgXHRcdFx0XHRyZXR1cm4gW2Jlc3RMb25ndGV4dEEsIGJlc3RMb25ndGV4dEIsIGJlc3RTaG9ydHRleHRBLCBiZXN0U2hvcnR0ZXh0QiwgYmVzdENvbW1vbl07XG4gIFx0XHRcdH0gZWxzZSB7XG4gIFx0XHRcdFx0cmV0dXJuIG51bGw7XG4gIFx0XHRcdH1cbiAgXHRcdH1cblxuICBcdFx0Ly8gRmlyc3QgY2hlY2sgaWYgdGhlIHNlY29uZCBxdWFydGVyIGlzIHRoZSBzZWVkIGZvciBhIGhhbGYtbWF0Y2guXG4gIFx0XHRobTEgPSBkaWZmSGFsZk1hdGNoSShsb25ndGV4dCwgc2hvcnR0ZXh0LCBNYXRoLmNlaWwobG9uZ3RleHQubGVuZ3RoIC8gNCkpO1xuXG4gIFx0XHQvLyBDaGVjayBhZ2FpbiBiYXNlZCBvbiB0aGUgdGhpcmQgcXVhcnRlci5cbiAgXHRcdGhtMiA9IGRpZmZIYWxmTWF0Y2hJKGxvbmd0ZXh0LCBzaG9ydHRleHQsIE1hdGguY2VpbChsb25ndGV4dC5sZW5ndGggLyAyKSk7XG4gIFx0XHRpZiAoIWhtMSAmJiAhaG0yKSB7XG4gIFx0XHRcdHJldHVybiBudWxsO1xuICBcdFx0fSBlbHNlIGlmICghaG0yKSB7XG4gIFx0XHRcdGhtID0gaG0xO1xuICBcdFx0fSBlbHNlIGlmICghaG0xKSB7XG4gIFx0XHRcdGhtID0gaG0yO1xuICBcdFx0fSBlbHNlIHtcblxuICBcdFx0XHQvLyBCb3RoIG1hdGNoZWQuICBTZWxlY3QgdGhlIGxvbmdlc3QuXG4gIFx0XHRcdGhtID0gaG0xWzRdLmxlbmd0aCA+IGhtMls0XS5sZW5ndGggPyBobTEgOiBobTI7XG4gIFx0XHR9XG5cbiAgXHRcdC8vIEEgaGFsZi1tYXRjaCB3YXMgZm91bmQsIHNvcnQgb3V0IHRoZSByZXR1cm4gZGF0YS5cbiAgXHRcdGlmICh0ZXh0MS5sZW5ndGggPiB0ZXh0Mi5sZW5ndGgpIHtcbiAgXHRcdFx0dGV4dDFBID0gaG1bMF07XG4gIFx0XHRcdHRleHQxQiA9IGhtWzFdO1xuICBcdFx0XHR0ZXh0MkEgPSBobVsyXTtcbiAgXHRcdFx0dGV4dDJCID0gaG1bM107XG4gIFx0XHR9IGVsc2Uge1xuICBcdFx0XHR0ZXh0MkEgPSBobVswXTtcbiAgXHRcdFx0dGV4dDJCID0gaG1bMV07XG4gIFx0XHRcdHRleHQxQSA9IGhtWzJdO1xuICBcdFx0XHR0ZXh0MUIgPSBobVszXTtcbiAgXHRcdH1cbiAgXHRcdG1pZENvbW1vbiA9IGhtWzRdO1xuICBcdFx0cmV0dXJuIFt0ZXh0MUEsIHRleHQxQiwgdGV4dDJBLCB0ZXh0MkIsIG1pZENvbW1vbl07XG4gIFx0fTtcblxuICBcdC8qKlxuICAgICogRG8gYSBxdWljayBsaW5lLWxldmVsIGRpZmYgb24gYm90aCBzdHJpbmdzLCB0aGVuIHJlZGlmZiB0aGUgcGFydHMgZm9yXG4gICAgKiBncmVhdGVyIGFjY3VyYWN5LlxuICAgICogVGhpcyBzcGVlZHVwIGNhbiBwcm9kdWNlIG5vbi1taW5pbWFsIGRpZmZzLlxuICAgICogQHBhcmFtIHtzdHJpbmd9IHRleHQxIE9sZCBzdHJpbmcgdG8gYmUgZGlmZmVkLlxuICAgICogQHBhcmFtIHtzdHJpbmd9IHRleHQyIE5ldyBzdHJpbmcgdG8gYmUgZGlmZmVkLlxuICAgICogQHBhcmFtIHtudW1iZXJ9IGRlYWRsaW5lIFRpbWUgd2hlbiB0aGUgZGlmZiBzaG91bGQgYmUgY29tcGxldGUgYnkuXG4gICAgKiBAcmV0dXJuIHshQXJyYXkuPCFEaWZmTWF0Y2hQYXRjaC5EaWZmPn0gQXJyYXkgb2YgZGlmZiB0dXBsZXMuXG4gICAgKiBAcHJpdmF0ZVxuICAgICovXG4gIFx0RGlmZk1hdGNoUGF0Y2gucHJvdG90eXBlLmRpZmZMaW5lTW9kZSA9IGZ1bmN0aW9uICh0ZXh0MSwgdGV4dDIsIGRlYWRsaW5lKSB7XG4gIFx0XHR2YXIgYSwgZGlmZnMsIGxpbmVhcnJheSwgcG9pbnRlciwgY291bnRJbnNlcnQsIGNvdW50RGVsZXRlLCB0ZXh0SW5zZXJ0LCB0ZXh0RGVsZXRlLCBqO1xuXG4gIFx0XHQvLyBTY2FuIHRoZSB0ZXh0IG9uIGEgbGluZS1ieS1saW5lIGJhc2lzIGZpcnN0LlxuICBcdFx0YSA9IHRoaXMuZGlmZkxpbmVzVG9DaGFycyh0ZXh0MSwgdGV4dDIpO1xuICBcdFx0dGV4dDEgPSBhLmNoYXJzMTtcbiAgXHRcdHRleHQyID0gYS5jaGFyczI7XG4gIFx0XHRsaW5lYXJyYXkgPSBhLmxpbmVBcnJheTtcblxuICBcdFx0ZGlmZnMgPSB0aGlzLkRpZmZNYWluKHRleHQxLCB0ZXh0MiwgZmFsc2UsIGRlYWRsaW5lKTtcblxuICBcdFx0Ly8gQ29udmVydCB0aGUgZGlmZiBiYWNrIHRvIG9yaWdpbmFsIHRleHQuXG4gIFx0XHR0aGlzLmRpZmZDaGFyc1RvTGluZXMoZGlmZnMsIGxpbmVhcnJheSk7XG5cbiAgXHRcdC8vIEVsaW1pbmF0ZSBmcmVhayBtYXRjaGVzIChlLmcuIGJsYW5rIGxpbmVzKVxuICBcdFx0dGhpcy5kaWZmQ2xlYW51cFNlbWFudGljKGRpZmZzKTtcblxuICBcdFx0Ly8gUmVkaWZmIGFueSByZXBsYWNlbWVudCBibG9ja3MsIHRoaXMgdGltZSBjaGFyYWN0ZXItYnktY2hhcmFjdGVyLlxuICBcdFx0Ly8gQWRkIGEgZHVtbXkgZW50cnkgYXQgdGhlIGVuZC5cbiAgXHRcdGRpZmZzLnB1c2goW0RJRkZfRVFVQUwsIFwiXCJdKTtcbiAgXHRcdHBvaW50ZXIgPSAwO1xuICBcdFx0Y291bnREZWxldGUgPSAwO1xuICBcdFx0Y291bnRJbnNlcnQgPSAwO1xuICBcdFx0dGV4dERlbGV0ZSA9IFwiXCI7XG4gIFx0XHR0ZXh0SW5zZXJ0ID0gXCJcIjtcbiAgXHRcdHdoaWxlIChwb2ludGVyIDwgZGlmZnMubGVuZ3RoKSB7XG4gIFx0XHRcdHN3aXRjaCAoZGlmZnNbcG9pbnRlcl1bMF0pIHtcbiAgXHRcdFx0XHRjYXNlIERJRkZfSU5TRVJUOlxuICBcdFx0XHRcdFx0Y291bnRJbnNlcnQrKztcbiAgXHRcdFx0XHRcdHRleHRJbnNlcnQgKz0gZGlmZnNbcG9pbnRlcl1bMV07XG4gIFx0XHRcdFx0XHRicmVhaztcbiAgXHRcdFx0XHRjYXNlIERJRkZfREVMRVRFOlxuICBcdFx0XHRcdFx0Y291bnREZWxldGUrKztcbiAgXHRcdFx0XHRcdHRleHREZWxldGUgKz0gZGlmZnNbcG9pbnRlcl1bMV07XG4gIFx0XHRcdFx0XHRicmVhaztcbiAgXHRcdFx0XHRjYXNlIERJRkZfRVFVQUw6XG5cbiAgXHRcdFx0XHRcdC8vIFVwb24gcmVhY2hpbmcgYW4gZXF1YWxpdHksIGNoZWNrIGZvciBwcmlvciByZWR1bmRhbmNpZXMuXG4gIFx0XHRcdFx0XHRpZiAoY291bnREZWxldGUgPj0gMSAmJiBjb3VudEluc2VydCA+PSAxKSB7XG5cbiAgXHRcdFx0XHRcdFx0Ly8gRGVsZXRlIHRoZSBvZmZlbmRpbmcgcmVjb3JkcyBhbmQgYWRkIHRoZSBtZXJnZWQgb25lcy5cbiAgXHRcdFx0XHRcdFx0ZGlmZnMuc3BsaWNlKHBvaW50ZXIgLSBjb3VudERlbGV0ZSAtIGNvdW50SW5zZXJ0LCBjb3VudERlbGV0ZSArIGNvdW50SW5zZXJ0KTtcbiAgXHRcdFx0XHRcdFx0cG9pbnRlciA9IHBvaW50ZXIgLSBjb3VudERlbGV0ZSAtIGNvdW50SW5zZXJ0O1xuICBcdFx0XHRcdFx0XHRhID0gdGhpcy5EaWZmTWFpbih0ZXh0RGVsZXRlLCB0ZXh0SW5zZXJ0LCBmYWxzZSwgZGVhZGxpbmUpO1xuICBcdFx0XHRcdFx0XHRmb3IgKGogPSBhLmxlbmd0aCAtIDE7IGogPj0gMDsgai0tKSB7XG4gIFx0XHRcdFx0XHRcdFx0ZGlmZnMuc3BsaWNlKHBvaW50ZXIsIDAsIGFbal0pO1xuICBcdFx0XHRcdFx0XHR9XG4gIFx0XHRcdFx0XHRcdHBvaW50ZXIgPSBwb2ludGVyICsgYS5sZW5ndGg7XG4gIFx0XHRcdFx0XHR9XG4gIFx0XHRcdFx0XHRjb3VudEluc2VydCA9IDA7XG4gIFx0XHRcdFx0XHRjb3VudERlbGV0ZSA9IDA7XG4gIFx0XHRcdFx0XHR0ZXh0RGVsZXRlID0gXCJcIjtcbiAgXHRcdFx0XHRcdHRleHRJbnNlcnQgPSBcIlwiO1xuICBcdFx0XHRcdFx0YnJlYWs7XG4gIFx0XHRcdH1cbiAgXHRcdFx0cG9pbnRlcisrO1xuICBcdFx0fVxuICBcdFx0ZGlmZnMucG9wKCk7IC8vIFJlbW92ZSB0aGUgZHVtbXkgZW50cnkgYXQgdGhlIGVuZC5cblxuICBcdFx0cmV0dXJuIGRpZmZzO1xuICBcdH07XG5cbiAgXHQvKipcbiAgICAqIEZpbmQgdGhlICdtaWRkbGUgc25ha2UnIG9mIGEgZGlmZiwgc3BsaXQgdGhlIHByb2JsZW0gaW4gdHdvXG4gICAgKiBhbmQgcmV0dXJuIHRoZSByZWN1cnNpdmVseSBjb25zdHJ1Y3RlZCBkaWZmLlxuICAgICogU2VlIE15ZXJzIDE5ODYgcGFwZXI6IEFuIE8oTkQpIERpZmZlcmVuY2UgQWxnb3JpdGhtIGFuZCBJdHMgVmFyaWF0aW9ucy5cbiAgICAqIEBwYXJhbSB7c3RyaW5nfSB0ZXh0MSBPbGQgc3RyaW5nIHRvIGJlIGRpZmZlZC5cbiAgICAqIEBwYXJhbSB7c3RyaW5nfSB0ZXh0MiBOZXcgc3RyaW5nIHRvIGJlIGRpZmZlZC5cbiAgICAqIEBwYXJhbSB7bnVtYmVyfSBkZWFkbGluZSBUaW1lIGF0IHdoaWNoIHRvIGJhaWwgaWYgbm90IHlldCBjb21wbGV0ZS5cbiAgICAqIEByZXR1cm4geyFBcnJheS48IURpZmZNYXRjaFBhdGNoLkRpZmY+fSBBcnJheSBvZiBkaWZmIHR1cGxlcy5cbiAgICAqIEBwcml2YXRlXG4gICAgKi9cbiAgXHREaWZmTWF0Y2hQYXRjaC5wcm90b3R5cGUuZGlmZkJpc2VjdCA9IGZ1bmN0aW9uICh0ZXh0MSwgdGV4dDIsIGRlYWRsaW5lKSB7XG4gIFx0XHR2YXIgdGV4dDFMZW5ndGgsIHRleHQyTGVuZ3RoLCBtYXhELCB2T2Zmc2V0LCB2TGVuZ3RoLCB2MSwgdjIsIHgsIGRlbHRhLCBmcm9udCwgazFzdGFydCwgazFlbmQsIGsyc3RhcnQsIGsyZW5kLCBrMk9mZnNldCwgazFPZmZzZXQsIHgxLCB4MiwgeTEsIHkyLCBkLCBrMSwgazI7XG5cbiAgXHRcdC8vIENhY2hlIHRoZSB0ZXh0IGxlbmd0aHMgdG8gcHJldmVudCBtdWx0aXBsZSBjYWxscy5cbiAgXHRcdHRleHQxTGVuZ3RoID0gdGV4dDEubGVuZ3RoO1xuICBcdFx0dGV4dDJMZW5ndGggPSB0ZXh0Mi5sZW5ndGg7XG4gIFx0XHRtYXhEID0gTWF0aC5jZWlsKCh0ZXh0MUxlbmd0aCArIHRleHQyTGVuZ3RoKSAvIDIpO1xuICBcdFx0dk9mZnNldCA9IG1heEQ7XG4gIFx0XHR2TGVuZ3RoID0gMiAqIG1heEQ7XG4gIFx0XHR2MSA9IG5ldyBBcnJheSh2TGVuZ3RoKTtcbiAgXHRcdHYyID0gbmV3IEFycmF5KHZMZW5ndGgpO1xuXG4gIFx0XHQvLyBTZXR0aW5nIGFsbCBlbGVtZW50cyB0byAtMSBpcyBmYXN0ZXIgaW4gQ2hyb21lICYgRmlyZWZveCB0aGFuIG1peGluZ1xuICBcdFx0Ly8gaW50ZWdlcnMgYW5kIHVuZGVmaW5lZC5cbiAgXHRcdGZvciAoeCA9IDA7IHggPCB2TGVuZ3RoOyB4KyspIHtcbiAgXHRcdFx0djFbeF0gPSAtMTtcbiAgXHRcdFx0djJbeF0gPSAtMTtcbiAgXHRcdH1cbiAgXHRcdHYxW3ZPZmZzZXQgKyAxXSA9IDA7XG4gIFx0XHR2Mlt2T2Zmc2V0ICsgMV0gPSAwO1xuICBcdFx0ZGVsdGEgPSB0ZXh0MUxlbmd0aCAtIHRleHQyTGVuZ3RoO1xuXG4gIFx0XHQvLyBJZiB0aGUgdG90YWwgbnVtYmVyIG9mIGNoYXJhY3RlcnMgaXMgb2RkLCB0aGVuIHRoZSBmcm9udCBwYXRoIHdpbGwgY29sbGlkZVxuICBcdFx0Ly8gd2l0aCB0aGUgcmV2ZXJzZSBwYXRoLlxuICBcdFx0ZnJvbnQgPSBkZWx0YSAlIDIgIT09IDA7XG5cbiAgXHRcdC8vIE9mZnNldHMgZm9yIHN0YXJ0IGFuZCBlbmQgb2YgayBsb29wLlxuICBcdFx0Ly8gUHJldmVudHMgbWFwcGluZyBvZiBzcGFjZSBiZXlvbmQgdGhlIGdyaWQuXG4gIFx0XHRrMXN0YXJ0ID0gMDtcbiAgXHRcdGsxZW5kID0gMDtcbiAgXHRcdGsyc3RhcnQgPSAwO1xuICBcdFx0azJlbmQgPSAwO1xuICBcdFx0Zm9yIChkID0gMDsgZCA8IG1heEQ7IGQrKykge1xuXG4gIFx0XHRcdC8vIEJhaWwgb3V0IGlmIGRlYWRsaW5lIGlzIHJlYWNoZWQuXG4gIFx0XHRcdGlmIChuZXcgRGF0ZSgpLmdldFRpbWUoKSA+IGRlYWRsaW5lKSB7XG4gIFx0XHRcdFx0YnJlYWs7XG4gIFx0XHRcdH1cblxuICBcdFx0XHQvLyBXYWxrIHRoZSBmcm9udCBwYXRoIG9uZSBzdGVwLlxuICBcdFx0XHRmb3IgKGsxID0gLWQgKyBrMXN0YXJ0OyBrMSA8PSBkIC0gazFlbmQ7IGsxICs9IDIpIHtcbiAgXHRcdFx0XHRrMU9mZnNldCA9IHZPZmZzZXQgKyBrMTtcbiAgXHRcdFx0XHRpZiAoazEgPT09IC1kIHx8IGsxICE9PSBkICYmIHYxW2sxT2Zmc2V0IC0gMV0gPCB2MVtrMU9mZnNldCArIDFdKSB7XG4gIFx0XHRcdFx0XHR4MSA9IHYxW2sxT2Zmc2V0ICsgMV07XG4gIFx0XHRcdFx0fSBlbHNlIHtcbiAgXHRcdFx0XHRcdHgxID0gdjFbazFPZmZzZXQgLSAxXSArIDE7XG4gIFx0XHRcdFx0fVxuICBcdFx0XHRcdHkxID0geDEgLSBrMTtcbiAgXHRcdFx0XHR3aGlsZSAoeDEgPCB0ZXh0MUxlbmd0aCAmJiB5MSA8IHRleHQyTGVuZ3RoICYmIHRleHQxLmNoYXJBdCh4MSkgPT09IHRleHQyLmNoYXJBdCh5MSkpIHtcbiAgXHRcdFx0XHRcdHgxKys7XG4gIFx0XHRcdFx0XHR5MSsrO1xuICBcdFx0XHRcdH1cbiAgXHRcdFx0XHR2MVtrMU9mZnNldF0gPSB4MTtcbiAgXHRcdFx0XHRpZiAoeDEgPiB0ZXh0MUxlbmd0aCkge1xuXG4gIFx0XHRcdFx0XHQvLyBSYW4gb2ZmIHRoZSByaWdodCBvZiB0aGUgZ3JhcGguXG4gIFx0XHRcdFx0XHRrMWVuZCArPSAyO1xuICBcdFx0XHRcdH0gZWxzZSBpZiAoeTEgPiB0ZXh0Mkxlbmd0aCkge1xuXG4gIFx0XHRcdFx0XHQvLyBSYW4gb2ZmIHRoZSBib3R0b20gb2YgdGhlIGdyYXBoLlxuICBcdFx0XHRcdFx0azFzdGFydCArPSAyO1xuICBcdFx0XHRcdH0gZWxzZSBpZiAoZnJvbnQpIHtcbiAgXHRcdFx0XHRcdGsyT2Zmc2V0ID0gdk9mZnNldCArIGRlbHRhIC0gazE7XG4gIFx0XHRcdFx0XHRpZiAoazJPZmZzZXQgPj0gMCAmJiBrMk9mZnNldCA8IHZMZW5ndGggJiYgdjJbazJPZmZzZXRdICE9PSAtMSkge1xuXG4gIFx0XHRcdFx0XHRcdC8vIE1pcnJvciB4MiBvbnRvIHRvcC1sZWZ0IGNvb3JkaW5hdGUgc3lzdGVtLlxuICBcdFx0XHRcdFx0XHR4MiA9IHRleHQxTGVuZ3RoIC0gdjJbazJPZmZzZXRdO1xuICBcdFx0XHRcdFx0XHRpZiAoeDEgPj0geDIpIHtcblxuICBcdFx0XHRcdFx0XHRcdC8vIE92ZXJsYXAgZGV0ZWN0ZWQuXG4gIFx0XHRcdFx0XHRcdFx0cmV0dXJuIHRoaXMuZGlmZkJpc2VjdFNwbGl0KHRleHQxLCB0ZXh0MiwgeDEsIHkxLCBkZWFkbGluZSk7XG4gIFx0XHRcdFx0XHRcdH1cbiAgXHRcdFx0XHRcdH1cbiAgXHRcdFx0XHR9XG4gIFx0XHRcdH1cblxuICBcdFx0XHQvLyBXYWxrIHRoZSByZXZlcnNlIHBhdGggb25lIHN0ZXAuXG4gIFx0XHRcdGZvciAoazIgPSAtZCArIGsyc3RhcnQ7IGsyIDw9IGQgLSBrMmVuZDsgazIgKz0gMikge1xuICBcdFx0XHRcdGsyT2Zmc2V0ID0gdk9mZnNldCArIGsyO1xuICBcdFx0XHRcdGlmIChrMiA9PT0gLWQgfHwgazIgIT09IGQgJiYgdjJbazJPZmZzZXQgLSAxXSA8IHYyW2syT2Zmc2V0ICsgMV0pIHtcbiAgXHRcdFx0XHRcdHgyID0gdjJbazJPZmZzZXQgKyAxXTtcbiAgXHRcdFx0XHR9IGVsc2Uge1xuICBcdFx0XHRcdFx0eDIgPSB2MltrMk9mZnNldCAtIDFdICsgMTtcbiAgXHRcdFx0XHR9XG4gIFx0XHRcdFx0eTIgPSB4MiAtIGsyO1xuICBcdFx0XHRcdHdoaWxlICh4MiA8IHRleHQxTGVuZ3RoICYmIHkyIDwgdGV4dDJMZW5ndGggJiYgdGV4dDEuY2hhckF0KHRleHQxTGVuZ3RoIC0geDIgLSAxKSA9PT0gdGV4dDIuY2hhckF0KHRleHQyTGVuZ3RoIC0geTIgLSAxKSkge1xuICBcdFx0XHRcdFx0eDIrKztcbiAgXHRcdFx0XHRcdHkyKys7XG4gIFx0XHRcdFx0fVxuICBcdFx0XHRcdHYyW2syT2Zmc2V0XSA9IHgyO1xuICBcdFx0XHRcdGlmICh4MiA+IHRleHQxTGVuZ3RoKSB7XG5cbiAgXHRcdFx0XHRcdC8vIFJhbiBvZmYgdGhlIGxlZnQgb2YgdGhlIGdyYXBoLlxuICBcdFx0XHRcdFx0azJlbmQgKz0gMjtcbiAgXHRcdFx0XHR9IGVsc2UgaWYgKHkyID4gdGV4dDJMZW5ndGgpIHtcblxuICBcdFx0XHRcdFx0Ly8gUmFuIG9mZiB0aGUgdG9wIG9mIHRoZSBncmFwaC5cbiAgXHRcdFx0XHRcdGsyc3RhcnQgKz0gMjtcbiAgXHRcdFx0XHR9IGVsc2UgaWYgKCFmcm9udCkge1xuICBcdFx0XHRcdFx0azFPZmZzZXQgPSB2T2Zmc2V0ICsgZGVsdGEgLSBrMjtcbiAgXHRcdFx0XHRcdGlmIChrMU9mZnNldCA+PSAwICYmIGsxT2Zmc2V0IDwgdkxlbmd0aCAmJiB2MVtrMU9mZnNldF0gIT09IC0xKSB7XG4gIFx0XHRcdFx0XHRcdHgxID0gdjFbazFPZmZzZXRdO1xuICBcdFx0XHRcdFx0XHR5MSA9IHZPZmZzZXQgKyB4MSAtIGsxT2Zmc2V0O1xuXG4gIFx0XHRcdFx0XHRcdC8vIE1pcnJvciB4MiBvbnRvIHRvcC1sZWZ0IGNvb3JkaW5hdGUgc3lzdGVtLlxuICBcdFx0XHRcdFx0XHR4MiA9IHRleHQxTGVuZ3RoIC0geDI7XG4gIFx0XHRcdFx0XHRcdGlmICh4MSA+PSB4Mikge1xuXG4gIFx0XHRcdFx0XHRcdFx0Ly8gT3ZlcmxhcCBkZXRlY3RlZC5cbiAgXHRcdFx0XHRcdFx0XHRyZXR1cm4gdGhpcy5kaWZmQmlzZWN0U3BsaXQodGV4dDEsIHRleHQyLCB4MSwgeTEsIGRlYWRsaW5lKTtcbiAgXHRcdFx0XHRcdFx0fVxuICBcdFx0XHRcdFx0fVxuICBcdFx0XHRcdH1cbiAgXHRcdFx0fVxuICBcdFx0fVxuXG4gIFx0XHQvLyBEaWZmIHRvb2sgdG9vIGxvbmcgYW5kIGhpdCB0aGUgZGVhZGxpbmUgb3JcbiAgXHRcdC8vIG51bWJlciBvZiBkaWZmcyBlcXVhbHMgbnVtYmVyIG9mIGNoYXJhY3RlcnMsIG5vIGNvbW1vbmFsaXR5IGF0IGFsbC5cbiAgXHRcdHJldHVybiBbW0RJRkZfREVMRVRFLCB0ZXh0MV0sIFtESUZGX0lOU0VSVCwgdGV4dDJdXTtcbiAgXHR9O1xuXG4gIFx0LyoqXG4gICAgKiBHaXZlbiB0aGUgbG9jYXRpb24gb2YgdGhlICdtaWRkbGUgc25ha2UnLCBzcGxpdCB0aGUgZGlmZiBpbiB0d28gcGFydHNcbiAgICAqIGFuZCByZWN1cnNlLlxuICAgICogQHBhcmFtIHtzdHJpbmd9IHRleHQxIE9sZCBzdHJpbmcgdG8gYmUgZGlmZmVkLlxuICAgICogQHBhcmFtIHtzdHJpbmd9IHRleHQyIE5ldyBzdHJpbmcgdG8gYmUgZGlmZmVkLlxuICAgICogQHBhcmFtIHtudW1iZXJ9IHggSW5kZXggb2Ygc3BsaXQgcG9pbnQgaW4gdGV4dDEuXG4gICAgKiBAcGFyYW0ge251bWJlcn0geSBJbmRleCBvZiBzcGxpdCBwb2ludCBpbiB0ZXh0Mi5cbiAgICAqIEBwYXJhbSB7bnVtYmVyfSBkZWFkbGluZSBUaW1lIGF0IHdoaWNoIHRvIGJhaWwgaWYgbm90IHlldCBjb21wbGV0ZS5cbiAgICAqIEByZXR1cm4geyFBcnJheS48IURpZmZNYXRjaFBhdGNoLkRpZmY+fSBBcnJheSBvZiBkaWZmIHR1cGxlcy5cbiAgICAqIEBwcml2YXRlXG4gICAgKi9cbiAgXHREaWZmTWF0Y2hQYXRjaC5wcm90b3R5cGUuZGlmZkJpc2VjdFNwbGl0ID0gZnVuY3Rpb24gKHRleHQxLCB0ZXh0MiwgeCwgeSwgZGVhZGxpbmUpIHtcbiAgXHRcdHZhciB0ZXh0MWEsIHRleHQxYiwgdGV4dDJhLCB0ZXh0MmIsIGRpZmZzLCBkaWZmc2I7XG4gIFx0XHR0ZXh0MWEgPSB0ZXh0MS5zdWJzdHJpbmcoMCwgeCk7XG4gIFx0XHR0ZXh0MmEgPSB0ZXh0Mi5zdWJzdHJpbmcoMCwgeSk7XG4gIFx0XHR0ZXh0MWIgPSB0ZXh0MS5zdWJzdHJpbmcoeCk7XG4gIFx0XHR0ZXh0MmIgPSB0ZXh0Mi5zdWJzdHJpbmcoeSk7XG5cbiAgXHRcdC8vIENvbXB1dGUgYm90aCBkaWZmcyBzZXJpYWxseS5cbiAgXHRcdGRpZmZzID0gdGhpcy5EaWZmTWFpbih0ZXh0MWEsIHRleHQyYSwgZmFsc2UsIGRlYWRsaW5lKTtcbiAgXHRcdGRpZmZzYiA9IHRoaXMuRGlmZk1haW4odGV4dDFiLCB0ZXh0MmIsIGZhbHNlLCBkZWFkbGluZSk7XG5cbiAgXHRcdHJldHVybiBkaWZmcy5jb25jYXQoZGlmZnNiKTtcbiAgXHR9O1xuXG4gIFx0LyoqXG4gICAgKiBSZWR1Y2UgdGhlIG51bWJlciBvZiBlZGl0cyBieSBlbGltaW5hdGluZyBzZW1hbnRpY2FsbHkgdHJpdmlhbCBlcXVhbGl0aWVzLlxuICAgICogQHBhcmFtIHshQXJyYXkuPCFEaWZmTWF0Y2hQYXRjaC5EaWZmPn0gZGlmZnMgQXJyYXkgb2YgZGlmZiB0dXBsZXMuXG4gICAgKi9cbiAgXHREaWZmTWF0Y2hQYXRjaC5wcm90b3R5cGUuZGlmZkNsZWFudXBTZW1hbnRpYyA9IGZ1bmN0aW9uIChkaWZmcykge1xuICBcdFx0dmFyIGNoYW5nZXMsIGVxdWFsaXRpZXMsIGVxdWFsaXRpZXNMZW5ndGgsIGxhc3RlcXVhbGl0eSwgcG9pbnRlciwgbGVuZ3RoSW5zZXJ0aW9uczIsIGxlbmd0aERlbGV0aW9uczIsIGxlbmd0aEluc2VydGlvbnMxLCBsZW5ndGhEZWxldGlvbnMxLCBkZWxldGlvbiwgaW5zZXJ0aW9uLCBvdmVybGFwTGVuZ3RoMSwgb3ZlcmxhcExlbmd0aDI7XG4gIFx0XHRjaGFuZ2VzID0gZmFsc2U7XG4gIFx0XHRlcXVhbGl0aWVzID0gW107IC8vIFN0YWNrIG9mIGluZGljZXMgd2hlcmUgZXF1YWxpdGllcyBhcmUgZm91bmQuXG4gIFx0XHRlcXVhbGl0aWVzTGVuZ3RoID0gMDsgLy8gS2VlcGluZyBvdXIgb3duIGxlbmd0aCB2YXIgaXMgZmFzdGVyIGluIEpTLlxuICBcdFx0LyoqIEB0eXBlIHs/c3RyaW5nfSAqL1xuICBcdFx0bGFzdGVxdWFsaXR5ID0gbnVsbDtcblxuICBcdFx0Ly8gQWx3YXlzIGVxdWFsIHRvIGRpZmZzW2VxdWFsaXRpZXNbZXF1YWxpdGllc0xlbmd0aCAtIDFdXVsxXVxuICBcdFx0cG9pbnRlciA9IDA7IC8vIEluZGV4IG9mIGN1cnJlbnQgcG9zaXRpb24uXG5cbiAgXHRcdC8vIE51bWJlciBvZiBjaGFyYWN0ZXJzIHRoYXQgY2hhbmdlZCBwcmlvciB0byB0aGUgZXF1YWxpdHkuXG4gIFx0XHRsZW5ndGhJbnNlcnRpb25zMSA9IDA7XG4gIFx0XHRsZW5ndGhEZWxldGlvbnMxID0gMDtcblxuICBcdFx0Ly8gTnVtYmVyIG9mIGNoYXJhY3RlcnMgdGhhdCBjaGFuZ2VkIGFmdGVyIHRoZSBlcXVhbGl0eS5cbiAgXHRcdGxlbmd0aEluc2VydGlvbnMyID0gMDtcbiAgXHRcdGxlbmd0aERlbGV0aW9uczIgPSAwO1xuICBcdFx0d2hpbGUgKHBvaW50ZXIgPCBkaWZmcy5sZW5ndGgpIHtcbiAgXHRcdFx0aWYgKGRpZmZzW3BvaW50ZXJdWzBdID09PSBESUZGX0VRVUFMKSB7XG4gIFx0XHRcdFx0Ly8gRXF1YWxpdHkgZm91bmQuXG4gIFx0XHRcdFx0ZXF1YWxpdGllc1tlcXVhbGl0aWVzTGVuZ3RoKytdID0gcG9pbnRlcjtcbiAgXHRcdFx0XHRsZW5ndGhJbnNlcnRpb25zMSA9IGxlbmd0aEluc2VydGlvbnMyO1xuICBcdFx0XHRcdGxlbmd0aERlbGV0aW9uczEgPSBsZW5ndGhEZWxldGlvbnMyO1xuICBcdFx0XHRcdGxlbmd0aEluc2VydGlvbnMyID0gMDtcbiAgXHRcdFx0XHRsZW5ndGhEZWxldGlvbnMyID0gMDtcbiAgXHRcdFx0XHRsYXN0ZXF1YWxpdHkgPSBkaWZmc1twb2ludGVyXVsxXTtcbiAgXHRcdFx0fSBlbHNlIHtcbiAgXHRcdFx0XHQvLyBBbiBpbnNlcnRpb24gb3IgZGVsZXRpb24uXG4gIFx0XHRcdFx0aWYgKGRpZmZzW3BvaW50ZXJdWzBdID09PSBESUZGX0lOU0VSVCkge1xuICBcdFx0XHRcdFx0bGVuZ3RoSW5zZXJ0aW9uczIgKz0gZGlmZnNbcG9pbnRlcl1bMV0ubGVuZ3RoO1xuICBcdFx0XHRcdH0gZWxzZSB7XG4gIFx0XHRcdFx0XHRsZW5ndGhEZWxldGlvbnMyICs9IGRpZmZzW3BvaW50ZXJdWzFdLmxlbmd0aDtcbiAgXHRcdFx0XHR9XG5cbiAgXHRcdFx0XHQvLyBFbGltaW5hdGUgYW4gZXF1YWxpdHkgdGhhdCBpcyBzbWFsbGVyIG9yIGVxdWFsIHRvIHRoZSBlZGl0cyBvbiBib3RoXG4gIFx0XHRcdFx0Ly8gc2lkZXMgb2YgaXQuXG4gIFx0XHRcdFx0aWYgKGxhc3RlcXVhbGl0eSAmJiBsYXN0ZXF1YWxpdHkubGVuZ3RoIDw9IE1hdGgubWF4KGxlbmd0aEluc2VydGlvbnMxLCBsZW5ndGhEZWxldGlvbnMxKSAmJiBsYXN0ZXF1YWxpdHkubGVuZ3RoIDw9IE1hdGgubWF4KGxlbmd0aEluc2VydGlvbnMyLCBsZW5ndGhEZWxldGlvbnMyKSkge1xuXG4gIFx0XHRcdFx0XHQvLyBEdXBsaWNhdGUgcmVjb3JkLlxuICBcdFx0XHRcdFx0ZGlmZnMuc3BsaWNlKGVxdWFsaXRpZXNbZXF1YWxpdGllc0xlbmd0aCAtIDFdLCAwLCBbRElGRl9ERUxFVEUsIGxhc3RlcXVhbGl0eV0pO1xuXG4gIFx0XHRcdFx0XHQvLyBDaGFuZ2Ugc2Vjb25kIGNvcHkgdG8gaW5zZXJ0LlxuICBcdFx0XHRcdFx0ZGlmZnNbZXF1YWxpdGllc1tlcXVhbGl0aWVzTGVuZ3RoIC0gMV0gKyAxXVswXSA9IERJRkZfSU5TRVJUO1xuXG4gIFx0XHRcdFx0XHQvLyBUaHJvdyBhd2F5IHRoZSBlcXVhbGl0eSB3ZSBqdXN0IGRlbGV0ZWQuXG4gIFx0XHRcdFx0XHRlcXVhbGl0aWVzTGVuZ3RoLS07XG5cbiAgXHRcdFx0XHRcdC8vIFRocm93IGF3YXkgdGhlIHByZXZpb3VzIGVxdWFsaXR5IChpdCBuZWVkcyB0byBiZSByZWV2YWx1YXRlZCkuXG4gIFx0XHRcdFx0XHRlcXVhbGl0aWVzTGVuZ3RoLS07XG4gIFx0XHRcdFx0XHRwb2ludGVyID0gZXF1YWxpdGllc0xlbmd0aCA+IDAgPyBlcXVhbGl0aWVzW2VxdWFsaXRpZXNMZW5ndGggLSAxXSA6IC0xO1xuXG4gIFx0XHRcdFx0XHQvLyBSZXNldCB0aGUgY291bnRlcnMuXG4gIFx0XHRcdFx0XHRsZW5ndGhJbnNlcnRpb25zMSA9IDA7XG4gIFx0XHRcdFx0XHRsZW5ndGhEZWxldGlvbnMxID0gMDtcbiAgXHRcdFx0XHRcdGxlbmd0aEluc2VydGlvbnMyID0gMDtcbiAgXHRcdFx0XHRcdGxlbmd0aERlbGV0aW9uczIgPSAwO1xuICBcdFx0XHRcdFx0bGFzdGVxdWFsaXR5ID0gbnVsbDtcbiAgXHRcdFx0XHRcdGNoYW5nZXMgPSB0cnVlO1xuICBcdFx0XHRcdH1cbiAgXHRcdFx0fVxuICBcdFx0XHRwb2ludGVyKys7XG4gIFx0XHR9XG5cbiAgXHRcdC8vIE5vcm1hbGl6ZSB0aGUgZGlmZi5cbiAgXHRcdGlmIChjaGFuZ2VzKSB7XG4gIFx0XHRcdHRoaXMuZGlmZkNsZWFudXBNZXJnZShkaWZmcyk7XG4gIFx0XHR9XG5cbiAgXHRcdC8vIEZpbmQgYW55IG92ZXJsYXBzIGJldHdlZW4gZGVsZXRpb25zIGFuZCBpbnNlcnRpb25zLlxuICBcdFx0Ly8gZS5nOiA8ZGVsPmFiY3h4eDwvZGVsPjxpbnM+eHh4ZGVmPC9pbnM+XG4gIFx0XHQvLyAgIC0+IDxkZWw+YWJjPC9kZWw+eHh4PGlucz5kZWY8L2lucz5cbiAgXHRcdC8vIGUuZzogPGRlbD54eHhhYmM8L2RlbD48aW5zPmRlZnh4eDwvaW5zPlxuICBcdFx0Ly8gICAtPiA8aW5zPmRlZjwvaW5zPnh4eDxkZWw+YWJjPC9kZWw+XG4gIFx0XHQvLyBPbmx5IGV4dHJhY3QgYW4gb3ZlcmxhcCBpZiBpdCBpcyBhcyBiaWcgYXMgdGhlIGVkaXQgYWhlYWQgb3IgYmVoaW5kIGl0LlxuICBcdFx0cG9pbnRlciA9IDE7XG4gIFx0XHR3aGlsZSAocG9pbnRlciA8IGRpZmZzLmxlbmd0aCkge1xuICBcdFx0XHRpZiAoZGlmZnNbcG9pbnRlciAtIDFdWzBdID09PSBESUZGX0RFTEVURSAmJiBkaWZmc1twb2ludGVyXVswXSA9PT0gRElGRl9JTlNFUlQpIHtcbiAgXHRcdFx0XHRkZWxldGlvbiA9IGRpZmZzW3BvaW50ZXIgLSAxXVsxXTtcbiAgXHRcdFx0XHRpbnNlcnRpb24gPSBkaWZmc1twb2ludGVyXVsxXTtcbiAgXHRcdFx0XHRvdmVybGFwTGVuZ3RoMSA9IHRoaXMuZGlmZkNvbW1vbk92ZXJsYXAoZGVsZXRpb24sIGluc2VydGlvbik7XG4gIFx0XHRcdFx0b3ZlcmxhcExlbmd0aDIgPSB0aGlzLmRpZmZDb21tb25PdmVybGFwKGluc2VydGlvbiwgZGVsZXRpb24pO1xuICBcdFx0XHRcdGlmIChvdmVybGFwTGVuZ3RoMSA+PSBvdmVybGFwTGVuZ3RoMikge1xuICBcdFx0XHRcdFx0aWYgKG92ZXJsYXBMZW5ndGgxID49IGRlbGV0aW9uLmxlbmd0aCAvIDIgfHwgb3ZlcmxhcExlbmd0aDEgPj0gaW5zZXJ0aW9uLmxlbmd0aCAvIDIpIHtcblxuICBcdFx0XHRcdFx0XHQvLyBPdmVybGFwIGZvdW5kLiAgSW5zZXJ0IGFuIGVxdWFsaXR5IGFuZCB0cmltIHRoZSBzdXJyb3VuZGluZyBlZGl0cy5cbiAgXHRcdFx0XHRcdFx0ZGlmZnMuc3BsaWNlKHBvaW50ZXIsIDAsIFtESUZGX0VRVUFMLCBpbnNlcnRpb24uc3Vic3RyaW5nKDAsIG92ZXJsYXBMZW5ndGgxKV0pO1xuICBcdFx0XHRcdFx0XHRkaWZmc1twb2ludGVyIC0gMV1bMV0gPSBkZWxldGlvbi5zdWJzdHJpbmcoMCwgZGVsZXRpb24ubGVuZ3RoIC0gb3ZlcmxhcExlbmd0aDEpO1xuICBcdFx0XHRcdFx0XHRkaWZmc1twb2ludGVyICsgMV1bMV0gPSBpbnNlcnRpb24uc3Vic3RyaW5nKG92ZXJsYXBMZW5ndGgxKTtcbiAgXHRcdFx0XHRcdFx0cG9pbnRlcisrO1xuICBcdFx0XHRcdFx0fVxuICBcdFx0XHRcdH0gZWxzZSB7XG4gIFx0XHRcdFx0XHRpZiAob3ZlcmxhcExlbmd0aDIgPj0gZGVsZXRpb24ubGVuZ3RoIC8gMiB8fCBvdmVybGFwTGVuZ3RoMiA+PSBpbnNlcnRpb24ubGVuZ3RoIC8gMikge1xuXG4gIFx0XHRcdFx0XHRcdC8vIFJldmVyc2Ugb3ZlcmxhcCBmb3VuZC5cbiAgXHRcdFx0XHRcdFx0Ly8gSW5zZXJ0IGFuIGVxdWFsaXR5IGFuZCBzd2FwIGFuZCB0cmltIHRoZSBzdXJyb3VuZGluZyBlZGl0cy5cbiAgXHRcdFx0XHRcdFx0ZGlmZnMuc3BsaWNlKHBvaW50ZXIsIDAsIFtESUZGX0VRVUFMLCBkZWxldGlvbi5zdWJzdHJpbmcoMCwgb3ZlcmxhcExlbmd0aDIpXSk7XG5cbiAgXHRcdFx0XHRcdFx0ZGlmZnNbcG9pbnRlciAtIDFdWzBdID0gRElGRl9JTlNFUlQ7XG4gIFx0XHRcdFx0XHRcdGRpZmZzW3BvaW50ZXIgLSAxXVsxXSA9IGluc2VydGlvbi5zdWJzdHJpbmcoMCwgaW5zZXJ0aW9uLmxlbmd0aCAtIG92ZXJsYXBMZW5ndGgyKTtcbiAgXHRcdFx0XHRcdFx0ZGlmZnNbcG9pbnRlciArIDFdWzBdID0gRElGRl9ERUxFVEU7XG4gIFx0XHRcdFx0XHRcdGRpZmZzW3BvaW50ZXIgKyAxXVsxXSA9IGRlbGV0aW9uLnN1YnN0cmluZyhvdmVybGFwTGVuZ3RoMik7XG4gIFx0XHRcdFx0XHRcdHBvaW50ZXIrKztcbiAgXHRcdFx0XHRcdH1cbiAgXHRcdFx0XHR9XG4gIFx0XHRcdFx0cG9pbnRlcisrO1xuICBcdFx0XHR9XG4gIFx0XHRcdHBvaW50ZXIrKztcbiAgXHRcdH1cbiAgXHR9O1xuXG4gIFx0LyoqXG4gICAgKiBEZXRlcm1pbmUgaWYgdGhlIHN1ZmZpeCBvZiBvbmUgc3RyaW5nIGlzIHRoZSBwcmVmaXggb2YgYW5vdGhlci5cbiAgICAqIEBwYXJhbSB7c3RyaW5nfSB0ZXh0MSBGaXJzdCBzdHJpbmcuXG4gICAgKiBAcGFyYW0ge3N0cmluZ30gdGV4dDIgU2Vjb25kIHN0cmluZy5cbiAgICAqIEByZXR1cm4ge251bWJlcn0gVGhlIG51bWJlciBvZiBjaGFyYWN0ZXJzIGNvbW1vbiB0byB0aGUgZW5kIG9mIHRoZSBmaXJzdFxuICAgICogICAgIHN0cmluZyBhbmQgdGhlIHN0YXJ0IG9mIHRoZSBzZWNvbmQgc3RyaW5nLlxuICAgICogQHByaXZhdGVcbiAgICAqL1xuICBcdERpZmZNYXRjaFBhdGNoLnByb3RvdHlwZS5kaWZmQ29tbW9uT3ZlcmxhcCA9IGZ1bmN0aW9uICh0ZXh0MSwgdGV4dDIpIHtcbiAgXHRcdHZhciB0ZXh0MUxlbmd0aCwgdGV4dDJMZW5ndGgsIHRleHRMZW5ndGgsIGJlc3QsIGxlbmd0aCwgcGF0dGVybiwgZm91bmQ7XG5cbiAgXHRcdC8vIENhY2hlIHRoZSB0ZXh0IGxlbmd0aHMgdG8gcHJldmVudCBtdWx0aXBsZSBjYWxscy5cbiAgXHRcdHRleHQxTGVuZ3RoID0gdGV4dDEubGVuZ3RoO1xuICBcdFx0dGV4dDJMZW5ndGggPSB0ZXh0Mi5sZW5ndGg7XG5cbiAgXHRcdC8vIEVsaW1pbmF0ZSB0aGUgbnVsbCBjYXNlLlxuICBcdFx0aWYgKHRleHQxTGVuZ3RoID09PSAwIHx8IHRleHQyTGVuZ3RoID09PSAwKSB7XG4gIFx0XHRcdHJldHVybiAwO1xuICBcdFx0fVxuXG4gIFx0XHQvLyBUcnVuY2F0ZSB0aGUgbG9uZ2VyIHN0cmluZy5cbiAgXHRcdGlmICh0ZXh0MUxlbmd0aCA+IHRleHQyTGVuZ3RoKSB7XG4gIFx0XHRcdHRleHQxID0gdGV4dDEuc3Vic3RyaW5nKHRleHQxTGVuZ3RoIC0gdGV4dDJMZW5ndGgpO1xuICBcdFx0fSBlbHNlIGlmICh0ZXh0MUxlbmd0aCA8IHRleHQyTGVuZ3RoKSB7XG4gIFx0XHRcdHRleHQyID0gdGV4dDIuc3Vic3RyaW5nKDAsIHRleHQxTGVuZ3RoKTtcbiAgXHRcdH1cbiAgXHRcdHRleHRMZW5ndGggPSBNYXRoLm1pbih0ZXh0MUxlbmd0aCwgdGV4dDJMZW5ndGgpO1xuXG4gIFx0XHQvLyBRdWljayBjaGVjayBmb3IgdGhlIHdvcnN0IGNhc2UuXG4gIFx0XHRpZiAodGV4dDEgPT09IHRleHQyKSB7XG4gIFx0XHRcdHJldHVybiB0ZXh0TGVuZ3RoO1xuICBcdFx0fVxuXG4gIFx0XHQvLyBTdGFydCBieSBsb29raW5nIGZvciBhIHNpbmdsZSBjaGFyYWN0ZXIgbWF0Y2hcbiAgXHRcdC8vIGFuZCBpbmNyZWFzZSBsZW5ndGggdW50aWwgbm8gbWF0Y2ggaXMgZm91bmQuXG4gIFx0XHQvLyBQZXJmb3JtYW5jZSBhbmFseXNpczogaHR0cHM6Ly9uZWlsLmZyYXNlci5uYW1lL25ld3MvMjAxMC8xMS8wNC9cbiAgXHRcdGJlc3QgPSAwO1xuICBcdFx0bGVuZ3RoID0gMTtcbiAgXHRcdHdoaWxlICh0cnVlKSB7XG4gIFx0XHRcdHBhdHRlcm4gPSB0ZXh0MS5zdWJzdHJpbmcodGV4dExlbmd0aCAtIGxlbmd0aCk7XG4gIFx0XHRcdGZvdW5kID0gdGV4dDIuaW5kZXhPZihwYXR0ZXJuKTtcbiAgXHRcdFx0aWYgKGZvdW5kID09PSAtMSkge1xuICBcdFx0XHRcdHJldHVybiBiZXN0O1xuICBcdFx0XHR9XG4gIFx0XHRcdGxlbmd0aCArPSBmb3VuZDtcbiAgXHRcdFx0aWYgKGZvdW5kID09PSAwIHx8IHRleHQxLnN1YnN0cmluZyh0ZXh0TGVuZ3RoIC0gbGVuZ3RoKSA9PT0gdGV4dDIuc3Vic3RyaW5nKDAsIGxlbmd0aCkpIHtcbiAgXHRcdFx0XHRiZXN0ID0gbGVuZ3RoO1xuICBcdFx0XHRcdGxlbmd0aCsrO1xuICBcdFx0XHR9XG4gIFx0XHR9XG4gIFx0fTtcblxuICBcdC8qKlxuICAgICogU3BsaXQgdHdvIHRleHRzIGludG8gYW4gYXJyYXkgb2Ygc3RyaW5ncy4gIFJlZHVjZSB0aGUgdGV4dHMgdG8gYSBzdHJpbmcgb2ZcbiAgICAqIGhhc2hlcyB3aGVyZSBlYWNoIFVuaWNvZGUgY2hhcmFjdGVyIHJlcHJlc2VudHMgb25lIGxpbmUuXG4gICAgKiBAcGFyYW0ge3N0cmluZ30gdGV4dDEgRmlyc3Qgc3RyaW5nLlxuICAgICogQHBhcmFtIHtzdHJpbmd9IHRleHQyIFNlY29uZCBzdHJpbmcuXG4gICAgKiBAcmV0dXJuIHt7Y2hhcnMxOiBzdHJpbmcsIGNoYXJzMjogc3RyaW5nLCBsaW5lQXJyYXk6ICFBcnJheS48c3RyaW5nPn19XG4gICAgKiAgICAgQW4gb2JqZWN0IGNvbnRhaW5pbmcgdGhlIGVuY29kZWQgdGV4dDEsIHRoZSBlbmNvZGVkIHRleHQyIGFuZFxuICAgICogICAgIHRoZSBhcnJheSBvZiB1bmlxdWUgc3RyaW5ncy5cbiAgICAqICAgICBUaGUgemVyb3RoIGVsZW1lbnQgb2YgdGhlIGFycmF5IG9mIHVuaXF1ZSBzdHJpbmdzIGlzIGludGVudGlvbmFsbHkgYmxhbmsuXG4gICAgKiBAcHJpdmF0ZVxuICAgICovXG4gIFx0RGlmZk1hdGNoUGF0Y2gucHJvdG90eXBlLmRpZmZMaW5lc1RvQ2hhcnMgPSBmdW5jdGlvbiAodGV4dDEsIHRleHQyKSB7XG4gIFx0XHR2YXIgbGluZUFycmF5LCBsaW5lSGFzaCwgY2hhcnMxLCBjaGFyczI7XG4gIFx0XHRsaW5lQXJyYXkgPSBbXTsgLy8gRS5nLiBsaW5lQXJyYXlbNF0gPT09ICdIZWxsb1xcbidcbiAgXHRcdGxpbmVIYXNoID0ge307IC8vIEUuZy4gbGluZUhhc2hbJ0hlbGxvXFxuJ10gPT09IDRcblxuICBcdFx0Ly8gJ1xceDAwJyBpcyBhIHZhbGlkIGNoYXJhY3RlciwgYnV0IHZhcmlvdXMgZGVidWdnZXJzIGRvbid0IGxpa2UgaXQuXG4gIFx0XHQvLyBTbyB3ZSdsbCBpbnNlcnQgYSBqdW5rIGVudHJ5IHRvIGF2b2lkIGdlbmVyYXRpbmcgYSBudWxsIGNoYXJhY3Rlci5cbiAgXHRcdGxpbmVBcnJheVswXSA9IFwiXCI7XG5cbiAgXHRcdC8qKlxuICAgICAqIFNwbGl0IGEgdGV4dCBpbnRvIGFuIGFycmF5IG9mIHN0cmluZ3MuICBSZWR1Y2UgdGhlIHRleHRzIHRvIGEgc3RyaW5nIG9mXG4gICAgICogaGFzaGVzIHdoZXJlIGVhY2ggVW5pY29kZSBjaGFyYWN0ZXIgcmVwcmVzZW50cyBvbmUgbGluZS5cbiAgICAgKiBNb2RpZmllcyBsaW5lYXJyYXkgYW5kIGxpbmVoYXNoIHRocm91Z2ggYmVpbmcgYSBjbG9zdXJlLlxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSB0ZXh0IFN0cmluZyB0byBlbmNvZGUuXG4gICAgICogQHJldHVybiB7c3RyaW5nfSBFbmNvZGVkIHN0cmluZy5cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICBcdFx0ZnVuY3Rpb24gZGlmZkxpbmVzVG9DaGFyc011bmdlKHRleHQpIHtcbiAgXHRcdFx0dmFyIGNoYXJzLCBsaW5lU3RhcnQsIGxpbmVFbmQsIGxpbmVBcnJheUxlbmd0aCwgbGluZTtcbiAgXHRcdFx0Y2hhcnMgPSBcIlwiO1xuXG4gIFx0XHRcdC8vIFdhbGsgdGhlIHRleHQsIHB1bGxpbmcgb3V0IGEgc3Vic3RyaW5nIGZvciBlYWNoIGxpbmUuXG4gIFx0XHRcdC8vIHRleHQuc3BsaXQoJ1xcbicpIHdvdWxkIHdvdWxkIHRlbXBvcmFyaWx5IGRvdWJsZSBvdXIgbWVtb3J5IGZvb3RwcmludC5cbiAgXHRcdFx0Ly8gTW9kaWZ5aW5nIHRleHQgd291bGQgY3JlYXRlIG1hbnkgbGFyZ2Ugc3RyaW5ncyB0byBnYXJiYWdlIGNvbGxlY3QuXG4gIFx0XHRcdGxpbmVTdGFydCA9IDA7XG4gIFx0XHRcdGxpbmVFbmQgPSAtMTtcblxuICBcdFx0XHQvLyBLZWVwaW5nIG91ciBvd24gbGVuZ3RoIHZhcmlhYmxlIGlzIGZhc3RlciB0aGFuIGxvb2tpbmcgaXQgdXAuXG4gIFx0XHRcdGxpbmVBcnJheUxlbmd0aCA9IGxpbmVBcnJheS5sZW5ndGg7XG4gIFx0XHRcdHdoaWxlIChsaW5lRW5kIDwgdGV4dC5sZW5ndGggLSAxKSB7XG4gIFx0XHRcdFx0bGluZUVuZCA9IHRleHQuaW5kZXhPZihcIlxcblwiLCBsaW5lU3RhcnQpO1xuICBcdFx0XHRcdGlmIChsaW5lRW5kID09PSAtMSkge1xuICBcdFx0XHRcdFx0bGluZUVuZCA9IHRleHQubGVuZ3RoIC0gMTtcbiAgXHRcdFx0XHR9XG4gIFx0XHRcdFx0bGluZSA9IHRleHQuc3Vic3RyaW5nKGxpbmVTdGFydCwgbGluZUVuZCArIDEpO1xuICBcdFx0XHRcdGxpbmVTdGFydCA9IGxpbmVFbmQgKyAxO1xuXG4gIFx0XHRcdFx0dmFyIGxpbmVIYXNoRXhpc3RzID0gbGluZUhhc2guaGFzT3duUHJvcGVydHkgPyBsaW5lSGFzaC5oYXNPd25Qcm9wZXJ0eShsaW5lKSA6IGxpbmVIYXNoW2xpbmVdICE9PSB1bmRlZmluZWQ7XG5cbiAgXHRcdFx0XHRpZiAobGluZUhhc2hFeGlzdHMpIHtcbiAgXHRcdFx0XHRcdGNoYXJzICs9IFN0cmluZy5mcm9tQ2hhckNvZGUobGluZUhhc2hbbGluZV0pO1xuICBcdFx0XHRcdH0gZWxzZSB7XG4gIFx0XHRcdFx0XHRjaGFycyArPSBTdHJpbmcuZnJvbUNoYXJDb2RlKGxpbmVBcnJheUxlbmd0aCk7XG4gIFx0XHRcdFx0XHRsaW5lSGFzaFtsaW5lXSA9IGxpbmVBcnJheUxlbmd0aDtcbiAgXHRcdFx0XHRcdGxpbmVBcnJheVtsaW5lQXJyYXlMZW5ndGgrK10gPSBsaW5lO1xuICBcdFx0XHRcdH1cbiAgXHRcdFx0fVxuICBcdFx0XHRyZXR1cm4gY2hhcnM7XG4gIFx0XHR9XG5cbiAgXHRcdGNoYXJzMSA9IGRpZmZMaW5lc1RvQ2hhcnNNdW5nZSh0ZXh0MSk7XG4gIFx0XHRjaGFyczIgPSBkaWZmTGluZXNUb0NoYXJzTXVuZ2UodGV4dDIpO1xuICBcdFx0cmV0dXJuIHtcbiAgXHRcdFx0Y2hhcnMxOiBjaGFyczEsXG4gIFx0XHRcdGNoYXJzMjogY2hhcnMyLFxuICBcdFx0XHRsaW5lQXJyYXk6IGxpbmVBcnJheVxuICBcdFx0fTtcbiAgXHR9O1xuXG4gIFx0LyoqXG4gICAgKiBSZWh5ZHJhdGUgdGhlIHRleHQgaW4gYSBkaWZmIGZyb20gYSBzdHJpbmcgb2YgbGluZSBoYXNoZXMgdG8gcmVhbCBsaW5lcyBvZlxuICAgICogdGV4dC5cbiAgICAqIEBwYXJhbSB7IUFycmF5LjwhRGlmZk1hdGNoUGF0Y2guRGlmZj59IGRpZmZzIEFycmF5IG9mIGRpZmYgdHVwbGVzLlxuICAgICogQHBhcmFtIHshQXJyYXkuPHN0cmluZz59IGxpbmVBcnJheSBBcnJheSBvZiB1bmlxdWUgc3RyaW5ncy5cbiAgICAqIEBwcml2YXRlXG4gICAgKi9cbiAgXHREaWZmTWF0Y2hQYXRjaC5wcm90b3R5cGUuZGlmZkNoYXJzVG9MaW5lcyA9IGZ1bmN0aW9uIChkaWZmcywgbGluZUFycmF5KSB7XG4gIFx0XHR2YXIgeCwgY2hhcnMsIHRleHQsIHk7XG4gIFx0XHRmb3IgKHggPSAwOyB4IDwgZGlmZnMubGVuZ3RoOyB4KyspIHtcbiAgXHRcdFx0Y2hhcnMgPSBkaWZmc1t4XVsxXTtcbiAgXHRcdFx0dGV4dCA9IFtdO1xuICBcdFx0XHRmb3IgKHkgPSAwOyB5IDwgY2hhcnMubGVuZ3RoOyB5KyspIHtcbiAgXHRcdFx0XHR0ZXh0W3ldID0gbGluZUFycmF5W2NoYXJzLmNoYXJDb2RlQXQoeSldO1xuICBcdFx0XHR9XG4gIFx0XHRcdGRpZmZzW3hdWzFdID0gdGV4dC5qb2luKFwiXCIpO1xuICBcdFx0fVxuICBcdH07XG5cbiAgXHQvKipcbiAgICAqIFJlb3JkZXIgYW5kIG1lcmdlIGxpa2UgZWRpdCBzZWN0aW9ucy4gIE1lcmdlIGVxdWFsaXRpZXMuXG4gICAgKiBBbnkgZWRpdCBzZWN0aW9uIGNhbiBtb3ZlIGFzIGxvbmcgYXMgaXQgZG9lc24ndCBjcm9zcyBhbiBlcXVhbGl0eS5cbiAgICAqIEBwYXJhbSB7IUFycmF5LjwhRGlmZk1hdGNoUGF0Y2guRGlmZj59IGRpZmZzIEFycmF5IG9mIGRpZmYgdHVwbGVzLlxuICAgICovXG4gIFx0RGlmZk1hdGNoUGF0Y2gucHJvdG90eXBlLmRpZmZDbGVhbnVwTWVyZ2UgPSBmdW5jdGlvbiAoZGlmZnMpIHtcbiAgXHRcdHZhciBwb2ludGVyLCBjb3VudERlbGV0ZSwgY291bnRJbnNlcnQsIHRleHRJbnNlcnQsIHRleHREZWxldGUsIGNvbW1vbmxlbmd0aCwgY2hhbmdlcywgZGlmZlBvaW50ZXIsIHBvc2l0aW9uO1xuICBcdFx0ZGlmZnMucHVzaChbRElGRl9FUVVBTCwgXCJcIl0pOyAvLyBBZGQgYSBkdW1teSBlbnRyeSBhdCB0aGUgZW5kLlxuICBcdFx0cG9pbnRlciA9IDA7XG4gIFx0XHRjb3VudERlbGV0ZSA9IDA7XG4gIFx0XHRjb3VudEluc2VydCA9IDA7XG4gIFx0XHR0ZXh0RGVsZXRlID0gXCJcIjtcbiAgXHRcdHRleHRJbnNlcnQgPSBcIlwiO1xuXG4gIFx0XHR3aGlsZSAocG9pbnRlciA8IGRpZmZzLmxlbmd0aCkge1xuICBcdFx0XHRzd2l0Y2ggKGRpZmZzW3BvaW50ZXJdWzBdKSB7XG4gIFx0XHRcdFx0Y2FzZSBESUZGX0lOU0VSVDpcbiAgXHRcdFx0XHRcdGNvdW50SW5zZXJ0Kys7XG4gIFx0XHRcdFx0XHR0ZXh0SW5zZXJ0ICs9IGRpZmZzW3BvaW50ZXJdWzFdO1xuICBcdFx0XHRcdFx0cG9pbnRlcisrO1xuICBcdFx0XHRcdFx0YnJlYWs7XG4gIFx0XHRcdFx0Y2FzZSBESUZGX0RFTEVURTpcbiAgXHRcdFx0XHRcdGNvdW50RGVsZXRlKys7XG4gIFx0XHRcdFx0XHR0ZXh0RGVsZXRlICs9IGRpZmZzW3BvaW50ZXJdWzFdO1xuICBcdFx0XHRcdFx0cG9pbnRlcisrO1xuICBcdFx0XHRcdFx0YnJlYWs7XG4gIFx0XHRcdFx0Y2FzZSBESUZGX0VRVUFMOlxuXG4gIFx0XHRcdFx0XHQvLyBVcG9uIHJlYWNoaW5nIGFuIGVxdWFsaXR5LCBjaGVjayBmb3IgcHJpb3IgcmVkdW5kYW5jaWVzLlxuICBcdFx0XHRcdFx0aWYgKGNvdW50RGVsZXRlICsgY291bnRJbnNlcnQgPiAxKSB7XG4gIFx0XHRcdFx0XHRcdGlmIChjb3VudERlbGV0ZSAhPT0gMCAmJiBjb3VudEluc2VydCAhPT0gMCkge1xuXG4gIFx0XHRcdFx0XHRcdFx0Ly8gRmFjdG9yIG91dCBhbnkgY29tbW9uIHByZWZpeGVzLlxuICBcdFx0XHRcdFx0XHRcdGNvbW1vbmxlbmd0aCA9IHRoaXMuZGlmZkNvbW1vblByZWZpeCh0ZXh0SW5zZXJ0LCB0ZXh0RGVsZXRlKTtcbiAgXHRcdFx0XHRcdFx0XHRpZiAoY29tbW9ubGVuZ3RoICE9PSAwKSB7XG4gIFx0XHRcdFx0XHRcdFx0XHRpZiAocG9pbnRlciAtIGNvdW50RGVsZXRlIC0gY291bnRJbnNlcnQgPiAwICYmIGRpZmZzW3BvaW50ZXIgLSBjb3VudERlbGV0ZSAtIGNvdW50SW5zZXJ0IC0gMV1bMF0gPT09IERJRkZfRVFVQUwpIHtcbiAgXHRcdFx0XHRcdFx0XHRcdFx0ZGlmZnNbcG9pbnRlciAtIGNvdW50RGVsZXRlIC0gY291bnRJbnNlcnQgLSAxXVsxXSArPSB0ZXh0SW5zZXJ0LnN1YnN0cmluZygwLCBjb21tb25sZW5ndGgpO1xuICBcdFx0XHRcdFx0XHRcdFx0fSBlbHNlIHtcbiAgXHRcdFx0XHRcdFx0XHRcdFx0ZGlmZnMuc3BsaWNlKDAsIDAsIFtESUZGX0VRVUFMLCB0ZXh0SW5zZXJ0LnN1YnN0cmluZygwLCBjb21tb25sZW5ndGgpXSk7XG4gIFx0XHRcdFx0XHRcdFx0XHRcdHBvaW50ZXIrKztcbiAgXHRcdFx0XHRcdFx0XHRcdH1cbiAgXHRcdFx0XHRcdFx0XHRcdHRleHRJbnNlcnQgPSB0ZXh0SW5zZXJ0LnN1YnN0cmluZyhjb21tb25sZW5ndGgpO1xuICBcdFx0XHRcdFx0XHRcdFx0dGV4dERlbGV0ZSA9IHRleHREZWxldGUuc3Vic3RyaW5nKGNvbW1vbmxlbmd0aCk7XG4gIFx0XHRcdFx0XHRcdFx0fVxuXG4gIFx0XHRcdFx0XHRcdFx0Ly8gRmFjdG9yIG91dCBhbnkgY29tbW9uIHN1ZmZpeGllcy5cbiAgXHRcdFx0XHRcdFx0XHRjb21tb25sZW5ndGggPSB0aGlzLmRpZmZDb21tb25TdWZmaXgodGV4dEluc2VydCwgdGV4dERlbGV0ZSk7XG4gIFx0XHRcdFx0XHRcdFx0aWYgKGNvbW1vbmxlbmd0aCAhPT0gMCkge1xuICBcdFx0XHRcdFx0XHRcdFx0ZGlmZnNbcG9pbnRlcl1bMV0gPSB0ZXh0SW5zZXJ0LnN1YnN0cmluZyh0ZXh0SW5zZXJ0Lmxlbmd0aCAtIGNvbW1vbmxlbmd0aCkgKyBkaWZmc1twb2ludGVyXVsxXTtcbiAgXHRcdFx0XHRcdFx0XHRcdHRleHRJbnNlcnQgPSB0ZXh0SW5zZXJ0LnN1YnN0cmluZygwLCB0ZXh0SW5zZXJ0Lmxlbmd0aCAtIGNvbW1vbmxlbmd0aCk7XG4gIFx0XHRcdFx0XHRcdFx0XHR0ZXh0RGVsZXRlID0gdGV4dERlbGV0ZS5zdWJzdHJpbmcoMCwgdGV4dERlbGV0ZS5sZW5ndGggLSBjb21tb25sZW5ndGgpO1xuICBcdFx0XHRcdFx0XHRcdH1cbiAgXHRcdFx0XHRcdFx0fVxuXG4gIFx0XHRcdFx0XHRcdC8vIERlbGV0ZSB0aGUgb2ZmZW5kaW5nIHJlY29yZHMgYW5kIGFkZCB0aGUgbWVyZ2VkIG9uZXMuXG4gIFx0XHRcdFx0XHRcdGlmIChjb3VudERlbGV0ZSA9PT0gMCkge1xuICBcdFx0XHRcdFx0XHRcdGRpZmZzLnNwbGljZShwb2ludGVyIC0gY291bnRJbnNlcnQsIGNvdW50RGVsZXRlICsgY291bnRJbnNlcnQsIFtESUZGX0lOU0VSVCwgdGV4dEluc2VydF0pO1xuICBcdFx0XHRcdFx0XHR9IGVsc2UgaWYgKGNvdW50SW5zZXJ0ID09PSAwKSB7XG4gIFx0XHRcdFx0XHRcdFx0ZGlmZnMuc3BsaWNlKHBvaW50ZXIgLSBjb3VudERlbGV0ZSwgY291bnREZWxldGUgKyBjb3VudEluc2VydCwgW0RJRkZfREVMRVRFLCB0ZXh0RGVsZXRlXSk7XG4gIFx0XHRcdFx0XHRcdH0gZWxzZSB7XG4gIFx0XHRcdFx0XHRcdFx0ZGlmZnMuc3BsaWNlKHBvaW50ZXIgLSBjb3VudERlbGV0ZSAtIGNvdW50SW5zZXJ0LCBjb3VudERlbGV0ZSArIGNvdW50SW5zZXJ0LCBbRElGRl9ERUxFVEUsIHRleHREZWxldGVdLCBbRElGRl9JTlNFUlQsIHRleHRJbnNlcnRdKTtcbiAgXHRcdFx0XHRcdFx0fVxuICBcdFx0XHRcdFx0XHRwb2ludGVyID0gcG9pbnRlciAtIGNvdW50RGVsZXRlIC0gY291bnRJbnNlcnQgKyAoY291bnREZWxldGUgPyAxIDogMCkgKyAoY291bnRJbnNlcnQgPyAxIDogMCkgKyAxO1xuICBcdFx0XHRcdFx0fSBlbHNlIGlmIChwb2ludGVyICE9PSAwICYmIGRpZmZzW3BvaW50ZXIgLSAxXVswXSA9PT0gRElGRl9FUVVBTCkge1xuXG4gIFx0XHRcdFx0XHRcdC8vIE1lcmdlIHRoaXMgZXF1YWxpdHkgd2l0aCB0aGUgcHJldmlvdXMgb25lLlxuICBcdFx0XHRcdFx0XHRkaWZmc1twb2ludGVyIC0gMV1bMV0gKz0gZGlmZnNbcG9pbnRlcl1bMV07XG4gIFx0XHRcdFx0XHRcdGRpZmZzLnNwbGljZShwb2ludGVyLCAxKTtcbiAgXHRcdFx0XHRcdH0gZWxzZSB7XG4gIFx0XHRcdFx0XHRcdHBvaW50ZXIrKztcbiAgXHRcdFx0XHRcdH1cbiAgXHRcdFx0XHRcdGNvdW50SW5zZXJ0ID0gMDtcbiAgXHRcdFx0XHRcdGNvdW50RGVsZXRlID0gMDtcbiAgXHRcdFx0XHRcdHRleHREZWxldGUgPSBcIlwiO1xuICBcdFx0XHRcdFx0dGV4dEluc2VydCA9IFwiXCI7XG4gIFx0XHRcdFx0XHRicmVhaztcbiAgXHRcdFx0fVxuICBcdFx0fVxuICBcdFx0aWYgKGRpZmZzW2RpZmZzLmxlbmd0aCAtIDFdWzFdID09PSBcIlwiKSB7XG4gIFx0XHRcdGRpZmZzLnBvcCgpOyAvLyBSZW1vdmUgdGhlIGR1bW15IGVudHJ5IGF0IHRoZSBlbmQuXG4gIFx0XHR9XG5cbiAgXHRcdC8vIFNlY29uZCBwYXNzOiBsb29rIGZvciBzaW5nbGUgZWRpdHMgc3Vycm91bmRlZCBvbiBib3RoIHNpZGVzIGJ5IGVxdWFsaXRpZXNcbiAgXHRcdC8vIHdoaWNoIGNhbiBiZSBzaGlmdGVkIHNpZGV3YXlzIHRvIGVsaW1pbmF0ZSBhbiBlcXVhbGl0eS5cbiAgXHRcdC8vIGUuZzogQTxpbnM+QkE8L2lucz5DIC0+IDxpbnM+QUI8L2lucz5BQ1xuICBcdFx0Y2hhbmdlcyA9IGZhbHNlO1xuICBcdFx0cG9pbnRlciA9IDE7XG5cbiAgXHRcdC8vIEludGVudGlvbmFsbHkgaWdub3JlIHRoZSBmaXJzdCBhbmQgbGFzdCBlbGVtZW50IChkb24ndCBuZWVkIGNoZWNraW5nKS5cbiAgXHRcdHdoaWxlIChwb2ludGVyIDwgZGlmZnMubGVuZ3RoIC0gMSkge1xuICBcdFx0XHRpZiAoZGlmZnNbcG9pbnRlciAtIDFdWzBdID09PSBESUZGX0VRVUFMICYmIGRpZmZzW3BvaW50ZXIgKyAxXVswXSA9PT0gRElGRl9FUVVBTCkge1xuXG4gIFx0XHRcdFx0ZGlmZlBvaW50ZXIgPSBkaWZmc1twb2ludGVyXVsxXTtcbiAgXHRcdFx0XHRwb3NpdGlvbiA9IGRpZmZQb2ludGVyLnN1YnN0cmluZyhkaWZmUG9pbnRlci5sZW5ndGggLSBkaWZmc1twb2ludGVyIC0gMV1bMV0ubGVuZ3RoKTtcblxuICBcdFx0XHRcdC8vIFRoaXMgaXMgYSBzaW5nbGUgZWRpdCBzdXJyb3VuZGVkIGJ5IGVxdWFsaXRpZXMuXG4gIFx0XHRcdFx0aWYgKHBvc2l0aW9uID09PSBkaWZmc1twb2ludGVyIC0gMV1bMV0pIHtcblxuICBcdFx0XHRcdFx0Ly8gU2hpZnQgdGhlIGVkaXQgb3ZlciB0aGUgcHJldmlvdXMgZXF1YWxpdHkuXG4gIFx0XHRcdFx0XHRkaWZmc1twb2ludGVyXVsxXSA9IGRpZmZzW3BvaW50ZXIgLSAxXVsxXSArIGRpZmZzW3BvaW50ZXJdWzFdLnN1YnN0cmluZygwLCBkaWZmc1twb2ludGVyXVsxXS5sZW5ndGggLSBkaWZmc1twb2ludGVyIC0gMV1bMV0ubGVuZ3RoKTtcbiAgXHRcdFx0XHRcdGRpZmZzW3BvaW50ZXIgKyAxXVsxXSA9IGRpZmZzW3BvaW50ZXIgLSAxXVsxXSArIGRpZmZzW3BvaW50ZXIgKyAxXVsxXTtcbiAgXHRcdFx0XHRcdGRpZmZzLnNwbGljZShwb2ludGVyIC0gMSwgMSk7XG4gIFx0XHRcdFx0XHRjaGFuZ2VzID0gdHJ1ZTtcbiAgXHRcdFx0XHR9IGVsc2UgaWYgKGRpZmZQb2ludGVyLnN1YnN0cmluZygwLCBkaWZmc1twb2ludGVyICsgMV1bMV0ubGVuZ3RoKSA9PT0gZGlmZnNbcG9pbnRlciArIDFdWzFdKSB7XG5cbiAgXHRcdFx0XHRcdC8vIFNoaWZ0IHRoZSBlZGl0IG92ZXIgdGhlIG5leHQgZXF1YWxpdHkuXG4gIFx0XHRcdFx0XHRkaWZmc1twb2ludGVyIC0gMV1bMV0gKz0gZGlmZnNbcG9pbnRlciArIDFdWzFdO1xuICBcdFx0XHRcdFx0ZGlmZnNbcG9pbnRlcl1bMV0gPSBkaWZmc1twb2ludGVyXVsxXS5zdWJzdHJpbmcoZGlmZnNbcG9pbnRlciArIDFdWzFdLmxlbmd0aCkgKyBkaWZmc1twb2ludGVyICsgMV1bMV07XG4gIFx0XHRcdFx0XHRkaWZmcy5zcGxpY2UocG9pbnRlciArIDEsIDEpO1xuICBcdFx0XHRcdFx0Y2hhbmdlcyA9IHRydWU7XG4gIFx0XHRcdFx0fVxuICBcdFx0XHR9XG4gIFx0XHRcdHBvaW50ZXIrKztcbiAgXHRcdH1cblxuICBcdFx0Ly8gSWYgc2hpZnRzIHdlcmUgbWFkZSwgdGhlIGRpZmYgbmVlZHMgcmVvcmRlcmluZyBhbmQgYW5vdGhlciBzaGlmdCBzd2VlcC5cbiAgXHRcdGlmIChjaGFuZ2VzKSB7XG4gIFx0XHRcdHRoaXMuZGlmZkNsZWFudXBNZXJnZShkaWZmcyk7XG4gIFx0XHR9XG4gIFx0fTtcblxuICBcdHJldHVybiBmdW5jdGlvbiAobywgbikge1xuICBcdFx0dmFyIGRpZmYsIG91dHB1dCwgdGV4dDtcbiAgXHRcdGRpZmYgPSBuZXcgRGlmZk1hdGNoUGF0Y2goKTtcbiAgXHRcdG91dHB1dCA9IGRpZmYuRGlmZk1haW4obywgbik7XG4gIFx0XHRkaWZmLmRpZmZDbGVhbnVwRWZmaWNpZW5jeShvdXRwdXQpO1xuICBcdFx0dGV4dCA9IGRpZmYuZGlmZlByZXR0eUh0bWwob3V0cHV0KTtcblxuICBcdFx0cmV0dXJuIHRleHQ7XG4gIFx0fTtcbiAgfSgpO1xuXG59KChmdW5jdGlvbigpIHsgcmV0dXJuIHRoaXM7IH0oKSkpKTtcbiIsInZhciBnO1xuXG4vLyBUaGlzIHdvcmtzIGluIG5vbi1zdHJpY3QgbW9kZVxuZyA9IChmdW5jdGlvbigpIHtcblx0cmV0dXJuIHRoaXM7XG59KSgpO1xuXG50cnkge1xuXHQvLyBUaGlzIHdvcmtzIGlmIGV2YWwgaXMgYWxsb3dlZCAoc2VlIENTUClcblx0ZyA9IGcgfHwgbmV3IEZ1bmN0aW9uKFwicmV0dXJuIHRoaXNcIikoKTtcbn0gY2F0Y2ggKGUpIHtcblx0Ly8gVGhpcyB3b3JrcyBpZiB0aGUgd2luZG93IHJlZmVyZW5jZSBpcyBhdmFpbGFibGVcblx0aWYgKHR5cGVvZiB3aW5kb3cgPT09IFwib2JqZWN0XCIpIGcgPSB3aW5kb3c7XG59XG5cbi8vIGcgY2FuIHN0aWxsIGJlIHVuZGVmaW5lZCwgYnV0IG5vdGhpbmcgdG8gZG8gYWJvdXQgaXQuLi5cbi8vIFdlIHJldHVybiB1bmRlZmluZWQsIGluc3RlYWQgb2Ygbm90aGluZyBoZXJlLCBzbyBpdCdzXG4vLyBlYXNpZXIgdG8gaGFuZGxlIHRoaXMgY2FzZS4gaWYoIWdsb2JhbCkgeyAuLi59XG5cbm1vZHVsZS5leHBvcnRzID0gZztcbiIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24obW9kdWxlKSB7XG5cdGlmICghbW9kdWxlLndlYnBhY2tQb2x5ZmlsbCkge1xuXHRcdG1vZHVsZS5kZXByZWNhdGUgPSBmdW5jdGlvbigpIHt9O1xuXHRcdG1vZHVsZS5wYXRocyA9IFtdO1xuXHRcdC8vIG1vZHVsZS5wYXJlbnQgPSB1bmRlZmluZWQgYnkgZGVmYXVsdFxuXHRcdGlmICghbW9kdWxlLmNoaWxkcmVuKSBtb2R1bGUuY2hpbGRyZW4gPSBbXTtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobW9kdWxlLCBcImxvYWRlZFwiLCB7XG5cdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuXHRcdFx0Z2V0OiBmdW5jdGlvbigpIHtcblx0XHRcdFx0cmV0dXJuIG1vZHVsZS5sO1xuXHRcdFx0fVxuXHRcdH0pO1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShtb2R1bGUsIFwiaWRcIiwge1xuXHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcblx0XHRcdGdldDogZnVuY3Rpb24oKSB7XG5cdFx0XHRcdHJldHVybiBtb2R1bGUuaTtcblx0XHRcdH1cblx0XHR9KTtcblx0XHRtb2R1bGUud2VicGFja1BvbHlmaWxsID0gMTtcblx0fVxuXHRyZXR1cm4gbW9kdWxlO1xufTtcbiIsIlwidXNlIHN0cmljdFwiO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbmZ1bmN0aW9uIHRhZyhzb3VyY2UpIHtcclxuICAgIHJldHVybiBmdW5jdGlvbiAoaW5wdXQpIHtcclxuICAgICAgICB2YXIgbmV4dCA9IGlucHV0LnNsaWNlKHNvdXJjZS5sZW5ndGgpO1xyXG4gICAgICAgIGlmIChuZXh0LmZyYWdtZW50ID09PSBzb3VyY2UpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHsga2luZDogXCJva1wiLCB2YWx1ZTogbmV4dCB9O1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgcmV0dXJuIHsga2luZDogXCJlcnJcIiwgc25pcHBldDogaW5wdXQsIHJlYXNvbjogXCJ0YWdcIiB9O1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbn1cclxuZXhwb3J0cy50YWcgPSB0YWc7XHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG5mdW5jdGlvbiBfX2V4cG9ydChtKSB7XHJcbiAgICBmb3IgKHZhciBwIGluIG0pIGlmICghZXhwb3J0cy5oYXNPd25Qcm9wZXJ0eShwKSkgZXhwb3J0c1twXSA9IG1bcF07XHJcbn1cclxudmFyIF9faW1wb3J0U3RhciA9ICh0aGlzICYmIHRoaXMuX19pbXBvcnRTdGFyKSB8fCBmdW5jdGlvbiAobW9kKSB7XHJcbiAgICBpZiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSByZXR1cm4gbW9kO1xyXG4gICAgdmFyIHJlc3VsdCA9IHt9O1xyXG4gICAgaWYgKG1vZCAhPSBudWxsKSBmb3IgKHZhciBrIGluIG1vZCkgaWYgKE9iamVjdC5oYXNPd25Qcm9wZXJ0eS5jYWxsKG1vZCwgaykpIHJlc3VsdFtrXSA9IG1vZFtrXTtcclxuICAgIHJlc3VsdFtcImRlZmF1bHRcIl0gPSBtb2Q7XHJcbiAgICByZXR1cm4gcmVzdWx0O1xyXG59O1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbnZhciBjb21iaW5hdG9ycyA9IF9faW1wb3J0U3RhcihyZXF1aXJlKFwiLi9jb21iaW5hdG9yc1wiKSk7XHJcbmV4cG9ydHMuY29tYmluYXRvcnMgPSBjb21iaW5hdG9ycztcclxuX19leHBvcnQocmVxdWlyZShcIi4vc25pcHBldFwiKSk7XHJcbmZ1bmN0aW9uIHBhcnNlKGlucHV0KSB7XHJcbiAgICByZXR1cm4ge307XHJcbn1cclxuZXhwb3J0cy5wYXJzZSA9IHBhcnNlO1xyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG52YXIgU25pcHBldCA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcclxuICAgIGZ1bmN0aW9uIFNuaXBwZXQoc291cmNlLCBvZmZzZXQsIGxlbmd0aCkge1xyXG4gICAgICAgIHRoaXMuc291cmNlID0gc291cmNlO1xyXG4gICAgICAgIHRoaXMub2Zmc2V0ID0gb2Zmc2V0O1xyXG4gICAgICAgIHRoaXMubGVuZ3RoID0gbGVuZ3RoO1xyXG4gICAgfVxyXG4gICAgU25pcHBldC5pbnB1dCA9IGZ1bmN0aW9uIChzb3VyY2UpIHtcclxuICAgICAgICByZXR1cm4gbmV3IFNuaXBwZXQoc291cmNlLCAwLCAwKTtcclxuICAgIH07XHJcbiAgICBTbmlwcGV0LnByb3RvdHlwZS5zbGljZSA9IGZ1bmN0aW9uIChjaGFycykge1xyXG4gICAgICAgIHJldHVybiBuZXcgU25pcHBldCh0aGlzLnNvdXJjZSwgdGhpcy5vZmZzZXQgKyB0aGlzLmxlbmd0aCwgY2hhcnMpO1xyXG4gICAgfTtcclxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShTbmlwcGV0LnByb3RvdHlwZSwgXCJmcmFnbWVudFwiLCB7XHJcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnNvdXJjZS5zbGljZSh0aGlzLm9mZnNldCwgdGhpcy5vZmZzZXQgKyB0aGlzLmxlbmd0aCk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxyXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxyXG4gICAgfSk7XHJcbiAgICByZXR1cm4gU25pcHBldDtcclxufSgpKTtcclxuZXhwb3J0cy5TbmlwcGV0ID0gU25pcHBldDtcclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxudmFyIHF1bml0XzEgPSByZXF1aXJlKFwicXVuaXRcIik7XHJcbnZhciBoYnNfcGFyc2VyX25leHRfMSA9IHJlcXVpcmUoXCJoYnMtcGFyc2VyLW5leHRcIik7XHJcbnF1bml0XzEubW9kdWxlKFwiW2NvbWJpbmF0b3JzXSB0YWdcIik7XHJcbnF1bml0XzEudGVzdChcIm1hdGNoOiBvbmUgY2hhcmFjdGVyIHRhZ1wiLCBmdW5jdGlvbiAoYXNzZXJ0KSB7XHJcbiAgICB2YXIgaW5wdXQgPSBoYnNfcGFyc2VyX25leHRfMS5TbmlwcGV0LmlucHV0KFwiaGVsbG8gd29ybGRcIik7XHJcbiAgICB2YXIgbmV4dCA9IGhic19wYXJzZXJfbmV4dF8xLmNvbWJpbmF0b3JzLnRhZyhcImhcIikoaW5wdXQpO1xyXG4gICAgYXNzZXJ0LmRlZXBFcXVhbChuZXh0LCB7XHJcbiAgICAgICAga2luZDogXCJva1wiLFxyXG4gICAgICAgIHZhbHVlOiBpbnB1dC5zbGljZSgxKVxyXG4gICAgfSk7XHJcbn0pO1xyXG5xdW5pdF8xLnRlc3QoXCJtYXRjaDogbXVsdGktY2hhcmFjdGVyIHRhZ1wiLCBmdW5jdGlvbiAoYXNzZXJ0KSB7XHJcbiAgICB2YXIgaW5wdXQgPSBoYnNfcGFyc2VyX25leHRfMS5TbmlwcGV0LmlucHV0KFwiaGVsbG8gd29ybGRcIik7XHJcbiAgICB2YXIgbmV4dCA9IGhic19wYXJzZXJfbmV4dF8xLmNvbWJpbmF0b3JzLnRhZyhcImhlbGxvXCIpKGlucHV0KTtcclxuICAgIGFzc2VydC5kZWVwRXF1YWwobmV4dCwge1xyXG4gICAgICAgIGtpbmQ6IFwib2tcIixcclxuICAgICAgICB2YWx1ZTogaW5wdXQuc2xpY2UoNSlcclxuICAgIH0pO1xyXG59KTtcclxucXVuaXRfMS50ZXN0KFwibWlzbWF0Y2g6IG11bHRpLWNoYXJhY3RlciB0YWdcIiwgZnVuY3Rpb24gKGFzc2VydCkge1xyXG4gICAgdmFyIGlucHV0ID0gaGJzX3BhcnNlcl9uZXh0XzEuU25pcHBldC5pbnB1dChcImhlbGxvIHdvcmxkXCIpO1xyXG4gICAgdmFyIG5leHQgPSBoYnNfcGFyc2VyX25leHRfMS5jb21iaW5hdG9ycy50YWcoXCJob2xsYVwiKShpbnB1dCk7XHJcbiAgICBhc3NlcnQuZGVlcEVxdWFsKG5leHQsIHtcclxuICAgICAgICBraW5kOiBcImVyclwiLFxyXG4gICAgICAgIHNuaXBwZXQ6IGlucHV0LFxyXG4gICAgICAgIHJlYXNvbjogXCJ0YWdcIlxyXG4gICAgfSk7XHJcbn0pO1xyXG5xdW5pdF8xLnRlc3QoXCJtaXNtYXRjaDogbm90IGF0IDAgb2Zmc2V0XCIsIGZ1bmN0aW9uIChhc3NlcnQpIHtcclxuICAgIHZhciBpbnB1dCA9IGhic19wYXJzZXJfbmV4dF8xLlNuaXBwZXQuaW5wdXQoXCJoZWxsbyB3b3JsZFwiKTtcclxuICAgIHZhciBuZXh0ID0gdW53cmFwKGhic19wYXJzZXJfbmV4dF8xLmNvbWJpbmF0b3JzLnRhZyhcImhlbGxvIFwiKShpbnB1dCkpO1xyXG4gICAgdmFyIG1pc21hdGNoID0gaGJzX3BhcnNlcl9uZXh0XzEuY29tYmluYXRvcnMudGFnKFwid29vbGRcIikobmV4dCk7XHJcbiAgICBhc3NlcnQuZGVlcEVxdWFsKG1pc21hdGNoLCB7XHJcbiAgICAgICAga2luZDogXCJlcnJcIixcclxuICAgICAgICBzbmlwcGV0OiBuZXh0LFxyXG4gICAgICAgIHJlYXNvbjogXCJ0YWdcIlxyXG4gICAgfSk7XHJcbn0pO1xyXG5mdW5jdGlvbiB1bndyYXAoaW5wdXQpIHtcclxuICAgIGlmIChpbnB1dC5raW5kID09PSBcIm9rXCIpIHtcclxuICAgICAgICByZXR1cm4gaW5wdXQudmFsdWU7XHJcbiAgICB9XHJcbiAgICBlbHNlIHtcclxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJFeHBlY3RlZCBPayByZXN1bHQsIGdvdCBFcnIgKHJlYXNvbj1cIiArIGlucHV0LnJlYXNvbiArIFwiKVwiKTtcclxuICAgIH1cclxufVxyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG5yZXF1aXJlKFwiZmlsZS1sb2FkZXI/bmFtZT1bbmFtZV0uW2V4dF0hLi9pbmRleC5odG1sXCIpO1xyXG5yZXF1aXJlKFwiZmlsZS1sb2FkZXI/bmFtZT1bbmFtZV0uW2V4dF0hLi4vbm9kZV9tb2R1bGVzL3F1bml0L3F1bml0L3F1bml0LmNzc1wiKTtcclxudmFyIHF1bml0XzEgPSByZXF1aXJlKFwicXVuaXRcIik7XHJcbnJlcXVpcmUoXCIuL2NvbWJpbmF0b3JzLXRlc3RcIik7XHJcbnF1bml0XzEuY29uZmlnLmF1dG9zdGFydCA9IHRydWU7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=