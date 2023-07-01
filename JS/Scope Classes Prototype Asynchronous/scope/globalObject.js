//variables
var gl = 5;
console.log(window.gl); //5
let l = 34;
console.log(window.l); //undefined

//functions
let f = function () {};
console.log(window.f); //undefined
let fV = function () {};
console.log(window.fV); //will work
function glF() {}
console.log(window.glF); //points at the function
