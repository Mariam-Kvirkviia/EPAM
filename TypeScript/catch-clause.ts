//Catch clause
let dots = "...";
try {
  JSON.parse(dots);
} catch {
  console.log("it's an error");
}
