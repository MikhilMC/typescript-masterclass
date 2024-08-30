/*
 * Readonly Arrays And Tuples
 */
//* Readonly array
let numbers: readonly number[] = [1, 2, 3];
//! Property 'push' does not exist on type 'readonly number[]'.
//* numbers.push(4);

//* Readonly tuple
type ReadonlyTuple = readonly [string, string, number];

let person2: ReadonlyTuple = ["John", "Doe", 21];
//! Cannot assign to '0' because it is a read-only property.
//* person2[0] = "Mark";

//* Alternative syntax for readonly arrays
type a = Readonly<(string | number)[]>;
type b = ReadonlyArray<string | number>;

//* Alternative syntax for readonly tuples
type c = Readonly<[number, string, number]>;

export {};
