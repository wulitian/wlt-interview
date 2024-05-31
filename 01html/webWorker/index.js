function calc(num) {
    let res = 0;
    for (let i = 0; i < num; i++) {
        res+=i;
    }
    self.postMessage(res)
}

self.onmessage = (e) =>{
    calc(e.data)
}
