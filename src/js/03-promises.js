import Notiflix from 'notiflix';

const inputDelay = form.elements.delay;
const inputDelayStep = form.elements.delay;
const inputAmount = form.elements.delay;
const btnCreatePromise = document.querySelector('button');

const position = inputAmount.value;
const delay = inputDelayStep.value + inputDelay.value;

btnCreatePromise.addEventListener('submit', createPromise);

function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
  if (shouldResolve) {
    Notiflix.Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
  } else {
    Notiflix.Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
  }
}

createPromise(position, delay)
  .then(({ position, delay }) => {
    console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
  })
  .catch(({ position, delay }) => {
    console.log(`❌Rejected promise ${position} in ${delay}ms`);
  });
