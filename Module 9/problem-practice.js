// Task 1 — Print "Hello" Five Times
// Write a for loop that prints "Hello" 5 times.
// Your code here

for (let i = 0; i < 5; i++) {
  // console.log("Hello" , i);
}

// -------------------------------------------------

// Task 2 — Print Numbers 1 to 10
// Write a for loop that prints numbers from 1 to 10.
// // Your code here

for (let a = 1; a <= 10; a++) {
  // console.log('i value : ', a);
}

// --------------------------------------------------

// Task 3 — Countdown with While Loop
// Write a while loop that prints numbers from 10 down to 1.
// // Your code here

let b = 10;
while (b > 1) {
  b--;
  //    console.log(b);
}

// ---------------------------------------------------
// Task 4 — Repeat a Message
// Using a while loop, print "Loop চলছে" exactly 7 times.
// // Your code here

let c = 0;
while (c < 7) {
  // console.log("Loop চলছে");
  c++;
}

// -----------------------------------------------------

// Task 5 — Even Numbers
// Write a for loop that prints all even numbers between 1 and 30.
// // Your code here

for (let i = 2; i <= 30; i += 2) {
  // console.log("Ever Number: ", i);
}

// ------------------------------------------------------

// Task 6 — Sum of Numbers
// Write a for loop that calculates the sum of numbers from 1 to 20 and prints the result.
// // Your code here

let summation = 0;
for (let d = 1; d <= 20; d++) {
  summation = summation + d;
  // console.log(d, '+', summation, '=', d + summation);
}
// console.log(summation);

// --------------------------------------------------------

// Task 7 — Multiplication Table
// Ask the user for a number (or set a variable), then print its multiplication table from 1 to 10 using a for loop. Example: if the number is 7 → 7 x 1 = 7, 7 x 2 = 14, ... 7 x 10 = 70.
// // Your code here

let sub = 7;
for (let e = 1; e <= 10; e++) {
  // console.log(e, '*', sub, '=', e * sub);
}

// --------------------------------------------------------

// Task 8 — Count Down from 20
// Write a for loop that counts down from 20 to 1.
// // Your code here

let f = 20;
while (f >= 1) {
  // console.log(f);
  f--;
}
for (let i = 20; i >= 1; i--) {
  // console.log(i);
}

// --------------------------------------------

// Task 9 — Sum of Even Numbers
// Write a for loop that calculates the sum of all even numbers from 2 to 50.
// // Your code here

let total = 0;
for (let i = 2; i <= 50; i += 2) {
  total = total + i;
  // console.log(i , '+', total, '=', total + 1);
}
// console.log(total);

// --------------------------------------------
// Task 10 — Using Break
// Write a for loop from 1 to 50 that stops completely (break) as soon as it reaches a number greater than 30.
// // Your code here

for (let i = 1; i <= 50; i++) {
  if (i > 30) {
    break;
  }
  // console.log(i);
}

//  -----------------------------------------------

// Task 11 — Using Continue
// Write a for loop from 1 to 20 that skips (continue) any number divisible by 4.
// // Your code here

for (let i = 1; i <= 20; i++) {
  if (i % 4 === 0) {
    continue;
  }
  // console.log(i);
}

// -------------------------------------------------

// Task 12 — Do While Loop — Optional
// Write a do while loop that prints numbers from 1 to 5. Then modify the condition so it is false from the start (for example, i > 10) and observe that the loop still runs once.
// // Your code here

let j = 1;
do {
  // console.log(j);
  j++;
  if (j > 5) {
    break;
  }
} while (j <= 10);

// ------------------------------------

// Task 13 — Comparing Loop Types
// Write the same task — printing numbers 1 to 5 — three times: once using for, once using while, and once using do while. Compare how the code structure differs for each.

// for loop version
for (let i = 1; i <= 5; i++) {
  // console.log(i);
}

// while loop version
let i = 1;
while (i <= 5) {
  // console.log(i);
  i++;
}

// do while loop version
let k = 1;
do {
  // console.log(k);
  k++;
} while (k <= 5);

//  -----------------------------------------------

// Task 14 — Mini Challenge
// Write a program that:
// Loops from 1 to 100.
// Skips (continue) any number divisible by 5.
// Stops (break) completely once it reaches a number greater than 40.
// Prints every number that passes both checks.
// // Your code here

//  no - 2
for (A = 1; A <= 100; A++) {
  if (A % 5 === 0) {
    continue;
  }
  if (A > 40) {
    break;
  }
  console.log(A);
}
