/**
 * 0: STRING MANIPULATION: Strings are sequences of characters enclosed in either single or double quotes. string manipulation 
 *      refers to the process of working with and modifying strings. In JavaScript strings are immutable which means that 
 *      these methods do not modify the original string but rather return a new string with the desired changes. String 
 *      manipulation is a crucial aspect of programming in JavaScript, enabling developers to transform, analyze, and present 
 *      data effectively.
 * 
 * 1: With Operators: String manipulation can involve using various methods and operators to create, modify, or extract 
 *      information from strings. The primary operator used is the concatenation operator, but any operator can be used.
 * 
 * 2: With string methods: String methods are built-in functions specifically designed to work with strings.  
 *      All string methods produce a new string without altering the original string.  String manipulation refers to the 
 *      process of modifying, transforming, or extracting information from strings using various string methods.
 * 
 */

// 1a: concatenation operator (+):  It combines two strings.
let a1 = 'hello';
let a11 = 'world';
console.log(a1 + " " + a2);  // expected output: 'hello world';

// 1b: template literals (`): takes string concatenation and makes the code easier to write and understand
let b1 = "Fred";
console.log(`Hello, ${b1}!`) // expected output: 'Hello Fred!'

// 1c: using the not equal comparison operator (!==)
let c1 = 'cat';
let c11 = 'dog';
console.log(c1 !== c11); // expected output: true

// 1d. Using any of the comparison operators
console.log('apple' < 'banana'); // expected output: true

// 2a: length: returns the number of characters in a string
let a2 = 'Howdy';
console.log(a2.length); // 5

// 2b. charAt(index): - returns the character at the specific index
console.log(a2.charAt(1)); // 'o'

// 2c. toUpperCase()/toLowerCase():  Makes all characters in a string upper or lower case
console.log(a2.toUpperCase()); // 'HOWDY'
console.log(a2.toLowerCase()); // 'howdy'

// 2d. indexOf(searchValue): Returns the index of the first occurence of a specified value
console.log(a2.indexOf('o')); // 2

