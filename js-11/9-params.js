function greeting(name, isGood = true) {
  if (isGood) {
    return "hi " + name;
  }
  return "hi " + name + ". how are you?";
}

console.log(greeting("sajjad"));
console.log(greeting("behnoush"));
console.log(greeting("yasaman", true));

console.log(greeting("ghanbar", false));
