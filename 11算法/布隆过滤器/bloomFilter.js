class BloomFilter {
    constructor(size, hashFunctions) {
        this.size = size; // �������Ĵ�С
        this.hashFunctions = hashFunctions; // ��ϣ����������
        this.filter = new Array(size).fill(false); // ��ʼ��һ����������
    }

    add(item) {
        for (const hashFunction of this.hashFunctions) {
            const index = hashFunction(item) % this.size;
            this.filter[index] = true;
        }
    }

    contains(item) {
        for (const hashFunction of this.hashFunctions) {
            const index = hashFunction(item) % this.size;
            if (!this.filter[index]) {
                return false;
            }
        }
        return true;
    }
}

// ʹ��ʾ��
const hashFunctions = [
    (item) => {
        let hash = 0;
        for (let i = 0; i < item.length; i++) {
            hash = (hash << 5) + item.charCodeAt(i);
        }
        return hash;
    },
    // ������Ӹ���Ĺ�ϣ����
];

const bloomFilter = new BloomFilter(100, hashFunctions);

bloomFilter.add("apple");
bloomFilter.add("orange");

console.log(bloomFilter.contains("apple"));   // true
console.log(bloomFilter.contains("banana"));  // false (��������)

