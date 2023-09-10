
//simple callback function
function greet(name){
    return ` Hello welcome ${name} to the session`
}

console.log(greet("Aparajkar"));

//same thing if you want to do with an array

persons=["Bharat","Desh"]

let greetings=persons.map(greet);
console.log(greetings);
 
// What's interesting is that persons.map(greet) method accepts greet() function as an argument. Doing so makes the greet() a callback function.

//The persons.map(greet) is a function that accepts another function as an argument, so it is named a higher-order function.

//the higher-order function persons.map(greet) takes the responsibility to invoke the greet() callback function with each item of the array as an argument

// the higher-order function takes the full responsibility of invoking the callback and supplying it with the right arguments.
