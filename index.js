const _ = require("underscore")

const numArr = [25, 36, 68, 1275, 9, 165, 237, 20]

const odds = (num) => {
  return num % 2 != 0
}

const everythingPasses = (num) => {
  return typeof num === "number"
}

const nums = _.reject(numArr, odds) // this finds and removes all specified elements and return what is left in the array. Essentially this is the opposite of the find function

const bool = _.every(numArr, everythingPasses) // returns true only if every element on an array passes true from the specified function. Goes through the array until it hits an element that does not meet the functions requirements.

console.log(nums)
console.log(bool)
