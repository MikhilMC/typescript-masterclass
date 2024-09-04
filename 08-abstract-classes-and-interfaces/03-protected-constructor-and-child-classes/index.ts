/*
 * Protected Constructor And Child Classes
 */

type Holidays = {
  date: Date;
  reason: string;
}[];

abstract class Department {
  protected abstract holidays: Holidays;
  //* public constructor(protected name: string) {}
  protected constructor(protected name: string) {}

  public addHolidays(holidays: Holidays) {
    if (Array.isArray(holidays)) {
      for (let holiday of holidays) {
        this.holidays.push(holiday);
      }
    }
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

//* const itDepartment: ItDepartment = new ItDepartment("IT");
//* const accountsDepartment: ItDepartment = new ItDepartment("Accounts");

export {};
