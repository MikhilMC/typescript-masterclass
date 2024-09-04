/*
 * Protected Constructor And Child Classes
 */
class Department {
    //* public constructor(protected name: string) {}
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
        super("IT Department");
        this.holidays = [];
    }
}
class AdminDepartment extends Department {
    constructor() {
        super("Admin Department");
        this.holidays = [];
    }
}
export {};
