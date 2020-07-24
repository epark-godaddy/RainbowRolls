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
    document.addEventListener("success", (data) => {
      this.appendSushi(data.detail);
      this.loadGame();
    });
    document.addEventListener("game over", () => this.loseGame());
    this.level = 0;
    this.highestLevel = localStorage.getItem("highestLevel") || 0;
    this.renderHighestLevel();
    const button = document.getElementById("play-button");
    button.onclick = () => {
      this.restartGame();
    };
  }

  appendSushi(sushi) {
    if (this.gameOver) return;
    sushi.append();
  }

  loadGame(showTimer = true, allowProgression = true) {
    if (this.gameOver) return;

    this.removeBoard();
    this.removeTimer();
    this.level += 1;

    if (this.level > this.highestLevel) {
      this.highestLevel = this.level;
      this.renderHighestLevel();
      localStorage.setItem("highestLevel", this.highestLevel);
    }

    this.renderBoard();
    this.renderTimer(showTimer);

    if (!allowProgression) {
      this.gameOver = true;
    }
  }

  renderTimer(showTimer) {
    if (showTimer) {
      this.timer = new _timer__WEBPACK_IMPORTED_MODULE_1__["default"](this.level);
      this.timer.render();
    }
  }

  renderBoard() {
    this.board = new _board__WEBPACK_IMPORTED_MODULE_0__["default"](this.level);
    this.board.render();
  }

  renderHighestLevel() {
    const highestLevel = document.getElementById("highest-level");
    highestLevel.innerHTML = "Your Highest Level: " + this.highestLevel;
  }

  removeBoard() {
    const board = document.getElementById("board");
    if (board.hasChildNodes()) {
      board.removeChild(board.childNodes[0]);
    }
  }

  removeTimer() {
    const countdown = document.getElementById("countdown");
    if (countdown.hasChildNodes()) {
      Array.from(countdown.childNodes).forEach((node) => {
        countdown.removeChild(node);
      });
    }
  }

  removeSushiReward() {
    const sushiReward = document.getElementById("sushi-reward");
    if (sushiReward.hasChildNodes()) {
      Array.from(sushiReward.childNodes).forEach((node) => {
        sushiReward.removeChild(node);
      });
    }
  }

  loseGame() {
    if (window.confirm("Better luck next time! Try Again?")) {
      this.restartGame();
    }
  }

  restartGame() {
    this.gameOver = false;
    this.level = 0;
    this.removeSushiReward();
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
  game.loadGame(false, false);
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
      document.dispatchEvent(new CustomEvent("success", { detail: this }));
    } else {
      document.dispatchEvent(new Event("bad guess"));
    }
  }

  append() {
    const sushiReward = document.getElementById("sushi-reward");
    const sushiSVG = this.generateSVG();
    sushiReward.appendChild(sushiSVG);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2JvYXJkLmpzIiwid2VicGFjazovLy8uL3NyYy9nYW1lLmpzIiwid2VicGFjazovLy8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3VzaGkuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3RpbWVyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNsRkE7QUFBQTtBQUE0Qjs7QUFFNUI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FB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QW1CO0FBQ25FO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhEQUE4RCxXQUFXO0FBQ3pFO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBLFdBQVcsdUJBQXVCO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSx1REFBdUQ7QUFDdkQsMkVBQTJFO0FBQzNFOztBQUVBO0FBQ0EsK0JBQStCO0FBQy9CO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRWUsb0VBQUssRUFBQyIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvaW5kZXguanNcIik7XG4iLCJpbXBvcnQgU3VzaGkgZnJvbSBcIi4vc3VzaGlcIjtcblxuY2xhc3MgQm9hcmQge1xuICBjb25zdHJ1Y3RvcihsZXZlbCkge1xuICAgIHRoaXMubGV2ZWwgPSBsZXZlbDtcblxuICAgIC8vcmVkLCBvcmFuZ2UsIGRhcmsgZ3JlZW4sIGZ1c2NpYSwgZHVzdHkgYmx1ZSwgeWVsbG93LCBwdXJwbGUsIGxpZ2h0IGdyZWVuLCB0YW4sIGdyZXlcbiAgICB0aGlzLmNvbG9ycyA9IFtcbiAgICAgIFtcbiAgICAgICAgWzI1NSwgMCwgMF0sXG4gICAgICAgIFsyNTUsIDUxLCA1MSwgMC45XSxcbiAgICAgIF0sXG4gICAgICBbXG4gICAgICAgIFsyNTUsIDEyOCwgMF0sXG4gICAgICAgIFsyNTUsIDE1MywgNTEsIDAuOV0sXG4gICAgICBdLFxuICAgICAgW1xuICAgICAgICBbMCwgMTAyLCAwXSxcbiAgICAgICAgWzAsIDE1MywgMCwgMC45XSxcbiAgICAgIF0sXG4gICAgICBbXG4gICAgICAgIFsyNTUsIDAsIDI1NV0sXG4gICAgICAgIFsyNTUsIDUxLCAyNTUsIDAuOV0sXG4gICAgICBdLFxuICAgICAgW1xuICAgICAgICBbNTEsIDE1MywgMjU1XSxcbiAgICAgICAgWzEwMiwgMTc4LCAyNTUsIDAuOV0sXG4gICAgICBdLFxuICAgICAgW1xuICAgICAgICBbMjU1LCAyNTUsIDEwMl0sXG4gICAgICAgIFsyNTUsIDI1NSwgMTUzLCAwLjldLFxuICAgICAgXSxcbiAgICAgIFtcbiAgICAgICAgWzc2LCAwLCAxNTNdLFxuICAgICAgICBbMTAyLCAwLCAyMDQsIDAuOV0sXG4gICAgICBdLFxuICAgICAgW1xuICAgICAgICBbNTEsIDI1NSwgNTFdLFxuICAgICAgICBbMTAyLCAyNTUsIDEwMiwgMC45XSxcbiAgICAgIF0sXG4gICAgICBbXG4gICAgICAgIFsyNTUsIDIwNCwgMTUzXSxcbiAgICAgICAgWzI1NSwgMjI5LCAyMDQsIDAuOV0sXG4gICAgICBdLFxuICAgICAgW1xuICAgICAgICBbMTkyLCAxOTIsIDE5Ml0sXG4gICAgICAgIFsyMjQsIDIyNCwgMjI0LCAwLjldLFxuICAgICAgXSxcbiAgICBdO1xuICAgIHRoaXMucmFuZG9tQ29sb3JJZHggPSB0aGlzLmdldFJhbmRvbUludCh0aGlzLmNvbG9ycy5sZW5ndGgpO1xuICAgIHRoaXMub3V0bGluZUNvbG9yID0gdGhpcy5nZXRSR0JDb2xvcih0aGlzLmNvbG9yc1t0aGlzLnJhbmRvbUNvbG9ySWR4XVswXSk7XG4gICAgdGhpcy5maWxsQ29sb3IgPSB0aGlzLmdldFJHQkNvbG9yKHRoaXMuY29sb3JzW3RoaXMucmFuZG9tQ29sb3JJZHhdWzFdKTtcbiAgICB0aGlzLmdyaWQgPSB0aGlzLmdlbmVyYXRlR3JpZChsZXZlbCk7XG4gICAgdGhpcy5hZGRTcGVjaWFsU3VzaGkoKTtcbiAgfVxuXG4gIGdldFJHQkNvbG9yKGNvbG9yQXJyYXkpIHtcbiAgICByZXR1cm4gXCJyZ2IoXCIgKyBjb2xvckFycmF5LmpvaW4oXCIsXCIpICsgXCIpXCI7XG4gIH1cblxuICBnZW5lcmF0ZUdyaWQobGV2ZWwpIHtcbiAgICBjb25zdCBncmlkTGVuZ3RoID0gTWF0aC5jZWlsKGxldmVsIC8gNCkgKyAxO1xuICAgIGNvbnN0IGdyaWQgPSBbXTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGdyaWRMZW5ndGg7IGkrKykge1xuICAgICAgY29uc3Qgcm93ID0gW107XG4gICAgICBmb3IgKGxldCBqID0gMDsgaiA8IGdyaWRMZW5ndGg7IGorKykge1xuICAgICAgICByb3cucHVzaChuZXcgU3VzaGkodGhpcy5vdXRsaW5lQ29sb3IsIHRoaXMuZmlsbENvbG9yKSk7XG4gICAgICB9XG4gICAgICBncmlkLnB1c2gocm93KTtcbiAgICB9XG4gICAgcmV0dXJuIGdyaWQ7XG4gIH1cblxuICBnZXRSYW5kb21JbnQobWF4KSB7XG4gICAgcmV0dXJuIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIE1hdGguZmxvb3IobWF4KSk7XG4gIH1cblxuICBnZXRIaWdoZXN0TnVtYmVySW5kZXgobnVtQXJyYXkpIHtcbiAgICBsZXQgaGlnaGVzdFZhbHVlID0gbnVtQXJyYXlbMF07XG4gICAgbGV0IGhpZ2hlc3RJbmRleCA9IDA7XG4gICAgbnVtQXJyYXkuZm9yRWFjaCgodmFsdWUsIGlkeCkgPT4ge1xuICAgICAgaWYgKHZhbHVlID4gaGlnaGVzdFZhbHVlKSB7XG4gICAgICAgIGhpZ2hlc3RWYWx1ZSA9IHZhbHVlO1xuICAgICAgICBoaWdoZXN0SW5kZXggPSBpZHg7XG4gICAgICB9XG4gICAgfSk7XG4gICAgcmV0dXJuIGhpZ2hlc3RJbmRleDtcbiAgfVxuXG4gIGFkZFNwZWNpYWxTdXNoaSgpIHtcbiAgICBjb25zdCByYW5kUm93ID0gdGhpcy5nZXRSYW5kb21JbnQodGhpcy5ncmlkLmxlbmd0aCk7XG4gICAgY29uc3QgcmFuZENvbCA9IHRoaXMuZ2V0UmFuZG9tSW50KHRoaXMuZ3JpZC5sZW5ndGgpO1xuXG4gICAgY29uc3Qgb3V0bGluZSA9IHRoaXMuY29sb3JzW3RoaXMucmFuZG9tQ29sb3JJZHhdWzBdO1xuICAgIGNvbnN0IGZpbGwgPSB0aGlzLmNvbG9yc1t0aGlzLnJhbmRvbUNvbG9ySWR4XVsxXTtcblxuICAgIGNvbnN0IGNvbG9yQ2hhbmdlID0gMzAgLSBNYXRoLmZsb29yKHRoaXMubGV2ZWwgLyA0KSAqIDI7XG5cbiAgICBjb25zdCBpbmRleFRvQ2hhbmdlID0gdGhpcy5nZXRIaWdoZXN0TnVtYmVySW5kZXgob3V0bGluZSk7XG4gICAgb3V0bGluZVtpbmRleFRvQ2hhbmdlXSA9IG91dGxpbmVbaW5kZXhUb0NoYW5nZV0gLSBjb2xvckNoYW5nZTtcbiAgICBmaWxsW2luZGV4VG9DaGFuZ2VdID0gZmlsbFtpbmRleFRvQ2hhbmdlXSAtIGNvbG9yQ2hhbmdlO1xuXG4gICAgdGhpcy5ncmlkW3JhbmRSb3ddW3JhbmRDb2xdID0gbmV3IFN1c2hpKFxuICAgICAgdGhpcy5nZXRSR0JDb2xvcihvdXRsaW5lKSxcbiAgICAgIHRoaXMuZ2V0UkdCQ29sb3IoZmlsbCksXG4gICAgICB0cnVlXG4gICAgKTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCBncmlkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBncmlkLmNsYXNzTmFtZSA9IFwiZ3JpZFwiO1xuXG4gICAgY29uc3QgcGxhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIHBsYXRlLmNsYXNzTmFtZSA9IFwicGxhdGVcIjtcblxuICAgIHBsYXRlLmFwcGVuZENoaWxkKGdyaWQpO1xuICAgIHRoaXMuZ3JpZC5mb3JFYWNoKChyb3cpID0+IHtcbiAgICAgIGNvbnN0IHJvd0VsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICByb3dFbGUuY2xhc3NOYW1lID0gXCJyb3dcIjtcbiAgICAgIHJvdy5mb3JFYWNoKChzdXNoaSkgPT4ge1xuICAgICAgICBjb25zdCBzdXNoaUVsZSA9IHN1c2hpLnJlbmRlcigpO1xuICAgICAgICByb3dFbGUuYXBwZW5kQ2hpbGQoc3VzaGlFbGUpO1xuICAgICAgfSk7XG4gICAgICBncmlkLmFwcGVuZENoaWxkKHJvd0VsZSk7XG4gICAgfSk7XG5cbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImJvYXJkXCIpLmFwcGVuZENoaWxkKHBsYXRlKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBCb2FyZDtcbiIsImltcG9ydCBCb2FyZCBmcm9tIFwiLi9ib2FyZFwiO1xuaW1wb3J0IFRpbWVyIGZyb20gXCIuL3RpbWVyXCI7XG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHYW1lIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcInN1Y2Nlc3NcIiwgKGRhdGEpID0+IHtcbiAgICAgIHRoaXMuYXBwZW5kU3VzaGkoZGF0YS5kZXRhaWwpO1xuICAgICAgdGhpcy5sb2FkR2FtZSgpO1xuICAgIH0pO1xuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJnYW1lIG92ZXJcIiwgKCkgPT4gdGhpcy5sb3NlR2FtZSgpKTtcbiAgICB0aGlzLmxldmVsID0gMDtcbiAgICB0aGlzLmhpZ2hlc3RMZXZlbCA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiaGlnaGVzdExldmVsXCIpIHx8IDA7XG4gICAgdGhpcy5yZW5kZXJIaWdoZXN0TGV2ZWwoKTtcbiAgICBjb25zdCBidXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInBsYXktYnV0dG9uXCIpO1xuICAgIGJ1dHRvbi5vbmNsaWNrID0gKCkgPT4ge1xuICAgICAgdGhpcy5yZXN0YXJ0R2FtZSgpO1xuICAgIH07XG4gIH1cblxuICBhcHBlbmRTdXNoaShzdXNoaSkge1xuICAgIGlmICh0aGlzLmdhbWVPdmVyKSByZXR1cm47XG4gICAgc3VzaGkuYXBwZW5kKCk7XG4gIH1cblxuICBsb2FkR2FtZShzaG93VGltZXIgPSB0cnVlLCBhbGxvd1Byb2dyZXNzaW9uID0gdHJ1ZSkge1xuICAgIGlmICh0aGlzLmdhbWVPdmVyKSByZXR1cm47XG5cbiAgICB0aGlzLnJlbW92ZUJvYXJkKCk7XG4gICAgdGhpcy5yZW1vdmVUaW1lcigpO1xuICAgIHRoaXMubGV2ZWwgKz0gMTtcblxuICAgIGlmICh0aGlzLmxldmVsID4gdGhpcy5oaWdoZXN0TGV2ZWwpIHtcbiAgICAgIHRoaXMuaGlnaGVzdExldmVsID0gdGhpcy5sZXZlbDtcbiAgICAgIHRoaXMucmVuZGVySGlnaGVzdExldmVsKCk7XG4gICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcImhpZ2hlc3RMZXZlbFwiLCB0aGlzLmhpZ2hlc3RMZXZlbCk7XG4gICAgfVxuXG4gICAgdGhpcy5yZW5kZXJCb2FyZCgpO1xuICAgIHRoaXMucmVuZGVyVGltZXIoc2hvd1RpbWVyKTtcblxuICAgIGlmICghYWxsb3dQcm9ncmVzc2lvbikge1xuICAgICAgdGhpcy5nYW1lT3ZlciA9IHRydWU7XG4gICAgfVxuICB9XG5cbiAgcmVuZGVyVGltZXIoc2hvd1RpbWVyKSB7XG4gICAgaWYgKHNob3dUaW1lcikge1xuICAgICAgdGhpcy50aW1lciA9IG5ldyBUaW1lcih0aGlzLmxldmVsKTtcbiAgICAgIHRoaXMudGltZXIucmVuZGVyKCk7XG4gICAgfVxuICB9XG5cbiAgcmVuZGVyQm9hcmQoKSB7XG4gICAgdGhpcy5ib2FyZCA9IG5ldyBCb2FyZCh0aGlzLmxldmVsKTtcbiAgICB0aGlzLmJvYXJkLnJlbmRlcigpO1xuICB9XG5cbiAgcmVuZGVySGlnaGVzdExldmVsKCkge1xuICAgIGNvbnN0IGhpZ2hlc3RMZXZlbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaGlnaGVzdC1sZXZlbFwiKTtcbiAgICBoaWdoZXN0TGV2ZWwuaW5uZXJIVE1MID0gXCJZb3VyIEhpZ2hlc3QgTGV2ZWw6IFwiICsgdGhpcy5oaWdoZXN0TGV2ZWw7XG4gIH1cblxuICByZW1vdmVCb2FyZCgpIHtcbiAgICBjb25zdCBib2FyZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYm9hcmRcIik7XG4gICAgaWYgKGJvYXJkLmhhc0NoaWxkTm9kZXMoKSkge1xuICAgICAgYm9hcmQucmVtb3ZlQ2hpbGQoYm9hcmQuY2hpbGROb2Rlc1swXSk7XG4gICAgfVxuICB9XG5cbiAgcmVtb3ZlVGltZXIoKSB7XG4gICAgY29uc3QgY291bnRkb3duID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjb3VudGRvd25cIik7XG4gICAgaWYgKGNvdW50ZG93bi5oYXNDaGlsZE5vZGVzKCkpIHtcbiAgICAgIEFycmF5LmZyb20oY291bnRkb3duLmNoaWxkTm9kZXMpLmZvckVhY2goKG5vZGUpID0+IHtcbiAgICAgICAgY291bnRkb3duLnJlbW92ZUNoaWxkKG5vZGUpO1xuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgcmVtb3ZlU3VzaGlSZXdhcmQoKSB7XG4gICAgY29uc3Qgc3VzaGlSZXdhcmQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInN1c2hpLXJld2FyZFwiKTtcbiAgICBpZiAoc3VzaGlSZXdhcmQuaGFzQ2hpbGROb2RlcygpKSB7XG4gICAgICBBcnJheS5mcm9tKHN1c2hpUmV3YXJkLmNoaWxkTm9kZXMpLmZvckVhY2goKG5vZGUpID0+IHtcbiAgICAgICAgc3VzaGlSZXdhcmQucmVtb3ZlQ2hpbGQobm9kZSk7XG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICBsb3NlR2FtZSgpIHtcbiAgICBpZiAod2luZG93LmNvbmZpcm0oXCJCZXR0ZXIgbHVjayBuZXh0IHRpbWUhIFRyeSBBZ2Fpbj9cIikpIHtcbiAgICAgIHRoaXMucmVzdGFydEdhbWUoKTtcbiAgICB9XG4gIH1cblxuICByZXN0YXJ0R2FtZSgpIHtcbiAgICB0aGlzLmdhbWVPdmVyID0gZmFsc2U7XG4gICAgdGhpcy5sZXZlbCA9IDA7XG4gICAgdGhpcy5yZW1vdmVTdXNoaVJld2FyZCgpO1xuICAgIHRoaXMubG9hZEdhbWUoKTtcbiAgfVxufVxuIiwiaW1wb3J0IEdhbWUgZnJvbSBcIi4vZ2FtZVwiO1xuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCAoKSA9PiB7XG4gIGNvbnN0IGdhbWUgPSBuZXcgR2FtZSgpO1xuICBnYW1lLmxvYWRHYW1lKGZhbHNlLCBmYWxzZSk7XG59KTtcbiIsImNsYXNzIFN1c2hpIHtcbiAgY29uc3RydWN0b3Iob3V0bGluZUNvbG9yLCBmaWxsQ29sb3IsIHNwZWNpYWwgPSBmYWxzZSkge1xuICAgIHRoaXMub3V0bGluZUNvbG9yID0gb3V0bGluZUNvbG9yO1xuICAgIHRoaXMuZmlsbENvbG9yID0gZmlsbENvbG9yO1xuICAgIHRoaXMuc3BlY2lhbCA9IHNwZWNpYWw7XG4gICAgdGhpcy5vbkNsaWNrID0gdGhpcy5vbkNsaWNrLmJpbmQodGhpcyk7XG4gIH1cbiAgb25DbGljaygpIHtcbiAgICBpZiAodGhpcy5zcGVjaWFsKSB7XG4gICAgICBkb2N1bWVudC5kaXNwYXRjaEV2ZW50KG5ldyBDdXN0b21FdmVudChcInN1Y2Nlc3NcIiwgeyBkZXRhaWw6IHRoaXMgfSkpO1xuICAgIH0gZWxzZSB7XG4gICAgICBkb2N1bWVudC5kaXNwYXRjaEV2ZW50KG5ldyBFdmVudChcImJhZCBndWVzc1wiKSk7XG4gICAgfVxuICB9XG5cbiAgYXBwZW5kKCkge1xuICAgIGNvbnN0IHN1c2hpUmV3YXJkID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzdXNoaS1yZXdhcmRcIik7XG4gICAgY29uc3Qgc3VzaGlTVkcgPSB0aGlzLmdlbmVyYXRlU1ZHKCk7XG4gICAgc3VzaGlSZXdhcmQuYXBwZW5kQ2hpbGQoc3VzaGlTVkcpO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHN1c2hpQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBzdXNoaUNvbnRhaW5lci5jbGFzc05hbWUgPSBcInN1c2hpXCI7XG4gICAgc3VzaGlDb250YWluZXIub25jbGljayA9IHRoaXMub25DbGljaztcbiAgICBjb25zdCBzdXNoaVNWRyA9IHRoaXMuZ2VuZXJhdGVTVkcoKTtcbiAgICBzdXNoaUNvbnRhaW5lci5hcHBlbmRDaGlsZChzdXNoaVNWRyk7XG5cbiAgICByZXR1cm4gc3VzaGlDb250YWluZXI7XG4gIH1cblxuICBnZW5lcmF0ZVNWRygpIHtcbiAgICBjb25zdCB4bWxucyA9IFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIjtcbiAgICBjb25zdCBzdXNoaVNWRyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUyh4bWxucywgXCJzdmdcIik7XG4gICAgc3VzaGlTVkcuc2V0QXR0cmlidXRlTlMobnVsbCwgXCJ2aWV3Qm94XCIsIFwiOTMuMSAxODQuNSAzMDEuOTMxIDEyNi44XCIpO1xuXG4gICAgY29uc3Qgc3VzaGlHID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKHhtbG5zLCBcImdcIik7XG4gICAgY29uc3QgcGF0aDAgPSB0aGlzLmdlbmVyYXRlUGF0aChcbiAgICAgIFwiI0QzRDVENlwiLFxuICAgICAgXCJNMzU4LjgsMjQzLjNjLTIuMywwLTYuMSwwLjEtOSwwLjNjLTctNy42LTE5LTE2LjktMzUuNS0yNS4yYy0yMC41LTEwLjMtNTUtMjIuNi0xMDMuNC0yMi42IGMtMjkuNCwwLTU0LjYsMy45LTc0LjksMTEuN2MtMTcuOCw2LjgtMzAuOSwxNi4yLTM3LjcsMjcuMmMtNS43LDkuMS02LjYsMTguNi0yLjYsMjYuOGMwLjQsMC45LDEuMywyLjIsMi45LDMuOCBjLTMuNSw1LjMtNS40LDEwLjUtNS40LDE1LjVjMCwxOC4yLDIzLjEsMjMuOCw0MC40LDI2LjVjMjEuNiwzLjMsNTAuOCw0LDg4LjEsNGMzNy4zLDAsNjYuNS0wLjcsODguMS00IGMxNS42LTIuNCwzNS45LTcuMiwzOS44LTIxLjVjNS43LDYsMTcuNywxNy4zLDI5LDE5LjZjMSwwLjIsMiwwLjMsMi44LDAuM2M0LDAsNi0yLjIsNi44LTMuNWMyLjgtNC43LTAuMy0xMC44LTMuNi0xNy4yIGMtMC4zLTAuNi0wLjYtMS4yLTEtMS45YzMuNC0zLDQuOC04LjcsNS4zLTEzYzMuNC0yLjUsNy4xLTcuNSw1LjktMTUuM0MzOTQsMjQ5LjksMzg5LjUsMjQzLjMsMzU4LjgsMjQzLjN6XCJcbiAgICApO1xuICAgIHN1c2hpRy5hcHBlbmRDaGlsZChwYXRoMCk7XG4gICAgY29uc3Qgc3VzaGlHMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUyh4bWxucywgXCJnXCIpO1xuXG4gICAgLy9wYXRoIDFcbiAgICBjb25zdCBwYXRoMSA9IHRoaXMuZ2VuZXJhdGVQYXRoKFxuICAgICAgXCIjRkZGRkZGXCIsXG4gICAgICBcIk0yMjEuNywyOTBjNDEuNiwwLDEwOS4zLDAsMTE3LjctMTYuOWMtMC40LTAuMS0wLjgtMC4yLTEuMi0wLjJjLTE3LjQtNC4yLTEyMy45LTUuNC0xNzcuOC01LjQgYy0yOC4zLDAtNDQuNC0zLjktNTMuNC04LjFjLTIuNCwzLjctMy43LDcuMS0zLjcsMTAuMUMxMDMuMiwyOTAsMTc3LjQsMjkwLDIyMS43LDI5MHpcIlxuICAgICk7XG4gICAgLy9wYXRoIDJcbiAgICBjb25zdCBwYXRoMiA9IHRoaXMuZ2VuZXJhdGVQYXRoKFxuICAgICAgXCIjOEE4QzhFXCIsXG4gICAgICBcIk0zNDQuOSwyNzMuN0MzNDQuOSwyNzMuNywzNDQuOSwyNzMuNywzNDQuOSwyNzMuN2MtMS43LDAtMy42LTAuMi01LjUtMC42IEMzMzEuMSwyOTAsMjYzLjMsMjkwLDIyMS43LDI5MGMtNDQuMywwLTExOC41LDAtMTE4LjUtMjAuNWMwLTMsMS4zLTYuNCwzLjctMTAuMWMtNC0xLjgtNi42LTMuOC04LjQtNS40IGMtMy41LDUuMy01LjQsMTAuNS01LjQsMTUuNWMwLDE4LjIsMjMuMSwyMy44LDQwLjQsMjYuNWMyMS42LDMuMyw1MC44LDQsODguMSw0YzM3LjMsMCw2Ni41LTAuNyw4OC4xLTQgYzE1LjYtMi40LDM1LjktNy4yLDM5LjgtMjEuNWMtMC40LTAuNC0wLjctMC44LTEtMS4xQzM0Ny40LDI3My42LDM0Ni4yLDI3My43LDM0NC45LDI3My43elwiXG4gICAgKTtcbiAgICAvLyBwYXRoIDMgKG91dGxpbmUpXG4gICAgY29uc3QgcGF0aDMgPSB0aGlzLmdlbmVyYXRlUGF0aChcbiAgICAgIC8vIFwiI0Q5NDMyRFwiLFxuICAgICAgdGhpcy5vdXRsaW5lQ29sb3IsXG4gICAgICBcIk0zNTguOCwyMzJjLTIuMywwLTYuMSwwLjEtOSwwLjNjLTctNy42LTE5LTE2LjktMzUuNS0yNS4yYy0yMC41LTEwLjMtNTUtMjIuNi0xMDMuNC0yMi42IGMtMjkuNCwwLTU0LjYsMy45LTc0LjksMTEuN2MtMTcuOCw2LjgtMzAuOSwxNi4yLTM3LjcsMjcuMmMtNS43LDkuMS02LjYsMTguNi0yLjYsMjYuOGMwLjQsMC45LDEuMywyLjIsMi45LDMuOCBjMS44LDEuNyw0LjQsMy42LDguNCw1LjRjOS4xLDQuMiwyNS4xLDguMSw1My40LDguMWM1My45LDAsMTYwLjQsMS4xLDE3Ny44LDUuNGMwLjQsMC4xLDAuOCwwLjIsMS4yLDAuMiBjMiwwLjQsMy44LDAuNiw1LjUsMC42YzAsMCwwLDAsMCwwYzEuMywwLDIuNS0wLjEsMy42LTAuM2MwLjMsMC4zLDAuNywwLjcsMSwxLjFjNS43LDYsMTcuNywxNy4zLDI5LDE5LjZjMSwwLjIsMiwwLjMsMi44LDAuMyBjNCwwLDYtMi4yLDYuOC0zLjVjMi44LTQuNy0wLjMtMTAuOC0zLjYtMTcuMmMtMC4zLTAuNi0wLjYtMS4yLTEtMS45YzMuNC0zLDQuOC04LjcsNS4zLTEzYzMuNC0yLjUsNy4xLTcuNSw1LjktMTUuMyBDMzk0LDIzOC42LDM4OS41LDIzMiwzNTguOCwyMzJ6IE0xMDQuNywyNDUuOGMtMi41LTUuMS0xLjgtMTEsMi4xLTE3LjJjNi44LTEwLjksMjMuNS0yMi4zLDUxLjYtMjguOCBjLTEuOSw3LjEtMy45LDE4LjItMi45LDMyLjJsMTAtMC43Yy0xLjItMTYuNywyLjQtMjksNC4xLTMzLjhjNy43LTEuMywxNi0yLjIsMjUuMi0yLjdjLTIuMSw2LjktNC43LDE5LTMuNiwzNC43bDEwLTAuNyBjLTEuMi0xNy41LDIuNy0zMC4xLDQuMy0zNC40YzEuOCwwLDMuNy0wLjEsNS41LTAuMWM3LjEsMCwxMy44LDAuMywyMC40LDAuOGMtMi4xLDYuOS00LjYsMTguOS0zLjUsMzQuM2wxMC0wLjcgYy0xLjEtMTUuNSwxLjktMjcuMiwzLjctMzIuNmM4LjYsMSwxNi44LDIuNSwyNC4zLDQuMmMtMi4xLDYuOC00LjksMTkuMS0zLjgsMzUuMmwxMC0wLjdjLTEtMTUsMS43LTI2LjQsMy41LTMyLjEgYzcsMiwxMy41LDQuMiwxOS41LDYuNWMtMi4xLDYuOC00LjksMTkuMS0zLjgsMzUuMmwxMC0wLjdjLTAuOS0xMy44LDEuMy0yNC41LDMuMS0zMC41YzI1LjcsMTEuOCw0MCwyNS44LDQyLjUsMzEuNSBjMy4xLDcsNCwxNC4zLDIuMSwxNy4yYy0wLjMsMC40LTEsMS42LTQsMS42YzAsMCwwLDAsMCwwYy0xLjIsMC0yLjctMC4yLTQuMy0wLjZjLTIyLjktNS42LTE3My44LTUuNi0xODAuMi01LjYgQzExMiwyNTcuNSwxMDQuNywyNDUuOSwxMDQuNywyNDUuOHogTTI3Mi41LDE5Ni45TDI3Mi41LDE5Ni45TDI3Mi41LDE5Ni45TDI3Mi41LDE5Ni45elwiXG4gICAgKTtcbiAgICAvLyBwYXRoIDQgKGZpbGwpXG4gICAgY29uc3QgcGF0aDQgPSB0aGlzLmdlbmVyYXRlUGF0aChcbiAgICAgIC8vIFwiI0VGNEEzMlwiLFxuICAgICAgdGhpcy5maWxsQ29sb3IsXG4gICAgICBcIk0zNDAuNiwyNjMuMWMxLjYsMC40LDMuMSwwLjYsNC4zLDAuNmMwLDAsMCwwLDAsMGMzLDAsMy43LTEuMSw0LTEuNmMxLjktMi45LDEtMTAuMS0yLjEtMTcuMiBjLTIuNS01LjctMTYuOC0xOS43LTQyLjUtMzEuNWMtMS44LDYtNCwxNi44LTMuMSwzMC41bC0xMCwwLjdjLTEuMS0xNi4xLDEuNi0yOC40LDMuOC0zNS4yYy02LTIuNC0xMi41LTQuNi0xOS41LTYuNSBjLTEuOCw1LjYtNC42LDE3LTMuNSwzMi4xbC0xMCwwLjdjLTEuMS0xNi4xLDEuNy0yOC41LDMuOC0zNS4yYy03LjYtMS43LTE1LjctMy4yLTI0LjMtNC4yYy0xLjgsNS40LTQuOCwxNy4xLTMuNywzMi42IGwtMTAsMC43Yy0xLjEtMTUuNCwxLjQtMjcuNCwzLjUtMzQuM2MtNi41LTAuNS0xMy4zLTAuOC0yMC40LTAuOGMtMS45LDAtMy43LDAtNS41LDAuMWMtMS42LDQuMy01LjYsMTYuOS00LjMsMzQuNGwtMTAsMC43IGMtMS4xLTE1LjcsMS41LTI3LjgsMy42LTM0LjdjLTkuMSwwLjUtMTcuNSwxLjQtMjUuMiwyLjdjLTEuNyw0LjgtNS4zLDE3LTQuMSwzMy44bC0xMCwwLjdjLTEtMTQsMS0yNS4xLDIuOS0zMi4yIGMtMjguMSw2LjUtNDQuOCwxNy45LTUxLjYsMjguOGMtMy44LDYuMS00LjYsMTIuMS0yLjEsMTcuMmMwLDAuMSw3LjMsMTEuNyw1NS44LDExLjdDMTY2LjgsMjU3LjUsMzE3LjcsMjU3LjYsMzQwLjYsMjYzLjF6XCJcbiAgICApO1xuICAgIC8vcG9seWdvblxuICAgIGNvbnN0IHBvbHlnb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50TlMoeG1sbnMsIFwicG9seWdvblwiKTtcbiAgICBwb2x5Z29uLnNldEF0dHJpYnV0ZU5TKG51bGwsIFwiZmlsbFwiLCBcIiNFRjRBMzJcIik7XG4gICAgcG9seWdvbi5zZXRBdHRyaWJ1dGVOUyhcbiAgICAgIG51bGwsXG4gICAgICBcInBvaW50c1wiLFxuICAgICAgXCIyNzIuNSwxOTYuOSAyNzIuNSwxOTYuOSAyNzIuNSwxOTYuOVwiXG4gICAgKTtcbiAgICAvLyBhcHBlbmQgcGF0aDEtNCBhbmQgcG9seWdvblxuICAgIHN1c2hpRzIuYXBwZW5kKHBhdGgxLCBwYXRoMiwgcGF0aDMsIHBhdGg0LCBwb2x5Z29uKTtcbiAgICBzdXNoaUcuYXBwZW5kQ2hpbGQoc3VzaGlHMik7XG4gICAgc3VzaGlTVkcuYXBwZW5kQ2hpbGQoc3VzaGlHKTtcbiAgICByZXR1cm4gc3VzaGlTVkc7XG4gIH1cblxuICBnZW5lcmF0ZVBhdGgoZmlsbENvbG9yLCBkKSB7XG4gICAgY29uc3QgcGF0aCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUyhcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIsIFwicGF0aFwiKTtcbiAgICBwYXRoLnNldEF0dHJpYnV0ZU5TKG51bGwsIFwiZmlsbFwiLCBmaWxsQ29sb3IpO1xuICAgIHBhdGguc2V0QXR0cmlidXRlTlMobnVsbCwgXCJkXCIsIGQpO1xuICAgIHJldHVybiBwYXRoO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFN1c2hpO1xuIiwiY2xhc3MgVGltZXIge1xuICBjb25zdHJ1Y3RvcihsZXZlbCkge1xuICAgIHRoaXMubGV2ZWwgPSBsZXZlbDtcbiAgICB0aGlzLkZVTExfREFTSF9BUlJBWSA9IDI4MztcbiAgICB0aGlzLldBUk5JTkdfVEhSRVNIT0xEID0gNDtcbiAgICB0aGlzLkFMRVJUX1RIUkVTSE9MRCA9IDI7XG5cbiAgICB0aGlzLkNPTE9SX0NPREVTID0ge1xuICAgICAgaW5mbzoge1xuICAgICAgICBjb2xvcjogXCJncmVlblwiLFxuICAgICAgfSxcbiAgICAgIHdhcm5pbmc6IHtcbiAgICAgICAgY29sb3I6IFwib3JhbmdlXCIsXG4gICAgICAgIHRocmVzaG9sZDogdGhpcy5XQVJOSU5HX1RIUkVTSE9MRCxcbiAgICAgIH0sXG4gICAgICBhbGVydDoge1xuICAgICAgICBjb2xvcjogXCJyZWRcIixcbiAgICAgICAgdGhyZXNob2xkOiB0aGlzLkFMRVJUX1RIUkVTSE9MRCxcbiAgICAgIH0sXG4gICAgfTtcblxuICAgIHRoaXMuVElNRV9MSU1JVCA9IDg7XG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcInN1Y2Nlc3NcIiwgKCkgPT4gdGhpcy5jbGVhclRpbWUoKSk7XG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImdhbWUgb3ZlclwiLCAoKSA9PiB0aGlzLmNsZWFyVGltZSgpKTtcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiYmFkIGd1ZXNzXCIsICgpID0+IHRoaXMucmVkdWNlVGltZSgpKTtcbiAgICB0aGlzLnBlbmFsdHlUaW1lID0gMDtcbiAgfVxuXG4gIHJlZHVjZVRpbWUoKSB7XG4gICAgdGhpcy5wZW5hbHR5VGltZSArPSAxO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGxldCB0aW1lckludGVydmFsID0gbnVsbDtcbiAgICBsZXQgcmVtYWluaW5nUGF0aENvbG9yID0gdGhpcy5DT0xPUl9DT0RFUy5pbmZvLmNvbG9yO1xuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY291bnRkb3duXCIpLmlubmVySFRNTCA9IGBcbiAgICA8ZGl2IGNsYXNzPVwiYmFzZS10aW1lclwiPlxuICAgICAgPHN2ZyBjbGFzcz1cImJhc2UtdGltZXJfX3N2Z1wiIHZpZXdCb3g9XCIwIDAgMTAwIDEwMFwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIj5cbiAgICAgICAgPGcgY2xhc3M9XCJiYXNlLXRpbWVyX19jaXJjbGVcIj5cbiAgICAgICAgICA8Y2lyY2xlIGNsYXNzPVwiYmFzZS10aW1lcl9fcGF0aC1lbGFwc2VkXCIgY3g9XCI1MFwiIGN5PVwiNTBcIiByPVwiNDVcIj48L2NpcmNsZT5cbiAgICAgICAgICA8cGF0aFxuICAgICAgICAgICAgaWQ9XCJiYXNlLXRpbWVyLXBhdGgtcmVtYWluaW5nXCJcbiAgICAgICAgICAgIHN0cm9rZS1kYXNoYXJyYXk9XCIyODNcIlxuICAgICAgICAgICAgY2xhc3M9XCJiYXNlLXRpbWVyX19wYXRoLXJlbWFpbmluZyAke3JlbWFpbmluZ1BhdGhDb2xvcn1cIlxuICAgICAgICAgICAgZD1cIlxuICAgICAgICAgICAgICBNIDUwLCA1MFxuICAgICAgICAgICAgICBtIC00NSwgMFxuICAgICAgICAgICAgICBhIDQ1LDQ1IDAgMSwwIDkwLDBcbiAgICAgICAgICAgICAgYSA0NSw0NSAwIDEsMCAtOTAsMFxuICAgICAgICAgICAgXCJcbiAgICAgICAgICA+PC9wYXRoPlxuICAgICAgICA8L2c+XG4gICAgICA8L3N2Zz5cbiAgICAgIDxzcGFuIGlkPVwiYmFzZS10aW1lci1sYWJlbFwiIGNsYXNzPVwiYmFzZS10aW1lcl9fbGFiZWxcIj4ke3RoaXMubGV2ZWx9PC9zcGFuPlxuICAgIDwvZGl2PlxuICAgIGA7XG4gICAgdGhpcy5zdGFydFRpbWVyKCk7XG4gIH1cblxuICBjbGVhclRpbWUoKSB7XG4gICAgY2xlYXJJbnRlcnZhbCh0aGlzLnRpbWVySW50ZXJ2YWwpO1xuICB9XG5cbiAgc3RhcnRUaW1lcigpIHtcbiAgICBsZXQgdGltZVBhc3NlZCA9IDA7XG4gICAgbGV0IHRpbWVMZWZ0ID0gdGhpcy5USU1FX0xJTUlUO1xuICAgIHRoaXMudGltZXJJbnRlcnZhbCA9IHNldEludGVydmFsKCgpID0+IHtcbiAgICAgIHRpbWVQYXNzZWQgPSB0aW1lUGFzc2VkICs9IDE7XG4gICAgICB0aW1lTGVmdCA9IE1hdGgubWF4KHRoaXMuVElNRV9MSU1JVCAtIHRpbWVQYXNzZWQgLSB0aGlzLnBlbmFsdHlUaW1lLCAwKTtcblxuICAgICAgdGhpcy5zZXRDaXJjbGVEYXNoYXJyYXkodGltZUxlZnQpO1xuICAgICAgdGhpcy5zZXRSZW1haW5pbmdQYXRoQ29sb3IodGltZUxlZnQpO1xuXG4gICAgICBpZiAodGltZUxlZnQgPT09IDApIHtcbiAgICAgICAgdGhpcy5jbGVhclRpbWUoKTtcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiBkb2N1bWVudC5kaXNwYXRjaEV2ZW50KG5ldyBFdmVudChcImdhbWUgb3ZlclwiKSksIDUwKTtcbiAgICAgIH1cbiAgICB9LCAxMDAwKTtcbiAgfVxuXG4gIHNldFJlbWFpbmluZ1BhdGhDb2xvcih0aW1lTGVmdCkge1xuICAgIGNvbnN0IHsgYWxlcnQsIHdhcm5pbmcsIGluZm8gfSA9IHRoaXMuQ09MT1JfQ09ERVM7XG4gICAgaWYgKHRpbWVMZWZ0IDw9IGFsZXJ0LnRocmVzaG9sZCkge1xuICAgICAgZG9jdW1lbnRcbiAgICAgICAgLmdldEVsZW1lbnRCeUlkKFwiYmFzZS10aW1lci1wYXRoLXJlbWFpbmluZ1wiKVxuICAgICAgICAuY2xhc3NMaXN0LnJlbW92ZSh3YXJuaW5nLmNvbG9yKTtcbiAgICAgIGRvY3VtZW50XG4gICAgICAgIC5nZXRFbGVtZW50QnlJZChcImJhc2UtdGltZXItcGF0aC1yZW1haW5pbmdcIilcbiAgICAgICAgLmNsYXNzTGlzdC5hZGQoYWxlcnQuY29sb3IpO1xuICAgIH0gZWxzZSBpZiAodGltZUxlZnQgPD0gd2FybmluZy50aHJlc2hvbGQpIHtcbiAgICAgIGRvY3VtZW50XG4gICAgICAgIC5nZXRFbGVtZW50QnlJZChcImJhc2UtdGltZXItcGF0aC1yZW1haW5pbmdcIilcbiAgICAgICAgLmNsYXNzTGlzdC5yZW1vdmUoaW5mby5jb2xvcik7XG4gICAgICBkb2N1bWVudFxuICAgICAgICAuZ2V0RWxlbWVudEJ5SWQoXCJiYXNlLXRpbWVyLXBhdGgtcmVtYWluaW5nXCIpXG4gICAgICAgIC5jbGFzc0xpc3QuYWRkKHdhcm5pbmcuY29sb3IpO1xuICAgIH1cbiAgfVxuXG4gIGNhbGN1bGF0ZVRpbWVGcmFjdGlvbih0aW1lTGVmdCkge1xuICAgIGNvbnN0IHJhd1RpbWVGcmFjdGlvbiA9IHRpbWVMZWZ0IC8gdGhpcy5USU1FX0xJTUlUOyAvLyA0IC8gOFxuICAgIHJldHVybiByYXdUaW1lRnJhY3Rpb24gLSAoMSAvIHRoaXMuVElNRV9MSU1JVCkgKiAoMSAtIHJhd1RpbWVGcmFjdGlvbik7IC8vIDQvOCAtIDEgLyA4ICogNTBcbiAgfVxuXG4gIHNldENpcmNsZURhc2hhcnJheSh0aW1lTGVmdCkge1xuICAgIGNvbnN0IGNpcmNsZURhc2hhcnJheSA9IGAkeyhcbiAgICAgIHRoaXMuY2FsY3VsYXRlVGltZUZyYWN0aW9uKHRpbWVMZWZ0KSAqIHRoaXMuRlVMTF9EQVNIX0FSUkFZXG4gICAgKS50b0ZpeGVkKDApfSAyODNgO1xuICAgIGRvY3VtZW50XG4gICAgICAuZ2V0RWxlbWVudEJ5SWQoXCJiYXNlLXRpbWVyLXBhdGgtcmVtYWluaW5nXCIpXG4gICAgICAuc2V0QXR0cmlidXRlKFwic3Ryb2tlLWRhc2hhcnJheVwiLCBjaXJjbGVEYXNoYXJyYXkpO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFRpbWVyO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==