class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findMin(nums) {
    let left = 0;
    let right = nums.length - 1;

    while (left < right) {
        const mid = Math.floor((left + right) / 2);

        if (nums[mid] > nums[right]) {
            // Minimum must be to the right of mid
            left = mid + 1;
        } else {
            // Mid could be the minimum
            right = mid;
        }
    }

    return nums[left];
    }
}
