/*
 * Difference Between An Abstract Class And An Interface - 2
 */
class Person {
    greet() {
        console.log(`Hello ${this.name}`);
    }
    static nameClass() {
        return "Class name is Person";
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
console.log(Person.nameClass());
person.greet();
class RegisteredUser {
    constructor(name, email, phone) {
        this.name = name;
        this.email = email;
        this.phone = phone;
    }
    greeting() {
        console.log(`Hello ${this.name}`);
    }
}
const user = new RegisteredUser("John", "john@email.com", 9876543210);
user.greeting();
export {};
