// Problem 12 : Filture Numbers Greater Than a Value


// WIthout Function
// let arr = [10, 20, 30, 35, 40, 47, 49, 50, 55, 52, 60];
// let Value = 40;

// let filterArray = [];

// for (let i = 0; i < arr.length; i++) {
//   console.log(arr[i]);
//   if (arr[i] > Value) {
//     filterArray.push(arr[i]);
//   }
// }
// console.log(filterArray);


// With funciton
function filterArray(arr, Value) {
  let filterArray = [];

  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
    if (arr[i] > Value) {
      filterArray.push(arr[i]);
    }
  }
  return filterArray;
}
console.log(filterArray([10, 20, 30, 35, 40, 47, 49, 50, 55, 52, 60], 50));
