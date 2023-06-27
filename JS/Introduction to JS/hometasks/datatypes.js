//1
function backToFront(str, count) {
  if (count <= str.length) {
    let newStr = str.slice(str.length - count, str.length);
    return newStr + str + newStr;
  }
  return str;
}
console.log(backToFront("hello", 1));
console.log(backToFront("abc", 3));
console.log(backToFront("world", 2));
console.log(backToFront("world", 20));
//2
function nearest(near, x, y) {
  let nearX = near > x ? near - x : x - near;
  let nearY = near > y ? near - y : y - near;
  return nearX > nearY ? y : x;
}
console.log(nearest(100, 22, 122));
console.log(nearest(50, 22, 122));
//3 
function removeDuplicate(arr) {
  let setArr = [];
  for (let i of arr) {
    if (!setArr.includes(i)) setArr.push(i);
  }
  return setArr;
}
console.log(removeDuplicate([1, 2, 3, 2, 3, 1, 1]));
console.log(removeDuplicate(["a", 1, "2", "b", 1, "1", "2", "b"]));
