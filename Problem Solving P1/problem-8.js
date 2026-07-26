// Problem 8 : Coumt word in  a sentence

// let arr = ["Likhon", "Mondol", "Engineer"]
// console.log(arr.length);

// Without Functiohn
// let str = "Likhon Mondol";
// let length = str.split(" ");
// console.log(length.length);

// console.log(str.split(" "));

// With Function
function wordCount(str) {
  let splitWord = str.split(" ");
  return splitWord.length;
}
let word = wordCount("Md Likhon Mondol");
console.log(word);
console.log(wordCount("Hello Bangladesh I Love your"));
