/*
 * Default And Optional Parameters
 */
function intro(name: string, age: number, country?: string): string {
  if (country) {
    return `My name is ${name} and I am ${age} years old. I live in ${country}`;
  } else {
    return `My name is ${name} and I am ${age} years old`;
  }
}

console.log(intro("John", 32));
console.log(intro("John", 32, "USA"));

export {};
