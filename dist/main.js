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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _assets_styles_styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./assets/styles/styles.css */ \"./src/assets/styles/styles.css\");\n\nvar canvas = document.getElementById('canvas');\nvar lienzo = canvas.getContext('2d');\nvar levelContainer = document.getElementById('level');\nvar modalContainer = document.getElementById('modalContainer');\nvar modalButton = document.getElementById('modalButton');\nvar p1 = {\n  live: true,\n  mov: {\n    enmovimiento: false,\n    lastMov: \"ArrowRight\",\n    contrMov: undefined,\n    movimiento: 10\n  },\n  tamaño: {\n    width: 10,\n    heigth: 10\n  },\n  cuerpos: [{\n    xi: 100,\n    yi: 50\n  }, {\n    xi: 100 - 10,\n    yi: 50\n  }, {\n    xi: 100 - 10 * 2,\n    yi: 50\n  }, {\n    xi: 100 - 10 * 3,\n    yi: 50\n  } // {\n  //     xi : (100) - ( 10 * 4 ),\n  //     yi: 50,\n  // },\n  // {\n  //     xi : (100) - ( 10 * 5 ),\n  //     yi: 50,\n  // },\n  // {\n  //     xi : (100) - ( 10 * 6 ),\n  //     yi: 50,\n  // },\n  // {\n  //     xi : (100) - ( 10 * 7 ),\n  //     yi: 50,\n  // }\n  ]\n};\nvar level = {\n  coordenadas: {\n    xAzar: null,\n    yAzar: null\n  },\n  level: 1,\n  dificultad: 70,\n  // interval: undefined,\n  cuerpo: true\n};\n\nfunction dibujaInicio() {\n  modalContainer.classList.remove(\"open\");\n\n  for (var i = 0; i < p1.cuerpos.length; i++) {\n    lienzo.fillRect(p1.cuerpos[i].xi, p1.cuerpos[i].yi, p1.tamaño.width, p1.tamaño.heigth);\n  }\n\n  actualizarEstado(level);\n  cuerposAlAzar(level, p1);\n  document.addEventListener('keyup', presionoTecla, false);\n}\n\nfunction cuerposAlAzar(lev, p1) {\n  lev.coordenadas.xAzar = numeroAzar(1, 38);\n  lev.coordenadas.yAzar = numeroAzar(1, 35);\n  lienzo.fillRect(lev.coordenadas.xAzar, lev.coordenadas.yAzar, p1.tamaño.width, p1.tamaño.heigth);\n  lev.cuerpo = true;\n}\n\nfunction numeroAzar(min, max) {\n  return 10 * Math.floor(Math.random() * (max - min) + min);\n}\n\nfunction presionoTecla(event) {\n  if (p1.mov.contrMov) {\n    clearInterval(p1.mov.contrMov);\n  }\n\n  var lastMov = convertirKeyANumero(p1.mov.lastMov);\n\n  if (lastMov % 2 == 0 && (event.key == \"ArrowUp\" || event.key == \"ArrowDown\")) {\n    switch (event.key) {\n      case \"ArrowUp\":\n        console.log('arriva');\n        p1.mov.lastMov = \"ArrowUp\";\n        p1.mov.contrMov = setInterval(moverA, level.dificultad, p1, \"ArrowUp\");\n        break;\n\n      case \"ArrowDown\":\n        console.log('abajo');\n        p1.mov.lastMov = \"ArrowDown\";\n        p1.mov.contrMov = setInterval(moverA, level.dificultad, p1, \"ArrowDown\");\n        break;\n    }\n  } else if (lastMov % 2 == 1 && (event.key == \"ArrowRight\" || event.key == \"ArrowLeft\")) {\n    switch (event.key) {\n      case \"ArrowRight\":\n        console.log('derecha');\n        p1.mov.lastMov = \"ArrowRight\";\n        p1.mov.contrMov = setInterval(moverA, level.dificultad, p1, \"ArrowRight\");\n        break;\n\n      case \"ArrowLeft\":\n        console.log('izquierda');\n        p1.mov.lastMov = \"ArrowLeft\";\n        p1.mov.contrMov = setInterval(moverA, level.dificultad, p1, \"ArrowLeft\");\n        break;\n    }\n  } else {\n    p1.mov.contrMov = setInterval(moverA, level.dificultad, p1, p1.mov.lastMov);\n    console.log('no te puedes mover por allí...');\n  }\n}\n\nfunction convertirKeyANumero(key) {\n  switch (key) {\n    case \"ArrowUp\":\n      return 1;\n\n    case \"ArrowDown\":\n      return 3;\n\n    case \"ArrowRight\":\n      return 2;\n\n    case \"ArrowLeft\":\n      return 4;\n  }\n}\n\nfunction moverA(p1, direccion) {\n  switch (direccion) {\n    case \"ArrowUp\":\n      // borra todo\n      for (var i = 0; i < p1.cuerpos.length; i++) {\n        lienzo.clearRect(p1.cuerpos[i].xi, p1.cuerpos[i].yi, p1.tamaño.width, p1.tamaño.heigth);\n      } // agrega la nueva coordenada\n\n\n      p1.cuerpos.unshift({\n        xi: p1.cuerpos[0].xi,\n        yi: p1.cuerpos[0].yi - 10\n      }); // elimina la ultima coordenada\n\n      p1.cuerpos.pop(); //dibuja todo nuevamente\n\n      for (var _i = 0; _i < p1.cuerpos.length; _i++) {\n        lienzo.fillRect(p1.cuerpos[_i].xi, p1.cuerpos[_i].yi, p1.tamaño.width, p1.tamaño.heigth);\n      }\n\n      console.log(p1.cuerpos);\n      break;\n\n    case \"ArrowDown\":\n      for (var _i2 = 0; _i2 < p1.cuerpos.length; _i2++) {\n        lienzo.clearRect(p1.cuerpos[_i2].xi, p1.cuerpos[_i2].yi, p1.tamaño.width, p1.tamaño.heigth);\n      }\n\n      p1.cuerpos.unshift({\n        xi: p1.cuerpos[0].xi,\n        yi: p1.cuerpos[0].yi + 10\n      });\n      p1.cuerpos.pop();\n\n      for (var _i3 = 0; _i3 < p1.cuerpos.length; _i3++) {\n        lienzo.fillRect(p1.cuerpos[_i3].xi, p1.cuerpos[_i3].yi, p1.tamaño.width, p1.tamaño.heigth);\n      }\n\n      console.log(p1.cuerpos);\n      break;\n\n    case \"ArrowRight\":\n      for (var _i4 = 0; _i4 < p1.cuerpos.length; _i4++) {\n        lienzo.clearRect(p1.cuerpos[_i4].xi, p1.cuerpos[_i4].yi, p1.tamaño.width, p1.tamaño.heigth);\n      }\n\n      p1.cuerpos.unshift({\n        xi: p1.cuerpos[0].xi + 10,\n        yi: p1.cuerpos[0].yi\n      });\n      p1.cuerpos.pop();\n\n      for (var _i5 = 0; _i5 < p1.cuerpos.length; _i5++) {\n        lienzo.fillRect(p1.cuerpos[_i5].xi, p1.cuerpos[_i5].yi, p1.tamaño.width, p1.tamaño.heigth);\n      }\n\n      console.log(p1.cuerpos);\n      break;\n\n    case \"ArrowLeft\":\n      for (var _i6 = 0; _i6 < p1.cuerpos.length; _i6++) {\n        lienzo.clearRect(p1.cuerpos[_i6].xi, p1.cuerpos[_i6].yi, p1.tamaño.width, p1.tamaño.heigth);\n      }\n\n      p1.cuerpos.unshift({\n        xi: p1.cuerpos[0].xi - 10,\n        yi: p1.cuerpos[0].yi\n      });\n      p1.cuerpos.pop();\n\n      for (var _i7 = 0; _i7 < p1.cuerpos.length; _i7++) {\n        lienzo.fillRect(p1.cuerpos[_i7].xi, p1.cuerpos[_i7].yi, p1.tamaño.width, p1.tamaño.heigth);\n      }\n\n      console.log(p1.cuerpos);\n      break;\n  }\n\n  pruebaDeColiciones(p1, level);\n}\n\nfunction pruebaDeColiciones(p1, level) {\n  var ColisionPropia = p1.cuerpos.filter(function (cuerpo) {\n    if (cuerpo.xi === p1.cuerpos[0].xi && cuerpo.yi === p1.cuerpos[0].yi) {\n      return cuerpo;\n    }\n  });\n\n  if (ColisionPropia.length > 1) {\n    p1.live = false;\n  } // colision en los bordes del canvas \n\n\n  if (p1.cuerpos[0].xi == 0 && p1.cuerpos[0].yi >= 0 || p1.cuerpos[0].xi >= 0 && p1.cuerpos[0].yi == 0) {\n    p1.live = false;\n  } else if (p1.cuerpos[0].xi == canvas.width && p1.cuerpos[0].yi >= 0 || p1.cuerpos[0].xi >= 0 && p1.cuerpos[0].yi == canvas.height) {\n    p1.live = false;\n  } // colicion con un cuerpo level\n  // debugger\n\n\n  if (level.coordenadas.xAzar == p1.cuerpos[0].xi && level.coordenadas.yAzar === p1.cuerpos[0].yi) {\n    level.level += 1;\n    level.dificultad -= 3;\n    actualizarEstado(level);\n    level.cuerpo = false;\n    p1.cuerpos.push({\n      xi: p1.cuerpos[0].xi * (p1.cuerpos.length + 1),\n      yi: p1.cuerpos[0].yi * (p1.cuerpos.length + 1)\n    }); // lienzo.clearRect(level.coordenadas.xAzar, level.coordenadas.yAzar, p1.tamaño.width, p1.tamaño.heigth)\n\n    cuerposAlAzar(level, p1);\n  }\n\n  if (!p1.live) {\n    clearInterval(p1.mov.contrMov);\n    resetGame(p1, level);\n    document.removeEventListener('keyup', presionoTecla);\n    muerto();\n  }\n}\n\nfunction actualizarEstado(level) {\n  levelContainer.innerHTML = level.level;\n}\n\nfunction muerto() {\n  modalContainer.classList.add(\"open\");\n  modalButton.addEventListener('click', dibujaInicio);\n}\n\nfunction resetGame(player, nivel) {\n  p1 = {\n    live: true,\n    mov: {\n      enmovimiento: false,\n      lastMov: \"ArrowRight\",\n      contrMov: undefined,\n      movimiento: 10\n    },\n    tamaño: {\n      width: 10,\n      heigth: 10\n    },\n    cuerpos: [{\n      xi: 100,\n      yi: 50\n    }, {\n      xi: 100 - 10,\n      yi: 50\n    }, {\n      xi: 100 - 10 * 2,\n      yi: 50\n    }, {\n      xi: 100 - 10 * 3,\n      yi: 50\n    } // {\n    //     xi : (100) - ( 10 * 4 ),\n    //     yi: 50,\n    // },\n    // {\n    //     xi : (100) - ( 10 * 5 ),\n    //     yi: 50,\n    // },\n    // {\n    //     xi : (100) - ( 10 * 6 ),\n    //     yi: 50,\n    // },\n    // {\n    //     xi : (100) - ( 10 * 7 ),\n    //     yi: 50,\n    // }\n    ]\n  };\n  level = {\n    coordenadas: {\n      xAzar: null,\n      yAzar: null\n    },\n    level: 1,\n    dificultad: 70,\n    // interval: undefined,\n    cuerpo: true\n  }; // player = newPlayer;\n\n  lienzo.clearRect(0, 0, canvas.width, canvas.height);\n}\n\ndibujaInicio(p1, level);\n\n//# sourceURL=webpack://snake2/./src/index.js?");

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