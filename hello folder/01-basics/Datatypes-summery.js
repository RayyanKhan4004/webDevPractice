// primitive

// 7 types : string, Number, Boolearn, Null, Undefined, Symbol,BigInt

const score = 100
const scorevalue = 100.3

const isloggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol ('123')

 //console.log(id === anotherId);

const bignumber = 34564342456443535n




//Refrence (non primitive)

//Array, objects, functions


const heros = ["shatiman", "gojo"];
let myObj = {
    name:"mehak",
    age:16,
}

const myFunction = function(){
    console.log("Hello world")
}

console.log(typeof null)


 // https://262.ecma-international.org/5.1/#sec-11.4.3


 // stack (primitive), heap (non-primitive)

 let myyoutubename = "mehak."

 let anothername = myyoutubename
 anothername = "chai aur chode"

 console.log(myyoutubename);
 console.log(anothername);

 let userOne = {
    email:"user@google.com",
    upi: "user@ybl"
 }
 
 let userTwo =userOne

 userTwo.email = "mehak@google.com"

 console.log(userOne.email);
 console.log(userTwo.email);