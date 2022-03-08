// classes
class Department {
  static age = 22;

  constructor(
    public name: string,
    protected employees: string[],
    private readonly id: number
  ) {
    this.name = name;
    this.employees = employees;
    // to access static inside the class
    // console.log(Department.age);
  }

  get mostRecentId() {
    if (this.id) {
      return this.id;
    }
    return new Error('Error Error Error');
  }

  set editName(name: string) {
    if (!name) {
      throw Error('Please pass a valid value');
    }
    this.name = name;
  }

  describe(this: Department) {
    console.log('Department ' + this.name);
  }

  // addEmployee(employee: string) {
  //   this.employees.push(employee);
  // }

  // printEmployee() {
  //   console.log(this.employees);
  // }
}

class AccountingDepartment extends Department {
  private static instance: AccountingDepartment;
  private constructor(
    name: string,
    employees: string[],
    id: number,
    private reports: string[]
  ) {
    super(name, employees, id);
  }

  static getInstance(
    name: string,
    employees: string[],
    id: number,
    reports: string[]
  ) {
    if (AccountingDepartment.instance) {
      return this.instance;
    }
    this.instance = new AccountingDepartment(name, employees, id, reports);
    return this.instance;
  }

  addEmployee(employee: string): void {
    if (employee === 'khaled') {
      return;
    }
    this.employees.push(employee);
  }

  consoleReport() {
    return this.reports;
  }

  static employee(name: string) {
    return { name: name };
  }
}

// const accounting = new AccountingDepartment('Accounting', [], 88, []);
// const employee1 = AccountingDepartment.employee('khaled');
const accountingInstance = AccountingDepartment.getInstance(
  'khaled',
  [],
  55,
  []
);
console.log(accountingInstance);

// accounting.addEmployee('khaled');
// accounting.addEmployee('amr');
// console.log(accounting.mostRecentId);
// accounting.printEmployee();

// class HttpError extends Error {
//   constructor(public message: string, public code: number) {
//     super(message);
//     this.code = code;
//   }
// }

// const errorMessage = new HttpError('Something went wrong', 420);

// throw errorMessage;
