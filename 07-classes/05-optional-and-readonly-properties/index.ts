/*
 * Optional And Readonly Types
 */
class User {
  name: string;
  readonly email: string;
  lastname?: string;

  constructor(name: string, email: string, lastname?: string) {
    this.name = name;
    this.email = email;
    this.lastname = lastname;
  }

  greet() {
    return `Hello ${this.name}`;
  }
}

const user: User = new User("John", "john@email.com");

user.lastname = "Doe";
console.log(user);

const user2: User = new User("Alice", "alice@email.com", "Wonderland");

//! Cannot assign to 'email' because it is a read-only property.
// user2.email = "newalice@email.com";

export {};
