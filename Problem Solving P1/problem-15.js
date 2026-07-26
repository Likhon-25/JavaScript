// Problem 15: Return All  Even Numbers, Then  Their sum

let arr = [10, 20, 45, 33, 32, 55, 56, 60];

// let evenNumber = [];
// for(let i = 0; i < arr.length; i++){

//     if(arr[i] % 2 === 0){
//         // console.log("The Even Number :", arr[i]);
//         evenNumber.push(arr[i])
//     }
// }
// console.log(evenNumber);

// let sum = 0;
// for(let num of evenNumber){
//     sum += num
// }
// console.log(sum);

function getEvenNumbers(arr) {
  let evenNumbers = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      // console.log(arr[i]);
      evenNumbers.push(arr[i]);
    }
  }
  return evenNumbers;
}

function getSum(arr) {
  let sum = 0;
  for (let key of arr) {
    console.log(key);
    //   sum = sum + key;
    sum += key;
  }

  return sum;
}

let evenNumbers = getEvenNumbers(arr);
let sum = getSum(evenNumbers);
console.log("sum: -> ", sum);
