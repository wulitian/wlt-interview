/**
 * 队列(基于数组实现)
 */
class Queue {
    constructor() {
        this.arr = [];
    }
    // 入队
    enqueue(element){
        this.arr.push(element);
    }
    // 出队
    dequeue(){
        this.arr.unshift();
    }
    // 队头
    front(){
        return this.arr[0];
    }
    // 队尾
    end(){
        return this.arr[this.arr.length];
    }
    // 判断队列是否为空
    isEmpty(){
        return this.arr.length === 0;
    }
    // 清空队列
    clear() {
        this.arr = [];
    }
    // 队列长度
    size(){
        return this.arr.length;
    }
    // 队列转字符串
    toString(){
        return this.arr.join('=>')
    }
}

module.exports = Queue
