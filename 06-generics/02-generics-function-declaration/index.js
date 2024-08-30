/*
 * Generic Function Declaration
 */
//* This function can be used for any kind of type
const getFirstElement = (arr) => {
    return arr[0];
};
const numbersArray = [1, 23, 4, 5];
const stringArray = ["a", "v"];
const numberOutput = getFirstElement(numbersArray);
const stringOutput = getFirstElement(stringArray);
//* This function can be used for only string type
const firstElement = (arr) => {
    return arr[0];
};
//* This function can be used for only number type
const firstElementNumber = (arr) => {
    return arr[0];
};
//! Type 'number' is not assignable to type 'string'.
//* console.log(firstElement([1, 2, 3]));
console.log(firstElement(["1", "2", "3"]));
export {};
