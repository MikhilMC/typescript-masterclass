"use strict";
/*
 * super Method
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
    constructor(name, email, usersReporting, lastname) {
        super(name, email, lastname);
        this.isAdmin = true;
        this.usersReporting = usersReporting;
    }
}
const admin = new Admin("Mark", "mark@email.com", 11);
console.log(admin);
