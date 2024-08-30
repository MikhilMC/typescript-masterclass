/*
 * Union Types With Object
 */
type Dog = {
  name: string;
  barks: boolean;
  wags: boolean;
};

type Cat = {
  name: string;
  purrs: boolean;
};

type DogAndCatUnion = Dog | Cat;

let dog: DogAndCatUnion = {
  name: "Buddy",
  barks: true,
  wags: true,
};

let cat: DogAndCatUnion = {
  name: "Bella",
  purrs: true,
};

let hybridAnimal: DogAndCatUnion = {
  name: "Bob",
  barks: true,
  wags: true,
  purrs: true,
};

//! Type '{ name: string; barks: true; }' is not assignable to type 'DogAndCatUnion'.
//! Property 'wags' is missing in type '{ name: string; barks: true; }'
//! but required in type 'Dog'.
//* let partialDog: DogAndCatUnion = {
//*   name: "Blacky",
//*   barks: true,
//* };

export {};
