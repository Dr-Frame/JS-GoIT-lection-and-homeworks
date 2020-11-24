const players = [
  { id: 'player-1', name: 'Mango', timePlayed: 310, points: 54, online: false },
  { id: 'player-2', name: 'Iron', timePlayed: 420, points: 78, online: true },
  { id: 'player-3', name: 'Kiti', timePlayed: 110, points: 12, online: false },
  { id: 'player-4', name: 'Hulk', timePlayed: 280, points: 36, online: true },
  { id: 'player-5', name: 'Petta', timePlayed: 120, points: 26, online: false },
];

// ===============================  every() =========================
// Array.prototype.every()
// Поэлементно перебирает массив
// Возвращает true если все элементы массива удовлетворяют условие

const isAllOnline = players.every(function (player) {
  return player.online;
});

console.log(isAllOnline);

const isAllPlayed100 = players.every(function (player) {
  return player.timePlayed > 100;
});

console.log(isAllPlayed100);

// ===============================  some() =============================
// Array.prototype.some()
// Поэлементно перебирает массив
// Возвращает true если хотя бы один элемент массива удовлетворяет условие

const isSomeOnline = players.some(function (player) {
  return player.online;
});
console.log(isSomeOnline);

const isAnyHardPlayer = players.some(function (player) {
  return player.timePlayed > 400;
});
console.log(isAnyHardPlayer);
