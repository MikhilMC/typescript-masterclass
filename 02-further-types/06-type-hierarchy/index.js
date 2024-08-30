const throwError = (errorMessage) => {
    //* throwError returns the type never
    throw new Error(errorMessage);
};
//* This is acceptable according to TypeScript
//* let strings:Object = ["a", "b"]
//* But this is more suitable one
let strings = ["a", "b"];
let myFunc = () => 2;
export {};
