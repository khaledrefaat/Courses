interface Person {
  name: string;
  lastName: string;
  greet(phrase: string): void;
}

let user: Person;

user = {
  name: 'khaled',
  lastName: 'refaat',
  greet(phrase: string) {
    console.log(`${phrase}  ${this.name} ${this.lastName}`);
  },
};

user.greet('Hello');

interface Named {
  readonly name: string;
  //   question mark means this is optional might exists or not
  outPut?: string;
}

interface ReturnFn {
  (birthYear: number, currentYear: number): number;
}

let calc: ReturnFn;

calc = (birthYear: number, currentYear: number) => currentYear - birthYear;

console.log(calc(1999, 2022));

interface Greetable extends Named {
  lastName: string;
  greet(phrase: string): void;
}

class Greet implements Greetable {
  name: string;
  lastName: string;
  age = 22;
  constructor(n: string, ln: string) {
    this.name = n;
    this.lastName = ln;
  }

  greet(phrase: string) {
    console.log(phrase + ' ' + this.name + ' ' + this.lastName);
  }
}

let greet1: Greetable;

greet1 = new Greet('khaled', 'refaat');

greet1.greet('hi');
