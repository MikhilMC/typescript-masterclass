// Practice Questions
//* 1. Create an array numbers that only accepts numbers and another array strings that only accepts strings.
let numbers: number[] = [1, 2, 3];
let strings: string[] = ["a", "b", "c"];
//* 2. Create a tuple person that holds a string (name) and a number (age).
let person: [string, number] = ["John", 31];

//* 3. Create a readonly array colors that holds strings and a readonly tuple point that holds two numbers (x, y). Attempt to modify their elements and observe the TypeScript error.
let colors: readonly string[] = ["red", "blue", "green"];
let point: readonly [number, number] = [0, 4];

//! Property 'push' does not exist on type 'readonly string[]'.
// colors.push("yellow");

//! Cannot assign to '0' because it is a read-only property.
// point[0] = 1;

//* 4. Create an enum called StatusEnum that should 3 properties Active, Inactive, Pending
enum StatusEnum {
  Active = "active",
  Inactive = "inactive",
  Pending = "pending",
}
//* 5. Create an object as const called Status with the same structure as an StatusEnum
const Status = {
  Active: "active",
  Inactive: "inactive",
  Pending: "pending",
} as const;

export {};
