/*
 * Difference Between An Abstract Class And An Interface
 */

abstract class Person {
  public abstract name: string;
  public abstract email: string;
  public abstract phone: number;

  public greet() {
    console.log(`Hello ${this.name}`);
  }
}

class RegisteredPerson extends Person {
  constructor(public name: string, public email: string, public phone: number) {
    super();
  }
}

const person: RegisteredPerson = new RegisteredPerson(
  "John",
  "john@email.com",
  9876543210
);

console.log(person);

person.greet();

interface User {
  name: string;
  email: string;
  phone: number;
}

// class RegisteredUser implements User {}

export {};
