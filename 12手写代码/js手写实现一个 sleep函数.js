function sleep(time) {
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve();
        },time)
    })
}
sleep(1000).then((res)=>{
    console.log(123)
})
