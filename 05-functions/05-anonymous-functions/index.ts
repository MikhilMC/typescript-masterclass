/*
 * Anonymous Functions
 */
const students: string[] = ["Alice", "Mark", "Bob"];

students.map((student) => console.log(student));

students.map(function (student) {
  console.log(student);
});

export {};
