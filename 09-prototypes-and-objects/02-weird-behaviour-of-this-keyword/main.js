/*
 * Weird Behaviour Of The This Keyword
 */

// * method => object
// * function => window, global

const book = {
  title: "The Title",
  authors: ["John", "Mark", "Rob"],
  read() {
    console.log(this);
  },
  printAuthors() {
    /*this.authors.forEach(function (author) {
      // console.log(author);
      // console.log(this.title + "-" + author);
      console.log(this);
    });*/

    this.authors.forEach(function (author) {
      console.log(this.title + " - " + author);
    }, this);

    this.authors.forEach((author) => {
      console.log(this.title + " - " + author);
    });
  },
};

book.printAuthors();
