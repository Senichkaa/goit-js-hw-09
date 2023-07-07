const startButton = document.querySelector('[data-start]');
const stopButton = document.querySelector('[data-stop]');

let intervalId;

startButton.addEventListener('click', onStartButtonClick);
stopButton.addEventListener('click', onStopButtonClick);
stopButton.setAttribute('disabled', '');

function onStartButtonClick() {
  startButton.setAttribute('disabled', '');
  stopButton.removeAttribute('disabled');
  intervalId = setInterval(startColorChanging, 1000);
}

function startColorChanging() {
  document.body.style.backgroundColor = getRandomHexColor();
  return startColorChanging;
}

function onStopButtonClick() {
  startButton.removeAttribute('disabled');
  stopButton.setAttribute('disabled', '');
  clearInterval(intervalId);
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
