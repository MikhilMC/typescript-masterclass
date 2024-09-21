/*
 * Mapped Types
 */

let numbers = [1, 5, 6, 8, 10];

let stringNumbers = numbers.map((each) => each.toString());

console.log(stringNumbers);

type WeekDays = "Mon" | "Tue" | "Wed" | "Thu" | "Fri";

type Day = WeekDays | "Sat" | "Sun";

type NextDay = {
  [W in WeekDays]: Day;
};

let nextDay: NextDay = {
  Mon: "Tue",
  Tue: "Wed",
  Wed: "Thu",
  Thu: "Fri",
  Fri: "Sat",
};
