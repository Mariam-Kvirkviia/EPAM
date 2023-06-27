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
  let old = JSON.parse(JSON.stringify(this));
  let result = this.sort((a, b) => 0.5 - Math.random());
  console.log(result, old);
  return result;
};

console.log([1, 2, 3, 4].shuffle()); // result: some random shuffling ex: [2,3,4,1]
console.log(["a", "b", "c"].shuffle()); // result: some random shuffling ex: ['c', 'b', 'a']
