let name ='Mehak';
let age = 16;
let isapproved = false;
let firstname = undefined;
let selectedcolor = null;

function greet(name, lastname) {
    console.log('Hello ' + name + ' ' + lastname);
}

greet ('Mehak', 'Herry');
greet('Merry')


function square(number) {
    return number * number;
}

console.log(square(2))

const accountId = 143245
let accountemail = "mehak@gmail.com"
var accountpassword = "12345"
accountcity = "lahore"
let accountstate;

// accountid = 2 // not allowed

accountemail = "hc@hc.com"
accountpassword = "212121"
accountcity = "islamabad"

/*
prefer not to use var
because of issue in block scope and functional scope
*/

console.table([accountId, accountemail , accountpassword, accountcity, accountstate])

