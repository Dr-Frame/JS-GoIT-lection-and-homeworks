const atTheOldToad = {
  potions: ['Зелье скорости', 'Дыхание дракона', 'Каменная кожа'],
  removePotion(potionName) {
    // Пиши код ниже этой строки
    for (const potion of this.potions) {
      if (potion === potionName) {
        const index = this.potions.indexOf(potion);
        this.potions.splice(index, 1);
      }
    }
    // 🔥 Оставляем три пустые строки для студента
    // Пиши код выше этой строки
  },
};

atTheOldToad.removePotion('Дыхание дракона');

console.log(atTheOldToad.potions);
