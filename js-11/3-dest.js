//$          Destructuring arrays            //

const scores = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0];

const [first, second, sajjad, arian, ...rest] = scores;

console.log(sajjad);
console.log(rest);

//$          Destructuring objects            */

const user = {
  email: "zarif@gmail.com",
  password: "asgharTala007",
  firstName: "",
  lastName: "Zarif",
  born: 1950,
  bio: "MJ Zarif supposed people to be Kharrrrr and pretend to release a none releasable dodgy charand",
  tavileh: "khar farz kon",
  akhor: "Iran",
};

const password = user.password;
const { password: pass, born, firstName = "tala", full = "asbkj" } = user;

console.log(pass);
console.log(firstName);
console.log(full);
console.log(user);
//$           Destructuring params            ///

///$ EXAMPLE

const categories = [
  {
    color: "#f3c32c",
    name: "Housing",
    score_out_of_10: 1,
  },
  {
    color: "#f3d630",
    name: "Cost of Living",
    score_out_of_10: 2.618,
  },
  {
    color: "#f4eb33",
    name: "Startups",
    score_out_of_10: 10,
  },
  {
    color: "#d2ed31",
    name: "Venture Capital",
    score_out_of_10: 10,
  },
  {
    color: "#7adc29",
    name: "Travel Connectivity",
    score_out_of_10: 3.6545000000000005,
  },
  {
    color: "#36cc24",
    name: "Commute",
    score_out_of_10: 4.687250000000001,
  },
  {
    color: "#19ad51",
    name: "Business Freedom",
    score_out_of_10: 8.671,
  },
  {
    color: "#0d6999",
    name: "Safety",
    score_out_of_10: 5.7155000000000005,
  },
  {
    color: "#051fa5",
    name: "Healthcare",
    score_out_of_10: 6.448999999999999,
  },
  {
    color: "#150e78",
    name: "Education",
    score_out_of_10: 8.6245,
  },
  {
    color: "#3d14a4",
    name: "Environmental Quality",
    score_out_of_10: 6.4815000000000005,
  },
  {
    color: "#5c14a1",
    name: "Economy",
    score_out_of_10: 6.5145,
  },
  {
    color: "#88149f",
    name: "Taxation",
    score_out_of_10: 4.488,
  },
  {
    color: "#b9117d",
    name: "Internet Access",
    score_out_of_10: 5.605500000000001,
  },
  {
    color: "#d10d54",
    name: "Leisure & Culture",
    score_out_of_10: 9.407,
  },
  {
    color: "#e70c26",
    name: "Tolerance",
    score_out_of_10: 8.012500000000001,
  },
  {
    color: "#f1351b",
    name: "Outdoors",
    score_out_of_10: 7.014,
  },
];

const newArr = categories.filter(({ score_out_of_10 }) => score_out_of_10 >= 9);

console.log(newArr);

// console.log(categories.filter(category => category.score_out_of_10 >= 9))
// console.log(categories.filter(({ score_out_of_10 }) => score_out_of_10 >= 9))

// Rename destructured variables

const obj = {
  newArrr: ["one", "two"],
};

const { newArrr } = obj;

const [firstt] = newArrr;
console.log(firstt);
