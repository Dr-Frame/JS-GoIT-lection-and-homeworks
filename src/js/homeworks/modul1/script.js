'use strict';

/* const isBoolean = false;
const number = 5;
const letter = "black Blm";
console.log(typeof isBoolean, typeof letter);

if (number > 0 && number < 10) { 
  console.log(`you are right`);
} else {
  console.log(`you don't!!`);
} */

const purchase = prompt('Введите суму покупки');
let discount;
const isMember = confirm('Вы являетесь членом клуба?')

if (purchase >= 500 && purchase < 2000 && isMember === true) {
  discount = 0.05;
  console.log(`The total amount of your purchase is ${Number.parseInt(purchase - (purchase * discount))}$, your included member discount is ${discount * 100}%  (${Math.round(purchase * discount)} $), thank you for choosing us.`);666

} else if (purchase >= 2000 && purchase < 10000 && isMember === true) {
  discount = 0.1;
  console.log(`The total amount of your purchase is ${purchase - (purchase * discount)}$, your included member discount is ${discount * 100}% (${purchase * discount}$), thank you for choosing us.`);

} else if (purchase >= 10000 && isMember === true) {
  discount = 0.15
  console.log(`The total amount of your purchase is ${purchase - (purchase * discount)}$, your included member discount is ${discount * 100}% (${purchase * discount}$), thank you for choosing us.`);

} else if (purchase >= 500 && isMember !== true) {
  console.log(`Recieve your first invitation discount 2%, just take a member status!`);
  const isMember = confirm(`вы хотите получить статус участника?`);
  if (isMember === true) {
    discount = 0.02;
    console.log(`You have got invitation ${discount * 100}% discount, the total sum of you purchase is ${purchase - (purchase * discount)}$`);
  } else {
    console.log(`you didn't apply discount, the total sum of you purchase is ${purchase}$`)
  }
} else {
  console.log(`The sum of your purchase is too small to apply a discount =(`)
}