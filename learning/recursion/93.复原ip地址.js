/*
 * @lc app=leetcode.cn id=93 lang=javascript
 *
 * [93] 复原IP地址
 *
 * https://leetcode-cn.com/problems/restore-ip-addresses/description/
 *
 * algorithms
 * Medium (45.91%)
 * Likes:    202
 * Dislikes: 0
 * Total Accepted:    27.5K
 * Total Submissions: 60K
 * Testcase Example:  '"25525511135"'
 *
 * 给定一个只包含数字的字符串，复原它并返回所有可能的 IP 地址格式。
 *
 * 示例:
 *
 * 输入: "25525511135"
 * 输出: ["255.255.11.135", "255.255.111.35"]
 *
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string[]}
 */
//let restoreIpAddresses =
export default function(s) {
    if (s.length > 12) return []
    const result = []
    const rec = (s, ip, level) => {
        if (!s) return false
        else if (level === 4 && Number(s) >= 0 && Number(s) <= 255) {
            if (s.length > 1 && s[0] === '0') return false
            ip.push(s)
            result.push(ip.join('.'))
            return true
        } else {
            for (let i = 1; i <= 3; i++) {
                const prev = Number(s.slice(0, i))
                const sprev = s.slice(0, i)
                if (sprev.length > 1 && sprev[0] === '0') return false
                if (prev >= 0 && prev <= 255) {
                    rec(s.slice(i), [...ip, sprev], level + 1)
                }
            }
        }
    }
    rec(s, [], 1)
    return result
}
// @lc code=end
