// HOF: a function that accepts functions as parameters OR return a function (map, filter, ...)
// Functional Programming

function myFunction(callback) {
  // every function has name property that show the actual name of the function
  // we can use this property to prove to the student that the callback argument is sayHello function but just the name changed
  console.log("the actual function name is: ");
  callback();
}

// function sayHello() {
//   console.log("hello");
// }

myFunction(() => {
  console.log("hello");
});

// like foreEach()
function hofFunc(func) {
  func();
}

// like map()
function hofFunc(func) {
  return func();
}

const something = hofFunc(() => {
  return "hello";
});

console.log(something);

// ---------- separator ---------- //

function sib(porteghal) {
  return porteghal();
}

const func = () => {
  return "ghazaal";
};

const moz = sib(func);

console.log(moz);

// ---------- separator ---------- //

function add(x) {
  return function (y) {
    return x + y;
  };
}

const addTenTo = add(10);
const addTwentyTo = add(20)(10);
console.log(addTwentyTo);
console.log(addTenTo(20));
console.log(addTenTo(40));

// ---------- separator ---------- //

function callTwice(func) {
  func();
  func();
}

function rollDice() {
  const roll = Math.floor(Math.random() * 6) + 1;
  console.log(roll);
}

callTwice(rollDice);
