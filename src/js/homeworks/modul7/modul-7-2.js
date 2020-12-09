const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

const ingredientsRef = document.querySelector('#ingredients');

const liCreator = function (word) {
  const listItemRef = document.createElement('li');
  listItemRef.textContent = word;
  console.log(listItemRef);
  return listItemRef;
};

const liInsert = ingredients.map(item => liCreator(item));
//console.log(liInsert);

ingredientsRef.append(...liInsert);

//==============================================================================================================================================================================================================================

/* В HTML есть пустой список ul#ingredients.

<ul id="ingredients"></ul>
В JS есть массив строк.

const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];
Напиши скрипт, который для каждого элемента массива ingredients создаст отдельный li,
  после чего вставит все li за одну операцию в список ul.ingredients.

Для создания DOM - узлов используй document.createElement(). */

//========================================== губар решения ==========================================================================================

//ЧЕРЕЗ ФУНКЦИЮ
//const makeListItems = items => {
//  return items.map(item => {
//    const itemsEl = document.createElement('li');
//    itemsEl.textContent = item;
//    return itemsEl;
//  })
//}
//const ingredientsItems = makeListItems(ingredients);
//ingredientsListRef.append(...ingredientsItems);
