//div
// создать функцию которая внутри создает дивы. она в параметре принимает число , которое будет стоят в цикле.
// получится что то типа, фор работает столько раз сколько число,
// позволяя создавать сколько нужно дивов

const inputRef = document.querySelector('#enter');
const createBtnRef = document.querySelector('#create');
const clearBtnRef = document.querySelector('#clear');
const boxesDivRef = document.querySelector('#boxes');
const inputRefValue = document.querySelector('#enter');

createBtnRef.addEventListener('click', () => {
  createBoxes(inputRef.value);
});

clearBtnRef.addEventListener('click', () => {
  clearsBox();
  inputRef.value = '';
});

function createBoxes(amount) {
  clearsBox();
  let boxesContainer = [];
  for (let i = 0; i < amount; i += 1) {
    const generatedDiv = document.createElement('div');
    //добавляем рандом RGB
    generatedDiv.style.backgroundColor = randomGenerator(0, 360);
    //управляем размерами бокса
    let basicWidth = 30;
    let basicHeight = 30;
    generatedDiv.style.width = `${basicWidth + i * 10}px`;
    generatedDiv.style.height = `${basicHeight + i * 10}px`;
    //добавляем в div массив
    boxesContainer.push(generatedDiv);
    //boxesDivRef.appendChild(generatedDiv); // добавляет поэлементно, страдает производительность
  }
  boxesDivRef.append(...boxesContainer);
}

function clearsBox() {
  while (boxesDivRef.firstChild) {
    boxesDivRef.removeChild(boxesDivRef.firstChild);
  }
}

function randomGenerator(min, max) {
  let rgbRandomNumbers = [];
  for (let i = 0; i < 3; i += 1) {
    min = Math.ceil(min);
    max = Math.floor(max);
    let randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
    rgbRandomNumbers.push(randomNumber);
  }
  return `rgb(${[...rgbRandomNumbers]})`;
}
