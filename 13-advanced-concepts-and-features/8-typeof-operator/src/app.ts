/*
 * typeOf Operator
 */
let greeting = "Hello world";
let firstName: typeof greeting;

const user = {
  name: "John",
  age: 32,
};

let tom: typeof user;

tom = {
  name: "Tom",
  age: 22,
  //! Object literal may only specify known properties,
  //! and 'email' does not exist in type '{ name: string; age: number; }'
  //* email: "tom@email.com",
};
