//Task: Write a for loop to find the largest number in the array: [10, 20, 4, 45, 99, 1]. Task: Write a for loop to print the multiplication table of 5 from 5 x 1 to 5 x 10.
// Task: Write a for loop to print all odd numbers from 1 to 19. Task: Write a for loop to count down from 10 to 1 and print the numbers in the console.
// Check the tasks on page 30 of the book
// Research on arrow function, functions with parameters and anonymous functions in javascript.
// NHIF insuarance


// 1. NHIF premium rates
let gross_income = 15000

if (gross_income <= 5999){
    console.log("monthly contribution is 150.00Ksh")
}
else if(gross_income <= 7999 && gross_income >= 6000){
    console.log("monthly contribution is 300.00Ksh")
}
else if(gross_income <= 11999 && gross_income >= 8000){
    console.log("monthly contribution is 400.00Ksh")
}
else if(gross_income <= 14999 && gross_income >= 12000){
    console.log("monthly contribution is 500.00Ksh")
}
else if(gross_income <= 19999 && gross_income >= 15000){
    console.log("monthly contribution is 600.00Ksh")
}
else if(gross_income <= 24999 && gross_income >= 20000){
    console.log("monthly contribution is 750.00Ksh")
}
else if(gross_income <= 29999 && gross_income >= 25000){
    console.log("monthly contribution is 850.00Ksh")
}
else if(gross_income <= 49999 && gross_income >= 30000){
    console.log("monthly contribution is 1000.00Ksh")
}
else if(gross_income <= 99999 && gross_income >= 50000){
    console.log("monthly contribution is 1500.00Ksh")
}
else if(gross_income >= 100000){
    console.log("monthly contribution is 2000.00Ksh")
}
else{
    console.log("Invalid input")
}

//Task: Write a for loop to find the largest number in the array: [10, 20, 4, 45, 99, 1]. 
let numbers = [10, 20, 4, 45, 99, 1];

let largest = numbers[0];  // assume first number is the largest

for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] > largest) {
        largest = numbers[i];
    }
}

console.log("Largest number is:", largest);

 //Task: Write a for loop to print the multiplication table of 5 from 5 x 1 to 5 x 10.

 for (let i = 5; i <=50 ; i += 5){
    console.log(i)
 }

 // Task: Write a for loop to print all odd numbers from 1 to 19.
 for (let i = 1; i <= 19; i += 2){
    console.log(i)
 }

 //Task: Write a for loop to count down from 10 to 1 and print the numbers in the console.
 for (let i = 10;i >=1; i -= 1){
    console.log(i)
 }

 // Research on arrow function, functions with parameters and anonymous functions in javascript.