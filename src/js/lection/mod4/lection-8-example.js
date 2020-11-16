'use strict';
const cart = {
  items: ['Headphones', 'Speakers'],
  showItem() {
    console.log('this: ', this);
    console.log('this.items: ', this.items);
  },
};

document
  .querySelector('.js-context')
  .addEventListener('click', cart.showItem.bind(cart));
