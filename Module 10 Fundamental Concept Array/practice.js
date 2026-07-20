let number = [12, 23, 43, 35, 78];
let sum = 0;

for (let i = 0; i < number.length; i++) {
  sum = sum + number[i];
}
console.log(sum);

// ----------------------

let max = number[0];
for (let i = 1; i < number.length; i++) {
  if (number[i] > max) {
    max = number[1];
  }
}
console.log(max);

// ------------------------------

for (let i = 0; i < number.length; i++) {
  if (number[i] % 2 === 0) {
    console.log(number[i]);
  }
}

// ------------------------------

let fruit = ["apple", "mango", "orange"];
for(let i = 0; i < fruit.length; i++){
    // console.log(fruit[i]);
}

// -------------


let colors = ["Red", "Green", "Blue"];

let i = 0;

while (i < colors.length) {
    console.log(colors[i]);
    i++;
}

