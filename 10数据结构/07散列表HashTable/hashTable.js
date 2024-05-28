/**
 * ɢ�б�
 */
// ȡ���� 1000%1013 = 1000 - ��1000/1013��ȡ�̣��������֣�* 1013
class HashTable {
    constructor() {
        this.hashTable = [];
        this.count = 0;
        this.limit = 1017;// ʹ����������������Ƶ�ǰ������������1016��Ϊ1017%1017=0��1016%1017=1016
    }

    // ����hashֵ
    getHash(key, limit) {
        let newKey = key.toString();
        let hash = 5381; // �󲿷�ʵ�־�ʹ�õ����ֵ��ʹ��������Ҳ����
        for (let i = 0; i < newKey.length; i++) {
            hash += newKey[i].charCodeAt(0);
        }
        return hash % limit;
    }

    // ��ϣ������
    resize(newLimit) {
        // 1. ����ɵ����ݵ�oldHashTable
        const oldHashTable = this.hashTable;
        // 2. �������е�����
        this.hashTable = [];
        this.count = 0;
        this.limit = newLimit;
        // 3. ����oldHashTable�е�����bucket
        for (let i = 0; i < oldHashTable.length; i++) {
            let bucket = oldHashTable[i];
            // 4. ��û��������continue
            if (bucket == null) {
                continue
            }
            // 5. ��������ȡ�����²��루��Ϊ���ǵ�����������ʱ��limitҲ�Ѿ������ˣ���˲��õ��Ĳ����ݹ����⣩
            for (let j = 0; j < bucket.length; j++) {
                let element = bucket[j];
                this.put(element[0], element[1])
            }
        }
    }

    // �ж��Ƿ�Ϊ����
    isPrime(num) {
        let temp = Math.sqrt(num);
        for (let i = 2; i <= temp; i++) {
            if (num % i === 0) {
                return false
            }
        }
        return true
    }

    // ��ȡ�����ķ���
    getPrime(num) {
        while (!this.isPrime(num)) {
            num++
        }
        return num
    }

    // ��ӻ��޸�
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

    // ���ݼ���ȡ
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

    // ���ݼ�ɾ��
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

    // ��ϣ���Ƿ�Ϊ��
    isEmpty() {
        return this.count === 0;
    }

    // ��ϣ����Ԫ�صĸ���
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
