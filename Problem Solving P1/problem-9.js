// Problem 9 : Find the largest Number in an Array

// Without function
// let arr = [500, 50, 40, 255, 1000];
// let largest = arr[0];

// for (let i = 1; i < arr.length; i++) {
//   let currentElement = arr[i];
//   if (currentElement > largest) {
//     largest = currentElement;
//   }
//   console.log(currentElement);
// }
// console.log("largest Number", largest);

// With  Function
function largestNumer(arr) {
  let largest = arr[0];

  for (let i = 1; i < arr.length; i++) {
    let currentElement = arr[i];
    if (currentElement > largest) {
      largest = currentElement;
    }
    console.log(currentElement);
  }
  return largest;
}
// console.log("The Largest Number",largestNumer([575,44,56,78,8990,2334,33]));
let number = largestNumer([575, 44, 56, 78, 8990, 2334, 33]);
console.log("The Largest Number", number);
