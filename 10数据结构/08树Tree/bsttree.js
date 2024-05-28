// ����������
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

    // ����
    insert(key) {
        let node = new Node(key);
        if (this.root == null) {
            this.root = node;
        } else {
            this.insertNode(this.root, node)
        }
    }

    // ����ڵ�
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

    // �Ƴ��ڵ�
    // �ҵ�����ڵ㣬�Ҳ���ֱ�ӷ���false���ҵ���֮����������
    // 1. �����������������ǿ�ֱ�ӽ���ǰ�ڵ㸳ֵΪnull
    // 2. ֻ����������ʱ����ǰ�Ƴ��Ľڵ��ֵ����Ϊ�����������ֵ��ֻ����������ʱ����ǰ�Ƴ��Ľڵ�ֵ����Ϊ���������ֵ��ͬʱ����Ӧ�������ڵ�����Ϊnull
    // 3. ͬʱ����������������������Ҫ����ǰ�ڵ��滻Ϊ�����������ֵ����������������Сֵ�������Ҫ��ѡ�񷽰��е���Сֵ�����ֵ�ڵ�����Ϊnull
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

    // �����ڵ�
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

    // �ڵ���Сֵ
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

    // �ڵ����ֵ
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

    // �������
    preOrder(current = this.root) {
        if (current != null) {
            console.log(current.key);
            this.preOrder(current.left)
            this.preOrder(current.right)
        }
    }

    // �������
    inOrder(current = this.root) {
        if (current != null) {
            this.inOrder(current.left)
            console.log(current.key);
            this.inOrder(current.right)
        }
    }

    // �������
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
