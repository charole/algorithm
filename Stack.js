/**
 * @title Stack 구현
 * @description Stack을 구현합니다. (javascript 에서는 이미 array 에 pop, push가 존재하기 때문에 따로 설정해 줄 필요가 없습니다.)
 * 1. LinkedList 로 Stack 구현하기
 */

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.top = null;
    this.size = 0;
  }

  push(value) {
    const node = new Node(value);
    node.next = this.top;
    this.top = node;
    this.size += 1;
  }

  pop() {
    const value = this.top.value;
    this.top = this.top.next;
    this.size -= 1;
    return value;
  }

  size() {
    return this.size;
  }
}

const stack = new Stack();
stack.push(1);
stack.push(2);
stack.push(3);
stack.push(4);
console.log(stack.pop());
stack.push(5);
console.log(stack.pop());
console.log(stack.pop());
