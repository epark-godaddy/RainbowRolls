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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/board.js":
/*!**********************!*\
  !*** ./src/board.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _sushi__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sushi */ "./src/sushi.js");


class Board {
  constructor(level) {
    this.level = level;

    //red, orange, dark green, fuscia, dusty blue, yellow, purple, light green, tan, grey
    this.colors = [
      [
        [255, 0, 0],
        [255, 51, 51, 0.9],
      ],
      [
        [255, 128, 0],
        [255, 153, 51, 0.9],
      ],
      [
        [0, 102, 0],
        [0, 153, 0, 0.9],
      ],
      [
        [255, 0, 255],
        [255, 51, 255, 0.9],
      ],
      [
        [51, 153, 255],
        [102, 178, 255, 0.9],
      ],
      [
        [255, 255, 102],
        [255, 255, 153, 0.9],
      ],
      [
        [76, 0, 153],
        [102, 0, 204, 0.9],
      ],
      [
        [51, 255, 51],
        [102, 255, 102, 0.9],
      ],
      [
        [255, 204, 153],
        [255, 229, 204, 0.9],
      ],
      [
        [192, 192, 192],
        [224, 224, 224, 0.9],
      ],
    ];
    this.randomColorIdx = this.getRandomInt(this.colors.length);
    this.outlineColor = this.getRGBColor(this.colors[this.randomColorIdx][0]);
    this.fillColor = this.getRGBColor(this.colors[this.randomColorIdx][1]);
    this.grid = this.generateGrid(level);
    this.addSpecialSushi();
  }

  getRGBColor(colorArray) {
    return "rgb(" + colorArray.join(",") + ")";
  }

  generateGrid(level) {
    const gridLength = Math.ceil(level / 4) + 1;
    const grid = [];
    for (let i = 0; i < gridLength; i++) {
      const row = [];
      for (let j = 0; j < gridLength; j++) {
        row.push(new _sushi__WEBPACK_IMPORTED_MODULE_0__["default"](this.outlineColor, this.fillColor));
      }
      grid.push(row);
    }
    return grid;
  }

  getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }

  getHighestNumberIndex(numArray) {
    let highestValue = numArray[0];
    let highestIndex = 0;
    numArray.forEach((value, idx) => {
      if (value > highestValue) {
        highestValue = value;
        highestIndex = idx;
      }
    });
    return highestIndex;
  }

  addSpecialSushi() {
    const randRow = this.getRandomInt(this.grid.length);
    const randCol = this.getRandomInt(this.grid.length);

    const outline = this.colors[this.randomColorIdx][0];
    const fill = this.colors[this.randomColorIdx][1];

    const colorChange = 40 - Math.floor(this.level / 4) * 2;

    const indexToChange = this.getHighestNumberIndex(outline);
    outline[indexToChange] = outline[indexToChange] - colorChange;
    fill[indexToChange] = fill[indexToChange] - colorChange;

    this.grid[randRow][randCol] = new _sushi__WEBPACK_IMPORTED_MODULE_0__["default"](
      this.getRGBColor(outline),
      this.getRGBColor(fill),
      true
    );
  }

  render() {
    const grid = document.createElement("div");
    grid.className = "grid";

    this.grid.forEach((row) => {
      const rowEle = document.createElement("div");
      rowEle.className = "row";
      row.forEach((sushi) => {
        const sushiEle = sushi.render();
        rowEle.appendChild(sushiEle);
      });
      grid.appendChild(rowEle);
    });

    document.getElementById("board").appendChild(grid);
  }
}

/* harmony default export */ __webpack_exports__["default"] = (Board);


/***/ }),

/***/ "./src/game.js":
/*!*********************!*\
  !*** ./src/game.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Game; });
/* harmony import */ var _board__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./board */ "./src/board.js");
/* harmony import */ var _timer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./timer */ "./src/timer.js");


class Game {
  constructor() {
    document.addEventListener("success", () => this.loadGame());
    document.addEventListener("failure", () => this.loseGame());
    this.level = 0;
  }
  onClick() {}
  loadGame() {
    const board = document.getElementById("board");
    if (board.hasChildNodes()) {
      board.removeChild(board.childNodes[0]);
    }
    const countdown = document.getElementById("countdown");
    if (countdown.hasChildNodes()) {
      Array.from(countdown.childNodes).forEach((node) => {
        countdown.removeChild(node);
      });
    }
    this.level += 1;
    this.board = new _board__WEBPACK_IMPORTED_MODULE_0__["default"](this.level);
    this.board.render();

    this.timer = new _timer__WEBPACK_IMPORTED_MODULE_1__["default"](this.level);
    this.timer.render();
  }

  loseGame() {
    console.log("You Lost");
    console.log(this.level - 1);
  }
}


/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _game__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./game */ "./src/game.js");


document.addEventListener("DOMContentLoaded", () => {
  const game = new _game__WEBPACK_IMPORTED_MODULE_0__["default"]();
  game.loadGame();
});


/***/ }),

