function includes(array, value) {
  // Пиши код ниже этой строки

  for (const number of array) {
    if (number === value) {
      return true;
    }
  }
  return false;
  // Пиши код выше этой строки
}

console.log(includes([1, 2, 3, 4, 5], 3));

console.log(includes([1, 2, 3, 4, 5], 17)); //возвращает false
