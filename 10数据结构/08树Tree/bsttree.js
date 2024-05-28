// 二叉搜索树
class Node {
    constructor(key) {
        this.left = null;
        this.key = key;
        this.right = null;
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null;
    }

    // 插入
    insert(key) {
        let node = new Node(key);
        if (this.root == null) {
            this.root = node;
        } else {
            this.insertNode(this.root, node)
        }
    }

    // 插入节点
    insertNode(node, newNode) {
        if (newNode.key < node.key) {
            if (node.left == null) {
                node.left = newNode;
                return true;
            } else {
                this.insertNode(node.left, newNode)
            }
        } else if (newNode.key > node.key) {
            if (node.right == null) {
                node.right = newNode;
                return true;
            } else {
                this.insertNode(node.right, newNode)
            }
        } else {
            return false
        }

    }

    // 移除节点
    // 找到这个节点，找不到直接返回false，找到了之后分三种情况
    // 1. 左子树与右子树都是空直接将当前节点赋值为null
    // 2. 只存在左子树时，当前移除的节点的值设置为这个右子树的值，只存在右子树时，当前移除的节点值设置为这个左子树值，同时将对应的子树节点设置为null
    // 3. 同时存在左子树与右子树，需要将当前节点替换为，左子树最大值，或者右子树的最小值，最后需要将选择方案中的最小值或最大值节点设置为null
    remove(key) {
        let current = null
        let currentParent = null
        let node = this.root
        while (node) {
            if (key === node.key) {
                current = node;
                break;
            } else if (key < node.key) {
                currentParent = node
                node = node.left;
            } else {
                currentParent = node
                node = node.right;
            }
        }
        if (current == null) return false;
        console.log('current', current)
        if (current.left == null && current.right == null) {
            if (currentParent.left.key === key) {
                currentParent.left = null
            } else {
                currentParent.right = null
            }
            return current;
        } else if (current.left == null) {
            if (currentParent.left.key === key) {
                currentParent.left = current.right
            } else {
                currentParent.right = current.right
            }
            return current;
        } else if (current.right == null) {
            if (currentParent.left.key === key) {
                currentParent.left = current.left
            } else {
                currentParent.right = current.left
            }
            return current;
        } else {
            let minNode = current.right
            let minNodeParent = current;
            while (minNode.left) {
                minNodeParent = minNode;
                minNode = minNode.left;
            }
            console.log(minNodeParent)
            current.key = minNode.key;
            minNode = null;
            if (minNodeParent.left.key === key) {
                minNodeParent.left = null;
            } else {
                minNodeParent.right = null;
            }
            return current;
        }
    }

    // 搜索节点
    search(key) {
        let state = false;
        let current = this.root
        if (current == null) {
            return state;
        }
        while (current) {
            if (key === current.key) {
                return true;
            } else if (key < current.key) {
                current = current.left;
            } else {
                current = current.right;
            }
        }
        return false;
    }

    // 节点最小值
    min() {
        let current = this.root;
        if (current == null) {
            return false;
        } else {
            while (current) {
                if (current.left == null) {
                    return current.key;
                }
                current = current.left
            }
        }
    }

    // 节点最大值
    max() {
        let current = this.root;
        if (current == null) {
            return false;
        } else {
            while (current) {
                if (current.right == null) {
                    return current.key;
                }
                current = current.right
            }
        }
    }

    // 先序遍历
    preOrder(current = this.root) {
        if (current != null) {
            console.log(current.key);
            this.preOrder(current.left)
            this.preOrder(current.right)
        }
    }

    // 中序遍历
    inOrder(current = this.root) {
        if (current != null) {
            this.inOrder(current.left)
            console.log(current.key);
            this.inOrder(current.right)
        }
    }

    // 后序遍历
    postOrder(current = this.root) {
        if (current != null) {
            this.inOrder(current.left)
            this.inOrder(current.right)
            console.log(current.key);
        }
    }
}

const binarySearchTree = new BinarySearchTree;
binarySearchTree.insert(11);
binarySearchTree.insert(6);
binarySearchTree.insert(12);
binarySearchTree.insert(4);
binarySearchTree.insert(9);
binarySearchTree.insert(10);
binarySearchTree.insert(7);
binarySearchTree.insert(8);
binarySearchTree.remove(11);
console.log(binarySearchTree)
console.log(binarySearchTree.search(1));
console.log(binarySearchTree.search(8));
console.log(binarySearchTree.search(7));
console.log(binarySearchTree.max());
console.log(binarySearchTree.min());
console.log(binarySearchTree)
// binarySearchTree.preOrder()
// binarySearchTree.inOrder()
binarySearchTree.postOrder()
