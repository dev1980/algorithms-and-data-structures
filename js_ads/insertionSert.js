const insertion = arr => {
  arr.forEach((item, i) => {
    let num = arr[i];
    let j;

    for (j = i - 1; j >= 0 && arr[j] > num; j--) {
      arr[j + 1] = arr[j];
    };
    arr[j + 1] = num;
  });

  return arr;
};


console.log(insertion([3, 0, 2, 5, -1, 4, 1]));