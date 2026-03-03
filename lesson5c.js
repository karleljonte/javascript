// Export modules
// We export modules so that we can use/utilise them in other files/modules in our programs

export const calculator = (x ,y) =>{
    let difference = x - y

    console.log("The difference of the two numbers is: ", difference)
}

export const simpleInterest = (principle, rate, time)=>{
    let si = (principle * rate * time) / 100
    console.log("The simple interest is ", si)
}


const bmi = (weight, height) =>{
    let answer = weight / (height ** 2)
    console.log ("The BMI of the person is: ", answer, "kg/m\u00b2")
};

export{bmi}

