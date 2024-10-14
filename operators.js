/**
 * 0: Operators: JavaScript operators are special symbols used in scripts to perform operations on operands. examples include
 *      logical comparisons, arithmetic calculations, or value assignments.  Operators play a crucial role in controlling
 *      the flow and processing of data with the computer language.  They are the symbols between values that allow
 *      different operation.  They are listed below:
 * 
 * 1: Assignment operators: Assignment operators assign a value to its left operand based on the value of the right 
*       operand.  The simple assignment operator is the equal sign ( = ).  A list of compound operators is below.
 * 
 * 2. Arithmetic operators: an arithmetic operator takes a numerical value (either literal or variable) as the operand
 *      and returns a single numerical value.  The standard arithmetic operators are addition (+), subtraction (-),
 *      multiplication (*), and division (/).  These operators work as they do in most other programming languages
 *      when used with floating point numbers (note: division by 0 produces infinity).
 * 
 * 3. Comparison operators: A comparison operator compares its operands and returns a logical value based on whether 
 *      the comparison is true if the operands can be numerical, string, logical, or object values. Strings are compared 
 *      based on standard lexicographical ordering; unicode values. Usually, if the two operands are not of 
 *      the same type, JavaScript attempts to convert them to an appropriate type for the comparison. This behavior generally 
 *      results in comparing the operands numerically. The only exceptions to type conversion within comparisons involve 
 *      the === and !== operators, which perform strict equality and inequality comparisons. These operators do not attempt 
 *      to convert the operands to compatible types before checking equality.
 * 
 * 4. Logical operators: Logical operators are generally used with Boolean values (true or false); when they are, they return a 
 *      Boolean value. However, the &&, ||, and ?? operators actually return the value of one of the specified operands, so 
 *      if these operators are used with non-Boolean values, they may return a non-Boolean value. As such, they are more 
 *      adequately called "value selection operators".
 * 
 * 5. Unary operators(!, typeOf, -): A unary operation is an operation with only one operand
 * 
 * 6. Ternary operator (a ? b : c):  Aka: conditional operator. the ternary operator is the only JavaScript operator that 
 *      takes three operands. The operator can have one of two values based on a condition.  The only JavaScript
 *      operator that takes three operands.
 */

// 1a. Assignment operator - the ( = ) sign.  used to asssign a value to a variable or property.
let x = 7;
console.log(x); // logs: 7

// 1b. Addition assignment - ( += ) performs addition (numeric addition or string concatenation) on the two operands and assigns
        // the result to the left operand
let a = 7;
console.log(a += 3);  // logs: 10
let b = 'hello';
console.log(b + ' world');  // logs 'hello world'

// 1c. Subtraction assignment - ( -= ) performs subtraction on two operands and assigns the result to the left operand.
let c = 9;
console.log(c -= 7);  // logs: 2

// 1d. Multiplication assignment - ( *= ) performs multiplicaton on the two operands and assigns the result to the left operand.
let d = 4;
console.log(d *= 2); // logs: 8

// 1e. Division assignment - ( /= ) performs division on the two operands and assigns the result to the left operand
let e = 10;
console.log(e /= 2); // logs: 5

// 1f. Remainder assignment - ( %= ) performs remainder on the two operands and assigns the result to the left operand.
let f = 22;
console.log(f %= 7); // logs: 1

// 1g. Exponentiation assignment - ( **= ) performs exponentation on the two operands and assigns the result to the left operand.
let g = 4;
console.log(g **= 2); // logs 16
console.log(g **= "howdy"); // logs NaN

// 1h. Left shift assignment - ( <<= ) performs left shift causing the bits in shift-expression to be shifted to the left by
        // the number of positions specified y the additive-expression.
 let h = 5;  // in binary: 101
 let shifter = num <<= 2;  // left shifted by 2 positions
 console.log(h); // output: 20 (in binary 10100 - shifted the left 2 positions)
 
 // 1i. Right shift assignment - ( >>= ) performs right shift on the two operands and assigns the result to the left operand
let i = 5; // binary 101
i >>= 2; // 1 = right shifted the number 2 spaces
console.log(i); // output: 1

// 1j. Unsigned right shift assignment - ( >>>= ) performs unsigned right shift on the two operands and assigns the result to the left operand.
let j = 5; // binary 101
j >>>= 2; // binary 1 - excess bits shifted off to the right are discarded.
console.log(j); // output is 1;

// 1k. Bitwise AND assignment - ( &= ) performs bitwise AND on the two operands and assigns the result to the left operand
        // It returns a number or BigInt whose binary representation has a 1 in each position for which the corresponing
        // bits of both operands are 1.
let k = 5; // binary 101
k &= 3; // binary 11
console.log(k); // expected output: 1

// 1l. Bitwise XOR assignment - ( ^ ) performs bitwise XOR on the two operands and assigns the result to the left operand.
        // It returns a number or BigInt whose binary representation has a 1 in each bit position for which the corresponding
        // bits of either but not both operands are 1.
let l = 5; // binary 101
let ll = 3; // binaray 11
console.log(l ^= ll); // binaray 110, expected output: 6.

// 1m. Bitwise OR assignment - ( | ) performs bitwise OR on the two operands and assigns the result to the left operand.
        // It returns a number or BigInt whose binary representatino has a 1 in each bit position for which the corresponding
        // bits of either or both operands are 1.
