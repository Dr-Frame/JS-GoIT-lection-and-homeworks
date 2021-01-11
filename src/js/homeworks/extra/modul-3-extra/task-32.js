// Пиши код ниже этой строки

function addOverNum(maxNumber, ...args) {
  console.log(maxNumber);
  console.log(args);
  let total = 0;
  for (const number of args) {
    if (number > maxNumber) {
      total += number;
    }
  }
  return total;
}

console.log(addOverNum(10, 12, 4, 11, 48, 10, 8));
