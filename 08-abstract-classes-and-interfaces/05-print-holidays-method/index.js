/*
 * Print Holidays Method
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
    printHolidays() {
        if (this.holidays.length === 0) {
            return console.log("There are no holidays");
        }
        console.log("Here is the list of holidays");
        this.holidays.forEach((holiday, index) => console.log(`${index + 1}. ${holiday.reason}, ${holiday.date}`));
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
itDepartment.printHolidays();
adminDepartment.printHolidays();
export {};
