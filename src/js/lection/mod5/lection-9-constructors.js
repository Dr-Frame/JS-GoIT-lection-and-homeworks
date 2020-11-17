// что бы отлиить функцию конструктор от обычной функции

// функция конструктор пишеться с большой буквы и это именник а не диеслово.

//функция конструктор - это клас, схема с помощью которой будут создаваться наши обьекты.
// У всех обьектов будет одинаковый набор свойст НО с разными значениями.

/* const User = function (userName, userPower) {
  this.name = userName;
  this.power = userPower;
};

const mango = new User('John', 100); // єкземпляр - можем создать таких сколько угодно
console.log(mango);

const poly = new User('Gango', 200); // єкземпляр - можем создать таких сколько угодно
console.log(poly); */

// ==================  Function prototype ========================================================

// плохой способ добавления метода в функцию конструктор

/* const User = function (userName, userPower) {
  this.name = userName;
  this.power = userPower;

  this.sell = function () {
    this.power += 1;
  };
};

const mango = new User('John', 100); // єкземпляр - можем создать таких сколько угодно
console.log(mango);

mango.sell();
console.log(mango); */

//=================================================================================================
// оптимальный метод ( создать отдельный обьект с этой функцией и потом через __proto__ класть ссылку)

const User = function (userName, userPower) {
  this.name = userName;
  this.power = userPower;
};

const mango = new User('John', 100); // єкземпляр - можем создать таких сколько угодно
console.log(mango);
