function sum(...nums) {
  console.log(nums);
  return console.log(nums.reduce((acc, curr) => acc + curr));
}

const numbers = [1, 2, 3, 4, 5, 6, 100];

sum(...numbers);


function min(...nums) {
  // console.log(nums);

  return Math.min(...nums);
}
console.log(min(10, 0, -4, 20, 5000, 74, 86));
