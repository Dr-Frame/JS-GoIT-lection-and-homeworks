const numbers = [1, 2, 3, 8, 5, 6];

/* const greater = numbers.filter(function (num) {
  return num > 5;
}); */

// стрелками

const greater = numbers.filter(num => num > 5);

console.log(greater);

//======================================================================

/* const sorted = numbers.sort(function (a, b) {
  return b - a;
}); */

const sorted = numbers.sort((a, b) => b - a);
console.log(sorted);

//=================================================================

/* const res = numbers
  .filter(function (num) {
    return num > 3;
  })
  .map(function (num) {
    return num * 3;
  })
  .sort(function (a, b) {
    return b - a;
  }); */

const res = numbers
  .filter(num => num > 3)
  .map(num => num * 3)
  .sort((a, b) => b - a);
console.log(res);

//===========================================================

const players = [
  { id: 'player-1', name: 'Mango', timePlayed: 310, points: 54, online: false },
  { id: 'player-2', name: 'Iron', timePlayed: 420, points: 78, online: true },
  { id: 'player-3', name: 'Kiti', timePlayed: 110, points: 12, online: false },
  { id: 'player-4', name: 'Hulk', timePlayed: 280, points: 36, online: true },
  { id: 'player-5', name: 'Petta', timePlayed: 120, points: 26, online: false },
];

/* const onlineAndSorted = players
  .filter(function (player) {
    return player.online;
  })
  .sort(function (prevPlayer, nextPlayer) {
    return prevPlayer.points - nextPlayer.points;
  }); */

const onlineAndSorted = players
  .filter(player => player.online)
  .sort((prevPlayer, nextPlayer) => prevPlayer.points - nextPlayer.points);

console.table(onlineAndSorted);

//=================================================================================

/* const newPoints = players.map(function (player) {
  return {
    ...player,
    points: player.points + player.points * 0.1,
  };
}); */

const newPoints = players.map(player => ({
  ...player,
  points: player.points + player.points * 0.1,
}));

console.table(newPoints);

//============================================================================

/* const findId = 'player-4';
const idAddPoint = players.map(function (player) {
  if (player.id === findId) {
    return {
      ...player,
      points: player.points + 1000,
    };
  }
  return player;
}); */

// 1 компромисное решение
/* const findId = 'player-4';
const idAddPoint = players.map(player => {
  return player.id === findId
    ? { ...player, points: player.points + 1000 }
    : player;
}); */

// решение чувака на скиле

const findId = 'player-4';
const idAddPoint = players.map(player =>
  player.id === findId ? { ...player, points: player.points + 1000 } : player,
);

console.table(idAddPoint);
