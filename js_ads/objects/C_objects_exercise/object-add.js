// Write a function `objectAdd` that accepts two objects as arguments. The function should return 
// a new object containing the same keys as the object arguments. If a key is found in both
// objects, its corresponding value should be the sum of the values in the object arguments. If a key 
// is only found in one of the objects, then it's corresponding value should be the same as that one 
// object.

function objectAdd(obj1, obj2) {
let newObj = {}
let keys1 = Object.keys(obj1)
let keys2 = Object.keys(obj2)
let newArr = [...keys1, ...keys2]
for(let i =0; i < newArr.length; i++) {
let k = newArr[i]
if(obj1.hasOwnProperty(k) && obj2.hasOwnProperty(k)){
newObj[k] = obj1[k] + obj2[k]
}else if(obj1.hasOwnProperty(k)){
newObj[k] = obj1[k]
}else {
newObj[k] = obj2[k]
}
}
return newObj
}

let obj1 = { x: 3, y: 10};
let obj2 = { y: 2, x: 1};
console.log(objectAdd(obj1, obj2)); // { x: 4, y: 12 } 

let obj3 = { a: 3, b: 2, c: -1};
let obj4 = { b: 5, c: 1, e: 4};
console.log(objectAdd(obj3, obj4)); // { a: 3, b: 7, c: 0, e: 4 }
