function checkForSpam (str) { 
  'use strict';
  
  const array = str.toLowerCase().split(' ');
  console.log(array)
  for (const word of array) {
    /* if (word.includes('sale').includes('spam')) {
      return true;
    } else {
      return false;
    } */

    return word.includes('sale' || 'spam') ? true : false;
  }
  
}

console.log(checkForSpam('Latest technology news')); // false

console.log(checkForSpam('JavaScript weekly newsletter')); // false

console.log(checkForSpam('Get best sale offers now!')); // true

console.log(checkForSpam('[SPAM] How to earn fast money?')); // true