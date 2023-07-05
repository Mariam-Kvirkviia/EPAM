//MAP
console.log();
let map = new Map();
map.set(["first"], 1).set("second", 2);
console.log(map);
console.log(map.get("first"));
console.log(map.get("second"));
console.log(map.size);

console.log({ ...map }); //object

for (const [key, value] of map) {
  console.log(key, "=", value, "///entries");
}
for (const value of map.keys()) {
  console.log(value);
}
for (const value of map.values()) {
  console.log(value);
}
console.log([...map]);
console.log([...map.keys()]);
console.log([...map.values()]);
const map2 = new Map([
  [1, "one"],
  [2, "two"],
  [3, "three"], // trailing comma is ignored
]);
console.log(map2);
let combinedMap = new Map([...map, ...map2]);
console.log(combinedMap);

//Weakmap
const wm = new WeakMap();

// wm.set("abc", 123); // TypeError
wm.set({}, 123); // OK
console.log(wm);
