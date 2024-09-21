"use strict";
/*
 * Discriminated Unions
 */
let firstName = "Mark";
console.log(typeof firstName);
let cat = {
    type: "cat",
    purrs: true,
};
let dog = {
    type: "dog",
    barks: true,
};
function animalReaction(animal) {
    switch (animal.type) {
        case "cat":
            console.log("The animal is a cat and it purrs");
            break;
        case "dog":
            console.log("The animal is a dog and it barks");
            break;
    }
}
animalReaction(dog);
animalReaction(cat);
