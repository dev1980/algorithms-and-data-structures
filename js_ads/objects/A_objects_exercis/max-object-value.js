// Write a function `maxObjectValue` that accepts an object as an argument. Write a function that
// returns an array containing the key, value pair for the largest value within the object. You can
// assume that all values are numbers and there are no ties.

function maxObjectValue(obj) {
let arr = []
for(let k in obj){

arr.push([k, obj[k]])
}
console.log(arr)
arr.sort(compareFunction);
console.log(arr)
return arr[arr.length-1]
}

function compareFunction(a, b) {
return a[1]-b[1]
}
console.log(maxObjectValue({ a: 5, b: 2, c: 6, d: 7, e: 4 })); // ['d', 7]
console.log(maxObjectValue({ lychee: 11, rambutan: 13, papaya: 9 })); // ['rambutan', 13]