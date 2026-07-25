function evenOdd (num){
    if(num % 2 === 0){
        console.log('Even');
        return "even"
    } else{
        console.log('Odd');
        return "odd"
    }
}
evenOdd(5)
evenOdd(10)

const a = 30
const aEvenOdd = evenOdd(a)
console.log(`${a} is a ${aEvenOdd} number`);