/**
 * Enums As Unions And Type
 */
enum ShapeKind {
  Circle = "circle",
  Square = "square",
}
// Circle | Square

type Circle = {
  kind: ShapeKind.Circle;
  radius: number;
};

type Square = {
  kind: ShapeKind.Square;
  sideLength: number;
};

// let circle: Circle = {
//   radius: 100,
//   //! Type 'ShapeKind.Square' is not assignable to type 'ShapeKind.Circle'.
//*   kind: ShapeKind.Square,
// };

function printShape(shape: ShapeKind /** Circle | Square */) {
  console.log(shape);
}

//! Argument of type 'typeof ShapeKind' is not assignable to parameter of type 'ShapeKind'.
//* printShape(ShapeKind);
printShape(ShapeKind.Circle);

export {};
