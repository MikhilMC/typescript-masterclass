"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/*
 * null And undefined
 */
let user;
console.log(user);
let userRole;
//! Variable 'userRole' is used before being assigned
//* console.log(userRole);
userRole = null;
console.log(userRole);
console.log(userRole === user);
if (!userRole) {
    console.log("This condition is true");
}
if (!user) {
    console.log("This condition is true");
}
