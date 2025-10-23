(function(){
  const graph = {
    A: { B: 4, C: 2 },
    B: { A: 4, C: 1, D: 5 },
    C: { A: 2, B: 1, D: 8, E: 10 },
    D: { B: 5, C: 8, E: 2, F: 6 },
    E: { C: 10, D: 2, F: 3 },
    F: { D: 6, E: 3 }
  };

  // Students: implement Dijkstra here (no scaffolding)
  function dijkstra(start) {
    // Implement algorithm and return { dist, prev }
    const dist = {};
    const prev = {};

    // Simple implementation using array selection
    Object.keys(graph).forEach(v => { dist[v] = Infinity; prev[v] = null; });
    dist[start] = 0;

    const Q = new Set(Object.keys(graph));
    while (Q.size > 0) {
      let u = null;
      let min = Infinity;
      for (let v of Q) {
        if (dist[v] < min) { min = dist[v]; u = v; }
      }
      if (u === null) break;
      Q.delete(u);

      for (let [neighbor, weight] of Object.entries(graph[u])) {
        let alt = dist[u] + weight;
        if (alt < dist[neighbor]) {
          dist[neighbor] = alt;
          prev[neighbor] = u;
        }
      }
    }

    return { dist, prev };
  }

  document.getElementById('btnRun').onclick = function(){
    const result = dijkstra('A');
    document.getElementById('output').innerText = JSON.stringify(result, null, 2);
  };
})();
