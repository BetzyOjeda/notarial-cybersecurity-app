/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"lit-initial-components": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
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
/******/ 	__webpack_require__.p = "scripts/lit";
/******/
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push(["./app/scripts/lit-initial-components.js","vendors-lit-initial-components"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./app/pages/another-page/another-page.js":
/*!************************************************!*\
  !*** ./app/pages/another-page/another-page.js ***!
  \************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _cells_cells_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @cells/cells-page */ "./node_modules/@cells/cells-page/cells-page.js");
/* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lit-element */ "./node_modules/lit-element/lit-element.js");
/* harmony import */ var _cells_components_cells_template_paper_drawer_panel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @cells-components/cells-template-paper-drawer-panel */ "./node_modules/@cells-components/cells-template-paper-drawer-panel/cells-template-paper-drawer-panel.js");
/* harmony import */ var _bbva_web_components_bbva_header_main__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @bbva-web-components/bbva-header-main */ "./node_modules/@bbva-web-components/bbva-header-main/bbva-header-main.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n      <style>", "</style>\n      <cells-template-paper-drawer-panel mode=\"seamed\">\n        <div slot=\"app__header\">\n          <bbva-header-main\n            text=", ">\n          </bbva-header-main>\n        </div>\n\n        <div slot=\"app__main\" class=\"container\">\n          <div class=\"set-padding blue\">\n          </div>\n          <button id=\"navigateButton\"\n                  @click=\"", "\"\n                  class=\"prev-next-button previous\">&larr;</button>\n          <h2>Go back to ", " page!</h2>\n        </div>\n      </cells-template-paper-drawer-panel>"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }






var AnotherPage =
/*#__PURE__*/
function (_CellsPage) {
  _inherits(AnotherPage, _CellsPage);

  function AnotherPage() {
    _classCallCheck(this, AnotherPage);

    return _possibleConstructorReturn(this, _getPrototypeOf(AnotherPage).apply(this, arguments));
  }

  _createClass(AnotherPage, [{
    key: "firstUpdated",
    value: function firstUpdated() {
      _get(_getPrototypeOf(AnotherPage.prototype), "firstUpdated", this).call(this);

      this._handleConnections();
    }
  }, {
    key: "_computeHeaderTitle",
    value: function _computeHeaderTitle(params) {
      var pageTitle = params.title || '';
      return decodeURI(pageTitle).replace(/-/g, ' ');
    }
  }, {
    key: "_handleConnections",
    value: function _handleConnections() {
      var _this = this;

      this.subscribe('from-channel', function (data) {
        var from = data.from;
        _this.fromPage = from;
      });
    }
  }, {
    key: "_handleClick",
    value: function _handleClick() {
      this.navigate('home');
    }
  }, {
    key: "render",
    value: function render() {
      return Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["html"])(_templateObject(), this.constructor.shadyStyles, this.headerTitle, this._handleClick, this.fromPage);
    }
  }, {
    key: "headerTitle",
    set: function set(value) {
      if (this._headerTitle !== value) {
        this._headerTitle = value;
        this.requestUpdate();
      }
    },
    get: function get() {
      return this._computeHeaderTitle(this.params);
    }
  }], [{
    key: "is",
    get: function get() {
      return 'another-page';
    }
  }, {
    key: "properties",
    get: function get() {
      return {
        _headerTitle: {
          type: String
        },
        fromPage: {
          type: String
        },
        params: {
          type: String
        }
      };
    }
  }, {
    key: "shadyStyles",
    get: function get() {
      return "\n      bbva-header-main {\n        --bbva-header-main-bg-color: #a00037;\n      }\n\n      cells-template-paper-drawer-panel {\n        background-color: #ff5c8d;\n      }\n\n      .container {\n        padding-bottom: 140px;\n        margin: 20px 20px 40px;\n        background-color:#d81b60 ;\n        position: relative;\n      }\n\n      .container h2 {\n        padding-top: 20%;\n        color: white;\n        text-align: center;\n        font-family: sans-serif;\n      }\n\n      .container:after {\n        content: '';\n        display: block;\n        clear: both;\n      }\n\n      .prev-next-button {\n        position: absolute;\n        top: 50%;\n        width: 60px;\n        height: 60px;\n        border-radius: 50%;\n        background: white;\n        border: none;\n        font-size: 30px;\n        color: #a00037;\n        transform: translateY(-50%);\n      }\n\n      .previous { left: 10px; }\n      .next { right: 10px; }\n    ";
    }
  }]);

  return AnotherPage;
}(_cells_cells_page__WEBPACK_IMPORTED_MODULE_0__["CellsPage"]);

window.customElements.define(AnotherPage.is, AnotherPage);

/***/ }),

/***/ "./app/pages/components-page/ext-action-label-bbva.js":
/*!************************************************************!*\
  !*** ./app/pages/components-page/ext-action-label-bbva.js ***!
  \************************************************************/
/*! exports provided: ActionLabel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActionLabel", function() { return ActionLabel; });
/* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lit-element */ "./node_modules/lit-element/lit-element.js");
/* harmony import */ var _cells_components_coronita_icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @cells-components/coronita-icons */ "./node_modules/@cells-components/coronita-icons/coronita-icons.js");
/* harmony import */ var _cells_components_cells_icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @cells-components/cells-icon */ "./node_modules/@cells-components/cells-icon/cells-icon.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _templateObject6() {
  var data = _taggedTemplateLiteral(["\n    :host {\n        display: block;\n    }\n\n    .bbva-icon,\n    [class^='bbva-icon'] {\n        display: inline-block;\n    }\n\n    .bbva-icon {\n        font-size: 24px;\n        line-height: 24px;\n    }\n\n    @media (min-width: 992px) {\n        .bbva-icon {\n            font-size: 20px;\n            line-height: 20px;\n        }\n    }\n\n    .textlabel {\n        display: inline-block;\n    }\n\n    img {\n        padding-right: 0.5rem;\n        display: inline-block;\n    }\n\n    .contlabel {\n        color: var(--bbva-core-dark-blue);\n    }\n\n    #main {\n        cursor: pointer;\n        align-items: center;\n    }\n\n    .line {\n        line-height: 24px;\n    }\n\n    #icon {\n        margin: 8px;\n    }\n    "]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = _taggedTemplateLiteral([""]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["<img id='image' src='", "' alt='", "'>"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral([""]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["<cells-icon icon=\"coronita:getout\" size=\"20\"></cells-icon>"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n    <div id='main' on-click='redir'>\n        ", "\n        ", "\n        <div id='contlabel' class='textlabel ", "'>", "</div>\n    </div>\n    "]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }




var ActionLabel =
/*#__PURE__*/
function (_LitElement) {
  _inherits(ActionLabel, _LitElement);

  _createClass(ActionLabel, null, [{
    key: "properties",
    get: function get() {
      return {
        url: {
          type: String
        },
        text: {
          type: String
        },
        hasicon: {
          type: Boolean
        },
        icon: {
          type: String
        },
        csstext: {
          type: String
        },
        hasimage: {
          type: Boolean
        },
        image: {
          type: String
        },
        dirPage: {
          type: String
        }
      };
    }
  }]);

  function ActionLabel() {
    var _this;

    _classCallCheck(this, ActionLabel);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(ActionLabel).call(this));
    _this.url = '';
    _this.text = '';
    _this.icon = '';
    _this.csstext = '';
    _this.image = '';
    _this.dirPage = '';
    return _this;
  }

  _createClass(ActionLabel, [{
    key: "render",
    value: function render() {
      return Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["html"])(_templateObject(), this.hasicon ? Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["html"])(_templateObject2()) : Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["html"])(_templateObject3()), this.hasimage ? Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["html"])(_templateObject4(), this.image, this.image) : Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["html"])(_templateObject5()), this.csstext, this.text);
    }
  }, {
    key: "redir",
    value: function redir() {
      this.dispatchEvent(new CustomEvent('action', {
        detail: {
          url: this.url
        }
      }));
    }
  }], [{
    key: "styles",
    get: function get() {
      return Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["css"])(_templateObject6());
    }
  }]);

  return ActionLabel;
}(lit_element__WEBPACK_IMPORTED_MODULE_0__["LitElement"]);
customElements.define('ext-action-label-bbva', ActionLabel);

/***/ }),

/***/ "./app/pages/components-page/ext-fonts-bbva.js":
/*!*****************************************************!*\
  !*** ./app/pages/components-page/ext-fonts-bbva.js ***!
  \*****************************************************/
/*! exports provided: fontBbvaCss */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fontBbvaCss", function() { return fontBbvaCss; });
/* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lit-element */ "./node_modules/lit-element/lit-element.js");
function _templateObject() {
  var data = _taggedTemplateLiteral(["\n            @font-face {\n                font-family: 'BentonSansBBVA-Bold';\n                src: url(\"../../resources/fonts/BentonSansBBVA-Bold.eot\");\n                src: url(\"../../resources/fonts/BentonSansBBVA-Bold.eot?#iefix\") format(\"embedded-opentype\"), url(\"../../resources/fonts/BentonSansBBVA-Bold.woff2\") format(\"woff2\"), url(\"../../resources/fonts/BentonSansBBVA-Bold.woff\") format(\"woff\"), url(\"../../resources/fonts/BentonSansBBVA-Bold.ttf\") format(\"truetype\"), url(\"../../resources/fonts/BentonSansBBVA-Bold.svg#svgFontName\") format(\"svg\");\n                font-display: swap\n            }\n\n            @font-face {\n                font-family: 'BentonSansBBVA-Book';\n                src: url(\"../../resources/fonts/BentonSansBBVA-Book.eot\");\n                src: url(\"../../resources/fonts/BentonSansBBVA-Book.eot?#iefix\") format(\"embedded-opentype\"), url(\"../../resources/fonts/BentonSansBBVA-Book.woff2\") format(\"woff2\"), url(\"../../resources/fonts/BentonSansBBVA-Book.woff\") format(\"woff\"), url(\"../../resources/fonts/BentonSansBBVA-Book.ttf\") format(\"truetype\"), url(\"../../resources/fonts/BentonSansBBVA-Book.svg#svgFontName\") format(\"svg\");\n                font-display: swap\n            }\n\n            @font-face {\n                font-family: 'BentonSansBBVA-BookItalic';\n                src: url(\"../../resources/fonts/BentonSansBBVA-BookItalic.eot\");\n                src: url(\"../../resources/fonts/BentonSansBBVA-BookItalic.eot?#iefix\") format(\"embedded-opentype\"), url(\"../../resources/fonts/BentonSansBBVA-BookItalic.woff2\") format(\"woff2\"), url(\"../../resources/fonts/BentonSansBBVA-BookItalic.woff\") format(\"woff\"), url(\"../../resources/fonts/BentonSansBBVA-BookItalic.ttf\") format(\"truetype\"), url(\"../../resources/fonts/BentonSansBBVA-BookItalic.svg#svgFontName\") format(\"svg\");\n                font-display: swap\n            }\n\n            @font-face {\n                font-family: 'BentonSansBBVA-Light';\n                src: url(\"../../resources/fonts/BentonSansBBVA-Light.eot\");\n                src: url(\"../../resources/fonts/BentonSansBBVA-Light.eot?#iefix\") format(\"embedded-opentype\"), url(\"../../resources/fonts/BentonSansBBVA-Light.woff2\") format(\"woff2\"), url(\"../../resources/fonts/BentonSansBBVA-Light.woff\") format(\"woff\"), url(\"../../resources/fonts/BentonSansBBVA-Light.ttf\") format(\"truetype\"), url(\"../../resources/fonts/BentonSansBBVA-Light.svg#svgFontName\") format(\"svg\");\n                font-display: swap\n            }\n\n            @font-face {\n                font-family: 'BentonSansBBVA-Medium';\n                src: url(\"../../resources/fonts/BentonSansBBVA-Medium.eot\");\n                src: url(\"../../resources/fonts/BentonSansBBVA-Medium.eot?#iefix\") format(\"embedded-opentype\"), url(\"../../resources/fonts/BentonSansBBVA-Medium.woff2\") format(\"woff2\"), url(\"../../resources/fonts/BentonSansBBVA-Medium.woff\") format(\"woff\"), url(\"../../resources/fonts/BentonSansBBVA-Medium.ttf\") format(\"truetype\"), url(\"../../resources/fonts/BentonSansBBVA-Medium.svg#svgFontName\") format(\"svg\");\n                font-display: swap\n            }\n\n            @font-face {\n                font-family: 'BentonSansBBVA-MediumItalic';\n                src: url(\"../../resources/fonts/BentonSansBBVA-MediumItalic.eot\");\n                src: url(\"../../resources/fonts/BentonSansBBVA-MediumItalic.eot?#iefix\") format(\"embedded-opentype\"), url(\"../../resources/fonts/BentonSansBBVA-MediumItalic.woff2\") format(\"woff2\"), url(\"../../resources/fonts/BentonSansBBVA-MediumItalic.woff\") format(\"woff\"), url(\"../../resources/fonts/BentonSansBBVA-MediumItalic.ttf\") format(\"truetype\"), url(\"../../resources/fonts/BentonSansBBVA-MediumItalic.svg#svgFontName\") format(\"svg\");\n                font-display: swap\n            }\n\n            @font-face {\n                font-family: 'TiemposText-Regular';\n                src: url(\"../../resources/fonts/TiemposText-Regular.eot\");\n                src: url(\"../../resources/fonts/TiemposText-Regular.eot?#iefix\") format(\"embedded-opentype\"), url(\"../../resources/fonts/TiemposText-Regular.woff2\") format(\"woff2\"), url(\"../../resources/fonts/TiemposText-Regular.woff\") format(\"woff\"), url(\"../../resources/fonts/TiemposText-Regular.ttf\") format(\"truetype\");\n                font-display: swap\n            }\n\n            @font-face {\n                font-family: 'TiemposText-RegularItalic';\n                src: url(\"../../resources/fonts/TiemposText-RegularItalic.eot\");\n                src: url(\"../../resources/fonts/TiemposText-RegularItalic.eot?#iefix\") format(\"embedded-opentype\"), url(\"./fonts/TiemposText-RegularItalic.woff2\") format(\"woff2\"), url(\"./fonts/TiemposText-RegularItalic.woff\") format(\"woff\"), url(\"./fonts/TiemposText-RegularItalic.ttf\") format(\"truetype\");\n                font-display: swap\n            }\n\n            /*color palette BBVA*/\n            :host {\n                --bbva-core-blue: #004481;\n                --bbva-core-blue-dark: #043263;\n                --bbva-core-blue-light: #1464A5;\n                --bbva-medium-blue: #1973B8;\n                --bbva-medium-blue-light: #49A5E6;\n                --bbva-aqua: #2DCCCD;\n                --bbva-aqua-dark: #028484;\n                --bbva-aqua-medium: #02A5A5;\n                --bbva-aqua-light: #5AC4C4;\n                --bbva-aqua-white: #EAF9FA;\n                --bbva-dark-blue: #237ABA;\n                --bbva-sky-blue: #5BBEFF;\n                --bbva-core-dark-blue: #1D73B2;\n                --bbva-navy-blue: #072146;\n                --bbva-aqua-white: #EAF9FA;\n                --bbva-green-dark: #388D4F;\n                --bbva-green-light: #48AE64;\n                --bbva-red: #DA3851;\n                --bbva-sand-dark: #8E7022;\n\t\t\t\t--bbva-yellow: #F8CD51;\n                --bbva-black-600: #121212;\n                --bbva-black-500: #666666;\n                --bbva-black-400: #BDBDBD;\n                --bbva-black-300: #D3D3D3;\n                --bbva-black-200: #E9E9E9;\n                --bbva-black-100: #F4F4F4;\n                --bbva-white: #FFFFFF;\n                --bbva-Book: \"BentonSansBBVA-Book\", Helvetica, Arial, sans-serif;\n                --bbva-Medium: \"BentonSansBBVA-Medium\";\n                --bbva-Bold: \"BentonSansBBVA-Bold\";\n                --bbva--Medium-Italic: \"BentonSansBBVA-MediumItalic\";\n            }\n            "]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }


var fontBbvaCss = Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["css"])(_templateObject());

/***/ }),

/***/ "./app/pages/components-page/ext-table-bbva.js":
/*!*****************************************************!*\
  !*** ./app/pages/components-page/ext-table-bbva.js ***!
  \*****************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _cells_cells_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @cells/cells-page */ "./node_modules/@cells/cells-page/cells-page.js");
/* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lit-element */ "./node_modules/lit-element/lit-element.js");
/* harmony import */ var _cells_components_coronita_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @cells-components/coronita-icons */ "./node_modules/@cells-components/coronita-icons/coronita-icons.js");
/* harmony import */ var _components_page_ext_fonts_bbva__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components-page/ext-fonts-bbva */ "./app/pages/components-page/ext-fonts-bbva.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _templateObject11() {
  var data = _taggedTemplateLiteral(["\n        \n:host {\n    display: block;\n    box-sizing: border-box;\n    font-family: var(--cells-fontDefault, sans-serif);\n    @apply --mtkd_ced--table; }\n  \n  :host([hidden]), [hidden] {\n    display: none !important; }\n  \n  *, *:before, *:after {\n    font: inherit;\n    box-sizing: inherit; }\n  \n  thead {\n    background-color: var(--bbva-white);\n    font-weight: bold;\n    @apply (--mtkd_ced--table-thead); }\n  \n  tbody tr:nth-child(even) {\n    background-color: var(--mtkd_ced--table-row-even-bg, #EEF8FE);\n    @apply (--mtkd_ced--table-row-even); }\n  \n  tbody td {\n    border-bottom: 2px solid var(--mtkd_ced--table-tbody-td-border-bottom-color);\n    padding-left: 5px;\n    @apply (--mtkd_ced--table-tbody-td); }\n  \n  .table-elem {\n    width: 100%;\n    @apply (--mtkd_ced--table-elem); }\n  \n  .center-text {\n    text-align: center;\n    @apply (--mtkd_ced--table-center-text); }\n  \n  .left-text {\n    text-align: left;\n    @apply (--mtkd_ced--table-left-text); }\n  \n  .right-text {\n    text-align: right;\n    @apply (--mtkd_ced--table-right-text); }\n  \n  .no-data-img {\n    width: 11rem;\n    display: block;\n    margin: 3rem auto;\n    @apply --mtkd_ced--table-no-data-img; }\n  \n  .no-data-text {\n    width: 100%;\n    display: block;\n    text-align: center;\n    @apply --mtkd_ced--table-no-data-text; }\n  \n  .row-body {\n    @apply --mtkd_ced--table-row-body; }\n    .row-body label {\n      @apply --mtkd_ced--table-label; }\n    .row-body .error {\n      color: var(--cells-icon-message-icon-color-error, #f79698);\n      @apply --mtkd_ced--table-label-error; }\n    .row-body .success {\n      color: var(--cells-icon-message-icon-color-success, #48ae64);\n      @apply --mtkd_ced--table-label-success; }\n    .row-body .warning {\n      color: var(--cells-icon-message-background-color-warning, #fde7d8);\n      @apply --mtkd_ced--table-label-warning; }\n  \n  .btn-icon {\n    @apply --mtkd_ced--table-btn-icon; }\n    "]);

  _templateObject11 = function _templateObject11() {
    return data;
  };

  return data;
}

