const findBestEmployee = function (employees) {
  'use strict';
  // Write code under this line
  const keys = Object.keys(employees);

  for (const key of employees) {
    console.log(employees[key])
  }
  /* for (let i = 0; i < keys.length; i += 1) {
    console.log(keys[i])
  } */



  /* console.log(devValue);
  let message


  for (let i = 0; i < devValue.length; i += 1) {
    let maxTasks = devValue[0];
    if (maxTasks < devValue[i]) {
      maxTasks = devValue[i];
      const name = Object.keys(employees);
      message = `${name[i]}`;
    }
    
  }
  return message; */
  
 
  /* for (const item of devValue) {
    console.log(item);
    console.log(maxTasks);
    if (maxTasks < item) {
      maxTasks = item;
    }
  }
  return maxTasks; */

  

};

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
//console.log(findBestEmployee(supports)); 
// 'mango'

const sellers = {
  lux: 147,
  david: 21,
  kiwi: 19,
  chelsy: 38,
};
//console.log(findBestEmployee(sellers)); 
// 'lux'  