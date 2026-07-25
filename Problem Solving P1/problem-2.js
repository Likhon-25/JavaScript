//  Problem 2 : Sum of a Range of Number ( 1 to N)
let number = 7;
let sum = 0;

// Without Function
for (let i = 0; i <= 7; i++) {
  sum = sum + i;
//   console.log("i ==>", sum);
}

// With Function
function sumRange(number) {
  let sum = 0;
  for (let i = 0; i <= 7; i++) {
    sum = sum + i;
  }
  return sum;
}
console.log(sumRange(7));
