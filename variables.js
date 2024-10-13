/**
 * VARIABLES:
 * 
 * 0: Variables are named 'containers' for storing data values. These 'containers' hold information that can
 *      be used and manipulated throughout your code.
 * 
 * 1. Declaration and Assignment: In order to create a variable we must first `declare` it. Depending on the declarative 
 *      keyword you use, you may initialize the variable with a value or not. When you declare a variable the name 
 *      you give it can contain letters, underscores or dollar signs, but they are case sensitive.
 *      Assignement is when an assignment operator is attached to the variable which attaches the name of the variable
 *      to it's value.
 * 
 * 
 * 2. var, let, const: There are three declarative keywords that can be used to declare variables--var, let, const.
 *      var is the most traditional way to declare a variable.  It can be hoisted and variables declared with var 
 *          have function scope.
 *      Let was introduced in ES6 and it is a more variable variable. Let can be reassigned, but it is block scoped.
 *      Const was also introduced in ES6 and is the most firm declaration choice.  It cannot be reassigned and
 *      it is block scoped.
 * 
 * 3: Hoisting is the behavior built into JavaScript where declarations of functions and variables are moved to the 
 *      top of the scope.  This is done before code execution. When hoisting happens it allows functions and variables
 *      to be used before they are declared. No matter where the function or variable is declared they are moved to 
 *      the top of the scope regardless of whether their scope is global or local.
 */

//1a. declaration - when a variable is defined it does not have a value attached to it.  When a var or let is assigned
//      without a value it is automatically initialized with the field: undefined.  You have to declare a value 
//      for const or it 
var name; 
console.log(name); // undefined
let age; 
console.log(age);  // undefined
const home;
console.log(location);  // uncaught SyntaxError: missing initialzer in const declaration

// 1b. assignment - The assignment operator ( = ) is used to assign a value to the variable
myName = 'Phil';
console.log(myName); // Phil
age = 59
console.log(age);  // 59
home = 'Hawaii'
console.log(home); // Hawaii

// 1c. re-assignment: var and let can be reassigned where the value changes to a new value.  The previous value is lost.
//      const cannot be reassigned.
myName = 'James';
console.log(myName); // James
age = 60;
console.log(age); // 60
home = 'lower 9';
console.log(home); // uncaught typError: assignment to constant variable.

