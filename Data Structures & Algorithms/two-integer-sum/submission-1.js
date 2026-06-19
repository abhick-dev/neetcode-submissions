class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        let mapped = new Map();


        for(let i=0;i<nums.length;i++) {
            let wantedValue = target - nums[i];

            if(mapped.has(wantedValue)){
                return [mapped.get(wantedValue),i]
            }
            mapped.set(nums[i],i);
        }

        return [];
    }
}
