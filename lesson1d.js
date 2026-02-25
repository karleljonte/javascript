// string datatype
// A string is a series/sequence of characters that r enclosed inside of quotation mark.

let name = "Karl"
console.log("My name is:", name)

// floating point: This is a number with a decimal
let quantity = 35.5
console.log("The quantity of sugar bought is: ", quantity)
console.log(typeof(quantity))

// Boolean : it returns true or false

let isAdult = true
let isRegistered = false
console.log("is James an Adult?", isAdult)
console.log("is James regitered as a voter?", isRegistered)

console.log(typeof(isAdult))

// undefined : This a data type dclared but no values assinged to it

let county;
console.log("the county is:", county)

// null data type : it is a data type that contains null values
let username = null
console.log("what is the username?", username)

// assingment reasearch and come up with examples on Object and array data types. show how to access items of the object and of an arra y

// exapmle of an array data type
let elements = ["Titanium", "Chlorine", "Helium", "Oxygen"];

console.log("Example elements include: ", elements)

// Arrays use index numbers (starting from 0). 

console.log("The first element is: ", elements[0]);  // Titanium
console.log("The third element is: ", elements[2]);  // Helium

// Changing an Array Item


elements[1] = "Hydrogen";
console.log("Chlorine is replaced: ", elements);

// example of Object Data Type
// An object stores data in key–value pairs.

let Uranium = {
    electrons: 92,
    protons: 92,
    neutrons: 146,
    series: "Actinide",
    stable: false
};

// Accessing Object Properties
// There are two ways:
// 1.)Dot Notation
console.log("Number of electrons in Uranium is: ", Uranium.electrons);   // 92
console.log("Uranium is found in the series: ", Uranium.series);    // Actinide

// 2.)Bracket Notation
console.log("The number of protons in Uranium are: ", Uranium["protons"]);  // 92

//  Bracket notation is useful when:
// .The property name has spaces
// .The property name is stored in a variable
// example
let key = "protons";
console.log("The number of protons in Uranium are: ", Uranium[key]);   // 17

// Object Inside an Array

let gasses = [
    { name: "Oxygen", atoms: 2 },
    { name: "Carbon dioxide", atoms: 3 }
];

console.log("Example gasses and the number of atoms in molecules: ", gasses)