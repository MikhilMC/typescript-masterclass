/*
 * More Control Over Classes
 */

class Person {
  public fullname: string;
  constructor(
    public firstName: string,
    public lastName: string,
    public age: number
  ) {
    if (age > 100 || age < 0) {
      throw new Error("The age must be within the age range of 0-100");
    }

    this.fullname = `${firstName} ${lastName}`;
  }

  //   public fullname() {
  //     return `${this.firstName} ${this.lastName}`;
  //   }
}

const john = new Person("John", "Doe", 45);
const mark = new Person("Mark", "Doe", 25);

// console.log(john.fullname());
console.log(john.fullname);
// console.log(mark.fullname());
console.log(mark.fullname);

export {};
