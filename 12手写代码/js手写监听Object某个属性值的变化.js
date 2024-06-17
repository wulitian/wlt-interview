// 实现监听对象并在读取与写入时提示用户正在读取或者正在写入某个属性
const obj = {
    name: 'wulitian',
    sex: '男'
}
const proxy = new Proxy(obj, {
    set(target, p, value, receiver) {
        console.log(`正在修改元素：将${p}属性设置为${value}`);
        obj[p] = value
    },
    get(target, p, receiver) {
        console.log(`正在获取：${p}`)
        return obj[p]
    }
})
console.log(proxy.name)
proxy.name = '123'
console.log(proxy)
