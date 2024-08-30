/*
 * Bigint
 */
const safeInt = Number.MAX_SAFE_INTEGER;
console.log(safeInt);
const safeIntPlusOne = safeInt + 1;
const safeIntPlusTwo = safeInt + 2;
console.log(safeIntPlusOne);
console.log(safeIntPlusTwo);
let bigInt1 = BigInt(1234);
let bigint2 = 123434543n;
console.log(bigInt1);
console.log(bigint2);
let c = bigInt1 - bigint2;
export {};
