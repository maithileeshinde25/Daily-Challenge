function findZeroSumSubarrays(arr) {
  const result = [];
  const prefixMap = new Map(); 
  let prefixSum = 0;

  for (let i = 0; i < arr.length; i++) {
    prefixSum += arr[i];

    if (prefixSum === 0) {
      result.push([0, i]);
    }

    if (prefixMap.has(prefixSum)) {
      for (const start of prefixMap.get(prefixSum)) {
        result.push([start + 1, i]);
      }
    }

    if (!prefixMap.has(prefixSum)) {
      prefixMap.set(prefixSum, []);
    }
    prefixMap.get(prefixSum).push(i);
  }

  return result;
}

console.log(findZeroSumSubarrays([1, 2, -3, 3, -1, 2]));
