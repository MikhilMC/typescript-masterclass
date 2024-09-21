/*
 * Totality
 */

type WeekDays = "Mon" | "Tue" | "Wed" | "Thu" | "Fri";

type Day = WeekDays | "Sat" | "Sun";

function nextDayForWeekDay(weekDay: WeekDays): Day {
  switch (weekDay) {
    case "Mon":
      return "Tue";
    case "Tue":
      return "Wed";
    case "Wed":
      return "Thu";
    case "Thu":
      return "Fri";
    case "Fri":
      return "Sat";
  }
}
