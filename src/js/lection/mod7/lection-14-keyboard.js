// типы событий: keypress, keydown, keyup
// ограниченная  keypress
// Свойства обьекта события клавиатуры

window.addEventListener('keypress', event => {
  //обрабатывает клавиши только со значениями, служебные не реагируют
  console.log(event);
});

window.addEventListener('keydown', event => {
  //обрабатывает все клавиши, в том числе и служебные
  console.log(event);
});

//=======================================
const outputRef = document.querySelector('.js-output');
const btnClearRef = document.querySelector('.js-clear');

window.addEventListener('keypress', onKeypress);
btnClearRef.addEventListener('click', onClearOutput);

function onClearOutput() {
  outputRef.textContent = '';
}
function onKeypress(event) {
  outputRef.textContent += event.key;
}
