/*
 * Infer Function Arguments
 */

function person(name: string, age: number) {
  return {
    name: name,
    age: age,
  };
}

type GetFirstArgumentOfAnyFunction<T> = T extends (
  first: infer FirstArgument,
  ...args: any[]
) => any
  ? FirstArgument
  : never;

type GetSecondArgumentOfAnyFunction<T> = T extends (
  first: any,
  second: infer SecondArgument,
  ...args: any[]
) => any
  ? SecondArgument
  : never;

type FirstArgument = GetFirstArgumentOfAnyFunction<typeof person>;
type SecondArgument = GetSecondArgumentOfAnyFunction<typeof person>;