function _templateObject10() {
  var data = _taggedTemplateLiteral(["<img class =\"no-data-img\" src=\"", "\">\n      <span class=\"no-data-text\">", "</span>"]);

  _templateObject10 = function _templateObject10() {
    return data;
  };

  return data;
}

function _templateObject9() {
  var data = _taggedTemplateLiteral([""]);

  _templateObject9 = function _templateObject9() {
    return data;
  };

  return data;
}

function _templateObject8() {
  var data = _taggedTemplateLiteral(["<td class=\"center-text\" rowspan=\"", "\">\n                            <cells-st-button class=\"composed link\"  on-click=\"_handleEvent\" event=\"", "\">\n                            <button disabled=\"", "\">\n                                <span class=\"btn-contents\">\n                                <iron-icon class=\"btn-icon\" icon=\"", "\"></iron-icon>\n                                </span>\n                            </button>\n                            </cells-st-button>\n                        </td>"]);

  _templateObject8 = function _templateObject8() {
    return data;
  };

  return data;
}

function _templateObject7() {
  var data = _taggedTemplateLiteral([""]);

  _templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6() {
  var data = _taggedTemplateLiteral(["<td class=\"", "\" rowspan=\"", "\"><label>", "</label></td>"]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = _taggedTemplateLiteral(["\n                    ", "\n                    ", "\n                "]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n              <tr class=\"row-body\">\n                ", "\n              </tr>\n            "]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["<th class=\"", "\">", "</th>"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n      <table class=\"table-elem\" cellspacing=\"0\">\n          <thead>\n            <tr>\n            ", "\n            </tr>\n          </thead>\n          <tbody>\n          ", "\n          </tbody>\n        </table>"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n      <div class=\"mtkd_ced--table-container\">\n      ", "\n    </div>"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }






var TableBbva =
/*#__PURE__*/
function (_CellsPage) {
  _inherits(TableBbva, _CellsPage);

  _createClass(TableBbva, null, [{
    key: "is",
    get: function get() {
      return 'ext-table-bbva';
    }
  }]);

  function TableBbva() {
    var _this;

    _classCallCheck(this, TableBbva);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(TableBbva).call(this));
    console.log(_this.shadowRoot);
    return _this;
  }

  _createClass(TableBbva, [{
    key: "_setRowspan",
    value: function _setRowspan(_ref) {
      var _ref$rowspan = _ref.rowspan,
          rowspan = _ref$rowspan === void 0 ? 1 : _ref$rowspan;
      return rowspan > 1 ? rowspan : 1;
    }
    /**
     * Method to validate type of element to show on html
     * @param {String} type
     * @param {String} value
     */

  }, {
    key: "_isType",
    value: function _isType(type, value) {
      var isIcon = type === value;
      return isIcon;
    }
    /**
     * This method is fired on button type element click and get the event name that is set on configuration property
     * and send id parameter of element on array.
     * @event custom-event
     * @param {js_event} e
     */

  }, {
    key: "_handleEvent",
    value: function _handleEvent(e) {
      if (!e.model.__data.row.disabled) {
        this.dispatchEvent(new CustomEvent(e.model.__data.row.event, {
          detail: {
            'id': e.model.__data.row.id
          }
        }));
        this.dispatchEvent(new CustomEvent(e.model.__data.row.event + '-data', {
          detail: {
            'id': e.model.parentModel.__data.item
          }
        }));
      }
    }
    /**
     * Method to validate if exista data on rows property
     */

  }, {
    key: "_hasRows",
    value: function _hasRows() {
      this.hasRows = this.rows.length > 0 && this.rows !== undefined && this.rows !== null ? true : false;
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      return Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["html"])(_templateObject(), this.hasRows ? Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["html"])(_templateObject2(), this.headers.map(function (item) {
        return Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["html"])(_templateObject3(), item.class, item.text);
      }), this.rows.map(function (row) {
        return Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["html"])(_templateObject4(), row.values.map(function (r) {
          return Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["html"])(_templateObject5(), _this2._isType(r.type, 'text') ? Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["html"])(_templateObject6(), r.class, _this2._setRowspan(r), r.value) : Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["html"])(_templateObject7()), _this2._isType(r.type, 'button') ? Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["html"])(_templateObject8(), _this2._setRowspan(r), r.event, r.disabled, r.icon) : Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["html"])(_templateObject9()));
        }));
      })) : Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["html"])(_templateObject10(), this.noDataSrc, this.noDataText));
    }
  }], [{
    key: "properties",
    get: function get() {
      return {
        /**
         * Array property to set all title header on table cells
         */
        headers: {
          type: Array,
          value: function value() {
            return [];
          },
          attribute: 'headers'
        },

        /**
         * Array of object to display information on table.
         * Aceptable Objects Configurations
         *
         * Action button with custom event
         * {
         *   type:"button",
         *   icon:"coronita:trash",
         *   event: "delete-navigation",
         *   id:"3"
         * }
         * Simple text on cell
         * {
         *    type:"text",
         *    value:"ADMINISTRADOR M"
         *  },
         */
        rows: {
          type: Array,
          value: function value() {
            return [];
          },
          observer: '_hasRows',
          attribute: 'rows'
        },

        /**
         * Property that show if has rows.
         */
        hasRows: {
          type: Boolean,
          value: false,
          attribute: 'has-rows'
        },

        /**
         * Property to set a path of img to display when hasRows is fals
         */
        noDataSrc: {
          type: String,
          attribute: 'no-data-src'
        },

        /**
         * Property to set text to display when hasRows is false
         */
        noDataText: {
          type: String,
          attribute: 'no-data-text'
        }
      };
    }
  }, {
    key: "styles",
    get: function get() {
      return [_components_page_ext_fonts_bbva__WEBPACK_IMPORTED_MODULE_3__["fontBbvaCss"], Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["css"])(_templateObject11())];
    }
  }]);

  return TableBbva;
}(_cells_cells_page__WEBPACK_IMPORTED_MODULE_0__["CellsPage"]);

window.customElements.define('ext-table-bbva', TableBbva);

/***/ }),

/***/ "./app/pages/form/form-collapse.js":
/*!*****************************************!*\
  !*** ./app/pages/form/form-collapse.js ***!
  \*****************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _cells_cells_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @cells/cells-page */ "./node_modules/@cells/cells-page/cells-page.js");
/* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lit-element */ "./node_modules/lit-element/lit-element.js");
/* harmony import */ var _cells_components_cells_template_paper_drawer_panel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @cells-components/cells-template-paper-drawer-panel */ "./node_modules/@cells-components/cells-template-paper-drawer-panel/cells-template-paper-drawer-panel.js");
/* harmony import */ var _cells_components_coronita_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @cells-components/coronita-icons */ "./node_modules/@cells-components/coronita-icons/coronita-icons.js");
/* harmony import */ var _bbva_web_components_bbva_form_select__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @bbva-web-components/bbva-form-select */ "./node_modules/@bbva-web-components/bbva-form-select/bbva-form-select.js");
/* harmony import */ var _bbva_web_components_bbva_form_toggle__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @bbva-web-components/bbva-form-toggle */ "./node_modules/@bbva-web-components/bbva-form-toggle/bbva-form-toggle.js");
/* harmony import */ var _bbva_web_components_bbva_expandable_accordion__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @bbva-web-components/bbva-expandable-accordion */ "./node_modules/@bbva-web-components/bbva-expandable-accordion/bbva-expandable-accordion.js");
/* harmony import */ var _bbva_web_components_bbva_list_definition__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @bbva-web-components/bbva-list-definition */ "./node_modules/@bbva-web-components/bbva-list-definition/bbva-list-definition.js");
/* harmony import */ var _bbva_web_components_bbva_button_default__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @bbva-web-components/bbva-button-default */ "./node_modules/@bbva-web-components/bbva-button-default/bbva-button-default.js");
/* harmony import */ var _bbva_web_components_bbva_help_modal__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @bbva-web-components/bbva-help-modal */ "./node_modules/@bbva-web-components/bbva-help-modal/bbva-help-modal.js");
/* harmony import */ var _form_section_one__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../form/section-one */ "./app/pages/form/section-one.js");
/* harmony import */ var _form_section_two__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../form/section-two */ "./app/pages/form/section-two.js");
/* harmony import */ var _form_section_three__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../form/section-three */ "./app/pages/form/section-three.js");
/* harmony import */ var _form_section_four__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../form/section-four */ "./app/pages/form/section-four.js");
/* harmony import */ var _form_section_five__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../form/section-five */ "./app/pages/form/section-five.js");
/* harmony import */ var _grid_templete__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../grid-templete */ "./app/pages/grid-templete.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n        bbva-expandable-accordion{\n          margin: 0 2rem;\n        }\n        .section {\n          margin-top: -2rem;\n        }\n        bbva-button-default {\n          float: right;\n        }\n        .content {\n            text-align: right;\n        }\n        .summary {\n            padding: 16px 0 0;\n        }\n        .summary p {\n            margin: 0;\n            line-height: 24px;\n        }\n        bbva-list-definition {\n            padding: 16px 0 0;\n            border-bottom: 0;\n        }\n        .form {\n          margin: 6rem 0;\n          padding: 3rem 0;\n        }\n    "]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n    <div class=\"cgt form\">\n      <div class=\"cgt-col-xs-4 cgt-col-sm-8 cgt-col-md-12 cgt-col-lg-12 cgt-col-m-3\">\n    <bbva-expandable-accordion id=\"accordion-1\" clip-box=\"\" icon=\"coronita:idcard\" row-title=\"1. Datos identificativos\">\n        <section-one></section-one>\n        <div class=\"cgt-col-xs-4 cgt-col-sm-8 cgt-col-md-12 cgt-col-lg-12 cgt-col-m-3\">\n          <bbva-button-default id=\"next-1-2\" class=\"action section\" text=\"Continuar\" @click=\"", "\"></bbva-button-default>\n        </div>\n    </bbva-expandable-accordion>\n    </div>\n    <div class=\"cgt-col-xs-4 cgt-col-sm-8 cgt-col-md-12 cgt-col-lg-12 cgt-col-m-3\">\n    <bbva-expandable-accordion id=\"accordion-2\" clip-box=\"\" icon=\"coronita:tools\" row-title=\"2. Capacidad t\xE9nica\">\n        <section-two></section-two>\n      <div class=\"cgt-col-xs-4 cgt-col-sm-8 cgt-col-md-12 cgt-col-lg-12 cgt-col-m-3\">\n        <bbva-button-default id=\"next-2-3\" class=\"action section\" text=\"Continuar\" @click=\"", "\"></bbva-button-default>\n      </div>\n    </bbva-expandable-accordion>\n    </div>\n    <div class=\"cgt-col-xs-4 cgt-col-sm-8 cgt-col-md-12 cgt-col-lg-12 cgt-col-m-3\">\n    <bbva-expandable-accordion id=\"accordion-3\" clip-box=\"\" icon=\"coronita:wellness\" row-title=\"3. Solvencia moral\">\n      <section-three></section-three>\n      <div class=\"cgt-col-xs-4 cgt-col-sm-8 cgt-col-md-12 cgt-col-lg-12 cgt-col-m-3\">\n        <bbva-button-default id=\"next-3-4\" class=\"action section\" text=\"Continuar\" @click=\"", "\"></bbva-button-default>\n      </div>\n    </bbva-expandable-accordion>\n    </div>\n    <div class=\"cgt-col-xs-4 cgt-col-sm-8 cgt-col-md-12 cgt-col-lg-12 cgt-col-m-3\">\n    <bbva-expandable-accordion id=\"accordion-4\" clip-box=\"\" icon=\"coronita:commercialoffer\" row-title=\"4. Valoraci\xF3n comercial\">\n      <section-four></section-four>\n      <div class=\"cgt-col-xs-4 cgt-col-sm-8 cgt-col-md-12 cgt-col-lg-12 cgt-col-m-3\">\n        <bbva-button-default id=\"next-4-5\" class=\"action section\" text=\"Continuar\" @click=\"", "\"></bbva-button-default>\n      </div>\n    </bbva-expandable-accordion>\n    </div>\n    <div class=\"cgt-col-xs-4 cgt-col-sm-8 cgt-col-md-12 cgt-col-lg-12 cgt-col-m-3\">\n    <bbva-expandable-accordion id=\"accordion-5\" clip-box=\"\" icon=\"coronita:executive\" row-title=\"5. Promotor\">\n        <section-five></section-five>\n        <div class=\"cgt-col-xs-4 cgt-col-sm-8 cgt-col-md-12 cgt-col-lg-12 cgt-col-m-3\">\n          <bbva-button-default id=\"next-5-6\" class=\"action section\" text=\"Finalizar\" @click=\"", "\"></bbva-button-default>\n        </div>\n    </bbva-expandable-accordion>\n    <bbva-help-modal accessibility-text-icon-right1=\"Close\" icon-right1=\"coronita:close\" half-modal=\"true\" header-text=\"Modal header\" button-text=\"Accept\" link-text=\"Link\">\n      <div class=\"content\" slot=\"slot-content\">\n        <cells-icon class=\"content-icon\" size=\"24\" icon=\"coronita:info\"></cells-icon>\n        <p class=\"title\">Informaci\xF2n guardada </p>\n        <p class=\"text-content\"></p>\n      </div>\n    </bbva-help-modal>\n    </div>\n    </div>\n    "]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }


















var FormCollapse =
/*#__PURE__*/
function (_CellsPage) {
  _inherits(FormCollapse, _CellsPage);

  _createClass(FormCollapse, null, [{
    key: "is",
    get: function get() {
      return 'form-collapse';
    }
  }]);

  function FormCollapse() {
    _classCallCheck(this, FormCollapse);

    return _possibleConstructorReturn(this, _getPrototypeOf(FormCollapse).call(this));
  }

  _createClass(FormCollapse, [{
    key: "onPageEnter",
    value: function onPageEnter() {
      console.log('Page loaded');
    }
  }, {
    key: "onPageLeave",
    value: function onPageLeave() {
      console.log('Page unloaded');
    }
  }, {
    key: "fireCompleteEvent",
    value: function fireCompleteEvent(e) {
      var next = e.target.id.split('-');
      console.log('next ', next);

      this.shadowRoot.querySelector('#accordion-' + next[1])._onHeaderClick();

      if (next[2] === '6') {
        alert('Informaciòn guardada '); //this.shadowRoot.querySelector('bbva-help-modal').open();
      } else {
        this.shadowRoot.querySelector('#accordion-' + next[2]).setAttribute('opened', true);
        this.shadowRoot.querySelector('#accordion-' + next[2]).focus();
      }
    }
  }, {
    key: "render",
    value: function render() {
      return Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["html"])(_templateObject(), this.fireCompleteEvent, this.fireCompleteEvent, this.fireCompleteEvent, this.fireCompleteEvent, this.fireCompleteEvent);
    }
  }], [{
    key: "properties",
    get: function get() {
      return {
        headerTitle: {
          type: String
        },
        currentActive: {
          type: Number
        }
      };
    }
  }, {
    key: "styles",
    get: function get() {
      return [_grid_templete__WEBPACK_IMPORTED_MODULE_15__["gridTempleteCss"], Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["css"])(_templateObject2())];
    }
  }]);

  return FormCollapse;
}(_cells_cells_page__WEBPACK_IMPORTED_MODULE_0__["CellsPage"]);

window.customElements.define(FormCollapse.is, FormCollapse);

/***/ }),

/***/ "./app/pages/form/form-main.js":
/*!*************************************!*\
  !*** ./app/pages/form/form-main.js ***!
  \*************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _cells_cells_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @cells/cells-page */ "./node_modules/@cells/cells-page/cells-page.js");
/* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lit-element */ "./node_modules/lit-element/lit-element.js");
/* harmony import */ var _cells_components_cells_template_paper_drawer_panel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @cells-components/cells-template-paper-drawer-panel */ "./node_modules/@cells-components/cells-template-paper-drawer-panel/cells-template-paper-drawer-panel.js");
/* harmony import */ var _cells_components_coronita_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @cells-components/coronita-icons */ "./node_modules/@cells-components/coronita-icons/coronita-icons.js");
/* harmony import */ var _bbva_web_components_bbva_form_select__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @bbva-web-components/bbva-form-select */ "./node_modules/@bbva-web-components/bbva-form-select/bbva-form-select.js");
/* harmony import */ var _bbva_web_components_bbva_form_toggle__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @bbva-web-components/bbva-form-toggle */ "./node_modules/@bbva-web-components/bbva-form-toggle/bbva-form-toggle.js");
/* harmony import */ var _bbva_web_components_bbva_expandable_multistep__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @bbva-web-components/bbva-expandable-multistep */ "./node_modules/@bbva-web-components/bbva-expandable-multistep/bbva-expandable-multistep.js");
/* harmony import */ var _bbva_web_components_bbva_expandable_multistep_bbva_expandable_step__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @bbva-web-components/bbva-expandable-multistep/bbva-expandable-step */ "./node_modules/@bbva-web-components/bbva-expandable-multistep/bbva-expandable-step.js");
/* harmony import */ var _bbva_web_components_bbva_list_definition__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @bbva-web-components/bbva-list-definition */ "./node_modules/@bbva-web-components/bbva-list-definition/bbva-list-definition.js");
/* harmony import */ var _bbva_web_components_bbva_button_default__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @bbva-web-components/bbva-button-default */ "./node_modules/@bbva-web-components/bbva-button-default/bbva-button-default.js");
/* harmony import */ var _form_section_one__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../form/section-one */ "./app/pages/form/section-one.js");
/* harmony import */ var _form_section_two__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../form/section-two */ "./app/pages/form/section-two.js");
/* harmony import */ var _form_section_three__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../form/section-three */ "./app/pages/form/section-three.js");
/* harmony import */ var _form_section_four__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../form/section-four */ "./app/pages/form/section-four.js");
/* harmony import */ var _form_section_five__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../form/section-five */ "./app/pages/form/section-five.js");
/* harmony import */ var _grid_templete__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../grid-templete */ "./app/pages/grid-templete.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n        .content {\n            text-align: right;\n        }\n        .summary {\n            padding: 16px 0 0;\n        }\n        .summary p {\n            margin: 0;\n            line-height: 24px;\n        }\n        bbva-list-definition {\n            padding: 16px 0 0;\n            border-bottom: 0;\n        }    \n    "]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n    <bbva-expandable-multistep>\n        <bbva-expandable-step id=\"step-1\" header=\"Datos identificativos\" disabled-target=\".action\">\n            <div class=\"content\">\n              <section-one></section-one>\n              <bbva-button-default id=\"next-1-2\" class=\"action\" text=\"Continue\" @click=\"", "\"></bbva-button-default>\n            </div>\n            <div class=\"summary\" slot=\"summary\">\n              <p>Completo</p>\n            </div>\n        </bbva-expandable-step>\n\n        <bbva-expandable-step id=\"step-2\" header=\"Capacidad t\xE8cnica\" disabled-target=\".action\">\n            <div class=\"content\">\n              <section-two></section-two>\n              <bbva-button-default id=\"next-2-3\" class=\"action\" text=\"Continue\" @click=\"", "\"></bbva-button-default>\n            </div>\n            <div class=\"summary\" slot=\"summary\">\n              <p>Incompleto</p>\n            </div>\n        </bbva-expandable-step>\n\n        <bbva-expandable-step id=\"step-3\" header=\"Solvencia moral\" disabled-target=\".action\">\n            <div class=\"content\">\n              <section-three></section-three>\n              <bbva-button-default id=\"next-3-4\" class=\"action\" text=\"Continue\" @click=\"", "\"></bbva-button-default>\n            </div>\n            <div class=\"summary\" slot=\"summary\">\n              <p>Incompleto</p>\n            </div>\n        </bbva-expandable-step>\n\n        <bbva-expandable-step id=\"step-4\" header=\"Valoracion comercial\" disabled-target=\".action\">\n            <div class=\"content\">\n              <section-four></section-four>\n              <bbva-button-default id=\"next-4-5\" class=\"action\" text=\"Continue\" @click=\"", "\"></bbva-button-default>\n            </div>\n            <div class=\"summary\" slot=\"summary\">\n              <p>Incompleto</p>\n              <bbva-list-definition class=\"date transparent\" items=\"[{&quot;key&quot;: &quot;15/04/2018&quot;, &quot;value&quot;: &quot;Date description&quot;}, {&quot;key&quot;: &quot;16/04/2018&quot;, &quot;value&quot;: &quot;Date description&quot;}]\"></bbva-list-definition>\n            </div>\n        </bbva-expandable-step>\n\n        <bbva-expandable-step id=\"step-5\" header=\"Promotor\" disabled-target=\".action\">\n            <div class=\"content\">\n              <section-five></section-five>\n              <bbva-button-default id=\"next-5-6\" class=\"action\" text=\"Finish\" @click=\"", "\"></bbva-button-default>\n            </div>\n            <div class=\"summary\" slot=\"summary\">\n              <p>Incompleto</p>\n            </div>\n        </bbva-expandable-step>\n    </bbva-expandable-multistep> \n    "]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }


















var FormMain =
/*#__PURE__*/
function (_CellsPage) {
  _inherits(FormMain, _CellsPage);

  _createClass(FormMain, null, [{
    key: "is",
    get: function get() {
      return 'form-main';
    }
  }]);

  function FormMain() {
    _classCallCheck(this, FormMain);

    return _possibleConstructorReturn(this, _getPrototypeOf(FormMain).call(this));
  }

  _createClass(FormMain, [{
    key: "onPageEnter",
    value: function onPageEnter() {
      console.log('Page loaded');
    }
  }, {
    key: "onPageLeave",
    value: function onPageLeave() {
      console.log('Page unloaded');
    }
  }, {
    key: "fireCompleteEvent",
    value: function fireCompleteEvent(e) {
      var next = e.target.id.split('-');
      this.shadowRoot.querySelector('#step-' + next[1]).setAttribute('completed', '');
      this.shadowRoot.querySelector('#step-' + next[2]).removeAttribute('completed');
      this.shadowRoot.querySelector('#step-' + next[2]).setAttribute('active', '');
    }
  }, {
    key: "render",
    value: function render() {
      return Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["html"])(_templateObject(), this.fireCompleteEvent, this.fireCompleteEvent, this.fireCompleteEvent, this.fireCompleteEvent, this.fireCompleteEvent);
    }
  }], [{
    key: "properties",
    get: function get() {
      return {
        headerTitle: {
          type: String
        },
        currentActive: {
          type: Number
        }
      };
    }
  }, {
    key: "styles",
    get: function get() {
      return [_grid_templete__WEBPACK_IMPORTED_MODULE_15__["gridTempleteCss"], Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["css"])(_templateObject2())];
    }
  }]);

  return FormMain;
}(_cells_cells_page__WEBPACK_IMPORTED_MODULE_0__["CellsPage"]);

window.customElements.define(FormMain.is, FormMain);

/***/ }),

/***/ "./app/pages/form/section-five.js":
/*!****************************************!*\
  !*** ./app/pages/form/section-five.js ***!
  \****************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _cells_cells_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @cells/cells-page */ "./node_modules/@cells/cells-page/cells-page.js");
/* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lit-element */ "./node_modules/lit-element/lit-element.js");
/* harmony import */ var _cells_components_cells_template_paper_drawer_panel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @cells-components/cells-template-paper-drawer-panel */ "./node_modules/@cells-components/cells-template-paper-drawer-panel/cells-template-paper-drawer-panel.js");
/* harmony import */ var _cells_components_coronita_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @cells-components/coronita-icons */ "./node_modules/@cells-components/coronita-icons/coronita-icons.js");
/* harmony import */ var _bbva_web_components_bbva_form_select__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @bbva-web-components/bbva-form-select */ "./node_modules/@bbva-web-components/bbva-form-select/bbva-form-select.js");
/* harmony import */ var _bbva_web_components_bbva_form_text__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @bbva-web-components/bbva-form-text */ "./node_modules/@bbva-web-components/bbva-form-text/bbva-form-text.js");
/* harmony import */ var _bbva_web_components_bbva_list_toggle__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @bbva-web-components/bbva-list-toggle */ "./node_modules/@bbva-web-components/bbva-list-toggle/bbva-list-toggle.js");
/* harmony import */ var _bbva_web_components_bbva_form_date__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @bbva-web-components/bbva-form-date */ "./node_modules/@bbva-web-components/bbva-form-date/bbva-form-date.js");
/* harmony import */ var _grid_templete__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../grid-templete */ "./app/pages/grid-templete.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n      cells-template-paper-drawer-panel {\n        background-color: #5472d3;\n      }\n\n      .container {\n        padding-bottom: 140px;\n        margin: 20px 20px 40px;\n        background-color:#0d47a1 ;\n        position: relative;\n      }\n\n      .container h2 {\n        padding-top: 20%;\n        color: white;\n        text-align: center;\n        font-family: sans-serif;\n      }\n\n      .container:after {\n        content: '';\n        display: block;\n        clear: both;\n      }\n\n      .prev-next-button {\n        position: absolute;\n        top: 50%;\n        width: 60px;\n        height: 60px;\n        border-radius: 50%;\n        background: white;\n        border: none;\n        font-size: 30px;\n        color: #0d47a1;\n        transform: translateY(-50%);\n      }\n\n      .previous { left: 10px; }\n      .next { right: 10px; }\n\n      bbva-form-date,\n      bbva-form-text{\n        text-align: left;\n      }\n    "]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n    <div class=\"cgt\">\n      <div class=\"cgt-col-xs-4 cgt-col-sm-4 cgt-col-md-6 cgt-col-lg-6\">\n        <bbva-list-toggle heading=\"Carta de aceptaci\xF3n de capacidad\" link-text=\"\"></bbva-list-toggle>\n      </div>\n      <div class=\"cgt-col-xs-4 cgt-col-sm-4 cgt-col-md-6 cgt-col-lg-6\">\n        <bbva-form-text \n          label=\"Nombre de los promotores con los que trabaja\" \n          value=\"\"\n          error-message=\"Ingrese correctamente Expertise operaciones\"\n          validate-on-blur\n          pattern=\"\\d{3}\"\n          allowed-pattern=\"[0-9]\"\n          form=\"formExperienceOperations\">\n        </bbva-form-text>\n      </div>\n    </div>\n    "], ["\n    <div class=\"cgt\">\n      <div class=\"cgt-col-xs-4 cgt-col-sm-4 cgt-col-md-6 cgt-col-lg-6\">\n        <bbva-list-toggle heading=\"Carta de aceptaci\xF3n de capacidad\" link-text=\"\"></bbva-list-toggle>\n      </div>\n      <div class=\"cgt-col-xs-4 cgt-col-sm-4 cgt-col-md-6 cgt-col-lg-6\">\n        <bbva-form-text \n          label=\"Nombre de los promotores con los que trabaja\" \n          value=\"\"\n          error-message=\"Ingrese correctamente Expertise operaciones\"\n          validate-on-blur\n          pattern=\"\\\\d{3}\"\n          allowed-pattern=\"[0-9]\"\n          form=\"formExperienceOperations\">\n        </bbva-form-text>\n      </div>\n    </div>\n    "]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }











var SectionFive =
/*#__PURE__*/
function (_CellsPage) {
  _inherits(SectionFive, _CellsPage);

  _createClass(SectionFive, null, [{
    key: "is",
    get: function get() {
      return 'section-five';
    }
  }]);

  function SectionFive() {
    _classCallCheck(this, SectionFive);

    return _possibleConstructorReturn(this, _getPrototypeOf(SectionFive).call(this));
  }

  _createClass(SectionFive, [{
    key: "onPageEnter",
    value: function onPageEnter() {
      console.log('Page loaded');
    }
  }, {
    key: "onPageLeave",
    value: function onPageLeave() {
      console.log('Page unloaded');
    }
  }, {
    key: "render",
    value: function render() {
      return Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["html"])(_templateObject());
    }
  }], [{
    key: "properties",
    get: function get() {
      return {
        headerTitle: {
          type: String
        }
      };
    }
  }, {
    key: "styles",
    get: function get() {
      return [_grid_templete__WEBPACK_IMPORTED_MODULE_8__["gridTempleteCss"], Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["css"])(_templateObject2())];
    }
  }]);

  return SectionFive;
}(_cells_cells_page__WEBPACK_IMPORTED_MODULE_0__["CellsPage"]);

window.customElements.define(SectionFive.is, SectionFive);

/***/ }),

/***/ "./app/pages/form/section-four.js":
/*!****************************************!*\
  !*** ./app/pages/form/section-four.js ***!
  \****************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _cells_cells_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @cells/cells-page */ "./node_modules/@cells/cells-page/cells-page.js");
/* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lit-element */ "./node_modules/lit-element/lit-element.js");
/* harmony import */ var _cells_components_cells_template_paper_drawer_panel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @cells-components/cells-template-paper-drawer-panel */ "./node_modules/@cells-components/cells-template-paper-drawer-panel/cells-template-paper-drawer-panel.js");
/* harmony import */ var _cells_components_coronita_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @cells-components/coronita-icons */ "./node_modules/@cells-components/coronita-icons/coronita-icons.js");
/* harmony import */ var _bbva_web_components_bbva_form_select__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @bbva-web-components/bbva-form-select */ "./node_modules/@bbva-web-components/bbva-form-select/bbva-form-select.js");
/* harmony import */ var _bbva_web_components_bbva_form_text__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @bbva-web-components/bbva-form-text */ "./node_modules/@bbva-web-components/bbva-form-text/bbva-form-text.js");
/* harmony import */ var _bbva_web_components_bbva_list_toggle__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @bbva-web-components/bbva-list-toggle */ "./node_modules/@bbva-web-components/bbva-list-toggle/bbva-list-toggle.js");
/* harmony import */ var _bbva_web_components_bbva_form_amount__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @bbva-web-components/bbva-form-amount */ "./node_modules/@bbva-web-components/bbva-form-amount/bbva-form-amount.js");
/* harmony import */ var _grid_templete__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../grid-templete */ "./app/pages/grid-templete.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n      cells-template-paper-drawer-panel {\n        background-color: #5472d3;\n      }\n\n      .container {\n        padding-bottom: 140px;\n        margin: 20px 20px 40px;\n        background-color:#0d47a1 ;\n        position: relative;\n      }\n\n      .container h2 {\n        padding-top: 20%;\n        color: white;\n        text-align: center;\n        font-family: sans-serif;\n      }\n\n      .container:after {\n        content: '';\n        display: block;\n        clear: both;\n      }\n\n      .prev-next-button {\n        position: absolute;\n        top: 50%;\n        width: 60px;\n        height: 60px;\n        border-radius: 50%;\n        background: white;\n        border: none;\n        font-size: 30px;\n        color: #0d47a1;\n        transform: translateY(-50%);\n      }\n\n      .previous { left: 10px; }\n      .next { right: 10px; }\n\n      bbva-form-date,\n      bbva-form-text,\n      bbva-form-amount{\n        text-align: left;\n      }\n    "]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n    <div class=\"cgt\">\n      <div class=\"cgt-col-xs-4 cgt-col-sm-4 cgt-col-md-6 cgt-col-lg-6\">\n          <bbva-form-amount label=\"Facturaci\xF3n con BBVA\" currency-code=\"MXN\" local-currency=\"MXN\" language=\"es\">\n        </bbva-form-amount>\n      </div>\n      <div class=\"cgt-col-xs-4 cgt-col-sm-4 cgt-col-md-6 cgt-col-lg-6\">\n        <bbva-list-toggle heading=\"Segmento Comercial\" link-text=\"\"></bbva-list-toggle>\n      </div>\n      <div class=\"cgt-col-xs-4 cgt-col-sm-4 cgt-col-md-6 cgt-col-lg-6\">\n        <bbva-list-toggle heading=\"Cuenta BBVA\" link-text=\"\"></bbva-list-toggle>\n      </div>\n    </div>\n    "]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }











var SectionFour =
/*#__PURE__*/
function (_CellsPage) {
  _inherits(SectionFour, _CellsPage);

  _createClass(SectionFour, null, [{
    key: "is",
    get: function get() {
      return 'section-four';
    }
  }]);

  function SectionFour() {
    _classCallCheck(this, SectionFour);

    return _possibleConstructorReturn(this, _getPrototypeOf(SectionFour).call(this));
  }

  _createClass(SectionFour, [{
    key: "onPageEnter",
    value: function onPageEnter() {
      console.log('Page loaded');
    }
  }, {
    key: "onPageLeave",
    value: function onPageLeave() {
      console.log('Page unloaded');
    }
  }, {
    key: "render",
    value: function render() {
      return Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["html"])(_templateObject());
    }
  }], [{
    key: "properties",
    get: function get() {
      return {
        headerTitle: {
          type: String
        }
      };
    }
  }, {
    key: "styles",
    get: function get() {
      return [_grid_templete__WEBPACK_IMPORTED_MODULE_8__["gridTempleteCss"], Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["css"])(_templateObject2())];
    }
  }]);

  return SectionFour;
}(_cells_cells_page__WEBPACK_IMPORTED_MODULE_0__["CellsPage"]);

window.customElements.define(SectionFour.is, SectionFour);

/***/ }),

/***/ "./app/pages/form/section-one.js":
/*!***************************************!*\
  !*** ./app/pages/form/section-one.js ***!
  \***************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _cells_cells_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @cells/cells-page */ "./node_modules/@cells/cells-page/cells-page.js");
/* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lit-element */ "./node_modules/lit-element/lit-element.js");
/* harmony import */ var _cells_components_cells_template_paper_drawer_panel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @cells-components/cells-template-paper-drawer-panel */ "./node_modules/@cells-components/cells-template-paper-drawer-panel/cells-template-paper-drawer-panel.js");
/* harmony import */ var _cells_components_coronita_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @cells-components/coronita-icons */ "./node_modules/@cells-components/coronita-icons/coronita-icons.js");
/* harmony import */ var _bbva_web_components_bbva_form_select__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @bbva-web-components/bbva-form-select */ "./node_modules/@bbva-web-components/bbva-form-select/bbva-form-select.js");
/* harmony import */ var _bbva_web_components_bbva_form_text__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @bbva-web-components/bbva-form-text */ "./node_modules/@bbva-web-components/bbva-form-text/bbva-form-text.js");
/* harmony import */ var _bbva_web_components_bbva_button_default__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @bbva-web-components/bbva-button-default */ "./node_modules/@bbva-web-components/bbva-button-default/bbva-button-default.js");
/* harmony import */ var _grid_templete__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../grid-templete */ "./app/pages/grid-templete.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n      .form {\n        margin: 2rem 4rem 0 4rem;\n      }\n\n      bbva-form-option,\n      bbva-form-date,\n      bbva-form-text{\n        text-align: left;\n      }\n    "]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n    <div class=\"cgt form\">\n      <div class=\"cgt-col-xs-4 cgt-col-sm-4 cgt-col-md-6 cgt-col-lg-6\">\n          <bbva-form-select label=\"Situaci\xF3n\" id=\"sec1_situacion\">\n            <bbva-form-option value=\"option1\">Activo</bbva-form-option>\n            <bbva-form-option value=\"option2\">Inactivo</bbva-form-option>\n          </bbva-form-select>\n      </div>\n      <div class=\"cgt-col-xs-4 cgt-col-sm-4 cgt-col-md-6 cgt-col-lg-6\">\n        <bbva-form-select label=\"Categor\xEDa del padr\xF3n\">\n          <bbva-form-option value=\"option1\">Oro</bbva-form-option>\n          <bbva-form-option value=\"option2\">Plata</bbva-form-option>\n          <bbva-form-option value=\"option3\">Bronce</bbva-form-option>\n          <bbva-form-option value=\"option4\">Liga de ascenso</bbva-form-option>\n        </bbva-form-select>\n      </div>\n      <div class=\"cgt-col-xs-4 cgt-col-sm-4 cgt-col-md-6 cgt-col-lg-6\">\n        <bbva-form-select label=\"Estado\">\n          <bbva-form-option value=\"option1\">Aguascalientes</bbva-form-option>\n          <bbva-form-option value=\"option2\">Baja California</bbva-form-option>\n          <bbva-form-option value=\"option3\">Baja California Sur</bbva-form-option>\n          <bbva-form-option value=\"option4\">Campeche</bbva-form-option>\n          <bbva-form-option value=\"option5\">Campeche California Sur</bbva-form-option>\n        </bbva-form-select>\n      </div>\n      <div class=\"cgt-col-xs-4 cgt-col-sm-4 cgt-col-md-6 cgt-col-lg-6\">\n        <bbva-form-select label=\"Plaza\">\n          <bbva-form-option value=\"option1\">ABASCAL OLASCOAGA RODRIGO</bbva-form-option>\n          <bbva-form-option value=\"option2\">ADAME L\xD3PEZ \xC1NGEL GILBERTO</bbva-form-option>\n          <bbva-form-option value=\"option3\">AGUILAR MOLINA V\xCDCTOR RAFAEL</bbva-form-option>\n          <bbva-form-option value=\"option4\">AGUILERA SOTO RAM\xD3N</bbva-form-option>\n          <bbva-form-option value=\"option5\">AGUILERA SOTO RAM\xC3\u201CN</bbva-form-option>\n        </bbva-form-select>\n      </div>\n\n      <div class=\"cgt-col-xs-4 cgt-col-sm-4 cgt-col-md-6 cgt-col-lg-6\">\n          <bbva-form-text \n            label=\"N\xFAmero de notar\xECa *\" \n            value=\"\"\n            error-message=\"Ingrese un n\xFAmero de notar\xECa v\xE1lido\"\n            validate-on-blur\n            pattern=\"\\d{3}\"\n            allowed-pattern=\"\\d\"\n            form=\"formNumberNotary\">\n          </bbva-form-text>\n      </div>\n      <div class=\"cgt-col-xs-4 cgt-col-sm-4 cgt-col-md-6 cgt-col-lg-6\">\n          <bbva-form-text \n            label=\"Nombre de notario *\" \n            value=\"\" \n            error-message=\"Ingrese un nombre v\xE1lido\"\n            validate-on-blur\n            asedfr sf\xF1sdfwerPwer\n            pattern=\"^[A-Za-z\xC1\xC9\xCD\xD3\xDA\xF1\xE1\xE9\xED\xF3\xFA\xD1\\s]{2,20}$\"\n            allowed-pattern=\"[a-zA-Z\xC1\xC9\xCD\xD3\xDA\xF1\xE1\xE9\xED\xF3\xFA\xD1\\s]\"\n            form=\"formNameNotary\">\n          </bbva-form-text>\n      </div>\n      <div class=\"cgt-col-xs-4 cgt-col-sm-4 cgt-col-md-6 cgt-col-lg-6\">\n          <bbva-form-text \n            label=\"Apeliido Paterno de notario *\" \n            value=\"\" \n            error-message=\"Ingrese un apellido paterno v\xE1lido\"\n            validate-on-blur\n            pattern=\"^[A-Za-z\xC1\xC9\xCD\xD3\xDA\xF1\xE1\xE9\xED\xF3\xFA\xD1\\s]{2,20}$\"\n            allowed-pattern=\"[a-zA-Z\xC1\xC9\xCD\xD3\xDA\xF1\xE1\xE9\xED\xF3\xFA\xD1\\s]\"\n            form=\"formNameNotary\">\n          </bbva-form-text>\n      </div>\n      <div class=\"cgt-col-xs-4 cgt-col-sm-4 cgt-col-md-6 cgt-col-lg-6\">\n          <bbva-form-text \n            label=\"Apellido Materno de notario\" \n            value=\"\"             \n            pattern=\"^[A-Za-z\xC1\xC9\xCD\xD3\xDA\xF1\xE1\xE9\xED\xF3\xFA\xD1\\s]{2,20}$\"\n            allowed-pattern=\"[a-zA-Z\xC1\xC9\xCD\xD3\xDA\xF1\xE1\xE9\xED\xF3\xFA\xD1\\s]\"\n            form=\"formNameNotary\">\n          </bbva-form-text>\n      </div>\n      <div class=\"cgt-col-xs-4 cgt-col-sm-4 cgt-col-md-6 cgt-col-lg-6\">\n        <bbva-form-text \n            label=\"Direcci\xF2n *\" \n            value=\"\" \n            error-message=\"Ingrese correctamente una direcci\xF2n\"\n            validate-on-blur\n            pattern=\"^[A-Za-z\xC1\xC9\xCD\xD3\xDA\xF1\xE1\xE9\xED\xF3\xFA\xD1\\s\\d]{2,50}$\"\n            allowed-pattern=\"[a-zA-Z\xC1\xC9\xCD\xD3\xDA\xF1\xE1\xE9\xED\xF3\xFA\xD1\\s\\d]\"\n            form=\"formDirection\">\n          </bbva-form-text>\n      </div>\n      <div class=\"cgt-col-xs-4 cgt-col-sm-4 cgt-col-md-6 cgt-col-lg-6\">\n        <bbva-form-text \n            label=\"RFC de notario *\" \n            value=\"\" \n            error-message=\"Ingrese correctamente un RFC\"\n            validate-on-blur\n            pattern=\"^[a-zA-Z\xF1\xD1]{4}[\\d]{2}(0[1-9]|1[0-2])(0[1-9]|[12][0-9]|3[0-1])([a-zA-Z\\d]{3})?$\"\n            allowed-pattern=\"[a-zA-Z\xF1\xD1\\d]\"\n            form=\"formRFCNotary\">\n          </bbva-form-text>\n      </div>\n        \n      <div class=\"cgt-col-xs-4 cgt-col-sm-4 cgt-col-md-6 cgt-col-lg-6\">\n        <bbva-form-text \n            label=\"Email de notario *\" \n            value=\"\" \n            error-message=\"Ingrese correctamente un e-mail\"\n            validate-on-blur\n            pattern=\"^[_a-z0-9-]+(.[_a-z0-9-]+)*@[a-z0-9-]+(.[a-z0-9-]+)*(.[a-z]{2,4})$\"\n            allowed-pattern=\".\"\n            form=\"formEmailNotary\">\n          </bbva-form-text>\n      </div>\n      <div class=\"cgt-col-xs-4 cgt-col-sm-4 cgt-col-md-6 cgt-col-lg-6\">\n        <bbva-form-text \n          label=\"Tel\xE8fono de notario *\" \n          value=\"\" \n          error-message=\"Ingrese correctamente un tel\xE8fono\"\n            validate-on-blur\n            pattern=\"\\d{10}\"\n            allowed-pattern=\"[0-9]\"\n            form=\"formPhoneNotary\">\n        </bbva-form-text>\n      </div>\n     <!-- <div class=\"cgt-col-xs-4 cgt-col-sm-4 cgt-col-md-6 cgt-col-lg-6\">\n        <bbva-form-text \n          label=\"ID Notario en BBVA *\" \n          value=\"\" \n          error-message=\"Ingrese correctamente un ID notario\"\n            validate-on-blur\n            pattern=\"\\d{5}\"\n            allowed-pattern=\"[0-9]\"\n            form=\"formIdNotaryBBVA\">\n        </bbva-form-text>\n      </div>\n      <div class=\"cgt-col-xs-4 cgt-col-sm-4 cgt-col-md-6 cgt-col-lg-6\">\n        <bbva-form-text \n          label=\"Alta en e-Notario *\" \n          value=\"\" \n          error-message=\"Ingrese correctamente un e-notario\"\n            validate-on-blur\n            pattern=\"\\d{3}\"\n            allowed-pattern=\"[0-9]\"\n            form=\"formEnotary\">\n        </bbva-form-text>\n      </div>-->\n      <div class=\"cgt-col-xs-4 cgt-col-sm-4 cgt-col-md-6 cgt-col-lg-6\">\n        <bbva-list-toggle heading=\"Adjuntar CV\" link-text=\"\"></bbva-list-toggle>\n      </div>\n    </div>\n    "], ["\n    <div class=\"cgt form\">\n      <div class=\"cgt-col-xs-4 cgt-col-sm-4 cgt-col-md-6 cgt-col-lg-6\">\n          <bbva-form-select label=\"Situaci\xF3n\" id=\"sec1_situacion\">\n            <bbva-form-option value=\"option1\">Activo</bbva-form-option>\n            <bbva-form-option value=\"option2\">Inactivo</bbva-form-option>\n          </bbva-form-select>\n      </div>\n      <div class=\"cgt-col-xs-4 cgt-col-sm-4 cgt-col-md-6 cgt-col-lg-6\">\n        <bbva-form-select label=\"Categor\xEDa del padr\xF3n\">\n          <bbva-form-option value=\"option1\">Oro</bbva-form-option>\n          <bbva-form-option value=\"option2\">Plata</bbva-form-option>\n          <bbva-form-option value=\"option3\">Bronce</bbva-form-option>\n          <bbva-form-option value=\"option4\">Liga de ascenso</bbva-form-option>\n        </bbva-form-select>\n      </div>\n      <div class=\"cgt-col-xs-4 cgt-col-sm-4 cgt-col-md-6 cgt-col-lg-6\">\n        <bbva-form-select label=\"Estado\">\n          <bbva-form-option value=\"option1\">Aguascalientes</bbva-form-option>\n          <bbva-form-option value=\"option2\">Baja California</bbva-form-option>\n          <bbva-form-option value=\"option3\">Baja California Sur</bbva-form-option>\n          <bbva-form-option value=\"option4\">Campeche</bbva-form-option>\n          <bbva-form-option value=\"option5\">Campeche California Sur</bbva-form-option>\n        </bbva-form-select>\n      </div>\n      <div class=\"cgt-col-xs-4 cgt-col-sm-4 cgt-col-md-6 cgt-col-lg-6\">\n        <bbva-form-select label=\"Plaza\">\n          <bbva-form-option value=\"option1\">ABASCAL OLASCOAGA RODRIGO</bbva-form-option>\n          <bbva-form-option value=\"option2\">ADAME L\xD3PEZ \xC1NGEL GILBERTO</bbva-form-option>\n          <bbva-form-option value=\"option3\">AGUILAR MOLINA V\xCDCTOR RAFAEL</bbva-form-option>\n          <bbva-form-option value=\"option4\">AGUILERA SOTO RAM\xD3N</bbva-form-option>\n          <bbva-form-option value=\"option5\">AGUILERA SOTO RAM\xC3\u201CN</bbva-form-option>\n        </bbva-form-select>\n      </div>\n\n      <div class=\"cgt-col-xs-4 cgt-col-sm-4 cgt-col-md-6 cgt-col-lg-6\">\n          <bbva-form-text \n            label=\"N\xFAmero de notar\xECa *\" \n            value=\"\"\n            error-message=\"Ingrese un n\xFAmero de notar\xECa v\xE1lido\"\n            validate-on-blur\n            pattern=\"\\\\d{3}\"\n            allowed-pattern=\"\\\\d\"\n            form=\"formNumberNotary\">\n          </bbva-form-text>\n      </div>\n      <div class=\"cgt-col-xs-4 cgt-col-sm-4 cgt-col-md-6 cgt-col-lg-6\">\n          <bbva-form-text \n            label=\"Nombre de notario *\" \n            value=\"\" \n            error-message=\"Ingrese un nombre v\xE1lido\"\n            validate-on-blur\n            asedfr sf\xF1sdfwerPwer\n            pattern=\"^[A-Za-z\xC1\xC9\xCD\xD3\xDA\xF1\xE1\xE9\xED\xF3\xFA\xD1\\\\s]{2,20}$\"\n            allowed-pattern=\"[a-zA-Z\xC1\xC9\xCD\xD3\xDA\xF1\xE1\xE9\xED\xF3\xFA\xD1\\\\s]\"\n            form=\"formNameNotary\">\n          </bbva-form-text>\n      </div>\n      <div class=\"cgt-col-xs-4 cgt-col-sm-4 cgt-col-md-6 cgt-col-lg-6\">\n          <bbva-form-text \n            label=\"Apeliido Paterno de notario *\" \n            value=\"\" \n            error-message=\"Ingrese un apellido paterno v\xE1lido\"\n            validate-on-blur\n            pattern=\"^[A-Za-z\xC1\xC9\xCD\xD3\xDA\xF1\xE1\xE9\xED\xF3\xFA\xD1\\\\s]{2,20}$\"\n            allowed-pattern=\"[a-zA-Z\xC1\xC9\xCD\xD3\xDA\xF1\xE1\xE9\xED\xF3\xFA\xD1\\\\s]\"\n            form=\"formNameNotary\">\n          </bbva-form-text>\n      </div>\n      <div class=\"cgt-col-xs-4 cgt-col-sm-4 cgt-col-md-6 cgt-col-lg-6\">\n          <bbva-form-text \n            label=\"Apellido Materno de notario\" \n            value=\"\"             \n            pattern=\"^[A-Za-z\xC1\xC9\xCD\xD3\xDA\xF1\xE1\xE9\xED\xF3\xFA\xD1\\\\s]{2,20}$\"\n            allowed-pattern=\"[a-zA-Z\xC1\xC9\xCD\xD3\xDA\xF1\xE1\xE9\xED\xF3\xFA\xD1\\\\s]\"\n            form=\"formNameNotary\">\n          </bbva-form-text>\n      </div>\n      <div class=\"cgt-col-xs-4 cgt-col-sm-4 cgt-col-md-6 cgt-col-lg-6\">\n        <bbva-form-text \n            label=\"Direcci\xF2n *\" \n            value=\"\" \n            error-message=\"Ingrese correctamente una direcci\xF2n\"\n            validate-on-blur\n            pattern=\"^[A-Za-z\xC1\xC9\xCD\xD3\xDA\xF1\xE1\xE9\xED\xF3\xFA\xD1\\\\s\\\\d]{2,50}$\"\n            allowed-pattern=\"[a-zA-Z\xC1\xC9\xCD\xD3\xDA\xF1\xE1\xE9\xED\xF3\xFA\xD1\\\\s\\\\d]\"\n            form=\"formDirection\">\n          </bbva-form-text>\n      </div>\n      <div class=\"cgt-col-xs-4 cgt-col-sm-4 cgt-col-md-6 cgt-col-lg-6\">\n        <bbva-form-text \n            label=\"RFC de notario *\" \n            value=\"\" \n            error-message=\"Ingrese correctamente un RFC\"\n            validate-on-blur\n            pattern=\"^[a-zA-Z\xF1\xD1]{4}[\\\\d]{2}(0[1-9]|1[0-2])(0[1-9]|[12][0-9]|3[0-1])([a-zA-Z\\\\d]{3})?$\"\n            allowed-pattern=\"[a-zA-Z\xF1\xD1\\\\d]\"\n            form=\"formRFCNotary\">\n          </bbva-form-text>\n      </div>\n        \n      <div class=\"cgt-col-xs-4 cgt-col-sm-4 cgt-col-md-6 cgt-col-lg-6\">\n        <bbva-form-text \n            label=\"Email de notario *\" \n            value=\"\" \n            error-message=\"Ingrese correctamente un e-mail\"\n            validate-on-blur\n            pattern=\"^[_a-z0-9-]+(.[_a-z0-9-]+)*@[a-z0-9-]+(.[a-z0-9-]+)*(.[a-z]{2,4})$\"\n            allowed-pattern=\".\"\n            form=\"formEmailNotary\">\n          </bbva-form-text>\n      </div>\n      <div class=\"cgt-col-xs-4 cgt-col-sm-4 cgt-col-md-6 cgt-col-lg-6\">\n        <bbva-form-text \n          label=\"Tel\xE8fono de notario *\" \n          value=\"\" \n          error-message=\"Ingrese correctamente un tel\xE8fono\"\n            validate-on-blur\n            pattern=\"\\\\d{10}\"\n            allowed-pattern=\"[0-9]\"\n            form=\"formPhoneNotary\">\n        </bbva-form-text>\n      </div>\n     <!-- <div class=\"cgt-col-xs-4 cgt-col-sm-4 cgt-col-md-6 cgt-col-lg-6\">\n        <bbva-form-text \n          label=\"ID Notario en BBVA *\" \n          value=\"\" \n          error-message=\"Ingrese correctamente un ID notario\"\n            validate-on-blur\n            pattern=\"\\\\d{5}\"\n            allowed-pattern=\"[0-9]\"\n            form=\"formIdNotaryBBVA\">\n        </bbva-form-text>\n      </div>\n      <div class=\"cgt-col-xs-4 cgt-col-sm-4 cgt-col-md-6 cgt-col-lg-6\">\n        <bbva-form-text \n          label=\"Alta en e-Notario *\" \n          value=\"\" \n          error-message=\"Ingrese correctamente un e-notario\"\n            validate-on-blur\n            pattern=\"\\\\d{3}\"\n            allowed-pattern=\"[0-9]\"\n            form=\"formEnotary\">\n        </bbva-form-text>\n      </div>-->\n      <div class=\"cgt-col-xs-4 cgt-col-sm-4 cgt-col-md-6 cgt-col-lg-6\">\n        <bbva-list-toggle heading=\"Adjuntar CV\" link-text=\"\"></bbva-list-toggle>\n      </div>\n    </div>\n    "]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }










