"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let stringOrNumber = 1234;
function print(input) {
    if (input) {
        console.log(input);
    }
    else {
        console.log("Please input something to print");
    }
}
//! Expected 1 arguments, but got 0.
//* print();
print("Hello World!");
