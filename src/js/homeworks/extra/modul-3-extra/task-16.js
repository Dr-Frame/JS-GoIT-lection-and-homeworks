function countTotalSalary(salaries) {
  let totalSalary = 0;
  // Пиши код ниже этой строки
  const keys = Object.keys(salaries);
  for (const key of keys) {
    totalSalary += salaries[key];
  }
  // Пиши код выше этой строки
  return totalSalary;
}
