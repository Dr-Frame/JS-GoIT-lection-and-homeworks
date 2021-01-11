const products = [
  { name: 'Радар', price: 1300, quantity: 4 },
  { name: 'Сканер', price: 2700, quantity: 3 },
  { name: 'Дроид', price: 400, quantity: 7 },
  { name: 'Захват', price: 1200, quantity: 9 },
];

function getAllPropValues(propName) {
  // Пиши код ниже этой строки
  let newArr = [];
  for (const product of products) {
    if (product.hasOwnProperty(propName)) {
      newArr.push(product[propName]);
    } else {
      return newArr;
    }
  }
  return newArr;
  // Пиши код выше этой строки
}

console.log(getAllPropValues('category'));
