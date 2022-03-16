class Chronometer {
  constructor() {
    this.currentTime = 0
    this.intervalId = null
  }

  start(callback) {
    this.intervalId = setInterval(() => this.currentTime++ ,1000)
    return this.intervalId
  }

  getMinutes() {
    return Math.floor(this.currentTime / 60)
  }

  getSeconds() {
    return Math.abs(this.getMinutes() * 60 - this.currentTime)
  }

  computeTwoDigitNumber(value) {
    let result = (value < 10) ? '0' + value : String(value)
    return result.toString()
  }

  stop() {
    clearInterval(this.intervalId)
  }

  reset() {
    this.currentTime = 0
  }

  split() {
    return `${this.computeTwoDigitNumber(
      this.getMinutes())}:${this.computeTwoDigitNumber(this.getSeconds()
    )}`
  }
}

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = Chronometer;
}
