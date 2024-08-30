/*
 * void And never Types
 */

function writeDatabase(value: string): void {
  console.log("Writing to a database, ", value);
}

function throwError(error: string): never {
  throw new Error(error);
}

type check7 = never extends void ? true : false;
type check8 = void extends never ? true : false;

export {};
