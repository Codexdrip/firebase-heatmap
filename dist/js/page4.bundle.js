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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/mapsData.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/mapsData.js":
/*!****************************!*\
  !*** ./src/js/mapsData.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var stylez = [{
  elementType: "geometry",
  stylers: [{
    color: "#1d2c4d"
  }]
}, {
  elementType: "geometry.stroke",
  stylers: [{
    lightness: 5
  }, {
    weight: 4.5
  }]
}, {
  elementType: "labels.text.fill",
  stylers: [{
    color: "#c7e2dd"
  }]
}, {
  elementType: "labels.text.stroke",
  stylers: [{
    color: "#1a3646"
  }, {
    weight: 3.5
  }]
}, {
  featureType: "administrative",
  elementType: "geometry",
  stylers: [{
    visibility: "off"
  }]
}, {
  featureType: "administrative.country",
  elementType: "geometry.stroke",
  stylers: [{
    color: "#4b6878"
  }]
}, {
  featureType: "administrative.land_parcel",
  stylers: [{
    visibility: "off"
  }]
}, {
  featureType: "administrative.land_parcel",
  elementType: "labels.text.fill",
  stylers: [{
    color: "#64779e"
  }]
}, {
  featureType: "administrative.neighborhood",
  stylers: [{
    visibility: "off"
  }]
}, {
  featureType: "administrative.province",
  elementType: "geometry.stroke",
  stylers: [{
    color: "#4b6878"
  }]
}, {
  featureType: "landscape.man_made",
  elementType: "geometry.stroke",
  stylers: [{
    color: "#334e87"
  }]
}, {
  featureType: "landscape.natural",
  elementType: "geometry",
  stylers: [{
    color: "#023e58"
  }]
}, {
  featureType: "poi",
  stylers: [{
    visibility: "off"
  }]
}, {
  featureType: "poi",
  elementType: "geometry",
  stylers: [{
    color: "#283d6a"
  }]
}, {
  featureType: "poi",
  elementType: "labels.text",
  stylers: [{
    visibility: "off"
  }]
}, {
  featureType: "poi",
  elementType: "labels.text.fill",
  stylers: [{
    color: "#6f9ba5"
  }]
}, {
  featureType: "poi",
  elementType: "labels.text.stroke",
  stylers: [{
    color: "#1d2c4d"
  }]
}, {
  featureType: "poi.park",
  elementType: "geometry.fill",
  stylers: [{
    color: "#023e58"
  }]
}, {
  featureType: "poi.park",
  elementType: "labels.text.fill",
  stylers: [{
    color: "#3C7680"
  }]
}, {
  featureType: "road",
  elementType: "geometry",
  stylers: [{
    color: "#304a7d"
  }, {
    visibility: "simplified"
  }]
}, {
  featureType: "road",
  elementType: "labels",
  stylers: [{
    visibility: "off"
  }]
}, {
  featureType: "road",
  elementType: "labels.icon",
  stylers: [{
    visibility: "off"
  }]
}, {
  featureType: "road",
  elementType: "labels.text.fill",
  stylers: [{
    color: "#98a5be"
  }, {
    weight: 8
  }]
}, {
  featureType: "road",
  elementType: "labels.text.stroke",
  stylers: [{
    color: "#1d2c4d"
  }]
}, {
  featureType: "road.arterial",
  stylers: [{
    visibility: "off"
  }]
}, {
  featureType: "road.highway",
  elementType: "geometry",
  stylers: [{
    color: "#2c6675"
  }]
}, {
  featureType: "road.highway",
  elementType: "geometry.stroke",
  stylers: [{
    color: "#255763"
  }]
}, {
  featureType: "road.highway",
  elementType: "labels",
  stylers: [{
    visibility: "off"
  }]
}, {
  featureType: "road.highway",
  elementType: "labels.text.fill",
  stylers: [{
    color: "#b0d5ce"
  }]
}, {
  featureType: "road.highway",
  elementType: "labels.text.stroke",
  stylers: [{
    color: "#023e58"
  }]
}, {
  featureType: "road.local",
  stylers: [{
    visibility: "off"
  }]
}, {
  featureType: "transit",
  stylers: [{
    visibility: "off"
  }]
}, {
  featureType: "transit",
  elementType: "labels.text.fill",
  stylers: [{
    color: "#98a5be"
  }]
}, {
  featureType: "transit",
  elementType: "labels.text.stroke",
  stylers: [{
    color: "#1d2c4d"
  }]
}, {
  featureType: "transit.line",
  elementType: "geometry.fill",
  stylers: [{
    color: "#283d6a"
  }]
}, {
  featureType: "transit.station",
  elementType: "geometry",
  stylers: [{
    color: "#3a4762"
  }]
}, {
  featureType: "water",
  elementType: "geometry",
  stylers: [{
    color: "#0e1626"
  }]
}, {
  featureType: "water",
  elementType: "labels.text",
  stylers: [{
    visibility: "off"
  }]
}, {
  featureType: "water",
  elementType: "labels.text.fill",
  stylers: [{
    color: "#4e6d70"
  }]
}];

exports.stylez = stylez;

/***/ })

/******/ });
//# sourceMappingURL=page4.bundle.js.map