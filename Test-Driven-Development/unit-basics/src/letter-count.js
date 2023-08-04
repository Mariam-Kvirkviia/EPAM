export function getLetterCount(str) {
  let obj = {};
  for (let i of str) {
    if (obj[i]) {
      obj[i] += 1;
    } else {
      obj[i] = 1;
    }
  }
  return obj;
}
