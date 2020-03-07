/*
 * @lc app=leetcode.cn id=94 lang=javascript
 *
 * [94] 二叉树的中序遍历
 *
 * https://leetcode-cn.com/problems/binary-tree-inorder-traversal/description/
 *
 * algorithms
 * Medium (70.34%)
 * Likes:    412
 * Dislikes: 0
 * Total Accepted:    113.3K
 * Total Submissions: 160.9K
 * Testcase Example:  '[1,null,2,3]'
 *
 * 给定一个二叉树，返回它的中序 遍历。
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
 * 输出: [1,3,2]
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
var inorderTraversal = function(root) {
    // recursion
    /* if (root === null) return []
    let result = []
    if (root.left !== null) result = result.concat(inorderTraversal(root.left))
    result.push(root.val)
    if (root.right !== null) result = result.concat(inorderTraversal(root.right))
	return result */
    // iteration
    if (root === null) return []
    const stack = [root]
    const result = []
    while (stack.length) {
        if (root.left) {
            stack.push(root.left)
            root = root.left
        } else {
            const node = stack.pop()
            result.push(node.val)
            if (node.right) {
                root = node.right
                stack.push(root)
            }
        }
    }
    return result
}
// @lc code=end
