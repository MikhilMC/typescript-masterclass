/*
 * Implementing A Polymorphic Function
 */

const filter = (array: any[], predicate: (item: any) => boolean) => {
  const result: any[] = [];
  for (let i = 0; i < array.length; i++) {
    if (predicate(array[i])) {
      result.push(array[i]);
    }
  }
  return result;
};

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
function predicate(item: number) {
  return item > 7;
}

let animals = ["cat", "dog", "rat"];
function filterRat(item: string) {
  return item === "cat";
}

console.log(filter(numbers, predicate));
console.log(filter(animals, filterRat));

export {};
