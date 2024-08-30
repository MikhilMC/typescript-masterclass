"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
//* Annotation - when you are assigning a type.
let firstName = "Mark";
let age = 31;
let today = new Date();
let unique = Symbol();
function addNumbers(a, b) {
    return a + b;
}
//* Inference - When TypeScript able to infer the correct type of a variable or declaration
let finalResult = addNumbers(2, 3);
