

function timeConversion(s) {
    let hour = s.substring(0,2);
    let rest = s.substring(3,8);
    let last = s.substring(8,10);
    if (last === "AM") {
      if (+hour < 10 ) {
        return `${hour}:${rest}`
      }
      if (+hour > 11) {
        return `00:${rest}`
      }
      return `${hour}:${rest}`
    }
  if (last === "PM") {
    if (+hour > 0 && +hour < 12){
      return `${+hour + 12}:${rest}`
    }
  }
  return  `${+hour}:${rest}`
}

console.log("12 am",timeConversion("12:30:11AM"));
console.log("12 pm",timeConversion("12:40:32PM"));
console.log("1 am",timeConversion("01:30:09AM"));
console.log("1 pm",timeConversion("01:30:00PM"));
console.log("11 am",timeConversion("11:30:45AM"));
console.log("11 pm",timeConversion("11:30:45PM"));
console.log(timeConversion("09:30:45AM"));
console.log(timeConversion("09:30:45PM"));
console.log(timeConversion("07:30:45AM"));
console.log(timeConversion("07:30:45AM"));
console.log(timeConversion("07:30:45AM"));
console.log(timeConversion("07:30:45AM"));
console.log(timeConversion("07:30:45AM"));
