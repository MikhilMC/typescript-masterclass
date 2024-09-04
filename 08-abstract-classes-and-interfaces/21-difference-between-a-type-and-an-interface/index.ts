/*
 * Difference Between A Type And An Interface
 */

type User = {
  name: string;
};

//* Duplicating of types is not permitted by typescript
//! Duplicate identifier 'User'.
//* type User = { lastName: string };

type AdminUser = {
  isAdmin: boolean;
};

//* Intersection Type
const user: User & AdminUser = {
  name: "John",
  isAdmin: true,
};

//* Union Type
const userOrAdmin: User | AdminUser = { name: "Mark" };

//* Tuple
type ResponseTuple = [string, number];

//* But duplicating of interfaces are permitted.
interface Person {
  name: string;
}

interface Person {
  lastName: string;
}

const person: Person = {
  name: "John",
  lastName: "Doe",
};

interface Name {
  name: string;
}

interface LastName {
  lastName: string;
}

//* Interfaces can extends each other, but types can't.
interface Person2 extends Name, LastName {}

const person2: Person2 = {
  name: "John",
  lastName: "Doe",
};

class Person3 implements Name, LastName {
  constructor(public name: string, public lastName: string) {}
}

const person3: Person3 = new Person3("John", "Doe");

export {};
