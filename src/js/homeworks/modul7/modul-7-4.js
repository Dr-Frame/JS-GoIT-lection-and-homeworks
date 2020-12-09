const btnDecrRef = document.querySelector('button[data-action="decrement"]');
const btnIncrRef = document.querySelector('button[data-action="increment"]');

let counterValue = document.querySelector('#value');

btnIncrRef.addEventListener('click', onBtnIncrement);
btnDecrRef.addEventListener('click', onBtnDecrement);

function onBtnIncrement(event) {
  counterValue.textContent = Number(counterValue.textContent) + 1;
}
function onBtnDecrement(event) {
  counterValue.textContent = Number(counterValue.textContent) - 1;
}
