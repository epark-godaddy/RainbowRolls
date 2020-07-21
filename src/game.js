import Board from "./board";
import Timer from "./timer";
export default class Game {
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
    this.board = new Board(this.level);
    this.board.render();

    if (showTimer) {
      this.timer = new Timer(this.level);
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
