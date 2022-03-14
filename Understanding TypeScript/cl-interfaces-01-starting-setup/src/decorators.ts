// function Logger(logString: string) {
//   console.log('Logger Factory')
//   return function (constructor: Function) {
//     console.log('Loging...' + logString);
//     console.log(constructor);
//   }
// }

// function WithTemplate(hookId: string, template: string) {
//   console.log('Template Factory')
//   return function (_: Function) {
//     const elementDiv = <HTMLDivElement>document.getElementById(hookId);
//     if (hookId) {
//       elementDiv.addEventListener('click', (): void => {
//         elementDiv.innerHTML = template;
//       })
//     }
//   }
// }


// // decorators excutes when your class is defined
// @WithTemplate('app', '<h1>This is an app</h1>')
// @Logger('Khaled')
// class Person {
//   name = 'Khaled';

//   constructor() {
//     console.log('Creating person object...');
//   };
// };

// const person = new Person();

// console.log(person)


function Log(target: any, propertyName: string) {
  console.log('Property decorator!');
  console.log(target, propertyName)
}

class Product {
  @Log
  title: string;
  private _price: number;

  set price(val: number) {
    if (val > 0) {
      this._price = val;
    } else {
      throw new Error('Invalid price - should be positive');
    }
  }

  get price() {
    return this._price;
  }

  constructor(title: string, price: number) {
    this.title = title;
    this._price = price;
  }

  setPrice(value: number): void {
    if (value > 0) {
      this._price = value;
    } else {
      throw new Error('Invalid price - should be positive');
    };

  }
  getPriceWithTax(tax: number) {
    return this._price * (1 + tax);
  }
}