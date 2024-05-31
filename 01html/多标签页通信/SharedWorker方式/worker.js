const pages = [];
const ports = [];

self.onconnect = (e) => {
    const port = e.ports[0];
    ports.push(port);

    // 获取页面标识
    const page = Math.random().toString(36).substr(2);
    pages.push(page);

    // 监听消息
    port.onmessage = (e) => {
        const index = ports.indexOf(port);
        const page = pages[index];

        // 这样就可以知道是哪个页面发来的消息了
        console.log(page);
        ports.forEach((item)=>{
            item.postMessage(e.data);
        })
    };

};


