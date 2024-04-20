// const data = [{ value: 6 }, { value: 2 }, { value: 4 }];
//=> { value: 6 }
// maxBy(data, (x) => x.value);
// 返回一项
function maxBy(data, fn) {
    return data.reduce((x, y) => fn(x) > fn(y) ? x : y)
}
// 返回多项
const maxBy2 = (list, keyBy) => {
    return list.slice(1).reduce(
        (acc, x) => {
            if (keyBy(x) > keyBy(acc[0])) {
                return [x];
            }
            if (keyBy(x) === keyBy(acc[0])) {
                return [...acc, x];
            }
            return acc;
        },
        [list[0]],
    );
};
const data = [{value: 6}, {value: 6}, {value: 4}];
console.log(maxBy(data, (x) => x.value));
console.log(maxBy2(data, (x) => x.value));


