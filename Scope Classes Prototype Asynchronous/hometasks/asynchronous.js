//1
function callback1(data) {
  return data.reduce((acc, el) => acc + el, 0);
}
function callback2(data) {
  return data.reduce((acc, el) => acc * el, 1);
}
function w(s, callback) {
  let arr = [];
  for (let i of s.split(" ")) {
    arr.push(i.length);
  }
  return callback(arr);
}
console.log(callback1([1, 2, 4]));
console.log(callback2([1, 2, 4]));
console.log(w("a bb ccc dddd", callback1)); // result: 10
console.log(w("a bb ccc dddd", callback2)); // result: 24
//2
function mocker(usersData) {
  return function () {
    return new Promise((res, rej) => {
      setTimeout(() => res(usersData), 1000);
    });
  };
}
const getUsers = mocker([{ id: 1, name: "User1" }]);

getUsers().then((users) => {
  // Will fire after 1 second.
  console.log(users); // result: [{id: 1, name: 'User1'}];
});
//3
function summarize1(...promises) {
  return Promise.all(promises).then((data) =>
    data.reduce((acc, el) => acc + el, 0)
  );
}
const promise1 = Promise.resolve(4);
const promise2 = new Promise((resolve) => resolve(2));
summarize1(promise1, promise2).then((sum) => {
  console.log(sum);
}); // result: 6
