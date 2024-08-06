"use strict";
const students = [
    {
        name: "John",
        mark: 70,
    },
    {
        name: "Mark",
        mark: 90,
    },
];
for (const student of students) {
    console.log("Name: ", student.name);
    console.log("Mark: ", student.mark);
    console.log("Grade: ", student.grade);
}
