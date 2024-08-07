/**
 * any type
 */
let firstName: any = "Mark";

firstName = 123;
firstName = [];

function returnParam(param) {
  // Parameter 'param' implicitly has an 'any' type.
  return param;
}

/**
 * unknown type
 */
function multiplyByTwo(number: unknown) {
  //   return number * 2;
  if (typeof number === "number") {
    return number * 2;
  }

  return "Please provide a valid number";
}

console.log(multiplyByTwo(4));
console.log(multiplyByTwo("string"));

/**
 * Type alias
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

/**
 * Declaration, Annotation, Inference
 */

// Duck Typing is used by TypeScript for inference of types.
//* "If it walks like a duck and quacks like a duck, it's a duck".

// Declaration - when you are declaring a type.
type CustomString = string;
type CustomNumber = number;
type CustomDate = Date;
type CustomSymbol = symbol;

// Annotation - when you are assigning a type.
let firstName2: CustomString = "Mark";
let age: CustomNumber = 31;
let today: CustomDate = new Date();
let unique: CustomSymbol = Symbol();

function addNumbers(a: number, b: number) {
  return a + b;
}

// Inference - When TypeScript able to infer the correct type of a variable or declaration
let finalResult = addNumbers(2, 3);

// Whenever the type is complex, declare it.
// Whenever the type is simple, annotate it.

/**
 * Union types
 */
type StringOrNumber = string | number;
type NumberOrUndefined = number | undefined;
type StringNumberOrUndefined = string | number | undefined;
type DateOrUndefined = Date | undefined;

let stringOrNumber: StringOrNumber = 1234;

function print(input: string | undefined) {
  if (input) {
    console.log(input);
  } else {
    console.log("Please input something to print");
  }
}

print();
print("Hello World!");

/**
 * Conditional Types
 */
type CustomDate2 = Date;
type CustomString2 = string;

type TrueString = CustomString2 extends string ? true : false;
type ConditionalNumber = CustomDate2 extends Date ? number : string;
type DateAssignment = CustomDate2 extends Date ? Date : undefined;

/**
 * Type Hierarchy
 */
type check = any extends unknown ? true : false;
type check2 = string extends any ? true : false;
type check3 = null extends any ? true : false;
type check4 = undefined extends void ? true : false;
type check5 = [] extends Object ? true : false;
type check6 = Function extends Object ? true : false;

const throwError = (errorMessage: string) => {
  // throwError returns the type never
  throw new Error(errorMessage);
};

// let strings:Object = ["a", "b"]  // This is acceptable according to TypeScript
let strings: string[] = ["a", "b"]; // But this is more suitable one

let myFunc: Function = () => 2;
// let myFunc: Object = () => 2;

/**
 * Type Casting
 */
let firstName3 = <any>"John";
let lastName = "Doe" as any;

// User from API
let user = {
  name: "Mark",
  email: "mark@email.com",
};

type User = {
  name: string;
  email: string;
};

function fetchUser() {
  return user as User;
}

let fetchedUser = fetchUser();
