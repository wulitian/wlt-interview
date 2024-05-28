//=> ['a', 6]
// getFrequentChar("aaabbaaacc");
//=> ['a', 3]
// getFrequentChar("aaa");
function getFrequentChar(str) {
    const obj = {}
    str.split('').forEach((e)=>{
        if(!obj[e]) {
            obj[e] = 1;
        } else {
            obj[e] = ++obj[e];
        }
    })
    console.log(obj)
    return Object.entries(obj).reduce((x,y)=>{
        return y[1] > x[1] ? y : x
    })
}
console.log(getFrequentChar("aaabbaaacc"));
console.log(getFrequentChar("aaa"));
