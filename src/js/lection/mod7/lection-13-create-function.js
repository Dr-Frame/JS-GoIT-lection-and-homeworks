const products = [
  {
    name: 'SpaceX',
    description:
      'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsam magnam itaque enim eos ipsa corrupti sequi accusantium, fugit adipisci veniam ut odio sunt consectetur sapiente pariatur ad quisquam atque at.',
    price: 1000,
    avaliable: false,
  },
  {
    name: 'Shield Generator',
    description:
      'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsam magnam itaque enim eos ipsa corrupti sequi accusantium, fugit adipisci veniam ut odio sunt consectetur sapiente pariatur ad quisquam atque at.',
    price: 5000,
    avaliable: true,
  },
  {
    name: 'Star Buster',
    description:
      'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsam magnam itaque enim eos ipsa corrupti sequi accusantium, fugit adipisci veniam ut odio sunt consectetur sapiente pariatur ad quisquam atque at.',
    price: 10000,
    avaliable: true,
  },
  {
    name: 'Death Star',
    description:
      'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsam magnam itaque enim eos ipsa corrupti sequi accusantium, fugit adipisci veniam ut odio sunt consectetur sapiente pariatur ad quisquam atque at.',
    price: 200000,
    avaliable: false,
  },
];

const createCard = product => {
  const productRef = document.createElement('div');
  productRef.classList.add('product');

  const productTitleRef = document.createElement('h1');
  productTitleRef.textContent = product.name;

  // используем тернарник для добавления класа в зависимости от ППРАВДА или ЛОЖЬ

  const isAvailable = product.avaliable
    ? 'product__title--available'
    : 'product__title--not-available';

  productTitleRef.classList.add('product__title', isAvailable);

  const productDescrRef = document.createElement('p');
  productDescrRef.classList.add('product__descr');
  productDescrRef.textContent = product.description;

  const productPriceRef = document.createElement('p');
  productPriceRef.classList.add('product-price');
  productPriceRef.textContent = `Цена: ${product.price} кредитов.`;

  productRef.append(productTitleRef, productDescrRef, productPriceRef);

  return productRef;
};

console.log(createCard(products[0]));

/* products.forEach(product => {
  console.log(createCard(product));
}); */

const productList = products.map(product => createCard(product));

console.log(productList);

const productListRef = document.querySelector('.js-product');
console.log(productListRef);

productListRef.append(...productList);
