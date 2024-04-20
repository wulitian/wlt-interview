// const template = '{{ user["name"] }}，今天你又学习了吗 - 用户ID: {{ user.id }}';
// const data = {
//     user: {
//         id: 520,
//         name: "雾里天",
//     },
// };
//
// //=> "雾里天，今天你又学习了吗 - 用户ID: 520"
// render(template, data);
const template = '{{ user["name"] }}，今天你又学习了吗 - 用户ID: {{ user.id }}';
const data = {
    user: {
        id: 520,
        name: "雾里天",
    },
};

function render(template, data) {
    const res = template.replace(/\{\{(\s+\w+((\.\w+)|(\["\w+"\]|\['\w+'\]))\s+)\}\}/g,(...args)=>{
        let str = args[0].slice(2,-2).trim();
        // 方法一
        return Function(`return this.${str}`).call(data);
        // 方法二
        // let a = `data.${str}`
        // return eval(a)
    });
    return res;
}
console.log(render(template, data));
