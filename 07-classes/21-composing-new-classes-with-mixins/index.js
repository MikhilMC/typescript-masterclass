/*
 * Composing New Classes With Mixins
 */
function Timestamp(Base) {
    return class extends Base {
        constructor() {
            super(...arguments);
            this.timestamp = new Date();
        }
        getTimestamp() {
            return this.timestamp;
        }
    };
}
class User {
    constructor(name) {
        this.name = name;
    }
}
class UserWithTimestamp extends Timestamp(User) {
    constructor(name, age) {
        super(name);
        this.age = age;
    }
    displayInfo() {
        console.log(`Name: ${this.name}, Age: ${this.age}`);
        console.log(`Timestamp: ${this.getTimestamp()}`);
    }
}
const user = new UserWithTimestamp("Alice", 30);
console.log(user);
user.displayInfo();
export {};
