/**
 * 0: LOOPS: loops are used to execute a block of code repeadly until a specified condition is met. It is a programming
 *      tool that, once again, is used to repeat a set of instructions. They are essential for performing repetitive 
 *      task efficiently. There are several types of loops, each situated for different scenarios.
 * 
 * 1: Explain while, for and for-in loops
 *  1a: While Loops continue to execute as long as a specified condition is true.
 *  1b: For loops are used when the number of iterations is known beforehand.
 *  1c: for-in loops are used to iterate over the enumerable properties of an object.
 * 
 * 2. Be able to loop any number of times, forward counting up to some limit, backwards counting down to 0.
 * 
 * 3. Loop over an Array, forwards and backwards.
 * 
 * 4. Loop over an object.
 * 
 */

// 1a: while loop
let i = 0;
while (i < 5) {
    console.log(i); // Expected output: 0, 1, 2, 3, 4
    i++;
}
// 1b: for loop
for (let i = 0; i < 5; i++) {
    console.log(i); // Expected output: 0, 1, 2, 3, 4
}
// 1c: for-in loop
const obj = { a: 1, b: 2, c: 3 };
for (const key in obj) {
    console.log(key, obj[key]); // Expected output: a 1, b 2, c 3
}

// 2: loop any number of times up to some limit; down to zero.
function upLoop(max) {
    for(let i = 0; i <= max; i++) {
        console.log(i); // expected output: 0, 1, 2, ... max
    }
}
function downLoop(num) {
    for(let i = num; i >= 0; i--){
        console.log(i); // expected output: num, num - 1, ... 0.
    }
}

// 3: loop over an array.  forwards and backwards
let arrayUp = [1, 2, 3, 4, 5, 6, 7];
for(let i = 0; i < array.length; i++) {
    console.log(array[i]); // expected output: 1, 2, 3, 4, 5, 6, 7
}
let arrayDown = [2, 3, 4, 5];
for(let i = array.length - 1; i >= 0; i--) {
    console.log(array[i]);  // expected output: 5, 4, 3, 2
}

// 4: loop over an object 
let obj2 = {
    firstName: "Phil",
    lastName: "Phassus",
    age: 3
}
for (let key in obj2) {
    console.log(key + ":" + obj2[key]);
}  // expected output: "firstName: Phil" "lastName: Phassus" "age: 3"
