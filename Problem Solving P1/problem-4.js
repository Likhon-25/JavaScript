// problem 4: FizzBuzz (1 to N)
// Loop though numbers from 1 ot N. If a number is divisible by 3, print "Fizz"; if divisible by 5, print, "Buzz"; if dibisible by both, print "FizzBuzz"; otherwise print the number itself.

// Without function
// let number = 15;
// for (let i = 1; i <= number; i++) {
//   console.log("I ==", i);
//   if (i % 3 === 0 && i % 5 === 0) {
//     console.log("FizzBuzz");
//   } else if (i % 3 === 0) {
//     console.log("Fizz");
//   } else if (i % 5 === 0) {
//     console.log("Buzz");
//   } else {
//     console.log(i);
//   }
// }

// With Function
function FizzBuzz(number) {
  for (let i = 1; i <= number; i++) {
    console.log("I ==", i);
    if (i % 3 === 0 && i % 5 === 0) {
      console.log("FizzBuzz");
    } else if (i % 3 === 0) {
      console.log("Fizz");
    } else if (i % 5 === 0) {
      console.log("Buzz");
    } else {
      console.log(i);
    }
  }
}
FizzBuzz(15)
