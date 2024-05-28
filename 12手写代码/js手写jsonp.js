const http = require("http");
const url = require("url");
const qs = require("querystring");
function parseSearchArgs() {
    var url = location.search; //获取url中"?"符后的字串
    var rst = {};
    if (url.indexOf("?") != -1) {
        var str = url.substr(1);
        var parts = str.split("&");
        for(var i = 0; i < parts.length; i++) {
            rst[parts[i].split("=")[0]]=decodeURI(parts[i].split("=")[1]);
        }
    }
    return rst;
}
const server = http.createServer((req, res) => {
    const { pathname, query } = url.parse(req.url);
    const params = JSON.parse(Object.keys(qs.parse(query))[0])
    const data = { name: "wulitian", id: params.id };
    if (params.callback) {
        str = `${params.callback}(${JSON.stringify(data)})`;
        console.log(str)
        res.end(str);
    } else {
        res.end();
    }
});

server.listen(10010, () => console.log("Done"));
