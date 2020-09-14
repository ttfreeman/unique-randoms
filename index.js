const UniqueRandomGenerator = require("./unique-random-generator");

// A function that creates an array of successive inetegers between min and max numbers inclusive
const createList = (minN, maxN) => {
  var list = [];
  for (var i = minN; i <= maxN; i++) {
    list.push(i);
  }
  return list;
};

let myList = createList(1, 10000);

// console.log(myList);

// Create a new insatnce of the unique-random-generator class based on our array and input parameters
const uniqueRandomGenerator = new UniqueRandomGenerator(myList, {
  seed: "whatever" //  seed for shuffle-seed
});

console.time("lodash");
const lodashResult = uniqueRandomGenerator.lodashMethod();
// console.log("lodash output: ", lodashResult);
console.timeEnd("lodash");

console.time("shuffle-seed");
const shuffleSeedResult = uniqueRandomGenerator.shuffleSeedMethod();
// console.log("shuffle-seed output", shuffleSeedResult);
console.timeEnd("shuffle-seed");

console.time("loop");
const loopResult = uniqueRandomGenerator.loopMethod();
// console.log("loop method output", loopResult);
console.timeEnd("loop");
