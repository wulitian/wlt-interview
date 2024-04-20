// const data = {
//  a: 3,
//  b: 4,
//  c: 5,
// };
// // 对 data 编码后得到 querystring 如下
// //=> 'a=3&b=4&c=5'
// stringify(data);
function stringify(data) {
    let paris = Object.entries(data);
    const qs = paris.map(([key, val]) => {
        let noValue = false;
        if (val === null || val === undefined || typeof val === "object") {
            noValue = true;
        }
        return `${encodeURIComponent(key)}=${noValue ? "" : encodeURIComponent(val)}`;
    }).join('&')
    return qs
}

// a=3&b=4
console.log(stringify({a: 3, b: 4}));

// a=3&b=
console.log(stringify({a: 3, b: null}));

// a=3&%E5%B1%B1=%E6%9C%88
console.log(stringify({a: 3, 雾: "里天"}));
