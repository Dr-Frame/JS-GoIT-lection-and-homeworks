// Array.prototype.reduce();
// поэлементно перебирает массив
// Возвращает что угодно
// Заменяет все на свете, но использовать нужно с умом

const numbers = [5, 10, 15, 20, 25];

const total = numbers.reduce(function (accumuator, number) {
  console.log(accumuator);
  return accumuator + number;
}, 100); // число с кторое стартует accumulator
console.log(total);

// =================================== считаем общую зарплату =============================

const salary = {
  mango: 100,
  poly: 300,
  star: 200,
};

const totalSalary = Object.values(salary).reduce(function (accum, value) {
  return accum + value;
});

console.log('total salary: ', totalSalary);

// ===================================  считаем общее количество часов  ==============================

const players = [
  { id: 'player-1', name: 'Mango', timePlayed: 310, points: 54, online: false },
  { id: 'player-2', name: 'Iron', timePlayed: 420, points: 78, online: true },
  { id: 'player-3', name: 'Kiti', timePlayed: 110, points: 12, online: false },
  { id: 'player-4', name: 'Hulk', timePlayed: 280, points: 36, online: true },
  { id: 'player-5', name: 'Petta', timePlayed: 120, points: 26, online: false },
];

const totalTime = players.reduce(function (time, player) {
  return time + player.timePlayed;
}, 0);

console.log('total time: ', totalTime);

// ================================ считаем общую сумму товаров ===================================
const cart = [
  { prod: 'banan', price: 100, quantity: 5 },
  { prod: 'lemon', price: 200, quantity: 2 },
  { prod: 'fds', price: 300, quantity: 1 },
];

const totalCart = cart.reduce(function (accum, product) {
  /*   console.log(accum);
  console.log(product);
  console.log(product.price);
  console.log(product.quantity); */
  return accum + product.price * product.quantity;
}, 0);
console.log('total cart: ', totalCart);

// ============================== собираем все теги с твиттов =============================

const tweets = [
  { id: '10', likes: 20, tags: ['js', 'node.js'] },
  { id: '10', likes: 20, tags: ['html', 'css'] },
  { id: '10', likes: 20, tags: ['css', 'node.js', 'html'] },
  { id: '10', likes: 20, tags: ['css', 'node.js', 'jquerry'] },
  { id: '10', likes: 20, tags: ['css', 'js', 'html'] },
];

const allTags = tweets.reduce(function (tags, tweet) {
  tags.push(...tweet.tags); // на каждой итерации пушим в массив расспыленное свойство обьекта tags
  return tags;
}, []);

console.log(allTags);
// ["js", "node.js", "html", "css", "css", "node.js", "html", "css", "node.js", "jquerry", "css", "js", "html"]

// ================================= делаем статистику тегов ======================================

//  грязная версия (мутирует аргумнет который придет в accum)

const tagStats = allTags.reduce(function (accum, tag) {
  /* if (accum.hasOwnProperty(tag)) {
    accum[tag] += 1; //если тег уже есть в обьекте accum то мы добавляем 1 к количеству
    return accum;
  }
  accum[tag] = 1; // если тега нету, присваиваем значение 1. */

  // лаконичный код , используем тернарный оператор ======================
  accum[tag] = accum.hasOwnProperty(tag) ? accum[tag] + 1 : 1;
  return accum;
}, {});
console.log(tagStats);

// чистая версия (немного медленне грязной)

const clearTagStats = allTags.reduce(function (accum, tag) {
  return {
    ...accum,
    [tag]: accum.hasOwnProperty(tag) ? accum[tag] + 1 : 1,
  };
}, {});

console.log(clearTagStats);
