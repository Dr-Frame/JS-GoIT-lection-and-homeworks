// деструктуризация обьекта-----------------------------------------------------

const hero = {
  name: 'Hulk',
  age: 30,
  armor: 'gold'
}

/* const { name, age, armor } = hero;

console.log(name, age, armor) */
// если нету значения у свойства обьекта, ставим при деструктуризации дефолтное значение

const { name = 'vasya', age, health = 100 } = hero;
console.log(name, age, health)


// деструктуризация в параметре 
// первый вариант

/* const heroInfo = function (heroAr) {
  const { name, age, armor } = heroAr;
  console.log(name);
  console.log(age);
  console.log(armor);
};
 */

//второй вариант
const heroInfo = function ({name, age, armor}) {
  console.log(name);
  console.log(age);
  console.log(armor);
};

heroInfo(hero);

// если при деструктуризации нужно дать другое имя переменной 

const { name: heroName} = hero;
console.log(heroName);


// глубокая деструктуризация--------------------------------
const profile = {
  nickname: 'Dwayne Jones',
  tag: 'The Rock',
  location: 'Kiex, Ukraine',
  logo: 'some link',
  stats: {
    followers: 5603,
    views: 4851,
    likes: 1300,
  }
};

// вариант с двумя строками 

// вариант с одной строкой

/* const { nickname, tag, location, logo, stats: {followers, views, likes}} = profile;
console.log(nickname, tag, location, logo, followers, views, likes); */


// деструктуризация массива 

const rgb = [545, 451, 205];
const [red, green, blue] = rgb;
console.log(red, green, blue);

// если нужно взять несколько переменніх, остальное в одну переменную

const { nickname, tag, ...restProp } = profile;
console.log(nickname, tag);
console.log(restProp);