/*
 * @lc app=leetcode.cn id=41 lang=javascript
 *
 * [41] 缺失的第一个正数
 *
 * https://leetcode-cn.com/problems/first-missing-positive/description/
 *
 * algorithms
 * Hard (37.62%)
 * Likes:    402
 * Dislikes: 0
 * Total Accepted:    38.5K
 * Total Submissions: 102.4K
 * Testcase Example:  '[1,2,0]'
 *
 * 给定一个未排序的整数数组，找出其中没有出现的最小的正整数。
 *
 * 示例 1:
 *
 * 输入: [1,2,0]
 * 输出: 3
 *
 *
 * 示例 2:
 *
 * 输入: [3,4,-1,1]
 * 输出: 2
 *
 *
 * 示例 3:
 *
 * 输入: [7,8,9,11,12]
 * 输出: 1
 *
 *
 * 说明:
 *
 * 你的算法的时间复杂度应为O(n)，并且只能使用常数级别的空间。
 *
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
let firstMissingPositive = function(nums) {
    nums = nums.filter((val) => val > 0)
    if (!nums.length) return 1
    let i, len
    for (i = 0, len = nums.length; i < len; i++) {
        let k = i
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[j] < nums[k]) {
                k = j
            }
        }
        if (k !== i) {
            let tmp = nums[i]
            nums[i] = nums[k]
            nums[k] = tmp
        }
        if (nums[0] !== 1) return 1
        else if (i > 0 && nums[i] - nums[i - 1] !== 1 && nums[i] !== nums[i - 1])
            return nums[i - 1] + 1
    }
    return nums[len - 1] + 1
}
// @lc code=end
