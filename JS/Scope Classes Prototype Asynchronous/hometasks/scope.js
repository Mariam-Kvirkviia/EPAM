//1
function createCounter(num = 0) {
  let obj = { counter: num };
  return function () {
    let newC = (obj.counter += 1);
    return newC;
  };
}
const counter = createCounter(33);
console.log(counter());
console.log(counter());
console.log(counter());

console.log("----------------------");
//2
function multiply(num1) {
  return function (num2) {
    return function (num3) {
      return num1 * num2 * num3;
    };
  };
}
console.log(multiply(2)(4)(6));
console.log(multiply(3)(3)(3));
