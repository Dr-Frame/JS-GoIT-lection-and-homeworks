// методы join() , split()
// быстрый способ------------------------------------------------

/* const title = 'How to become best JS programmer ever';

const slug = title.toLowerCase().split(' ').join('-');
console.log(slug); */

// золотая середина ЛУЧШЕЕ РЕШЕНИЕ------------------------------------------

const title = 'How to become best JS programmer ever';

const words = title.toLowerCase().split(' ');
console.log(words);
const slug = words.join('-');
console.log(slug);


// join() РУКАМИ ДЛЯ ПРАКТИКИ ЛОГИКИ И ЦИКЛА for
//цикл for лишнее - в конце-----------------------------------------------------

/* const title = 'How to become best JS programmer ever';
const words = title.toLowerCase().split(' ');
let slug = '';
console.log('words before:' + words)

for (const word of words) {
  console.log(word)
  slug += word + '-'
}
console.log(slug); */

//цикл for правильный НЕ оптимизирован-----------------------------------------
/* 
const title = 'How to become best JS programmer ever';
const words = title.toLowerCase().split(' '); 
let slug = '';

for (let i = 0; i < words.length; i += 1) {
  console.log(words[i]);
  if (i !== words.length - 1) {
    slug += words[i] + '-';
  } else {
    slug += words[i]
  } 
}
console.log(slug); */

//цикл for правильный Оптимизирован-----------------------------------------

/* const title = 'How to become best JS programmer ever';
const words = title.toLowerCase().split(' ');
console.log(words)
let slug = '';

for (let i = 0; i < words.length; i += 1) {

  const isNotLastValue = i !== words.length - 1;
  slug += isNotLastValue ? words[i] + '-' : words[i];

}
console.log(slug) */