/*
 * 最小堆
 */
class MinHeap {
    constructor() {
        this.heap = [];
    }
    swap(i, j) {
        const temp = this.heap[i];
        this.heap[i] = this.heap[j];
        this.heap[j] = temp;
    }
    /**
     * @description 子元素获取父元素节点
     * @param {*} i
     * @return {*}
     */
    getParentIndex(i) {
        return (i - 1) >> 1;
    }
    /**
     * @description 父元素获取左节点
     * @param {*} i
     * @return {*}
     */
    getLeftIndex(i) {
        return i * 2 + 1;
    }
    /**
     * @description 父元素获取右节点
     * @param {*} i
     * @return {*}
     */
    getRightIndex(i) {
        return i * 2 + 2;
    }
    /**
     * @description 元素上移，一直找到最小元素位置
     * @param {*} index
     * @return {*}
     */
    shiftup(index) {
        if (index === 0) {
            return;
        }
        const parentIndex = this.getParentIndex(index);
        if (this.heap[parentIndex] > this.heap[index]) {
            this.swap(parentIndex, index);
            this.shiftup(parentIndex);
        }
    }
    /**
     * @description 元素下移， 当删除元素的时候， 需要用最后的元素覆盖根元素， 然后从上到下移动
     * @param {*} index
     */
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
    /**
     * @description 插入元素
     * @param {*} value
     */
    insert(value) {
        this.heap.push(value);
        this.shiftup(this.heap.length - 1);
    }
    /**
     * @description 删除元素
     */
    pop() {
        this.heap[0] = this.heap.pop();
        this.shiftDown(0);
    }
    /**
     * @description 获取根元素
     * @return {*}
     */
    peek() {
        return this.heap[0];
    }
    /**
     * @description 当前长度
     * @return {*}
     */
    size() {
        return this.heap.length;
    }
}
