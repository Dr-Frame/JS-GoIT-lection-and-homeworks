//Псевдомассив arguments и Array.from

// создание массива из псевдомассива arguments 1 вариант---------------------------------

/* const add = function () {
  console.log(arguments);

  const args = Array.from(arguments);

  console.log(args);
}

add(1, 2, 3, 4); */

// вариант №2 - его сипользовать----------------------------------------------

/* const add = function (...variableName) {
  console.log(variableName);
  let total = 0;

  for (const name of variableName) {
    total += name;
  }
  return total;
};

console.log(add(1, 2, 3, 4));

console.log(add(1, 2, 3, 4, 30, 40, 1)); */

// Функция прикрепления тега к строке-------------------------------------------------------

/* const posts = ['post-1', 'post-2', 'post-3', 'post-4', 'post-5'];
const tag = '#Boobsrules';

const postsWithTag = [];

for (const post of posts) {
  postsWithTag.push(`${post}${tag}`);
}

console.log(postsWithTag); */

// Функция разбить массив на тег и посты----------------------------------------------------------

const addTag = function (tag, ...args) {
  console.log(tag);
  console.log(args);

  const postsWithTag = [];
  for (const arg of args) {
    postsWithTag.push(`${ tag} ${ arg }`);
  }
  return postsWithTag;
  
}

console.log(addTag('#jquery', 'post-1', 'post-2', 'post-3'));

console.log(addTag('#boobs', 'post-1', 'post-2', 'post-3', 'post-4',));

console.log(addTag('#pussy', 'post-1', 'post-2', 'post-3','post-5'));

