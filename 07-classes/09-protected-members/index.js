/*
 * protected Members
 */
class User {
    constructor(name, email, phone, lastname) {
        this.name = name;
        this.email = email;
        this.phone = phone;
        if (lastname) {
            this.lastname = lastname;
        }
    }
    greet() {
        return `Hello ${this.name}`;
    }
}
class Admin extends User {
    constructor(name, email, phone, usersReporting, lastname) {
        super(name, email, phone, lastname);
        this.isAdmin = true;
        this.usersReporting = usersReporting;
    }
    printName() {
        console.log(this.name);
    }
    printNumber() {
        console.log(this.phone);
    }
}
const user = new User("John", "john@email.com", 9876543210);
const admin = new Admin("Mark", "mark@email.com", 987654321, 11);
//! Property 'phone' is protected and only accessible within class 'User' and its subclasses.
//* console.log(user.phone);
//! Property 'phone' is protected and only accessible within class 'User' and its subclasses.
//* console.log(admin.phone);
console.log(admin.name);
admin.printNumber();
export {};
