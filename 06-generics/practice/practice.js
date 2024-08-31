//* Typescript implementation of JavaScript array map function
//* with Generics and Strictly typing
const map = (array, execute) => {
    if (array.length === 0) {
        return array;
    }
    const result = [];
    for (let i = 0; i < array.length; i++) {
        result.push(execute(array[i]));
    }
    return result;
};
const map2 = (array, func) => {
    if (array.length === 0) {
        return array;
    }
    const result = [];
    for (let i = 0; i < array.length; i++) {
        result.push(func(array[i]));
    }
    return result;
};
let numbers = [4, 5, 6, 7, 8];
const converted = map2(numbers, (num) => num.toString());
console.log(converted);
export {};
