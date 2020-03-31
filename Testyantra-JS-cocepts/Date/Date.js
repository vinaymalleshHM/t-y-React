var todaysDate = new Date();
console.log("Todays Date ", todaysDate)

var date = todaysDate.getDate() + 1;
var month = todaysDate.getMonth() + 1;
var day = todaysDate.getDay();
var year = todaysDate.getFullYear();
var displayDate = date + '/' + month + '/' + year
console.log("Display Date ", displayDate)

var months = ["Jan", "Feb", "Mar", "Apr", "May", "June", 'July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec']
var m = todaysDate.getMonth();
var m1 = months[m];
console.log("Month ", m1)


var days = ["Sun", "Mon", "Tue", 'Wed', 'Thur', 'Fri', 'Sat']
var d = todaysDate.getDay();
var d1 = days[d];
console.log("Day is ", d1)


var dateM = new Date(0);//milliiSecond
console.log("Date With Milli Second Constructor ",dateM)

var dateS = new Date("October 21 2019")//String
console.log("Date With String ",dateS)

var dateY = new Date(2019,02);//Year,Month,Day,Hour,Minute,Second,Millisecond
console.log("Date With Year ",dateY)