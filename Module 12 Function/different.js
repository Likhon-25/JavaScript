function doubleOrHalf(price, isDouble) {
  if (isDouble === true) {
    const askingPrice = price * 2;
    return askingPrice;
  } else {
    const askingPrice = price / 2;
    return askingPrice;
  }
}
const myPrice = doubleOrHalf(100, true);
// console.log("Price of Mango People",myPrice);
const leaderPrice = doubleOrHalf(100, false);
// console.log("Price for Leader",leaderPrice);

function firstElementDouble(array) {
  console.log("Got the Parameter value", array);
  const firstElement = array[0];
  const doubled = firstElement * 2;
  return doubled;
}
const number = [11, 34, 5, 78, 99, 87, 85, 67, 43];
const doubled = firstElementDouble(number);
console.log(doubled);
