/*
 * Optional and Readonly properties
 */

type AwardDetails = {
  name: string;
  date: Date;
};

type Awards = {
  [key: string]: AwardDetails;
};

type Author = {
  name: string;
  age: number;
  email: string;
  readonly type: "human" | "ai";
};

type Post = {
  title: string;
  content: string;
  date: Date;
  author: Author;
  awards: Awards;
  category?: string;
};

let post: Post = {
  title: "This is the title of the blog post",
  content: "This is the content of the post",
  date: new Date(),
  author: {
    name: "John",
    age: 28,
    email: "john@doe.com",
    type: "human",
  },
  awards: {
    web: {
      name: "Web awards",
      date: new Date(),
    },
    web3: {
      name: "Web 3",
      date: new Date(),
    },
  },
  category: "javascript",
};

let post2: Post = {
  title: "This is the title of the blog post",
  content: "This is the content of the post",
  date: new Date(),
  author: {
    name: "John",
    age: 28,
    email: "john@doe.com",
    type: "human",
  },
  awards: {
    web: {
      name: "Web awards",
      date: new Date(),
    },
    web3: {
      name: "Web 3",
      date: new Date(),
    },
  },
};

//! Cannot assign to 'type' because it is a read-only property
//* post2.author.type = "ai";

export {};
