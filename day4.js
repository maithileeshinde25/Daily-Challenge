function merge(arr1, arr2) {
    let m = arr1.length, n = arr2.length;
    let gap = Math.ceil((m + n) / 2);

    while (gap > 0) {
        let i = 0, j = gap;

        while (j < m + n) {
            let a, b;
            if (i < m) a = arr1[i];
            else a = arr2[i - m];

            if (j < m) b = arr1[j];
            else b = arr2[j - m];

            if (a > b) {
                if (i < m && j < m) {
                    [arr1[i], arr1[j]] = [arr1[j], arr1[i]];
                } else if (i < m && j >= m) {
                    [arr1[i], arr2[j - m]] = [arr2[j - m], arr1[i]];
                } else {
                    [arr2[i - m], arr2[j - m]] = [arr2[j - m], arr2[i - m]];
                }
            }
            i++;
            j++;
        }

        if (gap === 1) break;
        gap = Math.ceil(gap / 2);
    }
}
let arr1 = [1, 3, 5, 7];
let arr2 = [2, 4, 6, 8];

merge(arr1, arr2);
console.log("arr1:", arr1); 
console.log("arr2:", arr2);