function minutesToHourMin(min) {
    var hours = Math.floor(min / 60);
    var minutes = min % 60;
    var hourString = hours > 1 ? "hours" : "hour";
    var minuteString = minutes > 1 ? "minutes" : "minute";
    
    if(hours && minutes) {
        return `${hours} ${hourString} ${minutes} ${minuteString}`;
    } else if(hours && !minutes) {
        return `${hours} ${hourString}`;
    } else if(!hours && minutes) {
        return `${minutes} ${minuteString}`;
    } else {
        return "Cannot format input minute(s)";
    }
}

console.log(minutesToHourMin(61));
console.log(minutesToHourMin(0));
console.log(minutesToHourMin(88));
console.log(minutesToHourMin(23));
console.log(minutesToHourMin(198));
