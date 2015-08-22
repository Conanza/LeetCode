// Count the number of prime numbers less than a non-negative number, n.
/**
 * @param {number} n
 * @return {number}
 */
var countPrimes = function(n) {
  var primeCache = {};
  for (var i = 0; i < n; i++) {
    primeCache[i] = true;
  }

  for (var i = 2; i * i < n; i++) {
    for (var j = i * i; j < n; j += i) {
      primeCache[j] = false;
    }
  }

  var count = 0;
  for (var k = 2; k < n; k++) {
    if (primeCache[k]) count++;
  }

  return count;
};


console.log(countPrimes(3) === 1);
console.log(countPrimes(5) === 2);
console.log(countPrimes(6) === 3);
