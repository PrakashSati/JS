// const getPromise = () => {
//   return new Promise((resolve, reject) => {
//     console.log("I am a promise created");
//     resolve("==> success");
//     reject("==> failed");
//   });
// };

// let promise = getPromise();
// promise.then((res) => {
//   console.log("promise fulfilled", res);
// });

// promise.catch((err) => {
//   console.log("promise rejected", err);
// });

// function getData(dataId, getNextData) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log("data", dataId);
//       resolve("success");
//       if (getNextData) {
//         getNextData();
//       }
//     }, 5000);
//   });
// }

// Promise Chain...

// function asyncFunc1() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log("Some Data1");
//       resolve("success");
//     }, 4000);
//   });
// }

// function asyncFunc2() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log("Some Data2");
//       resolve("success");
//     }, 4000);
//   });
// }

// console.log("fetching data1...");
// asyncFunc1().then((res) => {
//   console.log("fetching data2...");
//   asyncFunc2().then((res) => {});
// });

// function getData(dataId, getNextData) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log("data", dataId);
//       resolve("success");
//     }, 2000);
//   });
// }

// // Promises Chain...

// getData(1)
//   .then(() => {
//     return getData(2);
//   })
//   .then(() => {
//     return getData(3);
//   })
//   .then(() => {
//     console.log("success");
//   });
