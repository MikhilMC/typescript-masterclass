"use strict";
/*
 * Optional And Readonly Properties
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
let post2 = {
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
