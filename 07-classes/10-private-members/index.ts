/*
 * private Members
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

  public greet() {
    return `Hello ${this.name}`;
  }

  public printPhone() {
    console.log(this.phone);
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
    //! Property 'phone' is private and only accessible within class 'User'.
    //* console.log(this.phone);
  }
}

const user: User = new User("John", "john@email.com", 9876543210);
const admin: Admin = new Admin("Mark", "mark@email.com", 9876543210, 11);

user.name = "Alice";
admin.lastname = "Doe";

// You will see that phone number can't be accessed on any of the objects

//! Property 'phone' is private and only accessible within class 'User'.
//* console.log(user.phone);

//! Property 'phone' is private and only accessible within class 'User'.
//* console.log(admin.phone);

admin.printName();

// You will see the method that is inside the class has the access to the private members of the class
user.printPhone();

export {};
