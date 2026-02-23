// function getData(dataId, getNextData) {
//   setTimeout(() => {
//     console.log("data", dataId);
//     if (getNextData) {
//       getNextData();
//     }
//   }, 2000);
// }

// This is callback hell == Nested callback stacked below one another forming a pyramid structure.

// getData(1, () => {
//   console.log("getting data2...");
//   getData(2, () => {
//     console.log("getting data3...");
//     getData(3, () => {
//       console.log("getting data4...");
//       getData(4);
//     });
//   });
// });
