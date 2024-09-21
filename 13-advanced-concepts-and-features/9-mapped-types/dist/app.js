"use strict";
/*
 * Mapped Types
 */
let numbers = [1, 5, 6, 8, 10];
let stringNumbers = numbers.map((each) => each.toString());
console.log(stringNumbers);
let nextDay = {
    Mon: "Tue",
    Tue: "Wed",
    Wed: "Thu",
    Thu: "Fri",
    Fri: "Sat",
};
