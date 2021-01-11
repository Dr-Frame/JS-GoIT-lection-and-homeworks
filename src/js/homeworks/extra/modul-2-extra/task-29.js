function getEvenNumbers(start, end) {
  // Пиши код ниже этой строки
  let evenArr = [];
  for (let i = start; i <= end; i += 1) {
    if (i % 2 === 0) {
      evenArr.push(i);
    }
  }
  return evenArr;

  // Пиши код выше этой строки
}
