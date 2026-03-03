// Functions with parameters.
// Parameters are values that get passed as arguments when we invoke a function.
// They help us to create functions that can be reusable through out a program.

function greeting(name){
    console.log("Hello ",name, "How have you been")
}

greeting("Karl,")
greeting("Wambo")

console.log("======================")

// Below is a function with parameters to calculate the sum of two number
function addition(a, b){
    sum = a + b
    console.log("The sum is ", sum)
}

addition(6, 7)


console.log("======================")


// by use of a function that accepts parameters, calculate the area of tringle whose base is 20cm and height is 12cm

function area(base, height){
    calculation = (base / 2) * height
    console.log("The area is ", calculation)
}

area(20, 12)
console.log("======================")

// Find the simple interest given the principle as 50000, rate as 5% and time as 8 years.
function simpleInterest(principle, rate, time){
    interest = (principle * rate * time)/100
    console.log("Simple interest is", interest)
}


simpleInterest(50000,5,8)
