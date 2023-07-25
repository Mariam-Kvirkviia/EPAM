//ES5

// function ServerF(name, ip) {
//   this.name = name;
//   this.ip = ip;
// }

// ServerF.prototype.getUrl = function () {
//   return `https://${this.ip}:80`;
// };

// const awsF = new ServerF("AWS German", "82.21.21.32");
// console.log(awsF.getUrl());
console.log("same");
//ES6
class ServerC {
  constructor(name, ip) {
    this.name = name;
    this.ip = ip;
  }
  getUrl = function () {
    return `https://${this.ip}:80`;
    // };
  };
}
let awsC = new ServerC("AWS German", "82.21.21.32");
console.log(awsC.getUrl());
