// Array.prototype.sort()
// Сортирует и изменяет оригинальный массив

const numbers = [1, 2, 3, 5, 6, 7, 9];

numbers.sort();

console.log(numbers);

// для сортировки в обратном порядке

numbers.sort(function (prev, next) {
  return next - prev;
});
console.log(numbers);

//

// сортировка массива, его элемента

const players = [
  { id: 'player-1', name: 'Mango', timePlayed: 310, points: 54, online: false },
  { id: 'player-2', name: 'Iron', timePlayed: 420, points: 78, online: true },
  { id: 'player-3', name: 'Kiti', timePlayed: 50, points: 12, online: false },
  { id: 'player-4', name: 'Hulk', timePlayed: 280, points: 36, online: true },
  { id: 'player-5', name: 'Petta', timePlayed: 120, points: 26, online: false },
];

// если нельзя изменять исходный массив
// const newPlayers = [...players].sort(function (prevPlayer, nextPlayer)

players.sort(function (prevPlayer, nextPlayer) {
  // по возрастанию свойства
  //return prevPlayer.timePlayed - nextPlayer.timePlayed;

  // по убыванию
  return nextPlayer.timePlayed - prevPlayer.timePlayed;
});

console.table(players);
