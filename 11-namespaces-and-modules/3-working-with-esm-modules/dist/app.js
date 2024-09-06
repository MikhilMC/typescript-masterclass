/*
 * Working With ESM Modules
 */
import { MathUtils } from "./utils/math-utils.js";
import { StringUtils } from "./utils/string-utils.js";
let sum = MathUtils.add(5, 2).sum;
let combined = StringUtils.add("Hello", "World");
console.log(sum);
console.log(combined);
