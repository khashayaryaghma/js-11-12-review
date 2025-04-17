
const person = {
  firstName: "Jake",
  lastName: "Gyllenhaal",
  age: 40,
  born: "california",
};


function name() {
  return "firstName"
}


// console.log(person.firstName);
// console.log(person["firstName"]);
// console.log(person["first" + "Name"]);
console.log(person[name()]);


function getName() {
  return "mahsa"
}

let name = getName()

console.log(name);






let arian = "firstName";
console.log(person[arian]);
