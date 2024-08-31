/*
 * Shorthand For constructor
 */
class User {
    constructor(name, email, phone, lastname) {
        this.name = name;
        this.email = email;
        this.phone = phone;
        this.lastname = lastname;
    }
    greet() {
        return `Hello ${this.name}`;
    }
}
class Admin extends User {
    constructor(name, email, phone, usersReporting, lastname) {
        super(name, email, phone, lastname);
        this.usersReporting = usersReporting;
        this.isAdmin = true;
    }
    greet() {
        return `Hello ${this.name}! I am admin.`;
    }
}
const user = new User("John", "john@email.com", 9876543210);
const admin = new Admin("Mark", "mark@email.com", 9876543210, 11);
console.log(user.greet());
console.log(admin.greet());
export {};
