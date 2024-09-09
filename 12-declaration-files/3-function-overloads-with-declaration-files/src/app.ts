/*
 * Function Overloads With Declaration Files
 */
import { add } from "./calculator.js";

const sum = add(5, 3);
const concatinated = add("5", 3);
const strings = add("Hello ", "World!");
console.log(sum);
console.log(concatinated);
console.log(strings);
