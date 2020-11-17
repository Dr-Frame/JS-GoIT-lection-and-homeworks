// прототипы

// прототип обьекта Object.create() создает прототип

// [[Prototype]] это в спецификации, в браузере __proto__
//Цепочка прототипов

const objB = {
  z: 10,
};

const objA = Object.create(objB);

objA.x = 1;
objA.y = 2;

console.log(objA);

console.log(objA.z);

console.log(objA.qwe);
