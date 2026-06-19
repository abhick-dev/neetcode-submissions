class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        const seenObject = {};
        for(let i=0;i<nums.length;i++) {
            let whatweNeed = target - nums[i];
    if (whatweNeed in seenObject) {
    return [seenObject[whatweNeed], i];
}
            seenObject[nums[i]] = i;
        }
    }
}
