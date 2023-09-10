//The asynchronous callback is executed after the execution of the higher-order function.

//  asynchronous callbacks are non-blocking: the higher-order function completes its execution without waiting for the callback. The higher-order function makes sure to execute the callback later on a certain event.

console.log('setTimeout() starts');
setTimeout(function later() {
  console.log('later() called');
}, 2000);
console.log('setTimeout() completed');

// logs 'setTimeout() starts'
// logs 'setTimeout() completed'
// logs 'later() called' (after 2 seconds