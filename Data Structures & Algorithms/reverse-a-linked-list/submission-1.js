/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */

class Solution {
    /**
     * @param {ListNode} head
     * @return {ListNode}
     */
    reverseList(head) {
        let newHead = null;
        let currentHead = head;

        while(currentHead) {
            let temp = currentHead.next;
            currentHead.next = newHead;
            newHead = currentHead;
            currentHead = temp;
        }

        return newHead;
    }
}
