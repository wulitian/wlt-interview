import {getCurrentUrl} from "../utils";

class Timing {
    // 收集FP,FCP
    // FCP（First Contentful Paint）：FCP是指页面上首次渲染任何文本、图像、非空白的canvas或SVG的时间点。它表示了用户首次看到页面有实际内容的时间，即页面开始呈现有意义的内容的时间点。
    // FP（First Paint）：FP是指页面上首次渲染任何内容的时间点，包括背景颜色、图片、文本等。它表示了页面开始呈现任何可视化内容的时间，但不一定是有意义的内容。
    FP() {
        if (!!PerformanceObserver) {
            const observer = new PerformanceObserver((list) => {
                const entries = list.getEntries();
                entries.forEach(entry => {
                    if (entry.entryType === 'paint') {
                        if (entry.name === 'first-contentful-paint') {
                            console.log('首次内容绘制时间（First Contentful Paint）:', entry.startTime);
                        } else if (entry.name === 'first-paint') {
                            console.log('白屏时间（First Paint）:', entry.startTime);
                        }
                    }
                    const json = entry.toJSON()
                    const log = {
                        ...json,
                        subType: entry.name,
                        type: 'performance',
                        pageURL: getCurrentUrl(),
                    }
                    console.log(log)
                });
                observer.disconnect()
            });
            observer.observe({type: 'paint', buffered: true})
        }
    }

    // 收集LCP（Largest Contentful Paint）：最大内容绘制，即视口中最大的图像或文本块的渲染完成的时间点
    LCP() {
        if (!!PerformanceObserver) {
            const observer = new PerformanceObserver((list) => {
                const entries = list.getEntries();
                entries.forEach(entry => {
                    if (entry.entryType === 'largest-contentful-paint') {
                        console.log('最大内容绘制 LCP（Largest Contentful Paint）:', entry.startTime);
                    }
                    const json = entry.toJSON()
                    const log = {
                        ...json,
                        target: entry.element?.tagName,
                        name: entry.entryType,
                        subType: entry.entryType,
                        type: 'performance',
                        pageURL: getCurrentUrl(),
                    }
                    console.log(log)
                });
                observer.disconnect()
            });
            observer.observe({type: 'largest-contentful-paint', buffered: true})
        }
    }

    // 收集DOMContentLoaded：当HTML文档被完全加载和解析完成后，DOMContentLoaded事件被触发，无需等待样式表、图像和子框架的完成加载
    DOMContentLoaded() {
        function callback() {
            console.log('DOMContentLoaded:', performance.now());
            const log = {
                type: 'performance',
                subType: 'domContentLoaded',
                startTime: performance.now(),
            }
            console.log(log)
            window.removeEventListener('DOMContentLoaded', callback, true)
        }

        window.addEventListener('DOMContentLoaded', callback, true)
    }

    // 收集onload：当所有需要立即加载的资源（如图片和样式表）已加载完成时的时间点
    onload() {
        function callback() {
            console.log('load:', performance.now());
            const log = {
                type: 'performance',
                subType: 'load',
                startTime: performance.now(),
            }
            console.log(log)
            window.removeEventListener('load', callback, true)
        }

        window.addEventListener('load', callback, true)
    }

    // 收集资源加载时间
    resourceLoad() {
        if (!!PerformanceObserver) {
            const observer = new PerformanceObserver((list) => {
                const entries = list.getEntries();
                entries.forEach(entry => {
                    // console.log(entry)
                    const log = {
                        name: entry.name, // 资源名称
                        type: 'performance',
                        sourceType: entry.initiatorType, // 资源类型
                        duration: entry.duration, // 资源加载耗时
                        dns: entry.domainLookupEnd - entry.domainLookupStart, // DNS 耗时
                        tcp: entry.connectEnd - entry.connectStart, // 建立 tcp 连接耗时
                        redirect: entry.redirectEnd - entry.redirectStart, // 重定向耗时
                        ttfb: entry.responseStart, // 首字节时间
                        protocol: entry.nextHopProtocol, // 请求协议
                        responseBodySize: entry.encodedBodySize, // 响应内容大小
                        responseHeaderSize: entry.transferSize - entry.encodedBodySize, // 响应头部大小
                        resourceSize: entry.decodedBodySize, // 资源解压后的大小
                        startTime: performance.now(),
                    }
                    console.log(log)
                });
                observer.disconnect()
            });
            observer.observe({type: 'resource', buffered: true})
        }
    }

    // 监听接口信息
    injectXHR() {
        let XMLHttpRequest = window.XMLHttpRequest;
        let oldOpen = XMLHttpRequest.prototype.open;
        XMLHttpRequest.prototype.open = function (method, url, async) {
            if (!url.match(/logstores/) && !url.match(/sockjs/)) {
                this.logData = { method, url, async };
            }
            return oldOpen.apply(this, arguments);
        }
        let oldSend = XMLHttpRequest.prototype.send;
        XMLHttpRequest.prototype.send = function (body) {
            if (this.logData) {
                let startTime = Date.now();//在发送之前记录一下开始的时间
                //XMLHttpRequest  readyState 0 1 2 3 4
                //status 2xx 304 成功 其它 就是失败
                let handler = (type) => (event) => {
                    let duration = Date.now() - startTime;
                    let status = this.status;//200 500
                    let statusText = this.statusText;// OK Server Error
                    const log = {
                        kind: 'stability',
                        type: 'xhr',
                        eventType: type,//load error abort
                        pathname: this.logData.url,//请求路径
                        status: status + '-' + statusText,//状态码
                        duration,//持续时间
                        response: this.response ? JSON.stringify(this.response) : '',//响应体
                        params: body || ''
                    };
                    console.log(log)
                }
                this.addEventListener('load', handler('load'), false);
                this.addEventListener('error', handler('error'), false);
                this.addEventListener('abort', handler('abort'), false);
            }
            return oldSend.apply(this, arguments);
        }
    }

    init() {
        this.FP()
        this.LCP()
        this.DOMContentLoaded()
        this.onload()
        this.resourceLoad()
        this.injectXHR()
    }
}

export default Timing
