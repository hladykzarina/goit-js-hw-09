import Notiflix from 'notiflix';

const elements = {
  form: document.querySelector('.form'),
  delay: document.querySelector('input[name="delay"]'),
  step: document.querySelector('input[name="step"]'),
  amount: document.querySelector('input[name="amount"]'),
};

function submit(evt) {
  evt.preventDefault();
  const delay = Number(elements.delay.value);
  const step = Number(elements.step.value);
  const amount = Number(elements.amount.value);
  let position;
  for (let i = 1; i <= amount; i += 1) {
    createPromise(i, delay);
  }
}

function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      if (shouldResolve) {
        resolve({ position, delay });
      } else {
        reject({ position, delay });
      }
    }, delay);
  });
  promise
    .then(({ position, delay }) => {
      Notiflix.Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
    })
    .catch(({ position, delay }) => {
      Notiflix.Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
    });
}

elements.form.addEventListener('submit', submit);
