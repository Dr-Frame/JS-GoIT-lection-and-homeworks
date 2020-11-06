//Обьекты--------------------------

const hero = {
  name: 'Hulk',
  power: 200,
  durability: 10,
}

console.log(hero);
console.log(hero.name);
console.log(hero['name']);

const key = 'power';

console.log(hero[key]);

hero.power = 300;
hero.armor = 'gold';

console.log(hero.power);
console.log(hero.armor)


// ссылочный тип {}==={}    -----------------------------

const a = { x: 1, y: 2 };
const b = a;

a.z = 5;
console.log(a);
console.log(b === a);

//Массивы и функции = обьекты

const arr = [1, 2, 3, 4, 5];
arr.hello = 'helo';
console.log(arr);

const fn = function () { };
fn.hello = 'helo';

console.log(fn.hello);

// методы обьекта и this при обращении к свойтствам в методах

const hotel = {
  name: 'BeachBoy',
  capacity: 200,
  stars: 5,
  //старый синтаксис
  /* changeHotelName: function (newName) {
    this.name = newName;
    console.log(this.name);
  } */

  // новый синтаксис ПИСАТЬ ТАК

  changeHotelName(newName) {
    this.name = newName;
    console.log(this.name);

    this.newMethod();
  },

  newMethod() {
    console.log('hello from another method')
  }
};

hotel.changeHotelName('Marvel Hotel');

// перебор через for...in Object.keys|values|entries

const feedback = {
  good: 10,
  bad: 5,
  neutral: 9
}

let sumOfReviews = 0;

// Олдскул метод
/* for (const keyPath in feedback) {
  console.log(keyPath);
  console.log(feedback[keyPath]);

  sumOfReviews += feedback[keyPath];
}
console.log(sumOfReviews); */

// применение Object.keys если нужно провести манипуляцию с ключами---------------------------------------------
const keysQuantaty = Object.keys(feedback);

console.log(keysQuantaty);
console.log(keysQuantaty.length);

for (const key of keysQuantaty) {
  console.log(key);
  console.log(feedback[key]);

  sumOfReviews += feedback[key];

}

console.log(sumOfReviews);

// Применение Object.values когда нужно сделать что-то со значениями обьектов -----------------------------------------

const keysValue = Object.values(feedback);

let totalValue = 0;
console.log(keysValue);
for (const value of keysValue) {
  totalValue += value;
};

console.log('total: ', totalValue);