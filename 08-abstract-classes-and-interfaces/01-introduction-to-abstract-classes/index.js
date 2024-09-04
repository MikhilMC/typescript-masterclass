/*
 * Introduction To Abstract Classes
 */
class Department {
    constructor(name) {
        this.name = name;
    }
}
//! Cannot create an instance of an abstract class.
//* const department = new Department()
class ItDepartment extends Department {
    constructor() {
        super(...arguments);
        this.holidays = [];
    }
}
class AdminDepartment extends Department {
    constructor() {
        super(...arguments);
        this.holidays = [];
    }
}
export {};
