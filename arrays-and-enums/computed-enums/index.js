"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Computed Enums
 */
var AccessPermissions;
(function (AccessPermissions) {
    AccessPermissions[AccessPermissions["None"] = 0] = "None";
    AccessPermissions[AccessPermissions["Read"] = 1] = "Read";
    AccessPermissions[AccessPermissions["Write"] = 2] = "Write";
    AccessPermissions[AccessPermissions["ReadWrite"] = 3] = "ReadWrite";
    AccessPermissions[AccessPermissions["Delete"] = 4] = "Delete";
    AccessPermissions[AccessPermissions["All"] = 7] = "All";
})(AccessPermissions || (AccessPermissions = {}));
console.log(AccessPermissions.ReadWrite);
console.log(AccessPermissions.All);
