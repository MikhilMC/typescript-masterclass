/*
 * Nested Objects
 */

type Post = {
  title: string;
  content: string;
  date: Date;
  author: {
    name: string;
    age: number;
    email: string;
  };
};

type Author = {
  name: string;
  age: number;
  email: string;
};

type Post2 = {
  title: string;
  content: string;
  date: Date;
  author: Author;
};

let post: Post2 = {
  title: "This is the title of the blog post",
  content: "This is the content of the post",
  date: new Date(),
  author: {
    name: "John",
    age: 28,
    email: "john@doe.com",
  },
};

export {};
