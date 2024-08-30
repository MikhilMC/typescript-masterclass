/*
 * Async Functions
 */
async function fetchFromDatabase(id: number): Promise<any> {}

const anotherAsyncFunction = async (id: number): Promise<any> => {};

async function returnString(id: number): Promise<string> {
  return Promise.resolve("string");
}

type User = {
  name: string;
  age: number;
};

async function returnUser(id: number): Promise<User> {
  return Promise.resolve({ name: "John", age: 28 });
}

export {};
