// Problem 6: Count Vowel in  a string

// Without functin
// let str = "Programming Herooo";
// let Vowel =  'a,e,i,o,u'

// let count = 0;

// for(let i = 0; i < str.length; i++){
//     let letter = str[i];
//     console.log("i => letter =>>>", i , letter);
//     if(Vowel.includes(letter)){
//         console.log("Vowel");
//         count++;
//     }
// }
// console.log(count);


// With function
function countVowel(str) {
  let Vowel = "aeiouAEIOU";
  let count = 0;

  for (let i = 0; i < str.length; i++) {
    let letter = str[i];
    console.log("i => letter =>>>", i, letter);
    if (Vowel.includes(letter)) {
      console.log("Vowel");
      count++;
    }
  }
  return count;
}

let findVowel = countVowel("Programming Herooooo");
console.log(findVowel);
