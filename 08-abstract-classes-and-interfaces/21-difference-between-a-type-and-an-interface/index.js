/*
 * Difference Between A Type And An Interface
 */
//* Intersection Type
const user = {
    name: "John",
    isAdmin: true,
};
//* Union Type
const userOrAdmin = { name: "Mark" };
const person = {
    name: "John",
    lastName: "Doe",
};
const person2 = {
    name: "John",
    lastName: "Doe",
};
class Person3 {
    constructor(name, lastName) {
        this.name = name;
        this.lastName = lastName;
    }
}
const person3 = new Person3("John", "Doe");
export {};
