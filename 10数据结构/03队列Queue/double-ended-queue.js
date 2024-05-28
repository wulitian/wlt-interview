/**
 * 双端队列(基于数组实现)
 */
class DoubleEndedQueue {
    constructor() {
        this.arr = [];
    }

    // 队首入队
    addFront(element) {
        this.arr.push(element)
    }
    // 队尾入队
    addEnd(element) {
        this.arr.unshift(element)
    }
    // 队首出队
    removeFront() {
        return this.arr.pop();
    }
    // 队尾出队
    removeEnd() {
        return this.arr.shift();
    }

    // 返回堆首元素
    peekFront() {
        return this.arr[this.arr.length];
    }

    // 返回堆尾元素
    peekEnd() {
        return this.arr[0]
    }

    // 判断队列是否为空
    isEmpty() {
        return this.arr.length === 0;
    }

    // 队列长度
    size() {
        return this.arr.length;
    }

    // 清空队列
    clear() {
        this.arr = [];
    }

    // 队列转字符串
    toString() {
        return this.arr.join('=>')
    }
}

module.exports = DoubleEndedQueue
