// Write code under this line
const addIndex = (element, index) => element + index;
// Write code under this line
const subIndex = (element, index) => element - index;

function mapArray(array, cb) {
  'use strict';
  // Write code under this line
  const numbers = new Array(array.length); //пустой массив с 5 элементами
  console.log(numbers);
  for (let i = 0; i < array.length; i += 1) {
    const element = array[i]; //1  /2  /3  /4 /5
    const index = i; //0  /1  /2 /3 /4
    numbers[i] = cb(element, index); // (первая итерация) первый элемент масива равен = addIndex , то есть 1+0 = 1 , (вторая) 1+2 = 3, (третья) 3+2=5, (четвертая) 4+3=7, (пятая) 4+5=9
  }
  return numbers;
}

const arr = [1, 2, 3, 4, 5];

console.log(mapArray(arr, addIndex));
// [1, 3, 5, 7, 9]

console.log(mapArray(arr, subIndex));
// [1, 1, 1, 1, 1]

//=================================== Callback функция ==================================
/* Функция mapArray(array, cb), принимает 1-м параметром array - массив чисел, а вторым параметром cb - функцию обратного вызова (callback). Функция mapArray создает новый массив numbers и заполняет его числами из массива array преобразованными функцией cb.

Оформи создание массива numbers нужной длины используя new Array () и необходимый аргумент для задания длины, равной длине array.

Напиши функцию обратного вызова addIndex , которая принимает два параметра - element и index и возвращает число - сумму element и index (сложение).

Напиши функцию обратного вызова subIndex , которая принимает два параметра - element и index и возвращает число - разность element и index (вычитание). */
