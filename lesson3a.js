// Javascript for loop
// Loops are used to iterate through sth (Repeat sth a number of times)
// Structuer of the for loop
// 1. For key word followed by parenthesis
// 2. Initialisation; set the condition; increament/decrement
// 3. Body of the for loop


for (let i = 0; i <= 10; i ++){
    console.log("The new value of i is: ", i) 
}


console.log("====================")

for (let i = 0; i <= 10; i++){
    if (i === 6){
        console.log("This is number six: ", i)
    }
    else{
        console.log("The new value of i is: ", i)
    }
}

// Create a for loop that is able to print out all the leap years from 2000 to 2026

for (let i = 2000; i <= 2026; i+=4){
    console.log("The new value of i is: ", i)
}

// Tasks Task: Write a for loop to print all odd numbers from 1 to 19. Task: Write a for loop to count down from 10 to 1 and print the numbers in the console. Task: Write a for loop to find the largest number in the array: [10, 20, 4, 45, 99, 1]. Task: Write a for loop to print the multiplication table of 5 from 5 x 1 to 5 x 10.

for(let year = 2000; year <= 2026; year++){

    if ((year % 4 === 0 && year % 100 !== 0)|| year % 400 === 0){

        console.log(year);

    }

}