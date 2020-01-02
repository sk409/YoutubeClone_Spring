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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/main/resources/js/app.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/main/resources/sass/app.scss":
/*!***********************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/main/resources/sass/app.scss ***!
  \***********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "body {\n  height: 100vh; }\n\n.bg-l1 {\n  background: #878787; }\n\n.bg-l2 {\n  background: #919191; }\n\n.bg-l3 {\n  background: #9b9b9b; }\n\n.bg-l4 {\n  background: #a5a5a5; }\n\n.bg-l5 {\n  background: #afafaf; }\n\n.bg-l6 {\n  background: #b9b9b9; }\n\n.bg-l7 {\n  background: #c3c3c3; }\n\n.bg-l8 {\n  background: #cdcdcd; }\n\n.bg-l9 {\n  background: #d7d7d7; }\n\n.bg-l10 {\n  background: #e1e1e1; }\n\n.bg-l11 {\n  background: #ebebeb; }\n\n.bg-l12 {\n  background: whitesmoke; }\n\n.bg-l13 {\n  background: white; }\n\n.text-d1 {\n  color: black; }\n\n.text-d2 {\n  color: #0a0a0a; }\n\n.text-d3 {\n  color: #141414; }\n\n.text-d4 {\n  color: #1e1e1e; }\n\n.text-d5 {\n  color: #282828; }\n\n.text-d6 {\n  color: #323232; }\n\n.text-d7 {\n  color: #3c3c3c; }\n\n.text-d8 {\n  color: #464646; }\n\n.text-d9 {\n  color: #505050; }\n\n.text-d10 {\n  color: #5a5a5a; }\n\n.text-d11 {\n  color: #646464; }\n\n.text-d12 {\n  color: #6e6e6e; }\n\n.text-d13 {\n  color: #787878; }\n\n.text-l1 {\n  color: #878787; }\n\n.text-l2 {\n  color: #919191; }\n\n.text-l3 {\n  color: #9b9b9b; }\n\n.text-l4 {\n  color: #a5a5a5; }\n\n.text-l5 {\n  color: #afafaf; }\n\n.text-l6 {\n  color: #b9b9b9; }\n\n.text-l7 {\n  color: #c3c3c3; }\n\n.text-l8 {\n  color: #cdcdcd; }\n\n.text-l9 {\n  color: #d7d7d7; }\n\n.text-l10 {\n  color: #e1e1e1; }\n\n.text-l11 {\n  color: #ebebeb; }\n\n.text-l12 {\n  color: whitesmoke; }\n\n.text-l13 {\n  color: white; }\n\n.w-80 {\n  width: 80%; }\n\n.w-90 {\n  width: 90%; }\n\n.left-0 {\n  left: 0; }\n\n.top-0 {\n  top: 0; }\n\n.top-100 {\n  top: 100%; }\n\n.contents {\n  display: flex;\n  flex-direction: column; }\n\n.fill {\n  flex-basis: 100%; }\n\n.resize-none {\n  resize: none; }\n\n.object-fit-contain {\n  object-fit: contain; }\n\n.link,\n.text-link {\n  color: #2a67cf; }\n\n.link:hover {\n  color: #3e7be3;\n  cursor: pointer;\n  text-decoration: underline; }\n", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names

module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join('');
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery) {
    if (typeof modules === 'string') {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, '']];
    }

    for (var i = 0; i < modules.length; i++) {
      var item = [].concat(modules[i]);

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring

  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot).concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
  return "/*# ".concat(data, " */");
}

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
        try {
          // This will throw an exception if access to iframe is blocked
          // due to cross-origin restrictions
          styleTarget = styleTarget.contentDocument.head;
        } catch (e) {
          // istanbul ignore next
          styleTarget = null;
        }
      }

      memo[target] = styleTarget;
    }

    return memo[target];
  };
}();

var stylesInDom = {};

function modulesToDom(moduleId, list, options) {
  for (var i = 0; i < list.length; i++) {
    var part = {
      css: list[i][1],
      media: list[i][2],
      sourceMap: list[i][3]
    };

    if (stylesInDom[moduleId][i]) {
      stylesInDom[moduleId][i](part);
    } else {
      stylesInDom[moduleId].push(addStyle(part, options));
    }
  }
}

