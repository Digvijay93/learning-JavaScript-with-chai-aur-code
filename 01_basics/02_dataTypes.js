// terminal => node 01_basics/02_dataTypes.js


"use strict"; // treats all jS code as newer version


//code readability should be high , dont type like garbage. this example of less code readability.

console.log( 3
    + 3) 


// good practice
console.log("Digvijay"); 



/* 

    *Note*
    A JavaScript variable can hold any type of data.

*/

// JavaScript has 8 Datatypes (7 primitive data types and 1 object)


/*
    *Note*
    Javascript numbers are always one type:
    double (64-bit floating point).

*/ 

/* 

1. String        => '' or "" (When adding a number and a string, 
                              JavaScript will treat the number as a string.)

2. Number        => Numbers can be written with, or without decimals.

3. Bigint        => BigInt is a new datatype (in version ES2020)

4. Boolean       => true/false (Booleans are often used in conditional testing.)

5. Undefined     => (value is not assigned.)In JavaScript, a variable without a value, 
                    has the value undefined. The type is also undefined.
                    Any variable can be emptied, by setting the value to undefined. 
                    The type will also be undefined.

6. Null          => Standalone value or empty (we can assign null to any variable).

7. Symbol        => 

*/



/*  

    The Object Datatype =>
    The object data type can contain:

    1. An object  => JavaScript objects are written with curly braces {}.
    2. An array
    3. A date
    
*/


// Examples

// Numbers: 
// All JavaScript numbers are stored as decimal numbers (floating point).
// Numbers can be written with, or without decimals:
let length = 16;
let weight = 7.5;


//BigInt:
let bigInteger = BigInt("123456789012345678901234567890");


// Strings:(in '' or "" both are string)
let color = "Yellow";
let lastName = 'Johnson';

// Booleans
let a = true;
let b = false;

// Object:
const person = {firstName:"John", lastName:"Doe"};

// Array object:
const cars = ["Saab", "Volvo", "BMW"];

// Date object:
const date = new Date("2022-03-25");



/* 

    JavaScript Types are Dynamic => 
    JavaScript has dynamic types. This means that the same variable can be used to hold different data types:   

*/ 

let x;       // Now x is undefined
x = 5;       // Now x is a Number
x = "John";  // Now x is a String



/*

    The typeof Operator ==>
    You can use the JavaScript typeof operator to find the type of a JavaScript variable.

    The typeof operator returns the type of a variable or an expression:

    Example ==>
    
    typeof ""               // Returns "string"
    typeof "John"          // Returns "string"
    typeof 'John Doe'     // Returns "string"

*/


console.log(typeof [20]);           // Returns (Array) "object".
console.log(typeof '');             // Returns "string".
console.log(typeof "") ;            // Returns "string".
console.log(typeof [20, 21, 32]);   // Returns "object".
console.log(typeof true);           // Returns "boolean".
console.log(typeof 25.33);          // Returns "number".
console.log(typeof 58);        // Returns type => number" with .

let age = 31;
console.log(typeof age);            // returns type of variable name "age" => "number"

console.log(typeof null);           // Returns "object"
console.log(typeof undefined);      // Returns "undefined"


/* 

    ***** IMPORTANT NOTE ****


    JavaScript evaluates expressions from left to right. Different sequences can produce different results:


    **** EXAMPLES ****

    (1)
        let x = 16 + "Volvo"; ==> 
        When adding a number and a string, JavaScript will treat the number as a string.
        JS will treat it as a string concatnation. 
        (let x = "16"+"Volvo" ==> output==> 16Volvo).


    (2)
        In this Example, since the first operand is a string, all operands are treated as strings.
        let x = "Volvo" + 16;       ==> output ==> Volvo16
        let x = "Volvo" + 16 + 4;   ==> output ==> Volvo164

    (3)
        JavaScript evaluates expressions from left to right. Different sequences can produce different results:
        In this example, JavaScript treats 16 and 4 as numbers, until it reaches "Volvo".
        let x = 16 + 4 + "Volvo" ==> output ==> 20Volvo (it will add 16+4 then concat with string)

*/