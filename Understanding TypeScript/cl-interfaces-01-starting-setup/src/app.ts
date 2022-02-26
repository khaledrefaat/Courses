// class Department {
//   constructor(public name: string, private employees: string[], private readonly id: string) {
//     this.name = name;
//     this.employees = employees;
//   }

//   describe(this: Department) {
//     console.log('Department ' + this.name);
//   }

//   addEmployee(employee: string) {
//     this.employees.push(employee);
//   }

//   printEmployee() {
//     console.log(this.employees);
//   }
// }

// const accounting = new Department('Accounting', [], 88);

// accounting.addEmployee('khaled');
// accounting.addEmployee('amr');
// accounting.printEmployee();

class HttpError extends Error {
  constructor(public message: string, public code: number) {
    super(message);
    this.code = code;
  }
}

const errorMessage = new HttpError('Something went wrong', 420);

throw errorMessage;
