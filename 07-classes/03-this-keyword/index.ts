/*
 * this Keyword
 */

class User {
  name: string;
  email: string;

  constructor(name: string, email: string) {
    this.name = name;
    this.email = email;
  }

  greet() {
    return `Hello ${this.name}`;
  }
}

const user: User = new User("John", "john@email.com");
const user2: User = new User("Mark", "mark@email.com");

console.log(user);
console.log(user.greet());
console.log(user2);
console.log(user2.greet());

export {};
