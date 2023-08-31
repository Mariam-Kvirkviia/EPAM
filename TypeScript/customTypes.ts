// interface
interface Todos {
  name: string;
  completed?: boolean;
  func(a: number, b: number): number;
}
let todo12334: Todos = {
  name: "Pick up drycleaning",
  func: (a, b) => a + b,
};
todo12334.func(3, 4);

// enums
enum TodoState {
  New2, //0
  Active2, //1
  Complete2 = 45, //2
  Deleted2, //3
}
console.log(TodoState.New2); //0
console.log(TodoState.Deleted2); //Deleted2
