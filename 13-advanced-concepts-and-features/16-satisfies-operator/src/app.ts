/*
 * Satisfies Operator (TS Version 5 feature)
 */

type Properties = "red" | "green" | "blue";
type RGB = [red: number, green: number, blue: number];

const color = {
  red: [255, 0, 0],
  green: "#00ff00",
  blue: [225, 255, 0],
} satisfies Record<Properties, RGB | string>;

const redComponent = color.red[0];

// if (typeof color.green === "string") {
//   const greenValue = color.green.toUpperCase();
// }

const greenValue = color.green.toUpperCase();

//! Property 'toUpperCase' does not exist on type '[number, number, number]'
//* const blueValue = color.blue.toUpperCase();
