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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/App.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/App.js":
/*!********************!*\
  !*** ./src/App.js ***!
  \********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_first__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/first */ \"./src/modules/first.js\");\n/* harmony import */ var _modules_second__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/second */ \"./src/modules/second.js\");\n/* harmony import */ var _modules_bmw_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/bmw.module */ \"./src/modules/bmw.module.js\");\n/* harmony import */ var _modules_mercedes_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/mercedes.module */ \"./src/modules/mercedes.module.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\nconst bmw = new _modules_bmw_module__WEBPACK_IMPORTED_MODULE_2__[\"default\"]();\r\nconst merc = new _modules_mercedes_module__WEBPACK_IMPORTED_MODULE_3__[\"default\"]();\r\n\r\n\r\nbmw.start();\r\nbmw.stop();\r\nbmw.makeCoupe();\r\nconsole.log('------------');\r\n\r\nmerc.start();\r\nmerc.stop();\r\nmerc.makeSedan();\r\n\n\n//# sourceURL=webpack:///./src/App.js?");

/***/ }),

/***/ "./src/core/baseCar.js":
/*!*****************************!*\
  !*** ./src/core/baseCar.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Base; });\n\r\n\r\nclass Base {\r\n    constructor () {\r\n        console.log ( 'base constructor' );\r\n    }\r\n\r\n    start() {\r\n        console.log ( 'start' );\r\n    }\r\n\r\n    stop() {\r\n        console.log ( 'stop' );\r\n\r\n    }\r\n}\r\n\r\n\r\n\r\n\n\n//# sourceURL=webpack:///./src/core/baseCar.js?");

/***/ }),

/***/ "./src/modules/bmw.module.js":
/*!***********************************!*\
  !*** ./src/modules/bmw.module.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return BMW; });\n/* harmony import */ var _core_baseCar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core/baseCar */ \"./src/core/baseCar.js\");\n\r\n\r\n\r\nclass BMW extends _core_baseCar__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\r\n    constructor () {\r\n        super ();\r\n        console.log ( 'BWM constructor' );\r\n    }\r\n\r\n    makeCoupe () {\r\n        console.log ( 'Make coupe' );\r\n    }\r\n}\n\n//# sourceURL=webpack:///./src/modules/bmw.module.js?");

/***/ }),

/***/ "./src/modules/first.js":
/*!******************************!*\
  !*** ./src/modules/first.js ***!
  \******************************/
/*! exports provided: first, arrNumb, Person */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"first\", function() { return first; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"arrNumb\", function() { return arrNumb; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Person\", function() { return Person; });\n\r\n\r\nconst first = 'first 100';\r\n\r\nconst arrNumb = [1, 2, 3, 4, 5, 6];\r\n\r\n\r\nconst Person = {\r\n    name : 'Alex',\r\n    age : '34'\r\n};\r\n\r\nfunction getFirstNumber () {\r\n    return first;\r\n}\r\n\r\n\r\nclass Car {\r\n    constructor () {\r\n        this.horsePower = 330;\r\n    }\r\n}\r\n\r\n\r\n\n\n//# sourceURL=webpack:///./src/modules/first.js?");

/***/ }),

/***/ "./src/modules/mercedes.module.js":
/*!****************************************!*\
  !*** ./src/modules/mercedes.module.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Mercedes; });\n/* harmony import */ var _core_baseCar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core/baseCar */ \"./src/core/baseCar.js\");\n\r\n\r\n\r\n\r\nclass Mercedes extends _core_baseCar__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\r\n    constructor () {\r\n        super ();\r\n        console.log ( 'Mercedes constructor' );\r\n    }\r\n\r\n    makeSedan () {\r\n        console.log ( 'Make sedan' );\r\n    }\r\n}\n\n//# sourceURL=webpack:///./src/modules/mercedes.module.js?");

/***/ }),

/***/ "./src/modules/second.js":
/*!*******************************!*\
  !*** ./src/modules/second.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Class1; });\n\r\n\r\nconst second = 'second';\r\nclass Class1 {\r\n    constructor ( props ) {\r\n        this.variable = 2;\r\n    }\r\n\r\n    init () {\r\n        this.changeVariable ();\r\n    }\r\n\r\n    changeVariable () {\r\n        console.log ( changeFuncVar ( this.variable ) );\r\n    }\r\n}\r\n\r\nfunction changeFuncVar ( v ) {\r\n    console.log ( v );\r\n    return v + 2;\r\n}\r\n\n\n//# sourceURL=webpack:///./src/modules/second.js?");

/***/ })

/******/ });