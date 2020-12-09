//для скрытия - свой код

const btnToHideRef = document.querySelector('.js-btn-hide');
const divListenersRef = document.querySelector('.listeners');

btnToHideRef.addEventListener('click', () => {
  divListenersRef.classList.toggle('is-hidden');
  if (divListenersRef.classList.contains('is-hidden')) {
    btnToHideRef.textContent = 'Открыть секцию слушателя событий';
  } else {
    btnToHideRef.textContent = 'Скрыть секцию слушателя событий';
  }
});

const btnToHideFormRef = document.querySelector('.js-btn-hide-form');
const divSubmitFormRef = document.querySelector('.form-submit');

btnToHideFormRef.addEventListener('click', () => {
  divSubmitFormRef.classList.toggle('is-hidden');
  if (divSubmitFormRef.classList.contains('is-hidden')) {
    btnToHideFormRef.textContent = 'Открыть секцию сабмита формы';
  } else {
    btnToHideFormRef.textContent = 'Скрыть секцию сабмита формы';
  }
});
