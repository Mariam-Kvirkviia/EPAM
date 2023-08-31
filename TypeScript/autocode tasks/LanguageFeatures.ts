function times(array: number[], times: number = 2): number[] {
  // implement your solution here

  let copyArray = array.slice();
  while (times > 1) {
    times -= 1;
    copyArray.push(...array);
  }
  return copyArray;
}
console.log(times([1, 2, 3], 3)); 

////


function logger(
  data: string[],
  serviceInfo: { serviceName: string; serviceId: number } = {
    serviceName: "global",
    serviceId: 1,
  }
): Object {
  // implement your solution here
  let id = serviceInfo.serviceId;
  let name = serviceInfo.serviceName;
  let obj: any = {}; //????
  data.forEach((el, index) => {
    obj[`${id}-${index}`] = `[${name}] ${el}`;
  });
  return obj;
}
// {"3-0":"[auth_service] Wrong email","3-1":"[auth_service] Wrong password","3-2":"[auth_service] Success login"}
console.log(
  logger(["Wrong email", "Wrong password", "Success login"], {
    serviceName: "auth_service",
    serviceId: 3,
  })
); 

/////

function everyNth(arr: any, nth = 1) {
  // implement your solution here
  let result = [];
  if (nth === 1) return arr;
  else {
    let notskip = nth - 1;
    while (notskip < arr.length) {
      result.push(arr[notskip]);
      notskip += nth;
    }
  }
  return result;
}

console.log(everyNth([1, 2, 3, 4, 5, 6])); // [1,2,3,4,5,6]
console.log(everyNth([1, 2, 3, 4, 5, 6], 3)); // [3,6]
