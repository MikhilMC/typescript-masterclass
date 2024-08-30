/**
 * Enums Vs Objects
 */

enum Direction {
  Up, //* 0
  Down, //* 1
  Left, //* 2
  Right, //* 3
}

const enum EDirection {
  Up, // 0
  Down, // 1
  Left, // 2
  Right, // 3
}

const ODirection = {
  Up: 0,
  Down: 1,
  Left: 2,
  Right: 3,
} as const;

let eDirection = EDirection.Up;
let direction = Direction.Up;
//! Cannot assign to 'Up' because it is a read-only property.
//* ODirection.Up = 4;

export {};
