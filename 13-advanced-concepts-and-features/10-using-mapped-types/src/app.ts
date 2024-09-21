/*
 * Conditional Types
 */

type Artist = {
  id: number;
  name: string;
  bio: string;
};

// type ArtistForEditing = {
//   id: number;
//   name?: string;
//   bio?: string;
// };

type MappedArtistForEditing = {
  [Property in keyof Artist]?: Artist[Property];
} & { id: number };

// type FakeMappedArtistForEditing = {
//   id?: number;
//   name?: string;
//   bio?: string;
// };

const artist: Artist = {
  id: 1,
  name: "Justin",
  bio: "Hey, I am Justin",
};

const editedArtist: MappedArtistForEditing = {
  id: 1,
  bio: "Hello, I am Justin",
};
