// новый синтакис, позволяет записать функцию конструктор и прототипы более удобно. Синтаксический сахар)

// КЛАССЫ

class Hero {
  // новый способ обьявление статических методов (хорошая практика)

  static mana = 'this is avarage heroes mana level';

  static showStats(hero) {
    console.log(`starts from ${hero}`);
  }

  constructor(name, power, hp) {
    this.name = name;
    this.power = power;
    this.hp = hp;
  }

  //методы класса записываются на его свойство prototype

  addSkill(skillName) {
    this.skill = skillName;
  }

  getDamage(damage) {
    this.hp -= damage;
    if (this.hp <= damage) {
      console.log(
        `${this.name} recieved damage that no longer compatible with life, he is dead`,
      );
    } else {
      console.log(
        `${this.name} got ${damage} points of damage, but he still alive. ${this.hp} hp left`,
      );
    }
  }
}

// старый способ обьявления статических методов (новый смотреть выше)

/* Hero.mana = 'this is avarage heroes mana level';

Hero.showStats = function (hero) {
  console.log(`starts from ${hero}`);
}; */

// ========================================================
const hulk = new Hero('Hulk', 500, 1000);

hulk.addSkill('hulkbuster');
hulk.getDamage(1000);

console.log(hulk);
console.dir(Hero);
