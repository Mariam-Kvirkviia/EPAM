let name = "John";
sayHi(); //John
function sayHi() {
  console.log("Hi, " + name);
}
name = "Pete";
sayHi(); //Pete

// let x = 1;

// function func() {
//   console.log(x);
// //  error--> it will search in local lexical environmet-->
// //  ReferenceError: Cannot access 'x' before initialization

//   let x = 2;
// }
// func();

