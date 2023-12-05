//Q1
//WAP to greet a person given their first name and laste name

let FirstName="Prakhar"
let LastName="Pandey"
console.log("Namaste " + FirstName +" " + LastName +"!")

//Q2
//WAP to greet a person based on gender

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Enter gender: ", function(gender) {
    if (gender.toLowerCase() === "male") {
        console.log("Namaste " + gender + " Bhaiisaabh");
    } else {
        console.log("Namste " + gender + " BehenJi");
    }
    rl.close();
});

//Q3
for(let i = 0; i<=1000; i++){
    console.log(i)
}


