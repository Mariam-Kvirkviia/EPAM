var animal1 = "monkey";
var animal2 = "bear";
var animal3 = "tiger";

animal1 === "monkey" && animal2 === "bear";
animal1 === "ape" && animal2 === "bear";
animal1 === "ape" && animal2 === "bear" && animal3 === "tiger";
animal1 === "monkey" && animal2 === "bear" && animal3 === "tiger";

animal1 === "monkey" || animal2 === "bear";
animal1 === "ape" || animal2 === "bear";
animal1 === "ape" || animal2 === "ostrich";

animal1 === "monkey" || (animal2 === "monkey" && animal3 === "tiger");
(animal1 === "monkey" || animal2 === "monkey") && animal3 === "tiger";

!true;
!false;

animal1 === "monkey" && animal2 === "bear";
!(animal1 === "monkey" && animal2 === "bear");
animal1 !== "monkey" && animal2 !== "bear";

// More info:
// https://developer.mozilla.org/en-US/docs/JavaScript/Guide/Expressions_and_Operators#Logical_operators
