const o = {
  a: 1,
  b: () => {
    console.log(this); //window
    return this.a;
  },
};
const c = o.b() === 1;
console.log(c);
// difference
const o2 = {
  a: 1,
  b: function () {
    console.log(this); // object
    return this.a;
  },
};
const c2 = o2.b() === 1;
console.log(c2);
