// {name: apple, price:10}
// {name: banana, price:20}
// { name: kiwi, price: 100 }
// {name: watermelon, price:18}

const cart = {
  items: [],
  getItems() {
    return this.items;
  },
  add(product) {
    for (const item of this.items) {
      if (item.name === product.name) {
        console.log('такой продукт есть, увеличиваем кол-во');
        item.quantity += 1;
        return;
      }
    }

    console.log('новый продукт добавляем в корзину');
    product.quantity = 1;
    this.items.push(product);
  },
  remove(productName) {

    for (let i = 0; i < this.items.length; i += 1) {

      const item = this.items[i];

      if (productName === item.name) {
        console.log('found, delete it');
        console.log(i);
        this.items.splice(i, 1);
      }
    }

    /* for (const item of this.items) {

      if (productName === item.name) {
        console.log('found')
      }
    } */
  },
  clear() {
    this.items = [];
  },
  countTotalPrice() {
    let totalPrice = 0;
    console.table(this.items);
    for (const item of this.items) {
      totalPrice += item.price * item.quantity
    }

    return totalPrice;
  },
  increaseQuantity(productName) {
    for (const item of this.items) {
      if (item.name === productName) {
        item.quantity += 1;
      }
    }
  },
  decreaseQuantity(productName) {
    for (const item of this.items) {
      if (item.name === productName) {
        if (item.quantity - 1 === 0) {
          this.remove(productName);
          return;
        }
        item.quantity -= 1;
      }
    }
    // мой плохой вариант))
    /* for (let i = 0; i < this.items.length; i += 1) {
      const item = this.items[i];
      if (item.name === productName) {
        if (item.quantity - 1 === 0) {
          this.items.splice(i, 1);
        }
        item.quantity -= 1;
      }
    } */
  }
};



cart.add({ name: 'banana', price: 20 });
cart.add({ name: 'apple', price: 10 });
cart.add({ name: 'apple', price: 10 });
cart.add({ name: 'banana', price: 20 });

console.table(cart.getItems());  

/* cart.remove('banana');
console.table(cart.getItems()); */

/* cart.clear();
console.table(cart.getItems()); */



cart.increaseQuantity('banana');
console.table(cart.getItems());


cart.decreaseQuantity('apple');
cart.decreaseQuantity('apple');
console.table(cart.getItems());

console.log(cart.countTotalPrice());