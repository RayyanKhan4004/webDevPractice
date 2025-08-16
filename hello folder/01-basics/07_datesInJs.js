// Dates

let myDate = new Date()
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleString());
// console.log(myDate.toDateString());
// console.log(myDate.toJSON());
// console.log(myDate.toTimeString());
// console.log(typeof myDate);

// let myCreatedDate = new Date(2025, 0, 16)
// let myCreatedDate = new Date(2025,0,23,  5, 3)
// let myCreatedDate = new Date("2008, 06,03")
let myCreatedDate = new Date("01, 16,2025")
// console.log(myCreatedDate.toDateString());

let myTimeStamp = Date.now()

//console.log(myTimeStamp);
//console.log(myCreatedDate.getTime());
//console.log(Math.floor(Date.now()/1000));


let newDate = new Date()
//console.log(newDate);
 //console.log(newDate.getMonth()+1);
//console.log(newDate.getDay());

// `${newDate.getDay()} and the time`

newDate.toLocaleString('default',{
    weekday:"long",
})