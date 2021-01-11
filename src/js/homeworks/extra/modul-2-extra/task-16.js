function makeArray(firstArray, secondArray, maxLength) {
  const concatArr = firstArray.concat(secondArray);
  let message;

  if (concatArr.length <= maxLength) {
    message = concatArr;
  } else {
    message = concatArr.slice(0, maxLength);
  }
  return console.log(message);
}

makeArray(['Манго', 'Поли'], ['Аякс', 'Челси'], 3);
makeArray(['Манго', 'Поли', 'Хьюстон'], ['Аякс', 'Челси'], 4);
makeArray(['Манго'], ['Аякс', 'Челси', 'Поли', 'Хьюстон'], 3);
makeArray(['Земля', 'Юпитер'], ['Нептун', 'Уран'], 2);
makeArray(['Земля', 'Юпитер'], ['Нептун', 'Уран'], 4);
makeArray(['Земля', 'Юпитер'], ['Нептун', 'Уран', 'Венера'], 0);
