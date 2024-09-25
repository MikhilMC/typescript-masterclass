/*
 * How Do Utility Types Work Behind The Scenes
 */

// Mapped Types
// Partial Type Implementation
//! Duplicate identifier 'Partial'
type Partial<T> = {
  [P in keyof T]?: T[P];
};

// Conditional Types
// Exclude Type Implemntation
//! Duplicate identifier 'Exclude'
type Exclude<T, U> = T extends U ? never : T;
