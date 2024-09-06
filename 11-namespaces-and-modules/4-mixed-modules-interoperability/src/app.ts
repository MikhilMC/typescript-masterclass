/*
 * Mixed Module Interoperability
 */
const printHello = require("./functions/strings");
import { add } from "./functions/math";

printHello();
console.log(add(5, 2));
