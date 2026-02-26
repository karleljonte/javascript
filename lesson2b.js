// Comparison Operators
// They usually evaluates to a boolean answer
let number1 = 5
let number2 = 10
let number3 = 20


console.log(number1==number2)
console.log(number1 >= number2)
console.log(number1 <= number2)
console.log(number1 > number2)
console.log(number1 < number2)
console.log(number1 != number2)
console.log(number1 != number1)

// Triple equal sign - Research in javascript
// Logical operators are used to evaluate two or more conditions and they also give a booleananswer
// LOGICAL AND (&&) it evaluates to true if all conditions/statments are true
console.log((number1 < number2) && (number2 > number1) && (number3 > number2))

// logical OR (||) - It evaluates to true if one of the condition is true.
console.log((number1 > number2) || (number2 > number1))

// Logical not (!) - it is used to negate a condition/statement
console.log(!(number1 < number2))