/**
 * ! You are developing a simple employee management system for a company. Implement the following requirements using TypeScript:
 *
 * TODO: 1. Class Definition: Create a class Employee with the following properties:
 ** -  name (string, public)
 ** -  age (number, public)
 ** -  salary (number, private)
 ** -  id (number, protected)
 *
 * TODO: 2. Use shorthand syntax in the constructor to initialize the properties name and age.
 *
 * TODO: 3. Implement getter and setter methods for the salary property. The setter should ensure the salary is a positive number.
 *
 * TODO: 4. Add a static property companyName (string, public) and a static method getCompanyName that returns the company name.
 *
 * TODO: 5. Create a subclass Manager that extends the Employee class. Add an additional property department (string, public).
 *
 * TODO: 6. Override a method getDetails in the Manager class to include the department information along with the employee details.
 */
class Employee {
  public static companyName: string = "Google";

  constructor(
    public name: string,
    public age: number,
    private _salary: number,
    protected id: number
  ) {}

  public get salary(): number {
    return this._salary;
  }

  public set salary(newSalary: number) {
    if (newSalary <= 0) {
      throw new Error("Salary must be a positive number.");
    } else {
      this._salary = newSalary;
    }
  }

  public static getCompanyName(): string {
    return Employee.companyName;
  }

  public getDetails(): string {
    return `Name: ${this.name}, Age: ${this.age}, ID: ${this.id}`;
  }
}

class Manager extends Employee {
  constructor(
    name: string,
    age: number,
    salary: number,
    id: number,
    public department: string
  ) {
    super(name, age, salary, id);
  }

  public getDetails(): string {
    return `${super.getDetails()}, Department: ${this.department}`;
  }
}

const employee: Employee = new Employee("Alice", 25, 50000, 1);
console.log(employee.getDetails());

const manager: Manager = new Manager("Alice", 40, 75000, 2, "Engineering");
console.log(manager.getDetails());

export {};
