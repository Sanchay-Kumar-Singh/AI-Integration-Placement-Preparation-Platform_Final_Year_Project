import React from "react";

const DSA = () => {
  return (
    <div className="max-w-5xl mx-auto p-6 space-y-8">
      <h1 className="text-4xl font-bold text-center text-blue-800 mb-8">
        Complete DSA (Data Structures & Algorithms) Overview
      </h1>

      {/* 1. Introduction */}
      <section className="space-y-2">
        <h2 className="text-2xl font-semibold text-blue-700">1. Introduction to DSA</h2>
        <p><strong>Definition:</strong> DSA is a way of organizing data and solving problems efficiently using algorithms.</p>
        <p><strong>Importance:</strong></p>
        <ul className="list-disc ml-5">
          <li>Optimizes time and space complexity</li>
          <li>Foundation for coding interviews</li>
          <li>Helps in problem solving and system design</li>
        </ul>
      </section>

      {/* 2. Complexity Analysis */}
      <section className="space-y-2">
        <h2 className="text-2xl font-semibold text-blue-700">2. Complexity Analysis</h2>
        <p><strong>Time Complexity:</strong> Number of operations executed as input size grows</p>
        <p><strong>Space Complexity:</strong> Memory required as input size grows</p>
        <p><strong>Big O Notation Examples:</strong></p>
        <ul className="list-disc ml-5">
          <li>O(1) – Constant time</li>
          <li>O(n) – Linear time</li>
          <li>O(log n) – Logarithmic time</li>
          <li>O(n^2) – Quadratic time</li>
        </ul>
      </section>

      {/* 3. Arrays */}
      <section className="space-y-2">
        <h2 className="text-2xl font-semibold text-blue-700">3. Arrays</h2>
        <p><strong>Definition:</strong> Collection of elements of same type stored in contiguous memory.</p>
        <p><strong>Operations:</strong> Traversal, Insertion, Deletion, Search</p>
        <pre className="bg-gray-800 text-white p-2 rounded">{`let arr = [1, 2, 3, 4, 5];
console.log(arr[0]); // Access first element
arr.push(6); // Insert at end
arr.pop(); // Delete last element`}</pre>
      </section>

      {/* 4. Strings */}
      <section className="space-y-2">
        <h2 className="text-2xl font-semibold text-blue-700">4. Strings</h2>
        <p>Sequence of characters. Strings are immutable in many languages.</p>
        <pre className="bg-gray-800 text-white p-2 rounded">{`let str = "DSA";
console.log(str.length); // 3
console.log(str[0]); // 'D'
console.log(str + " Basics"); // Concatenation`}</pre>
      </section>

      {/* 5. Linked List */}
      <section className="space-y-2">
        <h2 className="text-2xl font-semibold text-blue-700">5. Linked List</h2>
        <p>Collection of nodes where each node contains data and pointer to next node.</p>
        <ul className="list-disc ml-5">
          <li>Singly Linked List</li>
          <li>Doubly Linked List</li>
          <li>Circular Linked List</li>
        </ul>
        <pre className="bg-gray-800 text-white p-2 rounded">{`class Node {
    constructor(data){
        this.data = data;
        this.next = null;
    }
}

let head = new Node(10);
head.next = new Node(20);`}</pre>
      </section>

      {/* 6. Stack */}
      <section className="space-y-2">
        <h2 className="text-2xl font-semibold text-blue-700">6. Stack</h2>
        <p>Stack is LIFO (Last In First Out) data structure.</p>
        <pre className="bg-gray-800 text-white p-2 rounded">{`let stack = [];
stack.push(10); // push
stack.push(20);
console.log(stack.pop()); // pop -> 20`}</pre>
      </section>

      {/* 7. Queue */}
      <section className="space-y-2">
        <h2 className="text-2xl font-semibold text-blue-700">7. Queue</h2>
        <p>Queue is FIFO (First In First Out) data structure.</p>
        <pre className="bg-gray-800 text-white p-2 rounded">{`let queue = [];
queue.push(10); // enqueue
queue.push(20);
console.log(queue.shift()); // dequeue -> 10`}</pre>
        <p><strong>Variants:</strong> Circular Queue, Priority Queue, Deque</p>
      </section>

      {/* 8. Recursion */}
      <section className="space-y-2">
        <h2 className="text-2xl font-semibold text-blue-700">8. Recursion</h2>
        <p>Function calling itself to solve a problem.</p>
        <pre className="bg-gray-800 text-white p-2 rounded">{`function factorial(n){
    if(n === 0) return 1;
    return n * factorial(n - 1);
}
console.log(factorial(5)); // 120`}</pre>
      </section>

      {/* 9. Hashing */}
      <section className="space-y-2">
        <h2 className="text-2xl font-semibold text-blue-700">9. Hashing</h2>
        <p>Technique to store/retrieve data efficiently using hash functions.</p>
        <pre className="bg-gray-800 text-white p-2 rounded">{`let map = new Map();
map.set("name", "Sanchay");
console.log(map.get("name")); // Sanchay`}</pre>
      </section>

      {/* 10. Trees */}
      <section className="space-y-2">
        <h2 className="text-2xl font-semibold text-blue-700">10. Trees</h2>
        <p>Hierarchical data structure with root and child nodes.</p>
        <ul className="list-disc ml-5">
          <li>Binary Tree</li>
          <li>Binary Search Tree (BST)</li>
          <li>AVL Tree</li>
          <li>Heap</li>
        </ul>
      </section>

      {/* 11. Graphs */}
      <section className="space-y-2">
        <h2 className="text-2xl font-semibold text-blue-700">11. Graphs</h2>
        <p>Collection of vertices and edges connecting them.</p>
        <ul className="list-disc ml-5">
          <li>Directed / Undirected</li>
          <li>Weighted / Unweighted</li>
          <li>Representations: Adjacency Matrix, Adjacency List</li>
        </ul>
      </section>

      {/* 12. Searching Algorithms */}
      <section className="space-y-2">
        <h2 className="text-2xl font-semibold text-blue-700">12. Searching Algorithms</h2>
        <pre className="bg-gray-800 text-white p-2 rounded">{`// Linear Search
function linearSearch(arr, x){
    for(let i=0; i<arr.length; i++){
        if(arr[i] === x) return i;
    }
    return -1;
}

// Binary Search (array must be sorted)
function binarySearch(arr, x){
    let low = 0, high = arr.length - 1;
    while(low <= high){
        let mid = Math.floor((low + high)/2);
        if(arr[mid] === x) return mid;
        else if(arr[mid] < x) low = mid + 1;
        else high = mid - 1;
    }
    return -1;
}`}</pre>
      </section>

      {/* 13. Sorting Algorithms */}
      <section className="space-y-2">
        <h2 className="text-2xl font-semibold text-blue-700">13. Sorting Algorithms</h2>
        <ul className="list-disc ml-5">
          <li>Bubble Sort</li>
          <li>Selection Sort</li>
          <li>Insertion Sort</li>
          <li>Merge Sort</li>
          <li>Quick Sort</li>
        </ul>
      </section>

      {/* 14. Greedy Algorithms */}
      <section className="space-y-2">
        <h2 className="text-2xl font-semibold text-blue-700">14. Greedy Algorithms</h2>
        <p>Make the locally optimal choice at each step.</p>
        <p>Examples: Activity Selection, Minimum Spanning Tree (Prim/Kruskal)</p>
      </section>

      {/* 15. Dynamic Programming */}
      <section className="space-y-2">
        <h2 className="text-2xl font-semibold text-blue-700">15. Dynamic Programming</h2>
        <p>Break problems into subproblems and store solutions to avoid recomputation.</p>
        <pre className="bg-gray-800 text-white p-2 rounded">{`function fib(n){
    let dp = [0, 1];
    for(let i=2; i<=n; i++){
        dp[i] = dp[i-1] + dp[i-2];
    }
    return dp[n];
}
console.log(fib(10)); // 55`}</pre>
      </section>

      {/* 16. Backtracking */}
      <section className="space-y-2">
        <h2 className="text-2xl font-semibold text-blue-700">16. Backtracking</h2>
        <p>Try all possibilities and backtrack if invalid. Examples: N-Queens, Sudoku Solver</p>
      </section>

      {/* 17. Divide & Conquer */}
      <section className="space-y-2">
        <h2 className="text-2xl font-semibold text-blue-700">17. Divide & Conquer</h2>
        <p>Divide problem into subproblems, solve recursively, and combine results. Examples: Merge Sort, Quick Sort</p>
      </section>

      {/* 18. Bit Manipulation */}
      <section className="space-y-2">
        <h2 className="text-2xl font-semibold text-blue-700">18. Bit Manipulation</h2>
        <p>Using bitwise operators to solve problems efficiently.</p>
        <pre className="bg-gray-800 text-white p-2 rounded">{`let a = 5, b = 3;
console.log(a & b); // 1
console.log(a | b); // 7
console.log(a ^ b); // 6`}</pre>
      </section>

      {/* 19. Problem-Solving Techniques */}
      <section className="space-y-2">
        <h2 className="text-2xl font-semibold text-blue-700">19. Problem-Solving Techniques</h2>
        <ul className="list-disc ml-5">
          <li>Brute Force</li>
          <li>Greedy</li>
          <li>Dynamic Programming</li>
          <li>Divide & Conquer</li>
          <li>Backtracking</li>
          <li>Graph Traversals (DFS, BFS)</li>
        </ul>
      </section>

      {/* 20. Best Practices */}
      <section className="space-y-2">
        <h2 className="text-2xl font-semibold text-blue-700">20. Debugging & Best Practices</h2>
        <ul className="list-disc ml-5">
          <li>Write modular and reusable functions</li>
          <li>Test with multiple inputs</li>
          <li>Optimize for time and space complexity</li>
          <li>Comment your code for readability</li>
        </ul>
      </section>
    </div>
  );
};

export default DSA;
