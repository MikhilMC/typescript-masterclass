"use strict";
/*
 * Function Overloading
 */
Object.defineProperty(exports, "__esModule", { value: true });
const str = "Hello, World!";
const part1 = str.slice(7);
const part2 = str.slice(7, 10);
console.log(part1);
console.log(part2);
const reserve = (departureDate, returnDateOrDepartingFrom, departingFromOrDestination, destination) => {
    if (returnDateOrDepartingFrom instanceof Date && destination) {
        return {
            departureDate: departureDate,
            returnDate: returnDateOrDepartingFrom,
            departingFrom: departingFromOrDestination,
            destination: destination,
        };
    }
    else if (typeof returnDateOrDepartingFrom === "string") {
        return {
            departureDate: departureDate,
            departingFrom: returnDateOrDepartingFrom,
            destination: departingFromOrDestination,
        };
    }
    else {
        throw new Error("Please provide valid details to reserve a ticket.");
    }
};
console.log(reserve(new Date(), new Date(), "New York", "Washington"));
console.log(reserve(new Date(), "New York", "Washington"));
