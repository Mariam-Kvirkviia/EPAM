//1
function isValidJSON(str) {
  try {
    JSON.parse(str);
  } catch {
    return false;
  }
  return true;
}

console.log(isValidJSON('{"a": 2}')); // result: true;
console.log(isValidJSON('{"a: 2')); // result: false;
//2
function greeting(data) {
  let { name, surname, age } = data;
  return `Hello, my name is ${name} ${surname} and I am ${age} years old.`;
}
console.log(greeting({ name: "Bill", surname: "Jacobson", age: 33 }));
console.log(greeting({ name: "Jim", surname: "Power", age: 11 }));
//3
function unique(arr) {
  let uniqueArr = [...new Set(arr)];
  return uniqueArr;
}
console.log(unique([1, 1, 2, 3, 5, 4, 5]));
//4
function* generator(arr) {
  for (let i of arr) {
    yield i;
  }
}
const it = generator(["brick", "plate", "minifigure", "slope"]);
console.log(it.next().value); // return 'brick'
console.log(it.next().value); // return 'plate'
