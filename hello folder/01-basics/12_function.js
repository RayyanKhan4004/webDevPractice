function sayMyName(){
    console.log("m");
    console.log("e");
    console.log("h");
    console.log("a");
    console.log("k");
}

// sayMyName()

//function addTwoNumber(number1, number2){
//    console.log(number1 + number2)
//}
function addTwoNumber(number1, number2){
    //let result = number1 + number2
    //return result
    return number1 + number2
}

const result = addTwoNumber(3, 5)
console.log("Result", result);
function loginUserMessage (username){
    if(username === undefined){
        console.log ("please enter a username");
        return
    }
    return `${username} just logged in`
}
//console.log(loginUserMessage("mehak"))
console.log(loginUserMessage())