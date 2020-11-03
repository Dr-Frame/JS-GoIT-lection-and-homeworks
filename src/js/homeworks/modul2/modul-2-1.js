/* const getItemsString = function(array) {
  'use strict';
  let newArray = [];
  for (const item of array) {
    const newWord = `${array.indexOf(item) + 1} - ${item}\n`;
    newArray.push(newWord);
  }
  const taskString = newArray.join('');
  return taskString;
}; */

//

const getItemsString = function(array) {
  'use strict';
  let newArray = [];

  for (let i = 0; i < array.length; i += 1) {
    newArray.push(`${i + 1} - ${array[i]}\n`);
  }
  const string = newArray.join('');
  return string;
};

console.log(getItemsString(['Mango', 'Poly', 'Ajax', 'Lux', 'Jay', 'Kong']));


