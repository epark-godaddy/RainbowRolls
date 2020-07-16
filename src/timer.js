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

export default Timer;
