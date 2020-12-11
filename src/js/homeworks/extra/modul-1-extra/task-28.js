function checkPassword(password) {
  const ADMIN_PASSWORD = 'jqueryismyjam';
  let message;

  switch (password) {
    case null:
      message = 'Отменено пользователем!';
      break;
    case ADMIN_PASSWORD:
      message = 'Добро пожаловать!';
      break;

    default:
      message = 'Доступ запрещён, неверный пароль!';
      break;
  }

  return message;
}
