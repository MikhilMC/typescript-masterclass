"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function logLength(item) {
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
