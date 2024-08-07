"use strict";
/**
 * any type
 */
let firstName = "Mark";
firstName = 123;
firstName = [];
function returnParam(param) {
    // Parameter 'param' implicitly has an 'any' type.
    return param;
}
/**
 * unknown type
 */
function multiplyByTwo(number) {
    //   return number * 2;
    if (typeof number === "number") {
        return number * 2;
    }
    return "Please provide a valid number";
}
console.log(multiplyByTwo(4));
console.log(multiplyByTwo("string"));
// Annotation - when you are assigning a type.
let firstName2 = "Mark";
let age = 31;
let today = new Date();
let unique = Symbol();
function addNumbers(a, b) {
    return a + b;
}
// Inference - When TypeScript able to infer the correct type of a variable or declaration
let finalResult = addNumbers(2, 3);
let stringOrNumber = 1234;
function print(input) {
    if (input) {
        console.log(input);
    }
    else {
        console.log("Please input something to print");
    }
}
print();
print("Hello World!");
const throwError = (errorMessage) => {
    // throwError returns the type never
    throw new Error(errorMessage);
};
// let strings:Object = ["a", "b"]  // This is acceptable according to TypeScript
let strings = ["a", "b"]; // But this is more suitable one
let myFunc = () => 2;
// let myFunc: Object = () => 2;
/**
 * Type Casting
 */
let firstName3 = "John";
let lastName = "Doe";
// User from API
let user = {
    name: "Mark",
    email: "mark@email.com",
};
function fetchUser() {
    return user;
}
let fetchedUser = fetchUser();
