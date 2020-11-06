// функция удаление карточки

const cards = ['card 1', 'card-2', 'card-3', 'card-4', 'card-5'];

const removeCard = function (cardsArray, cardsToRemove) {
  const cardIndex = cardsArray.indexOf(cardsToRemove);

  // guard clause предварительный выход
  if (cardIndex === -1) {
    console.log('такой карточки нет');
    return;
  }
  cardsArray.splice(cardIndex, 1);
}

removeCard(cards, 'card-2');
console.log(cards);

// функция добавление карточки----------------------------------------------------

const addCard = function (cardsArray, cardToAdd, index) {

  if (index > cardsArray.length) {
    cardsArray.push(cardToAdd);
    return cardsArray;
  }
  cardsArray.splice(index, 0, cardToAdd);

  
}

addCard(cards, 'card-6', 1)
console.log(cards);