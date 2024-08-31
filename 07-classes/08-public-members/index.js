/*
 * public Members
 */
class User {
    constructor(name, email, lastname) {
        this.name = name;
        this.email = email;
        if (lastname) {
            this.lastname = lastname;
        }
    }
    greet() {
        return `Hello ${this.name}`;
    }
}
class Admin extends User {
    constructor(name, email, usersReporting, lastname) {
        super(name, email, lastname);
        this.isAdmin = true;
        this.usersReporting = usersReporting;
    }
    printName() {
        console.log(this.name);
    }
}
const user = new User("John", "john@email.com");
const admin = new Admin("Mark", "mark@email.com", 11);
console.log(user.name);
admin.printName();
export {};
