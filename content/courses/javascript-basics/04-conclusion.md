---
title: "Javascript Classes Conclusion"
---
Functions are the building blocks of any application. This lesson covers 
how to declare and call functions.


<img src="https://r2cdn.perplexity.ai/pplx-full-logo-primary-dark%402x.png" style="height:64px;margin-right:32px"/>

# extract all questions and give solutions

Here are the extracted questions and their solutions:

***

## 1. The maximum number of non-zero entries in an adjacency matrix of a simple graph having \$ n \$ vertices can be

### Options:

- $\boxed{n^2}$
- $\frac{n(n-1)}{2}$
- $\frac{n(n-1)}{4}$
- $n(n-1)$


### **Solution**:

For a simple graph (no self-loops, undirected), the maximum number of *edges* is $\frac{n(n-1)}{2}$. But the adjacency matrix counts both (i, j) and (j, i) as nonzero for an edge between i and j. So the maximum number of nonzero entries is $n(n-1)$ (each edge counted twice in the adjacency matrix).
**Answer: $n(n-1)$**

***

## 2. We have a graph $G$ with 6 vertices. We write down the degrees of all vertices in $G$ in descending order. Which of the following is a possible listing of the degrees?

Options:

- (a) 6, 5, 4, 3, 2, 1
- (b) 5, 5, 2, 2, 1, 1
- (c) 5, 3, 3, 2, 2, 1
- (d) 2, 1, 1, 1, 1, 1


### **Solution**:

- The sum of degrees in a graph with 6 vertices must be even (Handshaking Lemma).
- Maximum degree ≤ $n-1 = 5$.

(a) sum: 6+5+4+3+2+1=21 (odd, and 6>5 - invalid)
(b) sum: 5+5+2+2+1+1 = 16 (**valid**)
(c) sum: 5+3+3+2+2+1=16 (**valid**)
(d) sum: 2+1+1+1+1+1=7 (odd - invalid)

But in (b), having 5 and 5 (i.e., two vertices connected to all except one each) is possible, with 2 and 2, and 1 and 1. **So both (b) and (c) are possible degree sequences for a simple graph.**

**Answer:**

- $5, 5, 2, 2, 1, 1$ (**valid**)
- $5, 3, 3, 2, 2, 1$ (**valid**)

***

## 3. Data structure for keeping track of intersections in a maze

**Question:** What is a good data structure to keep track of the intersections we have visited to backtrack if we hit a dead end?

Options:

- List
- Stack
- Queue
- Array


### **Solution**:

For maze solving with backtracking, a **stack** is appropriate (LIFO: last place visited is the first to return to).

**Answer:** Stack

***

## 4. BFS tree for undirected graph (vertices 1 to 14)

Given the BFS tree rooted at node 1, which of the following **cannot** be an edge in the original graph?

Options:

- (8,11)
- (3,10)
- (4,5)
- (6,9)


### **Solution**:

In a BFS tree, if vertices are on different levels with no parent-child relationship, the edge between them would have produced a shorter path in BFS.

**(8,11):**

- 8 is a descendant of 2 (from 6 -> 2 -> 8)
- 11 is child of 5
- Level of 8: 1→5→6→2→8 (level 4)
- Level of 11: 1→5→11 (level 3)
No parent-child or sibling relationship.

But, in general, (8,11) connects two nodes where one is not ancestor/descendant of another. This means such an edge would produce a cross-edge, **which is not possible in a BFS tree in an undirected graph**.
**Answer:** (8,11) cannot be an edge in the original graph.

***

## 5. Which of the following graphs satisfies:

1. $|VC(G)| = 3$: minimum vertex cover is 3
2. $|PM(G)| = 3$: perfect matching of size 3
3. 3-colorable

### **Solution**:

Let's check each image:

#### First Graph:

- Looks like a hexagon with a triangle on top—does not have perfect matching of 3.


#### Second Graph:

- K3,3 (complete bipartite on 6: every U connects every V): perfect matching 3, vertex cover 3, 2-colorable (so 3-colorable).


#### Third Graph:

- Looks like a pentagon with chords, not obvious matching of 3.


#### Fourth Graph:

- Not perfect matching of 3.

