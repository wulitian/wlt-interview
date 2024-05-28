/**
 * ����
 */
class MySet {
    constructor() {
        this.set = {};
    }

    // ��ӽڵ�
    add(element) {
        this.set[element] = element;
    }

    // ɾ���ڵ�
    del(element) {
        if (this.has(element)) {
            delete this.set[element];
            return true;
        }
        return false;
    }

    // �Ƿ���ڸýڵ�
    has(element) {
        if (this.set[element]) {
            return true;
        }
        return false;
    }

    // ���
    clear() {
        this.set = {};
    }

    // ����
    size() {
        return Object.keys(this.set).length;
    }

    // �Ƿ��ǿ�
    isEmpty() {
        return Object.keys(this.set).length === 0;
    }

    // ȫ����ֵ
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
