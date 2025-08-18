// singleton
// object/.creat

//object literals
const mysym = Symbol("key1")

const  JsUser = {
    name: "mehak",
    "full name": "mehak shahzadi",
    [mysym]: "mykey1",
    age: 16,
    location: "lahore",
    email: "mehak@gmail.com",
    isloggedIn: false,
    lastLoginDay: ["Monday", "saturday"]
}

// console.log(JsUser.email)
// console.log(JsUser["email"])
// console.log(JsUser["full name"])
// console.log(JsUser[mysym])

JsUser.email = "mehak@chatgpt.com"
// Object.freeze(JsUser)
JsUser.email ="mehak@microsoft.com"
console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello Js user");
}
JsUser.greetingTwo = function(){
    console.log(`Hello Js user,${this.name}`);
}
console.log(JsUser.greeting())
console.log(JsUser.greetingTwo())