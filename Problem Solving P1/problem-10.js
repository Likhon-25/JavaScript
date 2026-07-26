// Problem 10 : Find the smallest Number in an Array

// With  Function
function samllestNumber(arr) {
  let smallest = arr[0];

  for (let i = 1; i < arr.length; i++) {
    let currentElement = arr[i];
    if (currentElement < smallest) {
      smallest = currentElement;
    }
    console.log(currentElement);
  }
  return smallest;
}
// console.log("The Largest Number",largestNumer([575,44,56,78,8990,2334,33]));
let number = samllestNumber([575, 44, 56, 78, 8990, 2334, 33]);
console.log("The Samllest Number", number);
