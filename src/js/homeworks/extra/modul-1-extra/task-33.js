function formatMessage(message, maxLength) {
  let result;
  // Пиши код ниже этой строки
  result =
    message.length <= maxLength ? message : message.slice(0, maxLength) + '...';
  // Пиши код выше этой строки
  return result;
}

console.log(formatMessage('Curabitur ligula sapien', 23));
