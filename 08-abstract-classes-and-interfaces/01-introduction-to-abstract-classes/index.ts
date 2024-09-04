/*
 * Introduction To Abstract Classes
 */

type Holidays = {
  date: Date;
  reason: string;
}[];

abstract class Department {
  protected abstract holidays: Holidays;
  protected constructor(protected name: string) {}
}

//! Cannot create an instance of an abstract class.
//* const department = new Department()

class ItDepartment extends Department {
  protected holidays: Holidays = [];
}

class AdminDepartment extends Department {
  protected holidays: Holidays = [];
}

export {};
