const _ = require("lodash");
const shuffleSeed = require("shuffle-seed");

class UniqueRandomGenerator {
  constructor(inputList, options) {
    this.inputList = inputList;
    this.arrayLength = inputList.length;
    this.options = Object.assign({ seed: "Kappa" }, options);
  }

  shuffleSeedMethod() {
    const result = shuffleSeed.shuffle(this.inputList, this.options.seed);
    return result;
  }

  lodashMethod() {
    const result = _.shuffle(this.inputList);
    return result;
  }

  loopMethod() {
    var randomList = [];
    while (randomList.length < this.arrayLength) {
      var element = Math.floor(Math.random() * this.arrayLength) + 1;
      if (randomList.indexOf(element) === -1) {
        randomList.push(element);
      }
    }
    return randomList;
  }
}

module.exports = UniqueRandomGenerator;
