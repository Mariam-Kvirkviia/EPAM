//MAP
let map = new Map([["zero", 0]]);
map.set("first", 1).set("second", 2);
console.log(map);
console.log(map.get("first"));
console.log(map.get("second"));
console.log(map.size);

for (const [key, value] of map.entries()) {
  console.log(key, "=", value);
}
for (const key of map.keys()) {
  console.log(key);
}
for (const value of map.values()) {
  console.log(value);
}
console.log(...map);
console.log([...map.keys()]);
console.log([...map.entries()]);
let obj = { name: "SSS", age: "23" };
let m = new Map(Object.entries(obj)); 
console.log(m);
let newObj = Object.fromEntries(m); //object from map
console.log(newObj);

console.log("Weakmap");
// //
// const wm = new WeakMap();

// // wm.set("abc", 123); // TypeError
// wm.set({}, 123); // OK
// console.log(wm);

