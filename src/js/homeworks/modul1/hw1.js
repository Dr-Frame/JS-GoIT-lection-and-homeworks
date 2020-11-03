'use strict';
/* const name = '«Генератор защитного поля»'; // Write code on this line
let price = 1000; // Write code on this line
const firstMessage = `Выбран ${name}, цена за штуку ${price} кредитов`; // Write code on this line
price = 2000;
const secondMessage = `Выбран ${name}, цена за штуку ${price} кредитов`;

console.log(firstMessage); */

//--------------------------------------------------------------------------//
/* const invoice = 100; 
const stock = 100;

// Write code under this line
let message
if (invoice <= stock) {
  message = 'Заказ оформлен, с вами свяжется менеджер'
} else if (invoice === stock) {
  message = 'Заказ оформлен, с вами свяжется менеджер'
} else if (invoice >= stock) {
  message = 'На складе недостаточно товаров!'
};

console.log(message);

//console.log(message);

//если invoice равен 100
// то значение message будет равно
// 'Заказ оформлен, с вами свяжется менеджер'

//если invoice равен 50
// то значение message будет равно
// 'Заказ оформлен, с вами свяжется менеджер'  

//если invoice равен 150
// то значение message будет равно
// 'На складе недостаточно товаров!' */  

//------------------------------------------------------------------------------------//

/* const userPassword = 'jqueryismyjam';

const ADMIN_PASSWORD = 'jqueryismyjam';

const CANCELED_BY_USER = 'Отменено пользователем!';
const ACCESS_IS_ALLOWED = 'Добро пожаловать!';
const ACCESS_DENIED = 'Доступ запрещен, неверный пароль!';
let message;

// Write code under this line
if (userPassword === ADMIN_PASSWORD) {
  message = 'Добро пожаловать!'
} else if (userPassword === null) {
  message = 'Отменено пользователем!'
} else if (userPassword !== ADMIN_PASSWORD) {
  message = 'Доступ запрещен, неверный пароль!'
}

console.log(message);

//если userPassword равно 'jqueryismyjam' 
// то значение message будет равно
// 'Добро пожаловать!'

//если userPassword равно  null 
// то значение message будет равно  
// 'Отменено пользователем!'

//если userPassword равно '123' 
// то значение message будет равно
// 'Доступ запрещен, неверный пароль!' */

//--------------------------------------------------------------------------------------------------//
/* 
const orderPieces = 4;

const credits = 23580;
const pricePerDroid = 3000;
const CANCELED_BY_USER = 'Отменено пользователем!';
const ACCESS_DENIED = 'Недостаточно средств на счету!';

let totalPrice; // Write code on this line
let balanceCredit; // Write code on this line
let message;

// Write code under this line
  

// console.log(message);

//если orderPieces равно 4
// то значение message будет равно
// 'Вы купили 4 дроидов, на счету осталось 11580 кредитов'

//если orderPieces равно null
// то значение message будет равно
// 'Отменено пользователем!'

//если orderPieces равно 10
// то значение message будет равно
// 'Недостаточно средств на счету!'
 */
//----------------------------------------------------------------------------------//

/* const orderPieces = null;

const credits = 23580;
const pricePerDroid = 3000;
const CANCELED_BY_USER = 'Отменено пользователем!';
const ACCESS_DENIED = 'Недостаточно средств на счету!';

let totalPrice = orderPieces * pricePerDroid; // Write code on this line
let balanceCredit = credits - totalPrice; // Write code on this line
let message;

// Write code under this line
  
if (totalPrice <= credits && orderPieces !== null) {
  message = `Вы купили ${orderPieces} дроидов, на счету осталось ${balanceCredit} кредитов`
} else if (orderPieces === null) {
  message = CANCELED_BY_USER
} else {
  message = ACCESS_DENIED
}
console.log(message);

//если orderPieces равно 4
// то значение message будет равно
// 'Вы купили 4 дроидов, на счету осталось 11580 кредитов'

//если orderPieces равно null
// то значение message будет равно
// 'Отменено пользователем!'

//если orderPieces равно 10
// то значение message будет равно
// 'Недостаточно средств на счету!' */

//--------------------------------------------------------------------------------------------//

//если countryName равно "КитаЙ"
// то значение message будет равно
// 'Доставка в Китай будет стоить 100 кредитов'

//если countryName равно null
// то значение message будет равно
// 'Отменено пользователем!'

//если countryName равно "Чили"
// то значение message будет равно
// 'В выбранную страну доставка недоступна.'

let countryName = document.querySelector('input[name="country"]');
const buttonRef = document.querySelector('.btn-country');

const CANCELED_BY_USER = 'Отменено пользователем!';
const NO_DELIVERY = 'В выбранную страну доставка недоступна.';
const CHINA = 'Китай';
const AUSTRALIA = 'Австралия';
const INDIA = 'Индия';
const JAMAICA = 'Ямайка';
let message;
let price = 0;
let country;

country = countryName.value;
console.log(country);

buttonRef.addEventListener('click', function () {
  if (country === null) {
  message = CANCELED_BY_USER
  console.log(message)
} else {
  switch (country) {
    case CHINA:
      price = 100;
      break;
    
    case AUSTRALIA:
      price = 170;
      break;
    
    case INDIA:
      price = 80;
      break;
    
    case JAMAICA:
      price = 120;
      break;
    
    default: 
      message = NO_DELIVERY
  }
}
if (price > 0) { 
  message = `Доставка в ${country} будет стоить ${price} кредитов`;
}
console.log(message)
});



