let str = 'abcdef'
let a = str.replace(/abcd(?=ef)/, (val,val2)=>{
    console.log(val)
    return val.toUpperCase()
})
let b = str.replace(/abcd(?!gh)/, (val,val2)=>{
    console.log(val)
    return val.toUpperCase()
})
let c = str.replace(/(?<=abcd)ef/, (val,val2)=>{
    console.log(val)
    return val.toUpperCase()
})
let d = str.replace(/(?<!abc)ef/, (val,val2)=>{
    console.log(val)
    return val.toUpperCase()
})
let e = str.replace(/(?:abcd)(ef)/, (val,val2)=>{
    console.log(val)
    console.log(RegExp.$1)
    return val.toUpperCase()
})
