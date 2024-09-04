/*
 * Shared methods in Abstract Classes
 */
class Department {
    constructor(name) {
        this.name = name;
    }
    addHolidays(holidays) {
        if (Array.isArray(holidays)) {
            for (let holiday of holidays) {
                this.holidays.push(holiday);
            }
        }
    }
}
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
