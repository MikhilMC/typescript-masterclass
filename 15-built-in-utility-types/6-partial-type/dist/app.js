"use strict";
/*
 * Partial<Type>
 */
function updateUser(user, updates) {
    return { ...user, ...updates };
}
const user = {
    name: "John",
    email: "test@email.com",
    password: "password",
};
const updatedUser = updateUser(user, { email: "email@test.com" });
