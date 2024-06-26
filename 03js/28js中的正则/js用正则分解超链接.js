// js用正则分解超链接
// 上次匹配的结果是由方法 RegExp.exec() 和 RegExp.test() 找到的，它们都以 lastIndex 属性所指的位置作为下次检索的起始点。这样，就可以通过反复调用这两个方法来遍历一个字符串中的所有匹配文本。
// 该属性是可读可写的。只要目标字符串的下一次搜索开始，就可以对它进行设置。当方法 exec() 或 test() 再也找不到可以匹配的文本时，它们会自动把 lastIndex 属性重置为 0。
// 重要事项：不具有标志 g 和不表示全局模式的 RegExp 对象不能使用 lastIndex 属性。
let str = '<a href="https://www.aaa.com/">超链接1</a><a href="https://www.bbb.com/?age=20">超链接2</a>';
function getUrl(str) {
    let reg = /<a href=([\"\'])([^'"]+)\1>([^'"]+)<\/a>/g;
    let arr = [];
    while (true) {
        reg.test(str);
        if (reg.lastIndex === 0) {
            break;
        }
        arr.push({name: RegExp.$3, url: RegExp.$2});
    }
    return arr;
}
console.log(getUrl(str));

