function slidingWindowMaximum(arr, k) {
  const n = arr.length;
  if (n === 0) return [];
  if (k === 1) return arr;
  const deque = [];
  const result = [];

  for (let i = 0; i < n; i++) {
   
    while (deque.length && deque[0] <= i - k) {
      deque.shift();
    }

    while (deque.length && arr[deque[deque.length - 1]] <= arr[i]) {
      deque.pop();
    }

    deque.push(i);

    if (i >= k - 1) {
      result.push(arr[deque[0]]);
    }
  }

  return result;
}

console.log(slidingWindowMaximum([1, 3, -1, -3, 5, 3, 6, 7], 3)); 

