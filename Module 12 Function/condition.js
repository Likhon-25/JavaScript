function checkAge( age){
    if(age >= 18 ){
        return "Adult"
    } else{
        return "Minor"
    }
}
let myAge = checkAge(20);
// console.log(myAge);
// console.log(checkAge(20));
// console.log(checkAge(10));


// Even Number Check
function isEven(number){
    if(number % 2 === 0){
        return true;
    }
    return false
}
// console.log(isEven(5));
// console.log(isEven(4));

// Odd Number Check
function idOdd(num){
    if(num % 2 === 1){
        return true;
    }
    return false
}
// console.log(idOdd(4));
// console.log(idOdd(5));


function checkNumber (number){
    if(number % 2 === 0){
        return "Even"
    } 
    return "Odd"
}

// console.log(checkNumber(10));
// console.log(checkNumber(11));

// ------------------ OR -----------------------

function IsEven(num){
    return num % 2 === 0 ;
}
// console.log(IsEven(66));
// console.log(IsEven(63));

function check (num){
    if (num > 0){
        return "Positive"
    }
    return "Negative"
}
// console.log(check(8));
// console.log(check(-5));

function isGratter(num){
    if(num > 100){
        return true
    }
    return false
}
console.log(isGratter(101));