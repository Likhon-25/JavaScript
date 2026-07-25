// // Problem 3 : Factorial of a Number

// Without function

// let number = 5;
// let result = 1;

// for (let i = 1; i <= number; i++) {
  //   console.log("i ==> ", i);
//   result = result * i;
// }
// console.log(result);



// with function
function factorial(number) {
  let result = 1;
  for (let i = 1; i <= number; i++) {
    console.log("i =>", i);
    result = result * i;
  }
  return result;
}

let factorialoffour = factorial(4)
console.log(factorialoffour);
console.log(factorial(5));
