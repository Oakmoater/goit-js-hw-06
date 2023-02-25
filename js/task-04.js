const counter = document.querySelector('#counter');
const value = document.querySelector('#value');
const decrementBtn = document.querySelector('button[data-action="decrement"]');
const incrementBtn = document.querySelector('button[data-action="increment"]');

let counterValue = 0;

const decrementHandler = () => {
  counterValue -= 1;
  value.textContent = counterValue;
};
const incrementHandler = () => {
  counterValue += 1;
  value.textContent = counterValue;
};
decrementBtn.addEventListener('click', decrementHandler);
incrementBtn.addEventListener('click', incrementHandler);

