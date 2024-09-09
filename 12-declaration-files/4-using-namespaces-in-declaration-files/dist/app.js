/*
 * Using Namespaces In Declaration Files
 */
import { User } from "./user.js";
const newUser = User.createUser(1, "John Doe");
const updatedUser = User.updateUser(1, {
    id: 1,
    name: "Mark Doe",
    status: "inactive",
});
console.log(newUser);
console.log(updatedUser);
