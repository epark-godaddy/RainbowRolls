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

export default Timer;
