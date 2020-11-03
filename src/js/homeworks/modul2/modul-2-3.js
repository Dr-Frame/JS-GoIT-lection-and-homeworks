'use strict';
function findLongestWord (string = "") {
  // Write code under this line
  
  const words = string.split(' ');
  let theLongest = words[0];

  for (const word of words) {
    
    if (theLongest.length < word.length) {
      theLongest = word;
    }
  }
  return theLongest;
}

console.log(findLongestWord('The quick brown fox jumped over the lazy dog'));
// 'jumped'

console.log(findLongestWord('Google do a roll'));
// 'Google'

console.log(findLongestWord('May the force be with you'));
// 'force'