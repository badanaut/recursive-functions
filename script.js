/* eslint-disable no-plusplus */
function fibs(n) {
  const fib = [0, 1];
  if (n <= 1) {
    return fib;
  }

  // eslint-disable-next-line no-plusplus
  for (let i = 2; i < n; i++) {
    fib[i] = fib[i - 1] + fib[i - 2];
  }
  return fib;
}

console.log(fibs(9));

function fibsRec(num, arr = [0, 1]) {
  // eslint-disable-next-line max-len
  return arr.length >= num ? arr : fibsRec(num, [...arr, arr[arr.length - 2] + arr[arr.length - 1]]);
}
console.log(fibsRec(9));

function mergeSort(array) {
  if (array.length === 1) return array;
  const sortedArray = [];
  const middle = Math.trunc(array.length / 2);
  const leftSide = mergeSort(array.slice(0, middle));
  const rightSide = mergeSort(array.slice(middle));

  ((left, right) => {
    let i = 0;
    let j = 0;

    while (i < left.length && j < right.length) {
      // eslint-disable-next-line no-unused-expressions
      left[i] < right[j] ? sortedArray.push(left[i++]) : sortedArray.push(right[j++]);
    }
    while (i < left.length) sortedArray.push(left[i++]);
    while (j < right.length) sortedArray.push(right[j++]);
  })(leftSide, rightSide);

  return sortedArray;
}

console.log(mergeSort([4, 2, 7, 1, 9, 5]));
