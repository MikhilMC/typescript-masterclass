/*
 * Generics And Constraints With Arrays
 */
type HasLength = {
  length: number;
};

function logLength<T extends HasLength>(item: T): void {
  console.log(item.length);
}

const numbersArray = [1, 23, 4, 5];
const stringArray = ["a", "v"];

console.log(logLength(numbersArray));
console.log(logLength(stringArray));
console.log(logLength("stringArray"));

//! Object literal may only specify known properties,
//! and 'name' does not exist in type 'HasLength'.
//* console.log(logLength({ name: "John" }));

console.log(logLength({ name: "John", length: 12 }));

export {};
