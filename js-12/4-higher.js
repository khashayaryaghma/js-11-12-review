// HOF: a function that accepts functions as parameters OR return a function (map, filter, ...)
// Functional Programming

function myFunction(callback) {
  // every function has name property that show the actual name of the function
  // we can use this property to prove to the student that the callback argument is sayHello function but just the name changed
  console.log("the actual function name is: ", callback.name);
  callback();
}

function sayHello() {
  console.log("hello");
}

myFunction(sayHello);

// ---------- separator ---------- //

// function add(x) {
//   return function (y) {
//     return x + y;
//   };
// }

// const addTenTo = add(10);

// console.log(addTenTo(20));
// console.log(addTenTo(40));

// ---------- separator ---------- //

// function callTwice(func) {
//   func();
//   func();
// }

// function rollDice() {
//   const roll = Math.floor(Math.random() * 6) + 1;
//   console.log(roll);
// }

// callTwice(rollDice);
