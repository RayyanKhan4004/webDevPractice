//const tinderUser = new Object()

const tinderUser = {}

tinderUser.id = "123abc"
tinderUser.name = "sam"
tinderUser.isloggedIn = false

//console.log(tinderUser);

const regularUser = {
    email: "sam@gmail.com",
    fullname:{
        userfullname:{
            firstname: "mehak",
            lastname: "shahzadi"
        }
    }
}

// console.log(regularUser.fullname.userfullname.firstname);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj4 = {5: "a", 6: "b"}

// const obj3 = { obj1, obj2 }
//const obj3 = Object.assign({}, obj1, obj2, obj4)

const obj3 = {...obj1,...obj2}
//console.log(obj3);

// users[1].email
//console.log(tinderUser);

//console.log(Object.keys(tinderUser));
//console.log(Object.values(tinderUser));
//console.log(Object.entries(tinderUser));
//console.log(tinderUser.hasOwnProperty('isloggedIn'));

const course = {
    coursename:"js in hindi",
    price:"999",
    courseInstructor:"mehak"
}

//course.courseInstructor

const {courseInstructor: Instructor}= course
//console.log(courseInstructor);
console.log(Instructor);

const navbar = ({company})=> {

}
navbar(company ="mehak")
//{
//    "name":"mehak"
//    "coursename":"js in hindi"
//    "price":"free"
//}
