function calculateEngravingPrice(message, pricePerWord) {
  // Пиши код ниже этой строки
  const messagePrice = message.split(' ').length * pricePerWord;
  return messagePrice;
  // Пиши код выше этой строки
}
