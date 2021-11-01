// Write a function `lalaLanguage` that accepts a sentence string as an argument. The function should
// return a new sentence where words longer that 3 characters are modified. Modified words should have
// each vowel followed by 'l' and the same vowel repeated again. See the examples.

function lalaLanguage(sent) {
    let arr = sent.split(" ")
    let newArr = []
    for (let i = 0; i < arr.length; i++) {
        let word = arr[i]
        if (word.length > 3) {
            newArr.push(changeWord(word))
        } else {
            newArr.push(word)
        }
    }
    return newArr.join(" ")
}


function changeWord(word) {
    let newWord = ""
    let vowel = "aeiou"
    for (let i = 0; i < word.length; i++) {
        if (!vowel.includes(word[i])) {
            newWord += word[i]
        } else {
            newWord = newWord + word[i] + "l" + word[i]
        }
    }
    return newWord
}


console.log(lalaLanguage('this is pretty strange')); // 'thilis is preletty stralangele'
console.log(lalaLanguage('can you speak our language')); // 'can you spelealak our lalangulualagele'