// Arrow functions
// This is a function that was introduced in the ECMA script 6 and they give us the latest/ modern way of defining function in compact manner.
// At times the arrow function can be said to be anonymous functions why? This is bcs they use the names of the variables they r contained in.

const sayHello = () => {
    console.log("This is an Arrow Function.")
}

sayHello();

console.log("==================")

// Create an arrow funtion that is able to find the product of three numbers.

const product = () =>{
    let num1 = 6
    let num2 = 7
    let num3 = 5
    calc = num1 * num2 * num3
    console.log("The product is ", calc)
}

product()