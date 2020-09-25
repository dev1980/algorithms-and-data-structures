// Given an array of integers, find and print the maximum number of integers you can select from the array
// such that the absolute difference between any two of the chosen integers is less than or equal to .
  
  function pickingNumbers(a) {
  let maxIntegers = 0;
  for (let i=0; i<a.length; i++) {
    let tempMaxIntegers=0;
    for (let j=0; j<a.length; j++){
      if ((a[i] - a[j]===0 ) || ((a[i] - (a[j]+1))===0)  && (j!== i)){
        tempMaxIntegers++;
      }
    }
    if (tempMaxIntegers > maxIntegers) {
      maxIntegers = tempMaxIntegers;
    }
  }
  return Math.floor(maxIntegers);
}