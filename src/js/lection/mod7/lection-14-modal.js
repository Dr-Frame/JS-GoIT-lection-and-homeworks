// открыть и закрыть по кнопке
// Закрыть по клику в бекдроп
// Закрыть по ESC

// дата атрибут вспомогательный атрибут по которому можно сделать выбор
//data-blabla = 'fdsfs';

const openModalBtnRef = document.querySelector(
  'button[data-action="open-modal"]',
);
const closeModalBtnRef = document.querySelector(
  'button[data-action="close-modal"]',
);
const backdropRef = document.querySelector('.js-backdrop');

openModalBtnRef.addEventListener('click', onModalOpen);
closeModalBtnRef.addEventListener('click', onModalClose);
backdropRef.addEventListener('click', onBackDropClick);

function onModalOpen() {
  window.addEventListener('keydown', onPressEvent);
  document.body.classList.add('show-modal');
}
function onModalClose() {
  document.body.classList.remove('show-modal');
}
function onBackDropClick(event) {
  console.log('event.target: ', event.target); // то на что буквально нажали
  console.log('event.currentTarget: ', event.currentTarget);
  // то где это словили, где буквально ивентлистенер стоит
  if (event.target === event.currentTarget) {
    onModalClose();
  }
}
function onPressEvent(event) {
  if (event.code === 'Escape') {
    onModalClose();
    console.log('Надо закрыть, нажали ESC');
  }
}
