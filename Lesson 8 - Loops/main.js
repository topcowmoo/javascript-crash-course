// Loops - Used to repeat a block of code. Eg. Want to print numbers from 1 to 50 you can use a loop

// 1. For loop
// 2. While loop
// 3. do..while loop
// 4. for..of loop

// 1. for loop

// for (initializer; condition; final-expression) {
    // code to run
// }
// initializer is run before starting the loop, condition which is checked if the loop should stop
// final-expression which is run each time the loop has gone through an iteration, {} then block of code 
// which will run each time the loop iterates

// Log a message to the console 5 times
for (let i = 1; i <= 5; i++) {
    console.log("Iteration number " + i)
} 
// first i is set to 1 then loop checks if the i is less than or equal to 5. it is  then the code
// in the currly braces is executed. After this i is incremented by 1 and the condition is checked again
// now i is equal to 2. The condition is still valid since 2 is less than 5. The message is logged to the console and 
// i is incremented by 1 again. This happens for i is equal to 3, 4 and 5.
// After logging the 5 log the i is incremented to 6 now the condition evaluates to false. When the 
// condition becomes false this loop is terminated.

// 2. while loop

// initializer
// while (condition) {
//      code to run
//    final-expression
// }

// initializer varibale is set before the loop and the final expression is included inside the loop

let i = 1
while (i <= 5) {
    console.log("Iteration number " + i)
    i++
}
// first i is set to 1 the condition is evaluated which is true. The code is executed and i is incremented
// This continues until the value of i is 6 in which case the condition evaluates to false adn the loop is terminated.

// 3. Do..While loop

// initializer
// do {
//      code to run
//    final-expression
// } while (condition)

// the do while loop is always executed at least once. This is because the condition comes after the code inside the loop

let ii = 5
do {
    console.log("Iteration number " + i)
    ii++
} while (ii <= 5)

// 4. For..of loop is used to loop over a collection of data like an array as
// it asbstracts away 2 things. First you dont have to keep track of a variable to increment the
// iteration count. So no need for i 
// Second you dont have to figure out how to access the item in the collection.

// for (const item of array) {
    // code to run
// }

const numArray = [1, 2, 3, 4, 5]

for (const num of numArray) {
    console.log("Iteration number " + num)
}
// iteration 1 num is equal to 1, iteration 2 num is equal to 2 etc.