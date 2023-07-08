import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import Notiflix from 'notiflix';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

const inputValue = document.querySelector('#datetime-picker');
const startButton = document.querySelector('[data-start]');
const daysCounter = document.querySelector('[data-days]');
const hoursCounter = document.querySelector('[data-hours]');
const minutesCounter = document.querySelector('[data-minutes]');
const secondsCounter = document.querySelector('[data-seconds]');

let intervalId;

startButton.setAttribute('disabled', '');
startButton.addEventListener('click', onStartBtnClick);
const fp = flatpickr(inputValue, {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    if (selectedDates[0] < Date.now()) {
      Notify.failure('Будь ласка, оберіть дату у майбутньому часі');
      // window.alert('Будь ласка, оберіть дату у майбутньому часі');
    } else {
      startButton.removeAttribute('disabled');
    }
  },
});

function pad(value) {
  return String(value).padStart(2, '0');
}

function updateTimer(field, value) {
  field.textContent = value;
}

function onStartBtnClick(event) {
  intervalId = setInterval(() => {
    const currentTime = Date.now();
    const deltaTime = fp.selectedDates[0] - currentTime;
    const { days, hours, minutes, seconds } = convertMs(deltaTime);

    if (deltaTime < 1000) {
      clearInterval(intervalId);
    }

    event.target.setAttribute('disabled', '');

    updateTimer(daysCounter, days);
    updateTimer(hoursCounter, hours);
    updateTimer(minutesCounter, minutes);
    updateTimer(secondsCounter, seconds);
  }, 1000);
}

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = pad(Math.floor(ms / day));
  // Remaining hours
  const hours = pad(Math.floor((ms % day) / hour));
  // Remaining minutes
  const minutes = pad(Math.floor(((ms % day) % hour) / minute));
  // Remaining seconds
  const seconds = pad(Math.floor((((ms % day) % hour) % minute) / second));

  return { days, hours, minutes, seconds };
}
