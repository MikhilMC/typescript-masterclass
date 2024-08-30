/**
 * Computed Enums
 */
enum AccessPermissions {
  None = 0,
  Read = 1,
  Write = 2,
  ReadWrite = Read + Write,
  Delete = 4,
  All = ReadWrite | Delete,
}

console.log(AccessPermissions.ReadWrite);
console.log(AccessPermissions.All);

export {};
