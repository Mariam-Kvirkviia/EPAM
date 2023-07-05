// //old version
// let animal = {
//   eats: "eats",
// };
// let rabbit = {
//   jumps: "jumps",
//   //   __proto__: animal //1 version
// };

// rabbit.__proto__ = animal; //2 version
// console.log(rabbit.__proto__);
// console.log(rabbit.eats);

//new version
let p = {
  name: "Mari",
};
let obj = { age: 23 };

console.log("prototype =>", Object.getPrototypeOf(obj));
Object.setPrototypeOf(obj, p);
console.log("prototype =>", Object.getPrototypeOf(obj));

console.log();
console.log();
