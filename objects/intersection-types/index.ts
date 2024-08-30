/*
 * Intersection Types
 */
type Dog = {
  name: string;
  barks: boolean;
  color: string;
};

type Cat = {
  name: string;
  purrs: boolean;
  color: string;
};

type HybridAnimal = Dog & Cat;

let hybridAnimal: HybridAnimal = {
  name: "Max",
  color: "White",
  purrs: false,
  barks: true,
};

export {};
