// async function hello() {
//   console.log("hello");
// }

// function api() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log("weather data");
//       resolve(200);
//     }, 2000);
//   });
// }

// async function getWeatherData() {
//   await api();
// }

function getData(dataId) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("data", dataId);
      resolve("success");
    }, 2000);
  });
}

// async function getAllData() {
//   console.log("Data1....");
//   await getData(1);
//   console.log("Data2....");
//   await getData(2);
//   console.log("Data3....");
//   await getData(3);
//   console.log("success");
// }

// IIFE == It is used for immediately run function without calling it. It is used only one time.

(async function () {
  console.log("Data1....");
  await getData(1);
  console.log("Data2....");
  await getData(2);
  console.log("Data3....");
  await getData(3);
  console.log("success");
})();
