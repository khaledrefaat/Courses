type Admin = {
  name: string;
  privileges: string[];
};

type Employee = {
  name: string;
  startDate: Date;
};

type ElevatedEmployee = Admin & Employee;

type Numeric = number | boolean;
type Combinable = string | number;

type Universal = Combinable | Numeric;

const employee1: ElevatedEmployee = {
  name: 'khaled',
  privileges: ['admin'],
  startDate: new Date(),
};

// ///////////////////////////////////////////////////////////////////////
// //////////////////////// Type Guard

function add(n1: Combinable, n2: Combinable) {
  // this is called type guard
  // because it allow us to utilize the flexibility that union types gives us and still insure that our code runs correctly
  if (typeof n1 === 'number' || typeof n2 === 'number') {
    return n1.toString() + n2.toString();
  }
  return n1 + n2;
}

type UnkownEmployee = Admin | Employee;

function printEmployeeInfo(emp: UnkownEmployee) {
  console.log('Name: ' + emp.name);

  // this cant be valid javascript type if you uncomment this typescript will show you error
  // if(typeof emp === 'Admin') {}

  // so to fix it use in - and that's valid vanilla javascript
  if ('privileges' in emp) {
    console.log('Privileges: ' + emp.privileges);
  }

  if ('startDate' in emp) {
    console.log('Start Date: ' + emp.startDate);
  }
}

printEmployeeInfo({ name: 'khaled', startDate: new Date() });
printEmployeeInfo({ name: 'khaled', privileges: ['Admin'] });

class Car {
  drive() {
    console.log('beeb beeb car coming ........');
  }
}

class Truck {
  drive() {
    console.log('On my way ........');
  }

  loadCargo(amount: number) {
    console.log('Loading Cargo .....' + amount);
  }
}

type Vehicle = Car | Truck;

const v1 = new Car();
const v2 = new Truck();

function useVehicle(vehicle: Vehicle) {
  vehicle.drive();

  // this is an alternative way to do type guard and more elegant way ^_^ (to avoid typos too)
  // note it only works on classes
  if (vehicle instanceof Truck) {
    vehicle.loadCargo(80);
  }
}

useVehicle(v1);
useVehicle(v2);

// /////////////////////////////////////////////////////////////////////////
// Discriminated Unions
// another fix for the union types but for interfaces is to use type on each interface
interface Bird {
  flyingSpeed: number;
  type: 'bird';
}

interface Horse {
  runningSpeed: number;
  type: 'horse';
}

type Animal = Bird | Horse;

function moveAnimal(animal: Animal) {
  switch (animal.type) {
    case 'horse':
      return console.log('Moving with speed: ' + animal.runningSpeed);
    case 'bird':
      return console.log('Moving with speed: ' + animal.flyingSpeed);
  }
}

moveAnimal({ flyingSpeed: 300, type: 'bird' });
moveAnimal({ runningSpeed: 100, type: 'horse' });

// ///////////////////////////////////////////////////////////////////////////////////
// Type Casting

// if you remove the HTML INPUT ELEMENT typescript will throw error
// but this solution will clash with jsx in react
// const userInput = <HTMLInputElement>document.getElementById('#user-input');

const userInput = document.getElementById('user-input') as HTMLInputElement;

userInput.value = 'Hello There!';

// ///////////////////////////////////////////////////////////////////////////////////
// Index Properties

interface ErrorContainer {
  [prop: string]: string;
}

const errorBag: ErrorContainer = {
  email: 'Invalid Email!',
  username: 'Invalid Username',
};

// ////////////////////////////////////////////////////////////////////////////////////////////////
// Function overload

type Combinable2 = string | number;

// typescript dose'nt know what this function will return because there is more than one condition so we use overloads to be specific of what we are going to return
function add2(a: string, b: string): string;
function add2(a: number, b: number): number;
function add2(a: Combinable2, b: Combinable) {
  if (typeof a === 'string' || typeof b === 'string') {
    return a.toString() + b.toString();
  }
  return a + b;
}

const result = add2('khaled ', 'refaat');

result.split(' ');

// ///////////////////////////////////////////////////////////////////////////////////////////////
// Optional Chaining

// imagine that you are working with backend api so that this data isn't ready yet
const fetchedUserData = {
  id: 'u1',
  name: 'Max',
  job: { title: 'CEO', description: 'owning my own company' },
};
// this will throw error
// console.log(fetchedUserData.job && fetchedUserData.job.title);

// this is the way to check the data
console.log(fetchedUserData?.job?.title);

// //////////////////////////////////////////////////////////////////////////////////////////////
// Nullish Coalescing

const userInput2 = '';
// if only this userInput2 equals null or undefined (not empty string) take the default value
const storedData = userInput2 ?? 'Default Value';

console.log(storedData);
