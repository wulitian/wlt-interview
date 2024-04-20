//const data = [
//   {userId: 8, title: 'title1'},
//   {userId: 11, title: 'other'},
//   {userId: 15, title: null},
//   {userId: 19, title: 'title2'}
// ];
//
// // 查找data中，符合where中条件的数据，并根据orderBy中的条件进行排序
// const result = find(data).where({
//   "title": /\d$/   // 这里意思是过滤出数组中，满足title字段中符合 /\d$/的项
// }).orderBy('userId', 'desc');  // 这里的意思是对数组中的项按照userId进行倒序排列
//
// //=> 返回 [{ userId: 19, title: 'title2'}, { userId: 8, title: 'title1' }];
// console.log(result.value);

class Find {
    constructor(data) {
        this.data = data;
    }

    where(obj) {
        this.data = this.data.filter((item) => {
            return Object.entries(obj).every(([key, value]) => {
                if (value instanceof RegExp) {
                    return value.test(item[key]);
                } else {
                    return item[key] === value;
                }
            });
        });
        return this
    }

    orderBy(key, type) {
        this.value.sort((a, b) => {
            return type !== "desc" ? a[key] - b[key] : b[key] - a[key]
        })
        return this
    }
    get value() {
        return this.data
    }
}
function find(data) {
    return new Find(data)
}
const data = [
  {userId: 8, title: 'title1'},
  {userId: 11, title: 'other'},
  {userId: 15, title: null},
  {userId: 19, title: 'title2'}
];
const result = find(data).where({title: /\d/}).orderBy('userId','desc').value
console.log(result)
