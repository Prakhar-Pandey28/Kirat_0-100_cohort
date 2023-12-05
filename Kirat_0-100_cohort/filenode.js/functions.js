//Q1
//WA Function that finds the sum of two numbers.
function sum(num1,num2) {
    let result = num1 + num2;
    return result;
}

let number1 = 5;
let number2 = 96;
let sumResult = sum(number1,number2)
console.log(sumResult);

//Q2
//Write another function that displays this result in a pretty format
// (Function that finds the sum of two numbers.)

function sum(num1,num2) {
    let result = num1 + num2;
    return result;
}

function displaySum(num1, num2) {
    let result = sum(num1,num2)
    console.log(`sum of ${num1} and ${num2} is: ${result}`);
}

let number3 = 5;
let number4 = 10;
displaySum(number3, number4);


//Q3
//Write another function that takes this sum and prints it in passive tense
function sum(num1, num2) {
    // Calculate the sum of 'num1' and 'num2' and store it in
    // the variable 'result'
    let result = num1 + num2;
    // Return the calculated result
    return result;
}

function displayResult(data) {
    console.log(data)
}
function displayResultPassive(data) {
    console.log(data)
}

let number5 = 4;
let number6=10;
let result = sum(number5, number6)
displayResultPassive(result);