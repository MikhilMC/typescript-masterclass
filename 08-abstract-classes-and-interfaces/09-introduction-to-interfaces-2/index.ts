/*
 * Introduction To Interfaces - 2
 */

interface Person {
  name: string;
  email: string;
  age: number;
  phone?: number;
  greet?: () => void;
}

const person: Person = {
  name: "John",
  email: "john@email.com",
  age: 25,
};

export {};
