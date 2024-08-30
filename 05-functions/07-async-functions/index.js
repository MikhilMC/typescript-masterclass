"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/*
 * Async Functions
 */
async function fetchFromDatabase(id) { }
const anotherAsyncFunction = async (id) => { };
async function returnString(id) {
    return Promise.resolve("string");
}
async function returnUser(id) {
    return Promise.resolve({ name: "John", age: 28 });
}
