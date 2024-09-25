"use strict";
/*
 * Readonly<Type>
 */
const user = {
    name: "John",
    age: 32,
};
//! Cannot assign to 'name' because it is a read-only property
//* user.name = "Something Else";
