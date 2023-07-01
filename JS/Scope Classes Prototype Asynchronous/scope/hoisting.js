// “var” variables can be declared below their use
// function sayHi() {
//   phrase = "Hello";

//   console.log(phrase); //Hello

//   var phrase;
// }
// sayHi();

//Declarations are hoisted, but assignments are not→
function sayHi() {
  console.log(phrase); //undefined

  var phrase = "Hello";
}

sayHi();
