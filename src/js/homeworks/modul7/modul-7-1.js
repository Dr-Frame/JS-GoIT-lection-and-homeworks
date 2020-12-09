const quantityRef = document.querySelector('#categories');
const quantityLiItem = `В списке ${quantityRef.children.length} категории.`;
console.log(quantityLiItem);

const itemRef = document.querySelectorAll('.item');

for (let i = 0; i < itemRef.length; i += 1) {
  console.log(`Категория: ${itemRef[i].children[0].textContent}`);
  console.log(
    `Количество элементов: ${itemRef[i].children[1].children.length}`,
  );
}

/* Напиши скрипт, который выполнит следующие операции.

Посчитает и выведет в консоль количество категорий в ul#categories, то есть элементов li.item. 
Получится 'В списке 3 категории.'.

Для каждого элемента li.item в списке ul#categories, найдет и выведет в консоль
текст заголовка элемента (тега h2) и количество элементов в категории 
(всех вложенных в него элементов li).

Например для первой категории получится:

Категория: Животные
Количество элементов: 4 */
