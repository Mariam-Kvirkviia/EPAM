//{} makes it local
{
  interface n {
    number: number;
  }
  interface s {
    string: string;
  }

  function selectType(type: n | s) {
    if ("number" in type) {
      return "it's an number type";
    } else {
      return "it's an string type";
    }
  }
  let num: n = {
    number: 34,
  };
  console.log(selectType(num)); //it's an number type
}