var SectionOne =
/*#__PURE__*/
function (_CellsPage) {
  _inherits(SectionOne, _CellsPage);

  _createClass(SectionOne, null, [{
    key: "is",
    get: function get() {
      return 'section-one';
    }
  }]);

  function SectionOne() {
    _classCallCheck(this, SectionOne);

    return _possibleConstructorReturn(this, _getPrototypeOf(SectionOne).call(this));
  }

  _createClass(SectionOne, [{
    key: "onPageEnter",
    value: function onPageEnter() {
      console.log('Page loaded');
    }
  }, {
    key: "onPageLeave",
    value: function onPageLeave() {
      console.log('Page unloaded');
    }
  }, {
    key: "render",
    value: function render() {
      return Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["html"])(_templateObject());
    }
  }], [{
    key: "properties",
    get: function get() {
      return {
        headerTitle: {
          type: String
        }
      };
    }
  }, {
    key: "styles",
    get: function get() {
      return [_grid_templete__WEBPACK_IMPORTED_MODULE_7__["gridTempleteCss"], Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["css"])(_templateObject2())];
    }
  }]);

  return SectionOne;
}(_cells_cells_page__WEBPACK_IMPORTED_MODULE_0__["CellsPage"]);

window.customElements.define(SectionOne.is, SectionOne);

/***/ }),

/***/ "./app/pages/form/section-three.js":
/*!*****************************************!*\
  !*** ./app/pages/form/section-three.js ***!
  \*****************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _cells_cells_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @cells/cells-page */ "./node_modules/@cells/cells-page/cells-page.js");
/* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lit-element */ "./node_modules/lit-element/lit-element.js");
/* harmony import */ var _cells_components_cells_template_paper_drawer_panel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @cells-components/cells-template-paper-drawer-panel */ "./node_modules/@cells-components/cells-template-paper-drawer-panel/cells-template-paper-drawer-panel.js");
/* harmony import */ var _cells_components_coronita_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @cells-components/coronita-icons */ "./node_modules/@cells-components/coronita-icons/coronita-icons.js");
/* harmony import */ var _bbva_web_components_bbva_form_select__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @bbva-web-components/bbva-form-select */ "./node_modules/@bbva-web-components/bbva-form-select/bbva-form-select.js");
/* harmony import */ var _bbva_web_components_bbva_form_text__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @bbva-web-components/bbva-form-text */ "./node_modules/@bbva-web-components/bbva-form-text/bbva-form-text.js");
/* harmony import */ var _bbva_web_components_bbva_list_toggle__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @bbva-web-components/bbva-list-toggle */ "./node_modules/@bbva-web-components/bbva-list-toggle/bbva-list-toggle.js");
/* harmony import */ var _bbva_web_components_bbva_form_date__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @bbva-web-components/bbva-form-date */ "./node_modules/@bbva-web-components/bbva-form-date/bbva-form-date.js");
/* harmony import */ var _grid_templete__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../grid-templete */ "./app/pages/grid-templete.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n      bbva-form-option,\n      bbva-form-date,\n      bbva-form-text{\n        text-align: left;\n      }\n    "]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n    <div class=\"cgt\">\n      <div class=\"cgt-col-xs-4 cgt-col-sm-4 cgt-col-md-6 cgt-col-lg-6\">\n        <bbva-list-toggle heading=\"Escrito ausencia confllicto de inter\xE9s\" link-text=\"\"></bbva-list-toggle>\n      </div>\n    </div>\n    "]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }











var SectionThree =
/*#__PURE__*/
function (_CellsPage) {
  _inherits(SectionThree, _CellsPage);

  _createClass(SectionThree, null, [{
    key: "is",
    get: function get() {
      return 'section-three';
    }
  }]);

  function SectionThree() {
    _classCallCheck(this, SectionThree);

    return _possibleConstructorReturn(this, _getPrototypeOf(SectionThree).call(this));
  }

  _createClass(SectionThree, [{
    key: "onPageEnter",
    value: function onPageEnter() {
      console.log('Page loaded');
    }
  }, {
    key: "onPageLeave",
    value: function onPageLeave() {
      console.log('Page unloaded');
    }
  }, {
    key: "render",
    value: function render() {
      return Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["html"])(_templateObject());
    }
  }], [{
    key: "properties",
    get: function get() {
      return {
        headerTitle: {
          type: String
        }
      };
    }
  }, {
    key: "styles",
    get: function get() {
      return [_grid_templete__WEBPACK_IMPORTED_MODULE_8__["gridTempleteCss"], Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["css"])(_templateObject2())];
    }
  }]);

  return SectionThree;
}(_cells_cells_page__WEBPACK_IMPORTED_MODULE_0__["CellsPage"]);

window.customElements.define(SectionThree.is, SectionThree);

/***/ }),

/***/ "./app/pages/form/section-two.js":
/*!***************************************!*\
  !*** ./app/pages/form/section-two.js ***!
  \***************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _cells_cells_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @cells/cells-page */ "./node_modules/@cells/cells-page/cells-page.js");
/* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lit-element */ "./node_modules/lit-element/lit-element.js");
/* harmony import */ var _cells_components_cells_template_paper_drawer_panel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @cells-components/cells-template-paper-drawer-panel */ "./node_modules/@cells-components/cells-template-paper-drawer-panel/cells-template-paper-drawer-panel.js");
/* harmony import */ var _cells_components_coronita_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @cells-components/coronita-icons */ "./node_modules/@cells-components/coronita-icons/coronita-icons.js");
/* harmony import */ var _bbva_web_components_bbva_form_select__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @bbva-web-components/bbva-form-select */ "./node_modules/@bbva-web-components/bbva-form-select/bbva-form-select.js");
/* harmony import */ var _bbva_web_components_bbva_form_text__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @bbva-web-components/bbva-form-text */ "./node_modules/@bbva-web-components/bbva-form-text/bbva-form-text.js");
/* harmony import */ var _bbva_web_components_bbva_list_toggle__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @bbva-web-components/bbva-list-toggle */ "./node_modules/@bbva-web-components/bbva-list-toggle/bbva-list-toggle.js");
/* harmony import */ var _bbva_web_components_bbva_form_date__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @bbva-web-components/bbva-form-date */ "./node_modules/@bbva-web-components/bbva-form-date/bbva-form-date.js");
/* harmony import */ var _grid_templete__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../grid-templete */ "./app/pages/grid-templete.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n        bbva-form-option,\n        bbva-form-date,\n        bbva-form-text{\n          text-align: left;\n        }\n\n        .form {\n          margin: 0 4rem;\n        }\n    "]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n    <div class=\"cgt form\">\n      <div class=\"cgt-col-xs-4 cgt-col-sm-4 cgt-col-md-6 cgt-col-lg-6\">\n        <bbva-list-toggle heading=\"Patente notarial vigente\" link-text=\"\"></bbva-list-toggle>\n      </div>\n      <div class=\"cgt-col-xs-4 cgt-col-sm-4 cgt-col-md-6 cgt-col-lg-6\">\n        <bbva-form-date label=\"Inicio actividad notarial\" required=\"\" validate-on-blur=\"\"></bbva-form-date>\n      </div>\n      <div class=\"cgt-col-xs-4 cgt-col-sm-4 cgt-col-md-6 cgt-col-lg-6\">\n        <bbva-form-text \n          label=\"Expertise operaciones *\" \n          value=\"\"\n          error-message=\"Ingrese correctamente Expertise operaciones\"\n          validate-on-blur\n          pattern=\"\\d{3}\"\n          allowed-pattern=\"[0-9]\"\n          form=\"formExperienceOperations\">\n        </bbva-form-text>\n      </div>\n      <div class=\"cgt-col-xs-4 cgt-col-sm-4 cgt-col-md-6 cgt-col-lg-6\">\n        <bbva-list-toggle heading=\"Referencia\" link-text=\"\"></bbva-list-toggle>\n      </div>\n\n      <div class=\"cgt-col-xs-4 cgt-col-sm-4 cgt-col-md-6 cgt-col-lg-6\">\n          <bbva-form-text \n            label=\"Personal asignado como frente BBVA *\" \n            value=\"\"\n            error-message=\"Ingrese correctamente Personal asignado como frente BBVA\"\n            validate-on-blur\n            pattern=\"^[a-zA-Z\xF1\xD1]{4}[\\d]{2}(0[1-9]|1[0-2])(0[1-9]|[12][0-9]|3[0-1])([a-zA-Z\\d]{3})?$\"\n            allowed-pattern=\"[a-zA-Z\xF1\xD1\\d]\"\n            form=\"formBbvaStaff\">\n          </bbva-form-text>\n      </div>\n      <div class=\"cgt-col-xs-4 cgt-col-sm-4 cgt-col-md-6 cgt-col-lg-6\">\n          <bbva-form-text \n            label=\"Nombre del personal *\" \n            value=\"\" \n            error-message=\"Ingrese correctamente un nombre\"\n            validate-on-blur\n            pattern=\"^[a-zA-Z\xF1\xD1]{4}[\\d]{2}(0[1-9]|1[0-2])(0[1-9]|[12][0-9]|3[0-1])([a-zA-Z\\d]{3})?$\"\n            allowed-pattern=\"[a-zA-Z\xF1\xD1\\d]\"\n            form=\"formNameStaff\">\n          </bbva-form-text>\n      </div>\n      <div class=\"cgt-col-xs-4 cgt-col-sm-4 cgt-col-md-6 cgt-col-lg-6\">\n        <bbva-form-text \n            label=\"Apellido Paterno del personal *\" \n            value=\"\" \n            error-message=\"Ingrese correctamente apellido paterno del personal\"\n            validate-on-blur\n            pattern=\"^[a-zA-Z\xF1\xD1]{4}[\\d]{2}(0[1-9]|1[0-2])(0[1-9]|[12][0-9]|3[0-1])([a-zA-Z\\d]{3})?$\"\n            allowed-pattern=\"[a-zA-Z\xF1\xD1\\d]\"\n            form=\"formLastNameStaff\">\n          </bbva-form-text>\n      </div>\n      <div class=\"cgt-col-xs-4 cgt-col-sm-4 cgt-col-md-6 cgt-col-lg-6\">\n        <bbva-form-text \n            label=\"Apellido Materno del personal\" \n            value=\"\" \n            error-message=\"Ingrese correctamente apellido materno del personal\"\n            pattern=\"^[a-zA-Z\xF1\xD1]{4}[\\d]{2}(0[1-9]|1[0-2])(0[1-9]|[12][0-9]|3[0-1])([a-zA-Z\\d]{3})?$\"\n            allowed-pattern=\"[a-zA-Z\xF1\xD1\\d]\"\n            form=\"formSecondLastNameStaff\">\n          </bbva-form-text>\n      </div>\n        \n      <div class=\"cgt-col-xs-4 cgt-col-sm-4 cgt-col-md-6 cgt-col-lg-6\">\n        <bbva-form-text \n            label=\"Puesto del personal *\" \n            value=\"\" \n            error-message=\"Ingrese correctamente puesto del personal\"\n            validate-on-blur\n            pattern=\"^[a-zA-Z\xF1\xD1]{4}[\\d]{2}(0[1-9]|1[0-2])(0[1-9]|[12][0-9]|3[0-1])([a-zA-Z\\d]{3})?$\"\n            allowed-pattern=\"[a-zA-Z\xF1\xD1\\d]\"\n            form=\"formEmailNotary\">\n          </bbva-form-text>\n      </div>\n      \n      <div class=\"cgt-col-xs-4 cgt-col-sm-4 cgt-col-md-6 cgt-col-lg-6\">\n        <bbva-form-text \n          label=\"Protocolo CX*\" \n          value=\"\" \n          error-message=\"Ingrese correctamente un Protocolo CX\"\n            validate-on-blur\n            pattern=\"^[a-zA-Z\xF1\xD1]{4}[\\d]{2}(0[1-9]|1[0-2])(0[1-9]|[12][0-9]|3[0-1])([a-zA-Z\\d]{3})?$\"\n            allowed-pattern=\"[a-zA-Z\xF1\xD1\\d]\"\n            form=\"formCXprotocol>\n        </bbva-form-text>\n      </div>\n   </div>\n    "], ["\n    <div class=\"cgt form\">\n      <div class=\"cgt-col-xs-4 cgt-col-sm-4 cgt-col-md-6 cgt-col-lg-6\">\n        <bbva-list-toggle heading=\"Patente notarial vigente\" link-text=\"\"></bbva-list-toggle>\n      </div>\n      <div class=\"cgt-col-xs-4 cgt-col-sm-4 cgt-col-md-6 cgt-col-lg-6\">\n        <bbva-form-date label=\"Inicio actividad notarial\" required=\"\" validate-on-blur=\"\"></bbva-form-date>\n      </div>\n      <div class=\"cgt-col-xs-4 cgt-col-sm-4 cgt-col-md-6 cgt-col-lg-6\">\n        <bbva-form-text \n          label=\"Expertise operaciones *\" \n          value=\"\"\n          error-message=\"Ingrese correctamente Expertise operaciones\"\n          validate-on-blur\n          pattern=\"\\\\d{3}\"\n          allowed-pattern=\"[0-9]\"\n          form=\"formExperienceOperations\">\n        </bbva-form-text>\n      </div>\n      <div class=\"cgt-col-xs-4 cgt-col-sm-4 cgt-col-md-6 cgt-col-lg-6\">\n        <bbva-list-toggle heading=\"Referencia\" link-text=\"\"></bbva-list-toggle>\n      </div>\n\n      <div class=\"cgt-col-xs-4 cgt-col-sm-4 cgt-col-md-6 cgt-col-lg-6\">\n          <bbva-form-text \n            label=\"Personal asignado como frente BBVA *\" \n            value=\"\"\n            error-message=\"Ingrese correctamente Personal asignado como frente BBVA\"\n            validate-on-blur\n            pattern=\"^[a-zA-Z\xF1\xD1]{4}[\\\\d]{2}(0[1-9]|1[0-2])(0[1-9]|[12][0-9]|3[0-1])([a-zA-Z\\\\d]{3})?$\"\n            allowed-pattern=\"[a-zA-Z\xF1\xD1\\\\d]\"\n            form=\"formBbvaStaff\">\n          </bbva-form-text>\n      </div>\n      <div class=\"cgt-col-xs-4 cgt-col-sm-4 cgt-col-md-6 cgt-col-lg-6\">\n          <bbva-form-text \n            label=\"Nombre del personal *\" \n            value=\"\" \n            error-message=\"Ingrese correctamente un nombre\"\n            validate-on-blur\n            pattern=\"^[a-zA-Z\xF1\xD1]{4}[\\\\d]{2}(0[1-9]|1[0-2])(0[1-9]|[12][0-9]|3[0-1])([a-zA-Z\\\\d]{3})?$\"\n            allowed-pattern=\"[a-zA-Z\xF1\xD1\\\\d]\"\n            form=\"formNameStaff\">\n          </bbva-form-text>\n      </div>\n      <div class=\"cgt-col-xs-4 cgt-col-sm-4 cgt-col-md-6 cgt-col-lg-6\">\n        <bbva-form-text \n            label=\"Apellido Paterno del personal *\" \n            value=\"\" \n            error-message=\"Ingrese correctamente apellido paterno del personal\"\n            validate-on-blur\n            pattern=\"^[a-zA-Z\xF1\xD1]{4}[\\\\d]{2}(0[1-9]|1[0-2])(0[1-9]|[12][0-9]|3[0-1])([a-zA-Z\\\\d]{3})?$\"\n            allowed-pattern=\"[a-zA-Z\xF1\xD1\\\\d]\"\n            form=\"formLastNameStaff\">\n          </bbva-form-text>\n      </div>\n      <div class=\"cgt-col-xs-4 cgt-col-sm-4 cgt-col-md-6 cgt-col-lg-6\">\n        <bbva-form-text \n            label=\"Apellido Materno del personal\" \n            value=\"\" \n            error-message=\"Ingrese correctamente apellido materno del personal\"\n            pattern=\"^[a-zA-Z\xF1\xD1]{4}[\\\\d]{2}(0[1-9]|1[0-2])(0[1-9]|[12][0-9]|3[0-1])([a-zA-Z\\\\d]{3})?$\"\n            allowed-pattern=\"[a-zA-Z\xF1\xD1\\\\d]\"\n            form=\"formSecondLastNameStaff\">\n          </bbva-form-text>\n      </div>\n        \n      <div class=\"cgt-col-xs-4 cgt-col-sm-4 cgt-col-md-6 cgt-col-lg-6\">\n        <bbva-form-text \n            label=\"Puesto del personal *\" \n            value=\"\" \n            error-message=\"Ingrese correctamente puesto del personal\"\n            validate-on-blur\n            pattern=\"^[a-zA-Z\xF1\xD1]{4}[\\\\d]{2}(0[1-9]|1[0-2])(0[1-9]|[12][0-9]|3[0-1])([a-zA-Z\\\\d]{3})?$\"\n            allowed-pattern=\"[a-zA-Z\xF1\xD1\\\\d]\"\n            form=\"formEmailNotary\">\n          </bbva-form-text>\n      </div>\n      \n      <div class=\"cgt-col-xs-4 cgt-col-sm-4 cgt-col-md-6 cgt-col-lg-6\">\n        <bbva-form-text \n          label=\"Protocolo CX*\" \n          value=\"\" \n          error-message=\"Ingrese correctamente un Protocolo CX\"\n            validate-on-blur\n            pattern=\"^[a-zA-Z\xF1\xD1]{4}[\\\\d]{2}(0[1-9]|1[0-2])(0[1-9]|[12][0-9]|3[0-1])([a-zA-Z\\\\d]{3})?$\"\n            allowed-pattern=\"[a-zA-Z\xF1\xD1\\\\d]\"\n            form=\"formCXprotocol>\n        </bbva-form-text>\n      </div>\n   </div>\n    "]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }











var SectionTwo =
/*#__PURE__*/
function (_CellsPage) {
  _inherits(SectionTwo, _CellsPage);

  _createClass(SectionTwo, null, [{
    key: "is",
    get: function get() {
      return 'section-two';
    }
  }]);

  function SectionTwo() {
    _classCallCheck(this, SectionTwo);

    return _possibleConstructorReturn(this, _getPrototypeOf(SectionTwo).call(this));
  }

  _createClass(SectionTwo, [{
    key: "onPageEnter",
    value: function onPageEnter() {
      console.log('Page loaded');
    }
  }, {
    key: "onPageLeave",
    value: function onPageLeave() {
      console.log('Page unloaded');
    }
  }, {
    key: "render",
    value: function render() {
      return Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["html"])(_templateObject());
    }
  }], [{
    key: "properties",
    get: function get() {
      return {
        headerTitle: {
          type: String
        }
      };
    }
  }, {
    key: "styles",
    get: function get() {
      return [_grid_templete__WEBPACK_IMPORTED_MODULE_8__["gridTempleteCss"], Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["css"])(_templateObject2())];
    }
  }]);

  return SectionTwo;
}(_cells_cells_page__WEBPACK_IMPORTED_MODULE_0__["CellsPage"]);

