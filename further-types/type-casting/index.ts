/*
 * Type Casting
 */
let firstName = <any>"John";
let lastName = "Doe" as any;

//* User from API
let user = {
  name: "Mark",
  email: "mark@email.com",
};

type User = {
  name: string;
  email: string;
};

function fetchUser() {
  return user as User;
}

let fetchedUser = fetchUser();

export {};
