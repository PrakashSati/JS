const getPromise = () => {
  new Promise((resolve, reject) => {
    console.log("promise created");
    resolve("success");
  });
};

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
