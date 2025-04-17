//Math

const myMath = {
  PI: 3.14,
  square: function (num) {
    return num * num;
  },
  cube: function (num) {
    return num * num * num;
  },
};

// invoke , call
console.log(myMath.square(2));

console.log(Math.pow(2, 3));

console.log(Math.PI);

console.log(myMath.PI);
