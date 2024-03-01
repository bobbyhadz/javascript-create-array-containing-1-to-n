// EXAMPLE 1 - Create an Array containing 1 to N numbers using Array.from()

const total = 5;

const arr = Array.from({length: total}, (_, index) => index + 1);
console.log(arr); // 👉️ [1, 2, 3, 4, 5]

// ------------------------------------------------------------------

// // EXAMPLE 2 - Creating an array from 0 to N with the use of keys()

// const arr = Array.from(Array(8).keys());

// // [
// //   0, 1, 2, 3,
// //   4, 5, 6, 7
// // ]
// console.log(arr);

// ------------------------------------------------------------------

// // EXAMPLE 3 - Create an Array containing 1 to N numbers using the spread syntax (...)

// const n = 5;

// const array = [...Array(n + 1).keys()].slice(1);
// console.log(array); // 👉️ [ 1, 2, 3, 4, 5 ]

// ------------------------------------------------------------------

// // EXAMPLE 4 - Create an Array containing 1 to N numbers using a `for` loop

// const arr = [];

// const total = 5;

// for (let i = 1; i <= total; i++) {
//   arr.push(i);
// }

// console.log(arr); // 👉️ [1, 2, 3, 4, 5]

// ------------------------------------------------------------------

// // EXAMPLE 5 - Create an Array containing 1 to N numbers using `lodash`

// import _ from 'lodash';

// console.log(_.range(5)); // 👉️ [ 0, 1, 2, 3, 4 ]

// console.log(_.range(1, 5)); // 👉️ [ 1, 2, 3, 4 ]

// console.log(_.range(1, 6, 2)); // 👉️ [ 1, 3, 5 ]
