const c = f(1, 1);
console.log(c);
function f(a, b) {
  return a * b;
}

// const c2 = f2(1, 1);
// var f2 = function (a, b) {
//   return a * b;
// };//will be an error


const a = [1, 2, 3];
const b = a.push(a);
console.log(b);
