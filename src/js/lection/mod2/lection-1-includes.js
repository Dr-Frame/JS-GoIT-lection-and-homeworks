// Проверка наличия сотрудника на работе 
/* const staff = ['Johnny D', 'Abrams', 'Pussy', 'Lacalut'];
const query = 'Pussy';
let result = 'he is absent';

for (const employee of staff) {
  if (employee === query) {
    result = 'this mother****r is presents'
  }
}
console.log(result); */

// оптимальный варианнт

const staff = ['Johnny D', 'Abrams', 'Pussy', 'Lacalut'];
const query = 'Pussy';

const result = staff.includes(query) ? 'this mother****r is presents' : 'he is absent';
console.log(result);