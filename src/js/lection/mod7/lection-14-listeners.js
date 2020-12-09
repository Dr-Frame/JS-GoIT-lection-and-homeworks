// События и удаление слушателей
// Ссылочная идентичность колбеков
// Обьект события

const btnTargetRef = document.querySelector('.js-target-btn');
const btnAddListener = document.querySelector('.js-add-listener');
const btnRemoveListener = document.querySelector('.js-remove-listener');

/* btnTargetRef.addEventListener('click', () => {
  console.log('Hello Bro');
}); */

// вешаем слушетель при клике на другой батон

const clickAction = () => {
  console.log('clicked mufuck');
};

btnAddListener.addEventListener('click', () => {
  btnTargetRef.addEventListener('click', clickAction);
});

btnRemoveListener.addEventListener('click', () => {
  btnTargetRef.removeEventListener('click', clickAction);
});

// если нжно достучаться к элементу во время события юзать .target  - дает ссылку как .querySelector

btnTargetRef.addEventListener('click', event => {
  console.log(event.target);
});
