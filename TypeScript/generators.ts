function* generatorF() {
  yield "first";
  yield "second";
  yield "third";
}

for (let value of generatorF()) {
  console.log(value); // first , second ,third
}
