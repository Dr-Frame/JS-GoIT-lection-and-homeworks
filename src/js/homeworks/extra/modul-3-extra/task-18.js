const products = [
  { name: 'Радар', price: 1300, quantity: 4 },
  { name: 'Сканер', price: 2700, quantity: 3 },
  { name: 'Дроид', price: 400, quantity: 7 },
  { name: 'Захват', price: 1200, quantity: 9 },
];

function getProductPrice(productName) {
  // Пиши код ниже этой строки
  /*   for (const product of products) {
    const keys = Object.values(product);
    console.log(keys);
    const priceToFind = 0;
    if (keys)
  } */

  for (const product of products) {
    if (product.name === productName) {
      return product.price;
    }
  }
  return null;
  // Пиши код выше этой строки
}
console.log(getProductPrice('Радар'));
