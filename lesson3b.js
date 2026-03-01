// while loop
// Below is a simple syntax of the while loop
// 1. Initialization of a variable
// 2. while keyword
// 3. Condition to be checked
// 4. body of the while loop
// 5. increment/decrement

let i = 0;
while (i <= 10){
    console.log("The new value of i is: ", i)
    i++
}


// come up with a js example og map loop

// map() is an array method that:
// Loops through an array
// Modifies each item
// Returns a new array
// Does NOT change the original array

let numbers = [1, 2, 3, 4, 5];

let doubled = numbers.map(num => num * 2);

console.log(doubled);


console.log("====================")

// Task: Write a for loop to print all odd numbers from 1 to 19. Task: Write a for loop to count down from 10 to 1 and print the numbers in the console.
// Check the tasks on page 30 of the book