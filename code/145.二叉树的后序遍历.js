/*
 * @lc app=leetcode.cn id=145 lang=javascript
 *
 * [145] 二叉树的后序遍历
 *
 * https://leetcode-cn.com/problems/binary-tree-postorder-traversal/description/
 *
 * algorithms
 * Hard (70.37%)
 * Likes:    233
 * Dislikes: 0
 * Total Accepted:    54.8K
 * Total Submissions: 77.8K
 * Testcase Example:  '[1,null,2,3]'
 *
 * 给定一个二叉树，返回它的 后序 遍历。
 *
 * 示例:
 *
 * 输入: [1,null,2,3]
 * ⁠  1
 * ⁠   \
 * ⁠    2
 * ⁠   /
 * ⁠  3
 *
 * 输出: [3,2,1]
 *
 * 进阶: 递归算法很简单，你可以通过迭代算法完成吗？
 *
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var postorderTraversal = function(root) {
    // recursion
    /* if (root === null) return []
    let result = []
    if (root.left !== null) result = result.concat(postorderTraversal(root.left))
    if (root.right !== null) result = result.concat(postorderTraversal(root.right))
    result.push(root.val)
	return result */
    // iteration
    if (root === null) return []
    const stack = [root]
    const result = []
    while (stack.length > 0) {
        if (root.left !== null) {
            stack.push(root.left)
            root = root.left
        } else {
            const node = stack.pop()
            if (node.right) {
                root = node.right
                // important, 再次进栈时需要把right置为null
                node.right = null
                stack.push(node, root)
            } else {
                result.push(node.val)
            }
        }
    }
    return result
}
// @lc code=end
