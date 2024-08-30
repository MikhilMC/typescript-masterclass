/**
 * Enums As Unions And Type
 */
var ShapeKind;
(function (ShapeKind) {
    ShapeKind["Circle"] = "circle";
    ShapeKind["Square"] = "square";
})(ShapeKind || (ShapeKind = {}));
// let circle: Circle = {
//   radius: 100,
//   //! Type 'ShapeKind.Square' is not assignable to type 'ShapeKind.Circle'.
//*   kind: ShapeKind.Square,
// };
function printShape(shape /** Circle | Square */) {
    console.log(shape);
}
//! Argument of type 'typeof ShapeKind' is not assignable to parameter of type 'ShapeKind'.
//* printShape(ShapeKind);
printShape(ShapeKind.Circle);
export {};
