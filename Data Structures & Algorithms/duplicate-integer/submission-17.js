class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        const numberList = new Set();
        for(let i=0;i<nums.length;i++){
            if(numberList.has(nums[i])){
                return true;
            }
            numberList.add(nums[i]);
        }
        return false;
    }
}
