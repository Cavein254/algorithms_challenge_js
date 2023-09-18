

function timeConversion(s) {
    let hour = s.substring(0,2);
    let rest = s.substring(3,8);
    let last = s.substring(8,10);
    if (last === "AM") {
      if (+hour < 10 ) {
        return `${hour}:${rest}`
      }
      return `${hour}:${rest}`
    }
    hour = `${+hour + 12}`
    if (hour >= 24) {
      if ((hour - 24) < 9) {
        return `0${hour-24}:${rest}`
      }
      return  `${+hour -24}:${rest}`
    }
  return  `${+hour}:${rest}`
}

console.log(timeConversion("12:30:11AM"));
console.log(timeConversion("12:30:32PM"));
console.log(timeConversion("07:30:09PM"));
console.log(timeConversion("07:30:00AM"));
console.log(timeConversion("07:30:45AM"))
