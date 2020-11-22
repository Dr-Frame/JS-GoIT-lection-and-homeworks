//Array.prototype.forEach()

// Поэлементно перебирает массив
// Ничего не возвращает
// Заменяет классический for, если не нужно прерывать цикл
// не изменяет оригинальный массив

const numbers = [1, 20, 40, 200, 50, 100];

numbers.forEach(function (element, index, array) {
  console.log(element);
  console.log(index);
  console.log(array);
});

/* let maxEach = 0;

numbers.forEach(function (element) {
  if (element > maxEach) {
    maxEach = element;
  }
  return maxEach;
});

console.log(maxEach); */

/* let max = 0;
const calc = function (array) {
  for (const item of array) {
    if (item > max) {
      max = item;
    }
  }
  return max;
};
console.log(calc(numbers)); */
