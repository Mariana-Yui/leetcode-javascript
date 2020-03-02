/*
 * @lc app=leetcode.cn id=54 lang=javascript
 *
 * [54] 螺旋矩阵
 *
 * https://leetcode-cn.com/problems/spiral-matrix/description/
 *
 * algorithms
 * Medium (38.84%)
 * Likes:    312
 * Dislikes: 0
 * Total Accepted:    43.1K
 * Total Submissions: 111K
 * Testcase Example:  '[[1,2,3],[4,5,6],[7,8,9]]'
 *
 * 给定一个包含 m x n 个元素的矩阵（m 行, n 列），请按照顺时针螺旋顺序，返回矩阵中的所有元素。
 *
 * 示例 1:
 *
 * 输入:
 * [
 * ⁠[ 1, 2, 3 ],
 * ⁠[ 4, 5, 6 ],
 * ⁠[ 7, 8, 9 ]
 * ]
 * 输出: [1,2,3,6,9,8,7,4,5]
 *
 *
 * 示例 2:
 *
 * 输入:
 * [
 * ⁠ [1, 2, 3, 4],
 * ⁠ [5, 6, 7, 8],
 * ⁠ [9,10,11,12]
 * ]
 * 输出: [1,2,3,4,8,12,11,10,9,5,6,7]
 *
 *
 */

// @lc code=start
/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
let spiralOrder = function(matrix) {
    if (!matrix.length) return []
    if (!matrix[0].length) return []
    const result = []
    result.push(...matrix.shift())
    for (let i = 0, len = matrix.length; i < len - 1; i++) {
        result.push(matrix[i].pop())
    }
    const pop = matrix.pop()
    pop && result.push(...pop.reverse())
    for (let len = matrix.length, i = len - 1; i >= 0; i--) {
        //需要判断有没有值,空数组shift()是undefined
        matrix[i].length > 0 && result.push(matrix[i].shift())
    }
    return result.concat(spiralOrder(matrix))
}
// @lc code=end
