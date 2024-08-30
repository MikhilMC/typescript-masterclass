"use strict";
/*
 * Enums
 */
Object.defineProperty(exports, "__esModule", { value: true });
var Direction;
(function (Direction) {
    Direction[Direction["Up"] = 0] = "Up";
    Direction[Direction["Down"] = 1] = "Down";
    Direction[Direction["Left"] = 2] = "Left";
    Direction[Direction["Right"] = 3] = "Right";
})(Direction || (Direction = {}));
console.log(Direction.Up);
var Direction2;
(function (Direction2) {
    Direction2[Direction2["Up"] = 1] = "Up";
    Direction2[Direction2["Down"] = 2] = "Down";
    Direction2[Direction2["Left"] = 3] = "Left";
    Direction2[Direction2["Right"] = 4] = "Right";
})(Direction2 || (Direction2 = {}));
console.log(Direction2.Up);
var Roles;
(function (Roles) {
    Roles["ADMIN"] = "admin";
    Roles["AUTHOR"] = "author";
    Roles["EDITOR"] = "editor";
})(Roles || (Roles = {}));
let person = {
    name: "John",
    email: "john@email.com",
    password: "123qwe",
    role: Roles.ADMIN,
};
console.log(person);
var Direction3;
(function (Direction3) {
    Direction3[Direction3["Up"] = 1] = "Up";
    Direction3["Down"] = "down";
    Direction3[Direction3["Left"] = 3] = "Left";
    Direction3["Right"] = "right";
})(Direction3 || (Direction3 = {}));
