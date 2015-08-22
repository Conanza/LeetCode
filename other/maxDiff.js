// Write a function that when passed an array of numbers it gives you the max difference
// between the largest and smallest number ONLY if the small number is in front of the large number,
// not behind it, so for example: [3,4,8,1] = 5, notice how the biggest difference is between 8 and 1,
// but because the 1 is after the 8 in the array it shouldn't count, so really the biggest gap is the 3 and the 8.

function maxDiff(array) {
  var maxDifference = 0;
  var currentMin = array[0];
  var currentMax = array[0];

  for (var i = 1; i < array.length; i++) {
    var currentNum = array[i];

    if (currentNum > currentMax) {
      currentMax = currentNum;
      maxDifference = currentMax - currentMin;
    }

    if (currentNum < currentMin) {
      currentMin = currentNum;
      currentMax = currentNum;
    }
  }

  return maxDifference;
}

console.log(maxDiff([3,4,8,1]) === 5);
console.log(maxDiff([3,4,1,8,1]) === 7);
console.log(maxDiff([10,4,8,1]) === 4);
console.log(maxDiff([10,4,1,8,21,20]) === 20);
