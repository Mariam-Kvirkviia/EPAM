"use strict";
let user = {
  name: "Alex",
  surname: "Smith",
  birthday: "20/04/1993",
  showMyPublicData: function () {
    console.log(`${this.name} ${this.surname}`);
  },
};

console.log(user);
console.log(Object.getOwnPropertyDescriptor(user, "name"));
Object.defineProperty(user, "name", { writable: false });
Object.defineProperty(user, "gender", { value: "female" });
console.log(Object.getOwnPropertyDescriptor(user, "gender")); //Object { value: "female", writable: false, enumerable: false, configurable: false }

for (let i in user) console.log(i);
console.log("-----------change the property");
Object.defineProperty(user, "showMyPublicData", { enumerable: false });
for (let i in user) console.log(i);
Object.defineProperties(user, {
  gender: { value: "female" },
});
