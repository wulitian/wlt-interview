// JS深拷贝总结JS的原生方法不支持深拷贝，Object.assign和{...obj}都属于浅拷贝，下面我们讲解如何使用JS实现深拷贝。JSON.sringify 和 JSON.parse这是JS实现深拷贝最简单的方法了，原理就是先将对象转换为字符串，再通过JSON.parse重新建立一个对象。 但是这种方法的局限也很多：不能复制function、正则、Symbol循环引用报错 相同的引用会被重复复制
const obj = {
    re: /hello/,
    f() {
    },
    date: new Date(),
    map: new Map(),
    list: [1, 2, 3],
    a: 3,
    b: 4,
};
const obj2 = {loop2: obj, name: "obj2"};
let cp = JSON.parse(JSON.stringify(obj));
console.log(cp)
obj.loop = obj2;

function deepClone(source, cache = new WeakMap()) {
    if (typeof source !== 'object') {
        return source;
    }
    if (cache.has(source)) {
        return cache.get(source)
    }
    let res = new source.constructor();
    cache.set(source, res);

    if (source instanceof Array) {
        source.forEach(e => {
            res.push(deepClone(e, cache))
        })
    } else if (source instanceof Set) {
        for (const s of source) {
            res.add(deepClone(s, cache))
        }

    } else if (source instanceof Map) {
        for (const [k, v] of source) {
            res.set(k, deepClone(v, cache))
        }
    } else if (deepClone instanceof Object) {
        for (const k in source) {
            res[k] = deepClone(source[k], cache)
        }
    } else {
        res = new source.constructor(source)
    }
    return res;
}

console.log(deepClone(obj))
