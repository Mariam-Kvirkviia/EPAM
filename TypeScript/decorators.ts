// class MyTodoService {
//   @log
//   setData(data: string) {
//     // console.log(data);
//     console.log(data, 34);
//   }
// }
// function log(target: any, method: any, descriptor: any) {
//   console.log(target);
//   console.log(method);
//   console.log(descriptor);
// }

// let f = new MyTodoService();
// f.setData("first string");
// f.setData("second string");
// console.log(f.name);
class Greeter {
  greeting: string;
  constructor(message: string) {
    this.greeting = message;
  }

  @enumerable
  greet() {
    return "Hello, " + this.greeting;
  }
}

function enumerable(target: any, prop: any) {
  console.log(target);
  console.log(prop);
}

let a = new Greeter("fgg");
a.greet();
