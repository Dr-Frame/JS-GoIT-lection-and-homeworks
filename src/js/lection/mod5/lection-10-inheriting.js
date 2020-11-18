class Hero {
  constructor(name, xp) {
    this._name = name;
    this._xp = xp;
  }

  get name() {
    return this._name;
  }

  set name(newName) {
    this._name = newName;
  }

  gainXp(amount) {
    console.log(`${this._name} получил ${amount} опыта`);
    this._xp += amount;
  }
}
//======================== прототипное  наследование  ===================

class Warrior extends Hero {
  constructor(name, xp, weapon) {
    super(name, xp);
    this.weapon = weapon;
  }

  attack() {
    console.log(`${this._name} атакует используя ${this.weapon}`);
  }
}

const hulk = new Warrior('Hulk', 1000, 'двуручный меч');

console.log(hulk);
hulk.attack();
