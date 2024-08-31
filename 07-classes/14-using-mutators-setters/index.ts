/*
 * Using Mutators - Setters
 */

class Person {
  private _age?: number;

  constructor(public firstName: string, public lastName: string) {}

  public set age(age: number) {
    if (age > 100 || age < 0) {
      throw new Error("The age must be within the age range of 0-100.");
    }
    this._age = age;
  }

  public fullname() {
    return `${this.firstName} ${this.lastName}`;
  }
}

const john = new Person("John", "Doe");
const mark = new Person("Mark", "Doe");

john.age = 45;
console.log(john.age); //* undefined

export {};
