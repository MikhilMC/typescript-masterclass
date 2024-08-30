"use strict";
/*
 * Parameter Destructuring
 */
Object.defineProperty(exports, "__esModule", { value: true });
let numbersObj = { a: 2, b: 3, c: 4 };
function sum(numbers) {
    return numbers.a + numbers.b + numbers.c;
}
function sum2({ a, b, c }) {
    return a + b + c;
}
console.log(sum2(numbersObj));
