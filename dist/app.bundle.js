/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./js/load_buttons.js":
/*!****************************!*\
  !*** ./js/load_buttons.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst loadPhraseButtons = () => {\n  fetch('../mp3_list.json')\n  // console.log(mp3List);\n  // $.getJSON(\"../mp3_files.json\", function(json) {\n  //   console.log(json); // this will show the info it in firebug console\n  // });\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadPhraseButtons);\n\n//# sourceURL=webpack:///./js/load_buttons.js?");

/***/ }),

/***/ "./js/main.js":
/*!********************!*\
  !*** ./js/main.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _load_buttons_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./load_buttons.js */ \"./js/load_buttons.js\");\n/*\n *  Copyright (c) 2015 The WebRTC project authors. All Rights Reserved.\n *\n *  Use of this source code is governed by a BSD-style license\n *  that can be found in the LICENSE file in the root of the source\n *  tree.\n */\n\n\n\n\nconst init = () => {\n  navigator.mediaDevices.enumerateDevices().then(gotDevices).catch(handleError);\n  (0,_load_buttons_js__WEBPACK_IMPORTED_MODULE_0__.default)();\n}\n\nconst phraseButtons = () => document.querySelectorAll('button.phrase');\nphraseButtons().forEach(button => {\n  button.addEventListener('click', () => {\n    const audio = button.nextElementSibling;\n    audio.volume = 1;\n    console.log('Audio lowered to reduce feedback from local gUM stream');\n\n    audio.play();\n  });\n})\n\nfunction gotDevices(deviceInfos) {\n  const masterOutputSelector = document.createElement('select');\n\n  for (let i = 0; i !== deviceInfos.length; ++i) {\n    const deviceInfo = deviceInfos[i];\n    const option = document.createElement('option');\n    option.value = deviceInfo.deviceId;\n    if (deviceInfo.kind === 'audiooutput') {\n      console.info('Found audio output device: ', deviceInfo.label);\n      option.text = deviceInfo.label || `speaker ${masterOutputSelector.length + 1}`;\n      masterOutputSelector.appendChild(option);\n    } else {\n      console.log('Found non audio output device: ', deviceInfo.label);\n    }\n  }\n\n  // Clone the master outputSelector and replace outputSelector placeholders.\n  const allOutputSelectors = getAudioSelectElements();\n  for (let selector = 0; selector < allOutputSelectors.length; selector++) {\n    const newOutputSelector = masterOutputSelector.cloneNode(true);\n    newOutputSelector.addEventListener('change', changeAudioDestination);\n    allOutputSelectors[selector].parentNode.replaceChild(\n      newOutputSelector,\n      allOutputSelectors[selector]\n    );\n  }\n\n  useDefaultDevice();\n}\n\n// Attach audio output device to the provided media element using the deviceId.\nfunction attachSinkId(element, sinkId) {\n  if (typeof element.sinkId !== 'undefined') {\n    element.setSinkId(sinkId)\n        .then(() => {\n          console.log(`Success, audio output device attached: ${sinkId} to element with ${element.title} as source.`);\n        })\n        .catch(error => {\n          let errorMessage = error;\n          if (error.name === 'SecurityError') {\n            errorMessage = `You need to use HTTPS for selecting audio output device: ${error}`;\n          }\n          console.error(errorMessage);\n          // Jump back to first output device in the list as it's the default.\n          getAudioSelectElement().selectedIndex = 0;\n        });\n  } else {\n    console.warn('Browser does not support output device selection.');\n  }\n}\n\nfunction changeAudioDestination(event) {\n  const deviceId = event.target.value;\n\n  setDeviceIdToCookie(deviceId);\n  chooseDeviceForAllAudio(deviceId);\n}\n\nfunction handleError(error) {\n  console.log('navigator.MediaDevices.getUserMedia error: ', error.message, error.name);\n}\n\nconst getAudioSelectElement = () => (\n  getAudioSelectElements()[0]\n)\n\nconst getAudioSelectElements = () => (\n  document.querySelectorAll('select')\n)\n\nconst setDeviceIdToCookie = (deviceId) => {\n  const _deviceId = deviceId || getAudioSelectElement().value\n  let expirationDate = new Date();\n  expirationDate.setFullYear(expirationDate.getFullYear() + 1);\n  document.cookie = `deviceId=${_deviceId};expires=${expirationDate.toUTCString()};`;\n}\n\nconst getDeviceIdFromCookie = () => {\n  const deviceKeyPair = document.cookie && document.cookie.split(';')[0];\n  return deviceKeyPair.split('=')[1];\n}\n\nconst chooseDeviceForAllAudio = (deviceId) => {\n  const elements = document.querySelectorAll('audio');\n  elements.forEach(element => {\n    attachSinkId(element, deviceId);\n  })\n}\n\nconst useDefaultDevice = () => {\n  const deviceId = getDeviceIdFromCookie();\n  if (deviceId) {\n    getAudioSelectElement().value = deviceId;\n    chooseDeviceForAllAudio(deviceId);\n  } else {\n    getAudioSelectElement().selectedIndex = 0;\n  }\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (init);\n\n//# sourceURL=webpack:///./js/main.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./js/main.js");
/******/ 	
/******/ })()
;