// что бы отличить функцию конструктор от обычной функции

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

// плохой способ добавления метода в функцию конструктор (функция будет в каждом экземпляре, занимает память)

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

User.prototype.powerAdd = function () {
  this.power += 10;
};

User.prototype.changeName = function (name) {
  this.name = name;
};

const mango = new User('John', 100);
console.log(mango);

mango.powerAdd();

mango.changeName('Hulk');

console.log(mango);

// на функции конструктора , мы говорим, какие функции мы хотим положить в будущие обьекты(экземпляры)
// а на свойство .prototype мы кладем методы(функции), кторые потом будут доступны по ссылке каждому обьекту(экземпляру)

//ВАЖНО!!
// свойство обьекта __proto__
// свойство функции prototype
