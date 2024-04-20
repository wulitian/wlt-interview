// const add10 = (x) => x + 10;
// const mul10 = (x) => x * 10;
// const add100 = (x) => x + 100;
// // (10 + 10) * 10 + 100 = 300
// flow(add10, mul10, add100)(10);
const add10 = (x) => x + 10;
const mul10 = (x) => x * 10;
const add100 = (x) => x + 100;

function flow(...fns) {
    return (...args)=>{
        return fns.reduce((x,y)=>{
            return y(x)
        },args[0])
    }
}
// (10 + 10) * 10 + 100 = 300
console.log(flow(add10, mul10, add100)(10));
