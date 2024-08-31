/*
 * More Control Over Classes
 */
class Person {
    constructor(firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        if (age > 100 || age < 0) {
            throw new Error("The age must be within the age range of 0-100");
        }
        this.fullname = `${firstName} ${lastName}`;
    }
}
const john = new Person("John", "Doe", 45);
const mark = new Person("Mark", "Doe", 25);
// console.log(john.fullname());
console.log(john.fullname);
// console.log(mark.fullname());
console.log(mark.fullname);
export {};
