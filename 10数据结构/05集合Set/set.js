/**
 * 集合
 */
class MySet {
    constructor() {
        this.set = {};
    }

    // 添加节点
    add(element) {
        this.set[element] = element;
    }

    // 删除节点
    del(element) {
        if (this.has(element)) {
            delete this.set[element];
            return true;
        }
        return false;
    }

    // 是否存在该节点
    has(element) {
        if (this.set[element]) {
            return true;
        }
        return false;
    }

    // 清空
    clear() {
        this.set = {};
    }

    // 长度
    size() {
        return Object.keys(this.set).length;
    }

    // 是否是空
    isEmpty() {
        return Object.keys(this.set).length === 0;
    }

    // 全部的值
    values() {
        return Object.values(this.set)
    }
}

let set = new MySet();
set.add(1)
set.add(2)
set.add(3)
console.log(set)
console.log(set.has(1))
console.log(set.values())
console.log(set.size())
set.del(1)
console.log(set)
console.log(set.has(1))
