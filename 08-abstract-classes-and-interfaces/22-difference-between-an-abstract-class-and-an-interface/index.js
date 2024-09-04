/*
 * Difference Between An Abstract Class And An Interface
 */
class Person {
    greet() {
        console.log(`Hello ${this.name}`);
    }
}
class RegisteredPerson extends Person {
    constructor(name, email, phone) {
        super();
        this.name = name;
        this.email = email;
        this.phone = phone;
    }
}
const person = new RegisteredPerson("John", "john@email.com", 9876543210);
console.log(person);
person.greet();
export {};
