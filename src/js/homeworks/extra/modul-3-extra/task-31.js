// Пиши код ниже этой строки
function add(...args) {
  let total = 0;
  for (const number of args) {
    total += number;
  }
  return total;
  // Пиши код выше этой строки
}

console.log(add(12, 4, 11, 48));