function insertStyleElement(options) {
  var style = document.createElement('style');
  var attributes = options.attributes || {};

  if (typeof attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : undefined;

    if (nonce) {
      attributes.nonce = nonce;
    }
  }

  Object.keys(attributes).forEach(function (key) {
    style.setAttribute(key, attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  } else {
    style.removeAttribute('media');
  }

  if (sourceMap && btoa) {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (moduleId, list, options) {
  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  moduleId = options.base ? moduleId + options.base : moduleId;
  list = list || [];

  if (!stylesInDom[moduleId]) {
    stylesInDom[moduleId] = [];
  }

  modulesToDom(moduleId, list, options);
  return function update(newList) {
    newList = newList || [];

    if (Object.prototype.toString.call(newList) !== '[object Array]') {
      return;
    }

    if (!stylesInDom[moduleId]) {
      stylesInDom[moduleId] = [];
    }

    modulesToDom(moduleId, newList, options);

    for (var j = newList.length; j < stylesInDom[moduleId].length; j++) {
      stylesInDom[moduleId][j]();
    }

    stylesInDom[moduleId].length = newList.length;

    if (stylesInDom[moduleId].length === 0) {
      delete stylesInDom[moduleId];
    }
  };
};

/***/ }),

/***/ "./src/main/resources/js/app.js":
/*!**************************************!*\
  !*** ./src/main/resources/js/app.js ***!
  \**************************************/
/*! exports provided: COLOR, HTTP, NOTIFICATION, PATH, SERVER_ORIGIN, ROUTES, UUID, ImageInterpolator */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "COLOR", function() { return COLOR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HTTP", function() { return HTTP; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NOTIFICATION", function() { return NOTIFICATION; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PATH", function() { return PATH; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SERVER_ORIGIN", function() { return SERVER_ORIGIN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ROUTES", function() { return ROUTES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UUID", function() { return UUID; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImageInterpolator", function() { return ImageInterpolator; });
/* harmony import */ var _sass_app_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../sass/app.scss */ "./src/main/resources/sass/app.scss");
/* harmony import */ var _sass_app_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_sass_app_scss__WEBPACK_IMPORTED_MODULE_0__);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }


ELEMENT.locale(ELEMENT.lang.ja);
var COLOR = {
  success: "#67C23A"
};
var HTTP = {
  status: {
    ok: 200
  },
  header: {
    contentType: {
      key: "Content-Type",
      multipartFormData: "multipart/form-data"
    }
  }
};
var NOTIFICATION = {
  duration: {
    slow: 3000,
    normal: 2000,
    fast: 1000
  }
};
var PATH = {
  join: function join() {
    var delimiter = "/";

    for (var _len = arguments.length, components = new Array(_len), _key = 0; _key < _len; _key++) {
      components[_key] = arguments[_key];
    }

    return components.join(delimiter);
  }
};
var SERVER_ORIGIN = "http://localhost:8080";
var ROUTES = {
  dashboard: {
    base: "dashboard",
    videos: function videos() {
      return PATH.join(SERVER_ORIGIN, this.base, "videos");
    }
  },
  videos: {
    base: "videos",
    create: function create() {
      return PATH.join(SERVER_ORIGIN, this.base, "create");
    },
    store: function store() {
      return PATH.join(SERVER_ORIGIN, this.base);
    }
  }
};
function UUID() {
  var chars = "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".split("");

  for (var i = 0, len = chars.length; i < len; ++i) {
    switch (chars[i]) {
      case "x":
        chars[i] = Math.floor(Math.random() * 16).toString(16);
        break;

      case "y":
        chars[i] = (Math.floor(Math.random() * 4) + 8).toString(16);
        break;
    }
  }

  return chars.join("");
}

var ImageIndex =
/*#__PURE__*/
function () {
  _createClass(ImageIndex, null, [{
    key: "properties",
    value: function properties() {
      return ["r", "g", "b", "a"];
    }
  }]);

  function ImageIndex(x, y, width) {
    _classCallCheck(this, ImageIndex);

    this.r = (x + y * width) * 4;
    this.g = this.r + 1;
    this.b = this.g + 1;
    this.a = this.b + 1;
  }

  return ImageIndex;
}();

var ImageInterpolator =
/*#__PURE__*/
function () {
  function ImageInterpolator() {
    _classCallCheck(this, ImageInterpolator);
  }

  _createClass(ImageInterpolator, null, [{
    key: "nearestNeighbor",
    value: function nearestNeighbor(data, srcWidth, srcHeight, dstWidth, dstHeight) {
      var result = new Array(dstWidth * dstHeight);
      var ratioX = dstWidth / srcWidth;
      var ratioY = dstHeight / srcHeight;

      for (var x = 0; x < dstWidth; ++x) {
        var i = Math.floor(x / ratioX + 0.5);

        for (var y = 0; y < dstHeight; ++y) {
          var j = Math.floor(y / ratioY + 0.5);
          var srcIndex = new ImageIndex(i, j, srcWidth);
          var dstIndex = new ImageIndex(x, y, dstWidth);
          result[dstIndex.r] = data[srcIndex.r];
          result[dstIndex.g] = data[srcIndex.g];
          result[dstIndex.b] = data[srcIndex.b];
          result[dstIndex.a] = data[srcIndex.a];
        }
      }

      return result;
    }
  }, {
    key: "bilinear",
    value: function bilinear(data, srcWidth, srcHeight, dstWidth, dstHeight) {
      var result = new Array(dstWidth * dstHeight);
      var ratioX = dstWidth / srcWidth;
      var ratioY = dstHeight / srcHeight;

      for (var x = 0; x < dstWidth; ++x) {
        var mx = x / ratioX;
        var x0 = Math.floor(mx);
        var x1 = Math.ceil(mx);
        var dx = mx - x0;

        for (var y = 0; y < dstHeight; ++y) {
          var my = y / ratioY;
          var y0 = Math.floor(my);
          var y1 = Math.ceil(my);
          var dy = my - y0;
          var srcIndex00 = new ImageIndex(x0, y0, srcWidth);
          var srcIndex01 = new ImageIndex(x0, y1, srcWidth);
          var srcIndex10 = new ImageIndex(x1, y0, srcWidth);
          var srcIndex11 = new ImageIndex(x1, y1, srcWidth);
          var dstIndex = new ImageIndex(x, y, dstWidth);
          var _iteratorNormalCompletion = true;
          var _didIteratorError = false;
          var _iteratorError = undefined;

          try {
            for (var _iterator = ImageIndex.properties()[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
              var property = _step.value;
              result[dstIndex[property]] = (1 - dx) * (1 - dy) * data[srcIndex00[property]] + (1 - dx) * dy * data[srcIndex01[property]] + dx * (1 - dy) * data[srcIndex10[property]] + dx * dy * data[srcIndex11[property]];
            }
          } catch (err) {
            _didIteratorError = true;
            _iteratorError = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion && _iterator.return != null) {
                _iterator.return();
              }
            } finally {
              if (_didIteratorError) {
                throw _iteratorError;
              }
            }
          }
        }
      }

      return result;
    }
  }, {
    key: "bicubic",
    value: function bicubic(data, srcWidth, srcHeight, dstWidth, dstHeight) {
      var a = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : -1;

      var weight = function weight(t) {
        var abst = Math.abs(t);

        if (abst <= 1) {
          return (a + 2) * abst * abst * abst - (a + 3) * abst * abst + 1;
        } else if (abst <= 2) {
          return a * abst * abst * abst - 5 * a * abst * abst + 8 * a * abst - 4 * a;
        }

        return 0;
      };

      var result = new Array(dstWidth * dstHeight);
      var ratioX = dstWidth / srcWidth;
      var ratioY = dstHeight / srcHeight;

      for (var x = 0; x < dstWidth; ++x) {
        var mx = x / ratioX;
        var x0 = Math.floor(mx) - 1;

        for (var y = 0; y < dstHeight; ++y) {
          var my = y / ratioY;
          var y0 = Math.floor(my) - 1;
          var pixel = {
            r: 0,
            g: 0,
            b: 0,
            a: 0
          };

          for (var i = 0; i < 4; ++i) {
            var xi = x0 + i;

            if (xi < 0 || srcWidth <= xi) {
              continue;
            }

            var dx = Math.abs(mx - xi);
            var wx = weight(dx);

            for (var j = 0; j < 4; ++j) {
              var yj = y0 + j;

              if (yj < 0 || srcHeight <= yj) {
                continue;
              }

              var dy = Math.abs(my - yj);
              var wy = weight(dy);
              var srcIndex = new ImageIndex(xi, yj, srcWidth);
              var _iteratorNormalCompletion2 = true;
              var _didIteratorError2 = false;
              var _iteratorError2 = undefined;

              try {
                for (var _iterator2 = ImageIndex.properties()[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
                  var property = _step2.value;
                  pixel[property] += data[srcIndex[property]] * wx * wy;
                }
              } catch (err) {
                _didIteratorError2 = true;
                _iteratorError2 = err;
              } finally {
                try {
                  if (!_iteratorNormalCompletion2 && _iterator2.return != null) {
                    _iterator2.return();
                  }
                } finally {
                  if (_didIteratorError2) {
                    throw _iteratorError2;
                  }
                }
              }
            }
          }

          var dstIndex = new ImageIndex(x, y, dstWidth);
          var _iteratorNormalCompletion3 = true;
          var _didIteratorError3 = false;
          var _iteratorError3 = undefined;

          try {
            for (var _iterator3 = ImageIndex.properties()[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
              var _property = _step3.value;
              result[dstIndex[_property]] = pixel[_property];
            }
          } catch (err) {
            _didIteratorError3 = true;
            _iteratorError3 = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion3 && _iterator3.return != null) {
                _iterator3.return();
              }
            } finally {
              if (_didIteratorError3) {
                throw _iteratorError3;
              }
            }
          }
        }
      }

      return result;
    }
  }, {
    key: "lanczos",
    value: function lanczos(data, srcWidth, srcHeight, dstWidth, dstHeight) {
      var n = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : 3;

      var sinc = function sinc(x) {
        if (x === 0) {
          return 1;
        }

        return Math.sin(Math.PI * x) / (Math.PI * x);
      };

      var weight = function weight(dx) {
        if (n <= Math.abs(dx)) {
          return 0;
        }

        return sinc(dx) * sinc(dx / n);
      };

      var result = new Array(dstWidth * dstHeight);
      var ratioX = dstWidth / srcWidth;
      var ratioY = dstHeight / srcHeight;

      for (var x = 0; x < dstWidth; ++x) {
        var mx = x / ratioX;
        var x0 = Math.floor(mx) - n + 1;

        for (var y = 0; y < dstHeight; ++y) {
          var my = y / ratioY;
          var y0 = Math.floor(my) - n + 1;
          var pixel = {
            r: 0,
            g: 0,
            b: 0,
            a: 0
          };

          for (var i = 0; i < 2 * n; ++i) {
            var xi = x0 + i;

            if (xi < 0 || srcWidth <= xi) {
              continue;
            }

            var dx = Math.abs(mx - xi);
            var wx = weight(dx);

            for (var j = 0; j < 2 * n; ++j) {
              var yj = y0 + j;

              if (yj < 0 || srcHeight <= yj) {
                continue;
              }

              var dy = Math.abs(my - yj);
              var wy = weight(dy);
              var srcIndex = new ImageIndex(xi, yj, srcWidth);
              var _iteratorNormalCompletion4 = true;
              var _didIteratorError4 = false;
              var _iteratorError4 = undefined;

              try {
                for (var _iterator4 = ImageIndex.properties()[Symbol.iterator](), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
                  var property = _step4.value;
                  pixel[property] += data[srcIndex[property]] * wx * wy;
                }
              } catch (err) {
                _didIteratorError4 = true;
                _iteratorError4 = err;
              } finally {
                try {
                  if (!_iteratorNormalCompletion4 && _iterator4.return != null) {
                    _iterator4.return();
                  }
                } finally {
                  if (_didIteratorError4) {
                    throw _iteratorError4;
                  }
                }
              }
            }
          }

          var dstIndex = new ImageIndex(x, y, dstWidth);
          var _iteratorNormalCompletion5 = true;
          var _didIteratorError5 = false;
          var _iteratorError5 = undefined;

          try {
            for (var _iterator5 = ImageIndex.properties()[Symbol.iterator](), _step5; !(_iteratorNormalCompletion5 = (_step5 = _iterator5.next()).done); _iteratorNormalCompletion5 = true) {
              var _property2 = _step5.value;
              result[dstIndex[_property2]] = pixel[_property2];
            }
          } catch (err) {
            _didIteratorError5 = true;
            _iteratorError5 = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion5 && _iterator5.return != null) {
                _iterator5.return();
              }
            } finally {
              if (_didIteratorError5) {
                throw _iteratorError5;
              }
            }
          }
        }
      }

      return result;
    }
  }]);

  return ImageInterpolator;
}();

/***/ }),

/***/ "./src/main/resources/sass/app.scss":
/*!******************************************!*\
  !*** ./src/main/resources/sass/app.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../../../node_modules/css-loader/dist/cjs.js!../../../../node_modules/sass-loader/dist/cjs.js!./app.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/main/resources/sass/app.scss");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(module.i, content, options);

var exported = content.locals ? content.locals : {};



module.exports = exported;

/***/ })

/******/ });
//# sourceMappingURL=app.js.map