const atTheOldToad = {
  potions: ['Зелье скорости', 'Дыхание дракона', 'Каменная кожа'],
  updatePotionName(oldName, newName) {
    // Пиши код ниже этой строки

    for (const potion of this.potions) {
      if (potion === oldName) {
        const index = this.potions.indexOf(oldName);
        this.potions.splice(index, 1, newName);
      }
    }

    // Пиши код выше этой строки
  },
};

atTheOldToad.updatePotionName('Дыхание дракона', 'Полиморф');
console.log(atTheOldToad.potions);
