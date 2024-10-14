/**
 * 0: CONTROL FLOW - Control flow refers to the order in which statements, instructions, or function calls are executed in a 
 *      program. By default, code is executed line by line from top to bottom.  This flow can be altered by using various
 *      control structures.  This enables the program to make decisions and repeat tasks. The control flow determines
 *      how a program executes based on conditions and loops allowing dynamic decision-making and repetitive operations.
 *      In essence: the order in which statements are executed in a program.
 * 
 * 1: Conditional statements: Used to perform different actions base on whether a specified condition is true or false
 * 
 * 1a: If - Executes a block of code if a specified condition is true.
 * 
 * 1b: Else-if - Executes a block of code if the previous 'if' condition is false and the specified condition is true.
 *      It specifies a new condition to test if the first condition is false.
 * 
 * 1c. Else - Executes a block of code if the corresponding 'if' and 'else if's' conditions are false
 * 
 * 1d. Switch - Allows the execution of different code blocks based on the value of a variable or expression.
 * 
 * 5. Loops - Have their own section in this study
 * 
 * 6. Functions - Have their own section in this study
 * 
 * 7. Jump Statements - used to alter the flow of control by jumping to a specific part of the code
 * 
 * 7a. Break - Exits a loop or switch statement
 * 
 * 7b. Continue - Skips the current iteration of a loop and proceeds to the next one.
 * 
 * 7c. Return - Exits a function and returns a value
 * 
 */

// 1a, 1b, 1c: Conditional statements - if, else
let score = 83;

if (score >= 90) {
  console.log("Grade: A");
} else if (score >= 80) {
  console.log("Grade: B");
} else if (score >= 70) {
  console.log("Grade: C");
} else if (score >= 65)
  console.log("Grade: D");
  else {
    console.log("Grade: F");
} // expected output: "Grade: B"

// 1d: Conditional statements - switch
let day = "Wednesday";

switch (day) {
  case "Monday":
    console.log("Start of the week.");
    break;
  case "Wednesday":
    console.log("Middle of the week")
    break;
  case "Friday":
    console.log("End of the week.");
    break;
  default:
    console.log("Just another day.");
} // expected output: "Middle of the week"

// 7a - break statements are used to exit a loop prematurely.  It does not matter if the loop condition is still true
for (let i = 0; i < 10; i++) {
    if (i === 5) {
      break; // Exit the loop when i equals 5
    }
    console.log(i);
  }  // Expected output: 0 1 2 3 4

// 7b - continue statements - jump statement used within loops to skip the rest of the current iteration and move on to the next one.
for (let i = 1; i <= 10; i++) {
    if (i % 2 === 0) {
      continue; // Skip even numbers
    }
    console.log(i); // Print odd numbers
  }

// 7c - return statement - used to exit a function and OPTIONALLY returns a value.  When a return statement is encountered, the 
    // function immediately stops executing, and the specified value (if any) is returned.
function add(x, y) {
    return x + y;
    }      
    let result = add(5, 3); // result will be 8 