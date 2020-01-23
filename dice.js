let numOne = 22;
let numTwo = 7;

result = (numOne / numTwo);

//console.log(result.toFixed(2)); //method 1 (fixing)

//let floatReset = result.toFixed(2)

//console.log(Math.floor(floatReset)) //method 2 (flooring)

//console.log(Math.ceil(floatReset)); //method 3 (ceiling)

//console.log(Math.random()) // it gives us random number between 0 and 1
//console.log(Math.random() * 10);

//here is the magic

//let upper = 25;
//let lower = 20;
// 
//myRandom = Math.floor(Math.random() * (upper - lower + 1)) + lower //see carefully
//
//console.log(myRandom);

//now I am making the dice game

let high = 6;
let low  = 1;

let roll = Math.floor(Math.random() * (high - low + 1)) + low; //
console.log(roll);


