function makeTask(data) {
  const completed = false;
  const category = 'Общее';
  const priority = 'Обычный';

  const defaultObj = { category, priority, completed };
  const newObj = { ...defaultObj, ...data };
  return newObj;
  // Пиши код ниже этой строки

  // Пиши код выше этой строки
}

console.log(
  makeTask({ category: 'Домашнее', priority: 'Низкий', text: 'Вынести мусор' }),
);

console.log(makeTask({ category: 'Финансы', text: 'Забрать проценты' }));

console.log(makeTask({}));
