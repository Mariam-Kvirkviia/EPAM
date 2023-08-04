let animal = {
  eats: true,
};

function Rabbit(name) {
  this.name = name;
}

Rabbit.prototype = animal;

let rabbit = new Rabbit("White Rabbit"); //  rabbit.__proto__ == animal

console.log(rabbit.eats); // true

function RabbitF() {}
// by default:
// Rabbit.prototype = { constructor: Rabbit }

console.log(RabbitF.prototype.constructor == RabbitF); // true

