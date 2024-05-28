/**
 * ջ(��������ʵ��)
 */
class Stack {
    constructor() {
        this.arr = [];
    }

    // Ԫ����ջ
    push(item) {
        this.arr.push(item);
    }

    // Ԫ�س�ջ
    pop() {
        this.arr.pop();
    }

    // ����ջ��Ԫ��
    front() {
        return this.arr[0];
    }

    // ����ջ��Ԫ��
    peek() {
        return this.arr[this.arr.length];
    }

    // ����ջ�ĳ���
    length() {
        return this.arr.length;
    }

    // ջ�Ƿ�Ϊ��
    isEmpty() {
        return this.arr.length === 0;
    }

    // ���ջ
    clear() {
        this.arr = [];
    }
}
