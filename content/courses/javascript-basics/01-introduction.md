---
title: "What is JavaScript?"
image: "https://img.cdn.famobi.com/portal/html5games/images/tmp/GardenBloomTeaser.jpg?v=0.2-2f895505"
categories: ["JavaScript", "Beginner"]
tags: ["introduction", "javascript", "beginner"]
---
In this first lesson, we explore the history of JavaScript and its role in modern web development.


<img src="https://r2cdn.perplexity.ai/pplx-full-logo-primary-dark%402x.png" style="height:64px;margin-right:32px"/>

### write description for my website where you can learn about any courses related mathematics and statisctics

Welcome to your ultimate learning platform, where you can explore and master a wide range of courses related to Mathematics and Statistics. Whether you are a beginner looking to build strong foundational skills or an advanced learner aiming to deepen your knowledge, our website offers comprehensive, well-structured courses covering all the key concepts, theories, and practical applications.

Discover detailed lessons, interactive content, and expertly explained topics across various branches such as algebra, calculus, probability, data analysis, and more. Our resources are designed to help students, professionals, and enthusiasts alike achieve success in academics, competitive exams, and real-world problem solving. Start your learning journey with us and unlock the power of mathematical and statistical understanding today!


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

