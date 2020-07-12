const bubble = arr => {
const swap = (arr, a, b) => [arr[a], arr[b]] = [arr[b], arr[a]]
for(let i = arr.length; i > 0; i--) {
  for(let j = 0; j < i - 1; j++) {
    if(arr[j] > arr[j+1]) {
      swap(arr, j, j+1)
    }
  }
}
return arr;
}

console.log(bubble([3, 0, 2, 5, -1, 4, 1]));