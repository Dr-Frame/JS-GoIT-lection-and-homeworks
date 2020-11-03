'use strict';

//Функции для перебора массива

/* const employees = ['Jack', 'Den', 'Luck', 'Rachel'];
const positions = [1, 2, 3, 4, 5];

const topWorkers = function (items) {
  for (const item of items) {
    console.log(item);
  }
};

topWorkers(employees);
topWorkers(positions); */


// Функция для поиска друзей

/* const friends = ['Jack', 'Den', 'Luck', 'Rachel'];
const friendToFind = 'Luck';

const findFriend = function (allFriends, name) {
  for (const friend of allFriends) {
    if (friend === name) {
      return 'мы нашли твоего друга';
    }
  }
  return 'у тебя нету такого друга';
}

const r1 = findFriend(friends, friendToFind);
const r2 = findFriend(friends, 'Don');

console.log(friends);
console.log(friendToFind);
console.log(r1);
console.log(r2); */

//альтернативная версия


const friends = ['Jack', 'Den', 'Luck', 'Rachel'];
const friendToFind = 'Luck';

const friendsFinder = function (allFriends, name) {

  allFriends.includes(name);
  console.log(name);

  // рабочий но плохой вариант
  /* if (allFriends.includes(name)) {
    return 'мы нашли друга';
  }
  return 'такого друга нету'; */

  return friendsFinder ? 'мы нашли друга' : 'такого друга нету';
}

const r1 = friendsFinder(friends, friendToFind);
console.log(r1);
