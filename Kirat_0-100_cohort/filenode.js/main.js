console.log("Hello Prakhar");

let number = 0;
number ="hello"
console.log(number)

let a = 1;
a = 2;
console.log(a);

const b = 100;
console.log(b);
let FirstName ="PrakharPandey"
let age = 23;
let isMarried = true
console.log("this person name is" + FirstName + "and their age is " +age)

//if-else
if (isMarried === true) {
    console.log(FirstName + "is not married");
}else{
    console.log(FirstName + "is married")
}
 //Loops

let answer = 0;
for(let i = 0; i<=100; i++) {
    answer = answer + i;
}
console.log(answer)

////Arrays
const personArray =["Prakhar","Vishesh","Ritik"];
console.log(personArray[0])
console.log(personArray[1])
console.log(personArray[2])

////
const Ages =[21,22,23,24,25];
const numberofpeople = Ages.length
for(let i =0; i<numberofpeople; i++) {
    if(Ages[i] % 2 == 0) {
        console.log(Ages[i]);
    }
}




const PersonArray =["Prakhar", "Mudita", "Shreya", "Shikhar", "Vishesh", "Ritik"];
const GenderArray =["male","female","female","male","male","male"]

const allUsers =[{
    firstName:"Prakhar",
    gender:"male"
}, {
    firstName:"Mudita",
    gender:"female"
}]

//Question1
function findSum(a,b) {
    //do things with the input and return the output
    return a + b;
}

const value = findSum(1,2)
console.log(value);