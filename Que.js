/**
 * @Title Que 자료구조
 * @description
 */

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
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  enqueue(newValue) {
    const newNode = new Node(newValue);
    if (this.head === null) {
      this.head = this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.size += 1;
  }

  dequeue() {
    const value = this.head.value;
    this.head = this.head.next;
    this.size -= 1;
    return value;
  }

  peak() {
    return this.head.value;
  }
}

const queue = new Queue();
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(4);
console.log(queue.dequeue());
queue.enqueue(8);
//console.log(queue.size());
console.log(queue.peak());
console.log(queue.dequeue());
console.log(queue.dequeue());

/**
 * @title max size를 두고 queue 구현
 */
class CircularQueue {
  constructor(maxSize) {
    this.maxSize = maxSize;
    this.queue = [];
    this.front = 0;
    this.rear = 0;
    this.size = 0;
  }

  enqueue(value) {
    if (this.isFull()) {
      console.log('Queue is Full.');
      return;
    }
    this.queue[this.rear] = value;
    this.rear = (this.rear + 1) % this.maxSize;
    this.size += 1;
  }

  dequeue() {
    const value = this.queue[this.front];
    delete this.queue[this.front];
    this.front = (this.front + 1) % this.maxSize;
    this.size -= 1;
    return value;
  }

  isFull() {
    return this.size === this.maxSize;
  }

  peak() {
    return this.queue[this.front];
  }
}

const queue2 = new CircularQueue(4);
queue2.enqueue(1);
queue2.enqueue(2);
queue2.enqueue(4);
queue2.enqueue(8);
queue2.enqueue(16);
console.log(queue2.dequeue());
console.log(queue2.dequeue());
//console.log(queue2.size);
console.log(queue2.peak());
queue2.enqueue(16);
queue2.enqueue(32);
console.log(queue2.isFull());
