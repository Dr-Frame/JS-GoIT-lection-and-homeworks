function checkStorage(available, ordered) {
  let message;
  // Пиши код ниже этой строки

  message =
    ordered > available
      ? 'На складе недостаточно товаров!'
      : 'Заказ оформлен, с вами свяжется менеджер';
  // Пиши код выше этой строки
  return message;
}
