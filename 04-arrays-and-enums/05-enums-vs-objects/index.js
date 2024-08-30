/**
 * Enums Vs Objects
 */
var Direction;
(function (Direction) {
    Direction[Direction["Up"] = 0] = "Up";
    Direction[Direction["Down"] = 1] = "Down";
    Direction[Direction["Left"] = 2] = "Left";
    Direction[Direction["Right"] = 3] = "Right";
})(Direction || (Direction = {}));
const ODirection = {
    Up: 0,
    Down: 1,
    Left: 2,
    Right: 3,
};
let eDirection = 0 /* EDirection.Up */;
let direction = Direction.Up;
export {};
