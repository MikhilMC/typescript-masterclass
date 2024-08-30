/*
 * Enums
 */

enum Direction {
  Up, //* 0
  Down, //* 1
  Left, //* 2
  Right, //* 3
}
console.log(Direction.Up);

enum Direction2 {
  Up = 1, //* 1
  Down, //* 2
  Left, //* 3
  Right, //* 4
}

console.log(Direction2.Up);

enum Roles {
  ADMIN = "admin", //* admin
  AUTHOR = "author", //* author
  EDITOR = "editor", //* editor
}

type Person = {
  name: string;
  email: string;
  password: string;
  role: Roles;
};

let person: Person = {
  name: "John",
  email: "john@email.com",
  password: "123qwe",
  role: Roles.ADMIN,
};

console.log(person);

enum Direction3 {
  Up = 1, //* 1
  Down = "down", //* down
  Left = 3, //* 3
  Right = "right", //* right
}

export {};
