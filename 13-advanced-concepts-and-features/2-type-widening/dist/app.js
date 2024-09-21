"use strict";
/*
 * Type Widening
 */
let x = "y"; // string and not litral value Y
const b = "john";
let y = 78;
var c = false;
let d = null;
const z = {
    x: 14,
};
var Roles;
(function (Roles) {
    Roles["admin"] = "admin";
    Roles["author"] = "author";
})(Roles || (Roles = {}));
const user = Roles.admin;
