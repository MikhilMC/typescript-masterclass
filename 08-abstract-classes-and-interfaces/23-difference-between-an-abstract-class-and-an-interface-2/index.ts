/*
 * Difference Between An Abstract Class And An Interface - 2
 */

abstract class Person {
  public abstract name: string;
  public abstract email: string;
  public abstract phone: number;

  public greet() {
    console.log(`Hello ${this.name}`);
  }

  public static nameClass() {
    return "Class name is Person";
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
console.log(Person.nameClass());

person.greet();

interface User {
  name: string;
  email: string;
  phone: number;
  greeting: () => void;
}

class RegisteredUser implements User {
  constructor(
    public name: string,
    public email: string,
    public phone: number
  ) {}

  public greeting() {
    console.log(`Hello ${this.name}`);
  }
}

const user: RegisteredUser = new RegisteredUser(
  "John",
  "john@email.com",
  9876543210
);

user.greeting();

export {};
