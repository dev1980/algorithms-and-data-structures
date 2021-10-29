// Write a function `pickPrimes` that accepts an array of numbers as an argument. The function should
// return an array containing only the prime numbers. A prime number is a number that is
// only divisible by 1 and itself. The smallest prime number is 1.

let pickPrimes = (arr) => {
let primeArr = []

for(let i =0; i < arr.length; i++){
let check = isPrime(arr[i])
    if(check) {
    primeArr.push(arr[i])
}
}
return primeArr
}

let isPrime = (num) => {
if (num < 2) {
return false
}

for(let i = 2; i < num; i++) {
if(num % i === 0) {
return false // nothing should divide the number
}
}
return true; // its little tricky, we have undestant that only the number is prime if it only divide by 1 or itself.

}

console.log(pickPrimes([12, 3, 7, 18, 11])); // [3, 7, 11]
console.log(pickPrimes([17, 23, 9, 42])); // [17, 23]
console.log(pickPrimes([4, 2048, 100, 55])); // []