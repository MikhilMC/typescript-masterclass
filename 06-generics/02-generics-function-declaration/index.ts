/*
 * Generic Function Declaration
 */

type GetFirstElement = <T>(arr: T[]) => T;

//* This function can be used for any kind of type
const getFirstElement: GetFirstElement = (arr) => {
  return arr[0];
};

const numbersArray = [1, 23, 4, 5];
const stringArray = ["a", "v"];

const numberOutput = getFirstElement(numbersArray);
const stringOutput = getFirstElement<string>(stringArray);

type FirstElement<T> = (arr: T[]) => T;

//* This function can be used for only string type
const firstElement: FirstElement<string> = (arr) => {
  return arr[0];
};

//* This function can be used for only number type
const firstElementNumber: FirstElement<number> = (arr) => {
  return arr[0];
};

//! Type 'number' is not assignable to type 'string'.
//* console.log(firstElement([1, 2, 3]));

console.log(firstElement(["1", "2", "3"]));

export {};
