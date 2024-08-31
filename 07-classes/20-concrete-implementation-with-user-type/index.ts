/*
 * Concrete Implementation With User Type
 */

type Identifiable = {
  id: number;
};

class Repository<T extends Identifiable> {
  private _items: T[] = [];

  add(item: T) {
    this._items.push(item);
  }

  getById(id: number): T | undefined {
    return this._items.find((item) => item.id === id);
  }

  getAll(): T[] {
    return this._items;
  }

  removeById(id: number): void {
    this._items = this._items.filter((item) => item.id !== id);
  }
}

type User = Identifiable & {
  name: string;
  email: string;
};

type Book = Identifiable & {
  title: string;
  ISBN: number;
};

const usersRepository = new Repository<User>();
const booksRepository = new Repository<Book>();

usersRepository.add({ id: 1, name: "John", email: "john@email.com" });
booksRepository.add({ id: 1, title: "Harry Potter", ISBN: 1234567890 });

console.log(booksRepository.getAll());

export {};
