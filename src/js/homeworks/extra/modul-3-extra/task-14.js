function countProps(object) {
  // Пиши код ниже этой строки
  let propCount = 0;

  const keys = Object.keys(object);
  for (const key of keys) {
    propCount += 1;
  }

  return propCount;
  // Пиши код выше этой строки
}
