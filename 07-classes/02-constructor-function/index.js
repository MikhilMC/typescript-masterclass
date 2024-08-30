/*
 * constructor Function
 */
class User {
    constructor(name, email) {
        this.name = "John";
        this.email = "john@email.com";
        console.log(name);
        console.log(email);
    }
    greet() {
        return `Hello John`;
    }
}
const user = new User("John", "john@email.com");
const user2 = new User("Mark", "mark@email.com");
export {};
