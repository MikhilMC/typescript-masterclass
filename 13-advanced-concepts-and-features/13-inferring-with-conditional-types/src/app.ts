/*
 * Inferring With Conditional Types
 */

// type ArrayElementType<T> = T extends [] ? true : false;
type ArrayElementType<T> = T extends (infer E)[] ? E : T;

type TypeOne = ArrayElementType<string[]>;
// string

type TypeTwo = ArrayElementType<number[]>;
// number

type TypeThree = ArrayElementType<(number | string | boolean)[]>;
// number | string | boolean

type TypeFour = ArrayElementType<{ name: string }>;
// { name: string }

type TypeFive = ArrayElementType<string>;
// string
