// ////////////////////////////////////////////////////////////////////////////////////
// Generic Functions
// function merge<T, U>(objA: T, objB: U) {
//   return Object.assign(objA, objB);
// }

// const mergeObj = merge({ name: 'khaled' }, { age: 22 });

// you can also extend the generics to the regular types like
// function merge<T extends object, U extends object>(objA: T, objB: U) {
//   return Object.assign(objA, objB);
// }

// const mergeObj = merge({ name: 'khaled' }, { age: 22 });

// interface Lengthy {
//   length: number;
// }

// function countAndPrint<T extends Lengthy>(element: T): [T, string] {
//   let descriptionText = 'Got no elements.';
//   if (element.length > 0) {
//     descriptionText = 'Got ' + element.length + ' Elements';
//   }
//   return [element, descriptionText];
// }

// function extractAndConvert<T extends object, U extends keyof T>(
//   obj: T,
//   key: U
// ): string {
//   return 'Value: ' + obj[key];
// }

// extractAndConvert({ name: 'khaled' }, 'name');

// ////////////////////////////////////////////////////////////////////////////////////
// Generic Classes

// class DataStorage<T> {
//   private data: T[] = [];

//   addItem(item: T): void {
//     this.data.push(item);
//   }

//   removeItem(item: T): void {
//     if (this.data.indexOf(item) === -1) {
//       return;
//     }
//     this.data.splice(this.data.indexOf(item), 1);
//   }

//   get getItems(): T[] {
//     return [...this.data];
//   }
// }

// const textStorage = new DataStorage<string>();
// textStorage.addItem('Khaled');
// textStorage.addItem('Refaat');
// textStorage.removeItem('Khaled');

// console.log(textStorage.getItems);

// /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Utilities
// https://www.typescriptlang.org/docs/handbook/utility-types.html

interface CourseGoal {
  title: string;
  description: string;
  completeDate: Date;
}

// The Partial here makes the arguments optional you pass it or not dose'nt  matter
function createCourseGoal(
  title: string,
  description: string,
  completeDate: Date
): CourseGoal {
  // switch between Partial and Required to see the different and Readonly
  const courseGoal: Readonly<CourseGoal> = {
    title,
    description,
    completeDate,
  };

  return courseGoal as CourseGoal;
}
