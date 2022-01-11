class MaxHeap {
  constructor() {
    this.heap = [null];
  }

  push(value) {
    this.heap.push(value);
    let currentIndex = this.heap.length - 1;
    let parentIndex = Math.floor(currentIndex / 2);

    while (parentIndex !== 0 && this.heap[parentIndex] < value) {
      const temp = this.heap[parentIndex];
      this.heap[parentIndex] = value;
      this.heap[currentIndex] = temp;

      currentIndex = parentIndex;
      parentIndex = Math.floor(currentIndex / 2);
    }
  }

  pop() {
    if (this.heap.length === 2) return this.heap.pop();
    const returnValue = this.heap[1];
    this.heap[1] = this.heap.pop();

    let currentIndex = 1;
    let leftIndex = 2;
    let rightIndex = 3;
    while (
      this.heap[currentIndex] < this.heap[leftIndex] ||
      this.heap[currentIndex] < this.heap[rightIndex]
    ) {
      if (this.heap[leftIndex] < this.heap[rightIndex]) {
        const temp = this.heap[currentIndex];
        this.heap[currentIndex] = this.heap[rightIndex];
        this.heap[rightIndex] = temp;
        currentIndex = rightIndex;
      } else {
        const temp = this.heap[currentIndex];
        this.heap[currentIndex] = this.heap[leftIndex];
        this.heap[leftIndex] = temp;
        currentIndex = leftIndex;
      }
      leftIndex = currentIndex * 2;
      rightIndex = currentIndex * 2 + 1;
    }

    return returnValue;
  }
}

function solution(no, works) {
  var result = 0;
  let temp = no;

  const heap = new MaxHeap();
  for (let work of works) {
    heap.push(work);
  }
  while (temp > 0) {
    const tempData = heap.pop();
    if (tempData <= 0) {
      return 0;
    }
    heap.push(tempData - 1);
    temp -= 1;
  }

  result = [...heap.heap].reduce((a, b) => a + b * b, 0) || 0;
  console.log(result);

  return result;
}

/*
function solution(no, works) {
  var result = 0;
  let temp = no;

  while (temp > 0) {
    works.sort((a, b) => b - a);
    if (works[0] === 0) {
      return 0;
    }
    works[0] -= 1;
    temp -= 1;
  }
  result = works.reduce((a, b) => a + b * b, 0);
  console.log(result);

  return result;
}
*/

const no = 200;
const works = [0, 0, 3, 3, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5];
solution(no, works);
