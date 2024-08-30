/*
 * Using Generics Instead Of Function Overloading
 */
const filter = (array, predicate) => {
    const result = [];
    for (let i = 0; i < array.length; i++) {
        if (predicate(array[i])) {
            result.push(array[i]);
        }
    }
    return result;
};
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
function predicate(item) {
    return item > 7;
}
let animals = ["cat", "dog", "rat"];
function filterRat(item) {
    return item === "cat";
}
console.log(filter(numbers, predicate));
console.log(filter(animals, filterRat));
export {};
