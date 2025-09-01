function countDivisors(N) {
  let count = 0;
  let sqrtN = Math.floor(Math.sqrt(N));

  for (let i = 1; i <= sqrtN; i++) {
    if (N % i === 0) {
      if (i * i === N) {
        count += 1;
      } else {
        count += 2; 
      }
    }
  }

  return count;
}

console.log(countDivisors(12));   
