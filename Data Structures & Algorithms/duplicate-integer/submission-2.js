class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        let eachElmCount = {};

        for(let i=0;i<nums.length;i++) {

            if(eachElmCount[nums[i]]) {
                return true;
            }

            eachElmCount[nums[i]] = true;;
        }

    return false;



    }
}
