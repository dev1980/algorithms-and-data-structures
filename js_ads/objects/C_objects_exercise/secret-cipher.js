// Write a function `secretCipher` that accepts a string and an object as arguments. The function
// should return a new string where characters of the original string are replaced with their
// corresponding values in the object. If a character of the string does not exist as a key of the
// object, then it should be replaced with a question mark (?).

function secretCipher(str, obj){
let newStr = ""
let keys = Object.keys(obj)
for(let i =0; i<str.length; i++) {
let char = str[i]
if(keys.includes(char)) {
newStr += obj[char]
}else {
newStr += "?"
}
}
return newStr;
}

console.log(secretCipher("jello", { j: "r", l: "s", e: "i" })); // 'riss?'
console.log(secretCipher("lantern", { e: "o", l: "p", n: "m", r: "j" })); // 'p?m?ojm'
