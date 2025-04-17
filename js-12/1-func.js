// function collectEggs() {
//   // function scope || local scope
//   let totalEggs = 6;
// }

// collectEggs();
// console.log(totalEggs); // is not defined

/* ================================ */

// let totalEggs = 0; // global scope
// function collectEggs() {
//   // by default declaration variable by var
//   totalEggs = 6; // reassign
// }

// console.log(totalEggs); // 0
// collectEggs();
// console.log(totalEggs); // 6

/* ================================ */

// let totalEggs = 0;
// function collectEggs() {
//   let totalEggs = 6;
//   console.log(totalEggs); // 6
// }

// collectEggs();

/* ================================ */

// NEVER TRY IT AT HOME!!!
// function collectEggs() {
//   totalEggs = 6;
//   // let totalEggs = 6;
//   var totalEggs = 6;
// }

// // let faran;

// collectEggs();
// console.log(totalEggs); // is not defined
// // console.log(faran); // undefined

/* ================================= */
// NEVER EVER DO IT:
// for (i = 0; i < 10; i++) {
//   console.log(i);
// }

// console.log(i);

// var firstName = "ali";
// window.firstName = "sara";
// globalThis.firstName = "dina";

/* ================================ */

// let totalEggs = 0;
// function collectEggs() {
//   // const totalEggs = 6; // new variable
//   totalEggs = 6;

//   // console.log(totalEggs); // 6
// }

// console.log(totalEggs); // 0
// collectEggs();
// console.log(totalEggs); // 6

/* ================================ */

// let deadlyAnimal = "Blue-Ringed Octopus";

// function handleAnimal() {
//   deadlyAnimal = "Scorpionfish";
//   console.log(deadlyAnimal); // Scorpionfish
// }

// console.log(deadlyAnimal); // Blue-Ringed Octopus
// handleAnimal();
// console.log(deadlyAnimal); // Scorpionfish

/* ================================ */

// function collectEggs() {
//   let totalEggs = 6;
//   return totalEggs;

//   // FUNCTION SCOPE
// }

// // console.log(totalEggs); // is not defined
// // collectEggs();
// console.log(collectEggs());
// const totalEggsResult = collectEggs();
// console.log(totalEggsResult); // is not defined

/* ================Quiz 1================ */

// let animal = "Ocuopus";

// function observe() {
//   let animal = "Squid";
//   console.log(animal);
// }
// observe();

/* ================Quiz 2================ */

// const creature = "Dragon";

// function scubaDive() {
//   const creature = "Spanish Dancer"; // a type of sea slug
//   console.log(creature);
// }
// scubaDive();

/* ================Quiz 3================ */

// let deadlyAnimal = 'Blue-Ringed Octopus';

// function handleAnimal() {
//   let deadlyAnimal = 'Scorpionfish';
//   console.log(deadlyAnimal);
// }

// handleAnimal();
// console.log(deadlyAnimal);
