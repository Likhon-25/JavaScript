// Problem 7: Check if a string is a Palindrome

// let str = "madam";
// let reverce = "";

// for (let i = str.length - 1; i >= 0; i--) {
//   let letter = str[i];
//   reverce = reverce + letter;
// }
// console.log(reverce);

// if (str === reverce) {
//   console.log("Palindrome");
// } else{
//     console.log("Not Palindrome");
// }

// WIth FUnction

function isPalindrome(str) {
  let reverce = "";

  for (let i = str.length - 1; i >= 0; i--) {
    let letter = str[i];
    reverce = reverce + letter;
  }
  console.log(reverce);

  if (str === reverce) {
    return true;
  } else {
    return false;
  }
}
console.log(isPalindrome('madam'));
console.log(isPalindrome('Hello'));