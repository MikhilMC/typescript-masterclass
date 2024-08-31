/*
 * private Members
 */
class User {
    constructor(name, email, phone, lastname) {
        this.name = name;
        this.email = email;
        this.phone = phone;
        if (lastname) {
            this.lastname = lastname;
        }
    }
    greet() {
        return `Hello ${this.name}`;
    }
    printPhone() {
        console.log(this.phone);
    }
}
class Admin extends User {
    constructor(name, email, phone, usersReporting, lastname) {
        super(name, email, phone, lastname);
        this.isAdmin = true;
        this.usersReporting = usersReporting;
    }
    printName() {
        console.log(this.name);
    }
    printNumber() {
        //! Property 'phone' is private and only accessible within class 'User'.
        //* console.log(this.phone);
    }
}
const user = new User("John", "john@email.com", 9876543210);
const admin = new Admin("Mark", "mark@email.com", 9876543210, 11);
user.name = "Alice";
admin.lastname = "Doe";
// You will see that phone number can't be accessed on any of the objects
//! Property 'phone' is private and only accessible within class 'User'.
//* console.log(user.phone);
//! Property 'phone' is private and only accessible within class 'User'.
//* console.log(admin.phone);
admin.printName();
// You will see the method that is inside the class has the access to the private members of the class
user.printPhone();
export {};
