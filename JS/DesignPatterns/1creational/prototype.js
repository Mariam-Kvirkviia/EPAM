let car = {
  wheels: 4,

  init() {
    console.log(
      `У меня есть ${this.wheels} колеса, мой владелец ${this.owner}`
    );
  },
};

let instCar = Object.create(car, {
  name: {
    value: "me",
  },
  age: {
    value: "23",
  },
});
console.log(instCar.wheels);
console.log(instCar.age);
console.log(instCar.__proto__ === car);
export default car;
