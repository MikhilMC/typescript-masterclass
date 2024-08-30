/*
 * Index Signatures With Objects
 */
type Author = {
  name: string;
  age: number;
  email: string;
};

type AwardDetails = {
  name: string;
  date: Date;
};

type Awards = {
  [key: string]: AwardDetails;
};

type Post = {
  title: string;
  content: string;
  date: Date;
  author: Author;
  awards: Awards;
};

let post: Post = {
  title: "This is the title of the blog post",
  content: "This is the content of the post",
  date: new Date(),
  author: {
    name: "John",
    age: 28,
    email: "john@doe.com",
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

export {};
