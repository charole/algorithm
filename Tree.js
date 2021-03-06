/**
 * @title tree 자료구조
 * @description tree 자료구조 학습
 */
// 0번 인덱스는 편의를 위해 비워둔다.
// Left = Index * 2
// Right = Index * 2 + 1
// Parent = floor(Index / 2)
/*const tree = [
  undefined,
  // 1
  9,
  // 1 * 2, 1 * 2 + 1
  3,
  8,
  // 2 * 2, 2 * 2 + 1, 3 * 2, 3 * 2 + 1
  2,
  5,
  undefined,
  7,
  // 4 * 2, 4 * 2 + 1, 5 * 2 , 5 * 2 + 1
  undefined,
  undefined,
  undefined,
  4,
];*/

class LeanearQueue {
  constructor() {
    this.queue = [];
    this.front = 0;
    this.rear = 0;
  }

  enqueue(value) {
    this.queue[this.rear++] = value;
  }

  dequeue() {
    const value = this.queue[this.front];
    delete this.queue[this.front];
    this.front += 1;
    return value;
  }

  peak() {
    return this.queue[this.front];
  }

  size() {
    return this.rear - this.front;
  }
}

class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class Tree {
  constructor(node) {
    this.root = node;
  }

  display() {
    const queue = new LeanearQueue();
    queue.enqueue(this.root);
    while (queue.size) {
      const currentNode = queue.dequeue();
      console.log(currentNode.value);
      if (currentNode.left) queue.enqueue(currentNode.left);
      if (currentNode.right) queue.enqueue(currentNode.right);
    }
  }
}

const tree = new Tree(new Node(9));
tree.root.left = new Node(3);
tree.root.right = new Node(8);
tree.root.left.left = new Node(2);
tree.root.left.right = new Node(5);
tree.root.right.right = new Node(7);
tree.root.left.right.right = new Node(4);