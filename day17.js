function primeFactorization(N) {
    let factors = [];

    while (N % 2 === 0) {
        factors.push(2);
        N = N / 2;
    }

    for (let i = 3; i * i <= N; i += 2) {
        while (N % i === 0) {
            factors.push(i);
            N = N / i;
        }
    }

    if (N > 1) {
        factors.push(N);
    }

    return factors;
}

console.log(primeFactorization(18));      
