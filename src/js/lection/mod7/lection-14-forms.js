//Событие submit
// действия браузера по умолчанию
// Свойство elements
//класс FormData -

const formRef = document.querySelector('.js-register-form');

formRef.addEventListener('submit', event => {
  event.preventDefault(); //что бы предотвратить перезагрузку страницы во время нажатия кнопки
  console.log('submit');

  // как получить все значения форм, не используя на каждый элемент .querySelector

  const formElements = event.target.elements; //что бы получить ссылки на элемент формы
  console.log(formElements.email.value); //получаем значение
  console.log(formElements.subscription.value);

  // если допустим надо отправить обьект данных на бекэнд
  const formData = {
    name: formElements.name.value,
    email: formElements.email.value,
    password: formElements.password.value,
    subscription: formElements.subscription.value,
  };
  console.log(formData);

  //=============================      оптимальный вариант     ===================================
  const formRef = event.target;
  const formInfo = new FormData(formRef);

  const submitData = {};
  formInfo.forEach((value, key) => {
    console.log('value: ', value);
    console.log('key: ', key);

    submitData[key] = value;
  });

  console.log(submitData);
});
