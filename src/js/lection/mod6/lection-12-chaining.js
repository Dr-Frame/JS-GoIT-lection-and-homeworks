// цепочка вызовов - chaining

const numbers = [1, 6, 3, 4, 5];

const greaterTwo = numbers.filter(function (num) {
  return num > 2;
});

//console.log(greaterTwo);

const multyThree = greaterTwo.map(function (num) {
  return num * 2;
});

//console.log(multyThree);

const sorted = multyThree.sort(function (prev, next) {
  return prev - next;
});

//console.log(sorted);

// ========================== применяем chaining ==================================

const res = numbers
  .filter(function (num) {
    return num > 2;
  })
  .map(function (num) {
    return num * 2;
  })
  .sort(function (prev, next) {
    return prev - next;
  });

console.log(res);

// сортируем тех кто онлайн по рангу ===============================

const players = [
  { id: 'player-1', name: 'Mango', timePlayed: 310, points: 54, online: true },
  { id: 'player-2', name: 'Iron', timePlayed: 420, points: 78, online: true },
  { id: 'player-3', name: 'Kiti', timePlayed: 50, points: 12, online: false },
  { id: 'player-4', name: 'Hulk', timePlayed: 280, points: 36, online: true },
  { id: 'player-5', name: 'Petta', timePlayed: 120, points: 26, online: false },
];

const onlyOnline = players.filter(function (array) {
  return array.online;
});

console.log(onlyOnline);

const sortedByRang = onlyOnline.sort(function (prev, next) {
  return prev.points - next.points;
});
console.table(sortedByRang);

// ========================== применяем chaining ==================================

const rang = players
  .filter(function (array) {
    return array.online;
  })
  .sort(function (prev, next) {
    return prev.points - next.points;
  });
console.table(rang);
