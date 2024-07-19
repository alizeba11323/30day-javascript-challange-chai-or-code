const book = {
  title: "Book Title",
  author: "Book Author",
  year: 2024,

  library: {
    name: "Library Name",
    books: [
      { title: "Book Title", author: "Book Author" },
      { title: "Book Title Two", author: "Book Author Two" },
    ],
  },
  printBookInfo: function () {
    console.log(`${this.title} ${this.year}`);
  },
  printInfo: function () {
    console.log(`${this.title} ${this.author}`);
  },
  updateYear: function (year) {
    this.year = year;
  },
};
console.log(book);
console.log(book.title, book.author);
book.printInfo();
book.updateYear(2025);
console.log(book.year);
console.log(book.library);
console.log(book.library.name);
console.log(book.library.books.map((book) => book.title));
book.printBookInfo();

for (let key in book) {
  console.log(book[key]);
}

console.log(Object.keys(book));
console.log(Object.values(book));
