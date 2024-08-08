"use strict";
/**
 * OBJECTS
 */
/**
 * Working with objects
 */
let person = {
    name: "Mark",
    age: 32,
};
let car = {
    brand: "BMW",
    color: "Black",
};
// not needed
car = [];
car = () => { };
let newCar = {
    brand: "Audi",
    color: "White",
};
newCar = [];
/**
 * Type alias for objects
 */
let post = {
    title: "This is the title of the blog post",
    content: "This is the content of the post",
    date: new Date(),
};
let post2 = {
    title: "This is the title of the blog post",
    content: "This is the content of the post",
    date: new Date(),
};
let post3 = {
    title: "This is the title of the blog post",
    content: "This is the content of the post",
    date: new Date(),
    author: {
        name: "John",
        age: 28,
        email: "john@doe.com",
    },
};
let post4 = {
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
let post5 = {
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
let post6 = {
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
post6.author.type = "ai";
let dog = {
    name: "Buddy",
    barks: true,
    wags: true,
};
let cat = {
    name: "Bella",
    purrs: true,
};
let hybridAnimal = {
    name: "Bob",
    barks: true,
    wags: true,
    purrs: true,
};
let partialDog = {
    name: "Blacky",
    barks: true,
};
function logger(state) {
    switch (state.state) {
        case "loading":
            return "Loading...";
        case "failed":
            return `Error ${state.code}`;
        case "success":
            return `Downloading ${state.response.title}`;
        default:
            break;
    }
}
let hybridAnimal2 = {
    name: "Max",
    color: "White",
    purrs: false,
    barks: true,
};
