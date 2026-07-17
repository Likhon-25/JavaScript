for(i = 1; i <= 100; i++){
    if(i > 5){
        break
    }
    // console.log(i);
}

let count = 4;
while(count < 10){
    if(count > 4){
        console.log("tor sata break");
        break
    }
    console.log('value of count : ' , count);
    count++
}