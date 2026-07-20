// 1. Combine two arrays into one new array. Log the result.

// let name = ["likhon", "Najmul", "Hamim"];
// let dept = ["CSE", "MT", "EEE"];

// let join = name.concat(dept);
// console.log(join);


// 2. Take a portion of an array (not the whole thing) without changing the original. Log the result.
let name = ["likhon", "Najmul", "Hamim"];

let slice = name.slice(0, 2);
// console.log(slice);


// 2. Take a portion of an array (not the whole thing) without changing the original. Log the result.
let dept = ["cse", "eee", "mt", "et"];
let slicedept = dept.slice(0,  3);
// console.log(slicedept);

// 3. Turn an array of words into a single sentence string.
// Expected: a string like "word word word"

let alphabet = ['abc', 'def', 'ghi']
let join = alphabet.join(" ")
// console.log(join);

// 4. Check two variables (one array, one not) and log whether each is an array.
let fruit = ["Mang0", "Guava", "Woodapple"]
let flower = "Lily"
console.log(Array.isArray(fruit));
console.log(Array.isArray(flower));