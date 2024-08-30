/*
 * Tuples
 */
//* This format is wrong.
//* let person: (number | string)[] = ["John", "Doe", 18];
//* This is the desired format, as a tuple with fixed length
let person: [string, string, number] = ["John", "Doe", 18];

type User = [string, string, number, string?];
let user: User = ["Mark", "Doe", 32, "mark@email.com"];

type ListOfStudents = [number, boolean, ...string[]];
const passingStudents: ListOfStudents = [3, true, "John", "Stella", "Mark"];

type StringBooleansNumber = [string, ...boolean[], number];
type BooleansStringsNumber = [...boolean[], string, number];

let stringBooleansNumber: StringBooleansNumber = ["string", true, false, 32];
let booleansStringsNumber: BooleansStringsNumber = [true, "string", 32];

export {};
