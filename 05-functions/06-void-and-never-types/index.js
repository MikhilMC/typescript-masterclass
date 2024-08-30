"use strict";
/*
 * void And never Types
 */
Object.defineProperty(exports, "__esModule", { value: true });
function writeDatabase(value) {
    console.log("Writing to a database, ", value);
}
function throwError(error) {
    throw new Error(error);
}
