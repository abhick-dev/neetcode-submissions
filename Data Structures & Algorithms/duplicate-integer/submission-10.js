class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        const record = {};
        for(let i=0;i<nums.length;i++) {
            if(record[nums[i]]) {
                return true;
            }
            record[nums[i]] = true;
        }
        return false;
    }
}
