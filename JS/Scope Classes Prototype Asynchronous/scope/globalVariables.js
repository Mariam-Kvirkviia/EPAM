// "use strict";

const warrior = {
  name: "Jujin Take",
  type: "Ninja",
  weapon: "Shuriken",
  agility: 79,
}; // this is globally scoped

// globally scoped
const screamWarrior = () => {
  let warrior2 = "Samurai";

  warrior3 = "Viking"; //global
  return {
    shootWarrior: () => {
      return console.log(warrior, warrior2, warrior3);
    },
  };
};

const newWarrior = screamWarrior();

newWarrior.shootWarrior();

console.log(warrior, warrior3);
