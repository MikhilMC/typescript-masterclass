/*
 * Introduction To Type Guards
 */
function convertNumberToString(number) {
  if (typeof number !== "number") {
    console.log("Input a valid number");
  }
  return number.toString();
}
