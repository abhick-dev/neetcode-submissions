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
        let toReplace = null;
        let item = head;

        while(item){
            let temp = item.next;
            item.next = toReplace;
            toReplace = item;
            item = temp;
        }

        return toReplace;
    }
}
