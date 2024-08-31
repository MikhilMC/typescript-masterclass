/*
 * protected Members
 */

class User {
  public name: string;
  readonly email: string;
  lastname?: string;
  protected phone: number;

  constructor(name: string, email: string, phone: number, lastname?: string) {
    this.name = name;
    this.email = email;
    this.phone = phone;
    if (lastname) {
      this.lastname = lastname;
    }
  }

  public greet() {
    return `Hello ${this.name}`;
  }
}

class Admin extends User {
  isAdmin: boolean = true;
  usersReporting: number;

  constructor(
    name: string,
    email: string,
    phone: number,
    usersReporting: number,
    lastname?: string
  ) {
    super(name, email, phone, lastname);
    this.usersReporting = usersReporting;
  }

  public printName(): void {
    console.log(this.name);
  }

  public printNumber() {
    console.log(this.phone);
  }
}

const user: User = new User("John", "john@email.com", 9876543210);
const admin: Admin = new Admin("Mark", "mark@email.com", 987654321, 11);

//! Property 'phone' is protected and only accessible within class 'User' and its subclasses.
//* console.log(user.phone);

//! Property 'phone' is protected and only accessible within class 'User' and its subclasses.
//* console.log(admin.phone);

console.log(admin.name);
admin.printNumber();

export {};
