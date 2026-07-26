// Problem 11: Sum and Average of an Array

// Without Function
// let arr = [2,3,4,5,7,8]
// let sum = 0;

// for(let i = 0;  i < arr.length; i++){
//     console.log(arr[i]);
//     sum += arr[i];
// }
// console.log(sum);
// let avg = sum / arr.length
// console.log(avg);



// With Functon
function average(arr) {
  let sum = 0;

  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  console.log("Total Sum", sum);

  let avg = sum / arr.length;
  return avg;
}

console.log("Total Average", average([2, 3, 4, 5]));
console.log("Total Average", average([55,66,77,88,]));
