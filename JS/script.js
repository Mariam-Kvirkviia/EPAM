let arr = [3, 4, 76, 1, 33];

console.log(arr.sort()); // [ 1, 3, 33, 4, 76 ]
let arr2 = ["a", "f", "b", "d"];
console.log(arr.sort((a, b) => a - b)); // ascending
console.log(arr.sort((a, b) => a < b)); // descending

console.log(5 + +"6");
let arr3 = [3, 56, 5, 26, 7, 2, 65];
console.log(arr3.fill(3, 0, -4));
