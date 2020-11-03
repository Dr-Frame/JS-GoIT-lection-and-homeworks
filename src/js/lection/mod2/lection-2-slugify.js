// Делаем слаг в сыылке

const slugify = function (string) {
  const words = string.toLowerCase().split(' ');
  const slug = words.join('-');

  return slug;
}

/* const slug1 = slugify('Best worker in the room');
console.log(slug1);

const slug2 = slugify('Worst muther*****r in the room');
console.log(slug2);  */

const articles = ['Best worker in the room', 'Worst muther*****r in the room', 'Bla bla car is shit', 'Why you should marry me']

const slugs = [];

for (const article of articles) {
  const slug = slugify(article);
  slugs.push(slug);
} 

console.log(slugs);
