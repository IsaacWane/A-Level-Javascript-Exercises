# Exercise 3 — Dijkstra Medium

Goal: Fill in blanks for choosing the node with minimum tentative distance and performing the relaxation step.

Edit:
- `script.js` — fill blanks marked `___________`.

Hints:
- For selecting the node, iterate Q and find v with smallest dist[v].
- For relaxation: compute alt = dist[u] + weight and compare to dist[neighbor].
