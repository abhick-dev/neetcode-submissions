class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    removeDuplicates(nums) {
        if (nums.length === 0) return 0;
        const seenDubs = new Set();
        let k = 0;
        for(let i=0;i<nums.length;i++){
            if(seenDubs.has(nums[i])){
                continue;
            }
            seenDubs.add(nums[i]);
            nums[k] = nums[i];
            k++;
        }
        return k;
    }
}
