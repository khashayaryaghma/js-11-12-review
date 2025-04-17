const obj = {
  name: "mahdis",
  lastName: "mozafari",
  age: 23,
};

console.log(Object.values(obj));

// console.log(Object.keys(obj));
// console.log(Object.entries(obj));

console.log([...Object.values(obj), ...Object.keys(obj)]);
// ["mahdis", "mozafari", 23, "name", "lastName", "age"];

console.log(...Object.values(obj));

console.log("mahdis", "mozafari", 23);
