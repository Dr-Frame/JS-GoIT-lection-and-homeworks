const User = function (userName, userPower) {
  this.name = userName;
  this.power = userPower;
};

User.prototype.powerAdd = function () {
  this.power += 10;
};

User.prototype.changeName = function (name) {
  this.name = name;
};

const mango = new User('Mango', 100);
console.log(mango);

document.querySelector('.js-add-method').addEventListener('click', function () {
  User.prototype.addNewMethod = function () {
    console.log(this);
    console.log('Hi bro');
  };

  console.log(User.prototype);
  mango.addNewMethod();
});

console.log(User.prototype);
