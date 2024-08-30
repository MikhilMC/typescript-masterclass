/*
 * Symbol
 */
let id = Symbol(1234);
let alphabeticId = Symbol("id");
let user2 = {
    [id]: "1234",
    name: "Mark",
    getId() {
        return this[id];
    },
};
console.log(user2.name);
//! Property 'id' does not exist on type '{ [x: symbol]: string; name: string; }'.
//* console.log(user2.id);
console.log(id);
console.log(user2.getId());
export {};
