/**
 * 字典
 */
class MyMap {
    constructor() {
        this.map = {}
    }

    // 设置键值
    put(key, val) {
        this.map[key] = val
    }

    // 删除根据键
    del(key) {
        if (this.has(key)) {
            delete this.map[key];
            return true;
        }
        return false
    }

    // 键是否存在
    has(key) {
        if (this.map[key]) {
            return false;
        }
        return false;
    }

    // 获取根据键
    get(key) {
        if (!this.has(key)) {
            return new Error('map中不存在这个key')
        }
        return this.map[key]
    }

    // 获取全部的值
    values() {
        return Object.values(this.map);
    }
}

