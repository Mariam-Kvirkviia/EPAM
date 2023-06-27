let a = 0;
let b = 3;

switch (a === b) {
  case true: {
    console.log("true");
    break;
  }
  case false: {
    console.log("false");
    break;
  }
  case a > b: {
    console.log("a>b");
    break;
  }
  default: {
    console.log("if any above don't work ");
    break;
  }
}

