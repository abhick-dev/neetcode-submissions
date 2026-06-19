class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        let sCount = {};
        let tCount = {};
        if(s.length !== t.length) {
            return false;
        }

        for(let i=0;i<s.length;i++) {
            if(sCount[s[i]]){
                sCount[s[i]] = sCount[s[i]] + 1; 
            } else {
                            sCount[s[i]] = 1; 
            }


            if(tCount[t[i]]){
                tCount[t[i]] = tCount[t[i]] + 1; 
            } else {
      tCount[t[i]] = 1; 
            }
      
        }
        
        for(let key in tCount) {

            if(tCount[key] !== sCount[key]) return false;
        }


        return true;

    }
}
