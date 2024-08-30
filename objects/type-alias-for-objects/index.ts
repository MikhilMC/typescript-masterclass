/*
 * Type alias for objects
 */
let post: {
  title: string;
  content: string;
  date: Date;
} = {
  title: "This is the title of the blog post",
  content: "This is the content of the post",
  date: new Date(),
};

type Post = {
  title: string;
  content: string;
  date: Date;
};

let post2: Post = {
  title: "This is the title of the blog post",
  content: "This is the content of the post",
  date: new Date(),
};

export {};
