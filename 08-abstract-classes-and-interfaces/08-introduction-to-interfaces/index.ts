/*
 * Introduction To Interfaces
 */

interface User {
  userName: string;
  email: string;
  login(): void;
}

class Admin implements User {
  constructor(
    public userName: string,
    public email: string,
    public adminLevvel: number
  ) {}

  login(): void {
    console.log("Admin is now logged in");
  }
}

class Customer implements User {
  constructor(public userName: string, public email: string) {}

  login(): void {
    console.log("Customer is now logged in");
  }
}

class Auth {
  public static login(user: User) {
    user.login();
  }
}

const admin: Admin = new Admin("Mark", "mark@email.com", 1);
const customer: Customer = new Customer("Mark", "mark@email.com");

Auth.login(admin);
Auth.login(customer);

export {};
