// Functions - JavaScript function is a block of code designed to perform a particular task.
// Example: add two numbers, multiply two numbers etc.
// Functions are reusable as they can be defined once and can be called with different values
// resulting in different results
// Functions help divide a complex problem into smaller chunks and makes your program easy
// to understand and maintain.

// function name(parameter1, parameter2, parameter3) {
    // code to be executed
// }

// Define a function that logs a greeting message to the console

function greet() {
    console.log("Good morning dick tracy")
}

greet()
greet()
greet()

// Adding a parameter so can use with multiple people
function greet(username) {
    console.log("Good morning " + username)
}

greet("Bruce")
greet("Wayne")
greet("Batman")

// username is a function parameter and when invoking the function Bruce Wayne and Batman are function arguments

// Function can also return a value which we can use later in our code

// Define a function that adds two numbers and returns their sum

function add(a, b) {
    return a + b
}
const sum = add(5, 3)

console.log(sum)

// Arrow Functions

function add(a, b) {
    return a + b
}
const arrowSum = (a, b) => {
    return a + b
}

const summ = arrowSum(60, 30)
console.log(summ)