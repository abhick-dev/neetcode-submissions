class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if(s.length !== t.length){
            return false;
        }

        let countApperance = {};

        for(let i=0;i<s.length;i++){
            const sCurrentValue = s[i];
            const tCurrentValue = t[i]; 

            if(countApperance[sCurrentValue]){
                countApperance[sCurrentValue] += 1;

                
            } else {
                countApperance[sCurrentValue] = 1;
            }

            if(countApperance[tCurrentValue]){
                countApperance[tCurrentValue] -= 1;

                
            } else {
                countApperance[tCurrentValue] = -1;

            }

        }

        for(const eachChar in countApperance) {
            if(countApperance[eachChar] !== 0){
                return false;
            }
        }

        return true;
    }
}
