// 用邻接表的方法表示图

class Graph {
    constructor() {
        this.vertexes = [];
        this.deges = new Map;
    }

    // 添加顶点
    addVertex(v) {
        this.vertexes.push(v);
        this.deges.set(v, []);
    }

    // 添加边
    addEdge(v1, v2) {
        this.deges.get(v1).push(v2);
        this.deges.get(v2).push(v1);
    }

    // 白色：表示该顶点还没有被访问过；
    // 灰色：表示该顶点被访问过，但其相邻顶点并未完全被访问过；
    // 黑色：表示该顶点被访问过，且其所有相邻顶点都被访问过；
    initializeColor() {
        let colors = []
        for (let i = 0; i < this.vertexes.length; i++) {
            colors[this.vertexes[i]] = 'white';
        }
        return colors
    }

    // 广度优先遍历
    bfs(initNode) {
        let colors = this.initializeColor();
        let res = [];
        let queue = [];
        queue.push(initNode);
        while (queue.length > 0) {
            let v = queue.shift();
            const currentArr = this.deges.get(v);
            if(colors[v]!=='black'){
                colors[v] = "gray";
            }
            for (let i = 0; i < currentArr.length; i++) {
                let node = currentArr[i];
                if (colors[node] === 'white') {
                    queue.push(node);
                }
            }
            if(colors[v] === "gray") {
                res.push(v);
            }
            colors[v] = "black";
        }
        return res;
    }

    // 深度优先遍历
    dfs(initNode) {
        let colors = this.initializeColor();
        let res = [];
        let stack = [];
        stack.push(initNode);
        while (stack.length > 0) {
            let v = stack.pop();
            const currentArr = this.deges.get(v);
            if(colors[v]!=='black'){
                colors[v] = "gray";
            }
            for (let i = currentArr.length - 1; i >= 0; i--) {
                let node = currentArr[i];
                if (colors[node] === 'white') {
                    stack.push(node);
                }
            }
            if(colors[v] === "gray") {
                res.push(v);
            }
            colors[v] = "black";
        }
        return res;
    }

    // 打印字符串
    toString() {
        let str = ''
        this.vertexes.forEach(item => {
            str += item + '->>' + Object.values(this.deges.get(item)).join(' ') + '\n'
        })
        return str;
    }
}

//1.创建图结构
let graph = new Graph();
//2.添加顶点
let myVertexes = ["A", "B", "C", "D", "E", "F", "G", "H", "I"];
for (let i = 0; i < myVertexes.length; i++) {
    graph.addVertex(myVertexes[i]);
}
//3.添加边
graph.addEdge("A", "B");
graph.addEdge("A", "C");
graph.addEdge("A", "D");
graph.addEdge("C", "D");
graph.addEdge("C", "G");
graph.addEdge("D", "G");
graph.addEdge("D", "H");
graph.addEdge("B", "E");
graph.addEdge("B", "F");
graph.addEdge("E", "I");
console.log(graph.toString());
console.log(graph.bfs('A'))
console.log(graph.dfs('A'))
