"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/*
 * Mixed Module Interoperability
 */
const printHello = require("./functions/strings");
const math_1 = require("./functions/math");
printHello();
console.log((0, math_1.add)(5, 2));
