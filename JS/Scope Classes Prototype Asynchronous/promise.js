let getData = new Promise(function (res, rej) {
  // rej("error");
  setTimeout(() => res("100"), 2000);
});
getData
  .then((res) => res)
  .finally(() => console.log("Promise ready"))
  .then(
    (res) => console.log(res), // success
    (err) => console.log(err) // error
  );
// .catch((err) => console.log(err))
// .finally(() => console.log("finally"));

//without arguments
function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

delay(3000).then(() => console.log("runs after 3 seconds"));
//with arguments
function delay(ms) {
  return new Promise((resolve) => setTimeout(() => resolve(34), ms));
}

delay(3000).then((data) => console.log(data));
