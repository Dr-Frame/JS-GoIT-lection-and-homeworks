const inputRef = document.querySelector('#validation-input');
const valueRef = document.querySelector('input[data-length="6"]');

inputRef.addEventListener('blur', event => {
  if (event.target.value.length === Number(event.target.dataset.length)) {
    // как вариант inputRef.getAttribute('data-length')
    inputRef.classList.add('valid');
    inputRef.classList.remove('invalid');
  } else {
    inputRef.classList.add('invalid');
    inputRef.classList.remove('valid');
  }
});
