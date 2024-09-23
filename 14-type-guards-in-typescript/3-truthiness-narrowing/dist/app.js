"use strict";
function printAge(person) {
    if (person.age) {
        console.log(person.age);
    }
    else {
        console.log("Age unknown");
    }
}
printAge({
    name: "John",
    age: "John",
});
