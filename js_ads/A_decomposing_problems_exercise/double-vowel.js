// Write a function `doubleVowel` that accepts a string as an argument. The function should return
// the string where every occurrence of a vowel in the original string is repeated twice consecutively.
// Vowels are the letters a, e, i, o, u.

let doubleVowel = (str) => {
let Vowels = "aeiou"
let newStr = ""
for(let i = 0; i < str.length; i++){
    let char = str[i];
if(Vowels.includes(char)) {
newStr += repeatVowels(char)
} else {
newStr += char
}
}

return newStr;
}

function repeatVowels(char) {
return char+char
}

console.log(doubleVowel("runner")); // 'ruunneer'
console.log(doubleVowel("stoplight")); // 'stoopliight'
console.log(doubleVowel("gardener")); // 'gaardeeneer'