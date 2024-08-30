"use strict";
/*
 * Nested objects
 */
Object.defineProperty(exports, "__esModule", { value: true });
let post = {
    title: "This is the title of the blog post",
    content: "This is the content of the post",
    date: new Date(),
    author: {
        name: "John",
        age: 28,
        email: "john@doe.com",
    },
};