let m = 5; // binary 101
let mm = 3; // binary 11
console.log(m |= mm); // binary 111: expected output: 7

// 1n. Logical AND assignment - ( &&= ) operator only evaluates the right operand and assigns to the left if the left operand is truthy.
let n = 10; 
let nn = 20
if (n > 5 && nn < 30) {
    console.log('go team')
} else {
    console.log('boo')
}  // expected output 'go team'

// 1o. Logical OR assignment - ( || ) operator only evaluates the right operand and assigns to the left if the left operand is falsy.
let o = true;
let oo = false;
if (o || oo) {
    console.log('go team');
    } else {
        console.log('not today');
    } // expected output: 'go team'

// 1p. Nullish coalescing assignment - ( ??= ) aka the logical nullish assignment operator.  It only evaluates the right operand
        // and assigns to the left if operand is nullish (null or undefined)
let p = { length: 75};
p.length ??= 10; 
console.log(p.length); // expected output: 75
p.movement = 25;
console.log(p.movement); // expected output: 25

// 2a. Standard arthmetic operators (+), (-), (*), (/)
let a2 = 50
console.log((a2 + 10), (a2 - 10), (a2 * 2), (a2 / 2)); // expected output: 60 40 100 25

// 2b. Remainder (%): binary operator. returns the integer remainder of dividing two operands
let b2 = 22
console.log(b2 % 2); // expected output: 0

// 2c. Increment (++): unary operator. adds one to is operand.  if used as a prefix operator (++x), returns the valus of 
        // operand and after adding one.  If used as a postfix operator (x++), returns the value of its operand
        // before adding one
let c2 = 10;
console.log((++c2), (c2++)); // expected output: 11 11, but c2++ returns 10 before it logs 11.

// 2d. Decrement (--): unary operator. subtracts one from its operand. Same postfix and prefix as increment
let d2 = 2;
console.log((--d2), (d2--));  // expected output; 1 1, but d2-- returns the value of its operand before subtracting 1

// 2e. Unary negation (-): unary operator: returns the negation of its operand.
let e2 = 5;
let e22 = -5
console.log(-e2); // expected output: -5
console.log(-e22); // expected output: 5

// 2f. Unary plus (+): unary operator. attempts to convert the operand to a number, if it is not already.
let f2 = 4;
let f22 = true;
console.log(f2);  // expected output: 4
console.log(f22); // expected output: 1

// 2g. Exponentiattion operator (**): calculates the base to the exponent power. base^exponent
let g2 = 2;
console.log(g2 ** 3); // expected output: 8

// 3a. Equal (==): returns true if the operands are loosly equal.
let a3 = 3;
let a33 = '3';
console.log(a3 == a33); // expected output: true - the number 3 is loosely equal to the string '3'

// 3b. Not equal (!=): returns true of the operands are not equal.
let b3 = 4;
let b33 = 5;
console.log(b3 != b33); // expected output: true.

// 3c. Strict equal (===): returns true if operands are equal and of the same type. 
console.log(a3 === a33);  // expected output: false

// 3d. Strict not equal (!==): returns true if the operands are of the same type, but not equal, or are of a different type
console.log((a3 !== a33), (b3 !== b33)); // expected output: true  true

// 3e. Greater than (>): reurns true if the left operand is greater than the right operand.
console.log(b3 > b33); // expected output: false

// 3f. Greater than or equal (>=): Returns true if the left operand is greater than or equal to the right operand.
console.log(b33 >= b3); // expected output: true.

// 3g. Less than (<): returns true if the left operand is less than the right operand.
console.log(b33 < b3); // expected output: false

// 3h. Less than or equal to (<=): returs true if the left operand is less thanor equal to the right operand.
console.log(a3 <= b3); // expected output: true.

// 4a. Logical AND (&&): Returns left expression if it can be converted to false; otherwise, returns right expression. Thus, when used with 
        // Boolean values, && returns true if both operands are true; otherwise, returns false.
let age = 21;
let hasLicense = true;        
    if (age >= 18 && hasLicense) {
        console.log("You can have a beer.");
    } else {
        console.log("Please exit immediatly.");
    } // expected output: 'You can have a beer."
    
// 4b. Logical OR (||): returns right expression if it can be converted to true; otherwise, returns left expression. 
        // Thus, when used with Boolean values, || returns true if either operand is true; if both are false, returns false.
let hasArrived = true;
let isGuest = false;        
        if (isLoggedIn || isGuest) {
          console.log("Welcome to Holiday Inn!");
        } else {
          console.log("Please login or register as a guest.");
        } // expected output: "Welcome to Holiday Inn"

// 4c. Nullish coalescing operator (??): returns left expression if it is neither null nor undefined; otherwise, returns right expression.
let boo = null ?? 'string a ling';
console.log(boo); // expected output: 'string a ling'
let woo = 0 ?? 77;
console.log(woo); // expected output: 0

// 4d. Logical NOT (!): returns 'false' if its single operand can be converted to 'true'; otherwise returns 'true'.
let d4 = 3;
let d44 = -5;
console.log(!(d4 > 0 || d44 > 0));  // expected output: false

// 5a. Unary operator: any operation with one operand.  Can be anything.
console.log(typeof(d4)); // expected output: 'number'


// 6a. Ternary operator (condition ? expression to execute if truthy : expression to execute if false).
let howOld = 27;
let message = howOld >= 18 ? "Adult" : "Minor";

console.log(message); // Output: "Adult"