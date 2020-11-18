class Hero {
  // новый способ обьявление статических методов (хорошая практика)

  static mana = 'this is avarage heroes mana level';

  static showStats(hero) {
    console.log(`starts from ${hero}`);
  }

  constructor(name, power, hp) {
    this._name = name;
    this.power = power;
    this.hp = hp;
  }

  //============  getter / setter ===============
  // имя свойства и имя геттера не должны быть одинаковые
  // имя геттера и сеттера должны совпадать для одного свойства

  get name() {
    return this._name;
  }

  set name(newName) {
    this._name = newName;
  }

  /* getName() {
    return this.name;
  }

  changeName(newName) {
    this._name = newName;
  } */

  //методы класса записываются на его свойство prototype

  addSkill(skillName) {
    this.skill = skillName;
  }
}

const mango = new Hero('Hulk', 100, 1000);

console.log(mango.name); // обращается не к свойству а к геттеру.

mango.name = 'Hulk-mango';

console.log(mango.name);
