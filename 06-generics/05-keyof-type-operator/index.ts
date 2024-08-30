/*
 * keyof Type Operator
 */
type Events = {
  id: number;
  date: Date;
  type: "indoor" | "outdoor";
};

type UnionOfKeyofEvents = keyof Events; //* id | date | type

let idOfEvents: UnionOfKeyofEvents = "id";
let dateOfEvents: UnionOfKeyofEvents = "date";

type Numeic = {
  [key: number]: string;
};

type NumericKeyof = keyof Numeic;

type NumberAndString = {
  [key: string]: string;
};

//* We get a union of numbers as well as a string because this is how JavaScript objects work behind the scenes
//* NumberAndString is string | number — this is because JavaScript object keys are always coerced to a string, so obj[0] is always the same as obj["0"].
type NumberAndStringKeyof = keyof NumberAndString;

let stringObject: NumberAndString = {
  0: "First",
  second: "Second",
};

//* Accessing the object proerty with the index of the property
console.log(stringObject["0"]);

//* Declaring partial types using generics and keyof
type Person = {
  name: string;
  age: string;
  address: string;
};

//* Creating a type where the keys are the same as Person but the values are optional and nullable
//* Hover over PartialPerson to see how TypeScript is inferring it
type PartialPerson = {
  [K in keyof Person]?: Person[K] | null;
};

let partial: PartialPerson = {
  name: "John",
};

export {};
