// находит только первый элемент, дальше не ищет
const titleRef = document.querySelector('.page-title');
console.log(titleRef);

const linkRef = document.querySelector('.nav__link');
console.log(linkRef);

//найти ВСЕ элементы которые удовлетворяют запрос

const linksRef = document.querySelectorAll('.nav__link');
console.log(linksRef);

// Свойство .textContent

titleRef.textContent = 'I have changed you';

const imageRef = document.querySelector('.hero-image');
console.dir(imageRef);

imageRef.alt = 'мой фотка';
imageRef.width = '400';

imageRef.src =
  'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__340.jpg';

//=============================================================

console.log(); // что бы посмотреть красиво как разметку
console.dir(); // что бы посмотреть содержимое как обьекта

console.log(imageRef.getAttribute('src'));
console.log(imageRef.getAttribute('alt'));

imageRef.setAttribute(
  'src',
  'https://i.pinimg.com/originals/2d/dc/25/2ddc25914e2ae0db5311ffa41781dda1.jpg',
);

imageRef.setAttribute('alt', 'мой ниггер');

console.log(imageRef.getAttribute('src'));
console.log(imageRef.getAttribute('alt'));
