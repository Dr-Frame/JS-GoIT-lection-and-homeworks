const Hero = function (name, power, hp) {
  this.name = name;
  this.power = power;
  this.hp = hp;
};

Hero.prototype.skill = function (skillName) {
  this.skill = skillName;
};

const hulk = new Hero('Hulk', 500, 1000);
console.log(hulk);

hulk.skill('Hulkbuster');
console.log(hulk);

// Статические свойства и методы недоступны экземплярам ( не могут получить доступ к prototype)
Hero.mana = 'this is avarage heroes mana level';
console.log(hulk);
console.dir(Hero);

Hero.showStats = function (hero) {
  console.log(`starts from ${hero}`);
};

console.dir(Hero);

// статические методы на конструкторах Array, Number, Object

Array.from();

Number.parseInt();

Object.keys();