window.customElements.define(SectionTwo.is, SectionTwo);

/***/ }),

/***/ "./app/pages/grid-templete.js":
/*!************************************!*\
  !*** ./app/pages/grid-templete.js ***!
  \************************************/
/*! exports provided: gridTempleteCss */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "gridTempleteCss", function() { return gridTempleteCss; });
/* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lit-element */ "./node_modules/lit-element/lit-element.js");
function _templateObject() {
  var data = _taggedTemplateLiteral(["\n.cgt {\n    --cells-grid-template-gutter-width: 32px;\n    display: -webkit-box;\n    display: flex;\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: normal;\n            flex-direction: row;\n    flex-wrap: wrap;\n    margin: var(--cells-grid-template-margin, auto);\n    @apply --cells-grid-template-cgt; }\n    @media screen and (min-width: 62em) {\n      .cgt {\n        max-width: 960px; } }\n    @media screen and (min-width: 75em) {\n      .cgt {\n        max-width: 1176px; } }\n  \n  [class*=\"cgt-col\"] {\n    display: block;\n    width: calc(100% - var(--cells-grid-template-gutter-width,32px));\n    margin: 0 calc(var(--cells-grid-template-gutter-width,32px) / 2);\n    box-sizing: border-box; }\n  \n  @media screen and (max-width: 37.4375em) {\n    .cgt-col-xs-1 {\n      width: calc((100% / 4) * 1 - var(--cells-grid-template-gutter-width,32px)); }\n    .cgt-col-xs-ml-1 {\n      margin-left: calc((100% / 4) * 1 + var(--cells-grid-template-gutter-width,32px) / 2); }\n    .cgt-col-xs-mr-1 {\n      margin-right: calc((100% / 4) * 1 + var(--cells-grid-template-gutter-width,32px) / 2); }\n    .cgt-col-xs-2 {\n      width: calc((100% / 4) * 2 - var(--cells-grid-template-gutter-width,32px)); }\n    .cgt-col-xs-ml-2 {\n      margin-left: calc((100% / 4) * 2 + var(--cells-grid-template-gutter-width,32px) / 2); }\n    .cgt-col-xs-mr-2 {\n      margin-right: calc((100% / 4) * 2 + var(--cells-grid-template-gutter-width,32px) / 2); }\n    .cgt-col-xs-3 {\n      width: calc((100% / 4) * 3 - var(--cells-grid-template-gutter-width,32px)); }\n    .cgt-col-xs-ml-3 {\n      margin-left: calc((100% / 4) * 3 + var(--cells-grid-template-gutter-width,32px) / 2); }\n    .cgt-col-xs-mr-3 {\n      margin-right: calc((100% / 4) * 3 + var(--cells-grid-template-gutter-width,32px) / 2); }\n    .cgt-col-xs-4 {\n      width: calc((100% / 4) * 4 - var(--cells-grid-template-gutter-width,32px)); }\n    .cgt-col-xs-ml-4 {\n      margin-left: calc((100% / 4) * 4 + var(--cells-grid-template-gutter-width,32px) / 2); }\n    .cgt-col-xs-mr-4 {\n      margin-right: calc((100% / 4) * 4 + var(--cells-grid-template-gutter-width,32px) / 2); }\n    .cgt-col-xs-ml-0 {\n      margin-left: calc(var(--cells-grid-template-gutter-width,32px) / 2); }\n    .cgt-col-xs-mr-0 {\n      margin-right: calc(var(--cells-grid-template-gutter-width,32px) / 2); }\n    .cgt-col-xs-m-0 {\n      margin-left: calc(var(--cells-grid-template-gutter-width,32px) / 2);\n      margin-right: calc(var(--cells-grid-template-gutter-width,32px) / 2); } }\n  \n  @media screen and (min-width: 37.5em) {\n    .cgt-col-sm-1 {\n      width: calc((100% / 8) * 1 - var(--cells-grid-template-gutter-width,32px)); }\n    .cgt-col-sm-ml-1 {\n      margin-left: calc((100% / 8) * 1 + var(--cells-grid-template-gutter-width,32px) / 2); }\n    .cgt-col-sm-mr-1 {\n      margin-right: calc((100% / 8) * 1 + var(--cells-grid-template-gutter-width,32px) / 2); }\n    .cgt-col-sm-2 {\n      width: calc((100% / 8) * 2 - var(--cells-grid-template-gutter-width,32px)); }\n    .cgt-col-sm-ml-2 {\n      margin-left: calc((100% / 8) * 2 + var(--cells-grid-template-gutter-width,32px) / 2); }\n    .cgt-col-sm-mr-2 {\n      margin-right: calc((100% / 8) * 2 + var(--cells-grid-template-gutter-width,32px) / 2); }\n    .cgt-col-sm-3 {\n      width: calc((100% / 8) * 3 - var(--cells-grid-template-gutter-width,32px)); }\n    .cgt-col-sm-ml-3 {\n      margin-left: calc((100% / 8) * 3 + var(--cells-grid-template-gutter-width,32px) / 2); }\n    .cgt-col-sm-mr-3 {\n      margin-right: calc((100% / 8) * 3 + var(--cells-grid-template-gutter-width,32px) / 2); }\n    .cgt-col-sm-4 {\n      width: calc((100% / 8) * 4 - var(--cells-grid-template-gutter-width,32px)); }\n    .cgt-col-sm-ml-4 {\n      margin-left: calc((100% / 8) * 4 + var(--cells-grid-template-gutter-width,32px) / 2); }\n    .cgt-col-sm-mr-4 {\n      margin-right: calc((100% / 8) * 4 + var(--cells-grid-template-gutter-width,32px) / 2); }\n    .cgt-col-sm-5 {\n      width: calc((100% / 8) * 5 - var(--cells-grid-template-gutter-width,32px)); }\n    .cgt-col-sm-ml-5 {\n      margin-left: calc((100% / 8) * 5 + var(--cells-grid-template-gutter-width,32px) / 2); }\n    .cgt-col-sm-mr-5 {\n      margin-right: calc((100% / 8) * 5 + var(--cells-grid-template-gutter-width,32px) / 2); }\n    .cgt-col-sm-6 {\n      width: calc((100% / 8) * 6 - var(--cells-grid-template-gutter-width,32px)); }\n    .cgt-col-sm-ml-6 {\n      margin-left: calc((100% / 8) * 6 + var(--cells-grid-template-gutter-width,32px) / 2); }\n    .cgt-col-sm-mr-6 {\n      margin-right: calc((100% / 8) * 6 + var(--cells-grid-template-gutter-width,32px) / 2); }\n    .cgt-col-sm-7 {\n      width: calc((100% / 8) * 7 - var(--cells-grid-template-gutter-width,32px)); }\n    .cgt-col-sm-ml-7 {\n      margin-left: calc((100% / 8) * 7 + var(--cells-grid-template-gutter-width,32px) / 2); }\n    .cgt-col-sm-mr-7 {\n      margin-right: calc((100% / 8) * 7 + var(--cells-grid-template-gutter-width,32px) / 2); }\n    .cgt-col-sm-8 {\n      width: calc((100% / 8) * 8 - var(--cells-grid-template-gutter-width,32px)); }\n    .cgt-col-sm-ml-8 {\n      margin-left: calc((100% / 8) * 8 + var(--cells-grid-template-gutter-width,32px) / 2); }\n    .cgt-col-sm-mr-8 {\n      margin-right: calc((100% / 8) * 8 + var(--cells-grid-template-gutter-width,32px) / 2); }\n    .cgt-col-sm-ml-0 {\n      margin-left: calc(var(--cells-grid-template-gutter-width,32px) / 2); }\n    .cgt-col-sm-mr-0 {\n      margin-right: calc(var(--cells-grid-template-gutter-width,32px) / 2); }\n    .cgt-col-sm-m-0 {\n      margin-left: calc(var(--cells-grid-template-gutter-width,32px) / 2);\n      margin-right: calc(var(--cells-grid-template-gutter-width,32px) / 2); } }\n  \n  @media screen and (min-width: 62em) {\n    .cgt-col-md-1 {\n      width: calc((100% / 12) * 1 - var(--cells-grid-template-gutter-width,32px)); }\n    .cgt-col-md-ml-1 {\n      margin-left: calc((100% / 12) * 1 + var(--cells-grid-template-gutter-width,32px) / 2); }\n    .cgt-col-md-mr-1 {\n      margin-right: calc((100% / 12) * 1 + var(--cells-grid-template-gutter-width,32px) / 2); }\n    .cgt-col-md-2 {\n      width: calc((100% / 12) * 2 - var(--cells-grid-template-gutter-width,32px)); }\n    .cgt-col-md-ml-2 {\n      margin-left: calc((100% / 12) * 2 + var(--cells-grid-template-gutter-width,32px) / 2); }\n    .cgt-col-md-mr-2 {\n      margin-right: calc((100% / 12) * 2 + var(--cells-grid-template-gutter-width,32px) / 2); }\n    .cgt-col-md-3 {\n      width: calc((100% / 12) * 3 - var(--cells-grid-template-gutter-width,32px)); }\n    .cgt-col-md-ml-3 {\n      margin-left: calc((100% / 12) * 3 + var(--cells-grid-template-gutter-width,32px) / 2); }\n    .cgt-col-md-mr-3 {\n      margin-right: calc((100% / 12) * 3 + var(--cells-grid-template-gutter-width,32px) / 2); }\n    .cgt-col-md-4 {\n      width: calc((100% / 12) * 4 - var(--cells-grid-template-gutter-width,32px)); }\n    .cgt-col-md-ml-4 {\n      margin-left: calc((100% / 12) * 4 + var(--cells-grid-template-gutter-width,32px) / 2); }\n    .cgt-col-md-mr-4 {\n      margin-right: calc((100% / 12) * 4 + var(--cells-grid-template-gutter-width,32px) / 2); }\n    .cgt-col-md-5 {\n      width: calc((100% / 12) * 5 - var(--cells-grid-template-gutter-width,32px)); }\n    .cgt-col-md-ml-5 {\n      margin-left: calc((100% / 12) * 5 + var(--cells-grid-template-gutter-width,32px) / 2); }\n    .cgt-col-md-mr-5 {\n      margin-right: calc((100% / 12) * 5 + var(--cells-grid-template-gutter-width,32px) / 2); }\n    .cgt-col-md-6 {\n      width: calc((100% / 12) * 6 - var(--cells-grid-template-gutter-width,32px)); }\n    .cgt-col-md-ml-6 {\n      margin-left: calc((100% / 12) * 6 + var(--cells-grid-template-gutter-width,32px) / 2); }\n    .cgt-col-md-mr-6 {\n      margin-right: calc((100% / 12) * 6 + var(--cells-grid-template-gutter-width,32px) / 2); }\n    .cgt-col-md-7 {\n      width: calc((100% / 12) * 7 - var(--cells-grid-template-gutter-width,32px)); }\n    .cgt-col-md-ml-7 {\n      margin-left: calc((100% / 12) * 7 + var(--cells-grid-template-gutter-width,32px) / 2); }\n    .cgt-col-md-mr-7 {\n      margin-right: calc((100% / 12) * 7 + var(--cells-grid-template-gutter-width,32px) / 2); }\n    .cgt-col-md-8 {\n      width: calc((100% / 12) * 8 - var(--cells-grid-template-gutter-width,32px)); }\n    .cgt-col-md-ml-8 {\n      margin-left: calc((100% / 12) * 8 + var(--cells-grid-template-gutter-width,32px) / 2); }\n    .cgt-col-md-mr-8 {\n      margin-right: calc((100% / 12) * 8 + var(--cells-grid-template-gutter-width,32px) / 2); }\n    .cgt-col-md-9 {\n      width: calc((100% / 12) * 9 - var(--cells-grid-template-gutter-width,32px)); }\n    .cgt-col-md-ml-9 {\n      margin-left: calc((100% / 12) * 9 + var(--cells-grid-template-gutter-width,32px) / 2); }\n    .cgt-col-md-mr-9 {\n      margin-right: calc((100% / 12) * 9 + var(--cells-grid-template-gutter-width,32px) / 2); }\n    .cgt-col-md-10 {\n      width: calc((100% / 12) * 10 - var(--cells-grid-template-gutter-width,32px)); }\n    .cgt-col-md-ml-10 {\n      margin-left: calc((100% / 12) * 10 + var(--cells-grid-template-gutter-width,32px) / 2); }\n    .cgt-col-md-mr-10 {\n      margin-right: calc((100% / 12) * 10 + var(--cells-grid-template-gutter-width,32px) / 2); }\n    .cgt-col-md-11 {\n      width: calc((100% / 12) * 11 - var(--cells-grid-template-gutter-width,32px)); }\n    .cgt-col-md-ml-11 {\n      margin-left: calc((100% / 12) * 11 + var(--cells-grid-template-gutter-width,32px) / 2); }\n    .cgt-col-md-mr-11 {\n      margin-right: calc((100% / 12) * 11 + var(--cells-grid-template-gutter-width,32px) / 2); }\n    .cgt-col-md-12 {\n      width: calc((100% / 12) * 12 - var(--cells-grid-template-gutter-width,32px)); }\n    .cgt-col-md-ml-12 {\n      margin-left: calc((100% / 12) * 12 + var(--cells-grid-template-gutter-width,32px) / 2); }\n    .cgt-col-md-mr-12 {\n      margin-right: calc((100% / 12) * 12 + var(--cells-grid-template-gutter-width,32px) / 2); }\n    .cgt-col-md-ml-0 {\n      margin-left: calc(var(--cells-grid-template-gutter-width,32px) / 2); }\n    .cgt-col-md-mr-0 {\n      margin-right: calc(var(--cells-grid-template-gutter-width,32px) / 2); }\n    .cgt-col-md-m-0 {\n      margin-left: calc(var(--cells-grid-template-gutter-width,32px) / 2);\n      margin-right: calc(var(--cells-grid-template-gutter-width,32px) / 2); } }\n  \n  @media screen and (min-width: 75em) {\n    .cgt-col-lg-1 {\n      width: calc((100% / 12) * 1 - var(--cells-grid-template-gutter-width,32px)); }\n    .cgt-col-lg-ml-1 {\n      margin-left: calc((100% / 12) * 1 + var(--cells-grid-template-gutter-width,32px) / 2); }\n    .cgt-col-lg-mr-1 {\n      margin-right: calc((100% / 12) * 1 + var(--cells-grid-template-gutter-width,32px) / 2); }\n    .cgt-col-lg-2 {\n      width: calc((100% / 12) * 2 - var(--cells-grid-template-gutter-width,32px)); }\n    .cgt-col-lg-ml-2 {\n      margin-left: calc((100% / 12) * 2 + var(--cells-grid-template-gutter-width,32px) / 2); }\n    .cgt-col-lg-mr-2 {\n      margin-right: calc((100% / 12) * 2 + var(--cells-grid-template-gutter-width,32px) / 2); }\n    .cgt-col-lg-3 {\n      width: calc((100% / 12) * 3 - var(--cells-grid-template-gutter-width,32px)); }\n    .cgt-col-lg-ml-3 {\n      margin-left: calc((100% / 12) * 3 + var(--cells-grid-template-gutter-width,32px) / 2); }\n    .cgt-col-lg-mr-3 {\n      margin-right: calc((100% / 12) * 3 + var(--cells-grid-template-gutter-width,32px) / 2); }\n    .cgt-col-lg-4 {\n      width: calc((100% / 12) * 4 - var(--cells-grid-template-gutter-width,32px)); }\n    .cgt-col-lg-ml-4 {\n      margin-left: calc((100% / 12) * 4 + var(--cells-grid-template-gutter-width,32px) / 2); }\n    .cgt-col-lg-mr-4 {\n      margin-right: calc((100% / 12) * 4 + var(--cells-grid-template-gutter-width,32px) / 2); }\n    .cgt-col-lg-5 {\n      width: calc((100% / 12) * 5 - var(--cells-grid-template-gutter-width,32px)); }\n    .cgt-col-lg-ml-5 {\n      margin-left: calc((100% / 12) * 5 + var(--cells-grid-template-gutter-width,32px) / 2); }\n    .cgt-col-lg-mr-5 {\n      margin-right: calc((100% / 12) * 5 + var(--cells-grid-template-gutter-width,32px) / 2); }\n    .cgt-col-lg-6 {\n      width: calc((100% / 12) * 6 - var(--cells-grid-template-gutter-width,32px)); }\n    .cgt-col-lg-ml-6 {\n      margin-left: calc((100% / 12) * 6 + var(--cells-grid-template-gutter-width,32px) / 2); }\n    .cgt-col-lg-mr-6 {\n      margin-right: calc((100% / 12) * 6 + var(--cells-grid-template-gutter-width,32px) / 2); }\n    .cgt-col-lg-7 {\n      width: calc((100% / 12) * 7 - var(--cells-grid-template-gutter-width,32px)); }\n    .cgt-col-lg-ml-7 {\n      margin-left: calc((100% / 12) * 7 + var(--cells-grid-template-gutter-width,32px) / 2); }\n    .cgt-col-lg-mr-7 {\n      margin-right: calc((100% / 12) * 7 + var(--cells-grid-template-gutter-width,32px) / 2); }\n    .cgt-col-lg-8 {\n      width: calc((100% / 12) * 8 - var(--cells-grid-template-gutter-width,32px)); }\n    .cgt-col-lg-ml-8 {\n      margin-left: calc((100% / 12) * 8 + var(--cells-grid-template-gutter-width,32px) / 2); }\n    .cgt-col-lg-mr-8 {\n      margin-right: calc((100% / 12) * 8 + var(--cells-grid-template-gutter-width,32px) / 2); }\n    .cgt-col-lg-9 {\n      width: calc((100% / 12) * 9 - var(--cells-grid-template-gutter-width,32px)); }\n    .cgt-col-lg-ml-9 {\n      margin-left: calc((100% / 12) * 9 + var(--cells-grid-template-gutter-width,32px) / 2); }\n    .cgt-col-lg-mr-9 {\n      margin-right: calc((100% / 12) * 9 + var(--cells-grid-template-gutter-width,32px) / 2); }\n    .cgt-col-lg-10 {\n      width: calc((100% / 12) * 10 - var(--cells-grid-template-gutter-width,32px)); }\n    .cgt-col-lg-ml-10 {\n      margin-left: calc((100% / 12) * 10 + var(--cells-grid-template-gutter-width,32px) / 2); }\n    .cgt-col-lg-mr-10 {\n      margin-right: calc((100% / 12) * 10 + var(--cells-grid-template-gutter-width,32px) / 2); }\n    .cgt-col-lg-11 {\n      width: calc((100% / 12) * 11 - var(--cells-grid-template-gutter-width,32px)); }\n    .cgt-col-lg-ml-11 {\n      margin-left: calc((100% / 12) * 11 + var(--cells-grid-template-gutter-width,32px) / 2); }\n    .cgt-col-lg-mr-11 {\n      margin-right: calc((100% / 12) * 11 + var(--cells-grid-template-gutter-width,32px) / 2); }\n    .cgt-col-lg-12 {\n      width: calc((100% / 12) * 12 - var(--cells-grid-template-gutter-width,32px)); }\n    .cgt-col-lg-ml-12 {\n      margin-left: calc((100% / 12) * 12 + var(--cells-grid-template-gutter-width,32px) / 2); }\n    .cgt-col-lg-mr-12 {\n      margin-right: calc((100% / 12) * 12 + var(--cells-grid-template-gutter-width,32px) / 2); }\n    .cgt-col-lg-ml-0 {\n      margin-left: calc(var(--cells-grid-template-gutter-width,32px) / 2); }\n    .cgt-col-lg-mr-0 {\n      margin-right: calc(var(--cells-grid-template-gutter-width,32px) / 2); }\n    .cgt-col-lg-m-0 {\n      margin-left: calc(var(--cells-grid-template-gutter-width,32px) / 2);\n      margin-right: calc(var(--cells-grid-template-gutter-width,32px) / 2); } }\n  \n  .no-nested-margin {\n    -webkit-box-flex: 1;\n            flex-grow: 1;\n    margin-left: 0;\n    margin-right: 0; }\n  \n  .grid--debug {\n    background-color: #FFDDDE; }\n  \n  .grid--debug [class*=\"cgt-col\"] {\n    background-color: #fff;\n    margin-top: calc(var(--cells-grid-template-gutter-width,32px) / 2);\n    margin-bottom: calc(var(--cells-grid-template-gutter-width,32px) / 2);\n    text-align: center; }\n    .grid--debug [class*=\"cgt-col\"]:after {\n      content: attr(class);\n      font-family: Roboto Mono, monaco, monospace;\n      font-size: 0.75rem; }\n  \n  .grid--overlay {\n    position: fixed;\n    top: 0;\n    bottom: 0;\n    left: 0;\n    right: 0;\n    margin: auto;\n    -webkit-box-align: stretch;\n            align-items: stretch; }\n    .grid--overlay [class*=\"cgt-col\"] {\n      background-color: rgba(192, 255, 252, 0.5); }\n    .grid--overlay [class*=\"cgt-col-xs-\"],\n    .grid--overlay [class*=\"cgt-col-sm-\"],\n    .grid--overlay [class*=\"cgt-col-md-\"],\n    .grid--overlay [class*=\"cgt-col-lg-\"] {\n      display: none; }\n    @media screen and (max-width: 37.4375em) {\n      .grid--overlay [class*=\"cgt-col-xs-\"] {\n        display: block; } }\n    @media screen and (min-width: 37.5em) {\n      .grid--overlay [class*=\"cgt-col-sm-\"] {\n        display: block; } }\n    @media screen and (min-width: 62em) {\n      .grid--overlay [class*=\"cgt-col-md-\"] {\n        display: block; } }\n    @media screen and (min-width: 75em) {\n      .grid--overlay [class*=\"cgt-col-lg-\"] {\n        display: block; } }\n  \n  [class*=\"cgt-col-\"] {\n    margin-bottom: 2rem;\n  }\n  :host(.hidden) {\n    display: none !important; }\n    "]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }


/**
 * ## Features
 *
 * - Based in flexbox.
 * - Every column has half of the gutter width (32px) as lateral margins (16px).
 * - The gutter width can be customized using the Custom CSS Property `--cells-grid-template-gutter-width`.
 * - The gutter width can be different for each breakpoint (media query).
 * - No need to use row containers.
 *
 * ## Default settings
 *
 * | Class prefix   | Media Query                    | Columns | Gutter width | Max width |
 * | :------------- | :----------------------------- | ------: | -----------: | --------: |
 * | `.cgt-col-xs-` | max-width: 37.4375em (< 600px) |       4 |         32px |         - |
 * | `.cgt-col-sm-` | min-width: 37.5em (>= 600px)   |       8 |         32px |         - |
 * | `.cgt-col-md-` | min-width: 62em (>= 992px)     |      12 |         32px |     960px |
 * | `.cgt-col-lg-` | min-width: 75em (>= 1200px)    |      12 |         32px |    1176px |
 *
 * Once the component is imported, you can use cells-grid-template classes inside your component:
 *
 *   <div class="cgt">
 *     <div class="cgt-col-xs-2">…</div>
 *     <div class="cgt-col-md-1">…</div>
 *   </div>
 *
 * __To ensure the grid to work in Safari 9.X, you need to initialize the gutter width:__
 *
 *   <style include="cells-grid-template-styles">
 *     :host {
 *       --cells-grid-template-gutter-width: 32px;
 *     }
 *   </style>
 *
 * __Internet Explorer did not support css variables, so the gutter is set by default to 32px and can not be changed__
 *
 * ## Classes
 *
 * - Grid container: `.cgt`
 * - Grid columns: `.cgt-col-<device>-<number>` (Eg.: `.cgt-col-xs-1`)
 *
 * ### Columnn margins (pull and push)
 *
 * Column grids can have left and/or right margin equal to a number of columns. This is useful to place an element in the 3rd column, for example, or to move an element to the next row.
 * The syntax is as follows, where the `<number>` refers to the number of columns:
 *
 * `.cgt-col-<device>-ml/mr-<number>`
 *
 * Examples:
 *
 * - `.cgt-col-xs-ml-2`
 * - `.cgt-col-lg-mr-1`
 *
 * To __reset margins__ to the default values use 0 as number:
 *
 * - `.cgt-col-xs-ml-0`
 * - `.cgt-col-xs-mr-0`
 * - `.cgt-col-xs-m-0` (left and right margin)
 *
 * // import cells-grid-template.scss after the vars and breakpoints map definition
 * import { gridTempleteCss } from 'grid-templete';
 *
 */

var gridTempleteCss = Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["css"])(_templateObject());

