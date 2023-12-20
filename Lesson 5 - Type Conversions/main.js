// Type Conversions

// Implicit Conversion - also known as type coercion where the JavaScript itself will
// automatically convert the type to be able to run the code you've written.

// Explicit Conversion - where you manually convert the type

// Implicit
console.log(2 + "3")
console.log(true + "3")

// The numeric string is automatically converted into a number when using - * /
console.log("93" - "90");
console.log("2" * "2");
console.log("10" / "2");

// Use non-numeric strings the result is a NaN (not a number)
console.log("bruce" - "wayne");

// Use boolean values with numeric strings false is treated as 0 and true is treated as 1
console.log("5" - true);
console.log("5" - false);

// if you use null with subtraction null is treated as 0
console.log("34" - null);

// if you use undefined with number boolean or null the result is NaN
console.log(2 - undefined);

// Explicit

// If you pass a numeric string it returns the number
console.log(Number("5"));

// If you pass a boolean value of false it will return 0
console.log(Number(false));

// An empty string returns 0
console.log(Number(" "));

// Using parseInt
console.log(parseInt("1873"));

// If you want a floating point number you can use parse float
console.log(parseFloat("3.14"));

// String global method to convert other data types to string
console.log(String(6545));

// The to-string method to convert other data types to string
console.log((500).toString());

// Convert other data types to boolean use global boolean method
console.log(Boolean(10));