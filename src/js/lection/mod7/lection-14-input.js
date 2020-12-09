// События input change
// Чекбоксы и свойство checked

const inputRef = document.querySelector('.js-input');
const btnLabelRef = document.querySelector('.js-button > span');

// change работает только после того как сняли фокус с input
/* inputRef.addEventListener('change', event => {
  btnLabelRef.textContent = event.target.value;
}); */

// если мы хотим сделать более живое, заменяем change на input
inputRef.addEventListener('input', event => {
  btnLabelRef.textContent = event.target.value;
});

//==================    checkbox   ========================

const checkboxRef = document.querySelector('.js-license');
const btnRef = document.querySelector('.js-button');

checkboxRef.addEventListener('change', event => {
  console.log(event);

  btnRef.disabled = !event.target.checked;
  //когда кнопка checked получаем значение true, что бы снять disabled нужно добавить ! для того, что бы true приняло false.
  console.log(btnRef.disabled);
});

//=================================== focus и blur   ============================

inputRef.addEventListener('focus', event => {
  console.log('получили фокус');
});

inputRef.addEventListener('blur', event => {
  console.log('сняли фокус');
});

//============================ рефакторинг кода =============================

/* const inputRef = document.querySelector('.js-input');
const btnLabelRef = document.querySelector('.js-button > span');
const checkboxRef = document.querySelector('.js-license');
const btnRef = document.querySelector('.js-button');

inputRef.addEventListener('input', handleInputChange);
checkboxRef.addEventListener('change', handleCheckBoxChange);
inputRef.addEventListener('focus', handleInputFocus);
inputRef.addEventListener('blur', handleInputUnFocus);

function handleInputChange(event) {
  btnLabelRef.textContent = event.target.value;
}
function handleCheckBoxChange(event) {
  btnRef.disabled = !event.target.checked;
}
function handleInputFocus(event) {
  console.log('получили фокус');
}
function handleInputUnFocus(event) {
  console.log('сняли фокус');
} */
