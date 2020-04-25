var myBirthday = "08/15/1997";
var convertedDate = moment(myBirthday, "MM/DD/YYYY");
console.log(convertedDate.format("MM/DD/YYYY"));
//dddd is the actaul day of the birthday
console.log(convertedDate.format("dddd"));

//gives the current moment of hour:minutes:seconds
//without the a it is military time
//with the a 
var time = moment().format("h:mm:ss a");
console.log(time);
//typeof shows the type of what is returned
//time is a datatype of string
console.log(typeof time);
//this would show the hours of the current time
console.log(moment().format("h a"));
//this would subtract 10 days to the current day in calender format
console.log(moment().subtract(10, "days").calendar());
//this would add 10 days to the current day in calender format
console.log(moment().add(10, "days").calendar());