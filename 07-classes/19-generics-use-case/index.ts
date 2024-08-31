/*
 * Generics Use Case
 */

class Repository {
  private _items: any[] = [];

  add(item: any) {
    this._items.push(item);
  }

  getById(id: number): any | undefined {
    return this._items.find((item) => item.id === id);
  }

  getAll(): any[] {
    return this._items;
  }

  removeById(id: number): void {
    this._items = this._items.filter((item) => item.id !== id);
  }
}

type Identifiable = {
  id: number;
};

class Repository2<T extends Identifiable> {
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

type User = {
  id: number;
  name: string;
  email: string;
};

const usersRepository = new Repository2<User>();

usersRepository.add({ id: 1, name: "John", email: "john@email.com" });

console.log(usersRepository.getById(1));

export {};
