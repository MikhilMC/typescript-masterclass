/*
 * Introduction To Interfaces
 */
class Admin {
    constructor(userName, email, adminLevvel) {
        this.userName = userName;
        this.email = email;
        this.adminLevvel = adminLevvel;
    }
    login() {
        console.log("Admin is now logged in");
    }
}
class Customer {
    constructor(userName, email) {
        this.userName = userName;
        this.email = email;
    }
    login() {
        console.log("Customer is now logged in");
    }
}
class Auth {
    static login(user) {
        user.login();
    }
}
const admin = new Admin("Mark", "mark@email.com", 1);
const customer = new Customer("Mark", "mark@email.com");
Auth.login(admin);
Auth.login(customer);
export {};
