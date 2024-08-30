/*
 * Type Alias
 */
// Date;
// Array;
// Map;
// Set;
// Promise;
// RegExp;
// Error;
// Function;
// Symbol;
// WeakMap;
// WeakSet;

/*
 * Declaration, Annotation, Inference
 */

//* Duck Typing is used by TypeScript for inference of types.
//* "If it walks like a duck and quacks like a duck, it's a duck".

//* Declaration - when you are declaring a type.
type CustomString = string;
type CustomNumber = number;
type CustomDate = Date;
type CustomSymbol = symbol;

//* Annotation - when you are assigning a type.
let firstName: CustomString = "Mark";
let age: CustomNumber = 31;
let today: CustomDate = new Date();
let unique: CustomSymbol = Symbol();

function addNumbers(a: number, b: number) {
  return a + b;
}

//* Inference - When TypeScript able to infer the correct type of a variable or declaration
let finalResult = addNumbers(2, 3);

//* Whenever the type is complex, declare it.
//* Whenever the type is simple, annotate it.

export {};
