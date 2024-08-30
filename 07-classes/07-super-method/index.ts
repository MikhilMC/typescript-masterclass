/*
 * super Method
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
  usersReporting: number;

  constructor(
    name: string,
    email: string,
    usersReporting: number,
    lastname?: string
  ) {
    super(name, email, lastname);
    this.usersReporting = usersReporting;
  }
}

const admin = new Admin("Mark", "mark@email.com", 11);
console.log(admin);
