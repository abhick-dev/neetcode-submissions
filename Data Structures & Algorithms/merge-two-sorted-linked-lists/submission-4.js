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
     * @param {ListNode} list1
     * @param {ListNode} list2
     * @return {ListNode}
     */
    mergeTwoLists(list1, list2) {
        const mergedNode = new ListNode(0);
        let movingPointer = mergedNode;


        while(list1 != null || list2 != null) {

            if(list1 === null ){
                movingPointer.next = new ListNode(list2.val);
                list2 = list2.next;

            } else if(list2 === null) {
                movingPointer.next = new ListNode(list1.val);
                list1 = list1.next;

            } else if(list1.val<=list2.val){
                movingPointer.next = new ListNode(list1.val);
                list1 = list1.next;

            } else if(list2.val<=list1.val){
                movingPointer.next = new ListNode(list2.val);
                list2 = list2.next;
            }
            movingPointer = movingPointer.next;

        }
        return mergedNode.next;
    }
}
