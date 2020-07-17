import Sushi from "./sushi";

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
        row.push(new Sushi(this.outlineColor, this.fillColor));
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

    this.grid[randRow][randCol] = new Sushi(
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

export default Board;
