/*
 * Optional And Readonly Types
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
const user = new User("John", "john@email.com");
user.lastname = "Doe";
console.log(user);
const user2 = new User("Alice", "alice@email.com", "Wonderland");
export {};
