/**
 * 0: FUNCTIONS:
 * 
 * 1. The two phases to using functions: first we must ?? Next we can execute (or two other words for executing a function/)
 *      a function by?
 *      First we must define the function using the 'function' keyword or with the arrow syntax.  The function can be created
 *      by just using the 'function' keyword or it can be made as an expression which assigns it to a variable.
 *      Next we can call, or invoke a function which executes the function.
 * 2. What's the difference between a function's parameters and arguments PASSED to a function?
 *      Parameters are the variables listed in the function definition. Parameters act as placeholders for the valuse
 *      that will be passed to the function.
 *      Arguments are the actual values that are passed to the function when it is called. Arguments replace the 
 *      parameters defined in the function.
 * 3. What's the syntax for a NAMED function?
 *      function is the keyword and it comes first then you have the functionName, the parameters and the code inside the curly braces.
 *      function functionName(parameters) {
 *          // function body
 *          // code to be executed
 *      }
 * 4. How do we assign a function to a variable?
 *      you designate/create the variable with var, let or const and then using an assignment operator assign it to the function:
 *          let functionVariable = function(parameters, moreParameters) {
 *          // function body
 *          // code to be executed
 *      }
 * 5. Functions can OPTIONALLY take inputs, and OPTIONALLY return a single value.  How do we specify inputs, and how do we 
 *      specify outputs?
 *          To specify inputs, the parameters must be defined in the function declaration or in the expression.  Parameters
 *          are acting as placeholders for the arguments.
 *          If a functino does not receive an argument for a parameter it defaults to 'undefined'.
 *          To specify outputs the 'return' statement is used inside the function.  The 'return' statement sends a value
 *          back to the place where the function was called.
 *          If no 'return' statement is provided the function will return 'undefined' by default.
 * 6. Scope: Functions can see and modify variables in parent or global scopes. the inverse is not true.
 *      Correct: scope determines where variables can be accessed and/or modified. 
 *      Function scope: Functions create their own scope. Variables defined within a function are not accessible outside that function.
 *          A function can access variables from its parent scope (if it is nested) or the global scope.
 *      The inverse is NOT true. Local variables - variables declared in a function cannot be accessed outside that function.
 *          The global or parent scope cannot see or modify the local variables within a functino.
 * 7. Closures: Functions form closures around the data they house. If an object returned from the function and is held in memory
 *      somewhere (referenced), that closure stays ALIVE, and data can continue to exist in these closures!
 *      Closures allow functions to "remember" their lexical scope even when they are executed outside of that scope. 
 *      It is essentially 'capturing' that data within the functions memory.  If this function is returned and held somewhere
 *      in the code (referenced), the closure remains active, allowing the data it holds to persist as long as the reference
 *      exists, even if the outer function is no longer accessible.
 */