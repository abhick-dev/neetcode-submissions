class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    twoSum(numbers, target) {
        let left = 0;
        let right = numbers.length - 1;


        while(left < right){

            const isTarget = numbers[right] + numbers[left];

            if(isTarget > target){
                right--;
            } else if (isTarget < target){
                left++;
            } else if (isTarget === target){
                return [left + 1, right + 1]
            }

        }

        return [];
    }
}
