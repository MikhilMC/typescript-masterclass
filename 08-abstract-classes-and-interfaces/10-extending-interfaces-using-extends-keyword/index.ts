/*
 * Extending Interfaces Using extends Keyword
 */

interface User {
  name: string;
  email: string;
  phone: number;
  gender: string;
}

/*interface UserWithAddress {
  name: string;
  email: string;
  phone: number;
  address: string;
}*/

interface UserWithAddress extends User {
  address: string;
}

const user: User = {
  name: "John",
  email: "john@email.com",
  phone: 9725179,
  gender: "male",
};

const userWithAddress: UserWithAddress = {
  name: "Mark",
  email: "mark@email.com",
  phone: 9725179412,
  gender: "male",
  address: "This is an address.",
};

console.log(user);
console.log(userWithAddress);

export {};
