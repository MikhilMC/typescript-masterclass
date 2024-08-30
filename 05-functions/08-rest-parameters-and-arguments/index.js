/*
 * Rest Parameters And Arguments
 */
function multiplyBy(by, ...numbers) {
    return numbers.map((number) => number * by);
}
console.log(multiplyBy(2, 1, 2, 3, 4, 5));
console.log(multiplyBy(2, 1, 2, 3, 4));
const args = [8, 5];
//! A spread argument must either have a tuple type or be passed to a rest parameter.
//* const angle = Math.atan2(...args);
const args2 = [8, 5];
const angle2 = Math.atan2(...args2);
const args3 = [8, 5];
const angle3 = Math.atan2(...args3);
export {};
