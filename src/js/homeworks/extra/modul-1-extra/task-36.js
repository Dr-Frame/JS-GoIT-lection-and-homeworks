function checkForSpam(message) {
  let result;
  // Пиши код ниже этой строки
  let lowerMessage = message.toLowerCase();
  result =
    lowerMessage.includes('spam') || lowerMessage.includes('sale')
      ? true
      : false;
  // Пиши код выше этой строки
  return result;
}

console.log(checkForSpam('Amazing SalE, only tonight!'));
