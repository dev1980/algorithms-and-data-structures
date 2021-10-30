// Write a function `pickPrefix(strings, prefix)` that accepts an array of strings and a prefix string 
// as an argument. The function should return the an array of words that begin with the prefix.

function pickPrefix(strings, prefix) {
let newArr = []
for(let i =0; i < strings.length; i++){
if(strings[i].includes(prefix)){
newArr.push(strings[i])
}

}
return newArr
}


console.log(pickPrefix(['connect', 'company', 'concert', 'cram'], 'con'));
// ['connect', 'concert']

console.log(pickPrefix(['miner', 'mistake', 'misspeak', 'moose', 'mission'], 'mis'));
// [''mistake', 'misspeak', 'mission']