/***/ "./src/sushi.js":
/*!**********************!*\
  !*** ./src/sushi.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
class Sushi {
  constructor(outlineColor, fillColor, special = false) {
    this.outlineColor = outlineColor;
    this.fillColor = fillColor;
    this.special = special;
    this.onClick = this.onClick.bind(this);
  }
  onClick() {
    console.log(this.special);
    if (this.special) {
      document.dispatchEvent(new Event("success"));
    } else {
      document.dispatchEvent(new Event("failure"));
    }
  }

  render() {
    const sushiContainer = document.createElement("div");
    sushiContainer.className = "sushi";
    sushiContainer.onclick = this.onClick;
    const sushiSVG = this.generateSVG();
    sushiContainer.appendChild(sushiSVG);

    return sushiContainer;
  }

  generateSVG() {
    const xmlns = "http://www.w3.org/2000/svg";
    const sushiSVG = document.createElementNS(xmlns, "svg");
    sushiSVG.setAttributeNS(null, "viewBox", "93.1 184.5 301.931 126.8");

    const sushiG = document.createElementNS(xmlns, "g");
    const path0 = this.generatePath(
      "#D3D5D6",
      "M358.8,243.3c-2.3,0-6.1,0.1-9,0.3c-7-7.6-19-16.9-35.5-25.2c-20.5-10.3-55-22.6-103.4-22.6 c-29.4,0-54.6,3.9-74.9,11.7c-17.8,6.8-30.9,16.2-37.7,27.2c-5.7,9.1-6.6,18.6-2.6,26.8c0.4,0.9,1.3,2.2,2.9,3.8 c-3.5,5.3-5.4,10.5-5.4,15.5c0,18.2,23.1,23.8,40.4,26.5c21.6,3.3,50.8,4,88.1,4c37.3,0,66.5-0.7,88.1-4 c15.6-2.4,35.9-7.2,39.8-21.5c5.7,6,17.7,17.3,29,19.6c1,0.2,2,0.3,2.8,0.3c4,0,6-2.2,6.8-3.5c2.8-4.7-0.3-10.8-3.6-17.2 c-0.3-0.6-0.6-1.2-1-1.9c3.4-3,4.8-8.7,5.3-13c3.4-2.5,7.1-7.5,5.9-15.3C394,249.9,389.5,243.3,358.8,243.3z"
    );
    sushiG.appendChild(path0);
    const sushiG2 = document.createElementNS(xmlns, "g");

    //path 1
    const path1 = this.generatePath(
      "#FFFFFF",
      "M221.7,290c41.6,0,109.3,0,117.7-16.9c-0.4-0.1-0.8-0.2-1.2-0.2c-17.4-4.2-123.9-5.4-177.8-5.4 c-28.3,0-44.4-3.9-53.4-8.1c-2.4,3.7-3.7,7.1-3.7,10.1C103.2,290,177.4,290,221.7,290z"
    );
    //path 2
    const path2 = this.generatePath(
      "#8A8C8E",
      "M344.9,273.7C344.9,273.7,344.9,273.7,344.9,273.7c-1.7,0-3.6-0.2-5.5-0.6 C331.1,290,263.3,290,221.7,290c-44.3,0-118.5,0-118.5-20.5c0-3,1.3-6.4,3.7-10.1c-4-1.8-6.6-3.8-8.4-5.4 c-3.5,5.3-5.4,10.5-5.4,15.5c0,18.2,23.1,23.8,40.4,26.5c21.6,3.3,50.8,4,88.1,4c37.3,0,66.5-0.7,88.1-4 c15.6-2.4,35.9-7.2,39.8-21.5c-0.4-0.4-0.7-0.8-1-1.1C347.4,273.6,346.2,273.7,344.9,273.7z"
    );
    // path 3 (outline)
    const path3 = this.generatePath(
      // "#D9432D",
      this.outlineColor,
      "M358.8,232c-2.3,0-6.1,0.1-9,0.3c-7-7.6-19-16.9-35.5-25.2c-20.5-10.3-55-22.6-103.4-22.6 c-29.4,0-54.6,3.9-74.9,11.7c-17.8,6.8-30.9,16.2-37.7,27.2c-5.7,9.1-6.6,18.6-2.6,26.8c0.4,0.9,1.3,2.2,2.9,3.8 c1.8,1.7,4.4,3.6,8.4,5.4c9.1,4.2,25.1,8.1,53.4,8.1c53.9,0,160.4,1.1,177.8,5.4c0.4,0.1,0.8,0.2,1.2,0.2 c2,0.4,3.8,0.6,5.5,0.6c0,0,0,0,0,0c1.3,0,2.5-0.1,3.6-0.3c0.3,0.3,0.7,0.7,1,1.1c5.7,6,17.7,17.3,29,19.6c1,0.2,2,0.3,2.8,0.3 c4,0,6-2.2,6.8-3.5c2.8-4.7-0.3-10.8-3.6-17.2c-0.3-0.6-0.6-1.2-1-1.9c3.4-3,4.8-8.7,5.3-13c3.4-2.5,7.1-7.5,5.9-15.3 C394,238.6,389.5,232,358.8,232z M104.7,245.8c-2.5-5.1-1.8-11,2.1-17.2c6.8-10.9,23.5-22.3,51.6-28.8 c-1.9,7.1-3.9,18.2-2.9,32.2l10-0.7c-1.2-16.7,2.4-29,4.1-33.8c7.7-1.3,16-2.2,25.2-2.7c-2.1,6.9-4.7,19-3.6,34.7l10-0.7 c-1.2-17.5,2.7-30.1,4.3-34.4c1.8,0,3.7-0.1,5.5-0.1c7.1,0,13.8,0.3,20.4,0.8c-2.1,6.9-4.6,18.9-3.5,34.3l10-0.7 c-1.1-15.5,1.9-27.2,3.7-32.6c8.6,1,16.8,2.5,24.3,4.2c-2.1,6.8-4.9,19.1-3.8,35.2l10-0.7c-1-15,1.7-26.4,3.5-32.1 c7,2,13.5,4.2,19.5,6.5c-2.1,6.8-4.9,19.1-3.8,35.2l10-0.7c-0.9-13.8,1.3-24.5,3.1-30.5c25.7,11.8,40,25.8,42.5,31.5 c3.1,7,4,14.3,2.1,17.2c-0.3,0.4-1,1.6-4,1.6c0,0,0,0,0,0c-1.2,0-2.7-0.2-4.3-0.6c-22.9-5.6-173.8-5.6-180.2-5.6 C112,257.5,104.7,245.9,104.7,245.8z M272.5,196.9L272.5,196.9L272.5,196.9L272.5,196.9z"
    );
    // path 4 (fill)
    const path4 = this.generatePath(
      // "#EF4A32",
      this.fillColor,
      "M340.6,263.1c1.6,0.4,3.1,0.6,4.3,0.6c0,0,0,0,0,0c3,0,3.7-1.1,4-1.6c1.9-2.9,1-10.1-2.1-17.2 c-2.5-5.7-16.8-19.7-42.5-31.5c-1.8,6-4,16.8-3.1,30.5l-10,0.7c-1.1-16.1,1.6-28.4,3.8-35.2c-6-2.4-12.5-4.6-19.5-6.5 c-1.8,5.6-4.6,17-3.5,32.1l-10,0.7c-1.1-16.1,1.7-28.5,3.8-35.2c-7.6-1.7-15.7-3.2-24.3-4.2c-1.8,5.4-4.8,17.1-3.7,32.6 l-10,0.7c-1.1-15.4,1.4-27.4,3.5-34.3c-6.5-0.5-13.3-0.8-20.4-0.8c-1.9,0-3.7,0-5.5,0.1c-1.6,4.3-5.6,16.9-4.3,34.4l-10,0.7 c-1.1-15.7,1.5-27.8,3.6-34.7c-9.1,0.5-17.5,1.4-25.2,2.7c-1.7,4.8-5.3,17-4.1,33.8l-10,0.7c-1-14,1-25.1,2.9-32.2 c-28.1,6.5-44.8,17.9-51.6,28.8c-3.8,6.1-4.6,12.1-2.1,17.2c0,0.1,7.3,11.7,55.8,11.7C166.8,257.5,317.7,257.6,340.6,263.1z"
    );
    //polygon
    const polygon = document.createElementNS(xmlns, "polygon");
    polygon.setAttributeNS(null, "fill", "#EF4A32");
    polygon.setAttributeNS(
      null,
      "points",
      "272.5,196.9 272.5,196.9 272.5,196.9"
    );
    // append path1-4 and polygon
    sushiG2.append(path1, path2, path3, path4, polygon);
    sushiG.appendChild(sushiG2);
    sushiSVG.appendChild(sushiG);
    return sushiSVG;
  }

  generatePath(fillColor, d) {
    const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
    path.setAttributeNS(null, "fill", fillColor);
    path.setAttributeNS(null, "d", d);
    return path;
  }
}

/* harmony default export */ __webpack_exports__["default"] = (Sushi);


