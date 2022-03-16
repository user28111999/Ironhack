const chronometer = new Chronometer()

// get the buttons:
const btnLeftElement = document.getElementById('btnLeft')
const btnRightElement = document.getElementById('btnRight')

// get the DOM elements that will serve us to display the time:
const minDecElement = document.getElementById('minDec')
const minUniElement = document.getElementById('minUni')
const secDecElement = document.getElementById('secDec')
const secUniElement = document.getElementById('secUni')
const milDecElement = document.getElementById('milDec')
const milUniElement = document.getElementById('milUni')
const splitsElement = document.getElementById('splits')

function printTime() {
  setInterval(() => {
    printMinutes()
    printSeconds()
  }, 1000)
}

function printMinutes() {
  minUni.innerHTML = chronometer.computeTwoDigitNumber(chronometer.getMinutes())[1]
  minDec.innerHTML = chronometer.computeTwoDigitNumber(chronometer.getMinutes())[0]
}

function printSeconds() {
  secUni.innerHTML = chronometer.computeTwoDigitNumber(chronometer.getSeconds())[1]
  secDec.innerHTML = chronometer.computeTwoDigitNumber(chronometer.getSeconds())[0]
}

// ==> BONUS
function printMilliseconds() {
  // ... your code goes here
}

function printSplit() {
  // ... your code goes here
}

function clearSplits() {
  // ... your code goes here
}

function setStopBtn() {
  btnLeft.className = 'btn stop';
  btnLeft.textContent = 'STOP';
}

function setSplitBtn() {
  // btnRight.className = 'btn split';
  // btnRight.textContent = 'SPLIT';
}

function setStartBtn() {
  btnLeft.className = 'btn start'
  btnLeft.textContent = 'START'
}

function setResetBtn() {
  btnRight.className = 'btn reset'
  btnRight.textContent = 'RESET'
}

// Start/Stop Button
btnLeftElement.addEventListener('click', () => {
  if (btnLeft.classList.contains('start')) {
    chronometer.start(printTime)
    setStopBtn()
  } else {
    chronometer.stop()
    setStartBtn()
    setResetBtn()
  }
})

// Reset/Split Button
btnRightElement.addEventListener('click', () => {
  if (!btnRight.classList.contains('reset')) return
  chronometer.reset()
  printTime()
})