const isRain = true;

if (isRain === true) {
  // console.log("Talk an umbrella");
}
// const isRain = false;

// if(isRain === true){
//     console.log("Talk an umbrella");
// }

const stock = 0;
if (stock === 0) {
  // console.log("Out of stock");
}

const number = -1;
if (number > 0) {
  // console.log("It's Positive");
} else {
  // console.log("It's Negative");
}

// -------------------

const year = 2024;

if ((year % 4 === 0 && year % 100 == 0) || year % 400 === 0) {
  // console.log("Leap Year True");
} else {
  // console.log("It's Not Leap Year");
}

//---------------------

const speed = 80;

if (speed > 70) {
  // console.log("Overspeed");
} else {
  // console.log("Norlam Speed");
}

// ---------------

// const age = 20;
// const hasTicket = true;

// if (age > 18 && hasTicket === true) {
  // console.log("allowed");
// }

// --------------------

const isWickend = true;
const isHoliday = true;

if (isWickend || isHoliday) {
  //   console.log("No Work Today");
}

// -----------------

const userName = "Likhon Mondol";
const password = 12345;

if (userName === "Likhon Mondol" && password === 12345) {
  // console.log("Login Success fully");
}

// -------BMI ------------

const BMI = 16.5;

if (BMI < 18.5) {
  // console.log("Underweight");
} else if (BMI < 25) {
  // console.log("Normal");
} else if (BMI < 30) {
  // console.log("Overweight");
} else {
  // console.log("Obese");
}

// -----------------

const month = 7;

if (month === 12 || month === 1 || month === 2) {
  // console.log("Winter");
} else if (month === 3 || month === 4 || month === 5) {
  // console.log("Summer");
} else if (month === 6 || month === 7 || month === 8) {
  // console.log("Borshakal");
} else {
  // console.log("Shorotkal");
}

// -----------------------------------

const age = 17;
const hasIdCard = false;

if (age >= 18) {
  if (hasIdCard === true) {
    // console.log("your eligable for vote");
  } else {
    // console.log("you need id to vote");
  }
} else {
  // console.log("Youre so young");
}

// --------------------

const isLoggedIn = true;
const isAdmin = true;

if(isLoggedIn === true){
  if(isAdmin === true){
    // console.log("Admin Dashboard");
  } else{
    // console.log("User Dashboard");
  }
} else{
  // console.log("Please Login");
}

// -------------
const num = 2;

const result = (num % 2 === 0) ? "Even" : "Odd";
// console.log(result);

// ----
const boyos = 20;
const isAdult = (boyos >= 18) ? "Adult" : "Child";
console.log(isAdult);
