/*
 * Function Call Signatures
 */

enum AgeUnit {
  Years = "years",
  Months = "months",
}

type GreetingFunction = (greeting: string) => string;

type Person2 = {
  name: string;
  age: number;
  ageUnit: AgeUnit;
  // greet: Function
  // greet: (greeting: string) => string;
  greet: GreetingFunction;
};

let person2: Person2 = {
  name: "Scott",
  age: 30,
  ageUnit: AgeUnit.Years,
  greet: (greeting) => {
    return `${greeting} ${person2.name}`;
  },
};

console.log(person2.greet("Hello"));

export {};
