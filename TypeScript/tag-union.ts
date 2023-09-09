{ // tag union === Discriminated Union
interface girl {
  gender: "female";
  name: string;
}
interface boy {
  gender: "male";
  name: string;
}
type person = girl | boy;
function definePerson(data: person) {
  switch (data.gender) {
    case "male":
      return `it's a boy ` + data.name;
    case "female":
      return "it's a girl " + data.name;
  }
}
let br: person = {
  gender: "male",
  name: "tedo",
};
console.log(definePerson(br)); //it's a boy tedo
}
