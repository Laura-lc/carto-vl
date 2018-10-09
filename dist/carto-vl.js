/*!
 * CARTO VL js https://carto.com/
 * Version: 0.8.0
 * 
 */
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["carto"] = factory();
	else
		root["carto"] = factory();
})(window, function() {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/cartocolor/cartocolor.js":
/*!***********************************************!*\
  !*** ./node_modules/cartocolor/cartocolor.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;!function() {

var cartocolor = {
    "Burg": {
        "2": [
            "#ffc6c4",
            "#672044"
        ],
        "3": [
            "#ffc6c4",
            "#cc607d",
            "#672044"
        ],
        "4": [
            "#ffc6c4",
            "#e38191",
            "#ad466c",
            "#672044"
        ],
        "5": [
            "#ffc6c4",
            "#ee919b",
            "#cc607d",
            "#9e3963",
            "#672044"
        ],
        "6": [
            "#ffc6c4",
            "#f29ca3",
            "#da7489",
            "#b95073",
            "#93345d",
            "#672044"
        ],
        "7": [
            "#ffc6c4",
            "#f4a3a8",
            "#e38191",
            "#cc607d",
            "#ad466c",
            "#8b3058",
            "#672044"
        ],
        "tags": [
            "quantitative"
        ]
    },
    "BurgYl": {
        "2": [
            "#fbe6c5",
            "#70284a"
        ],
        "3": [
            "#fbe6c5",
            "#dc7176",
            "#70284a"
        ],
        "4": [
            "#fbe6c5",
            "#ee8a82",
            "#c8586c",
            "#70284a"
        ],
        "5": [
            "#fbe6c5",
            "#f2a28a",
            "#dc7176",
            "#b24b65",
            "#70284a"
        ],
        "6": [
            "#fbe6c5",
            "#f4b191",
            "#e7807d",
            "#d06270",
            "#a44360",
            "#70284a"
        ],
        "7": [
            "#fbe6c5",
            "#f5ba98",
            "#ee8a82",
            "#dc7176",
            "#c8586c",
            "#9c3f5d",
            "#70284a"
        ],
        "tags": [
            "quantitative"
        ]
    },
    "RedOr": {
        "2": [
            "#f6d2a9",
            "#b13f64"
        ],
        "3": [
            "#f6d2a9",
            "#ea8171",
            "#b13f64"
        ],
        "4": [
            "#f6d2a9",
            "#f19c7c",
            "#dd686c",
            "#b13f64"
        ],
        "5": [
            "#f6d2a9",
            "#f3aa84",
            "#ea8171",
            "#d55d6a",
            "#b13f64"
        ],
        "6": [
            "#f6d2a9",
            "#f4b28a",
            "#ef9177",
            "#e3726d",
            "#cf5669",
            "#b13f64"
        ],
        "7": [
            "#f6d2a9",
            "#f5b78e",
            "#f19c7c",
            "#ea8171",
            "#dd686c",
            "#ca5268",
            "#b13f64"
        ],
        "tags": [
            "quantitative"
        ]
    },
    "OrYel": {
        "2": [
            "#ecda9a",
            "#ee4d5a"
        ],
        "3": [
            "#ecda9a",
            "#f7945d",
            "#ee4d5a"
        ],
        "4": [
            "#ecda9a",
            "#f3ad6a",
            "#f97b57",
            "#ee4d5a"
        ],
        "5": [
            "#ecda9a",
            "#f1b973",
            "#f7945d",
            "#f86f56",
            "#ee4d5a"
        ],
        "6": [
            "#ecda9a",
            "#f0c079",
            "#f5a363",
            "#f98558",
            "#f76856",
            "#ee4d5a"
        ],
        "7": [
            "#ecda9a",
            "#efc47e",
            "#f3ad6a",
            "#f7945d",
            "#f97b57",
            "#f66356",
            "#ee4d5a"
        ],
        "tags": [
            "quantitative"
        ]
    },
    "Peach": {
        "2": [
            "#fde0c5",
            "#eb4a40"
        ],
        "3": [
            "#fde0c5",
            "#f59e72",
            "#eb4a40"
        ],
        "4": [
            "#fde0c5",
            "#f8b58b",
            "#f2855d",
            "#eb4a40"
        ],
        "5": [
            "#fde0c5",
            "#f9c098",
            "#f59e72",
            "#f17854",
            "#eb4a40"
        ],
        "6": [
            "#fde0c5",
            "#fac7a1",
            "#f7ac80",
            "#f38f65",
            "#f0704f",
            "#eb4a40"
        ],
        "7": [
            "#fde0c5",
            "#facba6",
            "#f8b58b",
            "#f59e72",
            "#f2855d",
            "#ef6a4c",
            "#eb4a40"
        ],
        "tags": [
            "quantitative"
        ]
    },
    "PinkYl": {
        "2": [
            "#fef6b5",
            "#e15383"
        ],
        "3": [
            "#fef6b5",
            "#ffa679",
            "#e15383"
        ],
        "4": [
            "#fef6b5",
            "#ffc285",
            "#fa8a76",
            "#e15383"
        ],
        "5": [
            "#fef6b5",
            "#ffd08e",
            "#ffa679",
            "#f67b77",
            "#e15383"
        ],
        "6": [
            "#fef6b5",
            "#ffd795",
            "#ffb77f",
            "#fd9576",
            "#f37378",
            "#e15383"
        ],
        "7": [
            "#fef6b5",
            "#ffdd9a",
            "#ffc285",
            "#ffa679",
            "#fa8a76",
            "#f16d7a",
            "#e15383"
        ],
        "tags": [
            "quantitative"
        ]
    },
    "Mint": {
        "2": [
            "#e4f1e1",
            "#0d585f"
        ],
        "3": [
            "#e4f1e1",
            "#63a6a0",
            "#0d585f"
        ],
        "4": [
            "#e4f1e1",
            "#89c0b6",
            "#448c8a",
            "#0d585f"
        ],
        "5": [
            "#E4F1E1",
            "#9CCDC1",
            "#63A6A0",
            "#337F7F",
            "#0D585F"
        ],
        "6": [
            "#e4f1e1",
            "#abd4c7",
            "#7ab5ad",
            "#509693",
            "#2c7778",
            "#0d585f"
        ],
        "7": [
            "#e4f1e1",
            "#b4d9cc",
            "#89c0b6",
            "#63a6a0",
            "#448c8a",
            "#287274",
            "#0d585f"
        ],
        "tags": [
            "quantitative"
        ]
    },
    "BluGrn": {
        "2": [
            "#c4e6c3",
            "#1d4f60"
        ],
        "3": [
            "#c4e6c3",
            "#4da284",
            "#1d4f60"
        ],
        "4": [
            "#c4e6c3",
            "#6dbc90",
            "#36877a",
            "#1d4f60"
        ],
        "5": [
            "#c4e6c3",
            "#80c799",
            "#4da284",
            "#2d7974",
            "#1d4f60"
        ],
        "6": [
            "#c4e6c3",
            "#8dce9f",
            "#5fb28b",
            "#3e927e",
            "#297071",
            "#1d4f60"
        ],
        "7": [
            "#c4e6c3",
            "#96d2a4",
            "#6dbc90",
            "#4da284",
            "#36877a",
            "#266b6e",
            "#1d4f60"
        ],
        "tags": [
            "quantitative"
        ]
    },
    "DarkMint": {
        "2": [
            "#d2fbd4",
            "#123f5a"
        ],
        "3": [
            "#d2fbd4",
            "#559c9e",
            "#123f5a"
        ],
        "4": [
            "#d2fbd4",
            "#7bbcb0",
            "#3a7c89",
            "#123f5a"
        ],
        "5": [
            "#d2fbd4",
            "#8eccb9",
            "#559c9e",
            "#2b6c7f",
            "#123f5a"
        ],
        "6": [
            "#d2fbd4",
            "#9cd5be",
            "#6cafa9",
            "#458892",
            "#266377",
            "#123f5a"
        ],
        "7": [
            "#d2fbd4",
            "#a5dbc2",
            "#7bbcb0",
            "#559c9e",
            "#3a7c89",
            "#235d72",
            "#123f5a"
        ],
        "tags": [
            "quantitative"
        ]
    },
    "Emrld": {
        "2": [
            "#d3f2a3",
            "#074050"
        ],
        "3": [
            "#d3f2a3",
            "#4c9b82",
            "#074050"
        ],
        "4": [
            "#d3f2a3",
            "#6cc08b",
            "#217a79",
            "#074050"
        ],
        "5": [
            "#d3f2a3",
            "#82d091",
            "#4c9b82",
            "#19696f",
            "#074050"
        ],
        "6": [
            "#d3f2a3",
            "#8fda94",
            "#60b187",
            "#35877d",
            "#145f69",
            "#074050"
        ],
        "7": [
            "#d3f2a3",
            "#97e196",
            "#6cc08b",
            "#4c9b82",
            "#217a79",
            "#105965",
            "#074050"
        ],
        "tags": [
            "quantitative"
        ]
    },
    "ag_GrnYl": {
        "2": [
            "#245668",
            "#EDEF5D"
        ],
        "3": [
            "#245668",
            "#39AB7E",
            "#EDEF5D"
        ],
        "4": [
            "#245668",
            "#0D8F81",
            "#6EC574",
            "#EDEF5D"
        ],
        "5": [
            "#245668",
            "#04817E",
            "#39AB7E",
            "#8BD16D",
            "#EDEF5D"
        ],
        "6": [
            "#245668",
            "#09787C",
            "#1D9A81",
            "#58BB79",
            "#9DD869",
            "#EDEF5D"
        ],
        "7": [
            "#245668",
            "#0F7279",
            "#0D8F81",
            "#39AB7E",
            "#6EC574",
            "#A9DC67",
            "#EDEF5D"
        ],
        "tags": [
            "aggregation"
        ]
    },
    "BluYl": {
        "2": [
            "#f7feae",
            "#045275"
        ],
        "3": [
            "#f7feae",
            "#46aea0",
            "#045275"
        ],
        "4": [
            "#f7feae",
            "#7ccba2",
            "#089099",
            "#045275"
        ],
        "5": [
            "#f7feae",
            "#9bd8a4",
            "#46aea0",
            "#058092",
            "#045275"
        ],
        "6": [
            "#f7feae",
            "#ace1a4",
            "#68bfa1",
            "#2a9c9c",
            "#02778e",
            "#045275"
        ],
        "7": [
            "#f7feae",
            "#b7e6a5",
            "#7ccba2",
            "#46aea0",
            "#089099",
            "#00718b",
            "#045275"
        ],
        "tags": [
            "quantitative"
        ]
    },
    "Teal": {
        "2": [
            "#d1eeea",
            "#2a5674"
        ],
        "3": [
            "#d1eeea",
            "#68abb8",
            "#2a5674"
        ],
        "4": [
            "#d1eeea",
            "#85c4c9",
            "#4f90a6",
            "#2a5674"
        ],
        "5": [
            "#d1eeea",
            "#96d0d1",
            "#68abb8",
            "#45829b",
            "#2a5674"
        ],
        "6": [
            "#d1eeea",
            "#a1d7d6",
            "#79bbc3",
            "#599bae",
            "#3f7994",
            "#2a5674"
        ],
        "7": [
            "#d1eeea",
            "#a8dbd9",
            "#85c4c9",
            "#68abb8",
            "#4f90a6",
            "#3b738f",
            "#2a5674"
        ],
        "tags": [
            "quantitative"
        ]
    },
    "TealGrn": {
        "2": [
            "#b0f2bc",
            "#257d98"
        ],
        "3": [
            "#b0f2bc",
            "#4cc8a3",
            "#257d98"
        ],
        "4": [
            "#b0f2bc",
            "#67dba5",
            "#38b2a3",
            "#257d98"
        ],
        "5": [
            "#b0f2bc",
            "#77e2a8",
            "#4cc8a3",
            "#31a6a2",
            "#257d98"
        ],
        "6": [
            "#b0f2bc",
            "#82e6aa",
            "#5bd4a4",
            "#3fbba3",
            "#2e9ea1",
            "#257d98"
        ],
        "7": [
            "#b0f2bc",
            "#89e8ac",
            "#67dba5",
            "#4cc8a3",
            "#38b2a3",
            "#2c98a0",
            "#257d98"
        ],
        "tags": [
            "quantitative"
        ]
    },
    "Purp": {
        "2": [
            "#f3e0f7",
            "#63589f"
        ],
        "3": [
            "#f3e0f7",
            "#b998dd",
            "#63589f"
        ],
        "4": [
            "#f3e0f7",
            "#d1afe8",
            "#9f82ce",
            "#63589f"
        ],
        "5": [
            "#f3e0f7",
            "#dbbaed",
            "#b998dd",
            "#9178c4",
            "#63589f"
        ],
        "6": [
            "#f3e0f7",
            "#e0c2ef",
            "#c8a5e4",
            "#aa8bd4",
            "#8871be",
            "#63589f"
        ],
        "7": [
            "#f3e0f7",
            "#e4c7f1",
            "#d1afe8",
            "#b998dd",
            "#9f82ce",
            "#826dba",
            "#63589f"
        ],
        "tags": [
            "quantitative"
        ]
    },
    "PurpOr": {
        "3": [
            "#f9ddda",
            "#ce78b3",
            "#573b88"
        ],
        "4": [
            "#f9ddda",
            "#e597b9",
            "#ad5fad",
            "#573b88"
        ],
        "5": [
            "#f9ddda",
            "#eda8bd",
            "#ce78b3",
            "#9955a8",
            "#573b88"
        ],
        "6": [
            "#f9ddda",
            "#f0b2c1",
            "#dd8ab6",
            "#bb69b0",
            "#8c4fa4",
            "#573b88"
        ],
        "7": [
            "#f9ddda",
            "#f2b9c4",
            "#e597b9",
            "#ce78b3",
            "#ad5fad",
            "#834ba0",
            "#573b88"
        ],
        "tags": [
            "quantitative"
        ]
    },
    "Sunset": {
        "2": [
            "#f3e79b",
            "#5c53a5"
        ],
        "3": [
            "#f3e79b",
            "#eb7f86",
            "#5c53a5"
        ],
        "4": [
            "#f3e79b",
            "#f8a07e",
            "#ce6693",
            "#5c53a5"
        ],
        "5": [
            "#f3e79b",
            "#fab27f",
            "#eb7f86",
            "#b95e9a",
            "#5c53a5"
        ],
        "6": [
            "#f3e79b",
            "#fabc82",
            "#f59280",
            "#dc6f8e",
            "#ab5b9e",
            "#5c53a5"
        ],
        "7": [
            "#f3e79b",
            "#fac484",
            "#f8a07e",
            "#eb7f86",
            "#ce6693",
            "#a059a0",
            "#5c53a5"
        ],
        "tags": [
            "quantitative"
        ]
    },
    "Magenta": {
        "2": [
            "#f3cbd3",
            "#6c2167"
        ],
        "3": [
            "#f3cbd3",
            "#ca699d",
            "#6c2167"
        ],
        "4": [
            "#f3cbd3",
            "#dd88ac",
            "#b14d8e",
            "#6c2167"
        ],
        "5": [
            "#f3cbd3",
            "#e498b4",
            "#ca699d",
            "#a24186",
            "#6c2167"
        ],
        "6": [
            "#f3cbd3",
            "#e7a2b9",
            "#d67ba5",
            "#bc5894",
            "#983a81",
            "#6c2167"
        ],
        "7": [
            "#f3cbd3",
            "#eaa9bd",
            "#dd88ac",
            "#ca699d",
            "#b14d8e",
            "#91357d",
            "#6c2167"
        ],
        "tags": [
            "quantitative"
        ]
    },
    "SunsetDark": {
        "2": [
            "#fcde9c",
            "#7c1d6f"
        ],
        "3": [
            "#fcde9c",
            "#e34f6f",
            "#7c1d6f"
        ],
        "4": [
            "#fcde9c",
            "#f0746e",
            "#dc3977",
            "#7c1d6f"
        ],
        "5": [
            "#fcde9c",
            "#f58670",
            "#e34f6f",
            "#d72d7c",
            "#7c1d6f"
        ],
        "6": [
            "#fcde9c",
            "#f89872",
            "#ec666d",
            "#df4273",
            "#c5287b",
            "#7c1d6f"
        ],
        "7": [
            "#fcde9c",
            "#faa476",
            "#f0746e",
            "#e34f6f",
            "#dc3977",
            "#b9257a",
            "#7c1d6f"
        ],
        "tags": [
            "quantitative"
        ]
    },
    "ag_Sunset": {
        "2": [
            "#4b2991",
            "#edd9a3"
        ],
        "3": [
            "#4b2991",
            "#ea4f88",
            "#edd9a3"
        ],
        "4": [
            "#4b2991",
            "#c0369d",
            "#fa7876",
            "#edd9a3"
        ],
        "5": [
            "#4b2991",
            "#a52fa2",
            "#ea4f88",
            "#fa9074",
            "#edd9a3"
        ],
        "6": [
            "#4b2991",
            "#932da3",
            "#d43f96",
            "#f7667c",
            "#f89f77",
            "#edd9a3"
        ],
        "7": [
            "#4b2991",
            "#872ca2",
            "#c0369d",
            "#ea4f88",
            "#fa7876",
            "#f6a97a",
            "#edd9a3"
        ],
        "tags": [
            "aggregation"
        ]
    },
    "BrwnYl": {
        "2": [
            "#ede5cf",
            "#541f3f"
        ],
        "3": [
            "#ede5cf",
            "#c1766f",
            "#541f3f"
        ],
        "4": [
            "#ede5cf",
            "#d39c83",
            "#a65461",
            "#541f3f"
        ],
        "5": [
            "#ede5cf",
            "#daaf91",
            "#c1766f",
            "#95455a",
            "#541f3f"
        ],
        "6": [
            "#ede5cf",
            "#ddba9b",
            "#cd8c7a",
            "#b26166",
            "#8a3c56",
            "#541f3f"
        ],
        "7": [
            "#ede5cf",
            "#e0c2a2",
            "#d39c83",
            "#c1766f",
            "#a65461",
            "#813753",
            "#541f3f"
        ],
        "tags": [
            "quantitative"
        ]
    },
    "ArmyRose": {
        "2": [
            "#929b4f",
            "#db8195"
        ],
        "3": [
            "#a3ad62",
            "#fdfbe4",
            "#df91a3"
        ],
        "4": [
            "#929b4f",
            "#d9dbaf",
            "#f3d1ca",
            "#db8195"
        ],
        "5": [
            "#879043",
            "#c1c68c",
            "#fdfbe4",
            "#ebb4b8",
            "#d8758b"
        ],
        "6": [
            "#7f883b",
            "#b0b874",
            "#e3e4be",
            "#f6ddd1",
            "#e4a0ac",
            "#d66d85"
        ],
        "7": [
            "#798234",
            "#a3ad62",
            "#d0d3a2",
            "#fdfbe4",
            "#f0c6c3",
            "#df91a3",
            "#d46780"
        ],
        "tags": [
            "diverging"
        ]
    },
    "Fall": {
        "2": [
            "#3d5941",
            "#ca562c"
        ],
        "3": [
            "#3d5941",
            "#f6edbd",
            "#ca562c"
        ],
        "4": [
            "#3d5941",
            "#b5b991",
            "#edbb8a",
            "#ca562c"
        ],
        "5": [
            "#3d5941",
            "#96a07c",
            "#f6edbd",
            "#e6a272",
            "#ca562c"
        ],
        "6": [
            "#3d5941",
            "#839170",
            "#cecea2",
            "#f1cf9e",
            "#e19464",
            "#ca562c"
        ],
        "7": [
            "#3d5941",
            "#778868",
            "#b5b991",
            "#f6edbd",
            "#edbb8a",
            "#de8a5a",
            "#ca562c"
        ],
        "tags": [
            "diverging"
        ]
    },
    "Geyser": {
        "2": [
            "#008080",
            "#ca562c"
        ],
        "3": [
            "#008080",
            "#f6edbd",
            "#ca562c"
        ],
        "4": [
            "#008080",
            "#b4c8a8",
            "#edbb8a",
            "#ca562c"
        ],
        "5": [
            "#008080",
            "#92b69e",
            "#f6edbd",
            "#e6a272",
            "#ca562c"
        ],
        "6": [
            "#008080",
            "#7eab98",
            "#ced7b1",
            "#f1cf9e",
            "#e19464",
            "#ca562c"
        ],
        "7": [
            "#008080",
            "#70a494",
            "#b4c8a8",
            "#f6edbd",
            "#edbb8a",
            "#de8a5a",
            "#ca562c"
        ],
        "tags": [
            "diverging"
        ]
    },
    "Temps": {
        "2": [
            "#009392",
            "#cf597e"
        ],
        "3": [
            "#009392",
            "#e9e29c",
            "#cf597e"
        ],
        "4": [
            "#009392",
            "#9ccb86",
            "#eeb479",
            "#cf597e"
        ],
        "5": [
            "#009392",
            "#71be83",
            "#e9e29c",
            "#ed9c72",
            "#cf597e"
        ],
        "6": [
            "#009392",
            "#52b684",
            "#bcd48c",
            "#edc783",
            "#eb8d71",
            "#cf597e"
        ],
        "7": [
            "#009392",
            "#39b185",
            "#9ccb86",
            "#e9e29c",
            "#eeb479",
            "#e88471",
            "#cf597e"
        ],
        "tags": [
            "diverging"
        ]
    },
    "TealRose": {
        "2": [
            "#009392",
            "#d0587e"
        ],
        "3": [
            "#009392",
            "#f1eac8",
            "#d0587e"
        ],
        "4": [
            "#009392",
            "#91b8aa",
            "#f1eac8",
            "#dfa0a0",
            "#d0587e"
        ],
        "5": [
            "#009392",
            "#91b8aa",
            "#f1eac8",
            "#dfa0a0",
            "#d0587e"
        ],
        "6": [
            "#009392",
            "#72aaa1",
            "#b1c7b3",
            "#e5b9ad",
            "#d98994",
            "#d0587e"
        ],
        "7": [
            "#009392",
            "#72aaa1",
            "#b1c7b3",
            "#f1eac8",
            "#e5b9ad",
            "#d98994",
            "#d0587e"
        ],
        "tags": [
            "diverging"
        ]
    },
    "Tropic": {
        "2": [
            "#009B9E",
            "#C75DAB"
        ],
        "3": [
            "#009B9E",
            "#F1F1F1",
            "#C75DAB"
        ],
        "4": [
            "#009B9E",
            "#A7D3D4",
            "#E4C1D9",
            "#C75DAB"
        ],
        "5": [
            "#009B9E",
            "#7CC5C6",
            "#F1F1F1",
            "#DDA9CD",
            "#C75DAB"
        ],
        "6": [
            "#009B9E",
            "#5DBCBE",
            "#C6DFDF",
            "#E9D4E2",
            "#D99BC6",
            "#C75DAB"
        ],
        "7": [
            "#009B9E",
            "#42B7B9",
            "#A7D3D4",
            "#F1F1F1",
            "#E4C1D9",
            "#D691C1",
            "#C75DAB"
        ],
        "tags": [
            "diverging"
        ]
    },
    "Earth": {
        "2": [
            "#A16928",
            "#2887a1"
        ],
        "3": [
            "#A16928",
            "#edeac2",
            "#2887a1"
        ],
        "4": [
            "#A16928",
            "#d6bd8d",
            "#b5c8b8",
            "#2887a1"
        ],
        "5": [
            "#A16928",
            "#caa873",
            "#edeac2",
            "#98b7b2",
            "#2887a1"
        ],
        "6": [
            "#A16928",
            "#c29b64",
            "#e0cfa2",
            "#cbd5bc",
            "#85adaf",
            "#2887a1"
        ],
        "7": [
            "#A16928",
            "#bd925a",
            "#d6bd8d",
            "#edeac2",
            "#b5c8b8",
            "#79a7ac",
            "#2887a1"
        ],
        "tags": [
            "diverging"
        ]
    },
    "Antique": {
        "2": [
            "#855C75",
            "#D9AF6B",
            "#7C7C7C"
        ],
        "3": [
            "#855C75",
            "#D9AF6B",
            "#AF6458",
            "#7C7C7C"
        ],
        "4": [
            "#855C75",
            "#D9AF6B",
            "#AF6458",
            "#736F4C",
            "#7C7C7C"
        ],
        "5": [
            "#855C75",
            "#D9AF6B",
            "#AF6458",
            "#736F4C",
            "#526A83",
            "#7C7C7C"
        ],
        "6": [
            "#855C75",
            "#D9AF6B",
            "#AF6458",
            "#736F4C",
            "#526A83",
            "#625377",
            "#7C7C7C"
        ],
        "7": [
            "#855C75",
            "#D9AF6B",
            "#AF6458",
            "#736F4C",
            "#526A83",
            "#625377",
            "#68855C",
            "#7C7C7C"
        ],
        "8": [
            "#855C75",
            "#D9AF6B",
            "#AF6458",
            "#736F4C",
            "#526A83",
            "#625377",
            "#68855C",
            "#9C9C5E",
            "#7C7C7C"
        ],
        "9": [
            "#855C75",
            "#D9AF6B",
            "#AF6458",
            "#736F4C",
            "#526A83",
            "#625377",
            "#68855C",
            "#9C9C5E",
            "#A06177",
            "#7C7C7C"
        ],
        "10": [
            "#855C75",
            "#D9AF6B",
            "#AF6458",
            "#736F4C",
            "#526A83",
            "#625377",
            "#68855C",
            "#9C9C5E",
            "#A06177",
            "#8C785D",
            "#7C7C7C"
        ],
        "11": [
            "#855C75",
            "#D9AF6B",
            "#AF6458",
            "#736F4C",
            "#526A83",
            "#625377",
            "#68855C",
            "#9C9C5E",
            "#A06177",
            "#8C785D",
            "#467378",
            "#7C7C7C"
        ],
        "tags": [
            "qualitative"
        ]
    },
    "Bold": {
        "2": [
            "#7F3C8D",
            "#11A579",
            "#A5AA99"
        ],
        "3": [
            "#7F3C8D",
            "#11A579",
            "#3969AC",
            "#A5AA99"
        ],
        "4": [
            "#7F3C8D",
            "#11A579",
            "#3969AC",
            "#F2B701",
            "#A5AA99"
        ],
        "5": [
            "#7F3C8D",
            "#11A579",
            "#3969AC",
            "#F2B701",
            "#E73F74",
            "#A5AA99"
        ],
        "6": [
            "#7F3C8D",
            "#11A579",
            "#3969AC",
            "#F2B701",
            "#E73F74",
            "#80BA5A",
            "#A5AA99"
        ],
        "7": [
            "#7F3C8D",
            "#11A579",
            "#3969AC",
            "#F2B701",
            "#E73F74",
            "#80BA5A",
            "#E68310",
            "#A5AA99"
        ],
        "8": [
            "#7F3C8D",
            "#11A579",
            "#3969AC",
            "#F2B701",
            "#E73F74",
            "#80BA5A",
            "#E68310",
            "#008695",
            "#A5AA99"
        ],
        "9": [
            "#7F3C8D",
            "#11A579",
            "#3969AC",
            "#F2B701",
            "#E73F74",
            "#80BA5A",
            "#E68310",
            "#008695",
            "#CF1C90",
            "#A5AA99"
        ],
        "10": [
            "#7F3C8D",
            "#11A579",
            "#3969AC",
            "#F2B701",
            "#E73F74",
            "#80BA5A",
            "#E68310",
            "#008695",
            "#CF1C90",
            "#f97b72",
            "#A5AA99"
        ],
        "11": [
            "#7F3C8D",
            "#11A579",
            "#3969AC",
            "#F2B701",
            "#E73F74",
            "#80BA5A",
            "#E68310",
            "#008695",
            "#CF1C90",
            "#f97b72",
            "#4b4b8f",
            "#A5AA99"
        ],
        "tags": [
            "qualitative"
        ]
    },
    "Pastel": {
        "2": [
            "#66C5CC",
            "#F6CF71",
            "#B3B3B3"
        ],
        "3": [
            "#66C5CC",
            "#F6CF71",
            "#F89C74",
            "#B3B3B3"
        ],
        "4": [
            "#66C5CC",
            "#F6CF71",
            "#F89C74",
            "#DCB0F2",
            "#B3B3B3"
        ],
        "5": [
            "#66C5CC",
            "#F6CF71",
            "#F89C74",
            "#DCB0F2",
            "#87C55F",
            "#B3B3B3"
        ],
        "6": [
            "#66C5CC",
            "#F6CF71",
            "#F89C74",
            "#DCB0F2",
            "#87C55F",
            "#9EB9F3",
            "#B3B3B3"
        ],
        "7": [
            "#66C5CC",
            "#F6CF71",
            "#F89C74",
            "#DCB0F2",
            "#87C55F",
            "#9EB9F3",
            "#FE88B1",
            "#B3B3B3"
        ],
        "8": [
            "#66C5CC",
            "#F6CF71",
            "#F89C74",
            "#DCB0F2",
            "#87C55F",
            "#9EB9F3",
            "#FE88B1",
            "#C9DB74",
            "#B3B3B3"
        ],
        "9": [
            "#66C5CC",
            "#F6CF71",
            "#F89C74",
            "#DCB0F2",
            "#87C55F",
            "#9EB9F3",
            "#FE88B1",
            "#C9DB74",
            "#8BE0A4",
            "#B3B3B3"
        ],
        "10": [
            "#66C5CC",
            "#F6CF71",
            "#F89C74",
            "#DCB0F2",
            "#87C55F",
            "#9EB9F3",
            "#FE88B1",
            "#C9DB74",
            "#8BE0A4",
            "#B497E7",
            "#B3B3B3"
        ],
        "11": [
            "#66C5CC",
            "#F6CF71",
            "#F89C74",
            "#DCB0F2",
            "#87C55F",
            "#9EB9F3",
            "#FE88B1",
            "#C9DB74",
            "#8BE0A4",
            "#B497E7",
            "#D3B484",
            "#B3B3B3"
        ],
        "tags": [
            "qualitative"
        ]
    },
    "Prism": {
        "2": [
            "#5F4690",
            "#1D6996",
            "#666666"
        ],
        "3": [
            "#5F4690",
            "#1D6996",
            "#38A6A5",
            "#666666"
        ],
        "4": [
            "#5F4690",
            "#1D6996",
            "#38A6A5",
            "#0F8554",
            "#666666"
        ],
        "5": [
            "#5F4690",
            "#1D6996",
            "#38A6A5",
            "#0F8554",
            "#73AF48",
            "#666666"
        ],
        "6": [
            "#5F4690",
            "#1D6996",
            "#38A6A5",
            "#0F8554",
            "#73AF48",
            "#EDAD08",
            "#666666"
        ],
        "7": [
            "#5F4690",
            "#1D6996",
            "#38A6A5",
            "#0F8554",
            "#73AF48",
            "#EDAD08",
            "#E17C05",
            "#666666"
        ],
        "8": [
            "#5F4690",
            "#1D6996",
            "#38A6A5",
            "#0F8554",
            "#73AF48",
            "#EDAD08",
            "#E17C05",
            "#CC503E",
            "#666666"
        ],
        "9": [
            "#5F4690",
            "#1D6996",
            "#38A6A5",
            "#0F8554",
            "#73AF48",
            "#EDAD08",
            "#E17C05",
            "#CC503E",
            "#94346E",
            "#666666"
        ],
        "10": [
            "#5F4690",
            "#1D6996",
            "#38A6A5",
            "#0F8554",
            "#73AF48",
            "#EDAD08",
            "#E17C05",
            "#CC503E",
            "#94346E",
            "#6F4070",
            "#666666"
        ],
        "11": [
            "#5F4690",
            "#1D6996",
            "#38A6A5",
            "#0F8554",
            "#73AF48",
            "#EDAD08",
            "#E17C05",
            "#CC503E",
            "#94346E",
            "#6F4070",
            "#994E95",
            "#666666"
        ],
        "tags": [
            "qualitative"
        ]
    },
    "Safe": {
        "2": [
            "#88CCEE",
            "#CC6677",
            "#888888"
        ],
        "3": [
            "#88CCEE",
            "#CC6677",
            "#DDCC77",
            "#888888"
        ],
        "4": [
            "#88CCEE",
            "#CC6677",
            "#DDCC77",
            "#117733",
            "#888888"
        ],
        "5": [
            "#88CCEE",
            "#CC6677",
            "#DDCC77",
            "#117733",
            "#332288",
            "#888888"
        ],
        "6": [
            "#88CCEE",
            "#CC6677",
            "#DDCC77",
            "#117733",
            "#332288",
            "#AA4499",
            "#888888"
        ],
        "7": [
            "#88CCEE",
            "#CC6677",
            "#DDCC77",
            "#117733",
            "#332288",
            "#AA4499",
            "#44AA99",
            "#888888"
        ],
        "8": [
            "#88CCEE",
            "#CC6677",
            "#DDCC77",
            "#117733",
            "#332288",
            "#AA4499",
            "#44AA99",
            "#999933",
            "#888888"
        ],
        "9": [
            "#88CCEE",
            "#CC6677",
            "#DDCC77",
            "#117733",
            "#332288",
            "#AA4499",
            "#44AA99",
            "#999933",
            "#882255",
            "#888888"
        ],
        "10": [
            "#88CCEE",
            "#CC6677",
            "#DDCC77",
            "#117733",
            "#332288",
            "#AA4499",
            "#44AA99",
            "#999933",
            "#882255",
            "#661100",
            "#888888"
        ],
        "11": [
            "#88CCEE",
            "#CC6677",
            "#DDCC77",
            "#117733",
            "#332288",
            "#AA4499",
            "#44AA99",
            "#999933",
            "#882255",
            "#661100",
            "#6699CC",
            "#888888"
        ],
        "tags": [
            "qualitative",
            "colorblind"
        ]
    },
    "Vivid": {
        "2": [
            "#E58606",
            "#5D69B1",
            "#A5AA99"
        ],
        "3": [
            "#E58606",
            "#5D69B1",
            "#52BCA3",
            "#A5AA99"
        ],
        "4": [
            "#E58606",
            "#5D69B1",
            "#52BCA3",
            "#99C945",
            "#A5AA99"
        ],
        "5": [
            "#E58606",
            "#5D69B1",
            "#52BCA3",
            "#99C945",
            "#CC61B0",
            "#A5AA99"
        ],
        "6": [
            "#E58606",
            "#5D69B1",
            "#52BCA3",
            "#99C945",
            "#CC61B0",
            "#24796C",
            "#A5AA99"
        ],
        "7": [
            "#E58606",
            "#5D69B1",
            "#52BCA3",
            "#99C945",
            "#CC61B0",
            "#24796C",
            "#DAA51B",
            "#A5AA99"
        ],
        "8": [
            "#E58606",
            "#5D69B1",
            "#52BCA3",
            "#99C945",
            "#CC61B0",
            "#24796C",
            "#DAA51B",
            "#2F8AC4",
            "#A5AA99"
        ],
        "9": [
            "#E58606",
            "#5D69B1",
            "#52BCA3",
            "#99C945",
            "#CC61B0",
            "#24796C",
            "#DAA51B",
            "#2F8AC4",
            "#764E9F",
            "#A5AA99"
        ],
        "10": [
            "#E58606",
            "#5D69B1",
            "#52BCA3",
            "#99C945",
            "#CC61B0",
            "#24796C",
            "#DAA51B",
            "#2F8AC4",
            "#764E9F",
            "#ED645A",
            "#A5AA99"
        ],
        "11": [
            "#E58606",
            "#5D69B1",
            "#52BCA3",
            "#99C945",
            "#CC61B0",
            "#24796C",
            "#DAA51B",
            "#2F8AC4",
            "#764E9F",
            "#ED645A",
            "#CC3A8E",
            "#A5AA99"
        ],
        "tags": [
            "qualitative"
        ]
    }
};

var colorbrewer_tags = {
  "Blues": { "tags": ["quantitative"] },
  "BrBG": { "tags": ["diverging"] },
  "Greys": { "tags": ["quantitative"] },
  "PiYG": { "tags": ["diverging"] },
  "PRGn": { "tags": ["diverging"] },
  "Purples": { "tags": ["quantitative"] },
  "RdYlGn": { "tags": ["diverging"] },
  "Spectral": { "tags": ["diverging"] },
  "YlOrBr": { "tags": ["quantitative"] },
  "YlGn": { "tags": ["quantitative"] },
  "YlGnBu": { "tags": ["quantitative"] },
  "YlOrRd": { "tags": ["quantitative"] }
}

var colorbrewer = __webpack_require__(/*! colorbrewer */ "./node_modules/colorbrewer/index.js");

// augment colorbrewer with tags
for (var r in colorbrewer) {
  var ramps = colorbrewer[r];
  var augmentedRamps = {};
  for (var i in ramps) {
    augmentedRamps[i] = ramps[i];
  }

  if (r in colorbrewer_tags) {
    augmentedRamps.tags = colorbrewer_tags[r].tags;
  }

  cartocolor['cb_' + r] = augmentedRamps;
}

if (true) {
    !(__WEBPACK_AMD_DEFINE_FACTORY__ = (cartocolor),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) :
				__WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
} else {}

}();


/***/ }),

/***/ "./node_modules/cartocolor/index.js":
/*!******************************************!*\
  !*** ./node_modules/cartocolor/index.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./cartocolor */ "./node_modules/cartocolor/cartocolor.js");


/***/ }),

/***/ "./node_modules/colorbrewer/colorbrewer.js":
/*!*************************************************!*\
  !*** ./node_modules/colorbrewer/colorbrewer.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;// This product includes color specifications and designs developed by Cynthia Brewer (http://colorbrewer.org/).
// JavaScript specs as packaged in the D3 library (d3js.org). Please see license at http://colorbrewer.org/export/LICENSE.txt
!function() {

var colorbrewer = {YlGn: {
3: ["#f7fcb9","#addd8e","#31a354"],
4: ["#ffffcc","#c2e699","#78c679","#238443"],
5: ["#ffffcc","#c2e699","#78c679","#31a354","#006837"],
6: ["#ffffcc","#d9f0a3","#addd8e","#78c679","#31a354","#006837"],
7: ["#ffffcc","#d9f0a3","#addd8e","#78c679","#41ab5d","#238443","#005a32"],
8: ["#ffffe5","#f7fcb9","#d9f0a3","#addd8e","#78c679","#41ab5d","#238443","#005a32"],
9: ["#ffffe5","#f7fcb9","#d9f0a3","#addd8e","#78c679","#41ab5d","#238443","#006837","#004529"]
},YlGnBu: {
3: ["#edf8b1","#7fcdbb","#2c7fb8"],
4: ["#ffffcc","#a1dab4","#41b6c4","#225ea8"],
5: ["#ffffcc","#a1dab4","#41b6c4","#2c7fb8","#253494"],
6: ["#ffffcc","#c7e9b4","#7fcdbb","#41b6c4","#2c7fb8","#253494"],
7: ["#ffffcc","#c7e9b4","#7fcdbb","#41b6c4","#1d91c0","#225ea8","#0c2c84"],
8: ["#ffffd9","#edf8b1","#c7e9b4","#7fcdbb","#41b6c4","#1d91c0","#225ea8","#0c2c84"],
9: ["#ffffd9","#edf8b1","#c7e9b4","#7fcdbb","#41b6c4","#1d91c0","#225ea8","#253494","#081d58"]
},GnBu: {
3: ["#e0f3db","#a8ddb5","#43a2ca"],
4: ["#f0f9e8","#bae4bc","#7bccc4","#2b8cbe"],
5: ["#f0f9e8","#bae4bc","#7bccc4","#43a2ca","#0868ac"],
6: ["#f0f9e8","#ccebc5","#a8ddb5","#7bccc4","#43a2ca","#0868ac"],
7: ["#f0f9e8","#ccebc5","#a8ddb5","#7bccc4","#4eb3d3","#2b8cbe","#08589e"],
8: ["#f7fcf0","#e0f3db","#ccebc5","#a8ddb5","#7bccc4","#4eb3d3","#2b8cbe","#08589e"],
9: ["#f7fcf0","#e0f3db","#ccebc5","#a8ddb5","#7bccc4","#4eb3d3","#2b8cbe","#0868ac","#084081"]
},BuGn: {
3: ["#e5f5f9","#99d8c9","#2ca25f"],
4: ["#edf8fb","#b2e2e2","#66c2a4","#238b45"],
5: ["#edf8fb","#b2e2e2","#66c2a4","#2ca25f","#006d2c"],
6: ["#edf8fb","#ccece6","#99d8c9","#66c2a4","#2ca25f","#006d2c"],
7: ["#edf8fb","#ccece6","#99d8c9","#66c2a4","#41ae76","#238b45","#005824"],
8: ["#f7fcfd","#e5f5f9","#ccece6","#99d8c9","#66c2a4","#41ae76","#238b45","#005824"],
9: ["#f7fcfd","#e5f5f9","#ccece6","#99d8c9","#66c2a4","#41ae76","#238b45","#006d2c","#00441b"]
},PuBuGn: {
3: ["#ece2f0","#a6bddb","#1c9099"],
4: ["#f6eff7","#bdc9e1","#67a9cf","#02818a"],
5: ["#f6eff7","#bdc9e1","#67a9cf","#1c9099","#016c59"],
6: ["#f6eff7","#d0d1e6","#a6bddb","#67a9cf","#1c9099","#016c59"],
7: ["#f6eff7","#d0d1e6","#a6bddb","#67a9cf","#3690c0","#02818a","#016450"],
8: ["#fff7fb","#ece2f0","#d0d1e6","#a6bddb","#67a9cf","#3690c0","#02818a","#016450"],
9: ["#fff7fb","#ece2f0","#d0d1e6","#a6bddb","#67a9cf","#3690c0","#02818a","#016c59","#014636"]
},PuBu: {
3: ["#ece7f2","#a6bddb","#2b8cbe"],
4: ["#f1eef6","#bdc9e1","#74a9cf","#0570b0"],
5: ["#f1eef6","#bdc9e1","#74a9cf","#2b8cbe","#045a8d"],
6: ["#f1eef6","#d0d1e6","#a6bddb","#74a9cf","#2b8cbe","#045a8d"],
7: ["#f1eef6","#d0d1e6","#a6bddb","#74a9cf","#3690c0","#0570b0","#034e7b"],
8: ["#fff7fb","#ece7f2","#d0d1e6","#a6bddb","#74a9cf","#3690c0","#0570b0","#034e7b"],
9: ["#fff7fb","#ece7f2","#d0d1e6","#a6bddb","#74a9cf","#3690c0","#0570b0","#045a8d","#023858"]
},BuPu: {
3: ["#e0ecf4","#9ebcda","#8856a7"],
4: ["#edf8fb","#b3cde3","#8c96c6","#88419d"],
5: ["#edf8fb","#b3cde3","#8c96c6","#8856a7","#810f7c"],
6: ["#edf8fb","#bfd3e6","#9ebcda","#8c96c6","#8856a7","#810f7c"],
7: ["#edf8fb","#bfd3e6","#9ebcda","#8c96c6","#8c6bb1","#88419d","#6e016b"],
8: ["#f7fcfd","#e0ecf4","#bfd3e6","#9ebcda","#8c96c6","#8c6bb1","#88419d","#6e016b"],
9: ["#f7fcfd","#e0ecf4","#bfd3e6","#9ebcda","#8c96c6","#8c6bb1","#88419d","#810f7c","#4d004b"]
},RdPu: {
3: ["#fde0dd","#fa9fb5","#c51b8a"],
4: ["#feebe2","#fbb4b9","#f768a1","#ae017e"],
5: ["#feebe2","#fbb4b9","#f768a1","#c51b8a","#7a0177"],
6: ["#feebe2","#fcc5c0","#fa9fb5","#f768a1","#c51b8a","#7a0177"],
7: ["#feebe2","#fcc5c0","#fa9fb5","#f768a1","#dd3497","#ae017e","#7a0177"],
8: ["#fff7f3","#fde0dd","#fcc5c0","#fa9fb5","#f768a1","#dd3497","#ae017e","#7a0177"],
9: ["#fff7f3","#fde0dd","#fcc5c0","#fa9fb5","#f768a1","#dd3497","#ae017e","#7a0177","#49006a"]
},PuRd: {
3: ["#e7e1ef","#c994c7","#dd1c77"],
4: ["#f1eef6","#d7b5d8","#df65b0","#ce1256"],
5: ["#f1eef6","#d7b5d8","#df65b0","#dd1c77","#980043"],
6: ["#f1eef6","#d4b9da","#c994c7","#df65b0","#dd1c77","#980043"],
7: ["#f1eef6","#d4b9da","#c994c7","#df65b0","#e7298a","#ce1256","#91003f"],
8: ["#f7f4f9","#e7e1ef","#d4b9da","#c994c7","#df65b0","#e7298a","#ce1256","#91003f"],
9: ["#f7f4f9","#e7e1ef","#d4b9da","#c994c7","#df65b0","#e7298a","#ce1256","#980043","#67001f"]
},OrRd: {
3: ["#fee8c8","#fdbb84","#e34a33"],
4: ["#fef0d9","#fdcc8a","#fc8d59","#d7301f"],
5: ["#fef0d9","#fdcc8a","#fc8d59","#e34a33","#b30000"],
6: ["#fef0d9","#fdd49e","#fdbb84","#fc8d59","#e34a33","#b30000"],
7: ["#fef0d9","#fdd49e","#fdbb84","#fc8d59","#ef6548","#d7301f","#990000"],
8: ["#fff7ec","#fee8c8","#fdd49e","#fdbb84","#fc8d59","#ef6548","#d7301f","#990000"],
9: ["#fff7ec","#fee8c8","#fdd49e","#fdbb84","#fc8d59","#ef6548","#d7301f","#b30000","#7f0000"]
},YlOrRd: {
3: ["#ffeda0","#feb24c","#f03b20"],
4: ["#ffffb2","#fecc5c","#fd8d3c","#e31a1c"],
5: ["#ffffb2","#fecc5c","#fd8d3c","#f03b20","#bd0026"],
6: ["#ffffb2","#fed976","#feb24c","#fd8d3c","#f03b20","#bd0026"],
7: ["#ffffb2","#fed976","#feb24c","#fd8d3c","#fc4e2a","#e31a1c","#b10026"],
8: ["#ffffcc","#ffeda0","#fed976","#feb24c","#fd8d3c","#fc4e2a","#e31a1c","#b10026"],
9: ["#ffffcc","#ffeda0","#fed976","#feb24c","#fd8d3c","#fc4e2a","#e31a1c","#bd0026","#800026"]
},YlOrBr: {
3: ["#fff7bc","#fec44f","#d95f0e"],
4: ["#ffffd4","#fed98e","#fe9929","#cc4c02"],
5: ["#ffffd4","#fed98e","#fe9929","#d95f0e","#993404"],
6: ["#ffffd4","#fee391","#fec44f","#fe9929","#d95f0e","#993404"],
7: ["#ffffd4","#fee391","#fec44f","#fe9929","#ec7014","#cc4c02","#8c2d04"],
8: ["#ffffe5","#fff7bc","#fee391","#fec44f","#fe9929","#ec7014","#cc4c02","#8c2d04"],
9: ["#ffffe5","#fff7bc","#fee391","#fec44f","#fe9929","#ec7014","#cc4c02","#993404","#662506"]
},Purples: {
3: ["#efedf5","#bcbddc","#756bb1"],
4: ["#f2f0f7","#cbc9e2","#9e9ac8","#6a51a3"],
5: ["#f2f0f7","#cbc9e2","#9e9ac8","#756bb1","#54278f"],
6: ["#f2f0f7","#dadaeb","#bcbddc","#9e9ac8","#756bb1","#54278f"],
7: ["#f2f0f7","#dadaeb","#bcbddc","#9e9ac8","#807dba","#6a51a3","#4a1486"],
8: ["#fcfbfd","#efedf5","#dadaeb","#bcbddc","#9e9ac8","#807dba","#6a51a3","#4a1486"],
9: ["#fcfbfd","#efedf5","#dadaeb","#bcbddc","#9e9ac8","#807dba","#6a51a3","#54278f","#3f007d"]
},Blues: {
3: ["#deebf7","#9ecae1","#3182bd"],
4: ["#eff3ff","#bdd7e7","#6baed6","#2171b5"],
5: ["#eff3ff","#bdd7e7","#6baed6","#3182bd","#08519c"],
6: ["#eff3ff","#c6dbef","#9ecae1","#6baed6","#3182bd","#08519c"],
7: ["#eff3ff","#c6dbef","#9ecae1","#6baed6","#4292c6","#2171b5","#084594"],
8: ["#f7fbff","#deebf7","#c6dbef","#9ecae1","#6baed6","#4292c6","#2171b5","#084594"],
9: ["#f7fbff","#deebf7","#c6dbef","#9ecae1","#6baed6","#4292c6","#2171b5","#08519c","#08306b"]
},Greens: {
3: ["#e5f5e0","#a1d99b","#31a354"],
4: ["#edf8e9","#bae4b3","#74c476","#238b45"],
5: ["#edf8e9","#bae4b3","#74c476","#31a354","#006d2c"],
6: ["#edf8e9","#c7e9c0","#a1d99b","#74c476","#31a354","#006d2c"],
7: ["#edf8e9","#c7e9c0","#a1d99b","#74c476","#41ab5d","#238b45","#005a32"],
8: ["#f7fcf5","#e5f5e0","#c7e9c0","#a1d99b","#74c476","#41ab5d","#238b45","#005a32"],
9: ["#f7fcf5","#e5f5e0","#c7e9c0","#a1d99b","#74c476","#41ab5d","#238b45","#006d2c","#00441b"]
},Oranges: {
3: ["#fee6ce","#fdae6b","#e6550d"],
4: ["#feedde","#fdbe85","#fd8d3c","#d94701"],
5: ["#feedde","#fdbe85","#fd8d3c","#e6550d","#a63603"],
6: ["#feedde","#fdd0a2","#fdae6b","#fd8d3c","#e6550d","#a63603"],
7: ["#feedde","#fdd0a2","#fdae6b","#fd8d3c","#f16913","#d94801","#8c2d04"],
8: ["#fff5eb","#fee6ce","#fdd0a2","#fdae6b","#fd8d3c","#f16913","#d94801","#8c2d04"],
9: ["#fff5eb","#fee6ce","#fdd0a2","#fdae6b","#fd8d3c","#f16913","#d94801","#a63603","#7f2704"]
},Reds: {
3: ["#fee0d2","#fc9272","#de2d26"],
4: ["#fee5d9","#fcae91","#fb6a4a","#cb181d"],
5: ["#fee5d9","#fcae91","#fb6a4a","#de2d26","#a50f15"],
6: ["#fee5d9","#fcbba1","#fc9272","#fb6a4a","#de2d26","#a50f15"],
7: ["#fee5d9","#fcbba1","#fc9272","#fb6a4a","#ef3b2c","#cb181d","#99000d"],
8: ["#fff5f0","#fee0d2","#fcbba1","#fc9272","#fb6a4a","#ef3b2c","#cb181d","#99000d"],
9: ["#fff5f0","#fee0d2","#fcbba1","#fc9272","#fb6a4a","#ef3b2c","#cb181d","#a50f15","#67000d"]
},Greys: {
3: ["#f0f0f0","#bdbdbd","#636363"],
4: ["#f7f7f7","#cccccc","#969696","#525252"],
5: ["#f7f7f7","#cccccc","#969696","#636363","#252525"],
6: ["#f7f7f7","#d9d9d9","#bdbdbd","#969696","#636363","#252525"],
7: ["#f7f7f7","#d9d9d9","#bdbdbd","#969696","#737373","#525252","#252525"],
8: ["#ffffff","#f0f0f0","#d9d9d9","#bdbdbd","#969696","#737373","#525252","#252525"],
9: ["#ffffff","#f0f0f0","#d9d9d9","#bdbdbd","#969696","#737373","#525252","#252525","#000000"]
},PuOr: {
3: ["#f1a340","#f7f7f7","#998ec3"],
4: ["#e66101","#fdb863","#b2abd2","#5e3c99"],
5: ["#e66101","#fdb863","#f7f7f7","#b2abd2","#5e3c99"],
6: ["#b35806","#f1a340","#fee0b6","#d8daeb","#998ec3","#542788"],
7: ["#b35806","#f1a340","#fee0b6","#f7f7f7","#d8daeb","#998ec3","#542788"],
8: ["#b35806","#e08214","#fdb863","#fee0b6","#d8daeb","#b2abd2","#8073ac","#542788"],
9: ["#b35806","#e08214","#fdb863","#fee0b6","#f7f7f7","#d8daeb","#b2abd2","#8073ac","#542788"],
10: ["#7f3b08","#b35806","#e08214","#fdb863","#fee0b6","#d8daeb","#b2abd2","#8073ac","#542788","#2d004b"],
11: ["#7f3b08","#b35806","#e08214","#fdb863","#fee0b6","#f7f7f7","#d8daeb","#b2abd2","#8073ac","#542788","#2d004b"]
},BrBG: {
3: ["#d8b365","#f5f5f5","#5ab4ac"],
4: ["#a6611a","#dfc27d","#80cdc1","#018571"],
5: ["#a6611a","#dfc27d","#f5f5f5","#80cdc1","#018571"],
6: ["#8c510a","#d8b365","#f6e8c3","#c7eae5","#5ab4ac","#01665e"],
7: ["#8c510a","#d8b365","#f6e8c3","#f5f5f5","#c7eae5","#5ab4ac","#01665e"],
8: ["#8c510a","#bf812d","#dfc27d","#f6e8c3","#c7eae5","#80cdc1","#35978f","#01665e"],
9: ["#8c510a","#bf812d","#dfc27d","#f6e8c3","#f5f5f5","#c7eae5","#80cdc1","#35978f","#01665e"],
10: ["#543005","#8c510a","#bf812d","#dfc27d","#f6e8c3","#c7eae5","#80cdc1","#35978f","#01665e","#003c30"],
11: ["#543005","#8c510a","#bf812d","#dfc27d","#f6e8c3","#f5f5f5","#c7eae5","#80cdc1","#35978f","#01665e","#003c30"]
},PRGn: {
3: ["#af8dc3","#f7f7f7","#7fbf7b"],
4: ["#7b3294","#c2a5cf","#a6dba0","#008837"],
5: ["#7b3294","#c2a5cf","#f7f7f7","#a6dba0","#008837"],
6: ["#762a83","#af8dc3","#e7d4e8","#d9f0d3","#7fbf7b","#1b7837"],
7: ["#762a83","#af8dc3","#e7d4e8","#f7f7f7","#d9f0d3","#7fbf7b","#1b7837"],
8: ["#762a83","#9970ab","#c2a5cf","#e7d4e8","#d9f0d3","#a6dba0","#5aae61","#1b7837"],
9: ["#762a83","#9970ab","#c2a5cf","#e7d4e8","#f7f7f7","#d9f0d3","#a6dba0","#5aae61","#1b7837"],
10: ["#40004b","#762a83","#9970ab","#c2a5cf","#e7d4e8","#d9f0d3","#a6dba0","#5aae61","#1b7837","#00441b"],
11: ["#40004b","#762a83","#9970ab","#c2a5cf","#e7d4e8","#f7f7f7","#d9f0d3","#a6dba0","#5aae61","#1b7837","#00441b"]
},PiYG: {
3: ["#e9a3c9","#f7f7f7","#a1d76a"],
4: ["#d01c8b","#f1b6da","#b8e186","#4dac26"],
5: ["#d01c8b","#f1b6da","#f7f7f7","#b8e186","#4dac26"],
6: ["#c51b7d","#e9a3c9","#fde0ef","#e6f5d0","#a1d76a","#4d9221"],
7: ["#c51b7d","#e9a3c9","#fde0ef","#f7f7f7","#e6f5d0","#a1d76a","#4d9221"],
8: ["#c51b7d","#de77ae","#f1b6da","#fde0ef","#e6f5d0","#b8e186","#7fbc41","#4d9221"],
9: ["#c51b7d","#de77ae","#f1b6da","#fde0ef","#f7f7f7","#e6f5d0","#b8e186","#7fbc41","#4d9221"],
10: ["#8e0152","#c51b7d","#de77ae","#f1b6da","#fde0ef","#e6f5d0","#b8e186","#7fbc41","#4d9221","#276419"],
11: ["#8e0152","#c51b7d","#de77ae","#f1b6da","#fde0ef","#f7f7f7","#e6f5d0","#b8e186","#7fbc41","#4d9221","#276419"]
},RdBu: {
3: ["#ef8a62","#f7f7f7","#67a9cf"],
4: ["#ca0020","#f4a582","#92c5de","#0571b0"],
5: ["#ca0020","#f4a582","#f7f7f7","#92c5de","#0571b0"],
6: ["#b2182b","#ef8a62","#fddbc7","#d1e5f0","#67a9cf","#2166ac"],
7: ["#b2182b","#ef8a62","#fddbc7","#f7f7f7","#d1e5f0","#67a9cf","#2166ac"],
8: ["#b2182b","#d6604d","#f4a582","#fddbc7","#d1e5f0","#92c5de","#4393c3","#2166ac"],
9: ["#b2182b","#d6604d","#f4a582","#fddbc7","#f7f7f7","#d1e5f0","#92c5de","#4393c3","#2166ac"],
10: ["#67001f","#b2182b","#d6604d","#f4a582","#fddbc7","#d1e5f0","#92c5de","#4393c3","#2166ac","#053061"],
11: ["#67001f","#b2182b","#d6604d","#f4a582","#fddbc7","#f7f7f7","#d1e5f0","#92c5de","#4393c3","#2166ac","#053061"]
},RdGy: {
3: ["#ef8a62","#ffffff","#999999"],
4: ["#ca0020","#f4a582","#bababa","#404040"],
5: ["#ca0020","#f4a582","#ffffff","#bababa","#404040"],
6: ["#b2182b","#ef8a62","#fddbc7","#e0e0e0","#999999","#4d4d4d"],
7: ["#b2182b","#ef8a62","#fddbc7","#ffffff","#e0e0e0","#999999","#4d4d4d"],
8: ["#b2182b","#d6604d","#f4a582","#fddbc7","#e0e0e0","#bababa","#878787","#4d4d4d"],
9: ["#b2182b","#d6604d","#f4a582","#fddbc7","#ffffff","#e0e0e0","#bababa","#878787","#4d4d4d"],
10: ["#67001f","#b2182b","#d6604d","#f4a582","#fddbc7","#e0e0e0","#bababa","#878787","#4d4d4d","#1a1a1a"],
11: ["#67001f","#b2182b","#d6604d","#f4a582","#fddbc7","#ffffff","#e0e0e0","#bababa","#878787","#4d4d4d","#1a1a1a"]
},RdYlBu: {
3: ["#fc8d59","#ffffbf","#91bfdb"],
4: ["#d7191c","#fdae61","#abd9e9","#2c7bb6"],
5: ["#d7191c","#fdae61","#ffffbf","#abd9e9","#2c7bb6"],
6: ["#d73027","#fc8d59","#fee090","#e0f3f8","#91bfdb","#4575b4"],
7: ["#d73027","#fc8d59","#fee090","#ffffbf","#e0f3f8","#91bfdb","#4575b4"],
8: ["#d73027","#f46d43","#fdae61","#fee090","#e0f3f8","#abd9e9","#74add1","#4575b4"],
9: ["#d73027","#f46d43","#fdae61","#fee090","#ffffbf","#e0f3f8","#abd9e9","#74add1","#4575b4"],
10: ["#a50026","#d73027","#f46d43","#fdae61","#fee090","#e0f3f8","#abd9e9","#74add1","#4575b4","#313695"],
11: ["#a50026","#d73027","#f46d43","#fdae61","#fee090","#ffffbf","#e0f3f8","#abd9e9","#74add1","#4575b4","#313695"]
},Spectral: {
3: ["#fc8d59","#ffffbf","#99d594"],
4: ["#d7191c","#fdae61","#abdda4","#2b83ba"],
5: ["#d7191c","#fdae61","#ffffbf","#abdda4","#2b83ba"],
6: ["#d53e4f","#fc8d59","#fee08b","#e6f598","#99d594","#3288bd"],
7: ["#d53e4f","#fc8d59","#fee08b","#ffffbf","#e6f598","#99d594","#3288bd"],
8: ["#d53e4f","#f46d43","#fdae61","#fee08b","#e6f598","#abdda4","#66c2a5","#3288bd"],
9: ["#d53e4f","#f46d43","#fdae61","#fee08b","#ffffbf","#e6f598","#abdda4","#66c2a5","#3288bd"],
10: ["#9e0142","#d53e4f","#f46d43","#fdae61","#fee08b","#e6f598","#abdda4","#66c2a5","#3288bd","#5e4fa2"],
11: ["#9e0142","#d53e4f","#f46d43","#fdae61","#fee08b","#ffffbf","#e6f598","#abdda4","#66c2a5","#3288bd","#5e4fa2"]
},RdYlGn: {
3: ["#fc8d59","#ffffbf","#91cf60"],
4: ["#d7191c","#fdae61","#a6d96a","#1a9641"],
5: ["#d7191c","#fdae61","#ffffbf","#a6d96a","#1a9641"],
6: ["#d73027","#fc8d59","#fee08b","#d9ef8b","#91cf60","#1a9850"],
7: ["#d73027","#fc8d59","#fee08b","#ffffbf","#d9ef8b","#91cf60","#1a9850"],
8: ["#d73027","#f46d43","#fdae61","#fee08b","#d9ef8b","#a6d96a","#66bd63","#1a9850"],
9: ["#d73027","#f46d43","#fdae61","#fee08b","#ffffbf","#d9ef8b","#a6d96a","#66bd63","#1a9850"],
10: ["#a50026","#d73027","#f46d43","#fdae61","#fee08b","#d9ef8b","#a6d96a","#66bd63","#1a9850","#006837"],
11: ["#a50026","#d73027","#f46d43","#fdae61","#fee08b","#ffffbf","#d9ef8b","#a6d96a","#66bd63","#1a9850","#006837"]
},Accent: {
3: ["#7fc97f","#beaed4","#fdc086"],
4: ["#7fc97f","#beaed4","#fdc086","#ffff99"],
5: ["#7fc97f","#beaed4","#fdc086","#ffff99","#386cb0"],
6: ["#7fc97f","#beaed4","#fdc086","#ffff99","#386cb0","#f0027f"],
7: ["#7fc97f","#beaed4","#fdc086","#ffff99","#386cb0","#f0027f","#bf5b17"],
8: ["#7fc97f","#beaed4","#fdc086","#ffff99","#386cb0","#f0027f","#bf5b17","#666666"]
},Dark2: {
3: ["#1b9e77","#d95f02","#7570b3"],
4: ["#1b9e77","#d95f02","#7570b3","#e7298a"],
5: ["#1b9e77","#d95f02","#7570b3","#e7298a","#66a61e"],
6: ["#1b9e77","#d95f02","#7570b3","#e7298a","#66a61e","#e6ab02"],
7: ["#1b9e77","#d95f02","#7570b3","#e7298a","#66a61e","#e6ab02","#a6761d"],
8: ["#1b9e77","#d95f02","#7570b3","#e7298a","#66a61e","#e6ab02","#a6761d","#666666"]
},Paired: {
3: ["#a6cee3","#1f78b4","#b2df8a"],
4: ["#a6cee3","#1f78b4","#b2df8a","#33a02c"],
5: ["#a6cee3","#1f78b4","#b2df8a","#33a02c","#fb9a99"],
6: ["#a6cee3","#1f78b4","#b2df8a","#33a02c","#fb9a99","#e31a1c"],
7: ["#a6cee3","#1f78b4","#b2df8a","#33a02c","#fb9a99","#e31a1c","#fdbf6f"],
8: ["#a6cee3","#1f78b4","#b2df8a","#33a02c","#fb9a99","#e31a1c","#fdbf6f","#ff7f00"],
9: ["#a6cee3","#1f78b4","#b2df8a","#33a02c","#fb9a99","#e31a1c","#fdbf6f","#ff7f00","#cab2d6"],
10: ["#a6cee3","#1f78b4","#b2df8a","#33a02c","#fb9a99","#e31a1c","#fdbf6f","#ff7f00","#cab2d6","#6a3d9a"],
11: ["#a6cee3","#1f78b4","#b2df8a","#33a02c","#fb9a99","#e31a1c","#fdbf6f","#ff7f00","#cab2d6","#6a3d9a","#ffff99"],
12: ["#a6cee3","#1f78b4","#b2df8a","#33a02c","#fb9a99","#e31a1c","#fdbf6f","#ff7f00","#cab2d6","#6a3d9a","#ffff99","#b15928"]
},Pastel1: {
3: ["#fbb4ae","#b3cde3","#ccebc5"],
4: ["#fbb4ae","#b3cde3","#ccebc5","#decbe4"],
5: ["#fbb4ae","#b3cde3","#ccebc5","#decbe4","#fed9a6"],
6: ["#fbb4ae","#b3cde3","#ccebc5","#decbe4","#fed9a6","#ffffcc"],
7: ["#fbb4ae","#b3cde3","#ccebc5","#decbe4","#fed9a6","#ffffcc","#e5d8bd"],
8: ["#fbb4ae","#b3cde3","#ccebc5","#decbe4","#fed9a6","#ffffcc","#e5d8bd","#fddaec"],
9: ["#fbb4ae","#b3cde3","#ccebc5","#decbe4","#fed9a6","#ffffcc","#e5d8bd","#fddaec","#f2f2f2"]
},Pastel2: {
3: ["#b3e2cd","#fdcdac","#cbd5e8"],
4: ["#b3e2cd","#fdcdac","#cbd5e8","#f4cae4"],
5: ["#b3e2cd","#fdcdac","#cbd5e8","#f4cae4","#e6f5c9"],
6: ["#b3e2cd","#fdcdac","#cbd5e8","#f4cae4","#e6f5c9","#fff2ae"],
7: ["#b3e2cd","#fdcdac","#cbd5e8","#f4cae4","#e6f5c9","#fff2ae","#f1e2cc"],
8: ["#b3e2cd","#fdcdac","#cbd5e8","#f4cae4","#e6f5c9","#fff2ae","#f1e2cc","#cccccc"]
},Set1: {
3: ["#e41a1c","#377eb8","#4daf4a"],
4: ["#e41a1c","#377eb8","#4daf4a","#984ea3"],
5: ["#e41a1c","#377eb8","#4daf4a","#984ea3","#ff7f00"],
6: ["#e41a1c","#377eb8","#4daf4a","#984ea3","#ff7f00","#ffff33"],
7: ["#e41a1c","#377eb8","#4daf4a","#984ea3","#ff7f00","#ffff33","#a65628"],
8: ["#e41a1c","#377eb8","#4daf4a","#984ea3","#ff7f00","#ffff33","#a65628","#f781bf"],
9: ["#e41a1c","#377eb8","#4daf4a","#984ea3","#ff7f00","#ffff33","#a65628","#f781bf","#999999"]
},Set2: {
3: ["#66c2a5","#fc8d62","#8da0cb"],
4: ["#66c2a5","#fc8d62","#8da0cb","#e78ac3"],
5: ["#66c2a5","#fc8d62","#8da0cb","#e78ac3","#a6d854"],
6: ["#66c2a5","#fc8d62","#8da0cb","#e78ac3","#a6d854","#ffd92f"],
7: ["#66c2a5","#fc8d62","#8da0cb","#e78ac3","#a6d854","#ffd92f","#e5c494"],
8: ["#66c2a5","#fc8d62","#8da0cb","#e78ac3","#a6d854","#ffd92f","#e5c494","#b3b3b3"]
},Set3: {
3: ["#8dd3c7","#ffffb3","#bebada"],
4: ["#8dd3c7","#ffffb3","#bebada","#fb8072"],
5: ["#8dd3c7","#ffffb3","#bebada","#fb8072","#80b1d3"],
6: ["#8dd3c7","#ffffb3","#bebada","#fb8072","#80b1d3","#fdb462"],
7: ["#8dd3c7","#ffffb3","#bebada","#fb8072","#80b1d3","#fdb462","#b3de69"],
8: ["#8dd3c7","#ffffb3","#bebada","#fb8072","#80b1d3","#fdb462","#b3de69","#fccde5"],
9: ["#8dd3c7","#ffffb3","#bebada","#fb8072","#80b1d3","#fdb462","#b3de69","#fccde5","#d9d9d9"],
10: ["#8dd3c7","#ffffb3","#bebada","#fb8072","#80b1d3","#fdb462","#b3de69","#fccde5","#d9d9d9","#bc80bd"],
11: ["#8dd3c7","#ffffb3","#bebada","#fb8072","#80b1d3","#fdb462","#b3de69","#fccde5","#d9d9d9","#bc80bd","#ccebc5"],
12: ["#8dd3c7","#ffffb3","#bebada","#fb8072","#80b1d3","#fdb462","#b3de69","#fccde5","#d9d9d9","#bc80bd","#ccebc5","#ffed6f"]
}};

if (true) {
    !(__WEBPACK_AMD_DEFINE_FACTORY__ = (colorbrewer),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) :
				__WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
} else {}

}();


/***/ }),

/***/ "./node_modules/colorbrewer/index.js":
/*!*******************************************!*\
  !*** ./node_modules/colorbrewer/index.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./colorbrewer.js */ "./node_modules/colorbrewer/colorbrewer.js");


/***/ }),

/***/ "./node_modules/earcut/src/earcut.js":
/*!*******************************************!*\
  !*** ./node_modules/earcut/src/earcut.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = earcut;
module.exports.default = earcut;

function earcut(data, holeIndices, dim) {

    dim = dim || 2;

    var hasHoles = holeIndices && holeIndices.length,
        outerLen = hasHoles ? holeIndices[0] * dim : data.length,
        outerNode = linkedList(data, 0, outerLen, dim, true),
        triangles = [];

    if (!outerNode) return triangles;

    var minX, minY, maxX, maxY, x, y, invSize;

    if (hasHoles) outerNode = eliminateHoles(data, holeIndices, outerNode, dim);

    // if the shape is not too simple, we'll use z-order curve hash later; calculate polygon bbox
    if (data.length > 80 * dim) {
        minX = maxX = data[0];
        minY = maxY = data[1];

        for (var i = dim; i < outerLen; i += dim) {
            x = data[i];
            y = data[i + 1];
            if (x < minX) minX = x;
            if (y < minY) minY = y;
            if (x > maxX) maxX = x;
            if (y > maxY) maxY = y;
        }

        // minX, minY and invSize are later used to transform coords into integers for z-order calculation
        invSize = Math.max(maxX - minX, maxY - minY);
        invSize = invSize !== 0 ? 1 / invSize : 0;
    }

    earcutLinked(outerNode, triangles, dim, minX, minY, invSize);

    return triangles;
}

// create a circular doubly linked list from polygon points in the specified winding order
function linkedList(data, start, end, dim, clockwise) {
    var i, last;

    if (clockwise === (signedArea(data, start, end, dim) > 0)) {
        for (i = start; i < end; i += dim) last = insertNode(i, data[i], data[i + 1], last);
    } else {
        for (i = end - dim; i >= start; i -= dim) last = insertNode(i, data[i], data[i + 1], last);
    }

    if (last && equals(last, last.next)) {
        removeNode(last);
        last = last.next;
    }

    return last;
}

// eliminate colinear or duplicate points
function filterPoints(start, end) {
    if (!start) return start;
    if (!end) end = start;

    var p = start,
        again;
    do {
        again = false;

        if (!p.steiner && (equals(p, p.next) || area(p.prev, p, p.next) === 0)) {
            removeNode(p);
            p = end = p.prev;
            if (p === p.next) break;
            again = true;

        } else {
            p = p.next;
        }
    } while (again || p !== end);

    return end;
}

// main ear slicing loop which triangulates a polygon (given as a linked list)
function earcutLinked(ear, triangles, dim, minX, minY, invSize, pass) {
    if (!ear) return;

    // interlink polygon nodes in z-order
    if (!pass && invSize) indexCurve(ear, minX, minY, invSize);

    var stop = ear,
        prev, next;

    // iterate through ears, slicing them one by one
    while (ear.prev !== ear.next) {
        prev = ear.prev;
        next = ear.next;

        if (invSize ? isEarHashed(ear, minX, minY, invSize) : isEar(ear)) {
            // cut off the triangle
            triangles.push(prev.i / dim);
            triangles.push(ear.i / dim);
            triangles.push(next.i / dim);

            removeNode(ear);

            // skipping the next vertice leads to less sliver triangles
            ear = next.next;
            stop = next.next;

            continue;
        }

        ear = next;

        // if we looped through the whole remaining polygon and can't find any more ears
        if (ear === stop) {
            // try filtering points and slicing again
            if (!pass) {
                earcutLinked(filterPoints(ear), triangles, dim, minX, minY, invSize, 1);

            // if this didn't work, try curing all small self-intersections locally
            } else if (pass === 1) {
                ear = cureLocalIntersections(ear, triangles, dim);
                earcutLinked(ear, triangles, dim, minX, minY, invSize, 2);

            // as a last resort, try splitting the remaining polygon into two
            } else if (pass === 2) {
                splitEarcut(ear, triangles, dim, minX, minY, invSize);
            }

            break;
        }
    }
}

// check whether a polygon node forms a valid ear with adjacent nodes
function isEar(ear) {
    var a = ear.prev,
        b = ear,
        c = ear.next;

    if (area(a, b, c) >= 0) return false; // reflex, can't be an ear

    // now make sure we don't have other points inside the potential ear
    var p = ear.next.next;

    while (p !== ear.prev) {
        if (pointInTriangle(a.x, a.y, b.x, b.y, c.x, c.y, p.x, p.y) &&
            area(p.prev, p, p.next) >= 0) return false;
        p = p.next;
    }

    return true;
}

function isEarHashed(ear, minX, minY, invSize) {
    var a = ear.prev,
        b = ear,
        c = ear.next;

    if (area(a, b, c) >= 0) return false; // reflex, can't be an ear

    // triangle bbox; min & max are calculated like this for speed
    var minTX = a.x < b.x ? (a.x < c.x ? a.x : c.x) : (b.x < c.x ? b.x : c.x),
        minTY = a.y < b.y ? (a.y < c.y ? a.y : c.y) : (b.y < c.y ? b.y : c.y),
        maxTX = a.x > b.x ? (a.x > c.x ? a.x : c.x) : (b.x > c.x ? b.x : c.x),
        maxTY = a.y > b.y ? (a.y > c.y ? a.y : c.y) : (b.y > c.y ? b.y : c.y);

    // z-order range for the current triangle bbox;
    var minZ = zOrder(minTX, minTY, minX, minY, invSize),
        maxZ = zOrder(maxTX, maxTY, minX, minY, invSize);

    var p = ear.prevZ,
        n = ear.nextZ;

    // look for points inside the triangle in both directions
    while (p && p.z >= minZ && n && n.z <= maxZ) {
        if (p !== ear.prev && p !== ear.next &&
            pointInTriangle(a.x, a.y, b.x, b.y, c.x, c.y, p.x, p.y) &&
            area(p.prev, p, p.next) >= 0) return false;
        p = p.prevZ;

        if (n !== ear.prev && n !== ear.next &&
            pointInTriangle(a.x, a.y, b.x, b.y, c.x, c.y, n.x, n.y) &&
            area(n.prev, n, n.next) >= 0) return false;
        n = n.nextZ;
    }

    // look for remaining points in decreasing z-order
    while (p && p.z >= minZ) {
        if (p !== ear.prev && p !== ear.next &&
            pointInTriangle(a.x, a.y, b.x, b.y, c.x, c.y, p.x, p.y) &&
            area(p.prev, p, p.next) >= 0) return false;
        p = p.prevZ;
    }

    // look for remaining points in increasing z-order
    while (n && n.z <= maxZ) {
        if (n !== ear.prev && n !== ear.next &&
            pointInTriangle(a.x, a.y, b.x, b.y, c.x, c.y, n.x, n.y) &&
            area(n.prev, n, n.next) >= 0) return false;
        n = n.nextZ;
    }

    return true;
}

// go through all polygon nodes and cure small local self-intersections
function cureLocalIntersections(start, triangles, dim) {
    var p = start;
    do {
        var a = p.prev,
            b = p.next.next;

        if (!equals(a, b) && intersects(a, p, p.next, b) && locallyInside(a, b) && locallyInside(b, a)) {

            triangles.push(a.i / dim);
            triangles.push(p.i / dim);
            triangles.push(b.i / dim);

            // remove two nodes involved
            removeNode(p);
            removeNode(p.next);

            p = start = b;
        }
        p = p.next;
    } while (p !== start);

    return p;
}

// try splitting polygon into two and triangulate them independently
function splitEarcut(start, triangles, dim, minX, minY, invSize) {
    // look for a valid diagonal that divides the polygon into two
    var a = start;
    do {
        var b = a.next.next;
        while (b !== a.prev) {
            if (a.i !== b.i && isValidDiagonal(a, b)) {
                // split the polygon in two by the diagonal
                var c = splitPolygon(a, b);

                // filter colinear points around the cuts
                a = filterPoints(a, a.next);
                c = filterPoints(c, c.next);

                // run earcut on each half
                earcutLinked(a, triangles, dim, minX, minY, invSize);
                earcutLinked(c, triangles, dim, minX, minY, invSize);
                return;
            }
            b = b.next;
        }
        a = a.next;
    } while (a !== start);
}

// link every hole into the outer loop, producing a single-ring polygon without holes
function eliminateHoles(data, holeIndices, outerNode, dim) {
    var queue = [],
        i, len, start, end, list;

    for (i = 0, len = holeIndices.length; i < len; i++) {
        start = holeIndices[i] * dim;
        end = i < len - 1 ? holeIndices[i + 1] * dim : data.length;
        list = linkedList(data, start, end, dim, false);
        if (list === list.next) list.steiner = true;
        queue.push(getLeftmost(list));
    }

    queue.sort(compareX);

    // process holes from left to right
    for (i = 0; i < queue.length; i++) {
        eliminateHole(queue[i], outerNode);
        outerNode = filterPoints(outerNode, outerNode.next);
    }

    return outerNode;
}

function compareX(a, b) {
    return a.x - b.x;
}

// find a bridge between vertices that connects hole with an outer ring and and link it
function eliminateHole(hole, outerNode) {
    outerNode = findHoleBridge(hole, outerNode);
    if (outerNode) {
        var b = splitPolygon(outerNode, hole);
        filterPoints(b, b.next);
    }
}

// David Eberly's algorithm for finding a bridge between hole and outer polygon
function findHoleBridge(hole, outerNode) {
    var p = outerNode,
        hx = hole.x,
        hy = hole.y,
        qx = -Infinity,
        m;

    // find a segment intersected by a ray from the hole's leftmost point to the left;
    // segment's endpoint with lesser x will be potential connection point
    do {
        if (hy <= p.y && hy >= p.next.y && p.next.y !== p.y) {
            var x = p.x + (hy - p.y) * (p.next.x - p.x) / (p.next.y - p.y);
            if (x <= hx && x > qx) {
                qx = x;
                if (x === hx) {
                    if (hy === p.y) return p;
                    if (hy === p.next.y) return p.next;
                }
                m = p.x < p.next.x ? p : p.next;
            }
        }
        p = p.next;
    } while (p !== outerNode);

    if (!m) return null;

    if (hx === qx) return m.prev; // hole touches outer segment; pick lower endpoint

    // look for points inside the triangle of hole point, segment intersection and endpoint;
    // if there are no points found, we have a valid connection;
    // otherwise choose the point of the minimum angle with the ray as connection point

    var stop = m,
        mx = m.x,
        my = m.y,
        tanMin = Infinity,
        tan;

    p = m.next;

    while (p !== stop) {
        if (hx >= p.x && p.x >= mx && hx !== p.x &&
                pointInTriangle(hy < my ? hx : qx, hy, mx, my, hy < my ? qx : hx, hy, p.x, p.y)) {

            tan = Math.abs(hy - p.y) / (hx - p.x); // tangential

            if ((tan < tanMin || (tan === tanMin && p.x > m.x)) && locallyInside(p, hole)) {
                m = p;
                tanMin = tan;
            }
        }

        p = p.next;
    }

    return m;
}

// interlink polygon nodes in z-order
function indexCurve(start, minX, minY, invSize) {
    var p = start;
    do {
        if (p.z === null) p.z = zOrder(p.x, p.y, minX, minY, invSize);
        p.prevZ = p.prev;
        p.nextZ = p.next;
        p = p.next;
    } while (p !== start);

    p.prevZ.nextZ = null;
    p.prevZ = null;

    sortLinked(p);
}

// Simon Tatham's linked list merge sort algorithm
// http://www.chiark.greenend.org.uk/~sgtatham/algorithms/listsort.html
function sortLinked(list) {
    var i, p, q, e, tail, numMerges, pSize, qSize,
        inSize = 1;

    do {
        p = list;
        list = null;
        tail = null;
        numMerges = 0;

        while (p) {
            numMerges++;
            q = p;
            pSize = 0;
            for (i = 0; i < inSize; i++) {
                pSize++;
                q = q.nextZ;
                if (!q) break;
            }
            qSize = inSize;

            while (pSize > 0 || (qSize > 0 && q)) {

                if (pSize !== 0 && (qSize === 0 || !q || p.z <= q.z)) {
                    e = p;
                    p = p.nextZ;
                    pSize--;
                } else {
                    e = q;
                    q = q.nextZ;
                    qSize--;
                }

                if (tail) tail.nextZ = e;
                else list = e;

                e.prevZ = tail;
                tail = e;
            }

            p = q;
        }

        tail.nextZ = null;
        inSize *= 2;

    } while (numMerges > 1);

    return list;
}

// z-order of a point given coords and inverse of the longer side of data bbox
function zOrder(x, y, minX, minY, invSize) {
    // coords are transformed into non-negative 15-bit integer range
    x = 32767 * (x - minX) * invSize;
    y = 32767 * (y - minY) * invSize;

    x = (x | (x << 8)) & 0x00FF00FF;
    x = (x | (x << 4)) & 0x0F0F0F0F;
    x = (x | (x << 2)) & 0x33333333;
    x = (x | (x << 1)) & 0x55555555;

    y = (y | (y << 8)) & 0x00FF00FF;
    y = (y | (y << 4)) & 0x0F0F0F0F;
    y = (y | (y << 2)) & 0x33333333;
    y = (y | (y << 1)) & 0x55555555;

    return x | (y << 1);
}

// find the leftmost node of a polygon ring
function getLeftmost(start) {
    var p = start,
        leftmost = start;
    do {
        if (p.x < leftmost.x) leftmost = p;
        p = p.next;
    } while (p !== start);

    return leftmost;
}

// check if a point lies within a convex triangle
function pointInTriangle(ax, ay, bx, by, cx, cy, px, py) {
    return (cx - px) * (ay - py) - (ax - px) * (cy - py) >= 0 &&
           (ax - px) * (by - py) - (bx - px) * (ay - py) >= 0 &&
           (bx - px) * (cy - py) - (cx - px) * (by - py) >= 0;
}

// check if a diagonal between two polygon nodes is valid (lies in polygon interior)
function isValidDiagonal(a, b) {
    return a.next.i !== b.i && a.prev.i !== b.i && !intersectsPolygon(a, b) &&
           locallyInside(a, b) && locallyInside(b, a) && middleInside(a, b);
}

// signed area of a triangle
function area(p, q, r) {
    return (q.y - p.y) * (r.x - q.x) - (q.x - p.x) * (r.y - q.y);
}

// check if two points are equal
function equals(p1, p2) {
    return p1.x === p2.x && p1.y === p2.y;
}

// check if two segments intersect
function intersects(p1, q1, p2, q2) {
    if ((equals(p1, q1) && equals(p2, q2)) ||
        (equals(p1, q2) && equals(p2, q1))) return true;
    return area(p1, q1, p2) > 0 !== area(p1, q1, q2) > 0 &&
           area(p2, q2, p1) > 0 !== area(p2, q2, q1) > 0;
}

// check if a polygon diagonal intersects any polygon segments
function intersectsPolygon(a, b) {
    var p = a;
    do {
        if (p.i !== a.i && p.next.i !== a.i && p.i !== b.i && p.next.i !== b.i &&
                intersects(p, p.next, a, b)) return true;
        p = p.next;
    } while (p !== a);

    return false;
}

// check if a polygon diagonal is locally inside the polygon
function locallyInside(a, b) {
    return area(a.prev, a, a.next) < 0 ?
        area(a, b, a.next) >= 0 && area(a, a.prev, b) >= 0 :
        area(a, b, a.prev) < 0 || area(a, a.next, b) < 0;
}

// check if the middle point of a polygon diagonal is inside the polygon
function middleInside(a, b) {
    var p = a,
        inside = false,
        px = (a.x + b.x) / 2,
        py = (a.y + b.y) / 2;
    do {
        if (((p.y > py) !== (p.next.y > py)) && p.next.y !== p.y &&
                (px < (p.next.x - p.x) * (py - p.y) / (p.next.y - p.y) + p.x))
            inside = !inside;
        p = p.next;
    } while (p !== a);

    return inside;
}

// link two polygon vertices with a bridge; if the vertices belong to the same ring, it splits polygon into two;
// if one belongs to the outer ring and another to a hole, it merges it into a single ring
function splitPolygon(a, b) {
    var a2 = new Node(a.i, a.x, a.y),
        b2 = new Node(b.i, b.x, b.y),
        an = a.next,
        bp = b.prev;

    a.next = b;
    b.prev = a;

    a2.next = an;
    an.prev = a2;

    b2.next = a2;
    a2.prev = b2;

    bp.next = b2;
    b2.prev = bp;

    return b2;
}

// create a node and optionally link it with previous one (in a circular doubly linked list)
function insertNode(i, x, y, last) {
    var p = new Node(i, x, y);

    if (!last) {
        p.prev = p;
        p.next = p;

    } else {
        p.next = last.next;
        p.prev = last;
        last.next.prev = p;
        last.next = p;
    }
    return p;
}

function removeNode(p) {
    p.next.prev = p.prev;
    p.prev.next = p.next;

    if (p.prevZ) p.prevZ.nextZ = p.nextZ;
    if (p.nextZ) p.nextZ.prevZ = p.prevZ;
}

function Node(i, x, y) {
    // vertice index in coordinates array
    this.i = i;

    // vertex coordinates
    this.x = x;
    this.y = y;

    // previous and next vertice nodes in a polygon ring
    this.prev = null;
    this.next = null;

    // z-order curve value
    this.z = null;

    // previous and next nodes in z-order
    this.prevZ = null;
    this.nextZ = null;

    // indicates whether this is a steiner point
    this.steiner = false;
}

// return a percentage difference between the polygon area and its triangulation area;
// used to verify correctness of triangulation
earcut.deviation = function (data, holeIndices, dim, triangles) {
    var hasHoles = holeIndices && holeIndices.length;
    var outerLen = hasHoles ? holeIndices[0] * dim : data.length;

    var polygonArea = Math.abs(signedArea(data, 0, outerLen, dim));
    if (hasHoles) {
        for (var i = 0, len = holeIndices.length; i < len; i++) {
            var start = holeIndices[i] * dim;
            var end = i < len - 1 ? holeIndices[i + 1] * dim : data.length;
            polygonArea -= Math.abs(signedArea(data, start, end, dim));
        }
    }

    var trianglesArea = 0;
    for (i = 0; i < triangles.length; i += 3) {
        var a = triangles[i] * dim;
        var b = triangles[i + 1] * dim;
        var c = triangles[i + 2] * dim;
        trianglesArea += Math.abs(
            (data[a] - data[c]) * (data[b + 1] - data[a + 1]) -
            (data[a] - data[b]) * (data[c + 1] - data[a + 1]));
    }

    return polygonArea === 0 && trianglesArea === 0 ? 0 :
        Math.abs((trianglesArea - polygonArea) / polygonArea);
};

function signedArea(data, start, end, dim) {
    var sum = 0;
    for (var i = start, j = end - dim; i < end; i += dim) {
        sum += (data[j] - data[i]) * (data[i + 1] + data[j + 1]);
        j = i;
    }
    return sum;
}

// turn a polygon in a multi-dimensional array form (e.g. as in GeoJSON) into a form Earcut accepts
earcut.flatten = function (data) {
    var dim = data[0][0].length,
        result = {vertices: [], holes: [], dimensions: dim},
        holeIndex = 0;

    for (var i = 0; i < data.length; i++) {
        for (var j = 0; j < data[i].length; j++) {
            for (var d = 0; d < dim; d++) result.vertices.push(data[i][j][d]);
        }
        if (i > 0) {
            holeIndex += data[i - 1].length;
            result.holes.push(holeIndex);
        }
    }
    return result;
};


/***/ }),

/***/ "./node_modules/inherits/inherits_browser.js":
/*!***************************************************!*\
  !*** ./node_modules/inherits/inherits_browser.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

if (typeof Object.create === 'function') {
  // implementation from standard node.js 'util' module
  module.exports = function inherits(ctor, superCtor) {
    ctor.super_ = superCtor
    ctor.prototype = Object.create(superCtor.prototype, {
      constructor: {
        value: ctor,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
  };
} else {
  // old school shim for old browsers
  module.exports = function inherits(ctor, superCtor) {
    ctor.super_ = superCtor
    var TempCtor = function () {}
    TempCtor.prototype = superCtor.prototype
    ctor.prototype = new TempCtor()
    ctor.prototype.constructor = ctor
  }
}


/***/ }),

/***/ "./node_modules/jsep/build/jsep.js":
/*!*****************************************!*\
  !*** ./node_modules/jsep/build/jsep.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

//     JavaScript Expression Parser (JSEP) 0.3.4
//     JSEP may be freely distributed under the MIT License
//     http://jsep.from.so/

/*global module: true, exports: true, console: true */
(function (root) {
	'use strict';
	// Node Types
	// ----------

	// This is the full set of types that any JSEP node can be.
	// Store them here to save space when minified
	var COMPOUND = 'Compound',
		IDENTIFIER = 'Identifier',
		MEMBER_EXP = 'MemberExpression',
		LITERAL = 'Literal',
		THIS_EXP = 'ThisExpression',
		CALL_EXP = 'CallExpression',
		UNARY_EXP = 'UnaryExpression',
		BINARY_EXP = 'BinaryExpression',
		LOGICAL_EXP = 'LogicalExpression',
		CONDITIONAL_EXP = 'ConditionalExpression',
		ARRAY_EXP = 'ArrayExpression',

		PERIOD_CODE = 46, // '.'
		COMMA_CODE  = 44, // ','
		SQUOTE_CODE = 39, // single quote
		DQUOTE_CODE = 34, // double quotes
		OPAREN_CODE = 40, // (
		CPAREN_CODE = 41, // )
		OBRACK_CODE = 91, // [
		CBRACK_CODE = 93, // ]
		QUMARK_CODE = 63, // ?
		SEMCOL_CODE = 59, // ;
		COLON_CODE  = 58, // :

		throwError = function(message, index) {
			var error = new Error(message + ' at character ' + index);
			error.index = index;
			error.description = message;
			throw error;
		},

	// Operations
	// ----------

	// Set `t` to `true` to save space (when minified, not gzipped)
		t = true,
	// Use a quickly-accessible map to store all of the unary operators
	// Values are set to `true` (it really doesn't matter)
		unary_ops = {'-': t, '!': t, '~': t, '+': t},
	// Also use a map for the binary operations but set their values to their
	// binary precedence for quick reference:
	// see [Order of operations](http://en.wikipedia.org/wiki/Order_of_operations#Programming_language)
		binary_ops = {
			'||': 1, '&&': 2, '|': 3,  '^': 4,  '&': 5,
			'==': 6, '!=': 6, '===': 6, '!==': 6,
			'<': 7,  '>': 7,  '<=': 7,  '>=': 7,
			'<<':8,  '>>': 8, '>>>': 8,
			'+': 9, '-': 9,
			'*': 10, '/': 10, '%': 10
		},
	// Additional valid identifier chars, apart from a-z, A-Z and 0-9 (except on the starting char)
		additional_identifier_chars = {'$': t, '_': t},
	// Get return the longest key length of any object
		getMaxKeyLen = function(obj) {
			var max_len = 0, len;
			for(var key in obj) {
				if((len = key.length) > max_len && obj.hasOwnProperty(key)) {
					max_len = len;
				}
			}
			return max_len;
		},
		max_unop_len = getMaxKeyLen(unary_ops),
		max_binop_len = getMaxKeyLen(binary_ops),
	// Literals
	// ----------
	// Store the values to return for the various literals we may encounter
		literals = {
			'true': true,
			'false': false,
			'null': null
		},
	// Except for `this`, which is special. This could be changed to something like `'self'` as well
		this_str = 'this',
	// Returns the precedence of a binary operator or `0` if it isn't a binary operator
		binaryPrecedence = function(op_val) {
			return binary_ops[op_val] || 0;
		},
	// Utility function (gets called from multiple places)
	// Also note that `a && b` and `a || b` are *logical* expressions, not binary expressions
		createBinaryExpression = function (operator, left, right) {
			var type = (operator === '||' || operator === '&&') ? LOGICAL_EXP : BINARY_EXP;
			return {
				type: type,
				operator: operator,
				left: left,
				right: right
			};
		},
		// `ch` is a character code in the next three functions
		isDecimalDigit = function(ch) {
			return (ch >= 48 && ch <= 57); // 0...9
		},
		isIdentifierStart = function(ch) {
			return  (ch >= 65 && ch <= 90) || // A...Z
					(ch >= 97 && ch <= 122) || // a...z
					(ch >= 128 && !binary_ops[String.fromCharCode(ch)]) || // any non-ASCII that is not an operator
					(additional_identifier_chars.hasOwnProperty(String.fromCharCode(ch))); // additional characters
		},
		isIdentifierPart = function(ch) {
			return 	(ch >= 65 && ch <= 90) || // A...Z
					(ch >= 97 && ch <= 122) || // a...z
					(ch >= 48 && ch <= 57) || // 0...9
					(ch >= 128 && !binary_ops[String.fromCharCode(ch)])|| // any non-ASCII that is not an operator
					(additional_identifier_chars.hasOwnProperty(String.fromCharCode(ch))); // additional characters
		},

		// Parsing
		// -------
		// `expr` is a string with the passed in expression
		jsep = function(expr) {
			// `index` stores the character number we are currently at while `length` is a constant
			// All of the gobbles below will modify `index` as we move along
			var index = 0,
				charAtFunc = expr.charAt,
				charCodeAtFunc = expr.charCodeAt,
				exprI = function(i) { return charAtFunc.call(expr, i); },
				exprICode = function(i) { return charCodeAtFunc.call(expr, i); },
				length = expr.length,

				// Push `index` up to the next non-space character
				gobbleSpaces = function() {
					var ch = exprICode(index);
					// space or tab
					while(ch === 32 || ch === 9 || ch === 10 || ch === 13) {
						ch = exprICode(++index);
					}
				},

				// The main parsing function. Much of this code is dedicated to ternary expressions
				gobbleExpression = function() {
					var test = gobbleBinaryExpression(),
						consequent, alternate;
					gobbleSpaces();
					if(exprICode(index) === QUMARK_CODE) {
						// Ternary expression: test ? consequent : alternate
						index++;
						consequent = gobbleExpression();
						if(!consequent) {
							throwError('Expected expression', index);
						}
						gobbleSpaces();
						if(exprICode(index) === COLON_CODE) {
							index++;
							alternate = gobbleExpression();
							if(!alternate) {
								throwError('Expected expression', index);
							}
							return {
								type: CONDITIONAL_EXP,
								test: test,
								consequent: consequent,
								alternate: alternate
							};
						} else {
							throwError('Expected :', index);
						}
					} else {
						return test;
					}
				},

				// Search for the operation portion of the string (e.g. `+`, `===`)
				// Start by taking the longest possible binary operations (3 characters: `===`, `!==`, `>>>`)
				// and move down from 3 to 2 to 1 character until a matching binary operation is found
				// then, return that binary operation
				gobbleBinaryOp = function() {
					gobbleSpaces();
					var biop, to_check = expr.substr(index, max_binop_len), tc_len = to_check.length;
					while(tc_len > 0) {
						// Don't accept a binary op when it is an identifier.
						// Binary ops that start with a identifier-valid character must be followed
						// by a non identifier-part valid character
						if(binary_ops.hasOwnProperty(to_check) && (
							!isIdentifierStart(exprICode(index)) ||
							(index+to_check.length< expr.length && !isIdentifierPart(exprICode(index+to_check.length)))
						)) {
							index += tc_len;
							return to_check;
						}
						to_check = to_check.substr(0, --tc_len);
					}
					return false;
				},

				// This function is responsible for gobbling an individual expression,
				// e.g. `1`, `1+2`, `a+(b*2)-Math.sqrt(2)`
				gobbleBinaryExpression = function() {
					var ch_i, node, biop, prec, stack, biop_info, left, right, i;

					// First, try to get the leftmost thing
					// Then, check to see if there's a binary operator operating on that leftmost thing
					left = gobbleToken();
					biop = gobbleBinaryOp();

					// If there wasn't a binary operator, just return the leftmost node
					if(!biop) {
						return left;
					}

					// Otherwise, we need to start a stack to properly place the binary operations in their
					// precedence structure
					biop_info = { value: biop, prec: binaryPrecedence(biop)};

					right = gobbleToken();
					if(!right) {
						throwError("Expected expression after " + biop, index);
					}
					stack = [left, biop_info, right];

					// Properly deal with precedence using [recursive descent](http://www.engr.mun.ca/~theo/Misc/exp_parsing.htm)
					while((biop = gobbleBinaryOp())) {
						prec = binaryPrecedence(biop);

						if(prec === 0) {
							break;
						}
						biop_info = { value: biop, prec: prec };

						// Reduce: make a binary expression from the three topmost entries.
						while ((stack.length > 2) && (prec <= stack[stack.length - 2].prec)) {
							right = stack.pop();
							biop = stack.pop().value;
							left = stack.pop();
							node = createBinaryExpression(biop, left, right);
							stack.push(node);
						}

						node = gobbleToken();
						if(!node) {
							throwError("Expected expression after " + biop, index);
						}
						stack.push(biop_info, node);
					}

					i = stack.length - 1;
					node = stack[i];
					while(i > 1) {
						node = createBinaryExpression(stack[i - 1].value, stack[i - 2], node);
						i -= 2;
					}
					return node;
				},

				// An individual part of a binary expression:
				// e.g. `foo.bar(baz)`, `1`, `"abc"`, `(a % 2)` (because it's in parenthesis)
				gobbleToken = function() {
					var ch, to_check, tc_len;

					gobbleSpaces();
					ch = exprICode(index);

					if(isDecimalDigit(ch) || ch === PERIOD_CODE) {
						// Char code 46 is a dot `.` which can start off a numeric literal
						return gobbleNumericLiteral();
					} else if(ch === SQUOTE_CODE || ch === DQUOTE_CODE) {
						// Single or double quotes
						return gobbleStringLiteral();
					} else if (ch === OBRACK_CODE) {
						return gobbleArray();
					} else {
						to_check = expr.substr(index, max_unop_len);
						tc_len = to_check.length;
						while(tc_len > 0) {
						// Don't accept an unary op when it is an identifier.
						// Unary ops that start with a identifier-valid character must be followed
						// by a non identifier-part valid character
							if(unary_ops.hasOwnProperty(to_check) && (
								!isIdentifierStart(exprICode(index)) ||
								(index+to_check.length < expr.length && !isIdentifierPart(exprICode(index+to_check.length)))
							)) {
								index += tc_len;
								return {
									type: UNARY_EXP,
									operator: to_check,
									argument: gobbleToken(),
									prefix: true
								};
							}
							to_check = to_check.substr(0, --tc_len);
						}

						if (isIdentifierStart(ch) || ch === OPAREN_CODE) { // open parenthesis
							// `foo`, `bar.baz`
							return gobbleVariable();
						}
					}

					return false;
				},
				// Parse simple numeric literals: `12`, `3.4`, `.5`. Do this by using a string to
				// keep track of everything in the numeric literal and then calling `parseFloat` on that string
				gobbleNumericLiteral = function() {
					var number = '', ch, chCode;
					while(isDecimalDigit(exprICode(index))) {
						number += exprI(index++);
					}

					if(exprICode(index) === PERIOD_CODE) { // can start with a decimal marker
						number += exprI(index++);

						while(isDecimalDigit(exprICode(index))) {
							number += exprI(index++);
						}
					}

					ch = exprI(index);
					if(ch === 'e' || ch === 'E') { // exponent marker
						number += exprI(index++);
						ch = exprI(index);
						if(ch === '+' || ch === '-') { // exponent sign
							number += exprI(index++);
						}
						while(isDecimalDigit(exprICode(index))) { //exponent itself
							number += exprI(index++);
						}
						if(!isDecimalDigit(exprICode(index-1)) ) {
							throwError('Expected exponent (' + number + exprI(index) + ')', index);
						}
					}


					chCode = exprICode(index);
					// Check to make sure this isn't a variable name that start with a number (123abc)
					if(isIdentifierStart(chCode)) {
						throwError('Variable names cannot start with a number (' +
									number + exprI(index) + ')', index);
					} else if(chCode === PERIOD_CODE) {
						throwError('Unexpected period', index);
					}

					return {
						type: LITERAL,
						value: parseFloat(number),
						raw: number
					};
				},

				// Parses a string literal, staring with single or double quotes with basic support for escape codes
				// e.g. `"hello world"`, `'this is\nJSEP'`
				gobbleStringLiteral = function() {
					var str = '', quote = exprI(index++), closed = false, ch;

					while(index < length) {
						ch = exprI(index++);
						if(ch === quote) {
							closed = true;
							break;
						} else if(ch === '\\') {
							// Check for all of the common escape codes
							ch = exprI(index++);
							switch(ch) {
								case 'n': str += '\n'; break;
								case 'r': str += '\r'; break;
								case 't': str += '\t'; break;
								case 'b': str += '\b'; break;
								case 'f': str += '\f'; break;
								case 'v': str += '\x0B'; break;
								default : str += ch;
							}
						} else {
							str += ch;
						}
					}

					if(!closed) {
						throwError('Unclosed quote after "'+str+'"', index);
					}

					return {
						type: LITERAL,
						value: str,
						raw: quote + str + quote
					};
				},

				// Gobbles only identifiers
				// e.g.: `foo`, `_value`, `$x1`
				// Also, this function checks if that identifier is a literal:
				// (e.g. `true`, `false`, `null`) or `this`
				gobbleIdentifier = function() {
					var ch = exprICode(index), start = index, identifier;

					if(isIdentifierStart(ch)) {
						index++;
					} else {
						throwError('Unexpected ' + exprI(index), index);
					}

					while(index < length) {
						ch = exprICode(index);
						if(isIdentifierPart(ch)) {
							index++;
						} else {
							break;
						}
					}
					identifier = expr.slice(start, index);

					if(literals.hasOwnProperty(identifier)) {
						return {
							type: LITERAL,
							value: literals[identifier],
							raw: identifier
						};
					} else if(identifier === this_str) {
						return { type: THIS_EXP };
					} else {
						return {
							type: IDENTIFIER,
							name: identifier
						};
					}
				},

				// Gobbles a list of arguments within the context of a function call
				// or array literal. This function also assumes that the opening character
				// `(` or `[` has already been gobbled, and gobbles expressions and commas
				// until the terminator character `)` or `]` is encountered.
				// e.g. `foo(bar, baz)`, `my_func()`, or `[bar, baz]`
				gobbleArguments = function(termination) {
					var ch_i, args = [], node, closed = false;
					while(index < length) {
						gobbleSpaces();
						ch_i = exprICode(index);
						if(ch_i === termination) { // done parsing
							closed = true;
							index++;
							break;
						} else if (ch_i === COMMA_CODE) { // between expressions
							index++;
						} else {
							node = gobbleExpression();
							if(!node || node.type === COMPOUND) {
								throwError('Expected comma', index);
							}
							args.push(node);
						}
					}
					if (!closed) {
						throwError('Expected ' + String.fromCharCode(termination), index);
					}
					return args;
				},

				// Gobble a non-literal variable name. This variable name may include properties
				// e.g. `foo`, `bar.baz`, `foo['bar'].baz`
				// It also gobbles function calls:
				// e.g. `Math.acos(obj.angle)`
				gobbleVariable = function() {
					var ch_i, node;
					ch_i = exprICode(index);

					if(ch_i === OPAREN_CODE) {
						node = gobbleGroup();
					} else {
						node = gobbleIdentifier();
					}
					gobbleSpaces();
					ch_i = exprICode(index);
					while(ch_i === PERIOD_CODE || ch_i === OBRACK_CODE || ch_i === OPAREN_CODE) {
						index++;
						if(ch_i === PERIOD_CODE) {
							gobbleSpaces();
							node = {
								type: MEMBER_EXP,
								computed: false,
								object: node,
								property: gobbleIdentifier()
							};
						} else if(ch_i === OBRACK_CODE) {
							node = {
								type: MEMBER_EXP,
								computed: true,
								object: node,
								property: gobbleExpression()
							};
							gobbleSpaces();
							ch_i = exprICode(index);
							if(ch_i !== CBRACK_CODE) {
								throwError('Unclosed [', index);
							}
							index++;
						} else if(ch_i === OPAREN_CODE) {
							// A function call is being made; gobble all the arguments
							node = {
								type: CALL_EXP,
								'arguments': gobbleArguments(CPAREN_CODE),
								callee: node
							};
						}
						gobbleSpaces();
						ch_i = exprICode(index);
					}
					return node;
				},

				// Responsible for parsing a group of things within parentheses `()`
				// This function assumes that it needs to gobble the opening parenthesis
				// and then tries to gobble everything within that parenthesis, assuming
				// that the next thing it should see is the close parenthesis. If not,
				// then the expression probably doesn't have a `)`
				gobbleGroup = function() {
					index++;
					var node = gobbleExpression();
					gobbleSpaces();
					if(exprICode(index) === CPAREN_CODE) {
						index++;
						return node;
					} else {
						throwError('Unclosed (', index);
					}
				},

				// Responsible for parsing Array literals `[1, 2, 3]`
				// This function assumes that it needs to gobble the opening bracket
				// and then tries to gobble the expressions as arguments.
				gobbleArray = function() {
					index++;
					return {
						type: ARRAY_EXP,
						elements: gobbleArguments(CBRACK_CODE)
					};
				},

				nodes = [], ch_i, node;

			while(index < length) {
				ch_i = exprICode(index);

				// Expressions can be separated by semicolons, commas, or just inferred without any
				// separators
				if(ch_i === SEMCOL_CODE || ch_i === COMMA_CODE) {
					index++; // ignore separators
				} else {
					// Try to gobble each expression individually
					if((node = gobbleExpression())) {
						nodes.push(node);
					// If we weren't able to find a binary expression and are out of room, then
					// the expression passed in probably has too much
					} else if(index < length) {
						throwError('Unexpected "' + exprI(index) + '"', index);
					}
				}
			}

			// If there's only one expression just try returning the expression
			if(nodes.length === 1) {
				return nodes[0];
			} else {
				return {
					type: COMPOUND,
					body: nodes
				};
			}
		};

	// To be filled in by the template
	jsep.version = '0.3.4';
	jsep.toString = function() { return 'JavaScript Expression Parser (JSEP) v' + jsep.version; };

	/**
	 * @method jsep.addUnaryOp
	 * @param {string} op_name The name of the unary op to add
	 * @return jsep
	 */
	jsep.addUnaryOp = function(op_name) {
		max_unop_len = Math.max(op_name.length, max_unop_len);
		unary_ops[op_name] = t; return this;
	};

	/**
	 * @method jsep.addBinaryOp
	 * @param {string} op_name The name of the binary op to add
	 * @param {number} precedence The precedence of the binary op (can be a float)
	 * @return jsep
	 */
	jsep.addBinaryOp = function(op_name, precedence) {
		max_binop_len = Math.max(op_name.length, max_binop_len);
		binary_ops[op_name] = precedence;
		return this;
	};

	/**
	 * @method jsep.addIdentifierChar
	 * @param {string} char The additional character to treat as a valid part of an identifier
	 * @return jsep
	 */
	jsep.addIdentifierChar = function(char) {
		additional_identifier_chars[char] = t; return this;
	};

	/**
	 * @method jsep.addLiteral
	 * @param {string} literal_name The name of the literal to add
	 * @param {*} literal_value The value of the literal
	 * @return jsep
	 */
	jsep.addLiteral = function(literal_name, literal_value) {
		literals[literal_name] = literal_value;
		return this;
	};

	/**
	 * @method jsep.removeUnaryOp
	 * @param {string} op_name The name of the unary op to remove
	 * @return jsep
	 */
	jsep.removeUnaryOp = function(op_name) {
		delete unary_ops[op_name];
		if(op_name.length === max_unop_len) {
			max_unop_len = getMaxKeyLen(unary_ops);
		}
		return this;
	};

	/**
	 * @method jsep.removeAllUnaryOps
	 * @return jsep
	 */
	jsep.removeAllUnaryOps = function() {
		unary_ops = {};
		max_unop_len = 0;

		return this;
	};

	/**
	 * @method jsep.removeIdentifierChar
	 * @param {string} char The additional character to stop treating as a valid part of an identifier
	 * @return jsep
	 */
	jsep.removeIdentifierChar = function(char) {
		delete additional_identifier_chars[char];
		return this;
	};


	/**
	 * @method jsep.removeBinaryOp
	 * @param {string} op_name The name of the binary op to remove
	 * @return jsep
	 */
	jsep.removeBinaryOp = function(op_name) {
		delete binary_ops[op_name];
		if(op_name.length === max_binop_len) {
			max_binop_len = getMaxKeyLen(binary_ops);
		}
		return this;
	};

	/**
	 * @method jsep.removeAllBinaryOps
	 * @return jsep
	 */
	jsep.removeAllBinaryOps = function() {
		binary_ops = {};
		max_binop_len = 0;

		return this;
	};

	/**
	 * @method jsep.removeLiteral
	 * @param {string} literal_name The name of the literal to remove
	 * @return jsep
	 */
	jsep.removeLiteral = function(literal_name) {
		delete literals[literal_name];
		return this;
	};

	/**
	 * @method jsep.removeAllLiterals
	 * @return jsep
	 */
	jsep.removeAllLiterals = function() {
		literals = {};

		return this;
	};

	// In desktop environments, have a way to restore the old value for `jsep`
	if (false) { var old_jsep; } else {
		// In Node.JS environments
		if (typeof module !== 'undefined' && module.exports) {
			exports = module.exports = jsep;
		} else {
			exports.parse = jsep;
		}
	}
}(this));


/***/ }),

/***/ "./node_modules/lru-cache/index.js":
/*!*****************************************!*\
  !*** ./node_modules/lru-cache/index.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = LRUCache

// This will be a proper iterable 'Map' in engines that support it,
// or a fakey-fake PseudoMap in older versions.
var Map = __webpack_require__(/*! pseudomap */ "./node_modules/pseudomap/map.js")
var util = __webpack_require__(/*! util */ "./node_modules/util/util.js")

// A linked list to keep track of recently-used-ness
var Yallist = __webpack_require__(/*! yallist */ "./node_modules/lru-cache/node_modules/yallist/yallist.js")

// use symbols if possible, otherwise just _props
var hasSymbol = typeof Symbol === 'function'
var makeSymbol
if (hasSymbol) {
  makeSymbol = function (key) {
    return Symbol(key)
  }
} else {
  makeSymbol = function (key) {
    return '_' + key
  }
}

var MAX = makeSymbol('max')
var LENGTH = makeSymbol('length')
var LENGTH_CALCULATOR = makeSymbol('lengthCalculator')
var ALLOW_STALE = makeSymbol('allowStale')
var MAX_AGE = makeSymbol('maxAge')
var DISPOSE = makeSymbol('dispose')
var NO_DISPOSE_ON_SET = makeSymbol('noDisposeOnSet')
var LRU_LIST = makeSymbol('lruList')
var CACHE = makeSymbol('cache')

function naiveLength () { return 1 }

// lruList is a yallist where the head is the youngest
// item, and the tail is the oldest.  the list contains the Hit
// objects as the entries.
// Each Hit object has a reference to its Yallist.Node.  This
// never changes.
//
// cache is a Map (or PseudoMap) that matches the keys to
// the Yallist.Node object.
function LRUCache (options) {
  if (!(this instanceof LRUCache)) {
    return new LRUCache(options)
  }

  if (typeof options === 'number') {
    options = { max: options }
  }

  if (!options) {
    options = {}
  }

  var max = this[MAX] = options.max
  // Kind of weird to have a default max of Infinity, but oh well.
  if (!max ||
      !(typeof max === 'number') ||
      max <= 0) {
    this[MAX] = Infinity
  }

  var lc = options.length || naiveLength
  if (typeof lc !== 'function') {
    lc = naiveLength
  }
  this[LENGTH_CALCULATOR] = lc

  this[ALLOW_STALE] = options.stale || false
  this[MAX_AGE] = options.maxAge || 0
  this[DISPOSE] = options.dispose
  this[NO_DISPOSE_ON_SET] = options.noDisposeOnSet || false
  this.reset()
}

// resize the cache when the max changes.
Object.defineProperty(LRUCache.prototype, 'max', {
  set: function (mL) {
    if (!mL || !(typeof mL === 'number') || mL <= 0) {
      mL = Infinity
    }
    this[MAX] = mL
    trim(this)
  },
  get: function () {
    return this[MAX]
  },
  enumerable: true
})

Object.defineProperty(LRUCache.prototype, 'allowStale', {
  set: function (allowStale) {
    this[ALLOW_STALE] = !!allowStale
  },
  get: function () {
    return this[ALLOW_STALE]
  },
  enumerable: true
})

Object.defineProperty(LRUCache.prototype, 'maxAge', {
  set: function (mA) {
    if (!mA || !(typeof mA === 'number') || mA < 0) {
      mA = 0
    }
    this[MAX_AGE] = mA
    trim(this)
  },
  get: function () {
    return this[MAX_AGE]
  },
  enumerable: true
})

// resize the cache when the lengthCalculator changes.
Object.defineProperty(LRUCache.prototype, 'lengthCalculator', {
  set: function (lC) {
    if (typeof lC !== 'function') {
      lC = naiveLength
    }
    if (lC !== this[LENGTH_CALCULATOR]) {
      this[LENGTH_CALCULATOR] = lC
      this[LENGTH] = 0
      this[LRU_LIST].forEach(function (hit) {
        hit.length = this[LENGTH_CALCULATOR](hit.value, hit.key)
        this[LENGTH] += hit.length
      }, this)
    }
    trim(this)
  },
  get: function () { return this[LENGTH_CALCULATOR] },
  enumerable: true
})

Object.defineProperty(LRUCache.prototype, 'length', {
  get: function () { return this[LENGTH] },
  enumerable: true
})

Object.defineProperty(LRUCache.prototype, 'itemCount', {
  get: function () { return this[LRU_LIST].length },
  enumerable: true
})

LRUCache.prototype.rforEach = function (fn, thisp) {
  thisp = thisp || this
  for (var walker = this[LRU_LIST].tail; walker !== null;) {
    var prev = walker.prev
    forEachStep(this, fn, walker, thisp)
    walker = prev
  }
}

function forEachStep (self, fn, node, thisp) {
  var hit = node.value
  if (isStale(self, hit)) {
    del(self, node)
    if (!self[ALLOW_STALE]) {
      hit = undefined
    }
  }
  if (hit) {
    fn.call(thisp, hit.value, hit.key, self)
  }
}

LRUCache.prototype.forEach = function (fn, thisp) {
  thisp = thisp || this
  for (var walker = this[LRU_LIST].head; walker !== null;) {
    var next = walker.next
    forEachStep(this, fn, walker, thisp)
    walker = next
  }
}

LRUCache.prototype.keys = function () {
  return this[LRU_LIST].toArray().map(function (k) {
    return k.key
  }, this)
}

LRUCache.prototype.values = function () {
  return this[LRU_LIST].toArray().map(function (k) {
    return k.value
  }, this)
}

LRUCache.prototype.reset = function () {
  if (this[DISPOSE] &&
      this[LRU_LIST] &&
      this[LRU_LIST].length) {
    this[LRU_LIST].forEach(function (hit) {
      this[DISPOSE](hit.key, hit.value)
    }, this)
  }

  this[CACHE] = new Map() // hash of items by key
  this[LRU_LIST] = new Yallist() // list of items in order of use recency
  this[LENGTH] = 0 // length of items in the list
}

LRUCache.prototype.dump = function () {
  return this[LRU_LIST].map(function (hit) {
    if (!isStale(this, hit)) {
      return {
        k: hit.key,
        v: hit.value,
        e: hit.now + (hit.maxAge || 0)
      }
    }
  }, this).toArray().filter(function (h) {
    return h
  })
}

LRUCache.prototype.dumpLru = function () {
  return this[LRU_LIST]
}

LRUCache.prototype.inspect = function (n, opts) {
  var str = 'LRUCache {'
  var extras = false

  var as = this[ALLOW_STALE]
  if (as) {
    str += '\n  allowStale: true'
    extras = true
  }

  var max = this[MAX]
  if (max && max !== Infinity) {
    if (extras) {
      str += ','
    }
    str += '\n  max: ' + util.inspect(max, opts)
    extras = true
  }

  var maxAge = this[MAX_AGE]
  if (maxAge) {
    if (extras) {
      str += ','
    }
    str += '\n  maxAge: ' + util.inspect(maxAge, opts)
    extras = true
  }

  var lc = this[LENGTH_CALCULATOR]
  if (lc && lc !== naiveLength) {
    if (extras) {
      str += ','
    }
    str += '\n  length: ' + util.inspect(this[LENGTH], opts)
    extras = true
  }

  var didFirst = false
  this[LRU_LIST].forEach(function (item) {
    if (didFirst) {
      str += ',\n  '
    } else {
      if (extras) {
        str += ',\n'
      }
      didFirst = true
      str += '\n  '
    }
    var key = util.inspect(item.key).split('\n').join('\n  ')
    var val = { value: item.value }
    if (item.maxAge !== maxAge) {
      val.maxAge = item.maxAge
    }
    if (lc !== naiveLength) {
      val.length = item.length
    }
    if (isStale(this, item)) {
      val.stale = true
    }

    val = util.inspect(val, opts).split('\n').join('\n  ')
    str += key + ' => ' + val
  })

  if (didFirst || extras) {
    str += '\n'
  }
  str += '}'

  return str
}

LRUCache.prototype.set = function (key, value, maxAge) {
  maxAge = maxAge || this[MAX_AGE]

  var now = maxAge ? Date.now() : 0
  var len = this[LENGTH_CALCULATOR](value, key)

  if (this[CACHE].has(key)) {
    if (len > this[MAX]) {
      del(this, this[CACHE].get(key))
      return false
    }

    var node = this[CACHE].get(key)
    var item = node.value

    // dispose of the old one before overwriting
    // split out into 2 ifs for better coverage tracking
    if (this[DISPOSE]) {
      if (!this[NO_DISPOSE_ON_SET]) {
        this[DISPOSE](key, item.value)
      }
    }

    item.now = now
    item.maxAge = maxAge
    item.value = value
    this[LENGTH] += len - item.length
    item.length = len
    this.get(key)
    trim(this)
    return true
  }

  var hit = new Entry(key, value, len, now, maxAge)

  // oversized objects fall out of cache automatically.
  if (hit.length > this[MAX]) {
    if (this[DISPOSE]) {
      this[DISPOSE](key, value)
    }
    return false
  }

  this[LENGTH] += hit.length
  this[LRU_LIST].unshift(hit)
  this[CACHE].set(key, this[LRU_LIST].head)
  trim(this)
  return true
}

LRUCache.prototype.has = function (key) {
  if (!this[CACHE].has(key)) return false
  var hit = this[CACHE].get(key).value
  if (isStale(this, hit)) {
    return false
  }
  return true
}

LRUCache.prototype.get = function (key) {
  return get(this, key, true)
}

LRUCache.prototype.peek = function (key) {
  return get(this, key, false)
}

LRUCache.prototype.pop = function () {
  var node = this[LRU_LIST].tail
  if (!node) return null
  del(this, node)
  return node.value
}

LRUCache.prototype.del = function (key) {
  del(this, this[CACHE].get(key))
}

LRUCache.prototype.load = function (arr) {
  // reset the cache
  this.reset()

  var now = Date.now()
  // A previous serialized cache has the most recent items first
  for (var l = arr.length - 1; l >= 0; l--) {
    var hit = arr[l]
    var expiresAt = hit.e || 0
    if (expiresAt === 0) {
      // the item was created without expiration in a non aged cache
      this.set(hit.k, hit.v)
    } else {
      var maxAge = expiresAt - now
      // dont add already expired items
      if (maxAge > 0) {
        this.set(hit.k, hit.v, maxAge)
      }
    }
  }
}

LRUCache.prototype.prune = function () {
  var self = this
  this[CACHE].forEach(function (value, key) {
    get(self, key, false)
  })
}

function get (self, key, doUse) {
  var node = self[CACHE].get(key)
  if (node) {
    var hit = node.value
    if (isStale(self, hit)) {
      del(self, node)
      if (!self[ALLOW_STALE]) hit = undefined
    } else {
      if (doUse) {
        self[LRU_LIST].unshiftNode(node)
      }
    }
    if (hit) hit = hit.value
  }
  return hit
}

function isStale (self, hit) {
  if (!hit || (!hit.maxAge && !self[MAX_AGE])) {
    return false
  }
  var stale = false
  var diff = Date.now() - hit.now
  if (hit.maxAge) {
    stale = diff > hit.maxAge
  } else {
    stale = self[MAX_AGE] && (diff > self[MAX_AGE])
  }
  return stale
}

function trim (self) {
  if (self[LENGTH] > self[MAX]) {
    for (var walker = self[LRU_LIST].tail;
         self[LENGTH] > self[MAX] && walker !== null;) {
      // We know that we're about to delete this one, and also
      // what the next least recently used key will be, so just
      // go ahead and set it now.
      var prev = walker.prev
      del(self, walker)
      walker = prev
    }
  }
}

function del (self, node) {
  if (node) {
    var hit = node.value
    if (self[DISPOSE]) {
      self[DISPOSE](hit.key, hit.value)
    }
    self[LENGTH] -= hit.length
    self[CACHE].delete(hit.key)
    self[LRU_LIST].removeNode(node)
  }
}

// classy, since V8 prefers predictable objects.
function Entry (key, value, length, now, maxAge) {
  this.key = key
  this.value = value
  this.length = length
  this.now = now
  this.maxAge = maxAge || 0
}


/***/ }),

/***/ "./node_modules/lru-cache/node_modules/yallist/yallist.js":
/*!****************************************************************!*\
  !*** ./node_modules/lru-cache/node_modules/yallist/yallist.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = Yallist

Yallist.Node = Node
Yallist.create = Yallist

function Yallist (list) {
  var self = this
  if (!(self instanceof Yallist)) {
    self = new Yallist()
  }

  self.tail = null
  self.head = null
  self.length = 0

  if (list && typeof list.forEach === 'function') {
    list.forEach(function (item) {
      self.push(item)
    })
  } else if (arguments.length > 0) {
    for (var i = 0, l = arguments.length; i < l; i++) {
      self.push(arguments[i])
    }
  }

  return self
}

Yallist.prototype.removeNode = function (node) {
  if (node.list !== this) {
    throw new Error('removing node which does not belong to this list')
  }

  var next = node.next
  var prev = node.prev

  if (next) {
    next.prev = prev
  }

  if (prev) {
    prev.next = next
  }

  if (node === this.head) {
    this.head = next
  }
  if (node === this.tail) {
    this.tail = prev
  }

  node.list.length--
  node.next = null
  node.prev = null
  node.list = null
}

Yallist.prototype.unshiftNode = function (node) {
  if (node === this.head) {
    return
  }

  if (node.list) {
    node.list.removeNode(node)
  }

  var head = this.head
  node.list = this
  node.next = head
  if (head) {
    head.prev = node
  }

  this.head = node
  if (!this.tail) {
    this.tail = node
  }
  this.length++
}

Yallist.prototype.pushNode = function (node) {
  if (node === this.tail) {
    return
  }

  if (node.list) {
    node.list.removeNode(node)
  }

  var tail = this.tail
  node.list = this
  node.prev = tail
  if (tail) {
    tail.next = node
  }

  this.tail = node
  if (!this.head) {
    this.head = node
  }
  this.length++
}

Yallist.prototype.push = function () {
  for (var i = 0, l = arguments.length; i < l; i++) {
    push(this, arguments[i])
  }
  return this.length
}

Yallist.prototype.unshift = function () {
  for (var i = 0, l = arguments.length; i < l; i++) {
    unshift(this, arguments[i])
  }
  return this.length
}

Yallist.prototype.pop = function () {
  if (!this.tail) {
    return undefined
  }

  var res = this.tail.value
  this.tail = this.tail.prev
  if (this.tail) {
    this.tail.next = null
  } else {
    this.head = null
  }
  this.length--
  return res
}

Yallist.prototype.shift = function () {
  if (!this.head) {
    return undefined
  }

  var res = this.head.value
  this.head = this.head.next
  if (this.head) {
    this.head.prev = null
  } else {
    this.tail = null
  }
  this.length--
  return res
}

Yallist.prototype.forEach = function (fn, thisp) {
  thisp = thisp || this
  for (var walker = this.head, i = 0; walker !== null; i++) {
    fn.call(thisp, walker.value, i, this)
    walker = walker.next
  }
}

Yallist.prototype.forEachReverse = function (fn, thisp) {
  thisp = thisp || this
  for (var walker = this.tail, i = this.length - 1; walker !== null; i--) {
    fn.call(thisp, walker.value, i, this)
    walker = walker.prev
  }
}

Yallist.prototype.get = function (n) {
  for (var i = 0, walker = this.head; walker !== null && i < n; i++) {
    // abort out of the list early if we hit a cycle
    walker = walker.next
  }
  if (i === n && walker !== null) {
    return walker.value
  }
}

Yallist.prototype.getReverse = function (n) {
  for (var i = 0, walker = this.tail; walker !== null && i < n; i++) {
    // abort out of the list early if we hit a cycle
    walker = walker.prev
  }
  if (i === n && walker !== null) {
    return walker.value
  }
}

Yallist.prototype.map = function (fn, thisp) {
  thisp = thisp || this
  var res = new Yallist()
  for (var walker = this.head; walker !== null;) {
    res.push(fn.call(thisp, walker.value, this))
    walker = walker.next
  }
  return res
}

Yallist.prototype.mapReverse = function (fn, thisp) {
  thisp = thisp || this
  var res = new Yallist()
  for (var walker = this.tail; walker !== null;) {
    res.push(fn.call(thisp, walker.value, this))
    walker = walker.prev
  }
  return res
}

Yallist.prototype.reduce = function (fn, initial) {
  var acc
  var walker = this.head
  if (arguments.length > 1) {
    acc = initial
  } else if (this.head) {
    walker = this.head.next
    acc = this.head.value
  } else {
    throw new TypeError('Reduce of empty list with no initial value')
  }

  for (var i = 0; walker !== null; i++) {
    acc = fn(acc, walker.value, i)
    walker = walker.next
  }

  return acc
}

Yallist.prototype.reduceReverse = function (fn, initial) {
  var acc
  var walker = this.tail
  if (arguments.length > 1) {
    acc = initial
  } else if (this.tail) {
    walker = this.tail.prev
    acc = this.tail.value
  } else {
    throw new TypeError('Reduce of empty list with no initial value')
  }

  for (var i = this.length - 1; walker !== null; i--) {
    acc = fn(acc, walker.value, i)
    walker = walker.prev
  }

  return acc
}

Yallist.prototype.toArray = function () {
  var arr = new Array(this.length)
  for (var i = 0, walker = this.head; walker !== null; i++) {
    arr[i] = walker.value
    walker = walker.next
  }
  return arr
}

Yallist.prototype.toArrayReverse = function () {
  var arr = new Array(this.length)
  for (var i = 0, walker = this.tail; walker !== null; i++) {
    arr[i] = walker.value
    walker = walker.prev
  }
  return arr
}

Yallist.prototype.slice = function (from, to) {
  to = to || this.length
  if (to < 0) {
    to += this.length
  }
  from = from || 0
  if (from < 0) {
    from += this.length
  }
  var ret = new Yallist()
  if (to < from || to < 0) {
    return ret
  }
  if (from < 0) {
    from = 0
  }
  if (to > this.length) {
    to = this.length
  }
  for (var i = 0, walker = this.head; walker !== null && i < from; i++) {
    walker = walker.next
  }
  for (; walker !== null && i < to; i++, walker = walker.next) {
    ret.push(walker.value)
  }
  return ret
}

Yallist.prototype.sliceReverse = function (from, to) {
  to = to || this.length
  if (to < 0) {
    to += this.length
  }
  from = from || 0
  if (from < 0) {
    from += this.length
  }
  var ret = new Yallist()
  if (to < from || to < 0) {
    return ret
  }
  if (from < 0) {
    from = 0
  }
  if (to > this.length) {
    to = this.length
  }
  for (var i = this.length, walker = this.tail; walker !== null && i > to; i--) {
    walker = walker.prev
  }
  for (; walker !== null && i > from; i--, walker = walker.prev) {
    ret.push(walker.value)
  }
  return ret
}

Yallist.prototype.reverse = function () {
  var head = this.head
  var tail = this.tail
  for (var walker = head; walker !== null; walker = walker.prev) {
    var p = walker.prev
    walker.prev = walker.next
    walker.next = p
  }
  this.head = tail
  this.tail = head
  return this
}

function push (self, item) {
  self.tail = new Node(item, self.tail, null, self)
  if (!self.head) {
    self.head = self.tail
  }
  self.length++
}

function unshift (self, item) {
  self.head = new Node(item, null, self.head, self)
  if (!self.tail) {
    self.tail = self.head
  }
  self.length++
}

function Node (value, prev, next, list) {
  if (!(this instanceof Node)) {
    return new Node(value, prev, next, list)
  }

  this.list = list
  this.value = value

  if (prev) {
    prev.next = this
    this.prev = prev
  } else {
    this.prev = null
  }

  if (next) {
    next.prev = this
    this.next = next
  } else {
    this.next = null
  }
}


/***/ }),

/***/ "./node_modules/mitt/dist/mitt.es.js":
/*!*******************************************!*\
  !*** ./node_modules/mitt/dist/mitt.es.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//      
// An event handler can take an optional event argument
// and should not return a value
                                          
                                                               

// An array of all currently registered event handlers for a type
                                            
                                                            
// A map of event types and their corresponding event handlers.
                        
                                 
                                   
  

/** Mitt: Tiny (~200b) functional event emitter / pubsub.
 *  @name mitt
 *  @returns {Mitt}
 */
function mitt(all                 ) {
	all = all || Object.create(null);

	return {
		/**
		 * Register an event handler for the given type.
		 *
		 * @param  {String} type	Type of event to listen for, or `"*"` for all events
		 * @param  {Function} handler Function to call in response to given event
		 * @memberOf mitt
		 */
		on: function on(type        , handler              ) {
			(all[type] || (all[type] = [])).push(handler);
		},

		/**
		 * Remove an event handler for the given type.
		 *
		 * @param  {String} type	Type of event to unregister `handler` from, or `"*"`
		 * @param  {Function} handler Handler function to remove
		 * @memberOf mitt
		 */
		off: function off(type        , handler              ) {
			if (all[type]) {
				all[type].splice(all[type].indexOf(handler) >>> 0, 1);
			}
		},

		/**
		 * Invoke all handlers for the given type.
		 * If present, `"*"` handlers are invoked after type-matched handlers.
		 *
		 * @param {String} type  The event type to invoke
		 * @param {Any} [evt]  Any value (object is recommended and powerful), passed to each handler
		 * @memberOf mitt
		 */
		emit: function emit(type        , evt     ) {
			(all[type] || []).slice().map(function (handler) { handler(evt); });
			(all['*'] || []).slice().map(function (handler) { handler(type, evt); });
		}
	};
}

/* harmony default export */ __webpack_exports__["default"] = (mitt);
//# sourceMappingURL=mitt.es.js.map


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

/***/ "./node_modules/pseudomap/map.js":
/*!***************************************!*\
  !*** ./node_modules/pseudomap/map.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(process) {if (process.env.npm_package_name === 'pseudomap' &&
    process.env.npm_lifecycle_script === 'test')
  process.env.TEST_PSEUDOMAP = 'true'

if (typeof Map === 'function' && !process.env.TEST_PSEUDOMAP) {
  module.exports = Map
} else {
  module.exports = __webpack_require__(/*! ./pseudomap */ "./node_modules/pseudomap/pseudomap.js")
}

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../process/browser.js */ "./node_modules/process/browser.js")))

/***/ }),

/***/ "./node_modules/pseudomap/pseudomap.js":
/*!*********************************************!*\
  !*** ./node_modules/pseudomap/pseudomap.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var hasOwnProperty = Object.prototype.hasOwnProperty

module.exports = PseudoMap

function PseudoMap (set) {
  if (!(this instanceof PseudoMap)) // whyyyyyyy
    throw new TypeError("Constructor PseudoMap requires 'new'")

  this.clear()

  if (set) {
    if ((set instanceof PseudoMap) ||
        (typeof Map === 'function' && set instanceof Map))
      set.forEach(function (value, key) {
        this.set(key, value)
      }, this)
    else if (Array.isArray(set))
      set.forEach(function (kv) {
        this.set(kv[0], kv[1])
      }, this)
    else
      throw new TypeError('invalid argument')
  }
}

PseudoMap.prototype.forEach = function (fn, thisp) {
  thisp = thisp || this
  Object.keys(this._data).forEach(function (k) {
    if (k !== 'size')
      fn.call(thisp, this._data[k].value, this._data[k].key)
  }, this)
}

PseudoMap.prototype.has = function (k) {
  return !!find(this._data, k)
}

PseudoMap.prototype.get = function (k) {
  var res = find(this._data, k)
  return res && res.value
}

PseudoMap.prototype.set = function (k, v) {
  set(this._data, k, v)
}

PseudoMap.prototype.delete = function (k) {
  var res = find(this._data, k)
  if (res) {
    delete this._data[res._index]
    this._data.size--
  }
}

PseudoMap.prototype.clear = function () {
  var data = Object.create(null)
  data.size = 0

  Object.defineProperty(this, '_data', {
    value: data,
    enumerable: false,
    configurable: true,
    writable: false
  })
}

Object.defineProperty(PseudoMap.prototype, 'size', {
  get: function () {
    return this._data.size
  },
  set: function (n) {},
  enumerable: true,
  configurable: true
})

PseudoMap.prototype.values =
PseudoMap.prototype.keys =
PseudoMap.prototype.entries = function () {
  throw new Error('iterators are not implemented in this version')
}

// Either identical, or both NaN
function same (a, b) {
  return a === b || a !== a && b !== b
}

function Entry (k, v, i) {
  this.key = k
  this.value = v
  this._index = i
}

function find (data, k) {
  for (var i = 0, s = '_' + k, key = s;
       hasOwnProperty.call(data, key);
       key = s + i++) {
    if (same(data[key].key, k))
      return data[key]
  }
}

function set (data, k, v) {
  for (var i = 0, s = '_' + k, key = s;
       hasOwnProperty.call(data, key);
       key = s + i++) {
    if (same(data[key].key, k)) {
      data[key].value = v
      return
    }
  }
  data.size++
  data[key] = new Entry(k, v, key)
}


/***/ }),

/***/ "./node_modules/util/support/isBufferBrowser.js":
/*!******************************************************!*\
  !*** ./node_modules/util/support/isBufferBrowser.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function isBuffer(arg) {
  return arg && typeof arg === 'object'
    && typeof arg.copy === 'function'
    && typeof arg.fill === 'function'
    && typeof arg.readUInt8 === 'function';
}

/***/ }),

/***/ "./node_modules/util/util.js":
/*!***********************************!*\
  !*** ./node_modules/util/util.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global, process) {// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.

var formatRegExp = /%[sdj%]/g;
exports.format = function(f) {
  if (!isString(f)) {
    var objects = [];
    for (var i = 0; i < arguments.length; i++) {
      objects.push(inspect(arguments[i]));
    }
    return objects.join(' ');
  }

  var i = 1;
  var args = arguments;
  var len = args.length;
  var str = String(f).replace(formatRegExp, function(x) {
    if (x === '%%') return '%';
    if (i >= len) return x;
    switch (x) {
      case '%s': return String(args[i++]);
      case '%d': return Number(args[i++]);
      case '%j':
        try {
          return JSON.stringify(args[i++]);
        } catch (_) {
          return '[Circular]';
        }
      default:
        return x;
    }
  });
  for (var x = args[i]; i < len; x = args[++i]) {
    if (isNull(x) || !isObject(x)) {
      str += ' ' + x;
    } else {
      str += ' ' + inspect(x);
    }
  }
  return str;
};


// Mark that a method should not be used.
// Returns a modified function which warns once by default.
// If --no-deprecation is set, then it is a no-op.
exports.deprecate = function(fn, msg) {
  // Allow for deprecating things in the process of starting up.
  if (isUndefined(global.process)) {
    return function() {
      return exports.deprecate(fn, msg).apply(this, arguments);
    };
  }

  if (process.noDeprecation === true) {
    return fn;
  }

  var warned = false;
  function deprecated() {
    if (!warned) {
      if (process.throwDeprecation) {
        throw new Error(msg);
      } else if (process.traceDeprecation) {
        console.trace(msg);
      } else {
        console.error(msg);
      }
      warned = true;
    }
    return fn.apply(this, arguments);
  }

  return deprecated;
};


var debugs = {};
var debugEnviron;
exports.debuglog = function(set) {
  if (isUndefined(debugEnviron))
    debugEnviron = process.env.NODE_DEBUG || '';
  set = set.toUpperCase();
  if (!debugs[set]) {
    if (new RegExp('\\b' + set + '\\b', 'i').test(debugEnviron)) {
      var pid = process.pid;
      debugs[set] = function() {
        var msg = exports.format.apply(exports, arguments);
        console.error('%s %d: %s', set, pid, msg);
      };
    } else {
      debugs[set] = function() {};
    }
  }
  return debugs[set];
};


/**
 * Echos the value of a value. Trys to print the value out
 * in the best way possible given the different types.
 *
 * @param {Object} obj The object to print out.
 * @param {Object} opts Optional options object that alters the output.
 */
/* legacy: obj, showHidden, depth, colors*/
function inspect(obj, opts) {
  // default options
  var ctx = {
    seen: [],
    stylize: stylizeNoColor
  };
  // legacy...
  if (arguments.length >= 3) ctx.depth = arguments[2];
  if (arguments.length >= 4) ctx.colors = arguments[3];
  if (isBoolean(opts)) {
    // legacy...
    ctx.showHidden = opts;
  } else if (opts) {
    // got an "options" object
    exports._extend(ctx, opts);
  }
  // set default options
  if (isUndefined(ctx.showHidden)) ctx.showHidden = false;
  if (isUndefined(ctx.depth)) ctx.depth = 2;
  if (isUndefined(ctx.colors)) ctx.colors = false;
  if (isUndefined(ctx.customInspect)) ctx.customInspect = true;
  if (ctx.colors) ctx.stylize = stylizeWithColor;
  return formatValue(ctx, obj, ctx.depth);
}
exports.inspect = inspect;


// http://en.wikipedia.org/wiki/ANSI_escape_code#graphics
inspect.colors = {
  'bold' : [1, 22],
  'italic' : [3, 23],
  'underline' : [4, 24],
  'inverse' : [7, 27],
  'white' : [37, 39],
  'grey' : [90, 39],
  'black' : [30, 39],
  'blue' : [34, 39],
  'cyan' : [36, 39],
  'green' : [32, 39],
  'magenta' : [35, 39],
  'red' : [31, 39],
  'yellow' : [33, 39]
};

// Don't use 'blue' not visible on cmd.exe
inspect.styles = {
  'special': 'cyan',
  'number': 'yellow',
  'boolean': 'yellow',
  'undefined': 'grey',
  'null': 'bold',
  'string': 'green',
  'date': 'magenta',
  // "name": intentionally not styling
  'regexp': 'red'
};


function stylizeWithColor(str, styleType) {
  var style = inspect.styles[styleType];

  if (style) {
    return '\u001b[' + inspect.colors[style][0] + 'm' + str +
           '\u001b[' + inspect.colors[style][1] + 'm';
  } else {
    return str;
  }
}


function stylizeNoColor(str, styleType) {
  return str;
}


function arrayToHash(array) {
  var hash = {};

  array.forEach(function(val, idx) {
    hash[val] = true;
  });

  return hash;
}


function formatValue(ctx, value, recurseTimes) {
  // Provide a hook for user-specified inspect functions.
  // Check that value is an object with an inspect function on it
  if (ctx.customInspect &&
      value &&
      isFunction(value.inspect) &&
      // Filter out the util module, it's inspect function is special
      value.inspect !== exports.inspect &&
      // Also filter out any prototype objects using the circular check.
      !(value.constructor && value.constructor.prototype === value)) {
    var ret = value.inspect(recurseTimes, ctx);
    if (!isString(ret)) {
      ret = formatValue(ctx, ret, recurseTimes);
    }
    return ret;
  }

  // Primitive types cannot have properties
  var primitive = formatPrimitive(ctx, value);
  if (primitive) {
    return primitive;
  }

  // Look up the keys of the object.
  var keys = Object.keys(value);
  var visibleKeys = arrayToHash(keys);

  if (ctx.showHidden) {
    keys = Object.getOwnPropertyNames(value);
  }

  // IE doesn't make error fields non-enumerable
  // http://msdn.microsoft.com/en-us/library/ie/dww52sbt(v=vs.94).aspx
  if (isError(value)
      && (keys.indexOf('message') >= 0 || keys.indexOf('description') >= 0)) {
    return formatError(value);
  }

  // Some type of object without properties can be shortcutted.
  if (keys.length === 0) {
    if (isFunction(value)) {
      var name = value.name ? ': ' + value.name : '';
      return ctx.stylize('[Function' + name + ']', 'special');
    }
    if (isRegExp(value)) {
      return ctx.stylize(RegExp.prototype.toString.call(value), 'regexp');
    }
    if (isDate(value)) {
      return ctx.stylize(Date.prototype.toString.call(value), 'date');
    }
    if (isError(value)) {
      return formatError(value);
    }
  }

  var base = '', array = false, braces = ['{', '}'];

  // Make Array say that they are Array
  if (isArray(value)) {
    array = true;
    braces = ['[', ']'];
  }

  // Make functions say that they are functions
  if (isFunction(value)) {
    var n = value.name ? ': ' + value.name : '';
    base = ' [Function' + n + ']';
  }

  // Make RegExps say that they are RegExps
  if (isRegExp(value)) {
    base = ' ' + RegExp.prototype.toString.call(value);
  }

  // Make dates with properties first say the date
  if (isDate(value)) {
    base = ' ' + Date.prototype.toUTCString.call(value);
  }

  // Make error with message first say the error
  if (isError(value)) {
    base = ' ' + formatError(value);
  }

  if (keys.length === 0 && (!array || value.length == 0)) {
    return braces[0] + base + braces[1];
  }

  if (recurseTimes < 0) {
    if (isRegExp(value)) {
      return ctx.stylize(RegExp.prototype.toString.call(value), 'regexp');
    } else {
      return ctx.stylize('[Object]', 'special');
    }
  }

  ctx.seen.push(value);

  var output;
  if (array) {
    output = formatArray(ctx, value, recurseTimes, visibleKeys, keys);
  } else {
    output = keys.map(function(key) {
      return formatProperty(ctx, value, recurseTimes, visibleKeys, key, array);
    });
  }

  ctx.seen.pop();

  return reduceToSingleString(output, base, braces);
}


function formatPrimitive(ctx, value) {
  if (isUndefined(value))
    return ctx.stylize('undefined', 'undefined');
  if (isString(value)) {
    var simple = '\'' + JSON.stringify(value).replace(/^"|"$/g, '')
                                             .replace(/'/g, "\\'")
                                             .replace(/\\"/g, '"') + '\'';
    return ctx.stylize(simple, 'string');
  }
  if (isNumber(value))
    return ctx.stylize('' + value, 'number');
  if (isBoolean(value))
    return ctx.stylize('' + value, 'boolean');
  // For some reason typeof null is "object", so special case here.
  if (isNull(value))
    return ctx.stylize('null', 'null');
}


function formatError(value) {
  return '[' + Error.prototype.toString.call(value) + ']';
}


function formatArray(ctx, value, recurseTimes, visibleKeys, keys) {
  var output = [];
  for (var i = 0, l = value.length; i < l; ++i) {
    if (hasOwnProperty(value, String(i))) {
      output.push(formatProperty(ctx, value, recurseTimes, visibleKeys,
          String(i), true));
    } else {
      output.push('');
    }
  }
  keys.forEach(function(key) {
    if (!key.match(/^\d+$/)) {
      output.push(formatProperty(ctx, value, recurseTimes, visibleKeys,
          key, true));
    }
  });
  return output;
}


function formatProperty(ctx, value, recurseTimes, visibleKeys, key, array) {
  var name, str, desc;
  desc = Object.getOwnPropertyDescriptor(value, key) || { value: value[key] };
  if (desc.get) {
    if (desc.set) {
      str = ctx.stylize('[Getter/Setter]', 'special');
    } else {
      str = ctx.stylize('[Getter]', 'special');
    }
  } else {
    if (desc.set) {
      str = ctx.stylize('[Setter]', 'special');
    }
  }
  if (!hasOwnProperty(visibleKeys, key)) {
    name = '[' + key + ']';
  }
  if (!str) {
    if (ctx.seen.indexOf(desc.value) < 0) {
      if (isNull(recurseTimes)) {
        str = formatValue(ctx, desc.value, null);
      } else {
        str = formatValue(ctx, desc.value, recurseTimes - 1);
      }
      if (str.indexOf('\n') > -1) {
        if (array) {
          str = str.split('\n').map(function(line) {
            return '  ' + line;
          }).join('\n').substr(2);
        } else {
          str = '\n' + str.split('\n').map(function(line) {
            return '   ' + line;
          }).join('\n');
        }
      }
    } else {
      str = ctx.stylize('[Circular]', 'special');
    }
  }
  if (isUndefined(name)) {
    if (array && key.match(/^\d+$/)) {
      return str;
    }
    name = JSON.stringify('' + key);
    if (name.match(/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/)) {
      name = name.substr(1, name.length - 2);
      name = ctx.stylize(name, 'name');
    } else {
      name = name.replace(/'/g, "\\'")
                 .replace(/\\"/g, '"')
                 .replace(/(^"|"$)/g, "'");
      name = ctx.stylize(name, 'string');
    }
  }

  return name + ': ' + str;
}


function reduceToSingleString(output, base, braces) {
  var numLinesEst = 0;
  var length = output.reduce(function(prev, cur) {
    numLinesEst++;
    if (cur.indexOf('\n') >= 0) numLinesEst++;
    return prev + cur.replace(/\u001b\[\d\d?m/g, '').length + 1;
  }, 0);

  if (length > 60) {
    return braces[0] +
           (base === '' ? '' : base + '\n ') +
           ' ' +
           output.join(',\n  ') +
           ' ' +
           braces[1];
  }

  return braces[0] + base + ' ' + output.join(', ') + ' ' + braces[1];
}


// NOTE: These type checking functions intentionally don't use `instanceof`
// because it is fragile and can be easily faked with `Object.create()`.
function isArray(ar) {
  return Array.isArray(ar);
}
exports.isArray = isArray;

function isBoolean(arg) {
  return typeof arg === 'boolean';
}
exports.isBoolean = isBoolean;

function isNull(arg) {
  return arg === null;
}
exports.isNull = isNull;

function isNullOrUndefined(arg) {
  return arg == null;
}
exports.isNullOrUndefined = isNullOrUndefined;

function isNumber(arg) {
  return typeof arg === 'number';
}
exports.isNumber = isNumber;

function isString(arg) {
  return typeof arg === 'string';
}
exports.isString = isString;

function isSymbol(arg) {
  return typeof arg === 'symbol';
}
exports.isSymbol = isSymbol;

function isUndefined(arg) {
  return arg === void 0;
}
exports.isUndefined = isUndefined;

function isRegExp(re) {
  return isObject(re) && objectToString(re) === '[object RegExp]';
}
exports.isRegExp = isRegExp;

function isObject(arg) {
  return typeof arg === 'object' && arg !== null;
}
exports.isObject = isObject;

function isDate(d) {
  return isObject(d) && objectToString(d) === '[object Date]';
}
exports.isDate = isDate;

function isError(e) {
  return isObject(e) &&
      (objectToString(e) === '[object Error]' || e instanceof Error);
}
exports.isError = isError;

function isFunction(arg) {
  return typeof arg === 'function';
}
exports.isFunction = isFunction;

function isPrimitive(arg) {
  return arg === null ||
         typeof arg === 'boolean' ||
         typeof arg === 'number' ||
         typeof arg === 'string' ||
         typeof arg === 'symbol' ||  // ES6 symbol
         typeof arg === 'undefined';
}
exports.isPrimitive = isPrimitive;

exports.isBuffer = __webpack_require__(/*! ./support/isBuffer */ "./node_modules/util/support/isBufferBrowser.js");

function objectToString(o) {
  return Object.prototype.toString.call(o);
}


function pad(n) {
  return n < 10 ? '0' + n.toString(10) : n.toString(10);
}


var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep',
              'Oct', 'Nov', 'Dec'];

// 26 Feb 16:19:34
function timestamp() {
  var d = new Date();
  var time = [pad(d.getHours()),
              pad(d.getMinutes()),
              pad(d.getSeconds())].join(':');
  return [d.getDate(), months[d.getMonth()], time].join(' ');
}


// log is just a thin wrapper to console.log that prepends a timestamp
exports.log = function() {
  console.log('%s - %s', timestamp(), exports.format.apply(exports, arguments));
};


/**
 * Inherit the prototype methods from one constructor into another.
 *
 * The Function.prototype.inherits from lang.js rewritten as a standalone
 * function (not on Function.prototype). NOTE: If this file is to be loaded
 * during bootstrapping this function needs to be rewritten using some native
 * functions as prototype setup using normal JavaScript does not work as
 * expected during bootstrapping (see mirror.js in r114903).
 *
 * @param {function} ctor Constructor function which needs to inherit the
 *     prototype.
 * @param {function} superCtor Constructor function to inherit prototype from.
 */
exports.inherits = __webpack_require__(/*! inherits */ "./node_modules/inherits/inherits_browser.js");

exports._extend = function(origin, add) {
  // Don't do anything if add isn't an object
  if (!add || !isObject(add)) return origin;

  var keys = Object.keys(add);
  var i = keys.length;
  while (i--) {
    origin[keys[i]] = add[keys[i]];
  }
  return origin;
};

function hasOwnProperty(obj, prop) {
  return Object.prototype.hasOwnProperty.call(obj, prop);
}

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js"), __webpack_require__(/*! ./../process/browser.js */ "./node_modules/process/browser.js")))

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
	g = g || Function("return this")() || (1, eval)("this");
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),

/***/ "./node_modules/worker-loader/dist/workers/InlineWorker.js":
/*!*****************************************************************!*\
  !*** ./node_modules/worker-loader/dist/workers/InlineWorker.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// http://stackoverflow.com/questions/10343913/how-to-create-a-web-worker-from-a-string

var URL = window.URL || window.webkitURL;

module.exports = function (content, url) {
  try {
    try {
      var blob;

      try {
        // BlobBuilder = Deprecated, but widely implemented
        var BlobBuilder = window.BlobBuilder || window.WebKitBlobBuilder || window.MozBlobBuilder || window.MSBlobBuilder;

        blob = new BlobBuilder();

        blob.append(content);

        blob = blob.getBlob();
      } catch (e) {
        // The proposed API
        blob = new Blob([content]);
      }

      return new Worker(URL.createObjectURL(blob));
    } catch (e) {
      return new Worker('data:application/javascript,' + encodeURIComponent(content));
    }
  } catch (e) {
    if (!url) {
      throw Error('Inline worker is not supported');
    }

    return new Worker(url);
  }
};

/***/ }),

/***/ "./package.json":
/*!**********************!*\
  !*** ./package.json ***!
  \**********************/
/*! exports provided: name, version, sideEffects, description, repository, author, contributors, license, files, dependencies, devDependencies, module, main, scripts, default */
/***/ (function(module) {

module.exports = {"name":"@carto/carto-vl","version":"0.8.0","sideEffects":false,"description":"CARTO Vector library","repository":{"type":"git","url":"git://github.com/CartoDB/carto-vl.git"},"author":{"name":"CARTO","url":"https://carto.com/"},"contributors":["David Manzanares <dmanzanares@carto.com>","Iago Lastra <iago@carto.com>","Jesús Arroyo Torrens <jarroyo@carto.com>","Javier Goizueta <jgoizueta@carto.com>","Mamata Akella <makella@carto.com>","Raúl Ochoa <rochoa@carto.com>","Ariana Escobar <ariana@carto.com>","Elena Torro <elena@carto.com>","Víctor Velarde <victor@carto.com>"],"license":"BSD-3-Clause","files":["src","dist"],"dependencies":{"@babel/core":"^7.0.0","@babel/preset-env":"^7.0.0","@mapbox/vector-tile":"^1.3.0","babel-loader":"^8.0.0","cartocolor":"^4.0.0","earcut":"^2.1.2","jsep":"CartoDB/jsep#additional-char-ids-packaged","lru-cache":"^4.1.1","mitt":"^1.1.3","pbf":"^3.1.0"},"devDependencies":{"@carto/mapbox-gl":"0.48.0-carto1","chai":"^4.1.2","chai-as-promised":"^7.1.1","eslint":"^4.15.0","eslint-config-semistandard":"^12.0.1","eslint-config-standard":"^11.0.0","eslint-plugin-import":"^2.13.0","eslint-plugin-node":"^6.0.1","eslint-plugin-promise":"^3.8.0","eslint-plugin-standard":"^3.1.0","exquisite-sst":"^1.5.0","fastly":"^2.2.0","glob":"^7.1.2","http-server":"^0.11.1","jasmine-core":"^2.99.1","jsdoc":"^3.5.5","jsdoc-escape-at":"^1.0.1","karma":"^2.0.2","karma-chrome-launcher":"^2.2.0","karma-falcon-benchmark":"^0.1.0","karma-falcon-benchmark-reporter":"^0.0.0","karma-jasmine":"^1.1.2","karma-mocha-reporter":"^2.2.5","karma-sourcemap-loader":"^0.3.7","karma-webpack":"3.0.0","lodash.template":"^4.4.0","mocha":"^5.0.0","puppeteer":"^1.1.0","s3":"^4.4.0","serve":"^7.2.0","sloc":"^0.2.0","svg-inline-loader":"^0.8.0","wait-on":"^2.1.0","webpack":"^4.17.1","webpack-cli":"^2.1.4","webpack-glsl-loader":"^1.0.1","worker-loader":"^2.0.0"},"module":"dist/carto-vl.js","main":"dist/carto-vl.js","scripts":{"build":"yarn build:dev && yarn build:min","build:dev":"webpack --config webpack/webpack.config.js","build:min":"webpack --config webpack/webpack.min.config.js","build:watch":"webpack -w --config webpack/webpack.config.js","docs":"rm -rf docs/public; jsdoc --configure config/jsdoc/public-conf.json","docs:all":"rm -rf docs/all; jsdoc --configure config/jsdoc/all-conf.json","lint":"eslint .","lint:fix":"eslint . --fix","test":"yarn test:unit && yarn lint && yarn docs","test:unit":"karma start --single-run --browsers ChromeHeadlessNoSandbox test/unit/karma.conf.js","test:unit:min":"MIN=1 yarn test:unit","test:watch":"karma start --no-single-run --auto-watch --browsers ChromeHeadlessNoSandbox test/unit/karma.conf.js","test:watchc":"karma start --no-single-run --auto-watch --browsers Chrome test/unit/karma.conf.js","test:user":"karma start --single-run --browsers ChromeHeadlessNoSandbox test/integration/user/karma.conf.js","test:user:min":"MIN=1 yarn test:user","test:user:watch":"karma start --no-single-run --auto-watch --browsers ChromeHeadlessNoSandbox test/integration/user/karma.conf.js","test:user:watchc":"karma start --no-single-run --browsers Chrome test/integration/user/karma.conf.js","test:browser":"karma start --no-single-run --browsers Chrome test/unit/karma.conf.js","test:render":"yarn build:dev && mocha test/integration/render/render.test.js --timeout 15000","test:render:min":"yarn build:min && MIN=1 mocha test/integration/render/render.test.js --timeout 15000","test:render:clean":"rm -rf test/integration/render/scenarios/**/**/reference.png","test:render:prepare":"yarn build:dev && node test/integration/render/render.prepare.js ","test:e2e":"./scripts/run-local-e2e.sh","test:e2e:clean":"rm -rf test/acceptance/e2e/**/reference.png","test:e2e:prepare":"yarn build:dev && node test/acceptance/e2e.prepare.js ","test:fps":"node test/benchmark/fps/benchmark.js","test:perf":"karma start --single-run --browsers Chrome test/benchmark/karma.conf.js","serve":"yarn build:dev && yarn docs && http-server --cors","preversion":"./scripts/preversion.sh","postversion":"git push origin HEAD --follow-tags","prepublishOnly":"./scripts/release.sh","ghpublish":"git checkout gh-pages && git pull origin gh-pages && git merge master && yarn build && yarn docs && git commit -a -m \"Auto generated gh-pages\" && git push origin gh-pages && git checkout master","loc":"sloc src/ examples/"}};

/***/ }),

/***/ "./src/Layer.js":
/*!**********************!*\
  !*** ./src/Layer.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Layer; });
/* harmony import */ var mitt__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mitt */ "./node_modules/mitt/dist/mitt.es.js");
/* harmony import */ var _utils_util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils/util */ "./src/utils/util.js");
/* harmony import */ var _Viz__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Viz */ "./src/Viz.js");
/* harmony import */ var _sources_Base__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./sources/Base */ "./src/sources/Base.js");
/* harmony import */ var _renderer_Renderer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./renderer/Renderer */ "./src/renderer/Renderer.js");
/* harmony import */ var _renderer_RenderLayer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./renderer/RenderLayer */ "./src/renderer/RenderLayer.js");
/* harmony import */ var _src_errors_carto_validation_error__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../src/errors/carto-validation-error */ "./src/errors/carto-validation-error.js");
/* harmony import */ var _src_errors_carto_runtime_error__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../src/errors/carto-runtime-error */ "./src/errors/carto-runtime-error.js");
/* harmony import */ var _renderer_viz_expressions__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./renderer/viz/expressions */ "./src/renderer/viz/expressions.js");
/* harmony import */ var _constants_layer__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./constants/layer */ "./src/constants/layer.js");












// There is one renderer per map, so the layers added to the same map
// use the same renderer with each renderLayer
const renderers = new WeakMap();

/**
*
* A Layer is the primary way to visualize geospatial data.
*
* To create a layer a {@link carto.source.Base|source} and {@link carto.Viz|viz} are required:
*
* - The {@link carto.source.Base|source} is used to know **what** data will be displayed in the Layer.
* - The {@link carto.Viz|viz} is used to know **how** to draw the data in the Layer, Viz instances can only be bound to one single layer.
*
* @param {string} id - The ID of the layer. Can be used in the {@link addTo|addTo} function
* @param {carto.source.Base} source - The source of the data
* @param {carto.Viz} viz - The description of the visualization of the data
*
* @example
* const layer = new carto.Layer('layer0', source, viz);
*
* @fires CartoError
*
* @constructor Layer
* @memberof carto
* @api
*/
class Layer {
    constructor (id, source, viz) {
        this._checkId(id);
        this._checkSource(source);
        this._checkViz(viz);
        this._init(id, source, viz);
    }

    _init (id, source, viz) {
        viz._boundLayer = this;
        this._context = new Promise((resolve) => {
            this._contextInitialize = resolve;
        });

        /* Custom Layer API attributes:
          - id: string
          - type: "custom"
        */
        this.id = id;
        this.type = 'custom';

        this.metadata = null;
        this._state = 'init';
        this._visible = true;
        this._isLoaded = false;
        this._matrix = null;
        this._fireUpdateOnNextRender = false;
        this._emitter = Object(mitt__WEBPACK_IMPORTED_MODULE_0__["default"])();
        this._oldDataframes = new Set();
        this._renderLayer = new _renderer_RenderLayer__WEBPACK_IMPORTED_MODULE_5__["default"]();
        this._atomicChangeUID = 0;

        this.update(source, viz);
    }

    /**
     * Get layer visibility. Can be 'visible' or 'none'.
     * @readonly
     */
    get visibility () {
        return this._visible ? _constants_layer__WEBPACK_IMPORTED_MODULE_9__["layerVisibility"].VISIBLE : _constants_layer__WEBPACK_IMPORTED_MODULE_9__["layerVisibility"].HIDDEN;
    }

    /**
     * Get layer visibility. Can be true or false.
     * @readonly
     */
    get visible () {
        return this._visible;
    }

    /**
     * Register an event handler for the given event name. Valid names are: `loaded`, `updated`.
     *
     * @param {string} eventName - Type of event to listen for
     * @param {function} callback - Function to call in response to given event
     * @memberof carto.Layer
     * @instance
     * @api
     */
    on (eventName, callback) {
        return this._emitter.on(eventName, callback);
    }

    /**
     * Remove an event handler for the given type.
     *
     * @param {string} eventName - Type of event to unregister
     * @param {function} callback - Handler function to unregister
     * @memberof carto.Layer
     * @instance
     * @api
     */
    off (eventName, callback) {
        return this._emitter.off(eventName, callback);
    }

    /**
     * Add this layer to a map. If the map's style is not loaded yet it will wait for it to add the layer as soon as possible.
     *
     * @param {mapboxgl.Map} map - The map on which to add the layer
     * @param {string?} beforeLayerID - The ID of an existing layer to insert the new layer before. If this values is not passed the layer will be added on the top of the existing layers.
     * @memberof carto.Layer
     * @instance
     * @api
     */
    addTo (map, beforeLayerID) {
        const STYLE_ERROR_REGEX = /Style is not done loading/;

        try {
            map.addLayer(this, beforeLayerID);
        } catch (error) {
            if (!STYLE_ERROR_REGEX.test(error)) {
                throw new _src_errors_carto_runtime_error__WEBPACK_IMPORTED_MODULE_7__["default"](`Error adding layer to map: ${error}`);
            }

            map.on('load', () => {
                map.addLayer(this, beforeLayerID);
            });
        }
    }

    /**
     * Remove this layer from the map. It should be called after the layer is loaded. Otherwise, it will not delete the layer.
     *
     * @memberof carto.Layer
     * @instance
     * @api
     */
    remove () {
        if (this.map) {
            this.map.removeLayer(this.id);
        }
    }

    /**
     * Update the layer with a new Source and a new Viz object, replacing the current ones. The update is done atomically, i.e.: the viz will be changed with the source, not before it.
     * This method will return a promise that will be resolved once the source and the visualization are validated.
     * The promise will be rejected if the validation fails, for example because the visualization expects a property name that is not present in the source.
     * The promise will be rejected also if this method is invoked again before the first promise is resolved.
     * If the promise is rejected the layer's source and viz won't be changed.
     * @param {carto.source.Base} source - The new Source object
     * @param {carto.Viz?} viz - Optional. The new Viz object
     * @memberof carto.Layer
     * @instance
     * @async
     * @api
     */
    async update (source, viz) {
        if (viz === undefined) {
            // Use current viz
            viz = this._viz;
        }
        this._checkSource(source);
        this._checkViz(viz);

        source = source._clone();
        this._atomicChangeUID++;
        const uid = this._atomicChangeUID;
        const loadImagesPromise = viz.loadImages();
        const metadata = await source.requestMetadata(viz);
        await loadImagesPromise;

        await this._context;
        if (this._atomicChangeUID > uid) {
            throw new _src_errors_carto_runtime_error__WEBPACK_IMPORTED_MODULE_7__["default"]('Another atomic change was done before this one committed (1)');
        }

        // Everything was ok => commit changes
        this.metadata = metadata;

        source.bindLayer(this._onDataframeAdded.bind(this), this._onDataLoaded.bind(this));

        if (this._source !== source) {
            this._freeSource();
        }

        this._source = source;
        this.requestData();

        viz.setDefaultsIfRequired(this.metadata.geomType);
        await this._context;
        if (this._atomicChangeUID > uid) {
            throw new _src_errors_carto_runtime_error__WEBPACK_IMPORTED_MODULE_7__["default"]('Another atomic change was done before this one committed (2)');
        }

        if (this._viz) {
            this._viz.onChange(null);
        }
        viz.setDefaultsIfRequired(this._renderLayer.type);
        this._viz = viz;
        viz.onChange(this._vizChanged.bind(this));
        this._compileShaders(viz, metadata);
        this._needRefresh();
    }

    /**
     * Blend the current viz with another viz.
     *
     * This allows smooth transforms between two different vizs.
     *
     * @example <caption> Smooth transition variating point size </caption>
     * // We create two different vizs varying the width
     * const viz0 = new carto.Viz({ width: 10 });
     * const viz1 = new carto.Viz({ width: 20 });
     * // Create a layer with the first viz
     * const layer = new carto.Layer('layer', source, viz0);
     * // We add the layer to the map, the points in this layer will have widh 10
     * layer.addTo(map, 'layer0');
     * // The points will be animated from 10px to 20px for 500ms.
     * layer.blendToViz(viz1, 500);
     *
     * @param {carto.Viz} viz - The final viz
     * @param {number} [duration=400] - The animation duration in milliseconds
     *
     * @memberof carto.Layer
     * @instance
     * @async
     * @api
     */
    async blendToViz (viz, ms = 400, interpolator = _renderer_viz_expressions__WEBPACK_IMPORTED_MODULE_8__["cubic"]) {
        this._checkViz(viz);
        viz.setDefaultsIfRequired(this.metadata.geomType);
        if (this._viz && !this._source.requiresNewMetadata(viz)) {
            Object.keys(this._viz.variables).map(varName => {
                viz.variables[varName] = this._viz.variables[varName];
            });

            viz.color._blendFrom(this._viz.color, ms, interpolator);
            viz.strokeColor._blendFrom(this._viz.strokeColor, ms, interpolator);
            viz.width._blendFrom(this._viz.width, ms, interpolator);
            viz.strokeWidth._blendFrom(this._viz.strokeWidth, ms, interpolator);
            viz.filter._blendFrom(this._viz.filter, ms, interpolator);
            // FIXME viz.symbol._blendFrom(this._viz.symbol, ms, interpolator);
            // FIXME viz.symbolPlacement._blendFrom(this._viz.symbolPlacement, ms, interpolator);
        }

        return this._vizChanged(viz).then(() => {
            if (this._viz) {
                this._viz.onChange(null);
            }
            viz.setDefaultsIfRequired(this._renderLayer.type);
            this._viz = viz;
            this._viz.onChange(this._vizChanged.bind(this));
        });
    }

    /**
     * Viz attached to this layer.
     *
     * Calls to `blendToViz` and `update` wont' update the viz until those calls "commit",
     * having performed and completed all asynchronous necessary sanity checks.
     *
     * @returns {carto.Viz} - Viz object currently bound to the layer
     * @memberof carto.Layer
     * @api
     */
    get viz () {
        return this._viz;
    }

    /**
     * Change layer visibility to visible
     *
     * @memberof carto.Layer
     * @instance
     * @api
     *
     * @fires updated
     */
    show () {
        this.map.setLayoutProperty(this.id, 'visibility', 'visible');
        this._visible = true;
        this.requestData();
    }

    /**
     * Change layer visibility to hidden
     *
     * @memberof carto.Layer
     * @instance
     * @api
     *
     * @fires updated
     */
    hide () {
        this.map.setLayoutProperty(this.id, 'visibility', 'none');
        this._visible = false;
        this._fire('updated');
    }

    async requestMetadata (viz) {
        viz = viz || this._viz;
        if (!viz) {
            return;
        }
        return this._source.requestMetadata(viz);
    }

    async requestData (matrix) {
        // Set renderer zoom and center
        this._setZoomCenter(matrix);

        if (!this.metadata || !this._visible) {
            return;
        }

        this._source.requestData(this._getZoom(), this._getViewport());
        this._fireUpdateOnNextRender = true;
    }

    hasDataframes () {
        return this._renderLayer.hasDataframes();
    }

    getNumFeatures () {
        return this._renderLayer.getNumFeatures();
    }

    getFeaturesAtPosition (pos) {
        return this._visible
            ? this._renderLayer.getFeaturesAtPosition(pos).map(this._addLayerIdToFeature.bind(this))
            : [];
    }

    isAnimated () {
        return this._viz && this._viz.isAnimated();
    }

    /**
     * Custom Layer API: `onAdd` function
     */
    onAdd (map, gl) {
        this.gl = gl;
        this.map = map;
        this.renderer = _getRenderer(map, gl);

        // Initialize render layer
        this._renderLayer.setRenderer(this.renderer);
        this._contextInitialize();
    }

    /**
     * Custom Layer API: `onRemove` function
     */
    onRemove (map, gl) {
    }

    /**
     * Custom Layer API: `prerender` function
     */
    prerender (gl, matrix) {
        // Call request data if the matrix has changed
        if (!_utils_util__WEBPACK_IMPORTED_MODULE_1__["default"].equalArrays(this._matrix, matrix)) {
            this._matrix = matrix;
            this.requestData(matrix);
        }
    }

    /**
     * Custom Layer API: `render` function
     */
    render (gl, matrix) {
        this._paintLayer();

        if (this.isAnimated()) {
            this._needRefresh();
        }
    }

    _paintLayer () {
        if (this._viz && this._viz.colorShader) {
            this._renderLayer.setViz(this._viz);
            this.renderer.renderLayer(this._renderLayer, {
                zoomLevel: this.map.getZoom()
            });
            const dataframesHaveChanged = !_utils_util__WEBPACK_IMPORTED_MODULE_1__["default"].isSetsEqual(this._oldDataframes, new Set(this._renderLayer.getActiveDataframes()));
            if (this.isAnimated() || this._fireUpdateOnNextRender || dataframesHaveChanged) {
                this._oldDataframes = new Set(this._renderLayer.getActiveDataframes());
                this._fireUpdateOnNextRender = false;
                this._fire('updated');
            }

            if (!this._isLoaded && this._state === 'dataLoaded') {
                this._isLoaded = true;
                this._fire('loaded');
            }
        }
    }

    _fire (eventType, eventData) {
        try {
            return this._emitter.emit(eventType, eventData);
        } catch (err) {
            console.error(err);
        }
    }

    /**
     * Callback executed when the client adds a new dataframe
     * @param {Dataframe} dataframe
     */
    _onDataframeAdded (dataframe) {
        dataframe.setFreeObserver(() => {
            this._needRefresh();
        });
        this._renderLayer.addDataframe(dataframe);
        if (this._viz) {
            this._viz.setDefaultsIfRequired(dataframe.type);
        }
        this._needRefresh();
    }

    _needRefresh () {
        this.map.triggerRepaint();
    }

    /**
     * Callback executed when the client finishes loading data
     */
    _onDataLoaded () {
        this._state = 'dataLoaded';
        this._needRefresh();
    }

    _addLayerIdToFeature (feature) {
        feature.layerId = this.id;
        return feature;
    }

    _compileShaders (viz, metadata) {
        viz.compileShaders(this.gl, metadata);
    }

    async _vizChanged (viz) {
        if (this._cache) {
            return this._cache;
        }
        this._cache = this._requestVizChanges(viz)
            .then(() => { this._cache = null; });
        return this._cache;
    }

    async _requestVizChanges (viz) {
        await this._context;
        if (!this._source) {
            throw new _src_errors_carto_validation_error__WEBPACK_IMPORTED_MODULE_6__["default"](`${_src_errors_carto_validation_error__WEBPACK_IMPORTED_MODULE_6__["CartoValidationTypes"].MISSING_REQUIRED} a 'source' is required before changing the viz.`);
        }

        const source = this._source;
        const loadImagesPromise = viz.loadImages();
        const metadata = await source.requestMetadata(viz);
        await loadImagesPromise;

        if (this._source !== source) {
            throw new _src_errors_carto_runtime_error__WEBPACK_IMPORTED_MODULE_7__["default"]('A source change was made before the metadata was retrieved, therefore, metadata is stale and it cannot be longer consumed');
        }
        this.metadata = metadata;
        this._compileShaders(viz, this.metadata);
        this._needRefresh();
        return this.requestData();
    }

    _checkId (id) {
        if (_utils_util__WEBPACK_IMPORTED_MODULE_1__["default"].isUndefined(id)) {
            throw new _src_errors_carto_validation_error__WEBPACK_IMPORTED_MODULE_6__["default"](`${_src_errors_carto_validation_error__WEBPACK_IMPORTED_MODULE_6__["CartoValidationTypes"].MISSING_REQUIRED} 'id'`);
        }
        if (!_utils_util__WEBPACK_IMPORTED_MODULE_1__["default"].isString(id)) {
            throw new _src_errors_carto_validation_error__WEBPACK_IMPORTED_MODULE_6__["default"](`${_src_errors_carto_validation_error__WEBPACK_IMPORTED_MODULE_6__["CartoValidationTypes"].INCORRECT_TYPE} 'id' property must be a string.`);
        }
        if (id === '') {
            throw new _src_errors_carto_validation_error__WEBPACK_IMPORTED_MODULE_6__["default"](`${_src_errors_carto_validation_error__WEBPACK_IMPORTED_MODULE_6__["CartoValidationTypes"].INCORRECT_VALUE} 'id' property must be not empty.`);
        }
    }

    _checkSource (source) {
        if (_utils_util__WEBPACK_IMPORTED_MODULE_1__["default"].isUndefined(source)) {
            throw new _src_errors_carto_validation_error__WEBPACK_IMPORTED_MODULE_6__["default"](`${_src_errors_carto_validation_error__WEBPACK_IMPORTED_MODULE_6__["CartoValidationTypes"].MISSING_REQUIRED} 'source'`);
        }
        if (!(source instanceof _sources_Base__WEBPACK_IMPORTED_MODULE_3__["default"])) {
            throw new _src_errors_carto_validation_error__WEBPACK_IMPORTED_MODULE_6__["default"](`${_src_errors_carto_validation_error__WEBPACK_IMPORTED_MODULE_6__["CartoValidationTypes"].INCORRECT_TYPE} The given object is not a valid 'source'. See "carto.source.Base".`);
        }
    }

    _checkViz (viz) {
        if (_utils_util__WEBPACK_IMPORTED_MODULE_1__["default"].isUndefined(viz)) {
            throw new _src_errors_carto_validation_error__WEBPACK_IMPORTED_MODULE_6__["default"](`${_src_errors_carto_validation_error__WEBPACK_IMPORTED_MODULE_6__["CartoValidationTypes"].MISSING_REQUIRED} 'viz'`);
        }
        if (!(viz instanceof _Viz__WEBPACK_IMPORTED_MODULE_2__["default"])) {
            throw new _src_errors_carto_validation_error__WEBPACK_IMPORTED_MODULE_6__["default"](`${_src_errors_carto_validation_error__WEBPACK_IMPORTED_MODULE_6__["CartoValidationTypes"].INCORRECT_TYPE} The given object is not a valid 'viz'. See "carto.Viz".`);
        }
        if (viz._boundLayer && viz._boundLayer !== this) {
            throw new _src_errors_carto_validation_error__WEBPACK_IMPORTED_MODULE_6__["default"](`${_src_errors_carto_validation_error__WEBPACK_IMPORTED_MODULE_6__["CartoValidationTypes"].INCORRECT_VALUE} The given Viz object is already bound to another layer. Vizs cannot be shared between different layers.`);
        }
    }

    _setZoomCenter (matrix) {
        let zoom;
        let center;

        if (matrix) {
            // Compute the zoom and center from the matrix.
            // This is a solution to avoid subscribing to map events and
            // make a better and efficient use of the Custom Layers interface.
            // TODO: the best solution is to use the matrix at the shader
            // level and remove the aspect and scale logic from the renderer
            zoom = _utils_util__WEBPACK_IMPORTED_MODULE_1__["default"].computeMatrixZoom(matrix);
            center = _utils_util__WEBPACK_IMPORTED_MODULE_1__["default"].computeMatrixCenter(matrix);
        } else {
            zoom = _utils_util__WEBPACK_IMPORTED_MODULE_1__["default"].computeMapZoom(this.map);
            center = _utils_util__WEBPACK_IMPORTED_MODULE_1__["default"].computeMapCenter(this.map);
        }

        this.renderer.setZoom(zoom);
        this.renderer.setCenter(center);
    }

    _getViewport () {
        return this.renderer.getBounds();
    }

    _getZoom () {
        return this.map.getZoom();
    }

    _freeSource () {
        if (this._source) {
            this._source.free();
        }
        this._renderLayer.freeDataframes();
    }
}

function _getRenderer (map, gl) {
    if (!renderers.get(map)) {
        const renderer = new _renderer_Renderer__WEBPACK_IMPORTED_MODULE_4__["default"]();
        renderer.initialize(gl);
        renderers.set(map, renderer);
    }
    return renderers.get(map);
}

/**
 *
 * LayerEvent objects are fired by {@link carto.Layer|Layer} objects.
 *
 * @typedef {object} LayerEvent
 * @api
 */

/**
 * A loaded event is fired once the layer is firstly loaded. Loaded events won't be fired after the initial load.
 *
 * @event loaded
 * @type {LayerEvent}
 * @api
 */

/**
 * Updated events are fired every time that viz variables could have changed, like: map panning, map zooming, source data loading or viz changes.
 * This is useful to create external widgets that are refreshed reactively to changes in the CARTO VL map.
 *
 * @event updated
 * @type {LayerEvent}
 * @api
*/


/***/ }),

/***/ "./src/Viz.js":
/*!********************!*\
  !*** ./src/Viz.js ***!
  \********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Viz; });
/* harmony import */ var _renderer_schema__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./renderer/schema */ "./src/renderer/schema.js");
/* harmony import */ var _renderer_shaders_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./renderer/shaders/index */ "./src/renderer/shaders/index.js");
/* harmony import */ var _renderer_shaders_shaderCompiler__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./renderer/shaders/shaderCompiler */ "./src/renderer/shaders/shaderCompiler.js");
/* harmony import */ var _renderer_viz_expressions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./renderer/viz/expressions */ "./src/renderer/viz/expressions.js");
/* harmony import */ var _renderer_viz_expressions_base__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./renderer/viz/expressions/base */ "./src/renderer/viz/expressions/base.js");
/* harmony import */ var _renderer_viz_expressions_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./renderer/viz/expressions/utils */ "./src/renderer/viz/expressions/utils.js");
/* harmony import */ var _renderer_viz_parser__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./renderer/viz/parser */ "./src/renderer/viz/parser.js");
/* harmony import */ var _utils_util__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./utils/util */ "./src/utils/util.js");
/* harmony import */ var _src_errors_carto_validation_error__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../src/errors/carto-validation-error */ "./src/errors/carto-validation-error.js");
/* harmony import */ var _src_errors_carto_runtime_error__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../src/errors/carto-runtime-error */ "./src/errors/carto-runtime-error.js");
/* harmony import */ var _renderer_shaders_geometry_point_pointVertexShader_glsl__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./renderer/shaders/geometry/point/pointVertexShader.glsl */ "./src/renderer/shaders/geometry/point/pointVertexShader.glsl");
/* harmony import */ var _renderer_shaders_geometry_point_pointVertexShader_glsl__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_renderer_shaders_geometry_point_pointVertexShader_glsl__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _renderer_shaders_geometry_point_pointFragmentShader_glsl__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./renderer/shaders/geometry/point/pointFragmentShader.glsl */ "./src/renderer/shaders/geometry/point/pointFragmentShader.glsl");
/* harmony import */ var _renderer_shaders_geometry_point_pointFragmentShader_glsl__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_renderer_shaders_geometry_point_pointFragmentShader_glsl__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _renderer_shaders_geometry_line_lineVertexShader_glsl__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./renderer/shaders/geometry/line/lineVertexShader.glsl */ "./src/renderer/shaders/geometry/line/lineVertexShader.glsl");
/* harmony import */ var _renderer_shaders_geometry_line_lineVertexShader_glsl__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_renderer_shaders_geometry_line_lineVertexShader_glsl__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _renderer_shaders_geometry_line_lineFragmentShader_glsl__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./renderer/shaders/geometry/line/lineFragmentShader.glsl */ "./src/renderer/shaders/geometry/line/lineFragmentShader.glsl");
/* harmony import */ var _renderer_shaders_geometry_line_lineFragmentShader_glsl__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_renderer_shaders_geometry_line_lineFragmentShader_glsl__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _renderer_shaders_geometry_polygon_polygonVertexShader_glsl__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./renderer/shaders/geometry/polygon/polygonVertexShader.glsl */ "./src/renderer/shaders/geometry/polygon/polygonVertexShader.glsl");
/* harmony import */ var _renderer_shaders_geometry_polygon_polygonVertexShader_glsl__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_renderer_shaders_geometry_polygon_polygonVertexShader_glsl__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _renderer_shaders_geometry_polygon_polygonFragmentShader_glsl__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./renderer/shaders/geometry/polygon/polygonFragmentShader.glsl */ "./src/renderer/shaders/geometry/polygon/polygonFragmentShader.glsl");
/* harmony import */ var _renderer_shaders_geometry_polygon_polygonFragmentShader_glsl__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_renderer_shaders_geometry_polygon_polygonFragmentShader_glsl__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _renderer_viz_expressions_SVG__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./renderer/viz/expressions/SVG */ "./src/renderer/viz/expressions/SVG.js");
/* harmony import */ var _renderer_viz_defaultSVGs__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./renderer/viz/defaultSVGs */ "./src/renderer/viz/defaultSVGs.js");
/* harmony import */ var _renderer_viz_expressions_Placement__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./renderer/viz/expressions/Placement */ "./src/renderer/viz/expressions/Placement.js");
/* harmony import */ var _renderer_viz_expressions_transformation_Translate__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./renderer/viz/expressions/transformation/Translate */ "./src/renderer/viz/expressions/transformation/Translate.js");





















const DEFAULT_COLOR_EXPRESSION = () => _markDefault(_renderer_viz_expressions__WEBPACK_IMPORTED_MODULE_3__["rgb"](0, 0, 0));
const DEFAULT_WIDTH_EXPRESSION = () => _markDefault(_renderer_viz_expressions__WEBPACK_IMPORTED_MODULE_3__["number"](1));
const DEFAULT_STROKE_COLOR_EXPRESSION = () => _markDefault(_renderer_viz_expressions__WEBPACK_IMPORTED_MODULE_3__["rgb"](0, 0, 0));
const DEFAULT_STROKE_WIDTH_EXPRESSION = () => _markDefault(_renderer_viz_expressions__WEBPACK_IMPORTED_MODULE_3__["number"](0));
const DEFAULT_ORDER_EXPRESSION = () => _markDefault(_renderer_viz_expressions__WEBPACK_IMPORTED_MODULE_3__["noOrder"]());
const DEFAULT_FILTER_EXPRESSION = () => _markDefault(_renderer_viz_expressions__WEBPACK_IMPORTED_MODULE_3__["constant"](1));
const DEFAULT_SYMBOL_EXPRESSION = () => _markDefault(new _renderer_viz_expressions_SVG__WEBPACK_IMPORTED_MODULE_16__["default"](_renderer_viz_defaultSVGs__WEBPACK_IMPORTED_MODULE_17__["default"].circle));
const DEFAULT_SYMBOLPLACEMENT_EXPRESSION = () => _markDefault(new _renderer_viz_expressions_Placement__WEBPACK_IMPORTED_MODULE_18__["default"](_renderer_viz_expressions__WEBPACK_IMPORTED_MODULE_3__["constant"](0), _renderer_viz_expressions__WEBPACK_IMPORTED_MODULE_3__["constant"](1)));
const DEFAULT_TRANSFORM_EXPRESSION = () => _markDefault(new _renderer_viz_expressions_transformation_Translate__WEBPACK_IMPORTED_MODULE_19__["default"](_renderer_viz_expressions__WEBPACK_IMPORTED_MODULE_3__["constant"](0), _renderer_viz_expressions__WEBPACK_IMPORTED_MODULE_3__["constant"](0)));
const DEFAULT_RESOLUTION = () => 1;

const MIN_RESOLUTION = 0;
const MAX_RESOLUTION = 256;

const SUPPORTED_PROPERTIES = [
    'color',
    'width',
    'strokeColor',
    'strokeWidth',
    'order',
    'filter',
    'symbol',
    'symbolPlacement',
    'transform',
    'resolution',
    'variables'
];

/**
 * A vizSpec object is used to create a {@link carto.Viz|Viz} and controlling multiple aspects.
 * For a better understanding we recommend reading the {@link https://carto.com/developers/carto-vl/guides/introduction-to-expressions/|Introduction to Expressions guide}
 * @typedef {object} VizSpec
 * @property {Color} color - fill color of points and polygons and color of lines, if used with `symbol` the color will override the original image RGB channels
 * @property {Number} width - fill diameter of points, thickness of lines, not applicable to polygons
 * @property {Color} strokeColor - stroke/border color of points and polygons, not applicable to lines
 * @property {Number} strokeWidth - stroke width of points and polygons, not applicable to lines
 * @property {Number} filter - filter features by removing from rendering and interactivity all the features that don't pass the test. In combination with {@link carto.expressions.animation} temporal maps can be created.
 * @property {Image} symbol - show an image instead in the place of points. There is a list of built-in icons you can use by default in the {@link https://carto.com/developers/carto-vl/reference/#icons|Icons section}
 * @property {Placement} symbolPlacement - when using `symbol`, offset to apply to the image
 * @property {Translation} transform - translation to apply to the features in pixels
 * @property {Order} order - rendering order of the features, only applicable to points. See {@link carto.expressions.asc}, {@link carto.expressions.desc} and {@link carto.expressions.noOrder}
 * @property {number} resolution - resolution of the property-aggregation functions, only applicable to points. Default resolution is 1. Custom values must be greater than 0 and lower than 256. A resolution of N means points are aggregated to grid cells NxN pixels. Unlinke {@link https://carto.com/developers/torque-js/guides/how-spatial-aggregation-works/|Torque resolution}, the aggregated points are placed in the centroid of the cluster, not in the center of the grid cell.
 * @property {object} variables - An object describing the variables used.
 * @api
 */

class Viz {
    /**
    * A Viz is one of the core elements of CARTO VL and defines how the data will be styled,
    * displayed and processed. A Viz instance can only be bound to one layer.
    *
    *
    * @param {string|VizSpec} definition - The definition of a viz. This parameter could be a `string` or a `VizSpec` object
    *
    * @example <caption> Create a viz with black dots using the string constructor </caption>
    * const viz = new carto.Viz(`
    *   color: rgb(0,0,0)
    * `);
    *
    * @example <caption> Create a viz with black dots using the vizSpec constructor </caption>
    * const viz = new carto.Viz({
    *   color: carto.expressions.rgb(0,0,0)
    * });
    *
    * @fires CartoError
    *
    * @constructor Viz
    * @memberof carto
    * @api
    *
    * @property {Color} color - fill color of points and polygons and color of lines, if used with `symbol` the color will override the original image RGB channels
    * @property {Number} width - fill diameter of points, thickness of lines, not applicable to polygons
    * @property {Color} strokeColor - stroke/border color of points and polygons, not applicable to lines
    * @property {Number} strokeWidth - stroke width of points and polygons, not applicable to lines
    * @property {Number} filter - filter features by removing from rendering and interactivity all the features that don't pass the test. In combination with {@link carto.expressions.animation} temporal maps can be created.
    * @property {Image} symbol - show an image instead in the place of points. There is a list of built-in icons you can use by default in the {@link https://carto.com/developers/carto-vl/reference/#icons|Icons section}
    * @property {Placement} symbolPlacement - when using `symbol`, offset to apply to the image
    * @property {Translation} transform - translation to apply to the features in pixels
    * @IGNOREproperty {Order} order - rendering order of the features, only applicable to points
    * @property {Order} order - rendering order of the features, only applicable to points. See {@link carto.expressions.asc}, {@link carto.expressions.desc} and {@link carto.expressions.noOrder}
    * @property {number} resolution - resolution of the property-aggregation functions, only applicable to points. Default resolution is 1. Custom values must be greater than 0 and lower than 256. A resolution of N means points are aggregated to grid cells NxN pixels. Unlinke {@link https://carto.com/developers/torque-js/guides/how-spatial-aggregation-works/|Torque resolution}, the aggregated points are placed in the centroid of the cluster, not in the center of the grid cell.
    * @property {object} variables - An object describing the variables used.
    *
    */
    constructor (definition) {
        const vizSpec = this._getVizDefinition(definition);
        this._checkVizSpec(vizSpec);

        Object.keys(vizSpec).forEach(property => {
            this._defineProperty(property, vizSpec[property]);
        });

        if (!Object.keys(vizSpec).includes('variables')) {
            this._defineProperty('variables', {});
        }

        this.updated = true;
        this._changeCallback = null;

        this._updateRootExpressionList();
        this._updateRootExpressions();

        this._resolveAliases();
        this._validateAliasDAG();
    }

    /**
     * Get the geometry type of the visualization.
     * @readonly
     * @api
     */
    get geometryType () {
        return this._geomType;
    }

    loadImages () {
        return Promise.all(this._getRootExpressions().map(expr => expr.loadImages()));
    }

    // Define a viz property, setting all the required getters, setters and creating a proxy for the variables object
    // These setters and the proxy allow us to re-render without requiring further action from the user
    _defineProperty (propertyName, propertyValue) {
        if (!SUPPORTED_PROPERTIES.includes(propertyName)) {
            return;
        }
        Object.defineProperty(this, propertyName, {
            get: () => this['_' + propertyName],
            set: expr => {
                if (propertyName !== 'resolution') {
                    expr = Object(_renderer_viz_expressions_utils__WEBPACK_IMPORTED_MODULE_5__["implicitCast"])(expr);
                }
                this['_' + propertyName] = expr;
                this._changed();
            }
        });

        let property = propertyValue;
        if (propertyName === 'variables') {
            let init = false;
            const handler = {
                get: (obj, prop) => {
                    return obj[prop];
                },
                set: (obj, prop, value) => {
                    value = Object(_renderer_viz_expressions_utils__WEBPACK_IMPORTED_MODULE_5__["implicitCast"])(value);
                    obj[prop] = value;
                    this['__cartovl_variable_' + prop] = value;
                    if (init) {
                        this._changed();
                    }
                    return true;
                }
            };
            property = new Proxy({}, handler);
            Object.keys(propertyValue).map(varName => {
                property[varName] = propertyValue[varName];
            });
            init = true;
        }
        this['_' + propertyName] = property;
    }

    _getRootExpressions () {
        return this._rootExpressions;
    }
    _getRootStyleExpressions () {
        return this._rootStyleExpressions;
    }

    _updateRootExpressions () {
        this._getRootExpressions().forEach(expr => {
            expr.parent = this;
            expr.notify = this._changed.bind(this);
        });
    }

    isAnimated () {
        return this._getRootStyleExpressions().some(expr => expr.isAnimated());
    }

    onChange (callback) {
        this._changeCallback = callback;
    }

    _changed () {
        this._updateRootExpressionList();
        this._resolveAliases();
        this._validateAliasDAG();
        if (this._changeCallback) {
            this._changeCallback(this);
        }
    }

    _updateRootExpressionList () {
        this._rootExpressions = [
            this.color,
            this.width,
            this.strokeColor,
            this.strokeWidth,
            this.order,
            this.filter,
            this.symbol,
            this.symbolPlacement,
            this.transform,
            ...Object.values(this.variables)
        ];
        this._rootStyleExpressions = [
            this.color,
            this.width,
            this.strokeColor,
            this.strokeWidth,
            this.order,
            this.filter,
            this.symbol,
            this.symbolPlacement,
            this.transform
        ];
    }

    getMinimumNeededSchema () {
        const exprs = this._getRootExpressions().filter(x => x && x._getMinimumNeededSchema);
        return exprs.map(expr => expr._getMinimumNeededSchema()).reduce(_renderer_schema__WEBPACK_IMPORTED_MODULE_0__["default"].union, _renderer_schema__WEBPACK_IMPORTED_MODULE_0__["default"].IDENTITY);
    }

    setDefaultsIfRequired (geomType) {
        this._geomType = geomType;
        if (this._appliedDefaults) {
            return;
        }
        let defaults = this._getDefaultGeomStyle(geomType);
        if (defaults) {
            this._appliedDefaults = true;
            if (this.color.default) {
                this.color = defaults.COLOR_EXPRESSION();
            }
            if (this.width.default) {
                this.width = defaults.WIDTH_EXPRESSION();
            }
            if (this.strokeColor.default) {
                this.strokeColor = defaults.STROKE_COLOR_EXPRESSION();
            }
            if (this.strokeWidth.default) {
                this.strokeWidth = defaults.STROKE_WIDTH_EXPRESSION();
            }
            this._updateRootExpressions();
        }
    }

    _getDefaultGeomStyle (geomType) {
        if (geomType === 'point') {
            return {
                COLOR_EXPRESSION: () => _markDefault(_renderer_viz_expressions__WEBPACK_IMPORTED_MODULE_3__["hex"]('#EE4D5A')),
                WIDTH_EXPRESSION: () => _markDefault(_renderer_viz_expressions__WEBPACK_IMPORTED_MODULE_3__["number"](7)),
                STROKE_COLOR_EXPRESSION: () => _markDefault(_renderer_viz_expressions__WEBPACK_IMPORTED_MODULE_3__["hex"]('#FFF')),
                STROKE_WIDTH_EXPRESSION: () => _markDefault(_renderer_viz_expressions__WEBPACK_IMPORTED_MODULE_3__["number"](1))
            };
        } else if (geomType === 'line') {
            return {
                COLOR_EXPRESSION: () => _markDefault(_renderer_viz_expressions__WEBPACK_IMPORTED_MODULE_3__["hex"]('#4CC8A3')),
                WIDTH_EXPRESSION: () => _markDefault(_renderer_viz_expressions__WEBPACK_IMPORTED_MODULE_3__["number"](1.5)),
                STROKE_COLOR_EXPRESSION: () => _markDefault(_renderer_viz_expressions__WEBPACK_IMPORTED_MODULE_3__["hex"]('#FFF')), // Not used in lines
                STROKE_WIDTH_EXPRESSION: () => _markDefault(_renderer_viz_expressions__WEBPACK_IMPORTED_MODULE_3__["number"](1)) // Not used in lines
            };
        } else if (geomType === 'polygon') {
            return {
                COLOR_EXPRESSION: () => _markDefault(_renderer_viz_expressions__WEBPACK_IMPORTED_MODULE_3__["hex"]('#826DBA')),
                WIDTH_EXPRESSION: () => _markDefault(_renderer_viz_expressions__WEBPACK_IMPORTED_MODULE_3__["number"](1)), // Not used in polygons
                STROKE_COLOR_EXPRESSION: () => _markDefault(_renderer_viz_expressions__WEBPACK_IMPORTED_MODULE_3__["hex"]('#FFF')),
                STROKE_WIDTH_EXPRESSION: () => _markDefault(_renderer_viz_expressions__WEBPACK_IMPORTED_MODULE_3__["number"](1))
            };
        }
    }

    _resolveAliases () {
        this._getRootExpressions().forEach(expr => {
            expr._resolveAliases(this.variables);
        });
    }

    _validateAliasDAG () {
        const permanentMarkedSet = new Set();
        const temporarilyMarkedSet = new Set();
        const visit = node => {
            if (permanentMarkedSet.has(node)) {
                // Node is already a processed dependency
                return;
            }
            if (temporarilyMarkedSet.has(node)) {
                throw new _src_errors_carto_runtime_error__WEBPACK_IMPORTED_MODULE_9__["default"]('Viz contains a circular dependency');
            }
            temporarilyMarkedSet.add(node);
            node._getDependencies().forEach(visit);
            permanentMarkedSet.add(node);
        };
        const unmarked = this._getRootExpressions().map(
            expr => expr._getDependencies()
        ).reduce((a, b) =>
            [...a, ...b]
            , []);
        while (unmarked.length) {
            visit(unmarked.pop());
        }
    }

    compileShaders (gl, metadata) {
        this._getRootExpressions().forEach(expr => expr._bindMetadata(metadata));
        checkVizPropertyTypes(this);

        this.colorShader = Object(_renderer_shaders_shaderCompiler__WEBPACK_IMPORTED_MODULE_2__["compileShader"])(gl, _renderer_shaders_index__WEBPACK_IMPORTED_MODULE_1__["default"].styler.colorShaderGLSL, { color: this.color }, this);
        this.widthShader = Object(_renderer_shaders_shaderCompiler__WEBPACK_IMPORTED_MODULE_2__["compileShader"])(gl, _renderer_shaders_index__WEBPACK_IMPORTED_MODULE_1__["default"].styler.widthShaderGLSL, { width: this.width }, this);
        this.strokeColorShader = Object(_renderer_shaders_shaderCompiler__WEBPACK_IMPORTED_MODULE_2__["compileShader"])(gl, _renderer_shaders_index__WEBPACK_IMPORTED_MODULE_1__["default"].styler.colorShaderGLSL, { color: this.strokeColor }, this);
        this.strokeWidthShader = Object(_renderer_shaders_shaderCompiler__WEBPACK_IMPORTED_MODULE_2__["compileShader"])(gl, _renderer_shaders_index__WEBPACK_IMPORTED_MODULE_1__["default"].styler.widthShaderGLSL, { width: this.strokeWidth }, this);
        this.filterShader = Object(_renderer_shaders_shaderCompiler__WEBPACK_IMPORTED_MODULE_2__["compileShader"])(gl, _renderer_shaders_index__WEBPACK_IMPORTED_MODULE_1__["default"].styler.filterShaderGLSL, { filter: this.filter }, this);

        if (!this.symbol.default) {
            this.symbolShader = Object(_renderer_shaders_shaderCompiler__WEBPACK_IMPORTED_MODULE_2__["compileShader"])(gl, _renderer_shaders_index__WEBPACK_IMPORTED_MODULE_1__["default"].symbolizer.symbolShaderGLSL, {
                symbol: this.symbol,
                symbolPlacement: this.symbolPlacement,
                transform: this.transform
            }, this);
        }

        if (!this._geomType || this._geomType === 'point') {
            this.pointShader = Object(_renderer_shaders_shaderCompiler__WEBPACK_IMPORTED_MODULE_2__["compileShader"])(gl,
                { vertexShader: _renderer_shaders_geometry_point_pointVertexShader_glsl__WEBPACK_IMPORTED_MODULE_10___default.a, fragmentShader: _renderer_shaders_geometry_point_pointFragmentShader_glsl__WEBPACK_IMPORTED_MODULE_11___default.a },
                { transform: this.transform }, this);
        }
        if (!this._geomType || this._geomType === 'line') {
            this.lineShader = Object(_renderer_shaders_shaderCompiler__WEBPACK_IMPORTED_MODULE_2__["compileShader"])(gl,
                { vertexShader: _renderer_shaders_geometry_line_lineVertexShader_glsl__WEBPACK_IMPORTED_MODULE_12___default.a, fragmentShader: _renderer_shaders_geometry_line_lineFragmentShader_glsl__WEBPACK_IMPORTED_MODULE_13___default.a },
                { transform: this.transform }, this);
        }
        if (!this._geomType || this._geomType === 'polygon') {
            this.polygonShader = Object(_renderer_shaders_shaderCompiler__WEBPACK_IMPORTED_MODULE_2__["compileShader"])(gl,
                { vertexShader: _renderer_shaders_geometry_polygon_polygonVertexShader_glsl__WEBPACK_IMPORTED_MODULE_14___default.a, fragmentShader: _renderer_shaders_geometry_polygon_polygonFragmentShader_glsl__WEBPACK_IMPORTED_MODULE_15___default.a },
                { transform: this.transform }, this);
        }
    }

    replaceChild (toReplace, replacer) {
        if (Object.values(this.variables).includes(toReplace)) {
            const varName = Object.keys(this.variables).find(varName => this.variables[varName] === toReplace);
            this.variables[varName] = replacer;
            replacer.parent = this;
            replacer.notify = toReplace.notify;
        } else if (toReplace === this.color) {
            this.color = replacer;
            replacer.parent = this;
            replacer.notify = toReplace.notify;
        } else if (toReplace === this.width) {
            this.width = replacer;
            replacer.parent = this;
            replacer.notify = toReplace.notify;
        } else if (toReplace === this.strokeColor) {
            this.strokeColor = replacer;
            replacer.parent = this;
            replacer.notify = toReplace.notify;
        } else if (toReplace === this.strokeWidth) {
            this.strokeWidth = replacer;
            replacer.parent = this;
            replacer.notify = toReplace.notify;
        } else if (toReplace === this.filter) {
            this.filter = replacer;
            replacer.parent = this;
            replacer.notify = toReplace.notify;
        } else if (toReplace === this.symbol) {
            this.symbol = replacer;
            replacer.parent = this;
            replacer.notify = toReplace.notify;
        } else if (toReplace === this.symbolPlacement) {
            this.symbolPlacement = replacer;
            replacer.parent = this;
            replacer.notify = toReplace.notify;
        } else if (toReplace === this.transform) {
            this.transform = replacer;
            replacer.parent = this;
            replacer.notify = toReplace.notify;
        } else {
            throw new _src_errors_carto_runtime_error__WEBPACK_IMPORTED_MODULE_9__["default"]('No child found');
        }
    }

    /**
     * This function checks the input parameter `definition` returning always an object.
     * If the `definition` is an object it returns the same object.
     * If the `definition` is a string it returns the parsed string as an object.
     * Otherwise it throws an error.
     *
     * @param  {string|object} definition
     * @return {VizSpec}
     */
    _getVizDefinition (definition) {
        if (_utils_util__WEBPACK_IMPORTED_MODULE_7__["default"].isUndefined(definition)) {
            return this._setDefaults({});
        }
        if (_utils_util__WEBPACK_IMPORTED_MODULE_7__["default"].isObject(definition)) {
            return this._setDefaults(definition);
        }
        if (_utils_util__WEBPACK_IMPORTED_MODULE_7__["default"].isString(definition)) {
            return this._setDefaults(Object(_renderer_viz_parser__WEBPACK_IMPORTED_MODULE_6__["parseVizDefinition"])(definition));
        }
        throw new _src_errors_carto_validation_error__WEBPACK_IMPORTED_MODULE_8__["default"](`${_src_errors_carto_validation_error__WEBPACK_IMPORTED_MODULE_8__["CartoValidationTypes"].INCORRECT_VALUE} viz 'definition' should be a vizSpec object or a valid viz string.`);
    }

    /**
     * Add default values to a vizSpec object.
     *
     * @param {VizSpec} vizSpec
     * @return {VizSpec}
     */
    _setDefaults (vizSpec) {
        if (_utils_util__WEBPACK_IMPORTED_MODULE_7__["default"].isUndefined(vizSpec.color)) {
            const NO_OVERRIDE_COLOR = _renderer_viz_expressions__WEBPACK_IMPORTED_MODULE_3__["rgba"](0, 0, 0, 0); // TODO move to contant expressions
            vizSpec.color = _utils_util__WEBPACK_IMPORTED_MODULE_7__["default"].isUndefined(vizSpec.symbol) ? DEFAULT_COLOR_EXPRESSION() : NO_OVERRIDE_COLOR;
        }
        if (_utils_util__WEBPACK_IMPORTED_MODULE_7__["default"].isUndefined(vizSpec.width)) {
            vizSpec.width = DEFAULT_WIDTH_EXPRESSION();
        }
        if (_utils_util__WEBPACK_IMPORTED_MODULE_7__["default"].isUndefined(vizSpec.strokeColor)) {
            vizSpec.strokeColor = DEFAULT_STROKE_COLOR_EXPRESSION();
        }
        if (_utils_util__WEBPACK_IMPORTED_MODULE_7__["default"].isUndefined(vizSpec.strokeWidth)) {
            vizSpec.strokeWidth = DEFAULT_STROKE_WIDTH_EXPRESSION();
        }
        if (_utils_util__WEBPACK_IMPORTED_MODULE_7__["default"].isUndefined(vizSpec.order)) {
            vizSpec.order = DEFAULT_ORDER_EXPRESSION();
        }
        if (_utils_util__WEBPACK_IMPORTED_MODULE_7__["default"].isUndefined(vizSpec.filter)) {
            vizSpec.filter = DEFAULT_FILTER_EXPRESSION();
        }
        if (_utils_util__WEBPACK_IMPORTED_MODULE_7__["default"].isUndefined(vizSpec.resolution)) {
            vizSpec.resolution = DEFAULT_RESOLUTION();
        }
        if (_utils_util__WEBPACK_IMPORTED_MODULE_7__["default"].isUndefined(vizSpec.symbol)) {
            vizSpec.symbol = DEFAULT_SYMBOL_EXPRESSION();
        }
        if (_utils_util__WEBPACK_IMPORTED_MODULE_7__["default"].isUndefined(vizSpec.symbolPlacement)) {
            vizSpec.symbolPlacement = DEFAULT_SYMBOLPLACEMENT_EXPRESSION();
        }
        if (_utils_util__WEBPACK_IMPORTED_MODULE_7__["default"].isUndefined(vizSpec.transform)) {
            vizSpec.transform = DEFAULT_TRANSFORM_EXPRESSION();
        }
        vizSpec.variables = vizSpec.variables || {};
        return vizSpec;
    }

    _checkVizSpec (vizSpec) {
        // Apply implicit cast to numeric style properties
        vizSpec.width = Object(_renderer_viz_expressions_utils__WEBPACK_IMPORTED_MODULE_5__["implicitCast"])(vizSpec.width);
        vizSpec.strokeWidth = Object(_renderer_viz_expressions_utils__WEBPACK_IMPORTED_MODULE_5__["implicitCast"])(vizSpec.strokeWidth);
        vizSpec.symbolPlacement = Object(_renderer_viz_expressions_utils__WEBPACK_IMPORTED_MODULE_5__["implicitCast"])(vizSpec.symbolPlacement);
        vizSpec.transform = Object(_renderer_viz_expressions_utils__WEBPACK_IMPORTED_MODULE_5__["implicitCast"])(vizSpec.transform);
        vizSpec.symbol = Object(_renderer_viz_expressions_utils__WEBPACK_IMPORTED_MODULE_5__["implicitCast"])(vizSpec.symbol);
        vizSpec.filter = Object(_renderer_viz_expressions_utils__WEBPACK_IMPORTED_MODULE_5__["implicitCast"])(vizSpec.filter);

        if (!_utils_util__WEBPACK_IMPORTED_MODULE_7__["default"].isNumber(vizSpec.resolution)) {
            throw new _src_errors_carto_validation_error__WEBPACK_IMPORTED_MODULE_8__["default"](`${_src_errors_carto_validation_error__WEBPACK_IMPORTED_MODULE_8__["CartoValidationTypes"].INCORRECT_TYPE} 'resolution' property must be a number.`);
        }
        if (vizSpec.resolution <= MIN_RESOLUTION) {
            throw new _src_errors_carto_validation_error__WEBPACK_IMPORTED_MODULE_8__["default"](`${_src_errors_carto_validation_error__WEBPACK_IMPORTED_MODULE_8__["CartoValidationTypes"].INCORRECT_VALUE} 'resolution' must be greater than ${MIN_RESOLUTION}.`);
        }
        if (vizSpec.resolution >= MAX_RESOLUTION) {
            throw new _src_errors_carto_validation_error__WEBPACK_IMPORTED_MODULE_8__["default"](`${_src_errors_carto_validation_error__WEBPACK_IMPORTED_MODULE_8__["CartoValidationTypes"].INCORRECT_VALUE} 'resolution' must be less than ${MAX_RESOLUTION}.`);
        }

        const toCheck = ['color', 'strokeColor', 'width', 'strokeWidth', 'order', 'filter',
            'symbol', 'symbolPlacement', 'transform'];
        toCheck.forEach((parameter) => {
            if (!(vizSpec[parameter] instanceof _renderer_viz_expressions_base__WEBPACK_IMPORTED_MODULE_4__["default"])) {
                throw new _src_errors_carto_validation_error__WEBPACK_IMPORTED_MODULE_8__["default"](`${_src_errors_carto_validation_error__WEBPACK_IMPORTED_MODULE_8__["CartoValidationTypes"].INCORRECT_TYPE} '${parameter}' parameter is not a valid viz Expresion.`);
            }
        });

        for (let key in vizSpec) {
            if (SUPPORTED_PROPERTIES.indexOf(key) === -1) {
                console.warn(`Property '${key}' is not supported`);
            }
        }
    }

    /**
     * Stringify the visualization
     *
     * @returns {string}
     * @memberof carto
     * @api
     */
    toString () {
        const variables = Object.keys(this.variables).map(varName =>
            `@${varName}: ${this.variables[varName].toString()}\n`
        );
        return `color: ${this.color.toString()}
            strokeColor: ${this.strokeColor.toString()}
            width: ${this.width.toString()}
            strokeWidth: ${this.strokeWidth.toString()}
            filter: ${this.filter.toString()}
            order: ${this.order.toString()}
            symbol: ${this.symbol.toString()}
            symbolPlacement: ${this.symbolPlacement.toString()}
            offset: ${this.offset.toString()}
            ${variables}`.replace(/ {4}/g, '');
    }
}

function checkVizPropertyTypes (viz) {
    const expectedTypePerProperty = {
        color: 'color',
        strokeColor: 'color',
        width: 'number',
        strokeWidth: 'number',
        order: 'orderer',
        filter: 'number',
        symbol: 'image',
        symbolPlacement: 'placement',
        transform: 'transformation'
    };

    Object.keys(expectedTypePerProperty).forEach((property) => {
        const currentType = viz[property].type;
        const expected = expectedTypePerProperty[property];
        if (currentType !== expected) {
            throw new _src_errors_carto_validation_error__WEBPACK_IMPORTED_MODULE_8__["default"](
                `${_src_errors_carto_validation_error__WEBPACK_IMPORTED_MODULE_8__["CartoValidationTypes"].INCORRECT_TYPE} Viz property '${property}': must be of type '${expected}' but it was of type '${currentType}'`
            );
        }
    });
}

/**
 * Mark default expressions to apply the style defaults for each
 * geometry (point, line, polygon) when available.
 */
function _markDefault (expression) {
    expression.default = true;
    return expression;
}


/***/ }),

/***/ "./src/client/rsys.js":
/*!****************************!*\
  !*** ./src/client/rsys.js ***!
  \****************************/
/*! exports provided: wToR, rTiles, getRsysFromTile, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "wToR", function() { return wToR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rTiles", function() { return rTiles; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getRsysFromTile", function() { return getRsysFromTile; });
/**
 * An RSys defines a local coordinate system that maps the coordinates
 * in the range -1 <= x <= +1; -1 <= y <= +1 to an arbitrary rectangle
 * in an external coordinate system. (e.g. Dataframe coordinates to World coordinates)
 * It is the combination of a translation and anisotropic scaling.
 * @typedef {object} RSys - Renderer relative coordinate system
 * @property {RPoint} center - Position of the local system in external coordinates
 * @property {number} scale - Y-scale (local Y-distance / external Y-distance)
*/

/*
 * Random notes
 *
 * We can redefine Dataframe to use a Rsys instead of center, scale
 * and we can use an Rsys for the Renderer's canvas.
 *
 * Some interesting World coordinate systems:
 *
 * WM (Webmercator): represents a part of the world (excluding polar regions)
 * with coordinates in the range +/-WM_R for both X and Y. (positive orientation: E,N)
 *
 * NWMC (Normalized Webmercator Coordinates): represents the Webmercator *square*
 * with coordinates in the range +/-1. Results from dividing Webmercator coordinates
 * by WM_R. (positive orientation: E,N)
 *
 * TC (Tile coordinates): integers in [0, 2^Z) for zoom level Z. Example: the tile 0/0/0 (zoom, x, y) is the root tile.
 * (positive orientation: E,S)
 *
 * An RSys's rectangle (its bounds) is the area covered by the local coordinates in
 * the range +/-1.
 *
 * When an RSys external coordinate system is WM or NWMC, we can compute:
 * * Minimum zoom level for which tiles are no larger than the RSys rectangle:
 *   Math.ceil(Math.log2(1 / r.scale));
 * * Maximum zoom level for which tiles are no smaller than the rectangle:
 *   Math.floor(Math.log2(1 / r.scale));
 * (note that 1 / r.scale is the fraction of the World height that the local rectangle's height represents)
 *
 * We'll use the term World coordinates below for the *external* reference system
 * of an RSys (usually NWMC).
 */

/* eslint no-unused-vars: ["off"] */

/**
 * R coordinates to World
 * @param {RSys} r - ref. of the passed coordinates
 * @param {number} x - x coordinate in r
 * @param {number} y - y coordinate in r
 * @return {RPoint} World coordinates
 */
function rToW (r, x, y) {
    return { x: x * r.scale + r.center.x, y: y * r.scale + r.center.y };
}

/**
 * World coordinates to local RSys
 * @param {number} x - x W-coordinate
 * @param {number} y - y W-coordinate
 * @param {RSys} r - target ref. system
 * @return {RPoint} R coordinates
 */
function wToR (x, y, r) {
    return { x: (x - r.center.x) / r.scale, y: (y - r.center.y) / r.scale };
}

/**
 * RSys of a tile (mapping local tile coordinates in +/-1 to NWMC)
 * @param {number} x - TC x coordinate
 * @param {number} y - TC y coordinate
 * @param {number} z - Tile zoom level
 * @return {RSys}
 */
function tileRsys (x, y, z) {
    let max = Math.pow(2, z);
    return { scale: 1 / max, center: { x: 2 * (x + 0.5) / max - 1, y: 1 - 2 * (y + 0.5) / max } };
}

/**
 * TC tiles that intersect the local rectangle of an RSys
 * (with the largest tile size no larger than the rectangle)
 * @param {RSys} rsys
 * @return {Array} - array of TC tiles {x, y, z}
 */
function rTiles (zoom, bounds, viewportZoomToSourceZoom = Math.ceil) {
    return wRectangleTiles(viewportZoomToSourceZoom(zoom), bounds);
}

/**
 * TC tiles of a given zoom level that intersect a W rectangle
 * @param {number} z
 * @param {Array} - rectangle extents [minx, miny, maxx, maxy]
 * @return {Array} - array of TC tiles {x, y, z}
 */
function wRectangleTiles (z, wr) {
    const [wMinx, wMiny, wMaxx, wMaxy] = wr;
    const n = (1 << z); // for 0 <= z <= 30 equals Math.pow(2, z)

    const clamp = x => Math.min(Math.max(x, 0), n - 1);
    // compute tile coordinate ranges
    const tMinx = clamp(Math.floor(n * (wMinx + 1) * 0.5));
    const tMaxx = clamp(Math.ceil(n * (wMaxx + 1) * 0.5) - 1);
    const tMiny = clamp(Math.floor(n * (1 - wMaxy) * 0.5));
    const tMaxy = clamp(Math.ceil(n * (1 - wMiny) * 0.5) - 1);
    let tiles = [];
    for (let x = tMinx; x <= tMaxx; ++x) {
        for (let y = tMiny; y <= tMaxy; ++y) {
            tiles.push({ x: x, y: y, z: z });
        }
    }
    return tiles;
}

/**
 * Get the Rsys of a tile where the Rsys's center is the tile center and the Rsys's scale is the tile extent.
 * @param {*} x
 * @param {*} y
 * @param {*} z
 * @returns {RSys}
 */
function getRsysFromTile (x, y, z) {
    return {
        center: {
            x: ((x + 0.5) / Math.pow(2, z)) * 2.0 - 1,
            y: (1.0 - (y + 0.5) / Math.pow(2, z)) * 2.0 - 1.0
        },
        scale: 1 / Math.pow(2, z)
    };
}

/* harmony default export */ __webpack_exports__["default"] = ({ rTiles, getRsysFromTile, wToR });


/***/ }),

/***/ "./src/client/windshaft-filtering.js":
/*!*******************************************!*\
  !*** ./src/client/windshaft-filtering.js ***!
  \*******************************************/
/*! exports provided: getFiltering, getSQLWhere, getAggregationFilters */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getFiltering", function() { return getFiltering; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSQLWhere", function() { return getSQLWhere; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAggregationFilters", function() { return getAggregationFilters; });
/* harmony import */ var _renderer_viz_expressions_binary__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../renderer/viz/expressions/binary */ "./src/renderer/viz/expressions/binary.js");
/* harmony import */ var _renderer_viz_expressions_belongs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../renderer/viz/expressions/belongs */ "./src/renderer/viz/expressions/belongs.js");
/* harmony import */ var _renderer_viz_expressions_between__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../renderer/viz/expressions/between */ "./src/renderer/viz/expressions/between.js");
/* harmony import */ var _renderer_viz_expressions_basic_property__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../renderer/viz/expressions/basic/property */ "./src/renderer/viz/expressions/basic/property.js");
/* harmony import */ var _renderer_viz_expressions_blend__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../renderer/viz/expressions/blend */ "./src/renderer/viz/expressions/blend.js");
/* harmony import */ var _renderer_viz_expressions_transition__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../renderer/viz/expressions/transition */ "./src/renderer/viz/expressions/transition.js");
/* harmony import */ var _renderer_viz_expressions_basic_number__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../renderer/viz/expressions/basic/number */ "./src/renderer/viz/expressions/basic/number.js");
/* harmony import */ var _renderer_viz_expressions_basic_constant__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../renderer/viz/expressions/basic/constant */ "./src/renderer/viz/expressions/basic/constant.js");
/* harmony import */ var _renderer_viz_expressions_basic_category__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../renderer/viz/expressions/basic/category */ "./src/renderer/viz/expressions/basic/category.js");
/* harmony import */ var _renderer_viz_expressions_aggregation_cluster_ClusterAvg__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../renderer/viz/expressions/aggregation/cluster/ClusterAvg */ "./src/renderer/viz/expressions/aggregation/cluster/ClusterAvg.js");
/* harmony import */ var _renderer_viz_expressions_aggregation_cluster_ClusterMax__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../renderer/viz/expressions/aggregation/cluster/ClusterMax */ "./src/renderer/viz/expressions/aggregation/cluster/ClusterMax.js");
/* harmony import */ var _renderer_viz_expressions_aggregation_cluster_ClusterMin__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../renderer/viz/expressions/aggregation/cluster/ClusterMin */ "./src/renderer/viz/expressions/aggregation/cluster/ClusterMin.js");
/* harmony import */ var _renderer_viz_expressions_aggregation_cluster_ClusterMode__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../renderer/viz/expressions/aggregation/cluster/ClusterMode */ "./src/renderer/viz/expressions/aggregation/cluster/ClusterMode.js");
/* harmony import */ var _renderer_viz_expressions_aggregation_cluster_ClusterSum__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../renderer/viz/expressions/aggregation/cluster/ClusterSum */ "./src/renderer/viz/expressions/aggregation/cluster/ClusterSum.js");
/* harmony import */ var _renderer_schema__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../renderer/schema */ "./src/renderer/schema.js");

















class AggregationFiltering {
    /**
     * Generate aggregation filters:
     * This extracts, from the vizs filters, those compatible to be
     * executed through the Maps API aggregation API.
     * The extracted filters are in the format admitted by the Maps API
     * `filters` parameter.
     * Filters affecting dimensions (non-aggregated columns) can optionally
     * be extracted too, but it is more efficient to not do so and apply those
     * filters before aggregation.
     */
    constructor (options) {
        // exclusive mode: aggregate filters don't include pre-aggregate conditions (dimensions)
        // in that case pre-aggregate filters should always be applied, even with aggregation
        // (which can be more efficient)
        this._onlyAggregateFilters = options.exclusive;
    }

    // return (partial) filters as an object (JSON) in the format of the Maps API aggregation interface
    getFilters (vizFilter) {
        let filters = {};
        let filterList = this._and(vizFilter).filter(Boolean);
        for (let p of filterList) {
            let name = p.property;
            let existingFilter = filters[name];
            if (existingFilter) {
                if (this._compatibleAndFilters(existingFilter, p.filters)) {
                    // combine inequalities into a range
                    Object.assign(existingFilter[0], p.filters[0]);
                } else {
                    // can't AND-combine filters for the same property
                    return {};
                }
            } else {
                filters[name] = p.filters;
            }
        }
        return filters;
    }

    _and (f) {
        if (f.isA(_renderer_viz_expressions_binary__WEBPACK_IMPORTED_MODULE_0__["And"])) {
            return this._and(f.a).concat(this._and(f.b)).filter(Boolean);
        }
        return [this._or(f)].filter(Boolean);
    }

    _or (f) {
        if (f.isA(_renderer_viz_expressions_binary__WEBPACK_IMPORTED_MODULE_0__["Or"])) {
            let a = this._basicCondition(f.a);
            let b = this._basicCondition(f.b);
            if (a && b) {
                if (a.property === b.property) {
                    a.filters = a.filters.concat(b.filters);
                    return a;
                }
            }
        }
        return this._basicCondition(f);
    }

    _removeBlend (f) {
        if (f.isA(_renderer_viz_expressions_blend__WEBPACK_IMPORTED_MODULE_4__["default"]) && f.originalMix.isA(_renderer_viz_expressions_transition__WEBPACK_IMPORTED_MODULE_5__["default"])) {
            return f.b;
        }
        return f;
    }

    _basicCondition (f) {
        f = this._removeBlend(f);
        return this._between(f) ||
            this._equals(f) || this._notEquals(f) ||
            this._lessThan(f) || this._lessThanOrEqualTo(f) ||
            this._greaterThan(f) || this._greaterThanOrEqualTo(f) ||
            this._in(f) || this._notIn(f);
    }

    _value (f) {
        f = this._removeBlend(f);
        if (f.isA(_renderer_viz_expressions_basic_number__WEBPACK_IMPORTED_MODULE_6__["default"]) || f.isA(_renderer_viz_expressions_basic_constant__WEBPACK_IMPORTED_MODULE_7__["default"]) || f.isA(_renderer_viz_expressions_basic_category__WEBPACK_IMPORTED_MODULE_8__["default"])) {
            return f.expr;
        }
    }

    _between (f) {
        if (f.isA(_renderer_viz_expressions_between__WEBPACK_IMPORTED_MODULE_2__["default"])) {
            let p = this._aggregation(f.input);
            let lo = p && this._value(f.lowerLimit);
            let hi = p && lo && this._value(f.upperLimit);
            if (hi) {
                p.filters.push({
                    greater_than_or_equal_to: lo,
                    less_than_or_equal_to: hi
                });
                return p;
            }
        }
    }

    _in (f) {
        if (f.isA(_renderer_viz_expressions_belongs__WEBPACK_IMPORTED_MODULE_1__["In"])) {
            let p = this._aggregation(f.input);
            let values = f.list.elems.map(c => this._value(c)).filter(v => v !== null);
            if (p && values.length > 0 && values.length === f.list.elems.length) {
                p.filters.push({
                    in: values
                });
                return p;
            }
        }
    }

    _notIn (f) {
        if (f.isA(_renderer_viz_expressions_belongs__WEBPACK_IMPORTED_MODULE_1__["Nin"])) {
            let p = this._aggregation(f.input);
            let values = f.list.elems.map(c => this._value(c)).filter(v => v !== null);
            if (p && values.length > 0 && values.length === f.list.elems.length) {
                p.filters.push({
                    not_in: values
                });
                return p;
            }
        }
    }

    _equals (f) {
        return this._cmpOp(f, _renderer_viz_expressions_binary__WEBPACK_IMPORTED_MODULE_0__["Equals"], 'equal');
    }

    _notEquals (f) {
        return this._cmpOp(f, _renderer_viz_expressions_binary__WEBPACK_IMPORTED_MODULE_0__["NotEquals"], 'not_equal');
    }

    _lessThan (f) {
        return this._cmpOp(f, _renderer_viz_expressions_binary__WEBPACK_IMPORTED_MODULE_0__["LessThan"], 'less_than', 'greater_than');
    }

    _lessThanOrEqualTo (f) {
        return this._cmpOp(f, _renderer_viz_expressions_binary__WEBPACK_IMPORTED_MODULE_0__["LessThanOrEqualTo"], 'less_than_or_equal_to', 'greater_than_or_equal_to');
    }

    _greaterThan (f) {
        return this._cmpOp(f, _renderer_viz_expressions_binary__WEBPACK_IMPORTED_MODULE_0__["GreaterThan"], 'greater_than', 'less_than');
    }

    _greaterThanOrEqualTo (f) {
        return this._cmpOp(f, _renderer_viz_expressions_binary__WEBPACK_IMPORTED_MODULE_0__["GreaterThanOrEqualTo"], 'greater_than_or_equal_to', 'less_than_or_equal_to');
    }

    _aggregation (f) {
        f = this._removeBlend(f);
        if (f.isA(_renderer_viz_expressions_aggregation_cluster_ClusterAvg__WEBPACK_IMPORTED_MODULE_9__["default"]) || f.isA(_renderer_viz_expressions_aggregation_cluster_ClusterMax__WEBPACK_IMPORTED_MODULE_10__["default"]) || f.isA(_renderer_viz_expressions_aggregation_cluster_ClusterMin__WEBPACK_IMPORTED_MODULE_11__["default"]) || f.isA(_renderer_viz_expressions_aggregation_cluster_ClusterMode__WEBPACK_IMPORTED_MODULE_12__["default"]) || f.isA(_renderer_viz_expressions_aggregation_cluster_ClusterSum__WEBPACK_IMPORTED_MODULE_13__["default"])) {
            let p = this._property(f.property);
            if (p) {
                p.property = _renderer_schema__WEBPACK_IMPORTED_MODULE_14__["column"].aggColumn(p.property, f.aggName);
                return p;
            }
        }
        if (this._onlyAggregateFilters) {
            // no filters on non-aggregate columns (i.e. dimensions) are generated
            // such filtering should be applied elsewhere
            return;
        }
        return this._property(f);
    }

    _property (f) {
        f = this._removeBlend(f);
        if (f.isA(_renderer_viz_expressions_basic_property__WEBPACK_IMPORTED_MODULE_3__["default"])) {
            return {
                property: f.name,
                filters: []
            };
        }
    }

    _cmpOp (f, opClass, opParam, inverseOpParam) {
        inverseOpParam = inverseOpParam || opParam;
        if (f.isA(opClass)) {
            let p = this._aggregation(f.a);
            let v = p && this._value(f.b);
            let op = opParam;
            if (!v) {
                p = this._aggregation(f.b);
                v = p && this._value(f.a);
                op = inverseOpParam;
            }
            if (v) {
                let filter = {};
                filter[op] = v;
                p.filters.push(filter);
                return p;
            }
        }
    }

    _compatibleAndFilters (a, b) {
        // check if a and b can be combined into a range filter
        if (a.length === 0 || b.length === 0) {
            return true;
        }
        if (a.length === 1 && b.length === 1) {
            const af = a[0];
            const bf = b[0];
            if (Object.keys(af).length === 1 && Object.keys(bf).length === 1) {
                const ka = Object.keys(af)[0];
                const kb = Object.keys(bf)[0];
                const lessOps = ['less_than', 'less_than_or_equal_to'];
                const greaterOps = ['greater_than', 'greater_than_or_equal_to'];
                return (lessOps.includes(ka) && greaterOps.includes(kb)) ||
                    (lessOps.includes(kb) && greaterOps.includes(ka));
            }
        }
        return false;
    }
}

class PreaggregationFiltering {
    /**
     * Generate pre-aggregation filters, i.e. filters that can be
     * applied to the dataset before aggregation.
     * This extracts, from the vizs filters, those compatible to be
     * executed before aggregation.
     * The extracted filters are in an internal tree-like format;
     * each node has a `type` property and various other parameters
     * that depend on the type.
     */

    // return (partial) filters as an object (JSON) representing the SQL syntax tree
    getFilter (vizFilter) {
        return this._filter(vizFilter);
    }

    _filter (f) {
        return this._and(f) || this._or(f) ||
            this._in(f) || this._notIn(f) ||
            this._between(f) ||
            this._equals(f) || this._notEquals(f) ||
            this._lessThan(f) || this._lessThanOrEqualTo(f) ||
            this._greaterThan(f) || this._greaterThanOrEqualTo(f) ||
            this._blend(f) || null;
    }

    _and (f) {
        if (f.isA(_renderer_viz_expressions_binary__WEBPACK_IMPORTED_MODULE_0__["And"])) {
            // we can ignore nonsupported (null) subexpressions that are combined with AND
            // and keep the supported ones as a partial filter
            const l = [this._filter(f.a), this._filter(f.b)].filter(Boolean).reduce((x, y) => x.concat(y), []);
            if (l.length) {
                if (l.length === 1) {
                    return l[0];
                }
                return {
                    type: 'and',
                    left: l[0],
                    right: l[1]
                };
            }
        }
    }

    _or (f) {
        if (f.isA(_renderer_viz_expressions_binary__WEBPACK_IMPORTED_MODULE_0__["Or"])) {
            // if any subexpression is not supported the OR combination isn't supported either
            let a = this._filter(f.a);
            let b = this._filter(f.b);
            if (a && b) {
                return {
                    type: 'or',
                    left: a,
                    right: b
                };
            }
        }
    }

    _lessThan (f) {
        return this._cmpOp(f, _renderer_viz_expressions_binary__WEBPACK_IMPORTED_MODULE_0__["LessThan"], 'lessThan');
    }

    _lessThanOrEqualTo (f) {
        return this._cmpOp(f, _renderer_viz_expressions_binary__WEBPACK_IMPORTED_MODULE_0__["LessThanOrEqualTo"], 'lessThanOrEqualTo');
    }

    _greaterThan (f) {
        return this._cmpOp(f, _renderer_viz_expressions_binary__WEBPACK_IMPORTED_MODULE_0__["GreaterThan"], 'greaterThan');
    }

    _greaterThanOrEqualTo (f) {
        return this._cmpOp(f, _renderer_viz_expressions_binary__WEBPACK_IMPORTED_MODULE_0__["GreaterThanOrEqualTo"], 'greaterThanOrEqualTo');
    }

    _equals (f) {
        return this._cmpOp(f, _renderer_viz_expressions_binary__WEBPACK_IMPORTED_MODULE_0__["Equals"], 'equals');
    }

    _notEquals (f) {
        return this._cmpOp(f, _renderer_viz_expressions_binary__WEBPACK_IMPORTED_MODULE_0__["NotEquals"], 'notEquals');
    }

    _cmpOp (f, opClass, type) {
        if (f.isA(opClass)) {
            let a = this._property(f.a) || this._value(f.a);
            let b = this._property(f.b) || this._value(f.b);
            if (a && b) {
                return {
                    type: type,
                    left: a,
                    right: b
                };
            }
        }
    }

    _blend (f) {
        if (f.isA(_renderer_viz_expressions_blend__WEBPACK_IMPORTED_MODULE_4__["default"]) && f.originalMix.isA(_renderer_viz_expressions_transition__WEBPACK_IMPORTED_MODULE_5__["default"])) {
            return this._filter(f.b);
        }
    }

    _property (f) {
        if (f.isA(_renderer_viz_expressions_basic_property__WEBPACK_IMPORTED_MODULE_3__["default"])) {
            return {
                type: 'property',
                property: f.name
            };
        }
    }

    _value (f) {
        if (f.isA(_renderer_viz_expressions_basic_number__WEBPACK_IMPORTED_MODULE_6__["default"]) || f.isA(_renderer_viz_expressions_basic_constant__WEBPACK_IMPORTED_MODULE_7__["default"]) || f.isA(_renderer_viz_expressions_basic_category__WEBPACK_IMPORTED_MODULE_8__["default"])) {
            return {
                type: 'value',
                value: f.expr
            };
        }
    }

    _in (f) {
        if (f.isA(_renderer_viz_expressions_belongs__WEBPACK_IMPORTED_MODULE_1__["In"])) {
            let p = this._property(f.input);
            let values = f.list.elems.map(cat => this._value(cat));
            if (p && values.length > 0 && values.length === f.list.elems.length) {
                return {
                    type: 'in',
                    property: p.property,
                    values: values.map(v => v.value)
                };
            }
        }
    }

    _notIn (f) {
        if (f.isA(_renderer_viz_expressions_belongs__WEBPACK_IMPORTED_MODULE_1__["Nin"])) {
            let p = this._property(f.input);
            let values = f.list.elems.map(cat => this._value(cat));
            if (p && values.length > 0 && values.length === f.list.elems.length) {
                return {
                    type: 'notIn',
                    property: p.property,
                    values: values.map(v => v.value)
                };
            }
        }
    }

    _between (f) {
        if (f.isA(_renderer_viz_expressions_between__WEBPACK_IMPORTED_MODULE_2__["default"])) {
            let p = this._property(f.input);
            let lo = this._value(f.lowerLimit);
            let hi = this._value(f.upperLimit);
            if (p && lo && hi) {
                return {
                    type: 'between',
                    property: p.property,
                    lower: lo.value,
                    upper: hi.value
                };
            }
        }
    }
}

function getSQL (node) {
    if (node.type) {
        return `(${SQLGenerators[node.type](node)})`;
    }
    return sqlQ(node);
}

function sqlQ (value) {
    if (isFinite(value)) {
        return String(value);
    }
    return `'${value.replace(/\'/g, '\'\'')}'`;
}

function sqlId (id) {
    if (!id.match(/^[a-z\d_]+$/)) {
        id = `"${id.replace(/\"/g, '""')}"`;
    }
    return id;
}

function sqlSep (sep, ...args) {
    return args.map(arg => getSQL(arg)).join(sep);
}

const SQLGenerators = {
    'and': f => sqlSep(' AND ', f.left, f.right),
    'or': f => sqlSep(' OR ', f.left, f.right),
    'between': f => `${sqlId(f.property)} BETWEEN ${sqlQ(f.lower)} AND ${sqlQ(f.upper)}`,
    'in': f => `${sqlId(f.property)} IN (${sqlSep(',', ...f.values)})`,
    'notIn': f => `${sqlId(f.property)} NOT IN (${sqlSep(',', ...f.values)})`,
    'equals': f => sqlSep(' = ', f.left, f.right),
    'notEquals': f => sqlSep(' <> ', f.left, f.right),
    'lessThan': f => sqlSep(' < ', f.left, f.right),
    'lessThanOrEqualTo': f => sqlSep(' <= ', f.left, f.right),
    'greaterThan': f => sqlSep(' > ', f.left, f.right),
    'greaterThanOrEqualTo': f => sqlSep(' >= ', f.left, f.right),
    'property': f => sqlId(f.property),
    'value': f => sqlQ(f.input)
};

/**
 * Returns supported windshaft filters for the viz
 * @param {*} viz
 * @returns {Filtering}
 */
function getFiltering (viz, options = {}) {
    const aggrFiltering = new AggregationFiltering(options);
    const preFiltering = new PreaggregationFiltering(options);
    const filtering = {
        preaggregation: preFiltering.getFilter(viz.filter),
        aggregation: aggrFiltering.getFilters(viz.filter)
    };
    if (!filtering.preaggregation && !filtering.aggregation) {
        return null;
    }
    return filtering;
}

/**
 * Convert preaggregation filters (as generated by PreaggregationFiltering)
 * into an equivalent SQL WHERE expression.
 *
 * @param {Filtering} filtering
 */
function getSQLWhere (filtering) {
    filtering = filtering && filtering.preaggregation;
    let sql;
    if (filtering && Object.keys(filtering).length > 0) {
        sql = getSQL(filtering);
    }
    return sql ? 'WHERE ' + sql : '';
}

function getAggregationFilters (filtering) {
    return filtering && filtering.aggregation;
}


/***/ }),

/***/ "./src/client/windshaft.js":
/*!*********************************!*\
  !*** ./src/client/windshaft.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Windshaft; });
/* harmony import */ var _package__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../package */ "./package.json");
var _package__WEBPACK_IMPORTED_MODULE_0___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../package */ "./package.json", 1);
/* harmony import */ var _sources_MVT__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../sources/MVT */ "./src/sources/MVT.js");
/* harmony import */ var _renderer_Metadata__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../renderer/Metadata */ "./src/renderer/Metadata.js");
/* harmony import */ var _renderer_schema__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../renderer/schema */ "./src/renderer/schema.js");
/* harmony import */ var _renderer_viz_expressions_time__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../renderer/viz/expressions/time */ "./src/renderer/viz/expressions/time.js");
/* harmony import */ var _windshaft_filtering__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./windshaft-filtering */ "./src/client/windshaft-filtering.js");
/* harmony import */ var _errors_carto_validation_error__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../errors/carto-validation-error */ "./src/errors/carto-validation-error.js");
/* harmony import */ var _errors_carto_maps_api_error__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../errors/carto-maps-api-error */ "./src/errors/carto-maps-api-error.js");










const SAMPLE_ROWS = 1000;
const MIN_FILTERING = 2000000;
const REQUEST_GET_MAX_URL_LENGTH = 2048;

class Windshaft {
    constructor (source) {
        this._source = source;
        this._exclusive = true;

        this._MNS = null;
        this._promiseMNS = null;
        this.inProgressInstantiations = {};
    }

    bindLayer (addDataframe, dataLoadedCallback) {
        this._addDataframe = addDataframe;
        this._dataLoadedCallback = dataLoadedCallback;
        this._mvtClient.bindLayer(addDataframe, dataLoadedCallback);
    }

    _getInstantiationID (MNS, resolution, filtering, choices) {
        return JSON.stringify({
            MNS: _renderer_schema__WEBPACK_IMPORTED_MODULE_3__["default"].simplify(MNS),
            resolution,
            filtering: choices.backendFilters ? filtering : null,
            options: choices
        });
    }

    /**
     * Should be called whenever the viz changes (even if metadata is not going to be used)
     * This not only computes metadata: it also updates the map (instantiates) for the new viz if needed
     * Returns  a promise to a Metadata
     * @param {*} viz
     */
    async getMetadata (viz) {
        const MNS = viz.getMinimumNeededSchema();
        this._checkAcceptableMNS(MNS);
        const resolution = viz.resolution;
        const filtering = _windshaft_filtering__WEBPACK_IMPORTED_MODULE_5__["getFiltering"](viz, { exclusive: this._exclusive });
        this._forceIncludeCartodbId(MNS);
        if (this._needToInstantiate(MNS, resolution, filtering)) {
            const instantiationData = await this._repeatableInstantiate(MNS, resolution, filtering);
            this._updateStateAfterInstantiating(instantiationData);
        }
        return this.metadata;
    }

    _forceIncludeCartodbId (MNS) {
        // Force to include `cartodb_id` in the MNS columns.
        // TODO: revisit this request to Maps API
        if (!MNS['cartodb_id']) {
            MNS['cartodb_id'] = [{ type: 'unaggregated' }];
        }
    }

    requiresNewMetadata (viz) {
        const MNS = viz.getMinimumNeededSchema();
        this._checkAcceptableMNS(MNS);
        const resolution = viz.resolution;
        const filtering = _windshaft_filtering__WEBPACK_IMPORTED_MODULE_5__["getFiltering"](viz, { exclusive: this._exclusive });
        this._forceIncludeCartodbId(MNS);
        return this._needToInstantiate(MNS, resolution, filtering);
    }

    _checkAcceptableMNS (MNS) {
        Object.keys(MNS).forEach(propertyName => {
            const usages = MNS[propertyName];
            const aggregatedUsage = usages.some(x => x.type === 'aggregated');
            const unAggregatedUsage = usages.some(x => x.type === 'unaggregated');
            if (aggregatedUsage && unAggregatedUsage) {
                throw new _errors_carto_validation_error__WEBPACK_IMPORTED_MODULE_6__["default"](`${_errors_carto_validation_error__WEBPACK_IMPORTED_MODULE_6__["CartoValidationTypes"].INCORRECT_VALUE} Incompatible combination of cluster aggregation usages (${
                    JSON.stringify(usages.filter(x => x.type === 'aggregated'))
                }) with unaggregated usage for property '${propertyName}'`);
            }
        });
    }

    /**
     * After calling getMetadata(), data for a viewport can be obtained with this function.
     * So long as the viz doesn't change, getData() can be called repeatedly for different
     * viewports. If viz changes getMetadata() should be called before requesting data
     * for the new viz.
     */
    getData (zoom, viewport) {
        if (this._mvtClient) {
            return this._mvtClient.requestData(zoom, viewport);// FIXME extend
        }
    }

    /**
     * Check if the map needs to be reinstantiated
     * This happens:
     *  - When the minimun required schema changed.
     *  - When the resolution changed.
     *  - When the filter conditions changed and the dataset should be server-filtered.
     */
    _needToInstantiate (MNS, resolution, filtering) {
        return !_renderer_schema__WEBPACK_IMPORTED_MODULE_3__["default"].equals(this._MNS, MNS) ||
            resolution !== this.resolution ||
            (
                JSON.stringify(filtering) !== JSON.stringify(this.filtering) &&
                this.metadata.featureCount > MIN_FILTERING
            );
    }

    _isInstantiated () {
        return !!this.metadata;
    }

    _intantiationChoices (metadata) {
        let choices = {
            // default choices
            backendFilters: true
        };
        if (metadata) {
            if (metadata.featureCount >= 0) {
                choices.backendFilters = metadata.featureCount > MIN_FILTERING || !metadata.backendFiltersApplied;
            }
        }
        return choices;
    }

    async _instantiateUncached (MNS, resolution, filters, choices = { backendFilters: true }, overrideMetadata = null) {
        const conf = this._getConfig();
        const agg = await this._generateAggregation(MNS, resolution);
        let select = this._buildSelectClause(MNS);
        let aggSQL = this._buildQuery(select);

        const query = `(${aggSQL}) AS tmp`;

        let backendFilters = choices.backendFilters ? filters : null;
        let backendFiltersApplied = false;

        if (backendFilters && this._requiresAggregation(MNS)) {
            agg.filters = _windshaft_filtering__WEBPACK_IMPORTED_MODULE_5__["getAggregationFilters"](backendFilters);
            if (agg.filters) {
                backendFiltersApplied = true;
            }
            if (!this._exclusive) {
                backendFilters = null;
            }
        }
        if (backendFilters) {
            const filteredSQL = this._buildQuery(select, backendFilters);
            backendFiltersApplied = backendFiltersApplied || filteredSQL !== aggSQL;
            aggSQL = filteredSQL;
        }

        let { urlTemplates, metadata } = await this._getInstantiationPromise(query, conf, agg, aggSQL, select, overrideMetadata);
        metadata.backendFiltersApplied = backendFiltersApplied;

        return { MNS, resolution, filters, metadata, urlTemplates };
    }

    _updateStateAfterInstantiating ({ MNS, resolution, filters, metadata, urlTemplates }) {
        if (this._mvtClient) {
            this._mvtClient.free();
        }
        this._mvtClient = new _sources_MVT__WEBPACK_IMPORTED_MODULE_1__["default"](urlTemplates);
        this._mvtClient._workerName = 'windshaft';
        this._mvtClient.bindLayer(this._addDataframe, this._dataLoadedCallback);
        this.urlTemplates = urlTemplates;
        this.metadata = metadata;
        this._mvtClient._metadata = metadata;
        this._MNS = MNS;
        this.filtering = filters;
        this.resolution = resolution;
        this._checkLayerMeta(MNS);
    }

    async _instantiate (MNS, resolution, filters, choices, metadata) {
        const id = this._getInstantiationID(MNS, resolution, filters, choices);
        if (this.inProgressInstantiations[id]) {
            return this.inProgressInstantiations[id];
        }
        const instantiationPromise = this._instantiateUncached(MNS, resolution, filters, choices, metadata);
        this.inProgressInstantiations[id] = instantiationPromise;
        return instantiationPromise;
    }

    async _repeatableInstantiate (MNS, resolution, filters) {
        // TODO: we shouldn't reinstantiate just to not apply backend filters
        // (we'd need to add a choice comparison function argument to repeatablePromise)
        let finalMetadata = null;
        const initialChoices = this._intantiationChoices(this.metadata);
        const finalChoices = instantiation => {
            // first instantiation metadata is kept
            finalMetadata = instantiation.metadata;
            return this._intantiationChoices(instantiation.metadata);
        };
        return repeatablePromise(initialChoices, finalChoices, choices => this._instantiate(MNS, resolution, filters, choices, finalMetadata));
    }

    _checkLayerMeta (MNS) {
        if (!this._isAggregated()) {
            if (this._requiresAggregation(MNS)) {
                throw new _errors_carto_maps_api_error__WEBPACK_IMPORTED_MODULE_7__["default"](`${_errors_carto_maps_api_error__WEBPACK_IMPORTED_MODULE_7__["CartoMapsAPITypes"].NOT_SUPPORTED} Aggregation not supported for this dataset`);
            }
        }
    }

    _isAggregated () {
        return this.metadata && this.metadata.isAggregated;
    }

    _requiresAggregation (MNS) {
        return Object.values(MNS).some(propertyUsages => propertyUsages.some(u => u.type === 'aggregated'));
    }

    _generateAggregation (MNS, resolution) {
        let aggregation = {
            columns: {},
            dimensions: {},
            placement: 'centroid',
            resolution: resolution,
            threshold: 1
        };

        Object.keys(MNS)
            .forEach(propertyName => {
                if (propertyName !== 'cartodb_id') {
                    const propertyUsages = MNS[propertyName];
                    propertyUsages.forEach(usage => {
                        if (usage.type === 'aggregated') {
                            aggregation.columns[_renderer_schema__WEBPACK_IMPORTED_MODULE_3__["default"].column.aggColumn(propertyName, usage.op)] = {
                                aggregate_function: usage.op,
                                aggregated_column: propertyName
                            };
                        } else {
                            aggregation.dimensions[propertyName] = propertyName;
                        }
                    });
                }
            });

        return aggregation;
    }

    _buildSelectClause (MNS) {
        const columns = Object.keys(MNS).concat(['the_geom_webmercator', 'cartodb_id']);
        return columns.filter((item, pos) => columns.indexOf(item) === pos); // get unique values
    }

    _buildQuery (select, filters) {
        const columns = select.map(column => `"${column}"`).join();
        const relation = this._source._query ? `(${this._source._query}) as _cdb_query_wrapper` : this._source._tableName;
        const condition = filters ? _windshaft_filtering__WEBPACK_IMPORTED_MODULE_5__["getSQLWhere"](filters) : '';
        return `SELECT ${columns} FROM ${relation} ${condition}`;
    }

    _getConfig () {
        return {
            apiKey: this._source._apiKey,
            username: this._source._username,
            serverURL: this._source._serverURL
        };
    }

    free () {
        if (this._mvtClient) {
            this._mvtClient.free();
        }
    }

    async _getInstantiationPromise (query, conf, agg, aggSQL, columns, overrideMetadata = null) {
        const mapConfigAgg = {
            buffersize: {
                mvt: 1
            },
            layers: [
                {
                    type: 'mapnik',
                    options: {
                        sql: aggSQL,
                        aggregation: agg,
                        dates_as_numbers: true
                    }
                }
            ]
        };
        if (!overrideMetadata) {
            const excludedColumns = ['the_geom', 'the_geom_webmercator'];
            const includedColumns = columns.filter(name => !excludedColumns.includes(name));
            mapConfigAgg.layers[0].options.metadata = {
                geometryType: true,
                columnStats: { topCategories: 32768, includeNulls: true },
                sample: {
                    num_rows: SAMPLE_ROWS,
                    include_columns: includedColumns // TODO: when supported by Maps API: exclude_columns: excludedColumns
                }
            };
        }
        let response;
        try {
            response = await fetch(getMapRequest(conf, mapConfigAgg));
        } catch (error) {
            throw new _errors_carto_maps_api_error__WEBPACK_IMPORTED_MODULE_7__["default"](`Failed to connect to Maps API with your user('${this._source._username}')`);
        }
        const layergroup = await response.json();
        if (!response.ok) {
            if (response.status === 401) {
                throw new _errors_carto_maps_api_error__WEBPACK_IMPORTED_MODULE_7__["default"](
                    `${_errors_carto_maps_api_error__WEBPACK_IMPORTED_MODULE_7__["CartoMapsAPITypes"].SECURITY} Unauthorized access to Maps API: invalid combination of user('${this._source._username}') and apiKey('${this._source._apiKey}')`
                );
            } else if (response.status === 403) {
                throw new _errors_carto_maps_api_error__WEBPACK_IMPORTED_MODULE_7__["default"](
                    `${_errors_carto_maps_api_error__WEBPACK_IMPORTED_MODULE_7__["CartoMapsAPITypes"].SECURITY} Unauthorized access to dataset: the provided apiKey('${this._source._apiKey}') doesn't provide access to the requested data`
                );
            }
            throw new _errors_carto_maps_api_error__WEBPACK_IMPORTED_MODULE_7__["default"](`SQL errors: ${JSON.stringify(layergroup.errors)}`);
        }
        return {
            urlTemplates: layergroup.metadata.tilejson.vector.tiles,
            metadata: overrideMetadata || this._adaptMetadata(layergroup.metadata.layers[0].meta, agg)
        };
    }

    _adaptMetadata (meta, agg) {
        meta.datesAsNumbers = meta.dates_as_numbers;
        const { stats, aggregation, datesAsNumbers } = meta;
        const featureCount = stats.hasOwnProperty('featureCount') ? stats.featureCount : stats.estimatedFeatureCount;
        const geomType = adaptGeometryType(stats.geometryType);

        const properties = stats.columns;
        Object.keys(agg.columns).forEach(aggName => {
            const basename = _renderer_schema__WEBPACK_IMPORTED_MODULE_3__["default"].column.getBase(aggName);
            const fnName = _renderer_schema__WEBPACK_IMPORTED_MODULE_3__["default"].column.getAggFN(aggName);
            if (!properties[basename].aggregations) {
                properties[basename].aggregations = {};
            }
            properties[basename].aggregations[fnName] = aggName;
        });
        Object.values(properties).map(property => {
            property.type = adaptColumnType(property.type);
        });

        Object.keys(properties).forEach(propertyName => {
            const property = properties[propertyName];
            if (property.type === 'category' && property.categories) {
                property.categories.forEach(category => {
                    category.name = category.category;
                    delete category.category;
                });
            } else if (datesAsNumbers && datesAsNumbers.includes(propertyName)) {
                property.type = 'date';
                ['min', 'max', 'avg'].map(fn => {
                    if (property[fn]) {
                        property[fn] = new _renderer_viz_expressions_time__WEBPACK_IMPORTED_MODULE_4__["default"](property[fn] * 1000).value;
                    }
                });
            }
        });

        if (geomType === 'point') {
            properties[_renderer_schema__WEBPACK_IMPORTED_MODULE_3__["CLUSTER_FEATURE_COUNT"]] = { type: 'number' };
        }

        const idProperty = 'cartodb_id';

        const metadata = new _renderer_Metadata__WEBPACK_IMPORTED_MODULE_2__["default"]({ properties, featureCount, sample: stats.sample, geomType, isAggregated: aggregation.mvt, idProperty });
        return metadata;
    }
}

function adaptGeometryType (type) {
    switch (type) {
        case 'ST_MultiPolygon':
        case 'ST_Polygon':
            return 'polygon';
        case 'ST_Point':
            return 'point';
        case 'ST_MultiLineString':
        case 'ST_LineString':
            return 'line';
        default:
            throw new _errors_carto_maps_api_error__WEBPACK_IMPORTED_MODULE_7__["default"](`${_errors_carto_maps_api_error__WEBPACK_IMPORTED_MODULE_7__["CartoMapsAPITypes"].NOT_SUPPORTED} Unimplemented geometry type '${type}'.`);
    }
}

function adaptColumnType (type) {
    if (type === 'string') {
        return 'category';
    }
    return type;
}

// generate a promise under certain assumptions/choices; then if the result changes the assumptions,
// repeat the generation with the new information
async function repeatablePromise (initialAssumptions, assumptionsFromResult, promiseGenerator) {
    let promise = promiseGenerator(initialAssumptions);
    let result = await promise;
    let finalAssumptions = assumptionsFromResult(result);
    if (JSON.stringify(initialAssumptions) === JSON.stringify(finalAssumptions)) {
        return promise;
    } else {
        return promiseGenerator(finalAssumptions);
    }
}

function getMapRequest (conf, mapConfig) {
    const mapConfigPayload = JSON.stringify(mapConfig);
    const auth = encodeParameter('api_key', conf.apiKey);
    const client = encodeParameter('client', `vl-${_package__WEBPACK_IMPORTED_MODULE_0__["version"]}`);

    const parameters = [auth, client, encodeParameter('config', mapConfigPayload)];
    const url = generateUrl(generateMapsApiUrl(conf), parameters);
    if (url.length < REQUEST_GET_MAX_URL_LENGTH) {
        return new Request(url, {
            method: 'GET',
            headers: {
                'Accept': 'application/json'
            }
        });
    }

    return new Request(generateUrl(generateMapsApiUrl(conf), [auth, client]), {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: mapConfigPayload
    });
}

function encodeParameter (name, value) {
    return `${name}=${encodeURIComponent(value)}`;
}

function generateUrl (url, parameters = []) {
    return `${url}?${parameters.join('&')}`;
}

function generateMapsApiUrl (conf, path) {
    let url = `${conf.serverURL}/api/v1/map`;
    if (path) {
        url += path;
    }
    return url;
}


/***/ }),

/***/ "./src/constants/layer.js":
/*!********************************!*\
  !*** ./src/constants/layer.js ***!
  \********************************/
/*! exports provided: layerVisibility */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "layerVisibility", function() { return layerVisibility; });
const layerVisibility = Object.freeze({
    VISIBLE: 'visible',
    HIDDEN: 'none'
});


/***/ }),

/***/ "./src/errors/carto-error.js":
/*!***********************************!*\
  !*** ./src/errors/carto-error.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return CartoError; });
/**
 * Represents an error in the carto library.
 *
 * @typedef {object} CartoError
 * @property {string} message - A short error description
 * @property {string} name - The name of the error "CartoError"
 * @property {object} originalError - An object containing the internal/original error
 *
 * @event CartoError
 * @api
 */
class CartoError extends Error {
    /**
     * Build a cartoError from a generic error.
     * @constructor
     *
     * @return {CartoError} A well formed object representing the error.
     */
    constructor (error) {
        if (!(error && error.message)) {
            throw Error('Invalid CartoError, a message is mandatory');
        }
        super(error.message);
        this.name = 'CartoError';
        this.originalError = error;
    }
}


/***/ }),

/***/ "./src/errors/carto-maps-api-error.js":
/*!********************************************!*\
  !*** ./src/errors/carto-maps-api-error.js ***!
  \********************************************/
/*! exports provided: default, CartoMapsAPITypes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return CartoMapsAPIError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CartoMapsAPITypes", function() { return CartoMapsAPITypes; });
/* harmony import */ var _carto_error__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./carto-error */ "./src/errors/carto-error.js");


/**
 * Utility to build a cartoError related to MapsAPI errors.
 *
 * @return {CartoError} A well formed object representing the error.
 */
class CartoMapsAPIError extends _carto_error__WEBPACK_IMPORTED_MODULE_0__["default"] {
    constructor (message) {
        super({ message: message });
        this.name = 'CartoMapsAPIError';
    }
}

const CartoMapsAPITypes = {
    NOT_SUPPORTED: '[Not supported]:',
    SECURITY: '[Security]:'
};


/***/ }),

/***/ "./src/errors/carto-parsing-error.js":
/*!*******************************************!*\
  !*** ./src/errors/carto-parsing-error.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return CartoParsingError; });
/* harmony import */ var _carto_error__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./carto-error */ "./src/errors/carto-error.js");


/**
 * Utility to build a cartoError related to Parsing errors.
 *
 * @return {CartoError} A well formed object representing the error.
 */
class CartoParsingError extends _carto_error__WEBPACK_IMPORTED_MODULE_0__["default"] {
    constructor (message) {
        super({ message: message });
        this.name = 'CartoParsingError';
    }
}


/***/ }),

/***/ "./src/errors/carto-runtime-error.js":
/*!*******************************************!*\
  !*** ./src/errors/carto-runtime-error.js ***!
  \*******************************************/
/*! exports provided: default, CartoRuntimeTypes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return CartoRuntimeError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CartoRuntimeTypes", function() { return CartoRuntimeTypes; });
/* harmony import */ var _carto_error__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./carto-error */ "./src/errors/carto-error.js");


/**
 * Utility to build a cartoError related to Runtime errors.
 *
 * @return {CartoError} A well formed object representing the error.
 */
class CartoRuntimeError extends _carto_error__WEBPACK_IMPORTED_MODULE_0__["default"] {
    constructor (message) {
        super({ message: message });
        this.name = 'CartoRuntimeError';
    }
}

const CartoRuntimeTypes = {
    NOT_SUPPORTED: '[Not supported]:',
    WEB_GL: '[WebGL]:',
    MVT: '[MVT]:'
};


/***/ }),

/***/ "./src/errors/carto-validation-error.js":
/*!**********************************************!*\
  !*** ./src/errors/carto-validation-error.js ***!
  \**********************************************/
/*! exports provided: default, CartoValidationTypes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return CartoValidationError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CartoValidationTypes", function() { return CartoValidationTypes; });
/* harmony import */ var _carto_error__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./carto-error */ "./src/errors/carto-error.js");


/**
 * Utility to build a cartoError related to validation errors.
 *
 * @return {CartoError} A well formed object representing the error.
 */
class CartoValidationError extends _carto_error__WEBPACK_IMPORTED_MODULE_0__["default"] {
    constructor (message) {
        super({ message: message });
        this.name = 'CartoValidationError';
    }
}

const CartoValidationTypes = {
    MISSING_REQUIRED: '[Missing required property]:',
    INCORRECT_TYPE: '[Property with an incorrect type]:',
    INCORRECT_VALUE: '[Incorrect value]:',
    TOO_MANY_ARGS: '[Too many arguments]:'
};


/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! exports provided: version, on, off, setDefaultAuth, setDefaultConfig, source, expressions, Layer, Viz, Map, Interactivity, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "source", function() { return source; });
/* harmony import */ var _setup_auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./setup/auth-service */ "./src/setup/auth-service.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setDefaultAuth", function() { return _setup_auth_service__WEBPACK_IMPORTED_MODULE_0__["setDefaultAuth"]; });

/* harmony import */ var _setup_config_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./setup/config-service */ "./src/setup/config-service.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setDefaultConfig", function() { return _setup_config_service__WEBPACK_IMPORTED_MODULE_1__["setDefaultConfig"]; });

/* harmony import */ var _Viz__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Viz */ "./src/Viz.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Viz", function() { return _Viz__WEBPACK_IMPORTED_MODULE_2__["default"]; });

/* harmony import */ var _maps_Map__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./maps/Map */ "./src/maps/Map.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Map", function() { return _maps_Map__WEBPACK_IMPORTED_MODULE_3__["default"]; });

/* harmony import */ var _interactivity_Interactivity__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./interactivity/Interactivity */ "./src/interactivity/Interactivity.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Interactivity", function() { return _interactivity_Interactivity__WEBPACK_IMPORTED_MODULE_4__["default"]; });

/* harmony import */ var _Layer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Layer */ "./src/Layer.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Layer", function() { return _Layer__WEBPACK_IMPORTED_MODULE_5__["default"]; });

/* harmony import */ var _renderer_viz_expressions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./renderer/viz/expressions */ "./src/renderer/viz/expressions.js");
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "expressions", function() { return _renderer_viz_expressions__WEBPACK_IMPORTED_MODULE_6__; });
/* harmony import */ var _sources_Dataset__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./sources/Dataset */ "./src/sources/Dataset.js");
/* harmony import */ var _sources_GeoJSON__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./sources/GeoJSON */ "./src/sources/GeoJSON.js");
/* harmony import */ var _sources_MVT__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./sources/MVT */ "./src/sources/MVT.js");
/* harmony import */ var _sources_SQL__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./sources/SQL */ "./src/sources/SQL.js");
/* harmony import */ var _utils_events__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./utils/events */ "./src/utils/events.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "on", function() { return _utils_events__WEBPACK_IMPORTED_MODULE_11__["on"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "off", function() { return _utils_events__WEBPACK_IMPORTED_MODULE_11__["off"]; });

/* harmony import */ var _package_json__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../package.json */ "./package.json");
var _package_json__WEBPACK_IMPORTED_MODULE_12___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../package.json */ "./package.json", 1);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "version", function() { return _package_json__WEBPACK_IMPORTED_MODULE_12__["version"]; });

/**
 *  @namespace carto
 *  @api
 *
 *  @description
 *  The CARTO VL functionality is exposed through the **carto** namespace including:
 *
 * - {@link carto.version|carto.version}
 * - {@link carto.source.Dataset|carto.source.Dataset}
 * - {@link carto.source.SQL|carto.source.SQL}
 * - {@link carto.source.GeoJSON|carto.source.GeoJSON}
 * - {@link carto.source.MVT|carto.source.MVT}
 * - {@link carto.source.MVT.Metadata|carto.source.MVT.Metadata}
 * - {@link carto.expressions|carto.expressions}
 * - {@link carto.Layer|carto.Layer}
 * - {@link carto.Viz|carto.Viz}
 * - {@link carto.Interactivity|carto.Interactivity}
 * - {@link carto.setDefaultAuth|carto.setDefaultAuth}
 * - {@link carto.setDefaultConfig|carto.setDefaultConfig}
 */














/**
 * The version of CARTO VL in use as specified in `package.json` and the GitHub release.
 *
 * @var {string} version
 *
 * @memberof carto
 * @api
 */


// Namespaces

const source = { Dataset: _sources_Dataset__WEBPACK_IMPORTED_MODULE_7__["default"], SQL: _sources_SQL__WEBPACK_IMPORTED_MODULE_10__["default"], GeoJSON: _sources_GeoJSON__WEBPACK_IMPORTED_MODULE_8__["default"], MVT: _sources_MVT__WEBPACK_IMPORTED_MODULE_9__["default"] };


/* harmony default export */ __webpack_exports__["default"] = ({ version: _package_json__WEBPACK_IMPORTED_MODULE_12__["version"], on: _utils_events__WEBPACK_IMPORTED_MODULE_11__["on"], off: _utils_events__WEBPACK_IMPORTED_MODULE_11__["off"], setDefaultAuth: _setup_auth_service__WEBPACK_IMPORTED_MODULE_0__["setDefaultAuth"], setDefaultConfig: _setup_config_service__WEBPACK_IMPORTED_MODULE_1__["setDefaultConfig"], source, expressions: _renderer_viz_expressions__WEBPACK_IMPORTED_MODULE_6__, Layer: _Layer__WEBPACK_IMPORTED_MODULE_5__["default"], Viz: _Viz__WEBPACK_IMPORTED_MODULE_2__["default"], Map: _maps_Map__WEBPACK_IMPORTED_MODULE_3__["default"], Interactivity: _interactivity_Interactivity__WEBPACK_IMPORTED_MODULE_4__["default"] });


/***/ }),

/***/ "./src/interactivity/Interactivity.js":
/*!********************************************!*\
  !*** ./src/interactivity/Interactivity.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Interactivity; });
/* harmony import */ var mitt__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mitt */ "./node_modules/mitt/dist/mitt.es.js");
/* harmony import */ var _Layer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Layer */ "./src/Layer.js");
/* harmony import */ var _utils_util__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/util */ "./src/utils/util.js");
/* harmony import */ var _client_rsys__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../client/rsys */ "./src/client/rsys.js");
/* harmony import */ var _errors_carto_validation_error__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../errors/carto-validation-error */ "./src/errors/carto-validation-error.js");






/**
 *
 * FeatureEvent objects are fired by {@link carto.Interactivity|Interactivity} objects.
 *
 * @typedef {object} FeatureEvent
 * @property {object} coordinates - LongLat coordinates in { lng, lat } form
 * @property {object} position - Pixel coordinates in { x, y } form
 * @property {Feature[]} features - Array of {@link Feature}
 * @api
 */

/**
 * featureClick events are fired when the user clicks on features. The list of features behind the cursor is provided.
 *
 * @event featureClick
 * @type {FeatureEvent}
 * @api
 */

/**
 * featureClickOut events are fired when the user clicks outside a feature that was clicked in the last featureClick event.
 * The list of features that were clicked before and that are no longer behind this new click is provided.
 *
 * @event featureClickOut
 * @type {FeatureEvent}
 * @api
 */

/**
 * featureEnter events are fired when the user moves the cursor and the movement implies that a non-previously hovered feature (as reported by featureHover or featureLeave) is now under the cursor.
 * The list of features that are now behind the cursor and that weren't before is provided.
 *
 * @event featureEnter
 * @type {FeatureEvent}
 * @api
 */

/**
 * featureHover events are fired when the user moves the cursor.
 * The list of features behind the cursor is provided.
 *
 * @event featureHover
 * @type {FeatureEvent}
 * @api
 */

/**
 * featureLeave events are fired when the user moves the cursor and the movement implies that a previously hovered feature (as reported by featureHover or featureEnter) is no longer behind the cursor.
 * The list of features that are no longer behind the cursor and that were before is provided.
 *
 * @event featureLeave
 * @type {FeatureEvent}
 * @api
 */

const EVENTS = [
    'featureClick',
    'featureClickOut',
    'featureEnter',
    'featureHover',
    'featureLeave'
];

class Interactivity {
    /**
    *
    * Interactivity purpose is to allow the reception and management of user-generated events, like clicking, over layer features.
    *
    * To create a Interactivity object an array of {@link carto.Layer} is required.
    * Events fired from interactivity objects will refer to the features of these layers and only these layers.
    * Moreover, the order of the features in the events will be determined by the order of the layers in this list.
    *
    * @param {carto.Layer|carto.Layer[]} layerList - {@link carto.Layer} or array of {@link carto.Layer}, events will be fired based on the features of these layers. The array cannot be empty, and all the layers must be attached to the same map.
    * @param {object} [options={}] - Object containing interactivity options
    * @param {boolean} [options.autoChangePointer=true] - A boolean flag indicating if the cursor should change when the mouse is over a feature.
    *
    * @example
    * const interactivity = new carto.Interactivity(layer);
    * interactivity.on('click', event => {
    *   style(event.features);
    *   show(event.coordinates);
    * });
    *
    * @fires featureClick
    * @fires featureClickOut
    * @fires featureHover
    * @fires featureEnter
    * @fires featureLeave
    * @fires CartoError
    *
    * @constructor Interactivity
    * @memberof carto
    * @api
    */
    constructor (layerList, options = { autoChangePointer: true }) {
        if (layerList instanceof _Layer__WEBPACK_IMPORTED_MODULE_1__["default"]) {
            // Allow one layer as input
            layerList = [layerList];
        }
        preCheckLayerList(layerList);
        this._init(layerList, options);
    }

    /**
     * Register an event handler for the given type.
     *
     * @param {string} eventName - Type of event to listen for
     * @param {function} callback - Function to call in response to given event, function will be called with a {@link carto.FeatureEvent}
     * @memberof carto.Interactivity
     * @instance
     * @api
     */
    on (eventName, callback) {
        checkEvent(eventName);
        this._numListeners[eventName] = (this._numListeners[eventName] || 0) + 1;
        return this._emitter.on(eventName, callback);
    }

    /**
     * Remove an event handler for the given type.
     *
     * @param {string} eventName - Type of event to unregister
     * @param {function} callback - Handler function to unregister
     * @memberof carto.Interactivity
     * @instance
     * @api
     */
    off (eventName, callback) {
        checkEvent(eventName);
        this._numListeners[eventName] = this._numListeners[eventName] - 1;
        return this._emitter.off(eventName, callback);
    }

    _init (layerList, options) {
        this._emitter = Object(mitt__WEBPACK_IMPORTED_MODULE_0__["default"])();
        this._layerList = layerList;
        this._prevHoverFeatures = [];
        this._prevClickFeatures = [];
        this._numListeners = {};
        return Promise.all(layerList.map(layer => layer._context)).then(() => {
            postCheckLayerList(layerList);
            this._subscribeToLayerEvents(layerList);
            this._subscribeToMapEvents(layerList[0].map);
        }).then(() => {
            if (options.autoChangePointer) {
                this._setInteractiveCursor();
            }
        });
    }

    _setInteractiveCursor () {
        const map = this._layerList[0].map; // All layers belong to the same map
        if (!map.__carto_interacivities) {
            map.__carto_interacivities = new Set();
        }
        this.on('featureHover', event => {
            if (event.features.length) {
                map.__carto_interacivities.add(this);
            } else {
                map.__carto_interacivities.delete(this);
            }
            map.getCanvas().style.cursor = (map.__carto_interacivities.size > 0) ? 'pointer' : '';
        });
    }

    _subscribeToMapEvents (map) {
        map.on('mousemove', this._onMouseMove.bind(this));
        map.on('click', this._onClick.bind(this));
    }

    _subscribeToLayerEvents (layers) {
        layers.forEach(layer => {
            layer.on('updated', this._onLayerUpdated.bind(this));
        });
    }

    _onLayerUpdated () {
        this._onMouseMove(this._mouseEvent, true);
    }

    _onMouseMove (event, emulated) {
        // Store mouse event to be used in `onLayerUpdated`
        this._mouseEvent = event;

        if (!event ||
            (!this._numListeners['featureEnter'] &&
                !this._numListeners['featureHover'] &&
                !this._numListeners['featureLeave'])) {
            return;
        }

        const featureEvent = this._createFeatureEvent(event);
        const currentFeatures = featureEvent.features;

        // Manage enter/leave events
        const featuresLeft = this._getDiffFeatures(this._prevHoverFeatures, currentFeatures);
        const featuresEntered = this._getDiffFeatures(currentFeatures, this._prevHoverFeatures);

        if (featuresLeft.length > 0) {
            this._fireEvent('featureLeave', {
                coordinates: featureEvent.coordinates,
                position: featureEvent.position,
                features: featuresLeft
            });
        }

        if (featuresEntered.length > 0) {
            this._fireEvent('featureEnter', {
                coordinates: featureEvent.coordinates,
                position: featureEvent.position,
                features: featuresEntered
            });
        }

        this._prevHoverFeatures = currentFeatures;

        // If the event comes from a real mouse move, trigger always (because coordinates and position have changed)
        // If the event comes from an animated event, trigger only when features have changed (because position is the same)
        if (!emulated || (emulated && (featuresLeft.length || featuresEntered.length))) {
            // Launch hover event
            this._fireEvent('featureHover', featureEvent);
        }
    }

    _onClick (event) {
        if (!this._numListeners['featureClick'] &&
            !this._numListeners['featureClickOut']) {
            return;
        }

        const featureEvent = this._createFeatureEvent(event);
        const currentFeatures = featureEvent.features;

        // Manage clickOut event
        const featuresClickedOut = this._getDiffFeatures(this._prevClickFeatures, currentFeatures);

        if (featuresClickedOut.length > 0) {
            this._fireEvent('featureClickOut', {
                coordinates: featureEvent.coordinates,
                position: featureEvent.position,
                features: featuresClickedOut
            });
        }

        this._prevClickFeatures = featureEvent.features;

        // Launch click event
        this._fireEvent('featureClick', featureEvent);
    }

    _createFeatureEvent (eventData) {
        const features = this._getFeaturesAtPosition(eventData.lngLat);
        return {
            coordinates: eventData.lngLat,
            position: eventData.point,
            features
        };
    }

    _fireEvent (type, featureEvent) {
        this._emitter.emit(type, featureEvent);
    }

    _getFeaturesAtPosition (lngLat) {
        const wm = Object(_utils_util__WEBPACK_IMPORTED_MODULE_2__["projectToWebMercator"])(lngLat);
        const nwmc = Object(_client_rsys__WEBPACK_IMPORTED_MODULE_3__["wToR"])(wm.x, wm.y, { scale: _utils_util__WEBPACK_IMPORTED_MODULE_2__["WM_R"], center: { x: 0, y: 0 } });
        return [].concat(...this._layerList.map(layer => layer.getFeaturesAtPosition(nwmc)));
    }

    /**
     * Return the difference between the feature arrays A and B.
     * The output value is also an array of features.
     */
    _getDiffFeatures (featuresA, featuresB) {
        const IDs = this._getFeatureIDs(featuresB);
        return featuresA.filter(feature => !IDs.includes(feature.id));
    }

    _getFeatureIDs (features) {
        return features.map(feature => feature.id);
    }
}

function preCheckLayerList (layerList) {
    if (!Array.isArray(layerList)) {
        throw new _errors_carto_validation_error__WEBPACK_IMPORTED_MODULE_4__["default"](`${_errors_carto_validation_error__WEBPACK_IMPORTED_MODULE_4__["CartoValidationTypes"].INCORRECT_TYPE} Invalid layer list, parameter must be an array of "carto.Layer" objects.`);
    }
    if (!layerList.length) {
        throw new _errors_carto_validation_error__WEBPACK_IMPORTED_MODULE_4__["default"](`${_errors_carto_validation_error__WEBPACK_IMPORTED_MODULE_4__["CartoValidationTypes"].INCORRECT_VALUE} Invalid argument, layer list must not be empty.`);
    }
    if (!layerList.every(layer => layer instanceof _Layer__WEBPACK_IMPORTED_MODULE_1__["default"])) {
        throw new _errors_carto_validation_error__WEBPACK_IMPORTED_MODULE_4__["default"](`${_errors_carto_validation_error__WEBPACK_IMPORTED_MODULE_4__["CartoValidationTypes"].INCORRECT_TYPE} Invalid layer, layer must be an instance of "carto.Layer".`);
    }
}
function postCheckLayerList (layerList) {
    if (!layerList.every(layer => layer.map === layerList[0].map)) {
        throw new _errors_carto_validation_error__WEBPACK_IMPORTED_MODULE_4__["default"](`${_errors_carto_validation_error__WEBPACK_IMPORTED_MODULE_4__["CartoValidationTypes"].INCORRECT_VALUE} Invalid argument, all layers must belong to the same map.`);
    }
}

function checkEvent (eventName) {
    if (!EVENTS.includes(eventName)) {
        throw new _errors_carto_validation_error__WEBPACK_IMPORTED_MODULE_4__["default"](`${_errors_carto_validation_error__WEBPACK_IMPORTED_MODULE_4__["CartoValidationTypes"].INCORRECT_VALUE} Unrecognized event: '${eventName}'. Available events: ${EVENTS.join(', ')}.`);
    }
}


/***/ }),

/***/ "./src/interactivity/feature.js":
/*!**************************************!*\
  !*** ./src/interactivity/feature.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Feature; });
/* harmony import */ var _featureVizProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./featureVizProperty */ "./src/interactivity/featureVizProperty.js");


/**
 *
 * Feature objects are provided by {@link FeatureEvent} events.
 *
 * @typedef {object} Feature
 * @property {number} id - Unique identification code
 * @property {FeatureVizProperty} color
 * @property {FeatureVizProperty} width
 * @property {FeatureVizProperty} colorStroke
 * @property {FeatureVizProperty} widthStroke
 * @property {FeatureVizProperty[]} variables - Declared variables in the viz object
 * @property {function} reset - Reset custom feature vizs by fading out `duration` milliseconds, where `duration` is the first parameter to reset
 * @api
 */
class Feature {
    constructor (rawFeature, viz, customizedFeatures, trackFeatureViz, idProperty) {
        const variables = {};
        Object.keys(viz.variables).map(varName => {
            variables[varName] = new _featureVizProperty__WEBPACK_IMPORTED_MODULE_0__["default"](`__cartovl_variable_${varName}`, rawFeature, viz, customizedFeatures, trackFeatureViz, idProperty);
        });

        this.id = rawFeature[idProperty];
        this.color = new _featureVizProperty__WEBPACK_IMPORTED_MODULE_0__["default"]('color', rawFeature, viz, customizedFeatures, trackFeatureViz, idProperty);
        this.width = new _featureVizProperty__WEBPACK_IMPORTED_MODULE_0__["default"]('width', rawFeature, viz, customizedFeatures, trackFeatureViz, idProperty);
        this.strokeColor = new _featureVizProperty__WEBPACK_IMPORTED_MODULE_0__["default"]('strokeColor', rawFeature, viz, customizedFeatures, trackFeatureViz, idProperty);
        this.strokeWidth = new _featureVizProperty__WEBPACK_IMPORTED_MODULE_0__["default"]('strokeWidth', rawFeature, viz, customizedFeatures, trackFeatureViz, idProperty);
        this.symbol = new _featureVizProperty__WEBPACK_IMPORTED_MODULE_0__["default"]('symbol', rawFeature, viz, customizedFeatures, trackFeatureViz, idProperty);
        this.symbolPlacement = new _featureVizProperty__WEBPACK_IMPORTED_MODULE_0__["default"]('symbolPlacement', rawFeature, viz, customizedFeatures, trackFeatureViz, idProperty);
        this.variables = variables;
    }

    reset (duration = 500) {
        this.color.reset(duration);
        this.width.reset(duration);
        this.strokeColor.reset(duration);
        this.strokeWidth.reset(duration);
        this.symbol.reset(duration);
        this.symbolPlacement.reset(duration);

        for (let key in this.variables) {
            this.variables[key].reset(duration);
        }
    }
}


/***/ }),

/***/ "./src/interactivity/featureVizProperty.js":
/*!*************************************************!*\
  !*** ./src/interactivity/featureVizProperty.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return FeatureVizProperty; });
/* harmony import */ var _renderer_viz_expressions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../renderer/viz/expressions */ "./src/renderer/viz/expressions.js");
/* harmony import */ var _renderer_viz_parser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../renderer/viz/parser */ "./src/renderer/viz/parser.js");



/**
 *
 * FeatureVizProperty objects can be accessed through {@link Feature} objects.
 *
 * @typedef {object} FeatureVizProperty
 * @property {function} blendTo - Change the feature viz by blending to a destination viz expression `expr` in `duration` milliseconds, where `expr` is the first parameter and `duration` the last one
 * @property {function} reset - Reset custom feature viz property by fading out `duration` milliseconds, where `duration` is the first parameter to reset
 * @property {function} value - Getter that evaluates the property and returns the computed value
 * @api
 */
class FeatureVizProperty {
    constructor (propertyName, feature, viz, customizedFeatures, trackFeatureViz, idProperty) {
        this._propertyName = propertyName;
        this._properties = feature;
        this._viz = viz;

        this.blendTo = _generateBlenderFunction(propertyName, feature[idProperty], customizedFeatures, viz, trackFeatureViz, idProperty);
        this.reset = _generateResetFunction(propertyName, feature[idProperty], customizedFeatures, viz, idProperty);
    }

    get value () {
        return this._viz[this._propertyName].eval(this._properties);
    }
}

function _generateResetFunction (propertyName, id, customizedFeatures, viz, idProperty) {
    return function reset (duration = 500) {
        if (customizedFeatures[id] && customizedFeatures[id][propertyName]) {
            customizedFeatures[id][propertyName].replaceChild(
                customizedFeatures[id][propertyName].mix,
                // transition(0) is used to ensure that blend._predraw() "GC" collects it
                Object(_renderer_viz_expressions__WEBPACK_IMPORTED_MODULE_0__["blend"])(Object(_renderer_viz_expressions__WEBPACK_IMPORTED_MODULE_0__["notEquals"])(Object(_renderer_viz_expressions__WEBPACK_IMPORTED_MODULE_0__["property"])(idProperty), id), Object(_renderer_viz_expressions__WEBPACK_IMPORTED_MODULE_0__["transition"])(0), Object(_renderer_viz_expressions__WEBPACK_IMPORTED_MODULE_0__["transition"])(duration))
            );
            viz[propertyName].notify();
            customizedFeatures[id][propertyName] = undefined;
        }
    };
}

function _generateBlenderFunction (propertyName, id, customizedFeatures, viz, trackFeatureViz, idProperty) {
    return function generatedBlendTo (newExpression, duration = 500) {
        if (typeof newExpression === 'string') {
            newExpression = Object(_renderer_viz_parser__WEBPACK_IMPORTED_MODULE_1__["parseVizExpression"])(newExpression);
        }
        if (customizedFeatures[id] && customizedFeatures[id][propertyName]) {
            customizedFeatures[id][propertyName].a.blendTo(newExpression, duration);
            return;
        }
        const blendExpr = Object(_renderer_viz_expressions__WEBPACK_IMPORTED_MODULE_0__["blend"])(
            newExpression,
            viz[propertyName],
            Object(_renderer_viz_expressions__WEBPACK_IMPORTED_MODULE_0__["blend"])(1, Object(_renderer_viz_expressions__WEBPACK_IMPORTED_MODULE_0__["notEquals"])(Object(_renderer_viz_expressions__WEBPACK_IMPORTED_MODULE_0__["property"])(idProperty), id), Object(_renderer_viz_expressions__WEBPACK_IMPORTED_MODULE_0__["transition"])(duration))
        );
        trackFeatureViz(id, propertyName, blendExpr, customizedFeatures);
        viz.replaceChild(
            viz[propertyName],
            blendExpr
        );
        viz[propertyName].notify();
    };
}


/***/ }),

/***/ "./src/maps/Map.js":
/*!*************************!*\
  !*** ./src/maps/Map.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Map; });
/* harmony import */ var _constants_layer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constants/layer */ "./src/constants/layer.js");
/* harmony import */ var _errors_carto_validation_error__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../errors/carto-validation-error */ "./src/errors/carto-validation-error.js");


/**
 * @description A simple non-interactive map.
 */

class Map {
    /**
     * Create a simple carto.Map by specifying a container `id`.
     *
     * @param  {object} options
     * @param  {string} options.container The element's string `id`.
     *
     * @constructor Map
     * @memberof carto
     */
    constructor (options) {
        options = options || {};

        if (typeof options.container === 'string') {
            const container = window.document.getElementById(options.container);
            if (!container) {
                throw new _errors_carto_validation_error__WEBPACK_IMPORTED_MODULE_1__["default"](`${_errors_carto_validation_error__WEBPACK_IMPORTED_MODULE_1__["CartoValidationTypes"].MISSING_REQUIRED} Container '${options.container}' not found.`);
            } else {
                this._container = container;
            }
        }

        this._background = options.background || '';

        this._layers = new Set();
        this._hiddenLayers = new Set();
        this._canvas = this._createCanvas();
        this._container.appendChild(this._canvas);
        this._gl = this._canvas.getContext('webgl');
        this._matrix = this._createMatrix();
        this._resizeCanvas(this._containerDimensions());
    }

    on (event, callback) {
        if (event === 'load') {
            callback && callback();
        }
    }

    addLayer (layer, beforeLayerID) {
        if (!this._layers.has(layer)) {
            this._layers.add(layer);
        }

        layer.onAdd(this, this._gl);

        window.requestAnimationFrame(this._update.bind(this));
    }

    removeLayer (layer) {
        if (this._layers.has(layer)) {
            this._layers.remove(layer);
        }

        layer.onRemove(this);
    }

    getZoom () {
        return 0;
    }

    getCenter () {
        return { lat: 0, lng: 0 };
    }

    getBounds () {
        return {
            getNorthWest: () => ({ lat: 85, lng: -180 }),
            getSouthWest: () => ({ lat: -85.1, lng: -180 })
        };
    }

    changeVisibility (layer) {
        switch (layer.visibility) {
            case _constants_layer__WEBPACK_IMPORTED_MODULE_0__["layerVisibility"].VISIBLE:
                this.show(layer);
                break;
            case _constants_layer__WEBPACK_IMPORTED_MODULE_0__["layerVisibility"].HIDDEN:
                this.hide(layer);
                break;
        }
    }

    hide (layer) {
        if (this._layers.has(layer)) {
            this._layers.delete(layer);
            this._hiddenLayers.add(layer);
        }
    }

    show (layer) {
        if (this._hiddenLayers.has(layer)) {
            this._hiddenLayers.delete(layer);
            this._layers.add(layer);
        }
    }

    _update (timestamp) {
        // Don't re-render more than once per animation frame
        if (this.lastFrame === timestamp) {
            return;
        }

        this.lastFrame = timestamp;

        this._drawBackground(this._background);

        let loaded = true;
        let animated = false;

        this._layers.forEach((layer) => {
            const hasData = layer.hasDataframes();
            const hasAnimation = layer.isAnimated();

            if (hasData || hasAnimation) {
                layer.render(this._gl, this._matrix);
            }

            loaded = loaded && hasData;
            animated = animated || hasAnimation;
        });

        // Update until all layers are loaded or there is an animation
        if (!loaded || animated) {
            window.requestAnimationFrame(this._update.bind(this));
        }
    }

    _drawBackground (color) {
        switch (color) {
            case 'black':
                this._gl.clearColor(0, 0, 0, 1);
                this._gl.clear(this._gl.COLOR_BUFFER_BIT);
                break;
            case 'red':
                this._gl.clearColor(1, 0, 0, 1);
                this._gl.clear(this._gl.COLOR_BUFFER_BIT);
                break;
            case 'green':
                this._gl.clearColor(0, 1, 0, 1);
                this._gl.clear(this._gl.COLOR_BUFFER_BIT);
                break;
            case 'blue':
                this._gl.clearColor(0, 0, 1, 1);
                this._gl.clear(this._gl.COLOR_BUFFER_BIT);
                break;
            default:
                // white
        }
    }

    _createCanvas () {
        const canvas = window.document.createElement('canvas');

        canvas.className = 'canvas';
        canvas.style.position = 'absolute';

        return canvas;
    }

    _containerDimensions () {
        let width = 0;
        let height = 0;

        if (this._container) {
            width = this._container.offsetWidth || 400;
            height = this._container.offsetHeight || 300;
        }

        return { width, height };
    }

    _resizeCanvas (size) {
        const pixelRatio = window.devicePixelRatio || 1;

        this._canvas.width = pixelRatio * size.width;
        this._canvas.height = pixelRatio * size.height;

        this._canvas.style.width = `${size.width}px`;
        this._canvas.style.height = `${size.height}px`;
    }

    _createMatrix () {
        // This matrix generates proper values of zoom and _center
        const m = new Array(16);
        m[0] = -2;
        m[5] = -2;
        m[12] = 1;
        m[13] = 1;
        m[15] = 1;
        return m;
    }

    triggerRepaint () {
    }
}


/***/ }),

/***/ "./src/renderer/Dataframe.js":
/*!***********************************!*\
  !*** ./src/renderer/Dataframe.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Dataframe; });
/* harmony import */ var _client_rsys__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../client/rsys */ "./src/client/rsys.js");
/* harmony import */ var _src_utils_geometry__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../src/utils/geometry */ "./src/utils/geometry.js");
/* harmony import */ var _utils_collision__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/collision */ "./src/utils/collision.js");
/* harmony import */ var _DummyDataframe__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./DummyDataframe */ "./src/renderer/DummyDataframe.js");





// Maximum number of property textures that will be uploaded automatically to the GPU
// in a non-lazy manner
const MAX_GPU_AUTO_UPLOAD_TEXTURE_LIMIT = 32;

const featureClassCache = new Map();
const AABBTestResults = {
    INSIDE: 1,
    OUTSIDE: -1,
    INTERSECTS: 0
};

class Dataframe extends _DummyDataframe__WEBPACK_IMPORTED_MODULE_3__["default"] {
    get widthScale () {
        return this.renderer
            ? (2 / this.renderer.gl.canvas.clientHeight) / this.scale * this.renderer._zoom
            : 1;
    }

    setFreeObserver (freeObserver) {
        this.freeObserver = freeObserver;
    }

    bindRenderer (renderer) {
        const gl = renderer.gl;
        this.renderer = renderer;
        const vertices = this.decodedGeom.vertices;
        const breakpoints = this.decodedGeom.breakpoints;

        this.addProperties(this.properties);

        const width = this.renderer.RTT_WIDTH;
        const height = Math.ceil(this.numFeatures / width);
        this.height = height;

        this.vertexBuffer = gl.createBuffer();
        this.featureIDBuffer = gl.createBuffer();

        this.texColor = this._createStyleDataframeTexture(this.numFeatures);
        this.texWidth = this._createStyleDataframeTexture(this.numFeatures);
        this.texStrokeColor = this._createStyleDataframeTexture(this.numFeatures);
        this.texStrokeWidth = this._createStyleDataframeTexture(this.numFeatures);
        this.texFilter = this._createStyleDataframeTexture(this.numFeatures);

        const ids = new Float32Array(vertices.length);
        const inc = 1 / (1024 * 64);
        let index = 0;
        let tableX = {};
        let tableY = {};

        for (let k = 0; k < this.numFeatures; k++) {
            // Transform integer ID into a `vec2` to overcome WebGL 1 limitations,
            // output IDs will be in the `vec2([0,1], [0,1])` range
            tableX[k] = (k % width) / (width - 1);
            tableY[k] = height > 1 ? Math.floor(k / width) / (height - 1) : 0.5;
        }

        if (!breakpoints.length) {
            for (let i = 0; i < vertices.length; i += 6) {
                ids[i + 0] = tableX[index];
                ids[i + 1] = tableY[index];

                if (ids[i + 0] === 0) {
                    ids[i + 0] += inc;
                }
                if (ids[i + 1] === 0) {
                    ids[i + 1] += inc;
                }

                ids[i + 2] = -ids[i + 0];
                ids[i + 3] = ids[i + 1];

                ids[i + 4] = ids[i + 0];
                ids[i + 5] = -ids[i + 1];
                index++;
            }
        } else {
            for (let i = 0; i < vertices.length; i += 2) {
                while (i === breakpoints[index]) {
                    index++;
                }
                ids[i + 0] = tableX[index];
                ids[i + 1] = tableY[index];
            }
        }

        gl.bindBuffer(gl.ARRAY_BUFFER, this.vertexBuffer);
        gl.bufferData(gl.ARRAY_BUFFER, vertices, gl.STATIC_DRAW);

        if (this.decodedGeom.normals) {
            this.normalBuffer = gl.createBuffer();
            gl.bindBuffer(gl.ARRAY_BUFFER, this.normalBuffer);
            gl.bufferData(gl.ARRAY_BUFFER, this.decodedGeom.normals, gl.STATIC_DRAW);
        }

        gl.bindBuffer(gl.ARRAY_BUFFER, this.featureIDBuffer);
        gl.bufferData(gl.ARRAY_BUFFER, ids, gl.STATIC_DRAW);
    }

    getFeaturesAtPosition (pos, viz) {
        switch (this.type) {
            case 'point':
                return this._getPointsAtPosition(pos, viz);
            case 'line':
                return this._getFeaturesFromTriangles('line', pos, viz);
            case 'polygon':
                return this._getFeaturesFromTriangles('polygon', pos, viz);
            default:
                return [];
        }
    }

    getViewportAABB (renderScale, center, aspect) {
        return this._getBounds(renderScale, center, aspect);
    }

    inViewport (featureIndex, viz, viewportAABB) {
        const feature = this.getFeature(featureIndex);
        let strokeWidthScale = 1;

        if (!viz.transform.default) {
            const vizOffset = viz.transform.eval(feature);
            const widthScale = this.widthScale / 2;
            viewportAABB = {
                minx: viewportAABB.minx,
                miny: viewportAABB.miny,
                maxx: viewportAABB.maxx,
                maxy: viewportAABB.maxy
            };

            viewportAABB.minx -= vizOffset[0] * widthScale;
            viewportAABB.maxx -= vizOffset[0] * widthScale;
            viewportAABB.miny -= vizOffset[1] * widthScale;
            viewportAABB.maxy -= vizOffset[1] * widthScale;
        }

        switch (this.type) {
            case 'point':
                return this._isPointInViewport(featureIndex, viewportAABB);
            case 'line':
                strokeWidthScale = this._computeLineWidthScale(feature, viz);
                return this._isPolygonInViewport(featureIndex, viewportAABB, strokeWidthScale);
            case 'polygon':
                strokeWidthScale = this._computePolygonWidthScale(feature, viz);
                return this._isPolygonInViewport(featureIndex, viewportAABB, strokeWidthScale);
            default:
                return false;
        }
    }

    getPropertyTexture (propertyName) {
        if (this.propertyTex[propertyName]) {
            return this.propertyTex[propertyName];
        }

        const propertiesFloat32Array = this.properties[propertyName];
        // Dataframe is already bound to this context, "hot update" it
        const gl = this.renderer.gl;
        const width = this.renderer.RTT_WIDTH;
        const height = Math.ceil(this.numFeatures / width);
        this.height = height;

        this.propertyTex[propertyName] = gl.createTexture();
        gl.bindTexture(gl.TEXTURE_2D, this.propertyTex[propertyName]);
        gl.texImage2D(gl.TEXTURE_2D, 0, gl.ALPHA,
            width, height, 0, gl.ALPHA, gl.FLOAT,
            propertiesFloat32Array);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.NEAREST);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.NEAREST);
        return this.propertyTex[propertyName];
    }

    free () {
        if (this.propertyTex) {
            const gl = this.renderer.gl;
            this.propertyTex.map(tex => gl.deleteTexture(tex));
            gl.deleteTexture(this.texColor);
            gl.deleteTexture(this.texStrokeColor);
            gl.deleteTexture(this.texWidth);
            gl.deleteTexture(this.texStrokeWidth);
            gl.deleteTexture(this.texFilter);
            gl.deleteBuffer(this.vertexBuffer);
            gl.deleteBuffer(this.featureIDBuffer);
        }
        const freeObserver = this.freeObserver;

        Object.keys(this).map(key => {
            this[key] = null;
        });

        this.freed = true;

        if (freeObserver) {
            freeObserver(this);
        }
    }

    _isPointInViewport (featureIndex, viewportAABB) {
        const { minx, maxx, miny, maxy } = viewportAABB;
        const x = this.decodedGeom.vertices[6 * featureIndex + 0];
        const y = this.decodedGeom.vertices[6 * featureIndex + 1];
        return x > minx && x < maxx && y > miny && y < maxy;
    }

    _isPolygonInViewport (featureIndex, viewportAABB, strokeWidthScale) {
        const featureAABB = this._aabb[featureIndex];
        const aabbResult = this._compareAABBs(featureAABB, viewportAABB, strokeWidthScale);
        const vertices = this.decodedGeom.vertices;
        const normals = this.decodedGeom.normals;

        if (aabbResult === AABBTestResults.INTERSECTS) {
            const range = this.decodedGeom.featureIDToVertexIndex.get(featureIndex);
            return _isPolygonCollidingViewport(vertices, normals, range.start, range.end, strokeWidthScale, viewportAABB);
        }

        return aabbResult === AABBTestResults.INSIDE;
    }

    _compareAABBs (featureAABB, viewportAABB, stroke) {
        if (featureAABB === null) {
            return AABBTestResults.OUTSIDE;
        }

        const featureStrokeAABB = {
            minx: featureAABB.minx - stroke,
            miny: featureAABB.miny - stroke,
            maxx: featureAABB.maxx + stroke,
            maxy: featureAABB.maxy + stroke
        };

        switch (true) {
            case _isFeatureAABBInsideViewport(featureStrokeAABB, viewportAABB):
                return AABBTestResults.INSIDE;
            case _isFeatureAABBOutsideViewport(featureStrokeAABB, viewportAABB):
                return AABBTestResults.OUTSIDE;
            default:
                return AABBTestResults.INTERSECTS;
        }
    }

    _getBounds (renderScale, center, aspect) {
        this.vertexScale = [(renderScale / aspect) * this.scale, renderScale * this.scale];
        this.vertexOffset = [(renderScale / aspect) * (center.x - this.center.x), renderScale * (center.y - this.center.y)];

        const minx = (-1 + this.vertexOffset[0]) / this.vertexScale[0];
        const maxx = (1 + this.vertexOffset[0]) / this.vertexScale[0];
        const miny = (-1 + this.vertexOffset[1]) / this.vertexScale[1];
        const maxy = (1 + this.vertexOffset[1]) / this.vertexScale[1];

        return { minx, maxx, miny, maxy };
    }

    _getPointsAtPosition (pos, viz) {
        const p = Object(_client_rsys__WEBPACK_IMPORTED_MODULE_0__["wToR"])(pos.x, pos.y, {
            center: this.center,
            scale: this.scale
        });

        const points = this.decodedGeom.vertices;
        const features = [];

        const widthScale = this.widthScale / 2;

        for (let i = 0; i < points.length; i += 6) {
            const featureIndex = i / 6;
            const center = {
                x: points[i],
                y: points[i + 1]
            };

            const feature = this.getFeature(featureIndex);

            if (this._isFeatureFiltered(feature, viz.filter)) {
                continue;
            }

            const strokeWidthScale = this._computePointWidthScale(feature, viz);

            if (!viz.symbol.default) {
                const symbolOffset = viz.symbolPlacement.eval(feature);
                center.x += symbolOffset[0] * strokeWidthScale;
                center.y += symbolOffset[1] * strokeWidthScale;
            }
            if (!viz.transform.default) {
                const vizOffset = viz.transform.eval(feature);
                center.x += vizOffset[0] * widthScale;
                center.y += vizOffset[1] * widthScale;
            }

            const inside = Object(_src_utils_geometry__WEBPACK_IMPORTED_MODULE_1__["pointInCircle"])(p, center, strokeWidthScale);

            if (inside) {
                features.push(this.getFeature(featureIndex));
            }
        }

        return features;
    }

    _getFeaturesFromTriangles (geometryType, pos, viz) {
        const point = Object(_client_rsys__WEBPACK_IMPORTED_MODULE_0__["wToR"])(pos.x, pos.y, {
            center: this.center,
            scale: this.scale
        });

        const vertices = this.decodedGeom.vertices;
        const normals = this.decodedGeom.normals;
        const breakpoints = this.decodedGeom.breakpoints;
        const features = [];
        // Linear search for all features
        // Tests triangles since we already have the triangulated form
        // Moreover, with an acceleration structure and triangle testing features could be subdivided easily
        let featureIndex = -1;
        let strokeWidthScale;
        const widthScale = this.widthScale / 2;
        let pointWithOffset;

        for (let i = 0; i < vertices.length; i += 6) {
            if (i === 0 || i >= breakpoints[featureIndex]) {
                featureIndex++;
                const feature = this.getFeature(featureIndex);
                let offset = { x: 0, y: 0 };

                if (!viz.transform.default) {
                    const vizOffset = viz.transform.eval(feature);
                    offset.x = vizOffset[0] * widthScale;
                    offset.y = vizOffset[1] * widthScale;
                }

                pointWithOffset = { x: point.x - offset.x, y: point.y - offset.y };

                if (!Object(_src_utils_geometry__WEBPACK_IMPORTED_MODULE_1__["pointInRectangle"])(pointWithOffset, this._aabb[featureIndex]) ||
                    this._isFeatureFiltered(feature, viz.filter)) {
                    i = breakpoints[featureIndex] - 6;
                    continue;
                }

                strokeWidthScale = geometryType === 'line'
                    ? this._computeLineWidthScale(feature, viz)
                    : this._computePolygonWidthScale(feature, viz);
            }

            const v1 = {
                x: vertices[i + 0] + normals[i + 0] * strokeWidthScale,
                y: vertices[i + 1] + normals[i + 1] * strokeWidthScale
            };

            const v2 = {
                x: vertices[i + 2] + normals[i + 2] * strokeWidthScale,
                y: vertices[i + 3] + normals[i + 3] * strokeWidthScale
            };

            const v3 = {
                x: vertices[i + 4] + normals[i + 4] * strokeWidthScale,
                y: vertices[i + 5] + normals[i + 5] * strokeWidthScale
            };

            const inside = Object(_src_utils_geometry__WEBPACK_IMPORTED_MODULE_1__["pointInTriangle"])(pointWithOffset, v1, v2, v3);

            if (inside) {
                features.push(this.getFeature(featureIndex));
                // Don't repeat a feature if we the point is on a shared (by two triangles) edge
                // Also, don't waste CPU cycles
                i = breakpoints[featureIndex] - 6;
            }
        }

        return features;
    }

    _isFeatureFiltered (feature, filterExpression) {
        return filterExpression.eval(feature) < 0.5;
    }

    _genFeatureClass () {
        if (featureClassCache.has(this.metadata)) {
            this._cls = featureClassCache.get(this.metadata);
            return;
        }
        const cls = class ViewportFeature {
            constructor (index, dataframe) {
                this._index = index;
                this._dataframe = dataframe;
            }
        };

        const metadata = this.metadata;
        const getters = {};
        for (let i = 0; i < this.metadata.propertyKeys.length; i++) {
            const propertyName = this.metadata.propertyKeys[i];
            getters[propertyName] = {
                get: function () {
                    const index = this._index;
                    if (metadata.properties[propertyName].type === 'category') {
                        return metadata.IDToCategory.get(this._dataframe.properties[propertyName][index]);
                    } else {
                        return this._dataframe.properties[propertyName][index];
                    }
                }
            };
        }

        Object.defineProperties(cls.prototype, getters);

        featureClassCache.set(this.metadata, cls);
        this._cls = cls;
    }

    _getFeatureProperty (index, propertyName) {
        if (this.metadata.properties[propertyName].type === 'category') {
            return this.metadata.IDToCategory.get(this.properties[propertyName][index]);
        } else {
            return this.properties[propertyName][index];
        }
    }

    getFeature (index) {
        if (!this.cachedFeatures) {
            this.cachedFeatures = new Array(this.numFeatures);
        }

        if (this.cachedFeatures[index] !== undefined) {
            return this.cachedFeatures[index];
        }

        if (!this._cls) {
            this._genFeatureClass();
        }

        const feature = new this._cls(index, this);
        this.cachedFeatures[index] = feature;
        return feature;
    }

    _addProperty (propertyName) {
        if (Object.keys(this.propertyTex).length < MAX_GPU_AUTO_UPLOAD_TEXTURE_LIMIT) {
            this.getPropertyTexture(propertyName);
        }
    }

    // Add new properties to the dataframe or overwrite previously stored ones.
    // `properties` is of the form: {propertyName: Float32Array}
    addProperties (properties) {
        for (let i = 0; i < this.metadata.propertyKeys.length; i++) {
            const propertyName = this.metadata.propertyKeys[i];
            this._addProperty(propertyName);
        }
        this._genFeatureClass();
    }

    _createStyleDataframeTexture (numFeatures) {
        // TODO we are wasting 75% of the memory for the scalar attributes (width, strokeWidth),
        // since RGB components are discarded
        const gl = this.renderer.gl;
        const width = this.renderer.RTT_WIDTH;
        const height = Math.ceil(numFeatures / width);
        const texture = gl.createTexture();
        gl.bindTexture(gl.TEXTURE_2D, texture);
        gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA,
            width, height, 0, gl.RGBA, gl.UNSIGNED_BYTE,
            null);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.NEAREST);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.NEAREST);
        return texture;
    }

    _computePointWidthScale (feature, viz) {
        const SATURATION_PX = 1024;
        const diameter = Math.min(viz.width.eval(feature), SATURATION_PX) + Math.min(viz.strokeWidth.eval(feature), SATURATION_PX);

        return diameter / 2 * this.widthScale;
    }

    _computeLineWidthScale (feature, viz) {
        const SATURATION_PX = 1024;
        const diameter = Math.min(viz.width.eval(feature), SATURATION_PX);

        return diameter / 2 * this.widthScale;
    }

    _computePolygonWidthScale (feature, viz) {
        const SATURATION_PX = 1024;
        const diameter = Math.min(viz.strokeWidth.eval(feature), SATURATION_PX);

        return diameter / 2 * this.widthScale;
    }
}

function _isFeatureAABBInsideViewport (featureAABB, viewportAABB) {
    return (featureAABB.minx >= viewportAABB.minx && featureAABB.maxx <= viewportAABB.maxx &&
        featureAABB.miny >= viewportAABB.miny && featureAABB.maxy <= viewportAABB.maxy);
}

function _isFeatureAABBOutsideViewport (featureAABB, viewportAABB) {
    return (featureAABB.minx > viewportAABB.maxx || featureAABB.miny > viewportAABB.maxy ||
        featureAABB.maxx < viewportAABB.minx || featureAABB.maxy < viewportAABB.miny);
}

function _isPolygonCollidingViewport (vertices, normals, start, end, strokeWidthScale, viewportAABB) {
    for (let i = start; i < end; i += 6) {
        const triangle = [{
            x: vertices[i + 0] + normals[i + 0] * strokeWidthScale,
            y: vertices[i + 1] + normals[i + 1] * strokeWidthScale
        }, {
            x: vertices[i + 2] + normals[i + 2] * strokeWidthScale,
            y: vertices[i + 3] + normals[i + 3] * strokeWidthScale
        }, {
            x: vertices[i + 4] + normals[i + 4] * strokeWidthScale,
            y: vertices[i + 5] + normals[i + 5] * strokeWidthScale
        }, {
            x: vertices[i + 0] + normals[i + 0] * strokeWidthScale,
            y: vertices[i + 1] + normals[i + 1] * strokeWidthScale
        }];

        if (Object(_utils_collision__WEBPACK_IMPORTED_MODULE_2__["triangleCollides"])(triangle, viewportAABB)) {
            return true;
        }
    }

    return false;
}


/***/ }),

/***/ "./src/renderer/DummyDataframe.js":
/*!****************************************!*\
  !*** ./src/renderer/DummyDataframe.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return DummyDataframe; });
/* harmony import */ var _decoder__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./decoder */ "./src/renderer/decoder/index.js");
/* harmony import */ var _utils_geometry__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/geometry */ "./src/utils/geometry.js");



class DummyDataframe {
    constructor ({ center, scale, geom, properties, type, active, size, metadata }) {
        this.active = active;
        this.center = center;
        this.properties = properties;
        this.scale = scale;
        this.type = type;
        this.decodedGeom = Object(_decoder__WEBPACK_IMPORTED_MODULE_0__["decodeGeom"])(type, geom);
        this.numVertex = type === 'point'
            ? size * 3
            : this.decodedGeom.vertices.length / 2;
        this.numFeatures = type === 'point' ? size : this.decodedGeom.breakpoints.length || this.numVertex;
        this.propertyTex = [];
        this.metadata = metadata;
        this.propertyCount = 0;
        this._aabb = Object(_utils_geometry__WEBPACK_IMPORTED_MODULE_1__["computeAABB"])(geom, type);
    }
}


/***/ }),

/***/ "./src/renderer/Metadata.js":
/*!**********************************!*\
  !*** ./src/renderer/Metadata.js ***!
  \**********************************/
/*! exports provided: IDENTITY, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IDENTITY", function() { return IDENTITY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Metadata; });

// The IDENTITY metadata contains zero properties
const IDENTITY = {
    properties: {}
};

class Metadata {
    constructor ({ properties, featureCount, sample, geomType, isAggregated, idProperty } = { properties: {} }) {
        this.properties = properties;
        this.featureCount = featureCount;
        this.sample = sample;
        this.geomType = geomType;
        this.isAggregated = isAggregated;
        this.idProperty = idProperty || 'cartodb_id';

        this.categoryToID = new Map();
        this.IDToCategory = new Map();
        this.numCategories = 0;

        Object.values(properties).map(property => {
            property.categories = property.categories || [];
            property.categories.map(category => this.categorizeString(property, category.name, true));
        });

        this.propertyKeys = Object.keys(this.properties);
    }
    categorizeString (propertyName, category, init = false) {
        if (category === undefined) {
            category = null;
        }
        if (this.categoryToID.has(category)) {
            return this.categoryToID.get(category);
        }
        if (!init) {
            this.properties[propertyName].categories.push({
                name: category,
                frequency: Number.NaN
            });
        }
        this.categoryToID.set(category, this.numCategories);
        this.IDToCategory.set(this.numCategories, category);
        this.numCategories++;
        return this.numCategories - 1;
    }
    propertyNames (propertyName) {
        const prop = this.properties[propertyName];
        if (prop.aggregations) {
            return Object.keys(prop.aggregations).map(fn => prop.aggregations[fn]);
        }
        return [propertyName];
    }
}


/***/ }),

/***/ "./src/renderer/RenderLayer.js":
/*!*************************************!*\
  !*** ./src/renderer/RenderLayer.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return RenderLayer; });
/* harmony import */ var _interactivity_feature__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../interactivity/feature */ "./src/interactivity/feature.js");
/* harmony import */ var _errors_carto_validation_error__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../errors/carto-validation-error */ "./src/errors/carto-validation-error.js");



class RenderLayer {
    constructor () {
        this.dataframes = [];
        this.renderer = null;
        this.viz = null;
        this.type = null;
        this.customizedFeatures = {};
        this.idProperty = null;
    }
    // Performance-intensive. The required allocation and copy of resources will happen synchronously.
    // To achieve good performance, avoid multiple calls within the same event, particularly with large dataframes.
    addDataframe (dataframe) {
        if (this.type) {
            this._checkDataframeType(dataframe);
        }
        this.type = dataframe.type;
        if (this.renderer) {
            dataframe.bindRenderer(this.renderer);
        }
        this.dataframes.push(dataframe);
        this.idProperty = dataframe.metadata.idProperty;
    }

    setRenderer (renderer) {
        this.renderer = renderer;
        this.dataframes.forEach(d => d.bindRenderer(renderer));
    }

    setViz (viz) {
        this.viz = viz;
    }

    getActiveDataframes () {
        this.dataframes = this.dataframes.filter(df => !df.freed);
        let active = this.dataframes.filter(df => df.active && df.numVertex);
        if (active.length && active[0].orderID !== undefined) {
            active = active.sort((a, b) => a.orderID - b.orderID);
        }
        return active;
    }

    hasDataframes () {
        return this.getActiveDataframes().length > 0;
    }

    getNumFeatures () {
        return this.getActiveDataframes().map(d => d.numFeatures).reduce((x, y) => x + y, 0);
    }

    _checkDataframeType (dataframe) {
        if (this.type !== dataframe.type) {
            throw new _errors_carto_validation_error__WEBPACK_IMPORTED_MODULE_1__["default"](`${_errors_carto_validation_error__WEBPACK_IMPORTED_MODULE_1__["CartoValidationTypes"].INCORRECT_TYPE} Layer dataframes must always be of the same type`);
        }
    }

    getFeaturesAtPosition (pos) {
        if (!this.viz) {
            return [];
        }
        return [].concat(...this.getActiveDataframes().map(df =>
            df.getFeaturesAtPosition(pos, this.viz)
        )).map(rawFeature =>
            new _interactivity_feature__WEBPACK_IMPORTED_MODULE_0__["default"](rawFeature, this.viz, this.customizedFeatures, this.trackFeatureViz, this.idProperty)
        );
    }

    trackFeatureViz (featureID, vizProperty, newViz, customizedFeatures) {
        customizedFeatures[featureID] = customizedFeatures[featureID] || {};
        customizedFeatures[featureID][vizProperty] = newViz;
    }

    freeDataframes () {
        this.dataframes.map(df => df.free());
        this.dataframes = [];
        this.type = null;
    }
}


/***/ }),

/***/ "./src/renderer/Renderer.js":
/*!**********************************!*\
  !*** ./src/renderer/Renderer.js ***!
  \**********************************/
/*! exports provided: RTT_WIDTH, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RTT_WIDTH", function() { return RTT_WIDTH; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Renderer; });
/* harmony import */ var _shaders__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./shaders */ "./src/renderer/shaders/index.js");
/* harmony import */ var _viz_expressions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./viz/expressions */ "./src/renderer/viz/expressions.js");
/* harmony import */ var _errors_carto_runtime_error__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../errors/carto-runtime-error */ "./src/errors/carto-runtime-error.js");




const INITIAL_TIMESTAMP = Date.now();

/**
 * The renderer use fuzzy logic where < 0.5 means false and >= 0.5 means true
 */
const FILTERING_THRESHOLD = 0.5;

/**
 * @typedef {object} RPoint - Point in renderer coordinates space
 * @property {number} x
 * @property {number} y
 */

/**
 * @description The Render To Texture Width limits the maximum number of features per dataframe: *maxFeatureCount = RTT_WIDTH^2*
 *
 * Large RTT_WIDTH values are unsupported by hardware. Limits vary on each machine.
 * Support starts to drop from 2048, with a drastic reduction in support for more than 4096 pixels.
 *
 * Large values imply a small overhead too.
 */
const RTT_WIDTH = 1024;

/**
 * @description Renderer constructor. Use it to create a new renderer bound to the provided canvas.
 * Initialization will be done synchronously.
 * The function will fail in case that a WebGL context cannot be created this can happen because of the following reasons:
 *   * The provided canvas element is invalid
 *   * The browser or the machine doesn't support WebGL or the required WebGL extension and minimum parameter values
 * @jsapi
 * @memberOf renderer
 * @constructor
 * @param {HTMLElement} canvas - the WebGL context will be created on this element
 */

class Renderer {
    constructor (canvas) {
        if (canvas) {
            this.gl = canvas.getContext('webgl');
            if (!this.gl) {
                throw new _errors_carto_runtime_error__WEBPACK_IMPORTED_MODULE_2__["default"](`${_errors_carto_runtime_error__WEBPACK_IMPORTED_MODULE_2__["CartoRuntimeTypes"].WEB_GL} WebGL 1 is unsupported`);
            }
            this._initGL(this.gl);
        }
        this._center = { x: 0, y: 0 };
        this._zoom = 1;
        this.RTT_WIDTH = RTT_WIDTH;
        this.dataframes = [];
    }

    /**
     * Initialize renderer
     * @param {WebGLRenderingContext} gl - WebGL context
     */
    initialize (gl) {
        this._initGL(gl);
    }

    /**
     * Set Renderer visualization center
     * @param {number} x
     * @param {number} y
     */
    setCenter (center) {
        this._center.x = center.x;
        this._center.y = center.y;
    }

    /**
     * Set Renderer visualization zoom
     * @param {number} zoom
     */
    setZoom (zoom) {
        this._zoom = zoom;
    }

    /**
     * Get Renderer visualization bounds
     * @return {*}
     */
    getBounds () {
        const sx = this._zoom * this._getAspect();
        const sy = this._zoom;
        return [this._center.x - sx, this._center.y - sy, this._center.x + sx, this._center.y + sy];
    }

    _initGL (gl) {
        this.gl = gl;
        const OESTextureFloat = gl.getExtension('OES_texture_float');
        if (!OESTextureFloat) {
            throw new _errors_carto_runtime_error__WEBPACK_IMPORTED_MODULE_2__["default"](`${_errors_carto_runtime_error__WEBPACK_IMPORTED_MODULE_2__["CartoRuntimeTypes"].WEB_GL} WebGL extension 'OES_texture_float' is unsupported`);
        }
        const supportedRTT = gl.getParameter(gl.MAX_RENDERBUFFER_SIZE);
        if (supportedRTT < RTT_WIDTH) {
            throw new _errors_carto_runtime_error__WEBPACK_IMPORTED_MODULE_2__["default"](`${_errors_carto_runtime_error__WEBPACK_IMPORTED_MODULE_2__["CartoRuntimeTypes"].WEB_GL} WebGL parameter 'gl.MAX_RENDERBUFFER_SIZE' is below the requirement: ${supportedRTT} < ${RTT_WIDTH}`);
        }
        this._initShaders();

        this.auxFB = gl.createFramebuffer();

        // Create a VBO that covers the entire screen
        // Use a "big" triangle instead of a square for performance and simplicity
        this.bigTriangleVBO = gl.createBuffer();
        gl.bindBuffer(gl.ARRAY_BUFFER, this.bigTriangleVBO);
        const vertices = new Float32Array([
            10.0, -10.0,
            0.0, 10.0,
            -10.0, -10.0
        ]);
        gl.bufferData(gl.ARRAY_BUFFER, vertices, gl.STATIC_DRAW);

        // Create a 1x1 RGBA texture set to [0,0,0,0]
        // Needed because sometimes we don't really use some textures within the shader, but they are declared anyway.
        this.zeroTex = gl.createTexture();
        gl.bindTexture(gl.TEXTURE_2D, this.zeroTex);
        gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA,
            1, 1, 0, gl.RGBA, gl.UNSIGNED_BYTE,
            new Uint8Array(4));
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.NEAREST);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.NEAREST);

        this._AATex = gl.createTexture();
        this._AAFB = gl.createFramebuffer();

        gl.bindFramebuffer(gl.FRAMEBUFFER, null);
        gl.bindTexture(gl.TEXTURE_2D, this.zeroTex);
    }

    _getAspect () {
        if (this.gl) {
            return this.gl.canvas.width / this.gl.canvas.height;
        }
        return 1;
    }

    /**
     * Run aggregation functions over the visible features.
     */
    _runViewportAggregations (renderLayer) {
        const dataframes = renderLayer.getActiveDataframes();
        const viz = renderLayer.viz;

        // Performance optimization to avoid doing DFS at each feature iteration
        const viewportExpressions = this._getViewportExpressions(viz._getRootExpressions());

        if (!viewportExpressions.length) {
            return;
        }

        // Assume that all dataframes of a renderLayer share the same metadata
        const metadata = dataframes.length ? dataframes[0].metadata : null;

        viewportExpressions.forEach(expr => expr._resetViewportAgg(metadata));

        const viewportExpressionsLength = viewportExpressions.length;

        // Avoid acumulating the same feature multiple times keeping a set of processed features (same feature can belong to multiple dataframes).
        const processedFeaturesIDs = new Set();

        const aspect = this.gl.canvas.width / this.gl.canvas.height;
        const scale = 1 / this._zoom;
        dataframes.forEach(dataframe => {
            const aabb = dataframe.getViewportAABB(scale, this._center, aspect);
            for (let i = 0; i < dataframe.numFeatures; i++) {
                const featureId = dataframe.properties[metadata.idProperty][i];

                // If feature has been acumulated ignore it
                if (processedFeaturesIDs.has(featureId)) {
                    continue;
                }
                // Ignore features outside viewport
                if (!dataframe.inViewport(i, viz, aabb)) {
                    continue;
                }

                processedFeaturesIDs.add(featureId);

                const feature = this._featureFromDataFrame(dataframe, i, metadata);

                // Ignore filtered features
                if (viz.filter.eval(feature) < FILTERING_THRESHOLD) {
                    continue;
                }

                for (let j = 0; j < viewportExpressionsLength; j++) {
                    viewportExpressions[j].accumViewportAgg(feature);
                }
            }
        });
    }

    /**
     * Perform a depth first search through the expression tree collecting all viewport expressions.
     */
    _getViewportExpressions (rootExpressions) {
        const viewportExpressions = [];

        function dfs (expr) {
            if (expr._isViewport) {
                viewportExpressions.push(expr);
            } else {
                expr._getChildren().map(dfs);
            }
        }

        rootExpressions.map(dfs);
        return viewportExpressions;
    }

    /**
     * Build a feature object from a dataframe and an index copying all the properties.
     */
    _featureFromDataFrame (dataframe, index, metadata) {
        return dataframe.getFeature(index);
    }

    renderLayer (renderLayer, drawMetadata) {
        const dataframes = renderLayer.getActiveDataframes();
        const viz = renderLayer.viz;
        const gl = this.gl;
        const aspect = this._getAspect();

        this._runViewportAggregations(renderLayer);

        if (!dataframes.length) {
            return;
        }
        viz._getRootExpressions().map(expr => expr._dataReady());

        gl.enable(gl.CULL_FACE);
        gl.disable(gl.BLEND);
        gl.disable(gl.DEPTH_TEST);
        gl.disable(gl.STENCIL_TEST);
        gl.depthMask(false);
        gl.bindFramebuffer(gl.FRAMEBUFFER, this.auxFB);

        const styleDataframe = (dataframe, dataframeTexture, shader, vizExpr) => {
            const textureId = shader.textureIds.get(viz);

            gl.framebufferTexture2D(gl.FRAMEBUFFER, gl.COLOR_ATTACHMENT0, gl.TEXTURE_2D, dataframeTexture, 0);
            gl.viewport(0, 0, RTT_WIDTH, dataframe.height);
            gl.clear(gl.COLOR_BUFFER_BIT);

            gl.useProgram(shader.program);
            // Enforce that property texture TextureUnit don't clash with auxiliar ones
            drawMetadata.freeTexUnit = Object.keys(textureId).length;
            vizExpr._setTimestamp((Date.now() - INITIAL_TIMESTAMP) / 1000.0);
            vizExpr._preDraw(shader.program, drawMetadata, gl);

            Object.keys(textureId).forEach((name, i) => {
                gl.activeTexture(gl.TEXTURE0 + i);
                gl.bindTexture(gl.TEXTURE_2D, dataframe.getPropertyTexture(name));
                gl.uniform1i(textureId[name], i);
            });

            gl.enableVertexAttribArray(shader.vertexAttribute);
            gl.bindBuffer(gl.ARRAY_BUFFER, this.bigTriangleVBO);
            gl.vertexAttribPointer(shader.vertexAttribute, 2, gl.FLOAT, false, 0, 0);

            gl.drawArrays(gl.TRIANGLES, 0, 3);
            gl.disableVertexAttribArray(shader.vertexAttribute);
        };

        dataframes.map(dataframe => styleDataframe(dataframe, dataframe.texColor, viz.colorShader, viz.color));
        dataframes.map(dataframe => styleDataframe(dataframe, dataframe.texWidth, viz.widthShader, viz.width));
        dataframes.map(dataframe => styleDataframe(dataframe, dataframe.texStrokeColor, viz.strokeColorShader, viz.strokeColor));
        dataframes.map(dataframe => styleDataframe(dataframe, dataframe.texStrokeWidth, viz.strokeWidthShader, viz.strokeWidth));
        dataframes.map(dataframe => styleDataframe(dataframe, dataframe.texFilter, viz.filterShader, viz.filter));

        gl.blendFunc(gl.ONE, gl.ONE_MINUS_SRC_ALPHA);
        gl.enable(gl.BLEND);

        gl.bindFramebuffer(gl.FRAMEBUFFER, null);
        gl.viewport(0, 0, gl.drawingBufferWidth, gl.drawingBufferHeight);

        if (renderLayer.type !== 'point') {
            const antialiasingScale = (window.devicePixelRatio || 1) >= 2 ? 1 : 2;
            gl.bindFramebuffer(gl.FRAMEBUFFER, this._AAFB);
            const [w, h] = [gl.drawingBufferWidth, gl.drawingBufferHeight];

            if (w !== this._width || h !== this._height) {
                gl.bindTexture(gl.TEXTURE_2D, this._AATex);
                gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA,
                    w * antialiasingScale, h * antialiasingScale, 0, gl.RGBA, gl.UNSIGNED_BYTE, null);
                gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
                gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
                gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
                gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
                gl.framebufferTexture2D(gl.FRAMEBUFFER, gl.COLOR_ATTACHMENT0, gl.TEXTURE_2D, this._AATex, 0);

                const renderbuffer = gl.createRenderbuffer();
                gl.bindRenderbuffer(gl.RENDERBUFFER, renderbuffer);
                gl.renderbufferStorage(gl.RENDERBUFFER, gl.DEPTH_COMPONENT16, w * antialiasingScale, h * antialiasingScale);
                gl.framebufferRenderbuffer(gl.FRAMEBUFFER, gl.DEPTH_ATTACHMENT, gl.RENDERBUFFER, renderbuffer);

                [this._width, this._height] = [w, h];
            }
            gl.viewport(0, 0, w * antialiasingScale, h * antialiasingScale);
            gl.clear(gl.COLOR_BUFFER_BIT);
        }

        const scale = 1.0 / this._zoom;

        const { orderingMins, orderingMaxs } = getOrderingRenderBuckets(renderLayer);

        if (dataframes[0].type === 'line' || dataframes[0].type === 'polygon') {
            gl.clearDepth(1);
            gl.depthRange(0, 1);
            gl.depthFunc(gl.NOTEQUAL);
            gl.depthMask(true);
            gl.enable(gl.DEPTH_TEST);
        }

        const renderDrawPass = orderingIndex => dataframes.forEach(dataframe => {
            let freeTexUnit = 0;
            let renderer = null;
            if (!viz.symbol.default) {
                renderer = viz.symbolShader;
            } else if (dataframe.type === 'point') {
                renderer = viz.pointShader;
            } else if (dataframe.type === 'line') {
                renderer = viz.lineShader;
            } else {
                renderer = viz.polygonShader;
            }
            gl.useProgram(renderer.program);

            // Set filtering condition on "... AND feature is in current order bucket"
            gl.uniform1f(renderer.orderMinWidth, orderingMins[orderingIndex]);
            gl.uniform1f(renderer.orderMaxWidth, orderingMaxs[orderingIndex]);

            gl.uniform2f(renderer.vertexScaleUniformLocation,
                (scale / aspect) * dataframe.scale,
                scale * dataframe.scale);
            gl.uniform2f(renderer.vertexOffsetUniformLocation,
                (scale / aspect) * (this._center.x - dataframe.center.x),
                scale * (this._center.y - dataframe.center.y));
            gl.uniform2f(renderer.normalScale, 1 / gl.canvas.clientWidth, 1 / gl.canvas.clientHeight);

            dataframe.vertexScale = [(scale / aspect) * dataframe.scale, scale * dataframe.scale];

            dataframe.vertexOffset = [(scale / aspect) * (this._center.x - dataframe.center.x), scale * (this._center.y - dataframe.center.y)];

            gl.enableVertexAttribArray(renderer.vertexPositionAttribute);
            gl.bindBuffer(gl.ARRAY_BUFFER, dataframe.vertexBuffer);
            gl.vertexAttribPointer(renderer.vertexPositionAttribute, 2, gl.FLOAT, false, 0, 0);

            gl.enableVertexAttribArray(renderer.featureIdAttr);
            gl.bindBuffer(gl.ARRAY_BUFFER, dataframe.featureIDBuffer);
            gl.vertexAttribPointer(renderer.featureIdAttr, 2, gl.FLOAT, false, 0, 0);

            if (dataframe.type === 'line' || dataframe.type === 'polygon') {
                gl.enableVertexAttribArray(renderer.normalAttr);
                gl.bindBuffer(gl.ARRAY_BUFFER, dataframe.normalBuffer);
                gl.vertexAttribPointer(renderer.normalAttr, 2, gl.FLOAT, false, 0, 0);
            }

            gl.activeTexture(gl.TEXTURE0 + freeTexUnit);
            gl.bindTexture(gl.TEXTURE_2D, dataframe.texColor);
            gl.uniform1i(renderer.colorTexture, freeTexUnit);
            freeTexUnit++;

            gl.activeTexture(gl.TEXTURE0 + freeTexUnit);
            gl.bindTexture(gl.TEXTURE_2D, dataframe.texWidth);
            gl.uniform1i(renderer.widthTexture, freeTexUnit);
            freeTexUnit++;

            gl.activeTexture(gl.TEXTURE0 + freeTexUnit);
            gl.bindTexture(gl.TEXTURE_2D, dataframe.texFilter);
            gl.uniform1i(renderer.filterTexture, freeTexUnit);
            freeTexUnit++;
            gl.uniform2f(renderer.resolution, gl.canvas.width, gl.canvas.height);

            if (!viz.symbol.default) {
                const textureId = viz.symbolShader.textureIds.get(viz);
                // Enforce that property texture and style texture TextureUnits don't clash with auxiliar ones
                drawMetadata.freeTexUnit = freeTexUnit + Object.keys(textureId).length;
                viz.symbol._setTimestamp((Date.now() - INITIAL_TIMESTAMP) / 1000.0);
                viz.symbol._preDraw(viz.symbolShader.program, drawMetadata, gl);

                viz.symbolPlacement._setTimestamp((Date.now() - INITIAL_TIMESTAMP) / 1000.0);
                viz.symbolPlacement._preDraw(viz.symbolShader.program, drawMetadata, gl);

                freeTexUnit = drawMetadata.freeTexUnit;

                Object.keys(textureId).forEach(name => {
                    gl.activeTexture(gl.TEXTURE0 + freeTexUnit);
                    gl.bindTexture(gl.TEXTURE_2D, dataframe.getPropertyTexture(name));
                    gl.uniform1i(textureId[name], freeTexUnit);
                    freeTexUnit++;
                });
            } else if (dataframe.type !== 'line') {
                // Lines don't support stroke
                gl.activeTexture(gl.TEXTURE0 + freeTexUnit);
                gl.bindTexture(gl.TEXTURE_2D, dataframe.texStrokeColor);
                gl.uniform1i(renderer.strokeColorTexture, freeTexUnit);
                freeTexUnit++;

                gl.activeTexture(gl.TEXTURE0 + freeTexUnit);
                gl.bindTexture(gl.TEXTURE_2D, dataframe.texStrokeWidth);
                gl.uniform1i(renderer.strokeWidthTexture, freeTexUnit);
                freeTexUnit++;
            }

            if (dataframe.type === 'line' || dataframe.type === 'polygon') {
                gl.clear(gl.DEPTH_BUFFER_BIT);
            }

            if (!viz.transform.default) {
                const textureId = renderer.textureIds.get(viz);
                // Enforce that property texture and style texture TextureUnits don't clash with auxiliar ones
                drawMetadata.freeTexUnit = freeTexUnit + Object.keys(textureId).length;
                viz.transform._setTimestamp((Date.now() - INITIAL_TIMESTAMP) / 1000.0);
                viz.transform._preDraw(renderer.program, drawMetadata, gl);

                freeTexUnit = drawMetadata.freeTexUnit;

                Object.keys(textureId).forEach(name => {
                    gl.activeTexture(gl.TEXTURE0 + freeTexUnit);
                    gl.bindTexture(gl.TEXTURE_2D, dataframe.getPropertyTexture(name));
                    gl.uniform1i(textureId[name], freeTexUnit);
                    freeTexUnit++;
                });

                gl.uniform2f(renderer.resolution, gl.canvas.width, gl.canvas.height);
            }

            gl.drawArrays(gl.TRIANGLES, 0, dataframe.numVertex);

            gl.disableVertexAttribArray(renderer.vertexPositionAttribute);
            gl.disableVertexAttribArray(renderer.featureIdAttr);
            if (dataframe.type === 'line' || dataframe.type === 'polygon') {
                gl.disableVertexAttribArray(renderer.normalAttr);
                gl.disable(gl.DEPTH_TEST);
            }
        });
        orderingMins.map((_, orderingIndex) => {
            renderDrawPass(orderingIndex);
        });

        if (renderLayer.type !== 'point') {
            gl.bindFramebuffer(gl.FRAMEBUFFER, null);
            gl.viewport(0, 0, gl.drawingBufferWidth, gl.drawingBufferHeight);

            gl.useProgram(this._aaBlendShader.program);

            gl.activeTexture(gl.TEXTURE0);
            gl.bindTexture(gl.TEXTURE_2D, this._AATex);
            gl.uniform1i(this._aaBlendShader.readTU, 0);

            gl.enableVertexAttribArray(this._aaBlendShader.vertexAttribute);
            gl.bindBuffer(gl.ARRAY_BUFFER, this.bigTriangleVBO);
            gl.vertexAttribPointer(this._aaBlendShader.vertexAttribute, 2, gl.FLOAT, false, 0, 0);

            gl.drawArrays(gl.TRIANGLES, 0, 3);
            gl.disableVertexAttribArray(this._aaBlendShader.vertexAttribute);
        }

        gl.disable(gl.CULL_FACE);
    }

    /**
     * Initialize static shaders
     */
    _initShaders () {
        this._aaBlendShader = new _shaders__WEBPACK_IMPORTED_MODULE_0__["default"].AABlender(this.gl);
    }
}

function getOrderingRenderBuckets (renderLayer) {
    const orderer = renderLayer.viz.order;
    const MAX_SIZE = 1030;
    let orderingMins = [0];
    let orderingMaxs = [MAX_SIZE];
    // We divide the ordering into 64 buckets of 2 pixels each, since the size limit is 127 pixels
    const NUM_BUCKETS = 64;
    if (orderer.isA(_viz_expressions__WEBPACK_IMPORTED_MODULE_1__["Asc"])) {
        orderingMins = Array.from({ length: NUM_BUCKETS }, (_, i) => ((NUM_BUCKETS - 1) - i) * 2);
        orderingMaxs = Array.from({ length: NUM_BUCKETS }, (_, i) => i === 0 ? MAX_SIZE : ((NUM_BUCKETS - 1) - i + 1) * 2);
    } else if (orderer.isA(_viz_expressions__WEBPACK_IMPORTED_MODULE_1__["Desc"])) {
        orderingMins = Array.from({ length: NUM_BUCKETS }, (_, i) => i * 2);
        orderingMaxs = Array.from({ length: NUM_BUCKETS }, (_, i) => i === (NUM_BUCKETS - 1) ? MAX_SIZE : (i + 1) * 2);
    }
    return {
        orderingMins,
        orderingMaxs
    };
}


/***/ }),

/***/ "./src/renderer/decoder/common.js":
/*!****************************************!*\
  !*** ./src/renderer/decoder/common.js ***!
  \****************************************/
/*! exports provided: addLineString, resizeBuffer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addLineString", function() { return addLineString; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "resizeBuffer", function() { return resizeBuffer; });
/* harmony import */ var _utils_geometry__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/geometry */ "./src/utils/geometry.js");


/**
 * Create a triangulated lineString: zero-sized, vertex-shader expanded triangle list
 * with `miter` joins. For angle < 60 joins are automatically adjusted to `bevel`.
 * https://github.com/CartoDB/carto-vl/wiki/Line-rendering
 */
function addLineString (lineString, geomBuffer, index, isPolygon, skipCallback) {
    let prevPoint, currentPoint, nextPoint;
    let prevNormal, nextNormal;
    let drawLine;

    // We need at least two points
    if (lineString.length >= 4) {
        // Initialize the first two points
        prevPoint = [lineString[0], lineString[1]];
        currentPoint = [lineString[2], lineString[3]];
        prevNormal = Object(_utils_geometry__WEBPACK_IMPORTED_MODULE_0__["getLineNormal"])(prevPoint, currentPoint);

        for (let i = 4; i <= lineString.length; i += 2) {
            drawLine = !(skipCallback && skipCallback(i));

            if (drawLine) {
                // First triangle
                geomBuffer.vertices[index] = prevPoint[0];
                geomBuffer.normals[index++] = -prevNormal[0];
                geomBuffer.vertices[index] = prevPoint[1];
                geomBuffer.normals[index++] = -prevNormal[1];
                geomBuffer.vertices[index] = prevPoint[0];
                geomBuffer.normals[index++] = prevNormal[0];
                geomBuffer.vertices[index] = prevPoint[1];
                geomBuffer.normals[index++] = prevNormal[1];
                geomBuffer.vertices[index] = currentPoint[0];
                geomBuffer.normals[index++] = prevNormal[0];
                geomBuffer.vertices[index] = currentPoint[1];
                geomBuffer.normals[index++] = prevNormal[1];

                // Second triangle
                geomBuffer.vertices[index] = prevPoint[0];
                geomBuffer.normals[index++] = -prevNormal[0];
                geomBuffer.vertices[index] = prevPoint[1];
                geomBuffer.normals[index++] = -prevNormal[1];
                geomBuffer.vertices[index] = currentPoint[0];
                geomBuffer.normals[index++] = prevNormal[0];
                geomBuffer.vertices[index] = currentPoint[1];
                geomBuffer.normals[index++] = prevNormal[1];
                geomBuffer.vertices[index] = currentPoint[0];
                geomBuffer.normals[index++] = -prevNormal[0];
                geomBuffer.vertices[index] = currentPoint[1];
                geomBuffer.normals[index++] = -prevNormal[1];
            }

            // If there is a next point, compute its properties
            if (i <= lineString.length - 2) {
                nextPoint = [lineString[i], lineString[i + 1]];
            } else if (isPolygon) {
                nextPoint = [lineString[2], lineString[3]];
            }

            if (nextPoint) {
                nextNormal = Object(_utils_geometry__WEBPACK_IMPORTED_MODULE_0__["getLineNormal"])(currentPoint, nextPoint);

                if (drawLine) {
                    // `turnLeft` indicates that the nextLine turns to the left
                    // `joinNormal` contains the direction and size for the `miter` vertex
                    //  If this is not defined means that the join must be `bevel`.
                    let {turnLeft, joinNormal} = Object(_utils_geometry__WEBPACK_IMPORTED_MODULE_0__["getJoinNormal"])(prevNormal, nextNormal);

                    let leftNormal = turnLeft ? prevNormal : Object(_utils_geometry__WEBPACK_IMPORTED_MODULE_0__["neg"])(nextNormal);
                    let rightNormal = turnLeft ? nextNormal : Object(_utils_geometry__WEBPACK_IMPORTED_MODULE_0__["neg"])(prevNormal);

                    // Third triangle
                    geomBuffer.vertices[index] = currentPoint[0];
                    geomBuffer.normals[index++] = 0;
                    geomBuffer.vertices[index] = currentPoint[1];
                    // Mark vertex to be stroke in PolygonShader with the
                    // non-zero value 1e-37, so it validates the expression
                    // `normal != vec2(0.)` without affecting the vertex position.
                    geomBuffer.normals[index++] = isPolygon ? 1e-37 : 0;
                    geomBuffer.vertices[index] = currentPoint[0];
                    geomBuffer.normals[index++] = leftNormal[0];
                    geomBuffer.vertices[index] = currentPoint[1];
                    geomBuffer.normals[index++] = leftNormal[1];
                    geomBuffer.vertices[index] = currentPoint[0];
                    geomBuffer.normals[index++] = rightNormal[0];
                    geomBuffer.vertices[index] = currentPoint[1];
                    geomBuffer.normals[index++] = rightNormal[1];

                    if (joinNormal) {
                        // Forth triangle
                        geomBuffer.vertices[index] = currentPoint[0];
                        geomBuffer.normals[index++] = joinNormal[0];
                        geomBuffer.vertices[index] = currentPoint[1];
                        geomBuffer.normals[index++] = joinNormal[1];
                        geomBuffer.vertices[index] = currentPoint[0];
                        geomBuffer.normals[index++] = rightNormal[0];
                        geomBuffer.vertices[index] = currentPoint[1];
                        geomBuffer.normals[index++] = rightNormal[1];
                        geomBuffer.vertices[index] = currentPoint[0];
                        geomBuffer.normals[index++] = leftNormal[0];
                        geomBuffer.vertices[index] = currentPoint[1];
                        geomBuffer.normals[index++] = leftNormal[1];
                    }
                }
            }

            // Update the variables for the next iteration
            prevPoint = currentPoint;
            currentPoint = nextPoint;
            prevNormal = nextNormal;
            nextPoint = null;
        }
    }
    return index;
}

/**
 * Resize a Float32Array buffer in an efficient way
 */
function resizeBuffer (oldBuffer, newSize) {
    const newBuffer = new Float32Array(newSize);
    newBuffer.set(oldBuffer);
    return newBuffer;
}


/***/ }),

/***/ "./src/renderer/decoder/index.js":
/*!***************************************!*\
  !*** ./src/renderer/decoder/index.js ***!
  \***************************************/
/*! exports provided: decodeGeom */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "decodeGeom", function() { return decodeGeom; });
/* harmony import */ var _pointDecoder__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pointDecoder */ "./src/renderer/decoder/pointDecoder.js");
/* harmony import */ var _lineDecoder__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lineDecoder */ "./src/renderer/decoder/lineDecoder.js");
/* harmony import */ var _polygonDecoder__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./polygonDecoder */ "./src/renderer/decoder/polygonDecoder.js");
/* harmony import */ var _errors_carto_runtime_error__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../errors/carto-runtime-error */ "./src/errors/carto-runtime-error.js");





function decodeGeom (geomType, geom) {
    switch (geomType) {
        case 'point':
            return Object(_pointDecoder__WEBPACK_IMPORTED_MODULE_0__["decodePoint"])(geom);
        case 'line':
            return Object(_lineDecoder__WEBPACK_IMPORTED_MODULE_1__["decodeLine"])(geom);
        case 'polygon':
            return Object(_polygonDecoder__WEBPACK_IMPORTED_MODULE_2__["decodePolygon"])(geom);
        default:
            throw new _errors_carto_runtime_error__WEBPACK_IMPORTED_MODULE_3__["default"](`${_errors_carto_runtime_error__WEBPACK_IMPORTED_MODULE_3__["CartoRuntimeTypes"].NOT_SUPPORTED} Unimplemented geometry type: '${geomType}'.`);
    }
}


/***/ }),

/***/ "./src/renderer/decoder/lineDecoder.js":
/*!*********************************************!*\
  !*** ./src/renderer/decoder/lineDecoder.js ***!
  \*********************************************/
/*! exports provided: decodeLine */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "decodeLine", function() { return decodeLine; });
/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./common */ "./src/renderer/decoder/common.js");


// If the geometry type is 'line' it will generate the appropriate zero-sized, vertex-shader expanded triangle list with `miter` and `bevel` joins.
// The geom will be an array of coordinates in this case

const STATIC_INITIAL_BUFFER_SIZE = 1024 * 1024; // 4 MB
const MAX_VERTICES_COORDINATES_PER_SEGMENT = 24;

let index = 0;
let geomBuffer = {
    vertices: new Float32Array(STATIC_INITIAL_BUFFER_SIZE),
    normals: new Float32Array(STATIC_INITIAL_BUFFER_SIZE)
};

function decodeLine (geometry) {
    let breakpoints = []; // Array of indices (to vertexArray) that separate each feature
    let featureIDToVertexIndex = new Map();

    index = 0;
    for (let i = 0; i < geometry.length; i++) {
        const feature = geometry[i];
        for (let j = 0; j < feature.length; j++) {
            // Increase buffers size if required
            resizeBuffers(MAX_VERTICES_COORDINATES_PER_SEGMENT * feature[j].length);

            // Add line string
            index = Object(_common__WEBPACK_IMPORTED_MODULE_0__["addLineString"])(feature[j], geomBuffer, index);
        }

        featureIDToVertexIndex.set(breakpoints.length, breakpoints.length === 0
            ? { start: 0, end: index }
            : { start: featureIDToVertexIndex.get(breakpoints.length - 1).end, end: index });

        breakpoints.push(index);
    }

    const verticesArrayBuffer = new ArrayBuffer(4 * index);
    const normalsArrayBuffer = new ArrayBuffer(4 * index);
    const vertices = new Float32Array(verticesArrayBuffer);
    const normals = new Float32Array(normalsArrayBuffer);
    for (let i = 0; i < index; i++) {
        vertices[i] = geomBuffer.vertices[i];
        normals[i] = geomBuffer.normals[i];
    }
    return {
        vertices,
        normals,
        verticesArrayBuffer,
        normalsArrayBuffer,
        featureIDToVertexIndex,
        breakpoints
    };
}

// Resize buffers as needed if `additionalSize` floats overflow the current buffers.
function resizeBuffers (additionalSize) {
    const minimumNeededSize = index + additionalSize;
    if (minimumNeededSize > geomBuffer.vertices.length) {
        const newSize = 2 * minimumNeededSize;
        geomBuffer.vertices = Object(_common__WEBPACK_IMPORTED_MODULE_0__["resizeBuffer"])(geomBuffer.vertices, newSize);
        geomBuffer.normals = Object(_common__WEBPACK_IMPORTED_MODULE_0__["resizeBuffer"])(geomBuffer.normals, newSize);
    }
}


/***/ }),

/***/ "./src/renderer/decoder/pointDecoder.js":
/*!**********************************************!*\
  !*** ./src/renderer/decoder/pointDecoder.js ***!
  \**********************************************/
/*! exports provided: decodePoint */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "decodePoint", function() { return decodePoint; });
// If the geometry type is 'point' it will pass trough the geom (the vertex array)

function decodePoint (verticesArrayBuffer) {
    return {
        verticesArrayBuffer: verticesArrayBuffer,
        vertices: new Float32Array(verticesArrayBuffer),
        breakpoints: []
    };
}


/***/ }),

/***/ "./src/renderer/decoder/polygonDecoder.js":
/*!************************************************!*\
  !*** ./src/renderer/decoder/polygonDecoder.js ***!
  \************************************************/
/*! exports provided: decodePolygon */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "decodePolygon", function() { return decodePolygon; });
/* harmony import */ var earcut__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! earcut */ "./node_modules/earcut/src/earcut.js");
/* harmony import */ var earcut__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(earcut__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./common */ "./src/renderer/decoder/common.js");



// If the geometry type is 'polygon' it will triangulate the polygon list (geom)
// geom will be a list of polygons in which each polygon will have a flat array of vertices and a list of holes indices
// Example:
/*   let geom = [{
       flat: [
         0.,0., 1.,0., 1.,1., 0.,1., 0.,0, //A square
         0.25,0.25, 0.75,0.25, 0.75,0.75, 0.25,0.75, 0.25,0.25//A small square
       ]
       holes: [5]
     }]
*/

const STATIC_INITIAL_BUFFER_SIZE = 1024 * 1024 * 2; // 8 MB
const VERTEX_COORDINATES_PER_TRIANGLE = 2;
const MAX_VERTICES_COORDINATES_PER_SEGMENT = 24;

let index = 0;
let geomBuffer = {
    vertices: new Float32Array(STATIC_INITIAL_BUFFER_SIZE),
    normals: new Float32Array(STATIC_INITIAL_BUFFER_SIZE)
};

function decodePolygon (geometry) {
    let breakpoints = []; // Array of indices (to vertexArray) that separate each feature
    let featureIDToVertexIndex = new Map();

    index = 0;
    for (let i = 0; i < geometry.length; i++) {
        const feature = geometry[i];
        for (let j = 0; j < feature.length; j++) {
            const polygon = feature[j];
            const triangles = earcut__WEBPACK_IMPORTED_MODULE_0__(polygon.flat, polygon.holes);

            // Increase buffers size if required
            resizeBuffers(VERTEX_COORDINATES_PER_TRIANGLE * triangles.length +
                          MAX_VERTICES_COORDINATES_PER_SEGMENT * polygon.flat.length);

            // Add polygon
            for (let k = 0; k < triangles.length; k++) {
                addVertex(polygon.flat, 2 * triangles[k]);
            }

            // Add polygon stroke
            index = Object(_common__WEBPACK_IMPORTED_MODULE_1__["addLineString"])(polygon.flat, geomBuffer, index, true, (pointIndex) => {
                // Skip adding the line which connects two rings OR is clipped
                return polygon.holes.includes((pointIndex - 2) / 2) || isClipped(polygon, pointIndex - 4, pointIndex - 2);
            });
        }

        featureIDToVertexIndex.set(breakpoints.length, breakpoints.length === 0
            ? { start: 0, end: index }
            : { start: featureIDToVertexIndex.get(breakpoints.length - 1).end, end: index });

        breakpoints.push(index);
    }

    const verticesArrayBuffer = new ArrayBuffer(4 * index);
    const normalsArrayBuffer = new ArrayBuffer(4 * index);
    const vertices = new Float32Array(verticesArrayBuffer);
    const normals = new Float32Array(normalsArrayBuffer);
    for (let i = 0; i < index; i++) {
        vertices[i] = geomBuffer.vertices[i];
        normals[i] = geomBuffer.normals[i];
    }
    return {
        vertices,
        normals,
        verticesArrayBuffer,
        normalsArrayBuffer,
        featureIDToVertexIndex,
        breakpoints
    };
}

// Resize buffers as needed if `additionalSize` floats overflow the current buffers
function resizeBuffers (additionalSize) {
    const minimumNeededSize = index + additionalSize;
    if (minimumNeededSize > geomBuffer.vertices.length) {
        const newSize = 2 * minimumNeededSize;
        geomBuffer.vertices = Object(_common__WEBPACK_IMPORTED_MODULE_1__["resizeBuffer"])(geomBuffer.vertices, newSize);
        geomBuffer.normals = Object(_common__WEBPACK_IMPORTED_MODULE_1__["resizeBuffer"])(geomBuffer.normals, newSize);
    }
}

// Add vertex in triangles.
function addVertex (array, vertexIndex) {
    geomBuffer.vertices[index] = array[vertexIndex];
    geomBuffer.normals[index++] = 0;
    geomBuffer.vertices[index] = array[vertexIndex + 1];
    geomBuffer.normals[index++] = 0;
}

function isClipped (polygon, i, j) {
    if (polygon.clipped.includes(i) && polygon.clipped.includes(j)) {
        if (polygon.clippedType[polygon.clipped.indexOf(i)] &
            polygon.clippedType[polygon.clipped.indexOf(j)]) {
            return true;
        }
    }
    return false;
}


/***/ }),

/***/ "./src/renderer/schema.js":
/*!********************************!*\
  !*** ./src/renderer/schema.js ***!
  \********************************/
/*! exports provided: IDENTITY, union, equals, CLUSTER_FEATURE_COUNT, column, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IDENTITY", function() { return IDENTITY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "union", function() { return union; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "equals", function() { return equals; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CLUSTER_FEATURE_COUNT", function() { return CLUSTER_FEATURE_COUNT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "column", function() { return column; });

const IDENTITY = {};

/*
const mns = {
    price:  [{type: 'unaggregated'}],
    amount: [{type: 'aggregated', op: 'avg'}, {type: 'aggregated', op: 'max'}}]
};

*/

function union (a, b) {
    const result = {};
    const propertyNames = new Set(Object.keys(a).concat(Object.keys(b)));
    propertyNames.forEach(propertyName => {
        const aUsages = a[propertyName] || [];
        const bUsages = b[propertyName] || [];
        const combinedUsage = [...aUsages, ...bUsages];
        result[propertyName] = combinedUsage;
    });
    return result;
}

function equals (a, b) {
    if (!a || !b) {
        return false;
    }
    return JSON.stringify(simplify(a)) === JSON.stringify(simplify(b));
}

function simplify (MNS) {
    const result = {};
    const propertyNames = Object.keys(MNS).sort();
    propertyNames.forEach(propertyName => {
        // Stringify and Set to remove duplicates
        let usage = [...new Set(MNS[propertyName].map(u => JSON.stringify(u)))];
        usage.sort();
        usage = usage.map(u => JSON.parse(u));
        result[propertyName] = usage;
    });
    return result;
}

const AGG_PREFIX = '_cdb_agg_';
const AGG_PATTERN = new RegExp('^' + AGG_PREFIX + '[a-zA-Z0-9]+_');

const CLUSTER_FEATURE_COUNT = '_cdb_feature_count';

// column information functions
const column = {
    isAggregated: function isAggregated (name) {
        return name.startsWith(AGG_PREFIX);
    },
    getBase: function getBase (name) {
        return name.replace(AGG_PATTERN, '');
    },
    getAggFN: function getAggFN (name) {
        let s = name.substr(AGG_PREFIX.length);
        return s.substr(0, s.indexOf('_'));
    },
    aggColumn (name, aggFN) {
        return `${AGG_PREFIX}${aggFN}_${name}`;
    }
};

/* harmony default export */ __webpack_exports__["default"] = ({ column, equals, union, IDENTITY, simplify });


/***/ }),

/***/ "./src/renderer/shaders/Cache.js":
/*!***************************************!*\
  !*** ./src/renderer/shaders/Cache.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Cache; });
/**
 * Keep a cacheTo avoid recompiling webgl programs and shaders.
 * We need a different shader per webgl context so we use a 2 level cache where at the first level
 * the webgl context is the key and at the second level the shader code is the cache key.
 */
class Cache {
    constructor () {
        this.caches = new WeakMap();
    }

    get (gl, shadercode) {
        if (this.caches.has(gl)) {
            let cache = this.caches.get(gl);

            return cache[shadercode];
        }
    }

    set (gl, shadercode, shader) {
        if (this.caches.has(gl)) {
            let cache = this.caches.get(gl);
            cache[shadercode] = shader;
        } else {
            let cache = {};
            cache[shadercode] = shader;
            this.caches.set(gl, cache);
        }
    }

    has (gl, shadercode) {
        return this.get(gl, shadercode) !== undefined;
    }
}


/***/ }),

/***/ "./src/renderer/shaders/common/antialiasing/AntiAliasingShader.js":
/*!************************************************************************!*\
  !*** ./src/renderer/shaders/common/antialiasing/AntiAliasingShader.js ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return AntiAliasingShader; });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils */ "./src/renderer/shaders/utils.js");
/* harmony import */ var _antialiasingFragmentShader_glsl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./antialiasingFragmentShader.glsl */ "./src/renderer/shaders/common/antialiasing/antialiasingFragmentShader.glsl");
/* harmony import */ var _antialiasingFragmentShader_glsl__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_antialiasingFragmentShader_glsl__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _antialiasingVertexShader_glsl__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./antialiasingVertexShader.glsl */ "./src/renderer/shaders/common/antialiasing/antialiasingVertexShader.glsl");
/* harmony import */ var _antialiasingVertexShader_glsl__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_antialiasingVertexShader_glsl__WEBPACK_IMPORTED_MODULE_2__);




class AntiAliasingShader {
    constructor (gl) {
        Object.assign(this, Object(_utils__WEBPACK_IMPORTED_MODULE_0__["compileProgram"])(gl, _antialiasingVertexShader_glsl__WEBPACK_IMPORTED_MODULE_2___default.a, _antialiasingFragmentShader_glsl__WEBPACK_IMPORTED_MODULE_1___default.a));
        this.vertexAttribute = gl.getAttribLocation(this.program, 'vertex');
        this.readTU = gl.getUniformLocation(this.program, 'aaTex');
    }
}


/***/ }),

/***/ "./src/renderer/shaders/common/antialiasing/antialiasingFragmentShader.glsl":
/*!**********************************************************************************!*\
  !*** ./src/renderer/shaders/common/antialiasing/antialiasingFragmentShader.glsl ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "precision highp float;\n\nvarying  vec2 uv;\n\nuniform sampler2D aaTex;\n\nvoid main(void) {\n    vec4 aa = texture2D(aaTex, uv);\n    gl_FragColor = aa;\n}\n"

/***/ }),

/***/ "./src/renderer/shaders/common/antialiasing/antialiasingVertexShader.glsl":
/*!********************************************************************************!*\
  !*** ./src/renderer/shaders/common/antialiasing/antialiasingVertexShader.glsl ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "precision highp float;\nattribute vec2 vertex;\n\nvarying  vec2 uv;\n\nvoid main(void) {\n    uv = vertex*0.5+vec2(0.5);\n    gl_Position = vec4(vertex, 0.5, 1.);\n}\n"

/***/ }),

/***/ "./src/renderer/shaders/geometry/line/lineFragmentShader.glsl":
/*!********************************************************************!*\
  !*** ./src/renderer/shaders/geometry/line/lineFragmentShader.glsl ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "precision highp float;\n\nvarying lowp vec4 color;\n\nvoid main(void) {\n    gl_FragColor = color;\n}\n"

/***/ }),

/***/ "./src/renderer/shaders/geometry/line/lineVertexShader.glsl":
/*!******************************************************************!*\
  !*** ./src/renderer/shaders/geometry/line/lineVertexShader.glsl ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "precision highp float;\n\nattribute vec2 vertexPosition;\nattribute vec2 featureID;\nattribute vec2 normal;\n\nuniform vec2 vertexScale;\nuniform vec2 vertexOffset;\nuniform vec2 normalScale;\nuniform vec2 resolution;\n\nuniform sampler2D colorTex;\nuniform sampler2D widthTex;\nuniform sampler2D filterTex;\n\nvarying lowp vec4 color;\n\nfloat decodeWidth(vec2 enc) {\n  return enc.x*(255.*4.) + 4.*enc.y;\n}\n\n$propertyPreface\n$transform_preface\n\nvoid main(void) {\n    color = texture2D(colorTex, featureID);\n    float filtering = texture2D(filterTex, featureID).a;\n    color.a *= filtering;\n    color.rgb *= color.a;\n    float size = decodeWidth(texture2D(widthTex, featureID).rg);\n\n    // 64 is computed based on RTT_WIDTH and the depth buffer precision\n    // 64 = 2^(BUFFER_BITS)/RTT_WIDTH = 2^16/1024 = 64\n    float z = featureID.y * 63. / 64. + featureID.x / (64.);\n\n    // Set z range (-1, 1)\n    z = z * 2. - 1.;\n\n    vec4 p = vec4(vertexScale*(vertexPosition)+normalScale*normal*size-vertexOffset, z, 1.);\n    p.xy = $transform_inline(p.xy*resolution)/resolution;\n    if (size==0. || color.a==0.){\n        p.x=10000.;\n    }\n    gl_Position  = p;\n}\n"

/***/ }),

/***/ "./src/renderer/shaders/geometry/point/pointFragmentShader.glsl":
/*!**********************************************************************!*\
  !*** ./src/renderer/shaders/geometry/point/pointFragmentShader.glsl ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "precision highp float;\n\nvarying lowp vec4 color;\nvarying lowp vec4 stroke;\nvarying highp float dp;\nvarying highp float fillScale;\nvarying highp float strokeScale;\nvarying highp vec2 pointCoord;\n\nfloat distanceAntialias(vec2 p){\n    return 1. - smoothstep(1.-dp*1.4142, 1.+dp*1.4142, length(p));\n}\n\nvoid main(void) {\n    vec2 p = pointCoord;\n    vec4 c = color;\n\n    vec4 s = stroke;\n\n    c.a *= distanceAntialias(p*fillScale);\n    c.rgb*=c.a;\n\n    s.a *= distanceAntialias(p);\n    s.a *= 1.-distanceAntialias((strokeScale)*p);\n    s.rgb*=s.a;\n\n    c=s+(1.-s.a)*c;\n\n    gl_FragColor = c;\n}\n"

/***/ }),

/***/ "./src/renderer/shaders/geometry/point/pointVertexShader.glsl":
/*!********************************************************************!*\
  !*** ./src/renderer/shaders/geometry/point/pointVertexShader.glsl ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "precision highp float;\n\nattribute vec2 vertexPosition;\nattribute vec2 featureID;\n\nuniform vec2 vertexScale;\nuniform vec2 vertexOffset;\nuniform float orderMinWidth;\nuniform float orderMaxWidth;\nuniform vec2 normalScale;\nuniform vec2 resolution;\n\nuniform sampler2D colorTex;\nuniform sampler2D widthTex;\nuniform sampler2D strokeColorTex;\nuniform sampler2D strokeWidthTex;\nuniform sampler2D filterTex;\n//TODO order bucket texture\n\nvarying highp vec4 color;\nvarying highp vec4 stroke;\nvarying highp float dp;\nvarying highp float fillScale;\nvarying highp float strokeScale;\nvarying highp vec2 pointCoord;\n\nfloat decodeWidth(vec2 enc) {\n  return enc.x*(255.*4.) + 4.*enc.y;\n}\n\n$propertyPreface\n$transform_preface\n\nvec2 transform(vec2 p){\n    return $transform_inline(p*resolution)/resolution;\n}\n\nvoid main(void) {\n  color = texture2D(colorTex, abs(featureID));\n  stroke = texture2D(strokeColorTex, abs(featureID));\n  float filtering = texture2D(filterTex, abs(featureID)).a;\n  color.a *= filtering;\n  stroke.a *= filtering;\n  float size = decodeWidth(texture2D(widthTex, abs(featureID)).rg);\n  float fillSize = size;\n  float strokeSize = decodeWidth(texture2D(strokeWidthTex, abs(featureID)).rg);\n  size += strokeSize;\n  fillScale = min(size / fillSize, 1.);\n  strokeScale = size / max(0.001, (fillSize - strokeSize));\n  if (fillScale == strokeScale) {\n    stroke.a = 0.;\n  }\n  dp = 1.0 / (size + 1.);\n  float sizeNormalizer = (size +1.)/size;\n\n\n  vec4 p = vec4(vertexScale * vertexPosition - vertexOffset, 0.5, 1.);\n\n  vec2 size2 = (2.*size+4.)*normalScale;\n\n    if (featureID.y<0.){\n        pointCoord = vec2(0.866025, -0.5)*2.*sizeNormalizer;\n        p.xy += transform(size2*vec2(0.866025, -0.5));\n    }else if (featureID.x<0.){\n        pointCoord = vec2(-0.866025, -0.5)*2.*sizeNormalizer;\n        p.xy += transform(size2*vec2(-0.866025, -0.5));\n    }else{\n        pointCoord = vec2(0., 1.)*2.*sizeNormalizer;\n        p.xy += transform(vec2(0.,size2.y));\n    }\n\n  if (size == 0. || (stroke.a == 0. && color.a == 0.) || size < orderMinWidth || size >= orderMaxWidth) {\n    p.x = 10000.;\n  }\n\n  gl_Position = p;\n}\n"

/***/ }),

/***/ "./src/renderer/shaders/geometry/polygon/polygonFragmentShader.glsl":
/*!**************************************************************************!*\
  !*** ./src/renderer/shaders/geometry/polygon/polygonFragmentShader.glsl ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "precision lowp float;\n\nvarying lowp vec4 color;\n\nvoid main(void) {\n    gl_FragColor = color;\n}\n"

/***/ }),

/***/ "./src/renderer/shaders/geometry/polygon/polygonVertexShader.glsl":
/*!************************************************************************!*\
  !*** ./src/renderer/shaders/geometry/polygon/polygonVertexShader.glsl ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "precision mediump float;\n\nattribute vec2 vertexPosition;\nattribute vec2 featureID;\nattribute vec2 normal;\n\nuniform vec2 vertexScale;\nuniform vec2 vertexOffset;\nuniform vec2 normalScale;\nuniform vec2 resolution;\n\nuniform sampler2D colorTex;\nuniform sampler2D strokeColorTex;\nuniform sampler2D strokeWidthTex;\nuniform sampler2D filterTex;\n\nvarying lowp vec4 color;\n\nfloat decodeWidth(vec2 enc) {\n  return enc.x*(255.*4.) + 4.*enc.y;\n}\n\n$propertyPreface\n$transform_preface\n\nvoid main(void) {\n    // 64 is computed based on RTT_WIDTH and the depth buffer precision\n    // 64 = 2^(BUFFER_BITS)/RTT_WIDTH = 2^16/1024 = 64\n    float z = featureID.y * 63. / 64. + featureID.x / 64.;\n\n    vec4 c;\n    if (normal == vec2(0.)){\n        c = texture2D(colorTex, featureID);\n    }else{\n        z = mod(z + (z > 0.5 ? -1./64. : 1./64.), 1.);\n        c = texture2D(strokeColorTex, featureID);\n    }\n    z = 2.*z - 1.;\n    float filtering = texture2D(filterTex, featureID).a;\n    c.a *= filtering;\n    float size = decodeWidth(texture2D(strokeWidthTex, featureID).rg);\n\n    vec4 p = vec4(vertexScale*(vertexPosition)+normalScale*normal*size-vertexOffset, z, 1.);\n    p.xy = $transform_inline(p.xy*resolution)/resolution;\n\n    if (c.a==0.){\n        p.x=10000.;\n    }\n    color = vec4(c.rgb*c.a, c.a);\n    gl_Position  = p;\n}\n"

/***/ }),

/***/ "./src/renderer/shaders/index.js":
/*!***************************************!*\
  !*** ./src/renderer/shaders/index.js ***!
  \***************************************/
/*! exports provided: styler, symbolizer, AABlender, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AABlender", function() { return AABlender; });
/* harmony import */ var _common_antialiasing_AntiAliasingShader__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./common/antialiasing/AntiAliasingShader */ "./src/renderer/shaders/common/antialiasing/AntiAliasingShader.js");
/* harmony import */ var _styler_stylerShaders__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styler/stylerShaders */ "./src/renderer/shaders/styler/stylerShaders.js");
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "styler", function() { return _styler_stylerShaders__WEBPACK_IMPORTED_MODULE_1__; });
/* harmony import */ var _symbolizer_symbolizerShaders__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./symbolizer/symbolizerShaders */ "./src/renderer/shaders/symbolizer/symbolizerShaders.js");
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "symbolizer", function() { return _symbolizer_symbolizerShaders__WEBPACK_IMPORTED_MODULE_2__; });




const AABlender = _common_antialiasing_AntiAliasingShader__WEBPACK_IMPORTED_MODULE_0__["default"];



/* harmony default export */ __webpack_exports__["default"] = ({
    styler: _styler_stylerShaders__WEBPACK_IMPORTED_MODULE_1__,
    symbolizer: _symbolizer_symbolizerShaders__WEBPACK_IMPORTED_MODULE_2__,
    AABlender
});


/***/ }),

/***/ "./src/renderer/shaders/shaderCompiler.js":
/*!************************************************!*\
  !*** ./src/renderer/shaders/shaderCompiler.js ***!
  \************************************************/
/*! exports provided: compileShader */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "compileShader", function() { return compileShader; });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ "./src/renderer/shaders/utils.js");


class IDGenerator {
    constructor () {
        this._ids = new Map();
    }
    getID (expression) {
        if (this._ids.has(expression)) {
            return this._ids.get(expression);
        }
        const id = this._ids.size;
        this._ids.set(expression, id);
        return id;
    }
}

function compileShader (gl, template, expressions, viz) {
    let tid = {};
    const getPropertyAccessCode = name => {
        if (tid[name] === undefined) {
            tid[name] = Object.keys(tid).length;
        }
        return `texture2D(propertyTex${tid[name]}, abs(featureID)).a`;
    };

    let codes = {};

    const idGen = new IDGenerator();

    Object.keys(expressions).forEach(exprName => {
        const expr = expressions[exprName];
        expr._setUID(idGen);
        const exprCodes = expr._applyToShaderSource(getPropertyAccessCode);
        codes[exprName + '_preface'] = exprCodes.preface;
        codes[exprName + '_inline'] = exprCodes.inline;
    });

    codes.propertyPreface = Object.keys(tid).map(name => `uniform sampler2D propertyTex${tid[name]};`).join('\n');

    const shader = Object(_utils__WEBPACK_IMPORTED_MODULE_0__["createShaderFromTemplate"])(gl, template, codes);

    Object.keys(tid).map(name => {
        tid[name] = gl.getUniformLocation(shader.program, `propertyTex${tid[name]}`);
    });

    Object.values(expressions).forEach(expr => {
        expr._postShaderCompile(shader.program, gl);
    });

    if (!shader.textureIds) {
        shader.textureIds = new Map();
    }

    shader.textureIds.set(viz, tid);

    // For debugging purposes
    shader._codes = codes;
    shader._template = template;

    return shader;
}


/***/ }),

/***/ "./src/renderer/shaders/styler/stylerEncodeWidth.glsl":
/*!************************************************************!*\
  !*** ./src/renderer/shaders/styler/stylerEncodeWidth.glsl ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "vec2 encodeWidth(float x) {\n    if (!(x<=0. || x>=0.) ){\n        // Convert NaN widths to `0`\n        // Do not remove this, some GPUs will convert NaN floats to 1. when\n        // packing the shader output to a RGBA UNSIGNED BYTE textures\n        x = 0.;\n    }\n    float high, low;\n    x = clamp(x, 0., 1023.);\n    high = floor(x/4.);\n    low = (x-high*4.)/4.;\n    return vec2(high/255., low);\n}\n\n$width_preface\n"

/***/ }),

/***/ "./src/renderer/shaders/styler/stylerFragmentShader.glsl":
/*!***************************************************************!*\
  !*** ./src/renderer/shaders/styler/stylerFragmentShader.glsl ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "precision highp float;\n\nvarying vec2 uv;\n\nvec2 featureID;\n\n$propertyPreface\n$style_preface\n\nvoid main(void) {\n    featureID = abs(uv);\n    gl_FragColor = $style_inline;\n}\n"

/***/ }),

/***/ "./src/renderer/shaders/styler/stylerShaders.js":
/*!******************************************************!*\
  !*** ./src/renderer/shaders/styler/stylerShaders.js ***!
  \******************************************************/
/*! exports provided: colorShaderGLSL, filterShaderGLSL, widthShaderGLSL */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "colorShaderGLSL", function() { return colorShaderGLSL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "filterShaderGLSL", function() { return filterShaderGLSL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "widthShaderGLSL", function() { return widthShaderGLSL; });
/* harmony import */ var _stylerEncodeWidth_glsl__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./stylerEncodeWidth.glsl */ "./src/renderer/shaders/styler/stylerEncodeWidth.glsl");
/* harmony import */ var _stylerEncodeWidth_glsl__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_stylerEncodeWidth_glsl__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _stylerFragmentShader_glsl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./stylerFragmentShader.glsl */ "./src/renderer/shaders/styler/stylerFragmentShader.glsl");
/* harmony import */ var _stylerFragmentShader_glsl__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_stylerFragmentShader_glsl__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _stylerVertexShader_glsl__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./stylerVertexShader.glsl */ "./src/renderer/shaders/styler/stylerVertexShader.glsl");
/* harmony import */ var _stylerVertexShader_glsl__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_stylerVertexShader_glsl__WEBPACK_IMPORTED_MODULE_2__);




const colorShaderGLSL = {
    vertexShader: `${_stylerVertexShader_glsl__WEBPACK_IMPORTED_MODULE_2___default.a}`,
    fragmentShader: `${_stylerFragmentShader_glsl__WEBPACK_IMPORTED_MODULE_1___default.a}`
        .replace('$style_inline', '$color_inline')
        .replace('$style_preface', '$color_preface')
};

const filterShaderGLSL = {
    vertexShader: `${_stylerVertexShader_glsl__WEBPACK_IMPORTED_MODULE_2___default.a}`,
    fragmentShader: `${_stylerFragmentShader_glsl__WEBPACK_IMPORTED_MODULE_1___default.a}`
        .replace('$style_inline', 'vec4($filter_inline)')
        .replace('$style_preface', '$filter_preface')
};

const widthShaderGLSL = {
    vertexShader: `${_stylerVertexShader_glsl__WEBPACK_IMPORTED_MODULE_2___default.a}`,
    fragmentShader: `${_stylerFragmentShader_glsl__WEBPACK_IMPORTED_MODULE_1___default.a}`
        .replace('$style_inline', 'vec4(encodeWidth($width_inline), vec2(0.))')
        .replace('$style_preface', `${_stylerEncodeWidth_glsl__WEBPACK_IMPORTED_MODULE_0___default.a}`)
};


/***/ }),

/***/ "./src/renderer/shaders/styler/stylerVertexShader.glsl":
/*!*************************************************************!*\
  !*** ./src/renderer/shaders/styler/stylerVertexShader.glsl ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "precision highp float;\nattribute vec2 vertex;\n\nvarying  vec2 uv;\n\nvoid main(void) {\n    uv = vertex*0.5+vec2(0.5);\n    gl_Position = vec4(vertex, 0.5, 1.);\n}\n"

/***/ }),

/***/ "./src/renderer/shaders/symbolizer/symbolizerFragmentShader.glsl":
/*!***********************************************************************!*\
  !*** ./src/renderer/shaders/symbolizer/symbolizerFragmentShader.glsl ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "precision highp float;\n\nvarying highp vec2 featureIDVar;\nvarying highp vec4 color;\nvarying highp vec2 pointCoord;\n\n$symbol_preface\n$propertyPreface\n\nvoid main(void) {\n    vec2 featureID = abs(featureIDVar);\n    vec2 imageUV = pointCoord*0.5+vec2(0.5);\n    vec4 symbolColor = $symbol_inline;\n    vec4 noOverrideColor = vec4(0.);\n\n    vec4 c;\n    if (color != noOverrideColor){\n        c = color * vec4(vec3(1), symbolColor.a);\n    }else{\n        c = symbolColor;\n    }\n    if (imageUV!=clamp(imageUV, 0.,1.)){\n        c.a = 0.;\n    }\n\n    gl_FragColor = vec4(c.rgb*c.a, c.a);\n}\n"

/***/ }),

/***/ "./src/renderer/shaders/symbolizer/symbolizerShaders.js":
/*!**************************************************************!*\
  !*** ./src/renderer/shaders/symbolizer/symbolizerShaders.js ***!
  \**************************************************************/
/*! exports provided: symbolShaderGLSL */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "symbolShaderGLSL", function() { return symbolShaderGLSL; });
/* harmony import */ var _symbolizerFragmentShader_glsl__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./symbolizerFragmentShader.glsl */ "./src/renderer/shaders/symbolizer/symbolizerFragmentShader.glsl");
/* harmony import */ var _symbolizerFragmentShader_glsl__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_symbolizerFragmentShader_glsl__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _symbolizerVertexShader_glsl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./symbolizerVertexShader.glsl */ "./src/renderer/shaders/symbolizer/symbolizerVertexShader.glsl");
/* harmony import */ var _symbolizerVertexShader_glsl__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_symbolizerVertexShader_glsl__WEBPACK_IMPORTED_MODULE_1__);



const symbolShaderGLSL = {
    vertexShader: `${_symbolizerVertexShader_glsl__WEBPACK_IMPORTED_MODULE_1___default.a}`,
    fragmentShader: `${_symbolizerFragmentShader_glsl__WEBPACK_IMPORTED_MODULE_0___default.a}`
};


/***/ }),

/***/ "./src/renderer/shaders/symbolizer/symbolizerVertexShader.glsl":
/*!*********************************************************************!*\
  !*** ./src/renderer/shaders/symbolizer/symbolizerVertexShader.glsl ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "precision highp float;\n\nattribute vec2 vertexPosition;\nattribute vec2 featureID;\n\nuniform vec2 vertexScale;\nuniform vec2 vertexOffset;\nuniform float orderMinWidth;\nuniform float orderMaxWidth;\nuniform float devicePixelRatio;\nuniform vec2 resolution;\nuniform vec2 normalScale;\n\nuniform sampler2D colorTex;\nuniform sampler2D widthTex;\nuniform sampler2D filterTex;\n//TODO order bucket texture\n\nvarying highp vec2 featureIDVar;\nvarying highp vec4 color;\nvarying highp vec2 pointCoord;\n\nfloat decodeWidth(vec2 enc) {\n  return enc.x*(255.*4.) + 4.*enc.y;\n}\n\n$symbolPlacement_preface\n$propertyPreface\n$transform_preface\n\nvec2 transform(vec2 p){\n    return $transform_inline(p*resolution)/resolution;\n}\n\nvoid main(void) {\n    featureIDVar = abs(featureID);\n    color = texture2D(colorTex, abs(featureID));\n    float filtering = texture2D(filterTex, abs(featureID)).a;\n    color.a *= filtering;\n\n    float size = decodeWidth(texture2D(widthTex, abs(featureID)).rg);\n    float fillSize = size;\n\n    vec4 p = vec4(vertexScale*vertexPosition-vertexOffset, 0.5, 1.);\n    float sizeNormalizer = (size +2.)/size;\n    vec2 size2 = (2.*size+4.)*normalScale;\n\n    if (featureID.y<0.){\n        pointCoord = vec2(0.866025, -0.5)*2.*sizeNormalizer;\n        p.xy += transform(size2*vec2(0.866025, -0.5));\n    }else if (featureID.x<0.){\n        pointCoord = vec2(-0.866025, -0.5)*2.*sizeNormalizer;\n        p.xy += transform(size2*vec2(-0.866025, -0.5));\n    }else{\n        pointCoord = vec2(0., 1.)*2.*sizeNormalizer;\n        p.xy += transform(vec2(0.,size2.y));\n    }\n    pointCoord.y = -pointCoord.y;\n\n\n    p.xy += ($symbolPlacement_inline)*size/resolution;\n\n\n    vec4 noOverrideColor = vec4(0.);\n    if (size==0. || (color.a==0. && color != noOverrideColor) || size<orderMinWidth || size>=orderMaxWidth){\n        p.x=10000.;\n    }\n    gl_Position  = p;\n}\n"

/***/ }),

/***/ "./src/renderer/shaders/utils.js":
/*!***************************************!*\
  !*** ./src/renderer/shaders/utils.js ***!
  \***************************************/
/*! exports provided: compileProgram, createShaderFromTemplate */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "compileProgram", function() { return compileProgram; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createShaderFromTemplate", function() { return createShaderFromTemplate; });
/* harmony import */ var _Cache__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Cache */ "./src/renderer/shaders/Cache.js");
/* harmony import */ var _errors_carto_runtime_error__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../errors/carto-runtime-error */ "./src/errors/carto-runtime-error.js");



let programID = 1;
const shaderCache = new _Cache__WEBPACK_IMPORTED_MODULE_0__["default"]();
const programCache = new _Cache__WEBPACK_IMPORTED_MODULE_0__["default"]();

/**
 * Compile a webgl program.
 * Use a cache to improve speed.
 *
 * @param {WebGLRenderingContext} gl - The context where the program will be executed
 * @param {string} glslvertexShader - vertex shader code
 * @param {string} glslfragmentShader - fragment shader code
 */
function compileProgram (gl, glslvertexShader, glslfragmentShader) {
    const code = glslvertexShader + glslfragmentShader;

    if (programCache.has(gl, code)) {
        return programCache.get(gl, code);
    }

    const shader = {};
    const vertexShader = _compileShader(gl, glslvertexShader, gl.VERTEX_SHADER);
    const fragmentShader = _compileShader(gl, glslfragmentShader, gl.FRAGMENT_SHADER);

    shader.program = gl.createProgram();

    gl.attachShader(shader.program, vertexShader);
    gl.attachShader(shader.program, fragmentShader);
    gl.linkProgram(shader.program);
    gl.deleteShader(vertexShader);
    gl.deleteShader(fragmentShader);

    if (!gl.getProgramParameter(shader.program, gl.LINK_STATUS)) {
        throw new _errors_carto_runtime_error__WEBPACK_IMPORTED_MODULE_1__["default"](`${_errors_carto_runtime_error__WEBPACK_IMPORTED_MODULE_1__["CartoRuntimeTypes"].WEB_GL} Unable to link the shader program: ${gl.getProgramInfoLog(shader.program)}.`);
    }

    shader.programID = programID++;
    programCache.set(gl, code, shader);

    return shader;
}

function _compileShader (gl, sourceCode, type) {
    if (shaderCache.has(gl, sourceCode)) {
        return shaderCache.get(gl, sourceCode);
    }

    const shader = gl.createShader(type);
    gl.shaderSource(shader, sourceCode);
    gl.compileShader(shader);

    if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
        const log = gl.getShaderInfoLog(shader);
        gl.deleteShader(shader);
        throw new _errors_carto_runtime_error__WEBPACK_IMPORTED_MODULE_1__["default"](`${_errors_carto_runtime_error__WEBPACK_IMPORTED_MODULE_1__["CartoRuntimeTypes"].WEB_GL} An error occurred compiling the shaders: ${log}\nSource:\n${sourceCode}`);
    }

    shaderCache.set(gl, sourceCode, shader);

    return shader;
}

function createShaderFromTemplate (gl, glslTemplate, codes) {
    let vertexShader = glslTemplate.vertexShader;
    let fragmentShader = glslTemplate.fragmentShader;

    Object.keys(codes).forEach(codeName => {
        vertexShader = vertexShader.replace('$' + codeName, codes[codeName]);
        fragmentShader = fragmentShader.replace('$' + codeName, codes[codeName]);
    });

    const shader = compileProgram(gl, vertexShader, fragmentShader);

    shader.vertexPositionAttribute = gl.getAttribLocation(shader.program, 'vertexPosition');
    shader.featureIdAttr = gl.getAttribLocation(shader.program, 'featureID');
    shader.normalAttr = gl.getAttribLocation(shader.program, 'normal');

    shader.vertexScaleUniformLocation = gl.getUniformLocation(shader.program, 'vertexScale');
    shader.vertexOffsetUniformLocation = gl.getUniformLocation(shader.program, 'vertexOffset');
    shader.colorTexture = gl.getUniformLocation(shader.program, 'colorTex');
    shader.strokeColorTexture = gl.getUniformLocation(shader.program, 'strokeColorTex');
    shader.strokeWidthTexture = gl.getUniformLocation(shader.program, 'strokeWidthTex');
    shader.widthTexture = gl.getUniformLocation(shader.program, 'widthTex');
    shader.orderMinWidth = gl.getUniformLocation(shader.program, 'orderMinWidth');
    shader.orderMaxWidth = gl.getUniformLocation(shader.program, 'orderMaxWidth');
    shader.filterTexture = gl.getUniformLocation(shader.program, 'filterTex');
    shader.normalScale = gl.getUniformLocation(shader.program, 'normalScale');
    shader.resolution = gl.getUniformLocation(shader.program, 'resolution');

    return shader;
}


/***/ }),

/***/ "./src/renderer/viz/colorspaces.js":
/*!*****************************************!*\
  !*** ./src/renderer/viz/colorspaces.js ***!
  \*****************************************/
/*! exports provided: sRGBToCielab, cielabToSRGB, interpolateRGBAinCieLAB */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sRGBToCielab", function() { return sRGBToCielab; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cielabToSRGB", function() { return cielabToSRGB; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "interpolateRGBAinCieLAB", function() { return interpolateRGBAinCieLAB; });
/* harmony import */ var _expressions_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./expressions/utils */ "./src/renderer/viz/expressions/utils.js");


function sRGBToCielab (srgb) {
    return XYZToCieLab(sRGBToXYZ(srgb));
}
function cielabToSRGB (cielab) {
    return XYZToSRGB(cielabToXYZ(cielab));
}

function interpolateRGBAinCieLAB (rgbColorA, rgbColorB, m) {
    const cielabColorA = sRGBToCielab({
        r: rgbColorA.r / 255,
        g: rgbColorA.g / 255,
        b: rgbColorA.b / 255,
        a: rgbColorA.a
    });

    const cielabColorB = sRGBToCielab({
        r: rgbColorB.r / 255,
        g: rgbColorB.g / 255,
        b: rgbColorB.b / 255,
        a: rgbColorB.a
    });

    const cielabInterpolated = {
        l: (1 - m) * cielabColorA.l + m * cielabColorB.l,
        a: (1 - m) * cielabColorA.a + m * cielabColorB.a,
        b: (1 - m) * cielabColorA.b + m * cielabColorB.b,
        alpha: (1 - m) * cielabColorA.alpha + m * cielabColorB.alpha
    };

    const rgbaColor = cielabToSRGB(cielabInterpolated);

    return {
        r: Math.round(rgbaColor.r * 255),
        g: Math.round(rgbaColor.g * 255),
        b: Math.round(rgbaColor.b * 255),
        a: rgbaColor.a
    };
}

// Following functionality has been inspired by http://www.getreuer.info/home/colorspace
// License:
/*
License (BSD)
Copyright © 2005–2010, Pascal Getreuer
All rights reserved.

Redistribution and use in source and binary forms, with or without modification, are permitted provided that the following conditions are met:

Redistributions of source code must retain the above copyright notice, this list of conditions and the following disclaimer.
Redistributions in binary form must reproduce the above copyright notice, this list of conditions and the following disclaimer in the documentation and/or other materials provided with the distribution.
THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS “AS IS” AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE U
*/

// Convert sRGB to CIE XYZ with the D65 white point
function sRGBToXYZ (srgb) {
    // Poynton, "Frequently Asked Questions About Color," page 10
    // Wikipedia: http://en.wikipedia.org/wiki/SRGB
    // Wikipedia: http://en.wikipedia.org/wiki/CIE_1931_color_space
    const { r, g, b, a } = sRGBToLinearRGB(srgb);
    return {
        x: (0.4123955889674142161 * r + 0.3575834307637148171 * g + 0.1804926473817015735 * b),
        y: (0.2125862307855955516 * r + 0.7151703037034108499 * g + 0.07220049864333622685 * b),
        z: (0.01929721549174694484 * r + 0.1191838645808485318 * g + 0.9504971251315797660 * b),
        a
    };
}

function sRGBToLinearRGB ({ r, g, b, a }) {
    // http://en.wikipedia.org/wiki/SRGB
    const inverseGammaCorrection = t =>
        t <= 0.0404482362771076 ? t / 12.92 : Math.pow((t + 0.055) / 1.055, 2.4);
    return {
        r: inverseGammaCorrection(r),
        g: inverseGammaCorrection(g),
        b: inverseGammaCorrection(b),
        a
    };
}
function linearRGBToSRGB ({ r, g, b, a }) {
    // http://en.wikipedia.org/wiki/SRGB
    const gammaCorrection = t =>
        t <= 0.0031306684425005883 ? 12.92 * t : 1.055 * Math.pow(t, 0.416666666666666667) - 0.055;
    return {
        r: gammaCorrection(r),
        g: gammaCorrection(g),
        b: gammaCorrection(b),
        a
    };
}

const WHITEPOINT_D65_X = 0.950456;
const WHITEPOINT_D65_Y = 1.0;
const WHITEPOINT_D65_Z = 1.088754;

// Convert CIE XYZ to CIE L*a*b* (CIELAB) with the D65 white point
function XYZToCieLab ({ x, y, z, a }) {
    // Wikipedia: http://en.wikipedia.org/wiki/Lab_color_space

    const xn = WHITEPOINT_D65_X;
    const yn = WHITEPOINT_D65_Y;
    const zn = WHITEPOINT_D65_Z;

    const f = t =>
        t >= 8.85645167903563082e-3
            ? Math.pow(t, 0.333333333333333) : (841.0 / 108.0) * t + 4.0 / 29.0;

    return {
        l: 116 * f(y / yn) - 16,
        a: 500 * (f(x / xn) - f(y / yn)),
        b: 200 * (f(y / yn) - f(z / zn)),
        alpha: a
    };
}

// Convert CIE XYZ to sRGB with the D65 white point
function XYZToSRGB ({ x, y, z, a }) {
    // Poynton, "Frequently Asked Questions About Color," page 10
    // Wikipedia: http://en.wikipedia.org/wiki/SRGB
    // Wikipedia: http://en.wikipedia.org/wiki/CIE_1931_color_space

    // Convert XYZ to linear RGB
    const r = Object(_expressions_utils__WEBPACK_IMPORTED_MODULE_0__["clamp"])(3.2406 * x - 1.5372 * y - 0.4986 * z, 0, 1);
    const g = Object(_expressions_utils__WEBPACK_IMPORTED_MODULE_0__["clamp"])(-0.9689 * x + 1.8758 * y + 0.0415 * z, 0, 1);
    const b = Object(_expressions_utils__WEBPACK_IMPORTED_MODULE_0__["clamp"])(0.0557 * x - 0.2040 * y + 1.0570 * z, 0, 1);

    return linearRGBToSRGB({ r, g, b, a });
}

// Convert CIE L*a*b* (CIELAB) to CIE XYZ with the D65 white point
function cielabToXYZ ({ l, a, b, alpha }) {
    // Wikipedia: http://en.wikipedia.org/wiki/Lab_color_space

    const f = t =>
        ((t >= 0.206896551724137931)
            ? ((t) * (t) * (t)) : (108.0 / 841.0) * ((t) - (4.0 / 29.0)));

    return {
        x: WHITEPOINT_D65_X * f((l + 16) / 116 + a / 500),
        y: WHITEPOINT_D65_Y * f((l + 16) / 116),
        z: WHITEPOINT_D65_Z * f((l + 16) / 116 - b / 200),
        a: alpha
    };
}


/***/ }),

/***/ "./src/renderer/viz/defaultSVGs.js":
/*!*****************************************!*\
  !*** ./src/renderer/viz/defaultSVGs.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _svgs_bicycle_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./svgs/bicycle.svg */ "./src/renderer/viz/svgs/bicycle.svg");
/* harmony import */ var _svgs_bicycle_svg__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_svgs_bicycle_svg__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _svgs_building_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./svgs/building.svg */ "./src/renderer/viz/svgs/building.svg");
/* harmony import */ var _svgs_building_svg__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_svgs_building_svg__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _svgs_bus_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./svgs/bus.svg */ "./src/renderer/viz/svgs/bus.svg");
/* harmony import */ var _svgs_bus_svg__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_svgs_bus_svg__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _svgs_car_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./svgs/car.svg */ "./src/renderer/viz/svgs/car.svg");
/* harmony import */ var _svgs_car_svg__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_svgs_car_svg__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _svgs_circle_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./svgs/circle.svg */ "./src/renderer/viz/svgs/circle.svg");
/* harmony import */ var _svgs_circle_svg__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_svgs_circle_svg__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _svgs_circleOutline_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./svgs/circleOutline.svg */ "./src/renderer/viz/svgs/circleOutline.svg");
/* harmony import */ var _svgs_circleOutline_svg__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_svgs_circleOutline_svg__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _svgs_cross_svg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./svgs/cross.svg */ "./src/renderer/viz/svgs/cross.svg");
/* harmony import */ var _svgs_cross_svg__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_svgs_cross_svg__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _svgs_house_svg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./svgs/house.svg */ "./src/renderer/viz/svgs/house.svg");
/* harmony import */ var _svgs_house_svg__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_svgs_house_svg__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _svgs_flag_svg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./svgs/flag.svg */ "./src/renderer/viz/svgs/flag.svg");
/* harmony import */ var _svgs_flag_svg__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_svgs_flag_svg__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _svgs_marker_svg__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./svgs/marker.svg */ "./src/renderer/viz/svgs/marker.svg");
/* harmony import */ var _svgs_marker_svg__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_svgs_marker_svg__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _svgs_markerOutline_svg__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./svgs/markerOutline.svg */ "./src/renderer/viz/svgs/markerOutline.svg");
/* harmony import */ var _svgs_markerOutline_svg__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_svgs_markerOutline_svg__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _svgs_plus_svg__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./svgs/plus.svg */ "./src/renderer/viz/svgs/plus.svg");
/* harmony import */ var _svgs_plus_svg__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_svgs_plus_svg__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _svgs_square_svg__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./svgs/square.svg */ "./src/renderer/viz/svgs/square.svg");
/* harmony import */ var _svgs_square_svg__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_svgs_square_svg__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _svgs_squareOutline_svg__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./svgs/squareOutline.svg */ "./src/renderer/viz/svgs/squareOutline.svg");
/* harmony import */ var _svgs_squareOutline_svg__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_svgs_squareOutline_svg__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _svgs_star_svg__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./svgs/star.svg */ "./src/renderer/viz/svgs/star.svg");
/* harmony import */ var _svgs_star_svg__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_svgs_star_svg__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _svgs_starOutline_svg__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./svgs/starOutline.svg */ "./src/renderer/viz/svgs/starOutline.svg");
/* harmony import */ var _svgs_starOutline_svg__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_svgs_starOutline_svg__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _svgs_triangle_svg__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./svgs/triangle.svg */ "./src/renderer/viz/svgs/triangle.svg");
/* harmony import */ var _svgs_triangle_svg__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(_svgs_triangle_svg__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var _svgs_triangleOutline_svg__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./svgs/triangleOutline.svg */ "./src/renderer/viz/svgs/triangleOutline.svg");
/* harmony import */ var _svgs_triangleOutline_svg__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(_svgs_triangleOutline_svg__WEBPACK_IMPORTED_MODULE_17__);



















/* harmony default export */ __webpack_exports__["default"] = ({
    bicycle: (_svgs_bicycle_svg__WEBPACK_IMPORTED_MODULE_0___default()),
    building: (_svgs_building_svg__WEBPACK_IMPORTED_MODULE_1___default()),
    bus: (_svgs_bus_svg__WEBPACK_IMPORTED_MODULE_2___default()),
    car: (_svgs_car_svg__WEBPACK_IMPORTED_MODULE_3___default()),
    circle: (_svgs_circle_svg__WEBPACK_IMPORTED_MODULE_4___default()),
    circleOutline: (_svgs_circleOutline_svg__WEBPACK_IMPORTED_MODULE_5___default()),
    cross: (_svgs_cross_svg__WEBPACK_IMPORTED_MODULE_6___default()),
    house: (_svgs_house_svg__WEBPACK_IMPORTED_MODULE_7___default()),
    flag: (_svgs_flag_svg__WEBPACK_IMPORTED_MODULE_8___default()),
    marker: (_svgs_marker_svg__WEBPACK_IMPORTED_MODULE_9___default()),
    markerOutline: (_svgs_markerOutline_svg__WEBPACK_IMPORTED_MODULE_10___default()),
    plus: (_svgs_plus_svg__WEBPACK_IMPORTED_MODULE_11___default()),
    square: (_svgs_square_svg__WEBPACK_IMPORTED_MODULE_12___default()),
    squareOutline: (_svgs_squareOutline_svg__WEBPACK_IMPORTED_MODULE_13___default()),
    star: (_svgs_star_svg__WEBPACK_IMPORTED_MODULE_14___default()),
    starOutline: (_svgs_starOutline_svg__WEBPACK_IMPORTED_MODULE_15___default()),
    triangle: (_svgs_triangle_svg__WEBPACK_IMPORTED_MODULE_16___default()),
    triangleOutline: (_svgs_triangleOutline_svg__WEBPACK_IMPORTED_MODULE_17___default())
});


/***/ }),

/***/ "./src/renderer/viz/expressions.js":
/*!*****************************************!*\
  !*** ./src/renderer/viz/expressions.js ***!
  \*****************************************/
/*! exports provided: transition, nin, in, between, mul, div, add, sub, pow, mod, greaterThan, greaterThanOrEqualTo, lessThan, lessThanOrEqualTo, equals, notEquals, and, or, gt, gte, lt, lte, eq, neq, blend, buckets, cielab, clusterAvg, clusterMax, clusterMin, clusterMode, clusterSum, clusterCount, constant, image, svg, hex, hsl, hsla, hsv, hsva, cubic, ilinear, linear, list, namedColor, now, number, opacity, asc, desc, noOrder, width, reverse, property, prop, globalQuantiles, viewportQuantiles, globalEqIntervals, viewportEqIntervals, globalStandardDev, viewportStandardDev, ramp, rgb, rgba, category, time, date, top, fade, animation, log, sqrt, sin, cos, tan, sign, abs, isNaN, not, floor, ceil, variable, var, viewportAvg, viewportMax, viewportMin, viewportSum, viewportCount, viewportPercentile, viewportHistogram, viewportFeatures, globalAvg, globalMax, globalMin, globalSum, globalCount, globalPercentile, zoom, scaled, zoomrange, placement, translate, rotate, alphaNormalize, HOLD, TRUE, FALSE, PI, E, BICYCLE, BUILDING, BUS, CAR, CIRCLE, CIRCLE_OUTLINE, CROSS, FLAG, HOUSE, MARKER, MARKER_OUTLINE, PLUS, SQUARE, SQUARE_OUTLINE, STAR, STAR_OUTLINE, TRIANGLE, TRIANGLE_OUTLINE, ALIGN_CENTER, ALIGN_BOTTOM, palettes, Asc, Desc */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "transition", function() { return transition; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "nin", function() { return nin; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "in", function() { return in_; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "between", function() { return between; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mul", function() { return mul; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "div", function() { return div; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "add", function() { return add; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sub", function() { return sub; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pow", function() { return pow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mod", function() { return mod; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "greaterThan", function() { return greaterThan; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "greaterThanOrEqualTo", function() { return greaterThanOrEqualTo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "lessThan", function() { return lessThan; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "lessThanOrEqualTo", function() { return lessThanOrEqualTo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "equals", function() { return equals; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "notEquals", function() { return notEquals; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "and", function() { return and; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "or", function() { return or; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "gt", function() { return gt; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "gte", function() { return gte; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "lt", function() { return lt; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "lte", function() { return lte; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "eq", function() { return eq; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "neq", function() { return neq; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "blend", function() { return blend; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "buckets", function() { return buckets; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cielab", function() { return cielab; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "clusterAvg", function() { return clusterAvg; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "clusterMax", function() { return clusterMax; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "clusterMin", function() { return clusterMin; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "clusterMode", function() { return clusterMode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "clusterSum", function() { return clusterSum; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "clusterCount", function() { return clusterCount; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "constant", function() { return constant; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "image", function() { return image; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "svg", function() { return svg; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hex", function() { return hex; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hsl", function() { return hsl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hsla", function() { return hsla; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hsv", function() { return hsv; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hsva", function() { return hsva; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cubic", function() { return cubic; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ilinear", function() { return ilinear; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "linear", function() { return linear; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "list", function() { return list; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "namedColor", function() { return namedColor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "now", function() { return now; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "number", function() { return number; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "opacity", function() { return opacity; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "asc", function() { return asc; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "desc", function() { return desc; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "noOrder", function() { return noOrder; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "width", function() { return width; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reverse", function() { return reverse; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "property", function() { return property; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "prop", function() { return property; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "globalQuantiles", function() { return globalQuantiles; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "viewportQuantiles", function() { return viewportQuantiles; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "globalEqIntervals", function() { return globalEqIntervals; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "viewportEqIntervals", function() { return viewportEqIntervals; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "globalStandardDev", function() { return globalStandardDev; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "viewportStandardDev", function() { return viewportStandardDev; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ramp", function() { return ramp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rgb", function() { return rgb; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rgba", function() { return rgba; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "category", function() { return category; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "time", function() { return time; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "date", function() { return time; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "top", function() { return top; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fade", function() { return fade; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "animation", function() { return animation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "log", function() { return log; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sqrt", function() { return sqrt; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sin", function() { return sin; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cos", function() { return cos; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tan", function() { return tan; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sign", function() { return sign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "abs", function() { return abs; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isNaN", function() { return isNaN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "not", function() { return not; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "floor", function() { return floor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ceil", function() { return ceil; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "variable", function() { return variable; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "var", function() { return variable; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "viewportAvg", function() { return viewportAvg; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "viewportMax", function() { return viewportMax; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "viewportMin", function() { return viewportMin; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "viewportSum", function() { return viewportSum; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "viewportCount", function() { return viewportCount; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "viewportPercentile", function() { return viewportPercentile; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "viewportHistogram", function() { return viewportHistogram; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "viewportFeatures", function() { return viewportFeatures; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "globalAvg", function() { return globalAvg; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "globalMax", function() { return globalMax; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "globalMin", function() { return globalMin; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "globalSum", function() { return globalSum; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "globalCount", function() { return globalCount; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "globalPercentile", function() { return globalPercentile; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "zoom", function() { return zoom; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "scaled", function() { return scaled; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "zoomrange", function() { return zoomrange; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "placement", function() { return placement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "translate", function() { return translate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rotate", function() { return rotate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "alphaNormalize", function() { return alphaNormalize; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HOLD", function() { return HOLD; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TRUE", function() { return TRUE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FALSE", function() { return FALSE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PI", function() { return PI; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "E", function() { return E; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BICYCLE", function() { return BICYCLE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BUILDING", function() { return BUILDING; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BUS", function() { return BUS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CAR", function() { return CAR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CIRCLE", function() { return CIRCLE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CIRCLE_OUTLINE", function() { return CIRCLE_OUTLINE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CROSS", function() { return CROSS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FLAG", function() { return FLAG; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HOUSE", function() { return HOUSE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MARKER", function() { return MARKER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MARKER_OUTLINE", function() { return MARKER_OUTLINE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PLUS", function() { return PLUS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SQUARE", function() { return SQUARE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SQUARE_OUTLINE", function() { return SQUARE_OUTLINE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "STAR", function() { return STAR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "STAR_OUTLINE", function() { return STAR_OUTLINE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TRIANGLE", function() { return TRIANGLE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TRIANGLE_OUTLINE", function() { return TRIANGLE_OUTLINE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ALIGN_CENTER", function() { return ALIGN_CENTER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ALIGN_BOTTOM", function() { return ALIGN_BOTTOM; });
/* harmony import */ var _expressions_transition__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./expressions/transition */ "./src/renderer/viz/expressions/transition.js");
/* harmony import */ var _expressions_belongs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./expressions/belongs */ "./src/renderer/viz/expressions/belongs.js");
/* harmony import */ var _expressions_between__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./expressions/between */ "./src/renderer/viz/expressions/between.js");
/* harmony import */ var _expressions_binary__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./expressions/binary */ "./src/renderer/viz/expressions/binary.js");
/* harmony import */ var _expressions_blend__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./expressions/blend */ "./src/renderer/viz/expressions/blend.js");
/* harmony import */ var _expressions_buckets__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./expressions/buckets */ "./src/renderer/viz/expressions/buckets.js");
/* harmony import */ var _expressions_basic_category__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./expressions/basic/category */ "./src/renderer/viz/expressions/basic/category.js");
/* harmony import */ var _expressions_color_CIELab__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./expressions/color/CIELab */ "./src/renderer/viz/expressions/color/CIELab.js");
/* harmony import */ var _expressions_aggregation_cluster_ClusterAvg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./expressions/aggregation/cluster/ClusterAvg */ "./src/renderer/viz/expressions/aggregation/cluster/ClusterAvg.js");
/* harmony import */ var _expressions_aggregation_cluster_ClusterMax__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./expressions/aggregation/cluster/ClusterMax */ "./src/renderer/viz/expressions/aggregation/cluster/ClusterMax.js");
/* harmony import */ var _expressions_aggregation_cluster_ClusterMin__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./expressions/aggregation/cluster/ClusterMin */ "./src/renderer/viz/expressions/aggregation/cluster/ClusterMin.js");
/* harmony import */ var _expressions_aggregation_cluster_ClusterMode__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./expressions/aggregation/cluster/ClusterMode */ "./src/renderer/viz/expressions/aggregation/cluster/ClusterMode.js");
/* harmony import */ var _expressions_aggregation_cluster_ClusterSum__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./expressions/aggregation/cluster/ClusterSum */ "./src/renderer/viz/expressions/aggregation/cluster/ClusterSum.js");
/* harmony import */ var _expressions_aggregation_cluster_ClusterCount__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./expressions/aggregation/cluster/ClusterCount */ "./src/renderer/viz/expressions/aggregation/cluster/ClusterCount.js");
/* harmony import */ var _expressions_basic_constant__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./expressions/basic/constant */ "./src/renderer/viz/expressions/basic/constant.js");
/* harmony import */ var _expressions_color_hex__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./expressions/color/hex */ "./src/renderer/viz/expressions/color/hex.js");
/* harmony import */ var _expressions_color_hsl__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./expressions/color/hsl */ "./src/renderer/viz/expressions/color/hsl.js");
/* harmony import */ var _expressions_color_hsv__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./expressions/color/hsv */ "./src/renderer/viz/expressions/color/hsv.js");
/* harmony import */ var _expressions_interpolators__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./expressions/interpolators */ "./src/renderer/viz/expressions/interpolators.js");
/* harmony import */ var _expressions_linear__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./expressions/linear */ "./src/renderer/viz/expressions/linear.js");
/* harmony import */ var _expressions_color_NamedColor__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./expressions/color/NamedColor */ "./src/renderer/viz/expressions/color/NamedColor.js");
/* harmony import */ var _expressions_now__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./expressions/now */ "./src/renderer/viz/expressions/now.js");
/* harmony import */ var _expressions_basic_number__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./expressions/basic/number */ "./src/renderer/viz/expressions/basic/number.js");
/* harmony import */ var _expressions_color_Opacity__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./expressions/color/Opacity */ "./src/renderer/viz/expressions/color/Opacity.js");
/* harmony import */ var _expressions_ordering__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./expressions/ordering */ "./src/renderer/viz/expressions/ordering.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Asc", function() { return _expressions_ordering__WEBPACK_IMPORTED_MODULE_24__["Asc"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Desc", function() { return _expressions_ordering__WEBPACK_IMPORTED_MODULE_24__["Desc"]; });

/* harmony import */ var _expressions_color_palettes__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./expressions/color/palettes */ "./src/renderer/viz/expressions/color/palettes.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "palettes", function() { return _expressions_color_palettes__WEBPACK_IMPORTED_MODULE_25__["default"]; });

/* harmony import */ var _expressions_reverse_reverse__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./expressions/reverse/reverse */ "./src/renderer/viz/expressions/reverse/reverse.js");
/* harmony import */ var _expressions_basic_property__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./expressions/basic/property */ "./src/renderer/viz/expressions/basic/property.js");
/* harmony import */ var _expressions_classification_GlobalEqIntervals__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./expressions/classification/GlobalEqIntervals */ "./src/renderer/viz/expressions/classification/GlobalEqIntervals.js");
/* harmony import */ var _expressions_classification_GlobalQuantiles__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./expressions/classification/GlobalQuantiles */ "./src/renderer/viz/expressions/classification/GlobalQuantiles.js");
/* harmony import */ var _expressions_classification_GlobalStandardDev__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./expressions/classification/GlobalStandardDev */ "./src/renderer/viz/expressions/classification/GlobalStandardDev.js");
/* harmony import */ var _expressions_classification_ViewportEqIntervals__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./expressions/classification/ViewportEqIntervals */ "./src/renderer/viz/expressions/classification/ViewportEqIntervals.js");
/* harmony import */ var _expressions_classification_ViewportQuantiles__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./expressions/classification/ViewportQuantiles */ "./src/renderer/viz/expressions/classification/ViewportQuantiles.js");
/* harmony import */ var _expressions_classification_ViewportStandardDev__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./expressions/classification/ViewportStandardDev */ "./src/renderer/viz/expressions/classification/ViewportStandardDev.js");
/* harmony import */ var _expressions_Ramp__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./expressions/Ramp */ "./src/renderer/viz/expressions/Ramp.js");
/* harmony import */ var _expressions_basic_List__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./expressions/basic/List */ "./src/renderer/viz/expressions/basic/List.js");
/* harmony import */ var _expressions_color_rgb__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./expressions/color/rgb */ "./src/renderer/viz/expressions/color/rgb.js");
/* harmony import */ var _expressions_time__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./expressions/time */ "./src/renderer/viz/expressions/time.js");
/* harmony import */ var _expressions_top__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ./expressions/top */ "./src/renderer/viz/expressions/top.js");
/* harmony import */ var _expressions_Fade__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ./expressions/Fade */ "./src/renderer/viz/expressions/Fade.js");
/* harmony import */ var _expressions_Animation__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ./expressions/Animation */ "./src/renderer/viz/expressions/Animation.js");
/* harmony import */ var _expressions_unary__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! ./expressions/unary */ "./src/renderer/viz/expressions/unary.js");
/* harmony import */ var _expressions_basic_variable__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! ./expressions/basic/variable */ "./src/renderer/viz/expressions/basic/variable.js");
/* harmony import */ var _expressions_aggregation_viewport_ViewportAvg__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! ./expressions/aggregation/viewport/ViewportAvg */ "./src/renderer/viz/expressions/aggregation/viewport/ViewportAvg.js");
/* harmony import */ var _expressions_aggregation_viewport_ViewportMax__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! ./expressions/aggregation/viewport/ViewportMax */ "./src/renderer/viz/expressions/aggregation/viewport/ViewportMax.js");
/* harmony import */ var _expressions_aggregation_viewport_ViewportMin__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! ./expressions/aggregation/viewport/ViewportMin */ "./src/renderer/viz/expressions/aggregation/viewport/ViewportMin.js");
/* harmony import */ var _expressions_aggregation_viewport_ViewportSum__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(/*! ./expressions/aggregation/viewport/ViewportSum */ "./src/renderer/viz/expressions/aggregation/viewport/ViewportSum.js");
/* harmony import */ var _expressions_aggregation_viewport_ViewportCount__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(/*! ./expressions/aggregation/viewport/ViewportCount */ "./src/renderer/viz/expressions/aggregation/viewport/ViewportCount.js");
/* harmony import */ var _expressions_aggregation_viewport_ViewportPercentile__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(/*! ./expressions/aggregation/viewport/ViewportPercentile */ "./src/renderer/viz/expressions/aggregation/viewport/ViewportPercentile.js");
/* harmony import */ var _expressions_aggregation_viewport_ViewportHistogram__WEBPACK_IMPORTED_MODULE_49__ = __webpack_require__(/*! ./expressions/aggregation/viewport/ViewportHistogram */ "./src/renderer/viz/expressions/aggregation/viewport/ViewportHistogram.js");
/* harmony import */ var _expressions_aggregation_global_GlobalAvg__WEBPACK_IMPORTED_MODULE_50__ = __webpack_require__(/*! ./expressions/aggregation/global/GlobalAvg */ "./src/renderer/viz/expressions/aggregation/global/GlobalAvg.js");
/* harmony import */ var _expressions_aggregation_global_GlobalCount__WEBPACK_IMPORTED_MODULE_51__ = __webpack_require__(/*! ./expressions/aggregation/global/GlobalCount */ "./src/renderer/viz/expressions/aggregation/global/GlobalCount.js");
/* harmony import */ var _expressions_aggregation_global_GlobalMax__WEBPACK_IMPORTED_MODULE_52__ = __webpack_require__(/*! ./expressions/aggregation/global/GlobalMax */ "./src/renderer/viz/expressions/aggregation/global/GlobalMax.js");
/* harmony import */ var _expressions_aggregation_global_GlobalMin__WEBPACK_IMPORTED_MODULE_53__ = __webpack_require__(/*! ./expressions/aggregation/global/GlobalMin */ "./src/renderer/viz/expressions/aggregation/global/GlobalMin.js");
/* harmony import */ var _expressions_aggregation_global_GlobalSum__WEBPACK_IMPORTED_MODULE_54__ = __webpack_require__(/*! ./expressions/aggregation/global/GlobalSum */ "./src/renderer/viz/expressions/aggregation/global/GlobalSum.js");
/* harmony import */ var _expressions_aggregation_global_GlobalPercentile__WEBPACK_IMPORTED_MODULE_55__ = __webpack_require__(/*! ./expressions/aggregation/global/GlobalPercentile */ "./src/renderer/viz/expressions/aggregation/global/GlobalPercentile.js");
/* harmony import */ var _expressions_viewportFeatures__WEBPACK_IMPORTED_MODULE_56__ = __webpack_require__(/*! ./expressions/viewportFeatures */ "./src/renderer/viz/expressions/viewportFeatures.js");
/* harmony import */ var _expressions_zoom__WEBPACK_IMPORTED_MODULE_57__ = __webpack_require__(/*! ./expressions/zoom */ "./src/renderer/viz/expressions/zoom.js");
/* harmony import */ var _expressions_Placement__WEBPACK_IMPORTED_MODULE_58__ = __webpack_require__(/*! ./expressions/Placement */ "./src/renderer/viz/expressions/Placement.js");
/* harmony import */ var _expressions_Image__WEBPACK_IMPORTED_MODULE_59__ = __webpack_require__(/*! ./expressions/Image */ "./src/renderer/viz/expressions/Image.js");
/* harmony import */ var _expressions_SVG__WEBPACK_IMPORTED_MODULE_60__ = __webpack_require__(/*! ./expressions/SVG */ "./src/renderer/viz/expressions/SVG.js");
/* harmony import */ var _defaultSVGs__WEBPACK_IMPORTED_MODULE_61__ = __webpack_require__(/*! ./defaultSVGs */ "./src/renderer/viz/defaultSVGs.js");
/* harmony import */ var _expressions_Zoomrange__WEBPACK_IMPORTED_MODULE_62__ = __webpack_require__(/*! ./expressions/Zoomrange */ "./src/renderer/viz/expressions/Zoomrange.js");
/* harmony import */ var _expressions_Scaled__WEBPACK_IMPORTED_MODULE_63__ = __webpack_require__(/*! ./expressions/Scaled */ "./src/renderer/viz/expressions/Scaled.js");
/* harmony import */ var _expressions_AlphaNormalize__WEBPACK_IMPORTED_MODULE_64__ = __webpack_require__(/*! ./expressions/AlphaNormalize */ "./src/renderer/viz/expressions/AlphaNormalize.js");
/* harmony import */ var _expressions_transformation_Translate__WEBPACK_IMPORTED_MODULE_65__ = __webpack_require__(/*! ./expressions/transformation/Translate */ "./src/renderer/viz/expressions/transformation/Translate.js");
/* harmony import */ var _expressions_transformation_Rotate__WEBPACK_IMPORTED_MODULE_66__ = __webpack_require__(/*! ./expressions/transformation/Rotate */ "./src/renderer/viz/expressions/transformation/Rotate.js");
/**
 *  Expressions are used to define visualizations, a visualization (viz) is a set named properties and variables and its corresponding values: expressions.
 *  A viz has the following properties:
 *
 *  - **color**: fill color of points and polygons and color of lines
 *  - **strokeColor**: stroke/border color of points and polygons, not applicable to lines
 *  - **width**: fill diameter of points, thickness of lines, not applicable to polygons
 *  - **strokeWidth**: stroke width of points and polygons, not applicable to lines
 *  - **filter**: filter features by removing from rendering and interactivity all the features that don't pass the test
 *  - **symbol** - show an image instead in the place of points
 *  - **symbolPlacement** - when using `symbol`, offset to apply to the image
 *  - **order**: - rendering order of the features, only applicable to points. See {@link carto.expressions.asc}, {@link carto.expressions.desc} and {@link carto.expressions.noOrder}
 *  - **resolution**: - resolution of the property-aggregation functions, only applicable to points. Default resolution is 1. Custom values must be greater than 0 and lower than 256. A resolution of N means points are aggregated to grid cells NxN pixels. Unlinke {@link https://carto.com/developers/torque-js/guides/how-spatial-aggregation-works/|Torque resolution}, the aggregated points are placed in the centroid of the cluster, not in the center of the grid cell.
 *
 * For example the point diameter could be using the `add` expression:
 *
 * ```javascript
 * const viz = new carto.Viz({
 *   width: carto.expressions.add(5, 5)  // Equivalent to `width: 10`
 * });
 * ```
 *
 * You can use dataset properties inside expressions. Imagine we are representing cities in a map,
 * we can make the point width proportional to the population using the `property`/`prop` expression.
 *
 * ```javascript
 * const viz = new carto.Viz({
 *   width: carto.expressions.prop('population')
 * });
 * ```
 *
 * Multiple expressions can be combined to form more powerful ones,
 * for example lets divide the population between a number using the `div` expression to make points smaller:
 *
 * ```javascript
 * const s = carto.expressions; // We use this alias along documentation.
 * const viz = new carto.Viz({
 *   width: s.div(
 *     s.prop('population'),
 *     10000
 *  )
 * });
 * ```
 *
 * All these expressions can be used also in a String API form. This API is a more compact way to create and use expressions.
 * It has shortcut notation to access your feature properties using the `$` symbol. It also allows inline comments using the JavaScript syntax.
 *
 * ```javascript
 * const viz = new carto.Viz(`
 *   width: $population / 10000  // Size proportional to the population for each feature
 * `);
 * ```
 *
 * Although the combination of expressions is very powerful, you must be aware of the different types to produce valid combinations.
 * For example, the previous example is valid since we assumed that 'population' is a numeric property, it won't be valid if
 * it was a categorical property. Each expression defines some restrictions regarding their parameters, particularly, the
 * type of their parameters.
 *
 * The most important types are:
 *  - **Number** expression. Expressions that contains numbers, both integers and floating point numbers. Boolean types are emulated by this type, being 0 false, and 1 true.
 *  - **Category** expression. Expressions that contains categories. Categories can have a limited set of values, like the country or the region of a feature.
 *  - **Color** expression. Expressions that contains colors. An alpha or transparency channel is included in this type.
 *
 * @namespace carto.expressions
 * @api
 */

/**
 * Type of Numeric Expressions.
 *
 * Associated to expressions that return is an integer or float. When these expressions are evaluated it should return a JavaScript number.
 *
 * JavaScript numbers are automatically converted to Numeric Expressions.
 *
 * @typedef {} Number
 * @api
 */

/**
 * Type of Category Expressions.
 *
 * Associated to expressions that return is a category string. When these expressions are evaluated it should return a JavaScript string.
 *
 * JavaScript strings are automatically converted to Category Expressions.
 *
 * @typedef {} Category
 * @api
 */

/**
 * Type of Color Expressions.
 *
 * Associated to expressions that return a color. When these expressions are evaluated it should return a RGBA object like:
 *
 * ```
 * { r: 255, g: 255, b: 255, a: 1.0 }
 * ```
 *
 * @typedef {} Color
 * @api
 */

/**
 * Type of Date Expressions.
 *
 * @typedef {} Date
 * @api
 */

/**
 * Type of Fade Expressions.
 *
 * @typedef {} Fade
 * @api
 */

/**
 * Type of Palette Expressions.
 *
 * More information in {@link carto.expressions.palettes|carto.expressions.palettes}.
 *
 * @typedef {} Palette
 * @api
 */






































































































































/* Expose classes as constructor functions */

const transition = (...args) => new _expressions_transition__WEBPACK_IMPORTED_MODULE_0__["default"](...args);

const in_ = (...args) => new _expressions_belongs__WEBPACK_IMPORTED_MODULE_1__["In"](...args);
const nin = (...args) => new _expressions_belongs__WEBPACK_IMPORTED_MODULE_1__["Nin"](...args);


const between = (...args) => new _expressions_between__WEBPACK_IMPORTED_MODULE_2__["default"](...args);

const mul = (...args) => new _expressions_binary__WEBPACK_IMPORTED_MODULE_3__["Mul"](...args);
const div = (...args) => new _expressions_binary__WEBPACK_IMPORTED_MODULE_3__["Div"](...args);
const add = (...args) => new _expressions_binary__WEBPACK_IMPORTED_MODULE_3__["Add"](...args);
const sub = (...args) => new _expressions_binary__WEBPACK_IMPORTED_MODULE_3__["Sub"](...args);
const pow = (...args) => new _expressions_binary__WEBPACK_IMPORTED_MODULE_3__["Pow"](...args);
const mod = (...args) => new _expressions_binary__WEBPACK_IMPORTED_MODULE_3__["Mod"](...args);
const greaterThan = (...args) => new _expressions_binary__WEBPACK_IMPORTED_MODULE_3__["GreaterThan"](...args);
const greaterThanOrEqualTo = (...args) => new _expressions_binary__WEBPACK_IMPORTED_MODULE_3__["GreaterThanOrEqualTo"](...args);
const lessThan = (...args) => new _expressions_binary__WEBPACK_IMPORTED_MODULE_3__["LessThan"](...args);
const lessThanOrEqualTo = (...args) => new _expressions_binary__WEBPACK_IMPORTED_MODULE_3__["LessThanOrEqualTo"](...args);
const equals = (...args) => new _expressions_binary__WEBPACK_IMPORTED_MODULE_3__["Equals"](...args);
const notEquals = (...args) => new _expressions_binary__WEBPACK_IMPORTED_MODULE_3__["NotEquals"](...args);
const and = (...args) => new _expressions_binary__WEBPACK_IMPORTED_MODULE_3__["And"](...args);
const or = (...args) => new _expressions_binary__WEBPACK_IMPORTED_MODULE_3__["Or"](...args);
const gt = greaterThan;
const gte = greaterThanOrEqualTo;
const lt = lessThan;
const lte = lessThanOrEqualTo;
const eq = equals;
const neq = notEquals;

const blend = (...args) => new _expressions_blend__WEBPACK_IMPORTED_MODULE_4__["default"](...args);

const buckets = (...args) => new _expressions_buckets__WEBPACK_IMPORTED_MODULE_5__["default"](...args);

const cielab = (...args) => new _expressions_color_CIELab__WEBPACK_IMPORTED_MODULE_7__["default"](...args);

const clusterAvg = (...args) => new _expressions_aggregation_cluster_ClusterAvg__WEBPACK_IMPORTED_MODULE_8__["default"](...args);
const clusterMax = (...args) => new _expressions_aggregation_cluster_ClusterMax__WEBPACK_IMPORTED_MODULE_9__["default"](...args);
const clusterMin = (...args) => new _expressions_aggregation_cluster_ClusterMin__WEBPACK_IMPORTED_MODULE_10__["default"](...args);
const clusterMode = (...args) => new _expressions_aggregation_cluster_ClusterMode__WEBPACK_IMPORTED_MODULE_11__["default"](...args);
const clusterSum = (...args) => new _expressions_aggregation_cluster_ClusterSum__WEBPACK_IMPORTED_MODULE_12__["default"](...args);
const clusterCount = (...args) => new _expressions_aggregation_cluster_ClusterCount__WEBPACK_IMPORTED_MODULE_13__["default"](...args);

const constant = (...args) => new _expressions_basic_constant__WEBPACK_IMPORTED_MODULE_14__["default"](...args);

const image = (...args) => new _expressions_Image__WEBPACK_IMPORTED_MODULE_59__["default"](...args);

const svg = (...args) => new _expressions_SVG__WEBPACK_IMPORTED_MODULE_60__["default"](...args);

const hex = (...args) => new _expressions_color_hex__WEBPACK_IMPORTED_MODULE_15__["default"](...args);

const hsl = (...args) => new _expressions_color_hsl__WEBPACK_IMPORTED_MODULE_16__["HSL"](...args);
const hsla = (...args) => new _expressions_color_hsl__WEBPACK_IMPORTED_MODULE_16__["HSLA"](...args);

const hsv = (...args) => new _expressions_color_hsv__WEBPACK_IMPORTED_MODULE_17__["HSV"](...args);
const hsva = (...args) => new _expressions_color_hsv__WEBPACK_IMPORTED_MODULE_17__["HSVA"](...args);

const cubic = (...args) => new _expressions_interpolators__WEBPACK_IMPORTED_MODULE_18__["Cubic"](...args);
const ilinear = (...args) => new _expressions_interpolators__WEBPACK_IMPORTED_MODULE_18__["ILinear"](...args);

const linear = (...args) => new _expressions_linear__WEBPACK_IMPORTED_MODULE_19__["default"](...args);
const list = (...args) => new _expressions_basic_List__WEBPACK_IMPORTED_MODULE_35__["default"](...args);

const namedColor = (...args) => new _expressions_color_NamedColor__WEBPACK_IMPORTED_MODULE_20__["default"](...args);

const now = (...args) => new _expressions_now__WEBPACK_IMPORTED_MODULE_21__["default"](...args);

const number = (...args) => new _expressions_basic_number__WEBPACK_IMPORTED_MODULE_22__["default"](...args);

const opacity = (...args) => new _expressions_color_Opacity__WEBPACK_IMPORTED_MODULE_23__["default"](...args);

const asc = (...args) => new _expressions_ordering__WEBPACK_IMPORTED_MODULE_24__["Asc"](...args);
const desc = (...args) => new _expressions_ordering__WEBPACK_IMPORTED_MODULE_24__["Desc"](...args);
const noOrder = (...args) => new _expressions_ordering__WEBPACK_IMPORTED_MODULE_24__["NoOrder"](...args);
const width = (...args) => new _expressions_ordering__WEBPACK_IMPORTED_MODULE_24__["Width"](...args);

const reverse = _expressions_reverse_reverse__WEBPACK_IMPORTED_MODULE_26__["default"];

const property = (...args) => new _expressions_basic_property__WEBPACK_IMPORTED_MODULE_27__["default"](...args);


const globalQuantiles = (...args) => new _expressions_classification_GlobalQuantiles__WEBPACK_IMPORTED_MODULE_29__["default"](...args);
const viewportQuantiles = (...args) => new _expressions_classification_ViewportQuantiles__WEBPACK_IMPORTED_MODULE_32__["default"](...args);

const globalEqIntervals = (...args) => new _expressions_classification_GlobalEqIntervals__WEBPACK_IMPORTED_MODULE_28__["default"](...args);
const viewportEqIntervals = (...args) => new _expressions_classification_ViewportEqIntervals__WEBPACK_IMPORTED_MODULE_31__["default"](...args);

const globalStandardDev = (...args) => new _expressions_classification_GlobalStandardDev__WEBPACK_IMPORTED_MODULE_30__["default"](...args);
const viewportStandardDev = (...args) => new _expressions_classification_ViewportStandardDev__WEBPACK_IMPORTED_MODULE_33__["default"](...args);

const ramp = (...args) => new _expressions_Ramp__WEBPACK_IMPORTED_MODULE_34__["default"](...args);

const rgb = (...args) => new _expressions_color_rgb__WEBPACK_IMPORTED_MODULE_36__["RGB"](...args);
const rgba = (...args) => new _expressions_color_rgb__WEBPACK_IMPORTED_MODULE_36__["RGBA"](...args);

const category = (...args) => new _expressions_basic_category__WEBPACK_IMPORTED_MODULE_6__["default"](...args);

const time = (...args) => new _expressions_time__WEBPACK_IMPORTED_MODULE_37__["default"](...args);


const top = (...args) => new _expressions_top__WEBPACK_IMPORTED_MODULE_38__["default"](...args);

const fade = (...args) => new _expressions_Fade__WEBPACK_IMPORTED_MODULE_39__["Fade"](...args);
const animation = (...args) => new _expressions_Animation__WEBPACK_IMPORTED_MODULE_40__["Animation"](...args);

const log = (...args) => new _expressions_unary__WEBPACK_IMPORTED_MODULE_41__["Log"](...args);
const sqrt = (...args) => new _expressions_unary__WEBPACK_IMPORTED_MODULE_41__["Sqrt"](...args);
const sin = (...args) => new _expressions_unary__WEBPACK_IMPORTED_MODULE_41__["Sin"](...args);
const cos = (...args) => new _expressions_unary__WEBPACK_IMPORTED_MODULE_41__["Cos"](...args);
const tan = (...args) => new _expressions_unary__WEBPACK_IMPORTED_MODULE_41__["Tan"](...args);
const sign = (...args) => new _expressions_unary__WEBPACK_IMPORTED_MODULE_41__["Sign"](...args);
const abs = (...args) => new _expressions_unary__WEBPACK_IMPORTED_MODULE_41__["Abs"](...args);
const isNaN = (...args) => new _expressions_unary__WEBPACK_IMPORTED_MODULE_41__["IsNaN"](...args);
const not = (...args) => new _expressions_unary__WEBPACK_IMPORTED_MODULE_41__["Not"](...args);
const floor = (...args) => new _expressions_unary__WEBPACK_IMPORTED_MODULE_41__["Floor"](...args);
const ceil = (...args) => new _expressions_unary__WEBPACK_IMPORTED_MODULE_41__["Ceil"](...args);

const variable = (...args) => Object(_expressions_basic_variable__WEBPACK_IMPORTED_MODULE_42__["default"])(...args);


const viewportAvg = (...args) => new _expressions_aggregation_viewport_ViewportAvg__WEBPACK_IMPORTED_MODULE_43__["default"](...args);
const viewportMax = (...args) => new _expressions_aggregation_viewport_ViewportMax__WEBPACK_IMPORTED_MODULE_44__["default"](...args);
const viewportMin = (...args) => new _expressions_aggregation_viewport_ViewportMin__WEBPACK_IMPORTED_MODULE_45__["default"](...args);
const viewportSum = (...args) => new _expressions_aggregation_viewport_ViewportSum__WEBPACK_IMPORTED_MODULE_46__["default"](...args);
const viewportCount = (...args) => new _expressions_aggregation_viewport_ViewportCount__WEBPACK_IMPORTED_MODULE_47__["default"](...args);
const viewportPercentile = (...args) => new _expressions_aggregation_viewport_ViewportPercentile__WEBPACK_IMPORTED_MODULE_48__["default"](...args);
const viewportHistogram = (...args) => new _expressions_aggregation_viewport_ViewportHistogram__WEBPACK_IMPORTED_MODULE_49__["default"](...args);
const viewportFeatures = (...args) => new _expressions_viewportFeatures__WEBPACK_IMPORTED_MODULE_56__["default"](...args);
const globalAvg = (...args) => new _expressions_aggregation_global_GlobalAvg__WEBPACK_IMPORTED_MODULE_50__["default"](...args);
const globalMax = (...args) => new _expressions_aggregation_global_GlobalMax__WEBPACK_IMPORTED_MODULE_52__["default"](...args);
const globalMin = (...args) => new _expressions_aggregation_global_GlobalMin__WEBPACK_IMPORTED_MODULE_53__["default"](...args);
const globalSum = (...args) => new _expressions_aggregation_global_GlobalSum__WEBPACK_IMPORTED_MODULE_54__["default"](...args);
const globalCount = (...args) => new _expressions_aggregation_global_GlobalCount__WEBPACK_IMPORTED_MODULE_51__["default"](...args);
const globalPercentile = (...args) => new _expressions_aggregation_global_GlobalPercentile__WEBPACK_IMPORTED_MODULE_55__["default"](...args);

const zoom = (...args) => new _expressions_zoom__WEBPACK_IMPORTED_MODULE_57__["default"](...args);
const scaled = (...args) => new _expressions_Scaled__WEBPACK_IMPORTED_MODULE_63__["default"](...args);
const zoomrange = (...args) => new _expressions_Zoomrange__WEBPACK_IMPORTED_MODULE_62__["default"](...args);

const placement = (...args) => new _expressions_Placement__WEBPACK_IMPORTED_MODULE_58__["default"](...args);
const translate = (...args) => new _expressions_transformation_Translate__WEBPACK_IMPORTED_MODULE_65__["default"](...args);
const rotate = (...args) => new _expressions_transformation_Rotate__WEBPACK_IMPORTED_MODULE_66__["default"](...args);
const alphaNormalize = (...args) => new _expressions_AlphaNormalize__WEBPACK_IMPORTED_MODULE_64__["default"](...args);

const HOLD = new _expressions_basic_constant__WEBPACK_IMPORTED_MODULE_14__["default"](Number.MAX_SAFE_INTEGER);
const TRUE = new _expressions_basic_constant__WEBPACK_IMPORTED_MODULE_14__["default"](1);
const FALSE = new _expressions_basic_constant__WEBPACK_IMPORTED_MODULE_14__["default"](0);
const PI = new _expressions_basic_constant__WEBPACK_IMPORTED_MODULE_14__["default"](Math.PI);
const E = new _expressions_basic_constant__WEBPACK_IMPORTED_MODULE_14__["default"](Math.E);

const BICYCLE = new _expressions_SVG__WEBPACK_IMPORTED_MODULE_60__["default"](_defaultSVGs__WEBPACK_IMPORTED_MODULE_61__["default"].bicycle);
const BUILDING = new _expressions_SVG__WEBPACK_IMPORTED_MODULE_60__["default"](_defaultSVGs__WEBPACK_IMPORTED_MODULE_61__["default"].building);
const BUS = new _expressions_SVG__WEBPACK_IMPORTED_MODULE_60__["default"](_defaultSVGs__WEBPACK_IMPORTED_MODULE_61__["default"].bus);
const CAR = new _expressions_SVG__WEBPACK_IMPORTED_MODULE_60__["default"](_defaultSVGs__WEBPACK_IMPORTED_MODULE_61__["default"].car);
const CIRCLE = new _expressions_SVG__WEBPACK_IMPORTED_MODULE_60__["default"](_defaultSVGs__WEBPACK_IMPORTED_MODULE_61__["default"].circle);
const CIRCLE_OUTLINE = new _expressions_SVG__WEBPACK_IMPORTED_MODULE_60__["default"](_defaultSVGs__WEBPACK_IMPORTED_MODULE_61__["default"].circleOutline);
const CROSS = new _expressions_SVG__WEBPACK_IMPORTED_MODULE_60__["default"](_defaultSVGs__WEBPACK_IMPORTED_MODULE_61__["default"].cross);
const FLAG = new _expressions_SVG__WEBPACK_IMPORTED_MODULE_60__["default"](_defaultSVGs__WEBPACK_IMPORTED_MODULE_61__["default"].flag);
const HOUSE = new _expressions_SVG__WEBPACK_IMPORTED_MODULE_60__["default"](_defaultSVGs__WEBPACK_IMPORTED_MODULE_61__["default"].house);
const MARKER = new _expressions_SVG__WEBPACK_IMPORTED_MODULE_60__["default"](_defaultSVGs__WEBPACK_IMPORTED_MODULE_61__["default"].marker);
const MARKER_OUTLINE = new _expressions_SVG__WEBPACK_IMPORTED_MODULE_60__["default"](_defaultSVGs__WEBPACK_IMPORTED_MODULE_61__["default"].markerOutline);
const PLUS = new _expressions_SVG__WEBPACK_IMPORTED_MODULE_60__["default"](_defaultSVGs__WEBPACK_IMPORTED_MODULE_61__["default"].plus);
const SQUARE = new _expressions_SVG__WEBPACK_IMPORTED_MODULE_60__["default"](_defaultSVGs__WEBPACK_IMPORTED_MODULE_61__["default"].square);
const SQUARE_OUTLINE = new _expressions_SVG__WEBPACK_IMPORTED_MODULE_60__["default"](_defaultSVGs__WEBPACK_IMPORTED_MODULE_61__["default"].squareOutline);
const STAR = new _expressions_SVG__WEBPACK_IMPORTED_MODULE_60__["default"](_defaultSVGs__WEBPACK_IMPORTED_MODULE_61__["default"].star);
const STAR_OUTLINE = new _expressions_SVG__WEBPACK_IMPORTED_MODULE_60__["default"](_defaultSVGs__WEBPACK_IMPORTED_MODULE_61__["default"].starOutline);
const TRIANGLE = new _expressions_SVG__WEBPACK_IMPORTED_MODULE_60__["default"](_defaultSVGs__WEBPACK_IMPORTED_MODULE_61__["default"].triangle);
const TRIANGLE_OUTLINE = new _expressions_SVG__WEBPACK_IMPORTED_MODULE_60__["default"](_defaultSVGs__WEBPACK_IMPORTED_MODULE_61__["default"].triangleOutline);

const ALIGN_CENTER = new _expressions_Placement__WEBPACK_IMPORTED_MODULE_58__["default"](constant(0), constant(0));
const ALIGN_BOTTOM = new _expressions_Placement__WEBPACK_IMPORTED_MODULE_58__["default"](constant(0), constant(1));




/***/ }),

/***/ "./src/renderer/viz/expressions/AlphaNormalize.js":
/*!********************************************************!*\
  !*** ./src/renderer/viz/expressions/AlphaNormalize.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return AlphaNormalize; });
/* harmony import */ var _base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./base */ "./src/renderer/viz/expressions/base.js");
/* harmony import */ var _expressions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../expressions */ "./src/renderer/viz/expressions.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils */ "./src/renderer/viz/expressions/utils.js");
/* harmony import */ var _basic_property__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./basic/property */ "./src/renderer/viz/expressions/basic/property.js");





/**
 * Override the opacity (alpha channel) of a color to normalize the input color by a normalizer property.
 *
 * This is implemented as `opacity(input, normalizer/globalMax(normalizer))
 *
 * @param {Color} input - input color to normalize
 * @param {Number} normalizer - numeric property that will be used to normalize the input color
 * @return {Color}
 *
 * @example <caption>Normalize an input property ($winner_party) by a second property ($voters).</caption>
 * const s = carto.expressions;
 * const viz = new carto.Viz({
 *   color: s.alphaNormalize(
 *              s.ramp(s.prop('winner_party'), [red, blue]),
 *              s.prop('voters')
 *          )
 * });
 *
 * @example <caption>Normalize an input property ($winner_party) by a second property ($voters). (String)</caption>
 * const s = carto.expressions;
 * const viz = new carto.Viz({
 *   color: alphaNormalize(
 *              ramp($winner_party, [red, blue]),
 *              $voters
 *          )
 * });
 *
 * @memberof carto.expressions
 * @name alphaNormalize
 * @function
 * @api
 */
class AlphaNormalize extends _base__WEBPACK_IMPORTED_MODULE_0__["default"] {
    constructor (input, normalizer) {
        Object(_utils__WEBPACK_IMPORTED_MODULE_2__["checkMaxArguments"])(arguments, 2, 'alphaNormalize');
        Object(_utils__WEBPACK_IMPORTED_MODULE_2__["checkExpression"])('alphaNormalize', 'input', 0, input);
        Object(_utils__WEBPACK_IMPORTED_MODULE_2__["checkExpression"])('alphaNormalize', 'normalizer', 1, normalizer);

        super({ _impostor: Object(_expressions__WEBPACK_IMPORTED_MODULE_1__["opacity"])(input, Object(_expressions__WEBPACK_IMPORTED_MODULE_1__["div"])(normalizer, Object(_expressions__WEBPACK_IMPORTED_MODULE_1__["globalMax"])(normalizer))) });
        this._input = input;
        this._normalizer = normalizer;
        this.type = 'color';
        this.inlineMaker = inline => inline._impostor;
    }

    _bindMetadata (meta) {
        this._input._bindMetadata(meta);
        this._normalizer._bindMetadata(meta);
        Object(_utils__WEBPACK_IMPORTED_MODULE_2__["checkType"])('alphaNormalize', 'input', 0, 'color', this._input);
        Object(_utils__WEBPACK_IMPORTED_MODULE_2__["checkType"])('alphaNormalize', 'normalizer', 1, 'number', this._normalizer);
        Object(_utils__WEBPACK_IMPORTED_MODULE_2__["checkInstance"])('alphaNormalize', 'normalizer', 1, _basic_property__WEBPACK_IMPORTED_MODULE_3__["default"], this._normalizer);
        super._bindMetadata(meta);
    }

    get value () {
        return this.eval();
    }

    eval (f) {
        return this._impostor.eval(f);
    }
}


/***/ }),

/***/ "./src/renderer/viz/expressions/Animation.js":
/*!***************************************************!*\
  !*** ./src/renderer/viz/expressions/Animation.js ***!
  \***************************************************/
/*! exports provided: Animation */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Animation", function() { return Animation; });
/* harmony import */ var _base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./base */ "./src/renderer/viz/expressions/base.js");
/* harmony import */ var _Fade__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Fade */ "./src/renderer/viz/expressions/Fade.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils */ "./src/renderer/viz/expressions/utils.js");
/* harmony import */ var _expressions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../expressions */ "./src/renderer/viz/expressions.js");
/* harmony import */ var _basic_property__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./basic/property */ "./src/renderer/viz/expressions/basic/property.js");
/* harmony import */ var _utils_util__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../utils/util */ "./src/utils/util.js");







let waitingForLayer = new Set();
let waitingForOthers = new Set();

/**
 * Create an animated temporal filter (animation).
 *
 * @param {Number} input input to base the temporal filter,
 * if input is a property, the beginning and end of the animation will be determined by the minimum and maximum timestamps of the property on the dataset,
 * this can be problematic if outliers are present. Otherwise input must be a number expression in which 0 means beginning of the animation and 1 means end.
 * If `input` is NULL or NaN the filter won't be passed at any moment of the animation.
 *
 * It can be combined with linear and time expressions.
 * @param {Number} duration duration of the animation in seconds, optional, defaults to 10 seconds
 * @param {Fade} fade fadeIn/fadeOut configuration, optional, defaults to 0.15 seconds of fadeIn and 0.15 seconds of fadeOut
 * @return {Number}
 *
 * @example <caption>Temporal map by $day (of numeric type), with a duration of 40 seconds, fadeIn of 0.1 seconds and fadeOut of 0.3 seconds.</caption>
 * const s = carto.expressions;
 * const viz = new carto.Viz({
 *   width: 2,
 *   color: s.ramp(s.linear(s.clusterAvg(s.prop('temp'), 0, 30)), s.palettes.TEALROSE),
 *   filter: s.animation(s.prop('day'), 40, s.fade(0.1, 0.3))
 * });
 *
 * @example <caption>Temporal map by $day (of numeric type), with a duration of 40 seconds, fadeIn of 0.1 seconds and fadeOut of 0.3 seconds. (String)</caption>
 * const viz = new carto.Viz(`
 *   width: 2
 *   color: ramp(linear(clusterAvg($temp), 0,30), tealrose)
 *   filter: animation($day, 40, fade(0.1, 0.3))
 * `);
 *
 * @example <caption>Temporal map by $date (of date type), with a duration of 40 seconds, fadeIn of 0.1 seconds and fadeOut of 0.3 seconds.</caption>
 * const viz = new carto.Viz({
 *   width: 2,
 *   color: s.ramp(s.linear(s.clusterAvg(s.prop('temp'), 0, 30)), s.palettes.TEALROSE),
 *   filter: s.animation(s.linear(s.prop('date'), s.time('2022-03-09T00:00:00Z'), s.time('2033-08-12T00:00:00Z')), 40, s.fade(0.1, 0.3))
 * });
 *
 * @example <caption>Temporal map by $date (of date type), with a duration of 40 seconds, fadeIn of 0.1 seconds and fadeOut of 0.3 seconds. (String)</caption>
 * const viz = new carto.Viz(`
 *   width: 2
 *   color: ramp(linear(clusterAvg($temp), 0,30), tealrose)
 *   filter: animation(linear($date, time('2022-03-09T00:00:00Z'), time('2033-08-12T00:00:00Z')), 40, fade(0.1, 0.3))
 * `);
 *
 * @memberof carto.expressions
 * @name animation
 * @function
 * @api
*/
/**
 * Animation class
 *
 * This class is instanced automatically by using the `animation` function. It is documented for its methods.
 *
 * @memberof carto.expressions
 * @extends carto.source.Base
 * @name Animation
 * @abstract
 * @hideconstructor
 * @class
 * @api
 */
class Animation extends _base__WEBPACK_IMPORTED_MODULE_0__["default"] {
    constructor (input, duration = 10, fade = new _Fade__WEBPACK_IMPORTED_MODULE_1__["Fade"]()) {
        Object(_utils__WEBPACK_IMPORTED_MODULE_2__["checkMaxArguments"])(arguments, 3, 'animation');

        duration = Object(_utils__WEBPACK_IMPORTED_MODULE_2__["implicitCast"])(duration);
        input = Object(_utils__WEBPACK_IMPORTED_MODULE_2__["implicitCast"])(input);
        const originalInput = input;

        if (input.isA(_basic_property__WEBPACK_IMPORTED_MODULE_4__["default"])) {
            input = Object(_expressions__WEBPACK_IMPORTED_MODULE_3__["linear"])(input, Object(_expressions__WEBPACK_IMPORTED_MODULE_3__["globalMin"])(input), Object(_expressions__WEBPACK_IMPORTED_MODULE_3__["globalMax"])(input));
        }

        const progress = Object(_expressions__WEBPACK_IMPORTED_MODULE_3__["number"])(0);
        super({ _input: input, progress, fade, duration });
        // TODO improve type check
        this.type = 'number';
        this._originalInput = originalInput;
        this._paused = false;

        this.preface = `
        #ifndef ANIMATION
        #define ANIMATION

        float animation(float _input, float progress, float duration, float fadeIn, float fadeOut){
            float x = 0.;

            // Check for NaN
            if (_input <= 0.0 || 0.0 <= _input){
                x = 1. - clamp(abs(_input - progress) * duration / (_input > progress ? fadeIn: fadeOut), 0., 1.);
            }

            return x;
        }

        #endif
    `;

        this.inlineMaker = inline =>
            `animation(${inline._input}, ${inline.progress}, ${inline.duration}, ${inline.fade.in}, ${inline.fade.out})`;
    }

    isAnimated () {
        return !this.paused;
    }

    _dataReady () {
        if (waitingForLayer.has(this)) {
            waitingForLayer.delete(this);
            waitingForOthers.add(this);
        }
        if (waitingForOthers.has(this)) {
            waitingForLayer = new Set([...waitingForLayer].filter(expr => {
                while (expr.parent) {
                    expr = expr.parent;
                }
                if (expr._getRootExpressions) {
                    // The animation hasn't been removed from the viz
                    return true;
                }
                return false;
            }));
            if (waitingForLayer.size > 0) {
                return;
            }
            [...waitingForOthers.values()].map(anim => {
                if (anim._paused === 'default') {
                    anim.play();
                }
            });
            waitingForOthers.clear();
        }
    }

    _postShaderCompile (program, gl) {
        waitingForLayer.add(this);
        if (!this._paused) {
            this._paused = 'default';
        }
        super._postShaderCompile(program, gl);
    }

    _setTimestamp (timestamp) {
        super._setTimestamp(timestamp);

        if (this._paused && this._lastTime === undefined) {
            return;
        }

        let deltaTime = 0;
        const speed = 1 / this.duration.value;

        if (this._lastTime !== undefined) {
            deltaTime = timestamp - this._lastTime;
        }

        this._lastTime = timestamp;

        if (this._paused) {
            return;
        }

        this.progress.expr = (this.progress.expr + speed * deltaTime) % 1;
    }

    eval (feature) {
        const input = this._input.eval(feature);

        if (Number.isNaN(input)) {
            return 0;
        }

        const progress = this.progress.value;
        const duration = this.duration.value;
        const fadeIn = this.fade.fadeIn.eval(feature);
        const fadeOut = this.fade.fadeOut.eval(feature);

        const output = 1 - Object(_utils__WEBPACK_IMPORTED_MODULE_2__["clamp"])(Math.abs(input - progress) * duration / (input > progress ? fadeIn : fadeOut), 0, 1);

        return output;
    }

    /**
     * Get the current time stamp of the animation
     *
     * @returns {Number|Date} Current time stamp of the animation. If the animation is based on a numeric expression this will output a number, if it is based on a date expression it will output a date
     *
     * @example <caption>Using the `getProgressValue` method to get the animation current value.</caption>
     * const s = carto.expressions;
     * let animationExpr = s.animation(s.linear(s.prop('saledate'), 1991, 2017), 20, s.fade(0.7, 0.4));
     * const animationStyle = {
     *   color: s.ramp(s.linear(s.prop('priceperunit'), 2000, 1010000), [s.rgb(0, 255, 0), s.rgb(255, 0, 0)]),
     *   width: s.mul(s.sqrt(s.prop('priceperunit')), 0.05),
     *   filter: animationExpr
     * };
     * layer.on('updated', () => {
     *   let currTime = Math.floor(animationExpr.getProgressValue());
     *   document.getElementById('timestamp').innerHTML = currTime;
     * });
     *
     * @memberof carto.expressions.Animation
     * @name getProgressValue
     * @instance
     * @api
     */
    getProgressValue () {
        const progress = this.progress.eval(); // from 0 to 1
        const min = this._input.min.eval();
        const max = this._input.max.eval();

        if (!(min instanceof Date)) {
            return progress * (max - min) + min;
        }

        const tmin = min.getTime();
        const tmax = max.getTime();
        const tmix = (1 - progress) * tmin + tmax * progress;

        return new Date(tmix);
    }

    /**
     * Set the time stamp of the animation
     * @api
     * @memberof carto.expressions.Animation
     * @instance
     * @name setCurrent
     * @param {Date|number} value - A JavaScript Date object with the new animation time
     */
    setTimestamp (timestamp) {
        const date = Object(_utils_util__WEBPACK_IMPORTED_MODULE_5__["castDate"])(timestamp);
        const tmin = this._input.min.eval();
        const tmax = this._input.max.eval();

        if (date.getTime() < tmin) {
            throw new RangeError('animation.setTimestamp requires the date parameter to be higher than the lower limit');
        }
        if (date.getTime() > tmax) {
            throw new RangeError('animation.setTimestamp requires the date parameter to be lower than the higher limit');
        }

        this.progress.expr = (date.getTime() - tmin) / (tmax - tmin);
    }

    /**
     * Get the animation progress.
     *
     * @returns {Number} A number representing the progress. 0 when the animation just started and 1 at the end of the cycle.
     * @api
     * @instance
     * @memberof carto.expressions.Animation
     * @name getProgressPct
     */
    getProgressPct () {
        return this.progress.value;
    }

    /**
     * Set the animation progress from 0 to 1.
     * @param {number} progress - A number in the [0-1] range setting the animation progress.
     * @api
     * @instance
     * @memberof carto.expressions.Animation
     * @name setProgressPct
     */
    setProgressPct (progress) {
        progress = Number.parseFloat(progress);

        if (progress < 0 || progress > 1) {
            throw new TypeError(`animation.setProgressPct requires a number between 0 and 1 as parameter but got: ${progress}`);
        }

        this.progress.expr = progress;
    }

    /**
     * Pause the animation
     *
     * @api
     * @memberof carto.expressions.Animation
     * @instance
     * @name pause
     */
    pause () {
        this._paused = true;
    }

    /**
     * Play/resume the animation
     *
     * @api
     * @memberof carto.expressions.Animation
     * @instance
     * @name play
     */
    play () {
        this._paused = false;
    }

    /**
     * Stops the animation
     *
     * @api
     * @memberof carto.expressions.Animation
     * @instance
     * @name stop
     */
    stop () {
        this.progress.expr = 0;
        this._paused = true;
    }

    _bindMetadata (meta) {
        this._originalInput._bindMetadata(meta);
        this.duration._bindMetadata(meta);

        Object(_utils__WEBPACK_IMPORTED_MODULE_2__["checkType"])('animation', 'input', 0, ['number', 'date'], this._originalInput);
        Object(_utils__WEBPACK_IMPORTED_MODULE_2__["checkType"])('animation', 'duration', 1, 'number', this.duration);
        super._bindMetadata(meta);

        Object(_utils__WEBPACK_IMPORTED_MODULE_2__["checkType"])('animation', 'input', 0, 'number', this._input);
        Object(_utils__WEBPACK_IMPORTED_MODULE_2__["checkType"])('animation', 'fade', 2, 'fade', this.fade);
        Object(_utils__WEBPACK_IMPORTED_MODULE_2__["checkFeatureIndependent"])('animation', 'duration', 1, this.duration);
    }
}


/***/ }),

/***/ "./src/renderer/viz/expressions/CategoryIndex.js":
/*!*******************************************************!*\
  !*** ./src/renderer/viz/expressions/CategoryIndex.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return CategoryIndex; });
/* harmony import */ var _base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./base */ "./src/renderer/viz/expressions/base.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils */ "./src/renderer/viz/expressions/utils.js");



const SQRT_MAX_CATEGORIES_PER_PROPERTY = 256;

/**
* Transform a categorical property into a per-property category index. The evaluated result returns a value between 0 and 1.
* The dataset must contain less than 65536 (256 * 256) different categories.
*
* @param {Category} property - The property to be evaluated, must be categorical
* @return {Category}
*
* @example <caption> Color by $city using the CARTOColor Prism by assigning different color in Prism to each category.</caption>
* const s = carto.expressions;
* const viz = new carto.Viz({
*   color: s.ramp(s.categoryIndex(s.prop('city')), s.palettes.PRISM)
* });
*
* @example <caption> Color by $city using the CARTOColor Prism by assigning different color in Prism to each category. (String)</caption>
* const viz = new carto.Viz(`
*   color: ramp(categoryIndex($city), PRISM)
* `);
*
* @memberof carto.expressions
* @name categoryIndex
* @function
* @api
*/
class CategoryIndex extends _base__WEBPACK_IMPORTED_MODULE_0__["default"] {
    constructor (property) {
        Object(_utils__WEBPACK_IMPORTED_MODULE_1__["checkMaxArguments"])(arguments, 1, 'categoryIndex');

        property = Object(_utils__WEBPACK_IMPORTED_MODULE_1__["implicitCast"])(property);

        Object(_utils__WEBPACK_IMPORTED_MODULE_1__["checkExpression"])('categoryIndex', 'property', 0, property);
        super({ property });
        this._numTranslatedCategories = null;
        this.type = 'category';

        this._translatePixels = new Float32Array(SQRT_MAX_CATEGORIES_PER_PROPERTY * SQRT_MAX_CATEGORIES_PER_PROPERTY);
        this._translateArray = [];
        this._numTranslatedCategories = 0;
        this._numTranslatedCategoriesGL = 0;
    }

    get numCategories () {
        const metaColumn = this._metadata.properties[this.property.name];
        return metaColumn.categories.length;
    }

    get numCategoriesWithoutOthers () {
        return this.numCategories;
    }

    _bindMetadata (metadata) {
        super._bindMetadata(metadata);
        Object(_utils__WEBPACK_IMPORTED_MODULE_1__["checkType"])('categoryIndex', 'property', 0, 'category', this.property);
        this._metadata = metadata;
        this._calcTranslated();
    }

    eval (feature) {
        const name = this.property.eval(feature);
        const id = this._metadata.categoryToID.get(name);

        return this._translateArray[id];
    }

    _preDraw (program, drawMetadata, gl) {
        gl.activeTexture(gl.TEXTURE0 + drawMetadata.freeTexUnit);

        if (this._numTranslatedCategoriesGL !== this.numCategories) {
            this._numTranslatedCategoriesGL = this.numCategories;
            this._calcTranslated();
            this._translateTexture = gl.createTexture();
            gl.bindTexture(gl.TEXTURE_2D, this._translateTexture);
            gl.pixelStorei(gl.UNPACK_PREMULTIPLY_ALPHA_WEBGL, false);
            gl.texImage2D(gl.TEXTURE_2D, 0, gl.ALPHA, SQRT_MAX_CATEGORIES_PER_PROPERTY, SQRT_MAX_CATEGORIES_PER_PROPERTY, 0, gl.ALPHA, gl.FLOAT, this._translatePixels);
            gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.NEAREST);
            gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.NEAREST);
            gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
            gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
        } else {
            gl.bindTexture(gl.TEXTURE_2D, this._translateTexture);
        }

        gl.uniform1i(this._getBinding(program).texRampTranslateLoc, drawMetadata.freeTexUnit);
        drawMetadata.freeTexUnit++;
    }

    _applyToShaderSource (getGLSLforProperty) {
        const max = SQRT_MAX_CATEGORIES_PER_PROPERTY.toFixed(20);
        const property = this.property._applyToShaderSource(getGLSLforProperty);
        return {
            inline: `ramp_translate${this._uid}(${property.inline})`,
            preface: `
                    uniform sampler2D texRampTranslate${this._uid};
                    float ramp_translate${this._uid}(float s){
                        vec2 v = vec2(mod(s, ${max}), floor(s / ${max}));
                        return texture2D(texRampTranslate${this._uid}, v/${max}).a;
                    }`
        };
    }

    _postShaderCompile (program, gl) {
        this._getBinding(program).texRampTranslateLoc = gl.getUniformLocation(program, `texRampTranslate${this._uid}`);
    }

    _calcTranslated () {
        const metaColumn = this._metadata.properties[this.property.name];
        const numCategories = this.numCategories;

        if (this._numTranslatedCategories !== numCategories) {
            this._numTranslatedCategories = numCategories;

            for (let i = 0; i < numCategories; i++) {
                const id = this._metadata.categoryToID.get(metaColumn.categories[i].name);
                const value = i / (numCategories - 1);
                const vec2Id = {
                    x: id % SQRT_MAX_CATEGORIES_PER_PROPERTY,
                    y: Math.floor(id / SQRT_MAX_CATEGORIES_PER_PROPERTY)
                };

                this._translatePixels[SQRT_MAX_CATEGORIES_PER_PROPERTY * vec2Id.y + vec2Id.x] = value;
                this._translateArray.push(value);
            }
        }
    }

    getLegendData () {
        const categories = this._metadata.properties[this.property.name].categories;
        const categoriesLength = categories.length;
        const divisor = categoriesLength - 1;
        const data = [];

        for (let i = 0; i < categoriesLength; i++) {
            const category = categories[i];
            const key = category.name;
            const value = i / divisor;

            data.push({ key, value });
        }

        return { data };
    }
}


/***/ }),

/***/ "./src/renderer/viz/expressions/Fade.js":
/*!**********************************************!*\
  !*** ./src/renderer/viz/expressions/Fade.js ***!
  \**********************************************/
/*! exports provided: Fade */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Fade", function() { return Fade; });
/* harmony import */ var _base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./base */ "./src/renderer/viz/expressions/base.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils */ "./src/renderer/viz/expressions/utils.js");



/**
 * Create a FadeIn/FadeOut configuration. See `animation` for more details.
 *
 * @param {Number} param1 - Expression of type number or Number
 * @param {Number} param2 - Expression of type number or Number
 * @return {Fade}
 *
 * @example <caption>Fade in of 0.1 seconds, fade out of 0.3 seconds.</caption>
 * const s = carto.expressions;
 * const viz = new carto.Viz({
 *   filter: s.animation(s.prop('day'), 40, s.fade(0.1, 0.3))
 * });
 *
 * @example <caption>Fade in of 0.1 seconds, fade out of 0.3 seconds. (String)</caption>
 * const viz = new carto.Viz(`
 *   filter: animation($day, 40, fade(0.1, 0.3))
 * `);
 *
 * @example<caption>Fade in and fade out of 0.5 seconds.</caption>
 * const s = carto.expressions;
 * const viz = new carto.Viz({
 *   filter: s.animation(s.prop('day'), 40, s.fade(0.5))
 * });
 *
 * @example<caption>Fade in and fade out of 0.5 seconds. (String)</caption>
 * const viz = new carto.Viz(`
 *   filter: animation($day, 40, fade(0.5))
 * `);
 *
 * @example<caption>Fade in of 0.3 seconds without fading out.</caption>
 * const s = carto.expressions;
 * const viz = new carto.Viz({
 *   filter: s.animation(s.prop('day'), 40, s.fade(0.1, s.HOLD))
 * });
 *
 * @example<caption>Fade in of 0.3 seconds without fading out. (String)</caption>
 * const viz = new carto.Viz(`
 *   filter: animation($day, 40, fade(0.3, HOLD))
 * `);
 *
 * @memberof carto.expressions
 * @name fade
 * @function
 * @api
*/

const DEFAULT_FADE = 0.15;
const DEFAULT_PARAM = undefined;

class Fade extends _base__WEBPACK_IMPORTED_MODULE_0__["default"] {
    constructor (param1 = DEFAULT_PARAM, param2 = DEFAULT_PARAM) {
        Object(_utils__WEBPACK_IMPORTED_MODULE_1__["checkMaxArguments"])(arguments, 2, 'fade');

        let fadeIn = param1 === DEFAULT_PARAM
            ? Object(_utils__WEBPACK_IMPORTED_MODULE_1__["implicitCast"])(DEFAULT_FADE)
            : Object(_utils__WEBPACK_IMPORTED_MODULE_1__["implicitCast"])(param1);

        let fadeOut = param2 === DEFAULT_PARAM
            ? fadeIn
            : Object(_utils__WEBPACK_IMPORTED_MODULE_1__["implicitCast"])(param2);

        Object(_utils__WEBPACK_IMPORTED_MODULE_1__["checkExpression"])('fade', 'param1', 0, fadeIn);
        Object(_utils__WEBPACK_IMPORTED_MODULE_1__["checkExpression"])('fade', 'param2', 1, fadeOut);

        super({ fadeIn, fadeOut });

        this.type = 'fade';

        this.inlineMaker = (inline) => ({
            in: inline.fadeIn,
            out: inline.fadeOut
        });
    }
    _bindMetadata (meta) {
        super._bindMetadata(meta);
        Object(_utils__WEBPACK_IMPORTED_MODULE_1__["checkType"])('fade', 'param1', 0, 'number', this.fadeIn);
        Object(_utils__WEBPACK_IMPORTED_MODULE_1__["checkType"])('fade', 'param2', 1, 'number', this.fadeOut);
    }
}


/***/ }),

/***/ "./src/renderer/viz/expressions/Image.js":
/*!***********************************************!*\
  !*** ./src/renderer/viz/expressions/Image.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Image; });
/* harmony import */ var _base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./base */ "./src/renderer/viz/expressions/base.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils */ "./src/renderer/viz/expressions/utils.js");



/**
 * Image. Load an image and use it as a symbol.
 *
 * Note: image RGB color will be overridden if the viz `color` property is set.
 *
 * @param {string} url - Image path
 *
 * @example <caption>Load a svg image.</caption>
 * const s = carto.expressions;
 * const viz = new carto.Viz({
 *   symbol: s.image('./marker.svg')
 * });
 *
 * @example <caption>Load a svg image. (String)</caption>
 * const viz = new carto.Viz(`
 *    symbol: image('./marker.svg')
 * `);
 * @memberof carto.expressions
 * @name image
 * @function
 * @api
*/

class Image extends _base__WEBPACK_IMPORTED_MODULE_0__["default"] {
    constructor (url) {
        Object(_utils__WEBPACK_IMPORTED_MODULE_1__["checkMaxArguments"])(arguments, 1, 'image');
        Object(_utils__WEBPACK_IMPORTED_MODULE_1__["checkString"])('image', 'url', 0, url);

        super({});
        this.type = 'image';
        this.canvas = null;
        this.url = url;
        this._promise = new Promise((resolve, reject) => {
            this.image = new window.Image();
            this.image.onload = () => {
                this.canvas = _getCanvasFromImage(this.image);
                this.image = null;
                resolve();
            };
            this.image.onerror = reject;
            this.image.crossOrigin = 'anonymous';
            this.image.src = this.url;
        });
    }

    loadImages () {
        this.count = this.count + 1 || 1;
        return this._promise;
    }

    eval () {
        return this.url;
    }

    _free (gl) {
        if (this.texture) {
            gl.deleteTexture(this.texture);
        }
    }

    _applyToShaderSource () {
        return {
            preface: this._prefaceCode(`uniform sampler2D texSprite${this._uid};`),
            inline: `texture2D(texSprite${this._uid}, imageUV).rgba`
        };
    }

    _postShaderCompile (program, gl) {
        this._getBinding(program)._texLoc = gl.getUniformLocation(program, `texSprite${this._uid}`);
    }

    _preDraw (program, drawMetadata, gl) {
        if (!this.init && this.canvas) {
            this.init = true;
            gl.activeTexture(gl.TEXTURE0 + drawMetadata.freeTexUnit);
            this.texture = gl.createTexture();
            gl.pixelStorei(gl.UNPACK_PREMULTIPLY_ALPHA_WEBGL, false);
            gl.bindTexture(gl.TEXTURE_2D, this.texture);
            gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, this.canvas);
            gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR_MIPMAP_LINEAR);
            gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
            gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
            gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
            gl.generateMipmap(gl.TEXTURE_2D);
            this.canvas = null;
        }

        if (this.texture) {
            gl.activeTexture(gl.TEXTURE0 + drawMetadata.freeTexUnit);
            gl.bindTexture(gl.TEXTURE_2D, this.texture);
            gl.uniform1i(this._getBinding(program)._texLoc, drawMetadata.freeTexUnit);
            drawMetadata.freeTexUnit++;
        }
    }
}

function _getCanvasFromImage (img) {
    const CANVAS_SIZE = 256;
    const canvas = document.createElement('canvas');
    canvas.width = CANVAS_SIZE;
    canvas.height = CANVAS_SIZE;

    const ctx = canvas.getContext('2d');

    const max = Math.max(img.width, img.height);
    const width = img.width / max * CANVAS_SIZE;
    const height = img.height / max * CANVAS_SIZE;

    ctx.drawImage(img, 1 + (CANVAS_SIZE - width) / 2, 1 + (CANVAS_SIZE - height) / 2, width - 2, height - 2);

    return canvas;
}


/***/ }),

/***/ "./src/renderer/viz/expressions/ListImage.js":
/*!***************************************************!*\
  !*** ./src/renderer/viz/expressions/ListImage.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ListImage; });
/* harmony import */ var _base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./base */ "./src/renderer/viz/expressions/base.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils */ "./src/renderer/viz/expressions/utils.js");



/**
 * ImageList. Load an array of images and use them as a symbols.
 *
 * Note: images RGB color will be overridden if the viz `color` property is set.
 *
 * @internal
 */
class ListImage extends _base__WEBPACK_IMPORTED_MODULE_0__["default"] {
    _bindMetadata (meta) {
        super._bindMetadata(meta);
        this.numImages = this.elems.length;
        this._getChildren().forEach((image, i) => Object(_utils__WEBPACK_IMPORTED_MODULE_1__["checkType"])('imageArray', `imageArray[${i}]`, 0, 'image', image));
    }

    eval (feature) {
        return this.elems.map(elem => elem.eval(feature));
    }

    _applyToShaderSource () {
        return {
            preface: this._prefaceCode(`
                uniform sampler2D atlas${this._uid};

                vec4 atlas${this._uid}Fn(vec2 imageUV, float category) {
                    return texture2D(atlas${this._uid}, imageUV/16. + vec2(mod(category, 16.), floor(category/16.))/16. ).rgba;
                }
            `),
            inline: `atlas${this._uid}Fn`
        };
    }

    _postShaderCompile (program, gl) {
        this._getBinding(program).texLoc = gl.getUniformLocation(program, `atlas${this._uid}`);
    }

    _preDraw (program, drawMetadata, gl) {
        this.init = true;
        for (let i = 0; i < this.numImages; i++) {
            const image = this[`image-${i}`];
            this.init = this.init && image.canvas;
        }

        if (this.init && !this.texture) {
            const textureAtlasSize = 4096;
            const imageSize = 256;

            gl.activeTexture(gl.TEXTURE0 + drawMetadata.freeTexUnit);
            this.texture = gl.createTexture();
            gl.pixelStorei(gl.UNPACK_PREMULTIPLY_ALPHA_WEBGL, false);
            gl.bindTexture(gl.TEXTURE_2D, this.texture);
            gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, textureAtlasSize, textureAtlasSize, 0, gl.RGBA, gl.UNSIGNED_BYTE, null);
            gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR_MIPMAP_LINEAR);
            gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
            gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
            gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);

            let offsetX = 0;
            let offsetY = 0;
            for (let i = 0; i < this.numImages; i++) {
                const image = this[`image-${i}`];
                // get image, push image to texture atlas
                gl.texSubImage2D(gl.TEXTURE_2D, 0, offsetX, offsetY, gl.RGBA, gl.UNSIGNED_BYTE, image.canvas);
                offsetX += imageSize;

                if (offsetX + imageSize > textureAtlasSize) {
                    offsetX = 0;
                    offsetY += imageSize;
                }
            }

            gl.generateMipmap(gl.TEXTURE_2D);
        }

        if (this.texture) {
            gl.activeTexture(gl.TEXTURE0 + drawMetadata.freeTexUnit);
            gl.bindTexture(gl.TEXTURE_2D, this.texture);
            gl.uniform1i(this._getBinding(program).texLoc, drawMetadata.freeTexUnit);
            drawMetadata.freeTexUnit++;
        }
    }
}


/***/ }),

/***/ "./src/renderer/viz/expressions/ListTransform.js":
/*!*******************************************************!*\
  !*** ./src/renderer/viz/expressions/ListTransform.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ListTransform; });
/* harmony import */ var _base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./base */ "./src/renderer/viz/expressions/base.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils */ "./src/renderer/viz/expressions/utils.js");



class ListTransform extends _base__WEBPACK_IMPORTED_MODULE_0__["default"] {
    _bindMetadata (meta) {
        super._bindMetadata(meta);
        this._getChildren().forEach((transform, i) => Object(_utils__WEBPACK_IMPORTED_MODULE_1__["checkType"])('ListTransformation', `ListTransformation[${i}]`, 0, 'transformation', transform));
        this.type = 'transformation';
    }

    eval (feature) {
        return this.elems.map(elem => elem.eval(feature));
    }

    _applyToShaderSource (getGLSLforProperty) {
        const childGLSL = this.elems.map(elem => elem._applyToShaderSource(getGLSLforProperty));
        return {
            preface: this._prefaceCode(`
                ${childGLSL.map(c => c.preface).join('\n')}

                vec2 listTransform${this._uid}(vec2 p) {
                    ${childGLSL.map(c => `p = ${c.inline}(p);`).join('\n')}
                    return p;
                }
            `),
            inline: `listTransform${this._uid}`
        };
    }
}


/***/ }),

/***/ "./src/renderer/viz/expressions/Placement.js":
/*!***************************************************!*\
  !*** ./src/renderer/viz/expressions/Placement.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Placement; });
/* harmony import */ var _base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./base */ "./src/renderer/viz/expressions/base.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils */ "./src/renderer/viz/expressions/utils.js");



/**
 * Placement. Define an image offset relative to its size. Where:
 * - `symbolPlacement: placement(1,1)` means to align the bottom left corner of the image with the point center.
 * - `symbolPlacement: placement(0,0)` means to align the center of the image with the point center.
 * - `symbolPlacement: placement(-1,-1)` means to align the top right corner of the image with the point center.
 *
 * ```
 *           |1
 *           |
 *           |
 * -1 -------+------- 1
 *           |
 *           |
 *         -1|
 * ```
 *
 * You can also use `align_center` and `align_bottom` to set the simbol placement as follows:
 * - `symbolPlacement: align_bottom` is equivalent to `symbolPlacement: placement(0, 1)`
 * - `symbolPlacement: align_center` is equivalent to `symbolPlacement: placement(0, 0)`
 *
 * @param {number} x - first numeric expression that indicates the image offset in the X direction.
 * @param {number} y - second numeric expression that indicates the image offset in the Y direction.
 * @return {Placement} Numeric expression
 *
 * @example <caption>Setting the aligment to the top corner of the image.</caption>
 * const s = carto.expressions;
 * const viz = new carto.Viz({
 *   symbol: s.image('./marker.svg').
 *   symbolPlacement: s.placement(1, 0)
 * });
 *
 * @example <caption>Setting the aligment to the top corner of the image. (String)</caption>
 * const viz = new carto.Viz(`
 *   symbol: image('./marker.svg')
 *   symbolPlacement: placement(1, 0)
 * `);
 *
 * @memberof carto.expressions
 * @name placement
 * @function
 * @api
 */

class Placement extends _base__WEBPACK_IMPORTED_MODULE_0__["default"] {
    constructor (x, y) {
        Object(_utils__WEBPACK_IMPORTED_MODULE_1__["checkMaxArguments"])(arguments, 2, 'placement');

        x = Object(_utils__WEBPACK_IMPORTED_MODULE_1__["implicitCast"])(x);
        y = Object(_utils__WEBPACK_IMPORTED_MODULE_1__["implicitCast"])(y);
        super({ x, y });
        this.inlineMaker = inline => `vec2(${inline.x}, ${inline.y})`;
        this.type = 'placement';
    }
    eval (v) {
        return [this.x.eval(v), this.y.eval(v)];
    }
    _bindMetadata (meta) {
        super._bindMetadata(meta);
        Object(_utils__WEBPACK_IMPORTED_MODULE_1__["checkType"])('placement', 'x', 0, 'number', this.x);
        Object(_utils__WEBPACK_IMPORTED_MODULE_1__["checkType"])('placement', 'y', 1, 'number', this.y);
    }
}


/***/ }),

/***/ "./src/renderer/viz/expressions/Ramp.js":
/*!**********************************************!*\
  !*** ./src/renderer/viz/expressions/Ramp.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Ramp; });
/* harmony import */ var _base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./base */ "./src/renderer/viz/expressions/base.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils */ "./src/renderer/viz/expressions/utils.js");
/* harmony import */ var _RampImage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./RampImage */ "./src/renderer/viz/expressions/RampImage.js");
/* harmony import */ var _RampGeneric__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./RampGeneric */ "./src/renderer/viz/expressions/RampGeneric.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./constants */ "./src/renderer/viz/expressions/constants.js");







/**
* Create a ramp: a mapping between an input (numeric or categorical) and an output (number, colors and/or images)
*
* When the input has the same number of categories (without taking the "others" category into account).
* Then, each input category will have a one to one match with an output value.
*
* Some case examples:
* `ramp(buckets($product, ['A, 'B', 'C']), [house, car, bus])`
* `ramp(buckets($price, [20, 50, 120]), [1, 10, 4, 12])`
* `ramp(top($product, 3), [blue, yellow, green])`
* `ramp(globalQuantiles($price, 3), [red, yellow, green])`
*
* When the input has different number of categories or the input is a linear expression.
* Then it will interpolate the output values (Note: this is not supported if output values are images)
*
* Some case examples:
* `ramp(linear($price, 1, 10) [green, yellow, red])`
* `ramp(buckets($product, ['A, 'B', 'C'], [red, blue]))
* - When the input is a categorical property, we wrap it automatically in a CategoryIndex expression
* `ramp($product, Prism)` (equivalent to `ramp($categoryIndex($product)), Prism)`
* - When the input is a numeric property, we wrap it automatically in a Linear expression.
* `ramp($price, Prism)` (equivalent to `ramp($linear($price)), Prism)`
*
* The "others" value is setted by default, depending on the output type:
* - If it is "Number", the "others" value is 1.
* - If it is "Color" from a color array (i.e: [red, yellow, green]), the "others" value is the gray color.
* - If it is "Color" from a cartocolor palette (i.e: Prism), the "others" value is the last color of the palette.
* - If it is "Image", the "others" value is a circle.
*
* If we add a third parameter, the "others" default value will be overridden by this one
*
* @param {Number|Category} input - The input expression to give a color
* @param {Palette|Color[]|Number[]} palette - The color palette that is going to be used
* @param {Number|Color|Image} [others] - Value that overrides the default value for "others"
* @return {Number|Color|Image}
*
* @example <caption>Mapping categories to numbers, colors and images.</caption>
* const s = carto.expressions;
* const viz = new carto.Viz({
*   width: s.ramp(s.buckets(s.prop('product'), ['A, 'B', 'C']), [1, 2, 3])
*   color: s.ramp(s.buckets(s.prop('product'), ['A, 'B', 'C']), s.palettes.PRISM)
*   strokeColor: s.ramp(s.buckets(s.prop('product'), ['A, 'B', 'C']), [s.namedColor('red'), s.namedColor('yellow'), s.namedColor('green')])
*   symbol: s.ramp(s.buckets(s.prop('product'), ['A, 'B', 'C']), [s.HOUSE, s.CAR, s.BUS])
* });
*
* @example <caption>Mapping categories to numbers, colors and images. (String)</caption>
* const viz = new carto.Viz(`
*   width: ramp(buckets($product), ['A, 'B', 'C']), [1, 2, 3])
*   color: ramp(buckets($product), ['A, 'B', 'C']), Prism)
*   strokeColor: ramp(buckets($product), ['A, 'B', 'C']), [red, yellow, green])
*   symbol: ramp(buckets($product), ['A, 'B', 'C']), [house, car, bus])
* `);
*
* @example <caption>Mapping classified numeric properties to numbers, colors and images.</caption>
* const s = carto.expressions;
* const viz = new carto.Viz({
*   width: s.ramp(s.buckets(s.prop('price'), [40, 100]), [1, 2, 3])
*   color: s.ramp(s.buckets(s.prop('price'), [40, 100]), s.palettes.PRISM)
*   strokeColor: s.ramp(s.buckets(s.prop('price'), [40, 100]), [s.namedColor('red'), s.namedColor('yellow'), s.namedColor(green)])
*   symbol: s.ramp(s.buckets(s.prop('price'), [40, 100]), [s.HOUSE), s.CAR, s.BUS])
* });
*
* @example <caption>Mapping classified numeric properties to numbers, colors and images. (String)</caption>
* const viz = new carto.Viz(`
*   width: ramp(buckets($price, [40, 100]), [1, 2, 3])
*   color: ramp(buckets($price, [40, 100]), Prism)
*   strokeColor: ramp(buckets($price, [40, 100]), [red, yellow, green])
*   symbol: ramp(buckets($price, [40, 100]), [house, car, bus])
* `);
*
* @example <caption>Override default values.</caption>
* const s = carto.expressions;
* const viz = new carto.Viz({
*   width: s.ramp(s.top(s.prop('price'), 3), [1, 2, 3], 0)
*   strokeColor: s.ramp(s.top(s.prop('price'), 3), Prism, s.namedColor('red'))
*   color: s.ramp(s.top(s.prop('price'), 3), [s.namedColor('blue'), s.namedColor('red'), s.namedColor('yellow')], s.namedColor(black))
*   symbol: s.ramp(s.top(s.prop('price'), 3), [s.HOUSE, s.CAR, s.BUS], s.CROSS)
* });
*
* @example <caption>Override default values. (String)</caption>
* const viz = new carto.Viz(`
*   width: ramp(top($price, 3), [1, 2, 3], 0)
*   strokeColor: ramp(top($price, 3), Prism, red)
*   color: ramp(top($price, 3), [blue, red, yellow], black)
*   symbol: ramp(top($price, 3), [house, car, bus], cross)
* `);
*
* @memberof carto.expressions
* @name ramp
* @function
* @api
*/
class Ramp extends _base__WEBPACK_IMPORTED_MODULE_0__["default"] {
    constructor (input, palette, others = _constants__WEBPACK_IMPORTED_MODULE_4__["DEFAULT_RAMP_OTHERS"]) {
        Object(_utils__WEBPACK_IMPORTED_MODULE_1__["checkMaxArguments"])(arguments, 3, 'ramp');

        input = Object(_utils__WEBPACK_IMPORTED_MODULE_1__["implicitCast"])(input);
        palette = Object(_utils__WEBPACK_IMPORTED_MODULE_1__["implicitCast"])(palette);

        Object(_utils__WEBPACK_IMPORTED_MODULE_1__["checkExpression"])('ramp', 'input', 0, input);
        Object(_utils__WEBPACK_IMPORTED_MODULE_1__["checkExpression"])('ramp', 'palette', 1, palette);

        if (others !== _constants__WEBPACK_IMPORTED_MODULE_4__["DEFAULT_RAMP_OTHERS"]) {
            Object(_utils__WEBPACK_IMPORTED_MODULE_1__["checkExpression"])('ramp', 'others', 2, others);
        }

        super({ input, palette });
        this.palette = palette;
        this.others = others;
        this._defaultOthers = others === _constants__WEBPACK_IMPORTED_MODULE_4__["DEFAULT_RAMP_OTHERS"];
    }

    _bindMetadata (metadata) {
        super._bindMetadata(metadata);
        switch (this.palette.type) {
            case 'image-list':
                Object.setPrototypeOf(this, _RampImage__WEBPACK_IMPORTED_MODULE_2__["default"].prototype);
                break;
            default:
                Object.setPrototypeOf(this, _RampGeneric__WEBPACK_IMPORTED_MODULE_3__["default"].prototype);
                break;
        }

        return this._bindMetadata(metadata);
    }

    /**
     * Get a legend for the ramp.
     *
     * Note: This method works only for feature property independent outputs.
     * Example:
     * - This works: `ramp($price, [5, 15])`
     * - This does not work: `ramp($price, [5, $amount])`
     *
     * @param {object} config - Optional configuration
     * @param {string} config.othersLabel - Name for other category values. Defaults to 'CARTO_VL_OTHERS'.
     * @param {number} config.samples - Number of samples for numeric values to be returned. Defaults to 10. The maximum number of samples is 100.
     * @return {object} - { type, data }. 'type' could be category or number. Data is an array of { key, value } objects. 'key' depends on the expression type. 'value' is the result evaluated by the ramp. There is more information in the examples.
     *
     * @example <caption>Get legend for a color ramp of a categorical property.</caption>
     * const s = carto.expressions;
     * const viz = new carto.Viz({
     *   color: s.ramp(s.prop('vehicles'), s.palettes.PRISM)
     * });
     *
     * layer.on('loaded', () => {
     *   const legend = layer.viz.color.getLegend();
     *   // legend = {
     *   //    type: 'category',
     *   //    name: '$vehicles',
     *   //    data: [
     *   //       { key: 'Bicycle', value: { r: 95, g: 70, b: 144, a: 1 } },
     *   //       { key: 'Car', value: { r: 29, g: 105, b: 150, a: 1 ] },
     *   //       { key: 'Bus', value: { r: 56, g: 166, b: 165, a: 1 ] },
     *   //       { key: 'CARTO_VL_OTHERS', value: { r: 15, g: 133, b: 84, a: 1 ] }
     *   //     ]
     *   // }
     * });
     *
     * @example <caption>Get legend for a color ramp of a categorical property. (String)</caption>
     * const viz = new carto.Viz(`
     *   color: ramp($vehicles, PRISM)
     * ´);
     *
     * layer.on('loaded', () => {
     *   const legend = layer.viz.color.getLegend();
     *   // legend = {
     *   //    type: 'category',
     *   //    name: '$vehicles',
     *   //    data: [
     *   //       { key: 'Bicycle', value: { r: 95, g: 70, b: 144, a: 1 } },
     *   //       { key: 'Car', value: { r: 29, g: 105, b: 150, a: 1 ] },
     *   //       { key: 'Bus', value: { r: 56, g: 166, b: 165, a: 1 ] },
     *   //       { key: 'CARTO_VL_OTHERS', value: { r: 15, g: 133, b: 84, a: 1 ] }
     *   //     ]
     *   // }
     * });
     *
     * @example <caption>Get legend for an image ramp of a categorical property.</caption>
     * const s = carto.expressions;
     * const viz = new carto.Viz({
     *   symbol: s.ramp(s.prop('vehicles'), [s.BICYCLE, s.CAR, s.BUS])
     * });
     *
     * layer.on('loaded', () => {
     *   const legend = layer.viz.symbol.getLegend();
     *   // legend = {
     *   //    type: 'category',
     *   //    name: '$vehicles',
     *   //    data: [
     *   //       { key: 'Bicycle', value: bicycleImageUrl },
     *   //       { key: 'Car', value: carImageUrl },
     *   //       { key: 'Bus', value: busImageUrl },
     *   //       { key: 'CARTO_VL_OTHERS', value: circleImageUrl }
     *   //     ]
     *   // }
     * });
     *
     * @example <caption>Get legend for an image ramp of a categorical property. (String)</caption>
     * const viz = new carto.Viz(`
     *   symbol: ramp('$vehicles'), [BICYCLE, CAR, BUS])
     * `);
     *
     * layer.on('loaded', () => {
     *   const legend = layer.viz.symbol.getLegend();
     *   // legend = {
     *   //    type: 'category',
     *   //    name: '$vehicles',
     *   //    data: [
     *   //       { key: 'Bicycle', value: bicycleImageUrl },
     *   //       { key: 'Car', value: carImageUrl },
     *   //       { key: 'Bus', value: busImageUrl },
     *   //       { key: 'CARTO_VL_OTHERS', value: circleImageUrl }
     *   //     ]
     *   // }
     * });
     *
     * @example <caption>Get legend of a ramp top expression and set "others" label.</caption>
     * const s = carto.expressions;
     * const viz = new carto.Viz({
     *   color: s.ramp(s.top(s.prop('vehicles')), s.palettes.PRISM)
     * });
     *
     * layer.on('loaded', () => {
     *   const legend = layer.viz.color.getLegend({
     *      othersLabel: 'Other Vehicles'
     *   });
     *
     *   // legend = {
     *   //    type: 'category',
     *   //    name: 'top($vehicles)',
     *   //    data: [
     *   //       { key: 'Bicycle', value: { r: 95, g: 70, b: 144, a: 1 } },
     *   //       { key: 'Car', value: { r: 29, g: 105, b: 150, a: 1 ] },
     *   //       { key: 'Bus', value: { r: 56, g: 166, b: 165, a: 1 ] },
     *   //       { key: 'Other Vehicles', value: { r: 15, g: 133, b: 84, a: 1 ] }
     *   //     ]
     *   // }
     * });
     *
     * @example <caption>Get legend of a ramp top expression and set "others" label. (String)</caption>
     * const viz = new carto.Viz(`
     *   color: ramp(top($vehicles, 5), PRISM)
     * `);
     *
     * layer.on('loaded', () => {
     *   const legend = layer.viz.color.getLegend({
     *      othersLabel: 'Other Vehicles'
     *   });
     *
     *   // legend = {
     *   //    type: 'category',
     *   //    name: 'top($vehicles)',
     *   //    data: [
     *   //       { key: 'Bicycle', value: { r: 95, g: 70, b: 144, a: 1 } },
     *   //       { key: 'Car', value: { r: 29, g: 105, b: 150, a: 1 ] },
     *   //       { key: 'Bus', value: { r: 56, g: 166, b: 165, a: 1 ] },
     *   //       { key: 'Other Vehicles', value: { r: 15, g: 133, b: 84, a: 1 ] }
     *   //     ]
     *   // }
     * });
     *
     * @example <caption>Get legend for a linear ramp expression and set number of samples.</caption>
     * const s = carto.expressions;
     * const viz = new carto.Viz({
     *   color: s.ramp(s.linear(s.prop('numvehicles'), 1, 100), s.palettes.PRISM)
     * });
     *
     * layer.on('loaded', () => {
     *   const legend = layer.viz.color.getLegend({
     *       samples: 4
     *   });
     *
     *   // legend = {
     *   //    type: 'number',
     *   //    name: 'linear($numvehicles, 1, 100)',
     *   //    data: [
     *   //       { key: 25, value: { r: 95, g: 70, b: 144, a: 1 } },
     *   //       { key: 50, value: { r: 29, g: 105, b: 150, a: 1 ] },
     *   //       { key: 75, value: { r: 56, g: 166, b: 165, a: 1 ] },
     *   //       { key: 100, value: { r: 15, g: 133, b: 84, a: 1 ] }
     *   //     ]
     *   // }
     * });
     *
     * @example <caption>Get legend for a linear ramp expression and set number of samples. (String)</caption>
     * const viz = new carto.Viz(`
     *   color: ramp(linear($numvehicles, 1, 100), PRISM)
     * `);
     *
     * layer.on('loaded', () => {
     *   const legend = layer.viz.color.getLegend({
     *       samples: 4
     *   });
     *
     *   // legend = {
     *   //    type: 'number',
     *   //    name: 'linear($numvehicles, 1, 100)',
     *   //    data: [
     *   //       { key: 25, value: { r: 95, g: 70, b: 144, a: 1 } },
     *   //       { key: 50, value: { r: 29, g: 105, b: 150, a: 1 ] },
     *   //       { key: 75, value: { r: 56, g: 166, b: 165, a: 1 ] },
     *   //       { key: 100, value: { r: 15, g: 133, b: 84, a: 1 ] }
     *   //     ]
     *   // }
     * });
     *
     * @example <caption>Get legend for a buckets ramp expression.</caption>
     * const s = carto.expressions;
     * const viz = new carto.Viz({
     *   color: s.ramp(s.buckets((s.prop('numvehicles'), [1, 2, 3]), s.palettes.PRISM))
     * });
     *
     * layer.on('loaded', () => {
     *   const legend = layer.viz.color.getLegend();
     *
     *   // legend = {
     *   //    type: 'number',
     *   //    name: 'buckets($numvehicles, [1, 2, 3])',
     *   //    data: [
     *   //       { key: [-Infinity, 1], value: { r: 95, g: 70, b: 144, a: 1 } },
     *   //       { key: [1, 2], value: { r: 29, g: 105, b: 150, a: 1 ] },
     *   //       { key: [2, 3], value: { r: 56, g: 166, b: 165, a: 1 ] },
     *   //       { key: [3, +Infinity], value: { r: 15, g: 133, b: 84, a: 1 ] }
     *   //     ]
     *   // }
     * });
     *
     * @example <caption>Get legend for a buckets ramp expression. (String)</caption>
     * const s = carto.expressions;
     * const viz = new carto.Viz(`
     *   color: ramp(buckets($numvehicles', [1, 2, 3]), Prism))
     * `);
     *
     * layer.on('loaded', () => {
     *   const legend = layer.viz.color.getLegend();
     *
     *   // legend = {
     *   //    type: 'number',
     *   //    name: 'buckets($numvehicles, [1, 2, 3])',
     *   //    data: [
     *   //       { key: [-Infinity, 1], value: { r: 95, g: 70, b: 144, a: 1 } },
     *   //       { key: [1, 2], value: { r: 29, g: 105, b: 150, a: 1 ] },
     *   //       { key: [2, 3], value: { r: 56, g: 166, b: 165, a: 1 ] },
     *   //       { key: [3, +Infinity], value: { r: 15, g: 133, b: 84, a: 1 ] }
     *   //     ]
     *   // }
     * });
     *
     * @example <caption>Get legend for a classifier ramp expression.</caption>
     * const s = carto.expressions;
     * const viz = new carto.Viz({
     *   color: s.ramp(s.globalEqIntervals(s.prop('numvehicles'), 4), s.palettes.PRISM)
     * });
     *
     * layer.on('loaded', () => {
     *   const legend = layer.viz.color.getLegend();
     *
     *   // legend = {
     *   //    type: 'number',
     *   //    name: 'globalEqIntervals($numvehicles, 4)',
     *   //    data: [
     *   //       { key: [-Infinity, 25], value: { r: 95, g: 70, b: 144, a: 1 } },
     *   //       { key: [25, 50], value: { r: 29, g: 105, b: 150, a: 1 ] },
     *   //       { key: [50, 75], value: { r: 56, g: 166, b: 165, a: 1 ] },
     *   //       { key: [100, +Infinity], value: { r: 15, g: 133, b: 84, a: 1 ] }
     *   //     ]
     *   // }
     * });
     *
     * @example <caption>Get legend for a classifier ramp expression. (String)</caption>
     * const s = carto.expressions;
     * const viz = new carto.Viz(`
     *   color: ramp(globalEqIntervals($numvehicles, 4), Prism)
     * `);
     *
     * layer.on('loaded', () => {
     *   const legend = layer.viz.color.getLegend();
     *
     *   // legend = {
     *   //    type: 'number',
     *   //    name: 'globalEqIntervals($numvehicles, 4)',
     *   //    data: [
     *   //       { key: [-Infinity, 25], value: { r: 95, g: 70, b: 144, a: 1 } },
     *   //       { key: [25, 50], value: { r: 29, g: 105, b: 150, a: 1 ] },
     *   //       { key: [50, 75], value: { r: 56, g: 166, b: 165, a: 1 ] },
     *   //       { key: [100, +Infinity], value: { r: 15, g: 133, b: 84, a: 1 ] }
     *   //     ]
     *   // }
     * });
     *
     * @memberof carto.expressions.Ramp
     * @name getLegend
     * @instance
     * @api
     */
}


/***/ }),

/***/ "./src/renderer/viz/expressions/RampGeneric.js":
/*!*****************************************************!*\
  !*** ./src/renderer/viz/expressions/RampGeneric.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return RampGeneric; });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ "./src/renderer/viz/expressions/utils.js");
/* harmony import */ var _basic_property__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./basic/property */ "./src/renderer/viz/expressions/basic/property.js");
/* harmony import */ var _linear__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./linear */ "./src/renderer/viz/expressions/linear.js");
/* harmony import */ var _color_CIELab_glsl__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./color/CIELab.glsl */ "./src/renderer/viz/expressions/color/CIELab.glsl");
/* harmony import */ var _color_CIELab_glsl__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_color_CIELab_glsl__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _CategoryIndex__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./CategoryIndex */ "./src/renderer/viz/expressions/CategoryIndex.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./constants */ "./src/renderer/viz/expressions/constants.js");
/* harmony import */ var _color_palettes_Palette__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./color/palettes/Palette */ "./src/renderer/viz/expressions/color/palettes/Palette.js");
/* harmony import */ var _base__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./base */ "./src/renderer/viz/expressions/base.js");
/* harmony import */ var _basic_constant__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./basic/constant */ "./src/renderer/viz/expressions/basic/constant.js");
/* harmony import */ var _color_NamedColor__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./color/NamedColor */ "./src/renderer/viz/expressions/color/NamedColor.js");












class RampGeneric extends _base__WEBPACK_IMPORTED_MODULE_7__["default"] {
    _bindMetadata (metadata) {
        const DEFAULT_RAMP_OTHERS_NUMBER = new _basic_constant__WEBPACK_IMPORTED_MODULE_8__["default"](1);
        const DEFAULT_RAMP_OTHERS_COLOR = new _color_NamedColor__WEBPACK_IMPORTED_MODULE_9__["default"]('gray');

        super._bindMetadata(metadata);

        this.type = this.palette.childType;
        if (this.others === _constants__WEBPACK_IMPORTED_MODULE_5__["DEFAULT_RAMP_OTHERS"]) {
            this.others = this.palette.type === 'number-list'
                ? DEFAULT_RAMP_OTHERS_NUMBER
                : DEFAULT_RAMP_OTHERS_COLOR;
        } else {
            Object(_utils__WEBPACK_IMPORTED_MODULE_0__["checkType"])('ramp', 'others', 2, this.palette.childType, this.others);
        }

        if (this.input.isA(_basic_property__WEBPACK_IMPORTED_MODULE_1__["default"])) {
            this.input = this.input.type === 'number'
                ? new _linear__WEBPACK_IMPORTED_MODULE_2__["default"](this.input)
                : new _CategoryIndex__WEBPACK_IMPORTED_MODULE_4__["default"](this.input);

            this.input._bindMetadata(metadata);
        }

        Object(_utils__WEBPACK_IMPORTED_MODULE_0__["checkType"])('ramp', 'input', 0, ['number', 'category'], this.input);

        this.others._bindMetadata(metadata);
        this.childrenNames.push('others');
        this._metadata = metadata;
    }

    eval (feature) {
        const input = this.input.eval(feature);
        return this._calcEval(input, feature);
    }

    _calcEval (input, feature) {
        const { palette, others } = this._getPalette();
        const paletteValues = this.palette.isA(_color_palettes_Palette__WEBPACK_IMPORTED_MODULE_6__["default"])
            ? palette.map((color) => color.eval(feature))
            : this.palette.eval(feature);

        if (input === _constants__WEBPACK_IMPORTED_MODULE_5__["OTHERS_INDEX"]) {
            return others.eval(feature);
        }

        const maxValues = paletteValues.length - 1;
        const min = Math.floor(input * maxValues);
        const max = Math.ceil(input * maxValues);
        const m = Object(_utils__WEBPACK_IMPORTED_MODULE_0__["fract"])(input * maxValues);

        return Object(_utils__WEBPACK_IMPORTED_MODULE_0__["mix"])(paletteValues[min], paletteValues[max], m);
    }

    getLegend (options) {
        const config = Object.assign({}, _constants__WEBPACK_IMPORTED_MODULE_5__["DEFAULT_OPTIONS"], options);
        const type = this.input.type;
        const legendData = this.input.getLegendData(config);
        const data = legendData.data.map(({key, value}) => {
            value = this._calcEval(value, undefined);
            return { key, value };
        });

        return { type, ...legendData, data };
    }

    _applyToShaderSource (getGLSLforProperty) {
        const input = this.input._applyToShaderSource(getGLSLforProperty);
        const { palette, others } = this._getPalette();
        const GLSLPalette = palette.map(color => color._applyToShaderSource(getGLSLforProperty));
        const GLSLOthers = others._applyToShaderSource(getGLSLforProperty);
        const GLSLBlend = this.palette.type === 'number-list'
            ? _getInlineGLSLBlend(GLSLPalette)
            : _getInlineColorGLSLBlend(GLSLPalette);

        const rampFnReturnType = this.palette.type === 'number-list' ? 'float' : 'vec4';
        const inline = `ramp_color${this._uid}(${input.inline})`;

        const preface = this._prefaceCode(`
            ${input.preface}
            ${_color_CIELab_glsl__WEBPACK_IMPORTED_MODULE_3___default.a}
            ${GLSLPalette.map(elem => elem.preface).join('\n')}
            ${GLSLOthers.preface}

            ${rampFnReturnType} ramp_color${this._uid}(float x){
                return x==${_constants__WEBPACK_IMPORTED_MODULE_5__["OTHERS_GLSL_VALUE"]}
                    ? ${GLSLOthers.inline}
                    : ${GLSLBlend};
            }`
        );

        return { preface, inline };
    }

    _getPalette () {
        return this.palette.isA(_color_palettes_Palette__WEBPACK_IMPORTED_MODULE_6__["default"])
            ? this._getColorPalette()
            : { palette: this.palette.elems, others: this.others };
    }

    _getColorPalette () {
        const subPalette = this.palette.getColors(this.input.numCategoriesWithoutOthers);

        return {
            palette: subPalette.colors,
            others: this._defaultOthers && subPalette.othersColor ? subPalette.othersColor : this.others
        };
    }
}

function _getInlineGLSLBlend (GLSLPalette) {
    return _generateGLSLBlend(GLSLPalette.map(elem => elem.inline));
}

function _getInlineColorGLSLBlend (GLSLPalette) {
    return `cielabToSRGBA(${_generateGLSLBlend(GLSLPalette.map(elem => `sRGBAToCieLAB(${elem.inline})`))})`;
}

function _generateGLSLBlend (list, index = 0) {
    const currentValue = list[index];

    if (index === list.length - 1) {
        return currentValue;
    }

    const nextBlend = _generateGLSLBlend(list, index + 1);

    return _mixClampGLSL(currentValue, nextBlend, index, list.length);
}

function _mixClampGLSL (currentValue, nextBlend, index, listLength) {
    const min = (index / (listLength - 1)).toFixed(20);
    const max = (1 / (listLength - 1)).toFixed(20);
    const clamp = `clamp((x - ${min})/${max}, 0., 1.)`;

    return `mix(${currentValue}, ${nextBlend}, ${clamp})`;
}


/***/ }),

/***/ "./src/renderer/viz/expressions/RampImage.js":
/*!***************************************************!*\
  !*** ./src/renderer/viz/expressions/RampImage.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return RampImage; });
/* harmony import */ var _defaultSVGs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../defaultSVGs */ "./src/renderer/viz/defaultSVGs.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils */ "./src/renderer/viz/expressions/utils.js");
/* harmony import */ var _basic_property__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./basic/property */ "./src/renderer/viz/expressions/basic/property.js");
/* harmony import */ var _CategoryIndex__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./CategoryIndex */ "./src/renderer/viz/expressions/CategoryIndex.js");
/* harmony import */ var _ListImage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ListImage */ "./src/renderer/viz/expressions/ListImage.js");
/* harmony import */ var _SVG__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./SVG */ "./src/renderer/viz/expressions/SVG.js");
/* harmony import */ var _base__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./base */ "./src/renderer/viz/expressions/base.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./constants */ "./src/renderer/viz/expressions/constants.js");









const DEFAULT_RAMP_OTHERS_IMAGE = new _SVG__WEBPACK_IMPORTED_MODULE_5__["default"](_defaultSVGs__WEBPACK_IMPORTED_MODULE_0__["default"].circle);
class RampImage extends _base__WEBPACK_IMPORTED_MODULE_6__["default"] {
    _bindMetadata (metadata) {
        _base__WEBPACK_IMPORTED_MODULE_6__["default"].prototype._bindMetadata.call(this, metadata);
        this.type = this.palette.childType;

        Object(_utils__WEBPACK_IMPORTED_MODULE_1__["checkType"])('ramp', 'input', 0, 'category', this.input);
        Object(_utils__WEBPACK_IMPORTED_MODULE_1__["checkInstance"])('ramp', 'palette', 1, _ListImage__WEBPACK_IMPORTED_MODULE_4__["default"], this.palette);

        if (this.others === _constants__WEBPACK_IMPORTED_MODULE_7__["DEFAULT_RAMP_OTHERS"]) {
            this.others = DEFAULT_RAMP_OTHERS_IMAGE;
        } else {
            Object(_utils__WEBPACK_IMPORTED_MODULE_1__["checkType"])('ramp', 'others', 2, 'image', this.others);
        }

        if (this.input.isA(_basic_property__WEBPACK_IMPORTED_MODULE_2__["default"])) {
            this.input = new _CategoryIndex__WEBPACK_IMPORTED_MODULE_3__["default"](this.input);
            this.input._bindMetadata(metadata);
        }

        this.others._bindMetadata(metadata);
        this.childrenNames.push('others');
    }

    eval (feature) {
        const index = this.input.eval(feature);
        return this._calcEval(index);
    }

    _calcEval (input) {
        const index = Math.round(input * (this.input.numCategoriesWithoutOthers - 1));
        const paletteValues = this.palette.eval();
        return paletteValues[index] || this.others.eval();
    }

    getLegend (options) {
        const config = Object.assign({}, _constants__WEBPACK_IMPORTED_MODULE_7__["DEFAULT_OPTIONS"], options);
        const type = this.input.type;
        const legendData = this.input.getLegendData(config);
        const data = legendData.data.map(({key, value}) => {
            value = this._calcEval(value);
            return { key, value };
        });

        return { type, ...legendData, data };
    }

    _applyToShaderSource (getGLSLforProperty) {
        const input = this.input._applyToShaderSource(getGLSLforProperty);
        const images = this.palette._applyToShaderSource(getGLSLforProperty);
        const others = this.others._applyToShaderSource(getGLSLforProperty);
        return {
            preface: this._prefaceCode(`
                uniform float rampImageMultiplier${this._uid};

                ${input.preface}
                ${images.preface}
                ${others.preface}

                vec4 rampImage${this._uid}(vec2 imageUV, float index){
                    if (index == ${_constants__WEBPACK_IMPORTED_MODULE_7__["OTHERS_GLSL_VALUE"]}){
                        return ${others.inline};
                    }
                    return ${images.inline}(imageUV, rampImageMultiplier${this._uid}*index);
                }
            `),
            inline: `rampImage${this._uid}(imageUV, ${input.inline})`
        };
    }

    _postShaderCompile (program, gl) {
        super._postShaderCompile(program, gl);
        this._getBinding(program)._multiplierLoc = gl.getUniformLocation(program, `rampImageMultiplier${this._uid}`);
    }

    _preDraw (program, drawMetadata, gl) {
        super._preDraw(program, drawMetadata, gl);
        gl.uniform1f(this._getBinding(program)._multiplierLoc, this.input.numCategoriesWithoutOthers - 1);
    }
}


/***/ }),

/***/ "./src/renderer/viz/expressions/SVG.js":
/*!*********************************************!*\
  !*** ./src/renderer/viz/expressions/SVG.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return SVG; });
/* harmony import */ var _Image__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Image */ "./src/renderer/viz/expressions/Image.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils */ "./src/renderer/viz/expressions/utils.js");



class SVG extends _Image__WEBPACK_IMPORTED_MODULE_0__["default"] {
    constructor (svg) {
        Object(_utils__WEBPACK_IMPORTED_MODULE_1__["checkMaxArguments"])(arguments, 1, 'svg');
        super(`data:image/svg+xml,${encodeURIComponent(svg)}`);
    }
}


/***/ }),

/***/ "./src/renderer/viz/expressions/Scaled.js":
/*!************************************************!*\
  !*** ./src/renderer/viz/expressions/Scaled.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Scaled; });
/* harmony import */ var _base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./base */ "./src/renderer/viz/expressions/base.js");
/* harmony import */ var _expressions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../expressions */ "./src/renderer/viz/expressions.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils */ "./src/renderer/viz/expressions/utils.js");




/**
 * Scale a width value to keep feature width constant in real space (meters).
 * This will change the width in pixels at different zoom levels to enforce the previous condition.
 *
 * @param {Number} width - pixel width at zoom level `zoomlevel`
 * @param {Number} [zoomlevel=0] - zoomlevel at which `width` is relative to
 * @return {Number}
 *
 * @example <caption>Keep feature width in meters constant with 25 pixels at zoom level 7.</caption>
 * const s = carto.expressions;
 * const viz = new carto.Viz({
 *   width: s.scaled(25, 7)
 * });
 *
 * @example <caption>Keep feature width in meters constant with 25 pixels at zoom level 7. (String)</caption>
 * const viz = new carto.Viz(`
 *   width: s.scaled(25, 7)
 * `);
 *
 * @memberof carto.expressions
 * @name scale
 * @function
 * @api
 */
class Scaled extends _base__WEBPACK_IMPORTED_MODULE_0__["default"] {
    constructor (width, zoomlevel = 0) {
        width = Object(_utils__WEBPACK_IMPORTED_MODULE_2__["implicitCast"])(width);
        zoomlevel = Object(_utils__WEBPACK_IMPORTED_MODULE_2__["implicitCast"])(zoomlevel);
        super({
            scale: Object(_expressions__WEBPACK_IMPORTED_MODULE_1__["div"])(Object(_expressions__WEBPACK_IMPORTED_MODULE_1__["mul"])(width, 0), Object(_expressions__WEBPACK_IMPORTED_MODULE_1__["pow"])(2, zoomlevel))
        });
        this.type = 'number';
        this.inlineMaker = inline => inline.scale;
    }
    eval () {
        return this.scale.eval();
    }
    _bindMetadata (metadata) {
        Object(_utils__WEBPACK_IMPORTED_MODULE_2__["checkType"])('scaled', 'width', 0, 'number', this.scale.a.a);
        Object(_utils__WEBPACK_IMPORTED_MODULE_2__["checkType"])('scaled', 'zoomlevel', 1, 'number', this.scale.b);
        super._bindMetadata(metadata);
    }
    _preDraw (program, drawMetadata, gl) {
        this.scale.a.b.expr = Math.pow(2, drawMetadata.zoomLevel);
        super._preDraw(program, drawMetadata, gl);
    }
}


/***/ }),

/***/ "./src/renderer/viz/expressions/Zoomrange.js":
/*!***************************************************!*\
  !*** ./src/renderer/viz/expressions/Zoomrange.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Zoomrange; });
/* harmony import */ var _base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./base */ "./src/renderer/viz/expressions/base.js");
/* harmony import */ var _expressions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../expressions */ "./src/renderer/viz/expressions.js");
/* harmony import */ var _errors_carto_validation_error__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../errors/carto-validation-error */ "./src/errors/carto-validation-error.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./utils */ "./src/renderer/viz/expressions/utils.js");





/**
 * Define a list of interpolated zoom ranges based on an input breakpoint list. Useful in combination with ramp (see examples).
 *
 * @param {Number[]} zoomBreakpointList - list of zoom breakpoints with at least two elements
 * @return {Number}
 *
 * @example <caption>Set the width to 1 at zoom levels < 7, set the width at 20 at zoom levels > 10, interpolate between 1 and 20 at zoom levels in the [7,10] range.</caption>
 * const s = carto.expressions;
 * const viz = new carto.Viz({
 *   width: s.ramp(s.zoomrange([7, 10]), [1, 20])
 * });
 *
 * @example <caption>Set the width to 1 at zoom levels < 7, set the width at 20 at zoom levels > 10, interpolate between 1 and 20 at zoom levels in the [7,10] range. (String)</caption>
 * const viz = new carto.Viz(`
 *   width: width: ramp(zoomrange([7, 10]), [1, 20])
 * `);
 *
 * @memberof carto.expressions
 * @name zoomrange
 * @function
 * @api
 */
class Zoomrange extends _base__WEBPACK_IMPORTED_MODULE_0__["default"] {
    constructor (zoomBreakpointList) {
        zoomBreakpointList = Object(_utils__WEBPACK_IMPORTED_MODULE_3__["implicitCast"])(zoomBreakpointList);

        super({});
        Object(_utils__WEBPACK_IMPORTED_MODULE_3__["checkExpression"])('zoomrange', 'zoomBreakpointList', 0, zoomBreakpointList);
        this.zoomBreakpointList = zoomBreakpointList;
        this.type = 'number';
        this.inlineMaker = inline => inline._impostor;
    }

    _bindMetadata (metadata) {
        this.zoomBreakpointList._bindMetadata(metadata);
        Object(_utils__WEBPACK_IMPORTED_MODULE_3__["checkType"])('zoomrange', 'zoomBreakpointList', 0, 'number-list', this.zoomBreakpointList);
        if (this.zoomBreakpointList.elems.length < 2) {
            throw new _errors_carto_validation_error__WEBPACK_IMPORTED_MODULE_2__["default"](`${_errors_carto_validation_error__WEBPACK_IMPORTED_MODULE_2__["CartoValidationTypes"].INCORRECT_VALUE} zoomrange() function must receive a list with at least two elements.`);
        }

        const breakpointListCopy = [...this.zoomBreakpointList.elems];

        this._impostor = _genImpostor(breakpointListCopy, 0, breakpointListCopy.length - 1);
        this.childrenNames.push('_impostor');
        super._bindMetadata(metadata);
    }

    eval (feature) {
        return this._impostor.eval(feature);
    }
}

function _genImpostor (list, numerator, denominator) {
    if (list.length === 1) {
        return 1;
    }

    const a = list[0];
    const b = list[1];
    list.shift();

    return Object(_expressions__WEBPACK_IMPORTED_MODULE_1__["blend"])(numerator / denominator,
        _genImpostor(list, numerator + 1, denominator),
        Object(_expressions__WEBPACK_IMPORTED_MODULE_1__["linear"])(Object(_expressions__WEBPACK_IMPORTED_MODULE_1__["pow"])(2, Object(_expressions__WEBPACK_IMPORTED_MODULE_1__["zoom"])()), Object(_expressions__WEBPACK_IMPORTED_MODULE_1__["pow"])(2, a), Object(_expressions__WEBPACK_IMPORTED_MODULE_1__["pow"])(2, b))
    );
}


/***/ }),

/***/ "./src/renderer/viz/expressions/aggregation/cluster/ClusterAggregation.js":
/*!********************************************************************************!*\
  !*** ./src/renderer/viz/expressions/aggregation/cluster/ClusterAggregation.js ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ClusterAggregation; });
/* harmony import */ var _base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../base */ "./src/renderer/viz/expressions/base.js");
/* harmony import */ var _basic_property__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../basic/property */ "./src/renderer/viz/expressions/basic/property.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils */ "./src/renderer/viz/expressions/utils.js");
/* harmony import */ var _schema__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../schema */ "./src/renderer/schema.js");





class ClusterAggregation extends _base__WEBPACK_IMPORTED_MODULE_0__["default"] {
    constructor ({ property, expressionName, aggName, aggType }) {
        Object(_utils__WEBPACK_IMPORTED_MODULE_2__["checkExpression"])(expressionName, 'property', 0, property);

        super({ property });
        this._aggName = aggName;
        this._expressionName = expressionName;
        this.type = aggType;
    }

    get name () {
        return this.property.name;
    }

    get aggName () {
        return this._aggName;
    }

    get numCategories () {
        return this.property.numCategories;
    }
    get categories () {
        return this.property.categories;
    }

    eval (feature) {
        return feature[_schema__WEBPACK_IMPORTED_MODULE_3__["column"].aggColumn(this.property.name, this._aggName)];
    }

    _bindMetadata (metadata) {
        super._bindMetadata(metadata);
        Object(_utils__WEBPACK_IMPORTED_MODULE_2__["checkInstance"])(this._expressionName, 'property', 0, _basic_property__WEBPACK_IMPORTED_MODULE_1__["default"], this.property);
        Object(_utils__WEBPACK_IMPORTED_MODULE_2__["checkType"])(this._expressionName, 'property', 0, this.type, this.property);
    }

    _resolveAliases () {}

    _applyToShaderSource (getGLSLforProperty) {
        return {
            preface: '',
            inline: `${getGLSLforProperty(_schema__WEBPACK_IMPORTED_MODULE_3__["column"].aggColumn(this.property.name, this._aggName))}`
        };
    }

    _postShaderCompile () {}

    _getMinimumNeededSchema () {
        return {
            [this.property.name]: [{
                type: 'aggregated',
                op: this._aggName
            }]
        };
    }
}


/***/ }),

/***/ "./src/renderer/viz/expressions/aggregation/cluster/ClusterAvg.js":
/*!************************************************************************!*\
  !*** ./src/renderer/viz/expressions/aggregation/cluster/ClusterAvg.js ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ClusterAvg; });
/* harmony import */ var _ClusterAggregation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ClusterAggregation */ "./src/renderer/viz/expressions/aggregation/cluster/ClusterAggregation.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils */ "./src/renderer/viz/expressions/utils.js");


/**
 * Aggregate using the average. This operation disables the access to the property
 * except within other cluster aggregate functions.
 *
 * Note: `clusterAvg` can only be created by {@link carto.expressions.prop|carto.expressions.prop}, not other expressions.
 *
 * @param {Number} property - Column of the table to be aggregated
 * @return {Number} Aggregated column
 *
 * @example <caption>Use cluster average of the population as width.</caption>
 * const s = carto.expressions;
 * const viz = new carto.Viz({
 *   width: s.clusterAvg(s.prop('population'))
 * });
 *
 * @example <caption>Use cluster average of the population as width. (String)</caption>
 * const viz = new carto.Viz(`
 *   width: clusterAvg($population)
 * `);
 *
 * @memberof carto.expressions
 * @name clusterAvg
 * @function
 * @api
 */
class ClusterAvg extends _ClusterAggregation__WEBPACK_IMPORTED_MODULE_0__["default"] {
    constructor (property) {
        Object(_utils__WEBPACK_IMPORTED_MODULE_1__["checkMaxArguments"])(arguments, 1, 'clusterAvg');
        super({ property, expressionName: 'clusterAvg', aggName: 'avg', aggType: 'number' });
    }
}


/***/ }),

/***/ "./src/renderer/viz/expressions/aggregation/cluster/ClusterCount.js":
/*!**************************************************************************!*\
  !*** ./src/renderer/viz/expressions/aggregation/cluster/ClusterCount.js ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ClusterCount; });
/* harmony import */ var _base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../base */ "./src/renderer/viz/expressions/base.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils */ "./src/renderer/viz/expressions/utils.js");
/* harmony import */ var _schema__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../schema */ "./src/renderer/schema.js");




/**
 * Count of features per cluster.
 *
 * Note: `clusterCount` has no input parameters and if data is not aggregated, it always returns 1
 *
 * @return {Number} Cluster feature count
 *
 * @example <caption>Use cluster count for width.</caption>
 * const s = carto.expressions;
 * const viz = new carto.Viz({
 *   width: s.clusterCount() / 50
 * });
 *
 * @example <caption>Use cluster count for width. (String)</caption>
 * const viz = new carto.Viz(`
 *   width: clusterCount() / 50
 * `);
 *
 * @memberof carto.expressions
 * @name clusterCount
 * @function
 * @api
 */
class ClusterCount extends _base__WEBPACK_IMPORTED_MODULE_0__["default"] {
    constructor () {
        Object(_utils__WEBPACK_IMPORTED_MODULE_1__["checkMaxArguments"])(arguments, 0, 'clusterCount');
        super({});
        this.type = 'number';
        this._hasClusterFeatureCount = false;
    }

    eval (feature) {
        return Number(feature[_schema__WEBPACK_IMPORTED_MODULE_2__["CLUSTER_FEATURE_COUNT"]]) || 1;
    }

    _bindMetadata (metadata) {
        super._bindMetadata(metadata);
        this._hasClusterFeatureCount = metadata.properties[_schema__WEBPACK_IMPORTED_MODULE_2__["CLUSTER_FEATURE_COUNT"]] !== undefined;
    }

    _applyToShaderSource (getGLSLforProperty) {
        return {
            preface: '',
            inline: this._hasClusterFeatureCount ? getGLSLforProperty(_schema__WEBPACK_IMPORTED_MODULE_2__["CLUSTER_FEATURE_COUNT"]) : '1.'
        };
    }
}


/***/ }),

/***/ "./src/renderer/viz/expressions/aggregation/cluster/ClusterMax.js":
/*!************************************************************************!*\
  !*** ./src/renderer/viz/expressions/aggregation/cluster/ClusterMax.js ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ClusterMax; });
/* harmony import */ var _ClusterAggregation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ClusterAggregation */ "./src/renderer/viz/expressions/aggregation/cluster/ClusterAggregation.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils */ "./src/renderer/viz/expressions/utils.js");



/**
 * Aggregate using the maximum. This operation disables the access to the property
 * except within other cluster aggregate functions.
 *
 * Note: `clusterMax` can only be created by {@link carto.expressions.prop|carto.expressions.prop}, not other expressions.
 *
 * @param {Number} property - Column of the table to be aggregated
 * @return {Number} Aggregated column
 *
 * @example <caption>Use cluster maximum of the population as width.</caption>
 * const s = carto.expressions;
 * const viz = new carto.Viz({
 *   width: s.clusterMax(s.prop('population'))
 * });
 *
 * @example <caption>Use cluster maximum of the population as width. (String)</caption>
 * const viz = new carto.Viz(`
 *   width: clusterMax($population)
 * `);
 *
 * @memberof carto.expressions
 * @name clusterMax
 * @function
 * @api
 */
class ClusterMax extends _ClusterAggregation__WEBPACK_IMPORTED_MODULE_0__["default"] {
    constructor (property) {
        Object(_utils__WEBPACK_IMPORTED_MODULE_1__["checkMaxArguments"])(arguments, 1, 'clusterMax');
        super({ property, expressionName: 'clusterMax', aggName: 'max', aggType: 'number' });
    }
}


/***/ }),

/***/ "./src/renderer/viz/expressions/aggregation/cluster/ClusterMin.js":
/*!************************************************************************!*\
  !*** ./src/renderer/viz/expressions/aggregation/cluster/ClusterMin.js ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ClusterMin; });
/* harmony import */ var _ClusterAggregation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ClusterAggregation */ "./src/renderer/viz/expressions/aggregation/cluster/ClusterAggregation.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils */ "./src/renderer/viz/expressions/utils.js");


/**
 * Aggregate using the minimum. This operation disables the access to the property
 * except within other cluster aggregate functions.
 *
 * Note: `clusterMin` can only be created by {@link carto.expressions.prop|carto.expressions.prop}, not other expressions.
 *
 * @param {Number} property - Column of the table to be aggregated
 * @return {Number} Aggregated column
 *
 * @example <caption>Use cluster minimum of the population as width.</caption>
 * const s = carto.expressions;
 * const viz = new carto.Viz({
 *   width: s.clusterMin(s.prop('population'))
 * });
 *
 * @example <caption>Use cluster minimum of the population as width. (String)</caption>
 * const viz = new carto.Viz(`
 *   width: clusterMin($population)
 * `);
 *
 * @memberof carto.expressions
 * @name clusterMin
 * @function
 * @api
 */
class ClusterMin extends _ClusterAggregation__WEBPACK_IMPORTED_MODULE_0__["default"] {
    constructor (property) {
        Object(_utils__WEBPACK_IMPORTED_MODULE_1__["checkMaxArguments"])(arguments, 1, 'clusterMin');
        super({ property, expressionName: 'clusterMin', aggName: 'min', aggType: 'number' });
    }
}


/***/ }),

/***/ "./src/renderer/viz/expressions/aggregation/cluster/ClusterMode.js":
/*!*************************************************************************!*\
  !*** ./src/renderer/viz/expressions/aggregation/cluster/ClusterMode.js ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ClusterMode; });
/* harmony import */ var _ClusterAggregation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ClusterAggregation */ "./src/renderer/viz/expressions/aggregation/cluster/ClusterAggregation.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils */ "./src/renderer/viz/expressions/utils.js");


/**
 * Aggregate using the mode. This operation disables the access to the property
 * except within other cluster aggregate functions.
 *
 * Note: `clusterMode` can only be created by {@link carto.expressions.prop|carto.expressions.prop}, not other expressions.
 *
 * @param {Category} property - Column of the table to be aggregated
 * @return {Category} Aggregated column
 *
 * @example <caption>Use cluster mode of the population in a color ramp.</caption>
 * const s = carto.expressions;
 * const viz = new carto.Viz({
 *   color: s.ramp(s.clusterMode(s.prop('category')), s.palettes.PRISM)
 * });
 *
 * @example <caption>Use cluster mode of the population in a color ramp. (String)</caption>
 * const viz = new carto.Viz(`
 *   color: ramp(clusterMode($category), PRISM)
 * `);
 *
 * @memberof carto.expressions
 * @name clusterMode
 * @function
 * @api
 */
class ClusterMode extends _ClusterAggregation__WEBPACK_IMPORTED_MODULE_0__["default"] {
    constructor (property) {
        Object(_utils__WEBPACK_IMPORTED_MODULE_1__["checkMaxArguments"])(arguments, 1, 'clusterMode');
        super({ property, expressionName: 'clusterMode', aggName: 'mode', aggType: 'category' });
    }
}


/***/ }),

/***/ "./src/renderer/viz/expressions/aggregation/cluster/ClusterSum.js":
/*!************************************************************************!*\
  !*** ./src/renderer/viz/expressions/aggregation/cluster/ClusterSum.js ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ClusterSum; });
/* harmony import */ var _ClusterAggregation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ClusterAggregation */ "./src/renderer/viz/expressions/aggregation/cluster/ClusterAggregation.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils */ "./src/renderer/viz/expressions/utils.js");


/**
 * Aggregate using the sum. This operation disables the access to the property
 * except within other cluster aggregate functions.
 *
 * Note: `clusterSum` can only be created by {@link carto.expressions.prop|carto.expressions.prop}, not other expressions.
 *
 * @param {Number} property - Column of the table to be aggregated
 * @return {Number} Aggregated column
 *
 * @example <caption>Use cluster sum of the population as width.</caption>
 * const s = carto.expressions;
 * const viz = new carto.Viz({
 *   width: s.clusterSum(s.prop('population'))
 * });
 *
 * @example <caption>Use cluster sum of the population as width. (String)</caption>
 * const viz = new carto.Viz(`
 *   width: clusterSum($population)
 * `);
 *
 * @memberof carto.expressions
 * @name clusterSum
 * @function
 * @api
 */
class ClusterSum extends _ClusterAggregation__WEBPACK_IMPORTED_MODULE_0__["default"] {
    constructor (property) {
        Object(_utils__WEBPACK_IMPORTED_MODULE_1__["checkMaxArguments"])(arguments, 1, 'clusterSum');
        super({ property, expressionName: 'clusterSum', aggName: 'sum', aggType: 'number' });
    }
}


/***/ }),

/***/ "./src/renderer/viz/expressions/aggregation/global/GlobalAggregation.js":
/*!******************************************************************************!*\
  !*** ./src/renderer/viz/expressions/aggregation/global/GlobalAggregation.js ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return GlobalAggregation; });
/* harmony import */ var _base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../base */ "./src/renderer/viz/expressions/base.js");
/* harmony import */ var _expressions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../expressions */ "./src/renderer/viz/expressions.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils */ "./src/renderer/viz/expressions/utils.js");
/* harmony import */ var _errors_carto_validation_error__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../errors/carto-validation-error */ "./src/errors/carto-validation-error.js");





class GlobalAggregation extends _base__WEBPACK_IMPORTED_MODULE_0__["default"] {
    /**
     * @param {*} property
     * @param {*} name
     */
    constructor ({ property, name, type }) {
        super({ _value: Object(_expressions__WEBPACK_IMPORTED_MODULE_1__["number"])(0) });
        this.property = Object(_utils__WEBPACK_IMPORTED_MODULE_2__["implicitCast"])(property);
        this._name = name;
        this.type = type;
        super.inlineMaker = inline => inline._value;
    }

    isFeatureDependent () {
        return false;
    }

    get value () {
        return this._value.expr;
    }

    eval () {
        return this._value.expr;
    }

    _bindMetadata (metadata) {
        super._bindMetadata(metadata);
        this.property._bindMetadata(metadata);
        // TODO improve type check
        if (metadata.properties[this.property.name][this._name] === undefined) {
            throw new _errors_carto_validation_error__WEBPACK_IMPORTED_MODULE_3__["default"](`${_errors_carto_validation_error__WEBPACK_IMPORTED_MODULE_3__["CartoValidationTypes"].MISSING_REQUIRED} Metadata ${this._name} for property ${this.property.name} is not defined`);
        }
        this._value.expr = metadata.properties[this.property.name][this._name];
    }

    _getMinimumNeededSchema () {
        return {
            [this.property.name]: []
        };
    }
}


/***/ }),

/***/ "./src/renderer/viz/expressions/aggregation/global/GlobalAvg.js":
/*!**********************************************************************!*\
  !*** ./src/renderer/viz/expressions/aggregation/global/GlobalAvg.js ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return GlobalAvg; });
/* harmony import */ var _GlobalAggregation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./GlobalAggregation */ "./src/renderer/viz/expressions/aggregation/global/GlobalAggregation.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils */ "./src/renderer/viz/expressions/utils.js");



/**
 * Return the average of the feature property for the entire source data.
 *
 * Note: `globalAvg` can only be created by {@link carto.expressions.prop|carto.expressions.prop}, not other expressions.
 *
 * @param {Number} property - property expression of number type
 * @return {Number} Result of the aggregation
 *
 * @example <caption>Assign the global average of the `amount` property to a variable.</caption>
 * const s = carto.expressions;
 * const viz = new carto.Viz({
 *   variables: {
 *      g_avg: s.globalAvg(s.prop('amount'))
 *   }
 * });
 *
 * @example <caption>Assign the global average of the `amount` property to a variable. (String)</caption>
 * const viz = new carto.Viz(`
 *   \@g_avg: globalAvg($amount)
 * `);
 *
 * @memberof carto.expressions
 * @name globalAvg
 * @function
 * @api
 */
class GlobalAvg extends _GlobalAggregation__WEBPACK_IMPORTED_MODULE_0__["default"] {
    constructor (property) {
        Object(_utils__WEBPACK_IMPORTED_MODULE_1__["checkMaxArguments"])(arguments, 1, 'globalAvg');

        super({ property, name: 'avg', type: 'number' });
    }
}


/***/ }),

/***/ "./src/renderer/viz/expressions/aggregation/global/GlobalCount.js":
/*!************************************************************************!*\
  !*** ./src/renderer/viz/expressions/aggregation/global/GlobalCount.js ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return GlobalCount; });
/* harmony import */ var _GlobalAggregation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./GlobalAggregation */ "./src/renderer/viz/expressions/aggregation/global/GlobalAggregation.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils */ "./src/renderer/viz/expressions/utils.js");



/**
 * Return the feature count for the entire source data.
 *
 * Note: `globalCount` can only be created by {@link carto.expressions.prop|carto.expressions.prop}, not other expressions.
 *
 * @param {Number} property - property expression
 * @return {Number} Result of the aggregation
 *
 * @example <caption>Assign the global count of the `amount` property to a variable.</caption>
 * const s = carto.expressions;
 * const viz = new carto.Viz({
 *   variables: {
 *      g_count: s.globalCount(s.prop('amount'))
 *   }
 * });
 *
 * @example <caption>Assign the global count of the `amount` property to a variable. (String)</caption>
 * const viz = new carto.Viz(`
 *   \@g_count: globalCount($amount)
 * `);
 *
 * @memberof carto.expressions
 * @name globalCount
 * @function
 * @api
 */
class GlobalCount extends _GlobalAggregation__WEBPACK_IMPORTED_MODULE_0__["default"] {
    constructor (property) {
        Object(_utils__WEBPACK_IMPORTED_MODULE_1__["checkMaxArguments"])(arguments, 1, 'globalCount');

        super({ property, name: 'count', type: 'number' });
    }
}


/***/ }),

/***/ "./src/renderer/viz/expressions/aggregation/global/GlobalMax.js":
/*!**********************************************************************!*\
  !*** ./src/renderer/viz/expressions/aggregation/global/GlobalMax.js ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return GlobalMax; });
/* harmony import */ var _GlobalAggregation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./GlobalAggregation */ "./src/renderer/viz/expressions/aggregation/global/GlobalAggregation.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils */ "./src/renderer/viz/expressions/utils.js");


/**
 * Return the maximum of the feature property for the entire source data.
 *
 * Note: `globalMax` can only be created by {@link carto.expressions.prop|carto.expressions.prop}, not other expressions.
 *
 * @param {Number|Date} property - property expression of date or number type
 * @return {Number|Date} Result of the aggregation
 *
 * @example <caption>Assign the global maximum of the `amount` property to a variable.</caption>
 * const s = carto.expressions;
 * const viz = new carto.Viz({
 *   variables: {
 *      g_max: s.globalMax(s.prop('amount'))
 *   }
 * });
 *
 * @example <caption>Assign the global maximum of the `amount` property to a variable. (String)</caption>
 * const viz = new carto.Viz(`
 *   \@g_max: globalMax($amount)
 * `);
 *
 * @memberof carto.expressions
 * @name globalMax
 * @function
 * @api
 */
class GlobalMax extends _GlobalAggregation__WEBPACK_IMPORTED_MODULE_0__["default"] {
    constructor (property) {
        Object(_utils__WEBPACK_IMPORTED_MODULE_1__["checkMaxArguments"])(arguments, 1, 'globalMax');

        super({ property, name: 'max', type: 'number' });
    }
}


/***/ }),

/***/ "./src/renderer/viz/expressions/aggregation/global/GlobalMin.js":
/*!**********************************************************************!*\
  !*** ./src/renderer/viz/expressions/aggregation/global/GlobalMin.js ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return GlobalMin; });
/* harmony import */ var _GlobalAggregation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./GlobalAggregation */ "./src/renderer/viz/expressions/aggregation/global/GlobalAggregation.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils */ "./src/renderer/viz/expressions/utils.js");


/**
 * Return the minimum of the feature property for the entire source data.
 *
 * Note: `globalMin` can only be created by {@link carto.expressions.prop|carto.expressions.prop}, not other expressions.
 *
 * @param {Number|Date} property - property expression of date or number type
 * @return {Number|Date} Result of the aggregation
 *
 * @example <caption>Assign the global minimum of the `amount` property to a variable.</caption>
 * const s = carto.expressions;
 * const viz = new carto.Viz({
 *   variables: {
 *      g_min: s.globalMin(s.prop('amount'))
 *   }
 * });
 *
 * @example <caption>Assign the global minimum of the `amount` property to a variable. (String)</caption>
 * const viz = new carto.Viz(`
 *   \@g_min: globalMin($amount)
 * `);
 *
 * @memberof carto.expressions
 * @name globalMin
 * @function
 * @api
 */
class GlobalMin extends _GlobalAggregation__WEBPACK_IMPORTED_MODULE_0__["default"] {
    constructor (property) {
        Object(_utils__WEBPACK_IMPORTED_MODULE_1__["checkMaxArguments"])(arguments, 1, 'globalMin');

        super({ property, name: 'min', type: 'number' });
    }
}


/***/ }),

/***/ "./src/renderer/viz/expressions/aggregation/global/GlobalPercentile.js":
/*!*****************************************************************************!*\
  !*** ./src/renderer/viz/expressions/aggregation/global/GlobalPercentile.js ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return GlobalPercentile; });
/* harmony import */ var _base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../base */ "./src/renderer/viz/expressions/base.js");
/* harmony import */ var _expressions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../expressions */ "./src/renderer/viz/expressions.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils */ "./src/renderer/viz/expressions/utils.js");
/* harmony import */ var _errors_carto_validation_error__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../errors/carto-validation-error */ "./src/errors/carto-validation-error.js");




/**
 * Return the Nth percentile of an numeric property for the entire source data.
 *
 * @param {Number} property - numeric property
 * @param {Number} percentile - Numeric expression in the [0, 100] range
 * @return {Number} Result of the aggregation
 *
 * @example <caption>Assign the 90th percentile of the `amount` property for the entire dataset to a variable.</caption>
 * const s = carto.expressions;
 * const viz = new carto.Viz({
 *   variables: {
 *      v_percentile: s.globalPercentile(s.prop('amount'), 90)
 *   }
 * });
 *
 * @example <caption>Assign the 90th percentile of the `amount` property for the entire dataset to a variable. (String)</caption>
 * const viz = new carto.Viz(`
 *   \@v_percentile: globalPercentile($amount, 90)
 * `);
 *
 * @memberof carto.expressions
 * @name globalPercentile
 * @function
 * @api
 */
class GlobalPercentile extends _base__WEBPACK_IMPORTED_MODULE_0__["default"] {
    constructor (property, percentile) {
        Object(_utils__WEBPACK_IMPORTED_MODULE_2__["checkMaxArguments"])(arguments, 2, 'globalPercentile');

        if (!Number.isFinite(percentile)) {
            throw new _errors_carto_validation_error__WEBPACK_IMPORTED_MODULE_3__["default"](`${_errors_carto_validation_error__WEBPACK_IMPORTED_MODULE_3__["CartoValidationTypes"].INCORRECT_TYPE} 'percentile' must be a fixed literal number`);
        }
        super({ _value: Object(_expressions__WEBPACK_IMPORTED_MODULE_1__["number"])(0) });
        // TODO improve type check
        this.property = property;
        this.percentile = percentile;
    }

    isFeatureDependent () {
        return false;
    }

    get value () {
        return this._value.expr;
    }

    _bindMetadata (metadata) {
        super._bindMetadata(metadata);
        this.property._bindMetadata(metadata);
        this.type = 'number';
        super.inlineMaker = inline => inline._value;
        const copy = metadata.sample.map(s => s[this.property.name]);
        copy.sort((x, y) => x - y);
        const p = this.percentile / 100;
        this._value.expr = copy[Math.floor(p * copy.length)];
    }

    _getMinimumNeededSchema () {
        return this.property._getMinimumNeededSchema();
    }
}


/***/ }),

/***/ "./src/renderer/viz/expressions/aggregation/global/GlobalSum.js":
/*!**********************************************************************!*\
  !*** ./src/renderer/viz/expressions/aggregation/global/GlobalSum.js ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return GlobalSum; });
/* harmony import */ var _GlobalAggregation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./GlobalAggregation */ "./src/renderer/viz/expressions/aggregation/global/GlobalAggregation.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils */ "./src/renderer/viz/expressions/utils.js");



/**
 * Return the sum of the feature property for the entire source data.
 *
 * Note: `globalSum` can only be created by {@link carto.expressions.prop|carto.expressions.prop}, not other expressions.
 *
 * @param {Number} property - property expression of number type
 * @return {Number} Result of the aggregation
 *
 * @example <caption>Assign the global sum of the `amount` property to a variable.</caption>
 * const s = carto.expressions;
 * const viz = new carto.Viz({
 *   variables: {
 *      g_sum: s.globalSum(s.prop('amount'))
 *   }
 * });
 *
 * @example <caption>Assign the global sum of the `amount` property to a variable. (String)</caption>
 * const viz = new carto.Viz(`
 *   \@g_sum: globalSum($amount)
 * `);
 *
 * @memberof carto.expressions
 * @name globalSum
 * @function
 * @api
 */
class GlobalSum extends _GlobalAggregation__WEBPACK_IMPORTED_MODULE_0__["default"] {
    constructor (property) {
        Object(_utils__WEBPACK_IMPORTED_MODULE_1__["checkMaxArguments"])(arguments, 1, 'globalSum');

        super({ property, name: 'sum' });
    }
}


/***/ }),

/***/ "./src/renderer/viz/expressions/aggregation/viewport/ViewportAggregation.js":
/*!**********************************************************************************!*\
  !*** ./src/renderer/viz/expressions/aggregation/viewport/ViewportAggregation.js ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ViewportAggregation; });
/* harmony import */ var _base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../base */ "./src/renderer/viz/expressions/base.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils */ "./src/renderer/viz/expressions/utils.js");
/* harmony import */ var _expressions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../expressions */ "./src/renderer/viz/expressions.js");




class ViewportAggregation extends _base__WEBPACK_IMPORTED_MODULE_0__["default"] {
    /**
     * @param {*} property
     */
    constructor ({ property }) {
        super({ property: Object(_utils__WEBPACK_IMPORTED_MODULE_1__["implicitCast"])(property), _impostor: Object(_expressions__WEBPACK_IMPORTED_MODULE_2__["number"])(0) });
        this._isViewport = true;
        this.type = 'number';
        this.inlineMaker = inline => inline._impostor;
    }

    isFeatureDependent () {
        return false;
    }

    _bindMetadata (metadata) {
        // TODO improve type check
        super._bindMetadata(metadata);
    }

    _getMinimumNeededSchema () {
        return this.property._getMinimumNeededSchema();
    }

    _preDraw (...args) {
        this._impostor.expr = this.eval();
        super._preDraw(...args);
    }
}


/***/ }),

/***/ "./src/renderer/viz/expressions/aggregation/viewport/ViewportAvg.js":
/*!**************************************************************************!*\
  !*** ./src/renderer/viz/expressions/aggregation/viewport/ViewportAvg.js ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ViewportAvg; });
/* harmony import */ var _ViewportAggregation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ViewportAggregation */ "./src/renderer/viz/expressions/aggregation/viewport/ViewportAggregation.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils */ "./src/renderer/viz/expressions/utils.js");



/**
 * Return the average value of an expression for the features showed in the viewport (features outside the viewport and features that don't pass the filter will be excluded).
 *
 * @param {Number} input - numeric expression
 * @return {Number} Result of the aggregation
 *
 * @example <caption>Assign the average of the `amount` property in the viewport to a variable.</caption>
 * const s = carto.expressions;
 * const viz = new carto.Viz({
 *   variables: {
 *      v_avg: s.viewportAvg(s.prop('amount'))
 *   }
 * });
 *
 * @example <caption>Assign the average of the `amount` property in the viewport to a variable. (String)</caption>
 * const viz = new carto.Viz(`
 *   \@v_avg: viewportAvg($amount)
 * `);
 *
 * @memberof carto.expressions
 * @name viewportAvg
 * @function
 * @api
 */
class ViewportAvg extends _ViewportAggregation__WEBPACK_IMPORTED_MODULE_0__["default"] {
    constructor (property) {
        Object(_utils__WEBPACK_IMPORTED_MODULE_1__["checkMaxArguments"])(arguments, 1, 'viewportAvg');

        super({ property });
        this._sum = 0;
        this._count = 0;
    }

    get value () {
        return this._sum / this._count;
    }

    eval () {
        return this.value;
    }

    accumViewportAgg (feature) {
        const propertyValue = this.property.eval(feature);

        if (!Number.isNaN(propertyValue)) {
            this._count++;
            this._sum += propertyValue;
        }
    }

    _resetViewportAgg () {
        this._sum = 0;
        this._count = 0;
    }
}


/***/ }),

/***/ "./src/renderer/viz/expressions/aggregation/viewport/ViewportCount.js":
/*!****************************************************************************!*\
  !*** ./src/renderer/viz/expressions/aggregation/viewport/ViewportCount.js ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ViewportCount; });
/* harmony import */ var _ViewportAggregation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ViewportAggregation */ "./src/renderer/viz/expressions/aggregation/viewport/ViewportAggregation.js");
/* harmony import */ var _expressions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../expressions */ "./src/renderer/viz/expressions.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils */ "./src/renderer/viz/expressions/utils.js");




/**
 * Return the feature count of the features showed in the viewport (features outside the viewport and features that don't pass the filter will be excluded).
 *
 * @param {Number} input - numeric expression
 * @return {Number} Result of the aggregation
 *
 * @example <caption>Assign the feature count in the viewport to a variable.</caption>
 * const s = carto.expressions;
 * const viz = new carto.Viz({
 *   variables: {
 *      v_count: s.viewportCount(s.prop('amount'))
 *   }
 * });
 *
 * @example <caption>Assign the feature count in the viewport to a variable. (String)</caption>
 * const viz = new carto.Viz(`
 *   \@v_count: viewportCount($amount)
 * `);
 *
 * @memberof carto.expressions
 * @name viewportCount
 * @function
 * @api
 */
class ViewportCount extends _ViewportAggregation__WEBPACK_IMPORTED_MODULE_0__["default"] {
    constructor () {
        Object(_utils__WEBPACK_IMPORTED_MODULE_2__["checkMaxArguments"])(arguments, 1, 'viewportCount');

        super({ property: Object(_expressions__WEBPACK_IMPORTED_MODULE_1__["number"])(0) });
        this._value = 0;
    }

    get value () {
        return this._value;
    }

    eval () {
        return this.value;
    }

    accumViewportAgg () {
        this._value++;
    }

    _resetViewportAgg () {
        this._value = 0;
    }
}


/***/ }),

/***/ "./src/renderer/viz/expressions/aggregation/viewport/ViewportHistogram.js":
/*!********************************************************************************!*\
  !*** ./src/renderer/viz/expressions/aggregation/viewport/ViewportHistogram.js ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ViewportHistogram; });
/* harmony import */ var _base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../base */ "./src/renderer/viz/expressions/base.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils */ "./src/renderer/viz/expressions/utils.js");




/**
 * Generates an histogram.
 *
 * The histogram can be based on a categorical expression, in which case each category will correspond to a histogram bar.
 * The histogram can be based on a numeric expression, in which case the minimum and maximum will be computed automatically and bars will be generated
 * at regular intervals between the minimum and maximum. The number of bars in this case is controllable through the `size` parameter.
 *
 * Histograms are useful to get insights and create widgets outside the scope of CARTO VL, see the following example for more info.
 *
 * @param {Number} input - expression to base the histogram
 * @param {Number} weight - Weight each occurrence differently based on this weight, defaults to `1`, which will generate a simple, non-weighted count.
 * @param {Number} size - Optional (defaults to 1000). Number of bars to use if `x` is a numeric expression
 * @return {Histogram} Histogram
 *
 * @example <caption>Create and use an histogram. (String)</caption>
 * const s = carto.expressions;
 * const viz = new carto.Viz(`
 *          \@categoryHistogram: viewportHistogram($type)
 *          \@numericHistogram:  viewportHistogram($amount, 1, 3)
 * `);
 * ...
 * console.log(viz.variables.categoryHistogram.eval());
 * // [{x: 'typeA', y: 10}, {x: 'typeB', y: 20}]
 * // There are 10 features of type A and 20 of type B
 *
 * console.log(viz.variables.numericHistogram.eval());
 * // [{x: [0,10],  y: 20}, {x: [10,20],  y: 7}, {x: [20, 30], y: 3}]
 * // There are 20 features with an amount between 0 and 10, 7 features with an amount between 10 and 20, and 3 features with an amount between 20 and 30
 *
 * @memberof carto.expressions
 * @name ViewportHistogram
 * @function
 * @api
 */
class ViewportHistogram extends _base__WEBPACK_IMPORTED_MODULE_0__["default"] {
    constructor (x, weight = 1, size = 1000) {
        Object(_utils__WEBPACK_IMPORTED_MODULE_1__["checkMaxArguments"])(arguments, 3, 'viewportHistogram');

        super({ x: Object(_utils__WEBPACK_IMPORTED_MODULE_1__["implicitCast"])(x), weight: Object(_utils__WEBPACK_IMPORTED_MODULE_1__["implicitCast"])(weight) });

        this.type = 'histogram';
        this._size = size;
        this._isViewport = true;
        this.inlineMaker = () => null;
    }

    accumViewportAgg (feature) {
        const x = this.x.eval(feature);

        if (x !== undefined) {
            const weight = this.weight.eval(feature);
            const count = this._histogram.get(x) || 0;
            this._histogram.set(x, count + weight);
        }
    }

    get value () {
        if (this._cached === null) {
            if (!this._histogram) {
                return null;
            }

            this._cached = this.x.type === 'number'
                ? _getNumericValue(this._histogram, this._size)
                : _getCategoryValue(this._histogram);

            return this._cached;
        }

        return this._cached;
    }

    eval () {
        return this.value;
    }

    _bindMetadata (metadata) {
        super._bindMetadata(metadata);
        this._metadata = metadata;
    }

    _resetViewportAgg (metadata) {
        if (metadata) {
            this._bindMetadata(metadata);
        }
        this._cached = null;
        this._histogram = new Map();
    }
}

function _getNumericValue (histogram, size) {
    const array = [...histogram];
    const arrayLength = array.length;
    let min = Number.POSITIVE_INFINITY;
    let max = Number.NEGATIVE_INFINITY;

    for (let i = 0; i < arrayLength; i++) {
        const x = array[i][0];
        min = Math.min(min, x);
        max = Math.max(max, x);
    }

    const hist = Array(size).fill(0);
    const range = max - min;
    const sizeMinusOne = size - 1;

    for (let i = 0; i < arrayLength; i++) {
        const x = array[i][0];
        const y = array[i][1];
        const index = Math.min(Math.floor(size * (x - min) / range), sizeMinusOne);
        hist[index] += y;
    }

    return hist.map((count, index) => {
        return {
            x: [min + index / size * range, min + (index + 1) / size * range],
            y: count
        };
    });
}

function _getCategoryValue (histogram) {
    return [...histogram]
        .map(([x, y]) => {
            return { x, y };
        })
        .sort(_sortFirstNumerically);
}

function _sortFirstNumerically (a, b) {
    if (b.y - a.y === 0) {
        return a.x.localeCompare(b.x);
    }

    return b.y - a.y;
}


/***/ }),

/***/ "./src/renderer/viz/expressions/aggregation/viewport/ViewportMax.js":
/*!**************************************************************************!*\
  !*** ./src/renderer/viz/expressions/aggregation/viewport/ViewportMax.js ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ViewportMax; });
/* harmony import */ var _ViewportAggregation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ViewportAggregation */ "./src/renderer/viz/expressions/aggregation/viewport/ViewportAggregation.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils */ "./src/renderer/viz/expressions/utils.js");


/**
 * Return the maximum value of an expression for the features showed in the viewport (features outside the viewport and features that don't pass the filter will be excluded).
 *
 * @param {Number} input - numeric expression
 * @return {Number} Result of the aggregation
 *
 * @example <caption>Assign the maximum of the `amount` property in the viewport to a variable.</caption>
 * const s = carto.expressions;
 * const viz = new carto.Viz({
 *   variables: {
 *      v_max: s.viewportMax(s.prop('amount'))
 *   }
 * });
 *
 * @example <caption>Assign the maximum of the `amount` property in the viewport to a variable. (String)</caption>
 * const viz = new carto.Viz(`
 *   \@v_max: viewportMax($amount)
 * `);
 *
 * @memberof carto.expressions
 * @name viewportMax
 * @function
 * @api
 */
class ViewportMax extends _ViewportAggregation__WEBPACK_IMPORTED_MODULE_0__["default"] {
    constructor (property) {
        Object(_utils__WEBPACK_IMPORTED_MODULE_1__["checkMaxArguments"])(arguments, 1, 'viewportMax');
        super({ property });
        this._value = Number.NEGATIVE_INFINITY;
    }

    get value () {
        return this._value;
    }

    eval () {
        return this.value;
    }

    accumViewportAgg (feature) {
        const propertyValue = this.property.eval(feature);

        if (!Number.isNaN(propertyValue)) {
            this._value = Math.max(this._value, propertyValue);
        }
    }

    _resetViewportAgg () {
        this._value = Number.NEGATIVE_INFINITY;
    }
}


/***/ }),

/***/ "./src/renderer/viz/expressions/aggregation/viewport/ViewportMin.js":
/*!**************************************************************************!*\
  !*** ./src/renderer/viz/expressions/aggregation/viewport/ViewportMin.js ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ViewportMin; });
/* harmony import */ var _ViewportAggregation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ViewportAggregation */ "./src/renderer/viz/expressions/aggregation/viewport/ViewportAggregation.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils */ "./src/renderer/viz/expressions/utils.js");



/**
 * Return the minimum value of an expression for the features showed in the viewport (features outside the viewport and features that don't pass the filter will be excluded).
 *
 * @param {Number} input - numeric expression
 * @return {Number} Result of the aggregation
 *
 * @example <caption>Assign the minimum of the `amount` property in the viewport to a variable.</caption>
 * const s = carto.expressions;
 * const viz = new carto.Viz({
 *   variables: {
 *      v_min: s.viewportMin(s.prop('amount'))
 *   }
 * });
 *
 * @example <caption>Assign the minimum of the `amount` property in the viewport to a variable. (String)</caption>
 * const viz = new carto.Viz(`
 *   \@v_min: viewportMin($amount)
 * `);
 *
 * @memberof carto.expressions
 * @name viewportMin
 * @function
 * @api
 */
class ViewportMin extends _ViewportAggregation__WEBPACK_IMPORTED_MODULE_0__["default"] {
    constructor (property) {
        Object(_utils__WEBPACK_IMPORTED_MODULE_1__["checkMaxArguments"])(arguments, 1, 'viewportMin');

        super({ property });
        this._value = Number.POSITIVE_INFINITY;
    }

    get value () {
        return this._value;
    }

    eval () {
        return this.value;
    }

    accumViewportAgg (feature) {
        const propertyValue = this.property.eval(feature);

        if (!Number.isNaN(propertyValue)) {
            this._value = Math.min(this._value, propertyValue);
        }
    }

    _resetViewportAgg () {
        this._value = Number.POSITIVE_INFINITY;
    }
}


/***/ }),

/***/ "./src/renderer/viz/expressions/aggregation/viewport/ViewportPercentile.js":
/*!*********************************************************************************!*\
  !*** ./src/renderer/viz/expressions/aggregation/viewport/ViewportPercentile.js ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ViewportPercentile; });
/* harmony import */ var _ViewportAggregation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ViewportAggregation */ "./src/renderer/viz/expressions/aggregation/viewport/ViewportAggregation.js");
/* harmony import */ var _expressions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../expressions */ "./src/renderer/viz/expressions.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils */ "./src/renderer/viz/expressions/utils.js");



/**
 * Return the Nth percentile of an expression for the features showed in the viewport (features outside the viewport and features that don't pass the filter will be excluded).
 *
 * @param {Number} input - Numeric expression
 * @param {Number} percentile - Numeric expression [0, 100]
 * @return {Number} Result of the aggregation
 *
 * @example <caption>Assign the percentile of the `amount` property in the viewport to a variable.</caption>
 * const s = carto.expressions;
 * const viz = new carto.Viz({
 *   variables: {
 *      v_percentile: s.viewportPercentile(s.prop('amount'), 90)
 *   }
 * });
 *
 * @example <caption>Assign the percentile of the `amount` property in the viewport to a variable. (String)</caption>
 * const viz = new carto.Viz(`
 *   \@v_percentile: viewportPercentile($amount, 90)
 * `);
 *
 * @memberof carto.expressions
 * @name viewportPercentile
 * @function
 * @api
 */
class ViewportPercentile extends _ViewportAggregation__WEBPACK_IMPORTED_MODULE_0__["default"] {
    /**
     * @param {*} property
     * @param {*} percentile
     */
    constructor (property, percentile) {
        Object(_utils__WEBPACK_IMPORTED_MODULE_2__["checkMaxArguments"])(arguments, 2, 'viewportPercentile');

        super({ property, _impostor: Object(_expressions__WEBPACK_IMPORTED_MODULE_1__["number"])(0) });

        this._isViewport = true;
        this.percentile = Object(_utils__WEBPACK_IMPORTED_MODULE_2__["implicitCast"])(percentile);
        this.type = 'number';
        super.inlineMaker = inline => inline.impostor;
    }

    get value () {
        return this.eval();
    }

    eval (feature) {
        if (this._value === null) {
            const percentile = _getPercentile(this.percentile.eval(feature), this._array.length);
            const index = Object(_utils__WEBPACK_IMPORTED_MODULE_2__["clamp"])(percentile, 0, this._array.length - 1);

            this._array.sort((a, b) => a - b);
            this._value = this._array[index];
        }

        return this._value;
    }

    _getMinimumNeededSchema () {
        return this.property._getMinimumNeededSchema();
    }

    _resetViewportAgg () {
        this._value = null;
        this._array = [];
    }

    accumViewportAgg (feature) {
        const v = this.property.eval(feature);
        this._array.push(v);
    }

    _preDraw (...args) {
        this.impostor.expr = this.eval();
        super._preDraw(...args);
    }
}

function _getPercentile (value, length) {
    return Math.floor(value / 100 * length);
}


/***/ }),

/***/ "./src/renderer/viz/expressions/aggregation/viewport/ViewportSum.js":
/*!**************************************************************************!*\
  !*** ./src/renderer/viz/expressions/aggregation/viewport/ViewportSum.js ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ViewportSum; });
/* harmony import */ var _ViewportAggregation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ViewportAggregation */ "./src/renderer/viz/expressions/aggregation/viewport/ViewportAggregation.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils */ "./src/renderer/viz/expressions/utils.js");



/**
 * Return the sum of an expression for the features showed in the viewport (features outside the viewport and features that don't pass the filter will be excluded).
 *
 * @param {Number} input - numeric expression
 * @return {Number} Result of the aggregation
 *
 * @example <caption>Assign the sum of the `amount` property in the viewport to a variable.</caption>
 * const s = carto.expressions;
 * const viz = new carto.Viz({
 *   variables: {
 *      v_sum: s.viewportSum(s.prop('amount'))
 *   }
 * });
 *
 * @example <caption>Assign the sum of the `amount` property in the viewport to a variable. (String)</caption>
 * const viz = new carto.Viz(`
 *   \@v_sum: viewportSum($amount)
 * `);
 *
 * @memberof carto.expressions
 * @name viewportSum
 * @function
 * @api
 */
class ViewportSum extends _ViewportAggregation__WEBPACK_IMPORTED_MODULE_0__["default"] {
    constructor (property) {
        Object(_utils__WEBPACK_IMPORTED_MODULE_1__["checkMaxArguments"])(arguments, 1, 'viewportSum');

        super({ property });
        this._value = 0;
    }

    get value () {
        return this._value;
    }

    eval () {
        return this.value;
    }

    accumViewportAgg (feature) {
        const propertyValue = this.property.eval(feature);

        if (!Number.isNaN(propertyValue)) {
            this._value = this._value + propertyValue;
        }
    }

    _resetViewportAgg () {
        this._value = 0;
    }
}


/***/ }),

/***/ "./src/renderer/viz/expressions/base.js":
/*!**********************************************!*\
  !*** ./src/renderer/viz/expressions/base.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Base; });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ "./src/renderer/viz/expressions/utils.js");
/* harmony import */ var _expressions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../expressions */ "./src/renderer/viz/expressions.js");
/* harmony import */ var _schema__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../schema */ "./src/renderer/schema.js");
/* harmony import */ var _errors_carto_validation_error__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../errors/carto-validation-error */ "./src/errors/carto-validation-error.js");
/* harmony import */ var _errors_carto_runtime_error__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../errors/carto-runtime-error */ "./src/errors/carto-runtime-error.js");






/**
 * Abstract expression class
 *
 * All expressions listed in  {@link carto.expressions} inherit from this class so any of them
 * can be used where an Expression is required as long as the types match.
 *
 * This means that you can't use a numeric expression where a color expression is expected.
 *
 * @memberof carto.expressions
 * @name Base
 * @abstract
 * @hideconstructor
 * @class
 * @api
 */
class Base {
    /**
     * @hideconstructor
     * @param {*} children
     * @param {*} inlineMaker
     * @param {*} preface
     */
    constructor (children) {
        this._initializeChildren(children);
        this._addParentToChildren();
        this.preface = '';
        this._shaderBindings = new Map();
        this.expressionName = _toCamelCase(this.constructor.name);
    }

    /**
     * Evaluate the expression providing a feature.
     * This is particularly useful for making legends.
     *
     * @api
     * @memberof carto.expressions.Base
     * @param {object} feature
     * @returns {*} result - result of evaluating the expression for the input feature
     *
     * @example
     * const viz = new carto.Viz(`
     *      color: red
     *      width: sqrt($amount)
     * `);
     *
     * const r = viz.width.eval({
     *      amount: 16
     * });
     *
     * // `r` value is `4`
     *
     * @example
     * const viz = new carto.Viz(`
     *      color: ramp(linear($amount), Emrld)
     * `);
     *
     * const color = viz.color.eval({
     *      amount: 123
     * });
     *
     * // `color` will have the same color as the features with an amount of 123
     *
     */
    eval (feature) {
        throw new _errors_carto_runtime_error__WEBPACK_IMPORTED_MODULE_4__["default"]('Unimplemented');
    }

    /**
     * Get the expression stringified
     *
     * @api
     * @memberof carto.expressions.Base
     * @returns {string}
     *
     * @example <caption>Get the stringified expression of the viz color property.</caption>
     * const s = carto.expressions;
     * const viz = new carto.Viz({
     *   color: s.ramp(s.linear('amount'), s.palettes.PRISM)
     * });
     * console.log(viz.color.toString());
     * // logs: "ramp(linear($amount), Prism)"
     *
     * @example <caption>Get the stringified expression of the viz color property. (String)</caption>
     * const viz = new carto.Viz(`
     *   color: ramp(linear($amount), Prism)
     * `);
     *
     * console.log(viz.color.toString());
     * // logs: "ramp(linear($amount), Prism)"
     *
     */
    toString () {
        return `${this.expressionName}(${this._getChildren().map(child => child.toString()).join(', ')})`;
    }

    /**
     * @api
     * @memberof carto.expressions.Base
     * @returns true if the evaluation of the expression may change without external action.
     */
    isAnimated () {
        return this._getChildren().some(child => child.isAnimated());
    }

    /**
     * Linear interpolation between this and finalValue with the specified duration
     * @api
     * @param {Expression|string} final - Viz Expression or string to parse for a Viz expression
     * @param {Expression} duration - duration of the transition in milliseconds
     * @param {Expression} blendFunc
     * @memberof carto.expressions.Base
     * @instance
     * @name blendTo
     */
    blendTo (final, duration = 500) {
        // The parsing of the string (if any) is monkey patched at parser.js to avoid a circular dependency
        final = Object(_utils__WEBPACK_IMPORTED_MODULE_0__["implicitCast"])(final);
        const parent = this.parent;
        const blender = Object(_expressions__WEBPACK_IMPORTED_MODULE_1__["blend"])(this, final, Object(_expressions__WEBPACK_IMPORTED_MODULE_1__["transition"])(duration));
        parent.replaceChild(this, blender);
        blender.notify();
        return final;
    }

    isA (expressionClass) {
        return this instanceof expressionClass;
    }

    notify () {
        this.parent.notify();
    }

    accumViewportAgg (feature) {
        this._getChildren().forEach(child => child.accumViewportAgg(feature));
    }

    loadImages () {
        return Promise.all(this._getChildren().map(child => child.loadImages()));
    }

    _bindMetadata (metadata) {
        this._getChildren().forEach(child => child._bindMetadata(metadata));
    }

    _initializeChildren (children) {
        if (Array.isArray(children)) {
            this._initializeChildrenArray(children);
        } else {
            this._initializeChildrenObject(children);
        }
    }

    _initializeChildrenArray (children) {
        if (this.maxParameters && this.maxParameters < children.length) {
            throw new _errors_carto_validation_error__WEBPACK_IMPORTED_MODULE_3__["default"](
                `${_errors_carto_validation_error__WEBPACK_IMPORTED_MODULE_3__["CartoValidationTypes"].TOO_MANY_ARGS} Extra parameters, got ${children.length} but maximum is ${this.maxParameters}`
            );
        }

        this.childrenNames = [];

        children.map((child, index) => {
            const childName = `${child.type}-${index}`;
            this.childrenNames.push(childName);
            this[childName] = Object(_utils__WEBPACK_IMPORTED_MODULE_0__["implicitCast"])(child);
        });
    }

    _initializeChildrenObject (children) {
        this.childrenNames = Object.keys(children);

        if (this.maxParameters && this.maxParameters < this.childrenNames.length) {
            throw new _errors_carto_validation_error__WEBPACK_IMPORTED_MODULE_3__["default"](
                `${_errors_carto_validation_error__WEBPACK_IMPORTED_MODULE_3__["CartoValidationTypes"].TOO_MANY_ARGS} Extra parameters, got ${this.childrenNames.length} but maximum is ${this.maxParameters}`
            );
        }

        Object.keys(children).map(name => {
            this[name] = Object(_utils__WEBPACK_IMPORTED_MODULE_0__["implicitCast"])(children[name]);
        });
    }

    _addParentToChildren () {
        this._getChildren().map(child => {
            child.parent = this;
        });
    }

    _setUID (idGenerator) {
        this._uid = idGenerator.getID(this);
        this._getChildren().map(child => child._setUID(idGenerator));
    }

    _dataReady () {
        this._getChildren().map(child => child._dataReady());
    }

    isFeatureDependent () {
        return this._getChildren().some(child => child.isFeatureDependent());
    }

    _prefaceCode (glslCode) {
        return glslCode
            ? `\n${this._buildGLSLCode(glslCode)}\n`
            : '';
    }

    _buildGLSLCode (glslCode) {
        return `
            #ifndef DEF_${this._uid}
            #define DEF_${this._uid}
            ${glslCode}
            #endif`;
    }

    _getDependencies () {
        return this._getChildren().map(child => child._getDependencies()).reduce((x, y) => x.concat(y), []);
    }

    _resolveAliases (aliases) {
        this._getChildren().map(child => child._resolveAliases(aliases));
    }

    _setGenericGLSL (inlineMaker, preface) {
        this.inlineMaker = inlineMaker;
        this.preface = (preface || '');
    }

    // Generate GLSL code
    // @param {*} getGLSLforProperty  fn to get property IDs and inform of used properties
    _applyToShaderSource (getGLSLforProperty) {
        const childSources = this.childrenNames.map(name => this[name]._applyToShaderSource(getGLSLforProperty));
        let childInlines = {};
        childSources.map((source, index) => {
            childInlines[this.childrenNames[index]] = source.inline;
        });
        return {
            preface: this._prefaceCode(childSources.map(s => s.preface).reduce((a, b) => a + b, '') + this.preface),
            inline: this.inlineMaker(childInlines, getGLSLforProperty)
        };
    }

    // Inform about a successful shader compilation. One-time post-compilation WebGL calls should be done here.
    _postShaderCompile (program, gl) {
        this.childrenNames.forEach(name => this[name]._postShaderCompile(program, gl));
    }

    get value () {
        return this.eval();
    }

    _getBinding (shader) {
        if (!this._shaderBindings.has(shader)) {
            this._shaderBindings.set(shader, {});
        }
        return this._shaderBindings.get(shader);
    }

    _resetViewportAgg (metadata) {
        this._getChildren().forEach(child => child._resetViewportAgg(metadata));
    }

    // Pre-rendering routine. Should establish the current timestamp in seconds since an arbitrary point in time as needed.
    // @param {number} timestamp
    _setTimestamp (timestamp) {
        this.childrenNames.forEach(name => this[name]._setTimestamp(timestamp));
    }

    // Pre-rendering routine. Should establish related WebGL state as needed.
    _preDraw (...args) {
        this.childrenNames.forEach(name => this[name]._preDraw(...args));
    }

    // Replace child *toReplace* by *replacer*
    replaceChild (toReplace, replacer) {
        const name = this.childrenNames.find(name => this[name] === toReplace);
        this[name] = replacer;
        replacer.parent = this;
        replacer.notify = toReplace.notify;
    }

    _blendFrom (final, duration = 500, interpolator = null) {
        if (this.default && final.default) {
            return;
        }
        final = Object(_utils__WEBPACK_IMPORTED_MODULE_0__["implicitCast"])(final);
        const parent = this.parent;
        const blender = Object(_expressions__WEBPACK_IMPORTED_MODULE_1__["blend"])(final, this, Object(_expressions__WEBPACK_IMPORTED_MODULE_1__["transition"])(duration), interpolator);
        parent.replaceChild(this, blender);
        blender.notify();
    }

    _getChildren () {
        return this.childrenNames.map(name => this[name]);
    }

    _getMinimumNeededSchema () {
        // Depth First Search => reduce using union
        return this._getChildren().map(child => child._getMinimumNeededSchema()).reduce(_schema__WEBPACK_IMPORTED_MODULE_2__["union"], _schema__WEBPACK_IMPORTED_MODULE_2__["IDENTITY"]);
    }
}

function _toCamelCase (str) {
    if (str.toUpperCase() === str) {
        return str.toLowerCase();
    }
    return str.charAt(0).toLowerCase() + str.slice(1);
}


/***/ }),

/***/ "./src/renderer/viz/expressions/basic/List.js":
/*!****************************************************!*\
  !*** ./src/renderer/viz/expressions/basic/List.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return List; });
/* harmony import */ var _base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../base */ "./src/renderer/viz/expressions/base.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils */ "./src/renderer/viz/expressions/utils.js");
/* harmony import */ var _ListImage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../ListImage */ "./src/renderer/viz/expressions/ListImage.js");
/* harmony import */ var _ListGeneric__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ListGeneric */ "./src/renderer/viz/expressions/basic/ListGeneric.js");
/* harmony import */ var _ListTransform__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../ListTransform */ "./src/renderer/viz/expressions/ListTransform.js");
/* harmony import */ var _errors_carto_validation_error__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../errors/carto-validation-error */ "./src/errors/carto-validation-error.js");







const SUPPORTED_CHILD_TYPES = ['number', 'category', 'color', 'time', 'image', 'transformation'];

/**
 * Wrapper around arrays. Explicit usage is unnecessary since CARTO VL will wrap implicitly all arrays using this function.
 *
 * When used with Transformation expressions, the returned value will be a Transformation that will chain each single transformation one after another.
 *
 * @example <caption>Rotate then translate.</caption>
 * const s = carto.expressions;
 * const viz = new carto.Viz({
 *   symbol: s.CROSS
 *   transform: [s.rotate(90), s.translate(10, 20)]
 * });
 *
 * @example <caption>Rotate then translate. (String)</caption>
 * const viz = new carto.Viz(`
 *   symbol: cross
 *   transform: [rotate(90), translate(10, 20)]
 * `);
 *
 * @param {Number[]|Category[]|Color[]|Date[]|Image[]|Transform[]} elements
 * @returns {List|Transform}
 *
 * @memberof carto.expressions
 * @name list
 * @function
 * @api
 */
class List extends _base__WEBPACK_IMPORTED_MODULE_0__["default"] {
    constructor (elems) {
        Object(_utils__WEBPACK_IMPORTED_MODULE_1__["checkMaxArguments"])(arguments, 1, 'list');

        if (!elems) {
            throw new _errors_carto_validation_error__WEBPACK_IMPORTED_MODULE_5__["default"](`${_errors_carto_validation_error__WEBPACK_IMPORTED_MODULE_5__["CartoValidationTypes"].MISSING_REQUIRED} list(): invalid parameters: must receive at least one argument.`);
        }

        if (!Array.isArray(elems)) {
            elems = [elems];
        }

        elems = elems.map(_utils__WEBPACK_IMPORTED_MODULE_1__["implicitCast"]);

        if (!elems.length) {
            throw new _errors_carto_validation_error__WEBPACK_IMPORTED_MODULE_5__["default"](`${_errors_carto_validation_error__WEBPACK_IMPORTED_MODULE_5__["CartoValidationTypes"].MISSING_REQUIRED} list(): invalid parameters: must receive at least one argument.`);
        }

        elems.map((item, index) => {
            Object(_utils__WEBPACK_IMPORTED_MODULE_1__["checkExpression"])('list', `item[${index}]`, index, item);
        });

        super(elems);
        this.elems = elems;
    }

    _bindMetadata (metadata) {
        super._bindMetadata(metadata);
        this._setTypes();

        if (SUPPORTED_CHILD_TYPES.indexOf(this.childType) === -1) {
            throw new _errors_carto_validation_error__WEBPACK_IMPORTED_MODULE_5__["default"](`${_errors_carto_validation_error__WEBPACK_IMPORTED_MODULE_5__["CartoValidationTypes"].INCORRECT_TYPE} list(): invalid parameters type: ${this.childType}.`);
        }

        this.elems.map((item, index) => {
            Object(_utils__WEBPACK_IMPORTED_MODULE_1__["checkExpression"])('list', `item[${index}]`, index, item);

            if (item.type !== this.childType) {
                throw new _errors_carto_validation_error__WEBPACK_IMPORTED_MODULE_5__["default"](`${_errors_carto_validation_error__WEBPACK_IMPORTED_MODULE_5__["CartoValidationTypes"].INCORRECT_TYPE} list(): invalid ${Object(_utils__WEBPACK_IMPORTED_MODULE_1__["getOrdinalFromIndex"])(index + 1)} parameter type, invalid argument type combination.`);
            }
        });

        switch (this.elems[0].type) {
            case 'image':
                Object.setPrototypeOf(this, _ListImage__WEBPACK_IMPORTED_MODULE_2__["default"].prototype);
                break;
            case 'transformation':
                Object.setPrototypeOf(this, _ListTransform__WEBPACK_IMPORTED_MODULE_4__["default"].prototype);
                break;
            default:
                Object.setPrototypeOf(this, _ListGeneric__WEBPACK_IMPORTED_MODULE_3__["default"].prototype);
                break;
        }

        return this._bindMetadata(metadata);
    }

    _setTypes () {
        this.childType = this.elems[0].type;
        this.type = `${this.childType}-list`;
    }
}


/***/ }),

/***/ "./src/renderer/viz/expressions/basic/ListGeneric.js":
/*!***********************************************************!*\
  !*** ./src/renderer/viz/expressions/basic/ListGeneric.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ListGeneric; });
/* harmony import */ var _base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../base */ "./src/renderer/viz/expressions/base.js");


class ListGeneric extends _base__WEBPACK_IMPORTED_MODULE_0__["default"] {
    get value () {
        return this.elems.map(c => c.value);
    }

    eval (feature) {
        return this.elems.map(c => c.eval(feature));
    }

    _applyToShaderSource (getGLSLforProperty) {
        const childGLSL = this.elems.map(elem => elem._applyToShaderSource(getGLSLforProperty));
        return {
            preface: childGLSL.map(c => c.preface).join('\n'),
            inline: childGLSL.map(c => c.inline)
        };
    }
}


/***/ }),

/***/ "./src/renderer/viz/expressions/basic/category.js":
/*!********************************************************!*\
  !*** ./src/renderer/viz/expressions/basic/category.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return BaseCategory; });
/* harmony import */ var _base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../base */ "./src/renderer/viz/expressions/base.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils */ "./src/renderer/viz/expressions/utils.js");



/**
 * Wrapper around category names. Explicit usage is unnecessary since CARTO VL will wrap implicitly all strings using this function.
 *
 * @param {string} categoryName
 * @returns {Category} category expression with the name provided
 *
 * @memberof carto.expressions
 * @name category
 * @function
 * @IGNOREapi
 */
class BaseCategory extends _base__WEBPACK_IMPORTED_MODULE_0__["default"] {
    constructor (categoryName) {
        Object(_utils__WEBPACK_IMPORTED_MODULE_1__["checkMaxArguments"])(arguments, 1, 'category');
        Object(_utils__WEBPACK_IMPORTED_MODULE_1__["checkString"])('category', 'categoryName', 0, categoryName);

        super({});
        this.expr = categoryName;
        this.type = 'category';
    }

    get value () {
        // Return the plain string
        return this.expr;
    }

    eval () {
        return this.expr;
    }

    isAnimated () {
        return false;
    }

    _bindMetadata (metadata) {
        this._metadata = metadata;
    }

    _applyToShaderSource () {
        return {
            preface: this._prefaceCode(`uniform float cat${this._uid};\n`),
            inline: `cat${this._uid}`
        };
    }

    _postShaderCompile (program, gl) {
        this._getBinding(program).uniformLocation = gl.getUniformLocation(program, `cat${this._uid}`);
    }

    _preDraw (program, drawMetadata, gl) {
        const id = this._metadata.categoryToID.get(this.expr);
        gl.uniform1f(this._getBinding(program).uniformLocation, id);
    }
}


/***/ }),

/***/ "./src/renderer/viz/expressions/basic/constant.js":
/*!********************************************************!*\
  !*** ./src/renderer/viz/expressions/basic/constant.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Constant; });
/* harmony import */ var _base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../base */ "./src/renderer/viz/expressions/base.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils */ "./src/renderer/viz/expressions/utils.js");



/**
 * Wraps a constant number. Implies a GPU optimization vs {@link carto.expressions.number|number expression}.
 *
 * @param {number} x - A number to be warped in a constant numeric expression
 * @return {Number} Numeric expression
 *
 * @example <caption>Creating a constant number expression.</caption>
 * const s = carto.expressions;
 * const viz = new carto.Viz({
 *   width: s.constant(15)
 * });
 *
 * @example <caption>Creating a constant number expression. (String)</caption>
 * const viz = new carto.Viz(`
 *   width: constant(15)
 * `);
 *
 * @memberof carto.expressions
 * @name constant
 * @function
 * @api
 */
class Constant extends _base__WEBPACK_IMPORTED_MODULE_0__["default"] {
    constructor (x) {
        Object(_utils__WEBPACK_IMPORTED_MODULE_1__["checkMaxArguments"])(arguments, 1, 'constant');
        Object(_utils__WEBPACK_IMPORTED_MODULE_1__["checkNumber"])('constant', 'x', 0, x);

        super({});
        this.expr = x;
        this.type = 'number';
        this.inlineMaker = () => `(${x.toFixed(20)})`;
    }
    toString () {
        return this.expr;
    }
    get value () {
        return this.eval();
    }
    eval () {
        return this.expr;
    }
}


/***/ }),

/***/ "./src/renderer/viz/expressions/basic/number.js":
/*!******************************************************!*\
  !*** ./src/renderer/viz/expressions/basic/number.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return BaseNumber; });
/* harmony import */ var _base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../base */ "./src/renderer/viz/expressions/base.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils */ "./src/renderer/viz/expressions/utils.js");



/**
 * Wraps a number. Explicit usage is unnecessary since CARTO VL will wrap implicitly all numbers using this function.
 *
 * @param {number} x - A number to be warped in a numeric expression
 * @return {Number} Numeric expression
 *
 * @example <caption>Creating a number expression.</caption>
 * const s = carto.expressions;
 * const viz = new carto.Viz({
 *   width: s.number(15)  // Equivalent to `width: 15`
 * });
 *
 * @example <caption>Creating a number expression. (String)</caption>
 * const viz = new carto.Viz(`
 *   width: 15  // Equivalent to number(15)
 * `);
 *
 * @memberof carto.expressions
 * @name number
 * @function
 * @IGNOREapi
 */
class BaseNumber extends _base__WEBPACK_IMPORTED_MODULE_0__["default"] {
    constructor (x) {
        Object(_utils__WEBPACK_IMPORTED_MODULE_1__["checkMaxArguments"])(arguments, 1, 'number');
        Object(_utils__WEBPACK_IMPORTED_MODULE_1__["checkNumber"])('number', 'x', 0, x);

        super({});
        this.expr = x;
        this.type = 'number';
    }
    get value () {
        return this.eval();
    }
    eval () {
        return this.expr;
    }

    toString () {
        return `${this.expr}`;
    }

    isAnimated () {
        return false;
    }
    _applyToShaderSource () {
        return {
            preface: this._prefaceCode(`uniform float number${this._uid};`),
            inline: `number${this._uid}`
        };
    }
    _postShaderCompile (program, gl) {
        this._getBinding(program).uniformLocation = gl.getUniformLocation(program, `number${this._uid}`);
    }
    _preDraw (program, drawMetadata, gl) {
        gl.uniform1f(this._getBinding(program).uniformLocation, this.expr);
    }
}


/***/ }),

/***/ "./src/renderer/viz/expressions/basic/property.js":
/*!********************************************************!*\
  !*** ./src/renderer/viz/expressions/basic/property.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Property; });
/* harmony import */ var _base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../base */ "./src/renderer/viz/expressions/base.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils */ "./src/renderer/viz/expressions/utils.js");
/* harmony import */ var _errors_carto_validation_error__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../errors/carto-validation-error */ "./src/errors/carto-validation-error.js");




/**
 * Evaluates the value of a column for every row in the dataset.
 *
 * For example think about a dataset containing 3 cities: Barcelona, Paris and London.
 * The `prop('name')` will return the name of the current city for every point in the dataset.
 *
 * @param {string} name - The property in the dataset that is going to be evaluated
 * @return {Number|Category|Date}
 *
 * @example <caption>Display only cities with name different from "London".</caption>
 * const s = carto.expressions;
 * const viz = new carto.Viz({
 *  filter: s.neq(s.prop('name'), 'london')
 * });
 *
 * @example <caption>Display only cities with name different from "London". (String)</caption>
 * const viz = new carto.Viz(`
 *   filter: neq(prop('name'), 'london')
 * `);
 *
 * const viz = new carto.Viz(`
 *   filter: $name != 'london'
 * `);
 *
 * @memberof carto.expressions
 * @name prop
 * @function
 * @api
 */
class Property extends _base__WEBPACK_IMPORTED_MODULE_0__["default"] {
    constructor (name) {
        Object(_utils__WEBPACK_IMPORTED_MODULE_1__["checkMaxArguments"])(arguments, 1, 'property');
        Object(_utils__WEBPACK_IMPORTED_MODULE_1__["checkString"])('property', 'name', 0, name);

        if (name === '') {
            throw new _errors_carto_validation_error__WEBPACK_IMPORTED_MODULE_2__["default"](`${_errors_carto_validation_error__WEBPACK_IMPORTED_MODULE_2__["CartoValidationTypes"].INCORRECT_VALUE} property(): invalid parameter, zero-length string`);
        }
        super({});
        this.name = name;
        this.expressionName = name;
        super._setGenericGLSL((childInlines, getGLSLforProperty) => getGLSLforProperty(this.name));
    }

    isFeatureDependent () {
        return true;
    }

    get value () {
        return this.eval();
    }

    eval (feature) {
        if (!feature) {
            throw new _errors_carto_validation_error__WEBPACK_IMPORTED_MODULE_2__["default"](`${_errors_carto_validation_error__WEBPACK_IMPORTED_MODULE_2__["CartoValidationTypes"].MISSING_REQUIRED} A property needs to be evaluated in a 'feature'.`);
        }

        return feature[this.name];
    }

    toString () {
        return `$${this.expressionName}`;
    }

    get categories () {
        return this.type === 'category'
            ? this._metadata.properties[this.name].categories
            : undefined;
    }

    _bindMetadata (metadata) {
        const metaColumn = metadata.properties[this.name];
        if (!metaColumn) {
            throw new _errors_carto_validation_error__WEBPACK_IMPORTED_MODULE_2__["default"](`${_errors_carto_validation_error__WEBPACK_IMPORTED_MODULE_2__["CartoValidationTypes"].MISSING_REQUIRED} Property '${this.name}' does not exist`);
        }

        this._metadata = metadata;
        this.type = metaColumn.type;

        if (this.type === 'category' && !this.numCategories) {
            Object.defineProperty(this, 'numCategories', {
                get: function () {
                    return metaColumn.categories.length;
                }
            });
        }
    }

    _applyToShaderSource (getGLSLforProperty) {
        return {
            preface: '',
            inline: getGLSLforProperty(this.name)
        };
    }

    _getMinimumNeededSchema () {
        return {
            [this.name]: [{
                type: 'unaggregated'
            }]
        };
    }
}


/***/ }),

/***/ "./src/renderer/viz/expressions/basic/variable.js":
/*!********************************************************!*\
  !*** ./src/renderer/viz/expressions/basic/variable.js ***!
  \********************************************************/
/*! exports provided: Variable, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Variable", function() { return Variable; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return variable; });
/* harmony import */ var _base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../base */ "./src/renderer/viz/expressions/base.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils */ "./src/renderer/viz/expressions/utils.js");
/* harmony import */ var _errors_carto_validation_error__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../errors/carto-validation-error */ "./src/errors/carto-validation-error.js");




/**
 * Alias to a named variable defined in the Viz.
 *
 * @param {string} name - The variable name that is going to be evaluated
 * @return {Number|Category|Color|Date}
 *
 * @example <caption></caption>
 * const s = carto.expressions;
 * const viz = new carto.Viz({
 *   variables: {
 *     sum_price: s.clusterSum(s.prop('price'))
 *   }
 *  filter: s.neq(s.var('sum_price'), 'london')
 * });
 *
 * @example <caption>(String)</caption>
 * const viz = new carto.Viz(`
 *   \@sum_price: clusterSum($price)
 *   filter: $price == 30  // Equivalent to eq($price, 30)
 * `);
 *
 * @memberof carto.expressions
 * @name var
 * @function
 * @api
 */
class Variable extends _base__WEBPACK_IMPORTED_MODULE_0__["default"] {
    constructor () {
        super({});
    }
}

function isFunction (functionToCheck) {
    return functionToCheck && {}.toString.call(functionToCheck) === '[object Function]';
}

function variable (name) {
    Object(_utils__WEBPACK_IMPORTED_MODULE_1__["checkMaxArguments"])(arguments, 1, 'variable');
    Object(_utils__WEBPACK_IMPORTED_MODULE_1__["checkString"])('variable', 'name', 0, name);

    if (name === '') {
        throw new _errors_carto_validation_error__WEBPACK_IMPORTED_MODULE_2__["default"](`${_errors_carto_validation_error__WEBPACK_IMPORTED_MODULE_2__["CartoValidationTypes"].INCORRECT_VALUE} variable(): invalid parameter, zero-length string`);
    }

    let alias;

    const resolve = aliases => {
        if (aliases[name]) {
            alias = aliases[name];
        } else {
            throw new _errors_carto_validation_error__WEBPACK_IMPORTED_MODULE_2__["default"](`${_errors_carto_validation_error__WEBPACK_IMPORTED_MODULE_2__["CartoValidationTypes"].MISSING_REQUIRED} variable() with name '${name}' doesn't exist`);
        }
    };

    const _getDependencies = () => {
        return [alias];
    };

    let aliaser = {
        set: (obj, prop, value) => {
            if (prop === 'parent') {
                obj[prop] = value;
            } else if (prop === 'notify') {
                obj[prop] = value;
            } else if (alias && alias[prop]) {
                alias[prop] = value;
            } else {
                return false;
            }
            // Indicate success
            return true;
        },

        get: (obj, prop) => {
            if (prop === 'parent') {
                return obj[prop];
            } else if (prop === '_resolveAliases') {
                return resolve;
            } else if (prop === '_getDependencies') {
                return _getDependencies;
            } else if (prop === 'notify') {
                return obj[prop];
            } else if (prop === 'blendTo') {
                return obj[prop];
            }
            if (alias && alias[prop]) {
                if (isFunction(alias[prop])) {
                    return alias[prop].bind(alias);
                }
                return alias[prop];
            }
            return obj[prop];
        }
    };

    const proxy = new Proxy(new Variable(), aliaser);
    return proxy;
}


/***/ }),

/***/ "./src/renderer/viz/expressions/belongs.js":
/*!*************************************************!*\
  !*** ./src/renderer/viz/expressions/belongs.js ***!
  \*************************************************/
/*! exports provided: In, Nin */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "In", function() { return In; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Nin", function() { return Nin; });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ "./src/renderer/viz/expressions/utils.js");
/* harmony import */ var _base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./base */ "./src/renderer/viz/expressions/base.js");



/**
 * Check if a categorical value belongs to a list of categories.
 *
 * @param {Category} input - Categorical expression to be tested against the whitelist
 * @param {Category[]} list - Multiple expression parameters that will form the whitelist
 * @return {Number} Numeric expression with the result of the check
 *
 * @example <caption>Display only cities where $type is 'metropolis' or 'capital'.</caption>
 * const s = carto.expressions;
 * const viz = new carto.Viz({
 *   filter: s.in(s.prop('type'), ['metropolis', 'capital'])
 * });
 *
 * @example <caption>Display only cities where $type is 'metropolis' or 'capital'. (String)</caption>
 * const viz = new carto.Viz(`
 *   filter: $type in ['metropolis', 'capital']
 * `);
 *
 * @memberof carto.expressions
 * @name in
 * @function
 * @api
 */
const In = generateBelongsExpression('in', IN_INLINE_MAKER, (input, list) => list.some(item => item === input) ? 1 : 0);

function IN_INLINE_MAKER (list) {
    if (list.length === 0) {
        return () => '0.';
    }
    return inline => `((${list.map((cat, index) => `(${inline.input} == ${inline.list[index]})`).join(' || ')})? 1.: 0.)`;
}

/**
 * Check if value does not belong to the list of elements.
 *
 * @param {Category} input - Categorical expression to be tested against the blacklist
 * @param {Category[]} list - Multiple expression parameters that will form the blacklist
 * @return {Number} Numeric expression with the result of the check
 *
 * @example <caption>Display only cities where $type is not 'metropolis' or 'capital'.</caption>
 * const s = carto.expressions;
 * const viz = new carto.Viz({
 *   filter: s.nin(s.prop('type'), ['metropolis', 'capital'])
 * });
 *
 * @example <caption>Display only cities where $type is not 'metropolis' or 'capital'. (String)</caption>
 * const viz = new carto.Viz(`
 *   filter: $type nin ['metropolis', 'capital']
 * `);
 *
 * @memberof carto.expressions
 * @name nin
 * @function
 * @api
 */
const Nin = generateBelongsExpression('nin', NIN_INLINE_MAKER, (input, list) => list.some(item => item === input) ? 0 : 1);

function NIN_INLINE_MAKER (list) {
    if (list.length === 0) {
        return () => '1.';
    }
    return inline => `((${list.map((cat, index) => `(${inline.input} != ${inline.list[index]})`).join(' && ')})? 1.: 0.)`;
}

function generateBelongsExpression (name, inlineMaker, jsEval) {
    return class BelongExpression extends _base__WEBPACK_IMPORTED_MODULE_1__["default"] {
        constructor (input, list) {
            Object(_utils__WEBPACK_IMPORTED_MODULE_0__["checkMaxArguments"])(arguments, 2, name);

            input = Object(_utils__WEBPACK_IMPORTED_MODULE_0__["implicitCast"])(input);
            list = Object(_utils__WEBPACK_IMPORTED_MODULE_0__["implicitCast"])(list);

            Object(_utils__WEBPACK_IMPORTED_MODULE_0__["checkExpression"])(name, 'input', 0, input);
            Object(_utils__WEBPACK_IMPORTED_MODULE_0__["checkExpression"])(name, 'list', 1, list);

            super({ input, list });
            this.inlineMaker = inlineMaker(this.list.elems);
            this.type = 'number';
        }

        eval (feature) {
            return jsEval(this.input.eval(feature), this.list.eval(feature));
        }

        _bindMetadata (meta) {
            super._bindMetadata(meta);
            Object(_utils__WEBPACK_IMPORTED_MODULE_0__["checkType"])(name, 'input', 0, 'category', this.input);
            Object(_utils__WEBPACK_IMPORTED_MODULE_0__["checkType"])(name, 'list', 1, 'category-list', this.list);
        }
    };
}


/***/ }),

/***/ "./src/renderer/viz/expressions/between.js":
/*!*************************************************!*\
  !*** ./src/renderer/viz/expressions/between.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Between; });
/* harmony import */ var _base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./base */ "./src/renderer/viz/expressions/base.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils */ "./src/renderer/viz/expressions/utils.js");



/**
 * Check if a given value is contained within an inclusive range (including the limits).
 *
 * This returns a numeric expression where 0 means `false` and 1 means `true`.
 *
 * @param {Number} input - Numeric expression that is going to be tested against the [lowerLimit, upperLimit] range
 * @param {Number} lowerLimit - Numeric expression with the lower limit of the range
 * @param {Number} upperLimit -  Numeric expression with the upper limit of the range
 * @return {Number} Numeric expression with the result of the check
 *
 * @example <caption>Display only cities where the population density is within the [50,100] range.</caption>
 * const s = carto.expressions;
 * const viz = new carto.Viz({
 *   filter: s.between(s.prop('dn'), 50, 100);
 * });
 *
 * @example <caption>Display only cities where the population density is within the [50,100] range. (String)</caption>
 * const viz = new carto.Viz(`
 *   filter: between($dn, 50, 100)
 * `);
 *
 * @memberof carto.expressions
 * @name between
 * @function
 * @api
 */
class Between extends _base__WEBPACK_IMPORTED_MODULE_0__["default"] {
    constructor (input, lowerLimit, upperLimit) {
        Object(_utils__WEBPACK_IMPORTED_MODULE_1__["checkMaxArguments"])(arguments, 3, 'between');

        input = Object(_utils__WEBPACK_IMPORTED_MODULE_1__["implicitCast"])(input);
        lowerLimit = Object(_utils__WEBPACK_IMPORTED_MODULE_1__["implicitCast"])(lowerLimit);
        upperLimit = Object(_utils__WEBPACK_IMPORTED_MODULE_1__["implicitCast"])(upperLimit);

        super({ input, lowerLimit, upperLimit });
        this.type = 'number';
        this.inlineMaker = inline => `((${inline.input} >= ${inline.lowerLimit} &&  ${inline.input} <= ${inline.upperLimit}) ? 1. : 0.)`;
    }
    eval (feature) {
        const input = this.input.eval(feature);
        const lower = this.lowerLimit.eval(feature);
        const upper = this.upperLimit.eval(feature);
        return (input >= lower && input <= upper) ? 1 : 0;
    }
    _bindMetadata (meta) {
        super._bindMetadata(meta);

        Object(_utils__WEBPACK_IMPORTED_MODULE_1__["checkType"])('between', 'input', 0, 'number', this.input);
        Object(_utils__WEBPACK_IMPORTED_MODULE_1__["checkType"])('between', 'lowerLimit', 1, 'number', this.lowerLimit);
        Object(_utils__WEBPACK_IMPORTED_MODULE_1__["checkType"])('between', 'upperLimit', 2, 'number', this.upperLimit);
    }
}


/***/ }),

/***/ "./src/renderer/viz/expressions/binary.js":
/*!************************************************!*\
  !*** ./src/renderer/viz/expressions/binary.js ***!
  \************************************************/
/*! exports provided: Mul, Div, Add, Sub, Mod, Pow, GreaterThan, GreaterThanOrEqualTo, LessThan, LessThanOrEqualTo, Equals, NotEquals, Or, And */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Mul", function() { return Mul; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Div", function() { return Div; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Add", function() { return Add; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Sub", function() { return Sub; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Mod", function() { return Mod; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Pow", function() { return Pow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GreaterThan", function() { return GreaterThan; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GreaterThanOrEqualTo", function() { return GreaterThanOrEqualTo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LessThan", function() { return LessThan; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LessThanOrEqualTo", function() { return LessThanOrEqualTo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Equals", function() { return Equals; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotEquals", function() { return NotEquals; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Or", function() { return Or; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "And", function() { return And; });
/* harmony import */ var _expressions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../expressions */ "./src/renderer/viz/expressions.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils */ "./src/renderer/viz/expressions/utils.js");
/* harmony import */ var _base__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./base */ "./src/renderer/viz/expressions/base.js");
/* harmony import */ var _errors_carto_validation_error__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../errors/carto-validation-error */ "./src/errors/carto-validation-error.js");





// Each binary expression can have a set of the following signatures (OR'ed flags)
const UNSUPPORTED_SIGNATURE = 0;
const NUMBERS_TO_NUMBER = 1;
const NUMBER_AND_COLOR_TO_COLOR = 2;
const COLORS_TO_COLOR = 4;
const CATEGORIES_TO_NUMBER = 8;
const IMAGES_TO_IMAGE = 16;

/**
 * Multiply two numeric expressions.
 *
 * @param {Number|Color} x - First value to multiply
 * @param {Number|Color} y - Second value to multiply
 * @return {Number|Color} Result of the multiplication
 *
 * @example <caption>Number multiplication.</caption>
 * const s = carto.expressions;
 * const viz = new carto.Viz({
 *   width: s.mul(5, 5)  // 25
 * });
 *
 * @example <caption>Number multiplication. (String)</caption>
 * const viz = new carto.Viz(`
 *   width: 5 * 5  // Equivalent to mul(5, 5)
 * `);
 *
 * @memberof carto.expressions
 * @name mul
 * @function
 * @api
 */
const Mul = genBinaryOp('mul',
    NUMBERS_TO_NUMBER | NUMBER_AND_COLOR_TO_COLOR | COLORS_TO_COLOR | IMAGES_TO_IMAGE,
    (x, y) => x * y,
    (x, y) => `(${x} * ${y})`
);

/**
 * Divide two numeric expressions.
 *
 * @param {Number|Color} numerator - Numerator of the division
 * @param {Number|Color} denominator - Denominator of the division
 * @return {Number|Color} Result of the division
 *
 * @example <caption>Number division.</caption>
 * const s = carto.expressions;
 * const viz = new carto.Viz({
 *   width: s.div(10, 2)  // 5
 * });
 *
 * @example <caption>Number division. (String)</caption>
 * const viz = new carto.Viz(`
 *   width: 10 / 2  // Equivalent to div(10, 2)
 * `);
 *
 * @memberof carto.expressions
 * @name div
 * @function
 * @api
 */
const Div = genBinaryOp('div',
    NUMBERS_TO_NUMBER | NUMBER_AND_COLOR_TO_COLOR | COLORS_TO_COLOR | IMAGES_TO_IMAGE,
    (x, y) => x / y,
    (x, y) => `(${x} / ${y})`
);

/**
 * Add two numeric expressions.
 *
 * @param {Number|Color} x - First value to add
 * @param {Number|Color} y - Second value to add
 * @return {Number|Color} Result of the addition
 *
 * @example <caption>Number addition.</caption>
 * const s = carto.expressions;
 * const viz = new carto.Viz({
 *   width: s.add(10, 2)  // 12
 * });
 *
 * @example <caption>Number addition. (String)</caption>
 * const viz = new carto.Viz(`
 *   width: 10 + 2  // Equivalent to add(10, 2)
 * `);
 *
 * @memberof carto.expressions
 * @name add
 * @function
 * @api
 */
const Add = genBinaryOp('add',
    NUMBERS_TO_NUMBER | COLORS_TO_COLOR | IMAGES_TO_IMAGE,
    (x, y) => x + y,
    (x, y) => `(${x} + ${y})`
);

/**
 * Substract two numeric expressions.
 *
 * @param {Number|Color} minuend - The minuend of the subtraction
 * @param {Number|Color} subtrahend - The subtrahend of the subtraction
 * @return {Number|Color} Result of the substraction
 *
 * @example <caption>Number subtraction.</caption>
 * const s = carto.expressions;
 * const viz = new carto.Viz({
 *   width: s.sub(10, 2)  // 8
 * });
 *
 * @example <caption>Number subtraction. (String)</caption>
 * const viz = new carto.Viz(`
 *   width: 10 - 2  // Equivalent to sub(10, 2)
 * `);
 *
 * @memberof carto.expressions
 * @name sub
 * @function
 * @api
 */
const Sub = genBinaryOp('sub',
    NUMBERS_TO_NUMBER | COLORS_TO_COLOR | IMAGES_TO_IMAGE,
    (x, y) => x - y,
    (x, y) => `(${x} - ${y})`
);

/**
 * Modulus of two numeric expressions, mod returns a numeric expression with the value of x modulo y. This is computed as x - y * floor(x/y).
 *
 * @param {Number} x - First value of the modulus
 * @param {Number} y - Second value of the modulus
 * @return {Number} Result of the modulus
 *
 * @example <caption>Number modulus.</caption>
 * const s = carto.expressions;
 * const viz = new carto.Viz({
 *   width: s.mod(10, 6)  // 4
 * });
 *
 * @example <caption>Number modulus. (String)</caption>
 * const viz = new carto.Viz(`
 *   width: 10 % 6  // Equivalent to mod(10, 6)
 * `);
 *
 * @memberof carto.expressions
 * @name mod
 * @function
 * @api
 */
const Mod = genBinaryOp('mod',
    NUMBERS_TO_NUMBER,
    (x, y) => x % y,
    (x, y) => `mod(${x}, ${y})`
);

/**
 * Compute the base to the exponent power, return a numeric expression with the value of the first parameter raised to the power of the second.
 * The result is undefined if x<0 or if x=0 and y≤0.
 *
 * @param {Number} base - Base of the power
 * @param {Number} exponent - Exponent of the power
 * @return {Number} Result of the power
 *
 * @example <caption>Number power.</caption>
 * const s = carto.expressions;
 * const viz = new carto.Viz({
 *   width: s.pow(2, 3)  // 8
 * });
 *
 * @example <caption>Number power. (String)</caption>
 * const viz = new carto.Viz(`
 *   width: 2 ^ 3  // Equivalent to pow(2, 3)
 * `);
 *
 * @memberof carto.expressions
 * @name pow
 * @function
 * @api
 */
const Pow = genBinaryOp('pow',
    NUMBERS_TO_NUMBER,
    (x, y) => Math.pow(x, y),
    (x, y) => `pow(${x}, ${y})`
);

/**
 * Compare if x is greater than y.
 *
 * This returns a numeric expression where 0 means `false` and 1 means `true`.
 *
 * @param {Number} x - Firt value of the comparison
 * @param {Number} y - Firt value of the comparison
 * @return {Number} Result of the comparison: 0 or 1
 *
 * @example <caption>Compare two numbers to show only elements with price greater than 30.</caption>
 * const s = carto.expressions;
 * const viz = new carto.Viz({
 *   filter: s.gt(s.prop('price'), 30)
 * });
 *
 * @example <caption>Compare two numbers to show only elements with price greater than 30. (String)</caption>
 * const viz = new carto.Viz(`
 *   filter: $price > 30  // Equivalent to gt($price, 30)
 * `);
 *
 * @memberof carto.expressions
 * @name gt
 * @function
 * @api
 */
const GreaterThan = genBinaryOp('greaterThan',
    NUMBERS_TO_NUMBER,
    (x, y) => x > y ? 1 : 0,
    (x, y) => `(${x}>${y}? 1.:0.)`
);

/**
 * Compare if x is greater than or equal to y.
 *
 * This returns a numeric expression where 0 means `false` and 1 means `true`.
 *
 * @param {Number} x - Firt value of the comparison
 * @param {Number} y - Second value of the comparison
 * @return {Number} Result of the comparison: 0 or 1
 *
 * @example <caption>Compare two numbers to show only elements with price greater than or equal to 30.</caption>
 * const s = carto.expressions;
 * const viz = new carto.Viz({
 *   filter: s.gte(s.prop('price'), 30)
 * });
 *
 * @example <caption>Compare two numbers to show only elements with price greater than or equal to 30. (String)</caption>
 * const viz = new carto.Viz(`
 *   filter: $price >= 30  // Equivalent to gte($price, 30)
 * `);
 *
 * @memberof carto.expressions
 * @name gte
 * @function
 * @api
 */
const GreaterThanOrEqualTo = genBinaryOp('greaterThanOrEqualTo',
    NUMBERS_TO_NUMBER,
    (x, y) => x >= y ? 1 : 0,
    (x, y) => `(${x}>=${y}? 1.:0.)`
);

/**
 * Compare if x is lower than y.
 *
 * This returns a numeric expression where 0 means `false` and 1 means `true`.
 *
 * @param {Number} x - Firt value of the comparison
 * @param {Number} y - Second value of the comparison
 * @return {Number} Result of the comparison: 0 or 1
 *
 * @example <caption>Compare two numbers to show only elements with price less than 30.</caption>
 * const s = carto.expressions;
 * const viz = new carto.Viz({
 *   filter: s.lt(s.prop('price'), 30)
 * });
 *
 * @example <caption>Compare two numbers to show only elements with price less than 30. (String)</caption>
 * const viz = new carto.Viz(`
 *   filter: $price < 30  // Equivalent to lt($price, 30)
 * `);
 *
 * @memberof carto.expressions
 * @name lt
 * @function
 * @api
 */
const LessThan = genBinaryOp('lessThan',
    NUMBERS_TO_NUMBER,
    (x, y) => x < y ? 1 : 0,
    (x, y) => `(${x}<${y}? 1.:0.)`
);

/**
 * Compare if x is lower than or equal to y.
 *
 * This returns a numeric expression where 0 means `false` and 1 means `true`.
 *
 * @param {Number} x - Firt value of the comparison
 * @param {Number} y - Second value of the comparison
 * @return {Number} Result of the comparison: 0 or 1
 *
 * @example <caption>Compare two numbers to show only elements with price less than or equal to 30.</caption>
 * const s = carto.expressions;
 * const viz = new carto.Viz({
 *   filter: s.lte(s.prop('price'), 30)
 * });
 *
 * @example <caption>Compare two numbers to show only elements with price less than or equal to 30. (String)</caption>
 * const viz = new carto.Viz(`
 *   filter: $price <= 30  // Equivalent to lte($price, 30)
 * `);
 *
 * @memberof carto.expressions
 * @name lte
 * @function
 * @api
 */
const LessThanOrEqualTo = genBinaryOp('lessThanOrEqualTo',
    NUMBERS_TO_NUMBER,
    (x, y) => x <= y ? 1 : 0,
    (x, y) => `(${x}<=${y}? 1.:0.)`
);

/**
 * Compare if x is equal to a y.
 *
 * This returns a numeric expression where 0 means `false` and 1 means `true`.
 *
 * @param {Number|Category} x - Firt value of the comparison
 * @param {Number|Category} y - Second value of the comparison
 * @return {Number} Result of the comparison: 0 or 1
 *
 * @example <caption>Compare two numbers to show only elements with price equal to 30.</caption>
 * const s = carto.expressions;
 * const viz = new carto.Viz({
 *   filter: s.eq(s.prop('price'), 30)
 * });
 *
 * @example <caption>Compare two numbers to show only elements with price equal to 30. (String)</caption>
 * const viz = new carto.Viz(`
 *   filter: $price == 30  // Equivalent to eq($price, 30)
 * `);
 *
 * @memberof carto.expressions
 * @name eq
 * @function
 * @api
 */
const Equals = genBinaryOp('equals',
    NUMBERS_TO_NUMBER | CATEGORIES_TO_NUMBER,
    (x, y) => x === y ? 1 : 0,
    (x, y) => `(${x}==${y}? 1.:0.)`
);

/**
 * Compare if x is different than y.
 *
 * This returns a number expression where 0 means `false` and 1 means `true`.
 *
 * @param {Number|Category} x - Firt value of the comparison
 * @param {Number|Category} y - Second value of the comparison
 * @return {Number} Result of the comparison: 0 or 1
 *
 * @example <caption>Compare two numbers to show only elements with price not equal to 30.</caption>
 * const s = carto.expressions;
 * const viz = new carto.Viz({
 *   filter: s.neq(s.prop('price'), 30);
 * });
 *
 * @example <caption>Compare two numbers to show only elements with price not equal to 30. (String)</caption>
 * const viz = new carto.Viz(`
 *   filter: $price != 30  // Equivalent to neq($price, 30)
 * `);
 *
 * @memberof carto.expressions
 * @name neq
 * @function
 * @api
 */
const NotEquals = genBinaryOp('notEquals',
    NUMBERS_TO_NUMBER | CATEGORIES_TO_NUMBER,
    (x, y) => x !== y ? 1 : 0,
    (x, y) => `(${x}!=${y}? 1.:0.)`
);

/**
 * Perform a binary OR between two numeric expressions.
 * If the numbers are different from 0 or 1 this performs a [fuzzy or operation](https://en.wikipedia.org/wiki/Fuzzy_logic#Fuzzification).
 * This fuzzy behavior will allow transitions to work in a continuos, non-discrete, fashion.
 *
 * This returns a number expression where 0 means `false` and 1 means `true`.
 *
 * @param {Number} x - First value of the expression
 * @param {Number} y - Second value of the expression
 * @return {Number} Result of the expression
 *
 * @example <caption>Show only elements with price < 30 OR price > 1000.</caption>
 * const s = carto.expressions;
 * const viz = new carto.Viz({
 *   filter: s.or(
 *     s.lt(s.prop('price'), 30),
 *     s.gt(s.prop('price'), 1000)
 *   )
 * });
 *
 * @example <caption>Show only elements with price < 30 OR price > 1000. (String)</caption>
 * const viz = new carto.Viz(`
 *   filter: $price < 30 or $price > 1000  // Equivalent to or(lt($price, 30), gt($price, 1000))
 * `);
 *
 * @memberof carto.expressions
 * @name or
 * @function
 * @api
 */
const Or = genBinaryOp('or',
    NUMBERS_TO_NUMBER,
    (x, y) => Math.min(x + y, 1),
    (x, y) => `min(${x} + ${y}, 1.)`
);

/**
 * Perform a binary AND between two numeric expressions.
 * If the numbers are different from 0 or 1 this performs a [fuzzy and operation](https://en.wikipedia.org/wiki/Fuzzy_logic#Fuzzification).
 * This fuzzy behavior will allow transitions to work in a continuos, non-discrete, fashion.
 *
 * This returns a number expression where 0 means `false` and 1 means `true`.
 *
 * @param {Number} x - First value of the expression
 * @param {Number} y - Second value of the expression
 * @return {Number} Result of the expression
 *
 * @example <caption>Show only elements with price < 30 AND category === 'fruit'.</caption>
 * const s = carto.expressions;
 * const viz = new carto.Viz({
 *   filter: s.and(
 *     s.lt(s.prop('price'), 30),
 *     s.eq(s.prop('category'), 'fruit')
 *   )
 * });
 *
 * @example <caption>Show only elements with price < 30 AND category === 'fruit'. (String)</caption>
 * const viz = new carto.Viz(`
 *   filter: $price < 30 and $category === 'fruit'  // Equivalent to and(lt($price, 30), eq($category, 'fruit'))
 * `);
 *
 * @memberof carto.expressions
 * @name and
 * @function
 * @api
 */
const And = genBinaryOp('and',
    NUMBERS_TO_NUMBER,
    (x, y) => Math.min(x * y, 1),
    (x, y) => `min(${x} * ${y}, 1.)`
);

function genBinaryOp (name, allowedSignature, jsFn, glsl) {
    return class BinaryOperation extends _base__WEBPACK_IMPORTED_MODULE_2__["default"] {
        constructor (a, b) {
            Object(_utils__WEBPACK_IMPORTED_MODULE_1__["checkMaxArguments"])(arguments, 2, name);

            if (Number.isFinite(a) && Number.isFinite(b)) {
                return Object(_expressions__WEBPACK_IMPORTED_MODULE_0__["number"])(jsFn(a, b));
            }
            a = Object(_utils__WEBPACK_IMPORTED_MODULE_1__["implicitCast"])(a);
            b = Object(_utils__WEBPACK_IMPORTED_MODULE_1__["implicitCast"])(b);

            const signature = getSignatureLoose(a, b);

            super({ a, b });
            this.expressionName = name;
            this.type = getReturnTypeFromSignature(signature);
            this.inlineMaker = inline => glsl(inline.a, inline.b);
        }
        get value () {
            return this.eval();
        }
        eval (feature) {
            return jsFn(this.a.eval(feature), this.b.eval(feature));
        }
        _bindMetadata (meta) {
            super._bindMetadata(meta);
            const [a, b] = [this.a, this.b];

            const signature = getSignature(a, b);
            if (signature === UNSUPPORTED_SIGNATURE || !(signature & allowedSignature)) {
                throw new _errors_carto_validation_error__WEBPACK_IMPORTED_MODULE_3__["default"](`${_errors_carto_validation_error__WEBPACK_IMPORTED_MODULE_3__["CartoValidationTypes"].INCORRECT_TYPE} ${name}(): invalid parameter types\n'x' type was ${a.type}, 'y' type was ${b.type}`);
            }
            this.type = getReturnTypeFromSignature(signature);
        }
    };
}

function getSignatureLoose (a, b) {
    if (!a.type || !b.type) {
        if (!a.type && !b.type) {
            return undefined;
        }
        const knownType = a.type || b.type;
        if (knownType === 'color') {
            return NUMBER_AND_COLOR_TO_COLOR;
        }
    } else if (a.type === 'number' && b.type === 'number') {
        return NUMBERS_TO_NUMBER;
    } else if (a.type === 'number' && b.type === 'color') {
        return NUMBER_AND_COLOR_TO_COLOR;
    } else if (a.type === 'color' && b.type === 'number') {
        return NUMBER_AND_COLOR_TO_COLOR;
    } else if (a.type === 'color' && b.type === 'color') {
        return COLORS_TO_COLOR;
    } else if (a.type === 'category' && b.type === 'category') {
        return CATEGORIES_TO_NUMBER;
    } else if ((a.type === 'image' && b.type === 'color') ||
        (a.type === 'image' && b.type === 'color') ||
        (a.type === 'image' && b.type === 'image') ||
        (a.type === 'color' && b.type === 'image')) {
        return IMAGES_TO_IMAGE;
    } else {
        return UNSUPPORTED_SIGNATURE;
    }
}

function getSignature (a, b) {
    if (!a.type || !b.type) {
        return undefined;
    } else if (a.type === 'number' && b.type === 'number') {
        return NUMBERS_TO_NUMBER;
    } else if (a.type === 'number' && b.type === 'color') {
        return NUMBER_AND_COLOR_TO_COLOR;
    } else if (a.type === 'color' && b.type === 'number') {
        return NUMBER_AND_COLOR_TO_COLOR;
    } else if (a.type === 'color' && b.type === 'color') {
        return COLORS_TO_COLOR;
    } else if (a.type === 'category' && b.type === 'category') {
        return CATEGORIES_TO_NUMBER;
    } else if ((a.type === 'image' && b.type === 'color') ||
        (a.type === 'image' && b.type === 'color') ||
        (a.type === 'image' && b.type === 'image') ||
        (a.type === 'color' && b.type === 'image')) {
        return IMAGES_TO_IMAGE;
    } else {
        return UNSUPPORTED_SIGNATURE;
    }
}

function getReturnTypeFromSignature (signature) {
    switch (signature) {
        case NUMBERS_TO_NUMBER:
            return 'number';
        case NUMBER_AND_COLOR_TO_COLOR:
            return 'color';
        case COLORS_TO_COLOR:
            return 'color';
        case CATEGORIES_TO_NUMBER:
            return 'number';
        case IMAGES_TO_IMAGE:
            return 'image';
        default:
            return undefined;
    }
}


/***/ }),

/***/ "./src/renderer/viz/expressions/blend.js":
/*!***********************************************!*\
  !*** ./src/renderer/viz/expressions/blend.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Blend; });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ "./src/renderer/viz/expressions/utils.js");
/* harmony import */ var _transition__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./transition */ "./src/renderer/viz/expressions/transition.js");
/* harmony import */ var _base__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./base */ "./src/renderer/viz/expressions/base.js");
/* harmony import */ var _errors_carto_validation_error__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../errors/carto-validation-error */ "./src/errors/carto-validation-error.js");





/**
 * Linearly interpolate from `a` to `b` based on `mix`.
 *
 * @param {Number|Color} a - Numeric or color expression, `a` type must match `b` type
 * @param {Number|Color} b - Numeric or color expression, `b` type must match `a` type
 * @param {Number} mix - Numeric expression with the interpolation parameter in the [0,1] range
 * @returns {Number|Color} Numeric or color expression with the same type as `a` and `b`
 *
 * @example <caption>Blend based on the zoom level to display a bubble map at high zoom levels and display fixed-sized points at low zoom levels.</caption>
 * const s = carto.expressions;
 * const viz = new carto.Viz({
 *   width: s.blend(3,
 *                  s.prop('dn'),
 *                  s.linear(s.zoom(), 10, 14))
 *           );
 * });
 *
 * @example <caption>Blend based on the zoom level to display a bubble map at high zoom levels and display fixed-sized points at low zoom levels. (String)</caption>
 * const viz = new carto.Viz(`
 *   width: blend(3,
 *                $dn,
 *                linear(zoom(), 10, 14)
 *          )
 * `);
 *
 * @memberof carto.expressions
 * @name blend
 * @function
 * @api
 */
class Blend extends _base__WEBPACK_IMPORTED_MODULE_2__["default"] {
    constructor (a, b, mix, interpolator) {
        Object(_utils__WEBPACK_IMPORTED_MODULE_0__["checkMaxArguments"])(arguments, 4, 'blend');
        a = Object(_utils__WEBPACK_IMPORTED_MODULE_0__["implicitCast"])(a);
        b = Object(_utils__WEBPACK_IMPORTED_MODULE_0__["implicitCast"])(b);
        mix = Object(_utils__WEBPACK_IMPORTED_MODULE_0__["implicitCast"])(mix);

        Object(_utils__WEBPACK_IMPORTED_MODULE_0__["checkExpression"])('blend', 'a', 0, a);
        Object(_utils__WEBPACK_IMPORTED_MODULE_0__["checkExpression"])('blend', 'b', 1, b);
        Object(_utils__WEBPACK_IMPORTED_MODULE_0__["checkExpression"])('blend', 'mix', 2, mix);

        if (a.type && b.type) {
            abTypeCheck(a, b);
        }

        // TODO check interpolator type
        const originalMix = mix;
        if (interpolator) {
            mix = interpolator(mix);
        }
        super({ a, b, mix });
        this.originalMix = originalMix;

        if (a.type && b.type) {
            this.type = a.type;
        }
        this.inlineMaker = inline => `mix(${inline.a}, ${inline.b}, clamp(${inline.mix}, 0., 1.))`;
    }
    eval (feature) {
        const a = Object(_utils__WEBPACK_IMPORTED_MODULE_0__["clamp"])(this.mix.eval(feature), 0, 1);
        const x = this.a.eval(feature);
        const y = this.b.eval(feature);
        return Object(_utils__WEBPACK_IMPORTED_MODULE_0__["mix"])(x, y, a);
    }
    replaceChild (toReplace, replacer) {
        if (toReplace === this.mix) {
            this.originalMix = replacer;
        }
        super.replaceChild(toReplace, replacer);
    }
    _bindMetadata (meta) {
        super._bindMetadata(meta);

        abTypeCheck(this.a, this.b);
        Object(_utils__WEBPACK_IMPORTED_MODULE_0__["checkType"])('blend', 'mix', 2, 'number', this.mix);

        this.type = this.a.type;
    }
    _preDraw (...args) {
        super._preDraw(...args);
        if (this.originalMix.isA(_transition__WEBPACK_IMPORTED_MODULE_1__["default"]) && !this.originalMix.isAnimated()) {
            this.parent.replaceChild(this, this.b);
            this.notify();
        }
    }
}

function abTypeCheck (a, b) {
    const validTypes = ['number', 'color', 'image', 'placement'];

    if (a.type !== b.type || !(validTypes.includes(a.type))) {
        throw new _errors_carto_validation_error__WEBPACK_IMPORTED_MODULE_3__["default"](`${_errors_carto_validation_error__WEBPACK_IMPORTED_MODULE_3__["CartoValidationTypes"].INCORRECT_TYPE} blend(): invalid parameter types\n\t'a' type was '${a.type}'\n\t'b' type was '${b.type}'`);
    }
}


/***/ }),

/***/ "./src/renderer/viz/expressions/buckets.js":
/*!*************************************************!*\
  !*** ./src/renderer/viz/expressions/buckets.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Buckets; });
/* harmony import */ var _base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./base */ "./src/renderer/viz/expressions/base.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils */ "./src/renderer/viz/expressions/utils.js");
/* harmony import */ var _errors_carto_validation_error__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../errors/carto-validation-error */ "./src/errors/carto-validation-error.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./constants */ "./src/renderer/viz/expressions/constants.js");





/**
 * Given a property create "sub-groups" based on the given breakpoints.
 *
 * This returns a number or category expression depending on the input values.
 *
 * @param {Number|Category} property - The property to be evaluated and interpolated
 * @param {Number[]|Category[]} breakpoints - Expression containing the different breakpoints.
 * @return {Number|Category}
 *
 * @example <caption>Display a traffic dataset in 4 colors depending on the numeric speed.</caption>
 * // Using the buckets `expression` we divide the dataset into 4 buckets according to the speed
 * // - From -inf to 29
 * // - From 30 to 79
 * // - From 80 to 119
 * // - From 120 to +inf
 * // Values lower than 0 will be in the first bucket and values higher than 120 will be in the last one.
 * const s = carto.expressions;
 * const viz = new carto.Viz({
 *    color: s.ramp(
 *      s.buckets(s.prop('speed'), [30, 80, 120]),
 *      s.palettes.PRISM
 *    )
 * });
 *
 * @example <caption>Display a traffic dataset in 4 colors depending on the numeric speed. (String)</caption>
 * // Using the buckets `expression` we divide the dataset into 4 buckets according to the speed
 * // - From -inf to 29
 * // - From 30 to 79
 * // - From 80 to 119
 * // - From 120 to +inf
 * // Values lower than 0 will be in the first bucket and values higher than 120 will be in the last one.
 * const viz = new carto.Viz(`
 *    color: ramp(buckets($speed, [30, 80, 120]), PRISM)
 * `);
 *
 * @example <caption>Display a traffic dataset is 3 colors depending on the category procesedSpeed.</caption>
 * const s = carto.expressions;
 * const viz = new carto.Viz({
 *   color: s.ramp(
 *     s.buckets(s.prop('procesedSpeed'), ['slow', 'medium', 'high']),
 *     s.palettes.PRISM)
 *   )
 * });
 *
 * @example <caption>Display a traffic dataset is 3 colors depending on the category procesedSpeed. (String)</caption>
 * const viz = new carto.Viz(`
 *    color: ramp(buckets($procesedSpeed, ['slow', 'medium', 'high']), PRISM)
 * `);
 *
 * @memberof carto.expressions
 * @name buckets
 * @function
 * @api
 */
class Buckets extends _base__WEBPACK_IMPORTED_MODULE_0__["default"] {
    constructor (input, list) {
        Object(_utils__WEBPACK_IMPORTED_MODULE_1__["checkMaxArguments"])(arguments, 2, 'buckets');

        input = Object(_utils__WEBPACK_IMPORTED_MODULE_1__["implicitCast"])(input);
        list = Object(_utils__WEBPACK_IMPORTED_MODULE_1__["implicitCast"])(list);

        let children = {
            input,
            list
        };

        super(children);
        this.numCategories = null;
        this.numCategoriesWithoutOthers = null;
        this.type = 'category';
    }

    eval (feature) {
        const v = this.input.eval(feature);
        const divisor = this.numCategoriesWithoutOthers - 1 || 1;

        if (this.input.type === 'category') {
            for (let i = 0; i < this.list.elems.length; i++) {
                if (v === this.list.elems[i].eval(feature)) {
                    return i / divisor;
                }
            }

            return _constants__WEBPACK_IMPORTED_MODULE_3__["OTHERS_INDEX"];
        }

        for (let i = 0; i < this.list.elems.length; i++) {
            if (v < this.list.elems[i].eval(feature)) {
                return i / divisor;
            }
        }

        return 1;
    }

    _bindMetadata (metadata) {
        super._bindMetadata(metadata);

        if (this.input.type !== 'number' && this.input.type !== 'category') {
            throw new _errors_carto_validation_error__WEBPACK_IMPORTED_MODULE_2__["default"](
                `${_errors_carto_validation_error__WEBPACK_IMPORTED_MODULE_2__["CartoValidationTypes"].INCORRECT_TYPE} buckets(): invalid first parameter type\n\t'input' type was ${this.input.type}`
            );
        }

        Object(_utils__WEBPACK_IMPORTED_MODULE_1__["checkType"])('buckets', 'list', 1, ['number-list', 'category-list'], this.list);

        this.list.elems.map((item, index) => {
            if (this.input.type !== item.type) {
                throw new _errors_carto_validation_error__WEBPACK_IMPORTED_MODULE_2__["default"](
                    `${_errors_carto_validation_error__WEBPACK_IMPORTED_MODULE_2__["CartoValidationTypes"].INCORRECT_TYPE} buckets(): invalid ${Object(_utils__WEBPACK_IMPORTED_MODULE_1__["getOrdinalFromIndex"])(index + 1)} parameter type` +
                    `\n\texpected type was ${this.input.type}\n\tactual type was ${item.type}`
                );
            } else if (item.type !== 'number' && item.type !== 'category') {
                throw new _errors_carto_validation_error__WEBPACK_IMPORTED_MODULE_2__["default"](
                    `${_errors_carto_validation_error__WEBPACK_IMPORTED_MODULE_2__["CartoValidationTypes"].INCORRECT_TYPE} buckets(): invalid ${Object(_utils__WEBPACK_IMPORTED_MODULE_1__["getOrdinalFromIndex"])(index + 1)} parameter type\n\ttype was ${item.type}`
                );
            }
        });

        this.numCategories = this.list.elems.length + 1;
        this.numCategoriesWithoutOthers = this.input.type === 'category' ? this.numCategories - 1 : this.numCategories;
    }

    _applyToShaderSource (getGLSLforProperty) {
        const childSourcesArray = this.childrenNames.map(name => this[name]._applyToShaderSource(getGLSLforProperty));
        let childSources = {};
        childSourcesArray.map((source, index) => {
            childSources[this.childrenNames[index]] = source;
        });

        const funcName = `buckets${this._uid}`;
        const cmp = this.input.type === 'category' ? '==' : '<';

        // When there is "OTHERS" we don't need to take it into account
        const divisor = this.numCategoriesWithoutOthers - 1 || 1;

        const elif = (_, index) =>
            `${index > 0 ? 'else' : ''} if (x${cmp}(${childSources.list.inline[index]})){
                return ${index}./${divisor.toFixed(20)};
            }`;
        const funcBody = this.list.elems.map(elif).join('');
        const preface = `float ${funcName}(float x){
            ${funcBody}
            return ${this.input.type === 'category' ? _constants__WEBPACK_IMPORTED_MODULE_3__["OTHERS_GLSL_VALUE"] : (this.numCategories - 1).toFixed(20)};
        }`;

        return {
            preface: this._prefaceCode(childSources.input.preface + childSources.list.preface + preface),
            inline: `${funcName}(${childSources.input.inline})`
        };
    }

    getLegendData (config) {
        const name = this.toString();
        const list = this.list.elems.map(elem => elem.eval());
        const data = this.input.type === 'number'
            ? _getLegendDataNumeric(list)
            : _getLegendDataCategory(list, config);

        return { data, name };
    }
}

function _getLegendDataNumeric (list) {
    const data = [];

    for (let i = 0; i <= list.length; i++) {
        const min = i - 1 >= 0 ? list[i - 1] : Number.NEGATIVE_INFINITY;
        const max = i < list.length ? list[i] : Number.POSITIVE_INFINITY;
        const key = [min, max];
        const value = i / list.length;
        data.push({ key, value });
    }

    return data;
}

function _getLegendDataCategory (list, config) {
    const divisor = list.length - 1;
    const data = list.map((category, index) => {
        const key = category;
        const value = index / divisor;

        return { key, value };
    });

    data.push({
        key: config.othersLabel,
        value: _constants__WEBPACK_IMPORTED_MODULE_3__["OTHERS_INDEX"]
    });

    return data;
}


/***/ }),

/***/ "./src/renderer/viz/expressions/classification/Classifier.js":
/*!*******************************************************************!*\
  !*** ./src/renderer/viz/expressions/classification/Classifier.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Classifier; });
/* harmony import */ var _base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../base */ "./src/renderer/viz/expressions/base.js");
/* harmony import */ var _expressions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../expressions */ "./src/renderer/viz/expressions.js");



let classifierUID = 0;
class Classifier extends _base__WEBPACK_IMPORTED_MODULE_0__["default"] {
    constructor (children, buckets) {
        if (buckets <= 1) {
            throw new RangeError(`The number of 'buckets' must be >=2, but ${buckets} was used.`);
        }
        const breakpoints = _genBreakpoints(children, buckets);

        super(children);
        this.classifierUID = classifierUID++;
        this.numCategories = buckets;
        this.numCategoriesWithoutOthers = buckets;
        this.breakpoints = breakpoints;
        this.type = 'category';
    }

    toString () {
        return `${this.expressionName}(${this.input.toString()}, ${this.numCategories})`;
    }

    eval (feature) {
        const input = this.input.eval(feature);
        const breakpoint = this.breakpoints.findIndex((br) => {
            return input <= br.expr;
        });

        const divisor = this.numCategories - 1 || 1;
        const index = breakpoint === -1 ? 1 : breakpoint / divisor;

        return index;
    }

    getBreakpointList () {
        this._genBreakpoints();
        return this.breakpoints.map(br => br.expr);
    }

    _genBreakpoints () {}

    _applyToShaderSource (getGLSLforProperty) {
        const childSources = this.childrenNames.map(name => this[name]._applyToShaderSource(getGLSLforProperty));
        let childInlines = {};
        childSources.map((source, index) => {
            childInlines[this.childrenNames[index]] = source.inline;
        });
        const funcName = `classifier${this.classifierUID}`;
        const divisor = this.numCategories - 1 || 1;
        const elif = (_, index) =>
            `${index > 0 ? 'else' : ''} if (x<(${childInlines[`arg${index}`]})){
                return ${(index / divisor).toFixed(20)};
            }`;
        const funcBody = this.breakpoints.map(elif).join('');
        const preface = `float ${funcName}(float x){
            ${funcBody}
            return 1.;
        }`;
        return {
            preface: this._prefaceCode(childSources.map(s => s.preface).reduce((a, b) => a + b, '') + preface),
            inline: `${funcName}(${childInlines.input})`
        };
    }

    _preDraw (program, drawMetadata, gl) {
        this._genBreakpoints();
        super._preDraw(program, drawMetadata, gl);
    }

    getLegendData () {
        const breakpoints = this.getBreakpointList();
        const breakpointsLength = breakpoints.length;
        const name = this.toString();
        const data = [];

        for (let i = 0; i <= breakpointsLength; i++) {
            const min = breakpoints[i - 1] || Number.NEGATIVE_INFINITY;
            const max = breakpoints[i] || Number.POSITIVE_INFINITY;
            const key = [min, max];
            const value = i / breakpointsLength;
            data.push({key, value});
        }

        return { name, data };
    }
}

function _genBreakpoints (children, buckets) {
    const breakpoints = [];

    for (let i = 0; i < buckets - 1; i++) {
        children[`arg${i}`] = Object(_expressions__WEBPACK_IMPORTED_MODULE_1__["number"])(0);
        breakpoints.push(children[`arg${i}`]);
    }

    return breakpoints;
}


/***/ }),

/***/ "./src/renderer/viz/expressions/classification/GlobalEqIntervals.js":
/*!**************************************************************************!*\
  !*** ./src/renderer/viz/expressions/classification/GlobalEqIntervals.js ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return GlobalEqIntervals; });
/* harmony import */ var _Classifier__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Classifier */ "./src/renderer/viz/expressions/classification/Classifier.js");
/* harmony import */ var _basic_property__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../basic/property */ "./src/renderer/viz/expressions/basic/property.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils */ "./src/renderer/viz/expressions/utils.js");




/**
 * Classify `input` by using the equal intervals method with `n` buckets.
 *
 * It will classify the input based on the entire dataset without filtering by viewport or by `filter`.
 *
 * @param {Number} input - The input expression to classify
 * @param {number} n - Number of buckets
 * @return {Category}
 *
 * @example <caption>Use global equal intervals to define a color ramp.</caption>
 * const s = carto.expressions;
 * const viz = new carto.Viz({
 *   color: s.ramp(s.globalEqIntervals(s.prop('density'), 5), s.palettes.PRISM)
 * });
 *
 * @example <caption>Use global equal intervals to define a color ramp. (String)</caption>
 * const viz = new carto.Viz(`
 *   color: ramp(globalEqIntervals($density, 5), PRISM)
 * `);
 *
 * @memberof carto.expressions
 * @name globalEqIntervals
 * @function
 * @api
 */
class GlobalEqIntervals extends _Classifier__WEBPACK_IMPORTED_MODULE_0__["default"] {
    constructor (input, buckets) {
        Object(_utils__WEBPACK_IMPORTED_MODULE_2__["checkMaxArguments"])(arguments, 2, 'globalEqIntervals');
        Object(_utils__WEBPACK_IMPORTED_MODULE_2__["checkInstance"])('globalEqIntervals', 'input', 0, _basic_property__WEBPACK_IMPORTED_MODULE_1__["default"], input && (input.property || input));
        Object(_utils__WEBPACK_IMPORTED_MODULE_2__["checkNumber"])('globalEqIntervals', 'buckets', 1, buckets);

        super({ input }, buckets);
    }

    _bindMetadata (metadata) {
        super._bindMetadata(metadata);
        Object(_utils__WEBPACK_IMPORTED_MODULE_2__["checkExpression"])('globalEqIntervals', 'input', 0, this.input);
        Object(_utils__WEBPACK_IMPORTED_MODULE_2__["checkType"])('globalEqIntervals', 'input', 0, 'number', this.input);
        const { min, max } = metadata.properties[this.input.name];
        this.min = min;
        this.max = max;
        this.breakpoints.map((breakpoint, index) => {
            const p = (index + 1) / this.numCategories;
            breakpoint.expr = min + (max - min) * p;
        });
    }
}


/***/ }),

/***/ "./src/renderer/viz/expressions/classification/GlobalQuantiles.js":
/*!************************************************************************!*\
  !*** ./src/renderer/viz/expressions/classification/GlobalQuantiles.js ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return GlobalQuantiles; });
/* harmony import */ var _Classifier__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Classifier */ "./src/renderer/viz/expressions/classification/Classifier.js");
/* harmony import */ var _basic_property__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../basic/property */ "./src/renderer/viz/expressions/basic/property.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils */ "./src/renderer/viz/expressions/utils.js");




/**
 * Classify `input` by using the quantiles method with `n` buckets.
 *
 * It will classify the input based on the entire dataset without filtering by viewport or by `filter`.
 *
 * @param {Number} input - The input expression used in the quantiles
 * @param {number} n - Number of buckets to be returned
 * @return {Category}
 *
 * @example <caption>Use global quantiles to define a color ramp.</caption>
 * const s = carto.expressions;
 * const viz = new carto.Viz({
 *   color: s.ramp(s.globalQuantiles(s.prop('density'), 5), s.palettes.CB_REDS)
 * });
 *
 * @example <caption>Use global quantiles to define a color ramp. (String)</caption>
 * const viz = new carto.Viz(`
 *   color: ramp(globalQuantiles($density, 5), CB_REDS)
 * `);
 *
 * @memberof carto.expressions
 * @name globalQuantiles
 * @function
 * @api
 */
class GlobalQuantiles extends _Classifier__WEBPACK_IMPORTED_MODULE_0__["default"] {
    constructor (input, buckets) {
        Object(_utils__WEBPACK_IMPORTED_MODULE_2__["checkMaxArguments"])(arguments, 2, 'globalQuantiles');
        Object(_utils__WEBPACK_IMPORTED_MODULE_2__["checkInstance"])('globalQuantiles', 'input', 0, _basic_property__WEBPACK_IMPORTED_MODULE_1__["default"], input && (input.property || input));
        Object(_utils__WEBPACK_IMPORTED_MODULE_2__["checkNumber"])('globalQuantiles', 'buckets', 1, buckets);
        super({ input }, buckets);
    }

    _bindMetadata (metadata) {
        super._bindMetadata(metadata);
        Object(_utils__WEBPACK_IMPORTED_MODULE_2__["checkExpression"])('globalQuantiles', 'input', 0, this.input);
        Object(_utils__WEBPACK_IMPORTED_MODULE_2__["checkType"])('globalQuantiles', 'input', 0, 'number', this.input);

        const copy = metadata.sample.map(s => s[this.input.name]);

        copy.sort((x, y) => x - y);

        this.breakpoints.map((breakpoint, index) => {
            const p = (index + 1) / this.numCategories;
            breakpoint.expr = copy[Math.floor(p * copy.length)];
        });
    }
}


/***/ }),

/***/ "./src/renderer/viz/expressions/classification/GlobalStandardDev.js":
/*!**************************************************************************!*\
  !*** ./src/renderer/viz/expressions/classification/GlobalStandardDev.js ***!
  \**************************************************************************/
/*! exports provided: default, calculateBreakpoints */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return GlobalStandardDev; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "calculateBreakpoints", function() { return calculateBreakpoints; });
/* harmony import */ var _Classifier__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Classifier */ "./src/renderer/viz/expressions/classification/Classifier.js");
/* harmony import */ var _basic_property__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../basic/property */ "./src/renderer/viz/expressions/basic/property.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils */ "./src/renderer/viz/expressions/utils.js");
/* harmony import */ var _stats__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../stats */ "./src/renderer/viz/expressions/stats.js");





/**
 * Classify `input` by using the Mean-Standard Deviation method with `n` buckets.
 *
 * It will classify the input based on the entire dataset without filtering by viewport or by `filter`.
 *
 * It uses average and standard deviation (population formula) to classify the dataset.
 * When using an odd number of buckets, the central class has a double size (classSize * 2), to honour the number of required buckets
 *
 * This method is suitable if data are normally (or near normal) distributed, and it is specially
 * appropiated for diverging datasets, which can be well displayed using a diverging color scheme like TEALROSE
 *
 * @param {Number} input - The input expression to classify
 * @param {number} n - Number of buckets
 * @param {number?} classSize - Optional. The class size, defaults to 1.0 standard deviation (usual values are also 0.5 or 0.25)
 * @return {Category}
 *
 * @example <caption>Use global mean-standard deviation to define a color ramp.</caption>
 * const s = carto.expressions;
 * const viz = new carto.Viz({
 *   color: s.ramp(s.globalStandardDev(s.prop('density'), 5), s.palettes.TEALROSE)
 * });
 *
 * @example <caption>Use global mean-standard deviation to define a color ramp. (String)</caption>
 * const viz = new carto.Viz(`
 *   color: ramp(globalStandardDev($density, 5), TEALROSE)
 * `);
 *
 * @example <caption>Use global custom mean-standard deviation to define a color ramp.</caption>
 * const s = carto.expressions;
 * const viz = new carto.Viz({
 *   color: s.ramp(s.globalStandardDev(s.prop('density'), 7, 0.5), s.palettes.TEALROSE)
 * });
 *
 * @example <caption>Use global custom mean-standard deviation to define a color ramp. (String)</caption>
 * const viz = new carto.Viz(`
 *   color: ramp(globalStandardDev($density, 7, 0.5), TEALROSE)
 * `);
 *
 * @memberof carto.expressions
 * @name globalStandardDev
 * @function
 * @api
 */
class GlobalStandardDev extends _Classifier__WEBPACK_IMPORTED_MODULE_0__["default"] {
    constructor (input, buckets, classSize = 1.0) {
        Object(_utils__WEBPACK_IMPORTED_MODULE_2__["checkMaxArguments"])(arguments, 3, 'globalStandardDev');
        Object(_utils__WEBPACK_IMPORTED_MODULE_2__["checkInstance"])('globalStandardDev', 'input', 0, _basic_property__WEBPACK_IMPORTED_MODULE_1__["default"], input && (input.property || input));
        Object(_utils__WEBPACK_IMPORTED_MODULE_2__["checkNumber"])('globalStandardDev', 'buckets', 1, buckets);
        Object(_utils__WEBPACK_IMPORTED_MODULE_2__["checkNumber"])('globalStandardDev', 'classSize', 2, classSize);

        if (classSize <= 0) {
            throw new RangeError(`The 'classSize must be > 0.0, but '${classSize}' was used.`);
        }

        super({ input }, buckets);
        this._classSize = classSize;
        this._sample = [];
    }

    _bindMetadata (metadata) {
        super._bindMetadata(metadata);
        Object(_utils__WEBPACK_IMPORTED_MODULE_2__["checkExpression"])('globalStandardDev', 'input', 0, this.input);
        Object(_utils__WEBPACK_IMPORTED_MODULE_2__["checkType"])('globalStandardDev', 'input', 0, 'number', this.input);

        const sample = metadata.sample.map(s => s[this.input.name]);
        const avg = Object(_stats__WEBPACK_IMPORTED_MODULE_3__["average"])(sample);
        const standardDev = Object(_stats__WEBPACK_IMPORTED_MODULE_3__["standardDeviation"])(sample);
        const breaks = calculateBreakpoints(avg, standardDev, this.numCategories, this._classSize);

        this.breakpoints.forEach((breakpoint, index) => {
            breakpoint.expr = breaks[index];
        });
    }
}

/**
 * Calculate breakpoints according to mean-standard deviation process
 *
 * @export
 * @param {Number} avg - average
 * @param {Number} stDev - standard deviation
 * @param {Number} buckets - number of buckets
 * @param {Number} classSize - in standard deviation units (usually 1.0, 0.5, 0.25...)
 * @returns {Number[]}
 */
function calculateBreakpoints (avg, stDev, buckets, classSize) {
    let breaks;
    let over = [];
    let under = [];
    const isEven = buckets % 2 === 0;
    let factor = isEven ? 0.0 : 1.0; // if odd, central class is double sized
    do {
        const step = factor * (stDev * classSize);
        over.push(avg + step);
        under.push(avg - step);
        breaks = [...new Set(over.concat(under))];
        breaks.sort((a, b) => a - b);
        factor++;
    } while (breaks.length < buckets - 1);

    return breaks;
}


/***/ }),

/***/ "./src/renderer/viz/expressions/classification/ViewportEqIntervals.js":
/*!****************************************************************************!*\
  !*** ./src/renderer/viz/expressions/classification/ViewportEqIntervals.js ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ViewportEqIntervals; });
/* harmony import */ var _Classifier__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Classifier */ "./src/renderer/viz/expressions/classification/Classifier.js");
/* harmony import */ var _expressions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../expressions */ "./src/renderer/viz/expressions.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils */ "./src/renderer/viz/expressions/utils.js");




/**
 * Classify `input` by using the equal intervals method with `n` buckets.
 *
 * It will classify the input based on the filtered dataset, filtering by viewport and by `filter`.
 *
 * @param {Number} input - The input expression to classify
 * @param {number} n - Number of buckets
 * @return {Category}
 *
 * @example <caption>Use viewport equal intervals to define a color ramp.</caption>
 * const s = carto.expressions;
 * const viz = new carto.Viz({
 *   color: s.ramp(s.viewportEqIntervals(s.prop('density'), 5), s.palettes.PRISM)
 * });
 *
 * @example <caption>Use viewport equal intervals to define a color ramp. (String)</caption>
 * const viz = new carto.Viz(`
 *   color: ramp(viewportEqIntervals($density, 5), PRISM)
 * `);
 *
 * @memberof carto.expressions
 * @name viewportEqIntervals
 * @function
 * @api
 */
class ViewportEqIntervals extends _Classifier__WEBPACK_IMPORTED_MODULE_0__["default"] {
    constructor (input, buckets) {
        Object(_utils__WEBPACK_IMPORTED_MODULE_2__["checkMaxArguments"])(arguments, 2, 'viewportEqIntervals');
        Object(_utils__WEBPACK_IMPORTED_MODULE_2__["checkNumber"])('viewportEqIntervals', 'buckets', 1, buckets);

        const children = { input, _min: Object(_expressions__WEBPACK_IMPORTED_MODULE_1__["viewportMin"])(input), _max: Object(_expressions__WEBPACK_IMPORTED_MODULE_1__["viewportMax"])(input) };
        super(children, buckets);
    }

    _bindMetadata (metadata) {
        super._bindMetadata(metadata);
        Object(_utils__WEBPACK_IMPORTED_MODULE_2__["checkType"])('viewportEqIntervals', 'input', 0, ['number'], this.input);
    }

    _genBreakpoints () {
        const min = this._min.eval();
        const max = this._max.eval();

        this.breakpoints.map((breakpoint, index) => {
            const p = (index + 1) / this.numCategories;
            breakpoint.expr = min + (max - min) * p;
        });
    }
}


/***/ }),

/***/ "./src/renderer/viz/expressions/classification/ViewportQuantiles.js":
/*!**************************************************************************!*\
  !*** ./src/renderer/viz/expressions/classification/ViewportQuantiles.js ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ViewportQuantiles; });
/* harmony import */ var _Classifier__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Classifier */ "./src/renderer/viz/expressions/classification/Classifier.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils */ "./src/renderer/viz/expressions/utils.js");
/* harmony import */ var _expressions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../expressions */ "./src/renderer/viz/expressions.js");




/**
 * Classify `input` by using the quantiles method with `n` buckets.
 *
 * It will classify the input based on the filtered dataset, filtering by viewport and by `filter`.
 *
 * @param {Number} input - The input expression used in the quantiles
 * @param {number} n - Number of buckets to be returned
 * @return {Category}
 *
 * @example <caption>Use viewportQuantiles to define a color ramp.</caption>
 * const s = carto.expressions;
 * const viz = new carto.Viz({
 *   color: s.ramp(s.viewportQuantiles(s.prop('density'), 5), s.palettes.PRISM)
 * });
 *
 * @example <caption>Use viewportQuantiles to define a color ramp. (String)</caption>
 * const viz = new carto.Viz(`
 *   color: ramp(viewportQuantiles($density, 5), PRISM)
 * `);
 *
 * @memberof carto.expressions
 * @name viewportQuantiles
 * @function
 * @api
 */
class ViewportQuantiles extends _Classifier__WEBPACK_IMPORTED_MODULE_0__["default"] {
    constructor (input, buckets) {
        Object(_utils__WEBPACK_IMPORTED_MODULE_1__["checkMaxArguments"])(arguments, 2, 'viewportQuantiles');
        Object(_utils__WEBPACK_IMPORTED_MODULE_1__["checkNumber"])('viewportQuantiles', 'buckets', 1, buckets);

        const children = { input, _histogram: Object(_expressions__WEBPACK_IMPORTED_MODULE_2__["viewportHistogram"])(input) };
        super(children, buckets);
    }

    _bindMetadata (metadata) {
        super._bindMetadata(metadata);
        Object(_utils__WEBPACK_IMPORTED_MODULE_1__["checkType"])('viewportQuantiles', 'input', 0, ['number'], this.input);
    }

    _genBreakpoints () {
        const hist = this._histogram.value;

        const histogramBuckets = hist.length;
        const min = hist[0].x[0];
        const max = hist[histogramBuckets - 1].x[1];

        let prev = 0;
        const accumHistogram = hist.map(({ y }) => {
            prev += y;
            return prev;
        });

        let i = 0;
        const total = accumHistogram[histogramBuckets - 1];
        let brs = [];
        // TODO OPT: this could be faster with binary search
        this.breakpoints.map((breakpoint, index) => {
            for (i; i < histogramBuckets; i++) {
                if (accumHistogram[i] > (index + 1) / this.numCategories * total) {
                    break;
                }
            }
            const percentileValue = i / histogramBuckets * (max - min) + min;
            brs.push(percentileValue);
            breakpoint.expr = percentileValue;
        });
    }
}


/***/ }),

/***/ "./src/renderer/viz/expressions/classification/ViewportStandardDev.js":
/*!****************************************************************************!*\
  !*** ./src/renderer/viz/expressions/classification/ViewportStandardDev.js ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ViewportStandardDev; });
/* harmony import */ var _Classifier__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Classifier */ "./src/renderer/viz/expressions/classification/Classifier.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils */ "./src/renderer/viz/expressions/utils.js");
/* harmony import */ var _expressions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../expressions */ "./src/renderer/viz/expressions.js");
/* harmony import */ var _GlobalStandardDev__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./GlobalStandardDev */ "./src/renderer/viz/expressions/classification/GlobalStandardDev.js");





/**
 * Classify `input` by using the Mean-Standard Deviation method with `n` buckets.
 *
 * It will classify the input based on the filtered dataset, filtering by viewport and by `filter`.
 *
 * It uses average and standard deviation (population formula) to classify the dataset.
 * When using an odd number of buckets, the central class has a double size (classSize * 2), to honour the number of required buckets
 *
 * This method is suitable if data are normally (or near normal) distributed, and it is specially
 * appropiated for diverging datasets, which can be well displayed using a diverging color scheme like TEALROSE
 *
 *
 * @param {Number} input - The input expression to classify
 * @param {number} n - Number of buckets
 * @param {number?} classSize - Optional. The class size, defaults to 1.0 standard deviation (usual values are also 0.5 or 0.25)
 * @return {Category}
 *
 * @example <caption>Use viewport mean-standard deviation to define a color ramp.</caption>
 * const s = carto.expressions;
 * const viz = new carto.Viz({
 *   color: s.ramp(s.viewportStandardDev(s.prop('density'), 5), s.palettes.TEALROSE)
 * });
 *
 * @example <caption>Use viewport mean-standard deviation to define a color ramp. (String)</caption>
 * const viz = new carto.Viz(`
 *   color: ramp(viewportStandardDev($density, 5), tealrose)
 * `);
 *
 * @example <caption>Use viewport custom mean-standard deviation to define a color ramp.</caption>
 * const s = carto.expressions;
 * const viz = new carto.Viz({
 *   color: s.ramp(s.viewportStandardDev(s.prop('density'), 7, 0.5), s.palettes.TEALROSE)
 * });
 *
 * @example <caption>Use viewport custom mean-standard deviation to define a color ramp. (String)</caption>
 * const viz = new carto.Viz(`
 *   color: ramp(viewportStandardDev($density, 7, 0.5), tealrose)
 * `);
 *
 * @memberof carto.expressions
 * @name viewportStandardDev
 * @function
 * @api
 */

class ViewportStandardDev extends _Classifier__WEBPACK_IMPORTED_MODULE_0__["default"] {
    constructor (input, buckets, classSize = 1.0) {
        Object(_utils__WEBPACK_IMPORTED_MODULE_1__["checkMaxArguments"])(arguments, 3, 'viewportStandardDev');
        Object(_utils__WEBPACK_IMPORTED_MODULE_1__["checkNumber"])('viewportStandardDev', 'buckets', 1, buckets);
        Object(_utils__WEBPACK_IMPORTED_MODULE_1__["checkNumber"])('viewportStandardDev', 'classSize', 2, classSize);

        if (classSize <= 0) {
            throw new RangeError(`The 'classSize' must be > 0.0, but '${classSize}' was used.`);
        }

        const children = { input, _histogram: Object(_expressions__WEBPACK_IMPORTED_MODULE_2__["viewportHistogram"])(input) };
        super(children, buckets);
        this._classSize = classSize;
    }

    _bindMetadata (metadata) {
        super._bindMetadata(metadata);
        Object(_utils__WEBPACK_IMPORTED_MODULE_1__["checkType"])('viewportStandardDev', 'input', 0, ['number'], this.input);
    }

    _genBreakpoints () {
        const avg = this._averageFrom(this._histogram.value);
        const stdev = this._standardDevFrom(this._histogram.value, avg);
        const breaks = Object(_GlobalStandardDev__WEBPACK_IMPORTED_MODULE_3__["calculateBreakpoints"])(avg, stdev, this.numCategories, this._classSize);

        this.breakpoints.forEach((breakpoint, index) => {
            breakpoint.expr = breaks[index];
        });
    }

    _averageFrom (histogram) {
        let sumFrequencies = 0.0;
        let sumMidValueFrequencies = 0.0;
        histogram.forEach(({ x, y }) => {
            sumFrequencies += y;

            const midValue = (x[0] + x[1]) / 2.0;
            sumMidValueFrequencies += midValue * y;
        });

        const avg = sumMidValueFrequencies / sumFrequencies;
        return avg;
    }

    _standardDevFrom (histogram, average) {
        let sumFrequencies = 0.0;
        let sumPowDifferences = 0.0;
        histogram.forEach(({ x, y }) => {
            sumFrequencies += y;

            const midValue = (x[0] + x[1]) / 2.0;
            const diff = (midValue - average);
            sumPowDifferences += y * diff * diff;
        });

        const variance = sumPowDifferences / sumFrequencies;
        return Math.sqrt(variance);
    }
}


/***/ }),

/***/ "./src/renderer/viz/expressions/color/CIELab.glsl":
/*!********************************************************!*\
  !*** ./src/renderer/viz/expressions/color/CIELab.glsl ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#ifndef CIELAB_TO_SRGBA\n#define CIELAB_TO_SRGBA\n\nconst mat3 XYZ_2_RGB = (mat3(\n    3.2404542,-1.5371385,-0.4985314,\n    -0.9692660, 1.8760108, 0.0415560,\n    0.0556434,-0.2040259, 1.0572252\n));\nconst float SRGB_GAMMA = 1.0 / 2.2;\n\nvec3 rgb_to_srgb_approx(vec3 rgb) {\n    return pow(rgb, vec3(SRGB_GAMMA));\n}\n\nfloat f1(float t){\n    const float sigma = 6./29.;\n    if (t>sigma){\n        return t*t*t;\n    }else{\n        return 3.*sigma*sigma*(t-4./29.);\n    }\n}\n\nvec3 cielabtoxyz(vec3 c) {\n    const float xn = 95.047/100.;\n    const float yn = 100./100.;\n    const float zn = 108.883/100.;\n    return vec3(xn*f1((c.x+16.)/116.  + c.y/500. ),\n                yn*f1((c.x+16.)/116.),\n                zn*f1((c.x+16.)/116.  - c.z/200. )\n            );\n}\n\nvec3 xyztorgb(vec3 c){\n    return c * XYZ_2_RGB;\n}\n\nvec3 xyztosrgb(vec3 c) { // FIXME naming\n    return rgb_to_srgb_approx(xyztorgb(c));\n}\n\nvec4 cielabToSRGBA(vec4 cielab){\n    return vec4(xyztosrgb(cielabtoxyz(\n        vec3(\n            clamp(cielab.r, 0., 100.),\n            clamp(cielab.g, -128., 128.),\n            clamp(cielab.b, -128., 128.)\n        )\n    )), cielab.a);\n}\n#endif\n\n\n#ifndef SRGBA_TO_CIELAB\n#define SRGBA_TO_CIELAB\nvec4 sRGBToXYZ (vec4 srgba);\nvec4 sRGBToLinearRGB (vec4 srgba);\nfloat inverseGammaCorrection(float t);\nvec4 XYZToCieLab (vec4 xyza);\nfloat XYZToCieLabAux(float t);\n\nvec4 sRGBAToCieLAB(vec4 srgba){\n    return XYZToCieLab(sRGBToXYZ(srgba));\n}\n\n// Convert sRGB to CIE XYZ with the D65 white point\nvec4 sRGBToXYZ (vec4 srgba) {\n    // Poynton, \"Frequently Asked Questions About Color,\" page 10\n    // Wikipedia: http://en.wikipedia.org/wiki/SRGB\n    // Wikipedia: http://en.wikipedia.org/wiki/CIE_1931_color_space\n    vec4 rgba = sRGBToLinearRGB(srgba);\n    return vec4(\n        (0.4123955889674142161 * rgba.r + 0.3575834307637148171 * rgba.g + 0.1804926473817015735 * rgba.b),\n        (0.2125862307855955516 * rgba.r + 0.7151703037034108499 * rgba.g + 0.07220049864333622685 * rgba.b),\n        (0.01929721549174694484 * rgba.r + 0.1191838645808485318 * rgba.g + 0.9504971251315797660 * rgba.b),\n        rgba.a\n    );\n}\n\nvec4 sRGBToLinearRGB (vec4 srgba) {\n    // http://en.wikipedia.org/wiki/SRGB\n    return vec4(\n        inverseGammaCorrection(srgba.r),\n        inverseGammaCorrection(srgba.g),\n        inverseGammaCorrection(srgba.b),\n        srgba.a\n    );\n}\n\nfloat inverseGammaCorrection(float t) {\n    return t <= 0.0404482362771076 ? t / 12.92 : pow((t + 0.055) / 1.055, 2.4);\n}\n\n\nfloat WHITEPOINT_D65_X = 0.950456;\nfloat WHITEPOINT_D65_Y = 1.0;\nfloat WHITEPOINT_D65_Z = 1.088754;\n\n// Convert CIE XYZ to CIE L*a*b* (CIELAB) with the D65 white point\nvec4 XYZToCieLab (vec4 xyza) {\n    // Wikipedia: http://en.wikipedia.org/wiki/Lab_color_space\n\n    float xn = WHITEPOINT_D65_X;\n    float yn = WHITEPOINT_D65_Y;\n    float zn = WHITEPOINT_D65_Z;\n\n    return vec4(\n        116. * XYZToCieLabAux(xyza.y / yn) - 16.,\n        500. * (XYZToCieLabAux(xyza.x / xn) - XYZToCieLabAux(xyza.y / yn)),\n        200. * (XYZToCieLabAux(xyza.y / yn) - XYZToCieLabAux(xyza.z / zn)),\n        xyza.a\n    );\n}\n\nfloat XYZToCieLabAux(float t) {\n    return t >= 8.85645167903563082e-3\n            ? pow(t, 0.333333333333333) : (841.0 / 108.0) * t + 4.0 / 29.0;\n}\n\n#endif\n"

/***/ }),

/***/ "./src/renderer/viz/expressions/color/CIELab.js":
/*!******************************************************!*\
  !*** ./src/renderer/viz/expressions/color/CIELab.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return CIELab; });
/* harmony import */ var _base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../base */ "./src/renderer/viz/expressions/base.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils */ "./src/renderer/viz/expressions/utils.js");
/* harmony import */ var _CIELab_glsl__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./CIELab.glsl */ "./src/renderer/viz/expressions/color/CIELab.glsl");
/* harmony import */ var _CIELab_glsl__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_CIELab_glsl__WEBPACK_IMPORTED_MODULE_2__);




/**
 * Evaluates to a CIELab color.
 *
 * @param {Number} l - The lightness of the color
 * @param {Number} a - The green–red color component
 * @param {Number} b - The blue–yellow color component
 * @return {Color}
 *
 * @example <caption>Display blue points.</caption>
 * const s = carto.expressions;
 * const viz = new carto.Viz({
 *   color: s.cielab(32.3, 79.2, -107.86)
 * });
 *
 * @example <caption>Display blue points. (String)</caption>
 * const viz = new carto.Viz(`
 *   color: cielab(32.3, 79.2, -107.86)
 * `);
 *
 * @memberof carto.expressions
 * @name cielab
 * @function
 * @api
 */
class CIELab extends _base__WEBPACK_IMPORTED_MODULE_0__["default"] {
    constructor (l, a, b) {
        Object(_utils__WEBPACK_IMPORTED_MODULE_1__["checkMaxArguments"])(arguments, 3, 'cielab');
        l = Object(_utils__WEBPACK_IMPORTED_MODULE_1__["implicitCast"])(l);
        a = Object(_utils__WEBPACK_IMPORTED_MODULE_1__["implicitCast"])(a);
        b = Object(_utils__WEBPACK_IMPORTED_MODULE_1__["implicitCast"])(b);

        Object(_utils__WEBPACK_IMPORTED_MODULE_1__["checkExpression"])('cielab', 'l', 0, l);
        Object(_utils__WEBPACK_IMPORTED_MODULE_1__["checkExpression"])('cielab', 'a', 1, a);
        Object(_utils__WEBPACK_IMPORTED_MODULE_1__["checkExpression"])('cielab', 'b', 2, b);

        super({ l, a, b });
        this.type = 'color';

        this._setGenericGLSL(inline =>
            `cielabToSRGBA(vec4(${inline.l}, ${inline.a}, ${inline.b}, 1.))`
            , _CIELab_glsl__WEBPACK_IMPORTED_MODULE_2___default.a);
    }
    // TODO EVAL

    _bindMetadata (meta) {
        super._bindMetadata(meta);
        Object(_utils__WEBPACK_IMPORTED_MODULE_1__["checkType"])('cielab', 'l', 0, 'number', this.l);
        Object(_utils__WEBPACK_IMPORTED_MODULE_1__["checkType"])('cielab', 'a', 1, 'number', this.a);
        Object(_utils__WEBPACK_IMPORTED_MODULE_1__["checkType"])('cielab', 'b', 2, 'number', this.b);
    }
}


/***/ }),

/***/ "./src/renderer/viz/expressions/color/NamedColor.js":
/*!**********************************************************!*\
  !*** ./src/renderer/viz/expressions/color/NamedColor.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return NamedColor; });
/* harmony import */ var _base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../base */ "./src/renderer/viz/expressions/base.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils */ "./src/renderer/viz/expressions/utils.js");
/* harmony import */ var _cssColorNames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./cssColorNames */ "./src/renderer/viz/expressions/color/cssColorNames.js");
/* harmony import */ var _errors_carto_validation_error__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../errors/carto-validation-error */ "./src/errors/carto-validation-error.js");





/**
 * Create a color from its name.
 *
 * @param {string} name - The name of the color
 * @return {Color}
 *
 * @example <caption>Display blue points.</caption>
 * const s = carto.expressions;
 * const viz = new carto.Viz({
 *   color: s.namedColor('blue')  // Equivalent to `color: 'blue'`
 * });
 *
 * @example <caption>Display blue points. (String)</caption>
 * const viz = new carto.Viz(`
 *   color: blue  // Equivalent to namedColor('blue')
 * `);
 *
 * @memberof carto.expressions
 * @name namedColor
 * @function
 * @api
 */
class NamedColor extends _base__WEBPACK_IMPORTED_MODULE_0__["default"] {
    constructor (colorName) {
        Object(_utils__WEBPACK_IMPORTED_MODULE_1__["checkMaxArguments"])(arguments, 1, 'namedColor');
        Object(_utils__WEBPACK_IMPORTED_MODULE_1__["checkString"])('namedColor', 'colorName', 0, colorName);

        if (!_cssColorNames__WEBPACK_IMPORTED_MODULE_2__["CSS_COLOR_NAMES"].includes(colorName.toLowerCase())) {
            const preface = Object(_utils__WEBPACK_IMPORTED_MODULE_1__["getStringErrorPreface"])('namedColor', 'colorName', 0);
            throw new _errors_carto_validation_error__WEBPACK_IMPORTED_MODULE_3__["default"](`${_errors_carto_validation_error__WEBPACK_IMPORTED_MODULE_3__["CartoValidationTypes"].INCORRECT_VALUE} ${preface}\nInvalid color name:  '${colorName}'`);
        }
        super({});
        this.type = 'color';
        this.name = colorName;
        this.expressionName = colorName;
        this.color = _nameToRGBA(this.name);
        this.inlineMaker = () => `vec4(${(this.color.r / 255).toFixed(4)}, ${(this.color.g / 255).toFixed(4)}, ${(this.color.b / 255).toFixed(4)}, ${(1).toFixed(4)})`;
    }

    get value () {
        return this.eval();
    }

    eval () {
        return this.color;
    }

    toString () {
        return this.expressionName;
    }
}

const nameToRGBACache = {};

function _nameToRGBA (name) {
    if (nameToRGBACache[name]) {
        return nameToRGBACache[name];
    }
    const colorRegex = /^rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*(\d+(?:\.\d+)?))?\)$/;
    const fakeDiv = document.createElement('div');
    fakeDiv.style.backgroundColor = name;
    document.body.appendChild(fakeDiv);
    const rgbSring = getComputedStyle(fakeDiv).backgroundColor;
    document.body.removeChild(fakeDiv);

    const match = colorRegex.exec(rgbSring);

    const color = { r: Number(match[1]), g: Number(match[2]), b: Number(match[3]), a: match[4] || 1 };

    nameToRGBACache[name] = color;
    return color;
}


/***/ }),

/***/ "./src/renderer/viz/expressions/color/Opacity.js":
/*!*******************************************************!*\
  !*** ./src/renderer/viz/expressions/color/Opacity.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Opacity; });
/* harmony import */ var _base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../base */ "./src/renderer/viz/expressions/base.js");
/* harmony import */ var _expressions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../expressions */ "./src/renderer/viz/expressions.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils */ "./src/renderer/viz/expressions/utils.js");




/**
 * Override the input color opacity.
 *
 * @param {Color} color - Color expression to apply the opacity
 * @param {Number} alpha - Number expression with the alpha (transparency) value
 * @return {Color}
 *
 * @example <caption>Display blue points with 50% opacity.</caption>
 * const s = carto.expressions;
 * const viz = new carto.Viz({
 *   color: s.opacity(s.rgb(0,0,255), 0.5)  // Equivalent to `s.rgba(0,0,255,0.5)`
 * });
 *
 * @example <caption>Display blue points with 50% opacity. (String)</caption>
 * const viz = new carto.Viz(`
 *   color: opacity(rgb(0,0,255), 0.5) // Equivalent to `rgba(0,0,255,0.5)`
 * `);
 *
 * @memberof carto.expressions
 * @name opacity
 * @function
 * @api
 */
class Opacity extends _base__WEBPACK_IMPORTED_MODULE_0__["default"] {
    /**
     * @description Override the input color opacity
     * @param {*} color input color
     * @param {*} alpha new opacity
     */
    constructor (color, alpha) {
        Object(_utils__WEBPACK_IMPORTED_MODULE_2__["checkMaxArguments"])(arguments, 2, 'opacity');

        if (Number.isFinite(alpha)) {
            alpha = Object(_expressions__WEBPACK_IMPORTED_MODULE_1__["number"])(alpha);
        }
        Object(_utils__WEBPACK_IMPORTED_MODULE_2__["checkExpression"])('opacity', 'color', 0, color);
        Object(_utils__WEBPACK_IMPORTED_MODULE_2__["checkExpression"])('opacity', 'alpha', 1, alpha);
        super({ color, alpha });
        this.type = 'color';
        this.inlineMaker = inline => `vec4((${inline.color}).rgb, ${inline.alpha})`;
    }
    get value () {
        return this.eval();
    }
    eval (f) {
        const color = this.color.eval(f);
        const alpha = this.alpha.eval(f);
        color.a = alpha;
        return color;
    }
    _bindMetadata (meta) {
        super._bindMetadata(meta);
        Object(_utils__WEBPACK_IMPORTED_MODULE_2__["checkType"])('opacity', 'color', 0, 'color', this.color);
        Object(_utils__WEBPACK_IMPORTED_MODULE_2__["checkType"])('opacity', 'alpha', 1, 'number', this.alpha);
    }
}


/***/ }),

/***/ "./src/renderer/viz/expressions/color/cssColorNames.js":
/*!*************************************************************!*\
  !*** ./src/renderer/viz/expressions/color/cssColorNames.js ***!
  \*************************************************************/
/*! exports provided: CSS_COLOR_NAMES */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CSS_COLOR_NAMES", function() { return CSS_COLOR_NAMES; });
const CSS_COLOR_NAMES = [
    'aliceblue',
    'antiquewhite',
    'aqua',
    'aquamarine',
    'azure',
    'beige',
    'bisque',
    'black',
    'blanchedalmond',
    'blue',
    'blueviolet',
    'brown',
    'burlywood',
    'cadetblue',
    'chartreuse',
    'chocolate',
    'coral',
    'cornflowerblue',
    'cornsilk',
    'crimson',
    'cyan',
    'darkblue',
    'darkcyan',
    'darkgoldenrod',
    'darkgray',
    'darkgreen',
    'darkgrey',
    'darkkhaki',
    'darkmagenta',
    'darkolivegreen',
    'darkorange',
    'darkorchid',
    'darkred',
    'darksalmon',
    'darkseagreen',
    'darkslateblue',
    'darkslategray',
    'darkslategrey',
    'darkturquoise',
    'darkviolet',
    'deeppink',
    'deepskyblue',
    'dimgray',
    'dimgrey',
    'dodgerblue',
    'firebrick',
    'floralwhite',
    'forestgreen',
    'fuchsia',
    'gainsboro',
    'ghostwhite',
    'gold',
    'goldenrod',
    'gray',
    'green',
    'greenyellow',
    'grey',
    'honeydew',
    'hotpink',
    'indianred',
    'indigo',
    'ivory',
    'khaki',
    'lavender',
    'lavenderblush',
    'lawngreen',
    'lemonchiffon',
    'lightblue',
    'lightcoral',
    'lightcyan',
    'lightgoldenrodyellow',
    'lightgray',
    'lightgreen',
    'lightgrey',
    'lightpink',
    'lightsalmon',
    'lightseagreen',
    'lightskyblue',
    'lightslategray',
    'lightslategrey',
    'lightsteelblue',
    'lightyellow',
    'lime',
    'limegreen',
    'linen',
    'magenta',
    'maroon',
    'mediumaquamarine',
    'mediumblue',
    'mediumorchid',
    'mediumpurple',
    'mediumseagreen',
    'mediumslateblue',
    'mediumspringgreen',
    'mediumturquoise',
    'mediumvioletred',
    'midnightblue',
    'mintcream',
    'mistyrose',
    'moccasin',
    'navajowhite',
    'navy',
    'oldlace',
    'olive',
    'olivedrab',
    'orange',
    'orangered',
    'orchid',
    'palegoldenrod',
    'palegreen',
    'paleturquoise',
    'palevioletred',
    'papayawhip',
    'peachpuff',
    'peru',
    'pink',
    'plum',
    'powderblue',
    'purple',
    'red',
    'rosybrown',
    'royalblue',
    'saddlebrown',
    'salmon',
    'sandybrown',
    'seagreen',
    'seashell',
    'sienna',
    'silver',
    'skyblue',
    'slateblue',
    'slategray',
    'slategrey',
    'snow',
    'springgreen',
    'steelblue',
    'tan',
    'teal',
    'thistle',
    'tomato',
    'transparent',
    'turquoise',
    'violet',
    'wheat',
    'white',
    'whitesmoke',
    'yellow',
    'yellowgreen'
];


/***/ }),

/***/ "./src/renderer/viz/expressions/color/hex.js":
/*!***************************************************!*\
  !*** ./src/renderer/viz/expressions/color/hex.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Hex; });
/* harmony import */ var _base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../base */ "./src/renderer/viz/expressions/base.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils */ "./src/renderer/viz/expressions/utils.js");
/* harmony import */ var _errors_carto_validation_error__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../errors/carto-validation-error */ "./src/errors/carto-validation-error.js");




/**
 * Create a color from its hexadecimal description.
 *
 * @param {string} hexadecimalColor - Color in the #RGB, #RGBA, #RRGGBB or #RRGGBBAA format
 * @return {Color}
 *
 * @example <caption>Display blue points.</caption>
 * const s = carto.expressions;
 * const viz = new carto.Viz({
 *   color: s.hex('#00F');  // Equivalent to `color: '#00F'`
 * });
 *
 * @example <caption>Display blue points. (String)</caption>
 * const viz = new carto.Viz(`
 *   color: #00F  // Equivalent to hex('#00F')
 * `);
 *
 * @memberof carto.expressions
 * @name hex
 * @function
 * @api
 */
class Hex extends _base__WEBPACK_IMPORTED_MODULE_0__["default"] {
    constructor (hexadecimalColor) {
        Object(_utils__WEBPACK_IMPORTED_MODULE_1__["checkMaxArguments"])(arguments, 1, 'hex');
        Object(_utils__WEBPACK_IMPORTED_MODULE_1__["checkString"])('hex', 'hexadecimalColor', 0, hexadecimalColor);

        super({});
        this.type = 'color';
        try {
            this.color = Object(_utils__WEBPACK_IMPORTED_MODULE_1__["hexToRgb"])(hexadecimalColor);
        } catch (error) {
            const preface = Object(_utils__WEBPACK_IMPORTED_MODULE_1__["getStringErrorPreface"])('hex', 'hexadecimalColor', 0);
            throw new _errors_carto_validation_error__WEBPACK_IMPORTED_MODULE_2__["default"](`${_errors_carto_validation_error__WEBPACK_IMPORTED_MODULE_2__["CartoValidationTypes"].INCORRECT_VALUE} ${preface} \nInvalid hexadecimal color string`);
        }
        this.hexadecimalColor = hexadecimalColor;
        this.inlineMaker = () => `vec4(${(this.color.r / 255).toFixed(4)}, ${(this.color.g / 255).toFixed(4)}, ${(this.color.b / 255).toFixed(4)}, ${(this.color.a).toFixed(4)})`;
    }
    toString () {
        return this.hexadecimalColor;
    }
    get value () {
        return this.eval();
    }
    eval () {
        return this.color;
    }
}


/***/ }),

/***/ "./src/renderer/viz/expressions/color/hsl.js":
/*!***************************************************!*\
  !*** ./src/renderer/viz/expressions/color/hsl.js ***!
  \***************************************************/
/*! exports provided: HSL, HSLA */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HSL", function() { return HSL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HSLA", function() { return HSLA; });
/* harmony import */ var _base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../base */ "./src/renderer/viz/expressions/base.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils */ "./src/renderer/viz/expressions/utils.js");
/* harmony import */ var _errors_carto_validation_error__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../errors/carto-validation-error */ "./src/errors/carto-validation-error.js");




/**
 * Evaluates to a hsl color.
 *
 * @param {Number} h - hue of the color in the [0, 1] range
 * @param {Number} s - saturation of the color in the [0, 1] range
 * @param {Number} l - lightness of the color in the [0, 1] range
 * @return {Color}
 *
 * @example <caption>Display blue points.</caption>
 * const s = carto.expressions;
 * const viz = new carto.Viz({
 *   color: s.hsl(0.67, 1.0, 0.5)
 * });
 *
 * @example <caption>Display blue points. (String)</caption>
 * const viz = new carto.Viz(`
 *   color: hsl(0.67, 1.0, 0.5)
 * `);
 *
 * @memberof carto.expressions
 * @name hsl
 * @function
 * @api
 */
const HSL = genHSL('hsl', false);

/**
 * Evaluates to a hsla color.
 *
 * @param {Number} h - hue of the color in the [0, 1] range
 * @param {Number} s - saturation of the color in the [0, 1] range
 * @param {Number} l - lightness of the color in the [0, 1] range
 * @param {Number} a - alpha value of the color in the [0, 1] range
 * @return {Color}
 *
 * @example <caption>Display blue points.</caption>
 * const s = carto.expressions;
 * const viz = new carto.Viz({
 *   color: s.hsla(0.67, 1.0, 0.5, 1.0)
 * });
 *
 * @example <caption>Display blue points. (String)</caption>
 * const viz = new carto.Viz(`
 *   color: hsla(0.67, 1.0, 0.5, 1.0)
 * `);
 *
 * @memberof carto.expressions
 * @function
 * @name hsla
 * @api
 */
const HSLA = genHSL('hsla', true);

function genHSL (name, alpha) {
    return class HSLA extends _base__WEBPACK_IMPORTED_MODULE_0__["default"] {
        constructor (h, s, l, a) {
            Object(_utils__WEBPACK_IMPORTED_MODULE_1__["checkMaxArguments"])(arguments, 4, 'hsla');

            [h, s, l, a] = [h, s, l, a].map(_utils__WEBPACK_IMPORTED_MODULE_1__["implicitCast"]);

            const children = { h, s, l };
            if (alpha) {
                Object(_utils__WEBPACK_IMPORTED_MODULE_1__["checkExpression"])(name, 'a', 3, a);
                children.a = a;
            }

            Object(_utils__WEBPACK_IMPORTED_MODULE_1__["checkExpression"])(name, 'h', 0, h);
            Object(_utils__WEBPACK_IMPORTED_MODULE_1__["checkExpression"])(name, 's', 1, s);
            Object(_utils__WEBPACK_IMPORTED_MODULE_1__["checkExpression"])(name, 'l', 2, l);

            super(children);
            this.type = 'color';
        }
        get value () {
            return this.eval();
        }
        eval (f) {
            const normalize = (value, hue = false) => {
                if (value.type === 'category') {
                    return value.eval(f) / (hue ? value.numCategories + 1 : value.numCategories);
                }
                return value.eval(f);
            };
            const h = Object(_utils__WEBPACK_IMPORTED_MODULE_1__["clamp"])(normalize(this.h, true), 0, 1);
            const s = Object(_utils__WEBPACK_IMPORTED_MODULE_1__["clamp"])(normalize(this.s), 0, 1);
            const l = Object(_utils__WEBPACK_IMPORTED_MODULE_1__["clamp"])(normalize(this.l), 0, 1);

            const hslToRgb = (h, s, l) => {
                const c = {
                    r: Math.abs(h * 6 - 3) - 1,
                    g: 2 - Math.abs(h * 6 - 2),
                    b: 2 - Math.abs(h * 6 - 4),
                    a: alpha ? this.a.eval(f) : 1
                };

                const C = (1 - Math.abs(2 * l - 1)) * s;

                c.r = Object(_utils__WEBPACK_IMPORTED_MODULE_1__["clamp"])(c.r, 0, 1);
                c.g = Object(_utils__WEBPACK_IMPORTED_MODULE_1__["clamp"])(c.g, 0, 1);
                c.b = Object(_utils__WEBPACK_IMPORTED_MODULE_1__["clamp"])(c.b, 0, 1);

                c.r = ((c.r - 0.5) * C + l) * 255;
                c.g = ((c.g - 0.5) * C + l) * 255;
                c.b = ((c.b - 0.5) * C + l) * 255;

                return c;
            };

            return hslToRgb(h, s, l);
        }

        _bindMetadata (meta) {
            super._bindMetadata(meta);
            hslCheckType('h', 0, this.h);
            hslCheckType('s', 1, this.s);
            hslCheckType('l', 2, this.l);
            if (alpha) {
                Object(_utils__WEBPACK_IMPORTED_MODULE_1__["checkType"])('hsla', 'a', 3, 'number', this.a);
            }

            const normalize = (value, hue = false) => {
                if (value.type === 'category') {
                    return `/${hue ? value.numCategories + 1 : value.numCategories}.`;
                }
                return '';
            };
            super._setGenericGLSL(inline =>
                `vec4(HSLtoRGB(vec3(
                    ${inline.h}${normalize(this.h, true)},
                    clamp(${inline.s}${normalize(this.s)}, 0., 1.),
                    clamp(${inline.l}${normalize(this.l)}, 0., 1.)
                )), ${alpha ? `clamp(${inline.a}, 0., 1.)` : '1.'})`
                , `
    #ifndef HSL2RGB
    #define HSL2RGB
    vec3 HSLtoRGB(vec3 HSL) {
      float R = abs(HSL.x * 6. - 3.) - 1.;
      float G = 2. - abs(HSL.x * 6. - 2.);
      float B = 2. - abs(HSL.x * 6. - 4.);
      float C = (1. - abs(2. * HSL.z - 1.)) * HSL.y;
      vec3 RGB = clamp(vec3(R,G,B), 0., 1.);
      return (RGB - 0.5) * C + HSL.z;
    }
    #endif
    `);
        }
    };

    function hslCheckType (parameterName, parameterIndex, parameter) {
        Object(_utils__WEBPACK_IMPORTED_MODULE_1__["checkExpression"])(name, parameterName, parameterIndex, parameter);
        if (parameter.type !== 'number' && parameter.type !== 'category' && parameter.type !== undefined) {
            throw new _errors_carto_validation_error__WEBPACK_IMPORTED_MODULE_2__["default"](`${_errors_carto_validation_error__WEBPACK_IMPORTED_MODULE_2__["CartoValidationTypes"].INCORRECT_TYPE} ${name}(): invalid parameter\n\t${parameterName} type was: '${parameter.type}'`);
        }
    }
}


/***/ }),

/***/ "./src/renderer/viz/expressions/color/hsv.js":
/*!***************************************************!*\
  !*** ./src/renderer/viz/expressions/color/hsv.js ***!
  \***************************************************/
/*! exports provided: HSV, HSVA */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HSV", function() { return HSV; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HSVA", function() { return HSVA; });
/* harmony import */ var _base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../base */ "./src/renderer/viz/expressions/base.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils */ "./src/renderer/viz/expressions/utils.js");
/* harmony import */ var _errors_carto_validation_error__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../errors/carto-validation-error */ "./src/errors/carto-validation-error.js");




/**
 * Evaluates to a hsv color.
 *
 * @param {Number} h - hue of the color in the [0, 1] range
 * @param {Number} s - saturation of the color in the [0, 1] range
 * @param {Number} v - value (brightness) of the color in the [0, 1] range
 * @return {Color}
 *
 * @example <caption>Display blue points.</caption>
 * const s = carto.expressions;
 * const viz = new carto.Viz({
 *   color: s.hsv(0.67, 1.0, 1.0)
 * });
 *
 * @example <caption>Display blue points. (String)</caption>
 * const viz = new carto.Viz(`
 *   color: hsv(0.67, 1.0, 1.0)
 * `);
 *
 * @memberof carto.expressions
 * @name hsv
 * @function
 * @api
 */
const HSV = genHSV('hsv', false);

/**
 * Evaluates to a hsva color.
 *
 * @param {Number} h - hue of the color in the [0, 1] range
 * @param {Number} s - saturation of the color in the [0, 1] range
 * @param {Number} v - value (brightness) of the color in the [0, 1] range
 * @param {Number} a - alpha value of the color in the [0, 1] range
 * @return {Color}
 *
 * @example <caption>Display blue points.</caption>
 * const s = carto.expressions;
 * const viz = new carto.Viz({
 *   color: s.hsva(0.67, 1.0, 1.0, 1.0)
 * });
 *
 * @example <caption>Display blue points. (String)</caption>
 * const viz = new carto.Viz(`
 *   color: hsva(0.67, 1.0, 1.0, 1.0)
 * `);
 *
 * @memberof carto.expressions
 * @function
 * @name hsva
 * @api
 */
const HSVA = genHSV('hsva', true);

function genHSV (name, alpha) {
    return class extends _base__WEBPACK_IMPORTED_MODULE_0__["default"] {
        constructor (h, s, v, a) {
            if (alpha) {
                Object(_utils__WEBPACK_IMPORTED_MODULE_1__["checkMaxArguments"])(arguments, 4, name);
            } else {
                Object(_utils__WEBPACK_IMPORTED_MODULE_1__["checkMaxArguments"])(arguments, 3, name);
            }

            h = Object(_utils__WEBPACK_IMPORTED_MODULE_1__["implicitCast"])(h);
            s = Object(_utils__WEBPACK_IMPORTED_MODULE_1__["implicitCast"])(s);
            v = Object(_utils__WEBPACK_IMPORTED_MODULE_1__["implicitCast"])(v);
            const children = { h, s, v };
            if (alpha) {
                a = Object(_utils__WEBPACK_IMPORTED_MODULE_1__["implicitCast"])(a);
                Object(_utils__WEBPACK_IMPORTED_MODULE_1__["checkExpression"])(name, 'a', 3, a);
                children.a = a;
            }

            Object(_utils__WEBPACK_IMPORTED_MODULE_1__["checkExpression"])(name, 'h', 0, h);
            Object(_utils__WEBPACK_IMPORTED_MODULE_1__["checkExpression"])(name, 's', 1, s);
            Object(_utils__WEBPACK_IMPORTED_MODULE_1__["checkExpression"])(name, 'v', 2, v);

            super(children);
            this.type = 'color';
        }
        get value () {
            return this.eval();
        }
        eval (f) {
            const normalize = (value, hue = false) => {
                if (value.type === 'category') {
                    return value.eval(f) / (hue ? value.numCategories + 1 : value.numCategories);
                }
                return value.eval(f);
            };
            const h = Object(_utils__WEBPACK_IMPORTED_MODULE_1__["clamp"])(normalize(this.h, true), 0, 1);
            const s = Object(_utils__WEBPACK_IMPORTED_MODULE_1__["clamp"])(normalize(this.s), 0, 1);
            const v = Object(_utils__WEBPACK_IMPORTED_MODULE_1__["clamp"])(normalize(this.v), 0, 1);

            const hsvToRgb = (h, s, v) => {
                const c = {
                    r: Math.abs(h * 6 - 3) - 1,
                    g: 2 - Math.abs(h * 6 - 2),
                    b: 2 - Math.abs(h * 6 - 4),
                    a: alpha ? Object(_utils__WEBPACK_IMPORTED_MODULE_1__["clamp"])(this.a.eval(f), 0, 1) : 1
                };

                c.r = Object(_utils__WEBPACK_IMPORTED_MODULE_1__["clamp"])(c.r, 0, 1);
                c.g = Object(_utils__WEBPACK_IMPORTED_MODULE_1__["clamp"])(c.g, 0, 1);
                c.b = Object(_utils__WEBPACK_IMPORTED_MODULE_1__["clamp"])(c.b, 0, 1);

                c.r = ((c.r - 1) * s + 1) * v * 255;
                c.g = ((c.g - 1) * s + 1) * v * 255;
                c.b = ((c.b - 1) * s + 1) * v * 255;

                return c;
            };

            return hsvToRgb(h, s, v);
        }
        _bindMetadata (metadata) {
            super._bindMetadata(metadata);
            hsvCheckType('h', 0, this.h);
            hsvCheckType('s', 1, this.s);
            hsvCheckType('v', 2, this.v);
            if (alpha) {
                Object(_utils__WEBPACK_IMPORTED_MODULE_1__["checkType"])('hsva', 'a', 3, 'number', this.a);
            }
            const normalize = (value, hue = false) => {
                if (value.type === 'category') {
                    return `/${hue ? value.numCategories + 1 : value.numCategories}.`;
                }
                return '';
            };
            super._setGenericGLSL(inline =>
                `vec4(HSVtoRGB(vec3(
                    ${inline.h}${normalize(this.h, true)},
                    clamp(${inline.s}${normalize(this.s)}, 0.,1.),
                    clamp(${inline.v}${normalize(this.v)}, 0.,1.)
                )), ${alpha ? `clamp(${inline.a}, 0.,1.)` : '1.'})`
                , `
    #ifndef HSV2RGB
    #define HSV2RGB
    vec3 HSVtoRGB(vec3 HSV) {
      float R = abs(HSV.x * 6. - 3.) - 1.;
      float G = 2. - abs(HSV.x * 6. - 2.);
      float B = 2. - abs(HSV.x * 6. - 4.);
      vec3 RGB = clamp(vec3(R,G,B), 0., 1.);
      return ((RGB - 1.) * HSV.y + 1.) * HSV.z;
    }
    #endif
    `);
        }
    };

    function hsvCheckType (parameterName, parameterIndex, parameter) {
        Object(_utils__WEBPACK_IMPORTED_MODULE_1__["checkExpression"])(name, parameterName, parameterIndex, parameter);
        if (parameter.type !== 'number' && parameter.type !== 'category' && parameter.type !== undefined) {
            throw new _errors_carto_validation_error__WEBPACK_IMPORTED_MODULE_2__["default"](`${_errors_carto_validation_error__WEBPACK_IMPORTED_MODULE_2__["CartoValidationTypes"].INCORRECT_TYPE} ${name}(): invalid parameter\n\t${parameterName} type was: '${parameter.type}'`);
        }
    }
}


/***/ }),

/***/ "./src/renderer/viz/expressions/color/palettes.js":
/*!********************************************************!*\
  !*** ./src/renderer/viz/expressions/color/palettes.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var cartocolor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! cartocolor */ "./node_modules/cartocolor/index.js");
/* harmony import */ var cartocolor__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(cartocolor__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _palettes_Palette__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./palettes/Palette */ "./src/renderer/viz/expressions/color/palettes/Palette.js");




const palettes = {};

Object.keys(cartocolor__WEBPACK_IMPORTED_MODULE_0__).map(name => {
    palettes[`${name.toUpperCase()}`] = new _palettes_Palette__WEBPACK_IMPORTED_MODULE_1__["default"](name, cartocolor__WEBPACK_IMPORTED_MODULE_0__[name]);
});

/* harmony default export */ __webpack_exports__["default"] = (palettes);


/***/ }),

/***/ "./src/renderer/viz/expressions/color/palettes/Palette.js":
/*!****************************************************************!*\
  !*** ./src/renderer/viz/expressions/color/palettes/Palette.js ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Palette; });
/* harmony import */ var _base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../base */ "./src/renderer/viz/expressions/base.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils */ "./src/renderer/viz/expressions/utils.js");
/* harmony import */ var _rgb__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../rgb */ "./src/renderer/viz/expressions/color/rgb.js");
/* harmony import */ var _expressions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../expressions */ "./src/renderer/viz/expressions.js");





const MIN_CARTOCOLOR_SUBPALETTE_SIZE = 2;

/**
 * Color palettes.
 *
 * Palettes are constants that allow to use {@link https://carto.com/carto-colors/|CARTOColors} and {@link https://github.com/axismaps/colorbrewer/|ColorBrewer} palettes easily.
 * Use them with a {@link carto.expressions.ramp|ramp}
 *
 * The following palettes are available in the namespace {@link carto.expressions.palettes|carto.expressions.palettes}.
 *
 *  ```
 *  BURG, BURGYL, REDOR, ORYEL, PEACH, PINKYL, MINT, BLUGRN, DARKMINT, EMRLD, AG_GRNYL, BLUYL, TEAL, TEALGRN,
 *  PURP, PURPOR, SUNSET, MAGENTA, SUNSETDARK, AG_SUNSET, BRWNYL, ARMYROSE, FALL, GEYSER, TEMPS, TEALROSE, TROPIC,
 *  EARTH, ANTIQUE, BOLD, PASTEL, PRISM, SAFE, VIVID, CB_YLGN, CB_YLGNBU, CB_GNBU, CB_BUGN, CB_PUBUGN, CB_PUBU,
 *  CB_BUPU, CB_RDPU, CB_PURD, CB_ORRD, CB_YLORRD, CB_YLORBR, CB_PURPLES, CB_BLUES, CB_GREENS, CB_ORANGES, CB_REDS,
 *  CB_GREYS, CB_PUOR, CB_BRBG, CB_PRGN, CB_PIYG, CB_RDBU, CB_RDGY, CB_RDYLBU, CB_SPECTRAL, CB_RDYLGN, CB_ACCENT,
 *  CB_DARK2, CB_PAIRED, CB_PASTEL1, CB_PASTEL2, CB_SET1, CB_SET2, CB_SET3
 *  ```
 *
 * @example <caption>Using a color scheme.</caption>
 * const s = carto.expressions;
 * const viz = new carto.Viz({
 *   color: s.ramp(s.prop('type'), s.palettes.PRISM);
 * });
 *
 * @example <caption>Using a color scheme. (String)</caption>
 * const viz = new carto.Viz(`
 *   color: ramp($type, PRISM)
 * `);
 *
 * @name carto.expressions.palettes
 * @memberof carto.expressions
 * @api
 */

class Palette extends _base__WEBPACK_IMPORTED_MODULE_0__["default"] {
    constructor (name, subPalettes) {
        super({});
        this.type = 'palette';
        this.childType = 'color';
        this.name = name;
        this.subPalettes = new Proxy(subPalettes, {
            get: (target, name) => {
                if (typeof name !== 'symbol' && Number.isSafeInteger(Number(name)) && Array.isArray(target[name])) {
                    return target[name].map(_utils__WEBPACK_IMPORTED_MODULE_1__["hexToRgb"]);
                }
            }
        });
        this.expressionName = name;
        this.tags = subPalettes.tags;
    }

    getColors (numCategories) {
        const colors = this._getBestSubPalette(numCategories);

        if (this.isQualitative()) {
            const othersColor = colors.pop();
            return { colors, othersColor };
        } else {
            return { colors, othersColor: null };
        }
    }

    toString () {
        return this.expressionName;
    }

    _getBestSubPalette (subPaletteIndex) {
        subPaletteIndex = subPaletteIndex <= MIN_CARTOCOLOR_SUBPALETTE_SIZE
            ? MIN_CARTOCOLOR_SUBPALETTE_SIZE
            : subPaletteIndex;
        const longestSubPalette = this.getLongestSubPalette();
        const subPalette = (subPaletteIndex < longestSubPalette.length
            ? [...this.subPalettes[subPaletteIndex]]
            : [...longestSubPalette]);
        return subPalette.map(color =>
            new _rgb__WEBPACK_IMPORTED_MODULE_2__["RGBA"](Object(_expressions__WEBPACK_IMPORTED_MODULE_3__["constant"])(color.r), Object(_expressions__WEBPACK_IMPORTED_MODULE_3__["constant"])(color.g), Object(_expressions__WEBPACK_IMPORTED_MODULE_3__["constant"])(color.b), Object(_expressions__WEBPACK_IMPORTED_MODULE_3__["constant"])(color.a))
        );
    }

    getLongestSubPalette () {
        const s = this.subPalettes;
        for (let i = 20; i >= 0; i--) {
            if (s[i]) {
                return s[i];
            }
        }
    }

    isQualitative () {
        return this.tags.includes('qualitative');
    }

    isQuantitative () {
        return this.tags.includes('quantitative');
    }
}


/***/ }),

/***/ "./src/renderer/viz/expressions/color/rgb.js":
/*!***************************************************!*\
  !*** ./src/renderer/viz/expressions/color/rgb.js ***!
  \***************************************************/
/*! exports provided: RGB, RGBA */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RGB", function() { return RGB; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RGBA", function() { return RGBA; });
/* harmony import */ var _base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../base */ "./src/renderer/viz/expressions/base.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils */ "./src/renderer/viz/expressions/utils.js");



/**
 * Evaluates to a rgb color.
 *
 * @param {Number} r - The amount of red in the color in the [0, 255] range. Numeric expression.
 * @param {Number} g - The amount of green in the color in the [0, 255] range. Numeric expression.
 * @param {Number} b - The amount of blue in the color in the [0, 255] range. Numeric expression.
 * @return {Color}
 *
 * @example <caption>Display blue points.</caption>
 * const s = carto.expressions;
 * const viz = new carto.Viz({
 *   color: s.rgb(0, 0, 255)
 * });
 *
 * @example <caption>Display blue points. (String)</caption>
 * const viz = new carto.Viz(`
 *   color: rgb(0, 0, 255)
 * `);
 *
 * @memberof carto.expressions
 * @name rgb
 * @function
 * @api
 */
const RGB = genRGB('rgb', false);

/**
 * Evaluates to a rgba color.
 *
 * @param {Number} r - The amount of red in the color in the [0, 255] range. Numeric expression.
 * @param {Number} g - The amount of green in the color in the [0, 255] range. Numeric expression.
 * @param {Number} b - The amount of blue in the color in the [0, 255] range. Numeric expression.
 * @param {Number} a - The alpha value of the color in the [0, 1] range. Numeric expression.
 * @return {Color}
 *
 * @example <caption>Display blue points.</caption>
 * const s = carto.expressions;
 * const viz = new carto.Viz({
 *   color: s.rgba(0, 0, 255, 1)
 * });
 *
 * @example <caption>Display blue points. (String)</caption>
 * const viz = new carto.Viz(`
 *   color: rgba(0, 0, 255, 1)
 * `);
 *
 * @memberof carto.expressions
 * @name rgba
 * @function
 * @api
 */
const RGBA = genRGB('rgba', true);

// TODO refactor to uniformcolor, write color (plain, literal)

function genRGB (name, alpha) {
    return class RGBA extends _base__WEBPACK_IMPORTED_MODULE_0__["default"] {
        constructor (r, g, b, a) {
            Object(_utils__WEBPACK_IMPORTED_MODULE_1__["checkMaxArguments"])(arguments, 4, 'rgba');

            [r, g, b, a] = [r, g, b, a].map(_utils__WEBPACK_IMPORTED_MODULE_1__["implicitCast"]);
            Object(_utils__WEBPACK_IMPORTED_MODULE_1__["checkExpression"])(name, 'r', 0, r);
            Object(_utils__WEBPACK_IMPORTED_MODULE_1__["checkExpression"])(name, 'g', 1, g);
            Object(_utils__WEBPACK_IMPORTED_MODULE_1__["checkExpression"])(name, 'b', 2, b);

            const children = { r, g, b };
            if (alpha) {
                Object(_utils__WEBPACK_IMPORTED_MODULE_1__["checkExpression"])(name, 'a', 3, a);
                children.a = a;
            }
            super(children);
            this.type = 'color';
            this.inlineMaker = inline => `vec4(${inline.r}/255., ${inline.g}/255., ${inline.b}/255., ${alpha ? inline.a : '1.'})`;
        }

        get value () {
            return this.eval();
        }

        eval (f) {
            return {
                r: this.r.eval(f),
                g: this.g.eval(f),
                b: this.b.eval(f),
                a: alpha ? this.a.eval(f) : 1
            };
        }

        _bindMetadata (meta) {
            super._bindMetadata(meta);
            Object(_utils__WEBPACK_IMPORTED_MODULE_1__["checkType"])(name, 'r', 0, 'number', this.r);
            Object(_utils__WEBPACK_IMPORTED_MODULE_1__["checkType"])(name, 'g', 1, 'number', this.g);
            Object(_utils__WEBPACK_IMPORTED_MODULE_1__["checkType"])(name, 'b', 2, 'number', this.b);
            if (alpha) {
                Object(_utils__WEBPACK_IMPORTED_MODULE_1__["checkType"])('rgba', 'a', 3, 'number', this.a);
            }
        }
    };
}


/***/ }),

/***/ "./src/renderer/viz/expressions/constants.js":
/*!***************************************************!*\
  !*** ./src/renderer/viz/expressions/constants.js ***!
  \***************************************************/
/*! exports provided: DEFAULT_RAMP_OTHERS, DEFAULT_SAMPLES, OTHERS_GLSL_VALUE, OTHERS_INDEX, OTHERS_LABEL, DEFAULT_OPTIONS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DEFAULT_RAMP_OTHERS", function() { return DEFAULT_RAMP_OTHERS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DEFAULT_SAMPLES", function() { return DEFAULT_SAMPLES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OTHERS_GLSL_VALUE", function() { return OTHERS_GLSL_VALUE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OTHERS_INDEX", function() { return OTHERS_INDEX; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OTHERS_LABEL", function() { return OTHERS_LABEL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DEFAULT_OPTIONS", function() { return DEFAULT_OPTIONS; });
const DEFAULT_RAMP_OTHERS = 'DEFAULT_RAMP_OTHERS';
const DEFAULT_SAMPLES = 10;
const OTHERS_GLSL_VALUE = '(-1.)';
const OTHERS_INDEX = -1;
const OTHERS_LABEL = 'CARTO_VL_OTHERS';
const DEFAULT_OPTIONS = {
    othersLabel: OTHERS_LABEL,
    samples: DEFAULT_SAMPLES
};


/***/ }),

/***/ "./src/renderer/viz/expressions/interpolators.js":
/*!*******************************************************!*\
  !*** ./src/renderer/viz/expressions/interpolators.js ***!
  \*******************************************************/
/*! exports provided: ILinear, Cubic, BounceEaseIn */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ILinear", function() { return ILinear; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Cubic", function() { return Cubic; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BounceEaseIn", function() { return BounceEaseIn; });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ "./src/renderer/viz/expressions/utils.js");
/* harmony import */ var _base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./base */ "./src/renderer/viz/expressions/base.js");
/* harmony import */ var _errors_carto_validation_error__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../errors/carto-validation-error */ "./src/errors/carto-validation-error.js");




// TODO type checking

class ILinear extends genInterpolator('iLinear', inner => inner, undefined, inner => inner) { }

class Cubic extends genInterpolator(
    'cubic',
    inner => `cubicEaseInOut(${inner})`,
    `
    #ifndef CUBIC
    #define CUBIC
    float cubicEaseInOut(float p){
        if (p < 0.5) {
            return 4. * p * p * p;
        }else {
            float f = ((2. * p) - 2.);
            return 0.5 * f * f * f + 1.;
        }
    }
    #endif
`,
    inner => inner // TODO FIXME
) { }

class BounceEaseIn extends genInterpolator(
    'bounceEaseIn',
    inner => `BounceEaseIn(${inner})`,
    `
    #ifndef BOUNCE_EASE_IN
    #define BOUNCE_EASE_IN
    float BounceEaseIn_BounceEaseOut(float p)
    {
        if(p < 4./11.0)
        {
            return (121. * p * p)/16.0;
        }
        else if(p < 8./11.0)
        {
            return (363./40.0 * p * p) - (99./10.0 * p) + 17./5.0;
        }
        else if(p < 9./10.0)
        {
            return (4356./361.0 * p * p) - (35442./1805.0 * p) + 16061./1805.0;
        }
        else
        {
            return (54./5.0 * p * p) - (513./25.0 * p) + 268./25.0;
        }
    }
    float BounceEaseIn(float p)
    {
        return 1. - BounceEaseOut(1. - p);
    }
    #endif

`,
    inner => inner // TODO FIXME
) { }

// Interpolators
function genInterpolator (name, inlineMaker, preface, jsEval) {
    const fn = class Interpolator extends _base__WEBPACK_IMPORTED_MODULE_1__["default"] {
        constructor (m) {
            Object(_utils__WEBPACK_IMPORTED_MODULE_0__["checkMaxArguments"])(arguments, 1, name);

            m = Object(_utils__WEBPACK_IMPORTED_MODULE_0__["implicitCast"])(m);
            super({ m });
        }
        eval (feature) {
            return jsEval(this.m.eval(feature));
        }
        _bindMetadata (meta) {
            super._bindMetadata(meta);
            if (this.m.type !== 'number') {
                throw new _errors_carto_validation_error__WEBPACK_IMPORTED_MODULE_2__["default"](`${_errors_carto_validation_error__WEBPACK_IMPORTED_MODULE_2__["CartoValidationTypes"].INCORRECT_TYPE} Blending cannot be performed by '${this.m.type}'`);
            }
            this.type = 'number';
            this._setGenericGLSL(inline => inlineMaker(inline.m), preface);
        }
    };
    fn.type = 'interpolator';
    return fn;
}


/***/ }),

/***/ "./src/renderer/viz/expressions/linear.js":
/*!************************************************!*\
  !*** ./src/renderer/viz/expressions/linear.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Linear; });
/* harmony import */ var _base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./base */ "./src/renderer/viz/expressions/base.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils */ "./src/renderer/viz/expressions/utils.js");
/* harmony import */ var _expressions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../expressions */ "./src/renderer/viz/expressions.js");



/**
* Linearly interpolates the value of a given input between a minimum and a maximum. If `min` and `max` are not defined they will
* default to `globalMin(input)` and `globalMax(input)`.
*
* @param {Number|Date} input - The input to be evaluated and interpolated, can be a numeric property or a date property
* @param {Number|Date} [min=globalMin(input)] - Numeric or date expression pointing to the lower limit
* @param {Number|Date} [max=globalMax(input)] - Numeric or date expression pointing to the higher limit
* @return {Number|Date}
*
* @example <caption> Color by $speed using the CARTOColor Prism by assigning the first color in Prism to features with speeds of 10 or less, the last color in Prism to features with speeds of 100 or more and a interpolated value for the speeds in between.</caption>
* const s = carto.expressions;
* const viz = new carto.Viz({
*   color: s.ramp(s.linear(s.prop('speed'), 10, 100), s.palettes.PRISM)
* });
*
* @example <caption> Color by $speed using the CARTOColor Prism by assigning the first color in Prism to features with speeds of 10 or less, the last color in Prism to features with speeds of 100 or more and a interpolated value for the speeds in between. (String)</caption>
* const viz = new carto.Viz(`
*   color: ramp(linear($speed, 10, 100), PRISM)
* `);
*
* @memberof carto.expressions
* @name linear
* @function
* @api
*/
class Linear extends _base__WEBPACK_IMPORTED_MODULE_0__["default"] {
    constructor (input, min, max) {
        Object(_utils__WEBPACK_IMPORTED_MODULE_1__["checkMaxArguments"])(arguments, 3, 'linear');

        input = Object(_utils__WEBPACK_IMPORTED_MODULE_1__["implicitCast"])(input);

        if (min === undefined && max === undefined) {
            min = Object(_expressions__WEBPACK_IMPORTED_MODULE_2__["globalMin"])(input);
            max = Object(_expressions__WEBPACK_IMPORTED_MODULE_2__["globalMax"])(input);
        }

        min = Object(_utils__WEBPACK_IMPORTED_MODULE_1__["implicitCast"])(min);
        max = Object(_utils__WEBPACK_IMPORTED_MODULE_1__["implicitCast"])(max);

        Object(_utils__WEBPACK_IMPORTED_MODULE_1__["checkExpression"])('linear', 'input', 0, input);
        Object(_utils__WEBPACK_IMPORTED_MODULE_1__["checkExpression"])('linear', 'min', 1, min);
        Object(_utils__WEBPACK_IMPORTED_MODULE_1__["checkExpression"])('linear', 'max', 2, max);

        super({ input, min, max });
        this.type = 'number';
    }

    eval (feature) {
        if (this.input.type === 'date') {
            const input = this.input.eval(feature);

            const min = this.min.eval().getTime();
            const max = this.max.eval().getTime();

            const metadata = this._metadata;
            const inputMin = metadata.properties[this.input.name].min.getTime();
            const inputMax = metadata.properties[this.input.name].max.getTime();
            const inputDiff = inputMax - inputMin;

            const smin = (min - inputMin) / inputDiff;
            const smax = (max - inputMin) / inputDiff;
            return (input - smin) / (smax - smin);
        }

        const v = this.input.eval(feature);
        const min = this.min.eval(feature);
        const max = this.max.eval(feature);

        return (v - min) / (max - min);
    }

    _bindMetadata (metadata) {
        super._bindMetadata(metadata);

        if (this.input.type === 'date') {
            const min = this.min.eval().getTime();
            const max = this.max.eval().getTime();

            this._metadata = metadata;
            const inputMin = metadata.properties[this.input.name].min.getTime();
            const inputMax = metadata.properties[this.input.name].max.getTime();
            const inputDiff = inputMax - inputMin;

            const smin = (min - inputMin) / inputDiff;
            const smax = (max - inputMin) / inputDiff;
            this.inlineMaker = (inline) => `((${inline.input}-(${smin.toFixed(20)}))/(${(smax - smin).toFixed(20)}))`;
        } else {
            Object(_utils__WEBPACK_IMPORTED_MODULE_1__["checkType"])('linear', 'input', 0, 'number', this.input);
            Object(_utils__WEBPACK_IMPORTED_MODULE_1__["checkType"])('linear', 'min', 1, 'number', this.min);
            Object(_utils__WEBPACK_IMPORTED_MODULE_1__["checkType"])('linear', 'max', 2, 'number', this.max);

            this.inlineMaker = (inline) => `((${inline.input}-${inline.min})/(${inline.max}-${inline.min}))`;
        }
    }

    getLegendData (config) {
        const min = this.min.eval();
        const max = this.max.eval();
        const INC = 1 / (config.samples - 1);
        const name = this.toString();
        const data = [];

        for (let i = 0; data.length < config.samples; i += INC) {
            const value = Object(_utils__WEBPACK_IMPORTED_MODULE_1__["clamp"])(i, 0, 1);
            const key = i * (max - min) + min;

            data.push({ key, value });
        }

        return { data, min, max, name };
    }
}


/***/ }),

/***/ "./src/renderer/viz/expressions/now.js":
/*!*********************************************!*\
  !*** ./src/renderer/viz/expressions/now.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Now; });
/* harmony import */ var _base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./base */ "./src/renderer/viz/expressions/base.js");
/* harmony import */ var _expressions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../expressions */ "./src/renderer/viz/expressions.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils */ "./src/renderer/viz/expressions/utils.js");




/**
 * Get the current timestamp. This is an advanced form of animation, `animation` expression is preferred.
 *
 * @return {Number}
 *
 * @example <caption>Update width during the time.</caption>
 * const s = carto.expressions;
 * const viz = new carto.Viz({
 *   width: s.mod(s.now(), 10)
 * });
 *
 * @example <caption>Update width during the time. (String)</caption>
 * const viz = new carto.Viz(`
 *   width: now() % 10
 * `);
 *
 * @memberof carto.expressions
 * @name now
 * @function
 * @api
 */
class Now extends _base__WEBPACK_IMPORTED_MODULE_0__["default"] {
    constructor () {
        Object(_utils__WEBPACK_IMPORTED_MODULE_2__["checkMaxArguments"])(arguments, 0, 'now');

        super({ now: Object(_expressions__WEBPACK_IMPORTED_MODULE_1__["number"])(0) });
        this.type = 'number';
        super.inlineMaker = inline => inline.now;
    }

    get value () {
        return this.eval();
    }

    eval () {
        return this.now.expr;
    }

    isAnimated () {
        return true;
    }

    _setTimestamp (timestamp) {
        this.now.expr = timestamp;
    }
}


/***/ }),

/***/ "./src/renderer/viz/expressions/ordering.js":
/*!**************************************************!*\
  !*** ./src/renderer/viz/expressions/ordering.js ***!
  \**************************************************/
/*! exports provided: Asc, Desc, NoOrder, Width */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Asc", function() { return Asc; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Desc", function() { return Desc; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NoOrder", function() { return NoOrder; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Width", function() { return Width; });
/* harmony import */ var _base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./base */ "./src/renderer/viz/expressions/base.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils */ "./src/renderer/viz/expressions/utils.js");



/**
 * Order ascending by a provided expression. NOTE: only works with `width()`.
 *
 * Note: ordering expressions won't assure a perfect ordering.
 * Features will be distributed in different buckets with the original order, and those buckets will be ordered.
 * This guarantees a maximum error, but not a perfect order.
 * For most operations this is imperceptible, but usage of `order` in combination with animation or multi-scale expressions (`zoomrange` and `scaled`)
 * may result in artifacts.
 *
 * @param {carto.expressions.Width} by - must be `width()`
 * @return {Order}
 *
 * @example <caption>Ascending order based on width.</caption>
 * const s = carto.expressions;
 * const viz = new carto.Viz({
 *   order: s.asc(s.width())
 * });
 *
 * @example <caption>Ascending order based on width. (String)</caption>
 * const viz = new carto.Viz(`
 *   order: asc(width())
 * `);
 *
 * @memberof carto.expressions
 * @name asc
 * @function
 * @api
 */
class Asc extends _base__WEBPACK_IMPORTED_MODULE_0__["default"] {
    constructor (by) {
        Object(_utils__WEBPACK_IMPORTED_MODULE_1__["checkMaxArguments"])(arguments, 1, 'asc');

        super({});
        Object(_utils__WEBPACK_IMPORTED_MODULE_1__["checkInstance"])('asc', 'by', 0, Width, by);
        this.type = 'orderer';
    }
}

/**
 * Order descending by a provided expression. NOTE: only works with `width()`.
 *
 * Note: ordering expressions won't assure a perfect ordering.
 * Features will be distributed in different buckets with the original order, and those buckets will be ordered.
 * This guarantees a maximum error, but not a perfect order.
 * For most operations this is imperceptible, but usage of `order` in combination with animation or multi-scale expressions (`zoomrange` and `scaled`)
 * may result in artifacts.
 *
 * @param {carto.expressions.Width} by - must be `width()`
 * @return {Order}
 *
 * @example <caption>Descending order based on width.</caption>
 * const s = carto.expressions;
 * const viz = new carto.Viz({
 *   order: s.desc(s.width())
 * });
 *
 * @example <caption>Descending order based on width. (String)</caption>
 * const viz = new carto.Viz(`
 *   order: desc(width())
 * `);
 *
 * @memberof carto.expressions
 * @name desc
 * @function
 * @api
 */
class Desc extends _base__WEBPACK_IMPORTED_MODULE_0__["default"] {
    constructor (by) {
        Object(_utils__WEBPACK_IMPORTED_MODULE_1__["checkMaxArguments"])(arguments, 1, 'desc');

        super({});
        Object(_utils__WEBPACK_IMPORTED_MODULE_1__["checkInstance"])('desc', 'by', 0, Width, by);
        this.type = 'orderer';
    }
}

/**
 * No order expression.
 *
 * @return {Order}
 *
 * @example <caption>No order.</caption>
 * const s = carto.expressions;
 * const viz = new carto.Viz({
 *   order: s.noOrder()
 * });
 *
 * @example <caption>No order. (String)</caption>
 * const viz = new carto.Viz(`
 *   order: noOrder()
 * `);
 *
 * @memberof carto.expressions
 * @name noOrder
 * @function
 * @api
 */
class NoOrder extends _base__WEBPACK_IMPORTED_MODULE_0__["default"] {
    constructor () {
        Object(_utils__WEBPACK_IMPORTED_MODULE_1__["checkMaxArguments"])(arguments, 0, 'noOrder');

        super({});
        this.type = 'orderer';
    }
}

/**
 * Return the expression assigned in the `width` property. ONLY usable in an `order:` property.
 *
 * Note: ordering expressions won't assure a perfect ordering.
 * Features will be distributed in different buckets with the original order, and those buckets will be ordered.
 * This guarantees a maximum error, but not a perfect order.
 * For most operations this is imperceptible, but usage of `order` in combination with animation or multi-scale expressions (`zoomrange` and `scaled`)
 * may result in artifacts.
 *
 * @return {carto.expressions.Width}
 *
 * @example <caption>Ascending order based on width.</caption>
 * const s = carto.expressions;
 * const viz = new carto.Viz({
 *   order: s.asc(s.width())
 * });
 *
 * @example <caption>Ascending order based on width. (String)</caption>
 * const viz = new carto.Viz(`
 *   order: asc(width())
 * `);
 *
 * @memberof carto.expressions
 * @name width
 * @function
 * @api
 */
class Width extends _base__WEBPACK_IMPORTED_MODULE_0__["default"] {
    constructor () {
        Object(_utils__WEBPACK_IMPORTED_MODULE_1__["checkMaxArguments"])(arguments, 1, 'width');

        super({});
        this.type = 'propertyReference';
    }
}


/***/ }),

/***/ "./src/renderer/viz/expressions/reverse/ReverseList.js":
/*!*************************************************************!*\
  !*** ./src/renderer/viz/expressions/reverse/ReverseList.js ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ReverseList; });
/* harmony import */ var _base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../base */ "./src/renderer/viz/expressions/base.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils */ "./src/renderer/viz/expressions/utils.js");



class ReverseList extends _base__WEBPACK_IMPORTED_MODULE_0__["default"] {
    constructor (array) {
        super({array});

        Object(_utils__WEBPACK_IMPORTED_MODULE_1__["checkExpression"])('reverseList', 'array', 0, array);

        if (this.array.elems) {
            const childType = this.array.elems[0].type;
            this.type = `${childType}-list`;
        }
    }

    _bindMetadata (metadata) {
        this.array._bindMetadata(metadata);

        Object(_utils__WEBPACK_IMPORTED_MODULE_1__["checkType"])('reverse', 'array', 0, ['palette', 'number-list', 'category-list', 'color-list', 'time-list', 'image-list'], this.array);

        this.type = this.array.type;
        this.childType = this.array.childType;

        super._bindMetadata(metadata);
    }

    get elems () {
        return [...this.array.elems].reverse();
    }

    get value () {
        return this.elems.map(c => c.value);
    }

    eval (feature) {
        return this.elems.map(c => c.eval(feature));
    }
}


/***/ }),

/***/ "./src/renderer/viz/expressions/reverse/ReversePalette.js":
/*!****************************************************************!*\
  !*** ./src/renderer/viz/expressions/reverse/ReversePalette.js ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ReversePalette; });
/* harmony import */ var _color_palettes_Palette__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../color/palettes/Palette */ "./src/renderer/viz/expressions/color/palettes/Palette.js");


class ReversePalette extends _color_palettes_Palette__WEBPACK_IMPORTED_MODULE_0__["default"] {
    constructor (palette) {
        super(palette.name, palette.subPalettes);
        this.type = 'palette';
        this._originalPalette = palette;
        this.tags = palette.tags;
        this.subPalettes = new Proxy(palette.subPalettes, {
            get: (target, name) => {
                if (Number.isFinite(Number(name)) && Array.isArray(target[name])) {
                    return this._reversePalette(target[name]);
                }
                return target[name];
            }
        });
    }

    getLongestSubPalette () {
        return this._reversePalette(this._originalPalette.getLongestSubPalette());
    }

    _reversePalette (palette) {
        if (this.isQualitative()) {
            // Last color is 'others', therefore, we shouldn't change the order of that one
            const copy = [...palette];
            const others = copy.pop();
            return [...copy.reverse(), others];
        }
        return [...palette].reverse();
    }
}


/***/ }),

/***/ "./src/renderer/viz/expressions/reverse/reverse.js":
/*!*********************************************************!*\
  !*** ./src/renderer/viz/expressions/reverse/reverse.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return reverse; });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils */ "./src/renderer/viz/expressions/utils.js");
/* harmony import */ var _ReversePalette__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ReversePalette */ "./src/renderer/viz/expressions/reverse/ReversePalette.js");
/* harmony import */ var _ReverseList__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ReverseList */ "./src/renderer/viz/expressions/reverse/ReverseList.js");




/**
 * Reverse the provided item.
 *
 * @param {Palette|List} x - item to be reversed
 * @return {Palette|List}
 *
 * @example <caption>Invert a Palette.</caption>
 * const s = carto.expressions;
 * const viz = new carto.Viz({
 *   color: s.ramp(s.prop('type'), s.reverse(s.palettes.PRISM));
 * });
 *
 * @example <caption>Invert a Palette (String).</caption>
 * const viz = new carto.Viz(`
 *   color: ramp($type, reverse(PRISM))
 * `);
 *
 * @example <caption>Invert a List.</caption>
 * const s = carto.expressions;
 * const viz = new carto.Viz({
 *   color: s.ramp(s.prop('count'), s.reverse([s.namedColor('red'), s.namedColor('blue')]));
 * });
 *
 * @example <caption>Invert a List (String).</caption>
 * const viz = new carto.Viz(`
 *   color: ramp($count, reverse([red, blue]))
 * `);
 *
 * @memberof carto.expressions
 * @name reverse
 * @function
 * @api
 */
function reverse (list) {
    Object(_utils__WEBPACK_IMPORTED_MODULE_0__["checkMaxArguments"])(arguments, 1, 'reverse');
    list = Object(_utils__WEBPACK_IMPORTED_MODULE_0__["implicitCast"])(list);

    if (list.type === 'palette') {
        return new _ReversePalette__WEBPACK_IMPORTED_MODULE_1__["default"](list);
    } else {
        return new _ReverseList__WEBPACK_IMPORTED_MODULE_2__["default"](list);
    }
}


/***/ }),

/***/ "./src/renderer/viz/expressions/stats.js":
/*!***********************************************!*\
  !*** ./src/renderer/viz/expressions/stats.js ***!
  \***********************************************/
/*! exports provided: average, variance, standardDeviation */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "average", function() { return average; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "variance", function() { return variance; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "standardDeviation", function() { return standardDeviation; });

/**
 * Calculate Average
 *
 * @param {Number[]} values
 * @returns {Number} - average
 */
const average = (values) => {
    let sum = 0;
    for (let i = 0; i < values.length; i++) {
        sum += values[i];
    }
    return sum / values.length;
};
/**
 * Calculate Variance
 *
 * @param {Number[]} values
 * @param {Number} average
 * @returns {Number[]} - calculate variance for each element in values
 */
const variance = (values, average) => {
    let variances = [];
    for (let i = 0; i < values.length; i++) {
        const diff = values[i] - average;
        variances.push(diff * diff);
    }
    return variances;
};

/**
 * Calculate Standard Deviation (STD), using population deviation formula
 *
 * @param {Number[]} values
 * @returns {Number} - standard deviation
 */
const standardDeviation = (values) => {
    const avg = average(values);
    const avgVariance = average(variance(values, avg));
    return Math.sqrt(avgVariance);
};


/***/ }),

/***/ "./src/renderer/viz/expressions/time.js":
/*!**********************************************!*\
  !*** ./src/renderer/viz/expressions/time.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Time; });
/* harmony import */ var _base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./base */ "./src/renderer/viz/expressions/base.js");
/* harmony import */ var _utils_util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../utils/util */ "./src/utils/util.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils */ "./src/renderer/viz/expressions/utils.js");




/**
 * Time contant expression
 *
 * @param {Date|string} date - The date from a JavaScript Date() object or encoded as a string
 * @return {Date}
 *
 * @example <caption>Filter by a date between dates.</caption>
 * const s = carto.expressions;
 * const viz = new carto.Viz({
 *   filter: s.between(s.prop('date'), s.time('2022-03-09T00:00:00Z'), s.time('2033-08-12T00:00:00Z')
 * });
 *
 * @example <caption>Filter by a date between dates. (String)</caption>
 * const viz = new carto.Viz(`
 *   filter: time('2022-03-09T00:00:00Z') < $date < time('2033-08-12T00:00:00Z')
 * `);
 *
 * @memberof carto.expressions
 * @name time
 * @function
 * @api
 */
class Time extends _base__WEBPACK_IMPORTED_MODULE_0__["default"] {
    constructor (date) {
        Object(_utils__WEBPACK_IMPORTED_MODULE_2__["checkMaxArguments"])(arguments, 1, 'time');

        super({});
        // TODO improve type check
        this.type = 'time';
        this.date = _utils_util__WEBPACK_IMPORTED_MODULE_1__["castDate"](date);
        this.inlineMaker = () => undefined;
    }

    get value () {
        return this.eval();
    }

    eval () {
        return this.date;
    }

    isAnimated () {
        return false;
    }
}


/***/ }),

/***/ "./src/renderer/viz/expressions/top.js":
/*!*********************************************!*\
  !*** ./src/renderer/viz/expressions/top.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Top; });
/* harmony import */ var _base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./base */ "./src/renderer/viz/expressions/base.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils */ "./src/renderer/viz/expressions/utils.js");
/* harmony import */ var _basic_property__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./basic/property */ "./src/renderer/viz/expressions/basic/property.js");
/* harmony import */ var _expressions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../expressions */ "./src/renderer/viz/expressions.js");
/* harmony import */ var _errors_carto_validation_error__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../errors/carto-validation-error */ "./src/errors/carto-validation-error.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./constants */ "./src/renderer/viz/expressions/constants.js");







// Careful! This constant must match with the shader code of the Top expression
const MAX_TOP_BUCKETS = 16;

/**
 * Get the top `n` properties, aggregating the rest into an "others" bucket category.
 *
 * @param {Category} property - Column of the table
 * @param {number} n - Number of top properties to be returned, the maximum value is 16, values higher than that will result in an error
 * @return {Category}
 *
 * @example <caption>Use top 3 categories to define a color ramp.</caption>
 * const s = carto.expressions;
 * const viz = new carto.Viz({
 *   color: s.ramp(s.top(s.prop('category'), 3), s.palettes.VIVID)
 * });
 *
 * @example <caption>Use top 3 categories to define a color ramp. (String)</caption>
 * const viz = new carto.Viz(`
 *   color: ramp(top($category, 3), VIVID)
 * `);
 *
 * @memberof carto.expressions
 * @name top
 * @function
 * @api
 */
class Top extends _base__WEBPACK_IMPORTED_MODULE_0__["default"] {
    constructor (property, buckets) {
        Object(_utils__WEBPACK_IMPORTED_MODULE_1__["checkMaxArguments"])(arguments, 2, 'top');

        buckets = Object(_utils__WEBPACK_IMPORTED_MODULE_1__["implicitCast"])(buckets);
        Object(_utils__WEBPACK_IMPORTED_MODULE_1__["checkInstance"])('top', 'property', 0, _basic_property__WEBPACK_IMPORTED_MODULE_2__["default"], property);
        const children = { property, buckets };
        for (let i = 0; i < MAX_TOP_BUCKETS; i++) {
            children[`_top${i}`] = Object(_expressions__WEBPACK_IMPORTED_MODULE_3__["number"])(0);
        }
        super(children);
        this.type = 'category';
    }

    eval (feature) {
        const metaColumn = this._metadata.properties[this.property.name];
        const orderedCategoryNames = [...metaColumn.categories].sort((a, b) =>
            b.frequency - a.frequency
        );
        const categoryName = this.property.eval(feature);
        const index = orderedCategoryNames.findIndex(category => category.name === categoryName);
        const divisor = this.numCategoriesWithoutOthers - 1 || 1;

        return index >= this.numBuckets || index === -1 ? _constants__WEBPACK_IMPORTED_MODULE_5__["OTHERS_INDEX"] : index / divisor;
    }

    _bindMetadata (metadata) {
        super._bindMetadata(metadata);

        Object(_utils__WEBPACK_IMPORTED_MODULE_1__["checkType"])('top', 'property', 0, 'category', this.property);
        Object(_utils__WEBPACK_IMPORTED_MODULE_1__["checkFeatureIndependent"])('top', 'buckets', 1, this.buckets);
        Object(_utils__WEBPACK_IMPORTED_MODULE_1__["checkType"])('top', 'buckets', 1, 'number', this.buckets);

        this._metadata = metadata;
        this._textureBuckets = null;
    }

    get numCategories () {
        return this.numBuckets + 1;
    }

    get numCategoriesWithoutOthers () {
        return this.numCategories - 1;
    }

    get numBuckets () {
        let buckets = Math.round(this.buckets.eval());

        if (buckets > this.property.numCategories) {
            buckets = this.property.numCategories;
        }

        if (buckets > MAX_TOP_BUCKETS) {
            // setTimeout is used here because throwing within the renderer stack leaves the state in an invalid state,
            // making this error an unrecoverable error, within the setTimeout the error is recoverable
            const prev = this.buckets.eval();
            setTimeout(() => {
                throw new _errors_carto_validation_error__WEBPACK_IMPORTED_MODULE_4__["default"](
                    `${_errors_carto_validation_error__WEBPACK_IMPORTED_MODULE_4__["CartoValidationTypes"].INCORRECT_VALUE} top() function has a limit of ${MAX_TOP_BUCKETS} buckets but '${prev}' buckets were specified.`
                );
            });
            buckets = 0;
        }

        return buckets;
    }

    _applyToShaderSource (getGLSLforProperty) {
        const childSources = {};
        this.childrenNames.forEach(name => { childSources[name] = this[name]._applyToShaderSource(getGLSLforProperty); });
        return {
            preface: this._prefaceCode(Object.values(childSources).map(s => s.preface).join('') + `
            uniform float numCategoriesWithoutOthers${this._uid};

            float top${this._uid}(float id){
                float r;
                if (${childSources._top0.inline} == id){
                    r = 0.;
                } else if (${childSources._top1.inline} == id){
                    r = 1.;
                } else if (${childSources._top2.inline} == id){
                    r = 2.;
                } else if (${childSources._top3.inline} == id){
                    r = 3.;
                } else if (${childSources._top4.inline} == id){
                    r = 4.;
                } else if (${childSources._top5.inline} == id){
                    r = 5.;
                } else if (${childSources._top6.inline} == id){
                    r = 6.;
                } else if (${childSources._top7.inline} == id){
                    r = 7.;
                } else if (${childSources._top8.inline} == id){
                    r = 8.;
                } else if (${childSources._top9.inline} == id){
                    r = 9.;
                } else if (${childSources._top10.inline} == id){
                    r = 10.;
                } else if (${childSources._top11.inline} == id){
                    r = 11.;
                } else if (${childSources._top12.inline} == id){
                    r = 12.;
                } else if (${childSources._top13.inline} == id){
                    r = 13.;
                } else if (${childSources._top14.inline} == id){
                    r = 14.;
                } else if (${childSources._top15.inline} == id){
                    r = 15.;
                }else{
                    return ${_constants__WEBPACK_IMPORTED_MODULE_5__["OTHERS_GLSL_VALUE"]};
                }
                return r/(numCategoriesWithoutOthers${this._uid}-1.);
            }`),
            inline: `top${this._uid}(${childSources.property.inline})`
        };
    }

    _postShaderCompile (program, gl) {
        this._numCategoriesLoc = gl.getUniformLocation(program, `numCategoriesWithoutOthers${this._uid}`);
        super._postShaderCompile(program, gl);
    }

    _preDraw (program, drawMetadata, gl) {
        const buckets = this.numBuckets;
        const metaColumn = this._metadata.properties[this.property.name];

        const orderedCategoryNames = [...metaColumn.categories].sort((a, b) =>
            b.frequency - a.frequency
        );

        for (let i = 0; i < MAX_TOP_BUCKETS; i++) {
            this[`_top${i}`].expr = Number.POSITIVE_INFINITY;
        }

        orderedCategoryNames.forEach((cat, i) => {
            if (i < buckets) {
                this[`_top${i}`].expr = this._metadata.categoryToID.get(cat.name);
            }
        });

        gl.uniform1f(this._numCategoriesLoc, this.numCategoriesWithoutOthers);
        super._preDraw(program, drawMetadata, gl);
    }

    getLegendData () {
        const metaColumn = this._metadata.properties[this.property.name];
        const orderedCategoryNames = [...metaColumn.categories].sort((a, b) =>
            b.frequency - a.frequency
        );
        const buckets = this.numBuckets;
        const data = [];
        const name = this.toString();
        const divisor = this.numCategoriesWithoutOthers - 1 || 1;
        orderedCategoryNames.forEach((category, i) => {
            if (i < buckets) {
                const key = category.name;
                const value = i / divisor;
                data.push({ key, value });
            }
        });

        data.push({
            key: _constants__WEBPACK_IMPORTED_MODULE_5__["OTHERS_LABEL"],
            value: _constants__WEBPACK_IMPORTED_MODULE_5__["OTHERS_INDEX"]
        });

        return { name, data };
    }
}


/***/ }),

/***/ "./src/renderer/viz/expressions/transformation/Rotate.js":
/*!***************************************************************!*\
  !*** ./src/renderer/viz/expressions/transformation/Rotate.js ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Rotate; });
/* harmony import */ var _base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../base */ "./src/renderer/viz/expressions/base.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils */ "./src/renderer/viz/expressions/utils.js");



/**
 * Rotate. Define a rotation in degrees.
 *
 * Limitation: only supported in combination with `symbol:`.
 *
 * @param {Number} angle - angle to rotate in degrees in clockwise direction
 * @return {Transform}
 *
 * @example <caption>Rotate 30 degrees in clockwise direction.</caption>
 * const s = carto.expressions;
 * const viz = new carto.Viz({
 *   symbol: s.CROSS
 *   transform: s.rotate(30)
 * });
 *
 * @example <caption>Rotate 30 degrees in clockwise direction. (String)</caption>
 * const viz = new carto.Viz(`
 *   symbol: cross
 *   transform: rotate(30)
 * `);
 *
 * @example <caption>Rotate 30 degrees in counter-clockwise direction.</caption>
 * const s = carto.expressions;
 * const viz = new carto.Viz({
 *   symbol: s.CROSS
 *   transform: s.rotate(-30)
 * });
 *
 * @example <caption>Rotate 30 degrees in counter-clockwise direction. (String)</caption>
 * const viz = new carto.Viz(`
 *   symbol: cross
 *   transform: rotate(-30)
 * `);
 *
 * @memberof carto.expressions
 * @name rotate
 * @function
 * @api
 */

class Rotate extends _base__WEBPACK_IMPORTED_MODULE_0__["default"] {
    constructor (angle) {
        Object(_utils__WEBPACK_IMPORTED_MODULE_1__["checkMaxArguments"])(arguments, 1, 'rotate');

        angle = Object(_utils__WEBPACK_IMPORTED_MODULE_1__["implicitCast"])(angle);
        super({ angle });
        this.type = 'transformation';
    }

    _applyToShaderSource (getGLSLforProperty) {
        const angle = this.angle._applyToShaderSource(getGLSLforProperty);
        return {
            preface: this._prefaceCode(`
                ${angle.preface}

                #ifndef DEGREES_TO_RADIANS
                #define DEGREES_TO_RADIANS
                float degreesToRadians(float degrees){
                    return degrees/360.*2.*3.14159265359;
                }
                #endif
                
                vec2 rotate${this._uid}(vec2 p){
                    float angle = degreesToRadians(${angle.inline});
                    mat2 M = mat2(cos(angle), -sin(angle),
                                  sin(angle),  cos(angle));
                    return M * p;
                }`),

            inline: `rotate${this._uid}`
        };
    }

    eval (feature) {
        // TODO
        return [0, 0];
    }

    _bindMetadata (meta) {
        super._bindMetadata(meta);
        Object(_utils__WEBPACK_IMPORTED_MODULE_1__["checkType"])('rotate', 'angle', 0, 'number', this.angle);
    }
}


/***/ }),

/***/ "./src/renderer/viz/expressions/transformation/Translate.js":
/*!******************************************************************!*\
  !*** ./src/renderer/viz/expressions/transformation/Translate.js ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Translate; });
/* harmony import */ var _base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../base */ "./src/renderer/viz/expressions/base.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils */ "./src/renderer/viz/expressions/utils.js");



/**
 * Translate. Define a translation:
 *
 * @param {number} x - first numeric expression that indicates the translation in the X direction.
 * @param {number} y - second numeric expression that indicates the translation in the Y direction.
 * @return {Translate} Numeric expression
 *
 * @example <caption>Apply an x, y translation</caption>
 * const s = carto.expressions;
 * const viz = new carto.Viz({
 *   transform: s.translate(10, 20)
 * });
 *
 * @example <caption>Apply an x, y translation. (String)</caption>
 * const viz = new carto.Viz(`
 *   transform: translate(10, 20)
 * `);
 *
 * @memberof carto.expressions
 * @name translate
 * @function
 * @api
 */

class Translate extends _base__WEBPACK_IMPORTED_MODULE_0__["default"] {
    constructor (x, y) {
        Object(_utils__WEBPACK_IMPORTED_MODULE_1__["checkMaxArguments"])(arguments, 2, 'translate');

        x = Object(_utils__WEBPACK_IMPORTED_MODULE_1__["implicitCast"])(x);
        y = Object(_utils__WEBPACK_IMPORTED_MODULE_1__["implicitCast"])(y);
        super({ x, y });
        this.type = 'transformation';
    }

    _applyToShaderSource (getGLSLforProperty) {
        const x = this.x._applyToShaderSource(getGLSLforProperty);
        const y = this.y._applyToShaderSource(getGLSLforProperty);
        return {
            preface: this._prefaceCode(`
                ${x.preface}
                ${y.preface}

                vec2 translate${this._uid}(vec2 p){
                    return p+vec2(${x.inline}, ${y.inline});
                }`),

            inline: `translate${this._uid}`
        };
    }

    eval (value) {
        return [this.x.eval(value), this.y.eval(value)];
    }

    _bindMetadata (meta) {
        super._bindMetadata(meta);
        Object(_utils__WEBPACK_IMPORTED_MODULE_1__["checkType"])('translate', 'x', 0, 'number', this.x);
        Object(_utils__WEBPACK_IMPORTED_MODULE_1__["checkType"])('translate', 'y', 1, 'number', this.y);
    }
}


/***/ }),

/***/ "./src/renderer/viz/expressions/transition.js":
/*!****************************************************!*\
  !*** ./src/renderer/viz/expressions/transition.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Transition; });
/* harmony import */ var _base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./base */ "./src/renderer/viz/expressions/base.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils */ "./src/renderer/viz/expressions/utils.js");
/* harmony import */ var _errors_carto_validation_error__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../errors/carto-validation-error */ "./src/errors/carto-validation-error.js");




/**
 * Transition returns a number from zero to one based on the elapsed number of milliseconds since the viz was instantiated.
 * The animation is not cyclic. It will stick to one once the elapsed number of milliseconds reach the animation's duration.
 *
 * @param {number} duration - Animation duration in milliseconds
 * @return {Number}
 *
 * @memberof carto.expressions
 * @name transition
 * @function
 * @api
 */
// TODO refactor to use uniformfloat class
class Transition extends _base__WEBPACK_IMPORTED_MODULE_0__["default"] {
    constructor (duration) {
        Object(_utils__WEBPACK_IMPORTED_MODULE_1__["checkMaxArguments"])(arguments, 1, 'transition');
        Object(_utils__WEBPACK_IMPORTED_MODULE_1__["checkNumber"])('transition', 'duration', 0, duration);
        if (duration < 0) {
            const preface = Object(_utils__WEBPACK_IMPORTED_MODULE_1__["getStringErrorPreface"])('transition', 'duration', 0);
            throw new _errors_carto_validation_error__WEBPACK_IMPORTED_MODULE_2__["default"](`${_errors_carto_validation_error__WEBPACK_IMPORTED_MODULE_2__["CartoValidationTypes"].INCORRECT_VALUE} ${preface} 'duration' must be greater than or equal to 0.`);
        }
        super({});
        this.aTime = Date.now();
        this.bTime = this.aTime + Number(duration);
        this.type = 'number';
    }
    eval () {
        const time = Date.now();
        this.mix = (time - this.aTime) / (this.bTime - this.aTime);
        return Math.min(this.mix, 1.0);
    }
    isAnimated () {
        return !this.mix || this.mix <= 1.0;
    }
    _applyToShaderSource () {
        return {
            preface: this._prefaceCode(`uniform float anim${this._uid};\n`),
            inline: `anim${this._uid}`
        };
    }
    _postShaderCompile (program, gl) {
        this._getBinding(program).uniformLocation = gl.getUniformLocation(program, `anim${this._uid}`);
    }
    _preDraw (program, drawMetadata, gl) {
        const time = Date.now();
        this.mix = (time - this.aTime) / (this.bTime - this.aTime);
        if (this.mix > 1.0) {
            gl.uniform1f(this._getBinding(program).uniformLocation, 1);
        } else {
            gl.uniform1f(this._getBinding(program).uniformLocation, this.mix);
        }
    }
}


/***/ }),

/***/ "./src/renderer/viz/expressions/unary.js":
/*!***********************************************!*\
  !*** ./src/renderer/viz/expressions/unary.js ***!
  \***********************************************/
/*! exports provided: Log, Sqrt, Sin, Cos, Tan, Sign, Abs, IsNaN, Not, Floor, Ceil */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Log", function() { return Log; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Sqrt", function() { return Sqrt; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Sin", function() { return Sin; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Cos", function() { return Cos; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tan", function() { return Tan; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Sign", function() { return Sign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Abs", function() { return Abs; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IsNaN", function() { return IsNaN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Not", function() { return Not; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Floor", function() { return Floor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Ceil", function() { return Ceil; });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ "./src/renderer/viz/expressions/utils.js");
/* harmony import */ var _base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./base */ "./src/renderer/viz/expressions/base.js");
/* harmony import */ var _errors_carto_validation_error__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../errors/carto-validation-error */ "./src/errors/carto-validation-error.js");




/**
 * Compute the natural logarithm (base e) of a number x.
 *
 * @param {Number} x - Numeric expression to compute the natural logarithm
 * @return {Number}
 *
 * @example <caption>Natural Logarithm.</caption>
 * const s = carto.expressions;
 * const viz = new carto.Viz({
 *   width: s.log(10)  // 2.302585092994046
 * });
 *
 * @example <caption>Natural Logarithm. (String)</caption>
 * const viz = new carto.Viz(`
 *   width: log(10)
 * `);
 *
 * @memberof carto.expressions
 * @name log
 * @function
 * @api
 */
const Log = genUnaryOp('log', x => Math.log(x), x => `log(${x})`);

/**
 * Compute the square root of a number x.
 *
 * @param {Number} x - Numeric expression to compute the square root
 * @return {Number}
 *
 * @example <caption>Square root.</caption>
 * const s = carto.expressions;
 * const viz = new carto.Viz({
 *   width: s.sqrt(4)  // 2
 * });
 *
 * @example <caption>Square root. (String)</caption>
 * const viz = new carto.Viz(`
 *   width: sqrt(4)
 * `);
 *
 * @memberof carto.expressions
 * @name sqrt
 * @function
 * @api
 */
const Sqrt = genUnaryOp('sqrt', x => Math.sqrt(x), x => `sqrt(${x})`);

/**
 * Compute the sine of a number x.
 *
 * @param {Number} x - Numeric expression to compute the sine in radians
 * @return {Number}
 *
 * @example <caption>Sin.</caption>
 * const s = carto.expressions;
 * const viz = new carto.Viz({
 *   width: s.sin(Math.PI/2)  // 1
 * });
 *
 * @example <caption>Sin. (String)</caption>
 * const viz = new carto.Viz(`
 *   width: sin(PI/2)
 * `);
 *
 * @memberof carto.expressions
 * @name sin
 * @function
 * @api
 */
const Sin = genUnaryOp('sin', x => Math.sin(x), x => `sin(${x})`);

/**
 * Compute the cosine of a number x.
 *
 * @param {Number} x - Numeric expression to compute the cosine in radians
 * @return {Number}
 *
 * @example <caption>Cos.</caption>
 * const s = carto.expressions;
 * const viz = new carto.Viz({
 *   width: s.cos(0)  // 1
 * });
 *
 * @example <caption>Cos. (String)</caption>
 * const viz = new carto.Viz(`
 *   width: cos(0)
 * `);
 *
 * @memberof carto.expressions
 * @name cos
 * @function
 * @api
 */
const Cos = genUnaryOp('cos', x => Math.cos(x), x => `cos(${x})`);

/**
 * Compute the tangent of a number x.
 *
 * @param {Number} x - Numeric expression to compute the tangent in radians
 * @return {Number}
 *
 * @example <caption>Tan.</caption>
 * const s = carto.expressions;
 * const viz = new carto.Viz({
 *   width: s.tan(0)  // 0
 * });
 *
 * @example <caption>Tan. (String)</caption>
 * const viz = new carto.Viz(`
 *   width: tan(0)
 * `);
 *
 * @memberof carto.expressions
 * @name tan
 * @function
 * @api
 */
const Tan = genUnaryOp('tan', x => Math.tan(x), x => `tan(${x})`);

/**
 * Compute the sign of a number x, indicating whether the number is positive, negative or zero
 * This means this function will return 1 if the number is positive, -1 if the number is negative
 * 0 if the number is 0 and -0 if the number is -0.
 *
 * @param {Number} x - Numeric expression to compute the sign
 * @return {Number}
 *
 * @example <caption>Sign.</caption>
 * const s = carto.expressions;
 * const viz = new carto.Viz({
 *   width: s.sign(100)  // 1
 * });
 *
 * @example <caption>Sign. (String)</caption>
 * const viz = new carto.Viz(`
 *   width: sign(100)
 * `);
 *
 * @memberof carto.expressions
 * @name sign
 * @function
 * @api
 */
const Sign = genUnaryOp('sign', x => Math.sign(x), x => `sign(${x})`);

/**
 * Compute the absolute value of a number x.
 *
 * @param {Number} x - Numeric expression to compute the absolute value
 * @return {Number}
 *
 * @example <caption>Abs.</caption>
 * const s = carto.expressions;
 * const viz = new carto.Viz({
 *   width: s.abs(-100)  // 100
 * });
 *
 * @example <caption>Abs. (String)</caption>
 * const viz = new carto.Viz(`
 *   width: abs(-100) // 100
 * `);
 *
 * @memberof carto.expressions
 * @name abs
 * @function
 * @api
 */
const Abs = genUnaryOp('abs', x => Math.abs(x), x => `abs(${x})`);

/**
 * Check if a numeric expression is NaN.
 *
 * This returns a numeric expression where 0 means `false` and 1 means `true`.
 *
 * @example <caption>Filter NaN values of the `numeric` property.</caption>
 * const s = carto.expressions;
 * const viz = new carto.Viz({
 *   filter: s.not(s.isNaN(s.prop('numeric')))
 * });
 *
 * @example <caption>Filter NaN values of the `numeric` property. (String)</caption>
 * const viz = new carto.Viz(`
 *   filter: not(isNaN($numeric))
 * `);
 *
 * @param {Number} x - Numeric expression to check
 * @return {Number}
 *
 * @memberof carto.expressions
 * @name isNaN
 * @function
 * @api
 */
const IsNaN = genUnaryOp('isNaN', x => Number.isNaN(x) ? 1 : 0, x => `((${x} <= 0.0 || 0.0 <= ${x}) ? 0. : 1.)`);

/**
 * Compute the logical negation of the given expression.
 * This is internally computed as 1 - x preserving boolean behavior and allowing fuzzy logic.
 *
 *  - When x is equal to 1 not(x) will be evaluated to 0
 *  - When x is equal to 0 not(x) will be evaluated to 1
 *
 * @param {Number} x - Number to compute the not value
 * @return {Number}
 *
 * @example <caption>Not.</caption>
 * const s = carto.expressions;
 * const viz = new carto.Viz({
 *   width: s.not(0)  // 1
 * });
 *
 * @example <caption>Not. (String)</caption>
 * const viz = new carto.Viz(`
 *   width: not(0)
 * `);
 *
 * @memberof carto.expressions
 * @name not
 * @function
 * @api
 */
const Not = genUnaryOp('not', x => 1 - x, x => `(1.0 - ${x})`);

/**
 * Compute the floor of the given expression.
 * Find the nearest integer less than or equal to the expression value.
 *
 *  - When x is equal to 0.8 floor(x) will be evaluated to 0
 *  - When x is equal to 1.3 floor(x) will be evaluated to 1
 *
 * @param {Number} x - Number to compute the floor value
 * @return {Number}
 *
 * @example <caption>Floor.</caption>
 * const s = carto.expressions;
 * const viz = new carto.Viz({
 *   width: s.floor(5.9)  // 5
 * });
 *
 * @example <caption>Floor. (String)</caption>
 * const viz = new carto.Viz(`
 *   width: floor(5.9)
 * `);
 *
 * @memberof carto.expressions
 * @name floor
 * @function
 * @api
 */
const Floor = genUnaryOp('floor', x => Math.floor(x), x => `floor(${x})`);

/**
 * Compute the ceil of the given expression.
 * Find the nearest integer that is greater than or equal to the expression value.
 *
 *  - When x is equal to 0.8 ceil(x) will be evaluated to 1
 *  - When x is equal to 1.3 ceil(x) will be evaluated to 2
 *
 * @param {Number} x - Number to compute the ceil value
 * @return {Number}
 *
 * @example <caption>Ceil.</caption>
 * const s = carto.expressions;
 * const viz = new carto.Viz({
 *   width: s.ceil(5.1);  // 6
 * });
 *
 * @example <caption>Ceil. (String)</caption>
 * const viz = new carto.Viz(`
 *   width: ceil(5.1)
 * `);
 *
 * @memberof carto.expressions
 * @name ceil
 * @function
 * @api
 */
const Ceil = genUnaryOp('ceil', x => Math.ceil(x), x => `ceil(${x})`);

function genUnaryOp (name, jsFn, glsl) {
    return class UnaryOperation extends _base__WEBPACK_IMPORTED_MODULE_1__["default"] {
        constructor (a) {
            Object(_utils__WEBPACK_IMPORTED_MODULE_0__["checkMaxArguments"])(arguments, 1, name);

            a = Object(_utils__WEBPACK_IMPORTED_MODULE_0__["implicitCast"])(a);
            super({ a });
            this.type = 'number';
            this.expressionName = name;
            this.inlineMaker = inlines => glsl(inlines.a);
        }
        get value () {
            return this.eval();
        }
        eval (feature) {
            return jsFn(this.a.eval(feature));
        }
        _bindMetadata (meta) {
            super._bindMetadata(meta);
            Object(_utils__WEBPACK_IMPORTED_MODULE_0__["checkType"])(name, 'x', 0, 'number', this.a);
            if (this.a.type !== 'number') {
                throw new _errors_carto_validation_error__WEBPACK_IMPORTED_MODULE_2__["default"](`${_errors_carto_validation_error__WEBPACK_IMPORTED_MODULE_2__["CartoValidationTypes"].INCORRECT_TYPE} Unary operation cannot be performed to '${this.a.type}'`);
            }
        }
    };
}


/***/ }),

/***/ "./src/renderer/viz/expressions/utils.js":
/*!***********************************************!*\
  !*** ./src/renderer/viz/expressions/utils.js ***!
  \***********************************************/
/*! exports provided: DEFAULT, checkMaxArguments, implicitCast, hexToRgb, getOrdinalFromIndex, getStringErrorPreface, throwInvalidType, throwInvalidInstance, throwInvalidNumber, throwInvalidArray, throwInvalidString, isArgConstructorTimeTyped, checkExpression, checkType, checkInstance, checkNumber, checkString, checkArray, checkFeatureIndependent, clamp, mix, fract */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DEFAULT", function() { return DEFAULT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "checkMaxArguments", function() { return checkMaxArguments; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "implicitCast", function() { return implicitCast; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hexToRgb", function() { return hexToRgb; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getOrdinalFromIndex", function() { return getOrdinalFromIndex; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getStringErrorPreface", function() { return getStringErrorPreface; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "throwInvalidType", function() { return throwInvalidType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "throwInvalidInstance", function() { return throwInvalidInstance; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "throwInvalidNumber", function() { return throwInvalidNumber; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "throwInvalidArray", function() { return throwInvalidArray; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "throwInvalidString", function() { return throwInvalidString; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isArgConstructorTimeTyped", function() { return isArgConstructorTimeTyped; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "checkExpression", function() { return checkExpression; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "checkType", function() { return checkType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "checkInstance", function() { return checkInstance; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "checkNumber", function() { return checkNumber; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "checkString", function() { return checkString; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "checkArray", function() { return checkArray; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "checkFeatureIndependent", function() { return checkFeatureIndependent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "clamp", function() { return clamp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mix", function() { return mix; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fract", function() { return fract; });
/* harmony import */ var _expressions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../expressions */ "./src/renderer/viz/expressions.js");
/* harmony import */ var _base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./base */ "./src/renderer/viz/expressions/base.js");
/* harmony import */ var _errors_carto_validation_error__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../errors/carto-validation-error */ "./src/errors/carto-validation-error.js");
/* harmony import */ var _errors_carto_parsing_error__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../errors/carto-parsing-error */ "./src/errors/carto-parsing-error.js");
/* harmony import */ var _colorspaces__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../colorspaces */ "./src/renderer/viz/colorspaces.js");






const DEFAULT = undefined;

function checkMaxArguments (constructorArguments, maxArguments, expressionName) {
    if (constructorArguments.length > maxArguments) {
        throw new _errors_carto_validation_error__WEBPACK_IMPORTED_MODULE_2__["default"](`${_errors_carto_validation_error__WEBPACK_IMPORTED_MODULE_2__["CartoValidationTypes"].TOO_MANY_ARGS} Expression '${expressionName}' accepts ${maxArguments} arguments, but ${constructorArguments.length} were passed.`);
    }
}

// To support literals (string and numeric) out of the box we need to cast them implicitly on constructors
function implicitCast (value) {
    if (_isNumber(value)) {
        return Object(_expressions__WEBPACK_IMPORTED_MODULE_0__["number"])(value);
    }

    if (typeof value === 'string') {
        return Object(_expressions__WEBPACK_IMPORTED_MODULE_0__["category"])(value);
    }

    if (Array.isArray(value)) {
        return Object(_expressions__WEBPACK_IMPORTED_MODULE_0__["list"])(value);
    }

    return value;
}

function hexToRgb (hex) {
    // Evaluate #ABC
    let result = /^#?([a-f\d]{1})([a-f\d]{1})([a-f\d]{1})$/i.exec(hex);
    if (result) {
        return {
            r: parseInt(result[1] + result[1], 16),
            g: parseInt(result[2] + result[2], 16),
            b: parseInt(result[3] + result[3], 16),
            a: 1
        };
    }

    // Evaluate #ABCD
    result = /^#?([a-f\d]{1})([a-f\d]{1})([a-f\d]{1})([a-f\d]{1})$/i.exec(hex);
    if (result) {
        return {
            r: parseInt(result[1] + result[1], 16),
            g: parseInt(result[2] + result[2], 16),
            b: parseInt(result[3] + result[3], 16),
            a: parseInt(result[4] + result[4], 16) / 255
        };
    }

    // Evaluate #ABCDEF
    result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    if (result) {
        return {
            r: parseInt(result[1], 16),
            g: parseInt(result[2], 16),
            b: parseInt(result[3], 16),
            a: 1
        };
    }

    // Evaluate #ABCDEFAF
    result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    if (result) {
        return {
            r: parseInt(result[1], 16),
            g: parseInt(result[2], 16),
            b: parseInt(result[3], 16),
            a: parseInt(result[4], 16) / 255
        };
    }

    throw new _errors_carto_parsing_error__WEBPACK_IMPORTED_MODULE_3__["default"]('Invalid hexadecimal color');
}

function getOrdinalFromIndex (index) {
    const indexToOrdinal = {
        1: 'first',
        2: 'second',
        3: 'third',
        4: 'fourth'
    };
    return indexToOrdinal[index] || String(index);
}

function getStringErrorPreface (expressionName, parameterName, parameterIndex) {
    return `${expressionName}(): invalid ${getOrdinalFromIndex(parameterIndex + 1)} parameter '${parameterName}'`;
}
function throwInvalidType (expressionName, parameterName, parameterIndex, expectedType, actualType) {
    throw new _errors_carto_validation_error__WEBPACK_IMPORTED_MODULE_2__["default"](`${_errors_carto_validation_error__WEBPACK_IMPORTED_MODULE_2__["CartoValidationTypes"].INCORRECT_TYPE} ${getStringErrorPreface(expressionName, parameterName, parameterIndex)}
    expected type was '${expectedType}', actual type was '${actualType}'`);
}

function throwInvalidInstance (expressionName, parameterName, parameterIndex, expectedClass) {
    throw new _errors_carto_validation_error__WEBPACK_IMPORTED_MODULE_2__["default"](`${_errors_carto_validation_error__WEBPACK_IMPORTED_MODULE_2__["CartoValidationTypes"].INCORRECT_TYPE} ${getStringErrorPreface(expressionName, parameterName, parameterIndex)}
    expected type was instance of '${expectedClass.name}'`);
}

function throwInvalidNumber (expressionName, parameterName, parameterIndex, number) {
    throw new _errors_carto_validation_error__WEBPACK_IMPORTED_MODULE_2__["default"](`${_errors_carto_validation_error__WEBPACK_IMPORTED_MODULE_2__["CartoValidationTypes"].INCORRECT_TYPE} ${getStringErrorPreface(expressionName, parameterName, parameterIndex)}
    type of '${number}' is ${typeof number}, 'number' was expected`);
}

function throwInvalidArray (expressionName, parameterName, parameterIndex, array) {
    throw new _errors_carto_validation_error__WEBPACK_IMPORTED_MODULE_2__["default"](`${_errors_carto_validation_error__WEBPACK_IMPORTED_MODULE_2__["CartoValidationTypes"].INCORRECT_TYPE} ${getStringErrorPreface(expressionName, parameterName, parameterIndex)}
    '${array}' is not an array`);
}

function throwInvalidString (expressionName, parameterName, parameterIndex, str) {
    throw new _errors_carto_validation_error__WEBPACK_IMPORTED_MODULE_2__["default"](`${_errors_carto_validation_error__WEBPACK_IMPORTED_MODULE_2__["CartoValidationTypes"].INCORRECT_TYPE} ${getStringErrorPreface(expressionName, parameterName, parameterIndex)}
    expected type was 'string', but ${str}' is not a string`);
}

// Returns true if the argument is of a type that cannot be strictly checked at constructor time
function isArgConstructorTimeTyped (arg) {
    switch (arg) {
        case 'number':
        case 'number-list':
        case 'number-property':
        case 'category':
        case 'category-list':
        case 'category-property':
            return false;
        default:
            return true;
    }
}

function checkExpression (expressionName, parameterName, parameterIndex, parameter) {
    if (!(parameter instanceof _base__WEBPACK_IMPORTED_MODULE_1__["default"])) {
        throw new _errors_carto_validation_error__WEBPACK_IMPORTED_MODULE_2__["default"](`${_errors_carto_validation_error__WEBPACK_IMPORTED_MODULE_2__["CartoValidationTypes"].INCORRECT_TYPE} ${getStringErrorPreface(expressionName, parameterName, parameterIndex)}
        '${parameter}' is not of type "carto.expressions.Base"`);
    }
}

function checkType (expressionName, parameterName, parameterIndex, expectedType, parameter) {
    checkExpression(expressionName, parameterName, parameterIndex, parameter);
    if (Array.isArray(expectedType)) {
        const ok = expectedType.some(type =>
            parameter.type === type
        );
        if (!ok) {
            throw new _errors_carto_validation_error__WEBPACK_IMPORTED_MODULE_2__["default"](`${_errors_carto_validation_error__WEBPACK_IMPORTED_MODULE_2__["CartoValidationTypes"].INCORRECT_TYPE} ${getStringErrorPreface(expressionName, parameterName, parameterIndex)}
            expected type was one of ${expectedType.join()}, actual type was '${parameter.type}'`);
        }
    } else if (parameter.type !== expectedType) {
        throwInvalidType(expressionName, parameterName, parameterIndex, expectedType, parameter.type);
    }
}

function checkInstance (expressionName, parameterName, parameterIndex, expectedClass, parameter) {
    checkExpression(expressionName, parameterName, parameterIndex, parameter);
    if (!(parameter.isA(expectedClass))) {
        throwInvalidInstance(expressionName, parameterName, parameterIndex, expectedClass);
    }
}

function checkNumber (expressionName, parameterName, parameterIndex, number) {
    if (!_isNumber(number)) {
        throwInvalidNumber(expressionName, parameterName, parameterIndex, number);
    }
}

function checkString (expressionName, parameterName, parameterIndex, str) {
    if (typeof str !== 'string') {
        throwInvalidString(expressionName, parameterName, parameterIndex, str);
    }
}

function checkArray (expressionName, parameterName, parameterIndex, array) {
    if (!Array.isArray(array)) {
        throwInvalidArray(expressionName, parameterName, parameterIndex, array);
    }
}

function checkFeatureIndependent (expressionName, parameterName, parameterIndex, parameter) {
    if (parameter.isFeatureDependent()) {
        throw new _errors_carto_validation_error__WEBPACK_IMPORTED_MODULE_2__["default"](`${_errors_carto_validation_error__WEBPACK_IMPORTED_MODULE_2__["CartoValidationTypes"].INCORRECT_VALUE} ${getStringErrorPreface(expressionName, parameterName, parameterIndex)}
        parameter cannot be feature dependent`);
    }
}

function clamp (x, min, max) {
    return Math.min(Math.max(x, min), max);
}

function mix (x, y, a) {
    return typeof x === 'number'
        ? x * (1 - a) + y * a
        : Object(_colorspaces__WEBPACK_IMPORTED_MODULE_4__["interpolateRGBAinCieLAB"])(x, y, a);
}

function fract (x) {
    return x - Math.floor(x);
}

function _isNumber (value) {
    return Number.isFinite(value) || value === Infinity || value === -Infinity || Number.isNaN(value);
}


/***/ }),

/***/ "./src/renderer/viz/expressions/viewportFeatures.js":
/*!**********************************************************!*\
  !*** ./src/renderer/viz/expressions/viewportFeatures.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ViewportFeatures; });
/* harmony import */ var _base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./base */ "./src/renderer/viz/expressions/base.js");
/* harmony import */ var _basic_property__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./basic/property */ "./src/renderer/viz/expressions/basic/property.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils */ "./src/renderer/viz/expressions/utils.js");
/* harmony import */ var _schema__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../schema */ "./src/renderer/schema.js");
/* harmony import */ var _errors_carto_validation_error__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../errors/carto-validation-error */ "./src/errors/carto-validation-error.js");
/* harmony import */ var _errors_carto_runtime_error__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../errors/carto-runtime-error */ "./src/errors/carto-runtime-error.js");







/**
 * Generates a list of features in the viewport
 *
 * For each feature, the properties specified as arguments to this expression will be available.
 * Filtered features will not be present in the list.
 * This expression cannot be used for rendering, it can only be used in JavaScript code as in the example below.
 *
 * @param {...Property} properties - properties that will appear in the feature list
 * @return {ViewportFeatures} ViewportFeatures
 *
 * @example <caption>Define and use a list of features.</caption>
 * const source = carto.source.Dataset('data');
 * const s = carto.expressions;
 * const viz = new carto.Viz({
 *   variables: {
 *     list: s.viewportFeatures(s.prop('value'), s.prop('category'))
 *   }
 * });
 * const layer = carto.Layer('layer', source, viz);
 * ...

 * layer.on('updated', () => {
 *   viz.variables.list.value.forEach(feature => {
 *     console.log('value:', feature.value, 'category:', feature.category);
 *   });
 * });
 *
 * @example <caption>Define and use a list of features. (String)</caption>
 * const source = carto.source.Dataset('data');
 * const viz = new carto.Viz(`
 *   \@list: viewportFeatures($value, $category)
 * `);
 * const layer = carto.Layer('layer', source, viz);
 * ...

 * layer.on('updated', () => {
 *   viz.variables.list.value.forEach(feature => {
 *     console.log('value:', feature.value, 'category:', feature.category);
 *   });
 * });
 *
 * @memberof carto.expressions
 * @name viewportFeatures
 * @function
 * @api
 */
class ViewportFeatures extends _base__WEBPACK_IMPORTED_MODULE_0__["default"] {
    constructor (...properties) {
        properties = properties.map(p => Object(_utils__WEBPACK_IMPORTED_MODULE_2__["implicitCast"])(p));

        // We need to set all the properties as children of the expression
        // in order for variables to be resolved.
        // And as an additional bonus we don't need to define _getMinimumNeededSchema
        super(_childrenFromProperties(properties));

        this.expr = [];
        this.type = 'featureList';
        this._isViewport = true;
        this._requiredProperties = properties;
        this._FeatureProxy = null;
    }

    _applyToShaderSource () {
        throw new _errors_carto_runtime_error__WEBPACK_IMPORTED_MODULE_5__["default"]('\'viewportFeatures\' cannot be used in visualizations.');
    }

    isFeatureDependent () {
        return false;
    }

    get value () {
        return this.expr;
    }

    eval () {
        return this.expr;
    }

    _resetViewportAgg () {
        if (!this._FeatureProxy) {
            if (!this._requiredProperties.every(p => (p.isA(_basic_property__WEBPACK_IMPORTED_MODULE_1__["default"])))) {
                throw new _errors_carto_validation_error__WEBPACK_IMPORTED_MODULE_4__["default"](`${_errors_carto_validation_error__WEBPACK_IMPORTED_MODULE_4__["CartoValidationTypes"].INCORRECT_TYPE} viewportFeatures arguments can only be properties`);
            }
            const columns = Object.keys(_schema__WEBPACK_IMPORTED_MODULE_3__["default"].simplify(this._getMinimumNeededSchema()));
            this._FeatureProxy = this.genViewportFeatureClass(columns);
        }
        this.expr = [];
    }

    accumViewportAgg (feature) {
        this.expr.push(new this._FeatureProxy(feature));
    }

    genViewportFeatureClass (properties) {
        const cls = class ViewportFeature {
            constructor (feature) {
                this._feature = feature;
            }
        };
        properties.forEach(prop => {
            Object.defineProperty(cls.prototype, prop, {
                get: function () {
                    return this._feature[prop];
                }
            });
        });
        return cls;
    }
}

function _childrenFromProperties (properties) {
    let i = 0;
    const childContainer = {};
    properties.forEach(property => {
        childContainer['p' + ++i] = property;
    });
    return childContainer;
}


/***/ }),

/***/ "./src/renderer/viz/expressions/zoom.js":
/*!**********************************************!*\
  !*** ./src/renderer/viz/expressions/zoom.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Zoom; });
/* harmony import */ var _base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./base */ "./src/renderer/viz/expressions/base.js");
/* harmony import */ var _expressions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../expressions */ "./src/renderer/viz/expressions.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils */ "./src/renderer/viz/expressions/utils.js");




/**
 * Get the current zoom level.
 *
 * @return {Number}
 *
 * @example <caption>Only show feature at zoom levels less than 7.</caption>
 * const s = carto.expressions;
 * const viz = new carto.Viz({
 *   filter: s.lt(s.zoom(), 7)
 * });
 *
 * @example <caption>Only show feature at zoom levels less than 7. (String)</caption>
 * const viz = new carto.Viz(`
 *   filter: zoom() < 7
 * `);
 *
 * @memberof carto.expressions
 * @name zoom
 * @function
 * @api
 */
class Zoom extends _base__WEBPACK_IMPORTED_MODULE_0__["default"] {
    constructor () {
        Object(_utils__WEBPACK_IMPORTED_MODULE_2__["checkMaxArguments"])(arguments, 0, 'zoom');

        super({ zoom: Object(_expressions__WEBPACK_IMPORTED_MODULE_1__["number"])(0) });
        this.type = 'number';
        super.inlineMaker = inline => inline.zoom;
    }
    eval () {
        return this.zoom.expr;
    }
    _preDraw (program, drawMetadata, gl) {
        this.zoom.expr = drawMetadata.zoomLevel;
        this.zoom._preDraw(program, drawMetadata, gl);
    }
}


/***/ }),

/***/ "./src/renderer/viz/parser.js":
/*!************************************!*\
  !*** ./src/renderer/viz/parser.js ***!
  \************************************/
/*! exports provided: parseVizExpression, parseVizDefinition, cleanComments */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "parseVizExpression", function() { return parseVizExpression; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "parseVizDefinition", function() { return parseVizDefinition; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cleanComments", function() { return cleanComments; });
/* harmony import */ var jsep__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jsep */ "./node_modules/jsep/build/jsep.js");
/* harmony import */ var jsep__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jsep__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _expressions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./expressions */ "./src/renderer/viz/expressions.js");
/* harmony import */ var _expressions_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./expressions/utils */ "./src/renderer/viz/expressions/utils.js");
/* harmony import */ var _expressions_color_cssColorNames__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./expressions/color/cssColorNames */ "./src/renderer/viz/expressions/color/cssColorNames.js");
/* harmony import */ var _expressions_color_NamedColor__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./expressions/color/NamedColor */ "./src/renderer/viz/expressions/color/NamedColor.js");
/* harmony import */ var _expressions_color_hex__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./expressions/color/hex */ "./src/renderer/viz/expressions/color/hex.js");
/* harmony import */ var _expressions_base__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./expressions/base */ "./src/renderer/viz/expressions/base.js");
/* harmony import */ var _errors_carto_parsing_error__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../errors/carto-parsing-error */ "./src/errors/carto-parsing-error.js");










// TODO use Schema classes

const aggFns = [];

const lowerCaseExpressions = {};
Object.keys(_expressions__WEBPACK_IMPORTED_MODULE_1__)
    .filter(name => name[0] === name[0].toLowerCase()) // Only get expressions starting with lowercase
    .map(name => { lowerCaseExpressions[name.toLocaleLowerCase()] = _expressions__WEBPACK_IMPORTED_MODULE_1__[name]; });

lowerCaseExpressions.true = _expressions__WEBPACK_IMPORTED_MODULE_1__["TRUE"];
lowerCaseExpressions.false = _expressions__WEBPACK_IMPORTED_MODULE_1__["FALSE"];
lowerCaseExpressions.align_center = _expressions__WEBPACK_IMPORTED_MODULE_1__["ALIGN_CENTER"];
lowerCaseExpressions.align_bottom = _expressions__WEBPACK_IMPORTED_MODULE_1__["ALIGN_BOTTOM"];

lowerCaseExpressions.pi = _expressions__WEBPACK_IMPORTED_MODULE_1__["PI"];
lowerCaseExpressions.e = _expressions__WEBPACK_IMPORTED_MODULE_1__["E"];
lowerCaseExpressions.hold = _expressions__WEBPACK_IMPORTED_MODULE_1__["HOLD"];

lowerCaseExpressions.bicycle = _expressions__WEBPACK_IMPORTED_MODULE_1__["BICYCLE"];
lowerCaseExpressions.building = _expressions__WEBPACK_IMPORTED_MODULE_1__["BUILDING"];
lowerCaseExpressions.bus = _expressions__WEBPACK_IMPORTED_MODULE_1__["BUS"];
lowerCaseExpressions.car = _expressions__WEBPACK_IMPORTED_MODULE_1__["CAR"];
lowerCaseExpressions.circle = _expressions__WEBPACK_IMPORTED_MODULE_1__["CIRCLE"];
lowerCaseExpressions.circle_outline = _expressions__WEBPACK_IMPORTED_MODULE_1__["CIRCLE_OUTLINE"];
lowerCaseExpressions.cross = _expressions__WEBPACK_IMPORTED_MODULE_1__["CROSS"];
lowerCaseExpressions.flag = _expressions__WEBPACK_IMPORTED_MODULE_1__["FLAG"];
lowerCaseExpressions.house = _expressions__WEBPACK_IMPORTED_MODULE_1__["HOUSE"];
lowerCaseExpressions.marker = _expressions__WEBPACK_IMPORTED_MODULE_1__["MARKER"];
lowerCaseExpressions.marker_outline = _expressions__WEBPACK_IMPORTED_MODULE_1__["MARKER_OUTLINE"];
lowerCaseExpressions.plus = _expressions__WEBPACK_IMPORTED_MODULE_1__["PLUS"];
lowerCaseExpressions.square = _expressions__WEBPACK_IMPORTED_MODULE_1__["SQUARE"];
lowerCaseExpressions.square_outline = _expressions__WEBPACK_IMPORTED_MODULE_1__["SQUARE_OUTLINE"];
lowerCaseExpressions.star = _expressions__WEBPACK_IMPORTED_MODULE_1__["STAR"];
lowerCaseExpressions.star_outline = _expressions__WEBPACK_IMPORTED_MODULE_1__["STAR_OUTLINE"];
lowerCaseExpressions.triangle = _expressions__WEBPACK_IMPORTED_MODULE_1__["TRIANGLE"];
lowerCaseExpressions.triangle_outline = _expressions__WEBPACK_IMPORTED_MODULE_1__["TRIANGLE_OUTLINE"];

const originalBaseBlendTo = _expressions_base__WEBPACK_IMPORTED_MODULE_6__["default"].prototype.blendTo;
_expressions_base__WEBPACK_IMPORTED_MODULE_6__["default"].prototype.blendTo = function (final, ...args) {
    if (typeof final === 'string') {
        final = parseVizExpression(final);
    }
    return originalBaseBlendTo.bind(this)(final, ...args);
};

function parseVizExpression (str) {
    prepareJsep();
    const r = Object(_expressions_utils__WEBPACK_IMPORTED_MODULE_2__["implicitCast"])(parseNode(jsep__WEBPACK_IMPORTED_MODULE_0___default()(str)));
    cleanJsep();
    return r;
}

function parseVizDefinition (str) {
    prepareJsep();
    const ast = jsep__WEBPACK_IMPORTED_MODULE_0___default()(cleanComments(str));
    let vizSpec = { variables: {} };
    if (ast.type === 'Compound') {
        ast.body.map(node => parseVizNamedExpr(vizSpec, node));
    } else {
        parseVizNamedExpr(vizSpec, ast);
    }
    cleanJsep();
    return vizSpec;
}

function parseVizNamedExpr (vizSpec, node) {
    if (node.operator !== ':') {
        throw new _errors_carto_parsing_error__WEBPACK_IMPORTED_MODULE_7__["default"]('Invalid syntax.');
    }

    if (node.left.name.length && node.left.name[0] === '@') {
        node.left.name = '__cartovl_variable_' + node.left.name.substr(1);
    }

    let name = node.left.name;

    if (!name) {
        throw new _errors_carto_parsing_error__WEBPACK_IMPORTED_MODULE_7__["default"]('Invalid syntax.');
    }

    if (name.startsWith('__cartovl_variable_')) {
        name = node.left.name.substr('__cartovl_variable_'.length);
        if (name in vizSpec.variables) {
            throw new _errors_carto_parsing_error__WEBPACK_IMPORTED_MODULE_7__["default"](`Variable '${name}' is already defined.`);
        }

        vizSpec.variables[name] = Object(_expressions_utils__WEBPACK_IMPORTED_MODULE_2__["implicitCast"])(parseNode(node.right));
    } else {
        if (name in vizSpec) {
            throw new _errors_carto_parsing_error__WEBPACK_IMPORTED_MODULE_7__["default"](`Property '${name}' is already defined.`);
        }
        const value = parseNode(node.right);
        vizSpec[name] = (name === 'resolution') ? value : Object(_expressions_utils__WEBPACK_IMPORTED_MODULE_2__["implicitCast"])(value);
    }
}

function parseFunctionCall (node) {
    const name = node.callee.name.toLowerCase();
    if (aggFns.includes(name)) {
        // node.arguments[0].name += '_' + name;
        const args = node.arguments.map(arg => parseNode(arg));
        return args[0];
    }
    const args = node.arguments.map(arg => parseNode(arg));
    if (lowerCaseExpressions[name]) {
        return lowerCaseExpressions[name](...args);
    }
    throw new _errors_carto_parsing_error__WEBPACK_IMPORTED_MODULE_7__["default"](`Invalid function name '${node.callee.name}'.`);
}

function parseBinaryOperation (node) {
    const left = parseNode(node.left);
    const right = parseNode(node.right);
    switch (node.operator.toLowerCase()) {
        case '*':
            return _expressions__WEBPACK_IMPORTED_MODULE_1__["mul"](left, right);
        case '/':
            return _expressions__WEBPACK_IMPORTED_MODULE_1__["div"](left, right);
        case '+':
            return _expressions__WEBPACK_IMPORTED_MODULE_1__["add"](left, right);
        case '-':
            return _expressions__WEBPACK_IMPORTED_MODULE_1__["sub"](left, right);
        case '%':
            return _expressions__WEBPACK_IMPORTED_MODULE_1__["mod"](left, right);
        case '^':
            return _expressions__WEBPACK_IMPORTED_MODULE_1__["pow"](left, right);
        case '>':
            return _expressions__WEBPACK_IMPORTED_MODULE_1__["greaterThan"](left, right);
        case '>=':
            return _expressions__WEBPACK_IMPORTED_MODULE_1__["greaterThanOrEqualTo"](left, right);
        case '<':
            return _expressions__WEBPACK_IMPORTED_MODULE_1__["lessThan"](left, right);
        case '<=':
            return _expressions__WEBPACK_IMPORTED_MODULE_1__["lessThanOrEqualTo"](left, right);
        case '==':
            return _expressions__WEBPACK_IMPORTED_MODULE_1__["equals"](left, right);
        case '!=':
            return _expressions__WEBPACK_IMPORTED_MODULE_1__["notEquals"](left, right);
        case 'and':
            return _expressions__WEBPACK_IMPORTED_MODULE_1__["and"](left, right);
        case 'or':
            return _expressions__WEBPACK_IMPORTED_MODULE_1__["or"](left, right);
        case 'in':
            return _expressions__WEBPACK_IMPORTED_MODULE_1__["in"](left, right);
        case 'nin':
            return _expressions__WEBPACK_IMPORTED_MODULE_1__["nin"](left, right);
        default:
            throw new _errors_carto_parsing_error__WEBPACK_IMPORTED_MODULE_7__["default"](`Invalid binary operator '${node.operator}'.`);
    }
}

function parseUnaryOperation (node) {
    switch (node.operator) {
        case '-':
            return _expressions__WEBPACK_IMPORTED_MODULE_1__["mul"](-1, parseNode(node.argument));
        case '+':
            return parseNode(node.argument);
        default:
            throw new _errors_carto_parsing_error__WEBPACK_IMPORTED_MODULE_7__["default"](`Invalid unary operator '${node.operator}'.`);
    }
}

function parseIdentifier (node) {
    if (node.name.length && node.name[0] === '@') {
        node.name = '__cartovl_variable_' + node.name.substr(1);
    }
    if (node.name.startsWith('__cartovl_variable_')) {
        return _expressions__WEBPACK_IMPORTED_MODULE_1__["variable"](node.name.substr('__cartovl_variable_'.length));
    } else if (node.name[0] === '#') {
        return new _expressions_color_hex__WEBPACK_IMPORTED_MODULE_5__["default"](node.name);
    } else if (node.name[0] === '$') {
        return _expressions__WEBPACK_IMPORTED_MODULE_1__["property"](node.name.substring(1));
    } else if (_expressions__WEBPACK_IMPORTED_MODULE_1__["palettes"][node.name.toUpperCase()]) {
        return _expressions__WEBPACK_IMPORTED_MODULE_1__["palettes"][node.name.toUpperCase()];
    } else if (lowerCaseExpressions[node.name.toLowerCase()]) {
        return lowerCaseExpressions[node.name.toLowerCase()];
    } else if (_expressions_color_cssColorNames__WEBPACK_IMPORTED_MODULE_3__["CSS_COLOR_NAMES"].includes(node.name.toLowerCase())) {
        return new _expressions_color_NamedColor__WEBPACK_IMPORTED_MODULE_4__["default"](node.name.toLowerCase());
    } else {
        throw new _errors_carto_parsing_error__WEBPACK_IMPORTED_MODULE_7__["default"](`Invalid expression '${JSON.stringify(node)}'.`);
    }
}

function parseNode (node) {
    if (node.type === 'CallExpression') {
        return parseFunctionCall(node);
    } else if (node.type === 'Literal') {
        return node.value;
    } else if (node.type === 'ArrayExpression') {
        return node.elements.map(e => parseNode(e));
    } else if (node.type === 'BinaryExpression') {
        return parseBinaryOperation(node);
    } else if (node.type === 'UnaryExpression') {
        return parseUnaryOperation(node);
    } else if (node.type === 'Identifier') {
        return parseIdentifier(node);
    }
    throw new _errors_carto_parsing_error__WEBPACK_IMPORTED_MODULE_7__["default"](`Invalid expression '${JSON.stringify(node)}'.`);
}

function prepareJsep () {
    // jsep addBinaryOp pollutes its module scope, we need to remove the custom operators afterwards
    jsep__WEBPACK_IMPORTED_MODULE_0___default.a.addBinaryOp(':', 0);
    jsep__WEBPACK_IMPORTED_MODULE_0___default.a.addBinaryOp('^', 11);
    jsep__WEBPACK_IMPORTED_MODULE_0___default.a.addBinaryOp('or', 1);
    jsep__WEBPACK_IMPORTED_MODULE_0___default.a.addBinaryOp('OR', 1);
    jsep__WEBPACK_IMPORTED_MODULE_0___default.a.addBinaryOp('and', 2);
    jsep__WEBPACK_IMPORTED_MODULE_0___default.a.addBinaryOp('AND', 2);
    jsep__WEBPACK_IMPORTED_MODULE_0___default.a.addBinaryOp('in', 13);
    jsep__WEBPACK_IMPORTED_MODULE_0___default.a.addBinaryOp('IN', 1);
    jsep__WEBPACK_IMPORTED_MODULE_0___default.a.addBinaryOp('nin', 13);
    jsep__WEBPACK_IMPORTED_MODULE_0___default.a.addBinaryOp('NIN', 13);
    jsep__WEBPACK_IMPORTED_MODULE_0___default.a.addIdentifierChar('@');
    jsep__WEBPACK_IMPORTED_MODULE_0___default.a.addIdentifierChar('#');
    jsep__WEBPACK_IMPORTED_MODULE_0___default.a.removeLiteral('true');
    jsep__WEBPACK_IMPORTED_MODULE_0___default.a.removeLiteral('false');
}

function cleanJsep () {
    jsep__WEBPACK_IMPORTED_MODULE_0___default.a.removeBinaryOp('in');
    jsep__WEBPACK_IMPORTED_MODULE_0___default.a.removeBinaryOp('IN');
    jsep__WEBPACK_IMPORTED_MODULE_0___default.a.removeBinaryOp('nin');
    jsep__WEBPACK_IMPORTED_MODULE_0___default.a.removeBinaryOp('NIN');
    jsep__WEBPACK_IMPORTED_MODULE_0___default.a.removeBinaryOp('and');
    jsep__WEBPACK_IMPORTED_MODULE_0___default.a.removeBinaryOp('AND');
    jsep__WEBPACK_IMPORTED_MODULE_0___default.a.removeBinaryOp('or');
    jsep__WEBPACK_IMPORTED_MODULE_0___default.a.removeBinaryOp('OR');
    jsep__WEBPACK_IMPORTED_MODULE_0___default.a.removeBinaryOp('^');
    jsep__WEBPACK_IMPORTED_MODULE_0___default.a.removeBinaryOp(':');
    jsep__WEBPACK_IMPORTED_MODULE_0___default.a.removeIdentifierChar('@');
    jsep__WEBPACK_IMPORTED_MODULE_0___default.a.removeIdentifierChar('#');
    jsep__WEBPACK_IMPORTED_MODULE_0___default.a.addLiteral('true');
    jsep__WEBPACK_IMPORTED_MODULE_0___default.a.addLiteral('false');
}

/**
 * Remove comments from string
 * - // line comments
 * - /* block comments
 * - Keep comments inside single and double quotes tracking escape chars
 * Based on: https://j11y.io/javascript/removing-comments-in-javascript/
 */
function cleanComments (str) {
    const mode = {
        singleQuote: false,
        doubleQuote: false,
        blockComment: false,
        lineComment: false,
        escape: 0
    };

    // Adding chars to avoid index checking
    str = ('_' + str + '_').split('');

    for (let i = 0, l = str.length; i < l; i++) {
        if (mode.singleQuote) {
            if (str[i] === '\\') {
                mode.escape++;
            } else if (str[i] === '\'' && mode.escape % 2 === 0) {
                mode.singleQuote = false;
                mode.escape = 0;
            }
            continue;
        }

        if (mode.doubleQuote) {
            if (str[i] === '\\') {
                mode.escape++;
            } else if (str[i] === '"' && mode.escape % 2 === 0) {
                mode.doubleQuote = false;
                mode.escape = 0;
            }
            continue;
        }

        if (mode.blockComment) {
            if (str[i] === '*' && str[i + 1] === '/') {
                str[i + 1] = '';
                mode.blockComment = false;
            }
            str[i] = '';
            continue;
        }

        if (mode.lineComment) {
            if (str[i + 1] === '\n' || str[i + 1] === '\r') {
                mode.lineComment = false;
            }
            if (i + 1 < l) {
                str[i] = '';
            }
            continue;
        }

        mode.doubleQuote = str[i] === '"';
        mode.singleQuote = str[i] === '\'';

        if (str[i] === '/') {
            if (str[i + 1] === '*') {
                str[i] = '';
                mode.blockComment = true;
                continue;
            }
            if (str[i + 1] === '/') {
                str[i] = '';
                mode.lineComment = true;
                continue;
            }
        }
    }

    // Remove chars added before
    return str.join('').slice(1, -1);
}


/***/ }),

/***/ "./src/renderer/viz/svgs/bicycle.svg":
/*!*******************************************!*\
  !*** ./src/renderer/viz/svgs/bicycle.svg ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<svg version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 15 15\"><path d=\"M7.5 2c-.676-.01-.676 1.01 0 1H9v1.266L6.197 6.6 5.223 4H5.5c.676.01.676-1.01 0-1h-2c-.676-.01-.676 1.01 0 1h.652l.891 2.375A3.45 3.45 0 0 0 3.5 6C1.573 6 0 7.573 0 9.5S1.573 13 3.5 13 7 11.427 7 9.5c0-.67-.2-1.291-.53-1.824l2.821-2.35.463 1.16C8.71 7.094 8 8.211 8 9.5c0 1.927 1.573 3.5 3.5 3.5S15 11.427 15 9.5 13.427 6 11.5 6c-.283 0-.554.043-.818.107L10 4.402V2.5a.5.5 0 0 0-.5-.5h-2zm-4 5a2.48 2.48 0 0 1 1.555.553L3.18 9.115c-.511.427.128 1.195.64.77l1.875-1.563c.188.352.305.75.305 1.178C6 10.887 4.887 12 3.5 12S1 10.887 1 9.5 2.113 7 3.5 7zm8 0C12.887 7 14 8.113 14 9.5S12.887 12 11.5 12 9 10.887 9 9.5c0-.877.447-1.642 1.125-2.088l.91 2.274c.246.623 1.18.25.93-.372l-.908-2.27C11.2 7.02 11.348 7 11.5 7z\"></path></svg>"

/***/ }),

/***/ "./src/renderer/viz/svgs/building.svg":
/*!********************************************!*\
  !*** ./src/renderer/viz/svgs/building.svg ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<svg version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 15 15\"><path d=\"M3 2v11h5v-3h3v3h1V2H3zm4 10H4v-2h3v2zm0-3H4V7h3v2zm0-3H4V4h3v2zm4 3H8V7h3v2zm0-3H8V4h3v2z\"></path></svg>"

/***/ }),

/***/ "./src/renderer/viz/svgs/bus.svg":
/*!***************************************!*\
  !*** ./src/renderer/viz/svgs/bus.svg ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<svg version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 15 15\"><path d=\"M4 0C2.636 0 1 .743 1 2.746V12s0 1 1 1v1s0 1 1 1 1-1 1-1v-1h7v1s0 1 1 1 1-1 1-1v-1s1 0 1-1V2.746C14 .701 12.764 0 11.4 0H4zm.25 1.5h6.5a.25.25 0 1 1 0 .5h-6.5a.25.25 0 1 1 0-.5zM3 3h9c1 0 1 .967 1 .967V7s0 1-1 1H3C2 8 2 7 2 7V4s0-1 1-1zm0 7a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm9 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z\"></path></svg>"

/***/ }),

/***/ "./src/renderer/viz/svgs/car.svg":
/*!***************************************!*\
  !*** ./src/renderer/viz/svgs/car.svg ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<svg version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 15 15\"><path d=\"M14 7a1.5 1.5 0 0 0-1.15-1.45l-1.39-3.24A.5.5 0 0 0 11 2H4a.5.5 0 0 0-.44.28L2.15 5.54A1.5 1.5 0 0 0 1 7v3.5h1v1a1 1 0 1 0 2 0v-1h7v1a1 1 0 1 0 2 0v-1h1V7zM4.3 3h6.4l1.05 2.5h-8.5L4.3 3zM3 9a1 1 0 1 1 0-2 1 1 0 0 1 0 2zm9 0a1 1 0 1 1 0-2 1 1 0 0 1 0 2z\"></path></svg>"

/***/ }),

/***/ "./src/renderer/viz/svgs/circle.svg":
/*!******************************************!*\
  !*** ./src/renderer/viz/svgs/circle.svg ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<svg version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 15 15\"><path d=\"M14 7.5a6.5 6.5 0 1 1-13 0 6.5 6.5 0 0 1 13 0z\"></path></svg>"

/***/ }),

/***/ "./src/renderer/viz/svgs/circleOutline.svg":
/*!*************************************************!*\
  !*** ./src/renderer/viz/svgs/circleOutline.svg ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<svg version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 15 15\"><path d=\"M7.5 0a7.5 7.5 0 1 1 0 15 7.5 7.5 0 0 1 0-15zm0 1.667a5.833 5.833 0 1 0 0 11.666 5.833 5.833 0 0 0 0-11.666z\"></path></svg>"

/***/ }),

/***/ "./src/renderer/viz/svgs/cross.svg":
/*!*****************************************!*\
  !*** ./src/renderer/viz/svgs/cross.svg ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<svg version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 15 15\"><path d=\"M2.64 1.27L7.5 6.13l4.84-4.84A.92.92 0 0 1 13 1a1 1 0 0 1 1 1 .9.9 0 0 1-.27.66L8.84 7.5l4.89 4.89A.9.9 0 0 1 14 13a1 1 0 0 1-1 1 .92.92 0 0 1-.69-.27L7.5 8.87l-4.85 4.85A.92.92 0 0 1 2 14a1 1 0 0 1-1-1 .9.9 0 0 1 .27-.66L6.16 7.5 1.27 2.61A.9.9 0 0 1 1 2a1 1 0 0 1 1-1c.24.003.47.1.64.27z\"></path></svg>"

/***/ }),

/***/ "./src/renderer/viz/svgs/flag.svg":
/*!****************************************!*\
  !*** ./src/renderer/viz/svgs/flag.svg ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<svg version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 15 15\"><path d=\"M6.65 2C5.43 2 4.48 3.38 4.11 3.82a.49.49 0 0 0-.11.32v4.4a.44.44 0 0 0 .72.36 3 3 0 0 1 1.93-1.17C8.06 7.73 8.6 9 10.07 9a5.28 5.28 0 0 0 2.73-1.09.49.49 0 0 0 .2-.4V2.45a.44.44 0 0 0-.62-.45 5.75 5.75 0 0 1-2.31 1.06C8.6 3.08 8.12 2 6.65 2zM2.5 3a1 1 0 1 1 0-2 1 1 0 0 1 0 2zM3 4v9.48a.5.5 0 0 1-1 0V4a.5.5 0 0 1 1 0z\"></path></svg>"

/***/ }),

/***/ "./src/renderer/viz/svgs/house.svg":
/*!*****************************************!*\
  !*** ./src/renderer/viz/svgs/house.svg ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<svg version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 15 15\"><path d=\"M2 13.748c0 .138.112.25.25.25h3.749v-3h3v3h3.749a.25.25 0 0 0 .25-.25v-5.75H2v5.75zm11.93-7.17l-.932-.82V2a1 1 0 1 0-2 0v2L7.681 1.09a.25.25 0 0 0-.353-.011l-.011.011-6.25 5.463a.25.25 0 0 0 .18.42L3 7h10.747a.25.25 0 0 0 .183-.421z\"></path></svg>"

/***/ }),

/***/ "./src/renderer/viz/svgs/marker.svg":
/*!******************************************!*\
  !*** ./src/renderer/viz/svgs/marker.svg ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<svg version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 15 15\"><path d=\"M7.5 0C5.068 0 2.23 1.486 2.23 5.27c0 2.568 4.054 8.244 5.27 9.73 1.081-1.486 5.27-7.027 5.27-9.73C12.77 1.487 9.932 0 7.5 0z\"></path></svg>"

/***/ }),

/***/ "./src/renderer/viz/svgs/markerOutline.svg":
/*!*************************************************!*\
  !*** ./src/renderer/viz/svgs/markerOutline.svg ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<svg version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 15 15\"><path data-name=\"Layer 7\" d=\"M7.5 14.941l-.4-.495c-.973-1.189-4.9-6.556-4.9-9.16A5.066 5.066 0 0 1 7.036 0q.222-.01.445 0a5.066 5.066 0 0 1 5.286 4.836q.01.225 0 .45c0 2.213-2.669 6.111-4.678 8.851zM7.481.986a4.077 4.077 0 0 0-4.3 4.3c0 1.832 2.759 6.038 4.286 8.034 1.25-1.71 4.315-5.989 4.315-8.034a4.077 4.077 0 0 0-4.3-4.3z\"></path></svg>"

/***/ }),

/***/ "./src/renderer/viz/svgs/plus.svg":
/*!****************************************!*\
  !*** ./src/renderer/viz/svgs/plus.svg ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<svg version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 15 15\"><path d=\"M7 1c-.6 0-1 .4-1 1v4H2c-.6 0-1 .4-1 1v1c0 .6.4 1 1 1h4v4c0 .6.4 1 1 1h1c.6 0 1-.4 1-1V9h4c.6 0 1-.4 1-1V7c0-.6-.4-1-1-1H9V2c0-.6-.4-1-1-1H7z\" fill=\"#010101\"></path></svg>"

/***/ }),

/***/ "./src/renderer/viz/svgs/square.svg":
/*!******************************************!*\
  !*** ./src/renderer/viz/svgs/square.svg ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<svg version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 15 15\"><path d=\"M13 14H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h11a1 1 0 0 1 1 1v11a1 1 0 0 1-1 1z\"></path></svg>"

/***/ }),

/***/ "./src/renderer/viz/svgs/squareOutline.svg":
/*!*************************************************!*\
  !*** ./src/renderer/viz/svgs/squareOutline.svg ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<svg version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 15 15\"><path d=\"M12.7 2.3v10.4H2.3V2.3h10.4M13 1H2a1 1 0 0 0-1 1v11a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1z\"></path></svg>"

/***/ }),

/***/ "./src/renderer/viz/svgs/star.svg":
/*!****************************************!*\
  !*** ./src/renderer/viz/svgs/star.svg ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<svg version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 15 15\"><path d=\"M7.5 0l-2 5h-5l4 3.5-2 6 5-3.5 5 3.5-2-6 4-3.5h-5l-2-5z\"></path></svg>"

/***/ }),

/***/ "./src/renderer/viz/svgs/starOutline.svg":
/*!***********************************************!*\
  !*** ./src/renderer/viz/svgs/starOutline.svg ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<svg version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 15 15\"><path d=\"M7.5 3.19l1.07 2.68.25.63h3l-2 1.75-.5.44.23.63 1 3.13-2.48-1.77-.57-.4-.57.4-2.52 1.77 1-3.13.21-.63-.5-.44-2-1.75h3l.25-.63L7.5 3.19M7.5.5l-2 5h-5l4 3.5-2 6 5-3.5 5 3.5-2-6 4-3.5h-5l-2-5z\" fill=\"#010101\"></path></svg>"

/***/ }),

/***/ "./src/renderer/viz/svgs/triangle.svg":
/*!********************************************!*\
  !*** ./src/renderer/viz/svgs/triangle.svg ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<svg version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 15 15\"><path d=\"M7.538 2c-.294 0-.488.177-.615.385l-5.846 9.538C1 12 1 12.153 1 12.308c0 .538.385.692.692.692h11.616c.384 0 .692-.154.692-.692 0-.154 0-.231-.077-.385l-5.77-9.538C8.029 2.177 7.789 2 7.539 2z\"></path></svg>"

/***/ }),

/***/ "./src/renderer/viz/svgs/triangleOutline.svg":
/*!***************************************************!*\
  !*** ./src/renderer/viz/svgs/triangleOutline.svg ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<svg version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 15 15\"><path d=\"M7.524 1.5a.77.77 0 0 0-.69.395l-5.5 9.87C1.022 12.307 1.395 13 2 13h11c.605 0 .978-.692.666-1.236l-5.5-9.869a.773.773 0 0 0-.642-.395zM7.5 3.9l4.127 7.47H3.373L7.5 3.9z\"></path></svg>"

/***/ }),

/***/ "./src/setup/auth-service.js":
/*!***********************************!*\
  !*** ./src/setup/auth-service.js ***!
  \***********************************/
/*! exports provided: setDefaultAuth, getDefaultAuth, checkAuth, cleanDefaultAuth */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setDefaultAuth", function() { return setDefaultAuth; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getDefaultAuth", function() { return getDefaultAuth; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "checkAuth", function() { return checkAuth; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cleanDefaultAuth", function() { return cleanDefaultAuth; });
/* harmony import */ var _utils_util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/util */ "./src/utils/util.js");
/* harmony import */ var _src_errors_carto_validation_error__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../src/errors/carto-validation-error */ "./src/errors/carto-validation-error.js");



let defaultAuth;

/**
 * Set default authentication parameters: user and apiKey.
 *
 * @param {object} auth
 * @param {string} auth.user - Name of the user
 * @param {string} auth.apiKey - API key used to authenticate against CARTO
 *
 * @memberof carto
 * @api
 */
function setDefaultAuth (auth) {
    checkAuth(auth);
    defaultAuth = auth;
}

/**
 * Get default authentication
 * @return {object}
 */
function getDefaultAuth () {
    return defaultAuth;
}

/**
 * Reset the default auth object
 */
function cleanDefaultAuth () {
    defaultAuth = undefined;
}

/**
 * Check a valid auth parameter.
 *
 * @param  {object} auth
 */
function checkAuth (auth) {
    if (_utils_util__WEBPACK_IMPORTED_MODULE_0__["isUndefined"](auth)) {
        throw new _src_errors_carto_validation_error__WEBPACK_IMPORTED_MODULE_1__["default"](`${_src_errors_carto_validation_error__WEBPACK_IMPORTED_MODULE_1__["CartoValidationTypes"].MISSING_REQUIRED} 'auth'`);
    }
    if (!_utils_util__WEBPACK_IMPORTED_MODULE_0__["isObject"](auth)) {
        throw new _src_errors_carto_validation_error__WEBPACK_IMPORTED_MODULE_1__["default"](`${_src_errors_carto_validation_error__WEBPACK_IMPORTED_MODULE_1__["CartoValidationTypes"].INCORRECT_TYPE} 'auth' property must be an object.`);
    }
    auth.username = auth.user; // API adapter
    checkApiKey(auth.apiKey);
    checkUsername(auth.username);
}

function checkApiKey (apiKey) {
    if (_utils_util__WEBPACK_IMPORTED_MODULE_0__["isUndefined"](apiKey)) {
        throw new _src_errors_carto_validation_error__WEBPACK_IMPORTED_MODULE_1__["default"](`${_src_errors_carto_validation_error__WEBPACK_IMPORTED_MODULE_1__["CartoValidationTypes"].MISSING_REQUIRED} 'apiKey'`);
    }
    if (!_utils_util__WEBPACK_IMPORTED_MODULE_0__["isString"](apiKey)) {
        throw new _src_errors_carto_validation_error__WEBPACK_IMPORTED_MODULE_1__["default"](`${_src_errors_carto_validation_error__WEBPACK_IMPORTED_MODULE_1__["CartoValidationTypes"].INCORRECT_TYPE} 'apiKey' property must be a string.`);
    }
    if (apiKey === '') {
        throw new _src_errors_carto_validation_error__WEBPACK_IMPORTED_MODULE_1__["default"](`${_src_errors_carto_validation_error__WEBPACK_IMPORTED_MODULE_1__["CartoValidationTypes"].INCORRECT_VALUE} 'apiKey' property must be not empty.`);
    }
}

function checkUsername (username) {
    if (_utils_util__WEBPACK_IMPORTED_MODULE_0__["isUndefined"](username)) {
        throw new _src_errors_carto_validation_error__WEBPACK_IMPORTED_MODULE_1__["default"](`${_src_errors_carto_validation_error__WEBPACK_IMPORTED_MODULE_1__["CartoValidationTypes"].MISSING_REQUIRED} 'username'`);
    }
    if (!_utils_util__WEBPACK_IMPORTED_MODULE_0__["isString"](username)) {
        throw new _src_errors_carto_validation_error__WEBPACK_IMPORTED_MODULE_1__["default"](`${_src_errors_carto_validation_error__WEBPACK_IMPORTED_MODULE_1__["CartoValidationTypes"].INCORRECT_TYPE} 'username' property must be a string.`);
    }
    if (username === '') {
        throw new _src_errors_carto_validation_error__WEBPACK_IMPORTED_MODULE_1__["default"](`${_src_errors_carto_validation_error__WEBPACK_IMPORTED_MODULE_1__["CartoValidationTypes"].INCORRECT_VALUE} 'username' property must be not empty.`);
    }
}




/***/ }),

/***/ "./src/setup/config-service.js":
/*!*************************************!*\
  !*** ./src/setup/config-service.js ***!
  \*************************************/
/*! exports provided: setDefaultConfig, getDefaultConfig, checkConfig, cleanDefaultConfig */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setDefaultConfig", function() { return setDefaultConfig; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getDefaultConfig", function() { return getDefaultConfig; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "checkConfig", function() { return checkConfig; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cleanDefaultConfig", function() { return cleanDefaultConfig; });
/* harmony import */ var _utils_util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/util */ "./src/utils/util.js");
/* harmony import */ var _src_errors_carto_validation_error__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../src/errors/carto-validation-error */ "./src/errors/carto-validation-error.js");



let defaultConfig;

/**
 * Set default configuration parameters
 *
 * @param {object} config
 * @param {string} config.serverURL='https://{user}.carto.com' - Template URL of the CARTO Maps API server
 *
 * @memberof carto
 * @api
 */
function setDefaultConfig (config) {
    checkConfig(config);
    defaultConfig = config;
}

/**
 * Get default config
 * @return {object}
 */
function getDefaultConfig () {
    return defaultConfig;
}

/**
 * Clean default config object
 */
function cleanDefaultConfig () {
    defaultConfig = undefined;
}

/**
 * Check a valid config parameter.
 *
 * @param  {object} config
 */
function checkConfig (config) {
    if (config) {
        if (!_utils_util__WEBPACK_IMPORTED_MODULE_0__["isObject"](config)) {
            throw new _src_errors_carto_validation_error__WEBPACK_IMPORTED_MODULE_1__["default"](`${_src_errors_carto_validation_error__WEBPACK_IMPORTED_MODULE_1__["CartoValidationTypes"].INCORRECT_TYPE} 'config' property must be an object.`);
        }
        _checkServerURL(config.serverURL);
    }
}

function _checkServerURL (serverURL) {
    if (!_utils_util__WEBPACK_IMPORTED_MODULE_0__["isString"](serverURL)) {
        throw new _src_errors_carto_validation_error__WEBPACK_IMPORTED_MODULE_1__["default"](`${_src_errors_carto_validation_error__WEBPACK_IMPORTED_MODULE_1__["CartoValidationTypes"].INCORRECT_TYPE} 'serverURL' property must be a string.`);
    }
}




/***/ }),

/***/ "./src/sources/Base.js":
/*!*****************************!*\
  !*** ./src/sources/Base.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Base; });
class Base {
    /**
     * Base data source object.
     *
     * The methods listed in the {@link carto.source.Base} object are available in all source objects.
     *
     * Use a source to reference the data used in a {@link carto.layer.Base|layer}.
     *
     * {@link carto.source.Base} should not be used directly use {@link carto.source.Dataset}, {@link carto.source.SQL} of {@link carto.source.GeoJSON} instead.
     *
     *
     * @memberof carto.source
     * @constructor Base
     * @abstract
     * @api
     */
}


/***/ }),

/***/ "./src/sources/BaseWindshaft.js":
/*!**************************************!*\
  !*** ./src/sources/BaseWindshaft.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return BaseWindshaft; });
/* harmony import */ var _Base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Base */ "./src/sources/Base.js");
/* harmony import */ var _client_windshaft__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../client/windshaft */ "./src/client/windshaft.js");
/* harmony import */ var _setup_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../setup/auth-service */ "./src/setup/auth-service.js");
/* harmony import */ var _setup_config_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../setup/config-service */ "./src/setup/config-service.js");





const DEFAULT_SERVER_URL_TEMPLATE = 'https://{user}.carto.com';

class BaseWindshaft extends _Base__WEBPACK_IMPORTED_MODULE_0__["default"] {
    constructor () {
        super();
        this._client = new _client_windshaft__WEBPACK_IMPORTED_MODULE_1__["default"](this);
    }

    initialize (auth, config) {
        this._auth = auth || Object(_setup_auth_service__WEBPACK_IMPORTED_MODULE_2__["getDefaultAuth"])();
        this._config = config || Object(_setup_config_service__WEBPACK_IMPORTED_MODULE_3__["getDefaultConfig"])();
        Object(_setup_auth_service__WEBPACK_IMPORTED_MODULE_2__["checkAuth"])(this._auth);
        Object(_setup_config_service__WEBPACK_IMPORTED_MODULE_3__["checkConfig"])(this._config);
        this._apiKey = this._auth.apiKey;
        this._username = this._auth.username;
        this._serverURL = this._generateURL(this._auth, this._config);
    }

    bindLayer (...args) {
        this._client.bindLayer(...args);
    }

    requiresNewMetadata (viz) {
        return this._client.requiresNewMetadata(viz);
    }

    requestMetadata (viz) {
        return this._client.getMetadata(viz);
    }

    requestData (zoom, viewport) {
        return this._client.getData(zoom, viewport);
    }

    free () {
        this._client.free();
    }

    _generateURL (auth, config) {
        let url = (config && config.serverURL) || DEFAULT_SERVER_URL_TEMPLATE;
        url = url.replace(/{user}/, auth.username);
        return url;
    }
}


/***/ }),

/***/ "./src/sources/DataframeCache.js":
/*!***************************************!*\
  !*** ./src/sources/DataframeCache.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return DataframeCache; });
/* harmony import */ var lru_cache__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lru-cache */ "./node_modules/lru-cache/index.js");
/* harmony import */ var lru_cache__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lru_cache__WEBPACK_IMPORTED_MODULE_0__);


class DataframeCache {
    constructor () {
        const lruOptions = {
            max: 256,
            // TODO improve cache length heuristic
            length: () => 1,
            maxAge: 1000 * 60 * 60,
            dispose: (uid, dataframePromise) => {
                dataframePromise.then(dataframe => {
                    if (!dataframe.empty) {
                        dataframe.free();
                    }
                });
            }
        };
        this._cache = lru_cache__WEBPACK_IMPORTED_MODULE_0__(lruOptions);
    }

    // Get the promise of the dataframe with the provided unique ID, by querying the local cache, and using the fetch function as a fallback.
    // The `fetch` function will be called with the provided `uid` and it is expected that it will return a promise to a Dataframe
    get (uid, fetch) {
        const cachedDataframe = this._cache.get(uid);
        if (cachedDataframe) {
            return cachedDataframe;
        }

        const dataframePromise = fetch(uid);
        this._cache.set(uid, dataframePromise);
        return dataframePromise;
    }

    free () {
        this._cache.reset();
    }
}


/***/ }),

/***/ "./src/sources/Dataset.js":
/*!********************************!*\
  !*** ./src/sources/Dataset.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Dataset; });
/* harmony import */ var _src_errors_carto_validation_error__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../src/errors/carto-validation-error */ "./src/errors/carto-validation-error.js");
/* harmony import */ var _utils_util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/util */ "./src/utils/util.js");
/* harmony import */ var _BaseWindshaft__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./BaseWindshaft */ "./src/sources/BaseWindshaft.js");




class Dataset extends _BaseWindshaft__WEBPACK_IMPORTED_MODULE_2__["default"] {
    /**
     * A dataset defines the data that will be displayed in a layer and is equivalent
     * to a table in the server.
     *
     * If you have a table named `european_cities` in your CARTO account you could load all the
     * data in a layer using a `carto.source.Dataset`.
     *
     * If you want to load data applying a SQL query see {@link carto.source.SQL|carto.source.SQL}.
     *
     * Since tables in the server are protected you must provide valid credentials in order to get access to the data.
     * This can be done {@link carto.setDefaultAuth|setting the default auth} in the carto object or providing an `auth`
     * object with your username and apiKey.
     *
     * If your server is not hosted by CARTO you must add a third parameter that includes the serverURL. This can be done {@link carto.setDefaultConfig|setting the default config} in the carto object or providing a `config`
     * object with your serverURL.
     *
     * The combination of different type of geometries on the same source is not supported. Valid geometry types are `points`, `lines` and `polygons`.
     *
     * @param {string} tableName - The name of an existing table
     * @param {object} auth
     * @param {string} auth.apiKey - API key used to authenticate against CARTO
     * @param {string} auth.user - Name of the user
     * @param {object} config
     * @param {string} [config.serverURL='https://{user}.carto.com'] - URL of the CARTO Maps API server
     *
     * @example
     * const source = new carto.source.Dataset('european_cities', {
     *   apiKey: 'YOUR_API_KEY_HERE',
     *   user: 'YOUR_USERNAME_HERE'
     * });
     *
     * @fires CartoError
     *
     * @constructor Dataset
     * @extends carto.source.Base
     * @memberof carto.source
     * @api
     */
    constructor (tableName, auth, config) {
        super();
        this._checkTableName(tableName);
        this._tableName = tableName;
        this.initialize(auth, config);
    }

    _clone () {
        return new Dataset(this._tableName, this._auth, this._config);
    }

    _checkTableName (tableName) {
        if (_utils_util__WEBPACK_IMPORTED_MODULE_1__["default"].isUndefined(tableName)) {
            throw new _src_errors_carto_validation_error__WEBPACK_IMPORTED_MODULE_0__["default"](`${_src_errors_carto_validation_error__WEBPACK_IMPORTED_MODULE_0__["CartoValidationTypes"].MISSING_REQUIRED} 'tableName'`);
        }
        if (!_utils_util__WEBPACK_IMPORTED_MODULE_1__["default"].isString(tableName)) {
            throw new _src_errors_carto_validation_error__WEBPACK_IMPORTED_MODULE_0__["default"](`${_src_errors_carto_validation_error__WEBPACK_IMPORTED_MODULE_0__["CartoValidationTypes"].INCORRECT_TYPE} 'tableName' property must be a string.`);
        }
        if (tableName === '') {
            throw new _src_errors_carto_validation_error__WEBPACK_IMPORTED_MODULE_0__["default"](`${_src_errors_carto_validation_error__WEBPACK_IMPORTED_MODULE_0__["CartoValidationTypes"].INCORRECT_VALUE} 'tableName' property must be not empty.`);
        }
    }
}


/***/ }),

/***/ "./src/sources/GeoJSON.js":
/*!********************************!*\
  !*** ./src/sources/GeoJSON.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return GeoJSON; });
/* harmony import */ var _client_rsys__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../client/rsys */ "./src/client/rsys.js");
/* harmony import */ var _renderer_Dataframe__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../renderer/Dataframe */ "./src/renderer/Dataframe.js");
/* harmony import */ var _renderer_Metadata__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../renderer/Metadata */ "./src/renderer/Metadata.js");
/* harmony import */ var _src_errors_carto_validation_error__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../src/errors/carto-validation-error */ "./src/errors/carto-validation-error.js");
/* harmony import */ var _src_errors_carto_runtime_error__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../src/errors/carto-runtime-error */ "./src/errors/carto-runtime-error.js");
/* harmony import */ var _utils_util__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils/util */ "./src/utils/util.js");
/* harmony import */ var _Base__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Base */ "./src/sources/Base.js");
/* harmony import */ var _renderer_schema__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../renderer/schema */ "./src/renderer/schema.js");









const SAMPLE_TARGET_SIZE = 1000;

class GeoJSON extends _Base__WEBPACK_IMPORTED_MODULE_6__["default"] {
    /**
     * Create a carto.source.GeoJSON source from a GeoJSON object.
     *
     * @param {object} data - A GeoJSON data object
     * @param {object} options - Options
     * @param {array<string>} options.dateColumns - List of columns that contain dates.
     *
     * The combination of different type of geometries on the same source is not supported. Valid geometry types are `Point`, `LineString`, `MultiLineString`, `Polygon` and `MultiPolygon`.
     *
     * @example
     * const source = new carto.source.GeoJSON({
     *   "type": "Feature",
     *   "geometry": {
     *     "type": "Point",
     *     "coordinates": [ 0, 0 ]
     *   },
     *   "properties": {
     *     "index": 1
     *   }
     * });
     *
     * @fires CartoError
     *
     * @constructor GeoJSON
     * @extends carto.source.Base
     * @memberof carto.source
     * @api
     */
    constructor (data, options = {}) {
        super();
        this._checkData(data);

        this._type = ''; // Point, LineString, MultiLineString, Polygon, MultiPolygon
        this._categoryStringToIDMap = {};
        this._numCategories = 0;
        this._numFields = new Set();
        this._catFields = new Set();
        this._dateFields = new Set();
        this._providedDateColumns = new Set(options.dateColumns);
        this._properties = {};
        this._boundColumns = new Set();

        this._data = data;
        if (data.type === 'FeatureCollection') {
            this._features = data.features;
        } else if (data.type === 'Feature') {
            this._features = [data];
        } else {
            throw new _src_errors_carto_validation_error__WEBPACK_IMPORTED_MODULE_3__["default"](`${_src_errors_carto_validation_error__WEBPACK_IMPORTED_MODULE_3__["CartoValidationTypes"].INCORRECT_VALUE} 'data' property must be a GeoJSON object.`);
        }

        this._features = this._initializeFeatureProperties(this._features);

        this._setCoordinatesCenter();
    }

    bindLayer (addDataframe, dataLoadedCallback) {
        this._addDataframe = addDataframe;
        this._dataLoadedCallback = dataLoadedCallback;
    }

    requestMetadata (viz) {
        return Promise.resolve(this._computeMetadata(viz));
    }

    requestData () {
        if (this._dataframe) {
            const newProperties = this._decodeUnboundProperties();
            this._dataframe.addProperties(newProperties);
            Object.keys(newProperties).forEach(propertyName => {
                this._boundColumns.add(propertyName);
            });
            return;
        }
        const dataframe = new _renderer_Dataframe__WEBPACK_IMPORTED_MODULE_1__["default"]({
            active: true,
            center: this._dataframeCenter,
            geom: this._decodeGeometry(),
            properties: this._decodeUnboundProperties(),
            scale: 1,
            size: this._features.length,
            type: this._getDataframeType(this._type),
            metadata: this._metadata
        });
        this._boundColumns = new Set(Object.keys(dataframe.properties));
        this._dataframe = dataframe;
        this._addDataframe(dataframe);
        this._dataLoadedCallback();
    }

    requiresNewMetadata () {
        return false;
    }

    _clone () {
        return new GeoJSON(this._data, { dateColumns: Array.from(this._providedDateColumns) });
    }

    _checkData (data) {
        if (_utils_util__WEBPACK_IMPORTED_MODULE_5__["default"].isUndefined(data)) {
            throw new _src_errors_carto_validation_error__WEBPACK_IMPORTED_MODULE_3__["default"](`${_src_errors_carto_validation_error__WEBPACK_IMPORTED_MODULE_3__["CartoValidationTypes"].MISSING_REQUIRED} 'data'`);
        }
        if (!_utils_util__WEBPACK_IMPORTED_MODULE_5__["default"].isObject(data)) {
            throw new _src_errors_carto_validation_error__WEBPACK_IMPORTED_MODULE_3__["default"](`${_src_errors_carto_validation_error__WEBPACK_IMPORTED_MODULE_3__["CartoValidationTypes"].INCORRECT_TYPE} 'data' property must be an object.`);
        }
    }

    _initializeFeatureProperties (features) {
        for (let i = 0; i < features.length; i++) {
            features[i].properties = features[i].properties || {};
        }
        return features;
    }

    _computeMetadata (viz) {
        const sample = [];
        this._addNumericColumnField('cartodb_id');

        const featureCount = this._features.length;
        const requiredColumns = new Set(Object.keys(_renderer_schema__WEBPACK_IMPORTED_MODULE_7__["default"].simplify(viz.getMinimumNeededSchema())));
        for (let i = 0; i < this._features.length; i++) {
            const properties = this._features[i].properties;
            const keys = Object.keys(properties);
            for (let j = 0, len = keys.length; j < len; j++) {
                const name = keys[j];
                if (!requiredColumns.has(name) || this._boundColumns.has(name)) {
                    continue;
                }
                const value = properties[name];
                this._addPropertyToMetadata(name, value);
            }
            this._sampleFeatureOnMetadata(properties, sample, this._features.length);
        }

        this._numFields.forEach(name => {
            const property = this._properties[name];
            property.avg = property.sum / property.count;
        });

        let geomType = '';
        if (featureCount > 0) {
            // Set the geomType of the first feature to the metadata
            geomType = this._getDataframeType(this._features[0].geometry.type);
        }
        const idProperty = 'cartodb_id';

        this._metadata = new _renderer_Metadata__WEBPACK_IMPORTED_MODULE_2__["default"]({ properties: this._properties, featureCount, sample, geomType, idProperty });

        return this._metadata;
    }

    _sampleFeatureOnMetadata (properties, sample, featureCount) {
        if (featureCount > SAMPLE_TARGET_SIZE) {
            const sampling = SAMPLE_TARGET_SIZE / featureCount;
            if (Math.random() > sampling) {
                return;
            }
        }
        sample.push(properties);
    }

    _addNumericPropertyToMetadata (propertyName, value) {
        if (this._catFields.has(propertyName) || this._dateFields.has(propertyName)) {
            throw new _src_errors_carto_validation_error__WEBPACK_IMPORTED_MODULE_3__["default"](`${_src_errors_carto_validation_error__WEBPACK_IMPORTED_MODULE_3__["CartoValidationTypes"].INCORRECT_TYPE} Unsupported GeoJSON: the property '${propertyName}' has different types in different features.`);
        }
        this._addNumericColumnField(propertyName);
        const property = this._properties[propertyName];
        property.min = Math.min(property.min, value);
        property.max = Math.max(property.max, value);
        property.sum += value;
    }

    _addNumericColumnField (propertyName) {
        if (!this._numFields.has(propertyName)) {
            this._numFields.add(propertyName);
            this._properties[propertyName] = {
                type: 'number',
                min: Number.POSITIVE_INFINITY,
                max: Number.NEGATIVE_INFINITY,
                avg: Number.NaN,
                sum: 0,
                count: 0
            };
        }
    }

    _addDatePropertyToMetadata (propertyName, value) {
        if (this._catFields.has(propertyName) || this._numFields.has(propertyName)) {
            throw new _src_errors_carto_runtime_error__WEBPACK_IMPORTED_MODULE_4__["default"](
                `${_src_errors_carto_runtime_error__WEBPACK_IMPORTED_MODULE_4__["CartoRuntimeTypes"].NOT_SUPPORTED} Unsupported GeoJSON: the property '${propertyName}' has different types in different features.`
            );
        }
        this._addDateColumnField(propertyName);
        const column = this._properties[propertyName];
        const dateValue = _utils_util__WEBPACK_IMPORTED_MODULE_5__["default"].castDate(value);
        column.min = column.min ? _utils_util__WEBPACK_IMPORTED_MODULE_5__["default"].castDate(Math.min(column.min, dateValue)) : dateValue;
        column.max = column.max ? _utils_util__WEBPACK_IMPORTED_MODULE_5__["default"].castDate(Math.max(column.max, dateValue)) : dateValue;
        column.sum += value;
        column.count++;
    }

    _addDateColumnField (propertyName) {
        if (!this._dateFields.has(propertyName)) {
            this._dateFields.add(propertyName);
            this._properties[propertyName] = {
                type: 'date',
                min: null,
                max: null,
                avg: null,
                sum: 0,
                count: 0
            };
        }
    }

    _addPropertyToMetadata (propertyName, value) {
        if (this._providedDateColumns.has(propertyName)) {
            return this._addDatePropertyToMetadata(propertyName, value);
        }
        if (Number.isFinite(value)) {
            return this._addNumericPropertyToMetadata(propertyName, value);
        }
        this._addCategoryPropertyToMetadata(propertyName, value);
    }

    _addCategoryPropertyToMetadata (propertyName, value) {
        if (this._numFields.has(propertyName) || this._dateFields.has(propertyName)) {
            throw new _src_errors_carto_runtime_error__WEBPACK_IMPORTED_MODULE_4__["default"](
                `${_src_errors_carto_runtime_error__WEBPACK_IMPORTED_MODULE_4__["CartoRuntimeTypes"].NOT_SUPPORTED} Unsupported GeoJSON: the property '${propertyName}' has different types in different features.`
            );
        }
        if (!this._catFields.has(propertyName)) {
            this._catFields.add(propertyName);
            this._properties[propertyName] = {
                type: 'category',
                categories: []
            };
        }
        const property = this._properties[propertyName];
        const cat = property.categories.find(cat => cat.name === value);
        if (cat) {
            cat.frequency++;
        } else {
            property.categories.push({ name: value, frequency: 1 });
        }
    }

    _decodeUnboundProperties () {
        const properties = {};
        [...this._numFields].concat([...this._catFields]).concat([...this._dateFields]).map(name => {
            if (this._boundColumns.has(name)) {
                return;
            }
            // The dataframe expects to have a padding of 1024, adding 1024 empty values assures this condition is met
            properties[name] = new Float32Array(this._features.length + 1024);
        });

        const catFields = [...this._catFields].filter(name => !this._boundColumns.has(name));
        const numFields = [...this._numFields].filter(name => !this._boundColumns.has(name));
        const dateFields = [...this._dateFields].filter(name => !this._boundColumns.has(name));

        for (let i = 0; i < this._features.length; i++) {
            const f = this._features[i];

            catFields.forEach(name => {
                properties[name][i] = this._metadata.categorizeString(name, f.properties[name], true);
            });
            numFields.forEach(name => {
                if (name === 'cartodb_id' && !Number.isFinite(f.properties.cartodb_id)) {
                    // Using negative ids for GeoJSON features
                    f.properties.cartodb_id = -i;
                }
                properties[name][i] = Number(f.properties[name]);
            });
            dateFields.forEach(name => {
                const property = this._properties[name];
                // dates in Dataframes are mapped to [0,1] to maximize precision
                const d = _utils_util__WEBPACK_IMPORTED_MODULE_5__["default"].castDate(f.properties[name]).getTime();
                const min = property.min;
                const max = property.max;
                const n = (d - min.getTime()) / (max.getTime() - min.getTime());
                properties[name][i] = n;
            });
        }
        return properties;
    }

    _getDataframeType (type) {
        switch (type) {
            case 'Point':
                return 'point';
            case 'LineString':
            case 'MultiLineString':
                return 'line';
            case 'Polygon':
            case 'MultiPolygon':
                return 'polygon';
            default:
                return '';
        }
    }

    _fetchFeatureGeometry (options = {}, callback) {
        let geometry = null;
        const numFeatures = this._features.length;
        const incr = options.sample ? Math.max(1, Math.floor(numFeatures / options.sample)) : 1;

        for (let i = 0; i < numFeatures; i += incr) {
            const feature = this._features[i];
            if (feature.type === 'Feature') {
                callback(i, feature.geometry);
            }
        }
        return geometry;
    }

    _allocGeometry () {
        if (this._type === 'Point') {
            return new Float32Array(this._features.length * 6);
        }
        return [];
    }

    _decodeGeometry () {
        let geometries = this._allocGeometry();

        this._fetchFeatureGeometry({}, (i, geometry) => {
            const type = geometry.type;
            const coordinates = geometry.coordinates;
            if (this._type !== type) {
                throw new _src_errors_carto_validation_error__WEBPACK_IMPORTED_MODULE_3__["default"](`${_src_errors_carto_validation_error__WEBPACK_IMPORTED_MODULE_3__["CartoValidationTypes"].INCORRECT_TYPE} multiple geometry types not supported: found '${type}' instead of '${this._type}'.`);
            }
            if (type === 'Point') {
                const point = this._computePointGeometry(coordinates);
                geometries[6 * i + 0] = point.x;
                geometries[6 * i + 1] = point.y;
                geometries[6 * i + 2] = point.x;
                geometries[6 * i + 3] = point.y;
                geometries[6 * i + 4] = point.x;
                geometries[6 * i + 5] = point.y;
            } else if (type === 'LineString') {
                const line = this._computeLineStringGeometry(coordinates);
                geometries.push([line]);
            } else if (type === 'MultiLineString') {
                const multiline = this._computeMultiLineStringGeometry(coordinates);
                geometries.push(multiline);
            } else if (type === 'Polygon') {
                const polygon = this._computePolygonGeometry(coordinates);
                geometries.push([polygon]);
            } else if (type === 'MultiPolygon') {
                const multipolygon = this._computeMultiPolygonGeometry(coordinates);
                geometries.push(multipolygon);
            }
        });

        return geometries;
    }

    _computePointGeometry (data) {
        const lat = data[1];
        const lng = data[0];
        const wm = _utils_util__WEBPACK_IMPORTED_MODULE_5__["default"].projectToWebMercator({ lat, lng });
        return _client_rsys__WEBPACK_IMPORTED_MODULE_0__["wToR"](wm.x, wm.y, { scale: _utils_util__WEBPACK_IMPORTED_MODULE_5__["default"].WM_R, center: this._center });
    }

    _computeLineStringGeometry (data, reverse) {
        let line = [];
        for (let i = 0; i < data.length; i++) {
            const point = this._computePointGeometry(
                data[reverse ? (data.length - i - 1) : i]
            );
            line.push(point.x, point.y);
        }
        return line;
    }

    _computeMultiLineStringGeometry (data) {
        let multiline = [];
        for (let i = 0; i < data.length; i++) {
            let line = this._computeLineStringGeometry(data[i]);
            if (line.length > 0) {
                multiline.push(line);
            }
        }
        return multiline;
    }

    _computePolygonGeometry (data) {
        let polygon = {
            flat: [],
            holes: [],
            clipped: []
        };
        let holeIndex = 0;
        let firstReverse = false;

        if (data.length) {
            firstReverse = this._isReversed(data[0]);
            const flat = this._computeLineStringGeometry(data[0], firstReverse);
            polygon.flat = polygon.flat.concat(flat);
        }
        for (let i = 1; i < data.length; i++) {
            if (firstReverse !== this._isReversed(data[i])) {
                holeIndex += data[i - 1].length;
                polygon.holes.push(holeIndex);
            }
            const flat = this._computeLineStringGeometry(data[i], firstReverse);
            polygon.flat = polygon.flat.concat(flat);
        }
        return polygon;
    }

    _computeMultiPolygonGeometry (data) {
        let multipolygon = [];
        for (let i = 0; i < data.length; i++) {
            let polygon = this._computePolygonGeometry(data[i]);
            if (polygon.flat.length > 0) {
                multipolygon.push(polygon);
            }
        }
        return multipolygon;
    }

    _isReversed (vertices) {
        let total = 0;
        let pt1 = vertices[0];
        let pt2;
        for (let i = 0; i < vertices.length - 1; i++) {
            pt2 = vertices[i + 1];
            total += (pt2[1] - pt1[1]) * (pt2[0] + pt1[0]);
            pt1 = pt2;
        }
        // When total is positive it means that vertices are oriented clock wise
        // and, since positive orientation is counter-clock wise, it is reversed.
        return total >= 0;
    }

    _samplePoint (geometry) {
        const type = geometry.type;

        const coordinates = geometry.coordinates;
        if (type === 'Point') {
            return coordinates;
        } else if (type === 'LineString') {
            return coordinates[0];
        } else if (type === 'MultiLineString' || type === 'Polygon') {
            return coordinates[0][0];
        } else if (type === 'MultiPolygon') {
            return coordinates[0][0][0];
        }
    }

    // sets this._type, this._center, this._dataframeCenter
    _setCoordinatesCenter () {
        let x = 0;
        let y = 0;
        let nPoints = 0;
        this._fetchFeatureGeometry({ sample: 10 }, (_, geometry) => {
            if (!this._type) {
                this._type = geometry.type;
            }
            const samplePoint = this._samplePoint(geometry);
            const sampleXY = _utils_util__WEBPACK_IMPORTED_MODULE_5__["default"].projectToWebMercator({ lng: samplePoint[0], lat: samplePoint[1] });
            x += sampleXY.x;
            y += sampleXY.y;
            nPoints += 1;
        });
        if (nPoints > 1) {
            x /= nPoints;
            y /= nPoints;
        }

        this._center = { x, y };
        this._dataframeCenter = _client_rsys__WEBPACK_IMPORTED_MODULE_0__["wToR"](this._center.x, this._center.y, { scale: _utils_util__WEBPACK_IMPORTED_MODULE_5__["default"].WM_R, center: { x: 0, y: 0 } });
    }

    free () {
    }
}


/***/ }),

/***/ "./src/sources/MVT.js":
/*!****************************!*\
  !*** ./src/sources/MVT.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return MVT; });
/* harmony import */ var _renderer_Dataframe__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../renderer/Dataframe */ "./src/renderer/Dataframe.js");
/* harmony import */ var _renderer_Metadata__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../renderer/Metadata */ "./src/renderer/Metadata.js");
/* harmony import */ var _Base__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Base */ "./src/sources/Base.js");
/* harmony import */ var _TileClient__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./TileClient */ "./src/sources/TileClient.js");
/* harmony import */ var _MVTWorkers_worker__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./MVTWorkers.worker */ "./src/sources/MVTWorkers.worker.js");
/* harmony import */ var _MVTWorkers_worker__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_MVTWorkers_worker__WEBPACK_IMPORTED_MODULE_4__);







/**
 * A MVTOptions object declares a MVT configuration
 * @typedef {object} MVTOptions
 * @property {string} layerID - layerID on the MVT tiles to decode, the parameter is optional if the MVT tiles only contain one layer
 * @property {function} [viewportZoomToSourceZoom=Math.ceil] - function to transform the viewport zoom into a zoom value to replace `{z}` in the MVT URL template, undefined defaults to `Math.ceil`
 * @property {number} maxZoom - limit MVT tile requests to this zoom level, undefined defaults to no limit
 *
 * @example <caption>Use layer `myAwesomeLayer` and request tiles up to zoom level 12.</caption>
 * const options = {
 *     layerID: 'myAwesomeLayer',
 *     maxZoom: 12
 * };
 *
 * @example <caption>Use layer `myAwesomeLayer` and request tiles only at zoom levels 4, 5 and 6.</caption>
 * const options = {
 *     layerID: 'myAwesomeLayer',
 *     viewportZoomToSourceZoom: zoom => Math.min(Math.max(Math.ceil(zoom), 4), 6)
 * };
 *
 * @example <caption>Use layer `myAwesomeLayer` and request tiles only at zoom levels 0,3,6,9...</caption>
 * const options = {
 *     layerID: 'myAwesomeLayer',
 *     viewportZoomToSourceZoom: zoom => Math.round(zoom / 3) * 3
 * };
 *
 * @api
 */

/**
 * An MVTMetadata object declares metadata information of a a carto.Source.
 *
 * @typedef {object} MVTMetadata
 * @property {MVTProperty} properties - property names, types and optionally ranges
 * @property {string} [idProperty='cartodb_id'] - property name of the property that should be used as ID
 *
 * @example <caption> Creating a MVTMetadata object</caption>
 * const metadata = {
        properties: {
          numfloors: { type: 'number' },
          cartodb_id: { type: 'number' }
        },
        idProperty: 'cartodb_id',
      };
 *
 * @api
 */

/**
 * MVTProperty objects declare a property type and, optionally, additional information like numeric ranges.
 *
 * @typedef {object} MVTProperty
 * @property {string} type - Valid values are 'number' and 'category', 'category' must be used if the MVT encodes the property as strings, regardless of the real type
 * @property {Number} min - With `type='number'` min specifies the minimum value in the dataset, this is used in global aggregation expressions
 * @property {Number} max - With `type='number'` max specifies the maximum value in the dataset, this is used in global aggregation expressions
 *
 * @api
 */

class MVT extends _Base__WEBPACK_IMPORTED_MODULE_2__["default"] {
    /**
     * Create a carto.source.MVT.
     *
     * @param {string | string[]} templateURL - A string with the URL template of the MVT tiles in https://mytileserver.com/{z}/{x}/{y}.mvt format or a list of such templates. Usage of a list of templates with different domains is recommended since that allows the browser to make more requests in parallel.
     * @param {MVTMetadata} [metadata] - Metadata of the source, declaring property name, types and optionally ranges.
     * @param {MVTOptions} [options] - MVT source configuration, the default value will be valid for regular URL templates if the tiles are composed of only one layer
     *
     * The combination of different type of geometries on the same source is not supported. Valid geometry types are `points`, `lines` and `polygons`.
     *
     * @example Usage with multiple templateURLs as recommended
     * const metadata = new carto.source.mvt.Metadata([{ type: 'number', name: 'total_pop'}])
     * new carto.source.MVT([
     *                       "https://server-a.tileserver.com/{z}/{x}/{y}.mvt",
     *                       "https://server-b.tileserver.com/{z}/{x}/{y}.mvt",
     *                       "https://server-c.tileserver.com/{z}/{x}/{y}.mvt",
     *                       "https://server-d.tileserver.com/{z}/{x}/{y}.mvt"
     *                      ],
     *                      metadata
     *                     );
     *
     * @fires CartoError
     *
     * @constructor MVT
     * @extends carto.source.Base
     * @memberof carto.source
     * @api
     */
    constructor (templateURL, metadata = new _renderer_Metadata__WEBPACK_IMPORTED_MODULE_1__["default"](), options = { layerID: undefined, viewportZoomToSourceZoom: Math.ceil, maxZoom: undefined }) {
        super();
        this._templateURL = templateURL;
        if (!(metadata instanceof _renderer_Metadata__WEBPACK_IMPORTED_MODULE_1__["default"])) {
            metadata = new _renderer_Metadata__WEBPACK_IMPORTED_MODULE_1__["default"](metadata);
        }
        this._metadata = metadata;
        this._tileClient = new _TileClient__WEBPACK_IMPORTED_MODULE_3__["default"](templateURL);
        this._options = options;
        this._options.viewportZoomToSourceZoom = this._options.viewportZoomToSourceZoom || Math.ceil;

        this._workerDispatch = {};
        this._mID = 0;
        this._workerName = 'MVT';
    }

    get _worker () {
        if (!this._workerInstance) {
            this._workerInstance = new _MVTWorkers_worker__WEBPACK_IMPORTED_MODULE_4___default.a();
            this._workerInstance.onmessage = event => {
                const mID = event.data.mID;
                const dataframe = event.data.dataframe;
                const metadata = dataframe.metadata;
                if (!dataframe.empty) {
                    Object.setPrototypeOf(dataframe, _renderer_Dataframe__WEBPACK_IMPORTED_MODULE_0__["default"].prototype);
                    this._metadata.numCategories = metadata.numCategories;
                    this._metadata.categoryToID = metadata.categoryToID;
                    this._metadata.IDToCategory = metadata.IDToCategory;
                    this._metadata.geomType = metadata.geomType;
                    dataframe.metadata = this._metadata;
                }
                this._workerDispatch[mID](dataframe);
            };
        }
        return this._workerInstance;
    }

    _clone () {
        return new MVT(this._templateURL, JSON.parse(JSON.stringify(this._metadata)), this._options);
    }

    bindLayer (addDataframe, dataLoadedCallback) {
        this._tileClient.bindLayer(addDataframe, dataLoadedCallback);
    }

    async requestMetadata () {
        return this._metadata;
    }

    requestData (zoom, viewport) {
        return this._tileClient.requestData(zoom, viewport, (x, y, z, url) => {
            return new Promise(resolve => {
                // Relative URLs don't work inside the Web Worker
                if (url[0] === '.') {
                    let parts = window.location.pathname.split('/');
                    parts.pop();
                    const path = parts.join('/');
                    url = `${window.location.protocol}//${window.location.host}/${path}/${url}`;
                } else if (url[0] === '/') {
                    url = `${window.location.protocol}//${window.location.host}${url}`;
                }
                this._worker.postMessage({
                    x,
                    y,
                    z,
                    url,
                    layerID: this._options.layerID,
                    metadata: this._metadataSent ? undefined : this._metadata,
                    mID: this._mID,
                    workerName: this._workerName
                });
                this._metadataSent = true;
                this._workerDispatch[this._mID] = resolve;
                this._mID++;
            });
        },
        zoom => this._options.maxZoom === undefined
            ? this._options.viewportZoomToSourceZoom(zoom)
            : Math.min(this._options.viewportZoomToSourceZoom(zoom), this._options.maxZoom)
        );
    }

    free () {
        this._tileClient.free();
    }
}


/***/ }),

/***/ "./src/sources/MVTWorkers.worker.js":
/*!******************************************!*\
  !*** ./src/sources/MVTWorkers.worker.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = function() {
};

/***/ }),

/***/ "./src/sources/SQL.js":
/*!****************************!*\
  !*** ./src/sources/SQL.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return SQL; });
/* harmony import */ var _src_errors_carto_validation_error__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../src/errors/carto-validation-error */ "./src/errors/carto-validation-error.js");
/* harmony import */ var _utils_util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/util */ "./src/utils/util.js");
/* harmony import */ var _BaseWindshaft__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./BaseWindshaft */ "./src/sources/BaseWindshaft.js");




class SQL extends _BaseWindshaft__WEBPACK_IMPORTED_MODULE_2__["default"] {
    /**
     * A SQL defines the data that will be displayed in a layer.
     *
     * Imagine you have a table named `european_cities` and you only want to download data from european cities with population > 100000
     *
     * ```javascript
     * const source = new carto.source.SQL(`SELECT * FROM european_cities WHERE country like 'europe' AND population > 10000`, {
     *   apiKey: 'YOUR_API_KEY_HERE',
     *   user: 'YOUR_USERNAME_HERE'
     * });
     * ````
     *
     * This only downloads the data you need from the server reducing data usage.
     *
     * If you need all the data see {@link carto.source.Dataset|carto.source.Dataset}.
     *
     * Since tables in the server are protected you must provide valid credentials in order to get access to the data.
     * This can be done {@link carto.setDefaultAuth|setting the default auth} in the carto object or providing an `auth`
     * object with your username and apiKey.
     *
     * If your server is not hosted by CARTO you must add a third parameter that includes the serverURL. This can be done {@link carto.setDefaultConfig|setting the default config} in the carto object or providing a `config`
     * object with your serverURL.
     *
     * The combination of different type of geometries on the same source is not supported. Valid geometry types are `points`, `lines` and `polygons`.
     *
     * @param {string} query - A SQL query containing a SELECT statement
     * @param {object} auth
     * @param {string} auth.apiKey - API key used to authenticate against CARTO
     * @param {string} auth.user - Name of the user
     * @param {object} config
     * @param {string} [config.serverURL='https://{user}.carto.com'] - URL of the CARTO Maps API server
     *
     * @example
     * const source = new carto.source.SQL('SELECT * FROM european_cities', {
     *   apiKey: 'YOUR_API_KEY_HERE',
     *   user: 'YOUR_USERNAME_HERE'
     * });
     *
     * @fires CartoError
     *
     * @constructor SQL
     * @extends carto.source.Base
     * @memberof carto.source
     * @api
     */
    constructor (query, auth, config) {
        super();
        this._checkQuery(query);
        this._query = query;
        this.initialize(auth, config);
    }

    _clone () {
        return new SQL(this._query, this._auth, this._config);
    }

    _checkQuery (query) {
        if (_utils_util__WEBPACK_IMPORTED_MODULE_1__["default"].isUndefined(query)) {
            throw new _src_errors_carto_validation_error__WEBPACK_IMPORTED_MODULE_0__["default"](`${_src_errors_carto_validation_error__WEBPACK_IMPORTED_MODULE_0__["CartoValidationTypes"].MISSING_REQUIRED} 'query'`);
        }
        if (!_utils_util__WEBPACK_IMPORTED_MODULE_1__["default"].isString(query)) {
            throw new _src_errors_carto_validation_error__WEBPACK_IMPORTED_MODULE_0__["default"](`${_src_errors_carto_validation_error__WEBPACK_IMPORTED_MODULE_0__["CartoValidationTypes"].INCORRECT_TYPE} 'query' property must be a string.`);
        }
        if (query === '') {
            throw new _src_errors_carto_validation_error__WEBPACK_IMPORTED_MODULE_0__["default"](`${_src_errors_carto_validation_error__WEBPACK_IMPORTED_MODULE_0__["CartoValidationTypes"].INCORRECT_VALUE} 'query' property must be not empty.`);
        }
        let sqlRegex = /\bSELECT\b/i;
        if (!query.match(sqlRegex)) {
            throw new _src_errors_carto_validation_error__WEBPACK_IMPORTED_MODULE_0__["default"](`${_src_errors_carto_validation_error__WEBPACK_IMPORTED_MODULE_0__["CartoValidationTypes"].INCORRECT_VALUE} 'query' property must be a SQL query.`);
        }
    }
}


/***/ }),

/***/ "./src/sources/TileClient.js":
/*!***********************************!*\
  !*** ./src/sources/TileClient.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return TileClient; });
/* harmony import */ var _DataframeCache__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DataframeCache */ "./src/sources/DataframeCache.js");
/* harmony import */ var _client_rsys__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../client/rsys */ "./src/client/rsys.js");



class TileClient {
    constructor (templateURLs) {
        if (!Array.isArray(templateURLs)) {
            templateURLs = [templateURLs];
        }
        this._templateURLs = templateURLs;
        this._requestGroupID = 0;
        this._oldDataframes = [];
        this._cache = new _DataframeCache__WEBPACK_IMPORTED_MODULE_0__["default"]();
    }

    bindLayer (addDataframe, dataLoadedCallback) {
        this._addDataframe = addDataframe;
        this._dataLoadedCallback = dataLoadedCallback;
    }

    requestData (zoom, viewport, urlToDataframeTransformer, viewportZoomToSourceZoom = Math.ceil) {
        const tiles = Object(_client_rsys__WEBPACK_IMPORTED_MODULE_1__["rTiles"])(zoom, viewport, viewportZoomToSourceZoom);
        this._getTiles(tiles, urlToDataframeTransformer);
    }

    free () {
        this._cache.free();
        this._cache = new _DataframeCache__WEBPACK_IMPORTED_MODULE_0__["default"]();
        this._oldDataframes = [];
    }

    _getTileUrl (x, y, z) {
        const subdomainIndex = this._getSubdomainIndex(x, y);
        return this._templateURLs[subdomainIndex].replace('{x}', x).replace('{y}', y).replace('{z}', z);
    }

    _getSubdomainIndex (x, y) {
        // Reference https://github.com/Leaflet/Leaflet/blob/v1.3.1/src/layer/tile/TileLayer.js#L214-L217
        return Math.abs(x + y) % this._templateURLs.length;
    }

    _getTiles (tiles, urlToDataframeTransformer) {
        this._requestGroupID++;
        let completedTiles = [];
        let needToComplete = tiles.length;
        const requestGroupID = this._requestGroupID;
        tiles.forEach(({ x, y, z }) => {
            this._cache.get(`${x},${y},${z}`, () => this._requestDataframe(x, y, z, urlToDataframeTransformer)).then(
                dataframe => {
                    dataframe.orderID = x + y / 1000;
                    if (dataframe.empty) {
                        needToComplete--;
                    } else {
                        completedTiles.push(dataframe);
                    }
                    if (completedTiles.length === needToComplete && requestGroupID === this._requestGroupID) {
                        this._oldDataframes.forEach(d => {
                            d.active = false;
                        });
                        completedTiles.map(d => {
                            d.active = true;
                        });
                        this._oldDataframes = completedTiles;
                        this._dataLoadedCallback();
                    }
                });
        });
    }
    async _requestDataframe (x, y, z, urlToDataframeTransformer) {
        const url = this._getTileUrl(x, y, z);
        const dataframe = await urlToDataframeTransformer(x, y, z, url);
        if (!dataframe.empty) {
            this._addDataframe(dataframe);
        }
        return dataframe;
    }
}


/***/ }),

/***/ "./src/utils/collision.js":
/*!********************************!*\
  !*** ./src/utils/collision.js ***!
  \********************************/
/*! exports provided: triangleCollides */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "triangleCollides", function() { return triangleCollides; });
/* harmony import */ var _geometry__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./geometry */ "./src/utils/geometry.js");


const SEPARATING_LINE_FOUND = 'separatingLineFound';
const SEPARATING_LINE_NOT_FOUND = 'separatingLineNotFound';

function triangleCollides (triangle, viewportAABB) {
    const viewport = [
        { x: viewportAABB.minx, y: viewportAABB.miny },
        { x: viewportAABB.minx, y: viewportAABB.maxy },
        { x: viewportAABB.maxx, y: viewportAABB.miny },
        { x: viewportAABB.maxx, y: viewportAABB.maxy }
    ];

    /*
     * TODO
     *
     * Optimize triangle collision:
     *
     * if (_isAnyTriangleVertexInViewport(triangle, viewportAABB)) {
     *   return true;
     * }
     *
     * if (_isAnyViewportVertexInTriangle(triangle, viewport)) {
     *   return true;
     * }
     */

    if (_viewportLineSeparatesTriangle(viewportAABB, triangle) === SEPARATING_LINE_FOUND) {
        return false;
    }

    if (_triangleLineSeparatesViewport(triangle, viewport) === SEPARATING_LINE_FOUND) {
        return false;
    }

    return true;
}

/*
 * TODO
 *
 * Optimize triangle collision:
 *
 * function _isAnyViewportVertexInTriangle (triangle, viewport) {
 *     for (let i = 0; i < viewport.length; i++) {
 *         if (pointInTriangle(viewport[i], triangle[0], triangle[1], triangle[2])) {
 *             return true;
 *         }
 *     }
 *
 *     return false;
 * }
 * function _isAnyTriangleVertexInViewport (triangle, viewportAABB) {
 *  for (let i = 0; i < 3; i++) {
 *       if (pointInRectangle(triangle[i], viewportAABB)) {
 *           return true;
 *       }
 *   }
 *   return false;
 * }
 */

function _viewportLineSeparatesTriangle (viewportAABB, triangle) {
    if (triangle[0].x < viewportAABB.minx &&
        triangle[1].x < viewportAABB.minx &&
        triangle[2].x < viewportAABB.minx) {
        return SEPARATING_LINE_FOUND;
    }

    if (triangle[0].y < viewportAABB.miny &&
        triangle[1].y < viewportAABB.miny &&
        triangle[2].y < viewportAABB.miny) {
        return SEPARATING_LINE_FOUND;
    }

    if (triangle[0].x > viewportAABB.maxx &&
        triangle[1].x > viewportAABB.maxx &&
        triangle[2].x > viewportAABB.maxx) {
        return SEPARATING_LINE_FOUND;
    }

    if (triangle[0].y > viewportAABB.maxy &&
        triangle[1].y > viewportAABB.maxy &&
        triangle[2].y > viewportAABB.maxy) {
        return SEPARATING_LINE_FOUND;
    }

    return SEPARATING_LINE_NOT_FOUND;
}

function _triangleLineSeparatesViewport (triangle, viewport) {
    const TRIANGLE_VERTICES = 3;

    for (let i = 0; i < TRIANGLE_VERTICES; i++) {
        for (let j = 0; j < viewport.length; j++) {
            const position = Object(_geometry__WEBPACK_IMPORTED_MODULE_0__["halfPlaneSign"])(viewport[j], triangle[i], triangle[(i + 1) % TRIANGLE_VERTICES]);

            if (position > 0) {
                break;
            }

            if (j === TRIANGLE_VERTICES) {
                return SEPARATING_LINE_FOUND;
            }
        }
    }

    return SEPARATING_LINE_NOT_FOUND;
}


/***/ }),

/***/ "./src/utils/events.js":
/*!*****************************!*\
  !*** ./src/utils/events.js ***!
  \*****************************/
/*! exports provided: on, off */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "on", function() { return on; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "off", function() { return off; });
/* harmony import */ var _errors_carto_validation_error__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../errors/carto-validation-error */ "./src/errors/carto-validation-error.js");


let registeredHandlers = [];

/**
 * Register an event handler for the given event name and for the given list of layers. Valid names are: `loaded`, `updated`.
 *
 * The 'loaded' event will be fired when all the layers are loaded (and their 'loaded' events are fired).
 *
 * The 'updated' event will be fired whenever one of the layers fired an 'updated' event,
 * but throttled by requestAnimationFrame to return a maximum of one event per frame.
 *
 * @param {string} eventName - Supported event names are 'loaded' and 'updated'
 * @param {carto.Layer[]} layerList - List of layers
 *
 * @memberof carto
 * @api
 */
function on (eventName, layerList, callback) {
    let internalCallbacks = [];
    if (eventName === 'loaded') {
        const waitingGroup = new Set(layerList);
        layerList.forEach(layer => {
            const internalCallback = () => {
                waitingGroup.delete(layer);
                if (waitingGroup.size === 0) {
                    callback();
                }
            };
            layer.on('loaded', internalCallback);
            internalCallbacks.push(internalCallback);
        });
    } else if (eventName === 'updated') {
        let scheduledRAF = false;
        layerList.forEach(layer => {
            const internalCallback = () => {
                if (!scheduledRAF) {
                    window.requestAnimationFrame(() => {
                        scheduledRAF = false;
                        callback();
                    });
                }
            };
            layer.on('updated', internalCallback);
            internalCallbacks.push(internalCallback);
        });
    } else {
        throw new _errors_carto_validation_error__WEBPACK_IMPORTED_MODULE_0__["default"](`${_errors_carto_validation_error__WEBPACK_IMPORTED_MODULE_0__["CartoValidationTypes"].INCORRECT_VALUE} Event name '${eventName}' is not supported by "carto.on". Supported event names are: 'loaded' and 'updated'.`);
    }
    registeredHandlers.push({
        eventName,
        layerList,
        callback,
        internalCallbacks
    });
}

/**
* Remove an event handler for the given event name, layer list and callback.
*
* @param {string} eventName - event
* @param {carto.Layer} layerList - List of layers
* @param {function} callback - Handler function to unregister
*
* @memberof carto
* @api
*/
function off (eventName, layerList, callback) {
    registeredHandlers.forEach(register => {
        if (register.eventName === eventName &&
            register.layerList.every(registeredLayer => layerList.includes(registeredLayer)) &&
            register.callback === callback) {
            register.layerList.forEach(layer => {
                register.internalCallbacks.forEach(internalCallback => {
                    layer.off(eventName, internalCallback);
                });
            });
        }
    });
    registeredHandlers = registeredHandlers.filter(register =>
        !(
            register.eventName === eventName &&
            register.layerList.every(registeredLayer => layerList.includes(registeredLayer)) &&
            register.callback === callback
        )
    );
}


/***/ }),

/***/ "./src/utils/geometry.js":
/*!*******************************!*\
  !*** ./src/utils/geometry.js ***!
  \*******************************/
/*! exports provided: intersect, sub, dot, perpendicular, getLineNormal, getJoinNormal, neg, pointInTriangle, halfPlaneSign, equalPoints, pointInCircle, pointInRectangle, computeAABB, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "intersect", function() { return intersect; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sub", function() { return sub; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dot", function() { return dot; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "perpendicular", function() { return perpendicular; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getLineNormal", function() { return getLineNormal; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getJoinNormal", function() { return getJoinNormal; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "neg", function() { return neg; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pointInTriangle", function() { return pointInTriangle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "halfPlaneSign", function() { return halfPlaneSign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "equalPoints", function() { return equalPoints; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pointInCircle", function() { return pointInCircle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pointInRectangle", function() { return pointInRectangle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "computeAABB", function() { return computeAABB; });
// If AB intersects CD => return intersection point
// Intersection method from Real Time Rendering, Third Edition, page 780
function intersect (a, b, c, d) {
    const o1 = a;
    const o2 = c;
    const d1 = sub(b, a);
    const d2 = sub(d, c);
    const d1t = perpendicular(d1);
    const d2t = perpendicular(d2);

    const s = dot(sub(o2, o1), d2t) / dot(d1, d2t);
    const t = dot(sub(o1, o2), d1t) / dot(d2, d1t);

    if (s >= 0 && s <= 1 && t >= 0 && t <= 1) {
        return [o1[0] + s * d1[0], o1[1] + s * d1[1]];
    }
}

function sub ([ax, ay], [bx, by]) {
    return ([ax - bx, ay - by]);
}

function dot ([ax, ay], [bx, by]) {
    return (ax * bx + ay * by);
}

function perpendicular ([x, y]) {
    return [-y, x];
}

/**
 * Compute the normal of a line AB.
 * By definition it is the unitary vector from B to A, rotated +90 degrees counter-clockwise
 */
function getLineNormal (a, b) {
    const u = normalize(a[0] - b[0], a[1] - b[1]);
    return [-u[1], u[0]];
}

/**
 * Compute the normal of the join from the lines' normals.
 * By definition this is the sum of the unitary vectors `u` (from B to A) and `v` (from B to C)
 * multiplied by a factor of `1/sin(theta)` to reach the intersection of the wide lines.
 * Theta is the angle between the vectors `v` and `u`. But instead of computing the angle,
 * the `sin(theta)` (with sign) is obtained directly from the vectorial product of `v` and `u`
 */
function getJoinNormal (prevNormal, nextNormal) {
    const u = [prevNormal[1], -prevNormal[0]];
    const v = [-nextNormal[1], nextNormal[0]];
    const sin = v[0] * u[1] - v[1] * u[0];
    const cos = v[0] * u[0] + v[1] * u[1];
    const factor = Math.abs(sin);
    const miterJoin = !(factor < 0.866 && cos > 0.5); // 60 deg
    return {
        turnLeft: sin > 0,
        joinNormal: miterJoin && neg([
            (u[0] + v[0]) / factor,
            (u[1] + v[1]) / factor
        ])
    };
}

/**
 * Return the negative of the provided vector
 */
function neg (v) {
    return [-v[0], -v[1]];
}

/**
 * Return the vector scaled to length 1
 */
function normalize (x, y) {
    const s = Math.hypot(x, y);
    return [x / s, y / s];
}

// Returns true if p is inside the triangle or on a triangle's edge, false otherwise
// Parameters in {x: 0, y:0} form
function pointInTriangle (p, v1, v2, v3) {
    // https://stackoverflow.com/questions/2049582/how-to-determine-if-a-point-is-in-a-2d-triangle
    // contains an explanation of both this algorithm and one based on barycentric coordinates,
    // which could be faster, but, nevertheless, it is quite similar in terms of required arithmetic operations

    if (equalPoints(v1, v2) || equalPoints(v2, v3) || equalPoints(v3, v1)) {
        // Avoid zero area triangle
        return false;
    }

    // A point is inside a triangle or in one of the triangles edges
    // if the point is in the three half-plane defined by the 3 edges
    const b1 = halfPlaneSign(p, v1, v2) < 0;
    const b2 = halfPlaneSign(p, v2, v3) < 0;
    const b3 = halfPlaneSign(p, v3, v1) < 0;

    return (b1 === b2) && (b2 === b3);
}

// Tests if a point `p` is in the half plane defined by the line with points `a` and `b`
// Returns a negative number if the result is INSIDE, returns 0 if the result is ON_LINE,
// returns >0 if the point is OUTSIDE
// Parameters in {x: 0, y:0} form
function halfPlaneSign (p, a, b) {
    // We use the cross product of `PB x AB` to get `sin(angle(PB, AB))`
    // The result's sign is the half plane test result
    return (p.x - b.x) * (a.y - b.y) - (a.x - b.x) * (p.y - b.y);
}

function equalPoints (a, b) {
    return (a.x === b.x) && (a.y === b.y);
}

function pointInCircle (p, center, scale) {
    const diff = {
        x: p.x - center.x,
        y: p.y - center.y
    };
    const lengthSquared = diff.x * diff.x + diff.y * diff.y;
    return lengthSquared <= scale * scale;
}

function pointInRectangle (point, bbox) {
    if (bbox === null) {
        return false;
    }
    const p = {
        x: point.x.toFixed(2),
        y: point.y.toFixed(2)
    };

    return ((bbox.minx <= p.x) && (p.x <= bbox.maxx) && (bbox.miny <= p.y) && (p.y <= bbox.maxy));
}

function computeAABB (geometry, type) {
    switch (type) {
        case 'point':
            return [];
        case 'line':
        case 'polygon':
            const aabbList = [];

            for (let i = 0; i < geometry.length; i++) {
                const feature = geometry[i];

                let aabb = {
                    minx: Number.POSITIVE_INFINITY,
                    miny: Number.POSITIVE_INFINITY,
                    maxx: Number.NEGATIVE_INFINITY,
                    maxy: Number.NEGATIVE_INFINITY
                };

                for (let j = 0; j < feature.length; j++) {
                    aabb = _updateAABBForGeometry(feature[j], aabb, type);
                }

                if (aabb.minx === Number.POSITIVE_INFINITY) {
                    aabb = null;
                }

                aabbList.push(aabb);
            }

            return aabbList;
    }
}

function _updateAABBForGeometry (feature, aabb, geometryType) {
    switch (geometryType) {
        case 'line':
            return _updateAABBLine(feature, aabb);
        case 'polygon':
            return _updateAABBPolygon(feature, aabb);
    }
}

function _updateAABBLine (line, aabb) {
    const vertices = line;
    const numVertices = line.length;

    for (let i = 0; i < numVertices; i += 2) {
        aabb.minx = Math.min(aabb.minx, vertices[i + 0]);
        aabb.miny = Math.min(aabb.miny, vertices[i + 1]);
        aabb.maxx = Math.max(aabb.maxx, vertices[i + 0]);
        aabb.maxy = Math.max(aabb.maxy, vertices[i + 1]);
    }

    return aabb;
}

function _updateAABBPolygon (polygon, aabb) {
    const [vertices, numVertices] = [polygon.flat, polygon.holes[0] || polygon.flat.length / 2];

    for (let i = 0; i < numVertices; i++) {
        aabb.minx = Math.min(aabb.minx, vertices[2 * i + 0]);
        aabb.miny = Math.min(aabb.miny, vertices[2 * i + 1]);
        aabb.maxx = Math.max(aabb.maxx, vertices[2 * i + 0]);
        aabb.maxy = Math.max(aabb.maxy, vertices[2 * i + 1]);
    }

    return aabb;
}

/* harmony default export */ __webpack_exports__["default"] = ({
    intersect,
    sub,
    dot,
    perpendicular,
    getLineNormal,
    getJoinNormal,
    neg,
    halfPlaneSign,
    pointInTriangle,
    equalPoints,
    pointInCircle,
    pointInRectangle
});


/***/ }),

/***/ "./src/utils/util.js":
/*!***************************!*\
  !*** ./src/utils/util.js ***!
  \***************************/
/*! exports provided: WM_R, WM_2R, isUndefined, isString, isNumber, isObject, regExpThatContains, castDate, isSetsEqual, equalArrays, projectToWebMercator, computeMapZoom, computeMapCenter, computeMatrixZoom, computeMatrixCenter, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WM_R", function() { return WM_R; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WM_2R", function() { return WM_2R; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isUndefined", function() { return isUndefined; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isString", function() { return isString; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isNumber", function() { return isNumber; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isObject", function() { return isObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "regExpThatContains", function() { return regExpThatContains; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "castDate", function() { return castDate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isSetsEqual", function() { return isSetsEqual; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "equalArrays", function() { return equalArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "projectToWebMercator", function() { return projectToWebMercator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "computeMapZoom", function() { return computeMapZoom; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "computeMapCenter", function() { return computeMapCenter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "computeMatrixZoom", function() { return computeMatrixZoom; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "computeMatrixCenter", function() { return computeMatrixCenter; });
/**
 * Export util functions
 */

const DEG2RAD = Math.PI / 180;
const EARTH_RADIUS = 6378137;
const WM_R = EARTH_RADIUS * Math.PI; // Webmercator *radius*: half length Earth's circumference
const WM_2R = WM_R * 2; // Webmercator coordinate range (Earth's circumference)

function isUndefined (value) {
    return value === undefined;
}

function isString (value) {
    return typeof value === 'string';
}

function isNumber (value) {
    return typeof value === 'number';
}

function isObject (value) {
    const type = typeof value;
    return value !== null && (type === 'object' || type === 'function');
}

function regExpThatContains (text) {
    const escaped = text.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'); // in case it has special symbols
    return new RegExp(escaped);
}

/**
 * Transform the given parameter into a Date object.
 * When a number is given as a parameter is asummed to be a milliseconds epoch.
 * @param {Date|number|string} date
 */
function castDate (date) {
    if (date instanceof Date) {
        return date;
    }
    if (typeof (date) === 'number') {
        const msEpoch = date;
        date = new Date(0);
        date.setUTCMilliseconds(msEpoch);
        return date;
    }
    return new Date(date);
}

function isSetsEqual (a, b) {
    return a.size === b.size && [...a].every(value => b.has(value));
}

function equalArrays (a, b) {
    if (a && b && a.length === b.length) {
        for (let i = 0; i < a.length; i++) {
            if (a[i] !== b[i]) {
                return false;
            }
        }
        return true;
    }
}

function projectToWebMercator (latLng) {
    let lat = latLng.lat * DEG2RAD;
    let lng = latLng.lng * DEG2RAD;
    return {
        x: lng * EARTH_RADIUS,
        y: Math.log(Math.tan(lat / 2 + Math.PI / 4)) * EARTH_RADIUS
    };
}

function computeMapZoom (map) {
    const bounds = map.getBounds();
    const nw = bounds.getNorthWest();
    const sw = bounds.getSouthWest();
    return (projectToWebMercator(nw).y - projectToWebMercator(sw).y) / WM_2R;
}

function computeMapCenter (map) {
    const center = map.getCenter();
    const coords = projectToWebMercator(center);
    return {
        x: coords.x / WM_R,
        y: coords.y / WM_R
    };
}

function computeMatrixZoom (matrix) {
    // The matrix projects spherical mercator coordinates to gl coordinates
    return -(2 * matrix[15] / matrix[5]);
}

function computeMatrixCenter (matrix) {
    // The matrix projects spherical mercator coordinates to gl coordinates
    return {
        x: -(1 + 2 * matrix[12] / matrix[0]),
        y: +(1 + 2 * matrix[13] / matrix[5])
    };
}

/* harmony default export */ __webpack_exports__["default"] = ({
    WM_R,
    WM_2R,
    isUndefined,
    isString,
    isNumber,
    isObject,
    castDate,
    isSetsEqual,
    equalArrays,
    projectToWebMercator,
    computeMapZoom,
    computeMapCenter,
    computeMatrixZoom,
    computeMatrixCenter
});


/***/ })

/******/ });
});
//# sourceMappingURL=carto-vl.js.map