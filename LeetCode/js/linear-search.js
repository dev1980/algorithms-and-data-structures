//iterate through the array and find
function linearSearch(array, n) {
  for (var i = 0; i < array.length; i++) {
      if (array[i] == n) {
          return true;
      }
  }
  return false;
}
console.log(linearSearch([1, 2, 3, 4, 5, 6, 7, 8, 9], 6)); // true
console.log(linearSearch([1, 2, 3, 4, 5, 6, 7, 8, 9], 10)); // false