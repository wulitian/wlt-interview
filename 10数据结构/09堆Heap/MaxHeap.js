/**
 * 最大堆
 */
class MaxHeap {
    constructor() {
        this.heap = [];
    }

    // 交换元素
    swap(i, j) {
        [this.heap[i], this.heap[j]] = [this.heap[j], this.heap[i]]
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

    //  元素上移，一直找到最小元素位置
    shiftUp(index) {
        if (index === 0) {
            return false;
        }
        let parentIndex = this.getParentIndex(index);
        if (this.heap[index] > this.heap[parentIndex]) {
            this.swap(index, parentIndex);
            this.shiftUp(parentIndex);
        }
    }

    // 元素下移， 当删除元素的时候， 需要用最后的元素覆盖根元素， 然后从上到下移动
    shiftDown(index) {
        if (index >= this.heap.length) {
            return false;
        }
        let leftIndex = this.getLeftIndex(index);
        let rightIndex = this.getRightIndex(index);
        if (this.heap[index] < this.heap[leftIndex]) {
            this.swap(index, leftIndex);
            this.shiftUp(leftIndex)
        }
        if (this.heap[index] < this.heap[rightIndex]) {
            this.swap(index, rightIndex);
            this.shiftUp(rightIndex)
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
        return this.heap[0]
    }

    // 当前长度
    size() {
        return this.heap.length;
    }
}

let maxHeap = new MaxHeap();
maxHeap.insert(1)
maxHeap.insert(3)
maxHeap.insert(4)
maxHeap.insert(12)
maxHeap.insert(4)
maxHeap.insert(6)
maxHeap.insert(20)
maxHeap.insert(2)
console.log(maxHeap)
