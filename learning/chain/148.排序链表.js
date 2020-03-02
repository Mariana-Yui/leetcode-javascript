/* eslint-disable no-unused-vars */
/* eslint-disable no-irregular-whitespace */
/*
 * @lc app=leetcode.cn id=148 lang=javascript
 *
 * [148] 排序链表
 *
 * https://leetcode-cn.com/problems/sort-list/description/
 *
 * algorithms
 * Medium (63.98%)
 * Likes:    428
 * Dislikes: 0
 * Total Accepted:    43.2K
 * Total Submissions: 67.6K
 * Testcase Example:  '[4,2,1,3]'
 *
 * 在 O(n log n) 时间复杂度和常数级空间复杂度下，对链表进行排序。
 *
 * 示例 1:
 *
 * 输入: 4->2->1->3
 * 输出: 1->2->3->4
 *
 *
 * 示例 2:
 *
 * 输入: -1->5->3->4->0
 * 输出: -1->0->3->4->5
 *
 */

// @lc code=start
//  Definition for singly-linked list.

function ListNode(val) {
    this.val = val
    this.next = null
}

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
let sortList = function(head) {
    //归并排序
    const sort = (head) => {
        if (head === null || head.next === null) return head
        let pre = head,
            slow = head,
            fast = head
        // fast步伐是slow的两倍用于找到中间位置,pre记录中间位置
        while (fast !== null && fast.next !== null) {
            pre = slow
            slow = slow.next
            fast = fast.next.next
        }
        pre.next = null //截断
        return merge(sort(head), sort(slow))
    }
    const merge = (node1, node2) => {
        const dummy = new ListNode(-1)
        let cur = dummy
        while (node1 !== null && node2 !== null) {
            if (node1.val < node2.val) {
                cur.next = node1
                node1 = node1.next
            } else {
                cur.next = node2
                node2 = node2.next
            }
            cur = cur.next
        }
        if (node1 !== null) cur.next = node1
        if (node2 !== null) cur.next = node2
        return dummy.next
    }
    return sort(head)
}
// @lc code=end
