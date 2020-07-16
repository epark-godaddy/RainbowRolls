import Board from "./board";
import Timer from "./timer";
export default class Game {
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
    this.board = new Board(this.level);
    this.board.render();

    this.timer = new Timer(this.level);
    this.timer.render();
  }

  loseGame() {
    console.log("You Lost");
    console.log(this.level - 1);
  }
}
