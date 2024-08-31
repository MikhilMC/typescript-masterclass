/*
 * Generics Use Case
 */
class Repository {
    constructor() {
        this._items = [];
    }
    add(item) {
        this._items.push(item);
    }
    getById(id) {
        return this._items.find((item) => item.id === id);
    }
    getAll() {
        return this._items;
    }
    removeById(id) {
        this._items = this._items.filter((item) => item.id !== id);
    }
}
class Repository2 {
    constructor() {
        this._items = [];
    }
    add(item) {
        this._items.push(item);
    }
    getById(id) {
        return this._items.find((item) => item.id === id);
    }
    getAll() {
        return this._items;
    }
    removeById(id) {
        this._items = this._items.filter((item) => item.id !== id);
    }
}
const usersRepository = new Repository2();
usersRepository.add({ id: 1, name: "John", email: "john@email.com" });
console.log(usersRepository.getById(1));
export {};
