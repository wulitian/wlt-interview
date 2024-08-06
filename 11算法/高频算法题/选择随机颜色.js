/**
 * 完成一个颜色池类
 * 功能说明：
 * 1. 支持初始化定义颜色池数据
 * 2. 支持调用pick接口随机返回一个颜色，尽可能保证颜色与之前的取色不重复
 */
class ColorPool {
    constructor(pool) {
        this.pool = pool;
        this.pool2 = JSON.parse(JSON.stringify(pool));
    }
    /**
     * 从颜色池中随机返回一个颜色，尽可能保证颜色与之前的取色不重复
     * @return color
     */
    pick() {
        let len = this.pool.length;
        if (len === 0) {
            this.pool = [...this.pool2];
        }
        let colorIndex = Math.floor(Math.random() * len)
        return this.pool.splice(colorIndex, 1)
    }
}

// 测试用例：
const colorPool = new ColorPool(["#111", "#222", "#333", "#444", "#555", "#666", "#777", "#888"]);

console.log(colorPool.pick()); // => #333
console.log(colorPool.pick()); // => #333
console.log(colorPool.pick()); // => #333
console.log(colorPool.pick()); // => #333
console.log(colorPool.pick()); // => #333
console.log(colorPool.pick()); // => #333
console.log(colorPool.pick()); // => #333
console.log(colorPool.pick()); // => #333
console.log(colorPool.pick()); // => #333


