function checkForSpam (str) { 
  'use strict';
  
  /* const array = str.toLowerCase().split(' ');
  console.log(array)
  for (const word of array) {

    return word.includes('sale' || 'spam') ? true : false;
  } */

  
  const string = str.toLowerCase();
  if (string.includes('sale')) {
    return true;
  } else if (string.includes('spam')) {
    return true;
  }
    else {
    return false;
  }
  
}

console.log(checkForSpam('Latest technology news')); // false

console.log(checkForSpam('JavaScript weekly newsletter')); // false

console.log(checkForSpam('Get best sale offers now!')); // true

console.log(checkForSpam('[SPAM] How to earn fast money?')); // true