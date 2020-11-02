// Reverse the array
//Write a program to reverse an array or string
//Given an array (or string), the task is to reverse the array/string.

// Input  : arr[] = {1, 2, 3}
// Output : arr[] = {3, 2, 1}

// Input :  arr[] = {4, 5, 1, 2}
// Output : arr[] = {2, 1, 5, 4}

var arrayOne = [1,2,3,4,5];

var reverse = function(array){
    var arrayOne = array
    var array2 = [];

    for (var i = arrayOne.length-1; i >= 0; i--){
      array2.push(arrayOne[i])
    } 
    return array2
}

reverse(arrayOne)