/***/ }),

/***/ "./app/pages/home-page/home-page.js":
/*!******************************************!*\
  !*** ./app/pages/home-page/home-page.js ***!
  \******************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _cells_cells_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @cells/cells-page */ "./node_modules/@cells/cells-page/cells-page.js");
/* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lit-element */ "./node_modules/lit-element/lit-element.js");
/* harmony import */ var _cells_components_cells_template_paper_drawer_panel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @cells-components/cells-template-paper-drawer-panel */ "./node_modules/@cells-components/cells-template-paper-drawer-panel/cells-template-paper-drawer-panel.js");
/* harmony import */ var _bbva_web_components_bbva_header_main__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @bbva-web-components/bbva-header-main */ "./node_modules/@bbva-web-components/bbva-header-main/bbva-header-main.js");
/* harmony import */ var _cells_components_coronita_icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @cells-components/coronita-icons */ "./node_modules/@cells-components/coronita-icons/coronita-icons.js");
/* harmony import */ var _form_form_main__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../form/form-main */ "./app/pages/form/form-main.js");
/* harmony import */ var _form_form_collapse__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../form/form-collapse */ "./app/pages/form/form-collapse.js");
/* harmony import */ var _structure_page_ext_header_bbva__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../structure-page/ext-header-bbva */ "./app/pages/structure-page/ext-header-bbva.js");
/* harmony import */ var _structure_page_ext_footer_bbva__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../structure-page/ext-footer-bbva */ "./app/pages/structure-page/ext-footer-bbva.js");
/* harmony import */ var _structure_page_login_page__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../structure-page/login-page */ "./app/pages/structure-page/login-page.js");
/* harmony import */ var _components_page_ext_table_bbva__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components-page/ext-table-bbva */ "./app/pages/components-page/ext-table-bbva.js");
/* harmony import */ var _components_page_ext_fonts_bbva__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../components-page/ext-fonts-bbva */ "./app/pages/components-page/ext-fonts-bbva.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n      bbva-header-main {\n        --bbva-header-main-bg-color: #002171;\n      }\n      :host {\n        --cells-template-paper-drawer-panel-main-padding-top: 50px;\n        --cells-template-paper-drawer-panel-footer-height: 120px;\n        --cells-template-paper-drawer-panel-section-bg: #F4F4F4;\n        font-family: var(--bbva-Book);\n      }\n      .container {\n        margin: 0 7rem;\n        background-color: white;\n      }\n      #container-login {\n        background-color: white;\n      }\n      .login {\n        width: 40%; \n        padding: 2rem; \n        position: absolute; \n        left: 50%; top: 50%; \n        transform: translate(-50%, -50%);     \n        -webkit-transform: translate(-50%, -50%);\n      }\n    "]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n      <cells-template-paper-drawer-panel id=\"temp-login\" has-footer state=\"active\">\n        <div slot=\"app__header\">                                                                                                                                                                                                                                                                                              \n          <ext-header-bbva></ext-header-bbva>\n        </div>\n\n        <div id=\"container-login\" slot=\"app__main\" class=\"login\">\n          <login-page @has-login=\"", "\"></login-page>\n        </div>\n\n        <div slot=\"app__footer\">\n          <ext-footer-bbva></ext-footer-bbva>\n        </div>\n        \n      </cells-template-paper-drawer-panel>\n\n      <cells-template-paper-drawer-panel id=\"temp-form\" has-footer state=\"inactive\">\n        <div slot=\"app__header\">                                                                                                                                                                                                                                                                                              \n          <ext-header-bbva hassession></ext-header-bbva>\n        </div>\n\n        <div slot=\"app__main\" class=\"container\">\n          <form-collapse></form-collapse>\n          <!--<form-main></form-main>-->\n        </div>\n\n        <div slot=\"app__footer\">\n          <ext-footer-bbva></ext-footer-bbva>\n        </div>\n        \n      </cells-template-paper-drawer-panel>"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }














var HomePage =
/*#__PURE__*/
function (_CellsPage) {
  _inherits(HomePage, _CellsPage);

  _createClass(HomePage, null, [{
    key: "is",
    get: function get() {
      return 'home-page';
    }
  }]);

  function HomePage() {
    var _this;

    _classCallCheck(this, HomePage);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(HomePage).call(this));
    console.log(_this.shadowRoot);
    return _this;
  }

  _createClass(HomePage, [{
    key: "onPageEnter",
    value: function onPageEnter() {
      console.log('Page loaded');
    }
  }, {
    key: "onPageLeave",
    value: function onPageLeave() {
      console.log('Page unloaded');
    }
  }, {
    key: "_handleClick",
    value: function _handleClick() {
      this.publish('from-channel', {
        from: 'home'
      });
      this.navigate('another', {
        title: 'This is another page'
      });
    }
  }, {
    key: "changeTemplete",
    value: function changeTemplete(e) {
      this.shadowRoot.querySelector('#temp-login').setAttribute('state', 'inactive');
      this.shadowRoot.querySelector('#temp-form').setAttribute('state', 'active');
    }
  }, {
    key: "render",
    value: function render() {
      return Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["html"])(_templateObject(), this.changeTemplete);
    }
  }], [{
    key: "properties",
    get: function get() {
      return {
        headerTitle: {
          type: String
        }
      };
    }
  }, {
    key: "styles",
    get: function get() {
      return [_components_page_ext_fonts_bbva__WEBPACK_IMPORTED_MODULE_11__["fontBbvaCss"], Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["css"])(_templateObject2())];
    }
  }]);

  return HomePage;
}(_cells_cells_page__WEBPACK_IMPORTED_MODULE_0__["CellsPage"]);

window.customElements.define(HomePage.is, HomePage);

/***/ }),

/***/ "./app/pages/structure-page/ext-footer-bbva.js":
/*!*****************************************************!*\
  !*** ./app/pages/structure-page/ext-footer-bbva.js ***!
  \*****************************************************/
/*! exports provided: FooterElement */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterElement", function() { return FooterElement; });
/* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lit-element */ "./node_modules/lit-element/lit-element.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n    :host {\n        display: block;\n    }\n\n    .foo {\n        position: fixed;\n        bottom: 0;\n        width: 100%;\n    }\n\n    .bbva--footer.wrapper {\n        margin-top: 7px;\n    }\n\n    footer,\n    .bbva--footer,\n    header {\n        clear: both\n    }\n\n    @media(min-width:0) and (max-width:600px) {\n        .wrapper .container {\n            max-width: 100%;\n            margin-left: auto;\n            margin-right: auto;\n        }\n\n        .wrapper .container:after {\n            content: ' ';\n            display: block;\n            clear: both\n        }\n    }\n\n    @media(min-width:600px) and (max-width:992px) {\n        .wrapper .container {\n            max-width: 100%;\n            margin-left: auto;\n            margin-right: auto\n        }\n\n        .wrapper .container:after {\n            content: ' ';\n            display: block;\n            clear: both\n        }\n    }\n\n    @media(min-width:992px) and (max-width:1200px) {\n        .wrapper .container {\n            width: 986px;\n            margin-left: auto;\n            margin-right: auto\n            }\n\n        .wrapper .container:after {\n            content: ' ';\n            display: block;\n            clear: both\n        }\n\n        .wrapper .container__sp {\n            float: left;\n            width: 100%;\n            display: block;\n            clear: both\n        }\n    }\n\n    @media(min-width:1200px) {\n        .wrapper .container {\n            width: 986px;\n            margin-left: auto;\n            margin-right: auto;\n            height: 64px;\n        }\n\n        .wrapper .container:after {\n            content: ' ';\n            display: block;\n            clear: both\n        }\n\n        .wrapper .container__sp {\n            float: left;\n            width: 100%;\n            display: block;\n            clear: both\n        }\n    }\n\n    .footer__base {\n        background-color: var(--bbva-navy-blue);\n        padding: 28px 0;\n    }\n\n    .footer__container {\n        width: 100%\n    }\n\n    @media(min-width:0) and (max-width:992px) {\n        .footer__container {\n            text-align: center\n        }\n    }\n\n    @media(min-width:992px) and (max-width:1200px) {\n        .footer__container {\n            width: 528px;\n            float: left;\n        }\n    }\n\n    @media(min-width:1200px) {\n        .footer__container {\n            width: 654px;\n            float: left;\n        }\n    }\n\n    .footer__container .link {\n        display: inline-block;\n        min-width: 40px\n    }\n\n    @media(min-width:992px) {\n        .footer__container .link {\n            margin-right: 24px;\n            width: inherit\n        }\n    }\n\n    .footer__logo__link {\n        width: 100%;\n        height: 47px;\n        display: block\n    }\n\n    .footer__copyright {\n        font-family: var(--bbva-Book);\n        font-size: 12px;\n        color: var(--bbva-black-600);\n        text-align: left;\n        letter-spacing: 0;\n        line-height: 16px;\n        margin-top: 16px;\n        color: var(--bbva-gray);\n        white-space: nowrap\n    }\n\n    @media(min-width:0) and (max-width:992px) {\n        .footer__copyright {\n            text-align: center;\n            padding: 8px 32px 24px;\n            display: block;\n            position: relative;\n            white-space: normal\n        }\n    }\n\n    .footer__logo {\n        max-width: 168px;\n        margin: 1.3% 0 1.3% 0;\n        width: initial\n    }\n\n    @media(min-width:0) and (max-width:992px) {\n        .footer__logo {\n            width: 100%;\n            text-align: center;\n            display: block;\n            margin: 0 auto 32px\n        }\n    }\n    "]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral([""]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["<p class='footer__copyright'>", "</p>"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n    <div id='footer'>\n        <footer class='bbva--footer wrapper'>\n            <div id='imgfooter'>\n                <div>\n                    <div class='footer__base'>\n                        <div class='container'>\n                            <session class='footer__container'>\n                                <div class='footer__logo__link'>\n                                    <img src='", "' class='footer__logo' alt='", "'>\n                                </div>\n                                ", "\n                            </session>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </footer>\n    </div>\n    "]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }


var FooterElement =
/*#__PURE__*/
function (_LitElement) {
  _inherits(FooterElement, _LitElement);

  _createClass(FooterElement, null, [{
    key: "properties",
    get: function get() {
      return {
        imgSource: {
          type: String
        },
        footerText: {
          type: String
        }
      };
    }
  }]);

  function FooterElement() {
    var _this;

    _classCallCheck(this, FooterElement);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(FooterElement).call(this));
    _this.imgSource = '../resources/images/logo/LogoBBVAOportunidades@2x.png';
    _this.footerText = '';
    return _this;
  }

  _createClass(FooterElement, [{
    key: "render",
    value: function render() {
      return Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["html"])(_templateObject(), this.imgSource, this.imgSource, this.footerText ? Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["html"])(_templateObject2(), this.footerText) : Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["html"])(_templateObject3()));
    }
  }], [{
    key: "styles",
    get: function get() {
      return Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["css"])(_templateObject4());
    }
  }]);

  return FooterElement;
}(lit_element__WEBPACK_IMPORTED_MODULE_0__["LitElement"]);
customElements.define('ext-footer-bbva', FooterElement);

/***/ }),

/***/ "./app/pages/structure-page/ext-header-bbva.js":
/*!*****************************************************!*\
  !*** ./app/pages/structure-page/ext-header-bbva.js ***!
  \*****************************************************/
