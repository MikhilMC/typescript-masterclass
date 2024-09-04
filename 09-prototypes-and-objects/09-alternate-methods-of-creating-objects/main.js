/*
 * Alternate Methods Of Creating Objects
 */

const book = {
  title: "The Title",
  pages: 300,
  author: "John",
};

console.log(book);

const book2 = new Object();
book2.title = "The Title";
book2.pages = 300;
book2.author = "John";

console.log(book2);
