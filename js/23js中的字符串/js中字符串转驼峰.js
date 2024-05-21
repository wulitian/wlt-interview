let str = 'border-bottom-color';
let strRg = str.replace(/\-([a-z])/g, (val,val2)=>{
    return val2.toUpperCase()
})
console.log(strRg);
