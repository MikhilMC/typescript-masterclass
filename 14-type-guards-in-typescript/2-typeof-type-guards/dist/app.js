"use strict";
/*
 * typeof Type Guards
 */
const user = {
    name: "John",
    age: 32,
};
let tom;
function printStrings(str) {
    if (str && typeof str === "object") {
        for (const s of str) {
            console.log(s);
        }
    }
    else if (typeof str === "string") {
        console.log(str);
    }
    else {
        console.log("Pass an array of strings or a string as an argument");
    }
}
