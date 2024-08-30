/*
 * Generics With Objects
 */
type KeyValuePair<K, V> = {
  key: K;
  value: V;
};

let stringNumberPair: KeyValuePair<string, number> = {
  key: "age",
  value: 30,
};

let numberArrayPair: KeyValuePair<number, string[]> = {
  key: 1234,
  value: ["a"],
};

type HasId = {
  id: number;
};

function printId<T extends HasId>(obj: T): void {
  console.log(obj.id);
}

const user = {
  id: 1234,
  name: "Alice",
};

console.log(printId(user));

const product = {
  name: "Laptop",
};

//! Argument of type '{ name: string; }' is not assignable to parameter of type 'HasId'.
//! Property 'id' is missing in type '{ name: string; }' but required in type 'HasId'.
//* console.log(printId(product));

const newProduct = { ...product, id: 123 };
console.log(printId(newProduct));

export {};
