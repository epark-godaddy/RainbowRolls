import Board from "./board";
import Timer from "./timer";
export default class Game {
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
      this.timer = new Timer(this.level);
      this.timer.render();
    }
  }

  renderBoard() {
    this.board = new Board(this.level);
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
