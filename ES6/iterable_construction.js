"use strict";
let salaries = {
  first: 100,
  second: 200,
  third: 300,
  sayhello: function () {
    console.log("Hello!");
  },
};

salaries[Symbol.iterator] = function () {
  return {
    current: this.first,
    last: this.third,
    next() {
      if (this.current < this.last) {
        this.current += 20;
        return { done: false, value: this.current };
      } else {
        return { done: true };
      }
    },
  };
};
for (let el of salaries) {
  console.log(el); //120 140, 160, 180, 200, 220, 240, 260, 280, 300;
}
let iterator = salaries[Symbol.iterator]();
console.log(iterator.next().value); //120
console.log(iterator.next().value); //140
