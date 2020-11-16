'use strict';
// функция это частный случай обекта -> ССЫЛОЧНЫЙ ТИП ===========================

console.log('[] === []: ', [] === []);
console.log('{} === {}: ', {} === {});

console.log(
  'function () {} = function () {}:',
  function () {} === function () {},
);

const fnA = function () {};
const fnB = fnA;
console.log(fnA === fnB);

//ПРАВИЛА запомнить  =============================================================
//Где и как была обьявлена функция НЕ ИМЕЕТ НИКАКОГО ВЛИЯНИЯ на контекст.
// Контекст определяется В МОМЕНТ ВЫЗОВА ФУНКЦИИ, если он не привязан явно.

//===============================================================
//Как метод обьекта. В контексте обьекта

const user = {
  tag: 'Mango',
  showTag() {
    console.log('this:', this);
    console.log('this.tag:', this.tag);
  },
};

user.showTag();

// без контекста ==========================================================

const foo = function () {
  console.log('this:', this);
};

foo();

//==========================================================================
// Как метод обьекта, но обьявлена как внешняя функция. В контексте обьекта.

const showTag = function () {
  console.log('this:', this);
  console.log('this.tag', this.tag);
};

const user2 = {
  tag: 'Mango',
};

user2.a = showTag;

user2.a();

//вызов без контекста, но обьявлена как метод обьекта (undefined и ошибка)

/* const user3 = {
  tag: 'Mango',
  showTag() {
    console.log('this:', this);
    console.log('this.tag:', this.tag);
  },
};

user3.showTag();

const abc = user3.showTag;

abc();
 */
// ==============================================================
//Контекст в callback - функциях  (undefined и ошибка)

const user4 = {
  tag: 'Mango',
  showTag() {
    console.log('this:', this);
    console.log('this.tag:', this.tag);
  },
};

const callbackFn = function (action) {
  console.log(action);

  action();
};

callbackFn(user4.showTag);

// Спрашивают на собесе (вернет ошибку, так как undefined cannot read) -
//функция вызвана без контекста, в this будет undefined
//=========================================================

const makeChangeColor = function () {
  const changeColor = function (color) {
    console.log(this);
    this.color = color;
  };

  const sweater = {
    color: 'teal',
  };

  sweater.changeColor = changeColor;
  return sweater.changeColor;
};

const changeColor = makeChangeColor();

changeColor('blue');

// Другой пример, функция вызвана с контекстом hat.
// this будет возвращать обьект hat, поэтому цвет изменится

const makeChangeColor = function () {
  const changeColor = function (color) {
    console.log(this);
    this.color = color;
  };
  return changeColor;
};
const hat = {
  color: 'blue',
  changeColor: makeChangeColor(),
};

hat.changeColor('orange');

console.log(hat);
