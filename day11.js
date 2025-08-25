function permuteUnique(s) {
  const chars = s.split("").sort(); // sort to handle duplicates
  const res = [];
  const visited = new Array(chars.length).fill(false);

  function backtrack(path) {
    if (path.length === chars.length) {
      res.push(path.join(""));
      return;
    }

    for (let i = 0; i < chars.length; i++) {
      if (visited[i]) continue;

      // Skip duplicates: only allow the first unused duplicate
      if (i > 0 && chars[i] === chars[i - 1] && !visited[i - 1]) continue;

      visited[i] = true;
      path.push(chars[i]);

      backtrack(path);

      path.pop();
      visited[i] = false;
    }
  }

  backtrack([]);
  return res;
}
console.log(permuteUnique("abc"));