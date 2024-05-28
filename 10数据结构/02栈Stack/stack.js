/**
 * 栈(基于数组实现)
 */
class Stack {
    constructor() {
        this.arr = [];
    }

    // 元素入栈
    push(item) {
        this.arr.push(item);
    }

    // 元素出栈
    pop() {
        this.arr.pop();
    }

    // 返回栈底元素
    front() {
        return this.arr[0];
    }

    // 返回栈顶元素
    peek() {
        return this.arr[this.arr.length];
    }

    // 返回栈的长度
    length() {
        return this.arr.length;
    }

    // 栈是否为空
    isEmpty() {
        return this.arr.length === 0;
    }

    // 清空栈
    clear() {
        this.arr = [];
    }
}
