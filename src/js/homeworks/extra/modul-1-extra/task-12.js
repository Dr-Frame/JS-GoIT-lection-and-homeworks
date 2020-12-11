function makeOrderMessage(orderedQuantity, pricePerDroid, deliveryFee) {
  // Пиши код нижей этой строки
  const message = `Вы заказали дроидов на сумму ${
    orderedQuantity * pricePerDroid + deliveryFee
  } кредитов. Доставка (${deliveryFee} кредитов) включена в сумму заказа.`;
  // Пиши код выше этой строки
  return message;
}
