// Write a function `wordMap` that accepts a sentence string and an object as arguments. The function
// should return a new sentence where words that exist as keys in the object are replaced with their
// corresponding values.
// Your function must utilize the native Array#map method.

function wordMap(str, obj){
let arr = str.split(" ");
let newSent =arr.map(ele =>{
for(let i in obj) {
if(i === ele){
return obj[i]
}
}
return ele

})


return newSent.join(" ")
}



console.log(wordMap('open the pod bay doors', {pod: 'ship', open: 'close'})); 
// 'close the ship bay doors'

console.log(wordMap('breakfast food is good', {breakfast: 'brunch', good: 'great'})); 
// 'brunch food is great'