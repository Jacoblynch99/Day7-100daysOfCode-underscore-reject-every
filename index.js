const _ = require("underscore")

const numArr = [25, 36, 68, 1275, 9, 165, 237, 20]

const rejectOdds = (num) => {
  return num % 2 != 0
}

const nums = _.reject(numArr, rejectOdds)

console.log(nums)
