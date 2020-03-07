function CBT(root) {
    const queue = [root]
    let [leaf, left, right] = [false, null, null]
    while (queue.length > 0) {
        const head = queue.shift()
        left = head.left
        right = head.right
        if ((!left && right) || (leaf && !(left && right))) return false
        if (left) queue.push(left)
        if (right) queue.push(right)
        else leaf = true
    }
}

function BST(root) {
    if (!root || (!root.left && !root.right)) return true
    const left = root.left
    const right = root.right
    if (left) {
        if (left.val < root.val) {
            return BST(left)
        } else {
            return false
        }
    }
    if (right) {
        if (right.val > root.val) {
            return BST(right)
        } else {
            return false
        }
    }
}

function Node(val) {
    this.left = this.right = null
    this.val = val
}

const n1 = new Node(1)
const n2 = new Node(2)
const n3 = new Node(3)
const n4 = new Node(4)
const n5 = new Node(5)
const n6 = new Node(6)
const n7 = new Node(7)
n4.left = n6
n4.right = n2
n2.left = n1
n2.right = n3
n6.left = n5
n6.right = n7
console.log(BST(n4))
