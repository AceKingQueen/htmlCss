const algos = [
  { id: 1, name: "Count Elements in a Linked List - iterative" },
  { id: 2, name: "Count Elements in a Linked List - recursive" },
  { id: 3, name: "Append an Element to a Linked List -iterative" },
  { id: 4, name: "Append an Element to a Linked List - recursive" },
  { id: 5, name: "Sum elements in a linked list - iterative" },
  { id: 6, name: "Sum elements in a linked list - recursive" },
  { id: 7, name: "Find max element in a linked list - iterative" },
  { id: 8, name: "Find max element in a linked list - recursive" },
  {
    id: 9,
    name: "Remove all elements with a target value in a linked list - iterative",
  },
  {
    id: 10,
    name: "Remove all elements with a target value in a linked list - recursive",
  },
  { id: 11, name: "Find element in a sorted linked list - iterative" },
  { id: 12, name: "Find element in a sorted linked list - recursive" },
  {
    id: 13,
    name: "Insert a target element in a sorted linked list - iterative",
  },
  {
    id: 14,
    name: "Insert a target element in a sorted linked list - recursive",
  },
  {
    id: 15,
    name: "Remove a target element from a sorted linked list - iterative",
  },
  {
    id: 16,
    name: "Remove a target element from a sorted linked list - recursive",
  },
  { id: 17, name: "Find the middle element from a linked list in one pass" },
  {
    id: 18,
    name: "Find kth element from the end of a linked list in one pass",
  },
  { id: 19, name: "Sum two linked lists of equal length" },
  { id: 20, name: "Reverse a linked list" },
  { id: 21, name: "Bubble sort" },
  { id: 22, name: "Selection sort" },
  { id: 23, name: "Insertion sort" },
  { id: 24, name: "Merge sort" },
  { id: 25, name: "Find First Element Repeated K Times - array" },
  { id: 26, name: "Number of Unique Elements in an Array" },
  { id: 27, name: "Number of Duplicated Elements in an Array" },
  {
    id: 28,
    name: "Binary search",
    notes:
      "Given a sorted array of unique positive integers and a target integer, check if the array contains a target using binary search and return its index. If the array does not contain the target, return -1.",
  },
  { id: 29, name: "Linked list node class" },
  { id: 30, name: "Binary tree node class" },
  { id: 31, name: "Count Elements in a Binary Tree - iterative" },
  { id: 32, name: "Count Elements in a Binary Tree - recursive" },
  { id: 33, name: "Sum Elements in a Binary Tree - iterative" },
  { id: 34, name: "Sum Elements in a Binary Tree - recursive" },
  { id: 35, name: "Find max element in a binary tree - iterative" },
  { id: 36, name: "Find max element in a binary tree - recursive" },
  { id: 37, name: "Find height of a binary tree" },
  {
    id: 38,
    name: "Find element in a binary tree using BFS",
    notes:
      "Given a binary tree and a target element's value, determine if the tree contains the target using breadth first search (BFS).",
  },
  { id: 39, name: "Find Element in a Binary Tree Using DFS - iterative" },
  { id: 40, name: "Find Element in a Binary Tree Using DFS - recursive" },
  {
    id: 41,
    name: "Find Element in a Binary Search Tree",
    notes:
      "Given a binary search tree and a target integer, check if the tree contains a target.",
  },
  { id: 42, name: "Insert Element into a Binary Search Tree" },
  { id: 43, name: "Validate a Binary Search Tree" },
  { id: 44, name: "Find Kth Element in the Fibonacci Sequence" },
];

function randomizer(min, max) {
  return Math.random() * (max - min) + min;
}

const rando = Math.floor(randomizer(1, algos.length));

const selectedAlgo = algos.find(algo => algo.id === rando);

console.log(selectedAlgo.name);
