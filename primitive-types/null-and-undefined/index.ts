/*
 * null and undefined
 */
let user: undefined;
console.log(user);

let userRole: null;
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

export {};
