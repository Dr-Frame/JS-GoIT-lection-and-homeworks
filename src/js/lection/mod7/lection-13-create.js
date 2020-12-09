// СОЗДАНИЕ УЗЛОВ с createElement

// создает ССЫЛКУ НА ОБЬЕКТ, и хранит его в ПАМЯТИ браузера.
// в документ сразу не добавляется

/* const titleRef = document.createElement('h1');
titleRef.textContent = 'hello';
titleRef.classList.add('title');
console.log(titleRef); */

//=========== создаем динамически карточку космошатла =============
const product = {
  name: 'SpaceX',
  description:
    'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsam magnam itaque enim eos ipsa corrupti sequi accusantium, fugit adipisci veniam ut odio sunt consectetur sapiente pariatur ad quisquam atque at.',
  price: 1000,
  avaliable: false,
};

// создаем отдельные блоки теги которые потом будем обьеденять
const productRef = document.createElement('div');
productRef.classList.add('product');

console.log(productRef);

const productTitleRef = document.createElement('h1');
productTitleRef.classList.add('product__title');
productTitleRef.textContent = product.name;

console.log(productTitleRef);

const productDescrRef = document.createElement('p');
productDescrRef.classList.add('product__descr');
productDescrRef.textContent = product.description;

console.log(productDescrRef);

const productPriceRef = document.createElement('p');
productPriceRef.classList.add('product-price');
productPriceRef.textContent = `Цена: ${product.price} кредитов.`;

console.log(productPriceRef);

// строим структуру кода, влаживая теги другв друга
// метод для вставки только ОДНОГО єлемента
/* productRef.appendChild(productTitleRef);
productRef.appendChild(productDescrRef);
productRef.appendChild(productPriceRef);

console.log(productRef); */

// современный метод, позволяет вставить НЕСКОЛЬКО элементов
productRef.append(productTitleRef, productDescrRef, productPriceRef);

console.log(productRef);

// что бы вставить этот блок, нужно в хтмл документе создать тег куда будем вставлять

const cardRootRef = document.querySelector('#root');

cardRootRef.appendChild(productRef);

//
//
//
//========================================================
/* const nav = document.querySelector('.nav');

console.log(nav);

const listItemRef = document.createElement('li');
listItemRef.textContent = 'new item';

// вставить в конец
nav.appendChild(listItemRef);

// вставить перед
nav.insertBefore(listItemRef, nav.firstElementChild); */
