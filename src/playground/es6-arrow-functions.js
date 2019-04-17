// const square = function(x) {
//   return x * x;
// };
// console.log(square(3));

// // const squareArrow = x => {
// //   return x * x;
// // };

// const squareArrow = x => x * x;

// console.log(squareArrow(4));

// const getFirstName = firstName => {
//   return firstName.split(" ")[0];
// };

const getFirstName = fullName => fullName.split(" ")[1];

console.log(getFirstName("Dev Trix"));
