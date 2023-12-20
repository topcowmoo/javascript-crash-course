// Operators - An operator is a special symbol used to perform operations on values and variables.
// 1. Assingment Operator
// 2. Arithmetic Operator
// 3. Comparison Operator
// 4. Logical Operators
// 5. String Operators
// 6. Other Operators

// 1. Assignment operators - used to assing values to varibales

let x = 23

// 2. Arithmetic operators - used to perform arithmetic calculations

// k and y are operands and the symbol is the operator (+ - * / etc.)
let k = 10
let y = 3

console.log(k + y);
console.log(k - y);
console.log(k * y);
console.log(k / y);
console.log(k % y);
console.log(++k);
console.log(--y);

// 3. Comparison operators - compare two values and return a boolean value either true or false. 
// Used in loops and branching statements.

// == checks if the two values are equal
console.log(k == y);

// != checks if the two values are not equal
console.log(k != y);

// === compares the value and data type
console.log(k === y);

// !== checks whether the two operands or values are NOT equal. This is called strict equality
console.log(k !== y);

// > greater than
console.log(k > y);

// >= greater or equal to
console.log(k >= y);

// < less than
console.log(k < y);

// <= less or equal to
console.log(k <= y);

// 4. Logical operators - perform logical operations and return either true or false. 
// Very helpful when combining comparison operators results to make a decision.

// example we need to figure out if the number 6 lies in the range of k and y
// logical-and
const isValidNumber = k > 6 && 6 > y;
// && is called logical-and operator and returns true if both operands are true, if not its false
console.log(isValidNumber);

// logical-or
const isItValidNumber = k < 6 || 6 > y;
// || is called logical-or operator and returns true if either of the operands are true, if not its false
console.log(isItValidNumber);

// ! negates the value and flips the answer. If true, it will return false. If false, it will return true.
const isValid = true;
console.log(!isValid);

// 5. String operators - 

// + operator performs addition when used with numbers and concatenation when used with strings
console.log("Bruce " + "Wayne");

// 6. Other operators - Ternary Operator - returns a value based on the condition.
const isEven = 10 % 2 === 0 ? true : false;
console.log(isEven);

const isItEven = 10 % 2 === 0 ? "number is even" : "number is odd";
console.log(isItEven);