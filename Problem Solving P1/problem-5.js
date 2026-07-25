// problme 5 :  Reverse a String

// Without Function

// let str = "I love Bangladesh";
// let reverseWord = "";

// for (let i = str.length - 1; i >= 0; i--) {
//   let letter = str[i];
//   reverseWord = reverseWord + letter;
//   console.log("I ==", i, str[i]);
// }
// console.log(reverseWord);

// With FUnction
function reverseWord(word) {
  let reverseWord = "";

  for (let i = word.length - 1; i >= 0; i--) {
    let letter = word[i];
    console.log("I ==", i, letter);
    reverseWord = reverseWord + letter;
  }
  return reverseWord;
}

console.log(reverseWord("Hello Bangladesh"));
console.log(reverseWord("I Love Bangladesh"));

