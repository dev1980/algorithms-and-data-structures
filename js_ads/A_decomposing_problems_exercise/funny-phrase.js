// Write a function `funnyPhrase` that accepts a sentence string as an argument. The function should
// return the sentence where every other word has its vowels repeated twice consecutively.
// Vowels are the letters a, e, i, o, u.

let funnyPhrase = (str) => {
let newArr = []
let arr = str.split(" ");

for(let i = 0; i < arr.length; i++) {
if(i %2 === 0) {
newArr.push(arr[i])
} else {
    let change = doubleChar(arr[i])
    newArr.push(change)
}

}
return newArr.join(" ");
}



let doubleChar = (word) => {
let vowel = "aeiou";
let newChar = ""
for(let i =0; i<word.length; i++) {
let char = word[i]
if(vowel.includes(char)) {
newChar += char + char
} else {
newChar += char
}
}
return newChar;
}

console.log(funnyPhrase("she dreamed of being a runner")); // 'she dreeaameed of beeiing a ruunneer'
console.log(funnyPhrase("park near the stoplight")); // 'park neeaar the stoopliight'
console.log(funnyPhrase("we need many gardeners")); // 'we neeeed many gaardeeneers'