/*
 * Typecasting
 */
// let numbers = <const>{
//   x: 10,
//   y: {
//     z: 20,
//   },
// };

let numbers = {
  x: 10,
  y: {
    z: 20,
  },
} as const;

//* Cannot assign to 'x' because it is a read-only property.
//* numbers.x = 11;

// console.log(numbers);

let firstName = document.querySelector("#firstName")! as HTMLInputElement;

firstName.value;
