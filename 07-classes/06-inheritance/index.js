/*
 * Inheritance
 */
class User {
    constructor(name, email, lastname) {
        this.name = name;
        this.email = email;
        this.lastname = lastname;
    }
    greet() {
        return `Hello ${this.name}`;
    }
}
class Admin extends User {
    constructor() {
        super(...arguments);
        this.isAdmin = true;
    }
}
const admin = new Admin("Mark", "mark@email.com");
console.log(admin);
export {};
