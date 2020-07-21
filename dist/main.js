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

    const colorChange = 30 - Math.floor(this.level / 4) * 2;

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

    const plate = document.createElement("div");
    plate.className = "plate";

    plate.appendChild(grid);
    this.grid.forEach((row) => {
      const rowEle = document.createElement("div");
      rowEle.className = "row";
      row.forEach((sushi) => {
        const sushiEle = sushi.render();
        rowEle.appendChild(sushiEle);
      });
      grid.appendChild(rowEle);
    });

    document.getElementById("board").appendChild(plate);
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
    document.addEventListener("game over", () => this.loseGame());
    this.level = 0;
    this.highScore = 0;
    const button = document.getElementById("play-button");
    button.onclick = () => {
      this.restartGame();
    };
  }

  loadGame(showTimer = true) {
    if (this.gameOver) return;
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
    const highScore = document.getElementById("high-score");
    if (this.level > this.highScore) this.highScore = this.level;
    highScore.innerHTML = "High Score: " + this.highScore;
    this.board = new _board__WEBPACK_IMPORTED_MODULE_0__["default"](this.level);
    this.board.render();

    if (showTimer) {
      this.timer = new _timer__WEBPACK_IMPORTED_MODULE_1__["default"](this.level);
      this.timer.render();
    }
  }

  loseGame() {
    this.gameOver = true;
    if (window.confirm("Better luck next time! Try Again?")) {
      this.restartGame();
    }
  }

  restartGame() {
    this.gameOver = false;
    this.level = 0;
    this.loadGame();
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
  game.loadGame(false);
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
    if (this.special) {
      document.dispatchEvent(new Event("success"));
    } else {
      document.dispatchEvent(new Event("bad guess"));
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
    this.FULL_DASH_ARRAY = 283;
    this.WARNING_THRESHOLD = 4;
    this.ALERT_THRESHOLD = 2;

    this.COLOR_CODES = {
      info: {
        color: "green",
      },
      warning: {
        color: "orange",
        threshold: this.WARNING_THRESHOLD,
      },
      alert: {
        color: "red",
        threshold: this.ALERT_THRESHOLD,
      },
    };

    this.TIME_LIMIT = 8;
    document.addEventListener("success", () => this.clearTime());
    document.addEventListener("game over", () => this.clearTime());
    document.addEventListener("bad guess", () => this.reduceTime());
    this.penaltyTime = 0;
  }

  reduceTime() {
    this.penaltyTime += 1;
  }

  render() {
    let timerInterval = null;
    let remainingPathColor = this.COLOR_CODES.info.color;
    document.getElementById("countdown").innerHTML = `
    <div class="base-timer">
      <svg class="base-timer__svg" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
        <g class="base-timer__circle">
          <circle class="base-timer__path-elapsed" cx="50" cy="50" r="45"></circle>
          <path
            id="base-timer-path-remaining"
            stroke-dasharray="283"
            class="base-timer__path-remaining ${remainingPathColor}"
            d="
              M 50, 50
              m -45, 0
              a 45,45 0 1,0 90,0
              a 45,45 0 1,0 -90,0
            "
          ></path>
        </g>
      </svg>
      <span id="base-timer-label" class="base-timer__label">${this.level}</span>
    </div>
    `;
    this.startTimer();
  }

  clearTime() {
    clearInterval(this.timerInterval);
  }

  startTimer() {
    let timePassed = 0;
    let timeLeft = this.TIME_LIMIT;
    this.timerInterval = setInterval(() => {
      timePassed = timePassed += 1;
      timeLeft = Math.max(this.TIME_LIMIT - timePassed - this.penaltyTime, 0);

      this.setCircleDasharray(timeLeft);
      this.setRemainingPathColor(timeLeft);

      if (timeLeft === 0) {
        this.clearTime();
        setTimeout(() => document.dispatchEvent(new Event("game over")), 50);
      }
    }, 1000);
  }

  setRemainingPathColor(timeLeft) {
    const { alert, warning, info } = this.COLOR_CODES;
    if (timeLeft <= alert.threshold) {
      document
        .getElementById("base-timer-path-remaining")
        .classList.remove(warning.color);
      document
        .getElementById("base-timer-path-remaining")
        .classList.add(alert.color);
    } else if (timeLeft <= warning.threshold) {
      document
        .getElementById("base-timer-path-remaining")
        .classList.remove(info.color);
      document
        .getElementById("base-timer-path-remaining")
        .classList.add(warning.color);
    }
  }

  calculateTimeFraction(timeLeft) {
    const rawTimeFraction = timeLeft / this.TIME_LIMIT; // 4 / 8
    return rawTimeFraction - (1 / this.TIME_LIMIT) * (1 - rawTimeFraction); // 4/8 - 1 / 8 * 50
  }

  setCircleDasharray(timeLeft) {
    const circleDasharray = `${(
      this.calculateTimeFraction(timeLeft) * this.FULL_DASH_ARRAY
    ).toFixed(0)} 283`;
    document
      .getElementById("base-timer-path-remaining")
      .setAttribute("stroke-dasharray", circleDasharray);
  }
}

