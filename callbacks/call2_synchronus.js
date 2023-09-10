//The synchronous callback is executed during the execution of the higher-order function that uses the callback.

//In other words, the synchronous callbacks are blocking: the higher-order function doesn't complete its execution until the callback is done executing.

function map(array, callback) {
    console.log('map() starts');
    const mappedArray = [];
    for (const item of array) { mappedArray.push(callback(item)) }
    console.log('map() completed');
    console.log(mappedArray);
    return mappedArray;
  }
  
  function greet(name) {
    console.log('greet() called');
    return `Hello, ${name}!`;
  }
  
  const persons = ['Bharat','Desh'];
  
  map(persons, greet);
  // logs 'map() starts'
  // logs 'greet() called'
  // logs 'map() completed'

  //greet() is a synchronous callback because it's being executed at the same time as the higher-order function map().
