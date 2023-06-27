var string1 = "This is the longest string ever.";
var string2 = "This is the shortest string ever.";
var string3 = "Is this the thing called Mount Everest?";
var string4 = "This is the Sherman on the Mount.";

var regex = /this/;

let regex1 = /this/i;

let regex2 = /^this/i;

let regex3 = /this$/i;

let regex4 = /ever.$/i;

let regex5 = /ever\.$/i;

let regex6 = /Moun.$/i;

console.log(regex.test(string1));
console.log(regex.test(string2));
console.log(regex.test(string3));
console.log(regex.test(string4));

// More info:
// https://developer.mozilla.org/en-US/docs/JavaScript/Guide/Regular_Expressions
// http://regex.info/book.html
