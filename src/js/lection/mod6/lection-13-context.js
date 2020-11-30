// у стрелочной функции нету своего .this
// this определяется не в момент вызова, а в момент ее обьявления ( обычной функции наоборот)

const showThis = () => {
  console.log('this: ', this);
};

showThis();

const user = {
  name: 'Mango',
};

user.showContext = showThis;

user.showContext();

//======================

const hero = {
  name: 'Hulk',
  heroFn() {
    console.log('this: ', this);
    console.log('this.name: ', this.name);

    // создадим функцию внутри , обычную
    const inner = function () {
      console.log('this: ', this);
    };
    inner();
    // вернет undefined, так как вызвана без контекста;

    const innerArrow = () => {
      console.log('this: ', this);
    };
    innerArrow();
    // вернет this:  {name: "Hulk", heroFn: ƒ}, так как стрелочная функция берет
    // контекст во время обьявления ( обявлена внутри heroFn) и ссылаться будет на hero
  },
};

hero.heroFn();

// стрелки как методы обьекта НЕ ИСПОЛЬЗОВАТЬ!!!

/* const heroArrow = {
  name: 'Lox',
  showLox: () => {
    console.log('this: ', this); // undefined потому что heroArrow обьявлен в глобальной области видимости
    console.log('this.name: ', this.name);
  },
};

heroArrow.showLox(); */

// если применить bind() работать тоже не будет
/* const bindHeroArrow = heroArrow.showLox.bind(heroArrow);

bindHeroArrow(); */

//=====================================
//стрелочная функция не может быть конструктором

/* const User = function (name) {
  this.name = name;
};

console.log(new User('Mango')); // работает */

// а теперь стрелка

const User = name => {
  this.name = name;
};

console.log(new User('Mango'));
