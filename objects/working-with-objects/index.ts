/*
 * Working with objects
 */

let person = {
  name: "Mark",
  age: 32,
};

let car: Object = {
  brand: "BMW",
  color: "Black",
};

//* not needed
car = [];
car = () => {};

let newCar: {
  brand: string;
  color: string;
} = {
  brand: "Audi",
  color: "White",
};

//! Type 'never[]' is missing the following properties from type
//! '{ brand: string; color: string; }': brand, color
//* newCar = [];

export {};
