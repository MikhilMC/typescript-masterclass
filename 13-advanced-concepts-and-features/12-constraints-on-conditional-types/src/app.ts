/*
 * Constraints On Conditional Types
 */

interface WritePermissions {
  write: true;
}

interface ReadPermissions {
  write: false;
}

interface User {
  id: number;
  name: string;
  email: string;
}

interface Admin extends User, WritePermissions {}
interface Author extends User, WritePermissions {}
interface Reader extends User, ReadPermissions {}

type FilterWritables<T> = T extends { write: true } ? true : false;

// type Writable = FilterWritables<Admin>; //* true
// type Writable = FilterWritables<Author>;  //* true
// type Writable = FilterWritables<Reader>; //* false
