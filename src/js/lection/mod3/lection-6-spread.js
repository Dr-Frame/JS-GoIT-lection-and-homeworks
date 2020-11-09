// СЛЕВА ВСЕГДА rest = СПРАВА ВСЕГДА spread 

// распыление

const temp = [1, 2, 3, 456, 484, 54, 21];
console.log(Math.min(temp));
console.log(Math.min(...temp));

// старый синтаксис 

const newArray = temp.concat(100, 200, 300);
console.log(newArray);


// новій

const newRaspil = [...temp, 50, 30, 40, 60];
console.log(newRaspil);

const ar1 = [15, 51, 34];
const ar2 = [423, 43, 431];
const ar3 = [643, 324, 53];

const newAr = [...ar1,'hello mfcrs', ...ar2, ...ar3];
console.log(newAr);


// распыление обьетков

//старый вариант

const arr1 = { x: 1, y: 3 };
const arr2 = { y: 5, z: 7 };

const newArr = Object.assign(arr1, arr2, {x:5, y:7, g:5});
console.log(newArr);

// метод с распылением 

const c = { ...arr1, ...arr2, ...{ x: 5, y: 7, g: 5 } };
console.log(c)

// ПОРЯДОК РАСПЫЛЕНИЯ ВАЖЕН!!  ТО ЧТО ПЕРВОЕ, ТО И ДОБАВЛЯЕТСЯ ПЕРВЫМ

const a = { x: 1, y: 3 };
const b = { y: 5, z: 7 };
const order = { ...b, ...a };
console.log(order)