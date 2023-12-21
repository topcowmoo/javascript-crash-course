// Conditional Statements

// if
// else
// else if
// switch

// if statement

const num = 3;

if (num > 0) {
  console.log("Number is positive");
} else {
  console.log("Number is negative");
}

// The code inside {} will only run if the condition is true.

// else statement - must follow if statement. If we want a negative result -4 Number is negative

const numd = -3;

if (numd > 0) {
  console.log("Number is positive");
} else {
  console.log("Number is negative");
}

// if the above condition is true the if block will be executed and if its false the else block will be executed.

// If you need to decide amongst more than two alternatives you need the if else if and else statements

// Example log if the number is positive, negative or zero

// Positive number
const nums = 4;

if (nums > 0) {
  console.log("Number is positive");
} else if (nums < 0) {
  console.log("Number is negative");
} else {
  console.log("Number is zero");
}

// Negative number

const numm = -4;

if (numm > 0) {
  console.log("Number is positive");
} else if (numm < 0) {
  console.log("Number is negative");
} else {
  console.log("Number is zero");
}

// Number is 0
const numms = 0;

if (numms > 0) {
  console.log("Number is positive");
} else if (numms < 0) {
  console.log("Number is negative");
} else {
  console.log("Number is zero");
}

// Switch statement

const color = "blue";
switch (color) {
  case "red":
    console.log("Color is red");
    break;
  case "blue":
    console.log("Color is blue");
    break;
  case "purple":
    console.log("Color is purple");
    break;
    default:
        console.log("Not a valid color")
}

// If variable value is not a color then the default statement is executed.
const colorr = 3233;
switch (colorr) {
  case "red":
    console.log("Color is red");
    break;
  case "blue":
    console.log("Color is blue");
    break;
  case "purple":
    console.log("Color is purple");
    break;
    default:
        console.log("Not a valid color")
}
