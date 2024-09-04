/*
 * This Keyword In JS
 */

// * method => object
// * function => window, global

const book = {
  title: "The Title",
  read() {
    console.log(this);
  },
};

book.read();

book.stopReading = function () {
  console.log(this);
};

book.stopReading();

function watchmovie() {
  console.log(this);
}

watchmovie();
