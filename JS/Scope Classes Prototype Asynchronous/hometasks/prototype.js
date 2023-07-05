function Logger() {
  this.list = [];
  this.log = function (el) {
    this.list.push(el);
  };
  this.getLog = function () {
    return this.list;
  };
  this.clearLog = function () {
    this.list = [];
    return this.list;
  };
}
const logger = new Logger();

console.log();
console.log();
console.log();

logger.log("Event 1");
logger.log("Event 2");
console.log(logger.getLog()); // ['Event 1', 'Event 2']
logger.clearLog();
console.log(logger.getLog()); // []

Array.prototype.shuffle = function () {
  let newArray = [];
  let index = [];
  while (newArray.length !== this.length) {
    let r = Math.floor(Math.random() * this.length);

    if (!index.includes(r)) {
      newArray.push(this[r]);
      index.push(r);
    }
  }

  return newArray;
};
