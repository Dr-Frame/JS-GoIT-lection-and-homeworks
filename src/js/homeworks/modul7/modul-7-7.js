const inputRef = document.querySelector('#font-size-control');
const textRef = document.querySelector('#text');

inputRef.max = 30;
inputRef.min = 16;
inputRef.value = 0;

inputRef.addEventListener('input', onInputSizeChange);

function onInputSizeChange(event) {
  textRef.setAttribute('style', `font-size:${event.target.value}px`);
}
