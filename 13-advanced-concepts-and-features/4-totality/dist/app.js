"use strict";
/*
 * Totality
 */
function nextDayForWeekDay(weekDay) {
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
