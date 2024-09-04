/*
 * Inheriting From Multiple Interfaces
 */
var Roles;
(function (Roles) {
    Roles["admin"] = "admin";
    Roles["author"] = "author";
    Roles["editor"] = "editor";
})(Roles || (Roles = {}));
var PermissionsList;
(function (PermissionsList) {
    PermissionsList["read"] = "read";
    PermissionsList["write"] = "write";
    PermissionsList["execute"] = "execute";
})(PermissionsList || (PermissionsList = {}));
const rob = {
    name: "Rob",
    email: "rob@email.com",
    phone: 9876543210,
    gender: "male",
    role: Roles.admin,
    permissions: [
        PermissionsList.execute,
        PermissionsList.read,
        PermissionsList.write,
    ],
    numberOfUsersReporting: 5,
};
console.log(rob);
export {};
