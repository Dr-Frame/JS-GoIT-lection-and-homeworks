// стрелочные функции

// если параметров несколько

const add = (a, b) => {
  return a + b;
};

console.log(add(5, 11));

// если параметр один

const addone = message => {
  return console.log(message);
};
addone('fdsfdsfds');

// если параметра нету

const noPar = () => {
  console.log('hrello');
};

noPar();

// явный и не явный возврат

//явный (implicit)
/* const addone = message => {
  return console.log(message);
}; */

// не явный (explicit)
const addone1 = (a, b) => a + b;

addone1('fdsfdsfds');

// Псевдомассив arguments

const addArgs = (...args) => {
  console.log(args);
};
addArgs(1, 2, 3, 1, 4);

/* const argsFn = function () {
  console.log(arguments);
};

argsFn(5, 1, 5, 4, 6, 8); */
