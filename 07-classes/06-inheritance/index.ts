/*
 * Inheritance
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

class Admin extends User {
  isAdmin: boolean = true;
}

const admin = new Admin("Mark", "mark@email.com");
console.log(admin);

export {};
