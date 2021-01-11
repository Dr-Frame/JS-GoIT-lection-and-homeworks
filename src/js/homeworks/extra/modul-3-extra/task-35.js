const bookShelf = {
  books: ['Последнее королевство', 'Мгла', 'Страж снов'],
  updateBook(oldName, newName) {
    // Пиши код ниже этой строки
    for (const book of this.books) {
      if (book === oldName) {
        const index = this.books.indexOf(oldName);
        this.books.splice(index, 1, newName);
      }
    }
    // Пиши код выше этой строки
  },
};

bookShelf.updateBook('Мгла', 'Хроники подземелий');
console.log(bookShelf.books);
