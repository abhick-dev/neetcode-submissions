class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        let mapped = new Map();
        for(let i=0;i<nums.length;i++) {
            let eachNum = nums[i];
            let count = mapped.get(eachNum) || 0;
            mapped.set(eachNum,count + 1);
    };
    let sorted = Array.from(mapped.entries()).sort((a, b) => b[1] - a[1]);
    return sorted.slice(0, k).map(entry => entry[0]);
}}