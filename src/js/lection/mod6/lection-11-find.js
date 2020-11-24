// Array.prototype.find()
// Поэлементно перебирает массив
// возвращает первый элемент удовлетворяющий условие или undefined

const numbers = [5, 10, 15, 20, 25];

// console.log(element);
// console.log(index);
// console.log(array);

const findNumber = numbers.find(function (n) {
  return n === 20;
});
console.log(findNumber);

const players = [
  { id: 'player-1', name: 'Mango', timePlayed: 310, points: 54, online: false },
  { id: 'player-2', name: 'Iron', timePlayed: 420, points: 78, online: true },
  { id: 'player-3', name: 'Kiti', timePlayed: 60, points: 12, online: false },
  { id: 'player-4', name: 'Hulk', timePlayed: 280, points: 36, online: true },
  { id: 'player-5', name: 'Petta', timePlayed: 120, points: 26, online: false },
];

const toFind = 'player-3';
const finder = players.find(function (player) {
  return toFind === player.id;
});

console.log(finder);
