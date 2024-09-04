/*
 * Declaration Merging Interfaces
 */
//* When more than one interfaces have same name,
//* properties and methods of all the other interfaces are added to the first one.
class User {
    constructor(id, name, passwordHash) {
        this.id = id;
        this.name = name;
        this.passwordHash = passwordHash;
    }
}
export {};
