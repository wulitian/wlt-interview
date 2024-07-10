#### 深度优先算法dfs

```
{
    A: [B],
    B: [C, D],
    C: [E],
    D: [B],
    E: [A]
}
```
深度优先遍历 实现可以基于栈或者递归，通过白黑灰三种颜色记录节点的访问情况 ABCED
下面是解题模版
```
// 基于递归实现
const depth1 = (dom, nodeList) => {
  nodeList.push(dom.name)
  dom.children.forEach((element) => {
    depth1(element, nodeList)
  })
}
const nodeList = []
depth1(Dom, nodeList)
console.log(nodeList.join('=>'))
// 基于栈实现
const depth2 = (node) => {
  const stack = []
  const nodes = []
  if (node) {
      stack.push(node)
      while (stack.length) {
          //从栈顶弹出一个节点
          const item = stack.pop()
          nodes.push(item.name)
          while(item.children.length){
            //如果当前节点有子节点，子节点倒序压入栈，即左边的节点压在上面，右边节点压在下面，出栈达到从左向右的效果
            stack.push(item.children.pop())
          }
      }
  }
  return nodes.join('=>')
}
console.log(depth2(Dom)); 
```
