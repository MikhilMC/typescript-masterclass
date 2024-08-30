"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/*
 * Tuples
 */
//* This format is wrong.
//* let person: (number | string)[] = ["John", "Doe", 18];
//* This is the desired format, as a tuple with fixed length
let person = ["John", "Doe", 18];
let user = ["Mark", "Doe", 32, "mark@email.com"];
const passingStudents = [3, true, "John", "Stella", "Mark"];
let stringBooleansNumber = ["string", true, false, 32];
let booleansStringsNumber = [true, "string", 32];
