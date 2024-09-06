/*
 * Decorator Composition And Evaluation
 */

function first() {
  console.log("first(): factory evaluated");

  return function (originalClass: any, context: any) {
    console.log("first(): called");
  };
}

function second() {
  console.log("second(): factory evaluated");

  return function (originalClass: any, context: any) {
    console.log("second(): called");
  };
}

class ExampleClass {
  @first()
  @second()
  method() {}
}

export {};
