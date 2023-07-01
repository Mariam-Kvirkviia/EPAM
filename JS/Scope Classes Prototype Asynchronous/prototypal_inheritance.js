// let animal = {
//   eats: true,
// };
// let rabbit = {

//   jumps: true,
// };
//animal is a prototype of rabbit
// rabbit.__proto__ = animal; // sets animal to be the prototype of rabbit.
// console.log(rabbit);
// // we can find both properties in rabbit now:
// console.log(rabbit.eats); // true (**)
// console.log(rabbit.jumps); // true

// Use __proto__ to assign prototypes in a
// way that any property lookup will follow the path:
//  pockets → bed → table → head. For instance, pockets.pen
//  should be 3 (found in table), and bed.glasses should be 1 (found in head).

let head = {
  glasses: 1,
};

let table = {
  pen: 3,
  __proto__: head,
};

let pockets = {
  money: 2000,
  __proto__: table,
};

console.log(pockets.pen);
console.log(table.glasses);
