"use strict";
/*
 * Function Call Signatures
 */
Object.defineProperty(exports, "__esModule", { value: true });
var AgeUnit;
(function (AgeUnit) {
    AgeUnit["Years"] = "years";
    AgeUnit["Months"] = "months";
})(AgeUnit || (AgeUnit = {}));
let person2 = {
    name: "Scott",
    age: 30,
    ageUnit: AgeUnit.Years,
    greet: (greeting) => {
        return `${greeting} ${person2.name}`;
    },
};
console.log(person2.greet("Hello"));
