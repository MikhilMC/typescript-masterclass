/*
 * Overriding Methods In Child Class
 */

class User {
  public name: string;
  readonly email: string;
  lastname?: string;
  private phone: number;

  constructor(name: string, email: string, phone: number, lastname?: string) {
    this.name = name;
    this.email = email;
    this.phone = phone;
    if (lastname) {
      this.lastname = lastname;
    }
  }

  public greet(): string {
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

  public greet(): string {
    return `Hello ${this.name}! I am admin.`;
  }
}

const user: User = new User("John", "john@email.com", 9876543210);
const admin: Admin = new Admin("Mark", "mark@email.com", 9876543210, 11);

console.log(user.greet());
console.log(admin.greet());

export {};
