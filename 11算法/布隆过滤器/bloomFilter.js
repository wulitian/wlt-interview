class BloomFilter {
    constructor(size, hashFunctions) {
        this.size = size; // 过滤器的大小
        this.hashFunctions = hashFunctions; // 哈希函数的数组
        this.filter = new Array(size).fill(false); // 初始化一个布尔数组
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

// 使用示例
const hashFunctions = [
    (item) => {
        let hash = 0;
        for (let i = 0; i < item.length; i++) {
            hash = (hash << 5) + item.charCodeAt(i);
        }
        return hash;
    },
    // 可以添加更多的哈希函数
];

const bloomFilter = new BloomFilter(100, hashFunctions);

bloomFilter.add("apple");
bloomFilter.add("orange");

console.log(bloomFilter.contains("apple"));   // true
console.log(bloomFilter.contains("banana"));  // false (可能误判)

