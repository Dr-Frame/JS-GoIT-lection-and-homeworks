// apply(), call() в повседневной жизни не используется нужно для собеседовния
// bind() используется на работе повседневно

const showTag = function (args1, args2, args3) {
  console.log(args1, args2, args3);
  console.log('this:', this);
  console.log('this.tag:', this.tag);
};

const mango = {
  tag: 'Mango',
};

const poly = {
  tag: 'Poly',
};

// как бы сделал без этих методов
/* mango.showTag = showTag;
mango.showTag(); */

// с применением методов/
// метод call() ВЫЗЫВАЕТ ФУНКЦИЮ ЗДЕСЬ И СЕЙЧАС присваивая ее первый аргумент как this

showTag.call(mango, 10, 20, 'jhon');

showTag.call(poly, 50, 80, 'Luci');

//====================  apply() =========================
// тоже самое что и call, только передает не каждый аргумент отдельно, а как массив

showTag.apply(mango, [10, 20, 'jhon']);
showTag.apply(poly, [50, 80, 'Luci']);

//========================    bind() - привязка контекста =======================
// НЕ ВЫЗЫВАЕТ ФУНКЦИЯ ПРЯМО ЗДЕСЬ И СЕЙЧАС  а делает ее копию
// привязывает навсегда функцию к обьекту (this будет возвращать єтот обьект)

const bindShowTag = showTag.bind(mango);

const polyShowTag = showTag.bind(poly);

bindShowTag(10, 20, 'jhon');

polyShowTag(50, 80, 'Luci');
