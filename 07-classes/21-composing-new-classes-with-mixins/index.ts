/*
 * Composing New Classes With Mixins
 */

type Constructor = new (...args: any[]) => {};

function Timestamp<T extends Constructor>(Base: T) {
  return class extends Base {
    protected timestamp: Date = new Date();

    getTimestamp() {
      return this.timestamp;
    }
  };
}

class User {
  constructor(public name: string) {}
}

class UserWithTimestamp extends Timestamp(User) {
  constructor(name: string, public age: number) {
    super(name);
  }

  displayInfo() {
    console.log(`Name: ${this.name}, Age: ${this.age}`);
    console.log(`Timestamp: ${this.getTimestamp()}`);
  }
}

const user = new UserWithTimestamp("Alice", 30);
console.log(user);
user.displayInfo();

export {};
