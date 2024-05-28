/**
 * 散列表
 */
// 取余数 1000%1013 = 1000 - （1000/1013）取商（整数部分）* 1013
class HashTable {
    constructor() {
        this.hashTable = [];
        this.count = 0;
        this.limit = 1017;// 使用余数可以最大限制当前容器，最大个数1016因为1017%1017=0，1016%1017=1016
    }

    // 生成hash值
    getHash(key, limit) {
        let newKey = key.toString();
        let hash = 5381; // 大部分实现均使用的这个值，使用其他的也可以
        for (let i = 0; i < newKey.length; i++) {
            hash += newKey[i].charCodeAt(0);
        }
        return hash % limit;
    }

    // 哈希表扩容
    resize(newLimit) {
        // 1. 保存旧的内容到oldHashTable
        const oldHashTable = this.hashTable;
        // 2. 重置所有的属性
        this.hashTable = [];
        this.count = 0;
        this.limit = newLimit;
        // 3. 遍历oldHashTable中的所有bucket
        for (let i = 0; i < oldHashTable.length; i++) {
            let bucket = oldHashTable[i];
            // 4. 若没有数据则continue
            if (bucket == null) {
                continue
            }
            // 5. 若有数据取出重新插入（因为我们的所有属性这时的limit也已经重置了，因此不用担心产生递归问题）
            for (let j = 0; j < bucket.length; j++) {
                let element = bucket[j];
                this.put(element[0], element[1])
            }
        }
    }

    // 判断是否为质数
    isPrime(num) {
        let temp = Math.sqrt(num);
        for (let i = 2; i <= temp; i++) {
            if (num % i === 0) {
                return false
            }
        }
        return true
    }

    // 获取质数的方法
    getPrime(num) {
        while (!this.isPrime(num)) {
            num++
        }
        return num
    }

    // 添加或修改
    put(key, value) {
        let index = this.getHash(key, this.limit);
        if (!this.hashTable[index]) {
            this.hashTable[index] = [];
        }
        let item = this.hashTable[index]
        let state = true;
        for (let i = 0; i < item.length; i++) {
            if (item[i][0] === key) {
                item[i][1] = value
                state = false;
                return
            }
        }
        if (state) {
            item.push([key, value])
        }
        this.count += 1;
        if (this.count / this.limit > 0.75) {
            let newLimit = this.limit * 2
            let newNum = this.getPrime(newLimit);
            this.resize(newNum)
        }
    }

    // 根据键获取
    get(key) {
        let index = this.getHash(key, this.limit);
        let item = this.hashTable[index];
        if (!item || item.length === 0) {
            return null;
        }
        for (let i = 0; i < item.length; i++) {
            if (item[i][0] === key) {
                return item[i][1];
            }
        }
        return null;
    }

    // 根据键删除
    del(key) {
        let index = this.getHash(key, this.limit);
        let item = this.hashTable[index];
        if (!item || item.length === 0) {
            return false;
        }
        for (let i = 0; i < item.length; i++) {
            if (item[i][0] === key) {
                item[i].splice(i, 1);
                this.count -= 1;
                if (this.limit > 1017 && this.count / this.limit < 0.25) {
                    this.resize(Math.floor(this.limit / 2));
                }
                return true;
            }
        }
        return false;
    }

    // 哈希表是否为空
    isEmpty() {
        return this.count === 0;
    }

    // 哈希表中元素的个数
    size() {
        return this.count;
    }
}

let hashTable = new HashTable();
hashTable.put('a', '1')
hashTable.put('a123', '2')
hashTable.put('b1', '3')
hashTable.put('cw', '4')
console.log(hashTable)
console.log(hashTable.get('a'))
hashTable.del('b')
console.log(hashTable)
console.log(hashTable.get('b'))
