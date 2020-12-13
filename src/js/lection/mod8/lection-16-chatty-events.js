// chhaty events

//Приемы throtling and debouncing c Lodash

// ========== mousemove =============
const coordsoutputRef = document.querySelector('.js-coords');

let mouseMoveCallbackCounter = 0;

const throttledMouseCallback = _.throttle(event => {
  mouseMoveCallbackCounter += 1;

  coordsoutputRef.textContent = `Кол-во вызовов callback-функции: ${mouseMoveCallbackCounter}, X: ${event.clientX}, Y: ${event.clientY}`;
}, 100);

window.addEventListener('mousemove', throttledMouseCallback);

// ============== input ==================
// debounce

const inputRef = document.querySelector('.js-input');
const outputRef = document.querySelector('.js-output');

let inputCallbackCounter = 0;

const throttledInputCallback = _.debounce(event => {
  inputCallbackCounter += 1;

  outputRef.textContent = `Кол-во вызовов callback-функции: ${inputCallbackCounter}, Значение ${event.target.value}`;
}, 300);

inputRef.addEventListener('input', throttledInputCallback);
