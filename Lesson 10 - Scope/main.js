// Scope - Determines the accessibility of variables

// 1. Block scope
// 2. Function scope
// 3. Global scope

// 1. block scope - dictates that variables declared inside a pair of curly braces
// cannot be accessed outside of the block

if(true) {
    const myName = "Tiny Balls"
    console.log(myName)
}

// console.log(myName) 

// the console.log(myName) throws an error bc its not inside the block


// 2. Function scope - dictates that varibales declared inside a function are not accessible form outside the function

function testFunction() {
    const myNamee = "Harry Balls"
    console.log(myNamee)
}
// console.log(myNamee)
testFunction()

// 3. Global scope - scope outside any block or a function. Is accessible both inside a block and a function

const myyNum = 99
const myName = "Superman"

if(true) {
    const myName = "Tiny Balls"
    console.log(myName)
    console.log(myyNum)
}
function testFunction() {
    const myNamee = "Harry Balls"
    console.log(myNamee)
    console.log(myyNum)
}

testFunction()