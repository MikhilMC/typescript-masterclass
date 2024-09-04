/*
 * Print Holidays Method
 */

type Holidays = {
  date: Date;
  reason: string;
}[];

abstract class Department {
  protected abstract holidays: Holidays;
  protected constructor(protected name: string) {}

  public addHolidays(holidays: Holidays) {
    if (Array.isArray(holidays)) {
      for (let holiday of holidays) {
        this.holidays.push(holiday);
      }
    }
  }

  public printHolidays(): void {
    if (this.holidays.length === 0) {
      return console.log("There are no holidays");
    }
    console.log("Here is the list of holidays");

    this.holidays.forEach((holiday, index) =>
      console.log(`${index + 1}. ${holiday.reason}, ${holiday.date}`)
    );
  }
}

class ItDepartment extends Department {
  protected holidays: Holidays = [];

  constructor() {
    super("IT Department");
  }
}

class AdminDepartment extends Department {
  protected holidays: Holidays = [];

  constructor() {
    super("Admin Department");
  }
}

const itHolidays: Holidays = [
  {
    date: new Date(2024, 5, 12),
    reason: "IT Department day",
  },
  {
    date: new Date(2024, 11, 25),
    reason: "Christmas",
  },
];

const adminHolidays: Holidays = [
  {
    date: new Date(2024, 9, 1),
    reason: "Admin Department day",
  },
  {
    date: new Date(2024, 11, 25),
    reason: "Christmas",
  },
];

const itDepartment: ItDepartment = new ItDepartment();
const adminDepartment: AdminDepartment = new AdminDepartment();

itDepartment.addHolidays(itHolidays);
adminDepartment.addHolidays(adminHolidays);

itDepartment.printHolidays();
adminDepartment.printHolidays();

export {};
