/**
 * 双向链表
 */
class Node {
    constructor(element) {
        this.element = element;
        this.prev = null;
        this.next = null;
    }
}

class DoubleLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    // 添加
    add(element) {
        const node = new Node(element);
        if (this.head == null) {
            this.head = node;
        } else {
            let current = this.head;
            while (current.next) {
                current = current.next;
            }
            node.prev = current;
            current.next = node;
        }
        this.tail = node
        this.length++
    }

    // 删除节点
    remove(element) {
        let position = this.getPosition(element);
        this.removeAt(position);
    }

    // 删除当前位置节点
    removeAt(position) {
        if (position >= this.length) {
            return null
        }
        let prevNode = this.getNode(position - 1);
        let lastNode = prevNode.next.next
        prevNode.next = lastNode;
        lastNode.prev = prevNode
    }

    // 插入
    insert(position, element) {
        let node = new Node(element)
        if (position === this.length) {
            this.add(element)
            return
        } else if (position === 0) {
            let current = this.head
            current.prev = node
            node.next = current
        } else {
            let prevNode = this.getNode(position - 1);
            node.next = prevNode.next.next
            prevNode.next = node;
            node.prev = prevNode
        }
        this.length++
    }

    // 获取当前位置节点
    getNode(position) {
        if (position > this.length) {
            return null;
        }
        let current = this.head;
        for (let i = 0; i < position; i++) {
            current = current.next
        }
        return current;
    }

    // 获取当前节点位置
    getPosition(element) {
        let current = this.head;
        for (let i = 0; i < this.length; i++) {
            if (current.element === element) {
                return i
            }
            current = current.next
        }
        return -1

    }

    // 链表是否为空
    isEmpty() {
        return this.length === 0;
    }

    // 链表长度
    size() {
        return this.length;
    }

    // 反向打印链表
    reverseToString() {
        let current = this.tail
        let arr = []
        while (current) {
            arr.push(current.element)
            current = current.prev
        }
        return arr.join(',')
    }

    // 打印链表
    toString() {
        let current = this.head
        let arr = []
        while (current) {
            arr.push(current.element)
            current = current.next
        }
        return arr.join(',')
    }
}

let doubleLinkedList = new DoubleLinkedList();
doubleLinkedList.add("1");
doubleLinkedList.add("2");
doubleLinkedList.add("3");
doubleLinkedList.add("4");
doubleLinkedList.add("5");
doubleLinkedList.removeAt("2");
doubleLinkedList.remove("4");
console.log(doubleLinkedList)
console.log(doubleLinkedList.toString())
console.log(doubleLinkedList.reverseToString())

