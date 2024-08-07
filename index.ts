/**
 * PRIMITIVE TYPES
 */

/*
 * String types
 */

var firstName: string = "John";
firstName = 1; // Type 'number' is not assignable to type 'string'
let automobile = "BMW";
const city = "New York";
let students = 32;
let studentsAsString: string = students.toString();

/*
 * Number types
 */
// var age: number = 32;
let year: number = 2024;
const numberOfMembers = 61;
// numberOfMembers = 128;  // Cannot assign to 'numberOfMembers' because it is a constant.
let stringToNumber: number = parseInt("1985");

/*
 * Booleans
 */
// var isStudent: boolean = false;
const alwaysStudent = true;
let minimumAge: boolean = age >= 6 ? true : false;

/*
 * null and undefined
 */
// let user: undefined;
// console.log(user);

let userRole: null;
console.log(userRole); // Variable 'userRole' is used before being assigned
userRole = null;
console.log(userRole);
console.log(userRole === user);

if (!userRole) {
  console.log("This condition is true");
}

if (!user) {
  console.log("This condition is true");
}

/**
 * Bigint
 */
const safeInt = Number.MAX_SAFE_INTEGER;
console.log(safeInt);
const safeIntPlusOne = safeInt + 1;
const safeIntPlusTwo = safeInt + 2;
console.log(safeIntPlusOne);
console.log(safeIntPlusTwo);

let bigInt1: bigint = BigInt(1234);
let bigint2: bigint = 123434543n;
console.log(bigInt1);
console.log(bigint2);

let c: bigint = bigInt1 - bigint2;

// let d: bigint = 12345.6n;   // A bigint literal must be an integer.

// let f = Math.log(bigInt1); // Argument of type 'bigint' is not assignable to parameter of type 'number'.

/**
 * Symbol
 */
let id: symbol = Symbol(1234);
let alphabeticId: symbol = Symbol("id");

let user2 = {
  [id]: "1234",
  name: "Mark",
  getId() {
    return this[id];
  },
};

console.log(user2.name);
console.log(user2.id); // Property 'id' does not exist on type '{ [x: symbol]: string; name: string; }'.
console.log(id);
console.log(user2.getId());