**Answer:** The **second graph** (K3,3) satisfies all conditions.

***

## 6. Which statements are true?

Options:

- (a) BFS can be used to identify the vertex which is at the farthest distance from $v$ in any graph, in terms of number of edges, where $v$ is the starting vertex.
- (b) BFS and DFS identifies all the vertices reachable from the starting vertex $v$.
- (c) BFS cannot be used to check for cycles in the graph while DFS can be used to check for cycles in the graph.
- (d) DFS can be used to identify the shortest distance from starting vertex $v$ to every other vertex in the graph, in terms of number of edges.


### **Solution**:

- (a) **True** in connected unweighted graphs.
- (b) **True** for both BFS and DFS.
- (c) **Incorrect**. BFS can also identify cycles.
- (d) **False**. DFS cannot reliably find shortest path in unweighted graph; BFS does.

**Answer:** Statements (a) and (b) are true.

***

## 7. Maximum Independent Set Cardinality (Numerical)

Adjacency matrix:

$$
A = \begin{bmatrix}
0 & 1 & 0 & 1 & 0 & 0 \\
1 & 0 & 1 & 1 & 0 & 0 \\
0 & 1 & 0 & 0 & 1 & 1 \\
1 & 1 & 0 & 0 & 0 & 0 \\
0 & 0 & 1 & 0 & 0 & 1 \\
0 & 0 & 1 & 0 & 1 & 0
\end{bmatrix}
$$

### **Solution**:

Let the vertices be 1-6.
Let's try to find the largest independent set (set of vertices no two of which are adjacent):

- Vertex 1: adjacent to 2, 4.
- Vertex 2: adjacent to 1, 3, 4.
- Vertex 3: adjacent to 2, 5, 6.
- Vertex 4: adjacent to 1, 2.
- Vertex 5: adjacent to 3, 6.
- Vertex 6: adjacent to 3, 5.

Try picking 1, 5:

- 1 is connected to 2, 4.
- 5 is connected to 3, 6 (neither are 1 or 5).
Try 1, 5, 4: 1 and 4 connected (invalid).

Try 1, 3, 6: 1 and 3 are not connected, 1 and 6 not connected, 3 and 6 are connected (invalid).

Try 1, 5, 3: 3 and 5 connected (invalid).

Try 4, 5, 6: 4 and 5 not connected, 4 and 6 not connected, 5 and 6 are connected (invalid).

Try 1, 5:

- 1 (not adjacent to 5).
- 5 (adjacent to 3 and 6).
- Add 4? 1 and 4 connected (invalid).
- Add 6? 5 and 6 connected (invalid).
- Add 2? 1 and 2 connected (invalid).

Try 1, 5 — that's 2.
Try 1, 6: 1 and 6 not connected.

- 1 (adjacent to 2, 4)
- 6 (adjacent to 3,5)
- Add 4? 1 and 4 connected (invalid).

Try 2, 5, 4:

- 2 and 5 not connected.
- 2 and 4 connected (invalid).

Try 4, 5:

- 4 and 5 not connected.

Try 4, 6:

- 4 and 6 not connected.

Try 4, 5, 2: 4 and 2 connected.

Try 1, 5, 6: 5 and 6 connected.

Try 1, 5.

Try 4, 6.

Try 2, 5.

Try 2 and 6.

No independent set of size 3.

But what about 3,4,5?

- 3 and 4 not connected.
- 3 and 5 connected.

So, **maximum independent set is of size 2**.

**Answer:** **2**

***

## **Summary Table**

| Qn | Answer/Explanation |
| :-- | :-- |
| 1 | \$ n(n-1) \$ |
| 2 | (b) \$ 5,5,2,2,1,1 \$; (c) \$ 5,3,3,2,2,1 \$ |
| 3 | Stack |
| 4 | (8,11) |
| 5 | Second graph |
| 6 | (a), (b) |
| 7 | 2 |

<div style="text-align: center">⁂</div>

[^1]: Screenshot-2025-08-13-161005.jpg

[^2]: Screenshot-2025-08-13-161016.jpg

[^3]: Screenshot-2025-08-13-161047.jpg

[^4]: Screenshot-2025-08-13-161026.jpg

