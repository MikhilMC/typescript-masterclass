/*
 * Type Casting
 */
let firstName = "John";
let lastName = "Doe";
//* User from API
let user = {
    name: "Mark",
    email: "mark@email.com",
};
function fetchUser() {
    return user;
}
let fetchedUser = fetchUser();
export {};
