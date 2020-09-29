function binarySearch(array, n) {
  var MiddleElement = Math.floor(array.length - 1 / 2); // 1 (Middle)
  var True = true;

  while (True) {
      // 2 == 2
      if (n == array[MiddleElement]) {
          True = false;
          return array[MiddleElement];

      } else if (n > array[MiddleElement]) {
          MiddleElement = MiddleElement + 1;

      } else if (n < array[MiddleElement]) {
          MiddleElement = MiddleElement - 1;
      } else {
          return -1;
      }
  }
}
console.log(binarySearch([1, 2, 3, 4], 4)); // Prints '4'
console.log(binarySearch([1, 2, 3, 4], 5)); // Prints '-1'