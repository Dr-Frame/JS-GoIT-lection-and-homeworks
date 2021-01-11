function getCommonElements(array1, array2) {
  // Пиши код ниже этой строки
  let arr = [];
  for (const number of array1) {
    if (array2.includes(number)) {
      arr.push(number);
    }
  }
  return arr;

  // Пиши код выше этой строки
}

console.log(getCommonElements([10, 20, 30, 40], [4, 30, 17, 10, 40]));
