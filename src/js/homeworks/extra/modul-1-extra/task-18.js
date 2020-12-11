function makeTransaction(pricePerDroid, orderedQuantity, customerCredits) {
  let message;
  // Пиши код ниже этой строки
  const totalPrice = pricePerDroid * orderedQuantity;
  if (totalPrice > customerCredits) {
    message = 'Недостаточно средств на счету!';
  } else {
    message = `Вы купили ${orderedQuantity} дроидов, на счету осталось ${
      customerCredits - totalPrice
    } кредитов`;
  }
  // Пиши код выше этой строки
  return message;
}
