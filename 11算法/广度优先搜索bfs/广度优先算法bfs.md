#### 广度优先算法bfs

```
{
    A: [B],
    B: [C, D],
    C: [E],
    D: [B],
    E: [A]
}
```
广度优先遍历 实现可以基于队列，通过白黑灰三种颜色记录节点的访问情况 ABCDE
下面是解题模版
```
// 基于队列实现
const breadth = (dom) => {
  const queue = []
  const nodeList = []
  if (dom) {
    queue.push(dom)
    while (queue.length) {
      //从队列头部取出一个节点
      const item = queue.shift()
      nodeList.push(item.name)
      //子节点依次从队列尾部加入
      item.children.forEach((child) => {
        queue.push(child)
      })
    }
  }
  return nodeList
}
const result = breadth(dom)
console.log(result.join('=>'))
```
