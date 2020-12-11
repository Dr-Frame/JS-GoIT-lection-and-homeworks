function getShippingCost(country) {
  let message;
  // Пиши код ниже этой строки
  switch (country) {
    case 'Китай':
      message = `Доставка в ${country} будет стоить 100 кредитов`;
      break;
    case 'Австралия':
      message = `Доставка в ${country} будет стоить 170 кредитов`;
      break;
    case 'Чили':
      message = `Доставка в ${country} будет стоить 250 кредитов`;
      break;
    case 'Ямайка':
      message = `Доставка в ${country} будет стоить 120 кредитов`;
      break;
    default:
      message = 'Извините, в вашу страну доставки нет';
      break;
  }
  // Пиши код выше этой строки
  return message;
}
