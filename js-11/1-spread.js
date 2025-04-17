// ABSOLUTELY ESSENTIAL FOR REACT JS
//  find our more https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/max
Math.max(13, 4, 5, 21, 3, 3, 3, 7665, 7, 4, 74, 3, 4, 6, 43); //?
Math.min(13, 4, 5, 21, 3, 3, 3, 7665, 7, 4, 74, 3, 4, 6, 43); //?

const nums = [13, 4, 5, 21, 3, 3, 3, 7665, 7, 4, 74, 3, 4, 6, 43];

Math.min(...nums);

const profile = {
  name: "",
  age: 22,
};

const socialContact = {
  email: "sajjad@gmail.com",
  linkedin: "sajjad@linkedin.com",
};

const fullProfile = {
  ...profile,
  ...socialContact,
};

console.log(fullProfile);

const studentsName = {
  name: "farnoosh",
  newObj: {
    lastName: "bla bla bla",
  },
  fName: "mohammad",
  ffName: "ghazaal",
  ffffName: "mitra",
};

const student = { ...studentsName };

studentsName.newObj.lastName = "yechizi";

// student.fullName="asfaisfjoiaf"
console.log(student);
console.log(studentsName);
