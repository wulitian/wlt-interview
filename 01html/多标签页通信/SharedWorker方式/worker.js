const pages = [];
const ports = [];

self.onconnect = (e) => {
    const port = e.ports[0];
    ports.push(port);

    // ��ȡҳ���ʶ
    const page = Math.random().toString(36).substr(2);
    pages.push(page);

    // ������Ϣ
    port.onmessage = (e) => {
        const index = ports.indexOf(port);
        const page = pages[index];

        // �����Ϳ���֪�����ĸ�ҳ�淢������Ϣ��
        console.log(page);
        ports.forEach((item)=>{
            item.postMessage(e.data);
        })
    };

};


