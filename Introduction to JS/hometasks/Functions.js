//1
function nThNoRepeatedValue(arr, index) {
  let uniqueValue = [];

  for (let i of arr) {
    if (arr.indexOf(i) === arr.lastIndexOf(i)) uniqueValue.push(i);
  }
  return uniqueValue[index - 1];
}
console.log(nThNoRepeatedValue([321, 43, 3213, 1689], 2));
console.log(nThNoRepeatedValue([1, 1, 3, 4, 3, 10], 1));
console.log(nThNoRepeatedValue([1, 2, 1, 1], 1));
console.log("----------------------------------------");
//2
const isPrime = (num) => {
  for (let i = 2, s = Math.sqrt(num); i <= s; i++) {
    if (num % i === 0) return false;
  }
  return num > 1;
};
function primeValues(arr) {
  let newArr = [];
  for (let i of arr) {
    let result = isPrime(i);
    newArr.push(result);
  }
  return newArr;
}

console.log(primeValues([4, 2, 7, 10, 13]));
console.log(primeValues([17, 3, 21]));
