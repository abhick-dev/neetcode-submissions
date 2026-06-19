class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        let storeDubs = new Set();
        for(let i=0;i<nums.length;i++) {
            if(storeDubs.has(nums[i])){
                return true;
            } else {
                storeDubs.add(nums[i]);
            }
        }
        console.log(storeDubs,'a')
          return false;
    }
}
