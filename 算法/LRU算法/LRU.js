// 基于Map实现Lru算法，LRU算法为最近最少使用算法
// Map是有序的，遍历的顺序和插入的顺序有关
class LRUCache {
    size = 5

    constructor(size) {
        this.cache = new Map()
        this.size = size || this.size
    }

    get(key) {
        if (this.cache.has(key)) {
            // 存在即更新
            let temp = this.cache.get(key)
            this.cache.delete(key)
            this.cache.set(key, temp)
            return temp
        }
        return null
    }

    set(key, value) {

        if (this.cache.has(key)) {
            this.cache.delete(key)
        }

        if (this.cache.size >= this.size) {
            console.log(this.cache.keys())
            console.log(this.cache.keys().next())
            this.cache.delete(this.cache.keys().next().value)
        }

        this.cache.set(key, value)
    }
}

let lruCache = new LRUCache(5);
lruCache.set('a', 1)
lruCache.set('b', 1)
lruCache.set('c', 1)
lruCache.set('d', 1)
lruCache.set('e', 1)
lruCache.set('f', 1)
console.log(lruCache.cache)
