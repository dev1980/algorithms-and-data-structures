// Write a function `mostCommonLetter` that accepts a string as an argument. The function should return
// the character that appears most frequently in the string. You can assume that there are no ties.

function mostCommonLetter(str) {
let obj = {}
let arr = []
for(let i =0; i< str.length; i++) {
let char = str[i]
if(obj.hasOwnProperty(char)){
obj[char] += 1
}else {
obj[char] = 1
}
}

for(k in obj) {
arr.push([k, obj[k]])
}

let result = arr.sort(compareFunction)

let key = result[result.length-1]
return key[0]
}


function compareFunction(a, b) {
return a[1] - b[1]
}

console.log(mostCommonLetter("building")); // 'i'
console.log(mostCommonLetter("shoesthrings")); // 's'
console.log(mostCommonLetter("preparedness")); // 'e'