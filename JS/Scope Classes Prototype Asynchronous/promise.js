//first example
// {
//   let num = 0; //true false
//   let num2 = 6; //true false
//   let req = new Promise(function (res, rej) {
//     setTimeout(() => {
//       console.log("first");
//       if (num) {
//         res("res");
//       } else {
//         rej("rej");
//       }
//     }, 2000);
//   });
//   req
//     .then((f) => {
//       console.log(f);
//       return new Promise(function (res, rej) {
//         if (num2) {
//           res("res2");
//         } else {
//           rej("rej2");
//         }
//       });
//     })
//     .then((d) => console.log(d))
//     .catch((err) => {
//       console.log(err);
//     });
// }
//second example

