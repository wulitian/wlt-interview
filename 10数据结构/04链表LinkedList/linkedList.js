/**
 * 普通链表
 */
class Node {
    constructor(element) {
        this.element = element;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.length = 0;
    }

    // 添加节点
    add(element) {
        console.log(element)
        let node = new Node(element);
        if (!this.head) {
            this.head = node;
        } else {
            this.getNode(this.length).next = node
        }
        ++this.length;
    }

    // 删除节点
    remove(element) {
        this.removeAt(this.getPosition(element))
    }

    // 删除索引位置节点
    removeAt(position) {
        if (position < 0 || position > this.length) {
            return new Error('不存在当前索引')
        }
        if (position === 0) {
            const current = this.head;
            this.head = current.next;
        } else {
            const current = this.getNode(position - 1);
            current.next = current.next.next;
        }
        this.length--;
    }

    // 插入节点
    insert(position, element) {
        if (position < 0 || position > this.length) {
            return new Error('不存在当前索引')
        }
        let node = new Node(element);
        if (position === 0) {
            node.next = this.head;
        } else {
            const current = this.getNode(position - 1);
            const currentNext = current.next;
            current.next = node;
            node.next = currentNext;
        }
        this.length++;
    }

    // 获取节点位置
    getPosition(element) {
        if (!this.head) {
            return -1
        }
        let current = this.head;
        if (current.element === element) {
            return 1
        }
        let index = -1;
        for (let i = 1; i < this.length; i++) {
            if (current.next.element === element) {
                index = i + 1
            }
            current = current.next;
        }
        return index;
    }

    // 获取位置节点
    getNode(position) {
        let current = this.head;
        for (let i = 0; i < position - 1; i++) {
            current = current.next
        }
        return current;
    }

    // 是否为空
    isEmpty() {
        return this.length === 0;
    }

    // 链表长度
    size() {
        return this.length;
    }

    // 清空链表
    clear() {
        this.head = null;
        this.length = 0;
    }

    // 打印链表
    toString() {
        let head = this.head
        let obj = head && head.element ? [head.element] : [];
        for (let i = 0; i < this.length - 1; i++) {
            obj.push(head.next.element);
            head = head.next
        }
        return obj.join('=>');
    }
}

let linkedList = new LinkedList();
linkedList.add("1")
linkedList.add("2")
linkedList.add("3")
linkedList.add("4")
linkedList.add("5")
linkedList.remove("5")
linkedList.removeAt("4")
console.log(linkedList.getNode("3"))
console.log(linkedList.getPosition("3"))
console.log(linkedList.toString())
console.log(linkedList.size())
console.log(linkedList.isEmpty())
linkedList.clear()
linkedList.toString()
