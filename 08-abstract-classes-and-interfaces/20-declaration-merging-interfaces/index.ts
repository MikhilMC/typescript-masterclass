/*
 * Declaration Merging Interfaces
 */

interface IUser {
  id: number;
  name: string;
}

interface IUser {
  passwordHash: string;
}

//* When more than one interfaces have same name,
//* properties and methods of all the other interfaces are added to the first one.

class User implements IUser {
  constructor(
    public id: number,
    public name: string,
    public passwordHash: string
  ) {}
}

export {};
