const fs = require('fs')
const promisify = (fn) => {
    return (...args) => {
        return new Promise((resolve, reject) => {
            fn(...args, (err, data)=>{
                if(err) {
                    reject(err)
                }
                resolve(data)
            })
        })
    }
}

// fs.readFile('./index.html', function(err,val){
//     if(err) {
//         return new Error('读取错误')
//     }
//     console.log(val.toString())
// })

let read = promisify(fs.readFile);
read('./index.html').then((res)=>{
    console.log(res.toString())
},(err)=>{
    console.log(err)
})
