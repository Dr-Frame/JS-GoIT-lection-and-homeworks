const atTheOldToad = {
  potions: [
    { name: 'Зелье скорости', price: 460 },
    { name: 'Дыхание дракона', price: 780 },
    { name: 'Каменная кожа', price: 520 },
  ],
  // Пиши код ниже этой строки
  getPotions() {
    return this.potions;
  },

  addPotion(potionName) {
    if (this.potions.includes(potionName)) {
      return `Зелье ${potionName} уже есть в инвентаре!`;
    }

    this.potions.push(potionName);
  },

  removePotion(potionName) {
    let potionIndex = 0;
    for (let i = 0; i < this.potions.length; i += 1) {
      if (this.potions[i].name === potionName) {
        potionIndex = i;
      }
    }
    this.potions.splice(potionIndex, 1);
  },

  updatePotionName(oldName, newName) {
    for (let i = 0; i < this.potions.length; i += 1) {
      if (this.potions[i].name === oldName) {
        this.potions[i].name = newName;
      }
    }
  },
};

console.table(atTheOldToad.getPotions());
atTheOldToad.addPotion({ name: 'Невидимка', price: 620 });
console.table(atTheOldToad.potions);
atTheOldToad.removePotion('Дыхание дракона');
console.table(atTheOldToad.potions);
atTheOldToad.updatePotionName('Дыхание дракона', 'Полиморф');
console.table(atTheOldToad.potions);
