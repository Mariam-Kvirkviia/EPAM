let str = "hello JS world";
console.log(str.startsWith("he"));
console.log(str.endsWith("he"));
console.log(str.includes("js"));
console.log(str.includes("JS"));
console.log(str.search("l"));
console.log(str.repeat("3")); //will work
// ARRAY
// {
//   let arr = [3, 4, 76, 1, 33];
//   console.log(arr.sort()); // [ 1, 3, 33, 4, 76 ]
//   let arr2 = ["a", "f", "b", "d"];
//   console.log(arr.sort((a, b) => a - b)); // ascending
//   console.log(arr.sort((a, b) => a < b)); // descending
//   console.log(5 + +"6");
//   let arr3 = [3, 56, 5, 26, 7, 2, 65];
//   console.log(arr3.fill(3, 0, -4));
//   let f = [[3], 4, [[[[6]]]]];
//   console.log(f.flat(3));
//   console.log(f);
// }

//OBJECT
// {
//   let obj = { first: 1, second: 2, third: 3 };
//   let { first, second: changed, third, f: changed2 = 4 } = obj;
//   console.log(first, changed, third, changed2); // 1 2 3 4
// }

//sorting
// let arr = ["A", "a", "B", "b"];
// console.log(arr.sort());"A", "B", "a", "b"; // by unicode ! defualt
// console.log(arr.sort((a, b) => a - b));"A", "a", "B", "b"; //by alphabet

//unicode
// let a = "abc";
// console.log(a.charCodeAt(1));
// console.log(String.fromCharCode(75));
