let obj = {
  age: (num) => num,
};
function Constructor(name) {
  this.name = name;
}
Constructor.prototype = obj;
let me = new Constructor("Mari");
let f = new Constructor("f");
console.log(me);
console.log(me.age(34));
console.log(f);
function Rabbit() {}
Rabbit.prototype = {
  eats: true
};

let rabbit = new Rabbit();

Rabbit.prototype = {};

alert( rabbit.eats ); // ?