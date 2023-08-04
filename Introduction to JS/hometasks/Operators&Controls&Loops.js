//1
function arrayDiff(arr1, arr2) {
  let arrDiff = [];
  for (let i of arr1) {
    if (!arr2.includes(i) && !arrDiff.includes(i)) arrDiff.push(i);
  }
  for (let i of arr2) {
    if (!arr1.includes(i) && !arrDiff.includes(i)) arrDiff.push(i);
  }
  return arrDiff;
}
console.log(arrayDiff([1, 2, 3], [1, 2, 3, 4, 5]));
console.log(arrayDiff(["a", "b", "c"], ["a", "b"]));
console.log("----------------------------------------");
//2
function evenOrOdd(numStart, numEnd) {
  let arr = [];
  for (let i = numStart; i <= numEnd; i++) {
    if (i % 2 === 0) arr.push(`${i} is even`);
    else arr.push(`${i} is odd`);
  }
  return arr;
}
console.log(evenOrOdd(0, 3));
console.log(evenOrOdd(2, 4));
console.log("----------------------------------------");
//3
function rangeSum(num1, num2) {
  let total = 0;
  for (
    let i = num1 < num2 ? num1 : num2;
    i <= (num1 > num2 ? num1 : num2);
    i++
  ) {
    total += i;
  }
  return total;
}
console.log(rangeSum(5, 10));
console.log(rangeSum(0, 6));