/* harmony default export */ __webpack_exports__["default"] = (Timer);


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2JvYXJkLmpzIiwid2VicGFjazovLy8uL3NyYy9nYW1lLmpzIiwid2VicGFjazovLy8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3VzaGkuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3RpbWVyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNsRkE7QUFBQTtBQUE0Qjs7QUFFNUI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FB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Q0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSx1REFBdUQ7QUFDdkQsMkVBQTJFO0FBQzNFOztBQUVBO0FBQ0EsK0JBQStCO0FBQy9CO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRWUsb0VBQUssRUFBQyIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvaW5kZXguanNcIik7XG4iLCJpbXBvcnQgU3VzaGkgZnJvbSBcIi4vc3VzaGlcIjtcblxuY2xhc3MgQm9hcmQge1xuICBjb25zdHJ1Y3RvcihsZXZlbCkge1xuICAgIHRoaXMubGV2ZWwgPSBsZXZlbDtcblxuICAgIC8vcmVkLCBvcmFuZ2UsIGRhcmsgZ3JlZW4sIGZ1c2NpYSwgZHVzdHkgYmx1ZSwgeWVsbG93LCBwdXJwbGUsIGxpZ2h0IGdyZWVuLCB0YW4sIGdyZXlcbiAgICB0aGlzLmNvbG9ycyA9IFtcbiAgICAgIFtcbiAgICAgICAgWzI1NSwgMCwgMF0sXG4gICAgICAgIFsyNTUsIDUxLCA1MSwgMC45XSxcbiAgICAgIF0sXG4gICAgICBbXG4gICAgICAgIFsyNTUsIDEyOCwgMF0sXG4gICAgICAgIFsyNTUsIDE1MywgNTEsIDAuOV0sXG4gICAgICBdLFxuICAgICAgW1xuICAgICAgICBbMCwgMTAyLCAwXSxcbiAgICAgICAgWzAsIDE1MywgMCwgMC45XSxcbiAgICAgIF0sXG4gICAgICBbXG4gICAgICAgIFsyNTUsIDAsIDI1NV0sXG4gICAgICAgIFsyNTUsIDUxLCAyNTUsIDAuOV0sXG4gICAgICBdLFxuICAgICAgW1xuICAgICAgICBbNTEsIDE1MywgMjU1XSxcbiAgICAgICAgWzEwMiwgMTc4LCAyNTUsIDAuOV0sXG4gICAgICBdLFxuICAgICAgW1xuICAgICAgICBbMjU1LCAyNTUsIDEwMl0sXG4gICAgICAgIFsyNTUsIDI1NSwgMTUzLCAwLjldLFxuICAgICAgXSxcbiAgICAgIFtcbiAgICAgICAgWzc2LCAwLCAxNTNdLFxuICAgICAgICBbMTAyLCAwLCAyMDQsIDAuOV0sXG4gICAgICBdLFxuICAgICAgW1xuICAgICAgICBbNTEsIDI1NSwgNTFdLFxuICAgICAgICBbMTAyLCAyNTUsIDEwMiwgMC45XSxcbiAgICAgIF0sXG4gICAgICBbXG4gICAgICAgIFsyNTUsIDIwNCwgMTUzXSxcbiAgICAgICAgWzI1NSwgMjI5LCAyMDQsIDAuOV0sXG4gICAgICBdLFxuICAgICAgW1xuICAgICAgICBbMTkyLCAxOTIsIDE5Ml0sXG4gICAgICAgIFsyMjQsIDIyNCwgMjI0LCAwLjldLFxuICAgICAgXSxcbiAgICBdO1xuICAgIHRoaXMucmFuZG9tQ29sb3JJZHggPSB0aGlzLmdldFJhbmRvbUludCh0aGlzLmNvbG9ycy5sZW5ndGgpO1xuICAgIHRoaXMub3V0bGluZUNvbG9yID0gdGhpcy5nZXRSR0JDb2xvcih0aGlzLmNvbG9yc1t0aGlzLnJhbmRvbUNvbG9ySWR4XVswXSk7XG4gICAgdGhpcy5maWxsQ29sb3IgPSB0aGlzLmdldFJHQkNvbG9yKHRoaXMuY29sb3JzW3RoaXMucmFuZG9tQ29sb3JJZHhdWzFdKTtcbiAgICB0aGlzLmdyaWQgPSB0aGlzLmdlbmVyYXRlR3JpZChsZXZlbCk7XG4gICAgdGhpcy5hZGRTcGVjaWFsU3VzaGkoKTtcbiAgfVxuXG4gIGdldFJHQkNvbG9yKGNvbG9yQXJyYXkpIHtcbiAgICByZXR1cm4gXCJyZ2IoXCIgKyBjb2xvckFycmF5LmpvaW4oXCIsXCIpICsgXCIpXCI7XG4gIH1cblxuICBnZW5lcmF0ZUdyaWQobGV2ZWwpIHtcbiAgICBjb25zdCBncmlkTGVuZ3RoID0gTWF0aC5jZWlsKGxldmVsIC8gNCkgKyAxO1xuICAgIGNvbnN0IGdyaWQgPSBbXTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGdyaWRMZW5ndGg7IGkrKykge1xuICAgICAgY29uc3Qgcm93ID0gW107XG4gICAgICBmb3IgKGxldCBqID0gMDsgaiA8IGdyaWRMZW5ndGg7IGorKykge1xuICAgICAgICByb3cucHVzaChuZXcgU3VzaGkodGhpcy5vdXRsaW5lQ29sb3IsIHRoaXMuZmlsbENvbG9yKSk7XG4gICAgICB9XG4gICAgICBncmlkLnB1c2gocm93KTtcbiAgICB9XG4gICAgcmV0dXJuIGdyaWQ7XG4gIH1cblxuICBnZXRSYW5kb21JbnQobWF4KSB7XG4gICAgcmV0dXJuIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIE1hdGguZmxvb3IobWF4KSk7XG4gIH1cblxuICBnZXRIaWdoZXN0TnVtYmVySW5kZXgobnVtQXJyYXkpIHtcbiAgICBsZXQgaGlnaGVzdFZhbHVlID0gbnVtQXJyYXlbMF07XG4gICAgbGV0IGhpZ2hlc3RJbmRleCA9IDA7XG4gICAgbnVtQXJyYXkuZm9yRWFjaCgodmFsdWUsIGlkeCkgPT4ge1xuICAgICAgaWYgKHZhbHVlID4gaGlnaGVzdFZhbHVlKSB7XG4gICAgICAgIGhpZ2hlc3RWYWx1ZSA9IHZhbHVlO1xuICAgICAgICBoaWdoZXN0SW5kZXggPSBpZHg7XG4gICAgICB9XG4gICAgfSk7XG4gICAgcmV0dXJuIGhpZ2hlc3RJbmRleDtcbiAgfVxuXG4gIGFkZFNwZWNpYWxTdXNoaSgpIHtcbiAgICBjb25zdCByYW5kUm93ID0gdGhpcy5nZXRSYW5kb21JbnQodGhpcy5ncmlkLmxlbmd0aCk7XG4gICAgY29uc3QgcmFuZENvbCA9IHRoaXMuZ2V0UmFuZG9tSW50KHRoaXMuZ3JpZC5sZW5ndGgpO1xuXG4gICAgY29uc3Qgb3V0bGluZSA9IHRoaXMuY29sb3JzW3RoaXMucmFuZG9tQ29sb3JJZHhdWzBdO1xuICAgIGNvbnN0IGZpbGwgPSB0aGlzLmNvbG9yc1t0aGlzLnJhbmRvbUNvbG9ySWR4XVsxXTtcblxuICAgIGNvbnN0IGNvbG9yQ2hhbmdlID0gMzAgLSBNYXRoLmZsb29yKHRoaXMubGV2ZWwgLyA0KSAqIDI7XG5cbiAgICBjb25zdCBpbmRleFRvQ2hhbmdlID0gdGhpcy5nZXRIaWdoZXN0TnVtYmVySW5kZXgob3V0bGluZSk7XG4gICAgb3V0bGluZVtpbmRleFRvQ2hhbmdlXSA9IG91dGxpbmVbaW5kZXhUb0NoYW5nZV0gLSBjb2xvckNoYW5nZTtcbiAgICBmaWxsW2luZGV4VG9DaGFuZ2VdID0gZmlsbFtpbmRleFRvQ2hhbmdlXSAtIGNvbG9yQ2hhbmdlO1xuXG4gICAgdGhpcy5ncmlkW3JhbmRSb3ddW3JhbmRDb2xdID0gbmV3IFN1c2hpKFxuICAgICAgdGhpcy5nZXRSR0JDb2xvcihvdXRsaW5lKSxcbiAgICAgIHRoaXMuZ2V0UkdCQ29sb3IoZmlsbCksXG4gICAgICB0cnVlXG4gICAgKTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCBncmlkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBncmlkLmNsYXNzTmFtZSA9IFwiZ3JpZFwiO1xuXG4gICAgY29uc3QgcGxhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIHBsYXRlLmNsYXNzTmFtZSA9IFwicGxhdGVcIjtcblxuICAgIHBsYXRlLmFwcGVuZENoaWxkKGdyaWQpO1xuICAgIHRoaXMuZ3JpZC5mb3JFYWNoKChyb3cpID0+IHtcbiAgICAgIGNvbnN0IHJvd0VsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICByb3dFbGUuY2xhc3NOYW1lID0gXCJyb3dcIjtcbiAgICAgIHJvdy5mb3JFYWNoKChzdXNoaSkgPT4ge1xuICAgICAgICBjb25zdCBzdXNoaUVsZSA9IHN1c2hpLnJlbmRlcigpO1xuICAgICAgICByb3dFbGUuYXBwZW5kQ2hpbGQoc3VzaGlFbGUpO1xuICAgICAgfSk7XG4gICAgICBncmlkLmFwcGVuZENoaWxkKHJvd0VsZSk7XG4gICAgfSk7XG5cbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImJvYXJkXCIpLmFwcGVuZENoaWxkKHBsYXRlKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBCb2FyZDtcbiIsImltcG9ydCBCb2FyZCBmcm9tIFwiLi9ib2FyZFwiO1xuaW1wb3J0IFRpbWVyIGZyb20gXCIuL3RpbWVyXCI7XG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHYW1lIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcInN1Y2Nlc3NcIiwgKCkgPT4gdGhpcy5sb2FkR2FtZSgpKTtcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiZ2FtZSBvdmVyXCIsICgpID0+IHRoaXMubG9zZUdhbWUoKSk7XG4gICAgdGhpcy5sZXZlbCA9IDA7XG4gICAgdGhpcy5oaWdoU2NvcmUgPSAwO1xuICAgIGNvbnN0IGJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicGxheS1idXR0b25cIik7XG4gICAgYnV0dG9uLm9uY2xpY2sgPSAoKSA9PiB7XG4gICAgICB0aGlzLnJlc3RhcnRHYW1lKCk7XG4gICAgfTtcbiAgfVxuXG4gIGxvYWRHYW1lKHNob3dUaW1lciA9IHRydWUpIHtcbiAgICBpZiAodGhpcy5nYW1lT3ZlcikgcmV0dXJuO1xuICAgIGNvbnN0IGJvYXJkID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJib2FyZFwiKTtcbiAgICBpZiAoYm9hcmQuaGFzQ2hpbGROb2RlcygpKSB7XG4gICAgICBib2FyZC5yZW1vdmVDaGlsZChib2FyZC5jaGlsZE5vZGVzWzBdKTtcbiAgICB9XG4gICAgY29uc3QgY291bnRkb3duID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjb3VudGRvd25cIik7XG4gICAgaWYgKGNvdW50ZG93bi5oYXNDaGlsZE5vZGVzKCkpIHtcbiAgICAgIEFycmF5LmZyb20oY291bnRkb3duLmNoaWxkTm9kZXMpLmZvckVhY2goKG5vZGUpID0+IHtcbiAgICAgICAgY291bnRkb3duLnJlbW92ZUNoaWxkKG5vZGUpO1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgdGhpcy5sZXZlbCArPSAxO1xuICAgIGNvbnN0IGhpZ2hTY29yZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaGlnaC1zY29yZVwiKTtcbiAgICBpZiAodGhpcy5sZXZlbCA+IHRoaXMuaGlnaFNjb3JlKSB0aGlzLmhpZ2hTY29yZSA9IHRoaXMubGV2ZWw7XG4gICAgaGlnaFNjb3JlLmlubmVySFRNTCA9IFwiSGlnaCBTY29yZTogXCIgKyB0aGlzLmhpZ2hTY29yZTtcbiAgICB0aGlzLmJvYXJkID0gbmV3IEJvYXJkKHRoaXMubGV2ZWwpO1xuICAgIHRoaXMuYm9hcmQucmVuZGVyKCk7XG5cbiAgICBpZiAoc2hvd1RpbWVyKSB7XG4gICAgICB0aGlzLnRpbWVyID0gbmV3IFRpbWVyKHRoaXMubGV2ZWwpO1xuICAgICAgdGhpcy50aW1lci5yZW5kZXIoKTtcbiAgICB9XG4gIH1cblxuICBsb3NlR2FtZSgpIHtcbiAgICB0aGlzLmdhbWVPdmVyID0gdHJ1ZTtcbiAgICBpZiAod2luZG93LmNvbmZpcm0oXCJCZXR0ZXIgbHVjayBuZXh0IHRpbWUhIFRyeSBBZ2Fpbj9cIikpIHtcbiAgICAgIHRoaXMucmVzdGFydEdhbWUoKTtcbiAgICB9XG4gIH1cblxuICByZXN0YXJ0R2FtZSgpIHtcbiAgICB0aGlzLmdhbWVPdmVyID0gZmFsc2U7XG4gICAgdGhpcy5sZXZlbCA9IDA7XG4gICAgdGhpcy5sb2FkR2FtZSgpO1xuICB9XG59XG4iLCJpbXBvcnQgR2FtZSBmcm9tIFwiLi9nYW1lXCI7XG5cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsICgpID0+IHtcbiAgY29uc3QgZ2FtZSA9IG5ldyBHYW1lKCk7XG4gIGdhbWUubG9hZEdhbWUoZmFsc2UpO1xufSk7XG4iLCJjbGFzcyBTdXNoaSB7XG4gIGNvbnN0cnVjdG9yKG91dGxpbmVDb2xvciwgZmlsbENvbG9yLCBzcGVjaWFsID0gZmFsc2UpIHtcbiAgICB0aGlzLm91dGxpbmVDb2xvciA9IG91dGxpbmVDb2xvcjtcbiAgICB0aGlzLmZpbGxDb2xvciA9IGZpbGxDb2xvcjtcbiAgICB0aGlzLnNwZWNpYWwgPSBzcGVjaWFsO1xuICAgIHRoaXMub25DbGljayA9IHRoaXMub25DbGljay5iaW5kKHRoaXMpO1xuICB9XG4gIG9uQ2xpY2soKSB7XG4gICAgaWYgKHRoaXMuc3BlY2lhbCkge1xuICAgICAgZG9jdW1lbnQuZGlzcGF0Y2hFdmVudChuZXcgRXZlbnQoXCJzdWNjZXNzXCIpKTtcbiAgICB9IGVsc2Uge1xuICAgICAgZG9jdW1lbnQuZGlzcGF0Y2hFdmVudChuZXcgRXZlbnQoXCJiYWQgZ3Vlc3NcIikpO1xuICAgIH1cbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCBzdXNoaUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgc3VzaGlDb250YWluZXIuY2xhc3NOYW1lID0gXCJzdXNoaVwiO1xuICAgIHN1c2hpQ29udGFpbmVyLm9uY2xpY2sgPSB0aGlzLm9uQ2xpY2s7XG4gICAgY29uc3Qgc3VzaGlTVkcgPSB0aGlzLmdlbmVyYXRlU1ZHKCk7XG4gICAgc3VzaGlDb250YWluZXIuYXBwZW5kQ2hpbGQoc3VzaGlTVkcpO1xuXG4gICAgcmV0dXJuIHN1c2hpQ29udGFpbmVyO1xuICB9XG5cbiAgZ2VuZXJhdGVTVkcoKSB7XG4gICAgY29uc3QgeG1sbnMgPSBcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCI7XG4gICAgY29uc3Qgc3VzaGlTVkcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50TlMoeG1sbnMsIFwic3ZnXCIpO1xuICAgIHN1c2hpU1ZHLnNldEF0dHJpYnV0ZU5TKG51bGwsIFwidmlld0JveFwiLCBcIjkzLjEgMTg0LjUgMzAxLjkzMSAxMjYuOFwiKTtcblxuICAgIGNvbnN0IHN1c2hpRyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUyh4bWxucywgXCJnXCIpO1xuICAgIGNvbnN0IHBhdGgwID0gdGhpcy5nZW5lcmF0ZVBhdGgoXG4gICAgICBcIiNEM0Q1RDZcIixcbiAgICAgIFwiTTM1OC44LDI0My4zYy0yLjMsMC02LjEsMC4xLTksMC4zYy03LTcuNi0xOS0xNi45LTM1LjUtMjUuMmMtMjAuNS0xMC4zLTU1LTIyLjYtMTAzLjQtMjIuNiBjLTI5LjQsMC01NC42LDMuOS03NC45LDExLjdjLTE3LjgsNi44LTMwLjksMTYuMi0zNy43LDI3LjJjLTUuNyw5LjEtNi42LDE4LjYtMi42LDI2LjhjMC40LDAuOSwxLjMsMi4yLDIuOSwzLjggYy0zLjUsNS4zLTUuNCwxMC41LTUuNCwxNS41YzAsMTguMiwyMy4xLDIzLjgsNDAuNCwyNi41YzIxLjYsMy4zLDUwLjgsNCw4OC4xLDRjMzcuMywwLDY2LjUtMC43LDg4LjEtNCBjMTUuNi0yLjQsMzUuOS03LjIsMzkuOC0yMS41YzUuNyw2LDE3LjcsMTcuMywyOSwxOS42YzEsMC4yLDIsMC4zLDIuOCwwLjNjNCwwLDYtMi4yLDYuOC0zLjVjMi44LTQuNy0wLjMtMTAuOC0zLjYtMTcuMiBjLTAuMy0wLjYtMC42LTEuMi0xLTEuOWMzLjQtMyw0LjgtOC43LDUuMy0xM2MzLjQtMi41LDcuMS03LjUsNS45LTE1LjNDMzk0LDI0OS45LDM4OS41LDI0My4zLDM1OC44LDI0My4zelwiXG4gICAgKTtcbiAgICBzdXNoaUcuYXBwZW5kQ2hpbGQocGF0aDApO1xuICAgIGNvbnN0IHN1c2hpRzIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50TlMoeG1sbnMsIFwiZ1wiKTtcblxuICAgIC8vcGF0aCAxXG4gICAgY29uc3QgcGF0aDEgPSB0aGlzLmdlbmVyYXRlUGF0aChcbiAgICAgIFwiI0ZGRkZGRlwiLFxuICAgICAgXCJNMjIxLjcsMjkwYzQxLjYsMCwxMDkuMywwLDExNy43LTE2LjljLTAuNC0wLjEtMC44LTAuMi0xLjItMC4yYy0xNy40LTQuMi0xMjMuOS01LjQtMTc3LjgtNS40IGMtMjguMywwLTQ0LjQtMy45LTUzLjQtOC4xYy0yLjQsMy43LTMuNyw3LjEtMy43LDEwLjFDMTAzLjIsMjkwLDE3Ny40LDI5MCwyMjEuNywyOTB6XCJcbiAgICApO1xuICAgIC8vcGF0aCAyXG4gICAgY29uc3QgcGF0aDIgPSB0aGlzLmdlbmVyYXRlUGF0aChcbiAgICAgIFwiIzhBOEM4RVwiLFxuICAgICAgXCJNMzQ0LjksMjczLjdDMzQ0LjksMjczLjcsMzQ0LjksMjczLjcsMzQ0LjksMjczLjdjLTEuNywwLTMuNi0wLjItNS41LTAuNiBDMzMxLjEsMjkwLDI2My4zLDI5MCwyMjEuNywyOTBjLTQ0LjMsMC0xMTguNSwwLTExOC41LTIwLjVjMC0zLDEuMy02LjQsMy43LTEwLjFjLTQtMS44LTYuNi0zLjgtOC40LTUuNCBjLTMuNSw1LjMtNS40LDEwLjUtNS40LDE1LjVjMCwxOC4yLDIzLjEsMjMuOCw0MC40LDI2LjVjMjEuNiwzLjMsNTAuOCw0LDg4LjEsNGMzNy4zLDAsNjYuNS0wLjcsODguMS00IGMxNS42LTIuNCwzNS45LTcuMiwzOS44LTIxLjVjLTAuNC0wLjQtMC43LTAuOC0xLTEuMUMzNDcuNCwyNzMuNiwzNDYuMiwyNzMuNywzNDQuOSwyNzMuN3pcIlxuICAgICk7XG4gICAgLy8gcGF0aCAzIChvdXRsaW5lKVxuICAgIGNvbnN0IHBhdGgzID0gdGhpcy5nZW5lcmF0ZVBhdGgoXG4gICAgICAvLyBcIiNEOTQzMkRcIixcbiAgICAgIHRoaXMub3V0bGluZUNvbG9yLFxuICAgICAgXCJNMzU4LjgsMjMyYy0yLjMsMC02LjEsMC4xLTksMC4zYy03LTcuNi0xOS0xNi45LTM1LjUtMjUuMmMtMjAuNS0xMC4zLTU1LTIyLjYtMTAzLjQtMjIuNiBjLTI5LjQsMC01NC42LDMuOS03NC45LDExLjdjLTE3LjgsNi44LTMwLjksMTYuMi0zNy43LDI3LjJjLTUuNyw5LjEtNi42LDE4LjYtMi42LDI2LjhjMC40LDAuOSwxLjMsMi4yLDIuOSwzLjggYzEuOCwxLjcsNC40LDMuNiw4LjQsNS40YzkuMSw0LjIsMjUuMSw4LjEsNTMuNCw4LjFjNTMuOSwwLDE2MC40LDEuMSwxNzcuOCw1LjRjMC40LDAuMSwwLjgsMC4yLDEuMiwwLjIgYzIsMC40LDMuOCwwLjYsNS41LDAuNmMwLDAsMCwwLDAsMGMxLjMsMCwyLjUtMC4xLDMuNi0wLjNjMC4zLDAuMywwLjcsMC43LDEsMS4xYzUuNyw2LDE3LjcsMTcuMywyOSwxOS42YzEsMC4yLDIsMC4zLDIuOCwwLjMgYzQsMCw2LTIuMiw2LjgtMy41YzIuOC00LjctMC4zLTEwLjgtMy42LTE3LjJjLTAuMy0wLjYtMC42LTEuMi0xLTEuOWMzLjQtMyw0LjgtOC43LDUuMy0xM2MzLjQtMi41LDcuMS03LjUsNS45LTE1LjMgQzM5NCwyMzguNiwzODkuNSwyMzIsMzU4LjgsMjMyeiBNMTA0LjcsMjQ1LjhjLTIuNS01LjEtMS44LTExLDIuMS0xNy4yYzYuOC0xMC45LDIzLjUtMjIuMyw1MS42LTI4LjggYy0xLjksNy4xLTMuOSwxOC4yLTIuOSwzMi4ybDEwLTAuN2MtMS4yLTE2LjcsMi40LTI5LDQuMS0zMy44YzcuNy0xLjMsMTYtMi4yLDI1LjItMi43Yy0yLjEsNi45LTQuNywxOS0zLjYsMzQuN2wxMC0wLjcgYy0xLjItMTcuNSwyLjctMzAuMSw0LjMtMzQuNGMxLjgsMCwzLjctMC4xLDUuNS0wLjFjNy4xLDAsMTMuOCwwLjMsMjAuNCwwLjhjLTIuMSw2LjktNC42LDE4LjktMy41LDM0LjNsMTAtMC43IGMtMS4xLTE1LjUsMS45LTI3LjIsMy43LTMyLjZjOC42LDEsMTYuOCwyLjUsMjQuMyw0LjJjLTIuMSw2LjgtNC45LDE5LjEtMy44LDM1LjJsMTAtMC43Yy0xLTE1LDEuNy0yNi40LDMuNS0zMi4xIGM3LDIsMTMuNSw0LjIsMTkuNSw2LjVjLTIuMSw2LjgtNC45LDE5LjEtMy44LDM1LjJsMTAtMC43Yy0wLjktMTMuOCwxLjMtMjQuNSwzLjEtMzAuNWMyNS43LDExLjgsNDAsMjUuOCw0Mi41LDMxLjUgYzMuMSw3LDQsMTQuMywyLjEsMTcuMmMtMC4zLDAuNC0xLDEuNi00LDEuNmMwLDAsMCwwLDAsMGMtMS4yLDAtMi43LTAuMi00LjMtMC42Yy0yMi45LTUuNi0xNzMuOC01LjYtMTgwLjItNS42IEMxMTIsMjU3LjUsMTA0LjcsMjQ1LjksMTA0LjcsMjQ1Ljh6IE0yNzIuNSwxOTYuOUwyNzIuNSwxOTYuOUwyNzIuNSwxOTYuOUwyNzIuNSwxOTYuOXpcIlxuICAgICk7XG4gICAgLy8gcGF0aCA0IChmaWxsKVxuICAgIGNvbnN0IHBhdGg0ID0gdGhpcy5nZW5lcmF0ZVBhdGgoXG4gICAgICAvLyBcIiNFRjRBMzJcIixcbiAgICAgIHRoaXMuZmlsbENvbG9yLFxuICAgICAgXCJNMzQwLjYsMjYzLjFjMS42LDAuNCwzLjEsMC42LDQuMywwLjZjMCwwLDAsMCwwLDBjMywwLDMuNy0xLjEsNC0xLjZjMS45LTIuOSwxLTEwLjEtMi4xLTE3LjIgYy0yLjUtNS43LTE2LjgtMTkuNy00Mi41LTMxLjVjLTEuOCw2LTQsMTYuOC0zLjEsMzAuNWwtMTAsMC43Yy0xLjEtMTYuMSwxLjYtMjguNCwzLjgtMzUuMmMtNi0yLjQtMTIuNS00LjYtMTkuNS02LjUgYy0xLjgsNS42LTQuNiwxNy0zLjUsMzIuMWwtMTAsMC43Yy0xLjEtMTYuMSwxLjctMjguNSwzLjgtMzUuMmMtNy42LTEuNy0xNS43LTMuMi0yNC4zLTQuMmMtMS44LDUuNC00LjgsMTcuMS0zLjcsMzIuNiBsLTEwLDAuN2MtMS4xLTE1LjQsMS40LTI3LjQsMy41LTM0LjNjLTYuNS0wLjUtMTMuMy0wLjgtMjAuNC0wLjhjLTEuOSwwLTMuNywwLTUuNSwwLjFjLTEuNiw0LjMtNS42LDE2LjktNC4zLDM0LjRsLTEwLDAuNyBjLTEuMS0xNS43LDEuNS0yNy44LDMuNi0zNC43Yy05LjEsMC41LTE3LjUsMS40LTI1LjIsMi43Yy0xLjcsNC44LTUuMywxNy00LjEsMzMuOGwtMTAsMC43Yy0xLTE0LDEtMjUuMSwyLjktMzIuMiBjLTI4LjEsNi41LTQ0LjgsMTcuOS01MS42LDI4LjhjLTMuOCw2LjEtNC42LDEyLjEtMi4xLDE3LjJjMCwwLjEsNy4zLDExLjcsNTUuOCwxMS43QzE2Ni44LDI1Ny41LDMxNy43LDI1Ny42LDM0MC42LDI2My4xelwiXG4gICAgKTtcbiAgICAvL3BvbHlnb25cbiAgICBjb25zdCBwb2x5Z29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKHhtbG5zLCBcInBvbHlnb25cIik7XG4gICAgcG9seWdvbi5zZXRBdHRyaWJ1dGVOUyhudWxsLCBcImZpbGxcIiwgXCIjRUY0QTMyXCIpO1xuICAgIHBvbHlnb24uc2V0QXR0cmlidXRlTlMoXG4gICAgICBudWxsLFxuICAgICAgXCJwb2ludHNcIixcbiAgICAgIFwiMjcyLjUsMTk2LjkgMjcyLjUsMTk2LjkgMjcyLjUsMTk2LjlcIlxuICAgICk7XG4gICAgLy8gYXBwZW5kIHBhdGgxLTQgYW5kIHBvbHlnb25cbiAgICBzdXNoaUcyLmFwcGVuZChwYXRoMSwgcGF0aDIsIHBhdGgzLCBwYXRoNCwgcG9seWdvbik7XG4gICAgc3VzaGlHLmFwcGVuZENoaWxkKHN1c2hpRzIpO1xuICAgIHN1c2hpU1ZHLmFwcGVuZENoaWxkKHN1c2hpRyk7XG4gICAgcmV0dXJuIHN1c2hpU1ZHO1xuICB9XG5cbiAgZ2VuZXJhdGVQYXRoKGZpbGxDb2xvciwgZCkge1xuICAgIGNvbnN0IHBhdGggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50TlMoXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiLCBcInBhdGhcIik7XG4gICAgcGF0aC5zZXRBdHRyaWJ1dGVOUyhudWxsLCBcImZpbGxcIiwgZmlsbENvbG9yKTtcbiAgICBwYXRoLnNldEF0dHJpYnV0ZU5TKG51bGwsIFwiZFwiLCBkKTtcbiAgICByZXR1cm4gcGF0aDtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBTdXNoaTtcbiIsImNsYXNzIFRpbWVyIHtcbiAgY29uc3RydWN0b3IobGV2ZWwpIHtcbiAgICB0aGlzLmxldmVsID0gbGV2ZWw7XG4gICAgdGhpcy5GVUxMX0RBU0hfQVJSQVkgPSAyODM7XG4gICAgdGhpcy5XQVJOSU5HX1RIUkVTSE9MRCA9IDQ7XG4gICAgdGhpcy5BTEVSVF9USFJFU0hPTEQgPSAyO1xuXG4gICAgdGhpcy5DT0xPUl9DT0RFUyA9IHtcbiAgICAgIGluZm86IHtcbiAgICAgICAgY29sb3I6IFwiZ3JlZW5cIixcbiAgICAgIH0sXG4gICAgICB3YXJuaW5nOiB7XG4gICAgICAgIGNvbG9yOiBcIm9yYW5nZVwiLFxuICAgICAgICB0aHJlc2hvbGQ6IHRoaXMuV0FSTklOR19USFJFU0hPTEQsXG4gICAgICB9LFxuICAgICAgYWxlcnQ6IHtcbiAgICAgICAgY29sb3I6IFwicmVkXCIsXG4gICAgICAgIHRocmVzaG9sZDogdGhpcy5BTEVSVF9USFJFU0hPTEQsXG4gICAgICB9LFxuICAgIH07XG5cbiAgICB0aGlzLlRJTUVfTElNSVQgPSA4O1xuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJzdWNjZXNzXCIsICgpID0+IHRoaXMuY2xlYXJUaW1lKCkpO1xuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJnYW1lIG92ZXJcIiwgKCkgPT4gdGhpcy5jbGVhclRpbWUoKSk7XG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImJhZCBndWVzc1wiLCAoKSA9PiB0aGlzLnJlZHVjZVRpbWUoKSk7XG4gICAgdGhpcy5wZW5hbHR5VGltZSA9IDA7XG4gIH1cblxuICByZWR1Y2VUaW1lKCkge1xuICAgIHRoaXMucGVuYWx0eVRpbWUgKz0gMTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBsZXQgdGltZXJJbnRlcnZhbCA9IG51bGw7XG4gICAgbGV0IHJlbWFpbmluZ1BhdGhDb2xvciA9IHRoaXMuQ09MT1JfQ09ERVMuaW5mby5jb2xvcjtcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNvdW50ZG93blwiKS5pbm5lckhUTUwgPSBgXG4gICAgPGRpdiBjbGFzcz1cImJhc2UtdGltZXJcIj5cbiAgICAgIDxzdmcgY2xhc3M9XCJiYXNlLXRpbWVyX19zdmdcIiB2aWV3Qm94PVwiMCAwIDEwMCAxMDBcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCI+XG4gICAgICAgIDxnIGNsYXNzPVwiYmFzZS10aW1lcl9fY2lyY2xlXCI+XG4gICAgICAgICAgPGNpcmNsZSBjbGFzcz1cImJhc2UtdGltZXJfX3BhdGgtZWxhcHNlZFwiIGN4PVwiNTBcIiBjeT1cIjUwXCIgcj1cIjQ1XCI+PC9jaXJjbGU+XG4gICAgICAgICAgPHBhdGhcbiAgICAgICAgICAgIGlkPVwiYmFzZS10aW1lci1wYXRoLXJlbWFpbmluZ1wiXG4gICAgICAgICAgICBzdHJva2UtZGFzaGFycmF5PVwiMjgzXCJcbiAgICAgICAgICAgIGNsYXNzPVwiYmFzZS10aW1lcl9fcGF0aC1yZW1haW5pbmcgJHtyZW1haW5pbmdQYXRoQ29sb3J9XCJcbiAgICAgICAgICAgIGQ9XCJcbiAgICAgICAgICAgICAgTSA1MCwgNTBcbiAgICAgICAgICAgICAgbSAtNDUsIDBcbiAgICAgICAgICAgICAgYSA0NSw0NSAwIDEsMCA5MCwwXG4gICAgICAgICAgICAgIGEgNDUsNDUgMCAxLDAgLTkwLDBcbiAgICAgICAgICAgIFwiXG4gICAgICAgICAgPjwvcGF0aD5cbiAgICAgICAgPC9nPlxuICAgICAgPC9zdmc+XG4gICAgICA8c3BhbiBpZD1cImJhc2UtdGltZXItbGFiZWxcIiBjbGFzcz1cImJhc2UtdGltZXJfX2xhYmVsXCI+JHt0aGlzLmxldmVsfTwvc3Bhbj5cbiAgICA8L2Rpdj5cbiAgICBgO1xuICAgIHRoaXMuc3RhcnRUaW1lcigpO1xuICB9XG5cbiAgY2xlYXJUaW1lKCkge1xuICAgIGNsZWFySW50ZXJ2YWwodGhpcy50aW1lckludGVydmFsKTtcbiAgfVxuXG4gIHN0YXJ0VGltZXIoKSB7XG4gICAgbGV0IHRpbWVQYXNzZWQgPSAwO1xuICAgIGxldCB0aW1lTGVmdCA9IHRoaXMuVElNRV9MSU1JVDtcbiAgICB0aGlzLnRpbWVySW50ZXJ2YWwgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XG4gICAgICB0aW1lUGFzc2VkID0gdGltZVBhc3NlZCArPSAxO1xuICAgICAgdGltZUxlZnQgPSBNYXRoLm1heCh0aGlzLlRJTUVfTElNSVQgLSB0aW1lUGFzc2VkIC0gdGhpcy5wZW5hbHR5VGltZSwgMCk7XG5cbiAgICAgIHRoaXMuc2V0Q2lyY2xlRGFzaGFycmF5KHRpbWVMZWZ0KTtcbiAgICAgIHRoaXMuc2V0UmVtYWluaW5nUGF0aENvbG9yKHRpbWVMZWZ0KTtcblxuICAgICAgaWYgKHRpbWVMZWZ0ID09PSAwKSB7XG4gICAgICAgIHRoaXMuY2xlYXJUaW1lKCk7XG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4gZG9jdW1lbnQuZGlzcGF0Y2hFdmVudChuZXcgRXZlbnQoXCJnYW1lIG92ZXJcIikpLCA1MCk7XG4gICAgICB9XG4gICAgfSwgMTAwMCk7XG4gIH1cblxuICBzZXRSZW1haW5pbmdQYXRoQ29sb3IodGltZUxlZnQpIHtcbiAgICBjb25zdCB7IGFsZXJ0LCB3YXJuaW5nLCBpbmZvIH0gPSB0aGlzLkNPTE9SX0NPREVTO1xuICAgIGlmICh0aW1lTGVmdCA8PSBhbGVydC50aHJlc2hvbGQpIHtcbiAgICAgIGRvY3VtZW50XG4gICAgICAgIC5nZXRFbGVtZW50QnlJZChcImJhc2UtdGltZXItcGF0aC1yZW1haW5pbmdcIilcbiAgICAgICAgLmNsYXNzTGlzdC5yZW1vdmUod2FybmluZy5jb2xvcik7XG4gICAgICBkb2N1bWVudFxuICAgICAgICAuZ2V0RWxlbWVudEJ5SWQoXCJiYXNlLXRpbWVyLXBhdGgtcmVtYWluaW5nXCIpXG4gICAgICAgIC5jbGFzc0xpc3QuYWRkKGFsZXJ0LmNvbG9yKTtcbiAgICB9IGVsc2UgaWYgKHRpbWVMZWZ0IDw9IHdhcm5pbmcudGhyZXNob2xkKSB7XG4gICAgICBkb2N1bWVudFxuICAgICAgICAuZ2V0RWxlbWVudEJ5SWQoXCJiYXNlLXRpbWVyLXBhdGgtcmVtYWluaW5nXCIpXG4gICAgICAgIC5jbGFzc0xpc3QucmVtb3ZlKGluZm8uY29sb3IpO1xuICAgICAgZG9jdW1lbnRcbiAgICAgICAgLmdldEVsZW1lbnRCeUlkKFwiYmFzZS10aW1lci1wYXRoLXJlbWFpbmluZ1wiKVxuICAgICAgICAuY2xhc3NMaXN0LmFkZCh3YXJuaW5nLmNvbG9yKTtcbiAgICB9XG4gIH1cblxuICBjYWxjdWxhdGVUaW1lRnJhY3Rpb24odGltZUxlZnQpIHtcbiAgICBjb25zdCByYXdUaW1lRnJhY3Rpb24gPSB0aW1lTGVmdCAvIHRoaXMuVElNRV9MSU1JVDsgLy8gNCAvIDhcbiAgICByZXR1cm4gcmF3VGltZUZyYWN0aW9uIC0gKDEgLyB0aGlzLlRJTUVfTElNSVQpICogKDEgLSByYXdUaW1lRnJhY3Rpb24pOyAvLyA0LzggLSAxIC8gOCAqIDUwXG4gIH1cblxuICBzZXRDaXJjbGVEYXNoYXJyYXkodGltZUxlZnQpIHtcbiAgICBjb25zdCBjaXJjbGVEYXNoYXJyYXkgPSBgJHsoXG4gICAgICB0aGlzLmNhbGN1bGF0ZVRpbWVGcmFjdGlvbih0aW1lTGVmdCkgKiB0aGlzLkZVTExfREFTSF9BUlJBWVxuICAgICkudG9GaXhlZCgwKX0gMjgzYDtcbiAgICBkb2N1bWVudFxuICAgICAgLmdldEVsZW1lbnRCeUlkKFwiYmFzZS10aW1lci1wYXRoLXJlbWFpbmluZ1wiKVxuICAgICAgLnNldEF0dHJpYnV0ZShcInN0cm9rZS1kYXNoYXJyYXlcIiwgY2lyY2xlRGFzaGFycmF5KTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBUaW1lcjtcbiJdLCJzb3VyY2VSb290IjoiIn0=