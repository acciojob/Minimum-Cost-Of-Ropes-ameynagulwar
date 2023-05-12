function connectRopes(ropes) {
  // Create a min-heap to keep track of smallest ropes
  const minHeap = new MinHeap();
  for (let rope of ropes) {
    minHeap.insert(rope);
  }

  // Connect ropes until there is only one left
  let totalCost = 0;
  while (minHeap.size() > 1) {
    const min1 = minHeap.extractMin();
    const min2 = minHeap.extractMin();
    const sum = min1 + min2;
    totalCost += sum;
    minHeap.insert(sum);
  }

  return totalCost;
}

// Define MinHeap class
class MinHeap {
  constructor() {
    this.heap = [];
  }

  insert(value) {
    this.heap.push(value);
    this.bubbleUp(this.heap.length - 1);
  }

  extractMin() {
    const min = this.heap[0];
    const last = this.heap.pop();
    if (this.heap.length > 0) {
      this.heap[0] = last;
      this.bubbleDown(0);
    }
    return min;
  }

  bubbleUp(index) {
    while (index > 0) {
      const parentIndex = Math.floor((index - 1) / 2);
      if (this.heap[parentIndex] <= this.heap[index]) {
        break;
      }
      this.swap(parentIndex, index);
      index = parentIndex;
    }
  }

  bubbleDown(index) {
    while (true) {
      const leftChildIndex = 2 * index + 1;
      const rightChildIndex = 2 * index + 2;
      let minIndex = index;
      if (leftChildIndex < this.heap.length && this.heap[leftChildIndex] < this.heap[minIndex]) {
        minIndex = leftChildIndex;
      }
      if (rightChildIndex < this.heap.length && this.heap[rightChildIndex] < this.heap[minIndex]) {
        minIndex = rightChildIndex;
      }
      if (minIndex === index) {
        break;
      }
      this.swap(index, minIndex);
      index = minIndex;
    }
  }

  swap(i, j) {
    const temp = this.heap[i];
    this.heap[i] = this.heap[j];
    this.heap[j] = temp;
  }

  size() {
    return this.heap.length;
  }
}

