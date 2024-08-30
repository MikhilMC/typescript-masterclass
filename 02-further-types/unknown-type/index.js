"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/*
 * unknown Type
 */
function multiplyByTwo(number) {
    //* return number * 2;
    if (typeof number === "number") {
        return number * 2;
    }
    return "Please provide a valid number";
}
console.log(multiplyByTwo(4));
console.log(multiplyByTwo("string"));
