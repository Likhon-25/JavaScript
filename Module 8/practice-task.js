const isRain = true;

if(isRain === true){
    // console.log("Talk an umbrella");
}
// const isRain = false;

// if(isRain === true){
//     console.log("Talk an umbrella");
// }

const stock = 0;
if(stock === 0){
    // console.log("Out of stock");
}

const number = -1;
if(number > 0){
// console.log("It's Positive");
} else{
    // console.log("It's Negative");
}

// -------------------

const year = 2024;

if((year % 4 === 0 && year % 100 == 0) || (year % 400 === 0) ){
    console.log("Leap Year True");
} else{
    console.log("It's Not Leap Year");
}