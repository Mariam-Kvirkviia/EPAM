const set = new Set().add("red").add("green").add("blue");

// console.log(set.size);
// console.log(Array.from(set)); // converts into an array
// console.log([...set]);
// console.log(new Set([...set]));
//iteration
// for (let i of set) console.log(i);

set.forEach((value, valueAgain, map) => {
  console.log(value, valueAgain, map);
});
