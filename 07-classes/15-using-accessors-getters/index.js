/*
 * Using Accessors - Getters
 */
class Person {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    set age(age) {
        if (age > 100 || age < 0) {
            throw new Error("The age must be within the age range of 0-100.");
        }
        this._age = age;
    }
    get age() {
        if (this._age === undefined) {
            throw new Error("The age property is not defined.");
        }
        return this._age;
    }
    get fullname() {
        return `${this.firstName} ${this.lastName}`;
    }
}
const john = new Person("John", "Doe");
// const mark = new Person("Mark", "Doe");
//! throws an error if we tries to get 'age' property of 'Person' before initializing it
//* console.log(john.age);
john.age = 45;
console.log(john.age); //* 45
console.log(john.fullname);
export {};
