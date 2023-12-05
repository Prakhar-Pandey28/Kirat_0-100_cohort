//question1
//Write a program prints all the even numbers in an array
const all_numbers = [0,1,2,8,10,11,28,3,12]
for (let numberInArray = all_numbers[0];
     numberInArray<=all_numbers.length; numberInArray++ ) {
    if (all_numbers[numberInArray] % 2 == 0){
        console.log(all_numbers[numberInArray])
    }
}


//Q2
//WAP TO PRINT THE BIGGEST NUMBER IN AN ARRAY

const number_array = [28,10,30,10,89,100,101,91,5,7,1]
let biggest_number = number_array[0];
for (let check_numbers = 0; check_numbers < number_array.length;
     check_numbers++) {
    if (number_array[check_numbers] > biggest_number) {
        biggest_number = number_array[check_numbers];
    }
}
console.log(biggest_number)


//Q3
//WAP THAT PRINTS ALL THE MALE PEOPLE'S FIRST NAME GIVEN A COMPLEX OBJECT

const all_people = [{
    first_name:"prakhar",
    gender:"male"
}, {
    first_name:"vishesh",
    gender:"male"
},{
    first_name:"Ritik",
    gender:"male"
}
];
for (let person of all_people) {
    if(person.gender ==="male") {
        console.log(person.first_name);
    }
}

//Q4
//Write a program that reverses all the elements of an array
let arr = [10,20,30,40,50]
console.log(arr)

for(let i =0; i<arr.length/2; i++) {
    let temp = arr[i];
    arr[i] = arr[arr.length -1 -i];
    arr[arr.length -1-i] = temp;
}
console.log(arr);