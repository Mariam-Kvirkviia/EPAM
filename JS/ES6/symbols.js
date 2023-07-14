let obj = {
  name: "items",
};
obj[Symbol("id")] = 1;

for (let i in obj) console.log(i); //only
console.log(obj);
console.log(obj[Object.getOwnPropertySymbols(obj)[0]]);
