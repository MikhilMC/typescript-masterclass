/*
 * Concrete Implementation With User Type
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
const usersRepository = new Repository();
const booksRepository = new Repository();
usersRepository.add({ id: 1, name: "John", email: "john@email.com" });
booksRepository.add({ id: 1, title: "Harry Potter", ISBN: 1234567890 });
console.log(booksRepository.getAll());
export {};
