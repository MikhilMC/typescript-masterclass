"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/*
 * Default And Optional Parameters
 */
function intro(name, age, country) {
    if (country) {
        return `My name is ${name} and I am ${age} years old. I live in ${country}`;
    }
    else {
        return `My name is ${name} and I am ${age} years old`;
    }
}
console.log(intro("John", 32));
console.log(intro("John", 32, "USA"));
