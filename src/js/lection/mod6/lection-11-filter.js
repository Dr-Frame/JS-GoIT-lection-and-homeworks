// Array.prototype.filter()
// Поэлементно перебирает оригинальный массив
// Добавляет в возращаемый массив элементы которые удовлетворяют условие
// не изменяет оригинальный массив

const numbers = [5, 10, 15, 20, 25];

// console.log(element);
// console.log(index);
// console.log(array);

const filteredNumbers = numbers.filter(function (number) {
  return number > 10;
});

console.log(filteredNumbers);

const players = [
  { id: 'player-1', name: 'Mango', timePlayed: 310, points: 54, online: false },
  { id: 'player-2', name: 'Iron', timePlayed: 420, points: 78, online: true },
  { id: 'player-3', name: 'Kiti', timePlayed: 60, points: 12, online: false },
  { id: 'player-4', name: 'Hulk', timePlayed: 280, points: 36, online: true },
  { id: 'player-5', name: 'Petta', timePlayed: 120, points: 26, online: false },
];

// ищем игроков онлайн
const playerOnline = players.filter(function (player) {
  return player.online;
});

console.table(playerOnline);

// ищем игроков оффлайн

const playerOffline = players.filter(function (player) {
  return !player.online;
});

console.table(playerOffline);

//ищем игроков больше 200 часов

const playerSkilled = players.filter(function (player) {
  return player.timePlayed > 200;
});

console.table(playerSkilled);
