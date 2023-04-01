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
