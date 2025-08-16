function findMissingNumber(arr) {
    const n = arr.length + 1; 
    const totalSum = (n * (n + 1)) / 2; 
    const actualSum = arr.reduce((acc, num) => acc + num, 0);
    return totalSum - actualSum; 
}


console.log(findMissingNumber([1, 2, 4, 5]));



