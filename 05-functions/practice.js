/*
 * Practice Excercise for functions
 */
//* 1. Declare a function named greet that takes a string parameter name and returns a greeting message.
function greet(name) {
    return `Hello ${name}`;
}
function getProduct(id) {
    return { id, name: "Product" };
}
const add = (a, b) => a + b;
const subtract = (a, b) => a - b;
//* 4. Create a function named logMessage that takes a string message and logs it to the console, returning void. Also, create a function named throwError that takes a string message and throws an error, returning never.
function logMessage(message) {
    console.log(message);
}
function throwError(message) {
    throw new Error(message);
}
export {};
