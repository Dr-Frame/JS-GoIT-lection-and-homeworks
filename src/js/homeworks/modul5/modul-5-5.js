class Car {
  // Write code under this line
  static getSpecs(car) {
    return `maxSpeed: ${car.maxSpeed}, speed: ${car.speed}, isOn: ${car.isOn}, distance: ${car.distance}, price: ${car._price}`;
  }
  /* constructor(carData) {
    this._speed = 0;
    this._price = Object.values(carData)[1];
    this._maxSpeed = Object.values(carData)[0];
    this._isOn = false;
    this._distance = 0;
  } */
  constructor({ speed = 0, price, maxSpeed, isOn = false, distance = 0 }) {
    this.speed = speed;
    this._price = price;
    this.maxSpeed = maxSpeed;
    this.isOn = isOn;
    this.distance = distance;
  }
  get price() {
    return this._price;
  }

  set price(value) {
    this._price = value;
  }

  turnOn() {
    this.isOn = true;
  }
  turnOff() {
    this.isOn = false;
    this.speed = 0;
  }
  accelerate(value) {
    this.speed + value <= this.maxSpeed
      ? (this.speed += value)
      : (this.speed = this.maxSpeed);
  }

  decelerate(value) {
    this.speed - value > 0 ? (this.speed -= value) : (this.speed = 0);
  }

  drive(hours) {
    if (this.isOn === true) {
      this.distance += this.speed * hours;
    }
  }
}

const mustang = new Car({ maxSpeed: 200, price: 2000 });
console.log(mustang);
mustang.turnOn();
mustang.accelerate(50);
mustang.drive(2);

console.log(Car.getSpecs(mustang));
// 'maxSpeed: 200, speed: 50, isOn: true, distance: 100, price: 2000'

mustang.decelerate(20);
mustang.drive(1);
mustang.turnOff();

console.log(Car.getSpecs(mustang));
// 'maxSpeed: 200, speed: 0, isOn: false, distance: 130, price: 2000'

console.log(mustang.price); // 2000
mustang.price = 4000;
console.log(mustang.price); // 4000

//Задача 5-5

//class Car {
/*
 * Добавь `статический` метод
 * `getSpecs(car)`, который принимает
 * объект-машину как параметр
 * и возвращает шаблонную строку
 * со свойствами и значениями объекта.
 * Свойства:
 *   maxSpeed,
 *   speed,
 *   isOn,
 *   distance,
 *   price
 * Пример строки, полученной этим методом:
 * 'maxSpeed: 200, speed: 50, isOn: true, distance: 100, price: 2000'
 */

/*
 * Конструктор получает объект настроек.
 *
 * Добавь свойства будущеего экземпляра класса:
 *  speed - текущая скорость,
 *          начальное значение `0`
 *  price - цена автомобиля
 *  maxSpeed - максимальная скорость
 *  isOn - заведен ли автомобиль.
 *         Значения `true` или `false`,
 *         начальное значение false
 *  distance - пробег в километрах,
 *             начальное значение `0`
 */
//constructor() {}

/*
 * Добавь геттер и сеттер
 * для свойства `price`, который будет
 * работать с свойством цены автомобиля.
 *
 * ВАЖНО: для записи методов get и set
 * значение параметра записывают с
 * подчеркиванием. См. ниже пример 1.
 */

/*
 * Метод, который заводит автомобиль
 * Записывает в свойство `isOn` значение `true`
 */
//turnOn() {}

/*
 * Метод, чтобы заглушить автомобиль
 * Этот метод должен записывать
 * в свойство isOn значение false,
 * и сбрасывать текущую скорость до 0
 */
//turnOff() {}

/*
 * Этот метод должен добавлять
 * к свойству `speed` полученное
 * значение, при условии,
 * что результирующая скорость
 * не больше чем значение свойства `maxSpeed`
 */
//accelerate(value) {}

/*
 * Этот метод должен отнимать
 * от свойства `speed`
 * полученное значение, при условии,
 * что результирующая скорость не меньше 0
 */

//decelerate(value) {}

/*
 * Этот метод должен добавлять к свойству
 * `distance` пробег в километрах,
 * т.е. hours * speed,//
 * но только в том случае,
 * если машина заведена!
 */
//drive(hours) {}
//}