function shortestPath(V, edges, start, end) {
  if (start === end) return 0;

  const adj = Array.from({ length: V }, () => []);
  for (let [u, v] of edges) {
    adj[u].push(v);
    adj[v].push(u); 
  }

  const queue = [[start, 0]]; 
  const visited = new Array(V).fill(false);
  visited[start] = true;

  while (queue.length > 0) {
    const [node, dist] = queue.shift();

    for (let neighbor of adj[node]) {
      if (!visited[neighbor]) {
        if (neighbor === end) return dist + 1; 
        visited[neighbor] = true;
        queue.push([neighbor, dist + 1]);
      }
    }
  }

  return -1; 
}
console.log(shortestPath(5, [[0,1],[0,2],[1,3],[2,3],[3,4]], 0, 4)); 
