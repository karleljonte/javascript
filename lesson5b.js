// Arrow functions with parameters

const greet = (name) =>{
    console.log("Hello " + name + " How have you been? I trust that you are good")
}

greet ("Jamo") 

// Exmaple 2
console.log("======================")
// Below is a function to find the area of a cirle
const CircleArea = (pi, radius) =>{
    let area = pi * radius * radius
    console.log("The area of the cicle is: " + area + "cm\u00B2")

}

CircleArea(3.142, 7);
CircleArea(3.142, 28) 

console.log("======================")
// come up withur own example of an arrow function that utilises 3 parameters

const average = (value1, value2, value3) =>{
    calc = (value1 + value2 + value3) / 3
    console.log("The average of the values is", calc)
}

average(6, 4, 8)

