/*
 * 最小堆
 */
class MinHeap {
    constructor() {
        this.heap = [];
    }
    // 交换元素
    swap(i, j) {
        const temp = this.heap[i];
        this.heap[i] = this.heap[j];
        this.heap[j] = temp;
    }
    // 子元素获取父元素节点
    getParentIndex(i) {
        return (i - 1) >> 1;
    }
    // 父元素获取左节点
    getLeftIndex(i) {
        return i * 2 + 1;
    }
    // 父元素获取右节点
    getRightIndex(i) {
        return i * 2 + 2;
    }
    // 元素上移，一直找到最小元素位置
    shiftUp(index) {
        if (index === 0) {
            return;
        }
        const parentIndex = this.getParentIndex(index);
        if (this.heap[parentIndex] > this.heap[index]) {
            this.swap(parentIndex, index);
            this.shiftUp(parentIndex);
        }
    }
    // 元素下移， 当删除元素的时候， 需要用最后的元素覆盖根元素， 然后从上到下移动
    shiftDown(index) {
        const leftIndex = this.getLeftIndex(index);
        const rightIndex = this.getRightIndex(index);

        if(this.heap[leftIndex] < this.heap[index]){
            this.swap(leftIndex, index);
            this.shiftDown(leftIndex)
        }
        if(this.heap[rightIndex] < this.heap[index]){
            this.swap(rightIndex, index);
            this.shiftDown(rightIndex)
        }
    }
    // 插入元素
    insert(value) {
        this.heap.push(value);
        this.shiftUp(this.heap.length - 1);
    }
    // 删除元素
    pop() {
        this.heap.pop();
        this.shiftDown(0);
    }
    // 获取根元素
    peek() {
        return this.heap[0];
    }
    // 当前长度
    size() {
        return this.heap.length;
    }
}
let minHeap = new MinHeap();
minHeap.insert(123)
minHeap.insert(11)
minHeap.insert(4)
minHeap.insert(12)
minHeap.insert(4)
minHeap.insert(6)
minHeap.insert(20)
minHeap.insert(2)
console.log(minHeap)
