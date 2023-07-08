import Notiflix from 'notiflix';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

const form = document.querySelector('.form');
const delay = document.querySelector('[name="delay"]');
const amount = document.querySelector('[name="amount"]');
const step = document.querySelector('[name="step"]');

form.addEventListener('submit', onSubmit);

function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const shouldResolve = Math.random() > 0.3;
      if (shouldResolve) {
        resolve({ position, delay });
      } else {
        reject({ position, delay });
      }
    }, delay);
  });
}

function onSubmit(event) {
  event.preventDefault();

  let amountValue = Number(amount.value);
  let stepValue = Number(step.value);
  let delayValue = Number(delay.value);

  for (let index = 1; index <= amountValue; index += 1) {
    createPromise(index, delayValue)
      .then(({ position, delay }) => {
        Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
        // for console
        console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
      })
      .catch(({ position, delay }) => {
        Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
        // for console
        console.log(`❌ Rejected promise ${position} in ${delay}ms`);
      });
    delayValue += stepValue;
  }
}
