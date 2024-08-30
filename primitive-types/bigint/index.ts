/*
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

//! A bigint literal must be an integer.
//* let d: bigint = 12345.6n;

//! Argument of type 'bigint' is not assignable to parameter of type 'number'.
//* let f = Math.log(bigInt1);
