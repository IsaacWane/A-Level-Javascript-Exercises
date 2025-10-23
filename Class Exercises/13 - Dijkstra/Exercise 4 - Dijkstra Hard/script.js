(function(){
  const graph = {
    A: { B: 4, C: 2 },
    B: { A: 4, C: 1, D: 5 },
    C: { A: 2, B: 1, D: 8, E: 10 },
    D: { B: 5, C: 8, E: 2, F: 6 },
    E: { C: 10, D: 2, F: 3 },
    F: { D: 6, E: 3 }
  };

  // Minimal priority queue using array (students may replace with heap)
  function PQ() {
    this.items = [];
  }
  PQ.prototype.push = function(node, priority) { this.items.push({node, priority}); };
  PQ.prototype.pop = function() {
    if (this.items.length === 0) return null;
    let minIdx = 0;
    for (let i = 1; i < this.items.length; i++) {
      if (this.items[i].priority < this.items[minIdx].priority) minIdx = i;
    }
    return this.items.splice(minIdx,1)[0];
  };

  function dijkstra(start) {
    const dist = {};
    const prev = {};
    const pq = new PQ();

    Object.keys(graph).forEach(v => { dist[v] = Infinity; prev[v] = null; });
    dist[start] = 0;
    pq.push(start, 0);

    while (true) {
      const entry = pq.pop();
      if (!entry) break;
      const u = entry.node;
      if (entry.priority !== dist[u]) continue; // stale

      for (let [neighbor, weight] of Object.entries(graph[u])) {
        let alt = dist[u] + weight;
        if (alt < dist[neighbor]) {
          dist[neighbor] = alt;
          prev[neighbor] = u;
          pq.push(neighbor, alt);
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
