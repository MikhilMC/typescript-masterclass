/*
 * Adding Holidays To Classes
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
const itHolidays = [
    {
        date: new Date(2024, 5, 12),
        reason: "IT Department day",
    },
    {
        date: new Date(2024, 11, 25),
        reason: "Christmas",
    },
];
const adminHolidays = [
    {
        date: new Date(2024, 9, 1),
        reason: "Admin Department day",
    },
    {
        date: new Date(2024, 11, 25),
        reason: "Christmas",
    },
];
const itDepartment = new ItDepartment();
const adminDepartment = new AdminDepartment();
itDepartment.addHolidays(itHolidays);
adminDepartment.addHolidays(adminHolidays);
console.log(itDepartment);
console.log(adminDepartment);
export {};
