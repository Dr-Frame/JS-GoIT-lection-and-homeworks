// Array.prototype.map()
// Поэлементно перебирает массив
// Возвращает новый массив такой же длины
// не изменяет оригинальный массив

const numbers = [5, 10, 15, 20, 25];

// console.log(element);
// console.log(index);
// console.log(array);

const newNumbers = numbers.map(function (element, index, array) {
  console.log(element);
  //console.log(index);
  //console.log(array);
  return index;
});

console.log(newNumbers); // [0,1,2,3,4]

const players = [
  { id: 'player-1', name: 'Mango', timePlayed: 310, points: 54, online: false },
  { id: 'player-2', name: 'Iron', timePlayed: 420, points: 78, online: true },
  { id: 'player-3', name: 'Kiti', timePlayed: 60, points: 12, online: false },
  { id: 'player-4', name: 'Hulk', timePlayed: 280, points: 36, online: true },
  { id: 'player-5', name: 'Petta', timePlayed: 120, points: 26, online: false },
];

// Получаем массив всех игроков

const playerNames = players.map(function (player) {
  return player.name;
});
console.log(playerNames);

// увеличиваем очки игроков

const addPlayerPoints = players.map(function (player) {
  return { ...player, points: player.points + player.points * 0.1 };
});
console.table(addPlayerPoints);

// увеличение кол-во часов игрока по id

const playerToFind = 'player-4';
const updatedPlayers = players.map(function (player) {
  if (player.id === playerToFind) {
    return { ...player, timePlayed: player.timePlayed + 50 };
  }
  return { ...player };
});
console.table(updatedPlayers);
console.table(players);
