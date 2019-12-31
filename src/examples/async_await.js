const myPromise = () => new Promise((resolve, reject) => {
  setTimeout(() => {resolve('OK')}, 2000);
});

// # then
// myPromise().then(response => {
//   console.log(response);

//   myPromise().then(response => {
//     console.log(response);
    
//       myPromise().then(response => {
//         console.log(response);
//       });
//   });
// });

// # async await
async function runPromisse() {
  const response = await myPromise();
  console.log(response);
  console.log(await myPromise());
  console.log(await myPromise());
}

// # arrow function
// const runPromisse = async () => {
//   const response = await myPromise();
//   console.log(response);
//   console.log(await myPromise());
//   console.log(await myPromise());
// }


runPromisse();