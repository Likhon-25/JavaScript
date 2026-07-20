let num = [1, 2, 3];
// ------------------------
let length = num.length;
// console.log(length);
// console.log(num[0], num[2]);
// ------------------------

// num[1] = 5;
// num.push(6)
// console.log(num);
// ------------------------

// let pot = num.pop();
// console.log(num);
// console.log(pot);
// ---------------------------
// num.unshift(5);
// console.log(num);
// ------------------------
// let shift = num.shift();
// console.log(num);
// console.log(shift);

// ------------------------

let fint = num.includes(5);
// console.log(fint);
// ------------------------

let location = num.indexOf(3);
// console.log(location);

// 11. Loop through the array with a for loop and log each item.

let numbers = [1, 2, 3, 4, 5, 6];
for (let i = 0; i < numbers.length; i++) {
  // console.log(numbers[i]);
}

// 12. Loop through the array with a while loop and log each item.
let i = 0;
while (i < numbers.length) {
  console.log(numbers[i]);
  i++;
}
