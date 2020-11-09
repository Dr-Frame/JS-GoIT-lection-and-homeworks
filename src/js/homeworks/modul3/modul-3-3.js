'use strict';
const findBestEmployee = function (employees) {


  let max = 0;
  let name = '';

  const array = Object.keys(employees);
  for (const key of array) {
    if (employees[key] > max) {
      max = employees[key];
      name = key;
    }
  }
  return name;

  /* let max = 0;
  let name = '';
  for (const key in employees) {
    if (max < employees[key]) {
      max = employees[key]
      name = key;
    } 
  }
  return name; */
}

// Объекты и ожидаемый результат
const developers = {
  ann: 29,
  david: 35,
  helen: 1,
  lorence: 99,
}; 
console.log(findBestEmployee(developers)); 
// 'lorence'

const supports = {
  poly: 12,
  mango: 17,
  ajax: 4,
}; 
console.log(findBestEmployee(supports)); 
// 'mango'

const sellers = {
  lux: 147,
  david: 21,
  kiwi: 19,
  chelsy: 38,
};
console.log(findBestEmployee(sellers)); 
// 'lux' 

const empty = {};
console.log(findBestEmployee(empty)); 