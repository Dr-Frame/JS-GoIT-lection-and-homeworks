// Пиши код ниже этой строки
function findMatches(arr, ...args) {
  const matches = []; // Не изменяй эту строку

  for (const number of args) {
    if (arr.includes(number)) {
      matches.push(number);
    }
  }
  return matches;
}

console.log(findMatches([4, 89, 17, 36, 2], 8, 17, 89, 27, 2));
