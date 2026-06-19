class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const mapping = new Map();
        for(let i=0;i<strs.length;i++) {
            let sorted = strs[i].split('').sort().join('');
            if(!mapping.has(sorted)){
                mapping.set(sorted,[]);
            }
            mapping.get(sorted).push(strs[i]);
        }
        return Array.from(mapping.values());
    }
}
