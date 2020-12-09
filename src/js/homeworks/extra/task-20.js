function checkStorage(available, ordered) {
  let message;
  // Пиши код ниже этой строки
  if (ordered === 0) {
    message = `В заказе еще нет товаров`;
  } else if (ordered > available) {
    message = 'Слишком большой заказ, на складе недостаточно товаров!';
  } else {
    message = 'Заказ оформлен, с вами свяжется менеджер';
  }
  // Пиши код выше этой строки
  return message;
}
