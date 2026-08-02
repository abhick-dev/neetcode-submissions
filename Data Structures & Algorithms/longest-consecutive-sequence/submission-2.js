class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
const store = new Set(nums);
        let longest = 0;

        for (const num of store) {
            // Only start counting from the beginning of a sequence
            if (!store.has(num - 1)) {
                let current = num;
                let streak = 1;

                while (store.has(current + 1)) {
                    current++;
                    streak++;
                }

                longest = Math.max(longest, streak);
            }
        }

        return longest;
    }
}
