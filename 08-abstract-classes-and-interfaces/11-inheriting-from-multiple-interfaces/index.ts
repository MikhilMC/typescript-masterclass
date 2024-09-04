/*
 * Inheriting From Multiple Interfaces
 */

enum Roles {
  admin = "admin",
  author = "author",
  editor = "editor",
}

interface Role {
  role: Roles;
}

enum PermissionsList {
  read = "read",
  write = "write",
  execute = "execute",
}

interface UserPermissions {
  permissions: PermissionsList[];
}

interface User {
  name: string;
  email: string;
  phone: number;
  gender: string;
}

interface AdminUser extends User, Role, UserPermissions {
  numberOfUsersReporting: number;
}

const rob: AdminUser = {
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
