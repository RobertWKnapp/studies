/**
 *  DATA TYPES:
 *  0:  Data types are the kind of values that can be stored and manipulated inside a variable. variables do not have
 *          types, but the values in them do.  These types define the intrinsic bahavior of the values.  The typeof operator
 *          can always be used to verify.
 *          
 *  1:  Number: Simple: JavaScript numbers are always one type: double (64 bit floating point). JavaScript does not define
 *          different types of numbers, like integers, short, long, etc. JavaScript numbers are always stored as double 
 *          precision floating point numbers, following the international IEEE 754 standard. This format stores numbers
 *          in 64 bits, where the number (or the fraction) is stored in bits 0 to 51 and the sign in bit 63.
 * 
 *  2:  String: Simple: the string data type represents textual data and is encoded as a sequence of 16-bit unsigned
 *          integer values representing UTF-16 code units.  Each element in the string occupies a position in the string.  
 * 
 *  3:  Boolean: Simple: A value that can be either true or false. If you need to know 'yes' or 'no' about something
 *          then you would want to use the boolean function. As simplistic as it sounds this value is very useful
 *          all over JavaScript programming.  If you want to know yes, or no, this is where you go.
 * 
 *  4:  Array: Complex: An array is technically considered an object, but it is a special type of object that is designed
 *          to hold an ordered collection of elements.  This ordered collection of elements can be of any data type. Since
 *          it is a special type of object use Array.isArry() method to check for an array because typeof will not be able
 *          to tell arrays from other objects.
 * 
 *  5:  Object: Complex: It is a non-primitive data type that consists of unordered key-value pairs.  Each object may
 *          include any mix of these fundamental data tyupes and reference data types, as objects are more complicated.  A 
 *          reference or a pointer to the reference value is supplied to variables.
 * 
 *  6:  Function: Complex: A function is considered a type of ojbect even though typeof returns "function". functions
 *          are first class objects because they can be passed to other functions, returned from functions, and assigend
 *          variables and properties.  They can have properties and methods like any other object. They are a block of  
 *          code that can be executed and return a value.
 * 
 *  7:  undefined: Simple: undefined represents a variable that has been declared, but has not been assigned a value.
 *          A method or statement returns undefined if the variable that is being evaluated does not have an assigned
 *          value. a function returns undefined if a value was not returned.
 * 
 *  8:  null: Simple; null is a primitive data type, but it has a quirk.  typeof null returns "object".  this came from
 *          the early days of JavaScript, but has not been changed due to backward compatibility.  Null means "nothing" -
 *          something that does not exist.  To check if something is null use the strict equality operator (===).
 * 
 *  9:  NaN: Simple: NaN stands for Not a Number; and undefined numerical result.  It represents a non-numeric value, 
 *          but its data type is number. Undefined as a real number and being a numeric data type
 *          it is part of the global object.
 * 
 *  10: Infinity and -Infinity: Simple: This value is a special value which is bigger than any number value. The property
 *          is usually used in computations involving large numbers or mathmetical operations that result in a value that 
 *          is too larg to be represented by a standard number data type.  It is considered a number.
 * 
 *  11: What is the difference between primitive/simple and complex data types: One of the biggest difference between 
 *          the two is that primitive/simple data types are stored by value - each variable holding a primitive value 
 *          holds a copy of the acual value - and complex data types are stored by reference - variables holding
 *          complex data types store a reference to the location in memory where the data is stored.
 * 
 *  12: Primitive values are passed to a function BY COPY, complex value are passed BY REFERENCE.
 *          What does that mean, and how are they different. 
 * 
 * 
 * 
 * 
 *  */ 