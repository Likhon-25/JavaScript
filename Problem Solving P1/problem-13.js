// Problem 13: Loop thorugh and Object's Propertieis

let monitor ={
    color: "Black",
    brand: "Hp",
    display: 24,
    size: "Something",
    test: "Something"
}
// console.log(monitor["color"]); //braket notation
// console.log(monitor.color); //dot notation

// for loop
for(let key in monitor){
    // console.log(key, ": " , monitor[key]);
}

// Using keys method
let objKey = Object.keys(monitor);
// console.log(objKey);

// for(let i = 0; i < objKey.length; i++){
//     let key = objKey[i];
//     console.log(key , ": ", monitor[key]);
// }



for(let key of objKey){
    console.log(key , ": ", monitor[key]);
}


