/*
 * Shorthand For constructor
 */

class User {
  constructor(
    public name: string,
    public readonly email: string,
    private phone: number,
    public lastname?: string
  ) {}

  public greet(): string {
    return `Hello ${this.name}`;
  }
}

class Admin extends User {
  public isAdmin: boolean = true;

  constructor(
    name: string,
    email: string,
    phone: number,
    public usersReporting: number,
    lastname?: string
  ) {
    super(name, email, phone, lastname);
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
