class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if(s.length !== t.length) return false;
        let eachCharCountS = {};
        let eachCharCountT= {};
        for(let eachChar of s) {
            eachCharCountS[eachChar] = (eachCharCountS[eachChar] || 0) + 1;
        }
        for(let eachChar of t) {
            eachCharCountT[eachChar] = (eachCharCountT[eachChar] || 0) + 1;
        }

        for(let char in eachCharCountT){
            if(eachCharCountS[char] !== eachCharCountT[char]) return false;
        }
        return true;
    }
}
