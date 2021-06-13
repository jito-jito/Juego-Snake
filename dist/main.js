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

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _assets_styles_styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./assets/styles/styles.css */ \"./src/assets/styles/styles.css\");\n\nvar canvas = document.getElementById('canvas');\nvar lienzo = canvas.getContext('2d');\nvar p1 = {\n  live: true,\n  mov: {\n    enmovimiento: false,\n    lastMov: \"ArrowRight\",\n    contrMov: \"\",\n    movimiento: 10\n  },\n  tamaño: {\n    width: 10,\n    heigth: 10\n  },\n  cuerpos: [{\n    xi: canvas.width / 2,\n    yi: canvas.height / 2\n  }, {\n    xi: canvas.width / 2 - 10,\n    yi: canvas.height / 2\n  }, {\n    xi: canvas.width / 2 - 10 * 2,\n    yi: canvas.height / 2\n  }, {\n    xi: canvas.width / 2 - 10 * 3,\n    yi: canvas.height / 2\n  }, {\n    xi: canvas.width / 2 - 10 * 4,\n    yi: canvas.height / 2\n  }, {\n    xi: canvas.width / 2 - 10 * 5,\n    yi: canvas.height / 2\n  }, {\n    xi: canvas.width / 2 - 10 * 6,\n    yi: canvas.height / 2\n  }, {\n    xi: canvas.width / 2 - 10 * 7,\n    yi: canvas.height / 2\n  }]\n};\nvar move;\n\nfunction dibujaInicio(_ref) {\n  var tamaño = _ref.tamaño,\n      cuerpos = _ref.cuerpos;\n\n  for (var i = 0; i < cuerpos.length; i++) {\n    lienzo.fillRect(cuerpos[i].xi, cuerpos[i].yi, tamaño.width, tamaño.heigth);\n  }\n\n  document.addEventListener('keyup', mover, false);\n}\n\ndibujaInicio(p1);\n\nfunction mover(event) {\n  cuerposalAzar();\n\n  if (move != undefined) {\n    clearInterval(move);\n  } else {}\n\n  var lastMov;\n\n  switch (p1.mov.lastMov) {\n    case \"ArrowUp\":\n      lastMov = 1;\n      break;\n\n    case \"ArrowDown\":\n      lastMov = 3;\n      break;\n\n    case \"ArrowRight\":\n      lastMov = 2;\n      break;\n\n    case \"ArrowLeft\":\n      lastMov = 4;\n      break;\n  }\n\n  if (lastMov % 2 == 0 && (event.key == \"ArrowUp\" || event.key == \"ArrowDown\")) {\n    switch (event.key) {\n      case \"ArrowUp\":\n        console.log('arriva');\n        p1.mov.lastMov = \"ArrowUp\";\n        move = setInterval(moverA, 250, p1, \"ArrowUp\");\n        break;\n\n      case \"ArrowDown\":\n        console.log('abajo');\n        p1.mov.lastMov = \"ArrowDown\";\n        move = setInterval(moverA, 250, p1, \"ArrowDown\");\n        break;\n    }\n  } else if (lastMov % 2 == 1 && (event.key == \"ArrowRight\" || event.key == \"ArrowLeft\")) {\n    switch (event.key) {\n      case \"ArrowRight\":\n        console.log('derecha');\n        p1.mov.lastMov = \"ArrowRight\";\n        move = setInterval(moverA, 250, p1, \"ArrowRight\");\n        break;\n\n      case \"ArrowLeft\":\n        console.log('izquierda');\n        p1.mov.lastMov = \"ArrowLeft\";\n        move = setInterval(moverA, 250, p1, \"ArrowLeft\");\n        break;\n    }\n  } else {\n    move = setInterval(moverA, 250, p1, p1.mov.lastMov);\n    console.log('no te puedes mover por allí...');\n  }\n}\n\nfunction moverA(p1, direccion) {\n  if (!p1.live) {\n    document.write('memoriii');\n  } else {\n    switch (direccion) {\n      case \"ArrowUp\":\n        // borra todo\n        for (var i = 0; i < p1.cuerpos.length; i++) {\n          lienzo.clearRect(p1.cuerpos[i].xi, p1.cuerpos[i].yi, p1.tamaño.width, p1.tamaño.heigth);\n        } // agrega la nueva coordenada\n\n\n        p1.cuerpos.unshift({\n          xi: p1.cuerpos[0].xi,\n          yi: p1.cuerpos[0].yi - 10\n        }); // elimina la ultima coordenada\n\n        p1.cuerpos.pop(); //dibuja todo nuevamente\n\n        for (var _i = 0; _i < p1.cuerpos.length; _i++) {\n          lienzo.fillRect(p1.cuerpos[_i].xi, p1.cuerpos[_i].yi, p1.tamaño.width, p1.tamaño.heigth);\n        }\n\n        console.log(p1.cuerpos);\n        break;\n\n      case \"ArrowDown\":\n        for (var _i2 = 0; _i2 < p1.cuerpos.length; _i2++) {\n          lienzo.clearRect(p1.cuerpos[_i2].xi, p1.cuerpos[_i2].yi, p1.tamaño.width, p1.tamaño.heigth);\n        }\n\n        p1.cuerpos.unshift({\n          xi: p1.cuerpos[0].xi,\n          yi: p1.cuerpos[0].yi + 10\n        });\n        p1.cuerpos.pop();\n\n        for (var _i3 = 0; _i3 < p1.cuerpos.length; _i3++) {\n          lienzo.fillRect(p1.cuerpos[_i3].xi, p1.cuerpos[_i3].yi, p1.tamaño.width, p1.tamaño.heigth);\n        }\n\n        console.log(p1.cuerpos);\n        break;\n\n      case \"ArrowRight\":\n        for (var _i4 = 0; _i4 < p1.cuerpos.length; _i4++) {\n          lienzo.clearRect(p1.cuerpos[_i4].xi, p1.cuerpos[_i4].yi, p1.tamaño.width, p1.tamaño.heigth);\n        }\n\n        p1.cuerpos.unshift({\n          xi: p1.cuerpos[0].xi + 10,\n          yi: p1.cuerpos[0].yi\n        });\n        p1.cuerpos.pop();\n\n        for (var _i5 = 0; _i5 < p1.cuerpos.length; _i5++) {\n          lienzo.fillRect(p1.cuerpos[_i5].xi, p1.cuerpos[_i5].yi, p1.tamaño.width, p1.tamaño.heigth);\n        }\n\n        console.log(p1.cuerpos);\n        break;\n\n      case \"ArrowLeft\":\n        for (var _i6 = 0; _i6 < p1.cuerpos.length; _i6++) {\n          lienzo.clearRect(p1.cuerpos[_i6].xi, p1.cuerpos[_i6].yi, p1.tamaño.width, p1.tamaño.heigth);\n        }\n\n        p1.cuerpos.unshift({\n          xi: p1.cuerpos[0].xi - 10,\n          yi: p1.cuerpos[0].yi\n        });\n        p1.cuerpos.pop();\n\n        for (var _i7 = 0; _i7 < p1.cuerpos.length; _i7++) {\n          lienzo.fillRect(p1.cuerpos[_i7].xi, p1.cuerpos[_i7].yi, p1.tamaño.width, p1.tamaño.heigth);\n        }\n\n        console.log(p1.cuerpos);\n        break;\n    }\n\n    var choque = p1.cuerpos.filter(function (cuerpo) {\n      if (cuerpo.xi === p1.cuerpos[0].xi && cuerpo.yi === p1.cuerpos[0].yi) {\n        return cuerpo;\n      }\n    }); // console.log(choque)\n\n    if (choque.length > 1) {\n      p1.live = false;\n    } else {\n      choque = [];\n    }\n\n    if (p1.cuerpos[0].xi == 0 && p1.cuerpos[0].yi >= 0 || p1.cuerpos[0].xi >= 0 && p1.cuerpos[0].yi == 0) {\n      p1.live = false;\n    } else if (p1.cuerpos[0].xi == canvas.width && p1.cuerpos[0].yi >= 0 || p1.cuerpos[0].xi >= 0 && p1.cuerpos[0].yi == canvas.height) {\n      p1.live = false;\n    }\n  }\n}\n\nfunction cuerposalAzar() {// setInterval()\n}\n\n//# sourceURL=webpack://snake2/./src/index.js?");

/***/ }),

/***/ "./src/assets/styles/styles.css":
/*!**************************************!*\
  !*** ./src/assets/styles/styles.css ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://snake2/./src/assets/styles/styles.css?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;