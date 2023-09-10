/* 
Variables are containers for storing values.
When to Use var, let, or const?
1. Always declare variables

2. Always use const if the value should not be changed

3. Always use const if the type should not be changed (Arrays and Objects)

4. Only use let if you can't use const

5. Only use var if you MUST support old browsers.



The Assignment Operator
In JavaScript, the equal sign (=) is an "assignment" operator, not an "equal to" operator.


After the declaration, the variable has no value (technically it is undefined).

To assign a value to the variable, use the equal sign:

You cannot re-declare a variable declared with let or const.

-------------------------------------------------------


The let keyword was introduced in ES6 (2015)

Variables defined with let cannot be Redeclared

Variables defined with let must be Declared before use

Variables defined with let have Block Scope


let x = "John Doe";

let x = 0;

you cannot re-declare



Block Scope
Before ES6 (2015), JavaScript had Global Scope and Function Scope.

ES6 introduced two important new JavaScript keywords: let and const.

These two keywords provide Block Scope in JavaScript.

Variables declared inside a { } block cannot be accessed from outside the block:

Redeclaring Variables
Redeclaring a variable using the var keyword can impose problems.

Redeclaring a variable inside a block will also redeclare the variable outside the block:

*/

/* scope means usually where these */

