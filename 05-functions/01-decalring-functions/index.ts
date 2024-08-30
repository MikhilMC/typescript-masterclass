/*
 * Declaring Functions
 */

//* Named function
/**
 ** Function returns an intro string
 * @param name string
 * @param age number
 * @returns string
 */
function intro(name: string, age: number): string {
  return `My name is ${name} and I am ${age} years old`;
}

//* Function expression
const intro2 = function (name: string, age: number): string {
  return `My name is ${name} and I am ${age} years old`;
};

//* Arrow function
const intro3 = (name: string, age: number): string | number => {
  return 12334;
};
//! intro("John");

export {};
