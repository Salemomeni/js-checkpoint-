// for reversing a string.
import { reversedString , countString, Capfirst } from "./stringManipulation.js";
import { MaxandMin, sumOfArr , filterArray } from "./mathimaticalFunction.js";
import { factorial , prime , fibonacci } from "./arrayFunction.js";
let reverse = reversedString("salem");
console.log(reverse);
// for counting strings 
let result = countString("Omeni Salem");
console.log(`the characters in the following string is : ${result}`);
// to cap the first letter
let cap  = Capfirst("salem")
console.log(cap)
// to find the max and min of an array
let value = MaxandMin([1,3,5,7,8,9,-3])
console.log(value);

// to find the sum of the number in an array.
let sum = sumOfArr([1,2,3,14]);
console.log(sum)
// to filter array in a function and find the 
let filter = filterArray([1,2,4,5,6,7,8,9,10]);
console.log (filter);
// to calculate factorial 
let fact = factorial(6)
console.log(fact);
// to check if a number is a prime number

let primeNumber = prime(4);
console.log(primeNumber);

//  generate the Fibonacci sequence up to a given number of terms

let x = fibonacci([1]);
console.log(x);
