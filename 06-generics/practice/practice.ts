//* Typescript implementation of JavaScript array map function
//* with Generics and Strictly typing

const map = (array: any[], execute: (item: any) => any): any[] => {
  if (array.length === 0) {
    return array;
  }

  const result: any[] = [];
  for (let i = 0; i < array.length; i++) {
    result.push(execute(array[i]));
  }
  return result;
};

const map2 = <T, U>(array: T[], func: (item: T) => U): (U | T)[] => {
  if (array.length === 0) {
    return array;
  }

  const result: U[] = [];
  for (let i = 0; i < array.length; i++) {
    result.push(func(array[i]));
  }
  return result;
};

let numbers = [4, 5, 6, 7, 8];
const converted = map2<number, string>(numbers, (num) => num.toString());
console.log(converted);

export {};
