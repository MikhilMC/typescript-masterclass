/*
 * Infer The Return Type Of A Function
 */

function returnString() {
  return "string";
}

type FunctionReturnType<T> = T extends () => infer R ? R : T;

type NewType = FunctionReturnType<typeof returnString>;
