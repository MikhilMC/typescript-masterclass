/*
 * Parameter Destructuring
 */

type Numbers = {
  a: number;
  b: number;
  c: number;
};

let numbersObj: Numbers = { a: 2, b: 3, c: 4 };

function sum(numbers: Numbers) {
  return numbers.a + numbers.b + numbers.c;
}

function sum2({ a, b, c }: Numbers) {
  return a + b + c;
}

console.log(sum2(numbersObj));

//! Type 'string' is not assignable to type 'number'
//! The expected type comes from property 'c' which is declared here on type 'Numbers'
//* console.log(sum2({ a: 3, b: 4, c: "string" }));

export {};
