"use strict";
/*
 * Declaring Functions
 */
Object.defineProperty(exports, "__esModule", { value: true });
//* Named function
/**
 ** Function returns an intro string
 * @param name string
 * @param age number
 * @returns string
 */
function intro(name, age) {
    return `My name is ${name} and I am ${age} years old`;
}
//* Function expression
const intro2 = function (name, age) {
    return `My name is ${name} and I am ${age} years old`;
};
//* Arrow function
const intro3 = (name, age) => {
    return 12334;
};
