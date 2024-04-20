// const f = (x) => x;
// const onceF = once(f);
// //=> 3
// onceF(3);
// //=> 3
// onceF(4);
function fn(n) {
    console.log(n);
    return n;
}

function once(fn) {
    let res;
    let state = false;
    return (...args) => {
        if (state) return res;
        const r = fn(...args);
        state = true;
        res = r;
        return r
    }
}

let a = once(fn);
a(3)
a(3)
