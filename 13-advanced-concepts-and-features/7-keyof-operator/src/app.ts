/*
 * keying-in or Index Accessed Types
 */

type Events = {
  id: number;
  date: Date;
  type: "indoor" | "outdoor";
};

// -> "id" | "date" | type

type UnionOfKeyofEvents = keyof Events;

type Numeric = {
  [key: number]: string;
};

type NumericKeyof = keyof Numeric;

type NumberAndStrings = {
  [key: string]: string;
};

type NumberAndStringsKeyof = keyof NumberAndStrings;
