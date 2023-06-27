// //1 ---> figure out
// function numberOfDuplicates(arr) {
//   let obj = {};
//   let newArr = [];
//   for (let i of arr) {
//     console.log(typeof i);
//     if (!obj[i]) {
//       obj[i] = 1;
//     } else obj[i] += 1;
//     newArr.push(obj[i]);
//   }
//   return newArr;
// }
// console.log(numberOfDuplicates([1, 2, 1, 1, 3]));
// console.log(numberOfDuplicates(["a", "a", "aa", "a", "aa"]));
// console.log(numberOfDuplicates([1, -3, -3]));
// //2  i don't get it

function countObjectStrength(obj) {
  let specificity = {
    undefined: 0,
    boolean: 1,
    number: 2,
    string: 3,
    object: 5,
    function: 7,
    bigint: 9,
    symbol: 10,
  };
  let arr = Object.getOwnPropertyNames(obj);
  let total = 0;
  for (let i of arr) {
    if (i !== "includes" && i !== "findLastIndex") {
      let type = typeof obj[i];

      if (specificity[type]) total += specificity[type];
    }
  }

  return total;
}
console.log(countObjectStrength(Array));
console.log(countObjectStrength(Array.prototype));
console.log(countObjectStrength([]));
console.log(countObjectStrength({ some: "value" }));