/***/ }),

/***/ "./src/timer.js":
/*!**********************!*\
  !*** ./src/timer.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
class Timer {
  constructor(level) {
    this.level = level;
  }
  render() {
    const xmlns = "http://www.w3.org/2000/svg";

    const levelNumber = document.createElement("div");
    levelNumber.className = "level-number";
    levelNumber.textContent = this.level;

    const clockSVG = document.createElementNS(xmlns, "svg");
    clockSVG.setAttributeNS(null, "class", "clock");

    const circle = document.createElementNS(xmlns, "circle");
    circle.setAttributeNS(null, "r", "18");
    circle.setAttributeNS(null, "cx", "20");
    circle.setAttributeNS(null, "cy", "20");

    clockSVG.appendChild(circle);
    countdown.appendChild(levelNumber);
    countdown.appendChild(clockSVG);
  }
}

/* harmony default export */ __webpack_exports__["default"] = (Timer);


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2JvYXJkLmpzIiwid2VicGFjazovLy8uL3NyYy9nYW1lLmpzIiwid2VicGFjazovLy8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3VzaGkuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3RpbWVyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNsRkE7QUFBQTtBQUE0Qjs7QUFFNUI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIsZ0JBQWdCO0FBQ25DO0FBQ0EscUJBQXFCLGdCQUFnQjtBQUNyQyxxQkFBcUIsOENBQUs7QUFDMUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxzQ0FBc0MsOENBQUs7QUFDM0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7O0FBRWUsb0VBQUssRUFBQzs7Ozs7Ozs7Ozs7OztBQy9IckI7QUFBQTtBQUFBO0FBQUE7QUFBNEI7QUFDQTtBQUNiO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQSxxQkFBcUIsOENBQUs7QUFDMUI7O0FBRUEscUJBQXFCLDhDQUFLO0FBQzFCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQ2hDQTtBQUFBO0FBQTBCOztBQUUxQjtBQUNBLG1CQUFtQiw2Q0FBSTtBQUN2QjtBQUNBLENBQUM7Ozs7Ozs7Ozs7Ozs7QUNMRDtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFZSxvRUFBSyxFQUFDOzs7Ozs7Ozs7Ozs7O0FDcEZyQjtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVlLG9FQUFLLEVBQUMiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwiaW1wb3J0IFN1c2hpIGZyb20gXCIuL3N1c2hpXCI7XG5cbmNsYXNzIEJvYXJkIHtcbiAgY29uc3RydWN0b3IobGV2ZWwpIHtcbiAgICB0aGlzLmxldmVsID0gbGV2ZWw7XG5cbiAgICAvL3JlZCwgb3JhbmdlLCBkYXJrIGdyZWVuLCBmdXNjaWEsIGR1c3R5IGJsdWUsIHllbGxvdywgcHVycGxlLCBsaWdodCBncmVlbiwgdGFuLCBncmV5XG4gICAgdGhpcy5jb2xvcnMgPSBbXG4gICAgICBbXG4gICAgICAgIFsyNTUsIDAsIDBdLFxuICAgICAgICBbMjU1LCA1MSwgNTEsIDAuOV0sXG4gICAgICBdLFxuICAgICAgW1xuICAgICAgICBbMjU1LCAxMjgsIDBdLFxuICAgICAgICBbMjU1LCAxNTMsIDUxLCAwLjldLFxuICAgICAgXSxcbiAgICAgIFtcbiAgICAgICAgWzAsIDEwMiwgMF0sXG4gICAgICAgIFswLCAxNTMsIDAsIDAuOV0sXG4gICAgICBdLFxuICAgICAgW1xuICAgICAgICBbMjU1LCAwLCAyNTVdLFxuICAgICAgICBbMjU1LCA1MSwgMjU1LCAwLjldLFxuICAgICAgXSxcbiAgICAgIFtcbiAgICAgICAgWzUxLCAxNTMsIDI1NV0sXG4gICAgICAgIFsxMDIsIDE3OCwgMjU1LCAwLjldLFxuICAgICAgXSxcbiAgICAgIFtcbiAgICAgICAgWzI1NSwgMjU1LCAxMDJdLFxuICAgICAgICBbMjU1LCAyNTUsIDE1MywgMC45XSxcbiAgICAgIF0sXG4gICAgICBbXG4gICAgICAgIFs3NiwgMCwgMTUzXSxcbiAgICAgICAgWzEwMiwgMCwgMjA0LCAwLjldLFxuICAgICAgXSxcbiAgICAgIFtcbiAgICAgICAgWzUxLCAyNTUsIDUxXSxcbiAgICAgICAgWzEwMiwgMjU1LCAxMDIsIDAuOV0sXG4gICAgICBdLFxuICAgICAgW1xuICAgICAgICBbMjU1LCAyMDQsIDE1M10sXG4gICAgICAgIFsyNTUsIDIyOSwgMjA0LCAwLjldLFxuICAgICAgXSxcbiAgICAgIFtcbiAgICAgICAgWzE5MiwgMTkyLCAxOTJdLFxuICAgICAgICBbMjI0LCAyMjQsIDIyNCwgMC45XSxcbiAgICAgIF0sXG4gICAgXTtcbiAgICB0aGlzLnJhbmRvbUNvbG9ySWR4ID0gdGhpcy5nZXRSYW5kb21JbnQodGhpcy5jb2xvcnMubGVuZ3RoKTtcbiAgICB0aGlzLm91dGxpbmVDb2xvciA9IHRoaXMuZ2V0UkdCQ29sb3IodGhpcy5jb2xvcnNbdGhpcy5yYW5kb21Db2xvcklkeF1bMF0pO1xuICAgIHRoaXMuZmlsbENvbG9yID0gdGhpcy5nZXRSR0JDb2xvcih0aGlzLmNvbG9yc1t0aGlzLnJhbmRvbUNvbG9ySWR4XVsxXSk7XG4gICAgdGhpcy5ncmlkID0gdGhpcy5nZW5lcmF0ZUdyaWQobGV2ZWwpO1xuICAgIHRoaXMuYWRkU3BlY2lhbFN1c2hpKCk7XG4gIH1cblxuICBnZXRSR0JDb2xvcihjb2xvckFycmF5KSB7XG4gICAgcmV0dXJuIFwicmdiKFwiICsgY29sb3JBcnJheS5qb2luKFwiLFwiKSArIFwiKVwiO1xuICB9XG5cbiAgZ2VuZXJhdGVHcmlkKGxldmVsKSB7XG4gICAgY29uc3QgZ3JpZExlbmd0aCA9IE1hdGguY2VpbChsZXZlbCAvIDQpICsgMTtcbiAgICBjb25zdCBncmlkID0gW107XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBncmlkTGVuZ3RoOyBpKyspIHtcbiAgICAgIGNvbnN0IHJvdyA9IFtdO1xuICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBncmlkTGVuZ3RoOyBqKyspIHtcbiAgICAgICAgcm93LnB1c2gobmV3IFN1c2hpKHRoaXMub3V0bGluZUNvbG9yLCB0aGlzLmZpbGxDb2xvcikpO1xuICAgICAgfVxuICAgICAgZ3JpZC5wdXNoKHJvdyk7XG4gICAgfVxuICAgIHJldHVybiBncmlkO1xuICB9XG5cbiAgZ2V0UmFuZG9tSW50KG1heCkge1xuICAgIHJldHVybiBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBNYXRoLmZsb29yKG1heCkpO1xuICB9XG5cbiAgZ2V0SGlnaGVzdE51bWJlckluZGV4KG51bUFycmF5KSB7XG4gICAgbGV0IGhpZ2hlc3RWYWx1ZSA9IG51bUFycmF5WzBdO1xuICAgIGxldCBoaWdoZXN0SW5kZXggPSAwO1xuICAgIG51bUFycmF5LmZvckVhY2goKHZhbHVlLCBpZHgpID0+IHtcbiAgICAgIGlmICh2YWx1ZSA+IGhpZ2hlc3RWYWx1ZSkge1xuICAgICAgICBoaWdoZXN0VmFsdWUgPSB2YWx1ZTtcbiAgICAgICAgaGlnaGVzdEluZGV4ID0gaWR4O1xuICAgICAgfVxuICAgIH0pO1xuICAgIHJldHVybiBoaWdoZXN0SW5kZXg7XG4gIH1cblxuICBhZGRTcGVjaWFsU3VzaGkoKSB7XG4gICAgY29uc3QgcmFuZFJvdyA9IHRoaXMuZ2V0UmFuZG9tSW50KHRoaXMuZ3JpZC5sZW5ndGgpO1xuICAgIGNvbnN0IHJhbmRDb2wgPSB0aGlzLmdldFJhbmRvbUludCh0aGlzLmdyaWQubGVuZ3RoKTtcblxuICAgIGNvbnN0IG91dGxpbmUgPSB0aGlzLmNvbG9yc1t0aGlzLnJhbmRvbUNvbG9ySWR4XVswXTtcbiAgICBjb25zdCBmaWxsID0gdGhpcy5jb2xvcnNbdGhpcy5yYW5kb21Db2xvcklkeF1bMV07XG5cbiAgICBjb25zdCBjb2xvckNoYW5nZSA9IDQwIC0gTWF0aC5mbG9vcih0aGlzLmxldmVsIC8gNCkgKiAyO1xuXG4gICAgY29uc3QgaW5kZXhUb0NoYW5nZSA9IHRoaXMuZ2V0SGlnaGVzdE51bWJlckluZGV4KG91dGxpbmUpO1xuICAgIG91dGxpbmVbaW5kZXhUb0NoYW5nZV0gPSBvdXRsaW5lW2luZGV4VG9DaGFuZ2VdIC0gY29sb3JDaGFuZ2U7XG4gICAgZmlsbFtpbmRleFRvQ2hhbmdlXSA9IGZpbGxbaW5kZXhUb0NoYW5nZV0gLSBjb2xvckNoYW5nZTtcblxuICAgIHRoaXMuZ3JpZFtyYW5kUm93XVtyYW5kQ29sXSA9IG5ldyBTdXNoaShcbiAgICAgIHRoaXMuZ2V0UkdCQ29sb3Iob3V0bGluZSksXG4gICAgICB0aGlzLmdldFJHQkNvbG9yKGZpbGwpLFxuICAgICAgdHJ1ZVxuICAgICk7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgZ3JpZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgZ3JpZC5jbGFzc05hbWUgPSBcImdyaWRcIjtcblxuICAgIHRoaXMuZ3JpZC5mb3JFYWNoKChyb3cpID0+IHtcbiAgICAgIGNvbnN0IHJvd0VsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICByb3dFbGUuY2xhc3NOYW1lID0gXCJyb3dcIjtcbiAgICAgIHJvdy5mb3JFYWNoKChzdXNoaSkgPT4ge1xuICAgICAgICBjb25zdCBzdXNoaUVsZSA9IHN1c2hpLnJlbmRlcigpO1xuICAgICAgICByb3dFbGUuYXBwZW5kQ2hpbGQoc3VzaGlFbGUpO1xuICAgICAgfSk7XG4gICAgICBncmlkLmFwcGVuZENoaWxkKHJvd0VsZSk7XG4gICAgfSk7XG5cbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImJvYXJkXCIpLmFwcGVuZENoaWxkKGdyaWQpO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEJvYXJkO1xuIiwiaW1wb3J0IEJvYXJkIGZyb20gXCIuL2JvYXJkXCI7XG5pbXBvcnQgVGltZXIgZnJvbSBcIi4vdGltZXJcIjtcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEdhbWUge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwic3VjY2Vzc1wiLCAoKSA9PiB0aGlzLmxvYWRHYW1lKCkpO1xuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJmYWlsdXJlXCIsICgpID0+IHRoaXMubG9zZUdhbWUoKSk7XG4gICAgdGhpcy5sZXZlbCA9IDA7XG4gIH1cbiAgb25DbGljaygpIHt9XG4gIGxvYWRHYW1lKCkge1xuICAgIGNvbnN0IGJvYXJkID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJib2FyZFwiKTtcbiAgICBpZiAoYm9hcmQuaGFzQ2hpbGROb2RlcygpKSB7XG4gICAgICBib2FyZC5yZW1vdmVDaGlsZChib2FyZC5jaGlsZE5vZGVzWzBdKTtcbiAgICB9XG4gICAgY29uc3QgY291bnRkb3duID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjb3VudGRvd25cIik7XG4gICAgaWYgKGNvdW50ZG93bi5oYXNDaGlsZE5vZGVzKCkpIHtcbiAgICAgIEFycmF5LmZyb20oY291bnRkb3duLmNoaWxkTm9kZXMpLmZvckVhY2goKG5vZGUpID0+IHtcbiAgICAgICAgY291bnRkb3duLnJlbW92ZUNoaWxkKG5vZGUpO1xuICAgICAgfSk7XG4gICAgfVxuICAgIHRoaXMubGV2ZWwgKz0gMTtcbiAgICB0aGlzLmJvYXJkID0gbmV3IEJvYXJkKHRoaXMubGV2ZWwpO1xuICAgIHRoaXMuYm9hcmQucmVuZGVyKCk7XG5cbiAgICB0aGlzLnRpbWVyID0gbmV3IFRpbWVyKHRoaXMubGV2ZWwpO1xuICAgIHRoaXMudGltZXIucmVuZGVyKCk7XG4gIH1cblxuICBsb3NlR2FtZSgpIHtcbiAgICBjb25zb2xlLmxvZyhcIllvdSBMb3N0XCIpO1xuICAgIGNvbnNvbGUubG9nKHRoaXMubGV2ZWwgLSAxKTtcbiAgfVxufVxuIiwiaW1wb3J0IEdhbWUgZnJvbSBcIi4vZ2FtZVwiO1xuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCAoKSA9PiB7XG4gIGNvbnN0IGdhbWUgPSBuZXcgR2FtZSgpO1xuICBnYW1lLmxvYWRHYW1lKCk7XG59KTtcbiIsImNsYXNzIFN1c2hpIHtcbiAgY29uc3RydWN0b3Iob3V0bGluZUNvbG9yLCBmaWxsQ29sb3IsIHNwZWNpYWwgPSBmYWxzZSkge1xuICAgIHRoaXMub3V0bGluZUNvbG9yID0gb3V0bGluZUNvbG9yO1xuICAgIHRoaXMuZmlsbENvbG9yID0gZmlsbENvbG9yO1xuICAgIHRoaXMuc3BlY2lhbCA9IHNwZWNpYWw7XG4gICAgdGhpcy5vbkNsaWNrID0gdGhpcy5vbkNsaWNrLmJpbmQodGhpcyk7XG4gIH1cbiAgb25DbGljaygpIHtcbiAgICBjb25zb2xlLmxvZyh0aGlzLnNwZWNpYWwpO1xuICAgIGlmICh0aGlzLnNwZWNpYWwpIHtcbiAgICAgIGRvY3VtZW50LmRpc3BhdGNoRXZlbnQobmV3IEV2ZW50KFwic3VjY2Vzc1wiKSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGRvY3VtZW50LmRpc3BhdGNoRXZlbnQobmV3IEV2ZW50KFwiZmFpbHVyZVwiKSk7XG4gICAgfVxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHN1c2hpQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBzdXNoaUNvbnRhaW5lci5jbGFzc05hbWUgPSBcInN1c2hpXCI7XG4gICAgc3VzaGlDb250YWluZXIub25jbGljayA9IHRoaXMub25DbGljaztcbiAgICBjb25zdCBzdXNoaVNWRyA9IHRoaXMuZ2VuZXJhdGVTVkcoKTtcbiAgICBzdXNoaUNvbnRhaW5lci5hcHBlbmRDaGlsZChzdXNoaVNWRyk7XG5cbiAgICByZXR1cm4gc3VzaGlDb250YWluZXI7XG4gIH1cblxuICBnZW5lcmF0ZVNWRygpIHtcbiAgICBjb25zdCB4bWxucyA9IFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIjtcbiAgICBjb25zdCBzdXNoaVNWRyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUyh4bWxucywgXCJzdmdcIik7XG4gICAgc3VzaGlTVkcuc2V0QXR0cmlidXRlTlMobnVsbCwgXCJ2aWV3Qm94XCIsIFwiOTMuMSAxODQuNSAzMDEuOTMxIDEyNi44XCIpO1xuXG4gICAgY29uc3Qgc3VzaGlHID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKHhtbG5zLCBcImdcIik7XG4gICAgY29uc3QgcGF0aDAgPSB0aGlzLmdlbmVyYXRlUGF0aChcbiAgICAgIFwiI0QzRDVENlwiLFxuICAgICAgXCJNMzU4LjgsMjQzLjNjLTIuMywwLTYuMSwwLjEtOSwwLjNjLTctNy42LTE5LTE2LjktMzUuNS0yNS4yYy0yMC41LTEwLjMtNTUtMjIuNi0xMDMuNC0yMi42IGMtMjkuNCwwLTU0LjYsMy45LTc0LjksMTEuN2MtMTcuOCw2LjgtMzAuOSwxNi4yLTM3LjcsMjcuMmMtNS43LDkuMS02LjYsMTguNi0yLjYsMjYuOGMwLjQsMC45LDEuMywyLjIsMi45LDMuOCBjLTMuNSw1LjMtNS40LDEwLjUtNS40LDE1LjVjMCwxOC4yLDIzLjEsMjMuOCw0MC40LDI2LjVjMjEuNiwzLjMsNTAuOCw0LDg4LjEsNGMzNy4zLDAsNjYuNS0wLjcsODguMS00IGMxNS42LTIuNCwzNS45LTcuMiwzOS44LTIxLjVjNS43LDYsMTcuNywxNy4zLDI5LDE5LjZjMSwwLjIsMiwwLjMsMi44LDAuM2M0LDAsNi0yLjIsNi44LTMuNWMyLjgtNC43LTAuMy0xMC44LTMuNi0xNy4yIGMtMC4zLTAuNi0wLjYtMS4yLTEtMS45YzMuNC0zLDQuOC04LjcsNS4zLTEzYzMuNC0yLjUsNy4xLTcuNSw1LjktMTUuM0MzOTQsMjQ5LjksMzg5LjUsMjQzLjMsMzU4LjgsMjQzLjN6XCJcbiAgICApO1xuICAgIHN1c2hpRy5hcHBlbmRDaGlsZChwYXRoMCk7XG4gICAgY29uc3Qgc3VzaGlHMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUyh4bWxucywgXCJnXCIpO1xuXG4gICAgLy9wYXRoIDFcbiAgICBjb25zdCBwYXRoMSA9IHRoaXMuZ2VuZXJhdGVQYXRoKFxuICAgICAgXCIjRkZGRkZGXCIsXG4gICAgICBcIk0yMjEuNywyOTBjNDEuNiwwLDEwOS4zLDAsMTE3LjctMTYuOWMtMC40LTAuMS0wLjgtMC4yLTEuMi0wLjJjLTE3LjQtNC4yLTEyMy45LTUuNC0xNzcuOC01LjQgYy0yOC4zLDAtNDQuNC0zLjktNTMuNC04LjFjLTIuNCwzLjctMy43LDcuMS0zLjcsMTAuMUMxMDMuMiwyOTAsMTc3LjQsMjkwLDIyMS43LDI5MHpcIlxuICAgICk7XG4gICAgLy9wYXRoIDJcbiAgICBjb25zdCBwYXRoMiA9IHRoaXMuZ2VuZXJhdGVQYXRoKFxuICAgICAgXCIjOEE4QzhFXCIsXG4gICAgICBcIk0zNDQuOSwyNzMuN0MzNDQuOSwyNzMuNywzNDQuOSwyNzMuNywzNDQuOSwyNzMuN2MtMS43LDAtMy42LTAuMi01LjUtMC42IEMzMzEuMSwyOTAsMjYzLjMsMjkwLDIyMS43LDI5MGMtNDQuMywwLTExOC41LDAtMTE4LjUtMjAuNWMwLTMsMS4zLTYuNCwzLjctMTAuMWMtNC0xLjgtNi42LTMuOC04LjQtNS40IGMtMy41LDUuMy01LjQsMTAuNS01LjQsMTUuNWMwLDE4LjIsMjMuMSwyMy44LDQwLjQsMjYuNWMyMS42LDMuMyw1MC44LDQsODguMSw0YzM3LjMsMCw2Ni41LTAuNyw4OC4xLTQgYzE1LjYtMi40LDM1LjktNy4yLDM5LjgtMjEuNWMtMC40LTAuNC0wLjctMC44LTEtMS4xQzM0Ny40LDI3My42LDM0Ni4yLDI3My43LDM0NC45LDI3My43elwiXG4gICAgKTtcbiAgICAvLyBwYXRoIDMgKG91dGxpbmUpXG4gICAgY29uc3QgcGF0aDMgPSB0aGlzLmdlbmVyYXRlUGF0aChcbiAgICAgIC8vIFwiI0Q5NDMyRFwiLFxuICAgICAgdGhpcy5vdXRsaW5lQ29sb3IsXG4gICAgICBcIk0zNTguOCwyMzJjLTIuMywwLTYuMSwwLjEtOSwwLjNjLTctNy42LTE5LTE2LjktMzUuNS0yNS4yYy0yMC41LTEwLjMtNTUtMjIuNi0xMDMuNC0yMi42IGMtMjkuNCwwLTU0LjYsMy45LTc0LjksMTEuN2MtMTcuOCw2LjgtMzAuOSwxNi4yLTM3LjcsMjcuMmMtNS43LDkuMS02LjYsMTguNi0yLjYsMjYuOGMwLjQsMC45LDEuMywyLjIsMi45LDMuOCBjMS44LDEuNyw0LjQsMy42LDguNCw1LjRjOS4xLDQuMiwyNS4xLDguMSw1My40LDguMWM1My45LDAsMTYwLjQsMS4xLDE3Ny44LDUuNGMwLjQsMC4xLDAuOCwwLjIsMS4yLDAuMiBjMiwwLjQsMy44LDAuNiw1LjUsMC42YzAsMCwwLDAsMCwwYzEuMywwLDIuNS0wLjEsMy42LTAuM2MwLjMsMC4zLDAuNywwLjcsMSwxLjFjNS43LDYsMTcuNywxNy4zLDI5LDE5LjZjMSwwLjIsMiwwLjMsMi44LDAuMyBjNCwwLDYtMi4yLDYuOC0zLjVjMi44LTQuNy0wLjMtMTAuOC0zLjYtMTcuMmMtMC4zLTAuNi0wLjYtMS4yLTEtMS45YzMuNC0zLDQuOC04LjcsNS4zLTEzYzMuNC0yLjUsNy4xLTcuNSw1LjktMTUuMyBDMzk0LDIzOC42LDM4OS41LDIzMiwzNTguOCwyMzJ6IE0xMDQuNywyNDUuOGMtMi41LTUuMS0xLjgtMTEsMi4xLTE3LjJjNi44LTEwLjksMjMuNS0yMi4zLDUxLjYtMjguOCBjLTEuOSw3LjEtMy45LDE4LjItMi45LDMyLjJsMTAtMC43Yy0xLjItMTYuNywyLjQtMjksNC4xLTMzLjhjNy43LTEuMywxNi0yLjIsMjUuMi0yLjdjLTIuMSw2LjktNC43LDE5LTMuNiwzNC43bDEwLTAuNyBjLTEuMi0xNy41LDIuNy0zMC4xLDQuMy0zNC40YzEuOCwwLDMuNy0wLjEsNS41LTAuMWM3LjEsMCwxMy44LDAuMywyMC40LDAuOGMtMi4xLDYuOS00LjYsMTguOS0zLjUsMzQuM2wxMC0wLjcgYy0xLjEtMTUuNSwxLjktMjcuMiwzLjctMzIuNmM4LjYsMSwxNi44LDIuNSwyNC4zLDQuMmMtMi4xLDYuOC00LjksMTkuMS0zLjgsMzUuMmwxMC0wLjdjLTEtMTUsMS43LTI2LjQsMy41LTMyLjEgYzcsMiwxMy41LDQuMiwxOS41LDYuNWMtMi4xLDYuOC00LjksMTkuMS0zLjgsMzUuMmwxMC0wLjdjLTAuOS0xMy44LDEuMy0yNC41LDMuMS0zMC41YzI1LjcsMTEuOCw0MCwyNS44LDQyLjUsMzEuNSBjMy4xLDcsNCwxNC4zLDIuMSwxNy4yYy0wLjMsMC40LTEsMS42LTQsMS42YzAsMCwwLDAsMCwwYy0xLjIsMC0yLjctMC4yLTQuMy0wLjZjLTIyLjktNS42LTE3My44LTUuNi0xODAuMi01LjYgQzExMiwyNTcuNSwxMDQuNywyNDUuOSwxMDQuNywyNDUuOHogTTI3Mi41LDE5Ni45TDI3Mi41LDE5Ni45TDI3Mi41LDE5Ni45TDI3Mi41LDE5Ni45elwiXG4gICAgKTtcbiAgICAvLyBwYXRoIDQgKGZpbGwpXG4gICAgY29uc3QgcGF0aDQgPSB0aGlzLmdlbmVyYXRlUGF0aChcbiAgICAgIC8vIFwiI0VGNEEzMlwiLFxuICAgICAgdGhpcy5maWxsQ29sb3IsXG4gICAgICBcIk0zNDAuNiwyNjMuMWMxLjYsMC40LDMuMSwwLjYsNC4zLDAuNmMwLDAsMCwwLDAsMGMzLDAsMy43LTEuMSw0LTEuNmMxLjktMi45LDEtMTAuMS0yLjEtMTcuMiBjLTIuNS01LjctMTYuOC0xOS43LTQyLjUtMzEuNWMtMS44LDYtNCwxNi44LTMuMSwzMC41bC0xMCwwLjdjLTEuMS0xNi4xLDEuNi0yOC40LDMuOC0zNS4yYy02LTIuNC0xMi41LTQuNi0xOS41LTYuNSBjLTEuOCw1LjYtNC42LDE3LTMuNSwzMi4xbC0xMCwwLjdjLTEuMS0xNi4xLDEuNy0yOC41LDMuOC0zNS4yYy03LjYtMS43LTE1LjctMy4yLTI0LjMtNC4yYy0xLjgsNS40LTQuOCwxNy4xLTMuNywzMi42IGwtMTAsMC43Yy0xLjEtMTUuNCwxLjQtMjcuNCwzLjUtMzQuM2MtNi41LTAuNS0xMy4zLTAuOC0yMC40LTAuOGMtMS45LDAtMy43LDAtNS41LDAuMWMtMS42LDQuMy01LjYsMTYuOS00LjMsMzQuNGwtMTAsMC43IGMtMS4xLTE1LjcsMS41LTI3LjgsMy42LTM0LjdjLTkuMSwwLjUtMTcuNSwxLjQtMjUuMiwyLjdjLTEuNyw0LjgtNS4zLDE3LTQuMSwzMy44bC0xMCwwLjdjLTEtMTQsMS0yNS4xLDIuOS0zMi4yIGMtMjguMSw2LjUtNDQuOCwxNy45LTUxLjYsMjguOGMtMy44LDYuMS00LjYsMTIuMS0yLjEsMTcuMmMwLDAuMSw3LjMsMTEuNyw1NS44LDExLjdDMTY2LjgsMjU3LjUsMzE3LjcsMjU3LjYsMzQwLjYsMjYzLjF6XCJcbiAgICApO1xuICAgIC8vcG9seWdvblxuICAgIGNvbnN0IHBvbHlnb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50TlMoeG1sbnMsIFwicG9seWdvblwiKTtcbiAgICBwb2x5Z29uLnNldEF0dHJpYnV0ZU5TKG51bGwsIFwiZmlsbFwiLCBcIiNFRjRBMzJcIik7XG4gICAgcG9seWdvbi5zZXRBdHRyaWJ1dGVOUyhcbiAgICAgIG51bGwsXG4gICAgICBcInBvaW50c1wiLFxuICAgICAgXCIyNzIuNSwxOTYuOSAyNzIuNSwxOTYuOSAyNzIuNSwxOTYuOVwiXG4gICAgKTtcbiAgICAvLyBhcHBlbmQgcGF0aDEtNCBhbmQgcG9seWdvblxuICAgIHN1c2hpRzIuYXBwZW5kKHBhdGgxLCBwYXRoMiwgcGF0aDMsIHBhdGg0LCBwb2x5Z29uKTtcbiAgICBzdXNoaUcuYXBwZW5kQ2hpbGQoc3VzaGlHMik7XG4gICAgc3VzaGlTVkcuYXBwZW5kQ2hpbGQoc3VzaGlHKTtcbiAgICByZXR1cm4gc3VzaGlTVkc7XG4gIH1cblxuICBnZW5lcmF0ZVBhdGgoZmlsbENvbG9yLCBkKSB7XG4gICAgY29uc3QgcGF0aCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUyhcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIsIFwicGF0aFwiKTtcbiAgICBwYXRoLnNldEF0dHJpYnV0ZU5TKG51bGwsIFwiZmlsbFwiLCBmaWxsQ29sb3IpO1xuICAgIHBhdGguc2V0QXR0cmlidXRlTlMobnVsbCwgXCJkXCIsIGQpO1xuICAgIHJldHVybiBwYXRoO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFN1c2hpO1xuIiwiY2xhc3MgVGltZXIge1xuICBjb25zdHJ1Y3RvcihsZXZlbCkge1xuICAgIHRoaXMubGV2ZWwgPSBsZXZlbDtcbiAgfVxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeG1sbnMgPSBcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCI7XG5cbiAgICBjb25zdCBsZXZlbE51bWJlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgbGV2ZWxOdW1iZXIuY2xhc3NOYW1lID0gXCJsZXZlbC1udW1iZXJcIjtcbiAgICBsZXZlbE51bWJlci50ZXh0Q29udGVudCA9IHRoaXMubGV2ZWw7XG5cbiAgICBjb25zdCBjbG9ja1NWRyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUyh4bWxucywgXCJzdmdcIik7XG4gICAgY2xvY2tTVkcuc2V0QXR0cmlidXRlTlMobnVsbCwgXCJjbGFzc1wiLCBcImNsb2NrXCIpO1xuXG4gICAgY29uc3QgY2lyY2xlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKHhtbG5zLCBcImNpcmNsZVwiKTtcbiAgICBjaXJjbGUuc2V0QXR0cmlidXRlTlMobnVsbCwgXCJyXCIsIFwiMThcIik7XG4gICAgY2lyY2xlLnNldEF0dHJpYnV0ZU5TKG51bGwsIFwiY3hcIiwgXCIyMFwiKTtcbiAgICBjaXJjbGUuc2V0QXR0cmlidXRlTlMobnVsbCwgXCJjeVwiLCBcIjIwXCIpO1xuXG4gICAgY2xvY2tTVkcuYXBwZW5kQ2hpbGQoY2lyY2xlKTtcbiAgICBjb3VudGRvd24uYXBwZW5kQ2hpbGQobGV2ZWxOdW1iZXIpO1xuICAgIGNvdW50ZG93bi5hcHBlbmRDaGlsZChjbG9ja1NWRyk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgVGltZXI7XG4iXSwic291cmNlUm9vdCI6IiJ9