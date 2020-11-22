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
    console.log(`${this.name} атакует используя ${this.weapon}`);
  }
}

const hulk = new Warrior('Hulk', 1000, 'двуручный меч');

console.log(hulk);
hulk.attack();

class NightBlade extends Warrior {
  constructor(name, xp, weapon, cast, damage, hp) {
    super(name, xp, weapon);
    this.cast = cast;
    this.damage = damage;
    this.hp = hp;
  }

  cast() {
    console.log(
      `${this.name} использует ${this.cast} и наносит ${this.damage}.`,
    );
  }
}

const frame = new NightBlade(
  'Dr.Frame',
  1000,
  'клинок',
  'танец ловкача',
  50,
  100,
);

console.log(frame);
frame.cast();
