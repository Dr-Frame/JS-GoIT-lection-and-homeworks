function filterArray(numbers, value) {
  // Пиши код ниже этой строки
  let newArr = [];
  for (const number of numbers) {
    if (number > value) {
      newArr.push(number);
    }
  }
  return newArr;
  // Пиши код выше этой строки
}

console.log(filterArray([1, 2, 3, 4, 5], 3));
//возвращает [4, 5]
