// Write a function `censorSentence(sentence, targetWords)` that accepts a sentence string and an array
// of target words as arguments. The function should return a new sentence where any target words 
// have all of their characters replaced with '*'s.

function censorSentence(sentence, targetWords) {
    let arr = sentence.split(" ");
    let newArr = []
    arr.map(word => {
        if (targetWords.includes(word)) {
            newArr.push(changeWord(word))
        } else {
            newArr.push(word)
        }
    })
    return newArr.join(" ")
}

function changeWord(word) {
    let str = ""
    for (let i = 0; i < word.length; i++) {
        str += "*"
    }
    return str;
}
console.log(censorSentence('where the heck is my celery', ['heck', 'celery']));
// 'where the **** is my ******'

console.log(censorSentence('why you little sweetheart', ['sweetheart', 'salad']));
// 'why you little **********'