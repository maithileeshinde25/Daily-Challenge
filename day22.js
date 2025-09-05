function firstElementKTimes(arr, k) {
    const freq = new Map();

    for (let num of arr) {
        freq.set(num, (freq.get(num) || 0) + 1);
    }


    for (let num of arr) {
        if (freq.get(num) === k) {
            return num;
        }
    }

    return -1;
}

console.log(firstElementKTimes([3, 1, 4, 4, 5, 2, 6, 1, 4], 2)); 