/*! exports provided: HeaderElement */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderElement", function() { return HeaderElement; });
/* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lit-element */ "./node_modules/lit-element/lit-element.js");
/* harmony import */ var _components_page_ext_action_label_bbva__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components-page/ext-action-label-bbva */ "./app/pages/components-page/ext-action-label-bbva.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _templateObject6() {
  var data = _taggedTemplateLiteral(["\n\n      .avatar {\n            vertical-align: middle;\n            width: 48px;\n            height: 48px;\n            border-radius: 50%;\n        }\n\n\n        .sticky {\n            position: fixed;\n            top: 0;\n            width: 100%\n        }\n\n\n        .header__base {\n            position: relative;\n            width: 100%;\n            z-index: 10;\n            height: auto;\n            padding-top: 0;\n            padding-bottom: 0;\n            background: var(--bbva-navy-blue)\n        }\n\n\n\n        .sticky .avatar {\n            width: 30px;\n            height: 30px;\n        }\n\n\n\n        .sticky .header__main {\n            -webkit-transition: max-height .16667s, min-height .16667s;\n            transition: max-height .16667s, min-height .16667s;\n            min-height: 48px;\n            max-height: 48px\n        }\n\n\n        .sticky .header__base {\n            background: var(--bbva-navy-blue);\n                padding-bottom: 48px\n            }\n\n\n\n            .header__actions__out {\n                height: 48px;\n                font-family: 'BentonSansBBVA-Bold';\n                font-size: 15px;\n                align-items: center;\n                display: inline-flex;\n                color: var(--bbva-yellow);\n                float: right;\n            }\n\n\n\n            .name__user {\n                width: 100%;\n                padding-right: 16px;\n            }\n\n\n\n            .header__actions__ulist {\n                display: inline-flex;\n                align-items: center;\n                width: 100%;\n        }\n\n\n\n        .header__actions__item__link__text {\n            font-family: 'BentonSansBBVA-Medium';\n            font-size: 15px;\n            color: var(--bbva-white);\n            text-align: center;\n            letter-spacing: 0;\n            padding: 0 16px;\n            text-transform: capitalize;\n        }\n\n        .header__container {\n            position: relative;\n            z-index: 2;\n            padding: 0 7rem;\n        }\n\n        .sticky .header__container {\n            position: fixed;\n            top: 0;\n            width: 100%\n        }\n\n        .sticky .header__container--noSticky {\n            position: relative\n        }\n\n        .background--navy {\n            background-color: var(--bbva-navy-blue)\n        }\n\n        .header__main {\n            color: var(--bbva-navy-blue);\n            min-height: 96px;\n            overflow: hidden;\n            display: flex;\n        }\n\n        .container .table .container {\n            width: 100%\n        }\n\n        .header__logo__link {\n            width: auto;\n            display: table-cell;\n            vertical-align: middle;\n            text-align: left\n        }\n\n        .header__actions {\n            display: inline-flex;\n            align-items: center;\n            font-weight: bold;\n        }\n\n        @media (max-width: 0) and (min-width: 300px) {\n            .header__actions {\n                float: right;\n                padding-right: 0;\n                width: 100%;\n            }\n\n            .header__name__user {\n                width: 100%\n            }\n\n            .header__exit {\n                width: 50%\n            }\n\n        }\n\n\n        @media(min-width:0) and (max-width:599px) {\n            .header__logo {\n                width: 45.45455%;\n                float: left;\n                margin-left: 16px;\n                margin-right: -100%\n            }\n\n            .header__name__user {\n                width: 50%\n            }\n\n            .header__exit {\n                width: 50%\n            }\n\n        }\n\n        @media(min-width:0) and (max-width:991px) {\n            .header__main {\n                color: var(--bbva-navy-blue);\n                height: 48px;\n                min-height: 48px\n            }\n\n            .header__logo {\n                color: var(--bbva-white);\n                height: 48px;\n                max-height: 48px;\n                min-height: 48px\n            }\n\n        }\n\n\n        @media(min-width:992px) {\n            .sticky .header__logo {\n                width: 24%;\n            }\n        }\n\n        @media(min-width:600px) and (max-width:991px) {\n            .header__logo {\n                -webkit-box-sizing: border-box;\n                box-sizing: border-box;\n                width: 25%;\n                float: left;\n                margin-left: 0;\n                margin-right: -100%;\n                padding-left: 16px;\n                padding-right: 16px;\n                width: 73%;\n            }\n\n            .sticky .header__logo {\n                padding-left: 16px;\n                padding-right: 16px;\n                width: 70%;\n            }\n\n            .header__actions {\n                float: right;\n                padding-right: 0;\n                width: 100%;\n            }\n\n        }\n\n        @media(min-width:1200px) {\n          .header__actions {\n            width: 100%;\n            margin-left: 0px;\n            margin-right: 0px;\n            float: right;\n            display: flex;\n          }\n        }\n\n        @media(min-width:0) and (max-width:599px) {\n            .header__logo__link {\n                text-align: center\n            }\n\n            .header__logo {\n                float: none\n            }\n        }\n\n        @media only screen and (min-width : 1200px) {\n            .header__image {\n                display: inline;\n                max-width: 100%;\n            }\n\n            .header__wrapper {\n                width: 174%;\n            }\n\n            .header__name__user {\n                width: 78%;\n            }\n\n        }\n\n        @media(min-width:992px) and (max-width:1199px) {\n            .header__logo {\n                width: 50%;\n                float: left;\n                margin-left: 16px;\n                margin-right: -100%\n            }\n\n        }\n\n        @media(min-width:0) and (max-width:992px) {\n            .avatar {\n                width: 30px;\n                height: 30px;\n            }\n\n            .mainNavigation__base {\n                position: fixed;\n                bottom: 0;\n                left: 0;\n                width: 100%;\n                background: var(--bbva-navy-blue);\n                z-index: 1001;\n                display: none;\n                -webkit-box-shadow: 0 -5px 10px 0 rgba(0, 0, 0, 0.2);\n                box-shadow: 0 -5px 10px 0 rgba(0, 0, 0, 0.2)\n            }\n\n            .header__wrapper {\n                width: 100%;\n            }\n\n           .header__image {\n                min-height: 26px;\n                width: auto;\n            }\n\n        }\n\n        .header__actions__item__link {\n            float: right;\n        }\n\n        @media(min-width:1200px) {\n            .header__logo {\n                width: 48%;\n                float: left;\n                margin-left: 0px;\n                margin-right: -100%;\n                margin-top: .7rem;\n            }\n        }\n\n    "]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = _taggedTemplateLiteral([""]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["<i class='bbva-icon bbva-icon__3_003_myprofile'></i>"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["<img src='../resources/images/notary/", "' alt='", "' class='avatar'>"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n                    <nav class='header__actions'>\n                        <ul class='header__actions__ulist'>\n                            <li class='header__name__user'>\n                                <div class='header__actions__item__link'>\n                                  ", "\n                                  <span class='header__actions__item__link__text'>", "</span>\n                                </div>\n                            </li>\n\n                            <li class='header__exit'>\n                                <div class='header__actions__out'>                                   \n                                <ext-action-label-bbva on-action=\"clsesion\" hasicon\n                                    text=\"", "\" csstext=\"line\"></ext-action-label-bbva>\n                                </div>\n                            </li>\n                        </ul>\n                    </nav>\n                    "]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n    <div id='header' class='", "'>\n        <header class='header__base wrapper'>\n            <nav class='header__container background--navy'>\n                <div class='header__main container'>\n                    <div class='header__wrapper'>\n                        <div class='header__logo'>\n                            <div class='header__logo__link'>\n                                <img src='", "' class='header__image header__logo__link'\n                                    alt='", "'>\n                                <template is='dom-repeat' items='[[menu]]'>\n                                    <label class$=\"link-item [[_getClass(item.text, active)]]\" on-click=\"_handleClick\" for='' >[[item.text]]</label>\n                                 </template>\n                            </div>\n                        </div>\n                    </div>\n                    ", "\n                </div>\n            </nav>\n        </header>\n    </div>\n    "]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }



var HeaderElement =
/*#__PURE__*/
function (_LitElement) {
  _inherits(HeaderElement, _LitElement);

  _createClass(HeaderElement, null, [{
    key: "properties",
    get: function get() {
      return {
        /**
         * Property to set source of image logo
         */
        logo: {
          type: Object,
          value: {
            src: '',
            alt: ''
          }
        },

        /**
         * Array property to create menu items, object on array is like:
         * Example:
         *  {
         *    text:'PERFIL',
         *    event:'go-to-profile'
         *  }
         */
        menu: {
          type: Array
        },

        /**
         * @description Object to configure header session info like user name and logout link
         * @example {
                      name: 'Extranet',
                      icon: 'coronita:getout',
                      textLink: 'Salir'
                    }
         * @public
         * @type Object
         */
        session: {
          type: Object,
          value: {
            name: '',
            icon: '',
            textLink: '',
            hasavatar: {
              type: Boolean,
              value: true
            },
            avatar: {
              type: String,
              value: ''
            }
          }
        },

        /**
         * @description Determines wich link menu is active
         * @example 'PERFIL'
         * @type String
         * @public
         */
        active: {
          type: String
        },
        sticky: {
          type: String
        },
        show1: {
          type: String
        },
        hassession: {
          type: Boolean
        }
      };
    }
  }]);

  function HeaderElement() {
    var _this;

    _classCallCheck(this, HeaderElement);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(HeaderElement).call(this));
    _this.logo = {
      src: '../resources/images/logo/LogoBBVA@2x.png',
      alt: 'image'
    };
    _this.session = {
      name: 'Leticia Figueroa',
      hasicon: true,
      icon: 'coronita:getout',
      textLink: 'Salir',
      hasavatar: true,
      avatar: '180.jpeg'
    };
    _this.sticky = '';
    _this.menu = [{
      text: '',
      event: ''
    }];
    return _this;
  }

  _createClass(HeaderElement, [{
    key: "render",
    value: function render() {
      return Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["html"])(_templateObject(), this.sticky, this.logo.src, this.logo.alt, this.hassession ? Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["html"])(_templateObject2(), this.session.hasavatar ? Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["html"])(_templateObject3(), this.session.avatar, this.session.avatar) : Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["html"])(_templateObject4()), this.session.name, this.session.textLink) : Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["html"])(_templateObject5()));
    }
  }], [{
    key: "styles",
    get: function get() {
      return Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["css"])(_templateObject6());
    }
  }]);

  return HeaderElement;
}(lit_element__WEBPACK_IMPORTED_MODULE_0__["LitElement"]);
customElements.define('ext-header-bbva', HeaderElement);

/***/ }),

/***/ "./app/pages/structure-page/login-page.js":
/*!************************************************!*\
  !*** ./app/pages/structure-page/login-page.js ***!
  \************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _cells_cells_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @cells/cells-page */ "./node_modules/@cells/cells-page/cells-page.js");
/* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lit-element */ "./node_modules/lit-element/lit-element.js");
/* harmony import */ var _components_page_ext_fonts_bbva__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components-page/ext-fonts-bbva */ "./app/pages/components-page/ext-fonts-bbva.js");
/* harmony import */ var _grid_templete__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../grid-templete */ "./app/pages/grid-templete.js");
/* harmony import */ var _cells_components_cells_template_paper_drawer_panel__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @cells-components/cells-template-paper-drawer-panel */ "./node_modules/@cells-components/cells-template-paper-drawer-panel/cells-template-paper-drawer-panel.js");
/* harmony import */ var _cells_components_coronita_icons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @cells-components/coronita-icons */ "./node_modules/@cells-components/coronita-icons/coronita-icons.js");
/* harmony import */ var _bbva_web_components_bbva_button_default__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @bbva-web-components/bbva-button-default */ "./node_modules/@bbva-web-components/bbva-button-default/bbva-button-default.js");
/* harmony import */ var _bbva_web_components_bbva_form_password__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @bbva-web-components/bbva-form-password */ "./node_modules/@bbva-web-components/bbva-form-password/bbva-form-password.js");
/* harmony import */ var _components_page_ext_action_label_bbva__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components-page/ext-action-label-bbva */ "./app/pages/components-page/ext-action-label-bbva.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n      .form {\n      \n      }\n      bbva-button-default {\n        float:right\n      }\n      bbva-header-main {\n        --bbva-header-main-bg-color: #002171;\n      }\n      :host {\n        --cells-template-paper-drawer-panel-section-bg: #F4F4F4;\n        font-family: var(--bbva-Book);\n      }\n      .container {\n        background-color: var(--bbva-white);\n      }\n      h4 {\n        font-family: BentonSansBBVA-Book, Helvetica, Arial, sans-serif;\n        color: var(--bbva-black-600);\n        text-align: center;\n        font-size: 36px;\n        letter-spacing: -0.2px;\n        line-height: 12px;\n      }\n      ext-action-label-bbva {\n        color: var(--bbva-core-dark-blue);\n      } \n    "]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n        <div class=\"cgt form\">\n          <div style=\"width: 100%\">\n            <h4>\xA1Bienvenido!</h4>\n          </div>\n          <div class=\"cgt-col-xs-4 cgt-col-sm-4 cgt-col-md-12 cgt-col-lg-12\">\n            <bbva-form-text \n            label=\"N\xF9mero de referencia\" \n            value=\"\" \n            error-message=\"N\xF9mero de referencia invalido\"\n              validate-on-blur\n              pattern=\"\\d{10}\"\n              form=\"formReference\">\n            </bbva-form-text>\n          </div>\n          <div class=\"cgt-col-xs-4 cgt-col-sm-4 cgt-col-md-12 cgt-col-lg-12\">\n            <bbva-form-text \n            label=\"Usuario\" \n            value=\"\" \n            error-message=\"Usuario invalido\"\n              validate-on-blur\n              pattern=\"\\d{10}\"\n              allowed-pattern=\"[0-9]\"\n              form=\"formUser\">\n            </bbva-form-text>\n          </div>\n\n          <div class=\"cgt-col-xs-4 cgt-col-sm-4 cgt-col-md-12 cgt-col-lg-12\">\n            <bbva-form-password label=\"Contrase\xF1a\" value=\"\"></bbva-form-password>\n          </div>\n          <div class=\"cgt-col-xs-4 cgt-col-sm-4 cgt-col-md-12 cgt-col-lg-6\">\n            <ext-action-label-bbva text=\"\xBFOlvidaste tu contrase\xF1a?\"></ext-action-label-bbva>\n          </div>\n          <div class=\"cgt-col-xs-4 cgt-col-sm-4 cgt-col-md-12 cgt-col-lg-6\">\n            <bbva-button-default @click=\"", "\">Continuar</bbva-button-default>\n          </div>\n        </div>\n       "], ["\n        <div class=\"cgt form\">\n          <div style=\"width: 100%\">\n            <h4>\xA1Bienvenido!</h4>\n          </div>\n          <div class=\"cgt-col-xs-4 cgt-col-sm-4 cgt-col-md-12 cgt-col-lg-12\">\n            <bbva-form-text \n            label=\"N\xF9mero de referencia\" \n            value=\"\" \n            error-message=\"N\xF9mero de referencia invalido\"\n              validate-on-blur\n              pattern=\"\\\\d{10}\"\n              form=\"formReference\">\n            </bbva-form-text>\n          </div>\n          <div class=\"cgt-col-xs-4 cgt-col-sm-4 cgt-col-md-12 cgt-col-lg-12\">\n            <bbva-form-text \n            label=\"Usuario\" \n            value=\"\" \n            error-message=\"Usuario invalido\"\n              validate-on-blur\n              pattern=\"\\\\d{10}\"\n              allowed-pattern=\"[0-9]\"\n              form=\"formUser\">\n            </bbva-form-text>\n          </div>\n\n          <div class=\"cgt-col-xs-4 cgt-col-sm-4 cgt-col-md-12 cgt-col-lg-12\">\n            <bbva-form-password label=\"Contrase\xF1a\" value=\"\"></bbva-form-password>\n          </div>\n          <div class=\"cgt-col-xs-4 cgt-col-sm-4 cgt-col-md-12 cgt-col-lg-6\">\n            <ext-action-label-bbva text=\"\xBFOlvidaste tu contrase\xF1a?\"></ext-action-label-bbva>\n          </div>\n          <div class=\"cgt-col-xs-4 cgt-col-sm-4 cgt-col-md-12 cgt-col-lg-6\">\n            <bbva-button-default @click=\"", "\">Continuar</bbva-button-default>\n          </div>\n        </div>\n       "]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }











var LoginPage =
/*#__PURE__*/
function (_CellsPage) {
  _inherits(LoginPage, _CellsPage);

  _createClass(LoginPage, null, [{
    key: "is",
    get: function get() {
      return 'login-page';
    }
  }]);

  function LoginPage() {
    var _this;

    _classCallCheck(this, LoginPage);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(LoginPage).call(this));
    console.log(_this.shadowRoot);
    return _this;
  }

  _createClass(LoginPage, [{
    key: "onPageEnter",
    value: function onPageEnter() {
      console.log('Page loaded');
    }
  }, {
    key: "onPageLeave",
    value: function onPageLeave() {
      console.log('Page unloaded');
    }
  }, {
    key: "login",
    value: function login(e) {
      var myEvent = new CustomEvent('has-login', {
        detail: {
          message: 'my-event happened.'
        },
        bubbles: true,
        composed: true
      });
      this.dispatchEvent(myEvent);
    }
  }, {
    key: "render",
    value: function render() {
      return Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["html"])(_templateObject(), this.login);
    }
  }], [{
    key: "properties",
    get: function get() {
      return {};
    }
  }, {
    key: "styles",
    get: function get() {
      return [_components_page_ext_fonts_bbva__WEBPACK_IMPORTED_MODULE_2__["fontBbvaCss"], _grid_templete__WEBPACK_IMPORTED_MODULE_3__["gridTempleteCss"], Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["css"])(_templateObject2())];
    }
  }]);

  return LoginPage;
}(_cells_cells_page__WEBPACK_IMPORTED_MODULE_0__["CellsPage"]);

window.customElements.define(LoginPage.is, LoginPage);

/***/ }),

/***/ "./app/scripts/lit-initial-components.js":
/*!***********************************************!*\
  !*** ./app/scripts/lit-initial-components.js ***!
  \***********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _pages_another_page_another_page_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../pages//another-page/another-page.js */ "./app/pages/another-page/another-page.js");
/* harmony import */ var _pages_home_page_home_page_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../pages//home-page/home-page.js */ "./app/pages/home-page/home-page.js");
// Import here your LitElement initial components (critical / startup)

// Auto generated imports below. DO NOT remove!
// will be replaced with imports
// ${filledByCellsWithAutoImports}



/***/ })

/******/ });
//# sourceMappingURL=lit-initial-components.js.map