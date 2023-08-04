let mix1 = {
  sayName: function () {
    return "name";
  },
};
let mix2 = {
  greeting: function () {
    return "hello";
  },
};

class G {
  constructor() {
    Object.assign(this, mix1, mix2);
  }
}
let h = new G();
console.log(h.greeting());
console.log(h.sayName());
