// export interface UserProfile {
//   userId: number;
//   username: string;
//   status: "active" | "inactive";
// }

export type UserProfile = {
  userId: number;
  username: string;
  status: "active" | "inactive";
};

export declare function createUserProfile(
  id: number,
  name: string
): UserProfile;
