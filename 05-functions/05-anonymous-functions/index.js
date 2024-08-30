/*
 * Anonymous Functions
 */
const students = ["Alice", "Mark", "Bob"];
students.map((student) => console.log(student));
students.map(function (student) {
    console.log(student);
});
export {};
