let radius = 8;

if (radius > 3) {
  let PI = 3.14;
  const msg = 'Hi';
  console.log(msg);
  // BLOCK SCOPE
}

console.log(radius);
console.log(PI);
console.log(msg);

// for (let i = 0; i < 5; i++) {
//   // BLOCK SCOPE
//   let msg = "falafel is not food, it is a culture.(benyamin(ع))";
//   console.log(msg);
// }

// // console.log('this is outside the block scope:' , msg)
// console.log(i);

//var

// for (var i = 0; i < 5; i++) {
//   // BLOCK SCOPE
//   let msg = "jasem is not a name, it is a culture.(benyamin(ع))";
//   console.log(msg);
// }

// // console.log('this is outside the block scope:' , msg)
// console.log(i);
