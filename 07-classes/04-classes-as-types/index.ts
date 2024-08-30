/*
 * Classes As Types
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

//! Property 'lastname' does not exist on type 'User'.
//* user.lastname = "Doe";

//! Type 'number' is not assignable to type 'string'.
//* user2.name = 23;

export {};
