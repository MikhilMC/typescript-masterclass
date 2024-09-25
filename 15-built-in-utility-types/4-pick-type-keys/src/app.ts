/*
 * Pick<Type, Keys>
 */

interface Person {
  name: string;
  age: number;
  address: string;
}

type NameAndAge = Readonly<Pick<Person, "name" | "age">>;

const person: NameAndAge = { name: "John", age: 32 };

//! Cannot assign to 'name' because it is a read-only property
//* person.name = "Mark";
